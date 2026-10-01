import fs from "fs";
import path from "path";

// Vamos verificar como cada módulo foi construído
const modules = [
  "const_01.mjs",
  "const_02.mjs",
  "adm_01.mjs",
  "adm_02.mjs",
  "portugues_01.mjs",
  "portugues_02.mjs",
  "dh_01.mjs",
  "criminologia_01.mjs",
  "info_01.mjs",
  "rlm_01.mjs",
  "temas_policiais_01.mjs"
];

for (const m of modules) {
  const p = path.resolve(process.cwd(), "scripts/batch10_modules", m);
  const content = fs.readFileSync(p, "utf8");
  console.log(`=== ${m} ===`);
  const lines = content.split("\n").slice(0, 35).join("\n");
  console.log(lines);
}
