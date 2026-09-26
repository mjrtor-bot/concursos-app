import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const envContent = fs.readFileSync(".env.local", "utf8");
for (const line of envContent.split(/\r?\n/)) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith("#")) {
    const idx = trimmed.indexOf("=");
    if (idx !== -1) {
      process.env[trimmed.substring(0, idx).trim()] = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
    }
  }
}
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const { count: lote5Count } = await supabase.from("questoes").select("*", { count: "exact", head: true }).eq("prompt_versao", "v2.5-lote5");
const { count: totalCount } = await supabase.from("questoes").select("*", { count: "exact", head: true });
console.log("Lote 5 count in DB:", lote5Count);
console.log("Total count in DB:", totalCount);
