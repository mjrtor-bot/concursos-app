import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { TODAS_QUESTOES_LOTE12, batch12Preparados, normalizarTexto } from "./batch12_modules/index.mjs";

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
  console.error("ERRO: Credenciais do Supabase não encontradas em .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

function generate3Shingles(text) {
  const norm = normalizarTexto(text);
  const words = norm.split(/\s+/).filter(Boolean);
  const shingles = new Set();
  if (words.length < 3) {
    if (words.length > 0) shingles.add(words.join(" "));
    return shingles;
  }
  for (let i = 0; i <= words.length - 3; i++) {
    shingles.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  }
  return shingles;
}

function calculateJaccardSimilarity(setA, setB) {
  if (!setA.size && !setB.size) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

async function fetchAll(table, selectQuery) {
  const records = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from(table)
      .select(selectQuery)
      .range(page * pageSize, (page + 1) * pageSize - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    records.push(...data);
    if (data.length < pageSize) break;
    page++;
  }
  return records;
}

async function runCrossBatchAudit() {
  console.log("==========================================================================");
  console.log("   AUDITORIA DE DEDUPLICAÇÃO COMBINATÓRIA JACCARD 3-SHINGLES — LOTE 12   ");
  console.log("==========================================================================\n");

  // 1. Verificação de Baseline do Banco
  console.log("[1/6] Verificando baseline de produção...");
  const { count: countQuestoes } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  const { count: countAlts } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });

  console.log(`[+] Questões atuais no banco: ${countQuestoes} (esperado: 6.760)`);
  console.log(`[+] Alternativas atuais no banco: ${countAlts} (esperado: 25.358)`);

  if (countQuestoes !== 6760) {
    throw new Error(`Baseline de questões inválido: esperado 6.760, encontrado ${countQuestoes}`);
  }
  if (countAlts !== 25358) {
    throw new Error(`Baseline de alternativas inválido: esperado 25.358, encontrado ${countAlts}`);
  }

  // 2. Preparação dos Shingles do Lote 12
  console.log("\n[2/6] Preparando 500 questões do Lote 12 e gerando 3-shingles...");
  const lote12Prepared = batch12Preparados.map((p) => ({
    idSlug: p.idSlug,
    questaoId: p.questao.id,
    fingerprint: p.fingerprint,
    enunciado: p.questao.enunciado,
    alternativas: p.alternativas,
    shingles: generate3Shingles(p.questao.enunciado),
  }));

  const totalAltsLote12 = lote12Prepared.reduce((acc, q) => acc + q.alternativas.length, 0);
  console.log(`[+] Total de questões do Lote 12: ${lote12Prepared.length}`);
  console.log(`[+] Total de alternativas do Lote 12: ${totalAltsLote12}`);

  if (lote12Prepared.length !== 500) {
    throw new Error(`Lote 12 deve conter 500 questões. Encontrado: ${lote12Prepared.length}`);
  }
  if (totalAltsLote12 !== 1726) {
    throw new Error(`Lote 12 deve conter 1.726 alternativas. Encontrado: ${totalAltsLote12}`);
  }

  // 3. Deduplicação Interna do Lote 12 (124.750 pares)
  console.log("\n[3/6] Auditoria de Deduplicação Interna no Lote 12 (124.750 pares)...");
  let maxInternalSim = 0;
  let maxInternalPair = null;
  let internalGte80 = 0;
  let internalGte90 = 0;
  const topInternalPairs = [];

  for (let i = 0; i < lote12Prepared.length; i++) {
    for (let j = i + 1; j < lote12Prepared.length; j++) {
      const qA = lote12Prepared[i];
      const qB = lote12Prepared[j];
      const sim = calculateJaccardSimilarity(qA.shingles, qB.shingles);
      if (sim > maxInternalSim) {
        maxInternalSim = sim;
        maxInternalPair = { qA: qA.idSlug, qB: qB.idSlug, sim };
      }
      if (sim >= 0.70) {
        topInternalPairs.push({ qA: qA.idSlug, qB: qB.idSlug, sim: Number((sim * 100).toFixed(2)) });
      }
      if (sim >= 0.8) {
        internalGte80++;
        console.warn(`[ALERTA INTERNO >= 80%] ${qA.idSlug} vs ${qB.idSlug}: ${(sim * 100).toFixed(2)}%`);
      }
      if (sim >= 0.9) {
        internalGte90++;
      }
    }
  }
  console.log(`[+] Similaridade interna máxima no Lote 12: ${(maxInternalSim * 100).toFixed(2)}% (${maxInternalPair?.qA} vs ${maxInternalPair?.qB})`);
  console.log(`[+] Pares internos >= 80%: ${internalGte80}`);
  if (internalGte90 > 0) {
    console.error(`❌ ERRO: ${internalGte90} pares internos com similaridade >= 90%!`);
    process.exit(1);
  }

  // 4. Carregar todas as 6.760 questões e 25.358 alternativas do Supabase
  console.log("\n[4/6] Consultando Supabase de Produção para auditoria das 6.760 questões existentes...");
  const dbQuestions = await fetchAll(
    "questoes",
    "id, enunciado, prompt_versao, fingerprint_hash, disciplina_id, assunto_id, banca_nome, orgao_nome, ano, tipo"
  );
  console.log(`[+] Total de questões existentes no Supabase: ${dbQuestions.length}`);

  const dbAlternativas = await fetchAll("questoes_alternativas", "id, questao_id, correta, letra, ordem, texto");
  console.log(`[+] Total de alternativas existentes no Supabase: ${dbAlternativas.length}`);

  // 5. Unicidade de UUIDs e Hashes Canônicos
  console.log("\n[5/6] Verificação de Unicidade de UUIDs e Fingerprints (Lote 12 vs Banco)...");
  const dbQuestionIdSet = new Set(dbQuestions.map((q) => q.id));
  const dbAltIdSet = new Set(dbAlternativas.map((a) => a.id));
  const dbFingerprintSet = new Set(dbQuestions.map((q) => q.fingerprint_hash).filter(Boolean));

  let uuidColisoesQuestoes = 0;
  let uuidColisoesAlts = 0;
  let fingerprintColisoes = 0;

  for (const q12 of lote12Prepared) {
    if (dbQuestionIdSet.has(q12.questaoId)) {
      console.error(`[COLISÃO UUID QUESTÃO] UUID já existe no banco: ${q12.questaoId} (${q12.idSlug})`);
      uuidColisoesQuestoes++;
    }
    if (dbFingerprintSet.has(q12.fingerprint)) {
      console.error(`[COLISÃO FINGERPRINT] Fingerprint já existe no banco: ${q12.fingerprint} (${q12.idSlug})`);
      fingerprintColisoes++;
    }
    for (const alt of q12.alternativas) {
      if (dbAltIdSet.has(alt.id)) {
        console.error(`[COLISÃO UUID ALTERNATIVA] UUID já existe no banco: ${alt.id} (${q12.idSlug})`);
        uuidColisoesAlts++;
      }
    }
  }

  if (uuidColisoesQuestoes > 0 || uuidColisoesAlts > 0 || fingerprintColisoes > 0) {
    console.error("❌ ERRO: Colisões detectadas contra o banco de produção!");
    process.exit(1);
  }
  console.log("    ✅ Zero colisões de UUIDs de Questões, UUIDs de Alternativas e Fingerprints!");

  // 6. Deduplicação Cruzada Jaccard 3-Shingles (500 x 6.760 = 3.380.000 comparações)
  console.log("\n[6/6] Executando Deduplicação Cruzada Jaccard 3-Shingles (3.380.000 comparações)...");
  const dbShingles = dbQuestions.map((q) => ({
    id: q.id,
    shingles: generate3Shingles(q.enunciado),
  }));

  let maxCrossSim = 0;
  let maxCrossPair = null;
  let crossGte80 = 0;
  let crossGte90 = 0;
  const topCrossPairs = [];

  for (let i = 0; i < lote12Prepared.length; i++) {
    const q12 = lote12Prepared[i];
    for (let j = 0; j < dbShingles.length; j++) {
      const dbQ = dbShingles[j];
      const sim = calculateJaccardSimilarity(q12.shingles, dbQ.shingles);
      if (sim > maxCrossSim) {
        maxCrossSim = sim;
        maxCrossPair = { q12: q12.idSlug, dbId: dbQ.id, sim };
      }
      if (sim >= 0.70) {
        topCrossPairs.push({ q12: q12.idSlug, dbId: dbQ.id, sim: Number((sim * 100).toFixed(2)) });
      }
      if (sim >= 0.8) {
        crossGte80++;
        console.warn(`[ALERTA CRUZADO >= 80%] ${q12.idSlug} vs DB ${dbQ.id}: ${(sim * 100).toFixed(2)}%`);
      }
      if (sim >= 0.9) {
        crossGte90++;
      }
    }
  }

  console.log(`[+] Similaridade cruzada máxima: ${(maxCrossSim * 100).toFixed(2)}% (${maxCrossPair?.q12} vs DB ${maxCrossPair?.dbId})`);
  console.log(`[+] Pares cruzados >= 80%: ${crossGte80}`);
  console.log(`[+] Pares cruzados >= 90%: ${crossGte90}`);

  if (crossGte90 > 0) {
    console.error(`❌ ERRO: ${crossGte90} pares cruzados com similaridade >= 90%!`);
    process.exit(1);
  }

  // 7. Salvar Relatório Pré-Importação
  console.log("\n[+] Gerando relatório consolidado de auditoria pré-importação...");
  const auditReport = {
    timestamp: new Date().toISOString(),
    bancoInicial: {
      questoes: countQuestoes,
      alternativas: countAlts,
    },
    lote12: {
      questoes: lote12Prepared.length,
      alternativas: totalAltsLote12,
      maxSimInterna: Number((maxInternalSim * 100).toFixed(2)),
      maxSimCruzada: Number((maxCrossSim * 100).toFixed(2)),
      paresInternosGte80: internalGte80,
      paresCruzadosGte80: crossGte80,
      topInternalPairs: topInternalPairs.sort((a, b) => b.sim - a.sim).slice(0, 10),
      topCrossPairs: topCrossPairs.sort((a, b) => b.sim - a.sim).slice(0, 10),
    },
    status: "APROVADO_PARA_INGESTAO",
  };

  fs.writeFileSync(
    path.join(__dirname, "audit_lote12_pre_import.json"),
    JSON.stringify(auditReport, null, 2),
    "utf8"
  );
  console.log("[+] Relatório salvo em scripts/audit_lote12_pre_import.json");
  console.log("\n🎉 AUDITORIA CRUZADA 100% APROVADA! LOTE 12 PRONTO PARA INGESTÃO!");
}

runCrossBatchAudit().catch((err) => {
  console.error("Erro fatal na auditoria cruzada:", err);
  process.exit(1);
});
