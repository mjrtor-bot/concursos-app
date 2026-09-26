import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";
import { TODAS_QUESTOES_LOTE8, prepararParaBanco, normalizarTexto } from "./batch8_modules/index.mjs";

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
  console.log("       AUDITORIA FINAL DE DEDUPLICAÇÃO CRUZADA PRÉ-IMPORTAÇÃO — LOTE 8          ");
  console.log("================================================================================\n");

  console.log("[1/6] Preparando 500 questões do Lote 8 em memória...");
  const lote8Prepared = TODAS_QUESTOES_LOTE8.map((q) => {
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
  console.log(`[+] Total de questões preparadas: ${lote8Prepared.length}`);

  // --- DEDUPLICAÇÃO INTERNA (124.750 pares) ---
  console.log("\n[2/6] Auditoria de Deduplicação Interna no Lote 8 (124.750 pares)...");
  let maxInternalSim = 0;
  let maxInternalPair = null;
  let internalGte80 = 0;
  let internalGte90 = 0;

  for (let i = 0; i < lote8Prepared.length; i++) {
    for (let j = i + 1; j < lote8Prepared.length; j++) {
      const qA = lote8Prepared[i];
      const qB = lote8Prepared[j];
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
  console.log(`[+] Similaridade interna máxima no Lote 8: ${(maxInternalSim * 100).toFixed(2)}% (${maxInternalPair?.qA} vs ${maxInternalPair?.qB})`);
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

  if (dbQuestions.length !== 4760) {
    console.warn(`[AVISO] Quantidade no banco difere de 4.760! Atual no banco: ${dbQuestions.length}`);
  }

  // --- 1. Verificação de Unicidade de UUIDs ---
  console.log("\n--- 1. VERIFICAÇÃO DE UNICIDADE DE UUIDs (LOTE 8 vs BANCO) ---");
  const dbQuestionIdSet = new Set(dbQuestions.map((q) => q.id));
  const dbAltIdSet = new Set(dbAlternativas.map((a) => a.id));

  let uuidColisoesQuestoes = 0;
  let uuidColisoesAlts = 0;

  for (const q8 of lote8Prepared) {
    if (dbQuestionIdSet.has(q8.questaoId)) {
      console.error(`[COLISÃO UUID QUESTÃO] UUID já existe no banco: ${q8.questaoId} (${q8.idSlug})`);
      uuidColisoesQuestoes++;
    }
    for (const alt of q8.alternativas) {
      if (dbAltIdSet.has(alt.id)) {
        console.error(`[COLISÃO UUID ALTERNATIVA] UUID já existe no banco: ${alt.id} (${q8.idSlug})`);
        uuidColisoesAlts++;
      }
    }
  }
  console.log(`[+] Colisões de UUID de Questão (Lote 8 vs DB): ${uuidColisoesQuestoes}`);
  console.log(`[+] Colisões de UUID de Alternativa (Lote 8 vs DB): ${uuidColisoesAlts}`);

  // --- 2. Verificação de Fingerprints SHA-256 ---
  console.log("\n--- 2. VERIFICAÇÃO DE FINGERPRINTS SHA-256 (LOTE 8 vs BANCO) ---");
  const dbFingerprintMap = new Map();
  for (const q of dbQuestions) {
    if (q.fingerprint_hash) {
      dbFingerprintMap.set(q.fingerprint_hash, q);
    }
  }

  let fingerprintColisoes = 0;
  for (const q8 of lote8Prepared) {
    if (dbFingerprintMap.has(q8.fingerprint)) {
      const match = dbFingerprintMap.get(q8.fingerprint);
      console.error(
        `[COLISÃO FINGERPRINT] Fingerprint ${q8.fingerprint} de ${q8.idSlug} colidiu com questão do banco ${match.id} (${match.prompt_versao})`
      );
      fingerprintColisoes++;
    }
  }
  console.log(`[+] Colisões de Fingerprint SHA-256 (Lote 8 vs DB): ${fingerprintColisoes}`);

  // --- 3. Auditoria de Similaridade Jaccard Cruzada (500 x 4.760 = 2.380.000 comparações) ---
  console.log(`\n--- 3. AUDITORIA CRUZADA JACCARD 3-SHINGLES (500 LOTE 8 x ${dbQuestions.length} DB = ${(lote8Prepared.length * dbQuestions.length).toLocaleString()} PARES) ---`);
  console.log("Calculando shingles para as questões do banco de dados...");

  const dbAltsByQuestao = new Map();
  for (const a of dbAlternativas) {
    if (!dbAltsByQuestao.has(a.questao_id)) {
      dbAltsByQuestao.set(a.questao_id, []);
    }
    dbAltsByQuestao.get(a.questao_id).push(a.texto || "");
  }

  const dbPreparedShingles = dbQuestions.map((q) => {
    const alts = dbAltsByQuestao.get(q.id) || [];
    const fullText = (q.enunciado || "") + " " + alts.join(" ");
    return {
      id: q.id,
      prompt_versao: q.prompt_versao,
      shingles: generate3Shingles(fullText),
    };
  });

  let maxCrossSim = 0;
  let maxCrossPar = null;
  let paresGte80 = 0;
  let paresGte90 = 0;
  let paresGte95 = 0;
  const topPares = [];

  for (let i = 0; i < lote8Prepared.length; i++) {
    const q8 = lote8Prepared[i];
    for (let j = 0; j < dbPreparedShingles.length; j++) {
      const qDb = dbPreparedShingles[j];
      const sim = calculateJaccardSimilarity(q8.shingles, qDb.shingles);

      if (sim > maxCrossSim) {
        maxCrossSim = sim;
        maxCrossPar = { q8: q8.idSlug, qDb: qDb.id, prompt: qDb.prompt_versao, sim };
      }

      if (sim >= 0.8) {
        paresGte80++;
        console.warn(`[ALERTA >= 80%] ${q8.idSlug} vs DB ${qDb.id} (${qDb.prompt_versao}): ${(sim * 100).toFixed(2)}%`);
      }
      if (sim >= 0.9) {
        paresGte90++;
      }
      if (sim >= 0.95) {
        paresGte95++;
      }

      if (sim >= 0.35) {
        topPares.push({ q8: q8.idSlug, qDb: qDb.id, prompt: qDb.prompt_versao, sim });
      }
    }
  }

  topPares.sort((a, b) => b.sim - a.sim);

  console.log(`\n[+] Similaridade Cruzada Máxima: ${(maxCrossSim * 100).toFixed(2)}%`);
  if (maxCrossPar) {
    console.log(`    Par: Lote 8 (${maxCrossPar.q8}) x DB (${maxCrossPar.qDb} - ${maxCrossPar.prompt})`);
  }
  console.log(`[+] Total de pares com similaridade >= 80%: ${paresGte80}`);
  console.log(`[+] Total de pares com similaridade >= 90%: ${paresGte90}`);
  console.log(`[+] Total de pares com similaridade >= 95%: ${paresGte95}`);

  console.log("\nTop 5 maiores similaridades cruzadas encontradas:");
  topPares.slice(0, 5).forEach((p, idx) => {
    console.log(`  ${idx + 1}. ${p.q8} vs ${p.qDb} (${p.prompt || "antigo"}): ${(p.sim * 100).toFixed(2)}%`);
  });

  // --- 4. Verificação de Integridade das Questões no Banco ---
  console.log("\n--- 4. DISTRIBUIÇÃO DAS QUESTÕES EXISTENTES NO BANCO ---");
  const lotesContagem = {};
  for (const q of dbQuestions) {
    const v = q.prompt_versao || "legadas_iniciais";
    lotesContagem[v] = (lotesContagem[v] || 0) + 1;
  }
  console.log("Distribuição por versão/lote:", lotesContagem);

  // --- 5. Salvar Relatório JSON ---
  const auditReport = {
    timestamp: new Date().toISOString(),
    totalQuestoesBancoAtual: dbQuestions.length,
    totalAlternativasBancoAtual: dbAlternativas.length,
    totalQuestoesLote8: lote8Prepared.length,
    colisoesUuidQuestoes: uuidColisoesQuestoes,
    colisoesUuidAlternativas: uuidColisoesAlts,
    colisoesFingerprint: fingerprintColisoes,
    similaridadeJaccardMaximaInterna: maxInternalSim,
    maxInternalPair,
    internalGte80,
    similaridadeJaccardMaximaCruzada: maxCrossSim,
    maxCrossPar,
    paresGte80,
    paresGte90,
    paresGte95,
    lotesContagem,
    topPares: topPares.slice(0, 10),
  };

  fs.writeFileSync(path.join(__dirname, "audit_cross_lote8_results.json"), JSON.stringify(auditReport, null, 2), "utf8");
  console.log("\n[+] Relatório salvo com sucesso em scripts/audit_cross_lote8_results.json");

  const aprovado =
    uuidColisoesQuestoes === 0 &&
    uuidColisoesAlts === 0 &&
    fingerprintColisoes === 0 &&
    internalGte80 === 0 &&
    paresGte80 === 0;

  if (aprovado) {
    console.log("\n================================================================================");
    console.log(" [SUCESSO] AUDITORIA DE DEDUPLICAÇÃO CRUZADA APROVADA COM 100% DE CONFORMIDADE! ");
    console.log("================================================================================");
  } else {
    console.error("\n[FALHA] Auditoria encontrou inconformidades que impedem o avanço.");
    process.exit(1);
  }
}

runCrossAudit().catch((err) => {
  console.error("Erro fatal durante a auditoria cruzada:", err);
  process.exit(1);
});
