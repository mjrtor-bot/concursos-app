import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";

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

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fixTaxonomy() {
  console.log("Saneando 6 questões com divergência entre disciplina e assunto...");

  // 5 CTB questions -> disciplina Legislação de Trânsito
  const ctbIds = [
    "1a43d916-850d-59cb-8704-d49b8f3298a5",
    "613fb473-3a52-5fde-a6bd-70dd871db11d",
    "7c753468-032b-5949-b83c-a719314e5c62",
    "9f8e489e-d70a-5038-b34a-59cf3c50d2ff",
    "b9ea5168-42b3-5116-add8-e6936c37bd9d"
  ];

  for (const id of ctbIds) {
    const { error } = await supabase
      .from("questoes")
      .update({ disciplina_id: "589019e2-64df-583b-88f5-dc2e0eeb60e6" })
      .eq("id", id);
    if (error) throw error;
    console.log(`Questão ${id} alinhada para Legislação de Trânsito.`);
  }

  // 1 LIMPE question -> disciplina Direito Administrativo
  const limpeId = "c35dc123-0157-5bf7-a180-9b9d3f5a6d69";
  const { error: limpeErr } = await supabase
    .from("questoes")
    .update({ disciplina_id: "0ba958a0-7e2b-5f29-aec6-9578fa2d6b1c" })
    .eq("id", limpeId);
  if (limpeErr) throw limpeErr;
  console.log(`Questão ${limpeId} alinhada para Direito Administrativo.`);

  console.log("Taxonomia 100% saneada!");
}

fixTaxonomy();
