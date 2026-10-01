import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf8");
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

async function listAllTaxonomy() {
  const { data: disciplinas } = await supabase.from("disciplinas").select("id, nome, slug").order("nome");
  const { data: assuntos } = await supabase.from("assuntos").select("id, nome, slug, disciplina_id").order("nome");

  const structure = {};
  for (const d of disciplinas) {
    structure[d.nome] = {
      id: d.id,
      slug: d.slug,
      assuntos: assuntos.filter((a) => a.disciplina_id === d.id).map((a) => ({ id: a.id, nome: a.nome, slug: a.slug })),
    };
  }

  fs.writeFileSync("scripts/taxonomia_prod_dump.json", JSON.stringify(structure, null, 2), "utf8");
  console.log("Taxonomia exportada com sucesso.");
}

listAllTaxonomy().catch(console.error);
