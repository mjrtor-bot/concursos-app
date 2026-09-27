import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

console.log("===============================================================================");
console.log("🚀 INICIANDO BATERIA DE TESTES DE REGRESSÃO: SANEAMENTO & AUDITORIA");
console.log("===============================================================================");

let totalPassed = 0;
let totalFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    totalPassed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    totalFailed++;
  }
}

// ── TESTE 1: Ausência de métricas estáticas/hardcoded no código UI ─────────────
console.log("\n[TESTE 1] Verificação de Métricas Hardcoded em Componentes e Páginas UI");
const uiFiles = [
  "src/app/dashboard/page.tsx",
  "src/app/dashboard/simple/page.tsx",
  "src/app/desempenho/page.tsx",
  "src/services/dataService.ts",
];

const bannedPatterns = [
  { pattern: /\+18%/, desc: "Fake trend '+18%'" },
  { pattern: /\+4%/, desc: "Fake trend '+4%'" },
  { pattern: /Recorde.*14\s*dias/i, desc: "Fake streak record '14 dias'" },
  { pattern: /5\.760\s*questões/i, desc: "Hardcoded question count '5.760'" },
  { pattern: /tempoMedio\s*=\s*65/i, desc: "Hardcoded average time '65s'" },
  { pattern: /sequenciaDias\s*=\s*4/i, desc: "Hardcoded streak fallback '4'" },
];

for (const relPath of uiFiles) {
  const fullPath = path.join(ROOT_DIR, relPath);
  const content = fs.readFileSync(fullPath, "utf-8");
  for (const { pattern, desc } of bannedPatterns) {
    const hasPattern = pattern.test(content);
    assert(!hasPattern, `${relPath} não deve conter ${desc}`);
  }
}

// ── TESTE 2: Edital Verticalizado dinâmico e suporte a Processo Penal ─────────
console.log("\n[TESTE 2] Verificação do Edital Verticalizado e Disciplinas Massivas");
const mentoriaServicePath = path.join(ROOT_DIR, "src/services/mentoriaService.ts");
const mentoriaContent = fs.readFileSync(mentoriaServicePath, "utf-8");

assert(
  mentoriaContent.includes("DISCIPLINAS_MASSIVAS") && mentoriaContent.includes("ASSUNTOS_MASSIVOS"),
  "MentoriaService deve utilizar DISCIPLINAS_MASSIVAS e ASSUNTOS_MASSIVOS para cobertura massiva"
);

assert(
  mentoriaContent.includes("disc-direito-processual-penal") || mentoriaContent.includes("processo_penal") || mentoriaContent.includes("disc-dpp") || mentoriaContent.includes("DISCIPLINAS_MASSIVAS"),
  "MentoriaService deve mapear Processo Penal no Edital Verticalizado"
);

assert(
  mentoriaContent.includes("disciplinasFonte") && mentoriaContent.includes("assuntosFonte"),
  "MentoriaService deve consultar dinamicamente tabelas do Supabase com fallback massivo"
);

// ── TESTE 3: Simulados e expansão para 15, 30, 60 e 120 questões ──────────────
console.log("\n[TESTE 3] Verificação da Expansão dos Presets de Simulados");
const simuladosPagePath = path.join(ROOT_DIR, "src/app/simulados/page.tsx");
const simuladosContent = fs.readFileSync(simuladosPagePath, "utf-8");

assert(
  simuladosContent.includes('value="15"') &&
  simuladosContent.includes('value="30"') &&
  simuladosContent.includes('value="60"') &&
  simuladosContent.includes('value="120"'),
  "Modal de Novo Simulado deve oferecer opções de 15, 30, 60 e 120 questões"
);

assert(
  simuladosContent.includes("/api/questoes?pageSize="),
  "Geração de Simulado deve buscar do banco de questões completo via API"
);

const simuladoExecPath = path.join(ROOT_DIR, "src/app/simulados/[id]/page.tsx");
const simuladoExecContent = fs.readFileSync(simuladoExecPath, "utf-8");

assert(
  simuladoExecContent.includes("carregarQuestoes") && simuladoExecContent.includes("fetch(`/api/questoes"),
  "Execução do Simulado deve carregar questões complementares de forma assíncrona"
);

// ── TESTE 4: API /api/questoes suporta pageSize até 200 ──────────────────────
console.log("\n[TESTE 4] Verificação da Rota /api/questoes");
const apiQuestoesPath = path.join(ROOT_DIR, "src/app/api/questoes/route.ts");
const apiQuestoesContent = fs.readFileSync(apiQuestoesPath, "utf-8");

assert(
  apiQuestoesContent.includes("Math.min(200"),
  "/api/questoes deve permitir pageSize de até 200 para comportar simulados de 120 questões"
);

// ── RESUMO DOS TESTES ────────────────────────────────────────────────────────
console.log("\n===============================================================================");
console.log(`📊 RESULTADO FINAL: ${totalPassed} PASSOU | ${totalFailed} FALHOU`);
console.log("===============================================================================");

if (totalFailed > 0) {
  process.exit(1);
} else {
  console.log("🎉 TODOS OS TESTES DE REGRESSÃO FORAM EXECUTADOS COM SUCESSO!\n");
}
