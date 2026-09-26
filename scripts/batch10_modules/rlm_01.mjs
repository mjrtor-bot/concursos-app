import { TAXONOMIA } from "./taxonomia.mjs";

export const rlm01Questoes = [
  {
    "idSlug": "b10-rlm-01-001",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "ec12a7a2-bb3e-57c5-adfc-fade7c66bcfc",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "facil",
    "enunciado": "A frase 'Feche a porta da viatura imediatamente!' constitui uma proposição lógica simples cujo valor lógico pode ser classificado como verdadeiro ou falso.",
    "explicacao": "GABARITO: ERRADO. Frases imperativas, exclamativas, interrogativas e sentenças abertas não são proposições lógicas, pois não possuem valor de verdade definido.",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": false
      },
      {
        "texto": "Errado",
        "correta": true
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-002",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "671e06a6-a523-512a-a333-08f2542f694f",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Escrivão de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "A negação lógica da proposição condicional 'Se o mandado foi expedido, então o policial realizou a busca' é equivalente a: 'O mandado foi expedido e o policial não realizou a busca'.",
    "explicacao": "GABARITO: CERTO. A negação de P -> Q é P ^ ~Q (regra do 'MANÉ': Mantém a primeira E Nega a segunda).",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": true
      },
      {
        "texto": "Errado",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-003",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "671e06a6-a523-512a-a333-08f2542f694f",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Civil",
    "cargo_nome": "Investigador de Polícia",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "medio",
    "enunciado": "Considere a afirmação: 'Todo perito criminal é graduado em ensino superior'. A negação lógica dessa afirmação é:",
    "explicacao": "GABARITO: C. A negação do quantificador universal 'Todo A é B' é 'Algum/Pelo menos um A não é B' (PEA + NÃO).",
    "alternativas": [
      {
        "texto": "Nenhum perito criminal é graduado em ensino superior.",
        "correta": false
      },
      {
        "texto": "Todo graduado em ensino superior é perito criminal.",
        "correta": false
      },
      {
        "texto": "Existe pelo menos um perito criminal que não é graduado em ensino superior.",
        "correta": true
      },
      {
        "texto": "Todos os profissionais de segurança pública são graduados.",
        "correta": false
      },
      {
        "texto": "Nenhum graduado em ensino superior trabalha como perito.",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-004",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "671e06a6-a523-512a-a333-08f2542f694f",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Rodoviária Federal",
    "cargo_nome": "Policial Rodoviário Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "A proposição 'Se o condutor ingeriu álcool, então o teste do bafômetro foi positivo' é logicamente equivalente à proposição contrapositiva: 'Se o teste do bafômetro não foi positivo, então o condutor não ingeriu álcool'.",
    "explicacao": "GABARITO: CERTO. Equivalência contrapositiva: (P -> Q) <-> (~Q -> ~P).",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": true
      },
      {
        "texto": "Errado",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-005",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "ec12a7a2-bb3e-57c5-adfc-fade7c66bcfc",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Papiloscopista Policial Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "A proposição composta (P ou não P) é uma tautologia, pois seu valor lógico será sempre verdadeiro, independentemente do valor de verdade assumido pela proposição simples P.",
    "explicacao": "GABARITO: CERTO. Princípio do terceiro excluído: P v ~P é sempre V (Tautologia).",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": true
      },
      {
        "texto": "Errado",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-006",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "671e06a6-a523-512a-a333-08f2542f694f",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Civil",
    "cargo_nome": "Investigador de Polícia",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "Pelas Leis de De Morgan, a negação da proposição 'O suspeito confessou o crime e entregou a arma' é expressa por: 'O suspeito não confessou o crime ou não entregou a arma'.",
    "explicacao": "GABARITO: CERTO. ~(P ^ Q) <-> ~P v ~Q.",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": true
      },
      {
        "texto": "Errado",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-007",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "ec12a7a2-bb3e-57c5-adfc-fade7c66bcfc",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Civil",
    "cargo_nome": "Delegado de Polícia",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "Uma tabela-verdade completa correspondente a uma proposição composta formada por 4 proposições simples distintas (P, Q, R e S) conterá exatamente quantas linhas?",
    "explicacao": "GABARITO: D. O número de linhas de uma tabela-verdade é dado por 2^n, onde n é o número de proposições simples. Para n = 4: 2^4 = 16 linhas.",
    "alternativas": [
      {
        "texto": "8 linhas.",
        "correta": false
      },
      {
        "texto": "12 linhas.",
        "correta": false
      },
      {
        "texto": "14 linhas.",
        "correta": false
      },
      {
        "texto": "16 linhas.",
        "correta": true
      },
      {
        "texto": "32 linhas.",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-008",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "671e06a6-a523-512a-a333-08f2542f694f",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "A proposição condicional 'Se chove, então a pista fica escorregadia' é logicamente equivalente à disjunção: 'Não chove ou a pista fica escorregadia'.",
    "explicacao": "GABARITO: CERTO. Equivalência clássica do condicional: (P -> Q) <-> (~P v Q) - regra do 'NEyMA' (Nega o antecedente OU Mantém o consequente).",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": true
      },
      {
        "texto": "Errado",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-009",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "ec12a7a2-bb3e-57c5-adfc-fade7c66bcfc",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Rodoviária Federal",
    "cargo_nome": "Policial Rodoviário Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "facil",
    "enunciado": "Uma proposição composta com o conectivo da disjunção exclusiva ('ou... ou...') será verdadeira quando ambas as proposições simples que a compõem forem verdadeiras.",
    "explicacao": "GABARITO: ERRADO. Na disjunção exclusiva (XOR), a proposição só é verdadeira quando EXATAMENTE UMA das proposições for verdadeira. Se ambas forem verdadeiras (ou ambas falsas), o resultado é FALSO.",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": false
      },
      {
        "texto": "Errado",
        "correta": true
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-010",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "ec12a7a2-bb3e-57c5-adfc-fade7c66bcfc",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Civil",
    "cargo_nome": "Escrivão de Polícia",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "A proposição bicondicional (P se e somente se Q) assume valor lógico verdadeiro quando ambas as proposições simples P e Q possuem valores lógicos iguais (ambas V ou ambas F).",
    "explicacao": "GABARITO: CERTO. A bicondicionalidade (P <-> Q) é verdadeira quando P e Q têm o mesmo valor de verdade.",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": true
      },
      {
        "texto": "Errado",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-011",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "ec12a7a2-bb3e-57c5-adfc-fade7c66bcfc",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "medio",
    "enunciado": "Uma equipe tática policial precisa selecionar 3 agentes a partir de um grupo de 8 policiais disponíveis para cumprir um mandado de busca. De quantas maneiras distintas essa equipe de 3 agentes pode ser formada?",
    "explicacao": "GABARITO: B. Como a ordem dos integrantes não altera a equipe, trata-se de combinação simples: C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 56 maneiras.",
    "alternativas": [
      {
        "texto": "24 maneiras.",
        "correta": false
      },
      {
        "texto": "56 maneiras.",
        "correta": true
      },
      {
        "texto": "120 maneiras.",
        "correta": false
      },
      {
        "texto": "336 maneiras.",
        "correta": false
      },
      {
        "texto": "512 maneiras.",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-012",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "48745dac-cbf3-5f1d-a0a2-1767a7d44429",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Rodoviária Federal",
    "cargo_nome": "Policial Rodoviário Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "Em uma blitz da PRF, foram abordados 100 veículos, dos quais 20 apresentavam irregularidades na documentação. Escolhendo-se aleatoriamente um desses veículos, a probabilidade de ele estar com a documentação rigorosamente regular é de 80%.",
    "explicacao": "GABARITO: CERTO. Veículos regulares = 100 - 20 = 80. Probabilidade = 80/100 = 80% (0,80).",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": true
      },
      {
        "texto": "Errado",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-013",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "79d058d3-3b1a-5aa3-98ce-f0232fc612d3",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Papiloscopista Policial Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "dificil",
    "enunciado": "Considere as premissas: P1: 'Todo criminoso deixa vestígios'; P2: 'João não deixou vestígios'. Conclui-se logicamente de forma válida que 'João não é criminoso'.",
    "explicacao": "GABARITO: CERTO. Silogismo válido (Modus Tollens aplicado a quantificador universal). Se todo criminoso deixa vestígio, quem não deixa vestígio não pode ser criminoso.",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": true
      },
      {
        "texto": "Errado",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-014",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "671e06a6-a523-512a-a333-08f2542f694f",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Civil",
    "cargo_nome": "Investigador de Polícia",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "A negação da proposição 'Se o suspeito foi intimado, ele compareceu à delegacia e prestou depoimento' é expressa corretamente por:",
    "explicacao": "GABARITO: E. A negação de P -> (Q ^ R) é P ^ ~(Q ^ R), que equivale a: P ^ (~Q v ~R) ('O suspeito foi intimado E ele não compareceu à delegacia OU não prestou depoimento').",
    "alternativas": [
      {
        "texto": "Se o suspeito não foi intimado, ele não compareceu nem prestou depoimento.",
        "correta": false
      },
      {
        "texto": "O suspeito não foi intimado ou compareceu à delegacia.",
        "correta": false
      },
      {
        "texto": "O suspeito foi intimado, mas compareceu e não prestou depoimento.",
        "correta": false
      },
      {
        "texto": "O suspeito não foi intimado e não compareceu à delegacia.",
        "correta": false
      },
      {
        "texto": "O suspeito foi intimado e não compareceu à delegacia ou não prestou depoimento.",
        "correta": true
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-015",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "791c7278-7511-50df-bddf-600d9b818aaf",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Civil",
    "cargo_nome": "Delegado de Polícia",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "O número total de senhas de 4 dígitos distintos que podem ser formadas utilizando-se exclusivamente os algarismos 1, 2, 3, 4, 5 e 6 é superior a 300.",
    "explicacao": "GABARITO: CERTO. Arranjo de 6 elementos tomados 4 a 4: A(6,4) = 6 * 5 * 4 * 3 = 360 senhas, valor estritamente superior a 300.",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": true
      },
      {
        "texto": "Errado",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-016",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "ec12a7a2-bb3e-57c5-adfc-fade7c66bcfc",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Escrivão de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "facil",
    "enunciado": "A proposição lógica 'O Brasil é uma República federativa e a capital da França é Paris' é uma conjunção que possui valor lógico verdadeiro.",
    "explicacao": "GABARITO: CERTO. Ambas as proposições simples são factualmente verdadeiras; logo, a conjunção (V ^ V) é verdadeira.",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": true
      },
      {
        "texto": "Errado",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-017",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "671e06a6-a523-512a-a333-08f2542f694f",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Rodoviária Federal",
    "cargo_nome": "Policial Rodoviário Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "A negação da proposição 'Nenhum policial faltou ao plantão' é logicamente equivalente a: 'Pelo menos um policial faltou ao plantão'.",
    "explicacao": "GABARITO: CERTO. A negação de 'Nenhum A é B' é 'Algum / Pelo menos um A é B'.",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": true
      },
      {
        "texto": "Errado",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-018",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "48745dac-cbf3-5f1d-a0a2-1767a7d44429",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Civil",
    "cargo_nome": "Investigador de Polícia",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "medio",
    "enunciado": "Em uma urna há 6 laudos periciais da Delegacia Norte e 4 laudos da Delegacia Sul. Retirando-se simultaneamente 2 laudos ao acaso, a probabilidade de ambos serem da Delegacia Norte é de:",
    "explicacao": "GABARITO: A. Total de pares possíveis: C(10, 2) = 45. Pares da Norte: C(6, 2) = 15. Probabilidade = 15 / 45 = 1/3 (aproximadamente 33,3%).",
    "alternativas": [
      {
        "texto": "1/3",
        "correta": true
      },
      {
        "texto": "1/2",
        "correta": false
      },
      {
        "texto": "2/5",
        "correta": false
      },
      {
        "texto": "3/10",
        "correta": false
      },
      {
        "texto": "2/3",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-019",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "ec12a7a2-bb3e-57c5-adfc-fade7c66bcfc",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "dificil",
    "enunciado": "Um argumento indutivo caracteriza-se por ter suas conclusões necessariamente verdadeiras caso todas as suas premissas sejam comprovadamente verdadeiras.",
    "explicacao": "GABARITO: ERRADO. Essa é a definição do argumento DEDUTIVO válido. No argumento indutivo, as premissas fornecem apenas suporte probabilístico à conclusão, sem garantia absoluta de verdade necessária.",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": false
      },
      {
        "texto": "Errado",
        "correta": true
      }
    ]
  },
  {
    "idSlug": "b10-rlm-01-020",
    "disciplina_id": "dac6313a-adfd-50ca-98a1-09fb195469ff",
    "assunto_id": "671e06a6-a523-512a-a333-08f2542f694f",
    "banca_nome": "Inédita / Estilo CEBRASPE",
    "orgao_nome": "Polícia Civil",
    "cargo_nome": "Investigador de Polícia",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "facil",
    "enunciado": "A dupla negação de uma proposição lógica P (isto é, ~(~P)) possui valor lógico equivalente à própria proposição original P.",
    "explicacao": "GABARITO: CERTO. Princípio da dupla negação: ~(~P) = P.",
    "alternativas": [
      {
        "texto": "Certo",
        "correta": true
      },
      {
        "texto": "Errado",
        "correta": false
      }
    ]
  }
];
