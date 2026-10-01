import { Questao, Alternativa } from "@/types";
import { gerarFingerprintQuestao } from "./questionFingerprint";

export interface AIQuestionGeneratorParams {
  disciplina_id: string;
  assunto_id: string;
  subassunto_id?: string;
  bancaEstilo?: string;
  tipo?: "multipla_escolha" | "certo_errado";
  dificuldade?: "facil" | "medio" | "dificil";
  topicoEspecifico?: string;
  modeloIA?: string;
}

/**
 * Utilitário para formatação e estruturação de questões autorais criadas via IA,
 * garantindo conformidade com padrões éticos, identificação explícita de origem e fingerprinting.
 */
export function formatarQuestaoAutoralIA(input: {
  disciplina_id: string;
  assunto_id: string;
  subassunto_id?: string | null;
  enunciado: string;
  tipo: "multipla_escolha" | "certo_errado";
  dificuldade: "facil" | "medio" | "dificil";
  bancaEstilo?: string;
  ano?: number;
  explicacao: string;
  texto_apoio?: string;
  alternativas: Array<{
    letra?: "A" | "B" | "C" | "D" | "E";
    texto: string;
    correta: boolean;
    ordem: number;
    explicacao_especifica?: string;
  }>;
  modelo_ia?: string;
  prompt_versao?: string;
}): Questao {
  const ano = input.ano || new Date().getFullYear();
  const banca = input.bancaEstilo ? `Inédita (Estilo ${input.bancaEstilo})` : "Inédita (Autoral IA)";
  const orgao = "Simulado Nacional";

  const fingerprint_hash = gerarFingerprintQuestao({
    enunciado: input.enunciado,
    tipo: input.tipo,
    banca,
    ano,
    orgao,
    alternativas: input.alternativas,
  });

  const alternativasFormatadas: Alternativa[] = input.alternativas.map((alt, idx) => ({
    id: `alt_ai_${Date.now()}_${idx + 1}`,
    letra: alt.letra || ((["A", "B", "C", "D", "E"][idx] as "A" | "B" | "C" | "D" | "E") || undefined),
    texto: alt.texto.trim(),
    correta: Boolean(alt.correta),
    ordem: alt.ordem || idx + 1,
    explicacao_especifica: alt.explicacao_especifica,
  }));

  return {
    id: `q_ai_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    disciplina_id: input.disciplina_id,
    assunto_id: input.assunto_id,
    subassunto_id: input.subassunto_id || null,
    enunciado: input.enunciado.trim(),
    tipo: input.tipo,
    dificuldade: input.dificuldade,
    banca,
    ano,
    orgao,
    cargo: "Todos os Cargos",
    explicacao: input.explicacao.trim(),
    texto_apoio: input.texto_apoio?.trim(),
    alternativas: alternativasFormatadas,
    is_autoral_ia: true,
    modelo_ia: input.modelo_ia || "Claude 3.5 Sonnet",
    prompt_versao: input.prompt_versao || "v2.1",
    revisada_por_especialista: false,
    anulada: false,
    desatualizada: false,
    motivo_desatualizacao: null,
    versao: 1,
    fingerprint_hash,
    created_at: new Date().toISOString(),
  };
}
