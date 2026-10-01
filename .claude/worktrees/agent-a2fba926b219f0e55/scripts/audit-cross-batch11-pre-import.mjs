import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";
import { TODAS_QUESTOES_LOTE11, prepararParaBanco, normalizarTexto } from "./batch11_modules/index.mjs";

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
  console.log("       AUDITORIA FINAL DE DEDUPLICAÇÃO CRUZADA PRÉ-IMPORTAÇÃO — LOTE 11         ");
  console.log("================================================================================\n");

  // 1. Validar estado do banco de dados
  const { count: countQuestoes, error: errQ } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: countAlts, error: errA } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  const { count: countL11Existente, error: errL11 } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true })
    .eq("prompt_versao", "v3.1-lote11");

  if (errQ || errA || errL11) {
    console.error("Erro ao consultar Supabase:", errQ || errA || errL11);
    process.exit(1);
  }

  console.log(`[+] Banco atual de produção:`);
  console.log(`    - Questões totais: ${countQuestoes} (Esperado: 6.260)`);
  console.log(`    - Alternativas totais: ${countAlts} (Esperado: 23.620)`);
  console.log(`    - Questões Lote 11 já presentes: ${countL11Existente} (Esperado: 0)`);

  if (countQuestoes !== 6260 || countAlts !== 23620) {
    console.error("❌ ERRO: O acervo base deve ter exatamente 6.260 questões e 23.620 alternativas.");
    process.exit(1);
  }

  // 2. Preparar Lote 11 em memória
  console.log("\n[1/6] Preparando 500 questões do Lote 11 em memória...");
  const lote11Prepared = TODAS_QUESTOES_LOTE11.map((q) => {
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
  console.log(`    - Total de questões preparadas: ${lote11Prepared.length}`);

  if (lote11Prepared.length !== 500) {
    console.error(`❌ ERRO: Lote 11 tem ${lote11Prepared.length} questões (esperado: exatamente 500)!`);
    process.exit(1);
  }

  const totalAltsLote11 = lote11Prepared.reduce((acc, q) => acc + q.alternativas.length, 0);
  console.log(`    - Total de alternativas do Lote 11 calculadas: ${totalAltsLote11}`);

  // 3. Validação Pedagógica e Estrutural
  console.log("\n[2/6] Validando integridade estrutural e pedagógica do Lote 11...");
  const slugsSet = new Set();
  const questaoIdSet = new Set();
  const altIdSet = new Set();
  const fingerprintSet = new Set();

  for (let i = 0; i < lote11Prepared.length; i++) {
    const q = lote11Prepared[i];
    if (slugsSet.has(q.idSlug)) {
      throw new Error(`Slug duplicado no Lote 11: ${q.idSlug}`);
    }
    slugsSet.add(q.idSlug);

    if (questaoIdSet.has(q.questaoId)) {
      throw new Error(`UUID de questão duplicado no Lote 11: ${q.questaoId}`);
    }
    questaoIdSet.add(q.questaoId);

    if (fingerprintSet.has(q.fingerprint)) {
      throw new Error(`Fingerprint duplicado no Lote 11: ${q.fingerprint}`);
    }
    fingerprintSet.add(q.fingerprint);

    if (!q.disciplina_id || !q.assunto_id) {
      throw new Error(`Disciplina ou Assunto nulos na questão ${q.idSlug}`);
    }

    if (!q.enunciado || q.enunciado.trim().length < 20) {
      throw new Error(`Enunciado muito curto ou vazio na questão ${q.idSlug}`);
    }

    if (!q.explicacao || q.explicacao.trim().length < 10) {
      throw new Error(`Explicação muito curta ou vazia na questão ${q.idSlug}`);
    }

    if (q.tipo === "certo_errado") {
      if (q.alternativas.length !== 2) {
        throw new Error(`Questão certo_errado ${q.idSlug} tem ${q.alternativas.length} alternativas (esperado 2)`);
      }
    } else if (q.tipo === "multipla_escolha") {
      if (q.alternativas.length !== 5) {
        throw new Error(`Questão multipla_escolha ${q.idSlug} tem ${q.alternativas.length} alternativas (esperado 5)`);
      }
    }

    const corretas = q.alternativas.filter((a) => a.correta);
    if (corretas.length !== 1) {
      throw new Error(`Questão ${q.idSlug} tem ${corretas.length} alternativas corretas (esperado exatamente 1)`);
    }

    for (const alt of q.alternativas) {
      if (altIdSet.has(alt.id)) {
        throw new Error(`UUID de alternativa duplicado no Lote 11: ${alt.id}`);
      }
      altIdSet.add(alt.id);
      if (!alt.texto || alt.texto.trim().length === 0) {
        throw new Error(`Texto de alternativa vazio na questão ${q.idSlug}`);
      }
    }
  }
  console.log("    ✅ 500 questões e todas as alternativas validadas com sucesso!");

  // 4. Deduplicação Interna do Lote 11 (124.750 pares)
  console.log("\n[3/6] Auditoria de Deduplicação Interna no Lote 11 (124.750 pares)...");
  let maxInternalSim = 0;
  let maxInternalPair = null;
  let internalGte80 = 0;
  let internalGte90 = 0;
  const topInternalPairs = [];

  for (let i = 0; i < lote11Prepared.length; i++) {
    for (let j = i + 1; j < lote11Prepared.length; j++) {
      const qA = lote11Prepared[i];
      const qB = lote11Prepared[j];
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
  console.log(`[+] Similaridade interna máxima no Lote 11: ${(maxInternalSim * 100).toFixed(2)}% (${maxInternalPair?.qA} vs ${maxInternalPair?.qB})`);
  console.log(`[+] Pares internos >= 80%: ${internalGte80}`);
  if (internalGte90 > 0) {
    console.error(`❌ ERRO: ${internalGte90} pares internos com similaridade >= 90%!`);
    process.exit(1);
  }

  // 5. Carregar todas as 6.260 questões e 23.620 alternativas existentes do Supabase
  console.log("\n[4/6] Consultando Supabase de Produção para auditoria das questões existentes...");
  const dbQuestions = await fetchAll(
    "questoes",
    "id, enunciado, prompt_versao, fingerprint_hash, disciplina_id, assunto_id, banca_nome, orgao_nome, ano, tipo"
  );
  console.log(`[+] Total de questões existentes no Supabase: ${dbQuestions.length}`);

  const dbAlternativas = await fetchAll("questoes_alternativas", "id, questao_id, correta, letra, ordem, texto");
  console.log(`[+] Total de alternativas existentes no Supabase: ${dbAlternativas.length}`);

  // 6. Unicidade de UUIDs e Hashes Canônicos
  console.log("\n[5/6] Verificação de Unicidade de UUIDs e Fingerprints (Lote 11 vs Banco)...");
  const dbQuestionIdSet = new Set(dbQuestions.map((q) => q.id));
  const dbAltIdSet = new Set(dbAlternativas.map((a) => a.id));
  const dbFingerprintSet = new Set(dbQuestions.map((q) => q.fingerprint_hash).filter(Boolean));

  let uuidColisoesQuestoes = 0;
  let uuidColisoesAlts = 0;
  let fingerprintColisoes = 0;

  for (const q11 of lote11Prepared) {
    if (dbQuestionIdSet.has(q11.questaoId)) {
      console.error(`[COLISÃO UUID QUESTÃO] UUID já existe no banco: ${q11.questaoId} (${q11.idSlug})`);
      uuidColisoesQuestoes++;
    }
    if (dbFingerprintSet.has(q11.fingerprint)) {
      console.error(`[COLISÃO FINGERPRINT] Fingerprint já existe no banco: ${q11.fingerprint} (${q11.idSlug})`);
      fingerprintColisoes++;
    }
    for (const alt of q11.alternativas) {
      if (dbAltIdSet.has(alt.id)) {
        console.error(`[COLISÃO UUID ALTERNATIVA] UUID já existe no banco: ${alt.id} (${q11.idSlug})`);
        uuidColisoesAlts++;
      }
    }
  }

  if (uuidColisoesQuestoes > 0 || uuidColisoesAlts > 0 || fingerprintColisoes > 0) {
    console.error("❌ ERRO: Colisões detectadas contra o banco de produção!");
    process.exit(1);
  }
  console.log("    ✅ Zero colisões de UUIDs de Questões, UUIDs de Alternativas e Fingerprints!");

  // 7. Deduplicação Cruzada Jaccard 3-Shingles (500 x 6.260 = 3.130.000 comparações)
  console.log("\n[6/6] Executando Deduplicação Cruzada Jaccard 3-Shingles (3.130.000 comparações)...");
  const dbShingles = dbQuestions.map((q) => ({
    id: q.id,
    shingles: generate3Shingles(q.enunciado),
  }));

  let maxCrossSim = 0;
  let maxCrossPair = null;
  let crossGte80 = 0;
  let crossGte90 = 0;
  const topCrossPairs = [];

  for (let i = 0; i < lote11Prepared.length; i++) {
    const q11 = lote11Prepared[i];
    for (let j = 0; j < dbShingles.length; j++) {
      const dbQ = dbShingles[j];
      const sim = calculateJaccardSimilarity(q11.shingles, dbQ.shingles);
      if (sim > maxCrossSim) {
        maxCrossSim = sim;
        maxCrossPair = { q11: q11.idSlug, dbId: dbQ.id, sim };
      }
      if (sim >= 0.70) {
        topCrossPairs.push({ q11: q11.idSlug, dbId: dbQ.id, sim: Number((sim * 100).toFixed(2)) });
      }
      if (sim >= 0.8) {
        crossGte80++;
        console.warn(`[ALERTA CRUZADO >= 80%] ${q11.idSlug} vs DB ${dbQ.id}: ${(sim * 100).toFixed(2)}%`);
      }
      if (sim >= 0.9) {
        crossGte90++;
      }
    }
  }

  console.log(`[+] Similaridade cruzada máxima: ${(maxCrossSim * 100).toFixed(2)}% (${maxCrossPair?.q11} vs DB ${maxCrossPair?.dbId})`);
  console.log(`[+] Pares cruzados >= 80%: ${crossGte80}`);
  console.log(`[+] Pares cruzados >= 90%: ${crossGte90}`);

  if (crossGte90 > 0) {
    console.error(`❌ ERRO: ${crossGte90} pares cruzados com similaridade >= 90%!`);
    process.exit(1);
  }

  // 8. Salvar Relatório Pré-Importação
  console.log("\n[+] Gerando relatório consolidado de auditoria pré-importação...");
  const auditReport = {
    timestamp: new Date().toISOString(),
    bancoInicial: {
      questoes: countQuestoes,
      alternativas: countAlts,
    },
    lote11: {
      questoes: lote11Prepared.length,
      alternativas: totalAltsLote11,
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
    path.join(__dirname, "audit_lote11_pre_import.json"),
    JSON.stringify(auditReport, null, 2),
    "utf8"
  );
  console.log("[+] Relatório salvo em scripts/audit_lote11_pre_import.json");
  console.log("\n🎉 AUDITORIA CRUZADA 100% APROVADA! LOTE 11 PRONTO PARA INGESTÃO!");
}

runCrossBatchAudit().catch((err) => {
  console.error("Erro fatal na auditoria cruzada:", err);
  process.exit(1);
});
