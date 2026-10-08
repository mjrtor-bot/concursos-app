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

async function listAssuntosComQuestoes() {
  const [disciplinas, assuntos, questoes] = await Promise.all([
    fetchAll("disciplinas", "id, nome, slug"),
    fetchAll("assuntos", "id, nome, slug, disciplina_id"),
    fetchAll("questoes", "id, disciplina_id, assunto_id"),
  ]);

  const discMap = new Map(disciplinas.map(d => [d.id, d]));
  const assMap = new Map(assuntos.map(a => [a.id, a]));

  const qCountByAssunto = new Map();
  for (const q of questoes) {
    if (q.assunto_id) {
      qCountByAssunto.set(q.assunto_id, (qCountByAssunto.get(q.assunto_id) || 0) + 1);
    }
  }

  const list = [];
  for (const [assId, count] of qCountByAssunto.entries()) {
    const a = assMap.get(assId);
    const d = a ? discMap.get(a.disciplina_id) : null;
    list.push({
      disciplina: d?.nome || "Desconhecida",
      assunto: a?.nome || assId,
      assunto_id: assId,
      disciplina_id: a?.disciplina_id,
      questoes: count,
    });
  }

  list.sort((a, b) => a.disciplina.localeCompare(b.disciplina) || b.questoes - a.questoes);
  console.log(`Total de assuntos com questões: ${list.length}`);

  // Group by discipline
  const grouped = {};
  for (const item of list) {
    if (!grouped[item.disciplina]) grouped[item.disciplina] = [];
    grouped[item.disciplina].push(item);
  }

  for (const [disc, itens] of Object.entries(grouped)) {
    console.log(`\n=== ${disc} (Total Assuntos com Q: ${itens.length}) ===`);
    for (const item of itens) {
      console.log(`  - [${item.questoes}q] "${item.assunto}" (${item.assunto_id})`);
    }
  }
}

listAssuntosComQuestoes().catch(console.error);
