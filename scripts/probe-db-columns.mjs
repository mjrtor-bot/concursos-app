import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const envContent = fs.readFileSync(".env.local", "utf8");
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

async function main() {
  const { data: qData, error: qErr } = await supabase.from("questoes").select("*").limit(1);
  if (qErr) {
    console.error("qErr:", qErr);
    return;
  }
  console.log("Columns in questoes:", Object.keys(qData[0]));
  console.log("Sample questoes row:", qData[0]);

  const { data: aData, error: aErr } = await supabase.from("questoes_alternativas").select("*").limit(1);
  if (aErr) {
    console.error("aErr:", aErr);
    return;
  }
  console.log("Columns in questoes_alternativas:", Object.keys(aData[0]));
  console.log("Sample alternativas row:", aData[0]);
}

main();
