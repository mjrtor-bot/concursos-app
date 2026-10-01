import { TAXONOMIA } from "./taxonomia.mjs";

export const chunk1 = [
  // 001 - Inquérito Policial (C/E)
  {
    idSlug: "batch3-dpp-001",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Após a conclusão das investigações que apuravam crime de peculato em autarquia federal, o Ministério Público Federal deliberou pelo arquivamento do inquérito policial por ausência de justa causa. Em consonância com a novel disciplina do art. 28 do Código de Processo Penal e a interpretação conferida pelo Supremo Tribunal Federal na ADI 6.298/DF, o ato de arquivamento decorre de deliberação privativa do próprio órgão ministerial no modelo acusatório, competindo ao Ministério Público comunicar a decisão à vítima, ao investigado e à autoridade policial, cabendo à vítima a faculdade de submeter a matéria, no prazo de trinta dias, à apreciação da instância de revisão ministerial competente.",
    explicacao: "GABARITO: CERTO. Nos termos do art. 28 do CPP, com a eficácia delimitada pelo STF no julgamento da ADI 6.298/DF, o arquivamento do inquérito policial passa a ser ato interno do Ministério Público (titular da ação penal pública), que, ao ordenar o arquivamento, comunicará à autoridade policial, ao investigado e à vítima. Esta última (ou seu representante) poderá submeter a decisão, no prazo de 30 dias após a comunicação, à revisão pelo órgão superior do MP (Câmara de Coordenação e Revisão ou PGJ). O magistrado não homologa o arquivamento de plano, preservando-se a estrutura acusatória estrita.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O procedimento reflete com exatidão a disciplina do art. 28 do CPP pós-ADI 6.298/STF, com comunicação à vítima e prazo de 30 dias para recurso à instância revisora ministerial."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A assertiva está correta. O controle de arquivamento pelo juiz de primeira instância foi superado pelo modelo acusatório em que o MP arquiva internamente com controle revisional do próprio Parquet."
      }
    ]
  },

  // 002 - Inquérito Policial (M/E)
  {
    idSlug: "batch3-dpp-002",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito,
    banca_nome: "VUNESP",
    orgao_nome: "PC-SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No tocante aos prazos legais para a conclusão do inquérito policial, considerando as diferentes hipóteses normativas previstas no Código de Processo Penal e na legislação penal extravagante, assinale a alternativa correta:",
    explicacao: "GABARITO: B. Na Justiça Federal (Lei 5.010/66, art. 66), o prazo para conclusão do IP de investigado preso é de 15 dias, prorrogável por mais 15 dias mediante decisão judicial fundamentada; já no CPP comum (art. 10), o prazo de réu preso é de 10 dias improrrogáveis. Na Lei de Drogas (Lei 11.343/06, art. 51), os prazos são de 30 dias (preso) e 90 dias (solto), ambos duplicáveis.",
    alternativas: [
      {
        letra: "A",
        texto: "No rito geral do Código de Processo Penal, estando o investigado preso preventivamente, o prazo para conclusão do inquérito é de 15 dias, improrrogáveis.",
        correta: false,
        explicacao_especifica: "No CPP (art. 10), o prazo para réu preso é de 10 dias, e não 15."
      },
      {
        letra: "B",
        texto: "Na apuração de crimes da competência da Justiça Federal, o inquérito policial envolvendo investigado preso deve ser concluído em 15 dias, admitida a prorrogação por igual período por ordem judicial motivada.",
        correta: true,
        explicacao_especifica: "Correto, nos termos do art. 66 da Lei nº 5.010/1966 (15 dias prorrogáveis por mais 15 para investigado preso na Justiça Federal)."
      },
      {
        letra: "C",
        texto: "Nos crimes tipificados na Lei de Drogas (Lei nº 11.343/2006), o inquérito policial deverá ser finalizado em 10 dias se o indiciado estiver preso e em 30 dias se estiver solto, vedada a duplicação.",
        correta: false,
        explicacao_especifica: "Na Lei de Drogas (art. 51), o prazo é de 30 dias (preso) e 90 dias (solto), ambos passíveis de duplicação mediante requerimento do Delegado e deferimento judicial."
      },
      {
        letra: "D",
        texto: "Em investigações sob a égide do Código de Processo Penal com indiciado solto, o prazo de 30 dias não admite qualquer hipótese de dilação pela autoridade judiciária.",
        correta: false,
        explicacao_especifica: "Art. 10, § 3º do CPP: estando o indiciado solto, o prazo de 30 dias pode ser prorrogado pelo juiz a requerimento da autoridade policial quando o fato for de difícil elucidação."
      },
      {
        letra: "E",
        texto: "Nos crimes contra a economia popular (Lei nº 1.521/1951), o prazo para término do inquérito policial é de 30 dias para investigado preso e 60 dias para investigado solto.",
        correta: false,
        explicacao_especifica: "Na Lei nº 1.521/1951 (art. 10, § 1º), o prazo é de 10 dias, estando o réu preso ou solto."
      }
    ]
  },

  // 003 - Inquérito Policial (C/E)
  {
    idSlug: "batch3-dpp-003",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Advogado devidamente constituído compareceu à Delegacia de Polícia Federal postulando acesso irrestrito aos autos de inquérito policial sob sigilo. Nessa situação, consoante a Súmula Vinculante 14 do STF e o Estatuto da OAB, a autoridade policial tem o dever de franquear ao defensor o acesso aos elementos de prova já documentados que digam respeito ao direito de defesa do seu cliente, podendo, todavia, delimitar o sigilo em relação às diligências policiais que se encontrem em curso e cuja eficácia dependa do segredo de sua execução, como interceptações telefônicas e mandados de busca e apreensão pendentes.",
    explicacao: "GABARITO: CERTO. Súmula Vinculante nº 14 do STF: 'É direito do defensor, no interesse do constituinte, ter amplo acesso aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa'. O sigilo pode recair legitimamente sobre as diligências em andamento (atos futuros/pendentes) para não frustrar a eficácia da investigação.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A autoridade policial deve franquear acesso às provas já documentadas, mantendo o sigilo apenas sobre diligências em curso e pendentes de cumprimento."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O acesso não abrange diligências em curso e não concluídas, estando a assertiva plenamente correta segundo a Súmula Vinculante 14 do STF."
      }
    ]
  },

  // 004 - Inquérito Policial (M/E)
  {
    idSlug: "batch3-dpp-004",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito,
    banca_nome: "FGV",
    orgao_nome: "PC-RJ",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante investigação policial para apurar suposto esquema de corrupção passiva e lavagem de capitais em órgão municipal, o Promotor de Justiça requisitou expressamente que a autoridade policial procedesse ao formal indiciamento de determinado servidor público investigado. À luz da Lei nº 12.830/2013 e da jurisprudência firmada pelo Superior Tribunal de Justiça, assinale a opção correta quanto ao ato de indiciamento:",
    explicacao: "GABARITO: C. O art. 2º, § 6º da Lei nº 12.830/2013 dispõe: 'O indiciamento, ato privativo do delegado de polícia, dar-se-á por ato fundamentado, mediante análise técnico-jurídica do fato, que deverá apontar a autoria, materialidade e suas circunstâncias'. O STJ e o STF pacificaram que juiz ou promotor de justiça não podem requisitar ou determinar o indiciamento, pois se trata de juízo de valor técnico privativo do Delegado de Polícia.",
    alternativas: [
      {
        letra: "A",
        texto: "A autoridade policial está juridicamente vinculada a cumprir a requisição ministerial de indiciamento, dado o princípio da hierarquia funcional na fase pré-processual.",
        correta: false,
        explicacao_especifica: "Não há subordinação funcional ou hierárquica entre MP e Delegado de Polícia, e o indiciamento é ato privativo da autoridade policial."
      },
      {
        letra: "B",
        texto: "O indiciamento pode ser determinado de ofício pelo magistrado instrutor caso verifique indícios veementes de autoria.",
        correta: false,
        explicacao_especifica: "O magistrado não pode determinar o indiciamento, sob pena de violação ao sistema acusatório e à competência privativa do delegado."
      },
      {
        letra: "C",
        texto: "O indiciamento é ato privativo da autoridade policial, resultante de análise técnico-jurídica fundamentada, não sendo admissível requisição de indiciamento por parte do Ministério Público ou do Poder Judiciário.",
        correta: true,
        explicacao_especifica: "Exata dicção do art. 2º, § 6º da Lei 12.830/2013 e jurisprudência pacífica do STJ (RHC 73.111/SP) e STF."
      },
      {
        letra: "D",
        texto: "O ato de indiciamento dispensa fundamentação circunstanciada, bastando a constatação perfunctória de tipicidade formal do fato.",
        correta: false,
        explicacao_especifica: "A lei exige ato fundamentado mediante análise técnico-jurídica do fato com indicação de autoria, materialidade e circunstâncias."
      },
      {
        letra: "E",
        texto: "A realização do indiciamento impede o posterior oferecimento de denúncia caso o Ministério Público discorde da tipificação jurídica apontada no relatório policial.",
        correta: false,
        explicacao_especifica: "O MP não se vincula à tipificação formulada no indiciamento do relatório policial, tendo plena independência funcional para denunciar conforme seu juízo acusatório."
      }
    ]
  },

  // 005 - Inquérito Policial (C/E)
  {
    idSlug: "batch3-dpp-005",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em inquérito policial instaurado para apurar homicídio culposo na direção de veículo automotor, o Delegado de Polícia designou a realização de reprodução simulada dos fatos (reconstituição de crime). O investigado foi intimado a comparecer e se recusou a atuar como condutor na simulação da manobra. Nessa situação hipotética, em atenção ao postulado constitucional da não autoincriminação (nemo tenetur se detegere), o investigado não é obrigado a participar ativamente da reprodução simulada, não podendo ter sua conduta interpretada em seu desfavor nem ser conduzido coercitivamente para a prática de ato probatório ativo.",
    explicacao: "GABARITO: CERTO. Art. 7º do CPP: a reconstituição do crime é admitida desde que não contrarie a moralidade ou a ordem pública. Em razão do princípio da não autoincriminação (art. 5º, LXIII da CF/88 e Pacto de San José da Costa Rica), o investigado não é obrigado a produzir prova contra si (não pode ser forçado a encenar ou colaborar ativamente). Além disso, o STF julgou procedentes as ADPFs 395 e 444, declarando a inconstitucionalidade da condução coercitiva de investigados/réus para fins de interrogatório ou participação probatória ativa.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O investigado tem a faculdade de recusar a participação ativa na reconstituição do crime, sem que isso implique presunção de culpa ou condução coercitiva."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A assertiva está correta. A participação em reconstituição é facultativa em observância ao princípio da não autoincriminação."
      }
    ]
  },

  // 006 - Inquérito Policial (M/E)
  {
    idSlug: "batch3-dpp-006",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito,
    banca_nome: "FCC",
    orgao_nome: "PC-AP",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A defesa de determinado empresário impetrou ordem de Habeas Corpus perante o Tribunal de Justiça pleiteando o trancamento de inquérito policial instaurado contra seu constituinte. Sobre a admissibilidade do trancamento do inquérito policial pela via mandamental do Habeas Corpus, assinale a opção alinhada à jurisprudência do STJ e do STF:",
    explicacao: "GABARITO: A. O trancamento de inquérito policial por meio de habeas corpus é medida excepcionalíssima, somente admitida quando evidente a manifesta atipicidade da conduta, a extinção da punibilidade ou a ausência flagrante de elementos indiciários de autoria e materialidade (falta de justa causa), sem necessidade de dilação probatória.",
    alternativas: [
      {
        letra: "A",
        texto: "O trancamento é medida excepcional, admitida quando comprovada de plano, sem necessidade de dilação probatória, a atipicidade evidente da conduta, a extinção da punibilidade ou a ausência absoluta de indícios de autoria e materialidade.",
        correta: true,
        explicacao_especifica: "Representa com precisão a orientação do STJ (RHC 135.811) e STF (HC 198.712): atipicidade evidente, extinção da punibilidade ou ausência de justa causa comprováveis de plano."
      },
      {
        letra: "B",
        texto: "O trancamento do inquérito é inadmissível em qualquer hipótese antes da manifestação terminativa do Ministério Público, em virtude do princípio do promotor natural.",
        correta: false,
        explicacao_especifica: "O Poder Judiciário pode trancar o inquérito policial por HC mesmo antes da denúncia caso configurado constrangimento ilegal flagrante."
      },
      {
        letra: "C",
        texto: "A simples existência de divergência doutrinária sobre a tipicidade do fato investigado autoriza o imediato trancamento do inquérito por ausência de justa causa.",
        correta: false,
        explicacao_especifica: "Mera divergência doutrinária não autoriza o trancamento do IP, que exige atipicidade manifesta e incontroversa."
      },
      {
        letra: "D",
        texto: "O magistrado competente pode proceder à instrução probatória detalhada no bojo do Habeas Corpus para decidir se determina ou não o trancamento do inquérito.",
        correta: false,
        explicacao_especifica: "O rito sumário e célere do Habeas Corpus não admite dilação probatória."
      },
      {
        letra: "E",
        texto: "O trancamento do inquérito policial impede em definitivo a instauração de nova investigação, ainda que sobrevenham provas inéditas de crime outrora desconhecido.",
        correta: false,
        explicacao_especifica: "Se o trancamento decorrer de mera ausência transitória de justa causa, o surgimento de novas provas pode ensejar nova investigação (art. 18 CPP)."
      }
    ]
  },

  // 007 - Inquérito Policial (C/E)
  {
    idSlug: "batch3-dpp-007",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Distrito Federal (PC-DF)",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Ao receber denúncia anônima (notitia criminis inqualificada ou apócrifa) relatando a ocorrência de tráfico de entorpecentes em determinado imóvel, a autoridade policial não deve instaurar de imediato o inquérito policial, cabendo-lhe realizar diligências preliminares informais de verificação da procedência das informações (VPI), visando averiguar a plausibilidade e verossimilhança dos fatos noticiados antes da deflagração formal do procedimento investigatório.",
    explicacao: "GABARITO: CERTO. Art. 5º, § 3º do CPP e jurisprudência do STF (Inq 1957) e STJ (RHC 117.846): a denúncia anônima não pode ensejar, por si só, a imediata instauração de inquérito policial nem a expedição de medidas cautelares invasivas. Exige-se a realização de diligências prévias de verificação preliminar da procedência das informações (VPI).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A notitia criminis apócrifa impõe prévia verificação da procedência das informações (VPI) antes de qualquer instauração formal de inquérito."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. A jurisprudência veda a instauração imediata de inquérito amparada unicamente em comunicação anônima desprovida de verificação preliminar."
      }
    ]
  },

  // 008 - Inquérito Policial (M/E)
  {
    idSlug: "batch3-dpp-008",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito,
    banca_nome: "IBFC",
    orgao_nome: "PC-MG",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O Inquérito Policial possui natureza administrativa e informativa, servindo precipuamente para colher elementos de informação sobre a autoria e materialidade delitivas. A respeito da eficácia probatória dos elementos informativos colhidos durante a fase do inquérito policial e a regra do art. 155 do Código de Processo Penal, assinale a afirmativa correta:",
    explicacao: "GABARITO: D. Art. 155 do CPP: 'O juiz formará sua convicção pela livre apreciação da prova produzida em contraditório judicial, não podendo fundamentar sua decisão exclusivamente nos elementos informativos colhidos na investigação, ressalvadas as provas cautelares, não repetíveis e antecipadas'.",
    alternativas: [
      {
        letra: "A",
        texto: "O juiz pode fundamentar o decreto condenatório exclusivamente em depoimentos de testemunhas colhidos no inquérito policial, desde que ratificados pelo relatório final do Delegado de Polícia.",
        correta: false,
        explicacao_especifica: "O art. 155 veda condenação baseada exclusivamente em elementos colhidos na investigação preliminar."
      },
      {
        letra: "B",
        texto: "Todas as provas produzidas na fase do inquérito policial são desprovidas de valor jurídico, devendo ser integralmente refeitas na audiência de instrução e julgamento sob pena de nulidade.",
        correta: false,
        explicacao_especifica: "As provas cautelares, não repetíveis e antecipadas colhidas no IP possuem valor probatório pleno para a condenação e não precisam ser refeitas em juízo."
      },
      {
        letra: "C",
        texto: "A prova pericial constante do inquérito policial não pode ser utilizada pelo magistrado na sentença caso o perito não seja ouvido em audiência.",
        correta: false,
        explicacao_especifica: "A perícia constitui prova não repetível / pericial irrepetível que integra validamente a convicção judicial independentemente da oitiva presencial do perito."
      },
      {
        letra: "D",
        texto: "O magistrado não pode proferir condenação com base exclusiva nos elementos informativos da investigação preliminar, ressalvando-se, contudo, as provas cautelares, não repetíveis e antecipadas.",
        correta: true,
        explicacao_especifica: "Reproduz com fidelidade a literalidade e a lógica processual do art. 155, caput, do CPP."
      },
      {
        letra: "E",
        texto: "Os elementos informativos do inquérito policial possuem força probante absoluta sobre a autoria delitiva quando colhidos mediante confissão do indiciado perante a autoridade policial.",
        correta: false,
        explicacao_especifica: "A confissão policial isolada é elemento informativo que não autoriza, por si só, a prolação de sentença condenatória (art. 155 e art. 197 CPP)."
      }
    ]
  },

  // 009 - Inquérito Policial (C/E)
  {
    idSlug: "batch3-dpp-009",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil da Paraíba (PC-PB)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Inquérito policial instaurado para apurar homicídio foi arquivado por ausência de elementos informativos suficientes quanto à autoria delitiva. Meses depois, a autoridade policial tomou conhecimento de uma gravação de câmera de segurança inédita que revelou com nitidez a identidade do autor do delito. Nessa hipótese, conforme o art. 18 do CPP e a Súmula 524 do STF, a autoridade policial poderá proceder a novas pesquisas e o Ministério Público poderá oferecer denúncia com lastro nas novas provas, dado que o arquivamento por insuficiência probatória faz apenas coisa julgada formal.",
    explicacao: "GABARITO: CERTO. Art. 18 do CPP: 'Depois de ordenado o arquivamento do inquérito pela autoridade judiciária, por falta de base para a denúncia, a autoridade policial poderá proceder a novas pesquisas, se de outras provas tiver notícia'. Súmula 524 do STF: 'Arquivado o inquérito policial, por despacho do juiz, a requerimento do promotor de justiça, não pode a ação penal ser iniciada, sem novas provas'. O arquivamento por falta de provas gera coisa julgada formal, permitindo o desarquivamento mediante prova substancialmente nova.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O arquivamento por falta de elementos de convicção faz coisa julgada formal, viabilizando novas investigações e posterior denúncia diante de novas provas substanciais."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A assertiva está correta. Apenas o arquivamento fundado em atipicidade manifesta ou excludente de ilicitude reconhecida induz coisa julgada material impeditiva de reabertura."
      }
    ]
  },

  // 010 - Inquérito Policial (M/E)
  {
    idSlug: "batch3-dpp-010",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito,
    banca_nome: "AOCP",
    orgao_nome: "PC-GO",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Vítima de crime de estelionato comum dirigiu-se à Delegacia de Polícia e apresentou requerimento formal escrito para instauração de inquérito policial, fornecendo os dados e as informações de que dispunha. O Delegado de Polícia, contudo, indeferiu fundamentadamente o pedido por entender ausentes os elementos mínimos para a deflagração da investigação. De acordo com o Código de Processo Penal, contra o despacho da autoridade policial que indefere o requerimento de abertura de inquérito policial caberá:",
    explicacao: "GABARITO: C. Art. 5º, § 2º do CPP: 'Do despacho que indeferir o requerimento de abertura de inquérito caberá recurso para o chefe de Polícia'. Trata-se de recurso hierárquico administrativo no âmbito da própria corporação policial civil.",
    alternativas: [
      {
        letra: "A",
        texto: "Mandado de Segurança endereçado ao Juiz de Direito da Vara Criminal da respectiva comarca.",
        correta: false,
        explicacao_especifica: "O CPP prevê remédio administrativo específico no art. 5º, § 2º, não sendo cabível MS direto enquanto não esgotada a via administrativa."
      },
      {
        letra: "B",
        texto: "Recurso em Sentido Estrito para o Tribunal de Justiça competente no prazo de cinco dias.",
        correta: false,
        explicacao_especifica: "O Recurso em Sentido Estrito (art. 581 do CPP) é cabível apenas contra decisões judiciais, e não contra despachos de autoridade policial."
      },
      {
        letra: "C",
        texto: "Recurso administrativo para o Chefe de Polícia.",
        correta: true,
        explicacao_especifica: "Conforme dispõe expressamente o art. 5º, § 2º do CPP: 'Do despacho que indeferir o requerimento de abertura de inquérito caberá recurso para o chefe de Polícia'."
      },
      {
        letra: "D",
        texto: "Reclamação correcional perante o Conselho Nacional do Ministério Público.",
        correta: false,
        explicacao_especifica: "O CNMP tem atribuição de controle do Ministério Público, não exercendo tutela hierárquica sobre o Delegado de Polícia."
      },
      {
        letra: "E",
        texto: "Correição parcial dirigida à Corregedoria Geral de Justiça do Estado.",
        correta: false,
        explicacao_especifica: "Correição parcial é recurso administrativo-judiciário contra atos de magistrados ou serventuários judiciais, não contra despacho do Delegado."
      }
    ]
  },

  // 011 - Inquérito Policial (C/E)
  {
    idSlug: "batch3-dpp-011",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Ceará (PC-CE)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Nos termos do art. 14 do Código de Processo Penal, o ofendido, ou seu representante legal, e o indiciado poderão requerer qualquer diligência à autoridade policial, a qual será realizada ou indeferida a juízo discricionário e fundamentado da autoridade, não existindo imposição legal de obrigatoriedade no acolhimento de todas as diligências requeridas, salvo no que tange ao exame de corpo de delito quando a infração deixar vestígios.",
    explicacao: "GABARITO: CERTO. Art. 14 do CPP: 'O ofendido, ou seu representante legal, e o indiciado poderão requerer qualquer diligência, que será realizada, ou não, a juízo da autoridade'. Vigora a discricionariedade mitigada do Delegado. Todavia, havendo vestígios materiais da infração, a realização do exame de corpo de delito é impositiva por força do art. 158 do CPP.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O Delegado goza de discricionariedade para deferir ou não as diligências requeridas pelas partes, ressalvada a realização do exame de corpo de delito que é obrigatório havendo vestígios."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. A autoridade policial não está obrigada a deferir todas as diligências pleiteadas, atuando com discricionariedade motivada."
      }
    ]
  },

  // 012 - Inquérito Policial (M/E)
  {
    idSlug: "batch3-dpp-012",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito,
    banca_nome: "FGV",
    orgao_nome: "PC-SC",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Para viabilizar a apuração célere de determinados crimes graves, o Código de Processo Penal estabeleceu regras especiais sobre a requisição de informações e dados cadastrais diretamente por autoridades policiais e membros do Ministério Público. A respeito dos artigos 13-A e 13-B do CPP, assinale a afirmativa correta:",
    explicacao: "GABARITO: B. O art. 13-A do CPP permite ao Delegado e ao MP requisitar de quaisquer órgãos do poder público ou empresas privadas dados cadastrais da vítima ou de suspeitos (nome, filiação, endereço) independentemente de autorização judicial em crimes como cárcere privado, sequestro relâmpago, tráfico de pessoas e extorsão mediante sequestro. Já o art. 13-B (sinais eletromagnéticos/localização telemática em tempo real) exige, em regra, autorização judicial prévia.",
    alternativas: [
      {
        letra: "A",
        texto: "A obtenção de dados cadastrais (como qualificação pessoal, filiação e endereço) de suspeitos junto a operadoras de telefonia exige sempre autorização judicial prévia, sob pena de nulidade absoluta da prova.",
        correta: false,
        explicacao_especifica: "Art. 13-A do CPP: a requisição de dados cadastrais independe de autorização judicial prévia nas hipóteses legais especificadas."
      },
      {
        letra: "B",
        texto: "O Delegado de Polícia e o Ministério Público podem requisitar, independentemente de autorização judicial, dados cadastrais de vítimas e suspeitos em investigações de crimes como extorsão mediante sequestro e tráfico de pessoas.",
        correta: true,
        explicacao_especifica: "Exata previsão do art. 13-A do CPP, aplicável aos crimes dos arts. 148, 149, 149-A, 158, § 3º, e 159 do CP."
      },
      {
        letra: "C",
        texto: "O acesso direto aos sinais eletromagnéticos de localização geográfica em tempo real emitidos por estações rádio-base prescinde de controle judicial posterior.",
        correta: false,
        explicacao_especifica: "Art. 13-B do CPP: o acesso a sinais eletromagnéticos de localização exige ordem judicial prévia ou, em caráter emergencial com perigo à vida, comunicação imediata ao juiz em 24h."
      },
      {
        letra: "D",
        texto: "A requisição direta de dados cadastrais pelas autoridades de persecução penal estende-se irrestritamente a qualquer infração penal, inclusive contravenções penais de menor potencial ofensivo.",
        correta: false,
        explicacao_especifica: "O art. 13-A restringe a requisição direta de dados cadastrais a rol legal taxativo de crimes específicos."
      },
      {
        letra: "E",
        texto: "Caso a autoridade policial requisite dados de geolocalização no rito do art. 13-B do CPP sem prévia ordem judicial, o inquérito policial será compulsoriamente arquivado por excesso de poder.",
        correta: false,
        explicacao_especifica: "O art. 13-B, § 4º permite a requisição emergencial direta se não houver manifestação judicial em 12h, com comunicação ao juiz em 24 horas para ratificação."
      }
    ]
  },

  // 013 - Inquérito Policial (C/E)
  {
    idSlug: "batch3-dpp-013",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Militar do Distrito Federal (PMDF)",
    cargo_nome: "Oficial da PM",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Policial militar que, no exercício da atividade funcional de policiamento ostensivo, se envolve em confronto armado com criminosos, resultando no emprego de força letal consumada, figura como investigado em inquérito instaurado para apurar os fatos. Conforme dispõe o art. 14-A do Código de Processo Penal, introduzido pela Lei nº 13.964/2019 (Pacote Anticrime), o militar investigado deve ser citado/notificado para constituir defensor no prazo de até 48 horas, e, caso não o faça e a corporação a que pertencia não disponha de assistência jurídica institucional, a representação técnica deverá ser confiada à Defensoria Pública.",
    explicacao: "GABARITO: CERTO. Art. 14-A do CPP: 'Nos casos em que servidores vinculados aos órgãos do art. 144 da CF figurarem como investigados em inquéritos policiais e outros procedimentos voltados a apurar fatos relacionados ao uso da força letal praticados no exercício profissional, o indiciado poderá constituir defensor no prazo de até 48 horas'. Se não constituir defensor, a instituição de lotação será intimada e, não havendo órgão de assistência jurídica corporativa, a Defensoria Pública assumirá a defesa técnica.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O procedimento descreve exatamente os parâmetros do art. 14-A do CPP (notificação em 48h, atuação institucional ou Defensoria Pública)."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A proposição está correta. A Lei 13.964/2019 assegura expressamente essa prerrogativa e assistência aos profissionais de segurança pública investigados por uso da força letal em serviço."
      }
    ]
  },

  // 014 - Prisões Cautelares (M/E)
  {
    idSlug: "batch3-dpp-014",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Após cometer crime de roubo circunstanciado pelo emprego de arma de fogo em posto de combustíveis às margens de uma rodovia federal, o agente empreendeu fuga em alta velocidade. Equipes da PRF iniciaram imediata perseguição ininterrupta pela rodovia, interceptando o veículo e prendendo o suspeito quarenta minutos depois em município vizinho, com a res furtiva e a arma utilizada. À luz do art. 302 do Código de Processo Penal e da doutrina processual penal, a hipótese narrada configura flagrante:",
    explicacao: "GABARITO: B. Art. 302, III do CPP: considera-se em flagrante delito quem 'é perseguido, logo após pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração'. Trata-se do flagrante impróprio, quase-flagrante ou imperfeito. No flagrante próprio (incisos I e II), o agente está cometendo ou acaba de cometer a infração; no flagrante presumido ou ficto (inciso IV), o agente é encontrado logo depois, sem perseguição, com instrumentos, armas ou objetos que façam presumir ser ele o autor.",
    alternativas: [
      {
        letra: "A",
        texto: "Próprio (ou perfeito), porquanto a prisão ocorreu logo após a execução do roubo na mesma circunscrição regional.",
        correta: false,
        explicacao_especifica: "No flagrante próprio (art. 302, I e II), o agente é surpreendido cometendo a infração ou no exato instante em que acaba de cometê-la, sem perseguição continuada."
      },
      {
        letra: "B",
        texto: "Impróprio (quase-flagrante ou imperfeito), tendo em vista que houve perseguição imediata e contínua do agente logo após a prática delitiva.",
        correta: true,
        explicacao_especifica: "Exato enquadramento no art. 302, inciso III do CPP (perseguição contínua logo após o delito)."
      },
      {
        letra: "C",
        texto: "Presumido (ou ficto), caracterizado exclusivamente pelo fato de o agente ter sido localizado na posse da res furtiva e da arma do crime.",
        correta: false,
        explicacao_especifica: "O flagrante presumido (art. 302, IV) ocorre quando o suspeito é encontrado logo depois com os objetos sem que tenha havido perseguição ininterrupta."
      },
      {
        letra: "D",
        texto: "Preparado (ou provocado), ensejando a ilicitude da prisão em flagrante por caracterizar crime impossível conforme a Súmula 145 do STF.",
        correta: false,
        explicacao_especifica: "Não houve induzimento ou armadilha policial para forçar o crime; o delito já havia se consumado autonomamente."
      },
      {
        letra: "E",
        texto: "Esperado, pois os policiais rodoviários federais aguardavam a passagem do veículo em ponto de bloqueio tático predeterminado.",
        correta: false,
        explicacao_especifica: "O flagrante esperado ocorre quando a polícia toma conhecimento prévio do plano criminoso e aguarda a execução, o que não é o caso de perseguição pós-roubo."
      }
    ]
  },

  // 015 - Prisões Cautelares (C/E)
  {
    idSlug: "batch3-dpp-015",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "VUNESP",
    orgao_nome: "PC-SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na audiência de custódia realizada no prazo de 24 horas após a prisão em flagrante, caso o Ministério Público pugne expressamente pela concessão de liberdade provisória com medidas cautelares diversas e a defesa requeira o mesmo benefício, o magistrado não pode, de ofício e em dissonância com os requerimentos ministeriais e defensivos, convolar o flagrante em prisão preventiva, em face da vedação de atuação de ofício consolidada no sistema acusatório (arts. 282, § 2º e 311 do CPP).",
    explicacao: "GABARITO: CERTO. Com as alterações introduzidas pela Lei nº 13.964/2019 nos arts. 282, § 2º e 311 do CPP e a jurisprudência pacífica do STJ (RHC 131.263) e STF (HC 186.421), restou abolida a conversão da prisão em flagrante em prisão preventiva de ofício pelo magistrado. Se o titular da ação penal pública (MP) não requerer a prisão preventiva, o juiz não pode decretá-la ex officio na audiência de custódia.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "O magistrado está impedido de converter o flagrante em preventiva de ofício sem provocação do MP ou autoridade policial."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A assertiva está correta. A conversão de ofício no sistema acusatório pós-Pacote Anticrime é nula por violar o princípio da inércia da jurisdição."
      }
    ]
  }
];
