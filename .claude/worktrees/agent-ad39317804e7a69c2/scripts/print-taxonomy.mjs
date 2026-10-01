import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "audit_pre_lote8_full.json"), "utf8"));

console.log("=== DISCIPLINAS ===");
for (const d of data.disciplinasRaw) {
  console.log(`${d.slug}: "${d.id}", // ${d.nome}`);
}

console.log("\n=== ASSUNTOS ===");
for (const a of data.assuntosRaw) {
  console.log(`${a.slug.replace(/-/g, "_")}: "${a.id}", // ${a.nome}`);
}
