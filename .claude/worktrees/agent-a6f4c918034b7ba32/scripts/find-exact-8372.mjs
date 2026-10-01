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
  if (!setA || !setB || setA.size === 0 || setB.size === 0) return { sim: 0, intersection: [], unionSize: 0 };
  const intersection = [];
  for (const item of setA) {
    if (setB.has(item)) intersection.push(item);
  }
  const unionSize = setA.size + setB.size - intersection.length;
  const sim = unionSize === 0 ? 0 : intersection.length / unionSize;
  return { sim, intersection, unionSize, sizeA: setA.size, sizeB: setB.size };
}

async function findExact8372() {
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

  console.log("Testando como no audit-cross-batch10-pre-import.mjs (L10 fullText vs DB enunciado)...");
  const matches = [];

  for (let i = 0; i < l10List.length; i++) {
    const q10 = l10List[i];
    for (let j = 0; j < dbQuestoes.length; j++) {
      const dbQ = dbQuestoes[j];
      const dbShingles = generate3Shingles(dbQ.enunciado);
      const res = calculateJaccardSimilarity(q10.shinglesFull, dbShingles);
      if (res.sim >= 0.70) {
        matches.push({
          sim: res.sim,
          simPct: (res.sim * 100).toFixed(2),
          q10,
          dbQ,
          res,
        });
      }
    }
  }

  matches.sort((a, b) => b.sim - a.sim);
  console.log(`Encontrados ${matches.length} pares >= 70%:`);
  for (const m of matches) {
    console.log(`\n=======================================================`);
    console.log(`PAR [${m.simPct}%]`);
    console.log(`Lote 10: ${m.q10.prep.idSlug} (${m.q10.prep.questao.id})`);
    console.log(`DB: ${m.dbQ.id} (prompt_versao: ${m.dbQ.prompt_versao}, disciplina: ${m.dbQ.disciplina_id}, assunto: ${m.dbQ.assunto_id})`);
    console.log(`Banca/Órgão L10: ${m.q10.qOriginal.banca_nome} / ${m.q10.qOriginal.orgao_nome}`);
    console.log(`Banca/Órgão DB: ${m.dbQ.banca_nome} / ${m.dbQ.orgao_nome}`);
    console.log(`--- ENUNCIADO L10 ---:\n${m.q10.qOriginal.enunciado}`);
    console.log(`--- ALTERNATIVAS L10 ---:`);
    m.q10.qOriginal.alternativas.forEach(a => console.log(`  [${a.letra || (a.correta ? 'C' : 'E')}] ${a.texto} (correta: ${a.correta})`));
    console.log(`--- ENUNCIADO DB ---:\n${m.dbQ.enunciado}`);
    console.log(`--- EXPLICAÇÃO L10 ---:\n${m.q10.qOriginal.explicacao}`);
    console.log(`--- EXPLICAÇÃO DB ---:\n${m.dbQ.explicacao}`);
    console.log(`--- INTERSEÇÃO SHINGLES (${m.res.intersection.length}) ---:\n${m.res.intersection.join(" | ")}`);
  }

  // Buscar alternativas do banco para esses DB IDs
  const dbIds = matches.map(m => m.dbQ.id);
  if (dbIds.length > 0) {
    const { data: altsDb } = await supabase.from("questoes_alternativas").select("*").in("questao_id", dbIds);
    console.log(`\nAlternativas do DB carregadas: ${altsDb?.length}`);
    for (const m of matches) {
      const dbAlts = altsDb?.filter(a => a.questao_id === m.dbQ.id) || [];
      console.log(`\nDB Questão ${m.dbQ.id} alternativas:`);
      dbAlts.forEach(a => console.log(`  [${a.letra || (a.correta ? 'C' : 'E')}] ${a.texto} (correta: ${a.correta})`));
    }
  }
}

findExact8372().catch(console.error);
