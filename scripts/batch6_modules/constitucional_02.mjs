import { TAXONOMIA } from "./taxonomia.mjs";

export const constitucional02Questoes = [
  // Q31 - CEBRASPE / PRF - Art. 144, § 10 (Conceito e Finalidade da Segurança Viária)
  {
    idSlug: "const-031",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Nos termos da Constituição Federal (art. 144, § 10), a segurança viária é exercida para a preservação da ordem pública e da incolumidade das pessoas e do seu patrimônio nas vias públicas, visando a assegurar ao cidadão o direito à mobilidade urbana eficiente.",
    explicacao: "GABARITO: CERTO. Art. 144, § 10, caput e inciso I, da CF/88: 'A segurança viária, exercida para a preservação da ordem pública e da incolumidade das pessoas e do seu patrimônio nas vias públicas: I - compreende a educação, engenharia e fiscalização de trânsito, além de outras atividades previstas em lei, que assegurem ao cidadão o direito à mobilidade urbana eficiente'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q32 - FGV / PM - Art. 125, §§ 4º e 5º (Competência da Justiça Militar Estadual)
  {
    idSlug: "const-032",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Acerca da competência da Justiça Militar Estadual para processar e julgar os integrantes das Polícias Militares e dos Corpos de Bombeiros Militares (art. 125, § 4º, da Constituição Federal), assinale a opção correta.",
    explicacao: "GABARITO: B. Art. 125, § 4º, da CF/88: 'Compete à Justiça Militar estadual processar e julgar os militares dos Estados, nos crimes militares definidos em lei e as ações judiciais contra atos disciplinares militares, ressalvada a competência do júri quando a vítima for civil'.",
    alternativas: [
      { letra: "A", texto: "Compete à Justiça Militar estadual julgar homicídios dolosos praticados por policiais militares contra civis em serviço de patrulhamento.", correta: false },
      { letra: "B", texto: "Compete à Justiça Militar estadual processar e julgar os militares dos Estados nos crimes militares definidos em lei e as ações judiciais contra atos disciplinares militares, ressalvada a competência do júri quando a vítima for civil.", correta: true },
      { letra: "C", texto: "A competência da Justiça Militar estadual abrange o julgamento de civis que cometam crimes contra o patrimônio das organizações policiais militares estaduais.", correta: false },
      { letra: "D", texto: "As ações judiciais que impugnam atos disciplinares militares devem ser ajuizadas privativamente perante as Varas de Fazenda Pública comuns estaduais.", correta: false },
      { letra: "E", texto: "Os Corpos de Bombeiros Militares estão excluídos da jurisdição da Justiça Militar estadual por exercerem atividade precipuamente civil.", correta: false }
    ]
  },

  // Q33 - CEBRASPE / GM - STF e Regime Jurídico das Guardas Municipais
  {
    idSlug: "const-033",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Por integrarem a segurança pública municipal de natureza estritamente civil, os integrantes das Guardas Municipais submetem-se ao regime jurídico civil, sendo-lhes vedada a adoção de regulamentos de disciplina com hierarquia e rigores idênticos aos das corporações militares das Forças Armadas.",
    explicacao: "GABARITO: CERTO. A Lei Federal nº 13.022/2014 (Estatuto Geral das Guardas Municipais) dispõe em seu art. 19 que a estrutura das Guardas Municipais não pode ter denominação idêntica à das forças militares e seu regime é eminentemente civil, vedando a vinculação de seus regulamentos aos preceitos estritamente castrenses.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q34 - VUNESP / PRF - Art. 22, XXII (Competência Privativa para Legislar sobre Polícias Federais)
  {
    idSlug: "const-034",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.competencias_federativas,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "De acordo com o art. 22, inciso XXII, da Constituição Federal de 1988, compete privativamente à União legislar sobre:",
    explicacao: "GABARITO: E. Art. 22, XXII, da CF/88: 'compete privativamente à União legislar sobre: XXII - competência da polícia federal e das polícias rodoviária e ferroviária federais'.",
    alternativas: [
      { letra: "A", texto: "o zoneamento urbano e o plano diretor dos municípios metropolitanos.", correta: false },
      { letra: "B", texto: "as custas e emolumentos dos serviços notariais e de registro dos Estados.", correta: false },
      { letra: "C", texto: "a criação de taxas de combate a sinistros por municípios interioranos.", correta: false },
      { letra: "D", texto: "a regulamentação de uniformes e divisas das guardas municipais.", correta: false },
      { letra: "E", texto: "a competência da polícia federal e das polícias rodoviária e ferroviária federais.", correta: true }
    ]
  },

  // Q35 - CEBRASPE / PM - Art. 5º, XVI e Tema 855 STF (Direito de Reunião e Atuação Policial)
  {
    idSlug: "const-035",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Segundo tese de repercussão geral fixada pelo Supremo Tribunal Federal (Tema 855), a exigência constitucional de aviso prévio para a realização de reuniões pacíficas em locais abertos ao público não autoriza a polícia a impedir a manifestação pela simples ausência de notificação formal, desde que haja veiculação pública prévia que permita ao poder público garantir a segurança e o trânsito.",
    explicacao: "GABARITO: CERTO. O STF fixou no Tema 855: 'A exigência constitucional de aviso prévio relativamente ao direito de reunião é satisfeita com a veiculação de informação que permita ao poder público zelar para que seu exercício se dê de forma pacífica ou para que não frustre outra reunião no mesmo local'. A ausência de aviso formal não torna a reunião ilícita por si só.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q36 - IBFC / CBM - Art. 144, § 6º (Subordinação dos Órgãos de Segurança Pública Estaduais)
  {
    idSlug: "const-036",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Soldado Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "No modelo constitucional brasileiro, as polícias civis, as polícias militares, os corpos de bombeiros militares e as polícias penais estaduais subordinam-se diretamente ao:",
    explicacao: "GABARITO: A. Art. 144, § 6º, da CF/88: 'As polícias militares e os corpos de bombeiros militares, forças auxiliares e reserva do Exército subordinam-se, juntamente com as polícias civis e as polícias penais estaduais e distrital, aos Governadores dos Estados, do Distrito Federal e dos Territórios'.",
    alternativas: [
      { letra: "A", texto: "Governador do respectivo Estado, do Distrito Federal ou dos Territórios.", correta: true },
      { letra: "B", texto: "Presidente do Tribunal de Justiça de cada Estado.", correta: false },
      { letra: "C", texto: "Ministro da Defesa e aos Comandantes das Forças Armadas.", correta: false },
      { letra: "D", texto: "Procurador-Geral de Justiça do Ministério Público Estadual.", correta: false },
      { letra: "E", texto: "Presidente da Assembleia Legislativa do respectivo Estado.", correta: false }
    ]
  },

  // Q37 - CEBRASPE / PC - Investigação Penal pelo Ministério Público (Tema 184 STF)
  {
    idSlug: "const-037",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O Supremo Tribunal Federal, ao julgar o RE 593.727 (Tema 184), assentou que o Ministério Público dispõe de competência para promover, por autoridade própria e por prazo razoável, investigações de natureza penal, sem que isso anule as atribuições de polícia judiciária das polícias civil e federal.",
    explicacao: "GABARITO: CERTO. Tese do Tema 184/STF: 'O Ministério Público dispõe de competência para promover, por autoridade própria, e por prazo razoável, investigações de natureza penal, desde que respeitados os direitos e garantias que assistem a qualquer indiciado ou a qualquer pessoa sob investigação do Estado...'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q38 - FGV / GM - Princípios e Atribuições das Guardas Municipais
  {
    idSlug: "const-038",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 144, § 8º, da Constituição Federal, regulamentado pela Lei Federal nº 13.022/2014, a atuação das Guardas Municipais é orientada por princípios fundamentais. Dentre os princípios mínimos de atuação das guardas municipais, inclui-se expressamente:",
    explicacao: "GABARITO: C. Art. 3º da Lei nº 13.022/2014: são princípios mínimos de atuação das guardas municipais: I - proteção dos direitos humanos fundamentais, do exercício da cidadania e das liberdades públicas; II - preservação da vida, redução do sofrimento e diminuição das perdas; III - patrulhamento preventivo; IV - compromisso com a evolução social da comunidade; V - uso progressivo da força.",
    alternativas: [
      { letra: "A", texto: "o exercício privativo da custódia de presos provisórios em delegacias distritais.", correta: false },
      { letra: "B", texto: "o cumprimento exclusivo de mandados de prisão expedidos pela Justiça Militar da União.", correta: false },
      { letra: "C", texto: "a proteção dos direitos humanos fundamentais, a preservação da vida e o patrulhamento preventivo.", correta: true },
      { letra: "D", texto: "a realização privativa de perícias criminais de balística e necropsia.", correta: false },
      { letra: "E", texto: "a condução coercitiva de testemunhas civis sem prévia intimação ou determinação judicial.", correta: false }
    ]
  },

  // Q39 - CEBRASPE / PRF - Art. 5º, XV (Liberdade de Locomoção e Medidas Administrativas de Trânsito)
  {
    idSlug: "const-039",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A retenção e a remoção de veículo automotor flagrado sem condições seguras de trafegabilidade nas rodovias federais constituem medidas administrativas regulares de poder de polícia de trânsito que não violam o direito fundamental de locomoção assegurado no art. 5º, inciso XV, da Constituição Federal.",
    explicacao: "GABARITO: CERTO. A liberdade de locomoção em território nacional (art. 5º, XV, CF/88) opera 'nos termos da lei'. O poder de polícia administrativa de trânsito (CTB), ao condicionar o tráfego de veículos à observância de normas de segurança, constitui limitação legítima e constitucional em prol da coletividade e da segurança viária (art. 144, § 10, CF).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q40 - VUNESP / PM - Competência Concorrente (Art. 24, I da CF)
  {
    idSlug: "const-040",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.competencias_federativas,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No âmbito da legislação concorrente prevista no art. 24 da Constituição Federal de 1988, a competência da União para legislar sobre direito penitenciário, orçamento e procedimentos em matéria processual limita-se a:",
    explicacao: "GABARITO: A. Art. 24, § 1º, da CF/88: 'No âmbito da legislação concorrente, a competência da União limitar-se-á a estabelecer normas gerais'. Os Estados exercem competência suplementar (§ 2º) ou competência legislativa plena na ausência de norma geral federal (§ 3º).",
    alternativas: [
      { letra: "A", texto: "estabelecer normas gerais, cabendo aos Estados e ao DF a competência suplementar para atender a suas peculiaridades.", correta: true },
      { letra: "B", texto: "regulamentar minuciosamente os atos executivos estaduais, revogando todas as leis estaduais anteriores.", correta: false },
      { letra: "C", texto: "delegar privativamente aos Prefeitos a criação de normas penais incriminadoras.", correta: false },
      { letra: "D", texto: "impor modelos unificados de decretos disciplinares que não admitem qualquer adaptação pelos Estados.", correta: false },
      { letra: "E", texto: "exercer competência exclusiva indelegável, que impede qualquer atuação legiferante estadual.", correta: false }
    ]
  },

  // Q41 - CEBRASPE / PP - Vedação à Terceirização da Atividade-Fim de Polícia Penal
  {
    idSlug: "const-041",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Penal",
    cargo_nome: "Policial Penal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Com a promulgação da Emenda Constitucional nº 104/2019 e a estruturação das polícias penais como órgãos de segurança pública de carreira, é inconstitucional a delegação a particulares ou a terceirização de atividades-fim de segurança, custódia e vigilância interna e externa de estabelecimentos prisionais.",
    explicacao: "GABARITO: CERTO. A segurança pública e a custódia prisional constituem atividades estatais indelegáveis e exclusivas de Estado (art. 144, caput e § 5º-A, CF/88). Conforme jurisprudência do STF (ADI 5.416 e ADI 7.086), as atividades típicas e de poder de polícia exercidas pela polícia penal não podem ser terceirizadas.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q42 - IBFC / GM - Art. 30, V (Transporte Coletivo e Ordenação do Trânsito Local)
  {
    idSlug: "const-042",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.competencias_federativas,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Nos termos do art. 30, inciso V, da Constituição Federal, compete aos Municípios:",
    explicacao: "GABARITO: B. Art. 30, V, da CF/88: 'organizar e prestar, diretamente ou sob regime de concessão ou permissão, os serviços públicos de interesse local, incluído o de transporte coletivo, que tem caráter essencial'.",
    alternativas: [
      { letra: "A", texto: "instituir o direito processual penal aplicável às varas municipais.", correta: false },
      { letra: "B", texto: "organizar e prestar, diretamente ou sob regime de concessão ou permissão, os serviços públicos de interesse local, incluído o de transporte coletivo, que tem caráter essencial.", correta: true },
      { letra: "C", texto: "legislar sobre direito marítimo, aeronáutico e espacial privativo.", correta: false },
      { letra: "D", texto: "comandar operacionalmente os destacamentos do Corpo de Bombeiros Militar estadual.", correta: false },
      { letra: "E", texto: "julgar recursos de infrações de trânsito praticadas em rodovias federais interestaduais.", correta: false }
    ]
  },

  // Q43 - CEBRASPE / PM - Art. 5º, LXII (Comunicação Imediata da Prisão)
  {
    idSlug: "const-043",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "A prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e à família do preso ou à pessoa por ele indicada, conforme mandamento constitucional expresso do art. 5º, inciso LXII, da Carta Magna.",
    explicacao: "GABARITO: CERTO. Art. 5º, LXII, da CF/88: 'a prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e à família do preso ou à pessoa por ele indicada'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q44 - FGV / PRF - Art. 144, § 10 (Estruturação e Carreira da Segurança Viária)
  {
    idSlug: "const-044",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A Emenda Constitucional nº 82/2014 disciplinou a segurança viária no art. 144 da Carta Política. A respeito da regulamentação desse tema, assinale a afirmativa correta.",
    explicacao: "GABARITO: D. Art. 144, § 10, II, da CF/88: a segurança viária compete, no âmbito dos Estados, do DF e dos Municípios, aos respectivos órgãos ou entidades executivos e seus agentes de trânsito, estruturados em Carreira, na forma da lei.",
    alternativas: [
      { letra: "A", texto: "A segurança viária é atribuição exercida com exclusividade pelas Forças Armadas nas rodovias federais e estaduais.", correta: false },
      { letra: "B", texto: "Os agentes de fiscalização de trânsito municipal não necessitam de investidura por concurso público de provas ou de provas e títulos.", correta: false },
      { letra: "C", texto: "A segurança viária abrange exclusivamente a aplicação de sanções pecuniárias e recolhimento de tributos aduaneiros.", correta: false },
      { letra: "D", texto: "A segurança viária compreende a educação, a engenharia e a fiscalização de trânsito, e seus agentes devem ser estruturados em Carreira, na forma da lei.", correta: true },
      { letra: "E", texto: "A CF/88 veda a destinação de receitas de multas de trânsito para programas de educação e segurança no trânsito.", correta: false }
    ]
  },

  // Q45 - CEBRASPE / CBM - Art. 42 (Militares Estaduais e Regime Constitucional)
  {
    idSlug: "const-045",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Os membros das Polícias Militares e dos Corpos de Bombeiros Militares são militares dos Estados, do Distrito Federal e dos Territórios, aos quais se aplicam as disposições constitucionais relativas a patentes, postos e vedações a greve e filiação partidária, cabendo a lei estadual específica dispor sobre suas matérias estatutárias.",
    explicacao: "GABARITO: CERTO. Art. 42 da CF/88 estabelece que os membros das Polícias Militares e Corpos de Bombeiros Militares são militares estaduais, aplicando-se-lhes o disposto no art. 142, §§ 2º e 3º, e cabendo a lei estadual específica dispor sobre ingresso, limites de idade, direitos e deveres.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q46 - VUNESP / PC - Prova Ilícita por Derivação e Exceções (Art. 5º, LVI)
  {
    idSlug: "const-046",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No direito constitucional processual penal brasileiro, as provas obtidas por meios ilícitos são inadmissíveis (art. 5º, LVI, da CF/88). No tocante às provas derivadas das ilícitas, a legislação processual penal (art. 157, §§ 1º e 2º, do CPP) e a jurisprudência do STF consagram como exceções que autorizam a sua admissibilidade:",
    explicacao: "GABARITO: C. O art. 157, §§ 1º e 2º, do CPP e a jurisprudência do STF admitem as provas derivadas quando não evidenciado o nexo de causalidade entre umas e outras (fonte independente) ou quando as provas derivadas pudessem ser obtidas necessariamente por uma linha de investigação independente (descoberta inevitável).",
    alternativas: [
      { letra: "A", texto: "o clamor público gerado pela repercussão do crime e a confissão espontânea perante a imprensa.", correta: false },
      { letra: "B", texto: "a gravidade abstrata do delito e a natureza hedionda da infração investigada.", correta: false },
      { letra: "C", texto: "a existência de fonte independente e a teoria da descoberta inevitável.", correta: true },
      { letra: "D", texto: "a autorização outorgada posteriormente pelo Procurador-Geral de Justiça.", correta: false },
      { letra: "E", texto: "o prévio consentimento do cônjuge do investigado colhido sem assistência de advogado.", correta: false }
    ]
  },

  // Q47 - CEBRASPE / GM - Art. 144, caput (Conceito Constitucional de Segurança Pública)
  {
    idSlug: "const-047",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio, por meio dos órgãos expressamente previstos na Constituição Federal.",
    explicacao: "GABARITO: CERTO. Art. 144, caput, da CF/88: 'A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio...' pelos órgãos previstos nos seus incisos.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q48 - IBFC / PM - Art. 5º, LXVIII c/c Punições Disciplinares Militares
  {
    idSlug: "const-048",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O art. 142, § 2º, da Constituição Federal estabelece que 'não caberá habeas corpus em relação a punições disciplinares militares'. De acordo com a pacífica jurisprudência do Supremo Tribunal Federal e a melhor doutrina constitucional, essa vedação:",
    explicacao: "GABARITO: B. Conforme Súmula 690 do STF e jurisprudência consolidada, a vedação do art. 142, § 2º, impede o exame do mérito da punição disciplinar militar (conveniência e oportunidade), mas NÃO impede a análise judicial, via habeas corpus, da legalidade do ato (competência da autoridade, devido processo legal, previsão legal da sanção, motivação).",
    alternativas: [
      { letra: "A", texto: "impede de forma absoluta qualquer controle judicial, vedando o exame de legalidade e de mérito da sanção disciplinar.", correta: false },
      { letra: "B", texto: "não impede que o Poder Judiciário examine, por meio de habeas corpus, os aspectos formais de legalidade e constitucionalidade do ato punitivo disciplinar.", correta: true },
      { letra: "C", texto: "permite ao juiz togado comum substituir o mérito administrativo da sanção militar por critérios de pura discricionariedade.", correta: false },
      { letra: "D", texto: "aplica-se unicamente aos oficiais generais das Forças Armadas, não se estendendo aos praças e praças especiais.", correta: false },
      { letra: "E", texto: "torna nula de pleno direito qualquer punição de detenção ou prisão disciplinar aplicada no âmbito das Polícias Militares.", correta: false }
    ]
  },

  // Q49 - CEBRASPE / PRF - Competência Privativa de Trânsito e Normas Estaduais
  {
    idSlug: "const-049",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.competencias_federativas,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "É formalmente inconstitucional lei estadual que dispense motociclistas do uso de capacete de segurança em determinadas vias estaduais, por afrontar a competência privativa da União para legislar sobre trânsito e transporte (art. 22, XI, da CF/88).",
    explicacao: "GABARITO: CERTO. A disciplina dos requisitos de segurança de condutores e veículos, bem como as normas de trânsito gerais, são de competência privativa da União (art. 22, XI, CF/88). Leis estaduais que criam dispensas ou flexibilizações de normas do CTB são inconstitucionais (jurisprudência pacífica do STF).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q50 - FGV / CBM - Distinção Funcional PM e CBM (Art. 144, § 5º)
  {
    idSlug: "const-050",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O art. 144, § 5º, da Constituição Federal estabelece a distinção de missões constitucionais entre as Polícias Militares e os Corpos de Bombeiros Militares. Sobre essa repartição de funções, assinale a afirmativa correta.",
    explicacao: "GABARITO: D. Art. 144, § 5º, da CF/88: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    alternativas: [
      { letra: "A", texto: "Às polícias militares cabe privativamente a apuração de infrações penais comuns praticadas por civis.", correta: false },
      { letra: "B", texto: "Aos corpos de bombeiros militares incumbe a condução de inquéritos policiais sobre crimes hediondos.", correta: false },
      { letra: "C", texto: "Às polícias militares incumbe a execução privativa das ações de defesa civil em calamidades públicas.", correta: false },
      { letra: "D", texto: "Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública, cabendo aos corpos de bombeiros militares, além das atribuições em lei, a execução de atividades de defesa civil.", correta: true },
      { letra: "E", texto: "Aos corpos de bombeiros militares é vedado o socorro de vítimas em acidentes de trânsito em vias públicas.", correta: false }
    ]
  },

  // Q51 - CEBRASPE / PC - Art. 5º, LX (Publicidade dos Atos x Sigilo de Investigação)
  {
    idSlug: "const-051",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A publicidade dos atos processuais é a regra no sistema constitucional, mas a lei pode restringi-la quando a defesa da intimidade ou o interesse social o exigirem, fundamento que legitima o sigilo temporário de diligências investigatórias policiais em andamento.",
    explicacao: "GABARITO: CERTO. Art. 5º, LX, da CF/88: 'a lei só poderá restringir a publicidade dos atos processuais quando a defesa da intimidade ou o interesse social o exigirem'. No âmbito do inquérito policial, o art. 20 do CPP e a Súmula Vinculante 14 do STF amparam o sigilo necessário à elucidação do fato e à eficácia das diligências em curso.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q52 - VUNESP / GM - ADPF 1070 e Busca Pessoal por Guarda Municipal
  {
    idSlug: "const-052",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Guarda Municipal em patrulhamento preventivo em praça pública municipal avista indivíduo em atitude suspeita, realizando comércio de entorpecentes no local. Diante da fundada suspeita de situação de flagrante delito, os guardas realizam busca pessoal no indivíduo, encontram porções de drogas e efetuam a prisão em flagrante. Considerando a jurisprudência do STF (ADPF 1.070 e RE 843.089), a busca e a prisão efetuadas são:",
    explicacao: "GABARITO: A. Conforme o STF (ADPF 1.070), as Guardas Municipais integram o Sistema Único de Segurança Pública e possuem atribuição para realizar patrulhamento preventivo comunitário na proteção de bens e espaços públicos. Em situação de fundada suspeita de flagrante delito (art. 301 e 244 do CPP), é lícita a realização de busca pessoal e prisão em flagrante pelos guardas municipais.",
    alternativas: [
      { letra: "A", texto: "lícitas, pois as guardas municipais integram o sistema de segurança pública e podem realizar busca pessoal e efetuar prisão em flagrante na proteção de bens e espaços públicos.", correta: true },
      { letra: "B", texto: "nulas de pleno direito, pois a busca pessoal em locais públicos é monopólio exclusivo de policiais civis com mandado judicial.", correta: false },
      { letra: "C", texto: "inválidas, uma vez que as guardas municipais só podem atuar dentro de prédios da Prefeitura Municipal.", correta: false },
      { letra: "D", texto: "ilícitas quanto à apreensão da droga, devendo o material ser imediatamente restituído ao suspeito.", correta: false },
      { letra: "E", texto: "válidas apenas se a guarnição contar com a presença física obrigatória de um oficial militar.", correta: false }
    ]
  },

  // Q53 - CEBRASPE / PM - Art. 5º, LIV e LV (Devido Processo e Ampla Defesa no PAD Militar)
  {
    idSlug: "const-053",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Aos policiais militares e bombeiros militares acusados em processo administrativo disciplinar militar são assegurados o contraditório e a ampla defesa, com os meios e recursos a ela inerentes, em observância às garantias constitucionais fundamentais do devido processo legal.",
    explicacao: "GABARITO: CERTO. Art. 5º, LV, da CF/88: 'aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e ampla defesa, com os meios e recursos a ela inerentes'. Essa garantia aplica-se plenamente aos processos disciplinares militares.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q54 - IBFC / PRF - Art. 144, § 2º (Polícia Rodoviária Federal)
  {
    idSlug: "const-054",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "De acordo com a Constituição Federal de 1988, a Polícia Rodoviária Federal é órgão permanente, estruturado em carreira, que se destina precipuamente ao:",
    explicacao: "GABARITO: B. Art. 144, § 2º, da CF/88: 'A polícia rodoviária federal, órgão permanente, estruturado em carreira, destina-se, na forma da lei, ao patrulhamento ostensivo das rodovias federais'.",
    alternativas: [
      { letra: "A", texto: "julgamento de recursos administrativos interpostos perante os órgãos municipais de trânsito.", correta: false },
      { letra: "B", texto: "patrulhamento ostensivo das rodovias federais, na forma da lei.", correta: true },
      { letra: "C", texto: "exercício privativo e exclusivo de funções de polícia judiciária e inquérito penal federal.", correta: false },
      { letra: "D", texto: "comando operacional da aviação militar das Forças Armadas.", correta: false },
      { letra: "E", texto: "patrulhamento preventivo exclusivo das vias fluviais e costeiras da União.", correta: false }
    ]
  },

  // Q55 - CEBRASPE / PP - Art. 144, § 5º-A (Transformação em Polícia Penal)
  {
    idSlug: "const-055",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Penal",
    cargo_nome: "Policial Penal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Emenda Constitucional nº 104/2019 estabeleceu que o preenchimento do quadro de servidores das polícias penais será feito, exclusivamente, por meio de concurso público e pela transformação dos cargos dos atuais agentes penitenciários na forma da lei.",
    explicacao: "GABARITO: CERTO. Art. 144, § 5º-A c/c art. 4º da EC 104/2019: o preenchimento do quadro de servidores das polícias penais será feito exclusivamente por meio de concurso público e pela transformação dos cargos isolados ou dos cargos de carreira dos atuais agentes penitenciários e equivalentes.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q56 - FGV / PM - Art. 5º, XI (Busca Domiciliar Consentida e Jurisprudência do STJ)
  {
    idSlug: "const-056",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em operação de patrulhamento, policiais militares adentram a residência de um cidadão sem mandado judicial, alegando que o morador teria franqueado verbalmente a entrada no imóvel. Não houve gravação em áudio e vídeo nem declaração escrita assinada pelo morador. À luz do entendimento firmado pelo Superior Tribunal de Justiça (HC 598.051/SP e Tema 280 STF), o ingresso policial:",
    explicacao: "GABARITO: E. Conforme entendimento fixado pelo STJ (HC 598.051/SP e reiterado pelo STF), a prova da legalidade e da voluntariedade do consentimento do morador para ingresso em domicílio incumbe ao Estado, devendo ser registrada em áudio/vídeo e, sempre que possível, por declaração assinada, sob pena de nulidade do ingresso e de todas as provas obtidas.",
    alternativas: [
      { letra: "A", texto: "é plenamente válido, pois a palavra do policial militar goza de presunção absoluta de veracidade que dispensa qualquer registro.", correta: false },
      { letra: "B", texto: "só dependeria de registro caso o morador fosse pessoa analfabeta ou menor de dezoito anos.", correta: false },
      { letra: "C", texto: "é lícito caso sejam encontradas armas ou drogas no local, convalidando-se a diligência pelo resultado positivo.", correta: false },
      { letra: "D", texto: "constitui mera infração disciplinar que não acarreta a nulidade dos elementos apreendidos.", correta: false },
      { letra: "E", texto: "é ilegítimo, pois incumbe ao Estado comprovar a voluntariedade do consentimento do morador por registro audiovisual ou declaração assinada, sob pena de nulidade das provas.", correta: true }
    ]
  },

  // Q57 - CEBRASPE / GM - Art. 23, I (Competência Comum e Cooperação Federativa no SUSP)
  {
    idSlug: "const-057",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.competencias_federativas,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "A competência comum material prevista no art. 23, inciso I, da Constituição Federal, que atribui à União, aos Estados, ao Distrito Federal e aos Municípios o dever de zelar pela guarda da Constituição, das leis e das instituições democráticas e conservar o patrimônio público, dá suporte constitucional à cooperação federativa no Sistema Único de Segurança Pública.",
    explicacao: "GABARITO: CERTO. Art. 23, I, da CF/88 fixa a competência comum administrativa entre todos os entes para zelar pelas leis, instituições e patrimônio público, fornecendo lastro material para a integração e cooperação interfederativa em segurança pública (SUSP - Lei 13.675/18 e ADPF 1070 STF).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q58 - VUNESP / CBM - Taxa de Combate a Incêndio (STF Tema 16)
  {
    idSlug: "const-058",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Determinado Município instituiu por lei taxa municipal de prevenção e combate a incêndios para remunerar os serviços prestados pelo Corpo de Bombeiros Militar. O Supremo Tribunal Federal, ao julgar a matéria em sede de repercussão geral (Tema nº 16 / RE 643.247), fixou a tese de que:",
    explicacao: "GABARITO: B. No Tema 16 (RE 643.247/SP) e nas ADIs 4.411 e 2.908, o STF declarou inconstitucional a instituição de taxa de combate a incêndios por Municípios ou Estados, pois a segurança pública e a prevenção/combate a incêndios são serviços públicos gerais e indivisíveis (uti universi), devendo ser custeados pela receita de impostos gerais, e não por taxa.",
    alternativas: [
      { letra: "A", texto: "a taxa é constitucional se o valor arrecadado for integralmente revertido à compra de viaturas do Corpo de Bombeiros Militar.", correta: false },
      { letra: "B", texto: "a segurança pública, presentes a prevenção e o combate a incêndios, faz-se, no campo da atividade precípua, pela unidade da Federação e é mantida mediante impostos, sendo inconstitucional a criação de taxa para tal fim.", correta: true },
      { letra: "C", texto: "os Municípios têm competência privativa para instituir taxa de combate a incêndio sobre imóveis residenciais.", correta: false },
      { letra: "D", texto: "a taxa de incêndio é válida desde que cobrada juntamente com o imposto sobre a renda dos proprietários de imóveis comerciais.", correta: false },
      { letra: "E", texto: "apenas os Corpos de Bombeiros voluntários não militares podem ser financiados por taxas municipais.", correta: false }
    ]
  },

  // Q59 - CEBRASPE / PRF - Art. 144, § 10 (Tríade da Segurança Viária)
  {
    idSlug: "const-059",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.seguranca_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "A segurança viária, nos termos do art. 144, § 10, inciso I, da Constituição Federal, não se restringe à fiscalização punitiva de trânsito, compreendendo expressamente a educação e a engenharia de trânsito como dimensões integradas voltadas à mobilidade urbana eficiente.",
    explicacao: "GABARITO: CERTO. Art. 144, § 10, I, da CF/88 estabelece textualmente que a segurança viária 'compreende a educação, engenharia e fiscalização de trânsito, além de outras atividades previstas em lei, que assegurem ao cidadão o direito à mobilidade urbana eficiente'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q60 - FGV / PC - Art. 5º, LVII (Presunção de Inocência e Trânsito em Julgado)
  {
    idSlug: "const-060",
    disciplina_id: TAXONOMIA.disciplinas.constitucional,
    assunto_id: TAXONOMIA.assuntos.direitos_fundamentais,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O princípio constitucional da presunção de inocência (ou da não culpabilidade), consagrado no art. 5º, inciso LVII, da Constituição Federal de 1988, dispõe que 'ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória'. Em consonância com o julgamento das Ações Declaratórias de Constitucionalidade nº 43, 44 e 54 pelo STF, esse postulado fundamental:",
    explicacao: "GABARITO: A. No julgamento das ADCs 43, 44 e 54, o STF declarou a constitucionalidade do art. 283 do CPP, assentando que a execução da pena privativa de liberdade depende do trânsito em julgado da condenação, ressalvada a decretação fundamentada de prisões de natureza cautelar (preventiva/temporária) quando presentes seus requisitos legais.",
    alternativas: [
      { letra: "A", texto: "impede a execução provisória da pena privativa de liberdade antes do trânsito em julgado da sentença condenatória, sem prejuízo da decretação de prisões cautelares devidamente fundamentadas.", correta: true },
      { letra: "B", texto: "proíbe expressamente qualquer modalidade de prisão cautelar antes do pronunciamento definitivo do Supremo Tribunal Federal.", correta: false },
      { letra: "C", texto: "autoriza a prisão automática do acusado logo após a confirmação da condenação por tribunal de segundo grau.", correta: false },
      { letra: "D", texto: "impede que a autoridade policial indicie formalmente o investigado no curso do inquérito policial.", correta: false },
      { letra: "E", texto: "obriga a concessão de liberdade provisória a todos os presos em flagrante delito, inclusive em crimes inafiançáveis.", correta: false }
    ]
  }
];
