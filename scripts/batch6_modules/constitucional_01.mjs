import { TAXONOMIA } from "./taxonomia.mjs";

export const constitucional01Questoes = [
  // Q1 - CEBRASPE / PRF - Art. 144, § 2º (Polícia Rodoviária Federal)
  {
    idSlug: "const-001",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "A Polícia Rodoviária Federal é órgão permanente da segurança pública, organizado e mantido pela União e estruturado em carreira, destinando-se, na forma da lei, ao patrulhamento ostensivo das rodovias federais.",
    explicacao: "GABARITO: CERTO. Art. 144, § 2º, da CF/88: 'A polícia rodoviária federal, órgão permanente, estruturado em carreira, destina-se, na forma da lei, ao patrulhamento ostensivo das rodovias federais'. Trata-se de órgão mantido e organizado pela União.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q2 - FGV / PM - Art. 144, § 6º (Polícias Militares e Corpos de Bombeiros Militares)
  {
    idSlug: "const-002",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito do regime constitucional das Polícias Militares e dos Corpos de Bombeiros Militares no ordenamento jurídico brasileiro (art. 144, § 6º, da Constituição Federal), assinale a afirmativa correta.",
    explicacao: "GABARITO: D. Nos termos do art. 144, § 6º, da CF/88: 'As polícias militares e os corpos de bombeiros militares, forças auxiliares e reserva do Exército subordinam-se, juntamente com as polícias civis e as polícias penais estaduais e distrital, aos Governadores dos Estados, do Distrito Federal e dos Territórios'.",
    alternativas: [
      { letra: "A", texto: "As Polícias Militares subordinam-se administrativamente ao Ministério da Defesa em tempo de paz, atuando como força de reserva da Marinha e da Aeronáutica.", correta: false },
      { letra: "B", texto: "As Polícias Militares e os Corpos de Bombeiros Militares integram a estrutura orgânica da União, sendo subordinados diretamente ao Presidente da República.", correta: false },
      { letra: "C", texto: "Os Corpos de Bombeiros Militares subordinam-se aos Prefeitos dos Municípios onde mantêm quartéis e destacamentos operacionais.", correta: false },
      { letra: "D", texto: "As Polícias Militares e os Corpos de Bombeiros Militares constituem forças auxiliares e reserva do Exército e subordinam-se aos Governadores dos Estados, do Distrito Federal e dos Territórios.", correta: true },
      { letra: "E", texto: "As Polícias Militares possuem autonomia constitucional plena, não guardando vínculo de subordinação hierárquico-administrativa com o Poder Executivo estadual.", correta: false }
    ]
  },

  // Q3 - CEBRASPE / GM - Art. 144, § 8º e STF ADPF 1070 (Guardas Municipais)
  {
    idSlug: "const-003",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Conforme entendimento fixado pelo Supremo Tribunal Federal na ADPF 1.070, as Guardas Municipais integram formalmente o Sistema Único de Segurança Pública (SUSP), possuindo atribuição para realizar policiamento preventivo comunitário e efetuar prisões em flagrante delito no âmbito de suas funções de proteção de bens, serviços e instalações municipais.",
    explicacao: "GABARITO: CERTO. O STF, no julgamento da ADPF 1.070/DF, pacificou que as Guardas Municipais integram o Sistema de Segurança Pública (SUSP - Lei nº 13.675/2018) e exercem atividade de segurança pública ampla, com atribuição de patrulhamento preventivo e possibilidade de prender em flagrante delito.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q4 - VUNESP / PC - Art. 144, § 4º (Polícia Civil)
  {
    idSlug: "const-004",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 144, § 4º, da Constituição Federal de 1988, às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União:",
    explicacao: "GABARITO: B. Art. 144, § 4º, da CF/88: 'Às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares'.",
    alternativas: [
      { letra: "A", texto: "o policiamento ostensivo e a preservação da ordem pública estadual.", correta: false },
      { letra: "B", texto: "as funções de polícia judiciária e a apuração de infrações penais, exceto as militares.", correta: true },
      { letra: "C", texto: "a execução privativa das medidas de defesa civil e de socorro emergencial.", correta: false },
      { letra: "D", texto: "o patrulhamento ostensivo das rodovias estaduais e das vias municipais.", correta: false },
      { letra: "E", texto: "a apuração exclusiva de crimes militares praticados por civis contra a administração militar.", correta: false }
    ]
  },

  // Q5 - CEBRASPE / PRF - Art. 144, § 10 (Segurança Viária)
  {
    idSlug: "const-005",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A segurança viária, incluída no texto constitucional pela Emenda Constitucional nº 82/2014, compreende a educação, a engenharia e a fiscalização de trânsito, e visa a assegurar ao cidadão o direito à mobilidade urbana eficiente, devendo os respectivos órgãos e agentes ser estruturados em carreira.",
    explicacao: "GABARITO: CERTO. Art. 144, § 10, incisos I e II, da CF/88: a segurança viária compreende a educação, engenharia e fiscalização de trânsito para a preservação da ordem e incolumidade nas vias públicas, assegurando o direito à mobilidade urbana eficiente, competindo aos órgãos executivos e rodoviários estruturados em carreira.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q6 - IBFC / CBM - Art. 144, § 5º (Corpos de Bombeiros Militares)
  {
    idSlug: "const-006",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Soldado Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "A Constituição Federal de 1988, ao disciplinar os órgãos de segurança pública em seu art. 144, § 5º, atribui expressamente aos Corpos de Bombeiros Militares a responsabilidade por:",
    explicacao: "GABARITO: C. Art. 144, § 5º, segunda parte, da CF/88: 'aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    alternativas: [
      { letra: "A", texto: "funções de polícia judiciária e apuração de infrações penais comuns.", correta: false },
      { letra: "B", texto: "patrulhamento ostensivo preventivo das rodovias estaduais.", correta: false },
      { letra: "C", texto: "execução de atividades de defesa civil, além das atribuições definidas em lei.", correta: true },
      { letra: "D", texto: "fiscalização de fronteiras e controle migratório nacional.", correta: false },
      { letra: "E", texto: "guarda de presídios e escolta armada de sentenciados.", correta: false }
    ]
  },

  // Q7 - CEBRASPE / PM - Art. 5º, XI CF/88 e Tema 280 STF (Inviolabilidade Domiciliar)
  {
    idSlug: "const-007",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A entrada forçada em domicílio sem mandado judicial, mesmo em período noturno e em caso de suspeita de crime permanente, é lícita apenas quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem a ocorrência de situação de flagrante delito no interior da residência.",
    explicacao: "GABARITO: CERTO. Tese de repercussão geral fixada pelo STF no Tema 280 (RE 603.616/RO): 'A entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em período noturno, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade dos atos praticados'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q8 - FGV / PRF - Art. 22, XI (Competência Privativa para Legislar sobre Trânsito)
  {
    idSlug: "const-008",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.competencias_federativas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Determinada Assembleia Legislativa estadual aprova lei ordinária criando exigência de novo equipamento de segurança veicular e estabelecendo penalidades de trânsito não previstas no Código de Trânsito Brasileiro para veículos em circulação no estado. À luz da repartição constitucional de competências e da jurisprudência do STF (Súmula Vinculante 2), essa lei estadual é:",
    explicacao: "GABARITO: A. Conforme o art. 22, XI, da CF/88, compete privativamente à União legislar sobre trânsito e transporte. O STF consolidou entendimento no sentido de que os Estados e Municípios não podem criar exigências, restrições ou penalidades de trânsito sem autorização expressa em lei complementar federal.",
    alternativas: [
      { letra: "A", texto: "formalmente inconstitucional, pois compete privativamente à União legislar sobre trânsito e transporte.", correta: true },
      { letra: "B", texto: "constitucional, visto que os Estados membros possuem competência concorrente plena para legislar sobre normas de trânsito em suas rodovias.", correta: false },
      { letra: "C", texto: "constitucional, desde que o Governador do Estado tenha ratificado o projeto por meio de decreto regulamentar.", correta: false },
      { letra: "D", texto: "materialmente inconstitucional apenas no tocante ao equipamento, mas válida quanto à instituição das sanções administrativas.", correta: false },
      { letra: "E", texto: "válida em razão da competência comum entre União, Estados e Municípios para cuidar da segurança dos veículos automotores.", correta: false }
    ]
  },

  // Q9 - CEBRASPE / PP - Art. 144, § 5º-A (Polícia Penal - EC 104/2019)
  {
    idSlug: "const-009",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Penal",
    cargo_nome: "Policial Penal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "As polícias penais, inseridas no rol taxativo dos órgãos de segurança pública pela Emenda Constitucional nº 104/2019, são vinculadas ao órgão administrador do sistema penal da respectiva unidade federativa e incumbidas da segurança dos estabelecimentos penais.",
    explicacao: "GABARITO: CERTO. Art. 144, § 5º-A, da CF/88: 'Às polícias penais, vinculadas ao órgão administrador do sistema penal da unidade federativa a que pertencem, cabe a segurança dos estabelecimentos penais'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q10 - VUNESP / GM - STF Tema 532 / RE 658570 (Poder de Polícia de Trânsito pelas Guardas)
  {
    idSlug: "const-010",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O Supremo Tribunal Federal, ao apreciar o Tema nº 532 da repercussão geral (RE 658.570/MG), fixou tese sobre a atuação das Guardas Municipais na fiscalização de trânsito. De acordo com o entendimento da Corte Suprema, é:",
    explicacao: "GABARITO: C. O STF fixou no Tema 532: 'É constitucional a atribuição às Guardas Municipais do exercício de poder de polícia de trânsito, inclusive para a imposição de sanções administrativas legalmente previstas'.",
    alternativas: [
      { letra: "A", texto: "inconstitucional a aplicação de multas de trânsito por guardas municipais, competência privativa das polícias militares estaduais.", correta: false },
      { letra: "B", texto: "vedado às guardas municipais lavrar autos de infração de trânsito, permitindo-se apenas a orientação educativa a pedestres.", correta: false },
      { letra: "C", texto: "constitucional a atribuição às guardas municipais do exercício de poder de polícia de trânsito, inclusive para a imposição de sanções administrativas legalmente previstas.", correta: true },
      { letra: "D", texto: "lícita a aplicação de sanções de trânsito por guardas municipais unicamente quando acompanhados por agentes da autoridade policial civil.", correta: false },
      { letra: "E", texto: "permitida a fiscalização de trânsito por guardas municipais somente em rodovias federais que cortam o território do município.", correta: false }
    ]
  },

  // Q11 - CEBRASPE / PM - Súmula Vinculante 11 (Uso de Algemas)
  {
    idSlug: "const-011",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Segundo a Súmula Vinculante nº 11 do STF, o emprego de algemas é medida excepcional, somente lícita em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, devendo a excepcionalidade ser justificada por escrito.",
    explicacao: "GABARITO: CERTO. Enunciado da Súmula Vinculante 11 do STF: 'Só é lícito o uso de algemas em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, por parte do preso ou de terceiros, justificada a excepcionalidade por escrito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade da prisão ou do ato processual a que se refere, sem prejuízo da responsabilidade civil do Estado'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q12 - IBFC / PM - Art. 5º, LVIII (Identificação Criminal)
  {
    idSlug: "const-012",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Em consonância com o art. 5º, inciso LVIII, da Constituição Federal de 1988, 'o civilmente identificado não será submetido a identificação criminal, salvo...':",
    explicacao: "GABARITO: B. Art. 5º, LVIII, da CF/88: 'o civilmente identificado não será submetido a identificação criminal, salvo nas hipóteses previstas em lei'. A Lei nº 12.037/2009 regulamenta as hipóteses legais excepcionais.",
    alternativas: [
      { letra: "A", texto: "quando houver mera suspeita subjetiva do policial em patrulhamento ostensivo.", correta: false },
      { letra: "B", texto: "nas hipóteses previstas em lei.", correta: true },
      { letra: "C", texto: "em todos os casos de prisão em flagrante por infração penal de menor potencial ofensivo.", correta: false },
      { letra: "D", texto: "sempre que o agente policial entender conveniente para instrução de banco de dados particular.", correta: false },
      { letra: "E", texto: "quando se tratar de cidadão estrangeiro legalmente domiciliado no território nacional.", correta: false }
    ]
  },

  // Q13 - CEBRASPE / PRF - Art. 22, I vs Art. 24, XI (Competências em Direito Processual)
  {
    idSlug: "const-013",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.competencias_federativas,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Constituição Federal estabelece competência privativa da União para legislar sobre direito penal e processual penal, enquanto confere competência concorrente à União, aos Estados e ao Distrito Federal para legislar sobre procedimentos em matéria processual.",
    explicacao: "GABARITO: CERTO. Art. 22, I, da CF/88 (competência privativa da União para direito penal e processual) e Art. 24, XI, da CF/88 (competência concorrente da União, Estados e DF para procedimentos em matéria processual).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q14 - FGV / CBM - Art. 144, § 7º (Garantia de Eficiência da Segurança Pública)
  {
    idSlug: "const-014",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O art. 144, § 7º, da Constituição da República dispõe expressamente sobre a regulamentação dos órgãos de segurança pública. Nos termos desse dispositivo constitucional:",
    explicacao: "GABARITO: D. Art. 144, § 7º, da CF/88: 'A lei disciplinará a organização e o funcionamento dos órgãos responsáveis pela segurança pública, de maneira a garantir a eficiência de suas atividades'.",
    alternativas: [
      { letra: "A", texto: "os atos de gestão interna dos órgãos de segurança pública independem de disciplina em lei ordinária formal.", correta: false },
      { letra: "B", texto: "cabe privativamente ao Poder Judiciário fixar as diretrizes orçamentárias e metas operacionais das polícias militares.", correta: false },
      { letra: "C", texto: "a organização das polícias estaduais deve obedecer exclusivamente a decretos regulamentares dos Chefes do Poder Executivo municipal.", correta: false },
      { letra: "D", texto: "a lei disciplinará a organização e o funcionamento dos órgãos responsáveis pela segurança pública, de maneira a garantir a eficiência de suas atividades.", correta: true },
      { letra: "E", texto: "a estruturação dos Corpos de Bombeiros Militares vincula-se formalmente aos comandos operacionais da Marinha do Brasil.", correta: false }
    ]
  },

  // Q15 - CEBRASPE / PC - Art. 144, § 1º, IV (Exclusividade de Polícia Judiciária da União)
  {
    idSlug: "const-015",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Agente de Polícia",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com o texto da Constituição Federal, a Polícia Federal exerce, com exclusividade, as funções de polícia judiciária da União, o que veda a realização de investigações penais primárias pelo Ministério Público ou a cooperação com órgãos de controle da administração pública federal.",
    explicacao: "GABARITO: ERRADO. Embora o art. 144, § 1º, IV, da CF/88 preveja que a PF exerce 'com exclusividade, as funções de polícia judiciária da União', o STF pacificou no Tema 184 (RE 593.727) que o Ministério Público dispõe de competência investigatória penal própria, não havendo monopólio investigativo que anule outros mecanismos constitucionais de investigação.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },

  // Q16 - VUNESP / PM - Art. 5º, LXIII (Direito ao Silêncio / Aviso de Miranda)
  {
    idSlug: "const-016",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Durante abordagem e prisão em flagrante realizada por policiais militares, o preso é interrogado informalmente no local da ocorrência sem ser previamente advertido de seu direito constitucional de permanecer em silêncio (art. 5º, LXIII, da CF/88). Diante da jurisprudência consolidada do STF e do STJ (Aviso de Miranda), as declarações obtidas:",
    explicacao: "GABARITO: E. Conforme jurisprudência do STF (Rcl 33.711 e HC 186.797) e do STJ, o dever de informar ao preso o seu direito ao silêncio (Aviso de Miranda) aplica-se desde o momento da abordagem e detenção. A ausência de advertência e a realização de confissão informal forçada geram a ilicitude da prova produzida e das que dela derivarem.",
    alternativas: [
      { letra: "A", texto: "são plenamente válidas como prova judicializada, pois a advertência do direito ao silêncio é exclusiva do interrogatório prestado perante o juiz.", correta: false },
      { letra: "B", texto: "possuem eficácia probatória plena caso o réu confirme o relato perante testemunhas civis no quartel.", correta: false },
      { letra: "C", texto: "são consideradas mera irregularidade administrativa que não contamina o processo penal nem anula elementos informativos.", correta: false },
      { letra: "D", texto: "podem ser admitidas caso a autoridade policial ratifique formalmente as palavras no auto de prisão sem ouvir o custodiado.", correta: false },
      { letra: "E", texto: "são ilícitas, pois o direito ao silêncio e à não autoincriminação deve ser advertido desde o momento da abordagem e restrição da liberdade.", correta: true }
    ]
  },

  // Q17 - CEBRASPE / GM - Porte de Arma por Guardas Municipais (ADIs 5538 e 5948)
  {
    idSlug: "const-017",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O Supremo Tribunal Federal, ao julgar as Ações Diretas de Inconstitucionalidade 5.538 e 5.948, declarou inconstitucionais os dispositivos legais que restringiam o porte de arma de fogo aos integrantes das guardas municipais com base na quantidade de habitantes do município.",
    explicacao: "GABARITO: CERTO. O STF declarou inconstitucional a diferenciação de porte de arma para guardas municipais com base no número de habitantes do município (critério populacional do Estatuto do Desarmamento), reconhecendo o direito ao porte funcional a todos os integrantes das Guardas Municipais do país.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q18 - IBFC / PRF - Art. 144, § 10, II (Destinação e Estrutura da Segurança Viária)
  {
    idSlug: "const-018",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em conformidade com o art. 144, § 10, inciso II, da Constituição Federal de 1988, a segurança viária compete, no âmbito dos Estados, do Distrito Federal e dos Municípios:",
    explicacao: "GABARITO: A. Art. 144, § 10, II, da CF/88: 'aos órgãos e entidades executivos e seus agentes de trânsito, estruturados em Carreira, na forma da lei'.",
    alternativas: [
      { letra: "A", texto: "aos respectivos órgãos ou entidades executivos e seus agentes de trânsito, estruturados em Carreira, na forma da lei.", correta: true },
      { letra: "B", texto: "privativamente aos batalhões de trânsito das Polícias Militares de cada ente federativo.", correta: false },
      { letra: "C", texto: "exclusivamente às empresas públicas terceirizadas de monitoramento eletrônico viário.", correta: false },
      { letra: "D", texto: "aos Juizados Especiais Criminais e de Trânsito instalados em cada comarca.", correta: false },
      { letra: "E", texto: "aos conselhos tutelares e secretarias municipais de ação social.", correta: false }
    ]
  },

  // Q19 - CEBRASPE / PM - Art. 5º, LVI (Inadmissibilidade de Provas Ilícitas e Frutos da Árvore Envenenada)
  {
    idSlug: "const-019",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A busca pessoal ou veicular realizada por agentes policiais sem a demonstração concreta de fundada suspeita contamina de ilicitude as provas diretamente obtidas, bem como aquelas que delas decorrerem por nexo de causalidade (teoria dos frutos da árvore envenenada), ressalvadas as hipóteses de fonte independente ou descoberta inevitável.",
    explicacao: "GABARITO: CERTO. Art. 5º, LVI, da CF/88 e art. 157, § 1º, do CPP. A realização de busca pessoal ou veicular exige fundada suspeita baseada em elementos objetivos e concretos (STJ RHC 158.580/BA). A ausência desse pressuposto enseja a ilicitude da busca e das provas derivadas.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q20 - FGV / GM - Competência Municipal em Matéria de Trânsito e Guarda (Art. 30 da CF)
  {
    idSlug: "const-020",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.competencias_federativas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Determinado Município editou lei criando sua Guarda Municipal para proteção do patrimônio público municipal e organização do tráfego local. Considerando as regras de repartição de competências da CF/88, assinale a opção correta.",
    explicacao: "GABARITO: C. O Município possui competência para legislar sobre assuntos de interesse local (art. 30, I) e organizar sua guarda municipal para proteção de seus bens, serviços e instalações (art. 144, § 8º), além de prestar serviços públicos e exercer o poder de polícia de trânsito local nos limites do CTB (art. 30, V e art. 24 do CTB).",
    alternativas: [
      { letra: "A", texto: "O Município extrapolou sua competência, pois a instituição de órgãos de segurança é monopólio exclusivo da União e dos Estados.", correta: false },
      { letra: "B", texto: "A lei municipal é inconstitucional por não ter sido previamente submetida à aprovação do Ministério da Justiça e Segurança Pública.", correta: false },
      { letra: "C", texto: "O Município atuou no exercício de sua competência constitucional para legislar sobre assuntos de interesse local e organizar seus serviços e bens públicos.", correta: true },
      { letra: "D", texto: "A criação de Guardas Municipais somente é autorizada a Municípios que possuam população superior a quinhentos mil habitantes.", correta: false },
      { letra: "E", texto: "O Município somente poderia instituir a guarda caso delegasse seu comando a oficiais da ativa da Polícia Militar.", correta: false }
    ]
  },

  // Q21 - CEBRASPE / PRF - Art. 144, § 1º, II e III (Atribuições da Polícia Federal)
  {
    idSlug: "const-021",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A atribuição da Polícia Federal para prevenir e reprimir o tráfico ilícito de entorpecentes e drogas afins, o contrabando e o descaminho afasta a atuação fiscalizadora e repressiva de outros órgãos públicos, como a Polícia Rodoviária Federal e a Receita Federal, no âmbito de suas respectivas competências.",
    explicacao: "GABARITO: ERRADO. Art. 144, § 1º, II, da CF/88 estabelece expressamente que a atuação da PF na repressão ao tráfico de entorpecentes, contrabando e descaminho se dá 'sem prejuízo da ação fazendária e de outros órgãos públicos nas respectivas áreas de competência'.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },

  // Q22 - VUNESP / CBM - Vedações aos Militares Estaduais (Art. 42 c/c Art. 142 da CF)
  {
    idSlug: "const-022",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Soldado Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Aos militares dos Corpos de Bombeiros Militares e das Polícias Militares dos Estados, nos termos do art. 42, § 1º c/c art. 142, § 3º, inciso IV, da Constituição Federal, aplica-se expressamente a seguinte vedação constitucional enquanto em serviço ativo:",
    explicacao: "GABARITO: B. Art. 142, § 3º, IV c/c art. 42, § 1º, da CF/88: 'ao militar são proibidas a greve e a filiação a partidos políticos'. O STF também consolidou a vedação absoluta do direito de greve a todos os órgãos de segurança pública (Tema 41 da Repercussão Geral / ARE 654.432).",
    alternativas: [
      { letra: "A", texto: "o casamento com pessoa de nacionalidade estrangeira sem autorização do Governador.", correta: false },
      { letra: "B", texto: "a realização de greve e a filiação a partidos políticos.", correta: true },
      { letra: "C", texto: "a percepção de proventos de aposentadoria por tempo de contribuição.", correta: false },
      { letra: "D", texto: "a realização de cursos de graduação de nível superior em instituições civis.", correta: false },
      { letra: "E", texto: "a aquisição de imóvel próprio situado fora da circunscrição de seu batalhão.", correta: false }
    ]
  },

  // Q23 - CEBRASPE / PM - Art. 5º, LXI (Prisão e Exceções Constitucionais)
  {
    idSlug: "const-023",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo nos casos de transgressão militar ou crime propriamente militar, definidos em lei.",
    explicacao: "GABARITO: CERTO. Trata-se da redação literal do art. 5º, inciso LXI, da Constituição Federal de 1988.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q24 - IBFC / PC - Súmula Vinculante 14 (Acesso a Provas Documentadas no Inquérito)
  {
    idSlug: "const-024",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito do direito de defesa e das prerrogativas da advocacia nas investigações criminais conduzidas pela polícia judiciária, a Súmula Vinculante nº 14 do Supremo Tribunal Federal estabelece que:",
    explicacao: "GABARITO: E. Texto da Súmula Vinculante 14 do STF: 'É direito do defensor, no interesse do representado, ter amplo acesso aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa'. Diligências em andamento podem ser mantidas em sigilo até sua formalização.",
    alternativas: [
      { letra: "A", texto: "o advogado deve ter acesso prévio a escutas telefônicas e mandados de busca antes de sua deflagração operacional.", correta: false },
      { letra: "B", texto: "a autoridade policial pode negar acesso a todos os autos do inquérito enquanto não concluído o relatório final.", correta: false },
      { letra: "C", texto: "o inquérito policial é público e irrestrito para qualquer cidadão, independentemente de representação jurídica.", correta: false },
      { letra: "D", texto: "o defensor só pode acessar autos judiciais já arquivados definitivamente com sentença penal absolutória.", correta: false },
      { letra: "E", texto: "é direito do defensor ter amplo acesso aos elementos de prova que, já documentados em procedimento investigatório, digam respeito ao exercício do direito de defesa.", correta: true }
    ]
  },

  // Q25 - CEBRASPE / GM - Guardas Municipais e Investigação Criminal Privativa
  {
    idSlug: "const-025",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Embora as Guardas Municipais integrem o Sistema Único de Segurança Pública e possam efetuar prisões em flagrante, a Constituição Federal veda a atribuição a esses órgãos de funções típicas e privativas de polícia judiciária e de apuração de infrações penais comuns.",
    explicacao: "GABARITO: CERTO. As funções de polícia judiciária e apuração de infrações penais comuns são atribuídas pela CF/88 à Polícia Civil (art. 144, § 4º) e à Polícia Federal (art. 144, § 1º, IV). Às Guardas Municipais cabe a proteção de bens, serviços e instalações municipais (art. 144, § 8º), com patrulhamento preventivo, não lhes competindo instaurar inquéritos policiais.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q26 - FGV / PRF - Art. 21, XXII e XX (Competências Materiais da União)
  {
    idSlug: "const-026",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.competencias_federativas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 21, incisos XIII e XIV c/c art. 22, inciso XXII, da Constituição Federal, compete à União:",
    explicacao: "GABARITO: C. Art. 21, XIV: organizar e manter a polícia civil, a polícia penal, a polícia militar e o corpo de bombeiros militar do Distrito Federal; e Art. 22, XXII: legislar privativamente sobre a competência da polícia federal e das polícias rodoviária e ferroviária federais.",
    alternativas: [
      { letra: "A", texto: "organizar e custear as polícias militares e civis de todos os Estados membros da Federação.", correta: false },
      { letra: "B", texto: "legislar concorrentemente com os Municípios sobre as atribuições orgânicas da Polícia Federal.", correta: false },
      { letra: "C", texto: "organizar e manter a polícia civil, a polícia penal, a polícia militar e o corpo de bombeiros militar do Distrito Federal, bem como legislar privativamente sobre a competência das polícias federais.", correta: true },
      { letra: "D", texto: "subordinar as guardas municipais ao comando do Exército Brasileiro.", correta: false },
      { letra: "E", texto: "unificar compulsoriamente os quadros das polícias civis e militares estaduais por decreto federal.", correta: false }
    ]
  },

  // Q27 - CEBRASPE / PM - Art. 5º, XII (Inviolabilidade Telefônica x Dados Cadastrais)
  {
    idSlug: "const-027",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A cláusula constitucional de reserva de jurisdição incidente sobre a interceptação telefônica e o fluxo de comunicações (art. 5º, XII, da CF/88) não se estende aos meros dados cadastrais de usuários de telefonia, os quais podem ser requisitados por autoridades competentes na forma disciplinada em lei.",
    explicacao: "GABARITO: CERTO. A reserva de jurisdição aplica-se à quebra do sigilo das comunicações telefônicas e ao fluxo de dados de conteúdo. Dados meramente cadastrais (nome, endereço, CPF, filiação) não estão sob sigilo estrito de comunicação e podem ser requisitados diretamente pela autoridade competente quando expressamente previsto em lei (ex.: Lei 12.850/13 e Lei 12.830/13).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q28 - VUNESP / PRF - Atuação Integrada da PRF (ADI 6394 STF)
  {
    idSlug: "const-028",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal, ao apreciar a atuação operacional da Polícia Rodoviária Federal na ADI 6.394/DF, firmou entendimento acerca da legalidade de sua participação em operações conjuntas de segurança pública fora do leito das rodovias federais. Segundo o STF, a PRF:",
    explicacao: "GABARITO: B. Na ADI 6.394/DF, o STF reconheceu a constitucionalidade da atuação da Polícia Rodoviária Federal em operações conjuntas integradas de segurança pública, prestando apoio a outros órgãos do SUSP mesmo fora de rodovias federais, desde que no âmbito de cooperação federativa e preservada a competência constitucional de cada instituição.",
    alternativas: [
      { letra: "A", texto: "está constitucionalmente proibida de atuar em qualquer hipótese fora da faixa de domínio das rodovias federais.", correta: false },
      { letra: "B", texto: "pode prestar apoio e participar de operações conjuntas com outros órgãos de segurança pública, inclusive em áreas fora das rodovias federais, em regime de cooperação integrada.", correta: true },
      { letra: "C", texto: "passou a deter atribuição exclusiva para lavrar flagrantes e instaurar inquéritos policiais em todos os municípios.", correta: false },
      { letra: "D", texto: "só pode atuar fora de rodovias federais se houver decretação formal de estado de defesa pelo Congresso Nacional.", correta: false },
      { letra: "E", texto: "foi convertida em força militar estadual subordinada à chefia de polícia judiciária do respectivo Estado.", correta: false }
    ]
  },

  // Q29 - CEBRASPE / CBM - Art. 144, § 5º (Competência dos Corpos de Bombeiros Militares)
  {
    idSlug: "const-029",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Aos Corpos de Bombeiros Militares, além das atribuições definidas em lei estadual, incumbe expressamente a execução de atividades de defesa civil, por determinação do art. 144, § 5º, da Constituição Federal.",
    explicacao: "GABARITO: CERTO. Art. 144, § 5º, segunda parte: 'aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q30 - FGV / PM - Art. 5º, X (Acesso a Dados de Aparelho Celular em Abordagem)
  {
    idSlug: "const-030",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Durante abordagem policial preventiva de rotina, os agentes apreendem o telefone celular do suspeito e, de forma imediata e sem ordem judicial ou consentimento livre e comprovado do proprietário, acessam suas mensagens de texto e aplicativos de comunicação privada, encontrando conversas relacionadas ao tráfico de drogas. À luz da jurisprudência do STF e do STJ sobre a inviolabilidade da intimidade e do sigilo de dados (art. 5º, X e XII, da CF/88), a conduta dos policiais é:",
    explicacao: "GABARITO: D. O STF e o STJ pacificaram que o acesso aos dados armazenados em aparelho celular apreendido durante abordagem policial exige prévia autorização judicial ou consentimento voluntário inequívoco e comprovado do titular. O acesso direto e sem mandado viola o sigilo de dados e a intimidade (art. 5º, X e XII, CF), tornando ilícita a prova obtida.",
    alternativas: [
      { letra: "A", texto: "legítima, pois a apreensão do aparelho celular em flagrante autoriza automaticamente o acesso irrestrito ao seu conteúdo digital.", correta: false },
      { letra: "B", texto: "válida, desde que as mensagens sejam confirmadas posteriormente perante o escrivão de polícia na delegacia.", correta: false },
      { letra: "C", texto: "lícita apenas se o abordado tiver antecedentes criminais registrados por crimes hediondos.", correta: false },
      { letra: "D", texto: "ilícita, pois o acesso aos dados de comunicação e mensagens gravadas em celular apreendido exige prévia autorização judicial ou consentimento voluntário comprovado.", correta: true },
      { letra: "E", texto: "mera infração administrativa leve, que não invalida as provas no âmbito do processo penal.", correta: false }
    ]
  }
];
