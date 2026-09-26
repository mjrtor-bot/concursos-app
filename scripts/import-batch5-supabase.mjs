import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { penalQuestoes } from "./batch5_modules/penal.mjs";
import { processoPenalQuestoes } from "./batch5_modules/processo_penal.mjs";
import { legEspecialQuestoes } from "./batch5_modules/legislacao_especial.mjs";
import { constitucionalQuestoes } from "./batch5_modules/constitucional.mjs";
import { administrativoQuestoes } from "./batch5_modules/administrativo.mjs";
import { portuguesQuestoes } from "./batch5_modules/portugues.mjs";
import { direitosHumanosQuestoes } from "./batch5_modules/direitos_humanos.mjs";
import { criminologiaQuestoes } from "./batch5_modules/criminologia.mjs";
import { informaticaQuestoes } from "./batch5_modules/informatica.mjs";
import { rlmQuestoes } from "./batch5_modules/rlm.mjs";
import { formatarQuestao } from "./batch5_modules/helper.mjs";

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

async function chunkUpsert(table, records, chunkSize = 50) {
  for (let i = 0; i < records.length; i += chunkSize) {
    const chunk = records.slice(i, i + chunkSize);
    const { error } = await supabase.from(table).upsert(chunk, { onConflict: "id" });
    if (error) {
      throw new Error(`Erro ao fazer upsert na tabela ${table} (chunk ${i}-${i + chunk.length}): ${error.message}`);
    }
  }
}

async function importLote5() {
  console.log("=== INICIANDO IMPORTAÇÃO DO LOTE 5 NO SUPABASE ===");

  const { count: initialQCount } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: initialACount } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });

  console.log(`[+] Contagem inicial no banco: ${initialQCount} questões, ${initialACount} alternativas.`);

  const modulos = [
    penalQuestoes,
    processoPenalQuestoes,
    legEspecialQuestoes,
    constitucionalQuestoes,
    administrativoQuestoes,
    portuguesQuestoes,
    direitosHumanosQuestoes,
    criminologiaQuestoes,
    informaticaQuestoes,
    rlmQuestoes,
  ];

  const todasQuestoes = [];
  const todasAlternativas = [];
  let globalIdx = 1;

  for (const list of modulos) {
    for (const raw of list) {
      const { questao, alternativas } = formatarQuestao(raw, globalIdx++);
      todasQuestoes.push(questao);
      todasAlternativas.push(...alternativas);
    }
  }

  console.log(`[>] Preparando ingestão de ${todasQuestoes.length} questões e ${todasAlternativas.length} alternativas...`);

  console.log("[>] Inserindo questões via chunked upsert (chunk = 50)...");
  await chunkUpsert("questoes", todasQuestoes, 50);
  console.log("[✓] Todas as questões do Lote 5 foram inseridas/atualizadas com sucesso!");

  console.log("[>] Inserindo alternativas via chunked upsert (chunk = 100)...");
  await chunkUpsert("questoes_alternativas", todasAlternativas, 100);
  console.log("[✓] Todas as alternativas do Lote 5 foram inseridas/atualizadas com sucesso!");

  const { count: finalQCount } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: finalACount } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  const { count: finalLote5Count } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true })
    .eq("prompt_versao", "v2.5-lote5");

  console.log("\n--- RESULTADO DA IMPORTAÇÃO (LOTE 5) ---");
  console.log(`[+] Total de questões no banco: ${finalQCount} (Esperado: 3760)`);
  console.log(`[+] Total de questões do Lote 5: ${finalLote5Count} (Esperado: 500)`);
  console.log(`[+] Total de alternativas no banco: ${finalACount}`);

  if (finalLote5Count !== 500) {
    throw new Error(`Contagem do Lote 5 incorreta: esperado 500, obtido ${finalLote5Count}`);
  }
  if (finalQCount !== 3760) {
    throw new Error(`Contagem total no banco incorreta: esperado 3760, obtido ${finalQCount}`);
  }

  console.log("\n=========================================================");
  console.log("   IMPORTAÇÃO DO LOTE 5 CONCLUÍDA COM 100% DE SUCESSO!   ");
  console.log("=========================================================");
}

importLote5().catch(err => {
  console.error("ERRO NA IMPORTAÇÃO DO LOTE 5:", err);
  process.exit(1);
});
