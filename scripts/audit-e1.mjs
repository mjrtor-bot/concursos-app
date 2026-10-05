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
  const { data: edital } = await supabase.from('editais_concurso').select('*').eq('id', 'f0abc8e7-3466-423e-9d65-dbb2892e8500').maybeSingle();
  console.log('Edital fad17caf target:', edital);
  if (edital) {
    const { data: concurso } = await supabase.from('concursos').select('*').eq('id', edital.concurso_id).maybeSingle();
    console.log('Concurso fad17caf target:', concurso);
    const { data: topicos } = await supabase.from('edital_topicos').select('id, disciplina_id, assunto_id, subassunto_id').eq('edital_id', edital.id);
    console.log('Topicos em f0abc8e7:', topicos?.length);
  }

  // Check unique constraints on edital_topicos
  const { data: indexes } = await supabase.rpc('exec_sql', {
    sql_query: "SELECT indexname, indexdef FROM pg_indexes WHERE tablename = 'edital_topicos';"
  }).catch(() => ({ data: null }));
  console.log("Indexes on edital_topicos (via rpc if available):", indexes);
}

main().catch(console.error);
