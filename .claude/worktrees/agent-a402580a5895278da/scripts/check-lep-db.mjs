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

async function checkLep() {
  const { data: qLep } = await supabase
    .from("questoes")
    .select("id, enunciado, disciplina_id, assunto_id, prompt_versao")
    .ilike("enunciado", "%execução penal%")
    .limit(20);

  console.log(`Encontradas ${qLep?.length} questões com 'execução penal' no enunciado (amostra):`);
  const { data: disciplinas } = await supabase.from("disciplinas").select("id, nome");
  const { data: assuntos } = await supabase.from("assuntos").select("id, nome");
  const discMap = Object.fromEntries(disciplinas.map(d => [d.id, d.nome]));
  const assMap = Object.fromEntries(assuntos.map(a => [a.id, a.nome]));

  qLep?.forEach(q => {
    console.log(`- [${q.prompt_versao}] Disc: ${discMap[q.disciplina_id]} | Assunto: ${assMap[q.assunto_id]} | ID: ${q.id}`);
  });
}

checkLep().catch(console.error);
