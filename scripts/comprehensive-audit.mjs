import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

// Carregar variáveis de ambiente do .env.local
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

// Extrair todas as tabelas referenciadas no código
function getTablesFromCode() {
  const tables = new Set();
  const srcDir = path.resolve(process.cwd(), "src");

  function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith(".ts") || file.endsWith(".tsx") || file.endsWith(".js") || file.endsWith(".mjs")) {
        const content = fs.readFileSync(fullPath, "utf8");
        const matches = content.matchAll(/\.from\(["']([a-zA-Z0-9_-]+)["']\)/g);
        for (const m of matches) {
          tables.add(m[1]);
        }
      }
    }
  }

  walk(srcDir);
  return Array.from(tables).sort();
}

async function runComprehensiveAudit() {
  console.log("===============================================================");
  console.log("🔍 AUDITORIA COMPLETA DE TABELAS, DADOS E ESTRUTURA (SUPABASE)");
  console.log("===============================================================\n");

  const tablesInCode = getTablesFromCode();
  console.log(`Tabelas identificadas no código fonte (${tablesInCode.length}):`);
  console.log(tablesInCode.join(", "));

  console.log("\n--- TESTANDO DISPONIBILIDADE DE CADA TABELA NO SUPABASE ---");
  const availableTables = [];
  const missingTables = [];

  for (const table of tablesInCode) {
    const { data, error, count } = await supabase
      .from(table)
      .select("*", { count: "exact", head: false })
      .limit(1);

    if (error) {
      missingTables.push({ table, error: error.message });
    } else {
      const sampleCols = data && data.length > 0 ? Object.keys(data[0]) : [];
      availableTables.push({ table, count: count ?? (data ? data.length : 0), sampleCols });
    }
  }

  console.log(`\n✅ Tabelas encontradas e operacionais no Supabase (${availableTables.length}/${tablesInCode.length}):`);
  for (const t of availableTables) {
    console.log(`  • ${t.table.padEnd(28)} | Linhas: ${String(t.count).padStart(6)} | Colunas: ${t.sampleCols.slice(0, 5).join(", ")}${t.sampleCols.length > 5 ? "..." : ""}`);
  }

  if (missingTables.length > 0) {
    console.log(`\n⚠️ Tabelas referenciadas no código mas NÃO encontradas ou com erro (${missingTables.length}):`);
    for (const t of missingTables) {
      console.log(`  ❌ ${t.table.padEnd(28)} -> ${t.error}`);
    }
  }

  // --- AUDITORIA DETALHADA DE QUESTÕES E ALTERNATIVAS ---
  console.log("\n===============================================================");
  console.log("📋 AUDITORIA DO BANCO DE QUESTÕES E ALTERNATIVAS");
  console.log("===============================================================");

  const { count: totalQ } = await supabase.from("questoes").select("id", { count: "exact", head: true });
  const { count: totalAlt } = await supabase.from("questoes_alternativas").select("id", { count: "exact", head: true });
  console.log(`Total de Questões: ${totalQ}`);
  console.log(`Total de Alternativas: ${totalAlt}`);

  // Verificar questões sem alternativas
  const { data: qSample } = await supabase.from("questoes").select("id, tipo, enunciado").limit(500);
  if (qSample && qSample.length > 0) {
    const qIds = qSample.map(q => q.id);
    const { data: alts } = await supabase.from("questoes_alternativas").select("questao_id, correta").in("questao_id", qIds);
    const qWithAlts = new Set((alts || []).map(a => a.questao_id));
    const qWithCorreta = new Set((alts || []).filter(a => a.correta).map(a => a.questao_id));

    const semAlt = qSample.filter(q => !qWithAlts.has(q.id));
    const semCorreta = qSample.filter(q => !semCorretaCheck(q, qWithCorreta));

    function semCorretaCheck(q, setCorreta) {
      if (q.tipo === "certo_errado") return true; // pode ser verificado de outra forma se aplicável
      return setCorreta.has(q.id);
    }

    console.log(`Amostra de 500 questões:`);
    console.log(`  - Questões com alternativas vinculadas: ${qSample.length - semAlt.length}/${qSample.length}`);
    console.log(`  - Questões com alternativa correta (gabarito): ${qSample.length - semCorreta.length}/${qSample.length}`);
  }

  // --- AUDITORIA DE MATERIAIS DE ESTUDO (PDFS) ---
  console.log("\n===============================================================");
  console.log("📚 AUDITORIA DE MATERIAIS E COBERTURA DE PDFS");
  console.log("===============================================================");
  const { count: totalDisc } = await supabase.from("disciplinas").select("id", { count: "exact", head: true });
  const { count: totalAss } = await supabase.from("assuntos").select("id", { count: "exact", head: true });
  const { count: totalMat } = await supabase.from("assunto_conteudos").select("id", { count: "exact", head: true });
  const { count: totalPdf } = await supabase.from("assunto_conteudos").select("id", { count: "exact", head: true }).not("pdf_path", "is", null);

  console.log(`Disciplinas cadastradas: ${totalDisc}`);
  console.log(`Assuntos cadastrados:    ${totalAss}`);
  console.log(`Conteúdos vinculados:    ${totalMat}`);
  console.log(`PDFs ativos no Storage:  ${totalPdf}`);
  console.log(`Cobertura de PDFs:       ${((totalPdf / totalAss) * 100).toFixed(2)}%`);
}

runComprehensiveAudit().catch(console.error);
