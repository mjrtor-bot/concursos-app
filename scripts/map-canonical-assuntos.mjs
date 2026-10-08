import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  for (const line of envContent.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        process.env[trimmed.substring(0, idx).trim()] = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
      }
    }
  }
}

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function fetchAll(tableName, select = "*") {
  let all = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from(tableName)
      .select(select)
      .range(page * pageSize, (page + 1) * pageSize - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    all.push(...data);
    if (data.length < pageSize) break;
    page++;
  }
  return all;
}

function normalizeStr(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\w\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function analyzeMapping() {
  const [disciplinas, assuntos, questoes, topicos, equivs] = await Promise.all([
    fetchAll("disciplinas", "id, nome, slug"),
    fetchAll("assuntos", "id, nome, slug, disciplina_id"),
    fetchAll("questoes", "id, disciplina_id, assunto_id"),
    fetchAll("edital_topicos", "id, edital_id, disciplina_id, assunto_id"),
    fetchAll("assunto_equivalencias", "*"),
  ]);

  const discMap = new Map(disciplinas.map(d => [d.id, d]));
  const assMap = new Map(assuntos.map(a => [a.id, a]));

  const qCountByAssunto = new Map();
  for (const q of questoes) {
    if (q.assunto_id) {
      qCountByAssunto.set(q.assunto_id, (qCountByAssunto.get(q.assunto_id) || 0) + 1);
    }
  }

  // Canonical assuntos = assuntos com questoes
  const canonicalAssuntos = assuntos.filter(a => (qCountByAssunto.get(a.id) || 0) > 0);
  console.log(`Total canonical assuntos com questões: ${canonicalAssuntos.length}`);

  // Agrupar canonical assuntos por disciplina
  const canonicalByDisc = new Map();
  for (const ca of canonicalAssuntos) {
    if (!canonicalByDisc.has(ca.disciplina_id)) canonicalByDisc.set(ca.disciplina_id, []);
    canonicalByDisc.get(ca.disciplina_id).push(ca);
  }

  // Também agrupar canonical por nome normalizado de disciplina
  const canonicalByDiscName = new Map();
  for (const ca of canonicalAssuntos) {
    const d = discMap.get(ca.disciplina_id);
    const dNameNorm = normalizeStr(d?.nome || "");
    if (!canonicalByDiscName.has(dNameNorm)) canonicalByDiscName.set(dNameNorm, []);
    canonicalByDiscName.get(dNameNorm).push(ca);
  }

  // Verificar quais tópicos de edital precisam de mapeamento
  const topicosSemQ = topicos.filter(t => t.assunto_id && (qCountByAssunto.get(t.assunto_id) || 0) === 0);
  console.log(`Tópicos de edital sem questões diretas: ${topicosSemQ.length}`);

  // Testar algoritmo de matching de texto
  let matchedExactOrSubstring = 0;
  let matchedKeyword = 0;
  let notMatched = 0;
  const sampleMatches = [];

  for (const t of topicosSemQ) {
    const assEdital = assMap.get(t.assunto_id);
    if (!assEdital) {
      notMatched++;
      continue;
    }

    const editalDisc = discMap.get(t.disciplina_id);
    const editalDiscNorm = normalizeStr(editalDisc?.nome || "");

    // Buscar canonical candidates na mesma disciplina ou em disciplina com nome compatível
    let candidates = canonicalByDisc.get(t.disciplina_id) || [];
    if (candidates.length === 0) {
      candidates = canonicalByDiscName.get(editalDiscNorm) || [];
    }

    // Se ainda não achou, tentar disciplinas irmãs (ex: "Direito Penal" vs "Noções de Direito Penal")
    if (candidates.length === 0) {
      for (const [dName, list] of canonicalByDiscName.entries()) {
        if (dName.includes(editalDiscNorm) || editalDiscNorm.includes(dName)) {
          candidates = list;
          break;
        }
      }
    }

    if (candidates.length === 0) {
      notMatched++;
      continue;
    }

    const assEditalNorm = normalizeStr(assEdital.nome);
    const editalTokens = assEditalNorm.split(" ").filter(tok => tok.length > 3);

    let bestScore = 0;
    let bestCandidate = null;

    for (const cand of candidates) {
      const candNorm = normalizeStr(cand.nome);
      if (candNorm === assEditalNorm) {
        bestScore = 100;
        bestCandidate = cand;
        break;
      }
      if (candNorm.includes(assEditalNorm) || assEditalNorm.includes(candNorm)) {
        if (bestScore < 80) {
          bestScore = 80;
          bestCandidate = cand;
        }
      }

      // Token overlap
      const candTokens = candNorm.split(" ").filter(tok => tok.length > 3);
      let commonTokens = 0;
      for (const tok of editalTokens) {
        if (candTokens.includes(tok)) commonTokens++;
      }

      const score = commonTokens > 0 ? (commonTokens / Math.max(editalTokens.length, candTokens.length)) * 60 : 0;
      if (score > bestScore && score >= 20) {
        bestScore = score;
        bestCandidate = cand;
      }
    }

    if (bestCandidate) {
      if (bestScore >= 80) matchedExactOrSubstring++;
      else matchedKeyword++;
      if (sampleMatches.length < 20) {
        sampleMatches.push({
          disciplina: editalDisc?.nome,
          editalAssunto: assEdital.nome,
          canonicalAssunto: bestCandidate.nome,
          questoesNoCanonical: qCountByAssunto.get(bestCandidate.id),
          score: bestScore.toFixed(0)
        });
      }
    } else {
      notMatched++;
    }
  }

  console.log(`\nResultados do teste de matching heurístico:`);
  console.log(`- Match exato / substring: ${matchedExactOrSubstring}`);
  console.log(`- Match por palavras-chave: ${matchedKeyword}`);
  console.log(`- Não mapeados (precisarão de fallback para a disciplina ou IA): ${notMatched}`);
  console.log(`\nAmostra de 20 mapeamentos:`);
  console.table(sampleMatches);
}

analyzeMapping().catch(console.error);
