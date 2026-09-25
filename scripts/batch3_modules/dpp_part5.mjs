import { TAXONOMIA } from "./taxonomia.mjs";

export const chunk5 = [
  // 061 - Ação Penal nos Crimes Sexuais (C/E)
  {
    idSlug: "batch3-dpp-061",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Após as alterações promovidas pela Lei nº 13.718/2018 no art. 225 do Código Penal, todos os crimes definidos no Título dos Crimes Contra a Dignidade Sexual (como estupro, importunação sexual e estupro de vulnerável) passaram a ser processados mediante ação penal pública incondicionada, independentemente da idade, da vulnerabilidade ou da manifestação de vontade da vítima.",
    explicacao: "GABARITO: CERTO. Art. 225 do CP (redação dada pela Lei 13.718/2018): 'Nos crimes definidos nos Capítulos I e II deste Título, procede-se mediante ação penal pública incondicionada'. A alteração legislativa suprimiu a necessidade de representação da vítima maior e capaz, unificando todos os crimes sexuais sob a titularidade pública incondicionada do Ministério Público.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A ação penal em crimes contra a dignidade sexual é pública incondicionada em todas as suas modalidades desde 2018."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. A Lei 13.718/2018 tornou incondicionada a ação penal para todos os crimes contra a dignidade sexual."
      }
    ]
  },

  // 062 - Justa Causa na Ação Penal (M/E)
  {
    idSlug: "batch3-dpp-062",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "FGV",
    orgao_nome: "PC-RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito do conceito de 'justa causa' como condição de admissibilidade da ação penal (art. 395, III, do CPP) e da jurisprudência consolidada do Superior Tribunal de Justiça e do Supremo Tribunal Federal, assinale a opção correta:",
    explicacao: "GABARITO: C. A justa causa consiste na exigência de um suporte probatório mínimo (lastro probatório idôneo) composto pela comprovação da materialidade da infração penal e indícios suficientes de autoria ou participação, aptos a evitar acusações temerárias ou infundadas em juízo.",
    alternativas: [
      {
        letra: "A",
        texto: "A justa causa confunde-se com o juízo de certeza absoluta necessário para a prolação de sentença condenatória final.",
        correta: false,
        explicacao_especifica: "Para o recebimento da denúncia exige-se apenas juízo de probabilidade (fumus comissi delicti) e não certeza condenatória exauriente."
      },
      {
        letra: "B",
        texto: "A ausência de justa causa enseja a declaração de absolvição sumária no primeiro grau de jurisdição com força de coisa julgada material.",
        correta: false,
        explicacao_especifica: "A falta de justa causa acarreta a rejeição liminar da peça acusatória (art. 395, III CPP) ou trancamento em habeas corpus, sem mérito definitivo."
      },
      {
        letra: "C",
        texto: "A justa causa consubstancia-se no lastro probatório mínimo e idôneo demonstrativo da materialidade do fato delituoso e de indícios suficientes de autoria, protegendo o indivíduo contra persecuções penais infundadas.",
        correta: true,
        explicacao_especifica: "Conceito dogmático e jurisprudencial pacífico sobre o art. 395, III do CPP."
      },
      {
        letra: "D",
        texto: "A justa causa pode ser suprida pelo clamor público veiculado nas redes sociais digitais.",
        correta: false,
        explicacao_especifica: "O clamor social e as manifestações públicas não possuem natureza probatória para amparar a ação penal."
      },
      {
        letra: "E",
        texto: "A comprovação de álibi inconcluso pelo réu durante o inquérito afasta sumariamente a justa causa da denúncia.",
        correta: false,
        explicacao_especifica: "Dúvidas razoáveis sobre álibis devem ser dirimidas na instrução processual sob o contraditório regular."
      }
    ]
  },

  // 063 - Juiz das Garantias: ADI 6298 STF (C/E)
  {
    idSlug: "batch3-dpp-063",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Ao concluir o julgamento conjunto das Ações Diretas de Inconstitucionalidade nº 6.298, 6.299, 6.300 e 6.305 em agosto de 2023, o Plenário do Supremo Tribunal Federal declarou a constitucionalidade da criação do Juiz das Garantias (arts. 3º-A a 3º-F do CPP), fixando a sua implementação obrigatória em todo o território nacional e conferindo prazo de transição de até 24 meses, prorrogável por mais 12 meses pelo Conselho Nacional de Justiça (CNJ), para que os Tribunais procedam às adequações estruturais necessárias.",
    explicacao: "GABARITO: CERTO. STF, Plenário, ADIs 6.298, 6.299, 6.300 e 6.305 (Rel. Min. Luiz Fux, julgamento em agosto/2023): O STF declarou a constitucionalidade do instituto do juiz das garantias como norma de processo penal de competência privativa da União, estabelecendo prazo de implementação obrigatória de 12 meses (prorrogável por mais 12 ou até 24 meses sob supervisão do CNJ) pelos Tribunais de Justiça e Tribunais Regionais Federais.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O STF fixou a obrigatoriedade nacional do Juiz das Garantias e estabeleceu cronograma de implementação supervisionado pelo CNJ."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. A Suprema Corte superou a liminar anterior e confirmou a validade constitucional do modelo acusatório de garantias."
      }
    ]
  },

  // 064 - Competência do Juiz das Garantias (M/E)
  {
    idSlug: "batch3-dpp-064",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em conformidade com a interpretação fixada pelo Pleno do Supremo Tribunal Federal nas ADIs 6.298 e 6.300 sobre o art. 3º-C do Código de Processo Penal, a competência funcional do Juiz das Garantias abrange a fase da investigação criminal e:",
    explicacao: "GABARITO: B. No julgamento das ADIs 6.298 e correlatas, o STF conferiu interpretação conforme ao art. 3º-C do CPP para fixar que a competência do Juiz das Garantias cessa no momento do recebimento da denúncia ou queixa-crime, cabendo ao juiz da instrução e julgamento a análise do recebimento da exordial acusatória.",
    alternativas: [
      {
        letra: "A",
        texto: "Estende-se até a prolação da sentença absolutória ou condenatória em audiência de instrução e julgamento.",
        correta: false,
        explicacao_especifica: "O Juiz das Garantias atua apenas na fase pré-processual inquisitorial, não instruindo nem julgando o mérito da ação."
      },
      {
        letra: "B",
        texto: "Cessa com o oferecimento da denúncia ou queixa, cabendo a decisão sobre o recebimento da peça acusatória ao juiz da instrução e julgamento.",
        correta: true,
        explicacao_especifica: "Tese fixada pelo Supremo Tribunal Federal na modulação do art. 3º-C do Código de Processo Penal."
      },
      {
        letra: "C",
        texto: "Inclui a condução da audiência de pronúncia no procedimento escalonado do Tribunal do Júri.",
        correta: false,
        explicacao_especifica: "O STF excluiu expressamente a incidência do juiz das garantias no rito especial do Tribunal do Júri."
      },
      {
        letra: "D",
        texto: "Abrange a fiscalização da execução definitiva das penas restritivas de direitos e multas penais.",
        correta: false,
        explicacao_especifica: "A execução penal é de competência do Juízo das Execuções Penais (Lei 7.210/84)."
      },
      {
        letra: "E",
        texto: "Autoriza a decretação de medidas assecuratórias patrimoniais ex officio durante as investigações policiais.",
        correta: false,
        explicacao_especifica: "O art. 3º-A do CPP veda expressamente qualquer atuação judicial de ofício na fase pré-processual."
      }
    ]
  },

  // 065 - Juiz das Garantias: Exceções e Ritos Excluídos (C/E)
  {
    idSlug: "batch3-dpp-065",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Distrito Federal (PC-DF)",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com o entendimento firmado pelo Supremo Tribunal Federal no julgamento das ADIs do Pacote Anticrime (ADI 6298/DF), o instituto do Juiz das Garantias não se aplica aos processos de competência originária dos Tribunais, aos processos de competência do Tribunal do Júri, aos procedimentos de apuração de violência doméstica e familiar contra a mulher (Lei Maria da Penha) e aos crimes de menor potencial ofensivo sob o rito dos Juizados Especiais Criminais (Lei nº 9.099/1995).",
    explicacao: "GABARITO: CERTO. STF, ADIs 6.298, 6.299, 6.300 e 6.305: O Plenário fixou que o instituto do juiz das garantias não incide nas causas de competência originária dos Tribunais (STF, STJ, TJs, TRFs), nos Juizados Especiais Criminais (JECRIM), nos processos de competência do Tribunal do Júri e nos casos regidos pela Lei Maria da Penha (Lei nº 11.340/2006).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A Suprema Corte fixou expressamente o rol de exclusões da obrigatoriedade do Juiz das Garantias (Júri, Maria da Penha, JECRIM e Competência Originária)."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. Reflete as exceções expressamente estabelecidas no acórdão vinculante do STF."
      }
    ]
  },

  // 066 - Competência pelo Lugar da Infração / Estelionato Virtual (M/E)
  {
    idSlug: "batch3-dpp-066",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "FCC",
    orgao_nome: "PC-AP",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Com a inclusão do § 4º no art. 70 do Código de Processo Penal pela Lei nº 14.155/2021, a fixação da competência territorial para o processo e julgamento do crime de estelionato (art. 171 do CP) praticado mediante depósito, emissão de cheque sem suficiente provisão de fundos ou mediante transferência de valores (incluindo transferências eletrônicas via PIX) passou a ser determinada:",
    explicacao: "GABARITO: D. Art. 70, § 4º do CPP: 'Nos crimes previstos no art. 171 do Decreto-Lei nº 2.848, de 7 de dezembro de 1940 (Código Penal), quando praticados mediante depósito, mediante emissão de cheques sem suficiente provisão de fundos em poder do sacado ou com o pagamento frustrado ou mediante transferência de valores, a competência será definida pelo local do domicílio da vítima, e, em caso de pluralidade de vítimas, a competência firmar-se-á pela prevenção'.",
    alternativas: [
      {
        letra: "A",
        texto: "Pelo local da agência bancária em que o estelionatário mantém a conta de destino dos fundos.",
        correta: false,
        explicacao_especifica: "Essa era a regra jurisprudencial antiga superada pela alteração legislativa da Lei 14.155/2021."
      },
      {
        letra: "B",
        texto: "Pelo local em que o servidor de internet hospeda a plataforma de mensagens utilizada no golpe.",
        correta: false,
        explicacao_especifica: "A localização de servidores telemáticos é irrelevante para a competência territorial penal."
      },
      {
        letra: "C",
        texto: "Obrigatoriamente pela Justiça Federal da Capital da República.",
        correta: false,
        explicacao_especifica: "O estelionato comum contra particulares permanece na competência da Justiça Estadual ordinária."
      },
      {
        letra: "D",
        texto: "Pelo local do domicílio da vítima, e, em caso de pluralidade de vítimas, a competência firmar-se-á pela prevenção.",
        correta: true,
        explicacao_especifica: "Transcrição fiel do art. 70, § 4º do Código de Processo Penal."
      },
      {
        letra: "E",
        texto: "Pelo local da residência do sacador ou coautor do delito patrimonial.",
        correta: false,
        explicacao_especifica: "A regra protetiva estabelecida no § 4º prestigia expressamente o domicílio do ofendido."
      }
    ]
  },

  // 067 - Conexão e Continência (C/E)
  {
    idSlug: "batch3-dpp-067",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "No concurso entre a jurisdição comum e a do Tribunal do Júri, havendo conexão ou continência entre crime doloso contra a vida e crime comum conexo (como o homicídio doloso praticado em conexão com porte ilegal de arma de fogo ou roubo), prevalecerá a competência do Tribunal do Júri para o julgamento conjunto de todas as infrações penais (art. 78, I do CPP).",
    explicacao: "GABARITO: CERTO. Art. 78, I do CPP: 'Na determinação da competência por conexão ou continência, serão observadas as seguintes regras: I - no concurso entre a competência do júri e a de outro órgão da jurisdição comum, prevalecerá a competência do júri'. A soberania constitucional do Júri (art. 5º, XXXVIII CF) atrai o julgamento dos delitos comuns conexos.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A competência do Júri é prevalente e atrai os crimes comuns conexos por força do art. 78, I do CPP."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. Descreve a clássica e pacífica regra de atração da competência pelo Tribunal do Júri."
      }
    ]
  },

  // 068 - Competência da Justiça Federal (M/E)
  {
    idSlug: "batch3-dpp-068",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 109, incisos IV e V, da Constituição Federal e da jurisprudência pacificada do Superior Tribunal de Justiça, compete aos juízes federais processar e julgar:",
    explicacao: "GABARITO: E. Art. 109, IV da CF: infrações penais praticadas em detrimento de bens, serviços ou interesses da União ou de suas entidades autárquicas ou empresas públicas federais, excluídas as contravenções e ressalvada a competência da Justiça Militar e Eleitoral; e art. 109, V: crimes previstos em tratados internacionais quando iniciada a execução no País e o resultado tenha ocorrido ou devesse ter ocorrido no exterior (como o tráfico internacional de drogas). A Súmula 555 do STJ e Súmula 38 do STJ fixam que contravenção é sempre da Justiça Estadual, e sociedade de economia mista federal (como o Banco do Brasil) é da Justiça Estadual (Súmula 42/STJ).",
    alternativas: [
      {
        letra: "A",
        texto: "Todas as contravenções penais praticadas a bordo de navios ou aeronaves em território nacional.",
        correta: false,
        explicacao_especifica: "O art. 109, IV da CF exclui expressamente as contravenções penais da competência da Justiça Federal (Súmula 38 do STJ)."
      },
      {
        letra: "B",
        texto: "Os crimes praticados contra o patrimônio de sociedades de economia mista federais, como o Banco do Brasil.",
        correta: false,
        explicacao_especifica: "Sociedades de economia mista não estão no rol do art. 109, IV (Súmula 42 do STJ: compete à Justiça Estadual)."
      },
      {
        letra: "C",
        texto: "Os homicídios cometidos por policiais militares em serviço em rodovia estadual.",
        correta: false,
        explicacao_especifica: "Compete à Justiça Estadual (Vara do Júri)."
      },
      {
        letra: "D",
        texto: "Qualquer delito patrimonial praticado em detrimento de fundações públicas instituídas por municípios.",
        correta: false,
        explicacao_especifica: "Bens municipais atraem a competência da Justiça Estadual Comum."
      },
      {
        letra: "E",
        texto: "As infrações penais praticadas em detrimento de bens, serviços ou interesse da União, suas autarquias ou empresas públicas federais, e os crimes transnacionais previstos em tratados quando iniciada a execução no País e o resultado deva ocorrer no exterior.",
        correta: true,
        explicacao_especifica: "Reprodução exata dos incisos IV e V do art. 109 da Constituição Federal."
      }
    ]
  },

  // 069 - Desaforamento no Tribunal do Júri (C/E)
  {
    idSlug: "batch3-dpp-069",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Militar do Ceará (PMCE)",
    cargo_nome: "Oficial da PM",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos processos de competência do Tribunal do Júri, se o interesse da ordem pública o reclamar ou houver dúvida sobre a imparcialidade do júri ou sobre a segurança pessoal do acusado, o Tribunal de Justiça, a requerimento do Ministério Público, do assistente, do querelante ou do acusado ou mediante representação do juiz competente, poderá determinar o desaforamento do julgamento para outra comarca da mesma região, onde não existam aqueles motivos (art. 427 do CPP).",
    explicacao: "GABARITO: CERTO. Art. 427 do CPP: 'Se o interesse da ordem pública o reclamar ou houver dúvida sobre a imparcialidade do júri ou a segurança pessoal do acusado, o Tribunal, a requerimento do Ministério Público, do assistente, do querelante ou do acusado ou mediante representação do juiz competente, poderá determinar o desaforamento do julgamento para outra comarca da mesma região, onde não existam aqueles motivos, preferindo-se as mais próximas'.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A assertiva descreve perfeitamente as hipóteses, legitimados e procedimento legal do desaforamento no Tribunal do Júri (art. 427 CPP)."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. Reproduz fielmente a sistemática do art. 427 do Código de Processo Penal."
      }
    ]
  },

  // 070 - Foro por Prerrogativa de Função (M/E)
  {
    idSlug: "batch3-dpp-070",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação à competência penal originária por prerrogativa de função (foro privilegiado) e à jurisprudência do Supremo Tribunal Federal (incluindo o julgamento da Questão de Ordem na AP nº 937 e a recente evolução jurisprudencial firmada pelo Plenário), assinale a afirmativa correta:",
    explicacao: "GABARITO: A. No julgamento da AP 937 QO, o STF fixou que o foro por prerrogativa de função aplica-se apenas aos crimes cometidos durante o exercício do cargo e relacionados às funções desempenhadas. Além disso, em evolução jurisprudencial (HC 232.627/DF e Inq 4.787), o STF consolidou que, uma vez fixada a competência do Tribunal para julgar o crime funcional praticado durante o mandato, a posterior cessação do mandato (por renúncia, não reeleição ou cassação) não desloca a competência para o primeiro grau se o delito foi praticado no cargo e em razão dele.",
    alternativas: [
      {
        letra: "A",
        texto: "O foro por prerrogativa de função alcança os crimes cometidos durante o exercício do cargo e em razão das funções institucionais, mantendo-se a competência do Tribunal mesmo após o término do mandato quanto aos delitos funcionais praticados no período.",
        correta: true,
        explicacao_especifica: "Síntese precisa da jurisprudência consolidada do Plenário do STF sobre a prerrogativa de foro funcional."
      },
      {
        letra: "B",
        texto: "A prerrogativa de foro atrai automaticamente todos os crimes comuns praticados pelo parlamentar antes mesmo de sua diplomação ou posse.",
        correta: false,
        explicacao_especifica: "Crimes cometidos antes da posse ou sem relação com as funções parlamentares não gozam de foro especial no STF (AP 937 QO)."
      },
      {
        letra: "C",
        texto: "A renúncia ao mandato parlamentar em qualquer fase processual tem o condão de anular todos os atos instrutórios praticados no STF.",
        correta: false,
        explicacao_especifica: "A renúncia não anula atos e não desloca o feito se já encerrada a instrução ou se configurado abuso de direito."
      },
      {
        letra: "D",
        texto: "O foro por prerrogativa de função estende-se indistintamente a todos os coautores e partícipes que não exerçam cargo com prerrogativa, sendo proibido o desmembramento do processo.",
        correta: false,
        explicacao_especifica: "A regra geral é o desmembramento do processo quanto aos corréus sem foro (art. 80 CPP e Súmula 704 STF)."
      },
      {
        letra: "E",
        texto: "A Constituição Estadual pode criar foro por prerrogativa de função para qualquer autoridade municipal perante a Justiça Federal de primeiro grau.",
        correta: false,
        explicacao_especifica: "A competência da Justiça Federal é matéria de competência privativa da União regulada pela Constituição Federal (art. 109 CF)."
      }
    ]
  }
];
