import { TAXONOMIA } from "./taxonomia.mjs";

export const penalPart3 = [
  // 051 - Crimes contra a Honra: Injúria Racial e Equiparação a Racismo (Lei 14.532/23)
  {
    idSlug: "batch3-penal-051",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "Com a edição da Lei nº 14.532/2023 e o julgamento do HC 154.248/DF pelo Supremo Tribunal Federal, a injúria racial foi deslocada e equiparada materialmente aos crimes de racismo (Lei nº 7.716/1989), passando a ser infração inafiançável, imprescritível e de ação penal pública incondicionada.",
    explicacao: "GABARITO: CERTO. A Lei nº 14.532/2023 revogou o § 3º do art. 140 do Código Penal e inseriu expressamente o crime de injúria racial no art. 2º-A da Lei nº 7.716/1989. Como decorrência direta do art. 5º, XLII, da Constituição Federal e da jurisprudência consolidada do STF (HC 154.248/DF), a injúria motivada por elementos de raça, cor, etnia ou procedência nacional constitui espécie do gênero racismo, ostentando natureza inafiançável, imprescritível e processando-se mediante ação penal pública incondicionada.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A injúria racial integra hoje a Lei 7.716/89 (art. 2º-A), sendo crime inafiançável, imprescritível e de ação penal pública incondicionada."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A injúria racial é espécie de racismo, sendo inafiançável, imprescritível e de persecução pública incondicionada."
      }
    ]
  },

  // 052 - Crimes contra a Liberdade Individual: Stalking / Perseguição (Art. 147-A)
  {
    idSlug: "batch3-penal-052",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Sobre o crime de perseguição (stalking), tipificado no art. 147-A do Código Penal pela Lei nº 14.132/2021, assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra C. O art. 147-A do Código Penal define o crime de perseguição: 'Perseguir alguém, reiteradamente e por qualquer meio, ameaçando-lhe a integridade física ou psicológica, restringindo-lhe a capacidade de locomoção ou, de qualquer forma, invadindo ou perturbando sua esfera de liberdade ou privacidade'. Trata-se de crime habitual (exige reiteração de atos). Por força do § 3º, 'O crime deste artigo somente se procede mediante representação', salvo se praticado no contexto de violência doméstica contra mulher com aplicação conjunta de tipos da Lei Maria da Penha.",
    alternativas: [
      {
        letra: "A",
        texto: "Trata-se de crime unissubsistente e instantâneo de efeitos permanentes, consumando-se com a prática de um único ato de importunação.",
        correta: false,
        explicacao_especifica: "Incorreto. O tipo exige expressamente perseguição 'reiteradamente', ostentando natureza jurídica de crime habitual."
      },
      {
        letra: "B",
        texto: "A ação penal é pública incondicionada em todas as hipóteses fáticas, sendo vedada a exigência de representação da vítima.",
        correta: false,
        explicacao_especifica: "Incorreto. Conforme o art. 147-A, § 3º, a regra geral é de ação penal pública condicionada à representação do ofendido."
      },
      {
        letra: "C",
        texto: "Configura crime habitual que exige a reiteração da conduta por qualquer meio que ameace a integridade, restrinja a locomoção ou perturbe a privacidade da vítima, cuja pena é aumentada se cometido contra mulher por razões da condição do sexo feminino.",
        correta: true,
        explicacao_especifica: "Correto. É a síntese dogmática do caput e da majorante prevista no art. 147-A, § 1º, II, do CP."
      },
      {
        letra: "D",
        texto: "O emprego de arma de fogo pelo perseguidor desclassifica a conduta para porte ilegal de arma, absorvendo o crime de perseguição.",
        correta: false,
        explicacao_especifica: "Incorreto. O emprego de arma de fogo atua como majorante de metade da pena do crime de perseguição (art. 147-A, § 1º, I, CP)."
      },
      {
        letra: "E",
        texto: "A perseguição perpetrada por meios telemáticos (cyberstalking) é fato atípico no direito penal pátrio por ausência de contato físico.",
        correta: false,
        explicacao_especifica: "Incorreto. O tipo prevê expressamente a perseguição 'por qualquer meio', abrangendo mensagens eletrônicas e redes sociais."
      }
    ]
  },

  // 053 - Crimes contra o Patrimônio: Momento Consumativo do Furto e Roubo (Súmula 582 do STJ)
  {
    idSlug: "batch3-penal-053",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "Consuma-se o crime de roubo com a inversão da posse do bem mediante emprego de violência ou grave ameaça, ainda que por breve tempo e em seguida a perseguição imediata ao agente e recuperação da coisa roubada, sendo prescindível a posse mansa e pacífica ou desvigiada.",
    explicacao: "GABARITO: CERTO. O enunciado reproduz o teor literal da Súmula 582 do Superior Tribunal de Justiça: 'Consuma-se o crime de roubo com a inversão da posse do bem mediante emprego de violência ou grave ameaça, ainda que por breve tempo e em seguida à perseguição imediata ao agente e recuperação da coisa roubada, sendo prescindível a posse mansa e pacífica ou desvigiada'. Adotou-se categoricamente a teoria da apprehensio (ou amotio) tanto para o roubo quanto para o furto no direito penal brasileiro.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É o texto vinculativo da Súmula 582 do STJ, que consagrou a teoria da amotio/apprehensio dispensando a posse mansa e pacífica."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A consumação do roubo prescinde de posse mansa, pacífica ou desvigiada, consumando-se na inversão da posse (Súmula 582/STJ)."
      }
    ]
  },

  // 054 - Crimes contra o Patrimônio: Furto Qualificado por Emprego de Explosivo
  {
    idSlug: "batch3-penal-054",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil/BA",
    cargo_nome: "Investigador",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Durante a madrugada, criminosos explodem o cofre de uma agência bancária utilizando dinamite e subtraem a quantia de quinhentos mil reais. De acordo com as disposições do Código Penal (art. 155, § 4º-A) e da Lei dos Crimes Hediondos (Lei nº 8.072/1990):",
    explicacao: "GABARITO: Letra B. O art. 155, § 4º-A, do Código Penal tipifica o furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum, cominando pena de reclusão de 4 a 10 anos e multa. Com a edição do Pacote Anticrime (Lei nº 13.964/2019), o furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum foi expressamente inserido no rol taxativo dos crimes hediondos (art. 1º, inciso IX, da Lei 8.072/1990).",
    alternativas: [
      {
        letra: "A",
        texto: "A conduta configura furto simples em concurso material com crime de perigo comum, não ostentando natureza hedionda.",
        correta: false,
        explicacao_especifica: "Incorreto. A conduta é qualificada expressamente no § 4º-A do art. 155 do CP e possui natureza hedionda."
      },
      {
        letra: "B",
        texto: "Os autores respondem por furto qualificado pelo emprego de explosivo (art. 155, § 4º-A, do Código Penal), delito este considerado hediondo pela Lei nº 8.072/1990.",
        correta: true,
        explicacao_especifica: "Correto. O furto mediante explosivo é figura autônoma qualificada (art. 155, § 4º-A) e integra o rol dos crimes hediondos (art. 1º, IX, Lei 8.072/90)."
      },
      {
        letra: "C",
        texto: "A conduta tipifica necessariamente crime de latrocínio tentado devido ao potencial lesivo dos explosivos.",
        correta: false,
        explicacao_especifica: "Incorreto. O latrocínio pressupõe roubo qualificado pelo resultado morte (tentada ou consumada), ausente no caso narrado."
      },
      {
        letra: "D",
        texto: "O fato é desclassificado para mera contravenção penal de explosão sem vítimas.",
        correta: false,
        explicacao_especifica: "Incorreto. Houve subtração patrimonial expressiva com qualificação penal gravosa no Código Penal."
      },
      {
        letra: "E",
        texto: "O delito admite a aplicação do princípio da insignificância caso os valores sejam restituídos integralmente antes da denúncia.",
        correta: false,
        explicacao_especifica: "Incorreto. Furto qualificado com explosivos é incompatível com insignificância diante do alto desvalor da conduta e perigo comum gerado."
      }
    ]
  },

  // 055 - Crimes contra o Patrimônio: Roubo Impróprio (Art. 157, § 1º)
  {
    idSlug: "batch3-penal-055",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil/DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No roubo impróprio (art. 157, § 1º, do Código Penal), a violência ou a grave ameaça é empregada logo após a consumação da subtração da coisa, a fim de assegurar a impunidade do crime ou a detenção da coisa para si ou para terceiro, sendo inadmissível a forma tentada segundo a doutrina amplamente majoritária e a jurisprudência dos Tribunais Superiores.",
    explicacao: "GABARITO: CERTO. O art. 157, § 1º, do CP define o roubo impróprio: 'Na mesma pena incorre quem, logo depois de subtraída a coisa, emprega violência contra pessoa ou grave ameaça, a fim de assegurar a impunidade do crime ou a detenção da coisa para si ou para terceiro'. Na esteira da jurisprudência consolidada do STJ e STF, o roubo impróprio não admite tentativa: ou o agente emprega a violência/grave ameaça após a subtração e o crime se consuma instantaneamente, ou não chega a empregá-la e responde por tentativa de furto (ou furto consumado em concurso com eventual delito de ameaça/lesão).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O roubo impróprio consuma-se com o emprego da violência ou grave ameaça posterior à subtração, inadmitindo a tentativa."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A doutrina e a jurisprudência dos Tribunais Superiores consolidaram a inadmissibilidade da tentativa no roubo impróprio."
      }
    ]
  },

  // 056 - Crimes contra o Patrimônio: Latrocínio e Súmula 610 do STF
  {
    idSlug: "batch3-penal-056",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "AOCP",
    orgao_nome: "Polícia Civil/GO",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em uma ação criminosa patrimonial armada, Marcelo efetua disparos fatais contra o vigilante de um estabelecimento comercial com o inequívoco propósito de subtrair o malote de dinheiro do cofre. Contudo, em razão da aproximação imediata de uma viatura policial que realizava patrulhamento ostensivo, Marcelo foge sem conseguir levar qualquer quantia patrimonial. Conforme a orientação vinculante e sumulada do Supremo Tribunal Federal (Súmula 610/STF), Marcelo praticou:",
    explicacao: "GABARITO: Letra C. A Súmula 610 do Supremo Tribunal Federal estabelece: 'Há crime de latrocínio, quando o homicídio se consuma, ainda que não se realize a subtração de bens da vítima'. O bem jurídico tutelado primariamente e de maior relevância no latrocínio (art. 157, § 3º, II do CP) é a vida humana. Consumado o resultado morte em contexto de violência patrimonial, o crime de latrocínio está integralmente consumado, ainda que a vantagem patrimonial almejada não tenha sido efetivamente auferida.",
    alternativas: [
      {
        letra: "A",
        texto: "Latrocínio na modalidade tentada, tendo em vista que a subtração patrimonial restou frustrada.",
        correta: false,
        explicacao_especifica: "Incorreto. Havendo morte consumada, a Súmula 610 do STF veda a capitulação como latrocínio tentado."
      },
      {
        letra: "B",
        texto: "Homicídio qualificado em concurso material com tentativa de furto simples.",
        correta: false,
        explicacao_especifica: "Incorreto. A violência armada letal com finalidade de subtração patrimonial subsume-se expressamente ao latrocínio."
      },
      {
        letra: "C",
        texto: "Latrocínio consumado, pois a consumação do homicídio atrai a consumação do crime complexo, independentemente do êxito na subtração dos bens.",
        correta: true,
        explicacao_especifica: "Correto. É o enunciado exato da Súmula 610 do STF: morte consumada + subtração frustrada = latrocínio consumado."
      },
      {
        letra: "D",
        texto: "Homicídio com dolo eventual e crime tentado de apropriação indébita.",
        correta: false,
        explicacao_especifica: "Incorreto. Houve violência premeditada contra a pessoa para subtração coercitiva, excluindo dolo eventual isolado e apropriação indébita."
      },
      {
        letra: "E",
        texto: "Tentativa de roubo qualificado com absorção integral do resultado morte por consunção.",
        correta: false,
        explicacao_especifica: "Incorreto. O resultado morte consumada qualifica o crime como latrocínio consumado (art. 157, § 3º, II, CP)."
      }
    ]
  },

  // 057 - Crimes contra o Patrimônio: Extorsão e Súmula 96 do STJ
  {
    idSlug: "batch3-penal-057",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O crime de extorsão (art. 158 do Código Penal) é delito formal de consumação antecipada, consumando-se no exato momento em que o constrangimento mediante violência ou grave ameaça é imposto à vítima, sendo o auferimento da vantagem econômica indevida mero exaurimento do crime.",
    explicacao: "GABARITO: CERTO. Nos termos da Súmula 96 do Superior Tribunal de Justiça: 'O crime de extorsão consuma-se independentemente da obtenção da vantagem indevida'. A extorsão é crime formal (de consumação antecipada): consuma-se no momento em que a vítima é coagida pelo agente a fazer, tolerar que se faça ou deixar de fazer alguma coisa para proporcionar a indevida vantagem econômica. O efetivo recebimento do valor ou benefício configura mero exaurimento da conduta punível.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Conforme a Súmula 96 do STJ, a extorsão é crime formal e independe da efetiva obtenção da vantagem indevida para sua consumação."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A obtenção do proveito patrimonial é mero exaurimento da extorsão consumada (Súmula 96/STJ)."
      }
    ]
  },

  // 058 - Crimes contra o Patrimônio: Fraude Eletrônica e Ação Penal no Estelionato
  {
    idSlug: "batch3-penal-058",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/MG",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito das alterações introduzidas no crime de estelionato (art. 171 do Código Penal) pela Lei nº 13.964/2019 (Pacote Anticrime) e pela Lei nº 14.155/2021 (Fraude Eletrônica), assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra A. O art. 171, § 2º-B, do CP tipifica a figura qualificada da Fraude Eletrônica com pena de reclusão de 4 a 8 anos e multa quando o estelionato é praticado mediante a utilização de informações fornecidas pela vítima ou por terceiro induzido a erro por meio de redes sociais, contatos telefônicos ou envio de correio eletrônico fraudulento. Ademais, o § 5º do art. 171 estabelece que a ação penal no estelionato é pública condicionada à representação, salvo quando a vítima for a Administração Pública, criança/adolescente, pessoa com deficiência mental ou idoso/vulnerável maior de 70 anos.",
    alternativas: [
      {
        letra: "A",
        texto: "A fraude eletrônica (art. 171, § 2º-B) possui pena qualificada de reclusão de quatro a oito anos, e a ação penal no estelionato é, em regra, pública condicionada à representação do ofendido.",
        correta: true,
        explicacao_especifica: "Correto. É o regime jurídico vigente: pena de 4 a 8 anos na fraude eletrônica (§ 2º-B) e regra geral de ação pública condicionada (§ 5º)."
      },
      {
        letra: "B",
        texto: "O crime de estelionato eletrônico passou a ser de ação penal privada exclusiva com prazo decadencial de trinta dias.",
        correta: false,
        explicacao_especifica: "Incorreto. A ação penal é pública condicionada à representação (art. 171, § 5º, do CP)."
      },
      {
        letra: "C",
        texto: "Se a vítima de estelionato for pessoa idosa com 65 anos de idade, a ação penal será obrigatoriamente privada.",
        correta: false,
        explicacao_especifica: "Incorreto. A ação é pública incondicionada se a vítima for maior de 70 anos (art. 171, § 5º, IV do CP)."
      },
      {
        letra: "D",
        texto: "O estelionato eletrônico admite o perdão judicial pelo magistrado caso a fraude seja operada por meio de correio eletrônico falso.",
        correta: false,
        explicacao_especifica: "Incorreto. Não há perdão judicial no estelionato qualificado eletrônico."
      },
      {
        letra: "E",
        texto: "A fraude eletrônica tipifica exclusivamente o crime de invasão de dispositivo informático (art. 154-A do CP).",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 171, § 2º-B pune o estelionato com fraude mediante engenharia social ou meios telemáticos."
      }
    ]
  },

  // 059 - Crimes contra o Patrimônio: Receptação e Autonomia (Art. 180)
  {
    idSlug: "batch3-penal-059",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O crime de receptação (art. 180 do Código Penal) é punível ainda que seja desconhecido ou isento de pena o autor do crime de que proveio a coisa, ou mesmo que tenha havido a extinção da punibilidade do delito antecedente.",
    explicacao: "GABARITO: CERTO. O art. 180, § 4º, do Código Penal consagra categoricamente a autonomia da receptação: 'A receptação é punível ainda que desconhecido ou isento de pena o autor do crime de que proveio a coisa'. Trata-se de crime acessório (pressupõe um delito anterior), porém dotado de punibilidade autônoma: a isenção de pena (ex.: imunidade patrimonial do ladrão), o desconhecimento ou a prescrição do crime antecedente não impedem a condenação do receptador.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 180, § 4º, do CP estabelece a punibilidade autônoma da receptação, mesmo se o autor originário for isento de pena ou desconhecido."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A receptação subsiste e é punível autonomamente nos termos expressos do art. 180, § 4º, do CP."
      }
    ]
  },

  // 060 - Crimes contra o Patrimônio: Imunidades Patrimoniais (Arts. 181 a 183)
  {
    idSlug: "batch3-penal-060",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Juliano, maior e capaz, subtrai mediante fraude as economias guardadas por seu genitor, um idoso com 68 anos de idade. Ao tomar conhecimento do fato, o pai procura a delegacia de polícia para registrar a ocorrência. Diante das regras de imunidade patrimonial previstas nos arts. 181, 182 e 183 do Código Penal e no Estatuto da Pessoa Idosa:",
    explicacao: "GABARITO: Letra B. O art. 181, II, do CP prevê como escusa absolutória a isenção de pena para crimes patrimoniais cometidos contra ascendente ou descendente. Contudo, o art. 183, inciso III, do Código Penal (com redação harmonizada com o Estatuto da Pessoa Idosa) afasta peremptoriamente qualquer imunidade (absoluta ou relativa) 'se o crime é praticado contra pessoa com idade igual ou superior a 60 (sessenta) anos'. Como o genitor possui 68 anos, a imunidade é integralmente inaplicável, respondendo Juliano pelo crime patrimonial mediante ação penal pública incondicionada.",
    alternativas: [
      {
        letra: "A",
        texto: "Juliano é isento de pena em razão da escusa absolutória incondicional que protege as relações de filiação legítima.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 183, III afasta expressamente a escusa absolutória quando a vítima tem 60 anos ou mais."
      },
      {
        letra: "B",
        texto: "Não se aplica a escusa absolutória em favor de Juliano, porquanto a lei penal expressamente veda qualquer imunidade patrimonial quando a vítima possui idade igual ou superior a sessenta anos.",
        correta: true,
        explicacao_especifica: "Correto. O art. 183, III, do CP exclui a aplicação dos arts. 181 e 182 se a vítima for pessoa idosa (60 anos ou mais)."
      },
      {
        letra: "C",
        texto: "A persecução penal dependerá de representação prévia do genitor, por força da escusa relativa do art. 182 do CP.",
        correta: false,
        explicacao_especifica: "Incorreto. A cláusula excludente do art. 183, III afasta tanto a escusa absoluta quanto a relativa para vítimas idosas."
      },
      {
        letra: "D",
        texto: "Juliano responderá por apropriação indébita com redução obrigatória de dois terços da pena privativa de liberdade.",
        correta: false,
        explicacao_especifica: "Incorreto. Não há previsão de redução de pena automática e o tipo praticado foi estelionato/furto qualificado por fraude."
      },
      {
        letra: "E",
        texto: "O delegado de polícia deverá arquivar o inquérito policial liminarmente por atipicidade formal de conduta familiar.",
        correta: false,
        explicacao_especifica: "Incorreto. O fato é formal e materialmente típico, ilícito e culpável, sem incidência de escusas absolutórias."
      }
    ]
  },

  // 061 - Crimes contra a Administração Pública: Funcionário Público por Equiparação
  {
    idSlug: "batch3-penal-061",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "Equipara-se a funcionário público, para efeitos penais, quem exerce cargo, emprego ou função em entidade paraestatal, bem como quem trabalha para empresa prestadora de serviço contratada ou conveniada para a execução de atividade típica da Administração Pública.",
    explicacao: "GABARITO: CERTO. O art. 327, § 1º, do Código Penal estabelece a equiparação funcional penal: 'Equipara-se a funcionário público quem exerce cargo, emprego ou função em entidade paraestatal, e quem trabalha para empresa prestadora de serviço contratada ou conveniada para a execução de atividade típica da Administração Pública'. O § 2º prevê ainda causa de aumento de pena da terça parte quando os autores forem ocupantes de cargos em comissão ou função de direção/assessoramento.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O texto reproduz com fidelidade absoluta o art. 327, § 1º, do Código Penal."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A equiparação penal funcional abrange entidades paraestatais e prestadoras terceirizadas em atividades típicas (art. 327, § 1º, CP)."
      }
    ]
  },

  // 062 - Crimes Funcionais: Peculato Próprio (Apropriação e Desvio)
  {
    idSlug: "batch3-penal-062",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Mariana, servidora pública municipal responsável pela tesouraria da Secretaria de Saúde, detém a posse direta e legítima de recursos públicos destinados ao custeio de medicamentos de alto custo. Valendo-se dessa posse funcional, Mariana destina quinhentos mil reais para a conta bancária de uma empresa de entretenimento pertencente a seu cunhado, para patrocinar evento festivo particular. A conduta de Mariana tipifica formalmente o crime de:",
    explicacao: "GABARITO: Letra C. O art. 312, caput, 2ª parte, do Código Penal disciplina o peculato-desvio: 'Apropriar-se o funcionário público de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo, ou desviá-lo, em proveito próprio ou alheio'. Como Mariana já possuía a posse legítima em razão do cargo e empregou os recursos públicos em destinação diversa da legalmente prevista em proveito alheio (empresa do cunhado), consumou-se o peculato-desvio.",
    alternativas: [
      {
        letra: "A",
        texto: "Peculato-furto (art. 312, § 1º, do CP).",
        correta: false,
        explicacao_especifica: "Incorreto. O peculato-furto ocorre quando o funcionário não tem a posse e subtrai o bem valendo-se da facilidade que o cargo proporciona."
      },
      {
        letra: "B",
        texto: "Corrupção passiva privilegiada (art. 317, § 2º, do CP).",
        correta: false,
        explicacao_especifica: "Incorreto. A conduta não foi de ceder a pedido ou influência de outrem, mas de desvio efetivo de verba sob sua posse funcional."
      },
      {
        letra: "C",
        texto: "Peculato-desvio (art. 312, caput, segunda parte, do CP).",
        correta: true,
        explicacao_especifica: "Correto. O desvio de verba pública sob posse funcional legítima em proveito de terceiro configura peculato-desvio (art. 312, caput, 2ª parte)."
      },
      {
        letra: "D",
        texto: "Prevaricação simples (art. 319 do CP).",
        correta: false,
        explicacao_especifica: "Incorreto. A prevaricação é crime subsidiário que tutela o dever de ofício moral e não a apropriação/desvio de patrimônio público."
      },
      {
        letra: "E",
        texto: "Mera infração administrativa de desvio orçamentário sem repercussão penal.",
        correta: false,
        explicacao_especifica: "Incorreto. O desvio doloso de valores públicos sob custódia funcional é conduta criminalizada com reclusão de 2 a 12 anos."
      }
    ]
  },

  // 063 - Crimes Funcionais: Peculato Culposo e Reparação do Dano
  {
    idSlug: "batch3-penal-063",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil/DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "No crime de peculato culposo (art. 312, § 2º, do Código Penal), a reparação do dano patrimonial pelo funcionário público, se precede à sentença irrecorrível, extingue a punibilidade; se lhe é posterior, reduz de metade a pena imposta.",
    explicacao: "GABARITO: CERTO. O art. 312, § 3º, do Código Penal estabelece essa regra benéfica específica para a modalidade culposa do peculato: 'No caso do parágrafo anterior [peculato culposo], a reparação do dano, se precede à sentença irrecorrível, extingue a punibilidade; se lhe é posterior, reduz de metade a pena imposta'. Esse benefício não se estende aos crimes de peculato doloso (em que a reparação anterior à denúncia apenas atua como arrependimento posterior do art. 16 com redução de pena).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 312, § 3º, prevê a extinção da punibilidade na reparação prévia à sentença irrecorrível e redução de metade se posterior."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O efeito extintivo da punibilidade ou redutor da pena no peculato culposo decorre expressamente do art. 312, § 3º, do CP."
      }
    ]
  },

  // 064 - Crimes Funcionais: Concussão vs Corrupção Passiva
  {
    idSlug: "batch3-penal-064",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil/MG",
    cargo_nome: "Investigador",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "A distinção dogmática fundamental entre o crime de concussão (art. 316 do Código Penal) e o crime de corrupção passiva (art. 317 do Código Penal) reside no núcleo do tipo verbal empregado pelo funcionário público, consubstanciando-se:",
    explicacao: "GABARITO: Letra B. Na concussão (art. 316 do CP), o verbo nuclear é EXIGIR vantagem indevida, impondo constrangimento funcional intimidativo com ameaça implícita ou explícita de represália. Já na corrupção passiva (art. 317 do CP), os verbos nucleares são SOLICITAR ou RECEBER vantagem indevida, ou ACEITAR promessa de tal vantagem. A exigência coercitiva é a marca distintiva essencial da concussão.",
    alternativas: [
      {
        letra: "A",
        texto: "Na concussão, o funcionário solicita o valor; na corrupção passiva, ele o exige sob ameaça de prisão.",
        correta: false,
        explicacao_especifica: "Incorreto. Os verbos estão invertidos: concussão é exigir; corrupção passiva é solicitar, receber ou aceitar promessa."
      },
      {
        letra: "B",
        texto: "Na concussão, a conduta consiste em exigir vantagem indevida; na corrupção passiva, consiste em solicitar ou receber vantagem indevida, ou aceitar promessa de tal vantagem.",
        correta: true,
        explicacao_especifica: "Correto. O verbo 'exigir' tipifica a concussão (art. 316), enquanto 'solicitar/receber/aceitar promessa' tipifica a corrupção passiva (art. 317)."
      },
      {
        letra: "C",
        texto: "A concussão exige que a vantagem seja estritamente financeira, ao passo que a corrupção passiva admite apenas favores sexuais.",
        correta: false,
        explicacao_especifica: "Incorreto. Em ambos os tipos a vantagem indevida pode ser patrimonial, moral ou de qualquer outra natureza."
      },
      {
        letra: "D",
        texto: "A concussão é crime material dependente do pagamento, e a corrupção passiva é crime de mera conduta praticado apenas por particular.",
        correta: false,
        explicacao_especifica: "Incorreto. Ambos são crimes formais praticados por funcionário público contra a administração."
      },
      {
        letra: "E",
        texto: "A corrupção passiva só pode ser cometida fora do exercício do cargo e sem qualquer relação com a função pública.",
        correta: false,
        explicacao_especifica: "Incorreto. A corrupção passiva exige nexo causal direto com a função pública (art. 317, caput: 'em razão dela')."
      }
    ]
  },

  // 065 - Crimes Funcionais: Prevaricação vs Condescendência Criminosa
  {
    idSlug: "batch3-penal-065",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O funcionário público que, por indulgência, deixa de responsabilizar subordinado que cometeu infração no exercício do cargo pratica o crime de condescendência criminosa (art. 320 do Código Penal), delito de menor potencial ofensivo que se distingue da prevaricação por não exigir motivação de satisfação de interesse ou sentimento pessoal.",
    explicacao: "GABARITO: CERTO. O art. 320 do CP tipifica a condescendência criminosa: 'Deixar o funcionário, por indulgência, de responsabilizar subordinado que cometeu infração no exercício do cargo ou, quando lhe falte competência, não levar o fato ao conhecimento da autoridade competente'. O elemento subjetivo específico é a indulgência (clemência, tolerância, comiseração). Já a prevaricação (art. 319 do CP) exige o dolo específico de 'satisfazer interesse ou sentimento pessoal' genérico, que não se confunde com o sentimento estrito de indulgência.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 320 do CP tem no elemento subjetivo 'por indulgência' sua elementar típica, distinguindo-se da prevaricação (art. 319)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A omissão funcional movida por indulgência consubstancia estritamente o crime de condescendência criminosa (art. 320 do CP)."
      }
    ]
  },

  // 066 - Crimes Funcionais: Peculato Eletrônico (Art. 313-A)
  {
    idSlug: "batch3-penal-066",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm,
    banca_nome: "AOCP",
    orgao_nome: "Polícia Civil/PR",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O crime de inserção de dados falsos em sistema de informações (conhecido doutrinariamente como peculato eletrônico), disciplinado no art. 313-A do Código Penal:",
    explicacao: "GABARITO: Letra B. O art. 313-A do Código Penal estabelece como crime de inserção de dados falsos em sistema de informações: 'Inserir ou facilitar, o funcionário autorizado, a inserção de dados falsos, alterar ou excluir indevidamente dados corretos nos sistemas informatizados ou bancos de dados da Administração Pública com o fim de obter vantagem indevida para si ou para outrem ou para causar dano'. Trata-se de crime próprio com sujeito ativo qualificado ('o funcionário autorizado', detentor de credenciais legítimas) e exige o elemento subjetivo específico (dolo específico de obter vantagem indevida ou causar dano).",
    alternativas: [
      {
        letra: "A",
        texto: "Pode ser praticado por qualquer servidor público, mesmo sem autorização de acesso ao sistema, prescindindo de dolo específico.",
        correta: false,
        explicacao_especifica: "Incorreto. O tipo exige expressamente a condição de 'funcionário autorizado' e dolo específico de obter vantagem ou causar dano."
      },
      {
        letra: "B",
        texto: "Constitui crime próprio que exige a qualidade especial de funcionário autorizado a operar o sistema informatizado, punido com reclusão de 2 a 12 anos e multa.",
        correta: true,
        explicacao_especifica: "Correto. O art. 313-A do CP pune com reclusão de 2 a 12 anos o funcionário autorizado que insere dados falsos com finalidade de vantagem ou dano."
      },
      {
        letra: "C",
        texto: "Configura mera modalidade atenuada do crime de prevaricação digital, punida com detenção de três meses a um ano.",
        correta: false,
        explicacao_especifica: "Incorreto. A pena do art. 313-A é severa (reclusão de 2 a 12 anos), idêntica à do peculato clássico."
      },
      {
        letra: "D",
        texto: "Admite modalidade culposa na hipótese de erro de digitação involuntário em prontuários eletrônicos.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 313-A não prevê modalidade culposa, punindo-se apenas condutas dolosas finalísticas."
      },
      {
        letra: "E",
        texto: "Consuma-se somente após o saque bancário efetivo da vantagem econômica obtida no sistema.",
        correta: false,
        explicacao_especifica: "Incorreto. É crime formal que se consuma com a inserção, alteração ou exclusão indevida dos dados no banco."
      }
    ]
  },

  // 067 - Crimes contra a Administração: Desobediência no Trânsito (Tema 1060 do STJ)
  {
    idSlug: "batch3-penal-067",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A desobediência à ordem legal de parada emanada por policiais militares ou policiais rodoviários federais no exercício de atividade ostensiva de segurança pública ou fiscalização de trânsito configura o crime de desobediência (art. 330 do Código Penal), não sendo a sanção administrativa prevista no Código de Trânsito Brasileiro óbice à responsabilização penal.",
    explicacao: "GABARITO: CERTO. O Superior Tribunal de Justiça, no julgamento do Tema 1060 dos Recursos Especiais Repetitivos (REsp 1.859.933/SC e REsp 1.860.334/SP), fixou a seguinte tese vinculante: 'A desobediência à ordem legal de parada, emanada por agentes públicos em contexto de policiamento ostensivo, para a prevenção e repressão de crimes, ou em fiscalização de trânsito, tipifica o crime de desobediência do art. 330 do Código Penal, não sendo a cumulação de sanções de trânsito com as sanções penais hipótese de bis in idem'.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É a tese vinculante fixada pelo STJ no Tema 1060 dos Recursos Repetitivos, reconhecendo o crime do art. 330 do CP."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A conduta não é mera infração administrativa; tipifica o crime de desobediência (art. 330 do CP) conforme tese do Tema 1060/STJ."
      }
    ]
  },

  // 068 - Crimes contra a Administração: Desacato e ADPF 496 do STF
  {
    idSlug: "batch3-penal-068",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Investigador",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "O Supremo Tribunal Federal, ao julgar a Arguição de Descumprimento de Preceito Fundamental nº 496 (ADPF 496/DF), fixou entendimento de repercussão geral sobre a recepção do crime de desacato (art. 331 do Código Penal) pela Constituição Federal de 1988 e pela Convenção Americana sobre Direitos Humanos. De acordo com a Suprema Corte:",
    explicacao: "GABARITO: Letra D. O Plenário do Supremo Tribunal Federal, no julgamento da ADPF 496/DF (Rel. Min. Luís Roberto Barroso), declarou a plena compatibilidade do crime de desacato (art. 331 do Código Penal) com a ordem constitucional inaugurada pela Carta de 1988 e com o Pacto de São José da Costa Rica. A tipificação do desacato protege o regular funcionamento da Administração Pública e a respeitabilidade do exercício das funções estatais, sem violar a liberdade de expressão.",
    alternativas: [
      {
        letra: "A",
        texto: "O crime de desacato foi integralmente revogado por ser incompatível com o Pacto de São José da Costa Rica e com o Estado Democrático de Direito.",
        correta: false,
        explicacao_especifica: "Incorreto. O STF julgou improcedente a ADPF 496, reconhecendo a vigência e constitucionalidade do desacato."
      },
      {
        letra: "B",
        texto: "O desacato passou a ser admitido exclusivamente quando praticado em face de membros de tribunais superiores.",
        correta: false,
        explicacao_especifica: "Incorreto. O desacato protege qualquer funcionário público no exercício da função ou em razão dela."
      },
      {
        letra: "C",
        texto: "A conduta de desacato foi despenalizada, subsistindo unicamente como ilícito civil indenizatório.",
        correta: false,
        explicacao_especifica: "Incorreto. O tipo penal do art. 331 do CP continua hígido, cominando pena de detenção de 6 meses a 2 anos ou multa."
      },
      {
        letra: "D",
        texto: "O art. 331 do Código Penal (crime de desacato) foi recepcionado pela Constituição Federal de 1988 e é plenamente compatível com o Pacto de São José da Costa Rica, tutelando o prestígio e o regular exercício da função pública.",
        correta: true,
        explicacao_especifica: "Correto. Decisão do Pleno do STF na ADPF 496/DF: o crime de desacato é plenamente constitucional e compatível com tratados internacionais."
      },
      {
        letra: "E",
        texto: "O desacato foi fundido com a desobediência, abolindo-se a pena de detenção.",
        correta: false,
        explicacao_especifica: "Incorreto. O tipo do art. 331 permanece autônomo com seu preceito secundário inalterado."
      }
    ]
  },

  // 069 - Crimes contra a Administração: Corrupção Ativa (Art. 333)
  {
    idSlug: "batch3-penal-069",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O crime de corrupção ativa (art. 333 do Código Penal) é delito formal e consuma-se com o simples oferecimento ou promessa de vantagem indevida a funcionário público para determiná-lo a praticar, omitir ou retardar ato de ofício, independentemente da aceitação da oferta pelo agente estatal.",
    explicacao: "GABARITO: CERTO. O art. 333 do Código Penal pune a corrupção ativa: 'Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício'. Por ser crime formal (de consumação antecipada), consuma-se no exato instante em que o funcionário público toma conhecimento da oferta ou da promessa de vantagem indevida. Se o funcionário recusa a proposta ou efetua a prisão em flagrante imediata do corruptor, a corrupção ativa resta integralmente consumada.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A corrupção ativa é crime formal e independe de aceitação do servidor para estar consumada."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O crime consuma-se com a oferta/promessa da vantagem indevida, sendo a recusa irrelevante para a consumação."
      }
    ]
  },

  // 070 - Crimes contra a Administração da Justiça: Falso Testemunho e Retratação
  {
    idSlug: "batch3-penal-070",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação ao crime de falso testemunho ou falsa perícia (art. 342 do Código Penal) e ao instituto da retratação, assinale a opção correta à luz da legislação penal e da jurisprudência dominante:",
    explicacao: "GABARITO: Letra A. O art. 342, § 2º, do Código Penal consagra que 'O fato deixa de ser punível se, antes da sentença no processo em que ocorreu o ilícito, o agente se retrata ou declara a verdade'. Trata-se de causa extintiva da punibilidade (escusa absolutória superveniente). O termo final preclusivo para a retratação válida é a prolação da sentença no processo principal onde foi prestado o depoimento falso.",
    alternativas: [
      {
        letra: "A",
        texto: "O fato deixa de ser punível se, antes da sentença no processo em que ocorreu o ilícito, o agente se retrata ou declara a verdade.",
        correta: true,
        explicacao_especifica: "Correto. É o texto literal do art. 342, § 2º, do CP, configurando causa extintiva da punibilidade antes da sentença do processo principal."
      },
      {
        letra: "B",
        texto: "A retratação é admissível a qualquer tempo na fase recursal, desde que confirmada perante o tribunal de apelação.",
        correta: false,
        explicacao_especifica: "Incorreto. O limite temporal expresso na lei é 'antes da sentença no processo em que ocorreu o ilícito' (art. 342, § 2º)."
      },
      {
        letra: "C",
        texto: "O crime de falso testemunho é material, exigindo que o depoimento mentiroso influencie decisivamente o convencimento do juiz da causa.",
        correta: false,
        explicacao_especifica: "Incorreto. É crime formal de mão própria, consumando-se com o encerramento do depoimento falso perante a autoridade."
      },
      {
        letra: "D",
        texto: "A retratação do perito criminal impede a punição, mas gera a reclusão automática do advogado que o arrolou.",
        correta: false,
        explicacao_especifica: "Incorreto. A extinção da punibilidade decorre de ato legal do perito/testemunha e não enseja responsabilização automática de advogado sem dolo de corrupção."
      },
      {
        letra: "E",
        texto: "O falso testemunho prestado em inquérito policial não admite retratação em juízo.",
        correta: false,
        explicacao_especifica: "Incorreto. A retratação em juízo antes da sentença penal extingue a punibilidade do falso testemunho prestado no inquérito."
      }
    ]
  }
];
