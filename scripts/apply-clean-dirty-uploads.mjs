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

const TARGET_IDS = [
  "e1ebb384-e1dd-4a94-943e-6a6cfac33abd",
  "53f62cc4-17ee-4eaf-b22b-c5c45735a5a3",
  "0099a673-4e16-41a0-8486-f0b3335e11b1",
  "028a79b8-170d-4ab6-b159-df14e76ed31e",
];

const EDITAL_PMPR = "3d7ec744-97af-4aa8-ad61-af8f8363c816";
const EDITAL_PCSC = "68e35328-1a3b-416e-88b0-848fa5ec9b9c";

async function run() {
  console.log("==================================================");
  console.log("1. CONTAGEM E ESTADO ATUAL (ANTES DA GRAVAÇÃO)");
  console.log("==================================================");

  // Contagem total editais_usuario
  const { count: totalUploads } = await supabase
    .from("editais_usuario")
    .select("*", { count: "exact", head: true });

  // Contagem de editais_usuario por status
  const { data: statusStats } = await supabase
    .from("editais_usuario")
    .select("status, edital_id");

  const statusCounts = {};
  let totalWithEditalId = 0;
  for (const row of statusStats || []) {
    statusCounts[row.status] = (statusCounts[row.status] || 0) + 1;
    if (row.edital_id) totalWithEditalId++;
  }
  console.log(`Total de registros em editais_usuario: ${totalUploads}`);
  console.log("Distribuição por status:", statusCounts);
  console.log(`Total de uploads com edital_id preenchido: ${totalWithEditalId}`);

  // Verificar os 4 registros alvo antes
  const { data: beforeTargets } = await supabase
    .from("editais_usuario")
    .select("id, status, nome, edital_id")
    .in("id", TARGET_IDS);

  console.log("\nEstado atual dos 4 alvos:");
  for (const t of beforeTargets || []) {
    console.log(` - ID: ${t.id} | Status: ${t.status} | Nome: "${t.nome}" | edital_id: ${t.edital_id}`);
  }

  // Verificar upload confirmado antes
  const { data: fadBefore } = await supabase
    .from("editais_usuario")
    .select("id, status, nome, edital_id, confirmado_em")
    .eq("status", "confirmado")
    .maybeSingle();

  console.log("\nEstado do upload confirmado antes:");
  console.log(fadBefore);

  console.log("\n==================================================");
  console.log("2. EXECUTANDO A GRAVAÇÃO EXCLUSIVA NOS 4 REGISTROS");
  console.log("==================================================");

  const { data: updateResult, error: updateError } = await supabase
    .from("editais_usuario")
    .update({ edital_id: null })
    .in("id", TARGET_IDS)
    .neq("status", "confirmado")
    .select("id, status, nome, edital_id");

  if (updateError) {
    console.error("ERRO na gravação:", updateError);
    process.exit(1);
  }

  console.log(`Registros atualizados com sucesso: ${updateResult?.length}`);
  for (const u of updateResult || []) {
    console.log(` ✅ Atualizado ID: ${u.id} | Status: ${u.status} | Novo edital_id: ${u.edital_id}`);
  }

  console.log("\n==================================================");
  console.log("3. SELECT DE COMPROVAÇÃO E AUDITORIA PÓS-GRAVAÇÃO");
  console.log("==================================================");

  // (1) Os 4 uploads com edital_id nulo
  console.log("\n--- Comprovação (1): Os 4 uploads com edital_id nulo ---");
  const { data: afterTargets } = await supabase
    .from("editais_usuario")
    .select("id, status, nome, edital_id, updated_at")
    .in("id", TARGET_IDS);

  let allFourNull = true;
  for (const t of afterTargets || []) {
    const isNull = t.edital_id === null;
    if (!isNull) allFourNull = false;
    console.log(` [${isNull ? "OK - NULO" : "FALHA"}] ID: ${t.id} | Status: ${t.status} | edital_id: ${t.edital_id}`);
  }

  // (2) Upload confirmado inalterado
  console.log("\n--- Comprovação (2): Upload confirmado inalterado ---");
  const { data: fadAfter } = await supabase
    .from("editais_usuario")
    .select("id, status, nome, edital_id, confirmado_em")
    .eq("status", "confirmado")
    .maybeSingle();

  const fadUnchanged = fadAfter && fadAfter.status === "confirmado" && fadAfter.id.startsWith("fad17caf");
  console.log(` [${fadUnchanged ? "OK - INALTERADO" : "FALHA"}] ID: ${fadAfter?.id}`);
  console.log(`  Nome: "${fadAfter?.nome}" | Status: ${fadAfter?.status} | edital_id: ${fadAfter?.edital_id} | Confirmado em: ${fadAfter?.confirmado_em}`);

  // (3) Tópicos dos editais PMPR e PCSC
  console.log("\n--- Comprovação (3): Integridade de tópicos dos editais oficiais ---");

  // PMPR
  const { data: pmprEdital } = await supabase
    .from("editais_concurso")
    .select("id, titulo, numero")
    .eq("id", EDITAL_PMPR)
    .single();

  const { count: pmprTopicosCount } = await supabase
    .from("edital_topicos")
    .select("*", { count: "exact", head: true })
    .eq("edital_id", EDITAL_PMPR);

  console.log(` Edital PMPR (${EDITAL_PMPR}):`);
  console.log(`  Título/Número: ${pmprEdital?.titulo || pmprEdital?.numero}`);
  console.log(`  Total de Tópicos: ${pmprTopicosCount} (Esperado: 78) -> ${pmprTopicosCount === 78 ? "✅ CONFERE" : "❌ DIVERGENTE"}`);

  // PCSC
  const { data: pcscEdital } = await supabase
    .from("editais_concurso")
    .select("id, titulo, numero")
    .eq("id", EDITAL_PCSC)
    .single();

  const { count: pcscTopicosCount } = await supabase
    .from("edital_topicos")
    .select("*", { count: "exact", head: true })
    .eq("edital_id", EDITAL_PCSC);

  console.log(`\n Edital PCSC (${EDITAL_PCSC}):`);
  console.log(`  Título/Número: ${pcscEdital?.titulo || pcscEdital?.numero}`);
  console.log(`  Total de Tópicos: ${pcscTopicosCount} (Esperado: 53) -> ${pcscTopicosCount === 53 ? "✅ CONFERE" : "❌ DIVERGENTE"}`);

  console.log("\n==================================================");
  console.log("AUDITORIA FINALIZADA");
  console.log("==================================================");
}

run().catch(console.error);
