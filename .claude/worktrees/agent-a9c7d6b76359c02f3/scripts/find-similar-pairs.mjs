import { batch10Questoes } from "./batch10_modules/index.mjs";

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

const shingleMap = batch10Questoes.map((q) => ({ slug: q.slug, enunciado: q.enunciado, shingles: getShingles(q.enunciado) }));

const pairs = [];
for (let i = 0; i < shingleMap.length; i++) {
  for (let j = i + 1; j < shingleMap.length; j++) {
    const sim = jaccardSimilarity(shingleMap[i].shingles, shingleMap[j].shingles);
    if (sim >= 0.75) {
      pairs.push({ q1: shingleMap[i].slug, q2: shingleMap[j].slug, sim: (sim * 100).toFixed(1) });
    }
  }
}

console.log(`Pares com similaridade >= 75%: ${pairs.length}`);
pairs.forEach((p) => console.log(` - [${p.sim}%] ${p.q1} <-> ${p.q2}`));
