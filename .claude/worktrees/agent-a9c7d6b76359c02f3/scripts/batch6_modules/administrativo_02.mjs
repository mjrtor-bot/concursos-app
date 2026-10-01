import { TAXONOMIA } from "./taxonomia.mjs";

export const administrativo02Questoes = [
  // Q31 - CEBRASPE / PRF - Responsabilidade Civil Objetiva em Perseguição Policial
  {
    idSlug: "adm-031",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil_estado,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Durante perseguição policial a veículo em fuga em rodovia federal, a viatura da PRF colidiu contra veículo de terceiro inocente que trafegava regularmente. Nessa situação, a responsabilidade civil da União é objetiva, fundada na teoria do risco administrativo, competindo ao particular lesado demonstrar apenas a conduta estatal, o dano suportado e o nexo de causalidade.",
    explicacao: "GABARITO: CERTO. Nos termos do art. 37, § 6º, da Constituição Federal de 1988, as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos respondem objetivamente pelos danos que seus agentes, nessa qualidade, causarem a terceiros, sob a teoria do risco administrativo. A vítima necessita apenas comprovar a conduta administrativa, o dano e o nexo causal.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q32 - FGV / PM - Disparos em Operação Policial e Bala Perdida (Tema 1237 STF)
  {
    idSlug: "adm-032",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil_estado,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Durante incursão e troca de tiros entre policiais militares e criminosos armados em área residencial, um morador inocente foi alvejado mortalmente no interior de sua residência por disparo de arma de fogo. Realizada a perícia balística, o laudo oficial restou inconclusivo quanto à arma de onde partiu o projétil letal. Consoante tese vinculante fixada pelo Supremo Tribunal Federal no Tema 1.237 da Repercussão Geral (RE 1.368.672), o Estado:",
    explicacao: "GABARITO: B. No Tema 1.237 (RE 1.368.672/RJ), o STF fixou a tese de que o Estado é civilmente responsável por morte ou ferimento decorrente de operações de segurança pública, mesmo que a perícia seja inconclusiva quanto à autoria do disparo, cabendo ao Poder Público o ônus de demonstrar causa excludente de nexo de causalidade.",
    alternativas: [
      { letra: "A", texto: "está isento de qualquer dever de indenizar, pois a perícia inconclusiva rompe integralmente o nexo causal perante a teoria da culpa administrativa.", correta: false },
      { letra: "B", texto: "responde objetivamente pelos danos decorrentes de operações de segurança pública, inclusive quando a perícia sobre a origem do disparo for inconclusiva, cabendo ao Estado o ônus de comprovar causa excludente de nexo de causalidade.", correta: true },
      { letra: "C", texto: "responde de forma meramente subsidiária, devendo os herdeiros da vítima demandar primeiramente os criminosos envolvidos no tiroteio.", correta: false },
      { letra: "D", texto: "somente pode ser condenado por danos materiais comprovados se houver demonstração inequívoca de dolo do policial atirador.", correta: false },
      { letra: "E", texto: "responde sob a modalidade do risco integral sem possibilidade de arguição de qualquer excludente legal.", correta: false }
    ]
  },

  // Q33 - CEBRASPE / PC - Dupla Garantia e Ilegitimidade Passiva do Agente (Tema 940 STF)
  {
    idSlug: "adm-033",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil_estado,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com o Tema 940 do STF (princípio da dupla garantia), a ação de indenização por dano causado por policial civil no exercício de suas atribuições funcionais deve ser ajuizada exclusivamente em face do Estado, sendo inadmissível o ajuizamento direto da demanda indenizatória pelo particular contra o agente público.",
    explicacao: "GABARITO: CERTO. O STF, no julgamento do RE 1.027.633 (Tema 940), fixou: 'A teor do disposto no art. 37, § 6º, da Constituição Federal, a ação por danos causados por agente público deve ser ajuizada contra o Estado ou a pessoa jurídica de direito privado prestadora de serviço público, sendo parte ilegítima para figurar no polo passivo o autor do ato'. Trata-se do princípio da dupla garantia.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q34 - VUNESP / GM - Ação Regressiva e Exigência de Dolo ou Culpa
  {
    idSlug: "adm-034",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil_estado,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um Município foi condenado a indenizar um pedestre atropelado na faixa de segurança por viatura conduzida por Guarda Civil Municipal. Após pagar o valor da condenação, o Município ajuizou ação regressiva em face do guarda condutor. A respeito da responsabilidade do agente público na esfera regressiva, assinale a afirmativa correta.",
    explicacao: "GABARITO: C. O art. 37, § 6º, parte final, da CF/88 consagra o direito de regresso da Administração Pública contra o agente causador do dano, mas a responsabilidade do servidor perante o Estado é SUBJETIVA, dependendo da efetiva comprovação de que o agente agiu com dolo ou culpa (negligência, imprudência ou imperícia).",
    alternativas: [
      { letra: "A", texto: "A responsabilidade do servidor perante a Fazenda Pública é objetiva, prescindindo de demonstração de culpa ou dolo.", correta: false },
      { letra: "B", texto: "O direito de regresso da Administração independe do pagamento prévio da indenização ao terceiro prejudicado.", correta: false },
      { letra: "C", texto: "A responsabilidade do agente público é subjetiva, exigindo a prova inequívoca de que atuou com dolo ou culpa.", correta: true },
      { letra: "D", texto: "A Fazenda Municipal pode descontar integralmente o prejuízo dos vencimentos do guarda de forma compulsória sem processo judicial.", correta: false },
      { letra: "E", texto: "O agente público goza de imunidade patrimonial absoluta por atos praticados na condução de veículos oficiais de emergência.", correta: false }
    ]
  },

  // Q35 - CEBRASPE / PM - Morte de Preso sob Custódia Policial (Tema 592 STF)
  {
    idSlug: "adm-035",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil_estado,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em razão do dever constitucional de custódia e proteção dos presos (art. 5º, XLIX, da CF), a responsabilidade civil do Estado por morte de indivíduo detido em viatura policial ou cadeia pública é objetiva, admitindo-se a exclusão da responsabilidade apenas quando a Administração comprovar que a morte decorreu de circunstâncias absolutamente inevitáveis mesmo com a observância de todos os protocolos de vigilância.",
    explicacao: "GABARITO: CERTO. No Tema 592 (RE 841.526), o STF assentou que, em caso de morte de detento sob custódia estatal, a responsabilidade do Estado é objetiva em decorrência da inobservância de seu dever constitucional específico de proteção e vigilância, cabendo ao ente público demonstrar causa impeditiva ou que o evento não poderia ter sido evitado.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q36 - FGV / PRF - Excludente de Culpa Exclusiva da Vítima
  {
    idSlug: "adm-036",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil_estado,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em rodovia federal sob pista dupla iluminada, uma viatura da PRF trafegava em velocidade compatível com a via durante patrulhamento regular. Repentinamente, em trecho cercado com passarela de pedestres a dez metros de distância, um transeunte embriagado pulou a mureta de proteção e se lançou na frente da viatura, tornando o atropelamento inevitável. Nesse cenário, à luz da teoria do risco administrativo:",
    explicacao: "GABARITO: D. A teoria do risco administrativo admite a exclusão ou atenuação da responsabilidade civil do Estado diante de causas excludentes do nexo causal (como culpa exclusiva da vítima, fato de terceiro e caso fortuito ou força maior). Restando demonstrada a culpa exclusiva da vítima (que se atirou à via em conduta imprevisível e inevitável), rompe-se o nexo causal, excluindo a responsabilidade da União.",
    alternativas: [
      { letra: "A", texto: "a União responde pelo risco integral e deverá indenizar a vítima de forma incondicionada.", correta: false },
      { letra: "B", texto: "haverá presunção absoluta de culpa dos policiais rodoviários federais por transitarem em área com travessia de pedestres.", correta: false },
      { letra: "C", texto: "a responsabilidade da União subsiste com direito a regresso automático e imediato contra os agentes condutores.", correta: false },
      { letra: "D", texto: "a responsabilidade civil da União é afastada em virtude da culpa exclusiva da vítima, que opera o rompimento do nexo causal.", correta: true },
      { letra: "E", texto: "o Estado responderá subsidiariamente mediante rateio solidário de danos com a concessionária da rodovia.", correta: false }
    ]
  },

  // Q37 - CEBRASPE / PC - Caso Fortuito Interno vs Externo na Atividade Policial
  {
    idSlug: "adm-037",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil_estado,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O estouro do pneu de viatura da Polícia Civil decorrente de desgaste natural durante patrulhamento ostensivo constitui caso fortuito interno, por ser evento intrínseco aos riscos da atividade administrativa e de transporte, não afastando o dever do Estado de indenizar terceiro atingido pelo desgovernamento do veículo.",
    explicacao: "GABARITO: CERTO. A doutrina e a jurisprudência diferenciam o fortuito interno (inerente à própria máquina, ao serviço ou à atividade e seus riscos, como defeito mecânico ou pneu desgastado) do fortuito externo (fato estranho e totalmente imprevisível, como queda de raio). O fortuito interno não rompe o nexo causal e não elide a responsabilidade civil do Estado.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q38 - IBFC / CBM - Sacrifício de Direito / Risco Administrativo em Combate a Incêndio
  {
    idSlug: "adm-038",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil_estado,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante combate a incêndio de proporções catastróficas em shopping center, bombeiros militares arrombaram e utilizaram água pressurizada que acabou danificando o estoque de loja vizinha, cuja abertura era estritamente indispensável para conter o alastramento das chamas e salvar centenas de vidas. A respeito da obrigação do Estado perante o comerciante vizinho, assinale a opção correta.",
    explicacao: "GABARITO: A. Mesmo em caso de ato lícito e em estrito cumprimento do dever legal / estado de necessidade administrativo, o Estado responde pelo dano anormal e específico suportado pelo particular inocente (teoria do sacrifício de direito decorrente do princípio da repartição equitativa dos encargos sociais).",
    alternativas: [
      { letra: "A", texto: "O Estado deve indenizar os prejuízos materiais anormais causados ao comerciante vizinho, em observância ao princípio da repartição dos encargos públicos, ainda que a conduta dos bombeiros tenha sido lícita e indispensável.", correta: true },
      { letra: "B", texto: "A licitude da atuação em estado de necessidade exclui peremptoriamente qualquer dever de indenização por parte da Fazenda Pública.", correta: false },
      { letra: "C", texto: "Os bombeiros militares envolvidos devem arcar pessoalmente com a indenização perante a Justiça Militar.", correta: false },
      { letra: "D", texto: "O comerciante lesado não faz jus a nenhuma reparação por se tratar de risco genérico assumido pelo exercício da atividade mercantil.", correta: false }
    ]
  },

  // Q39 - CEBRASPE / PM - Independência das Instâncias Administrativa e Penal
  {
    idSlug: "adm-039",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_publicos_8112,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Vigora no direito brasileiro o princípio da independência das instâncias administrativa, civil e penal. Assim, um policial militar pode ser demitido em processo administrativo disciplinar por falta grave residual antes da conclusão do processo penal que apura os mesmos fatos.",
    explicacao: "GABARITO: CERTO. Em razão da independência entre as esferas, a Administração não precisa aguardar o trânsito em julgado da ação penal para aplicar a sanção disciplinar demissória ao servidor (Súmula 18 do STF: 'Pela falta residual, não compreendida na absolvição pelo juízo criminal, é admissível a punição administrativa do servidor público').",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q40 - FGV / PC - Exceções à Incomunicabilidade das Instâncias
  {
    idSlug: "adm-040",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_publicos_8112,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um policial civil foi demitido do cargo após regular processo administrativo disciplinar pela suposta prática de peculato. Paralelamente, na esfera criminal, o juízo penal proferiu sentença absolutória transitada em julgado. A decisão criminal vinculará a esfera administrativa, impondo a anulação da demissão e a reintegração do servidor, caso o fundamento da absolvição penal seja:",
    explicacao: "GABARITO: C. Nos termos do art. 126 da Lei nº 8.112/1990 e da jurisprudência consolidada do STF e STJ, a absolvição criminal repercute na esfera administrativa para afastar a punição disciplinar apenas quando declarar expressamente a inexistência material do fato (art. 386, I, CPP) ou a negativa de autoria (art. 386, IV, CPP). A ausência de provas (art. 386, VII, CPP) ou a atipicidade penal não impedem a punição disciplinar.",
    alternativas: [
      { letra: "A", texto: "a insuficiência de provas para a condenação criminal (in dubio pro reo).", correta: false },
      { letra: "B", texto: "a atipicidade penal da conduta praticada que, contudo, caracteriza infração residual funcional.", correta: false },
      { letra: "C", texto: "a negativa categórica de autoria ou o reconhecimento expresso da inexistência material do fato.", correta: true },
      { letra: "D", texto: "a extinção da punibilidade decorrente de prescrição da pretensão punitiva penal.", correta: false },
      { letra: "E", texto: "o perdão judicial concedido pelo magistrado com base no Código Penal.", correta: false }
    ]
  },

  // Q41 - CEBRASPE / PRF - Súmula Vinculante 5 do STF no PAD
  {
    idSlug: "adm-041",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_publicos_8112,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "De acordo com a Súmula Vinculante nº 5 do Supremo Tribunal Federal, a ausência de defesa técnica prestada por advogado devidamente constituído no curso do processo administrativo disciplinar não acarreta, por si só, ofensa à Constituição Federal.",
    explicacao: "GABARITO: CERTO. Súmula Vinculante nº 5 do STF: 'A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição'. O servidor pode exercer a autodefesa ou constituir defensor caso queira, sem que a ausência de advogado constitua nulidade insanável automática.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q42 - VUNESP / PC - Fases do Processo Administrativo Disciplinar (Lei 8.112/90)
  {
    idSlug: "adm-042",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_publicos_8112,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Agente de Polícia Civil",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei nº 8.112/1990 (art. 151), o Processo Administrativo Disciplinar ordinário desenvolve-se sucessivamente por meio das seguintes fases essenciais:",
    explicacao: "GABARITO: D. Art. 151 da Lei nº 8.112/1990: 'O processo disciplinar se desenvolve nas seguintes fases: I - instauração, com a publicação do ato que constituir a comissão; II - inquérito administrativo, que compreende instrução, defesa e relatório; III - julgamento'.",
    alternativas: [
      { letra: "A", texto: "notificação prévia, interrogatório compulsório, recurso de ofício e homologação.", correta: false },
      { letra: "B", texto: "sindicância punitiva sumária, termo de confissão, perícia e arbitramento de pena.", correta: false },
      { letra: "C", texto: "citação por edital, produção de provas, recurso voluntário e execução forçada.", correta: false },
      { letra: "D", texto: "instauração (com a portaria constitutiva da comissão), inquérito administrativo (compreendendo instrução, defesa e relatório) e julgamento.", correta: true },
      { letra: "E", texto: "denúncia ministerial, audiência de custódia disciplinar, alegações finais e acórdão corregedor.", correta: false }
    ]
  },

  // Q43 - CEBRASPE / GM - Prova Emprestada no PAD (Súmula 591 STJ)
  {
    idSlug: "adm-043",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_publicos_8112,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "É admitida a utilização de prova emprestada em processo administrativo disciplinar instaurado contra guarda municipal, inclusive interceptações telefônicas judicialmente autorizadas em processo penal, desde que seja garantido ao servidor o exercício do contraditório e da ampla defesa na esfera disciplinar.",
    explicacao: "GABARITO: CERTO. Súmula 591 do STJ: 'É permitida a 'prova emprestada' no processo administrativo disciplinar, desde que devidamente autorizada pelo juízo competente e respeitados o contraditório e a ampla defesa'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q44 - FGV / PM - Prescrição Disciplinar de Falta que Configura Crime
  {
    idSlug: "adm-044",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_publicos_8112,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Um policial militar cometeu falta disciplinar grave passível de demissão que também se encontra capitulada no Código Penal como crime contra a Administração Pública, cujo prazo prescricional penal abstrato é de doze anos. Considerando o regime disciplinar e a orientação pacificada do STJ:",
    explicacao: "GABARITO: A. Quando a infração disciplinar praticada pelo servidor também é capitulada como crime, aplicam-se à pretensão punitiva disciplinar os prazos de prescrição previstos na lei penal (art. 142, § 2º, da Lei nº 8.112/1990 e jurisprudência pacífica do STJ e STF).",
    alternativas: [
      { letra: "A", texto: "o prazo de prescrição da pretensão punitiva disciplinar será regulado pela lei penal, aplicando-se o prazo prescricional de doze anos previsto para o crime.", correta: true },
      { letra: "B", texto: "aplica-se obrigatoriamente o prazo geral administrativo estrito de dois anos para a suspensão, prevalecendo a norma administrativa mais benéfica.", correta: false },
      { letra: "C", texto: "a infração disciplinar torna-se imprescritível por envolver a quebra do dever de probidade policial.", correta: false },
      { letra: "D", texto: "a prescrição disciplinar só começa a correr após o trânsito em julgado de sentença condenatória na esfera criminal.", correta: false },
      { letra: "E", texto: "a Administração perde o poder disciplinar se não concluir o processo em 120 dias, operando-se a decadência absoluta.", correta: false }
    ]
  },

  // Q45 - CEBRASPE / PRF - Afastamento Preventivo Cautelar no PAD (Art. 147 Lei 8.112/90)
  {
    idSlug: "adm-045",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_publicos_8112,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O afastamento preventivo do Policial Rodoviário Federal como medida cautelar durante o curso de processo administrativo disciplinar tem prazo de até 60 dias, prorrogável por igual período, e dá-se sem prejuízo da remuneração do cargo.",
    explicacao: "GABARITO: CERTO. Art. 147 da Lei nº 8.112/1990: 'Como medida cautelar e a fim de que o servidor não venha a influir na apuração da irregularidade, a autoridade instauradora do processo disciplinar poderá determinar o seu afastamento do exercício do cargo, pelo prazo de até 60 (sessenta) dias, sem prejuízo da remuneração. Parágrafo único. O afastamento poderá ser prorrogado por igual prazo, findo o qual cessarão os seus efeitos, ainda que não concluído o processo'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q46 - IBFC / PC - Reintegração de Servidor Policial
  {
    idSlug: "adm-046",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_publicos_8112,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A investidura do servidor policial estável no cargo anteriormente ocupado, ou no cargo resultante de sua transformação, em virtude da invalidação de sua demissão por decisão administrativa ou judicial transitada em julgado, com ressarcimento de todas as vantagens funcionais e financeiras, denomina-se:",
    explicacao: "GABARITO: B. A reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado (ou no resultante de sua transformação), quando invalidada a sua demissão por decisão administrativa ou judicial, com ressarcimento integral de todas as vantagens (art. 28 da Lei nº 8.112/1990 e art. 41, § 2º, da CF/88).",
    alternativas: [
      { letra: "A", texto: "Recondução.", correta: false },
      { letra: "B", texto: "Reintegração.", correta: true },
      { letra: "C", texto: "Readaptação.", correta: false },
      { letra: "D", texto: "Reversão.", correta: false }
    ]
  },

  // Q47 - CEBRASPE / PM - Recondução de Servidor Estável
  {
    idSlug: "adm-047",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_publicos_8112,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A recondução é o retorno do servidor público estável ao cargo anteriormente ocupado e decorre exclusivamente de duas hipóteses: inabilitação em estágio probatório relativo a outro cargo público ou reintegração do anterior ocupante do cargo.",
    explicacao: "GABARITO: CERTO. Art. 29 da Lei nº 8.112/1990: 'Recondução é o retorno do servidor estável ao cargo anteriormente ocupado e decorrerá de: I - inabilitação em estágio probatório relativo a outro cargo; II - reintegração do anterior ocupante'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q48 - VUNESP / GM - Acumulação Remunerada de Cargos Públicos (Art. 37, XVI, CF)
  {
    idSlug: "adm-048",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_publicos_8112,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um Guarda Civil Municipal pretende acumular seu cargo operacional com outro cargo público de provimento efetivo em concurso do qual foi recentemente aprovado. À luz da regra constitucional da vedação de acumulação de cargos públicos (art. 37, XVI, da Constituição Federal), a acumulação remunerada é permitida:",
    explicacao: "GABARITO: D. Nos termos do art. 37, XVI, da CF/88, é vedada a acumulação remunerada de cargos públicos, exceto, quando houver compatibilidade de horários: a) a de dois cargos de professor; b) a de um cargo de professor com outro técnico ou científico; c) a de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas. Os cargos de segurança e guardas municipais são considerados cargos técnicos/operacionais, admitindo acumulação apenas com um cargo de professor.",
    alternativas: [
      { letra: "A", texto: "com qualquer outro cargo civil de natureza administrativa na esfera federal.", correta: false },
      { letra: "B", texto: "com outro cargo de policial penal ou militar no mesmo ente federado.", correta: false },
      { letra: "C", texto: "com dois cargos privativos de técnico em contabilidade sem limite de carga horária.", correta: false },
      { letra: "D", texto: "com um cargo de professor, desde que comprovada a compatibilidade de horários e a natureza técnica do cargo originário.", correta: true },
      { letra: "E", texto: "de forma irrestrita, desde que o teto remuneratório constitucional seja observado pela soma dos vencimentos.", correta: false }
    ]
  },

  // Q49 - CEBRASPE / PRF - Reversão de Policial Aposentado por Invalidez
  {
    idSlug: "adm-049",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_publicos_8112,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "A reversão é o retorno à atividade de servidor público aposentado, ocorrendo de ofício quando junta médica oficial declarar insubsistentes os motivos da aposentadoria por incapacidade permanente.",
    explicacao: "GABARITO: CERTO. Art. 25, inciso I, da Lei nº 8.112/1990: 'Reversão é o retorno à atividade de servidor aposentado: I - por invalidez, quando junta médica oficial declarar insubsistentes os motivos da aposentadoria'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q50 - FGV / PC - Lei 14.230/21 e Exigência do Dolo Específico na LIA
  {
    idSlug: "adm-050",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade_administrativa,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Lei nº 14.230/2021 promoveu profunda e substancial reforma na Lei de Improbidade Administrativa (Lei nº 8.429/1992). A respeito do elemento subjetivo exigido para a caracterização de atos de improbidade administrativa após essa reforma legal, assinale a afirmativa correta.",
    explicacao: "GABARITO: B. A Lei nº 14.230/2021 revogou integralmente a modalidade culposa de ato de improbidade administrativa (anteriormente prevista no art. 10) e passou a exigir em todos os tipos (arts. 9º, 10 e 11) a presença do dolo específico, definido como a vontade livre e consciente de alcançar o resultado ilícito tipificado na lei, afastando o mero dolo genérico, a negligência ou o erro inescusável (art. 1º, §§ 1º, 2º e 3º).",
    alternativas: [
      { letra: "A", texto: "Permanece admitida a modalidade culposa exclusivamente para os atos de improbidade que causam prejuízo ao erário (art. 10).", correta: false },
      { letra: "B", texto: "Exige-se a demonstração de dolo específico em todas as modalidades de atos de improbidade administrativa (arts. 9º, 10 e 11), tendo sido extinta a modalidade culposa.", correta: true },
      { letra: "C", texto: "O dolo eventual e a negligência grosseira continuam suficientes para a caracterização de atos atentatórios aos princípios.", correta: false },
      { letra: "D", texto: "A mera voluntariedade desprovida de fim ilícito específico configura ato de improbidade em razão da presunção juris et de jure.", correta: false },
      { letra: "E", texto: "A improbidade por enriquecimento ilícito prescinde de dolo quando houver vantagem patrimonial de grande vulto.", correta: false }
    ]
  },

  // Q51 - CEBRASPE / PM - Enriquecimento Ilícito na LIA (Art. 9º)
  {
    idSlug: "adm-051",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade_administrativa,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O policial militar que solicita ou aceita promessa de vantagem econômica indevida para deixar de lavrar auto de infração e de apreender veículo flagrado em blitz comete ato de improbidade administrativa que importa em enriquecimento ilícito (art. 9º da Lei nº 8.429/1992).",
    explicacao: "GABARITO: CERTO. Art. 9º, inciso I, da Lei nº 8.429/1992: 'Constitui ato de improbidade administrativa importando em enriquecimento ilícito auferir, mediante a prática de ato doloso, qualquer tipo de vantagem patrimonial indevida em razão do exercício de cargo, mandato, função, emprego ou atividade (...), e notadamente: I - receber, para si ou para outrem, dinheiro, bem móvel ou imóvel, ou qualquer outra vantagem econômica, direta ou indireta, a título de comissão, percentagem, gratificação ou presente de quem tenha interesse, direto ou indireto, que possa ser atingido ou amparado por ação ou omissão decorrente das atribuições do agente público'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q52 - VUNESP / PRF - Retroatividade da Lei 14.230/21 (Tema 1.199 STF)
  {
    idSlug: "adm-052",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade_administrativa,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação à eficácia temporal das alterações introduzidas pela Lei nº 14.230/2021 na Lei de Improbidade Administrativa, o Supremo Tribunal Federal, no julgamento do Tema 1.199 da Repercussão Geral (ARE 843.989), fixou que:",
    explicacao: "GABARITO: C. No Tema 1.199, o STF definiu: 1) É necessária a comprovação de dolo para a tipificação de improbidade; 2) A revogação da modalidade culposa é IRRETROATIVA para condenações transitadas em julgado (coisa julgada); 3) A nova exigência de dolo APLICA-SE aos atos praticados na vigência da lei anterior sem condenação transitada em julgado; 4) O novo regime prescricional é irretroativo.",
    alternativas: [
      { letra: "A", texto: "a revogação da modalidade culposa retroage para rescindir todas as sentenças condenatórias já transitadas em julgado.", correta: false },
      { letra: "B", texto: "o novo regime prescricional geral e intercorrente retroage para fulminar todas as ações em andamento ajuizadas antes de 2021.", correta: false },
      { letra: "C", texto: "a revogação da modalidade culposa do ato de improbidade aplica-se aos processos em curso sem condenação transitada em julgado, mas não retroage para desconstituir decisões transitadas em julgado.", correta: true },
      { letra: "D", texto: "a Lei nº 14.230/2021 é integralmente prospectiva, não se aplicando a nenhum fato pretérito mesmo em ações não julgadas.", correta: false },
      { letra: "E", texto: "a exigência de dolo específico aplica-se exclusivamente a crimes tipificados no Código Penal Militar.", correta: false }
    ]
  },

  // Q53 - CEBRASPE / PC - Legitimidade Ativa na LIA (ADI 7042 e 7043 STF)
  {
    idSlug: "adm-053",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade_administrativa,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Conforme decisão do Supremo Tribunal Federal nas ADIs 7.042 e 7.043, a propositura da Ação de Improbidade Administrativa é de legitimidade ativa concorrente e disjuntiva entre o Ministério Público e a pessoa jurídica de direito público interessada (vítima do dano).",
    explicacao: "GABARITO: CERTO. Embora a Lei nº 14.230/2021 tenha tentado atribuir legitimidade exclusiva ao Ministério Público, o STF julgou inconstitucional essa exclusividade nas ADIs 7042 e 7043, restabelecendo a legitimidade ativa concorrente e disjuntiva entre o Ministério Público e as pessoas jurídicas lesadas (entes públicos prejudicados).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q54 - FGV / GM - Atos que Causam Prejuízo ao Erário (Art. 10) e Vedação de Dano In Re Ipsa
  {
    idSlug: "adm-054",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade_administrativa,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O Comandante de uma Guarda Municipal homologou dispensa indevida de licitação para compra de coletes balísticos. A auditoria comprovou que os equipamentos foram efetivamente entregues, com qualidade superior e por preços inferiores aos praticados no mercado, inexistindo qualquer sobrepreço ou superfaturamento. Considerando a nova redação do art. 10 da Lei nº 8.429/1992:",
    explicacao: "GABARITO: B. Com a Lei nº 14.230/2021, o caput do art. 10 da LIA passou a exigir expressamente a 'perda patrimonial efetiva' como elemento indispensável para a tipificação de ato de improbidade por lesão ao erário, vedando-se a presunção de dano presumido (*in re ipsa*). Se não houve desfalque econômico real ao patrimônio público, não se configura a infração do art. 10.",
    alternativas: [
      { letra: "A", texto: "configura-se ato de improbidade do art. 10 por presunção in re ipsa decorrente do mero descumprimento formal da Lei de Licitações.", correta: false },
      { letra: "B", texto: "não se configura ato de improbidade do art. 10, pois este exige a comprovação inequívoca de perda patrimonial efetiva e real ao erário, vedado o dano presumido.", correta: true },
      { letra: "C", texto: "o agente público deve ser condenado a restituir o valor total do contrato mesmo com a entrega regular dos bens.", correta: false },
      { letra: "D", texto: "o ato é presumido como culposo, acarretando automática suspensão dos direitos políticos por cinco anos.", correta: false },
      { letra: "E", texto: "a ausência de dano patrimonial converte automaticamente o ato em crime hediondo inafiançável.", correta: false }
    ]
  },

  // Q55 - CEBRASPE / PRF - Rol Taxativo do Art. 11 da LIA (Atentado aos Princípios)
  {
    idSlug: "adm-055",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade_administrativa,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Com o advento da Lei nº 14.230/2021, o rol de condutas que configuram ato de improbidade administrativa que atenta contra os princípios da administração pública (art. 11 da Lei nº 8.429/1992) passou a ser taxativo (numerus clausus), não se admitindo mais o enquadramento em cláusula geral genérica desprovida de previsão em um dos seus incisos expressos.",
    explicacao: "GABARITO: CERTO. A Lei nº 14.230/2021 alterou o caput do art. 11 da Lei nº 8.429/1992 para suprimir a expressão aberta ('e notadamente') e conferir caráter estritamente taxativo (rol exaustivo / numerus clausus) aos incisos que tipificam atos atentatórios aos princípios da Administração.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q56 - IBFC / PM - Sanção de Perda da Função Pública na LIA (Art. 12, § 1º)
  {
    idSlug: "adm-056",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade_administrativa,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 12, § 1º, da Lei nº 8.429/1992 (com redação dada pela Lei nº 14.230/2021), a sanção de perda da função pública cominada em ação de improbidade administrativa:",
    explicacao: "GABARITO: A. Art. 12, § 1º, da LIA: 'A sanção de perda da função pública, nas hipóteses dos incisos I e II do caput deste artigo, atinge apenas o vínculo de mesma qualidade e natureza que o agente público ou político detinha com o poder público na época do cometimento da infração, podendo o magistrado, na hipótese do inciso I do caput deste artigo, e em caráter excepcional, estendê-la aos demais vínculos, consideradas as circunstâncias do caso e a gravidade da infração'.",
    alternativas: [
      { letra: "A", texto: "atinge, em regra, apenas o vínculo de mesma qualidade e natureza que o agente detinha com o poder público na época do cometimento da infração.", correta: true },
      { letra: "B", texto: "implica a cassação automática de todos e quaisquer cargos públicos futuros e de benefícios previdenciários adquiridos.", correta: false },
      { letra: "C", texto: "aplica-se obrigatoriamente a todos os vínculos de parentesco do agente até o terceiro grau civil.", correta: false },
      { letra: "D", texto: "não pode ser aplicada a servidores militares sob nenhuma hipótese de dolo específico.", correta: false }
    ]
  },

  // Q57 - CEBRASPE / PC - Prescrição Geral de 8 Anos na LIA (Art. 23)
  {
    idSlug: "adm-057",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade_administrativa,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A ação para a aplicação das sanções previstas na Lei de Improbidade Administrativa prescreve em 8 anos, contados a partir da data da ocorrência do fato ou, no caso de infrações permanentes, do dia em que cessou a permanência.",
    explicacao: "GABARITO: CERTO. Art. 23, caput, da Lei nº 8.429/1992 (redação da Lei nº 14.230/2021): 'A ação para a aplicação das sanções previstas nesta Lei prescreve em 8 (oito) anos, contados a partir da ocorrência do fato ou, no caso de infrações permanentes, do dia em que cessou a permanência'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q58 - FGV / CBM - Prescrição Intercorrente de 4 Anos na LIA
  {
    idSlug: "adm-058",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade_administrativa,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Lei nº 14.230/2021 introduziu expressamente na Lei de Improbidade Administrativa o instituto da prescrição intercorrente. De acordo com o art. 23, §§ 4º e 5º, da Lei nº 8.429/1992, interrompida a prescrição pelo ajuizamento da ação, o prazo da prescrição intercorrente é de:",
    explicacao: "GABARITO: C. Art. 23, § 5º, da Lei nº 8.429/1992: 'Interrompida a prescrição, o prazo recomeça a correr do dia da interrupção, pela metade do prazo previsto no caput deste artigo' (ou seja, 4 anos entre os marcos interruptivos: ajuizamento da ação, publicação da sentença condenatória, publicação de acórdão condenatório de tribunal etc.).",
    alternativas: [
      { letra: "A", texto: "2 anos entre a notificação inicial e a apresentação de defesa prévia.", correta: false },
      { letra: "B", texto: "3 anos contados unicamente a partir da interposição de recurso especial.", correta: false },
      { letra: "C", texto: "4 anos (metade do prazo geral), que recomeça a correr a partir de cada marco interruptivo legal.", correta: true },
      { letra: "D", texto: "5 anos ininterruptos contados do término do mandato do Chefe do Executivo.", correta: false },
      { letra: "E", texto: "8 anos integrais sem qualquer possibilidade de redução temporal.", correta: false }
    ]
  },

  // Q59 - CEBRASPE / GM - Particular em Concurso com Agente Público na LIA
  {
    idSlug: "adm-059",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade_administrativa,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O particular (pessoa física ou jurídica) que induza ou concorra dolosamente para a prática do ato de improbidade administrativa sujeita-se às cominações da Lei nº 8.429/1992; contudo, segundo jurisprudência pacífica do STJ, não é viável a propositura de ação de improbidade exclusivamente contra o particular sem a presença concomitante de agente público no polo passivo.",
    explicacao: "GABARITO: CERTO. Conforme art. 3º da Lei nº 8.429/1992 e jurisprudência pacificada do STJ (Tema Repetitivo e Súmulas correlatas), o terceiro particular responde pelas sanções da LIA quando induz ou concorre dolosamente para o ato, mas não pode figurar isoladamente no polo passivo da ação de improbidade sem que haja corréu agente público na relação processual.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q60 - VUNESP / PRF - Acordo de Não Persecução Civil (ANPC - Art. 17-B)
  {
    idSlug: "adm-060",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade_administrativa,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O art. 17-B da Lei nº 8.429/1992, introduzido pela Lei nº 14.230/2021, disciplina o Acordo de Não Persecução Civil (ANPC). A respeito dos requisitos e condições para a celebração desse instrumento consensual, assinale a afirmativa correta.",
    explicacao: "GABARITO: B. Art. 17-B, caput e incisos, da Lei nº 8.429/1992: O acordo de não persecução civil poderá ser celebrado no curso da investigação de apuração do ilícito, no curso da ação de improbidade ou no momento da execução da sentença condenatória, exigindo cumulativamente o integral ressarcimento do dano e a reversão à pessoa jurídica lesada da vantagem indevida obtida.",
    alternativas: [
      { letra: "A", texto: "O ANPC é cabível apenas antes do ajuizamento da ação, sendo terminantemente proibida sua celebração na fase de cumprimento de sentença.", correta: false },
      { letra: "B", texto: "O acordo pode ser celebrado no curso da investigação, durante a ação de improbidade ou na execução de sentença, exigindo o ressarcimento integral do dano patrimonial e a perda da vantagem indevida.", correta: true },
      { letra: "C", texto: "A celebração do ANPC dispensa expressamente a homologação judicial para produzir efeitos jurídicos válidos.", correta: false },
      { letra: "D", texto: "O acordo permite o perdão judicial de 100% do dano patrimonial causado ao erário por simples transação administrativa.", correta: false },
      { letra: "E", texto: "O ANPC é restrito aos atos de improbidade praticados na modalidade culposa residual.", correta: false }
    ]
  }
];
