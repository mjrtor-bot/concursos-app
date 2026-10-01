import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
let url = "", key = "";
for (const line of env.split("\n")) {
  const trimmed = line.trim();
  if (trimmed.startsWith("NEXT_PUBLIC_SUPABASE_URL=")) url = trimmed.split("=")[1].trim().replace(/['"]/g, "");
  if (trimmed.startsWith("SUPABASE_SERVICE_ROLE_KEY=")) key = trimmed.split("=")[1].trim().replace(/['"]/g, "");
}

const supabase = createClient(url, key);

async function checkMigration() {
  console.log("=== Verificando Schema da Migration 20260925130000_mentoria_ciclo.sql ===");

  // 1. Create a test user
  const { data: userAuth, error: uErr } = await supabase.auth.admin.createUser({
    email: `mig.check.${Date.now()}@concursosapp.test`,
    password: "Password123!#",
    email_confirm: true
  });
  if (uErr) {
    console.error("Auth error:", uErr);
    return;
  }
  const uid = userAuth.user.id;

  // 2. Test inserting into mentoria_planos with cycle columns
  const { data: pData, error: pErr } = await supabase.from("mentoria_planos").insert({
    usuario_id: uid,
    data_inicio: "2026-09-25",
    status: "ativo",
    versao: 1,
    meta_semanal_minutos: 720,
    minutos_concluidos: 0,
    ciclo_posicao_atual: 0,
    ciclo_total_blocos: 18,
    ciclo_concluidos_contagem: 0,
    estrutura_ciclo: [{ ordem: 1 }],
    prioridades_disciplinas: [{ nome: "RLM" }]
  }).select().single();

  console.log("mentoria_planos com colunas do ciclo:", pData ? "COLUNAS PRESENTES NO SUPABASE!" : `FALHA: ${pErr?.message}`);

  // 3. Test inserting into mentoria_sessoes_estudo with status/bloco_numero/tipo
  const { data: sData, error: sErr } = await supabase.from("mentoria_sessoes_estudo").insert({
    usuario_id: uid,
    inicio: new Date().toISOString(),
    fim: new Date().toISOString(),
    segundos_liquidos: 1800,
    pausas: 0,
    segundos_pausa: 0,
    status: "concluida",
    bloco_numero: 1,
    tipo: "TEORIA"
  }).select().single();

  console.log("mentoria_sessoes_estudo com colunas da migration:", sData ? "COLUNAS PRESENTES NO SUPABASE!" : `FALHA: ${sErr?.message}`);

  // Clean up
  await supabase.auth.admin.deleteUser(uid);
  console.log("Cleanup efetuado.");
}

checkMigration();
