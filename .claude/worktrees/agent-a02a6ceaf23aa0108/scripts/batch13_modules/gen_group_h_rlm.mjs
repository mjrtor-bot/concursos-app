import { DISCIPLINAS, ASSUNTOS, criarQuestaoCE, criarQuestaoME, writeModuleFile } from "./helpers.mjs";

// ==============================================================
// M19: RLM — PROPOSIÇÕES, CONECTIVOS E EQUIVALÊNCIAS (20 questões)
// ==============================================================
const m19_data = [
  {
    tipo: "CE",
    slug: "l13-rlm-prop-001-conceito-proposicao-sentencas-abertas",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal",
    dificuldade: "facil",
    enunciado: "Considere as seguintes frases: I. 'O agente lavrou o auto de prisão em flagrante.'; II. 'Quem foi o responsável pelo disparo de arma de fogo?'; III. 'Arquive o inquérito policial imediatamente!'. Do ponto de vista da lógica sentencial clássica, apenas o item I constitui uma proposição lógica, pois as sentenças interrogativas (item II) e imperativas (item III) não admitem julgamento como verdadeiro ou falso.",
    explicacao: "GABARITO: CERTO. Proposições são orações declarativas com sentido completo às quais se pode atribuir um valor de verdade (V ou F). Interrogações, exclamações e ordens não são proposições.",
    gabaritoCerto: true,
    conceito: "Conceito de Proposição Lógica e Sentenças Não Proposicionais",
    habilidade: "Diferenciar orações declarativas valoráveis de sentenças interrogativas e imperativas",
    tese: "Apenas orações declarativas com valor-verdade V ou F constituem proposições lógicas",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-002-negacao-condicional-regra-mane",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "medio",
    enunciado: "A negação lógica da proposição condicional 'Se o suspeito dirigir embriagado, então ele terá sua CNH recolhida' é logicamente equivalente a: 'O suspeito dirige embriagado e não tem sua CNH recolhida'.",
    explicacao: "GABARITO: CERTO. A negação de P -> Q é dada por P ^ ~Q (Mantém a primeira E Nega a segunda).",
    gabaritoCerto: true,
    conceito: "Negação lógica da condicional: ~(P -> Q) <=> P ^ ~Q",
    habilidade: "Aplicar a regra de negação de proposições condicionais",
    tese: "A negação de P -> Q equivale à conjunção do antecedente com a negação do consequente",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-003-leis-de-morgan-negacao-conjuncao",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Investigador de Polícia",
    dificuldade: "facil",
    enunciado: "De acordo com as Leis de De Morgan, a negação lógica da proposição composta 'O perito colheu as impressões digitais e o escrivão digitou o termo de depoimento' é: 'O perito não colheu as impressões digitais ou o escrivão não digitou o termo de depoimento'.",
    explicacao: "GABARITO: CERTO. Lei de De Morgan: ~(P ^ Q) <=> ~P v ~Q (nega ambas as proposições e troca o conectivo 'e' pelo 'ou').",
    gabaritoCerto: true,
    conceito: "Leis de De Morgan: Negação da Conjunção ~(P ^ Q) <=> ~P v ~Q",
    habilidade: "Aplicar equivalências lógicas para negação de conjunções",
    tese: "A negação de uma conjunção é a disjunção inclusiva das negações das parcelas",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-004-equivalencia-contrapositiva-condicional",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "medio",
    enunciado: "A proposição condicional 'Se a arma periciada for compatível com o projétil, então o suspeito esteve na cena do crime' é logicamente equivalente à sua contrapositiva: 'Se o suspeito não esteve na cena do crime, então a arma periciada não é compatível com o projétil'.",
    explicacao: "GABARITO: CERTO. A equivalência da contrapositiva estabelece que P -> Q é estritamente equivalente a ~Q -> ~P.",
    gabaritoCerto: true,
    conceito: "Equivalência Lógica da Contrapositiva: (P -> Q) <=> (~Q -> ~P)",
    habilidade: "Reconhecer e aplicar a contrapositiva em inferências lógicas",
    tese: "Inverter e negar antecedente e consequente preserva a tabela-verdade da condicional",
    nivel: "compreender"
  },
  {
    tipo: "ME",
    slug: "l13-rlm-prop-005-equivalencia-condicional-disjuncao",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "FGV", orgao: "Polícia Civil", cargo: "Escrivão de Polícia Civil",
    dificuldade: "medio",
    enunciado: "Assinale a alternativa que apresenta uma proposição logicamente equivalente a: 'Se o policial porta colete balístico, então ele está protegido durante a operação'.",
    explicacao: "GABARITO: B. Pelo método do 'Neymar' / equivalência da disjunção: (P -> Q) <=> (~P v Q). Logo: 'O policial não porta colete balístico ou ele está protegido durante a operação'.",
    alternativas: [
      { letra: "A", texto: "Se o policial não porta colete balístico, então ele não está protegido durante a operação.", correta: false, explicacao_especifica: "Incorreta. Esta é a inversa (~P -> ~Q), que não é equivalente." },
      { letra: "B", texto: "O policial não porta colete balístico ou ele está protegido durante a operação.", correta: true, explicacao_especifica: "Correta. Aplicação exata da equivalência (P -> Q) <=> (~P v Q)." },
      { letra: "C", texto: "O policial porta colete balístico e não está protegido durante a operação.", correta: false, explicacao_especifica: "Incorreta. Esta é a negação da condicional, não sua equivalência." },
      { letra: "D", texto: "Se o policial está protegido durante a operação, então ele porta colete balístico.", correta: false, explicacao_especifica: "Incorreta. Esta é a recíproca (Q -> P), que não é equivalente." },
      { letra: "E", texto: "O policial não porta colete balístico se e somente se estiver desprotegido.", correta: false, explicacao_especifica: "Incorreta. Bicondicional altera a tabela-verdade da relação causal." }
    ],
    conceito: "Equivalência lógica entre condicional e disjunção: (P -> Q) <=> (~P v Q)",
    habilidade: "Transformar estruturas condicionais em disjunções lógicas preservando a verdade",
    tese: "A condicional P -> Q equivale à disjunção ~P v Q (nega a primeira ou mantém a segunda)",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-006-tautologia-tabela-verdade-sempre-verdadeira",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "medio",
    enunciado: "A proposição composta representada pela fórmula lógica `(P -> Q) v (P ^ ~Q)` é uma tautologia, visto que sua tabela-verdade assume exclusivamente o valor lógico verdadeiro (V) para todas as combinações possíveis de valores-verdade das proposições simples P e Q.",
    explicacao: "GABARITO: CERTO. Se P -> Q for falsa (caso em que P é V e Q é F), então P ^ ~Q será necessariamente verdadeira. Como a operação final é uma disjunção (v), a fórmula resultará sempre em Verdadeiro (V), caracterizando uma tautologia.",
    gabaritoCerto: true,
    conceito: "Definição e Verificação de Tautologia em Tabelas-Verdade",
    habilidade: "Analisar expressões compostas e verificar a universalidade de seu valor lógico",
    tese: "Uma fórmula cuja disjunção engloba a condicional e sua exata negação é sempre tautológica",
    nivel: "analisar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-007-negacao-quantificador-universal-todo",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Delegado de Polícia Civil",
    dificuldade: "facil",
    enunciado: "A negação lógica da sentença com quantificador universal 'Todo delegado de polícia concluiu o curso superior de bacharel em Direito' é expressa corretamente por: 'Pelo menos um delegado de polícia não concluiu o curso superior de bacharel em Direito'.",
    explicacao: "GABARITO: CERTO. A negação de 'Todo A é B' é 'Existe/Algum/Pelo menos um A que não é B' (PEA + NÃO). Não se nega 'todo' com 'nenhum'.",
    gabaritoCerto: true,
    conceito: "Negação de Quantificadores Lógicos: Universal (Todo) vs Existencial (Algum não)",
    habilidade: "Identificar a negação estrita de quantificadores universais",
    tese: "A negação de 'Todo A é B' exige apenas um contraexemplo: 'Existe algum A que não é B'",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-008-tabela-verdade-disjuncao-exclusiva-xor",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "facil",
    enunciado: "A proposição com disjunção exclusiva (conectivo 'ou... ou', P v_ Q) será verdadeira se, e somente se, exatamente uma das proposições componentes for verdadeira e a outra for falsa, resultando em valor falso caso ambas sejam simultaneamente verdadeiras ou ambas falsas.",
    explicacao: "GABARITO: CERTO. A disjunção exclusiva exige alternância de valores lógicos: V com F dá V, F com V dá V; V com V dá F e F com F dá F.",
    gabaritoCerto: true,
    conceito: "Tabela-Verdade da Disjunção Exclusiva (XOR)",
    habilidade: "Reconhecer as condições de verdade da disjunção exclusiva",
    tese: "A disjunção exclusiva é verdadeira somente quando as proposições têm valores lógicos opostos",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-009-leis-de-morgan-negacao-disjuncao",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Investigador de Polícia",
    dificuldade: "facil",
    enunciado: "A negação lógica da proposição 'A viatura patrulha a rodovia ou o radar registra o excesso de velocidade' é: 'A viatura não patrulha a rodovia e o radar não registra o excesso de velocidade'.",
    explicacao: "GABARITO: CERTO. Segunda Lei de De Morgan: ~(P v Q) <=> ~P ^ ~Q (nega ambas e substitui 'ou' por 'e').",
    gabaritoCerto: true,
    conceito: "Leis de De Morgan: Negação da Disjunção ~(P v Q) <=> ~P ^ ~Q",
    habilidade: "Aplicar a negação da disjunção inclusiva",
    tese: "A negação de P v Q é a conjunção das negações ~P ^ ~Q",
    nivel: "compreender"
  },
  {
    tipo: "ME",
    slug: "l13-rlm-prop-010-silogismo-diagramas-venn-validade-argumento",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Vunesp", orgao: "Polícia Civil", cargo: "Delegado de Polícia Civil",
    dificuldade: "medio",
    enunciado: "Considere as seguintes premissas de um argumento dedutivo:\nPremissa 1: Todos os agentes da equipe tática são exímios atiradores.\nPremissa 2: Nenhum exímio atirador é negligente no manuseio de armamento.\nCom base estritamente nessas premissas, qual conclusão lógica é necessariamente válida?",
    explicacao: "GABARITO: D. Se Equipe Tática (T) está contido em Exímios Atiradores (A) e a interseção de A com Negligentes (N) é vazia (A interseção N = vazio), então a interseção de T com N também é necessariamente vazia. Logo, 'Nenhum agente da equipe tática é negligente no manuseio de armamento'.",
    alternativas: [
      { letra: "A", texto: "Alguns agentes da equipe tática são negligentes no manuseio de armamento.", correta: false, explicacao_especifica: "Incorreta. Contradiz frontalmente as premissas." },
      { letra: "B", texto: "Todos os exímios atiradores pertencem à equipe tática.", correta: false, explicacao_especifica: "Incorreta. Falácia de inversão do quantificador universal." },
      { letra: "C", texto: "Qualquer pessoa que não seja negligente pertence obrigatoriamente à equipe tática.", correta: false, explicacao_especifica: "Incorreta. Extrapolação inválida do diagrama." },
      { letra: "D", texto: "Nenhum agente da equipe tática é negligente no manuseio de armamento.", correta: true, explicacao_especifica: "Correta. Conclusão silogística categórica perfeitamente válida." },
      { letra: "E", texto: "Pelo menos um exímio atirador é negligente no manuseio de armas.", correta: false, explicacao_especifica: "Incorreta. Nega diretamente a premissa 2." }
    ],
    conceito: "Silogismo Categórico e Validade de Argumentos via Diagramas de Conjuntos",
    habilidade: "Inferir conclusões dedutivas necessárias a partir de premissas universais",
    tese: "Se todo T é A e nenhum A é N, então necessariamente nenhum T é N",
    nivel: "analisar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-011-bicondicional-equivalencia-dupla-implicacao",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal",
    dificuldade: "medio",
    enunciado: "A proposição bicondicional 'O mandado de busca é expedido se e somente se houver fundada suspeita' (P <-> Q) é logicamente equivalente à conjunção de duas condicionais recíprocas: '(Se o mandado é expedido, então há fundada suspeita) e (Se há fundada suspeita, então o mandado é expedido)' ((P -> Q) ^ (Q -> P)).",
    explicacao: "GABARITO: CERTO. A bicondicional P <-> Q é a conjunção da ida e da volta: (P -> Q) ^ (Q -> P).",
    gabaritoCerto: true,
    conceito: "Equivalência Lógica da Bicondicional: (P <-> Q) <=> (P -> Q) ^ (Q -> P)",
    habilidade: "Decompor proposições bicondicionais em pares de condicionais conjugadas",
    tese: "A bicondicional equivale à conjunção mútua de duas implicações",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-012-negacao-quantificador-nenhum",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Escrivão de Polícia Civil",
    dificuldade: "facil",
    enunciado: "A negação lógica da afirmação 'Nenhum suspeito colaborou com as investigações' é dada por: 'Pelo menos um suspeito colaborou com as investigações'.",
    explicacao: "GABARITO: CERTO. A negação de 'Nenhum A é B' é 'Algum A é B' / 'Pelo menos um A é B' / 'Existe A que é B'.",
    gabaritoCerto: true,
    conceito: "Negação de Quantificador Universal Negativo (Nenhum)",
    habilidade: "Reconhecer a quebra do quantificador 'nenhum' pela existência de um elemento",
    tese: "A negação de 'Nenhum A é B' é 'Algum A é B' (existência afirmativa)",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-013-contradicao-logica-sempre-falsa",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "medio",
    enunciado: "Uma proposição composta é dita uma contradição (ou proposição contrafactual) quando sua tabela-verdade resulta invariavelmente no valor lógico falso (F) para todas as possíveis valorações de suas proposições componentes, a exemplo da expressão `P ^ ~P`.",
    explicacao: "GABARITO: CERTO. Contradição é a sentença cuja tabela-verdade é inteiramente Falsidade em todas as linhas possíveis.",
    gabaritoCerto: true,
    conceito: "Definição de Contradição Lógica e Princípio da Não Contradição",
    habilidade: "Identificar sentenças lógicas contraditórias pelo valor F uniforme",
    tese: "A conjunção de uma proposição com sua própria negação (P ^ ~P) é sempre uma contradição",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-014-regra-modus-ponens-deducao-valida",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "medio",
    enunciado: "A regra de inferência denominada Modus Ponens estabelece que, se a premissa condicional 'P -> Q' é verdadeira e a premissa 'P' (antecedente) também é verdadeira, conclui-se de forma válida e necessária que 'Q' (consequente) é verdadeiro.",
    explicacao: "GABARITO: CERTO. Modus Ponens (afirmação do antecedente): premissa 1 (P -> Q) e premissa 2 (P) implicam necessariamente na conclusão Q.",
    gabaritoCerto: true,
    conceito: "Regra de Inferência Dedutiva: Modus Ponens",
    habilidade: "Validar argumentos dedutivos clássicos em investigações lógicas",
    tese: "A afirmação do antecedente em uma condicional verdadeira garante a verdade do consequente",
    nivel: "compreender"
  },
  {
    tipo: "ME",
    slug: "l13-rlm-prop-015-modus-tollens-negacao-consequente",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Instituto AOCP", orgao: "Polícia Civil", cargo: "Delegado de Polícia Civil",
    dificuldade: "medio",
    enunciado: "Considere as seguintes afirmações verdadeiras em uma investigação policial:\n1. Se o réu estava no local do crime no horário dos fatos, então seu aparelho celular conectou-se à antena da região.\n2. O laudo pericial telemático comprovou que o aparelho celular do réu NÃO se conectou à antena da região no horário dos fatos.\nCom base exclusivamente nessas informações, qual é a dedução lógica necessária?",
    explicacao: "GABARITO: A. Aplicação da regra do Modus Tollens (negação do consequente): temos P -> Q e ~Q. Logo, conclui-se validamente ~P ('O réu não estava no local do crime no horário dos fatos').",
    alternativas: [
      { letra: "A", texto: "O réu não estava no local do crime no horário dos fatos.", correta: true, explicacao_especifica: "Correta. Modus Tollens deduz ~P a partir de (P -> Q) e ~Q." },
      { letra: "B", texto: "O réu esteve necessariamente no local do crime com outro telefone celular.", correta: false, explicacao_especifica: "Incorreta. Conclusão especulativa sem respaldo nas premissas." },
      { letra: "C", texto: "O laudo pericial telemático continha um erro material insuperável.", correta: false, explicacao_especifica: "Incorreta. As premissas foram postas como verdadeiras." },
      { letra: "D", texto: "Nada se pode deduzir a respeito da presença do réu no local do crime.", correta: false, explicacao_especifica: "Incorreta. Modus Tollens gera dedução formalmente necessária." },
      { letra: "E", texto: "O réu confessou a prática do delito espontaneamente.", correta: false, explicacao_especifica: "Incorreta. Premissa inexistente no argumento." }
    ],
    conceito: "Regra de Inferência Modus Tollens (Negação do Consequente)",
    habilidade: "Aplicar o Modus Tollens para derivar conclusões negativas necessárias",
    tese: "Dada a condicional P -> Q e a falsidade de Q (~Q), conclui-se obrigatoriamente ~P",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-016-contingencia-tabela-verdade-mista",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Investigador de Polícia",
    dificuldade: "facil",
    enunciado: "Na lógica sentencial, uma proposição composta é classificada como uma contingência quando sua tabela-verdade contém pelo menos um resultado verdadeiro (V) e pelo menos um resultado falso (F), dependendo dos valores atribuídos às suas proposições simples componentes.",
    explicacao: "GABARITO: CERTO. Contingência é a fórmula que não é nem tautologia (100% V) nem contradição (100% F).",
    gabaritoCerto: true,
    conceito: "Conceito de Contingência Proposicional",
    habilidade: "Classificar fórmulas com valores lógicos mistos na tabela-verdade",
    tese: "Fórmulas que apresentam valores V e F na tabela-verdade são contingências",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-017-quantidade-linhas-tabela-verdade-2-elevado-n",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal",
    dificuldade: "facil",
    enunciado: "A tabela-verdade de uma proposição composta formada por exatamente 4 proposições simples distintas (P, Q, R e S) possui 16 linhas no total, calculada pela fórmula clássica 2^n, em que n representa o número de proposições atômicas.",
    explicacao: "GABARITO: CERTO. O número de linhas da tabela-verdade é 2^n. Para n=4, temos 2^4 = 16 linhas.",
    gabaritoCerto: true,
    conceito: "Cálculo do Número de Linhas de uma Tabela-Verdade (2^n)",
    habilidade: "Calcular o espaço de combinações lógicas de proposições compostas",
    tese: "Uma tabela-verdade com n proposições simples possui 2^n linhas",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-018-condicional-falsa-apenas-v-implica-f",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "facil",
    enunciado: "A proposição condicional 'P -> Q' é falsa em uma única hipótese: quando o antecedente (P) é verdadeiro e o consequente (Q) é falso (V -> F); em todos os demais casos (V -> V, F -> V e F -> F), o valor lógico da condicional é verdadeiro.",
    explicacao: "GABARITO: CERTO. A condicional só é falsa no caso 'Vera Fischer' (V -> F = F). Se a primeira for falsa, a condicional é sempre verdadeira.",
    gabaritoCerto: true,
    conceito: "Tabela-Verdade da Proposição Condicional (P -> Q)",
    habilidade: "Identificar as condições de falsidade exclusiva da condicional",
    tese: "A condicional só é falsa quando o antecedente for verdadeiro e o consequente for falso",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-prop-019-falacia-afirmacao-consequente-invalida",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "dificil",
    enunciado: "Considere o argumento: 'Se choveu durante a madrugada, o asfalto da rodovia ficou molhado. O asfalto da rodovia está molhado; portanto, necessariamente choveu durante a madrugada'. Do ponto de vista da lógica formal, trata-se de um argumento dedutivamente inválido, caracterizando a falácia formal da afirmação do consequente, pois o asfalto poderia ter sido molhado por outros fatores (como um caminhão-pipa).",
    explicacao: "GABARITO: CERTO. A afirmação do consequente ((P -> Q) e Q => P) é uma falácia formal, pois a verdade de Q não exige que P tenha ocorrido.",
    gabaritoCerto: true,
    conceito: "Falácias Formais: Falácia da Afirmação do Consequente",
    habilidade: "Identificar vícios de raciocínio dedutivo em laudos e relatórios periciais",
    tese: "Afirmar o consequente não autoriza inferir a verdade do antecedente em lógica dedutiva",
    nivel: "analisar"
  },
  {
    tipo: "ME",
    slug: "l13-rlm-prop-020-negacao-bicondicional-disjuncao-exclusiva",
    assuntoId: ASSUNTOS.RLM_LOGICA_PROPOSICIONAL,
    banca: "FGV", orgao: "Polícia Civil", cargo: "Delegado de Polícia Civil",
    dificuldade: "medio",
    enunciado: "Qual é a proposição logicamente equivalente à negação de uma proposição bicondicional `~(P <-> Q)`?",
    explicacao: "GABARITO: C. A negação da bicondicional (P <-> Q) é exatamente a disjunção exclusiva (P v_ Q, 'ou P ou Q'), pois a bicondicional exige valores iguais e sua negação exige valores lógicos opostos.",
    alternativas: [
      { letra: "A", texto: "A conjunção simples `~P ^ ~Q`.", correta: false, explicacao_especifica: "Incorreta. Conjunção de negações não equivale à negação da bicondicional." },
      { letra: "B", texto: "A condicional simples `~P -> ~Q`.", correta: false, explicacao_especifica: "Incorreta. Condicional inversa não equivale à negação da bicondicional." },
      { letra: "C", texto: "A disjunção exclusiva `ou P ou Q` (P v_ Q).", correta: true, explicacao_especifica: "Correta. `~(P <-> Q)` tem a mesmíssima tabela-verdade da disjunção exclusiva `P v_ Q`." },
      { letra: "D", texto: "A tautologia universal `P v ~P`.", correta: false, explicacao_especifica: "Incorreta. A negação da bicondicional é uma contingência." },
      { letra: "E", texto: "A disjunção inclusiva `P v Q`.", correta: false, explicacao_especifica: "Incorreta. A disjunção inclusiva é verdadeira quando ambos são V, onde a bicondicional também é V." }
    ],
    conceito: "Equivalência entre a Negação da Bicondicional e a Disjunção Exclusiva",
    habilidade: "Reconhecer as relações de negação entre bicondicionais e disjunções exclusivas",
    tese: "A negação de P <-> Q equivale à disjunção exclusiva P v_ Q",
    nivel: "compreender"
  }
];

// ==============================================================
// M20: RLM — COMBINATÓRIA, PROBABILIDADE E CONJUNTOS (20 questões)
// ==============================================================
const m20_data = [
  {
    tipo: "CE",
    slug: "l13-rlm-comb-001-principio-multiplicativo-pfc-senhas",
    assuntoId: ASSUNTOS.RLM_ANALISE_COMBINATORIA,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal",
    dificuldade: "facil",
    enunciado: "Para acessar o cofre de evidências da delegacia, cada perito deve cadastrar uma senha composta por 3 letras distintas do alfabeto de 26 letras seguidas de 2 dígitos distintos de 0 a 9. Pelo Princípio Fundamental da Contagem, o número total de senhas distintas possíveis é igual a 26 x 25 x 24 x 10 x 9 = 1.404.000 senhas.",
    explicacao: "GABARITO: CERTO. Letras distintas: 26 x 25 x 24 = 15.600. Dígitos distintos: 10 x 9 = 90. Total = 15.600 x 90 = 1.404.000.",
    gabaritoCerto: true,
    conceito: "Princípio Fundamental da Contagem (PFC) com elementos distintos",
    habilidade: "Calcular o total de combinações de senhas e acessos em investigações",
    tese: "A quantidade de configurações distintas é o produto das escolhas sucessivas disponíveis",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-002-combinacao-simples-comissao-investigadores",
    assuntoId: ASSUNTOS.RLM_ANALISE_COMBINATORIA,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Investigador de Polícia",
    dificuldade: "medio",
    enunciado: "Uma delegacia dispõe de 8 investigadores e deseja formar uma equipe de plantão composta por 3 policiais. Como a ordem de escolha dos investigadores não altera a composição da equipe, o total de equipes distintas que podem ser formadas é dado pela combinação simples C(8, 3) = (8 x 7 x 6) / (3 x 2 x 1) = 56 equipes.",
    explicacao: "GABARITO: CERTO. A ordem não importa na formação de comissões/equipes: C(8,3) = 8! / (3! 5!) = 56.",
    gabaritoCerto: true,
    conceito: "Combinação Simples na formação de equipes e comissões policiais",
    habilidade: "Calcular agrupamentos não ordenados mediante fórmula de combinação simples",
    tese: "Agrupamentos onde a ordem dos elementos é irrelevante são calculados por combinação simples",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-003-arranjo-simples-cargos-distintos-ordem",
    assuntoId: ASSUNTOS.RLM_ANALISE_COMBINATORIA,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "medio",
    enunciado: "Dentre 10 policiais rodoviários federais de um posto, devem ser escolhidos 3 para exercerem, respectivamente, as funções distintas de Chefe de Operações, Fiscal de Pista e Rádio-Operador. Como a ordem e a destinação funcional importam, o número de maneiras distintas de preencher esses cargos é dado pelo arranjo simples A(10, 3) = 10 x 9 x 8 = 720 maneiras.",
    explicacao: "GABARITO: CERTO. Quando a ordem/função importa, utiliza-se Arranjo Simples: A(10,3) = 10! / 7! = 720.",
    gabaritoCerto: true,
    conceito: "Arranjo Simples e diferenciação em relação à combinação simples",
    habilidade: "Identificar situações em que a ordem dos elementos gera configurações distintas",
    tese: "Quando a ordem dos elementos altera o resultado funcional, aplica-se o arranjo simples",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-004-permutacao-simples-anagramas-viaturas",
    assuntoId: ASSUNTOS.RLM_ANALISE_COMBINATORIA,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "facil",
    enunciado: "O número total de maneiras distintas de estacionar 5 viaturas policiais identificadas (V1, V2, V3, V4 e V5) em 5 vagas contíguas alinhadas em frente ao departamento é dado pela permutação simples P5 = 5! = 5 x 4 x 3 x 2 x 1 = 120 maneiras.",
    explicacao: "GABARITO: CERTO. Permutação simples de 5 elementos em 5 posições: P(5) = 5! = 120.",
    gabaritoCerto: true,
    conceito: "Permutação Simples de n elementos distintos (n!)",
    habilidade: "Calcular o número de disposições lineares de objetos em filas e vagas",
    tese: "A ordenação de n objetos distintos em n posições é dada por n!",
    nivel: "recordar"
  },
  {
    tipo: "ME",
    slug: "l13-rlm-comb-005-probabilidade-classica-amostragem-pericia",
    assuntoId: ASSUNTOS.RLM_PROBABILIDADE,
    banca: "FGV", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "medio",
    enunciado: "Em uma caixa de evidências apreendidas, há 12 invólucros plásticos idênticos, dos quais 4 contêm substância entorpecente pura e 8 contêm substância adulterada com pó neutro. Se um perito retirar aleatoriamente 2 invólucros sucessivamente e sem reposição, qual é a probabilidade de que ambos os invólucros retirados contenham substância entorpecente pura?",
    explicacao: "GABARITO: B. Primeira retirada: 4/12. Segunda retirada: 3/11. Probabilidade conjunta = (4/12) x (3/11) = (1/3) x (3/11) = 3/33 = 1/11.",
    alternativas: [
      { letra: "A", texto: "1/9", correta: false, explicacao_especifica: "Incorreta. Seria com reposição (4/12 x 4/12 = 1/9)." },
      { letra: "B", texto: "1/11", correta: true, explicacao_especifica: "Correta. (4/12) * (3/11) = 1/11." },
      { letra: "C", texto: "2/11", correta: false, explicacao_especifica: "Incorreta. Cálculo proporcional inadequado." },
      { letra: "D", texto: "1/3", correta: false, explicacao_especifica: "Incorreta. Esta é a probabilidade da primeira retirada isolada." },
      { letra: "E", texto: "4/33", correta: false, explicacao_especifica: "Incorreta. Erro na simplificação fracionária." }
    ],
    conceito: "Probabilidade Condicional e Eventos Sucessivos Sem Reposição",
    habilidade: "Calcular a probabilidade de eventos dependentes em retiradas sem reposição",
    tese: "A probabilidade de dois eventos sucessivos sem reposição é P(A) * P(B|A)",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-006-teoria-conjuntos-intersecao-diagrama-venn",
    assuntoId: ASSUNTOS.RLM_ESTRUTURAS_LOGICAS,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Escrivão de Polícia Civil",
    dificuldade: "medio",
    enunciado: "Em uma delegacia com 50 policiais, 30 participaram do curso de Tiro Tático (T), 25 participaram do curso de Negociação de Crises (N) e 10 participaram de ambos os cursos. Nesse cenário, o número de policiais que participaram de pelo menos um dos cursos é igual a 45, e exatamente 5 policiais não participaram de nenhum dos cursos.",
    explicacao: "GABARITO: CERTO. n(T U N) = n(T) + n(N) - n(T inter N) = 30 + 25 - 10 = 45. Nenhum curso = 50 - 45 = 5.",
    gabaritoCerto: true,
    conceito: "Teoria dos Conjuntos: Cardinalidade da União n(A U B) = n(A) + n(B) - n(A inter B)",
    habilidade: "Resolver problemas de contagem com Diagramas de Venn e exclusão de duplicidades",
    tese: "A união de dois conjuntos é a soma de suas cardinalidades menos a interseção",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-007-permutacao-com-repeticao-letras-policia",
    assuntoId: ASSUNTOS.RLM_ANALISE_COMBINATORIA,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Investigador de Polícia",
    dificuldade: "medio",
    enunciado: "O número total de anagramas distintos que podem ser formados com todas as 7 letras da palavra 'POLICIA' (que possui a letra 'I' repetida 2 vezes e as demais letras distintas) é igual a 7! / 2! = 5.040 / 2 = 2.520 anagramas.",
    explicacao: "GABARITO: CERTO. Palavra POLICIA tem 7 letras com a letra I repetida 2 vezes: P_7^(2) = 7! / 2! = 2.520.",
    gabaritoCerto: true,
    conceito: "Permutação com Repetição (n! / k!)",
    habilidade: "Calcular o número de anagramas de palavras contendo elementos repetidos",
    tese: "A repetição de elementos exige a divisão do fatorial total pelo fatorial das repetições",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-008-probabilidade-complementar-pelo-menos-um",
    assuntoId: ASSUNTOS.RLM_PROBABILIDADE,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "medio",
    enunciado: "A probabilidade de um radar capturar um veículo infrator em uma blitz é de 80% (0,8). Se três veículos infratores passarem sucessivamente pelo radar de forma independente, a probabilidade de que pelo menos um deles seja capturado é igual a 1 - (0,2)^3 = 1 - 0,008 = 0,992 (ou 99,2%).",
    explicacao: "GABARITO: CERTO. P(pelo menos um) = 1 - P(nenhum). P(nenhum ser capturado) = (0,2)^3 = 0,008. Logo, P = 1 - 0,008 = 0,992 (99,2%).",
    gabaritoCerto: true,
    conceito: "Probabilidade do Evento Complementar: P(ao menos um) = 1 - P(nenhum)",
    habilidade: "Calcular probabilidades em múltiplos ensaios independentes via evento complementar",
    tese: "O evento complementar de 'ao menos um sucesso' é a ocorrência de 'nenhum sucesso'",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-009-principio-casa-dos-pombos-gavetas-dirichlet",
    assuntoId: ASSUNTOS.RLM_ESTRUTURAS_LOGICAS,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "medio",
    enunciado: "Em uma delegacia especializada trabalham 13 policiais civis. Pelo Princípio da Casa dos Pombos (ou Princípio das Gavetas de Dirichlet), pode-se garantir com certeza absoluta que pelo menos dois desses policiais fazem aniversário no mesmo mês do ano.",
    explicacao: "GABARITO: CERTO. O ano possui 12 meses (casas) e há 13 policiais (pombos). Como 13 > 12, pelo menos um mês conterá no mínimo 2 aniversariantes.",
    gabaritoCerto: true,
    conceito: "Princípio da Casa dos Pombos (Princípio das Gavetas de Dirichlet)",
    habilidade: "Aplicar garantias dedutivas de coincidência por contagem exaustiva de categorias",
    tese: "Distribuir n+1 elementos em n categorias garante que ao menos uma categoria terá 2+ elementos",
    nivel: "compreender"
  },
  {
    tipo: "ME",
    slug: "l13-rlm-comb-010-probabilidade-uniao-eventos-nao-mutuamente-exclusivos",
    assuntoId: ASSUNTOS.RLM_PROBABILIDADE,
    banca: "Vunesp", orgao: "Polícia Civil", cargo: "Delegado de Polícia Civil",
    dificuldade: "medio",
    enunciado: "Em uma blitz policial com 100 veículos abordados, constatou-se que 20 estavam com IPVA atrasado, 15 estavam com pneus carecas e 5 apresentavam ambas as irregularidades simultaneamente. Se um desses 100 veículos for sorteado ao acaso para fiscalização detalhada, qual é a probabilidade de ele apresentar pelo menos uma dessas duas infrações?",
    explicacao: "GABARITO: C. P(A U B) = P(A) + P(B) - P(A inter B) = 20/100 + 15/100 - 5/100 = 30/100 = 30% = 0,30.",
    alternativas: [
      { letra: "A", texto: "35%", correta: false, explicacao_especifica: "Incorreta. Somou sem subtrair a interseção (20 + 15 = 35)." },
      { letra: "B", texto: "25%", correta: false, explicacao_especifica: "Incorreta. Subtraiu a interseção duas vezes." },
      { letra: "C", texto: "30%", correta: true, explicacao_especifica: "Correta. P(A U B) = 20% + 15% - 5% = 30%." },
      { letra: "D", texto: "40%", correta: false, explicacao_especifica: "Incorreta. Valor superior à união real dos conjuntos." },
      { letra: "E", texto: "5%", correta: false, explicacao_especifica: "Incorreta. Esta é a probabilidade da interseção exclusiva." }
    ],
    conceito: "Probabilidade da União de Eventos: P(A U B) = P(A) + P(B) - P(A inter B)",
    habilidade: "Calcular probabilidades em espaços amostrais com dupla ocorrência",
    tese: "A probabilidade da união deduz a probabilidade da interseção para evitar dupla contagem",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-011-combinacao-comissao-mista-homens-mulheres",
    assuntoId: ASSUNTOS.RLM_ANALISE_COMBINATORIA,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal",
    dificuldade: "medio",
    enunciado: "De um grupo de 6 policiais federais homens e 4 policiais federais mulheres, deseja-se constituir uma comissão de 4 membros contendo exatamente 2 homens e 2 mulheres. O número total de maneiras distintas de formar essa comissão é igual a C(6, 2) x C(4, 2) = 15 x 6 = 90 maneiras.",
    explicacao: "GABARITO: CERTO. Escolha dos 2 homens: C(6,2) = 15. Escolha das 2 mulheres: C(4,2) = 6. Pelo princípio multiplicativo: 15 x 6 = 90 comissões.",
    gabaritoCerto: true,
    conceito: "Combinação Simples Composta em Subgrupos Estratificados",
    habilidade: "Combinar seleções independentes em subconjuntos com restrições",
    tese: "A seleção de subgrupos independentes é obtida pelo produto das respectivas combinações",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-012-conjuntos-diferenca-a-menos-b",
    assuntoId: ASSUNTOS.RLM_ESTRUTURAS_LOGICAS,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Escrivão de Polícia Civil",
    dificuldade: "facil",
    enunciado: "Sejam o conjunto A formado por todos os crimes contra a pessoa e o conjunto B formado por todos os crimes que admitem fiança policial fixada pelo Delegado. A operação de diferença de conjuntos A - B representa o conjunto de todos os crimes contra a pessoa que NÃO admitem fiança fixada pelo Delegado de Polícia.",
    explicacao: "GABARITO: CERTO. A diferença A - B é o conjunto dos elementos que pertencem a A e não pertencem a B.",
    gabaritoCerto: true,
    conceito: "Operação de Diferença de Conjuntos (A - B)",
    habilidade: "Interpretar operações de teoria dos conjuntos aplicadas a classificações penais",
    tese: "A diferença A - B contém os elementos exclusivos de A que não integram B",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-013-probabilidade-condicional-formula-bayesiana",
    assuntoId: ASSUNTOS.RLM_PROBABILIDADE,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "dificil",
    enunciado: "A probabilidade condicional de ocorrência de um evento A, dado que um evento B já ocorreu com probabilidade não nula P(B) > 0, é calculada pela razão entre a probabilidade da interseção dos eventos e a probabilidade do evento condicionante, expressa pela fórmula P(A|B) = P(A inter B) / P(B).",
    explicacao: "GABARITO: CERTO. Definição formal e canônica de probabilidade condicional de Kolmogorov.",
    gabaritoCerto: true,
    conceito: "Definição Matemática de Probabilidade Condicional P(A|B)",
    habilidade: "Reconhecer a formulação analítica do espaço amostral reduzido",
    tese: "A probabilidade condicional ajusta o espaço amostral ao evento condicionante ocorrido",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-014-permutacao-circular-mesa-reunioes",
    assuntoId: ASSUNTOS.RLM_ANALISE_COMBINATORIA,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "medio",
    enunciado: "O número de maneiras distintas de dispor 6 delegados de polícia ao redor de uma mesa de reunião circular é dado pela permutação circular PC6 = (6 - 1)! = 5! = 120 maneiras, visto que rotações completas da mesa não geram novas posições relativas entre os membros.",
    explicacao: "GABARITO: CERTO. Permutação circular de n elementos: PC(n) = (n - 1)!. Para n=6, PC(6) = 5! = 120.",
    gabaritoCerto: true,
    conceito: "Permutação Circular: PC(n) = (n - 1)!",
    habilidade: "Calcular ordenações cíclicas eliminando equivalências rotacionais",
    tese: "Em arranjos circulares a fixação de uma referência reduz a contagem em 1 elemento ((n-1)!)",
    nivel: "aplicar"
  },
  {
    tipo: "ME",
    slug: "l13-rlm-comb-015-conjuntos-tres-conjuntos-venn-operacoes",
    assuntoId: ASSUNTOS.RLM_ESTRUTURAS_LOGICAS,
    banca: "FGV", orgao: "Polícia Civil", cargo: "Delegado de Polícia Civil",
    dificuldade: "dificil",
    enunciado: "Em uma força-tarefa contra o crime organizado com 80 agentes policiais:\n- 40 são especialistas em Armamento Pesado (A);\n- 35 são especialistas em Inteligência Cibernética (C);\n- 30 são especialistas em Perícia Financeira (F);\n- 15 dominam A e C;\n- 12 dominam A e F;\n- 10 dominam C e F;\n- 5 dominam as três especialidades (A, C e F).\nQuantos agentes dessa força-tarefa dominam pelo menos uma dessas três especialidades?",
    explicacao: "GABARITO: A. Fórmula de 3 conjuntos: n(A U C U F) = n(A) + n(C) + n(F) - [n(A n C) + n(A n F) + n(C n F)] + n(A n C n F) = 40 + 35 + 30 - (15 + 12 + 10) + 5 = 105 - 37 + 5 = 73 agentes.",
    alternativas: [
      { letra: "A", texto: "73 agentes.", correta: true, explicacao_especifica: "Correta. n(A U C U F) = 40 + 35 + 30 - 37 + 5 = 73." },
      { letra: "B", texto: "68 agentes.", correta: false, explicacao_especifica: "Incorreta. Esqueceu de somar a interseção tripla (+5)." },
      { letra: "C", texto: "80 agentes.", correta: false, explicacao_especifica: "Incorreta. Há 7 agentes que não dominam nenhuma das três." },
      { letra: "D", texto: "60 agentes.", correta: false, explicacao_especifica: "Incorreta. Erro na subtração das interseções duplas." },
      { letra: "E", texto: "78 agentes.", correta: false, explicacao_especifica: "Incorreta. Erro aritmético nas etapas intermediárias." }
    ],
    conceito: "Cardinalidade da União de Três Conjuntos pelo Princípio da Inclusão-Exclusão",
    habilidade: "Calcular união de múltiplos conjuntos com interseções duplas e triplas",
    tese: "A união de 3 conjuntos soma os unitários, subtrai as duplas e ressuma a tripla",
    nivel: "analisar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-016-probabilidade-eventos-independentes-multiplicacao",
    assuntoId: ASSUNTOS.RLM_PROBABILIDADE,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal",
    dificuldade: "facil",
    enunciado: "Dois eventos A e B são considerados estatisticamente independentes quando a ocorrência do evento B não altera a probabilidade de ocorrência do evento A, hipótese em que a probabilidade da ocorrência simultânea de ambos é dada pelo produto de suas probabilidades individuais: P(A inter B) = P(A) x P(B).",
    explicacao: "GABARITO: CERTO. Propriedade fundamental dos eventos independentes: P(A|B) = P(A) => P(A inter B) = P(A) * P(B).",
    gabaritoCerto: true,
    conceito: "Definição e Propriedade de Eventos Independentes em Probabilidade",
    habilidade: "Reconhecer a regra da multiplicação para eventos descorrelacionados",
    tese: "Eventos independentes têm probabilidade conjunta calculada pelo produto simples",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-017-fatorial-propriedades-zero-fatorial-um",
    assuntoId: ASSUNTOS.RLM_ANALISE_COMBINATORIA,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Investigador de Polícia",
    dificuldade: "facil",
    enunciado: "Na teoria da análise combinatória, o fatorial de um número natural n (denotado por n!) representa o produto de todos os inteiros positivos menores ou iguais a n, adotando-se por convenção matemática e consistência combinatória que 0! = 1 e 1! = 1.",
    explicacao: "GABARITO: CERTO. Definição axiomática fundamental: 0! = 1, 1! = 1, e n! = n * (n-1)!.",
    gabaritoCerto: true,
    conceito: "Definição e Propriedades da Função Fatorial (0! = 1)",
    habilidade: "Identificar os axiomas fundamentais da combinatória clássica",
    tese: "Por definição formal e consistência de agrupamentos vazios, 0! é igual a 1",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-018-probabilidade-soma-eventos-mutuamente-excludentes",
    assuntoId: ASSUNTOS.RLM_PROBABILIDADE,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "facil",
    enunciado: "Dois eventos são mutuamente excludentes quando não podem ocorrer simultaneamente em um mesmo experimento aleatório (sua interseção é o conjunto vazio, A inter B = vazio), sendo a probabilidade da ocorrência de um OU outro calculada pela soma direta de suas probabilidades: P(A U B) = P(A) + P(B).",
    explicacao: "GABARITO: CERTO. Quando eventos são mutuamente excludentes, P(A inter B) = 0, logo P(A U B) = P(A) + P(B).",
    gabaritoCerto: true,
    conceito: "Eventos Mutuamente Excludentes e Aditividade Direta da Probabilidade",
    habilidade: "Aplicar a soma direta de probabilidades quando a interseção é impossível",
    tese: "Eventos disjuntos têm probabilidade da união calculada pela simples soma das partes",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-rlm-comb-019-sequencias-logicas-padroes-progressao",
    assuntoId: ASSUNTOS.RLM_ESTRUTURAS_LOGICAS,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "medio",
    enunciado: "Considere a sequência lógica de códigos de investigação: 3, 7, 15, 31, 63, X. Seguindo o padrão de formação lógica em que cada termo subsequente é obtido pelo dobro do termo anterior somado a uma unidade (a_n = 2 * a_(n-1) + 1), o próximo termo X é corretamente igual a 127.",
    explicacao: "GABARITO: CERTO. Padrão: 3*2+1=7; 7*2+1=15; 15*2+1=31; 31*2+1=63; 63*2+1=127 (ou 2^(n+1) - 1).",
    gabaritoCerto: true,
    conceito: "Identificação de Padrões em Sequências Lógicas Numéricas",
    habilidade: "Deduzir a lei de formação recursiva de sequências numéricas",
    tese: "A aplicação da regra recursiva a_n = 2*a_(n-1) + 1 sobre 63 resulta exatamente em 127",
    nivel: "aplicar"
  },
  {
    tipo: "ME",
    slug: "l13-rlm-comb-020-combinatoria-distribuicao-casos-investigados",
    assuntoId: ASSUNTOS.RLM_ANALISE_COMBINATORIA,
    banca: "Vunesp", orgao: "Polícia Civil", cargo: "Investigador de Polícia",
    dificuldade: "medio",
    enunciado: "Um delegado precisa distribuir 5 inquéritos policiais distintos entre 5 escrivães de polícia, de modo que cada escrivão receba exatamente um inquérito. De quantas maneiras distintas essa distribuição pode ser realizada?",
    explicacao: "GABARITO: D. Trata-se de uma bijeção/permutação simples de 5 elementos: P5 = 5! = 5 x 4 x 3 x 2 x 1 = 120 maneiras.",
    alternativas: [
      { letra: "A", texto: "25 maneiras.", correta: false, explicacao_especifica: "Incorreta. Seria 5 x 5 (não considera redução de inquéritos)." },
      { letra: "B", texto: "60 maneiras.", correta: false, explicacao_especifica: "Incorreta. Erro aritmético de divisão." },
      { letra: "C", texto: "3.125 maneiras.", correta: false, explicacao_especifica: "Incorreta. Seria 5^5 com repetição irrestrita." },
      { letra: "D", texto: "120 maneiras.", correta: true, explicacao_especifica: "Correta. 5! = 120 maneiras distintas de distribuição um a um." },
      { letra: "E", texto: "15 maneiras.", correta: false, explicacao_especifica: "Incorreta. Seria combinação ou soma simples." }
    ],
    conceito: "Permutação Simples de Atribuições Um-a-Um (5! = 120)",
    habilidade: "Modelar problemas de alocação biunívoca de tarefas como permutações simples",
    tese: "A alocação de n itens distintos a n agentes sem repetição é calculada por n!",
    nivel: "aplicar"
  }
];

function buildModuleList(data, disciplinaId) {
  return data.map((item) => {
    if (item.tipo === "CE") {
      return criarQuestaoCE({
        slug: item.slug,
        disciplinaId,
        assuntoId: item.assuntoId,
        bancaNome: item.banca,
        orgaoNome: item.orgao,
        cargoNome: item.cargo,
        ano: 2026,
        dificuldade: item.dificuldade,
        enunciado: item.enunciado,
        explicacao: item.explicacao,
        gabaritoCerto: item.gabaritoCerto,
        conceitoPrincipal: item.conceito,
        habilidadeCobrada: item.habilidade,
        teseOuRegra: item.tese,
        nivelCognitivo: item.nivel,
      });
    } else {
      return criarQuestaoME({
        slug: item.slug,
        disciplinaId,
        assuntoId: item.assuntoId,
        bancaNome: item.banca,
        orgaoNome: item.orgao,
        cargoNome: item.cargo,
        ano: 2026,
        dificuldade: item.dificuldade,
        enunciado: item.enunciado,
        explicacao: item.explicacao,
        alternativas: item.alternativas,
        conceitoPrincipal: item.conceito,
        habilidadeCobrada: item.habilidade,
        teseOuRegra: item.tese,
        nivelCognitivo: item.nivel,
      });
    }
  });
}

export function generateGroupH() {
  const m19_qs = buildModuleList(m19_data, DISCIPLINAS.RLM);
  const m20_qs = buildModuleList(m20_data, DISCIPLINAS.RLM);

  writeModuleFile("m19_rlm_proposicoes_conectivos.mjs", "m19_questoes", m19_qs);
  writeModuleFile("m20_rlm_combinatoria_probabilidade.mjs", "m20_questoes", m20_qs);

  console.log(`[+] Grupo H gerado com sucesso: M19 (${m19_qs.length} q) e M20 (${m20_qs.length} q)`);
}

generateGroupH();
