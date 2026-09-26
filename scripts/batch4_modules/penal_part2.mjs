import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.penal;
const aConcurso = TAXONOMIA.assuntos.concurso_pessoas_crimes;
const aPenas = TAXONOMIA.assuntos.penas_extincao;
const aLeiTempoEspaco = TAXONOMIA.assuntos.lei_penal_tempo_espaco;

export const penalPart2 = [
  // 21
  {
    idSlug: "penal-l4-21",
    disciplina_id: dId,
    assunto_id: aConcurso,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O Código Penal brasileiro adotou expressamente como regra geral para o concurso de pessoas a teoria monista (ou unitária), segundo a qual todos os que concorrem para o crime incidem nas penas a este cominadas, na medida de sua culpabilidade.",
    explicacao: "GABARITO: CERTO. O art. 29, caput, do Código Penal consagra a Teoria Monista (Unitária ou Igualitária) temperada pela culpabilidade: 'Quem, de qualquer modo, concorre para o crime incide nas penas a este cominadas, na medida de sua culpabilidade'. Há unidade de crime com pluralidade de agentes.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 22
  {
    idSlug: "penal-l4-22",
    disciplina_id: dId,
    assunto_id: aConcurso,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Lucas e Mateus combinam previamente a prática de um furto em uma residência desabitada. Durante a execução, enquanto Lucas vasculha os cômodos em busca de dinheiro, Mateus, que estava de vigia no portão, avista o proprietário chegando de surpresa, saca uma arma de fogo que portava sem o conhecimento de Lucas e atira contra o proprietário, matando-o. Lucas foge imediatamente do local sem nada levar. De acordo com o art. 29, § 2º, do Código Penal (cooperação dolosamente distinta), a conduta de Lucas deve ser enquadrada como:",
    explicacao: "GABARITO: Letra B. O art. 29, § 2º, do CP prevê a cooperação dolosamente distinta: 'Se algum dos concorrentes quis participar de crime menos grave, ser-lhe-á aplicada a pena deste; essa pena será aumentada até metade, na hipótese de ter sido previsível o resultado mais grave'. Tendo Lucas querido praticar apenas furto, responderá pelo crime menos grave tentado (furto qualificado tentado), podendo a pena ser aumentada até a metade se demonstrada a previsibilidade do resultado mais grave.",
    alternativas: [
      { letra: "A", texto: "Coautoria necessária em latrocínio consumado com incidência de atenuante genérica.", correta: false },
      { letra: "B", texto: "Participação em crime menos grave (furto tentado), com pena aumentada até a metade se o resultado mais grave era previsível.", correta: true },
      { letra: "C", texto: "Tentativa de homicídio qualificado em concurso formal com furto simples consumado.", correta: false },
      { letra: "D", texto: "Absolvição sumária em razão da ausência de nexo causal subjetivo e da interrupção do conatus.", correta: false },
      { letra: "E", texto: "Homicídio culposo com perdão judicial cominado pelo juízo da instrução criminal.", correta: false }
    ]
  },
  // 23
  {
    idSlug: "penal-l4-23",
    disciplina_id: dId,
    assunto_id: aConcurso,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No concurso formal próprio (perfeito) de crimes, aplica-se ao agente a mais grave das penas cabíveis ou, se iguais, somente uma delas, mas aumentada, em qualquer caso, de um sexto até metade (sistema da exasperação).",
    explicacao: "GABARITO: CERTO. O art. 70, caput, primeira parte, do Código Penal prevê o concurso formal próprio: 'Quando o agente, mediante uma só ação ou omissão, pratica dois ou mais crimes, idênticos ou não, aplica-se-lhe a mais grave das penas cabíveis ou, se iguais, somente uma delas, mas aumentada, em qualquer caso, de um sexto até metade'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 24
  {
    idSlug: "penal-l4-24",
    disciplina_id: dId,
    assunto_id: aConcurso,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Quando o agente, mediante mais de uma ação ou omissão, pratica dois ou mais crimes da mesma espécie e, pelas condições de tempo, lugar, maneira de execução e outras semelhantes, devem os subsequentes ser havidos como continuação do primeiro, aplica-se a regra do:",
    explicacao: "GABARITO: Letra C. O art. 71 do Código Penal define o crime continuado (continuidade delitiva), aplicando-se a pena de um só dos crimes, se idênticas, ou a mais grave, se diversas, aumentada, em qualquer caso, de um sexto a dois terços (sistema da exasperação).",
    alternativas: [
      { letra: "A", texto: "Concurso material heterogêneo pelo sistema do cúmulo material.", correta: false },
      { letra: "B", texto: "Concurso formal impróprio decorrente de desígnios autônomos.", correta: false },
      { letra: "C", texto: "Crime continuado (continuidade delitiva), aplicando-se o sistema da exasperação da pena.", correta: true },
      { letra: "D", texto: "Concurso aparente de normas pelo princípio da consunção.", correta: false },
      { letra: "E", texto: "Erro na execução (aberratio delicti) com cúmulo de resultados.", correta: false }
    ]
  },
  // 25
  {
    idSlug: "penal-l4-25",
    disciplina_id: dId,
    assunto_id: aPenas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com o Código Penal com as alterações introduzidas pelo Pacote Anticrime (Lei nº 13.964/2019), o tempo de cumprimento das penas privativas de liberdade no Brasil não pode ser superior a 40 (quarenta) anos.",
    explicacao: "GABARITO: CERTO. O art. 75, caput, do Código Penal, com a redação dada pela Lei nº 13.964/2019, estabelece expressamente: 'O tempo de cumprimento das penas privativas de liberdade não pode ser superior a 40 (quarenta) anos' (anteriormente o teto era de 30 anos).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 26
  {
    idSlug: "penal-l4-26",
    disciplina_id: dId,
    assunto_id: aPenas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil MG",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre a dosimetria da pena e o critério trifásico preconizado pelo art. 68 do Código Penal (Nelson Hungria), assinale a opção correta:",
    explicacao: "GABARITO: Letra A. Na 1ª fase, o juiz fixa a pena-base observando as 8 circunstâncias judiciais do art. 59 do CP. Na 2ª fase, calcula a pena provisória ou intermediária aplicando as circunstâncias agravantes (arts. 61 e 62) e atenuantes (arts. 65 e 66). Na 3ª fase, apura a pena definitiva aplicando as causas de aumento (majorantes) e diminuição (minorantes) previstas na Parte Geral e Especial.",
    alternativas: [
      { letra: "A", texto: "Na 1ª fase fixam-se as circunstâncias judiciais (art. 59); na 2ª fase incidem as atenuantes e agravantes; e na 3ª fase as causas de aumento e diminuição.", correta: true },
      { letra: "B", texto: "Na 2ª fase de aplicação da pena, as atenuantes podem reduzir a sanção aquém do mínimo legal, consoante a Súmula 231 do STJ.", correta: false },
      { letra: "C", texto: "As causas de aumento e diminuição de pena da Parte Geral devem ser apreciadas exclusivamente na 1ª fase da dosimetria.", correta: false },
      { letra: "D", texto: "A reincidência é circunstância judicial analisada obrigatoriamente na 1ª fase para a fixação da pena-base.", correta: false },
      { letra: "E", texto: "A confissão espontânea não pode concorrer com a reincidência na 2ª fase da dosimetria por expressa vedação do CP.", correta: false }
    ]
  },
  // 27
  {
    idSlug: "penal-l4-27",
    disciplina_id: dId,
    assunto_id: aPenas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A prescrição da pretensão punitiva antes de transitar em julgado a sentença final regula-se pelo máximo da pena privativa de liberdade cominada ao crime, verificando-se em 20 (vinte) anos se o máximo da pena é superior a 12 (doze) anos.",
    explicacao: "GABARITO: CERTO. O art. 109, I, do Código Penal estabelece que a prescrição antes de transitar em julgado a sentença final prescreve 'em vinte anos, se o máximo da pena é superior a doze anos'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 28
  {
    idSlug: "penal-l4-28",
    disciplina_id: dId,
    assunto_id: aPenas,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil AP",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Assinale a alternativa que indica uma causa extintiva da punibilidade expressamente prevista no art. 107 do Código Penal:",
    explicacao: "GABARITO: Letra D. O art. 107 do Código Penal elenca como causas de extinção da punibilidade: I - pela morte do agente; II - pela anistia, graça ou indulto; III - pela retroatividade de lei que não mais considera o fato como criminoso (abolitio criminis); IV - pela prescrição, decadência ou perempção; V - pela renúncia do direito de queixa ou pelo perdão aceito, nos crimes de ação privada; VI - pela retratação do agente, nos casos em que a lei a admite; IX - pelo perdão judicial, nos casos previstos em lei.",
    alternativas: [
      { letra: "A", texto: "Desistência voluntária e arrependimento eficaz.", correta: false },
      { letra: "B", texto: "Inimputabilidade por anomalia psíquica superveniente à denúncia.", correta: false },
      { letra: "C", texto: "Suspensão condicional do processo (sursis processual).", correta: false },
      { letra: "D", texto: "Anistia, graça, indulto e abolitio criminis.", correta: true },
      { letra: "E", texto: "Reparação voluntária do dano no crime de estelionato após o trânsito em julgado.", correta: false }
    ]
  },
  // 29
  {
    idSlug: "penal-l4-29",
    disciplina_id: dId,
    assunto_id: aPenas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "São reduzidos de metade os prazos de prescrição quando o criminoso era, ao tempo do crime, menor de 21 (vinte e um) anos, ou, na data da sentença, maior de 70 (setenta) anos.",
    explicacao: "GABARITO: CERTO. O art. 115 do Código Penal prevê expressamente a redução dos prazos prescricionais: 'São reduzidos de metade os prazos de prescrição quando o criminoso era, ao tempo do crime, menor de vinte e um anos, ou, na data da sentença, maior de setenta anos'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 30
  {
    idSlug: "penal-l4-30",
    disciplina_id: dId,
    assunto_id: aPenas,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Quanto à reincidência e seus efeitos jurídicos no Direito Penal brasileiro, assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra B. O art. 64, I, do Código Penal consagra o sistema da temporariedade (ou prazo depurador de 5 anos): para efeito de reincidência, não prevalece a condenação anterior se entre a data do cumprimento ou extinção da pena e a infração posterior tiver decorrido período de tempo superior a 5 (cinco) anos, computado o período de prova da suspensão ou do livramento condicional, se não houver revogação.",
    alternativas: [
      { letra: "A", texto: "A condenação anterior transitada em julgado por contravenção penal gera reincidência se o agente comete crime posterior.", correta: false },
      { letra: "B", texto: "Não prevalece a condenação anterior se entre a extinção da pena e a infração posterior decorreu prazo superior a 5 anos (período depurador).", correta: true },
      { letra: "C", texto: "A prática de crime culposo após condenação anterior por crime doloso com trânsito em julgado afasta a reincidência por ausência de simetria volitiva.", correta: false },
      { letra: "D", texto: "O cometimento de crime político ou militar próprio no exterior gera reincidência comum obrigatória no território nacional.", correta: false },
      { letra: "E", texto: "A reincidência impede, de forma absoluta e peremptória, a substituição da pena privativa de liberdade por restritivas de direitos em qualquer situação.", correta: false }
    ]
  },
  // 31
  {
    idSlug: "penal-l4-31",
    disciplina_id: dId,
    assunto_id: aConcurso,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "As circunstâncias e as condições de caráter pessoal não se comunicam aos coautores e partícipes, salvo quando forem elementares do crime, nos termos do art. 30 do Código Penal.",
    explicacao: "GABARITO: CERTO. O art. 30 do Código Penal dispõe expressamente: 'Não se comunicam as circunstâncias e as condições de caráter pessoal, salvo quando elementares do crime'. Exemplo clássico: a condição de funcionário público no crime de peculato (art. 312 do CP) comunica-se ao comparsa particular que dela tem conhecimento.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 32
  {
    idSlug: "penal-l4-32",
    disciplina_id: dId,
    assunto_id: aConcurso,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Papiloscopista Policial",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Se a participação do comparsa for de menor importância, a consequência legal prevista no art. 29, § 1º, do Código Penal é que:",
    explicacao: "GABARITO: Letra A. O art. 29, § 1º, do Código Penal determina: 'Se a participação for de menor importância, a pena pode ser diminuída de um sexto a um terço'. Trata-se de causa geral de diminuição de pena aplicável ao partícipe cuja colaboração causal tenha sido meramente acessória ou secundária.",
    alternativas: [
      { letra: "A", texto: "A pena pode ser diminuída de um sexto a um terço.", correta: true },
      { letra: "B", texto: "O agente é isento de pena, aplicando-se apenas medida de segurança.", correta: false },
      { letra: "C", texto: "A pena deve ser substituída compulsoriamente por prestação de serviços à comunidade.", correta: false },
      { letra: "D", texto: "A punibilidade é extinta pelo instituto da insignificância participativa.", correta: false },
      { letra: "E", texto: "A pena é fixada no mínimo legal sem possibilidade de progressão de regime.", correta: false }
    ]
  },
  // 33
  {
    idSlug: "penal-l4-33",
    disciplina_id: dId,
    assunto_id: aPenas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil CE",
    cargo_nome: "Inspetor de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O perdão judicial, concedido pelo juiz nos casos expressamente previstos em lei quando as consequências da infração atingiram o próprio agente de forma tão grave que a sanção penal se torne desnecessária, extingue a punibilidade e não subsiste qualquer efeito condenatório.",
    explicacao: "GABARITO: CERTO. Nos termos do art. 107, IX, e art. 120 do Código Penal, bem como da Súmula 18 do STJ: 'A sentença concessiva do perdão judicial é declaratória da extinção da punibilidade, não subsistindo qualquer efeito condenatório'. O réu permanece primário e sem antecedentes.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 34
  {
    idSlug: "penal-l4-34",
    disciplina_id: dId,
    assunto_id: aPenas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SC",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "De acordo com o art. 44 do Código Penal, as penas restritivas de direitos são autônomas e substituem as privativas de liberdade quando, entre outros requisitos:",
    explicacao: "GABARITO: Letra C. O art. 44, I, do Código Penal exige cumulativamente: 'aplicada pena privativa de liberdade não superior a quatro anos e o crime não for cometido com violência ou grave ameaça à pessoa ou, qualquer que seja a pena aplicada, se o crime for culposo'.",
    alternativas: [
      { letra: "A", texto: "A pena aplicada for superior a oito anos e o réu for primário.", correta: false },
      { letra: "B", texto: "O crime for doloso praticado com grave ameaça e pena até dois anos.", correta: false },
      { letra: "C", texto: "Aplicada pena privativa de liberdade não superior a 4 anos e o crime não for cometido com violência ou grave ameaça à pessoa, ou se culposo.", correta: true },
      { letra: "D", texto: "O agente for reincidente específico em crime hediondo com reparação total do dano.", correta: false },
      { letra: "E", texto: "O crime for praticado no âmbito de violência doméstica e familiar contra a mulher com pena inferior a um ano.", correta: false }
    ]
  },
  // 35
  {
    idSlug: "penal-l4-35",
    disciplina_id: dId,
    assunto_id: aLeiTempoEspaco,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A lei excepcional ou temporária, embora decorrido o período de sua duração ou cessadas as circunstâncias que a determinaram, aplica-se ao fato praticado durante sua vigência, consagrando-se o princípio da ultratividade gravosa.",
    explicacao: "GABARITO: CERTO. O art. 3º do Código Penal prevê expressamente a ultratividade das leis excepcionais e temporárias: 'A lei excepcional ou temporária, embora decorrido o período de sua duração ou cessadas as circunstâncias que a determinaram, aplica-se ao fato praticado durante sua vigência'. Trata-se de exceção legítima à retroatividade benéfica.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 36
  {
    idSlug: "penal-l4-36",
    disciplina_id: dId,
    assunto_id: aLeiTempoEspaco,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Para os efeitos penais, consideram-se como extensão do território nacional brasileiro:",
    explicacao: "GABARITO: Letra E. O art. 5º, § 1º, do Código Penal estabelece que 'para os efeitos penais, consideram-se como extensão do território nacional as embarcações e aeronaves brasileiras, de natureza pública ou a serviço do governo brasileiro onde quer que se encontrem, bem como as aeronaves e as embarcações brasileiras, mercantes ou de propriedade privada, que se achem, respectivamente, no espaço aéreo correspondente ou em alto-mar'.",
    alternativas: [
      { letra: "A", texto: "Apenas as embaixadas e consulados estrangeiros localizados em território nacional.", correta: false },
      { letra: "B", texto: "Exclusivamente as sedes de empresas multinacionais brasileiras sediadas no Mercosul.", correta: false },
      { letra: "C", texto: "Os domicílios residenciais de diplomatas brasileiros no exterior em caráter vitalício.", correta: false },
      { letra: "D", texto: "Aeronaves e embarcações privadas estrangeiras em águas territoriais brasileiras.", correta: false },
      { letra: "E", texto: "Embarcações e aeronaves públicas brasileiras onde quer que se encontrem, e as privadas em alto-mar ou espaço aéreo correspondente.", correta: true }
    ]
  },
  // 37
  {
    idSlug: "penal-l4-37",
    disciplina_id: dId,
    assunto_id: aPenas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A prescrição da pretensão executória da pena é interrompida pelo início ou continuação do cumprimento da pena e pela reincidência, nos termos do art. 117, V e VI, do Código Penal.",
    explicacao: "GABARITO: CERTO. Conforme o art. 117, incisos V e VI, do Código Penal, o curso da prescrição executória interrompe-se: 'V - pelo início ou continuação do cumprimento da pena; VI - pela reincidência'. Interrompida a prescrição, o prazo recomeça a correr por inteiro a partir do dia da interrupção.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 38
  {
    idSlug: "penal-l4-38",
    disciplina_id: dId,
    assunto_id: aPenas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação ao livramento condicional disciplinado nos arts. 83 a 90 do Código Penal, assinale a assertiva correta:",
    explicacao: "GABARITO: Letra B. O art. 83, I, do CP exige o cumprimento de mais de um terço da pena se o condenado não for reincidente em crime doloso e tiver bons antecedentes. O inciso II exige mais de metade se reincidente em crime doloso. O inciso V exige mais de dois terços para condenados por crime hediondo, prática de tortura, tráfico ilícito de entorpecentes e drogas afins, tráfico de pessoas e terrorismo, se o apenado não for reincidente específico em crimes dessa natureza.",
    alternativas: [
      { letra: "A", texto: "O livramento condicional pode ser concedido ao reincidente específico em crime hediondo após o cumprimento de 4/5 da pena.", correta: false },
      { letra: "B", texto: "Exige o cumprimento de mais de 1/3 da pena ao não reincidente em crime doloso com bons antecedentes, e mais de 1/2 ao reincidente em crime doloso.", correta: true },
      { letra: "C", texto: "A revogação do livramento condicional por prática de crime anterior à sua concessão impede nova concessão para a mesma pena.", correta: false },
      { letra: "D", texto: "O juiz pode conceder o livramento condicional mesmo sem comprovação de bom comportamento carcerário pelo laudo criminológico.", correta: false },
      { letra: "E", texto: "A pena de multa pendente de pagamento obsta peremptoriamente a concessão do livramento mesmo em caso de insolvência absoluta.", correta: false }
    ]
  },
  // 39
  {
    idSlug: "penal-l4-39",
    disciplina_id: dId,
    assunto_id: aConcurso,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No concurso material de crimes (art. 69 do CP), quando o agente, mediante mais de uma ação ou omissão, pratica dois ou mais crimes, idênticos ou não, aplicam-se cumulativamente as penas privativas de liberdade em que haja incorrido (sistema do cúmulo material).",
    explicacao: "GABARITO: CERTO. O art. 69 do Código Penal consagra expressamente o sistema do cúmulo material: 'Quando o agente, mediante mais de uma ação ou omissão, pratica dois ou mais crimes, idênticos ou não, aplicam-se-lhe cumulativamente as penas privativas de liberdade em que haja incorrido'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 40
  {
    idSlug: "penal-l4-40",
    disciplina_id: dId,
    assunto_id: aPenas,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil CE",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O efeito civil da condenação penal que torna certa a obrigação de indenizar o dano causado pelo crime (art. 91, I, do CP) classifica-se como:",
    explicacao: "GABARITO: Letra A. O art. 91 do CP elenca os efeitos genéricos e automáticos da condenação criminal (efeitos secundários extrapenais automáticos), que decorrem diretamente da sentença penal condenatória transitada em julgado, independentemente de motivação expressa na decisão judicial.",
    alternativas: [
      { letra: "A", texto: "Efeito secundário extrapenal genérico e automático da sentença condenatória.", correta: true },
      { letra: "B", texto: "Efeito principal penal de natureza personalíssima e intransmissível aos herdeiros.", correta: false },
      { letra: "C", texto: "Efeito extrapenal específico que exige declaração expressa e motivada na sentença.", correta: false },
      { letra: "D", texto: "Sanção administrativa disciplinar de execução compulsória pelo juízo da execução penal.", correta: false },
      { letra: "E", texto: "Medida cautelar assecuratória restrita a crimes praticados contra a Fazenda Pública.", correta: false }
    ]
  }
];
