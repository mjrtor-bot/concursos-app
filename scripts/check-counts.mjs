import { penal01Questoes } from "./batch10_modules/penal_01.mjs";
import { penal02Questoes } from "./batch10_modules/penal_02.mjs";
import { procPenal01Questoes } from "./batch10_modules/proc_penal_01.mjs";
import { procPenal02Questoes } from "./batch10_modules/proc_penal_02.mjs";
import { legEsp01Questoes } from "./batch10_modules/leg_esp_01.mjs";
import { legEsp02Questoes } from "./batch10_modules/leg_esp_02.mjs";
import { const01Questoes } from "./batch10_modules/const_01.mjs";
import { const02Questoes } from "./batch10_modules/const_02.mjs";
import { adm01Questoes } from "./batch10_modules/adm_01.mjs";
import { adm02Questoes } from "./batch10_modules/adm_02.mjs";
import { transito01Questoes } from "./batch10_modules/transito_01.mjs";
import { transito02Questoes } from "./batch10_modules/transito_02.mjs";
import { portugues01Questoes } from "./batch10_modules/portugues_01.mjs";
import { portugues02Questoes } from "./batch10_modules/portugues_02.mjs";
import { dh01Questoes } from "./batch10_modules/dh_01.mjs";
import { criminologia01Questoes } from "./batch10_modules/criminologia_01.mjs";
import { info01Questoes } from "./batch10_modules/info_01.mjs";
import { rlm01Questoes } from "./batch10_modules/rlm_01.mjs";
import { temasPoliciais01Questoes } from "./batch10_modules/temas_policiais_01.mjs";

const modules = {
  penal01: penal01Questoes.length,
  penal02: penal02Questoes.length,
  procPenal01: procPenal01Questoes.length,
  procPenal02: procPenal02Questoes.length,
  legEsp01: legEsp01Questoes.length,
  legEsp02: legEsp02Questoes.length,
  const01: const01Questoes.length,
  const02: const02Questoes.length,
  adm01: adm01Questoes.length,
  adm02: adm02Questoes.length,
  transito01: transito01Questoes.length,
  transito02: transito02Questoes.length,
  portugues01: portugues01Questoes.length,
  portugues02: portugues02Questoes.length,
  dh01: dh01Questoes.length,
  criminologia01: criminologia01Questoes.length,
  info01: info01Questoes.length,
  rlm01: rlm01Questoes.length,
  temasPoliciais01: temasPoliciais01Questoes.length,
};

console.log(modules);
const total = Object.values(modules).reduce((a, b) => a + b, 0);
console.log("Total:", total);
