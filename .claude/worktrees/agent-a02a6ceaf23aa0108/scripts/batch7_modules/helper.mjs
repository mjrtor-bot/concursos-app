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
  const qId = stringToUuid(`q-pol-batch7-${raw.idSlug || indexGlobal}`);

  // Validar alternativas
  const correctCount = raw.alternativas.filter((a) => a.correta).length;
  if (correctCount !== 1) {
    throw new Error(
      `Questão ${raw.idSlug || indexGlobal} possui ${correctCount} alternativas corretas (deve ser exatamente 1).`
    );
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
    prompt_versao: "v2.7-lote7",
    revisada_por_especialista: false,
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
    id: stringToUuid(`alt-pol-batch7-${raw.idSlug || indexGlobal}-${idx}`),
    questao_id: qId,
    letra: raw.tipo === "certo_errado" ? (idx === 0 ? "C" : "E") : (alt.letra || letras[idx]),
    texto: alt.texto,
    correta: !!alt.correta,
    ordem: idx + 1,
    explicacao_especifica: alt.explicacao_especifica || null,
  }));

  return { questao, alternativas };
}

export function generate3Shingles(text) {
  const norm = normalizarTextoCanonico(text);
  const words = norm.split(' ').filter(Boolean);
  const shingles = new Set();
  if (words.length < 3) {
    if (words.length > 0) shingles.add(words.join(' '));
    return shingles;
  }
  for (let i = 0; i <= words.length - 3; i++) {
    shingles.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  }
  return shingles;
}

export function calculateJaccardSimilarity(setA, setB) {
  if (!setA || !setB || setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

export function validateQuestionBatch(rawQuestions) {
  const validQuestions = [];
  const errors = [];

  for (let i = 0; i < rawQuestions.length; i++) {
    const raw = rawQuestions[i];
    const id = raw.id || raw.idSlug || `q-${i + 1}`;

    try {
      if (!raw.disciplina_id) throw new Error('disciplina_id ausente.');
      if (!raw.assunto_id) throw new Error('assunto_id ausente.');
      if (!raw.banca_nome) throw new Error('banca_nome ausente.');
      if (!raw.orgao_nome) throw new Error('orgao_nome ausente.');
      if (!raw.cargo_nome) throw new Error('cargo_nome ausente.');
      if (!raw.ano) throw new Error('ano ausente.');
      if (!raw.tipo || !['multipla_escolha', 'certo_errado'].includes(raw.tipo)) {
        throw new Error(`tipo inválido: ${raw.tipo}`);
      }
      if (!raw.enunciado || raw.enunciado.trim().length < 20) {
        throw new Error('enunciado muito curto ou ausente.');
      }
      if (!raw.explicacao || raw.explicacao.trim().length < 20) {
        throw new Error('explicacao muito curta ou ausente.');
      }
      if (!Array.isArray(raw.alternativas)) {
        throw new Error('alternativas não é um array.');
      }

      const correctCount = raw.alternativas.filter((a) => a.correta).length;
      if (correctCount !== 1) {
        throw new Error(`deve ter exatamente 1 correta (encontradas ${correctCount}).`);
      }

      if (raw.tipo === 'certo_errado' && raw.alternativas.length !== 2) {
        throw new Error(`certo_errado deve ter 2 alternativas (encontradas ${raw.alternativas.length}).`);
      }
      if (raw.tipo === 'multipla_escolha' && (raw.alternativas.length < 4 || raw.alternativas.length > 5)) {
        throw new Error(`multipla_escolha deve ter 4 ou 5 alternativas (encontradas ${raw.alternativas.length}).`);
      }

      const uuid = stringToUuid(`q-pol-batch7-${raw.id || raw.idSlug || i + 1}`);
      validQuestions.push({
        ...raw,
        id: id,
        uuid: uuid,
      });
    } catch (err) {
      errors.push({ id, error: err.message });
    }
  }

  return { validQuestions, errors };
}
