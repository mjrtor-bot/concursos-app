import { TODAS_QUESTOES_LOTE7, prepararParaBanco, normalizarTexto } from "./batch7_modules/index.mjs";

console.log("=== INICIANDO VALIDAÇÃO ESTRUTURAL DO LOTE 7 ===");
console.log(`Total de questões carregadas: ${TODAS_QUESTOES_LOTE7.length}`);

if (TODAS_QUESTOES_LOTE7.length !== 500) {
  console.error(`ERRO: Quantidade de questões diferente de 500! Atual: ${TODAS_QUESTOES_LOTE7.length}`);
  process.exit(1);
}

// 1. Validar unicidade de Slugs, UUIDs e integridade de gabaritos
const slugs = new Set();
const questaoIds = new Set();
const altIds = new Set();
const fingerprints = new Set();

const orgaoContagem = {};
const tipoContagem = {};
const difContagem = {};
const bancaContagem = {};

let totalAlternativas = 0;
let erros = 0;

for (let i = 0; i < TODAS_QUESTOES_LOTE7.length; i++) {
  const q = TODAS_QUESTOES_LOTE7[i];
  const { questao, alternativas, fingerprint } = prepararParaBanco(q);

  if (slugs.has(q.idSlug)) {
    console.error(`[ERRO] Slug duplicado: ${q.idSlug}`);
    erros++;
  }
  slugs.add(q.idSlug);

  if (questaoIds.has(questao.id)) {
    console.error(`[ERRO] Questao ID UUID duplicado: ${questao.id} (slug: ${q.idSlug})`);
    erros++;
  }
  questaoIds.add(questao.id);

  if (fingerprints.has(fingerprint)) {
    console.error(`[ERRO] Fingerprint SHA-256 colidiu: ${fingerprint} (slug: ${q.idSlug})`);
    erros++;
  }
  fingerprints.add(fingerprint);

  if (!q.enunciado || q.enunciado.length < 30) {
    console.error(`[ERRO] Enunciado muito curto ou vazio: ${q.idSlug}`);
    erros++;
  }

  if (!q.explicacao || q.explicacao.length < 30) {
    console.error(`[ERRO] Explicação muito curta ou vazia: ${q.idSlug}`);
    erros++;
  }

  if (!q.disciplina_id || !q.assunto_id) {
    console.error(`[ERRO] Taxonomia ausente: ${q.idSlug}`);
    erros++;
  }

  // Alternativas
  const corretas = alternativas.filter((a) => a.correta);
  if (corretas.length !== 1) {
    console.error(`[ERRO] Questao ${q.idSlug} possui ${corretas.length} alternativas corretas (deveria ter exatamente 1).`);
    erros++;
  }

  if (q.tipo === "multipla_escolha" && alternativas.length !== 5) {
    console.error(`[ERRO] Questao ${q.idSlug} tipo multipla_escolha com ${alternativas.length} alternativas (deveria ter 5).`);
    erros++;
  }

  if (q.tipo === "certo_errado" && alternativas.length !== 2) {
    console.error(`[ERRO] Questao ${q.idSlug} tipo certo_errado com ${alternativas.length} alternativas (deveria ter 2).`);
    erros++;
  }

  alternativas.forEach((a) => {
    if (altIds.has(a.id)) {
      console.error(`[ERRO] Alternativa ID UUID duplicado: ${a.id}`);
      erros++;
    }
    altIds.add(a.id);
    totalAlternativas++;
  });

  orgaoContagem[q.orgao_nome] = (orgaoContagem[q.orgao_nome] || 0) + 1;
  tipoContagem[q.tipo] = (tipoContagem[q.tipo] || 0) + 1;
  difContagem[q.dificuldade] = (difContagem[q.dificuldade] || 0) + 1;
  bancaContagem[q.banca_nome] = (bancaContagem[q.banca_nome] || 0) + 1;
}

console.log("\n--- ESTATÍSTICAS ESTRUTURAIS DO LOTE 7 ---");
console.log(`Questões: ${TODAS_QUESTOES_LOTE7.length}`);
console.log(`Alternativas totais: ${totalAlternativas}`);
console.log("Distribuição por Tipo:", tipoContagem);
console.log("Distribuição por Dificuldade:", difContagem);
console.log("Distribuição por Órgão Prioritário:", orgaoContagem);
console.log("Distribuição por Banca de Estilo:", bancaContagem);

// 2. Análise de 3-Shingling Jaccard Interno
console.log("\n--- EXECUTANDO AUDITORIA DE 3-SHINGLING JACCARD INTERNO (500 x 500) ---");

function getShingles(text, k = 3) {
  const words = normalizarTexto(text).split(/\s+/).filter(Boolean);
  const shingles = new Set();
  if (words.length < k) {
    shingles.add(words.join(" "));
    return shingles;
  }
  for (let i = 0; i <= words.length - k; i++) {
    shingles.add(words.slice(i, i + k).join(" "));
  }
  return shingles;
}

function jaccard(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return intersection / union;
}

const preparedShingles = TODAS_QUESTOES_LOTE7.map((q) => ({
  idSlug: q.idSlug,
  shingles: getShingles(q.enunciado + " " + q.alternativas.map((a) => a.texto).join(" ")),
}));

let paresGte80 = 0;
let paresGte90 = 0;
let maxSim = 0;
let maxPar = null;

for (let i = 0; i < preparedShingles.length; i++) {
  for (let j = i + 1; j < preparedShingles.length; j++) {
    const sim = jaccard(preparedShingles[i].shingles, preparedShingles[j].shingles);
    if (sim > maxSim) {
      maxSim = sim;
      maxPar = {
        q1: preparedShingles[i].idSlug,
        q2: preparedShingles[j].idSlug,
        sim,
      };
    }
    if (sim >= 0.8) {
      paresGte80++;
      console.warn(`[ALERTA JACCARD >= 80%] ${preparedShingles[i].idSlug} vs ${preparedShingles[j].idSlug}: ${(sim * 100).toFixed(2)}%`);
    }
    if (sim >= 0.9) {
      paresGte90++;
    }
  }
}

console.log(`Similaridade Jaccard Máxima Interna: ${(maxSim * 100).toFixed(2)}% (Par: ${maxPar?.q1} x ${maxPar?.q2})`);
console.log(`Pares com similaridade >= 80%: ${paresGte80}`);
console.log(`Pares com similaridade >= 90%: ${paresGte90}`);

if (erros > 0 || paresGte80 > 0) {
  console.error(`\n[FALHA] Validação concluída com ${erros} erros estruturais e ${paresGte80} pares acima do limiar de similaridade.`);
  process.exit(1);
} else {
  console.log("\n[SUCESSO] TODAS AS 500 QUESTÕES DO LOTE 7 FORAM VALIDAS COM 100% DE SUCESSO!");
}
