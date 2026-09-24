import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.resolve(__dirname, "../src/data/mockData.ts");

let content = fs.readFileSync(targetPath, "utf8");

// Substituições de encoding e texto
const replacements = [
  // Ética
  [/0tica/g, "Ética"],
  [/\/\/ 0tica/g, "// Ética"],
  [/Código de 0tica/g, "Código de Ética"],
  [/Comissão de 0tica/g, "Comissão de Ética"],
  [/0 PERMITIDO/g, "É PERMITIDO"],
  [/0 DEVER/g, "É DEVER"],
  [/MAN0/g, "MANÉ"],

  // Não / Anulação / Leilão / Questões / À medida
  [/NÒO/g, "NÃO"],
  [/ANULA!ÒO/g, "ANULAÇÃO"],
  [/ANULA!ÒO/g, "ANULAÇÃO"],
  [/LEILÒO/g, "LEILÃO"],
  [/QUEST"ES/g, "QUESTÕES"],
  [/ì medida/g, "À medida"],
  [/S  é/g, "SÓ é"],

  // RLM e Matemática
  [/P    Q/g, "P → Q"],
  [/\[P Ƨ ~Q\]/g, "[P ∧ ~Q]"],
  [/~\(A ƨ B\) = ~A Ƨ ~B/g, "~(A ∨ B) = ~A ∧ ~B"],
  [/~P    ~Q/g, "~P ↔ ~Q"],
  [/~P    Q/g, "~P ↔ Q"],
  [/P    ~Q/g, "P ↔ ~Q"],
  [/P    Q/g, "P ↔ Q"],
  [/~P ƨ ~Q/g, "~P ∨ ~Q"],
  [/3!   \(6 - 3\)!/g, "3! × (6 - 3)!"],
  [/6   5   4/g, "6 × 5 × 4"],
  [/3   2   1/g, "3 × 2 × 1"],
  [/2!   \(5 - 2\)!/g, "2! × (5 - 2)!"],
  [/5   4/g, "5 × 4"],
  [/2   1/g, "2 × 1"],
  [/20   10/g, "20 × 10"],
  [/EX NUNC   dali/g, "EX NUNC — dali"],
  [/\{2, 4\}    C/g, "{2, 4} → C"],
  [/\{1, 3, 5\}    C/g, "{1, 3, 5} → C"],
  [/bicondicional \(  \)/g, "bicondicional (↔)"],
];

for (const [regex, replacement] of replacements) {
  content = content.replace(regex, replacement);
}

fs.writeFileSync(targetPath, content, "utf8");
console.log("MockData higienizado com sucesso!");
