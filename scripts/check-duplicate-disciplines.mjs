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

async function checkDisciplines() {
  const [disciplinas, questoes] = await Promise.all([
    fetchAll("disciplinas", "id, nome, slug"),
    fetchAll("questoes", "id, disciplina_id"),
  ]);

  const qCountByDisc = new Map();
  for (const q of questoes) {
    if (q.disciplina_id) {
      qCountByDisc.set(q.disciplina_id, (qCountByDisc.get(q.disciplina_id) || 0) + 1);
    }
  }

  const byNormName = new Map();
  for (const d of disciplinas) {
    const norm = normalizeStr(d.nome);
    if (!byNormName.has(norm)) byNormName.set(norm, []);
    byNormName.get(norm).push({
      id: d.id,
      nome: d.nome,
      slug: d.slug,
      questoes: qCountByDisc.get(d.id) || 0
    });
  }

  console.log("Disciplinas com mais de 1 registro com mesmo nome normalizado:");
  for (const [norm, list] of byNormName.entries()) {
    if (list.length > 1) {
      console.log(`\nNome: "${norm}" (${list.length} registros):`);
      console.table(list);
    }
  }
}

checkDisciplines().catch(console.error);
