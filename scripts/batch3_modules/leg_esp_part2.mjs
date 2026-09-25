import { TAXONOMIA } from "./taxonomia.mjs";

export const legEspPart2 = [
  // 036 - Lei Maria da Penha (Lei 11.340/2006): Conceito de Violência Doméstica e Súmula 600 STJ
  {
    idSlug: "batch3-leg-036",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.maria_penha,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Estado de Alagoas (PC-AL)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Para a configuração da violência doméstica e familiar prevista na Lei nº 11.340/2006 (Lei Maria da Penha), no âmbito das relações íntimas de afeto, é desnecessária a coabitação entre a vítima e o agressor.",
    explicacao: "GABARITO: CERTO. Nos termos da Súmula 600 do Superior Tribunal de Justiça: 'Para a configuração da violência doméstica e familiar prevista no artigo 5º da Lei n. 11.340/2006, é desnecessária a coabitação entre o autor da agressão e a vítima'. A tutela legal incide em namoros presentes ou pretéritos, sem exigência de residirem sob o mesmo teto.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Redação exata da Súmula 600 do STJ e do art. 5º, III da Lei 11.340/2006."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A coabitação não é requisito para a aplicação da Lei Maria da Penha nas relações de afeto."
      }
    ]
  },

  // 037 - Lei Maria da Penha: Formas de Violência e Tipos Penais
  {
    idSlug: "batch3-leg-037",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.maria_penha,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O art. 7º da Lei nº 11.340/2006 elenca as formas de violência doméstica e familiar contra a mulher. A conduta consistente em reter, subtrair, destruir parcial ou totalmente seus instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos configura violência:",
    explicacao: "GABARITO: D. O art. 7º, inciso IV, da Lei nº 11.340/2006 define expressamente como violência patrimonial qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos, incluindo os destinados a satisfazer suas necessidades.",
    alternativas: [
      {
        letra: "A",
        texto: "Moral, equiparada à injúria real.",
        correta: false,
        explicacao_especifica: "Incorreto. Violência moral é calúnia, difamação ou injúria (art. 7º, V)."
      },
      {
        letra: "B",
        texto: "Psicológica, apenas se gerar dano emocional diagnosticado por perícia psiquiátrica.",
        correta: false,
        explicacao_especifica: "Incorreto. A retenção ou destruição de bens e documentos é violência patrimonial."
      },
      {
        letra: "C",
        texto: "Física, punida como dano qualificado tentado.",
        correta: false,
        explicacao_especifica: "Incorreto. Violência física envolve ofensa à integridade ou saúde corporal da mulher (art. 7º, I)."
      },
      {
        letra: "D",
        texto: "Patrimonial.",
        correta: true,
        explicacao_especifica: "Correto. Trata-se da definição literal de violência patrimonial estampada no art. 7º, IV da Lei 11.340/2006."
      },
      {
        letra: "E",
        texto: "Sexual indireta comissiva por omissão.",
        correta: false,
        explicacao_especifica: "Incorreto. Violência sexual envolve condutas de natureza sexual não consentida (art. 7º, III)."
      }
    ]
  },

  // 038 - Lei Maria da Penha: Concessão Policial de Medidas Protetivas (Art. 12-C)
  {
    idSlug: "batch3-leg-038",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.maria_penha,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Verificada a existência de risco atual ou iminente à vida ou à integridade física ou psicológica da mulher em situação de violência doméstica e familiar, o Delegado de Polícia poderá afastar imediatamente o agressor do lar, domicílio ou local de convivência com a ofendida quando o Município não for sede de comarca, devendo comunicar a decisão ao juiz no prazo máximo de 24 horas para manutenção ou revogação da medida.",
    explicacao: "GABARITO: CERTO. O art. 12-C, inciso II, e § 1º, da Lei nº 11.340/2006 (declarado constitucional pelo STF na ADI 6138) autoriza o Delegado de Polícia a determinar o imediato afastamento do agressor do lar quando o Município não for sede de comarca, com comunicação obrigatória em até 24 horas ao juiz competente para que este decida em igual prazo.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Regra expressa do art. 12-C da Lei 11.340/2006, validada pelo STF na ADI 6138."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 12-C confere legitimidade excepcional à autoridade policial para afastamento urgente do agressor com controle judicial posterior em 24h."
      }
    ]
  },

  // 039 - Lei Maria da Penha: Descumprimento de Medidas Protetivas (Art. 24-A) e Vedações
  {
    idSlug: "batch3-leg-039",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.maria_penha,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado de Pernambuco (PC-PE)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O crime de descumprimento de medidas protetivas de urgência foi introduzido no ordenamento pelo art. 24-A da Lei nº 11.340/2006. Sobre a disciplina processual e penal desse crime, assinale a opção correta:",
    explicacao: "GABARITO: A. O art. 24-A, § 2º, da Lei nº 11.340/2006 dispõe expressamente que, na hipótese de prisão em flagrante pelo crime de descumprimento de decisão judicial que defere medidas protetivas de urgência, apenas a autoridade judicial poderá conceder fiança, sendo vedado o arbitramento pela autoridade policial.",
    alternativas: [
      {
        letra: "A",
        texto: "Na hipótese de prisão em flagrante pelo crime do art. 24-A, a fiança somente poderá ser concedida pela autoridade judicial, sendo vedado o arbitramento pelo Delegado de Polícia.",
        correta: true,
        explicacao_especifica: "Correto. Disposição expressa e cogente do art. 24-A, § 2º da Lei 11.340/2006."
      },
      {
        letra: "B",
        texto: "O Delegado de Polícia pode arbitrar fiança de 1 a 100 salários mínimos no crime do art. 24-A em razão da pena máxima não ultrapassar 2 anos.",
        correta: false,
        explicacao_especifica: "Incorreto. O § 2º do art. 24-A veda expressamente a fiança policial, conferindo competência exclusiva ao magistrado."
      },
      {
        letra: "C",
        texto: "O consentimento posterior da vítima em receber o agressor em sua residência descaracteriza retroativamente o crime de descumprimento de medida protetiva.",
        correta: false,
        explicacao_especifica: "Incorreto. O bem jurídico tutelado primário é a administração da justiça; a revogação da medida depende de ato judicial formal."
      },
      {
        letra: "D",
        texto: "Nos crimes praticados com violência doméstica contra a mulher, admite-se a aplicação de penas substitutivas de fornecimento de cesta básica.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 17 da Lei e a Súmula 589/STJ vedam expressamente penas de cesta básica ou pagamento isolado de multa."
      },
      {
        letra: "E",
        texto: "O crime de descumprimento de medidas protetivas admite o benefício da suspensão condicional do processo da Lei nº 9.099/1995.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 41 da Lei 11.340/2006 veda a incidência da Lei 9.099/1995 (Súmula 536/STJ)."
      }
    ]
  },

  // 040 - Lei Maria da Penha: Ação Penal e Retratação à Representação (Art. 16)
  {
    idSlug: "batch3-leg-040",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.maria_penha,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Distrito Federal (PCDF)",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nas ações penais públicas condicionadas à representação da ofendida de que trata a Lei nº 11.340/2006 (como na hipótese do crime de ameaça), só será admitida a renúncia à representação perante o juiz, em audiência especialmente designada com tal finalidade, antes do recebimento da denúncia e ouvido o Ministério Público, sendo nula a retratação formalizada perante a autoridade policial na delegacia.",
    explicacao: "GABARITO: CERTO. O art. 16 da Lei nº 11.340/2006 estabelece solenidade estrita: a renúncia/retratação à representação só é admitida perante o magistrado, em audiência específica realizada antes do recebimento da denúncia, ouvido o Ministério Público. Retratações colhidas em sede policial são desprovidas de eficácia jurídica extintiva da punibilidade.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Inteligência expressa do art. 16 da Lei 11.340/2006 e jurisprudência consolidada do STJ."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A retratação exige audiência judicial solene prévia ao recebimento da denúncia (art. 16)."
      }
    ]
  },

  // 041 - Interceptação Telefônica e Captação Ambiental (Lei 9.296/1996 - Pacote Anticrime)
  {
    idSlug: "batch3-leg-041",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.tortura_interceptacao,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Lei nº 13.964/2019 (Pacote Anticrime) introduziu o art. 8º-A na Lei nº 9.296/1996, regulamentando a captação ambiental de sinais eletromagnéticos, ópticos ou acústicos para fins de investigação criminal. A respeito desse meio de obtenção de prova, assinale a opção correta:",
    explicacao: "GABARITO: B. O art. 8º-A da Lei nº 9.296/1996 exige que a captação ambiental seja autorizada judicialmente quando a prova não puder ser feita por outros meios disponíveis e houver elementos probatórios razoáveis de autoria e materialidade de infração penal cujas penas máximas sejam superiores a 4 (quatro) anos ou de infração penal conexa.",
    alternativas: [
      {
        letra: "A",
        texto: "A captação ambiental independe de decisão judicial quando realizada no interior de veículos automotores particulares.",
        correta: false,
        explicacao_especifica: "Incorreto. A captação ambiental clandestina sem autorização judicial é crime e prova ilícita."
      },
      {
        letra: "B",
        texto: "A captação ambiental depende de decisão judicial fundamentada e poderá ser autorizada quando houver elementos probatórios razoáveis de autoria e materialidade de infrações penais cujas penas máximas sejam superiores a 4 anos ou de infrações penais conexas.",
        correta: true,
        explicacao_especifica: "Correto. Redação estrita e literal do art. 8º-A, caput e § 1º, da Lei 9.296/1996."
      },
      {
        letra: "C",
        texto: "O prazo máximo e improrrogável da captação ambiental é fixado em 48 horas a contar da instalação do dispositivo.",
        correta: false,
        explicacao_especifica: "Incorreto. O prazo é de até 15 dias, prorrogável por períodos sucessivos comprovada a necessidade (art. 8º-A, § 3º)."
      },
      {
        letra: "D",
        texto: "A captação ambiental pode ser validamente decretada pelo juiz de ofício na fase inquisitorial sem provocação policial ou ministerial.",
        correta: false,
        explicacao_especifica: "Incorreto. A atuação de ofício na investigação viola o sistema acusatório."
      },
      {
        letra: "E",
        texto: "A captação ambiental é admitida para qualquer contravenção penal de menor potencial ofensivo.",
        correta: false,
        explicacao_especifica: "Incorreto. Exige pena máxima superior a 4 anos ou crime conexo."
      }
    ]
  },

  // 042 - Interceptação e Gravação Clandestina Ambiental: Jurisprudência STF (Tema 979)
  {
    idSlug: "batch3-leg-042",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.tortura_interceptacao,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Conforme tese de repercussão geral fixada pelo Supremo Tribunal Federal (Tema 979), é lícita a prova consistente em gravação ambiental realizada por um dos interlocutores sem o conhecimento do outro, para fins de defesa própria ou quando não houver causa legal específica de sigilo ou reserva da conversa.",
    explicacao: "GABARITO: CERTO. O STF pacificou no Tema 979 de repercussão geral que a gravação ambiental feita por um dos interlocutores sem o consentimento ou conhecimento do outro é lícita e pode ser utilizada em processo penal como meio de prova, inclusive para fundamentar acusação ou defesa, ressalvadas as hipóteses em que a lei expressamente impõe dever de sigilo profissional ou de estado.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF reconhece a plena licitude da gravação ambiental realizada por um dos interlocutores sem sigilo legal violado (Tema 979)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A gravação por interlocutor não se confunde com interceptação telefônica de terceiro e é amplamente admitida."
      }
    ]
  },

  // 043 - Lei de Drogas: Colaboração Premiada Específica (Art. 41)
  {
    idSlug: "batch3-leg-043",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O art. 41 da Lei nº 11.343/2006 prevê causa específica de diminuição de pena para o agente que colaborar voluntariamente com a investigação policial ou o processo criminal. A respeito da colaboração premiada na Lei de Drogas, assinale a alternativa correta:",
    explicacao: "GABARITO: C. O art. 41 da Lei 11.343/2006 estabelece que o indiciado ou acusado que colaborar voluntariamente com a investigação policial e o processo criminal na identificação dos demais coautores ou partícipes do crime e na recuperação total ou parcial do produto do crime, no caso de condenação, terá sua pena reduzida de um terço a dois terços.",
    alternativas: [
      {
        letra: "A",
        texto: "Garante compulsoriamente a concessão de perdão judicial extintivo da punibilidade pelo Delegado de Polícia.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 41 prevê redução de pena de 1/3 a 2/3 a ser concedida pelo magistrado na sentença."
      },
      {
        letra: "B",
        texto: "Aplica-se exclusivamente aos crimes culposos de porte de drogas para consumo pessoal.",
        correta: false,
        explicacao_especifica: "Incorreto. Aplica-se aos crimes de tráfico e correlatos."
      },
      {
        letra: "C",
        texto: "Permite a redução da pena privativa de liberdade de um terço a dois terços se a colaboração voluntária resultar na identificação de coautores ou partícipes e na recuperação total ou parcial do produto do crime.",
        correta: true,
        explicacao_especifica: "Correto. Redação exata do art. 41 da Lei nº 11.343/2006."
      },
      {
        letra: "D",
        texto: "Exige que a colaboração seja prestada unicamente após o trânsito em julgado da condenação criminal.",
        correta: false,
        explicacao_especifica: "Incorreto. A colaboração deve ocorrer durante a investigação ou o processo criminal."
      },
      {
        letra: "E",
        texto: "Apenas produz efeitos se o colaborador confessar crimes cometidos por autoridades com prerrogativa de foro.",
        correta: false,
        explicacao_especifica: "Incorreto. A eficácia decorre da identificação dos comparsas ou recuperação do produto ilícito."
      }
    ]
  },

  // 044 - Lei de Drogas: Tráfico Interestadual e Súmula 587 do STJ
  {
    idSlug: "batch3-leg-044",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Para a incidência da majorante do tráfico interestadual de drogas (art. 40, inciso V, da Lei nº 11.343/2006), é necessária a efetiva transposição da linha divisória entre os Estados da Federação, sendo inaplicável a causa de aumento caso o agente seja preso antes de cruzar a divisa territorial.",
    explicacao: "GABARITO: ERRADO. Conforme a Súmula 587 do Superior Tribunal de Justiça: 'Para a incidência da majorante prevista no artigo 40, V, da Lei n. 11.343/2006, é desnecessária a efetiva transposição de fronteiras entre Estados da Federação, sendo suficiente a demonstração inequívoca da intenção de realizar o tráfico interestadual'.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Incorreto. A Súmula 587 do STJ estabelece expressamente a desnecessidade de transposição física da divisa interestadual."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. O item está errado pois a Súmula 587/STJ dispensa a efetiva transposição, bastando a comprovação do destino interestadual."
      }
    ]
  },

  // 045 - Lei de Drogas: Uso Compartilhado (Art. 33, § 3º)
  {
    idSlug: "batch3-leg-045",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A conduta de oferecer droga, eventualmente e sem objetivo de lucro, a pessoa de seu relacionamento, para juntos a consumirem (art. 33, § 3º, da Lei nº 11.343/2006):",
    explicacao: "GABARITO: B. A figura típica do art. 33, § 3º da Lei de Drogas (uso compartilhado) comina pena de detenção de 6 meses a 1 ano e pagamento de 700 a 1.500 dias-multa, sem prejuízo das penas previstas no art. 28. Trata-se de infração de menor potencial ofensivo de competência dos Juizados Especiais Criminais (JECRIM).",
    alternativas: [
      {
        letra: "A",
        texto: "Equipara-se ao tráfico de drogas qualificado hediondo, inafiançável e insuscetível de sursis processual.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se de crime de menor potencial ofensivo, apenado com detenção de 6 meses a 1 ano."
      },
      {
        letra: "B",
        texto: "Constitui infração penal de menor potencial ofensivo, punida com pena de detenção de 6 meses a 1 ano e multa, submetida ao rito da Lei nº 9.099/1995.",
        correta: true,
        explicacao_especifica: "Correto. Inteligência expressa do art. 33, § 3º da Lei 11.343/2006 c/c Lei 9.099/1995."
      },
      {
        letra: "C",
        texto: "É conduta penalmente atípica em qualquer hipótese, em razão do princípio da alteridade.",
        correta: false,
        explicacao_especifica: "Incorreto. A conduta é expressamente tipificada como crime no art. 33, § 3º."
      },
      {
        letra: "D",
        texto: "Impõe a lavratura obrigatória de auto de prisão em flagrante sem concessão de fiança.",
        correta: false,
        explicacao_especifica: "Incorreto. Por ser infração de menor potencial ofensivo, lavra-se TCO caso o autor assuma o compromisso de comparecer ao JECRIM (art. 69 da Lei 9.099/95)."
      },
      {
        letra: "E",
        texto: "Acarreta sanção administrativa exclusiva aplicada pelo PROCON municipal.",
        correta: false,
        explicacao_especifica: "Incorreto. É infração penal tipificada na Lei de Drogas."
      }
    ]
  },

  // 046 - Lei de Drogas: Maquinário para Preparação (Art. 34) e Princípio da Consunção
  {
    idSlug: "batch3-leg-046",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O crime de posse ou guarda de maquinário, aparelho ou objeto destinado à fabricação, preparação ou produção de drogas (art. 34 da Lei nº 11.343/2006) é crime autônomo, mas de natureza subsidiária, restando absorvido pelo crime de tráfico de drogas (art. 33) quando os apetrechos apreendidos integrarem a mesma linha causal e cadeia de produção direta do entorpecente comercializado pelo próprio agente no mesmo contexto fático.",
    explicacao: "GABARITO: CERTO. Conforme jurisprudência reiterada do STJ e do STF, o art. 34 possui caráter subsidiário em relação ao art. 33 da Lei 11.343/2006. Se no mesmo contexto fático o agente é flagrado com drogas e com os instrumentos/maquinários utilizados para prepará-las e refiná-las, o delito do art. 34 funciona como ato preparatório/crime-meio e é absorvido pelo crime-fim de tráfico de drogas (princípio da consunção).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STJ aplica o princípio da consunção quando os objetos do art. 34 servem diretamente ao tráfico do art. 33 no mesmo contexto fático."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A jurisprudência afasta o concurso material quando há unidade de desígnio e consunção na linha de produção."
      }
    ]
  },

  // 047 - Estatuto do Desarmamento: Acessórios Proibidos / Silenciadores (Art. 16, § 1º, II)
  {
    idSlug: "batch3-leg-047",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.desarmamento,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante cumprimento de mandado de busca, agentes policiais apreenderam no domicílio do investigado um dispositivo silenciador (supressor de ruído de tiro) acoplável a fuzis, sem autorização legal ou regulamentar. De acordo com a Lei nº 10.826/2003, a conduta de possuir acessório de uso restrito destituído de autorização subsume-se ao delito de:",
    explicacao: "GABARITO: A. O art. 16, § 1º, inciso II, da Lei nº 10.826/2003 equipara às penas de posse/porte de arma de uso restrito a conduta de quem 'modificar as características de arma de fogo, de forma a torná-la equivalente a arma de fogo de uso proibido ou restrito ou para fins de dificultar ou de qualquer modo induzir a erro autoridade policial, perito ou juiz' e o caput do art. 16 abrange expressamente 'possuir, deter, portar, adquirir, fornecer, receber, ter em depósito, transportar, ceder, ainda que gratuitamente, emprestar, remeter, empregar, manter sob sua guarda ou ocultar arma de fogo, acessório ou munição de uso restrito'.",
    alternativas: [
      {
        letra: "A",
        texto: "Posse ilegal de acessório de arma de fogo de uso restrito (art. 16, caput e parágrafos).",
        correta: true,
        explicacao_especifica: "Correto. O art. 16 da Lei 10.826/03 abrange expressamente armas, munições e acessórios de uso restrito."
      },
      {
        letra: "B",
        texto: "Contravenção penal de fabricação clandestina de artefatos pirotécnicos.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se de crime grave apenado com reclusão no Estatuto do Desarmamento."
      },
      {
        letra: "C",
        texto: "Posse de uso permitido (art. 12), em razão da ausência do cano do armamento.",
        correta: false,
        explicacao_especifica: "Incorreto. O supressor de som é acessório controlado classificado como restrito."
      },
      {
        letra: "D",
        texto: "Conduta atípica, pois silenciadores não possuem capacidade intrínseca de deflagrar projéteis.",
        correta: false,
        explicacao_especifica: "Incorreto. Acessórios são objetos materiais autônomos expressamente protegidos pela norma penal de perigo abstrato."
      },
      {
        letra: "E",
        texto: "Tráfico de drogas por equiparação biológica.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se de crime da Lei de Armas."
      }
    ]
  },

  // 048 - Estatuto do Desarmamento: Omissão de Cautela (Art. 13)
  {
    idSlug: "batch3-leg-048",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.desarmamento,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O crime de omissão de cautela (art. 13 da Lei nº 10.826/2003) é delito de natureza culposa que se consuma quando o possuidor ou proprietário de arma de fogo deixa de observar as cautelas necessárias para impedir que menor de 18 anos ou pessoa portadora de deficiência mental se apodere de arma de fogo que esteja sob sua posse ou que seja de sua propriedade.",
    explicacao: "GABARITO: CERTO. O art. 13 da Lei nº 10.826/2003 tipifica o crime de omissão de cautela ('deixar de observar as cautelas necessárias para impedir que menor de 18 anos ou pessoa com deficiência mental se apodere de arma de fogo'), punido com detenção de 1 a 2 anos e multa. Trata-se de crime de natureza culposa (infração do dever objetivo de cuidado na guarda da arma).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Redação literal do art. 13 da Lei 10.826/2003, crime de dever de cautela na custódia de armas."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A conduta é expressamente típica e tutela a incolumidade pública."
      }
    ]
  },

  // 049 - Estatuto do Desarmamento: Porte de Guarda Municipal e STF (ADI 5948 e ADPF 995)
  {
    idSlug: "batch3-leg-049",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.desarmamento,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal, ao julgar a ADI 5948 e a ADPF 995, pacificou a disciplina constitucional do porte de arma de fogo pelos integrantes das Guardas Municipais. Conforme a jurisprudência vinculante da Suprema Corte:",
    explicacao: "GABARITO: C. O STF julgou inconstitucionais as restrições baseadas no número de habitantes do Município (antigos incisos III e IV do art. 6º da Lei 10.826/03), reconhecendo que todos os integrantes das guardas municipais têm direito ao porte de arma de fogo em serviço e fora de serviço em âmbito nacional, integrando as guardas o sistema de segurança pública do art. 144 da CF/88.",
    alternativas: [
      {
        letra: "A",
        texto: "Guardas municipais de cidades com menos de 50.000 habitantes são terminantemente proibidos de portar arma de fogo em qualquer circunstância.",
        correta: false,
        explicacao_especifica: "Incorreto. O STF declarou inconstitucional o critério populacional que restringia o porte."
      },
      {
        letra: "B",
        texto: "O porte de arma dos guardas municipais restringe-se exclusivamente aos limites geográficos do respectivo município e apenas durante o horário de escala de serviço.",
        correta: false,
        explicacao_especifica: "Incorreto. O porte funcional estende-se fora de serviço e com abrangência nacional cumpridos os requisitos institucionais."
      },
      {
        letra: "C",
        texto: "É inconstitucional a fixação de restrições ao porte de arma de fogo aos integrantes das guardas municipais com base no número de habitantes do município, sendo autorizado o porte em serviço e fora dele em âmbito nacional.",
        correta: true,
        explicacao_especifica: "Correto. Tese fixada pelo Plenário do STF na ADI 5948 e reiterada na ADPF 995."
      },
      {
        letra: "D",
        texto: "As guardas municipais não integram o Sistema Único de Segurança Pública (SUSP) nem exercem atividade preventiva de segurança.",
        correta: false,
        explicacao_especifica: "Incorreto. O STF assentou que as guardas municipais integram o sistema de segurança pública."
      },
      {
        letra: "E",
        texto: "A competência para autorizar o porte de guardas municipais é da Polícia Militar de cada Estado federado.",
        correta: false,
        explicacao_especifica: "Incorreto. A competência para fiscalização e registro é da Polícia Federal (SINARM)."
      }
    ]
  },

  // 050 - Crimes Hediondos: Comércio Ilegal e Tráfico Internacional de Armas
  {
    idSlug: "batch3-leg-050",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_hediondos,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Com as modificações introduzidas pela Lei nº 13.964/2019 (Pacote Anticrime) na Lei nº 8.072/1990, passaram a integrar expressamente o rol dos crimes hediondos os delitos de comércio ilegal de armas de fogo (art. 17) e de tráfico internacional de arma de fogo, acessório ou munição (art. 18), ambos da Lei nº 10.826/2003.",
    explicacao: "GABARITO: CERTO. O parágrafo único do art. 1º da Lei nº 8.072/1990 (com redação pela Lei 13.964/2019) elenca como hediondos: inciso II - o crime de comércio ilegal de armas de fogo (art. 17 da Lei nº 10.826/2003); e inciso III - o crime de tráfico internacional de arma de fogo, acessório ou munição (art. 18 da Lei nº 10.826/2003).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 1º, parágrafo único, II e III da Lei 8.072/90 qualifica expressamente tais delitos como hediondos."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O Pacote Anticrime inseriu formalmente os arts. 17 e 18 da Lei de Armas no rol de hediondos."
      }
    ]
  },

  // 051 - Crimes Hediondos: Roubo Circunstanciado e Qualificado
  {
    idSlug: "batch3-leg-051",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_hediondos,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação ao crime de roubo e sua classificação como crime hediondo na Lei nº 8.072/1990 (com as alterações do Pacote Anticrime), assinale a hipótese que ostenta natureza de crime hediondo:",
    explicacao: "GABARITO: B. O art. 1º, inciso II, da Lei nº 8.072/1990 elenca como hediondo o roubo: a) circunstanciado pela restrição de liberdade da vítima; b) circunstanciado pelo emprego de arma de fogo (de uso permitido, restrito ou proibido); e c) qualificado pelo resultado lesão corporal grave ou morte (latrocínio). O roubo cometido apenas com arma branca ou concurso de pessoas sem arma de fogo NÃO é hediondo.",
    alternativas: [
      {
        letra: "A",
        texto: "Roubo circunstanciado pelo concurso de duas ou mais pessoas, desprovido de emprego de armas.",
        correta: false,
        explicacao_especifica: "Incorreto. O concurso de agentes isolado no roubo não torna o delito hediondo."
      },
      {
        letra: "B",
        texto: "Roubo circunstanciado pelo emprego de arma de fogo de uso permitido (art. 157, § 2º-A, inciso I, do CP).",
        correta: true,
        explicacao_especifica: "Correto. O art. 1º, II, 'b' da Lei 8.072/90 torna hediondo o roubo com emprego de arma de fogo (de uso permitido, restrito ou proibido)."
      },
      {
        letra: "C",
        texto: "Roubo circunstanciado pelo emprego de arma branca (faca de caça).",
        correta: false,
        explicacao_especifica: "Incorreto. O emprego de arma branca é causa de aumento no CP (art. 157, § 2º, VII), mas NÃO é crime hediondo na Lei 8.072/90."
      },
      {
        letra: "D",
        texto: "Roubo simples cometido contra vítima idosa na via pública sem lesões corporais.",
        correta: false,
        explicacao_especifica: "Incorreto. O roubo simples não integra o rol da Lei 8.072/90."
      },
      {
        letra: "E",
        texto: "Roubo de veículo automotor transportado para outro Estado sem restrição de liberdade da vítima.",
        correta: false,
        explicacao_especifica: "Incorreto. A transposição de fronteira/estado no roubo não está no rol do art. 1º, II da Lei 8.072/90."
      }
    ]
  },

  // 052 - Crimes Hediondos: Inconstitucionalidade da Vedação Absoluta à Liberdade Provisória
  {
    idSlug: "batch3-leg-052",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_hediondos,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Embora a Constituição Federal estabeleça que os crimes hediondos e equiparados são inafiançáveis, o Supremo Tribunal Federal consolidou o entendimento de que a vedação apriorística e abstrata à liberdade provisória é inconstitucional, devendo a prisão preventiva ser fundamentada concretamente nos requisitos do art. 312 do CPP.",
    explicacao: "GABARITO: CERTO. O Plenário do STF (HC 104.329/SP e jurisprudência vinculante) declarou inconstitucional a vedação legal genérica à concessão de liberdade provisória para crimes hediondos e equiparados. A inafiançabilidade constitucional (art. 5º, XLIII) não impede a concessão de liberdade provisória sem fiança, salvo se estiverem presentes os requisitos concretos da prisão preventiva (art. 312 do CPP).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF pacificou a inconstitucionalidade da vedação legal absoluta à concessão de liberdade provisória."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A prisão preventiva exige fundamentação concreta nos termos do art. 312 do CPP."
      }
    ]
  },

  // 053 - Abuso de Autoridade: Crimes em Interrogatório e Garantias Constitucionais (Art. 15)
  {
    idSlug: "batch3-leg-053",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito dos crimes de abuso de autoridade praticados durante a realização de interrogatórios policiais (art. 15 da Lei nº 13.869/2019), assinale a afirmativa correta:",
    explicacao: "GABARITO: B. O art. 15, parágrafo único, inciso I, da Lei nº 13.869/2019 prevê que incorre na pena de detenção de 1 a 4 anos e multa quem prossegue com o interrogatório de pessoa que tenha manifestado o desejo de permanecer calada ou de ser assistida por advogado ou defensor público.",
    alternativas: [
      {
        letra: "A",
        texto: "O interrogatório policial noturno é sempre ilícito, mesmo quando a pessoa for presa em flagrante delito e optar por prestar declarações.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 18 admite interrogatório noturno se o réu for preso em flagrante ou consentir expressamente assistido por defensor."
      },
      {
        letra: "B",
        texto: "Incorre em crime de abuso de autoridade quem prossegue com o interrogatório de pessoa que tenha expressado formalmente o desejo de permanecer em silêncio ou de contar com a assistência de advogado.",
        correta: true,
        explicacao_especifica: "Correto. Tipo penal expresso no art. 15, parágrafo único, I da Lei 13.869/2019."
      },
      {
        letra: "C",
        texto: "A autoridade policial pode compelir o preso a responder a todas as perguntas sob pena de prisão por desacato.",
        correta: false,
        explicacao_especifica: "Incorreto. O direito ao silêncio (nemo tenetur se detegere) é garantia constitucional intransponível."
      },
      {
        letra: "D",
        texto: "O crime de prosseguir com interrogatório de quem optou pelo silêncio exige resultado naturalístico consistente em lesão corporal comprovada.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se de crime formal que prescinde de lesão corporal."
      },
      {
        letra: "E",
        texto: "A presença de advogado durante o interrogatório na delegacia é causa que afasta a incidência da Lei de Abuso de Autoridade em qualquer circunstância.",
        correta: false,
        explicacao_especifica: "Incorreto. A presença do patrono não autoriza a prática de constrangimentos ilegais típicos."
      }
    ]
  },

  // 054 - Abuso de Autoridade: Constranger a Depor sob Ameaça de Prisão (Art. 15, Caput)
  {
    idSlug: "batch3-leg-054",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Constranger a depor, sob ameaça de prisão, pessoa que, em razão de sua função, ministério, ofício ou profissão, deva guardar segredo ou resguardar sigilo legal constitui crime de abuso de autoridade tipificado no art. 15, caput, da Lei nº 13.869/2019.",
    explicacao: "GABARITO: CERTO. O art. 15, caput, da Lei nº 13.869/2019 criminaliza a conduta de 'constranger a depor, sob ameaça de prisão, pessoa que, em razão de função, ministério, ofício ou profissão, deva guardar segredo ou resguardar sigilo', com pena de detenção de 1 a 4 anos e multa.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Redação exata do tipo penal incriminador do art. 15, caput, da Lei 13.869/2019."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A violação coercitiva do sigilo profissional ou ministerial configura manifesto abuso de autoridade."
      }
    ]
  },

  // 055 - Abuso de Autoridade: Penas Restritivas de Direitos (Art. 5º)
  {
    idSlug: "batch3-leg-055",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado de Pernambuco (PC-PE)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 5º da Lei nº 13.869/2019, as penas restritivas de direitos substitutivas das privativas de liberdade são:",
    explicacao: "GABARITO: A. O art. 5º da Lei nº 13.869/2019 estabelece que as penas restritivas de direitos substitutivas das privativas de liberdade são: I - prestação de serviços à comunidade ou a entidades públicas; II - suspensão do exercício do cargo, da função ou do mandato, pelo prazo de 1 (um) a 6 (seis) meses, com a perda dos vencimentos e das vantagens.",
    alternativas: [
      {
        letra: "A",
        texto: "Prestação de serviços à comunidade ou a entidades públicas; e suspensão do exercício do cargo, função ou mandato pelo prazo de 1 a 6 meses, com perda dos vencimentos e vantagens.",
        correta: true,
        explicacao_especifica: "Correto. Rol taxativo das penas restritivas substitutivas do art. 5º, I e II da Lei 13.869/2019."
      },
      {
        letra: "B",
        texto: "Perda imediata e irrevogável da aposentadoria e cancelamento do registro civil.",
        correta: false,
        explicacao_especifica: "Incorreto. Sanções desprovidas de amparo legal e inconstitucionais."
      },
      {
        letra: "C",
        texto: "Prestação pecuniária revertida à vítima no valor fixo de 500 salários mínimos.",
        correta: false,
        explicacao_especifica: "Incorreto. As penas restritivas especiais são as dos incisos I e II do art. 5º."
      },
      {
        letra: "D",
        texto: "Suspensão dos direitos políticos pelo prazo de 10 anos e monitoramento eletrônico contínuo.",
        correta: false,
        explicacao_especifica: "Incorreto. A suspensão funcional varia de 1 a 6 meses."
      },
      {
        letra: "E",
        texto: "Transferência compulsória para unidade prisional de segurança máxima.",
        correta: false,
        explicacao_especifica: "Incorreto. Não se trata de pena restritiva de direitos."
      }
    ]
  },

  // 056 - Organizações Criminosas: Banco Nacional de Perfis Genéticos e Pacote Anticrime
  {
    idSlug: "batch3-leg-056",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.org_criminosas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A identificação do perfil genético mediante extração de DNA de condenados por crimes dolosos praticados com violência grave contra a pessoa ou por crimes hediondos, prevista na Lei nº 12.037/2009 e na LEP, é procedimento obrigatório para armazenamento no Banco Nacional de Perfis Genéticos, cuja recusa injustificada do apenado em fornecer o material biológico constitui falta disciplinar de natureza grave.",
    explicacao: "GABARITO: CERTO. Conforme o art. 9º-A da Lei de Execução Penal (com alterações do Pacote Anticrime e Lei 12.037/2009), a submissão à coleta de perfil genético é obrigatória aos condenados por crimes hediondos ou praticados com violência grave contra a pessoa. O § 8º do art. 9º-A estabelece expressamente que a recusa do condenado em submeter-se ao procedimento de identificação do perfil genético constitui falta grave.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A identificação genética é obrigatória e sua recusa configura falta grave nos termos do art. 9º-A, § 8º da LEP."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A recusa injustificada ao procedimento de perfil genético é expressamente tipificada como falta grave na LEP."
      }
    ]
  },

  // 057 - Organizações Criminosas: Excludente de Responsabilidade do Agente Infiltrado (Art. 13)
  {
    idSlug: "batch3-leg-057",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.org_criminosas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No curso de operação de infiltração policial devidamente autorizada pelo juízo competente para desarticular facção criminosa violenta, o policial infiltrado é compelido a praticar uma infração penal para manter seu disfarce e salvaguardar sua vida. Conforme o art. 13 da Lei nº 12.850/2013, o policial infiltrado:",
    explicacao: "GABARITO: D. O art. 13 da Lei nº 12.850/2013 dispõe que: 'O agente que não guardar, em sua atuação, a devida proporcionalidade com a finalidade da investigação, responderá pelos excessos praticados', estabelecendo a regra de que o policial que atua nos estritos limites da necessidade e proporcionalidade da infiltração não é punível pela prática das infrações estritamente necessárias ao cumprimento de sua missão policial (inexigibilidade de conduta diversa / causa especial de justificação).",
    alternativas: [
      {
        letra: "A",
        texto: "Responderá criminalmente por todas as condutas praticadas, com pena privativa de liberdade aumentada do dobro em razão de sua condição de policial.",
        correta: false,
        explicacao_especifica: "Incorreto. A lei confere proteção jurídica à atuação proporcional do agente infiltrado (art. 13)."
      },
      {
        letra: "B",
        texto: "Gozará de imunidade penal absoluta e perpétua, inclusive para a prática dolosa de crimes de homicídio e tortura.",
        correta: false,
        explicacao_especifica: "Incorreto. A imunidade não é absoluta; o agente responde por excessos que desbordem da proporcionalidade."
      },
      {
        letra: "C",
        texto: "Somente será isento de pena caso obtenha indulto presidencial assinado previamente ao início da missão.",
        correta: false,
        explicacao_especifica: "Incorreto. A excludente é legal e decorre da própria Lei 12.850/13."
      },
      {
        letra: "D",
        texto: "Não é punível pelas infrações cometidas no âmbito da missão quando guardar a devida proporcionalidade com os fins da investigação e a preservação de sua vida, respondendo apenas pelos excessos praticados.",
        correta: true,
        explicacao_especifica: "Correto. Inteligência do art. 13 da Lei 12.850/2013, que isenta de punição a atuação proporcional e pune apenas os excessos."
      },
      {
        letra: "E",
        texto: "Ficará sujeito à perda automática do cargo civil independente de apuração de excesso.",
        correta: false,
        explicacao_especifica: "Incorreto. O policial está no cumprimento de dever legal especial sob autorização judicial."
      }
    ]
  },

  // 058 - Organizações Criminosas: Requisição Direta de Dados Cadastrais (Art. 15)
  {
    idSlug: "batch3-leg-058",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.org_criminosas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Distrito Federal (PCDF)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O Delegado de Polícia e o Ministério Público possuem legitimidade legal para requisitar, de forma direta e independentemente de prévia autorização judicial, dados cadastrais de investigados (qualificação pessoal, filiação e endereço) constantes de bancos de dados da Justiça Eleitoral, empresas telefônicas, instituições financeiras, provedores de internet e administradoras de cartão de crédito, no curso de investigações de organização criminosa.",
    explicacao: "GABARITO: CERTO. O art. 15 da Lei nº 12.850/2013 dispõe expressamente que: 'O delegado de polícia e o Ministério Público terão acesso, independentemente de autorização judicial, apenas aos dados cadastrais do investigado que informem exclusivamente a qualificação pessoal, a filiação e o endereço mantidos pela Justiça Eleitoral, empresas telefônicas, instituições financeiras, provedores de internet e administradoras de cartão de crédito'. Dados cadastrais não são acobertados por sigilo das comunicações telefônicas ou de dados em sentido estrito.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 15 da Lei 12.850/13 confere acesso direto a dados estritamente cadastrais sem necessidade de ordem judicial."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A exigência de ordem judicial aplica-se ao conteúdo das comunicações/extratos bancários, e não a dados cadastrais básicos."
      }
    ]
  },

  // 059 - Lavagem de Dinheiro: Pessoas Sujeitas ao Mecanismo de Controle e COAF (Arts. 9º a 11)
  {
    idSlug: "batch3-leg-059",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lavagem_dinheiro,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito dos deveres de identificação de clientes, manutenção de registros e comunicação de operações financeiras atípicas ao Conselho de Controle de Atividades Financeiras (COAF), previstos nos arts. 9º, 10 e 11 da Lei nº 9.613/1998, assinale a afirmativa correta:",
    explicacao: "GABARITO: B. Conforme o art. 11, § 2º, da Lei nº 9.613/1998, as comunicações de boa-fé feitas ao COAF pelos setores e pessoas obrigadas (instituições financeiras, joalherias, cartórios, administradoras de cartões etc.) não acarretarão qualquer responsabilidade civil ou administrativa aos comunicantes.",
    alternativas: [
      {
        letra: "A",
        texto: "Apenas instituições financeiras públicas e bancos oficiais estão submetidos aos mecanismos de controle do COAF.",
        correta: false,
        explicacao_especifica: "Incorreto. O rol do art. 9º abrange bancos privados, administradoras de consórcios, joalherias, cartórios, agentes imobiliários, etc."
      },
      {
        letra: "B",
        texto: "As comunicações de operações suspeitas feitas de boa-fé ao COAF não acarretarão qualquer responsabilidade civil ou administrativa para as pessoas e entidades comunicantes.",
        correta: true,
        explicacao_especifica: "Correto. Regra expressa de salvaguarda prevista no art. 11, § 2º da Lei 9.613/1998."
      },
      {
        letra: "C",
        texto: "As empresas e setores sujeitos ao controle devem dar ciência prévia e expressa aos seus clientes antes de enviar relatórios de suspeição ao COAF.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 11, § 1º veda expressamente dar conhecimento da comunicação ao cliente (sigilo estrito da comunicação)."
      },
      {
        letra: "D",
        texto: "O descumprimento culposo dos deveres de registro de operações financeiras é sancionado com pena de reclusão em regime fechado.",
        correta: false,
        explicacao_especifica: "Incorreto. O descumprimento gera sanções administrativas (advertência, multa, inabilitação - art. 12)."
      },
      {
        letra: "E",
        texto: "O COAF é órgão dotado de poder para expedir mandados de prisão preventiva e decretar interceptações telefônicas.",
        correta: false,
        explicacao_especifica: "Incorreto. O COAF é unidade de inteligência financeira administrativa sem funções judiciais ou executivas penais."
      }
    ]
  },

  // 060 - Lavagem de Dinheiro: Tipicidade da Autolavagem (Self-Laundering)
  {
    idSlug: "batch3-leg-060",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lavagem_dinheiro,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O ordenamento jurídico brasileiro admite a punição da autolavagem (self-laundering), hipótese em que o próprio autor da infração penal antecedente (como corrupção ou tráfico) pratica atos subsequentes e autônomos de ocultação e dissimulação para integrar os recursos ilícitos à economia formal com aparência de licitude, respondendo em concurso material de crimes.",
    explicacao: "GABARITO: CERTO. A doutrina e a jurisprudência pacífica do STF e do STJ admitem a figura da autolavagem de dinheiro. Desde que os atos de ocultação e dissimulação sejam autônomos e transcendam o mero exaurimento da infração antecedente, o autor do crime prévio responde em concurso material pelo delito antecedente e pelo crime de lavagem de dinheiro (art. 1º da Lei 9.613/1998).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF e STJ reconhecem a autolavagem quando há atos autônomos de ocultação/dissimulação além do mero proveito imediato."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A autolavagem é plenamente típica no direito penal brasileiro quando caracterizados atos independentes de branqueamento."
      }
    ]
  },

  // 061 - Lei Maria da Penha: Medidas Protetivas Patrimoniais (Arts. 23 e 24)
  {
    idSlug: "batch3-leg-061",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.maria_penha,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Para a proteção patrimonial dos bens da sociedade conjugal ou daqueles de propriedade particular da mulher em situação de violência doméstica, o juiz poderá determinar liminarmente as seguintes medidas protetivas de urgência (art. 24 da Lei nº 11.340/2006):",
    explicacao: "GABARITO: A. O art. 24, incisos I a IV, da Lei nº 11.340/2006 estabelece que o juiz poderá determinar, liminarmente: I - restituição de bens indevidamente subtraídos pelo agressor à ofendida; II - proibição temporária para a celebração de atos e contratos de compra, venda e locação de propriedade comum; III - suspensão das procurações conferidas pela ofendida ao agressor; IV - prestação de caução provisória por perdas e danos materiais decorrentes da violência.",
    alternativas: [
      {
        letra: "A",
        texto: "Restituição de bens indevidamente subtraídos pelo agressor à ofendida, proibição temporária de celebração de atos e contratos de compra e venda de bens comuns e suspensão de procurações conferidas ao agressor.",
        correta: true,
        explicacao_especifica: "Correto. Rol taxativo das medidas protetivas patrimoniais do art. 24 da Lei 11.340/2006."
      },
      {
        letra: "B",
        texto: "Confisco definitivo de todo o patrimônio comum do casal em favor do fundo de previdência estadual.",
        correta: false,
        explicacao_especifica: "Incorreto. As medidas patrimoniais têm natureza assecuratória/cautelar de proteção dos direitos da vítima."
      },
      {
        letra: "C",
        texto: "Adjudicação compulsória de 100% dos bens da família ao Delegado de Polícia condutor do inquérito.",
        correta: false,
        explicacao_especifica: "Incorreto. Medida absurda e desprovida de qualquer amparo jurídico."
      },
      {
        letra: "D",
        texto: "Proibição da ofendida em exercer atividade profissional remunerada sem autorização do juiz da vara de família.",
        correta: false,
        explicacao_especifica: "Incorreto. A proteção visa garantir a autonomia financeira da vítima."
      },
      {
        letra: "E",
        texto: "Conversão imediata de todas as dívidas pessoais do agressor em obrigação solidária da vítima.",
        correta: false,
        explicacao_especifica: "Incorreto. A lei protege o patrimônio da ofendida contra abusos do agressor."
      }
    ]
  },

  // 062 - Lei Maria da Penha: Competência Híbrida dos Juizados de Violência Doméstica (Art. 14)
  {
    idSlug: "batch3-leg-062",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.maria_penha,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Os Juizados de Violência Doméstica e Familiar contra a Mulher possuem competência cumulativa (híbrida), sendo competentes tanto para o processo e julgamento das causas criminais quanto para as ações cíveis decorrentes da prática de violência doméstica e familiar contra a mulher, incluída a fixação de alimentos provisionais e medidas de guarda.",
    explicacao: "GABARITO: CERTO. O art. 14, caput, da Lei nº 11.340/2006 estabelece a competência híbrida (cumulativa civil e criminal) dos Juizados de Violência Doméstica e Familiar contra a Mulher para conhecer e julgar as causas cíveis e criminais decorrentes da prática de violência doméstica, garantindo atendimento integral e célere à vítima.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 14 da Lei 11.340/2006 consagra expressamente a competência mista/híbrida (cível e criminal) dos Juizados Especializados."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. Os Juizados de Violência Doméstica acumulam competência criminal e cível decorrente do contexto protetivo."
      }
    ]
  },

  // 063 - Lei de Tortura: Tortura Praticada por Agente Público e Causa de Aumento (Art. 1º, § 4º)
  {
    idSlug: "batch3-leg-063",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.tortura_interceptacao,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 1º, § 4º, da Lei nº 9.455/1997 (Lei de Tortura), a pena do crime de tortura aumenta-se de um sexto até um terço se o crime for:",
    explicacao: "GABARITO: C. O art. 1º, § 4º da Lei 9.455/1997 prevê aumento de 1/6 a 1/3 se o crime for: I - cometido por agente público; II - cometido contra criança, gestante, pessoa com deficiência, adolescente ou maior de 60 anos; III - cometido mediante sequestro.",
    alternativas: [
      {
        letra: "A",
        texto: "Cometido por particular primário sem emprego de instrumentos perfurocortantes.",
        correta: false,
        explicacao_especifica: "Incorreto. Não é causa de aumento legal."
      },
      {
        letra: "B",
        texto: "Praticado no período noturno exclusivamente em zona urbana.",
        correta: false,
        explicacao_especifica: "Incorreto. O repouso noturno não é causa de aumento na Lei de Tortura."
      },
      {
        letra: "C",
        texto: "Cometido por agente público, cometido contra criança, gestante, portador de deficiência, adolescente ou pessoa maior de 60 anos, ou cometido mediante sequestro.",
        correta: true,
        explicacao_especifica: "Correto. Rol taxativo das causas de aumento de pena do art. 1º, § 4º, incisos I, II e III da Lei 9.455/1997."
      },
      {
        letra: "D",
        texto: "Cometido contra servidor da Justiça Eleitoral no exercício de fiscalização partidária.",
        correta: false,
        explicacao_especifica: "Incorreto. A majorante protege o agente público quando vítima em outras legislações, mas na tortura a majorante é quando o autor é agente público ou a vítima vulnerável."
      },
      {
        letra: "E",
        texto: "Praticado mediante concurso de mais de 10 pessoas em ambiente virtual.",
        correta: false,
        explicacao_especifica: "Incorreto. Não constitui causa de aumento na Lei 9.455/97."
      }
    ]
  },

  // 064 - Interceptação Telefônica: Vedação de Decretação de Ofício pelo Juiz na Fase Inquisitorial
  {
    idSlug: "batch3-leg-064",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.tortura_interceptacao,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "À luz da estrutura acusatória do processo penal (art. 3º-A do CPP) e da jurisprudência consolidada dos Tribunais Superiores, é vedado ao magistrado decretar a interceptação telefônica de ofício durante a fase de inquérito policial, sendo indispensável a prévia representação da autoridade policial ou requerimento fundamentado do Ministério Público.",
    explicacao: "GABARITO: CERTO. Embora o art. 3º, I da Lei 9.296/96 fizesse menção à decretação de ofício pelo juiz, o sistema acusatório delineado pela CF/88 e reforçado pelo art. 3º-A do CPP (introduzido pelo Pacote Anticrime e validado pelo STF nas ADIs 6298, 6299, 6300 e 6305) veda a atuação probatória oficiosa do magistrado na fase investigativa, tornando nula a interceptação instaurada de ofício sem provocação policial ou ministerial.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O sistema acusatório constitucional impede que o magistrado decrete medidas invasivas de ofício na fase de inquérito."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A jurisprudência consolidada do STJ e STF veda a instauração probatória de ofício pelo juiz no inquérito policial."
      }
    ]
  },

  // 065 - Crimes Hediondos: Armas de Uso Proibido e Genocídio
  {
    idSlug: "batch3-leg-065",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_hediondos,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No que se refere à disciplina dos crimes hediondos na Lei nº 8.072/1990 com as alterações do Pacote Anticrime (Lei nº 13.964/2019), assinale a afirmativa correta:",
    explicacao: "GABARITO: D. O art. 1º, parágrafo único, inciso I, da Lei nº 8.072/1990 elenca como hediondo o crime de posse ou porte ilegal de arma de fogo de uso proibido (previsto no art. 16 da Lei nº 10.826/2003). Além disso, o crime de genocídio (previsto nos arts. 1º, 2º e 3º da Lei nº 2.889/1956) é expressamente catalogado como crime hediondo no art. 1º, inciso VIII, da Lei 8.072/90.",
    alternativas: [
      {
        letra: "A",
        texto: "A posse irregular de arma de fogo de uso permitido no interior da residência é qualificada como crime hediondo inafiançável.",
        correta: false,
        explicacao_especifica: "Incorreto. O crime do art. 12 da Lei 10.826/03 não é hediondo."
      },
      {
        letra: "B",
        texto: "A posse ou porte de arma de fogo de uso restrito (calibre 9mm) permaneceu hedionda mesmo após o Pacote Anticrime.",
        correta: false,
        explicacao_especifica: "Incorreto. O Pacote Anticrime restringiu a hediondez às armas de uso PROIBIDO (art. 1º, parágrafo único, I da Lei 8.072/90)."
      },
      {
        letra: "C",
        texto: "O crime de genocídio é infração política e não integra o rol de crimes hediondos da legislação pátria.",
        correta: false,
        explicacao_especifica: "Incorreto. O genocídio é expressamente classificado como hediondo pelo art. 1º, VIII da Lei 8.072/90."
      },
      {
        letra: "D",
        texto: "O crime de posse ou porte ilegal de arma de fogo de uso proibido (art. 16 da Lei nº 10.826/2003) e o crime de genocídio (arts. 1º, 2º e 3º da Lei nº 2.889/1956) integram expressamente o rol de crimes hediondos.",
        correta: true,
        explicacao_especifica: "Correto. Disposições literais do art. 1º, VIII e parágrafo único, I da Lei 8.072/1990."
      },
      {
        letra: "E",
        texto: "O estelionato previdenciário é hediondo quando causar prejuízo superior a cem milhões de reais.",
        correta: false,
        explicacao_especifica: "Incorreto. Crimes patrimoniais sem violência como estelionato não integram a Lei 8.072/90."
      }
    ]
  },

  // 066 - Abuso de Autoridade: Vedação do Crime de Hermenêutica (Art. 1º, § 2º)
  {
    idSlug: "batch3-leg-066",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Estado de Alagoas (PC-AL)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "A divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade, vedando a legislação pátria a criminalização da hermenêutica jurídica aplicada por autoridades públicas no regular exercício de suas funções.",
    explicacao: "GABARITO: CERTO. O art. 1º, § 2º, da Lei nº 13.869/2019 dispõe expressamente: 'A divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade'. Trata-se da consagração legislativa do princípio da vedação ao chamado 'crime de hermenêutica', preservando a independência funcional de delegados, promotores e magistrados.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Redação literal e cogente do art. 1º, § 2º da Lei 13.869/2019."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A divergência hermenêutica ou valorativa de provas jamais constitui abuso de autoridade."
      }
    ]
  },

  // 067 - Lei de Drogas: Plantio para Consumo (Art. 28, § 1º) vs Tráfico por Equiparação (Art. 33, § 1º, II)
  {
    idSlug: "batch3-leg-067",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A conduta de semear, cultivar ou colher plantas destinadas à preparação de substância entorpecente é prevista tanto no art. 28, § 1º, quanto no art. 33, § 1º, inciso II, da Lei nº 11.343/2006. O critério dogmático determinante para diferenciar as duas figuras típicas reside:",
    explicacao: "GABARITO: B. A distinção reside no elemento subjetivo do tipo (destinação da droga): no art. 28, § 1º, o cultivo de plantas em pequena quantidade destina-se exclusivamente ao consumo pessoal do próprio agente; já no art. 33, § 1º, inciso II, o cultivo destina-se à difusão ilícita / comércio / fornecimento a terceiros (tráfico de drogas equiparado).",
    alternativas: [
      {
        letra: "A",
        texto: "Exclusivamente no local onde as plantas estão sendo cultivadas, se em área pública ou privada.",
        correta: false,
        explicacao_especifica: "Incorreto. O local do cultivo não é o elemento definidor da capitulação."
      },
      {
        letra: "B",
        texto: "Na destinação exclusiva ao consumo pessoal do cultivador (art. 28, § 1º) versus a destinação voltada à difusão ilícita ou comercialização a terceiros (art. 33, § 1º, II).",
        correta: true,
        explicacao_especifica: "Correto. O elemento subjetivo e a destinação para uso próprio vs difusão ilícita diferenciam os dois tipos penais."
      },
      {
        letra: "C",
        texto: "No método de irrigação utilizado, se automatizado ou manual.",
        correta: false,
        explicacao_especifica: "Incorreto. O método técnico de plantio é irrelevante para a capitulação jurídica."
      },
      {
        letra: "D",
        texto: "Na comprovação de que o cultivador possui diploma de ensino superior em agronomia.",
        correta: false,
        explicacao_especifica: "Incorreto. A formação acadêmica não interfere na distinção típica."
      },
      {
        letra: "E",
        texto: "Na existência prévia de autorização verbal concedida pelo conselho tutelar do município.",
        correta: false,
        explicacao_especifica: "Incorreto. Não existe tal autorização administrativa."
      }
    ]
  },

  // 068 - Estatuto do Desarmamento: Transporte de Arma Desmuniciada e Crime de Perigo Abstrato
  {
    idSlug: "batch3-leg-068",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.desarmamento,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O porte ilegal de arma de fogo de uso permitido (art. 14 da Lei nº 10.826/2003) configura crime de mera conduta e de perigo abstrato, consumando-se com o porte da arma sem autorização legal, ainda que o armamento esteja desmuniciado ou desmontado, sendo irrelevante a ausência de munições ao alcance imediato do agente para a tipicidade formal e material da conduta.",
    explicacao: "GABARITO: CERTO. A jurisprudência consolidada e pacífica do STF e do STJ (inclusive em súmula e recursos repetitivos) assenta que o porte de arma de fogo desmuniciada ou desmontada é típico, porquanto o bem jurídico tutelado pela Lei 10.826/2003 é a segurança pública e a paz social, consubstanciando crime de perigo abstrato de mera conduta.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF e o STJ consolidaram a plena tipicidade do porte de arma de fogo desmuniciada, por ser crime de perigo abstrato."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A ausência de munição não afasta a tipicidade formal e material do porte ilegal de arma de fogo."
      }
    ]
  },

  // 069 - Organizações Criminosas: Captação Ambiental e Escuta na Lei 12.850/2013
  {
    idSlug: "batch3-leg-069",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.org_criminosas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No âmbito dos meios de prova voltados à apuração de crimes praticados por organizações criminosas (Lei nº 12.850/2013 e Lei nº 9.296/1996), a captação ambiental de sinais eletromagnéticos, ópticos ou acústicos:",
    explicacao: "GABARITO: C. Conforme o art. 3º, inciso VI, da Lei nº 12.850/2013 e o art. 8º-A da Lei nº 9.296/1996, a captação ambiental depende de decisão judicial fundamentada que descreva a infração, os indícios de autoria e a demonstração de que a prova não pode ser obtida por outros meios menos invasivos.",
    alternativas: [
      {
        letra: "A",
        texto: "Pode ser instalada diretamente pela autoridade policial em qualquer ambiente privado, sem comunicação ao magistrado ou ao Ministério Público.",
        correta: false,
        explicacao_especifica: "Incorreto. A captação ambiental em espaço privado sem ordem judicial é ilícita e criminosa."
      },
      {
        letra: "B",
        texto: "É admitida exclusivamente se todos os investigados consentirem expressamente com a gravação de suas conversas.",
        correta: false,
        explicacao_especifica: "Incorreto. A captação ambiental investigativa judicializada independe de consentimento dos alvos investigados."
      },
      {
        letra: "C",
        texto: "Depende de prévia e motivada autorização judicial, mediante demonstração da indispensabilidade do meio de prova e da existência de indícios razoáveis de autoria e materialidade.",
        correta: true,
        explicacao_especifica: "Correto. Inteligência do art. 3º, VI da Lei 12.850/13 c/c art. 8º-A da Lei 9.296/96."
      },
      {
        letra: "D",
        texto: "Não pode ser utilizada em investigações que envolvam crimes punidos com pena de reclusão.",
        correta: false,
        explicacao_especifica: "Incorreto. A captação destina-se exatamente a crimes punidos com penas superiores a 4 anos ou conexos."
      },
      {
        letra: "E",
        texto: "Prescinde de relatório circunstanciado ao final de sua execução.",
        correta: false,
        explicacao_especifica: "Incorreto. É obrigatória a apresentação de relatório técnico circunstanciado."
      }
    ]
  },

  // 070 - Lavagem de Dinheiro: Efeitos da Condenação e Perdimento de Bens (Art. 7º)
  {
    idSlug: "batch3-leg-070",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lavagem_dinheiro,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "São efeitos da sentença penal condenatória transitada em julgado pelos crimes de lavagem de dinheiro (art. 7º da Lei nº 9.613/1998):",
    explicacao: "GABARITO: A. O art. 7º da Lei nº 9.613/1998 estabelece como efeitos da condenação: I - a perda, em favor da União - e dos Estados, nos casos de competência da Justiça Estadual -, de todos os bens, direitos e valores objeto de crime de lavagem ou de infração penal antecedente, ressalvado o direito do lesado ou de terceiro de boa-fé; II - a interdição para o exercício de cargo ou função pública de qualquer natureza e de diretor, membro de conselho de administração ou gerência das pessoas referidas no art. 9º, pelo dobro do tempo da pena privativa de liberdade aplicada.",
    alternativas: [
      {
        letra: "A",
        texto: "A perda, em favor da União (ou dos Estados, na Justiça Estadual), de todos os bens, direitos e valores objeto do crime, ressalvado o direito do lesado ou de terceiro de boa-fé, e a interdição funcional pelo dobro do tempo da pena de prisão aplicada.",
        correta: true,
        explicacao_especifica: "Correto. Redação literal do art. 7º, incisos I e II da Lei nº 9.613/1998."
      },
      {
        letra: "B",
        texto: "A anulação de todas as certidões de nascimento e casamento dos ascendentes e descendentes do condenado.",
        correta: false,
        explicacao_especifica: "Incorreto. A pena é pessoal e não passa da pessoa do condenado (art. 5º, XLV, CF/88)."
      },
      {
        letra: "C",
        texto: "A doação compulsória dos imóveis apreendidos a partidos políticos que integrem a base governamental.",
        correta: false,
        explicacao_especifica: "Incorreto. O perdimento é em favor da União ou Estados para fundos específicos de segurança pública."
      },
      {
        letra: "D",
        texto: "A cassação de todos os diplomas acadêmicos de graduação e pós-graduação obtidos pelo réu.",
        correta: false,
        explicacao_especifica: "Incorreto. Não constitui efeito penal da condenação."
      },
      {
        letra: "E",
        texto: "O perdimento de bens de terceiros de boa-fé mesmo comprovada a aquisição anterior aos fatos delitivos.",
        correta: false,
        explicacao_especifica: "Incorreto. A lei ressalva expressamente o direito do lesado ou de terceiro de boa-fé (art. 7º, I)."
      }
    ]
  }
];
