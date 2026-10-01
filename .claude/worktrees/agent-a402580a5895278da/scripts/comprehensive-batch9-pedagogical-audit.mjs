import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { TODAS_QUESTOES_LOTE9 } from "./batch9_modules/index.mjs";
import { TAXONOMIA } from "./batch9_modules/taxonomia.mjs";

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

async function runPedagogicalAudit() {
  console.log("================================================================================");
  console.log("       INICIANDO AUDITORIA PEDAGÓGICA INTEGRAL & ANTI-TEMPLATE DO LOTE 9        ");
  console.log("================================================================================\n");

  console.log("[1] Coletando todas as 5.260 questões do Supabase para análise de similaridade...");
  const pageSize = 1000;
  let allDb = [];
  let from = 0;
  while (true) {
    const { data, error } = await supabase
      .from("questoes")
      .select("id, disciplina_id, assunto_id, banca_nome, orgao_nome, ano, tipo, dificuldade, enunciado, explicacao, prompt_versao")
      .range(from, from + pageSize - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    allDb.push(...data);
    from += pageSize;
    if (data.length < pageSize) break;
  }
  console.log(`[+] Total de questões no DB carregadas: ${allDb.length}`);

  // 1. Top Cross Similarities
  console.log("\n[2] Calculando as maiores similaridades cruzadas (Top 10)...");
  const dbShingles = allDb.map(q => ({
    id: q.id,
    prompt_versao: q.prompt_versao,
    shingles: getShingles(q.enunciado, 3),
    enunciado: q.enunciado,
  }));

  const crossScores = [];
  for (const q9 of TODAS_QUESTOES_LOTE9) {
    const s9 = getShingles(q9.enunciado, 3);
    for (const d of dbShingles) {
      const sim = jaccardSimilarity(s9, d.shingles);
      if (sim > 0.50) {
        crossScores.push({
          q9Slug: q9.idSlug,
          q9Enunciado: q9.enunciado,
          dbId: d.id,
          dbPromptVersao: d.prompt_versao,
          dbEnunciado: d.enunciado,
          sim: Number((sim * 100).toFixed(2))
        });
      }
    }
  }

  crossScores.sort((a, b) => b.sim - a.sim);
  console.log(`[+] Total de pares cruzados com similaridade > 50%: ${crossScores.length}`);
  console.log("Top 10 Pares Mais Próximos:");
  crossScores.slice(0, 10).forEach((p, idx) => {
    console.log(`  ${idx + 1}. [${p.sim}%] Lote 9: ${p.q9Slug} vs DB ${p.dbId} (${p.dbPromptVersao})`);
    console.log(`     Lote 9: "${p.q9Enunciado.substring(0, 100)}..."`);
    console.log(`     DB:     "${p.dbEnunciado.substring(0, 100)}..."\n`);
  });

  // 2. Anti-template check internally in Lote 9
  console.log("\n[3] Análise Anti-Template e Repetição Cognitiva no Lote 9...");
  // Check repeated article citations or formulaic patterns
  const articleMap = {};
  const scenarioOpeners = {};
  const explanationPatterns = {};

  for (const q of TODAS_QUESTOES_LOTE9) {
    // Extract articles from enunciado & explicacao
    const artMatches = (q.enunciado + " " + q.explicacao).match(/(?:art(?:igo)?\.?\s*\d+[º\w\-\.]*|lei\s*(?:n[ºo]?\s*)?[\d\.\/]+|s[úu]mula\s*(?:vinculante\s*)?(?:n[ºo]?\s*)?\d+)/gi) || [];
    for (const m of artMatches) {
      const norm = m.toLowerCase().replace(/\s+/g, " ").trim();
      if (!articleMap[norm]) articleMap[norm] = [];
      articleMap[norm].push(q.idSlug);
    }

    // Check openers of enunciados
    const first5Words = q.enunciado.split(/\s+/).slice(0, 5).join(" ").toLowerCase();
    if (!scenarioOpeners[first5Words]) scenarioOpeners[first5Words] = [];
    scenarioOpeners[first5Words].push(q.idSlug);
  }

  console.log("[+] Artigos/Leis mais citados no Lote 9:");
  const sortedArts = Object.entries(articleMap).sort((a, b) => b[1].length - a[1].length).slice(0, 15);
  for (const [art, slugs] of sortedArts) {
    console.log(`  - ${art}: ${slugs.length} questões (${slugs.slice(0, 5).join(", ")}${slugs.length > 5 ? "..." : ""})`);
  }

  console.log("\n[+] Aberturas de enunciado mais frequentes:");
  const sortedOpeners = Object.entries(scenarioOpeners).sort((a, b) => b[1].length - a[1].length).filter(([k, v]) => v.length > 2).slice(0, 10);
  for (const [opener, slugs] of sortedOpeners) {
    console.log(`  - "${opener}...": ${slugs.length} questões (${slugs.join(", ")})`);
  }

  // 3. Extract all legal citations and save to report
  console.log("\n[4] Extraindo e catalogando todas as referências normativas e jurisprudenciais do Lote 9...");
  const legalCitations = [];
  for (const q of TODAS_QUESTOES_LOTE9) {
    const text = q.enunciado + "\n" + q.explicacao + "\n" + q.alternativas.map(a => a.texto).join(" ");
    const matches = text.match(/(?:art(?:igo)?\.?\s*\d+[º\w\-\.]*|lei\s*(?:n[ºo]?\s*)?[\d\.\/]+|s[úu]mula\s*(?:vinculante\s*)?(?:n[ºo]?\s*)?\d+|tema\s*(?:n[ºo]?\s*)?\d+|adi\s*(?:n[ºo]?\s*)?\d+|re\s*(?:n[ºo]?\s*)?\d+|hc\s*(?:n[ºo]?\s*)?\d+|c[óo]digo\s+[\w\s]+|resolu[çc][ãa]o\s*(?:contran\s*)?(?:n[ºo]?\s*)?\d+)/gi) || [];
    if (matches.length > 0) {
      legalCitations.push({
        idSlug: q.idSlug,
        disciplina: q.disciplina_id,
        assunto: q.assunto_id,
        citations: Array.from(new Set(matches.map(m => m.trim())))
      });
    }
  }

  console.log(`[+] Total de questões com referências normativas/jurisprudenciais identificadas: ${legalCitations.length}/500`);

  fs.writeFileSync("scripts/pedagogical_audit_data.json", JSON.stringify({
    crossScores: crossScores.slice(0, 20),
    legalCitationsCount: legalCitations.length,
    legalCitations: legalCitations
  }, null, 2));

  console.log("\n[✓] Dados da auditoria salvos em scripts/pedagogical_audit_data.json");
}

runPedagogicalAudit().catch(console.error);
