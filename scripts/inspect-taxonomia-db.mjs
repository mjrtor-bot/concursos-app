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

async function run() {
  const { data: disc } = await supabase.from("disciplinas").select("*").order("nome");
  console.log("=== DISCIPLINAS NO BANCO ===");
  for (const d of disc) {
    console.log(`${d.id} | ${d.slug} | ${d.nome}`);
  }

  const { data: ass } = await supabase.from("assuntos").select("*, disciplinas(nome, slug)").order("disciplina_id");
  console.log("\n=== ASSUNTOS NO BANCO ===");
  for (const a of ass) {
    console.log(`${a.id} | ${a.slug} | ${a.nome} | Disc: ${a.disciplinas?.nome} (${a.disciplina_id})`);
  }

  const { data: sub } = await supabase.from("subassuntos").select("*").order("assunto_id");
  console.log("\n=== SUBASSUNTOS NO BANCO ===");
  if (sub && sub.length > 0) {
    for (const s of sub) {
      console.log(`${s.id} | ${s.slug} | ${s.nome} | Assunto: ${s.assunto_id}`);
    }
  } else {
    console.log("Nenhum subassunto cadastrado.");
  }
}

run().catch(console.error);
