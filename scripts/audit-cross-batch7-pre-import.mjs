import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";
import { TODAS_QUESTOES_LOTE7, prepararParaBanco, normalizarTexto } from "./batch7_modules/index.mjs";

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
  console.log("       AUDITORIA FINAL DE DEDUPLICAÇÃO CRUZADA PRÉ-IMPORTAÇÃO — LOTE 7          ");
  console.log("================================================================================\n");

  console.log("[1/6] Carregando todas as 500 questões preparadas do Lote 7 em memória...");
  const lote7Prepared = TODAS_QUESTOES_LOTE7.map((q) => {
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
  console.log(`[+] Total de questões Lote 7: ${lote7Prepared.length}`);

  console.log("\n[2/6] Consultando Supabase de Produção para auditoria do banco existente...");
  const dbQuestions = await fetchAll(
    "questoes",
    "id, enunciado, prompt_versao, fingerprint_hash, disciplina_id, assunto_id, banca_nome, orgao_nome, ano, tipo"
  );
  console.log(`[+] Total de questões existentes no Supabase: ${dbQuestions.length}`);

  const dbAlternativas = await fetchAll("questoes_alternativas", "id, questao_id, correta, letra, ordem, texto");
  console.log(`[+] Total de alternativas existentes no Supabase: ${dbAlternativas.length}`);

  // Verificar se o banco tem exatamente 4260 questões antes do Lote 7
  if (dbQuestions.length !== 4260) {
    console.warn(`[AVISO] Quantidade no banco difere de 4.260! Atual no banco: ${dbQuestions.length}`);
  }

  // 1. Verificação de UUIDs
  console.log("\n--- 1. VERIFICAÇÃO DE UNICIDADE DE UUIDs (LOTE 7 vs BANCO) ---");
  const dbQuestionIdSet = new Set(dbQuestions.map((q) => q.id));
  const dbAltIdSet = new Set(dbAlternativas.map((a) => a.id));

  let uuidColisoesQuestoes = 0;
  let uuidColisoesAlts = 0;

  for (const q7 of lote7Prepared) {
    if (dbQuestionIdSet.has(q7.questaoId)) {
      console.error(`[COLISÃO UUID QUESTÃO] UUID já existe no banco: ${q7.questaoId} (${q7.idSlug})`);
      uuidColisoesQuestoes++;
    }
    for (const alt of q7.alternativas) {
      if (dbAltIdSet.has(alt.id)) {
        console.error(`[COLISÃO UUID ALTERNATIVA] UUID já existe no banco: ${alt.id} (${q7.idSlug})`);
        uuidColisoesAlts++;
      }
    }
  }
  console.log(`[+] Colisões de UUID de Questão (Lote 7 vs DB): ${uuidColisoesQuestoes}`);
  console.log(`[+] Colisões de UUID de Alternativa (Lote 7 vs DB): ${uuidColisoesAlts}`);

  // 2. Verificação de Fingerprints SHA-256
  console.log("\n--- 2. VERIFICAÇÃO DE FINGERPRINTS SHA-256 (LOTE 7 vs BANCO) ---");
  const dbFingerprintMap = new Map();
  for (const q of dbQuestions) {
    if (q.fingerprint_hash) {
      dbFingerprintMap.set(q.fingerprint_hash, q);
    }
  }

  let fingerprintColisoes = 0;
  for (const q7 of lote7Prepared) {
    if (dbFingerprintMap.has(q7.fingerprint)) {
      const match = dbFingerprintMap.get(q7.fingerprint);
      console.error(
        `[COLISÃO FINGERPRINT] Fingerprint ${q7.fingerprint} de ${q7.idSlug} colidiu com questão do banco ${match.id} (${match.prompt_versao})`
      );
      fingerprintColisoes++;
    }
  }
  console.log(`[+] Colisões de Fingerprint SHA-256 (Lote 7 vs DB): ${fingerprintColisoes}`);

  // 3. Auditoria de Similaridade Jaccard 3-Shingles Cruzada (500 x 4.260 = 2.130.000 comparações)
  console.log("\n--- 3. AUDITORIA CRUZADA JACCARD 3-SHINGLES (500 LOTE 7 x 4.260 DB = 2.130.000 PARES) ---");
  console.log("Calculando shingles para todas as 4.260 questões do banco...");

  // Agrupar alternativas por questao_id para construir o texto completo das questões do banco
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

  for (let i = 0; i < lote7Prepared.length; i++) {
    const q7 = lote7Prepared[i];
    for (let j = 0; j < dbPreparedShingles.length; j++) {
      const qDb = dbPreparedShingles[j];
      const sim = calculateJaccardSimilarity(q7.shingles, qDb.shingles);

      if (sim > maxCrossSim) {
        maxCrossSim = sim;
        maxCrossPar = { q7: q7.idSlug, qDb: qDb.id, prompt: qDb.prompt_versao, sim };
      }

      if (sim >= 0.8) {
        paresGte80++;
        console.warn(`[ALERTA >= 80%] ${q7.idSlug} vs DB ${qDb.id} (${qDb.prompt_versao}): ${(sim * 100).toFixed(2)}%`);
      }
      if (sim >= 0.9) {
        paresGte90++;
      }
      if (sim >= 0.95) {
        paresGte95++;
      }

      if (sim >= 0.35) {
        topPares.push({ q7: q7.idSlug, qDb: qDb.id, prompt: qDb.prompt_versao, sim });
      }
    }
  }

  topPares.sort((a, b) => b.sim - a.sim);

  console.log(`\n[+] Similaridade Cruzada Máxima: ${(maxCrossSim * 100).toFixed(2)}%`);
  if (maxCrossPar) {
    console.log(`    Par: Lote 7 (${maxCrossPar.q7}) x DB (${maxCrossPar.qDb} - ${maxCrossPar.prompt})`);
  }
  console.log(`[+] Total de pares com similaridade >= 80%: ${paresGte80}`);
  console.log(`[+] Total de pares com similaridade >= 90%: ${paresGte90}`);
  console.log(`[+] Total de pares com similaridade >= 95%: ${paresGte95}`);

  console.log("\nTop 5 maiores similaridades cruzadas encontradas:");
  topPares.slice(0, 5).forEach((p, idx) => {
    console.log(`  ${idx + 1}. ${p.q7} vs ${p.qDb} (${p.prompt || "antigo"}): ${(p.sim * 100).toFixed(2)}%`);
  });

  // 4. Verificação de Integridade das 4.260 questões existentes
  console.log("\n--- 4. INTEGRIDADE DAS QUESTÕES ANTERIORES NO BANCO ---");
  const lotesContagem = {};
  for (const q of dbQuestions) {
    const v = q.prompt_versao || "legadas_iniciais";
    lotesContagem[v] = (lotesContagem[v] || 0) + 1;
  }
  console.log("Distribuição das questões existentes no banco por versão/lote:", lotesContagem);

  // 5. Salvar relatório JSON
  const auditReport = {
    timestamp: new Date().toISOString(),
    totalQuestoesBancoAtual: dbQuestions.length,
    totalAlternativasBancoAtual: dbAlternativas.length,
    totalQuestoesLote7: lote7Prepared.length,
    colisoesUuidQuestoes: uuidColisoesQuestoes,
    colisoesUuidAlternativas: uuidColisoesAlts,
    colisoesFingerprint: fingerprintColisoes,
    similaridadeJaccardMaximaCruzada: maxCrossSim,
    maxCrossPar,
    paresGte80,
    paresGte90,
    paresGte95,
    lotesContagem,
    topPares: topPares.slice(0, 10),
  };

  fs.writeFileSync(path.join(__dirname, "audit_cross_lote7_results.json"), JSON.stringify(auditReport, null, 2), "utf8");
  console.log("\n[+] Relatório salvo em scripts/audit_cross_lote7_results.json");

  const aprovado = uuidColisoesQuestoes === 0 && uuidColisoesAlts === 0 && fingerprintColisoes === 0 && paresGte80 === 0;

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
