import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.processual_penal;
const aAcaoPenal = TAXONOMIA.assuntos.acao_penal;
const aProvas = TAXONOMIA.assuntos.provas_processo_penal;

export const dppPart2 = [
  // 21
  {
    idSlug: "dpp-l4-21",
    disciplina_id: dId,
    assunto_id: aAcaoPenal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A ação penal privada subsidiária da pública é cabível sempre que o Ministério Público não oferecer a denúncia no prazo legal, não podendo o órgão ministerial, contudo, aditar a queixa ou repudiá-la.",
    explicacao: "GABARITO: ERRADO. O art. 29 do CPP e o art. 5º, LIX, da CF asseguram a ação penal privada subsidiária da pública se a ação pública não for intentada no prazo legal. Porém, o art. 29 expressamente prevê que 'ao Ministério Público caberá aditar a queixa, repudiá-la e oferecer denúncia substitutiva, intervir em todos os termos do processo, fornecer elementos de prova, interpor recurso e, a todo tempo, no caso de negligência do querelante, retomar a ação como parte principal'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: false },
      { letra: "E", texto: "Errado", correta: true }
    ]
  },
  // 22
  {
    idSlug: "dpp-l4-22",
    disciplina_id: dId,
    assunto_id: aAcaoPenal,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação ao instituto da representação do ofendido na ação penal pública condicionada, assinale a afirmativa juridicamente correta:",
    explicacao: "GABARITO: Letra B. Conforme o art. 25 do CPP, a representação será irretratável depois de oferecida a denúncia. O prazo para oferecimento da representação é de 6 meses contados do dia em que o ofendido veio a saber quem é o autor do crime (art. 38 do CPP), tratando-se de prazo decadencial.",
    alternativas: [
      { letra: "A", texto: "A representação pode ser retratada a qualquer momento até a publicação da sentença de primeiro grau.", correta: false },
      { letra: "B", texto: "A representação será irretratável após o oferecimento da denúncia pelo Ministério Público.", correta: true },
      { letra: "C", texto: "A representação exige rigor formal solene, sendo inválida a declaração verbal registrada em termo de audiência.", correta: false },
      { letra: "D", texto: "O prazo decadencial de representação se interrompe com a instauração do inquérito policial.", correta: false },
      { letra: "E", texto: "A retratação da representação impede que a vítima ofereça nova representação mesmo dentro do prazo decadencial.", correta: false }
    ]
  },
  // 23
  {
    idSlug: "dpp-l4-23",
    disciplina_id: dId,
    assunto_id: aAcaoPenal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O princípio da indivisibilidade da ação penal privada impõe que a queixa-crime seja proposta contra todos os autores e partícipes conhecidos do delito, sob pena de renúncia tácita ao direito de queixa em relação a todos eles.",
    explicacao: "GABARITO: CERTO. O art. 48 do CPP estatui: 'A queixa contra qualquer dos autores do crime obrigará ao processo de todos, e o Ministério Público velará pela sua indivisibilidade'. A renúncia tácita ou expressa concedida a um dos coautores a todos se estende (art. 49 do CPP).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 24
  {
    idSlug: "dpp-l4-24",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Acerca da disciplina da cadeia de custódia da prova pericial, introduzida no Código de Processo Penal pela Lei nº 13.964/2019 (Pacote Anticrime), considera-se cadeia de custódia:",
    explicacao: "GABARITO: Letra A. O art. 158-A do CPP conceitua: 'Considera-se cadeia de custódia o conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio coletado em locais ou em vítimas de crimes, para rastrear sua posse e manuseio a partir de seu reconhecimento até o descarte'.",
    alternativas: [
      { letra: "A", texto: "O conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio coletado, para rastrear sua posse e manuseio a partir do reconhecimento até o descarte.", correta: true },
      { letra: "B", texto: "O registro formal das oitivas de testemunhas e declarações do ofendido colhidas no cartório policial.", correta: false },
      { letra: "C", texto: "O transporte exclusivo de armas de fogo apreendidas diretamente ao depósito do Exército Brasileiro.", correta: false },
      { letra: "D", texto: "A fiscalização judicial sobre os relatórios de inteligência financeira do COAF.", correta: false },
      { letra: "E", texto: "O protocolo eletrônico de juntada de petições das partes na fase de instrução criminal.", correta: false }
    ]
  },
  // 25
  {
    idSlug: "dpp-l4-25",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O início da cadeia de custódia dá-se com a preservação do local de crime ou com procedimentos policiais ou periciais nos quais seja detectada a existência de vestígio, sendo o agente público que reconhece o elemento o responsável por sua preservação.",
    explicacao: "GABARITO: CERTO. O art. 158-A, § 2º, do CPP prevê: 'O início da cadeia de custódia dá-se com a preservação do local de crime ou com procedimentos policiais ou periciais nos quais seja detectada a existência de vestígio'. O § 1º estabelece que o agente público que reconhece um elemento com potencial interesse probatório é responsável por sua preservação.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 26
  {
    idSlug: "dpp-l4-26",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A cadeia de custódia compreende dez etapas expressamente discriminadas no art. 158-B do Código de Processo Penal. Assinale a alternativa que apresenta a sequência cronológica correta das três primeiras etapas:",
    explicacao: "GABARITO: Letra D. O art. 158-B do CPP elenca as seguintes 10 etapas da cadeia de custódia: I - Reconhecimento; II - Isolamento; III - Fixação; IV - Coleta; V - Acondicionamento; VI - Transporte; VII - Recebimento; VIII - Processamento; IX - Armazenamento; X - Descarte. Portanto, as 3 primeiras são Reconhecimento, Isolamento e Fixação.",
    alternativas: [
      { letra: "A", texto: "Isolamento, Fixação e Coleta.", correta: false },
      { letra: "B", texto: "Coleta, Acondicionamento e Transporte.", correta: false },
      { letra: "C", texto: "Reconhecimento, Coleta e Acondicionamento.", correta: false },
      { letra: "D", texto: "Reconhecimento, Isolamento e Fixação.", correta: true },
      { letra: "E", texto: "Fixação, Transporte e Armazenamento.", correta: false }
    ]
  },
  // 27
  {
    idSlug: "dpp-l4-27",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "São inadmissíveis, devendo ser desentranhadas do processo, as provas ilícitas, assim entendidas as obtidas em violação a normas constitucionais ou legais, bem como as provas derivadas das ilícitas, salvo quando não evidenciado o nexo de causalidade entre umas e outras, ou quando as derivadas puderem ser obtidas por uma fonte independente.",
    explicacao: "GABARITO: CERTO. A redação reflete com exatidão o art. 157, caput e § 1º, do Código de Processo Penal, consagrando a teoria dos frutos da árvore envenenada (fruits of the poisonous tree) e suas exceções legais (nexo causal atenuado e fonte independente).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 28
  {
    idSlug: "dpp-l4-28",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Quando a infração deixar vestígios, será indispensável o exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado. Esta determinação consta expressamente do Código de Processo Penal em seu artigo:",
    explicacao: "GABARITO: Letra C. O art. 158 do CPP estatui expressamente: 'Quando a infração deixar vestígios, será indispensável o exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado'.",
    alternativas: [
      { letra: "A", texto: "Artigo 155.", correta: false },
      { letra: "B", texto: "Artigo 156.", correta: false },
      { letra: "C", texto: "Artigo 158.", correta: true },
      { letra: "D", texto: "Artigo 160.", correta: false },
      { letra: "E", texto: "Artigo 171.", correta: false }
    ]
  },
  // 29
  {
    idSlug: "dpp-l4-29",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na falta de perito oficial, o exame de corpo de delito será realizado por 2 (duas) pessoas idôneas, portadoras de diploma de curso superior preferencialmente na área específica, dentre as que tiverem habilitação técnica relacionada com a natureza do exame.",
    explicacao: "GABARITO: CERTO. Conforme o art. 159, § 1º, do CPP: 'Na falta de perito oficial, o exame será realizado por 2 (duas) pessoas idôneas, portadoras de diploma de curso superior preferencialmente na área específica, dentre as que tiverem habilitação técnica relacionada com a natureza do exame'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 30
  {
    idSlug: "dpp-l4-30",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre o interrogatório do acusado no processo penal brasileiro, assinale a opção correta consoante a legislação processual e a jurisprudência sumulada do STF e STJ:",
    explicacao: "GABARITO: Letra B. O interrogatório do acusado é ato misto de meio de defesa e meio de prova, sendo realizado como último ato da instrução probatória (art. 400 do CPP e entendimento fixado pelo STF no HC 127.900/AM para todos os procedimentos penais e leis especiais). O silêncio do réu não importará confissão nem poderá ser interpretado em prejuízo da defesa (art. 186, parágrafo único, do CPP).",
    alternativas: [
      { letra: "A", texto: "O interrogatório é o primeiro ato da audiência de instrução e julgamento no procedimento ordinário comum.", correta: false },
      { letra: "B", texto: "O silêncio do acusado não importará em confissão e não poderá ser interpretado em prejuízo de sua própria defesa técnica.", correta: true },
      { letra: "C", texto: "O réu preso é obrigado a prestar juramento de dizer a verdade sob pena de falso testemunho.", correta: false },
      { letra: "D", texto: "A ausência de defensor no interrogatório judicial constitui mera irregularidade formal convalidável.", correta: false },
      { letra: "E", texto: "É vedado o interrogatório por videoconferência em qualquer hipótese processual.", correta: false }
    ]
  },
  // 31
  {
    idSlug: "dpp-l4-31",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A busca domiciliar sem consentimento do morador exige autorização judicial fundamentada e somente pode ser executada durante o dia, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, de acordo com o art. 5º, XI, da Constituição Federal.",
    explicacao: "GABARITO: CERTO. O art. 5º, XI, da CF consagra a inviolabilidade do domicílio: 'a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial'. O cumprimento de mandado de busca e apreensão restringe-se ao período diurno.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 32
  {
    idSlug: "dpp-l4-32",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "De acordo com o Tema 280 da repercussão geral do Supremo Tribunal Federal (RE 603.616/RO), a entrada forçada em domicílio sem mandado judicial, em caso de crime permanente como o tráfico de drogas, é legítima:",
    explicacao: "GABARITO: Letra C. A tese fixada pelo STF no Tema 280 é: 'A entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em caso de crime permanente, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade dos atos praticados'.",
    alternativas: [
      { letra: "A", texto: "Sempre que houver denúncia anônima isolada, independentemente de verificação prévia.", correta: false },
      { letra: "B", texto: "Apenas se houver prévia autorização escrita de vizinhos do imóvel inspecionado.", correta: false },
      { letra: "C", texto: "Quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem a ocorrência de situação de flagrante delito dentro da casa.", correta: true },
      { letra: "D", texto: "Exclusivamente se o morador for reincidente específico em crimes hediondos.", correta: false },
      { letra: "E", texto: "Apenas durante o período noturno mediante acompanhamento de duas testemunhas.", correta: false }
    ]
  },
  // 33
  {
    idSlug: "dpp-l4-33",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O reconhecimento de pessoas realizado sem a observância estrita das formalidades previstas no art. 226 do Código de Processo Penal não serve para fundamentar a condenação, nem mesmo se confirmado em juízo sob o crivo do contraditório, conforme entendimento pacificado pelo STJ e STF.",
    explicacao: "GABARITO: CERTO. O STJ (HC 598.886/SC e EREsp 1.820.611/PR) e o STF (RHC 206.846/SP) estabeleceram uma mudança paradigmática, fixando que as diretrizes do art. 226 do CPP são garantias cogentes e não meras recomendações, de modo que o reconhecimento fotográfico ou presencial em desconformidade com o modelo legal é nulo e inidôneo para embasar édito condenatório.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 34
  {
    idSlug: "dpp-l4-34",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Sobre a busca pessoal (revista pessoal) realizada pela autoridade policial, dispõe o art. 244 do CPP que a busca independerá de mandado judicial:",
    explicacao: "GABARITO: Letra A. O art. 244 do CPP estabelece: 'A busca pessoal independerá de mandado, no caso de prisão ou quando houver fundada suspeita de que a pessoa esteja na posse de arma proibida ou de objetos ou papéis que constituam corpo de delito, ou quando a medida for determinada no curso de busca domiciliar'.",
    alternativas: [
      { letra: "A", texto: "No caso de prisão, ou quando houver fundada suspeita de que a pessoa esteja na posse de arma proibida ou objetos de crime, ou no curso de busca domiciliar.", correta: true },
      { letra: "B", texto: "Apenas quando o indivíduo manifestar nervosismo genérico em via pública.", correta: false },
      { letra: "C", texto: "Exclusivamente em blitzes previamente anunciadas pelo Diário Oficial.", correta: false },
      { letra: "D", texto: "Sempre que o abordado estiver desacompanhado de advogado ou responsável legal.", correta: false },
      { letra: "E", texto: "Apenas se houver autorização prévia por escrito do Ministério Público Estadual.", correta: false }
    ]
  },
  // 35
  {
    idSlug: "dpp-l4-35",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O exame pericial de corpo de delito nos crimes de violência doméstica e familiar contra a mulher terá prioridade na sua realização sobre os demais exames periciais.",
    explicacao: "GABARITO: CERTO. O art. 158, parágrafo único, do CPP (incluído pela Lei nº 13.721/2018) estabelece expressamente: 'Deverá ser dada prioridade à realização do exame de corpo de delito quando se tratar de crime que envolva: I - violência doméstica e familiar contra a mulher; II - violência contra criança, adolescente, idoso ou pessoa com deficiência'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 36
  {
    idSlug: "dpp-l4-36",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em relação à prova testemunhal no processo penal, assinale a pessoa que PODE recusar-se a prestar depoimento, conforme o art. 206 do Código de Processo Penal:",
    explicacao: "GABARITO: Letra D. O art. 206 do CPP prevê: 'A testemunha não poderá eximir-se da obrigação de depor. Poderão, entretanto, recusar-se a fazê-lo o ascendente ou descendente, o afim em linha reta, o cônjuge, ainda que desquitado, o irmão e o pai, a mãe, ou o filho adotivo do acusado, salvo quando não for possível, por outro modo, obter-se ou integrar-se a prova do fato e de suas circunstâncias'.",
    alternativas: [
      { letra: "A", texto: "O vizinho que presenciou o fato delituoso.", correta: false },
      { letra: "B", texto: "O perito oficial subscritor do laudo pericial.", correta: false },
      { letra: "C", texto: "A vítima direta do roubo majorado.", correta: false },
      { letra: "D", texto: "O cônjuge, ainda que desquitado, os ascendentes, descendentes e irmãos do acusado.", correta: true },
      { letra: "E", texto: "O policial militar que realizou a prisão em flagrante.", correta: false }
    ]
  },
  // 37
  {
    idSlug: "dpp-l4-37",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A acareação será admitida entre acusados, entre acusado e testemunha, entre testemunhas, entre acusado ou testemunha e a pessoa ofendida, e entre as pessoas ofendidas, sempre que divergirem, em suas declarações, sobre fatos ou circunstâncias relevantes.",
    explicacao: "GABARITO: CERTO. A disposição corresponde fielmente ao texto do art. 229 do Código de Processo Penal, que disciplina o procedimento e as hipóteses de cabimento da acareação no processo penal brasileiro.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 38
  {
    idSlug: "dpp-l4-38",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Quanto aos documentos no processo penal (arts. 231 a 238 do CPP), assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra B. O art. 231 do CPP preceitua: 'Salvo os casos expressos em lei, as partes poderão apresentar documentos em qualquer fase do processo'. A principal exceção ocorre no procedimento do Júri (art. 479 do CPP), que exige a juntada com antecedência mínima de 3 dias úteis para leitura em plenário.",
    alternativas: [
      { letra: "A", texto: "A juntada de documentos somente é permitida na denúncia e na resposta à acusação, precluindo nas demais fases.", correta: false },
      { letra: "B", texto: "Salvo os casos expressos em lei, as partes poderão apresentar documentos em qualquer fase do processo.", correta: true },
      { letra: "C", texto: "Documentos em língua estrangeira dispensam qualquer tradução oficial ou juramentada.", correta: false },
      { letra: "D", texto: "Cartas particulares interceptadas sem autorização judicial são plenamente admitidas como prova documental típica.", correta: false },
      { letra: "E", texto: "O juiz é obrigado a aceitar todo e qualquer documento apresentado, sendo-lhe vedado indeferir documentos protelatórios.", correta: false }
    ]
  },
  // 39
  {
    idSlug: "dpp-l4-39",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "É ilícita a prova obtida por meio de revista íntima vexatória em estabelecimentos prisionais, consubstanciada no desnudamento forçado e inspeção de cavidades corporais sem suspeita fundada e individualizada, em face da violação à dignidade da pessoa humana e à intimidade (Tema 998 do STF).",
    explicacao: "GABARITO: CERTO. O Plenário do STF (ARE 959.620/RJ - Tema 998) fixou a tese de que é inadmissível a prática de revista íntima vexatória, caracterizada por desnudamento de visitantes e inspeção de cavidades genitais/anais sem elementos fáticos concretos e objetivos que a justifiquem, sendo ilícitas as provas assim colhidas.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 40
  {
    idSlug: "dpp-l4-40",
    disciplina_id: dId,
    assunto_id: aProvas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "De acordo com o art. 158-C do Código de Processo Penal, a coleta dos vestígios deverá ser realizada preferencialmente por:",
    explicacao: "GABARITO: Letra A. O art. 158-C do CPP estabelece: 'A coleta dos vestígios deverá ser realizada preferencialmente por perito oficial, que dará o encaminhamento necessário para a central de custódia, mesmo quando for necessária a realização de exames complementares'.",
    alternativas: [
      { letra: "A", texto: "Perito oficial, que dará o encaminhamento necessário para a central de custódia.", correta: true },
      { letra: "B", texto: "Qualquer cidadão presente no local que se disponha a isolar os objetos.", correta: false },
      { letra: "C", texto: "Escrivão de polícia designado para lavratura do auto de exibição e apreensão.", correta: false },
      { letra: "D", texto: "Oficial de justiça mediante determinação do juiz das garantias.", correta: false },
      { letra: "E", texto: "Advogado do indiciado mediante acompanhamento de assistente técnico.", correta: false }
    ]
  }
];
