import { TAXONOMIA } from "./taxonomia.mjs";

export const admPart2 = [
  // 031 - Agentes Públicos: Estágio Probatório e Aquisição de Estabilidade (Art. 41 CF)
  {
    idSlug: "batch3-adm-031",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "São estáveis após três anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público, sendo condição obrigatória para a aquisição da estabilidade a prévia aprovação em avaliação especial de desempenho por comissão instituída para essa finalidade.",
    explicacao: "GABARITO: CERTO. A assertiva reflete a literalidade do art. 41, caput e § 4º, da Constituição Federal de 1988 (com redação dada pela EC nº 19/1998): 'São estáveis após três anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público' e 'Como condição para a aquisição da estabilidade, é obrigatória a avaliação especial de desempenho por comissão instituída para essa finalidade'. Conforme a jurisprudência sumulada do STJ (Súmula 21), o prazo de estágio probatório é de 3 anos (36 meses).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O prazo para aquisição de estabilidade é de 3 anos de efetivo exercício, condicionado à aprovação em avaliação especial de desempenho (art. 41, caput e § 4º da CF/88)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A avaliação especial de desempenho é requisito constitucional indispensável e o prazo fixado pela CF/88 é de 3 anos."
      }
    ]
  },

  // 032 - Agentes Públicos: Acumulação Remunerada de Cargos Públicos
  {
    idSlug: "batch3-adm-032",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Perito Legista",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um Perito Médico-Legista da Polícia Civil, ocupante de cargo público efetivo de natureza essencialmente técnica/científica na área de saúde, foi aprovado em concurso público para o cargo de Professor de Medicina Forense em Universidade Pública Federal. Havendo compatibilidade de horários, à luz do art. 37, XVI, da Constituição Federal e da jurisprudência do STF e STJ:",
    explicacao: "GABARITO: C. O art. 37, inciso XVI, alínea 'b', da CF/88 admite expressamente a acumulação remunerada de 'um cargo de professor com outro técnico ou científico', desde que haja compatibilidade de horários e seja observado o teto constitucional (art. 37, XI). O cargo de Perito Legista enquadra-se como cargo técnico/científico privativo de profissional de saúde com formação universitária específica, autorizando a acumulação lícita com a docência superior.",
    alternativas: [
      {
        letra: "A",
        texto: "A acumulação é absolutamente proibida, pois todo cargo policial subordina-se à vedação irrestrita de exercício de docência pública.",
        correta: false,
        explicacao_especifica: "Incorreto. A CF/88 autoriza a acumulação de cargo técnico/científico com cargo de magistério havendo compatibilidade de horários."
      },
      {
        letra: "B",
        texto: "A acumulação é permitida somente se o servidor renunciar à remuneração de um dos cargos públicos.",
        correta: false,
        explicacao_especifica: "Incorreto. As hipóteses autorizadas pelo art. 37, XVI da CF são de acumulação plenamente remunerada."
      },
      {
        letra: "C",
        texto: "A acumulação é lícita, pois a Constituição Federal autoriza a acumulação de um cargo de professor com outro técnico ou científico, desde que haja compatibilidade de horários e respeito ao teto remuneratório.",
        correta: true,
        explicacao_especifica: "Correto. O art. 37, XVI, 'b' da CF/88 ampara a acumulação de cargo técnico/científico com o de professor quando comprovada a compatibilidade de horários."
      },
      {
        letra: "D",
        texto: "A investidura no magistério implicará vacância automática do cargo de perito legista, sendo vedada a reintegração.",
        correta: false,
        explicacao_especifica: "Incorreto. Tratando-se de acumulação lícita, o servidor permanece legalmente investido em ambos os cargos."
      },
      {
        letra: "E",
        texto: "A acumulação depende de autorização prévia por decreto individual do Governador do Estado.",
        correta: false,
        explicacao_especifica: "Incorreto. A autorização é constitucional direta (art. 37, XVI da CF), dependendo apenas da averiguação de compatibilidade de horários pelo órgão de lotação."
      }
    ]
  },

  // 033 - Agentes Públicos: PAD e Súmula Vinculante nº 5 do STF
  {
    idSlug: "batch3-adm-033",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Conforme entendimento sumulado e com efeito vinculante pelo Supremo Tribunal Federal, a falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição Federal.",
    explicacao: "GABARITO: CERTO. Trata-se da redação exata da Súmula Vinculante nº 5 do STF: 'A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição'. O servidor deve ter garantido o direito de ser intimado, de produzir provas, de ser ouvido pessoalmente e de constituir advogado caso deseje; contudo, a ausência de patrono constituído ou defensor dativo não anula o PAD, ressalvada a hipótese de servidor revel ou incapaz (art. 164 da Lei 8.112/90).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O teor da assertiva é a literalidade da Súmula Vinculante nº 5 do STF."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A presença de advogado é facultativa no PAD, não sendo causa de nulidade segundo a SV 5/STF."
      }
    ]
  },

  // 034 - Agentes Públicos: PAD e Prova Emprestada (Súmula 591 STJ)
  {
    idSlug: "batch3-adm-034",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante processo administrativo disciplinar instaurado pela Corregedoria de Polícia para apurar corrupção passiva funcional, a comissão processante juntou aos autos interceptações telefônicas e relatórios de inteligência obtidos licitamente em processo penal com prévia autorização judicial. A respeito da utilização de prova emprestada em PAD e da jurisprudência do Superior Tribunal de Justiça (Súmula 591/STJ), assinale a afirmativa correta:",
    explicacao: "GABARITO: A. A Súmula 591 do Superior Tribunal de Justiça dispõe expressamente que: 'É permitida a 'prova emprestada' no processo administrativo disciplinar, desde que devidamente autorizada pelo juízo competente e respeitados o contraditório e a ampla defesa'. A comissão disciplinar deve franquear ao servidor processado a oportunidade de contraditar a prova e manifestar-se sobre o seu conteúdo.",
    alternativas: [
      {
        letra: "A",
        texto: "É plenamente permitida a prova emprestada no PAD, desde que devidamente autorizada pelo juízo competente e assegurados o contraditório e a ampla defesa.",
        correta: true,
        explicacao_especifica: "Correto. Trata-se do enunciado literal da Súmula 591 do STJ, plenamente aplicável a processos disciplinares de servidores policiais."
      },
      {
        letra: "B",
        texto: "A prova emprestada é terminantemente proibida na esfera administrativa em razão do sigilo estrito das investigações penais.",
        correta: false,
        explicacao_especifica: "Incorreto. A Súmula 591 do STJ e a jurisprudência do STF autorizam expressamente o empréstimo de provas lícitas autorizadas judicialmente."
      },
      {
        letra: "C",
        texto: "A utilização de interceptação telefônica no PAD dispensa autorização do juízo criminal competente por força do princípio da autotutela.",
        correta: false,
        explicacao_especifica: "Incorreto. A quebra do sigilo e o compartilhamento de provas cobertas por cláusula de reserva de jurisdição exigem indispensável autorização judicial."
      },
      {
        letra: "D",
        texto: "A prova emprestada só tem validade no PAD se todos os réus da ação penal forem também servidores públicos do mesmo órgão.",
        correta: false,
        explicacao_especifica: "Incorreto. A validade da prova emprestada decorre da legitimidade de sua obtenção e da garantia de contraditório no processo de destino."
      },
      {
        letra: "E",
        texto: "O acolhimento da prova emprestada vincula obrigatoriamente a comissão a emitir relatório final pela demissão sumária.",
        correta: false,
        explicacao_especifica: "Incorreto. A comissão aprecia as provas segundo o livre convencimento motivado em conjunto com todo o acervo probatório."
      }
    ]
  },

  // 035 - Agentes Públicos: Constitucionalidade da Cassação de Aposentadoria (STF)
  {
    idSlug: "batch3-adm-035",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal firmou entendimento pela constitucionalidade da penalidade disciplinar de cassação de aposentadoria ou disponibilidade de servidor público (art. 134 da Lei nº 8.112/1990), por infração funcional grave cometida quando ainda se encontrava em atividade, não violando os princípios do direito adquirido ou da dignidade da pessoa humana.",
    explicacao: "GABARITO: CERTO. O Plenário do STF, no julgamento de diversas Ações Diretas de Inconstitucionalidade (como a ADI 6560, ADI 4882 e no RE 695.911), reafirmou a higidez constitucional da cassação de aposentadoria como sanção disciplinar correlata à demissão para infrações praticadas enquanto o servidor estava na ativa. O fato de o regime previdenciário ser contributivo e retributivo não impede a perda do benefício como efeito de sanção político-administrativa por falta grave.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF pacificou que a cassação de aposentadoria por faltas funcionais graves cometidas na ativa é plenamente constitucional (art. 134 da Lei 8.112/90)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A penalidade de cassação de aposentadoria é válida e compatível com o texto constitucional segundo reiteradas decisões do STF."
      }
    ]
  },

  // 036 - Agentes Públicos: Hipóteses de Vacância na Lei 8.112/1990
  {
    idSlug: "batch3-adm-036",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado de Goiás (PC-GO)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei nº 8.112/1990, assinale a alternativa que apresenta APENAS hipóteses legais de vacância do cargo público que também configuram, simultaneamente, formas de provimento de outro cargo:",
    explicacao: "GABARITO: D (Promoção e Readaptação). O art. 33 da Lei 8.112/1990 elenca as hipóteses de vacância: exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento. Dentre essas hipóteses, a PROMOÇÃO e a READAPTAÇÃO (art. 8º, II e V) operam simultaneamente como formas de provimento em um cargo e de vacância no cargo anterior.",
    alternativas: [
      {
        letra: "A",
        texto: "Exoneração a pedido e demissão por improbidade.",
        correta: false,
        explicacao_especifica: "Incorreto. Exoneração e demissão são exclusivamente formas de vacância, sem qualquer provimento simultâneo."
      },
      {
        letra: "B",
        texto: "Aposentadoria voluntária e falecimento.",
        correta: false,
        explicacao_especifica: "Incorreto. Aposentadoria e falecimento geram apenas vacância."
      },
      {
        letra: "C",
        texto: "Recondução ao cargo de origem e reintegração.",
        correta: false,
        explicacao_especifica: "Incorreto. Recondução e reintegração são apenas formas de provimento e não estão no rol do art. 33."
      },
      {
        letra: "D",
        texto: "Promoção e readaptação.",
        correta: true,
        explicacao_especifica: "Correto. A promoção e a readaptação figuram simultaneamente no rol de provimento (art. 8º) e no rol de vacância (art. 33) da Lei 8.112/90."
      },
      {
        letra: "E",
        texto: "Disponibilidade remunerada e reversão.",
        correta: false,
        explicacao_especifica: "Incorreto. Disponibilidade é situação funcional e reversão é apenas provimento."
      }
    ]
  },

  // 037 - Agentes Públicos: Responsabilidades e Cumulação de Sanções
  {
    idSlug: "batch3-adm-037",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O servidor policial responde civil, penal e administrativamente pelo exercício irregular de suas atribuições, sendo que as sanções civis, penais e administrativas poderão cumular-se, sendo independentes entre si, ressalvada a hipótese de absolvição penal que declare a inexistência material do fato ou a negativa de sua autoria, a qual extingue a responsabilidade administrativa.",
    explicacao: "GABARITO: CERTO. O preceito sintetiza a disciplina dos arts. 121 a 126 da Lei nº 8.112/1990. O art. 125 dispõe que 'As sanções civis, penais e administrativas poderão cumular-se, sendo independentes entre si'. O art. 126 ressalva: 'A responsabilidade administrativa do servidor será afastada no caso de absolvição criminal que negue a existência do fato ou sua autoria'.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Há independência e cumulatividade entre as instâncias, comunicando-se apenas a absolvição criminal por inexistência do fato ou negativa de autoria (art. 126 da Lei 8.112/90)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A assertiva expressa de forma perfeita as normas que regem a tríplice responsabilidade dos agentes públicos."
      }
    ]
  },

  // 038 - Agentes Públicos: Afastamento Preventivo / Cautelar no PAD (Art. 147 Lei 8.112/90)
  {
    idSlug: "batch3-adm-038",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Como medida cautelar e a fim de que o policial investigado não venha a influir na apuração da infração funcional (ex: coagindo testemunhas ou destruindo livros de registro da delegacia), a autoridade instauradora do PAD poderá determinar o seu afastamento preventivo do exercício do cargo. Conforme a Lei nº 8.112/1990, o afastamento preventivo:",
    explicacao: "GABARITO: B. O art. 147 da Lei 8.112/1990 disciplina: 'Como medida cautelar e a fim de que o servidor não venha a influir na apuração da irregularidade, a autoridade instauradora do processo disciplinar poderá determinar o seu afastamento do exercício do cargo, pelo prazo de até 60 (sessenta) dias, sem prejuízo da remuneração'. O parágrafo único autoriza a prorrogação por igual prazo (até mais 60 dias), findo o qual cessarão os seus efeitos, ainda que não concluído o processo.",
    alternativas: [
      {
        letra: "A",
        texto: "Possui natureza de penalidade disciplinar definitiva, implicando perda automática de 50% dos vencimentos.",
        correta: false,
        explicacao_especifica: "Incorreto. O afastamento cautelar não tem natureza punitiva e ocorre expressamente sem prejuízo da remuneração."
      },
      {
        letra: "B",
        texto: "Poderá perdurar pelo prazo de até 60 dias, prorrogável por igual período, mantida integralmente a remuneração do servidor.",
        correta: true,
        explicacao_especifica: "Correto. O art. 147 da Lei 8.112/90 fixa o prazo de até 60 dias, prorrogável por igual período, sem prejuízo da remuneração."
      },
      {
        letra: "C",
        texto: "É imprescritível e pode se estender indeterminadamente até o trânsito em julgado de eventual ação penal.",
        correta: false,
        explicacao_especifica: "Incorreto. O prazo máximo é de 60 + 60 dias; após esse período o servidor retorna ao exercício (art. 147, parágrafo único)."
      },
      {
        letra: "D",
        texto: "Depende obrigatoriamente de mandado de prisão preventiva expedido por juiz de direito de vara criminal.",
        correta: false,
        explicacao_especifica: "Incorreto. O afastamento é medida administrativa decidida pela própria autoridade instauradora do PAD."
      },
      {
        letra: "E",
        texto: "Importa a cassação imediata da estabilidade e a declaração de inabilitação definitiva para funções públicas.",
        correta: false,
        explicacao_especifica: "Incorreto. É mera medida preventiva de instrução probatória que não afeta a estabilidade."
      }
    ]
  },

  // 039 - Responsabilidade Civil do Estado: Risco Administrativo e Elementos (Art. 37, § 6º CF)
  {
    idSlug: "batch3-adm-039",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa, consagrando a Constituição Federal a responsabilidade civil objetiva do Estado sob a modalidade do risco administrativo.",
    explicacao: "GABARITO: CERTO. A assertiva transcreve a regra do art. 37, § 6º, da Constituição Federal de 1988, que adotou a teoria da responsabilidade civil objetiva na modalidade do risco administrativo. Nessa modalidade, a vítima deve demonstrar apenas a conduta oficial, o dano e o nexo de causalidade, dispensando-se a prova de culpa do agente público. O Estado, todavia, pode elidir ou atenuar o dever indenizatório se comprovar a ocorrência de excludentes do nexo causal (culpa exclusiva da vítima, fato de terceiro ou força maior).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 37, § 6º da CF/88 consagra a responsabilidade objetiva baseada no risco administrativo, com direito de regresso subjetivo contra o agente causador."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O enunciado traduz com exatidão a teoria adotada expressamente pelo texto constitucional brasileiro."
      }
    ]
  },

  // 040 - Responsabilidade Civil do Estado: Danos em Operação Policial / Tiroteio (Tema 1237 STF)
  {
    idSlug: "batch3-adm-040",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Durante intensa operação policial deflagrada em comunidade urbana para cumprimento de mandados de prisão, houve troca de tiros entre policiais civis e criminosos armados. Um transeunte que transitava pela via pública foi atingido por projétil de arma de fogo e faleceu. A perícia balística de local concluiu que o laudo pericial era inconclusivo para determinar se o projétil partiu das armas da polícia ou dos criminosos. À luz da jurisprudência vinculante fixada pelo Supremo Tribunal Federal (Tema 1.237 de Repercussão Geral):",
    explicacao: "GABARITO: C. No julgamento do ARE 1.385.315/RJ (Tema 1237 de Repercussão Geral), o STF fixou a seguinte tese: 'O Estado é responsável, na fração civil, por danos decorrentes de ferimentos ou morte causados por disparos de arma de fogo durante operações policiais, ainda que a perícia seja inconclusiva quanto à origem do disparo, desde que haja nexo de causalidade entre a operação e o resultado danoso'. Cabe ao Estado o ônus de provar eventuais excludentes de causalidade.",
    alternativas: [
      {
        letra: "A",
        texto: "O Estado fica integralmente isento de responsabilidade civil em virtude da ausência de prova pericial inequívoca da origem estatal do disparo.",
        correta: false,
        explicacao_especifica: "Incorreto. O STF pacificou no Tema 1237 que o laudo inconclusivo não afasta a responsabilidade objetiva do Estado quando o dano ocorre no contexto da operação."
      },
      {
        letra: "B",
        texto: "A responsabilidade civil do Estado depende da identificação individual e condenação penal do policial autor do disparo.",
        correta: false,
        explicacao_especifica: "Incorreto. A responsabilidade do Estado é objetiva (art. 37, § 6º da CF) e prescinde da identificação do agente ou de culpa individual."
      },
      {
        letra: "C",
        texto: "O Estado responde civilmente por morte ou ferimento decorrente de disparos de arma de fogo em operações policiais, mesmo que a perícia seja inconclusiva sobre a origem do tiro, desde que comprovado o nexo entre a operação policial e o dano.",
        correta: true,
        explicacao_especifica: "Correto. Tese fixada pelo Plenário do STF no Tema 1237 de Repercussão Geral."
      },
      {
        letra: "D",
        texto: "A hipótese configura caso fortuito absoluto imprevisível, afastando qualquer dever de reparação indenizatória estatal.",
        correta: false,
        explicacao_especifica: "Incorreto. O risco criado pela deflagração de tiroteio em operação armada atrai a responsabilidade objetiva estatal."
      },
      {
        letra: "E",
        texto: "O direito de indenização caberá apenas se os familiares da vítima ajuizarem a ação conjuntamente contra os criminosos e o delegado comandante da missão.",
        correta: false,
        explicacao_especifica: "Incorreto. A ação indenizatória deve ser dirigida em face da Fazenda Pública estatal (Tema 940/STF)."
      }
    ]
  },

  // 041 - Responsabilidade Civil do Estado: Excludentes do Nexo Causal
  {
    idSlug: "batch3-adm-041",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na responsabilidade civil do Estado baseada na teoria do risco administrativo, a comprovação de culpa exclusiva da vítima ou de força maior exclui o nexo causal e exime a Administração do dever de indenizar; por sua vez, a culpa concorrente da vítima não exclui a responsabilidade estatal, mas enseja a mitigação proporcional do montante da indenização.",
    explicacao: "GABARITO: CERTO. A teoria do risco administrativo admite excludentes e atenuantes de responsabilidade. As excludentes (culpa exclusiva da vítima, fato exclusivo de terceiro, caso fortuito externo e força maior) rompem o liame de causalidade entre a atuação estatal e o dano, afastando o dever de indenizar. Já a culpa concorrente atua como atenuante, reduzindo proporcionalmente o quantum indenizatório na medida da participação de cada um nos fatos.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A culpa exclusiva rompe o nexo causal (excludente), enquanto a culpa concorrente apenas reduz proporcionalmente o valor da indenização (atenuante)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A distinção entre excludentes (que afastam o nexo) e atenuantes (que reduzem a verba) é dogmaticamente exata."
      }
    ]
  },

  // 042 - Responsabilidade Civil do Estado: Morte de Detento sob Custódia (Tema 592 STF)
  {
    idSlug: "batch3-adm-042",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Preso provisório mantido em carceragem de delegacia de polícia foi brutalmente espancado e morto por outros detentos da mesma cela durante o período noturno, inexistindo vigilância presencial no corredor das celas. Diante da ação indenizatória movida pelos dependentes do falecido, à luz do art. 5º, XLIX, da CF/88 e da jurisprudência do STF (Tema 592 de Repercussão Geral):",
    explicacao: "GABARITO: A. No julgamento do RE 841.526/RS (Tema 592 de Repercussão Geral), o STF fixou: 'Em caso de inobservância do seu dever específico de proteção previsto no art. 5º, inciso XLIX, da CF/88, o Estado é responsável pela morte de detento, em razão da responsabilidade civil objetiva'. Tratando-se de pessoa sob custódia estatal, incide o dever de proteção específica da integridade física e moral dos presos, respondendo o Estado objetivamente, salvo se demonstrar que a morte decorreu de causas naturais ou que o suicídio/homicídio não poderia ter sido evitado por qualquer cautela ordinária.",
    alternativas: [
      {
        letra: "A",
        texto: "O Estado responde objetivamente pela morte de pessoa sob sua custódia, em razão da violação ao dever constitucional específico de proteção à integridade física do preso (art. 5º, XLIX, da CF).",
        correta: true,
        explicacao_especifica: "Correto. O STF fixou no Tema 592 que a inobservância do dever de custódia e proteção enseja a responsabilidade civil objetiva do Estado."
      },
      {
        letra: "B",
        texto: "A responsabilidade estatal é afastada sumariamente, tendo em vista que a morte foi causada por fato exclusivo de terceiros (outros detentos).",
        correta: false,
        explicacao_especifica: "Incorreto. A violência intramuros não configura fato de terceiro apto a romper o nexo causal de quem detém a custódia legal do indivíduo."
      },
      {
        letra: "C",
        texto: "Por se tratar de conduta omissiva pura, a responsabilidade do Estado depende de prova cabal de dolo individual dos policiais plantonistas.",
        correta: false,
        explicacao_especifica: "Incorreto. A custódia prisional caracteriza omissão específica (violação a dever especial de garante), cuja responsabilidade é objetiva."
      },
      {
        letra: "D",
        texto: "O Estado responderá unicamente na hipótese de haver sentença penal condenatória contra o Delegado titular da delegacia.",
        correta: false,
        explicacao_especifica: "Incorreto. A responsabilidade civil do Estado prescinde de condenação penal de seus agentes (independência de instâncias)."
      },
      {
        letra: "E",
        texto: "Aplica-se a teoria da irresponsabilidade civil estatal em matéria carcerária.",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria da irresponsabilidade foi superada historicamente com o advento do Estado de Direito."
      }
    ]
  },

  // 043 - Responsabilidade Civil do Estado: Ação Direta contra Agente (Tema 940 STF)
  {
    idSlug: "batch3-adm-043",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com tese de repercussão geral fixada pelo Supremo Tribunal Federal (Tema 940), a ação indenizatória por danos causados por agente público no exercício de suas funções deve ser ajuizada em face da pessoa jurídica de direito público ou de direito privado prestadora de serviço público, sendo a parte ilegítima para figurar no polo passivo da ação o próprio agente causador do dano, seja isoladamente ou em litisconsórcio passivo facultativo.",
    explicacao: "GABARITO: CERTO. No julgamento do RE 1.027.633/SP (Tema 940 de Repercussão Geral), o Plenário do STF fixou a tese: 'A teor do disposto no art. 37, § 6º, da Constituição Federal, a ação por danos causados por agente público e voltada à responsabilização civil do Estado deve ser proposta em face da pessoa jurídica de direito público ou da pessoa jurídica de direito privado prestadora de serviço público, sendo parte ilegítima para figurar no polo passivo o autor do ato, assegurado o direito de regresso'. A decisão consagra o princípio da dupla garantia (garantia da vítima em cobrar do Estado e garantia do servidor de responder apenas regressivamente perante o Estado).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O Tema 940/STF fixou a ilegitimidade passiva ad causam do agente público para figurar na ação indenizatória originária ajuizada pela vítima."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. É vedado o ajuizamento direto contra o servidor ou a sua inclusão como litisconsorte facultativo pelo particular."
      }
    ]
  },

  // 044 - Responsabilidade Civil do Estado: Direito de Regresso
  {
    idSlug: "batch3-adm-044",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado da Bahia (PC-BA)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O Estado foi condenado judicialmente a indenizar um cidadão cujo veículo particular foi abalroado e destruído por viatura policial civil durante perseguição tática. Comprovou-se nos autos que o policial condutor agiu com manifesta negligência ao trafegar na contramão em velocidade desproporcional sem ligar os sinais sonoros e luminosos. Para reaver o valor pago ao particular, o Estado poderá ajuizar ação regressiva contra o policial. Em relação à ação de regresso, é correto afirmar que:",
    explicacao: "GABARITO: D. A responsabilidade do Estado perante a vítima é objetiva (art. 37, § 6º, 1ª parte). Já a responsabilidade do agente público causador do dano em face do Estado, na ação de regresso (art. 37, § 6º, in fine), é SUBJETIVA, exigindo a comprovação indispensável de que o servidor atuou com dolo ou culpa (negligência, imprudência ou imperícia), além do prévio pagamento/trânsito em julgado da condenação suportada pela Fazenda Pública.",
    alternativas: [
      {
        letra: "A",
        texto: "Possui natureza objetiva, bastando ao Estado comprovar que o servidor era o motorista da viatura no dia do sinistro.",
        correta: false,
        explicacao_especifica: "Incorreto. A responsabilidade do servidor em regresso é sempre subjetiva, exigindo dolo ou culpa."
      },
      {
        letra: "B",
        texto: "É imprescritível para qualquer hipótese de dano ao erário decorrente de ato ilícito culposo em acidente de trânsito.",
        correta: false,
        explicacao_especifica: "Incorreto. O STF pacificou no Tema 666 que ações de ressarcimento por ilícitos civis extracontratuais comuns são prescritíveis."
      },
      {
        letra: "C",
        texto: "Pode ser ajuizada preventivamente pelo Estado mesmo antes de ser condenado ou efetuar o pagamento à vítima.",
        correta: false,
        explicacao_especifica: "Incorreto. O interesse de agir na ação regressiva surge após a condenação e o efetivo desembolso/obrigação de pagar pelo Estado."
      },
      {
        letra: "D",
        texto: "Tem natureza subjetiva, subordinando-se à demonstração de que o agente público atuou com dolo ou culpa (negligência, imprudência ou imperícia).",
        correta: true,
        explicacao_especifica: "Correto. O art. 37, § 6º, da CF/88 estabelece expressamente a responsabilidade subjetiva do agente na ação de regresso ('nos casos de dolo ou culpa')."
      },
      {
        letra: "E",
        texto: "Exige que o servidor público continue obrigatoriamente em atividade no órgão policial à época da citação.",
        correta: false,
        explicacao_especifica: "Incorreto. A responsabilidade civil patrimonial do causador do dano persiste mesmo após aposentadoria ou exoneração."
      }
    ]
  },

  // 045 - Responsabilidade Civil do Estado: Teoria do Risco Integral no Direito Brasileiro
  {
    idSlug: "batch3-adm-045",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No ordenamento jurídico brasileiro, a teoria do risco integral, que não admite excludentes de nexo causal como caso fortuito, força maior ou culpa exclusiva da vítima, é aplicada em hipóteses expressas e excepcionais, a exemplo dos danos nucleares (art. 21, XXIII, 'd', da CF/88), dos atos de terrorismo e atentados bélicos contra aeronaves de matrícula brasileira e dos danos ambientais.",
    explicacao: "GABARITO: CERTO. A regra geral da responsabilidade civil estatal no Brasil é a teoria do risco administrativo (que admite excludentes). Excepcionalmente, o direito brasileiro aplica a teoria do risco integral para: 1) Danos nucleares (art. 21, XXIII, 'd', da CF/88); 2) Danos decorrentes de atos terroristas, atos de guerra ou eventos correlatos contra aeronaves comerciais de matrícula brasileira (Lei 10.744/2003); e 3) Danos ambientais (jurisprudência consolidada do STJ - Tema 707). Nessa modalidade radical, o Estado deve indenizar mesmo diante de força maior ou ato exclusivo de terceiro.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A teoria do risco integral veda excludentes de causalidade e é adotada de forma estrita em matéria nuclear, ataques a aeronaves brasileiras e meio ambiente."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O enunciado elenca rigorosamente as hipóteses consagradas pela legislação e jurisprudência dos tribunais superiores."
      }
    ]
  },

  // 046 - Responsabilidade Civil do Estado: Omissão Genérica vs Omissão Específica
  {
    idSlug: "batch3-adm-046",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de Minas Gerais (PC-MG)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em tema de responsabilidade civil extracontratual do Estado por condutas omissivas, a doutrina e a jurisprudência consolidada diferenciam a omissão genérica da omissão específica. Assinale a opção que reflete corretamente essa distinção:",
    explicacao: "GABARITO: B. Na omissão genérica (o Estado não atuou onde a prestação é difusa, ex: falta geral de policiamento ostensivo em bairro que sofre assaltos), a responsabilidade civil é subjetiva, fundada na falta do serviço (faute du service), exigindo a demonstração de culpa da Administração (inexistência, atraso ou mau funcionamento do serviço). Já na omissão específica (o Estado descumpre um dever legal individualizado e concreto de proteção em relação a pessoa ou bem sob sua guarda direta/garante, ex: morte de custodiado, estudante em escola pública ou paciente em hospital), a responsabilidade é objetiva, prescindindo da prova de culpa.",
    alternativas: [
      {
        letra: "A",
        texto: "A omissão genérica enseja sempre responsabilidade civil objetiva com base no risco integral, enquanto a específica é insuscetível de controle judicial.",
        correta: false,
        explicacao_especifica: "Incorreto. A omissão genérica atrai responsabilidade subjetiva (faute du service)."
      },
      {
        letra: "B",
        texto: "Na omissão genérica a responsabilidade estatal é subjetiva (exigindo comprovação de falta do serviço/culpa anônima), ao passo que na omissão específica (violação a dever especial e concreto de proteção de quem está sob custódia estatal) a responsabilidade é objetiva.",
        correta: true,
        explicacao_especifica: "Correto. Trata-se da clássica e reiterada construção jurisprudencial do STF e STJ sobre o regime da responsabilidade estatal por omissão."
      },
      {
        letra: "C",
        texto: "Ambas as modalidades geram responsabilidade subjetiva exclusiva dependente de dolo do Chefe do Poder Executivo.",
        correta: false,
        explicacao_especifica: "Incorreto. A omissão específica é objetiva e a genérica depende de culpa do serviço e não de dolo pessoal do governante."
      },
      {
        letra: "D",
        texto: "A omissão específica afasta a obrigação de indenizar caso a vítima comprove ter acionado o número 190 da polícia militar.",
        correta: false,
        explicacao_especifica: "Incorreto. Acionar o socorro público não afasta o dever de proteção quando o Estado tinha obrigação concreta de atuar."
      },
      {
        letra: "E",
        texto: "O ordenamento brasileiro não reconhece responsabilidade civil por atos omissivos do Poder Público.",
        correta: false,
        explicacao_especifica: "Incorreto. O Estado responde amplamente por omissões, sejam genéricas ou específicas, nos moldes do direito público."
      }
    ]
  },

  // 047 - Improbidade Administrativa: Exigência de Dolo Específico (Lei 14.230/2021)
  {
    idSlug: "batch3-adm-047",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Após as alterações introduzidas pela Lei nº 14.230/2021 na Lei de Improbidade Administrativa (Lei nº 8.429/1992), exige-se a presença de dolo específico para a configuração de qualquer ato de improbidade administrativa, tendo sido expressamente revogada a modalidade culposa anteriormente prevista para os atos que causam prejuízo ao erário.",
    explicacao: "GABARITO: CERTO. A Lei nº 14.230/2021 alterou substancialmente a Lei de Improbidade Administrativa. O art. 1º, §§ 1º, 2º e 3º da Lei 8.429/92 passou a exigir dolo (compreendido como a vontade livre e consciente de alcançar o resultado ilícito tipificado nos arts. 9º, 10 e 11) para todas as espécies de atos de improbidade, tendo sido extinta a modalidade culposa (que antes existia no art. 10). Mero erro formal, negligência ou inaptidão profissional sem desonestidade não constituem improbidade.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A Lei 14.230/2021 unificou a exigência de dolo específico em todos os artigos (9º, 10 e 11) e aboliu a improbidade culposa do ordenamento."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. Não subsiste mais qualquer modalidade de ato de improbidade culposa na legislação brasileira em vigor."
      }
    ]
  },

  // 048 - Improbidade Administrativa: Tema 1199 do STF (Retroatividade e Prescrição)
  {
    idSlug: "batch3-adm-048",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito da aplicação no tempo das inovações promovidas pela Lei nº 14.230/2021 na Lei de Improbidade Administrativa e da tese fixada pelo Supremo Tribunal Federal no julgamento do Tema 1.199 de Repercussão Geral (ARE 843.989/PR), assinale a afirmativa correta:",
    explicacao: "GABARITO: B. O Plenário do STF, no Tema 1199, fixou as seguintes teses: 1) É necessária a comprovação de responsabilidade subjetiva com dolo para todos os tipos de improbidade; 2) A revogação da modalidade culposa da improbidade é IRRETROATIVA, não tendo eficácia sobre condenações com trânsito em julgado nem autorizando ação rescisória; 3) A exigência de dolo APLICA-SE imediatamente às ações de improbidade em andamento sem condenação transitada em julgado; 4) O novo regime prescricional geral (8 anos) e a prescrição intercorrente (4 anos) são irretroativos, aplicando-se a partir da publicação da Lei 14.230/2021.",
    alternativas: [
      {
        letra: "A",
        texto: "A revogação do ato de improbidade culposo retroage irrestritamente, inclusive para rescindir condenações cíveis já transitadas em julgado.",
        correta: false,
        explicacao_especifica: "Incorreto. O STF expressamente vedou a desconstituição de decisões transitadas em julgado (irretroatividade sobre a coisa julgada)."
      },
      {
        letra: "B",
        texto: "A exigência de dolo aplica-se aos processos em curso sem condenação transitada em julgado, mas a revogação da modalidade culposa não retroage para desconstituir condenações já transitadas em julgado.",
        correta: true,
        explicacao_especifica: "Correto. Síntese exata da tese vinculante firmada pelo Plenário do STF no Tema 1199 de Repercussão Geral."
      },
      {
        letra: "C",
        texto: "Os novos prazos de prescrição intercorrente de 4 anos retroagem para extinguir imediatamente todas as ações ajuizadas antes de 2021.",
        correta: false,
        explicacao_especifica: "Incorreto. O STF estabeleceu que os novos marcos prescricionais têm aplicação prospectiva a contar da publicação da Lei 14.230/2021."
      },
      {
        letra: "D",
        texto: "O STF declarou inconstitucional a exigência de dolo, restabelecendo a modalidade culposa para os crimes contra a administração pública.",
        correta: false,
        explicacao_especifica: "Incorreto. O STF chancelou a constitucionalidade da exigência de dolo estabelecida pelo legislador ordinário."
      },
      {
        letra: "E",
        texto: "A nova lei aplica-se exclusivamente aos servidores das carreiras da magistratura e do Ministério Público.",
        correta: false,
        explicacao_especifica: "Incorreto. A LIA incide sobre todos os agentes públicos dos três Poderes em todas as esferas federativas."
      }
    ]
  },

  // 049 - Improbidade Administrativa: Tipologia dos Arts. 9º, 10 e 11
  {
    idSlug: "batch3-adm-049",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Com a reforma da Lei nº 14.230/2021, enquanto os atos de improbidade que importam enriquecimento ilícito (art. 9º) e os que causam prejuízo ao erário (art. 10) mantiveram rol meramente exemplificativo, os atos de improbidade que atentam contra os princípios da administração pública (art. 11) passaram a constituir rol taxativo (numerus clausus).",
    explicacao: "GABARITO: CERTO. A Lei 14.230/2021 manteve a cláusula aberta exemplificativa nos arts. 9º e 10 ('constitui ato de improbidade... e notadamente...'), porém alterou o caput do art. 11 para estabelecer um rol taxativo: 'constitui ato de improbidade administrativa que atenta contra os princípios da administração pública a ação ou omissão dolosa que viole os deveres de honestidade, de imparcialidade e de legalidade, caracterizada por UMA DAS SEGUINTES CONDUTAS:'. Assim, apenas as condutas expressamente tipificadas nos incisos do art. 11 configuram improbidade por violação a princípios.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O rol do art. 11 tornou-se taxativo por opção legislativa expressa, diferentemente dos arts. 9º e 10 que permanecem exemplificativos."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A assertiva expressa com absoluta correção a distinção entre a taxatividade do art. 11 e o caráter exemplificativo dos arts. 9º e 10."
      }
    ]
  },

  // 050 - Improbidade Administrativa: Sanções e Perda da Função Pública (Art. 12 da LIA)
  {
    idSlug: "batch3-adm-050",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Policial civil condenado por ato de improbidade administrativa tipificado no art. 9º da Lei nº 8.429/1992 (enriquecimento ilícito decorrente de recebimento de propina para não apreender carga contrabandeada) sujeita-se às sanções cominadas no art. 12. De acordo com o texto vigente da Lei de Improbidade Administrativa, a sanção de perda da função pública:",
    explicacao: "GABARITO: C. O art. 12, § 1º, da Lei nº 8.429/1992 (redação da Lei nº 14.230/2021) dispõe: 'A sanção de perda da função pública atinge apenas o vínculo de mesma qualidade e natureza que o agente público ou político detinha com o poder público na época do cometimento da infração, podendo o magistrado, na hipótese do inciso I deste artigo (enriquecimento ilícito), e em caráter excepcional, estendê-la aos demais vínculos, consideradas as circunstâncias do caso e a gravidade da infração'.",
    alternativas: [
      {
        letra: "A",
        texto: "Acarreta automaticamente a perda de qualquer cargo público federal, estadual ou municipal que o agente venha a ocupar no futuro por concurso.",
        correta: false,
        explicacao_especifica: "Incorreto. A perda não proíbe futuros concursos, mas cessa o vínculo funcional na forma delimitada pela lei."
      },
      {
        letra: "B",
        texto: "Não pode ser aplicada caso o policial comprove ter restituído integralmente o valor recebido ilicitamente antes do trânsito em julgado.",
        correta: false,
        explicacao_especifica: "Incorreto. A perda da função pública é sanção autônoma e cumulativa com o ressarcimento e a perda de bens."
      },
      {
        letra: "C",
        texto: "Atinge apenas o vínculo de mesma qualidade e natureza que o agente detinha na época da infração, podendo o magistrado, excepcionalmente no enriquecimento ilícito, estendê-la a outros vínculos com base na gravidade do fato.",
        correta: true,
        explicacao_especifica: "Correto. O art. 12, § 1º da Lei 8.429/92 estabelece essa restrição como regra geral e a possibilidade de extensão excepcional para o art. 9º."
      },
      {
        letra: "D",
        texto: "Produz efeitos imediatos a partir da decisão liminar que recebe a petição inicial da ação civil pública.",
        correta: false,
        explicacao_especifica: "Incorreto. A execução das sanções da LIA exige o prévio trânsito em julgado da sentença condenatória (art. 20, caput)."
      },
      {
        letra: "E",
        texto: "É inaplicável a policiais de carreira estável, sendo restrita a ocupantes de cargos em comissão.",
        correta: false,
        explicacao_especifica: "Incorreto. A sanção de perda da função pública atinge tanto servidores efetivos/estáveis quanto comissionados."
      }
    ]
  },

  // 051 - Improbidade Administrativa: Sujeito Passivo e Particular em Concurso
  {
    idSlug: "batch3-adm-051",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O terceiro particular que não seja agente público não pode figurar sozinho como réu em ação de improbidade administrativa, sendo indispensável que figure no polo passivo em litisconsórcio com ao menos um agente público que tenha concorrido para a prática do ato ímprobo ou se beneficiado dele.",
    explicacao: "GABARITO: CERTO. Conforme o art. 3º da Lei nº 8.429/1992 e a jurisprudência pacífica e consolidada do STJ (Súmula 634 e repetitivos): 'As disposições desta Lei são aplicáveis, no que couber, àquele que, mesmo não sendo agente público, induza ou concorra dolosamente para a prática do ato de improbidade'. Não se admite o ajuizamento de ação de improbidade exclusivamente em face do particular sem a presença de agente público no polo passivo.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O particular só responde por improbidade se agir em concurso doloso com agente público, sendo vedada ação de improbidade exclusiva contra particulares."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. É pacífico no STJ e na doutrina que o particular não pode ser demandado isoladamente em ação de improbidade."
      }
    ]
  },

  // 052 - Improbidade Administrativa: Prescrição Geral e Intercorrente (Art. 23 LIA)
  {
    idSlug: "batch3-adm-052",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado de Goiás (PC-GO)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação ao regime de prescrição estabelecido no art. 23 da Lei nº 8.429/1992 com a redação conferida pela Lei nº 14.230/2021, é correto afirmar:",
    explicacao: "GABARITO: A. O art. 23, caput, da Lei 8.429/92 unificou o prazo de prescrição geral da ação de improbidade para 8 (oito) anos, contados a partir da data da ocorrência do fato (ou, no caso de infrações permanentes, do dia em que cessou a permanência). O art. 23, § 4º e § 5º instituiu a prescrição intercorrente no prazo de 4 (quatro) anos, contado entre os marcos interruptivos da prescrição (como o ajuizamento da ação, publicação da sentença condenatória e publicação de acórdão condenatório).",
    alternativas: [
      {
        letra: "A",
        texto: "A ação para a aplicação das sanções de improbidade prescreve em 8 anos, contados a partir da data da ocorrência do fato, operando-se a prescrição intercorrente no prazo de 4 anos entre os marcos interruptivos.",
        correta: true,
        explicacao_especifica: "Correto. Trata-se da disciplina literal do art. 23, caput e parágrafos, da Lei 8.429/92 com as alterações da Lei 14.230/21."
      },
      {
        letra: "B",
        texto: "O prazo prescricional continua subordinado ao prazo de demissão estatutária do servidor ou ao término do mandato de prefeito.",
        correta: false,
        explicacao_especifica: "Incorreto. A Lei 14.230/21 extinguiu os prazos atrelados a mandatos e unificou o prazo geral em 8 anos contados do fato."
      },
      {
        letra: "C",
        texto: "A ação de improbidade é imprescritível em relação a todas as sanções cominadas no art. 12 por determinação constitucional.",
        correta: false,
        explicacao_especifica: "Incorreto. O STF fixou no Tema 897 que apenas as ações de ressarcimento fundadas em ato doloso de improbidade são imprescritíveis; a pretensão sancionatória prescreve."
      },
      {
        letra: "D",
        texto: "A prescrição intercorrente só se consuma caso o processo fique paralisado por mais de 20 anos ininterruptos.",
        correta: false,
        explicacao_especifica: "Incorreto. O prazo de prescrição intercorrente fixado pela LIA é de 4 anos entre marcos interruptivos."
      },
      {
        letra: "E",
        texto: "A instauração de inquérito civil não interrompe nem suspende o fluxo da prescrição sob nenhuma hipótese.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 23, § 2º prevê que a instauração do inquérito civil suspende a prescrição pelo prazo de até 180 dias."
      }
    ]
  },

  // 053 - Improbidade Administrativa: Divergência Hermenêutica (Art. 1º, § 8º LIA)
  {
    idSlug: "batch3-adm-053",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Não configura improbidade administrativa a ação ou omissão decorrente de divergência interpretativa da lei, baseada em jurisprudência, ainda que não pacificada, mesmo que não venha a ser posteriormente prevalecente nas decisões dos órgãos de controle ou dos tribunais do Poder Judiciário.",
    explicacao: "GABARITO: CERTO. Trata-se da redação expressa do art. 1º, § 8º, da Lei nº 8.429/1992 (incluído pela Lei nº 14.230/2021). A norma protege a atuação do administrador público de boa-fé que fundamenta sua decisão em tese jurídica plausível e referendada por jurisprudência ou doutrina, afastando a tipificação de improbidade em casos de mera controvérsia hermenêutica.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 1º, § 8º da Lei 8.429/92 veda expressamente a punição por improbidade fundada em mera divergência de interpretação jurídica."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A imunização da divergência hermenêutica razoável é regra legal expressa e vigente."
      }
    ]
  },

  // 054 - Improbidade Administrativa: Legitimidade Ativa Concorrente (STF ADI 7042 e 7043)
  {
    idSlug: "batch3-adm-054",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Inspetor de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Lei nº 14.230/2021 havia conferido legitimidade ativa exclusiva ao Ministério Público para a propositura da ação de improbidade administrativa. O Supremo Tribunal Federal, contudo, no julgamento das Ações Diretas de Inconstitucionalidade nº 7.042 e nº 7.043, decidiu que:",
    explicacao: "GABARITO: D. O Plenário do STF declarou a inconstitucionalidade parcial dos dispositivos da Lei 14.230/2021 que conferiam legitimidade exclusiva ao MP, assentando a LEGITIMIDADE ATIVA CONCORRENTE e disjuntiva entre o Ministério Público e a pessoa jurídica interessada (os respectivos entes da Administração Pública direta e indireta prejudicados pelo ato lesivo, por meio de suas procuradorias jurídicas/advocacia pública) para a propositura de ações de improbidade e celebração de acordos de não persecução civil (ANPC).",
    alternativas: [
      {
        letra: "A",
        texto: "A legitimidade ativa é privativa da Defensoria Pública da União em todas as esferas.",
        correta: false,
        explicacao_especifica: "Incorreto. A Defensoria não detém atribuição originária exclusiva para ação de improbidade."
      },
      {
        letra: "B",
        texto: "O Ministério Público mantém monopólio absoluto e exclusivo, sendo inconstitucional qualquer participação do ente público lesado.",
        correta: false,
        explicacao_especifica: "Incorreto. O STF julgou inconstitucional a exclusividade do MP nas ADIs 7042 e 7043."
      },
      {
        letra: "C",
        texto: "A ação de improbidade pode ser ajuizada por qualquer cidadão eleitor por meio de ação popular sumaríssima.",
        correta: false,
        explicacao_especifica: "Incorreto. O cidadão é legitimado para Ação Popular (art. 5º, LXXIII da CF), não para a Ação de Improbidade Administrativa."
      },
      {
        letra: "D",
        texto: "Existe legitimidade ativa concorrente e disjuntiva entre o Ministério Público e a pessoa jurídica interessada (ente público prejudicado) para a propositura da ação de improbidade administrativa.",
        correta: true,
        explicacao_especifica: "Correto. Decisão vinculante do STF nas ADIs 7042 e 7043 restabelecendo a legitimidade ativa das procuradorias dos entes lesados."
      },
      {
        letra: "E",
        texto: "A competência para a ação de improbidade foi transferida com exclusividade aos Tribunais de Contas da União e dos Estados.",
        correta: false,
        explicacao_especifica: "Incorreto. Os Tribunais de Contas exercem controle externo contábil/financeiro e não ajuizam ações judiciais de improbidade."
      }
    ]
  },

  // 055 - Licitações e Contratos: Modalidades na Lei 14.133/2021
  {
    idSlug: "batch3-adm-055",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.licitacoes,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com a Nova Lei de Licitações e Contratos Administrativos (Lei nº 14.133/2021), são modalidades de licitação: o pregão, a concorrência, o concurso, o leilão e o diálogo competitivo, tendo sido expressamente extintas as modalidades de tomada de preços e convite.",
    explicacao: "GABARITO: CERTO. O art. 28 da Lei nº 14.133/2021 elenca taxativamente as cinco modalidades licitatórias: I - pregão; II - concorrência; III - concurso; IV - leilão; V - diálogo competitivo. O novo diploma revogou a Lei 8.666/1993 e aboliu do direito brasileiro as modalidades de Tomada de Preços e Convite.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 28 da Lei 14.133/2021 fixa exatamente essas cinco modalidades e extinguiu o convite e a tomada de preços."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A assertiva espelha precisamente o rol de modalidades da Nova Lei de Licitações."
      }
    ]
  },

  // 056 - Licitações e Contratos: Inexigibilidade de Licitação (Art. 74 Lei 14.133/2021)
  {
    idSlug: "batch3-adm-056",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.licitacoes,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A Academia de Polícia Civil necessita contratar curso de capacitação altamente especializada e avançada em técnicas de negociação de reféns e tiro de precisão antiterrorismo. O treinamento será ministrado por instrutor internacional de notória especialização e singularidade profissional comprovada no cenário tático. Nos termos da Lei nº 14.133/2021, essa contratação direta dar-se-á por:",
    explicacao: "GABARITO: A (Inexigibilidade de Licitação). O art. 74, inciso III, alínea 'f', da Lei nº 14.133/2021 estabelece que é inexigível a licitação quando for inviável a competição, em especial para a contratação de serviços técnicos especializados de natureza predominantemente intelectual com profissionais ou empresas de notória especialização, vedada a inexigibilidade para serviços de publicidade e divulgação, incluindo o treinamento e aperfeiçoamento de pessoal.",
    alternativas: [
      {
        letra: "A",
        texto: "Inexigibilidade de licitação, tendo em vista a inviabilidade de competição para serviço técnico especializado de natureza intelectual prestado por profissional de notória especialização.",
        correta: true,
        explicacao_especifica: "Correto. Trata-se de hipótese expressa de inexigibilidade prevista no art. 74, III, da Lei 14.133/2021."
      },
      {
        letra: "B",
        texto: "Dispensa de licitação obrigatória por valor superior a dois milhões de reais.",
        correta: false,
        explicacao_especifica: "Incorreto. A notória especialização fundamenta a inexigibilidade por inviabilidade de competição e não a dispensa por valor."
      },
      {
        letra: "C",
        texto: "Pregão eletrônico obrigatório sob o critério do maior desconto comercial.",
        correta: false,
        explicacao_especifica: "Incorreto. O pregão destina-se a bens e serviços comuns, sendo vedado para serviços técnicos especializados de natureza predominantemente intelectual com notória especialização."
      },
      {
        letra: "D",
        texto: "Diálogo competitivo internacional com fase de julgamento por lance fechado.",
        correta: false,
        explicacao_especifica: "Incorreto. O diálogo competitivo destina-se a inovações complexas e não a cursos específicos com especialista determinado."
      },
      {
        letra: "E",
        texto: "Concurso público para premiação pecuniária de obra artística.",
        correta: false,
        explicacao_especifica: "Incorreto. O concurso destina-se à escolha de trabalho técnico, científico ou artístico para prêmio, não sendo modalidade para contratação de curso."
      }
    ]
  },

  // 057 - Licitações e Contratos: Dispensa de Licitação e Segurança Pública
  {
    idSlug: "batch3-adm-057",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.licitacoes,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei nº 14.133/2021, a dispensa de licitação difere essencialmente da inexigibilidade porque, na dispensa, a competição entre particulares é teoricamente viável, mas a lei autoriza ou determina que a Administração Pública deixe de licitar por razões de conveniência socioeconômica, urgência, pequeno valor ou segurança pública expressamente tipificadas.",
    explicacao: "GABARITO: CERTO. A distinção ontológica é precisa: 1) Inexigibilidade (art. 74): inviabilidade fática ou jurídica de competição (rol exemplificativo); 2) Dispensa (art. 75): a competição é viável, mas a lei expressamente autoriza a não realização do certame diante de situações pontuais (rol taxativo - pequeno valor, emergência, aquisição de material de segurança pública por órgãos de inteligência, etc.).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Na dispensa há viabilidade de competição dispensada por lei; na inexigibilidade há inviabilidade de competição."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O enunciado traz a distinção doutrinária e legal correta entre as hipóteses de contratação direta."
      }
    ]
  },

  // 058 - Licitações e Contratos: Critérios de Julgamento na Lei 14.133/2021
  {
    idSlug: "batch3-adm-058",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.licitacoes,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado da Bahia (PC-BA)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O art. 33 da Lei nº 14.133/2021 estabelece os critérios de julgamento que devem ser utilizados para a seleção da proposta mais vantajosa para a Administração Pública. Assinale a alternativa que apresenta APENAS critérios de julgamento legalmente admitidos no referido diploma:",
    explicacao: "GABARITO: D. O art. 33 da Lei 14.133/2021 prevê os seguintes critérios de julgamento: I - menor preço; II - maior desconto; III - melhor técnica ou conteúdo artístico; IV - técnica e preço; V - maior lance, no caso de leilão; VI - maior retorno econômico. O critério 'melhor trabalho' ou 'menor tempo de execução' isolado não constituem critérios autônomos previstos no art. 33.",
    alternativas: [
      {
        letra: "A",
        texto: "Menor preço, maior desconto, menor tempo de obra e sorteio prévio.",
        correta: false,
        explicacao_especifica: "Incorreto. Sorteio prévio e menor tempo de obra não são critérios de julgamento do art. 33."
      },
      {
        letra: "B",
        texto: "Técnica pura, melhor reputação de mercado e maior capital social.",
        correta: false,
        explicacao_especifica: "Incorreto. Reputação de mercado e capital social são requisitos de habilitação, não critérios de julgamento de propostas."
      },
      {
        letra: "C",
        texto: "Menor custo administrativo, lance verbal ilimitado e pregão por convite.",
        correta: false,
        explicacao_especifica: "Incorreto. Não constam do rol legal de julgamento."
      },
      {
        letra: "D",
        texto: "Menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance e maior retorno econômico.",
        correta: true,
        explicacao_especifica: "Correto. O rol corresponde integralmente aos seis critérios de julgamento taxativamente previstos no art. 33 da Lei 14.133/2021."
      },
      {
        letra: "E",
        texto: "Maior retorno financeiro cambial e menor índice de rotatividade de mão de obra.",
        correta: false,
        explicacao_especifica: "Incorreto. Critérios alheios à disciplina da Lei 14.133/2021."
      }
    ]
  },

  // 059 - Licitações e Contratos: Sanções Administrativas na Lei 14.133/2021
  {
    idSlug: "batch3-adm-059",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.licitacoes,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na Lei nº 14.133/2021, a sanção de impedimento de licitar e contratar impede o infrator de participar de licitações e contratar com a Administração Pública direta e indireta do ente federativo que tiver aplicado a sanção, pelo prazo máximo de até 3 anos; por sua vez, a declaração de inidoneidade para licitar ou contratar produz efeitos perante a Administração Pública direta e indireta de TODOS os entes federativos da Federação, pelo prazo mínimo de 3 anos e máximo de 6 anos.",
    explicacao: "GABARITO: CERTO. A disciplina sancionatória do art. 156 da Lei nº 14.133/2021 estabelece essa precisa diferenciação de âmbito espacial e temporal: 1) Impedimento de licitar e contratar (art. 156, § 4º): atinge o respectivo ente federativo sancionador (União, Estado, DF ou Município), pelo prazo máximo de até 3 anos; 2) Declaração de inidoneidade (art. 156, § 5º): atinge a Administração direta e indireta de todos os entes federativos (âmbito nacional), com prazo de 3 a 6 anos.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 156, §§ 4º e 5º da Lei 14.133/2021 define com exatidão esses prazos e abrangências espaciais para cada penalidade."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A assertiva traz a literalidade das balizas legais das sanções administrativas da Lei 14.133/2021."
      }
    ]
  },

  // 060 - Licitações e Contratos: Alteração Unilateral dos Contratos Administrativos (Lei 14.133/2021)
  {
    idSlug: "batch3-adm-060",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.licitacoes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Secretaria de Segurança Pública celebrou contrato administrativo para a realização de ampla reforma estrutural e modernização de um complexo de delegacias e postos de polícia técnico-científica. No curso da execução, constatou-se a necessidade de acréscimo de obras de reforço de blindagem e ampliação de carceragens. De acordo com o art. 125 da Lei nº 14.133/2021, nas alterações contratuais unilaterais promovidas pela Administração, o contratado fica obrigado a aceitar, nas mesmas condições contratuais, os acréscimos ou supressões que se fizerem nas obras, serviços ou compras, até o limite de:",
    explicacao: "GABARITO: E. Conforme o art. 125 da Lei nº 14.133/2021: 'Nas alterações unilaterais a que se refere o inciso I do caput do art. 124 desta Lei, o contratado será obrigado a aceitar, nas mesmas condições contratuais, acréscimos ou supressões de até 25% (vinte e cinco por cento) do valor inicial atualizado do contrato que se fizerem nas obras, nos serviços ou nas compras, e, no caso de reforma de edifício ou de equipamento, o limite para os acréscimos será de até 50% (cinquenta por cento)'. Como o caso trata expressamente de reforma de edifício público (complexo de delegacias), o limite para acréscimos é de até 50%.",
    alternativas: [
      {
        letra: "A",
        texto: "10% para compras e 20% para obras de qualquer natureza.",
        correta: false,
        explicacao_especifica: "Incorreto. A lei não prevê o percentual de 10% nem 20% para essas alterações."
      },
      {
        letra: "B",
        texto: "25% para qualquer tipo de objeto, sendo vedada ampliação superior mesmo em reformas.",
        correta: false,
        explicacao_especifica: "Incorreto. Para reforma de edifício ou de equipamento, a lei expressamente autoriza acréscimos de até 50%."
      },
      {
        letra: "C",
        texto: "100% do valor inicial atualizado mediante simples termo aditivo sem justificativa.",
        correta: false,
        explicacao_especifica: "Incorreto. Não existe autorização legal unilateral de 100%."
      },
      {
        letra: "D",
        texto: "30% para compras comuns e 70% para obras de infraestrutura prisional.",
        correta: false,
        explicacao_especifica: "Incorreto. Percentuais inexistentes na legislação."
      },
      {
        letra: "E",
        texto: "Até 25% do valor inicial atualizado do contrato para obras, serviços ou compras, e, no caso particular de reforma de edifício ou de equipamento, até o limite de 50% para os acréscimos.",
        correta: true,
        explicacao_especifica: "Correto. O art. 125 da Lei 14.133/2021 consagra a regra geral de até 25% e o limite especial de até 50% para reforma de edifícios ou equipamentos."
      }
    ]
  }
];
