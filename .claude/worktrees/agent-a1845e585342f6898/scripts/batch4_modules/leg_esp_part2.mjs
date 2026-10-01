import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.legislacao_especial;
const aLegEspecial = TAXONOMIA.assuntos.leg_especial_policial;

export const legEspPart2 = [
  // 21
  {
    idSlug: "leg-l4-21",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Nos termos da Lei nº 13.869/2019 (Lei de Abuso de Autoridade), a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade, exigindo-se para a caracterização de qualquer de seus crimes a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal.",
    explicacao: "GABARITO: CERTO. O art. 1º, § 1º e § 2º, da Lei nº 13.869/2019 estabelece expressamente o dolo específico ('com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal') e veda o crime de hermenêutica ('A divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade').",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 22
  {
    idSlug: "leg-l4-22",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "De acordo com a Lei de Abuso de Autoridade (Lei nº 13.869/2019), são efeitos da condenação penal secundários e NÃO automáticos:",
    explicacao: "GABARITO: Letra C. Conforme o art. 4º da Lei nº 13.869/2019, os efeitos da condenação previstos nos incisos II (inabilitação para exercício de cargo por 1 a 5 anos) e III (perda do cargo/mandato/função pública) são condicionados à ocorrência de reincidência em crime de abuso de autoridade e NÃO são automáticos, devendo ser expressamente motivados na sentença.",
    alternativas: [
      { letra: "A", texto: "A perda automática e imediata do cargo público independentemente de reincidência.", correta: false },
      { letra: "B", texto: "A cassação dos direitos políticos em caráter perpétuo.", correta: false },
      { letra: "C", texto: "A inabilitação para o exercício de cargo público pelo período de 1 a 5 anos e a perda do cargo, condicionados à reincidência e não automáticos.", correta: true },
      { letra: "D", texto: "A obrigação civil de não indenizar o dano causado à vítima.", correta: false },
      { letra: "E", texto: "A demissão a bem do serviço público sem necessidade de processo judicial transitado em julgado.", correta: false }
    ]
  },
  // 23
  {
    idSlug: "leg-l4-23",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Adentrar ou permanecer, clandestina ou astuciosamente, ou contra a vontade expressa ou tácita do ocupante, em imóvel alheio ou suas dependências, fora das hipóteses autorizadas em lei, configura crime de abuso de autoridade (art. 22 da Lei nº 13.869/2019), incorrendo na mesma pena quem cumpre mandado de busca e apreensão domiciliar após as 21h ou antes das 5h.",
    explicacao: "GABARITO: CERTO. O art. 22, § 1º, III, da Lei nº 13.869/2019 pune expressamente com detenção de 1 a 4 anos e multa quem 'cumpre mandado de busca e apreensão domiciliar após as 21 (vinte e uma) horas ou antes das 5 (cinco) horas', delimitando o conceito legal de período noturno para cumprimento de mandados.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 24
  {
    idSlug: "leg-l4-24",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Submeter o preso, internado ou apreendido ao uso de algemas ou de qualquer outro objeto de constrangimento físico, havendo resistência à prisão, fundada suspeita de fuga ou perigo à integridade física própria ou alheia devidamente justificados por escrito:",
    explicacao: "GABARITO: Letra B. Conforme o art. 13, II, da Lei nº 13.869/2019 e a Súmula Vinculante 11 do STF, o uso de algemas é lícito e justificado nas hipóteses de resistência, perigo à integridade e fundado receio de fuga devidamente motivadas por escrito, não caracterizando crime de abuso de autoridade.",
    alternativas: [
      { letra: "A", texto: "Configura invariavelmente crime inafiançável de abuso de autoridade.", correta: false },
      { letra: "B", texto: "Constitui conduta lícita e legítima respaldada pela Súmula Vinculante 11 do STF e pela Lei nº 13.869/2019.", correta: true },
      { letra: "C", texto: "Equipara-se ao crime de tortura qualificada pela lesão corporal grave.", correta: false },
      { letra: "D", texto: "Gera a anulação automática de todos os atos do inquérito policial.", correta: false },
      { letra: "E", texto: "Depende de autorização expressa do juiz de custódia no momento exato da abordagem.", correta: false }
    ]
  },
  // 25
  {
    idSlug: "leg-l4-25",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Os crimes previstos na Lei de Abuso de Autoridade são todos de ação penal pública incondicionada, admitindo-se, contudo, a ação penal privada subsidiária da pública se a denúncia não for intentada no prazo legal.",
    explicacao: "GABARITO: CERTO. O art. 3º, caput e § 1º, da Lei nº 13.869/2019 prevê: 'Os crimes previstos nesta Lei são de ação penal pública incondicionada. § 1º Será admitida ação privada se a ação pública não for intentada no prazo legal, cabendo ao Ministério Público aditar a queixa, repudiá-la e oferecer denúncia substitutiva...'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 26
  {
    idSlug: "leg-l4-26",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No âmbito da Lei Maria da Penha (Lei nº 11.340/2006), a conduta que cause dano emocional e diminuição da autoestima da mulher, ou que prejudique e perturbe seu pleno desenvolvimento, ou que vise a degradar ou a controlar suas ações, comportamentos, crenças e decisões, tipifica a modalidade de violência:",
    explicacao: "GABARITO: Letra B. O art. 7º, II, da Lei nº 11.340/2006 conceitua a violência psicológica como qualquer conduta que lhe cause dano emocional e diminuição da autoestima ou que prejudique e perturbe o pleno desenvolvimento ou que vise a degradar ou a controlar suas ações, comportamentos, crenças e decisões.",
    alternativas: [
      { letra: "A", texto: "Moral.", correta: false },
      { letra: "B", texto: "Psicológica.", correta: true },
      { letra: "C", texto: "Patrimonial.", correta: false },
      { letra: "D", texto: "Física indireta.", correta: false },
      { letra: "E", texto: "Sexual institucional.", correta: false }
    ]
  },
  // 27
  {
    idSlug: "leg-l4-27",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de descumprimento de medidas protetivas de urgência (art. 24-A da Lei nº 11.340/2006) é punido com pena de detenção de 3 meses a 2 anos, sendo vedada a concessão de fiança pela autoridade policial em sede de plantão policial.",
    explicacao: "GABARITO: CERTO. O art. 24-A, § 2º, da Lei nº 11.340/2006 veda expressamente a concessão de fiança pelo delegado de polícia: 'Na hipótese de prisão em flagrante, apenas a autoridade judicial poderá conceder fiança'. Portanto, mesmo a pena máxima sendo de 2 anos, a fiança policial é expressamente proibida.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 28
  {
    idSlug: "leg-l4-28",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Verificada a existência de risco atual ou iminente à vida ou à integridade física da mulher em situação de violência doméstica e familiar, ou de seus dependentes, e NÃO sendo o Município sede de comarca:",
    explicacao: "GABARITO: Letra A. O art. 12-C da Lei nº 11.340/2006 estabelece que o agressor será imediatamente afastado do lar: I - pela autoridade judicial; II - pelo delegado de polícia, quando o Município não for sede de comarca; ou III - pelo policial, quando o Município não for sede de comarca e não houver delegado disponível no momento do atendimento. Em 24 horas o juiz deve ser comunicado.",
    alternativas: [
      { letra: "A", texto: "O agressor poderá ser imediatamente afastado do lar pelo delegado de polícia ou pelo policial se não houver delegado disponível, com comunicação ao juiz em até 24 horas.", correta: true },
      { letra: "B", texto: "A vítima deve aguardar necessariamente audiência prévia de justificação na capital do Estado.", correta: false },
      { letra: "C", texto: "O policial militar pode impor pena de prisão definitiva ao agressor sem chancela judicial.", correta: false },
      { letra: "D", texto: "A medida protetiva concedida pela autoridade policial perde a eficácia após 2 horas se não ratificada pelo promotor de justiça.", correta: false },
      { letra: "E", texto: "Apenas o juiz togado pode determinar qualquer afastamento, sendo nulo o ato praticado por autoridade policial.", correta: false }
    ]
  },
  // 29
  {
    idSlug: "leg-l4-29",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil AL",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Aos crimes praticados com violência doméstica e familiar contra a mulher, independentemente da pena prevista, não se aplicam os institutos despenalizadores da Lei nº 9.099/1995, como a composição civil dos danos e a transação penal.",
    explicacao: "GABARITO: CERTO. O art. 41 da Lei nº 11.340/2006 determina expressamente: 'Aos crimes praticados com violência doméstica e familiar contra a mulher, independentemente da pena prevista, não se aplicam os dispositivos da Lei nº 9.099, de 26 de setembro de 1995'. A matéria também é objeto da Súmula 536 do STJ.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 30
  {
    idSlug: "leg-l4-30",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos da jurisprudência sumulada do Superior Tribunal de Justiça e do entendimento do STF, a ação penal nos crimes de lesão corporal leve praticados contra a mulher no âmbito doméstico e familiar é:",
    explicacao: "GABARITO: Letra B. Conforme a Súmula 542 do STJ e o julgamento da ADI 4424/DF pelo STF, a ação penal relativa ao crime de lesão corporal resultante de violência doméstica contra a mulher é pública incondicionada, não dependendo de representação da vítima e sendo inaplicável a retratação.",
    alternativas: [
      { letra: "A", texto: "Pública condicionada à representação irretratável.", correta: false },
      { letra: "B", texto: "Pública incondicionada.", correta: true },
      { letra: "C", texto: "Privada personalíssima.", correta: false },
      { letra: "D", texto: "Privada subsidiária exclusiva do Ministério Público.", correta: false },
      { letra: "E", texto: "Condicionada à prévia tentativa de conciliação familiar.", correta: false }
    ]
  },
  // 31
  {
    idSlug: "leg-l4-31",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Divulgar gravação ou trecho de gravação sem relação com a prova que se pretenda produzir, expondo a intimidade ou a vida privada ou ferindo a honra ou a imagem do investigado ou acusado, tipifica crime de abuso de autoridade punido com detenção de 1 a 4 anos e multa.",
    explicacao: "GABARITO: CERTO. O art. 28 da Lei nº 13.869/2019 tipifica expressamente: 'Divulgar gravação ou trecho de gravação sem relação com a prova que se pretenda produzir, expondo a intimidade ou a vida privada ou ferindo a honra ou a imagem do investigado ou acusado: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 32
  {
    idSlug: "leg-l4-32",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Configura crime de abuso de autoridade (art. 30 da Lei nº 13.869/2019) a conduta de:",
    explicacao: "GABARITO: Letra D. O art. 30 da Lei nº 13.869/2019 tipifica a conduta de 'dar início ou proceder à persecução penal, civil ou administrativa sem justa causa fundamentada ou contra quem sabe inocente: Pena - detenção, de 1 (um) a 4 (quatro) anos, e multa'.",
    alternativas: [
      { letra: "A", texto: "Instaurar inquérito policial respaldado em notícia-crime formal com indícios mínimos de autoria.", correta: false },
      { letra: "B", texto: "Requisitar perícia criminal urgente em local de homicídio consumado.", correta: false },
      { letra: "C", texto: "Representar pela prisão preventiva com base em fundada suspeita de fuga internacional.", correta: false },
      { letra: "D", texto: "Dar início ou proceder à persecução penal, civil ou administrativa sem justa causa fundamentada ou contra quem sabe inocente.", correta: true },
      { letra: "E", texto: "Ouvir testemunha presencial devidamente intimada em sede de inquérito policial.", correta: false }
    ]
  },
  // 33
  {
    idSlug: "leg-l4-33",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A retenção, subtração ou destruição parcial ou total de objetos, instrumentos de trabalho ou documentos pessoais da mulher, no contexto de violência doméstica e familiar, configura modalidade de violência patrimonial prevista na Lei Maria da Penha.",
    explicacao: "GABARITO: CERTO. O art. 7º, IV, da Lei nº 11.340/2006 define como violência patrimonial 'a conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos, incluindo os destinados a satisfazer suas necessidades'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 34
  {
    idSlug: "leg-l4-34",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O princípio da insignificância (bagatela):",
    explicacao: "GABARITO: Letra C. A Súmula 589 do STJ enuncia: 'É inaplicável o princípio da insignificância aos crimes ou contravenções penais praticados com violência ou grave ameaça contra a mulher, no âmbito das relações domésticas'. A proteção da dignidade e integridade física e psicológica da mulher afasta a aplicação da bagatela.",
    alternativas: [
      { letra: "A", texto: "Aplica-se amplamente a todos os crimes de violência doméstica contra a mulher quando o dano patrimonial for inferior a um salário mínimo.", correta: false },
      { letra: "B", texto: "Pode ser concedido de ofício pela autoridade policial em sede de lavratura de flagrante.", correta: false },
      { letra: "C", texto: "É sumuladamente inaplicável aos crimes ou contravenções penais praticados com violência ou grave ameaça contra a mulher no âmbito doméstico (Súmula 589/STJ).", correta: true },
      { letra: "D", texto: "Substitui a medida protetiva de urgência fixada pelo juiz.", correta: false },
      { letra: "E", texto: "Autoriza a retratação da representação após o recebimento da denúncia.", correta: false }
    ]
  },
  // 35
  {
    idSlug: "leg-l4-35",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "As sanções civis, administrativas e penais decorrentes dos crimes de abuso de autoridade são independentes entre si, mas a sentença criminal absolutória que reconhecer categoricamente a inexistência do fato ou a negativa de autoria faz coisa julgada no âmbito cível e administrativo-disciplinar.",
    explicacao: "GABARITO: CERTO. O art. 6º, caput e parágrafo único, da Lei nº 13.869/2019 estabelece a independência das esferas, ressalvando que 'faz coisa julgada em âmbito cível, assim como no administrativo-disciplinar, a sentença penal que reconhecer ter sido o ato praticado em estado de necessidade, em legítima defesa, em estrito cumprimento de dever legal ou no exercício regular de direito', bem como nas hipóteses de inexistência material do fato ou negativa de autoria.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 36
  {
    idSlug: "leg-l4-36",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A concessão de medidas protetivas de urgência na Lei Maria da Penha (art. 19 da Lei nº 11.340/2006, com alterações da Lei nº 14.550/2023):",
    explicacao: "GABARITO: Letra A. A Lei nº 14.550/2023 inseriu os §§ 4º a 6º no art. 19 da Lei Maria da Penha, determinando expressamente que as medidas protetivas de urgência serão concedidas independentemente da tipificação penal da violência, do ajuizamento de ação penal ou cível, da existência de inquérito policial ou do registro de boletim de ocorrência, vigorando enquanto persistir o risco.",
    alternativas: [
      { letra: "A", texto: "Será concedida independentemente da tipificação penal da violência, do ajuizamento de ação penal ou cível, da existência de inquérito policial ou do registro de boletim de ocorrência.", correta: true },
      { letra: "B", texto: "Exige obrigatoriamente a juntada prévia de laudo de lesões corporais com eficácia pericial definitiva.", correta: false },
      { letra: "C", texto: "Fica condicionada à comprovação de coabitação sob o mesmo teto no momento do requerimento.", correta: false },
      { letra: "D", texto: "Tem prazo de validade improrrogável de no máximo 30 dias em qualquer hipótese.", correta: false },
      { letra: "E", texto: "Depende de caução fidejussória prestada pela ofendida em juízo.", correta: false }
    ]
  },
  // 37
  {
    idSlug: "leg-l4-37",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Deixar de comunicar, imediatamente, a execução de prisão a qualquer autoridade judiciária, ao Ministério Público e à família do preso ou à pessoa por ele indicada constitui crime de abuso de autoridade apenado com detenção de 6 meses a 2 anos e multa.",
    explicacao: "GABARITO: CERTO. O art. 12, caput e parágrafo único, I, da Lei nº 13.869/2019 tipifica como abuso de autoridade a conduta de 'deixar injustificadamente de comunicar prisão em flagrante à autoridade judiciária no prazo legal', incorrendo na mesma pena quem 'deixa de comunicar, imediatamente, a execução de prisão temporária ou preventiva à autoridade judiciária que a decretou' ou à família do preso.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 38
  {
    idSlug: "leg-l4-38",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No âmbito da Lei nº 13.869/2019, o art. 27 tipifica o crime de requisição ou instauração indevida de procedimento investigatório. Sobre esse tipo penal, é correto afirmar:",
    explicacao: "GABARITO: Letra B. O art. 27 da Lei nº 13.869/2019 pune a conduta de 'requisitar a instauração ou instaurar procedimento investigatório de infração penal ou administrativa, em desfavor de alguém, à falta de qualquer indício da prática de crime, de ilícito funcional ou de infração administrativa', ressalvando o parágrafo único que não há crime quando se tratar de mera averiguação sumária de denúncia anônima.",
    alternativas: [
      { letra: "A", texto: "Pune até mesmo a instauração de sindicância administrativa quando houver fundada suspeita de corrupção funcional.", correta: false },
      { letra: "B", texto: "Pune requisitar a instauração ou instaurar procedimento investigatório à falta de qualquer indício da prática de infração, ressalvada a averiguação preliminar sumária de notícia anônima.", correta: true },
      { letra: "C", texto: "Admite modalidade culposa quando o delegado agir com imperícia na análise dos fatos.", correta: false },
      { letra: "D", texto: "Aplica-se exclusivamente a magistrados de tribunais superiores.", correta: false },
      { letra: "E", texto: "Isenta de pena o agente público que confessar o intuito de perseguição política.", correta: false }
    ]
  },
  // 39
  {
    idSlug: "leg-l4-39",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A renúncia ou retratação à representação da ofendida nos crimes de ação penal pública condicionada sob o rito da Lei Maria da Penha somente será admitida perante o juiz, em audiência especialmente designada com tal finalidade, antes do recebimento da denúncia e ouvido o Ministério Público.",
    explicacao: "GABARITO: CERTO. O art. 16 da Lei nº 11.340/2006 determina expressamente: 'Nas ações penais públicas condicionadas à representação da ofendida de que trata esta Lei, só será admitida a renúncia à representação perante o juiz, em audiência especialmente designada com tal finalidade, antes do recebimento da denúncia e ouvido o Ministério Público'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 40
  {
    idSlug: "leg-l4-40",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A prática de calúnia, difamação ou injúria contra a mulher, no contexto de violência doméstica e familiar, configura modalidade de violência:",
    explicacao: "GABARITO: Letra E. O art. 7º, V, da Lei nº 11.340/2006 define como violência moral 'qualquer conduta que configure calúnia, difamação ou injúria'.",
    alternativas: [
      { letra: "A", texto: "Física qualificada.", correta: false },
      { letra: "B", texto: "Patrimonial estrutural.", correta: false },
      { letra: "C", texto: "Institucional simbólica.", correta: false },
      { letra: "D", texto: "Econômica residual.", correta: false },
      { letra: "E", texto: "Moral.", correta: true }
    ]
  }
];
