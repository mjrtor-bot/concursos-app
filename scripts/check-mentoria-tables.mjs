import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const envContent = fs.readFileSync(".env.local", "utf8");
for (const line of envContent.split(/\r?\n/)) {
  const idx = line.indexOf("=");
  if (idx !== -1) {
    process.env[line.substring(0, idx).trim()] = line
      .substring(idx + 1)
      .trim()
      .replace(/^['"]|['"]$/g, "");
  }
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const client = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function main() {
  const tables = [
    "mentoria_perfis",
    "mentoria_disponibilidade",
    "mentoria_edital_topicos",
    "mentoria_planos",
    "mentoria_tarefas",
    "mentoria_sessoes_estudo",
    "mentoria_revisoes",
  ];

  for (const table of tables) {
    const { data, error } = await client.from(table).select("*").limit(1);
    if (error) {
      console.log(`Table ${table}: NOT FOUND or ERROR: ${error.message}`);
    } else {
      console.log(`Table ${table}: EXISTS (data count: ${data.length})`);
    }
  }
}

main().catch(console.error);
