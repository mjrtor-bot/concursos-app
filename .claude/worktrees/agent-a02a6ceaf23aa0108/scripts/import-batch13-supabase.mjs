import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { TODAS_QUESTOES_LOTE13, prepararParaBanco } from "./batch13_modules/index.mjs";

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

async function importLote13() {
  console.log("=========================================================");
  console.log("      INICIANDO INGESTÃO CONTROLADA DO LOTE 13 EM PROD   ");
  console.log("=========================================================\n");

  // 1. Verificação Estrita Pré-Ingestão
  const { count: initialQCount, error: errQ } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: initialACount, error: errA } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  const { count: lote13Count, error: errL13 } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true })
    .eq("prompt_versao", "v3.3-lote13");

  if (errQ || errA || errL13) {
    throw new Error(`Erro ao consultar Supabase: ${errQ?.message || errA?.message || errL13?.message}`);
  }

  console.log(`[+] Contagem inicial no banco:`);
  console.log(`    - questões: ${initialQCount} (esperado: 7.260 baseline, 7.560 parcial ou 7.760 concluído)`);
  console.log(`    - alternativas: ${initialACount} (esperado: 27.084 baseline ou 28.366 concluído)`);
  console.log(`    - v3.3-lote13: ${lote13Count}`);

  if (initialQCount !== 7260 && initialQCount !== 7560 && initialQCount !== 7760) {
    throw new Error(`[ABORTADO] questoes != 7.260, 7.560 ou 7.760 (encontrado: ${initialQCount})`);
  }
  if (initialACount !== 27084 && initialACount !== 28366) {
    throw new Error(`[ABORTADO] questoes_alternativas != 27.084 ou 28.366 (encontrado: ${initialACount})`);
  }

  // 2. Preparar dados do Lote 13
  const todasQuestoes = [];
  const todasAlternativas = [];

  for (const q of TODAS_QUESTOES_LOTE13) {
    const { questao, alternativas } = prepararParaBanco(q);
    todasQuestoes.push(questao);
    todasAlternativas.push(...alternativas);
  }

  console.log(`\n[>] Total preparado para inserção: ${todasQuestoes.length} questões e ${todasAlternativas.length} alternativas.`);

  if (todasQuestoes.length !== 500) {
    throw new Error(`Total de questões do Lote 13 deve ser 500. Encontrado: ${todasQuestoes.length}`);
  }
  if (todasAlternativas.length !== 1282) {
    throw new Error(`Total de alternativas do Lote 13 deve ser 1.282. Encontrado: ${todasAlternativas.length}`);
  }

  // 3. Executar Ingestão Chunked
  console.log("\n[>] Inserindo 500 questões via chunked upsert (chunk = 50)...");
  await chunkUpsert("questoes", todasQuestoes, 50);
  console.log("[✓] Todas as 500 questões do Lote 13 inseridas/atualizadas com sucesso!");

  console.log(`\n[>] Inserindo ${todasAlternativas.length} alternativas via chunked upsert (chunk = 100)...`);
  await chunkUpsert("questoes_alternativas", todasAlternativas, 100);
  console.log(`[✓] Todas as ${todasAlternativas.length} alternativas do Lote 13 inseridas/atualizadas com sucesso!`);

  // 4. Verificação Pós-Ingestão
  const { count: finalQCount } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: finalACount } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  const { count: finalLote13QCount } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true })
    .eq("prompt_versao", "v3.3-lote13");

  console.log("\n--- RESULTADO FINAL DA INGESTÃO ---");
  console.log(`[+] Questões no Supabase: ${finalQCount} (Esperado: exatamente 7.760 | Delta: +${finalQCount - initialQCount})`);
  console.log(`[+] Alternativas no Supabase: ${finalACount} (Esperado: exatamente 28.366 | Delta: +${finalACount - initialACount})`);
  console.log(`[+] Questões v3.3-lote13: ${finalLote13QCount} (Esperado: exatamente 500)`);

  if (finalQCount !== 7760) {
    throw new Error(`ERRO: Contagem final de questões no banco diferente de 7.760! Atual: ${finalQCount}`);
  }
  if (finalACount !== 28366) {
    throw new Error(`ERRO: Contagem final de alternativas no banco diferente de 28.366! Atual: ${finalACount}`);
  }
  if (finalLote13QCount !== 500) {
    throw new Error(`ERRO: Contagem de questões do Lote 13 diferente de 500! Atual: ${finalLote13QCount}`);
  }

  console.log("\n=========================================================");
  console.log("  [SUCESSO] INGESTÃO DO LOTE 13 CONCLUÍDA COM 100% ÊXITO! ");
  console.log("=========================================================");
}

importLote13().catch((err) => {
  console.error("Erro fatal na importação do Lote 13:", err);
  process.exit(1);
});
