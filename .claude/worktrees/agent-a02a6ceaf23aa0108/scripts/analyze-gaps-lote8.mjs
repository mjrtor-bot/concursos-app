import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

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

async function analyzeGaps() {
  console.log("=== ANÁLISE DE GAPS PÓS-LOTE 7 ===");

  const questoes = await fetchAll("questoes", "id, disciplina_id, assunto_id, subassunto_id, banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade, prompt_versao");
  const disciplinas = await fetchAll("disciplinas", "id, nome, slug");
  const assuntos = await fetchAll("assuntos", "id, nome, slug, disciplina_id");

  const discMap = new Map(disciplinas.map((d) => [d.id, d.nome]));
  const assMap = new Map(assuntos.map((a) => [a.id, a]));

  const statsPorAssunto = {};
  for (const a of assuntos) {
    const dNome = discMap.get(a.disciplina_id) || a.disciplina_id;
    statsPorAssunto[a.id] = {
      assuntoId: a.id,
      assuntoSlug: a.slug,
      assuntoNome: a.nome,
      disciplinaId: a.disciplina_id,
      disciplinaNome: dNome,
      count: 0,
      orgaos: new Set(),
      dificuldades: { facil: 0, medio: 0, dificil: 0 },
    };
  }

  for (const q of questoes) {
    if (statsPorAssunto[q.assunto_id]) {
      statsPorAssunto[q.assunto_id].count++;
      if (q.orgao_nome) statsPorAssunto[q.assunto_id].orgaos.add(q.orgao_nome);
      if (q.dificuldade && statsPorAssunto[q.assunto_id].dificuldades[q.dificuldade] !== undefined) {
        statsPorAssunto[q.assunto_id].dificuldades[q.dificuldade]++;
      }
    }
  }

  const list = Object.values(statsPorAssunto).map((s) => ({
    disciplina: s.disciplinaNome,
    assunto: s.assuntoNome,
    assuntoSlug: s.assuntoSlug,
    assuntoId: s.assuntoId,
    qtd: s.count,
    carreiras: Array.from(s.orgaos).slice(0, 4).join(", ") || "Nenhuma",
  }));

  list.sort((a, b) => a.disciplina.localeCompare(b.disciplina) || a.qtd - b.qtd);

  console.log("\nAssuntos ordenados por menor contagem em cada disciplina:");
  for (const item of list) {
    console.log(`[${item.disciplina}] ${item.assunto} (${item.assuntoSlug}): ${item.qtd} questões`);
  }

  // Análise de carreiras agregadas
  const carreirasNorm = {
    PF: 0,
    PRF: 0,
    PC: 0,
    PM: 0,
    PP: 0,
    GM: 0,
    CBM: 0,
    Outros: 0,
  };

  for (const q of questoes) {
    const o = (q.orgao_nome || "").toLowerCase();
    if (o.includes("rodoviária") || o.includes("prf")) carreirasNorm.PRF++;
    else if (o.includes("federal") && !o.includes("penal")) carreirasNorm.PF++;
    else if (o.includes("penal") || o.includes("depen") || o.includes("senappen")) carreirasNorm.PP++;
    else if (o.includes("bombeiro") || o.includes("cbm")) carreirasNorm.CBM++;
    else if (o.includes("guarda") || o.includes("gm")) carreirasNorm.GM++;
    else if (o.includes("militar") || o.includes("pm")) carreirasNorm.PM++;
    else if (o.includes("civil") || o.includes("pc")) carreirasNorm.PC++;
    else carreirasNorm.Outros++;
  }

  console.log("\n--- DISTRIBUIÇÃO AGREGADA POR CARREIRA POLICIAL (BASE 4.760) ---");
  console.table(carreirasNorm);

  fs.writeFileSync(
    path.join(__dirname, "gaps_lote8_analysis.json"),
    JSON.stringify({ list, carreirasNorm }, null, 2),
    "utf8"
  );
}

analyzeGaps().catch(console.error);
