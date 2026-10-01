import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.rlm;
const aProposicional = TAXONOMIA.assuntos.logica_proposicional;
const aEquivalencias = TAXONOMIA.assuntos.equivalencias_negacoes;
const aCombinatoria = TAXONOMIA.assuntos.analise_combinatoria;
const aProbabilidade = TAXONOMIA.assuntos.probabilidade;
const aDiagramas = TAXONOMIA.assuntos.diagramas_logicos;

export const rlmPart1 = [
  // 01
  {
    idSlug: "rlm-l4-01",
    disciplina_id: dId,
    assunto_id: aEquivalencias,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A negação lógica da proposição condicional 'Se o mandado for expedido, então o agente cumprirá a diligência' é logicamente equivalente a 'O mandado foi expedido e o agente não cumpriu a diligência'.",
    explicacao: "GABARITO: CERTO. A negação de uma proposição condicional do tipo (P → Q) é dada formalmente por (P ∧ ¬Q), mantendo-se a antecedente e negando-se a consequente.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 02
  {
    idSlug: "rlm-l4-02",
    disciplina_id: dId,
    assunto_id: aProposicional,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Inspetor de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere as proposições simples: P: 'O perito colheu as digitais' (Verdadeira) e Q: 'O laudo foi emitido no prazo' (Falsa). Nessas condições, assinale a opção que apresenta uma proposição composta com valor lógico VERDADEIRO:",
    explicacao: "GABARITO: Letra B. Analisando as alternativas com P=V e Q=F: A) P ∧ Q = V ∧ F = F; B) P ∨ Q = V ∨ F = V; C) P → Q = V → F = F; D) P ↔ Q = V ↔ F = F; E) ¬P = F.",
    alternativas: [
      { letra: "A", texto: "P ∧ Q", correta: false },
      { letra: "B", texto: "P ∨ Q", correta: true },
      { letra: "C", texto: "P → Q", correta: false },
      { letra: "D", texto: "P ↔ Q", correta: false },
      { letra: "E", texto: "¬P ∧ ¬Q", correta: false }
    ]
  },
  // 03
  {
    idSlug: "rlm-l4-03",
    disciplina_id: dId,
    assunto_id: aEquivalencias,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A proposição 'Se o condutor apresentar sinais de embriaguez, então o veículo será retido' é logicamente equivalente à proposição contrapositiva 'Se o veículo não for retido, então o condutor não apresentou sinais de embriaguez'.",
    explicacao: "GABARITO: CERTO. A equivalência lógica da condicional (P → Q) pela contrapositiva é dada por (¬Q → ¬P), possuindo exatamente a mesma tabela-verdade.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 04
  {
    idSlug: "rlm-l4-04",
    disciplina_id: dId,
    assunto_id: aCombinatoria,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Uma delegacia de polícia dispõe de 8 investigadores e 5 escrivães. Para realizar uma operação especial, deve-se formar uma equipe composta por exatamente 3 investigadores e 2 escrivães. O número total de equipes distintas que podem ser formadas é:",
    explicacao: "GABARITO: Letra C. Trata-se de combinação simples: C(8, 3) * C(5, 2). C(8, 3) = (8*7*6)/(3*2*1) = 56. C(5, 2) = (5*4)/(2*1) = 10. Total de equipes = 56 * 10 = 560.",
    alternativas: [
      { letra: "A", texto: "280", correta: false },
      { letra: "B", texto: "420", correta: false },
      { letra: "C", texto: "560", correta: true },
      { letra: "D", texto: "640", correta: false },
      { letra: "E", texto: "720", correta: false }
    ]
  },
  // 05
  {
    idSlug: "rlm-l4-05",
    disciplina_id: dId,
    assunto_id: aProbabilidade,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em um lote de 20 amostras biológicas colhidas em local de crime, sabe-se que 4 estão contaminadas. Se um perito selecionar aleatoriamente, sem reposição, 2 dessas amostras, a probabilidade de que ambas estejam contaminadas é inferior a 4%.",
    explicacao: "GABARITO: CERTO. Probabilidade = (4/20) * (3/19) = (1/5) * (3/19) = 3/95 ≈ 0,03157 (3,16%), que é de fato estritamente inferior a 4%.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 06
  {
    idSlug: "rlm-l4-06",
    disciplina_id: dId,
    assunto_id: aDiagramas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Perito Criminal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere as seguintes premissas verdadeiras: 'Todo perito criminal é concursado' e 'Alguns policiais civis são peritos criminais'. A partir exclusivamente dessas premissas, é logicamente correto concluir que:",
    explicacao: "GABARITO: Letra B. Se todo perito é concursado e há policiais civis que são peritos criminais, a interseção entre policiais civis e concursados é necessariamente não-vazia. Logo, 'Alguns policiais civis são concursados'.",
    alternativas: [
      { letra: "A", texto: "Todo concursado é policial civil.", correta: false },
      { letra: "B", texto: "Alguns policiais civis são concursados.", correta: true },
      { letra: "C", texto: "Nenhum perito criminal é policial civil.", correta: false },
      { letra: "D", texto: "Todos os policiais civis são peritos criminais.", correta: false },
      { letra: "E", texto: "Nenhum policial civil é concursado.", correta: false }
    ]
  },
  // 07
  {
    idSlug: "rlm-l4-07",
    disciplina_id: dId,
    assunto_id: aEquivalencias,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Conforme as Leis de De Morgan, a negação lógica da proposição composta 'O réu confessou o delito e entregou as provas' é 'O réu não confessou o delito ou não entregou as provas'.",
    explicacao: "GABARITO: CERTO. Pela Lei de De Morgan: ¬(P ∧ Q) ≡ (¬P ∨ ¬Q). A negação da conjunção transforma-se na disjunção com a negação de ambas as partes.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 08
  {
    idSlug: "rlm-l4-08",
    disciplina_id: dId,
    assunto_id: aCombinatoria,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Para acessar a sala de custódia de armas, um policial deve digitar uma senha composta por exatamente 4 dígitos numéricos distintos escolhidos entre os algarismos de 1 a 9. O número total de senhas diferentes possíveis é:",
    explicacao: "GABARITO: Letra A. Trata-se de um arranjo simples A(9, 4) ou PFC: 9 * 8 * 7 * 6 = 3.024 senhas distintas.",
    alternativas: [
      { letra: "A", texto: "3.024", correta: true },
      { letra: "B", texto: "2.520", correta: false },
      { letra: "C", texto: "1.260", correta: false },
      { letra: "D", texto: "6.561", correta: false },
      { letra: "E", texto: "504", correta: false }
    ]
  },
  // 09
  {
    idSlug: "rlm-l4-09",
    disciplina_id: dId,
    assunto_id: aProposicional,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A proposição composta representada pela fórmula lógica (P ∧ ¬P) é uma contradição lógica, pois assume invariavelmente o valor lógico falso em todas as linhas de sua tabela-verdade, independentemente do valor de P.",
    explicacao: "GABARITO: CERTO. Uma proposição que é falsa para qualquer atribuição de valor de verdade de suas variáveis componentes é definida classicamente como uma contradição lógica.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 10
  {
    idSlug: "rlm-l4-10",
    disciplina_id: dId,
    assunto_id: aProbabilidade,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em uma delegacia regional, 60% dos inquéritos envolvem crimes contra o patrimônio, 40% envolvem tráfico de drogas e 20% envolvem simultaneamente ambos os crimes. Ao sortear aleatoriamente um inquérito dessa delegacia, a probabilidade de que ele envolva crime contra o patrimônio OU tráfico de drogas é:",
    explicacao: "GABARITO: Letra D. Pela regra da união de probabilidades: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60% + 40% - 20% = 80%.",
    alternativas: [
      { letra: "A", texto: "100%", correta: false },
      { letra: "B", texto: "90%", correta: false },
      { letra: "C", texto: "85%", correta: false },
      { letra: "D", texto: "80%", correta: true },
      { letra: "E", texto: "70%", correta: false }
    ]
  }
];
