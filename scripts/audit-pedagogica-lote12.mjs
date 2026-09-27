import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { TODAS_QUESTOES_LOTE12 } from "./batch12_modules/index.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const porDisciplina = {};
for (const q of TODAS_QUESTOES_LOTE12) {
  if (!porDisciplina[q.disciplina_id]) porDisciplina[q.disciplina_id] = [];
  porDisciplina[q.disciplina_id].push(q);
}

const amostra100 = [];
for (const [discId, lista] of Object.entries(porDisciplina)) {
  const quota = Math.round((lista.length / 500) * 100);
  const step = Math.floor(lista.length / quota);
  for (let i = 0; i < quota && i * step < lista.length; i++) {
    amostra100.push(lista[i * step]);
  }
}

while (amostra100.length < 100) {
  const q = TODAS_QUESTOES_LOTE12[(amostra100.length * 7) % 500];
  if (!amostra100.includes(q)) amostra100.push(q);
}
if (amostra100.length > 100) {
  amostra100.length = 100;
}

console.log(`[+] Amostra estratificada selecionada: ${amostra100.length} questões.`);

let conformidadeTotal = 0;
let errosDetectados = 0;
const relatorioAuditoria = [];

const regexNormas = /(art\.|artigo|lei|súmula|sumula|stf|stj|constitui|código|resolução|decreto|doutrina|princípio|critério|teoria|método|norma|protocolo|padrão|regra|tratado|convenção|convencao|declaração|declaracao|pacto|corte\s+idh|jurisprudência)/i;

for (const q of amostra100) {
  const checks = {
    temEnunciado: Boolean(q.enunciado && q.enunciado.length > 40),
    temExplicacao: Boolean(q.explicacao && q.explicacao.length > 30),
    temGabaritoDefinido: false,
    distratoresValidos: true,
    fundamentacaoNormativa: false,
  };

  if (q.tipo === "certo_errado") {
    const certas = q.alternativas.filter((a) => a.correta);
    checks.temGabaritoDefinido = q.alternativas.length === 2 && certas.length === 1;
  } else if (q.tipo === "multipla_escolha") {
    const certas = q.alternativas.filter((a) => a.correta);
    checks.temGabaritoDefinido = q.alternativas.length === 5 && certas.length === 1;
    const textos = new Set(q.alternativas.map((a) => a.texto.trim()));
    if (textos.size !== q.alternativas.length) {
      checks.distratoresValidos = false;
    }
  }

  checks.fundamentacaoNormativa = regexNormas.test(q.explicacao);

  const isConforme =
    checks.temEnunciado &&
    checks.temExplicacao &&
    checks.temGabaritoDefinido &&
    checks.distratoresValidos &&
    checks.fundamentacaoNormativa;

  if (isConforme) {
    conformidadeTotal++;
  } else {
    errosDetectados++;
    console.error(`[-] Questão não conforme: ${q.idSlug}`, checks);
  }

  relatorioAuditoria.push({
    idSlug: q.idSlug,
    disciplina_id: q.disciplina_id,
    assunto_id: q.assunto_id,
    tipo: q.tipo,
    dificuldade: q.dificuldade,
    banca: q.banca_nome,
    orgao: q.orgao_nome,
    cargo: q.cargo_nome,
    checks,
    status: isConforme ? "APROVADO" : "REPROVADO",
  });
}

console.log(`[+] Total auditado na amostra: ${amostra100.length}`);
console.log(`[+] Aprovados: ${conformidadeTotal} (${((conformidadeTotal / amostra100.length) * 100).toFixed(1)}%)`);
console.log(`[+] Reprovados: ${errosDetectados}`);

fs.writeFileSync(
  path.join(__dirname, "audit_pedagogica_lote12.json"),
  JSON.stringify(
    {
      timestamp: new Date().toISOString(),
      amostraTamanho: amostra100.length,
      totalAprovadas: conformidadeTotal,
      taxaAprovacao: `${((conformidadeTotal / amostra100.length) * 100).toFixed(1)}%`,
      itens: relatorioAuditoria,
    },
    null,
    2
  ),
  "utf8"
);

console.log("[+] Relatório pedagógico salvo em scripts/audit_pedagogica_lote12.json");
