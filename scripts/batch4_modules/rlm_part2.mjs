import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.rlm;
const aProposicional = TAXONOMIA.assuntos.logica_proposicional;
const aEquivalencias = TAXONOMIA.assuntos.equivalencias_negacoes;
const aCombinatoria = TAXONOMIA.assuntos.analise_combinatoria;
const aProbabilidade = TAXONOMIA.assuntos.probabilidade;
const aDiagramas = TAXONOMIA.assuntos.diagramas_logicos;

export const rlmPart2 = [
  // 11
  {
    idSlug: "rlm-l4-11",
    disciplina_id: dId,
    assunto_id: aProposicional,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Considere o argumento lógico cujas premissas são 'Se o investigado esteve na cena do crime, então ele foi registrado pelas câmeras de segurança' e 'O investigado não foi registrado pelas câmeras de segurança'. A conclusão 'Logo, o investigado não esteve na cena do crime' constitui uma dedução logicamente válida pela regra do Modus Tollens.",
    explicacao: "GABARITO: CERTO. Pela regra de inferência válida Modus Tollens: dadas as premissas (P → Q) e (¬Q), conclui-se validamente (¬P).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 12
  {
    idSlug: "rlm-l4-12",
    disciplina_id: dId,
    assunto_id: aEquivalencias,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A negação lógica da proposição quantificada 'Todo agente de segurança pública porta arma de fogo em serviço' é:",
    explicacao: "GABARITO: Letra B. A negação de uma proposição universal afirmativa (Todo A é B) é a proposição existencial com predicado negado (Existe A que não é B, ou Pelo menos um A não é B).",
    alternativas: [
      { letra: "A", texto: "Nenhum agente de segurança pública porta arma de fogo em serviço.", correta: false },
      { letra: "B", texto: "Existe pelo menos um agente de segurança pública que não porta arma de fogo em serviço.", correta: true },
      { letra: "C", texto: "Todos os agentes de segurança pública não portam arma de fogo em serviço.", correta: false },
      { letra: "D", texto: "Se alguém não porta arma de fogo, então não é agente de segurança pública.", correta: false },
      { letra: "E", texto: "Nenhum agente de segurança pública está em serviço.", correta: false }
    ]
  },
  // 13
  {
    idSlug: "rlm-l4-13",
    disciplina_id: dId,
    assunto_id: aCombinatoria,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O número de anagramas distintos que podem ser formados com as letras da palavra 'POLICIA' é estritamente superior a 2.000.",
    explicacao: "GABARITO: CERTO. A palavra POLICIA tem 7 letras no total, com a letra 'I' repetida 2 vezes. Trata-se de permutação com repetição: P_7^(2) = 7! / 2! = 5.040 / 2 = 2.520 anagramas, que é estritamente superior a 2.000.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 14
  {
    idSlug: "rlm-l4-14",
    disciplina_id: dId,
    assunto_id: aDiagramas,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em uma operação policial que investigou 100 suspeitos, apurou-se que: 50 eram investigados por estelionato, 45 por lavagem de dinheiro e 15 eram investigados simultaneamente por ambos os crimes. O número de suspeitos que NÃO eram investigados por nenhum desses dois crimes é:",
    explicacao: "GABARITO: Letra C. Total investigados por pelo menos um crime = n(Estelionato ∪ Lavagem) = 50 + 45 - 15 = 80. Logo, não investigados por nenhum dos dois = 100 - 80 = 20.",
    alternativas: [
      { letra: "A", texto: "10", correta: false },
      { letra: "B", texto: "15", correta: false },
      { letra: "C", texto: "20", correta: true },
      { letra: "D", texto: "25", correta: false },
      { letra: "E", texto: "30", correta: false }
    ]
  },
  // 15
  {
    idSlug: "rlm-l4-15",
    disciplina_id: dId,
    assunto_id: aProbabilidade,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em um teste de tiro ao alvo, a probabilidade de um policial acertar o centro do alvo em um disparo é de 0,8 (80%). Se ele efetuar 3 disparos independentes, a probabilidade de acertar exatamente os 3 disparos é de 0,512 (51,2%).",
    explicacao: "GABARITO: CERTO. Por serem eventos independentes: P(Acerto ∩ Acerto ∩ Acerto) = (0,8) * (0,8) * (0,8) = (0,8)^3 = 0,512 = 51,2%.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 16
  {
    idSlug: "rlm-l4-16",
    disciplina_id: dId,
    assunto_id: aProposicional,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Na lógica proposicional clássica, a proposição bicondicional 'P se e somente se Q' (P ↔ Q) assume o valor lógico VERDADEIRO se, e somente se:",
    explicacao: "GABARITO: Letra A. A bicondicional P ↔ Q é verdadeira quando ambas as proposições simples P e Q possuem o mesmo valor lógico (ambas verdadeiras ou ambas falsas).",
    alternativas: [
      { letra: "A", texto: "Ambas as proposições P e Q tiverem o mesmo valor lógico (ambas verdadeiras ou ambas falsas).", correta: true },
      { letra: "B", texto: "Apenas a proposição P for verdadeira e Q for falsa.", correta: false },
      { letra: "C", texto: "Pelo menos uma das proposições for verdadeira.", correta: false },
      { letra: "D", texto: "A proposição P for necessariamente falsa.", correta: false },
      { letra: "E", texto: "As proposições P e Q tiverem valores lógicos opostos.", correta: false }
    ]
  },
  // 17
  {
    idSlug: "rlm-l4-17",
    disciplina_id: dId,
    assunto_id: aDiagramas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A negação lógica da proposição categórica 'Nenhum criminoso escapa à justiça' é dada pela proposição 'Existe pelo menos um criminoso que escapa à justiça'.",
    explicacao: "GABARITO: CERTO. A negação de uma proposição universal negativa (Nenhum A é B) é a proposição existencial afirmativa (Algum A é B / Existe pelo menos um A que é B).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 18
  {
    idSlug: "rlm-l4-18",
    disciplina_id: dId,
    assunto_id: aCombinatoria,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Perito Criminal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em um pátio policial, 5 viaturas distintas devem ser estacionadas lado a lado em fila. Se 2 dessas viaturas pertencem à perícia técnica e devem ficar obrigatoriamente juntas (em posições contíguas), o número de maneiras distintas de organizar a fila é:",
    explicacao: "GABARITO: Letra B. Considerando o bloco das 2 viaturas de perícia como um único elemento, temos 4 elementos para permutar: 4! = 24. Como as 2 viaturas dentro do bloco podem permutar entre si de 2! = 2 maneiras, o total é 4! * 2! = 24 * 2 = 48 maneiras.",
    alternativas: [
      { letra: "A", texto: "24", correta: false },
      { letra: "B", texto: "48", correta: true },
      { letra: "C", texto: "72", correta: false },
      { letra: "D", texto: "96", correta: false },
      { letra: "E", texto: "120", correta: false }
    ]
  },
  // 19
  {
    idSlug: "rlm-l4-19",
    disciplina_id: dId,
    assunto_id: aEquivalencias,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A negação lógica da proposição com disjunção exclusiva 'Ou o laudo pericial é inconclusivo ou o réu será condenado' é logicamente equivalente à proposição bicondicional 'O laudo pericial é inconclusivo se e somente se o réu for condenado'.",
    explicacao: "GABARITO: CERTO. A negação de uma disjunção exclusiva (P ⊻ Q) é formalmente equivalente à bicondicional (P ↔ Q), pois invertem rigorosamente suas tabelas-verdade em todas as linhas.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 20
  {
    idSlug: "rlm-l4-20",
    disciplina_id: dId,
    assunto_id: aProbabilidade,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Um atirador de elite tem probabilidade p = 0,7 de atingir o alvo em cada tiro. Se ele dispara 3 vezes consecutivas de forma independente, a probabilidade de que ele atinja o alvo PELO MENOS UMA VEZ é:",
    explicacao: "GABARITO: Letra D. Pela probabilidade complementar: P(pelo menos 1 acerto) = 1 - P(nenhum acerto). Probabilidade de errar em um tiro = 1 - 0,7 = 0,3. P(3 erros) = (0,3)^3 = 0,027. Logo, P(pelo menos 1 acerto) = 1 - 0,027 = 0,973 (97,3%).",
    alternativas: [
      { letra: "A", texto: "0,343", correta: false },
      { letra: "B", texto: "0,700", correta: false },
      { letra: "C", texto: "0,850", correta: false },
      { letra: "D", texto: "0,973", correta: true },
      { letra: "E", texto: "0,999", correta: false }
    ]
  }
];
