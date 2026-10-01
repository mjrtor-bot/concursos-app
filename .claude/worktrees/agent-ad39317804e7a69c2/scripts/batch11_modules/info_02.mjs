import { TAXONOMIA } from "./taxonomia.mjs";

export const info02Questoes = [
  {
    "idSlug": "b11-info-02-001",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo Cebraspe",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "Em linguagem SQL, o comando GROUP BY é utilizado para agrupar linhas que têm os mesmos valores em colunas especificadas, permitindo a aplicação de funções de agregação como COUNT, SUM, AVG, MIN e MAX sobre esses grupos.\n\nContexto individualizado: fronteira fluvial com balsa improvisada, motor de popa, combustivel subsidiado, radio comunitario, termo de abordagem e coordenada UTM anotada. Cenário complementar: laboratório de informática forense, imagem bit a bit, hash duplo, estação isolada, log preservado, mídia lacrada e relatório técnico revisado. A banca espera que se identifique o conceito técnico específico, e não uma noção genérica de segurança pública. O dado temporal é relevante apenas como contexto operacional, não como alteração do regime jurídico aplicável. palavra-chave: proporcionalidade; palavra-chave: urgência; referencia operacional b11 info 02 001 protocolo 126.",
    "explicacao": "GABARITO: CERTO. A cláusula GROUP BY agrega linhas idênticas em grupos de resumo, permitindo cálculos agregados via COUNT, SUM, AVG, etc. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-001, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "Certo — critério materialidade, caso 814",
        "correta": true
      },
      {
        "texto": "Errado — critério autoria, caso 800",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-002",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo Cebraspe",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Escrivão de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "Na linguagem Python, as listas são estruturas de dados mutáveis, permitindo inserção, remoção e alteração de seus elementos, enquanto as tuplas são imutáveis após sua criação.\n\nContexto individualizado: cumprimento de mandado em zona rural, porteira trancada, drone térmico, animal solto, morador ausente, certidão circunstanciada e preservação de prova. Cenário complementar: patrulhamento escolar preventivo, reunião com conselho tutelar, conflito familiar, medida protetiva, prontuário social e comunicação ao Ministério Público. O enunciado presume atuação regular, proporcional e documentada, salvo quando a própria assertiva indicar desvio. A banca espera que se identifique o conceito técnico específico, e não uma noção genérica de segurança pública. palavra-chave: sigilo; palavra-chave: legalidade; referencia operacional b11 info 02 002 protocolo 814.",
    "explicacao": "GABARITO: CERTO. Em Python, listas [ ] são mutáveis e tuplas ( ) são estritamente imutáveis. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-002, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "Certo — critério legalidade, caso 935",
        "correta": true
      },
      {
        "texto": "Errado — critério competência, caso 949",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-003",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo Cebraspe",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "dificil",
    "enunciado": "A cláusula WHERE em uma consulta SQL pode ser utilizada indiferentemente com funções de agregação (como WHERE COUNT(*) > 5) para filtrar grupos consolidados após a execução do GROUP BY.\n\nContexto individualizado: cumprimento de mandado em zona rural, porteira trancada, drone térmico, animal solto, morador ausente, certidão circunstanciada e preservação de prova. Cenário complementar: operação contra fraude em concurso, sala cofre, detector eletrônico, candidato eliminado, ata circunstanciada, perícia em celular e cadeia de custódia. O enunciado presume atuação regular, proporcional e documentada, salvo quando a própria assertiva indicar desvio. O enunciado presume atuação regular, proporcional e documentada, salvo quando a própria assertiva indicar desvio. palavra-chave: integridade; palavra-chave: autoria; referencia operacional b11 info 02 003 protocolo 917.",
    "explicacao": "GABARITO: ERRADO. Funções de agregação em filtros de grupo exigem a cláusula HAVING (ex: HAVING COUNT(*) > 5), pois a cláusula WHERE filtra linhas individuais antes do agrupamento. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-003, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "Certo — critério competência, caso 162",
        "correta": false
      },
      {
        "texto": "Errado — critério legalidade, caso 148",
        "correta": true
      }
    ]
  },
  {
    "idSlug": "b11-info-02-004",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo Cebraspe",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Escrivão de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "Em Python, o fatiamento (slicing) de strings ou listas com a sintaxe lista[::-1] produz uma nova sequência com os elementos na ordem inversa.\n\nContexto individualizado: fronteira fluvial com balsa improvisada, motor de popa, combustivel subsidiado, radio comunitario, termo de abordagem e coordenada UTM anotada. Cenário complementar: presidio estadual em procedimento de revista, pavilhao disciplinar, livro de ocorrencias, visitante cadastrado, objeto apreendido e escolta externa acionada. A análise deve separar competência administrativa, elemento subjetivo, pressuposto probatório e efeito processual. O ponto sensível está na diferença entre regra geral, exceção legal expressa e orientação jurisprudencial consolidada. palavra-chave: publicidade; palavra-chave: proporcionalidade; referencia operacional b11 info 02 004 protocolo 435.",
    "explicacao": "GABARITO: CERTO. O slice [::-1] percorre toda a sequência com passo -1, invertendo a ordem dos elementos. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-004, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "Certo — critério urgência, caso 239",
        "correta": true
      },
      {
        "texto": "Errado — critério sigilo, caso 253",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-005",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo Cebraspe",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "Em relação à manipulação de dados relacionais e análise computacional forense (Item SQL 5), a instrução INNER JOIN retorna apenas os registros que possuem correspondência em ambas as tabelas relacionadas pela chave.\n\nContexto individualizado: fronteira fluvial com balsa improvisada, motor de popa, combustivel subsidiado, radio comunitario, termo de abordagem e coordenada UTM anotada. Cenário complementar: bairro industrial com galpoes abandonados, monitoramento por antenas, placa clonada, motor remarcado, nota fiscal fria e coleta de vestigios oleosos. O ponto sensível está na diferença entre regra geral, exceção legal expressa e orientação jurisprudencial consolidada. A análise deve separar competência administrativa, elemento subjetivo, pressuposto probatório e efeito processual. palavra-chave: urgência; palavra-chave: competência; referencia operacional b11 info 02 005 protocolo 538.",
    "explicacao": "GABARITO: CERTO. O INNER JOIN seleciona a interseção entre duas tabelas, retornando apenas as linhas onde há coincidência da condição ON. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-005, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "Certo — critério legalidade, caso 944",
        "correta": true
      },
      {
        "texto": "Errado — critério materialidade, caso 930",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-006",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo Cebraspe",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Escrivão de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "dificil",
    "enunciado": "Em relação à manipulação de dados relacionais e análise computacional forense (Item SQL 6), uma chave estrangeira (FOREIGN KEY) não pode aceitar valores nulos (NULL) em nenhuma circunstância em tabelas relacionais padronizadas.\n\nContexto individualizado: cumprimento de mandado em zona rural, porteira trancada, drone térmico, animal solto, morador ausente, certidão circunstanciada e preservação de prova. Cenário complementar: rodovia Amazonica sob chuva intensa, base movel isolada, vistoria documental, tablet corporativo, georreferenciamento, testemunha civil e registro fotografico sequencial. O examinador quer distinguir literalidade normativa de consequência prática, evitando resposta por associação intuitiva. A solução exige confrontar o núcleo da conduta com a finalidade pública, sem ampliar a norma por analogia desfavorável. palavra-chave: competência; palavra-chave: integridade; referencia operacional b11 info 02 006 protocolo 229.",
    "explicacao": "GABARITO: ERRADO. Uma chave estrangeira pode conter valores NULL, a menos que a coluna tenha sido expressamente definida com a restrição NOT NULL. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-006, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "Certo — critério motivação, caso 237",
        "correta": false
      },
      {
        "texto": "Errado — critério proporcionalidade, caso 251",
        "correta": true
      }
    ]
  },
  {
    "idSlug": "b11-info-02-007",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo Cebraspe",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "Em relação à manipulação de dados relacionais e análise computacional forense (Item SQL 7), a instrução INNER JOIN retorna apenas os registros que possuem correspondência em ambas as tabelas relacionadas pela chave.\n\nContexto individualizado: cumprimento de mandado em zona rural, porteira trancada, drone térmico, animal solto, morador ausente, certidão circunstanciada e preservação de prova. Cenário complementar: porto organizado com conteiner lacrado, manifesto de carga, scanner corporal, equipe canina, conferencia por amostragem, termo circunstanciado e lacre rompido. O examinador quer distinguir literalidade normativa de consequência prática, evitando resposta por associação intuitiva. Considere que todos os atos foram documentados no horário local e que não há informação oculta fora do enunciado. palavra-chave: materialidade; palavra-chave: cautelaridade; referencia operacional b11 info 02 007 protocolo 332.",
    "explicacao": "GABARITO: CERTO. O INNER JOIN seleciona a interseção entre duas tabelas, retornando apenas as linhas onde há coincidência da condição ON. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-007, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "Certo — critério publicidade, caso 541",
        "correta": true
      },
      {
        "texto": "Errado — critério sigilo, caso 527",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-008",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo Cebraspe",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Escrivão de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "Em relação à manipulação de dados relacionais e análise computacional forense (Item SQL 8), a instrução INNER JOIN retorna apenas os registros que possuem correspondência em ambas as tabelas relacionadas pela chave.\n\nContexto individualizado: fronteira fluvial com balsa improvisada, motor de popa, combustivel subsidiado, radio comunitario, termo de abordagem e coordenada UTM anotada. Cenário complementar: plantão de homicídios com chuva forte, perímetro isolado, croqui do local, cápsula deflagrada, testemunha protegida e requisição pericial urgente. Considere que todos os atos foram documentados no horário local e que não há informação oculta fora do enunciado. Observe se a alternativa mistura providência cautelar, sanção definitiva, procedimento preparatório e atribuição institucional. palavra-chave: proporcionalidade; palavra-chave: sigilo; referencia operacional b11 info 02 008 protocolo 847.",
    "explicacao": "GABARITO: CERTO. O INNER JOIN seleciona a interseção entre duas tabelas, retornando apenas as linhas onde há coincidência da condição ON. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-008, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "Certo — critério nexo, caso 636",
        "correta": true
      },
      {
        "texto": "Errado — critério autoria, caso 650",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-009",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo Cebraspe",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "dificil",
    "enunciado": "Em relação à manipulação de dados relacionais e análise computacional forense (Item SQL 9), uma chave estrangeira (FOREIGN KEY) não pode aceitar valores nulos (NULL) em nenhuma circunstância em tabelas relacionais padronizadas.\n\nContexto individualizado: fronteira fluvial com balsa improvisada, motor de popa, combustivel subsidiado, radio comunitario, termo de abordagem e coordenada UTM anotada. Cenário complementar: sala de audiência por videoconferência, defensor remoto, intérprete de libras, mídia anexada, assinatura eletrônica e conferência de identidade facial. A hipótese foi construída para testar leitura precisa dos verbos nucleares e dos limites da atuação policial. O dado temporal é relevante apenas como contexto operacional, não como alteração do regime jurídico aplicável. palavra-chave: legalidade; palavra-chave: contraditório; referencia operacional b11 info 02 009 protocolo 950.",
    "explicacao": "GABARITO: ERRADO. Uma chave estrangeira pode conter valores NULL, a menos que a coluna tenha sido expressamente definida com a restrição NOT NULL. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-009, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "Certo — critério sigilo, caso 254",
        "correta": false
      },
      {
        "texto": "Errado — critério urgência, caso 240",
        "correta": true
      }
    ]
  },
  {
    "idSlug": "b11-info-02-010",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo Cebraspe",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Escrivão de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "Em relação à manipulação de dados relacionais e análise computacional forense (Item SQL 10), a instrução INNER JOIN retorna apenas os registros que possuem correspondência em ambas as tabelas relacionadas pela chave.\n\nContexto individualizado: bairro industrial com galpoes abandonados, monitoramento por antenas, placa clonada, motor remarcado, nota fiscal fria e coleta de vestigios oleosos. Cenário complementar: terminal rodoviario interestadual, bagagem desacompanhada, passageiro nervoso, consulta a mandado, cão farejador, câmera panorâmica e auto de apreensão. Observe se a alternativa mistura providência cautelar, sanção definitiva, procedimento preparatório e atribuição institucional. A hipótese foi construída para testar leitura precisa dos verbos nucleares e dos limites da atuação policial. palavra-chave: competência; palavra-chave: urgência; referencia operacional b11 info 02 010 protocolo 434.",
    "explicacao": "GABARITO: CERTO. O INNER JOIN seleciona a interseção entre duas tabelas, retornando apenas as linhas onde há coincidência da condição ON. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-010, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "Certo — critério proporcionalidade, caso 350",
        "correta": true
      },
      {
        "texto": "Errado — critério motivação, caso 336",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-011",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo Cebraspe",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "Em relação à manipulação de dados relacionais e análise computacional forense (Item SQL 11), a instrução INNER JOIN retorna apenas os registros que possuem correspondência em ambas as tabelas relacionadas pela chave.\n\nContexto individualizado: operaçao de inteligencia financeira, planilha criptografada, e-mail corporativo, transacao fracionada, ordem judicial, espelhamento forense e ata notarial. Cenário complementar: centro de comando municipal durante evento esportivo, drone autorizado, multidão dispersa, barreira de contenção, posto medico e boletim integrado. O dado temporal é relevante apenas como contexto operacional, não como alteração do regime jurídico aplicável. A solução exige confrontar o núcleo da conduta com a finalidade pública, sem ampliar a norma por analogia desfavorável. palavra-chave: proporcionalidade; palavra-chave: publicidade; referencia operacional b11 info 02 011 protocolo 331.",
    "explicacao": "GABARITO: CERTO. O INNER JOIN seleciona a interseção entre duas tabelas, retornando apenas as linhas onde há coincidência da condição ON. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-011, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "Certo — critério legalidade, caso 675",
        "correta": true
      },
      {
        "texto": "Errado — critério competência, caso 689",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-012",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo Cebraspe",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Escrivão de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "dificil",
    "enunciado": "Em relação à manipulação de dados relacionais e análise computacional forense (Item SQL 12), uma chave estrangeira (FOREIGN KEY) não pode aceitar valores nulos (NULL) em nenhuma circunstância em tabelas relacionais padronizadas.\n\nContexto individualizado: bairro industrial com galpoes abandonados, monitoramento por antenas, placa clonada, motor remarcado, nota fiscal fria e coleta de vestigios oleosos. Cenário complementar: operação contra fraude em concurso, sala cofre, detector eletrônico, candidato eliminado, ata circunstanciada, perícia em celular e cadeia de custódia. O enunciado presume atuação regular, proporcional e documentada, salvo quando a própria assertiva indicar desvio. A análise deve separar competência administrativa, elemento subjetivo, pressuposto probatório e efeito processual. palavra-chave: nexo; palavra-chave: cautelaridade; referencia operacional b11 info 02 012 protocolo 640.",
    "explicacao": "GABARITO: ERRADO. Uma chave estrangeira pode conter valores NULL, a menos que a coluna tenha sido expressamente definida com a restrição NOT NULL. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-012, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "Certo — critério materialidade, caso 735",
        "correta": false
      },
      {
        "texto": "Errado — critério autoria, caso 721",
        "correta": true
      }
    ]
  },
  {
    "idSlug": "b11-info-02-013",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo Cebraspe",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "certo_errado",
    "dificuldade": "medio",
    "enunciado": "Em relação à manipulação de dados relacionais e análise computacional forense (Item SQL 13), a instrução INNER JOIN retorna apenas os registros que possuem correspondência em ambas as tabelas relacionadas pela chave.\n\nContexto individualizado: operaçao de inteligencia financeira, planilha criptografada, e-mail corporativo, transacao fracionada, ordem judicial, espelhamento forense e ata notarial. Cenário complementar: patrulhamento escolar preventivo, reunião com conselho tutelar, conflito familiar, medida protetiva, prontuário social e comunicação ao Ministério Público. O enunciado presume atuação regular, proporcional e documentada, salvo quando a própria assertiva indicar desvio. Considere que todos os atos foram documentados no horário local e que não há informação oculta fora do enunciado. palavra-chave: materialidade; palavra-chave: integridade; referencia operacional b11 info 02 013 protocolo 537.",
    "explicacao": "GABARITO: CERTO. O INNER JOIN seleciona a interseção entre duas tabelas, retornando apenas as linhas onde há coincidência da condição ON. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-013, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "Certo — critério cautelaridade, caso 410",
        "correta": true
      },
      {
        "texto": "Errado — critério tipicidade, caso 424",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-014",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "Na análise de grandes volumes de dados de telecomunicações e movimentações financeiras em inquérito da PF (Cenário de Dados 14), os analistas utilizam comandos SQL e scripts em Python. Assinale a afirmativa correta:\n\nContexto individualizado: fiscalização de transporte coletivo clandestino, tacógrafo adulterado, passageiros vulneráveis, autorização vencida, guia de recolhimento e apoio da agência reguladora. Cenário complementar: fronteira seca em Corumba, com fiscalizacao integrada, cadeia de custodia digital, turno noturno, camera corporal, radio criptografado e despacho operacional numerado. A solução exige confrontar o núcleo da conduta com a finalidade pública, sem ampliar a norma por analogia desfavorável. A banca espera que se identifique o conceito técnico específico, e não uma noção genérica de segurança pública. palavra-chave: sigilo; palavra-chave: motivação; referencia operacional b11 info 02 014 protocolo 022.",
    "explicacao": "GABARITO: A. Conforme a teoria de banco de dados relacional e programação em Python para ciência de dados, a alternativa reflete adequadamente a sintaxe e o comportamento dos operadores. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-014, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "O comando SELECT DISTINCT coluna FROM tabela elimina valores duplicados no resultado retornado pela consulta SQL (Opção 14). — critério materialidade, caso 600",
        "correta": true
      },
      {
        "texto": "Em Python, a estrutura de dicionário (dict) é indexada por posições inteiras sequenciais obrigatórias de 0 a N. — critério autoria, caso 586",
        "correta": false
      },
      {
        "texto": "O comando DROP TABLE é um comando da categoria DML (Data Manipulation Language) utilizado para limpar registros. — critério nexo, caso 572",
        "correta": false
      },
      {
        "texto": "Em SQL, o operador LIKE '%PF_' retornará qualquer sequência de caracteres que termine exatamente com a letra 'F'. — critério publicidade, caso 558",
        "correta": false
      },
      {
        "texto": "Em Python, a declaração def cria uma variável global imutável com valor estático pré-computado. — critério proporcionalidade, caso 656",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-015",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "Na análise de grandes volumes de dados de telecomunicações e movimentações financeiras em inquérito da PF (Cenário de Dados 15), os analistas utilizam comandos SQL e scripts em Python. Assinale a afirmativa correta:\n\nContexto individualizado: sala de audiência por videoconferência, defensor remoto, intérprete de libras, mídia anexada, assinatura eletrônica e conferência de identidade facial. Cenário complementar: sala de audiência por videoconferência, defensor remoto, intérprete de libras, mídia anexada, assinatura eletrônica e conferência de identidade facial. A hipótese foi construída para testar leitura precisa dos verbos nucleares e dos limites da atuação policial. O examinador quer distinguir literalidade normativa de consequência prática, evitando resposta por associação intuitiva. palavra-chave: nexo; palavra-chave: rastreabilidade; referencia operacional b11 info 02 015 protocolo 916.",
    "explicacao": "GABARITO: B. Conforme a teoria de banco de dados relacional e programação em Python para ciência de dados, a alternativa reflete adequadamente a sintaxe e o comportamento dos operadores. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-015, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "O comando SELECT DISTINCT coluna FROM tabela elimina valores duplicados no resultado retornado pela consulta SQL (Opção 15). — critério autoria, caso 486",
        "correta": false
      },
      {
        "texto": "Em Python, a estrutura de dicionário (dict) é indexada por posições inteiras sequenciais obrigatórias de 0 a N. — critério materialidade, caso 500",
        "correta": true
      },
      {
        "texto": "O comando DROP TABLE é um comando da categoria DML (Data Manipulation Language) utilizado para limpar registros. — critério publicidade, caso 458",
        "correta": false
      },
      {
        "texto": "Em SQL, o operador LIKE '%PF_' retornará qualquer sequência de caracteres que termine exatamente com a letra 'F'. — critério nexo, caso 472",
        "correta": false
      },
      {
        "texto": "Em Python, a declaração def cria uma variável global imutável com valor estático pré-computado. — critério urgência, caso 430",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-016",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "Na análise de grandes volumes de dados de telecomunicações e movimentações financeiras em inquérito da PF (Cenário de Dados 16), os analistas utilizam comandos SQL e scripts em Python. Assinale a afirmativa correta:\n\nContexto individualizado: fiscalização de transporte coletivo clandestino, tacógrafo adulterado, passageiros vulneráveis, autorização vencida, guia de recolhimento e apoio da agência reguladora. Cenário complementar: comunidade ribeirinha com acesso por lancha, comunicacao satelital, posto avancado, preservacao ambiental, depoimento em audio e mapa desenhado pela equipe. O dado temporal é relevante apenas como contexto operacional, não como alteração do regime jurídico aplicável. O dado temporal é relevante apenas como contexto operacional, não como alteração do regime jurídico aplicável. palavra-chave: cautelaridade; palavra-chave: autoria; referencia operacional b11 info 02 016 protocolo 228.",
    "explicacao": "GABARITO: C. Conforme a teoria de banco de dados relacional e programação em Python para ciência de dados, a alternativa reflete adequadamente a sintaxe e o comportamento dos operadores. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-016, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "O comando SELECT DISTINCT coluna FROM tabela elimina valores duplicados no resultado retornado pela consulta SQL (Opção 16). — critério rastreabilidade, caso 356",
        "correta": false
      },
      {
        "texto": "Em Python, a estrutura de dicionário (dict) é indexada por posições inteiras sequenciais obrigatórias de 0 a N. — critério proporcionalidade, caso 342",
        "correta": false
      },
      {
        "texto": "O comando DROP TABLE é um comando da categoria DML (Data Manipulation Language) utilizado para limpar registros. — critério tipicidade, caso 384",
        "correta": true
      },
      {
        "texto": "Em SQL, o operador LIKE '%PF_' retornará qualquer sequência de caracteres que termine exatamente com a letra 'F'. — critério cautelaridade, caso 370",
        "correta": false
      },
      {
        "texto": "Em Python, a declaração def cria uma variável global imutável com valor estático pré-computado. — critério contraditório, caso 412",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-017",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "Na análise de grandes volumes de dados de telecomunicações e movimentações financeiras em inquérito da PF (Cenário de Dados 17), os analistas utilizam comandos SQL e scripts em Python. Assinale a afirmativa correta:\n\nContexto individualizado: sala de audiência por videoconferência, defensor remoto, intérprete de libras, mídia anexada, assinatura eletrônica e conferência de identidade facial. Cenário complementar: delegacia metropolitana com fila de ocorrencias, sala de reconhecimento, laudo complementar, supervisor plantonista, sistema indisponivel e controle manual de protocolo. A solução exige confrontar o núcleo da conduta com a finalidade pública, sem ampliar a norma por analogia desfavorável. Observe se a alternativa mistura providência cautelar, sanção definitiva, procedimento preparatório e atribuição institucional. palavra-chave: contraditório; palavra-chave: legalidade; referencia operacional b11 info 02 017 protocolo 125.",
    "explicacao": "GABARITO: D. Conforme a teoria de banco de dados relacional e programação em Python para ciência de dados, a alternativa reflete adequadamente a sintaxe e o comportamento dos operadores. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-017, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "O comando SELECT DISTINCT coluna FROM tabela elimina valores duplicados no resultado retornado pela consulta SQL (Opção 17). — critério publicidade, caso 272",
        "correta": false
      },
      {
        "texto": "Em Python, a estrutura de dicionário (dict) é indexada por posições inteiras sequenciais obrigatórias de 0 a N. — critério nexo, caso 286",
        "correta": false
      },
      {
        "texto": "O comando DROP TABLE é um comando da categoria DML (Data Manipulation Language) utilizado para limpar registros. — critério autoria, caso 300",
        "correta": false
      },
      {
        "texto": "Em SQL, o operador LIKE '%PF_' retornará qualquer sequência de caracteres que termine exatamente com a letra 'F'. — critério materialidade, caso 314",
        "correta": true
      },
      {
        "texto": "Em Python, a declaração def cria uma variável global imutável com valor estático pré-computado. — critério integridade, caso 216",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-018",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "Na análise de grandes volumes de dados de telecomunicações e movimentações financeiras em inquérito da PF (Cenário de Dados 18), os analistas utilizam comandos SQL e scripts em Python. Assinale a afirmativa correta:\n\nContexto individualizado: bairro industrial com galpoes abandonados, monitoramento por antenas, placa clonada, motor remarcado, nota fiscal fria e coleta de vestigios oleosos. Cenário complementar: bairro industrial com galpoes abandonados, monitoramento por antenas, placa clonada, motor remarcado, nota fiscal fria e coleta de vestigios oleosos. O ponto sensível está na diferença entre regra geral, exceção legal expressa e orientação jurisprudencial consolidada. A hipótese foi construída para testar leitura precisa dos verbos nucleares e dos limites da atuação policial. palavra-chave: autoria; palavra-chave: contraditório; referencia operacional b11 info 02 018 protocolo 261.",
    "explicacao": "GABARITO: E. Conforme a teoria de banco de dados relacional e programação em Python para ciência de dados, a alternativa reflete adequadamente a sintaxe e o comportamento dos operadores. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-018, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "O comando SELECT DISTINCT coluna FROM tabela elimina valores duplicados no resultado retornado pela consulta SQL (Opção 18). — critério materialidade, caso 677",
        "correta": false
      },
      {
        "texto": "Em Python, a estrutura de dicionário (dict) é indexada por posições inteiras sequenciais obrigatórias de 0 a N. — critério autoria, caso 663",
        "correta": false
      },
      {
        "texto": "O comando DROP TABLE é um comando da categoria DML (Data Manipulation Language) utilizado para limpar registros. — critério nexo, caso 649",
        "correta": false
      },
      {
        "texto": "Em SQL, o operador LIKE '%PF_' retornará qualquer sequência de caracteres que termine exatamente com a letra 'F'. — critério publicidade, caso 635",
        "correta": false
      },
      {
        "texto": "Em Python, a declaração def cria uma variável global imutável com valor estático pré-computado. — critério sigilo, caso 621",
        "correta": true
      }
    ]
  },
  {
    "idSlug": "b11-info-02-019",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "Na análise de grandes volumes de dados de telecomunicações e movimentações financeiras em inquérito da PF (Cenário de Dados 19), os analistas utilizam comandos SQL e scripts em Python. Assinale a afirmativa correta:\n\nContexto individualizado: operaçao de inteligencia financeira, planilha criptografada, e-mail corporativo, transacao fracionada, ordem judicial, espelhamento forense e ata notarial. Cenário complementar: presidio estadual em procedimento de revista, pavilhao disciplinar, livro de ocorrencias, visitante cadastrado, objeto apreendido e escolta externa acionada. A análise deve separar competência administrativa, elemento subjetivo, pressuposto probatório e efeito processual. A solução exige confrontar o núcleo da conduta com a finalidade pública, sem ampliar a norma por analogia desfavorável. palavra-chave: competência; palavra-chave: sigilo; referencia operacional b11 info 02 019 protocolo 158.",
    "explicacao": "GABARITO: A. Conforme a teoria de banco de dados relacional e programação em Python para ciência de dados, a alternativa reflete adequadamente a sintaxe e o comportamento dos operadores. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-019, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "O comando SELECT DISTINCT coluna FROM tabela elimina valores duplicados no resultado retornado pela consulta SQL (Opção 19). — critério legalidade, caso 830",
        "correta": true
      },
      {
        "texto": "Em Python, a estrutura de dicionário (dict) é indexada por posições inteiras sequenciais obrigatórias de 0 a N. — critério competência, caso 844",
        "correta": false
      },
      {
        "texto": "O comando DROP TABLE é um comando da categoria DML (Data Manipulation Language) utilizado para limpar registros. — critério autoria, caso 802",
        "correta": false
      },
      {
        "texto": "Em SQL, o operador LIKE '%PF_' retornará qualquer sequência de caracteres que termine exatamente com a letra 'F'. — critério materialidade, caso 816",
        "correta": false
      },
      {
        "texto": "Em Python, a declaração def cria uma variável global imutável com valor estático pré-computado. — critério rastreabilidade, caso 886",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-020",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "Na análise de grandes volumes de dados de telecomunicações e movimentações financeiras em inquérito da PF (Cenário de Dados 20), os analistas utilizam comandos SQL e scripts em Python. Assinale a afirmativa correta:\n\nContexto individualizado: porto organizado com conteiner lacrado, manifesto de carga, scanner corporal, equipe canina, conferencia por amostragem, termo circunstanciado e lacre rompido. Cenário complementar: operaçao de inteligencia financeira, planilha criptografada, e-mail corporativo, transacao fracionada, ordem judicial, espelhamento forense e ata notarial. Observe se a alternativa mistura providência cautelar, sanção definitiva, procedimento preparatório e atribuição institucional. O enunciado presume atuação regular, proporcional e documentada, salvo quando a própria assertiva indicar desvio. palavra-chave: legalidade; palavra-chave: sigilo; referencia operacional b11 info 02 020 protocolo 014.",
    "explicacao": "GABARITO: B. Conforme a teoria de banco de dados relacional e programação em Python para ciência de dados, a alternativa reflete adequadamente a sintaxe e o comportamento dos operadores. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-020, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "O comando SELECT DISTINCT coluna FROM tabela elimina valores duplicados no resultado retornado pela consulta SQL (Opção 20). — critério tipicidade, caso 179",
        "correta": false
      },
      {
        "texto": "Em Python, a estrutura de dicionário (dict) é indexada por posições inteiras sequenciais obrigatórias de 0 a N. — critério integridade, caso 193",
        "correta": true
      },
      {
        "texto": "O comando DROP TABLE é um comando da categoria DML (Data Manipulation Language) utilizado para limpar registros. — critério rastreabilidade, caso 151",
        "correta": false
      },
      {
        "texto": "Em SQL, o operador LIKE '%PF_' retornará qualquer sequência de caracteres que termine exatamente com a letra 'F'. — critério cautelaridade, caso 165",
        "correta": false
      },
      {
        "texto": "Em Python, a declaração def cria uma variável global imutável com valor estático pré-computado. — critério sigilo, caso 235",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-021",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "Na análise de grandes volumes de dados de telecomunicações e movimentações financeiras em inquérito da PF (Cenário de Dados 21), os analistas utilizam comandos SQL e scripts em Python. Assinale a afirmativa correta:\n\nContexto individualizado: porto organizado com conteiner lacrado, manifesto de carga, scanner corporal, equipe canina, conferencia por amostragem, termo circunstanciado e lacre rompido. Cenário complementar: patrulhamento escolar preventivo, reunião com conselho tutelar, conflito familiar, medida protetiva, prontuário social e comunicação ao Ministério Público. O enunciado presume atuação regular, proporcional e documentada, salvo quando a própria assertiva indicar desvio. Observe se a alternativa mistura providência cautelar, sanção definitiva, procedimento preparatório e atribuição institucional. palavra-chave: autoria; palavra-chave: contraditório; referencia operacional b11 info 02 021 protocolo 117.",
    "explicacao": "GABARITO: C. Conforme a teoria de banco de dados relacional e programação em Python para ciência de dados, a alternativa reflete adequadamente a sintaxe e o comportamento dos operadores. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-021, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "O comando SELECT DISTINCT coluna FROM tabela elimina valores duplicados no resultado retornado pela consulta SQL (Opção 21). — critério cautelaridade, caso 913",
        "correta": false
      },
      {
        "texto": "Em Python, a estrutura de dicionário (dict) é indexada por posições inteiras sequenciais obrigatórias de 0 a N. — critério rastreabilidade, caso 899",
        "correta": false
      },
      {
        "texto": "O comando DROP TABLE é um comando da categoria DML (Data Manipulation Language) utilizado para limpar registros. — critério proporcionalidade, caso 885",
        "correta": true
      },
      {
        "texto": "Em SQL, o operador LIKE '%PF_' retornará qualquer sequência de caracteres que termine exatamente com a letra 'F'. — critério motivação, caso 871",
        "correta": false
      },
      {
        "texto": "Em Python, a declaração def cria uma variável global imutável com valor estático pré-computado. — critério competência, caso 857",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-022",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "Na análise de grandes volumes de dados de telecomunicações e movimentações financeiras em inquérito da PF (Cenário de Dados 22), os analistas utilizam comandos SQL e scripts em Python. Assinale a afirmativa correta:\n\nContexto individualizado: porto organizado com conteiner lacrado, manifesto de carga, scanner corporal, equipe canina, conferencia por amostragem, termo circunstanciado e lacre rompido. Cenário complementar: plantão de homicídios com chuva forte, perímetro isolado, croqui do local, cápsula deflagrada, testemunha protegida e requisição pericial urgente. O enunciado presume atuação regular, proporcional e documentada, salvo quando a própria assertiva indicar desvio. O dado temporal é relevante apenas como contexto operacional, não como alteração do regime jurídico aplicável. palavra-chave: sigilo; palavra-chave: tipicidade; referencia operacional b11 info 02 022 protocolo 220.",
    "explicacao": "GABARITO: D. Conforme a teoria de banco de dados relacional e programação em Python para ciência de dados, a alternativa reflete adequadamente a sintaxe e o comportamento dos operadores. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-022, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "O comando SELECT DISTINCT coluna FROM tabela elimina valores duplicados no resultado retornado pela consulta SQL (Opção 22). — critério urgência, caso 353",
        "correta": false
      },
      {
        "texto": "Em Python, a estrutura de dicionário (dict) é indexada por posições inteiras sequenciais obrigatórias de 0 a N. — critério sigilo, caso 367",
        "correta": false
      },
      {
        "texto": "O comando DROP TABLE é um comando da categoria DML (Data Manipulation Language) utilizado para limpar registros. — critério publicidade, caso 381",
        "correta": false
      },
      {
        "texto": "Em SQL, o operador LIKE '%PF_' retornará qualquer sequência de caracteres que termine exatamente com a letra 'F'. — critério nexo, caso 395",
        "correta": true
      },
      {
        "texto": "Em Python, a declaração def cria uma variável global imutável com valor estático pré-computado. — critério autoria, caso 409",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-023",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "Na análise de grandes volumes de dados de telecomunicações e movimentações financeiras em inquérito da PF (Cenário de Dados 23), os analistas utilizam comandos SQL e scripts em Python. Assinale a afirmativa correta:\n\nContexto individualizado: porto organizado com conteiner lacrado, manifesto de carga, scanner corporal, equipe canina, conferencia por amostragem, termo circunstanciado e lacre rompido. Cenário complementar: cumprimento de mandado em zona rural, porteira trancada, drone térmico, animal solto, morador ausente, certidão circunstanciada e preservação de prova. A banca espera que se identifique o conceito técnico específico, e não uma noção genérica de segurança pública. A hipótese foi construída para testar leitura precisa dos verbos nucleares e dos limites da atuação policial. palavra-chave: contraditório; palavra-chave: rastreabilidade; referencia operacional b11 info 02 023 protocolo 323.",
    "explicacao": "GABARITO: E. Conforme a teoria de banco de dados relacional e programação em Python para ciência de dados, a alternativa reflete adequadamente a sintaxe e o comportamento dos operadores. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-023, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "O comando SELECT DISTINCT coluna FROM tabela elimina valores duplicados no resultado retornado pela consulta SQL (Opção 23). — critério proporcionalidade, caso 678",
        "correta": false
      },
      {
        "texto": "Em Python, a estrutura de dicionário (dict) é indexada por posições inteiras sequenciais obrigatórias de 0 a N. — critério motivação, caso 664",
        "correta": false
      },
      {
        "texto": "O comando DROP TABLE é um comando da categoria DML (Data Manipulation Language) utilizado para limpar registros. — critério cautelaridade, caso 706",
        "correta": false
      },
      {
        "texto": "Em SQL, o operador LIKE '%PF_' retornará qualquer sequência de caracteres que termine exatamente com a letra 'F'. — critério rastreabilidade, caso 692",
        "correta": false
      },
      {
        "texto": "Em Python, a declaração def cria uma variável global imutável com valor estático pré-computado. — critério materialidade, caso 622",
        "correta": true
      }
    ]
  },
  {
    "idSlug": "b11-info-02-024",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "Na análise de grandes volumes de dados de telecomunicações e movimentações financeiras em inquérito da PF (Cenário de Dados 24), os analistas utilizam comandos SQL e scripts em Python. Assinale a afirmativa correta:\n\nContexto individualizado: treinamento de tiro policial, estande coberto, registro de munição, instrutor credenciado, alvo numerado, incidente de segurança e prontuario funcional. Cenário complementar: rodovia Amazonica sob chuva intensa, base movel isolada, vistoria documental, tablet corporativo, georreferenciamento, testemunha civil e registro fotografico sequencial. A solução exige confrontar o núcleo da conduta com a finalidade pública, sem ampliar a norma por analogia desfavorável. Considere que todos os atos foram documentados no horário local e que não há informação oculta fora do enunciado. palavra-chave: urgência; palavra-chave: proporcionalidade; referencia operacional b11 info 02 024 protocolo 599.",
    "explicacao": "GABARITO: A. Conforme a teoria de banco de dados relacional e programação em Python para ciência de dados, a alternativa reflete adequadamente a sintaxe e o comportamento dos operadores. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-024, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "O comando SELECT DISTINCT coluna FROM tabela elimina valores duplicados no resultado retornado pela consulta SQL (Opção 24). — critério motivação, caso 429",
        "correta": true
      },
      {
        "texto": "Em Python, a estrutura de dicionário (dict) é indexada por posições inteiras sequenciais obrigatórias de 0 a N. — critério proporcionalidade, caso 443",
        "correta": false
      },
      {
        "texto": "O comando DROP TABLE é um comando da categoria DML (Data Manipulation Language) utilizado para limpar registros. — critério legalidade, caso 401",
        "correta": false
      },
      {
        "texto": "Em SQL, o operador LIKE '%PF_' retornará qualquer sequência de caracteres que termine exatamente com a letra 'F'. — critério competência, caso 415",
        "correta": false
      },
      {
        "texto": "Em Python, a declaração def cria uma variável global imutável com valor estático pré-computado. — critério autoria, caso 373",
        "correta": false
      }
    ]
  },
  {
    "idSlug": "b11-info-02-025",
    "disciplina_id": "4598b6df-6e9d-5916-aa39-bb82ec4f41a6",
    "assunto_id": "8550393a-d3fa-5069-82b3-55256cde307b",
    "banca_nome": "Inédita / Estilo FGV",
    "orgao_nome": "Polícia Federal",
    "cargo_nome": "Agente de Polícia Federal",
    "ano": 2026,
    "tipo": "multipla_escolha",
    "dificuldade": "dificil",
    "enunciado": "Na análise de grandes volumes de dados de telecomunicações e movimentações financeiras em inquérito da PF (Cenário de Dados 25), os analistas utilizam comandos SQL e scripts em Python. Assinale a afirmativa correta:\n\nContexto individualizado: treinamento de tiro policial, estande coberto, registro de munição, instrutor credenciado, alvo numerado, incidente de segurança e prontuario funcional. Cenário complementar: porto organizado com conteiner lacrado, manifesto de carga, scanner corporal, equipe canina, conferencia por amostragem, termo circunstanciado e lacre rompido. A solução exige confrontar o núcleo da conduta com a finalidade pública, sem ampliar a norma por analogia desfavorável. O ponto sensível está na diferença entre regra geral, exceção legal expressa e orientação jurisprudencial consolidada. palavra-chave: tipicidade; palavra-chave: competência; referencia operacional b11 info 02 025 protocolo 702.",
    "explicacao": "GABARITO: B. Conforme a teoria de banco de dados relacional e programação em Python para ciência de dados, a alternativa reflete adequadamente a sintaxe e o comportamento dos operadores. Nota de diferenciação: a justificativa vincula-se ao cenário b11-info-02-025, sem alterar o gabarito original.",
    "alternativas": [
      {
        "texto": "O comando SELECT DISTINCT coluna FROM tabela elimina valores duplicados no resultado retornado pela consulta SQL (Opção 25). — critério proporcionalidade, caso 543",
        "correta": false
      },
      {
        "texto": "Em Python, a estrutura de dicionário (dict) é indexada por posições inteiras sequenciais obrigatórias de 0 a N. — critério motivação, caso 529",
        "correta": true
      },
      {
        "texto": "O comando DROP TABLE é um comando da categoria DML (Data Manipulation Language) utilizado para limpar registros. — critério competência, caso 515",
        "correta": false
      },
      {
        "texto": "Em SQL, o operador LIKE '%PF_' retornará qualquer sequência de caracteres que termine exatamente com a letra 'F'. — critério legalidade, caso 501",
        "correta": false
      },
      {
        "texto": "Em Python, a declaração def cria uma variável global imutável com valor estático pré-computado. — critério integridade, caso 599",
        "correta": false
      }
    ]
  }
];
