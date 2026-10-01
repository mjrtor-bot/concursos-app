import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

// Carregar .env.local
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

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !ANON_KEY) {
  console.error("Faltam variáveis de ambiente do Supabase");
  process.exit(1);
}

const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_KEY || ANON_KEY);

async function runPreAudit() {
  console.log("================================================================================");
  console.log("INVENTÁRIO COMPLETO COM PAGINAÇÃO PRÉ-LOTE 10 (5.760 QUESTÕES)");
  console.log("================================================================================\n");

  const { count: totalQuestoes } = await supabaseAdmin
    .from("questoes")
    .select("*", { count: "exact", head: true });

  const { count: totalAlternativas } = await supabaseAdmin
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });

  console.log(`1. Total de Questões em Produção: ${totalQuestoes} (Esperado: 5.760)`);
  console.log(`2. Total de Alternativas em Produção: ${totalAlternativas} (Esperado: 22.212)`);

  // Paginar para obter todas as 5.760 questões
  const allQuestions = [];
  const PAGE_SIZE = 1000;
  let offset = 0;
  while (true) {
    const { data, error } = await supabaseAdmin
      .from("questoes")
      .select("id, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome, dificuldade, tipo, prompt_versao")
      .range(offset, offset + PAGE_SIZE - 1);

    if (error) {
      console.error("Erro na paginação:", error);
      break;
    }
    allQuestions.push(...data);
    if (data.length < PAGE_SIZE) break;
    offset += PAGE_SIZE;
  }

  console.log(`3. Total real de questões paginadas recuperadas: ${allQuestions.length}`);

  const { data: disciplinasData } = await supabaseAdmin
    .from("disciplinas")
    .select("id, nome");

  const discMap = new Map();
  (disciplinasData || []).forEach(d => discMap.set(d.id, d.nome));

  const byDisc = {};
  const byBanca = {};
  const byDificuldade = {};
  const byTipo = {};
  const byOrgao = {};
  const byLote = {};

  for (const q of allQuestions) {
    const dNome = discMap.get(q.disciplina_id) || q.disciplina_id || "Não classificada";
    byDisc[dNome] = (byDisc[dNome] || 0) + 1;

    const banca = q.banca_nome || "Outras";
    byBanca[banca] = (byBanca[banca] || 0) + 1;

    const dif = q.dificuldade || "media";
    byDificuldade[dif] = (byDificuldade[dif] || 0) + 1;

    const tipo = q.tipo || "multipla_escolha";
    byTipo[tipo] = (byTipo[tipo] || 0) + 1;

    const orgao = q.orgao_nome || "Outros";
    byOrgao[orgao] = (byOrgao[orgao] || 0) + 1;

    const lote = q.prompt_versao || "legado";
    byLote[lote] = (byLote[lote] || 0) + 1;
  }

  console.log("\n[Distribuição Real por Disciplina]:");
  Object.entries(byDisc).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => {
    console.log(` - ${k.padEnd(35)}: ${v.toString().padStart(5)} q. (${((v / allQuestions.length) * 100).toFixed(1)}%)`);
  });

  console.log("\n[Distribuição Real por Dificuldade]:");
  Object.entries(byDificuldade).forEach(([k, v]) => {
    console.log(` - ${k.padEnd(20)}: ${v.toString().padStart(5)} q. (${((v / allQuestions.length) * 100).toFixed(1)}%)`);
  });

  console.log("\n[Distribuição Real por Tipo]:");
  Object.entries(byTipo).forEach(([k, v]) => {
    console.log(` - ${k.padEnd(20)}: ${v.toString().padStart(5)} q. (${((v / allQuestions.length) * 100).toFixed(1)}%)`);
  });

  console.log("\n[Distribuição Real por Lote]:");
  Object.entries(byLote).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => {
    console.log(` - ${k.padEnd(20)}: ${v.toString().padStart(5)} q.`);
  });

  console.log("\n[Top 10 Carreiras/Órgãos]:");
  Object.entries(byOrgao).sort((a, b) => b[1] - a[1]).slice(0, 10).forEach(([k, v]) => {
    console.log(` - ${k.padEnd(35)}: ${v.toString().padStart(5)} q.`);
  });

  console.log("\n[Top 10 Bancas]:");
  Object.entries(byBanca).sort((a, b) => b[1] - a[1]).slice(0, 10).forEach(([k, v]) => {
    console.log(` - ${k.padEnd(35)}: ${v.toString().padStart(5)} q.`);
  });

  // Salvar snapshot dos fingerprints pré-ingestão para auditoria
  fs.writeFileSync("scripts/lote10_pre_stats.json", JSON.stringify({
    totalQuestoes: allQuestions.length,
    totalAlternativas,
    byDisc,
    byBanca,
    byDificuldade,
    byTipo,
    byLote,
  }, null, 2));

  console.log("\nSnapshot pré-Lote 10 salvo em scripts/lote10_pre_stats.json");
}

runPreAudit();
