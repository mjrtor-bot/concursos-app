import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

const envPath = resolve(process.cwd(), ".env.local");
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
let serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (existsSync(envPath)) {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...vals] = trimmed.split("=");
    const val = vals.join("=").replace(/^["'](.*)["']$/, "$1");
    if (key === "NEXT_PUBLIC_SUPABASE_URL") supabaseUrl = val;
    if (key === "NEXT_PUBLIC_SUPABASE_ANON_KEY") anonKey = val;
    if (key === "SUPABASE_SERVICE_ROLE_KEY") serviceKey = val;
  }
}

const supabase = createClient(supabaseUrl, serviceKey || anonKey);

async function checkTables() {
  console.log("Verificando se tabelas de diagnóstico já existem ou precisam ser testadas...");
  const tables = ["mentoria_diagnosticos", "mentoria_diagnostico_disciplinas", "mentoria_diagnostico_respostas"];

  for (const t of tables) {
    const { data, error } = await supabase.from(t).select("id").limit(1);
    if (error) {
      console.log(`Tabela ${t} -> Status: ${error.message}`);
    } else {
      console.log(`Tabela ${t} -> OK (acessível)`);
    }
  }
}

checkTables();
