import fs from "node:fs";
import path from "node:path";

const snapPath = path.resolve(process.cwd(), "scripts/backup_pre_correcao_integridade_questoes.json");
const snap = JSON.parse(fs.readFileSync(snapPath, "utf8"));
const questoes = snap.questoes;
const alternativas = snap.alternativas;

const altsByQ = new Map();
for (const alt of alternativas) {
  if (!altsByQ.has(alt.questao_id)) {
    altsByQ.set(alt.questao_id, []);
  }
  altsByQ.get(alt.questao_id).push(alt);
}

// 1. Load the 31 Lote 11 questions
const lote11Extracted = JSON.parse(fs.readFileSync("scripts/lote11_31_extracted.json", "utf8"));

// 2. Load the 18 ME mismatches
const meMismatches = JSON.parse(fs.readFileSync("scripts/me_mismatches.json", "utf8"));

const plan = {
  metadata: {
    dataCriacao: new Date().toISOString(),
    totalQuestoesBanco: questoes.length,
    totalAlternativasBanco: alternativas.length,
    totalCorrecoesAlternativas: 62, // 31 questions * 2 alternatives (C and E)
    totalCorrecoesQuestoesExplicacao: 18,
    descricao: "Plano estruturado de correção de integridade pedagógica e gabaritos no Supabase de produção."
  },
  correcoesAlternativas: [],
  correcoesQuestoes: []
};

// Populate Alternativas Corrections (Lote 11 - 31 questions, 62 alternative records)
for (const item of lote11Extracted) {
  const q = questoes.find(x => x.id === item.id);
  const alts = altsByQ.get(item.id) || [];
  const altC = alts.find(a => a.letra === "C");
  const altE = alts.find(a => a.letra === "E");

  // Determine correct answer based on substantive analysis
  // In item.explicacao, GABARITO: CERTO means C is true, E is false. GABARITO: ERRADO means E is true, C is false.
  const isCerto = /^gabarito:\s*certo/i.test(item.explicacao);
  const correctLetra = isCerto ? "C" : "E";

  const targetAltC_correta = isCerto;
  const targetAltE_correta = !isCerto;

  let fundamento = "";
  if (item.id === "0e7459a9-a0a4-5498-b5f6-16ec72503a98") {
    fundamento = "Inconstitucionalidade da vedação genérica à liberdade provisória em crimes hediondos fixada pelo STF no HC 104.329/SP.";
  } else if (item.id === "13f27d61-4548-5206-ab6b-b1344e3e450a") {
    fundamento = "Teoria do Etiquetamento (Labelling Approach / Reacionismo Social de Howard Becker).";
  } else if (item.id === "218476f5-108d-5174-af53-dbcc3cc098bb") {
    fundamento = "Prazos da prisão temporária (5+5 dias para crimes comuns conforme art. 2º da Lei 7.960/89; 30+30 dias para hediondos conforme art. 2º, § 4º da Lei 8.072/90).";
  } else if (item.id === "294c9e76-85fe-5685-8672-4ad0f3d8160c") {
    fundamento = "Criminologia: vitimização primária decorre do crime; vitimização terciária decorre da estigmatização pelo meio social.";
  } else if (item.id === "2e18cfb4-115d-59ba-9df5-9e5f1e1aeea3") {
    fundamento = "Escola Clássica concebe o crime como ente puramente jurídico; a Escola Positiva (Lombroso/Ferri/Garofalo) concebe como fato biopsicossocial.";
  } else if (item.id === "3e2b208b-4cb0-5a46-8a1f-1ff6602d83eb") {
    fundamento = "A revogação de ato discricionário produz efeitos ex nunc (prospectivos); a anulação produz efeitos ex tunc.";
  } else if (item.id === "40ab0839-bff4-58c2-b338-baba3d823f33") {
    fundamento = "Polícia administrativa incide sobre bens/direitos/atividades preventivamente; polícia judiciária incide sobre pessoas repressivamente.";
  } else if (item.id === "55dd6201-7f5b-5881-abe1-c0ede0e01664") {
    fundamento = "Criminologia: conceito da Cifra Negra (dark figure of crime).";
  } else if (item.id === "610d2fb0-3389-5eec-ab7e-8515113add1b") {
    fundamento = "Direitos Humanos: Protocolo de Istambul (Manual da ONU para documentação e investigação eficazes da tortura).";
  } else if (item.id === "65fcd79a-eaaa-5eb2-a3c5-660da85deec1") {
    fundamento = "Criminologia: prevenção primária atua nas causas profundas da criminalidade mediante políticas públicas estruturantes.";
  } else if (item.id === "7cb2fd1c-2664-523c-bcb7-d8ccd5c6bfca") {
    fundamento = "Processo Penal: a quebra da cadeia de custódia não acarreta nulidade/ilicitude automática (jurisprudência STJ, RHC 131.956).";
  } else if (item.id === "812cd4b0-877e-5b4e-950d-db327b2c7b62") {
    fundamento = "Criminologia: Teoria da Anomia de Robert Merton e Émile Durkheim.";
  } else if (item.id === "84e3a331-ef31-56d7-a5f5-302200f626cc") {
    fundamento = "Direito Constitucional: Habeas Data (CF/88, art. 5º, LXXII, 'a').";
  } else if (item.id === "899ce1cf-d52b-5216-9254-496e40ddf517") {
    fundamento = "Direitos Humanos: Art. 4.3 da CADH (vedação ao restabelecimento da pena de morte / Princípio do Não-Retrocesso).";
  } else if (item.id === "8bce682f-3650-5cf4-a5c3-8369562126b2") {
    fundamento = "Raciocínio Lógico: tabela-verdade da bicondicional P <-> Q (falsa se valores lógicos divergirem).";
  } else if (item.id === "a0e37cc1-e932-527a-99d5-c4949c03cfa7") {
    fundamento = "Direitos Humanos: DUDH adotada pela Resolução 217 A (III) da Assembleia Geral da ONU de 1948.";
  } else if (item.id === "a4c01f60-e398-5666-a85b-5fbe1e9ffe14") {
    fundamento = "Legislação Penal Especial: Art. 12 da Lei 10.826/2003 (posse irregular de arma de uso permitido).";
  } else if (item.id === "a69d5f2e-dfc7-53e1-9b6f-ce86c90f21e6") {
    fundamento = "Legislação Penal Especial: Art. 16 da Lei 11.340/2006 (renúncia à representação em audiência própria perante o juiz).";
  } else if (item.id === "b057e3fc-e46c-524f-bb63-095422bdcdb8") {
    fundamento = "Direito Constitucional: Art. 144, § 2º da CF/88 (Polícia Rodoviária Federal).";
  } else if (item.id === "b75e4067-ee36-5e83-964b-1e2aecc5be3b") {
    fundamento = "Língua Portuguesa: características do gênero textual Relatório de Investigação Policial.";
  } else if (item.id === "bd0cb5c4-bb69-55d6-a989-26a83f172410") {
    fundamento = "Processo Penal: características do Inquérito Policial (informativo, inquisitorial, discricionário e prescindível).";
  } else if (item.id === "bf179673-0637-51e9-9872-fbf3a84e5857") {
    fundamento = "Língua Portuguesa: impessoalidade do verbo 'haver' no sentido de existir/ocorrer (deve permanecer no singular: 'Havia muitos vestígios').";
  } else if (item.id === "c0305cec-f8af-5ce1-a7fe-b531219d9354") {
    fundamento = "Direitos Humanos: Regras de Bangkok (Resolução 65/229 da AG/ONU para mulheres presas).";
  } else if (item.id === "c2861f52-4408-5b15-a5b8-d3416f3a52a8") {
    fundamento = "Direito Constitucional: Art. 37, § 6º da CF/88 (responsabilidade objetiva do Estado e direito de regresso).";
  } else if (item.id === "d08e40c7-c3cf-5002-a74a-0cbc7f995e43") {
    fundamento = "Direito Constitucional: Tema 940/STF (Teoria da Dupla Garantia - vedado litisconsórcio passivo facultativo com o agente público).";
  } else if (item.id === "de5c0c66-8d69-5961-beeb-cf6ab398af76") {
    fundamento = "Direito Constitucional: Art. 144, § 5º-A da CF/88 (Polícias Penais).";
  } else if (item.id === "e40bf008-0b48-5363-a871-6a08e4e46a12") {
    fundamento = "Direito Administrativo: Art. 1º, § 3º da Lei 8.429/1992 com redação dada pela Lei 14.230/2021.";
  } else if (item.id === "e5429755-ea59-5c8f-a37b-92b30a4b19c6") {
    fundamento = "Raciocínio Lógico: equivalência lógica ~P -> Q <-> P v Q.";
  } else if (item.id === "ea7830f2-6886-5434-b153-742512d631cd") {
    fundamento = "Legislação Penal Especial: Art. 1º, § 1º da Lei 12.850/2013 (organização criminosa exige associação de 4 ou mais pessoas).";
  } else if (item.id === "ecc0d8c5-f11e-5cc8-808a-23ae0e977e51") {
    fundamento = "Direitos Humanos: Princípio 9 do PBUFAF/ONU (proibição de disparos letais contra fugitivos desarmados sem perigo iminente).";
  } else if (item.id === "f9d8bbe3-400a-5eef-b7d0-f555550b61c8") {
    fundamento = "Língua Portuguesa: regras de uso do acento indicativo de crase antes de pronomes de tratamento.";
  }

  plan.correcoesAlternativas.push({
    id: altC.id,
    questao_id: q.id,
    prompt_versao: q.prompt_versao,
    letra: "C",
    valor_anterior: altC.correta,
    valor_correto: targetAltC_correta,
    motivo: `Correção do gabarito estruturado da alternativa C para ${targetAltC_correta ? "CORRETO" : "INCORRETO"}.`,
    fundamento_juridico: fundamento
  });

  plan.correcoesAlternativas.push({
    id: altE.id,
    questao_id: q.id,
    prompt_versao: q.prompt_versao,
    letra: "E",
    valor_anterior: altE.correta,
    valor_correto: targetAltE_correta,
    motivo: `Correção do gabarito estruturado da alternativa E para ${targetAltE_correta ? "CORRETO" : "INCORRETO"}.`,
    fundamento_juridico: fundamento
  });
}

// Populate Questoes Corrections (Explanation Header & Text Standardization)
for (const me of meMismatches) {
  const q = questoes.find(x => x.id === me.id);
  let novaExplicacao = q.explicacao;
  let fundamento = "";

  if (me.id === "81068fd6-5909-5227-a008-27faaa4f07aa") {
    // Question #18: Língua Portuguesa - Concordância Nominal
    novaExplicacao = `GABARITO: Letra A.\n\nJustificativa pedagógica e gramatical:\nNa oração 'Havia bastantes policiais convocados para o plantão extraordinário de carnaval', a palavra 'bastantes' atua como pronome adjetivo indefinido (com valor de 'muitos'), devendo concordar obrigatoriamente em número com o substantivo 'policiais' a que se refere. Além disso, o verbo 'haver' é impessoal com sentido de existir e permanece corretamente no singular ('Havia').\n\nAnálise das demais alternativas:\n- As outras alternativas apresentam erros de concordância nominal ou verbal.`;
    fundamento = "Língua Portuguesa: 'bastante' como pronome adjetivo concorda em número com o substantivo determinado ('bastantes policiais').";
  } else {
    // The other 17 questions: prefix the correct letter cleanly "GABARITO: Letra [DB]. "
    const oldPrefixMatch = q.explicacao.match(/^GABARITO:\s*(.*)/is);
    if (oldPrefixMatch) {
      novaExplicacao = `GABARITO: Letra ${me.letraDB}.\n\n${oldPrefixMatch[1].trim()}`;
    } else {
      novaExplicacao = `GABARITO: Letra ${me.letraDB}.\n\n${q.explicacao.trim()}`;
    }
    fundamento = "Padronização do cabeçalho da explicação para 'GABARITO: Letra X', eliminando ambiguidade de parsing heurístico e preservando o gabarito substantivo já correto no banco.";
  }

  plan.correcoesQuestoes.push({
    id: q.id,
    prompt_versao: q.prompt_versao,
    disciplina_id: q.disciplina_id,
    assunto_id: q.assunto_id,
    enunciado: q.enunciado,
    gabarito_db: me.letraDB,
    explicacao_anterior: q.explicacao,
    explicacao_corrigida: novaExplicacao,
    motivo: me.id === "81068fd6-5909-5227-a008-27faaa4f07aa" ? "Reescrita da explicação para justificar adequadamente a alternativa A e sanar cabeçalho incorreto B." : "Padronização do cabeçalho da explicação com a indicação explícita da letra correta.",
    fundamento_juridico: fundamento
  });
}

const outPlanPath = path.resolve(process.cwd(), "scripts/question_integrity_correction_plan.json");
fs.writeFileSync(outPlanPath, JSON.stringify(plan, null, 2));
console.log(`Plano de correção gerado com sucesso em: ${outPlanPath}`);
console.log(`Total de alternativas a atualizar: ${plan.correcoesAlternativas.length}`);
console.log(`Total de questões a atualizar: ${plan.correcoesQuestoes.length}`);
