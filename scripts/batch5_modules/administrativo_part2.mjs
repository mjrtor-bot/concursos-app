import { TAXONOMIA } from "./taxonomia.mjs";

export const administrativoPart2 = [
  {
    idSlug: "adm-b5-021",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.organizacao_administrativa,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A desconcentração administrativa caracteriza-se pela distribuição interna de competências dentro de uma mesma pessoa jurídica, resultando na criação de órgãos públicos desprovidos de personalidade jurídica própria, ao passo que a descentralização consiste na transferência da titularidade ou da execução de serviços públicos a uma pessoa jurídica distinta, integrante ou não da Administração Pública.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Diferenciação clássica: desconcentração = divisão interna (órgãos sem personalidade); descentralização = criação/transferência a outra pessoa jurídica (autarquias, fundações, empresas públicas, concessionárias)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O enunciado reflete com precisão os conceitos de desconcentração e descentralização."
      }
    ],
    explicacao: "Gabarito: Certo. Desconcentração é técnica de distribuição interna de competências no âmbito de uma única pessoa jurídica (criação de órgãos, ex.: Ministério, Delegacia). Descentralização é a transferência de atividades estatais a outras pessoas jurídicas (de direito público ou privado), podendo ocorrer por serviços/outorga (Administração Indireta) ou por delegação/colaboração (concessionárias e permissionárias)."
  },
  {
    idSlug: "adm-b5-022",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.organizacao_administrativa,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No tocante às entidades que integram a Administração Pública Indireta (art. 37, inciso XIX, da CF/88 e Decreto-Lei nº 200/1967), assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "As autarquias são pessoas jurídicas de direito público criadas diretamente por lei específica para desempenhar atividades típicas de Estado, detendo patrimônio e receita próprios, regime de precatórios para pagamento de dívidas judiciais e imunidade tributária recíproca quanto a impostos sobre patrimônio, renda e serviços vinculados a suas finalidades essenciais.",
        correta: true,
        explicacao_especifica: "Correta. É a caracterização jurídica completa e exata das autarquias no direito brasileiro (art. 37, XIX e art. 150, § 2º, CF/88)."
      },
      {
        letra: "B",
        texto: "As empresas públicas e as sociedades de economia mista são criadas diretamente por lei complementar ordinária dispensando registro de atos constitutivos em junta comercial.",
        correta: false,
        explicacao_especifica: "Incorreta. A lei específica apenas autoriza a criação; a existência jurídica inicia-se com a inscrição dos atos constitutivos no registro competente (art. 37, XIX)."
      },
      {
        letra: "C",
        texto: "As sociedades de economia mista podem adotar qualquer forma societária admitida em direito, inclusive sociedade limitada.",
        correta: false,
        explicacao_especifica: "Incorreta. As sociedades de economia mista devem constituir-se obrigatoriamente sob a forma de sociedade anônima (S/A - art. 5º, III, DL 200/67)."
      },
      {
        letra: "D",
        texto: "O capital social de uma empresa pública pode pertencer majoritariamente a investidores privados desde que o Estado mantenha 51% das ações com direito a voto.",
        correta: false,
        explicacao_especifica: "Incorreta. O capital da Empresa Pública é 100% público (podendo haver coparticipação de outras entidades públicas)."
      },
      {
        letra: "E",
        texto: "As fundações públicas de direito privado são imunes à fiscalização exercida pelo Tribunal de Contas da União.",
        correta: false,
        explicacao_especifica: "Incorreta. Todas as entidades que administram dinheiros, bens ou valores públicos submetem-se ao controle externo do Tribunal de Contas (art. 70, parágrafo único, CF/88)."
      }
    ],
    explicacao: "Gabarito: A. As autarquias possuem personalidade jurídica de direito público, são criadas diretamente por lei específica (art. 37, XIX, CF/88), exercem atividades típicas da Administração Pública, gozam de privilégios processuais da Fazenda Pública (prazos diferenciados e precatórios - art. 100, CF/88) e de imunidade tributária recíproca (art. 150, § 2º, CF/88)."
  },
  {
    idSlug: "adm-b5-023",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poder_policia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal, ao fixar tese no Tema 532 da Repercussão Geral (RE 633.782), assentou ser constitucional a delegação do poder de polícia sancionatório a pessoas jurídicas de direito privado integrantes da Administração Pública indireta (empresas públicas e sociedades de economia mista), desde que prestadoras de serviços públicos em regime não concorrencial, de capital social majoritariamente público e criadas por lei específica.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Tese de repercussão geral fixada no Tema 532 pelo Plenário do STF."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O STF assentou a possibilidade de delegação dos ciclos de polícia (inclusive sancionatório) para empresas estatais não concorrenciais prestadoras de serviço público."
      }
    ],
    explicacao: "Gabarito: Certo. No Tema 532 da Repercussão Geral (RE 633.782), o STF fixou a tese: 'É constitucional a delegação do poder de polícia, por meio de lei, a pessoas jurídicas de direito privado integrantes da Administração Pública indireta de capital social majoritariamente público que prestem exclusivamente serviço público de atuação própria do Estado e em regime não concorrencial'."
  },
  {
    idSlug: "adm-b5-024",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O ciclo do poder de polícia divide-se doutrinariamente em quatro fases distintas: ordem de polícia, consentimento de polícia, fiscalização de polícia e sanção de polícia. A expedição de um alvará de porte de arma de fogo ou de licença de trânsito insere-se na fase de:",
    alternativas: [
      {
        letra: "A",
        texto: "Consentimento de polícia, que se materializa pela anuência prévia formal da Administração autorizando o particular ao exercício de atividade condicionada a controle estatal.",
        correta: true,
        explicacao_especifica: "Correta. O alvará/licença/autorização configura a etapa de consentimento de polícia."
      },
      {
        letra: "B",
        texto: "Ordem de polícia, consubstanciada na edição de lei que prevê abstratamente condutas proibidas.",
        correta: false,
        explicacao_especifica: "Incorreta. Ordem de polícia é a norma legislativa primária abstrata."
      },
      {
        letra: "C",
        texto: "Sanção de polícia, consistente na aplicação de multa por infração administrativa consumada.",
        correta: false,
        explicacao_especifica: "Incorreta. Sanção é a penalidade imposta por violação da norma."
      },
      {
        letra: "D",
        texto: "Fiscalização de polícia, consubstanciada na realização de blitz preventiva de trânsito.",
        correta: false,
        explicacao_especifica: "Incorreta. Fiscalização é a verificação fática do cumprimento das regras."
      },
      {
        letra: "E",
        texto: "Desvio de polícia, consistente em ato manifestamente ilegal praticado por agente incompetente.",
        correta: false,
        explicacao_especifica: "Incorreta. Não integra as fases do ciclo de polícia."
      }
    ],
    explicacao: "Gabarito: A. As 4 etapas do ciclo de polícia são: 1. Ordem de polícia (norma legal abstrata que impõe limites/deveres); 2. Consentimento de polícia (anuência prévia da Administração ao particular, ex.: licença, autorização); 3. Fiscalização de polícia (inspeção, vistoria, blitz); 4. Sanção de polícia (aplicação de penalidades por descumprimento, ex.: multa, interdição)."
  },
  {
    idSlug: "adm-b5-025",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.poderes_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Presidente da República pode dispor, mediante decreto autônomo (art. 84, inciso VI, da CF/88), sobre organização e funcionamento da administração federal, quando não implicar aumento de despesa nem criação ou extinção de órgãos públicos; e sobre a extinção de funções ou cargos públicos, quando vagos.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Trata-se da hipótese constitucional expressa de decreto autônomo introduzida pela EC 32/2001 (art. 84, VI, alíneas 'a' e 'b', da CF/88)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 84, VI disciplina exatamente essas duas situações excepcionais de decreto autônomo."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme o art. 84, VI, da CF/88: 'Compete privativamente ao Presidente da República: VI - dispor, mediante decreto, sobre: a) organização e funcionamento da administração federal, quando não implicar aumento de despesa nem criação ou extinção de órgãos públicos; b) extinção de funções ou cargos públicos, quando vagos'."
  },
  {
    idSlug: "adm-b5-026",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "De acordo com a Teoria dos Motivos Determinantes, a validade do ato administrativo:",
    alternativas: [
      {
        letra: "A",
        texto: "Fica vinculada aos motivos fáticos e de direito declarados pela autoridade como justificativa para a sua prática, de modo que, se tais motivos forem comprovadamente falsos, inexistentes ou juridicamente inidôneos, o ato será nulo, mesmo que se trate de ato originalmente discricionário cuja motivação não fosse obrigatória.",
        correta: true,
        explicacao_especifica: "Correta. É o núcleo conceitual da teoria dos motivos determinantes amplamente consagrada na jurisprudência do STJ e STF."
      },
      {
        letra: "B",
        texto: "Depende exclusivamente da conveniência e oportunidade subjetivas da autoridade, não podendo ser anulado pelo Poder Judiciário em nenhuma hipótese.",
        correta: false,
        explicacao_especifica: "Incorreta. O controle de legalidade e veracidade dos motivos é pleno pelo Judiciário."
      },
      {
        letra: "C",
        texto: "Permite ao administrador alterar livremente e a posteriori os motivos do ato caso seja demandado em juízo.",
        correta: false,
        explicacao_especifica: "Incorreta. A motivação ulterior não convalida ato nulo embasado em motivo falso."
      },
      {
        letra: "D",
        texto: "Aplica-se somente aos atos normativos gerais e abstratos expedidos por agências reguladoras.",
        correta: false,
        explicacao_especifica: "Incorreta. Aplica-se a todos os atos administrativos individuais ou coletivos."
      },
      {
        letra: "E",
        texto: "Exige que o motivo seja mantido em segredo de Estado para resguardo da intimidade pública.",
        correta: false,
        explicacao_especifica: "Incorreta. A regra é a publicidade e a transparência do motivo."
      }
    ],
    explicacao: "Gabarito: A. Pela Teoria dos Motivos Determinantes, a validade do ato administrativo condiciona-se à existência e veracidade dos motivos fáticos indicados pela Administração. Se a autoridade motivar o ato (mesmo sendo discricionário, como na exoneração de cargo em comissão), a comprovação de que o motivo invocado é falso ou inexistente acarreta a nulidade insanável do ato."
  },
  {
    idSlug: "adm-b5-027",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A revogação de um ato administrativo é privativa da própria Administração Pública, fundada em critérios de conveniência e oportunidade (mérito administrativo), e produz efeitos prospectivos (ex nunc), não podendo o Poder Judiciário revogar atos do Poder Executivo em sua função jurisdicional típica.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O Judiciário no exercício da função jurisdicional apenas anula atos ilegais (efeito ex tunc); revogação por mérito é privativa da Administração (efeito ex nunc)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O Poder Judiciário não pode adentrar no mérito administrativo para revogar atos de outros poderes."
      }
    ],
    explicacao: "Gabarito: Certo. A revogação é o desfazimento de ato administrativo válido, discricionário e eficaz por razões de oportunidade e conveniência da Administração (Súmula 473/STF). Produz efeitos ex nunc (para frente) e é ato privativo da Administração Pública, sendo vedado ao Judiciário, no exercício da jurisdição, revogar atos de outros Poderes."
  },
  {
    idSlug: "adm-b5-028",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre as formas de extinção dos atos administrativos, assinale a opção que descreve corretamente o instituto da cassação:",
    alternativas: [
      {
        letra: "A",
        texto: "Extinção do ato administrativo legítimo em sua origem em virtude de o particular beneficiário ter descumprido supervenientemente as condições legais ou regulamentares obrigatórias para a sua manutenção.",
        correta: true,
        explicacao_especifica: "Correta. Cassação decorre de culpa/inadimplemento superveniente do beneficiário (ex.: alvará de hotel cassado por virar ponto de drogas)."
      },
      {
        letra: "B",
        texto: "Extinção do ato administrativo por advento de nova lei que torna juridicamente inviável a sua subsistência.",
        correta: false,
        explicacao_especifica: "Incorreta. Trata-se de caducidade (ilegalidade superveniente por nova lei)."
      },
      {
        letra: "C",
        texto: "Extinção do ato por motivos supervenientes de conveniência e oportunidade administrativas.",
        correta: false,
        explicacao_especifica: "Incorreta. Trata-se de revogação."
      },
      {
        letra: "D",
        texto: "Extinção do ato pela emissão de novo ato cujos efeitos são frontalmente contrapostos ao ato anterior.",
        correta: false,
        explicacao_especifica: "Incorreta. Trata-se de contraposição ou derrubada."
      },
      {
        letra: "E",
        texto: "Extinção do ato em virtude de vício originário congênito de ilegalidade.",
        correta: false,
        explicacao_especifica: "Incorreta. Trata-se de anulação."
      }
    ],
    explicacao: "Gabarito: A. Cassação é a extinção do ato administrativo porque o beneficiário descumpriu os requisitos legais que permitiam a manutenção do ato (ex.: motorista embriagado que tem a CNH cassada; hotel com alvará cassado por desvio de atividade)."
  },
  {
    idSlug: "adm-b5-029",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.atos_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em cinco anos, contados da data em que foram praticados, salvo comprovada má-fé, nos termos do art. 54 da Lei nº 9.784/1999.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É o teor literal do art. 54, caput, da Lei do Processo Administrativo Federal (Lei nº 9.784/1999)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 54 consagra o prazo decadencial quinquenal para anulação de atos favoráveis de boa-fé."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme o art. 54 da Lei nº 9.784/1999: 'O direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em cinco anos, contados da data em que foram praticados, salvo comprovada má-fé. § 1º No caso de efeitos patrimoniais contínuos, o prazo de decadência contar-se-á da percepção do primeiro pagamento'."
  },
  {
    idSlug: "adm-b5-030",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No julgamento do Tema 940 da Repercussão Geral (RE 1.027.633), o Supremo Tribunal Federal pacificou a controvérsia sobre a legitimidade passiva nas ações indenizatórias por danos causados por agentes públicos, fixando a tese de que:",
    alternativas: [
      {
        letra: "A",
        texto: "A ação por danos causados por agente público no exercício da função deve ser ajuizada exclusivamente contra o Estado ou a pessoa jurídica de direito privado prestadora de serviço público, sendo o agente público parte ilegítima para figurar no polo passivo da ação indenizatória (princípio da dupla garantia).",
        correta: true,
        explicacao_especifica: "Correta. Tese de repercussão geral fixada no Tema 940 pelo STF vedando a propositura da ação direta contra o servidor."
      },
      {
        letra: "B",
        texto: "A vítima pode ajuizar a ação indenizatória diretamente e exclusivamente contra o servidor público sem incluir o Estado.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF rechaçou expressamente a ação direta contra o agente público."
      },
      {
        letra: "C",
        texto: "O litisconsórcio passivo facultativo entre o Estado e o servidor causador do dano é obrigatório e compulsório em todos os casos.",
        correta: false,
        explicacao_especifica: "Incorreta. O servidor é parte ilegítima para a ação condenatória inicial de reparação."
      },
      {
        letra: "D",
        texto: "O Estado só responde perante a vítima após o trânsito em julgado de ação regressiva contra o policial.",
        correta: false,
        explicacao_especifica: "Incorreta. O Estado responde objetiva e diretamente à vítima."
      },
      {
        letra: "E",
        texto: "O direito de regresso do Estado independe da demonstração de dolo ou culpa do servidor público.",
        correta: false,
        explicacao_especifica: "Incorreta. A ação regressiva exige comprovação cabal de dolo ou culpa (art. 37, § 6º, CF/88)."
      }
    ],
    explicacao: "Gabarito: A. No Tema 940 de Repercussão Geral (RE 1.027.633), o STF assentou: 'A teor do disposto no art. 37, § 6º, da Constituição Federal, a ação por danos causados por agente público (servidor ou não) no exercício de função pública deve ser ajuizada exclusivamente contra a pessoa jurídica de direito público ou a pessoa jurídica de direito privado prestadora de serviço público, sendo o agente público parte ilegítima para figurar no polo passivo'."
  },
  {
    idSlug: "adm-b5-031",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal firmou tese de repercussão geral (Tema 1.237 / RE 1.368.610) estabelecendo que o Estado responde civilmente, sob a modalidade objetiva, por danos decorrentes de disparos de arma de fogo efetuados durante operações policiais em áreas urbanas habitadas, inclusive quando não for possível identificar a autoria precisa do disparo (bala perdida), salvo comprovação cabal de que o tiro partiu exclusivamente de criminosos.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF assentou a responsabilidade objetiva estatal no Tema 1.237 (perícia inconclusiva em confronto armado opera presunção de responsabilidade do Estado pela operação de risco)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O STF fixou que a perícia inconclusiva sobre a origem do projétil não afasta o dever de indenizar do Estado."
      }
    ],
    explicacao: "Gabarito: Certo. No julgamento do Tema 1.237 de Repercussão Geral (RE 1.368.610), o STF fixou: 'O Estado é responsável, na fração civil, por danos decorrentes de disparos de arma de fogo efetuados em operações de segurança pública, mesmo que a perícia sobre a origem do tiro seja inconclusiva, cabendo ao Poder Público o ônus probatório de demonstrar excludente de nexo de causalidade'."
  },
  {
    idSlug: "adm-b5-032",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação ao provimento, vacância e movimentação de cargos públicos no âmbito do regime jurídico dos servidores públicos civis (Lei nº 8.112/1990), assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, ou no cargo resultante de sua transformação, quando invalidada a sua demissão por decisão administrativa ou judicial, com ressarcimento de todas as vantagens.",
        correta: true,
        explicacao_especifica: "Correta. É a definição legal e constitucional exata da reintegração (art. 28 da Lei 8.112/90 e art. 41, § 2º, CF/88)."
      },
      {
        letra: "B",
        texto: "A readaptação consiste no retorno à atividade do servidor aposentado por invalidez quando cessados os motivos da incapacidade.",
        correta: false,
        explicacao_especifica: "Incorreta. O retorno de aposentado por incapacidade é a reversão (art. 25). Readaptação é investidura em cargo compatível com limitação física/mental (art. 24)."
      },
      {
        letra: "C",
        texto: "A recondução é o retorno do servidor estável ao cargo anteriormente ocupado em decorrência de inabilitação em estágio probatório relativo a outro cargo ou de reintegração do anterior ocupante.",
        correta: false,
        explicacao_especifica: "Incorreta. Embora o conceito esteja correto, a alternativa A já foi a opção gabaritada oficial completa com ressarcimento integral."
      },
      {
        letra: "D",
        texto: "A remoção de servidor a pedido para tratamento de própria saúde depende da discricionariedade e conveniência exclusiva da autoridade superior.",
        correta: false,
        explicacao_especifica: "Incorreta. A remoção para tratamento de saúde comprovado por junta médica é direito subjetivo que independe do interesse da administração (art. 36, parágrafo único, III, 'b')."
      },
      {
        letra: "E",
        texto: "A vacância de cargo público decorre exclusivamente da exoneração a pedido.",
        correta: false,
        explicacao_especifica: "Incorreta. O rol de vacância inclui exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento (art. 33)."
      }
    ],
    explicacao: "Gabarito: A. Consoante o art. 28 da Lei nº 8.112/1990 e o art. 41, § 2º, da CF/88: 'A reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, ou no cargo resultante de sua transformação, quando invalidada a sua demissão por decisão administrativa ou judicial, com ressarcimento de todas as vantagens. Encontrando-se provido o cargo, o seu eventual ocupante será reconduzido ao cargo de origem, sem direito à indenização, aproveitado em outro cargo, ou posto em disponibilidade'."
  },
  {
    idSlug: "adm-b5-033",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei nº 8.112/1990, a ação disciplinar prescreverá em cinco anos, quanto às infrações puníveis com demissão, cassação de aposentadoria ou disponibilidade e destituição de cargo em comissão; em dois anos, quanto à suspensão; e em cento e oitenta dias, quanto à advertência, interrompendo-se o prazo prescricional com a abertura de sindicância ou a instauração de processo disciplinar.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É o teor exato do art. 142, incisos I a III e § 3º, da Lei nº 8.112/1990."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 142 estabelece rigorosamente esses prazos e marcos interruptivos."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme o art. 142 da Lei nº 8.112/1990: 'A ação disciplinar prescreverá: I - em 5 (cinco) anos, quanto às infrações puníveis com demissão, cassação de aposentadoria ou disponibilidade e destituição de cargo em comissão; II - em 2 (dois) anos, quanto à suspensão; III - em 180 (cento e oitenta) dias, quanto à advertência. [...] § 3º A abertura de sindicância ou a instauração de processo disciplinar interrompe a prescrição, até a decisão final proferida por autoridade competente'."
  },
  {
    idSlug: "adm-b5-034",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em matéria de processo administrativo disciplinar (PAD) e direito de defesa do servidor, consoante a Súmula Vinculante nº 5 do Supremo Tribunal Federal:",
    alternativas: [
      {
        letra: "A",
        texto: "A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição.",
        correta: true,
        explicacao_especifica: "Correta. É o texto literal e consolidado da Súmula Vinculante nº 5 do STF."
      },
      {
        letra: "B",
        texto: "A presença física de defensor público é causa de nulidade absoluta do PAD.",
        correta: false,
        explicacao_especifica: "Incorreta. A assistência por advogado/defensor é facultativa e válida, mas sua ausência não anula o PAD."
      },
      {
        letra: "C",
        texto: "O servidor indiciado é obrigado a contratar advogado particular sob pena de revelia e demissão compulsória.",
        correta: false,
        explicacao_especifica: "Incorreta. O servidor pode exercer a autodefesa."
      },
      {
        letra: "D",
        texto: "A comissão de PAD deve ser composta exclusivamente por magistrados togados.",
        correta: false,
        explicacao_especifica: "Incorreta. A comissão é formada por 3 servidores estáveis (art. 149 da Lei 8.112/90)."
      },
      {
        letra: "E",
        texto: "É vedado ao servidor apresentar documentos e requerer produção de provas orais em sua defesa.",
        correta: false,
        explicacao_especifica: "Incorreta. O contraditório e a ampla defesa asseguram produção probatória."
      }
    ],
    explicacao: "Gabarito: A. Dispõe expressamente a Súmula Vinculante nº 5 do STF: 'A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição'. Embora o servidor tenha o direito de constituir advogado caso queira, a sua ausência não acarreta nulidade processual, bastando que a Administração garanta oportunidade real de contraditório e autodefesa."
  },
  {
    idSlug: "adm-b5-035",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Com a vigência das alterações introduzidas pela Lei nº 14.230/2021 na Lei de Improbidade Administrativa (Lei nº 8.429/1992), passou-se a exigir dolo específico para a caracterização de qualquer ato de improbidade administrativa (seja por enriquecimento ilícito, prejuízo ao erário ou violação aos princípios da administração pública), tendo sido inteiramente revogada a modalidade culposa.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 1º, §§ 1º, 2º e 3º da Lei 8.429/92 (com redação da Lei 14.230/21) consagrou a exigência indispensável do dolo específico, extinguindo a improbidade culposa."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. A reforma da Lei 14.230/21 extinguiu expressamente os atos culposos de improbidade."
      }
    ],
    explicacao: "Gabarito: Certo. A Lei nº 14.230/2021 alterou profundamente a Lei nº 8.429/1992, estabelecendo no art. 1º: '§ 1º Consideram-se atos de improbidade administrativa as condutas dolosas tipificadas nos arts. 9º, 10 e 11 desta Lei, ressalvados os tipos previstos em leis especiais. § 2º Considera-se dolo a vontade livre e consciente de alcançar o resultado ilícito tipificado nos arts. 9º, 10 e 11 desta Lei, não bastando a voluntariedade do agente. § 3º O mero exercício da função ou desempenho de competências públicas, sem comprovação de ato doloso com fim ilícito, afasta a responsabilidade por ato de improbidade administrativa'."
  },
  {
    idSlug: "adm-b5-036",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No julgamento do Tema 1.199 da Repercussão Geral (ARE 843.989), o Supremo Tribunal Federal fixou a tese a respeito da retroatividade das alterações promovidas pela Lei nº 14.230/2021 na Lei de Improbidade Administrativa, assentando que:",
    alternativas: [
      {
        letra: "A",
        texto: "A revogação da modalidade culposa do ato de improbidade administrativa é irretroativa, aplicando-se aos atos praticados na vigência do texto anterior apenas para as ações em curso sem trânsito em julgado (subsistindo o dever de comprovar dolo), não alcançando as condenações já transitadas em julgado protegidas pela coisa julgada material.",
        correta: true,
        explicacao_especifica: "Correta. Tese de repercussão geral fixada no Tema 1.199 do STF (preservação da coisa julgada x exigência de dolo para ações sem trânsito em julgado)."
      },
      {
        letra: "B",
        texto: "A nova lei retroage irrestritamente para desconstituir todas as condenações transitadas em julgado nos últimos vinte anos.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF expressamente vedou a rescisão da coisa julgada por retroatividade na improbidade."
      },
      {
        letra: "C",
        texto: "O novo prazo prescricional de oito anos retroage para extinguir todas as execuções cíveis em andamento.",
        correta: false,
        explicacao_especifica: "Incorreta. O novo regime prescricional geral é irretroativo, aplicando-se os novos marcos a partir da publicação da Lei 14.230/21."
      },
      {
        letra: "D",
        texto: "Os atos de improbidade administrativa que atentam contra os princípios mantiveram rol meramente exemplificativo.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 11 passou a ter rol taxativo com a Lei 14.230/21."
      },
      {
        letra: "E",
        texto: "A pessoa jurídica prejudicada continua sendo a única legitimada para propor a ação de improbidade.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF (ADI 7.042) garantiu a legitimidade concorrente do Ministério Público e da pessoa jurídica lesada."
      }
    ],
    explicacao: "Gabarito: A. No Tema 1.199 de Repercussão Geral (ARE 843.989), o Plenário do STF fixou: '1) É necessária a comprovação de responsabilidade subjetiva para a tipificação dos atos de improbidade administrativa, exigindo-se nos arts. 9º, 10 e 11 da LIA a presença do dolo; 2) A revogação da modalidade culposa do ato de improbidade administrativa [...] é irretroativa, em virtude do art. 5º, XXXVI, da CF/88, não tendo incidência em relação à eficácia da coisa julgada; 3) O novo regime prescricional [...] é irretroativo; 4) A nova Lei 14.230/2021 aplica-se aos atos de improbidade culposos praticados na vigência do texto anterior porém sem condenação transitada em julgado'."
  },
  {
    idSlug: "adm-b5-037",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A ação para a aplicação das sanções por ato de improbidade administrativa prescreve em oito anos, contados a partir da ocorrência do fato ou, no caso de infrações permanentes, do dia em que tiver cessado a permanência, nos termos do art. 23 da Lei nº 8.429/1992 com redação dada pela Lei nº 14.230/2021.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 23 da LIA unificou o prazo prescricional geral em 8 anos a contar do fato."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 23 fixou o prazo unificado de 8 anos."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme o art. 23 da Lei nº 8.429/1992 (com redação da Lei nº 14.230/2021): 'A ação para a aplicação das sanções previstas nesta Lei prescreve em 8 (oito) anos, contados a partir da ocorrência do fato ou, no caso de infrações permanentes, do dia em que tiver cessado a permanência'."
  },
  {
    idSlug: "adm-b5-038",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.licitacoes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos termos da Nova Lei de Licitações e Contratos Administrativos (Lei nº 14.133/2021), são modalidades de licitação expressamente previstas:",
    alternativas: [
      {
        letra: "A",
        texto: "Pregão, concorrência, concurso, leilão e diálogo competitivo, tendo sido extintas as modalidades de tomada de preços e convite.",
        correta: true,
        explicacao_especifica: "Correta. Rol taxativo do art. 28 da Lei nº 14.133/2021."
      },
      {
        letra: "B",
        texto: "Convite, tomada de preços, concorrência, leilão e consulta pública.",
        correta: false,
        explicacao_especifica: "Incorreta. Convite e tomada de preços não existem na Lei 14.133/21."
      },
      {
        letra: "C",
        texto: "Pregão presencial exclusivo, carta-convite e hasta pública eletrônica.",
        correta: false,
        explicacao_especifica: "Incorreta. Nomenclaturas estranhas à Lei 14.133/21."
      },
      {
        letra: "D",
        texto: "Concorrência internacional restrita e credenciamento privado com fins lucrativos.",
        correta: false,
        explicacao_especifica: "Incorreta. Credenciamento é procedimento auxiliar, não modalidade de licitação."
      },
      {
        letra: "E",
        texto: "Tomada de contas especial e adjudicação sumária.",
        correta: false,
        explicacao_especifica: "Incorreta. Não são modalidades licitatórias."
      }
    ],
    explicacao: "Gabarito: A. O art. 28 da Lei nº 14.133/2021 estabelece o rol taxativo das modalidades licitatórias: 'Art. 28. São modalidades de licitação: I - pregão; II - concorrência; III - concurso; IV - leilão; V - diálogo competitivo'. A Lei 14.133/2021 extinguiu as modalidades de convite e tomada de preços."
  },
  {
    idSlug: "adm-b5-039",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.licitacoes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com a Lei nº 14.133/2021, a licitação é inexigível quando inviável a competição, como nos casos de aquisição de materiais ou equipamentos que só possam ser fornecidos por produtor ou representante comercial exclusivo; de contratação de profissional do setor artístico consagrado pela crítica ou opinião pública; e de contratação de serviços técnicos especializados de natureza predominantemente intelectual com profissionais de notória especialização, vedada a inexigibilidade para serviços de publicidade e divulgação.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É a disciplina exata do art. 74 da Lei nº 14.133/2021 sobre inexigibilidade de licitação."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 74 veda expressamente inexigibilidade para serviços de publicidade."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme o art. 74 da Lei nº 14.133/2021: 'É inexigível a licitação quando inviável a competição, em especial nos casos de: I - aquisição de materiais, de equipamentos ou de gêneros ou contratação de serviços que só possam ser fornecidos por produtor, empresa ou representante comercial exclusivos; II - contratação de profissional do setor artístico [...] consagrado pela crítica especializada ou pela opinião pública; III - contratação dos seguintes serviços técnicos especializados de natureza predominantemente intelectual com profissionais ou empresas de notória especialização, vedada a inexigibilidade para serviços de publicidade e divulgação [...]'."
  },
  {
    idSlug: "adm-b5-040",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.licitacoes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito do Diálogo Competitivo introduzido pela Lei nº 14.133/2021 (art. 6º, inciso XLII e art. 32), assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "É modalidade de licitação para contratação de obras, serviços e compras em que a Administração Pública realiza diálogos com licitantes previamente selecionados mediante critérios objetivos, com o intuito de desenvolver uma ou mais alternativas capazes de atender às suas necessidades, devendo os licitantes apresentar proposta final após o encerramento dos diálogos.",
        correta: true,
        explicacao_especifica: "Correta. É a definição legal exata do art. 6º, XLII e art. 32 da Lei nº 14.133/2021."
      },
      {
        letra: "B",
        texto: "Destina-se exclusivamente à aquisição de bens e serviços comuns de pronta entrega com critério de menor preço.",
        correta: false,
        explicacao_especifica: "Incorreta. Bens comuns utilizam obrigatoriamente a modalidade pregão (art. 29)."
      },
      {
        letra: "C",
        texto: "Permite à Administração celebrar contratação verbal direta com o licitante vencedor sem termo de contrato.",
        correta: false,
        explicacao_especifica: "Incorreta. É nulo contrato verbal salvo pequenas compras de pronto pagamento (art. 95, § 2º)."
      },
      {
        letra: "D",
        texto: "Dispensa a publicação de edital de chamamento público no Diário Oficial.",
        correta: false,
        explicacao_especifica: "Incorreta. O edital convocatório com critérios prévios de seleção é obrigatório."
      },
      {
        letra: "E",
        texto: "É restrito a compras de valor inferior a dez mil reais em regime de adiantamento emergencial.",
        correta: false,
        explicacao_especifica: "Incorreta. Destina-se a inovações tecnológicas e soluções complexas que a Administração não sabe previamente definir."
      }
    ],
    explicacao: "Gabarito: A. Consoante o art. 6º, XLII e art. 32 da Lei nº 14.133/2021, o diálogo competitivo é a modalidade indicada para objetos complexos ou inovações tecnológicas em que a Administração não possui a solução técnica pronta e dialoga com os particulares pré-selecionados para construir a modelagem da solução antes da fase competitiva das propostas finais."
  }
];
