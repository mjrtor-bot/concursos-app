import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
let url = "", key = "", anon = "";
for (const line of env.split("\n")) {
  const trimmed = line.trim();
  if (trimmed.startsWith("NEXT_PUBLIC_SUPABASE_URL=")) url = trimmed.split("=")[1].trim().replace(/['"]/g, "");
  if (trimmed.startsWith("SUPABASE_SERVICE_ROLE_KEY=")) key = trimmed.split("=")[1].trim().replace(/['"]/g, "");
  if (trimmed.startsWith("NEXT_PUBLIC_SUPABASE_ANON_KEY=")) anon = trimmed.split("=")[1].trim().replace(/['"]/g, "");
}

console.log("Supabase URL:", url);
console.log("Service key present:", Boolean(key));

const supabase = createClient(url, key);

async function probe() {
  // Test existing tables
  const { count: questoesCount, error: qErr } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  console.log("questoes count:", questoesCount, "error:", qErr?.message);

  const { count: altsCount, error: altErr } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });
  console.log("questoes_alternativas count:", altsCount, "error:", altErr?.message);

  // Check mentoria tables
  const mentoriaTables = [
    "mentoria_perfis",
    "mentoria_disponibilidade",
    "mentoria_edital_topicos",
    "mentoria_planos",
    "mentoria_tarefas",
    "mentoria_sessoes_estudo",
    "mentoria_revisoes",
    "mentoria_diagnosticos",
    "mentoria_diagnostico_disciplinas",
    "mentoria_diagnostico_respostas",
  ];

  for (const t of mentoriaTables) {
    const { data, error } = await supabase.from(t).select("*").limit(1);
    console.log(`Table [${t}]:`, error ? `ERROR: ${error.message}` : `FOUND (${data.length} rows)`);
  }
}

probe().catch(console.error);
