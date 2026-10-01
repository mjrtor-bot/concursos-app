import { TAXONOMIA } from "./taxonomia.mjs";

export const chunk3 = [
  // 031 - Provas e Perícia (C/E)
  {
    idSlug: "batch3-dpp-031",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "De acordo com o art. 158 do Código de Processo Penal, quando a infração deixar vestígios, será indispensável o exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado.",
    explicacao: "GABARITO: CERTO. Art. 158 do CPP: 'Quando a infração deixar vestígios, será indispensável o exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado'. Essa é a regra basilar da tarifação probatória atenuada dos crimes não transeuntes no direito processual penal brasileiro.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O dispositivo legal expressamente impõe a indispensabilidade da perícia quando há vestígios e veda expressamente que a confissão substitua o exame pericial."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está correto, pois reproduz com exatidão a dicção do art. 158 do Código de Processo Penal."
      }
    ]
  },

  // 032 - Provas Ilícitas (M/E)
  {
    idSlug: "batch3-dpp-032",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "FGV",
    orgao_nome: "PC-SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em operação policial, agentes de polícia ingressaram ilegalmente na residência de um suspeito sem mandado e sem fundadas razões, encontrando uma agenda com anotações de contabilidade criminosa e o endereço de um galpão. No galpão, apreenderam grande quantidade de fuzis. Concomitantemente, a Polícia Civil já havia deferido, em procedimento investigatório autônomo baseado em denúncia e vigilância de campo prévia, mandado de busca judicial para aquele mesmo galpão, o qual seria cumprido na manhã seguinte. Sobre a admissibilidade das provas e a teoria dos frutos da árvore envenenada (fruits of the poisonous tree), assinale a afirmativa correta:",
    explicacao: "GABARITO: B. O art. 157, § 1º do CPP prevê a teoria dos frutos da árvore envenenada (ilicitude por derivação), mas ressalva: 'São também inadmissíveis as provas derivadas das ilícitas, salvo quando não evidenciado o nexo de causalidade entre umas e outras, ou quando as derivadas puderem ser obtidas por uma fonte independente'. No caso, a existência de procedimento prévio e autônomo com mandado próprio configura fonte independente e descoberta inevitável (art. 157, § 2º CPP).",
    alternativas: [
      {
        letra: "A",
        texto: "A apreensão dos fuzis no galpão é prova absolutamente ilícita por derivação e deve ser desentranhada, sendo vedada qualquer mitigação da teoria dos frutos da árvore envenenada.",
        correta: false,
        explicacao_especifica: "A teoria da ilicitude por derivação admite expressamente as exceções da fonte independente e da descoberta inevitável (art. 157, §§ 1º e 2º CPP)."
      },
      {
        letra: "B",
        texto: "A prova obtida no galpão é admissível com base na teoria da fonte independente e da descoberta inevitável, haja vista que a investigação autônoma prévia obteria validamente os mesmos elementos materiais independentemente da violação domiciliar originária.",
        correta: true,
        explicacao_especifica: "Aplicação escorreita do art. 157, §§ 1º e 2º do CPP e da jurisprudência consolidada do STF e STJ."
      },
      {
        letra: "C",
        texto: "A apreensão da agenda na residência é convalidada retroativamente pela posterior confirmação da ilicitude dos fuzis no galpão.",
        correta: false,
        explicacao_especifica: "O resultado exitoso da diligência não convalida a ilicitude da busca domiciliar originária desprovida de justa causa."
      },
      {
        letra: "D",
        texto: "No direito brasileiro, qualquer prova material derivada de ato ilícito é nula de pleno direito, não se aplicando a teoria norte-americana da descoberta inevitável.",
        correta: false,
        explicacao_especifica: "A Lei 11.690/2008 positivou expressamente a exceção da fonte independente no art. 157, §§ 1º e 2º do CPP."
      },
      {
        letra: "E",
        texto: "As provas ilícitas e suas derivadas somente podem ser utilizadas pela acusação quando se tratar de apuração de crime contra a administração pública.",
        correta: false,
        explicacao_especifica: "A vedação das provas ilícitas é garantia constitucional (art. 5º, LVI CF), admitindo-se uso excepcional exclusivamente pro reo."
      }
    ]
  },

  // 033 - Provas Digitais / Celular (C/E)
  {
    idSlug: "batch3-dpp-033",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Durante fiscalização de rotina na rodovia federal, policiais rodoviários federais prenderam em flagrante o condutor de um caminhão transportando entorpecentes e, imediatamente após a contenção, acessaram sem autorização judicial o aparelho celular apreendido, examinando conversas íntimas, registros de chamadas e mensagens no aplicativo WhatsApp. Conforme jurisprudência pacífica do STJ e do STF, o acesso aos dados e comunicações telefônicas armazenadas em smartphone apreendido em flagrante depende de prévia autorização judicial, sendo ilícita a prova colhida diretamente pelos policiais sem o competente mandado.",
    explicacao: "GABARITO: CERTO. STJ (6ª e 5ª Turmas) e STF (Tema 977 / RE 1.037.287): o acesso a dados de mensagens de texto e aplicativos de comunicação (como WhatsApp) contidos no aparelho telefônico apreendido exige prévia autorização judicial, sendo nula a prova obtida por devassa direta da autoridade policial sem ordem judicial expressa.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A jurisprudência dos Tribunais Superiores protege a intimidade e o sigilo de dados telefônicos (art. 5º, X e XII CF), vedando o acesso policial direto a mensagens em smartphone sem autorização judicial."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A proposição está correta. A apreensão do aparelho celular é legítima no flagrante, mas o acesso ao seu conteúdo e mensagens privadas demanda ordem judicial prévia."
      }
    ]
  },

  // 034 - Peritos Oficiais e Não Oficiais (M/E)
  {
    idSlug: "batch3-dpp-034",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "IBFC",
    orgao_nome: "PC-AC",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 159 do Código de Processo Penal, a realização dos exames periciais no processo penal obedece a regras específicas quanto à qualificação dos examinadores. Sobre o tema, assinale a alternativa correta:",
    explicacao: "GABARITO: B. Art. 159 do CPP: 'O exame de corpo de delito e outras perícias serão realizados por perito oficial, portador de diploma de curso superior. § 1º Na falta de perito oficial, o exame será realizado por 2 (duas) pessoas idôneas, portadoras de diploma de curso superior preferencialmente na área específica, dentre as que tiverem habilitação técnica relacionada com a natureza do exame'.",
    alternativas: [
      {
        letra: "A",
        texto: "A perícia oficial deve ser obrigatoriamente realizada por junta de no mínimo 3 (três) peritos oficiais de carreira.",
        correta: false,
        explicacao_especifica: "A regra do caput do art. 159 exige apenas 1 (um) perito oficial (redação dada pela Lei 11.690/2008)."
      },
      {
        letra: "B",
        texto: "Na falta de perito oficial, o exame será realizado por 2 (duas) pessoas idôneas, portadoras de diploma de curso superior preferencialmente na área específica.",
        correta: true,
        explicacao_especifica: "Transcrição exata do art. 159, § 1º do CPP."
      },
      {
        letra: "C",
        texto: "Os peritos não oficiais não prestam compromisso de bem e fielmente desempenharem o encargo, haja vista a presunção legal de veracidade.",
        correta: false,
        explicacao_especifica: "Os peritos não oficiais devem prestar o compromisso formal de bem e fielmente desempenhar o encargo (art. 159, § 2º CPP)."
      },
      {
        letra: "D",
        texto: "A indicação de assistente técnico pelas partes só é admitida após o trânsito em julgado da sentença condenatória.",
        correta: false,
        explicacao_especifica: "O assistente técnico pode ser indicado após a conclusão dos exames pelos peritos oficiais e a admissão pelo juiz (art. 159, § 4º CPP)."
      },
      {
        letra: "E",
        texto: "Qualquer cidadão alfabetizado pode atuar como perito não oficial, independentemente de possuir diploma de nível superior.",
        correta: false,
        explicacao_especifica: "O § 1º do art. 159 do CPP exige categoricamente que os peritos não oficiais sejam portadores de diploma de curso superior."
      }
    ]
  },

  // 035 - Perfil Genético (C/E)
  {
    idSlug: "batch3-dpp-035",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Ao julgar o Tema nº 1.070 de Repercussão Geral (RE 973.837/MG), o Supremo Tribunal Federal fixou a tese de que é constitucional a identificação do perfil genético de condenados por crimes dolosos cometidos com violência grave contra a pessoa ou por crimes contra a dignidade sexual, nos termos do art. 9º-A da Lei de Execução Penal, não violando essa providência o direito ao silêncio nem o princípio da não autoincriminação (nemo tenetur se detegere).",
    explicacao: "GABARITO: CERTO. STF, Tema 1.070 (RE 973.837/MG, Plenário): A coleta obrigatória e identificação de perfil genético de condenados por crimes hediondos ou praticados com violência de natureza grave/crimes sexuais é compatível com a Constituição Federal e harmoniza-se com o princípio da dignidade da pessoa humana e a garantia contra a autoincriminação.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O STF considerou legítima e constitucional a extração compulsória de DNA para o Banco Nacional de Perfis Genéticos no âmbito da execução penal."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. A tese vinculante do Tema 1.070 do STF consolidou a constitucionalidade do art. 9º-A da LEP."
      }
    ]
  },

  // 036 - Interceptação Telefônica (M/E)
  {
    idSlug: "batch3-dpp-036",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "FGV",
    orgao_nome: "PC-RJ",
    cargo_nome: "Inspetor de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A Lei nº 9.296/1996 regulamenta a interceptação de comunicações telefônicas e de sistemas de telemática para prova em investigação criminal e em instrução processual penal. De acordo com os requisitos legais e a jurisprudência dos Tribunais Superiores, a interceptação telefônica:",
    explicacao: "GABARITO: D. Art. 2º da Lei 9.296/96: não será admitida quando o fato constituir infração penal punida, no máximo, com pena de detenção (inciso III). Além disso, a lei estabelece o prazo de 15 dias, renovável sucessivamente por decisão fundamentada se comprovada a indispensabilidade da medida (jurisprudência consolidada do STF e STJ).",
    alternativas: [
      {
        letra: "A",
        texto: "Pode ser determinada pela autoridade policial de ofício durante o inquérito policial, comunicando-se ao juiz em 24 horas.",
        correta: false,
        explicacao_especifica: "A cláusula de reserva de jurisdição (art. 5º, XII CF) veda qualquer interceptação determinada diretamente por autoridade policial."
      },
      {
        letra: "B",
        texto: "É admitida para a apuração de qualquer infração penal, inclusive contravenções penais e crimes apenados apenas com detenção.",
        correta: false,
        explicacao_especifica: "O art. 2º, III da Lei 9.296/96 veda a interceptação para crimes punidos no máximo com detenção e contravenções."
      },
      {
        letra: "C",
        texto: "Possui prazo improrrogável de 15 dias, sendo nula qualquer prorrogação ainda que o crime seja permanente.",
        correta: false,
        explicacao_especifica: "O STF e o STJ admitem sucessivas renovações quinzenais desde que motivadas e indispensáveis."
      },
      {
        letra: "D",
        texto: "Não será admitida se o fato investigado for punido com pena máxima de detenção ou quando a prova puder ser feita por outros meios disponíveis e menos invasivos.",
        correta: true,
        explicacao_especifica: "Requisitos negativos expressos no art. 2º, incisos II e III da Lei nº 9.296/1996."
      },
      {
        letra: "E",
        texto: "Dispensa transcrição resumida ou integral dos diálogos relevantes, bastando a gravação magnética em sigilo absoluto.",
        correta: false,
        explicacao_especifica: "A degravação dos trechos relevantes que subsidiam a acusação é obrigatória para assegurar o contraditório e a ampla defesa."
      }
    ]
  },

  // 037 - Gravação Clandestina (C/E)
  {
    idSlug: "batch3-dpp-037",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Empresário vítima de extorsão por agente público gravou, por meio de seu aparelho celular, a conversa presencial mantida com o concussor, sem o conhecimento nem a autorização deste, entregando o arquivo de áudio à Polícia Federal para instruir a investigação. Nessa situação, conforme entendimento consolidado do Supremo Tribunal Federal (Tema nº 969 de Repercussão Geral), a gravação ambiental realizada clandestinamente por um dos interlocutores sem o conhecimento do outro é prova lícita e válida, podendo ser utilizada em processo penal para a defesa de direito próprio contra a prática criminosa.",
    explicacao: "GABARITO: CERTO. STF, Tema 969 de Repercussão Geral (RE 1.040.515): 'É lícita a prova consistente em gravação ambiental realizada por um dos interlocutores sem conhecimento do outro, para fins de defesa de direito próprio ou comprovação de ilícito penal praticado pelo interlocutor'. A gravação clandestina distingue-se da interceptação ambiental feita por terceiros desprovida de ordem judicial.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A gravação ambiental realizada por um dos interlocutores em autodefesa ou documentação de crime é plenamente válida e lícita."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A assertiva está correta, refletindo a jurisprudência pacífica do STF e STJ sobre a licitude da gravação realizada por participante do diálogo."
      }
    ]
  },

  // 038 - Confissão e Provas (M/E)
  {
    idSlug: "batch3-dpp-038",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "VUNESP",
    orgao_nome: "PC-SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Sobre o valor probatório da confissão do réu no Código de Processo Penal brasileiro (arts. 197 a 200), assinale a afirmativa correta:",
    explicacao: "GABARITO: C. Art. 197 do CPP: o valor da confissão se aferirá pelos critérios adotados para os outros elementos de prova; art. 200: a confissão é retratável e divisível. Além disso, o art. 155 veda condenação baseada exclusivamente em elementos informativos do inquérito policial.",
    alternativas: [
      {
        letra: "A",
        texto: "A confissão possui valor probatório absoluto no sistema penal pátrio (rainha das provas), dispensando a realização de outras diligências instrutórias.",
        correta: false,
        explicacao_especifica: "O direito brasileiro adotou o sistema da persuasão racional, no qual a confissão possui valor probatório relativo (art. 197 CPP)."
      },
      {
        letra: "B",
        texto: "A confissão é irretratável e indivisível, vinculando o juiz aos fatos confessados em sua integralidade.",
        correta: false,
        explicacao_especifica: "O art. 200 do CPP expressamente dispõe que a confissão é retratável e divisível."
      },
      {
        letra: "C",
        texto: "O valor da confissão será aferido pelos critérios adotados para os demais elementos de prova, devendo o juiz confrontá-la com as outras provas colhidas no processo, sendo ela retratável e divisível.",
        correta: true,
        explicacao_especifica: "Combinação exata dos arts. 197 e 200 do CPP e do princípio do livre convencimento motivado."
      },
      {
        letra: "D",
        texto: "A confissão extrajudicial prestada na fase do inquérito policial autoriza a condenação sumária do acusado independentemente de instrução em juízo.",
        correta: false,
        explicacao_especifica: "O juiz não pode fundamentar sua decisão exclusivamente nos elementos informativos colhidos na investigação (art. 155 CPP)."
      },
      {
        letra: "E",
        texto: "O silêncio do réu durante o interrogatório importa em confissão ficta e presunção de veracidade da imputação ministerial.",
        correta: false,
        explicacao_especifica: "O silêncio não importa em confissão nem pode ser interpretado em prejuízo da defesa (art. 186, parágrafo único CPP e art. 5º, LXIII CF)."
      }
    ]
  },

  // 039 - Prova Testemunhal (C/E)
  {
    idSlug: "batch3-dpp-039",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil de Pernambuco (PC-PE)",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 206 do Código de Processo Penal, a testemunha não poderá eximir-se da obrigação de depor; poderão, entretanto, recusar-se a fazê-lo o ascendente ou descendente, o afim em linha reta, o cônjuge, ainda que desquitado, o irmão e o pai, a mãe, ou o filho adotivo do acusado, salvo quando não for possível, por outro modo, obter-se ou integrar-se a prova do fato e de suas circunstâncias.",
    explicacao: "GABARITO: CERTO. Art. 206 do CPP: 'A testemunha não poderá eximir-se da obrigação de depor. Poderão, entretanto, recusar-se a fazê-lo o ascendente ou descendente, o afim em linha reta, o cônjuge, ainda que desquitado, o irmão e o pai, a mãe, ou o filho adotivo do acusado, salvo quando não for possível, por outro modo, obter-se ou integrar-se a prova do fato e de suas circunstâncias'.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A assertiva descreve perfeitamente o dever geral de testemunhar e a exceção do direito de recusa dos familiares próximos e suas ressalvas."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. Reproduz fielmente os termos do art. 206 do Código de Processo Penal."
      }
    ]
  },

  // 040 - Colaboração Premiada e Provas (M/E)
  {
    idSlug: "batch3-dpp-040",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "AOCP",
    orgao_nome: "PC-PA",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No âmbito das organizações criminosas e da instrução probatória, a Lei nº 12.850/2013 estabelece regras estritas sobre o instituto da colaboração premiada e a eficácia das declarações do colaborador. Em relação ao valor probatório da colaboração, assinale a afirmativa correta:",
    explicacao: "GABARITO: A. Lei nº 12.850/2013, art. 4º, § 16: 'Nenhuma das seguintes medidas será decretada ou proferida unicamente com base nas declarações do colaborador: I - medidas cautelares reais ou pessoais; II - recebimento de denúncia ou queixa-crime; III - sentença condenatória'.",
    alternativas: [
      {
        letra: "A",
        texto: "Nenhuma medida cautelar pessoal ou real, recebimento de denúncia ou sentença condenatória poderá ser decretada ou proferida unicamente com base nas declarações do colaborador.",
        correta: true,
        explicacao_especifica: "Texto expresso do art. 4º, § 16 da Lei nº 12.850/2013 com redação dada pelo Pacote Anticrime."
      },
      {
        letra: "B",
        texto: "A palavra do colaborador premiado possui presunção absoluta de veracidade após a homologação judicial do acordo.",
        correta: false,
        explicacao_especifica: "A homologação judicial atesta apenas a regularidade, legalidade e voluntariedade do pacto, sem conferir juízo de certeza probatória."
      },
      {
        letra: "C",
        texto: "O magistrado que homologa o acordo de colaboração premiada deve participar ativamente das negociações preliminares com a autoridade policial.",
        correta: false,
        explicacao_especifica: "É vedado expressamente ao juiz participar das negociações do acordo de colaboração premiada (art. 4º, § 6º da Lei 12.850/13)."
      },
      {
        letra: "D",
        texto: "A delação anônima de corréu é suficiente por si só para a prolação de decreto condenatório definitivo.",
        correta: false,
        explicacao_especifica: "O direito pátrio veda condenações embasadas isoladamente em depoimentos de colaboradores ou notícias anônimas."
      },
      {
        letra: "E",
        texto: "As tratativas de colaboração premiada frustradas podem ser utilizadas como confissão judicial tácita contra o proponente.",
        correta: false,
        explicacao_especifica: "Se a colaboração não for homologada, nenhuma das declarações prestadas poderá ser utilizada em desfavor do investigado (art. 4º, § 10 da Lei 12.850/13)."
      }
    ]
  },

  // 041 - Juiz e Prova Ilícita (C/E)
  {
    idSlug: "batch3-dpp-041",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O art. 157, § 5º, do Código de Processo Penal, inserido pela Lei nº 13.964/2019, prescreve que o juiz que conhecer do conteúdo da prova declarada inadmissível não poderá proferir a sentença ou acórdão. Ao apreciar as Ações Diretas de Inconstitucionalidade nº 6.298, 6.299, 6.300 e 6.305, o Plenário do Supremo Tribunal Federal declarou a inconstitucionalidade desse parágrafo, fixando que a decisão que desentranha a prova ilícita não acarreta o impedimento automático do magistrado condutor do feito para julgar a causa.",
    explicacao: "GABARITO: CERTO. STF, ADIs 6.298, 6.299, 6.300 e 6.305 (julgamento concluído em agosto de 2023): O Plenário declarou a inconstitucionalidade do § 5º do art. 157 do CPP. Entendeu o Pretório Excelso que o simples fato de o juiz ter tido contato com a prova inadmissível antes de declará-la ilícita não o torna automaticamente impedido ou suspeito para sentenciar o processo, sob pena de inviabilizar o funcionamento das comarcas de vara única.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O STF declarou inconstitucional o art. 157, § 5º do CPP, afastando o impedimento automático do magistrado que exclui prova ilícita."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. A Suprema Corte reconheceu a inconstitucionalidade do referido dispositivo no julgamento das ADIs do Pacote Anticrime."
      }
    ]
  },

  // 042 - Busca Domiciliar e Fundadas Razões (M/E)
  {
    idSlug: "batch3-dpp-042",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Policiais em patrulhamento avistaram um indivíduo em atitude considerada suspeita no portão de uma residência conhecida como ponto de venda de drogas. Ao avistar a viatura, o homem correu para o interior do imóvel. Os policiais imediatamente arrombaram a porta, ingressaram na casa sem mandado judicial e encontraram 50 porções de cocaína e uma balança de precisão na sala de estar. À luz da jurisprudência vinculante do Supremo Tribunal Federal (Tema nº 280 de Repercussão Geral) e das teses do Superior Tribunal de Justiça, assinale a afirmativa correta:",
    explicacao: "GABARITO: E. STF, Tema 280 (RE 603.616/RO): A entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em caso de crime permanente, quando amparada em fundadas razões, devidamente justificadas pelas circunstâncias do caso concreto a posteriori. O STJ (HC 598.051/SP, HC 611.777/SP) fixou que a mera fuga para o interior da casa após avistar a viatura ou o fato de o local ser conhecido ponto de tráfico não constituem, por si sós, justa causa idônea para a invasão de domicílio sem mandado prévio, tornando ilícitas as provas colhidas.",
    alternativas: [
      {
        letra: "A",
        texto: "A apreensão da droga em flagrante delito convalidou de forma retroativa o ingresso forçado no imóvel, tornando lícita a prova colhida.",
        correta: false,
        explicacao_especifica: "O STF e STJ assentaram que a descoberta a posteriori de drogas não convalida a ilegalidade do ingresso forçado sem justa causa antecedente."
      },
      {
        letra: "B",
        texto: "A constatação de crime permanente afasta peremptoriamente a garantia da inviolabilidade do domicílio em qualquer horário sem exigência de justificativa prévia.",
        correta: false,
        explicacao_especifica: "O estado de flagrância permanente não dispensa a demonstração de fundadas razões e justa causa objetiva anterior ao ingresso."
      },
      {
        letra: "C",
        texto: "O ingresso policial em residência para busca e apreensão prescinde de mandado judicial sempre que houver denúncia anônima apócrifa anterior.",
        correta: false,
        explicacao_especifica: "Denúncia anônima desacompanhada de investigações preliminares de campo não autoriza violação de domicílio."
      },
      {
        letra: "D",
        texto: "A fuga isolada do indivíduo ao avistar a guarnição policial é elemento suficiente para presumir a ocorrência de crime e autorizar a invasão domiciliar.",
        correta: false,
        explicacao_especifica: "STJ (HC 598.051/SP): A mera fuga do suspeito para o interior do imóvel não consubstancia justa causa suficiente para o ingresso forçado."
      },
      {
        letra: "E",
        texto: "A diligência é ilícita e contamina as provas obtidas, pois o ingresso forçado em domicílio sem mandado exige fundadas razões objetivas prévias, não bastando a mera corrida do indivíduo para o interior da residência.",
        correta: true,
        explicacao_especifica: "Síntese precisa da jurisprudência consolidada do STF (Tema 280) e do STJ sobre inviolabilidade domiciliar (art. 5º, XI CF)."
      }
    ]
  },

  // 043 - Consentimento do Morador e Gravação (C/E)
  {
    idSlug: "batch3-dpp-043",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Segundo a orientação paradigmática fixada pela Sexta Turma do Superior Tribunal de Justiça (HC nº 598.051/SP) e ratificada pela Quinta Turma, o consentimento do morador para o ingresso de policiais em sua residência sem mandado judicial deve ser voluntário, livre de coação e cabalmente registrado pelo Estado, competindo aos agentes de segurança documentar a autorização por escrito e mediante registro em áudio e vídeo, sob pena de ilicitude da busca domiciliar e contaminação das provas correlatas.",
    explicacao: "GABARITO: CERTO. STJ, HC 598.051/SP (Rel. Min. Rogério Schietti Cruz): O consentimento do morador deve ser comprovado pelo Estado por meio de declaração assinada com testemunhas e registro audiovisual da operação, incumbindo ao Poder Público o ônus probatório da higidez do consentimento.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O STJ firmou a exigência de que o consentimento do morador seja documentado em áudio/vídeo e por escrito para comprovar sua voluntariedade e validade."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. A jurisprudência impõe ao Estado o ônus de comprovar a licitude da entrada franqueada com registros formais."
      }
    ]
  },

  // 044 - Busca Pessoal e Fundada Suspeita (M/E)
  {
    idSlug: "batch3-dpp-044",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "FGV",
    orgao_nome: "PC-RJ",
    cargo_nome: "Oficial de Cartório",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Guarnição da Polícia Militar realizou revista pessoal em um pedestre em via pública sob a justificativa de que ele apresentava 'nervosismo e vestimentas largas típicas de infratores', encontrando em sua posse um simulacro de arma de fogo e porções de entorpecentes. Em relação aos requisitos do art. 240, § 2º, do CPP e ao precedente vinculante do Superior Tribunal de Justiça (RHC nº 158.580/BA e HC nº 795.539/SP), assinale a afirmativa correta:",
    explicacao: "GABARITO: B. STJ, RHC 158.580/BA (Sexta Turma) e RHC 163.504/SP: A busca pessoal ('baculejo' ou revista pessoal) sem mandado judicial exige a existência de fundada suspeita (justa causa) lastreada em elementos fáticos concretos e objetivos de que a pessoa esteja na posse de arma proibida ou de objetos ilícitos (art. 240, § 2º CPP). Nervosismo subjetivo, vestimentas, intuição policial ou perfilamento racial não constituem justa causa idônea, tornando a revista e as provas ilícitas.",
    alternativas: [
      {
        letra: "A",
        texto: "A fundada suspeita é conceito puramente discricionário dos policiais militares em patrulhamento ostensivo, insuscetível de controle judicial a posteriori.",
        correta: false,
        explicacao_especifica: "A busca pessoal submete-se ao estrito controle judicial de legalidade quanto à presença de justa causa concreta."
      },
      {
        letra: "B",
        texto: "A busca pessoal sem mandado exige fundada suspeita amparada em elementos concretos e objetivos, não se justificando por impressões subjetivas, nervosismo aparente ou perfilamento genérico.",
        correta: true,
        explicacao_especifica: "Tese paradigmática consolidada no STJ (RHC 158.580/BA) regulamentando o art. 240, § 2º do CPP."
      },
      {
        letra: "C",
        texto: "A apreensão dos objetos ilícitos valida integralmente a busca pessoal independentemente da motivação inicial dos agentes de segurança.",
        correta: false,
        explicacao_especifica: "O resultado da busca não retroage para sanar a ilicitude originária da abordagem desprovida de fundadas razões."
      },
      {
        letra: "D",
        texto: "A busca pessoal somente é permitida mediante mandado judicial específico assinado pelo juiz das garantias.",
        correta: false,
        explicacao_especifica: "A busca pessoal independe de mandado no caso de prisão ou quando houver fundada suspeita objetiva (art. 240, § 2º CPP)."
      },
      {
        letra: "E",
        texto: "A revista pessoal em mulheres por policiais masculinos é permitida em qualquer circunstância por motivo de celeridade processual.",
        correta: false,
        explicacao_especifica: "O art. 249 do CPP determina que a busca em mulher será feita por outra mulher, se não importar retardamento ou prejuízo da diligência."
      }
    ]
  },

  // 045 - Horário do Cumprimento do Mandado (C/E)
  {
    idSlug: "batch3-dpp-045",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com o Código de Processo Penal (art. 245, caput) e em harmonia com a Lei nº 13.869/2019 (Lei de Abuso de Autoridade, art. 22, § 1º, III), as buscas domiciliares com mandado judicial deverão ser executadas de dia, configurando crime a execução de mandado de busca e apreensão domiciliar após as 21h (vinte e uma horas) ou antes das 5h (cinco horas). Todavia, se a diligência tiver sido legitimamente iniciada durante o período diurno, ela poderá prosseguir e ser concluída no período noturno.",
    explicacao: "GABARITO: CERTO. Art. 245 do CPP: 'As buscas domiciliares serão executadas de dia, a não ser que o morador consinta que se realizem à noite... § 2º Se a busca foi iniciada de dia, e não tiver terminado à noite, continuará no período noturno'. O art. 22, § 1º, III da Lei 13.869/2019 tipifica o crime de abuso de autoridade na execução de busca e apreensão domiciliar entre 21h e 5h.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A lei veda o cumprimento inicial de mandado domiciliar das 21h às 5h, mas permite o prosseguimento regular no período noturno de diligência encetada validamente durante o dia."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. Expressa exata conjugação do art. 245, § 2º do CPP com o art. 22 da Lei de Abuso de Autoridade."
      }
    ]
  }
];
