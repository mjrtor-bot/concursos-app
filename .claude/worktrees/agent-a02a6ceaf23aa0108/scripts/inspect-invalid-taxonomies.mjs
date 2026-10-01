import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { TODAS_QUESTOES_LOTE10 } from "./batch10_modules/index.mjs";

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

async function inspect() {
  const { data: dbAssuntos } = await supabase.from("assuntos").select("id, nome, disciplina_id");
  const { data: dbDisciplinas } = await supabase.from("disciplinas").select("id, nome");

  const assuntoMap = new Map(dbAssuntos.map(a => [a.id, a]));
  const discMap = new Map(dbDisciplinas.map(d => [d.id, d]));

  const invalidByModule = {};
  for (const q of TODAS_QUESTOES_LOTE10) {
    const mod = q.idSlug.split("-").slice(0, 3).join("-");
    const validAssunto = assuntoMap.has(q.assunto_id);
    const validDisc = discMap.has(q.disciplina_id);

    if (!validAssunto || !validDisc) {
      if (!invalidByModule[mod]) invalidByModule[mod] = [];
      invalidByModule[mod].push({
        slug: q.idSlug,
        discId: q.disciplina_id,
        discNome: discMap.get(q.disciplina_id)?.nome || "DESCONHECIDA",
        assuntoId: q.assunto_id,
        assuntoNome: assuntoMap.get(q.assunto_id)?.nome || "DESCONHECIDO"
      });
    }
  }

  console.log("Módulos com taxonomias inválidas:", Object.keys(invalidByModule));
  for (const [mod, items] of Object.entries(invalidByModule)) {
    console.log(`\n--- Módulo: ${mod} (${items.length} itens com erro) ---`);
    console.log(`Exemplo: slug=${items[0].slug}, disc=${items[0].discNome} (${items[0].discId}), assunto=${items[0].assuntoNome} (${items[0].assuntoId})`);
  }
}

inspect();
