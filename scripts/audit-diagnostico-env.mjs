import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

const envPath = resolve(process.cwd(), ".env.local");
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (existsSync(envPath)) {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...vals] = trimmed.split("=");
    const val = vals.join("=").replace(/^["'](.*)["']$/, "$1");
    if (key === "NEXT_PUBLIC_SUPABASE_URL") supabaseUrl = val;
    if (key === "NEXT_PUBLIC_SUPABASE_ANON_KEY") anonKey = val;
  }
}

const supabase = createClient(supabaseUrl, anonKey);

async function audit() {
  console.log("=== AUDITORIA PARA RELEASE 2 ===");

  // 1. Disciplinas
  const { data: disciplinas, error: dErr } = await supabase
    .from("disciplinas")
    .select("id, nome")
    .order("nome");
  console.log(`Disciplinas cadastradas (${disciplinas?.length || 0}):`, disciplinas?.map(d => `${d.nome} (${d.id})`));

  // 2. Provas / Concursos
  const { data: provas } = await supabase.from("provas").select("id, titulo, orgao, ano").limit(5);
  console.log("Exemplos de Provas:", provas);

  // 3. Questões por disciplina
  if (disciplinas && disciplinas.length > 0) {
    for (const disc of disciplinas.slice(0, 5)) {
      const { count } = await supabase
        .from("questoes")
        .select("*", { count: "exact", head: true })
        .eq("disciplina_id", disc.id);
      console.log(`Questões em ${disc.nome}: ${count}`);
    }
  }
}

audit();
