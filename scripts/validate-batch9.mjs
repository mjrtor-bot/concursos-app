import { TODAS_QUESTOES_LOTE9, prepararParaBanco } from "./batch9_modules/index.mjs";

console.log("=== INICIANDO VALIDAÇÃO ESTRUTURAL DO LOTE 9 ===");
console.log(`Total de questões carregadas: ${TODAS_QUESTOES_LOTE9.length}`);

if (TODAS_QUESTOES_LOTE9.length !== 500) {
  console.error(`ERRO: Quantidade de questões diferente de 500! Atual: ${TODAS_QUESTOES_LOTE9.length}`);
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
const disciplinaContagem = {};

let totalAlternativas = 0;
let erros = 0;

for (let i = 0; i < TODAS_QUESTOES_LOTE9.length; i++) {
  const q = TODAS_QUESTOES_LOTE9[i];
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
  disciplinaContagem[q.disciplina_id] = (disciplinaContagem[q.disciplina_id] || 0) + 1;
}

console.log("\n--- ESTATÍSTICAS ESTRUTURAIS DO LOTE 9 ---");
console.log(`Questões: ${TODAS_QUESTOES_LOTE9.length}`);
console.log(`Alternativas totais: ${totalAlternativas}`);
console.log("Distribuição por Tipo:", tipoContagem);
console.log("Distribuição por Dificuldade:", difContagem);
console.log("Distribuição por Órgão Prioritário:", orgaoContagem);
console.log("Distribuição por Banca de Estilo:", bancaContagem);
console.log("Distribuição por Disciplina ID:", disciplinaContagem);

if (erros > 0) {
  console.error(`\n❌ Validação falhou com ${erros} erro(s).`);
  process.exit(1);
} else {
  console.log("\n✅ VALIDAÇÃO ESTRUTURAL CONCLUÍDA COM 100% DE SUCESSO!");
}
