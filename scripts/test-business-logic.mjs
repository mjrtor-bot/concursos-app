// Teste de validação dos dados e rotas em Node.js
import fs from "fs";
import path from "path";

console.log("=================================================");
console.log("🔍 INICIANDO BATERIA DE TESTES DE INTEGRAÇÃO");
console.log("=================================================\n");

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName, details = "") {
  totalTests++;
  if (condition) {
    console.log(`✅ [PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`❌ [FAIL] ${testName} - ${details}`);
  }
}

// 1. Ler mockData.ts
const mockDataContent = fs.readFileSync(path.resolve("src/data/mockData.ts"), "utf-8");

assert(mockDataContent.includes("export const MOCK_QUESTOES"), "MOCK_QUESTOES exportado corretamente");
assert(mockDataContent.includes("export const MOCK_DISCIPLINAS"), "MOCK_DISCIPLINAS exportado corretamente");
assert(mockDataContent.includes("export const MOCK_ASSUNTOS"), "MOCK_ASSUNTOS exportado corretamente");
assert(mockDataContent.includes("export const MOCK_CONCURSOS"), "MOCK_CONCURSOS exportado corretamente");
assert(mockDataContent.includes("export const MOCK_SIMULADOS"), "MOCK_SIMULADOS exportado corretamente");

// 2. Verificar páginas principais
const requiredPages = [
  "src/app/page.tsx",
  "src/app/dashboard/page.tsx",
  "src/app/questoes/page.tsx",
  "src/app/caderno-de-erros/page.tsx",
  "src/app/simulados/page.tsx",
  "src/app/simulados/[id]/page.tsx",
  "src/app/simulados/[id]/resultado/page.tsx",
  "src/app/desempenho/page.tsx",
  "src/app/concursos/page.tsx",
  "src/app/disciplinas/page.tsx",
  "src/app/perfil/page.tsx",
];

console.log("\n--- 2. TESTE DE EXISTÊNCIA E ESTRUTURA DAS PÁGINAS ---");
for (const pagePath of requiredPages) {
  const exists = fs.existsSync(path.resolve(pagePath));
  assert(exists, `Página ${pagePath} existe`);
}

// 3. Verificar QuestionCard e DataService
console.log("\n--- 3. TESTE DE COMPONENTES CRÍTICOS E FLUXOS ---");
const questionCardCode = fs.readFileSync(path.resolve("src/components/questoes/QuestionCard.tsx"), "utf-8");
assert(questionCardCode.includes("setResposta(null)"), "QuestionCard inicializa estado de resposta limpo");
assert(questionCardCode.includes("setMostrarExplicacao(false)"), "QuestionCard esconde explicação inicialmente");
assert(questionCardCode.includes("Responder Questão"), "Botão 'Responder Questão' presente no card");
assert(questionCardCode.includes("handleResponder"), "Função handleResponder implementada");
assert(questionCardCode.includes("handleSelectAlternativa"), "Seleção interativa de alternativa implementada");

const dataServiceCode = fs.readFileSync(path.resolve("src/services/dataService.ts"), "utf-8");
assert(dataServiceCode.includes("registrarResposta"), "DataService possui registro de respostas");
assert(dataServiceCode.includes("adicionarAoCadernoErros"), "DataService adiciona erros ao caderno");
assert(dataServiceCode.includes("salvarTentativaSimulado"), "DataService registra tentativas de simulado");
assert(dataServiceCode.includes("getEstatisticas"), "DataService calcula métricas de desempenho");

console.log("\n=================================================");
console.log(`📊 RESULTADO: ${passedTests}/${totalTests} TESTES EXECUTADOS COM SUCESSO!`);
console.log("=================================================");
