import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

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

async function inspect() {
  const { data: disciplinas } = await supabase.from("disciplinas").select("id, nome, slug").order("nome");
  const { data: assuntos } = await supabase.from("assuntos").select("id, disciplina_id, nome, slug").order("nome");

  console.log("=== MAPEAMENTO DE DISCIPLINAS E ASSUNTOS NO SUPABASE ===\n");
  for (const d of disciplinas) {
    const dAssuntos = assuntos.filter(a => a.disciplina_id === d.id);
    console.log(`\n📁 DISCIPLINA: [${d.slug}] ${d.nome} (UUID: ${d.id}) - ${dAssuntos.length} assuntos:`);
    for (const a of dAssuntos) {
      console.log(`   - [${a.slug}] ${a.nome} (UUID: ${a.id})`);
    }
  }
}

inspect().catch(console.error);
