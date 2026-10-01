import { TAXONOMIA } from "./taxonomia.mjs";

export const penalPart1 = [
  {
    idSlug: "penal-b5-001",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.lei_penal_tempo_espaco,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "Considere que determinado agente cometa crime permanente cuja consumação se prolongue no tempo entre janeiro e julho de determinado ano. Se em maio desse mesmo ano entrar em vigor lei penal que majore a pena cominada ao delito, a lei nova mais severa deverá ser aplicada ao caso concreto, em estrita consonância com a jurisprudência sumulada do Supremo Tribunal Federal.",
    explicacao: "CORRETO. Aplica-se a Súmula 711 do STF: 'A lei penal mais grave aplica-se ao crime continuado ou ao crime permanente, se a sua vigência é anterior à cessação da continuidade ou da permanência'. Como a consumação persistiu até julho e a lei nova entrou em vigor em maio, incide a lei nova mais severa.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-002",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "FGV",
    orgao_nome: "PC-SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No âmbito da teoria do delito e das causas de exclusão da ilicitude, assinale a opção correta a respeito do estado de necessidade e da legítima defesa:",
    explicacao: "Gabarito: C. No estado de necessidade há conflito entre bens jurídicos expostos a perigo atual gerado por fato da natureza ou conduta humana sem destinatário certo, inexistindo agressão injusta. Na legítima defesa, exige-se agressão injusta, atual ou iminente, dirigida a direito próprio ou de outrem.",
    alternativas: [
      { letra: "A", texto: "O estado de necessidade putativo exclui a tipicidade do fato, convertendo a conduta dolosa em culposa de forma absoluta.", correta: false },
      { letra: "B", texto: "A legítima defesa recíproca real é plenamente admitida pela doutrina clássica quando ambos os contendores agem com animus defendendi.", correta: false },
      { letra: "C", texto: "O estado de necessidade pressupõe uma situação de perigo atual não provocado por vontade do agente, ao passo que a legítima defesa demanda agressão injusta, atual ou iminente.", correta: true },
      { letra: "D", texto: "Aquele que tem o dever legal de enfrentar o perigo pode alegar estado de necessidade justificante contra terceiros inocentes sem restrições.", correta: false },
      { letra: "E", texto: "O excesso exculpante na legítima defesa decorre exclusivamente de dolo direto e autoriza a aplicação analógica do arrependimento eficaz.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-003",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "Vunesp",
    orgao_nome: "PC-SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Mário, com intenção de matar seu desafeto, desfere três disparos de arma de fogo contra a vítima. Arrependido imediatamente após os disparos ao ver o sofrimento da vítima, socorre-a prontamente levando-a ao hospital mais próximo, onde ela recebe tratamento médico de urgência e sobrevive sem sequelas permanentes. Diante do Código Penal, a conduta de Mário configura:",
    explicacao: "Gabarito: B. Trata-se de arrependimento eficaz (art. 15, segunda parte, do CP), pois após esgotar os atos executórios, o agente desenvolve nova conduta voluntária que impede a produção do resultado morte, respondendo apenas pelos atos já praticados (lesão corporal).",
    alternativas: [
      { letra: "A", texto: "Desistência voluntária, ficando isento de qualquer responsabilização criminal.", correta: false },
      { letra: "B", texto: "Arrependimento eficaz, respondendo Mário apenas pelos atos até então praticados.", correta: true },
      { letra: "C", texto: "Arrependimento posterior, com redução de pena de um a dois terços no homicídio tentado.", correta: false },
      { letra: "D", texto: "Tentativa de homicídio qualificado pela emboscada, sem qualquer benefício despenalizador.", correta: false },
      { letra: "E", texto: "Crime impossível pela absoluta ineficácia do meio empregado nos disparos.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-004",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "De acordo com o Código Penal brasileiro, diz-se o crime tentado quando, iniciada a execução, este não se consuma por circunstâncias alheias à vontade do agente.",
    explicacao: "CORRETO. Reproduz textualmente o art. 14, inciso II, do Código Penal: 'tentado, quando, iniciada a execução, não se consuma por circunstâncias alheias à vontade do agente'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-005",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "FCC",
    orgao_nome: "PC-AP",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Acerca do erro de tipo e do erro de proibição no Direito Penal brasileiro, assinale a afirmativa correta:",
    explicacao: "Gabarito: D. O erro de tipo recai sobre elemento constitutivo do tipo legal (art. 20, CP), excluindo sempre o dolo (mas permitindo a punição por culpa se previsto em lei). Já o erro de proibição (art. 21, CP) recai sobre a ilicitude da conduta, excluindo a culpabilidade se invencível ou atenuando a pena de 1/6 a 1/3 se vencível.",
    alternativas: [
      { letra: "A", texto: "O erro de proibição inevitável exclui o dolo e a culpa, tornando o fato atípico.", correta: false },
      { letra: "B", texto: "O erro de tipo essencial escusável exclui a culpabilidade por inexigibilidade de conduta diversa.", correta: false },
      { letra: "C", texto: "O erro sobre a pessoa isenta o agente de pena, computando-se as condições da vítima real e não da virtual.", correta: false },
      { letra: "D", texto: "O erro de tipo incide sobre elementos objetivos da figura típica, afastando o dolo; o erro de proibição afeta a consciência da ilicitude, incidindo sobre a culpabilidade.", correta: true },
      { letra: "E", texto: "Na aberração no ataque (aberratio ictus), caso resulte morte de pessoa diversa, responde o agente unicamente por homicídio culposo.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-006",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.concurso_pessoas_crimes,
    banca_nome: "Cebraspe",
    orgao_nome: "PC-CE",
    cargo_nome: "Inspetor de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "No concurso de pessoas, as condições ou circunstâncias de caráter estritamente pessoal não se comunicam entre os coautores e partícipes, salvo quando forem elementares do crime.",
    explicacao: "CORRETO. Dispõe expressamente o art. 30 do Código Penal: 'Não se comunicam as circunstâncias e as condições de caráter pessoal, salvo quando elementares do crime'. Por exemplo, a condição de funcionário público no peculato comunica-se ao particular que conhece essa condição.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-007",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "FGV",
    orgao_nome: "PC-RJ",
    cargo_nome: "Inspetor de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Antônio, mediante grave ameaça exercida com simulacro de arma de fogo, aborda Bruna na via pública e exige a entrega de sua bolsa e de seu aparelho celular. Aterrorizada, a vítima entrega os pertences. Diante dos fatos, Antônio responderá por:",
    explicacao: "Gabarito: A. Conforme pacífica jurisprudência (Súmula 174 cancelada pelo STJ), o emprego de simulacro de arma de fogo (arma de brinquedo) serve para caracterizar a grave ameaça do caput do art. 157 do CP (roubo simples), mas não autoriza a causa de aumento de pena do roubo majorado por emprego de arma.",
    alternativas: [
      { letra: "A", texto: "Roubo simples consumado, pois o simulacro é apto a configurar a grave ameaça, mas não majora o delito pelo emprego de arma.", correta: true },
      { letra: "B", texto: "Roubo majorado pelo emprego de arma de fogo, tendo em vista a potencialidade lesiva aparente do simulacro.", correta: false },
      { letra: "C", texto: "Extorsão simples, em virtude da imprescindibilidade da conduta da vítima na entrega dos bens.", correta: false },
      { letra: "D", texto: "Furto qualificado mediante fraude, por ter induzido a vítima em erro sobre a letalidade do objeto.", correta: false },
      { letra: "E", texto: "Crime de constrangimento ilegal em concurso formal com furto simples.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-008",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Cebraspe",
    orgao_nome: "PC-DF",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "Para a consumação do crime de furto ou de roubo, adota-se no ordenamento jurídico brasileiro a teoria da apprehensio (ou amotio), segundo a qual o delito se consuma com a inversão da posse do bem, ainda que por breve tempo e sem posse mansa ou pacífica, sendo prescindível que o objeto saia da esfera de vigilância da vítima.",
    explicacao: "CORRETO. O STJ e o STF pacificaram a teoria da amotio/apprehensio no Tema Repetitivo 934/STJ e Súmula 582/STJ: 'Consuma-se o crime de roubo com a inversão da posse do bem mediante emprego de violência ou grave ameaça, ainda que por breve tempo e em seguida à perseguição imediata ao agente e recuperação da coisa roubada, sendo prescindível a posse mansa e pacífica ou desvigiada'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-009",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Instituto AOCP",
    orgao_nome: "PC-GO",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre o crime de latrocínio (art. 157, § 3º, II, do CP), assinale a afirmativa correta em consonância com a jurisprudência sumulada dos Tribunais Superiores:",
    explicacao: "Gabarito: E. Conforme a Súmula 610 do STF: 'Há crime de latrocínio, quando o homicídio se consuma, ainda que não realize o agente a subtração de bens da vítima'. Além disso, a competência para o julgamento é do juiz singular e não do Tribunal do Júri (Súmula 603/STF).",
    alternativas: [
      { letra: "A", texto: "O latrocínio é crime doloso contra a vida, sendo de competência privativa do Tribunal do Júri julgar o feito.", correta: false },
      { letra: "B", texto: "Se a subtração patrimonial se consuma, mas a morte resta apenas tentada, o agente responderá por homicídio qualificado consumado.", correta: false },
      { letra: "C", texto: "A morte de comparsa por intervenção policial durante o tiroteio configura latrocínio consumado atribuível ao agente sobrevivente.", correta: false },
      { letra: "D", texto: "O latrocínio tentado ocorre quando há consumação da morte e consumação da subtração em continuidade delitiva.", correta: false },
      { letra: "E", texto: "Há crime de latrocínio consumado quando a morte da vítima se consuma, ainda que o agente não consiga efetuar a subtração dos bens visados.", correta: true }
    ]
  },
  {
    idSlug: "penal-b5-010",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O funcionário público que, por negligência na guarda de armamento oficial da corporação, propicia que terceiro subtraia a referida arma de fogo comete crime de peculato culposo. Caso repare voluntariamente o dano antes da sentença irrecorrível, será extinta a sua punibilidade.",
    explicacao: "CORRETO. Nos termos do art. 312, § 2º c/c § 3º do CP: no peculato culposo, a reparação do dano antes da sentença irrecorrível extingue a punibilidade. Se posterior, reduz a pena imposta pela metade.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-011",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Vunesp",
    orgao_nome: "PC-SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "O crime de concussão (art. 316 do Código Penal) distingue-se do crime de corrupção passiva (art. 317 do Código Penal) precipuamente em razão do núcleo do tipo verbal empregado na conduta do funcionário público. Na concussão, a conduta consiste em:",
    explicacao: "Gabarito: C. Na concussão (art. 316), o verbo é 'exigir', denotando imposição/ameaça velada inerente à função. Na corrupção passiva (art. 317), os verbos são 'solicitar', 'receber' ou 'aceitar promessa' de vantagem indevida.",
    alternativas: [
      { letra: "A", texto: "Solicitar ou receber, para si ou para outrem, dinheiro ou bem material.", correta: false },
      { letra: "B", texto: "Apropriar-se de dinheiro ou valor móvel de que tem a posse em razão do cargo.", correta: false },
      { letra: "C", texto: "Exigir, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão da função.", correta: true },
      { letra: "D", texto: "Patrocinar, direta ou indiretamente, interesse privado perante a administração fazendária.", correta: false },
      { letra: "E", texto: "Aceitar promessa de retribuição financeira futura para retardar ato de ofício lícito.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-012",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O crime de corrupção passiva consuma-se com a efetiva entrega e recebimento da vantagem indevida pelo funcionário público, sendo a mera solicitação considerada ato preparatório impunível.",
    explicacao: "ERRADO. A corrupção passiva na modalidade 'solicitar' é crime formal (consumação antecipada), consumando-se no exato momento em que a solicitação da vantagem indevida chega ao conhecimento do particular, sendo o efetivo recebimento mero exaurimento do delito.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  {
    idSlug: "penal-b5-013",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "FGV",
    orgao_nome: "PC-MG",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Investigador de polícia que, por indulgência e amizade, deixa de responsabilizar colega de plantão que cometeu infração funcional no exercício do cargo comete o crime de:",
    explicacao: "Gabarito: D. Trata-se do crime de prevaricação imprópria/condescendência criminosa (art. 320 do CP): 'Deixar o funcionário, por indulgência, de responsabilizar subordinado que cometeu infração no exercício do cargo ou, quando lhe falte competência, não levar o fato ao conhecimento da autoridade competente'.",
    alternativas: [
      { letra: "A", texto: "Prevaricação própria (art. 319 do CP).", correta: false },
      { letra: "B", texto: "Advocacia administrativa (art. 321 do CP).", correta: false },
      { letra: "C", texto: "Corrupção passiva privilegiada (art. 317, § 2º, do CP).", correta: false },
      { letra: "D", texto: "Condescendência criminosa (art. 320 do CP).", correta: true },
      { letra: "E", texto: "Falsidade ideológica por omissão (art. 299 do CP).", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-014",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Cebraspe",
    orgao_nome: "PC-AL",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O crime de estelionato cometido mediante fraude eletrônica (art. 171, § 2º-B, do CP) tem sua pena majorada de um terço a dois terços se o crime for praticado mediante a utilização de servidor de informática mantido fora do território nacional.",
    explicacao: "CORRETO. O art. 171, § 2º-B do CP (incluído pela Lei 14.155/2021) prevê que a pena do estelionato eletrônico aumenta-se de 1/3 a 2/3 se o crime é praticado mediante a utilização de servidor mantido fora do território nacional ou mediante desvio de localização/identificador.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-015",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "FCC",
    orgao_nome: "PC-BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No sistema trifásico de dosimetria da pena privativa de liberdade adotado pelo Código Penal (art. 68 do CP), a fixação ocorre na seguinte ordem sucessiva:",
    explicacao: "Gabarito: A. Art. 68 do CP: O juiz fixa a pena-base com base nas circunstâncias judiciais do art. 59 (1ª fase); em seguida calcula as agravantes e atenuantes genéricas (2ª fase); e, por fim, aplica as causas de aumento (majorantes) e de diminuição (minorantes) da pena (3ª fase).",
    alternativas: [
      { letra: "A", texto: "1ª fase: circunstâncias judiciais (art. 59); 2ª fase: atenuantes e agravantes; 3ª fase: causas de diminuição e aumento de pena.", correta: true },
      { letra: "B", texto: "1ª fase: atenuantes e agravantes; 2ª fase: causas de aumento e diminuição; 3ª fase: circunstâncias judiciais.", correta: false },
      { letra: "C", texto: "1ª fase: causas de aumento e diminuição; 2ª fase: circunstâncias judiciais; 3ª fase: atenuantes e agravantes.", correta: false },
      { letra: "D", texto: "1ª fase: fixação da pena definitiva; 2ª fase: substituição por restritiva de direitos; 3ª fase: regime prisional.", correta: false },
      { letra: "E", texto: "1ª fase: culpabilidade e dolo; 2ª fase: reincidência e confissão; 3ª fase: cálculo da fração do sursis.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-016",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "A prescrição da pretensão punitiva com base na pena in abstrato regula-se pelo máximo da pena privativa de liberdade cominada ao crime, verificando-se a redução desse prazo pela metade se o criminoso era, ao tempo do crime, menor de vinte e um anos, ou, na data da sentença, maior de setenta anos.",
    explicacao: "CORRETO. Conforme art. 109 c/c art. 115 do Código Penal: 'São reduzidos de metade os prazos de prescrição quando o criminoso era, ao tempo do crime, menor de 21 (vinte e um) anos, ou, na data da sentença, maior de 70 (setenta) anos'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-017",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Vunesp",
    orgao_nome: "PC-SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Configura causa de aumento de pena no crime de homicídio culposo na direção ou na atividade profissional:",
    explicacao: "Gabarito: C. Conforme art. 121, § 4º do Código Penal, no homicídio culposo, a pena é aumentada de 1/3 se o crime resulta de inobservância de regra técnica de profissão, arte ou ofício, ou se o agente deixa de prestar imediato socorro à vítima, não procura diminuir as consequências do seu ato, ou foge para evitar prisão em flagrante.",
    alternativas: [
      { letra: "A", texto: "O emprego de veneno, fogo, explosivo ou asfixia.", correta: false },
      { letra: "B", texto: "A prática do crime contra ascendente, descendente ou cônjuge no âmbito doméstico culposo.", correta: false },
      { letra: "C", texto: "A inobservância de regra técnica de profissão, arte ou ofício, ou a omissão de imediato socorro à vítima.", correta: true },
      { letra: "D", texto: "A traição, emboscada ou dissimulação mediante promessa de recompensa financeira.", correta: false },
      { letra: "E", texto: "O motivo fútil ou torpe verificado na culpa consciente.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-018",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Cebraspe",
    orgao_nome: "PC-PE",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O crime de desacato (art. 331 do CP) permanece plenamente compatível com a Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica), conforme entendimento consolidado pelo Supremo Tribunal Federal e pela Terceira Seção do Superior Tribunal de Justiça.",
    explicacao: "CORRETO. A 3ª Seção do STJ (HC 379.269/MS) e o Plenário do STF (ADPF 496) fixaram que a tipificação do crime de desacato não viola a liberdade de expressão nem a Convenção Americana sobre Direitos Humanos, visando proteger a função pública e a dignidade do aparelho estatal.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  }
];
