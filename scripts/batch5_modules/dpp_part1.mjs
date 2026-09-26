import { TAXONOMIA } from "./taxonomia.mjs";

export const dppPart1 = [
  {
    idSlug: "dpp-b5-001",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Acerca das características e da sistemática do inquérito policial no ordenamento jurídico brasileiro, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A autoridade policial pode, motivadamente e com base no princípio da insignificância comprovado de plano, determinar o arquivamento dos autos do inquérito policial.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme o art. 17 do CPP, a autoridade policial não poderá mandar arquivar autos de inquérito policial em hipótese alguma (princípio da indisponibilidade)."
      },
      {
        letra: "B",
        texto: "O inquérito policial é procedimento administrativo de natureza inquisitiva, inexistindo ampla defesa e contraditório plenos, o que autoriza a autoridade policial a indeferir fundamentadamente diligências requeridas pelo ofendido ou pelo indiciado, ressalvado o exame de corpo de delito.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 14 do CPP, a autoridade policial tem discricionariedade para deferir ou indeferir diligências pleiteadas pelo ofendido ou indiciado, ressalvado o exame de corpo de delito quando a infração deixar vestígios (art. 158 do CPP)."
      },
      {
        letra: "C",
        texto: "O vício ocorrido durante a fase investigatória do inquérito policial nulifica de pleno direito a ação penal subsequente caso a denúncia tenha se baseado nos elementos informativos do procedimento viciado.",
        correta: false,
        explicacao_especifica: "Incorreta. Consoante jurisprudência pacífica do STF e do STJ, eventuais nulidades ou irregularidades ocorridas na fase do inquérito policial não contaminam a ação penal subsequente."
      },
      {
        letra: "D",
        texto: "O indiciamento é ato complexo e concorrente, podendo ser determinado diretamente pelo magistrado ou pelo Ministério Público ao requisitarem a instauração do inquérito policial.",
        correta: false,
        explicacao_especifica: "Incorreta. O indiciamento é ato privativo do Delegado de Polícia, nos termos do art. 2º, § 6º, da Lei nº 12.830/2013, não cabendo ao Judiciário ou MP determiná-lo compulsoriamente."
      },
      {
        letra: "E",
        texto: "A notitia criminis inqualificada (denúncia anônima) basta, por si só e de modo isolado, para a imediata instauração do inquérito policial formal e indiciamento do denunciado.",
        correta: false,
        explicacao_especifica: "Incorreta. A denúncia anônima exige a prévia realização de verificação da procedência das informações (VPI), nos termos do art. 5º, § 3º, do CPP e jurisprudência consolidada do STF/STJ."
      }
    ],
    explicacao: "Gabarito: B. O inquérito policial é marcado pela discricionariedade mitigada (art. 14, CPP), indisponibilidade para a autoridade policial (art. 17, CPP) e natureza inquisitorial preparatória, sendo ato privativo do Delegado de Polícia o indiciamento fundamentado (Lei 12.830/2013, art. 2º, § 6º)."
  },
  {
    idSlug: "dpp-b5-002",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Agente de Polícia Civil",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O sigilo do inquérito policial é oponível inclusive ao advogado constituído pelo investigado, de modo que a autoridade policial pode negar-lhe acesso irrestrito a todos os documentos dos autos, inclusive aos laudos periciais já concluídos e juntados.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Errado. A Súmula Vinculante 14 do STF garante ao defensor amplo acesso aos elementos de prova que, já documentados, digam respeito ao direito de defesa."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. Nos termos da Súmula Vinculante 14/STF e do art. 7º, XIV, da Lei 8.906/1994, o sigilo não pode ser oposto ao advogado em relação a documentos e laudos já finalizados e acostados aos autos."
      }
    ],
    explicacao: "Gabarito: Errado. Segundo a Súmula Vinculante nº 14 do STF: 'É direito do defensor, no interesse do representado, ter acesso amplo aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa'. O sigilo incide apenas sobre diligências em curso e ainda não documentadas (ex.: interceptação telefônica em andamento)."
  },
  {
    idSlug: "dpp-b5-003",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Determinado inquérito policial foi regularmente instaurado para apurar a prática de crime de estelionato. Decorrido o prazo legal com o investigado em liberdade, a autoridade policial verificou a necessidade de realização de perícia contábil complexa ainda pendente. Nessa situação, caberá à autoridade policial:",
    alternativas: [
      {
        letra: "A",
        texto: "Determinar de ofício o arquivamento do inquérito por excesso de prazo, ressalvada a reabertura futura.",
        correta: false,
        explicacao_especifica: "Incorreta. A autoridade policial não pode arquivar inquérito (art. 17 CPP)."
      },
      {
        letra: "B",
        texto: "Requerer ao juiz competente a dilação do prazo para a conclusão das investigações, nos termos do Código de Processo Penal.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 10, § 3º, do CPP, quando o fato for de difícil elucidação e o indiciado estiver solto, a autoridade policial poderá requerer ao juiz a devolução dos autos para ulteriores diligências."
      },
      {
        letra: "C",
        texto: "Decretar cautelarmente a prisão preventiva do indiciado para suspender o curso do prazo decadencial.",
        correta: false,
        explicacao_especifica: "Incorreta. A autoridade policial não tem poder jurisdicional para decretar prisão preventiva, nem dilação pericial justifica prisão cautelar."
      },
      {
        letra: "D",
        texto: "Encaminhar imediatamente o relatório final ao Ministério Público concluindo pela atipicidade da conduta.",
        correta: false,
        explicacao_especifica: "Incorreta. Sem a perícia imprescindível, não cabe encerramento precipitado com falsa atipicidade, mas sim pedido de prazo."
      },
      {
        letra: "E",
        texto: "Conceder a si mesma prorrogação automática por ato administrativo interno discricionário, sem comunicação ao Poder Judiciário.",
        correta: false,
        explicacao_especifica: "Incorreta. A dilação de prazo no regime do CPP exige encaminhamento judicial com requerimento motivado (art. 10, § 3º, CPP)."
      }
    ],
    explicacao: "Gabarito: B. Conforme dispõe o art. 10, § 3º, do CPP: 'Quando o fato for de difícil elucidação, e o indiciado estiver solto, a autoridade poderá requerer ao juiz a devolução dos autos, para ulteriores diligências, que serão realizadas no prazo marcado pelo juiz'."
  },
  {
    idSlug: "dpp-b5-004",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre a sistemática do arquivamento do inquérito policial e a jurisprudência sumulada dos Tribunais Superiores, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O arquivamento do inquérito policial com fundamento na atipicidade da conduta gera coisa julgada material, impedindo a reabertura das investigações mesmo diante do surgimento de novas provas.",
        correta: true,
        explicacao_especifica: "Correta. A decisão que homologa/determina o arquivamento por atipicidade manifesta do fato ou extinção de punibilidade faz coisa julgada formal e material, impedindo nova persecução penal."
      },
      {
        letra: "B",
        texto: "O desarquivamento de inquérito policial arquivado por insuficiência de provas pode ser determinado pela autoridade policial de ofício a qualquer tempo, sem necessidade de novas notícias ou provas.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme a Súmula 524 do STF e o art. 18 do CPP, o desarquivamento por falta de provas exige notícia de outras/novas provas substanciais."
      },
      {
        letra: "C",
        texto: "A decisão que determina o arquivamento com base em excludente de culpabilidade por inimputabilidade do agente obsta em definitivo a aplicação de qualquer medida de segurança.",
        correta: false,
        explicacao_especifica: "Incorreta. A inimputabilidade por doença mental exige processo penal formal para eventual absolvição imprópria e imposição de medida de segurança, não cabendo arquivamento anômalo sumário."
      },
      {
        letra: "D",
        texto: "O arquivamento do inquérito policial promovido em decorrência da falta de base para a denúncia faz coisa julgada material e extingue em definitivo a punibilidade do agente.",
        correta: false,
        explicacao_especifica: "Incorreta. O arquivamento por falta de provas (falta de base para a denúncia) faz apenas coisa julgada formal, permitindo reabertura com novas provas (Súmula 524/STF)."
      },
      {
        letra: "E",
        texto: "Segundo a Súmula 524 do STF, arquivado o inquérito policial por decisão judicial a requerimento do MP, a ação penal pode ser intentada diretamente pelo órgão acusador sem novas diligências ou provas.",
        correta: false,
        explicacao_especifica: "Incorreta. A Súmula 524/STF enuncia que, arquivado o inquérito, não pode a ação penal ser instaurada sem novas provas."
      }
    ],
    explicacao: "Gabarito: A. O arquivamento por atipicidade do fato ou por extinção da punibilidade faz coisa julgada material. Já o arquivamento por falta de provas (insuficiência probatória) gera apenas coisa julgada formal, viabilizando o desarquivamento caso surjam novas provas substanciais (art. 18 do CPP e Súmula 524/STF)."
  },
  {
    idSlug: "dpp-b5-005",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Em matéria de processo penal e investigação preliminar, assinale a alternativa que indica corretamente uma característica intrínseca do inquérito policial.",
    alternativas: [
      {
        letra: "A",
        texto: "Oralidade, admitindo-se a transmissão exclusivamente verbal de relatórios conclusivos à autoridade judiciária.",
        correta: false,
        explicacao_especifica: "Incorreta. O inquérito policial é formalmente escrito (art. 9º do CPP)."
      },
      {
        letra: "B",
        texto: "Oficiosidade, que impõe a instauração de ofício pela autoridade policial nos crimes de ação penal pública incondicionada.",
        correta: true,
        explicacao_especifica: "Correta. Nos crimes de ação penal pública incondicionada, o inquérito deve ser instaurado de ofício pela autoridade policial (art. 5º, I, CPP)."
      },
      {
        letra: "C",
        texto: "Disponibilidade, podendo o Delegado desistir da apuração e arquivar os autos ao constatar prejuízo financeiro reduzido.",
        correta: false,
        explicacao_especifica: "Incorreta. O inquérito policial é indisponível (art. 17 do CPP)."
      },
      {
        letra: "D",
        texto: "Contraditório pleno obrigatório, com participação concorrente e vinculante da defesa em todas as oitivas de testemunhas.",
        correta: false,
        explicacao_especifica: "Incorreta. O inquérito é procedimento inquisitorial informativo, não havendo contraditório pleno."
      },
      {
        letra: "E",
        texto: "Judicialidade estrita, devendo todos os seus atos materiais ser praticados diretamente perante o magistrado.",
        correta: false,
        explicacao_especifica: "Incorreta. O inquérito é procedimento administrativo conduzido pela Polícia Judiciária."
      }
    ],
    explicacao: "Gabarito: B. A oficiosidade determina que, diante de notícia de infração penal de ação pública incondicionada, a autoridade policial tem o dever funcional de instaurar o inquérito de ofício por meio de portaria (art. 5º, I, do CPP)."
  },
  {
    idSlug: "dpp-b5-006",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na ação penal pública condicionada à representação, o direito de representação decai se não exercido dentro do prazo de seis meses, contado do dia em que a vítima vem a saber quem é o autor do crime.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos termos expressos do art. 38 do CPP e do art. 103 do CP, o prazo decadencial de 6 meses conta-se do conhecimento da autoria delitiva."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O prazo é exatamente de 6 meses a contar do conhecimento de quem é o autor do delito."
      }
    ],
    explicacao: "Gabarito: Certo. Art. 38 do CPP e art. 103 do CP: 'Salvo disposição em contrário, o ofendido, ou seu representante legal, decairá no direito de queixa ou de representação, se não o exercer dentro do prazo de seis meses, contado do dia em que vier a saber quem é o autor do crime'."
  },
  {
    idSlug: "dpp-b5-007",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação à ação penal privada subsidiária da pública, é correto afirmar que:",
    alternativas: [
      {
        letra: "A",
        texto: "Cabe exclusivamente quando o Ministério Público promove expressamente o arquivamento do inquérito policial com aval do juízo.",
        correta: false,
        explicacao_especifica: "Incorreta. Se o MP arquivar o inquérito, não há inércia, sendo incabível a ação penal privada subsidiária."
      },
      {
        letra: "B",
        texto: "O prazo decadencial de seis meses para o seu ajuizamento tem início no primeiro dia útil subsequente ao esgotamento do prazo legal para o oferecimento da denúncia pelo Ministério Público.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 29 do CPP e art. 38 do CPP, o prazo decadencial de 6 meses para a ação subsidiária tem termo inicial no dia em que se esgotar o prazo para o MP oferecer denúncia (inércia)."
      },
      {
        letra: "C",
        texto: "O Ministério Público fica excluído da relação processual, não podendo intervir nem aditar a queixa-crime subsidiária proposta pela vítima.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme o art. 29 do CPP, o MP pode aditar a queixa, repudiá-la, oferecer denúncia substitutiva, intervir em todos os termos e retomar a ação como parte principal em caso de negligência."
      },
      {
        letra: "D",
        texto: "A concessão do perdão do ofendido ao querelado na ação penal subsidiária da pública extingue a punibilidade e impede a continuidade do processo pelo órgão ministerial.",
        correta: false,
        explicacao_especifica: "Incorreta. O perdão e a perempção não são aplicáveis à ação penal privada subsidiária para impedir o MP de retomar a persecução pública."
      },
      {
        letra: "E",
        texto: "O ajuizamento da ação subsidiária depende de prévia autorização expressa do Conselho Nacional do Ministério Público.",
        correta: false,
        explicacao_especifica: "Incorreta. Trata-se de garantia constitucional direta (art. 5º, LIX, CF/88)."
      }
    ],
    explicacao: "Gabarito: B. A ação penal privada subsidiária da pública (art. 5º, LIX, CF e art. 29, CPP) tem cabimento exclusivamente na inércia do Ministério Público (quando o parquet não oferece denúncia, não pede arquivamento nem requisita diligências no prazo legal). O prazo para ajuizamento é de 6 meses, contados do dia em que se esgotar o prazo para o oferecimento da denúncia (art. 38, CPP)."
  },
  {
    idSlug: "dpp-b5-008",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Policias rodoviários federais realizavam patrulhamento tático quando avistaram um indivíduo correndo em via pública, logo após soar o alarme de uma joalheria, sendo ele perseguido de imediato por populares e detido pelos agentes com joias e um alicate de corte. De acordo com o Código de Processo Penal, a situação descrita configura hipótese de:",
    alternativas: [
      {
        letra: "A",
        texto: "Flagrante próprio ou perfeito.",
        correta: false,
        explicacao_especifica: "Incorreta. Flagrante próprio (art. 302, I e II) ocorre quando o agente está cometendo a infração ou acaba de cometê-la no próprio local."
      },
      {
        letra: "B",
        texto: "Flagrante impróprio, quase-flagrante ou irreal.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 302, III, do CPP, considera-se em flagrante delito quem 'é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração'."
      },
      {
        letra: "C",
        texto: "Flagrante presumido, ficto ou assimilado.",
        correta: false,
        explicacao_especifica: "Incorreta. Flagrante presumido (art. 302, IV) ocorre quando o agente é encontrado, logo depois, com instrumentos/objetos sem perseguição contínua."
      },
      {
        letra: "D",
        texto: "Flagrante preparado ou provocado.",
        correta: false,
        explicacao_especifica: "Incorreta. Flagrante preparado envolve induzimento policial com impossibilidade de consumação (Súmula 145/STF)."
      },
      {
        letra: "E",
        texto: "Flagrante forjado ou urdido.",
        correta: false,
        explicacao_especifica: "Incorreta. Flagrante forjado é conduta ilícita com criação artificial de provas incriminatórias falsas."
      }
    ],
    explicacao: "Gabarito: B. O art. 302, III, do CPP disciplina o flagrante impróprio ou quase-flagrante: o agente é perseguido, logo após a prática delitiva, em situação fática que faça presumir ser ele o autor da infração penal."
  },
  {
    idSlug: "dpp-b5-009",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Após a entrada em vigor do Pacote Anticrime (Lei nº 13.964/2019), o juiz não pode, sob nenhuma hipótese, converter de ofício a prisão em flagrante em prisão preventiva durante a audiência de custódia, sendo indispensável a prévia provocação do Ministério Público, da autoridade policial ou do querelante.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF e o STJ pacificaram o entendimento de que o sistema acusatório inaugurado pela Lei 13.964/2019 extirpou do ordenamento a conversão ex officio do flagrante em preventiva (arts. 282, § 2º e 311 do CPP)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. É vedada a conversão de ofício do flagrante em prisão preventiva."
      }
    ],
    explicacao: "Gabarito: Certo. Segundo a jurisprudência uníssona do STF (ADI 6.298/DF) e do STJ (RHC 131.263/GO e Tema Repetitivo), a conversão de ofício da prisão em flagrante em preventiva pelo magistrado viola o modelo acusatório adotado pelo art. 3º-A e arts. 282, § 2º e 311 do CPP, sendo impreterível o requerimento do MP ou representação da autoridade policial."
  },
  {
    idSlug: "dpp-b5-010",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No que concerne aos pressupostos e requisitos para a decretação da prisão preventiva, previstos no Código de Processo Penal, assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A gravidade abstrata do delito e o clamor público gerado pela repercussão midiática dos fatos constituem fundamentos autônomos suficientes para justificar a segregação cautelar para garantia da ordem pública.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme jurisprudência pacífica do STF e STJ e art. 315, § 2º, CPP, a gravidade abstrata e o clamor social não autorizam a prisão preventiva."
      },
      {
        letra: "B",
        texto: "É admitida a decretação da prisão preventiva como forma de antecipação de cumprimento de pena ou como decorrência imediata de investigação criminal instaurada.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 313, § 2º, do CPP veda expressamente a decretação da prisão preventiva com a finalidade de antecipação de cumprimento de pena."
      },
      {
        letra: "C",
        texto: "A prisão preventiva poderá ser decretada nos crimes culposos punidos com pena privativa de liberdade máxima superior a quatro anos, desde que haja reincidência.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 313, I, do CPP restringe a admissão da prisão preventiva aos crimes dolosos punidos com pena privativa de liberdade máxima superior a 4 anos."
      },
      {
        letra: "D",
        texto: "A decisão que decretar, substituir ou denegar a prisão preventiva será sempre motivada e fundamentada, devendo o juiz demonstrar o periculum libertatis com base em fatos novos ou contemporâneos que justifiquem a medida cautelar.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 312, § 2º e art. 315 do CPP, exige-se motivação concreta apoiada em fatos contemporâneos indicativos do perigo que a liberdade do agente representa."
      },
      {
        letra: "E",
        texto: "A superação do prazo legal de noventa dias sem a revisão da prisão preventiva acarreta a imediata e automática soltura do custodiado de pleno direito.",
        correta: false,
        explicacao_especifica: "Incorreta. Consoante o STF (SL 1.395) e o STJ, o transcurso dos 90 dias do art. 316, parágrafo único, do CPP não gera soltura automática, devendo o juízo ser instado a deliberar."
      }
    ],
    explicacao: "Gabarito: D. O art. 312, § 2º, do CPP estabelece: 'A decisão que decretar a prisão preventiva deve ser motivada e fundamentada em receio de perigo e existência concreta de fatos novos ou contemporâneos que justifiquem a aplicação da medida adotada'. Além disso, o art. 315, § 2º, do CPP veda fundamentação genérica ou meramente baseada na gravidade abstrata do delito."
  },
  {
    idSlug: "dpp-b5-011",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito da prisão temporária (Lei nº 7.960/1989) e da orientação vinculante do Supremo Tribunal Federal firmada no julgamento conjunto das ADIs 4.109 e 4.110, assinale a alternativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A prisão temporária pode ser decretada de ofício pelo magistrado durante o inquérito policial, desde que comprovada a imprescindibilidade para as investigações.",
        correta: false,
        explicacao_especifica: "Incorreta. A prisão temporária exige requerimento do MP ou representação da autoridade policial (art. 2º da Lei 7.960/89); jamais de ofício."
      },
      {
        letra: "B",
        texto: "O rol de crimes que admitem a prisão temporária é exemplificativo, podendo o juiz estendê-la a qualquer infração penal cuja pena máxima cominada seja superior a quatro anos.",
        correta: false,
        explicacao_especifica: "Incorreta. O rol do art. 1º, III, da Lei 7.960/89 é taxativo (numerus clausus), conforme fixado pelo STF."
      },
      {
        letra: "C",
        texto: "Para a decretação da prisão temporária, é necessária a presença cumulativa de razões fundadas de autoria/participação em crime do rol taxativo, imprescindibilidade para as investigações e inadequação de outras medidas cautelares diversas.",
        correta: true,
        explicacao_especifica: "Correta. O STF fixou 5 critérios cumulativos para a prisão temporária (ADIs 4.109 e 4.110): fumus comissi delicti, imprescindibilidade concreta, não substituição por cautelares diversas, rol taxativo e vedação à decretação de ofício."
      },
      {
        letra: "D",
        texto: "O prazo da prisão temporária em crimes hediondos e equiparados é de cinco dias, prorrogável por igual período em caso de extrema e comprovada necessidade.",
        correta: false,
        explicacao_especifica: "Incorreta. Em crimes hediondos ou equiparados, o prazo da prisão temporária é de 30 dias, prorrogável por mais 30 dias (art. 2º, § 4º, da Lei 8.072/1990)."
      },
      {
        letra: "E",
        texto: "A ausência de residência fixa e a recusa do suspeito em prestar depoimento perante a autoridade policial são fundamentos suficientes e autônomos para a decretação da prisão temporária.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF assentou que o mero fato de o suspeito não ter residência fixa ou exercer o direito ao silêncio não autoriza a prisão temporária."
      }
    ],
    explicacao: "Gabarito: C. No julgamento das ADIs 4.109 e 4.110, o STF conferiu interpretação conforme à Constituição à Lei nº 7.960/1989, fixando que a prisão temporária: 1) exige imprescindibilidade para as investigações; 2) exige fundadas razões de autoria ou participação; 3) submete-se ao rol estritamente taxativo de crimes; 4) exige justificação quanto à impossibilidade de medidas cautelares diversas (art. 319 CPP); e 5) veda a decretação de ofício."
  },
  {
    idSlug: "dpp-b5-012",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Perito Criminal Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No que concerne à cadeia de custódia da prova pericial no processo penal brasileiro (arts. 158-A a 158-F do CPP), assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O isolamento do local de crime é ato exclusivo dos peritos oficiais de natureza criminal, sendo expressamente vedado aos primeiros policiais civis ou militares que chegarem ao local praticar qualquer ato de preservação.",
        correta: false,
        explicacao_especifica: "Incorreta. Qualquer autoridade ou agente público que reconhecer um elemento com potencial interesse probatório tem o dever de preservar e isolar o local (art. 158-A, § 2º e art. 158-C, § 2º CPP)."
      },
      {
        letra: "B",
        texto: "O acondicionamento é a etapa da cadeia de custódia que consiste na separação do vestígio entre o local de crime e o órgão pericial onde será realizada a perícia.",
        correta: false,
        explicacao_especifica: "Incorreta. O acondicionamento consiste no ato de embalar cada vestígio em invólucro próprio, selado e numerado (art. 158-B, V, CPP). O transporte é o deslocamento (etapa VI)."
      },
      {
        letra: "C",
        texto: "A quebra da cadeia de custódia de vestígio apreendido implica, de acordo com o entendimento consolidado do STJ e do STF, a nulidade e inadmissibilidade automática e absoluta de todo o acervo probatório da ação penal.",
        correta: false,
        explicacao_especifica: "Incorreta. O STJ e o STF pacificaram que a quebra da cadeia de custódia não conduz à nulidade automática/inadmissibilidade imediata, devendo ser valorada caso a caso pelo juiz quanto à sua idoneidade e força probante (teoria da desconfiança/valoração probatória)."
      },
      {
        letra: "D",
        texto: "A cadeia de custódia inicia-se com a preservação do local de crime ou com procedimentos policiais ou periciais nos quais seja detectada a existência de vestígio, compreendendo etapas cronológicas legalmente delineadas.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 158-A, § 1º, do CPP: 'O início da cadeia de custódia dá-se com a preservação do local de crime ou com procedimentos policiais ou periciais nos quais seja detectada a existência de vestígio'."
      },
      {
        letra: "E",
        texto: "O descarte de vestígios após o término da perícia técnica pode ser realizado diretamente pelo perito responsável, sem prévia autorização judicial expressa.",
        correta: false,
        explicacao_especifica: "Incorreta. O descarte é o procedimento formal de liberação/destruição do vestígio mediante autorização judicial (art. 158-B, X, CPP)."
      }
    ],
    explicacao: "Gabarito: D. O art. 158-A do CPP conceitua cadeia de custódia e fixa seu início (§ 1º). O art. 158-B escalona as 10 etapas oficiais: 1. Reconhecimento; 2. Isolamento; 3. Fixação; 4. Coleta; 5. Acondicionamento; 6. Transporte; 7. Recebimento; 8. Processamento; 9. Armazenamento; 10. Descarte. A violação da cadeia afeta a confiabilidade da prova e sua valoração judicial, não gerando nulidade automática absoluta (STJ, RHC 141.485/DF)."
  },
  {
    idSlug: "dpp-b5-013",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "São inadmissíveis no processo as provas ilícitas, bem como as derivadas das ilícitas, salvo quando não evidenciado o nexo de causalidade entre umas e outras, ou quando as derivadas puderem ser obtidas por uma fonte independente.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Trata-se da teoria dos frutos da árvore envenenada e suas exceções legais expressas no art. 157, § 1º, do CPP."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O texto reproduz fielmente a redação do art. 157, § 1º, do CPP."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 157, § 1º, do CPP consagra a doutrina dos frutos da árvore envenenada (fruits of the poisonous tree) e ressalva expressamente a teoria da fonte independente (independent source) e a ruptura do nexo causal (descoberta inevitável / nexo atenuado)."
  },
  {
    idSlug: "dpp-b5-014",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito do reconhecimento de pessoas no processo penal e das diretrizes jurisprudenciais do Superior Tribunal de Justiça e do Supremo Tribunal Federal, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O procedimento previsto no art. 226 do CPP constitui mera recomendação legal, cuja inobservância gera mera irregularidade processual irrelevante.",
        correta: false,
        explicacao_especifica: "Incorreta. STJ (HC 598.886/SC e Tema Repetitivo 1.156) e STF superaram a tese da mera recomendação, fixando que o art. 226 do CPP é garantia obrigatória indispensável."
      },
      {
        letra: "B",
        texto: "O reconhecimento pessoal realizado em desconformidade com as formalidades do art. 226 do CPP é inválido e não pode fundamentar, por si só, decreto condenatório ou decretação de prisão preventiva.",
        correta: true,
        explicacao_especifica: "Correta. Conforme jurisprudência pacífica do STJ e STF, o desrespeito às formalidades legais invalida o reconhecimento como meio de prova idôneo para condenação."
      },
      {
        letra: "C",
        texto: "O reconhecimento fotográfico é suficiente para a condenação criminal mesmo que não seja confirmado em juízo por outras provas materiais autônomas.",
        correta: false,
        explicacao_especifica: "Incorreta. O reconhecimento fotográfico precário isolado é expressamente rechaçado pelos Tribunais Superiores para justificar condenação."
      },
      {
        letra: "D",
        texto: "A confirmação do reconhecimento em juízo mediante simples apontamento do réu sentado no banco dos réus sana eventuais vícios da etapa policial.",
        correta: false,
        explicacao_especifica: "Incorreta. O chamado 'show-up' em audiência não convalida a nulidade do reconhecimento policial anterior."
      },
      {
        letra: "E",
        texto: "A presença de perfilados semelhantes é ato meramente facultativo cuja ausência não precisa ser motivada pela autoridade policial.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 226, II, do CPP exige perfilamento de semelhantes 'se for possível', demandando justificação idônea quando inviável."
      }
    ],
    explicacao: "Gabarito: B. O Superior Tribunal de Justiça, a partir do julgamento histórico do HC 598.886/SC (6ª Turma) e RHC 206.846/SP (5ª Turma), sufragado pelo STF, estabeleceu que o art. 226 do CPP não é mera recomendação, mas formalidade indispensável. O reconhecimento viciado não pode servir de lastro probatório autônomo para condenação ou medidas constritivas."
  },
  {
    idSlug: "dpp-b5-015",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Agentes de polícia civil receberam denúncia anônima de tráfico de drogas em uma residência. Sem mandado judicial e sem realizar investigação preliminar prévia ou campana que comprovasse movimentação típica, os policiais ingressaram na casa após o morador correr para os fundos ao avistar a viatura. No interior, apreenderam 2 kg de cocaína. À luz da jurisprudência do STF (Tema 280 da Repercussão Geral) e do STJ, a diligência policial:",
    alternativas: [
      {
        letra: "A",
        texto: "É plenamente lícita, pois o crime de tráfico de drogas na modalidade 'guardar' ou 'ter em depósito' é permanente, autorizando a entrada a qualquer hora do dia ou da noite independentemente de justificação prévia.",
        correta: false,
        explicacao_especifica: "Incorreta. A natureza permanente do tráfico não dispensa fundadas razões prévias (Tema 280/STF)."
      },
      {
        letra: "B",
        texto: "É nula e ilícita, pois a simples fuga do indivíduo ao avistar a polícia somada a denúncia anônima não constituem fundadas razões prévias (justa causa) para o ingresso forçado em domicílio.",
        correta: true,
        explicacao_especifica: "Correta. STF (Tema 280) e STJ (HC 598.051/SP e Tema 1.156) consolidaram que a mera fuga e denúncia apócrifa não suprem a exigência de justa causa antecedente justificada concretamente."
      },
      {
        letra: "C",
        texto: "É lícita somente se a autoridade policial ratificar o flagrante e o Ministério Público concordar expressamente no oferecimento da denúncia.",
        correta: false,
        explicacao_especifica: "Incorreta. Atos de ratificação ministerial não saram a ilicitude constitucional originária da violação de domicílio."
      },
      {
        letra: "D",
        texto: "É válida em virtude do princípio do resultado útil, já que a efetiva apreensão de drogas convalida retroativamente a entrada forçada na residência.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF expressamente rejeitou a teoria da validação a posteriori: a justa causa deve existir antes da invasão domiciliar."
      },
      {
        letra: "E",
        texto: "Pode ser convalidada por consentimento tácito caso o morador não ofereça resistência física armada aos policiais no interior da residência.",
        correta: false,
        explicacao_especifica: "Incorreta. O consentimento do morador exige registro por escrito e gravação audiovisual (HC 598.051/SP - STJ)."
      }
    ],
    explicacao: "Gabarito: B. De acordo com o STF (Tema 280): 'A entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em período noturno, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade dos atos praticados'. A mera fuga ao avistar a polícia e denúncia anônima não configuram justa causa antecedente (STJ, REsp 1.871.856/SE e HC 598.051/SP)."
  },
  {
    idSlug: "dpp-b5-016",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O cumprimento de mandado de busca e apreensão domiciliar pode ser realizado durante a noite, desde que a autoridade policial esteja munida da respectiva ordem judicial escrita e fundamentada.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Errado. Por expressa disposição constitucional (art. 5º, XI, CF) e legal (art. 245 CPP e Lei 13.869/2019), o mandado judicial domiciliar só pode ser cumprido durante o dia."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. O art. 5º, XI, da CF/88 veda a execução de mandado judicial domiciliar em período noturno (durante a noite só com consentimento ou flagrante delito/desastre/socorro)."
      }
    ],
    explicacao: "Gabarito: Errado. O art. 5º, XI, da Constituição Federal dispõe: 'a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial'. O cumprimento de mandado judicial de busca domiciliar no período noturno (entre 21h e 5h) configura inclusive crime de abuso de autoridade (art. 22 da Lei nº 13.869/2019)."
  },
  {
    idSlug: "dpp-b5-017",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação às regras de competência jurisdicional no processo penal brasileiro, assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A competência ratione loci nos crimes tentados firma-se pelo local em que foi praticado o primeiro ato de execução, independentemente de onde cessou a atividade executória.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme o art. 70 do CPP, na tentativa a competência é fixada pelo lugar em que for praticado o último ato de execução."
      },
      {
        letra: "B",
        texto: "Compete à Justiça Federal processar e julgar o crime de latrocínio cometido a bordo de navio atracado em porto marítimo nacional contra tripulante estrangeiro.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 109, IX, da CF/88, compete aos juízes federais processar e julgar os crimes cometidos a bordo de navios ou aeronaves, ressalvada a competência da Justiça Militar."
      },
      {
        letra: "C",
        texto: "A competência pela prerrogativa de função permanece incólume no Tribunal competente mesmo após a cessação definitiva do exercício do cargo público eletivo pelo réu.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF cancelou a Súmula 394 e firmou que o foro por prerrogativa cessa com o fim do mandato/cargo, ressalvada a hipótese de encerramento da instrução (renúncia protelatória)."
      },
      {
        letra: "D",
        texto: "Nos crimes de estelionato praticados mediante cheque sem suficiente provisão de fundos, a competência é firmada no foro do domicílio da vítima, por força da teoria do resultado absoluto.",
        correta: false,
        explicacao_especifica: "Incorreta. No estelionato com cheque sem fundos a competência é do local da recusa do pagamento (Súmula 244/STJ e art. 70, § 4º, CPP)."
      },
      {
        letra: "E",
        texto: "A conexão e a continência importam necessariamente na separação obrigatória dos processos quando um dos réus possuir foro de prerrogativa perante Tribunal de Justiça.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme a Súmula 704 do STF, a atração de corréus sem foro pelo tribunal competente para o réu de prerrogativa não viola a ampla defesa e é a regra da continência/conexão (art. 78, III, CPP)."
      }
    ],
    explicacao: "Gabarito: B. Consoante o art. 109, IX, da Constituição Federal, compete à Justiça Federal o julgamento de infrações penais cometidas a bordo de navios ou aeronaves. No que tange à tentativa, a competência fixa-se no local do último ato executório (art. 70, CPP)."
  },
  {
    idSlug: "dpp-b5-018",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.procedimento_comum_juri,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No procedimento escalonado do Tribunal do Júri, a decisão de pronúncia proferida pelo magistrado ao término da primeira fase (judicium accusationis) possui natureza jurídica de:",
    alternativas: [
      {
        letra: "A",
        texto: "Sentença de mérito condenatória com trânsito em julgado imediato.",
        correta: false,
        explicacao_especifica: "Incorreta. A pronúncia não julga o mérito da pretensão punitiva e não condena."
      },
      {
        letra: "B",
        texto: "Decisão interlocutória mista não terminativa, que reconhece a materialidade delitiva e indícios suficientes de autoria, remetendo o julgamento ao Conselho de Sentença.",
        correta: true,
        explicacao_especifica: "Correta. A pronúncia (art. 413 do CPP) é classificada doutrinariamente como decisão interlocutória mista não terminativa."
      },
      {
        letra: "C",
        texto: "Despacho de mero expediente sem conteúdo decisório ou cabimento de recurso.",
        correta: false,
        explicacao_especifica: "Incorreta. Possui forte carga decisória e desafia Recurso em Sentido Estrito - RESE (art. 581, IV, CPP)."
      },
      {
        letra: "D",
        texto: "Sentença absolutória imprópria com imposição obrigatória de internação psiquiátrica.",
        correta: false,
        explicacao_especifica: "Incorreta. A absolvição imprópria ocorre na absolvição sumária por inimputabilidade exclusiva (art. 415, parágrafo único, CPP)."
      },
      {
        letra: "E",
        texto: "Decisão terminativa definitiva que extingue a punibilidade pela prescrição em perspectiva.",
        correta: false,
        explicacao_especifica: "Incorreta. A pronúncia impulsiona o feito para a 2ª fase (judicium causae)."
      }
    ],
    explicacao: "Gabarito: B. A decisão de pronúncia (art. 413 do CPP) possui natureza jurídica de decisão interlocutória mista não terminativa, pois encerra a fase do juízo de acusação (judicium accusationis) e remete o julgamento do mérito dos crimes dolosos contra a vida aos juízes naturais da causa: os jurados do Tribunal do Júri (judicium causae)."
  }
];
