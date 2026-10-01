import { penalQuestions as p1 } from "./batch1_modules/penal.mjs";
import { dppQuestions as dpp1 } from "./batch1_modules/processo_penal.mjs";
import { legEspQuestions as leg1 } from "./batch1_modules/legislacao_especial.mjs";
import { constQuestions as c1 } from "./batch1_modules/constitucional.mjs";
import { admQuestions as adm1 } from "./batch1_modules/administrativo.mjs";
import { portQuestions as port1 } from "./batch1_modules/portugues.mjs";
import { dhQuestions as dh1 } from "./batch1_modules/direitos_humanos.mjs";
import { crimQuestions as crim1 } from "./batch1_modules/criminologia.mjs";
import { infoQuestions as info1 } from "./batch1_modules/informatica.mjs";
import { rlmQuestions as rlm1 } from "./batch1_modules/rlm.mjs";
import { formatarQuestao as formatarQ1 } from "./batch1_modules/helper.mjs";

import { penalQuestions as p2 } from "./batch2_modules/penal.mjs";
import { dppQuestions as dpp2 } from "./batch2_modules/processo_penal.mjs";
import { legEspQuestions as leg2 } from "./batch2_modules/legislacao_especial.mjs";
import { constQuestions as c2 } from "./batch2_modules/constitucional.mjs";
import { admQuestions as adm2 } from "./batch2_modules/administrativo.mjs";
import { portQuestions as port2 } from "./batch2_modules/portugues.mjs";
import { dhQuestions as dh2 } from "./batch2_modules/direitos_humanos.mjs";
import { crimQuestions as crim2 } from "./batch2_modules/criminologia.mjs";
import { infoQuestions as info2 } from "./batch2_modules/informatica.mjs";
import { rlmQuestions as rlm2 } from "./batch2_modules/rlm.mjs";
import { formatarQuestao as formatarQ2 } from "./batch2_modules/helper.mjs";

console.log("=========================================================");
console.log("   TESTE DE INTEGRIDADE E NÃO-COLISÃO (LOTE 1 vs LOTE 2) ");
console.log("=========================================================");

const batch1Lists = [p1, dpp1, leg1, c1, adm1, port1, dh1, crim1, info1, rlm1];
const batch2Lists = [p2, dpp2, leg2, c2, adm2, port2, dh2, crim2, info2, rlm2];

const setFp1 = new Set();
const setIds1 = new Set();
let count1 = 0;
let idx1 = 1;
for (const list of batch1Lists) {
  for (const raw of list) {
    const { questao } = formatarQ1(raw, idx1++);
    setFp1.add(questao.fingerprint_hash);
    setIds1.add(questao.id);
    count1++;
  }
}

const setFp2 = new Set();
const setIds2 = new Set();
let count2 = 0;
let idx2 = 1;
let collisionsWithB1 = 0;
for (const list of batch2Lists) {
  for (const raw of list) {
    const { questao } = formatarQ2(raw, idx2++);
    setFp2.add(questao.fingerprint_hash);
    setIds2.add(questao.id);
    count2++;

    if (setFp1.has(questao.fingerprint_hash)) {
      console.error(`[COLISÃO FP] Questão ${raw.idSlug} tem fingerprint idêntico a item do Lote 1!`);
      collisionsWithB1++;
    }
    if (setIds1.has(questao.id)) {
      console.error(`[COLISÃO ID] Questão ${raw.idSlug} tem ID idêntico a item do Lote 1!`);
      collisionsWithB1++;
    }
  }
}

console.log(`[+] Total Lote 1 processado: ${count1} questões (FPs únicos: ${setFp1.size})`);
console.log(`[+] Total Lote 2 processado: ${count2} questões (FPs únicos: ${setFp2.size})`);
console.log(`[+] Colisões detectadas entre Lote 1 e Lote 2: ${collisionsWithB1}`);

if (collisionsWithB1 > 0) {
  throw new Error(`Falha: ${collisionsWithB1} colisões detectadas entre os lotes.`);
}

console.log("\n[✓] 100% de unicidade e integridade garantidas entre Lote 1 e Lote 2!");
