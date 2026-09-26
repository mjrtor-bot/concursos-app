import { penal01Questoes } from "./penal_01.mjs";
import { penal02Questoes } from "./penal_02.mjs";
import { penal03Questoes } from "./penal_03.mjs";
import { procPenal01Questoes } from "./proc_penal_01.mjs";
import { procPenal02Questoes } from "./proc_penal_02.mjs";
import { procPenal03Questoes } from "./proc_penal_03.mjs";
import { const01Questoes } from "./const_01.mjs";
import { const02Questoes } from "./const_02.mjs";
import { const03Questoes } from "./const_03.mjs";
import { adm01Questoes } from "./adm_01.mjs";
import { adm02Questoes } from "./adm_02.mjs";
import { adm03Questoes } from "./adm_03.mjs";
import { legEsp01Questoes } from "./leg_esp_01.mjs";
import { legEsp02Questoes } from "./leg_esp_02.mjs";
import { legEsp03Questoes } from "./leg_esp_03.mjs";
import { transito01Questoes } from "./transito_01.mjs";
import { transito02Questoes } from "./transito_02.mjs";
import { dhCriminologia01Questoes } from "./dh_criminologia_01.mjs";
import { dhCriminologia02Questoes } from "./dh_criminologia_02.mjs";
import { port01Questoes } from "./port_01.mjs";
import { port02Questoes } from "./port_02.mjs";
import { rlmInfo01Questoes } from "./rlm_info_01.mjs";
import { rlmInfo02Questoes } from "./rlm_info_02.mjs";

const modules = [
  { name: "penal_01", list: penal01Questoes },
  { name: "penal_02", list: penal02Questoes },
  { name: "penal_03", list: penal03Questoes },
  { name: "proc_penal_01", list: procPenal01Questoes },
  { name: "proc_penal_02", list: procPenal02Questoes },
  { name: "proc_penal_03", list: procPenal03Questoes },
  { name: "const_01", list: const01Questoes },
  { name: "const_02", list: const02Questoes },
  { name: "const_03", list: const03Questoes },
  { name: "adm_01", list: adm01Questoes },
  { name: "adm_02", list: adm02Questoes },
  { name: "adm_03", list: adm03Questoes },
  { name: "leg_esp_01", list: legEsp01Questoes },
  { name: "leg_esp_02", list: legEsp02Questoes },
  { name: "leg_esp_03", list: legEsp03Questoes },
  { name: "transito_01", list: transito01Questoes },
  { name: "transito_02", list: transito02Questoes },
  { name: "dh_criminologia_01", list: dhCriminologia01Questoes },
  { name: "dh_criminologia_02", list: dhCriminologia02Questoes },
  { name: "port_01", list: port01Questoes },
  { name: "port_02", list: port02Questoes },
  { name: "rlm_info_01", list: rlmInfo01Questoes },
  { name: "rlm_info_02", list: rlmInfo02Questoes },
];

let total = 0;
for (const m of modules) {
  console.log(`${m.name}: ${m.list.length} questões`);
  total += m.list.length;
}
console.log(`\nTOTAL GERAL: ${total} questões`);
