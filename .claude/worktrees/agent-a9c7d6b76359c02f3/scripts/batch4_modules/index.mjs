import { penalQuestoes } from "./penal.mjs";
import { processoPenalQuestoes } from "./processo_penal.mjs";
import { legislacaoEspecialQuestoes } from "./legislacao_especial.mjs";
import { constitucionalQuestoes } from "./constitucional.mjs";
import { administrativoQuestoes } from "./administrativo.mjs";
import { portuguesQuestoes } from "./portugues.mjs";
import { direitosHumanosQuestoes } from "./direitos_humanos.mjs";
import { criminologiaQuestoes } from "./criminologia.mjs";
import { informaticaQuestoes } from "./informatica.mjs";
import { rlmQuestoes } from "./rlm.mjs";

export const lote4Questoes = [
  ...penalQuestoes,
  ...processoPenalQuestoes,
  ...legislacaoEspecialQuestoes,
  ...constitucionalQuestoes,
  ...administrativoQuestoes,
  ...portuguesQuestoes,
  ...direitosHumanosQuestoes,
  ...criminologiaQuestoes,
  ...informaticaQuestoes,
  ...rlmQuestoes
];
