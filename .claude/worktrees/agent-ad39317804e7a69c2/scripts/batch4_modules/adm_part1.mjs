import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.administrativo;
const aPrincipios = TAXONOMIA.assuntos.principios_limpe;
const aPoderes = TAXONOMIA.assuntos.poderes_adm;

export const admPart1 = [
  // 01
  {
    idSlug: "adm-l4-01",
    disciplina_id: dId,
    assunto_id: aPrincipios,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O princípio da impessoalidade veda a promoção pessoal de autoridades ou servidores públicos sobre suas realizações administrativas, exigindo que a publicidade dos atos, programas, obras, serviços e campanhas dos órgãos públicos tenha caráter estritamente educativo, informativo ou de orientação social, dela não podendo constar nomes, símbolos ou imagens que caracterizem promoção pessoal.",
    explicacao: "GABARITO: CERTO. Trata-se do desdobramento constitucional do princípio da impessoalidade estabelecido expressamente no art. 37, § 1º, da CF/88, vedando a vinculação de símbolos, nomes ou imagens individuais a realizações estatais.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 02
  {
    idSlug: "adm-l4-02",
    disciplina_id: dId,
    assunto_id: aPrincipios,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Administração Pública pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos e ressalvada, em todos os casos, a apreciação judicial. Essa prerrogativa decorre diretamente do princípio da:",
    explicacao: "GABARITO: Letra B. Trata-se do princípio da autotutela administrativa, consagrado nas Súmulas 346 e 473 do STF e no art. 53 da Lei nº 9.784/1999.",
    alternativas: [
      { letra: "A", texto: "Continuidade dos serviços públicos.", correta: false },
      { letra: "B", texto: "Autotutela administrativa.", correta: true },
      { letra: "C", texto: "Tutela ou controle finalístico.", correta: false },
      { letra: "D", texto: "Especialidade orgânica.", correta: false },
      { letra: "E", texto: "Segurança jurídica estrita.", correta: false }
    ]
  },
  // 03
  {
    idSlug: "adm-l4-03",
    disciplina_id: dId,
    assunto_id: aPrincipios,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O princípio da moralidade administrativa possui autonomia jurídica, permitindo a anulação judicial de ato administrativo que viole a probidade, a boa-fé e a lealdade institucional, ainda que o agente público tenha atuado formalmente dentro dos limites da lei escrita.",
    explicacao: "GABARITO: CERTO. A jurisprudência do STF e STJ reconhece que o princípio da moralidade administrativa (art. 37, caput, da CF/88) possui densidade normativa autônoma. O ato administrativo pode ser formalmente legal e substancialmente imoral, ensejando sua anulação judicial por vício de desvio ético ou finalístico.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 04
  {
    idSlug: "adm-l4-04",
    disciplina_id: dId,
    assunto_id: aPrincipios,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "São princípios expressos da Administração Pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios, constantes do caput do art. 37 da Constituição Federal (mnemônico LIMPE):",
    explicacao: "GABARITO: Letra A. O caput do art. 37 da CF/88 consagra como princípios expressos da Administração Pública: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (incluído pela EC nº 19/1998).",
    alternativas: [
      { letra: "A", texto: "Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.", correta: true },
      { letra: "B", texto: "Lealdade, Isonomia, Motivação, Proporcionalidade e Equidade.", correta: false },
      { letra: "C", texto: "Legalidade, Razoabilidade, Moralidade, Segurança Jurídica e Continuidade.", correta: false },
      { letra: "D", texto: "Liberdade, Igualdade, Modicidade, Prevenção e Eficácia.", correta: false },
      { letra: "E", texto: "Legitimidade, Imprescritibilidade, Merecimento, Produtividade e Estabilidade.", correta: false }
    ]
  },
  // 05
  {
    idSlug: "adm-l4-05",
    disciplina_id: dId,
    assunto_id: aPrincipios,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, inclusive, da autoridade nomeante ou de servidor da mesma pessoa jurídica investido em cargo de direção, chefia ou assessoramento, para o exercício de cargo em comissão ou de confiança viola a Constituição Federal, conforme a Súmula Vinculante 13 do STF.",
    explicacao: "GABARITO: CERTO. A Súmula Vinculante 13 do STF veda a prática do nepotismo na Administração Pública direta e indireta de todos os Poderes, por ofensa direta aos princípios da impessoalidade, moralidade e eficiência.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 06
  {
    idSlug: "adm-l4-06",
    disciplina_id: dId,
    assunto_id: aPoderes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O poder de polícia é a atividade da administração pública que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou a abstenção de fato, em razão de interesse público concernente à segurança, à higiene, à ordem, aos costumes ou ao respeito à propriedade (art. 78 do CTN). São atributos clássicos do poder de polícia:",
    explicacao: "GABARITO: Letra C. A doutrina administrativista (Hely Lopes Meirelles, Maria Sylvia Zanella Di Pietro) aponta como atributos do poder de polícia: a discricionariedade (margem de opção em regra, ressalvadas licenças vinculadas), a autoexecutoriedade (execução direta pelo Estado sem necessidade de intervenção judicial prévia) e a coercibilidade (imposição forçada do ato perante os administrados).",
    alternativas: [
      { letra: "A", texto: "Indivisibilidade, imprescritibilidade e tipicidade.", correta: false },
      { letra: "B", texto: "Hierarquia, subordinação e delegação obrigatória.", correta: false },
      { letra: "C", texto: "Discricionariedade, autoexecutoriedade e coercibilidade.", correta: true },
      { letra: "D", texto: "Inalienabilidade, impenhorabilidade e presunção de culpa.", correta: false },
      { letra: "E", texto: "Bilateralidade, relatividade e subsidiariedade plena.", correta: false }
    ]
  },
  // 07
  {
    idSlug: "adm-l4-07",
    disciplina_id: dId,
    assunto_id: aPoderes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O ciclo do poder de polícia desdobra-se em quatro fases: ordem de polícia (legislação), consentimento de polícia (licenças/autorizações), fiscalização de polícia (inspeções/vistorias) e sanção de polícia (multas/interdições). Segundo o STF (ADI 1.717 e RE 633.782 / Tema 532), é constitucional a delegação das fases de consentimento e fiscalização a pessoas jurídicas de direito privado integrantes da administração indireta prestadoras de serviço público em regime não concorrencial.",
    explicacao: "GABARITO: CERTO. No Tema 532 de Repercussão Geral (RE 633.782), o STF fixou a tese de que é constitucional a delegação do poder de polícia a entidades de direito privado da Administração Indireta (empresas públicas e sociedades de economia mista prestadoras de serviços públicos próprios do Estado e de capital majoritariamente público), limitando-se aos atos de fiscalização e sanção administrativa, vedada apenas a delegação da competência legislativa (ordem de polícia).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 08
  {
    idSlug: "adm-l4-08",
    disciplina_id: dId,
    assunto_id: aPoderes,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O abuso de poder administrativo é gênero que comporta duas espécies clássicas na teoria geral do direito administrativo: o excesso de poder e o desvio de poder (desvio de finalidade). Ocorre excesso de poder quando o agente público:",
    explicacao: "GABARITO: Letra B. O excesso de poder é vício de competência, ocorrendo quando o agente público atua além ou fora dos limites de sua competência legal. Já o desvio de poder (ou desvio de finalidade) é vício de finalidade, em que o agente atua dentro de sua competência formal, mas busca fim diverso daquele previsto em lei ou contrário ao interesse público.",
    alternativas: [
      { letra: "A", texto: "Atua dentro de sua competência legal, mas visa a satisfazer interesse pessoal ou político.", correta: false },
      { letra: "B", texto: "Ultrapassa os limites legais de suas atribuições ou exerce competência que a lei não lhe conferiu.", correta: true },
      { letra: "C", texto: "Deixa de motivar ato administrativo estritamente vinculado.", correta: false },
      { letra: "D", texto: "Aplica sanção com observância rigorosa do princípio da proporcionalidade.", correta: false },
      { letra: "E", texto: "Revoga ato administrativo perfeito gerador de direito adquirido.", correta: false }
    ]
  },
  // 09
  {
    idSlug: "adm-l4-09",
    disciplina_id: dId,
    assunto_id: aPoderes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O poder hierárquico confere à Administração a prerrogativa de ordenar, coordenar, controlar e corrigir as atividades de seus órgãos e agentes subordinados, autorizando a delegação e a avocação temporária de competências, desde que não se trate de atos de competência exclusiva, decisão de recursos administrativos ou edição de atos de caráter normativo.",
    explicacao: "GABARITO: CERTO. O art. 13 da Lei nº 9.784/1999 estabelece taxativamente as matérias indelegáveis (mnemônico CENORA): edição de atos de caráter normativo (NO), decisão de recursos administrativos (RE) e matérias de competência exclusiva (CE).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 10
  {
    idSlug: "adm-l4-10",
    disciplina_id: dId,
    assunto_id: aPoderes,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O poder disciplinar é a prerrogativa conferida à Administração Pública para apurar infrações e aplicar penalidades funcionais a servidores públicos e a particulares que com ela possuam vínculo jurídico específico. Diferencia-se do poder de polícia porque este último:",
    explicacao: "GABARITO: Letra A. O poder de polícia incide sobre a generalidade dos administrados (vínculo geral decorrente da supremacia geral do Estado), enquanto o poder disciplinar alcança apenas pessoas submetidas a uma relação jurídica especial com o Estado (servidores públicos e particulares contratados/concessionários).",
    alternativas: [
      { letra: "A", texto: "Incide sobre a generalidade dos administrados com base na supremacia geral do Estado.", correta: true },
      { letra: "B", texto: "Aplica-se exclusivamente aos membros do Poder Judiciário e Ministério Público.", correta: false },
      { letra: "C", texto: "Depende de autorização judicial prévia para a imposição de multas de trânsito.", correta: false },
      { letra: "D", texto: "Tem por finalidade punir infrações disciplinares praticadas por agentes públicos estáveis.", correta: false },
      { letra: "E", texto: "Exige contraditório e ampla defesa antes mesmo da lavratura do auto de infração.", correta: false }
    ]
  },
  // 11
  {
    idSlug: "adm-l4-11",
    disciplina_id: dId,
    assunto_id: aPoderes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O poder regulamentar (ou normativo) da Administração Pública permite ao Chefe do Poder Executivo editar decretos e regulamentos para a fiel execução das leis, não podendo, em regra, inovar na ordem jurídica primária nem criar direitos ou obrigações não previstos em lei.",
    explicacao: "GABARITO: CERTO. Os decretos regulamentares (art. 84, IV, da CF/88) são atos secundários destinados a viabilizar a aplicação da lei, não podendo inovar originariamente na ordem jurídica nem criar obrigações independentes de lei (princípio da legalidade). A exceção é o decreto autônomo (art. 84, VI), restrito à organização da administração sem criação de despesas nem extinção de órgãos, e extinção de cargos vagos.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 12
  {
    idSlug: "adm-l4-12",
    disciplina_id: dId,
    assunto_id: aPrincipios,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O princípio da segurança jurídica, na sua vertente subjetiva, manifesta-se através da proteção à confiança legítima dos administrados em relação aos atos praticados pelo Poder Público. Em decorrência desse princípio, o direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em:",
    explicacao: "GABARITO: Letra B. O art. 54 da Lei nº 9.784/1999 fixa o prazo decadencial de 5 (cinco) anos para a Administração Pública anular os atos administrativos favoráveis aos destinatários, contados da data em que foram praticados, salvo comprovada má-fé.",
    alternativas: [
      { letra: "A", texto: "2 anos, improrrogáveis.", correta: false },
      { letra: "B", texto: "5 anos, contados da data em que foram praticados, salvo comprovada má-fé.", correta: true },
      { letra: "C", texto: "10 anos, em qualquer hipótese, inclusive em caso de dolo.", correta: false },
      { letra: "D", texto: "3 anos, prorrogáveis por igual período pela autoridade superior.", correta: false },
      { letra: "E", texto: "Prazo indeterminado, em virtude da imprescritibilidade dos atos nulos.", correta: false }
    ]
  },
  // 13
  {
    idSlug: "adm-l4-13",
    disciplina_id: dId,
    assunto_id: aPoderes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A autoexecutoriedade do poder de polícia não está presente em todos os atos administrativos de polícia, sendo afastada, por exemplo, na cobrança coercitiva de multas administrativas não pagas espontaneamente pelo infrator, a qual exige a propositura de execução fiscal perante o Poder Judiciário.",
    explicacao: "GABARITO: CERTO. A cobrança forçada de multa não possui autoexecutoriedade. Caso o administrado não pague voluntariamente a sanção pecuniária, o Poder Público não pode penhorar seus bens de ofício, necessitando inscrever o débito em dívida ativa e ajuizar Ação de Execução Fiscal perante o Judiciário (Lei nº 6.830/1980).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 14
  {
    idSlug: "adm-l4-14",
    disciplina_id: dId,
    assunto_id: aPrincipios,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O princípio da supremacia do interesse público sobre o privado e o princípio da indisponibilidade do interesse público constituem o que a doutrina de Celso Antônio Bandeira de Mello qualifica como:",
    explicacao: "GABARITO: Letra A. Para Celso Antônio Bandeira de Mello, a supremacia do interesse público (que confere prerrogativas ao Estado) e a indisponibilidade do interesse público (que impõe sujeições e limites) formam as duas vigas-mestras do Regime Jurídico-Administrativo.",
    alternativas: [
      { letra: "A", texto: "Os pilares fundamentais do regime jurídico-administrativo.", correta: true },
      { letra: "B", texto: "Normas programáticas de eficácia contida.", correta: false },
      { letra: "C", texto: "Exceções temporárias ao princípio republicano.", correta: false },
      { letra: "D", texto: "Garantias processuais exclusivas da Defensoria Pública.", correta: false },
      { letra: "E", texto: "Fundamentos de direito privado aplicáveis aos contratos bancários.", correta: false }
    ]
  },
  // 15
  {
    idSlug: "adm-l4-15",
    disciplina_id: dId,
    assunto_id: aPoderes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "É lícito ao Poder Judiciário anular ato administrativo discricionário quando constatada a manifesta desproporcionalidade ou irrazoabilidade na sanção aplicada ou quando inexistente a motivação de fato que serviu de suporte à decisão administrativa, inexistindo, nesse controle de legalidade e legitimidade, invasão indevida do mérito administrativo.",
    explicacao: "GABARITO: CERTO. O controle judicial da discricionariedade administrativa limita-se à legalidade estrita e à conformidade com os princípios da proporcionalidade, razoabilidade e motivação fática (teoria dos motivos determinantes). O Judiciário não substitui a conveniência e oportunidade legítimas da Administração, mas pode e deve extirpar atos abusivos, desarrazoados ou desprovidos de justa causa.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 16
  {
    idSlug: "adm-l4-16",
    disciplina_id: dId,
    assunto_id: aPrincipios,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O princípio da continuidade do serviço público impõe que as atividades estatais destinadas a atender necessidades essenciais da coletividade não sofram interrupções injustificadas. Como consequência desse princípio:",
    explicacao: "GABARITO: Letra C. Em virtude do princípio da continuidade, a encampação, a reversão de bens essenciais ao término da concessão e a aplicação mitigada da exceção do contrato não cumprido (exceptio non adimpleti contractus) são garantidas para evitar a paralisação abrupta da prestação de serviços à população.",
    alternativas: [
      { letra: "A", texto: "Fica vedada a greve de qualquer trabalhador na iniciativa privada.", correta: false },
      { letra: "B", texto: "O Estado não pode realizar manutenções preventivas programadas na rede elétrica.", correta: false },
      { letra: "C", texto: "Aplica-se com restrições a exceção do contrato não cumprido contra o Poder Público nos contratos de concessão.", correta: true },
      { letra: "D", texto: "É vedada a exoneração a pedido de servidor público que exerça funções essenciais.", correta: false },
      { letra: "E", texto: "Os órgãos públicos ficam dispensados da prestação de contas anual perante os Tribunais de Contas.", correta: false }
    ]
  },
  // 17
  {
    idSlug: "adm-l4-17",
    disciplina_id: dId,
    assunto_id: aPoderes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O poder regulamentar autônomo conferido privativamente ao Presidente da República (art. 84, VI, 'a' e 'b', da CF/88) permite a edição de decreto para dispor sobre a organização e funcionamento da administração federal, desde que não implique aumento de despesa nem criação ou extinção de órgãos públicos, bem como para a extinção de funções ou cargos públicos, quando vagos.",
    explicacao: "GABARITO: CERTO. A EC nº 32/2001 introduziu os decretos autônomos no art. 84, VI, da CF/88, autorizando o Presidente da República a dispor sobre: a) organização e funcionamento da administração federal, quando não implicar aumento de despesa nem criação ou extinção de órgãos públicos; b) extinção de funções ou cargos públicos, quando vagos.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 18
  {
    idSlug: "adm-l4-18",
    disciplina_id: dId,
    assunto_id: aPrincipios,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A exigência de motivação dos atos administrativos decorre do princípio da publicidade, do contraditório e do devido processo legal. A teoria que vincula a validade do ato administrativo à existência e veracidade dos motivos fáticos e jurídicos nele invocados é denominada:",
    explicacao: "GABARITO: Letra B. Pela teoria dos motivos determinantes, a validade do ato administrativo fica vinculada aos motivos alegados pela autoridade como suporte fático e de direito para sua prática. Se os motivos forem falsos ou inexistentes, o ato é nulo, ainda que a motivação fosse originariamente facultativa.",
    alternativas: [
      { letra: "A", texto: "Teoria do risco integral mitigado.", correta: false },
      { letra: "B", texto: "Teoria dos motivos determinantes.", correta: true },
      { letra: "C", texto: "Teoria do domínio eminente do Estado.", correta: false },
      { letra: "D", texto: "Teoria dos corpos intermediários.", correta: false },
      { letra: "E", texto: "Teoria da imprevisão superveniente.", correta: false }
    ]
  },
  // 19
  {
    idSlug: "adm-l4-19",
    disciplina_id: dId,
    assunto_id: aPoderes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A revogação de ato administrativo funda-se em juízo de oportunidade e conveniência (mérito administrativo), operando efeitos retroativos (ex tunc) e atingindo direitos já consolidados pelo administrado.",
    explicacao: "GABARITO: ERRADO. A revogação baseia-se em razões de conveniência e oportunidade (mérito) em relação a um ato legal e perfeito, e produz efeitos prospectivos, NÃO retroativos (ex nunc), respeitando expressamente os direitos adquiridos (art. 5º, XXXVI, da CF/88 e Súmula 473 do STF). Quem produz efeitos retroativos (ex tunc) é a anulação de ato ilegal.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: false },
      { letra: "E", texto: "Errado", correta: true }
    ]
  },
  // 20
  {
    idSlug: "adm-l4-20",
    disciplina_id: dId,
    assunto_id: aPrincipios,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O princípio da eficiência, introduzido expressamente no art. 37 da Constituição Federal pela Emenda Constitucional nº 19/1998, orienta a gestão pública por resultados, economicidade e celeridade. Em matéria de controle de servidores públicos, esse princípio fundamentou a criação constitucional da:",
    explicacao: "GABARITO: Letra D. A EC nº 19/1998 introduziu o princípio da eficiência e, em consonância com ele, alterou o art. 41, § 1º, III, da CF/88, prevendo a perda do cargo de servidor estável mediante procedimento de avaliação periódica de desempenho, na forma de lei complementar, assegurada ampla defesa.",
    alternativas: [
      { letra: "A", texto: "Possibilidade de demissão arbitrária sem processo administrativo.", correta: false },
      { letra: "B", texto: "Extinção da estabilidade no serviço público em todas as carreiras.", correta: false },
      { letra: "C", texto: "Contratação direta de servidores comissionados sem concurso para funções operacionais.", correta: false },
      { letra: "D", texto: "Perda do cargo de servidor estável mediante avaliação periódica de desempenho.", correta: true },
      { letra: "E", texto: "Vedação ao pagamento de adicionais de periculosidade a policiais.", correta: false }
    ]
  }
];
