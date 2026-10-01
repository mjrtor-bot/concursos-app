import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import { TODAS_QUESTOES_LOTE10, prepararParaBanco } from "./batch10_modules/index.mjs";

const envPath = path.resolve(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf8");
const env = {};
for (const line of envContent.split(/\r?\n/)) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith("#")) {
    const idx = trimmed.indexOf("=");
    if (idx !== -1) {
      env[trimmed.substring(0, idx).trim()] = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
    }
  }
}

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

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
  const unionSize = setA.size + setB.size - intersection;
  return unionSize === 0 ? 0 : intersection / unionSize;
}

async function comprehensiveAudit() {
  console.log("================================================================================");
  console.log("   AUDITORIA EXAUSTIVA DE SIMILARIDADE: LOTE 10 vs BASE HISTÓRICA (LOTES 1-9)   ");
  console.log("================================================================================\n");

  const backupPath = path.resolve(process.cwd(), "scripts/backup_pre_lote10_snapshot.json");
  const backupData = JSON.parse(fs.readFileSync(backupPath, "utf8"));
  const dbQuestoes = backupData.questoes; // exactly 5760 historical questions

  const l10List = TODAS_QUESTOES_LOTE10.map((q) => {
    const prep = prepararParaBanco(q);
    const fullText = q.enunciado + " " + q.alternativas.map((a) => a.texto).join(" ");
    return {
      q,
      prep,
      fullText,
      shinglesEnun: generate3Shingles(q.enunciado),
      shinglesFull: generate3Shingles(fullText),
    };
  });

  const dbList = dbQuestoes.map((q) => ({
    id: q.id,
    prompt_versao: q.prompt_versao,
    disciplina_id: q.disciplina_id,
    assunto_id: q.assunto_id,
    banca_nome: q.banca_nome,
    orgao_nome: q.orgao_nome,
    ano: q.ano,
    tipo: q.tipo,
    enunciado: q.enunciado,
    explicacao: q.explicacao,
    shinglesEnun: generate3Shingles(q.enunciado),
  }));

  console.log(`[+] Total Lote 10: ${l10List.length}`);
  console.log(`[+] Total Base Histórica (Lotes 1 a 9): ${dbList.length}`);

  // 1. Cross-Batch Jaccard (Enunciado x Enunciado)
  console.log("\n[1/3] Calculando 2.880.000 comparações Cruzadas (Enunciado x Enunciado)...");
  let maxCross = 0;
  let maxCrossPair = null;
  const crossAll = [];

  for (let i = 0; i < l10List.length; i++) {
    const q10 = l10List[i];
    for (let j = 0; j < dbList.length; j++) {
      const dbQ = dbList[j];
      const sim = calculateJaccardSimilarity(q10.shinglesEnun, dbQ.shinglesEnun);
      if (sim > maxCross) {
        maxCross = sim;
        maxCrossPair = { sim, q10, dbQ };
      }
      if (sim >= 0.20) {
        crossAll.push({ sim, q10, dbQ });
      }
    }
  }

  crossAll.sort((a, b) => b.sim - a.sim);

  console.log(`[+] Máxima Similaridade Cruzada (Enunciado x Enunciado): ${(maxCross * 100).toFixed(2)}%`);
  if (maxCrossPair) {
    console.log(`    L10: ${maxCrossPair.q10.prep.idSlug} (${maxCrossPair.q10.prep.questao.id})`);
    console.log(`    DB:  ${maxCrossPair.dbQ.id} (${maxCrossPair.dbQ.prompt_versao})`);
    console.log(`    Enunciado L10: ${maxCrossPair.q10.q.enunciado.substring(0, 120)}...`);
    console.log(`    Enunciado DB:  ${maxCrossPair.dbQ.enunciado.substring(0, 120)}...`);
  }

  // 2. Internal Lote 10 Jaccard (Enunciado x Enunciado)
  console.log("\n[2/3] Calculando 124.750 comparações Internas no Lote 10 (Enunciado x Enunciado)...");
  let maxInternal = 0;
  let maxInternalPair = null;
  const internalAll = [];

  for (let i = 0; i < l10List.length; i++) {
    for (let j = i + 1; j < l10List.length; j++) {
      const q1 = l10List[i];
      const q2 = l10List[j];
      const sim = calculateJaccardSimilarity(q1.shinglesEnun, q2.shinglesEnun);
      if (sim > maxInternal) {
        maxInternal = sim;
        maxInternalPair = { sim, q1, q2 };
      }
      if (sim >= 0.20) {
        internalAll.push({ sim, q1, q2 });
      }
    }
  }

  internalAll.sort((a, b) => b.sim - a.sim);

  console.log(`[+] Máxima Similaridade Interna Lote 10 (Enunciado x Enunciado): ${(maxInternal * 100).toFixed(2)}%`);
  if (maxInternalPair) {
    console.log(`    Q1: ${maxInternalPair.q1.prep.idSlug} (${maxInternalPair.q1.prep.questao.id})`);
    console.log(`    Q2: ${maxInternalPair.q2.prep.idSlug} (${maxInternalPair.q2.prep.questao.id})`);
    console.log(`    Enunciado Q1: ${maxInternalPair.q1.q.enunciado}`);
    console.log(`    Enunciado Q2: ${maxInternalPair.q2.q.enunciado}`);
  }

  // 3. Pares >= 80% (Verificação Obrigatória)
  const gte80Cross = crossAll.filter(x => x.sim >= 0.80);
  const gte80Internal = internalAll.filter(x => x.sim >= 0.80);

  console.log("\n[3/3] Resumo dos Pares >= 80%:");
  console.log(`  - Pares Cruzados >= 80%: ${gte80Cross.length}`);
  console.log(`  - Pares Internos >= 80%: ${gte80Internal.length}`);

  // Top 5 Cruzados
  console.log("\n--- TOP 5 PARES CRUZADOS ---");
  crossAll.slice(0, 5).forEach((item, idx) => {
    console.log(`${idx + 1}. ${(item.sim * 100).toFixed(2)}% | L10: ${item.q10.prep.idSlug} vs DB: ${item.dbQ.id} (${item.dbQ.prompt_versao})`);
  });

  // Top 5 Internos
  console.log("\n--- TOP 5 PARES INTERNOS ---");
  internalAll.slice(0, 5).forEach((item, idx) => {
    console.log(`${idx + 1}. ${(item.sim * 100).toFixed(2)}% | ${item.q1.prep.idSlug} vs ${item.q2.prep.idSlug}`);
  });
}

comprehensiveAudit().catch(console.error);
