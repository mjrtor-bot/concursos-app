import fs from "fs";

const rawData = JSON.parse(fs.readFileSync("src/data/banco_questoes_1000.json", "utf8"));
const discSet = new Set();
const assSet = new Set();

for (const q of rawData) {
  discSet.add(q.disciplina_id);
  assSet.add(`${q.disciplina_id}:::${q.assunto_id}`);
}

console.log("Total de disciplinas únicas no JSON:", discSet.size);
console.log("Disciplinas:", Array.from(discSet));
console.log("Total de assuntos únicos no JSON:", assSet.size);
