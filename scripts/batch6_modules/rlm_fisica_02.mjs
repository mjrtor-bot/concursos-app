import { TAXONOMIA } from "./taxonomia.mjs";

export const rlmFisica02Questoes = [
  // Q21 - CEBRASPE / PRF - Equivalência Lógica da Condicional (Contrapositiva)
  {
    idSlug: "rlm-021",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.equivalencias_negacoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "A proposição \"Se o motorista conduzir veículo automotor sob a influência de álcool, então ele será autuado pela autoridade de trânsito\" é logicamente equivalente à proposição \"Se o motorista não for autuado pela autoridade de trânsito, então ele não conduziu veículo automotor sob a influência de álcool\".",
    explicacao: "GABARITO: CERTO. A proposição dada possui a estrutura condicional P → Q, cuja equivalência lógica fundamental é a sua contrapositiva (~Q → ~P), obtida invertendo-se a ordem das proposições e negando-se ambas. Como 'não ser autuado' (~Q) implica 'não ter conduzido sob efeito de álcool' (~P), a equivalência é perfeita e válida.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q22 - CEBRASPE / PRF - Negação da Condicional (Regra do Mantém e Nega)
  {
    idSlug: "rlm-022",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.equivalencias_negacoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A negação lógica da sentença \"Se a viatura policial estiver abastecida, então a equipe realizará o patrulhamento preventivo\" é \"A viatura policial não está abastecida ou a equipe não realizará o patrulhamento preventivo\".",
    explicacao: "GABARITO: ERRADO. A negação lógica de uma condicional da forma P → Q é dada por P ∧ ~Q (mantém-se a primeira parte E nega-se a segunda). Portanto, a negação correta é: \"A viatura policial está abastecida E a equipe não realizará o patrulhamento preventivo\". A proposição ~P ∨ ~Q apresentada no item não é a negação da condicional.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },

  // Q23 - FGV / PM - Leis de De Morgan (Negação de Conjunção)
  {
    idSlug: "rlm-023",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.equivalencias_negacoes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Em um relatório de ocorrência policial, o oficial relata a seguinte afirmação: \"O suspeito portava documento falso e desobedeceu à ordem de parada\". A negação lógica dessa afirmação é:",
    explicacao: "GABARITO: B. A afirmação tem a estrutura de uma conjunção: P ∧ Q. Pelas Leis de De Morgan, a negação de uma conjunção é a disjunção das negações: ~(P ∧ Q) ≡ ~P ∨ ~Q. Assim, nega-se a primeira parte, troca-se o conectivo 'e' pelo conectivo 'ou', e nega-se a segunda parte: \"O suspeito não portava documento falso OU não desobedeceu à ordem de parada\".",
    alternativas: [
      { letra: "A", texto: "O suspeito não portava documento falso e não desobedeceu à ordem de parada.", correta: false },
      { letra: "B", texto: "O suspeito não portava documento falso ou não desobedeceu à ordem de parada.", correta: true },
      { letra: "C", texto: "Se o suspeito portava documento falso, então não desobedeceu à ordem de parada.", correta: false },
      { letra: "D", texto: "O suspeito portava documento falso, mas não desobedeceu à ordem de parada.", correta: false },
      { letra: "E", texto: "O suspeito não portava documento falso se, e somente se, desobedeceu à ordem de parada.", correta: false }
    ]
  },

  // Q24 - VUNESP / PC-SP - Tabela-Verdade e Valoração Proposicional Composta
  {
    idSlug: "rlm-024",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.logica_proposicional,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere como referência os seguintes valores lógicos de proposições simples relativas a uma investigação policial:\n• p: \"O mandado de prisão preventiva foi expedido.\" (Valor lógico: Verdadeiro)\n• q: \"O investigado fugiu da comarca.\" (Valor lógico: Falso)\n• r: \"O aparelho celular foi apreendido.\" (Valor lógico: Verdadeiro)\n\nNessas condições, o valor lógico da proposição composta [(p ∧ ~q) → (q ∨ r)] ∧ (p ↔ r) é:",
    explicacao: "GABARITO: B. Passo a passo: 1) Proposição p = V, q = F, r = V. 2) Negação ~q = V. 3) Conjunção (p ∧ ~q) = V ∧ V = V. 4) Disjunção (q ∨ r) = F ∨ V = V. 5) Condicional [(p ∧ ~q) → (q ∨ r)] = V → V = V. 6) Bicondicional (p ↔ r) = V ↔ V = V. 7) Conjunção global: V ∧ V = Verdadeiro (V).",
    alternativas: [
      { letra: "A", texto: "Falso, pois a disjunção simples (q ∨ r) assume valor lógico falso.", correta: false },
      { letra: "B", texto: "Verdadeiro, pois todas as subestruturas lógicas avaliadas resultam em verdadeiro.", correta: true },
      { letra: "C", texto: "Falso, pois a condicional intermediária resulta em valor falso.", correta: false },
      { letra: "D", texto: "Falso, pois a bicondicional entre p e r é inconsistente.", correta: false },
      { letra: "E", texto: "Indeterminado, pois os valores de verdade dependem da ordem de precedência dos parênteses.", correta: false }
    ]
  },

  // Q25 - IBFC / GM - Equivalência entre Condicional e Disjunção (~P ∨ Q)
  {
    idSlug: "rlm-025",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.equivalencias_negacoes,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Em instrução normativa sobre o serviço operacional, consta a seguinte diretriz: \"Se o guarda municipal estiver escalado no turno noturno, então ele portará colete de proteção balística\". Essa proposição condicional é logicamente equivalente a:",
    explicacao: "GABARITO: A. A condicional P → Q possui como equivalência lógica por disjunção a fórmula ~P ∨ Q (nega-se a primeira parte OU mantém-se a segunda parte). Portanto: \"O guarda municipal não está escalado no turno noturno OU ele portará colete de proteção balística\".",
    alternativas: [
      { letra: "A", texto: "O guarda municipal não está escalado no turno noturno ou ele portará colete de proteção balística.", correta: true },
      { letra: "B", texto: "O guarda municipal está escalado no turno noturno e não portará colete de proteção balística.", correta: false },
      { letra: "C", texto: "Se o guarda municipal portar colete de proteção balística, então ele está escalado no turno noturno.", correta: false },
      { letra: "D", texto: "O guarda municipal não está escalado no turno noturno e não portará colete de proteção balística.", correta: false },
      { letra: "E", texto: "Se o guarda municipal não estiver escalado no turno noturno, então ele não portará colete de proteção balística.", correta: false }
    ]
  },

  // Q26 - CEBRASPE / PRF - Negação de Proposição Categórica com Quantificador Universal
  {
    idSlug: "rlm-026",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.diagramas_logicos,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "A negação lógica da proposição categórica \"Todo policial rodoviário federal utiliza equipamento de proteção individual durante as abordagens\" é \"Nenhum policial rodoviário federal utiliza equipamento de proteção individual durante as abordagens\".",
    explicacao: "GABARITO: ERRADO. A negação lógica de uma proposição universal afirmativa (\"Todo A é B\") não é a universal negativa (\"Nenhum A é B\"), mas sim uma proposição existencial com a negação do predicado: \"Existe pelo menos um policial rodoviário federal que não utiliza equipamento de proteção individual\" (ou \"Algum policial rodoviário federal não utiliza...\").",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },

  // Q27 - FGV / PM - Silogismo e Dedução Lógica Categórica
  {
    idSlug: "rlm-027",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.diagramas_logicos,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere como verdadeiras as seguintes premissas:\n1. Todos os membros do Grupo de Ações Táticas Especiais (GATE) são exímios atiradores.\n2. Alguns exímios atiradores são negociadores em situações de crise.\n3. O sargento Marcos é membro do GATE.\n\nA partir exclusivamente dessas premissas, é uma conclusão lógica e necessariamente verdadeira que:",
    explicacao: "GABARITO: B. Análise lógica: Como todos os membros do GATE são exímios atiradores (GATE ⊂ Atiradores) e Marcos é membro do GATE (Marcos ∈ GATE), conclui-se de forma necessária e categórica que o sargento Marcos é um exímio atirador. Como a segunda premissa afirma apenas que 'alguns' atiradores são negociadores (interseção não vazia, mas que não abrange a totalidade nem necessariamente o subconjunto GATE), não se pode garantir que Marcos seja negociador.",
    alternativas: [
      { letra: "A", texto: "O sargento Marcos é necessariamente um negociador em situações de crise.", correta: false },
      { letra: "B", texto: "O sargento Marcos é necessariamente um exímio atirador.", correta: true },
      { letra: "C", texto: "Todos os negociadores em situações de crise pertencem ao GATE.", correta: false },
      { letra: "D", texto: "Nenhum membro do GATE pode ser negociador em situações de crise.", correta: false },
      { letra: "E", texto: "O sargento Marcos não pode ser negociador em situações de crise.", correta: false }
    ]
  },

  // Q28 - VUNESP / PC-SP - Princípio Fundamental da Contagem (Códigos de Rádio Policial)
  {
    idSlug: "rlm-028",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.analise_combinatoria,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Perito Criminal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um sistema de comunicação segura da Polícia Civil codifica suas equipes operacionais com um código alfanumérico formado por 2 letras distintas (escolhidas entre as 26 letras do alfabeto) seguidas por 3 algarismos distintos (escolhidos entre os 10 algarismos de 0 a 9), como no padrão AB-123. A quantidade total de códigos distintos que podem ser criados nesse sistema é de:",
    explicacao: "GABARITO: C. Pelo Princípio Fundamental da Contagem (ou arranjos simples): 1) Escolha de 2 letras distintas entre 26: 26 × 25 = 650 maneiras. 2) Escolha de 3 algarismos distintos entre 10: 10 × 9 × 8 = 720 maneiras. 3) Total de combinações possíveis: 650 × 720 = 468.000 códigos distintos.",
    alternativas: [
      { letra: "A", texto: "324.000 códigos.", correta: false },
      { letra: "B", texto: "450.000 códigos.", correta: false },
      { letra: "C", texto: "468.000 códigos.", correta: true },
      { letra: "D", texto: "650.000 códigos.", correta: false },
      { letra: "E", texto: "676.000 códigos.", correta: false }
    ]
  },

  // Q29 - CEBRASPE / PRF - Combinação Simples em Composição de Equipes de Fiscalização
  {
    idSlug: "rlm-029",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.analise_combinatoria,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em uma delegacia da PRF, estão de plantão 6 policiais rodoviários federais do sexo masculino e 4 policiais rodoviárias federais do sexo feminino. Para uma operação de fiscalização de tráfego na rodovia, o chefe de equipe deve selecionar um grupo de 4 agentes composto por exatamente 2 homens e 2 mulheres. Nessa situação, o número de grupos distintos que podem ser formados é igual a 90.",
    explicacao: "GABARITO: CERTO. A ordem dos agentes no grupo não importa, caracterizando agrupamento por combinação simples: 1) Seleção dos homens: C(6, 2) = (6 × 5) / (2 × 1) = 30 / 2 = 15 maneiras. 2) Seleção das mulheres: C(4, 2) = (4 × 3) / (2 × 1) = 12 / 2 = 6 maneiras. 3) Total de grupos pelo princípio multiplicativo: 15 × 6 = 90 maneiras distintas.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q30 - IBFC / GM - Permutação com Elementos Adjacentes (Formação de Fila Operacional)
  {
    idSlug: "rlm-030",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.analise_combinatoria,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em uma solenidade de hasteamento da bandeira, 5 guardas municipais (Ana, Bruno, Carlos, Daniel e Eduardo) devem se posicionar em fila indiana. De quantas maneiras distintas esses 5 guardas podem se organizar na fila de modo que Ana e Bruno fiquem sempre juntos (lado a lado)?",
    explicacao: "GABARITO: C. Para calcular permutações com elementos adjacentes: 1) Considera-se o par {Ana, Bruno} como um único bloco/elemento. 2) Teremos então 4 elementos para permutar: [Ana-Bruno], Carlos, Daniel, Eduardo. A permutação de 4 elementos é P₄ = 4! = 4 × 3 × 2 × 1 = 24 maneiras. 3) Dentro do bloco, Ana e Bruno podem trocar de posição entre si de P₂ = 2! = 2 maneiras (Ana-Bruno ou Bruno-Ana). 4) Total de ordenações: 24 × 2 = 48 maneiras distintas.",
    alternativas: [
      { letra: "A", texto: "24 maneiras.", correta: false },
      { letra: "B", texto: "36 maneiras.", correta: false },
      { letra: "C", texto: "48 maneiras.", correta: true },
      { letra: "D", texto: "60 maneiras.", correta: false },
      { letra: "E", texto: "120 maneiras.", correta: false }
    ]
  },

  // Q31 - FGV / PM - Probabilidade Condicional e Teorema de Bayes em Triagem Forense
  {
    idSlug: "rlm-031",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.probabilidade,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em uma blitz de fiscalização de trânsito, a probabilidade a priori de um motorista abordado estar dirigindo embriagado é de 5% (0,05). Um etilômetro portátil de triagem rápida possui sensibilidade de 90% (probabilidade de dar positivo dado que o motorista está embriagado) e taxa de falso positivo de 10% (probabilidade de dar positivo dado que o motorista está sóbrio). Se um motorista testado aleatoriamente apresentar resultado POSITIVO no etilômetro de triagem, a probabilidade de ele estar REALMENTE embriagado é de aproximadamente:",
    explicacao: "GABARITO: C. Aplicando o Teorema de Bayes: 1) Eventos: E = embriagado [P(E) = 0,05], S = sóbrio [P(S) = 0,95]. 2) Probabilidades do teste: P(+|E) = 0,90 e P(+|S) = 0,10. 3) Probabilidade total de teste positivo P(+): P(+) = P(E)·P(+|E) + P(S)·P(+|S) = (0,05 · 0,90) + (0,95 · 0,10) = 0,045 + 0,095 = 0,140. 4) Probabilidade a posteriori P(E|+): P(E|+) = [P(E)·P(+|E)] / P(+) = 0,045 / 0,140 = 45 / 140 = 9 / 28 ≈ 0,3214 (32,1%).",
    alternativas: [
      { letra: "A", texto: "90,0%.", correta: false },
      { letra: "B", texto: "50,0%.", correta: false },
      { letra: "C", texto: "32,1%.", correta: true },
      { letra: "D", texto: "15,4%.", correta: false },
      { letra: "E", texto: "5,0%.", correta: false }
    ]
  },

  // Q32 - CEBRASPE / PRF - Probabilidade da União de Eventos (P(A ∪ B))
  {
    idSlug: "rlm-032",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.probabilidade,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Em uma operação temática da PRF em que 200 veículos foram fiscalizados, os policiais constataram que 60 veículos apresentavam pneus desgastados além do limite regulamentar, 40 veículos apresentavam defeito no sistema de iluminação e 20 veículos apresentavam simultaneamente ambas as irregularidades. Escolhendo-se aleatoriamente um dos 200 veículos fiscalizados, a probabilidade de que ele apresente pelo menos uma dessas duas irregularidades é de 40%.",
    explicacao: "GABARITO: CERTO. Pelo princípio da probabilidade da união de eventos: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Calculando o número de veículos com pelo menos uma infração: N(A ∪ B) = 60 + 40 - 20 = 80 veículos. A probabilidade é a razão entre os casos favoráveis e o total de casos: P(A ∪ B) = 80 / 200 = 40 / 100 = 40% (ou 0,40).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q33 - VUNESP / PM - Probabilidade Sucessiva sem Reposição (Balística Forense)
  {
    idSlug: "rlm-033",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.probabilidade,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em uma perícia de balística forense, um recipiente contém exatamente 12 estojos deflagrados de munição recolhidos em um local de crime, sendo 4 estojos de calibre 9mm e 8 estojos de calibre .40 S&W. Um perito retira aleatoriamente e sucessivamente, sem reposição, 2 estojos do recipiente. A probabilidade de que AMBOS os estojos retirados sejam de calibre 9mm é igual a:",
    explicacao: "GABARITO: B. No sorteio sucessivo sem reposição: 1) Probabilidade de o primeiro estojo ser 9mm: P(1º ser 9mm) = 4 / 12 = 1 / 3. 2) Tendo saído um de 9mm, restam 3 estojos de 9mm em um total de 11 estojos restantes. 3) Probabilidade de o segundo estojo ser 9mm: P(2º ser 9mm | 1º foi 9mm) = 3 / 11. 4) Probabilidade conjunta: P = (4 / 12) × (3 / 11) = (1 / 3) × (3 / 11) = 1 / 11.",
    alternativas: [
      { letra: "A", texto: "1 / 9.", correta: false },
      { letra: "B", texto: "1 / 11.", correta: true },
      { letra: "C", texto: "2 / 11.", correta: false },
      { letra: "D", texto: "4 / 33.", correta: false },
      { letra: "E", texto: "1 / 6.", correta: false }
    ]
  },

  // Q34 - CEBRASPE / PRF - Argumentação Lógica Válida e Regra de Modus Tollens
  {
    idSlug: "rlm-034",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.logica_proposicional,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Considere o seguinte argumento lógico:\nPremissa 1: Se o veículo transitou com velocidade superior à máxima em mais de 50%, então o condutor cometeu infração gravíssima com penalidade de suspensão do direito de dirigir.\nPremissa 2: O condutor não cometeu infração com penalidade de suspensão do direito de dirigir.\nConclusão: O veículo não transitou com velocidade superior à máxima em mais de 50%.\n\nNessa situação, o argumento apresentado é válido, fundamentado na regra clássica de inferência denominada Modus Tollens.",
    explicacao: "GABARITO: CERTO. O argumento possui a forma clássica: Premissa 1 (P → Q), Premissa 2 (~Q), Conclusão (~P). Esta regra de dedução válida é o Modus Tollens (modo que por negar, nega). Como a negação do consequente garante validamente a negação do antecedente, a conclusão decorre logicamente das premissas.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q35 - FGV / CBM - Análise Combinatória com Restrição de Função em Guarnição
  {
    idSlug: "rlm-035",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.analise_combinatoria,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial do Corpo de Bombeiros Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um quartel do Corpo de Bombeiros Militar possui 8 militares disponíveis em um plantão. Para tripular uma viatura Auto Bomba Salvamento, o comandante deve selecionar 5 militares, sendo que exatamente 1 militar atuará como motorista/condutor da viatura (função que exige habilitação específica, possuída por apenas 3 dos 8 militares). Os demais 4 tripulantes operacionais serão escolhidos livremente entre os militares restantes. O número de maneiras distintas de formar essa guarnição é de:",
    explicacao: "GABARITO: B. Passo a passo: 1) Escolha do motorista: existem 3 militares habilitados, logo há 3 opções. 2) Uma vez escolhido o motorista, restam 7 militares no quartel. 3) Escolha dos 4 combatentes entre os 7 militares restantes: C(7, 4) = C(7, 3) = (7 × 6 × 5) / (3 × 2 × 1) = 35 maneiras. 4) Total de guarnições possíveis: 3 × 35 = 105 maneiras distintas.",
    alternativas: [
      { letra: "A", texto: "70 maneiras.", correta: false },
      { letra: "B", texto: "105 maneiras.", correta: true },
      { letra: "C", texto: "140 maneiras.", correta: false },
      { letra: "D", texto: "168 maneiras.", correta: false },
      { letra: "E", texto: "210 maneiras.", correta: false }
    ]
  },

  // Q36 - IBFC / GM - Diagrama de Venn e Análise de Conjuntos Operacionais
  {
    idSlug: "rlm-036",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.diagramas_logicos,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Em uma corporação da Guarda Municipal com 80 agentes efetivos, realizou-se um levantamento sobre especializações em patrulhamento comunitário e tático:\n• 45 agentes possuem o curso de Mediação de Conflitos Urbanos;\n• 35 agentes possuem o curso de Patrulhamento Tático com Motocicleta;\n• 15 agentes possuem ambos os cursos.\n\nQuantos agentes dessa corporação NÃO possuem nenhum desses dois cursos de especialização?",
    explicacao: "GABARITO: B. Utilizando o Diagrama de Venn / Teoria dos Conjuntos: 1) Agentes com apenas Mediação: 45 - 15 = 30. 2) Agentes com apenas Patrulhamento Tático: 35 - 15 = 20. 3) Agentes com ambos os cursos (interseção): 15. 4) Total de agentes com pelo menos um curso: 30 + 20 + 15 = 65 agentes (ou 45 + 35 - 15 = 65). 5) Agentes sem nenhum curso: 80 - 65 = 15 agentes.",
    alternativas: [
      { letra: "A", texto: "10 agentes.", correta: false },
      { letra: "B", texto: "15 agentes.", correta: true },
      { letra: "C", texto: "20 agentes.", correta: false },
      { letra: "D", texto: "25 agentes.", correta: false },
      { letra: "E", texto: "30 agentes.", correta: false }
    ]
  },

  // Q37 - CEBRASPE / PRF - Tautologia e Silogismo Disjuntivo
  {
    idSlug: "rlm-037",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.logica_proposicional,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A proposição lógica composta [(P ∨ Q) ∧ ~P] → Q é uma tautologia, ou seja, assume invariavelmente o valor lógico verdadeiro em todas as linhas de sua tabela-verdade, independentemente dos valores lógicos atribuídos às proposições simples P e Q.",
    explicacao: "GABARITO: CERTO. Construindo a tabela-verdade da proposição: 1) Se P=V e Q=V: (V ∨ V) ∧ F = F => F → V = V. 2) Se P=V e Q=F: (V ∨ F) ∧ F = F => F → F = V. 3) Se P=F e Q=V: (F ∨ V) ∧ V = V => V → V = V. 4) Se P=F e Q=F: (F ∨ F) ∧ V = F => F → F = V. Como o resultado final é estritamente Verdadeiro (V) em todas as combinações possíveis, trata-se de uma tautologia (estrutura do silogismo disjuntivo).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q38 - VUNESP / PC-SP - Probabilidade de Eventos Independentes (Pelo Menos Um)
  {
    idSlug: "rlm-038",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.probabilidade,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante um treinamento de tiro tático defensivo, um policial civil tem probabilidade de 80% (0,80) de acertar a zona central do alvo em cada disparo individual. Se o policial efetuar 3 disparos sucessivos e independentes, a probabilidade de ele acertar a zona central do alvo PELO MENOS UMA vez é de:",
    explicacao: "GABARITO: D. Pelo método do evento complementar: 1) Probabilidade de errar em um disparo: q = 1 - 0,80 = 0,20. 2) Por serem eventos independentes, a probabilidade de errar todos os 3 disparos é: P(errar os 3) = (0,20)³ = 0,008 (0,8%). 3) A probabilidade de acertar pelo menos uma vez é o complemento de errar todos: P(pelo menos um acerto) = 1 - P(errar os 3) = 1 - 0,008 = 0,992 = 99,2%.",
    alternativas: [
      { letra: "A", texto: "80,0%.", correta: false },
      { letra: "B", texto: "89,6%.", correta: false },
      { letra: "C", texto: "96,0%.", correta: false },
      { letra: "D", texto: "99,2%.", correta: true },
      { letra: "E", texto: "99,8%.", correta: false }
    ]
  },

  // Q39 - FGV / PM - Princípio das Gavetas de Dirichlet (Casa dos Pombos)
  {
    idSlug: "rlm-039",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.analise_combinatoria,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um batalhão de choque da Polícia Militar é estruturado em exatamente 4 companhias distintas (Companhias 1, 2, 3 e 4). Para uma grande operação de policiamento em evento esportivo, vários policiais desse batalhão foram convocados aleatoriamente. O número MÍNIMO de policiais que devem ser convocados para se ter a certeza absoluta de que pelo menos 6 policiais convocados pertencerão à mesma companhia é:",
    explicacao: "GABARITO: B. Pelo Princípio das Gavetas de Dirichlet (Princípio da Casa dos Pombos), analisa-se o pior cenário possível (distribuição mais homogênea sem atingir a condição exigida): 1) Cada uma das 4 companhias tem 5 policiais convocados (ficando a 1 policial de atingir 6): 4 × 5 = 20 policiais convocados. 2) Ao convocar mais 1 policial (o 21º), obrigatoriamente ele pertencerá a uma das 4 companhias, fazendo com que aquela companhia atinja exatamente 6 policiais. Logo, o número mínimo necessário é 20 + 1 = 21 policiais.",
    alternativas: [
      { letra: "A", texto: "20 policiais.", correta: false },
      { letra: "B", texto: "21 policiais.", correta: true },
      { letra: "C", texto: "24 policiais.", correta: false },
      { letra: "D", texto: "25 policiais.", correta: false },
      { letra: "E", texto: "30 policiais.", correta: false }
    ]
  },

  // Q40 - CEBRASPE / PRF - Negação de Quantificador com Condicional
  {
    idSlug: "rlm-040",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.equivalencias_negacoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A negação lógica da sentença \"Todo motorista que comete infração gravíssima tem a carteira suspensa\" é expressa por \"Nenhum motorista que comete infração gravíssima tem a carteira suspensa\".",
    explicacao: "GABARITO: ERRADO. A negação de uma proposição com quantificador universal afirmativo (\"Todo A tem propriedade B\") é obtida demonstrando-se a existência de ao menos um contraexemplo: \"Existe pelo menos um motorista que cometeu infração gravíssima e não teve a carteira suspensa\" (ou \"Algum motorista que cometeu infração gravíssima não tem a carteira suspensa\"). A sentença \"Nenhum...\" é a proposição contrária, não a sua negação contraditória.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  }
];
