import { TAXONOMIA } from "./taxonomia.mjs";

export const dhQuestions = [
  // ==========================================
  // BLOCO 1: DECLARAÇÃO UNIVERSAL DOS DIREITOS HUMANOS (1948)
  // ==========================================
  {
    idSlug: "batch3-dh-001",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.dudh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Adotada em 1948 pela Assembleia Geral das Nações Unidas por meio da Resolução 217-A (III), a Declaração Universal dos Direitos Humanos (DUDH) não possui a forma formal de tratado internacional, tendo sido concebida originalmente sob a roupagem de 'soft law' (recomendação). Não obstante, a doutrina jusinternacionalista e as cortes internacionais consagram que grande parte de suas disposições adquiriu status de direito internacional consuetudinário e de princípios gerais do direito internacional, possuindo inquestionável força cogente e orientadora global.",
    explicacao: "GABARITO: CERTO. A DUDH foi proclamada como Resolução 217-A (III) da Assembleia Geral da ONU, não ostentando natureza originária de tratado em sentido estrito (ausência de ratificação formal). Contudo, em decorrência da prática reiterada e da opinio juris dos Estados ao longo das décadas, seus preceitos foram alçados à categoria de direito internacional costumeiro (consuetudinário) e princípios gerais de direito, irradiando força vinculante e servindo de matriz interpretativa de direitos humanos em escala universal.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A DUDH é uma resolução da AGNU (soft law originário) que evoluiu para o direito consuetudinário internacional com indiscutível autoridade vinculante e moral."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A assertiva está correta: a DUDH não nasceu formalmente como tratado de ratificação obrigatória, mas ascendeu ao costume internacional cogente."
      }
    ]
  },
  {
    idSlug: "batch3-dh-002",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.dudh,
    banca_nome: "FGV",
    orgao_nome: "PC-SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Durante diligência policial para desarticular organização criminosa armada, agentes de polícia capturam um dos suspeitos e pretendem submetê-lo a interrogatório imediato sob métodos de coação psicológica severa para obtenção de informações sobre o cativeiro de uma vítima de sequestro em andamento. Considerando as disposições imperativas da Declaração Universal dos Direitos Humanos (DUDH) de 1948 sobre a integridade da pessoa humana e a proibição da tortura, assinale a afirmativa correta.",
    explicacao: "GABARITO: O Artigo 5º da DUDH prescreve de modo peremptório e absoluto que 'ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante'. No direito internacional dos direitos humanos, a vedação à tortura e aos tratamentos desumanos constitui norma de jus cogens (inderrogável e absoluta), não admitindo ponderação, estado de necessidade, justificativa de urgência ('cenário da bomba-relógio') ou qualquer relativização funcional em atividade policial.",
    alternativas: [
      {
        letra: "A",
        texto: "A proibição da tortura é absoluta na DUDH, constituindo norma peremptória de direito internacional (jus cogens) que não admite ponderação, estado de necessidade ou exceção sob pretexto funcional de urgência investigativa.",
        correta: true,
        explicacao_especifica: "O Artigo 5º da DUDH consagra a proibição da tortura e tratamentos degradantes em caráter absoluto e incondicional (jus cogens)."
      },
      {
        letra: "B",
        texto: "A DUDH admite mitigação temporária das garantias de integridade física e psicológica em situações de iminente risco à vida de terceiros, desde que haja chancela posterior do Ministério Público.",
        correta: false,
        explicacao_especifica: "A DUDH e os tratados de direitos humanos não contemplam qualquer cláusula de derrogação ou exceção permissiva à tortura ou coerção degradante."
      },
      {
        letra: "C",
        texto: "A coação psicológica qualificada, quando desprovida de violência física aparente, não é abrangida pelo conceito de tratamento desumano ou degradante do Artigo 5º da DUDH.",
        correta: false,
        explicacao_especifica: "Tratamentos cruéis, desumanos ou degradantes englobam agressões psicológicas, privação de sono e coações morais severas."
      },
      {
        letra: "D",
        texto: "A DUDH prevê que apenas a tortura física praticada contra sentenciados transitados em julgado é expressamente vedada, remetendo a custódia investigativa prévia à lei doméstica de cada Estado.",
        correta: false,
        explicacao_especifica: "A vedação protege toda e qualquer pessoa humana indistintamente, independentemente da fase processual ou de imputação penal."
      },
      {
        letra: "E",
        texto: "A atuação policial com emprego de métodos coercitivos extremos é tutelada pela DUDH sob a cláusula geral de preservação da ordem pública do Artigo 29.",
        correta: false,
        explicacao_especifica: "O Artigo 29 da DUDH trata dos deveres perante a comunidade e limites estritos da lei democrática, jamais servindo de salvaguarda para violar direitos nucleares indeclináveis."
      }
    ]
  },
  {
    idSlug: "batch3-dh-003",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.dudh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2023,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos termos do Artigo 14 da Declaração Universal dos Direitos Humanos, toda pessoa vítima de perseguição tem o direito de procurar e de gozar asilo em outros países. Todavia, esse direito não pode ser validamente invocado no caso de perseguições genuinamente motivadas por crimes de direito comum ou por atos contrários aos objetivos e princípios das Nações Unidas.",
    explicacao: "GABARITO: CERTO. O Artigo 14, item 1, da DUDH assegura o direito de procurar e gozar asilo em caso de perseguição (política, ideológica, religiosa). Por outro lado, o item 2 do mesmo artigo explicita expressamente a cláusula excludente: 'Este direito não pode ser invocado em caso de perseguição legitimamente motivada por crimes de direito comum ou por atos contrários aos objetivos e princípios das Nações Unidas'. Trata-se de dispositivo basilar cobrado com frequência em concursos da Polícia Federal.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O Art. 14, 2, da DUDH expressamente excepciona o asilo quando a persecução tiver por fundamento crimes comuns ou atos contrários aos fins da ONU."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Item correto. O direito de asilo não é irrestrito, vedando-se sua invocação por autores de crimes comuns genuínos."
      }
    ]
  },
  {
    idSlug: "batch3-dh-004",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.dudh,
    banca_nome: "VUNESP",
    orgao_nome: "PC-SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "No âmbito das garantias de justiça penal asseguradas pela Declaração Universal dos Direitos Humanos de 1948, o Artigo 11 estabelece postulados fundamentais do devido processo penal. A esse respeito, a DUDH prevê expressamente que:",
    explicacao: "GABARITO: O Artigo 11, 1, da DUDH estabelece: 'Toda pessoa acusada de um ato delituoso tem o direito de ser presumida inocente até que a sua culpabilidade tenha sido provada de acordo com a lei, em julgamento público no qual lhe tenham sido asseguradas todas as garantias necessárias à sua defesa'. Além disso, o item 2 do Artigo 11 consagra o princípio da legalidade estrita e da irretroatividade da lei penal mais gravosa.",
    alternativas: [
      {
        letra: "A",
        texto: "A prisão cautelar de suspeitos de crimes violentos dispensa fundamentação judicial prévia quando necessária à ordem pública.",
        correta: false,
        explicacao_especifica: "A DUDH veda a prisão arbitrária (Art. 9º) e assegura julgamento público e contraditório."
      },
      {
        letra: "B",
        texto: "Toda pessoa acusada de ato delituoso presume-se inocente até que a sua culpabilidade tenha sido provada de acordo com a lei, em julgamento público com todas as garantias de defesa.",
        correta: true,
        explicacao_especifica: "Enunciação literal do princípio da presunção de inocência contido no Artigo 11, item 1, da DUDH."
      },
      {
        letra: "C",
        texto: "A lei penal posterior mais severa pode retroagir para punir atos que causaram comoção social internacional relevante.",
        correta: false,
        explicacao_especifica: "O Artigo 11, 2, veda terminantemente a imposição de pena mais pesada do que aquela aplicável no momento da prática do delito."
      },
      {
        letra: "D",
        texto: "O ônus de comprovar a inocência recai sobre o investigado logo após a formalização do indiciamento policial.",
        correta: false,
        explicacao_especifica: "A presunção de inocência impõe o ônus da prova à acusação, não cabendo ao indivíduo provar sua inocência."
      },
      {
        letra: "E",
        texto: "O direito à defesa técnica gratuita só se aplica após o oferecimento e recebimento formal da denúncia criminal.",
        correta: false,
        explicacao_especifica: "As garantias de defesa são amplas e irradiam-se por toda a persecução penal cabível."
      }
    ]
  },
  {
    idSlug: "batch3-dh-005",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.dudh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "PC-DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2023,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Declaração Universal dos Direitos Humanos de 1948 inovou no cenário internacional ao consagrar de maneira integrada tanto direitos civis e políticos quanto direitos econômicos, sociais e culturais, assentando as bases teóricas para o postulado contemporâneo da indivisibilidade, universalidade e interdependência dos direitos humanos, reafirmado formalmente na Conferência Mundial de Viena de 1993.",
    explicacao: "GABARITO: CERTO. A DUDH reúne no mesmo documento direitos civis e políticos (arts. 3º ao 21) e direitos econômicos, sociais e culturais (arts. 22 ao 28). Essa estrutura unificada consolidou a concepção de que os direitos humanos formam um bloco indivisível e interdependente, na medida em que a plena realização das liberdades civis pressupõe a fruição de condições materiais mínimas e vice-versa, princípio solenemente reafirmado pela Declaração e Programa de Ação de Viena de 1993.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A DUDH integrou formalmente liberdades civis/políticas e direitos sociais/econômicos em um único catálogo universal e indivisível."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Item correto. A DUDH superou a cisão ideológica entre blocos ao catalogar ambas as categorias de direitos sob a égide da indivisibilidade."
      }
    ]
  },
  {
    idSlug: "batch3-dh-006",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.dudh,
    banca_nome: "FCC",
    orgao_nome: "PC-AP",
    cargo_nome: "Delegado de Polícia",
    ano: 2022,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O Artigo 20 da Declaração Universal dos Direitos Humanos (DUDH) tutela a liberdade de reunião e de associação pacíficas. Consoante os termos exatos do diploma internacional e os limites por ele impostos:",
    explicacao: "GABARITO: O Artigo 20 da DUDH prescreve: '1. Toda pessoa tem direito à liberdade de reunião e de associação pacíficas. 2. Ninguém pode ser obrigado a fazer parte de uma associação'. A garantia resguarda o aspecto positivo (associar-se) e o negativo (não ser compelido a associar-se ou a permanecer associado).",
    alternativas: [
      {
        letra: "A",
        texto: "A filiação compulsória a corporações estatais de segurança é exigível a qualquer cidadão que ocupe cargo na administração indireta.",
        correta: false,
        explicacao_especifica: "O Artigo 20, item 2, veda que qualquer pessoa seja coagida a fazer parte de associação."
      },
      {
        letra: "B",
        texto: "Toda pessoa tem direito à liberdade de reunião e de associação pacíficas, sendo vedado compelir qualquer indivíduo a fazer parte de uma associação.",
        correta: true,
        explicacao_especifica: "Corresponde com exatidão ao texto do Artigo 20, itens 1 e 2, da DUDH."
      },
      {
        letra: "C",
        texto: "O direito de reunião pacífica depende de prévia autorização discricionária da autoridade de polícia judiciária territorial.",
        correta: false,
        explicacao_especifica: "A liberdade de reunião pacífica independe de autorização estatal, sujeitando-se apenas a prévio aviso conforme a ordem constitucional democrática."
      },
      {
        letra: "D",
        texto: "Associações paramilitares voltadas à segurança de bairros residenciais são legitimadas pelo princípio da subsidiariedade.",
        correta: false,
        explicacao_especifica: "A DUDH protege reuniões e associações pacíficas, excluindo formações paramilitares ou violentas."
      },
      {
        letra: "E",
        texto: "A DUDH proíbe reuniões públicas em locais abertos quando versarem sobre matérias de oposição aos governos legalmente constituídos.",
        correta: false,
        explicacao_especifica: "O livre direito de manifestação política e crítica pacífica é a essência das liberdades fundamentais asseguradas pela DUDH."
      }
    ]
  },

  // ==========================================
  // BLOCO 2: CONVENÇÃO AMERICANA SOBRE DIREITOS HUMANOS (CADH) & STF
  // ==========================================
  {
    idSlug: "batch3-dh-007",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Segundo o histórico julgamento do Recurso Extraordinário 466.343/SP pelo Supremo Tribunal Federal, os tratados e convenções internacionais de direitos humanos ratificados pelo Brasil pelo procedimento ordinário (antes ou depois da Emenda Constitucional nº 45/2004, sem o quórum qualificado do art. 5º, § 3º, da CF/88) ostentam status de supralegalidade, situando-se abaixo da Constituição, mas acima de toda a legislação ordinária interna.",
    explicacao: "GABARITO: CERTO. No julgamento do RE 466.343/SP (rel. Min. Cezar Peluso / voto condutor Min. Gilmar Mendes), o Plenário do STF superou a antiga tese da paridade com a lei ordinária e fixou a tese da supralegalidade dos tratados de direitos humanos incorporados pelo rito ordinário. Tais diplomas situam-se em patamar intermediário: infraconstitucional, porém supralegal, produzindo efeito paralisante imediato sobre qualquer legislação infraconstitucional com eles incompatível.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O STF fixou a supralegalidade dos tratados de direitos humanos ratificados pelo rito comum, atribuindo-lhes força paralisante sobre leis ordinárias contrárias."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A assertiva está correta: o STF abandonou o status puramente ordinário para os tratados de DH, consagrando o status supralegal."
      }
    ]
  },
  {
    idSlug: "batch3-dh-008",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "FGV",
    orgao_nome: "PC-RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2023,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O Artigo 4º da Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) disciplina de forma minudente o direito à vida. Acerca das regras sobre a pena de morte e a tutela do direito à vida na CADH, assinale a opção correta.",
    explicacao: "GABARITO: O Artigo 4º da CADH traz três diretrizes fundamentais: 1) o direito à vida é protegido pela lei e, em geral, desde a concepção (art. 4.1); 2) nos países que não tenham abolido a pena de morte, esta só poderá ser imposta para os delitos mais graves e nunca por delitos políticos ou conexos (art. 4.2 e 4.4); 3) a cláusula de não retrocesso / vedação do efeito guilhotina (art. 4.3): não se pode restabelecer a pena de morte nos Estados que a hajam abolido.",
    alternativas: [
      {
        letra: "A",
        texto: "Os Estados que hajam abolido a pena de morte podem restabelecê-la posteriormente mediante emenda constitucional aprovada por maioria absoluta em situações de guerra civil interna.",
        correta: false,
        explicacao_especifica: "O Artigo 4.3 da CADH estabelece expressamente: 'Não se pode restabelecer a pena de morte nos Estados que a hajam abolido' (efeito cliquet / vedação de retrocesso)."
      },
      {
        letra: "B",
        texto: "A pena de morte pode ser aplicada a pessoas que tenham menos de dezoito anos de idade na data do delito, desde que imputáveis penalmente segundo a lei local.",
        correta: false,
        explicacao_especifica: "O Artigo 4.5 da CADH veda terminantemente a aplicação da pena de morte a pessoas com menos de 18 anos, maiores de 70 anos e mulheres grávidas."
      },
      {
        letra: "C",
        texto: "O direito à vida deve ser protegido pela lei e, em geral, desde a concepção, sendo vedado restabelecer a pena de morte nos Estados-Partes que a tenham abolido.",
        correta: true,
        explicacao_especifica: "Consonância estrita com os arts. 4.1 e 4.3 da Convenção Americana sobre Direitos Humanos."
      },
      {
        letra: "D",
        texto: "A CADH autoriza a aplicação da pena de morte para qualquer crime hediondo ou contra a administração pública, mesmo que ausente violência real contra pessoas.",
        correta: false,
        explicacao_especifica: "A CADH restringe a aplicação apenas aos delitos mais graves de sangue e com previsão legal estrita anterior à sua prática."
      },
      {
        letra: "E",
        texto: "A CADH assegura a aplicação de pena capital para delitos políticos e comuns conexos em razão de sua gravidade institucional contra o Estado.",
        correta: false,
        explicacao_especifica: "O Artigo 4.4 da CADH prescreve expressamente: 'Em nenhum caso se pode aplicar a pena de morte por delitos políticos, nem por delitos comuns conexos com delitos políticos'."
      }
    ]
  },
  {
    idSlug: "batch3-dh-009",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O direito de qualquer pessoa presa em flagrante ou por ordem judicial de ser conduzida, sem demora, à presença de um juiz ou outra autoridade autorizada por lei a exercer funções judiciais, consagrado no Artigo 7º, item 5, da Convenção Americana sobre Direitos Humanos, fundamentou a implementação originária da audiência de custódia no ordenamento jurídico brasileiro (Resolução CNJ nº 213/2015 e ADPF 347/STF), tratando-se de garantia convencional dotada de autoaplicabilidade que independia de prévia alteração do Código de Processo Penal.",
    explicacao: "GABARITO: CERTO. A audiência de custódia foi introduzida no Brasil a partir da aplicação direta e do controle de convencionalidade do Artigo 7º, 5, da CADH e do Artigo 9º, 3, do PIDCP, impulsionada pelo STF no julgamento da ADPF 347 e regulamentada pela Resolução CNJ 213/2015, muito antes de sua positivação formal no Código de Processo Penal pela Lei nº 13.964/2019 (Pacote Anticrime, art. 310 do CPP). O STF reconheceu expressamente a autoaplicabilidade da garantia convencional.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A audiência de custódia decorreu da autoaplicabilidade do art. 7.5 da CADH e do reconhecimento jurisprudencial do STF na ADPF 347 antes do Pacote Anticrime."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A assertiva está correta: a CADH conferiu o substrato convencional direto e autoaplicável que viabilizou a audiência de custódia no Brasil."
      }
    ]
  },
  {
    idSlug: "batch3-dh-010",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "VUNESP",
    orgao_nome: "PC-SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2023,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O Artigo 7º, item 7, da Convenção Americana sobre Direitos Humanos dispõe que ninguém deve ser detido por dívidas, ressalvando unicamente a prisão por inadimplemento de obrigação alimentar. Em face dessa norma convencional e da jurisprudência consolidada no âmbito do STF, assinale a opção que reflete o enunciado da Súmula Vinculante nº 25.",
    explicacao: "GABARITO: A Súmula Vinculante 25 do STF dispõe expressamente: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito'. Em razão do status supralegal da CADH (art. 7.7), as normas infraconstitucionais brasileiras que previam a prisão do depositário infiel tiveram sua eficácia suspensa/paralisada, restando unicamente admitida no Brasil a prisão civil do devedor inescusável de alimentos.",
    alternativas: [
      {
        letra: "A",
        texto: "É lícita a prisão civil do depositário infiel no caso de alienação fiduciária em garantia com prévia interpelação cartorária.",
        correta: false,
        explicacao_especifica: "A Súmula Vinculante 25 pacificou a ilicitude da prisão em qualquer modalidade de depósito, inclusive alienação fiduciária."
      },
      {
        letra: "B",
        texto: "É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.",
        correta: true,
        explicacao_especifica: "Teor exato e literal da Súmula Vinculante nº 25 do STF decorrente do impacto supralegal da CADH."
      },
      {
        letra: "C",
        texto: "A prisão civil por dívida tributária qualificada é admitida quando o sujeito passivo for reincidente específico em sonegação fiscal.",
        correta: false,
        explicacao_especifica: "A CADH e a CF/88 não admitem prisão civil por dívidas fiscais ou obrigações contratuais patrimoniais."
      },
      {
        letra: "D",
        texto: "A prisão do depositário infiel judicial permanece válida por decorrer de mandado expedido por juiz competente da execução cível.",
        correta: false,
        explicacao_especifica: "A Súmula Vinculante 25 abrange todas as modalidades de depósito, sejam contratuais ou judiciais."
      },
      {
        letra: "E",
        texto: "A prisão civil do devedor de alimentos foi revogada pela CADH por equiparação à vedação genérica de prisão por dívida.",
        correta: false,
        explicacao_especifica: "A obrigação alimentar é a única e expressa ressalva permitida pelo art. 7.7 da CADH e mantida na CF/88."
      }
    ]
  },
  {
    idSlug: "batch3-dh-011",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "SENAPPEN / DEPEN",
    cargo_nome: "Policial Penal Federal",
    ano: 2023,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos termos da Convenção Americana sobre Direitos Humanos (Artigo 6º), ninguém pode ser submetido a escravidão ou servidão. Nada obstante a proibição geral de trabalhos forçados, a CADH estabelece expressamente que não se inclui no conceito de trabalho forçado proibido aquele ordinariamente exigido de pessoa reclusa em cumprimento de sentença judicial condenatória, desde que executado sob a vigilância e controle de autoridades públicas e sem cessão em proveito de entidades privadas.",
    explicacao: "GABARITO: CERTO. O Artigo 6.2 da CADH proíbe o trabalho forçado ou obrigatório, mas o Artigo 6.3, 'a', ressalva: não constitui trabalho forçado proibido 'qualquer trabalho ou serviço normalmente exigido de pessoa reclusa em cumprimento de sentença ou resolução formal emanada de autoridade judiciária competente. Tal trabalho ou serviço deve ser executado sob a vigilância e controle das autoridades públicas, e os indivíduos que o executem não devem ser postos à disposição de particulares, companhias ou pessoas jurídicas de caráter privado'.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O trabalho prisional regulamentar e sob controle público é expressamente ressalvado no art. 6.3, 'a', da CADH, não configurando trabalho escravo ou forçado ilícito."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A assertiva está correta: a CADH contém ressalva explícita autorizando o trabalho de presos sob controle estatal e supervisão judicial."
      }
    ]
  },
  {
    idSlug: "batch3-dh-012",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "IBFC",
    orgao_nome: "PC-BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2022,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O Artigo 8º da Convenção Americana sobre Direitos Humanos consagra as Garantias Judiciais mínimas conferidas a qualquer pessoa acusada de delito. No que tange aos direitos do indiciado ou investigado durante as fases da persecução penal, a CADH assegura expressamente:",
    explicacao: "GABARITO: O Artigo 8.2, 'g', da CADH assegura expressamente o 'direito de não ser obrigado a depor contra si mesma, nem a declarar-se culpada' (privilégio contra a autoincriminação / nemo tenetur se detegere). Além disso, o art. 8.3 preconiza que a confissão do acusado só é válida se feita sem coação de nenhuma natureza.",
    alternativas: [
      {
        letra: "A",
        texto: "O direito de ser assistido obrigatoriamente por advogado apenas na audiência de instrução e julgamento perante o juízo singular.",
        correta: false,
        explicacao_especifica: "A CADH garante a assistência jurídica irrestrita em todas as etapas da persecução (art. 8.2, 'd' e 'e')."
      },
      {
        letra: "B",
        texto: "O direito inalienável de não ser obrigado a depor contra si mesmo nem a declarar-se culpado, e a invalidade da confissão obtida sob coação.",
        correta: true,
        explicacao_especifica: "Disposição literal dos artigos 8.2, 'g', e 8.3 da Convenção Americana sobre Direitos Humanos."
      },
      {
        letra: "C",
        texto: "A validade probatória de depoimento obtido sem a advertência do direito ao silêncio caso o investigado confesse crime inafiançável.",
        correta: false,
        explicacao_especifica: "A confissão sem advertência do silêncio ou sob vício volitivo é nula no sistema interamericano e constitucional."
      },
      {
        letra: "D",
        texto: "A possibilidade de comunicação prévia da acusação ocorrer somente por ocasião das alegações finais do Ministério Público.",
        correta: false,
        explicacao_especifica: "O art. 8.2, 'b', assegura a comunicação prévia e pormenorizada da acusação formulada."
      },
      {
        letra: "E",
        texto: "O direito da autoridade policial de presumir a veracidade da imputação caso o investigado exerça o direito de permanecer em silêncio.",
        correta: false,
        explicacao_especifica: "O silêncio é garantia convencional e jamais pode ser interpretado em desfavor do investigado."
      }
    ]
  },
  {
    idSlug: "batch3-dh-013",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em situações excepcionais de guerra, perigo público ou emergência que ameace a independência ou a segurança do Estado-Parte, o Artigo 27 da Convenção Americana sobre Direitos Humanos autoriza a suspensão temporária de determinadas obrigações convencionais. Contudo, essa faculdade derrogatória é expressamente vedada em relação a um núcleo duro inderrogável de direitos, dentre os quais figuram o direito à vida, o direito à integridade pessoal, a proibição da escravidão e servidão, o princípio da legalidade e da irretroatividade da lei penal, a liberdade de consciência e de religião, e as garantias judiciais indispensáveis à proteção de tais direitos.",
    explicacao: "GABARITO: CERTO. O Artigo 27.2 da CADH delimita com precisão a cláusula de direitos inderrogáveis (núcleo duro de direitos humanos). Mesmo sob estado de exceção, cerco ou guerra, o Estado NÃO pode suspender os direitos previstos nos artigos: 3º (personalidade jurídica), 4º (vida), 5º (integridade pessoal), 6º (proibição da escravidão e servidão), 9º (princípio da legalidade e retroatividade benéfica), 12 (liberdade de consciência e religião), 17 (proteção da família), 18 (direito ao nome), 19 (direitos da criança), 20 (nacionalidade), 23 (direitos políticos), nem as garantias judiciais indispensáveis à proteção desses direitos (habeas corpus, amparo judicial).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O Art. 27.2 da CADH prevê o rol taxativo de direitos inalienáveis que jamais podem ser suspensos em estados de emergência ou guerra."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Item correto. O direito à vida, integridade pessoal, legalidade penal e garantias judiciais nucleares são inderrogáveis sob qualquer pretexto."
      }
    ]
  },
  {
    idSlug: "batch3-dh-014",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "Instituto AOCP",
    orgao_nome: "PC-GO",
    cargo_nome: "Agente de Polícia Civil",
    ano: 2023,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O Artigo 13 da Convenção Americana sobre Direitos Humanos estabelece balizas rigorosas sobre a liberdade de pensamento e de expressão. Sobre a vedação à censura prévia e as responsabilidades ulteriores admitidas pelo tratado, assinale a afirmativa correta.",
    explicacao: "GABARITO: O Artigo 13 da CADH veda terminantemente a censura prévia (art. 13.2), admitindo unicamente responsabilidades ulteriores expressamente fixadas em lei e necessárias para assegurar o respeito aos direitos de outrem ou a proteção da segurança nacional, ordem pública, saúde ou moral públicas. A única exceção de censura/controle prévio admitida pela própria CADH reside nos espetáculos públicos, exclusivamente para proteção moral da infância e adolescência (art. 13.4). Além disso, o art. 13.5 proíbe por lei qualquer propaganda a favor da guerra e apologia ao ódio nacional, racial ou religioso (discurso de ódio).",
    alternativas: [
      {
        letra: "A",
        texto: "A autoridade policial pode exercer censura prévia sobre publicações jornalísticas que exponham métodos sigilosos de investigação criminal.",
        correta: false,
        explicacao_especifica: "O Art. 13.2 proíbe expressamente a censura prévia por qualquer autoridade estatal, cabendo apenas responsabilização ulterior."
      },
      {
        letra: "B",
        texto: "O exercício da liberdade de pensamento e expressão não pode estar sujeito a censura prévia, mas a responsabilidades ulteriores expressamente fixadas em lei, sendo vedada por lei qualquer apologia ao ódio que incite à violência.",
        correta: true,
        explicacao_especifica: "Reproduz a exata harmonia dos itens 2 e 5 do Artigo 13 da Convenção Americana sobre Direitos Humanos."
      },
      {
        letra: "C",
        texto: "A CADH autoriza a restrição do direito de expressão por vias ou meios indiretos, tais como o monopólio estatal sobre o papel de imprensa e frequências de rádio.",
        correta: false,
        explicacao_especifica: "O Artigo 13.3 veda taxativamente a restrição da liberdade de expressão por meios indiretos estatais ou privados."
      },
      {
        letra: "D",
        texto: "Espetáculos públicos voltados ao público em geral podem ser objeto de censura prévia ideológica com base no princípio da soberania nacional.",
        correta: false,
        explicacao_especifica: "O Artigo 13.4 restringe a regulação prévia de espetáculos unicamente ao acesso de menores para fins de classificação etária."
      },
      {
        letra: "E",
        texto: "A manifestação do pensamento é irrestrita na CADH, não se admitindo sanções ulteriores mesmo em caso de calúnia ou incitação ao genocídio.",
        correta: false,
        explicacao_especifica: "A liberdade de expressão não protege a impunidade por crimes contra a honra ou discursos de ódio e incitação à violência."
      }
    ]
  },
  {
    idSlug: "batch3-dh-015",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "PC-DF",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No âmbito do Sistema Interamericano de Proteção aos Direitos Humanos, as vítimas individuais de violações de direitos humanos não possuem legitimidade processual direta (jus postulandi) para demandar perante a Corte Interamericana de Direitos Humanos, competindo unicamente aos Estados-Partes e à Comissão Interamericana de Direitos Humanos submeter casos contenciosos ao julgamento daquela Corte.",
    explicacao: "GABARITO: CERTO. O Artigo 61, item 1, da Convenção Americana sobre Direitos Humanos prescreve categoricamente: 'Somente os Estados-Partes e a Comissão têm direito de submeter um caso à decisão da Corte'. As pessoas físicas, grupos de indivíduos ou ONGs apresentam a petição inicial perante a Comissão Interamericana (CIDH - Washington). Se o caso não for solucionado e o Estado for reconhecedor da competência contenciosa da Corte (San José da Costa Rica), a Comissão ou outro Estado submeterá a demanda à Corte IDH.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Conforme o art. 61.1 da CADH, apenas a Comissão e os Estados-Partes possuem legitimidade ativa para provocar a jurisdição contenciosa da Corte IDH."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Item correto. Indivíduos não acessam a Corte IDH diretamente; seu acesso se dá via peticionamento prévio perante a Comissão Interamericana."
      }
    ]
  },

  // ==========================================
  // BLOCO 3: GERAÇÕES / DIMENSÕES DOS DIREITOS HUMANOS
  // ==========================================
  {
    idSlug: "batch3-dh-016",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "VUNESP",
    orgao_nome: "PC-SP",
    cargo_nome: "Médico Legista / Perito Criminal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Na clássica formulação teórica das gerações ou dimensões dos direitos humanos elaborada por Karel Vasak (inspirada no lema da Revolução Francesa) e consolidada pela doutrina jusfilosófica, os direitos humanos de primeira dimensão:",
    explicacao: "GABARITO: Os direitos de 1ª dimensão (associados à 'Liberdade' - Liberté) consagram os direitos civis e políticos, surgidos no contexto do Estado Liberal (séculos XVII e XVIII) com as revoluções burguesas (Revolução Gloriosa, Independência dos EUA e Revolução Francesa). Possuem como traço distintivo o absenteísmo estatal (liberdades negativas), impondo um dever de abstenção ou não interferência do Estado na esfera de autonomia individual.",
    alternativas: [
      {
        letra: "A",
        texto: "Exigem prioritariamente prestações positivas do Estado com vistas à concretização da igualdade material e bem-estar social.",
        correta: false,
        explicacao_especifica: "Prestações positivas e igualdade material caracterizam os direitos de 2ª dimensão."
      },
      {
        letra: "B",
        texto: "Têm por objeto os direitos de solidariedade e fraternidade, com titularidade difusa atribuída ao gênero humano como um todo.",
        correta: false,
        explicacao_especifica: "Direitos difusos, de solidariedade e fraternidade são de 3ª dimensão."
      },
      {
        letra: "C",
        texto: "Compreendem os direitos civis e políticos, caracterizando-se por exigirem um comportamento absenteísta do Estado (liberdades negativas) para proteção da autonomia individual.",
        correta: true,
        explicacao_especifica: "Identificação perfeita dos direitos de 1ª dimensão: liberdades civis/políticas, absenteísmo estatal e garantias individuais."
      },
      {
        letra: "D",
        texto: "Foram consagrados a partir do término da Primeira Guerra Mundial nas Constituições do México (1917) e de Weimar (1919).",
        correta: false,
        explicacao_especifica: "O constitucionalismo social do início do século XX (México/Weimar) inaugurou os direitos de 2ª dimensão."
      },
      {
        letra: "E",
        texto: "Tutelam o direito ao desenvolvimento sustentável, à paz mundial e à preservação do patrimônio genético da humanidade.",
        correta: false,
        explicacao_especifica: "Desenvolvimento sustentável e paz integram a 3ª dimensão; patrimônio genético integra debates da 4ª dimensão."
      }
    ]
  },
  {
    idSlug: "batch3-dh-017",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "PC-PB",
    cargo_nome: "Delegado de Polícia",
    ano: 2022,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Os direitos humanos de segunda geração ou dimensão, correlacionados ao valor da igualdade (igualdade substancial ou material), impõem ao Estado obrigações de fazer (prestações positivas), abrangendo direitos sociais, econômicos e culturais, tais como o direito à saúde, à educação, ao trabalho e à segurança pública como serviço público essencial.",
    explicacao: "GABARITO: CERTO. A 2ª geração/dimensão dos direitos humanos vincula-se ao lema da Igualdade (Égalité). Nascida das lutas operárias do século XIX e consolidada no Estado Social do século XX, desloca o foco da mera abstenção para as prestações positivas (fazer/garantir do Estado), exigindo políticas públicas ativas para assegurar direitos sociais fundamentais (saúde, educação, previdência, trabalho e segurança).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A 2ª dimensão foca na igualdade material e impõe obrigações prestacionais (direitos sociais, econômicos e culturais) ao Poder Público."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Item correto. Direitos de 2ª dimensão traduzem o dever prestacional do Estado Social de garantir serviços públicos essenciais e igualdade fática."
      }
    ]
  },
  {
    idSlug: "batch3-dh-018",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "FGV",
    orgao_nome: "PC-SC",
    cargo_nome: "Agente de Polícia Civil",
    ano: 2023,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere a necessidade de proteção ao meio ambiente ecologicamente equilibrado, à defesa do consumidor e ao patrimônio histórico e cultural em investigações policiais contra crimes ambientais organizados. Na classificação geracional dos direitos humanos, tais bens jurídicos inserem-se precipuamente na:",
    explicacao: "GABARITO: Os direitos ao meio ambiente ecologicamente equilibrado, à paz, à autodeterminação dos povos, ao desenvolvimento e à defesa de interesses difusos e coletivos (como proteção do consumidor e patrimônio comum) integram a 3ª dimensão dos direitos humanos, ligada ao lema da Fraternidade ou Solidariedade (Fraternité), destacando-se por sua titularidade transindividual e difusa.",
    alternativas: [
      {
        letra: "A",
        texto: "Primeira dimensão, por tutelarem a propriedade privada contra invasões antrópicas.",
        correta: false,
        explicacao_especifica: "A 1ª dimensão foca na liberdade individual e propriedade particular sob a ótica liberal."
      },
      {
        letra: "B",
        texto: "Segunda dimensão, pois dependem estritamente de auxílio previdenciário e salário-família estatal.",
        correta: false,
        explicacao_especifica: "A 2ª dimensão engloba direitos sociais e trabalhistas individuais homogêneos."
      },
      {
        letra: "C",
        texto: "Terceira dimensão, por consagrarem direitos de solidariedade ou fraternidade marcados pela titularidade difusa e indeterminada.",
        correta: true,
        explicacao_especifica: "Enquadramento dogmático exato: meio ambiente e direitos difusos pertencem à 3ª geração/dimensão de direitos humanos."
      },
      {
        letra: "D",
        texto: "Quarta dimensão exclusiva da bioética, que restringe a titularidade a pesquisas científicas laboratoriais.",
        correta: false,
        explicacao_especifica: "A 4ª dimensão versa sobre biotecnologia/engenharia genética ou globalização política, não sobre a tutela clássica do meio ambiente."
      },
      {
        letra: "E",
        texto: "Quinta dimensão cibernética, restrita ao uso de assinaturas digitais em inquéritos policiais eletrônicos.",
        correta: false,
        explicacao_especifica: "A 5ª dimensão, para autores como Bonavides, versa sobre a Paz universal no contexto global."
      }
    ]
  },
  {
    idSlug: "batch3-dh-019",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2023,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No tocante aos direitos humanos de quarta dimensão, constata-se divergência doutrinária relevante: para o jurista e filósofo italiano Norberto Bobbio, essa dimensão está intimamente associada aos avanços da engenharia genética, biotecnologia e bioética (manipulação do genoma humano); por sua vez, para o constitucionalista brasileiro Paulo Bonavides, a quarta dimensão resulta da globalização política e compreende o direito à democracia direta, à informação, ao pluralismo e ao sufrágio universal pleno.",
    explicacao: "GABARITO: CERTO. A assertiva expõe com precisão a célebre distinção doutrinária amplamente cobrada pelo CEBRASPE: 1) Norberto Bobbio (em 'A Era dos Direitos') sustenta que a 4ª dimensão emerge das pesquisas genéticas e das ameaças à integridade biológica da espécie humana (bioética e patrimônio genético); 2) Paulo Bonavides defende que a 4ª dimensão engloba o direito à democracia participativa/direta, direito à informação e pluralismo político no contexto da globalização.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Doutrina clássica: Bobbio enfatiza a engenharia genética/bioética na 4ª dimensão, enquanto Bonavides enfatiza a globalização democrática e a informação."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Item correto. Retrata com exatidão as duas principais vertentes doutrinárias acerca dos direitos de 4ª dimensão."
      }
    ]
  },
  {
    idSlug: "batch3-dh-020",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "IDECAN",
    orgao_nome: "PC-CE",
    cargo_nome: "Inspetor de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O professor Paulo Bonavides, ao aprofundar o estudo das dimensões dos direitos fundamentais além da formulação tripartite tradicional, propôs a existência de uma Quinta Dimensão de direitos fundamentais. Para o referido autor, a quinta dimensão é encabeçada pelo direito:",
    explicacao: "GABARITO: Paulo Bonavides defende que o Direito à Paz deve ser alçado à categoria autônoma de Quinta Dimensão dos Direitos Fundamentais. Embora Karel Vasak tenha originalmente situado a paz na 3ª dimensão ao lado do meio ambiente, Bonavides sustenta que a paz mundial e a sobrevivência do gênero humano na era nuclear exigem uma dimensão suprema e coroatória (5ª dimensão).",
    alternativas: [
      {
        letra: "A",
        texto: "À greve geral em serviços públicos essenciais de natureza não armada.",
        correta: false,
        explicacao_especifica: "Direitos sindicais e de greve inserem-se nos direitos de 2ª dimensão."
      },
      {
        letra: "B",
        texto: "À paz universal e perpétua, elevada à condição de direito fundamental supremo de toda a humanidade.",
        correta: true,
        explicacao_especifica: "Posição consagrada de Paulo Bonavides: o direito à paz foi alçado de forma autônoma à 5ª dimensão."
      },
      {
        letra: "C",
        texto: "À propriedade intelectual irrestrita no ambiente de inteligência artificial generativa.",
        correta: false,
        explicacao_especifica: "Não corresponde à teorização de Paulo Bonavides."
      },
      {
        letra: "D",
        texto: "Ao porte funcional de armas de fogo por autoridades de controle fiscal aduaneiro.",
        correta: false,
        explicacao_especifica: "Trata-se de matéria infraconstitucional administrativa, alheia à teoria das dimensões de DH."
      },
      {
        letra: "E",
        texto: "À privacidade irrestrita de dados telemáticos sem possibilidade de quebra judicial.",
        correta: false,
        explicacao_especifica: "A privacidade individual remonta originariamente à 1ª dimensão, sem caráter absoluto."
      }
    ]
  },
  {
    idSlug: "batch3-dh-021",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A doutrina jusfundamental moderna prefere o uso da expressão 'dimensões de direitos humanos' em substituição a 'gerações de direitos humanos', haja vista que o termo 'geração' poderia sugerir erroneamente uma ideia de sucessão ou substituição temporal, em que o surgimento de novos direitos acarretaria a revogação ou o enfraquecimento dos direitos antecedentes, quando, na realidade, vigora o princípio da cumulatividade, complementariedade e indivisibilidade dos direitos humanos.",
    explicacao: "GABARITO: CERTO. A crítica terminológica formulada por autores como Ingo Wolfgang Sarlet e Paulo Bonavides aponta que a expressão 'geração' transmite uma conotação biológica de superação sucessória (uma geração substitui e extingue a anterior). Por isso, prefere-se a terminologia 'dimensões', ressaltando que os novos direitos coexistem, acumulam-se, enriquecem e complementam os já existentes sob a premissa da expansão contínua da proteção humana.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A expressão 'dimensões' traduz o caráter cumulativo e ininterrupto dos direitos humanos, afastando a errônea ideia de substituição geracional."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Item correto. A doutrina contemporânea adota 'dimensões' para reafirmar a cumulatividade e a indivisibilidade dos direitos humanos."
      }
    ]
  },

  // ==========================================
  // BLOCO 4: CORTE INTERAMERICANA & SENTENÇAS CONTRA O BRASIL
  // ==========================================
  {
    idSlug: "batch3-dh-022",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "FGV",
    orgao_nome: "PC-RJ",
    cargo_nome: "Inspetor de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No emblemático Caso Gomes Lund e outros ('Guerrilha do Araguaia') vs. Brasil (sentença de 2010), a Corte Interamericana de Direitos Humanos condenou o Estado brasileiro por violações perpetradas durante o regime militar. Em sua decisão vinculante, a Corte IDH estabeleceu que:",
    explicacao: "GABARITO: No Caso Gomes Lund vs. Brasil (2010), a Corte IDH firmou que as disposições da Lei de Anistia brasileira (Lei nº 6.683/1979) que impedem a investigação e sanção de graves violações de direitos humanos (como tortura e desaparecimentos forçados) são incompatíveis com a Convenção Americana sobre Direitos Humanos, carecem de efeitos jurídicos e não podem representar obstáculo à persecução penal, haja vista o dever estatal inderrogável de investigar, processar e punir crimes contra a humanidade.",
    alternativas: [
      {
        letra: "A",
        texto: "A Lei de Anistia de 1979 é plenamente compatível com o Pacto de San José da Costa Rica por constituir fruto de acordo político soberano aprovado pelo Parlamento brasileiro.",
        correta: false,
        explicacao_especifica: "A Corte IDH declarou expressamente a invalidade convencional da autoanistia para crimes contra a humanidade."
      },
      {
        letra: "B",
        texto: "As disposições da Lei de Anistia que impedem a investigação e punição de graves violações de direitos humanos carecem de efeitos jurídicos por violarem a CADH, subsistindo o dever de investigar e punir os responsáveis.",
        correta: true,
        explicacao_especifica: "Tese central da sentença da Corte IDH no Caso Gomes Lund: autoanistias para graves violações de DH são nulas no âmbito interamericano."
      },
      {
        letra: "C",
        texto: "O desaparecimento forçado de pessoas prescreve no prazo improrrogável de vinte anos a contar da data presumida da morte da vítima.",
        correta: false,
        explicacao_especifica: "O desaparecimento forçado é crime permanente e contra a humanidade, ostentando natureza imprescritível."
      },
      {
        letra: "D",
        texto: "A indenização financeira paga aos familiares das vítimas supre integralmente a obrigação estatal, dispensando a abertura de arquivos militares.",
        correta: false,
        explicacao_especifica: "A Corte determinou reparação integral, localização dos corpos, abertura irrestrita de arquivos e persecução penal dos autores."
      },
      {
        letra: "E",
        texto: "A jurisdição militar possui competência privativa para apurar crimes de desaparecimento forçado praticados por agentes das Forças Armadas.",
        correta: false,
        explicacao_especifica: "A Corte IDH veda o uso da justiça militar para apurar graves violações de direitos humanos praticadas contra civis."
      }
    ]
  },
  {
    idSlug: "batch3-dh-023",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "PC-DF",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na sentença do Caso Vladimir Herzog e outros vs. Brasil (2018), a Corte Interamericana de Direitos Humanos assentou que a prisão arbitrária, tortura e morte do jornalista nas dependências do DOI-CODI em 1975 configuraram crime contra a humanidade perpetrado em contexto de ataque generalizado e sistemático contra a população civil, razão pela qual tais atos são imprescritíveis e insuscetíveis de anistia, devendo o Estado brasileiro reiniciar a investigação e a persecução penal cabível.",
    explicacao: "GABARITO: CERTO. No Caso Herzog (2018), a Corte IDH reconheceu formalmente que os atos que culminaram na morte do jornalista Vladimir Herzog constituíram crimes contra a humanidade praticados sob a ditadura militar. Por ostentarem a qualidade de jus cogens internacional, são imprescritíveis, insuscetíveis de anistia ou prescrição, impondo-se a reabertura das apurações criminais e a responsabilização dos autores materiais e intelectuais.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A Corte IDH qualificou o assassinato de Vladimir Herzog como crime contra a humanidade, impassível de anistia e imprescritível."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Item correto. A Corte reiterou o dever de persecução penal internacional em face de crimes contra a humanidade cometidos por agentes estatais."
      }
    ]
  },
  {
    idSlug: "batch3-dh-024",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "VUNESP",
    orgao_nome: "PC-SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2023,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em 2017, a Corte Interamericana de Direitos Humanos proferiu sentença condenatória contra o Estado brasileiro no Caso Favela Nova Brasília vs. Brasil, referente a incursões policiais ocorridas na década de 1990 que resultaram em dezenas de mortes e atos de violência sexual perpetrados por agentes da polícia civil e militar. Dentre as determinações estruturais e parâmetros de investigação policial fixados pela Corte IDH nessa decisão, destaca-se:",
    explicacao: "GABARITO: No Caso Favela Nova Brasília (2017), a Corte IDH fixou parâmetros fundamentais para a atividade de segurança pública: 1) o dever de realização de investigações independentes, imparciais e autônomas quando houver mortes ou tortura decorrentes de intervenção policial, determinando que o órgão policial envolvido no incidente letal não deve investigar a si mesmo; 2) o estabelecimento de protocolos estritos sobre o uso progressivo da força letal; 3) a capacitação policial com foco em direitos humanos e atenção à violência de gênero contra mulheres.",
    alternativas: [
      {
        letra: "A",
        texto: "A atribuição de fé pública absoluta aos laudos periciais e relatórios elaborados pelos próprios policiais envolvidos no tiroteio.",
        correta: false,
        explicacao_especifica: "A Corte determinou que as apurações devem ser independentes e desvinculadas dos próprios agentes envolvidos na operação letal."
      },
      {
        letra: "B",
        texto: "A obrigatoriedade de investigações independentes e imparciais em casos de mortes ou violência decorrentes de intervenção policial, com criação de protocolos objetivos sobre uso da força e proibição de auto-investigação corporativa.",
        correta: true,
        explicacao_especifica: "Ponto nevrálgico da sentença do Caso Nova Brasília: exigência de investigação independente e fiscalização rigorosa do uso da força letal."
      },
      {
        letra: "C",
        texto: "A presunção de legítima defesa funcional automática em favor dos agentes públicos em qualquer operação realizada em comunidade de alto risco.",
        correta: false,
        explicacao_especifica: "A Corte veda presunções automáticas que gerem impunidade em execuções sumárias ou violência de Estado."
      },
      {
        letra: "D",
        texto: "A extinção da responsabilidade internacional do Estado caso as vítimas possuam antecedentes criminais registrados em delegacias especializadas.",
        correta: false,
        explicacao_especifica: "A vida e a integridade de qualquer pessoa são protegidas indistintamente, sendo irrelevante eventual histórico infracional."
      },
      {
        letra: "E",
        texto: "O arquivamento das apurações de violência sexual policial caso não haja testemunhas oculares civis presentes no momento do fato.",
        correta: false,
        explicacao_especifica: "A Corte IDH exige investigação diligente com perspectiva de gênero em denúncias de violência sexual policial."
      }
    ]
  },
  {
    idSlug: "batch3-dh-025",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No julgamento do Caso Fazenda Brasil Verde vs. Brasil (2016), a Corte Interamericana de Direitos Humanos proferiu sua primeira condenação por violação à proibição da escravidão e servidão (Artigo 6º da CADH), assentando que o trabalho forçado e a servidão por dívidas praticados contra trabalhadores rurais vulneráveis configuram trabalho escravo contemporâneo, ensejando a responsabilidade internacional do Estado por omissão e ineficácia na fiscalização e repressão de tais condutas.",
    explicacao: "GABARITO: CERTO. O Caso Trabalhadores da Fazenda Brasil Verde vs. Brasil (2016) foi a primeira decisão na história da Corte IDH a interpretar e aplicar o Artigo 6.1 da CADH (proibição da escravidão e servidão em suas modalidades contemporâneas). A Corte constatou que centenas de trabalhadores foram submetidos a condições degradantes, servidão por dívidas e violência física no Pará, condenando o Brasil por discriminação estrutural e falha sistemática na fiscalização e punição dos infratores.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O Caso Fazenda Brasil Verde foi a primeira condenação histórica da Corte IDH por escravidão contemporânea e servidão por dívidas."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Item correto. A Corte IDH responsabilizou o Brasil pela omissão na proteção de trabalhadores vulneráveis submetidos a trabalho análogo ao de escravo."
      }
    ]
  },
  {
    idSlug: "batch3-dh-026",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "FCC",
    orgao_nome: "PC-AP",
    cargo_nome: "Agente de Polícia Civil",
    ano: 2023,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A primeira sentença condenatória imposta pela Corte Interamericana de Direitos Humanos contra o Estado brasileiro ocorreu em 2006 e envolveu graves violações perpetradas em uma clínica psiquiátrica conveniada ao Sistema Único de Saúde (SUS). Trata-se do histórico:",
    explicacao: "GABARITO: O Caso Damião Ximenes Lopes vs. Brasil (sentença de 4 de julho de 2006) foi a PRIMEIRA condenação do Brasil perante a Corte Interamericana de Direitos Humanos. Damião, portador de deficiência mental, foi internado na Casa de Repouso Guararapes (Sobral/CE), conveniada ao SUS, onde sofreu maus-tratos, tortura e morte. A Corte assentou o dever estatal de proteção especial a pessoas em situação de vulnerabilidade e com deficiência mental sob custódia direta ou indireta do Estado.",
    alternativas: [
      {
        letra: "A",
        texto: "Caso Gabriel Sales Pimenta vs. Brasil, referente ao homicídio de advogado de trabalhadores rurais sem terra.",
        correta: false,
        explicacao_especifica: "O Caso Gabriel Sales Pimenta foi julgado em 2022."
      },
      {
        letra: "B",
        texto: "Caso Damião Ximenes Lopes vs. Brasil, versando sobre a morte de pessoa com deficiência mental sob maus-tratos em clínica conveniada ao SUS.",
        correta: true,
        explicacao_especifica: "Identificação histórica exata: Caso Damião Ximenes Lopes (2006), primeira condenação do Brasil na Corte IDH."
      },
      {
        letra: "C",
        texto: "Caso Povo Indígena Xucuru vs. Brasil, que tratou da demarcação e titularidade de terras ancestrais em Pernambuco.",
        correta: false,
        explicacao_especifica: "O Caso Xucuru foi julgado em 2018."
      },
      {
        letra: "D",
        texto: "Caso Simone André Diniz vs. Brasil, que abordou discriminação racial perante a Comissão Interamericana.",
        correta: false,
        explicacao_especifica: "O Caso Simone Diniz tramitou perante a Comissão Interamericana (CIDH), não sendo sentença contenciosa da Corte IDH."
      },
      {
        letra: "E",
        texto: "Caso Manoel Mattos vs. Brasil, relativo à atuação de grupos de extermínio no Nordeste do país.",
        correta: false,
        explicacao_especifica: "O caso Manoel Mattos motivou o primeiro Incidente de Deslocamento de Competência (IDC) no STJ, mas não a primeira condenação na Corte IDH."
      }
    ]
  },
  {
    idSlug: "batch3-dh-027",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "PC-AL",
    cargo_nome: "Delegado de Polícia",
    ano: 2023,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No Caso Empregados da Fábrica de Fogos de Santo Antônio de Jesus e seus familiares vs. Brasil (2020), a Corte Interamericana de Direitos Humanos condenou o Estado brasileiro pela explosão de uma fábrica clandestina de fogos de artifício que vitimou dezenas de mulheres e crianças, firmando o entendimento de que o Estado tem o dever de fiscalizar atividades de alto risco e periculosidade desenvolvidas por particulares, gerando responsabilidade internacional por omissão estatal culposa.",
    explicacao: "GABARITO: CERTO. A Corte IDH reconheceu a responsabilidade internacional do Brasil pela omissão no dever de regular, fiscalizar e inspecionar atividades de extremo risco exercidas por particulares. A fábrica operava sem condições mínimas de segurança, empregando mulheres em situação de extrema pobreza e trabalho infantil, caracterizando violação ao direito à vida, integridade e trabalho digno decorrente da inércia fiscalizatória estatal.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A Corte IDH responsabilizou o Brasil pela omissão reiterada de fiscalização estatal sobre atividade perigosa privada exercida em desrespeito a direitos humanos."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Item correto. O Estado responde internacionalmente por omissão na fiscalização de atividades perigosas que atinjam a vida e a integridade de trabalhadores vulneráveis."
      }
    ]
  },
  {
    idSlug: "batch3-dh-028",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "IBFC",
    orgao_nome: "PC-BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Na sentença do Caso Márcia Barbosa de Souza e outros vs. Brasil (2021), a Corte Interamericana de Direitos Humanos apreciou o homicídio de uma jovem estudante em 1998 por um deputado estadual que se utilizou indevidamente de prerrogativas de imunidade parlamentar para obstar o avanço da persecução criminal. Nessa decisão paradigmática sobre violência de gênero, a Corte IDH determinou que:",
    explicacao: "GABARITO: No Caso Márcia Barbosa de Souza vs. Brasil (2021), a Corte IDH condenou o Brasil pela demora injustificada e impunidade decorrentes da aplicação abusiva da imunidade parlamentar processual. A Corte assentou que: 1) a imunidade parlamentar não pode constituir salvo-conduto pessoal ou mecanismo de impunidade para crimes comuns de violência contra a mulher e feminicídio; 2) o Estado deve adotar e implementar protocolos específicos de investigação com perspectiva de gênero para mortes violentas de mulheres.",
    alternativas: [
      {
        letra: "A",
        texto: "A imunidade parlamentar absoluta é garantia supraconvencional que impede a apuração de qualquer crime comum praticado por deputados durante o mandato.",
        correta: false,
        explicacao_especifica: "A Corte IDH rechaçou a imunidade como escudo de impunidade em crimes comuns graves contra a vida."
      },
      {
        letra: "B",
        texto: "A imunidade parlamentar não pode ser utilizada como instrumento de impunidade para crimes graves de violência contra as mulheres e feminicídio, devendo as autoridades policiais e judiciais adotar protocolos com perspectiva de gênero.",
        correta: true,
        explicacao_especifica: "Tese fulcral da condenação no Caso Márcia Barbosa: vedação ao uso abusivo de imunidades e adoção de perspectiva de gênero na investigação policial."
      },
      {
        letra: "C",
        texto: "As mortes de mulheres praticadas em contexto de violência interpessoal devem ser julgadas pela Justiça Eleitoral quando envolverem agentes políticos.",
        correta: false,
        explicacao_especifica: "Crimes dolosos contra a vida são da competência do Tribunal do Júri na Justiça Comum."
      },
      {
        letra: "D",
        texto: "O prazo prescricional para crimes de homicídio comum deve ser reduzido pela metade quando o investigado exercer função parlamentar ativa.",
        correta: false,
        explicacao_especifica: "A Corte condenou expressamente os entraves que geram prescrição e impunidade em face de autoridades políticas."
      },
      {
        letra: "E",
        texto: "A persecução penal de agentes públicos com prerrogativa de foro depende de anuência discricionária prévia da Comissão Interamericana.",
        correta: false,
        explicacao_especifica: "A apuração interna é dever indeclinável das instituições domésticas e independe de autorização de órgãos internacionais."
      }
    ]
  },

  // ==========================================
  // BLOCO 5: CONTROLE DE CONVENCIONALIDADE
  // ==========================================
  {
    idSlug: "batch3-dh-029",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O conceito dogmático de 'controle de convencionalidade' foi expressamente formulado pela Corte Interamericana de Direitos Humanos a partir do Caso Almonacid Arellano e outros vs. Chile (2006). Segundo essa diretriz, quando um Estado ratifica um tratado de direitos humanos como a CADH, os seus juízes e órgãos vinculados à administração da justiça (inclusive autoridades policiais) estão submetidos ao dever de exercer o controle de convencionalidade ex officio, velando para que as normas e atos internos não sejam contrários aos preceitos da Convenção e à interpretação conferida pela Corte Interamericana.",
    explicacao: "GABARITO: CERTO. No Caso Almonacid Arellano vs. Chile (2006, voto do Juiz Sergio García Ramírez e corpo do acórdão), a Corte IDH cunhou a doutrina do Controle de Convencionalidade. A Corte assentou que o Poder Judiciário e todos os órgãos de aplicação do direito devem exercer, ex officio, o confronto entre o direito interno e os tratados internacionais de direitos humanos ratificados, bem como a interpretação autêntica fixada pela jurisprudência da Corte Interamericana.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O Caso Almonacid Arellano (2006) consagrou o dever de magistrados e aplicadores do direito exercerem de ofício o controle de convencionalidade."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Item correto. A doutrina do controle de convencionalidade originou-se no Caso Almonacid Arellano e obriga os órgãos estatais internos."
      }
    ]
  },
  {
    idSlug: "batch3-dh-030",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "VUNESP",
    orgao_nome: "PC-SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No exercício da atividade de polícia judiciária e de investigação criminal, o Delegado de Polícia e seus agentes deparavam-se historicamente com a requisição de prisão civil de devedor fiduciário fundamentada no Decreto-Lei nº 911/1969. Considerando o controle difuso de convencionalidade exercido pelas autoridades administrativas e policiais em consonância com a jurisprudência do STF e os tratados internacionais:",
    explicacao: "GABARITO: O controle de convencionalidade impõe que as autoridades policiais e judiciais deixem de aplicar dispositivos legais internos que conflitem com tratados de direitos humanos em vigor no país. Diante do art. 7.7 da CADH (status supralegal reconhecido no RE 466.343 e Súmula Vinculante 25), o Decreto-Lei 911/69 teve sua eficácia paralisada no tocante à prisão do depositário, não podendo a autoridade policial lavrar mandado ou executar prisão civil de devedor alienante fiduciário.",
    alternativas: [
      {
        letra: "A",
        texto: "A autoridade policial é obrigada a cumprir a ordem de prisão por dívida fiduciária por vigorar no Brasil o princípio da legalidade estrita infraconstitucional cega.",
        correta: false,
        explicacao_especifica: "A autoridade policial submete-se ao controle de convencionalidade e à Súmula Vinculante 25, sendo ilegal cumprir ordem manifestamente inconvencional."
      },
      {
        letra: "B",
        texto: "As normas infraconstitucionais contrárias aos tratados de direitos humanos sofrem o efeito paralisante da inconvencionalidade, sendo vedada a execução de prisão civil de depositário infiel em qualquer modalidade.",
        correta: true,
        explicacao_especifica: "Harmonia com a teoria da supralegalidade e do controle de convencionalidade difuso aplicado à atividade de segurança pública."
      },
      {
        letra: "C",
        texto: "O controle de convencionalidade só pode ser suscitado caso o Brasil seja previamente notificado por sentença transitada em julgado na Corte IDH.",
        correta: false,
        explicacao_especifica: "O controle difuso de convencionalidade é exercido cotidianamente e de ofício pelas autoridades nacionais."
      },
      {
        letra: "D",
        texto: "O tratado de direitos humanos só produz efeitos perante a autoridade policial após a edição de lei complementar federal pelo Congresso Nacional.",
        correta: false,
        explicacao_especifica: "Tratados de DH devidamente promulgados produzem eficácia imediata no direito interno brasileiro."
      },
      {
        letra: "E",
        texto: "A polícia judiciária tem competência privativa para declarar a nulidade formal originária do texto da Constituição Federal em controle concentrado.",
        correta: false,
        explicacao_especifica: "A polícia não exerce controle concentrado de constitucionalidade perante o STF, mas realiza interpretação conforme e controle de convencionalidade difuso."
      }
    ]
  },
  {
    idSlug: "batch3-dh-031",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No sistema jurídico brasileiro contemporâneo, a compatibilidade vertical dos atos normativos infraconstitucionais com o ordenamento jurídico opera-se por meio de um 'duplo controle': o controle de constitucionalidade (tendo por parâmetro a Constituição Federal) e o controle de convencionalidade (tendo por parâmetro os tratados e convenções internacionais de direitos humanos ratificados e em vigor no Brasil).",
    explicacao: "GABARITO: CERTO. Conforme sistematizado pela doutrina (Valerio Mazzuoli, Flávia Piovesan) e encampado pelo STF e STJ, uma lei infraconstitucional deve superar um duplo filtro de validade vertical para ser legitimamente aplicada: 1) o filtro da constitucionalidade (adequação à CF/88); 2) o filtro da convencionalidade (adequação aos tratados de direitos humanos ratificados pelo Brasil, dotados de status supralegal ou constitucional).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O ordenamento brasileiro adota o duplo controle vertical: o controle de constitucionalidade e o controle de convencionalidade de leis e atos estatais."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A assertiva está correta: o duplo controle de validade normativa é o modelo dogmático vigente no Brasil."
      }
    ]
  },
  {
    idSlug: "batch3-dh-032",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "FGV",
    orgao_nome: "PC-SC",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Quanto à distinção fundamental entre o controle concentrado de convencionalidade e o controle difuso de convencionalidade no plano internacional e interno, assinale a afirmativa correta.",
    explicacao: "GABARITO: O controle concentrado ou definitivo de convencionalidade no âmbito internacional é de competência exclusiva da Corte Interamericana de Direitos Humanos (Corte IDH), órgão jurisdicional autônomo com atribuição contenciosa originária para julgar a compatibilidade dos atos e leis dos Estados-Partes com a CADH. Por outro lado, o controle difuso de convencionalidade deve ser exercido internamente por todos os juízes, tribunais e agentes estatais nacionais no exame dos casos concretos sob sua apreciação.",
    alternativas: [
      {
        letra: "A",
        texto: "O controle concentrado internacional de convencionalidade é exercido pela Corte Interamericana de Direitos Humanos, ao passo que o controle difuso é exercido pelos magistrados e órgãos nacionais em seus respectivos âmbitos de competência.",
        correta: true,
        explicacao_especifica: "Diferenciação dogmática perfeita entre a jurisdição concentrada da Corte IDH e a jurisdição difusa/interna dos juízes e órgãos nacionais."
      },
      {
        letra: "B",
        texto: "O controle difuso de convencionalidade compete com exclusividade privativa ao Plenário do Supremo Tribunal Federal por via de Ação Direta de Inconstitucionalidade.",
        correta: false,
        explicacao_especifica: "O controle difuso cabe a qualquer juiz ou tribunal em casos concretos, não sendo privativo do STF."
      },
      {
        letra: "C",
        texto: "A Corte IDH exerce controle difuso perante as câmaras criminais estaduais, enquanto o delegado de polícia exerce controle concentrado perante a ONU.",
        correta: false,
        explicacao_especifica: "Inversão teratológica de conceitos fundamentais."
      },
      {
        letra: "D",
        texto: "O controle concentrado de convencionalidade no Brasil é instaurado mediante Reclamação Constitucional perante o Superior Tribunal de Justiça.",
        correta: false,
        explicacao_especifica: "No plano interno não há ação direta abstrata de inconvencionalidade perante o STJ."
      },
      {
        letra: "E",
        texto: "Os tratados de direitos humanos aprovados pelo quórum ordinário não podem servir de parâmetro para controle difuso de convencionalidade.",
        correta: false,
        explicacao_especifica: "Tratados de DH com status supralegal servem plenamente de parâmetro para o controle de convencionalidade."
      }
    ]
  },
  {
    idSlug: "batch3-dh-033",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "PC-CE",
    cargo_nome: "Delegado de Polícia",
    ano: 2023,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A incompatibilidade constatada entre uma lei ordinária pré-existente e um tratado internacional de direitos humanos dotado de status supralegal (como a CADH) acarreta a inconstitucionalidade formal do diploma legislativo e a sua anulação retroativa com eficácia erga omnes, extinguindo a lei do ordenamento jurídico por vício de competência originária.",
    explicacao: "GABARITO: ERRADO. Tratados com status supralegal (abaixo da CF e acima da lei) não declaram a inconstitucionalidade nem anulam formalmente a lei no plano da vigência legislativa originária. O que ocorre é a produção de um efeito paralisante (inaplicabilidade/ineficácia) da norma infraconstitucional conflitante. A norma interna tem sua eficácia suspensa ou bloqueada diante da prevalência da tutela supralegal protetiva dos direitos humanos.",
    alternativas: [
      {
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Item incorreto. O tratado supralegal gera efeito paralisante de eficácia (inaplicabilidade), não declaração de inconstitucionalidade formal anulatória."
      },
      {
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Gabarito: ERRADO. Conforme fixado pelo STF (RE 466.343), tratados supralegais geram o efeito paralisante da eficácia da lei interna incompatível, e não sua anulação por inconstitucionalidade formal."
      }
    ]
  },
  {
    idSlug: "batch3-dh-034",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "Instituto AOCP",
    orgao_nome: "PC-GO",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante a lavratura de auto de prisão em flagrante em sede policial, o defensor constituído do preso requer acesso imediato aos elementos de prova já formalmente documentados nos autos do inquérito policial. À luz do Artigo 8º da Convenção Americana sobre Direitos Humanos (CADH) e da Súmula Vinculante nº 14 do STF, assinale a conduta que deve ser adotada pela autoridade policial:",
    explicacao: "GABARITO: A Súmula Vinculante 14 do STF consagra: 'É direito do defensor, no interesse do representado, ter acesso amplo aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa'. Essa diretriz alinha-se às garantias judiciais do Artigo 8.2 da CADH (tempo e meios adequados para a preparação da defesa e comunicação prévia e pormenorizada). Ressalvam-se apenas diligências em andamento e ainda não documentadas.",
    alternativas: [
      {
        letra: "A",
        texto: "Negar acesso total aos autos até o término do prazo do inquérito policial para resguardar o sigilo absoluto das investigações.",
        correta: false,
        explicacao_especifica: "Viola a Súmula Vinculante 14 do STF e as garantias de defesa da CADH."
      },
      {
        letra: "B",
        texto: "Garantir ao defensor acesso amplo a todos os elementos de prova já documentados nos autos que digam respeito ao investigado, ressalvando-se diligências em andamento ainda não finalizadas.",
        correta: true,
        explicacao_especifica: "Aplicação direta e harmônica da Súmula Vinculante 14 do STF e do Artigo 8.2 da CADH."
      },
      {
        letra: "C",
        texto: "Condicionar a vista dos autos ao depósito prévio de custas cartorárias de desarquivamento administrativo.",
        correta: false,
        explicacao_especifica: "O acesso aos elementos documentados na persecução penal é gratuito e garantia da ampla defesa."
      },
      {
        letra: "D",
        texto: "Permitir o acesso do advogado apenas aos depoimentos de testemunhas protegidas sob sigilo de identidade funcional.",
        correta: false,
        explicacao_especifica: "O sigilo de testemunhas ameaçadas deve ser preservado nos termos da lei, mas as provas documentadas do flagrante são acessíveis à defesa."
      },
      {
        letra: "E",
        texto: "Exigir autorização judicial prévia para que o advogado tome ciência de termo de depoimento de condutor e testemunhas já formalizado.",
        correta: false,
        explicacao_especifica: "O defensor constituído tem direito legal e sumular direto de examinar elementos já documentados, sem necessidade de autorização judicial."
      }
    ]
  },
  {
    idSlug: "batch3-dh-035",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.cadh,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "PC-DF",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com a doutrina consolidada e a jurisprudência da Corte Interamericana de Direitos Humanos, as sentenças da Corte IDH possuem eficácia vinculante não apenas para o caso concreto sob julgamento em face do Estado réu (coisa julgada material / res judicata), mas produzem também eficácia erga omnes interpretativa (coisa interpretada / res interpretata), projetando a interpretação autêntica da Convenção Americana para todos os Estados-Partes vinculados ao pacto interamericano.",
    explicacao: "GABARITO: CERTO. A jurisprudência interamericana e a doutrina jusinternacionalista de direitos humanos consagram a eficácia dual das decisões da Corte IDH: 1) Res Judicata (coisa julgada): efeito subjetivamente vinculante e obrigatório de cumprimento pelo Estado formalmente condenado na lide; 2) Res Interpretata (coisa interpretada): eficácia erga omnes objetiva da hermenêutica convencional fixada pela Corte, impondo a todos os demais Estados-Partes da CADH o dever de observar esses padrões decisórios em seu controle interno de convencionalidade.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A interpretação emanada da Corte IDH projeta eficácia erga omnes (res interpretata), balizando o controle de convencionalidade em todos os Estados-Partes."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Item correto. As decisões da Corte IDH geram tanto coisa julgada (res judicata) para as partes quanto autoridade interpretativa geral (res interpretata) para a região."
      }
    ]
  }
];
