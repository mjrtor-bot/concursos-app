import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  DISCIPLINAS,
  ASSUNTOS,
  gerarQuestaoUUID,
  gerarAlternativaUUID,
  gerarFingerprint,
} from "./taxonomia.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export { DISCIPLINAS, ASSUNTOS };

export function criarAlternativa(letra, texto, correta, ordem, explicacaoEspecifica = null) {
  return {
    letra,
    texto,
    correta,
    ordem,
    explicacao_especifica: explicacaoEspecifica,
  };
}

export function criarQuestaoCE({
  slug,
  disciplinaId,
  assuntoId,
  bancaNome,
  orgaoNome,
  cargoNome,
  ano = 2026,
  dificuldade = "medio",
  enunciado,
  explicacao,
  gabaritoCerto,
  conceitoPrincipal,
  habilidadeCobrada,
  teseOuRegra,
  nivelCognitivo = "aplicar",
}) {
  const alts = [
    {
      letra: "C",
      texto: "Certo",
      correta: gabaritoCerto === true,
      ordem: 1,
      explicacao_especifica: gabaritoCerto
        ? "Assertiva correta de acordo com a legislação e jurisprudência aplicável."
        : "Assertiva incorreta.",
    },
    {
      letra: "E",
      texto: "Errado",
      correta: gabaritoCerto === false,
      ordem: 2,
      explicacao_especifica: !gabaritoCerto
        ? "Assertiva incorreta conforme a fundamentação exposta."
        : "Assertiva correta.",
    },
  ];

  const questaoId = gerarQuestaoUUID(slug);
  const fingerprint = gerarFingerprint(enunciado, alts);

  const alternativasFormatadas = alts.map((alt, idx) => ({
    id: gerarAlternativaUUID(slug, idx),
    questao_id: questaoId,
    letra: alt.letra,
    texto: alt.texto,
    correta: alt.correta,
    ordem: alt.ordem,
    explicacao_especifica: alt.explicacao_especifica,
  }));

  return {
    id: questaoId,
    idSlug: slug,
    disciplina_id: disciplinaId,
    assunto_id: assuntoId,
    banca_nome: bancaNome,
    orgao_nome: orgaoNome,
    cargo_nome: cargoNome,
    ano,
    tipo: "certo_errado",
    dificuldade,
    enunciado,
    explicacao: `${gabaritoCerto ? "GABARITO: CERTO." : "GABARITO: ERRADO."} ${explicacao}`,
    prompt_versao: "v3.3-lote13",
    is_autoral_ia: true,
    modelo_ia: "Claude Fable 5.1",
    revisada_por_especialista: false,
    especialista_revisor_id: null,
    anulada: false,
    desatualizada: false,
    motivo_desatualizacao: null,
    versao: 1,
    fingerprint,
    // Metadados pedagógicos
    conceito_principal: conceitoPrincipal,
    habilidade_cobrada: habilidadeCobrada,
    tese_ou_regra: teseOuRegra,
    nivel_cognitivo: nivelCognitivo,
    alternativas: alternativasFormatadas,
  };
}

export function criarQuestaoME({
  slug,
  disciplinaId,
  assuntoId,
  bancaNome,
  orgaoNome,
  cargoNome,
  ano = 2026,
  dificuldade = "medio",
  enunciado,
  explicacao,
  alternativas, // array de { letra, texto, correta, explicacao_especifica }
  conceitoPrincipal,
  habilidadeCobrada,
  teseOuRegra,
  nivelCognitivo = "aplicar",
}) {
  const questaoId = gerarQuestaoUUID(slug);
  const altsComOrdem = alternativas.map((a, idx) => ({
    letra: a.letra || String.fromCharCode(65 + idx),
    texto: a.texto,
    correta: Boolean(a.correta),
    ordem: idx + 1,
    explicacao_especifica: a.explicacao_especifica || null,
  }));

  const fingerprint = gerarFingerprint(enunciado, altsComOrdem);

  const alternativasFormatadas = altsComOrdem.map((alt, idx) => ({
    id: gerarAlternativaUUID(slug, idx),
    questao_id: questaoId,
    letra: alt.letra,
    texto: alt.texto,
    correta: alt.correta,
    ordem: alt.ordem,
    explicacao_especifica: alt.explicacao_especifica,
  }));

  return {
    id: questaoId,
    idSlug: slug,
    disciplina_id: disciplinaId,
    assunto_id: assuntoId,
    banca_nome: bancaNome,
    orgao_nome: orgaoNome,
    cargo_nome: cargoNome,
    ano,
    tipo: "multipla_escolha",
    dificuldade,
    enunciado,
    explicacao,
    prompt_versao: "v3.3-lote13",
    is_autoral_ia: true,
    modelo_ia: "Claude Fable 5.1",
    revisada_por_especialista: false,
    especialista_revisor_id: null,
    anulada: false,
    desatualizada: false,
    motivo_desatualizacao: null,
    versao: 1,
    fingerprint,
    // Metadados pedagógicos
    conceito_principal: conceitoPrincipal,
    habilidade_cobrada: habilidadeCobrada,
    tese_ou_regra: teseOuRegra,
    nivel_cognitivo: nivelCognitivo,
    alternativas: alternativasFormatadas,
  };
}

export function writeModuleFile(filename, exportName, questions) {
  const fullPath = path.join(__dirname, filename);
  const fileContent = `// Arquivo autoral de questões do Lote 13 da Expansão Policial (v3.3-lote13)
// Quantidade de questões: ${questions.length}

export const ${exportName} = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync(fullPath, fileContent, "utf8");
  console.log(`[OK] Módulo ${filename} gerado com ${questions.length} questões.`);
}
