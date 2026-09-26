import { TAXONOMIA } from "./taxonomia.mjs";

export const administrativo01Questoes = [
  // Q1 - CEBRASPE / PRF - Poder de Polícia (Conceito e Fiscalização de Trânsito)
  {
    idSlug: "adm-001",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O poder de polícia administrativa confere à Polícia Rodoviária Federal a prerrogativa de condicionar e restringir o uso de bens, o exercício de direitos e a prática de atividades individuais em rodovias federais, em prol da segurança viária e da preservação da incolumidade coletiva.",
    explicacao: "GABARITO: CERTO. O poder de polícia administrativa é a faculdade que dispõe a Administração Pública para condicionar e restringir o uso e gozo de bens, atividades e direitos individuais, em benefício da coletividade ou do próprio Estado (art. 78 do CTN). Na atuação da PRF nas rodovias federais, manifesta-se tipicamente como fiscalização e ordenação do trânsito viário.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q2 - CEBRASPE / PRF - Atributo da Autoexecutoriedade na Fiscalização de Trânsito
  {
    idSlug: "adm-002",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A apreensão cautelar e o recolhimento ao depósito de veículo que transita em rodovia federal com graves defeitos nos sistemas de freios e iluminação constituem manifestação do atributo da autoexecutoriedade do poder de polícia, dispensando prévia autorização judicial para sua efetivação.",
    explicacao: "GABARITO: CERTO. A autoexecutoriedade autoriza a Administração Pública a executar materialmente suas próprias decisões e atos de polícia sem a necessidade de intervenção prévia do Poder Judiciário. A retenção ou remoção cautelar de veículo com risco iminente à segurança viária é hipótese típica de autoexecutoriedade amparada em lei e em urgência.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q3 - FGV / PM - Polícia Administrativa vs Polícia Judiciária
  {
    idSlug: "adm-003",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito da clássica distinção doutrinária entre polícia administrativa e polícia judiciária no direito público brasileiro, assinale a afirmativa correta.",
    explicacao: "GABARITO: C. A polícia administrativa tem caráter predominantemente preventivo, recai sobre bens, direitos e atividades e é exercida por diversos órgãos administrativos (como a PM e a PRF no patrulhamento ostensivo). Já a polícia judiciária tem caráter predominantemente repressivo, atua após a ocorrência de infrações penais, incide sobre as pessoas e é exercida por corporações especializadas (Polícia Civil e Polícia Federal), preparando a persecução penal.",
    alternativas: [
      { letra: "A", texto: "A polícia administrativa atua de forma eminentemente repressiva sobre pessoas suspeitas de ilícitos penais, sendo regida pelo Código de Processo Penal.", correta: false },
      { letra: "B", texto: "A polícia judiciária incide precipuamente sobre bens e atividades econômicas e é exercida por órgãos com competência ostensiva geral.", correta: false },
      { letra: "C", texto: "A polícia administrativa tem natureza predominantemente preventiva e incide sobre bens, direitos e atividades, enquanto a polícia judiciária é predominantemente repressiva, incidindo sobre as pessoas investigadas pela prática de infrações penais.", correta: true },
      { letra: "D", texto: "Ambas possuem idêntico regime jurídico de direito penal processual e não admitem a aplicação do regime de responsabilidade civil do Estado.", correta: false },
      { letra: "E", texto: "A polícia judiciária possui autoexecutoriedade plena para impor condenações penais definitivas no âmbito do inquérito policial.", correta: false }
    ]
  },

  // Q4 - CEBRASPE / GM - Ciclo de Polícia Aplicado à Guarda Municipal
  {
    idSlug: "adm-004",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O ciclo de polícia desdobra-se em quatro fases sucessivas: ordem de polícia (legislação), consentimento de polícia (anuência prévia), fiscalização de polícia (verificação de conformidade) e sanção de polícia (imposição de penalidade). No exercício de fiscalização de trânsito pela Guarda Municipal, as fases de fiscalização e sanção são plenamente delegáveis aos seus agentes.",
    explicacao: "GABARITO: CERTO. A doutrina majoritária divide o ciclo do poder de polícia em: ordem (norma), consentimento (licença/autorização), fiscalização (vistoria/patrulhamento) e sanção (multa/apreensão). No âmbito municipal, os atos de fiscalização e sanção decorrem das atribuições legais conferidas aos integrantes das Guardas Municipais devidamente credenciados.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q5 - VUNESP / PC - Delegação do Poder de Polícia (Tema 532 STF)
  {
    idSlug: "adm-005",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "De acordo com o entendimento fixado pelo Supremo Tribunal Federal no julgamento do Recurso Extraordinário nº 633.782/MG (Tema 532 da Repercussão Geral), é constitucional a delegação do poder de polícia a pessoas jurídicas de direito privado integrantes da Administração Indireta:",
    explicacao: "GABARITO: B. No Tema 532 do STF (caso BHTrans), fixou-se a seguinte tese: 'É constitucional a delegação do poder de polícia, por meio de lei, a pessoas jurídicas de direito privado integrantes da Administração Pública indireta de capital social majoritariamente público que prestem exclusivamente serviço público de atuação própria do Estado e em regime não concorrencial'.",
    alternativas: [
      { letra: "A", texto: "mesmo que explorem atividade econômica em livre concorrência de mercado e tenham capital social majoritariamente privado.", correta: false },
      { letra: "B", texto: "desde que possuam capital social majoritariamente público, prestem exclusivamente serviço público de atuação própria do Estado e atuem em regime não concorrencial.", correta: true },
      { letra: "C", texto: "apenas para a prática de atos normativos e expedição de ordens de polícia, vedada a aplicação de penalidades pecuniárias.", correta: false },
      { letra: "D", texto: "exclusivamente quando se tratar de sociedades anônimas de economia mista cotadas em bolsa de valores voltadas ao lucro concorrencial.", correta: false },
      { letra: "E", texto: "somente em casos de estado de sítio ou estado de defesa formalmente decretados pela União.", correta: false }
    ]
  },

  // Q6 - CEBRASPE / CBM - Autoexecutoriedade do Corpo de Bombeiros em Risco Iminente
  {
    idSlug: "adm-006",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A interdição imediata de um estabelecimento comercial que apresente risco grave e iminente de colapso estrutural ou incêndio, determinada por oficiais do Corpo de Bombeiros Militar durante vistoria de fiscalização, prescinde de prévia autorização judicial, constituindo hipótese legítima de autoexecutoriedade do poder de polícia.",
    explicacao: "GABARITO: CERTO. A autoexecutoriedade autoriza a prática direta do ato material restritivo pela Administração quando houver expressa previsão em lei ou quando se configurar situação emergencial de risco à vida e à integridade pública, como na interdição de imóvel com perigo de incêndio iminente.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q7 - FGV / PRF - Limites da Autoexecutoriedade (Execução de Multa)
  {
    idSlug: "adm-007",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um Policial Rodoviário Federal aplicou penalidade de multa a condutor que transitava com excesso de velocidade. Decorrido o prazo administrativo sem impugnação ou pagamento voluntário, a autoridade de trânsito pretende efetivar a cobrança do débito. À luz dos atributos do poder de polícia, é correto afirmar que:",
    explicacao: "GABARITO: D. A imposição da penalidade de multa goza de exigibilidade (o administrado tem o dever de pagar), mas NÃO goza de autoexecutoriedade na fase de cobrança forçada. Se o administrado não pagar voluntariamente, a Administração não pode penhorar bens ou reter valores diretamente; deve inscrever em dívida ativa e ajuizar execução fiscal perante o Poder Judiciário (Lei nº 6.830/80).",
    alternativas: [
      { letra: "A", texto: "a PRF pode penhorar diretamente contas bancárias do infrator com base na autoexecutoriedade do ato de imposição de penalidade.", correta: false },
      { letra: "B", texto: "a autoexecutoriedade permite à autoridade de trânsito apreender bens particulares do devedor em hasta pública administrativa sem intervenção judicial.", correta: false },
      { letra: "C", texto: "a multa de trânsito não possui exigibilidade nem presunção de legitimidade até que seja confirmada por sentença judicial transitada em julgado.", correta: false },
      { letra: "D", texto: "a cobrança forçada da multa pecuniária não ostenta autoexecutoriedade, exigindo a inscrição do débito em dívida ativa e o ajuizamento de execução fiscal perante o Poder Judiciário.", correta: true },
      { letra: "E", texto: "o não pagamento da multa autoriza a retenção do passaporte do condutor de forma sumária e discricionária pela autoridade policial.", correta: false }
    ]
  },

  // Q8 - CEBRASPE / PM - Coercibilidade e Uso Progressivo da Força
  {
    idSlug: "adm-008",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O atributo da coercibilidade faculta aos agentes da Polícia Militar o emprego proporcional, necessário e progressivo da força pública para conter distúrbios civis e impor o cumprimento forçado das determinações legais emanadas da autoridade de segurança pública.",
    explicacao: "GABARITO: CERTO. A coercibilidade é o atributo do poder de polícia que torna o ato obrigatório para o administrado, autorizando o uso moderado e proporcional da força pública para vencer resistências ilegais e assegurar a prevalência da ordem pública.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q9 - IBFC / GM - Poder de Polícia de Trânsito das Guardas Municipais (STF RE 658.570)
  {
    idSlug: "adm-009",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O Supremo Tribunal Federal, ao julgar o RE 658.570/MG com repercussão geral reconhecida (Tema 534), fixou tese acerca da competência das Guardas Municipais para a fiscalização de trânsito. Assinale a opção que reflete corretamente o entendimento da Corte Constitucional.",
    explicacao: "GABARITO: A. No Tema 534 (RE 658.570), o STF assentou que é constitucional o exercício do poder de polícia de trânsito pelas guardas municipais, inclusive para imposição de sanções administrativas (multas), por se tratar de atividade de segurança viária inserida na competência comum dos entes federativos.",
    alternativas: [
      { letra: "A", texto: "É constitucional a atribuição às guardas municipais do exercício do poder de polícia de trânsito, inclusive para a aplicação de sanções administrativas legalmente previstas no Código de Trânsito Brasileiro.", correta: true },
      { letra: "B", texto: "As guardas municipais podem exercer apenas fiscalização orientativa e educativa de trânsito, sendo vedada em qualquer hipótese a lavratura de autos de infração com penalidade de multa.", correta: false },
      { letra: "C", texto: "A competência de trânsito das guardas municipais restringe-se exclusivamente aos crimes de trânsito em flagrante, sendo as infrações administrativas privativas da Polícia Militar.", correta: false },
      { letra: "D", texto: "O poder de polícia de trânsito é privativo da União e dos Estados, sendo inconstitucional qualquer lei municipal que delegue autuação a guardas municipais.", correta: false }
    ]
  },

  // Q10 - CEBRASPE / PRF - Elementos do Ato Administrativo (AIT)
  {
    idSlug: "adm-010",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na lavratura do Auto de Infração de Trânsito (AIT) por Policial Rodoviário Federal, a competência, a finalidade e a forma constituem elementos sempre vinculados do ato administrativo, cuja ausência ou vício insanável enseja a sua nulidade de pleno direito.",
    explicacao: "GABARITO: CERTO. De acordo com a doutrina tradicional de Hely Lopes Meirelles, os cinco elementos/requisitos do ato administrativo são: competência, finalidade, forma, motivo e objeto. Desses, a competência, a finalidade e a forma são invariavelmente vinculados, não admitindo margem de discricionariedade ao agente público.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q11 - FGV / PC - Teoria dos Motivos Determinantes
  {
    idSlug: "adm-011",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O Delegado-Geral de Polícia Civil removeu de ofício um escrivão de polícia para delegacia em município distante, consignando expressamente na portaria de remoção que o ato decorria de grave déficit de servidores naquela comarca remota. Posteriormente, em mandado de segurança, comprovou-se de forma inequívoca que a unidade de destino estava com quadro completo de servidores e que a remoção fora motivada por animosidade pessoal. Com base na Teoria dos Motivos Determinantes, o ato de remoção é:",
    explicacao: "GABARITO: B. Pela Teoria dos Motivos Determinantes, a validade do ato administrativo vincula-se aos motivos externados pela autoridade como justificativa para sua prática. Se o motivo declarado for falso, inexistente ou juridicamente inadequado, o ato é nulo, ainda que se tratasse originalmente de ato discricionário que prescindisse de motivação.",
    alternativas: [
      { letra: "A", texto: "plenamente válido, pois a remoção ex officio é ato discricionário insuscetível de controle de legalidade pelo Poder Judiciário.", correta: false },
      { letra: "B", texto: "nulo, pois a validade do ato administrativo fica vinculada à veracidade e à subsistência dos motivos formalmente externados pela autoridade administrativa.", correta: true },
      { letra: "C", texto: "convalidável retroativamente pelo Secretário de Segurança Pública, mediante alteração superveniente da justificativa exposta.", correta: false },
      { letra: "D", texto: "inexistente apenas no plano material, subsistindo a lotação do servidor no novo posto por conveniência administrativa tácita.", correta: false },
      { letra: "E", texto: "revogável com eficácia ex tunc, gerando efeitos jurídicos válidos até a data da impetração do remédio constitucional.", correta: false }
    ]
  },

  // Q12 - CEBRASPE / PM - Presunção de Legitimidade e Veracidade
  {
    idSlug: "adm-012",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Os relatórios operacionais e autos de prisão lavrados por policiais militares no exercício de suas funções gozam do atributo da presunção de legitimidade e veracidade, a qual ostenta natureza juris tantum, cabendo ao particular o ônus de comprovar eventual falsidade ou ilegalidade do ato.",
    explicacao: "GABARITO: CERTO. A presunção de legitimidade (conformidade com a lei) e veracidade (conformidade dos fatos narrados) é atributo de todos os atos administrativos. Trata-se de presunção relativa (juris tantum), que inverte o ônus da prova, competindo ao administrado demonstrar eventual inveracidade ou vício de legalidade.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q13 - VUNESP / CBM - Atributo da Imperatividade
  {
    idSlug: "adm-013",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante vistoria técnica de prevenção contra incêndio e pânico, os bombeiros militares expediram notificação formal determinando a instalação imediata de extintores e saídas de emergência em casa de espetáculos, fixando prazo sob pena de interdição. O atributo do ato administrativo que permite a imposição unilateral dessa obrigação ao proprietário do imóvel, independentemente de sua prévia concordância, denomina-se:",
    explicacao: "GABARITO: C. A imperatividade (ou coercibilidade) é o atributo pelo qual os atos administrativos se impõem a terceiros independentemente de sua concordância, criando unilateralmente deveres, restrições ou obrigações jurídicas com base na supremacia do interesse público sobre o privado.",
    alternativas: [
      { letra: "A", texto: "Tipicidade estrita.", correta: false },
      { letra: "B", texto: "Presunção absoluta de veracidade.", correta: false },
      { letra: "C", texto: "Imperatividade.", correta: true },
      { letra: "D", texto: "Discricionariedade plena.", correta: false },
      { letra: "E", texto: "Convalidação tácita.", correta: false }
    ]
  },

  // Q14 - CEBRASPE / GM - Atributo da Tipicidade (Doutrina Maria Sylvia Di Pietro)
  {
    idSlug: "adm-014",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Segundo a doutrina administrativista contemporânea, a tipicidade é o atributo pelo qual o ato administrativo deve corresponder a figuras previamente definidas em lei como aptas a produzir determinado resultado, funcionando como garantia do cidadão contra imposições atípicas ou arbitrárias por agentes de segurança pública.",
    explicacao: "GABARITO: CERTO. Formulada por Maria Sylvia Zanella Di Pietro, a tipicidade é o atributo que impõe que o ato administrativo encontre prévia previsão legal em modelo típico, impedindo a Administração de instituir atos inominados unilaterais não autorizados pela ordem jurídica.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q15 - FGV / PRF - Ato Vinculado vs Discricionário na Habilitação de Trânsito
  {
    idSlug: "adm-015",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Cidadão aprovado em todas as etapas do processo de habilitação para conduzir veículos automotores (exames médico, psicológico, teórico e prático) requereu a expedição de sua Carteira Nacional de Habilitação (CNH). A autoridade de trânsito negou o pedido alegando que, por juízo de conveniência e oportunidade, o quantitativo de novos condutores na região já era excessivo. A decisão da autoridade é:",
    explicacao: "GABARITO: E. A concessão de licença para dirigir (habilitação) é ato administrativo unilateral e vinculado. Preenchidos todos os requisitos objetivos fixados na legislação de trânsito, o particular tem direito subjetivo à obtenção do documento, inexistindo margem de discricionariedade ou valoração de conveniência e oportunidade pela autoridade pública.",
    alternativas: [
      { letra: "A", texto: "legítima, haja vista que a expedição da CNH é ato discricionário fundado no mérito administrativo da segurança viária regional.", correta: false },
      { letra: "B", texto: "válida, pois o poder de polícia de trânsito autoriza a limitação quantitativa discricionária do número de motoristas habilitados.", correta: false },
      { letra: "C", texto: "regular, desde que fundamentada em parecer técnico emitido por junta médica e de engenharia de tráfego.", correta: false },
      { letra: "D", texto: "anulável apenas se o cidadão comprovar prejuízo patrimonial direto decorrente da recusa administrativa.", correta: false },
      { letra: "E", texto: "ilegal, pois a licença é ato administrativo vinculado que confere direito subjetivo ao administrado que cumpre todos os requisitos legais exigidos.", correta: true }
    ]
  },

  // Q16 - CEBRASPE / PC - Desvio de Finalidade (Vício Insanável)
  {
    idSlug: "adm-016",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O desvio de finalidade (ou desvio de poder) ocorre quando o agente público pratica ato administrativo com competência legal, mas visando a fim diverso daquele previsto explícita ou implicitamente na lei ou voltado à satisfação de interesse puramente privado, constituindo vício insanável do ato.",
    explicacao: "GABARITO: CERTO. O vício de desvio de finalidade atinge o elemento finalidade (art. 2º, parágrafo único, 'e', da Lei nº 4.717/1965). É vício de legalidade insuscetível de convalidação, ensejando a nulidade absoluta do ato administrativo.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q17 - IBFC / PM - Convalidação de Atos Administrativos (Lei 9.784/99)
  {
    idSlug: "adm-017",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 55 da Lei nº 9.784/1999 (Processo Administrativo Federal) e da doutrina dominante, a Administração Pública pode convalidar atos administrativos que apresentem defeitos sanáveis quando:",
    explicacao: "GABARITO: A. Art. 55 da Lei nº 9.784/1999: 'Em decisão na qual se evidencie não acarretarem lesão ao interesse público nem prejuízo a terceiros, os atos que apresentarem defeitos sanáveis poderão ser convalidados pela própria Administração'. São sanáveis os vícios de competência (em razão da pessoa, desde que não exclusiva) e de forma (não essencial).",
    alternativas: [
      { letra: "A", texto: "não acarretarem lesão ao interesse público nem prejuízo a terceiros, recaindo o vício sobre competência em razão da pessoa (não exclusiva) ou sobre a forma não essencial.", correta: true },
      { letra: "B", texto: "o vício recair exclusivamente sobre o motivo ou a finalidade pública primária do ato administrativo.", correta: false },
      { letra: "C", texto: "houver impugnação tempestiva por terceiros interessados pleiteando a anulação do ato em juízo.", correta: false },
      { letra: "D", texto: "o ato for praticado com manifesto excesso de poder ou usurpação de função pública privativa.", correta: false }
    ]
  },

  // Q18 - CEBRASPE / PRF - Anulação vs Revogação (Súmulas 346 e 473 STF)
  {
    idSlug: "adm-018",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A anulação de um ato administrativo de polícia de trânsito eivado de vício de ilegalidade opera efeitos retroativos (ex tunc), ao passo que a revogação de um ato discricionário por razões de oportunidade e conveniência produz efeitos prospectivos (ex nunc), resguardados os direitos adquiridos.",
    explicacao: "GABARITO: CERTO. Conforme as Súmulas 346 e 473 do STF e o art. 53 da Lei nº 9.784/99, a Administração deve anular seus próprios atos quando eivados de vício de legalidade (efeitos ex tunc) e pode revogá-los por motivo de conveniência ou oportunidade (efeitos ex nunc), respeitados os direitos adquiridos.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q19 - VUNESP / GM - Exigibilidade vs Executoriedade Material
  {
    idSlug: "adm-019",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A doutrina moderna desdobra a autoexecutoriedade do poder de polícia em dois aspectos complementares: exigibilidade e executoriedade. Assinale a alternativa que exemplifica corretamente a incidência da executoriedade material direta em ação de agentes de segurança municipal.",
    explicacao: "GABARITO: D. A exigibilidade opera por meios indiretos de coerção psicológica ou legal (como a aplicação de multa para compelir o particular a cumprir a norma). Já a executoriedade material direta envolve o uso direto da força física ou intervenção material pelo próprio agente público para fazer valer a ordem (como a apreensão de mercadorias pirateadas ou remoção de barricadas ilegais).",
    alternativas: [
      { letra: "A", texto: "A fixação de multa moratória diária pelo descumprimento de horário de funcionamento de feira livre.", correta: false },
      { letra: "B", texto: "A expedição de notificação escrita concedendo prazo de dez dias para regularização de alvará sanitário.", correta: false },
      { letra: "C", texto: "A inscrição em dívida ativa de débito decorrente de penalidade de trânsito não quitada.", correta: false },
      { letra: "D", texto: "A apreensão e recolhimento imediato de mercadorias ilícitas comercializadas em área pública proibida sem autorização.", correta: true },
      { letra: "E", texto: "O ajuizamento de ação de desapropriação indireta perante a Vara de Fazenda Pública.", correta: false }
    ]
  },

  // Q20 - CEBRASPE / CBM - Controle Judicial do Mérito Administrativo
  {
    idSlug: "adm-020",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em matéria de atos discricionários expedidos por órgãos de segurança pública e defesa civil, o Poder Judiciário não pode substituir a valoração de conveniência e oportunidade do administrador, mas detém competência para examinar a legalidade, a veracidade dos motivos e a razoabilidade e proporcionalidade da medida adotada.",
    explicacao: "GABARITO: CERTO. O controle judicial sobre atos discricionários não abrange o mérito administrativo propriamente dito (conveniência e oportunidade legítimas), mas alcança a legalidade estrita, os limites da discricionariedade, a higidez dos motivos determinantes e o respeito aos princípios constitucionais da proporcionalidade e razoabilidade.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q21 - FGV / PM - Poder Disciplinar vs Poder de Polícia
  {
    idSlug: "adm-021",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_administrativos,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um Comandante de Batalhão da Polícia Militar instaurou procedimento para apurar infração ética cometida por soldado durante o expediente. No mesmo dia, em operação externa, uma guarnição interditou bar por perturbação do sossego e venda ilegal de bebidas adulteradas. As duas atuações estatais decorrem, respectivamente, dos poderes:",
    explicacao: "GABARITO: A. A punição de servidor público militar por falta funcional interna decorre do poder disciplinar (vínculo especial de sujeição). A interdição do estabelecimento comercial em face de particular da coletividade decorre do poder de polícia administrativa (vínculo de sujeição geral).",
    alternativas: [
      { letra: "A", texto: "disciplinar e de polícia administrativa.", correta: true },
      { letra: "B", texto: "hierárquico e regulamentar autônomo.", correta: false },
      { letra: "C", texto: "de polícia judiciária e disciplinar.", correta: false },
      { letra: "D", texto: "regulatório e normativo especial.", correta: false },
      { letra: "E", texto: "hierárquico e de polícia judiciária.", correta: false }
    ]
  },

  // Q22 - CEBRASPE / PRF - Retenção Cautelar e Devido Processo Legal Diferido
  {
    idSlug: "adm-022",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A retenção preventiva e imediata de veículo em fiscalização rodoviária pela PRF não viola as garantias constitucionais do contraditório e da ampla defesa, haja vista a legitimidade do exercício do contraditório diferido (postergado) no âmbito do processo administrativo sancionador.",
    explicacao: "GABARITO: CERTO. Em razão da autoexecutoriedade e da urgência inerente à segurança viária e à ordem pública, admite-se a prática da medida cautelar imediata de retenção, exercendo-se o contraditório e a ampla defesa de forma diferida (após a prática do ato acautelatório).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q23 - IBFC / PC - Motivo vs Motivação do Ato Administrativo
  {
    idSlug: "adm-023",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Na teoria geral dos atos administrativos, é fundamental diferenciar o elemento 'motivo' da 'motivação'. Assinale a alternativa que expressa com precisão essa distinção.",
    explicacao: "GABARITO: C. O motivo é a situação de fato e de direito que serve de pressuposto ou fundamento para a prática do ato administrativo. A motivação é a exteriorização formal e por escrito das razões de fato e de direito que justificaram a edição do ato, integrando o elemento forma.",
    alternativas: [
      { letra: "A", texto: "Motivo e motivação são sinônimos perfeitos, designando ambos o objetivo de interesse público final almejado pelo ato.", correta: false },
      { letra: "B", texto: "O motivo é a exteriorização gráfica do ato, enquanto a motivação corresponde à competência da autoridade signatária.", correta: false },
      { letra: "C", texto: "O motivo é a situação fática e jurídica que autoriza ou determina a prática do ato, enquanto a motivação é a declaração escrita dessas razões de fato e de direito.", correta: true },
      { letra: "D", texto: "A motivação é elemento vinculado obrigatório, enquanto o motivo é sempre discricionário em qualquer ato de polícia.", correta: false }
    ]
  },

  // Q24 - CEBRASPE / GM - Poder de Polícia Originário vs Delegado
  {
    idSlug: "adm-024",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O poder de polícia originário é aquele exercido diretamente pela Administração Direta dos entes federativos (União, Estados, DF e Municípios), ao passo que o poder de polícia delegado é aquele outorgado a entidades da Administração Indireta por meio de lei específica.",
    explicacao: "GABARITO: CERTO. Poder de polícia originário (ou primário) é o exercido pelos órgãos da Administração Direta dos entes políticos constitucionais. O poder de polícia derivado ou delegado é o repassado por lei a pessoas jurídicas da Administração Indireta (como autarquias, fundações ou estatais prestadoras de serviço em regime não concorrencial).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q25 - FGV / PRF - Espécies de Atos Administrativos (Punitivo vs Ordinatório)
  {
    idSlug: "adm-025",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere dois atos praticados no âmbito da PRF: (1) a expedição de Ordem de Serviço interna pelo Superintendente Regional disciplinando a escala de plantão dos policiais nas rodovias; e (2) a lavratura de Auto de Apreensão de mercadoria contrabandeada em fiscalização operacional. Sob o ponto de vista da classificação dos atos administrativos por suas espécies, tais atos classificam-se, respectivamente, como:",
    explicacao: "GABARITO: B. A Ordem de Serviço interna que organiza rotinas funcionais decorre do poder hierárquico e classifica-se como ato ordinatório. O Auto de Apreensão decorre do poder de polícia sancionatório/coercitivo e classifica-se como ato punitivo (ou sancionatório).",
    alternativas: [
      { letra: "A", texto: "ato negocial e ato enunciativo.", correta: false },
      { letra: "B", texto: "ato ordinatório e ato punitivo.", correta: true },
      { letra: "C", texto: "ato normativo autônomo e ato negocial vinculado.", correta: false },
      { letra: "D", texto: "ato enunciativo declaratório e ato ordinatório discricionário.", correta: false },
      { letra: "E", texto: "ato constitutivo e ato desconstitutivo puro.", correta: false }
    ]
  },

  // Q26 - CEBRASPE / PM - Abuso de Poder (Excesso de Poder vs Desvio de Finalidade)
  {
    idSlug: "adm-026",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_administrativos,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O abuso de poder é gênero que abrange duas espécies: o excesso de poder, que se caracteriza quando o agente público atua além dos limites de sua competência legal; e o desvio de finalidade, configurado quando o agente, mesmo atuando dentro de sua competência, busca objetivo alheio ao interesse público ou à finalidade legal do ato.",
    explicacao: "GABARITO: CERTO. A doutrina assenta que o abuso de poder se desdobra em: (1) excesso de poder (vício no elemento competência - atua fora ou além de suas atribuições); e (2) desvio de poder ou de finalidade (vício no elemento finalidade - atua com competência, mas com desvio do fim público visado pela lei).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q27 - VUNESP / PC - Extinção dos Atos Administrativos (Cassação)
  {
    idSlug: "adm-027",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Uma sociedade empresária obteve alvará de funcionamento para operar como casa de eventos noturnos, preenchendo todos os requisitos legais na época da concessão. Posteriormente, apurou-se em fiscalização que o local passou a funcionar habitualmente como depósito clandestino de desmanche de veículos furtados. A extinção do alvará em decorrência do descumprimento superveniente das condições legais pelo particular denomina-se:",
    explicacao: "GABARITO: C. A cassação é a forma de extinção do ato administrativo que ocorre quando o particular beneficiário descumpre supervenientemente as condições e requisitos legais obrigatórios para a manutenção do ato concessivo ou autorizativo.",
    alternativas: [
      { letra: "A", texto: "Caducidade.", correta: false },
      { letra: "B", texto: "Revogação por conveniência.", correta: false },
      { letra: "C", texto: "Cassação.", correta: true },
      { letra: "D", texto: "Contraposição ou derrubada.", correta: false },
      { letra: "E", texto: "Anulação ex tunc.", correta: false }
    ]
  },

  // Q28 - CEBRASPE / CBM - Taxa de Polícia e Súmula Vinculante 19
  {
    idSlug: "adm-028",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Bombeiro Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A cobrança de taxa de fiscalização decorrente do poder de polícia do Corpo de Bombeiros Militar para análise e vistoria de projetos de segurança contra incêndio é constitucional, prescindindo da comprovação de fiscalização presencial contínua em cada contribuinte desde que demonstrada a existência de órgão administrativo fiscalizador estruturado e em efetivo funcionamento.",
    explicacao: "GABARITO: CERTO. Conforme jurisprudência pacífica do STF e enunciado da Súmula Vinculante nº 19 (e Tema 217 STF), considera-se regular o exercício do poder de polícia quando a Administração Pública mantém órgão competente e efetivamente estruturado e atuante para a fiscalização, legitimando a exigência da taxa.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q29 - FGV / PRF - Princípio da Proporcionalidade e Vedação ao Excesso
  {
    idSlug: "adm-029",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em operação de fiscalização de trânsito em rodovia federal, Policiais Rodoviários Federais constataram que um caminhoneiro transportava carga com excesso de peso de apenas 2% acima do limite de tolerância regulamentar. Em vez de aplicar a notificação e transbordo previstos em lei, os agentes determinaram sumariamente a incineração imediata de toda a carga de alimentos lícitos. A medida adotada pelos agentes viola frontalmente o princípio da:",
    explicacao: "GABARITO: D. O princípio da proporcionalidade (que veda o excesso) exige que as medidas restritivas de poder de polícia sejam adequadas ao fim pretendido, necessárias (escolhendo o meio menos gravoso entre os eficazes) e proporcionais em sentido estrito. A incineração de carga lícita por mero excesso de peso é medida patentemente desproporcional e arbitrária.",
    alternativas: [
      { letra: "A", texto: "publicidade restrita aos atos de trânsito.", correta: false },
      { letra: "B", texto: "eficiência na arrecadação tributária rodoviária.", correta: false },
      { letra: "C", texto: "continuidade dos serviços públicos tarifados.", correta: false },
      { letra: "D", texto: "proporcionalidade e razoabilidade, incorrendo em manifesto excesso de poder.", correta: true },
      { letra: "E", texto: "supremacia absoluta do agente fiscalizador sobre a legalidade estrita.", correta: false }
    ]
  },

  // Q30 - CEBRASPE / GM - Atos Complexos vs Atos Compostos
  {
    idSlug: "adm-030",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_administrativos,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Diferencia-se o ato administrativo complexo do ato composto pelo fato de que, no ato complexo, há a fusão da manifestação de vontade de dois ou mais órgãos diferentes para a formação de um ato único; no ato composto, há um ato principal emitido por um órgão cuja exequibilidade depende da aprovação, visto ou homologação de outro órgão.",
    explicacao: "GABARITO: CERTO. No ato complexo (ex.: investidura de Ministro do STF com indicação do Executivo e aprovação do Senado), fundem-se vontades de órgãos diversos para formar um único ato. No ato composto (ex.: parecer que depende de homologação de autoridade superior), há um ato principal praticado por um órgão e outro ato acessório que o ratifica ou aprova.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  }
];
