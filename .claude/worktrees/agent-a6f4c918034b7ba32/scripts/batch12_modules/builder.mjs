import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { TAXONOMIA } from "./taxonomia.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function writeModule(fileName, exportName, questions) {
  const code = `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const ${exportName} = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, fileName), code, "utf8");
  console.log(`[+] ${fileName}: ${questions.length} questões gravadas.`);
}
