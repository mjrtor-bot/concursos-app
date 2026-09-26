import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";
import { TODAS_QUESTOES_LOTE9, prepararParaBanco, normalizarTexto } from "./batch9_modules/index.mjs";

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
  console.error("ERRO: Credenciais do Supabase não encontradas em .env.local.");
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
  const words = norm.split(" ").filter(Boolean);
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

async function runCrossAudit() {
  console.log("================================================================================");
  console.log("       AUDITORIA FINAL DE DEDUPLICAÇÃO CRUZADA PRÉ-IMPORTAÇÃO — LOTE 9          ");
  console.log("================================================================================\n");

  console.log("[1/6] Preparando 500 questões do Lote 9 em memória...");
  const lote9Prepared = TODAS_QUESTOES_LOTE9.map((q) => {
    const prep = prepararParaBanco(q);
    const fullText = q.enunciado + " " + q.alternativas.map((a) => a.texto).join(" ");
    return {
      idSlug: q.idSlug,
      questaoId: prep.questao.id,
      alternativas: prep.alternativas,
      fingerprint: prep.fingerprint,
      disciplina_id: q.disciplina_id,
      assunto_id: q.assunto_id,
      banca_nome: q.banca_nome,
      orgao_nome: q.orgao_nome,
      cargo_nome: q.cargo_nome,
      ano: q.ano,
      tipo: q.tipo,
      dificuldade: q.dificuldade,
      enunciado: q.enunciado,
      explicacao: q.explicacao,
      shingles: generate3Shingles(fullText),
    };
  });
  console.log(`[+] Total de questões preparadas: ${lote9Prepared.length}`);

  // --- DEDUPLICAÇÃO INTERNA (124.750 pares) ---
  console.log("\n[2/6] Auditoria de Deduplicação Interna no Lote 9 (124.750 pares)...");
  let maxInternalSim = 0;
  let maxInternalPair = null;
  let internalGte80 = 0;
  let internalGte90 = 0;

  for (let i = 0; i < lote9Prepared.length; i++) {
    for (let j = i + 1; j < lote9Prepared.length; j++) {
      const qA = lote9Prepared[i];
      const qB = lote9Prepared[j];
      const sim = calculateJaccardSimilarity(qA.shingles, qB.shingles);
      if (sim > maxInternalSim) {
        maxInternalSim = sim;
        maxInternalPair = { qA: qA.idSlug, qB: qB.idSlug, sim };
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
  console.log(`[+] Similaridade interna máxima no Lote 9: ${(maxInternalSim * 100).toFixed(2)}% (${maxInternalPair?.qA} vs ${maxInternalPair?.qB})`);
  console.log(`[+] Pares internos >= 80%: ${internalGte80}`);

  // --- CONSULTA AO SUPABASE ---
  console.log("\n[3/6] Consultando Supabase de Produção para auditoria das questões existentes...");
  const dbQuestions = await fetchAll(
    "questoes",
    "id, enunciado, prompt_versao, fingerprint_hash, disciplina_id, assunto_id, banca_nome, orgao_nome, ano, tipo"
  );
  console.log(`[+] Total de questões existentes no Supabase: ${dbQuestions.length}`);

  const dbAlternativas = await fetchAll("questoes_alternativas", "id, questao_id, correta, letra, ordem, texto");
  console.log(`[+] Total de alternativas existentes no Supabase: ${dbAlternativas.length}`);

  if (dbQuestions.length !== 5260) {
    console.warn(`[AVISO] Quantidade no banco difere de 5.260! Atual no banco: ${dbQuestions.length}`);
  }

  // --- 1. Verificação de Unicidade de UUIDs ---
  console.log("\n--- 1. VERIFICAÇÃO DE UNICIDADE DE UUIDs (LOTE 9 vs BANCO) ---");
  const dbQuestionIdSet = new Set(dbQuestions.map((q) => q.id));
  const dbAltIdSet = new Set(dbAlternativas.map((a) => a.id));

  let uuidColisoesQuestoes = 0;
  let uuidColisoesAlts = 0;

  for (const q9 of lote9Prepared) {
    if (dbQuestionIdSet.has(q9.questaoId)) {
      console.error(`[COLISÃO UUID QUESTÃO] UUID já existe no banco: ${q9.questaoId} (${q9.idSlug})`);
      uuidColisoesQuestoes++;
    }
    for (const alt of q9.alternativas) {
      if (dbAltIdSet.has(alt.id)) {
        console.error(`[COLISÃO UUID ALTERNATIVA] UUID já existe no banco: ${alt.id} (${q9.idSlug})`);
        uuidColisoesAlts++;
      }
    }
  }
  console.log(`[+] Colisões de UUID de Questão (Lote 9 vs DB): ${uuidColisoesQuestoes}`);
  console.log(`[+] Colisões de UUID de Alternativa (Lote 9 vs DB): ${uuidColisoesAlts}`);

  // --- 2. Verificação de Fingerprints SHA-256 ---
  console.log("\n--- 2. VERIFICAÇÃO DE FINGERPRINTS SHA-256 (LOTE 9 vs BANCO) ---");
  const dbFingerprintMap = new Map();
  for (const q of dbQuestions) {
    if (q.fingerprint_hash) {
      dbFingerprintMap.set(q.fingerprint_hash, q);
    }
  }

  let fingerprintColisoes = 0;
  for (const q9 of lote9Prepared) {
    if (dbFingerprintMap.has(q9.fingerprint)) {
      const match = dbFingerprintMap.get(q9.fingerprint);
      console.error(
        `[COLISÃO FINGERPRINT] Fingerprint ${q9.fingerprint} de ${q9.idSlug} colidiu com questão do banco ${match.id} (${match.prompt_versao})`
      );
      fingerprintColisoes++;
    }
  }
  console.log(`[+] Colisões de Fingerprint SHA-256 (Lote 9 vs DB): ${fingerprintColisoes}`);

  // --- 3. Deduplicação Cruzada (Jaccard 3-Shingles: 500 x DB) ---
  console.log("\n[4/6] Executando Deduplicação Cruzada com 3-shingles Jaccard (500 x DB)...");

  // Agrupar alternativas por questao_id para compor texto completo
  const altMap = new Map();
  for (const a of dbAlternativas) {
    if (!altMap.has(a.questao_id)) altMap.set(a.questao_id, []);
    altMap.get(a.questao_id).push(a.texto || "");
  }

  const dbPrepared = dbQuestions.map((q) => {
    const alts = altMap.get(q.id) || [];
    const fullText = (q.enunciado || "") + " " + alts.join(" ");
    return {
      id: q.id,
      prompt_versao: q.prompt_versao,
      shingles: generate3Shingles(fullText),
    };
  });

  let maxCrossSim = 0;
  let maxCrossPair = null;
  let crossGte80 = 0;
  let crossGte90 = 0;

  for (const q9 of lote9Prepared) {
    for (const qDb of dbPrepared) {
      const sim = calculateJaccardSimilarity(q9.shingles, qDb.shingles);
      if (sim > maxCrossSim) {
        maxCrossSim = sim;
        maxCrossPair = { q9: q9.idSlug, qDb: qDb.id, prompt_versao: qDb.prompt_versao, sim };
      }
      if (sim >= 0.8) {
        crossGte80++;
        console.warn(`[ALERTA CRUZADO >= 80%] ${q9.idSlug} vs DB ${qDb.id} (${qDb.prompt_versao}): ${(sim * 100).toFixed(2)}%`);
      }
      if (sim >= 0.9) {
        crossGte90++;
      }
    }
  }

  console.log(`[+] Similaridade cruzada máxima: ${(maxCrossSim * 100).toFixed(2)}% (${maxCrossPair?.q9} vs DB ${maxCrossPair?.qDb} [${maxCrossPair?.prompt_versao}])`);
  console.log(`[+] Pares cruzados >= 80%: ${crossGte80}`);

  // --- 4. Verificação de Registros Prévios do Lote 9 ---
  console.log("\n[5/6] Verificando se já existem questões do Lote 9 no Supabase...");
  const lote9NoBanco = dbQuestions.filter((q) => q.prompt_versao === "v2.9-lote9");
  console.log(`[+] Questões com prompt_versao='v2.9-lote9' já presentes: ${lote9NoBanco.length}`);

  // --- 5. Relatório Consolidado de Segurança ---
  console.log("\n================================================================================");
  console.log("                     RELATÓRIO DE AUDITORIA PRÉ-IMPORTAÇÃO                      ");
  console.log("================================================================================");
  console.log(`- Questões no Lote 9: ${lote9Prepared.length}`);
  console.log(`- Questões existentes no Banco: ${dbQuestions.length}`);
  console.log(`- Colisões de UUID de Questão: ${uuidColisoesQuestoes}`);
  console.log(`- Colisões de UUID de Alternativa: ${uuidColisoesAlts}`);
  console.log(`- Colisões de Fingerprint SHA-256: ${fingerprintColisoes}`);
  console.log(`- Similaridade interna máxima: ${(maxInternalSim * 100).toFixed(2)}%`);
  console.log(`- Similaridade cruzada máxima: ${(maxCrossSim * 100).toFixed(2)}%`);
  console.log(`- Pares cruzados >= 80%: ${crossGte80}`);
  console.log(`- Pares cruzados >= 90%: ${crossGte90}`);

  const auditoriaAprovada =
    uuidColisoesQuestoes === 0 &&
    uuidColisoesAlts === 0 &&
    fingerprintColisoes === 0 &&
    crossGte90 === 0;

  if (auditoriaAprovada) {
    console.log("\n✅ AUDITORIA PRÉ-IMPORTAÇÃO APROVADA COM LOUVOR! BASE 100% LIMPA E SEGURA.");
  } else {
    console.error("\n❌ AUDITORIA FALHOU! REVISAR ITENS ANTES DE PROSSEGUIR COM O INGESTION.");
    process.exit(1);
  }
}

runCrossAudit().catch((err) => {
  console.error("Erro fatal na auditoria cruzada:", err);
  process.exit(1);
});
