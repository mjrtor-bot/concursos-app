import { TODAS_QUESTOES_LOTE12, batch12Preparados } from "./batch12_modules/index.mjs";

console.log("================ VERIFICAÇÃO LOTE 12 ================");
console.log(`Total de Questões: ${TODAS_QUESTOES_LOTE12.length}`);

const totalAlternativas = batch12Preparados.reduce((acc, p) => acc + p.alternativas.length, 0);
console.log(`Total de Alternativas: ${totalAlternativas}`);

const porTipo = {};
const porDificuldade = {};
const porDisciplina = {};

for (const p of batch12Preparados) {
  porTipo[p.questao.tipo] = (porTipo[p.questao.tipo] || 0) + 1;
  porDificuldade[p.questao.dificuldade] = (porDificuldade[p.questao.dificuldade] || 0) + 1;
  porDisciplina[p.questao.disciplina_id] = (porDisciplina[p.questao.disciplina_id] || 0) + 1;
}

console.log("\nPor Tipo:", porTipo);
console.log("\nPor Dificuldade:", porDificuldade);
console.log("\nDisciplinas únicas:", Object.keys(porDisciplina).length);

// Validação de unicidade de slugs, IDs e fingerprints
const slugs = new Set();
const ids = new Set();
const fingerprints = new Set();
const altIds = new Set();

for (const p of batch12Preparados) {
  if (slugs.has(p.idSlug)) throw new Error(`Slug duplicado: ${p.idSlug}`);
  slugs.add(p.idSlug);

  if (ids.has(p.questao.id)) throw new Error(`ID de questão duplicado: ${p.questao.id}`);
  ids.add(p.questao.id);

  if (fingerprints.has(p.fingerprint)) throw new Error(`Fingerprint duplicado: ${p.fingerprint}`);
  fingerprints.add(p.fingerprint);

  let temCorreta = false;
  for (const alt of p.alternativas) {
    if (altIds.has(alt.id)) throw new Error(`ID de alternativa duplicado: ${alt.id}`);
    altIds.add(alt.id);
    if (alt.correta) temCorreta = true;
  }
  if (!temCorreta) throw new Error(`Questão sem alternativa correta: ${p.idSlug}`);
}

console.log("\n[✓] Unicidade de Slugs, IDs, Fingerprints e IDs de Alternativas 100% VÁLIDA.");
