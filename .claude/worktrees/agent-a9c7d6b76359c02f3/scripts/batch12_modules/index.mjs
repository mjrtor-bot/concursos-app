import crypto from "crypto";
import { transito01Questoes } from "./transito_01.mjs";
import { transito02Questoes } from "./transito_02.mjs";
import { criminologia01Questoes } from "./criminologia_01.mjs";
import { criminologia02Questoes } from "./criminologia_02.mjs";
import { info01Questoes } from "./info_01.mjs";
import { info02Questoes } from "./info_02.mjs";
import { rlm01Questoes } from "./rlm_01.mjs";
import { rlm02Questoes } from "./rlm_02.mjs";
import { dh01Questoes } from "./dh_01.mjs";
import { dh02Questoes } from "./dh_02.mjs";
import { penal01Questoes } from "./penal_01.mjs";
import { penal02Questoes } from "./penal_02.mjs";
import { procPenal01Questoes } from "./proc_penal_01.mjs";
import { procPenal02Questoes } from "./proc_penal_02.mjs";
import { const01Questoes } from "./const_01.mjs";
import { const02Questoes } from "./const_02.mjs";
import { adm01Questoes } from "./adm_01.mjs";
import { adm02Questoes } from "./adm_02.mjs";
import { legEsp01Questoes } from "./leg_esp_01.mjs";
import { legEsp02Questoes } from "./leg_esp_02.mjs";
import { port01Questoes } from "./portugues_01.mjs";
import { port02Questoes } from "./portugues_02.mjs";

export const TODAS_QUESTOES_LOTE12 = [
  ...transito01Questoes,
  ...transito02Questoes,
  ...criminologia01Questoes,
  ...criminologia02Questoes,
  ...info01Questoes,
  ...info02Questoes,
  ...rlm01Questoes,
  ...rlm02Questoes,
  ...dh01Questoes,
  ...dh02Questoes,
  ...penal01Questoes,
  ...penal02Questoes,
  ...procPenal01Questoes,
  ...procPenal02Questoes,
  ...const01Questoes,
  ...const02Questoes,
  ...adm01Questoes,
  ...adm02Questoes,
  ...legEsp01Questoes,
  ...legEsp02Questoes,
  ...port01Questoes,
  ...port02Questoes,
];

// UUID v5 namespace fixo (RFC 4122)
const POLICIAL_NAMESPACE = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";

export function generateUUIDv5(name, namespace = POLICIAL_NAMESPACE) {
  const nsBuffer = Buffer.from(namespace.replace(/-/g, ""), "hex");
  const nameBuffer = Buffer.from(name, "utf8");
  const hash = crypto.createHash("sha1").update(Buffer.concat([nsBuffer, nameBuffer])).digest();

  hash[6] = (hash[6] & 0x0f) | 0x50; // version 5
  hash[8] = (hash[8] & 0x3f) | 0x80; // variant RFC 4122

  const hex = hash.toString("hex");
  return [
    hex.substring(0, 8),
    hex.substring(8, 12),
    hex.substring(12, 16),
    hex.substring(16, 20),
    hex.substring(20, 32),
  ].join("-");
}

export function normalizarTexto(txt) {
  if (!txt) return "";
  return txt
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function gerarFingerprint(q) {
  const normEnunciado = normalizarTexto(q.enunciado);
  const altsOrdenadas = (q.alternativas || [])
    .map((a) => normalizarTexto(a.texto))
    .sort()
    .join("|||");
  const raw = `${q.banca_nome}:::${q.ano}:::${q.orgao_nome}:::${q.tipo}:::${normEnunciado}:::${altsOrdenadas}`;
  return crypto.createHash("sha256").update(raw).digest("hex");
}

export function prepararParaBanco(q) {
  const questaoId = generateUUIDv5(`q-pol-batch12-${q.idSlug}`);
  const fingerprint = gerarFingerprint(q);

  let difNorm = (q.dificuldade || "medio").toLowerCase();
  if (difNorm === "media") difNorm = "medio";
  if (difNorm === "muito_dificil") difNorm = "dificil";
  if (!["facil", "medio", "dificil"].includes(difNorm)) {
    difNorm = "medio";
  }

  const questaoRow = {
    id: questaoId,
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
    texto_apoio: q.texto_apoio || null,
    explicacao: q.explicacao,
    is_autoral_ia: true,
    modelo_ia: "Claude Fable 5.1",
    prompt_versao: "v3.2-lote12",
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
  const alternativasRows = q.alternativas.map((alt, idx) => ({
    id: generateUUIDv5(`alt-pol-batch12-${q.idSlug}-${idx}`),
    questao_id: questaoId,
    letra: alt.letra || (q.tipo === "certo_errado" ? (idx === 0 ? "C" : "E") : letras[idx]),
    texto: alt.texto,
    correta: !!alt.correta,
    ordem: idx + 1,
    explicacao_especifica: alt.explicacao_especifica || null,
  }));

  return { idSlug: q.idSlug, questao: questaoRow, alternativas: alternativasRows, fingerprint };
}

export const batch12Preparados = TODAS_QUESTOES_LOTE12.map(prepararParaBanco);

export const batch12Questoes = batch12Preparados.map((p) => ({
  ...p.questao,
  slug: p.idSlug,
  canonical_hash: p.fingerprint,
  alternativas: p.alternativas,
}));
