import {
  DISCIPLINAS,
  ASSUNTOS,
  criarQuestaoCE,
  criarQuestaoME,
  writeModuleFile,
} from "./helpers.mjs";

// =========================================================================
// MÓDULO 01: DIREITO PENAL GERAL (25 QUESTÕES CERTO/ERRADO)
// =========================================================================
const m01_questoes = [
  // 1
  criarQuestaoCE({
    slug: "pen-ger-001-retroatividade-lex-mitior",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_APLICACAO_LEI,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Federal",
    cargoNome: "Agente de Polícia Federal",
    ano: 2026,
    dificuldade: "facil",
    enunciado:
      "Em matéria de aplicação da lei penal no tempo, a norma penal superveniente que de qualquer modo favoreça o agente aplica-se retroativamente aos fatos anteriores, ainda que já decididos por sentença condenatória transitada em julgado, cabendo a sua aplicação ao juízo da execução penal.",
    explicacao:
      "Conforme o Art. 2º, parágrafo único, do Código Penal e o Art. 5º, XL, da CF/88, a lei posterior que favorece o agente retroage sempre (lex mitior). Já transitada em julgado a sentença, a competência para aplicar a lei mais benigna é do Juízo da Execução Penal (Súmula 611 do STF).",
    gabaritoCerto: true,
    conceitoPrincipal: "Princípio da retroatividade da lei penal mais benigna",
    habilidadeCobrada: "Identificar a aplicação da lex mitior e a competência do juízo da execução",
    teseOuRegra: "Art. 2º, parágrafo único, do CP e Súmula 611 do STF",
    nivelCognitivo: "compreender",
  }),

  // 2
  criarQuestaoCE({
    slug: "pen-ger-002-crime-permanente-sumula711",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_APLICACAO_LEI,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Rodoviária Federal",
    cargoNome: "Policial Rodoviário Federal",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "Durante a consumação de um crime de extorsão mediante sequestro (crime permanente), entrou em vigor lei penal que exasperou a pena privativa de liberdade cominada abstratamente ao delito. Nessa hipótese, segundo a jurisprudência sumulada do STF, a novel legislação mais gravosa é inaplicável ao caso concreto, em respeito à irretroatividade da lei penal prejudicial.",
    explicacao:
      "Assertiva ERRADA. De acordo com a Súmula 711 do STF: 'A lei penal mais grave aplica-se ao crime continuado ou ao crime permanente, se a sua vigência é anterior à cessação da continuidade ou da permanência'. Como o crime continuava se consumando sob a vigência da nova lei, esta incide legitimamente.",
    gabaritoCerto: false,
    conceitoPrincipal: "Aplicação da lei penal no tempo em crimes permanentes e continuados",
    habilidadeCobrada: "Aplicar a Súmula 711 do STF a caso de crime permanente",
    teseOuRegra: "Súmula 711/STF e teoria da atividade",
    nivelCognitivo: "aplicar",
  }),

  // 3
  criarQuestaoCE({
    slug: "pen-ger-003-lugar-crime-ubiquidade",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_APLICACAO_LEI,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Civil",
    cargoNome: "Delegado de Polícia Civil",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "Considera-se praticado o crime, de acordo com o Código Penal brasileiro, no lugar em que ocorreu a ação ou omissão, no todo ou em parte, bem como onde se produziu ou deveria produzir-se o resultado, adotando-se, quanto ao lugar do crime, a teoria da ubiqüidade (mista).",
    explicacao:
      "Conforme o Art. 6º do CP: 'Considera-se praticado o crime no lugar em que ocorreu a ação ou omissão, no todo ou em parte, bem como onde se produziu ou deveria produzir-se o resultado'. Trata-se da teoria da ubiqüidade ou mista para o lugar do crime, ao passo que para o tempo do crime adotou-se a teoria da atividade (Art. 4º do CP).",
    gabaritoCerto: true,
    conceitoPrincipal: "Lugar do crime no Código Penal",
    habilidadeCobrada: "Distinguir a teoria da ubiqüidade (lugar) da teoria da atividade (tempo)",
    teseOuRegra: "Art. 6º do Código Penal",
    nivelCognitivo: "compreender",
  }),

  // 4
  criarQuestaoCE({
    slug: "pen-ger-004-extraterritorialidade-incondicionada",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_APLICACAO_LEI,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Federal",
    cargoNome: "Delegado de Polícia Federal",
    ano: 2026,
    dificuldade: "dificil",
    enunciado:
      "Ficam sujeitos à lei brasileira, embora cometidos no estrangeiro, os crimes contra a vida ou a liberdade do Presidente da República e os crimes contra a administração pública praticados por quem está a seu serviço, hipóteses de extraterritorialidade incondicionada em que o agente é punido segundo a lei brasileira ainda que absolvido ou condenado no estrangeiro.",
    explicacao:
      "Assertiva CORRETA. O Art. 7º, I, 'a' e 'c', do CP estabelece a extraterritorialidade incondicionada (princípio da defesa/real e princípio da personalidade ativa institucional). Nos termos do Art. 7º, § 1º, do CP, nesses casos o agente é punido segundo a lei brasileira, ainda que absolvido ou condenado no exterior.",
    gabaritoCerto: true,
    conceitoPrincipal: "Extraterritorialidade incondicionada da lei penal brasileira",
    habilidadeCobrada: "Analisar as hipóteses do Art. 7º, I, do CP e sua disciplina jurídica",
    teseOuRegra: "Art. 7º, I, 'a' e 'c' c/c § 1º do Código Penal",
    nivelCognitivo: "analisar",
  }),

  // 5
  criarQuestaoCE({
    slug: "pen-ger-005-insignificancia-requisitos-stf",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Civil",
    cargoNome: "Investigador de Polícia",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "A aplicação do princípio da insignificância como causa excludente da tipicidade formal exige, segundo jurisprudência pacífica do STF, a presença cumulativa de quatro vetores: mínima ofensividade da conduta, nenhuma periculosidade social da ação, reduzidíssimo grau de reprovabilidade do comportamento e inexpressividade da lesão jurídica provocada.",
    explicacao:
      "Assertiva ERRADA. O princípio da insignificância afasta a tipicidade MATERIAL (não a tipicidade formal). Os 4 vetores cumulativos fixados pelo STF (HC 84.412/SP) estão corretos, mas a exclusão opera sobre a tipicidade material por ausência de lesão relevante ao bem jurídico tutelado.",
    gabaritoCerto: false,
    conceitoPrincipal: "Princípio da insignificância e tipicidade material",
    habilidadeCobrada: "Identificar a natureza da excludente operada pelo princípio da bagatela",
    teseOuRegra: "HC 84.412/STF e diferenciação entre tipicidade formal e material",
    nivelCognitivo: "analisar",
  }),

  // 6
  criarQuestaoCE({
    slug: "pen-ger-006-concausa-superveniente-absolutamente",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Civil",
    cargoNome: "Escrivão de Polícia Civil",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "Em uma investigação conduzida pela Polícia Civil, apurou-se que um indivíduo desferiu disparo de arma de fogo na perna da vítima, provocando lesão corporal leve. Socorrida e internada em hospital, a vítima veio a falecer três dias depois exclusivamente em decorrência do desabamento da ala médica em razão de forte temporal. Nessa situação, a causa superveniente relativamente independente exclui a imputação do resultado morte ao autor do disparo, respondendo ele apenas pelos atos anteriormente praticados.",
    explicacao:
      "Assertiva CORRETA. O Art. 13, § 1º, do Código Penal disciplina que a superveniência de causa relativamente independente exclui a imputação quando, por si só, produziu o resultado, imputando-se, contudo, os fatos anteriores a quem os praticou. O desabamento hospitalar constitui concausa superveniente que produziu por si só o evento letal (rompimento da imputação do resultado morte), subsistindo a responsabilidade do autor apenas pelos atos anteriores executados.",
    gabaritoCerto: true,
    conceitoPrincipal: "Nexo causal e concausas relativamente independentes supervenientes",
    habilidadeCobrada: "Aplicar a regra do Art. 13, § 1º, do CP a caso concreto policial",
    teseOuRegra: "Art. 13, § 1º, do Código Penal",
    nivelCognitivo: "analisar",
  }),

  // 7
  criarQuestaoCE({
    slug: "pen-ger-007-dolo-eventual-culpa-consciente",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Rodoviária Federal",
    cargoNome: "Policial Rodoviário Federal",
    ano: 2026,
    dificuldade: "dificil",
    enunciado:
      "Distingue-se o dolo eventual da culpa consciente pelo elemento volitivo: no dolo eventual, o agente antevê o resultado lesivo e assume o risco de produzi-lo (teoria do assentimento), demonstrando indiferença; na culpa consciente, o agente prevê o resultado, mas sinceramente confia em suas habilidades ou em fatores externos para evitá-lo.",
    explicacao:
      "Assertiva CORRETA. O Art. 18, I, do CP adotou a teoria do assentimento para o dolo eventual ('assumiu o risco de produzi-lo'). Na culpa consciente, há previsão do resultado, porém o agente rejeita a produção do evento danoso, acreditando convictamente que ele não ocorrerá.",
    gabaritoCerto: true,
    conceitoPrincipal: "Distinção entre dolo eventual e culpa consciente",
    habilidadeCobrada: "Diferenciar a assunção do risco (dolo eventual) da previsão com repulsa (culpa consciente)",
    teseOuRegra: "Art. 18, I e II, do Código Penal e Teoria do Assentimento",
    nivelCognitivo: "analisar",
  }),

  // 8
  criarQuestaoCE({
    slug: "pen-ger-008-desistencia-voluntaria-arrependimento-eficaz",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Militar",
    cargoNome: "Oficial da Polícia Militar",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "O agente que, voluntariamente, desiste de prosseguir na execução ou impede que o resultado se produza, responde apenas pelos atos já praticados, configurando-se hipótese legal de desistência voluntária ou de arrependimento eficaz ('ponte de ouro').",
    explicacao:
      "Assertiva CORRETA. Trata-se da redação exata do Art. 15 do Código Penal. Na desistência voluntária (tentativa inacabada), o agente cessa a execução; no arrependimento eficaz (tentativa acabada), o agente esgota os atos executórios, mas atua positivamente impedindo o resultado consumativo. Em ambos, afasta-se a tentativa e o agente responde apenas pelos atos já praticados.",
    gabaritoCerto: true,
    conceitoPrincipal: "Desistência voluntária e arrependimento eficaz",
    habilidadeCobrada: "Aplicar a regra do Art. 15 do CP e seus efeitos penais",
    teseOuRegra: "Art. 15 do Código Penal (Ponte de Ouro de von Liszt)",
    nivelCognitivo: "compreender",
  }),

  // 9
  criarQuestaoCE({
    slug: "pen-ger-009-arrependimento-posterior-requisitos",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Civil",
    cargoNome: "Investigador de Polícia",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "Nos crimes cometidos sem violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa, até a prolação da sentença condenatória de primeiro grau, por ato voluntário do autor, a pena será reduzida de um a dois terços.",
    explicacao:
      "Assertiva ERRADA. O limite temporal para o arrependimento posterior previsto no Art. 16 do CP é até o RECEBIMENTO DA DENÚNCIA OU DA QUEIXA (e não até a sentença condenatória). Requisitos: crime sem violência/grave ameaça, reparação integral/restituição voluntária e antes do recebimento da peça acusatória.",
    gabaritoCerto: false,
    conceitoPrincipal: "Arrependimento posterior e marco temporal",
    habilidadeCobrada: "Identificar o marco processual limite para concessão da causa de diminuição do Art. 16 do CP",
    teseOuRegra: "Art. 16 do Código Penal",
    nivelCognitivo: "aplicar",
  }),

  // 10
  criarQuestaoCE({
    slug: "pen-ger-010-crime-impossivel-sumula145",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Civil",
    cargoNome: "Delegado de Polícia Civil",
    ano: 2026,
    dificuldade: "dificil",
    enunciado:
      "Não se pune a tentativa quando, por ineficácia absoluta do meio ou por absoluta impropriedade do objeto, é impossível consumar-se o crime. De acordo com o STF (Súmula 145), não há crime quando a preparação do flagrante pela polícia torna impossível a sua consumação.",
    explicacao:
      "Assertiva CORRETA. O Art. 17 do CP adotou a teoria objetiva temperada para o crime impossível (tentativa inidônea). A Súmula 145 do STF estabelece que o flagrante preparado/provocado induz crime impossível por absoluta ineficácia do meio em atingir a consumação pretendida.",
    gabaritoCerto: true,
    conceitoPrincipal: "Crime impossível e flagrante preparado",
    habilidadeCobrada: "Correlacionar o Art. 17 do CP com a Súmula 145 do STF",
    teseOuRegra: "Art. 17 do CP e Súmula 145/STF",
    nivelCognitivo: "analisar",
  }),

  // 11
  criarQuestaoCE({
    slug: "pen-ger-011-legitima-defesa-agente-seguranca",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Militar",
    cargoNome: "Soldado da Polícia Militar",
    ano: 2026,
    dificuldade: "facil",
    enunciado:
      "Considera-se presente a legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.",
    explicacao:
      "Assertiva CORRETA. O Art. 25, parágrafo único, do Código Penal (incluído pela Lei 13.964/2019 - Pacote Anticrime) estabelece expressamente que 'considera-se também em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes'.",
    gabaritoCerto: true,
    conceitoPrincipal: "Legítima defesa funcional do agente de segurança pública",
    habilidadeCobrada: "Conhecer a inovação do Pacote Anticrime no Art. 25, parágrafo único, do CP",
    teseOuRegra: "Art. 25, parágrafo único, do Código Penal",
    nivelCognitivo: "recordar",
  }),

  // 12
  criarQuestaoCE({
    slug: "pen-ger-012-estado-necessidade-perigo-atual-iminente",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Corpo de Bombeiros Militar",
    cargoNome: "Oficial Bombeiro Militar",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "Ao contrário da legítima defesa, que admite expressamente a reação contra agressão injusta atual ou iminente, o estado de necessidade, segundo a literalidade do Código Penal brasileiro, exige que o perigo seja atual, não tendo a lei mencionado a figura do perigo iminente.",
    explicacao:
      "Assertiva CORRETA. O Art. 24 do CP exige expressamente perigo 'atual' ('quem pratica o fato para salvar de perigo atual...'), enquanto o Art. 25 do CP prevê legítima defesa contra agressão 'atual ou iminente'. Embora parte da doutrina amplie para perigo iminente, a literalidade do texto legal restringe o estado de necessidade ao perigo atual.",
    gabaritoCerto: true,
    conceitoPrincipal: "Requisitos temporais do estado de necessidade versus legítima defesa",
    habilidadeCobrada: "Diferenciar a exigência de perigo atual (Art. 24) e agressão atual ou iminente (Art. 25)",
    teseOuRegra: "Arts. 24 e 25 do Código Penal",
    nivelCognitivo: "analisar",
  }),

  // 13
  criarQuestaoCE({
    slug: "pen-ger-013-estrito-cumprimento-dever-terceiros",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Penal",
    cargoNome: "Policial Penal",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "O policial penal que, no exercício estrito de suas funções regulamentares, cumpre mandado judicial de transferência de custodiado atua sob o manto do estrito cumprimento do dever legal, excludente da culpabilidade que isenta o agente de pena.",
    explicacao:
      "Assertiva ERRADA. O estrito cumprimento do dever legal é causa de EXCLUSÃO DA ILICITUDE (ou antijuridicidade), prevista no Art. 23, III, do CP, e não causa excludente da culpabilidade.",
    gabaritoCerto: false,
    conceitoPrincipal: "Natureza jurídica do estrito cumprimento do dever legal",
    habilidadeCobrada: "Classificar as excludentes de ilicitude e diferenciá-las das dirimentes de culpabilidade",
    teseOuRegra: "Art. 23 do Código Penal",
    nivelCognitivo: "compreender",
  }),

  // 14
  criarQuestaoCE({
    slug: "pen-ger-014-excesso-punivel-modalidades",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Militar",
    cargoNome: "Oficial da Polícia Militar",
    ano: 2026,
    dificuldade: "facil",
    enunciado:
      "O agente que, em qualquer das hipóteses de exclusão da ilicitude, excede os limites da necessidade ou moderação responde pelo excesso doloso ou culposo.",
    explicacao:
      "Assertiva CORRETA. O Art. 23, parágrafo único, do CP dispõe: 'O agente, em qualquer das hipóteses deste artigo, responderá pelo excesso doloso ou culposo'.",
    gabaritoCerto: true,
    conceitoPrincipal: "Excesso punível nas excludentes de ilicitude",
    habilidadeCobrada: "Reconhecer a responsabilidade penal a título de dolo ou culpa pelo excesso",
    teseOuRegra: "Art. 23, parágrafo único, do Código Penal",
    nivelCognitivo: "compreender",
  }),

  // 15
  criarQuestaoCE({
    slug: "pen-ger-015-erro-tipo-essencial-escusavel",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Civil",
    cargoNome: "Investigador de Polícia",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "O erro sobre elemento constitutivo do tipo legal de crime (erro de tipo essencial) exclui o dolo, mas permite a punição por crime culposo, se previsto em lei, quando o erro for inescusável (vencível).",
    explicacao:
      "Assertiva CORRETA. De acordo com o Art. 20, caput, do CP: 'O erro sobre elemento constitutivo do tipo legal de crime exclui o dolo, mas permite a punição por crime culposo, se previsto em lei'. Se o erro for escusável (invencível), exclui dolo e culpa; se inescusável, exclui o dolo mas subsiste a culpa se houver previsão típica.",
    gabaritoCerto: true,
    conceitoPrincipal: "Erro de tipo essencial vencível e invencível",
    habilidadeCobrada: "Identificar as consequências dogmáticas do erro de tipo no dolo e na culpa",
    teseOuRegra: "Art. 20, caput, do Código Penal",
    nivelCognitivo: "compreender",
  }),

  // 16
  criarQuestaoCE({
    slug: "pen-ger-016-erro-proibicao-direto-efeitos",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Guarda Municipal",
    cargoNome: "Guarda Civil Municipal",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "O erro sobre a ilicitude do fato, se inevitável (escusável), isenta de pena o agente por exclusão da culpabilidade; se evitável (inescusável), não exclui a culpabilidade, podendo a pena ser diminuída de um sexto a um terço.",
    explicacao:
      "Assertiva CORRETA. Nos termos do Art. 21, caput, do CP: 'O desconhecimento da lei é inescusável. O erro sobre a ilicitude do fato, se inevitável, isenta de pena; se evitável, poderá diminuí-la de um sexto a um terço'. Trata-se de erro de proibição, que atinge o elemento normativo da culpabilidade (potencial consciência da ilicitude).",
    gabaritoCerto: true,
    conceitoPrincipal: "Erro de proibição e reflexos na culpabilidade",
    habilidadeCobrada: "Diferenciar erro de proibição inevitável (isenta de pena) e evitável (causa de diminuição)",
    teseOuRegra: "Art. 21 do Código Penal",
    nivelCognitivo: "compreender",
  }),

  // 17
  criarQuestaoCE({
    slug: "pen-ger-017-coacao-moral-irresistivel-efeitos",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Penal",
    cargoNome: "Policial Penal",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "Se o fato é cometido sob coação moral irresistível ou em estrita obediência a ordem, não manifestamente ilegal, de superior hierárquico, só é punível o autor da coação ou da ordem, afastando-se a culpabilidade do coagido pela inexigibilidade de conduta diversa.",
    explicacao:
      "Assertiva CORRETA. O Art. 22 do Código Penal disciplina a coação moral irresistível e a obediência hierárquica a ordem não manifestamente ilegal como causas excludentes da culpabilidade (fundadas na inexigibilidade de conduta diversa), transferindo a responsabilidade criminal integralmente ao coator ou emissor da ordem.",
    gabaritoCerto: true,
    conceitoPrincipal: "Coação moral irresistível e obediência hierárquica",
    habilidadeCobrada: "Identificar as hipóteses de inexigibilidade de conduta diversa do Art. 22 do CP",
    teseOuRegra: "Art. 22 do Código Penal",
    nivelCognitivo: "compreender",
  }),

  // 18
  criarQuestaoCE({
    slug: "pen-ger-018-embriaguez-actio-libera-in-causa",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_TEORIA_CRIME,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Militar",
    cargoNome: "Soldado da Polícia Militar",
    ano: 2026,
    dificuldade: "facil",
    enunciado:
      "A embriaguez voluntária ou culposa, pelo álcool ou substância de efeitos análogos, exclui a imputabilidade penal do agente, desde que seja completa no momento da ação delituosa.",
    explicacao:
      "Assertiva ERRADA. O Art. 28, II, do CP estabelece expressamente que 'não excluem a imputabilidade penal: a embriaguez, voluntária ou culposa, pelo álcool ou substância de efeitos análogos'. Aplica-se a teoria da actio libera in causa (a ação era livre no ato de ingerir a substância). Somente a embriaguez completa proveniente de caso fortuito ou força maior exclui a imputabilidade (Art. 28, § 1º, CP).",
    gabaritoCerto: false,
    conceitoPrincipal: "Imputabilidade penal e embriaguez não acidental",
    habilidadeCobrada: "Aplicar a teoria da actio libera in causa prevista no Art. 28, II, do CP",
    teseOuRegra: "Art. 28, II c/c § 1º do Código Penal",
    nivelCognitivo: "compreender",
  }),

  // 19
  criarQuestaoCE({
    slug: "pen-ger-019-concurso-pessoas-teoria-monista",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_CONCURSO_PESSOAS,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Civil",
    cargoNome: "Agente de Polícia Civil",
    ano: 2026,
    dificuldade: "facil",
    enunciado:
      "O Código Penal brasileiro adotou, como regra geral para o concurso de pessoas, a teoria monista (unitária), segundo a qual todos aqueles que concorrem para o crime incidem nas penas a este cominadas, na medida de sua culpabilidade.",
    explicacao:
      "Assertiva CORRETA. O Art. 29, caput, do CP consagra a teoria monista/unitária temperada ou mitigada pela regra da culpabilidade individual: 'Quem, de qualquer modo, concorre para o crime incide nas penas a este cominadas, na medida de sua culpabilidade'.",
    gabaritoCerto: true,
    conceitoPrincipal: "Teoria monista mitigada no concurso de pessoas",
    habilidadeCobrada: "Reconhecer a adoção da teoria monista pelo Código Penal brasileiro",
    teseOuRegra: "Art. 29, caput, do Código Penal",
    nivelCognitivo: "compreender",
  }),

  // 20
  criarQuestaoCE({
    slug: "pen-ger-020-participacao-menor-importancia",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_CONCURSO_PESSOAS,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Federal",
    cargoNome: "Escrivão de Polícia Federal",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "No concurso de pessoas, se a participação for de menor importância, a pena pode ser diminuída de um sexto a um terço, benefício aplicável exclusivamente ao partícipe, não alcançando o coautor que executa atos nucleares do tipo penal.",
    explicacao:
      "Assertiva CORRETA. O Art. 29, § 1º, do CP prevê a causa de diminuição da participação de menor importância (1/6 a 1/3). Conforme assentado pela doutrina e jurisprudência pacífica do STF e STJ, essa causa de diminuição é restrita à figura do partícipe (acessoriedade) e não se aplica aos coautores que realizam atos executórios.",
    gabaritoCerto: true,
    conceitoPrincipal: "Participação de menor importância e inaplicabilidade à coautoria",
    habilidadeCobrada: "Diferenciar a posição de partícipe e coautor na aplicação do Art. 29, § 1º, do CP",
    teseOuRegra: "Art. 29, § 1º, do CP e jurisprudência do STJ",
    nivelCognitivo: "analisar",
  }),

  // 21
  criarQuestaoCE({
    slug: "pen-ger-021-cooperacao-dolosamente-distinta",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_CONCURSO_PESSOAS,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Civil",
    cargoNome: "Delegado de Polícia Civil",
    ano: 2026,
    dificuldade: "dificil",
    enunciado:
      "Em apuração de crime patrimonial pela Polícia Civil, constatou-se que dois comparsas ajustaram a prática de furto em imóvel desabitado. Durante a execução, contudo, o comparsa que invadiu a casa surpreendeu o morador e, por desígnio próprio e imprevisível ao vigia externo, desferiu golpes que resultaram em roubo impróprio. Nessa hipótese de cooperação dolosamente distinta, tendo o vigia pretendido participar de crime menos grave e não sendo previsível a infração mais severa, ser-lhe-á aplicada exclusivamente a pena do furto.",
    explicacao:
      "Assertiva CORRETA. Nos termos do Art. 29, § 2º, do Código Penal, na cooperação dolosamente distinta, se algum dos concorrentes quis participar de crime menos grave, ser-lhe-á aplicada a pena deste; a pena somente é exasperada até a metade caso o resultado mais grave fosse previsível. No caso hipotético apresentado, ausente a previsibilidade pelo vigia, este responde apenas pela pena do crime menos grave pretendido (furto).",
    gabaritoCerto: true,
    conceitoPrincipal: "Cooperação dolosamente distinta (desvio subjetivo de conduta)",
    habilidadeCobrada: "Aplicar a regra do Art. 29, § 2º, do CP a hipótese fática policial",
    teseOuRegra: "Art. 29, § 2º, do Código Penal",
    nivelCognitivo: "analisar",
  }),

  // 22
  criarQuestaoCE({
    slug: "pen-ger-022-comunicabilidade-elementares-circunstancias",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_CONCURSO_PESSOAS,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Civil",
    cargoNome: "Investigador de Polícia",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "Não se comunicam as circunstâncias e as condições de caráter pessoal, salvo quando elementares do crime, hipótese em que se estendem aos demais coautores e partícipes que delas tenham conhecimento.",
    explicacao:
      "Assertiva CORRETA. O Art. 30 do CP estabelece: 'Não se comunicam as circunstâncias e as condições de caráter pessoal, salvo quando elementares do crime'. Exemplo clássico: a condição de funcionário público no crime de peculato (Art. 312 CP) comunica-se ao particular concorrente se este sabia de tal condição.",
    gabaritoCerto: true,
    conceitoPrincipal: "Incomunicabilidade de circunstâncias pessoais e ressalva das elementares",
    habilidadeCobrada: "Interpretar o Art. 30 do CP e sua aplicação aos crimes funcionais",
    teseOuRegra: "Art. 30 do Código Penal",
    nivelCognitivo: "aplicar",
  }),

  // 23
  criarQuestaoCE({
    slug: "pen-ger-023-autoria-mediata-requisitos",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_CONCURSO_PESSOAS,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Federal",
    cargoNome: "Agente de Polícia Federal",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "Configura-se a autoria mediata quando o autor se serve de um executor que atua sem culpabilidade (como um inimputável ou pessoa sob coação moral irresistível) ou em erro de tipo invencível provocado, dominando a vontade finalística da conduta sem executar pessoalmente o verbo nuclear.",
    explicacao:
      "Assertiva CORRETA. Na autoria mediata, o autor mediato domina o fato utilizando uma pessoa como mero instrumento de sua vontade (inimputável, coagido moralmente de forma irresistível, ou pessoa induzida em erro de tipo escusável pelo mandante).",
    gabaritoCerto: true,
    conceitoPrincipal: "Conceito e hipóteses de autoria mediata",
    habilidadeCobrada: "Compreender o domínio do fato através de instrumento não culpável ou enganado",
    teseOuRegra: "Teoria do Domínio do Fato e Arts. 20, § 2º e 22 do CP",
    nivelCognitivo: "compreender",
  }),

  // 24
  criarQuestaoCE({
    slug: "pen-ger-024-prescricao-pretensao-punitiva-interrupcao",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_PENAS_EXTINCAO,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Civil",
    cargoNome: "Delegado de Polícia Civil",
    ano: 2026,
    dificuldade: "dificil",
    enunciado:
      "O recebimento da denúncia ou da queixa e a publicação da sentença ou acórdão condenatórios recorríveis são marcos interruptivos da prescrição da pretensão punitiva, operando a interrupção a perda do tempo já decorrido e o reinício integral da contagem do prazo prescricional.",
    explicacao:
      "Assertiva CORRETA. O Art. 117, I e IV, do Código Penal elenca o recebimento da peça acusatória e a publicação da sentença ou acórdão condenatório recorrível como causas interruptivas da prescrição. Nos termos do § 2º do mesmo artigo, a interrupção da prescrição faz com que todo o prazo prescricional recomece a correr do zero a partir do dia da interrupção.",
    gabaritoCerto: true,
    conceitoPrincipal: "Causas de interrupção da prescrição penal",
    habilidadeCobrada: "Identificar os marcos interruptivos do Art. 117 do CP e o efeito do reinício do prazo",
    teseOuRegra: "Art. 117, I e IV c/c § 2º do Código Penal",
    nivelCognitivo: "analisar",
  }),

  // 25
  criarQuestaoCE({
    slug: "pen-ger-025-perdao-judicial-efeitos",
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: ASSUNTOS.PENAL_PENAS_EXTINCAO,
    bancaNome: "Cebraspe",
    orgaoNome: "Polícia Rodoviária Federal",
    cargoNome: "Policial Rodoviário Federal",
    ano: 2026,
    dificuldade: "medio",
    enunciado:
      "A sentença concessiva de perdão judicial é declaratória da extinção da punibilidade, não subsistindo qualquer efeito condenatório, principal ou secundário, nem gerando reincidência para o agente beneficiado.",
    explicacao:
      "Assertiva CORRETA. Conforme a Súmula 18 do STJ: 'A sentença concessiva do perdão judicial é declaratória da extinção da punibilidade, não subsistindo qualquer efeito condenatório'. Não gera reincidência, não lança o nome no rol dos culpados e não serve como título executivo cível.",
    gabaritoCerto: true,
    conceitoPrincipal: "Natureza jurídica e efeitos da sentença de perdão judicial",
    habilidadeCobrada: "Aplicar a Súmula 18 do STJ e o Art. 107, IX, do CP",
    teseOuRegra: "Súmula 18 do STJ e Art. 120 do Código Penal",
    nivelCognitivo: "compreender",
  }),
];

writeModuleFile("m01_penal_geral_ce.mjs", "m01_questoes", m01_questoes);

console.log("Módulo 01 gerado com sucesso.");
