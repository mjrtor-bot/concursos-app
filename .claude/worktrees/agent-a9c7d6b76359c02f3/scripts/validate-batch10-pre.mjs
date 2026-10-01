import fs from "node:fs";
import { batch10Questoes } from "./batch10_modules/index.mjs";

console.log("=================================================");
console.log(" AUDITORIA E VALIDAÇÃO PRE-INGESTÃO LOTE 10");
console.log("=================================================");

console.log(`\n1. Contagem Total de Questões: ${batch10Questoes.length}`);
if (batch10Questoes.length !== 500) {
  console.error(`ERRO CRÍTICO: Esperado exatamente 500 questões, obtido ${batch10Questoes.length}`);
  process.exit(1);
}

// 2. Validação Estrutural
let totalAlts = 0;
const slugSet = new Set();
const idSet = new Set();
const hashSet = new Set();
const errors = [];

batch10Questoes.forEach((q, idx) => {
  if (!q.id || q.id.length !== 36) errors.push(`[${q.slug}] ID UUID inválido: ${q.id}`);
  if (!q.disciplina_id || q.disciplina_id.length !== 36) errors.push(`[${q.slug}] disciplina_id inválido`);
  if (!q.assunto_id || q.assunto_id.length !== 36) errors.push(`[${q.slug}] assunto_id inválido`);
  if (!q.enunciado || q.enunciado.trim().length < 15) errors.push(`[${q.slug}] enunciado muito curto ou vazio`);
  if (!q.explicacao || q.explicacao.trim().length < 15) errors.push(`[${q.slug}] explicação muito curta ou vazia`);
  if (q.prompt_versao !== "v3.0-lote10") errors.push(`[${q.slug}] prompt_versao diferente de v3.0-lote10: ${q.prompt_versao}`);

  if (slugSet.has(q.slug)) errors.push(`[${q.slug}] Slug duplicado!`);
  slugSet.add(q.slug);

  if (idSet.has(q.id)) errors.push(`[${q.slug}] ID UUID duplicado!`);
  idSet.add(q.id);

  if (hashSet.has(q.canonical_hash)) errors.push(`[${q.slug}] Canonical hash duplicado!`);
  hashSet.add(q.canonical_hash);

  if (!q.alternativas || q.alternativas.length < 2) {
    errors.push(`[${q.slug}] Questão com menos de 2 alternativas`);
  } else {
    const corretas = q.alternativas.filter((a) => a.correta);
    if (corretas.length !== 1) {
      errors.push(`[${q.slug}] Questão tem ${corretas.length} alternativas corretas (deve ter exatamente 1)`);
    }
    q.alternativas.forEach((a) => {
      if (!a.id || a.id.length !== 36) errors.push(`[${q.slug}] ID da alternativa inválido: ${a.id}`);
      if (a.questao_id !== q.id) errors.push(`[${q.slug}] Foreign key questão_id incorreta na alternativa`);
      if (!a.texto || a.texto.trim().length === 0) errors.push(`[${q.slug}] Texto de alternativa vazio`);
    });
    totalAlts += q.alternativas.length;
  }
});

if (errors.length > 0) {
  console.error(`\n❌ ERROS ENCONTRADOS (${errors.length}):`);
  errors.slice(0, 20).forEach((e) => console.error(" - " + e));
  process.exit(1);
} else {
  console.log(`✅ 2. Validação Estrutural e Integridade de Chaves: 100% APROVADO!`);
  console.log(`   - Total de Alternativas a serem inseridas: ${totalAlts}`);
}

// 3. Distribuição por Disciplina
const discCount = {};
batch10Questoes.forEach((q) => {
  discCount[q.disciplina_id] = (discCount[q.disciplina_id] || 0) + 1;
});
console.log("\n3. Distribuição por Disciplina (UUID):");
Object.entries(discCount).forEach(([d, c]) => console.log(`   - ${d}: ${c} questões`));

// 4. Distribuição por Tipo
const tipoCount = {};
batch10Questoes.forEach((q) => {
  tipoCount[q.tipo] = (tipoCount[q.tipo] || 0) + 1;
});
console.log("\n4. Distribuição por Tipo:");
Object.entries(tipoCount).forEach(([t, c]) => console.log(`   - ${t}: ${c} questões`));

// 5. Jaccard 3-Shingles Internal Deduplication
console.log("\n5. Executando Deduplicação Jaccard 3-Shingles Interna...");

function getShingles(text) {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/gi, " ").split(/\s+/).filter(Boolean);
  const shingles = new Set();
  for (let i = 0; i < words.length - 2; i++) {
    shingles.add(`${words[i]} ${words[i+1]} ${words[i+2]}`);
  }
  return shingles;
}

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  setA.forEach((item) => {
    if (setB.has(item)) intersection++;
  });
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

const shingleMap = batch10Questoes.map((q) => ({ slug: q.slug, shingles: getShingles(q.enunciado) }));
let highSimilarityCount = 0;

for (let i = 0; i < shingleMap.length; i++) {
  for (let j = i + 1; j < shingleMap.length; j++) {
    const sim = jaccardSimilarity(shingleMap[i].shingles, shingleMap[j].shingles);
    if (sim >= 0.90) {
      console.error(`❌ REJEIÇÃO: Similaridade excessiva (${(sim * 100).toFixed(1)}%) entre ${shingleMap[i].slug} e ${shingleMap[j].slug}`);
      process.exit(1);
    } else if (sim >= 0.80) {
      console.warn(`⚠️ AVISO: Similaridade moderada (${(sim * 100).toFixed(1)}%) entre ${shingleMap[i].slug} e ${shingleMap[j].slug}`);
      highSimilarityCount++;
    }
  }
}

console.log(`✅ Deduplicação Jaccard Interna Concluída. Zero duplicatas exatas ou semânticas excessivas (>=90%).`);
console.log(`\n🎉 LOTE 10 PRONTO PARA INGESTÃO NO SUPABASE!`);
