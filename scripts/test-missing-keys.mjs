import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./batch5_modules/taxonomia.mjs";

const dir = "./scripts/batch5_modules";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".mjs") && f !== "taxonomia.mjs");
const usedKeys = new Set();
const keyUsage = {};

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), "utf8");
  const matches = content.matchAll(/TAXONOMIA\.assuntos\.([a-zA-Z0-9_]+)/g);
  for (const m of matches) {
    usedKeys.add(m[1]);
    if (!keyUsage[m[1]]) keyUsage[m[1]] = [];
    keyUsage[m[1]].push(file);
  }
}

console.log("Total unique assunto keys used:", usedKeys.size);
const missing = [];
for (const k of usedKeys) {
  if (!TAXONOMIA.assuntos[k]) {
    missing.push({ key: k, files: [...new Set(keyUsage[k])] });
  }
}
console.log("Missing keys in TAXONOMIA.assuntos:\n", JSON.stringify(missing, null, 2));
