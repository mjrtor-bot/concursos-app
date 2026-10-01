import { TODAS_QUESTOES_LOTE8 } from "./batch8_modules/index.mjs";
import { TAXONOMIA } from "./batch8_modules/taxonomia.mjs";

const undefinedTax = [];
for (const q of TODAS_QUESTOES_LOTE8) {
  if (!q.disciplina_id || !q.assunto_id) {
    undefinedTax.push({
      slug: q.idSlug,
      disciplina_id: q.disciplina_id,
      assunto_id: q.assunto_id
    });
  }
}

console.log(`Total com taxonomia indefinida: ${undefinedTax.length}`);
console.log(undefinedTax.slice(0, 30));
