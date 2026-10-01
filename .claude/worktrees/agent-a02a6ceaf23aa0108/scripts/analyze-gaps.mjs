import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

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

async function analyzeGaps() {
  const { data: disciplinas } = await supabase.from("disciplinas").select("id, nome, slug");
  const { data: assuntos } = await supabase.from("assuntos").select("id, nome, slug, disciplina_id");
  const discMap = new Map(disciplinas.map((d) => [d.id, d]));
  const assMap = new Map(assuntos.map((a) => [a.id, a]));

  const allQuestoes = [];
  let page = 0;
  while (true) {
    const { data, error } = await supabase
      .from("questoes")
      .select("id, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome, tipo, dificuldade")
      .range(page * 1000, (page + 1) * 1000 - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    allQuestoes.push(...data);
    if (data.length < 1000) break;
    page++;
  }

  // Count by subject
  const subjectCounts = {};
  for (const a of assuntos) {
    const disc = discMap.get(a.disciplina_id);
    const key = `${disc ? disc.nome : "Outra"} | ${a.nome} | ID:${a.id}`;
    subjectCounts[key] = { discNome: disc ? disc.nome : "Outra", assNome: a.nome, assId: a.id, discId: a.disciplina_id, count: 0 };
  }

  for (const q of allQuestoes) {
    if (q.assunto_id) {
      const a = assMap.get(q.assunto_id);
      const disc = discMap.get(q.disciplina_id);
      const key = `${disc ? disc.nome : "Outra"} | ${a ? a.nome : q.assunto_id} | ID:${q.assunto_id}`;
      if (!subjectCounts[key]) {
        subjectCounts[key] = { discNome: disc ? disc.nome : "Outra", assNome: a ? a.nome : "Desconhecido", assId: q.assunto_id, discId: q.disciplina_id, count: 0 };
      }
      subjectCounts[key].count++;
    }
  }

  console.log("=== ASSUNTOS COM BAIXA CONTAGEM OU ZERADOS NAS DISCIPLINAS POLICIAIS ===");
  const sorted = Object.values(subjectCounts).sort((a, b) => a.count - b.count);
  for (const item of sorted.slice(0, 50)) {
    console.log(`- [${item.discNome}] ${item.assNome} (${item.assId}): ${item.count} questões`);
  }
}

analyzeGaps().catch(console.error);
