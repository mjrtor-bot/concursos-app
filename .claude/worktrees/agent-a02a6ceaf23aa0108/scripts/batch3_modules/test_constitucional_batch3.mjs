import { constQuestions } from "./constitucional.mjs";
import { formatarQuestao } from "./helper.mjs";
import { TAXONOMIA } from "./taxonomia.mjs";

console.log("=== Verificando constitucional.mjs ===");
console.log(`Total de questões: ${constQuestions.length}`);

if (constQuestions.length !== 60) {
  throw new Error(`Erro: esperado 60 questões, recebido ${constQuestions.length}`);
}

let ceCount = 0;
let meCount = 0;
const fingerprints = new Set();
const slugs = new Set();

const expectedDiscId = TAXONOMIA.disciplinas.constitucional;
const validAssuntoIds = new Set(Object.values(TAXONOMIA.assuntos));

constQuestions.forEach((q, idx) => {
  // 1. Verificar slug único e sequencial
  if (slugs.has(q.idSlug)) {
    throw new Error(`Slug duplicado: ${q.idSlug}`);
  }
  slugs.add(q.idSlug);

  // 2. Verificar disciplina_id
  if (q.disciplina_id !== expectedDiscId) {
    throw new Error(`Disciplina inválida na questão ${q.idSlug}: ${q.disciplina_id}`);
  }

  // 3. Verificar assunto_id
  if (!validAssuntoIds.has(q.assunto_id)) {
    throw new Error(`Assunto inválido na questão ${q.idSlug}: ${q.assunto_id}`);
  }

  // 4. Verificar tipo
  if (q.tipo === "certo_errado") {
    ceCount++;
    if (q.alternativas.length !== 2) {
      throw new Error(`Questão C/E ${q.idSlug} deve ter exatamente 2 alternativas.`);
    }
  } else if (q.tipo === "multipla_escolha") {
    meCount++;
    if (q.alternativas.length < 4 || q.alternativas.length > 5) {
      throw new Error(`Questão M/E ${q.idSlug} deve ter 4 ou 5 alternativas.`);
    }
  } else {
    throw new Error(`Tipo inválido na questão ${q.idSlug}: ${q.tipo}`);
  }

  // 5. Verificar alternativas e resposta correta única
  const correctAlts = q.alternativas.filter(a => a.correta === true);
  if (correctAlts.length !== 1) {
    throw new Error(`Questão ${q.idSlug} tem ${correctAlts.length} alternativas corretas.`);
  }

  // 6. Testar formatação completa com helper
  const { questao, alternativas } = formatarQuestao(q, idx + 1);
  if (fingerprints.has(questao.fingerprint_hash)) {
    throw new Error(`Fingerprint duplicado para questão ${q.idSlug}`);
  }
  fingerprints.add(questao.fingerprint_hash);

  // 7. Verificar ausência de texto repetitivo genérico
  const lowerEnun = q.enunciado.toLowerCase();
  const lowerExpl = q.explicacao.toLowerCase();
  if (lowerEnun.includes("contexto autoral lote") || lowerExpl.includes("nota do lote 2")) {
    throw new Error(`Texto boilerplate encontrado na questão ${q.idSlug}`);
  }
});

console.log(`Validação concluída com sucesso!`);
console.log(`- Certo/Errado: ${ceCount}`);
console.log(`- Múltipla Escolha: ${meCount}`);
console.log(`- Fingerprints únicos gerados: ${fingerprints.size}`);
console.log(`- Slugs únicos: ${slugs.size}`);
