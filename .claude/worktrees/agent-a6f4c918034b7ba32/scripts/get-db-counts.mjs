import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
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
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function getCounts() {
  const { count: qCount, error: qErr } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  if (qErr) throw qErr;

  const { count: aCount, error: aErr } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  if (aErr) throw aErr;

  console.log(`DB_QUESTOES_COUNT=${qCount}`);
  console.log(`DB_ALTERNATIVAS_COUNT=${aCount}`);
}

getCounts().catch(console.error);
