import fs from "fs";
import path from "path";

const dir = "./scripts/batch8_modules";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".mjs") && f !== "taxonomia.mjs" && f !== "index.mjs" && f !== "test_count.mjs");

const accessedAssuntos = new Set();
const accessedDisciplinas = new Set();

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), "utf-8");
  const matchesAssuntos = content.matchAll(/TAXONOMIA\.assuntos\.(\w+)/g);
  for (const m of matchesAssuntos) {
    accessedAssuntos.add(m[1]);
  }
  const matchesDisc = content.matchAll(/TAXONOMIA\.disciplinas\.(\w+)/g);
  for (const m of matchesDisc) {
    accessedDisciplinas.add(m[1]);
  }
}

console.log("Disciplinas acessadas:", Array.from(accessedDisciplinas).sort());
console.log("\nAssuntos acessados:", Array.from(accessedAssuntos).sort());
