import fs from "node:fs";

const list = JSON.parse(fs.readFileSync("scripts/divergencias_completas_49.json", "utf8"));
const lote11 = list.filter(q => q.prompt_versao === "v3.1-lote11");

console.log(`Total Lote 11 divergências: ${lote11.length}`);

lote11.forEach((q, idx) => {
  const altCorreta = q.alternativas.find(a => a.correta);
  const altErrada = q.alternativas.find(a => !a.correta);
  console.log(`\n================================================================================`);
  console.log(`[LOTE 11 - #${idx + 1}] ID: ${q.id}`);
  console.log(`Disciplina ID: ${q.disciplina_id} | Assunto ID: ${q.assunto_id}`);
  console.log(`Enunciado:\n${q.enunciado}\n`);
  console.log(`Alternativa C: ${q.alternativas.find(a => a.letra === "C")?.texto} (correta=${q.alternativas.find(a => a.letra === "C")?.correta})`);
  console.log(`Alternativa E: ${q.alternativas.find(a => a.letra === "E")?.texto} (correta=${q.alternativas.find(a => a.letra === "E")?.correta})`);
  console.log(`Explicação Atual:\n${q.explicacao}`);
  console.log(`Gabarito marcado no DB: ${altCorreta?.letra} (${altCorreta?.texto?.substring(0, 30)})`);
});
