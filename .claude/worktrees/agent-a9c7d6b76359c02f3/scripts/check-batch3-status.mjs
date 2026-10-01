import { penalQuestions } from "./batch3_modules/penal.mjs";
import { dppQuestions } from "./batch3_modules/processo_penal.mjs";
import { legEspQuestions } from "./batch3_modules/legislacao_especial.mjs";
import { constQuestions } from "./batch3_modules/constitucional.mjs";
import { admQuestions } from "./batch3_modules/administrativo.mjs";
import { portQuestions } from "./batch3_modules/portugues.mjs";
import { dhQuestions } from "./batch3_modules/direitos_humanos.mjs";
import { crimQuestions } from "./batch3_modules/criminologia.mjs";
import { infoQuestions } from "./batch3_modules/informatica.mjs";
import { rlmQuestions } from "./batch3_modules/rlm.mjs";

console.log("=== STATUS ATUAL DOS MÓDULOS CONCLUÍDOS DO LOTE 3 ===");
console.log(`- Direito Penal: ${penalQuestions.length} (esperado: 70)`);
console.log(`- Processo Penal: ${dppQuestions.length} (esperado: 70)`);
console.log(`- Legislação Especial: ${legEspQuestions.length} (esperado: 70)`);
console.log(`- Direito Constitucional: ${constQuestions.length} (esperado: 60)`);
console.log(`- Direito Administrativo: ${admQuestions.length} (esperado: 60)`);
console.log(`- Língua Portuguesa: ${portQuestions.length} (esperado: 60)`);
console.log(`- Direitos Humanos: ${dhQuestions.length} (esperado: 35)`);
console.log(`- Informática: ${infoQuestions.length} (esperado: 30)`);
console.log(`- Criminologia: ${crimQuestions.length} (esperado: 25)`);
console.log(`- Raciocínio Lógico (RLM): ${rlmQuestions.length} (esperado: 20)`);

const totalConcluido =
  penalQuestions.length +
  dppQuestions.length +
  legEspQuestions.length +
  constQuestions.length +
  admQuestions.length +
  portQuestions.length +
  dhQuestions.length +
  crimQuestions.length +
  infoQuestions.length +
  rlmQuestions.length;

console.log("-----------------------------------------------------");
console.log(`TOTAL CONSOLIDADO DO LOTE 3: ${totalConcluido} / 500 questões`);
if (totalConcluido === 500) {
  console.log(">>> SUCESSO: O Lote 3 atingiu exatamente as 500 questões planejadas! <<<");
} else {
  console.log(`>>> ATENÇÃO: Contagem divergente (${totalConcluido} != 500) <<<`);
}
