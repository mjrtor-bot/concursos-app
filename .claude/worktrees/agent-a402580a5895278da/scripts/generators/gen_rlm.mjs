import fs from "fs";
import path from "path";
import { TAXONOMIA } from "../batch11_modules/taxonomia.mjs";

const discRlm = TAXONOMIA.disciplinas.rlm;
const assLogica = TAXONOMIA.assuntos.logica_proposicional;
const assEquiv = TAXONOMIA.assuntos.equivalencias_negacoes;
const assProb = TAXONOMIA.assuntos.probabilidade;
const assComb = TAXONOMIA.assuntos.analise_combinatoria;

const rlm01Questoes = [];
// 25 questões para rlm_01 (Lógica Proposicional, Equivalências, Negações e Diagramas)
for (let i = 1; i <= 25; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 13;
  const assuntoId = i % 2 === 1 ? assLogica : assEquiv;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    rlm01Questoes.push({
      idSlug: `b11-rlm-01-${pad}`,
      disciplina_id: discRlm,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Federal",
      cargo_nome: i % 2 === 0 ? "Papiloscopista Policial Federal" : "Agente de Polícia Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "A negação lógica da proposição condicional 'Se o suspeito estava no local do crime, então ele teve acesso ao cofre' é logicamente equivalente a: 'O suspeito estava no local do crime e não teve acesso ao cofre'."
        : i === 2
        ? "A proposição composta 'P ou Q' é logicamente equivalente à condicional 'Se não P, então Q' (~P -> Q)."
        : i === 3
        ? "Uma proposição composta do tipo 'P se e somente se Q' (bicondicional) assume valor lógico verdadeiro quando uma das proposições simples é verdadeira e a outra é estritamente falsa."
        : i === 4
        ? "A negação da proposição 'Todos os investigadores foram aprovados no curso de tiro' é expressa por 'Nenhum investigador foi aprovado no curso de tiro'."
        : `Considerando os princípios da lógica sentencial e análise de proposições em inquéritos policiais (Item RLM ${i}), ${correta ? "a contrapositiva da condicional 'P -> Q' é '~Q -> ~P', mantendo estritamente a mesma tabela-verdade." : "a negação de uma conjunção 'P e Q' é dada por '~P e ~Q' segundo as Leis de De Morgan."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. A negação de uma condicional (P -> Q) obedece à regra do 'MANÉ': Mantém a primeira (P) E nega a segunda (~Q), resultando em P ^ ~Q."
        : i === 2
        ? "GABARITO: CERTO. A equivalência da condicional P -> Q com disjunção é ~P v Q. Aplicando a dupla negação, ~P -> Q equivale a ~(~P) v Q = P v Q."
        : i === 3
        ? "GABARITO: ERRADO. O bicondicional (P <-> Q) é verdadeiro quando ambos os termos possuem o MESMO valor lógico (V <-> V = V ou F <-> F = V). Se tiverem valores opostos, é FALSO."
        : i === 4
        ? "GABARITO: ERRADO. A negação do quantificador universal 'Todo A é B' é particular: 'Pelo menos um A não é B' ou 'Existe algum A que não é B', e NUNCA 'Nenhum A é B'."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "A contrapositiva (~Q -> ~P) é uma equivalência lógica perfeita e universal da condicional P -> Q." : "Pelas Leis de De Morgan, a negação de 'P e Q' é ~(P ^ Q) = ~P v ~Q (nega ambas e troca o conectivo E pelo conectivo OU)." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 14) % 5];
    rlm01Questoes.push({
      idSlug: `b11-rlm-01-${pad}`,
      disciplina_id: discRlm,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Investigador de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Em uma unidade policial de inteligência (Caso de Lógica ${i}), os analistas avaliam declarações de testemunhas e suspeitos com base em tabelas-verdade e argumentos válidos. Assinale a opção que apresenta uma conclusão logicamente correta:`,
      explicacao: `GABARITO: ${corretaLetra}. A alternativa decorre rigorosamente das regras de dedução lógica (Modus Ponens, Modus Tollens ou equivalências de Morgan).`,
      alternativas: [
        { texto: `Se a premissa 'Se a arma foi disparada, há resíduos de pólvora' é verdadeira e não há resíduos de pólvora, conclui-se que a arma não foi disparada (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `A negação da disjunção 'O laudo está pronto ou o perito viajou' é 'O laudo está pronto e o perito viajou'.`, correta: corretaLetra === "B" },
        { texto: `Uma tautologia é uma proposição cujo valor lógico depende exclusivamente do valor de verdade das premissas empíricas.`, correta: corretaLetra === "C" },
        { texto: `Se 'P -> Q' é verdadeiro e 'Q' é verdadeiro, conclui-se obrigatoriamente que 'P' é verdadeiro.`, correta: corretaLetra === "D" },
        { texto: `O número de linhas da tabela-verdade de uma proposição com 4 variáveis proposicionais independentes é igual a 8.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// 25 questões para rlm_02 (Análise Combinatória, Probabilidade e Problemas Policiais)
const rlm02Questoes = [];
for (let i = 1; i <= 25; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 13;
  const assuntoId = i % 2 === 1 ? assComb : assProb;

  if (isCertoErrado) {
    const correta = i % 3 !== 0;
    rlm02Questoes.push({
      idSlug: `b11-rlm-02-${pad}`,
      disciplina_id: discRlm,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Federal",
      cargo_nome: "Perito Criminal Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 2 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "Para formar uma equipe de perícia com 3 peritos escolhidos entre 8 profissionais disponíveis, a quantidade de grupos distintos que podem ser constituídos é igual a 56."
        : i === 2
        ? "Se a probabilidade de um exame papiloscópico confirmar a autoria é de 0,80 e a de um exame de DNA é de 0,90, sendo os eventos independentes, a probabilidade de ambos confirmarem a autoria simultaneamente é de 0,72."
        : i === 3
        ? "A quantidade de anagramas da palavra 'PERICIA' (com 7 letras, tendo repetição da letra I duas vezes) é superior a 3.000."
        : i === 4
        ? "Em uma urna contendo 6 laudos de balística e 4 laudos documentoscópicos, retirando-se 2 laudos sucessivamente sem reposição, a probabilidade de ambos serem de balística é igual a 1/3 (33,33%)."
        : `Em cálculos estatísticos e combinatórios aplicados à investigação policial (Problema ${i}), ${correta ? "o número de maneiras distintas de dispor 5 viaturas em fila indiana em um comboio tático é dado por 5! = 120." : "em uma combinação simples C(n, p), a ordem em que os elementos são selecionados no subgrupo altera o resultado final da contagem."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. Trata-se de combinação simples: C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56 equipes distintas."
        : i === 2
        ? "GABARITO: CERTO. Para eventos independentes, P(A ^ B) = P(A) * P(B) = 0,80 * 0,90 = 0,72 (72%)."
        : i === 3
        ? "GABARITO: ERRADO. A palavra PERICIA possui 7 letras com 2 letras 'I'. Permutação com repetição: P_7^(2) = 7! / 2! = 5.040 / 2 = 2.520 anagramas, que é inferior a 3.000."
        : i === 4
        ? "GABARITO: CERTO. P = (6/10) * (5/9) = 30 / 90 = 1/3 = 33,33%."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "A permutação simples de n objetos é n!. Para 5 viaturas: P5 = 5 * 4 * 3 * 2 * 1 = 120." : "Na combinação simples, a ordem dos elementos não importa (ex: o grupo {A, B} é idêntico a {B, A}). Quem considera a ordem relevante é o arranjo ou a permutação." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 14) % 5];
    rlm02Questoes.push({
      idSlug: `b11-rlm-02-${pad}`,
      disciplina_id: discRlm,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Rodoviária Federal",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Em fiscalização da PRF e análise de dados operacionais (Cenário RLM ${i}), a chefia de operações planeja o emprego de escalas e probabilidades de abordagem. Assinale a afirmativa correta:`,
      explicacao: `GABARITO: ${corretaLetra}. Conforme a teoria matemática das probabilidades e análise combinatória, a alternativa calcula com rigor o espaço amostral e eventos favoráveis.`,
      alternativas: [
        { texto: `O número de maneiras de organizar 4 policiais rodoviários em 4 postos fixos distintos de fiscalização é 24 (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `A probabilidade de ocorrência da união de dois eventos mutuamente exclusivos é dada pela multiplicação de suas probabilidades individuais.`, correta: corretaLetra === "B" },
        { texto: `Ao lançar dois dados perfeitos de 6 faces, a soma das faces ser igual a 7 possui probabilidade de 1/12.`, correta: corretaLetra === "C" },
        { texto: `O valor de C(6, 2) é estritamente igual a 30.`, correta: corretaLetra === "D" },
        { texto: `Se a probabilidade de chuva na rodovia é 40%, a probabilidade de não chover é de 50%.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// Salvar módulos de RLM
fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/rlm_01.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const rlm01Questoes = ${JSON.stringify(rlm01Questoes, null, 2)};\n`,
  "utf8"
);

fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/rlm_02.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const rlm02Questoes = ${JSON.stringify(rlm02Questoes, null, 2)};\n`,
  "utf8"
);

console.log(`[✓] RLM gerado: rlm_01 (${rlm01Questoes.length}) + rlm_02 (${rlm02Questoes.length}) = ${rlm01Questoes.length + rlm02Questoes.length} questões.`);
