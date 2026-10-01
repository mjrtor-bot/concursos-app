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

async function inspectTaxonomy() {
  const { data: disciplinas } = await supabase.from("disciplinas").select("*");
  const { data: assuntos } = await supabase.from("assuntos").select("*");

  console.log("Disciplinas:", disciplinas.map(d => ({ id: d.id, nome: d.nome })));

  // Look for subjects in Direito Constitucional relating to art 37 / adm publica
  const constAssuntos = assuntos.filter(a => a.disciplina_id === "8a5fd46c-e3ab-5e99-b338-3a17eafa50e9");
  console.log("Assuntos Const:", constAssuntos.map(a => ({ id: a.id, nome: a.nome })));

  // Look for subjects in Legislação Especial and Legislação de Trânsito
  const legEspAssuntos = assuntos.filter(a => a.disciplina_id === "f54b2f9a-3916-5409-a431-a93ce24510e9");
  console.log("Assuntos Leg Esp:", legEspAssuntos.map(a => ({ id: a.id, nome: a.nome })));

  const legTransitoAssuntos = assuntos.filter(a => a.disciplina_id === "869e5d4a-543e-561b-9f94-6d9b04f76269" || a.nome.includes("Trânsito"));
  console.log("Assuntos Leg Transito:", legTransitoAssuntos.map(a => ({ id: a.id, nome: a.nome, disc: a.disciplina_id })));
}

inspectTaxonomy();
