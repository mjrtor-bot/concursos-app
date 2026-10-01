import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TODAS_QUESTOES_LOTE11, prepararParaBanco } from "./batch11_modules/index.mjs";

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

async function importLote11() {
  console.log("=========================================================");
  console.log("      INICIANDO INGESTÃO CONTROLADA DO LOTE 11 EM PROD   ");
  console.log("=========================================================\n");

  // 1. Verificação Estrita Pré-Ingestão
  const { count: initialQCount, error: errQ } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: initialACount, error: errA } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  const { count: lote11Count, error: errL11 } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true })
    .eq("prompt_versao", "v3.1-lote11");

  if (errQ || errA || errL11) {
    throw new Error(`Erro ao consultar Supabase: ${errQ?.message || errA?.message || errL11?.message}`);
  }

  console.log(`[+] Contagem inicial no banco:`);
  console.log(`    - questões: ${initialQCount} (esperado: exatamente 6.260)`);
  console.log(`    - alternativas: ${initialACount} (esperado: exatamente 23.620)`);
  console.log(`    - v3.1-lote11: ${lote11Count} (esperado: exatamente 0)`);

  if (initialQCount !== 6260) {
    throw new Error(`[ABORTADO] questoes != 6.260 (encontrado: ${initialQCount})`);
  }
  if (initialACount !== 23620) {
    throw new Error(`[ABORTADO] questoes_alternativas != 23.620 (encontrado: ${initialACount})`);
  }
  if (lote11Count !== 0) {
    throw new Error(`[ABORTADO] registros com prompt_versao = 'v3.1-lote11' != 0 (encontrado: ${lote11Count})`);
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
    path.resolve(process.cwd(), "scripts/backup_pre_lote11_snapshot.json"),
    JSON.stringify(backupSnapshot, null, 2),
    "utf8"
  );
  console.log(`[✓] Backup lógico registrado com sucesso em scripts/backup_pre_lote11_snapshot.json (${existingQuestions.length} questões arquivadas).`);

  // 3. Preparar dados do Lote 11
  const todasQuestoes = [];
  const todasAlternativas = [];

  for (const q of TODAS_QUESTOES_LOTE11) {
    const { questao, alternativas } = prepararParaBanco(q);
    todasQuestoes.push(questao);
    todasAlternativas.push(...alternativas);
  }

  console.log(`[>] Total preparado para inserção: ${todasQuestoes.length} questões e ${todasAlternativas.length} alternativas.`);

  if (todasQuestoes.length !== 500) {
    throw new Error(`Total de questões do Lote 11 deve ser 500. Encontrado: ${todasQuestoes.length}`);
  }
  if (todasAlternativas.length !== 1738) {
    throw new Error(`Total de alternativas do Lote 11 deve ser 1.738. Encontrado: ${todasAlternativas.length}`);
  }

  // 4. Executar Ingestão Chunked
  console.log("\n[>] Inserindo 500 questões via chunked upsert (chunk = 50)...");
  await chunkUpsert("questoes", todasQuestoes, 50);
  console.log("[✓] Todas as 500 questões do Lote 11 inseridas com sucesso!");

  console.log("[>] Inserindo 1.738 alternativas via chunked upsert (chunk = 100)...");
  await chunkUpsert("questoes_alternativas", todasAlternativas, 100);
  console.log(`[✓] Todas as ${todasAlternativas.length} alternativas do Lote 11 inseridas com sucesso!`);

  // 5. Verificação Pós-Ingestão
  const { count: finalQCount } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: finalACount } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  const { count: finalLote11QCount } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true })
    .eq("prompt_versao", "v3.1-lote11");

  console.log("\n--- RESULTADO FINAL DA INGESTÃO ---");
  console.log(`[+] Questões no Supabase: ${finalQCount} (Esperado: 6.760 | Delta: +${finalQCount - initialQCount})`);
  console.log(`[+] Alternativas no Supabase: ${finalACount} (Esperado: 25.358 | Delta: +${finalACount - initialACount})`);
  console.log(`[+] Questões v3.1-lote11: ${finalLote11QCount} (Esperado: 500)`);

  if (finalQCount !== 6760) {
    throw new Error(`ERRO: Contagem final de questões no banco diferente de 6.760! Atual: ${finalQCount}`);
  }
  if (finalACount !== 25358) {
    throw new Error(`ERRO: Contagem final de alternativas no banco diferente de 25.358! Atual: ${finalACount}`);
  }
  if (finalLote11QCount !== 500) {
    throw new Error(`ERRO: Contagem de questões do Lote 11 diferente de 500! Atual: ${finalLote11QCount}`);
  }

  console.log("\n=========================================================");
  console.log("  [SUCESSO] INGESTÃO DO LOTE 11 CONCLUÍDA COM 100% ÊXITO! ");
  console.log("=========================================================");
}

importLote11().catch((err) => {
  console.error("Erro fatal na importação do Lote 11:", err);
  process.exit(1);
});
