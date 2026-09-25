import { TAXONOMIA } from "./taxonomia.mjs";

export const rlmQuestions = [
  // -------------------------------------------------------------------------
  // TÓPICO 1: LÓGICA PROPOSICIONAL
  // -------------------------------------------------------------------------
  {
    idSlug: "batch3-rlm-001",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.logica_proposicional,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Considere como referência as seguintes proposições simples relacionadas a uma diligência policial:\n\np: \"O mandado de busca e apreensão foi expedido pelo juiz competente.\" (Valor lógico: Verdadeiro)\nq: \"A equipe policial apreendeu os computadores do investigado.\" (Valor lógico: Falso)\n\nNessa situação hipotética, a proposição composta \"Se o mandado de busca e apreensão foi expedido pelo juiz competente, então a equipe policial apreendeu os computadores do investigado\" possui valor lógico Falso.",
    explicacao: "GABARITO: CERTO.\n\nPasso a passo analítico:\n1. A proposição composta apresentada é uma condicional do tipo \"Se p, então q\", simbolizada por p → q.\n2. Conforme o enunciado:\n   - Valor de p = V (Verdadeiro);\n   - Valor de q = F (Falso).\n3. Pela tabela-verdade do conectivo condicional (→), a proposição só é FALSA quando o antecedente é verdadeiro e o consequente é falso (V → F = F).\n4. Como temos V → F, o valor lógico resultante é Falso, tornando a afirmativa do item correta.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Na condicional p → q, a única linha com resultado falso é V → F = F."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A condicional com antecedente verdadeiro e consequente falso é estritamente falsa."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-002",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.logica_proposicional,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PC-RJ)",
    cargo_nome: "Investigador Policial",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Na lógica sentencial clássica, uma proposição composta é dita uma TAUTOLOGIA quando assume valor lógico verdadeiro em todas as linhas de sua tabela-verdade, independentemente das valorações individuais das proposições simples que a compõem. Considerando as proposições simples P e Q, assinale a alternativa que apresenta uma TAUTOLOGIA:",
    explicacao: "GABARITO: A.\n\nPasso a passo analítico:\n1. Analisando a proposição (P → Q) ∨ (Q → P):\n   - Linha 1 (P=V, Q=V): (V → V) ∨ (V → V) = V ∨ V = V.\n   - Linha 2 (P=V, Q=F): (V → F) ∨ (F → V) = F ∨ V = V.\n   - Linha 3 (P=F, Q=V): (F → V) ∨ (V → F) = V ∨ F = V.\n   - Linha 4 (P=F, Q=F): (F → F) ∨ (F → F) = V ∨ V = V.\n   Como o resultado é Verdadeiro em todas as linhas possíveis, trata-se de uma tautologia.\n2. Análise das demais alternativas:\n   - B) (P ∨ Q) → (P ∧ Q): Falso quando P=V e Q=F (V → F = F) — Contingência.\n   - C) (P → Q) ∧ (Q → P): Equivalente a P ↔ Q, falso quando os valores diferem — Contingência.\n   - D) P ∧ ~P: Sempre falsa (Princípio da Não-Contradição) — Contradição.\n   - E) (P → Q) ↔ (~P → ~Q): Falso na linha P=V, Q=F (F ↔ V = F) — Contingência.",
    alternativas: [
      {
        letra: "A",
        texto: "(P → Q) ∨ (Q → P)",
        correta: true,
        explicacao_especifica: "Tautologia comprovada: resulta em valor V em todas as 4 linhas da tabela-verdade."
      },
      {
        letra: "B",
        texto: "(P ∨ Q) → (P ∧ Q)",
        correta: false,
        explicacao_especifica: "Contingência. Se P=V e Q=F, temos V → F = F."
      },
      {
        letra: "C",
        texto: "(P → Q) ∧ (Q → P)",
        correta: false,
        explicacao_especifica: "Contingência. Trata-se da bicondicional P ↔ Q, que é falsa quando P e Q têm valores opostos."
      },
      {
        letra: "D",
        texto: "P ∧ ~P",
        correta: false,
        explicacao_especifica: "Contradição. Uma proposição e sua negação nunca podem ser simultaneamente verdadeiras."
      },
      {
        letra: "E",
        texto: "(P → Q) ↔ (~P → ~Q)",
        correta: false,
        explicacao_especifica: "Contingência. A condicional não é equivalente à sua inversa (falácia da negação do antecedente)."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-003",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.logica_proposicional,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em uma fiscalização de rotina na rodovia BR-116, um policial rodoviário federal registrou a seguinte proposição composta:\n\n\"O motorista realizou o teste do etilômetro ou não apresentou a Carteira Nacional de Habilitação.\"\n\nSabendo-se que essa proposição composta foi formalmente avaliada como FALSA, julgue o item a seguir:\nConclui-se, de forma necessária e suficiente, que o motorista não realizou o teste do etilômetro e apresentou a Carteira Nacional de Habilitação.",
    explicacao: "GABARITO: CERTO.\n\nPasso a passo analítico:\n1. Definindo as proposições simples:\n   - p: \"O motorista realizou o teste do etilômetro\"\n   - q: \"O motorista apresentou a Carteira Nacional de Habilitação\"\n   - ~q: \"O motorista não apresentou a Carteira Nacional de Habilitação\"\n2. A estrutura é uma disjunção inclusiva: p ∨ ~q.\n3. O enunciado afirma que p ∨ ~q = F (Falso).\n4. Pela tabela-verdade da disjunção (∨), a proposição só é falsa quando ambas as parcelas forem falsas simultaneamente:\n   - p = F → Logo, o motorista NÃO realizou o teste do etilômetro (Verdadeiro).\n   - ~q = F → Logo, q = V, ou seja, o motorista APRESENTOU a CNH (Verdadeiro).\n5. Conjunção resultante: \"o motorista não realizou o teste do etilômetro E apresentou a Carteira Nacional de Habilitação\" (V ∧ V = V).\n6. Portanto, a conclusão apresentada no item é correta.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Para a disjunção p ∨ ~q ser falsa, obrigatoriamente p deve ser F e ~q deve ser F (o que implica q = V)."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A dedução lógica decorre de forma estrita e unívoca da tabela-verdade da disjunção."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-004",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.logica_proposicional,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2023,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Considere a proposição lógica composta W definida por:\n\nW: [(P ∧ Q) → (R ∨ ~P)]\n\nSabendo que P, Q e R são proposições lógicas simples e independentes, o número total de linhas da tabela-verdade de W e o número de linhas em que W assume valor lógico FALSO são, respectivamente, iguais a:",
    explicacao: "GABARITO: A.\n\nPasso a passo analítico:\n1. O número total de linhas da tabela-verdade para n variáveis proposicionais é 2^n. Como temos 3 variáveis (P, Q, R), o total de linhas é 2^3 = 8 linhas.\n2. Para que uma condicional [Antecedente → Consequente] seja FALSA, exige-se que Antecedente = V e Consequente = F.\n3. Antecedente: (P ∧ Q) = V → Exige P = V e Q = V.\n4. Consequente: (R ∨ ~P) = F → Exige R = F e ~P = F (o que confirma P = V).\n5. Unificando as exigências para falsidade de W:\n   - P deve ser V;\n   - Q deve ser V;\n   - R deve ser F.\n6. Há exatamente 1 combinação entre as 8 possíveis que atende a essa condição (P=V, Q=V, R=F).\n7. Nas outras 7 linhas, W assume valor lógico Verdadeiro.\n8. Portanto, o número total de linhas é 8 e a quantidade de linhas em que W é Falsa é 1.",
    alternativas: [
      {
        letra: "A",
        texto: "8 e 1.",
        correta: true,
        explicacao_especifica: "Correto. Total de linhas = 2^3 = 8. Valor F apenas na valoração (P=V, Q=V, R=F)."
      },
      {
        letra: "B",
        texto: "8 e 2.",
        correta: false,
        explicacao_especifica: "Incorreto. Apenas uma linha produz antecedente V e consequente F."
      },
      {
        letra: "C",
        texto: "6 e 1.",
        correta: false,
        explicacao_especifica: "Incorreto. O número de linhas de 3 variáveis é 2^3 = 8, e não 6."
      },
      {
        letra: "D",
        texto: "8 e 4.",
        correta: false,
        explicacao_especifica: "Incorreto. A proposição é verdadeira em 7 das 8 linhas."
      },
      {
        letra: "E",
        texto: "16 e 2.",
        correta: false,
        explicacao_especifica: "Incorreto. A tabela-verdade de 3 proposições simples tem 8 linhas."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // TÓPICO 2: EQUIVALÊNCIAS LÓGICAS E NEGAÇÕES
  // -------------------------------------------------------------------------
  {
    idSlug: "batch3-rlm-005",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.equivalencias_negacoes,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Julgue o item a seguir, referente às propriedades de equivalência lógica no raciocínio dedutivo.\n\nA proposição \"Se o fragmento papilar coletado no local do crime é nítido, então o laudo pericial identifica a autoria do delito\" é logicamente equivalente a \"Se o laudo pericial não identifica a autoria do delito, então o fragmento papilar coletado no local do crime não é nítido\".",
    explicacao: "GABARITO: CERTO.\n\nPasso a passo analítico:\n1. Seja P: \"O fragmento papilar coletado no local do crime é nítido\".\n2. Seja Q: \"O laudo pericial identifica a autoria do delito\".\n3. A proposição original é uma condicional: P → Q.\n4. Uma das equivalências fundamentais da condicional é a contrapositiva (ou transposição lógica), dada por:\n   (P → Q) ≡ (~Q → ~P)\n5. Na segunda proposição temos:\n   - ~Q: \"O laudo pericial não identifica a autoria do delito\";\n   - ~P: \"O fragmento papilar coletado no local do crime não é nítido\".\n   Estrutura: ~Q → ~P.\n6. Sendo a contrapositiva rigorosamente equivalente à condicional direta, o item está correto.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Aplicação direta da lei da contrapositiva: (P → Q) ≡ (~Q → ~P)."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A contrapositiva preserva com exatidão a tabela-verdade da proposição condicional."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-006",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.equivalencias_negacoes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Durante um alinhamento operacional na delegacia, o delegado declarou: \"Se a denúncia anônima for confirmada pelos investigadores, então a autoridade policial representará pela prisão preventiva do suspeito\".\n\nA negação lógica dessa declaração é expressa por:",
    explicacao: "GABARITO: A.\n\nPasso a passo analítico:\n1. Identificação da estrutura lógica:\n   - P: \"A denúncia anônima é confirmada pelos investigadores\"\n   - Q: \"A autoridade policial representará pela prisão preventiva do suspeito\"\n   - Estrutura: P → Q\n2. Regra da negação da condicional (regra do \"MANÉ\" — Mantém a primeira E Nega a segunda):\n   ~(P → Q) ≡ P ∧ ~Q\n3. Aplicando aos termos:\n   - P (mantida): \"A denúncia anônima é confirmada pelos investigadores\";\n   - Conectivo: \"e\";\n   - ~Q (negada): \"a autoridade policial não representa pela prisão preventiva do suspeito\".\n4. Portanto, a negação correta é a alternativa A.",
    alternativas: [
      {
        letra: "A",
        texto: "A denúncia anônima é confirmada pelos investigadores e a autoridade policial não representa pela prisão preventiva do suspeito.",
        correta: true,
        explicacao_especifica: "Correto. A negação de P → Q é dada por P ∧ ~Q."
      },
      {
        letra: "B",
        texto: "Se a denúncia anônima não for confirmada pelos investigadores, então a autoridade policial não representará pela prisão preventiva do suspeito.",
        correta: false,
        explicacao_especifica: "Incorreto. Não se nega uma condicional gerando outra condicional."
      },
      {
        letra: "C",
        texto: "A denúncia anônima não é confirmada pelos investigadores ou a autoridade policial representa pela prisão preventiva do suspeito.",
        correta: false,
        explicacao_especifica: "Incorreto. Essa fórmula (~P ∨ Q) é equivalente à própria condicional, e não a sua negação."
      },
      {
        letra: "D",
        texto: "A denúncia anônima não é confirmada pelos investigadores e a autoridade policial não representa pela prisão preventiva do suspeito.",
        correta: false,
        explicacao_especifica: "Incorreto. A primeira parte deve ser mantida afirmativa (P), não negada."
      },
      {
        letra: "E",
        texto: "Se a autoridade policial não representar pela prisão preventiva, então a denúncia anônima não foi confirmada pelos investigadores.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se da contrapositiva (~Q → ~P), que é equivalente à condicional original."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-007",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.equivalencias_negacoes,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Com base nas Leis de De Morgan e nas regras de equivalência lógica, julgue o item a seguir:\n\nA negação lógica da proposição \"O caminhão transporta carga com excesso de peso e o motorista não possui nota fiscal eletrônica\" é corretamente expressa por \"O caminhão não transporta carga com excesso de peso e o motorista possui nota fiscal eletrônica\".",
    explicacao: "GABARITO: ERRADO.\n\nPasso a passo analítico:\n1. A proposição original é uma conjunção: P ∧ ~Q, onde:\n   - P: \"O caminhão transporta carga com excesso de peso\"\n   - ~Q: \"O motorista não possui nota fiscal eletrônica\"\n2. Pela 1ª Lei de De Morgan, a negação de uma conjunção transforma-se na disjunção das negações:\n   ~(A ∧ B) ≡ ~A ∨ ~B\n3. Aplicando à proposição dada:\n   ~(P ∧ ~Q) ≡ ~P ∨ ~(~Q) ≡ ~P ∨ Q\n4. Em linguagem natural: \"O caminhão NÃO transporta carga com excesso de peso OU o motorista possui nota fiscal eletrônica\".\n5. O item utilizou o conectivo \"E\" (conjunção) em vez de \"OU\" (disjunção inclusiva). Logo, o item está ERRADO.",
    alternativas: [
      {
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Incorreto. A negação de uma conjunção resulta em uma disjunção (~P ∨ Q), não em outra conjunção."
      },
      {
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. Pela Lei de De Morgan, ~(P ∧ ~Q) ≡ ~P ∨ Q. O conectivo deve ser 'OU'."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-008",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.equivalencias_negacoes,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil da Bahia (PC-BA)",
    cargo_nome: "Investigador de Polícia",
    ano: 2023,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere a afirmação feita pelo chefe de cartório de uma delegacia:\n\n\"Todo escrivão da unidade concluiu a digitalização dos inquéritos e nenhum investigador faltou ao plantão operacional.\"\n\nA negação lógica dessa afirmação composta é:",
    explicacao: "GABARITO: A.\n\nPasso a passo analítico:\n1. A afirmação é uma conjunção de duas proposições categóricas: A ∧ B, onde:\n   - A: \"Todo escrivão da unidade concluiu a digitalização dos inquéritos\" (Quantificador universal afirmativo);\n   - B: \"Nenhum investigador faltou ao plantão operacional\" (Quantificador universal negativo).\n2. Pela Lei de De Morgan: ~(A ∧ B) ≡ ~A ∨ ~B.\n3. Negação do quantificador \"Todo P é Q\":\n   ~A: \"Pelo menos um (ou algum / existe) escrivão da unidade não concluiu a digitalização dos inquéritos\".\n4. Negação do quantificador \"Nenhum P é R\":\n   ~B: \"Pelo menos um (ou algum / existe) investigador faltou ao plantão operacional\".\n5. Unindo pela disjunção \"OU\":\n   \"Pelo menos um escrivão da unidade não concluiu a digitalização dos inquéritos OU pelo menos um investigador faltou ao plantão operacional\".\n6. Correspondência exata com a alternativa A.",
    alternativas: [
      {
        letra: "A",
        texto: "Pelo menos um escrivão da unidade não concluiu a digitalização dos inquéritos ou pelo menos um investigador faltou ao plantão operacional.",
        correta: true,
        explicacao_especifica: "Correto. A negação de 'Todo' é 'Pelo menos um não', a negação de 'Nenhum' é 'Pelo menos um sim', ligadas pelo conectivo 'OU'."
      },
      {
        letra: "B",
        texto: "Nenhum escrivão da unidade concluiu a digitalização dos inquéritos e todos os investigadores faltaram ao plantão operacional.",
        correta: false,
        explicacao_especifica: "Incorreto. A negação de 'Todo' não é 'Nenhum', e o conectivo deve ser 'OU'."
      },
      {
        letra: "C",
        texto: "Pelo menos um escrivão da unidade não concluiu a digitalização dos inquéritos e pelo menos um investigador faltou ao plantão operacional.",
        correta: false,
        explicacao_especifica: "Incorreto. O conectivo entre as negações deve ser 'OU' (disjunção), e não 'E'."
      },
      {
        letra: "D",
        texto: "Todos os escrivães da unidade não concluíram a digitalização dos inquéritos ou nenhum investigador faltou ao plantão operacional.",
        correta: false,
        explicacao_especifica: "Incorreto. 'Todos não' não é a negação lógica do quantificador universal afirmativo."
      },
      {
        letra: "E",
        texto: "Algum escrivão da unidade concluiu a digitalização dos inquéritos se, e somente se, todos os investigadores faltaram ao plantão.",
        correta: false,
        explicacao_especifica: "Incorreto. A negação de uma conjunção categórica não assume a forma bicondicional."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // TÓPICO 3: DIAGRAMAS LÓGICOS, SILOGISMOS E QUANTIFICADORES
  // -------------------------------------------------------------------------
  {
    idSlug: "batch3-rlm-009",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.diagramas_logicos,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Considere verdadeiras as seguintes premissas lógicas:\n\n1. Todos os agentes do Grupo de Pronta Intervenção (GPI) são exímios atiradores.\n2. Nenhum indivíduo indisciplinado é exímio atirador.\n3. Alguns instrutores da Academia Nacional de Polícia são agentes do Grupo de Pronta Intervenção (GPI).\n\nA partir dessas premissas, julgue o item a seguir:\nConclui-se, como consequência lógica e necessária, que alguns instrutores da Academia Nacional de Polícia não são indivíduos indisciplinados.",
    explicacao: "GABARITO: CERTO.\n\nPasso a passo analítico:\n1. Análise por conjuntos (Diagramas de Venn):\n   - P1: GPI ⊂ Atiradores (O conjunto GPI está totalmente contido no conjunto dos Atiradores).\n   - P2: Indisciplinados ∩ Atiradores = ∅ (Conjuntos disjuntos). Logo, Indisciplinados ∩ GPI = ∅.\n   - P3: Instrutores ∩ GPI ≠ ∅ (Existe pelo menos um instrutor x que pertence ao GPI).\n2. Como x ∈ GPI e GPI ⊂ Atiradores, segue que x é Atirador.\n3. Como nenhum Atirador é Indisciplinado, segue que x ∉ Indisciplinados.\n4. Sendo x um Instrutor que não é Indisciplinado, fica demonstrado de forma irrefutável que \"Alguns instrutores da Academia Nacional de Polícia não são indivíduos indisciplinados\".\n5. Conclusão válida e necessária.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O elemento pertencente à interseção entre Instrutores e GPI necessariamente não pertence ao conjunto dos Indisciplinados."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A dedução silogística é válida e decorre diretamente das premissas."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-010",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.diagramas_logicos,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado do Amapá (PC-AP)",
    cargo_nome: "Agente de Polícia",
    ano: 2023,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em uma delegacia especializada com 85 policiais civis, realizou-se um levantamento sobre a participação do efetivo em três grandes operações: Operação Alvorada (A), Operação Barão (B) e Operação Coruja (C). O relatório indicou que:\n\n• 42 policiais atuaram na Operação A;\n• 38 policiais atuaram na Operação B;\n• 35 policiais atuaram na Operação C;\n• 16 policiais atuaram nas Operações A e B;\n• 14 policiais atuaram nas Operações A e C;\n• 12 policiais atuaram nas Operações B e C;\n• 6 policiais atuaram simultaneamente nas três operações (A, B e C);\n• 6 policiais não participaram de nenhuma dessas três operações.\n\nCom base exclusivamente nesses dados, a quantidade de policiais que atuaram em EXATAMENTE DUAS dessas três operações é igual a:",
    explicacao: "GABARITO: A.\n\nPasso a passo analítico:\n1. Utilizando a teoria dos conjuntos e o Diagrama de Venn de três conjuntos:\n   - Interseção tripla: n(A ∩ B ∩ C) = 6.\n2. Policiais que atuaram em EXATAMENTE duas operações (interseções exclusivas duplas):\n   - Apenas A e B = n(A ∩ B) - n(A ∩ B ∩ C) = 16 - 6 = 10 policiais.\n   - Apenas A e C = n(A ∩ C) - n(A ∩ B ∩ C) = 14 - 6 = 8 policiais.\n   - Apenas B e C = n(B ∩ C) - n(A ∩ B ∩ C) = 12 - 6 = 6 policiais.\n3. Soma dos que atuaram em exatamente duas operações:\n   10 + 8 + 6 = 24 policiais.\n4. Verificação de consistência do total:\n   - Apenas A = 42 - (10 + 8 + 6) = 18.\n   - Apenas B = 38 - (10 + 6 + 6) = 16.\n   - Apenas C = 35 - (8 + 6 + 6) = 15.\n   - União (A ∪ B ∪ C) = (18 + 16 + 15) + 24 + 6 = 49 + 30 = 79.\n   - Total geral = 79 + 6 (nenhuma) = 85 policiais.\n5. O total procurado é 24.",
    alternativas: [
      {
        letra: "A",
        texto: "24.",
        correta: true,
        explicacao_especifica: "Correto. (16 - 6) + (14 - 6) + (12 - 6) = 10 + 8 + 6 = 24 policiais."
      },
      {
        letra: "B",
        texto: "30.",
        correta: false,
        explicacao_especifica: "Incorreto. 30 seria a soma das interseções duplas sem subtrair a interseção tripla de cada par."
      },
      {
        letra: "C",
        texto: "18.",
        correta: false,
        explicacao_especifica: "Incorreto. 18 é a quantidade de policiais que atuaram exclusivamente na Operação A."
      },
      {
        letra: "D",
        texto: "42.",
        correta: false,
        explicacao_especifica: "Incorreto. 42 é o total de participantes da Operação A."
      },
      {
        letra: "E",
        texto: "36.",
        correta: false,
        explicacao_especifica: "Incorreto. A soma das regiões exclusivas de 2 conjuntos é 24."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-011",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.diagramas_logicos,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Distrito Federal (PC-DF)",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Considere como verdadeiras as três premissas a seguir:\n\nI. Toda pessoa investigada na Operação Blindagem que teve o sigilo bancário quebrado foi formalmente indiciada.\nII. Nenhum servidor público formalmente indiciado foi promovido por merecimento no último biênio.\nIII. Carlos é um servidor público que foi investigado na Operação Blindagem e teve seu sigilo bancário quebrado.\n\nCom base exclusivamente nessas premissas, julgue o item a seguir:\nÉ correto deduzir que Carlos não foi promovido por merecimento no último biênio.",
    explicacao: "GABARITO: CERTO.\n\nPasso a passo analítico:\n1. Da premissa III: Carlos é investigado na Operação Blindagem E teve o sigilo bancário quebrado.\n2. Da premissa I: Toda pessoa nessa condição (\"investigada na Op. Blindagem com sigilo quebrado\") pertence ao conjunto dos \"formalmente indiciados\". Logo, Carlos foi formalmente indiciado.\n3. Da premissa III: Carlos é servidor público. Juntando com a dedução anterior, Carlos pertence ao conjunto dos \"servidores públicos formalmente indiciados\".\n4. Da premissa II: Nenhum elemento do conjunto \"servidores públicos formalmente indiciados\" pertence ao conjunto das pessoas \"promovidas por merecimento no último biênio\" (conjuntos disjuntos).\n5. Consequentemente, Carlos NÃO foi promovido por merecimento no último biênio.\n6. A dedução lógica é formalmente válida.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O encadeamento das premissas I, II e III leva necessariamente à conclusão de que Carlos não foi promovido por merecimento."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A dedução lógica é perfeita, direta e incontestável pelo método dos diagramas lógicos."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-012",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.diagramas_logicos,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Investigador de Polícia",
    ano: 2023,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em uma investigação policial sobre crimes contra o sistema financeiro, definiram-se três conjuntos de suspeitos:\n\n• F: conjunto dos investigados por Fraude Eletrônica;\n• L: conjunto dos investigados por Lavagem de Dinheiro;\n• O: conjunto dos investigados por Organização Criminosa.\n\nSabe-se que:\n1. Todo investigado por Fraude Eletrônica também é investigado por Lavagem de Dinheiro (F ⊂ L);\n2. Nenhum investigado por Organização Criminosa é investigado por Fraude Eletrônica (O ∩ F = ∅);\n3. Alguns investigados por Lavagem de Dinheiro também são investigados por Organização Criminosa (L ∩ O ≠ ∅).\n\nA partir dessas relações lógicas, é NECESSARIAMENTE CORRETO afirmar que:",
    explicacao: "GABARITO: A.\n\nPasso a passo analítico:\n1. Sabemos da premissa 3 que existe pelo menos um elemento x pertencente à interseção L ∩ O (x ∈ L e x ∈ O).\n2. Pela premissa 2, nenhum elemento de O pode pertencer a F (O ∩ F = ∅). Como x ∈ O, obrigatoriamente x ∉ F.\n3. Logo, esse elemento x é um investigado por Lavagem de Dinheiro (x ∈ L) que NÃO é investigado por Fraude Eletrônica (x ∉ F).\n4. Portanto, a afirmação \"Existe pelo menos um investigado por Lavagem de Dinheiro que não é investigado por Fraude Eletrônica\" é uma certeza lógica absoluta.\n5. As demais alternativas afirmam generalizações indevidas ou contradizem as premissas dadas.",
    alternativas: [
      {
        letra: "A",
        texto: "Existe pelo menos um investigado por Lavagem de Dinheiro que não é investigado por Fraude Eletrônica.",
        correta: true,
        explicacao_especifica: "Correto. Os elementos que estão em L ∩ O pertencem a L, mas não podem pertencer a F por ser disjunto de O."
      },
      {
        letra: "B",
        texto: "Todo investigado por Lavagem de Dinheiro é investigado por Organização Criminosa.",
        correta: false,
        explicacao_especifica: "Incorreto. A premissa afirma apenas que 'alguns' investigados por L estão em O."
      },
      {
        letra: "C",
        texto: "Todo investigado por Lavagem de Dinheiro é investigado por Fraude Eletrônica.",
        correta: false,
        explicacao_especifica: "Incorreto. A inclusão é no sentido F ⊂ L, e não L ⊂ F."
      },
      {
        letra: "D",
        texto: "Nenhum investigado por Organização Criminosa é investigado por Lavagem de Dinheiro.",
        correta: false,
        explicacao_especifica: "Incorreto. Contradiz diretamente a premissa 3 (L ∩ O ≠ ∅)."
      },
      {
        letra: "E",
        texto: "Todos os investigados por Fraude Eletrônica pertencem ao conjunto da Organização Criminosa.",
        correta: false,
        explicacao_especifica: "Incorreto. Contradiz diretamente a premissa 2 (O ∩ F = ∅)."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // TÓPICO 4: ANÁLISE COMBINATÓRIA
  // -------------------------------------------------------------------------
  {
    idSlug: "batch3-rlm-013",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.analise_combinatoria,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Para padronizar o código de acesso das viaturas operacionais a um sistema criptografado de radiocomunicação, a PRF estipulou senhas alfanuméricas de 5 posições, formadas obrigatoriamente por 2 letras distintas (escolhidas entre as 26 letras do alfabeto) nas duas primeiras posições, seguidas por 3 algarismos distintos (escolhidos entre os 10 algarismos de 0 a 9) nas três últimas posições.\n\nNessas condições, o total de senhas distintas que podem ser criadas é superior a 500.000.",
    explicacao: "GABARITO: ERRADO.\n\nPasso a passo analítico:\n1. Aplicação do Princípio Fundamental da Contagem (PFC):\n   - Posição 1 (1ª letra): 26 opções;\n   - Posição 2 (2ª letra, distinta da primeira): 25 opções;\n   - Posição 3 (1º algarismo): 10 opções;\n   - Posição 4 (2º algarismo, distinto do primeiro): 9 opções;\n   - Posição 5 (3º algarismo, distinto dos anteriores): 8 opções.\n2. Cálculo do número total de senhas:\n   Total = 26 × 25 × 10 × 9 × 8\n   Total = 650 × 720 = 468.000 senhas distintas.\n3. Como 468.000 é MENOR que 500.000, a afirmativa do item de que o total é superior a 500.000 está ERRADA.",
    alternativas: [
      {
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Incorreto. O total calculado é de 468.000 senhas, valor estritamente inferior a 500.000."
      },
      {
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. 26 × 25 × 10 × 9 × 8 = 468.000, que não é superior a 500.000."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-014",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.analise_combinatoria,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Perito Criminal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O Núcleo de Perícias Forenses de uma região conta com 7 peritos especializados em engenharia/informática e 5 peritos especializados em balística forense. Para examinar vestígios em uma cena de crime de grande repercussão, o diretor do departamento designará uma equipe multidisciplinar formada por exatamente 3 peritos de informática e 2 peritos de balística. O número de maneiras distintas de se compor essa equipe é:",
    explicacao: "GABARITO: A.\n\nPasso a passo analítico:\n1. A ordem de escolha dos peritos dentro de cada especialidade não altera a composição da equipe (trata-se de combinação simples).\n2. Escolha dos peritos de informática (3 dentre 7 disponíveis):\n   C(7, 3) = 7! / [3! × (7 - 3)!] = (7 × 6 × 5) / (3 × 2 × 1) = 210 / 6 = 35 maneiras.\n3. Escolha dos peritos de balística (2 dentre 5 disponíveis):\n   C(5, 2) = 5! / [2! × (5 - 2)!] = (5 × 4) / (2 × 1) = 20 / 2 = 10 maneiras.\n4. Pelo princípio multiplicativo, o total de equipes multidisciplinares é:\n   Total = C(7, 3) × C(5, 2) = 35 × 10 = 350 maneiras.",
    alternativas: [
      {
        letra: "A",
        texto: "350.",
        correta: true,
        explicacao_especifica: "Correto. C(7,3) × C(5,2) = 35 × 10 = 350 equipes distintas."
      },
      {
        letra: "B",
        texto: "700.",
        correta: false,
        explicacao_especifica: "Incorreto. Valor dobrado sem fundamento combinatório."
      },
      {
        letra: "C",
        texto: "210.",
        correta: false,
        explicacao_especifica: "Incorreto. 210 seria o arranjo A(7,3) sem divisão pelo fatorial."
      },
      {
        letra: "D",
        texto: "120.",
        correta: false,
        explicacao_especifica: "Incorreto. Cálculo incorreto dos agrupamentos de combinação."
      },
      {
        letra: "E",
        texto: "420.",
        correta: false,
        explicacao_especifica: "Incorreto. Erro na aplicação da fórmula de combinação simples."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-015",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.analise_combinatoria,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em uma operação tática de cerco e bloqueio em rodovia, 11 viaturas policiais devem ser posicionadas em fila indiana no acostamento, sendo: 6 viaturas caracterizadas da Polícia Federal (idênticas entre si), 3 viaturas caracterizadas da Polícia Rodoviária Federal (idênticas entre si) e 2 viaturas da Força Nacional (idênticas entre si).\n\nConsiderando que viaturas da mesma corporação são indistinguíveis, o número de formas distintas de se ordenar essas 11 viaturas na fila é exatamente igual a 4.620.",
    explicacao: "GABARITO: CERTO.\n\nPasso a passo analítico:\n1. Trata-se de um problema de Permutação com Repetição, onde temos n = 11 viaturas no total, com repetições de:\n   - n1 = 6 (viaturas da PF);\n   - n2 = 3 (viaturas da PRF);\n   - n3 = 2 (viaturas da FN).\n2. A fórmula de permutação com elementos repetidos é dada por:\n   P_n^(n1, n2, n3) = n! / (n1! × n2! × n3!)\n3. Substituindo os valores:\n   P_11^(6, 3, 2) = 11! / (6! × 3! × 2!)\n   = (11 × 10 × 9 × 8 × 7 × 6!) / (6! × 6 × 2)\n   = (11 × 10 × 9 × 8 × 7) / 12\n   = (11 × 10 × 72 × 7) / 12\n   = 11 × 10 × 6 × 7\n   = 110 × 42 = 4.620 ordenações distintas.\n4. Portanto, o número informado no item (4.620) está absolutamente correto.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. P_11^(6,3,2) = 11! / (6! × 3! × 2!) = 4.620 ordenações."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O cálculo de permutação com repetição resulta precisamente em 4.620."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-016",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.analise_combinatoria,
    banca_nome: "IDECAN",
    orgao_nome: "Polícia Civil do Estado do Ceará (PC-CE)",
    cargo_nome: "Inspetor de Polícia",
    ano: 2023,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Uma delegacia de polícia conta com 9 investigadores de polícia, entre eles os agentes André e Bruno. Para o cumprimento simultâneo de mandados de busca, o delegado deve formar uma equipe tática composta por 5 investigadores. No entanto, por razões operacionais de escala, André e Bruno não podem integrar juntos a mesma equipe. O número total de equipes distintas que podem ser formadas respeitando essa restrição é igual a:",
    explicacao: "GABARITO: A.\n\nPasso a passo analítico:\n1. Método do conjunto complementar:\n   - Total de equipes possíveis sem nenhuma restrição:\n     C(9, 5) = 9! / (5! × 4!) = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1) = 3.024 / 24 = 126 equipes.\n2. Equipes em que André e Bruno atuam JUNTOS:\n   - Fixando André e Bruno na equipe, restam 5 - 2 = 3 vagas para serem preenchidas pelos outros 9 - 2 = 7 investigadores.\n   - C(7, 3) = 7! / (3! × 4!) = (7 × 6 × 5) / (3 × 2 × 1) = 35 equipes com ambos juntos.\n3. Total de equipes onde André e Bruno NÃO estão juntos:\n   Total Válido = Total Geral - Equipes com Ambos = 126 - 35 = 91 equipes.\n4. Método alternativo (soma de casos exclusivos):\n   - Caso 1: Nem André nem Bruno participam: C(7, 5) = 21;\n   - Caso 2: André participa e Bruno não: C(7, 4) = 35;\n   - Caso 3: Bruno participa e André não: C(7, 4) = 35;\n   - Total = 21 + 35 + 35 = 91 equipes.",
    alternativas: [
      {
        letra: "A",
        texto: "91.",
        correta: true,
        explicacao_especifica: "Correto. C(9,5) - C(7,3) = 126 - 35 = 91 equipes distintas."
      },
      {
        letra: "B",
        texto: "105.",
        correta: false,
        explicacao_especifica: "Incorreto. Não desconta corretamente as composições que reúnem ambos os agentes."
      },
      {
        letra: "C",
        texto: "70.",
        correta: false,
        explicacao_especifica: "Incorreto. Considera apenas os casos em que um dos dois agentes participa individualmente."
      },
      {
        letra: "D",
        texto: "126.",
        correta: false,
        explicacao_especifica: "Incorreto. 126 é o total irrestrito C(9,5), sem aplicar a restrição exigida."
      },
      {
        letra: "E",
        texto: "84.",
        correta: false,
        explicacao_especifica: "Incorreto. Erro de contagem combinatória nas restrições."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // TÓPICO 5: PROBABILIDADE
  // -------------------------------------------------------------------------
  {
    idSlug: "batch3-rlm-017",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.probabilidade,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Registros estatísticos de fiscalização da PRF indicam que, em um determinado trecho rodoviário, a probabilidade de um caminhão abordado apresentar pneus em mau estado de conservação é de 20% (0,20) e a probabilidade de apresentar excesso de carga é de 15% (0,15). Supondo que essas duas infrações ocorram de forma estatisticamente independente, a probabilidade de um caminhão abordado aleatoriamente apresentar pelo menos uma dessas duas infrações é igual a 32% (0,32).",
    explicacao: "GABARITO: CERTO.\n\nPasso a passo analítico:\n1. Sejam os eventos:\n   - A: apresentar irregularidade nos pneus → P(A) = 0,20.\n   - B: apresentar excesso de carga → P(B) = 0,15.\n2. Como os eventos são independentes, a probabilidade da interseção é:\n   P(A ∩ B) = P(A) × P(B) = 0,20 × 0,15 = 0,03 (3%).\n3. A probabilidade de apresentar pelo menos uma das infrações corresponde à união P(A ∪ B):\n   P(A ∪ B) = P(A) + P(B) - P(A ∩ B)\n   P(A ∪ B) = 0,20 + 0,15 - 0,03 = 0,35 - 0,03 = 0,32 (32%).\n4. Método pelo evento complementar:\n   P(nenhuma infração) = (1 - 0,20) × (1 - 0,15) = 0,80 × 0,85 = 0,68.\n   P(pelo menos uma) = 1 - 0,68 = 0,32 (32%).\n5. Portanto, o item está CERTO.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. P(A ∪ B) = 0,20 + 0,15 - (0,20 × 0,15) = 0,32 = 32%."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A probabilidade da união de eventos independentes resulta exatamente em 32%."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-018",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.probabilidade,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PC-RJ)",
    cargo_nome: "Perito Legista",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um teste imunológico rápido utilizado por peritos para triagem de substância tóxica apresenta sensibilidade de 95% (identifica corretamente 95% das amostras que contêm o tóxico) e especificidade de 90% (indica resultado negativo em 90% das amostras isentas de tóxico). Em um lote de 1.000 amostras sob custódia pericial, sabe-se que exatamente 100 amostras contêm o tóxico e 900 são isentas. Se uma amostra desse lote é selecionada ao acaso e o teste resulta POSITIVO, a probabilidade de que essa amostra realmente contenha o tóxico é de, aproximadamente:",
    explicacao: "GABARITO: A.\n\nPasso a passo analítico (Teorema de Bayes / Tabela de Contingência):\n1. Distribuição das 1.000 amostras do lote:\n   - 100 amostras COM tóxico:\n     • Teste Positivo (Verdadeiro Positivo): 95% de 100 = 95 amostras.\n     • Teste Negativo (Falso Negativo): 5% de 100 = 5 amostras.\n   - 900 amostras SEM tóxico:\n     • Teste Positivo (Falso Positivo): 10% de 900 = 90 amostras.\n     • Teste Negativo (Verdadeiro Negativo): 90% de 900 = 810 amostras.\n2. Total de amostras com teste POSITIVO:\n   Total Positivos = 95 (verdadeiros) + 90 (falsos) = 185 amostras.\n3. Probabilidade condicional de conter o tóxico dado que o teste foi positivo:\n   P(Tóxico | Positivo) = Verdadeiros Positivos / Total Positivos\n   P(Tóxico | Positivo) = 95 / 185 = 19 / 37 ≈ 0,5135 (aproximadamente 51,4%).\n4. Portanto, a resposta correta é 51,4%.",
    alternativas: [
      {
        letra: "A",
        texto: "51,4%.",
        correta: true,
        explicacao_especifica: "Correto. 95 verdadeiros positivos / 185 total de positivos = 19/37 ≈ 51,35% (aprox. 51,4%)."
      },
      {
        letra: "B",
        texto: "95,0%.",
        correta: false,
        explicacao_especifica: "Incorreto. 95% é a sensibilidade do teste P(Positivo | Tóxico), e não P(Tóxico | Positivo)."
      },
      {
        letra: "C",
        texto: "48,6%.",
        correta: false,
        explicacao_especifica: "Incorreto. 48,6% é a probabilidade de falso positivo condicionado (90/185)."
      },
      {
        letra: "D",
        texto: "90,0%.",
        correta: false,
        explicacao_especifica: "Incorreto. 90% é a especificidade do teste."
      },
      {
        letra: "E",
        texto: "10,0%.",
        correta: false,
        explicacao_especifica: "Incorreto. 10% é a prevalência básica de amostras contaminadas no lote original."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-019",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.probabilidade,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em uma perícia forense de informática realizada pelo setor técnico-científico da PF, foram periciadas 100 unidades de armazenamento apreendidas. Constatou-se que:\n\n• 60 unidades continham rastros de invasão remota por malware;\n• 50 unidades continham arquivos criptografados ocultos por esteganografia;\n• 25 unidades apresentavam simultaneamente ambos os vestígios (invasão por malware e esteganografia).\n\nConsiderando que uma unidade apreendida foi sorteada ao acaso e constatou-se que ela contém rastros de invasão remota por malware, a probabilidade de que ela também contenha arquivos ocultos por esteganografia é superior a 40%.",
    explicacao: "GABARITO: CERTO.\n\nPasso a passo analítico:\n1. Definindo os eventos no espaço amostral de 100 mídias:\n   - Evento A: conter rastros de invasão por malware → n(A) = 60.\n   - Evento B: conter arquivos ocultos por esteganografia → n(B) = 50.\n   - Interseção (A ∩ B): conter ambos os vestígios → n(A ∩ B) = 25.\n2. O problema solicita a probabilidade condicional de B dado que A ocorreu: P(B | A).\n3. Pela definição de probabilidade condicional:\n   P(B | A) = n(A ∩ B) / n(A) = 25 / 60\n   Simplificando a fração: 25 / 60 = 5 / 12 ≈ 0,4167 = 41,67%.\n4. Como 41,67% é estritamente superior a 40%, o item está CERTO.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. P(B | A) = 25 / 60 = 5 / 12 ≈ 41,67%, valor superior a 40%."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A probabilidade condicional é 41,67%, que supera o patamar de 40%."
      }
    ]
  },
  {
    idSlug: "batch3-rlm-020",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.probabilidade,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia",
    ano: 2023,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No cofre de evidências materiais de um distrito policial, encontram-se guardados 12 invólucros lacrados contendo amostras apreendidas, dos quais exatamente 4 contêm substância entorpecente de alto grau de pureza e 8 contêm substância adulterada com diluentes. Para a realização de um exame pericial complementar de contraprova, o perito retira aleatoriamente e sucessivamente, sem reposição, 2 invólucros do cofre. A probabilidade de que pelo menos um dos invólucros retirados contenha entorpecente de alto grau de pureza é igual a:",
    explicacao: "GABARITO: A.\n\nPasso a passo analítico:\n1. Total de invólucros = 12 (4 de alta pureza e 8 adulterados).\n2. São retirados 2 invólucros sem reposição.\n3. Total de pares possíveis de retirada: C(12, 2) = (12 × 11) / 2 = 66.\n4. Evento complementar: Nenhum invólucro conter entorpecente de alta pureza (ou seja, ambos serem adulterados):\n   - P(Ambos Adulterados) = (8/12) × (7/11) = (2/3) × (7/11) = 14 / 33.\n   - Em termos combinatórios: C(8, 2) / C(12, 2) = 28 / 66 = 14 / 33.\n5. Probabilidade de pelo menos um ser de alta pureza:\n   P(Pelo menos um puro) = 1 - P(Ambos Adulterados)\n   P = 1 - (14 / 33) = (33 - 14) / 33 = 19 / 33.\n6. Verificação por cálculo direto:\n   - 1º puro e 2º adulterado: (4/12) × (8/11) = 32/132\n   - 1º adulterado e 2º puro: (8/12) × (4/11) = 32/132\n   - Ambos puros: (4/12) × (3/11) = 12/132\n   Soma = (32 + 32 + 12) / 132 = 76 / 132 = 19 / 33.\n7. Portanto, a probabilidade exata é 19/33.",
    alternativas: [
      {
        letra: "A",
        texto: "19/33.",
        correta: true,
        explicacao_especifica: "Correto. 1 - P(ambos adulterados) = 1 - (8/12 × 7/11) = 1 - 14/33 = 19/33."
      },
      {
        letra: "B",
        texto: "14/33.",
        correta: false,
        explicacao_especifica: "Incorreto. 14/33 é a probabilidade do evento complementar (ambos serem adulterados)."
      },
      {
        letra: "C",
        texto: "2/3.",
        correta: false,
        explicacao_especifica: "Incorreto. 2/3 seria a probabilidade de retirar um adulterado na primeira extração."
      },
      {
        letra: "D",
        texto: "5/11.",
        correta: false,
        explicacao_especifica: "Incorreto. Cálculo incorreto da soma das probabilidades condicionadas."
      },
      {
        letra: "E",
        texto: "7/22.",
        correta: false,
        explicacao_especifica: "Incorreto. Erro na razão das combinações."
      }
    ]
  }
];
