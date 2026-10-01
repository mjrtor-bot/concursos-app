import fs from "fs";
import path from "path";

// Taxonomia IDs verificados
const TAXONOMIA = {
  disciplinas: {
    portugues: "cf63a64b-0209-5181-8fcf-2661da50a633",
    constitucional: "8a5fd46c-e3ab-5e99-b338-3a17eafa50e9",
    administrativo: "0ba958a0-7e2b-5f29-aec6-9578fa2d6b1c",
    penal: "29f5164e-c850-5fa5-a29b-3c0b5d6e41e6",
    processo_penal: "18877540-1bd4-5e15-b497-20b2582bc4d8",
    legislacao_especial: "f54b2f9a-3916-5409-a431-a93ce24510e9",
    direitos_humanos: "ee8e2e17-ceae-5165-932a-76c8bc67a294",
    informatica: "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    rlm: "dac6313a-adfd-50ca-98a1-09fb195469ff",
    criminologia: "0321c3c1-167a-5a44-a59d-89c065d0426d",
    transito: "589019e2-64df-583b-88f5-dc2e0eeb60e6"
  },
  assuntos: {
    // Penal
    teoria_crime: "9d987ff6-bcd4-5ea7-8594-c1123af1384b",
    crimes_pessoa_patrimonio: "d7c9580a-8d0c-5a7d-a7fe-44e0c53b4968",
    crimes_adm: "1e4abd8c-ee06-5498-b128-c3904c4c6696",
    lei_penal_tempo_espaco: "daca98a7-4f3f-5498-b313-6ab5c0da1539",
    concurso_pessoas_crimes: "a432cde8-af56-5530-8700-5bdf6e425b6b",
    penas_extincao: "e54c36d6-6d7f-5e1c-891d-4625bbeccd80",

    // Processo Penal
    inquerito: "ba014b79-7c6e-5279-a517-abaeceb2771f",
    prisoes_cautelares: "d95ec26f-26ee-5577-acb4-68fdd36c43a1",
    provas_custodia: "444c1f05-b62a-5238-9644-956b3a7cc28e",
    acao_penal: "3b2a1eda-d272-53f8-b66a-41ef31036863",
    jurisdicao_competencia: "c8dc15e6-c026-5d07-b054-7bda9bc971fb",
    busca_apreensao: "91b1995a-d047-5f6e-be4b-39ef7260df72",

    // Legislação Especial
    lei_drogas: "2104a0a6-1d8a-5f25-89b9-01eb94f91057",
    desarmamento: "dc244c93-245b-53ce-b721-bcdc9eae0e5f",
    org_criminosas: "26565bb2-215d-59c8-b3c6-185e5765b6a0",
    abuso_autoridade: "a8ddf09b-39eb-5a8b-b538-0c5dc1eaf457",
    maria_penha: "0c686bc8-7d6f-54b7-991f-b34086393aba",
    crimes_hediondos: "9ee8346f-7a1c-5ecd-95b5-0a9a6d29ff67",
    lavagem_dinheiro: "0551bd35-dcb3-5809-8a12-f9a40e1c0b83",
    tortura_interceptacao: "f8e100c9-16c7-52dc-87d3-4e111e52d81a",

    // Constitucional
    art_5_cf: "9498f43b-89c2-5133-93e8-b9930358bb4a",
    seguranca_publica: "b4e97d01-0196-55df-bf1d-9b0964a7d91c",
    organizacao_estado: "66dd36a8-5e55-5f5c-8ae8-36501eab3e3b",
    poder_executivo: "65d20117-d7d7-5139-9eeb-cb59ee770070",
    poder_legislativo: "7a887c87-f2d3-504f-8ccf-3f7fe67c1812",
    poder_judiciario: "0bbb16e6-3694-512f-8c61-a96893588f7f",
    controle_const: "f5742ead-d502-5d7b-953f-2117f3fba269",

    // Administrativo
    poderes_adm: "983f1a52-f054-5492-8318-d892e697f8f7",
    atos_adm: "50f75ddd-0ec6-5666-b08f-fa2179657fe1",
    responsabilidade_civil: "80853bc8-d70e-55bb-8ad2-b4439f7079b9",
    agentes_8112: "f53e41f4-2792-53ab-8bc8-b6810fb944c0",
    improbidade: "d9c11f93-08be-5a97-8c6b-5a32724f83bb",
    principios_limpe: "e45db358-4e84-595b-9769-2957d83a9e54",
    licitacoes: "25c0e38d-9020-5c46-849e-8c796fed3d27",

    // Português
    interpretacao: "aae93c82-cbf2-5cb0-ae75-d341448be61d",
    sintaxe: "2d20c170-3c4e-5171-91d2-fe97c4b92480",
    concordancia: "874b8ded-33c7-575d-8339-7a2f42e85e25",
    regencia_crase: "2eb8117f-c746-5029-9842-dcd698598a16",
    pontuacao: "52c47954-6d8a-52d6-8c4f-7525aaa751a1",
    morfologia: "ae0cb1a9-da13-5d87-92b8-c498b65f5f17",
    ortografia: "fceeaf5d-d6c4-5ef9-887c-9d7290725828",

    // Direitos Humanos
    dudh: "b2751cb8-3bc4-5af1-9af0-98d0a85e8a31",
    cadh: "766c2683-7c95-5520-9580-bb23b3f92c57",
    geracoes_dh: "48a9085d-50c8-52a7-bfd1-6b5fbdb29430",

    // Criminologia
    escolas_criminologicas: "e9d58ff5-4eb1-5234-b8ff-670ac90da24a",
    vitimologia: "079aff83-cc64-59d6-92e8-b6c1691c5392",
    prevencao_delito: "ff763285-f3a8-5836-83d0-b07fc54b7d29",

    // Informática
    seguranca_info: "afa6fc9a-58eb-5b53-bf8a-f56021b629e4",
    redes_nuvem: "0f3e684d-8133-528d-97ac-a8b175acb75d",
    sistemas_operacionais: "b4ed475a-eda4-5383-a1a8-b0316ae4c653",
    bancos_dados: "8550393a-d3fa-5069-82b3-55256cde307b",

    // RLM
    logica_proposicional: "ec12a7a2-bb3e-57c5-adfc-fade7c66bcfc",
    equivalencias_negacoes: "671e06a6-a523-512a-a333-08f2542f694f",
    analise_combinatoria: "791c7278-7511-50df-bddf-600d9b818aaf",
    probabilidade: "48745dac-cbf3-5f1d-a0a2-1767a7d44429",
    diagramas_logicos: "79d058d3-3b1a-5aa3-98ce-f0232fc612d3",
  }
};

export { TAXONOMIA };
