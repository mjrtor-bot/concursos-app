import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";

const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  for (const line of envContent.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        const key = trimmed.substring(0, idx).trim();
        const val = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
        process.env[key] = val;
      }
    }
  }
}

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  console.log("=== INICIANDO AUDITORIA PROFUNDA DE TODAS AS QUESTÕES NO SUPABASE ===");

  // 1. Pegar disciplinas e assuntos
  const { data: disciplinas } = await supabase.from("disciplinas").select("id, nome");
  const { data: assuntos } = await supabase.from("assuntos").select("id, nome, disciplina_id");

  const discMap = new Map((disciplinas || []).map(d => [d.id, d.nome]));
  const assuntoMap = new Map((assuntos || []).map(a => [a.id, a.nome]));
  const validDiscIds = new Set((disciplinas || []).map(d => d.id));
  const validAssuntoIds = new Set((assuntos || []).map(a => a.id));

  // 2. Buscar todas as questões com paginação
  let allQuestoes = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data: qChunk, error: qErr } = await supabase
      .from("questoes")
      .select("*")
      .range(page * pageSize, (page + 1) * pageSize - 1);

    if (qErr) throw qErr;
    if (!qChunk || qChunk.length === 0) break;
    allQuestoes.push(...qChunk);
    page++;
    if (qChunk.length < pageSize) break;
  }
  console.log(`Total de Questões lidas: ${allQuestoes.length}`);

  // 3. Buscar todas as alternativas com paginação
  let allAlternativas = [];
  page = 0;
  while (true) {
    const { data: aChunk, error: aErr } = await supabase
      .from("questoes_alternativas")
      .select("*")
      .range(page * pageSize, (page + 1) * pageSize - 1);

    if (aErr) throw aErr;
    if (!aChunk || aChunk.length === 0) break;
    allAlternativas.push(...aChunk);
    page++;
    if (aChunk.length < pageSize) break;
  }
  console.log(`Total de Alternativas lidas: ${allAlternativas.length}`);

  // 4. Mapear alternativas por questao_id
  const altsPorQuestao = new Map();
  for (const alt of allAlternativas) {
    if (!altsPorQuestao.has(alt.questao_id)) {
      altsPorQuestao.set(alt.questao_id, []);
    }
    altsPorQuestao.get(alt.questao_id).push(alt);
  }

  // 5. Categorização e Detecção de Problemas
  const classification = {
    OK: [],
    CORRIGIR: [],
    DESATUALIZADA: [],
    QUARENTENA: []
  };

  const problemasPorLote = {};
  const problemasPorDisciplina = {};
  const problemasPorTipo = {};
  const problemasPorSeveridade = { BAIXA: 0, MEDIA: 0, ALTA: 0, CRITICA: 0 };
  const exemplosProblemas = [];

  // Padrões proibidos / suspeitos
  const padroesCriticos = [
    /identificador de controle/i,
    /narrativa de controle/i,
    /b\d+-leg\d+-\d+/i,
    /b\d+-[a-z]+\d+-\d+/i,
    /ato\s+xxx/i,
    /lei\s+xxx/i,
    /artigo\s+xxx/i,
    /município\s+xxx/i,
    /estado\s+xxx/i,
    /cidade\s+xxx/i,
    /placeholder/i,
    /lorem ipsum/i,
    /todo:/i,
    /undefined/,
    /\[inserir/i,
    /\[preencher/i
  ];

  const padroesFiller = [
    /é cediço que/i,
    /consabido é que/i,
    /no que tange a/i
  ];

  for (const q of allQuestoes) {
    const lote = q.prompt_versao || "legado_sem_lote";
    const discNome = discMap.get(q.disciplina_id) || "SEM_DISCIPLINA";
    const alts = altsPorQuestao.get(q.id) || [];

    if (!problemasPorLote[lote]) {
      problemasPorLote[lote] = { total: 0, OK: 0, CORRIGIR: 0, DESATUALIZADA: 0, QUARENTENA: 0, problemas: [] };
    }
    problemasPorLote[lote].total++;

    if (!problemasPorDisciplina[discNome]) {
      problemasPorDisciplina[discNome] = { total: 0, OK: 0, CORRIGIR: 0, DESATUALIZADA: 0, QUARENTENA: 0, problemas: [] };
    }
    problemasPorDisciplina[discNome].total++;

    let status = "OK";
    let severidade = "BAIXA";
    const issues = [];

    // [A] Integridade Estrutural e de Chaves Estrangeiras
    if (!q.disciplina_id || !validDiscIds.has(q.disciplina_id)) {
      issues.push({ tipo: "DISCIPLINA_INVALIDA", desc: `Disciplina ausente ou não mapeada: ${q.disciplina_id}`, sev: "CRITICA" });
    }
    if (!q.assunto_id || !validAssuntoIds.has(q.assunto_id)) {
      issues.push({ tipo: "ASSUNTO_INVALIDO", desc: `Assunto ausente ou não mapeado: ${q.assunto_id}`, sev: "CRITICA" });
    }

    // [B] Gabaritos e Alternativas
    if (alts.length === 0) {
      issues.push({ tipo: "SEM_ALTERNATIVAS", desc: "Questão sem nenhuma alternativa vinculada.", sev: "CRITICA" });
    } else {
      const corretas = alts.filter(a => a.correta).length;
      if (corretas === 0) {
        issues.push({ tipo: "SEM_GABARITO", desc: "Nenhuma alternativa marcada como correta.", sev: "CRITICA" });
      } else if (corretas > 1) {
        issues.push({ tipo: "MULTIPLOS_GABARITOS", desc: `Possui ${corretas} alternativas marcadas como corretas.`, sev: "CRITICA" });
      }

      for (const a of alts) {
        if (!a.texto || a.texto.trim().length === 0) {
          issues.push({ tipo: "ALTERNATIVA_VAZIA", desc: `Alternativa ${a.letra} com texto vazio.`, sev: "ALTA" });
        }
      }
    }

    // [C] Enunciado e Explicação
    if (!q.enunciado || q.enunciado.trim().length < 15) {
      issues.push({ tipo: "ENUNCIADO_TRUNCADO", desc: "Enunciado vazio ou muito curto (<15 caracteres).", sev: "CRITICA" });
    }
    if (!q.explicacao || q.explicacao.trim().length < 15) {
      issues.push({ tipo: "EXPLICACAO_GENERICA_OU_VAZIA", desc: "Explicação vazia ou truncada.", sev: "ALTA" });
    }

    // [D] Detecção de Placeholders, Códigos de Controle e Tokens Artificiais
    for (const pat of padroesCriticos) {
      if (q.enunciado && pat.test(q.enunciado)) {
        issues.push({ tipo: "PLACEHOLDER_NO_ENUNCIADO", desc: `Padrão suspeito no enunciado: ${pat}`, sev: "CRITICA" });
      }
      if (q.explicacao && pat.test(q.explicacao)) {
        issues.push({ tipo: "PLACEHOLDER_NA_EXPLICACAO", desc: `Padrão suspeito na explicação: ${pat}`, sev: "ALTA" });
      }
      for (const a of alts) {
        if (a.texto && pat.test(a.texto)) {
          issues.push({ tipo: "PLACEHOLDER_NA_ALTERNATIVA", desc: `Padrão suspeito na alternativa ${a.letra}: ${pat}`, sev: "CRITICA" });
        }
      }
    }

    // [E] Checagem de Desatualização Normativa
    if (q.desatualizada) {
      status = "DESATUALIZADA";
      issues.push({ tipo: "MARCADA_DESATUALIZADA", desc: "Questão já sinalizada como desatualizada no banco.", sev: "MEDIA" });
    } else if (q.enunciado && (/lei 8\.666/i.test(q.enunciado) && !/14\.133/i.test(q.enunciado) && !/histórico/i.test(q.enunciado))) {
      issues.push({ tipo: "LEGISLACAO_REVOGADA", desc: "Menção exclusiva à Lei 8.666/93 sem contextualização com a Lei 14.133/21.", sev: "MEDIA" });
    }

    // [F] Consistência de Incompatibilidade de Gabarito no Texto
    if (q.tipo === "certo_errado" && alts.length === 2 && q.explicacao) {
      const altCorreta = alts.find(a => a.correta);
      const isGabaritoCerto = altCorreta?.letra === "C" || altCorreta?.texto?.toLowerCase().startsWith("certo");
      const explicacaoDizIncorreto = /item (está )?errado|assertiva (está )?incorreta|afirmação (está )?falsa|gabarito:? errado/i.test(q.explicacao);
      const explicacaoDizCorreto = /item (está )?correto|assertiva (está )?correta|afirmação (está )?verdadeira|gabarito:? certo/i.test(q.explicacao);

      if (isGabaritoCerto && explicacaoDizIncorreto && !explicacaoDizCorreto) {
        issues.push({ tipo: "INCOMPATIBILIDADE_GABARITO_EXPLICACAO", desc: "Alternativa correta é 'Certo' mas explicação afirma que o item está 'Errado'.", sev: "CRITICA" });
      } else if (!isGabaritoCerto && explicacaoDizCorreto && !explicacaoDizIncorreto) {
        issues.push({ tipo: "INCOMPATIBILIDADE_GABARITO_EXPLICACAO", desc: "Alternativa correta é 'Errado' mas explicação afirma que o item está 'Correto'.", sev: "CRITICA" });
      }
    }

    // Determinar Classificação
    if (issues.length > 0) {
      const hasCritica = issues.some(i => i.sev === "CRITICA");
      const hasAlta = issues.some(i => i.sev === "ALTA");
      const hasDesatualizada = issues.some(i => i.tipo.includes("DESATUALIZADA") || i.tipo.includes("REVOGADA"));

      if (hasCritica) {
        status = "QUARENTENA";
        severidade = "CRITICA";
      } else if (hasDesatualizada) {
        status = "DESATUALIZADA";
        severidade = "MEDIA";
      } else if (hasAlta) {
        status = "CORRIGIR";
        severidade = "ALTA";
      } else {
        status = "CORRIGIR";
        severidade = "BAIXA";
      }

      for (const issue of issues) {
        problemasPorTipo[issue.tipo] = (problemasPorTipo[issue.tipo] || 0) + 1;
        problemasPorSeveridade[issue.sev] = (problemasPorSeveridade[issue.sev] || 0) + 1;
      }

      if (exemplosProblemas.length < 25) {
        exemplosProblemas.push({
          id: q.id,
          lote,
          disciplina: discNome,
          status,
          severidade,
          issues,
          enunciado: q.enunciado?.substring(0, 150) + "...",
          explicacao: q.explicacao?.substring(0, 150) + "..."
        });
      }
    }

    classification[status].push(q.id);
    problemasPorLote[lote][status]++;
    problemasPorDisciplina[discNome][status]++;
  }

  console.log("\n--- RESULTADO GERAL DA CLASSIFICAÇÃO DAS QUESTÕES ---");
  console.log(`Total de Questões Auditadas: ${allQuestoes.length}`);
  console.log(`OK: ${classification.OK.length} (${((classification.OK.length / allQuestoes.length) * 100).toFixed(2)}%)`);
  console.log(`CORRIGIR: ${classification.CORRIGIR.length} (${((classification.CORRIGIR.length / allQuestoes.length) * 100).toFixed(2)}%)`);
  console.log(`DESATUALIZADA: ${classification.DESATUALIZADA.length} (${((classification.DESATUALIZADA.length / allQuestoes.length) * 100).toFixed(2)}%)`);
  console.log(`QUARENTENA: ${classification.QUARENTENA.length} (${((classification.QUARENTENA.length / allQuestoes.length) * 100).toFixed(2)}%)`);

  console.log("\n--- RESUMO POR SEVERIDADE DE PROBLEMAS ---");
  console.table(problemasPorSeveridade);

  console.log("\n--- RESUMO POR TIPO DE PROBLEMA ---");
  console.table(problemasPorTipo);

  console.log("\n--- RESUMO POR LOTE ---");
  console.table(problemasPorLote);

  console.log("\n--- RESUMO POR DISCIPLINA ---");
  console.table(problemasPorDisciplina);

  const report = {
    totalQuestoes: allQuestoes.length,
    totalAlternativas: allAlternativas.length,
    classificacaoGeral: {
      OK: classification.OK.length,
      CORRIGIR: classification.CORRIGIR.length,
      DESATUALIZADA: classification.DESATUALIZADA.length,
      QUARENTENA: classification.QUARENTENA.length
    },
    problemasPorSeveridade,
    problemasPorTipo,
    problemasPorLote,
    problemasPorDisciplina,
    exemplosProblemas
  };

  fs.writeFileSync(path.join(process.cwd(), "scripts/audit_7260_deep_report.json"), JSON.stringify(report, null, 2), "utf8");
  console.log("\nRelatório completo salvo em scripts/audit_7260_deep_report.json");
}

main().catch(err => {
  console.error("Erro fatal:", err);
  process.exit(1);
});
