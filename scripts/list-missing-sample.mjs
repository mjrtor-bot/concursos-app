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

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function listMissingSample() {
  const { data: disciplinas } = await supabase.from("disciplinas").select("id, nome");
  const discMap = new Map(disciplinas.map((d) => [d.id, d.nome]));

  let allAssuntos = [];
  let page = 0;
  while (true) {
    const { data: chunk } = await supabase
      .from("assuntos")
      .select("id, disciplina_id, nome, slug, descricao, ordem")
      .range(page * 1000, (page + 1) * 1000 - 1);
    if (!chunk || chunk.length === 0) break;
    allAssuntos = allAssuntos.concat(chunk);
    if (chunk.length < 1000) break;
    page++;
  }

  let allConteudos = [];
  page = 0;
  while (true) {
    const { data: chunk } = await supabase
      .from("assunto_conteudos")
      .select("assunto_id, pdf_path")
      .range(page * 1000, (page + 1) * 1000 - 1);
    if (!chunk || chunk.length === 0) break;
    allConteudos = allConteudos.concat(chunk);
    if (chunk.length < 1000) break;
    page++;
  }

  const comPdf = new Set(allConteudos.filter((c) => !!c.pdf_path).map((c) => c.assunto_id));
  const missing = allAssuntos.filter((a) => !comPdf.has(a.id));

  console.log(`Total missing assuntos: ${missing.length}`);
  console.log("\nSample 15 missing assuntos:");
  for (let i = 0; i < Math.min(15, missing.length); i++) {
    const a = missing[i];
    const disc = discMap.get(a.disciplina_id) || "Desconhecida";
    console.log(`[${disc}] ${a.nome} (ID: ${a.id})`);
  }
}

listMissingSample().catch(console.error);
