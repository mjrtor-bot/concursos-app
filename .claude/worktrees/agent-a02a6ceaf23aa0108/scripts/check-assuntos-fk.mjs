import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { TODAS_QUESTOES_LOTE10, prepararParaBanco } from "./batch10_modules/index.mjs";

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

async function check() {
  const { data: dbAssuntos, error } = await supabase.from("assuntos").select("id, nome, disciplina_id");
  if (error) {
    console.error("Erro ao buscar assuntos:", error);
    return;
  }
  const assuntoSet = new Set(dbAssuntos.map(a => a.id));

  console.log("Total assuntos no banco:", dbAssuntos.length);

  const invalidos = [];
  for (let i = 0; i < TODAS_QUESTOES_LOTE10.length; i++) {
    const q = TODAS_QUESTOES_LOTE10[i];
    const { questao } = prepararParaBanco(q);
    if (!assuntoSet.has(questao.assunto_id)) {
      invalidos.push({ idx: i, idSlug: q.idSlug, assunto_id: questao.assunto_id, disc: questao.disciplina_id });
    }
  }
  console.log("Questões com assunto inválido:", invalidos.length);
  console.log(invalidos.slice(0, 20));

  // Vamos listar os assuntos de cada disciplina
  const porDisc = {};
  for (const a of dbAssuntos) {
    if (!porDisc[a.disciplina_id]) porDisc[a.disciplina_id] = [];
    porDisc[a.disciplina_id].push({ id: a.id, nome: a.nome });
  }
  fs.writeFileSync("scripts/db_assuntos_dump.json", JSON.stringify(porDisc, null, 2), "utf8");
  console.log("Dump salvo em scripts/db_assuntos_dump.json");
}

check();
