import { TAXONOMIA } from "./taxonomia.mjs";

export const processoPenal02Questoes = [
  // Q31 - CEBRASPE / PRF - Inquérito Policial / Arquivamento e ADIs STF (Art. 28 CPP)
  {
    idSlug: "procpen-031",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na sistemática do arquivamento do inquérito policial delineada pelo Pacote Anticrime e convalidada com modulações pelo Supremo Tribunal Federal no julgamento das ADIs 6.298, 6.299, 6.300 e 6.305, o arquivamento promovido pelo Ministério Público submete-se a controle revisional no âmbito da própria instituição ministerial, sendo a decisão comunicada à vítima, ao investigado e à autoridade policial.",
    explicacao: "GABARITO: CERTO. O STF, nas ADIs 6298 e correlatas, validou o modelo acusatório do art. 28 do CPP (redação da Lei nº 13.964/2019), fixando que a promoção do arquivamento do inquérito pelo Ministério Público é submetida à instância de revisão interna do próprio órgão ministerial, devendo a decisão ser comunicada à vítima, ao investigado e à autoridade policial.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q32 - FGV / PM - Inquérito Policial / Desarquivamento e Novas Provas (Súmula 524 STF)
  {
    idSlug: "procpen-032",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Determinado inquérito policial instaurado para apurar crime de roubo circunstanciado foi formalmente arquivado por decisão judicial acolhendo requerimento do Ministério Público em razão da insuficiência de elementos probatórios de autoria. Seis meses depois, a vítima localiza testemunha presencial inédita capaz de apontar com precisão o autor do delito. À luz do art. 18 do CPP e da Súmula 524 do STF, é correto afirmar que:",
    explicacao: "GABARITO: D. Art. 18 do CPP e Súmula 524 do STF: 'Arquivado o inquérito policial, por despacho do juiz, a requerimento do promotor de justiça, não pode a ação penal ser iniciada, sem novas provas'. O arquivamento fundado em falta de provas gera apenas coisa julgada formal, permitindo o desarquivamento e novas diligências/oferecimento de denúncia diante de provas substancialmente novas.",
    alternativas: [
      { letra: "A", texto: "o arquivamento do inquérito faz coisa julgada material definitiva, impedindo em qualquer hipótese o desarquivamento e a persecução penal.", correta: false },
      { letra: "B", texto: "a autoridade policial pode instaurar ação penal imediatamente, dispensando o Ministério Público.", correta: false },
      { letra: "C", texto: "o desarquivamento depende de prévia autorização unânime do tribunal de justiça do estado.", correta: false },
      { letra: "D", texto: "a autoridade policial poderá proceder a novas investigações e o Ministério Público poderá oferecer denúncia, desde que surjam outras provas substancialmente novas.", correta: true },
      { letra: "E", texto: "a ação penal somente poderá ser deflagrada como queixa-crime privada personalíssima ajuizada pela vítima.", correta: false }
    ]
  },
  // Q33 - CEBRASPE / PM - Inquérito Policial / Indiciamento Privativo
  {
    idSlug: "procpen-033",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei nº 12.830/2013, o indiciamento é ato privativo do delegado de polícia, que se realiza mediante análise técnico-jurídica fundamentada do fato, não cabendo ao juiz nem ao Ministério Público requisitar ou determinar compulsoriamente o indiciamento de determinada pessoa.",
    explicacao: "GABARITO: CERTO. O art. 2º, § 6º, da Lei nº 12.830/2013 preconiza: 'O indiciamento, privativo do delegado de polícia, dar-se-á por ato fundamentado, mediante análise técnico-jurídica do fato, a qual deverá apontar a autoria, materialidade e suas circunstâncias'. O STF e o STJ firmaram orientação de que magistrados e membros do MP não podem determinar ou requisitar a realização de indiciamento.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q34 - VUNESP / GM - Ação Penal / Lesão Corporal e Lei Maria da Penha
  {
    idSlug: "procpen-034",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em relação à natureza da ação penal no crime de lesão corporal leve praticado contra a mulher no contexto de violência doméstica e familiar, o Supremo Tribunal Federal (ADI 4424) e o Superior Tribunal de Justiça (Súmula 542) consolidaram o entendimento de que se trata de ação penal:",
    explicacao: "GABARITO: A. Súmula 542 do STJ: 'A ação penal nos crimes de lesão corporal leve praticados em detrimento da mulher, no âmbito doméstico e familiar, é pública incondicionada'. O STF (ADI 4424) assentou que aos crimes previstos na Lei Maria da Penha não se aplicam os institutos da Lei nº 9.099/95 (art. 41 da Lei nº 11.340/06), sendo inaplicável a exigência de representação do art. 88 da Lei nº 9.099/95.",
    alternativas: [
      { letra: "A", texto: "pública incondicionada, sendo irrelevante a eventual manifestação da vítima no sentido de renunciar à representação.", correta: true },
      { letra: "B", texto: "pública condicionada à representação, aplicando-se integralmente os benefícios da Lei nº 9.099/1995.", correta: false },
      { letra: "C", texto: "privada subsidiária obrigatória a ser ajuizada exclusivamente por advogado constituído.", correta: false },
      { letra: "D", texto: "pública condicionada à requisição exclusiva do Ministro da Justiça e Segurança Pública.", correta: false },
      { letra: "E", texto: "privada exclusiva, que decai caso a vítima não ajuíze a queixa no prazo improrrogável de 30 dias.", correta: false }
    ]
  },
  // Q35 - IBFC / CBM - Ação Penal / Perempção da Ação Privada
  {
    idSlug: "procpen-035",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O Código de Processo Penal prevê expressamente hipóteses de extinção de punibilidade pela ocorrência da perempção na ação exclusivamente privada. De acordo com o art. 60 do CPP, considera-se perempta a ação penal privada quando:",
    explicacao: "GABARITO: C. Art. 60, I, do CPP: 'Nos casos em que somente se procede mediante queixa, considerar-se-á perempta a ação penal: I - quando, iniciada esta, o querelante deixar de promover o andamento do processo durante 30 dias seguidos'. A perempção é causa extintiva da punibilidade privativa da ação penal exclusivamente privada.",
    alternativas: [
      { letra: "A", texto: "o Ministério Público não apresenta alegações finais no prazo de 5 dias.", correta: false },
      { letra: "B", texto: "o juiz deixa de proferir sentença no prazo regulamentar da lei de organização judiciária.", correta: false },
      { letra: "C", texto: "iniciada a ação penal privada, o querelante deixar de promover o andamento do processo durante trinta dias seguidos.", correta: true },
      { letra: "D", texto: "a testemunha arrolada na queixa deixa de comparecer à audiência de instrução.", correta: false },
      { letra: "E", texto: "o querelado confessa integralmente a prática da difamação ou injúria imputada.", correta: false }
    ]
  },
  // Q36 - CEBRASPE / PRF - Ação Penal / Princípios e Obrigatoriedade Mitigada
  {
    idSlug: "procpen-036",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O princípio da obrigatoriedade da ação penal pública, que impõe ao Ministério Público o dever de oferecer a denúncia sempre que presentes os pressupostos processuais e a justa causa, sofreu atenuações pelo ordenamento jurídico brasileiro com a introdução de institutos de justiça penal negociada, tais como a transação penal e o acordo de não persecução penal (obrigatoriedade mitigada ou discricionariedade regrada).",
    explicacao: "GABARITO: CERTO. Tradicionalmente, vigora na ação penal pública o princípio da obrigatoriedade. Contudo, a introdução de institutos despenalizadores e negociais (Lei nº 9.099/95 - transação penal; Lei nº 13.964/2019 - art. 28-A do CPP / ANPP) consagrou o modelo da obrigatoriedade mitigada ou discricionariedade regrada, permitindo ao MP propor acordos prévios à instauração do processo quando preenchidos os requisitos legais.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q37 - FGV / PM - Ação Penal / Acordo de Não Persecução Penal (Art. 28-A CPP)
  {
    idSlug: "procpen-037",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre o Acordo de Não Persecução Penal (ANPP), instituído pelo art. 28-A do Código de Processo Penal, analise os requisitos e assinale a alternativa correta:",
    explicacao: "GABARITO: B. Art. 28-A, caput, do CPP: 'Não sendo caso de arquivamento e tendo o investigado confessado formal e circunstancialmente a prática de infração penal sem violência ou grave ameaça e com pena mínima inferior a 4 (quatro) anos, o Ministério Público poderá propor acordo de não persecução penal...'. O § 2º veda expressamente o ANPP em caso de violência doméstica ou familiar contra a mulher ou por motivo de gênero.",
    alternativas: [
      { letra: "A", texto: "O ANPP é admitido em qualquer crime, inclusive naqueles praticados com violência real ou grave ameaça à pessoa, desde que a pena máxima seja de 2 anos.", correta: false },
      { letra: "B", texto: "Exige-se, dentre outros requisitos cumulativos, a confissão formal e circunstanciada do investigado, que o delito tenha sido cometido sem violência ou grave ameaça e que a pena mínima cominada em abstrato seja inferior a 4 anos.", correta: true },
      { letra: "C", texto: "O ANPP pode ser proposto livremente pelo Delegado de Polícia no relatório final do inquérito policial, sem intervenção do MP.", correta: false },
      { letra: "D", texto: "A homologação do ANPP pelo juiz gera imediatamente reincidência penal para o agente em futuros delitos.", correta: false },
      { letra: "E", texto: "O ANPP é expressamente permitido nos crimes praticados no âmbito de violência doméstica ou familiar contra a mulher.", correta: false }
    ]
  },
  // Q38 - CEBRASPE / GM - Procedimentos Operacionais / TCO por Forças de Segurança
  {
    idSlug: "procpen-038",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal firmou jurisprudência (ADI 5.637 e RE 1.050.704) no sentido de que a lavratura de Termo Circunstanciado de Ocorrência (TCO) previsto no art. 69 da Lei nº 9.099/1995 não constitui ato privativo de polícia judiciária, sendo constitucional a sua elaboração por integrantes da Polícia Militar, da Polícia Rodoviária Federal e de Guardas Municipais.",
    explicacao: "GABARITO: CERTO. O STF assentou que o TCO é mero registro administrativo de constatação de fato delituoso de menor potencial ofensivo, não se revestindo de natureza investigatória complexa nem consubstanciando ato privativo de delegado de polícia. Portanto, é legítima e constitucional a sua lavratura por PM, PRF e outras forças policiais e de segurança.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q39 - VUNESP / PM - Inquérito Policial / Incomunicabilidade do Preso
  {
    idSlug: "procpen-039",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O art. 21 do Código de Processo Penal previa a possibilidade de decretação da incomunicabilidade do preso por despacho fundamentado do juiz. Diante da ordem constitucional instaurada pela Carta Magna de 1988, é correto afirmar que:",
    explicacao: "GABARITO: E. A CF/88 veda a incomunicabilidade do preso inclusive durante o estado de defesa (art. 136, § 3º, IV). Por conseguinte, a doutrina e a jurisprudência são pacíficas em reconhecer a não recepção do art. 21 do CPP, sendo inconstitucional a incomunicabilidade do preso na vigência do Estado Democrático de Direito regular.",
    alternativas: [
      { letra: "A", texto: "o delegado de polícia pode decretar a incomunicabilidade do indiciado pelo prazo de até 15 dias sem autorização judicial.", correta: false },
      { letra: "B", texto: "a incomunicabilidade pode ser decretada pelo Ministério Público nos crimes punidos com reclusão.", correta: false },
      { letra: "C", texto: "o juiz pode decretar a incomunicabilidade do preso por até 30 dias para garantir o sigilo dos atos periciais.", correta: false },
      { letra: "D", texto: "a incomunicabilidade é plenamente válida em casos de crimes hediondos ou praticados por organização criminosa armada.", correta: false },
      { letra: "E", texto: "o dispositivo do CPP não foi recepcionado pela Constituição Federal de 1988, que proíbe expressamente a incomunicabilidade do preso até mesmo durante o estado de defesa.", correta: true }
    ]
  },
  // Q40 - IBFC / CBM - Ação Penal / Decadência do Direito de Queixa
  {
    idSlug: "procpen-040",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Nos termos do art. 38 do Código de Processo Penal, salvo disposição em contrário, o ofendido, ou seu representante legal, decairá no direito de queixa ou de representação se não o exercer dentro do prazo de:",
    explicacao: "GABARITO: B. Art. 38 do CPP: 'Salvo disposição em contrário, o ofendido, ou seu representante legal, decairá no direito de queixa ou de representação, se não o exercer dentro do prazo de seis meses, contado do dia em que vier a saber quem é o autor do crime, ou, no caso do art. 29, do dia em que se esgotar o prazo para o oferecimento da denúncia'.",
    alternativas: [
      { letra: "A", texto: "30 dias, contados da data da prática do delito.", correta: false },
      { letra: "B", texto: "6 meses, contado do dia em que vier a saber quem é o autor do crime.", correta: true },
      { letra: "C", texto: "1 ano, contado da instauração do inquérito policial.", correta: false },
      { letra: "D", texto: "90 dias, contado da emissão do laudo pericial definitivo.", correta: false },
      { letra: "E", texto: "2 anos, contado da notificação judicial formal.", correta: false }
    ]
  },
  // Q41 - CEBRASPE / PRF - Prisões Cautelares / Ação Controlada e Flagrante Diferido
  {
    idSlug: "procpen-041",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O flagrante diferido (ou ação controlada), previsto na Lei de Organizações Criminosas (Lei nº 12.850/2013) e na Lei de Drogas (Lei nº 11.343/2006), consiste em retardar a intervenção policial relativa à ação praticada por organização criminosa ou associação para o tráfico, para que a medida se concretize no momento mais eficaz à formação de provas e obtenção de informações.",
    explicacao: "GABARITO: CERTO. Art. 8º da Lei nº 12.850/2013: 'Consiste a ação controlada em retardar a intervenção policial ou administrativa relativa à ação praticada por organização criminosa ou a ela vinculada, desde que mantida sob observação e acompanhamento para que a medida legal se concretize no momento mais eficaz à formação de provas e obtenção de informações'. Na Lei 12.850/13 exige-se prévia comunicação ao juiz.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q42 - FGV / PM - Prisões Cautelares / Flagrante Forjado
  {
    idSlug: "procpen-042",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante fiscalização, agentes policiais mal-intencionados colocam clandestinamente substância entorpecente no porta-malas do veículo de um cidadão inocente para, em seguida, simular a descoberta e efetuar a sua prisão em flagrante por tráfico de drogas. Essa conduta ilícita caracteriza espécie de flagrante:",
    explicacao: "GABARITO: D. O flagrante forjado (fabricado ou urdido) ocorre quando a situação delitiva é artificialmente criada por policiais ou terceiros com o propósito de incriminar falsamente alguém inocente. O fato é atípico em relação à vítima incriminada, a prisão é manifestamente ilegal e nula, e os agentes públicos respondem civil, penal (crime de abuso de autoridade e/ou denunciação caluniosa) e administrativamente.",
    alternativas: [
      { letra: "A", texto: "próprio, com validade plena até pronunciamento judicial.", correta: false },
      { letra: "B", texto: "esperado, que admite ratificação pelo Ministério Público.", correta: false },
      { letra: "C", texto: "prorrogado, decorrente de ação controlada informal.", correta: false },
      { letra: "D", texto: "forjado, sendo a prisão inteiramente ilícita e ensejando a responsabilização criminal dos policiais.", correta: true },
      { letra: "E", texto: "presumido, sujeito a mera emenda sanável no auto de prisão.", correta: false }
    ]
  },
  // Q43 - CEBRASPE / PM - Prisões Cautelares / Prisão Domiciliar Substitutiva
  {
    idSlug: "procpen-043",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Nos termos do art. 318-A do Código de Processo Penal, a prisão preventiva imposta à mulher gestante ou que for mãe ou responsável por crianças ou pessoas com deficiência será substituída por prisão domiciliar, desde que ela não tenha cometido crime com violência ou grave ameaça à pessoa e não tenha cometido o crime contra seu filho ou dependente.",
    explicacao: "GABARITO: CERTO. Art. 318-A do CPP (incluído pela Lei nº 13.769/2018): 'A prisão preventiva imposta à mulher gestante ou que for mãe ou responsável por crianças ou pessoas com deficiência será substituída por prisão domiciliar, desde que: I - não tenha cometido crime com violência ou grave ameaça a pessoa; II - não tenha cometido o crime contra seu filho ou dependente'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q44 - VUNESP / GM - Prisões Cautelares / Prazos da Prisão Temporária
  {
    idSlug: "procpen-044",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Nos termos da Lei nº 7.960/1989 e da Lei dos Crimes Hediondos (Lei nº 8.072/1990), o prazo de duração da prisão temporária para crimes comuns e para crimes hediondos/equiparados é, respectivamente, de:",
    explicacao: "GABARITO: C. Na Lei nº 7.960/1989 (art. 2º), a prisão temporária terá o prazo de 5 dias, prorrogável por igual período em caso de extrema e comprovada necessidade. Para os crimes hediondos e equiparados (art. 2º, § 4º, da Lei nº 8.072/1990), o prazo é de 30 dias, prorrogável por igual período.",
    alternativas: [
      { letra: "A", texto: "10 dias (prorrogável por mais 10) e 60 dias (prorrogável por mais 60).", correta: false },
      { letra: "B", texto: "15 dias (improrrogáveis) e 30 dias (improrrogáveis).", correta: false },
      { letra: "C", texto: "5 dias (prorrogável por mais 5) e 30 dias (prorrogável por mais 30).", correta: true },
      { letra: "D", texto: "24 horas (prorrogável por mais 24 horas) e 10 dias (prorrogável por mais 10).", correta: false },
      { letra: "E", texto: "3 dias (prorrogável por mais 3) e 15 dias (prorrogável por mais 15).", correta: false }
    ]
  },
  // Q45 - IBFC / CBM - Audiência de Custódia / Conversão em Preventiva sem Provocação
  {
    idSlug: "procpen-045",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Ao receber o auto de prisão em flagrante e presidir a audiência de custódia, o magistrado constata que o autuado possui histórico criminal relevante. Não houve, contudo, qualquer representação da autoridade policial ou requerimento do Ministério Público pela conversão da prisão em flagrante em preventiva. Nessa situação e segundo a jurisprudência dominante do STF e STJ:",
    explicacao: "GABARITO: A. Com a vigência do Pacote Anticrime (Lei nº 13.964/2019) e o julgamento pelo plenário do STF (RHC 204.606) e STJ (RHC 131.263), o juiz não pode converter a prisão em flagrante em prisão preventiva 'de ofício' na audiência de custódia, sendo obrigatória a provocação do Ministério Público ou da autoridade policial.",
    alternativas: [
      { letra: "A", texto: "o magistrado não pode converter a prisão em flagrante em preventiva de ofício, cabendo-lhe relaxar a prisão ilegal ou conceder liberdade provisória com ou sem cautelares alternativas.", correta: true },
      { letra: "B", texto: "o juiz possui o dever de decretar a preventiva de ofício sempre que os antecedentes do agente forem desfavoráveis.", correta: false },
      { letra: "C", texto: "o magistrado pode determinar a prisão temporária por iniciativa própria para suprir a inércia do órgão ministerial.", correta: false },
      { letra: "D", texto: "a ausência de requerimento formal do Ministério Público autoriza a imposição imediata da pena privativa de liberdade em regime fechado.", correta: false },
      { letra: "E", texto: "a conversão de ofício é admitida excepcionalmente quando se tratar de crimes contra o patrimônio público municipal.", correta: false }
    ]
  },
  // Q46 - CEBRASPE / PRF - Prisões Cautelares / Revisão Nonagesimal (Art. 316 CPP)
  {
    idSlug: "procpen-046",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O art. 316, parágrafo único, do Código de Processo Penal estabelece que o órgão emissor da decisão deverá revisar a necessidade da manutenção da prisão preventiva a cada noventa dias, mediante decisão fundamentada, sob pena de tornar a prisão ilegal. Não obstante, o Plenário do Supremo Tribunal Federal (SL 1395) fixou o entendimento de que a inobservância desse prazo nonagesimal não acarreta a soltura automática do preso, cabendo ao tribunal instar a autoridade coatora para que fundamente a manutenção da custódia.",
    explicacao: "GABARITO: CERTO. O Plenário do STF (SL 1395/SP) pacificou que o vencimento do prazo de 90 dias do art. 316, parágrafo único, do CPP não gera a revogação automática da prisão preventiva nem o direito imediato à soltura, devendo o juízo competente ser instado a reavaliar a necessidade da custódia cautelar.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q47 - FGV / PM - Prisões Cautelares / Súmula Vinculante 11 (Uso de Algemas)
  {
    idSlug: "procpen-047",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "De acordo com o teor da Súmula Vinculante nº 11 do Supremo Tribunal Federal, o emprego de algemas em detidos durante diligências policiais ou atos processuais:",
    explicacao: "GABARITO: B. Súmula Vinculante nº 11 do STF: 'Só é lícito o uso de algemas em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, por parte do preso ou de terceiros, justificada a excepcionalidade por escrito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade da prisão ou do ato processual a que se refere, sem prejuízo da responsabilidade civil do Estado'.",
    alternativas: [
      { letra: "A", texto: "é obrigatório e irrestrito em todas as conduções policiais, independentemente da gravidade da conduta ou de fundamentação.", correta: false },
      { letra: "B", texto: "é medida excepcional, permitida apenas em caso de resistência, fundado receio de fuga ou perigo à integridade física própria ou alheia, exigida justificativa por escrito.", correta: true },
      { letra: "C", texto: "somente pode ser realizado com autorização prévia por ordem expressa expedida por juiz de direito.", correta: false },
      { letra: "D", texto: "é vedado terminantemente em qualquer hipótese de abordagem a agentes do sexo feminino.", correta: false },
      { letra: "E", texto: "constitui prerrogativa discricionária dos agentes, sendo desnecessária justificativa posterior mesmo se questionada a necessidade.", correta: false }
    ]
  },
  // Q48 - CEBRASPE / GM - Prisões Cautelares / Crime Permanente e Flagrante
  {
    idSlug: "procpen-048",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Nas infrações penais permanentes (como o crime de sequestro e cárcere privado ou o crime de depósito/guarda de substâncias entorpecentes ilícitas), entende-se o agente em flagrante delito enquanto não cessar a permanência da conduta ilícita.",
    explicacao: "GABARITO: CERTO. Art. 303 do CPP: 'Nas infrações permanentes, entende-se o agente em flagrante delito enquanto não cessar a permanência'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q49 - VUNESP / PM - Prisões Cautelares / Crimes Inafiançáveis
  {
    idSlug: "procpen-049",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 323 do Código de Processo Penal e do art. 5º da Constituição Federal, NÃO será concedida fiança nos crimes de:",
    explicacao: "GABARITO: A. Art. 323 do CPP e art. 5º, XLII, XLIII e XLIV da CF/88. São inafiançáveis: racismo, tortura, tráfico ilícito de entorpecentes e drogas afins, terrorismo, os definidos como crimes hediondos e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático. O crime culposo, a calúnia simples e o furto simples admitem fiança.",
    alternativas: [
      { letra: "A", texto: "tortura, tráfico ilícito de entorpecentes, terrorismo e crimes hediondos.", correta: true },
      { letra: "B", texto: "lesão corporal culposa na direção de veículo automotor sem embriaguez.", correta: false },
      { letra: "C", texto: "furto simples de coisa de pequeno valor.", correta: false },
      { letra: "D", texto: "calúnia praticada contra particular em meio privado.", correta: false },
      { letra: "E", texto: "dano simples ao patrimônio de particular sem violência.", correta: false }
    ]
  },
  // Q50 - IBFC / CBM - Prisões Cautelares / Descumprimento de Medidas Protetivas e Fiança
  {
    idSlug: "procpen-050",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No crime de descumprimento de medidas protetivas de urgência praticado no contexto de violência doméstica e familiar contra a mulher (art. 24-A da Lei nº 11.340/2006), caso o infrator seja preso em flagrante delito, a concessão de fiança:",
    explicacao: "GABARITO: C. Art. 24-A, § 2º, da Lei nº 11.340/2006: 'Na hipótese de prisão em flagrante, apenas a autoridade judicial poderá conceder fiança'. Trata-se de expressa vedação legal ao arbitramento de fiança pela autoridade policial (delegado de polícia).",
    alternativas: [
      { letra: "A", texto: "poderá ser arbitrada de imediato pelo Delegado de Polícia no valor mínimo legal.", correta: false },
      { letra: "B", texto: "é terminantemente vedada, tanto na fase policial quanto na fase judicial.", correta: false },
      { letra: "C", texto: "somente poderá ser concedida pela autoridade judicial, não cabendo à autoridade policial concedê-la.", correta: true },
      { letra: "D", texto: "depende de expressa anuência da vítima ou de seus familiares.", correta: false },
      { letra: "E", texto: "pode ser concedida diretamente pelos policiais militares condutores do flagrante.", correta: false }
    ]
  },
  // Q51 - CEBRASPE / PRF - Busca e Apreensão / Busca Veicular em Rodovias
  {
    idSlug: "procpen-051",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em operação de fiscalização em rodovia federal, policiais rodoviários federais podem proceder à busca no interior de veículo automotor, independentemente de mandado judicial, quando houver fundada suspeita de que nele estejam ocultos armas, drogas ilícitas, produtos de contrabando ou descaminho, ou quaisquer objetos que constituam corpo de delito.",
    explicacao: "GABARITO: CERTO. Art. 240, § 2º, do CPP: 'Proceder-se-á a busca pessoal quando houver fundada suspeita de que alguém oculte consigo arma proibida ou coisas achadas ou obtidas por meios criminosos...'. A busca veicular equipara-se à busca pessoal quanto à desnecessidade de mandado judicial prévio, exigindo-se justa causa / fundada suspeita idônea e demonstrável.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q52 - FGV / PM - Busca e Apreensão / Consentimento do Morador
  {
    idSlug: "procpen-052",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A 6ª Turma do Superior Tribunal de Justiça (HC 598.051/SP e reiterados precedentes de ambas as Turmas Criminais) fixou importantes diretrizes acerca do ingresso de agentes de segurança pública em domicílio alheio amparado em consentimento do morador. Sobre essa matéria, é correto afirmar que:",
    explicacao: "GABARITO: E. Conforme tese fixada pelo STJ (HC 598.051/SP e HC 616.584/RS), o consentimento do morador para entrada da polícia em sua residência deve ser voluntário e livre de qualquer coação, incumbindo ao Estado comprovar a voluntariedade do consentimento mediante registro audiovisual da operação ou termo de autorização assinado com testemunhas, sob pena de ilicitude da prova.",
    alternativas: [
      { letra: "A", texto: "o consentimento do morador é presumido tacitamente caso ele não reaja fisicamente contra os policiais fardados.", correta: false },
      { letra: "B", texto: "cabe exclusivamente à defesa do acusado comprovar que houve coação moral irresistível no momento da autorização de entrada.", correta: false },
      { letra: "C", texto: "a autorização de vizinhos do imóvel supre integralmente a ausência de consentimento do morador titular.", correta: false },
      { letra: "D", texto: "o ingresso com consentimento só é válido se ocorrido no período noturno mediante lavratura de termo notarial.", correta: false },
      { letra: "E", texto: "o consentimento do morador deve ser livre, voluntário e inequívoco, recaindo sobre o Estado o ônus de provar a legalidade do ato preferencialmente por registro audiovisual ou declaração assinada.", correta: true }
    ]
  },
  // Q53 - CEBRASPE / PM - Provas / Gravação Ambiental por um dos Interlocutores
  {
    idSlug: "procpen-053",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A gravação ambiental ou telefônica realizada clandestinamente por um dos interlocutores sem o conhecimento do outro é considerada prova lícita no processo penal, especialmente quando utilizada para fins de defesa ou em exercício de legítima defesa contra conduta criminosa.",
    explicacao: "GABARITO: CERTO. O STF (Tema 979 de Repercussão Geral e precedentes históricos) pacificou que a gravação ambiental feita por um dos interlocutores sem o conhecimento do outro (gravação clandestina) é lícita, notadamente quando realizada para comprovar a prática de crime ou resguardar direitos de defesa.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q54 - VUNESP / GM - Provas / Exame de Corpo de Delito
  {
    idSlug: "procpen-054",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Nos termos do art. 158 do Código de Processo Penal, quando a infração deixar vestígios, será indispensável o exame de corpo de delito, direto ou indireto:",
    explicacao: "GABARITO: B. Art. 158 do CPP: 'Quando a infração deixar vestígios, será indispensável o exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado'.",
    alternativas: [
      { letra: "A", texto: "podendo ser suprido integralmente pela confissão do acusado perante a autoridade policial.", correta: false },
      { letra: "B", texto: "não podendo supri-lo a confissão do acusado.", correta: true },
      { letra: "C", texto: "apenas se expressamente requisitado pelo advogado de defesa.", correta: false },
      { letra: "D", texto: "desde que o crime seja apenado exclusivamente com detenção.", correta: false },
      { letra: "E", texto: "sendo dispensável caso a vítima confirme os fatos em redes sociais.", correta: false }
    ]
  },
  // Q55 - IBFC / CBM - Provas / Perito Oficial e Não Oficial
  {
    idSlug: "procpen-055",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O art. 159 do Código de Processo Penal disciplina a realização do exame de corpo de delito e de outras perícias. A respeito dos peritos oficiais e não oficiais, assinale a alternativa correta:",
    explicacao: "GABARITO: D. Art. 159, caput e § 1º, do CPP. O exame de corpo de delito e outras perícias serão realizados por perito oficial, portador de diploma de curso superior (caput). Na falta de perito oficial, o exame será realizado por 2 (duas) pessoas idôneas, portadoras de diploma de curso superior preferencialmente na área específica (§ 1º).",
    alternativas: [
      { letra: "A", texto: "A perícia oficial exige obrigatoriamente a assinatura de pelo menos três peritos oficiais concursados.", correta: false },
      { letra: "B", texto: "Na falta de perito oficial, a perícia pode ser realizada por qualquer cidadão maior de 18 anos, independentemente de escolaridade.", correta: false },
      { letra: "C", texto: "Os peritos não oficiais não prestam compromisso de bem e fielmente desempenhar o encargo.", correta: false },
      { letra: "D", texto: "O exame pericial será realizado por um perito oficial e, na sua falta, por duas pessoas idôneas portadoras de diploma de curso superior.", correta: true },
      { letra: "E", texto: "Apenas médicos legistas podem atuar como peritos oficiais em qualquer tipo de perícia criminalística.", correta: false }
    ]
  },
  // Q56 - CEBRASPE / PRF - Jurisdição e Competência / Estelionato Eletrônico e Fraude Bancária
  {
    idSlug: "procpen-056",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos crimes de estelionato praticados mediante emissão de cheque sem suficiente provisão de fundos em poder do sacado ou com o pagamento frustrado, ou mediante transferência de valores (inclusive PIX ou TED), a competência territorial será determinada pelo local do domicílio da vítima, conforme expressa previsão legal inserida no art. 70, § 4º, do Código de Processo Penal pela Lei nº 14.155/2021.",
    explicacao: "GABARITO: CERTO. Art. 70, § 4º, do CPP: 'Nos crimes previstos no art. 171 do Código Penal, quando praticados mediante a emissão de cheques sem suficiente provisão de fundos em poder do sacado ou com o pagamento frustrado ou mediante transferência de valores, a competência será definida pelo local do domicílio da vítima, e, em caso de pluralidade de vítimas, a competência firmar-se-á pela prevenção'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q57 - FGV / PM - Jurisdição e Competência / Competência da Justiça Militar Estadual
  {
    idSlug: "procpen-057",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Policial militar em serviço, durante patrulhamento ostensivo em via pública, efetua disparos de arma de fogo com 'animus necandi' contra um civil desarmado, resultando na morte imediata deste. À luz do art. 125, § 4º, da Constituição Federal, a competência para processar e julgar o referido crime doloso contra a vida é:",
    explicacao: "GABARITO: B. Art. 125, § 4º, da CF/88: 'Compete à Justiça Militar estadual processar e julgar os militares dos Estados, nos crimes militares definidos em lei e as ações judiciais contra atos disciplinares militares, ressalvada a competência do júri quando a vítima for civil'. Portanto, o homicídio doloso cometido por militar contra civil é julgado pela Justiça Comum perante o Tribunal do Júri.",
    alternativas: [
      { letra: "A", texto: "da Justiça Militar Estadual, perante o Conselho Especial de Justiça.", correta: false },
      { letra: "B", texto: "do Tribunal do Júri da Justiça Comum Estadual.", correta: true },
      { letra: "C", texto: "da Justiça Federal, perante a Vara Federal Criminal da respectiva subseção.", correta: false },
      { letra: "D", texto: "do Juizado Especial Criminal da respectiva comarca.", correta: false },
      { letra: "E", texto: "do Superior Tribunal Militar, em competência originária exclusiva.", correta: false }
    ]
  },
  // Q58 - CEBRASPE / GM - Jurisdição e Competência / Desaforamento no Júri
  {
    idSlug: "procpen-058",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O desaforamento do julgamento perante o Tribunal do Júri para outra comarca da mesma região poderá ser determinado pelo Tribunal de Justiça se o interesse da ordem pública o reclamar, se houver dúvida sobre a imparcialidade do júri ou sobre a segurança pessoal do acusado.",
    explicacao: "GABARITO: CERTO. Art. 427, caput, do CPP: 'Se o interesse da ordem pública o reclamar ou houver dúvida sobre a imparcialidade do júri ou a segurança pessoal do acusado, o Tribunal, a requerimento do Ministério Público, do assistente, do querelante ou do acusado ou mediante representação do juiz competente, poderá determinar o desaforamento do julgamento para outra comarca da mesma região, onde não existam aqueles motivos, preferindo-se as mais próximas'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q59 - VUNESP / PM - Nulidades / Ausência de Defesa e Súmula 523 STF
  {
    idSlug: "procpen-059",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "A Súmula nº 523 do Supremo Tribunal Federal estabelece importante parâmetro sobre a garantia da ampla defesa e as nulidades processuais no âmbito penal. Segundo o referido enunciado sumular:",
    explicacao: "GABARITO: A. Súmula 523 do STF: 'No processo penal, a falta da defesa constitui nulidade absoluta, mas a sua deficiência só o anulará se houver prova de prejuízo para o réu'.",
    alternativas: [
      { letra: "A", texto: "no processo penal, a falta da defesa constitui nulidade absoluta, mas a sua deficiência só o anulará se houver prova de prejuízo para o réu.", correta: true },
      { letra: "B", texto: "a deficiência da defesa técnica constitui sempre nulidade absoluta insuscetível de demonstração de prejuízo.", correta: false },
      { letra: "C", texto: "a ausência de defesa é mera irregularidade processual convalidável a qualquer tempo.", correta: false },
      { letra: "D", texto: "a falta de intimação do réu solto para audiência extingue imediatamente a punibilidade.", correta: false },
      { letra: "E", texto: "a Defensoria Pública não pode atuar em causas criminais sem prévia procuração expressa com poderes especiais.", correta: false }
    ]
  },
  // Q60 - IBFC / CBM - Provas / Interceptação Telefônica (Lei 9.296/96)
  {
    idSlug: "procpen-060",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A interceptação de comunicações telefônicas, disciplinada pela Lei nº 9.296/1996 e pelo art. 5º, XII, da Constituição Federal, NÃO será admitida quando:",
    explicacao: "GABARITO: E. Art. 2º da Lei nº 9.296/1996: 'Não será admitida a interceptação de comunicações telefônicas quando ocorrer qualquer das seguintes hipóteses: I - não houver indícios razoáveis da autoria ou participação em infração penal; II - a prova puder ser feita por outros meios disponíveis; III - o fato investigado constituir infração penal punida, no máximo, com pena de detenção'. Portanto, para infrações punidas apenas com detenção, a interceptação é legalmente inadmissível.",
    alternativas: [
      { letra: "A", texto: "houver indícios suficientes de autoria em crime apenado com reclusão.", correta: false },
      { letra: "B", texto: "a apuração for indispensável e impossível de ser realizada por outros meios probatórios menos invasivos.", correta: false },
      { letra: "C", texto: "for autorizada fundamentadamente por decisão de juiz competente para a ação principal.", correta: false },
      { letra: "D", texto: "for requerida pelo Ministério Público na fase de inquérito policial.", correta: false },
      { letra: "E", texto: "o fato investigado constituir infração penal punida, no máximo, com pena de detenção.", correta: true }
    ]
  }
];
