import fs from "node:fs";
import path from "node:path";

async function run() {
  console.log("===============================================================================");
  console.log("FASE 1 — AUDITORIA GLOBAL DE INTEGRIDADE DE 7.760 QUESTÕES");
  console.log("===============================================================================");

  const backupPath = path.resolve(process.cwd(), "scripts/backup_pre_correcao_integridade_questoes.json");
  if (!fs.existsSync(backupPath)) {
    console.error("ERRO: Snapshot não encontrado em scripts/backup_pre_correcao_integridade_questoes.json");
    process.exit(1);
  }

  const snapshot = JSON.parse(fs.readFileSync(backupPath, "utf8"));
  const questoes = snapshot.questoes;
  const alternativas = snapshot.alternativas;

  console.log(`Carregadas ${questoes.length} questões e ${alternativas.length} alternativas do snapshot.`);

  // Load disciplinas and assuntos
  const discDist = snapshot.metadata.distributionByDisciplina;
  const assDist = snapshot.metadata.distributionByAssunto;

  // Let's also read env to fetch disciplinas and assuntos relation if needed
  const envPath = path.resolve(process.cwd(), ".env.local");
  let supabaseUrl = snapshot.metadata.supabaseUrl;
  let supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf8");
    for (const line of envContent.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith("#")) {
        const idx = trimmed.indexOf("=");
        if (idx !== -1) {
          const key = trimmed.substring(0, idx).trim();
          const val = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
          if (key === "SUPABASE_SERVICE_ROLE_KEY") supabaseKey = val;
          if (key === "NEXT_PUBLIC_SUPABASE_URL") supabaseUrl = val;
        }
      }
    }
  }

  // Group alts by questao_id
  const altsByQ = new Map();
  for (const alt of alternativas) {
    if (!altsByQ.has(alt.questao_id)) {
      altsByQ.set(alt.questao_id, []);
    }
    altsByQ.get(alt.questao_id).push(alt);
  }

  // We will inspect each question across 12 criteria
  const auditReport = {
    metadata: {
      timestamp: new Date().toISOString(),
      totalQuestoes: questoes.length,
      totalAlternativas: alternativas.length,
    },
    resumoProblemas: {
      semAlternativas: 0,
      qtdInvalidaAlternativas: 0,
      semGabaritoCorreto: 0,
      multiplosGabaritosCorretos: 0,
      alternativaTextoVazio: 0,
      disciplinaInvalidaOuNula: 0,
      assuntoInvalidoOuNulo: 0,
      enunciadoVazio: 0,
      explicacaoVazia: 0,
      placeholdersDetectados: 0,
      divergenciasGabaritoExplicacao: 0,
      totalQuestoesComInconsistencia: 0
    },
    inconsistenciasPorLote: {},
    inconsistenciasPorDisciplina: {},
    questoesInconsistentes: []
  };

  // Placeholders regex
  const placeholderRegex = /(\[mock\]|\[placeholder\]|\bTODO\b|\blorem ipsum\b|lorem_ipsum|\bnull\b\s*-\s*teste|\bundefined\b)/i;

  for (let i = 0; i < questoes.length; i++) {
    const q = questoes[i];
    const alts = altsByQ.get(q.id) || [];
    const versao = q.prompt_versao || "SEM_VERSAO";
    const dNome = q.disciplina_nome || q.disciplina_id;

    const problemasQuestao = [];

    // 1. Existência de alternativas
    if (alts.length === 0) {
      problemasQuestao.push({ tipo: "SEM_ALTERNATIVAS", desc: "Questão não possui alternativas associadas." });
      auditReport.resumoProblemas.semAlternativas++;
    }

    // 2. Quantidade válida de alternativas (2, 4 ou 5)
    if (alts.length > 0 && alts.length !== 2 && alts.length !== 4 && alts.length !== 5) {
      problemasQuestao.push({ tipo: "QTD_INVALIDA_ALTERNATIVAS", desc: `Questão possui ${alts.length} alternativas (esperado 2, 4 ou 5).` });
      auditReport.resumoProblemas.qtdInvalidaAlternativas++;
    }

    // 3. Exatamente uma alternativa marcada como correta
    const corretas = alts.filter(a => a.correta);
    if (alts.length > 0 && corretas.length === 0) {
      problemasQuestao.push({ tipo: "SEM_GABARITO_CORRETO", desc: "Nenhuma alternativa está marcada como correta (correta = true)." });
      auditReport.resumoProblemas.semGabaritoCorreto++;
    } else if (corretas.length > 1) {
      problemasQuestao.push({ tipo: "MULTIPLOS_GABARITOS_CORRETOS", desc: `Existem ${corretas.length} alternativas marcadas como corretas.` });
      auditReport.resumoProblemas.multiplosGabaritosCorretos++;
    }

    // 4. Ausência de alternativa vazia
    for (const alt of alts) {
      if (!alt.texto || alt.texto.trim() === "") {
        problemasQuestao.push({ tipo: "ALTERNATIVA_TEXTO_VAZIO", desc: `Alternativa (${alt.letra || alt.ordem}) possui texto vazio.` });
        auditReport.resumoProblemas.alternativaTextoVazio++;
      }
    }

    // 5. Disciplina válida
    if (!q.disciplina_id) {
      problemasQuestao.push({ tipo: "DISCIPLINA_NULA", desc: "Campo disciplina_id está nulo." });
      auditReport.resumoProblemas.disciplinaInvalidaOuNula++;
    }

    // 6. Assunto válido
    if (!q.assunto_id) {
      problemasQuestao.push({ tipo: "ASSUNTO_NULO", desc: "Campo assunto_id está nulo." });
      auditReport.resumoProblemas.assuntoInvalidoOuNulo++;
    }

    // 8. Enunciado não vazio
    if (!q.enunciado || q.enunciado.trim() === "") {
      problemasQuestao.push({ tipo: "ENUNCIADO_VAZIO", desc: "Enunciado da questão está vazio." });
      auditReport.resumoProblemas.enunciadoVazio++;
    }

    // 9. Explicação não vazia
    if (!q.explicacao || q.explicacao.trim() === "") {
      problemasQuestao.push({ tipo: "EXPLICACAO_VAZIA", desc: "Explicação da questão está vazia." });
      auditReport.resumoProblemas.explicacaoVazia++;
    }

    // 10. Placeholders
    if (placeholderRegex.test(q.enunciado || "") || placeholderRegex.test(q.explicacao || "")) {
      problemasQuestao.push({ tipo: "PLACEHOLDER_DETECTADO", desc: "Enunciado ou explicação contém texto de mock/placeholder/TODO." });
      auditReport.resumoProblemas.placeholdersDetectados++;
    }

    // 11 & 12. Coerência entre Gabarito Estruturado e Explicação
    const corretaAlt = corretas[0];
    const corretaLetra = corretaAlt ? (corretaAlt.letra || corretaAlt.texto || "").trim() : "";
    const isCE = q.tipo === "certo_errado" || alts.length === 2;
    const expl = (q.explicacao || "").trim();
    const explLower = expl.toLowerCase();

    let divergenciaDetectada = false;
    let detalheDivergencia = "";
    let gabaritoIndicadoNaExplicacao = "";

    if (isCE && corretaAlt) {
      const altIsCerto = /certo/i.test(corretaAlt.texto || corretaAlt.letra || "");
      const altIsErrado = /errado/i.test(corretaAlt.texto || corretaAlt.letra || "");

      // Check header or explicit assertion in explanation
      const explStartsOrStatesCerto = /(?:gabarito|resposta|assertiva|afirmativa|item|proposição)\s*(?:é|:|está)?\s*(?:certo|corret[ao]|verdadeir[ao])/i.test(explLower);
      const explStartsOrStatesErrado = /(?:gabarito|resposta|assertiva|afirmativa|item|proposição)\s*(?:é|:|está)?\s*(?:errad[ao]|incorret[ao]|fals[ao])|o\s*erro\s*está/i.test(explLower);

      // Check strict GABARITO: CERTO / GABARITO: ERRADO
      const matchGabCerto = /gabarito:\s*certo/i.test(explLower);
      const matchGabErrado = /gabarito:\s*errado/i.test(explLower);

      if (altIsCerto && matchGabErrado && !matchGabCerto) {
        divergenciaDetectada = true;
        gabaritoIndicadoNaExplicacao = "ERRADO";
        detalheDivergencia = `Alternativa marcada como CERTO, mas a explicação declara explicitamente 'GABARITO: ERRADO'.`;
      } else if (altIsErrado && matchGabCerto && !matchGabErrado) {
        divergenciaDetectada = true;
        gabaritoIndicadoNaExplicacao = "CERTO";
        detalheDivergencia = `Alternativa marcada como ERRADO, mas a explicação declara explicitamente 'GABARITO: CERTO'.`;
      }
    } else if (!isCE && corretaAlt) {
      // Múltipla escolha: check if explanation states "Gabarito: Letra X" or "Gabarito: X"
      const matchLetra = expl.match(/gabarito:\s*(?:letra\s*)?([a-e])\b/i) || expl.match(/resposta:\s*(?:letra\s*)?([a-e])\b/i);
      if (matchLetra && corretaAlt.letra) {
        const letraExpl = matchLetra[1].toUpperCase();
        const letraReal = corretaAlt.letra.toUpperCase();
        if (letraExpl !== letraReal) {
          divergenciaDetectada = true;
          gabaritoIndicadoNaExplicacao = `Letra ${letraExpl}`;
          detalheDivergencia = `Alternativa marcada como '${letraReal}', mas a explicação declara 'GABARITO: ${letraExpl}'.`;
        }
      }
    }

    if (divergenciaDetectada) {
      problemasQuestao.push({
        tipo: "DIVERGENCIA_GABARITO_EXPLICACAO",
        desc: detalheDivergencia,
        gabaritoEstruturado: corretaLetra,
        gabaritoExplicacao: gabaritoIndicadoNaExplicacao
      });
      auditReport.resumoProblemas.divergenciasGabaritoExplicacao++;
    }

    if (problemasQuestao.length > 0) {
      auditReport.resumoProblemas.totalQuestoesComInconsistencia++;
      auditReport.inconsistenciasPorLote[versao] = (auditReport.inconsistenciasPorLote[versao] || 0) + 1;
      auditReport.inconsistenciasPorDisciplina[dNome] = (auditReport.inconsistenciasPorDisciplina[dNome] || 0) + 1;

      auditReport.questoesInconsistentes.push({
        id: q.id,
        prompt_versao: versao,
        disciplina_id: q.disciplina_id,
        disciplina_nome: q.disciplina_nome,
        assunto_id: q.assunto_id,
        assunto_nome: q.assunto_nome,
        enunciado: q.enunciado,
        gabaritoEstruturado: corretaLetra,
        explicacao: q.explicacao,
        problemas: problemasQuestao
      });
    }
  }

  console.log("\n--- RESULTADOS DA AUDITORIA GLOBAL ---");
  console.log(`Total de Questões Auditadas: ${questoes.length}`);
  console.log(`Questões sem Alternativas: ${auditReport.resumoProblemas.semAlternativas}`);
  console.log(`Questões com Qtd Inválida de Alts: ${auditReport.resumoProblemas.qtdInvalidaAlternativas}`);
  console.log(`Questões sem Gabarito Correto: ${auditReport.resumoProblemas.semGabaritoCorreto}`);
  console.log(`Questões com Múltiplos Gabaritos: ${auditReport.resumoProblemas.multiplosGabaritosCorretos}`);
  console.log(`Alternativas com Texto Vazio: ${auditReport.resumoProblemas.alternativaTextoVazio}`);
  console.log(`Disciplinas Inválidas/Nulas: ${auditReport.resumoProblemas.disciplinaInvalidaOuNula}`);
  console.log(`Assuntos Inválidos/Nulos: ${auditReport.resumoProblemas.assuntoInvalidoOuNulo}`);
  console.log(`Enunciados Vazios: ${auditReport.resumoProblemas.enunciadoVazio}`);
  console.log(`Explicações Vazias: ${auditReport.resumoProblemas.explicacaoVazia}`);
  console.log(`Placeholders/Mocks Detectados: ${auditReport.resumoProblemas.placeholdersDetectados}`);
  console.log(`Divergências Gabarito x Explicação: ${auditReport.resumoProblemas.divergenciasGabaritoExplicacao}`);
  console.log(`TOTAL DE QUESTÕES COM INCONSISTÊNCIA: ${auditReport.resumoProblemas.totalQuestoesComInconsistencia}`);

  console.log("\nInconsistências por Versão/Lote:");
  console.log(auditReport.inconsistenciasPorLote);

  // Write JSON report
  const jsonPath = path.resolve(process.cwd(), "scripts/audit_question_integrity_global.json");
  fs.writeFileSync(jsonPath, JSON.stringify(auditReport, null, 2));
  console.log(`\nSalvo relatório JSON em: ${jsonPath}`);

  // Generate Markdown Human Report
  let md = `# RELATÓRIO DE AUDITORIA GLOBAL DE INTEGRIDADE PEDAGÓGICA (7.760 QUESTÕES)

**Data da Auditoria:** ${auditReport.metadata.timestamp}
**Total de Questões Auditadas:** ${auditReport.metadata.totalQuestoes}
**Total de Alternativas Auditadas:** ${auditReport.metadata.totalAlternativas}
**Total de Questões com Inconsistência:** ${auditReport.resumoProblemas.totalQuestoesComInconsistencia}

---

## 1. Quadro Resumo dos 12 Critérios de Integridade

| Critério de Integridade | Status / Quantidade de Inconsistências |
| :--- | :---: |
| 1. Existência de alternativas associadas | **${auditReport.resumoProblemas.semAlternativas === 0 ? "0 (100% íntegro)" : auditReport.resumoProblemas.semAlternativas}** |
| 2. Quantidade válida de alternativas (2, 4 ou 5) | **${auditReport.resumoProblemas.qtdInvalidaAlternativas === 0 ? "0 (100% íntegro)" : auditReport.resumoProblemas.qtdInvalidaAlternativas}** |
| 3. Exatamente UMA alternativa marcada como correta | **${auditReport.resumoProblemas.semGabaritoCorreto + auditReport.resumoProblemas.multiplosGabaritosCorretos === 0 ? "0 (100% íntegro)" : (auditReport.resumoProblemas.semGabaritoCorreto + auditReport.resumoProblemas.multiplosGabaritosCorretos)}** |
| 4. Ausência de alternativa vazia | **${auditReport.resumoProblemas.alternativaTextoVazio === 0 ? "0 (100% íntegro)" : auditReport.resumoProblemas.alternativaTextoVazio}** |
| 5. Disciplina válida associada | **${auditReport.resumoProblemas.disciplinaInvalidaOuNula === 0 ? "0 (100% íntegro)" : auditReport.resumoProblemas.disciplinaInvalidaOuNula}** |
| 6. Assunto válido associado | **${auditReport.resumoProblemas.assuntoInvalidoOuNulo === 0 ? "0 (100% íntegro)" : auditReport.resumoProblemas.assuntoInvalidoOuNulo}** |
| 7. Enunciado não vazio | **${auditReport.resumoProblemas.enunciadoVazio === 0 ? "0 (100% íntegro)" : auditReport.resumoProblemas.enunciadoVazio}** |
| 8. Explicação não vazia | **${auditReport.resumoProblemas.explicacaoVazia === 0 ? "0 (100% íntegro)" : auditReport.resumoProblemas.explicacaoVazia}** |
| 9. Ausência de placeholders, mocks e TODOs | **${auditReport.resumoProblemas.placeholdersDetectados === 0 ? "0 (100% íntegro)" : auditReport.resumoProblemas.placeholdersDetectados}** |
| 10. Coerência entre Gabarito Estruturado e Explicação | **${auditReport.resumoProblemas.divergenciasGabaritoExplicacao}** |

---

## 2. Inconsistências por Lote / Versão

| Lote / Versão | Quantidade de Inconsistências |
| :--- | :---: |
${Object.entries(auditReport.inconsistenciasPorLote).map(([v, count]) => `| \`${v}\` | **${count}** |`).join("\n")}

---

## 3. Listagem Detalhada das Questões Inconsistentes

`;

  auditReport.questoesInconsistentes.forEach((item, idx) => {
    md += `### [QUESTÃO #${idx + 1}] ID: \`${item.id}\`
- **Lote:** \`${item.prompt_versao}\`
- **Disciplina ID:** \`${item.disciplina_id}\`
- **Assunto ID:** \`${item.assunto_id}\`
- **Gabarito Estruturado Atual:** \`${item.gabaritoEstruturado}\`
- **Problema(s) Detectado(s):**
${item.problemas.map(p => `  - **${p.tipo}**: ${p.desc}`).join("\n")}
- **Enunciado:**
> ${item.enunciado.replace(/\n/g, "\n> ")}
- **Explicação Registrada:**
> ${item.explicacao.replace(/\n/g, "\n> ")}

---
`;
  });

  const mdPath = path.resolve(process.cwd(), "scripts/audit_question_integrity_global.md");
  fs.writeFileSync(mdPath, md);
  console.log(`Salvo relatório Markdown em: ${mdPath}`);
}

run().catch(err => {
  console.error("Erro na Auditoria Global:", err);
  process.exit(1);
});
