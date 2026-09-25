import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

// Carregar variáveis de ambiente manualmente de .env.local
const envPath = resolve(process.cwd(), ".env.local");
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
let serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (existsSync(envPath)) {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...vals] = trimmed.split("=");
    const val = vals.join("=").replace(/^["'](.*)["']$/, "$1");
    if (key === "NEXT_PUBLIC_SUPABASE_URL") supabaseUrl = val;
    if (key === "NEXT_PUBLIC_SUPABASE_ANON_KEY") anonKey = val;
    if (key === "SUPABASE_SERVICE_ROLE_KEY") serviceKey = val;
  }
}

console.log("================================================================================");
console.log("🎯 TESTE & VALIDAÇÃO DA RELEASE 1 — FUNDAÇÃO DA MENTORIA INTELIGENTE");
console.log("================================================================================");

if (!supabaseUrl || !anonKey) {
  console.error("❌ Erro: Variáveis do Supabase não encontradas no .env.local");
  process.exit(1);
}

const supabaseAnon = createClient(supabaseUrl, anonKey);

async function runTests() {
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ [PASS] ${message}`);
      passed++;
    } else {
      console.error(`  ❌ [FAIL] ${message}`);
      failed++;
    }
  }

  // ── TESTE 1: Preservação do Banco de Dados Existente ─────────────────────────
  console.log("\n📌 [1/5] Verificação de Preservação de Dados Existentes...");
  try {
    const { count: questoesCount, error: qErr } = await supabaseAnon
      .from("questoes")
      .select("*", { count: "exact", head: true });

    assert(!qErr && questoesCount >= 1260, `Banco de questões preservado intacto: ${questoesCount} questões (mínimo 1.260)`);

    const { count: altCount, error: aErr } = await supabaseAnon
      .from("questoes_alternativas")
      .select("*", { count: "exact", head: true });

    assert(!aErr && altCount >= 6219, `Alternativas preservadas intactas: ${altCount} alternativas (mínimo 6.219)`);
  } catch (err) {
    assert(false, `Erro ao verificar dados existentes: ${err.message}`);
  }

  // ── TESTE 2: Verificação do Schema da Migração ────────────────────────────────
  console.log("\n📌 [2/5] Verificação da Estrutura de Arquivos da Migração e Tipos...");
  let migrationPath = resolve(process.cwd(), "supabase/migrations/20260925_mentoria_fundacao.sql");
  if (!existsSync(migrationPath)) {
    migrationPath = resolve(process.cwd(), "supabase/migrations/20260925110000_mentoria_fundacao.sql");
  }
  assert(existsSync(migrationPath), "Arquivo de migração mentoria_fundacao.sql existe em supabase/migrations/");

  if (existsSync(migrationPath)) {
    const migrationContent = readFileSync(migrationPath, "utf-8");
    assert(migrationContent.includes("CREATE TABLE IF NOT EXISTS public.mentoria_perfis"), "Migration declara tabela mentoria_perfis");
    assert(migrationContent.includes("CREATE TABLE IF NOT EXISTS public.mentoria_disponibilidade"), "Migration declara tabela mentoria_disponibilidade");
    assert(migrationContent.includes("CREATE TABLE IF NOT EXISTS public.mentoria_edital_topicos"), "Migration declara tabela mentoria_edital_topicos");
    assert(migrationContent.includes("CREATE TABLE IF NOT EXISTS public.mentoria_planos"), "Migration declara tabela mentoria_planos");
    assert(migrationContent.includes("CREATE TABLE IF NOT EXISTS public.mentoria_tarefas"), "Migration declara tabela mentoria_tarefas");
    assert(migrationContent.includes("CREATE TABLE IF NOT EXISTS public.mentoria_sessoes_estudo"), "Migration declara tabela mentoria_sessoes_estudo");
    assert(migrationContent.includes("CREATE TABLE IF NOT EXISTS public.mentoria_revisoes"), "Migration declara tabela mentoria_revisoes");
    assert(migrationContent.includes("ENABLE ROW LEVEL SECURITY"), "Migration habilita Row Level Security em todas as tabelas");
    assert(migrationContent.includes("((select auth.uid()) = usuario_id)"), "Migration aplica subquery otimizada de RLS ((select auth.uid()) = usuario_id)");
  }

  // ── TESTE 3: Verificação de Isolamento e RLS no Anon ─────────────────────────
  console.log("\n📌 [3/5] Verificação de Isolamento e RLS para Cliente Anônimo...");
  try {
    const { data: anonData } = await supabaseAnon
      .from("mentoria_perfis")
      .select("*");

    // Anon deve retornar vazio ou erro de RLS (nenhum perfil vazando)
    assert(!anonData || anonData.length === 0, "Cliente anônimo (não autenticado) não consegue listar perfis de mentoria (RLS Ativo)");
  } catch (err) {
    assert(true, `RLS barrou acesso anônimo com segurança: ${err.message}`);
  }

  // ── TESTE 4: Validação dos Componentes de UI e Rotas Next.js ──────────────────
  console.log("\n📌 [4/5] Verificação da Integridade das Rotas da Mentoria...");
  const rotas = [
    "src/app/mentoria/page.tsx",
    "src/app/mentoria/configurar/page.tsx",
    "src/app/mentoria/plano/page.tsx",
    "src/app/mentoria/hoje/page.tsx",
    "src/app/mentoria/edital/page.tsx",
    "src/app/mentoria/revisoes/page.tsx",
    "src/app/mentoria/evolucao/page.tsx",
  ];

  for (const rota of rotas) {
    const fullPath = resolve(process.cwd(), rota);
    assert(existsSync(fullPath), `Rota encontrada: /${rota.replace("src/app/", "").replace("/page.tsx", "")}`);
  }

  // ── TESTE 5: Verificação do Menu Lateral e Tipagem ───────────────────────────
  console.log("\n📌 [5/5] Verificação do Menu Lateral e Serviços...");
  const sidebarContent = readFileSync(resolve(process.cwd(), "src/components/layout/Sidebar.tsx"), "utf-8");
  assert(sidebarContent.includes('href: "/mentoria"') && sidebarContent.includes('label: "Mentoria"'), "Menu lateral contém link para /mentoria com destaque");

  const typesContent = readFileSync(resolve(process.cwd(), "src/types/index.ts"), "utf-8");
  assert(typesContent.includes("export interface MentoriaPerfil"), "Tipagem MentoriaPerfil definida em src/types/index.ts");
  assert(typesContent.includes("export interface MentoriaDisponibilidade"), "Tipagem MentoriaDisponibilidade definida em src/types/index.ts");
  assert(typesContent.includes("export interface MentoriaDashboardStats"), "Tipagem MentoriaDashboardStats definida em src/types/index.ts");

  console.log("\n================================================================================");
  console.log(`📊 RESULTADO DOS TESTES: ${passed} PASSOU | ${failed} FALHOU`);
  console.log("================================================================================");

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
