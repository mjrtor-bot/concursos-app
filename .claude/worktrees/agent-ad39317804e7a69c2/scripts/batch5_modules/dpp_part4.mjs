import { TAXONOMIA } from "./taxonomia.mjs";

export const dppPart4 = [
  {
    idSlug: "dpp-b5-054",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal, no julgamento das ADIs 5.637 e 6.245, fixou a constitucionalidade da lavratura do Termo Circunstanciado de Ocorrência (TCO) por agentes da Polícia Rodoviária Federal e por policiais militares, por se tratar de mero registro administrativo de notícia-crime de menor potencial ofensivo que não invade atribuições privativas de polícia judiciária.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O Plenário do STF consolidou que a lavratura de TCO pela PM e PRF é constitucional e não usurpa funções da Polícia Judiciária."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O STF pacificou a plena constitucionalidade do TCO lavrado por PRF e PM."
      }
    ],
    explicacao: "Gabarito: Certo. O Supremo Tribunal Federal, no julgamento das ADIs 5.637, 6.245 e 6.264, pacificou o entendimento de que a lavratura de Termo Circunstanciado de Ocorrência (TCO) previsto no art. 69 da Lei nº 9.099/1995 por policiais rodoviários federais e policiais militares não ofende a Constituição nem usurpa atribuições da Polícia Civil/Federal, qualificando-se como ato administrativo de constatação fática imediata."
  },
  {
    idSlug: "dpp-b5-055",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito dos institutos despenalizadores da Lei nº 9.099/1995 (Juizados Especiais Criminais) e da jurisprudência sumulada dos Tribunais Superiores, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A homologação da transação penal acarreta a imediata declaração de reincidência do autor do fato perante futuros processos criminais.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme o art. 76, § 4º, da Lei 9.099/95, a transação não gera reincidência nem maus antecedentes."
      },
      {
        letra: "B",
        texto: "A homologação da transação penal prevista no art. 76 da Lei nº 9.099/1995 não faz coisa julgada material e, descumpridas as suas cláusulas, retoma-se a situação anterior, possibilitando-se ao Ministério Público a propositura da ação penal imediatamente.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos da Súmula Vinculante 35 do STF."
      },
      {
        letra: "C",
        texto: "Os institutos da transação penal e da suspensão condicional do processo são plenamente aplicáveis aos crimes praticados no âmbito de violência doméstica e familiar contra a mulher.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 41 da Lei 11.340/06 e a Súmula 536 do STJ vedam a aplicação de qualquer instituto da Lei 9.099/95 na violência doméstica contra a mulher."
      },
      {
        letra: "D",
        texto: "A suspensão condicional do processo (art. 89) é cabível em crimes cuja pena máxima privativa de liberdade não seja superior a quatro anos.",
        correta: false,
        explicacao_especifica: "Incorreta. O sursis processual exige pena mínima cominada igual ou inferior a 1 ano (art. 89 Lei 9.099/95)."
      },
      {
        letra: "E",
        texto: "O cumprimento integral das condições da suspensão condicional do processo acarreta o imediato registro da condenação na folha de antecedentes criminais do réu.",
        correta: false,
        explicacao_especifica: "Incorreta. O cumprimento extingue a punibilidade sem deixar antecedentes penais condenatórios (art. 89, § 5º)."
      }
    ],
    explicacao: "Gabarito: B. A Súmula Vinculante nº 35 do STF estabelece: 'A homologação da transação penal prevista no artigo 76 da Lei 9.099/1995 não faz coisa julgada material e, descumpridas suas cláusulas, retoma-se a situação anterior, possibilitando-se ao Ministério Público a continuidade da persecução penal mediante oferecimento de denúncia ou requisição de inquérito policial'."
  },
  {
    idSlug: "dpp-b5-056",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No julgamento do Tema 990 de Repercussão Geral (RE 1.055.941/SP), o Plenário do Supremo Tribunal Federal fixou tese sobre o compartilhamento de relatórios de inteligência financeira e dados bancários com os órgãos de persecução penal. Assinale a opção que expressa corretamente a tese firmada.",
    alternativas: [
      {
        letra: "A",
        texto: "O compartilhamento dos relatórios de inteligência financeira da UIF/COAF e de dados fiscais da Receita Federal com os órgãos de persecução penal para fins criminais independe de prévia autorização judicial, sendo constitucional.",
        correta: true,
        explicacao_especifica: "Correta. O STF fixou a constitucionalidade do compartilhamento global direto da UIF/COAF e Receita Federal com o MP e Polícia sem necessidade de autorização judicial prévia."
      },
      {
        letra: "B",
        texto: "O acesso pelo Ministério Público ou pela Polícia Federal aos relatórios da UIF exige autorização expressa e individualizada do juiz das garantias em todos os casos.",
        correta: false,
        explicacao_especifica: "Incorreta. O Tema 990/STF dispensou autorização judicial para o envio de relatórios de inteligência financeira da UIF/COAF."
      },
      {
        letra: "C",
        texto: "A Receita Federal só pode repassar informações fiscais aos órgãos investigativos caso haja prévia confissão formal e espontânea do contribuinte investigado.",
        correta: false,
        explicacao_especifica: "Incorreta. O envio decorre do dever legal de comunicação e representação fiscal para fins penais (RFP)."
      },
      {
        letra: "D",
        texto: "Os relatórios de inteligência financeira da UIF constituem prova pericial conclusiva e irrepetível capaz de fundamentar condenação criminal autônoma.",
        correta: false,
        explicacao_especifica: "Incorreta. O RIF é meio de obtenção/elemento informativo de inteligência, não prova pericial cabal isolada."
      },
      {
        letra: "E",
        texto: "O repasse de dados da UIF diretamente à autoridade policial viola a reserva de jurisdição e acarreta a nulidade absoluta de todo o inquérito policial.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF julgou expressamente constitucional o repasse à autoridade policial e ao MP."
      }
    ],
    explicacao: "Gabarito: A. Conforme fixado pelo STF no Tema 990 da Repercussão Geral: 'É constitucional o compartilhamento dos relatórios de inteligência financeira da UIF e da íntegra do procedimento fiscalizatório da Receita Federal do Brasil, que define o lançamento do tributo, com os órgãos de persecução penal para fins criminais, sem a obrigatoriedade de prévia autorização judicial, devendo ser resguardado o sigilo das informações'."
  },
  {
    idSlug: "dpp-b5-057",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Agente de Polícia Civil",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A gravação ambiental realizada clandestinamente por um dos interlocutores, sem o conhecimento do outro, é considerada prova lícita caso seja utilizada em sede de legítima defesa para comprovar inocência ou afastar imputação criminosa indevida.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF (Tema 979 de Repercussão Geral e jurisprudência pacífica) admite a gravação ambiental feita por um dos interlocutores (gravação clandestina), especialmente em legítima defesa."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. A gravação por um dos interlocutores é lícita, não se confundindo com interceptação telefônica ou escuta ambiental de terceiros."
      }
    ],
    explicacao: "Gabarito: Certo. Segundo o STF (Tema 979 e AI 560.223 QO/STF), a gravação clandestina efetuada por um dos interlocutores, ainda que sem o conhecimento do outro, é meio lícito de prova quando utilizada em legítima defesa ou quando não existir dever legal específico de preservação de segredo."
  },
  {
    idSlug: "dpp-b5-058",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos crimes permanentes, como no caso do armazenamento de substâncias entorpecentes ilícitas ou da ocultação de vítima em sequestro e cárcere privado, a situação de flagrante delito:",
    alternativas: [
      {
        letra: "A",
        texto: "Cessa impreterivelmente vinte e quatro horas após o início dos atos executórios iniciais.",
        correta: false,
        explicacao_especifica: "Incorreta. Não existe prazo de 24h para cessação de flagrante em crime permanente."
      },
      {
        letra: "B",
        texto: "Prolonga-se no tempo enquanto durar a consumação e a permanência delitiva, autorizando a prisão em flagrante a qualquer tempo.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 303 do CPP: 'Nas infrações permanentes, entende-se o agente em flagrante delito enquanto não cessar a permanência'."
      },
      {
        letra: "C",
        texto: "Depende de autorização judicial expressa para que a autoridade policial efetue a prisão do investigado.",
        correta: false,
        explicacao_especifica: "Incorreta. O flagrante é hipótese constitucional de prisão sem necessidade de mandado prévio (art. 5º, LXI, CF/88)."
      },
      {
        letra: "D",
        texto: "Transforma-se automaticamente em crime instantâneo de efeitos permanentes após a instauração do inquérito.",
        correta: false,
        explicacao_especifica: "Incorreta. A natureza jurídica do crime permanente não se altera por ato de instauração de inquérito."
      },
      {
        letra: "E",
        texto: "Exige que a vítima compareça à delegacia para lavratura de termo de ratificação no prazo de seis horas.",
        correta: false,
        explicacao_especifica: "Incorreta. O flagrante não depende de ratificação prévia da vítima para subsistir nos crimes de ação pública incondicionada."
      }
    ],
    explicacao: "Gabarito: B. O art. 303 do CPP preconiza expressamente: 'Nas infrações permanentes, entende-se o agente em flagrante delito enquanto não cessar a permanência'. Desse modo, o estado flagrancial perdura continuamente enquanto a conduta e a consumação estiverem sendo protraídas no tempo."
  },
  {
    idSlug: "dpp-b5-059",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Perito Criminal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Para a lavratura do auto de prisão em flagrante e oferecimento da denúncia por tráfico ilícito de entorpecentes, é suficiente o laudo de constatação preliminar da natureza e quantidade da substância, firmado por perito oficial ou por pessoa idônea; contudo, a prolação de sentença condenatória exige a juntada aos autos do laudo toxicológico definitivo.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos termos do art. 50, § 1º, da Lei 11.343/2006 e jurisprudência consolidada do STJ (Súmula e precedentes repetitivos), o laudo preliminar basta para flagrante e denúncia, mas a condenação definitiva exige laudo pericial definitivo."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O enunciado resume com perfeita precisão a sistemática do art. 50, § 1º, da Lei de Drogas e da jurisprudência do STJ."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 50, § 1º, da Lei nº 11.343/2006 estabelece que o laudo de constatação provisório firmado por perito oficial ou pessoa idônea é bastante para fundamentar a lavratura do auto de prisão em flagrante e o recebimento da denúncia. Já a condenação exige, como regra, o laudo toxicológico definitivo para comprovação inconteste da materialidade delitiva (STJ, EREsp 1.544.057/RJ)."
  },
  {
    idSlug: "dpp-b5-060",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.procedimento_comum_juri,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No procedimento do Tribunal do Júri, havendo a absolvição do acusado pelos jurados com base na resposta afirmativa ao terceiro quesito obrigatório ('O jurado absolve o acusado?'), assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A acusação não pode em nenhuma hipótese interpor apelação, tendo em vista que a resposta afirmativa ao quesito genérico decorre da íntima convicção dos jurados.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme o STF e art. 593, III, 'd', CPP, a acusação pode apelar se a absolvição for manifestamente contrária à prova dos autos (salvo em teses ilegais como legítima defesa da honra)."
      },
      {
        letra: "B",
        texto: "O terceiro quesito é obrigatório mesmo quando a tese defensiva for exclusivamente absolutória por negativa de autoria ou legítima defesa.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos da jurisprudência pacífica do STJ (Súmula e precedentes) e art. 483, § 2º, do CPP, a formulação do quesito genérico absolutório é cogente e sua omissão gera nulidade absoluta."
      },
      {
        letra: "C",
        texto: "A formulação do quesito absolutório fica dispensada se os jurados já tiverem reconhecido por unanimidade a autoria e a materialidade.",
        correta: false,
        explicacao_especifica: "Incorreta. É justamente após responder 'sim' à materialidade e autoria que o quesito genérico DEVE ser votado obrigatoriamente."
      },
      {
        letra: "D",
        texto: "O juiz togado pode determinar a revelação individual dos votos nominais de cada jurado no quesito genérico para fiscalizar a motivação.",
        correta: false,
        explicacao_especifica: "Incorreta. O sigilo das votações é garantia constitucional expressa (art. 5º, XXXVIII, 'b', CF e art. 487 CPP)."
      },
      {
        letra: "E",
        texto: "A resposta afirmativa ao quesito genérico obriga o juiz a aplicar medida de segurança de internação ambulatorial.",
        correta: false,
        explicacao_especifica: "Incorreta. A resposta 'sim' gera absolvição própria plena (art. 492, II, CPP)."
      }
    ],
    explicacao: "Gabarito: B. A redação do art. 483, § 2º, do CPP impõe que, respondidos afirmativamente os quesitos relativos à materialidade e à autoria/participação, será obrigatoriamente submetido aos jurados o quesito genérico absolutório: 'O jurado absolve o acusado?'. A jurisprudência do STJ e do STF considera sua ausência causa de nulidade absoluta por vício insanável de quesitação."
  },
  {
    idSlug: "dpp-b5-061",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em razão do princípio da não autoincriminação (nemo tenetur se detegere), o condutor de veículo automotor não pode ser compelido a realizar o teste do etilômetro (bafômetro); contudo, a recusa à realização do exame enseja sanção administrativa legalmente prevista e a embriaguez ao volante pode ser constatada por outros meios de prova em direito admitidos.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF fixou a constitucionalidade da autuação administrativa pela recusa ao bafômetro (art. 165-A CTB) e o art. 306, § 2º, admite prova testemunhal, vídeos e sinais clínicos."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O condutor não pode ser fisicamente forçado a soprar, mas sofre autuação administrativa e a constatação penal pode dar-se por meios subsidiários."
      }
    ],
    explicacao: "Gabarito: Certo. No julgamento conjunto das ADIs 4.101, 4.017 e do RE 1.224.374 (Tema 1.079), o STF assentou que o cidadão não é obrigado a produzir prova contra si (não soprar o etilômetro), mas é constitucional a aplicação da infração administrativa do art. 165-A do CTB. Além disso, no âmbito penal (art. 306, § 2º, CTB), a alteração psicomotora pode ser comprovada por prova testemunhal, vídeos, perícia clínica e outros meios lícitos."
  },
  {
    idSlug: "dpp-b5-062",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito das regras constitucionais e processuais que regem o foro por prerrogativa de função perante o Supremo Tribunal Federal, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O foro por prerrogativa de função alcança qualquer crime praticado pelo parlamentar, mesmo que cometido anteriormente à sua diplomação e sem qualquer nexo com o mandato.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme a AP 937/STF, o foro alcança crimes praticados durante o mandato e relacionados às funções desempenhadas."
      },
      {
        letra: "B",
        texto: "O término do mandato parlamentar ou a renúncia operada após o encerramento da fase de instrução processual (com a intimação para alegações finais) não desloca a competência do STF.",
        correta: true,
        explicacao_especifica: "Correta. O STF fixou o marco temporal da instrução processual encerrada para fixar em definitivo a competência (perpetuatio jurisdictionis), impedindo manobras protelatórias."
      },
      {
        letra: "C",
        texto: "A competência por prerrogativa de função de Deputado Federal subsiste indefinidamente após a cassação do mandato para todos os crimes funcionais.",
        correta: false,
        explicacao_especifica: "Incorreta. A regra geral é o envio dos autos à 1ª instância ao término do mandato, salvo encerramento da instrução."
      },
      {
        letra: "D",
        texto: "O foro de prerrogativa impede que a autoridade policial realize qualquer ato de investigação preliminar ou colheita de vestígios em local de crime.",
        correta: false,
        explicacao_especifica: "Incorreta. A polícia pode colher vestígios imediatos e realizar atos cautelares urgentes preservando a cadeia de custódia."
      },
      {
        letra: "E",
        texto: "A competência do STF para julgar parlamentares federais pode ser renunciada unilateralmente pelo congressista mediante simples requerimento administrativo.",
        correta: false,
        explicacao_especifica: "Incorreta. A competência funcional é absoluta e inderrogável pela vontade das partes."
      }
    ],
    explicacao: "Gabarito: B. Na Questão de Ordem na Ação Penal 937/RJ, o Plenário do STF fixou duas teses essenciais: 1) O foro por prerrogativa de função aplica-se apenas aos crimes cometidos durante o exercício do cargo e relacionados às funções desempenhadas; e 2) Após o encerramento da instrução processual (com a publicação do despacho de intimação para apresentação de alegações finais), a competência para o julgamento fica prorrogada e perpetuada no Tribunal, mesmo que o agente venha a cessar o exercício da função pública."
  },
  {
    idSlug: "dpp-b5-063",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.nulidades_recursos,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre as prerrogativas da Defensoria Pública e do Ministério Público na contagem de prazos e intimações no processo penal, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A Defensoria Pública goza de prazo em dobro para todas as manifestações processuais penais, e sua intimação deve ser obrigatoriamente pessoal com vista dos autos, sob pena de nulidade processual absoluta.",
        correta: true,
        explicacao_especifica: "Correta. A Lei Complementar nº 80/1994 (art. 44, I e art. 128, I) e o art. 370, § 4º, do CPP asseguram intimação pessoal com remessa/vista dos autos e prazo em dobro para a Defensoria Pública."
      },
      {
        letra: "B",
        texto: "A intimação da Defensoria Pública pode ser realizada validamente mediante simples publicação nominal no Diário da Justiça Eletrônico.",
        correta: false,
        explicacao_especifica: "Incorreta. A intimação por DJE é exclusiva da advocacia privada constituída; Defensoria e MP exigem intimação pessoal com remessa dos autos."
      },
      {
        letra: "C",
        texto: "O Ministério Público dispõe de prazo em dobro para oferecer denúncia e para interpor recursos penais em todas as instâncias.",
        correta: false,
        explicacao_especifica: "Incorreta. No processo penal, o Ministério Público NÃO tem prazo em dobro para recorrer ou denunciar (prazo simples igual ao da acusação no CPP)."
      },
      {
        letra: "D",
        texto: "Os advogados particulares constituídos gozam de prazo em dobro para apelação quando houver litisconsórcio passivo com procuradores distintos.",
        correta: false,
        explicacao_especifica: "Incorreta. A regra do art. 229 do CPC (prazo em dobro para litisconsortes com procuradores distintos) é inaplicável ao processo penal (Súmula 710 STF)."
      },
      {
        letra: "E",
        texto: "A ausência de intimação pessoal do Defensor Público converte-se em mera irregularidade formal caso o processo tramite pelo rito sumário.",
        correta: false,
        explicacao_especifica: "Incorreta. A violação à intimação pessoal do Defensor gera nulidade absoluta por cerceamento de defesa."
      }
    ],
    explicacao: "Gabarito: A. Nos termos do art. 370, § 4º, do CPP e da LC nº 80/1994 (art. 44, I), a Defensoria Pública possui a prerrogativa de intimação pessoal em qualquer processo, mediante a entrega/vista dos autos, bem como a contagem em dobro de todos os prazos. No processo penal, o Ministério Público tem intimação pessoal, mas NÃO tem prazo em dobro (prazo simples)."
  },
  {
    idSlug: "dpp-b5-064",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A captação ambiental de sinais eletromagnéticos, ópticos ou acústicos para investigação criminal (art. 8º-A da Lei nº 9.296/1996) exige autorização judicial fundamentada e só poderá ser decretada quando a prova não puder ser feita por outros meios disponíveis e houver elementos probatórios razoáveis de autoria e materialidade de infração penal cujas penas máximas sejam superiores a quatro anos ou em infrações penais conexas.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos termos exatos do art. 8º-A da Lei nº 9.296/1996, incluído pelo Pacote Anticrime (Lei nº 13.964/2019)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O texto reproduz fielmente todos os requisitos cumulativos do art. 8º-A da Lei 9.296/1996."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 8º-A da Lei nº 9.296/1996 (com redação dada pela Lei nº 13.964/2019) estipula expressamente: 'Para investigação ou instrução criminal, poderá ser autorizada pelo juiz, a requerimento da autoridade policial ou do Ministério Público, a captação ambiental de sinais eletromagnéticos, ópticos ou acústicos, quando: I - a prova não puder ser feita por outros meios disponíveis e igualmente eficazes; e II - houver elementos probatórios razoáveis de autoria e materialidade de infrações penais cujas penas máximas sejam superiores a 4 (quatro) anos ou em infrações penais conexas'."
  },
  {
    idSlug: "dpp-b5-065",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.nulidades_recursos,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do Código de Processo Penal, contra a decisão de pronúncia proferida pelo magistrado na primeira fase do rito do Júri, caberá a interposição de:",
    alternativas: [
      {
        letra: "A",
        texto: "Apelação no prazo de cinco dias.",
        correta: false,
        explicacao_especifica: "Incorreta. Da pronúncia cabe RESE (art. 581, IV, CPP). Apelação cabe da impronúncia e absolvição sumária (art. 416 CPP)."
      },
      {
        letra: "B",
        texto: "Recurso em Sentido Estrito (RESE) no prazo de cinco dias.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 581, IV, do CPP: 'Caberá recurso, no sentido estrito, da decisão, despacho ou sentença: IV - que pronunciar o réu'."
      },
      {
        letra: "C",
        texto: "Agravo de instrumento no prazo improrrogável de quinze dias.",
        correta: false,
        explicacao_especifica: "Incorreta. Agravo de instrumento é recurso cível, não existente no CPP para impugnar pronúncia."
      },
      {
        letra: "D",
        texto: "Embargos infringentes diretos perante a Presidência do Tribunal de Justiça.",
        correta: false,
        explicacao_especifica: "Incorreta. Embargos infringentes são cabíveis apenas em 2º grau contra acórdão não unânime."
      },
      {
        letra: "E",
        texto: "Correição parcial autônoma em primeiro grau.",
        correta: false,
        explicacao_especifica: "Incorreta. Havendo recurso próprio previsto em lei (RESE), descabe correição parcial."
      }
    ],
    explicacao: "Gabarito: B. Conforme dispõe o art. 581, IV, do CPP, cabe Recurso em Sentido Estrito (RESE), no prazo de 5 (cinco) dias para interposição e 2 (dois) dias para apresentação de razões (art. 586 e 588 do CPP), contra a decisão que pronunciar o réu."
  },
  {
    idSlug: "dpp-b5-066",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Acerca do incidente de insanidade mental do acusado regulado pelos arts. 149 a 154 do CPP, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A instauração do incidente pode ser determinada pelo juiz de ofício, a requerimento do Ministério Público, do defensor, do cônjuge, ascendente, descendente ou irmão do réu, ou mediante representação do Delegado de Polícia na fase do inquérito.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 149, caput e § 1º, do CPP."
      },
      {
        letra: "B",
        texto: "A instauração do incidente não suspende o andamento do processo principal em hipótese alguma.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 149, § 2º, do CPP prevê que o juiz nomeará curador ao réu e determinará a suspensão do processo se a infração tiver sido praticada após a doença."
      },
      {
        letra: "C",
        texto: "O exame pericial psiquiátrico pode ser realizado mesmo sem a nomeação de curador especial ao réu.",
        correta: false,
        explicacao_especifica: "Incorreta. A nomeação de curador é obrigatória no incidente (art. 149, § 2º, CPP)."
      },
      {
        letra: "D",
        texto: "Se a doença mental tiver sobrevindo após a infração, o processo penal será sumariamente extinto pela morte ficta do agente.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme o art. 152 do CPP, o processo fica suspenso até que o réu se restabeleça."
      },
      {
        letra: "E",
        texto: "O laudo pericial psiquiátrico vincula de forma absoluta e irrecorrível a decisão do magistrado.",
        correta: false,
        explicacao_especifica: "Incorreta. Vigora o princípio do livre convencimento motivado (art. 182 CPP)."
      }
    ],
    explicacao: "Gabarito: A. O art. 149 do CPP prevê que o incidente de insanidade mental poderá ser ordenado pelo juiz de ofício ou a requerimento do MP, do defensor, do curador, do ascendente, descendente, irmão ou cônjuge, ou mediante representação da autoridade policial na fase do inquérito (§ 1º). O juiz nomeará curador ao réu e o processo ficará suspenso durante a realização da perícia (§ 2º)."
  },
  {
    idSlug: "dpp-b5-067",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos crimes de ação penal pública condicionada à representação e nos de ação privada, o inquérito policial não poderá ser instaurado de ofício pela autoridade policial sem a prévia manifestação de vontade da vítima ou de seu representante legal.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos termos expressos do art. 5º, §§ 4º e 5º, do CPP, a instauração do IP depende de representação ou requerimento do titular da ação privada."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 5º, §§ 4º e 5º, do CPP veda a instauração de ofício sem a respectiva condição de procedibilidade."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme preceitua o art. 5º, § 4º, do CPP: 'O inquérito, nos crimes em que a ação pública depender de representação, não poderá sem ela ser iniciado'; e no § 5º: 'Nos crimes de ação privada, a autoridade policial somente poderá proceder a inquérito a requerimento de quem tenha qualidade para intentá-la'."
  },
  {
    idSlug: "dpp-b5-068",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Sobre as provas no processo penal e a indicação de assistente técnico pelas partes (art. 159 do CPP), é correto afirmar que:",
    alternativas: [
      {
        letra: "A",
        texto: "O assistente técnico indicado pelas partes atua no processo antes da conclusão do laudo pelo perito oficial, participando diretamente da elaboração originária da perícia oficial.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme o art. 159, § 4º, do CPP, o assistente técnico atuará a partir de sua admissão pelo juiz e após a conclusão dos exames pelos peritos oficiais."
      },
      {
        letra: "B",
        texto: "Será facultada ao Ministério Público, ao assistente de acusação, ao ofendido, ao querelante e ao acusado a formulação de quesitos e indicação de assistente técnico.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos exatos do art. 159, § 3º, do CPP."
      },
      {
        letra: "C",
        texto: "A parte não pode formular quesitos explicativos aos peritos oficiais em nenhuma hipótese.",
        correta: false,
        explicacao_especifica: "Incorreta. É direito processual expresso das partes formular quesitos e solicitar esclarecimentos (art. 159, § 3º e § 5º, I, CPP)."
      },
      {
        letra: "D",
        texto: "O parecer do assistente técnico possui peso probatório superior e vinculante em relação ao laudo do perito oficial do Estado.",
        correta: false,
        explicacao_especifica: "Incorreta. Ambos os documentos submetem-se ao livre convencimento motivado do magistrado (art. 182 CPP)."
      },
      {
        letra: "E",
        texto: "A indicação de assistente técnico é prerrogativa exclusiva e privativa do órgão do Ministério Público.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 159, § 3º, do CPP estende a faculdade a todas as partes, inclusive ao acusado e ofendido."
      }
    ],
    explicacao: "Gabarito: B. O art. 159, § 3º, do CPP dispõe: 'Serão facultadas ao Ministério Público, ao assistente de acusação, ao ofendido, ao querelante e ao acusado a formulação de quesitos e indicação de assistente técnico'. O § 4º complementa que o assistente técnico atuará após a admissão pelo juiz e após a conclusão dos exames e elaboração do laudo pelos peritos oficiais."
  },
  {
    idSlug: "dpp-b5-069",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos casos de relaxamento da prisão em flagrante por ilegalidade manifesta, é correto afirmar que:",
    alternativas: [
      {
        letra: "A",
        texto: "O relaxamento da prisão ilegal compete privativamente à autoridade judiciária competente, não podendo a autoridade policial relaxar o flagrante que ela própria já homologou e lavrou.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 5º, LXV, da CF/88 ('a prisão ilegal será imediatamente relaxada pela autoridade judiciária') e art. 310, I, do CPP. Lavrado o flagrante pelo Delegado, o controle jurisdicional do relaxamento é exclusivo do juiz."
      },
      {
        letra: "B",
        texto: "O relaxamento da prisão impede a decretação superveniente de prisão preventiva caso surjam novos motivos cautelares contemporâneos.",
        correta: false,
        explicacao_especifica: "Incorreta. O relaxamento afasta a ilegalidade do flagrante, mas não obsta que o juiz, provocado pelo MP ou polícia, decrete preventiva se presentes os requisitos do art. 312 do CPP."
      },
      {
        letra: "C",
        texto: "O relaxamento da prisão ilegal gera extinção imediata da punibilidade pela decadência do direito de punir do Estado.",
        correta: false,
        explicacao_especifica: "Incorreta. O relaxamento afeta unicamente o status libertatis cautelar, permanecendo a pretensão punitiva e o curso da persecução penal."
      },
      {
        letra: "D",
        texto: "A concessão de relaxamento da prisão depende de prévio recolhimento de fiança pecuniária em juízo.",
        correta: false,
        explicacao_especifica: "Incorreta. Prisão ilegal deve ser relaxada de forma incondicionada e gratuita (art. 5º, LXV, CF)."
      },
      {
        letra: "E",
        texto: "A autoridade policial pode relaxar prisões ordenadas por mandado judicial cumpridas fora de sua circunscrição territorial.",
        correta: false,
        explicacao_especifica: "Incorreta. O relaxamento de mandado judicial é ato exclusivo da autoridade judiciária competente."
      }
    ],
    explicacao: "Gabarito: A. Consoante o art. 5º, LXV, da Constituição Federal, 'a prisão ilegal será imediatamente relaxada pela autoridade judiciária'. Uma vez formalizada e lavrada a prisão em flagrante, apenas o juiz competente tem atribuição para relaxar a segregação ilegal (art. 310, I, CPP)."
  },
  {
    idSlug: "dpp-b5-070",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A infiltração virtual de agentes de polícia na internet (art. 10-A da Lei nº 12.850/2013 e art. 190-A do ECA) prescinde de autorização judicial prévia, bastando a expedição de portaria fundamentada pelo Delegado de Polícia titular da investigação.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Errado. Tanto a infiltração presencial quanto a infiltração virtual exigem prévia e circunstanciada autorização judicial (art. 10 da Lei 12.850/13 e art. 190-A do ECA)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. A infiltração de agentes (presencial ou cibernética/virtual) está sujeita à estrita cláusula de reserva de jurisdição (autorização judicial fundamentada prévia)."
      }
    ],
    explicacao: "Gabarito: Errado. A infiltração de agentes de polícia em meio virtual (internet/redes sociais/dark web), prevista no art. 10-A da Lei nº 12.850/2013 e no art. 190-A do ECA, submete-se à cláusula de reserva de jurisdição, exigindo representação do Delegado de Polícia ou requerimento do Ministério Público e prévia, expressa e motivada autorização judicial, sendo nula a infiltração iniciada sem o respectivo provimento jurisdicional."
  }
];
