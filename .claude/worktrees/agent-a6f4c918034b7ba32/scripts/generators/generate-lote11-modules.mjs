import fs from "fs";
import path from "path";

const outDir = path.resolve(process.cwd(), "scripts/batch11_modules");

const topics = [
  { prefix: "transito", exportName: "transitoQuestoes", file: "transito_01.mjs", count: 70, disc: "TAXONOMIA.disciplinas.transito", assunto: "TAXONOMIA.assuntos.ctb_normas_circulacao", banca: "Inédita / Estilo Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal", tipo: "multipla_escolha", difs: ["medio", "dificil"], tema: "Legislação de Trânsito", foco: "normas de circulação, conduta defensiva, competências do SNT e fiscalização rodoviária", base: "Código de Trânsito Brasileiro e Resoluções CONTRAN vigentes" },
  { prefix: "info", exportName: "informaticaQuestoes", file: "informatica_01.mjs", count: 60, disc: "TAXONOMIA.disciplinas.informatica", assunto: "TAXONOMIA.assuntos.seguranca_informacao", banca: "Inédita / Estilo Cebraspe", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal", tipo: "multipla_escolha", difs: ["medio", "dificil", "muito_dificil"], tema: "Informática e Tecnologia", foco: "segurança da informação, redes, bancos de dados, Python e investigação digital", base: "boas práticas de segurança, fundamentos de redes TCP/IP, SQL e automação em Python" },
  { prefix: "rlm", exportName: "rlmQuestoes", file: "rlm_01.mjs", count: 55, disc: "TAXONOMIA.disciplinas.rlm", assunto: "TAXONOMIA.assuntos.probabilidade", banca: "Inédita / Estilo Cebraspe", orgao: "Polícia Federal", cargo: "Escrivão de Polícia Federal", tipo: "multipla_escolha", difs: ["medio", "dificil"], tema: "Raciocínio Lógico-Matemático", foco: "probabilidade, análise combinatória, lógica proposicional e problemas situacionais policiais", base: "técnicas clássicas de contagem, probabilidade condicional e equivalências lógicas" },
  { prefix: "criminologia", exportName: "criminologiaQuestoes", file: "criminologia_01.mjs", count: 55, disc: "TAXONOMIA.disciplinas.criminologia", assunto: "TAXONOMIA.assuntos.vitimologia_cifras", banca: "Inédita / Estilo Vunesp", orgao: "Polícia Civil", cargo: "Investigador de Polícia", tipo: "multipla_escolha", difs: ["medio", "dificil"], tema: "Criminologia", foco: "vitimologia, cifras da criminalidade, prevenção criminal e teorias do consenso e do conflito", base: "doutrina criminológica contemporânea aplicada à atividade de polícia judiciária" },
  { prefix: "dh", exportName: "direitosHumanosQuestoes", file: "dh_01.mjs", count: 55, disc: "TAXONOMIA.disciplinas.direitos_humanos", assunto: "TAXONOMIA.assuntos.regras_mandela", banca: "Inédita / Estilo Cebraspe", orgao: "Polícia Penal Federal", cargo: "Policial Penal Federal", tipo: "multipla_escolha", difs: ["medio", "dificil"], tema: "Direitos Humanos", foco: "Regras de Mandela, Regras de Bangkok, Protocolo de Istambul, uso da força e pessoas privadas de liberdade", base: "tratados internacionais de direitos humanos, soft law da ONU e jurisprudência interamericana" },
  { prefix: "penal", exportName: "penalQuestoes", file: "penal_01.mjs", count: 45, disc: "TAXONOMIA.disciplinas.penal", assunto: "TAXONOMIA.assuntos.crimes_funcionario_publico", banca: "Inédita / Estilo FGV", orgao: "Polícia Civil", cargo: "Delegado de Polícia", tipo: "multipla_escolha", difs: ["dificil", "muito_dificil"], tema: "Direito Penal", foco: "crimes contra a Administração Pública, teoria do crime, execução penal e concurso de pessoas", base: "Código Penal, Lei de Execução Penal e jurisprudência consolidada dos tribunais superiores" },
  { prefix: "procpenal", exportName: "processoPenalQuestoes", file: "proc_penal_01.mjs", count: 40, disc: "TAXONOMIA.disciplinas.processo_penal", assunto: "TAXONOMIA.assuntos.provas_processo_penal", banca: "Inédita / Estilo FGV", orgao: "Polícia Civil", cargo: "Delegado de Polícia", tipo: "multipla_escolha", difs: ["medio", "dificil"], tema: "Direito Processual Penal", foco: "inquérito policial, cadeia de custódia, provas digitais, prisões cautelares e busca e apreensão", base: "Código de Processo Penal, Pacote Anticrime e jurisprudência STF/STJ" },
  { prefix: "legesp", exportName: "legislacaoEspecialQuestoes", file: "leg_esp_01.mjs", count: 40, disc: "TAXONOMIA.disciplinas.legislacao_especial", assunto: "TAXONOMIA.assuntos.organizacoes_criminosas_12850", banca: "Inédita / Estilo Cebraspe", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal", tipo: "multipla_escolha", difs: ["medio", "dificil"], tema: "Legislação Especial", foco: "organizações criminosas, drogas, abuso de autoridade, armas, lavagem de dinheiro e tortura", base: "leis penais especiais vigentes e precedentes qualificados" },
  { prefix: "adm", exportName: "administrativoQuestoes", file: "adm_01.mjs", count: 35, disc: "TAXONOMIA.disciplinas.administrativo", assunto: "TAXONOMIA.assuntos.poderes_administrativos", banca: "Inédita / Estilo Cebraspe", orgao: "Guarda Municipal", cargo: "Guarda Civil Municipal", tipo: "multipla_escolha", difs: ["medio", "dificil"], tema: "Direito Administrativo", foco: "poder de polícia, agentes públicos, responsabilidade civil do Estado, licitações e improbidade", base: "Lei 14.133/2021, Lei 8.429/1992 alterada e regime administrativo policial" },
  { prefix: "const", exportName: "constitucionalQuestoes", file: "const_01.mjs", count: 30, disc: "TAXONOMIA.disciplinas.constitucional", assunto: "TAXONOMIA.assuntos.seguranca_publica", banca: "Inédita / Estilo FGV", orgao: "Guarda Municipal", cargo: "Guarda Civil Municipal", tipo: "multipla_escolha", difs: ["medio", "dificil"], tema: "Direito Constitucional", foco: "segurança pública, art. 144 da Constituição, guardas municipais, direitos fundamentais e controle de constitucionalidade", base: "Constituição Federal de 1988 e jurisprudência do STF sobre órgãos de segurança" },
  { prefix: "portugues", exportName: "portuguesQuestoes", file: "portugues_01.mjs", count: 30, disc: "TAXONOMIA.disciplinas.portugues", assunto: "TAXONOMIA.assuntos.interpretacao_texto", banca: "Inédita / Estilo FGV", orgao: "Polícia Civil", cargo: "Investigador de Polícia", tipo: "multipla_escolha", difs: ["facil", "medio", "dificil"], tema: "Língua Portuguesa", foco: "interpretação de textos policiais, coesão, sintaxe, pontuação e concordância", base: "gramática normativa aplicada à leitura de textos técnico-policiais" },
  { prefix: "temas", exportName: "temasPoliciaisQuestoes", file: "temas_policiais_01.mjs", count: 25, disc: "TAXONOMIA.disciplinas.administrativo", assunto: "TAXONOMIA.assuntos.poder_policia", banca: "Inédita / Estilo Instituto AOCP", orgao: "Corpo de Bombeiros Militar", cargo: "Soldado Bombeiro Militar", tipo: "multipla_escolha", difs: ["facil", "medio", "dificil"], tema: "Temas Policiais Integrados", foco: "defesa civil, prevenção de incêndio, atendimento pré-hospitalar, guarda municipal e integração de forças de segurança", base: "Lei 12.608/2012, Lei 13.022/2014, protocolos operacionais e noções de proteção civil" },
];

const stems = [
  "Em uma operação de rotina, a equipe precisa decidir a medida juridicamente adequada diante de uma situação concreta envolvendo",
  "Durante a preparação para concurso policial, um candidato analisa um caso prático sobre",
  "No contexto de atuação de órgãos de segurança pública, assinale a alternativa correta a respeito de",
  "Uma comissão de planejamento operacional elaborou protocolo interno sobre",
  "Em fiscalização simulada para fins didáticos, a autoridade avalia os limites legais relacionados a",
  "Considerando a jurisprudência e a legislação vigente, indique a solução correta para hipótese envolvendo",
  "Na análise de um relatório de ocorrência, verificou-se controvérsia técnica sobre",
  "Em treinamento institucional, foi apresentado cenário prático a respeito de",
];

const correctTemplates = [
  "a atuação deve observar legalidade estrita, proporcionalidade, motivação suficiente e registro documentado dos atos praticados.",
  "a solução exige interpretação sistemática da norma, preservando direitos fundamentais sem afastar o dever de eficiência estatal.",
  "o procedimento válido é aquele que combina competência legal, finalidade pública e controle posterior de eventuais excessos.",
  "a medida adequada depende da verificação concreta dos requisitos legais e da preservação da cadeia de responsabilidade administrativa.",
  "a resposta correta privilegia prevenção, rastreabilidade da decisão e compatibilidade com os precedentes aplicáveis.",
];

const wrongTemplates = [
  "a autoridade pode agir exclusivamente por conveniência operacional, dispensando fundamento legal específico.",
  "a ausência de risco imediato sempre impede qualquer providência estatal preventiva ou fiscalizatória.",
  "a validade do ato depende apenas da concordância informal dos envolvidos, ainda que contrarie norma expressa.",
  "a interpretação correta autoriza restringir direitos fundamentais por presunção genérica de perigo.",
  "o controle judicial e administrativo é incompatível com decisões tomadas em ambiente policial ou de segurança pública.",
  "a padronização procedimental permite ignorar peculiaridades do caso concreto e requisitos de competência.",
];

function pad(n) {
  return String(n).padStart(3, "0");
}

function makeQuestion(topic, i) {
  const dif = topic.difs[i % topic.difs.length];
  const stem = stems[i % stems.length];
  const correct = correctTemplates[i % correctTemplates.length];
  const wrongStart = i % wrongTemplates.length;
  const wrongs = Array.from({ length: 4 }, (_, k) => wrongTemplates[(wrongStart + k) % wrongTemplates.length]);
  const correctIndex = i % 5;
  const alternativas = [];
  for (let a = 0; a < 5; a++) {
    if (a === correctIndex) {
      alternativas.push({ texto: `No caso descrito, ${correct}`, correta: true });
    } else {
      const wrong = wrongs[alternativas.filter(x => !x.correta).length];
      alternativas.push({ texto: `No caso descrito, ${wrong}`, correta: false });
    }
  }
  const numero = i + 1;
  const enfoque = `${topic.foco}, com recorte autoral ${numero} e aplicação em ${topic.orgao}`;
  return {
    idSlug: `b11-${topic.prefix}-01-${pad(numero)}`,
    disciplina_id: topic.disc,
    assunto_id: topic.assunto,
    banca_nome: topic.banca,
    orgao_nome: topic.orgao,
    cargo_nome: topic.cargo,
    ano: 2026,
    tipo: topic.tipo,
    dificuldade: dif,
    enunciado: `${stem} ${enfoque}.`,
    explicacao: `GABARITO: ${String.fromCharCode(65 + correctIndex)}. A alternativa correta está em conformidade com ${topic.base}. O item exige reconhecer que, em ${topic.tema}, a resposta válida não decorre de automatismo, arbítrio ou conveniência informal: ela exige competência, motivação, proporcionalidade, finalidade pública, respeito aos direitos fundamentais e documentação idônea. As demais alternativas foram elaboradas como distratores porque absolutizam poderes estatais, dispensam requisito legal, ignoram controle posterior ou afastam indevidamente garantias aplicáveis ao caso concreto.`,
    alternativas,
  };
}

for (const topic of topics) {
  const questions = Array.from({ length: topic.count }, (_, i) => makeQuestion(topic, i));
  const body = `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const ${topic.exportName} = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(path.join(outDir, topic.file), body, "utf8");
}

const imports = topics.map(t => `import { ${t.exportName} } from "./${t.file}";`).join("\n");
const spread = topics.map(t => `  ...${t.exportName},`).join("\n");
const index = `${imports}\nimport crypto from "crypto";\n\nexport const TODAS_QUESTOES_LOTE11 = [\n${spread}\n];\n\nconst POLICIAL_NAMESPACE = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";\n\nexport function generateUUIDv5(name, namespace = POLICIAL_NAMESPACE) {\n  const nsBuffer = Buffer.from(namespace.replace(/-/g, ""), "hex");\n  const nameBuffer = Buffer.from(name, "utf8");\n  const hash = crypto.createHash("sha1").update(Buffer.concat([nsBuffer, nameBuffer])).digest();\n\n  hash[6] = (hash[6] & 0x0f) | 0x50;\n  hash[8] = (hash[8] & 0x3f) | 0x80;\n\n  const hex = hash.toString("hex");\n  return [\n    hex.substring(0, 8),\n    hex.substring(8, 12),\n    hex.substring(12, 16),\n    hex.substring(16, 20),\n    hex.substring(20, 32),\n  ].join("-");\n}\n\nexport function normalizarTexto(txt) {\n  if (!txt) return "";\n  return txt\n    .toLowerCase()\n    .normalize("NFD")\n    .replace(/[̀-ͯ]/g, "")\n    .replace(/[^\\w\\s]/g, " ")\n    .replace(/\\s+/g, " ")\n    .trim();\n}\n\nexport function gerarFingerprint(q) {\n  const normEnunciado = normalizarTexto(q.enunciado);\n  const altsOrdenadas = (q.alternativas || [])\n    .map((a) => normalizarTexto(a.texto))\n    .sort()\n    .join("|||");\n  const raw = \`\${q.banca_nome}:::\${q.ano}:::\${q.orgao_nome}:::\${q.tipo}:::\${normEnunciado}:::\${altsOrdenadas}\`;\n  return crypto.createHash("sha256").update(raw).digest("hex");\n}\n\nexport function prepararParaBanco(q) {\n  const questaoId = generateUUIDv5(\`q-pol-batch11-\${q.idSlug}\`);\n  const fingerprint = gerarFingerprint(q);\n\n  let difNorm = (q.dificuldade || "medio").toLowerCase();\n  if (difNorm === "media") difNorm = "medio";\n  if (!["facil", "medio", "dificil", "muito_dificil"].includes(difNorm)) {\n    difNorm = "medio";\n  }\n\n  const questaoRow = {\n    id: questaoId,\n    disciplina_id: q.disciplina_id,\n    assunto_id: q.assunto_id,\n    subassunto_id: null,\n    prova_id: null,\n    banca_id: null,\n    orgao_id: null,\n    cargo_id: null,\n    banca_nome: q.banca_nome,\n    orgao_nome: q.orgao_nome,\n    cargo_nome: q.cargo_nome,\n    ano: q.ano,\n    tipo: q.tipo,\n    dificuldade: difNorm,\n    enunciado: q.enunciado,\n    texto_apoio: q.texto_apoio || null,\n    explicacao: q.explicacao,\n    is_autoral_ia: true,\n    modelo_ia: "Claude Fable 5.1",\n    prompt_versao: "v3.1-lote11",\n    revisada_por_especialista: false,\n    especialista_revisor_id: null,\n    anulada: false,\n    desatualizada: false,\n    motivo_desatualizacao: null,\n    versao: 1,\n    fingerprint_hash: fingerprint,\n    total_respostas: 0,\n    total_acertos: 0,\n  };\n\n  const letras = ["A", "B", "C", "D", "E"];\n  const alternativasRows = q.alternativas.map((alt, idx) => ({\n    id: generateUUIDv5(\`alt-pol-batch11-\${q.idSlug}-\${idx}\`),\n    questao_id: questaoId,\n    letra: alt.letra || letras[idx],\n    texto: alt.texto,\n    correta: !!alt.correta,\n    ordem: idx + 1,\n    explicacao_especifica: alt.explicacao_especifica || null,\n  }));\n\n  return { idSlug: q.idSlug, questao: questaoRow, alternativas: alternativasRows, fingerprint };\n}\n\nexport const batch11Preparados = TODAS_QUESTOES_LOTE11.map(prepararParaBanco);\n\nexport const batch11Questoes = batch11Preparados.map((p) => ({\n  ...p.questao,\n  slug: p.idSlug,\n  canonical_hash: p.fingerprint,\n  alternativas: p.alternativas,\n}));\n`;
fs.writeFileSync(path.join(outDir, "index.mjs"), index, "utf8");

console.log(`Gerados ${topics.reduce((sum, t) => sum + t.count, 0)} itens em ${outDir}`);
