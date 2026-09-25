import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { penalQuestions } from "./batch2_modules/penal.mjs";
import { dppQuestions } from "./batch2_modules/processo_penal.mjs";
import { legEspQuestions } from "./batch2_modules/legislacao_especial.mjs";
import { constQuestions } from "./batch2_modules/constitucional.mjs";
import { admQuestions } from "./batch2_modules/administrativo.mjs";
import { portQuestions } from "./batch2_modules/portugues.mjs";
import { dhQuestions } from "./batch2_modules/direitos_humanos.mjs";
import { crimQuestions } from "./batch2_modules/criminologia.mjs";
import { infoQuestions } from "./batch2_modules/informatica.mjs";
import { rlmQuestions } from "./batch2_modules/rlm.mjs";
import { formatarQuestao } from "./batch2_modules/helper.mjs";

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
  console.error("ERRO: Credenciais do Supabase ausentes em .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function importBatch2() {
  console.log("=========================================================");
  console.log("   IMPORTAÇÃO DO LOTE 2 POLICIAL (500 QUESTÕES)         ");
  console.log("=========================================================");

  // 1. Verificar estado inicial do banco
  const { count: initialQCount, error: qInitErr } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  if (qInitErr) throw qInitErr;

  const { count: initialACount, error: aInitErr } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  if (aInitErr) throw aInitErr;

  console.log(`[+] Total inicial de questões: ${initialQCount}`);
  console.log(`[+] Total inicial de alternativas: ${initialACount}`);

  // 2. Preparar todas as questões e alternativas
  const modulos = [
    penalQuestions,
    dppQuestions,
    legEspQuestions,
    constQuestions,
    admQuestions,
    portQuestions,
    dhQuestions,
    crimQuestions,
    infoQuestions,
    rlmQuestions,
  ];

  const todasQuestoes = [];
  const todasAlternativas = [];
  let globalIdx = 1;

  for (const mod of modulos) {
    for (const raw of mod) {
      const { questao, alternativas } = formatarQuestao(raw, globalIdx++);
      todasQuestoes.push(questao);
      todasAlternativas.push(...alternativas);
    }
  }

  console.log(`[+] Total a importar: ${todasQuestoes.length} questões e ${todasAlternativas.length} alternativas.`);

  if (todasQuestoes.length !== 500) {
    throw new Error(`Contagem incorreta de questões: ${todasQuestoes.length} (esperado 500)`);
  }

  // 3. Inserir/Upsert questões em lotes de 50
  console.log("\n[>] Inserindo/Atualizando questões na tabela 'questoes' (UPSERT)...");
  const BATCH_SIZE_Q = 50;
  for (let i = 0; i < todasQuestoes.length; i += BATCH_SIZE_Q) {
    const chunk = todasQuestoes.slice(i, i + BATCH_SIZE_Q);
    const { error: insQErr } = await supabase
      .from("questoes")
      .upsert(chunk, { onConflict: "id" });

    if (insQErr) {
      console.error(`[ERRO] Falha ao inserir lote de questões ${i} a ${i + chunk.length}:`, insQErr);
      throw insQErr;
    }
    process.stdout.write(`  -> Processadas questões ${i + 1} a ${i + chunk.length} de ${todasQuestoes.length}\n`);
  }

  // 4. Inserir/Upsert alternativas em lotes de 100
  console.log("\n[>] Inserindo/Atualizando alternativas na tabela 'questoes_alternativas' (UPSERT)...");
  const BATCH_SIZE_A = 100;
  for (let i = 0; i < todasAlternativas.length; i += BATCH_SIZE_A) {
    const chunk = todasAlternativas.slice(i, i + BATCH_SIZE_A);
    const { error: insAErr } = await supabase
      .from("questoes_alternativas")
      .upsert(chunk, { onConflict: "id" });

    if (insAErr) {
      console.error(`[ERRO] Falha ao inserir lote de alternativas ${i} a ${i + chunk.length}:`, insAErr);
      throw insAErr;
    }
    process.stdout.write(`  -> Processadas alternativas ${i + 1} a ${i + chunk.length} de ${todasAlternativas.length}\n`);
  }

  // 5. Verificar estado final do banco
  console.log("\n[>] Verificando integridade e contagens finais no Supabase...");
  const { count: finalQCount, error: qFinErr } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  if (qFinErr) throw qFinErr;

  const { count: finalACount, error: aFinErr } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  if (aFinErr) throw aFinErr;

  console.log("=========================================================");
  console.log(`[✓] QUESTÕES FINAL: ${finalQCount} (Esperado: 2260)`);
  console.log(`[✓] ALTERNATIVAS FINAL: ${finalACount} (Esperado: 9641)`);
  console.log("=========================================================");

  if (finalQCount !== 2260) {
    throw new Error(`Inconsistência no número de questões: esperado 2260, obtido ${finalQCount}`);
  }
  if (finalACount !== 9641) {
    throw new Error(`Inconsistência no número de alternativas: esperado 9641, obtido ${finalACount}`);
  }

  console.log(" IMPORTAÇÃO DO LOTE 2 CONCLUÍDA COM SUCESSO ABSOLUTO! ");
}

importBatch2().catch((err) => {
  console.error("FALHA NA IMPORTAÇÃO DO LOTE 2:", err);
  process.exit(1);
});
