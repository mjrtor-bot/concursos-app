import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

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

async function clean() {
  console.log("Checando estado do banco...");
  const { count: totalQ } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  const { count: lote10Q } = await supabase.from("questoes").select("*", { count: "exact", head: true }).eq("prompt_versao", "v3.0-lote10");
  const { count: totalAlt } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });

  console.log(`Total Questoes: ${totalQ}, Lote 10 parcial: ${lote10Q}, Total Alternativas: ${totalAlt}`);

  if (lote10Q > 0) {
    console.log(`Removendo ${lote10Q} questões parciais do Lote 10 para restabelecer estado limpo de 5.760...`);
    const { error: delError } = await supabase.from("questoes").delete().eq("prompt_versao", "v3.0-lote10");
    if (delError) {
      console.error("Erro ao remover lote 10 parcial:", delError);
      return;
    }
  }

  const { count: finalQ } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  const { count: finalAlt } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });
  console.log(`Estado Restaurado com Sucesso:`);
  console.log(`- Questões no banco: ${finalQ} (Esperado: 5.760)`);
  console.log(`- Alternativas no banco: ${finalAlt} (Esperado: 22.212)`);
}

clean();
