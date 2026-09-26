import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env
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

function normalizarTextoCanonico(texto) {
  if (!texto) return "";
  return texto
    .replace(/<[^>]*>/g, " ")
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\r\n\t]+/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function generate3Shingles(text) {
  const norm = normalizarTextoCanonico(text);
  const words = norm.split(' ').filter(Boolean);
  const shingles = new Set();
  if (words.length < 3) {
    if (words.length > 0) shingles.add(words.join(' '));
    return shingles;
  }
  for (let i = 0; i <= words.length - 3; i++) {
    shingles.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  }
  return shingles;
}

function calculateJaccardSimilarity(setA, setB) {
  if (!setA || !setB || setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

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

async function runAudit() {
  console.log("================================================================================");
  console.log("           AUDITORIA FINAL DE DEDUPLICAÇÃO CRUZADA — LOTE 6 vs BANCO           ");
  console.log("================================================================================\n");

  console.log("[1/5] Carregando todas as questões do banco de produção...");
  const allQuestions = await fetchAll("questoes", "id, enunciado, prompt_versao, fingerprint_hash, disciplina_id, assunto_id, banca_nome, orgao_nome, ano, tipo");
  console.log(`[+] Total de questões carregadas do banco: ${allQuestions.length}`);

  console.log("\n[2/5] Carregando todas as alternativas do banco de produção...");
  const allAlternativas = await fetchAll("questoes_alternativas", "id, questao_id, correta, letra, ordem, texto");
  console.log(`[+] Total de alternativas carregadas: ${allAlternativas.length}`);

  // Segmentar questões
  const lote6Questions = allQuestions.filter(q => q.prompt_versao === "v2.6-lote6");
  const previousQuestions = allQuestions.filter(q => q.prompt_versao !== "v2.6-lote6");

  console.log(`\n[+] Questões do Lote 6 (prompt_versao = 'v2.6-lote6'): ${lote6Questions.length}`);
  console.log(`[+] Questões anteriores (Lotes 1 a 5 e legadas): ${previousQuestions.length}`);

  // 1. UUIDs duplicados
  console.log("\n--- 1. VERIFICAÇÃO DE UUIDs DUPLICADOS ---");
  const questionIdMap = new Map();
  const dupQuestionIds = [];
  for (const q of allQuestions) {
    if (questionIdMap.has(q.id)) {
      dupQuestionIds.push({ id: q.id, prompt1: questionIdMap.get(q.id), prompt2: q.prompt_versao });
    } else {
      questionIdMap.set(q.id, q.prompt_versao);
    }
  }
  console.log(`UUIDs duplicados na tabela 'questoes': ${dupQuestionIds.length}`);

  const altIdMap = new Map();
  const dupAltIds = [];
  for (const a of allAlternativas) {
    if (altIdMap.has(a.id)) {
      dupAltIds.push(a.id);
    } else {
      altIdMap.set(a.id, true);
    }
  }
  console.log(`UUIDs duplicados na tabela 'questoes_alternativas': ${dupAltIds.length}`);

  // 2. Fingerprints SHA-256 idênticos
  console.log("\n--- 2. VERIFICAÇÃO DE FINGERPRINTS SHA-256 ---");
  const fingerprintMap = new Map();
  const dupFingerprints = [];
  for (const q of allQuestions) {
    if (!q.fingerprint_hash) continue;
    if (fingerprintMap.has(q.fingerprint_hash)) {
      dupFingerprints.push({
        fingerprint: q.fingerprint_hash,
        q1: fingerprintMap.get(q.fingerprint_hash),
        q2: q.id,
        pv1: fingerprintMap.get(q.fingerprint_hash).prompt_versao,
        pv2: q.prompt_versao
      });
    } else {
      fingerprintMap.set(q.fingerprint_hash, q);
    }
  }
  console.log(`Fingerprints SHA-256 duplicados entre todas as questões: ${dupFingerprints.length}`);

  // 3. Cruzamento Textual Jaccard 3-shingles: Lote 6 vs Questões Anteriores
  console.log("\n--- 3, 4, 5, 6, 7. DEDUPLICAÇÃO CRUZADA JACCARD (500 do Lote 6 vs 3.760 Anteriores) ---");
  console.log(`Calculando similaridade textual em ${lote6Questions.length * previousQuestions.length} pares cruzados...`);

  // Pre-computar shingles
  const lote6Shingles = lote6Questions.map(q => ({
    id: q.id,
    banca: q.banca_nome,
    orgao: q.orgao_nome,
    enunciado: q.enunciado,
    shingles: generate3Shingles(q.enunciado)
  }));

  const prevShingles = previousQuestions.map(q => ({
    id: q.id,
    prompt_versao: q.prompt_versao,
    banca: q.banca_nome,
    orgao: q.orgao_nome,
    enunciado: q.enunciado,
    shingles: generate3Shingles(q.enunciado)
  }));

  const pairsGte95 = [];
  const pairsGte90 = [];
  const pairsGte80 = [];
  const pairsGte70 = [];

  for (const l6 of lote6Shingles) {
    for (const prev of prevShingles) {
      const sim = calculateJaccardSimilarity(l6.shingles, prev.shingles);
      if (sim >= 0.95) {
        pairsGte95.push({ l6, prev, sim });
      } else if (sim >= 0.90) {
        pairsGte90.push({ l6, prev, sim });
      } else if (sim >= 0.80) {
        pairsGte80.push({ l6, prev, sim });
      } else if (sim >= 0.70) {
        pairsGte70.push({ l6, prev, sim });
      }
    }
  }

  console.log(`- Pares cruzados com similaridade >= 95%: ${pairsGte95.length}`);
  console.log(`- Pares cruzados com similaridade >= 90% e < 95%: ${pairsGte90.length}`);
  console.log(`- Pares cruzados com similaridade >= 80% e < 90%: ${pairsGte80.length}`);
  console.log(`- Pares cruzados com similaridade >= 70% e < 80%: ${pairsGte70.length}`);

  if (pairsGte70.length > 0) {
    console.log("\n🔍 Detalhes dos pares com similaridade entre 70% e 80%:");
    pairsGte70.forEach((p, idx) => {
      console.log(`\n[Par ${idx + 1}] Similaridade: ${(p.sim * 100).toFixed(2)}%`);
      console.log(` Lote 6 [${p.l6.id}] (${p.l6.banca} / ${p.l6.orgao}): "${p.l6.enunciado}"`);
      console.log(` Anterior [${p.prev.id}] (${p.prev.prompt_versao} - ${p.prev.banca} / ${p.prev.orgao}): "${p.prev.enunciado}"`);
    });
  }

  if (pairsGte80.length > 0 || pairsGte90.length > 0 || pairsGte95.length > 0) {
    console.log("\n⚠️ Detalhes dos pares com similaridade >= 80%:");
    [...pairsGte95, ...pairsGte90, ...pairsGte80].forEach((p, idx) => {
      console.log(`\n[Par ${idx + 1}] Similaridade: ${(p.sim * 100).toFixed(2)}%`);
      console.log(` Lote 6 [${p.l6.id}] (${p.l6.banca} / ${p.l6.orgao}): "${p.l6.enunciado.substring(0, 100)}..."`);
      console.log(` Anterior [${p.prev.id}] (${p.prev.prompt_versao} - ${p.prev.banca} / ${p.prev.orgao}): "${p.prev.enunciado.substring(0, 100)}..."`);
    });
  } else {
    console.log("✅ Zero colisões ou similaridades elevadas (>= 80%) entre o Lote 6 e a base anterior.");
  }

  // 8. Integridade das 3.760 questões anteriores
  console.log("\n--- 8. INTEGRIDADE DAS 3.760 QUESTÕES ANTERIORES ---");
  const promptVersaoCount = {};
  for (const q of allQuestions) {
    const pv = q.prompt_versao || "sem_prompt_versao";
    promptVersaoCount[pv] = (promptVersaoCount[pv] || 0) + 1;
  }
  console.log("Distribuição por prompt_versao:");
  for (const [pv, count] of Object.entries(promptVersaoCount)) {
    console.log(` - ${pv}: ${count} questões`);
  }

  // 9. Auditoria de Alternativas & Gabarito
  console.log("\n--- 9. AUDITORIA DE ALTERNATIVAS, ÓRFÃS E GABARITO ---");
  const questaoIdSet = new Set(allQuestions.map(q => q.id));
  const alternativasByQuestao = new Map();
  let orfanAlternativas = 0;

  for (const alt of allAlternativas) {
    if (!questaoIdSet.has(alt.questao_id)) {
      orfanAlternativas++;
    }
    if (!alternativasByQuestao.has(alt.questao_id)) {
      alternativasByQuestao.set(alt.questao_id, []);
    }
    alternativasByQuestao.get(alt.questao_id).push(alt);
  }

  console.log(`Alternativas órfãs (sem questão pai): ${orfanAlternativas}`);

  let questoesSemAlternativas = 0;
  let questoesLote6ComGabaritoInvalido = 0;
  let questoesAnterioresComGabaritoInvalido = 0;

  for (const q of allQuestions) {
    const alts = alternativasByQuestao.get(q.id) || [];
    if (alts.length === 0) {
      questoesSemAlternativas++;
      continue;
    }
    const corretas = alts.filter(a => a.correta).length;
    if (corretas !== 1) {
      if (q.prompt_versao === "v2.6-lote6") {
        questoesLote6ComGabaritoInvalido++;
        console.error(`❌ Questão Lote 6 [${q.id}] tem ${corretas} alternativas corretas.`);
      } else {
        questoesAnterioresComGabaritoInvalido++;
      }
    }
  }

  console.log(`Questões sem alternativas: ${questoesSemAlternativas}`);
  console.log(`Questões do Lote 6 com gabarito inválido (!== 1 correta): ${questoesLote6ComGabaritoInvalido}`);
  console.log(`Questões anteriores com gabarito inválido: ${questoesAnterioresComGabaritoInvalido}`);

  console.log("\n================================================================================");
  console.log("                           RESULTADO FINAL DA AUDITORIA                         ");
  console.log("================================================================================");
  console.log(`- Total de questões no banco: ${allQuestions.length} (Esperado: 4.260) -> ${allQuestions.length === 4260 ? 'OK' : 'ERRO'}`);
  console.log(`- Total de questões Lote 6: ${lote6Questions.length} (Esperado: 500) -> ${lote6Questions.length === 500 ? 'OK' : 'ERRO'}`);
  console.log(`- Total de questões Anteriores: ${previousQuestions.length} (Esperado: 3.760) -> ${previousQuestions.length === 3760 ? 'OK' : 'ERRO'}`);
  console.log(`- Alternativas órfãs: ${orfanAlternativas} -> ${orfanAlternativas === 0 ? 'OK' : 'ERRO'}`);
  console.log(`- Gabarito único no Lote 6: ${questoesLote6ComGabaritoInvalido === 0 ? '100% OK' : 'ERRO'}`);
  console.log(`- Duplicatas UUID / Fingerprint / Jaccard >= 80%: ${dupQuestionIds.length + dupFingerprints.length + pairsGte80.length + pairsGte90.length + pairsGte95.length === 0 ? '0 DUPLICATAS (PERFEITO)' : 'ERROS ENCONTRADOS'}`);
  console.log("================================================================================\n");
}

runAudit().catch(err => {
  console.error("Erro fatal na auditoria:", err);
  process.exit(1);
});
