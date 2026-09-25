import { TAXONOMIA } from "./taxonomia.mjs";

export const admPart1 = [
  // 001 - Princípios da Administração Pública: Publicidade e Sigilo em Investigação Policial
  {
    idSlug: "batch3-adm-001",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_limpe,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Embora a publicidade seja a regra geral que rege os atos da Administração Pública, o ordenamento jurídico admite a decretação de sigilo em procedimentos investigatórios policiais quando a medida for imprescindível à segurança da sociedade e do Estado ou ao êxito das diligências investigativas, sem que isso configure ofensa ao princípio constitucional da publicidade.",
    explicacao: "GABARITO: CERTO. O princípio da publicidade (art. 37, caput, da CF/88) não possui caráter absoluto. O art. 5º, incisos XXXIII e LX, da CF/88 autoriza expressamente a restrição da publicidade dos atos administrativos quando a defesa da intimidade ou o interesse social e a segurança da sociedade/Estado o exigirem. No âmbito policial, o art. 20 do Código de Processo Penal estabelece que a autoridade assegurará no inquérito o sigilo necessário à elucidação do fato ou exigido pelo interesse da sociedade, ressalvado ao defensor o acesso aos elementos de prova já documentados (Súmula Vinculante 14 do STF).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A publicidade comporta exceções constitucionais expressas (art. 5º, XXXIII e LX, da CF/88) voltadas à preservação da intimidade e da segurança pública e estatal, perfeitamente aplicáveis ao inquérito policial (art. 20 do CPP)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A publicidade não é um princípio absoluto e admite legítimas restrições legais para garantir a eficácia investigativa e a segurança pública."
      }
    ]
  },

  // 002 - Princípios da Administração Pública: Impessoalidade e Promoção Pessoal
  {
    idSlug: "batch3-adm-002",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_limpe,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Determinada autoridade policial estadual veiculou, nas redes sociais oficiais da instituição policial e em cartazes institucionais com recursos públicos, informes sobre uma grande operação de repressão ao crime organizado. No material publicitário, além da descrição das apreensões, foram inseridos a fotografia em destaque, o nome e o slogan de campanha eleitoral da referida autoridade. À luz do regime jurídico-administrativo e dos preceitos constitucionais, a conduta descrita violou diretamente o princípio da:",
    explicacao: "GABARITO: B (Impessoalidade). O art. 37, § 1º, da CF/88 preceitua que a publicidade dos atos, programas, obras, serviços e campanhas dos órgãos públicos deverá ter caráter educativo, informativo ou de orientação social, dela não podendo constar nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores públicos. Essa vedação decorre primordialmente do princípio da impessoalidade, segundo o qual os atos estatais são imputados ao órgão/entidade pública e não à pessoa física do agente público.",
    alternativas: [
      {
        letra: "A",
        texto: "Eficiência, unicamente por acarretar custos operacionais adicionais à repartição policial.",
        correta: false,
        explicacao_especifica: "Incorreto. A principal e direta violação constitucional é ao princípio da impessoalidade e à vedação de promoção pessoal prevista no art. 37, § 1º, da CF/88."
      },
      {
        letra: "B",
        texto: "Impessoalidade, haja vista a expressa vedação de vinculação de nomes, símbolos ou imagens que caracterizem promoção pessoal em publicidade oficial.",
        correta: true,
        explicacao_especifica: "Correto. O art. 37, § 1º, da CF/88 proíbe a promoção pessoal em publicidade institucional, consubstanciando regra de eficácia direta derivada do princípio da impessoalidade."
      },
      {
        letra: "C",
        texto: "Autotutela, por impedir que a chefia imediata revise os atos administrativos de divulgação institucional.",
        correta: false,
        explicacao_especifica: "Incorreto. O princípio da autotutela diz respeito ao poder-dever da Administração de rever seus próprios atos, não sendo a norma violada no caso de autopromoção."
      },
      {
        letra: "D",
        texto: "Especialidade, haja vista que as polícias judiciárias não possuem atribuição para realização de campanhas informativas.",
        correta: false,
        explicacao_especifica: "Incorreto. A publicidade informativa é permitida aos órgãos públicos; o que a Constituição veda terminantemente é a promoção pessoal de seus agentes."
      },
      {
        letra: "E",
        texto: "Continuidade do serviço público, pois as postagens institucionais suspenderam o atendimento nas delegacias.",
        correta: false,
        explicacao_especifica: "Incorreto. Não houve interrupção da prestação de serviços policiais, mas sim desvio de finalidade e autopromoção na divulgação da atividade estatal."
      }
    ]
  },

  // 003 - Princípios da Administração Pública: Autotutela e Prazo Decadencial
  {
    idSlug: "batch3-adm-003",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_limpe,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em decorrência do princípio da autotutela, a Administração Pública pode anular seus próprios atos quando eivados de vício de legalidade e revogá-los por motivo de conveniência ou oportunidade. Contudo, o direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em cinco anos, contados da data em que foram praticados, salvo comprovada má-fé.",
    explicacao: "GABARITO: CERTO. A autotutela administrativa (Súmulas 346 e 473 do STF) consagra a prerrogativa de anulação de atos ilegais e revogação de atos inoportunos/inconvenientes. No entanto, para prestigiar a segurança jurídica e a proteção da confiança legítima, o art. 54 da Lei 9.784/1999 estabelece que o direito da Administração de anular atos favoráveis aos administrados decai em cinco anos, contados da data em que foram praticados, ressalvada a hipótese de comprovada má-fé do beneficiário.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O enunciado reproduz com exatidão a síntese das Súmulas 346 e 473 do STF conjugada com o prazo decadencial de 5 anos estatuído no art. 54 da Lei 9.784/1999."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A autotutela não é imprescritível quanto a atos ampliativos de direitos praticados de boa-fé, submetendo-se ao prazo decadencial quinquenal da Lei 9.784/1999."
      }
    ]
  },

  // 004 - Princípios da Administração Pública: Moralidade e Nepotismo (Súmula Vinculante 13)
  {
    idSlug: "batch3-adm-004",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_limpe,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de Minas Gerais (PC-MG)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O Delegado-Geral de Polícia de determinado Estado nomeou seu sobrinho (parente consanguíneo em 3º grau em linha colateral) para exercer cargo em comissão de chefia de gabinete em sua própria estrutura administrativa direta. O nomeado não é titular de cargo efetivo na carreira policial. Conforme a jurisprudência sumulada e vinculante do Supremo Tribunal Federal (Súmula Vinculante nº 13):",
    explicacao: "GABARITO: D. A Súmula Vinculante 13 do STF estabelece que a nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, inclusive, da autoridade nomeante ou de servidor da mesma pessoa jurídica investido em cargo de direção, chefia ou assessoramento, para o exercício de cargo em comissão ou de confiança viola a Constituição Federal (especialmente os princípios da moralidade e impessoalidade). O sobrinho é parente colateral em 3º grau, enquadrando-se expressamente na vedação.",
    alternativas: [
      {
        letra: "A",
        texto: "A nomeação é válida, porque o parentesco em linha colateral só gera impedimento de nepotismo até o segundo grau (irmãos).",
        correta: false,
        explicacao_especifica: "Incorreto. A Súmula Vinculante 13 do STF alcança parentes até o terceiro grau, inclusive, abrangendo tios e sobrinhos (colaterais de 3º grau)."
      },
      {
        letra: "B",
        texto: "O ato é plenamente legítimo, tendo em vista que cargos em comissão são de livre nomeação e exoneração, não se subordinando a restrições de parentesco.",
        correta: false,
        explicacao_especifica: "Incorreto. A discricionariedade na escolha de cargos comissionados é limitada pelos princípios constitucionais da impessoalidade e moralidade (SV 13/STF)."
      },
      {
        letra: "C",
        texto: "A proibição de nepotismo restringe-se exclusivamente aos órgãos dos Poderes Legislativo e Judiciário, não incidindo nas polícias civis.",
        correta: false,
        explicacao_especifica: "Incorreto. A Súmula Vinculante 13 incide na Administração Pública direta e indireta em qualquer dos Poderes da União, dos Estados, do DF e dos Municípios."
      },
      {
        letra: "D",
        texto: "A nomeação é inconstitucional, pois a proibição do nepotismo abrange parentes em linha reta, colateral ou por afinidade, até o terceiro grau, inclusive.",
        correta: true,
        explicacao_especifica: "Correto. O parentesco colateral de 3º grau (sobrinho) está expressamente abrangido pelo texto da Súmula Vinculante 13 do STF."
      },
      {
        letra: "E",
        texto: "O ato seria nulo apenas se configurasse nepotismo cruzado por ajuste mediante designações recíprocas entre órgãos distintos.",
        correta: false,
        explicacao_especifica: "Incorreto. A SV 13 veda tanto a nomeação direta na mesma pessoa jurídica quanto o nepotismo cruzado por designações recíprocas."
      }
    ]
  },

  // 005 - Princípios da Administração Pública: Juridicidade e LINDB
  {
    idSlug: "batch3-adm-005",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_limpe,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Nos termos das alterações introduzidas na Lei de Introdução às Normas do Direito Brasileiro (LINDB), nas esferas administrativa, controladora e judicial, não se decidirá com base em valores jurídicos abstratos sem que sejam consideradas as consequências práticas da decisão, devendo a motivação demonstrar a necessidade e a adequação da medida imposta, inclusive em face das alternativas possíveis.",
    explicacao: "GABARITO: CERTO. A assertiva é a redação exata do art. 20, caput e parágrafo único, do Decreto-Lei nº 4.657/1942 (LINDB, incluído pela Lei nº 13.655/2018). Esse preceito reforça o pragmatismo jurídico e o princípio da juridicidade, exigindo motivação concreta quanto aos impactos práticos das decisões e proporcionalidade na escolha da solução adotada.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 20 da LINDB veda decisões puramente abstratas e impõe o dever de motivação consistente que pondere as consequências práticas e alternativas."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A regra do art. 20 da LINDB vincula formalmente decisões administrativas, de controle e judiciais no direito brasileiro."
      }
    ]
  },

  // 006 - Princípios da Administração Pública: Continuidade e Direito de Greve em Carreiras Policiais
  {
    idSlug: "batch3-adm-006",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_limpe,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Inspetor de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sindicato representativo de policiais civis e peritos criminais deflagrou movimento paredista (greve) de âmbito estadual, com paralisação total de perícias de local e registros de ocorrências durante uma semana, visando a pressionar o Poder Executivo por reajustes salariais. Considerando o princípio da continuidade do serviço público e a jurisprudência consolidada do Supremo Tribunal Federal (Tema 541 de Repercussão Geral):",
    explicacao: "GABARITO: C. No julgamento do ARE 654.432/GO (Tema 541 de Repercussão Geral), o STF fixou a tese de que o exercício do direito de greve, sob qualquer forma ou modalidade, é vedado aos policiais civis e a todos os servidores públicos que atuem diretamente na área de segurança pública. A segurança pública é serviço público essencial indelegável e de prestação contínua inerente à soberania estatal.",
    alternativas: [
      {
        letra: "A",
        texto: "A greve é constitucionalmente legítima desde que mantido o efetivo mínimo de 30% em regime de plantão extraordinário.",
        correta: false,
        explicacao_especifica: "Incorreto. O STF pacificou que o direito de greve é vedado sob qualquer modalidade ou percentual aos servidores da segurança pública."
      },
      {
        letra: "B",
        texto: "O direito de greve é vedado apenas aos policiais militares, sendo plenamente franqueado aos policiais civis ante o regime estatutário civil.",
        correta: false,
        explicacao_especifica: "Incorreto. A vedação estende-se tanto a militares (art. 142, § 3º, IV da CF) quanto a policiais civis, federais, rodoviários e penais (Tema 541/STF)."
      },
      {
        letra: "C",
        texto: "O exercício do direito de greve, sob qualquer forma ou modalidade, é vedado aos policiais civis e a todos os servidores públicos que atuem diretamente na área de segurança pública.",
        correta: true,
        explicacao_especifica: "Correto. Trata-se da tese vinculante firmada pelo STF no Tema 541 de Repercussão Geral, fundada na essencialidade e continuidade da segurança pública."
      },
      {
        letra: "D",
        texto: "A paralisação é permitida somente após prévia mediação obrigatória perante o Tribunal de Justiça do respectivo Estado.",
        correta: false,
        explicacao_especifica: "Incorreto. Não há autorização condicional de greve para forças policiais no ordenamento jurídico brasileiro."
      },
      {
        letra: "E",
        texto: "A vedação de greve restringe-se exclusivamente aos Delegados de Polícia, sendo admitida aos cargos de apoio técnico e operacional.",
        correta: false,
        explicacao_especifica: "Incorreto. A proibição abrange todas as carreiras e servidores que atuem diretamente na atividade de segurança pública."
      }
    ]
  },

  // 007 - Princípios da Administração Pública: Eficiência e Avaliação de Desempenho
  {
    idSlug: "batch3-adm-007",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_limpe,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O princípio da eficiência, introduzido expressamente no art. 37 da Constituição Federal de 1988 pela Emenda Constitucional nº 19/1998, fundamenta a possibilidade de perda do cargo público pelo servidor estável mediante procedimento de avaliação periódica de desempenho, na forma de lei complementar, assegurada ampla defesa.",
    explicacao: "GABARITO: CERTO. O art. 41, § 1º, inciso III, da CF/88, com a redação dada pela EC nº 19/1998 (que também inseriu o princípio da eficiência no caput do art. 37), prevê que o servidor público estável poderá perder o cargo mediante procedimento de avaliação periódica de desempenho, na forma de lei complementar, assegurada ampla defesa.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A avaliação periódica de desempenho (art. 41, § 1º, III da CF) é desdobramento direto da reforma gerencial e do princípio da eficiência."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O servidor estável pode perder o cargo por sentença judicial transitada em julgado, PAD com ampla defesa e por avaliação periódica de desempenho (art. 41, § 1º, CF)."
      }
    ]
  },

  // 008 - Princípios da Administração Pública: Supremacia e Indisponibilidade do Interesse Público
  {
    idSlug: "batch3-adm-008",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_limpe,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado da Bahia (PC-BA)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O regime jurídico-administrativo brasileiro estrutura-se fundamentalmente sobre dois princípios basilares implícitos na ordem constitucional: a supremacia do interesse público sobre o privado e a indisponibilidade do interesse público pela Administração. Sobre esses princípios, assinale a afirmativa correta:",
    explicacao: "GABARITO: A. A supremacia do interesse público confere à Administração prerrogativas especiais de autoridade (como a autoexecutoriedade de medidas de polícia, presunção de legitimidade dos atos e desapropriação), enquanto a indisponibilidade do interesse público impõe sujeições e restrições (como o dever de licitar, concurso público e estrita legalidade), visto que os bens e interesses públicos pertencem à coletividade e não ao administrador.",
    alternativas: [
      {
        letra: "A",
        texto: "A supremacia fundamenta as prerrogativas de autoridade estatais em face dos particulares, enquanto a indisponibilidade consagra as sujeições e restrições impostas ao gestor público.",
        correta: true,
        explicacao_especifica: "Correto. O binômio prerrogativas (supremacia) e sujeições (indisponibilidade) constitui o núcleo estruturante do regime jurídico-administrativo."
      },
      {
        letra: "B",
        texto: "A supremacia do interesse público autoriza o administrador a transigir livremente sobre direitos indisponíveis do Estado sem autorização legal.",
        correta: false,
        explicacao_especifica: "Incorreto. A indisponibilidade veda a renúncia ou disposição imotivada e sem base legal de direitos e patrimônio públicos."
      },
      {
        letra: "C",
        texto: "A indisponibilidade do interesse público assegura que os atos de gestão patrimonial da Administração sejam regidos com exclusividade pelo direito privado comum.",
        correta: false,
        explicacao_especifica: "Incorreto. A indisponibilidade impõe amarras de direito público (concurso, licitação, prestação de contas) mesmo em atos negociais."
      },
      {
        letra: "D",
        texto: "Ambos os princípios encontram-se taxativamente enumerados no caput do art. 37 da Constituição Federal ao lado da legalidade e publicidade.",
        correta: false,
        explicacao_especifica: "Incorreto. Os princípios expressos no caput do art. 37 são Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (LIMPE); supremacia e indisponibilidade são princípios fundamentais implícitos."
      },
      {
        letra: "E",
        texto: "A supremacia do interesse público sobrepõe-se a qualquer direito fundamental do cidadão, tornando insindicáveis os atos de polícia administrativa.",
        correta: false,
        explicacao_especifica: "Incorreto. As prerrogativas estatais encontram limites intransponíveis nos direitos e garantias fundamentais da pessoa humana e no controle jurisdicional."
      }
    ]
  },

  // 009 - Poderes Administrativos: Delegação do Poder de Polícia (Tema 532 e 1043 STF)
  {
    idSlug: "batch3-adm-009",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_adm,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Conforme tese de repercussão geral fixada pelo Supremo Tribunal Federal, é constitucional a delegação do poder de polícia, por meio de lei, a pessoas jurídicas de direito privado integrantes da administração pública indireta de capital social majoritariamente público que prestem exclusivamente serviço público de atuação própria do Estado e em regime não concorrencial, abrangendo tanto a fiscalização quanto a aplicação de sanções administrativas.",
    explicacao: "GABARITO: CERTO. No julgamento do RE 633.782/MG (Tema 532 de Repercussão Geral), o STF fixou a tese: 'É constitucional a delegação do poder de polícia, por meio de lei, a pessoas jurídicas de direito privado integrantes da Administração Pública indireta de capital social majoritariamente público, que prestem exclusivamente serviço público de atuação própria do Estado e em regime não concorrencial'. Essa delegação abrange os atos de consentimento, fiscalização e aplicação de sanções (como multas de trânsito emitidas por empresas públicas e sociedades de economia mista prestadoras de serviço público não concorrencial).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF superou entendimento pretérito e autorizou a delegação da fiscalização e aplicação de sanções a estatais de capital majoritariamente público prestadoras de serviço não concorrencial (Tema 532/STF)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A jurisprudência do STF admite expressamente a delegação legal de atos sancionatórios de polícia a entidades estatais prestadoras de serviço público em regime não concorrencial."
      }
    ]
  },

  // 010 - Poderes Administrativos: Polícia Administrativa vs Polícia Judiciária
  {
    idSlug: "batch3-adm-010",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_adm,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No âmbito da doutrina de Direito Administrativo, distingue-se a polícia administrativa da polícia judiciária. A respeito das características que diferenciam essas duas manifestações da atividade estatal de segurança e ordenamento, assinale a opção correta:",
    explicacao: "GABARITO: B. A polícia administrativa atua preponderantemente de forma preventiva sobre bens, direitos e atividades privadas (condicionando e restringindo o uso de bens e o exercício de atividades em prol do interesse público, regida pelo Direito Administrativo), ao passo que a polícia judiciária atua preponderantemente de forma repressiva sobre pessoas (investigando infrações penais e colhendo elementos de autoria e materialidade, regida pelo Direito Processual Penal).",
    alternativas: [
      {
        letra: "A",
        texto: "A polícia judiciária incide exclusivamente sobre bens e direitos econômicos, enquanto a polícia administrativa atua sobre pessoas autoras de ilícitos penais.",
        correta: false,
        explicacao_especifica: "Incorreto. É o oposto: a polícia administrativa incide sobre bens, direitos e atividades; a judiciária sobre pessoas (infratores penais)."
      },
      {
        letra: "B",
        texto: "A polícia administrativa incide predominantemente sobre bens, direitos e atividades, ao passo que a polícia judiciária incide sobre pessoas, preparando a persecução penal.",
        correta: true,
        explicacao_especifica: "Correto. Trata-se da clássica e consolidada distinção doutrinária quanto ao objeto e finalidade de cada ramo da atividade policial."
      },
      {
        letra: "C",
        texto: "Ambas as modalidades são regidas integralmente pelas normas do Código de Processo Penal e subordinam-se funcionalmente ao Poder Judiciário.",
        correta: false,
        explicacao_especifica: "Incorreto. A polícia administrativa rege-se pelo Direito Administrativo e integra órgãos do Poder Executivo."
      },
      {
        letra: "D",
        texto: "A polícia administrativa possui caráter exclusivamente repressivo após a prática de crimes, sendo vedada qualquer atuação fiscalizatória prévia.",
        correta: false,
        explicacao_especifica: "Incorreto. A polícia administrativa tem caráter predominantemente preventivo (fiscalização, licenças, autorizações)."
      },
      {
        letra: "E",
        texto: "A polícia judiciária é exercida pelas guardas municipais e órgãos ambientais, enquanto a polícia administrativa é privativa da Polícia Federal.",
        correta: false,
        explicacao_especifica: "Incorreto. A polícia judiciária é exercida pela Polícia Civil e Polícia Federal (art. 144 da CF/88)."
      }
    ]
  },

  // 011 - Poderes Administrativos: Poder Disciplinar e Independência das Instâncias
  {
    idSlug: "batch3-adm-011",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_adm,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em razão do princípio da independência das esferas de responsabilidade, a absolvição criminal de um policial federal por falta de provas (art. 386, VII, do CPP) não impede a sua punição disciplinar no âmbito administrativo pelo mesmo fato, caso a conduta configure ilícito funcional residual.",
    explicacao: "GABARITO: CERTO. A responsabilidade administrativa é independente da responsabilidade criminal e civil (art. 125 da Lei 8.112/1990). Conforme a Súmula 18 do STF ('Pela falta residual, não compreendida na absolvição pelo juízo criminal, é admissível a punição administrativa do servidor público') e a jurisprudência pacífica, apenas a absolvição criminal que reconhecer categoricamente a inexistência material do fato ou a negativa peremptória de autoria vincula a esfera administrativa (art. 126 da Lei 8.112/90). A absolvição penal por insuficiência de provas não vincula o PAD.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A insuficiência de provas no juízo criminal não vincula a autoridade disciplinar, mantendo-se a autonomia punitiva da Administração para sancionar a falta funcional residual."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. Apenas a negativa de autoria ou inexistência do fato vinculam e impedem a sanção administrativa."
      }
    ]
  },

  // 012 - Poderes Administrativos: Abuso de Poder (Excesso de Poder vs Desvio de Finalidade)
  {
    idSlug: "batch3-adm-012",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Determinada autoridade policial, competente por lei para deliberar sobre a lotação e movimentação de policiais civis no âmbito do departamento, removeu compulsoriamente (ex officio) um investigador de polícia para uma delegacia em município longínquo na fronteira. Restou comprovado em processo judicial que a motivação real e exclusiva do ato foi retaliar o agente por ter prestado depoimento como testemunha em investigação correcional contra aliados políticos da referida autoridade. A conduta descrita configura hipótese de abuso de poder na modalidade:",
    explicacao: "GABARITO: C (Desvio de Finalidade). O abuso de poder desdobra-se em duas modalidades: excesso de poder (vício de competência, quando o agente atua fora ou além de suas atribuições legais) e desvio de poder / desvio de finalidade (vício de finalidade, quando o agente, embora competente para a prática do ato, o realiza com finalidade diversa daquela fixada pela lei ou alheia ao interesse público). A remoção ex officio de policial tem como finalidade a necessidade do serviço público; utilizá-la com propósito disfarçado de punição/retaliação configura típico desvio de finalidade.",
    alternativas: [
      {
        letra: "A",
        texto: "Excesso de poder, pois a autoridade não detinha atribuição formal para editar atos de remoção no órgão policial.",
        correta: false,
        explicacao_especifica: "Incorreto. A autoridade era formalmente competente; o vício reside no objetivo/motivação pessoal ilícita (finalidade)."
      },
      {
        letra: "B",
        texto: "Exercício regular de poder regulamentar discricionário, imune a qualquer controle jurisdicional de legalidade.",
        correta: false,
        explicacao_especifica: "Incorreto. O desvio de finalidade é ato ilícito e nulo de pleno direito, sujeito à anulação pelo Poder Judiciário."
      },
      {
        letra: "C",
        texto: "Desvio de finalidade (ou desvio de poder), pois o ato foi praticado por autoridade competente, porém com fim alheio ao interesse público e com escopo punitivo disfarçado.",
        correta: true,
        explicacao_especifica: "Correto. O desvio de finalidade caracteriza-se pela utilização de competência legal com desvirtuamento do interesse público ou finalidade diversa da lei."
      },
      {
        letra: "D",
        texto: "Incompetência absoluta originária, tornando o ato de remoção inexistente no plano formal.",
        correta: false,
        explicacao_especifica: "Incorreto. A autoridade detinha competência para a lotação, incorrendo em vício de finalidade."
      },
      {
        letra: "E",
        texto: "Usurpação de função pública exclusiva do Poder Judiciário em matéria criminal.",
        correta: false,
        explicacao_especifica: "Incorreto. A remoção administrativa é ato do Executivo; o ilícito foi o desvio teleológico do ato de gestão de pessoal."
      }
    ]
  },

  // 013 - Poderes Administrativos: Poder Hierárquico e Delegação (Lei 9.784/1999)
  {
    idSlug: "batch3-adm-013",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_adm,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No exercício do poder hierárquico, a autoridade administrativa pode delegar parte de sua competência a outros órgãos ou agentes públicos, ainda que não lhe sejam hierarquicamente subordinados. Todavia, a legislação de processo administrativo federal proíbe expressamente a delegação da edição de atos de caráter normativo, da decisão de recursos administrativos e das matérias de competência exclusiva.",
    explicacao: "GABARITO: CERTO. A regra é disciplinada nos arts. 12 e 13 da Lei nº 9.784/1999. O art. 12 permite a delegação de competência mesmo entre órgãos sem subordinação hierárquica. O art. 13 elenca as matérias indelegáveis (mnemônico CE-NO-RA): I - edição de atos de caráter normativo; II - decisão de recursos administrativos; III - matérias de competência exclusiva do órgão ou autoridade.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A delegação independe de subordinação (art. 12) e são indelegáveis atos normativos, recursos e matérias exclusivas (art. 13 da Lei 9.784/99)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A assertiva reflete precisamente o regime jurídico da delegação e suas vedações legais."
      }
    ]
  },

  // 014 - Poderes Administrativos: Atributos do Poder de Polícia
  {
    idSlug: "batch3-adm-014",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_adm,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil do Estado da Paraíba (PC-PB)",
    cargo_nome: "Agente de Investigação",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em operação de fiscalização de estabelecimentos que comercializam produtos controlados e químicos, a autoridade policial constatou flagrante depósito clandestino de substâncias altamente inflamáveis sem qualquer autorização de segurança, gerando risco iminente de explosão em área residencial. A autoridade determinou e executou imediatamente a interdição do local e a apreensão cautelar dos produtos, sem necessidade de autorização judicial prévia. Essa atuação imediata da Administração fundamenta-se precipuamente no seguinte atributo do poder de polícia:",
    explicacao: "GABARITO: D (Autoexecutoriedade). A autoexecutoriedade consiste na prerrogativa pela qual a Administração Pública pode executar direta e imediatamente seus atos e medidas de polícia, inclusive utilizando a força pública nos limites estritos da necessidade, sem precisar recorrer previamente ao Poder Judiciário. Manifesta-se especialmente em situações de urgência ou quando expressamente prevista em lei.",
    alternativas: [
      {
        letra: "A",
        texto: "Tipicidade, que impõe a correspondência unívoca a figuras penais previstas na parte especial do Código Penal.",
        correta: false,
        explicacao_especifica: "Incorreto. A tipicidade garante que o ato corresponda a figuras abstratas de direito público, não explicando a atuação direta sem ordem judicial."
      },
      {
        letra: "B",
        texto: "Imprescritibilidade, que torna os atos fiscalizatórios imunes ao transcurso do tempo.",
        correta: false,
        explicacao_especifica: "Incorreto. O poder de polícia e as sanções administrativas sujeitam-se a prazos prescricionais legais."
      },
      {
        letra: "C",
        texto: "Irrevogabilidade, por vedar que a Administração reveja medidas de urgência cautelar.",
        correta: false,
        explicacao_especifica: "Incorreto. Medidas cautelares são provisórias e revogáveis se cessados os motivos determinantes."
      },
      {
        letra: "D",
        texto: "Autoexecutoriedade, que autoriza a prática e execução direta da medida de polícia pela Administração, sem prévia autorização judicial.",
        correta: true,
        explicacao_especifica: "Correto. A autoexecutoriedade permite à autoridade administrativa agir e executar diretamente a medida protetiva urgente sem necessidade de chancela judicial prévia."
      },
      {
        letra: "E",
        texto: "Inderrogabilidade, que impede a descentralização de serviços públicos operacionais.",
        correta: false,
        explicacao_especifica: "Incorreto. A inderrogabilidade não é atributo do poder de polícia."
      }
    ]
  },

  // 015 - Poderes Administrativos: Poder Regulamentar e Decretos Autônomos (Art. 84, VI da CF)
  {
    idSlug: "batch3-adm-015",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_adm,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Chefe do Poder Executivo pode, mediante decreto autônomo, dispor sobre a organização e funcionamento da administração pública federal, desde que a medida não implique aumento de despesa nem criação ou extinção de órgãos públicos, bem como dispor sobre a extinção de funções ou cargos públicos, quando vagos.",
    explicacao: "GABARITO: CERTO. Trata-se da hipótese constitucional expressa de decreto autônomo prevista no art. 84, inciso VI, alíneas 'a' e 'b', da CF/88 (com redação dada pela EC nº 32/2001). Em regra, os decretos são regulamentares (subordinados à lei); excepcionalmente, o Presidente pode editar decretos autônomos para: a) organização e funcionamento da administração federal, quando não implicar aumento de despesa nem criação ou extinção de órgãos públicos; b) extinção de funções ou cargos públicos, quando vagos.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 84, VI, 'a' e 'b' da CF/88 autoriza decretos autônomos estritamente para essas matérias e sob essas expressas restrições."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A assertiva espelha fielmente a disciplina constitucional dos decretos autônomos."
      }
    ]
  },

  // 016 - Poderes Administrativos: Ciclo de Polícia e Atos de Consentimento
  {
    idSlug: "batch3-adm-016",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de Minas Gerais (PC-MG)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A doutrina moderna desdobra o poder de polícia em quatro fases ou ciclos: ordem de polícia, consentimento de polícia, fiscalização de polícia e sanção de polícia. A concessão ou denegação de autorização para aquisição de arma de fogo e porte de arma pelo órgão competente da Polícia Federal enquadra-se na fase de:",
    explicacao: "GABARITO: B (Consentimento de polícia). O ciclo de polícia é composto por: 1) Ordem de polícia (norma legal regulamentando limites e condicionamentos); 2) Consentimento de polícia (anuência prévia da Administração ao particular para o exercício de atividade controlada, materializada por licença ou autorização); 3) Fiscalização de polícia (verificação contínua do cumprimento das normas); 4) Sanção de polícia (aplicação de penalidades repressivas por infrações). A expedição de autorização/porte de arma constitui típico ato de consentimento de polícia.",
    alternativas: [
      {
        letra: "A",
        texto: "Ordem de polícia, consubstanciada na edição de lei penal em sentido estrito pelo Congresso Nacional.",
        correta: false,
        explicacao_especifica: "Incorreto. A ordem de polícia é a norma genérica que institui as regras; a concessão de porte a indivíduo específico é ato concreto de consentimento."
      },
      {
        letra: "B",
        texto: "Consentimento de polícia, consubstanciado na anuência administrativa prévia para o exercício de atividade condicionada pelo particular.",
        correta: true,
        explicacao_especifica: "Correto. O consentimento de polícia compreende os atos administrativos (licenças e autorizações) pelos quais a Administração afere o atendimento de requisitos para autorizar determinada conduta."
      },
      {
        letra: "C",
        texto: "Sanção de polícia, pois a exigência documental traduz modalidade de punição preliminar ao requerente.",
        correta: false,
        explicacao_especifica: "Incorreto. A autorização é ato ampliativo e não sancionador."
      },
      {
        letra: "D",
        texto: "Coerção judicial extraordinária, sujeita a reserva absoluta de jurisdição cível.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se de competência administrativa originária do Poder Executivo (Polícia Federal)."
      },
      {
        letra: "E",
        texto: "Autoexecutoriedade plena em fase de execução fiscal.",
        correta: false,
        explicacao_especifica: "Incorreto. Não se trata de cobrança ou execução forçada, mas de apreciação de pedido de autorização/porte."
      }
    ]
  },

  // 017 - Poderes Administrativos: Poder Disciplinar e Vedação da Verdade Sabida
  {
    idSlug: "batch3-adm-017",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_adm,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No exercício do poder disciplinar, é vedada a aplicação de penalidade a servidor público com base na chamada verdade sabida, sendo indispensável a instauração de processo administrativo com estrita observância do contraditório e da ampla defesa, ainda que a infração funcional tenha sido presenciada diretamente pela autoridade superior.",
    explicacao: "GABARITO: CERTO. A 'verdade sabida' (imposição sumária de sanção disciplinar com base apenas no conhecimento pessoal da autoridade que presenciou a falta) foi banida do ordenamento jurídico brasileiro pela CF/88 (art. 5º, LIV e LV). Qualquer sanção a servidor público exige processo administrativo prévio (sindicância ou PAD) em que sejam assegurados o contraditório e a ampla defesa.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O instituto da verdade sabida é inconstitucional por violar as garantias do devido processo legal, contraditório e ampla defesa (art. 5º, LV, CF/88)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A aplicação de sanção sem processo formal prévio é nula, mesmo que o superior tenha presenciado o fato."
      }
    ]
  },

  // 018 - Poderes Administrativos: Controle Judicial do Mérito Administrativo e Proporcionalidade
  {
    idSlug: "batch3-adm-018",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_adm,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado de Goiás (PC-GO)",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em matéria de controle jurisdicional sobre os atos discricionários da Administração Pública, é correto afirmar que o Poder Judiciário:",
    explicacao: "GABARITO: D. Ao Judiciário é vedado substituir os critérios de conveniência e oportunidade legítimos do administrador (mérito administrativo em sentido estrito). Contudo, o Judiciário pode e deve controlar a legalidade em sentido amplo (juridicidade), verificando a adequação aos motivos determinantes, a moralidade, a razoabilidade e a proporcionalidade, podendo anular o ato que transborde os limites discricionários autorizados por lei.",
    alternativas: [
      {
        letra: "A",
        texto: "Pode revogar atos administrativos discricionários inoportunos, substituindo o juízo de conveniência do administrador público.",
        correta: false,
        explicacao_especifica: "Incorreto. O Judiciário nunca revoga ato do Executivo; a revogação é privativa da própria Administração no exercício da autotutela."
      },
      {
        letra: "B",
        texto: "Encontra-se terminantemente impedido de examinar qualquer aspecto de atos discricionários, mesmo diante de violação à proporcionalidade.",
        correta: false,
        explicacao_especifica: "Incorreto. O controle de legalidade abrange a observância dos princípios da razoabilidade e proporcionalidade e da teoria dos motivos determinantes."
      },
      {
        letra: "C",
        texto: "Pode convalidar ex officio atos eivados de vício insanável de finalidade praticados por autoridades policiais.",
        correta: false,
        explicacao_especifica: "Incorreto. Vício de finalidade é insanável e enseja a anulação do ato."
      },
      {
        letra: "D",
        texto: "Não pode substituir os critérios legítimos de conveniência e oportunidade do administrador, mas pode anular atos discricionários que extrapolem os limites legais ou violem a proporcionalidade e a razoabilidade.",
        correta: true,
        explicacao_especifica: "Correto. O Judiciário atua no controle de legalidade e juridicidade (incluindo proporcionalidade e razoabilidade), sem adentrar no mérito administrativo legítimo."
      },
      {
        letra: "E",
        texto: "Deve sempre homologar previamente qualquer ato de polícia preventiva para que este adquira presunção de legitimidade.",
        correta: false,
        explicacao_especifica: "Incorreto. Os atos administrativos nascem com presunção de legitimidade e independem de homologação judicial prévia."
      }
    ]
  },

  // 019 - Atos Administrativos: Requisitos de Validade e Convalidação (FO-CO)
  {
    idSlug: "batch3-adm-019",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em conformidade com a Lei de Processo Administrativo Federal (Lei nº 9.784/1999), em decisão na qual se evidencie não acarretarem lesão ao interesse público nem prejuízo a terceiros, os atos que apresentarem defeitos sanáveis poderão ser convalidados pela própria Administração, sendo que os vícios de competência (desde que não privativa/exclusiva) e de forma (desde que a forma não seja essencial à validade do ato) são, em regra, passíveis de convalidação com efeitos retroativos (ex tunc).",
    explicacao: "GABARITO: CERTO. O art. 55 da Lei 9.784/1999 disciplina expressamente a convalidação: 'Em decisão na qual se evidencie não acarretarem lesão ao interesse público nem prejuízo a terceiros, os atos que apresentarem defeitos sanáveis poderão ser convalidados pela própria Administração'. A doutrina pacífica aponta que os vícios sanáveis recaem sobre a Forma (não essencial) e a Competência (quanto à pessoa, não exclusiva/privativa) — mnemônico FO-CO —, operando a convalidação efeitos retroativos (ex tunc).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A convalidação aplica-se a vícios sanáveis de competência e forma quando não houver prejuízo a terceiros ou lesão ao interesse público (art. 55 da Lei 9.784/99)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A assertiva sintetiza com perfeita exatidão as regras legais e doutrinárias da convalidação e seus efeitos ex tunc."
      }
    ]
  },

  // 020 - Atos Administrativos: Teoria dos Motivos Determinantes
  {
    idSlug: "batch3-adm-020",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A autoridade competente exonerou um servidor ocupante de cargo em comissão de livre nomeação e exoneração, consignando formalmente na portaria que a dispensa decorreu de reiteradas faltas injustificadas ao serviço no último mês. Em ação judicial anulatória, o servidor comprovou de modo cabal, por meio de folhas de frequência eletrônica e laudos médicos periciais, que esteve presente em todos os dias de expediente. Nesse cenário, à luz da Teoria dos Motivos Determinantes:",
    explicacao: "GABARITO: E. Conforme a Teoria dos Motivos Determinantes, a validade do ato administrativo vincula-se aos motivos alegados como seu fundamento pela autoridade. Embora a exoneração de cargo em comissão seja ato discricionário e independa de motivação prévia, se a autoridade decidir enunciar os motivos (justificativa de fato), a higidez do ato fica atrelada à veracidade desses motivos. Comprovada a falsidade ou inexistência da situação fática invocada, o ato administrativo é nulo.",
    alternativas: [
      {
        letra: "A",
        texto: "O ato de exoneração é plenamente válido e inquestionável, pois cargos em comissão dispensam motivação, sendo irrelevante a veracidade dos fatos declarados.",
        correta: false,
        explicacao_especifica: "Incorreto. Se a autoridade motivou o ato discricionário, fica vinculada à veracidade do motivo alegado (Teoria dos Motivos Determinantes)."
      },
      {
        letra: "B",
        texto: "O ato administrativo deve ser convalidado pelo Judiciário, convertendo-se a exoneração em demissão por falta grave.",
        correta: false,
        explicacao_especifica: "Incorreto. O Judiciário não pode converter ato nem aplicar penalidade sem PAD e sem prova de falta."
      },
      {
        letra: "C",
        texto: "A portaria torna-se irrevogável, mas produzirá efeitos patrimoniais somente prospectivos (ex nunc).",
        correta: false,
        explicacao_especifica: "Incorreto. O vício de motivo gera a nulidade (anulação com efeitos ex tunc)."
      },
      {
        letra: "D",
        texto: "O ato será considerado anulável exclusivamente se a Administração ratificar a motivação falsa em procedimento revisional.",
        correta: false,
        explicacao_especifica: "Incorreto. Motivo falso é vício insanável que invalida o ato irremediavelmente."
      },
      {
        letra: "E",
        texto: "O ato de exoneração é nulo, pois, uma vez explicitados os motivos que fundamentaram o ato discricionário, sua validade fica vinculada à efetiva existência e veracidade de tais fatos.",
        correta: true,
        explicacao_especifica: "Correto. Pela Teoria dos Motivos Determinantes, a declaração de motivo falso ou inexistente contamina de nulidade o ato administrativo praticado."
      }
    ]
  },

  // 021 - Atos Administrativos: Presunção de Legitimidade e Ônus da Prova
  {
    idSlug: "batch3-adm-021",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O atributo da presunção de legitimidade e veracidade dos atos administrativos possui natureza absoluta (juris et de jure), de forma que os autos de infração e relatórios lavrados por policiais em operações de fiscalização não admitem prova em contrário na esfera administrativa ou judicial.",
    explicacao: "GABARITO: ERRADO. A presunção de legitimidade (conformidade com a lei) e veracidade (conformidade com os fatos) dos atos administrativos é RELATIVA (juris tantum) e não absoluta. Essa presunção inverte o ônus da prova para o administrado/acusado, que pode elidi-la mediante a apresentação de provas idôneas que demonstrem a ilegalidade ou inveracidade do ato praticado.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Incorreto. A presunção de legitimidade não é absoluta (juris et de jure), mas sim relativa (juris tantum)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. A presunção dos atos administrativos é sempre relativa (juris tantum), admitindo prova em contrário em contraditório."
      }
    ]
  },

  // 022 - Atos Administrativos: Anulação vs Revogação (Súmulas 346 e 473 STF)
  {
    idSlug: "batch3-adm-022",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Perito Criminal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito dos institutos da anulação e da revogação dos atos administrativos e do entendimento sumulado pelo Supremo Tribunal Federal, assinale a opção correta:",
    explicacao: "GABARITO: D. A anulação incide sobre atos ilegais (viciados), tem efeitos retroativos (ex tunc) e pode ser pronunciada tanto pela própria Administração (autotutela) quanto pelo Poder Judiciário. Já a revogação incide sobre atos válidos e discricionários, por razões de conveniência e oportunidade (mérito), produz efeitos prospectivos (ex nunc) e é de competência privativa da Administração Pública (o Judiciário só pode revogar seus próprios atos atípicos de gestão interna).",
    alternativas: [
      {
        letra: "A",
        texto: "A revogação de ato administrativo pode ser decretada pelo Poder Judiciário sobre atos do Poder Executivo quando reputá-los inconvenientes.",
        correta: false,
        explicacao_especifica: "Incorreto. O Judiciário não revoga atos do Executivo por conveniência/oportunidade, sob pena de violação à separação de Poderes."
      },
      {
        letra: "B",
        texto: "A anulação de um ato administrativo gera efeitos prospectivos (ex nunc), preservando todos os efeitos pretéritos da conduta ilegal.",
        correta: false,
        explicacao_especifica: "Incorreto. A anulação opera efeitos retroativos (ex tunc), desfazendo o ato desde a sua origem."
      },
      {
        letra: "C",
        texto: "Os atos vinculados podem ser revogados livremente a qualquer tempo pela autoridade administrativa que os editou.",
        correta: false,
        explicacao_especifica: "Incorreto. Atos vinculados não comportam revogação, pois não possuem juízo de conveniência e oportunidade."
      },
      {
        letra: "D",
        texto: "A anulação incide sobre atos ilegais com efeitos ex tunc, podendo ser declarada pela Administração ou pelo Judiciário; a revogação incide sobre atos válidos e discricionários com efeitos ex nunc, sendo privativa da Administração.",
        correta: true,
        explicacao_especifica: "Correto. O item resume com perfeita precisão a doutrina e as Súmulas 346 e 473 do STF."
      },
      {
        letra: "E",
        texto: "Atos que já exauriram seus efeitos e atos consumados continuam passíveis de revogação a critério do gestor.",
        correta: false,
        explicacao_especifica: "Incorreto. Atos consumados ou exauridos são irrevogáveis por perda de objeto."
      }
    ]
  },

  // 023 - Atos Administrativos: Cassação de Ato Administrativo
  {
    idSlug: "batch3-adm-023",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A cassação é a forma de extinção do ato administrativo que ocorre quando o beneficiário descumpre supervenientemente as condições fixadas em lei ou no próprio ato que eram indispensáveis para a manutenção do direito concedido, a exemplo da perda da autorização de porte de arma de fogo pelo cidadão que passa a utilizar o armamento de forma ostensiva e embriagado em local público.",
    explicacao: "GABARITO: CERTO. A cassação é a extinção extintivo-punitiva de ato administrativo originalmente válido, decorrente de culpa do administrado que deixou de cumprir as condições legais supervenientes necessárias para a sua manutenção (como o descumprimento dos deveres de cautela do porte de arma ou desvio de finalidade de licença de funcionamento).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A cassação opera como penalidade administrativa pela inobservância posterior das condições legais de fruição do ato."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O conceito e o exemplo apresentados correspondem com precisão à definição doutrinária de cassação."
      }
    ]
  },

  // 024 - Atos Administrativos: Espécies de Atos (Licença vs Autorização)
  {
    idSlug: "batch3-adm-024",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No que concerne à classificação e às espécies de atos administrativos negociais, diferenciam-se a licença e a autorização. Sobre essa diferenciação, é correto afirmar:",
    explicacao: "GABARITO: B. A licença é ato administrativo unilateral, vinculado e definitivo (uma vez preenchidos os requisitos legais, o particular tem direito subjetivo à sua obtenção, ex: CNH, licença para edificar). Já a autorização é ato administrativo unilateral, discricionário e precário (a Administração avalia a conveniência e oportunidade, podendo revogá-la a qualquer tempo sem indenização, ex: autorização de porte de arma, uso privativo de bem público).",
    alternativas: [
      {
        letra: "A",
        texto: "A licença é ato discricionário e precário, revogável a qualquer momento sem necessidade de motivação.",
        correta: false,
        explicacao_especifica: "Incorreto. A licença é ato vinculado e definitivo; a autorização é que é discricionária e precária."
      },
      {
        letra: "B",
        texto: "A licença é ato vinculado e definitivo, ao passo que a autorização é ato discricionário e precário.",
        correta: true,
        explicacao_especifica: "Correto. Trata-se da clássica distinção doutrinária: preenchidos os requisitos, a licença é direito subjetivo; a autorização é juízo discricionário precário."
      },
      {
        letra: "C",
        texto: "Ambos são atos bilaterais contratuais subordinados à prévia licitação na modalidade concorrência.",
        correta: false,
        explicacao_especifica: "Incorreto. Licença e autorização são atos administrativos unilaterais e não contratos bilaterais."
      },
      {
        letra: "D",
        texto: "A autorização gera direito adquirido imutável ao administrado, sendo insuscetível de revogação posterior.",
        correta: false,
        explicacao_especifica: "Incorreto. A precariedade da autorização permite sua revogação discricionária pela Administração."
      },
      {
        letra: "E",
        texto: "A licença depende sempre de homologação judicial obrigatória para surtir efeitos perante terceiros.",
        correta: false,
        explicacao_especifica: "Incorreto. A licença é ato administrativo típico expedido pelo Poder Executivo e autoexecutável."
      }
    ]
  },

  // 025 - Atos Administrativos: Imperatividade e Autoexecutoriedade
  {
    idSlug: "batch3-adm-025",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O atributo da imperatividade está presente em todos os atos administrativos, inclusive naqueles que conferem direitos a pedido do particular (atos negociais, como a concessão de uma certidão ou autorização).",
    explicacao: "GABARITO: ERRADO. O atributo da imperatividade (prerrogativa pela qual os atos administrativos impõem obrigações aos administrados independentemente de sua concordância) NÃO está presente em todos os atos administrativos. Ele não existe nos atos enunciativos (como certidões e atestados) nem nos atos negociais/ampliativos (como autorizações e licenças solicitadas voluntariamente pelo administrado).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Incorreto. A imperatividade não é universal; ela falta em atos negociais e atos meramente enunciativos."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. Atos negociais (autorizações, licenças) e enunciativos (certidões) não possuem o atributo da imperatividade."
      }
    ]
  },

  // 026 - Atos Administrativos: Elementos do Ato e Limites da Convalidação
  {
    idSlug: "batch3-adm-026",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado da Bahia (PC-BA)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Quanto aos elementos constitutivos do ato administrativo (competência, finalidade, forma, motivo e objeto), assinale a opção que indica elementos cujos vícios, em regra, NUNCA admitem convalidação, impondo-se a anulação do ato:",
    explicacao: "GABARITO: C. Os elementos cujos vícios são insanáveis e nunca admitem convalidação são: Finalidade (o desvio de poder/finalidade contamina irremediavelmente o ato), Motivo (falso, inexistente ou juridicamente inadequado) e Objeto ilícito ou juridicamente impossível. A convalidação só é admitida para defeitos sanáveis de Competência (desde que não privativa/exclusiva e sem usurpação de poder) e de Forma (desde que a lei não a exija como requisito ad solemnitatem / essencial à validade).",
    alternativas: [
      {
        letra: "A",
        texto: "Competência relativa concorrente e forma secundária não prescrita em lei como essencial.",
        correta: false,
        explicacao_especifica: "Incorreto. Vícios de competência concorrente e forma secundária são sanáveis e admitem convalidação (FO-CO)."
      },
      {
        letra: "B",
        texto: "Forma prescrita em norma infralegal sem cominação expressa de nulidade.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se de defeito de forma passível de ratificação/convalidação."
      },
      {
        letra: "C",
        texto: "Finalidade (desvio de poder), Motivo (inexistente ou falso) e Objeto (ilícito).",
        correta: true,
        explicacao_especifica: "Correto. Vícios de finalidade, motivo e objeto são insanáveis por afetarem o cerne substancial da legalidade e moralidade do ato."
      },
      {
        letra: "D",
        texto: "Competência delegável e ratificação expressa pelo órgão superior hierárquico.",
        correta: false,
        explicacao_especifica: "Incorreto. Competência delegável comporta plena convalidação pelo superior."
      },
      {
        letra: "E",
        texto: "Local e horário de assinatura digital de portaria expedida por autoridade competente.",
        correta: false,
        explicacao_especifica: "Incorreto. Meras irregularidades acessórias de registro formal são convalidáveis."
      }
    ]
  },

  // 027 - Atos Administrativos: Atos Complexos vs Atos Compostos
  {
    idSlug: "batch3-adm-027",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O ato complexo é aquele que resulta da manifestação de dois ou mais órgãos administrativos diferentes, cujas vontades se fundem para formar um único ato administrativo; diferentemente, o ato composto resulta da manifestação de vontade de um único órgão principal, que depende apenas da aprovação, homologação ou visto de outro órgão para produzir seus regulares efeitos.",
    explicacao: "GABARITO: CERTO. A assertiva traz a exata distinção doutrinária: 1) Ato Complexo: fusão de vontades de múltiplos órgãos para a formação de um só ato (ex: nomeação de Ministro de Tribunal Superior após indicação presidencial e sabatina do Senado; concessão de aposentadoria após registro pelo Tribunal de Contas); 2) Ato Composto: ato principal praticado por um órgão e ato acessório (homologação/aprovação/visto) praticado por outro para conferir-lhe exequibilidade.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. No ato complexo há duas ou mais vontades fundidas para a formação do ato único; no composto há ato principal dependente de ato acessório homologatório."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A conceituação apresentada é precisa e consagrada pela jurisprudência e doutrina."
      }
    ]
  },

  // 028 - Atos Administrativos: Caducidade e Contraposição
  {
    idSlug: "batch3-adm-028",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Determinada autoridade policial estadual concedeu permissão de uso de um estande de tiros público a uma associação de tiro esportivo particular. Um ano após, sobreveio lei estadual expressa proibindo terminantemente qualquer cessão ou uso de instalações policiais por entidades privadas civis. A superveniência de norma jurídica incompatível com a manutenção dos efeitos do ato administrativo originariamente válido gera a sua extinção por:",
    explicacao: "GABARITO: A (Caducidade). A caducidade (ou decaimento) ocorre quando o ato administrativo, embora válido no momento de sua edição, perde seus efeitos em virtude de uma norma legal superveniente que tornou a situação incompatível com o ordenamento jurídico. Não se confunde com anulação (vício na origem), revogação (conveniência), cassação (culpa do administrado) ou contraposição/derrubada (novo ato com efeitos opostos emitido com base em competência diversa).",
    alternativas: [
      {
        letra: "A",
        texto: "Caducidade, caracterizada pela superveniência de lei nova que veda a situação anteriormente admitida pelo ato.",
        correta: true,
        explicacao_especifica: "Correto. A caducidade opera quando uma norma jurídica posterior torna ilegítima a continuidade da relação jurídica constituída por ato anterior."
      },
      {
        letra: "B",
        texto: "Cassação, pois a entidade particular incidiu em falta culposa insanável.",
        correta: false,
        explicacao_especifica: "Incorreto. A cassação decorre de infração do beneficiário; no caso, a perda deu-se por alteração legislativa geral."
      },
      {
        letra: "C",
        texto: "Convalidação tácita com efeitos repristinatórios imediatos.",
        correta: false,
        explicacao_especifica: "Incorreto. Não houve convalidação, mas cessação de vigência por incompatibilidade superveniente."
      },
      {
        letra: "D",
        texto: "Anulação ex tunc com dever de indenização integral de lucros cessantes.",
        correta: false,
        explicacao_especifica: "Incorreto. O ato era válido na sua origem, logo não cabe anulação retroativa."
      },
      {
        letra: "E",
        texto: "Renúncia tácita voluntária do órgão público cedente.",
        correta: false,
        explicacao_especifica: "Incorreto. A extinção decorreu da força cogente da lei nova e não de declaração de renúncia."
      }
    ]
  },

  // 029 - Agentes Públicos: Formas de Provimento (Reintegração e Situação do Ocupante)
  {
    idSlug: "batch3-adm-029",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com a Lei nº 8.112/1990 e a Constituição Federal, a reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, ou no cargo resultante de sua transformação, quando invalidada a sua demissão por decisão administrativa ou judicial, com ressarcimento de todas as vantagens; nessa hipótese, o eventual ocupante da vaga, se estável, será reconduzido ao cargo de origem, sem direito a indenização, aproveitado em outro cargo ou posto em disponibilidade.",
    explicacao: "GABARITO: CERTO. A assertiva reproduz fielmente a redação do art. 28 da Lei nº 8.112/1990 e do art. 41, § 2º, da Constituição Federal. Invalidada por sentença judicial a demissão do servidor estável, ele será reintegrado, e o eventual ocupante da vaga, se estável, reconduzido ao cargo de origem sem direito a indenização, aproveitado em outro cargo ou posto em disponibilidade remunerada proporcional.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O preceito espelha o art. 41, § 2º da CF/88 e o art. 28 da Lei 8.112/90 quanto à reintegração e ao tratamento dado ao ocupante estável."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A regra constitucional e legal determina exatamente a reintegração com ressarcimento e a recondução sem indenização do ocupante."
      }
    ]
  },

  // 030 - Agentes Públicos: Espécies de Provimento Derivado na Lei 8.112/1990
  {
    idSlug: "batch3-adm-030",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Policial civil estável sofreu limitação física e motora permanente na capacidade laborativa em decorrência de confronto armado em serviço, atestada por junta médica oficial. Foi então investido em cargo de atribuições e responsabilidades compatíveis com a limitação sofrida, respeitada a habilitação exigida e nível de escolaridade. Esse instituto de provimento derivado denomina-se:",
    explicacao: "GABARITO: B (Readaptação). O art. 24 da Lei nº 8.112/1990 (e legislações estaduais congêneres) define a readaptação como a investidura do servidor em cargo de atribuições e responsabilidades compatíveis com a limitação que tenha sofrido em sua capacidade física ou mental verificada em inspeção médica. Reversão é o retorno do aposentado (art. 25); Recondução é o retorno do servidor estável ao cargo anterior após inabilitação em estágio probatório de outro cargo ou reintegração do anterior ocupante (art. 29); Reintegração decorre da anulação da demissão (art. 28); Aproveitamento é o retorno do servidor em disponibilidade (art. 30).",
    alternativas: [
      {
        letra: "A",
        texto: "Reversão funcional por invalidez sanada.",
        correta: false,
        explicacao_especifica: "Incorreto. Reversão é o retorno à atividade do servidor aposentado (art. 25 da Lei 8.112/90)."
      },
      {
        letra: "B",
        texto: "Readaptação, consistente na investidura em cargo compatível com a limitação física ou mental sofrida.",
        correta: true,
        explicacao_especifica: "Correto. O art. 24 da Lei 8.112/90 conceitua a readaptação como a investidura em cargo compatível com a limitação física ou mental superveniente."
      },
      {
        letra: "C",
        texto: "Recondução motivada por inabilitação em estágio probatório de carreira distinta.",
        correta: false,
        explicacao_especifica: "Incorreto. Recondução decorre de reprovação em estágio probatório ou reintegração do anterior ocupante."
      },
      {
        letra: "D",
        texto: "Aproveitamento extraordinário em cargo em comissão de chefia.",
        correta: false,
        explicacao_especifica: "Incorreto. Aproveitamento é o reingresso do servidor estável que se encontrava em disponibilidade."
      },
      {
        letra: "E",
        texto: "Transferência vertical de carreira policial.",
        correta: false,
        explicacao_especifica: "Incorreto. A transferência e a ascensão foram banidas do ordenamento (Súmula Vinculante 43 do STF)."
      }
    ]
  }
];
