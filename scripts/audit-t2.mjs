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

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

async function main() {
  console.log("Checking official vs user editais...");
  const { data: officialEditais } = await supabase
    .from("editais_concurso")
    .select("id, titulo, concurso_id, cargo_id, criado_por, visibilidade")
    .is("criado_por", null);

  console.log(`Found ${officialEditais?.length || 0} official editais in catalog:`);
  officialEditais?.forEach(e => console.log(` - [${e.id}] ${e.titulo}`));

  const { data: userUploads } = await supabase
    .from("editais_usuario")
    .select("id, nome, usuario_id, status, edital_id, created_at")
    .not("edital_id", "is", null);

  console.log(`\nFound ${userUploads?.length || 0} user uploads with edital_id set:`);
  const officialIds = new Set(officialEditais?.map(e => e.id) || []);
  for (const u of userUploads || []) {
    const isOfficial = officialIds.has(u.edital_id);
    console.log(` - Upload [${u.id}] status=${u.status} edital_id=${u.edital_id} (points to official? ${isOfficial}) nome=${u.nome}`);
  }
}

main().catch(console.error);
