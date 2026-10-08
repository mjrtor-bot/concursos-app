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

async function listCanonical() {
  const [disciplinas, assuntos, questoes] = await Promise.all([
    fetchAll("disciplinas", "id, nome, slug"),
    fetchAll("assuntos", "id, nome, slug, disciplina_id"),
    fetchAll("questoes", "id, disciplina_id, assunto_id"),
  ]);

  const discMap = new Map(disciplinas.map(d => [d.id, d]));
  const qCountByAssunto = new Map();
  for (const q of questoes) {
    if (q.assunto_id) {
      qCountByAssunto.set(q.assunto_id, (qCountByAssunto.get(q.assunto_id) || 0) + 1);
    }
  }

  const list = assuntos
    .filter(a => (qCountByAssunto.get(a.id) || 0) > 0)
    .map(a => {
      const d = discMap.get(a.disciplina_id);
      return {
        disciplina: d?.nome || "Outro",
        assunto: a.nome,
        questoes: qCountByAssunto.get(a.id),
        id: a.id
      };
    })
    .sort((a, b) => a.disciplina.localeCompare(b.disciplina) || b.questoes - a.questoes);

  const grouped = {};
  for (const item of list) {
    if (!grouped[item.disciplina]) grouped[item.disciplina] = [];
    grouped[item.disciplina].push(item);
  }

  for (const [disc, itens] of Object.entries(grouped)) {
    console.log(`\n=== ${disc} (${itens.reduce((acc, c) => acc + c.questoes, 0)} questoes, ${itens.length} assuntos) ===`);
    for (const item of itens) {
      console.log(`  - [${item.questoes}q] "${item.assunto}"`);
    }
  }
}

listCanonical().catch(console.error);
