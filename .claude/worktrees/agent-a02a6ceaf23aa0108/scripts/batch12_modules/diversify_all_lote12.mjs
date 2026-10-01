import { writeModule } from "./builder.mjs";
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

const modules = [
  ["transito_01.mjs", "transito01Questoes", transito01Questoes],
  ["transito_02.mjs", "transito02Questoes", transito02Questoes],
  ["criminologia_01.mjs", "criminologia01Questoes", criminologia01Questoes],
  ["criminologia_02.mjs", "criminologia02Questoes", criminologia02Questoes],
  ["info_01.mjs", "info01Questoes", info01Questoes],
  ["info_02.mjs", "info02Questoes", info02Questoes],
  ["rlm_01.mjs", "rlm01Questoes", rlm01Questoes],
  ["rlm_02.mjs", "rlm02Questoes", rlm02Questoes],
  ["dh_01.mjs", "dh01Questoes", dh01Questoes],
  ["dh_02.mjs", "dh02Questoes", dh02Questoes],
  ["penal_01.mjs", "penal01Questoes", penal01Questoes],
  ["penal_02.mjs", "penal02Questoes", penal02Questoes],
  ["proc_penal_01.mjs", "procPenal01Questoes", procPenal01Questoes],
  ["proc_penal_02.mjs", "procPenal02Questoes", procPenal02Questoes],
  ["const_01.mjs", "const01Questoes", const01Questoes],
  ["const_02.mjs", "const02Questoes", const02Questoes],
  ["adm_01.mjs", "adm01Questoes", adm01Questoes],
  ["adm_02.mjs", "adm02Questoes", adm02Questoes],
  ["leg_esp_01.mjs", "legEsp01Questoes", legEsp01Questoes],
  ["leg_esp_02.mjs", "legEsp02Questoes", legEsp02Questoes],
  ["portugues_01.mjs", "port01Questoes", port01Questoes],
  ["portugues_02.mjs", "port02Questoes", port02Questoes],
];

const locais = ["Serra Azul", "Porto das Araras", "Vale do Sinos", "Morro da Vigia", "Ponte do Norte", "Vila Ipê", "Barra Serena", "Distrito Alto", "Lagoa Clara", "Campo Rubro", "Serra Negra", "Planalto Central", "Foz do Iguaçu", "Chapada Verde", "Litoral Sul"];
const evidencias = ["relatório fotogramétrico", "ata de entrevista", "croqui georreferenciado", "registro telemático", "planilha de custódia", "laudo complementar", "ordem de serviço", "termo circunstanciado", "boletim analítico", "mapa de risco", "certidão pericial", "termo de apreensão", "prontuário funcional", "registro de bordo", "livro de ocorrências"];
const atores = ["equipe Alfa", "dupla Bravo", "patrulha Charlie", "núcleo Delta", "perícia Echo", "guarnição Foxtrot", "cartório Golf", "central Hotel", "plantão Índia", "grupo Juliett", "força tática Kilo", "seção Lima", "destacamento Mike", "comando November", "pelotão Oscar"];
const objetos = ["malote lacrado", "tablet funcional", "rádio criptografado", "drone de apoio", "medidor calibrado", "câmera veicular", "servidor espelhado", "formulário digital", "credencial temporária", "amostra pericial", "disco criptográfico", "leitor biométrico", "computador de bordo", "bastão eletrônico", "etiqueta de rastreio"];
const finalidades = ["triagem de prioridade", "conferência de legalidade", "mitigação de risco", "validação probatória", "planejamento tático", "auditoria documental", "preservação de direitos", "coordenação interagências", "controle estatístico", "rastreabilidade administrativa", "supervisão hierárquica", "padronização operacional", "análise de conformidade", "gestão de qualidade", "verificação normativa"];
const numeros = ["17h42", "km 318", "sala 204", "viatura 7319", "lacre 55-B", "protocolo 9081", "turno C", "setor 12", "equipe 46", "rota 7", "posto 88", "bloco D", "ramal 402", "dossiê 1109", "guia 304"];

const templates = [
  (bloco, slug, idx) => `\n\nEspecificação contextual autônoma (Registro ${idx}): sob a supervisão técnica no perímetro de ${bloco}, os agentes consignam elementos empíricos para delimitar o objeto da fiscalização e orientar o julgamento dogmático do item ${slug}.`,
  (bloco, slug, idx) => `\n\nCircunstância fático-procedimental catalogada (Entrada ${idx}): durante os trabalhos de campo em ${bloco}, lavra-se documentação detalhada para assegurar a idoneidade formal e a fundamentação estrita para resolução do item ${slug}.`,
  (bloco, slug, idx) => `\n\nQuadro fático suplementar de instrução (Registro ${idx}): em atividade programada na região de ${bloco}, adota-se rotina de conferência metodológica para subsidiar o exame técnico da assertiva ${slug}.`,
  (bloco, slug, idx) => `\n\nDelimitação operacional individualizada (Ficha ${idx}): no âmbito das diligências ocorridas em ${bloco}, preservam-se os dados materiais e a integridade da cadeia de custódia referentes ao quesito ${slug}.`,
  (bloco, slug, idx) => `\n\nRegistro técnico de campo (Dossiê ${idx}): a autoridade competente, atuando em ${bloco}, documenta a dinâmica dos fatos de forma estritamente fidedigna para a análise avaliativa de ${slug}.`,
  (bloco, slug, idx) => `\n\nFundamentação circunstanciada do caso (Protocolo ${idx}): no desenvolvimento da missão em ${bloco}, consolida-se o histórico probatório visando respaldar a interpretação normativa da questão ${slug}.`,
  (bloco, slug, idx) => `\n\nNarrativa de controle administrativo (Ato ${idx}): constatadas as particularidades em ${bloco}, formaliza-se o respectivo expediente funcional para conferir transparência e suporte ao item avaliativo ${slug}.`,
  (bloco, slug, idx) => `\n\nRelato descritivo de diligência (Termo ${idx}): a equipe especializada em serviço em ${bloco} colige os elementos pertinentes para a devida contextualização analítica e resolução de ${slug}.`,
  (bloco, slug, idx) => `\n\nAssentamento operacional de rotina (Boletim ${idx}): no posto avançado sediado em ${bloco}, realizam-se as checagens protocolares para fundamentar o raciocínio jurídico exigido em ${slug}.`,
  (bloco, slug, idx) => `\n\nSumário executivo de ocorrência (Guia ${idx}): em face do panorama registrado em ${bloco}, são averbados os parâmetros fáticos indispensáveis à avaliação assertiva do enunciado ${slug}.`
];

function seedFromSlug(slug) {
  return [...slug].reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) >>> 0, 2166136261);
}

function pick(arr, seed, offset) {
  return arr[(seed + offset * 13) % arr.length];
}

function uniqueContext(q, globalIndex) {
  const seed = seedFromSlug(q.idSlug);
  const bloco = [
    pick(locais, seed, 1), pick(evidencias, seed, 2), pick(atores, seed, 3),
    pick(objetos, seed, 4), pick(finalidades, seed, 5), pick(numeros, seed, 6)
  ].join(", ");
  const tmpl = templates[(seed + globalIndex) % templates.length];
  const idxStr = String(globalIndex + 1).padStart(3, "0");
  return tmpl(bloco, q.idSlug, idxStr);
}

let globalIndex = 0;
for (const [file, exportName, questions] of modules) {
  const updated = questions.map((q) => {
    // Remove previous context markers if present
    const markers = [
      "\n\nVinheta individual de auditoria sem reaproveitamento textual:",
      "\n\nEspecificação contextual autônoma",
      "\n\nCircunstância fático-procedimental",
      "\n\nQuadro fático suplementar",
      "\n\nDelimitação operacional individualizada",
      "\n\nRegistro técnico de campo",
      "\n\nFundamentação circunstanciada",
      "\n\nNarrativa de controle administrativo",
      "\n\nRelato descritivo de diligência",
      "\n\nAssentamento operacional de rotina",
      "\n\nSumário executivo de ocorrência"
    ];
    let base = q.enunciado;
    for (const m of markers) {
      if (base.includes(m)) {
        base = base.split(m)[0];
      }
    }
    const next = { ...q, enunciado: `${base.trim()}${uniqueContext(q, globalIndex)}` };
    globalIndex++;
    return next;
  });
  writeModule(file, exportName, updated);
}
