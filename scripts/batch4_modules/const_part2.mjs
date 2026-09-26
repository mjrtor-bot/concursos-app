import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.direito_constitucional;
const aSegPublica = TAXONOMIA.assuntos.seguranca_publica_const;

export const constPart2 = [
  // 21
  {
    idSlug: "const-l4-21",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Polícia Federal, instituída por lei como órgão permanente, organizado e mantido pela União e estruturado em carreira, destina-se a apurar infrações penais contra a ordem política e social ou em detrimento de bens, serviços e interesses da União ou de suas entidades autárquicas e empresas públicas, assim como outras infrações cuja prática tenha repercussão interestadual ou internacional e exija repressão uniforme.",
    explicacao: "GABARITO: CERTO. Trata-se da exata redação do art. 144, § 1º, I, da Constituição Federal de 1988, que estabelece a competência da Polícia Federal para a apuração de infrações contra bens, serviços e interesses da União, autarquias e empresas públicas federais (excluídas as sociedades de economia mista, salvo repercussão interestadual/internacional).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 22
  {
    idSlug: "const-l4-22",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No tocante à Polícia Rodoviária Federal (art. 144, § 2º, da CF/88), a Constituição Federal atribui expressamente a esse órgão permanente a função de:",
    explicacao: "GABARITO: Letra A. O art. 144, § 2º, da CF/88 prescreve: 'A polícia rodoviária federal, órgão permanente, organizado e mantido pela União e estruturado em carreira, destina-se, na forma da lei, ao patrulhamento ostensivo das rodovias federais'.",
    alternativas: [
      { letra: "A", texto: "Patrulhamento ostensivo das rodovias federais.", correta: true },
      { letra: "B", texto: "Polícia marítima e aeroportuária em caráter exclusivo.", correta: false },
      { letra: "C", texto: "Fiscalização tributária exclusiva das fronteiras secas.", correta: false },
      { letra: "D", texto: "Instauração de inquéritos civis públicos por dano ambiental.", correta: false },
      { letra: "E", texto: "Execução penal militar no âmbito das Forças Armadas.", correta: false }
    ]
  },
  // 23
  {
    idSlug: "const-l4-23",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares.",
    explicacao: "GABARITO: CERTO. Trata-se da redação literal do art. 144, § 4º, da Constituição Federal de 1988, que consagra a direção das Polícias Civis por Delegados de Polícia de carreira e a atribuição de polícia judiciária estadual comum.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 24
  {
    idSlug: "const-l4-24",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Com a promulgação da Emenda Constitucional nº 104/2019, foram instituídas no art. 144, § 5º-A, da Constituição Federal as:",
    explicacao: "GABARITO: Letra C. A EC nº 104/2019 criou as Polícias Penais (federal, estaduais e distrital), vinculadas ao órgão administrador do sistema penal da respectiva unidade federativa, incumbidas da segurança dos estabelecimentos penais.",
    alternativas: [
      { letra: "A", texto: "Polícias Ferroviárias Estaduais autônomas.", correta: false },
      { letra: "B", texto: "Guardas Florestais Municipais com competência armada.", correta: false },
      { letra: "C", texto: "Polícias Penais, vinculadas ao órgão administrador do sistema penal da unidade federativa, responsáveis pela segurança dos estabelecimentos penais.", correta: true },
      { letra: "D", texto: "Agências Metropolitanas de Repressão ao Narcotráfico.", correta: false },
      { letra: "E", texto: "Forças Nacionais de Pacificação Permanente.", correta: false }
    ]
  },
  // 25
  {
    idSlug: "const-l4-25",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal, no julgamento da ADPF 995, assentou que as Guardas Municipais integram o Sistema de Segurança Pública (SUSP), reconhecendo a legitimidade constitucional de sua atuação na segurança urbana e na realização de patrulhamento preventivo e prisões em flagrante delito.",
    explicacao: "GABARITO: CERTO. O Plenário do STF, no julgamento da ADPF 995, reconheceu expressamente que as Guardas Municipais integram o Sistema Único de Segurança Pública (SUSP) e possuem atribuição constitucional para realizar policiamento preventivo comunitário e agir em flagrante delito.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 26
  {
    idSlug: "const-l4-26",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Acerca dos cargos privativos de brasileiro nato previstos no art. 12, § 3º, da Constituição Federal de 1988, assinale a alternativa que contém EXCLUSIVAMENTE cargos privativos de brasileiro nato:",
    explicacao: "GABARITO: Letra B. São privativos de brasileiro nato (art. 12, § 3º): I - Presidente e Vice-Presidente da República; II - Presidente da Câmara dos Deputados; III - Presidente do Senado Federal; IV - Ministro do STF; V - da carreira diplomática; VI - de oficial das Forças Armadas; VII - de Ministro de Estado da Defesa. (Mnemonic: MP3.COM).",
    alternativas: [
      { letra: "A", texto: "Deputado Federal, Senador da República e Delegado de Polícia Federal.", correta: false },
      { letra: "B", texto: "Presidente do Senado Federal, Ministro do STF, Oficial das Forças Armadas e Ministro de Estado da Defesa.", correta: true },
      { letra: "C", texto: "Governador de Estado, Prefeito Municipal e Ministro do STJ.", correta: false },
      { letra: "D", texto: "Procurador-Geral da República, Advogado-Geral da União e Diretor da PF.", correta: false },
      { letra: "E", texto: "Juiz de Direito Estadual, Defensor Público da União e Perito Criminal.", correta: false }
    ]
  },
  // 27
  {
    idSlug: "const-l4-27",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Polícia Civil, a Polícia Militar e o Corpo de Bombeiros Militar do Distrito Federal são organizados e mantidos pela União, cabendo, contudo, ao Governador do Distrito Federal a chefia e subordinação direta dessas corporações.",
    explicacao: "GABARITO: CERTO. Conforme o art. 21, XIV, da CF/88, compete à União organizar e manter a polícia civil, a polícia militar e o corpo de bombeiros militar do DF. Por outro lado, o art. 144, § 6º, estabelece que essas corporações subordinam-se ao Governador do Distrito Federal.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 28
  {
    idSlug: "const-l4-28",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Com a edição da Emenda Constitucional nº 131/2023, que alterou o art. 12, § 4º, da Constituição Federal, a perda da nacionalidade brasileira de pessoa que adquiriu outra nacionalidade originária ou por naturalização:",
    explicacao: "GABARITO: Letra D. A EC nº 131/2023 estabeleceu que o brasileiro somente perderá a nacionalidade se: I - tiver cancelada sua naturalização por sentença judicial em virtude de fraude relacionada ao processo de naturalização ou de atentado contra a ordem constitucional e o Estado Democrático; ou II - fizer pedido expresso de perda da nacionalidade brasileira perante autoridade competente, ressalvadas hipóteses que acarretem apatridia.",
    alternativas: [
      { letra: "A", texto: "Ocorre compulsoriamente e de forma automática pelo simples fato de adquirir outra cidadania estrangeira.", correta: false },
      { letra: "B", texto: "É decretada por portaria do Ministério da Justiça sem direito a recurso.", correta: false },
      { letra: "C", texto: "Aplica-se unicamente aos filhos de diplomatas em missão oficial.", correta: false },
      { letra: "D", texto: "Exige pedido expresso de perda formulado perante a autoridade competente ou cancelamento de naturalização por sentença judicial por fraude ou atentado ao Estado Democrático.", correta: true },
      { letra: "E", texto: "Foi totalmente abolida da Constituição Federal em qualquer circunstância.", correta: false }
    ]
  },
  // 29
  {
    idSlug: "const-l4-29",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O exercício do direito de greve sob qualquer forma ou modalidade é vedado aos policiais civis e a todos os servidores públicos que atuem diretamente na área de segurança pública, segundo tese vinculante fixada pelo STF no Tema 541.",
    explicacao: "GABARITO: CERTO. O STF, no julgamento do ARE 654.432/GO (Tema 541 de Repercussão Geral), fixou a seguinte tese: 'O exercício do direito de greve, sob qualquer forma ou modalidade, é vedado aos policiais civis e a todos os servidores públicos que atuem diretamente na área de segurança pública'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 30
  {
    idSlug: "const-l4-30",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 144, § 5º, da CF/88, à Polícia Militar cabe a polícia ostensiva e a preservação da ordem pública; ao Corpo de Bombeiros Militar, além de outras atribuições fixadas em lei, incumbe:",
    explicacao: "GABARITO: Letra A. O art. 144, § 5º, da CF/88 dispõe: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    alternativas: [
      { letra: "A", texto: "A execução de atividades de defesa civil.", correta: true },
      { letra: "B", texto: "A fiscalização tributária de combustíveis e derivados.", correta: false },
      { letra: "C", texto: "A presidência de inquéritos policiais de crimes passionais.", correta: false },
      { letra: "D", texto: "O policiamento ostensivo das rodovias federais pedagiadas.", correta: false },
      { letra: "E", texto: "O patrulhamento das zonas portuárias e aduaneiras.", correta: false }
    ]
  },
  // 31
  {
    idSlug: "const-l4-31",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Polícia Federal exerce, com exclusividade, as funções de polícia judiciária da União, nos termos do art. 144, § 1º, IV, da Constituição Federal.",
    explicacao: "GABARITO: CERTO. A Constituição Federal, no art. 144, § 1º, IV, consigna que cabe à Polícia Federal 'exercer, com exclusividade, as funções de polícia judiciária da União'. Trata-se de prerrogativa constitucional privativa.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 32
  {
    idSlug: "const-l4-32",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "São condições de elegibilidade, na forma da lei (art. 14, § 3º, da CF/88), EXCETO:",
    explicacao: "GABARITO: Letra E. As condições constitucionais de elegibilidade são: I - a nacionalidade brasileira; II - o pleno exercício dos direitos políticos; III - o alistamento eleitoral; IV - o domicílio eleitoral na circunscrição; V - a filiação partidária; VI - a idade mínima. A ausência de filiação partidária (candidatura avulsa) não é admitida pela CF/88.",
    alternativas: [
      { letra: "A", texto: "A nacionalidade brasileira.", correta: false },
      { letra: "B", texto: "O pleno exercício dos direitos políticos.", correta: false },
      { letra: "C", texto: "O alistamento eleitoral e o domicílio eleitoral na circunscrição.", correta: false },
      { letra: "D", texto: "A filiação partidária e a idade mínima.", correta: false },
      { letra: "E", texto: "A titularidade de bens imóveis no valor mínimo de cem salários mínimos.", correta: true }
    ]
  },
  // 33
  {
    idSlug: "const-l4-33",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil AL",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O militar em atividade que tomar posse em cargo ou emprego público civil permanente, ressalvada a hipótese de cargo da área da saúde com compatibilidade de horários, será transferido para a reserva, nos termos da lei.",
    explicacao: "GABARITO: CERTO. O art. 142, § 3º, II e III, da CF/88 prevê a transferência automática para a reserva do militar da ativa que assumir cargo civil permanente, ressalvados os profissionais de saúde com prevalência da atividade militar.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 34
  {
    idSlug: "const-l4-34",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O militar, enquanto em serviço ativo, é expressamente proibido de:",
    explicacao: "GABARITO: Letra B. O art. 142, § 3º, V, da CF/88 veda de forma expressa: 'o militar, enquanto em serviço ativo, não pode estar filiado a partidos políticos'. Também lhe são proibidas a greve e a sindicalização (art. 142, § 3º, IV).",
    alternativas: [
      { letra: "A", texto: "Prestar concurso público civil.", correta: false },
      { letra: "B", texto: "Estar filiado a partidos políticos e exercer o direito de greve ou sindicalização.", correta: true },
      { letra: "C", texto: "Ter conta bancária em instituição financeira estrangeira.", correta: false },
      { letra: "D", texto: "Casar-se sem autorização do comandante militar de área.", correta: false },
      { letra: "E", texto: "Adquirir imóvel residencial com financiamento habitacional.", correta: false }
    ]
  },
  // 35
  {
    idSlug: "const-l4-35",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio, sendo o rol dos órgãos previstos no caput do art. 144 da CF/88 taxativo segundo o STF.",
    explicacao: "GABARITO: CERTO. O STF assentou que o rol de órgãos de segurança pública do art. 144 da CF/88 é taxativo, sendo vedado aos Estados-membros criarem novos órgãos de segurança pública não previstos no modelo federal ou atribuírem atribuições de polícia judiciária a carreiras diversas.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 36
  {
    idSlug: "const-l4-36",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "São brasileiros natos por critério do jus soli (art. 12, I, 'a', da CF/88):",
    explicacao: "GABARITO: Letra A. O art. 12, I, 'a', da CF/88 define que são brasileiros natos 'os nascidos na República Federativa do Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país'.",
    alternativas: [
      { letra: "A", texto: "Os nascidos na República Federativa do Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país.", correta: true },
      { letra: "B", texto: "Os nascidos no estrangeiro de pai brasileiro sem registro consular.", correta: false },
      { letra: "C", texto: "Os estrangeiros que residam no Brasil há mais de trinta anos ininterruptos.", correta: false },
      { letra: "D", texto: "Os diplomatas estrangeiros acreditados perante o governo brasileiro.", correta: false },
      { letra: "E", texto: "Os originários de países de língua portuguesa que residam por 6 meses no país.", correta: false }
    ]
  },
  // 37
  {
    idSlug: "const-l4-37",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A remuneração dos servidores policiais integrantes dos órgãos previstos no art. 144 da CF/88 é fixada obrigatoriamente na forma de subsídio, estabelecido em parcela única, vedado o acréscimo de qualquer gratificação, adicional, abono, prêmio ou verba de representação, ressalvadas as parcelas de caráter indenizatório expressamente previstas em lei.",
    explicacao: "GABARITO: CERTO. O art. 144, § 9º, c/c art. 39, § 4º, da CF/88 determina que a remuneração dos servidores policiais seja estabelecida em subsídio em parcela única, sem prejuízo de verbas indenizatórias (diárias, auxílio-alimentação).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 38
  {
    idSlug: "const-l4-38",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos termos do art. 14, § 8º, da CF/88, o militar alistável é elegível, atendidas as seguintes condições:",
    explicacao: "GABARITO: Letra B. O art. 14, § 8º, da CF/88 estabelece que: I - se contar menos de 10 anos de serviço, deverá afastar-se da atividade; II - se contar mais de 10 anos de serviço, será agregado pela autoridade superior e, se eleito, passará automaticamente, no ato da diplomação, para a inatividade.",
    alternativas: [
      { letra: "A", texto: "Se contar menos de 5 anos de serviço, será transferido para a reserva remunerada.", correta: false },
      { letra: "B", texto: "Se contar menos de 10 anos de serviço, deverá afastar-se da atividade; se contar mais de 10 anos, será agregado e, se eleito, passará no ato da diplomação para a inatividade.", correta: true },
      { letra: "C", texto: "O militar da ativa é absolutamente inelegível em qualquer circunstância.", correta: false },
      { letra: "D", texto: "Se eleito, acumulará os vencimentos da patente militar com o subsídio parlamentar.", correta: false },
      { letra: "E", texto: "Depende de autorização prévia por decreto do Presidente do Congresso Nacional.", correta: false }
    ]
  },
  // 39
  {
    idSlug: "const-l4-39",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A segurança viária, exercida para a preservação da ordem pública e da incolumidade das pessoas e do seu patrimônio nas vias públicas, compreende a educação, engenharia e fiscalização de trânsito, competindo, no âmbito dos Estados, do Distrito Federal e dos Municípios, aos respectivos órgãos ou entidades executivos e seus agentes de trânsito, estruturados em Carreira.",
    explicacao: "GABARITO: CERTO. Trata-se da redação do art. 144, § 10, da CF/88 (inserido pela EC nº 82/2014), que constitucionalizou os agentes de trânsito e a segurança viária.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 40
  {
    idSlug: "const-l4-40",
    disciplina_id: dId,
    assunto_id: aSegPublica,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Os Municípios poderão constituir guardas municipais destinadas:",
    explicacao: "GABARITO: Letra D. O art. 144, § 8º, da CF/88 estabelece: 'Os Municípios poderão constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações, conforme dispuser a lei'.",
    alternativas: [
      { letra: "A", texto: "Ao julgamento de crimes contra o patrimônio municipal.", correta: false },
      { letra: "B", texto: "À exclusividade das funções de polícia judiciária estadual.", correta: false },
      { letra: "C", texto: "Ao controle das fronteiras internacionais terrestres.", correta: false },
      { letra: "D", texto: "À proteção de seus bens, serviços e instalações, conforme dispuser a lei.", correta: true },
      { letra: "E", texto: "À execução das decisões da Justiça Militar da União.", correta: false }
    ]
  }
];
