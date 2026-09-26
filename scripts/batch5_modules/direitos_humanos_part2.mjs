import { TAXONOMIA } from "./taxonomia.mjs";

const ce = (idSlug, assunto_id, enunciado, correta, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
  assunto_id,
  banca_nome: "CEBRASPE",
  orgao_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Polícia Federal" : "Polícia Civil",
  cargo_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Delegado de Polícia Federal" : "Delegado de Polícia",
  ano: 2025,
  tipo: "certo_errado",
  dificuldade: "dificil",
  enunciado,
  alternativas: [
    { letra: "C", texto: "Certo", correta, explicacao_especifica: correta ? "Correto. Assertiva em conformidade com o direito internacional dos direitos humanos e jurisprudência vinculante." : "Incorreto. A assertiva contraria a ordem convencional internacional." },
    { letra: "E", texto: "Errado", correta: !correta, explicacao_especifica: !correta ? "Correto. A assertiva apresenta incorreção jurídica expressa." : "Incorreto. A proposição traduz a exata inteligência da norma de direitos humanos." }
  ],
  explicacao: `Gabarito: ${correta ? "Certo" : "Errado"}. ${explicacao}`
});

const me = (idSlug, assunto_id, enunciado, corretaLetra, alternativas, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
  assunto_id,
  banca_nome: "FGV",
  orgao_nome: "Polícia Civil",
  cargo_nome: "Delegado de Polícia",
  ano: 2024,
  tipo: "multipla_escolha",
  dificuldade: "dificil",
  enunciado,
  alternativas: alternativas.map(([letra, texto, just]) => ({ letra, texto, correta: letra === corretaLetra, explicacao_especifica: just })),
  explicacao: `Gabarito: ${corretaLetra}. ${explicacao}`
});

export const direitosHumanosPart2 = [
  ce("dh-b5-019", TAXONOMIA.assuntos.geracoes_dh,
    "No debate doutrinário contemporâneo entre o Universalismo e o Relativismo Cultural, a perspectiva do 'Universalismo de Chegada' (ou universalismo dialógico) sustenta que a universalidade dos direitos humanos não deve ser imposta de modo unilateral pelo etnocentrismo ocidental, mas sim construída progressivamente mediante o diálogo intercultural e o respeito às singularidades locais, resguardado sempre o núcleo essencial da dignidade da pessoa humana.",
    true,
    "O universalismo de chegada (proposto por autores como Boaventura de Sousa Santos e Joaquín Herrera Flores) defende a construção dialógica e multicultural dos direitos humanos, repudiando imposições hegemônicas sem abrir mão do núcleo irredutível da dignidade humana."),

  me("dh-b5-020", TAXONOMIA.assuntos.geracoes_dh,
    "Nos termos da Convenção contra a Tortura e Outros Tratamentos ou Penas Cruéis, Desumanos ou Degradantes da ONU (1984), constitui elemento caracterizador do ato de tortura:",
    "B",
    [
      ["A", "a ocorrência de dores ou sofrimentos que decorram unicamente de sanções corporais expressamente autorizadas pelo direito consuetudinário tribal.", "Incorreta. O art. 1º da Convenção exclui dores decorrentes exclusivamente de sanções legítimas, mas veda qualquer sanção física cruel."],
      ["B", "a imposição intencional de dores ou sofrimentos graves, físicos ou mentais, infligidos por funcionário público (ou por outra pessoa no exercício de funções públicas, por sua instigação ou com o seu consentimento ou aquiescência), para fins de obtenção de informação ou confissão, castigo, intimidação, coação ou motivo baseado em qualquer tipo de discriminação.", "Correta. É a definição internacional expressa do art. 1º, item 1, da Convenção contra a Tortura da ONU de 1984."],
      ["C", "a exigência de que a lesão corporal seja necessariamente de natureza gravíssima ou seguida de morte.", "Incorreta. A tortura não exige lesão corporal grave ou morte consumada; o sofrimento grave físico ou mental basta."],
      ["D", "a possibilidade de invocação de ordens de superiores hierárquicos ou estado de guerra como excludentes de ilicitude.", "Incorreta. O art. 2º veda expressamente a invocação de ordem superior ou circunstâncias excepcionais (guerra, emergência) para justificar a tortura."],
      ["E", "a necessidade de prévia declaração formal de hostilidade pelo Estado estrangeiro.", "Incorreta. Aplica-se integralmente no âmbito interno em tempos de paz."]
    ],
    "O art. 1º da Convenção contra a Tortura da ONU conceitua a tortura como a imposição de dores ou sofrimentos graves, físicos ou mentais, com a participação, instigação ou aquiescência de agentes estatais para fins específicos (obter confissão, punir, intimidar ou discriminar). O art. 2º consagra que nenhuma circunstância excepcional justifica a tortura."),

  ce("dh-b5-021", TAXONOMIA.assuntos.cadh,
    "No julgamento do Caso Herzog e outros vs. Brasil (2018), a Corte Interamericana de Direitos Humanos reconheceu que a tortura e a execução sumária do jornalista Vladimir Herzog, praticadas por agentes estatais durante a ditadura militar, qualificam-se como crime contra a humanidade, ostentando natureza imprescritível e insuscetível de anistia segundo as normas imperativas de *jus cogens* do direito internacional.",
    true,
    "A Corte IDH reafirmou que assassinatos e torturas perpetrados no contexto de ataque sistemático ou generalizado contra a população civil são crimes contra a humanidade, inadmitindo prescrição ou anistia."),

  me("dh-b5-022", TAXONOMIA.assuntos.geracoes_dh,
    "O Mecanismo Nacional de Prevenção e Combate à Tortura (MNPCT), instituído pela Lei nº 12.847/2013 em cumprimento ao Protocolo Facultativo à Convenção contra a Tortura da ONU, possui como atribuição essencial:",
    "D",
    [
      ["A", "julgar e condenar criminalmente os agentes policiais envolvidos em abusos em tribunal próprio de exceção.", "Incorreta. A atribuição é de fiscalização e prevenção, sem poder jurisdicional penal."],
      ["B", "restringir suas vistorias apenas a presídios federais de segurança máxima mediante prévia autorização judicial.", "Incorreta. O acesso é irrestrito e não depende de autorização judicial prévia."],
      ["C", "subordinar suas conclusões técnicas à aprovação prévia da cúpula das polícias investigadas.", "Incorreta. O órgão goza de autonomia funcional e independência."],
      ["D", "realizar visitas periódicas e regulares, sem necessidade de aviso prévio ou consentimento de autoridades, a quaisquer locais de privação de liberdade (estabelecimentos penais, socioeducativos, hospitais de custódia, delegacias de polícia e unidades militares), com livre acesso a pessoas e registros.", "Correta. Competência expressa da Lei nº 12.847/2013 (art. 9º)."],
      ["E", "executar prisões cautelares de delegados e juízes sem participação do Ministério Público.", "Incorreta. O órgão não detém poder de polícia repressiva."]
    ],
    "O Mecanismo Nacional de Prevenção e Combate à Tortura tem a prerrogativa legal de inspecionar qualquer local de privação de liberdade sem aviso prévio, emitindo recomendações e relatórios para prevenir a tortura e outros tratamentos cruéis."),

  ce("dh-b5-023", TAXONOMIA.assuntos.cadh,
    "O princípio do *non-refoulement* (não devolução), consagrado no art. 22, item 8, da Convenção Americana sobre Direitos Humanos e na Convenção das Nações Unidas sobre o Estatuto dos Refugiados de 1951, veda que um estrangeiro seja expulso ou devolvido a país onde sua vida ou liberdade pessoal estejam em risco de violação em razão de raça, nacionalidade, religião, condição social ou opiniões políticas.",
    true,
    "O non-refoulement é garantia fundamental de direito internacional que impede a extradição, expulsão ou deportação de pessoa para país onde sofra fundado temor de perseguição ou tortura."),

  me("dh-b5-024", TAXONOMIA.assuntos.cadh,
    "A respeito do Caso Empregados da Fábrica de Fogos de Santo Antônio de Jesus e seus familiares vs. Brasil (2020), a Corte Interamericana de Direitos Humanos consolidou o entendimento de que:",
    "A",
    [
      ["A", "o Estado tem o dever de fiscalizar rigorosamente atividades industriais perigosas e que a omissão estatal perante acidentes letais em contextos de pobreza e discriminação interseccional (trabalhadoras mulheres, negras e crianças) acarreta a violação dos direitos à vida, à integridade pessoal e ao trabalho em condições justas e equitativas.", "Correta. A Corte IDH reconheceu a responsabilidade internacional do Brasil pela falta de fiscalização e por discriminação estrutural interseccional."],
      ["B", "a responsabilidade por acidentes em indústrias pirotécnicas privadas é exclusiva dos sócios, exonerando integralmente o Estado brasileiro.", "Incorreta. O Estado foi condenado pela grave omissão regulatória e fiscalizatória."],
      ["C", "o trabalho infantil e em condições análogas às de escravo goza de imunidade de jurisdição perante a Corte IDH.", "Incorreta. É expressamente repudiado."],
      ["D", "a indenização fixada pela Corte IDH pode ser compensada com títulos da dívida agrária estadual.", "Incorreta. As reparações devem ser efetivas e integrais em pecúnia e medidas estruturantes."],
      ["E", "o Estado não responde por omissões de órgãos municipais de fiscalização urbana.", "Incorreta. O Estado nacional responde pela totalidade de seus entes federativos no plano internacional."]
    ],
    "No Caso Fábrica de Fogos de Santo Antônio de Jesus, a Corte IDH responsabilizou o Brasil pela omissão na fiscalização de atividades perigosas e analisou pioneiramente a discriminação estrutural interseccional baseada em gênero, raça e pobreza."),

  ce("dh-b5-025", TAXONOMIA.assuntos.geracoes_dh,
    "A Convenção sobre os Direitos das Pessoas com Deficiência e seu Protocolo Facultativo (ONU, 2007) foi o primeiro tratado internacional de direitos humanos aprovado pelo Congresso Nacional sob o rito do art. 5º, § 3º, da Constituição Federal, possuindo equivalência material e formal de Emenda Constitucional no ordenamento jurídico brasileiro (Decreto Legislativo nº 186/2008 e Decreto Executivo nº 6.949/2009).",
    true,
    "A CDPD foi promulgada com status de Emenda Constitucional no Brasil, inaugurando o bloco de constitucionalidade derivado do rito qualificado da EC 45/2004."),

  me("dh-b5-026", TAXONOMIA.assuntos.cadh,
    "No histórico Caso Ximenes Lopes vs. Brasil (2006) — a primeira condenação do Estado brasileiro pela Corte Interamericana de Direitos Humanos —, a controvérsia jurídica centrou-se:",
    "C",
    [
      ["A", "na extradição de ex-diplomata acusado de crimes eleitorais.", "Incorreta. O caso não versou sobre diplomatas nem extradição."],
      ["B", "no direito de greve dos servidores policiais civis e militares.", "Incorreta. O caso tratava de paciente psiquiátrico."],
      ["C", "na morte violenta e maus-tratos infligidos a Damião Ximenes Lopes, pessoa portadora de deficiência mental internada em clínica psiquiátrica conveniada ao Sistema Único de Saúde (SUS), afirmando o dever de especial proteção e cuidado que o Estado deve aos indivíduos em situação de vulnerabilidade psíquica sob sua custódia direta ou delegada.", "Correta. Foi a primeira condenação do Brasil na Corte IDH, marcando a tutela dos direitos das pessoas com sofrimento mental."],
      ["D", "na demarcação de terras indígenas na faixa de fronteira internacional.", "Incorreta. Esse tema foi tratado no Caso Povo Xucuru e outros."],
      ["E", "na privatização de rodovias federais sem audiência pública prévia.", "Incorreta. Não tem correlação com o caso."]
    ],
    "O Caso Ximenes Lopes vs. Brasil (2006) foi o primeiro caso julgado pela Corte IDH contra o Brasil, consagrando a responsabilidade estatal por violações cometidas em instituições privadas conveniadas ao SUS e o dever de proteção qualificada a pessoas com deficiência mental."),

  ce("dh-b5-027", TAXONOMIA.assuntos.cadh,
    "No Caso Trabalhadores da Fazenda Brasil Verde vs. Brasil (2016), a Corte Interamericana de Direitos Humanos condenou o Estado brasileiro pela prática de trabalho forçado e servidão por dívidas, tornando-se a primeira decisão da Corte IDH a interpretar a proibição da escravidão e da servidão (art. 6º da CADH) sob a ótica das formas contemporâneas de escravidão e discriminação estrutural.",
    true,
    "O Caso Fazenda Brasil Verde marcou a primeira condenação internacional do Brasil por trabalho escravo contemporâneo e tráfico de pessoas para fins de exploração laboral."),

  me("dh-b5-028", TAXONOMIA.assuntos.cadh,
    "A garantia da apresentação do preso sem demora perante um juiz (audiência de custódia), expressamente prevista no art. 7º, item 5, da Convenção Americana sobre Direitos Humanos (CADH) e incorporada ao art. 310 do CPP, tem como finalidade primordial:",
    "B",
    [
      ["A", "interrogar o indiciado sobre o mérito probatório da acusação sem a presença de defensor técnico.", "Incorreta. A audiência de custódia não serve para colheita antecipada de prova de mérito e exige defesa técnica."],
      ["B", "controlar a legalidade e a necessidade da prisão cautelar, prevenir e apurar a ocorrência de tortura ou maus-tratos policiais e deliberar sobre a concessão de liberdade provisória ou aplicação de medidas cautelares diversas.", "Correta. É o núcleo protetivo da audiência de custódia segundo a CADH, o STF (ADPF 347) e a Resolução 213/CNJ."],
      ["C", "promover a execução imediata da pena privativa de liberdade dispensando a fase instrutória do processo.", "Incorreta. A audiência de custódia analisa a custódia cautelar flagrancial, não a condenação definitiva."],
      ["D", "determinar o confinamento obrigatório do preso em regime disciplinar diferenciado.", "Incorreta. O RDD é sanção disciplinar excepcional com procedimento próprio."],
      ["E", "autorizar os policiais condutores a realizarem revista vexatória nos parentes do custodiado presentes no fórum.", "Incorreta. Revista vexatória é vedada pelo ordenamento."]
    ],
    "A audiência de custódia é garantia convencional (art. 7º, 5, CADH) e processual (art. 310 do CPP) que visa verificar a legalidade da prisão, a higidez física e mental do custodiado (investigando indícios de tortura) e a real necessidade da manutenção da segregação cautelar."),

  ce("dh-b5-029", TAXONOMIA.assuntos.cadh,
    "A Convenção Interamericana para Prevenir, Punir e Erradicar a Violência contra a Mulher (Convenção de Belém do Pará de 1994) impõe aos Estados-partes a obrigação de agir com a devida diligência (*due diligence*) para prevenir, investigar e punir a violência contra a mulher praticada no âmbito público ou privado, obrigação que fundamentou a Recomendação nº 54 da Comissão Interamericana no Caso Maria da Penha Fernandes vs. Brasil.",
    true,
    "A Convenção de Belém do Pará e o Caso Maria da Penha (Relatório 54/2001 da CIDH) foram determinantes para o reconhecimento da omissão estatal sistemática e a criação da Lei nº 11.340/2006 (Lei Maria da Penha)."),

  me("dh-b5-030", TAXONOMIA.assuntos.geracoes_dh,
    "Em consonância com a Portaria Interministerial nº 4.226/2010 (Diretrizes sobre o Uso da Força pelos Profissionais de Segurança Pública), assinale a afirmativa correta.",
    "A",
    [
      ["A", "O uso da força por policiais é regido pelos princípios da legalidade, necessidade, proporcionalidade, moderação e conveniência, devendo o uso de armas de fogo ser reservado exclusivamente para repelir agressão injusta e iminente que ameace a vida ou a integridade física de outrem ou do próprio policial.", "Correta. Diretriz expressa da Portaria Interministerial nº 4.226/2010."],
      ["B", "O disparo de arma de fogo de advertência contra pessoas em fuga desarmadas é procedimento padrão obrigatório.", "Incorreta. Disparos de advertência são expressamente desaconselhados e vedados contra veículos em fuga ou fugitivos desarmados."],
      ["C", "Os agentes de segurança pública são autorizados a utilizar força letal contra veículos que desobedeçam a bloqueio policial sem que haja ameaça iminente de morte.", "Incorreta. A Portaria veda o disparo letal contra veículos em fuga desprovidos de ameaça letal iminente."],
      ["D", "O Estado não é obrigado a fornecer equipamentos de menor potencial ofensivo e de proteção individual aos policiais em serviço de patrulhamento.", "Incorreta. O fornecimento de EPI e armas de menor potencial ofensivo é diretriz obrigatória do Estado."],
      ["E", "O policial está isento de prestar socorro imediato à pessoa atingida por disparo de arma de fogo por ele efetuado.", "Incorreta. É dever estrito e imediato do policial prestar ou providenciar socorro médico aos feridos."]
    ],
    "A Portaria Interministerial 4.226/2010 alinha a atuação das polícias aos padrões da ONU (PBUFAF), vedando disparos de advertência e tiros contra veículos que furem bloqueio sem representar ameaça imediata à vida."),

  ce("dh-b5-031", TAXONOMIA.assuntos.dudh,
    "De acordo com a Declaração Universal dos Direitos Humanos (art. 14) e a ordem constitucional brasileira (art. 5º, LII), o direito de procurar e gozar asilo político não pode ser invocado em caso de perseguição legitimamente motivada por crimes comuns de direito comum ou por atos contrários aos propósitos e princípios das Nações Unidas.",
    true,
    "O asilo político protege quem sofre perseguição política, ideológica ou religiosa legítima, não abrigando autores de crimes comuns, crimes contra a humanidade ou atos terroristas."),

  me("dh-b5-032", TAXONOMIA.assuntos.geracoes_dh,
    "Os Princípios de Yogyakarta (2006), elaborados por especialistas internacionais em direitos humanos, tratam especificamente:",
    "C",
    [
      ["A", "da repressão aduaneira ao contrabando de pedras preciosas no sudeste asiático.", "Incorreta. Princípios de direitos humanos de gênero."],
      ["B", "da regulamentação das moedas virtuais e ativos digitais descentralizados.", "Incorreta. Não trata de finanças digitais."],
      ["C", "da aplicação da legislação internacional de direitos humanos em relação à orientação sexual e à identidade de gênero, afirmando o direito de todas as pessoas à igualdade perante a lei, à não discriminação e ao livre desenvolvimento da personalidade.", "Correta. Os Princípios de Yogyakarta são o marco de referência global sobre direitos LGBTQIA+ e igualdade de gênero."],
      ["D", "da defesa cibernética militar das redes críticas de energia nuclear.", "Incorreta. Não tem correlação com Yogyakarta."],
      ["E", "da permissão irrestrita de extradição sumária de líderes sindicais.", "Incorreta. Yogyakarta trata de orientação sexual e identidade de gênero."]
    ],
    "Os Princípios de Yogyakarta consolidam as obrigações internacionais dos Estados quanto ao respeito, proteção e garantia dos direitos humanos da população LGBTQIA+, orientando políticas públicas de segurança e persecução penal sem discriminação."),

  ce("dh-b5-033", TAXONOMIA.assuntos.geracoes_dh,
    "A Convenção Interamericana contra o Racismo, a Discriminação Racial e Formas Correlatas de Intolerância (promulgada no Brasil pelo Decreto nº 10.932/2022) foi aprovada pelo Congresso Nacional na forma do art. 5º, § 3º, da CF/88, integrando o bloco de constitucionalidade brasileiro com *status* equivalente a Emenda Constitucional.",
    true,
    "A Convenção Interamericana contra o Racismo foi aprovada pelo quórum de 3/5 e 2 turnos, passando a vigorar no Brasil com status de emenda constitucional."),

  me("dh-b5-034", TAXONOMIA.assuntos.geracoes_dh,
    "O Tribunal Penal Internacional (TPI), criado pelo Estatuto de Roma de 1998 e cuja jurisdição o Brasil aceitou expressamente no art. 5º, § 4º, da Constituição Federal (EC 45/2004), rege-se pelo princípio da:",
    "B",
    [
      ["A", "universalidade absoluta primária, avocando qualquer investigação criminal instaurada pela Polícia Federal brasileira independentemente da vontade nacional.", "Incorreta. O TPI não é órgão de instância ordinária de revisão nem atua primariamente sobre as polícias nacionais."],
      ["B", "complementaridade (ou subsidiariedade), atuando apenas quando a jurisdição penal nacional do Estado for incapaz de conduzir a investigação/processamento ou não tiver a disposição genuína de fazê-lo (*unwilling or unable*).", "Correta. O art. 17 do Estatuto de Roma consagra o princípio da complementaridade do TPI."],
      ["C", "imunidade absoluta vitalícia para todos os chefes de Estado e generais militares.", "Incorreta. O art. 27 do Estatuto de Roma afasta imunidades de chefes de Estado ou de governo."],
      ["D", "aplicação retroativa da lei penal a fatos ocorridos no século XIX.", "Incorreta. O TPI rege-se pelo princípio da irretroatividade da lei penal (art. 24)."],
      ["E", "execução sumária sem julgamento de suspeitos de crimes ambientais leves.", "Incorreta. Julga genocídio, crimes contra a humanidade, crimes de guerra e agressão com devido processo legal."]
    ],
    "O art. 5º, § 4º, da CF/88 reconhece a jurisdição do TPI, que opera sob o princípio da complementaridade: o Tribunal Penal Internacional somente atua se os tribunais nacionais não puderem ou não quiserem julgar genuinamente os crimes mais graves de repercussão internacional."),

  ce("dh-b5-035", TAXONOMIA.assuntos.cadh,
    "Nas medidas de reparação integral determinadas pela Corte Interamericana de Direitos Humanos, as 'garantias de não repetição' englobam reformas estruturais na legislação interna, capacitação contínua de forças policiais em direitos humanos e o fortalecimento de corregedorias autônomas e do controle externo da atividade policial pelo Ministério Público.",
    true,
    "As garantias de não repetição (parte das medidas de reparação integral da Corte IDH) buscam erradicar as causas estruturais das violações de direitos humanos para impedir a reincidência de abusos estatais.")
];
