import fs from "node:fs";

const snap = JSON.parse(fs.readFileSync("scripts/backup_pre_correcao_integridade_questoes.json", "utf8"));
const questoes = snap.questoes;
const alternativas = snap.alternativas;

const altsByQ = new Map();
for (const alt of alternativas) {
  if (!altsByQ.has(alt.questao_id)) {
    altsByQ.set(alt.questao_id, []);
  }
  altsByQ.get(alt.questao_id).push(alt);
}

console.log("Analyzing all 7,760 questions for any potential inconsistencies...");

let totalCE = 0;
let totalME4 = 0;
let totalME5 = 0;
let otherCount = 0;

let ceWithMismatchedGabarito = [];
let meWithDubiousExplanation = [];

for (const q of questoes) {
  const alts = altsByQ.get(q.id) || [];
  const corretaAlt = alts.find(a => a.correta);
  const expl = q.explicacao || "";
  const explLower = expl.toLowerCase();

  if (alts.length === 2) {
    totalCE++;
    const isCorretaCerto = corretaAlt && /certo/i.test(corretaAlt.texto || corretaAlt.letra);
    const isCorretaErrado = corretaAlt && /errado/i.test(corretaAlt.texto || corretaAlt.letra);

    // Strict checks for C/E
    const explDeclaresCerto = /^gabarito:\s*certo/i.test(expl) || /gabarito:\s*certo\b/i.test(expl);
    const explDeclaresErrado = /^gabarito:\s*errado/i.test(expl) || /gabarito:\s*errado\b/i.test(expl);

    if (isCorretaCerto && explDeclaresErrado && !explDeclaresCerto) {
      ceWithMismatchedGabarito.push({ id: q.id, prompt_versao: q.prompt_versao, gabDB: "C", explGab: "ERRADO", enunciado: q.enunciado });
    } else if (isCorretaErrado && explDeclaresCerto && !explDeclaresErrado) {
      ceWithMismatchedGabarito.push({ id: q.id, prompt_versao: q.prompt_versao, gabDB: "E", explGab: "CERTO", enunciado: q.enunciado });
    }
  } else if (alts.length === 4) {
    totalME4++;
  } else if (alts.length === 5) {
    totalME5++;
  } else {
    otherCount++;
  }
}

console.log(`Total C/E (2 alts): ${totalCE}`);
console.log(`Total ME 4 alts: ${totalME4}`);
console.log(`Total ME 5 alts: ${totalME5}`);
console.log(`Total other: ${otherCount}`);
console.log(`\nTotal C/E with mismatched gabarito: ${ceWithMismatchedGabarito.length}`);

const byVers = {};
ceWithMismatchedGabarito.forEach(c => {
  byVers[c.prompt_versao] = (byVers[c.prompt_versao] || 0) + 1;
});
console.log("C/E mismatches by version:", byVers);
