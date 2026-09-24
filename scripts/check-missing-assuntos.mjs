import fs from "fs";

const rawData = JSON.parse(fs.readFileSync("src/data/banco_questoes_1000.json", "utf8"));
const { DISCIPLINAS_MASSIVAS, ASSUNTOS_MASSIVOS } = await import("../src/data/mockData.ts");

const assMap = new Map();
ASSUNTOS_MASSIVOS.forEach(a => assMap.set(a.id, a));

const missingAssuntos = new Set();
for (const q of rawData) {
  if (!assMap.has(q.assunto_id)) {
    missingAssuntos.add(`${q.disciplina_id} -> ${q.assunto_id}`);
  }
}

console.log("Assuntos faltantes no ASSUNTOS_MASSIVOS:", missingAssuntos.size);
if (missingAssuntos.size > 0) {
  console.log("Lista de faltantes:", Array.from(missingAssuntos));
}
