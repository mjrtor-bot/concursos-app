import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

async function dumpTaxonomy() {
  const { data: disciplinas } = await supabase.from("disciplinas").select("id, nome").order("nome");
  const { data: assuntos } = await supabase.from("assuntos").select("id, nome, disciplina_id").order("nome");

  console.log(`Disciplinas: ${disciplinas.length}, Assuntos: ${assuntos.length}`);
  fs.writeFileSync(
    path.join(__dirname, "taxonomia_prod_dump_lote13.json"),
    JSON.stringify({ disciplinas, assuntos }, null, 2),
    "utf8"
  );
  console.log("Salvo taxonomia_prod_dump_lote13.json");
}

dumpTaxonomy();
