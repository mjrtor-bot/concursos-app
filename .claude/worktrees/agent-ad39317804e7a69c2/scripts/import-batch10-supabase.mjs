import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TODAS_QUESTOES_LOTE10, prepararParaBanco } from "./batch10_modules/index.mjs";

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

async function importLote10() {
  console.log("=========================================================");
  console.log("      INICIANDO INGESTÃO CONTROLADA DO LOTE 10 EM PROD   ");
  console.log("=========================================================\n");

  // 1. Verificação Estrita Pré-Ingestão
  const { count: initialQCount, error: errQ } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: initialACount, error: errA } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  const { count: lote10Count, error: errL10 } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true })
    .eq("prompt_versao", "v3.0-lote10");

  if (errQ || errA || errL10) {
    throw new Error(`Erro ao consultar Supabase: ${errQ?.message || errA?.message || errL10?.message}`);
  }

  console.log(`[+] Contagem inicial no banco:`);
  console.log(`    - questões: ${initialQCount} (esperado: exatamente 5.760)`);
  console.log(`    - alternativas: ${initialACount} (esperado: exatamente 22.212)`);
  console.log(`    - v3.0-lote10: ${lote10Count} (esperado: exatamente 0)`);

  if (initialQCount !== 5760) {
    throw new Error(`[ABORTADO] questoes != 5.760 (encontrado: ${initialQCount})`);
  }
  if (initialACount !== 22212) {
    throw new Error(`[ABORTADO] questoes_alternativas != 22.212 (encontrado: ${initialACount})`);
  }
  if (lote10Count !== 0) {
    throw new Error(`[ABORTADO] registros com prompt_versao = 'v3.0-lote10' != 0 (encontrado: ${lote10Count})`);
  }

  // 2. Backup Lógico / Snapshot de auditoria pré-ingestão
  console.log("\n[>] Realizando snapshot/backup lógico de auditoria pré-ingestão...");
  const existingQuestions = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from("questoes")
      .select("id, prompt_versao, disciplina_id, assunto_id, tipo")
      .range(page * pageSize, (page + 1) * pageSize - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    existingQuestions.push(...data);
    if (data.length < pageSize) break;
    page++;
  }

  const backupSnapshot = {
    timestamp: new Date().toISOString(),
    total_questoes: existingQuestions.length,
    total_alternativas: initialACount,
    questoes: existingQuestions,
  };
  fs.writeFileSync(
    path.resolve(process.cwd(), "scripts/backup_pre_lote10_snapshot.json"),
    JSON.stringify(backupSnapshot, null, 2),
    "utf8"
  );
  console.log(`[✓] Backup lógico registrado com sucesso em scripts/backup_pre_lote10_snapshot.json (${existingQuestions.length} questões arquivadas).`);

  // 3. Preparar dados do Lote 10
  const todasQuestoes = [];
  const todasAlternativas = [];

  for (const q of TODAS_QUESTOES_LOTE10) {
    const { questao, alternativas } = prepararParaBanco(q);
    todasQuestoes.push(questao);
    todasAlternativas.push(...alternativas);
  }

  console.log(`[>] Total preparado para inserção: ${todasQuestoes.length} questões e ${todasAlternativas.length} alternativas.`);

  if (todasQuestoes.length !== 500) {
    throw new Error(`Total de questões do Lote 10 deve ser 500. Encontrado: ${todasQuestoes.length}`);
  }
  if (todasAlternativas.length !== 1408) {
    throw new Error(`Total de alternativas do Lote 10 deve ser 1.408. Encontrado: ${todasAlternativas.length}`);
  }

  // 4. Executar Ingestão Chunked
  console.log("\n[>] Inserindo 500 questões via chunked upsert (chunk = 50)...");
  await chunkUpsert("questoes", todasQuestoes, 50);
  console.log("[✓] Todas as 500 questões do Lote 10 inseridas com sucesso!");

  console.log("[>] Inserindo 1.408 alternativas via chunked upsert (chunk = 100)...");
  await chunkUpsert("questoes_alternativas", todasAlternativas, 100);
  console.log(`[✓] Todas as ${todasAlternativas.length} alternativas do Lote 10 inseridas com sucesso!`);

  // 5. Verificação Pós-Ingestão
  const { count: finalQCount } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: finalACount } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  const { count: finalLote10QCount } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true })
    .eq("prompt_versao", "v3.0-lote10");

  console.log("\n--- RESULTADO FINAL DA INGESTÃO ---");
  console.log(`[+] Questões no Supabase: ${finalQCount} (Esperado: 6.260 | Delta: +${finalQCount - initialQCount})`);
  console.log(`[+] Alternativas no Supabase: ${finalACount} (Esperado: 23.620 | Delta: +${finalACount - initialACount})`);
  console.log(`[+] Questões v3.0-lote10: ${finalLote10QCount} (Esperado: 500)`);

  if (finalQCount !== 6260) {
    throw new Error(`ERRO: Contagem final de questões no banco diferente de 6.260! Atual: ${finalQCount}`);
  }
  if (finalACount !== 23620) {
    throw new Error(`ERRO: Contagem final de alternativas no banco diferente de 23.620! Atual: ${finalACount}`);
  }
  if (finalLote10QCount !== 500) {
    throw new Error(`ERRO: Contagem de questões do Lote 10 diferente de 500! Atual: ${finalLote10QCount}`);
  }

  console.log("\n=========================================================");
  console.log("  [SUCESSO] INGESTÃO DO LOTE 10 CONCLUÍDA COM 100% ÊXITO! ");
  console.log("=========================================================");
}

importLote10().catch((err) => {
  console.error("Erro fatal na importação do Lote 10:", err);
  process.exit(1);
});
