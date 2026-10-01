import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";

const envPath = path.resolve(process.cwd(), ".env.local");
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

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function resetToBaseline() {
  console.log("Removendo registros parciais de 'v3.3-lote13' para restaurar baseline de 7.260...");

  // Buscar IDs de questoes com prompt_versao = 'v3.3-lote13'
  const { data: questoesV13, error: errQ } = await supabase
    .from("questoes")
    .select("id")
    .eq("prompt_versao", "v3.3-lote13");

  if (errQ) {
    console.error("Erro ao buscar questoes v3.3-lote13:", errQ);
    return;
  }

  const ids = (questoesV13 || []).map(q => q.id);
  console.log(`Encontradas ${ids.length} questões com 'v3.3-lote13'.`);

  if (ids.length > 0) {
    // Deletar alternativas filhas primeiro (em chunks de 50)
    for (let i = 0; i < ids.length; i += 50) {
      const chunkIds = ids.slice(i, i + 50);
      const { error: errDelAlts } = await supabase
        .from("questoes_alternativas")
        .delete()
        .in("questao_id", chunkIds);
      if (errDelAlts) console.error("Erro ao deletar alternativas:", errDelAlts);
    }

    // Deletar questoes (em chunks de 50)
    for (let i = 0; i < ids.length; i += 50) {
      const chunkIds = ids.slice(i, i + 50);
      const { error: errDelQ } = await supabase
        .from("questoes")
        .delete()
        .in("id", chunkIds);
      if (errDelQ) console.error("Erro ao deletar questoes:", errDelQ);
    }
  }

  const { count: countQ } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  const { count: countA } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });
  console.log(`[RESTORED BASELINE] Total questoes: ${countQ}, Total alternativas: ${countA}`);
}

resetToBaseline();
