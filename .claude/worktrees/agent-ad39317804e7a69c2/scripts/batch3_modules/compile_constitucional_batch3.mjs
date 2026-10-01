import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TAXONOMIA } from "./taxonomia.mjs";
import { getQuestionsData } from "./builder_batch3_const.mjs";
import { getQuestionsDataPart2 } from "./builder_batch3_const_part2.mjs";
import { getQuestionsDataPart3 } from "./builder_batch3_const_part3.mjs";
import { formatarQuestao } from "./helper.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const part1 = getQuestionsData();
const part2 = getQuestionsDataPart2();
const part3 = getQuestionsDataPart3();

const rawAll = [...part1, ...part2, ...part3];

console.log(`Total de questões carregadas das 3 partes: ${rawAll.length}`);

if (rawAll.length !== 60) {
  throw new Error(`Esperado 60 questões, encontrado ${rawAll.length}`);
}

const taxMapping = {
  "TAXONOMIA.disciplinas.constitucional": TAXONOMIA.disciplinas.constitucional,
  "TAXONOMIA.assuntos.seguranca_publica": TAXONOMIA.assuntos.seguranca_publica,
  "TAXONOMIA.assuntos.art_5_cf": TAXONOMIA.assuntos.art_5_cf,
  "TAXONOMIA.assuntos.organizacao_estado": TAXONOMIA.assuntos.organizacao_estado,
  "TAXONOMIA.assuntos.poder_executivo": TAXONOMIA.assuntos.poder_executivo,
  "TAXONOMIA.assuntos.poder_legislativo": TAXONOMIA.assuntos.poder_legislativo,
  "TAXONOMIA.assuntos.poder_judiciario": TAXONOMIA.assuntos.poder_judiciario,
  "TAXONOMIA.assuntos.controle_const": TAXONOMIA.assuntos.controle_const,
};

const constQuestions = rawAll.map((raw, idx) => {
  const discId = taxMapping[raw.disciplina_id] || raw.disciplina_id;
  const assId = taxMapping[raw.assunto_id] || raw.assunto_id;

  if (!discId || !assId) {
    throw new Error(`Falha no mapeamento de taxonomia para questão ${raw.idSlug}: disc=${raw.disciplina_id}, ass=${raw.assunto_id}`);
  }

  const resolvedRaw = {
    ...raw,
    disciplina_id: discId,
    assunto_id: assId,
  };

  // Validar com formatarQuestao
  const formatted = formatarQuestao(resolvedRaw, idx + 1);
  if (!formatted.questao.id || !formatted.questao.fingerprint_hash) {
    throw new Error(`Erro na formatação da questão ${raw.idSlug}`);
  }

  return resolvedRaw;
});

console.log(`Todas as ${constQuestions.length} questões foram validadas com sucesso.`);

// Contagem de tipos e assuntos
let ceCount = 0;
let meCount = 0;
const assuntoCounts = {};

constQuestions.forEach((q, i) => {
  if (q.tipo === "certo_errado") ceCount++;
  else if (q.tipo === "multipla_escolha") meCount++;

  assuntoCounts[q.assunto_id] = (assuntoCounts[q.assunto_id] || 0) + 1;

  // Verificar idSlug sequencial
  const expectedSlug = `batch3-const-${String(i + 1).padStart(3, "0")}`;
  if (q.idSlug !== expectedSlug) {
    throw new Error(`Slug inconsistente na posição ${i}: esperado ${expectedSlug}, obtido ${q.idSlug}`);
  }
});

console.log(`Distribuição de tipos: Certo/Errado = ${ceCount}, Múltipla Escolha = ${meCount}`);
console.log("Distribuição por assunto:", assuntoCounts);

// Gerar o arquivo final constitucional.mjs
const fileContent = `export const constQuestions = ${JSON.stringify(constQuestions, null, 2)};\n`;

const outputPath = path.join(__dirname, "constitucional.mjs");
fs.writeFileSync(outputPath, fileContent, "utf8");

console.log(`Arquivo salvo com sucesso em: ${outputPath}`);
