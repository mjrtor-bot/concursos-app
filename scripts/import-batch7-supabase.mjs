import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TODAS_QUESTOES_LOTE7, prepararParaBanco } from "./batch7_modules/index.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("ERRO: Credenciais do Supabase não encontradas em .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function chunkUpsert(table, records, chunkSize = 50) {
  for (let i = 0; i < records.length; i += chunkSize) {
    const chunk = records.slice(i, i + chunkSize);
    let tentativas = 0;
    while (tentativas < 3) {
      const { error } = await supabase.from(table).upsert(chunk, { onConflict: "id" });
      if (!error) break;
      tentativas++;
      console.warn(`[AVISO] Tentativa ${tentativas} falhou para ${table} (chunk ${i}-${i + chunk.length}): ${error.message}`);
      if (tentativas === 3) {
        throw new Error(`Erro fatal ao fazer upsert na tabela ${table}: ${error.message}`);
      }
      await new Promise((res) => setTimeout(res, 1000 * tentativas));
    }
  }
}

async function importLote7() {
  console.log("=========================================================");
  console.log("      INICIANDO INGESTÃO DO LOTE 7 NO SUPABASE PROD      ");
  console.log("=========================================================\n");

  const { count: initialQCount } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: initialACount } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });

  console.log(`[+] Contagem inicial no banco: ${initialQCount} questões, ${initialACount} alternativas.`);

  if (initialQCount !== 4260) {
    throw new Error(`Contagem inicial no banco inesperada: esperado 4.260 questões, obtido ${initialQCount}`);
  }

  const todasQuestoes = [];
  const todasAlternativas = [];

  for (const q of TODAS_QUESTOES_LOTE7) {
    const { questao, alternativas } = prepararParaBanco(q);
    todasQuestoes.push(questao);
    todasAlternativas.push(...alternativas);
  }

  console.log(`[>] Total preparado para inserção: ${todasQuestoes.length} questões e ${todasAlternativas.length} alternativas.`);

  if (todasQuestoes.length !== 500) {
    throw new Error(`Total de questões do Lote 7 deve ser 500. Encontrado: ${todasQuestoes.length}`);
  }
  if (todasAlternativas.length !== 1777) {
    throw new Error(`Total de alternativas do Lote 7 deve ser 1.777. Encontrado: ${todasAlternativas.length}`);
  }

  console.log("\n[>] Inserindo 500 questões via chunked upsert (chunk = 50)...");
  await chunkUpsert("questoes", todasQuestoes, 50);
  console.log("[✓] Todas as 500 questões do Lote 7 inseridas/atualizadas com sucesso!");

  console.log("[>] Inserindo 1.777 alternativas via chunked upsert (chunk = 100)...");
  await chunkUpsert("questoes_alternativas", todasAlternativas, 100);
  console.log(`[✓] Todas as ${todasAlternativas.length} alternativas do Lote 7 inseridas/atualizadas com sucesso!`);

  const { count: finalQCount } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: finalACount } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  const { count: finalLote7Count } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true })
    .eq("prompt_versao", "v2.7-lote7");

  console.log("\n--- RESULTADO DA IMPORTAÇÃO (LOTE 7) ---");
  console.log(`[+] Total de questões no banco: ${finalQCount} (Esperado: 4.760)`);
  console.log(`[+] Total de questões do Lote 7: ${finalLote7Count} (Esperado: 500)`);
  console.log(`[+] Total de alternativas no banco: ${finalACount} (Esperado: ${initialACount + 1777})`);

  if (finalLote7Count !== 500) {
    throw new Error(`Contagem do Lote 7 incorreta: esperado 500, obtido ${finalLote7Count}`);
  }
  if (finalQCount !== 4760) {
    throw new Error(`Contagem total no banco incorreta: esperado 4760, obtido ${finalQCount}`);
  }

  console.log("\n=========================================================");
  console.log("   IMPORTAÇÃO DO LOTE 7 CONCLUÍDA COM 100% DE SUCESSO!   ");
  console.log("=========================================================");
}

importLote7().catch((err) => {
  console.error("ERRO NA IMPORTAÇÃO DO LOTE 7:", err);
  process.exit(1);
});
