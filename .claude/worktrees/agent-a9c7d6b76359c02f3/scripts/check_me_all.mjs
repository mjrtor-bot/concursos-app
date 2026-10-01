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

const meMismatches = [];

for (const q of questoes) {
  const alts = altsByQ.get(q.id) || [];
  if (alts.length > 2) {
    const corretaAlt = alts.find(a => a.correta);
    const expl = q.explicacao || "";

    // Look for explicit pattern "Gabarito: [A-E]" or "Gabarito: Letra [A-E]" or "Alternativa [A-E]"
    const match = expl.match(/^Gabarito:\s*(?:Letra\s*)?([A-E])\b/i) ||
                  expl.match(/^Resposta:\s*(?:Letra\s*)?([A-E])\b/i) ||
                  expl.match(/^Alternativa\s*([A-E])\s*é\s*a\s*correta/i);

    if (match) {
      const letraExpl = match[1].toUpperCase();
      const letraDB = (corretaAlt?.letra || "").toUpperCase();
      if (letraExpl !== letraDB) {
        meMismatches.push({
          id: q.id,
          prompt_versao: q.prompt_versao,
          disciplina_id: q.disciplina_id,
          assunto_id: q.assunto_id,
          letraDB,
          letraExpl,
          enunciado: q.enunciado,
          explicacao: q.explicacao,
          alternativas: alts.map(a => ({ letra: a.letra, texto: a.texto, correta: a.correta }))
        });
      }
    }
  }
}

console.log(`Total ME mismatches detected: ${meMismatches.length}`);
fs.writeFileSync("scripts/me_mismatches.json", JSON.stringify(meMismatches, null, 2));

meMismatches.forEach((m, idx) => {
  console.log(`[ME #${idx+1}] ID: ${m.id} | Versao: ${m.prompt_versao} | DB: ${m.letraDB} | Expl: ${m.letraExpl}`);
  console.log(`Enunciado: ${m.enunciado.substring(0, 80)}...`);
  console.log(`Expl: ${m.explicacao.substring(0, 100)}...`);
  console.log("---------------------------------------------------------------");
});
