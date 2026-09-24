import crypto from "crypto";

export interface QuestionFingerprintInput {
  enunciado: string;
  tipo: "multipla_escolha" | "certo_errado";
  banca?: string;
  ano?: number | string;
  orgao?: string;
  alternativas?: Array<{ texto: string; correta?: boolean }>;
}

/**
 * Remove tags HTML, pontuação supérflua, caracteres invisíveis e colapsa múltiplos espaços em 1.
 */
export function normalizarTextoCanonico(texto: string): string {
  if (!texto) return "";
  return texto
    .replace(/<[^>]*>/g, " ") // Remove HTML tags
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\r\n\t]+/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, "") // Mantém apenas letras unicode e números
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Gera um hash determinístico SHA-256 para a questão a partir dos seus elementos canônicos.
 * Impede duplicação exata ou reimportações do mesmo item sob formatos ligeiramente alterados.
 */
export function gerarFingerprintQuestao(input: QuestionFingerprintInput): string {
  const enunciadoNorm = normalizarTextoCanonico(input.enunciado);
  const bancaNorm = normalizarTextoCanonico(input.banca || "");
  const orgaoNorm = normalizarTextoCanonico(input.orgao || "");
  const anoStr = String(input.ano || "");
  const tipoStr = input.tipo;

  let alternativasNorm = "";
  if (input.tipo === "multipla_escolha" && input.alternativas && input.alternativas.length > 0) {
    // Ordena as alternativas alfabeticamente pelo texto normalizado para garantir canonicidade
    const sortedAlts = input.alternativas
      .map((a) => normalizarTextoCanonico(a.texto))
      .filter(Boolean)
      .sort();
    alternativasNorm = sortedAlts.join("||");
  } else {
    alternativasNorm = "ce_binary";
  }

  const payload = [
    `banca:${bancaNorm}`,
    `ano:${anoStr}`,
    `orgao:${orgaoNorm}`,
    `tipo:${tipoStr}`,
    `enunciado:${enunciadoNorm}`,
    `alts:${alternativasNorm}`,
  ].join(":::");

  return crypto.createHash("sha256").update(payload, "utf8").digest("hex");
}

/**
 * Calcula a similaridade de Jaccard baseada em bigramas/trigramas (0.0 a 1.0)
 * para detecção de quase-duplicatas (near-duplicates).
 */
export function calcularSimilaridadeTexto(textoA: string, textoB: string): number {
  const normA = normalizarTextoCanonico(textoA);
  const normB = normalizarTextoCanonico(textoB);

  if (normA === normB) return 1.0;
  if (!normA || !normB) return 0.0;

  const getTrigrams = (str: string): Set<string> => {
    const set = new Set<string>();
    for (let i = 0; i < str.length - 2; i++) {
      set.add(str.substring(i, i + 3));
    }
    return set;
  };

  const setA = getTrigrams(normA);
  const setB = getTrigrams(normB);

  if (setA.size === 0 || setB.size === 0) return 0.0;

  let intersecao = 0;
  for (const item of setA) {
    if (setB.has(item)) {
      intersecao++;
    }
  }

  const uniao = new Set([...setA, ...setB]).size;
  return intersecao / uniao;
}
