export function getQuestionsDataPart2() {
  const dConst = "TAXONOMIA.disciplinas.constitucional";
  const aArt5 = "TAXONOMIA.assuntos.art_5_cf";
  const aOrgEst = "TAXONOMIA.assuntos.organizacao_estado";

  return [
    {
      idSlug: "batch3-const-021",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil do Distrito Federal (PCDF)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "O mandado de injunção é a garantia constitucional cabível sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania, admitindo a ordem jurídica vigente a impetração tanto na modalidade individual quanto coletiva.",
      explicacao: "GABARITO: CERTO. Art. 5º, LXXI da CF/88 c/c Lei 13.300/2016. O mandado de injunção visa a colmatar omissão legislativa inconstitucional que inviabilize direitos, liberdades e prerrogativas fundamentais, sendo expressamente disciplinado em suas vertentes individual e coletiva.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Reflete fielmente o art. 5º, LXXI da CF e a Lei Federal nº 13.300/2016."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O mandado de injunção tem por escopo exatamente suprir a omissão legislativa regulamentadora de direitos constitucionais."
        }
      ]
    },
    {
      idSlug: "batch3-const-022",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "FGV",
      orgao_nome: "Polícia Militar de São Paulo (PM-SP)",
      cargo_nome: "Oficial da Polícia Militar",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Em relação à Ação Popular disciplinada no art. 5º, inciso LXXIII, da Constituição da República de 1988, é correto afirmar:",
      explicacao: "GABARITO: A. O art. 5º, LXXIII estabelece que 'qualquer cidadão é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural, ficando o autor, salvo comprovada má-fé, isento de custas judiciais e do ônus da sucumbência'. A condição de cidadão exige o pleno gozo dos direitos políticos (comprovado pelo título de eleitor).",
      alternativas: [
        {
          letra: "A",
          texto: "Qualquer cidadão em pleno gozo de seus direitos políticos é parte legítima para propor ação popular com o escopo de anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural.",
          correta: true,
          explicacao_especifica: "Correta. Trata-se da regra constitucional do art. 5º, LXXIII da Carta Magna."
        },
        {
          letra: "B",
          texto: "Pessoas jurídicas legalmente constituídas há mais de um ano possuem legitimidade ativa originária para ajuizar ação popular.",
          correta: false,
          explicacao_especifica: "Incorreta. Conforme a Súmula 365 do STF, pessoa jurídica não tem legitimidade para propor ação popular."
        },
        {
          letra: "C",
          texto: "O autor da ação popular arcará sempre com as custas judiciais e honorários advocatícios em caso de improcedência do pedido, independentemente de má-fé.",
          correta: false,
          explicacao_especifica: "Incorreta. O autor é isento de custas e ônus sucumbenciais, salvo comprovada má-fé (art. 5º, LXXIII)."
        },
        {
          letra: "D",
          texto: "A ação popular é cabível exclusivamente para tutelar direitos individuais patrimoniais violados por atos de agentes policiais em serviço.",
          correta: false,
          explicacao_especifica: "Incorreta. A ação popular tutela direitos difusos da coletividade (patrimônio público, moralidade, meio ambiente, etc.)."
        },
        {
          letra: "E",
          texto: "Estrangeiros não naturalizados residentes no Brasil possuem legitimidade ampla para a propositura da ação popular.",
          correta: false,
          explicacao_especifica: "Incorreta. Exige-se a qualidade de cidadão (eleitor brasileiro nato ou naturalizado, ou português equiparado)."
        }
      ]
    },
    {
      idSlug: "batch3-const-023",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Conforme tese de repercussão geral firmada pelo Supremo Tribunal Federal (Tema 855 - RE 806.339), a exigência constitucional de aviso prévio para a realização de manifestações pacíficas em locais abertos ao público não se confunde com pedido de autorização e é plenamente satisfeita com a veiculação de informações que permitam ao poder público zelar pela segurança e pelo trânsito.",
      explicacao: "GABARITO: CERTO. Tema 855 STF: 'A exigência constitucional de aviso prévio relativamente ao direito de reunião é satisfeita com a veiculação de informação que permita ao poder público zelar pela fluidez do trânsito, a ordem pública e a segurança, não se exigindo notificação formal prévia'.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Reprodução do posicionamento vinculante do STF sobre a garantia fundamental do direito de reunião (art. 5º, XVI)."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O STF pacificou que o direito de reunião não depende de autorização estatal, bastando ciência inequívoca que permita a organização da segurança."
        }
      ]
    },
    {
      idSlug: "batch3-const-024",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "O art. 5º, incisos XXXIX e XL, da Constituição Federal consagra postulados fundamentais do Direito Penal e Processual Penal. A respeito desses princípios, assinale a afirmativa correta:",
      explicacao: "GABARITO: B. Art. 5º, XXXIX ('não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal') e XL ('a lei penal não retroagirá, salvo para beneficiar o réu'). Portanto, a retroatividade benéfica (lex mitior) alcança inclusive fatos definitivamente julgados.",
      alternativas: [
        {
          letra: "A",
          texto: "A lei penal nova mais gravosa pode retroagir para atingir crimes permanentes cuja execução cessou antes de sua vigência.",
          correta: false,
          explicacao_especifica: "Incorreta. A lei penal mais severa nunca retroage para alcançar condutas pretéritas (art. 5º, XL da CF)."
        },
        {
          letra: "B",
          texto: "Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal, sendo assegurada a retroatividade da lei penal quando esta beneficiar o réu.",
          correta: true,
          explicacao_especifica: "Correta. Trata-se da junção dos princípios da legalidade, anterioridade e irretroatividade penal in pejus (art. 5º, XXXIX e XL da CF)."
        },
        {
          letra: "C",
          texto: "Medidas provisórias podem criar novos tipos penais incriminadores desde que haja relevância e urgência na segurança pública.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 62, § 1º, I, 'b' da CF veda expressamente a edição de medidas provisórias sobre matéria de direito penal."
        },
        {
          letra: "D",
          texto: "A analogia in malam partem é admitida no direito penal brasileiro para preencher lacunas relativas a crimes hediondos.",
          correta: false,
          explicacao_especifica: "Incorreta. O princípio da reserva legal estrita veda o uso da analogia prejudicial ao acusado."
        },
        {
          letra: "E",
          texto: "A lei penal benéfica só é aplicável durante a fase de inquérito policial, perdendo efeito após a proliferação da sentença condenatória.",
          correta: false,
          explicacao_especifica: "Incorreta. A lei benéfica retroage a qualquer tempo, alcançando fatos com trânsito em julgado (Súmula 611 do STF)."
        }
      ]
    },
    {
      idSlug: "batch3-const-025",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Papiloscopista Policial Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "Nos termos do art. 5º, LVI, da Constituição Federal, são inadmissíveis, no processo, as provas obtidas por meios ilícitos. A teoria da contaminação (ou dos frutos da árvore envenenada) estende essa nulidade às provas derivadas da ilícita, salvo quando não evidenciado o nexo de causalidade entre umas e outras, ou quando as derivadas puderem ser obtidas por uma fonte independente.",
      explicacao: "GABARITO: CERTO. Art. 5º, LVI da CF/88 c/c art. 157, §§ 1º e 2º do Código de Processo Penal. A inadmissibilidade das provas ilícitas abrange as provas derivadas (fruits of the poisonous tree), ressalvando-se expressamente a inexistência de nexo causal e a hipótese de fonte independente ou descoberta inevitável.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Síntese perfeita da jurisprudência do STF e do art. 157 do CPP em conformidade com a CF/88."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. As exceções da fonte independente e ausência de nexo causal são plenamente reconhecidas pelo ordenamento pátrio."
        }
      ]
    },
    {
      idSlug: "batch3-const-026",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "À luz das disposições constitucionais sobre os direitos das pessoas presas e da Súmula Vinculante nº 11 do Supremo Tribunal Federal, assinale a alternativa correta:",
      explicacao: "GABARITO: B. A Súmula Vinculante 11 do STF estabelece: 'Só é lícito o uso de algemas em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, por parte do preso ou de terceiros, justificada a excepcionalidade por escrito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade da prisão ou do ato processual a que se refere, sem prejuízo da responsabilidade civil do Estado'.",
      alternativas: [
        {
          letra: "A",
          texto: "O uso de algemas durante o ato de prisão em flagrante é obrigatório em qualquer circunstância para resguardar a soberania estatal.",
          correta: false,
          explicacao_especifica: "Incorreta. O uso de algemas é medida excepcional, vedado o seu emprego indiscriminado."
        },
        {
          letra: "B",
          texto: "O emprego de algemas é admitido em casos de resistência, fundado receio de fuga ou perigo à integridade física própria ou alheia, exigindo justificação da excepcionalidade por escrito.",
          correta: true,
          explicacao_especifica: "Correta. Reprodução literal dos requisitos cumulativos da Súmula Vinculante nº 11 do STF."
        },
        {
          letra: "C",
          texto: "A Constituição Federal autoriza a imposição de penas de trabalhos forçados para condenados por crimes hediondos de corrupção.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 5º, XLVII, 'c' da CF proíbe expressamente as penas de trabalhos forçados."
        },
        {
          letra: "D",
          texto: "A prisão de qualquer pessoa deve ser comunicada ao Ministério Público em até trinta dias, dispensada a comunicação ao juiz.",
          correta: false,
          explicacao_especifica: "Incorreta. A prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e à família do preso ou à pessoa por ele indicada (art. 5º, LXII)."
        },
        {
          letra: "E",
          texto: "Às presidiárias não é assegurado o direito de permanecer com seus filhos durante o período de amamentação em nenhuma hipótese.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 5º, L da CF expressamente assegura às presidiárias condições para que possam permanecer com seus filhos durante o período de amamentação."
        }
      ]
    },
    {
      idSlug: "batch3-const-027",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil de Goiás (PC-GO)",
      cargo_nome: "Agente de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "O direito de permanecer calado (nemo tenetur se detegere), expressamente assegurado ao preso no art. 5º, LXIII, da Constituição Federal de 1988, abrange a garantia de não ser compelido a produzir prova contra si mesmo, não podendo o silêncio do interrogado ser interpretado em seu desfavor nem utilizado como fundamento para a decretação de prisão cautelar.",
      explicacao: "GABARITO: CERTO. O princípio da não autoincriminação (art. 5º, LXIII da CF c/c art. 186, parágrafo único do CPP) assegura ao indivíduo a faculdade de silenciar perante as autoridades policiais e judiciais, vedando-se expressamente que o silêncio gere presunção de culpa ou prejuízo probatório.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Reflete a garantia fundamental da não autoincriminação e a jurisprudência pacificada dos Tribunais Superiores."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O exercício do direito constitucional ao silêncio é legítimo e jamais pode gerar presunção de culpa ou justificar prisão preventiva."
        }
      ]
    },
    {
      idSlug: "batch3-const-028",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "No tocante à extradição e à jurisdição penal internacional no âmbito dos direitos e garantias fundamentais da Carta de 1988, assinale a opção correta:",
      explicacao: "GABARITO: D. Art. 5º, LI ('nenhum brasileiro será extraditado, salvo o naturalizado, em caso de crime comum, praticado antes da naturalização, ou de comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins, na forma da lei'), LII ('não será concedida extradição de estrangeiro por crime político ou de opinião') e § 4º ('O Brasil se submete à jurisdição de Tribunal Penal Internacional a cuja criação tenha manifestado adesão'). A extradição passiva não se confunde com a entrega (surrender) ao TPI.",
      alternativas: [
        {
          letra: "A",
          texto: "O brasileiro nato pode ser extraditado em caso de comprovado envolvimento em atos de terrorismo internacional ou crimes contra a humanidade.",
          correta: false,
          explicacao_especifica: "Incorreta. O brasileiro nato jamais pode ser extraditado pelo Brasil (art. 5º, LI da CF)."
        },
        {
          letra: "B",
          texto: "O brasileiro naturalizado pode ser extraditado por crime comum praticado a qualquer tempo, mesmo após o processo regular de naturalização.",
          correta: false,
          explicacao_especifica: "Incorreta. Para crime comum, a prática deve ter ocorrido antes da naturalização; após a naturalização, admite-se extradição apenas por tráfico de entorpecentes."
        },
        {
          letra: "C",
          texto: "É admitida no ordenamento constitucional brasileiro a extradição de estrangeiro por crime político ou de opinião.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 5º, LII da CF veda expressamente a extradição de estrangeiro por crime político ou de opinião."
        },
        {
          letra: "D",
          texto: "O brasileiro naturalizado pode ser extraditado por crime comum praticado antes da naturalização ou por comprovado envolvimento em tráfico ilícito de entorpecentes, e o Brasil se submete à jurisdição do Tribunal Penal Internacional a cuja criação aderiu.",
          correta: true,
          explicacao_especifica: "Correta. Síntese perfeita do art. 5º, LI e § 4º da Constituição Federal."
        },
        {
          letra: "E",
          texto: "A Constituição Federal estabelece que as decisões do Tribunal Penal Internacional necessitam de homologação prévia pelo Superior Tribunal de Justiça.",
          correta: false,
          explicacao_especifica: "Incorreta. As decisões do TPI vinculam o Brasil diretamente por força do art. 5º, § 4º da CF e do Estatuto de Roma."
        }
      ]
    },
    {
      idSlug: "batch3-const-029",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil do Ceará (PC-CE)",
      cargo_nome: "Escrivão de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "facil",
      enunciado: "A criação de associações e, na forma da lei, a de cooperativas independem de autorização, sendo vedada a interferência estatal em seu funcionamento. Contudo, as associações só poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial, exigindo-se, no primeiro caso, o trânsito em julgado.",
      explicacao: "GABARITO: CERTO. Art. 5º, XVIII e XIX da Constituição Federal de 1988: 'XVIII - a criação de associações e, na forma da lei, a de cooperativas independem de autorização, sendo vedada a interferência estatal em seu funcionamento; XIX - as associações só poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial, exigindo-se, no primeiro caso, o trânsito em julgado'.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Literalidade do art. 5º, incisos XVIII e XIX da Carta Magna."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O texto corresponde exatamente às garantias constitucionais da liberdade de associação."
        }
      ]
    },
    {
      idSlug: "batch3-const-030",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "IBFC",
      orgao_nome: "Polícia Civil do Acre (PC-AC)",
      cargo_nome: "Papiloscopista Policial",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Nos termos do art. 5º, LVIII, da Constituição Federal e da Lei nº 12.037/2009 (Identificação Criminal), é correto afirmar:",
      explicacao: "GABARITO: C. O art. 5º, LVIII da CF estabelece que 'o civilmente identificado não será submetido a identificação criminal, salvo nas hipóteses previstas em lei'. A Lei 12.037/2009 enumera tais hipóteses, como quando o documento apresentar rasura ou indício de falsificação, ou for insuficiente para identificar cabalmente o indiciado.",
      alternativas: [
        {
          letra: "A",
          texto: "O indivíduo civilmente identificado deve ser compulsoriamente submetido à coleta de impressões digitais e fotografia em toda e qualquer prisão em flagrante.",
          correta: false,
          explicacao_especifica: "Incorreta. A regra constitucional é a não submissão à identificação criminal quando houver identificação civil idônea."
        },
        {
          letra: "B",
          texto: "A identificação criminal independe de lei ordinária regulamentadora, cabendo ao agente de polícia decidir discricionariamente sobre sua necessidade.",
          correta: false,
          explicacao_especifica: "Incorreta. A exceção exige expressa previsão em lei (Lei 12.037/2009)."
        },
        {
          letra: "C",
          texto: "O civilmente identificado não será submetido a identificação criminal, salvo nas hipóteses expressamente previstas em lei, como no caso de documento com rasura ou fundada suspeita de falsidade.",
          correta: true,
          explicacao_especifica: "Correta. Art. 5º, LVIII da CF c/c art. 3º da Lei nº 12.037/2009."
        },
        {
          letra: "D",
          texto: "A identificação do perfil genético mediante extração de DNA é expressamente proibida em qualquer hipótese pela Constituição Federal.",
          correta: false,
          explicacao_especifica: "Incorreta. O STF já validou a constitucionalidade da coleta de perfil genético prevista em lei para condenados por crimes dolosos graves (Tema 1083)."
        },
        {
          letra: "E",
          texto: "A apresentação de cópia não autenticada de carteira de identidade é suficiente para afastar de plano a identificação criminal em investigação de homicídio.",
          correta: false,
          explicacao_especifica: "Incorreta. Cópia simples não equivale a documento de identidade civil idôneo para afastar a identificação criminal."
        }
      ]
    },

    // -------------------------------------------------------------
    // TOPIC 3: ORGANIZAÇÃO DO ESTADO, NACIONALIDADE E DIREITOS POLÍTICOS - 12 questões (031 a 042)
    // -------------------------------------------------------------
    {
      idSlug: "batch3-const-031",
      disciplina_id: dConst,
      assunto_id: aOrgEst,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "facil",
      enunciado: "São brasileiros natos os nascidos na República Federativa do Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país.",
      explicacao: "GABARITO: CERTO. Art. 12, I, 'a', da Constituição Federal de 1988 consagra o critério do jus soli absoluto com temperamento restritivo apenas quando ambos os pais forem estrangeiros e ao menos um deles estiver a serviço de seu respectivo país de origem.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Literalidade do art. 12, I, 'a' da Constituição Federal de 1988."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O texto reproduz fielmente a principal hipótese de aquisição originária de nacionalidade brasileira."
        }
      ]
    },
    {
      idSlug: "batch3-const-032",
      disciplina_id: dConst,
      assunto_id: aOrgEst,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: "A Emenda Constitucional nº 131/2023 alterou substancialmente a disciplina da perda da nacionalidade brasileira (art. 12, § 4º, da CF/88). Com a nova sistemática constitucional, é correto afirmar:",
      explicacao: "GABARITO: B. A EC 131/2023 extinguiu a perda automática de nacionalidade pela aquisição voluntária de outra nacionalidade. O § 4º do art. 12 passou a dispor que a perda da nacionalidade será declarada apenas nos casos de: I - cancelamento de naturalização por sentença judicial em virtude de fraude relacionada ao processo de naturalização ou atentado contra a ordem constitucional e o Estado Democrático; II - pedido expresso de renúncia perante autoridade brasileira competente, ressalvadas situações que acarretem apatridia.",
      alternativas: [
        {
          letra: "A",
          texto: "O brasileiro que adquire voluntariamente outra nacionalidade por naturalização perde de forma automática e imediata a nacionalidade brasileira.",
          correta: false,
          explicacao_especifica: "Incorreta. A EC 131/2023 revogou a perda automática pela aquisição voluntária de outra nacionalidade."
        },
        {
          letra: "B",
          texto: "A perda da nacionalidade ocorrerá apenas no caso de cancelamento judicial da naturalização (por fraude ou atentado ao Estado Democrático) ou mediante pedido expresso de renúncia, desde que não gere apatridia.",
          correta: true,
          explicacao_especifica: "Correta. Nova redação do art. 12, § 4º, da CF/88 conferida pela EC 131/2023."
        },
        {
          letra: "C",
          texto: "É vedada a reaquisição da nacionalidade brasileira ao indivíduo que tiver formalizado pedido expresso de renúncia.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 12, § 5º da CF, incluído pela EC 131/2023, autoriza a reaquisição na forma da lei."
        },
        {
          letra: "D",
          texto: "O cancelamento da naturalização do brasileiro por sentença judicial pode ser decretado em processo administrativo perante o Ministério da Justiça.",
          correta: false,
          explicacao_especifica: "Incorreta. Exige-se sentença judicial transitada em julgado (reserva de jurisdição)."
        },
        {
          letra: "E",
          texto: "A nova emenda constitucional permitiu que o brasileiro nato perca a nacionalidade compulsoriamente caso cometa crimes políticos no exterior.",
          correta: false,
          explicacao_especifica: "Incorreta. O brasileiro nato só perde a nacionalidade se fizer pedido expresso de renúncia."
        }
      ]
    },
    {
      idSlug: "batch3-const-033",
      disciplina_id: dConst,
      assunto_id: aOrgEst,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "São cargos privativos de brasileiro nato os de Presidente e Vice-Presidente da República, Presidente da Câmara dos Deputados, Presidente do Senado Federal, Ministro do Supremo Tribunal Federal, da carreira diplomática, de oficial das Forças Armadas e de Ministro de Estado da Defesa.",
      explicacao: "GABARITO: CERTO. Art. 12, § 3º da CF/88: 'São privativos de brasileiro nato os cargos: I - de Presidente e Vice-Presidente da República; II - de Presidente da Câmara dos Deputados; III - de Presidente do Senado Federal; IV - de Ministro do Supremo Tribunal Federal; V - da carreira diplomática; VI - de oficial das Forças Armadas; VII - de Ministro de Estado da Defesa'.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Rol exaustivo dos cargos privativos de brasileiro nato previsto no art. 12, § 3º da CF."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O rol listado no enunciado reproduz exatamente os incisos I a VII do art. 12, § 3º da Carta Magna."
        }
      ]
    },
    {
      idSlug: "batch3-const-034",
      disciplina_id: dConst,
      assunto_id: aOrgEst,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "A respeito dos Direitos Políticos e das regras de elegibilidade e inelegibilidade inscritas no art. 14 da Constituição Federal, assinale a opção correta:",
      explicacao: "GABARITO: A. O art. 14, § 7º da CF prevê a inelegibilidade reflexa: 'São inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes consangüíneos ou afins, até o segundo grau ou por adoção, do Presidente da República, de Governador de Estado ou Território, do Distrito Federal, de Prefeito ou de quem os haja substituído dentro dos seis meses anteriores ao pleito, salvo se já titular de mandato eletivo e candidato à reeleição'.",
      alternativas: [
        {
          letra: "A",
          texto: "São inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes consanguíneos ou afins, até o segundo grau ou por adoção, do Presidente, de Governador ou de Prefeito, salvo se já titular de mandato eletivo e candidato à reeleição.",
          correta: true,
          explicacao_especifica: "Correta. Regra expressa da inelegibilidade reflexa contida no art. 14, § 7º da Carta Constitucional."
        },
        {
          letra: "B",
          texto: "O militar alistável que contar com mais de dez anos de serviço será compulsoriamente demitido do serviço ativo no momento do registro da candidatura.",
          correta: false,
          explicacao_especifica: "Incorreta. Se contar com mais de 10 anos, será agregado e, se eleito, passará automaticamente no ato da diplomação para a inatividade (art. 14, § 8º, II)."
        },
        {
          letra: "C",
          texto: "Os analfabetos e os estrangeiros são elegíveis a cargos no Poder Legislativo municipal.",
          correta: false,
          explicacao_especifica: "Incorreta. Os inalistáveis e os analfabetos são inelegíveis (art. 14, § 4º)."
        },
        {
          letra: "D",
          texto: "A idade mínima de vinte e um anos é condição de elegibilidade para os cargos de Senador da República e Governador de Estado.",
          correta: false,
          explicacao_especifica: "Incorreta. Para Senador a idade mínima é de 35 anos e para Governador é de 30 anos (art. 14, § 3º, VI)."
        },
        {
          letra: "E",
          texto: "O alistamento eleitoral e o voto são facultativos para os maiores de sessenta anos.",
          correta: false,
          explicacao_especifica: "Incorreta. O voto é facultativo para os analfabetos, maiores de 70 anos e maiores de 16 e menores de 18 anos (art. 14, § 1º, II)."
        }
      ]
    },
    {
      idSlug: "batch3-const-035",
      disciplina_id: dConst,
      assunto_id: aOrgEst,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil de Pernambuco (PC-PE)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "A competência para legislar sobre direito penal, direito processual penal, trânsito e transporte é privativa da União, sendo formalmente inconstitucional lei estadual ou municipal que pretenda criar novos tipos penais incriminadores ou regulamentar prazos recursais em inquéritos policiais.",
      explicacao: "GABARITO: CERTO. Art. 22, I e XI, da Constituição Federal de 1988: 'Compete privativamente à União legislar sobre: I - direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho; (...) XI - trânsito e transporte'. Leis estaduais que invadem essa seara padecem de inconstitucionalidade formal orgânica.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. As matérias de direito penal, processual penal e trânsito pertencem à competência privativa da União (art. 22 da CF)."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. Estados e Municípios não possuem competência para legislar sobre direito penal ou normas processuais penais."
        }
      ]
    },
    {
      idSlug: "batch3-const-036",
      disciplina_id: dConst,
      assunto_id: aOrgEst,
      banca_nome: "FCC",
      orgao_nome: "Polícia Civil do Amapá (PC-AP)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "No âmbito da competência legislativa concorrente entre União, Estados e Distrito Federal (art. 24 da CF/88), assinale a afirmativa correta:",
      explicacao: "GABARITO: D. No âmbito da legislação concorrente: a União limita-se a normas gerais (§ 1º); a competência da União não exclui a competência suplementar dos Estados (§ 2º); inexistindo lei federal sobre normas gerais, os Estados exercem competência legislativa plena (§ 3º); a superveniência de lei federal sobre normas gerais suspende a eficácia da lei estadual no que lhe for contrária (§ 4º).",
      alternativas: [
        {
          letra: "A",
          texto: "A competência da União para legislar sobre normas gerais exclui a competência suplementar dos Estados-membros em qualquer hipótese.",
          correta: false,
          explicacao_especifica: "Incorreta. A competência da União para normas gerais não exclui a suplementar dos Estados (art. 24, § 2º)."
        },
        {
          letra: "B",
          texto: "Inexistindo lei federal sobre normas gerais, os Estados ficam impedidos de legislar sobre as matérias do art. 24 até a edição de lei pelo Congresso.",
          correta: false,
          explicacao_especifica: "Incorreta. Inexistindo lei federal, os Estados exercem competência legislativa plena para atender às suas peculiaridades (art. 24, § 3º)."
        },
        {
          letra: "C",
          texto: "A superveniência de lei federal sobre normas gerais revoga integralmente as leis estaduais anteriores sobre a mesma matéria.",
          correta: false,
          explicacao_especifica: "Incorreta. A superveniência de lei federal suspende a eficácia da lei estadual no que for contrário, não gerando revogação (art. 24, § 4º)."
        },
        {
          letra: "D",
          texto: "A competência da União limitar-se-á a estabelecer normas gerais, e a superveniência de lei federal suspende a eficácia da lei estadual no que lhe for contrária.",
          correta: true,
          explicacao_especifica: "Correta. Síntese exata dos §§ 1º e 4º do art. 24 da Constituição Federal."
        },
        {
          letra: "E",
          texto: "A legislação concorrente autoriza os Municípios a editarem normas gerais sobre direito penitenciário aplicáveis a presídios estaduais.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 24 abrange União, Estados e DF, cabendo aos municípios apenas suplementar o que couber com interesse local."
        }
      ]
    },
    {
      idSlug: "batch3-const-037",
      disciplina_id: dConst,
      assunto_id: aOrgEst,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Delegado de Polícia Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "Decretada a intervenção federal pelo Presidente da República em um Estado-membro para pôr termo a grave comprometimento da ordem pública, o decreto interventivo deverá ser submetido à apreciação do Congresso Nacional no prazo de vinte e quatro horas, ficando o Congresso dispensado de convocação extraordinária se estiver em recesso.",
      explicacao: "GABARITO: ERRADO. O art. 36, § 1º c/c § 2º da CF estabelece que o decreto de intervenção será submetido à apreciação do Congresso Nacional no prazo de vinte e quatro horas e, se o Congresso estiver em recesso, será feita convocação extraordinária no mesmo prazo de 24 horas.",
      alternativas: [
        {
          texto: "Certo",
          correta: false,
          explicacao_especifica: "Item incorreto. O Congresso Nacional não fica dispensado de apreciação no recesso; há convocação extraordinária obrigatória no prazo de 24h."
        },
        {
          texto: "Errado",
          correta: true,
          explicacao_especifica: "Item correto. A CF/88 exige convocação extraordinária do Congresso Nacional em 24 horas caso este se encontre em período de recesso parlamentar (art. 36, § 2º)."
        }
      ]
    },
    {
      idSlug: "batch3-const-038",
      disciplina_id: dConst,
      assunto_id: aOrgEst,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: "A respeito do Estado de Defesa (art. 136 da Constituição Federal), assinale a opção correta:",
      explicacao: "GABARITO: C. O art. 136 da CF prevê: o Presidente da República pode, ouvidos o Conselho da República e o Conselho de Defesa Nacional, decretar estado de defesa para preservar ou restabelecer a ordem pública ou a paz social ameaçadas por grave instabilidade institucional ou calamidades. O tempo de duração não será superior a 30 dias, podendo ser prorrogado uma vez, por igual período. O decreto é apreciado pelo Congresso em 24h (controle político sucessivo).",
      alternativas: [
        {
          letra: "A",
          texto: "Depende de prévia autorização por maioria absoluta do Congresso Nacional antes de o decreto presidencial entrar em vigor.",
          correta: false,
          explicacao_especifica: "Incorreta. A autorização prévia é exigida no Estado de Sítio; no Estado de Defesa, a decretação é direta com controle congressual posterior em 24h."
        },
        {
          letra: "B",
          texto: "O parecer do Conselho da República e do Conselho de Defesa Nacional tem natureza vinculante, impedindo o Presidente de decretar a medida caso seja desfavorável.",
          correta: false,
          explicacao_especifica: "Incorreta. A manifestação dos conselhos tem caráter meramente opinativo/consultivo."
        },
        {
          letra: "C",
          texto: "O tempo de duração do estado de defesa não será superior a trinta dias, podendo ser prorrogado uma vez, por igual período, se persistirem as razões que justificaram a decretação.",
          correta: true,
          explicacao_especifica: "Correta. Trata-se da regra expressa contida no art. 136, § 2º da Constituição Federal."
        },
        {
          letra: "D",
          texto: "É vedada a restrição ao sigilo de correspondência e de comunicação telegráfica e telefônica durante a vigência do estado de defesa.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 136, § 1º, I, 'a', 'b' e 'c' autoriza restrições aos direitos de reunião, sigilo de correspondência e comunicação telegráfica/telefônica."
        },
        {
          letra: "E",
          texto: "A prisão por crime contra o Estado, determinada pelo executor da medida, não necessita de comunicação ao juiz competente.",
          correta: false,
          explicacao_especifica: "Incorreta. A prisão deve ser comunicada imediatamente ao juiz competente, que a relaxará se ilegal (art. 136, § 3º, I)."
        }
      ]
    },
    {
      idSlug: "batch3-const-039",
      disciplina_id: dConst,
      assunto_id: aOrgEst,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil de Santa Catarina (PC-SC)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Diferentemente do Estado de Defesa, o Presidente da República só pode decretar o Estado de Sítio após solicitar autorização ao Congresso Nacional e obter a aprovação pela maioria absoluta de seus membros.",
      explicacao: "GABARITO: CERTO. Art. 137, caput da Constituição Federal de 1988: 'O Presidente da República pode, ouvidos o Conselho da República e o Conselho de Defesa Nacional, solicitar ao Congresso Nacional autorização para decretar o estado de sítio (...)'. O art. 138 exige a manifestação favorável da maioria absoluta dos congressistas.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. O Estado de Sítio depende obrigatoriamente de controle político prévio e autorização por maioria absoluta do Congresso Nacional."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. A exigência de autorização prévia por maioria absoluta do Congresso Nacional é traço distintivo do Estado de Sítio."
        }
      ]
    },
    {
      idSlug: "batch3-const-040",
      disciplina_id: dConst,
      assunto_id: aOrgEst,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Militar de São Paulo (PM-SP)",
      cargo_nome: "Oficial da Polícia Militar",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: "No que se refere à missão constitucional das Forças Armadas (art. 142 da CF/88) e à jurisprudência do Supremo Tribunal Federal (ADPF 789 e ADI 6457), assinale a alternativa correta:",
      explicacao: "GABARITO: A. O STF pacificou no julgamento conjunto da ADPF 789 e da ADI 6457 que as Forças Armadas não exercem papel de 'Poder Moderador' e não possuem atribuição constitucional para intervir sobre os Poderes Executivo, Legislativo ou Judiciário. Sua missão destina-se à defesa da Pátria, garantia dos poderes constitucionais e, por iniciativa de qualquer destes, da lei e da ordem (GLO), sob a autoridade suprema do Presidente da República nos limites da lei.",
      alternativas: [
        {
          letra: "A",
          texto: "A Constituição Federal de 1988 não confere às Forças Armadas o papel de poder moderador, sendo vedada qualquer intervenção militar sobre o regular funcionamento dos poderes constituídos.",
          correta: true,
          explicacao_especifica: "Correta. Tese unânime firmada pelo Supremo Tribunal Federal na ADPF 789 e ADI 6457."
        },
        {
          letra: "B",
          texto: "As Forças Armadas podem atuar de ofício para anular decisões judiciais do STF que contrariem o interesse nacional.",
          correta: false,
          explicacao_especifica: "Incorreta. As Forças Armadas estão subordinadas à ordem constitucional e aos poderes constituídos, sem poder revisional de decisões judiciais."
        },
        {
          letra: "C",
          texto: "Os militares em serviço ativo possuem ampla liberdade de filiação partidária e direito de voto em eleições proporcionais.",
          correta: false,
          explicacao_especifica: "Incorreta. O militar, enquanto em serviço ativo, não pode estar filiado a partidos políticos (art. 142, § 3º, V da CF)."
        },
        {
          letra: "D",
          texto: "O oficial das Forças Armadas perde o posto e a patente por decisão administrativa irrecorrível do Comandante de sua respectiva Força.",
          correta: false,
          explicacao_especifica: "Incorreta. O oficial só perderá o posto e a patente se for julgado indigno ou com ele incompatível por decisão de tribunal militar competente (art. 142, § 3º, VI)."
        },
        {
          letra: "E",
          texto: "A realização de operações de Garantia da Lei e da Ordem (GLO) dispensa ato de convocação pelo Presidente da República.",
          correta: false,
          explicacao_especifica: "Incorreta. O emprego das Forças Armadas na GLO é prerrogativa do Presidente da República, por iniciativa de qualquer dos poderes constitucionais."
        }
      ]
    }
  ];
}
