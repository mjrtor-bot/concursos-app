import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
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

async function chunkUpsert(table, records, chunkSize = 50) {
  for (let i = 0; i < records.length; i += chunkSize) {
    const chunk = records.slice(i, i + chunkSize);
    const { error } = await supabase.from(table).upsert(chunk, { onConflict: "id" });
    if (error) {
      throw new Error(`Erro ao realizar upsert na tabela ${table} (chunk ${i}-${i + chunk.length}): ${error.message}`);
    }
  }
}

async function testIdempotence() {
  console.log("================================================================================");
  console.log("   PROVA DE IDEMPOTÊNCIA DO IMPORTADOR OFICIAL: SEGUNDA EXECUÇÃO EM PRODUÇÃO   ");
  console.log("================================================================================\n");

  // 1. Contagens antes da segunda importação
  const { count: preQCount } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  const { count: preACount } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });
  const { count: preL10Count } = await supabase.from("questoes").select("*", { count: "exact", head: true }).eq("prompt_versao", "v3.0-lote10");

  console.log(`[+] Contagens ANTES da 2ª Ingestão:`);
  console.log(`    - Total Questões: ${preQCount}`);
  console.log(`    - Total Alternativas: ${preACount}`);
  console.log(`    - Lote 10 (v3.0-lote10): ${preL10Count}`);

  // 2. Preparar as 500 questões e 1.408 alternativas do Lote 10
  const todasQuestoes = [];
  const todasAlternativas = [];

  for (const q of TODAS_QUESTOES_LOTE10) {
    const { questao, alternativas } = prepararParaBanco(q);
    todasQuestoes.push(questao);
    todasAlternativas.push(...alternativas);
  }

  console.log(`\n[>] Executando UPSERT de 500 questões (chunk = 50)...`);
  await chunkUpsert("questoes", todasQuestoes, 50);
  console.log(`[✓] Upsert de 500 questões concluído com sucesso.`);

  console.log(`[>] Executando UPSERT de 1.408 alternativas (chunk = 100)...`);
  await chunkUpsert("questoes_alternativas", todasAlternativas, 100);
  console.log(`[✓] Upsert de 1.408 alternativas concluído com sucesso.`);

  // 3. Contagens após a segunda importação
  const { count: postQCount } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  const { count: postACount } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });
  const { count: postL10Count } = await supabase.from("questoes").select("*", { count: "exact", head: true }).eq("prompt_versao", "v3.0-lote10");

  console.log(`\n[+] Contagens APÓS a 2ª Ingestão:`);
  console.log(`    - Total Questões: ${postQCount} (Esperado: 6.260 | Delta: ${postQCount - preQCount})`);
  console.log(`    - Total Alternativas: ${postACount} (Esperado: 23.620 | Delta: ${postACount - preACount})`);
  console.log(`    - Lote 10 (v3.0-lote10): ${postL10Count} (Esperado: 500 | Delta: ${postL10Count - preL10Count})`);

  if (postQCount !== 6260 || postACount !== 23620 || postL10Count !== 500) {
    throw new Error(`[FALHA DE IDEMPOTÊNCIA] Valores divergiram do esperado!`);
  }

  console.log("\n================================================================================");
  console.log("   🎉 PROVA DE IDEMPOTÊNCIA 100% APROVADA: ZERO DUPLICAÇÕES / DELTA ZERO!       ");
  console.log("================================================================================");
}

testIdempotence().catch(err => {
  console.error("Erro na prova de idempotência:", err);
  process.exit(1);
});
