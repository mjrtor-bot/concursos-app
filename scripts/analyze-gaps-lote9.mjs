import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inventory = JSON.parse(fs.readFileSync(path.join(__dirname, "audit_pre_lote9_full.json"), "utf8"));

console.log("================================================================================");
console.log("               FASE 2 — MOTOR DE SATURAÇÃO E GAPS (LOTE 9)                     ");
console.log("================================================================================\n");

// Analisar por disciplina -> assunto
const discAssuntos = {};
for (const [key, count] of Object.entries(inventory.discXAssunto)) {
  const [disc, ass] = key.split(" -> ");
  if (!discAssuntos[disc]) discAssuntos[disc] = [];
  discAssuntos[disc].push({ assunto: ass, total: count });
}

for (const [disc, list] of Object.entries(discAssuntos)) {
  console.log(`\n=== DISCIPLINA: ${disc} (Total: ${inventory.porDisciplina[disc]}) ===`);
  list.sort((a, b) => a.total - b.total);
  for (const item of list) {
    let status = "ADEQUADO";
    if (item.total < 15) status = "CRITICAMENTE SUB-REPRESENTADO";
    else if (item.total < 35) status = "SUB-REPRESENTADO";
    else if (item.total > 100) status = "SATURADO";
    console.log(`  - [${status}] ${item.assunto}: ${item.total} questões`);
  }
}
