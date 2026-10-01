import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function saveModule(filename, questoes) {
  const filePath = path.join(__dirname, filename);
  const content = `// Módulo gerado do Lote 13 da Expansão Policial (v3.3-lote13)
// Total de questões no arquivo: ${questoes.length}

export const questoes = ${JSON.stringify(questoes, null, 2)};
`;
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`[+] Salvo ${filename} com ${questoes.length} questões.`);
}
