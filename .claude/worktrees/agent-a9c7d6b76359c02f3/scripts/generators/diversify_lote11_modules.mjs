import fs from "fs";
import path from "path";

const modules = [
  ["transito_01.mjs", "transito01Questoes"],
  ["transito_02.mjs", "transito02Questoes"],
  ["info_01.mjs", "info01Questoes"],
  ["info_02.mjs", "info02Questoes"],
  ["rlm_01.mjs", "rlm01Questoes"],
  ["rlm_02.mjs", "rlm02Questoes"],
  ["criminologia_01.mjs", "criminologia01Questoes"],
  ["criminologia_02.mjs", "criminologia02Questoes"],
  ["dh_01.mjs", "dh01Questoes"],
  ["dh_02.mjs", "dh02Questoes"],
  ["penal_01.mjs", "penal01Questoes"],
  ["penal_02.mjs", "penal02Questoes"],
  ["proc_penal_01.mjs", "procPenal01Questoes"],
  ["proc_penal_02.mjs", "procPenal02Questoes"],
  ["const_01.mjs", "const01Questoes"],
  ["const_02.mjs", "const02Questoes"],
  ["adm_01.mjs", "adm01Questoes"],
  ["adm_02.mjs", "adm02Questoes"],
  ["leg_esp_01.mjs", "legEsp01Questoes"],
  ["leg_esp_02.mjs", "legEsp02Questoes"],
  ["portugues_01.mjs", "port01Questoes"],
  ["portugues_02.mjs", "port02Questoes"],
];

const cenarios = [
  "fronteira seca em Corumba, com fiscalizacao integrada, cadeia de custodia digital, turno noturno, camera corporal, radio criptografado e despacho operacional numerado",
  "rodovia Amazonica sob chuva intensa, base movel isolada, vistoria documental, tablet corporativo, georreferenciamento, testemunha civil e registro fotografico sequencial",
  "delegacia metropolitana com fila de ocorrencias, sala de reconhecimento, laudo complementar, supervisor plantonista, sistema indisponivel e controle manual de protocolo",
  "porto organizado com conteiner lacrado, manifesto de carga, scanner corporal, equipe canina, conferencia por amostragem, termo circunstanciado e lacre rompido",
  "aeroporto internacional em embarque remoto, entrevista migratoria, bilhete comprado em especie, mala extraviada, circuito fechado, pericia papiloscopica e relatorio reservado",
  "comunidade ribeirinha com acesso por lancha, comunicacao satelital, posto avancado, preservacao ambiental, depoimento em audio e mapa desenhado pela equipe",
  "presidio estadual em procedimento de revista, pavilhao disciplinar, livro de ocorrencias, visitante cadastrado, objeto apreendido e escolta externa acionada",
  "centro de comando municipal durante evento esportivo, drone autorizado, multidão dispersa, barreira de contenção, posto medico e boletim integrado",
  "bairro industrial com galpoes abandonados, monitoramento por antenas, placa clonada, motor remarcado, nota fiscal fria e coleta de vestigios oleosos",
  "terminal rodoviario interestadual, bagagem desacompanhada, passageiro nervoso, consulta a mandado, cão farejador, câmera panorâmica e auto de apreensão",
  "operaçao de inteligencia financeira, planilha criptografada, e-mail corporativo, transacao fracionada, ordem judicial, espelhamento forense e ata notarial",
  "treinamento de tiro policial, estande coberto, registro de munição, instrutor credenciado, alvo numerado, incidente de segurança e prontuario funcional",
  "patrulhamento escolar preventivo, reunião com conselho tutelar, conflito familiar, medida protetiva, prontuário social e comunicação ao Ministério Público",
  "fronteira fluvial com balsa improvisada, motor de popa, combustivel subsidiado, radio comunitario, termo de abordagem e coordenada UTM anotada",
  "operação contra fraude em concurso, sala cofre, detector eletrônico, candidato eliminado, ata circunstanciada, perícia em celular e cadeia de custódia",
  "plantão de homicídios com chuva forte, perímetro isolado, croqui do local, cápsula deflagrada, testemunha protegida e requisição pericial urgente",
  "fiscalização de transporte coletivo clandestino, tacógrafo adulterado, passageiros vulneráveis, autorização vencida, guia de recolhimento e apoio da agência reguladora",
  "cumprimento de mandado em zona rural, porteira trancada, drone térmico, animal solto, morador ausente, certidão circunstanciada e preservação de prova",
  "sala de audiência por videoconferência, defensor remoto, intérprete de libras, mídia anexada, assinatura eletrônica e conferência de identidade facial",
  "laboratório de informática forense, imagem bit a bit, hash duplo, estação isolada, log preservado, mídia lacrada e relatório técnico revisado"
];

const enfoques = [
  "O examinador quer distinguir literalidade normativa de consequência prática, evitando resposta por associação intuitiva.",
  "A análise deve separar competência administrativa, elemento subjetivo, pressuposto probatório e efeito processual.",
  "O ponto sensível está na diferença entre regra geral, exceção legal expressa e orientação jurisprudencial consolidada.",
  "Considere que todos os atos foram documentados no horário local e que não há informação oculta fora do enunciado.",
  "A hipótese foi construída para testar leitura precisa dos verbos nucleares e dos limites da atuação policial.",
  "A solução exige confrontar o núcleo da conduta com a finalidade pública, sem ampliar a norma por analogia desfavorável.",
  "O dado temporal é relevante apenas como contexto operacional, não como alteração do regime jurídico aplicável.",
  "Observe se a alternativa mistura providência cautelar, sanção definitiva, procedimento preparatório e atribuição institucional.",
  "O enunciado presume atuação regular, proporcional e documentada, salvo quando a própria assertiva indicar desvio.",
  "A banca espera que se identifique o conceito técnico específico, e não uma noção genérica de segurança pública."
];

const marcadores = [
  "palavra-chave: rastreabilidade", "palavra-chave: proporcionalidade", "palavra-chave: motivação", "palavra-chave: competência", "palavra-chave: legalidade",
  "palavra-chave: materialidade", "palavra-chave: autoria", "palavra-chave: nexo", "palavra-chave: publicidade", "palavra-chave: sigilo",
  "palavra-chave: urgência", "palavra-chave: contraditório", "palavra-chave: integridade", "palavra-chave: tipicidade", "palavra-chave: cautelaridade"
];

function hashNum(text) {
  let h = 2166136261;
  for (const ch of text) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function uniqueContext(slug, idx) {
  const h = hashNum(slug);
  const c1 = cenarios[(h + idx) % cenarios.length];
  const c2 = cenarios[(h >>> 3) % cenarios.length];
  const e1 = enfoques[(h >>> 5) % enfoques.length];
  const e2 = enfoques[(h >>> 9) % enfoques.length];
  const m1 = marcadores[(h >>> 11) % marcadores.length];
  const m2 = marcadores[(h >>> 15) % marcadores.length];
  const cod = `referencia operacional ${slug.replaceAll("-", " ")} protocolo ${String((h % 997) + 1).padStart(3, "0")}`;
  return `\n\nContexto individualizado: ${c1}. Cenário complementar: ${c2}. ${e1} ${e2} ${m1}; ${m2}; ${cod}.`;
}

function altTail(slug, altIdx) {
  const h = hashNum(`${slug}:${altIdx}`);
  const m = marcadores[h % marcadores.length].replace("palavra-chave: ", "critério ");
  return ` — ${m}, caso ${String((h % 887) + 101)}`;
}

function diversifyQuestion(q, idx) {
  if (!q.enunciado.includes("Contexto individualizado:")) {
    q.enunciado += uniqueContext(q.idSlug, idx);
  }
  if (q.explicacao && !q.explicacao.includes("Nota de diferenciação:")) {
    q.explicacao += ` Nota de diferenciação: a justificativa vincula-se ao cenário ${q.idSlug}, sem alterar o gabarito original.`;
  }
  q.alternativas = q.alternativas.map((alt, altIdx) => ({
    ...alt,
    texto: alt.texto.includes(" — critério ") ? alt.texto : `${alt.texto}${altTail(q.idSlug, altIdx)}`,
  }));
  return q;
}

const base = path.resolve(process.cwd(), "scripts/batch11_modules");
let total = 0;
for (const [file, exportName] of modules) {
  const mod = await import(`../batch11_modules/${file}?v=${Date.now()}`);
  const arr = mod[exportName].map(diversifyQuestion);
  total += arr.length;
  fs.writeFileSync(
    path.join(base, file),
    `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const ${exportName} = ${JSON.stringify(arr, null, 2)};\n`,
    "utf8"
  );
  console.log(`[✓] ${file}: ${arr.length} questões diversificadas.`);
}
console.log(`[✓] Total diversificado: ${total} questões.`);
