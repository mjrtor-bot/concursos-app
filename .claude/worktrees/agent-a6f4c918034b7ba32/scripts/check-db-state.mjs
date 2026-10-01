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

async function checkDatabaseState() {
  console.log("=== Verificando Estado do Banco no Supabase ===");

  const { count: qCount, error: qErr } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });

  if (qErr) {
    console.error("Erro ao contar questoes:", qErr);
    return;
  }
  console.log(`[+] Total de questões atuais no banco: ${qCount}`);

  const { count: aCount, error: aErr } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });

  if (aErr) {
    console.error("Erro ao contar alternativas:", aErr);
    return;
  }
  console.log(`[+] Total de alternativas atuais no banco: ${aCount}`);

  const { data: sampleQ, error: sErr } = await supabase
    .from("questoes")
    .select("id, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade, fingerprint_hash, is_autoral_ia, modelo_ia")
    .limit(3);

  if (sErr) {
    console.error("Erro ao buscar amostra de questoes:", sErr);
  } else {
    console.log("[+] Amostra de questões:", sampleQ);
  }
}

checkDatabaseState();
