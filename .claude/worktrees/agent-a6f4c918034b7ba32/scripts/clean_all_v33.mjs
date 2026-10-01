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

async function cleanAllV33() {
  while (true) {
    const { data: rows, error } = await supabase
      .from("questoes")
      .select("id")
      .eq("prompt_versao", "v3.3-lote13")
      .limit(200);

    if (error) {
      console.error(error);
      break;
    }

    if (!rows || rows.length === 0) {
      console.log("Nenhum registro 'v3.3-lote13' restante.");
      break;
    }

    const ids = rows.map(r => r.id);
    await supabase.from("questoes_alternativas").delete().in("questao_id", ids);
    await supabase.from("questoes").delete().in("id", ids);
    console.log(`Deletados ${ids.length} registros...`);
  }

  const { count: countQ } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  const { count: countA } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });
  console.log(`[LIMPEZA CONCLUÍDA] Total questoes: ${countQ}, Total alternativas: ${countA}`);
}

cleanAllV33();
