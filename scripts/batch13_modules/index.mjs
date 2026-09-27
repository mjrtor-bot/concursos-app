import { m01_questoes } from "./m01_penal_geral_ce.mjs";
import { m02_questoes } from "./m02_penal_especial.mjs";
import { m03_questoes } from "./m03_proc_penal_inquerito_acao.mjs";
import { m04_questoes } from "./m04_proc_penal_prisoes_provas.mjs";
import { m05_questoes } from "./m05_leg_esp_drogas_desarmamento.mjs";
import { m06_questoes } from "./m06_leg_esp_violencia_estado.mjs";
import { m07_questoes } from "./m07_transito_normas.mjs";
import { m08_questoes } from "./m08_transito_crimes_infracoes.mjs";
import { m09_questoes } from "./m09_criminologia_teorias.mjs";
import { m10_questoes } from "./m10_criminologia_vitimologia.mjs";
import { m11_questoes } from "./m11_const_direitos_seguranca.mjs";
import { m12_questoes } from "./m12_const_organizacao_poderes.mjs";
import { m13_questoes } from "./m13_adm_principios_poderes.mjs";
import { m14_questoes } from "./m14_adm_agentes_licitacoes.mjs";
import { m15_questoes } from "./m15_dh_sistema_global.mjs";
import { m16_questoes } from "./m16_dh_sistema_interamericano.mjs";
import { m17_questoes } from "./m17_info_seguranca_redes.mjs";
import { m18_questoes } from "./m18_info_sistemas_dados.mjs";
import { m19_questoes } from "./m19_rlm_proposicoes_conectivos.mjs";
import { m20_questoes } from "./m20_rlm_combinatoria_probabilidade.mjs";
import { m21_questoes } from "./m21_portugues_sintaxe_crase.mjs";
import { m22_questoes } from "./m22_portugues_redacao_oficial.mjs";

export const MODULOS_LOTE13 = [
  { codigo: "M01", nome: "Direito Penal Geral", questoes: m01_questoes },
  { codigo: "M02", nome: "Direito Penal Especial", questoes: m02_questoes },
  { codigo: "M03", nome: "Processo Penal — Inquérito e Ação", questoes: m03_questoes },
  { codigo: "M04", nome: "Processo Penal — Prisões, Provas e Medidas", questoes: m04_questoes },
  { codigo: "M05", nome: "Legislação Especial — Drogas, Armas e Organizações", questoes: m05_questoes },
  { codigo: "M06", nome: "Legislação Especial — Violência, Tortura e Lavagem", questoes: m06_questoes },
  { codigo: "M07", nome: "Legislação de Trânsito — Normas", questoes: m07_questoes },
  { codigo: "M08", nome: "Legislação de Trânsito — Crimes e Infrações", questoes: m08_questoes },
  { codigo: "M09", nome: "Criminologia — Teorias e Prevenção", questoes: m09_questoes },
  { codigo: "M10", nome: "Criminologia — Vitimologia, Cifras e Controle", questoes: m10_questoes },
  { codigo: "M11", nome: "Constitucional — Direitos e Segurança", questoes: m11_questoes },
  { codigo: "M12", nome: "Constitucional — Organização e Poderes", questoes: m12_questoes },
  { codigo: "M13", nome: "Administrativo — Princípios, Poderes e Atos", questoes: m13_questoes },
  { codigo: "M14", nome: "Administrativo — Agentes, Licitações e Responsabilidade", questoes: m14_questoes },
  { codigo: "M15", nome: "Direitos Humanos — Sistema Global", questoes: m15_questoes },
  { codigo: "M16", nome: "Direitos Humanos — Sistema Interamericano", questoes: m16_questoes },
  { codigo: "M17", nome: "Informática — Segurança, Redes e Nuvem", questoes: m17_questoes },
  { codigo: "M18", nome: "Informática — Sistemas, Dados e Produtividade", questoes: m18_questoes },
  { codigo: "M19", nome: "RLM — Lógica Proposicional", questoes: m19_questoes },
  { codigo: "M20", nome: "RLM — Conjuntos, Contagem e Probabilidade", questoes: m20_questoes },
  { codigo: "M21", nome: "Português — Interpretação", questoes: m21_questoes },
  { codigo: "M22", nome: "Português — Gramática", questoes: m22_questoes },
];

export const TODAS_QUESTOES_LOTE13 = MODULOS_LOTE13.flatMap((modulo) => modulo.questoes);
export const batch13Preparados = TODAS_QUESTOES_LOTE13.map((questao) => ({
  id: questao.id,
  idSlug: questao.idSlug,
  enunciado: questao.enunciado,
  fingerprint: questao.fingerprint,
  prompt_versao: questao.prompt_versao,
  tipo: questao.tipo,
  disciplina_id: questao.disciplina_id,
  assunto_id: questao.assunto_id,
  alternativas: questao.alternativas,
}));

export function normalizarTexto(texto) {
  return (texto || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function prepararParaBanco(q) {
  let difNorm = (q.dificuldade || "medio").toLowerCase();
  if (difNorm === "media") difNorm = "medio";
  if (difNorm === "muito_dificil") difNorm = "dificil";
  if (!["facil", "medio", "dificil"].includes(difNorm)) {
    difNorm = "medio";
  }

  const questaoRow = {
    id: q.id,
    disciplina_id: q.disciplina_id,
    assunto_id: q.assunto_id,
    subassunto_id: null,
    prova_id: null,
    banca_id: null,
    orgao_id: null,
    cargo_id: null,
    banca_nome: q.banca_nome,
    orgao_nome: q.orgao_nome,
    cargo_nome: q.cargo_nome,
    ano: q.ano,
    tipo: q.tipo,
    dificuldade: difNorm,
    enunciado: q.enunciado,
    texto_apoio: null,
    explicacao: q.explicacao,
    is_autoral_ia: true,
    modelo_ia: "Claude Fable 5.1",
    prompt_versao: "v3.3-lote13",
    revisada_por_especialista: false,
    especialista_revisor_id: null,
    anulada: false,
    desatualizada: false,
    motivo_desatualizacao: null,
    versao: 1,
    fingerprint_hash: q.fingerprint,
    total_respostas: 0,
    total_acertos: 0,
  };

  const alternativasRows = (q.alternativas || []).map((alt) => ({
    id: alt.id,
    questao_id: q.id,
    letra: alt.letra,
    texto: alt.texto,
    correta: !!alt.correta,
    ordem: alt.ordem,
    explicacao_especifica: alt.explicacao_especifica || null,
  }));

  return {
    idSlug: q.idSlug,
    questao: questaoRow,
    alternativas: alternativasRows,
    fingerprint: q.fingerprint,
  };
}

export function validarLote13() {
  const erros = [];
  if (TODAS_QUESTOES_LOTE13.length !== 500) {
    erros.push(`Total de questões inválido: ${TODAS_QUESTOES_LOTE13.length} (esperado: 500)`);
  }

  const ids = new Set();
  const fingerprints = new Set();
  const altIds = new Set();

  for (const q of TODAS_QUESTOES_LOTE13) {
    if (ids.has(q.id)) erros.push(`ID de questão duplicado: ${q.id}`);
    ids.add(q.id);

    if (fingerprints.has(q.fingerprint)) erros.push(`Fingerprint duplicado: ${q.fingerprint}`);
    fingerprints.add(q.fingerprint);

    if (q.prompt_versao !== "v3.3-lote13") erros.push(`prompt_versao inválido em ${q.id}`);
    if (q.is_autoral_ia !== true) erros.push(`is_autoral_ia inválido em ${q.id}`);
    if (q.modelo_ia !== "Claude Fable 5.1") erros.push(`modelo_ia inválido em ${q.id}`);
    if (q.revisada_por_especialista !== false) erros.push(`revisada_por_especialista inválido em ${q.id}`);
    if (q.especialista_revisor_id !== null) erros.push(`especialista_revisor_id inválido em ${q.id}`);
    if (q.anulada !== false) erros.push(`anulada inválido em ${q.id}`);
    if (q.desatualizada !== false) erros.push(`desatualizada inválido em ${q.id}`);
    if (q.motivo_desatualizacao !== null) erros.push(`motivo_desatualizacao inválido em ${q.id}`);
    if (q.versao !== 1) erros.push(`versao inválida em ${q.id}`);
    if (!q.disciplina_id || typeof q.disciplina_id !== "string" || q.disciplina_id.length < 10) {
      erros.push(`disciplina_id inválido ou ausente em ${q.id} (slug: ${q.idSlug})`);
    }
    if (!q.assunto_id || typeof q.assunto_id !== "string" || q.assunto_id.length < 10) {
      erros.push(`assunto_id inválido ou ausente em ${q.id} (slug: ${q.idSlug})`);
    }
    if (!q.enunciado || q.enunciado.trim().length < 20) {
      erros.push(`enunciado muito curto ou ausente em ${q.id}`);
    }
    if (!q.explicacao || q.explicacao.trim().length < 15) {
      erros.push(`explicacao muito curta ou ausente em ${q.id}`);
    }
    if (!q.conceito_principal || !q.habilidade_cobrada || !q.tese_ou_regra || !q.nivel_cognitivo) {
      erros.push(`Metadados pedagógicos incompletos em ${q.id}`);
    }

    const corretas = (q.alternativas || []).filter((a) => a.correta === true).length;
    if (corretas !== 1) erros.push(`Quantidade de alternativas corretas inválida em ${q.id}: ${corretas}`);
    for (const alt of q.alternativas || []) {
      if (altIds.has(alt.id)) erros.push(`ID de alternativa duplicado: ${alt.id}`);
      altIds.add(alt.id);
      if (alt.questao_id !== q.id) erros.push(`Alternativa ${alt.id} referencia questao_id incorreto`);
    }
  }

  return {
    ok: erros.length === 0,
    totalQuestoes: TODAS_QUESTOES_LOTE13.length,
    totalAlternativas: TODAS_QUESTOES_LOTE13.reduce((acc, q) => acc + (q.alternativas?.length || 0), 0),
    erros,
  };
}
