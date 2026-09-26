import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.processual_penal;
const aInquerito = TAXONOMIA.assuntos.inquerito_policial;
const aAcaoPenal = TAXONOMIA.assuntos.acao_penal;

export const dppPart1 = [
  // 01
  {
    idSlug: "dpp-l4-01",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O inquérito policial é um procedimento administrativo informativo, de caráter inquisitorial, instaurado pela polícia judiciária com a finalidade de apurar a materialidade e os indícios de autoria de infração penal, sendo suas peças hábeis para subsidiar medidas cautelares e a propositura da ação penal.",
    explicacao: "GABARITO: CERTO. O inquérito policial constitui procedimento administrativo pré-processual, inquisitivo, escrito, sigiloso, oficioso, oficial e indisponível, que tem como objetivo reunir elementos de informação acerca da materialidade e autoria do delito (justa causa) para o titular da ação penal (MP ou ofendido).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 02
  {
    idSlug: "dpp-l4-02",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No tocante ao arquivamento do inquérito policial e à disciplina introduzida pelo Pacote Anticrime (art. 28 do CPP) com as modulações do STF nas ADIs 6.298, 6.299, 6.300 e 6.305, assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra B. O STF, ao julgar as ADIs 6.298/DF e correlatas em agosto de 2023, validou o modelo acusatório de arquivamento diretamente pelo Ministério Público (art. 28 do CPP), determinando prazo de transição de 36 meses e fixando que a homologação da promoção de arquivamento dá-se na instância de revisão ministerial, cabendo à vítima insatisfeita recorrer à referida instância de revisão ministerial no prazo de 30 dias.",
    alternativas: [
      { letra: "A", texto: "O STF declarou inconstitucional por completo a alteração do art. 28 do CPP, restabelecendo o controle judicial obrigatório na primeira instância.", correta: false },
      { letra: "B", texto: "O STF validou o arquivamento promovido no âmbito do Ministério Público, competindo ao órgão de revisão ministerial a apreciação de eventual recurso interposto pela vítima no prazo de 30 dias.", correta: true },
      { letra: "C", texto: "O delegado de polícia pode promover diretamente o arquivamento do inquérito caso verifique a atipicidade manifesta da conduta.", correta: false },
      { letra: "D", texto: "A vítima não possui legitimidade para interpor recurso interno ministerial contra o despacho de arquivamento.", correta: false },
      { letra: "E", texto: "O arquivamento por falta de provas gera coisa julgada material irretocável, impedindo novas investigações mesmo com provas substancialmente inéditas.", correta: false }
    ]
  },
  // 03
  {
    idSlug: "dpp-l4-03",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A autoridade policial não poderá mandar arquivar autos de inquérito policial, por expressa vedação do art. 17 do Código de Processo Penal, consubstanciando o princípio da indisponibilidade do inquérito.",
    explicacao: "GABARITO: CERTO. Dispõe o art. 17 do CPP: 'A autoridade policial não poderá mandar arquivar autos de inquérito'. Este comando consagra o princípio da indisponibilidade do inquérito policial para a autoridade policial que o preside.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 04
  {
    idSlug: "dpp-l4-04",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Conforme dispõe o art. 10 do Código de Processo Penal, no procedimento ordinário da Justiça Estadual, o inquérito policial deverá terminar no prazo de:",
    explicacao: "GABARITO: Letra A. O art. 10 do CPP estabelece que o inquérito deverá terminar no prazo de 10 dias se o indiciado tiver sido preso em flagrante ou estiver preso preventivamente, contado o prazo a partir do dia em que se executar a ordem de prisão; e no prazo de 30 dias quando estiver solto, mediante fiança ou sem ela.",
    alternativas: [
      { letra: "A", texto: "10 dias se o indiciado estiver preso e 30 dias se estiver solto.", correta: true },
      { letra: "B", texto: "15 dias se o indiciado estiver preso e 30 dias se estiver solto.", correta: false },
      { letra: "C", texto: "5 dias se o indiciado estiver preso e 15 dias se estiver solto.", correta: false },
      { letra: "D", texto: "30 dias em qualquer hipótese, improrrogáveis para indiciado preso.", correta: false },
      { letra: "E", texto: "20 dias se o indiciado estiver preso e 60 dias se estiver solto.", correta: false }
    ]
  },
  // 05
  {
    idSlug: "dpp-l4-05",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Nos inquéritos policiais federais presididos pela Polícia Federal (Lei nº 5.010/1966), o prazo para conclusão do inquérito com investigado preso é de 15 (quinze) dias, prorrogável por igual período por decisão judicial fundamentada a requerimento da autoridade policial.",
    explicacao: "GABARITO: CERTO. O art. 66 da Lei nº 5.010/1966 estabelece que o prazo para conclusão do inquérito policial no âmbito da Justiça Federal é de 15 dias quando o indiciado estiver preso, prorrogável por mais 15 dias por determinação judicial, e de 30 dias quando solto.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 06
  {
    idSlug: "dpp-l4-06",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito do Acordo de Não Persecução Penal (ANPP - art. 28-A do CPP), assinale a opção correta:",
    explicacao: "GABARITO: Letra C. O art. 28-A do CPP autoriza o ANPP nos casos de infração penal sem violência ou grave ameaça à pessoa, com pena mínima cominada inferior a 4 anos, desde que o investigado tenha confessado formal e circunstancialmente a prática da infração penal e a medida se mostre necessária e suficiente para reprovação e prevenção do crime. O § 2º veda o ANPP se for cabível transação penal da Lei 9.099/95, se o investigado for reincidente ou habitual, se tiver sido beneficiado nos últimos 5 anos ou em crimes de violência doméstica e familiar contra a mulher.",
    alternativas: [
      { letra: "A", texto: "É cabível mesmo para crimes cometidos com violência ou grave ameaça à pessoa, desde que a pena máxima não ultrapasse 4 anos.", correta: false },
      { letra: "B", texto: "Pode ser celebrado independentemente de confissão formal e circunstancial do investigado.", correta: false },
      { letra: "C", texto: "Aplica-se a infrações sem violência ou grave ameaça com pena mínima inferior a 4 anos, mediante confissão formal e circunstanciada.", correta: true },
      { letra: "D", texto: "O descumprimento injustificado das condições acarreta a imediata condenação do agente à pena máxima prevista em lei.", correta: false },
      { letra: "E", texto: "É admitido plenamente nos crimes praticados no âmbito de violência doméstica e familiar contra a mulher.", correta: false }
    ]
  },
  // 07
  {
    idSlug: "dpp-l4-07",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "É direito do defensor, no interesse do representado, ter amplo acesso aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa, ressalvadas diligências em andamento cuja publicidade possa comprometer sua eficácia.",
    explicacao: "GABARITO: CERTO. Trata-se da Súmula Vinculante 14 do STF: 'É direito do defensor, no interesse do representado, ter amplo acesso aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa'. Diligências sigilosas ainda em andamento não documentadas podem ter acesso temporariamente postergado.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 08
  {
    idSlug: "dpp-l4-08",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Nos crimes de ação pública incondicionada, o inquérito policial NÃO pode ser iniciado por:",
    explicacao: "GABARITO: Letra D. Conforme o art. 5º, § 4º e § 5º, do CPP, a representação do ofendido e o requerimento de quem tenha qualidade para intentar ação privada aplicam-se, respectivamente, aos crimes de ação pública condicionada e de ação privada. Na ação pública incondicionada, o inquérito inicia-se de ofício (portaria), por requisição judicial ou do MP, ou por notícia de qualquer do povo (delatio criminis).",
    alternativas: [
      { letra: "A", texto: "De ofício, pela autoridade policial.", correta: false },
      { letra: "B", texto: "Mediante requisição da autoridade judiciária ou do Ministério Público.", correta: false },
      { letra: "C", texto: "A requerimento da vítima ou de seu representante legal.", correta: false },
      { letra: "D", texto: "Exclusivamente mediante autorização expressa do Tribunal de Justiça competente.", correta: true },
      { letra: "E", texto: "Por comunicação verbal ou escrita de qualquer pessoa do povo.", correta: false }
    ]
  },
  // 09
  {
    idSlug: "dpp-l4-09",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A autoridade policial poderá instaurar inquérito policial com base exclusivamente em denúncia anônima (notitia criminis inqualificada), desde que proceda previamente a diligências preliminares para verificar a verossimilhança dos fatos noticiados.",
    explicacao: "GABARITO: CERTO. A jurisprudência consolidada do STF e STJ admite a deflagração de investigações a partir de denúncia anônima (apócrifa), desde que a autoridade policial realize averiguação preliminar sumária (VPI - Verificação de Procedência das Informações) para confirmar a plausibilidade das alegações antes da instauração formal da portaria do inquérito.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 10
  {
    idSlug: "dpp-l4-10",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Acerca do inquérito policial e do valor probatório dos elementos nele colhidos, assinale a afirmativa correta consoante o art. 155 do Código de Processo Penal:",
    explicacao: "GABARITO: Letra B. O art. 155 do CPP estabelece que o juiz formará sua convicção pela livre apreciação da prova produzida em contraditório judicial, não podendo fundamentar sua decisão exclusivamente nos elementos informativos colhidos na investigação, ressalvadas as provas cautelares, não repetíveis e antecipadas.",
    alternativas: [
      { letra: "A", texto: "O juiz pode fundamentar a sentença condenatória com base exclusiva nos depoimentos colhidos na fase inquisitorial sem contraditório.", correta: false },
      { letra: "B", texto: "O juiz não pode fundamentar sua decisão exclusivamente nos elementos informativos colhidos na investigação, ressalvadas as provas cautelares, não repetíveis e antecipadas.", correta: true },
      { letra: "C", texto: "As provas cautelares e irrepetíveis perdem a validade se não forem integralmente refeitas na audiência de instrução e julgamento.", correta: false },
      { letra: "D", texto: "O inquérito policial produz prova plena que vincula o magistrado ao oferecimento da denúncia.", correta: false },
      { letra: "E", texto: "Os elementos do inquérito policial são nulos de pleno direito se o investigado não for assistido por advogado em todos os atos.", correta: false }
    ]
  },
  // 11
  {
    idSlug: "dpp-l4-11",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O Ministério Público não pode presidir inquérito policial, que é atribuição privativa da polícia judiciária, mas ostenta competência constitucional para promover investigações de natureza criminal por meio de Procedimento Investigatório Criminal (PIC), segundo tese fixada pelo Supremo Tribunal Federal em repercussão geral (Tema 184).",
    explicacao: "GABARITO: CERTO. O STF (RE 593.727/MG - Tema 184) fixou que o Ministério Público dispõe de competência própria para instaurar e conduzir procedimentos investigatórios de natureza penal (PIC), com fundamento na teoria dos poderes implícitos (art. 129, I e VIII, da CF), conquanto a presidência do inquérito policial seja ato privativo de delegado de polícia.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 12
  {
    idSlug: "dpp-l4-12",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Quanto à figura do Juiz das Garantias (arts. 3º-A a 3º-F do CPP) e ao julgamento do Supremo Tribunal Federal nas ADIs 6.298, 6.299, 6.300 e 6.305, assinale a alternativa correta:",
    explicacao: "GABARITO: Letra C. O STF fixou que a competência do Juiz das Garantias cessa com o oferecimento/recebimento da denúncia ou queixa (art. 3º-C), sendo responsável pelo controle da legalidade da investigação criminal e pela salvaguarda dos direitos individuais. O STF estabeleceu prazo de implementação obrigatória para todo o Judiciário e afastou sua aplicação nas hipóteses de competência originária dos Tribunais, no Tribunal do Júri e no âmbito dos Juizados Especiais Criminais.",
    alternativas: [
      { letra: "A", texto: "O STF considerou a instituição do Juiz das Garantias inteiramente inconstitucional por violação ao princípio do juiz natural.", correta: false },
      { letra: "B", texto: "A atuação do Juiz das Garantias perdura durante toda a audiência de instrução e julgamento até a prolação da sentença.", correta: false },
      { letra: "C", texto: "O Juiz das Garantias é responsável pelo controle da legalidade da investigação e pela salvaguarda dos direitos individuais, cessando sua competência com o recebimento da denúncia.", correta: true },
      { letra: "D", texto: "O Juiz das Garantias aplica-se obrigatoriamente a todos os processos de competência originária do STF e do STJ.", correta: false },
      { letra: "E", texto: "O Juiz das Garantias substitui a autoridade policial na condução das diligências investigativas de campo.", correta: false }
    ]
  },
  // 13
  {
    idSlug: "dpp-l4-13",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O inquérito policial possui a característica da oficiosidade, o que significa que, nos crimes de ação penal pública incondicionada, a autoridade policial deve instaurá-lo ex officio tão logo tome conhecimento da prática da infração penal.",
    explicacao: "GABARITO: CERTO. A oficiosidade significa que a atuação da autoridade policial nos crimes de ação pública incondicionada não depende de provocação de terceiros, devendo agir de ofício (por portaria) ao tomar conhecimento da prática delitiva.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 14
  {
    idSlug: "dpp-l4-14",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre a incomunicabilidade do preso no inquérito policial prevista no art. 21 do CPP, assinale a opção correta à luz da ordem constitucional de 1988:",
    explicacao: "GABARITO: Letra B. O art. 136, § 3º, IV, da Constituição Federal de 1988 veda expressamente a incomunicabilidade do preso mesmo durante a vigência de estado de defesa. Por consequência, a doutrina e a jurisprudência são pacíficas em reconhecer que o art. 21 do CPP não foi recepcionado pela CF/88, sendo vedada a incomunicabilidade em qualquer hipótese no ordenamento atual.",
    alternativas: [
      { letra: "A", texto: "Permanece plenamente válida e pode ser decretada pelo delegado de polícia pelo prazo improrrogável de 5 dias.", correta: false },
      { letra: "B", texto: "Não foi recepcionada pela Constituição Federal de 1988, que veda a incomunicabilidade do preso inclusive no estado de defesa.", correta: true },
      { letra: "C", texto: "Pode ser determinada judicialmente nos crimes hediondos por até 10 dias úteis.", correta: false },
      { letra: "D", texto: "Aplica-se exclusivamente nos crimes contra o sistema financeiro nacional sob segredo de justiça.", correta: false },
      { letra: "E", texto: "Pode ser restabelecida mediante portaria motivada do Diretor-Geral da Polícia Judiciária.", correta: false }
    ]
  },
  // 15
  {
    idSlug: "dpp-l4-15",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil AL",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O indiciamento é ato privativo da autoridade policial, que, por meio de despacho fundamentado e mediante análise técnico-jurídica do fato, imputa formalmente a determinada pessoa a autoria de uma infração penal.",
    explicacao: "GABARITO: CERTO. A Lei nº 12.830/2013 (art. 2º, § 6º) estabelece que 'o indiciamento, privativo do delegado de polícia, dar-se-á por ato fundamentado, mediante análise técnico-jurídica do fato, que deverá apontar a autoria, materialidade e suas circunstâncias'. Nem o MP nem o Juiz podem determinar que o delegado indicie alguém.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 16
  {
    idSlug: "dpp-l4-16",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos crimes de ação penal pública condicionada à representação, se a vítima for menor de 18 anos e não tiver representante legal, ou colidirem os interesses deste com os daquela:",
    explicacao: "GABARITO: Letra A. O art. 33 do Código de Processo Penal dispõe expressamente: 'Se o ofendido for menor de 18 anos, ou mentalmente enfermo, ou retardado mental, e não tiver representante legal, ou colidirem os interesses deste com os daquele, o direito de queixa ou de representação será exercido por curador especial, nomeado, de ofício ou a requerimento do Ministério Público, pelo juiz competente para o processo penal'.",
    alternativas: [
      { letra: "A", texto: "O direito de representação será exercido por curador especial nomeado pelo juiz competente.", correta: true },
      { letra: "B", texto: "O inquérito policial será imediatamente arquivado pela falta de pressuposto de procedibilidade.", correta: false },
      { letra: "C", texto: "A ação penal transmuda-se automaticamente para pública incondicionada.", correta: false },
      { letra: "D", texto: "O prazo decadencial fica suspenso até que a vítima complete 21 anos de idade.", correta: false },
      { letra: "E", texto: "O delegado de polícia assume a representação na qualidade de curador ad hoc.", correta: false }
    ]
  },
  // 17
  {
    idSlug: "dpp-l4-17",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A reprodução simulada dos fatos (reconstituição do crime), prevista no art. 7º do CPP, poderá ser determinada pela autoridade policial desde que não contrarie a moralidade ou a ordem pública, não estando o investigado obrigado a dela participar em razão do princípio da não autoincriminação (nemo tenetur se detegere).",
    explicacao: "GABARITO: CERTO. O art. 7º do CPP faculta a reprodução simulada desde que não contrarie a moralidade ou a ordem pública. Em virtude do princípio constitucional e convencional da não autoincriminação (art. 5º, LXIII, da CF e art. 8º do Pacto de San José da Costa Rica), o indiciado não pode ser compelido a participar ativamente da encenação.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 18
  {
    idSlug: "dpp-l4-18",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Qual das seguintes características NÃO se aplica ao inquérito policial no ordenamento jurídico pátrio?",
    explicacao: "GABARITO: Letra D. O inquérito policial é caracterizado pelo sigilo (art. 20 do CPP), não vigorando nele o princípio da ampla publicidade externa dos atos. Já a forma escrita (art. 9º), a inquisitoriedade, a indisponibilidade (art. 17) e a oficialidade são características consagradas.",
    alternativas: [
      { letra: "A", texto: "Forma escrita.", correta: false },
      { letra: "B", texto: "Inquisitoriedade.", correta: false },
      { letra: "C", texto: "Oficialidade.", correta: false },
      { letra: "D", texto: "Publicidade irrestrita a qualquer cidadão.", correta: true },
      { letra: "E", texto: "Indisponibilidade pela autoridade policial.", correta: false }
    ]
  },
  // 19
  {
    idSlug: "dpp-l4-19",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Eventuais irregularidades ou vícios ocorridos no curso do inquérito policial não geram a nulidade da ação penal superveniente, uma vez que se trata de procedimento de natureza meramente informativa.",
    explicacao: "GABARITO: CERTO. É firme e pacífica a jurisprudência do STF e do STJ no sentido de que eventuais nulidades ou irregularidades ocorridas na fase do inquérito policial não contaminam a ação penal subsequente, por ser o inquérito peça meramente informativa destinada à formação da opinio delicti.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 20
  {
    idSlug: "dpp-l4-20",
    disciplina_id: dId,
    assunto_id: aInquerito,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito do trancamento do inquérito policial pela via do Habeas Corpus, a jurisprudência uniforme dos Tribunais Superiores admite a concessão da ordem em caráter excepcional quando restar evidenciada:",
    explicacao: "GABARITO: Letra A. O trancamento de inquérito policial ou ação penal por meio de habeas corpus é medida excepcionalíssima, admissível somente quando for perceptível de plano, sem necessidade de dilação probatória: a atipicidade manifesta da conduta, a extinção da punibilidade ou a ausência absoluta de justa causa (ausência de indícios mínimos de autoria e materialidade).",
    alternativas: [
      { letra: "A", texto: "De forma inequívoca e sem dilação probatória, a atipicidade manifesta da conduta, a extinção da punibilidade ou a ausência total de indícios de autoria/materialidade.", correta: true },
      { letra: "B", texto: "A discordância doutrinária sobre a interpretação do tipo penal imputado ao indiciado.", correta: false },
      { letra: "C", texto: "A existência de dúvida razoável quanto ao dolo do investigado na fase inquisitorial.", correta: false },
      { letra: "D", texto: "A pendência de laudo pericial complementar cujo prazo de confecção foi extrapolado pelo órgão pericial.", correta: false },
      { letra: "E", texto: "A ausência de intimação do advogado para acompanhar diligência de busca e apreensão em via pública.", correta: false }
    ]
  }
];
