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

export const rlmPart2 = [
  ce("rlm-b5-011", TAXONOMIA.assuntos.equivalencias_negacoes,
    "A proposição condicional 'Se o sistema de monitoramento detecta a intrusão cibernética, então os servidores são isolados da rede externa' é logicamente equivalente à proposição 'O sistema de monitoramento não detecta a intrusão cibernética ou os servidores são isolados da rede externa'.",
    true,
    "A equivalência lógica fundamental da condicional P -> Q é a disjunção ~P v Q. Negando o antecedente (~P: 'O sistema não detecta') e mantendo o consequente (Q: 'os servidores são isolados'), obtém-se perfeitamente a equivalência disjuntiva válida."),

  me("rlm-b5-012", TAXONOMIA.assuntos.diagramas_logicos,
    "Em uma unidade de operações especiais com 120 policiais, foi realizado um levantamento sobre três especializações táticas operacionais: Mergulho (M), Tiro de Precisão (T) e Paraquedismo (P). Os dados coletados apontaram que:\n- 60 policiais possuem especialização em Mergulho (M);\n- 50 policiais possuem especialização em Tiro de Precisão (T);\n- 45 policiais possuem especialização em Paraquedismo (P);\n- 20 possuem especialização em M e T;\n- 18 possuem especialização em M e P;\n- 15 possuem especialização em T e P;\n- 8 possuem as três especializações (M, T e P).\n\nCom base nessas informações, o número de policiais dessa unidade que NÃO possuem nenhuma dessas três especializações é igual a:",
    "A",
    [
      ["A", "10", "Correta. Pelo Princípio da Inclusão-Exclusão: |M u T u P| = (60 + 50 + 45) - (20 + 18 + 15) + 8 = 155 - 53 + 8 = 110. O número dos que não possuem nenhuma é 120 - 110 = 10."],
      ["B", "15", "Incorreta. Esquecimento de somar a tripla interseção."],
      ["C", "18", "Incorreta. Cálculo incorreto da soma das interseções duplas."],
      ["D", "22", "Incorreta."],
      ["E", "25", "Incorreta."]
    ],
    "Aplicando o Princípio da Inclusão-Exclusão para 3 conjuntos:\n|M u T u P| = |M| + |T| + |P| - |M inter T| - |M inter P| - |T inter P| + |M inter T inter P|\n|M u T u P| = 60 + 50 + 45 - 20 - 18 - 15 + 8 = 155 - 53 + 8 = 110 policiais com ao menos 1 especialização.\nTotal que não possui nenhuma: 120 - 110 = 10 policiais."),

  ce("rlm-b5-013", TAXONOMIA.assuntos.probabilidade,
    "Em um posto da PRF, a probabilidade de um motorista abordado com teste de etilômetro apresentar embriaguez ao volante é de 10% (0,10). Se 4 motoristas forem abordados de forma independente e aleatória, a probabilidade de exatamente um deles apresentar embriaguez é de 29,16%.",
    true,
    "Trata-se de uma Distribuição Binomial: n = 4 ensaios, k = 1 sucesso, probabilidade de sucesso p = 0,10 e fracasso q = 0,90. P(X = 1) = C(4, 1) * (0,1)^1 * (0,9)^3 = 4 * 0,1 * 0,729 = 0,2916 = 29,16%."),

  me("rlm-b5-014", TAXONOMIA.assuntos.analise_combinatoria,
    "Em um plantão de delegacia regional, os policiais civis são organizados em escalas mensais de acordo com o mês de aniversário para sorteio de folgas. Qual é o número mínimo de policiais civis que devem estar presentes na delegacia para garantir, com certeza matemática absoluta (Princípio das Gavetas de Dirichlet), que pelo menos 4 deles façam aniversário no mesmo mês do ano?",
    "B",
    [
      ["A", "36", "Incorreta. Com 36 policiais, pode haver exatamente 3 em cada um dos 12 meses."],
      ["B", "37", "Correta. Pelo Princípio da Casa dos Pombos: se houver 36 policiais (3 por mês), o 37º garantirá que um mês tenha 4 aniversariantes: (12 * 3) + 1 = 37."],
      ["C", "38", "Incorreta. 37 já é o número mínimo que garante."],
      ["D", "48", "Incorreta. 48 é o número para garantir 5 aniversariantes."],
      ["E", "49", "Incorreta."]
    ],
    "O ano possui 12 meses (as 'gavetas'). No pior cenário de distribuição uniforme, teríamos 3 policiais fazendo aniversário em cada um dos 12 meses, totalizando 12 * 3 = 36 policiais sem que nenhum mês alcance 4 aniversariantes. Adicionando mais 1 policial (o 37º), necessariamente esse policial cairá em um dos meses já com 3, garantindo pelo menos 4 aniversariantes no mesmo mês. Portanto, são necessários 37 policiais."),

  ce("rlm-b5-015", TAXONOMIA.assuntos.logica_proposicional,
    "A proposição lógica composta [(P v Q) -> (P ^ Q)] é uma contingência, isto é, sua tabela-verdade apresenta tanto valores 'V' quanto valores 'F', a depender das valorações lógicas de P e Q.",
    true,
    "Avaliando a tabela-verdade:\n- Se P=V e Q=V: (V v V) -> (V ^ V) = V -> V = V.\n- Se P=V e Q=F: (V v F) -> (V ^ F) = V -> F = F.\n- Se P=F e Q=V: (F v V) -> (F ^ V) = V -> F = F.\n- Se P=F e Q=F: (F v F) -> (F ^ F) = F -> F = V.\nComo a coluna resultante possui valores V e F, a proposição é de fato uma contingência."),

  me("rlm-b5-016", TAXONOMIA.assuntos.analise_combinatoria,
    "Uma mesa redonda de reuniões estratégicas na Superintendência da Polícia Federal possui 6 cadeiras idênticas e simetricamente dispostas. Seis delegados de polícia, incluindo os delegados Soares e Muniz, irão se sentar nessa mesa. De quantas maneiras distintas esses 6 delegados podem se acomodar ao redor da mesa de modo que os delegados Soares e Muniz fiquem sempre sentados em posições consecutivas (lado a lado)?",
    "B",
    [
      ["A", "24", "Incorreta."],
      ["B", "48", "Correta. Consideramos Soares e Muniz como um único bloco: restam 5 elementos na mesa circular. Permutação circular PC(5) = (5 - 1)! = 4! = 24. O bloco interno permuta entre si de 2! = 2 maneiras. Total = 24 * 2 = 48."],
      ["C", "120", "Incorreta. 120 é a permutação circular simples de todos os 6 sem restrição: (6-1)! = 120."],
      ["D", "240", "Incorreta."],
      ["E", "720", "Incorreta. 720 é a permutação linear 6!."]
    ],
    "Para permutações circulares com restrição de vizinhança:\n1) Trata-se o par (Soares e Muniz) como um único elemento 'bloco'. Com isso, temos 5 elementos ao redor da mesa circular.\n2) A permutação circular de 5 elementos é PC(5) = (5 - 1)! = 4! = 24.\n3) Como Soares e Muniz podem trocar de posição entre si dentro do bloco de 2! = 2 formas (Soares-Muniz ou Muniz-Soares), o total de disposições distintas é 24 * 2 = 48."),

  ce("rlm-b5-017", TAXONOMIA.assuntos.equivalencias_negacoes,
    "A negação lógica de uma proposição bicondicional 'P se e somente se Q' (P <-> Q) é logicamente equivalente à disjunção exclusiva 'Ou P ou Q' (P _v_ Q).",
    true,
    "A bicondicional (P <-> Q) é verdadeira quando P e Q possuem o mesmo valor lógico (ambas V ou ambas F). Sua negação ~(P <-> Q) será verdadeira exatamente quando P e Q tiverem valores lógicos distintos (uma V e outra F), o que define com exatidão a disjunção exclusiva (P _v_ Q)."),

  me("rlm-b5-018", TAXONOMIA.assuntos.probabilidade,
    "Em um laboratório de perícia forense, um teste químico para detecção de resíduos de pólvora em suspeitos possui sensibilidade de 90% (detecta resíduo quando ele realmente existe) e especificidade de 95% (resultado negativo quando não há resíduo). Em um determinado grupo de 1.000 pessoas abordadas nas imediações de um tiroteio, sabe-se que 20 pessoas de fato dispararam armas de fogo (prevalência de 2%). Se uma pessoa desse grupo é selecionada ao acaso e o teste químico pericial dá POSITIVO, a probabilidade de que essa pessoa tenha de fato efetuado o disparo é de aproximadamente:",
    "B",
    [
      ["A", "90,0%", "Incorreta. Ignora a taxa de falsos positivos na população majoritária."],
      ["B", "26,9%", "Correta. P(D|+) = (0,02 * 0,90) / (0,02 * 0,90 + 0,98 * 0,05) = 0,018 / (0,018 + 0,049) = 0,018 / 0,067 = 18/67 ≈ 26,86%."],
      ["C", "45,0%", "Incorreta."],
      ["D", "72,5%", "Incorreta."],
      ["E", "85,4%", "Incorreta."]
    ],
    "Cálculo pelo Teorema de Bayes:\n1) População: 1.000 pessoas. Dispararam (D) = 20 (2%), Não Dispararam (~D) = 980 (98%).\n2) Verdadeiros Positivos: 20 * 0,90 = 18 pessoas.\n3) Falsos Positivos: 980 * (1 - 0,95) = 980 * 0,05 = 49 pessoas.\n4) Total de testes positivos: 18 + 49 = 67 pessoas.\n5) Probabilidade de ter disparado dado teste positivo: P(D|+) = 18 / 67 ≈ 0,26865 = 26,86% (aproximadamente 26,9%)."),

  ce("rlm-b5-019", TAXONOMIA.assuntos.diagramas_logicos,
    "Considere as seguintes premissas de um argumento:\nPremissa 1: 'Todo perito criminal é aprovado em concurso público rigoroso.'\nPremissa 2: 'Alguns indivíduos aprovados em concurso público rigoroso atuam na Polícia Federal.'\nConclusão: 'Portanto, todo perito criminal atua na Polícia Federal.'\nNessa situação, o argumento apresentado é válido sob o aspecto formal da lógica de predicados.",
    false,
    "O argumento é INVÁLIDO (falácia formal do termo médio não distribuído). O fato de todo perito ser aprovado em concurso e alguns aprovados atuarem na PF não garante que os peritos estejam contidos no conjunto dos policiais federais; eles podem perfeitamente integrar a parcela dos concursados que atua nas Polícias Civis dos Estados ou em outros órgãos."),

  me("rlm-b5-020", TAXONOMIA.assuntos.logica_proposicional,
    "Considere verdadeiras as quatro premissas a seguir relativas a uma operação policial:\n1. Se o agente Rodrigo participa da equipe de invasão, então o capitão Marcos coordena o cerco tático.\n2. Se o capitão Marcos coordena o cerco tático, então a viatura blindada é acionada.\n3. A viatura blindada não é acionada ou o helicóptero de apoio realiza voo rasante.\n4. Sabe-se que o helicóptero de apoio NÃO realizou voo rasante.\n\nCom base exclusivamente nessas premissas, conclui-se de forma logicamente necessária que:",
    "C",
    [
      ["A", "O capitão Marcos coordenou o cerco tático.", "Incorreta. Conclui-se que Marcos NÃO coordenou o cerco."],
      ["B", "A viatura blindada foi acionada.", "Incorreta. Conclui-se que a viatura blindada NÃO foi acionada."],
      ["C", "O agente Rodrigo NÃO participou da equipe de invasão e o capitão Marcos NÃO coordenou o cerco tático.", "Correta. Dedução direta por Modus Tollens encadeado."],
      ["D", "O agente Rodrigo participou da equipe de invasão.", "Incorreta. Rodrigo não participou."],
      ["E", "A viatura blindada foi acionada e o agente Rodrigo participou da invasão.", "Incorreta. Ambas são falsas."]
    ],
    "Cadeia dedutiva:\n1) Da premissa 4: ~Helicóptero = V (Helicóptero realizou voo = F).\n2) Da premissa 3: (~Blindada v Helicóptero) = V. Como Helicóptero = F, para a disjunção ser verdadeira temos ~Blindada = V (A viatura blindada NÃO foi acionada).\n3) Da premissa 2: (Marcos -> Blindada) = V. Como Blindada = F, por Modus Tollens temos ~Marcos = V (Marcos NÃO coordena o cerco).\n4) Da premissa 1: (Rodrigo -> Marcos) = V. Como Marcos = F, por Modus Tollens temos ~Rodrigo = V (Rodrigo NÃO participa da invasão).\nLogo, conclui-se com certeza que o agente Rodrigo não participou da invasão e o capitão Marcos não coordenou o cerco.")
];
