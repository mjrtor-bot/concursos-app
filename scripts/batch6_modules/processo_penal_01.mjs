import { TAXONOMIA } from "./taxonomia.mjs";

export const processoPenal01Questoes = [
  // Q1 - CEBRASPE / PRF - Inquérito Policial / Notitia Criminis
  {
    idSlug: "procpen-001",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Denomina-se 'notitia criminis' de cognição imediata (ou direta) aquela em que a autoridade policial toma conhecimento da infração penal por meio de suas atividades rotineiras, como patrulhamentos ostensivos, investigações em andamento ou notícias veiculadas pela imprensa, sem que haja provocação formal da vítima ou de terceiro.",
    explicacao: "GABARITO: CERTO. A notitia criminis de cognição imediata ocorre quando a autoridade policial toma conhecimento do fato delituoso por suas próprias atividades de rotina (patrulhamento, imprensa, descobertas diretas). Já a mediata decorre de provocação formal (requisição do MP ou juiz, ou representação/requerimento da vítima), e a coercitiva ocorre na apresentação do agente em flagrante delito.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q2 - FGV / PM - Inquérito Policial / Indisponibilidade e Características
  {
    idSlug: "procpen-002",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante a condução de inquérito policial relativo a delito patrimonial de ação penal pública incondicionada, o delegado de polícia responsável constata, após a realização de diligências preliminares, a fragilidade dos indícios de autoria coligidos. Diante desse cenário e à luz das regras que regem o inquérito policial no Código de Processo Penal, a autoridade policial:",
    explicacao: "GABARITO: C. Pelo princípio da indisponibilidade do inquérito policial (art. 17 do CPP), a autoridade policial não pode mandar arquivar autos de inquérito. O arquivamento é ato complexo decorrente de manifestação do Ministério Público e decisão judicial (ou sistemática do art. 28 do CPP / ADIs 6298 STF).",
    alternativas: [
      { letra: "A", texto: "pode determinar de ofício o arquivamento definitivo dos autos, lavrando despacho fundamentado de encerramento.", correta: false },
      { letra: "B", texto: "deve extinguir o procedimento e determinar a incineração das peças que não contenham indícios concludentes.", correta: false },
      { letra: "C", texto: "não poderá mandar arquivar autos de inquérito policial, devendo elaborar o relatório final e remeter os autos à autoridade judiciária competente.", correta: true },
      { letra: "D", texto: "poderá suspender a tramitação do inquérito por prazo indeterminado até o comparecimento espontâneo do investigado.", correta: false },
      { letra: "E", texto: "deve converter compulsoriamente o inquérito policial em termo circunstanciado de ocorrência sem prévia comunicação ao MP.", correta: false }
    ]
  },
  // Q3 - CEBRASPE / PRF - Inquérito Policial / Reprodução Simulada dos Fatos
  {
    idSlug: "procpen-003",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Para verificar a possibilidade de haver sido a infração praticada de determinado modo, a autoridade policial poderá proceder à reprodução simulada dos fatos (reconstituição do crime), desde que esta não contrarie a moralidade ou a ordem pública, não podendo o indiciado ser coagido fisicamente a dela participar, em razão do princípio da não autoincriminação ('nemo tenetur se detegere').",
    explicacao: "GABARITO: CERTO. Art. 7º do CPP: 'Para verificar a possibilidade de haver a infração sido praticada de determinado modo, a autoridade policial poderá proceder à reprodução simulada dos fatos, desde que esta não contrarie a moralidade ou a ordem pública'. Ademais, em observância ao princípio da não autoincriminação, o investigado não é obrigado a participar ativamente da encenação.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q4 - VUNESP / GM - Inquérito Policial / Prazos de Conclusão do IP
  {
    idSlug: "procpen-004",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Nos termos expressos do Código de Processo Penal (art. 10, caput), o inquérito policial deverá terminar no prazo de:",
    explicacao: "GABARITO: B. Art. 10, caput, do CPP: 'O inquérito deverá terminar no prazo de 10 dias, se o indiciado tiver sido preso em flagrante, ou estiver preso preventivamente, contado o prazo, nesta hipótese, a partir do dia em que se executar a ordem de prisão, ou no prazo de 30 dias, quando estiver solto, mediante fiança ou sem ela'.",
    alternativas: [
      { letra: "A", texto: "5 dias, se o indiciado estiver preso, e 15 dias, se estiver solto.", correta: false },
      { letra: "B", texto: "10 dias, se o indiciado estiver preso preventivamente ou em flagrante, e 30 dias, se estiver solto.", correta: true },
      { letra: "C", texto: "15 dias, improrrogáveis, independentemente de o indiciado estar preso ou solto.", correta: false },
      { letra: "D", texto: "30 dias, se o indiciado estiver preso, e 90 dias, se estiver solto.", correta: false },
      { letra: "E", texto: "20 dias para réu preso e 60 dias para réu solto.", correta: false }
    ]
  },
  // Q5 - IBFC / CBM - Inquérito Policial / Súmula Vinculante 14
  {
    idSlug: "procpen-005",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Acerca do direito de acesso aos autos de inquérito policial e do sigilo das investigações, assinale a alternativa que está em perfeita consonância com a jurisprudência do Supremo Tribunal Federal consolidada na Súmula Vinculante nº 14:",
    explicacao: "GABARITO: D. Súmula Vinculante nº 14: 'É direito do defensor, no interesse do constituinte, ter amplo acesso aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa'. Diligências em andamento podem ser mantidas em sigilo para não frustrar sua eficácia.",
    alternativas: [
      { letra: "A", texto: "O advogado tem direito irrestrito de acesso prévio inclusive a medidas cautelares em curso de execução, como interceptações telefônicas e mandados de busca não cumpridos.", correta: false },
      { letra: "B", texto: "A autoridade policial pode negar acesso total aos autos de inquérito ao defensor até o oferecimento formal da denúncia pelo Ministério Público.", correta: false },
      { letra: "C", texto: "O defensor só poderá consultar os autos se for admitido previamente como assistente de acusação pelo juiz corregedor.", correta: false },
      { letra: "D", texto: "É direito do defensor ter amplo acesso aos elementos de prova que, já documentados no procedimento investigatório, digam respeito ao exercício do direito de defesa.", correta: true },
      { letra: "E", texto: "O sigilo do inquérito impede que o advogado obtenha cópias reprográficas dos depoimentos de testemunhas já colhidos e encartados.", correta: false }
    ]
  },
  // Q6 - CEBRASPE / PM - Ação Penal / Ação Pública Condicionada e Decadência
  {
    idSlug: "procpen-006",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na ação penal pública condicionada à representação, a vítima dispõe do prazo decadencial de seis meses para exercer o direito de representação, contado do dia em que veio a saber quem é o autor do crime, sendo a representação irretratável depois de oferecida a denúncia.",
    explicacao: "GABARITO: CERTO. Arts. 25 e 38 do CPP. A representação será irretratável depois de oferecida a denúncia (art. 25 do CPP). O direito de representação decai se não exercido dentro do prazo de 6 meses a contar do conhecimento da autoria delitiva (art. 38 do CPP).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q7 - FGV / PM - Ação Penal / Subsidiária da Pública
  {
    idSlug: "procpen-007",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em matéria de ação penal privada subsidiária da pública, prevista no art. 5º, LIX, da Constituição Federal e no art. 29 do Código de Processo Penal, é correto afirmar que:",
    explicacao: "GABARITO: B. A ação penal privada subsidiária da pública só tem cabimento na hipótese de inércia do Ministério Público (quando esgotado o prazo legal sem oferecimento de denúncia, arquivamento ou requisição de diligências). Se o MP promoveu o arquivamento fundamentado ou requisitou diligências tempestivamente, não há inércia, sendo incabível a queixa subsidiária.",
    alternativas: [
      { letra: "A", texto: "cabe a queixa subsidiária caso o Ministério Público requeira expressamente o arquivamento do inquérito policial fundamentado na atipicidade do fato.", correta: false },
      { letra: "B", texto: "seu ajuizamento pressupõe a inércia do Ministério Público, que não ofereceu a denúncia nem praticou atos persecutórios tempestivamente dentro do prazo legal.", correta: true },
      { letra: "C", texto: "o Ministério Público, após proposta a ação penal subsidiária, fica impedido de aditar a queixa ou intervir no processo.", correta: false },
      { letra: "D", texto: "o prazo para oferecimento da queixa subsidiária é de dois anos contados da data da consumação do crime.", correta: false },
      { letra: "E", texto: "o querelante assume a titularidade exclusiva e intransferível da ação penal, não podendo o Ministério Público retomar a ação em caso de negligência.", correta: false }
    ]
  },
  // Q8 - CEBRASPE / PRF - Ação Penal / Princípio da Indivisibilidade
  {
    idSlug: "procpen-008",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com o princípio da indivisibilidade aplicável à ação penal privada exclusiva, a queixa-crime contra qualquer dos autores do crime obrigará ao processo de todos, não podendo a vítima escolher processar apenas um dos corréus conhecidos.",
    explicacao: "GABARITO: CERTO. Art. 48 do CPP: 'A queixa contra qualquer dos autores do crime obrigará ao processo de todos, e o Ministério Público velará pela sua indivisibilidade'. A renúncia ao direito de queixa em relação a um dos autores se estenderá a todos (art. 49 do CPP).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q9 - VUNESP / GM - Ação Penal / Renúncia e Perdão
  {
    idSlug: "procpen-009",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito dos institutos da renúncia e do perdão do ofendido na ação penal exclusivamente privada, assinale a alternativa correta:",
    explicacao: "GABARITO: A. A renúncia é ato unilateral praticado antes da propositura da ação penal privada. O perdão do ofendido ocorre após a instauração da ação penal e depende de aceitação do querelado (ato bilateral) para produzir seus efeitos extintivos de punibilidade (art. 51 do CPP e art. 107, V, do CP).",
    alternativas: [
      { letra: "A", texto: "A renúncia ocorre antes de iniciada a ação penal e prescinde de aceitação; já o perdão ocorre no curso do processo e depende de aceitação do querelado para produzir efeitos.", correta: true },
      { letra: "B", texto: "Tanto a renúncia quanto o perdão dependem de homologação ministerial prévia e não podem ser concedidos tacitamente.", correta: false },
      { letra: "C", texto: "O perdão concedido a um dos corréus não aproveita aos demais em nenhuma hipótese.", correta: false },
      { letra: "D", texto: "A renúncia ao direito de queixa manifestada expressamente em relação a um dos autores não impede o prosseguimento contra os demais.", correta: false },
      { letra: "E", texto: "O perdão pode ser concedido mesmo após o trânsito em julgado da sentença penal condenatória.", correta: false }
    ]
  },
  // Q10 - IBFC / CBM - Inquérito Policial / Valor Probatório e Art. 155 CPP
  {
    idSlug: "procpen-010",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "O art. 155 do Código de Processo Penal dispõe sobre a formação do convencimento do juiz e a utilização dos elementos informativos colhidos na fase preliminar. Sobre o tema, é correto afirmar que:",
    explicacao: "GABARITO: E. Conforme a literalidade do art. 155, caput, do CPP: 'O juiz formará sua convicção pela livre apreciação da prova produzida em contraditório judicial, não podendo fundamentar sua decisão exclusivamente nos elementos informativos colhidos na investigação, ressalvadas as provas cautelares, não repetíveis e antecipadas'.",
    alternativas: [
      { letra: "A", texto: "o magistrado pode fundamentar a condenação exclusivamente nos depoimentos prestados por testemunhas na fase de inquérito policial.", correta: false },
      { letra: "B", texto: "as provas produzidas no inquérito policial possuem valor absoluto e dispensam ratificação em juízo.", correta: false },
      { letra: "C", texto: "os elementos informativos da investigação têm o mesmo peso probatório das provas colhidas sob o contraditório judicial.", correta: false },
      { letra: "D", texto: "é vedada a apreciação de quaisquer elementos do inquérito policial na fundamentação judicial, inclusive de provas cautelares e periciais irrepetíveis.", correta: false },
      { letra: "E", texto: "o juiz não pode fundamentar sua decisão condenatória exclusivamente nos elementos informativos colhidos na investigação, ressalvadas as provas cautelares, não repetíveis e antecipadas.", correta: true }
    ]
  },
  // Q11 - CEBRASPE / PRF - Prisões Cautelares / Espécies de Flagrante
  {
    idSlug: "procpen-011",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Considera-se em flagrante impróprio (ou quase-flagrante) a pessoa que é perseguida, logo após cometer o crime, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser ela a autora da infração penal.",
    explicacao: "GABARITO: CERTO. Art. 302, III, do CPP: 'Considera-se em flagrante delito quem: III - é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração'. Essa hipótese é classificada doutrinariamente como flagrante impróprio ou quase-flagrante.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q12 - FGV / PM - Prisões Cautelares / Flagrante Preparado vs Esperado
  {
    idSlug: "procpen-012",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Policiais militares receberam denúncia anônima indicando que determinado indivíduo comercializaria armas de fogo ilegais em uma praça pública. Os policiais deslocaram-se previamente ao local, permaneceram à espreita sem induzir ou instigar qualquer conduta e efetuaram a prisão no exato momento em que o suspeito exibia um revólver clandestino a um comprador. Diante dessa narrativa, a atuação policial configurou hipótese de:",
    explicacao: "GABARITO: A. Configura flagrante esperado a situação em que os policiais, tendo notícia prévia do crime, apenas aguardam a sua execução para efetuar a prisão, sem provocar ou induzir o agente a praticar a conduta. É modalidade plenamente válida, diferente do flagrante preparado (Súmula 145 do STF), em que há provocação que torna a consumação impossível.",
    alternativas: [
      { letra: "A", texto: "flagrante esperado, modalidade plenamente válida e legal.", correta: true },
      { letra: "B", texto: "flagrante preparado, que gera nulidade absoluta por configurar crime impossível.", correta: false },
      { letra: "C", texto: "flagrante forjado, passível de anulação e responsabilização penal dos agentes por abuso de autoridade.", correta: false },
      { letra: "D", texto: "ação controlada irregular, dada a ausência de prévia autorização judicial.", correta: false },
      { letra: "E", texto: "flagrante diferido obrigatório, que exigia comunicação formal prévia ao Ministério Público.", correta: false }
    ]
  },
  // Q13 - CEBRASPE / GM - Prisões Cautelares / Flagrante Obrigatório vs Facultativo
  {
    idSlug: "procpen-013",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Nos termos do art. 301 do Código de Processo Penal, qualquer do povo poderá e as autoridades policiais e seus agentes deverão prender quem quer que seja encontrado em flagrante delito, configurando o flagrante facultativo para os particulares e obrigatório (compulsório) para os agentes de segurança pública.",
    explicacao: "GABARITO: CERTO. Art. 301 do CPP: 'Qualquer do povo poderá e as autoridades policiais e seus agentes deverão prender quem quer que seja encontrado em flagrante delito'. Aos particulares é uma faculdade (flagrante facultativo); aos agentes policiais é um dever legal (flagrante compulsório/obrigatório).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q14 - VUNESP / PM - Prisões Cautelares / Audiência de Custódia
  {
    idSlug: "procpen-014",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em relação à audiência de custódia, disciplinada pelo art. 310 do Código de Processo Penal e pela Resolução nº 213/2015 do Conselho Nacional de Justiça (CNJ), assinale a alternativa correta:",
    explicacao: "GABARITO: C. Art. 310, caput, do CPP e normas correlatas: no prazo máximo de até 24 horas após a realização da prisão, o preso deve ser apresentado ao juiz competente para audiência de custódia, na presença do Ministério Público e de seu defensor. Na audiência, o juiz avalia a legalidade da prisão e a ocorrência de eventuais abusos/maus-tratos, sendo vedadas perguntas sobre o mérito fático da acusação.",
    alternativas: [
      { letra: "A", texto: "A audiência de custódia deve ser realizada no prazo de 72 horas após a prisão, não sendo obrigatória a presença de advogado ou defensor público.", correta: false },
      { letra: "B", texto: "Na audiência de custódia, o magistrado deve interrogar pormenorizadamente o custodiado acerca do mérito da imputação penal e das provas colhidas.", correta: false },
      { letra: "C", texto: "O preso em flagrante deve ser apresentado ao juiz competente em até 24 horas após a prisão, assegurada a presença de seu defensor ou da Defensoria Pública e do membro do Ministério Público.", correta: true },
      { letra: "D", texto: "A ausência de realização da audiência de custódia no prazo gera automaticamente a absolvição sumária do autuado.", correta: false },
      { letra: "E", texto: "A audiência de custódia aplica-se exclusivamente às prisões em flagrante, sendo incabível em prisões preventivas ou temporárias.", correta: false }
    ]
  },
  // Q15 - CEBRASPE / PRF - Prisões Cautelares / Vedação de Prisão de Ofício
  {
    idSlug: "procpen-015",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Com as alterações promovidas pelo Pacote Anticrime (Lei nº 13.964/2019) e a jurisprudência consolidada do STF e do STJ, é absolutamente vedada a decretação de prisão preventiva de ofício pelo juiz, tanto na fase de investigação policial quanto no curso da ação penal, sendo imprescindível a prévia provocação pelo Ministério Público ou representação da autoridade policial.",
    explicacao: "GABARITO: CERTO. O art. 311 do CPP, com redação dada pela Lei nº 13.964/2019, extirpou a possibilidade de decretação de prisão preventiva 'de ofício' pelo magistrado em qualquer fase (investigativa ou processual), consagrando o princípio acusatório no processo penal brasileiro.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q16 - IBFC / CBM - Prisões Cautelares / Requisitos da Prisão Preventiva
  {
    idSlug: "procpen-016",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos dos artigos 312 e 313 do Código de Processo Penal, a prisão preventiva poderá ser decretada:",
    explicacao: "GABARITO: B. Art. 312 e 313, I, do CPP. A prisão preventiva pode ser decretada para garantia da ordem pública, da ordem econômica, por conveniência da instrução criminal ou para assegurar a aplicação da lei penal, quando houver prova da existência do crime e indício suficiente de autoria e perigo gerado pelo estado de liberdade, admitida expressamente nos crimes dolosos punidos com pena privativa de liberdade máxima superior a 4 anos.",
    alternativas: [
      { letra: "A", texto: "em qualquer infração penal culposa, independentemente da pena máxima cominada, desde que comprovada a repercussão na imprensa.", correta: false },
      { letra: "B", texto: "como garantia da ordem pública, da instrução criminal ou da aplicação da lei penal, nos crimes dolosos punidos com pena privativa de liberdade máxima superior a 4 anos.", correta: true },
      { letra: "C", texto: "obrigatoriamente em todas as hipóteses de reincidência por contravenções penais de trânsito.", correta: false },
      { letra: "D", texto: "com base exclusivamente na gravidade abstrata do delito e no clamor social imediato.", correta: false },
      { letra: "E", texto: "com a finalidade de antecipação do cumprimento de pena privativa de liberdade.", correta: false }
    ]
  },
  // Q17 - CEBRASPE / PM - Prisões Cautelares / Prisão Temporária
  {
    idSlug: "procpen-017",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A prisão temporária (Lei nº 7.960/1989) tem cabimento restrito à fase de inquérito policial, sendo vedada a sua decretação de ofício pelo juiz e exigindo-se, segundo entendimento fixado pelo STF (ADIs 3360 e 4109), a demonstração cumulativa de sua imprescindibilidade para as investigações e a existência de fundadas razões de autoria em um dos crimes taxativamente previstos no rol legal.",
    explicacao: "GABARITO: CERTO. A prisão temporária só tem lugar na fase pré-processual (inquérito policial), nunca na fase de ação penal. O STF, nas ADIs 3360 e 4109, assentou que a prisão temporária exige requerimento ministerial ou representação policial (vedado o ofício), imprescindibilidade concreta e subsunção estrita ao rol do art. 1º, III, da Lei nº 7.960/1989 c/c crimes hediondos.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q18 - FGV / PRF - Prisões Cautelares / Medidas Cautelares Diversas da Prisão
  {
    idSlug: "procpen-018",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O art. 319 do Código de Processo Penal estabelece um rol de medidas cautelares diversas da prisão, inspiradas no princípio da proporcionalidade e da subsidiariedade da prisão preventiva. NÃO constitui medida cautelar prevista no referido artigo:",
    explicacao: "GABARITO: D. O art. 319 do CPP prevê: comparecimento periódico em juízo (I), proibição de acesso a determinados lugares (II), proibição de contato com pessoa determinada (III), proibição de ausentar-se da comarca (IV), recolhimento domiciliar noturno (V), suspensão do exercício de função pública (VI), internação provisória (VII), fiança (VIII) e monitoração eletrônica (IX). A perda definitiva de cargo público é efeito da condenação (art. 92 do CP) ou sanção administrativa, e não medida cautelar diversa da prisão do art. 319.",
    alternativas: [
      { letra: "A", texto: "Proibição de ausentar-se da comarca quando a permanência seja conveniente para a instrução criminal.", correta: false },
      { letra: "B", texto: "Recolhimento domiciliar no período noturno e nos dias de folga quando o investigado ou acusado tenha residência e trabalho fixos.", correta: false },
      { letra: "C", texto: "Monitoração eletrônica.", correta: false },
      { letra: "D", texto: "Cassação definitiva e irreversível do cargo público com demissão sumária sem processo.", correta: true },
      { letra: "E", texto: "Suspensão do exercício de função pública quando houver justo receio de sua utilização para a prática de infrações penais.", correta: false }
    ]
  },
  // Q19 - VUNESP / GM - Prisões Cautelares / Formalidades do APF e Nota de Culpa
  {
    idSlug: "procpen-019",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Após a lavratura do auto de prisão em flagrante (APF), a autoridade policial deve expedir a nota de culpa e entregá-la ao preso, mediante recibo, no prazo máximo de:",
    explicacao: "GABARITO: A. Art. 306, § 2º, do CPP: 'No mesmo prazo [24 horas após a realização da prisão], será entregue ao preso, mediante recibo, a nota de culpa, assinada pela autoridade, com o motivo da prisão, o nome do condutor e os das testemunhas'.",
    alternativas: [
      { letra: "A", texto: "24 horas.", correta: true },
      { letra: "B", texto: "48 horas.", correta: false },
      { letra: "C", texto: "10 dias.", correta: false },
      { letra: "D", texto: "5 dias.", correta: false },
      { letra: "E", texto: "12 horas.", correta: false }
    ]
  },
  // Q20 - CEBRASPE / PM - Prisões Cautelares / Concessão de Fiança pelo Delegado
  {
    idSlug: "procpen-020",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A autoridade policial (delegado de polícia) somente poderá conceder fiança nos casos de infração penal cuja pena privativa de liberdade máxima em abstrato não seja superior a quatro anos; nos demais casos, a fiança somente poderá ser arbitrada e concedida pelo juiz.",
    explicacao: "GABARITO: CERTO. Art. 322, caput, do CPP: 'A autoridade policial somente poderá conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a 4 (quatro) anos'. Parágrafo único: 'Nos demais casos, a fiança será requerida ao juiz, que decidirá em 48 (quarenta e oito) horas'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q21 - FGV / PM - Provas / Provas Ilícitas e Teoria dos Frutos da Árvore Envenenada
  {
    idSlug: "procpen-021",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação à disciplina das provas ilícitas no processo penal brasileiro (art. 157 do CPP), assinale a afirmativa correta:",
    explicacao: "GABARITO: B. Art. 157, § 1º, do CPP: 'São também inadmissíveis as provas derivadas das ilícitas, salvo quando não evidenciado o nexo de causalidade entre umas e outras, ou quando as derivadas puderem ser obtidas por uma fonte independente daquela'. O § 2º define fonte independente como aquela que por si só, seguindo os trâmites típicos, seria capaz de conduzir ao fato.",
    alternativas: [
      { letra: "A", texto: "As provas derivadas das ilícitas são sempre e incondicionalmente admitidas no processo penal brasileiro caso beneficiem a acusação.", correta: false },
      { letra: "B", texto: "São inadmissíveis as provas derivadas das ilícitas, salvo quando não evidenciado o nexo de causalidade ou quando as provas derivadas puderem ser obtidas por uma fonte independente.", correta: true },
      { letra: "C", texto: "A prova declarada ilícita pelo magistrado deve permanecer encartada nos autos principais para livre apreciação do tribunal revisor em grau recursal.", correta: false },
      { letra: "D", texto: "A teoria da descoberta inevitável não foi acolhida pelo ordenamento processual penal pátrio.", correta: false },
      { letra: "E", texto: "A confissão obtida mediante tortura física pode ser aproveitada se corroborada por outros elementos colhidos na fase inquisitorial.", correta: false }
    ]
  },
  // Q22 - CEBRASPE / PRF - Busca e Apreensão / Busca Pessoal e Fundada Suspeita
  {
    idSlug: "procpen-022",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Segundo a jurisprudência recente dos tribunais superiores (STJ e STF), a realização de busca pessoal ou veicular sem mandado judicial (art. 240, § 2º, do CPP) exige a existência de fundada suspeita lastreada em elementos concretos e objetivos de que o indivíduo esteja na posse de arma proibida ou objetos ilícitos, sendo ilícita a busca motivada unicamente por intuição policial genérica, nervosismo aparente ou filtragem racial.",
    explicacao: "GABARITO: CERTO. O STJ (RHC 158.580/BA) e o STF pacificaram o entendimento de que a busca pessoal sem mandado requer justa causa consubstanciada em elementos objetivos e verificáveis. Mera atitude suspeita subjetiva, nervosismo genérico, denúncia anônima isolada ou perfilamento racial tornam a diligência e as provas dela derivadas ilícitas.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q23 - VUNESP / PM - Busca e Apreensão / Inviolabilidade de Domicílio e RE 603.616
  {
    idSlug: "procpen-023",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação ao ingresso de policiais em domicílio sem mandado judicial sob a alegação de estado de flagrante delito, o Supremo Tribunal Federal fixou tese de repercussão geral (Tema 280 / RE 603.616) no sentido de que:",
    explicacao: "GABARITO: E. Tese do STF no Tema 280 (RE 603.616/RO): 'A entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em período noturno, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade dos atos praticados'.",
    alternativas: [
      { letra: "A", texto: "o ingresso noturno forçado em residência é absolutamente vedado na Constituição Federal, mesmo havendo situação evidente de flagrante delito.", correta: false },
      { letra: "B", texto: "a constatação superveniente de crime permanente no interior do imóvel valida retroativamente a invasão domiciliar desprovida de prévia justificativa concreta.", correta: false },
      { letra: "C", texto: "a autoridade policial pode dispensar mandado com base em denúncia anônima desprovida de qualquer diligência prévia confirmatória.", correta: false },
      { letra: "D", texto: "qualquer suspeita intuitiva autoriza a entrada policial sem mandado durante o período diurno em residência particular.", correta: false },
      { letra: "E", texto: "a entrada forçada em domicílio sem mandado é lícita, inclusive à noite, quando amparada em fundadas razões, justificadas a posteriori, que indiquem a ocorrência de situação de flagrante delito.", correta: true }
    ]
  },
  // Q24 - CEBRASPE / GM - Provas / Cadeia de Custódia
  {
    idSlug: "procpen-024",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Considera-se cadeia de custódia o conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio coletado em locais ou em vítimas de crimes, para rastrear sua posse e manuseio a partir de seu reconhecimento até o descarte final, iniciando-se preferencialmente com a preservação do local do crime ou com procedimentos policiais ou periciais nos quais seja detectado um vestígio.",
    explicacao: "GABARITO: CERTO. Art. 158-A, caput e § 1º, do CPP (incluído pela Lei nº 13.964/2019). O dispositivo conceitua a cadeia de custódia e estabelece as suas etapas operacionais, assegurando a higidez e a autenticidade dos vestígios materiais no processo penal.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q25 - IBFC / CBM - Provas / Reconhecimento de Pessoas (Art. 226 CPP)
  {
    idSlug: "procpen-025",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Segundo a orientação jurisprudencial consolidada pelo Superior Tribunal de Justiça (HC 598.886/SP e RHC 206.846/STF) acerca do reconhecimento formal de pessoas previsto no art. 226 do Código de Processo Penal:",
    explicacao: "GABARITO: A. A nova jurisprudência do STJ e do STF estabeleceu que as formalidades do art. 226 do CPP são garantias essenciais e constituem procedimento obrigatório, e não mera recomendação. O reconhecimento fotográfico ou presencial realizado em desconformidade com o art. 226 é inválido e não pode, por si só, sustentar condenação ou decretação de prisão cautelar.",
    alternativas: [
      { letra: "A", texto: "o procedimento previsto no art. 226 do CPP constitui formalidade cogente e garantia indispensável, cuja inobservância gera a invalidade da prova de reconhecimento.", correta: true },
      { letra: "B", texto: "o art. 226 do CPP consubstancia mera recomendação legal, cuja inobservância não enseja qualquer vício ou nulidade processual.", correta: false },
      { letra: "C", texto: "o reconhecimento meramente fotográfico em sede policial, sem colocação do suspeito ao lado de outros com características semelhantes, é prova plena e autossuficiente para a condenação.", correta: false },
      { letra: "D", texto: "é dispensável a descrição prévia da pessoa a ser reconhecida pela vítima antes do ato de identificação presencial.", correta: false },
      { letra: "E", texto: "a confirmação do reconhecimento em audiência judicial pelo 'show up' (apresentação isolada do réu) convalida automaticamente vícios ocorridos no inquérito policial.", correta: false }
    ]
  },
  // Q26 - FGV / PRF - Jurisdição e Competência / Lugar da Infração
  {
    idSlug: "procpen-026",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A fixação da competência territorial ('ratione loci') no Código de Processo Penal brasileiro é disciplinada pelo art. 70. Como regra geral para os crimes consumados e tentados, a competência será determinada, respectivamente, pelo lugar em que:",
    explicacao: "GABARITO: C. Art. 70, caput, do CPP: 'A competência será, de regra, determinada pelo lugar em que se consumar a infração, ou, no caso de tentativa, pelo lugar em que for praticado o último ato de execução'. O processo penal adota, como regra geral de competência territorial, a teoria do resultado (consumação) para consumados e teoria da atividade para a tentativa.",
    alternativas: [
      { letra: "A", texto: "se iniciou a execução do delito, para os consumados; e pelo domicílio da vítima, para os tentados.", correta: false },
      { letra: "B", texto: "residir o acusado, para os crimes consumados; e pelo local de apreensão do instrumento do crime, para os tentados.", correta: false },
      { letra: "C", texto: "se consumar a infração, para os crimes consumados; e pelo lugar em que for praticado o último ato de execução, no caso de tentativa.", correta: true },
      { letra: "D", texto: "se der a prisão em flagrante do réu, tanto para crimes consumados quanto para crimes tentados.", correta: false },
      { letra: "E", texto: "for lavrado o auto de inquérito policial pela autoridade com circunscrição originária.", correta: false }
    ]
  },
  // Q27 - CEBRASPE / PM - Jurisdição e Competência / Conexão e Tribunal do Júri
  {
    idSlug: "procpen-027",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No concurso entre a competência do Tribunal do Júri e a de outro órgão da jurisdição comum, prevalecerá a competência do Tribunal do Júri, atraindo o julgamento dos crimes conexos que não sejam dolosos contra a vida.",
    explicacao: "GABARITO: CERTO. Art. 78, I, do CPP: 'Na determinação da competência por conexão ou continência, serão observadas as seguintes regras: I - no concurso entre a competência do júri e a de outro órgão da jurisdição comum, prevalecerá a competência do júri'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q28 - VUNESP / GM - Jurisdição e Competência / Competência da Justiça Federal
  {
    idSlug: "procpen-028",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Compete à Justiça Federal processar e julgar as infrações penais praticadas em detrimento de bens, serviços ou interesses da União ou de suas entidades autárquicas ou empresas públicas (art. 109, IV, da Constituição Federal). NÃO se inclui na competência penal da Justiça Federal o crime praticado em detrimento de:",
    explicacao: "GABARITO: B. A competência da Justiça Federal (art. 109, IV, CF) alcança a União, autarquias federais (ex.: INSS, IBAMA) e empresas públicas federais (ex.: Caixa Econômica Federal, Correios). As sociedades de economia mista federais (ex.: Banco do Brasil, Petrobras) NÃO atraem a competência da Justiça Federal para seus crimes patrimoniais (Súmula 42 do STJ: 'Compete à Justiça Estadual processar e julgar os crimes praticados contra sociedade de economia mista').",
    alternativas: [
      { letra: "A", texto: "Instituto Nacional do Seguro Social (INSS), autarquia federal.", correta: false },
      { letra: "B", texto: "Sociedade de Economia Mista, como o Banco do Brasil S/A.", correta: true },
      { letra: "C", texto: "Empresa Brasileira de Correios e Telégrafos (ECT), empresa pública federal.", correta: false },
      { letra: "D", texto: "Caixa Econômica Federal (CEF), empresa pública federal.", correta: false },
      { letra: "E", texto: "Polícia Rodoviária Federal, órgão integrante da administração direta da União.", correta: false }
    ]
  },
  // Q29 - CEBRASPE / PRF - Nulidades / Princípio do Prejuízo (Pas de nullité sans grief)
  {
    idSlug: "procpen-029",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Em matéria de nulidades no processo penal, vigora o princípio do prejuízo ('pas de nullité sans grief'), positivado no art. 563 do Código de Processo Penal, segundo o qual nenhum ato processual será declarado nulo se da nulidade não houver resultado prejuízo para a acusação ou para a defesa.",
    explicacao: "GABARITO: CERTO. Art. 563 do CPP: 'Nenhum ato será declarado nulo, se da nulidade não resultar prejuízo para a acusação ou para a defesa'. Este dispositivo consagra o princípio fundamental do prejuízo ('pas de nullité sans grief'), aplicável a nulidades relativas e, segundo a jurisprudência dominante dos tribunais superiores, também como baliza para aferição de nulidades absolutas.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q30 - IBFC / CBM - Nulidades / Absoluta vs Relativa
  {
    idSlug: "procpen-030",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Acerca da distinção doutrinária e jurisprudencial entre nulidade absoluta e nulidade relativa no processo penal, assinale a afirmativa correta:",
    explicacao: "GABARITO: A. A nulidade absoluta decorre de violação a preceito de ordem pública constitucional e pode ser arguida a qualquer tempo e conhecida de ofício pelo juiz, não se sujeitando à preclusão temporal simples durante o processo. Já a nulidade relativa tutela interesse primordial das partes e submete-se aos prazos preclusivos previstos no art. 571 do CPP.",
    alternativas: [
      { letra: "A", texto: "A nulidade absoluta tutela norma de interesse e garantia pública constitucional, podendo ser arguida pelas partes ou conhecida de ofício pelo magistrado a qualquer tempo antes do trânsito em julgado.", correta: true },
      { letra: "B", texto: "A nulidade relativa não se convalida e dispensa a demonstração de qualquer prejuízo concreto pela parte suscitante.", correta: false },
      { letra: "C", texto: "O vício decorrente de nulidade absoluta é sanado automaticamente pela preclusão caso a parte não se manifeste na primeira oportunidade.", correta: false },
      { letra: "D", texto: "A incompetência absoluta do juízo 'ratione materiae' é classificada como mera irregularidade processual irrelevante.", correta: false },
      { letra: "E", texto: "As nulidades relativas devem ser arguidas exclusivamente pelo Ministério Público, sendo vedada a arguição pela defesa técnica.", correta: false }
    ]
  }
];
