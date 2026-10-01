import { TAXONOMIA } from "./taxonomia.mjs";

export const penal02Questoes = [
  // Q36 - CEBRASPE / PRF - Dolo Eventual vs Culpa Consciente em Delitos de Trânsito
  {
    idSlug: "penal-036",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na condução de veículo automotor com resultado morte, a caracterização de dolo eventual exige a comprovação inequívoca de que o condutor previu o resultado lesivo e anuiu com a sua ocorrência (assumiu o risco com indiferença), não sendo lícito presumir o dolo eventual de forma automática exclusivamente pela constatação de embriaguez ao volante ou excesso de velocidade.",
    explicacao: "GABARITO: CERTO. De acordo com a jurisprudência pacífica do Superior Tribunal de Justiça (STJ) e do Supremo Tribunal Federal (STF), a embriaguez ao volante e o excesso de velocidade, por si sós, não autorizam a conclusão automática da presença de dolo eventual. O dolo eventual (art. 18, I, in fine, do CP) demanda a demonstração de assentimento e indiferença quanto ao resultado morte, distinguindo-se da culpa consciente (art. 18, II, do CP), em que o agente prevê o resultado, mas sinceramente acredita que suas habilidades evitarão o evento danoso.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q37 - FGV / PM - Adulteração de Sinal Identificador de Veículo Automotor (Art. 311 do CP)
  {
    idSlug: "penal-037",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Com a vigência da Lei nº 14.562/2023, que alterou o art. 311 do Código Penal (adulteração de sinal identificador de veículo automotor), assinale a afirmativa correta:",
    explicacao: "GABARITO: A. A Lei nº 14.562/2023 ampliou significativamente o escopo do art. 311 do CP, incluindo expressamente no caput veículos elétricos, híbridos, de reboque, semirreboque ou suas combinações e componentes, além de tipificar expressamente no § 2º as condutas equiparadas de quem adquire, recebe, transporta, conduz, oculta, mantém em depósito ou comercializa veículo com sinal identificador remarcado ou adulterado.",
    alternativas: [
      {
        letra: "A",
        texto: "O tipo penal do caput passou a abranger expressamente veículos elétricos, híbridos, de reboque, semirreboque e seus componentes ou equipamentos, além de criminalizar figuras equiparadas como conduzir ou guardar veículo adulterado.",
        correta: true
      },
      {
        letra: "B",
        texto: "A conduta de adulterar placa de veículo automotor passou a ser tratada como mera contravenção penal se não houver prejuízo à fé pública.",
        correta: false
      },
      {
        letra: "C",
        texto: "A alteração legislativa descriminalizou a adulteração praticada sobre reboques e semirreboques por não serem veículos dotados de propulsão a combustão.",
        correta: false
      },
      {
        letra: "D",
        texto: "O crime de adulteração passou a exigir para a sua consumação a efetiva ocorrência de dano patrimonial a terceiro de boa-fé.",
        correta: false
      },
      {
        letra: "E",
        texto: "A pena para a modalidade básica foi reduzida para detenção de 6 meses a 1 ano, permitindo a transação penal irrestrita.",
        correta: false
      }
    ]
  },
  // Q38 - VUNESP / GM - Roubo Impróprio
  {
    idSlug: "penal-038",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um indivíduo subtrai, sem violência, objetos do interior de um estabelecimento comercial. Ao sair, ao ser surpreendido pelo proprietário, emprega violência física contra ele para conseguir fugir com os bens e assegurar a detenção das coisas subtraídas. Nos termos do Código Penal, essa conduta configura:",
    explicacao: "GABARITO: C. Trata-se da figura do roubo impróprio, previsto no art. 157, § 1º, do Código Penal: 'Na mesma pena incorre quem, logo depois de subtraída a coisa, emprega violência contra pessoa ou grave ameaça, a fim de assegurar a impunidade do crime ou a detenção da coisa para si ou para terceiro'.",
    alternativas: [
      { letra: "A", texto: "furto simples em concurso material com lesão corporal leve.", correta: false },
      { letra: "B", texto: "furto qualificado pelo emprego de meio ardiloso.", correta: false },
      { letra: "C", texto: "roubo impróprio.", correta: true },
      { letra: "D", texto: "extorsão indireta.", correta: false },
      { letra: "E", texto: "apropriação indébita com violência subsequente.", correta: false }
    ]
  },
  // Q39 - CEBRASPE / PRF - Uso de Documento Falso em Abordagem Policial
  {
    idSlug: "penal-039",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Durante blitz de fiscalização em rodovia federal, motorista apresenta Carteira Nacional de Habilitação (CNH) falsificada após solicitação expressa do Policial Rodoviário Federal. Nessa situação, o motorista comete o crime de uso de documento falso (art. 304 do CP), não afastando a tipicidade penal a circunstância de a apresentação do documento ter decorrido de solicitação da autoridade fiscalizadora.",
    explicacao: "GABARITO: CERTO. A jurisprudência consolidada do STJ e do STF (jurisprudência pacífica e Súmula 157 do STJ em sua essência doutrinária) estabelece que a apresentação de documento falso, mesmo quando solicitada por autoridade policial em fiscalização de rotina, configura o crime previsto no art. 304 do Código Penal, visto que a exibição decorre do dever legal de porte e identificação, não consubstanciando excludente de tipicidade.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q40 - IBFC / CBM - Omissão de Socorro (Art. 135 do CP)
  {
    idSlug: "penal-040",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Soldado Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "O cidadão que se depara com uma pessoa gravemente ferida em via pública deserta e, podendo prestar assistência direta sem nenhum risco pessoal, recusa-se a fazê-lo e tampouco solicita o socorro da autoridade pública (como Corpo de Bombeiros ou SAMU), comete, em tese, o crime de:",
    explicacao: "GABARITO: D. Art. 135 do Código Penal: 'Deixar de prestar assistência, quando possível fazê-lo sem risco pessoal, à criança abandonada ou extraviada, ou à pessoa inválida ou ferida, ao desamparo ou em grave e iminente perigo; ou não pedir, nesses casos, o socorro da autoridade pública: Pena - detenção, de 1 (um) a 6 (seis) meses, ou multa'. Trata-se de omissão de socorro.",
    alternativas: [
      { letra: "A", texto: "prevaricação.", correta: false },
      { letra: "B", texto: "abandono de incapaz culposo.", correta: false },
      { letra: "C", texto: "exposição a perigo de trânsito.", correta: false },
      { letra: "D", texto: "omissão de socorro.", correta: true },
      { letra: "E", texto: "condescendência criminosa.", correta: false }
    ]
  },
  // Q41 - CEBRASPE / PM - Qualificadora do Feminicídio
  {
    idSlug: "penal-041",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No homicídio qualificado pelo feminicídio (art. 121, § 2º, VI, do Código Penal), a qualificadora possui natureza objetiva, pois está atrelada à condição de sexo feminino da vítima (violência doméstica/familiar ou menosprezo/discriminação à condição de mulher), sendo juridicamente compatível com qualificadoras de índole subjetiva, como o motivo torpe ou o motivo fútil.",
    explicacao: "GABARITO: CERTO. O Superior Tribunal de Justiça firmou a tese de que a qualificadora do feminicídio tem natureza eminentemente objetiva, pois vincula-se ao contexto de gênero e às circunstâncias do fato (art. 121, § 2º-A, do CP). Por essa razão, inexiste bis in idem na coexistência da qualificadora do feminicídio com qualificadoras de natureza subjetiva, tais como motivo torpe ou motivo fútil.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q42 - FGV / GM - Concussão versus Corrupção Passiva
  {
    idSlug: "penal-042",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No que concerne à distinção entre os crimes de concussão (art. 316 do CP) e corrupção passiva (art. 317 do CP), assinale a afirmativa correta:",
    explicacao: "GABARITO: B. O núcleo do crime de concussão é 'exigir' (imposição coercitiva/intimidação), enquanto os núcleos da corrupção passiva são 'solicitar' (pedir/propor), 'receber' ou 'aceitar promessa' de vantagem indevida.",
    alternativas: [
      {
        letra: "A",
        texto: "Ambos os tipos penais possuem exatamente o mesmo núcleo de conduta típica ('solicitar'), diferindo apenas pelo valor patrimonial almejado.",
        correta: false
      },
      {
        letra: "B",
        texto: "Na concussão, o verbo nuclear é 'exigir' vantagem indevida, impondo constrangimento funcional; na corrupção passiva, os núcleos são 'solicitar', 'receber' ou 'aceitar promessa' de vantagem.",
        correta: true
      },
      {
        letra: "C",
        texto: "A corrupção passiva é crime formal que exige efetivo recebimento da vantagem, enquanto a concussão é crime material.",
        correta: false
      },
      {
        letra: "D",
        texto: "A concussão só pode ser cometida por particular contra servidor público, ao passo que a corrupção passiva é crime funcional próprio.",
        correta: false
      },
      {
        letra: "E",
        texto: "O crime de concussão admite a modalidade culposa na hipótese de excesso de zelo administrativo pelo servidor.",
        correta: false
      }
    ]
  },
  // Q43 - CEBRASPE / PRF - Receptação Qualificada e Dolo Eventual
  {
    idSlug: "penal-043",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No crime de receptação qualificada (art. 180, § 1º, do CP), praticado no exercício de atividade comercial ou industrial, a lei pune expressamente o agente que deve saber ser a coisa produto de crime (dolo eventual), sendo constitucional e plenamente válida referida previsão consoante jurisprudência do STF.",
    explicacao: "GABARITO: CERTO. O art. 180, § 1º, do CP prevê pena mais gravosa (reclusão de 3 a 8 anos e multa) quando a receptação ocorre no exercício de atividade comercial ou industrial com bens que o agente 'deve saber ser produto de crime'. O STF declarou a constitucionalidade do preceito, consolidando que a figura qualificada pune tanto o dolo direto quanto o dolo eventual.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q44 - VUNESP / PM - Estupro de Vulnerável e Súmula 593 do STJ
  {
    idSlug: "penal-044",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em relação ao crime de estupro de vulnerável (art. 217-A do Código Penal) praticado contra menor de 14 anos de idade, e considerando a jurisprudência sumulada do Superior Tribunal de Justiça (Súmula 593/STJ), é correto afirmar que:",
    explicacao: "GABARITO: E. Conforme a Súmula 593 do STJ: 'O crime de estupro de vulnerável se configura com a conjunção carnal ou prática de ato libidinoso com menor de 14 anos, sendo irrelevante eventual consentimento da vítima para a prática do ato, sua experiência sexual anterior ou existência de relacionamento amoroso com o agente'. A presunção de vulnerabilidade é absoluta.",
    alternativas: [
      {
        letra: "A",
        texto: "o prévio consentimento da vítima menor de 14 anos exclui a ilicitude da conduta.",
        correta: false
      },
      {
        letra: "B",
        texto: "a comprovação de experiência sexual anterior da vítima desclassifica a conduta para estupro simples.",
        correta: false
      },
      {
        letra: "C",
        texto: "o relacionamento amoroso consentido entre autor e vítima afasta a tipicidade formal do delito.",
        correta: false
      },
      {
        letra: "D",
        texto: "a vulnerabilidade do menor de 14 anos é relativa, dependendo de prova pericial de sua incapacidade de discernimento.",
        correta: false
      },
      {
        letra: "E",
        texto: "a configuração do crime independe do consentimento da vítima, de sua eventual experiência sexual anterior ou de relacionamento amoroso prévio.",
        correta: true
      }
    ]
  },
  // Q45 - CEBRASPE / CBM - Estado de Necessidade versus Legítima Defesa
  {
    idSlug: "penal-045",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Enquanto a legítima defesa (art. 25 do CP) pressupõe a repulsa moderada a uma agressão humana injusta, atual ou iminente, o estado de necessidade (art. 24 do CP) decorre do sacrifício de um bem jurídico para salvar outro de perigo atual, não provocado voluntariamente pelo agente e cujo perigo não tinha o dever legal de enfrentar.",
    explicacao: "GABARITO: CERTO. A distinção clássica e legal entre as excludentes de ilicitude: na legítima defesa há uma agressão injusta de uma pessoa (ataque ilícito); no estado de necessidade há um conflito de interesses legítimos sob situação de perigo inevitável, sem que a ameaça seja necessariamente originada de conduta agressiva ilícita dirigida.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q46 - IBFC / GM - Perseguição (Stalking - Art. 147-A do CP)
  {
    idSlug: "penal-046",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O crime de perseguição (stalking), tipificado no art. 147-A do Código Penal (incluído pela Lei nº 14.132/2021), caracteriza-se por:",
    explicacao: "GABARITO: A. Art. 147-A do CP: 'Perseguir alguém, reiteradamente e por qualquer meio, ameaçando-lhe a integridade física ou psicológica, restringindo-lhe a capacidade de locomoção ou, de qualquer forma, invadindo ou perturbando sua esfera de liberdade ou privacidade'. Trata-se de crime habitual que exige reiteração da conduta.",
    alternativas: [
      {
        letra: "A",
        texto: "perseguir alguém, reiteradamente e por qualquer meio, ameaçando-lhe a integridade física ou psicológica, restringindo-lhe a capacidade de locomoção ou perturbando sua esfera de liberdade ou privacidade.",
        correta: true
      },
      {
        letra: "B",
        texto: "exigir vantagem econômica indevida mediante coação moral e envio de mensagens telemáticas isoladas.",
        correta: false
      },
      {
        letra: "C",
        texto: "constranger alguém mediante violência física para a realização de ato libidinoso no transporte coletivo.",
        correta: false
      },
      {
        letra: "D",
        texto: "ofender a reputação social de outrem mediante publicação única e difamatória em rede social.",
        correta: false
      },
      {
        letra: "E",
        texto: "interceptar comunicações telefônicas sem prévia autorização judicial de autoridade competente.",
        correta: false
      }
    ]
  },
  // Q47 - CEBRASPE / PRF - Peculato Culposo e Reparação do Dano
  {
    idSlug: "penal-047",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No crime de peculato culposo (art. 312, § 2º, do CP), a reparação integral do dano patrimonial causada pelo servidor público, se realizada antes da sentença irrecorrível, extingue a punibilidade do agente; se for posterior à sentença irrecorrível, reduz a pena imposta pela metade.",
    explicacao: "GABARITO: CERTO. Art. 312, § 3º, do CP: 'No caso do parágrafo anterior [peculato culposo], a reparação do dano, se precede à sentença irrecorrível, extingue a punibilidade; se lhe é posterior, reduz de metade a pena imposta'. Esse benefício é exclusivo do peculato culposo, não se estendendo ao peculato doloso.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q48 - FGV / PM - Latrocínio e Súmula 610 do STF
  {
    idSlug: "penal-048",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Dois indivíduos armados abordam a vítima com o objetivo de subtrair seu veículo. Durante a abordagem, diante da reação da vítima, um dos assaltantes efetua disparos e mata a vítima. Em seguida, assustados com a aproximação de populares, os agentes fogem a pé sem conseguir levar o automóvel ou qualquer outro pertence. De acordo com a legislação penal e a jurisprudência sumulada do Supremo Tribunal Federal (Súmula 610/STF), os agentes responderão por:",
    explicacao: "GABARITO: C. Súmula 610 do STF: 'Há crime de latrocínio, quando o homicídio se consuma, ainda que não realize o agente a subtração de bens da vítima'. Trata-se de roubo qualificado pelo resultado morte (art. 157, § 3º, II, do CP) na forma consumada.",
    alternativas: [
      { letra: "A", texto: "homicídio qualificado em concurso com tentativa de roubo.", correta: false },
      { letra: "B", texto: "latrocínio na modalidade tentada, pois o patrimônio não foi subtraído.", correta: false },
      { letra: "C", texto: "latrocínio consumado.", correta: true },
      { letra: "D", texto: "homicídio simples tentado e furto consumado.", correta: false },
      { letra: "E", texto: "extorsão com resultado morte tentada.", correta: false }
    ]
  },
  // Q49 - CEBRASPE / GM - Resistência versus Desobediência
  {
    idSlug: "penal-049",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O crime de resistência (art. 329 do CP) exige o emprego de violência física ou grave ameaça à pessoa contra o funcionário público competente para a execução do ato legal ou quem lhe esteja prestando auxílio, ao passo que a desobediência (art. 330 do CP) consiste no descumprimento de ordem legal sem o emprego de violência ou ameaça.",
    explicacao: "GABARITO: CERTO. Art. 329 do CP: 'Opor-se à execução de ato legal, mediante violência ou ameaça a funcionário competente para executá-lo ou a quem lhe esteja prestando auxílio'. Art. 330 do CP: 'Desobedecer a ordem legal de funcionário público'. A oposição passiva (ex.: fuga simples sem agressão) configura desobediência (ou desrespeito de ordem), e não resistência.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q50 - VUNESP / PRF - Extraterritorialidade Incondicionada da Lei Penal
  {
    idSlug: "penal-050",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.aplicacao_lei_penal,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 7º, I, do Código Penal, estão sujeitos à lei penal brasileira, embora cometidos no estrangeiro, de forma incondicionada (independente das condições do § 2º), os crimes:",
    explicacao: "GABARITO: B. Art. 7º, I, 'a', do Código Penal: Ficam sujeitos à lei brasileira, embora cometidos no estrangeiro, os crimes contra a vida ou a liberdade do Presidente da República (princípio da proteção/defesa, hipótese de extraterritorialidade incondicionada).",
    alternativas: [
      {
        letra: "A",
        texto: "praticados por brasileiro nato ou naturalizado contra qualquer patrimônio privado no exterior.",
        correta: false
      },
      {
        letra: "B",
        texto: "contra a vida ou a liberdade do Presidente da República.",
        correta: true
      },
      {
        letra: "C",
        texto: "que, por tratado internacional, o Brasil apenas se obrigou a reprimir.",
        correta: false
      },
      {
        letra: "D",
        texto: "cometidos em embarcações mercantes estrangeiras que navegam em águas internacionais.",
        correta: false
      },
      {
        letra: "E",
        texto: "praticados por estrangeiro contra brasileiro em território alienígena.",
        correta: false
      }
    ]
  },
  // Q51 - CEBRASPE / PM - Importunação Sexual (Art. 215-A do CP)
  {
    idSlug: "penal-051",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "A prática de ato libidinoso contra alguém e sem a sua anuência, com o objetivo de satisfazer a própria lascívia ou a de terceiro, sem que ocorra violência física extrema ou grave ameaça caracterizadoras do estupro (art. 213 do CP), tipifica o crime de importunação sexual (art. 215-A do CP).",
    explicacao: "GABARITO: CERTO. O crime de importunação sexual (art. 215-A do CP, introduzido pela Lei nº 13.718/2018) pune a prática de ato libidinoso sem a anuência da vítima e sem violência real ou grave ameaça compulsória (como toques íntimos indesejados em transporte coletivo), com pena de reclusão de 1 a 5 anos.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q52 - IBFC / CBM - Crime de Incêndio (Art. 250 do CP)
  {
    idSlug: "penal-052",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Soldado Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O crime de incêndio, previsto no art. 250 do Código Penal, consiste em causar incêndio, expondo a perigo a vida, a integridade física ou o patrimônio de outrem. Quanto à sua classificação dogmática, trata-se de crime de perigo:",
    explicacao: "GABARITO: D. O crime de incêndio (art. 250 do CP) é crime de perigo comum e concreto, exigindo para a sua consumação a efetiva exposição de um número indeterminado de pessoas ou coisas ao risco decorrente do fogo gerado.",
    alternativas: [
      { letra: "A", texto: "abstrato individual exclusivo.", correta: false },
      { letra: "B", texto: "presumido de dano reflexo.", correta: false },
      { letra: "C", texto: "culposo obrigatório sem admissão de dolo.", correta: false },
      { letra: "D", texto: "comum e concreto.", correta: true },
      { letra: "E", texto: "impróprio de resultado cortado.", correta: false }
    ]
  },
  // Q53 - CEBRASPE / PRF - Falsidade Ideológica versus Falsidade Material
  {
    idSlug: "penal-053",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No crime de falsidade ideológica (art. 299 do CP), o documento é formal e materialmente autêntico, confeccionado por quem detém a respectiva competência ou autoria declarada, mas seu teor de conteúdo ideológico é mendaz ou omisso quanto a declaração relevante.",
    explicacao: "GABARITO: CERTO. A falsidade ideológica (falsum ideologicum) atinge o conteúdo intelectivo da declaração (inserir ou fazer inserir declaração falsa ou diversa da que devia ser escrita), enquanto a falsidade material (arts. 297 e 298 do CP) atinge a genuinidade externa e física do documento (criação de documento falso ou alteração física de documento verdadeiro).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q54 - FGV / PM - Concurso de Pessoas: Cooperação Dolosamente Distinta
  {
    idSlug: "penal-054",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.concurso_pessoas_crimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No concurso de pessoas, quando um dos comparsas planeja e consente em participar unicamente de um delito de furto a uma residência desabitada, mas o comparsa executor, durante a prática, ao encontrar um vigia, por iniciativa própria decide matá-lo, o agente que planejou apenas o furto:",
    explicacao: "GABARITO: A. Art. 29, § 2º, do Código Penal (cooperação dolosamente distinta ou desvio subjetivo de conduta): 'Se algum dos concorrentes quis participar de crime menos grave, ser-lhe-á aplicada a pena deste; essa pena será aumentada até metade, na hipótese de ter sido previsível o resultado mais grave'.",
    alternativas: [
      {
        letra: "A",
        texto: "responderá pela pena do crime de furto (menos grave), que poderá ser aumentada até a metade se o resultado mais grave era previsível.",
        correta: true
      },
      {
        letra: "B",
        texto: "responderá obrigatoriamente como coautor do homicídio qualificado em razão da teoria monista absoluta do Código Penal.",
        correta: false
      },
      {
        letra: "C",
        texto: "ficará totalmente isento de qualquer pena por rompimento automático do nexo causal.",
        correta: false
      },
      {
        letra: "D",
        texto: "responderá por latrocínio consumado com atenuante de menor participação obrigatória.",
        correta: false
      },
      {
        letra: "E",
        texto: "responderá por receptação qualificada e favorecimento pessoal.",
        correta: false
      }
    ]
  },
  // Q55 - CEBRASPE / GM - Lesão Corporal Seguida de Morte (Preterdolo)
  {
    idSlug: "penal-055",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A lesão corporal seguida de morte (art. 129, § 3º, do CP) é uma espécie de crime preterdoloso, no qual o agente atua com dolo de lesionar a vítima na conduta antecedente e produz o resultado morte a título de culpa no fato consequente pelas circunstâncias do caso concreto.",
    explicacao: "GABARITO: CERTO. O art. 129, § 3º, do Código Penal define o crime preterdoloso (dolo no antecedente e culpa no consequente): o agente quer ferir ou assume o risco de ferir (lesão corporal) e, por negligência, imprudência ou imperícia decorrente da conduta, causa a morte da vítima, sem ter agido com dolo direto ou eventual em relação ao óbito.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q56 - VUNESP / PRF - Prevaricação (Art. 319 do CP)
  {
    idSlug: "penal-056",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O Policial que, ao flagrar um amigo de infância cometendo infração de trânsito que ensejaria a lavratura de auto e recolhimento de veículo, deixa de autuá-lo deliberadamente com o exclusivo objetivo de não prejudicar o laço de amizade pessoal, comete, em tese, o crime de:",
    explicacao: "GABARITO: C. Art. 319 do Código Penal: 'Retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal'. Trata-se do crime de prevaricação, caracterizado pelo dolo específico de satisfazer sentimento pessoal (afeição/amizade).",
    alternativas: [
      { letra: "A", texto: "corrupção passiva própria.", correta: false },
      { letra: "B", texto: "concussão qualificada.", correta: false },
      { letra: "C", texto: "prevaricação.", correta: true },
      { letra: "D", texto: "advocacia administrativa imprópria.", correta: false },
      { letra: "E", texto: "peculato de uso.", correta: false }
    ]
  },
  // Q57 - CEBRASPE / PM - Erro de Proibição e Culpabilidade
  {
    idSlug: "penal-057",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O erro sobre a ilicitude do fato (erro de proibição), quando inevitável (escusável), isenta o agente de pena porque exclui a culpabilidade pela ausência do elemento potencial consciência da ilicitude; se for evitável (inescusável), não isenta de pena, mas autoriza a diminuição da sanção de um sexto a um terço.",
    explicacao: "GABARITO: CERTO. Art. 21 do Código Penal: 'O desconhecimento da lei é inescusável. O erro sobre a ilicitude do fato, se inevitável, isenta de pena; se evitável, poderá diminuí-la de um sexto a um terço'. O erro de proibição atua diretamente sobre o juízo de culpabilidade.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q58 - IBFC / CBM - Extorsão Mediante Sequestro (Art. 159 do CP)
  {
    idSlug: "penal-058",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O tipo penal que descreve a conduta de 'sequestrar pessoa com o fim de obter, para si ou para outrem, qualquer vantagem, como condição ou preço do resgate' refere-se ao crime de:",
    explicacao: "GABARITO: B. Art. 159 do Código Penal: extorsão mediante sequestro. Trata-se de crime complexo, formal e hediondo (art. 1º, IV, da Lei nº 8.072/1990), que se consuma com a privação da liberdade da vítima vinculada à exigência de resgate, independentemente da efetiva obtenção da vantagem.",
    alternativas: [
      { letra: "A", texto: "roubo com retenção de vítima.", correta: false },
      { letra: "B", texto: "extorsão mediante sequestro.", correta: true },
      { letra: "C", texto: "cárcere privado qualificado pela vantagem.", correta: false },
      { letra: "D", texto: "estelionato com violência.", correta: false },
      { letra: "E", texto: "apropriação indébita com coação.", correta: false }
    ]
  },
  // Q59 - CEBRASPE / GM - Usurpação de Função Pública
  {
    idSlug: "penal-059",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O crime de usurpação de função pública (art. 328 do CP) consuma-se com a prática de qualquer ato concreto privativo da função pública usurpada pelo particular, sendo a obtenção de vantagem circunstância qualificadora expressa no parágrafo único do referido artigo.",
    explicacao: "GABARITO: CERTO. O art. 328 do CP pune usurpar o exercício de função pública. A consumação dá-se com a prática de ato de ofício privativo. O parágrafo único estabelece forma qualificada: 'Se do fato o agente aufere vantagem: Pena - reclusão, de 2 (dois) a 5 (cinco) anos, e multa'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q60 - FGV / PRF - Ação Penal no Crime de Estelionato (Art. 171, § 5º do CP)
  {
    idSlug: "penal-060",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A partir das inovações promovidas pelo Pacote Anticrime (Lei nº 13.964/2019) no art. 171, § 5º, do Código Penal, o crime de estelionato passou a se processar, como regra geral, mediante ação penal pública condicionada à representação do ofendido. Contudo, a ação penal continuará sendo pública incondicionada se a vítima for:",
    explicacao: "GABARITO: E. Conforme o art. 171, § 5º, do CP, o estelionato somente se procede mediante representação, salvo se a vítima for: I - a Administração Pública, direta ou indireta; II - criança ou adolescente; III - pessoa com deficiência mental; ou IV - maior de 70 (setenta) anos de idade ou incapaz.",
    alternativas: [
      {
        letra: "A",
        texto: "qualquer pessoa jurídica de direito privado com faturamento superior a 1 milhão de reais.",
        correta: false
      },
      {
        letra: "B",
        texto: "servidor público municipal no gozo de licença-prêmio.",
        correta: false
      },
      {
        letra: "C",
        texto: "vítima maior de 60 anos em situação de vulnerabilidade econômica.",
        correta: false
      },
      {
        letra: "D",
        texto: "estrangeiro residente ou em trânsito no território nacional.",
        correta: false
      },
      {
        letra: "E",
        texto: "a Administração Pública, direta ou indireta; criança ou adolescente; pessoa com deficiência mental; ou maior de 70 anos de idade ou incapaz.",
        correta: true
      }
    ]
  },
  // Q61 - CEBRASPE / PM - Prescrição da Pretensão Punitiva Abstrata
  {
    idSlug: "penal-061",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao_punibilidade,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Antes de transitar em julgado a sentença final condenatória, a prescrição da pretensão punitiva é calculada com base no máximo da pena privativa de liberdade abstratamente cominada ao crime, observando-se os prazos estipulados no art. 109 do Código Penal.",
    explicacao: "GABARITO: CERTO. Art. 109, caput, do Código Penal: 'A prescrição, antes de transitar em julgado a sentença final, salvo o disposto no § 1º do art. 110 deste Código, regula-se pelo máximo da pena privativa de liberdade cominada ao crime'. Trata-se da prescrição da pretensão punitiva propriamente dita (em abstrato).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q62 - VUNESP / CBM - Crimes contra a Incolumidade Pública: Desabamento ou Desmoronamento
  {
    idSlug: "penal-062",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O art. 256 do Código Penal tipifica a conduta de 'causar desabamento ou desmoronamento, expondo a perigo a vida, a integridade física ou o patrimônio de outrem'. Se o crime for culposo, o Código Penal prevê:",
    explicacao: "GABARITO: A. Art. 256, parágrafo único, do CP: 'Se o crime é culposo: Pena - detenção, de 6 (seis) meses a 1 (um) ano'. A legislação prevê expressamente a modalidade culposa para o delito de desabamento ou desmoronamento.",
    alternativas: [
      {
        letra: "A",
        texto: "punição expressa a título culposo com pena de detenção de 6 meses a 1 ano.",
        correta: true
      },
      {
        letra: "B",
        texto: "isenção de pena absoluta caso não ocorram mortes.",
        correta: false
      },
      {
        letra: "C",
        texto: "reclusão de 10 a 20 anos com aplicação de perdão judicial automático.",
        correta: false
      },
      {
        letra: "D",
        texto: "atipicidade do fato culposo por ausência de previsão legal.",
        correta: false
      },
      {
        letra: "E",
        texto: "conversão necessária em mera infração administrativa ambiental.",
        correta: false
      }
    ]
  },
  // Q63 - CEBRASPE / PRF - Desistência Voluntária e Arrependimento Eficaz (Art. 15 do CP)
  {
    idSlug: "penal-063",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No instituto da desistência voluntária, o agente, por vontade própria, cessa os atos de execução que ainda estavam ao seu alcance; já no arrependimento eficaz, tendo esgotado os atos executórios, desenvolve nova conduta que impede a produção do resultado consumativo; em ambos os casos, o agente responde apenas pelos atos já praticados.",
    explicacao: "GABARITO: CERTO. Art. 15 do Código Penal: 'O agente que, voluntariamente, desiste de prosseguir na execução [desistência voluntária] ou impede que o resultado se produza [arrependimento eficaz], só responde pelos atos já praticados'. Trata-se da chamada 'ponte de ouro' (Goldene Brücke) de Franz von Liszt.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q64 - IBFC / GM - Desacato contra Guarda Municipal
  {
    idSlug: "penal-064",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Cidadão que, durante intervenção de patrulhamento de preservação de parque público municipal, dirige ofensas e xingamentos ultrajantes a Guarda Municipal no exercício de sua função pública para desmerecer a sua autoridade:",
    explicacao: "GABARITO: D. O Guarda Municipal é funcionário público para efeitos penais (art. 327 do CP). Ofendê-lo com ultraje e desprezo no exercício da função ou em razão dela configura o crime de desacato (art. 331 do CP), delito cuja compatibilidade com o Pacto de São José da Costa Rica e a CF/88 foi confirmada pelo STJ e STF.",
    alternativas: [
      { letra: "A", texto: "não comete crime algum, pois Guardas Municipais não são servidores públicos.", correta: false },
      { letra: "B", texto: "comete apenas a contravenção penal de vias de fato.", correta: false },
      { letra: "C", texto: "pratica crime de concussão imprópria.", correta: false },
      { letra: "D", texto: "pratica o crime de desacato (art. 331 do CP).", correta: true },
      { letra: "E", texto: "comete exclusivamente infração disciplinar interna.", correta: false }
    ]
  },
  // Q65 - CEBRASPE / PM - Concurso Formal Próprio de Crimes
  {
    idSlug: "penal-065",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.concurso_pessoas_crimes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No concurso formal próprio (perfeito) de crimes, previsto no art. 70, caput, primeira parte, do CP, o agente que, mediante uma única ação ou omissão, pratica dois ou mais crimes sem desígnios autônomos, tem aplicada a pena mais grave ou uma delas se iguais, aumentada de um sexto até metade (sistema da exasperação).",
    explicacao: "GABARITO: CERTO. Art. 70 do Código Penal: 'Quando o agente, mediante uma só ação ou omissão, pratica dois ou mais crimes, idênticos ou não, aplica-se-lhe a mais grave das penas cabíveis ou, se iguais, somente uma delas, mas aumentada, em qualquer caso, de um sexto até metade'. No concurso formal imperfeito (com desígnios autônomos), as penas são somadas (cúmulo material).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q66 - FGV / PRF - Moeda Falsa e Princípio da Insignificância
  {
    idSlug: "penal-066",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um indivíduo é flagrado por policiais rodoviários federais portando e tentando repassar em um posto de combustíveis uma única cédula falsificada de R$ 20,00 de falsificação apta a iludir o homem médio. Segundo a jurisprudência pacífica do Superior Tribunal de Justiça e do Supremo Tribunal Federal:",
    explicacao: "GABARITO: B. A jurisprudência dos Tribunais Superiores (STF e STJ) é pacífica no sentido de que é inaplicável o princípio da insignificância (bagatela) aos crimes contra a fé pública, especificamente ao crime de moeda falsa (art. 289 do CP), pois o bem jurídico tutelado é a fé pública e a segurança do sistema monetário, bens indisponíveis e imensuráveis pelo valor nominal da cédula.",
    alternativas: [
      {
        letra: "A",
        texto: "aplica-se o princípio da insignificância para excluir a tipicidade material, tendo em vista o ínfimo valor monetário da cédula (R$ 20,00).",
        correta: false
      },
      {
        letra: "B",
        texto: "não se aplica o princípio da insignificância aos crimes contra a fé pública (art. 289 do CP), independentemente do pequeno valor de face da cédula.",
        correta: true
      },
      {
        letra: "C",
        texto: "a conduta é considerada automaticamente atípica por ausência de dolo específico contra o Banco Central.",
        correta: false
      },
      {
        letra: "D",
        texto: "o fato deve ser desclassificado obrigatoriamente para a contravenção penal de recusa de moeda de curso forçado.",
        correta: false
      },
      {
        letra: "E",
        texto: "o crime de moeda falsa admite a aplicação de perdão judicial automático se for a primeira infração do agente.",
        correta: false
      }
    ]
  },
  // Q67 - CEBRASPE / PM - Denunciação Caluniosa versus Comunicação Falsa de Crime
  {
    idSlug: "penal-067",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de denunciação caluniosa (art. 339 do CP) exige que a imputação de crime ou infração ético-disciplinar recaia sobre pessoa determinada que o agente sabe ser inocente, dando causa à instauração de investigação ou processo, enquanto a comunicação falsa de crime ou contravenção (art. 340 do CP) configura-se quando o agente provoca a ação de autoridade comunicando delito que sabe não ter ocorrido, sem imputá-lo a pessoa determinada.",
    explicacao: "GABARITO: CERTO. Art. 339 do CP (denunciação caluniosa): dar causa à instauração de inquérito policial, procedimento investigatório criminal, processo judicial, etc., imputando a alguém crime de que o sabe inocente. Art. 340 do CP (comunicação falsa): provocar a ação de autoridade comunicando a ocorrência de crime ou contravenção que sabe não se ter verificado (fato genérico, sem vítima certa imputada).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q68 - VUNESP / CBM - Perdão Judicial no Homicídio Culposo
  {
    idSlug: "penal-068",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em matéria de crimes contra a vida, o art. 121, § 5º, do Código Penal prevê que, na hipótese de homicídio culposo, o juiz poderá deixar de aplicar a pena se:",
    explicacao: "GABARITO: C. Art. 121, § 5º, do Código Penal: 'Na hipótese de homicídio culposo, o juiz poderá deixar de aplicar a pena, se as conseqüências da infração atingirem o próprio agente de forma tão grave que a sanção penal se torne desnecessária'. Trata-se do instituto do perdão judicial (causa extintiva da punibilidade, art. 107, IX, do CP e Súmula 18 do STJ).",
    alternativas: [
      {
        letra: "A",
        texto: "o agente confessar espontaneamente a autoria do fato em sede de inquérito policial.",
        correta: false
      },
      {
        letra: "B",
        texto: "houver acordo pecuniário de indenização civil homologado antes do oferecimento da denúncia.",
        correta: false
      },
      {
        letra: "C",
        texto: "as consequências da infração atingirem o próprio agente de forma tão grave que a sanção penal se torne desnecessária.",
        correta: true
      },
      {
        letra: "D",
        texto: "a vítima tiver concorrido com culpa concorrente em grau superior ao autor.",
        correta: false
      },
      {
        letra: "E",
        texto: "o autor do fato for primário e possuir ocupação lícita com residência fixa.",
        correta: false
      }
    ]
  },
  // Q69 - CEBRASPE / GM - Apropriação Indébita versus Furto mediante Fraude e Estelionato
  {
    idSlug: "penal-069",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na apropriação indébita (art. 168 do CP), o agente obtém inicialmente a posse ou detenção da coisa de maneira lícita e desvigiada, sem fraude, invertendo o ânimo subjetivo em momento posterior para agir como se proprietário fosse, distinguindo-se do estelionato, delito no qual a fraude é empregada pelo agente desde o início para induzir a vítima em erro e obter a entrega do bem.",
    explicacao: "GABARITO: CERTO. A distinção dogmática clássica: na apropriação indébita a posse antecedente é lícita e de boa-fé, ocorrendo o dolo de apropriação (animus rem sibi habendi) posteriormente; no estelionato (art. 171 do CP), o ardil/fraude é prévio para captar a posse; e no furto mediante fraude (art. 155, § 4º, II, do CP), a fraude serve para burlar a vigilância e permitir a subtração pelo próprio autor.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q70 - IBFC / PRF - Corrupção Passiva Privilegiada
  {
    idSlug: "penal-070",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O funcionário público que pratica, deixa de praticar ou retarda ato de ofício, com infração de dever funcional, cedendo a pedido ou influência de outrem, sem receber ou solicitar vantagem econômica indevida, comete o crime de:",
    explicacao: "GABARITO: A. Art. 317, § 2º, do Código Penal: 'Se o funcionário pratica, deixa de praticar ou retarda ato de ofício, com infração de dever funcional, cedendo a pedido ou influência de outrem: Pena - detenção, de 3 (três) meses a 1 (um) ano, ou multa'. Trata-se da figura típica da corrupção passiva privilegiada, que não se confunde com prevaricação (onde a motivação é interesse ou sentimento pessoal do próprio agente).",
    alternativas: [
      { letra: "A", texto: "corrupção passiva privilegiada.", correta: true },
      { letra: "B", texto: "concussão na forma tentada.", correta: false },
      { letra: "C", texto: "condescendência criminosa.", correta: false },
      { letra: "D", texto: "advocacia administrativa qualificada.", correta: false },
      { letra: "E", texto: "tráfico de influência impróprio.", correta: false }
    ]
  }
];
