import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

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

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

async function main() {
  console.log("Fetching official catalog editais...");
  const { data: officialEditais } = await supabase
    .from("editais_concurso")
    .select("id")
    .is("criado_por", null);

  const officialIds = new Set(officialEditais?.map(e => e.id) || []);
  console.log(`Found ${officialIds.size} official catalog editais.`);

  // Find unconfirmed/pending/errored user uploads incorrectly pointing to official editais
  const { data: uploads } = await supabase
    .from("editais_usuario")
    .select("id, status, edital_id, nome, usuario_id")
    .in("status", ["aguardando_processamento", "processando", "aguardando_revisao", "erro", "revisao_sem_conteudo"])
    .not("edital_id", "is", null);

  console.log(`Checking ${uploads?.length || 0} non-confirmed uploads with edital_id...`);

  const isDryRun = process.argv.includes("--dry-run") || process.argv.includes("--read-only") || !process.argv.includes("--apply");
  if (isDryRun) {
    console.log("=== MODO SOMENTE LEITURA (DRY-RUN) ATIVO ===");
    console.log("Nenhuma alteração será gravada no banco de dados.");
  }

  let wouldClean = 0;
  for (const u of uploads || []) {
    if (officialIds.has(u.edital_id)) {
      wouldClean++;
      console.log(`[${isDryRun ? "SIMULAÇÃO - NÃO GRAVADO" : "LIMPANDO"}] Upload ID: ${u.id} | Status: ${u.status} | Nome: "${u.nome}" | edital_id oficial vinculado: ${u.edital_id} -> Seria alterado para null`);

      if (!isDryRun) {
        const { error } = await supabase
          .from("editais_usuario")
          .update({ edital_id: null })
          .eq("id", u.id);
        if (error) {
          console.error(`Erro ao atualizar upload ${u.id}:`, error);
        }
      }
    }
  }

  if (isDryRun) {
    console.log(`\nResultado da Simulação: ${wouldClean} upload(s) seriam limpos (nenhum foi modificado).`);
  } else {
    console.log(`\nConcluído: ${wouldClean} upload(s) limpos com sucesso.`);
  }
}

main().catch(console.error);
