import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

// Carregar variáveis de ambiente de .env.local
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

let SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
SUPABASE_URL = SUPABASE_URL.replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

console.log("=================================================");
console.log("TESTE DE LEITURA PÚBLICA (ANON KEY - MESMA USADA PELO FRONTEND E API)");
console.log("URL:", SUPABASE_URL);
console.log("Anon Key presente:", Boolean(ANON_KEY));
console.log("=================================================");

const supabase = createClient(SUPABASE_URL, ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function testPublicQueries() {
  // 1. Count questoes
  const { count: countQ, error: errQ } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  console.log("1. Total de questões via anon key:", errQ ? `ERRO: ${errQ.message}` : countQ);

  // 2. Count alternativas
  const { count: countA, error: errA } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  console.log("2. Total de alternativas via anon key:", errA ? `ERRO: ${errA.message}` : countA);

  // 3. Count disciplinas
  const { count: countD, error: errD } = await supabase
    .from("disciplinas")
    .select("*", { count: "exact", head: true });
  console.log("3. Total de disciplinas via anon key:", errD ? `ERRO: ${errD.message}` : countD);

  // 4. Count assuntos
  const { count: countAss, error: errAss } = await supabase
    .from("assuntos")
    .select("*", { count: "exact", head: true });
  console.log("4. Total de assuntos via anon key:", errAss ? `ERRO: ${errAss.message}` : countAss);

  // 5. Testar query com joins
  const { data: pageData, error: pageErr } = await supabase
    .from("questoes")
    .select(`
      id, disciplina_id, assunto_id, banca_nome, orgao_nome, ano, tipo, dificuldade, enunciado, explicacao,
      disciplinas:disciplina_id (nome, slug),
      assuntos:assunto_id (nome, slug)
    `)
    .range(0, 4);

  if (pageErr) {
    console.error("5. Erro ao consultar página com anon:", pageErr.message);
  } else {
    console.log(`5. Amostra de página anon recuperada (${pageData.length} itens):`);
    pageData.forEach((q, i) => {
      console.log(`  [#${i + 1}] ${q.disciplinas?.nome} > ${q.assuntos?.nome} | ${q.banca_nome} (${q.ano}) | Enunciado: ${q.enunciado.substring(0, 60)}...`);
    });
  }
}

testPublicQueries();
