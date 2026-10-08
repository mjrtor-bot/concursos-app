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
        process.env[trimmed.substring(0, idx).trim()] = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
      }
    }
  }
}

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function runAudit() {
  const { data: disciplinas } = await supabase.from("disciplinas").select("id, nome, slug");
  const { data: assuntos } = await supabase.from("assuntos").select("id, nome, slug, disciplina_id");
  const { data: questoes } = await supabase.from("questoes").select("id, disciplina_id, assunto_id");
  const { data: topicos } = await supabase.from("edital_topicos").select("id, edital_id, disciplina_id, assunto_id");

  console.log("Total disciplinas no banco:", disciplinas?.length);
  console.log("Total assuntos no banco:", assuntos?.length);
  console.log("Total questoes no banco:", questoes?.length);
  console.log("Total topicos de edital no banco:", topicos?.length);

  const qByAssunto = new Map();
  const qByDisc = new Map();
  let semAssunto = 0;
  let semDisc = 0;

  for (const q of questoes || []) {
    if (q.assunto_id) {
      qByAssunto.set(q.assunto_id, (qByAssunto.get(q.assunto_id) || 0) + 1);
    } else {
      semAssunto++;
    }
    if (q.disciplina_id) {
      qByDisc.set(q.disciplina_id, (qByDisc.get(q.disciplina_id) || 0) + 1);
    } else {
      semDisc++;
    }
  }

  console.log("Questoes sem assunto_id:", semAssunto);
  console.log("Questoes sem disciplina_id:", semDisc);

  const assuntosComQuestoes = assuntos?.filter(a => (qByAssunto.get(a.id) || 0) > 0).length;
  const assuntosSemQuestoes = assuntos?.filter(a => (qByAssunto.get(a.id) || 0) === 0);
  console.log(`Assuntos com questoes: ${assuntosComQuestoes} / ${assuntos?.length}`);
  console.log(`Assuntos SEM questoes: ${assuntosSemQuestoes?.length}`);

  if (assuntosSemQuestoes && assuntosSemQuestoes.length > 0) {
    console.log("Exemplos de assuntos sem questoes (primeiros 20):");
    console.log(assuntosSemQuestoes.slice(0, 20).map(a => {
      const disc = disciplinas?.find(d => d.id === a.disciplina_id);
      return { id: a.id, nome: a.nome, disciplina: disc?.nome || a.disciplina_id };
    }));
  }

  // Verificar topicos de edital
  const topicosSemQuestoes = topicos?.filter(t => t.assunto_id && (qByAssunto.get(t.assunto_id) || 0) === 0);
  console.log(`Topicos de edital cujo assunto nao tem questoes diretas: ${topicosSemQuestoes?.length} / ${topicos?.length}`);
}

runAudit().catch(console.error);
