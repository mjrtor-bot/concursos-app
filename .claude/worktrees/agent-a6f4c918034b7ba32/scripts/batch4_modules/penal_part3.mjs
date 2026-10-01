import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.penal;
const aCrimesPessoa = TAXONOMIA.assuntos.crimes_pessoa_patrimonio;

export const penalPart3 = [
  // 41
  {
    idSlug: "penal-l4-41",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O feminicídio constitui qualificadora de natureza objetiva do crime de homicídio, sendo caracterizado quando o delito é praticado contra a mulher por razões da condição do sexo feminino, o que envolve violência doméstica e familiar ou menosprezo ou discriminação à condição de mulher.",
    explicacao: "GABARITO: CERTO. A jurisprudência pacífica do Superior Tribunal de Justiça (Tema Repetitivo 1.050/STJ) fixou que a qualificadora do feminicídio (art. 121, § 2º, VI, do CP) possui natureza objetiva, pois diz respeito à motivação vinculada ao gênero (violência doméstica e familiar ou menosprezo/discriminação à condição de mulher, nos termos do § 2º-A). Por ter natureza objetiva, é compatível com qualificadoras de natureza subjetiva, como o motivo torpe ou fútil.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 42
  {
    idSlug: "penal-l4-42",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação ao crime de lesão corporal (art. 129 do Código Penal), assinale a alternativa que descreve corretamente uma hipótese legal de lesão corporal de natureza GRAVÍSSIMA (§ 2º):",
    explicacao: "GABARITO: Letra D. O art. 129, § 2º, do CP elenca as hipóteses de lesão gravíssima: I - incapacidade permanente para o trabalho; II - enfermidade incurável; III - perda ou inutilização do membro, sentido ou função; IV - deformidade permanente; V - aborto. As hipóteses de perigo de vida, incapacidade temporária por mais de 30 dias, debilidade permanente e aceleração de parto são lesões GRAVES (§ 1º).",
    alternativas: [
      { letra: "A", texto: "Incapacidade para as ocupações habituais por mais de trinta dias.", correta: false },
      { letra: "B", texto: "Perigo de vida gerado à vítima.", correta: false },
      { letra: "C", texto: "Debilidade permanente de membro, sentido ou função.", correta: false },
      { letra: "D", texto: "Deformidade permanente ou perda/inutilização de membro, sentido ou função.", correta: true },
      { letra: "E", texto: "Aceleração de parto decorrente da agressão física.", correta: false }
    ]
  },
  // 43
  {
    idSlug: "penal-l4-43",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O homicídio praticado contra autoridade ou agente integrante dos órgãos de segurança pública (art. 144 da CF) no exercício da função ou em decorrência dela, ou contra seu cônjuge, companheiro ou parente consanguíneo até terceiro grau, em razão dessa condição, configura homicídio qualificado (homicídio funcional).",
    explicacao: "GABARITO: CERTO. O art. 121, § 2º, VII, do Código Penal tipifica o chamado homicídio funcional (adicionado pela Lei nº 13.142/2015), qualificando o homicídio praticado contra agentes de segurança pública (ou militares/agentes penitenciários/força nacional) no exercício da função ou em decorrência dela, bem como contra seus cônjuges, companheiros ou parentes consanguíneos até o terceiro grau em razão dessa condição.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 44
  {
    idSlug: "penal-l4-44",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No crime de calúnia (art. 138 do Código Penal), a exceção da verdade é admitida como regra geral de defesa, EXCETO:",
    explicacao: "GABARITO: Letra B. O art. 138, § 3º, do Código Penal veda a exceção da verdade na calúnia nas seguintes hipóteses taxativas: I - se, constituindo o fato imputado crime de ação privada, o ofendido não foi condenado por sentença irrecorrível; II - se o fato é imputado a qualquer das pessoas indicadas no nº I do art. 141 (Presidente da República ou chefe de governo estrangeiro); III - se do crime imputado, embora de ação pública, o ofendido foi absolvido por sentença transitada em julgado.",
    alternativas: [
      { letra: "A", texto: "Se o fato imputado for crime de ação penal pública incondicionada em fase de inquérito policial.", correta: false },
      { letra: "B", texto: "Se do crime imputado, embora de ação pública, o ofendido já foi absolvido por sentença transitada em julgado.", correta: true },
      { letra: "C", texto: "Se o ofendido for servidor público e a imputação se referir estritamente ao exercício de suas funções.", correta: false },
      { letra: "D", texto: "Se a imputação consistir em crime hediondo inafiançável praticado por particular.", correta: false },
      { letra: "E", texto: "Se a calúnia for proferida por meio de rede social de amplo alcance comunitário.", correta: false }
    ]
  },
  // 45
  {
    idSlug: "penal-l4-45",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O crime de injúria atinge a honra subjetiva da vítima (autoestima e sentimento pessoal de dignidade ou decoro), consumando-se no momento em que o próprio ofendido toma conhecimento da ofensa depreciativa.",
    explicacao: "GABARITO: CERTO. A calúnia e a difamação tutelam a honra objetiva (reputação social perante terceiros) e consumam-se quando terceiro toma conhecimento da imputação. Já a injúria (art. 140 do CP) tutela a honra subjetiva (dignidade e decoro), consumando-se no instante em que a própria vítima toma ciência das palavras ou gestos ofensivos.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 46
  {
    idSlug: "penal-l4-46",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Acerca do crime de perseguição (stalking), tipificado no art. 147-A do Código Penal pela Lei nº 14.132/2021, assinale a opção correta:",
    explicacao: "GABARITO: Letra C. O art. 147-A, § 3º, do CP estabelece expressamente que o crime de perseguição é de ação penal pública CONDICIONADA à representação da vítima. O § 1º traz causas de aumento de pena de metade se o crime é cometido contra criança, adolescente ou idoso; contra mulher por razões da condição de sexo feminino; mediante concurso de duas ou mais pessoas ou com emprego de arma.",
    alternativas: [
      { letra: "A", texto: "Trata-se de crime de ação penal pública incondicionada em qualquer hipótese fática.", correta: false },
      { letra: "B", texto: "Consuma-se com um único ato isolado de abordagem, dispensando a reiteração da conduta.", correta: false },
      { letra: "C", texto: "Exige conduta reiterada e processa-se mediante ação penal pública condicionada à representação.", correta: true },
      { letra: "D", texto: "É infração de menor potencial ofensivo que não admite aumento de pena em razão de gênero.", correta: false },
      { letra: "E", texto: "Exige contato físico direto, sendo atípica a perseguição realizada exclusivamente pela internet.", correta: false }
    ]
  },
  // 47
  {
    idSlug: "penal-l4-47",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No crime de sequestro e cárcere privado (art. 148 do CP), a pena é qualificada se a vítima é ascendente, descendente, cônjuge ou companheiro do agente, ou maior de 60 anos, bem como se a privação da liberdade dura mais de 15 (quinze) dias.",
    explicacao: "GABARITO: CERTO. O art. 148, § 1º, incisos I, II e III, do Código Penal qualifica o crime se: 'I - se a vítima é ascendente, descendente, cônjuge ou companheiro do agente ou maior de 60 (sessenta) anos; II - se o crime é praticado mediante internação da vítima em casa de saúde ou hospital; III - se a privação da liberdade dura mais de 15 (quinze) dias'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 48
  {
    idSlug: "penal-l4-48",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Matar, sob a influência do estado puerperal, o próprio filho, durante o parto ou logo após, tipifica o crime de:",
    explicacao: "GABARITO: Letra B. O art. 123 do Código Penal define o crime de Infanticídio: 'Matar, sob a influência do estado puerperal, o próprio filho, durante o parto ou logo após: Pena - detenção, de dois a seis anos'. Trata-se de hipótese de homicídio privilegiado com tipificação autônoma especial.",
    alternativas: [
      { letra: "A", texto: "Homicídio qualificado por motivo fútil.", correta: false },
      { letra: "B", texto: "Infanticídio.", correta: true },
      { letra: "C", texto: "Aborto provocado pela gestante.", correta: false },
      { letra: "D", texto: "Abandono de recém-nascido com resultado morte.", correta: false },
      { letra: "E", texto: "Lesão corporal seguida de morte puerperal.", correta: false }
    ]
  },
  // 49
  {
    idSlug: "penal-l4-49",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "É cabível a incidência concomitante da qualificadora do motivo torpe e do feminicídio no crime de homicídio praticado contra a mulher por razões da condição do sexo feminino, porquanto a primeira ostenta natureza subjetiva e a segunda, natureza objetiva.",
    explicacao: "GABARITO: CERTO. Conforme jurisprudência consolidada do STJ (AgRg no REsp 1.707.087/MG e Tema 1.050) e do STF, não há bis in idem na coexistência entre o feminicídio (qualificadora objetiva voltada ao gênero/violência doméstica) e qualificadoras de índole subjetiva como o motivo torpe ou fútil.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 50
  {
    idSlug: "penal-l4-50",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No crime de induzimento, instigação ou auxílio a suicídio ou a automutilação (art. 122 do CP, com redação da Lei nº 13.968/2019), assinale a assertiva correta:",
    explicacao: "GABARITO: Letra A. O art. 122 do CP passou a ser crime formal na forma simples (caput), punindo a conduta de induzir, instigar ou prestar auxílio mesmo que não sobrevenha lesão grave ou morte. Se da automutilação ou tentativa de suicídio resulta lesão corporal de natureza grave ou gravíssima, a pena é reclusão de 1 a 3 anos (§ 1º); e se resulta morte, a pena é reclusão de 2 a 6 anos (§ 2º).",
    alternativas: [
      { letra: "A", texto: "A conduta simples é punível independentemente da efetiva produção de lesão corporal grave ou morte na vítima.", correta: true },
      { letra: "B", texto: "A morte da vítima é condição objetiva de punibilidade sem a qual o fato é penalmente atípico.", correta: false },
      { letra: "C", texto: "A instigação praticada pela internet afasta a tipicidade pela ausência de contato presencial.", correta: false },
      { letra: "D", texto: "A tentativa de automutilação praticada por motivo fútil é punida com pena privativa de liberdade dobrada.", correta: false },
      { letra: "E", texto: "Se a vítima não tem discernimento mental para o ato, o autor responde por auxílio qualificado e não por homicídio.", correta: false }
    ]
  },
  // 51
  {
    idSlug: "penal-l4-51",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil AL",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O perdão judicial pode ser aplicado pelo juiz no crime de homicídio culposo se as consequências da infração atingirem o próprio agente de forma tão grave que a sanção penal se torne desnecessária, não sendo extensível tal benefício ao homicídio doloso.",
    explicacao: "GABARITO: CERTO. O art. 121, § 5º, do Código Penal prevê expressamente: 'Na hipótese de homicídio culposo, o juiz poderá deixar de aplicar a pena, se as consequências da infração atingirem o próprio autor de forma tão grave que a sanção penal se torne desnecessária'. O perdão judicial restringe-se às modalidades culposas de homicídio e lesão corporal (art. 129, § 8º).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 52
  {
    idSlug: "penal-l4-52",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil MG",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito do crime de difamação (art. 139 do Código Penal), é correto afirmar que:",
    explicacao: "GABARITO: Letra C. A difamação consiste em imputar a alguém fato determinado ofensivo à sua reputação (honra objetiva), que não seja qualificado como crime (pois a imputação de fato definido como crime é calúnia). A exceção da verdade na difamação somente é admitida se o ofendido for funcionário público e a ofensa for relativa ao exercício de suas funções (art. 139, parágrafo único).",
    alternativas: [
      { letra: "A", texto: "Exige a imputação de fato falso tipificado na legislação penal como crime doloso.", correta: false },
      { letra: "B", texto: "Consuma-se apenas quando o próprio ofendido toma conhecimento pessoal da imputação.", correta: false },
      { letra: "C", texto: "Admite a exceção da verdade somente se o ofendido é funcionário público e a ofensa é relativa ao exercício de suas funções.", correta: true },
      { letra: "D", texto: "Constitui crime de ação penal pública incondicionada em qualquer hipótese fática.", correta: false },
      { letra: "E", texto: "Não admite retratação antes da sentença para extinção da punibilidade do agente.", correta: false }
    ]
  },
  // 53
  {
    idSlug: "penal-l4-53",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No crime de ameaça (art. 147 do Código Penal), a conduta consiste em ameaçar alguém, por palavra, escrito ou gesto, ou qualquer outro meio simbólico, de causar-lhe mal injusto e grave, procedendo-se somente mediante representação do ofendido.",
    explicacao: "GABARITO: CERTO. O art. 147 do Código Penal tipifica o delito de ameaça, exigindo a promessa de mal injusto e grave, e prevê em seu parágrafo único expressamente: 'Somente se procede mediante representação'. É crime formal de ação pública condicionada à representação.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 54
  {
    idSlug: "penal-l4-54",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "O crime de constrangimento ilegal (art. 146 do CP) consiste em constranger alguém, mediante violência ou grave ameaça, ou depois de lhe haver reduzido a capacidade de resistência, a não fazer o que a lei permite, ou a fazer o que ela não manda. De acordo com o § 3º do referido dispositivo, NÃO se compreendem na disposição do crime:",
    explicacao: "GABARITO: Letra B. O art. 146, § 3º, do CP prevê hipóteses em que a intervenção médica ou coação para impedir suicídio não constituem crime: 'I - a intervenção médica ou cirúrgica, sem o consentimento do paciente ou de seu representante legal, se justificada por iminente perigo de vida; II - a coação exercida para impedir suicídio'.",
    alternativas: [
      { letra: "A", texto: "A cobrança extrajudicial de dívida vencida mediante retenção de documentos.", correta: false },
      { letra: "B", texto: "A intervenção médica ou cirúrgica sem consentimento justificada por iminente perigo de vida e a coação para impedir suicídio.", correta: true },
      { letra: "C", texto: "A prisão em flagrante delito realizada por qualquer do povo em desacordo com as formalidades legais.", correta: false },
      { letra: "D", texto: "A busca pessoal preventiva em passageiros de transporte coletivo interestadual sem fundada suspeita.", correta: false },
      { letra: "E", texto: "O interrogatório informal do suspeito no local dos fatos sem prévia advertência sobre o direito ao silêncio.", correta: false }
    ]
  },
  // 55
  {
    idSlug: "penal-l4-55",
    disciplina_id: dId,
    assunto_id: aCrimesPessoa,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O crime de violência psicológica contra a mulher (art. 147-B do CP), incluído pela Lei nº 14.188/2021, é punido com pena de reclusão e multa, e tutela a saúde psicológica e a integridade mental da mulher diante de condutas como ameaça, constrangimento, humilhação, manipulação e isolamento.",
    explicacao: "GABARITO: CERTO. O art. 147-B do CP tipifica a violência psicológica contra a mulher: 'Causar dano emocional à mulher que a prejudique e perturbe seu pleno desenvolvimento ou que vise a degradar ou a controlar suas ações, comportamentos, crenças e decisões, mediante ameaça, constrangimento, humilhação, manipulação, isolamento, chantagem, ridicularização, limitação do direito de ir e vir ou qualquer outro meio que cause prejuízo à sua saúde psicológica e autodeterminação: Pena - reclusão, de 6 (seis) meses a 2 (dois) anos, e multa, se a conduta não constitui crime mais grave'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  }
];
