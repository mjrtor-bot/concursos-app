import crypto from "crypto";
import { lep01Questoes } from "./lep_01.mjs";
import { lep02Questoes } from "./lep_02.mjs";
import { lep03Questoes } from "./lep_03.mjs";
import { lep04Questoes } from "./lep_04.mjs";
import { penal01Questoes } from "./penal_01.mjs";
import { penal02Questoes } from "./penal_02.mjs";
import { penal03Questoes } from "./penal_03.mjs";
import { procPenal01Questoes } from "./proc_penal_01.mjs";
import { procPenal02Questoes } from "./proc_penal_02.mjs";
import { procPenal03Questoes } from "./proc_penal_03.mjs";
import { legEsp01Questoes } from "./leg_esp_01.mjs";
import { legEsp02Questoes } from "./leg_esp_02.mjs";
import { legEsp03Questoes } from "./leg_esp_03.mjs";
import { dh01Questoes } from "./dh_01.mjs";
import { dh02Questoes } from "./dh_02.mjs";
import { crim01Questoes } from "./criminologia_01.mjs";
import { crim02Questoes } from "./criminologia_02.mjs";
import { const01Questoes } from "./constitucional_01.mjs";
import { const02Questoes } from "./constitucional_02.mjs";
import { adm01Questoes } from "./administrativo_01.mjs";
import { port01Questoes } from "./portugues_01.mjs";
import { rlmInfo01Questoes } from "./rlm_info_01.mjs";

export const TODAS_QUESTOES_LOTE7 = [
  ...lep01Questoes,
  ...lep02Questoes,
  ...lep03Questoes,
  ...lep04Questoes,
  ...penal01Questoes,
  ...penal02Questoes,
  ...penal03Questoes,
  ...procPenal01Questoes,
  ...procPenal02Questoes,
  ...procPenal03Questoes,
  ...legEsp01Questoes,
  ...legEsp02Questoes,
  ...legEsp03Questoes,
  ...dh01Questoes,
  ...dh02Questoes,
  ...crim01Questoes,
  ...crim02Questoes,
  ...const01Questoes,
  ...const02Questoes,
  ...adm01Questoes,
  ...port01Questoes,
  ...rlmInfo01Questoes,
];

// UUID v5 namespace fixo para Lote 7
const NAMESPACE_UUID = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";

export function generateUuidV5(name) {
  const hash = crypto.createHash("sha1").update(NAMESPACE_UUID + name).digest("hex");
  return [
    hash.substring(0, 8),
    hash.substring(8, 12),
    "5" + hash.substring(13, 16),
    ((parseInt(hash.substring(16, 18), 16) & 0x3f) | 0x80).toString(16).padStart(2, "0") + hash.substring(18, 20),
    hash.substring(20, 32),
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
  const questaoId = generateUuidV5(`q-pol-batch7-${q.idSlug}`);
  const fingerprint = gerarFingerprint(q);

  let difNorm = (q.dificuldade || "medio").toLowerCase();
  if (difNorm === "media") difNorm = "medio";
  if (!["facil", "medio", "dificil", "muito_dificil"].includes(difNorm)) {
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
  const alternativasRows = q.alternativas.map((alt, idx) => ({
    id: generateUuidV5(`alt-pol-batch7-${q.idSlug}-${idx}`),
    questao_id: questaoId,
    letra: alt.letra || (q.tipo === "certo_errado" ? (idx === 0 ? "C" : "E") : letras[idx]),
    texto: alt.texto,
    correta: !!alt.correta,
    ordem: idx + 1,
    explicacao_especifica: alt.explicacao_especifica || null,
  }));

  return { questao: questaoRow, alternativas: alternativasRows, fingerprint };
}
