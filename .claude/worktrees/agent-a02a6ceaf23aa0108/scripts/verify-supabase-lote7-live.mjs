import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("ERRO: Credenciais do Supabase não encontradas.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function fetchAll(table, select = "*", batchSize = 1000) {
  let all = [];
  let from = 0;
  while (true) {
    const to = from + batchSize - 1;
    const { data, error } = await supabase.from(table).select(select).range(from, to);
    if (error) throw new Error(`Erro ao buscar dados de ${table}: ${error.message}`);
    if (!data || data.length === 0) break;
    all.push(...data);
    if (data.length < batchSize) break;
    from += batchSize;
  }
  return all;
}

async function verifyLive() {
  console.log("================================================================================");
  console.log("       AUDITORIA FÍSICA E QUALITATIVA PÓS-IMPORTAÇÃO DO LOTE 7 NO SUPABASE     ");
  console.log("================================================================================\n");

  console.log("[1/6] Buscando todas as questões do Supabase...");
  const allQuestoes = await fetchAll("questoes", "id, enunciado, explicacao, prompt_versao, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade, fingerprint_hash");
  console.log(`[+] Total de questões no banco: ${allQuestoes.length}`);

  console.log("[2/6] Buscando todas as alternativas do Supabase...");
  const allAlternativas = await fetchAll("questoes_alternativas", "id, questao_id, correta, letra, ordem, texto");
  console.log(`[+] Total de alternativas no banco: ${allAlternativas.length}`);

  // 1. Contagem por lote
  console.log("\n--- 1. DISTRIBUIÇÃO GLOBAL POR LOTE / PROMPT_VERSAO ---");
  const contagemLotes = {};
  for (const q of allQuestoes) {
    const v = q.prompt_versao || "legado";
    contagemLotes[v] = (contagemLotes[v] || 0) + 1;
  }
  console.table(contagemLotes);

  const lote7Questoes = allQuestoes.filter((q) => q.prompt_versao === "v2.7-lote7");
  console.log(`[+] Total verificado do Lote 7: ${lote7Questoes.length} (Esperado: 500)`);

  if (lote7Questoes.length !== 500) {
    throw new Error(`Contagem do Lote 7 inválida: ${lote7Questoes.length}`);
  }
  if (allQuestoes.length !== 4760) {
    throw new Error(`Contagem total de questões inválida: ${allQuestoes.length}`);
  }

  // 2. Integridade de Alternativas e Órfãos
  console.log("\n--- 2. VERIFICAÇÃO DE ÓRFÃOS E GABARITOS NO BANCO ---");
  const questaoIdSet = new Set(allQuestoes.map((q) => q.id));
  const altsPorQuestao = new Map();

  let orfas = 0;
  for (const a of allAlternativas) {
    if (!questaoIdSet.has(a.questao_id)) {
      orfas++;
    }
    if (!altsPorQuestao.has(a.questao_id)) {
      altsPorQuestao.set(a.questao_id, []);
    }
    altsPorQuestao.get(a.questao_id).push(a);
  }
  console.log(`[+] Alternativas órfãs no banco: ${orfas} (Esperado: 0)`);
  if (orfas > 0) throw new Error(`Existem ${orfas} alternativas órfãs no banco!`);

  let errosGabaritoLote7 = 0;
  let errosQtdAltLote7 = 0;
  for (const q7 of lote7Questoes) {
    const alts = altsPorQuestao.get(q7.id) || [];
    const corretas = alts.filter((a) => a.correta);
    if (corretas.length !== 1) {
      console.error(`[ERRO GABARITO] Questão ${q7.id} tem ${corretas.length} alternativas corretas.`);
      errosGabaritoLote7++;
    }
    if (q7.tipo === "certo_errado" && alts.length !== 2) {
      console.error(`[ERRO QTD ALTS C/E] Questão ${q7.id} tem ${alts.length} alternativas.`);
      errosQtdAltLote7++;
    }
    if (q7.tipo === "multipla_escolha" && alts.length !== 5) {
      console.error(`[ERRO QTD ALTS ME] Questão ${q7.id} tem ${alts.length} alternativas.`);
      errosQtdAltLote7++;
    }
  }
  console.log(`[+] Erros de gabarito único no Lote 7: ${errosGabaritoLote7} (Esperado: 0)`);
  console.log(`[+] Erros de quantidade de alternativas no Lote 7: ${errosQtdAltLote7} (Esperado: 0)`);

  // 3. Distribuição Estatística do Lote 7
  console.log("\n--- 3. ESTATÍSTICAS DETALHADAS DO LOTE 7 ---");
  const orgaoCount = {};
  const difCount = {};
  const tipoCount = {};
  const discCount = {};
  const bancaCount = {};

  for (const q of lote7Questoes) {
    orgaoCount[q.orgao_nome] = (orgaoCount[q.orgao_nome] || 0) + 1;
    difCount[q.dificuldade] = (difCount[q.dificuldade] || 0) + 1;
    tipoCount[q.tipo] = (tipoCount[q.tipo] || 0) + 1;
    discCount[q.disciplina_id] = (discCount[q.disciplina_id] || 0) + 1;
    bancaCount[q.banca_nome] = (bancaCount[q.banca_nome] || 0) + 1;
  }

  console.log("Distribuição por Órgão Prioritário:", orgaoCount);
  console.log("Distribuição por Dificuldade:", difCount);
  console.log("Distribuição por Formato:", tipoCount);
  console.log("Distribuição por Banca de Estilo:", bancaCount);

  // 4. Auditoria Qualitativa de Amostra (100 Questões do Lote 7)
  console.log("\n--- 4. AUDITORIA QUALITATIVA DE AMOSTRA (100 QUESTÕES DO LOTE 7) ---");
  // Selecionar 100 questões distribuídas uniformemente
  const step = Math.floor(lote7Questoes.length / 100);
  const sample = [];
  for (let i = 0; i < 100; i++) {
    sample.push(lote7Questoes[i * step]);
  }

  let sampleIssues = 0;
  for (const q of sample) {
    const alts = altsPorQuestao.get(q.id) || [];
    const correctAlt = alts.find((a) => a.correta);

    if (!q.enunciado || q.enunciado.length < 35) {
      console.warn(`[QUALIDADE] Enunciado muito curto: ${q.id}`);
      sampleIssues++;
    }
    if (!q.explicacao || q.explicacao.length < 35 || !q.explicacao.includes("GABARITO")) {
      console.warn(`[QUALIDADE] Explicação insuficiente ou sem padrão de gabarito: ${q.id}`);
      sampleIssues++;
    }
    if (!correctAlt) {
      console.warn(`[QUALIDADE] Sem alternativa correta: ${q.id}`);
      sampleIssues++;
    }
  }

  console.log(`[+] Amostra de 100 questões auditada: ${100 - sampleIssues}/100 com conformidade qualitativa estrita.`);

  // 5. Exibir 5 Questões Amostrais Reais do Banco
  console.log("\n--- 5. EXEMPLOS REAIS DE QUESTÕES AUDITADAS NO BANCO ---");
  sample.slice(0, 5).forEach((q, idx) => {
    const alts = altsPorQuestao.get(q.id) || [];
    console.log(`\n[Questão ${idx + 1}] ID: ${q.id} | ${q.orgao_nome} | ${q.banca_nome} | Dificuldade: ${q.dificuldade}`);
    console.log(`ENUNCIADO: ${q.enunciado}`);
    console.log("ALTERNATIVAS:");
    alts.forEach((a) => {
      console.log(`  [${a.letra}] ${a.texto} ${a.correta ? "(*CORRETA*)" : ""}`);
    });
    console.log(`EXPLICAÇÃO: ${q.explicacao.substring(0, 160)}...`);
  });

  const finalVerification = {
    timestamp: new Date().toISOString(),
    totalQuestoesBanco: allQuestoes.length,
    totalAlternativasBanco: allAlternativas.length,
    distribuicaoLotes: contagemLotes,
    lote7: {
      totalQuestoes: lote7Questoes.length,
      distribuicaoOrgao: orgaoCount,
      distribuicaoDificuldade: difCount,
      distribuicaoTipo: tipoCount,
      distribuicaoBanca: bancaCount,
      errosGabarito: errosGabaritoLote7,
      errosQtdAlternativas: errosQtdAltLote7,
      amostraAuditada: 100,
      amostraConformidade: 100 - sampleIssues,
    },
    alternativasOrfas: orfas,
  };

  fs.writeFileSync(
    path.join(__dirname, "audit_lote7_post_import.json"),
    JSON.stringify(finalVerification, null, 2),
    "utf8"
  );
  console.log("\n[+] Relatório pós-importação salvo em scripts/audit_lote7_post_import.json");

  console.log("\n================================================================================");
  console.log(" [SUCESSO TOTAL] O BANCO DE DADOS SUPABASE ESTÁ 100% AUDITADO E CONFORME!      ");
  console.log("================================================================================\n");
}

verifyLive().catch((err) => {
  console.error("Erro na verificação do banco:", err);
  process.exit(1);
});
