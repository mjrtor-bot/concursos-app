import { TODAS_QUESTOES_LOTE13, MODULOS_LOTE13, prepararParaBanco } from "./batch13_modules/index.mjs";
import fs from "node:fs";

console.log("=== VERIFICANDO INTEGRIDADE DE TAXONOMIA DO LOTE 13 ===");

const taxonomiaDump = JSON.parse(fs.readFileSync("./scripts/taxonomia_prod_dump_lote13.json", "utf8"));
const validDiscIds = new Set(taxonomiaDump.disciplinas.map(d => d.id));
const validAssuntoIds = new Set(taxonomiaDump.assuntos.map(a => a.id));

let missingDisc = 0;
let missingAssunto = 0;
let invalidDisc = 0;
let invalidAssunto = 0;

for (let i = 0; i < TODAS_QUESTOES_LOTE13.length; i++) {
  const q = TODAS_QUESTOES_LOTE13[i];
  const { questao } = prepararParaBanco(q);

  if (!questao.disciplina_id) {
    missingDisc++;
    console.log(`[MISSING DISC] idx ${i} slug: ${q.idSlug}`);
  } else if (!validDiscIds.has(questao.disciplina_id)) {
    invalidDisc++;
    console.log(`[INVALID DISC] idx ${i} slug: ${q.idSlug} disc: ${questao.disciplina_id}`);
  }

  if (!questao.assunto_id) {
    missingAssunto++;
    console.log(`[MISSING ASSUNTO] idx ${i} slug: ${q.idSlug}`);
  } else if (!validAssuntoIds.has(questao.assunto_id)) {
    invalidAssunto++;
    console.log(`[INVALID ASSUNTO] idx ${i} slug: ${q.idSlug} assunto: ${questao.assunto_id}`);
  }
}

console.log("\n--- RESULTADO DA VERIFICAÇÃO ---");
console.log(`Total de questões analisadas: ${TODAS_QUESTOES_LOTE13.length}`);
console.log(`Missing disciplina_id: ${missingDisc}`);
console.log(`Invalid disciplina_id: ${invalidDisc}`);
console.log(`Missing assunto_id: ${missingAssunto}`);
console.log(`Invalid assunto_id: ${invalidAssunto}`);
