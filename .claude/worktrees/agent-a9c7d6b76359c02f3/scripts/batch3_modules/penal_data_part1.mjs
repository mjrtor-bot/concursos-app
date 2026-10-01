import { TAXONOMIA } from "./taxonomia.mjs";

export const penalPart1 = [
  // 001 - Lei Penal no Tempo: Retroatividade da Lei Benéfica
  {
    idSlug: "batch3-penal-001",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.lei_penal_tempo_espaco,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "Em matéria de aplicação da lei penal no tempo, a lei posterior que de qualquer modo favorecer o agente aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado, operando o fenômeno da retroatividade da lex mitior.",
    explicacao: "GABARITO: CERTO. O art. 2º, parágrafo único, do Código Penal consagra expressamente a retroatividade da lei penal mais benéfica: 'A lei posterior, que de qualquer modo favorecer o agente, aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado'. O preceito tem matriz constitucional no art. 5º, inciso XL, da CF/88. Conforme a Súmula 611 do STF, transitada em julgado a sentença condenatória, a competência para aplicar a lei mais benigna é do juízo das execuções penais.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A retroatividade da lex mitior alcança fatos pretéritos mesmo após o trânsito em julgado da condenação, conforme o art. 2º, parágrafo único, do CP e o art. 5º, XL, da CF/88."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A coisa julgada formal ou material não impede a aplicação retroativa da lei penal mais favorável (art. 2º, parágrafo único, do CP)."
      }
    ]
  },

  // 002 - Lei Penal no Tempo: Crime Permanente e Súmula 711 STF
  {
    idSlug: "batch3-penal-002",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.lei_penal_tempo_espaco,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Durante fiscalização da PRF, constatou-se que determinado indivíduo mantinha sob sua guarda, de forma ininterrupta por quatro meses, mercadoria estrangeira introduzida clandestinamente no país. Caso tenha entrado em vigor, no terceiro mês da conduta, lei penal que majorou a pena do delito de contrabando, a nova lei mais severa não poderá ser aplicada ao caso, sob pena de violação ao princípio constitucional da irretroatividade da lei penal mais gravosa.",
    explicacao: "GABARITO: ERRADO. Nos termos da Súmula 711 do STF: 'A lei penal mais grave aplica-se ao crime continuado ou ao crime permanente, se a sua vigência é anterior à cessação da continuidade ou da permanência'. Como a permanência delitiva continuou sob a vigência da lei nova mais gravosa, não se trata de retroatividade vedada, mas de aplicação imediata da lei vigente durante a consumação ininterrupta do crime permanente.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Incorreto. A Súmula 711 do STF autoriza a aplicação da lei penal mais grave quando sua vigência precede a cessação da permanência ou da continuidade delitiva."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. Aplica-se a lei nova mais severa porque o agente continuou a praticar a conduta criminosa permanente quando a novel legislação já estava plenamente em vigor (Súmula 711/STF)."
      }
    ]
  },

  // 003 - Lugar do Crime: Teoria da Ubiquidade
  {
    idSlug: "batch3-penal-003",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.lei_penal_tempo_espaco,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Marcelo, situado na cidade de São Paulo/SP, efetuou disparos de arma de fogo através da linha divisória interestadual, vindo a atingir fatalmente Rodrigo, que caminhava no município de Extrema/MG, onde o óbito foi constatado. À luz das regras do Código Penal brasileiro acerca da aplicação da lei penal no espaço e da teoria adotada quanto ao lugar do crime, assinale a opção correta.",
    explicacao: "GABARITO: Letra C. O art. 6º do Código Penal adotou a Teoria da Ubiquidade (ou mista): 'Considera-se praticado o crime no lugar em que ocorreu a ação ou omissão, no todo ou em parte, bem como onde se produziu ou deveria produzir-se o resultado'. Dessa forma, o crime é considerado praticado tanto no local da conduta executória (São Paulo/SP) quanto no local do resultado naturalístico (Extrema/MG).",
    alternativas: [
      {
        letra: "A",
        texto: "O Código Penal adotou a teoria do resultado para o lugar do crime, considerando o delito praticado exclusivamente no Estado de Minas Gerais.",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria do resultado é adotada para fins processuais de fixação de foro (art. 70 do CPP), mas no direito penal substantivo (art. 6º do CP) a teoria adotada é a da ubiquidade."
      },
      {
        letra: "B",
        texto: "O Código Penal adotou a teoria da atividade para o lugar do crime, reputando-se o delito praticado unicamente em São Paulo.",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria da atividade foi adotada para o tempo do crime (art. 4º do CP), e não para o lugar do crime."
      },
      {
        letra: "C",
        texto: "O Código Penal adotou a teoria da ubiquidade, reputando-se praticado o crime tanto no local em que ocorreu a ação (São Paulo/SP) quanto onde se produziu o resultado morte (Extrema/MG).",
        correta: true,
        explicacao_especifica: "Correto. Nos termos expressos do art. 6º do Código Penal, o Brasil consagra a teoria da ubiquidade para o lugar do crime."
      },
      {
        letra: "D",
        texto: "A competência territorial penal é fixada com base na teoria da causalidade pura, considerando o crime praticado apenas no local do primeiro atendimento médico.",
        correta: false,
        explicacao_especifica: "Incorreto. Não existe teoria da causalidade pura no art. 6º do CP para delimitação do lugar do crime."
      },
      {
        letra: "E",
        texto: "O delito é considerado crime à distância internacional, atraindo competência privativa da Justiça Federal e afastando a aplicação do Código Penal.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se de crime plurilocal interno (entre estados da federação brasileira), sujeito à jurisdição da Justiça Estadual e regido pelo art. 6º do CP."
      }
    ]
  },

  // 004 - Tempo do Crime: Teoria da Atividade
  {
    idSlug: "batch3-penal-004",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.lei_penal_tempo_espaco,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "No dia 10 de maio, véspera de completar 18 anos de idade, Bruno desferiu três tiros de revólver contra seu desafeto Caio com a inequívoca intenção de matá-lo. Caio foi socorrido e hospitalizado, vindo a falecer em decorrência exclusiva dos ferimentos no dia 20 de maio, data em que Bruno já havia atingido a maioridade civil e penal. De acordo com o Código Penal brasileiro e a jurisprudência dominante:",
    explicacao: "GABARITO: Letra B. O art. 4º do Código Penal estabelece que 'Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado' (Teoria da Atividade). Como a ação delituosa foi praticada quando Bruno tinha 17 anos (inimputável penalmente nos termos do art. 27 do CP e art. 228 da CF/88), ele responderá por ato infracional análogo ao homicídio perante a Vara da Infância e Juventude (ECA), sendo irrelevante a maioridade superveniente no momento do óbito.",
    alternativas: [
      {
        letra: "A",
        texto: "Bruno responderá como imputável por homicídio doloso consumado perante o Tribunal do Júri, pois a teoria do resultado define o momento do crime.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 4º do CP adotou a teoria da atividade, e não a teoria do resultado."
      },
      {
        letra: "B",
        texto: "Bruno será considerado penalmente inimputável, submetendo-se a medidas socioeducativas sob as regras do Estatuto da Criança e do Adolescente, pois o Código Penal adotou a teoria da atividade.",
        correta: true,
        explicacao_especifica: "Correto. Pela teoria da atividade (art. 4º, CP), a imputabilidade é aferida no exato instante da conduta (ação ou omissão)."
      },
      {
        letra: "C",
        texto: "Haverá cisão obrigatória do processo, respondendo Bruno por tentativa de homicídio perante a Justiça da Infância e por homicídio consumado perante o juízo comum.",
        correta: false,
        explicacao_especifica: "Incorreto. Não existe cisão de imputação por tentativa e consumação para o mesmo iter criminis sob o império da teoria da atividade."
      },
      {
        letra: "D",
        texto: "Aplica-se a teoria da ubiquidade temporal, ensejando a aplicação cumulativa das sanções do ECA e das penas do Código Penal.",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria da ubiquidade foi adotada para o lugar do crime (art. 6º do CP), e não para o tempo do crime."
      },
      {
        letra: "E",
        texto: "Bruno estará isento de qualquer responsabilização jurídica, em razão da ocorrência de conflito aparente de normas insolúvel no tempo.",
        correta: false,
        explicacao_especifica: "Incorreto. Bruno responderá pelo ato infracional cometido, conforme preceitua a Lei nº 8.069/1990 (ECA)."
      }
    ]
  },

  // 005 - Leis Temporárias e Excepcionais
  {
    idSlug: "batch3-penal-005",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.lei_penal_tempo_espaco,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil/DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "As leis penais excepcionais ou temporárias, embora decorrido o período de sua duração ou cessadas as circunstâncias que as determinaram, aplicam-se aos fatos praticados durante sua vigência, consagrando expressamente o atributo da ultratividade gravosa.",
    explicacao: "GABARITO: CERTO. O art. 3º do Código Penal dispõe: 'A lei excepcional ou temporária, embora decorrido o período de sua duração ou cessadas as circunstâncias que a determinaram, aplica-se ao fato praticado durante sua vigência'. Trata-se de hipótese legítima de ultratividade gravosa (ou ultratividade autorizada por lei), necessária para garantir a eficácia intimidatória de normas com vigência previamente delimitada no tempo ou vinculada a estados emergenciais.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. As leis temporárias e excepcionais possuem autorização legal expressa de ultratividade para punir fatos praticados sob seu império mesmo após sua cessação (art. 3º do CP)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O término da vigência da lei temporária ou excepcional não gera abolitio criminis para as infrações cometidas durante a sua vigência."
      }
    ]
  },

  // 006 - Extraterritorialidade Incondicionada
  {
    idSlug: "batch3-penal-006",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.lei_penal_tempo_espaco,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/MG",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Hans, cidadão estrangeiro sem domicílio no Brasil, cometeu crime de tentativa de homicídio contra o Presidente da República Federativa do Brasil durante visita oficial deste à cidade de Berlim. Hans foi capturado pelas autoridades alemãs, processado e formalmente absolvido por tribunal competente local por insuficiência probatória. Três anos após, Hans desembarca no Brasil a turismo e é identificado pela Polícia Federal. Diante do regramento da lei penal brasileira no espaço:",
    explicacao: "GABARITO: Letra B. O art. 7º, inciso I, alínea 'a', do Código Penal estabelece que ficam sujeitos à lei brasileira, embora cometidos no estrangeiro, os crimes 'contra a vida ou a liberdade do Presidente da República' (Princípio da Proteção/Defesa). Por força do art. 7º, § 1º, nos casos do inciso I o agente é punido segundo a lei brasileira, ainda que absolvido ou condenado no estrangeiro (extraterritorialidade incondicionada).",
    alternativas: [
      {
        letra: "A",
        texto: "Hans não poderá ser processado nem punido no Brasil, pois a absolvição por sentença estrangeira transitada em julgado produz eficácia preclusiva absoluta pela vedação ao bis in idem.",
        correta: false,
        explicacao_especifica: "Incorreto. Na extraterritorialidade incondicionada (art. 7º, I e § 1º do CP), a lei brasileira aplica-se ainda que o agente tenha sido absolvido no estrangeiro."
      },
      {
        letra: "B",
        texto: "Hans fica sujeito à lei penal brasileira, aplicando-se-lhe a extraterritorialidade incondicionada, sendo punível no Brasil mesmo tendo sido absolvido no estrangeiro.",
        correta: true,
        explicacao_especifica: "Correto. Trata-se de crime contra a vida do Presidente da República (art. 7º, I, 'a', CP), cuja extraterritorialidade incondicionada autoriza a persecução penal no Brasil independentemente de absolvição no exterior (§ 1º)."
      },
      {
        letra: "C",
        texto: "A aplicação da lei brasileira dependeria cumulativamente de requisição do Ministro da Justiça e de não ter havido absolvição no país de origem.",
        correta: false,
        explicacao_especifica: "Incorreto. A requisição ministerial e a ausência de absolvição são condições da extraterritorialidade condicionada (art. 7º, § 2º e § 3º), inaplicáveis às hipóteses incondicionadas do inciso I."
      },
      {
        letra: "D",
        texto: "A persecução penal brasileira somente seria admissível se Hans houvesse praticado o crime a bordo de embarcação ou aeronave de bandeira brasileira.",
        correta: false,
        explicacao_especifica: "Incorreto. A tutela da vida do Presidente da República independe do local ou do pavilhão da aeronave/embarcação."
      },
      {
        letra: "E",
        texto: "O crime atrai a incidência do princípio da justiça universal, exigindo prévio tratado de extradição bilateral homologado pelo Supremo Tribunal Federal.",
        correta: false,
        explicacao_especifica: "Incorreto. A hipótese fundamenta-se no princípio real, de defesa ou de proteção (art. 7º, I, 'a', CP), e não no princípio da justiça cosmopolita/universal."
      }
    ]
  },

  // 007 - Extraterritorialidade Condicionada
  {
    idSlug: "batch3-penal-007",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.lei_penal_tempo_espaco,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil/BA",
    cargo_nome: "Investigador",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "No que se refere à extraterritorialidade condicionada da lei penal brasileira para crimes cometidos por brasileiros no exterior (art. 7º, II, 'b', do Código Penal), assinale a alternativa que NÃO apresenta um dos requisitos cumulativos previstos expressamente no art. 7º, § 2º, do CP:",
    explicacao: "GABARITO: Letra E. As condições cumulativas do art. 7º, § 2º, do CP são: a) entrar o agente no território nacional; b) ser o fato punível também no país em que foi praticado (dupla tipicidade); c) estar o crime incluído entre aqueles pelos quais a lei brasileira autoriza a extradição; d) não ter sido o agente absolvido no estrangeiro ou não ter aí cumprido a pena; e) não ter sido o agente perdoado no estrangeiro ou, por outro motivo, não estar extinta a punibilidade. A prévia requisição do Ministro da Justiça é exigida apenas na extraterritorialidade hipercondicionada do art. 7º, § 3º (crime cometido por estrangeiro contra brasileiro fora do Brasil).",
    alternativas: [
      {
        letra: "A",
        texto: "Entrar o agente no território nacional.",
        correta: false,
        explicacao_especifica: "Incorreto. A entrada no território nacional é condição expressa do art. 7º, § 2º, alínea 'a', do CP."
      },
      {
        letra: "B",
        texto: "Ser o fato punível também no país em que foi praticado (dupla tipicidade).",
        correta: false,
        explicacao_especifica: "Incorreto. A dupla tipicidade é requisito taxativo da alínea 'b' do § 2º do art. 7º do CP."
      },
      {
        letra: "C",
        texto: "Estar o crime incluído entre aqueles pelos quais a lei brasileira autoriza a extradição.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se de requisito legal expresso no art. 7º, § 2º, alínea 'c', do CP."
      },
      {
        letra: "D",
        texto: "Não ter sido o agente absolvido no estrangeiro ou não ter aí cumprido a pena.",
        correta: false,
        explicacao_especifica: "Incorreto. A ausência de absolvição ou de cumprimento de pena no exterior consta da alínea 'd' do § 2º do art. 7º do CP."
      },
      {
        letra: "E",
        texto: "Haver requisição expressa e fundamentada do Ministro da Justiça para a instauração da persecução penal.",
        correta: true,
        explicacao_especifica: "Correto. A requisição do Ministro da Justiça é condição específica da extraterritorialidade hipercondicionada do art. 7º, § 3º, e não da extraterritorialidade condicionada ordinária do § 2º."
      }
    ]
  },

  // 008 - Contagem de Prazos Penais
  {
    idSlug: "batch3-penal-008",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.lei_penal_tempo_espaco,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Na contagem do prazo penal de natureza material, inclui-se o dia do começo e computam-se os dias, os meses e os anos pelo calendário comum, não se postergando o seu término mesmo que este recaia em domingo ou feriado forense.",
    explicacao: "GABARITO: CERTO. Nos termos do art. 10 do Código Penal: 'O dia do começo inclui-se no cômputo do prazo. Contam-se os dias, os meses e os anos pelo calendário comum'. Os prazos penais de direito material (como decadência, prescrição e cumprimento de pena) são fatais e improrrogáveis, não se aplicando a prorrogação para o primeiro dia útil subsequente que é restrita aos prazos estritamente processuais (art. 798 do CPP).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Prazos penais materiais computam o dia de início e são contínuos e improrrogáveis, diferindo das regras processuais penais."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A inclusão do dia do começo e a improrrogabilidade decorrem da literalidade do art. 10 do Código Penal."
      }
    ]
  },

  // 009 - Princípio da Insignificância: Requisitos Jurisprudenciais
  {
    idSlug: "batch3-penal-009",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.lei_penal_tempo_espaco,
    banca_nome: "AOCP",
    orgao_nome: "Polícia Civil/GO",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "O princípio da insignificância (ou princípio da bagatela própria) funciona como causa de exclusão da tipicidade material da conduta. De acordo com a jurisprudência pacífica e consolidada do Supremo Tribunal Federal e do Superior Tribunal de Justiça, são requisitos objetivos e cumulativos indispensáveis para o seu reconhecimento:",
    explicacao: "GABARITO: Letra A. O STF fixou os quatro vetores objetivos cumulativos (HC 84.412/SP, Rel. Min. Celso de Mello): I) mínima ofensividade da conduta do agente; II) nenhuma periculosidade social da ação; III) reduzidíssimo grau de reprovabilidade do comportamento; e IV) inexpressividade da lesão jurídica provocada (mnemônico MARI). Preenchidos tais vetores, afasta-se a tipicidade penal material.",
    alternativas: [
      {
        letra: "A",
        texto: "Mínima ofensividade da conduta, nenhuma periculosidade social da ação, reduzidíssimo grau de reprovabilidade do comportamento e inexpressividade da lesão jurídica provocada.",
        correta: true,
        explicacao_especifica: "Correto. Esses são exatamente os quatro vetores consolidados pelo STF e acolhidos pelo STJ para a incidência da insignificância material."
      },
      {
        letra: "B",
        texto: "Primariedade técnica do agente, confissão espontânea dos fatos, ausência de antecedentes criminais e valor da res inferior a dois salários mínimos.",
        correta: false,
        explicacao_especifica: "Incorreto. Primariedade e confissão são circunstâncias subjetivas, enquanto a insignificância fundamenta-se precipuamente na ausência de tipicidade material da lesão ao bem tutelado."
      },
      {
        letra: "C",
        texto: "Concordância expressa do titular do bem jurídico, ressarcimento em dobro do prejuízo patrimonial e ausência de tumulto público.",
        correta: false,
        explicacao_especifica: "Incorreto. O consentimento e a reparação em dobro não são requisitos dogmáticos do princípio da insignificância."
      },
      {
        letra: "D",
        texto: "Cometimento de infração sem emprego de violência, transação penal prévia aceita e parecer conclusivo favorável do órgão acusador.",
        correta: false,
        explicacao_especifica: "Incorreto. Transação penal e parecer ministerial são institutos despenalizadores da Lei 9.099/95, não requisitos de exclusão da tipicidade."
      },
      {
        letra: "E",
        texto: "Inexistência de dolo direto, retratação formal antes da instauração do inquérito policial e parecer psicossocial abonador.",
        correta: false,
        explicacao_especifica: "Incorreto. O princípio incide inclusive em condutas dolosas, desde que a afetação ao bem jurídico seja penalmente inexpressiva."
      }
    ]
  },

  // 010 - Princípio da Insignificância: Contrabando e Súmula do STJ
  {
    idSlug: "batch3-penal-010",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.lei_penal_tempo_espaco,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em abordagem realizada em rodovia federal, policiais rodoviários federais apreenderam quinhentos maços de cigarros de origem estrangeira introduzidos no país sem documentação legal, cujo montante dos tributos iludidos é inferior a vinte mil reais. Nesse caso, segundo a jurisprudência pacificada do Superior Tribunal de Justiça e do Supremo Tribunal Federal, incide o princípio da insignificância, aplicando-se o mesmo parâmetro fiscal admitido para o crime de descaminho.",
    explicacao: "GABARITO: ERRADO. A importação não autorizada de cigarros configura crime de contrabando (art. 334-A do CP) e não descaminho (art. 334 do CP). O contrabando tutela precipuamente a saúde pública, a higiene e a moralidade administrativa, bens indisponíveis e não mensuráveis em moeda. Portanto, é inaplicável o patamar de R$ 20.000,00 da Portaria MF 75/2012 (que se restringe ao descaminho), inadmitindo-se a insignificância no contrabando de cigarros, ressalvadas hipóteses excepcionalíssimas de quantidade absolutamente irrisória para consumo pessoal próprio (Tema Repetitivo 1143 do STJ).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Incorreto. O patamar de R$ 20.000,00 aplica-se exclusivamente ao descaminho (crime tributário), sendo inaplicável como regra ao contrabando de cigarros (art. 334-A do CP)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. O contrabando de cigarros atinge a saúde pública e a ordem aduaneira, rechaçando a incidência do princípio da insignificância pela via do parâmetro fiscal do descaminho (STJ Tema 1143 e STF)."
      }
    ]
  },

  // 011 - Conceito Analítico de Crime: Coação Física vs Coação Moral
  {
    idSlug: "batch3-penal-011",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "A coação física irresistível (vis absoluta) exclui a própria conduta por ausência de voluntariedade no movimento corporal do agente, eliminando o fato típico, enquanto a coação moral irresistível (vis compulsiva) atua no plano da culpabilidade, afastando-a em virtude da inexigibilidade de conduta diversa.",
    explicacao: "GABARITO: CERTO. A conduta humana, para o Direito Penal (teoria finalista), exige ação ou omissão voluntária e consciente. Na coação física irresistível (vis absoluta), o corpo do coagido é mero instrumento mecânico, inexistindo conduta e, por conseguinte, fato típico. Já na coação moral irresistível (vis compulsiva), há conduta voluntária (embora com vontade viciada por grave ameaça), subsistindo o fato típico e ilícito, mas excluindo-se a culpabilidade pela inexigibilidade de conduta diversa (art. 22 do CP), respondendo penalmente apenas o coator.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A coação física absoluta elimina a conduta (fato típico), enquanto a moral afasta a culpabilidade (art. 22 do CP)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A distinção dogmática está perfeitamente precisa: vis absoluta exclui a conduta; vis compulsiva exclui a culpabilidade."
      }
    ]
  },

  // 012 - Nexo de Causalidade: Concausas Relativamente Independentes Supervenientes
  {
    idSlug: "batch3-penal-012",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/DF",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Jonas, com a inequívoca intenção de matar seu desafeto Pedro, efetua dois disparos de arma de fogo que atingem a perna da vítima, provocando lesões corporais de natureza leve. Pedro é prontamente socorrido e encaminhado ao hospital municipal. Enquanto aguardava sutura no pronto-socorro em leito estável, um temporal atípico causa o desabamento imprevisível do teto do hospital, gerando traumatismo craniano fatal em Pedro. Diante das regras do Código Penal sobre a relação de causalidade (art. 13 do CP), Jonas deverá responder por:",
    explicacao: "GABARITO: Letra B. O art. 13, § 1º, do Código Penal estabelece que 'A superveniência de causa relativamente independente exclui a imputação quando, por si só, produziu o resultado; os fatos anteriores, entretanto, imputam-se a quem os praticou'. O desabamento do teto hospitalar é uma concausa superveniente relativamente independente que foge ao desdobramento causal natural dos disparos (produziu por si só o evento morte). Dessa forma, rompe-se o nexo causal quanto ao homicídio consumado, respondendo Jonas apenas pelos atos até então praticados com animus necandi, isto é, por tentativa de homicídio.",
    alternativas: [
      {
        letra: "A",
        texto: "Homicídio doloso consumado, haja vista que Jonas deu causa à ida de Pedro ao hospital pela teoria da equivalência dos antecedentes.",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria da conditio sine qua non é mitigada pelo art. 13, § 1º, do CP nas concausas supervenientes anômalas que por si sós produzem o resultado."
      },
      {
        letra: "B",
        texto: "Tentativa de homicídio, pois a causa superveniente relativamente independente produziu por si só o resultado letal, rompendo o nexo de causalidade quanto à consumação.",
        correta: true,
        explicacao_especifica: "Correto. Conforme o art. 13, § 1º, do CP, a concausa superveniente que instaura curso causal autônomo (desabamento) exclui a imputação do resultado morte, punindo-se os atos anteriores (tentativa de homicídio)."
      },
      {
        letra: "C",
        texto: "Homicídio culposo, em virtude da ausência de dolo quanto ao desabamento da estrutura hospitalar.",
        correta: false,
        explicacao_especifica: "Incorreto. Jonas agiu com dolo direto de matar (animus necandi) ao disparar contra a vítima, não se cogitando de homicídio culposo."
      },
      {
        letra: "D",
        texto: "Lesão corporal culposa em concurso formal com homicídio culposo com culpa consciente.",
        correta: false,
        explicacao_especifica: "Incorreto. Os disparos foram dolosos, e o resultado morte decorreu de evento fortuito imprevisível."
      },
      {
        letra: "E",
        texto: "Lesão corporal dolosa de natureza grave qualificada pelo perigo de vida, restando afastada a tentativa de homicídio.",
        correta: false,
        explicacao_especifica: "Incorreto. Havendo dolo homicida na conduta inicial, o agente responde por tentativa de homicídio, e não por lesão corporal."
      }
    ]
  },

  // 013 - Teoria da Imputação Objetiva
  {
    idSlug: "batch3-penal-013",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com a teoria da imputação objetiva de Claus Roxin, a causalidade natural (conditio sine qua non) é insuficiente para a atribuição de um resultado típico ao agente, exigindo-se a verificação de que a conduta criou ou incrementou um risco juridicamente proibido e que esse risco proibido se realizou no resultado dentro do âmbito de proteção da norma penal violada.",
    explicacao: "GABARITO: CERTO. A teoria da imputação objetiva busca limitar o alcance excessivamente amplo da causalidade puramente naturalística da teoria da equivalência dos antecedentes. Para haver tipicidade material sob o prisma da imputação objetiva, são necessários três critérios fundamentais: 1) criação ou incremento de um risco proibido desaprovado pelo direito; 2) realização desse risco proibido no resultado concreto; e 3) que o resultado esteja compreendido no âmbito de alcance e proteção da norma penal incriminadora.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O enunciado traduz com exatidão os postulados centrais da teoria da imputação objetiva desenvolvida na dogmática penal contemporânea."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria da imputação objetiva de fato exige a criação de risco proibido e sua realização no resultado no alcance protetivo da norma."
      }
    ]
  },

  // 014 - Iter Criminis: Tentativa Perfeita vs Imperfeita
  {
    idSlug: "batch3-penal-014",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Investigador",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "No âmbito da teoria do iter criminis e da tipicidade da tentativa (art. 14, II, do Código Penal), quando o agente esgota integralmente todos os atos executórios que estavam ao seu alcance para consumar o delito, mas o resultado pretendido não ocorre por razões alheias à sua vontade, verifica-se a chamada:",
    explicacao: "GABARITO: Letra A. A tentativa perfeita (também denominada pela doutrina como crime falho ou tentativa acabada) ocorre quando o agente esgota todos os meios de execução que tinha à sua disposição e pretendia utilizar, mas, mesmo assim, o resultado não se produz por circunstâncias alheias à sua vontade. Já a tentativa imperfeita (ou inacabada) ocorre quando o agente é impedido de prosseguir nos atos executórios antes de esgotá-los.",
    alternativas: [
      {
        letra: "A",
        texto: "Tentativa perfeita, acabada ou crime falho.",
        correta: true,
        explicacao_especifica: "Correto. A hipótese em que todos os atos executórios são esgotados sem a produção do resultado pretendido denomina-se tentativa perfeita, acabada ou crime falho."
      },
      {
        letra: "B",
        texto: "Tentativa imperfeita ou inacabada.",
        correta: false,
        explicacao_especifica: "Incorreto. A tentativa imperfeita ocorre quando o agente é interrompido no meio da execução, antes de esgotar seus meios."
      },
      {
        letra: "C",
        texto: "Tentativa branca ou incruenta.",
        correta: false,
        explicacao_especifica: "Incorreto. Tentativa branca/incruenta refere-se ao fato de a vítima não ter sido atingida fisicamente, não se relacionando com o esgotamento dos atos executórios."
      },
      {
        letra: "D",
        texto: "Desistência voluntária qualificada.",
        correta: false,
        explicacao_especifica: "Incorreto. Na tentativa o resultado não ocorre por circunstâncias alheias à vontade do agente; na desistência voluntária o agente cessa por vontade própria."
      },
      {
        letra: "E",
        texto: "Quase-crime ou delito putativo por obra do agente.",
        correta: false,
        explicacao_especifica: "Incorreto. Delito putativo é modalidade de crime imaginário pelo agente, que carece de tipicidade real."
      }
    ]
  },

  // 015 - Desistência Voluntária e Arrependimento Eficaz: Ponte de Ouro
  {
    idSlug: "batch3-penal-015",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil/DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "Nos termos do art. 15 do Código Penal, tanto na desistência voluntária quanto no arrependimento eficaz, afasta-se a punição pelo crime inicialmente cogitado a título de tentativa, respondendo o agente exclusivamente pelos atos típicos já praticados (tipicidade residual).",
    explicacao: "GABARITO: CERTO. O art. 15 do CP estabelece a chamada 'ponte de ouro' (Frank): 'O agente que, voluntariamente, desiste de prosseguir na execução ou impede que o resultado se produza, só responde pelos atos já praticados'. Nessas duas hipóteses legais (desistência voluntária durante a execução ou arrependimento eficaz após esgotada a execução com impedimento do resultado), a lei exclui a tipicidade da tentativa do crime-fim, remanescendo apenas a punição dos fatos pretéritos que configurem delitos autônomos (tipicidade residual).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 15 do CP consagra a exclusão da tipicidade da tentativa, punindo o agente apenas pelos atos residuais efetivamente executados."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. Tanto a desistência voluntária quanto o arrependimento eficaz operam como causas de atipicidade relativa da tentativa, subsistindo a responsabilidade residual."
      }
    ]
  },

  // 016 - Arrependimento Posterior: Ponte de Prata
  {
    idSlug: "batch3-penal-016",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/RJ",
    cargo_nome: "Inspetor de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Marcos subtraiu mediante destreza (furto qualificado) a carteira de Paulo contendo R$ 3.000,00. Dois dias após o fato e profundamente arrependido, antes de qualquer oferecimento ou recebimento de denúncia criminal, Marcos procura a vítima e devolve integralmente todo o numerário e documentos subtraídos. Diante da disciplina do art. 16 do Código Penal (arrependimento posterior), assinale a consequência jurídica aplicável:",
    explicacao: "GABARITO: Letra D. O art. 16 do CP disciplina o arrependimento posterior ('ponte de prata'): 'Nos crimes cometidos sem violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa, até o recebimento da denúncia ou da queixa, por ato voluntário do próprio agente, a pena será reduzida de um a dois terços'. Trata-se de causa obrigatória de diminuição de pena a ser aplicada na terceira fase da dosimetria.",
    alternativas: [
      {
        letra: "A",
        texto: "A conduta de Marcos restará atípica, extinguindo-se a punibilidade pelo perdão tácito do ofendido.",
        correta: false,
        explicacao_especifica: "Incorreto. O arrependimento posterior não exclui a tipicidade nem extingue a punibilidade, constituindo causa de diminuição de pena."
      },
      {
        letra: "B",
        texto: "Haverá incidência de circunstância atenuante genérica na segunda fase da dosimetria, sem redução fracionária legal fixa.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 16 do CP prevê causa de diminuição de pena (1/3 a 2/3) na 3ª fase da dosimetria, sendo distinta da mera atenuante do art. 65, III, 'b' do CP (que incide quando a reparação ocorre após o recebimento da denúncia)."
      },
      {
        letra: "C",
        texto: "Marcos fará jus à isenção de pena em razão de escusa absolutória patrimonial imprópria.",
        correta: false,
        explicacao_especifica: "Incorreto. As escusas absolutórias aplicam-se a vínculos familiares/afetivos específicos previstos no art. 181 do CP."
      },
      {
        letra: "D",
        texto: "A pena de Marcos será obrigatoriamente reduzida de um a dois terços na terceira fase da aplicação da pena.",
        correta: true,
        explicacao_especifica: "Correto. O preenchimento dos requisitos do art. 16 do CP enseja a redução compulsória da pena de 1/3 a 2/3 na terceira fase da dosimetria."
      },
      {
        letra: "E",
        texto: "O benefício do arrependimento posterior é inaplicável ao furto na sua modalidade qualificada.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 16 do CP exige apenas que o crime não tenha sido cometido com violência ou grave ameaça à pessoa, aplicando-se plenamente ao furto qualificado."
      }
    ]
  },

  // 017 - Crime Impossível: Súmula 567 do STJ
  {
    idSlug: "batch3-penal-017",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Perito Criminal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "Segundo a jurisprudência sumulada do Superior Tribunal de Justiça, a existência de sistema eletrônico de vigilância ou o monitoramento realizado por seguranças em estabelecimento comercial não torna o crime de furto impossível.",
    explicacao: "GABARITO: CERTO. Conforme a Súmula 567 do STJ: 'Sistema de vigilância realizado por monitoramento eletrônico ou por existência de segurança no interior de estabelecimento comercial, por si só, não torna impossível a configuração do crime de furto'. Isso porque a ineficácia do meio, para caracterizar crime impossível (art. 17 do CP), deve ser absoluta, ao passo que os sistemas de segurança geram apenas uma ineficácia relativa da conduta do agente.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A Súmula 567 do STJ estabelece que o monitoramento por vigilância não torna impossível o furto, dada a relatividade dos meios de contenção."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A ineficácia decorrente de sistemas de vigilância é meramente relativa, não configurando crime impossível (Súmula 567/STJ e art. 17 do CP)."
      }
    ]
  },

  // 018 - Dolo Eventual vs Culpa Consciente
  {
    idSlug: "batch3-penal-018",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil/MG",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "No direito penal pátrio, a distinção dogmática entre dolo eventual e culpa consciente reside no elemento volitivo do agente. É correto afirmar que, na culpa consciente:",
    explicacao: "GABARITO: Letra C. Na culpa consciente, o agente prevê a possibilidade de ocorrência do resultado lesivo, mas sinceramente acredita e confia que ele não ocorrerá em razão de suas habilidades ou circunstâncias fáticas (ausência de assentimento). No dolo eventual (art. 18, I, 2ª parte, do CP - teoria da anuência ou do assentimento), o agente prevê o resultado, não se importa com a sua produção e assume conscientemente o risco de produzi-lo ('se acontecer, dane-se').",
    alternativas: [
      {
        letra: "A",
        texto: "O agente não tem qualquer previsão sobre a possibilidade do resultado lesivo, embora este fosse objetivamente previsível.",
        correta: false,
        explicacao_especifica: "Incorreto. A ausência de previsão do resultado previsível caracteriza a culpa inconsciente."
      },
      {
        letra: "B",
        texto: "O agente prevê o resultado e assume conscientemente o risco de sua produção, sendo indiferente à sua ocorrência.",
        correta: false,
        explicacao_especifica: "Incorreto. A assunção indiferente do risco do resultado caracteriza o dolo eventual."
      },
      {
        letra: "C",
        texto: "O agente prevê a possibilidade do resultado lesivo, mas não o aceita, confiando sinceramente que ele não ocorrerá ou que poderá evitá-lo.",
        correta: true,
        explicacao_especifica: "Correto. Na culpa consciente há previsão subjetiva do perigo, mas repulsa ao resultado com leviana convicção de que ele não ocorrerá."
      },
      {
        letra: "D",
        texto: "O agente atua com dolo de segundo grau em relação às consequências necessárias da conduta.",
        correta: false,
        explicacao_especifica: "Incorreto. Dolo de 2º grau abrange efeitos colaterais inevitáveis e aceitos como certos pelo agente."
      },
      {
        letra: "E",
        texto: "O resultado é fruto de erro de tipo invencível sobre elemento constitutivo do tipo penal incriminador.",
        correta: false,
        explicacao_especifica: "Incorreto. Erro de tipo invencível exclui tanto o dolo quanto a culpa."
      }
    ]
  },

  // 019 - Crimes Preterdolosos: Dolo no Antecedente e Culpa no Consequente
  {
    idSlug: "batch3-penal-019",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "AOCP",
    orgao_nome: "Polícia Civil/PA",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos crimes preterdolosos (ou preterintencionais), como a lesão corporal seguida de morte (art. 129, § 3º, do Código Penal), a estrutura subjetiva da conduta e sua punição caracterizam-se dogmaticamente por:",
    explicacao: "GABARITO: Letra B. O crime preterdoloso é uma espécie de crime qualificado pelo resultado no qual há dolo na conduta antecedente (ex.: dolo de lesionar) e culpa em sentido estrito (negligência, imprudência ou imperícia) no resultado agravador consequente (ex.: morte involuntária da vítima). Em razão da ausência de dolo quanto ao resultado final morte, é juridicamente impossível a ocorrência de tentativa no resultado qualificador culposo.",
    alternativas: [
      {
        letra: "A",
        texto: "Culpa na conduta antecedente e dolo eventual no resultado consequente mais gravoso.",
        correta: false,
        explicacao_especifica: "Incorreto. No preterdolo a ordem é invertida: o dolo está na conduta antecedente e a culpa no resultado consequente."
      },
      {
        letra: "B",
        texto: "Dolo na conduta antecedente e culpa estrita no resultado mais gravoso consequente, sendo inviável a punição por tentativa em relação ao resultado agravador.",
        correta: true,
        explicacao_especifica: "Correto. A estrutura dogmática do preterdolo conjuga dolo na base e culpa no evento derivado, inadmitindo tentativa no resultado culposo."
      },
      {
        letra: "C",
        texto: "Dolo direto na conduta antecedente e dolo eventual no resultado morte, atraindo a competência absoluta do Tribunal do Júri.",
        correta: false,
        explicacao_especifica: "Incorreto. Se houver dolo eventual no resultado morte, o crime será de homicídio doloso (júri), e não lesão corporal seguida de morte (juízo singular)."
      },
      {
        letra: "D",
        texto: "Responsabilidade penal puramente objetiva pelo resultado agravador, independentemente da previsibilidade do evento morte.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 19 do CP veda a responsabilidade penal objetiva: 'Pelo resultado que agrava especialmente a pena, só responde o agente que o houver causado, ao menos, culposamente'."
      },
      {
        letra: "E",
        texto: "Concurso formal impróprio obrigatório entre lesão corporal dolosa e homicídio culposo.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se de figura típica complexa unificada em tipo penal preterdoloso específico (art. 129, § 3º do CP)."
      }
    ]
  },

  // 020 - Erro de Tipo Essencial: Vencível e Invencível
  {
    idSlug: "batch3-penal-020",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil/DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O erro sobre elemento constitutivo do tipo legal de crime (erro de tipo essencial), quando invencível (escusável), exclui o dolo e a culpa, afastando a própria tipicidade do fato; por outro lado, quando vencível (inescusável), exclui o dolo, mas permite a punição a título de culpa, desde que haja modalidade culposa prevista em lei.",
    explicacao: "GABARITO: CERTO. O art. 20, caput, do Código Penal preceitua: 'O erro sobre elemento constitutivo do tipo legal de crime exclui o dolo, mas permite a punição por crime culposo, se previsto em lei'. Se o erro for inevitável/invencível (aquele que nenhuma pessoa com prudência média evitaria nas circunstâncias), excluem-se tanto o dolo quanto a culpa. Se o erro for evitável/vencível (decorrente de desatenção ou descuido evitável), o dolo continua afastado, mas o agente responde por culpa (se tipificada na legislação).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O erro de tipo essencial sempre exclui o dolo; se invencível, exclui também a culpa; se vencível, autoriza a punição culposa."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A assertiva descreve fielmente as consequências dogmáticas do erro de tipo essencial previstas no art. 20, caput, do CP."
      }
    ]
  },

  // 021 - Descriminantes Putativas: Teoria Limitada da Culpabilidade
  {
    idSlug: "batch3-penal-021",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No âmbito da teoria do delito, as descriminantes putativas sobre os pressupostos fáticos de uma causa de justificação (art. 20, § 1º, do Código Penal) foram disciplinadas pelo legislador brasileiro segundo os postulados da Teoria:",
    explicacao: "GABARITO: Letra B. O Código Penal brasileiro, na reforma da Parte Geral de 1984 (conforme Item 17 da Exposição de Motivos), adotou a Teoria Limitada da Culpabilidade. Por essa teoria, o erro que incide sobre a situação fática de uma causa de justificação (descriminante putativa por erro de tipo permissivo fático) é tratado formalmente como erro de tipo (art. 20, § 1º), isentando de pena se invencível e punindo por culpa imprópria se vencível. Em contrapartida, o erro sobre os limites jurídicos ou existência da norma justificadora é tratado como erro de proibição indireto (art. 21).",
    alternativas: [
      {
        letra: "A",
        texto: "Extrema da culpabilidade, tratando todo e qualquer erro justificante como erro de proibição.",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria extrema da culpabilidade equipara todas as descriminantes putativas a erro de proibição, tese rejeitada pela reforma de 1984 do CP."
      },
      {
        letra: "B",
        texto: "Limitada da culpabilidade, que equipara o erro sobre pressupostos fáticos de causa de justificação ao erro de tipo (erro de tipo permissivo).",
        correta: true,
        explicacao_especifica: "Correto. O Código Penal adotou expressamente a teoria limitada da culpabilidade no art. 20, § 1º (erro sobre a situação de fato)."
      },
      {
        letra: "C",
        texto: "Finalista estrita, que considera as descriminantes putativas como causas supralegais de exclusão da antijuridicidade material.",
        correta: false,
        explicacao_especifica: "Incorreto. Descriminantes putativas são situações imaginárias que operam no campo da culpabilidade/tipo, não justificando o fato na realidade objetiva."
      },
      {
        letra: "D",
        texto: "Causal-naturalista, fundamentando a isenção de pena na ausência de nexo causal fisiológico.",
        correta: false,
        explicacao_especifica: "Incorreto. O sistema causalista não formulou a dogmática do art. 20, § 1º, do CP."
      },
      {
        letra: "E",
        texto: "Funcionalista sistêmica de Jakobs, baseada na quebra de fidelidade ao sistema normativo estatal.",
        correta: false,
        explicacao_especifica: "Incorreto. O modelo legislativo do CP baseia-se na teoria limitada da culpabilidade de matriz finalista welzeliana moderada."
      }
    ]
  },

  // 022 - Erro de Tipo Acidental: Aberratio Ictus vs Error in Personam
  {
    idSlug: "batch3-penal-022",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Com a intenção de matar seu desafeto Gilberto, Fabiano posiciona-se em uma esquina e dispara com sua pistola. Entretanto, por puro desvio na pontaria (aberração no ataque), o projétil atinge Helena, pedestre que passava pelo local e cuja presença não havia sido notada, provocando sua morte instantânea. Diante do art. 73 do Código Penal (aberratio ictus com unidade simples), é correto afirmar que Fabiano:",
    explicacao: "GABARITO: Letra C. O art. 73, 1ª parte, do Código Penal regula o aberratio ictus (erro na execução): 'Quando, por acidente ou erro no uso dos meios de execução, o agente, ao invés de atingir a pessoa que pretendia ofender, atinge pessoa diversa, responde como se tivesse praticado o crime contra aquela' (vítima virtual/visada). Aplica-se a regra do art. 20, § 3º, considerando-se as condições e qualidades da pessoa que se pretendia ofender (Gilberto), e não as da pessoa efetivamente atingida (Helena).",
    alternativas: [
      {
        letra: "A",
        texto: "Responderá por homicídio culposo em relação a Helena em concurso material com tentativa de homicídio contra Gilberto.",
        correta: false,
        explicacao_especifica: "Incorreto. No aberratio ictus com unidade simples (atingida apenas pessoa diversa), o agente responde por um único homicídio doloso consumado (art. 73, 1ª parte, CP)."
      },
      {
        letra: "B",
        texto: "Responderá por homicídio doloso consumado qualificado pelas condições e qualidades pessoais de Helena (vítima real).",
        correta: false,
        explicacao_especifica: "Incorreto. Consideram-se as condições e qualidades da vítima virtual pretendida (Gilberto), por força da remissão ao art. 20, § 3º do CP."
      },
      {
        letra: "C",
        texto: "Responderá por um único homicídio doloso consumado, considerando-se as condições e qualidades da vítima que ele pretendia atingir (vítima virtual).",
        correta: true,
        explicacao_especifica: "Correto. Nos termos do art. 73 do CP, havendo aberratio ictus com resultado único, o agente responde como se tivesse atingido a vítima pretendida (Gilberto)."
      },
      {
        letra: "D",
        texto: "Terá sua conduta desclassificada para disparo de arma de fogo em via pública com resultado morte culposo.",
        correta: false,
        explicacao_especifica: "Incorreto. O animus necandi direcionado à vítima virtual transfere a tipicidade dolosa consumada para o fato ocorrido."
      },
      {
        letra: "E",
        texto: "Será isento de pena quanto ao homicídio em face de erro na execução acidental invencível.",
        correta: false,
        explicacao_especifica: "Incorreto. O erro de tipo acidental na execução não isenta o autor de responsabilidade penal."
      }
    ]
  },

  // 023 - Estado de Necessidade: Dever Legal de Enfrentar o Perigo
  {
    idSlug: "batch3-penal-023",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "No estado de necessidade justificante (art. 24 do Código Penal), aquele que possui o dever legal de enfrentar o perigo não pode invocar a excludente de ilicitude para se furtar ao cumprimento de sua obrigação funcional de agir.",
    explicacao: "GABARITO: CERTO. O art. 24, § 1º, do Código Penal estabelece de forma peremptória: 'Não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo'. Assim, agentes de segurança pública (policiais, bombeiros militares, guardas civis) e demais servidores com dever legal de agir não podem sacrificar o bem de terceiros ou omitir-se sob a alegação de estado de necessidade próprio ordinário, salvo se o sacrifício pessoal for manifestamente inútil perante um perigo de morte absolutamente certo e inevitável.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 24, § 1º, do CP veda expressamente a alegação de estado de necessidade por quem ostenta o dever legal de enfrentar o perigo."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O dever legal de proteção impõe ao agente suportar o risco funcional decorrente de suas atribuições (art. 24, § 1º, CP)."
      }
    ]
  },

  // 024 - Legítima Defesa: Agente de Segurança e Refém (Art. 25, Parágrafo Único)
  {
    idSlug: "batch3-penal-024",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "Nos termos da legislação penal vigente, considera-se em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.",
    explicacao: "GABARITO: CERTO. A Lei nº 13.964/2019 (Pacote Anticrime) acrescentou o parágrafo único ao art. 25 do Código Penal: 'Observados os requisitos previstos no caput deste artigo, considera-se também em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes'. A norma esclarece e legitima a intervenção do policial/atirador de elite que neutraliza o agressor para salvar a vida de reféns.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O parágrafo único do art. 25 do CP prevê expressamente a atuação em legítima defesa de terceiro pelo agente de segurança pública na proteção de reféns."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O dispositivo foi expressamente positivado no art. 25, parágrafo único, do Código Penal pelo Pacote Anticrime."
      }
    ]
  },

  // 025 - Estrito Cumprimento de Dever Legal e Excesso Punível
  {
    idSlug: "batch3-penal-025",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/SC",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Durante o cumprimento de mandado de prisão preventiva expedido regularmente pela autoridade judiciária, o policial civil Renato localiza o procurado, que de pronto se rende, deita no chão e coloca as mãos na nuca desarmado. Mesmo ciente da completa rendição e ausência de qualquer resistência, Renato desfere chutes e coronhadas no preso, provocando fratura em suas costelas. Diante do art. 23, parágrafo único, do Código Penal, Renato:",
    explicacao: "GABARITO: Letra B. O art. 23, parágrafo único, do Código Penal estabelece: 'O agente, em qualquer das hipóteses deste artigo, responderá pelo excesso doloso ou culposo'. O estrito cumprimento do dever legal autoriza apenas a força estritamente necessária e proporcional para a efetivação da prisão (art. 284 do CPP). Uma vez cessada a resistência com a completa rendição, a continuação do uso de violência configura excesso doloso, respondendo o agente pelo crime de lesão corporal (e/ou abuso de autoridade) sem o amparo da excludente.",
    alternativas: [
      {
        letra: "A",
        texto: "Está plenamente acobertado pela excludente de ilicitude do estrito cumprimento do dever legal, visto que a diligência derivou de ordem judicial.",
        correta: false,
        explicacao_especifica: "Incorreto. O dever legal autoriza o uso estrito e moderado dos meios; a violência gratuita após a rendição ultrapassa a legalidade e configura excesso punível."
      },
      {
        letra: "B",
        texto: "Responderá pelas lesões corporais provocadas a título de excesso doloso, pois a agressão cometida após a completa rendição extrapolou os limites do dever legal.",
        correta: true,
        explicacao_especifica: "Correto. Nos termos do art. 23, parágrafo único, do CP, o agente responde pelo excesso doloso quando prossegue na agressão sem necessidade funcional."
      },
      {
        letra: "C",
        texto: "Responderá por excesso escusável, que isenta o agente de pena em razão do estresse operacional decorrente do cumprimento de mandados.",
        correta: false,
        explicacao_especifica: "Incorreto. Não há excesso exculpante quando a vítima se rende integralmente e o policial a agride dolosamente."
      },
      {
        letra: "D",
        texto: "Ficará isento de pena criminal, submetendo-se exclusivamente a penalidade de advertência na esfera administrativa disciplinar.",
        correta: false,
        explicacao_especifica: "Incorreto. A responsabilidade penal é independente da administrativa (art. 935 do Código Civil e art. 125 da Lei 8.112/90)."
      },
      {
        letra: "E",
        texto: "Terá sua conduta amparada pelo exercício regular de direito putativo, ante a presunção legal de periculosidade do capturado.",
        correta: false,
        explicacao_especifica: "Incorreto. Inexiste exercício regular de direito em agressão física contra pessoa já rendida e desarmada."
      }
    ]
  }
];
