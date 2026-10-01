import crypto from "crypto";

export function stringToUuid(str) {
  const hash = crypto.createHash("sha1").update(str, "utf8").digest("hex");
  return [
    hash.substring(0, 8),
    hash.substring(8, 12),
    "5" + hash.substring(13, 16),
    ((parseInt(hash.substring(16, 18), 16) & 0x3f) | 0x80).toString(16).padStart(2, "0") + hash.substring(18, 20),
    hash.substring(20, 32),
  ].join("-");
}

export function normalizarTextoCanonico(texto) {
  if (!texto) return "";
  return texto
    .replace(/<[^>]*>/g, " ")
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\r\n\t]+/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function gerarFingerprintQuestao(input) {
  const enunciadoNorm = normalizarTextoCanonico(input.enunciado);
  const bancaNorm = normalizarTextoCanonico(input.banca || "");
  const orgaoNorm = normalizarTextoCanonico(input.orgao || "");
  const anoStr = String(input.ano || "");
  const tipoStr = input.tipo;

  let alternativasNorm = "";
  if (input.tipo === "multipla_escolha" && input.alternativas && input.alternativas.length > 0) {
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

export function formatarQuestao(raw, indexGlobal) {
  const qId = stringToUuid(`q-pol-batch3-${raw.idSlug || indexGlobal}`);

  // Validar alternativas
  const correctCount = raw.alternativas.filter(a => a.correta).length;
  if (correctCount !== 1) {
    throw new Error(`Questão ${raw.idSlug || indexGlobal} possui ${correctCount} alternativas corretas (deve ser exatamente 1).`);
  }
  if (raw.tipo === "certo_errado" && raw.alternativas.length !== 2) {
    throw new Error(`Questão C/E ${raw.idSlug || indexGlobal} deve ter exatamente 2 alternativas.`);
  }
  if (raw.tipo === "multipla_escolha" && (raw.alternativas.length < 4 || raw.alternativas.length > 5)) {
    throw new Error(`Questão Múltipla Escolha ${raw.idSlug || indexGlobal} deve ter 4 ou 5 alternativas.`);
  }

  const fingerprint = gerarFingerprintQuestao({
    enunciado: raw.enunciado,
    tipo: raw.tipo,
    banca: raw.banca_nome,
    ano: raw.ano,
    orgao: raw.orgao_nome,
    alternativas: raw.alternativas,
  });

  let difNorm = (raw.dificuldade || "medio").toLowerCase();
  if (difNorm === "media") difNorm = "medio";
  if (!["facil", "medio", "dificil", "muito_dificil"].includes(difNorm)) {
    difNorm = "medio";
  }

  const questao = {
    id: qId,
    disciplina_id: raw.disciplina_id,
    assunto_id: raw.assunto_id,
    subassunto_id: null,
    prova_id: null,
    banca_id: null,
    orgao_id: null,
    cargo_id: null,
    banca_nome: raw.banca_nome,
    orgao_nome: raw.orgao_nome,
    cargo_nome: raw.cargo_nome,
    ano: raw.ano,
    tipo: raw.tipo,
    dificuldade: difNorm,
    enunciado: raw.enunciado,
    texto_apoio: raw.texto_apoio || null,
    explicacao: raw.explicacao,
    is_autoral_ia: true,
    modelo_ia: "Claude Fable 5.1",
    prompt_versao: "v2.3-lote3",
    revisada_por_especialista: false, // Revisão automatizada concluída; revisão humana especialista pendente
    especialista_revisor_id: null,
    anulada: false,
    desatualizada: false,
    motivo_desatualizacao: null,
    versao: 1,
    fingerprint_hash: fingerprint,
    total_respostas: 0,
    total_acertos: 0,
  };

  const letras = ["A", "B", "C", "D", "E"];
  const alternativas = raw.alternativas.map((alt, idx) => ({
    id: stringToUuid(`alt-pol-batch3-${raw.idSlug || indexGlobal}-${idx}`),
    questao_id: qId,
    letra: raw.tipo === "certo_errado" ? (idx === 0 ? "C" : "E") : (alt.letra || letras[idx]),
    texto: alt.texto,
    correta: !!alt.correta,
    ordem: idx + 1,
    explicacao_especifica: alt.explicacao_especifica || null,
  }));

  return { questao, alternativas };
}
