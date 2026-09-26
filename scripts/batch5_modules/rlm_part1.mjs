import { TAXONOMIA } from "./taxonomia.mjs";

const ce = (idSlug, assunto_id, enunciado, correta, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.rlm,
  assunto_id,
  banca_nome: "CEBRASPE",
  orgao_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Polícia Federal" : "Polícia Rodoviária Federal",
  cargo_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Agente de Polícia Federal" : "Policial Rodoviário Federal",
  ano: 2025,
  tipo: "certo_errado",
  dificuldade: "dificil",
  enunciado,
  alternativas: [
    { letra: "C", texto: "Certo", correta, explicacao_especifica: correta ? "Correto. A dedução lógica e os cálculos matemáticos estão rigorosamente exatos." : "Incorreto. A dedução lógica ou o cálculo matemático contém erro." },
    { letra: "E", texto: "Errado", correta: !correta, explicacao_especifica: !correta ? "Correto. A proposição comete equívoco de equivalência, negação ou cálculo probabilístico." : "Incorreto. A assertiva reflete a correta aplicação dos teoremas lógicos." }
  ],
  explicacao: `Gabarito: ${correta ? "Certo" : "Errado"}. ${explicacao}`
});

const me = (idSlug, assunto_id, enunciado, corretaLetra, alternativas, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.rlm,
  assunto_id,
  banca_nome: "FGV",
  orgao_nome: "Polícia Civil",
  cargo_nome: "Investigador de Polícia",
  ano: 2024,
  tipo: "multipla_escolha",
  dificuldade: "dificil",
  enunciado,
  alternativas: alternativas.map(([letra, texto, just]) => ({ letra, texto, correta: letra === corretaLetra, explicacao_especifica: just })),
  explicacao: `Gabarito: ${corretaLetra}. ${explicacao}`
});

export const rlmPart1 = [
  ce("rlm-b5-001", TAXONOMIA.assuntos.logica_proposicional,
    "Considere a proposição composta: 'Se o agente federal obtém o mandado judicial, então a busca domiciliar é realizada e as provas digitais são apreendidas'. A negação lógica dessa proposição é expressa corretamente por: 'O agente federal obtém o mandado judicial e a busca domiciliar não é realizada ou as provas digitais não são apreendidas'.",
    true,
    "A negação de uma condicional P -> (Q e R) é dada por P e ~(Q e R), que pelas Leis de De Morgan resulta em P e (~Q ou ~R). Mantém-se o antecedente e nega-se o consequente disjuntivamente."),

  me("rlm-b5-002", TAXONOMIA.assuntos.logica_proposicional,
    "Dada a proposição condicional: 'Se o suspeito mentiu no depoimento, então o laudo pericial apontou divergência', assinale a opção que apresenta uma proposição logicamente equivalente.",
    "A",
    [
      ["A", "Se o laudo pericial não apontou divergência, então o suspeito não mentiu no depoimento.", "Correta. É a contrapositiva clássica: P -> Q é equivalente a ~Q -> ~P."],
      ["B", "Se o suspeito não mentiu no depoimento, então o laudo pericial não apontou divergência.", "Incorreta. Falácia da negação do antecedente (~P -> ~Q)."],
      ["C", "Se o laudo pericial apontou divergência, então o suspeito mentiu no depoimento.", "Incorreta. Falácia da afirmação do consequente (Q -> P)."],
      ["D", "O suspeito mentiu no depoimento ou o laudo pericial não apontou divergência.", "Incorreta. A equivalência da condicional é ~P ou Q."],
      ["E", "O suspeito mentiu no depoimento e o laudo pericial apontou divergência.", "Incorreta. Trata-se de conjunção, não equivalente à condicional."]
    ],
    "Uma condicional do tipo P -> Q é logicamente equivalente à sua contrapositiva (~Q -> ~P) e também à disjunção (~P v Q). Portanto, 'Se o laudo pericial não apontou divergência, então o suspeito não mentiu' é a forma correta."),

  ce("rlm-b5-003", TAXONOMIA.assuntos.logica_proposicional,
    "A negação lógica da proposição quantificada 'Todo policial federal atua com estrita observância aos direitos fundamentais' é dada por 'Nenhum policial federal atua com estrita observância aos direitos fundamentais'.",
    false,
    "A negação de 'Todo A é B' não é 'Nenhum A é B', mas sim 'Algum A não é B' (ou 'Existe pelo menos um policial federal que não atua com estrita observância aos direitos fundamentais')."),

  me("rlm-b5-004", TAXONOMIA.assuntos.analise_combinatoria,
    "Uma equipe tática de operações especiais da Polícia Federal deve ser formada por exatamente 5 agentes, sendo 3 peritos em cibernética e 2 atiradores de precisão. O departamento dispõe de um grupo de 8 peritos em cibernética e 6 atiradores de precisão qualificados. O número total de maneiras distintas de se formar essa equipe é igual a:",
    "C",
    [
      ["A", "56", "Incorreta. 56 é apenas C(8, 3)."],
      ["B", "150", "Incorreta. Cálculo incorreto."],
      ["C", "840", "Correta. C(8, 3) * C(6, 2) = 56 * 15 = 840."],
      ["D", "1.680", "Incorreta. Não se multiplica por 2."],
      ["E", "3.024", "Incorreta. Trata-se de combinação, não de arranjo com ordem."]
    ],
    "O número de maneiras de escolher 3 peritos entre 8 é C(8,3) = (8*7*6)/(3*2*1) = 56. O número de maneiras de escolher 2 atiradores entre 6 é C(6,2) = (6*5)/(2*1) = 15. Pelo Princípio Fundamental da Contagem: 56 * 15 = 840 equipes distintas."),

  ce("rlm-b5-005", TAXONOMIA.assuntos.analise_combinatoria,
    "Em uma delegacia de polícia, uma senha de cofre de segurança deve ser criada com 4 dígitos numéricos distintos seguidos de 2 letras distintas escolhidas entre as 26 letras do alfabeto. O número total de senhas possíveis que podem ser criadas é superior a 3.000.000.",
    true,
    "Para os dígitos numéricos: 10 * 9 * 8 * 7 = 5.040. Para as letras: 26 * 25 = 650. Total de senhas = 5.040 * 650 = 3.276.000. Como 3.276.000 > 3.000.000, o item está Certo."),

  me("rlm-b5-006", TAXONOMIA.assuntos.probabilidade,
    "Em um lote de 20 fuzis apreendidos em uma operação policial, exatamente 4 apresentam defeito no mecanismo de disparo e os demais 16 estão em perfeito estado de funcionamento. Se 2 fuzis forem selecionados aleatoriamente e simultaneamente (sem reposição) para perícia balística, a probabilidade de que pelo menos um dos fuzis selecionados apresente defeito é de:",
    "B",
    [
      ["A", "12/19", "Incorreta."],
      ["B", "7/19", "Correta. P(nenhum defeito) = C(16,2)/C(20,2) = 120/190 = 12/19. Logo, P(pelo menos um) = 1 - 12/19 = 7/19."],
      ["C", "4/20", "Incorreta. Cálculo com reposição de evento simples."],
      ["D", "1/5", "Incorreta."],
      ["E", "3/19", "Incorreta."]
    ],
    "O total de pares possíveis é C(20, 2) = 190. O número de pares sem defeito (ambos perfeitos) é C(16, 2) = 120. A probabilidade de nenhum ter defeito é 120/190 = 12/19. A probabilidade de pelo menos um apresentar defeito é 1 - 12/19 = 7/19."),

  ce("rlm-b5-007", TAXONOMIA.assuntos.logica_proposicional,
    "A proposição composta [(P -> Q) ^ ~Q] -> ~P é uma tautologia, ou seja, possui valor lógico 'Verdadeiro' independentemente dos valores lógicos atribuídos às proposições simples P e Q.",
    true,
    "Trata-se da formalização do clássico argumento Modus Tollens: se P implica Q e Q é falso, então P é necessariamente falso. A implicação de premissas consistentes para a conclusão é uma tautologia lógica universal."),

  me("rlm-b5-008", TAXONOMIA.assuntos.probabilidade,
    "Em um posto de fiscalização da Polícia Rodoviária Federal, 60% dos veículos abordados são caminhões de carga e 40% são automóveis de passeio. Sabe-se que 5% dos caminhões de carga apresentam excesso de peso e 1% dos automóveis de passeio apresentam irregularidades documentais graves. Se um veículo é abordado aleatoriamente e constatado como irregular/infrator, a probabilidade de que esse veículo seja um caminhão de carga é de aproximadamente:",
    "D",
    [
      ["A", "60,0%", "Incorreta."],
      ["B", "75,0%", "Incorreta."],
      ["C", "82,5%", "Incorreta."],
      ["D", "88,2%", "Correta. Teorema de Bayes: P(Caminhão|Infração) = (0,60 * 0,05) / (0,60*0,05 + 0,40*0,01) = 0,030 / (0,030 + 0,004) = 0,030 / 0,034 = 30/34 ≈ 88,24%."],
      ["E", "94,1%", "Incorreta."]
    ],
    "P(C) = 0,60, P(A) = 0,40. P(I|C) = 0,05, P(I|A) = 0,01. Probabilidade total de infração P(I) = (0,60 * 0,05) + (0,40 * 0,01) = 0,030 + 0,004 = 0,034. Pelo Teorema de Bayes: P(C|I) = (0,60 * 0,05) / 0,034 = 0,030 / 0,034 = 30/34 ≈ 88,24%."),

  ce("rlm-b5-009", TAXONOMIA.assuntos.analise_combinatoria,
    "O número de anagramas distintos da palavra 'POLICIAL' que começam pela letra 'P' e terminam pela letra 'L' é igual a 720.",
    false,
    "A palavra POLICIAL tem 8 letras: P, O, L, I, C, I, A, L (com 2 'I' e 2 'L'). Fixando P na primeira posição e um L na última, restam 6 posições internas para as letras O, L, I, C, I, A. Temos 6 letras com repetição de 2 'I': P_6^(2) = 6! / 2! = 720 / 2 = 360 anagramas. O item afirma 720, logo está Errado."),

  me("rlm-b5-010", TAXONOMIA.assuntos.logica_proposicional,
    "Três suspeitos de um crime — André, Bruno e Carlos — prestaram depoimento à autoridade policial. Sabe-se que apenas um deles é culpado e que exatamente um deles disse a verdade em sua declaração:\n- André declarou: 'Bruno é o culpado.'\n- Bruno declarou: 'Eu sou inocente.'\n- Carlos declarou: 'André é o culpado.'\n\nCom base nessas informações, quem é o culpado e quem disse a verdade, respectivamente?",
    "D",
    [
      ["A", "André é o culpado e Bruno disse a verdade.", "Incorreta. Se André fosse culpado, haveria duas verdades (Bruno e Carlos)."],
      ["B", "Carlos é o culpado e Carlos disse a verdade.", "Incorreta. Se Carlos fosse culpado, quem diria a verdade seria Bruno, não Carlos."],
      ["C", "André é o culpado e Carlos disse a verdade.", "Incorreta. Se André fosse culpado, Bruno também estaria dizendo a verdade."],
      ["D", "Bruno é o culpado e André disse a verdade.", "Correta. Se Bruno é o culpado: André diz a verdade ('Bruno é o culpado' = V), Bruno mente ('Eu sou inocente' = F) e Carlos mente ('André é o culpado' = F). Há exatamente 1 culpado (Bruno) e exatamente 1 declaração verdadeira (André)."],
      ["E", "Carlos é o culpado e André disse a verdade.", "Incorreta. Se Carlos fosse culpado, André estaria mentindo."]
    ],
    "Análise dos cenários de culpa:\n1) Se André é culpado: André mente (F), Bruno fala a verdade (V), Carlos fala a verdade (V) -> 2 declarações verdadeiras (contraria a premissa de apenas 1 verdade).\n2) Se Carlos é culpado: André mente (F), Bruno fala a verdade (V), Carlos mente (F) -> 1 verdade (Bruno) e 1 culpado (Carlos), o que não corresponde a nenhuma alternativa correta.\n3) Se Bruno é culpado: André fala a verdade (V), Bruno mente (F), Carlos mente (F) -> exatamente 1 verdade (André) e 1 culpado (Bruno). Portanto, a alternativa correta é a letra D.")
];
