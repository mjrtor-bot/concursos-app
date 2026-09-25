import { TAXONOMIA } from "./taxonomia.mjs";

export const penalPart2 = [
  // 026 - Culpabilidade: Embriaguez e Teoria da Actio Libera in Causa
  {
    idSlug: "batch3-penal-026",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil/GO",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A embriaguez voluntária ou culposa pelo álcool ou substâncias de efeitos análogos não exclui a imputabilidade penal, adotando o Código Penal a teoria da actio libera in causa, segundo a qual a capacidade de imputação do agente é aferida no momento em que ele livremente decidiu ingerir a substância inebriante.",
    explicacao: "GABARITO: CERTO. O art. 28, inciso II, do Código Penal estabelece que 'não excluem a imputabilidade penal: a embriaguez, voluntária ou culposa, pelo álcool ou substância de efeitos análogos'. O ordenamento penal brasileiro adota nesses casos a teoria da actio libera in causa (ação livre na causa): se o indivíduo era imputável no instante em que decidiu beber (ou descuidou-se ingerindo bebida), a imputabilidade resta preservada no instante da prática do delito, respondendo por dolo ou culpa conforme o caso. Apenas a embriaguez completa proveniente de caso fortuito ou força maior isenta o agente de pena (art. 28, § 1º).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A embriaguez voluntária ou culposa não afasta a culpabilidade, aplicando-se a teoria da actio libera in causa expressa no art. 28, II, do CP."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. Apenas a embriaguez involuntária (decorrente de caso fortuito ou força maior) e completa exclui a imputabilidade penal (art. 28, § 1º, CP)."
      }
    ]
  },

  // 027 - Culpabilidade: Erro de Proibição
  {
    idSlug: "batch3-penal-027",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Sobre a potencial consciência da ilicitude e o erro de proibição disciplinado no art. 21 do Código Penal, assinale a assertiva correta:",
    explicacao: "GABARITO: Letra B. O art. 21 do Código Penal dispõe: 'O desconhecimento da lei é inescusável. O erro sobre a ilicitude do fato, se inevitável, isenta de pena; se evitável, poderá diminuí-la de um sexto a um terço'. O erro de proibição atua no plano da culpabilidade: o erro inevitável (escusável) exclui a culpabilidade por ausência de potencial consciência da ilicitude; já o erro evitável (inescusável) mantém a culpabilidade, atuando como causa de diminuição da pena.",
    alternativas: [
      {
        letra: "A",
        texto: "O erro de proibição inevitável exclui o dolo da conduta, permitindo a punição do agente por crime culposo.",
        correta: false,
        explicacao_especifica: "Incorreto. O erro que exclui o dolo é o erro de tipo (art. 20). O erro de proibição atua na culpabilidade, isentando de pena quando inevitável."
      },
      {
        letra: "B",
        texto: "O erro sobre a ilicitude do fato, se inevitável, isenta o agente de pena; se evitável, não afasta a culpabilidade, mas pode atuar como causa de diminuição de pena de um sexto a um terço.",
        correta: true,
        explicacao_especifica: "Correto. É a exata redação e consequência dogmática do art. 21, caput, do Código Penal."
      },
      {
        letra: "C",
        texto: "O erro de proibição direto ocorre quando o agente supõe existir uma causa de justificação que o ordenamento não reconhece.",
        correta: false,
        explicacao_especifica: "Incorreto. A suposição de existência de causa de justificação não prevista em lei configura erro de proibição indireto (ou erro de permissão)."
      },
      {
        letra: "D",
        texto: "O desconhecimento formal do texto da lei penal é admitido pelo Código Penal como causa supralegal de exclusão da tipicidade material.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 21, caput, 1ª parte, estabelece categoricamente que 'O desconhecimento da lei é inescusável'."
      },
      {
        letra: "E",
        texto: "O erro de proibição vencível extingue a punibilidade pela concessão obrigatória de perdão judicial.",
        correta: false,
        explicacao_especifica: "Incorreto. O erro vencível enseja redução de pena de 1/6 a 1/3, e não extinção de punibilidade por perdão judicial."
      }
    ]
  },

  // 028 - Concurso de Pessoas: Teoria Monista e Exceções Pluralistas
  {
    idSlug: "batch3-penal-028",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.concurso_pessoas_crimes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O Código Penal brasileiro adotou expressamente como regra a teoria monista (ou unitária temperada) para o concurso de pessoas, segundo a qual todos os que concorrem para o crime incidem nas penas a este cominadas, na medida de sua culpabilidade, ressalvadas as exceções pluralistas expressamente tipificadas pelo legislador.",
    explicacao: "GABARITO: CERTO. O art. 29, caput, do Código Penal consagra a Teoria Monista ou Unitária Temperada: 'Quem, de qualquer modo, concorre para o crime incide nas penas a este cominadas, na medida de sua culpabilidade'. Há unidade de crime para a pluralidade de agentes. Contudo, o próprio ordenamento estabelece exceções pluralistas expressas, nas quais os concorrentes respondem por tipos penais distintos (ex.: corrupção passiva do funcionário público no art. 317 e corrupção ativa do particular no art. 333; facilitação de contrabando no art. 318 e contrabando no art. 334-A).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 29, caput, adota a teoria monista temperada, convivendo com exceções pluralistas expressamente consagradas na legislação penal."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria monista temperada é a regra geral adotada pelo Código Penal brasileiro para o concurso de agentes."
      }
    ]
  },

  // 029 - Concurso de Pessoas: Domínio do Fato e Participação de Menor Importância
  {
    idSlug: "batch3-penal-029",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.concurso_pessoas_crimes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/MG",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em uma ação criminosa de roubo a banco, quatro indivíduos dividem tarefas: dois invadem a agência armados e rendem os seguranças; o terceiro arromba o cofre principal; e o quarto indivíduo, vizinho da agência, apenas informou previamente aos comparsas que a agência não possuía alarme silencioso no pavimento superior, auxílio este que não foi determinante para o sucesso do roubo. À luz da Teoria do Domínio do Fato e do art. 29 do Código Penal, assinale a opção correta:",
    explicacao: "GABARITO: Letra B. Pela Teoria do Domínio do Fato (Claus Roxin), é coautor aquele que possui o domínio funcional do fato, desempenhando papel essencial e relevante na execução do plano delitivo global (como os que renderam os seguranças e arrombaram o cofre). Já aquele que presta contribuição causal acessória, secundária e dispensável (sem domínio funcional do fato) atua como partícipe de menor importância, fazendo jus à causa de diminuição de pena de um sexto a um terço prevista no art. 29, § 1º, do Código Penal.",
    alternativas: [
      {
        letra: "A",
        texto: "Todos os quatro indivíduos devem ser classificados obrigatoriamente como coautores funcionais com idêntica dosimetria de pena, ante a indivisibilidade da autoria.",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria monista temperada autoriza a individualização da pena conforme a relevância da atuação de cada agente."
      },
      {
        letra: "B",
        texto: "Os três executores armados ostentam coautoria funcional por deterem o domínio do fato, enquanto o informante atuou como partícipe de menor importância, incidindo a causa de diminuição do art. 29, § 1º, do Código Penal.",
        correta: true,
        explicacao_especifica: "Correto. Os executores possuem coautoria funcional por domínio do fato, ao passo que o fornecimento de informação acessória enquadra-se como participação de menor importância (art. 29, § 1º, CP)."
      },
      {
        letra: "C",
        texto: "A participação de menor importância deve ser reconhecida apenas para os dois agentes que renderam os seguranças, por não terem tocado no numerário.",
        correta: false,
        explicacao_especifica: "Incorreto. A rendição armada dos seguranças constitui ato de coautoria executória primária no crime de roubo."
      },
      {
        letra: "D",
        texto: "O informante responderá exclusivamente pelo crime de favorecimento real, afastando o concurso de pessoas no roubo.",
        correta: false,
        explicacao_especifica: "Incorreto. O favorecimento real (art. 349 do CP) pressupõe auxílio prestado fora dos casos de coautoria ou de receptação, após a consumação do crime."
      },
      {
        letra: "E",
        texto: "A conduta do informante é atípica pela ausência de contato físico com o patrimônio da instituição financeira.",
        correta: false,
        explicacao_especifica: "Incorreto. O concurso de pessoas admite a participação moral ou material que influa causalmente no iter criminis."
      }
    ]
  },

  // 030 - Concurso de Pessoas: Cooperação Dolosamente Distinta
  {
    idSlug: "batch3-penal-030",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.concurso_pessoas_crimes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na hipótese de cooperação dolosamente distinta (desvio subjetivo de conduta), se algum dos concorrentes quis participar de crime menos grave, ser-lhe-á aplicada a pena deste, a qual será aumentada até a metade caso o resultado mais grave fosse previsível.",
    explicacao: "GABARITO: CERTO. O art. 29, § 2º, do Código Penal disciplina a cooperação dolosamente distinta: 'Se algum dos concorrentes quis participar de crime menos grave, ser-lhe-á aplicada a pena deste; essa pena será aumentada até metade, na hipótese de ter sido previsível o resultado mais grave'. O dispositivo impede a responsabilização objetiva pelo crime mais grave quando houve desvio no plano criminoso por um dos agentes, mas impõe majoração de pena caso o resultado derivado fosse objetivamente previsível.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 29, § 2º, do CP determina a punição pelo crime menos grave almejado, com aumento de até a metade se o resultado mais gravoso era previsível."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O texto reproduz com fidelidade a literalidade e a lógica dogmática do art. 29, § 2º, do Código Penal."
      }
    ]
  },

  // 031 - Concurso de Pessoas: Comunicabilidade das Circunstâncias
  {
    idSlug: "batch3-penal-031",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.concurso_pessoas_crimes,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Investigador",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Sérgio, funcionário público estadual, e Daniel, particular desprovido de qualquer vínculo com a administração pública, combinam previamente a subtração de três notebooks de última geração do almoxarifado da repartição onde Sérgio trabalha. Ciente da condição de funcionário público de Sérgio e valendo-se da facilidade que este possuía com a chave do setor, Daniel ingressa no local e subtrai os bens. De acordo com o art. 30 do Código Penal:",
    explicacao: "GABARITO: Letra A. O art. 30 do Código Penal dispõe: 'Não se comunicam as circunstâncias e as condições de caráter pessoal, salvo quando elementares do crime'. A qualidade de 'funcionário público' no crime de peculato (art. 312 do CP) constitui elementar do tipo penal (e não mera circunstância acessória). Logo, como Daniel tinha pleno conhecimento da condição funcional de Sérgio (ciência da elementar), a condição pessoal de funcionário público comunica-se a ele, respondendo ambos pelo crime de peculato-furto (art. 312, § 1º, do CP).",
    alternativas: [
      {
        letra: "A",
        texto: "Daniel responderá pelo crime de peculato-furto em coautoria com Sérgio, pois a condição de funcionário público é elementar do tipo penal e era de conhecimento do particular.",
        correta: true,
        explicacao_especifica: "Correto. Por ser elementar do crime de peculato, a qualidade de funcionário público comunica-se ao corréu particular ciente dessa condição (art. 30 do CP)."
      },
      {
        letra: "B",
        texto: "Daniel responderá apenas por furto qualificado pelo concurso de agentes, visto que as condições pessoais de funcionário público jamais se comunicam a particulares.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 30 do CP excepciona a regra da incomunicabilidade quando a condição pessoal for elementar do crime."
      },
      {
        letra: "C",
        texto: "Sérgio responderá por peculato e Daniel será processado por receptação qualificada de bens estatais.",
        correta: false,
        explicacao_especifica: "Incorreto. Daniel praticou diretamente a subtração patrimonial no almoxarifado em concurso prévio, não atuando como mero receptador posterior."
      },
      {
        letra: "D",
        texto: "Haverá crime de condescendência criminosa para Sérgio e furto simples para Daniel.",
        correta: false,
        explicacao_especifica: "Incorreto. A subtração dolosa mediante divisão de tarefas entre funcionário e particular configura peculato-furto."
      },
      {
        letra: "E",
        texto: "Ambos responderão por corrupção passiva qualificada pela violação do dever de guarda.",
        correta: false,
        explicacao_especifica: "Incorreto. A conduta é de subtração patrimonial pública (peculato-furto - art. 312, § 1º, CP)."
      }
    ]
  },

  // 032 - Concurso de Pessoas: Autoria Mediata e Crimes de Mão Própria
  {
    idSlug: "batch3-penal-032",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.concurso_pessoas_crimes,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil/BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "A autoria mediata caracteriza-se pela utilização de uma pessoa desprovida de culpabilidade, coagida moralmente de forma irresistível ou atuando em erro de tipo invencível provocado, como mero instrumento executor do crime. A respeito do cabimento da autoria mediata no direito penal brasileiro, assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra C. A autoria mediata é inadmissível nos crimes de mão própria (ou de atuação pessoal, como o falso testemunho - art. 342 do CP) e nos crimes culposos. Nos crimes de mão própria, a lei exige a execução direta e personalíssima do próprio sujeito que ostenta a condição exigida pela norma incriminadora. Se alguém induz ou coage uma testemunha a mentir em juízo, não é autor mediato de falso testemunho, mas sim partícipe moral (ou autor do crime autônomo do art. 343 do CP - corrupção de testemunha).",
    alternativas: [
      {
        letra: "A",
        texto: "A autoria mediata é plenamente admitida em crimes culposos e em contravenções penais de mera conduta.",
        correta: false,
        explicacao_especifica: "Incorreto. Não se admite autoria mediata em crimes culposos, pois a determinação do instrumento pressupõe dolo direcionado ao resultado."
      },
      {
        letra: "B",
        texto: "O autor mediato não responde pelas causas de aumento de pena decorrentes do uso de menores de idade.",
        correta: false,
        explicacao_especifica: "Incorreto. A instrumentalização de inimputável agrava e qualifica expressamente a responsabilidade penal do mandante."
      },
      {
        letra: "C",
        texto: "A autoria mediata é juridicamente inadmissível nos crimes de mão própria (delitos de conduta infungível ou personalíssima), como no falso testemunho.",
        correta: true,
        explicacao_especifica: "Correto. Os crimes de mão própria só podem ser executados fisicamente pela própria pessoa da testemunha, perito ou tradutor, rechaçando a autoria mediata."
      },
      {
        letra: "D",
        texto: "O instrumento executório coagido moralmente responderá como partícipe em razão da teoria monista absoluta.",
        correta: false,
        explicacao_especifica: "Incorreto. O coagido moralmente irresistível tem sua culpabilidade excluída (art. 22 do CP), respondendo apenas o coator como autor mediato."
      },
      {
        letra: "E",
        texto: "A autoria mediata prescinde de dolo na conduta do mandante.",
        correta: false,
        explicacao_especifica: "Incorreto. A autoria mediata exige dolo do homem de trás que domina o instrumento."
      }
    ]
  },

  // 033 - Concurso de Crimes: Concurso Formal Próprio e Cúmulo Material Benéfico
  {
    idSlug: "batch3-penal-033",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.concurso_pessoas_crimes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil/DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "No concurso formal próprio (ou perfeito), em que o agente, mediante uma só ação ou omissão, pratica dois ou mais crimes idênticos ou não, aplica-se o sistema da exasperação da pena, vedando-se, todavia, que a pena exasperada seja superior à que seria aplicada pelo cúmulo material das penas (regra do cúmulo material benéfico).",
    explicacao: "GABARITO: CERTO. O art. 70, caput, 1ª parte, do Código Penal prevê o sistema da exasperação para o concurso formal próprio: aplica-se-lhe a mais grave das penas cabíveis ou, se iguais, somente uma delas, mas aumentada, em qualquer caso, de um sexto até metade. Contudo, o parágrafo único do art. 70 estabelece expressamente o cúmulo material benéfico: 'Não poderá a pena exceder a que seria cabível pela regra do art. 69 deste Código' (cúmulo material). Se a exasperação resultar em quantum superior à soma aritmética das penas, cumulam-se materialmente as sanções em benefício do réu.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 70, parágrafo único, do CP garante o cúmulo material benéfico sempre que a exasperação resultar em pena mais severa que a soma."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A regra do cúmulo material benéfico é expressa no parágrafo único do art. 70 do Código Penal."
      }
    ]
  },

  // 034 - Concurso de Crimes: Crime Continuado Comum e Específico
  {
    idSlug: "batch3-penal-034",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.concurso_pessoas_crimes,
    banca_nome: "AOCP",
    orgao_nome: "Polícia Civil/PR",
    cargo_nome: "Investigador",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos crimes continuados disciplinados no art. 71 do Código Penal, quando se tratar de crimes dolosos, contra vítimas diferentes, cometidos com violência ou grave ameaça à pessoa (crime continuado qualificado ou específico), a aplicação da pena pelo magistrado:",
    explicacao: "GABARITO: Letra D. O art. 71, parágrafo único, do Código Penal regula a continuidade delitiva qualificada ou específica: 'Nos crimes dolosos, contra vítimas diferentes, cometidos com violência ou grave ameaça à pessoa, poderá o juiz, considerando a culpabilidade, os antecedentes, a conduta social e a personalidade do condenado, bem como os motivos e as circunstâncias, aumentar a pena de um só dos crimes, se idênticas, ou a mais grave, se diversas, até o triplo, observadas as regras do parágrafo único do art. 70 e do art. 75 deste Código'.",
    alternativas: [
      {
        letra: "A",
        texto: "Submete-se obrigatoriamente à exasperação ordinária fixa de um sexto a dois terços.",
        correta: false,
        explicacao_especifica: "Incorreto. A exasperação ordinária de 1/6 a 2/3 aplica-se ao crime continuado simples do caput do art. 71."
      },
      {
        letra: "B",
        texto: "Fica restrita ao cúmulo material simples de todas as infrações, sendo vedada a exasperação.",
        correta: false,
        explicacao_especifica: "Incorreto. O parágrafo único do art. 71 autoriza o sistema da exasperação qualificada com aumento de até o triplo."
      },
      {
        letra: "C",
        texto: "Depende exclusivamente da confissão espontânea de todos os delitos pelo acusado perante a autoridade judiciária.",
        correta: false,
        explicacao_especifica: "Incorreto. A confissão espontânea não é requisito legal para a incidência do crime continuado específico."
      },
      {
        letra: "D",
        texto: "Poderá ter a pena de um só dos crimes, se idênticas, ou a mais grave, se diversas, aumentada até o triplo, consideradas as circunstâncias judiciais desfavoráveis.",
        correta: true,
        explicacao_especifica: "Correto. É o que preceitua textualmente o art. 71, parágrafo único, do CP para crimes dolosos com violência ou grave ameaça contra vítimas diferentes."
      },
      {
        letra: "E",
        texto: "Exige o cumprimento obrigatório de no mínimo dez anos em regime fechado antes de qualquer benefício prisional.",
        correta: false,
        explicacao_especifica: "Incorreto. A fixação de regime obedece às regras do art. 33 do CP e da Lei de Execução Penal."
      }
    ]
  },

  // 035 - Aplicação da Pena: Sistema Trifásico e Súmula 231 do STJ
  {
    idSlug: "batch3-penal-035",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "Na segunda fase do cálculo da dosimetria da pena (art. 68 do Código Penal), a presença de circunstâncias atenuantes genéricas, como a menoridade relativa e a confissão espontânea, não pode conduzir a pena intermediária a patamar inferior ao mínimo legal cominado em abstrato pelo tipo penal.",
    explicacao: "GABARITO: CERTO. Conforme a Súmula 231 do Superior Tribunal de Justiça: 'A incidência da circunstância atenuante não pode conduzir à redução da pena abaixo do mínimo legal'. Esse entendimento também é reiteradamente sufragado pelo Supremo Tribunal Federal em sede de Repercussão Geral (RE 597.270/RS - Tema 158). Apenas as causas de diminuição de pena (majorantes e minorantes aplicadas na terceira fase) possuem o condão de fixar a pena abaixo do piso cominado no preceito secundário.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos termos da Súmula 231 do STJ e Tema 158/STF, atenuantes genéricas não reduzem a pena aquém do mínimo legal na 2ª fase."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A Súmula 231 do STJ veda expressamente a fixação da pena provisória abaixo do mínimo abstrato por incidência de atenuantes."
      }
    ]
  },

  // 036 - Penas Privativas de Liberdade: Regimes e Súmula 269 do STJ
  {
    idSlug: "batch3-penal-036",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Cláudio foi condenado à pena privativa de liberdade de 3 (três) anos de reclusão pela prática de furto qualificado. Na sentença, o magistrado reconheceu que Cláudio ostenta reincidência não específica, mas destacou que todas as circunstâncias judiciais do art. 59 do Código Penal são amplamente favoráveis. Diante do art. 33 do Código Penal e da jurisprudência consolidada do Superior Tribunal de Justiça (Súmula 269/STJ), assinale o regime prisional inicial mais brando que pode ser admitido para Cláudio:",
    explicacao: "GABARITO: Letra C. A regra geral do art. 33, § 2º, 'c', do CP estabelece que o reincidente não pode iniciar o cumprimento de pena no regime aberto. Todavia, a Súmula 269 do STJ excepciona o rigor da regra para permitir o regime semiaberto: 'É admissível a adoção do regime prisional semiaberto aos reincidentes condenados a pena igual ou inferior a quatro anos se favoráveis as circunstâncias judiciais'. O regime aberto, contudo, é categoricamente obstado pela reincidência.",
    alternativas: [
      {
        letra: "A",
        texto: "Regime fechado obrigatório, visto que a reincidência veda qualquer regime mais brando, independentemente do quantum da sanção.",
        correta: false,
        explicacao_especifica: "Incorreto. A reincidência isolada não impõe o regime fechado se a pena for até 4 anos e as circunstâncias forem favoráveis (Súmula 269 do STJ)."
      },
      {
        letra: "B",
        texto: "Regime aberto, ante a suficiência das circunstâncias judiciais favoráveis e a pena inferior a quatro anos.",
        correta: false,
        explicacao_especifica: "Incorreto. O regime aberto é expressamente vedado a condenados reincidentes (art. 33, § 2º, 'c', do CP)."
      },
      {
        letra: "C",
        texto: "Regime semiaberto, em conformidade com a Súmula 269 do STJ, dada a pena não superior a quatro anos e a favorabilidade das circunstâncias judiciais.",
        correta: true,
        explicacao_especifica: "Correto. Nos termos da Súmula 269 do STJ, ao réu reincidente com pena até 4 anos e circunstâncias judiciais favoráveis é admissível o regime semiaberto."
      },
      {
        letra: "D",
        texto: "Regime domiciliar sob monitoramento eletrônico substitutivo automático.",
        correta: false,
        explicacao_especifica: "Incorreto. A prisão domiciliar substitutiva exige hipóteses taxativas do art. 117 da LEP, não sendo regime inicial automático."
      },
      {
        letra: "E",
        texto: "Regime disciplinar diferenciado, em face da reiteração criminosa comprovada.",
        correta: false,
        explicacao_especifica: "Incorreto. O RDD é modalidade sancionatória disciplinar executória (art. 52 da LEP), e não regime inicial de cumprimento de pena."
      }
    ]
  },

  // 037 - Penas Restritivas de Direitos: Requisitos e Conversão
  {
    idSlug: "batch3-penal-037",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "As penas restritivas de direitos são autônomas e substituem as privativas de liberdade quando, entre outros requisitos, a pena aplicada não for superior a quatro anos e o crime não for cometido com violência ou grave ameaça à pessoa; sobrevindo descumprimento injustificado da obrigação imposta, a restritiva de direitos converter-se-á em privativa de liberdade.",
    explicacao: "GABARITO: CERTO. O art. 44, caput e inciso I, do Código Penal fixa os requisitos objetivos: pena privativa de liberdade não superior a 4 anos em crimes dolosos sem violência ou grave ameaça à pessoa (ou qualquer quantidade de pena se o crime for culposo). O art. 44, § 4º, prevê a conversão em caso de descumprimento: 'A pena restritiva de direitos converte-se em privativa de liberdade quando ocorrer o descumprimento injustificado da restrição imposta', respeitado o cômputo do tempo já cumprido como pena cumprida.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O enunciado reflete com precisão os requisitos e a regra de conversão disciplinados no art. 44, caput, I e § 4º, do Código Penal."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A conversão da PRD em PPL em face do descumprimento injustificado é expressamente prevista no art. 44, § 4º, do CP."
      }
    ]
  },

  // 038 - Sursis da Pena vs Livramento Condicional
  {
    idSlug: "batch3-penal-038",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "No tocante às distinções técnicas e requisitos legais entre a Suspensão Condicional da Pena (sursis penal - art. 77 do CP) e o Livramento Condicional (art. 83 do CP), assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra A. O sursis penal (art. 77 do CP) é a suspensão da execução da pena privativa de liberdade não superior a 2 anos, por um período de prova de 2 a 4 anos, aplicável desde que não seja indicada ou cabível a substituição por penas restritivas de direitos (art. 77, III). Já o livramento condicional (art. 83 do CP) pressupõe pena privativa de liberdade aplicada igual ou superior a 2 anos e exige o cumprimento efetivo de parte substancial da sanção (1/3 se não reincidente em crime doloso; 1/2 se reincidente em crime doloso; mais de 2/3 em crimes hediondos sem resultado morte).",
    alternativas: [
      {
        letra: "A",
        texto: "O sursis incide sobre pena privativa de liberdade não superior a dois anos quando incabível a substituição por restritiva de direitos, enquanto o livramento condicional exige pena igual ou superior a dois anos e prévio cumprimento de fração da sanção.",
        correta: true,
        explicacao_especifica: "Correto. O critério quantitativo basilar é: sursis para pena <= 2 anos (art. 77); livramento condicional para pena >= 2 anos (art. 83)."
      },
      {
        letra: "B",
        texto: "O livramento condicional suspende a execução da pena logo após a sentença de primeiro grau, sem necessidade de encarceramento prévio.",
        correta: false,
        explicacao_especifica: "Incorreto. O livramento condicional é benefício da execução penal que exige cumprimento prévio de 1/3, 1/2 ou mais de 2/3 da pena privativa de liberdade."
      },
      {
        letra: "C",
        texto: "O sursis etário é concedido apenas a condenados com idade superior a 60 anos, e o livramento condicional exige idade mínima de 70 anos.",
        correta: false,
        explicacao_especifica: "Incorreto. O sursis etário aplica-se a maiores de 70 anos (art. 77, § 2º do CP), e o livramento condicional independe de limite etário."
      },
      {
        letra: "D",
        texto: "O livramento condicional em crime hediondo com resultado morte foi expressamente autorizado pelo Pacote Anticrime após cumprimento de 50% da pena.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 83, V, do CP e o art. 112, VI, 'a' da LEP vedam o livramento condicional para condenados por crime hediondo ou equiparado com resultado morte."
      },
      {
        letra: "E",
        texto: "O período de prova do sursis simples é fixado entre cinco e dez anos de fiscalização ininterrupta.",
        correta: false,
        explicacao_especifica: "Incorreto. O período de prova do sursis comum é de 2 a 4 anos (art. 77, caput, do CP)."
      }
    ]
  },

  // 039 - Efeitos da Condenação: Perda de Cargo Público
  {
    idSlug: "batch3-penal-039",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil/DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A perda de cargo, função pública ou mandato eletivo prevista no Código Penal como efeito da condenação não é automática, exigindo declaração motivada e expressa na sentença condenatória penal, ressalvadas hipóteses específicas expressamente previstas em leis especiais.",
    explicacao: "GABARITO: CERTO. O art. 92, parágrafo único, do Código Penal estabelece: 'Os efeitos de que trata este artigo não são automáticos, devendo ser motivadamente declarados na sentença'. As hipóteses do art. 92, inciso I (perda de cargo por pena superior a 1 ano em crime com abuso de poder/violação de dever funcional, ou por pena superior a 4 anos nos demais crimes) exigem fundamentação judicial expressa. Por outro lado, legislações extravagantes preveem efeitos automáticos (como a Lei de Tortura - Lei 9.455/97, art. 1º, § 5º, e a perda definitiva na Lei de Abuso de Autoridade que exige reincidência mas requer motivação expressa).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. No Código Penal (art. 92, parágrafo único), os efeitos da perda de cargo são não automáticos e exigem motivação expressa na sentença."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A não automaticidade é expressamente consagrada no parágrafo único do art. 92 do Código Penal."
      }
    ]
  },

  // 040 - Extinção da Punibilidade: Anistia, Graça e Indulto
  {
    idSlug: "batch3-penal-040",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/RJ",
    cargo_nome: "Inspetor de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Acerca das causas de extinção da punibilidade previstas no art. 107 do Código Penal e na Constituição Federal, assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra C. A anistia (art. 107, II do CP) é concedida privativamente pelo Congresso Nacional mediante lei ordinária federal (art. 48, VIII da CF/88) e apaga todos os efeitos penais da condenação (primários e secundários), inclusive a reincidência. Já a graça (individual) e o indulto (coletivo) são de competência privativa do Presidente da República (art. 84, XII da CF/88), extinguindo apenas os efeitos executórios da pena (efeito executório principal), subsistindo os efeitos secundários penais (como a reincidência e o registro de antecedentes).",
    alternativas: [
      {
        letra: "A",
        texto: "A anistia é ato privativo do Presidente da República veiculado mediante decreto executivo e alcança apenas crimes patrimoniais.",
        correta: false,
        explicacao_especifica: "Incorreto. A anistia é de competência privativa do Congresso Nacional mediante lei federal (art. 48, VIII da CF/88)."
      },
      {
        letra: "B",
        texto: "O indulto apaga todos os efeitos primários e secundários penais e extrapenais da condenação, inclusive a obrigação civil de indenizar o dano.",
        correta: false,
        explicacao_especifica: "Incorreto. O indulto extingue apenas a pretensão executória da pena privativa de liberdade, permanecendo íntegros os efeitos civis e secundários da condenação."
      },
      {
        letra: "C",
        texto: "A anistia é veiculada por lei federal editada pelo Congresso Nacional e extingue todos os efeitos penais da condenação, enquanto o indulto e a graça são veiculados por decreto presidencial e extinguem apenas os efeitos executórios da sanção.",
        correta: true,
        explicacao_especifica: "Correto. Sintetiza com perfeita precisão técnica a natureza da anistia (lei/Congresso) e do indulto/graça (decreto/Presidente da República)."
      },
      {
        letra: "D",
        texto: "A graça é de natureza coletiva destinada a grupos indeterminados de presos, ao passo que o indulto é benefício exclusivamente individual.",
        correta: false,
        explicacao_especifica: "Incorreto. A ordem é inversa: graça é individual e indulto é coletivo."
      },
      {
        letra: "E",
        texto: "A renúncia ao direito de queixa pode ser ofertada após o trânsito em julgado da sentença condenatória.",
        correta: false,
        explicacao_especifica: "Incorreto. A renúncia é ato prévio à ação penal; após a propositura da queixa-crime, cabe o perdão do ofendido até o trânsito em julgado (art. 105 e 106 do CP)."
      }
    ]
  },

  // 041 - Prescrição da Pretensão Punitiva e Redução do Prazo (Art. 115)
  {
    idSlug: "batch3-penal-041",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Nos termos do art. 115 do Código Penal, são reduzidos de metade os prazos de prescrição quando o criminoso era, ao tempo do crime, menor de vinte e um anos, ou, na data da sentença condenatória, maior de setenta anos.",
    explicacao: "GABARITO: CERTO. O art. 115 do Código Penal prescreve expressamente: 'São reduzidos de metade os prazos de prescrição quando o criminoso era, ao tempo do crime, menor de vinte e um anos, ou, na data da sentença, maior de setenta anos'. A jurisprudência consolidada do STJ e STF estende a contagem da idade de 70 anos para a data do acórdão condenatório quando este substitui a sentença absolutória originária.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 115 do CP fixa a redução do prazo prescricional pela metade para menores de 21 anos na data do fato ou maiores de 70 anos na data da sentença."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A redução pela metade dos lapsos prescricionais nessas faixas etárias é preceito cogente do art. 115 do CP."
      }
    ]
  },

  // 042 - Interrupção da Prescrição
  {
    idSlug: "batch3-penal-042",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil/MG",
    cargo_nome: "Investigador",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No que concerne às causas interruptivas da prescrição da pretensão punitiva disciplinadas no art. 117 do Código Penal, assinale a opção que apresenta um marco interruptivo legalmente previsto:",
    explicacao: "GABARITO: Letra D. O art. 117 do Código Penal lista taxativamente as causas interruptivas: I - pelo recebimento da denúncia ou da queixa; II - pela pronúncia; III - pela decisão confirmatória da pronúncia; IV - pela publicação da sentença ou acórdão condenatórios recorríveis; V - pelo início ou continuação do cumprimento da pena; VI - pela reincidência. O oferecimento da denúncia, o indiciamento em inquérito ou a instauração de portaria policial não interrompem a prescrição.",
    alternativas: [
      {
        letra: "A",
        texto: "A instauração formal de inquérito policial pela autoridade policial competente.",
        correta: false,
        explicacao_especifica: "Incorreto. A instauração de inquérito não interrompe a prescrição penal."
      },
      {
        letra: "B",
        texto: "O oferecimento da denúncia pelo Ministério Público.",
        correta: false,
        explicacao_especifica: "Incorreto. O marco interruptivo do art. 117, I, é o recebimento judicial da denúncia, e não o seu mero oferecimento."
      },
      {
        letra: "C",
        texto: "A realização do interrogatório policial do indiciado perante o delegado.",
        correta: false,
        explicacao_especifica: "Incorreto. O interrogatório não possui efeito interruptivo de prazo prescricional."
      },
      {
        letra: "D",
        texto: "A publicação da sentença ou acórdão condenatórios recorríveis.",
        correta: true,
        explicacao_especifica: "Correto. A publicação da sentença ou acórdão condenatório recorrível é causa interruptiva expressa no art. 117, IV, do Código Penal."
      },
      {
        letra: "E",
        texto: "A juntada do laudo pericial de exame de corpo de delito aos autos do processo.",
        correta: false,
        explicacao_especifica: "Incorreto. A produção de prova pericial não constitui marco interruptivo da prescrição."
      }
    ]
  },

  // 043 - Prescrição da Pretensão Executória: Tema 788 do STF
  {
    idSlug: "batch3-penal-043",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "AOCP",
    orgao_nome: "Polícia Civil/GO",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal, ao julgar o Tema 788 de Repercussão Geral (ARE 848.107/DF), fixou tese vinculante definitiva a respeito do termo inicial da contagem da prescrição da pretensão executória (PPE) estatal. Conforme o entendimento vinculante firmado pela Suprema Corte:",
    explicacao: "GABARITO: Letra B. O Plenário do STF, no Tema 788 (Rel. Min. Dias Toffoli e Rel. p/ acórdão Min. Roberto Barroso), fixou a seguinte tese de repercussão geral: 'O prazo para a prescrição da pretensão executória é contado a partir do trânsito em julgado para a acusação e para a defesa'. Superou-se, assim, a literalidade anterior do art. 112, I, do CP, pois a pretensão executória da pena somente pode ser exercida quando a condenação se torna definitiva para ambas as partes, ante o princípio constitucional da presunção de não culpabilidade.",
    alternativas: [
      {
        letra: "A",
        texto: "O prazo prescricional executório inicia-se unicamente com o trânsito em julgado para a acusação, mantendo-se a literalidade do art. 112, I, do Código Penal.",
        correta: false,
        explicacao_especifica: "Incorreto. Essa tese foi superada pelo STF no Tema 788 de Repercussão Geral."
      },
      {
        letra: "B",
        texto: "O prazo para a prescrição da pretensão executória é contado a partir do trânsito em julgado para ambas as partes (acusação e defesa).",
        correta: true,
        explicacao_especifica: "Correto. É a tese vinculante exata fixada pelo STF no Tema 788 de Repercussão Geral (ARE 848.107/DF)."
      },
      {
        letra: "C",
        texto: "O termo a quo da pretensão executória retroage à data do oferecimento da peça acusatória inaugural.",
        correta: false,
        explicacao_especifica: "Incorreto. A pretensão executória só nasce após a formação de título executivo condenatório definitivo."
      },
      {
        letra: "D",
        texto: "A prescrição executória inicia-se na data da expedição do mandado de prisão preventiva no inquérito policial.",
        correta: false,
        explicacao_especifica: "Incorreto. A prisão preventiva é medida cautelar processual, não se confundindo com execução definitiva de pena."
      },
      {
        letra: "E",
        texto: "A prescrição da pretensão executória é imprescritível para crimes punidos com reclusão superior a oito anos.",
        correta: false,
        explicacao_especifica: "Incorreto. São imprescritíveis apenas o racismo (art. 5º, XLII, CF) e a ação de grupos armados contra a ordem constitucional (art. 5º, XLIV, CF)."
      }
    ]
  },

  // 044 - Extinção da Punibilidade: Perdão Judicial e Súmula 18 do STJ
  {
    idSlug: "batch3-penal-044",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "A sentença que concede o perdão judicial (art. 120 do Código Penal) ostenta natureza jurídica declaratória da extinção da punibilidade, não subsistindo qualquer efeito condenatório principal ou secundário e não gerando reincidência nem registro de maus antecedentes.",
    explicacao: "GABARITO: CERTO. O art. 120 do Código Penal prescreve: 'A sentença que conceder perdão judicial não será considerada para efeitos de reincidência'. Em consonância, a Súmula 18 do Superior Tribunal de Justiça consolida: 'A sentença concessiva do perdão judicial é declaratória da extinção da punibilidade, não subsistindo qualquer efeito condenatório'. Assim, não há pena, não há reincidência, não há maus antecedentes e nem mesmo condenação em custas processuais penais.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A sentença concessiva de perdão judicial é meramente declaratória da extinção da punibilidade (art. 120 do CP e Súmula 18 do STJ)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O perdão judicial apaga todos os efeitos da condenação, nos termos da Súmula 18 do STJ."
      }
    ]
  },

  // 045 - Crimes contra a Vida: Homicídio Qualificado Funcional (Art. 121, § 2º, VII)
  {
    idSlug: "batch3-penal-045",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O homicídio praticado contra autoridade ou agente de segurança pública no exercício da função ou em decorrência dela, ou contra seu cônjuge, companheiro ou parente consanguíneo até terceiro grau em razão dessa condição, configura homicídio qualificado e crime hediondo.",
    explicacao: "GABARITO: CERTO. O art. 121, § 2º, inciso VII, do Código Penal qualifica o homicídio funcional quando praticado 'contra autoridade ou agente descrito nos arts. 142 e 144 da Constituição Federal, integrantes do sistema prisional e da Força Nacional de Segurança Pública, no exercício da função ou em decorrência dela, ou contra seu cônjuge, companheiro ou parente consanguíneo até terceiro grau, em razão dessa condição'. Por força do art. 1º, inciso I, da Lei 8.072/1990 (Lei dos Crimes Hediondos), o homicídio qualificado é hediondo em todas as suas figuras.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O homicídio funcional qualificado (art. 121, § 2º, VII, CP) protege agentes de segurança e familiares, sendo expressamente hediondo (Lei 8.072/90)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A qualificadora funcional do art. 121, § 2º, VII abrange o exercício da função ou retaliação a ela, estendendo-se a cônjuge e parentes consanguíneos até 3º grau."
      }
    ]
  },

  // 046 - Crimes contra a Vida: Feminicídio e Compatibilidade de Qualificadoras
  {
    idSlug: "batch3-penal-046",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito da qualificadora do feminicídio prevista no Código Penal (art. 121, § 2º, VI e § 2º-A) e da orientação jurisprudencial pacífica do Superior Tribunal de Justiça, assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra B. O Superior Tribunal de Justiça firmou entendimento pacífico de que o feminicídio é qualificadora de ordem objetiva, visto que decorre da condição do sexo feminino nas situações de violência doméstica/familiar ou menosprezo/discriminação à condição de mulher (art. 121, § 2º-A, do CP). Por possuir natureza objetiva, o feminicídio é juridicamente compatível com qualificadoras de natureza subjetiva, tais como o motivo torpe ou o motivo fútil (art. 121, § 2º, I e II), não havendo bis in idem.",
    alternativas: [
      {
        letra: "A",
        texto: "O feminicídio possui natureza estritamente subjetiva, sendo vedada sua cumulação com motivo torpe ou motivo fútil pelo princípio do non bis in idem.",
        correta: false,
        explicacao_especifica: "Incorreto. O STJ consolidou que o feminicídio tem natureza objetiva, permitindo cumulação com motivo torpe ou fútil sem bis in idem."
      },
      {
        letra: "B",
        texto: "O feminicídio possui natureza objetiva, ligada ao contexto de violência doméstica e familiar ou discriminação, sendo perfeitamente compatível com qualificadoras de índole subjetiva.",
        correta: true,
        explicacao_especifica: "Correto. Tese jurisprudencial consolidada no STJ: o feminicídio (qualificadora objetiva) convive harmonicamente com qualificadoras subjetivas (motivo fútil/torpe)."
      },
      {
        letra: "C",
        texto: "A presença de filhos menores presenciando o crime enseja a desclassificação do feminicídio para homicídio simples com agravante genérica.",
        correta: false,
        explicacao_especifica: "Incorreto. O cometimento de feminicídio na presença física ou virtual de descendente ou ascendente da vítima é causa de aumento de pena de 1/3 até a metade (art. 121, § 7º, III, CP)."
      },
      {
        letra: "D",
        texto: "O feminicídio restringe-se exclusivamente a crimes praticados contra cônjuge mulher com casamento civil formalmente averbado.",
        correta: false,
        explicacao_especifica: "Incorreto. Abrange violência doméstica no âmbito de qualquer relação íntima de afeto (Lei Maria da Penha) e menosprezo/discriminação à condição de mulher."
      },
      {
        letra: "E",
        texto: "A qualificadora do feminicídio afasta a hediondez do delito em razão do princípio da especialidade.",
        correta: false,
        explicacao_especifica: "Incorreto. O feminicídio é espécie de homicídio qualificado, ostentando natureza hedionda ex lege (art. 1º, I, da Lei 8.072/90)."
      }
    ]
  },

  // 047 - Crimes contra a Vida: Qualificadoras e Comunicabilidade
  {
    idSlug: "batch3-penal-047",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No crime de homicídio qualificado praticado em concurso de pessoas, as qualificadoras de natureza objetiva, como o emprego de veneno, asfixia, emboscada ou dissimulação, comunicam-se ao coautor ou partícipe desde que tenham ingressado na esfera de conhecimento dele.",
    explicacao: "GABARITO: CERTO. Por força do art. 30 do Código Penal ('Não se comunicam as circunstâncias e as condições de caráter pessoal, salvo quando elementares do crime'), as circunstâncias de caráter objetivo (meios e modos de execução, tais como emprego de veneno, fogo, explosivo, asfixia, tortura, traição, emboscada ou dissimulação) comunicam-se aos concorrentes (coautores e partícipes), desde que estes tenham ciência de tais dados durante o iter criminis.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. As qualificadoras objetivas (referentes aos meios e modos de execução) comunicam-se aos concorrentes que delas tenham conhecimento prévio ou concomitante."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. Apenas as circunstâncias estritamente subjetivas (pessoais/motivos) são incomunicáveis; as objetivas comunicam-se com a ciência do concorrente (art. 30 do CP)."
      }
    ]
  },

  // 048 - Crimes contra a Vida: Induzimento a Suicídio ou Automutilação
  {
    idSlug: "batch3-penal-048",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil/SP",
    cargo_nome: "Investigador",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Com as inovações introduzidas pela Lei nº 13.968/2019 no art. 122 do Código Penal (Induzimento, instigação ou auxílio a suicídio ou a automutilação), é correto afirmar que:",
    explicacao: "GABARITO: Letra A. Com a reforma da Lei 13.968/2019, o art. 122 do CP tornou-se crime formal no caput (punido com reclusão de 6 meses a 2 anos pelo simples ato de induzir, instigar ou prestar auxílio ao suicídio ou à automutilação), independentemente de qualquer resultado lesivo efetivo. Se da automutilação ou da tentativa de suicídio resulta lesão corporal de natureza grave ou gravíssima, a pena é de reclusão de 1 a 3 anos (§ 1º); e se resulta morte, a pena é de reclusão de 2 a 6 anos (§ 2º - formas qualificadas pelo resultado).",
    alternativas: [
      {
        letra: "A",
        texto: "O tipo penal passou a punir a automutilação e tornou-se crime formal em seu caput, sendo a consumação antecipada e independente da produção de lesão física ou morte.",
        correta: true,
        explicacao_especifica: "Correto. A Lei 13.968/2019 inseriu a conduta de automutilação e transformou o caput do art. 122 do CP em delito formal."
      },
      {
        letra: "B",
        texto: "A conduta de instigar suicídio praticada pela internet deixou de ser crime comum, tipificando-se exclusivamente como contravenção penal de perigo abstrato.",
        correta: false,
        explicacao_especifica: "Incorreto. A prática por meio da internet, rede social ou transmissão em tempo real é causa de aumento de pena que duplica a sanção (art. 122, § 4º do CP)."
      },
      {
        letra: "C",
        texto: "Se a vítima que comete o suicídio for pessoa com menos de 14 anos, o agente continuará respondendo pelo art. 122 com pena triplicada.",
        correta: false,
        explicacao_especifica: "Incorreto. Se a vítima não possui discernimento (menor de 14 anos ou com deficiência mental), o crime é desclassificado para homicídio doloso (art. 122, § 7º do CP)."
      },
      {
        letra: "D",
        texto: "A tentativa de auxílio material a suicídio é punida com as mesmas penas do homicídio tentado em qualquer hipótese.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 122 possui cominação autônoma e gradativa de penas."
      },
      {
        letra: "E",
        texto: "O perdão judicial é obrigatório caso o agente seja parente em linha reta da pessoa que se automutilou.",
        correta: false,
        explicacao_especifica: "Incorreto. Não há previsão legal de perdão judicial genérico no art. 122 do CP."
      }
    ]
  },

  // 049 - Crimes contra a Vida: Infanticídio e Concurso de Pessoas
  {
    idSlug: "batch3-penal-049",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil/DF",
    cargo_nome: "Perito Criminal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No crime de infanticídio (art. 123 do Código Penal), a influência do estado puerperal é circunstância elementar de natureza personalíssima, comunicando-se ao terceiro coautor ou partícipe que dela tenha ciência, respondendo ambos pelo crime de infanticídio.",
    explicacao: "GABARITO: CERTO. O art. 123 do Código Penal pune o infanticídio: 'Matar, sob a influência do estado puerperal, o próprio filho, durante o parto ou logo após'. O estado puerperal é elementar especial do tipo (e não mera circunstância acessória ou qualificadora). Por força da regra do art. 30 do Código Penal ('Não se comunicam as circunstâncias e as condições de caráter pessoal, salvo quando elementares do crime'), a elementar do estado puerperal comunica-se ao comparsa que auxilia a mãe parturiente, respondendo o terceiro pelo delito de infanticídio em coautoria.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O estado puerperal integra a definição típica do infanticídio como elementar, comunicando-se ao concorrente ciente nos termos do art. 30 do CP."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. Por ser elementar do crime de infanticídio, comunica-se ao partícipe ou coautor ciente dessa condição (art. 30 do Código Penal)."
      }
    ]
  },

  // 050 - Lesões Corporais Graves vs Gravíssimas
  {
    idSlug: "batch3-penal-050",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil/RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "No exame de corpo de delito referente a crime de lesão corporal (art. 129 do Código Penal), o perito criminal atesta que a vítima sofreu perda anatômica definitiva do membro superior direito e deformidade permanente em face. Diante da classificação dogmática das lesões corporais, tais resultados qualificam a conduta, respectivamente, como lesão corporal:",
    explicacao: "GABARITO: Letra D. O art. 129, § 2º, do Código Penal define a lesão corporal de natureza gravíssima (reclusão de 2 a 8 anos): I - Incapacidade permanente para o trabalho; II - Enfermidade incurável; III - Perda ou inutilização do membro, sentido ou função; IV - Deformidade permanente; V - Aborto. Portanto, tanto a 'perda de membro' quanto a 'deformidade permanente' qualificam o delito no § 2º (gravíssima). A debilidade permanente (e não a perda) e a incapacidade por mais de 30 dias configuram lesão grave (§ 1º).",
    alternativas: [
      {
        letra: "A",
        texto: "Grave (art. 129, § 1º) e grave (art. 129, § 1º).",
        correta: false,
        explicacao_especifica: "Incorreto. A debilidade permanente é grave (§ 1º, III), mas a perda de membro e a deformidade permanente são gravíssimas (§ 2º, III e IV)."
      },
      {
        letra: "B",
        texto: "Grave (art. 129, § 1º) e gravíssima (art. 129, § 2º).",
        correta: false,
        explicacao_especifica: "Incorreto. A perda total/amputação de membro enquadra-se no § 2º, III (gravíssima), e não no § 1º (que abrange apenas debilidade)."
      },
      {
        letra: "C",
        texto: "Gravíssima (art. 129, § 2º) e grave (art. 129, § 1º).",
        correta: false,
        explicacao_especifica: "Incorreto. A deformidade permanente é expressamente elencada no § 2º, IV (gravíssima)."
      },
      {
        letra: "D",
        texto: "Gravíssima (art. 129, § 2º) e gravíssima (art. 129, § 2º).",
        correta: true,
        explicacao_especifica: "Correto. Tanto a perda de membro (inciso III) quanto a deformidade permanente (inciso IV) configuram lesão corporal gravíssima (§ 2º do art. 129 do CP)."
      },
      {
        letra: "E",
        texto: "Seguida de morte tentada em concurso formal impróprio.",
        correta: false,
        explicacao_especifica: "Incorreto. Não houve resultado morte e a conduta subsume-se perfeitamente às figuras qualificadas de lesão corporal gravíssima."
      }
    ]
  }
];
