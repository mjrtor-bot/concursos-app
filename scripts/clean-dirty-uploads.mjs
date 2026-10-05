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
  console.log("Fetching official catalog editais...");
  const { data: officialEditais } = await supabase
    .from("editais_concurso")
    .select("id")
    .is("criado_por", null);

  const officialIds = new Set(officialEditais?.map(e => e.id) || []);
  console.log(`Found ${officialIds.size} official catalog editais.`);

  // Find unconfirmed/pending/errored user uploads incorrectly pointing to official editais
  const { data: uploads } = await supabase
    .from("editais_usuario")
    .select("id, status, edital_id, nome, usuario_id")
    .in("status", ["aguardando_processamento", "processando", "aguardando_revisao", "erro", "revisao_sem_conteudo"])
    .not("edital_id", "is", null);

  console.log(`Checking ${uploads?.length || 0} non-confirmed uploads with edital_id...`);

  let cleaned = 0;
  for (const u of uploads || []) {
    if (officialIds.has(u.edital_id)) {
      console.log(`Clearing invalid official edital_id ${u.edital_id} from upload ${u.id} (status: ${u.status}, nome: ${u.nome})`);
      const { error } = await supabase
        .from("editais_usuario")
        .update({ edital_id: null })
        .eq("id", u.id);
      if (error) {
        console.error(`Error updating upload ${u.id}:`, error);
      } else {
        cleaned++;
      }
    }
  }

  console.log(`Cleaned ${cleaned} uploads.`);
}

main().catch(console.error);
