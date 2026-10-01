import crypto from "node:crypto";

// Namespace determinístico padrão para geração de UUID v5 (RFC 4122)
export const UUID_NAMESPACE = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";

export function generateUUIDv5(name, namespace = UUID_NAMESPACE) {
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

export const DISCIPLINAS = {
  DIREITO_PENAL: "29f5164e-c850-5fa5-a29b-3c0b5d6e41e6",
  DIREITO_PROCESSUAL_PENAL: "18877540-1bd4-5e15-b497-20b2582bc4d8",
  LEGISLACAO_ESPECIAL: "f54b2f9a-3916-5409-a431-a93ce24510e9",
  LEGISLACAO_TRANSITO: "589019e2-64df-583b-88f5-dc2e0eeb60e6",
  CRIMINOLOGIA: "0321c3c1-167a-5a44-a59d-89c065d0426d",
  DIREITO_CONSTITUCIONAL: "8a5fd46c-e3ab-5e99-b338-3a17eafa50e9",
  DIREITO_ADMINISTRATIVO: "0ba958a0-7e2b-5f29-aec6-9578fa2d6b1c",
  DIREITOS_HUMANOS: "ee8e2e17-ceae-5165-932a-76c8bc67a294",
  DH: "ee8e2e17-ceae-5165-932a-76c8bc67a294",
  INFORMATICA_TI: "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
  INFORMATICA: "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
  INFO: "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
  RACIOCINIO_LOGICO: "dac6313a-adfd-50ca-98a1-09fb195469ff",
  RACIOCINIO_LOGICO_MATEMATICO: "dac6313a-adfd-50ca-98a1-09fb195469ff",
  RLM: "dac6313a-adfd-50ca-98a1-09fb195469ff",
  LINGUA_PORTUGUESA: "cf63a64b-0209-5181-8fcf-2661da50a633",
  PORTUGUES: "cf63a64b-0209-5181-8fcf-2661da50a633",
  ADMINISTRACAO_PUBLICA: "2ad23a1d-b039-5195-aab6-03545f246714",
  ATUALIDADES: "ac8f26fa-9f99-50a0-aa50-853311a06745",
  ETICA_PUBLICO: "efc9595d-8a5e-5de8-82f2-c6cf36640f2f",
};

export const ASSUNTOS = {
  // Direito Penal
  PENAL_APLICACAO_LEI: "daca98a7-4f3f-5498-b313-6ab5c0da1539",
  PENAL_TEORIA_CRIME: "9d987ff6-bcd4-5ea7-8594-c1123af1384b",
  PENAL_CONCURSO_PESSOAS: "a432cde8-af56-5530-8700-5bdf6e425b6b",
  PENAL_CRIMES_PESSOA_PATRIMONIO: "d7c9580a-8d0c-5a7d-a7fe-44e0c53b4968",
  PENAL_CRIMES_ADM_PUBLICA: "1e4abd8c-ee06-5498-b128-c3904c4c6696",
  PENAL_PENAS_EXTINCAO: "e54c36d6-6d7f-5e1c-891d-4625bbeccd80",

  // Direito Processual Penal
  PROC_PENAL_INQUERITO: "ba014b79-7c6e-5279-a517-abaeceb2771f",
  PROC_PENAL_ACAO_PENAL: "3b2a1eda-d272-53f8-b66a-41ef31036863",
  PROC_PENAL_PRISOES_FLAGRANTE: "d95ec26f-26ee-5577-acb4-68fdd36c43a1",
  PROC_PENAL_PROVAS_CUSTODIA: "444c1f05-b62a-5238-9644-956b3a7cc28e",
  PROC_PENAL_BUSCA_MEDIDAS: "91b1995a-d047-5f6e-be4b-39ef7260df72",
  PROC_PENAL_JURISDICAO_COMPETENCIA: "c8dc15e6-c026-5d07-b054-7bda9bc971fb",

  // Legislação Especial
  LEG_ESP_DROGAS: "2104a0a6-1d8a-5f25-89b9-01eb94f91057",
  LEG_ESP_DESARMAMENTO: "dc244c93-245b-53ce-b721-bcdc9eae0e5f",
  LEG_ESP_ORG_CRIMINOSAS: "26565bb2-215d-59c8-b3c6-185e5765b6a0",
  LEG_ESP_LAVAGEM_DINHEIRO: "0551bd35-dcb3-5809-8a12-f9a40e1c0b83",
  LEG_ESP_ABUSO_AUTORIDADE: "a8ddf09b-39eb-5a8b-b538-0c5dc1eaf457",
  LEG_ESP_MARIA_PENHA: "0c686bc8-7d6f-54b7-991f-b34086393aba",
  LEG_ESP_CRIMES_HEDIONDOS: "9ee8346f-7a1c-5ecd-95b5-0a9a6d29ff67",
  LEG_ESP_TORTURA_INTERCEPTACAO: "f8e100c9-16c7-52dc-87d3-4e111e52d81a",

  // Trânsito
  TRANSITO_NORMAS_CIRCULACAO: "a059f9e2-aaa6-5d07-ae38-56d8024c3b23",
  TRANSITO_CRIMES_INFRACOES: "e74dc693-757f-5086-97a0-0710b9473007",

  // Criminologia
  CRIM_ESCOLAS_TEORIAS: "e9d58ff5-4eb1-5234-b8ff-670ac90da24a",
  CRIM_PREVENCAO_REACAO: "ff763285-f3a8-5836-83d0-b07fc54b7d29",
  CRIM_VITIMOLOGIA_CIFRAS: "079aff83-cc64-59d6-92e8-b6c1691c5392",

  // Constitucional
  CONST_DIREITOS_FUNDAMENTAIS: "9498f43b-89c2-5133-93e8-b9930358bb4a",
  CONST_SEGURANCA_PUBLICA: "b4e97d01-0196-55df-bf1d-9b0964a7d91c",
  CONST_ORG_ESTADO: "66dd36a8-5e55-5f5c-8ae8-36501eab3e3b",
  CONST_PODER_EXECUTIVO: "65d20117-d7d7-5139-9eeb-cb59ee770070",
  CONST_PODER_JUDICIARIO: "0bbb16e6-3694-512f-8c61-a96893588f7f",
  CONST_PODER_LEGISLATIVO: "7a887c87-f2d3-504f-8ccf-3f7fe67c1812",
  CONST_CONTROLE_CONSTITUCIONALIDADE: "f5742ead-d502-5d7b-953f-2117f3fba269",

  // Administrativo
  ADM_PRINCIPIOS: "e45db358-4e84-595b-9769-2957d83a9e54",
  ADM_PODERES: "983f1a52-f054-5492-8318-d892e697f8f7",
  ADM_ATOS: "50f75ddd-0ec6-5666-b08f-fa2179657fe1",
  ADM_AGENTES_8112: "f53e41f4-2792-53ab-8bc8-b6810fb944c0",
  ADM_LICITACOES_14133: "25c0e38d-9020-5c46-849e-8c796fed3d27",
  ADM_RESP_CIVIL: "80853bc8-d70e-55bb-8ad2-b4439f7079b9",
  ADM_IMPROBIDADE_8429: "d9c11f93-08be-5a97-8c6b-5a32724f83bb",

  // Direitos Humanos
  DH_DUDH_1948: "b2751cb8-3bc4-5af1-9af0-98d0a85e8a31",
  DH_CADH_SAN_JOSE: "766c2683-7c95-5520-9580-bb23b3f92c57",
  DH_GERACOES_DIMENSOES: "48a9085d-50c8-52a7-bfd1-6b5fbdb29430",
  DH_CASOS_BRASILEIROS_CORTE_IDH: "766c2683-7c95-5520-9580-bb23b3f92c57",
  DH_TRATADOS_INTERNACIONAIS: "b2751cb8-3bc4-5af1-9af0-98d0a85e8a31",

  // Informática & TI
  INFO_SEGURANCA_CRIPTOGRAFIA: "afa6fc9a-58eb-5b53-bf8a-f56021b629e4",
  INFO_SEGURANCA_CIBER: "afa6fc9a-58eb-5b53-bf8a-f56021b629e4",
  INFO_REDES_NUVEM: "0f3e684d-8133-528d-97ac-a8b175acb75d",
  INFO_REDES_INTERNET: "0f3e684d-8133-528d-97ac-a8b175acb75d",
  INFO_SO_LINUX_WINDOWS: "b4ed475a-eda4-5383-a1a8-b0316ae4c653",
  INFO_SISTEMAS_OPERACIONAIS: "b4ed475a-eda4-5383-a1a8-b0316ae4c653",
  INFO_BANCO_DADOS_SQL: "8550393a-d3fa-5069-82b3-55256cde307b",
  INFO_SUITES_ESCRITORIO: "4017743b-0f76-5c01-9385-265485a38e47",

  // Raciocínio Lógico
  RLM_PROPOSICIONAL: "ec12a7a2-bb3e-57c5-adfc-fade7c66bcfc",
  RLM_LOGICA_PROPOSICIONAL: "ec12a7a2-bb3e-57c5-adfc-fade7c66bcfc",
  RLM_EQUIVALENCIAS_NEGACAO: "671e06a6-a523-512a-a333-08f2542f694f",
  RLM_ESTRUTURAS_LOGICAS: "671e06a6-a523-512a-a333-08f2542f694f",
  RLM_DIAGRAMAS_CONJUNTOS: "79d058d3-3b1a-5aa3-98ce-f0232fc612d3",
  RLM_COMBINATORIA_CONTAGEM: "791c7278-7511-50df-bddf-600d9b818aaf",
  RLM_ANALISE_COMBINATORIA: "791c7278-7511-50df-bddf-600d9b818aaf",
  RLM_PROBABILIDADE_ESTATISTICA: "48745dac-cbf3-5f1d-a0a2-1767a7d44429",
  RLM_PROBABILIDADE: "48745dac-cbf3-5f1d-a0a2-1767a7d44429",

  // Língua Portuguesa
  PORT_INTERPRETACAO: "aae93c82-cbf2-5cb0-ae75-d341448be61d",
  PORT_COMPREENSAO_TEXTO: "aae93c82-cbf2-5cb0-ae75-d341448be61d",
  PORT_REDACAO_OFICIAL: "aae93c82-cbf2-5cb0-ae75-d341448be61d",
  PORT_SINTAXE: "2d20c170-3c4e-5171-91d2-fe97c4b92480",
  PORT_REGENCIA_CRASE: "2eb8117f-c746-5029-9842-dcd698598a16",
  PORT_CONCORDANCIA: "874b8ded-33c7-575d-8339-7a2f42e85e25",
  PORT_PONTUACAO: "52c47954-6d8a-52d6-8c4f-7525aaa751a1",
  PORT_MORFOLOGIA: "ae0cb1a9-da13-5d87-92b8-c498b65f5f17",
  PORT_ORTOGRAFIA: "fceeaf5d-d6c4-5ef9-887c-9d7290725828",
};

export function gerarQuestaoUUID(slug) {
  return generateUUIDv5(`q-pol-batch13-${slug}`, UUID_NAMESPACE);
}

export function gerarAlternativaUUID(questaoSlug, index) {
  return generateUUIDv5(`alt-pol-batch13-${questaoSlug}-${index}`, UUID_NAMESPACE);
}

export function gerarFingerprint(enunciado, alternativas) {
  const normEnunciado = (enunciado || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  const altsTextos = (alternativas || [])
    .map((a) =>
      (a.texto || "")
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
    )
    .sort()
    .join("");

  return crypto
    .createHash("sha256")
    .update(normEnunciado + altsTextos, "utf8")
    .digest("hex");
}
