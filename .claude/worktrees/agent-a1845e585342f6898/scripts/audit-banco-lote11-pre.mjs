import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";

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

async function runPreLote11Audit() {
  console.log("=========================================================");
  console.log("      AUDITORIA DO ACERVO DE QUESTÕES PRÉ-LOTE 11       ");
  console.log("=========================================================\n");

  // 1. Contagens exatas
  const { count: totalQ, error: errQ } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  const { count: totalA, error: errA } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });
  const { count: l11Count, error: errL11 } = await supabase.from("questoes").select("*", { count: "exact", head: true }).eq("prompt_versao", "v3.1-lote11");

  if (errQ || errA || errL11) {
    throw new Error(`Erro Supabase: ${errQ?.message || errA?.message || errL11?.message}`);
  }

  console.log(`[+] Total Questoes: ${totalQ} (Esperado: 6.260)`);
  console.log(`[+] Total Alternativas: ${totalA} (Esperado: 23.620)`);
  console.log(`[+] Total v3.1-lote11: ${l11Count} (Esperado: 0)`);

  if (totalQ !== 6260 || totalA !== 23620 || l11Count !== 0) {
    throw new Error(`[ERRO BASE] O banco não está no estado esperado pré-Lote 11!`);
  }

  // 2. Coletar todas as 6.260 questões
  console.log("\n[>] Baixando metadados das 6.260 questões para análise de distribuição...");
  const questions = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from("questoes")
      .select("id, prompt_versao, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome, dificuldade, tipo, ano")
      .range(page * pageSize, (page + 1) * pageSize - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    questions.push(...data);
    if (data.length < pageSize) break;
    page++;
  }

  console.log(`[+] Total de questões baixadas: ${questions.length}`);

  // 3. Buscar nomes de disciplinas e assuntos
  const { data: disciplinas } = await supabase.from("disciplinas").select("id, nome");
  const { data: assuntos } = await supabase.from("assuntos").select("id, nome, disciplina_id");

  const discMap = new Map(disciplinas.map(d => [d.id, d.nome]));
  const assMap = new Map(assuntos.map(a => [a.id, { nome: a.nome, disciplina_id: a.disciplina_id }]));

  // Agregações
  const byDisc = {};
  const byOrgao = {};
  const byBanca = {};
  const byDificuldade = {};
  const byTipo = {};
  const byPromptVersao = {};
  const byAssunto = {};

  for (const q of questions) {
    const discName = discMap.get(q.disciplina_id) || "Desconhecida";
    const assInfo = assMap.get(q.assunto_id) || { nome: "Desconhecido" };
    const orgao = q.orgao_nome || "Não informado";
    const banca = q.banca_nome || "Não informada";
    const dif = q.dificuldade || "Não informada";
    const tipo = q.tipo || "Não informado";
    const pv = q.prompt_versao || "legado";

    byDisc[discName] = (byDisc[discName] || 0) + 1;
    byOrgao[orgao] = (byOrgao[orgao] || 0) + 1;
    byBanca[banca] = (byBanca[banca] || 0) + 1;
    byDificuldade[dif] = (byDificuldade[dif] || 0) + 1;
    byTipo[tipo] = (byTipo[tipo] || 0) + 1;
    byPromptVersao[pv] = (byPromptVersao[pv] || 0) + 1;

    const assKey = `${discName} -> ${assInfo.nome}`;
    byAssunto[assKey] = (byAssunto[assKey] || 0) + 1;
  }

  console.log("\n=== DISTRIBUIÇÃO POR DISCIPLINA (6.260 questões) ===");
  Object.entries(byDisc).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => {
    console.log(`  - ${k}: ${v} (${((v / totalQ) * 100).toFixed(1)}%)`);
  });

  console.log("\n=== DISTRIBUIÇÃO POR ÓRGÃO / CARREIRA ===");
  Object.entries(byOrgao).sort((a, b) => b[1] - a[1]).slice(0, 15).forEach(([k, v]) => {
    console.log(`  - ${k}: ${v} (${((v / totalQ) * 100).toFixed(1)}%)`);
  });

  console.log("\n=== DISTRIBUIÇÃO POR BANCA / ESTILO ===");
  Object.entries(byBanca).sort((a, b) => b[1] - a[1]).slice(0, 10).forEach(([k, v]) => {
    console.log(`  - ${k}: ${v} (${((v / totalQ) * 100).toFixed(1)}%)`);
  });

  console.log("\n=== DISTRIBUIÇÃO POR DIFICULDADE ===");
  Object.entries(byDificuldade).forEach(([k, v]) => {
    console.log(`  - ${k}: ${v} (${((v / totalQ) * 100).toFixed(1)}%)`);
  });

  console.log("\n=== DISTRIBUIÇÃO POR FORMATO (TIPO) ===");
  Object.entries(byTipo).forEach(([k, v]) => {
    console.log(`  - ${k}: ${v} (${((v / totalQ) * 100).toFixed(1)}%)`);
  });

  console.log("\n=== DISTRIBUIÇÃO POR PROMPT VERSÃO ===");
  Object.entries(byPromptVersao).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => {
    console.log(`  - ${k}: ${v}`);
  });

  const statsOutput = {
    totalQuestoes: totalQ,
    totalAlternativas: totalA,
    porDisciplina: byDisc,
    porOrgao: byOrgao,
    porBanca: byBanca,
    porDificuldade: byDificuldade,
    porTipo: byTipo,
    porPromptVersao: byPromptVersao,
    porAssunto: byAssunto,
  };

  fs.writeFileSync(
    path.resolve(process.cwd(), "scripts/lote11_pre_stats.json"),
    JSON.stringify(statsOutput, null, 2),
    "utf8"
  );
  console.log("\n[✓] Relatório salvo em scripts/lote11_pre_stats.json");
}

runPreLote11Audit().catch(err => {
  console.error("Erro na auditoria pré-Lote 11:", err);
  process.exit(1);
});
