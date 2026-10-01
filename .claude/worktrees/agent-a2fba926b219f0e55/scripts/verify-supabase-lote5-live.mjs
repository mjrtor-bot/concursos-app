import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./batch5_modules/taxonomia.mjs";

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

async function verifyLote5() {
  console.log("=== VERIFICANDO LOTE 5 DIRETAMENTE NO SUPABASE DE PRODUÇÃO ===");

  const { data: questoesLote5, error: errQ } = await supabase
    .from("questoes")
    .select("id, disciplina_id, tipo, dificuldade, is_autoral_ia, modelo_ia, prompt_versao, revisada_por_especialista, anulada, desatualizada")
    .eq("prompt_versao", "v2.5-lote5");

  if (errQ) throw errQ;

  console.log(`[+] Total de questões com prompt_versao='v2.5-lote5' no Supabase: ${questoesLote5.length} (esperado: 500)`);
  if (questoesLote5.length !== 500) {
    throw new Error(`Contagem incorreta de questões no Lote 5: ${questoesLote5.length} != 500`);
  }

  // Verificar flags de governança
  let autoralOk = 0;
  let modeloOk = 0;
  let revisaoOk = 0;
  let anuladaOk = 0;
  let desatOk = 0;

  for (const q of questoesLote5) {
    if (q.is_autoral_ia === true) autoralOk++;
    if (q.modelo_ia === "Claude Fable 5.1") modeloOk++;
    if (q.revisada_por_especialista === false) revisaoOk++;
    if (q.anulada === false) anuladaOk++;
    if (q.desatualizada === false) desatOk++;
  }

  console.log(`[+] is_autoral_ia === true: ${autoralOk}/500`);
  console.log(`[+] modelo_ia === 'Claude Fable 5.1': ${modeloOk}/500`);
  console.log(`[+] revisada_por_especialista === false: ${revisaoOk}/500`);
  console.log(`[+] anulada === false: ${anuladaOk}/500`);
  console.log(`[+] desatualizada === false: ${desatOk}/500`);

  if (autoralOk !== 500 || modeloOk !== 500 || revisaoOk !== 500 || anuladaOk !== 500 || desatOk !== 500) {
    throw new Error(`Inconsistência nos metadados de governança do Lote 5!`);
  }

  // Verificar contagem por disciplina
  const reverseDiscMap = Object.fromEntries(
    Object.entries(TAXONOMIA.disciplinas).map(([k, v]) => [v, k])
  );

  const distPorDisc = {};
  for (const q of questoesLote5) {
    const nome = reverseDiscMap[q.disciplina_id] || q.disciplina_id;
    distPorDisc[nome] = (distPorDisc[nome] || 0) + 1;
  }

  console.log("\n[+] Distribuição por disciplina no Supabase:");
  for (const [disc, count] of Object.entries(distPorDisc)) {
    console.log(`  - ${disc.padEnd(25)}: ${count}`);
  }

  // Verificar alternativas associadas
  const lote5Ids = questoesLote5.map(q => q.id);
  let totalAlts = 0;
  const chunkSize = 100;
  for (let i = 0; i < lote5Ids.length; i += chunkSize) {
    const chunkIds = lote5Ids.slice(i, i + chunkSize);
    const { count, error } = await supabase
      .from("questoes_alternativas")
      .select("*", { count: "exact", head: true })
      .in("questao_id", chunkIds);
    if (error) throw error;
    totalAlts += count;
  }

  console.log(`\n[+] Total de alternativas vinculadas ao Lote 5 no Supabase: ${totalAlts}`);

  console.log("\n=========================================================");
  console.log("   VERIFICAÇÃO LIVE DO LOTE 5 NO SUPABASE 100% APROVADA! ");
  console.log("=========================================================");
}

verifyLote5().catch(err => {
  console.error("ERRO NA VERIFICAÇÃO DO LOTE 5:", err);
  process.exit(1);
});
