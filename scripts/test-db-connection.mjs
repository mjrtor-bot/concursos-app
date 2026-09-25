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
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const adminClient = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const anonClient = createClient(SUPABASE_URL, ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function main() {
  console.log("Testing tables with adminClient:");
  const tables = [
    "respostas_usuarios",
    "caderno_erros",
    "questoes_favoritas",
    "questoes_anotacoes",
    "questoes_historico_alteracoes",
    "questoes",
    "questoes_alternativas"
  ];
  for (const t of tables) {
    const { data, count, error } = await adminClient
      .from(t)
      .select("*", { count: "exact", head: true });
    console.log(`[Admin] Table ${t}: count=${count}, error=${error?.message || "none"}`);
  }

  console.log("\nTesting tables with anonClient (unauthenticated):");
  for (const t of tables) {
    const { data, count, error } = await anonClient
      .from(t)
      .select("*", { count: "exact", head: true });
    console.log(`[Anon] Table ${t}: count=${count}, error=${error?.message || "none"}`);
  }
}

main().catch(console.error);
