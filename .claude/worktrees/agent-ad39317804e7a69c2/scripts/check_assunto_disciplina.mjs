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

async function check() {
  const { data: disciplinas } = await supabase.from("disciplinas").select("*");
  const { data: assuntos } = await supabase.from("assuntos").select("*");

  const assMap = new Map(assuntos.map(a => [a.id, a]));
  const discMap = new Map(disciplinas.map(d => [d.id, d]));

  let allQuestoes = [];
  let page = 0;
  while (true) {
    const { data } = await supabase.from("questoes").select("id, disciplina_id, assunto_id, enunciado, prompt_versao").range(page*1000, (page+1)*1000 - 1).order("id", { ascending: true });
    if (!data || data.length === 0) break;
    allQuestoes.push(...data);
    page++;
    if (data.length < 1000) break;
  }

  const mismatched = [];
  for (const q of allQuestoes) {
    const a = assMap.get(q.assunto_id);
    if (a && a.disciplina_id !== q.disciplina_id) {
      mismatched.push({
        id: q.id,
        versao: q.prompt_versao,
        disciplina_id_q: q.disciplina_id,
        disciplina_nome_q: discMap.get(q.disciplina_id)?.nome,
        assunto_id: q.assunto_id,
        assunto_nome: a.nome,
        assunto_disc_pertencente: discMap.get(a.disciplina_id)?.nome,
        enunciado: q.enunciado.substring(0, 100)
      });
    }
  }

  console.log("Total questoes com assunto fora da disciplina:", mismatched.length);
  console.log(JSON.stringify(mismatched, null, 2));
}

check();
