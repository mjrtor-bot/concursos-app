import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";

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

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("ERRO: Credenciais do Supabase não encontradas em .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log("===============================================================================");
  console.log("FASE 4 — EXECUÇÃO SEGURA DAS CORREÇÕES DE INTEGRIDADE NO SUPABASE");
  console.log(`Supabase URL: ${supabaseUrl}`);
  console.log("===============================================================================");

  const planPath = path.resolve(process.cwd(), "scripts/question_integrity_correction_plan.json");
  if (!fs.existsSync(planPath)) {
    console.error(`ERRO: Arquivo do plano não encontrado em: ${planPath}`);
    process.exit(1);
  }

  const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
  console.log(`Carregado plano de correção:`);
  console.log(`- Alternativas a atualizar: ${plan.correcoesAlternativas.length}`);
  console.log(`- Questões (explicações) a atualizar: ${plan.correcoesQuestoes.length}`);

  // 1. Executar atualizações nas alternativas
  console.log("\n[1/2] Atualizando alternativas no Supabase...");
  let altSuccess = 0;
  for (let i = 0; i < plan.correcoesAlternativas.length; i++) {
    const item = plan.correcoesAlternativas[i];
    const { data, error } = await supabase
      .from("questoes_alternativas")
      .update({ correta: item.valor_correto })
      .eq("id", item.id)
      .select("id, questao_id, correta");

    if (error) {
      console.error(`ERRO ao atualizar alternativa ID ${item.id}:`, error);
      throw error;
    }

    altSuccess++;
    if (altSuccess % 10 === 0 || altSuccess === plan.correcoesAlternativas.length) {
      console.log(`  Progresso alternativas: ${altSuccess}/${plan.correcoesAlternativas.length} atualizadas.`);
    }
  }

  // 2. Executar atualizações nas explicações das questões
  console.log("\n[2/2] Atualizando explicações das questões no Supabase...");
  let qSuccess = 0;
  for (let i = 0; i < plan.correcoesQuestoes.length; i++) {
    const item = plan.correcoesQuestoes[i];
    const { data, error } = await supabase
      .from("questoes")
      .update({ explicacao: item.explicacao_corrigida })
      .eq("id", item.id)
      .select("id, explicacao");

    if (error) {
      console.error(`ERRO ao atualizar explicacao da questão ID ${item.id}:`, error);
      throw error;
    }

    qSuccess++;
    console.log(`  [${qSuccess}/${plan.correcoesQuestoes.length}] Questão ID ${item.id} atualizada.`);
  }

  console.log("\n===============================================================================");
  console.log("TODAS AS CORREÇÕES FORAM APLICADAS COM SUCESSO NO SUPABASE DE PRODUÇÃO!");
  console.log(`- Total Alternativas Atualizadas: ${altSuccess}`);
  console.log(`- Total Questões Atualizadas: ${qSuccess}`);
  console.log("===============================================================================");
}

run().catch(err => {
  console.error("Falha na execução das correções:", err);
  process.exit(1);
});
