import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";

const envPath = path.resolve(process.cwd(), ".env.local");
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

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function check() {
  const { data, error } = await supabase.from("questoes").select("id, prompt_versao, created_at").order("created_at", { ascending: false }).limit(600);
  if (error) {
    console.error(error);
    return;
  }
  const versions = {};
  for (const row of data) {
    versions[row.prompt_versao] = (versions[row.prompt_versao] || 0) + 1;
  }
  console.log("Amostra das 600 questões mais recentes por prompt_versao:", versions);

  const { count: countQ } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  const { count: countA } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });
  console.log("Total geral questoes no DB:", countQ);
  console.log("Total geral alternativas no DB:", countA);

  const { count: countV33 } = await supabase.from("questoes").select("*", { count: "exact", head: true }).eq("prompt_versao", "v3.3-lote13");
  console.log("Total com prompt_versao = 'v3.3-lote13':", countV33);
}

check();
