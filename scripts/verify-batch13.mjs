import { TODAS_QUESTOES_LOTE13, MODULOS_LOTE13, validarLote13 } from "./batch13_modules/index.mjs";

console.log("=== INICIANDO VERIFICAÇÃO DO LOTE 13 (500 QUESTÕES) ===");

const validacao = validarLote13();
console.log(`Total de módulos: ${MODULOS_LOTE13.length}`);
console.log(`Total de questões carregadas: ${validacao.totalQuestoes}`);
console.log(`Total de alternativas: ${validacao.totalAlternativas}`);

for (const mod of MODULOS_LOTE13) {
  console.log(`  - [${mod.codigo}] ${mod.nome}: ${mod.questoes.length} questões`);
}

if (!validacao.ok) {
  console.error("\n❌ ERROS DE VALIDAÇÃO ENCONTRADOS:");
  validacao.erros.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
  process.exit(1);
} else {
  console.log("\n✅ VALIDAÇÃO ESTRUTURAL BÁSICA CONCLUÍDA COM 100% DE SUCESSO!");
}

// Estatísticas de tipos e bancas
const tipos = {};
const bancas = {};
const orgaos = {};
const dificuldades = {};
const niveisCognitivos = {};

for (const q of TODAS_QUESTOES_LOTE13) {
  tipos[q.tipo] = (tipos[q.tipo] || 0) + 1;
  bancas[q.banca_nome] = (bancas[q.banca_nome] || 0) + 1;
  orgaos[q.orgao_nome] = (orgaos[q.orgao_nome] || 0) + 1;
  dificuldades[q.dificuldade] = (dificuldades[q.dificuldade] || 0) + 1;
  niveisCognitivos[q.nivel_cognitivo] = (niveisCognitivos[q.nivel_cognitivo] || 0) + 1;
}

console.log("\n--- ESTATÍSTICAS DO LOTE 13 ---");
console.log("Tipos:", tipos);
console.log("Dificuldades:", dificuldades);
console.log("Níveis Cognitivos:", niveisCognitivos);
console.log("Bancas:", bancas);
console.log("Órgãos:", orgaos);
