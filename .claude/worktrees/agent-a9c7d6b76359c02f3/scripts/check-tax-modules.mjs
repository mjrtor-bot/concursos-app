import fs from "fs";
import { TAXONOMIA } from "./batch10_modules/taxonomia.mjs";
import { const01Questoes } from "./batch10_modules/const_01.mjs";
import { const02Questoes } from "./batch10_modules/const_02.mjs";
import { adm01Questoes } from "./batch10_modules/adm_01.mjs";
import { adm02Questoes } from "./batch10_modules/adm_02.mjs";
import { port01Questoes as portugues01Questoes } from "./batch10_modules/portugues_01.mjs";
import { port02Questoes as portugues02Questoes } from "./batch10_modules/portugues_02.mjs";
import { dh01Questoes } from "./batch10_modules/dh_01.mjs";
import { crim01Questoes as criminologia01Questoes } from "./batch10_modules/criminologia_01.mjs";
import { info01Questoes } from "./batch10_modules/info_01.mjs";
import { rlm01Questoes } from "./batch10_modules/rlm_01.mjs";
import { temas01Questoes as temasPoliciais01Questoes } from "./batch10_modules/temas_policiais_01.mjs";

console.log("Taxonomia assuntos disponíveis:");
console.log(TAXONOMIA.assuntos);
