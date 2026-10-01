import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { TODAS_QUESTOES_LOTE9 } from "./batch9_modules/index.mjs";

const envContent = fs.readFileSync(".env.local", "utf8");
const env = {};
for (const line of envContent.split(/\r?\n/)) {
  const t = line.trim();
  if (t && !t.startsWith("#")) {
    const idx = t.indexOf("=");
    if (idx !== -1) env[t.substring(0, idx).trim()] = t.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
  }
}
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

function getShingles(text, n = 3) {
  const words = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
  if (words.length < n) return new Set([words.join(" ")]);
  const shingles = new Set();
  for (let i = 0; i <= words.length - n; i++) {
    shingles.add(words.slice(i, i + n).join(" "));
  }
  return shingles;
}

function jaccardSimilarity(setA, setB) {
  if (!setA.size || !setB.size) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

async function deepScan() {
  console.log("Coletando todas as 5.260 questões e alternativas do banco...");
  const pageSize = 1000;
  let allQ = [];
  let from = 0;
  while (true) {
    const { data, error } = await supabase
      .from("questoes")
      .select("id, prompt_versao, disciplina_id, assunto_id, banca_nome, orgao_nome, ano, tipo, dificuldade, enunciado, explicacao")
      .range(from, from + pageSize - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    allQ.push(...data);
    from += pageSize;
    if (data.length < pageSize) break;
  }

  let allA = [];
  from = 0;
  while (true) {
    const { data, error } = await supabase
      .from("questoes_alternativas")
      .select("id, questao_id, texto, correta, letra, ordem")
      .range(from, from + pageSize - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    allA.push(...data);
    from += pageSize;
    if (data.length < pageSize) break;
  }

  const altsByQ = {};
  for (const a of allA) {
    if (!altsByQ[a.questao_id]) altsByQ[a.questao_id] = [];
    altsByQ[a.questao_id].push(a.texto);
  }

  const dbEntries = allQ.map(q => {
    const alts = altsByQ[q.id] || [];
    const full = q.enunciado + " " + alts.join(" ");
    return {
      id: q.id,
      prompt_versao: q.prompt_versao,
      enunciado: q.enunciado,
      enunciadoShingles: getShingles(q.enunciado, 3),
      fullShingles: getShingles(full, 3),
      explicacao: q.explicacao
    };
  });

  console.log(`Carregadas ${dbEntries.length} questões do banco com alternativas.`);

  const problematicList = [];

  for (const q9 of TODAS_QUESTOES_LOTE9) {
    const full9 = q9.enunciado + " " + q9.alternativas.map(a => a.texto).join(" ");
    const eShingles9 = getShingles(q9.enunciado, 3);
    const fShingles9 = getShingles(full9, 3);

    let maxESim = 0;
    let maxFSim = 0;
    let bestMatch = null;

    for (const d of dbEntries) {
      const eSim = jaccardSimilarity(eShingles9, d.enunciadoShingles);
      const fSim = jaccardSimilarity(fShingles9, d.fullShingles);

      if (eSim > maxESim) {
        maxESim = eSim;
        if (eSim >= maxFSim) bestMatch = { d, eSim, fSim };
      }
      if (fSim > maxFSim) {
        maxFSim = fSim;
        if (fSim > maxESim) bestMatch = { d, eSim, fSim };
      }
    }

    if (maxESim >= 0.70 || maxFSim >= 0.70) {
      problematicList.push({
        idSlug: q9.idSlug,
        tipo: q9.tipo,
        dificuldade: q9.dificuldade,
        enunciado: q9.enunciado,
        explicacao: q9.explicacao,
        maxESim: Number((maxESim * 100).toFixed(2)),
        maxFSim: Number((maxFSim * 100).toFixed(2)),
        matchedDbId: bestMatch?.d.id,
        matchedPrompt: bestMatch?.d.prompt_versao,
        matchedEnunciado: bestMatch?.d.enunciado,
        matchedExplicacao: bestMatch?.d.explicacao
      });
    }
  }

  console.log(`\n[!] Total de questões do Lote 9 com similaridade de enunciado ou full >= 70%: ${problematicList.length}`);
  problematicList.forEach((p, idx) => {
    console.log(`\n--- [${idx + 1}/${problematicList.length}] ${p.idSlug} (Enunciado Sim: ${p.maxESim}%, Full Sim: ${p.maxFSim}%) ---`);
    console.log(`  Lote 9 Enunciado: ${p.enunciado}`);
    console.log(`  DB Match (${p.matchedDbId} [${p.matchedPrompt}]): ${p.matchedEnunciado}`);
  });

  fs.writeFileSync("scripts/problematic_similarities.json", JSON.stringify(problematicList, null, 2));
}

deepScan().catch(console.error);
