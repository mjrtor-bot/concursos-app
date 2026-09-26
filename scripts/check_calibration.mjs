import fs from "fs";
import path from "path";

const dir = "./scripts/batch8_modules";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".mjs") && f !== "taxonomia.mjs" && f !== "index.mjs" && f !== "test_count.mjs");

// We need:
// 1. Convert 3 FGV -> IBFC
// 2. Convert 2 VUNESP -> AOCP
// 3. Convert 46 facil -> medio
// 4. Convert 17 facil -> dificil

let fgvToIbfcCount = 0;
let vunespToAocpCount = 0;
let facilToMedioCount = 0;
let facilToDificilCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Adjust bancas
  if (fgvToIbfcCount < 3 && content.includes('"Inédita / Estilo FGV"')) {
    // replace one or two in this file
    content = content.replace(/"Inédita \/ Estilo FGV"/g, (match) => {
      if (fgvToIbfcCount < 3) {
        fgvToIbfcCount++;
        return '"Inédita / Estilo IBFC"';
      }
      return match;
    });
  }

  if (vunespToAocpCount < 2 && content.includes('"Inédita / Estilo VUNESP"')) {
    content = content.replace(/"Inédita \/ Estilo VUNESP"/g, (match) => {
      if (vunespToAocpCount < 2) {
        vunespToAocpCount++;
        return '"Inédita / Estilo AOCP"';
      }
      return match;
    });
  }

  // Adjust dificuldade
  // Upgrade facil -> dificil (17 total across files)
  content = content.replace(/dificuldade:\s*"facil"/g, (match) => {
    if (facilToDificilCount < 17) {
      facilToDificilCount++;
      return 'dificuldade: "dificil"';
    } else if (facilToMedioCount < 46) {
      facilToMedioCount++;
      return 'dificuldade: "medio"';
    }
    return match;
  });

  fs.writeFileSync(filePath, content, "utf-8");
}

console.log(`Bancas ajustadas: FGV->IBFC: ${fgvToIbfcCount}, VUNESP->AOCP: ${vunespToAocpCount}`);
console.log(`Dificuldades ajustadas: Facil->Dificil: ${facilToDificilCount}, Facil->Medio: ${facilToMedioCount}`);
