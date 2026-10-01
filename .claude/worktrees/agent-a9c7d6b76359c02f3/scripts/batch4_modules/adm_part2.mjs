import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.administrativo;
const aAtos = TAXONOMIA.assuntos.atos_adm;
const aRespCivil = TAXONOMIA.assuntos.responsabilidade_civil;

export const admPart2 = [
  // 21
  {
    idSlug: "adm-l4-21",
    disciplina_id: dId,
    assunto_id: aAtos,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "São elementos ou requisitos de validade de todo ato administrativo: a competência, a finalidade, a forma, o motivo e o objeto (mnemônico COFIFOMOB). Desses, a competência e a forma (quando não exigida como essencial pela lei) admitem convalidação quando apresentarem vícios sanáveis que não acarretem lesão ao interesse público nem prejuízo a terceiros.",
    explicacao: "GABARITO: CERTO. O art. 55 da Lei nº 9.784/1999 prevê expressamente a convalidação de atos com defeitos sanáveis na competência (desde que não privativa) e na forma (desde que não seja requisito essencial à solenidade do ato), desde que não haja lesão ao interesse público nem prejuízo a terceiros.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 22
  {
    idSlug: "adm-l4-22",
    disciplina_id: dId,
    assunto_id: aAtos,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Os atributos dos atos administrativos conferem-lhes prerrogativas de direito público indispensáveis à atuação estatal em prol da coletividade. O atributo pelo qual o ato administrativo se impõe a terceiros independentemente de sua concordância prévia, criando obrigações ou impondo restrições de forma unilateral, é denominado:",
    explicacao: "GABARITO: Letra A. Trata-se da imperatividade (ou coercibilidade), atributo que permite à Administração impor unilateralmente suas determinações e restrições aos administrados, sem necessidade de anuência prévia deles.",
    alternativas: [
      { letra: "A", texto: "Imperatividade.", correta: true },
      { letra: "B", texto: "Tipicidade.", correta: false },
      { letra: "C", texto: "Presunção de veracidade.", correta: false },
      { letra: "D", texto: "Autoexecutoriedade.", correta: false },
      { letra: "E", texto: "Exigibilidade recursal.", correta: false }
    ]
  },
  // 23
  {
    idSlug: "adm-l4-23",
    disciplina_id: dId,
    assunto_id: aAtos,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A presunção de legitimidade e veracidade dos atos administrativos é de natureza relativa (juris tantum), transferindo para o particular o ônus de provar a eventual ilegalidade do ato ou a inveracidade dos fatos certificados pelo agente público.",
    explicacao: "GABARITO: CERTO. A presunção de legitimidade (conformidade do ato com o direito) e de veracidade (veracidade dos fatos narrados pelo agente) é relativa (juris tantum). O ato goza de presunção de validade até prova em contrário, competindo ao administrado comprovar o alegado vício.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 24
  {
    idSlug: "adm-l4-24",
    disciplina_id: dId,
    assunto_id: aAtos,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A extinção de um ato administrativo decorrente da superveniência de lei nova que tornou juridicamente inviável ou proibida a manutenção daquela situação jurídica anteriormente válida é classificada como:",
    explicacao: "GABARITO: Letra C. A caducidade (ou decaimento) ocorre quando o ato administrativo se torna inválido ou ineficaz em razão da superveniência de legislação que veda a atividade ou situação anteriormente autorizada.",
    alternativas: [
      { letra: "A", texto: "Cassação administrativa.", correta: false },
      { letra: "B", texto: "Anulação ex tunc.", correta: false },
      { letra: "C", texto: "Caducidade.", correta: true },
      { letra: "D", texto: "Contraposição.", correta: false },
      { letra: "E", texto: "Renúncia tácita.", correta: false }
    ]
  },
  // 25
  {
    idSlug: "adm-l4-25",
    disciplina_id: dId,
    assunto_id: aAtos,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A cassação é a forma de extinção do ato administrativo aplicável quando o beneficiário descumpre condições legais ou regulamentares que eram indispensáveis para a continuidade do exercício do direito ou benefício concedido.",
    explicacao: "GABARITO: CERTO. A cassação funciona como sanção administrativa decorrente de culpa do administrado que deixou de cumprir os requisitos legais ou regulamentares estabelecidos para a fruição da vantagem (ex.: cassação de licença de funcionamento de estabelecimento que passou a vender produtos ilícitos).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 26
  {
    idSlug: "adm-l4-26",
    disciplina_id: dId,
    assunto_id: aAtos,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre a teoria das nulidades dos atos administrativos, é correto afirmar que são vícios insanáveis que acarretam a nulidade absoluta do ato:",
    explicacao: "GABARITO: Letra B. Vícios de finalidade (desvio de finalidade/poder), motivo inexistente ou juridicamente falso e objeto ilícito, impossível ou indeterminado são insanáveis e geram nulidade absoluta insanável. Apenas a competência ratione personae/loci (desde que não exclusiva) e a forma (não essencial) admitem convalidação.",
    alternativas: [
      { letra: "A", texto: "O vício de competência delegável e a ausência de timbre oficial.", correta: false },
      { letra: "B", texto: "O desvio de finalidade, a falsidade do motivo e a ilicitude do objeto.", correta: true },
      { letra: "C", texto: "O erro material de grafia no nome do beneficiário.", correta: false },
      { letra: "D", texto: "A publicação com atraso de 24 horas no diário oficial.", correta: false },
      { letra: "E", texto: "A assinatura por autoridade em substituição regulamentar.", correta: false }
    ]
  },
  // 27
  {
    idSlug: "adm-l4-27",
    disciplina_id: dId,
    assunto_id: aRespCivil,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A responsabilidade civil das pessoas jurídicas de direito público e das de direito privado prestadoras de serviços públicos por atos comissivos de seus agentes é objetiva, sob a modalidade do risco administrativo, o que dispensa a vítima de comprovar a culpa ou dolo do agente, admitindo, contudo, a atenuação ou exclusão do dever de indenizar nos casos de culpa concorrente ou exclusiva da vítima, caso fortuito ou força maior.",
    explicacao: "GABARITO: CERTO. Trata-se da teoria do risco administrativo consagrada no art. 37, § 6º, da CF/88. A responsabilidade estatal é objetiva quanto a condutas comissivas de seus agentes, exigindo nexo de causalidade e dano, mas permitindo causas excludentes/atenuantes de nexo causal.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 28
  {
    idSlug: "adm-l4-28",
    disciplina_id: dId,
    assunto_id: aRespCivil,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em decisão paradigmática sob a sistemática da repercussão geral (Tema 940 - RE 1.027.633), o Supremo Tribunal Federal fixou a tese de que a ação por danos causados por agente público no exercício de suas funções:",
    explicacao: "GABARITO: Letra A. O STF fixou no Tema 940 a seguinte tese: 'A teor do disposto no art. 37, § 6º, da Constituição Federal, a ação por danos causados por agente público deve ser ajuizada contra o Estado ou a pessoa jurídica de direito privado prestadora de serviço público, sendo parte ilegítima para figurar no polo passivo o autor do ato, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa'.",
    alternativas: [
      { letra: "A", texto: "Deve ser proposta contra o Estado ou a pessoa jurídica prestadora de serviço público, sendo o agente público parte ilegítima no polo passivo da ação indenizatória principal.", correta: true },
      { letra: "B", texto: "Pode ser proposta diretamente contra o servidor público sem inclusão obrigatória da Fazenda Pública.", correta: false },
      { letra: "C", texto: "Exige litisconsórcio passivo necessário e unitário entre o ente federativo e o servidor.", correta: false },
      { letra: "D", texto: "Fica condicionada à prévia condenação criminal transitada em julgado do agente público.", correta: false },
      { letra: "E", texto: "Submete-se ao rito sumário de juizado especial com inversão automática do ônus probatório.", correta: false }
    ]
  },
  // 29
  {
    idSlug: "adm-l4-29",
    disciplina_id: dId,
    assunto_id: aRespCivil,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em caso de morte de detento sob custódia estatal em estabelecimento prisional, a responsabilidade civil do Estado é objetiva, decorrente do dever específico de proteção e incolumidade física insculpido no art. 5º, XLIX, da CF/88 (Tema 592 do STF), salvo se o Estado comprovar que a morte decorreu de causa inevitável e estranha ao seu dever de vigilância.",
    explicacao: "GABARITO: CERTO. No Tema 592 do STF (RE 841.526), firmou-se que em caso de inobservância do seu dever específico de proteção (art. 5º, XLIX, da CF/88), o Estado responde objetivamente pelos danos decorrentes da morte de detento sob custódia, aplicando-se a teoria do risco administrativo.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 30
  {
    idSlug: "adm-l4-30",
    disciplina_id: dId,
    assunto_id: aRespCivil,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A teoria do risco integral é modalidade extremada da responsabilidade civil objetiva na qual o Estado responde pelo dano sem a possibilidade de invocar excludentes de nexo causal como caso fortuito, força maior ou culpa exclusiva da vítima. No ordenamento jurídico brasileiro, adota-se a teoria do risco integral na responsabilização por:",
    explicacao: "GABARITO: Letra B. No Brasil, a teoria do risco integral é excepcionalíssima, sendo aplicada em: 1) Danos nucleares (art. 21, XXIII, 'd', da CF/88); 2) Danos ambientais (segundo corrente jurisprudencial do STJ); 3) Atos terroristas ou de guerra contra aeronaves de matrícula brasileira (Lei nº 10.744/2003).",
    alternativas: [
      { letra: "A", texto: "Acidentes de trânsito em rodovias federais sem sinalização.", correta: false },
      { letra: "B", texto: "Danos nucleares e atentados terroristas contra aeronaves comerciais de bandeira brasileira.", correta: true },
      { letra: "C", texto: "Furtos de veículos em estacionamentos públicos gratuitos.", correta: false },
      { letra: "D", texto: "Inundações urbanas causadas por chuvas extraordinárias sazonais.", correta: false },
      { letra: "E", texto: "Desapropriações regulares por utilidade pública.", correta: false }
    ]
  },
  // 31
  {
    idSlug: "adm-l4-31",
    disciplina_id: dId,
    assunto_id: aRespCivil,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na hipótese de danos decorrentes de omissão genérica do Estado (como a falta de policiamento em bairro periférico ou deficiência na conservação de via pública), a jurisprudência majoritária do STJ e STF aplica a teoria da responsabilidade subjetiva (culpa anônima ou 'faute du service'), exigindo a comprovação de que o serviço não funcionou, funcionou tardiamente ou funcionou de forma ineficiente.",
    explicacao: "GABARITO: CERTO. Nas omissões genéricas da Administração Pública, prevalece a teoria subjetiva da 'falta do serviço' (faute du service), em que a vítima deve comprovar a ineficiência, inexistência ou retardamento culposo do dever estatal genérico de agir.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 32
  {
    idSlug: "adm-l4-32",
    disciplina_id: dId,
    assunto_id: aRespCivil,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 37, § 6º, da Constituição Federal, o direito de regresso da Administração Pública em face do agente público causador do dano:",
    explicacao: "GABARITO: Letra C. A responsabilidade do Estado perante a vítima é objetiva (independe de culpa). Porém, a ação regressiva do Estado contra o agente público é subjetiva, dependendo da comprovação inequívoca de dolo ou culpa do servidor.",
    alternativas: [
      { letra: "A", texto: "Independe da verificação de culpa ou dolo do agente público.", correta: false },
      { letra: "B", texto: "É imprescritível e automática, independentemente de processo disciplinar.", correta: false },
      { letra: "C", texto: "Condiciona-se à comprovação de culpa ou dolo do agente público (responsabilidade subjetiva).", correta: true },
      { letra: "D", texto: "Pode ser exercido antes mesmo de o Estado indenizar a vítima do dano.", correta: false },
      { letra: "E", texto: "Fica obstado caso o servidor tenha sido absolvido na esfera cível por prescrição.", correta: false }
    ]
  },
  // 33
  {
    idSlug: "adm-l4-33",
    disciplina_id: dId,
    assunto_id: aAtos,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O atributo da tipicidade, defendido pela doutrina de Maria Sylvia Zanella Di Pietro, consiste na necessidade de o ato administrativo corresponder a figuras previamente definidas pela lei como aptas a produzir determinados efeitos jurídicos, garantindo a proteção dos administrados contra atos discricionários inominados e abusivos.",
    explicacao: "GABARITO: CERTO. A tipicidade é o atributo pelo qual o ato administrativo deve corresponder a figuras predefinidas em lei aptas a produzir determinados efeitos, impedindo a criação unilateral de atos administrativos arbitrários ou sem amparo normativo.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 34
  {
    idSlug: "adm-l4-34",
    disciplina_id: dId,
    assunto_id: aAtos,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "A licença para dirigir veículo automotor e a licença para construir são exemplos clássicos de atos administrativos unilaterais e:",
    explicacao: "GABARITO: Letra A. As licenças são atos administrativos unilaterais e vinculados. Preenchidos os requisitos legais e regulamentares pelo administrado, a Administração é obrigada a expedir o ato, não havendo margem de discricionariedade ou conveniência.",
    alternativas: [
      { letra: "A", texto: "Vinculados, em que a Administração não possui juízo de conveniência e oportunidade.", correta: true },
      { letra: "B", texto: "Discricionários, revogáveis a qualquer momento sem indenização.", correta: false },
      { letra: "C", texto: "Complexos, dependentes de homologação judicial prévia.", correta: false },
      { letra: "D", texto: "Bilaterais, celebrados mediante contrato formal de adesão.", correta: false },
      { letra: "E", texto: "Precários, outorgados no interesse exclusivo da chefia executiva.", correta: false }
    ]
  },
  // 35
  {
    idSlug: "adm-l4-35",
    disciplina_id: dId,
    assunto_id: aRespCivil,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Estado não responde civilmente por danos causados a terceiros por disparos de arma de fogo efetuados por policial de folga, caso a conduta seja praticada em contexto de litígio estritamente privado e com arma desprovida de vinculação com a corporação policial.",
    explicacao: "GABARITO: CERTO. A responsabilidade do Estado exige que o agente atue 'nessa qualidade' (art. 37, § 6º, da CF/88). Quando o policial atua de folga, em desavença de ordem estritamente privada, sem utilizar prerrogativa da função nem ostentar a condição pública, o nexo causal funcional é rompido, afastando a responsabilidade civil do Estado.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 36
  {
    idSlug: "adm-l4-36",
    disciplina_id: dId,
    assunto_id: aAtos,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Diferencia-se ato administrativo complexo de ato composto porque o ato complexo:",
    explicacao: "GABARITO: Letra A. O ato complexo resulta da manifestação de vontades de dois ou mais órgãos diferentes que se fundem para formar um único ato (ex.: investidura de Ministro do STF: indicação do Presidente + aprovação do Senado + nomeação). O ato composto resulta da manifestação de um único órgão principal, dependendo de outro apenas para aprovação, visto ou homologação como condição de exequibilidade.",
    alternativas: [
      { letra: "A", texto: "Resulta da conjugação de vontades de dois ou mais órgãos distintos para a formação de um único ato.", correta: true },
      { letra: "B", texto: "Produz efeitos em múltiplos ramos do direito civil e penal simultaneamente.", correta: false },
      { letra: "C", texto: "Depende de parecer jurídico vinculante emitido por órgão subordinado.", correta: false },
      { letra: "D", texto: "Não admite revogação por motivo de interesse público superveniente.", correta: false },
      { letra: "E", texto: "Exige quórum qualificado de dois terços para ser convalidado.", correta: false }
    ]
  },
  // 37
  {
    idSlug: "adm-l4-37",
    disciplina_id: dId,
    assunto_id: aRespCivil,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "As concessionárias e permissionárias de serviços públicos respondem objetivamente pelos danos que seus agentes causarem a terceiros usuários e a terceiros não usuários do serviço público, conforme tese fixada pelo STF no julgamento do RE 591.874 (Tema 130).",
    explicacao: "GABARITO: CERTO. No Tema 130 de Repercussão Geral (RE 591.874), o Plenário do STF consagrou que a responsabilidade civil das pessoas jurídicas de direito privado prestadoras de serviço público é objetiva mesmo em relação a terceiros não usuários do serviço.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 38
  {
    idSlug: "adm-l4-38",
    disciplina_id: dId,
    assunto_id: aAtos,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A revogação de um ato administrativo atinge ato válido e eficaz que se tornou inoportuno ou inconveniente ao interesse público. São atos insuscetíveis de revogação, EXCETO:",
    explicacao: "GABARITO: Letra E. As autorizações administrativas são atos discricionários e precários, sendo amplamente passíveis de revogação por motivo de conveniência e oportunidade. Não se revogam: atos vinculados (ex.: licenças), atos consumados/exauridos, atos que geraram direitos adquiridos, atos integrantes de procedimento já precluso e atos meramente enunciativos (ex.: certidões/atestados).",
    alternativas: [
      { letra: "A", texto: "Atos vinculados que cumpriram todos os requisitos legais.", correta: false },
      { letra: "B", texto: "Atos que já exauriram todos os seus efeitos (consumados).", correta: false },
      { letra: "C", texto: "Atos que geraram direito adquirido para o administrado.", correta: false },
      { letra: "D", texto: "Atos meramente enunciativos ou declaratórios, como certidões.", correta: false },
      { letra: "E", texto: "Autorizações administrativas de uso precário de bem público.", correta: true }
    ]
  },
  // 39
  {
    idSlug: "adm-l4-39",
    disciplina_id: dId,
    assunto_id: aRespCivil,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A prescrição da pretensão indenizatória em face da Fazenda Pública por responsabilidade civil do Estado consuma-se no prazo de cinco anos, a teor do disposto no art. 1º-C da Lei nº 9.494/1997 e no Decreto nº 20.910/1932.",
    explicacao: "GABARITO: CERTO. As ações de indenização por danos causados pela Fazenda Pública prescrevem em cinco anos (prazo quinquenal), prevalecendo o regime especial do Decreto nº 20.910/1932 e da Lei nº 9.494/1997 sobre a regra trienal do Código Civil.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 40
  {
    idSlug: "adm-l4-40",
    disciplina_id: dId,
    assunto_id: aAtos,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Quando a autoridade administrativa edita um ato de remoção de policial civil como forma de puni-lo por desavenças de ordem pessoal, mascarando a medida sob o pretexto de 'necessidade do serviço', o ato administrativo padece de nulidade por vício insanável de:",
    explicacao: "GABARITO: Letra B. Trata-se de desvio de finalidade (ou desvio de poder), que configura vício insanável no elemento finalidade do ato administrativo, acarretando sua nulidade absoluta nos termos da Lei de Ação Popular (Lei nº 4.717/1965, art. 2º, 'e').",
    alternativas: [
      { letra: "A", texto: "Forma.", correta: false },
      { letra: "B", texto: "Finalidade (desvio de finalidade).", correta: true },
      { letra: "C", texto: "Competência territorial.", correta: false },
      { letra: "D", texto: "Caducidade procedimental.", correta: false },
      { letra: "E", texto: "Tipicidade mitigada.", correta: false }
    ]
  }
];
