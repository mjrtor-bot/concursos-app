import { TAXONOMIA } from "./taxonomia.mjs";

export const penalPart2 = [
  {
    idSlug: "penal-b5-019",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "FGV",
    orgao_nome: "PC-SC",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No tocante ao nexo causal e às causas supervenientes relativamente independentes no Direito Penal brasileiro (art. 13 do CP), assinale a afirmativa correta:",
    explicacao: "Gabarito: B. Conforme art. 13, § 1º, do CP: 'A superveniência de causa relativamente independente exclui a imputação quando, por si só, produziu o resultado; os fatos anteriores, entretanto, imputam-se a quem os praticou'. É o caso do incêndio no hospital ou acidente na ambulância.",
    alternativas: [
      { letra: "A", texto: "As concausas absolutamente independentes supervenientes nunca excluem a imputação do resultado letal ao agente originário.", correta: false },
      { letra: "B", texto: "A superveniência de causa relativamente independente que, por si só, produz o resultado, exclui a imputação quanto a este, respondendo o agente pelos atos já praticados.", correta: true },
      { letra: "C", texto: "A causa preexistente relativamente independente sempre afasta o nexo de causalidade naturalístico e normativo.", correta: false },
      { letra: "D", texto: "No crime omissivo próprio, o nexo causal decorre de uma relação de causalidade física direta entre o não agir e a lesão.", correta: false },
      { letra: "E", texto: "O dolo eventual impede a valoração de qualquer concausa no juízo de adequação típica.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-020",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O feminicídio constitui circunstância qualificadora do crime de homicídio de natureza estritamente subjetiva, sendo juridicamente incompatível com a incidência simultânea de qualificadoras de ordem objetiva, como o motivo fútil ou a emboscada.",
    explicacao: "ERRADO. Conforme jurisprudência pacífica do STJ e do STF, o feminicídio possui natureza OBJETIVA (pois decorre do contexto de violência doméstica ou menosprezo à condição de mulher), sendo plenamente compatível com qualificadoras de natureza subjetiva, como o motivo torpe ou fútil, inexistindo bis in idem.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  {
    idSlug: "penal-b5-021",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Vunesp",
    orgao_nome: "PC-SP",
    cargo_nome: "Médico Legista",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "No crime de lesão corporal de natureza grave (art. 129, § 1º, do CP), considera-se grave a lesão que resulta em:",
    explicacao: "Gabarito: A. Art. 129, § 1º, CP: Incapacidade para as ocupações habituais por mais de 30 dias (I); perigo de vida (II); debilidade permanente de membro, sentido ou função (III); aceleração de parto (IV). As hipóteses de perda/inutilização e deformidade permanente são de natureza gravíssima (§ 2º).",
    alternativas: [
      { letra: "A", texto: "Incapacidade para as ocupações habituais por mais de trinta dias ou debilidade permanente de membro, sentido ou função.", correta: true },
      { letra: "B", texto: "Perda ou inutilização de membro, sentido ou função, ou aborto.", correta: false },
      { letra: "C", texto: "Deformidade permanente e enfermidade incurável.", correta: false },
      { letra: "D", texto: "Incapacidade permanente para qualquer espécie de trabalho laboral.", correta: false },
      { letra: "E", texto: "Perigo de morte presumido sem necessidade de laudo pericial complementar.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-022",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Cebraspe",
    orgao_nome: "PC-RN",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "A apropriação indébita (art. 168 do CP) diferencia-se do furto mediante fraude e do estelionato porque, na apropriação indébita, o agente já detém a posse ou detenção legítima e desvigiada da coisa antes de surgir o animus rem sibi habendi.",
    explicacao: "CORRETO. Na apropriação indébita, a posse inicial é lícita e de boa-fé; o dolo é superveniente. No estelionato, o dolo é ab initio e a vítima é induzida em erro. No furto com fraude, a fraude é empregada para burlar a vigilância e subtrair o bem.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-023",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "FGV",
    orgao_nome: "PC-AM",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Adquirente que adquire, no exercício de atividade comercial clandestina, carga de eletrônicos avaliada em cinquenta mil reais pelo preço de dois mil reais, sem nota fiscal e transportada de madrugada, responde pelo crime de:",
    explicacao: "Gabarito: C. Art. 180, § 1º, do CP tipifica a receptação qualificada: adquirir, receber, transportar, conduzir, ocultar, ter em depósito, desmontar, montar, remontar, vender, expor à venda, ou de qualquer forma utilizar, em proveito próprio ou alheio, no exercício de atividade comercial ou industrial, coisa que deve saber ser produto de crime.",
    alternativas: [
      { letra: "A", texto: "Receptação culposa (art. 180, § 3º, do CP).", correta: false },
      { letra: "B", texto: "Favorecimento real em concurso com sonegação fiscal.", correta: false },
      { letra: "C", texto: "Receptação qualificada pela atividade comercial (art. 180, § 1º, do CP).", correta: true },
      { letra: "D", texto: "Apropriação de coisa havida por erro ou caso fortuito.", correta: false },
      { letra: "E", texto: "Furto qualificado por concurso de agentes na condição de partícipe.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-024",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O crime de extorsão mediante sequestro (art. 159 do CP) é crime formal e permanente, cuja consumação ocorre no momento da privação da liberdade da vítima com o fim de obter qualquer vantagem como condição ou preço do resgate, sendo irrelevante para a consumação a efetiva obtenção do resgate.",
    explicacao: "CORRETO. A extorsão mediante sequestro é crime formal e permanente, consumando-se com a privação da liberdade da vítima visando ao resgate. O recebimento do resgate constitui mero exaurimento da conduta criminosa (Súmula 96 do STJ e doutrina majoritária).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-025",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "Instituto AOCP",
    orgao_nome: "PC-PA",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Nos crimes cometidos sem violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa até o recebimento da denúncia ou da queixa, por ato voluntário do agente, a pena será reduzida de um a dois terços. Tal instituto denomina-se:",
    explicacao: "Gabarito: B. Trata-se do instituto do arrependimento posterior previsto no art. 16 do Código Penal.",
    alternativas: [
      { letra: "A", texto: "Desistência voluntária.", correta: false },
      { letra: "B", texto: "Arrependimento posterior.", correta: true },
      { letra: "C", texto: "Arrependimento eficaz.", correta: false },
      { letra: "D", texto: "Perdão judicial tácito.", correta: false },
      { letra: "E", texto: "Composição civil dos danos.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-026",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Perito Criminal Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A coação moral irresistível exclui a culpabilidade do agente em razão da inexigibilidade de conduta diversa, ao passo que a coação física irresistível (vis absoluta) afasta a própria tipicidade da conduta pela ausência de ação voluntária.",
    explicacao: "CORRETO. Na coação física irresistível não há voluntariedade (movimento corpóreo involuntário), logo não há conduta/ação, excluindo o fato típico. Na coação moral irresistível há conduta e ilicitude, mas o agente não é culpável, excluindo a culpabilidade por inexigibilidade de conduta diversa (art. 22 do CP).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-027",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Vunesp",
    orgao_nome: "PC-SP",
    cargo_nome: "Agente Policial",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "O particular que oferece ou promete vantagem indevida a funcionário público para determiná-lo a praticar, omitir ou retardar ato de ofício comete o delito de:",
    explicacao: "Gabarito: E. O art. 333 do Código Penal tipifica expressamente o crime de corrupção ativa praticado por particular contra a administração em geral.",
    alternativas: [
      { letra: "A", texto: "Tráfico de influência.", correta: false },
      { letra: "B", texto: "Exploração de prestígio.", correta: false },
      { letra: "C", texto: "Concussão passiva reflexa.", correta: false },
      { letra: "D", texto: "Corrupção passiva em coautoria.", correta: false },
      { letra: "E", texto: "Corrupção ativa.", correta: true }
    ]
  },
  {
    idSlug: "penal-b5-028",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Cebraspe",
    orgao_nome: "PC-DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "No crime de usurpação de função pública (art. 328 do CP), se do fato o agente aufere vantagem pecuniária indevida, a pena cominada é aumentada na terceira fase da dosimetria penal.",
    explicacao: "ERRADO. A previsão de auferir vantagem não é causa de aumento, mas sim forma QUALIFICADA (art. 328, parágrafo único: 'Se do fato o agente aufere vantagem: Pena - reclusão, de dois a cinco anos, e multa', alterando os limites mínimo e máximo da pena-base).",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  {
    idSlug: "penal-b5-029",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "FCC",
    orgao_nome: "PC-RR",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre os crimes contra a administração da justiça praticados por particular ou agente público, é correto afirmar:",
    explicacao: "Gabarito: D. A autoacusação falsa (art. 341 do CP) exige que o agente acuse a si mesmo de crime inexistente ou praticado por outrem. No falso testemunho (art. 342, § 2º), o fato deixa de ser punível se, antes da sentença no processo em que ocorreu o ilícito, o agente se retrata ou declara a verdade.",
    alternativas: [
      { letra: "A", texto: "O crime de denunciação caluniosa admite retratação com efeito extintivo de punibilidade a qualquer tempo.", correta: false },
      { letra: "B", texto: "A fraude processual configura crime material, exigindo dano irreversível aos autos judiciais para sua consumação.", correta: false },
      { letra: "C", texto: "O favorecimento pessoal consiste em prestar a criminoso auxílio destinado a tornar seguro o proveito do crime patrimonial.", correta: false },
      { letra: "D", texto: "No crime de falso testemunho ou falsa perícia, a retratação do agente antes da sentença no processo em que ocorreu o ilícito extingue a punibilidade.", correta: true },
      { letra: "E", texto: "O crime de desobediência admite a modalidade culposa quando o agente desconhece a ordem do oficial de justiça.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-030",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.concurso_pessoas_crimes,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "Se a participação for de menor importância, a pena pode ser diminuída de um sexto a um terço, conforme disposição expressa do Código Penal brasileiro.",
    explicacao: "CORRETO. Trata-se da regra insculpida no art. 29, § 1º, do Código Penal: 'Se a participação for de menor importância, a pena pode ser diminuída de um sexto a um terço'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-031",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.concurso_pessoas_crimes,
    banca_nome: "FGV",
    orgao_nome: "PC-RJ",
    cargo_nome: "Perito Legista",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Quando o agente, mediante uma só ação ou omissão, pratica dois ou mais crimes, idênticos ou não, aplica-se-lhe a mais grave das penas cabíveis ou, se iguais, somente uma delas, mas aumentada, em qualquer caso, de um sexto até metade. Esse instituto denomina-se:",
    explicacao: "Gabarito: A. Art. 70 do Código Penal: Concurso formal de crimes (próprio ou perfeito), com a incidência da regra do exasperamento da pena.",
    alternativas: [
      { letra: "A", texto: "Concurso formal de crimes.", correta: true },
      { letra: "B", texto: "Concurso material heterogêneo.", correta: false },
      { letra: "C", texto: "Crime continuado específico.", correta: false },
      { letra: "D", texto: "Concurso formal impróprio por cúmulo material.", correta: false },
      { letra: "E", texto: "Concurso aparente de normas penais.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-032",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "Cebraspe",
    orgao_nome: "PC-AL",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O livramento condicional poderá ser concedido pelo juiz da execução penal ao condenado a pena privativa de liberdade igual ou superior a dois anos, desde que cumpridos mais de um terço da pena se o condenado não for reincidente em crime doloso e tiver bons antecedentes.",
    explicacao: "CORRETO. Art. 83, inciso I, do Código Penal: o livramento condicional pode ser concedido ao condenado a pena privativa de liberdade igual ou superior a 2 anos, cumprida mais de 1/3 da pena se o condenado não for reincidente em crime doloso e tiver bons antecedentes.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-033",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Vunesp",
    orgao_nome: "PC-SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Considere a situação em que o agente furta energia elétrica mediante ligação clandestina no poste da rede pública de distribuição ('gato'). Perante o Código Penal brasileiro, tal conduta equipara-se a:",
    explicacao: "Gabarito: B. Conforme art. 155, § 3º, do Código Penal: 'Equipara-se à coisa móvel a energia elétrica ou qualquer outra que tenha valor econômico'. Configura furto qualificado por fraude/equiparação.",
    alternativas: [
      { letra: "A", texto: "Dano qualificado contra patrimônio público.", correta: false },
      { letra: "B", texto: "Coisa móvel, caracterizando crime de furto.", correta: true },
      { letra: "C", texto: "Estelionato qualificado contra autarquia.", correta: false },
      { letra: "D", texto: "Conduta atípica sob o ponto de vista penal, gerando apenas ilícito administrativo.", correta: false },
      { letra: "E", texto: "Apropriação indébita previdenciária por extensão analógica.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-034",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "A incidência da majorante do repouso noturno (art. 155, § 1º, do CP) no crime de furto é juridicamente compatível tanto com o furto simples quanto com as figuras qualificadas do delito, conforme atual entendimento da Terceira Seção do Superior Tribunal de Justiça.",
    explicacao: "ERRADO. A 3ª Seção do STJ, no julgamento do Tema Repetitivo 1.087 (REsp 1.888.756/SP), fixou a tese de que a causa de aumento do repouso noturno (§ 1º do art. 155 do CP) é aplicável EXCLUSIVAMENTE ao furto simples (caput), sendo incompatível com as formas qualificadas do § 4º.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  {
    idSlug: "penal-b5-035",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "Instituto AOCP",
    orgao_nome: "PC-GO",
    cargo_nome: "Papiloscopista",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No tocante ao crime impossível (art. 17 do Código Penal), é correto afirmar que:",
    explicacao: "Gabarito: D. O art. 17 do CP consagra a teoria objetiva temperada (ou intermediária), segundo a qual não se pune a tentativa quando, por ineficácia absoluta do meio ou por absoluta impropriedade do objeto, é impossível consumar-se o crime.",
    alternativas: [
      { letra: "A", texto: "O Código Penal adotou a teoria subjetiva pura para o crime impossível.", correta: false },
      { letra: "B", texto: "A ineficácia relativa do meio empregado é suficiente para afastar a punibilidade da tentativa.", correta: false },
      { letra: "C", texto: "A presença de sistema eletrônico de vigilância em estabelecimento comercial torna o crime de furto impossível de forma automática.", correta: false },
      { letra: "D", texto: "Não se pune a tentativa quando, por ineficácia absoluta do meio ou por absoluta impropriedade do objeto, é impossível consumar-se o crime.", correta: true },
      { letra: "E", texto: "O agente do crime impossível responde pelo delito na modalidade culposa.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-036",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "A condenação anterior a pena de multa não impede a concessão do benefício do sursis (suspensão condicional da pena), tampouco gera reincidência para esse fim específico.",
    explicacao: "CORRETO. Conforme art. 77, § 1º, do Código Penal: 'A condenação anterior a pena de multa não impede a concessão do benefício'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  }
];
