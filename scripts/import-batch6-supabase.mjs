import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { formatarQuestao } from "./batch6_modules/helper.mjs";

// Import all 19 modules of Batch 6
import { transito01Questoes } from "./batch6_modules/transito_01.mjs";
import { transito02Questoes } from "./batch6_modules/transito_02.mjs";
import { transito03Questoes } from "./batch6_modules/transito_03.mjs";
import { transito04Questoes } from "./batch6_modules/transito_04.mjs";
import { penal01Questoes } from "./batch6_modules/penal_01.mjs";
import { penal02Questoes } from "./batch6_modules/penal_02.mjs";
import { processoPenal01Questoes } from "./batch6_modules/processo_penal_01.mjs";
import { processoPenal02Questoes } from "./batch6_modules/processo_penal_02.mjs";
import { constitucional01Questoes } from "./batch6_modules/constitucional_01.mjs";
import { constitucional02Questoes } from "./batch6_modules/constitucional_02.mjs";
import { administrativo01Questoes } from "./batch6_modules/administrativo_01.mjs";
import { administrativo02Questoes } from "./batch6_modules/administrativo_02.mjs";
import { legEspecial01Questoes } from "./batch6_modules/leg_especial_01.mjs";
import { legEspecial02Questoes } from "./batch6_modules/leg_especial_02.mjs";
import { portugues01Questoes } from "./batch6_modules/portugues_01.mjs";
import { portugues02Questoes } from "./batch6_modules/portugues_02.mjs";
import { rlmFisica01Questoes } from "./batch6_modules/rlm_fisica_01.mjs";
import { rlmFisica02Questoes } from "./batch6_modules/rlm_fisica_02.mjs";
import { direitosHumanos01Questoes } from "./batch6_modules/direitos_humanos_01.mjs";

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
    const { error } = await supabase.from(table).upsert(chunk, { onConflict: "id" });
    if (error) {
      throw new Error(`Erro ao fazer upsert na tabela ${table} (chunk ${i}-${i + chunk.length}): ${error.message}`);
    }
  }
}

async function importLote6() {
  console.log("=========================================================");
  console.log("      INICIANDO INGESTÃO DO LOTE 6 NO SUPABASE PROD      ");
  console.log("=========================================================\n");

  const { count: initialQCount } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: initialACount } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });

  console.log(`[+] Contagem inicial no banco: ${initialQCount} questões, ${initialACount} alternativas.`);

  const modulos = [
    { name: "transito_01", list: transito01Questoes, exp: 25 },
    { name: "transito_02", list: transito02Questoes, exp: 25 },
    { name: "transito_03", list: transito03Questoes, exp: 25 },
    { name: "transito_04", list: transito04Questoes, exp: 25 },
    { name: "penal_01", list: penal01Questoes, exp: 35 },
    { name: "penal_02", list: penal02Questoes, exp: 35 },
    { name: "processo_penal_01", list: processoPenal01Questoes, exp: 30 },
    { name: "processo_penal_02", list: processoPenal02Questoes, exp: 30 },
    { name: "constitucional_01", list: constitucional01Questoes, exp: 30 },
    { name: "constitucional_02", list: constitucional02Questoes, exp: 30 },
    { name: "administrativo_01", list: administrativo01Questoes, exp: 30 },
    { name: "administrativo_02", list: administrativo02Questoes, exp: 30 },
    { name: "leg_especial_01", list: legEspecial01Questoes, exp: 25 },
    { name: "leg_especial_02", list: legEspecial02Questoes, exp: 25 },
    { name: "portugues_01", list: portugues01Questoes, exp: 20 },
    { name: "portugues_02", list: portugues02Questoes, exp: 20 },
    { name: "rlm_fisica_01", list: rlmFisica01Questoes, exp: 20 },
    { name: "rlm_fisica_02", list: rlmFisica02Questoes, exp: 20 },
    { name: "direitos_humanos_01", list: direitosHumanos01Questoes, exp: 20 },
  ];

  const todasQuestoes = [];
  const todasAlternativas = [];
  let globalIdx = 1;

  for (const m of modulos) {
    if (!m.list || m.list.length !== m.exp) {
      throw new Error(`Módulo ${m.name} tem ${m.list ? m.list.length : 0} questões (esperado: ${m.exp})`);
    }
    for (const raw of m.list) {
      const { questao, alternativas } = formatarQuestao(raw, globalIdx++);
      todasQuestoes.push(questao);
      todasAlternativas.push(...alternativas);
    }
  }

  console.log(`[>] Total validado para inserção: ${todasQuestoes.length} questões e ${todasAlternativas.length} alternativas.`);

  if (todasQuestoes.length !== 500) {
    throw new Error(`Total de questões deve ser 500. Encontrado: ${todasQuestoes.length}`);
  }

  console.log("\n[>] Inserindo questões via chunked upsert (chunk = 50)...");
  await chunkUpsert("questoes", todasQuestoes, 50);
  console.log("[✓] Todas as 500 questões do Lote 6 inseridas/atualizadas com sucesso!");

  console.log("[>] Inserindo alternativas via chunked upsert (chunk = 100)...");
  await chunkUpsert("questoes_alternativas", todasAlternativas, 100);
  console.log(`[✓] Todas as ${todasAlternativas.length} alternativas do Lote 6 inseridas/atualizadas com sucesso!`);

  const { count: finalQCount } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: finalACount } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  const { count: finalLote6Count } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true })
    .eq("prompt_versao", "v2.6-lote6");

  console.log("\n--- RESULTADO DA IMPORTAÇÃO (LOTE 6) ---");
  console.log(`[+] Total de questões no banco: ${finalQCount} (Esperado: 4260)`);
  console.log(`[+] Total de questões do Lote 6: ${finalLote6Count} (Esperado: 500)`);
  console.log(`[+] Total de alternativas no banco: ${finalACount}`);

  if (finalLote6Count !== 500) {
    throw new Error(`Contagem do Lote 6 incorreta: esperado 500, obtido ${finalLote6Count}`);
  }
  if (finalQCount !== 4260) {
    throw new Error(`Contagem total no banco incorreta: esperado 4260, obtido ${finalQCount}`);
  }

  console.log("\n=========================================================");
  console.log("   IMPORTAÇÃO DO LOTE 6 CONCLUÍDA COM 100% DE SUCESSO!   ");
  console.log("=========================================================");
}

importLote6().catch(err => {
  console.error("ERRO NA IMPORTAÇÃO DO LOTE 6:", err);
  process.exit(1);
});
