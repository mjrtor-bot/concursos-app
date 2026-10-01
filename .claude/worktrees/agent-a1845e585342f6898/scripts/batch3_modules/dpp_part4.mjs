import { TAXONOMIA } from "./taxonomia.mjs";

export const chunk4 = [
  // 046 - Busca e Apreensão: Requisitos do Mandado (M/E)
  {
    idSlug: "batch3-dpp-046",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "VUNESP",
    orgao_nome: "PC-SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 243 do Código de Processo Penal, o mandado de busca e apreensão domiciliar deverá preencher requisitos essenciais para sua validade jurídica formal. A respeito desses requisitos, assinale a opção correta:",
    explicacao: "GABARITO: C. Art. 243 do CPP: 'O mandado de busca deverá: I - indicar, o mais precisamente possível, a casa em que será realizada a diligência e o nome do seu morador ou proprietário ou, no caso de busca pessoal, o nome da pessoa que terá de sofrê-la ou os motivos que a determinem; II - mencionar o motivo e os fins da diligência; III - ser subscrito pelo escrivão e assinado pela autoridade que o fizer expedir'.",
    alternativas: [
      {
        letra: "A",
        texto: "O mandado genérico ou coletivo sem indicação precisa do endereço é válido quando se tratar de operação policial em comunidade conflagrada.",
        correta: false,
        explicacao_especifica: "O STF e o STJ vedam expressamente a expedição de mandados genéricos ou coletivos (mandados 'guarda-chuva')."
      },
      {
        letra: "B",
        texto: "A assinatura do mandado pela autoridade judiciária é facultativa, bastando a chancela do chefe de cartório da delegacia.",
        correta: false,
        explicacao_especifica: "O mandado deve ser assinado obrigatoriamente pela autoridade judicial competente (art. 243, III CPP)."
      },
      {
        letra: "C",
        texto: "O mandado deve indicar, com a maior precisão possível, a residência em que será realizada a diligência e o nome do morador, além de mencionar o motivo e a finalidade da medida, sendo assinado pela autoridade judiciária.",
        correta: true,
        explicacao_especifica: "Reproduz fielmente os requisitos cumulativos previstos no art. 243 do Código de Processo Penal."
      },
      {
        letra: "D",
        texto: "O mandado autoriza a apreensão indiscriminada de todos os bens encontrados no local, mesmo que sem relação com a investigação.",
        correta: false,
        explicacao_especifica: "A busca e apreensão vincula-se aos limites e motivos declarados na ordem judicial (fishing expedition é vedado)."
      },
      {
        letra: "E",
        texto: "A ausência de testemunhas na diligência torna desnecessária a lavratura de auto circunstanciado ao término das buscas.",
        correta: false,
        explicacao_especifica: "O art. 245, § 7º impõe a lavratura de auto circunstanciado com assinatura de duas testemunhas presenciais."
      }
    ]
  },

  // 047 - Quarto de Hotel e Domicílio (C/E)
  {
    idSlug: "batch3-dpp-047",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Para fins de proteção da garantia fundamental da inviolabilidade de domicílio (art. 5º, XI da Constituição Federal) e das regras de busca e apreensão do CPP, o conceito jurídico-penal de domicílio é amplo, abrangendo qualquer aposento ocupado de habitação coletiva, como o quarto de hotel ocupado por hóspede, não podendo a autoridade policial nele ingressar sem autorização judicial ou consentimento válido do ocupante, ressalvadas as hipóteses constitucionais de flagrante delito ou socorro.",
    explicacao: "GABARITO: CERTO. Art. 150, § 4º, II do CP c/c art. 5º, XI da CF/88 e jurisprudência pacífica do STF (RHC 90.376) e STJ: o quarto de hotel ocupado qualifica-se como domicílio para fins de proteção constitucional, sendo nula a busca policial realizada sem mandado judicial ou sem demonstração de flagrância prévia.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O quarto de hotel ocupado é juridicamente equiparado a domicílio, gozando de plena inviolabilidade constitucional."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A assertiva está correta. A jurisprudência consolidada tutela o quarto de hotel habitado sob a proteção do art. 5º, XI da CF/88."
      }
    ]
  },

  // 048 - Serendipidade / Encontro Fortuito (M/E)
  {
    idSlug: "batch3-dpp-048",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "FGV",
    orgao_nome: "PC-RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Durante a execução regular de mandado de busca e apreensão expedido pelo juízo criminal para apurar crime de lavagem de dinheiro em residência, policiais civis encontraram em um dos cômodos 5 kg de substância análoga a crack e armas de fogo com numeração suprimida, cuja existência era ignorada na investigação original. A respeito do encontro fortuito de provas (serendipidade) na busca domiciliar, assinale a afirmativa correta:",
    explicacao: "GABARITO: A. No processo penal brasileiro, vigora a teoria da serendipidade (encontro fortuito de provas): quando a autoridade policial, no cumprimento legítimo e regular de uma medida cautelar de busca e apreensão, descobre fortuitamente elementos de outros crimes (conexos ou não), as provas obtidas são plenamente lícitas e válidas, autorizando a imediata autuação em flagrante delito.",
    alternativas: [
      {
        letra: "A",
        texto: "A apreensão dos entorpecentes e das armas é plenamente válida e legítima com base no fenômeno da serendipidade de primeiro grau, pois a diligência original transcorria dentro da legalidade.",
        correta: true,
        explicacao_especifica: "Conforme jurisprudência pacífica do STF e STJ, o encontro fortuito de provas em diligência regular é plenamente lícito."
      },
      {
        letra: "B",
        texto: "Os objetos descobertos casualmente constituem prova ilícita por desvio de finalidade do mandado judicial originário.",
        correta: false,
        explicacao_especifica: "Não há desvio de finalidade quando o encontro do objeto ilícito ocorre de forma fortuita no cumprimento de mandado regular."
      },
      {
        letra: "C",
        texto: "A autoridade policial deveria ter lacrado o cômodo e requerido novo mandado de busca específico antes de apreender os ilícitos.",
        correta: false,
        explicacao_especifica: "Tratando-se de flagrante delito de crimes permanentes (posse de arma e depósito de drogas), a apreensão é imediata e compulsória."
      },
      {
        letra: "D",
        texto: "A prova obtida por serendipidade só é admissível se o novo delito apurado for apenado com pena privativa de liberdade superior a 10 anos.",
        correta: false,
        explicacao_especifica: "Não há qualquer restrição de pena mínima ou máxima para a validade do encontro fortuito de provas."
      },
      {
        letra: "E",
        texto: "O encontro fortuito de provas só é admitido em crimes contra a administração pública federal.",
        correta: false,
        explicacao_especifica: "A serendipidade é plenamente aplicável a qualquer infração penal no processo penal brasileiro."
      }
    ]
  },

  // 049 - Busca em Mulher (C/E)
  {
    idSlug: "batch3-dpp-049",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Militar do Distrito Federal (PMDF)",
    cargo_nome: "Soldado da PM",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Em conformidade com o art. 249 do Código de Processo Penal, a busca pessoal em mulher será obrigatoriamente realizada por outra mulher, não admitindo a legislação qualquer exceção, mesmo que a diligência importe em retardamento excessivo ou prejuízo grave e irreparável à ação policial.",
    explicacao: "GABARITO: ERRADO. Art. 249 do CPP: 'A busca em mulher será feita por outra mulher, se não importar retardamento ou prejuízo da diligência'. A lei admite expressamente a exceção na hipótese de risco de retardamento ou prejuízo à diligência policial urgente.",
    alternativas: [
      {
        texto: "Certo",
        correta: false,
        explicacao_especifica: "O item está errado porque o art. 249 do CPP expressamente ressalva as situações em que a exigência importar retardamento ou prejuízo da diligência."
      },
      {
        texto: "Errado",
        correta: true,
        explicacao_especifica: "A assertiva incorre em erro ao afirmar que a regra não admite qualquer exceção, desconsiderando a parte final do art. 249 do CPP."
      }
    ]
  },

  // 050 - Busca em Escritório de Advocacia (M/E)
  {
    idSlug: "batch3-dpp-050",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "FCC",
    orgao_nome: "PC-AP",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos termos do Estatuto da OAB (Lei nº 8.906/1994, art. 7º, II e §§ 6º e 6º-I) e das garantias de inviolabilidade profissional, a realização de busca e apreensão no local de trabalho do advogado (escritório de advocacia):",
    explicacao: "GABARITO: D. Art. 7º, § 6º da Lei 8.906/94 (alterada pela Lei 14.365/2022): o mandado de busca e apreensão em escritório de advocacia exige decisão judicial motivada com indícios de autoria do próprio advogado em crime, expedição de mandado específico e pormenorizado, vedada ordem genérica, e presença de representante da OAB para acompanhar a diligência.",
    alternativas: [
      {
        letra: "A",
        texto: "É vedada em qualquer circunstância em face do sigilo absoluto conferido à profissão de advogado pela Constituição Federal.",
        correta: false,
        explicacao_especifica: "A inviolabilidade não é absoluta e cede quando o próprio advogado for investigado como coautor ou partícipe de crime."
      },
      {
        letra: "B",
        texto: "Pode ser determinada pela autoridade policial sem ordem judicial se houver flagrante de crime contra a ordem tributária praticado por cliente.",
        correta: false,
        explicacao_especifica: "A diligência exige expressa ordem judicial fundamentada e é vedada para apuração de ilícito imputado exclusivamente a cliente."
      },
      {
        letra: "C",
        texto: "Autoriza a apreensão de todos os computadores, arquivos e documentos de todos os clientes atendidos pelo escritório.",
        correta: false,
        explicacao_especifica: "A lei veda a busca e apreensão indiscriminada (fishing expedition), restringindo-se aos elementos ligados ao fato investigado."
      },
      {
        letra: "D",
        texto: "Exige decisão judicial motivada que aponte indícios de autoria do próprio advogado em ilícito, mandado específico e pormenorizado e acompanhamento obrigatório por representante designado pela OAB.",
        correta: true,
        explicacao_especifica: "Reflete com fidelidade as exigências do art. 7º, §§ 6º e 6º-I da Lei nº 8.906/1994."
      },
      {
        letra: "E",
        texto: "Dispensa a presença de membro da OAB caso a autoridade policial convoque duas testemunhas do povo.",
        correta: false,
        explicacao_especifica: "A presença de representante da OAB é garantia legal expressa para a validade do ato."
      }
    ]
  },

  // 051 - Restituição de Coisas Apreendidas (C/E)
  {
    idSlug: "batch3-dpp-051",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Em conformidade com o art. 118 do Código de Processo Penal, antes de transitar em julgado a sentença final, as coisas apreendidas no curso da persecução penal não poderão ser restituídas enquanto interessarem ao processo.",
    explicacao: "GABARITO: CERTO. Art. 118 do CPP: 'Antes de transitar em julgado a sentença final, as coisas apreendidas não poderão ser restituídas enquanto interessarem ao processo'.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A manutenção das coisas sob custódia estatal enquanto forem úteis e necessárias ao processo criminal decorre de expressa imposição legal."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. Reproduz ipsis litteris a redação do art. 118 do Código de Processo Penal."
      }
    ]
  },

  // 052 - Bens Apreendidos no Tráfico (M/E)
  {
    idSlug: "batch3-dpp-052",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "AOCP",
    orgao_nome: "PC-GO",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos procedimentos previstos na Lei de Drogas (Lei nº 11.343/2006) e na Constituição Federal (art. 243, parágrafo único), a respeito dos bens, veículos e valores apreendidos decorrentes do tráfico ilícito de entorpecentes, assinale a afirmativa correta:",
    explicacao: "GABARITO: B. A Lei nº 11.343/2006 (arts. 60 a 62) autoriza a alienação cautelar de bens sujeitos a deterioração ou desvalorização e o uso provisório de veículos pelos órgãos de segurança pública. Além disso, o STF fixou no Tema 647 (RE 638.491) que o confisco de bens pelo art. 243, parágrafo único da CF independe de habitualidade no tráfico.",
    alternativas: [
      {
        letra: "A",
        texto: "Os veículos apreendidos no tráfico devem obrigatoriamente permanecer lacrados em pátio aberto até o trânsito em julgado, sendo vedada sua alienação antecipada ou utilização por órgãos policiais.",
        correta: false,
        explicacao_especifica: "O art. 62 da Lei 11.343/06 expressamente prevê a alienação cautelar antecipada e a destinação de uso aos órgãos policiais."
      },
      {
        letra: "B",
        texto: "O juiz poderá autorizar, constatado o interesse público, a utilização provisória de veículos, embarcações e aeronaves apreendidos pelos órgãos de polícia judiciária e de segurança pública envolvidos na repressão ao tráfico.",
        correta: true,
        explicacao_especifica: "Previsão expressa do art. 62, § 1º da Lei nº 11.343/2006."
      },
      {
        letra: "C",
        texto: "O perdimento de bens apreendidos exige como requisito indispensável a prova inequívoca de que o bem foi adquirido com recursos de origem estrangeira.",
        correta: false,
        explicacao_especifica: "Basta que o bem seja instrumento ou produto do crime de tráfico (art. 243, parágrafo único CF)."
      },
      {
        letra: "D",
        texto: "A destruição das drogas apreendidas só pode ser executada após o trânsito em julgado definitivo do processo penal.",
        correta: false,
        explicacao_especifica: "A incineração de drogas apreendidas em flagrante é realizada pelo Delegado em prazos curtos (art. 50, § 3º e 50-A da Lei de Drogas), guardada amostra para contraprova."
      },
      {
        letra: "E",
        texto: "Os valores em dinheiro apreendidos são automaticamente convertidos em gratificação financeira para a equipe de policiais que efetuou a prisão.",
        correta: false,
        explicacao_especifica: "Os valores são destinados ao Fundo Nacional Antidrogas (FUNAD) e não aos agentes individuais."
      }
    ]
  },

  // 053 - Ação Penal: Decadência do Direito de Queixa/Representação (C/E)
  {
    idSlug: "batch3-dpp-053",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Distrito Federal (PC-DF)",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Salvo disposição em contrário, o ofendido, ou seu representante legal, decairá no direito de queixa ou de representação se não o exercer dentro do prazo de seis meses, contado do dia em que vier a saber quem é o autor do crime, ou, no caso do art. 29 do CPP, do dia em que se esgotar o prazo para o oferecimento da denúncia (art. 38 do CPP). O prazo decadencial é de natureza material e penal, não se interrompendo nem se suspendendo no curso das investigações.",
    explicacao: "GABARITO: CERTO. Art. 38 do CPP c/c art. 103 do CP e art. 10 do CP: O prazo decadencial de 6 meses para ofertar representação ou queixa-crime possui natureza penal material, computando-se o dia do começo e não se suspendendo ou interrompendo pela instauração de inquérito policial ou pedido de diligências.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A assertiva descreve precisamente a regra do art. 38 do CPP e a natureza material decadencial que impede suspensão ou interrupção."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. O prazo é improrrogável e fatal, operando-se a extinção da punibilidade pela decadência se não exercido em 6 meses."
      }
    ]
  },

  // 054 - ANPP: Requisitos Legais (M/E)
  {
    idSlug: "batch3-dpp-054",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O Acordo de Não Persecução Penal (ANPP), inserido no art. 28-A do Código de Processo Penal pela Lei nº 13.964/2019, representa importante instrumento de justiça penal negocial pré-processual. Para a celebração válida do ANPP entre o Ministério Público e o investigado, o CPP exige expressamente como requisitos positivos cumulativos:",
    explicacao: "GABARITO: E. Art. 28-A, caput do CPP: 'Não sendo caso de arquivamento e tendo o investigado confessado formal e circunstancialmente a prática de infração penal sem violência ou grave ameaça e com pena mínima inferior a 4 (quatro) anos, o Ministério Público poderá propor acordo de não persecução penal, desde que necessário e suficiente para reprovação e prevenção do crime'.",
    alternativas: [
      {
        letra: "A",
        texto: "A existência de representação da autoridade policial com confissão informal e crime apenado com pena máxima de até 2 anos.",
        correta: false,
        explicacao_especifica: "A pena máxima até 2 anos é critério da transação penal (Juizados Especiais), não do ANPP."
      },
      {
        letra: "B",
        texto: "A comprovação de que o agente cometeu o delito sob coação moral irresistível e que a pena mínima cominada é inferior a 8 anos.",
        correta: false,
        explicacao_especifica: "A coação moral irresistível exclui a culpabilidade e geraria absolvição/arquivamento, e o limite é de pena mínima inferior a 4 anos."
      },
      {
        letra: "C",
        texto: "A concordância do magistrado na fase preliminar de negociação e o compromisso de não recorrer da homologação.",
        correta: false,
        explicacao_especifica: "O magistrado não participa das negociações do ANPP (art. 28-A, § 4º CPP)."
      },
      {
        letra: "D",
        texto: "A inexistência de inquérito policial prévio e o pagamento de indenização integral de no mínimo cem salários mínimos.",
        correta: false,
        explicacao_especifica: "O ANPP ocorre no bojo de investigações formais e as condições pecuniárias são proporcionais ao dano (art. 28-A, IV CPP)."
      },
      {
        letra: "E",
        texto: "Não ser caso de arquivamento, ter o investigado confessado formal e circunstancialmente a prática da infração penal praticada sem violência ou grave ameaça e cuja pena mínima seja inferior a 4 anos.",
        correta: true,
        explicacao_especifica: "Requisitos essenciais cumulativos expressos no caput do art. 28-A do CPP."
      }
    ]
  },

  // 055 - Recusa do MP no ANPP e Controle (C/E)
  {
    idSlug: "batch3-dpp-055",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos casos em que o Ministério Público recusar expressamente a propor o Acordo de Não Persecução Penal (ANPP), o investigado poderá requerer a remessa dos autos a órgão superior do Ministério Público, nos termos do art. 28-A, § 14, do CPP, não cabendo ao magistrado conceder o acordo de ofício nem substituir a manifestação ministerial.",
    explicacao: "GABARITO: CERTO. Art. 28-A, § 14 do CPP: 'No caso de recusa, por parte do Ministério Público, em propor o acordo, o investigado poderá requerer a remessa dos autos a órgão superior, na forma do art. 28 deste Código'. STF e STJ pacificaram que o ANPP é negócio jurídico que não pode ser imposto de ofício pelo magistrado substitutivamente ao titular da ação penal.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A via processual adequada contra a recusa ministerial do ANPP é a remessa ao órgão de revisão da própria instituição (art. 28-A, § 14 CPP)."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. O magistrado exerce apenas controle de legalidade, sendo vedado firmar ou homologar acordo negado pelo MP sem prévia remessa ao órgão superior."
      }
    ]
  },

  // 056 - Ação Penal Privada Subsidiária da Pública (M/E)
  {
    idSlug: "batch3-dpp-056",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "FGV",
    orgao_nome: "PC-SC",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito da Ação Penal Privada Subsidiária da Pública (art. 5º, LIX da CF/88 e art. 29 do Código de Processo Penal), assinale a afirmativa correta:",
    explicacao: "GABARITO: D. Art. 29 do CPP: 'Será admitida ação privada nos crimes de ação pública, se esta não for intentada no prazo legal, cabendo ao Ministério Público aditar a queixa, repudiá-la e oferecer denúncia substitutiva, intervir em todos os termos do processo, fornecer elementos de prova, interpor recurso e, a todo tempo, no caso de negligência do querelante, retomar a ação como parte principal'.",
    alternativas: [
      {
        letra: "A",
        texto: "É cabível quando o Ministério Público promove o arquivamento fundamentado do inquérito policial.",
        correta: false,
        explicacao_especifica: "O arquivamento fundamentado é manifestação tempestiva do MP e não configura inércia, afastando a ação subsidiária."
      },
      {
        letra: "B",
        texto: "Exige que o querelante renuncie expressamente ao direito de reparação cível do dano.",
        correta: false,
        explicacao_especifica: "Não há exigência de renúncia cível para a propositura de queixa-crime subsidiária."
      },
      {
        letra: "C",
        texto: "Impede o Ministério Público de intervir no processo ou de recorrer de sentença absolutória.",
        correta: false,
        explicacao_especifica: "O MP atua como custos juris e parte interveniente (art. 29 CPP), podendo aditar, fornecer provas e recorrer."
      },
      {
        letra: "D",
        texto: "É cabível somente se o Ministério Público permanecer inerte e não oferecer a denúncia no prazo legal, podendo o órgão ministerial repudiar a queixa, aditá-la, intervir em todos os atos e retomar a ação como parte principal em caso de desídia.",
        correta: true,
        explicacao_especifica: "Síntese perfeita da regra constitucional (art. 5º, LIX) e processual penal (art. 29 do CPP)."
      },
      {
        letra: "E",
        texto: "O prazo para ajuizamento da queixa subsidiária é imprescritível enquanto não extinta a punibilidade.",
        correta: false,
        explicacao_especifica: "A queixa subsidiária decai no prazo de 6 meses contados do esgotamento do prazo do MP (art. 38 CPP)."
      }
    ]
  },

  // 057 - Indivisibilidade na Ação Privada (C/E)
  {
    idSlug: "batch3-dpp-057",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil de Pernambuco (PC-PE)",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Nos crimes de ação penal exclusivamente privada, vigora o princípio da indivisibilidade, razão pela qual a queixa-crime contra qualquer dos autores do crime obrigará ao processo de todos, e o perdão ou a renúncia concedida a um dos querelados a todos aproveitará (arts. 48 e 49 do CPP).",
    explicacao: "GABARITO: CERTO. Arts. 48 e 49 do CPP c/c art. 51 do CPP e art. 106, I do CP: O princípio da indivisibilidade impõe que o ofendido proponha a queixa contra todos os coautores e partícipes conhecidos; a renúncia ao direito de queixa ou o perdão concedido a um deles estende-se a todos os demais.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A indivisibilidade na ação privada veda a escolha arbitrária de quem processar ou perdoar, comunicando-se os atos a todos os copartícipes."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. Reproduz as disposições dos arts. 48 e 49 do Código de Processo Penal."
      }
    ]
  },

  // 058 - Rejeição Liminar da Denúncia (M/E)
  {
    idSlug: "batch3-dpp-058",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "VUNESP",
    orgao_nome: "PC-SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Conforme o art. 395 do Código de Processo Penal, a denúncia ou queixa será liminarmente rejeitada pelo juiz quando:",
    explicacao: "GABARITO: A. Art. 395 do CPP: 'A denúncia ou queixa será rejeitada quando: I - for manifestamente inepta; II - faltar pressuposto processual ou condição para o exercício da ação penal; ou III - faltar justa causa para o exercício da ação penal'.",
    alternativas: [
      {
        letra: "A",
        texto: "For manifestamente inepta, faltar pressuposto processual ou condição para o exercício da ação penal, ou faltar justa causa para a persecução.",
        correta: true,
        explicacao_especifica: "Hipóteses expressas e taxativas previstas nos incisos I, II e III do art. 395 do CPP."
      },
      {
        letra: "B",
        texto: "O réu comparecer à delegacia desacompanhado de advogado na fase do inquérito policial.",
        correta: false,
        explicacao_especifica: "Irregularidades do inquérito não ensejam rejeição da denúncia nem nulidade processual."
      },
      {
        letra: "C",
        texto: "A autoridade policial deixar de ouvir todas as testemunhas arroladas pelo indiciado.",
        correta: false,
        explicacao_especifica: "O Delegado possui discricionariedade na condução das diligências investigativas (art. 14 CPP)."
      },
      {
        letra: "D",
        texto: "O membro do Ministério Público subscrever a peça acusatória sem autenticação em cartório extrajudicial.",
        correta: false,
        explicacao_especifica: "Os membros do MP possuem fé pública funcional decorrente de lei."
      },
      {
        letra: "E",
        texto: "O querelante for pessoa jurídica de direito privado legalmente constituída.",
        correta: false,
        explicacao_especifica: "Pessoas jurídicas têm plena legitimidade ativa para ajuizar queixa-crime quando forem vítimas de ilícitos."
      }
    ]
  },

  // 059 - Emendatio vs Mutatio Libelli (C/E)
  {
    idSlug: "batch3-dpp-059",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Distingue-se a emendatio libelli (art. 383 do CPP) da mutatio libelli (art. 384 do CPP) pelo fato de que, na primeira, o magistrado apenas confere nova e correta capitulação jurídica aos fatos perfeitamente descritos na denúncia, podendo fazê-lo na sentença inclusive aplicando pena mais grave sem necessidade de aditamento; ao passo que, na mutatio libelli, exsurgem durante a instrução provas de circunstância ou elemento de fato não contido na denúncia, tornando indispensável o aditamento acusatório formal pelo Ministério Público, sob pena de violação do princípio da correlação e da ampla defesa.",
    explicacao: "GABARITO: CERTO. Art. 383 do CPP (emendatio libelli - fatos inalterados, mudança apenas na qualificação jurídica pelo juiz) vs Art. 384 do CPP (mutatio libelli - alteração fática na instrução que exige aditamento obrigatório pelo titular da ação penal, com abertura de prazo para a defesa e produção de novas provas).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Apresenta com exatidão dogmática e legal a clássica diferenciação entre a emendatio libelli e a mutatio libelli."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. A mutatio libelli exige inovação fática e aditamento do MP, enquanto a emendatio lida apenas com enquadramento jurídico."
      }
    ]
  },

  // 060 - Retroatividade do ANPP (M/E)
  {
    idSlug: "batch3-dpp-060",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "FGV",
    orgao_nome: "PC-RJ",
    cargo_nome: "Inspetor de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal, ao pacificar a aplicação intertemporal do Acordo de Não Persecução Penal (ANPP - art. 28-A do CPP) no julgamento do HC nº 185.913/DF e precedentes plenários, fixou diretriz a respeito da retroatividade do benefício para fatos ocorridos antes da vigência da Lei nº 13.964/2019. De acordo com a orientação firmada pela Suprema Corte:",
    explicacao: "GABARITO: C. O STF pacificou que o ANPP, por sua natureza mista penal-processual benéfica (lex mitior), é aplicável a fatos praticados antes da entrada em vigor da Lei 13.964/2019, desde que a denúncia ainda não tenha sido recebida, ou, nos termos da modulação plenária fixada no HC 185.913/DF, aos processos em andamento sem trânsito em julgado nos quais o acusado preencha os requisitos legais e haja manifestação expressa de interesse e confissão formal.",
    alternativas: [
      {
        letra: "A",
        texto: "O ANPP tem natureza puramente processual e, portanto, não retroage em nenhuma hipótese para alcançar fatos anteriores a janeiro de 2020.",
        correta: false,
        explicacao_especifica: "O STF reconheceu a natureza híbrida/material do ANPP, autorizando a retroatividade benéfica (art. 5º, XL CF)."
      },
      {
        letra: "B",
        texto: "O benefício pode ser concedido de ofício pelo tribunal de apelação mesmo com sentença condenatória transitada em julgado há mais de cinco anos.",
        correta: false,
        explicacao_especifica: "O instituto não é cabível após o trânsito em julgado da sentença condenatória."
      },
      {
        letra: "C",
        texto: "O ANPP é norma de natureza híbrida que admite aplicação retroativa a fatos anteriores à Lei nº 13.964/2019 em processos em andamento ainda não transitados em julgado, desde que atendidos os requisitos legais e formalizada a confissão.",
        correta: true,
        explicacao_especifica: "Tese fixada pelo Pleno do Supremo Tribunal Federal sobre o alcance intertemporal do art. 28-A do CPP."
      },
      {
        letra: "D",
        texto: "A retroatividade do ANPP dispensa a confissão circunstanciada do réu quando houver parecer favorável da Defensoria Pública.",
        correta: false,
        explicacao_especifica: "A confissão formal e circunstanciada é requisito indeclinável e nuclear do instituto."
      },
      {
        letra: "E",
        texto: "O STF vedou a retroatividade do ANPP a qualquer réu primário que já responda a processo criminal comum.",
        correta: false,
        explicacao_especifica: "A primariedade e a pendência de ação em andamento não obstam a aplicação retroativa do ANPP."
      }
    ]
  }
];
