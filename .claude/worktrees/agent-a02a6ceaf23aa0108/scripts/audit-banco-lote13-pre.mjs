import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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

async function preAudit() {
  console.log("==========================================================================");
  console.log("   FASE 1 — AUDITORIA REAL DO ACERVO EXISTENTE NO SUPABASE (PRÉ-LOTE 13) ");
  console.log("==========================================================================\n");

  const { count: totalQuestoes, error: errQ } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: totalAlternativas, error: errA } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  const { count: lote13Count, error: errL13 } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true })
    .eq("prompt_versao", "v3.3-lote13");

  if (errQ || errA || errL13) {
    throw new Error(`Erro ao consultar Supabase: ${errQ?.message || errA?.message || errL13?.message}`);
  }

  console.log(`[+] Total de questões em produção: ${totalQuestoes} (Esperado: 7.260)`);
  console.log(`[+] Total de alternativas em produção: ${totalAlternativas} (Esperado: 27.084)`);
  console.log(`[+] Total com prompt_versao='v3.3-lote13': ${lote13Count} (Esperado: 0)`);

  if (totalQuestoes !== 7260) {
    throw new Error(`[DIVERGÊNCIA CRÍTICA] questoes=${totalQuestoes} (esperado: 7.260). ABORTANDO.`);
  }
  if (totalAlternativas !== 27084) {
    throw new Error(`[DIVERGÊNCIA CRÍTICA] questoes_alternativas=${totalAlternativas} (esperado: 27.084). ABORTANDO.`);
  }
  if (lote13Count !== 0) {
    throw new Error(`[DIVERGÊNCIA CRÍTICA] v3.3-lote13=${lote13Count} (esperado: 0). ABORTANDO.`);
  }

  // Buscar todas as 7.260 questões para mapeamento profundo de gaps
  console.log("\n[>] Extraindo metadados de todas as 7.260 questões em produção...");
  const pageSize = 1000;
  const totalPages = Math.ceil(totalQuestoes / pageSize);
  const questoes = [];

  for (let p = 0; p < totalPages; p++) {
    const from = p * pageSize;
    const to = from + pageSize - 1;
    const { data, error } = await supabase
      .from("questoes")
      .select("id, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade, prompt_versao")
      .range(from, to);
    if (error) throw error;
    questoes.push(...data);
  }

  console.log(`[+] Extraídas ${questoes.length} questões com sucesso.`);

  // Carregar nomes de disciplinas e assuntos para mapeamento legível
  const { data: disciplinasData } = await supabase.from("disciplinas").select("id, nome");
  const { data: assuntosData } = await supabase.from("assuntos").select("id, nome, disciplina_id");

  const discMap = new Map((disciplinasData || []).map((d) => [d.id, d.nome]));
  const assMap = new Map((assuntosData || []).map((a) => [a.id, a.nome]));

  // Agregações
  const porDisciplina = {};
  const porAssunto = {};
  const porCarreiraOrgao = {};
  const porBanca = {};
  const porDificuldade = {};
  const porTipo = {};
  const porPromptVersao = {};

  for (const q of questoes) {
    const discNome = discMap.get(q.disciplina_id) || q.disciplina_id;
    const assNome = assMap.get(q.assunto_id) || q.assunto_id;

    porDisciplina[discNome] = (porDisciplina[discNome] || 0) + 1;
    porAssunto[`${discNome} -> ${assNome}`] = (porAssunto[`${discNome} -> ${assNome}`] || 0) + 1;
    porCarreiraOrgao[q.orgao_nome || "NÃO_INFORMADO"] = (porCarreiraOrgao[q.orgao_nome || "NÃO_INFORMADO"] || 0) + 1;
    porBanca[q.banca_nome || "NÃO_INFORMADO"] = (porBanca[q.banca_nome || "NÃO_INFORMADO"] || 0) + 1;
    porDificuldade[q.dificuldade || "NÃO_INFORMADO"] = (porDificuldade[q.dificuldade || "NÃO_INFORMADO"] || 0) + 1;
    porTipo[q.tipo || "NÃO_INFORMADO"] = (porTipo[q.tipo || "NÃO_INFORMADO"] || 0) + 1;
    porPromptVersao[q.prompt_versao || "legado"] = (porPromptVersao[q.prompt_versao || "legado"] || 0) + 1;
  }

  const report = {
    totalQuestoes,
    totalAlternativas,
    lote13Count,
    distribuicoes: {
      porDisciplina,
      porCarreiraOrgao,
      porBanca,
      porDificuldade,
      porTipo,
      porPromptVersao,
      topAssuntos: Object.entries(porAssunto).sort((a, b) => b[1] - a[1]),
    },
  };

  fs.writeFileSync(
    path.join(__dirname, "audit_lote13_pre_import.json"),
    JSON.stringify(report, null, 2),
    "utf8"
  );

  console.log("\n--- DISTRIBUIÇÃO ATUAL POR DISCIPLINA (7.260 ITENS) ---");
  for (const [disc, count] of Object.entries(porDisciplina).sort((a, b) => b[1] - a[1])) {
    const pct = ((count / totalQuestoes) * 100).toFixed(1);
    console.log(`  - ${disc.padEnd(35)}: ${count.toString().padStart(4)} (${pct}%)`);
  }

  console.log("\n--- DISTRIBUIÇÃO ATUAL POR ÓRGÃO / CARREIRA ---");
  for (const [orgao, count] of Object.entries(porCarreiraOrgao).sort((a, b) => b[1] - a[1])) {
    const pct = ((count / totalQuestoes) * 100).toFixed(1);
    console.log(`  - ${orgao.padEnd(35)}: ${count.toString().padStart(4)} (${pct}%)`);
  }

  console.log("\n--- DISTRIBUIÇÃO ATUAL POR BANCA ---");
  for (const [banca, count] of Object.entries(porBanca).sort((a, b) => b[1] - a[1])) {
    const pct = ((count / totalQuestoes) * 100).toFixed(1);
    console.log(`  - ${banca.padEnd(35)}: ${count.toString().padStart(4)} (${pct}%)`);
  }

  console.log("\n--- DISTRIBUIÇÃO ATUAL POR DIFICULDADE ---");
  for (const [dif, count] of Object.entries(porDificuldade)) {
    const pct = ((count / totalQuestoes) * 100).toFixed(1);
    console.log(`  - ${dif.padEnd(20)}: ${count.toString().padStart(4)} (${pct}%)`);
  }

  console.log("\n--- DISTRIBUIÇÃO ATUAL POR FORMATO ---");
  for (const [tipo, count] of Object.entries(porTipo)) {
    const pct = ((count / totalQuestoes) * 100).toFixed(1);
    console.log(`  - ${tipo.padEnd(20)}: ${count.toString().padStart(4)} (${pct}%)`);
  }

  console.log("\n[+] Relatório pré-importação salvo em scripts/audit_lote13_pre_import.json");
  console.log("✅ AUDITORIA DA FASE 1 CONCLUÍDA COM SUCESSO!");
}

preAudit().catch((err) => {
  console.error("Erro fatal na auditoria prévia do Lote 13:", err);
  process.exit(1);
});
