import fs from "fs";
import path from "path";
import { TODAS_QUESTOES_LOTE10, prepararParaBanco } from "./batch10_modules/index.mjs";

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

async function findTopSimilarities() {
  const backupPath = path.resolve(process.cwd(), "scripts/backup_pre_lote10_snapshot.json");
  const backupData = JSON.parse(fs.readFileSync(backupPath, "utf8"));
  const dbQuestoes = backupData.questoes;

  const l10List = TODAS_QUESTOES_LOTE10.map((q) => {
    const prep = prepararParaBanco(q);
    const fullText = q.enunciado + " " + q.alternativas.map((a) => a.texto).join(" ");
    return {
      qOriginal: q,
      prep,
      fullText,
      shinglesFull: generate3Shingles(fullText),
      shinglesEnun: generate3Shingles(q.enunciado),
    };
  });

  const dbList = dbQuestoes.map((q) => ({
    id: q.id,
    prompt_versao: q.prompt_versao,
    disciplina_id: q.disciplina_id,
    assunto_id: q.assunto_id,
    banca_nome: q.banca_nome,
    orgao_nome: q.orgao_nome,
    enunciado: q.enunciado,
    explicacao: q.explicacao,
    shinglesEnun: generate3Shingles(q.enunciado),
  }));

  console.log(`Buscando top 20 similaridades cruzadas (Enunciado x Enunciado)...`);
  let topCrossEnun = [];

  for (let i = 0; i < l10List.length; i++) {
    const q10 = l10List[i];
    for (let j = 0; j < dbList.length; j++) {
      const dbQ = dbList[j];
      const sim = calculateJaccardSimilarity(q10.shinglesEnun, dbQ.shinglesEnun);
      if (sim > 0.3) {
        topCrossEnun.push({ sim, q10, dbQ });
      }
    }
  }

  topCrossEnun.sort((a, b) => b.sim - a.sim);
  console.log(`Total com sim > 30%: ${topCrossEnun.length}`);
  console.log("Top 10 Enunciado x Enunciado:");
  topCrossEnun.slice(0, 10).forEach((item, idx) => {
    console.log(`${idx + 1}. ${(item.sim * 100).toFixed(2)}% | L10: ${item.q10.prep.idSlug} vs DB: ${item.dbQ.id} (${item.dbQ.prompt_versao})`);
  });

  console.log(`\nBuscando top 20 similaridades internas Lote 10 (Enunciado x Enunciado)...`);
  let topInternalEnun = [];
  for (let i = 0; i < l10List.length; i++) {
    for (let j = i + 1; j < l10List.length; j++) {
      const sim = calculateJaccardSimilarity(l10List[i].shinglesEnun, l10List[j].shinglesEnun);
      if (sim > 0.25) {
        topInternalEnun.push({ sim, q1: l10List[i], q2: l10List[j] });
      }
    }
  }
  topInternalEnun.sort((a, b) => b.sim - a.sim);
  console.log(`Total interno com sim > 25%: ${topInternalEnun.length}`);
  console.log("Top 10 Interno Lote 10:");
  topInternalEnun.slice(0, 10).forEach((item, idx) => {
    console.log(`${idx + 1}. ${(item.sim * 100).toFixed(2)}% | ${item.q1.prep.idSlug} vs ${item.q2.prep.idSlug}`);
  });
}

findTopSimilarities().catch(console.error);
