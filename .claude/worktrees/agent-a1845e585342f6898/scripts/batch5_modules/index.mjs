import { penalQuestoes } from "./penal.mjs";
import { processoPenalQuestoes } from "./processo_penal.mjs";
import { legEspecialQuestoes } from "./legislacao_especial.mjs";
import { constitucionalQuestoes } from "./constitucional.mjs";
import { administrativoQuestoes } from "./administrativo.mjs";
import { portuguesQuestoes } from "./portugues.mjs";
import { direitosHumanosQuestoes } from "./direitos_humanos.mjs";
import { informaticaQuestoes } from "./informatica.mjs";
import { criminologiaQuestoes } from "./criminologia.mjs";
import { rlmQuestoes } from "./rlm.mjs";

export const lote5Questoes = [
  ...penalQuestoes,          // 70
  ...processoPenalQuestoes,   // 70
  ...legEspecialQuestoes,     // 70
  ...constitucionalQuestoes,  // 60
  ...administrativoQuestoes,  // 60
  ...portuguesQuestoes,       // 60
  ...direitosHumanosQuestoes, // 35
  ...informaticaQuestoes,     // 30
  ...criminologiaQuestoes,    // 25
  ...rlmQuestoes              // 20
];
