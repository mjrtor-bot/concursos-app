import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";
import { TODAS_QUESTOES_LOTE10, prepararParaBanco, normalizarTexto } from "./batch10_modules/index.mjs";

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

async function runCrossBatchAudit() {
  console.log("================================================================================");
  console.log("       AUDITORIA FINAL DE DEDUPLICAÇÃO CRUZADA PRÉ-IMPORTAÇÃO — LOTE 10         ");
  console.log("================================================================================\n");

  // 1. Validar estado do banco de dados
  const { count: countQuestoes, error: errQ } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: countAlts, error: errA } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  const { count: countL10Existente, error: errL10 } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true })
    .eq("prompt_versao", "v3.0-lote10");

  if (errQ || errA || errL10) {
    console.error("Erro ao consultar Supabase:", errQ || errA || errL10);
    process.exit(1);
  }

  console.log(`[+] Banco atual de produção:`);
  console.log(`    - Questões totais: ${countQuestoes} (Esperado: 5.760)`);
  console.log(`    - Alternativas totais: ${countAlts} (Esperado: 22.212)`);
  console.log(`    - Questões Lote 10 já presentes: ${countL10Existente} (Esperado: 0)`);

  if (countQuestoes !== 5760 || countAlts !== 22212) {
    console.error("❌ ERRO: O acervo base deve ter exatamente 5.760 questões e 22.212 alternativas.");
    process.exit(1);
  }

  // 2. Preparar Lote 10 em memória
  console.log("\n[1/6] Preparando 500 questões do Lote 10 em memória...");
  const lote10Prepared = TODAS_QUESTOES_LOTE10.map((q) => {
    const prep = prepararParaBanco(q);
    const fullText = q.enunciado + " " + q.alternativas.map((a) => a.texto).join(" ");
    return {
      idSlug: prep.idSlug,
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
  console.log(`    - Total de questões preparadas: ${lote10Prepared.length}`);

  // 3. Deduplicação Interna do Lote 10
  console.log("\n[2/6] Auditoria de Deduplicação Interna no Lote 10 (124.750 pares)...");
  let maxInternalSim = 0;
  let maxInternalPair = null;
  let internalGte80 = 0;
  let internalGte90 = 0;

  for (let i = 0; i < lote10Prepared.length; i++) {
    for (let j = i + 1; j < lote10Prepared.length; j++) {
      const qA = lote10Prepared[i];
      const qB = lote10Prepared[j];
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
  console.log(`[+] Similaridade interna máxima no Lote 10: ${(maxInternalSim * 100).toFixed(2)}% (${maxInternalPair?.qA} vs ${maxInternalPair?.qB})`);
  console.log(`[+] Pares internos >= 80%: ${internalGte80}`);
  if (internalGte90 > 0) {
    console.error(`❌ ERRO: ${internalGte90} pares internos com similaridade >= 90%!`);
    process.exit(1);
  }

  // 4. Carregar todas as 5.760 questões e 22.212 alternativas existentes do Supabase
  console.log("\n[3/6] Consultando Supabase de Produção para auditoria das questões existentes...");
  const dbQuestions = await fetchAll(
    "questoes",
    "id, enunciado, prompt_versao, fingerprint_hash, disciplina_id, assunto_id, banca_nome, orgao_nome, ano, tipo"
  );
  console.log(`[+] Total de questões existentes no Supabase: ${dbQuestions.length}`);

  const dbAlternativas = await fetchAll("questoes_alternativas", "id, questao_id, correta, letra, ordem, texto");
  console.log(`[+] Total de alternativas existentes no Supabase: ${dbAlternativas.length}`);

  // 5. Unicidade de UUIDs e Hashes Canônicos
  console.log("\n[4/6] Verificação de Unicidade de UUIDs e Fingerprints (Lote 10 vs Banco)...");
  const dbQuestionIdSet = new Set(dbQuestions.map((q) => q.id));
  const dbAltIdSet = new Set(dbAlternativas.map((a) => a.id));
  const dbFingerprintSet = new Set(dbQuestions.map((q) => q.fingerprint_hash).filter(Boolean));

  let uuidColisoesQuestoes = 0;
  let uuidColisoesAlts = 0;
  let fingerprintColisoes = 0;

  for (const q10 of lote10Prepared) {
    if (dbQuestionIdSet.has(q10.questaoId)) {
      console.error(`[COLISÃO UUID QUESTÃO] UUID já existe no banco: ${q10.questaoId} (${q10.idSlug})`);
      uuidColisoesQuestoes++;
    }
    if (dbFingerprintSet.has(q10.fingerprint)) {
      console.error(`[COLISÃO FINGERPRINT] Fingerprint já existe no banco: ${q10.fingerprint} (${q10.idSlug})`);
      fingerprintColisoes++;
    }
    for (const alt of q10.alternativas) {
      if (dbAltIdSet.has(alt.id)) {
        console.error(`[COLISÃO UUID ALTERNATIVA] UUID já existe no banco: ${alt.id} (${q10.idSlug})`);
        uuidColisoesAlts++;
      }
    }
  }

  if (uuidColisoesQuestoes > 0 || uuidColisoesAlts > 0 || fingerprintColisoes > 0) {
    console.error("❌ ERRO: Colisões detectadas contra o banco de produção!");
    process.exit(1);
  }
  console.log("    ✅ Zero colisões de UUIDs de Questões, UUIDs de Alternativas e Fingerprints!");

  // 6. Deduplicação Cruzada Jaccard 3-Shingles (500 x 5.760 = 2.880.000 comparações)
  console.log("\n[5/6] Executando Deduplicação Cruzada Jaccard 3-Shingles (2.880.000 comparações)...");
  const dbShingles = dbQuestions.map((q) => ({
    id: q.id,
    shingles: generate3Shingles(q.enunciado),
  }));

  let maxCrossSim = 0;
  let maxCrossPair = null;
  let crossGte80 = 0;
  let crossGte90 = 0;

  for (let i = 0; i < lote10Prepared.length; i++) {
    const q10 = lote10Prepared[i];
    for (let j = 0; j < dbShingles.length; j++) {
      const dbQ = dbShingles[j];
      const sim = calculateJaccardSimilarity(q10.shingles, dbQ.shingles);
      if (sim > maxCrossSim) {
        maxCrossSim = sim;
        maxCrossPair = { q10: q10.idSlug, dbId: dbQ.id, sim };
      }
      if (sim >= 0.8) {
        crossGte80++;
        console.warn(`[ALERTA CRUZADO >= 80%] ${q10.idSlug} vs DB ${dbQ.id}: ${(sim * 100).toFixed(2)}%`);
      }
      if (sim >= 0.9) {
        crossGte90++;
      }
    }
  }

  console.log(`[+] Similaridade cruzada máxima: ${(maxCrossSim * 100).toFixed(2)}% (${maxCrossPair?.q10} vs DB ${maxCrossPair?.dbId})`);
  console.log(`[+] Pares cruzados >= 80%: ${crossGte80}`);
  console.log(`[+] Pares cruzados >= 90%: ${crossGte90}`);

  if (crossGte90 > 0) {
    console.error(`❌ ERRO: ${crossGte90} pares cruzados com similaridade >= 90%!`);
    process.exit(1);
  }

  // 7. Salvar Relatório Pré-Importação
  console.log("\n[6/6] Gerando relatório consolidado de auditoria pré-importação...");
  const auditReport = {
    timestamp: new Date().toISOString(),
    bancoInicial: {
      questoes: countQuestoes,
      alternativas: countAlts,
    },
    lote10: {
      questoes: lote10Prepared.length,
      alternativas: lote10Prepared.reduce((acc, q) => acc + q.alternativas.length, 0),
      maxSimInterna: Number((maxInternalSim * 100).toFixed(2)),
      maxSimCruzada: Number((maxCrossSim * 100).toFixed(2)),
      paresInternosGte80: internalGte80,
      paresCruzadosGte80: crossGte80,
    },
    status: "APROVADO_PARA_INGESTAO",
  };

  fs.writeFileSync(
    path.join(__dirname, "audit_lote10_pre_import.json"),
    JSON.stringify(auditReport, null, 2),
    "utf8"
  );
  console.log("[+] Relatório salvo em scripts/audit_lote10_pre_import.json");
  console.log("\n🎉 AUDITORIA CRUZADA 100% APROVADA! LOTE 10 PRONTO PARA INGESTÃO!");
}

runCrossBatchAudit().catch((err) => {
  console.error("Erro fatal na auditoria cruzada:", err);
  process.exit(1);
});
