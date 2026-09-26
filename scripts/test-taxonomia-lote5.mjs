import { penalQuestoes } from "./batch5_modules/penal.mjs";
import { processoPenalQuestoes } from "./batch5_modules/processo_penal.mjs";
import { legEspecialQuestoes } from "./batch5_modules/legislacao_especial.mjs";
import { constitucionalQuestoes } from "./batch5_modules/constitucional.mjs";
import { administrativoQuestoes } from "./batch5_modules/administrativo.mjs";
import { portuguesQuestoes } from "./batch5_modules/portugues.mjs";
import { direitosHumanosQuestoes } from "./batch5_modules/direitos_humanos.mjs";
import { criminologiaQuestoes } from "./batch5_modules/criminologia.mjs";
import { informaticaQuestoes } from "./batch5_modules/informatica.mjs";
import { rlmQuestoes } from "./batch5_modules/rlm.mjs";

const modulos = [
  { nome: "penal", list: penalQuestoes },
  { nome: "processo_penal", list: processoPenalQuestoes },
  { nome: "legislacao_especial", list: legEspecialQuestoes },
  { nome: "constitucional", list: constitucionalQuestoes },
  { nome: "administrativo", list: administrativoQuestoes },
  { nome: "portugues", list: portuguesQuestoes },
  { nome: "direitos_humanos", list: direitosHumanosQuestoes },
  { nome: "criminologia", list: criminologiaQuestoes },
  { nome: "informatica", list: informaticaQuestoes },
  { nome: "rlm", list: rlmQuestoes },
];

let totalUndefinedAssunto = 0;
let totalUndefinedDisc = 0;

for (const mod of modulos) {
  for (const q of mod.list) {
    if (!q.assunto_id) {
      console.log(`[UNDEFINED ASSUNTO] Modulo: ${mod.nome}, ID: ${q.idSlug}, Assunto: ${q.assunto_id}`);
      totalUndefinedAssunto++;
    }
    if (!q.disciplina_id) {
      console.log(`[UNDEFINED DISCIPLINA] Modulo: ${mod.nome}, ID: ${q.idSlug}, Disc: ${q.disciplina_id}`);
      totalUndefinedDisc++;
    }
  }
}

console.log(`Total undefined assunto_id: ${totalUndefinedAssunto}`);
console.log(`Total undefined disciplina_id: ${totalUndefinedDisc}`);
