import { TAXONOMIA } from "./taxonomia.mjs";

const ce = (idSlug, assunto_id, enunciado, correta, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.criminologia,
  assunto_id,
  banca_nome: "CEBRASPE",
  orgao_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Polícia Federal" : "Polícia Civil",
  cargo_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Delegado de Polícia Federal" : "Delegado de Polícia",
  ano: 2025,
  tipo: "certo_errado",
  dificuldade: "dificil",
  enunciado,
  alternativas: [
    { letra: "C", texto: "Certo", correta, explicacao_especifica: correta ? "Correto. Assertiva em estrita conformidade com a dogmática criminológica clássica e contemporânea." : "Incorreto. A assertiva confunde correntes criminológicas ou distorce conceitos essenciais." },
    { letra: "E", texto: "Errado", correta: !correta, explicacao_especifica: !correta ? "Correto. A proposição apresenta equívoco dogmático relevante sobre as escolas ou teorias criminológicas." : "Incorreto. A afirmativa reflete com precisão os postulados da Criminologia." }
  ],
  explicacao: `Gabarito: ${correta ? "Certo" : "Errado"}. ${explicacao}`
});

const me = (idSlug, assunto_id, enunciado, corretaLetra, alternativas, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.criminologia,
  assunto_id,
  banca_nome: "FGV",
  orgao_nome: "Polícia Civil",
  cargo_nome: "Delegado de Polícia",
  ano: 2024,
  tipo: "multipla_escolha",
  dificuldade: "dificil",
  enunciado,
  alternativas: alternativas.map(([letra, texto, just]) => ({ letra, texto, correta: letra === corretaLetra, explicacao_especifica: just })),
  explicacao: `Gabarito: ${corretaLetra}. ${explicacao}`
});

export const criminologiaPart1 = [
  ce("crim-b5-001", TAXONOMIA.assuntos.escolas_criminologicas,
    "A Criminologia é uma ciência empírica e interdisciplinar que se ocupa do estudo do crime, do criminoso, da vítima e dos mecanismos de controle social da conduta delitiva, diferenciando-se do Direito Penal por adotar o método indutivo e experimental baseado na observação fática da realidade social, enquanto a ciência penal adota o método dedutivo, normativo e axiológico.",
    true,
    "A Criminologia opera pelo método empírico-indutivo (análise dos fatos e fenômenos sociais), ao passo que o Direito Penal opera pelo método dogmático-dedutivo (análise da norma jurídica abstrata)."),

  me("crim-b5-002", TAXONOMIA.assuntos.escolas_criminologicas,
    "A respeito do confronto teórico entre a Escola Clássica e a Escola Positiva da Criminologia, assinale a afirmativa correta.",
    "A",
    [
      ["A", "A Escola Clássica concebe o delito como um ente puramente jurídico (infração à norma) e fundamenta a responsabilidade penal no livre-arbítrio individual do agente, ao passo que a Escola Positiva adota o determinismo biológico e social, concebendo o crime como fenômeno natural e a sanção como medida de defesa social proporcional à periculosidade do autor.", "Correta. Síntese dogmática precisa da contraposição entre o classicismo (Beccaria, Carrara) e o positivismo criminológico (Lombroso, Ferri, Garofalo)."],
      ["B", "Cesare Lombroso sustentava que o comportamento criminoso decorre exclusivamente da falta de leitura de clássicos literários.", "Incorreta. Lombroso formulou a teoria do criminoso nato baseada no atavismo e estigmas biológicos/morfológicos."],
      ["C", "Enrico Ferri rejeitou qualquer influência de fatores sociológicos, concentrando-se exclusivamente em anomalias cranianas.", "Incorreta. Ferri é o fundador da Sociologia Criminal, formulando a Lei da Saturação Criminal."],
      ["D", "A Escola Clássica defendia a aplicação de medidas de segurança por tempo indeterminado fundadas no estado perigoso do delinquente.", "Incorreta. O positivismo que defendia a periculosidade; os clássicos defendiam pena retributiva proporcional ao mal causado."],
      ["E", "Raffaele Garofalo foi o principal idealizador da abolição total das prisões e da anistia perpétua.", "Incorreta. Garofalo cunhou o conceito de 'delito natural' e defendia a temibilidade do delinquente."]
    ],
    "A Escola Clássica baseia-se no livre-arbítrio, na responsabilidade moral e na pena retributiva e proporcional. A Escola Positiva baseia-se no determinismo biopsicossocial, na responsabilidade social e na pena como medida de defesa social orientada à periculosidade."),

  ce("crim-b5-003", TAXONOMIA.assuntos.teorias_sociologicas,
    "A Teoria Ecológica (ou Escola de Chicago), formulada por autores como Robert Park, Ernest Burgess, Clifford Shaw e Henry McKay, sustentou que a criminalidade urbana concentra-se em determinadas zonas territoriais deterioradas da cidade (zonas de transição) devido à desorganização social, à precariedade habitacional e ao enfraquecimento das instituições primárias de controle comunitário, e não em decorrência de anomalias biológicas individuais dos moradores.",
    true,
    "A Escola de Chicago transferiu o foco da Criminologia das características individuais do criminoso para a dinâmica espacial e ecológica das grandes metrópoles e da desorganização social urbana."),

  me("crim-b5-004", TAXONOMIA.assuntos.teorias_sociologicas,
    "Segundo a Teoria da Anomia formulada por Robert K. Merton na sociologia funcionalista norte-americana, a conduta delitiva surge prioritariamente quando:",
    "B",
    [
      ["A", "o indivíduo sofre de desequilíbrio hormonal congênito transmitido geneticamente por linhagem paterna.", "Incorreta. Merton rejeita explicações biológicas."],
      ["B", "ocorre uma dissociação estrutural entre as metas culturais universalmente valorizadas pela sociedade (como o sucesso financeiro) e a disponibilidade real de meios institucionais e legítimos para que todos os estratos sociais alcancem tais objetivos, gerando tensão estrutural e respostas adaptativas desviantes (como a 'inovação').", "Correta. É o núcleo da Teoria da Anomia de Robert Merton."],
      ["C", "o Estado abole todas as normas tributárias e privatiza integralmente as forças policiais.", "Incorreta. Não tem relação com anomia mertoniana."],
      ["D", "as vítimas recusam-se a registrar boletins de ocorrência por preconceito de classe.", "Incorreta. Trata da cifra negra, não de anomia."],
      ["E", "a polícia militar atua de forma preventiva em bairros nobres.", "Incorreta. Não aborda a tensão estrutural de Merton."]
    ],
    "Na tipologia anômica de Merton, a 'inovação' é a resposta típica do infrator que assimila as metas culturais de sucesso econômico, mas recorre a meios ilegítimos (crimes patrimoniais, corrupção) pela ausência de oportunidades estruturais legítimas de ascensão social."),

  ce("crim-b5-005", TAXONOMIA.assuntos.teorias_sociologicas,
    "Edwin Sutherland, ao desenvolver a Teoria da Associação Diferencial, demonstrou que o comportamento criminoso não é fruto de herança genética ou de pobreza exclusiva, mas é aprendido por meio de processos interativos de comunicação com grupos íntimos, formulando pioneiramente o conceito de 'crime de colarinho branco' (*white-collar crime*) para designar delitos econômicos e corporativos praticados por pessoas de respeitabilidade e alto status social no exercício de sua ocupação.",
    true,
    "Sutherland revolucionou a criminologia ao romper o paradigma de que o crime era exclusivo das classes desfavorecidas, demonstrando o aprendizado social de condutas ilícitas corporativas e financeiras."),

  me("crim-b5-006", TAXONOMIA.assuntos.teorias_sociologicas,
    "As 'Técnicas de Neutralização', formuladas por Gresham Sykes e David Matza, explicam os mecanismos psicológicos e discursivos utilizados por delinquentes para justificar moralmente seus atos ilícitos e mitigar a culpa social. Assinale a opção que exemplifica a técnica de 'Condenação dos que condenam':",
    "C",
    [
      ["A", "O infrator afirma que praticou o roubo apenas porque estava sob efeito de hipnose forçada.", "Incorreta. Trata-se de negação da responsabilidade."],
      ["B", "O autor alega que a seguradora rica cobrirá o prejuízo financeiro e ninguém sofreu dano real.", "Incorreta. Trata-se de negação do dano/prejuízo."],
      ["C", "O criminoso sustenta que os policiais que o prenderam e os juízes que o processam são todos corruptos e hipócritas, transferindo o foco acusatório para os órgãos de controle formal.", "Correta. É a clássica técnica de 'condenação dos que condenam' (*condemnation of the condemners*)."],
      ["D", "O agente alega que a vítima merecia ser agredida em virtude de sua vestimenta provocativa.", "Incorreta. Trata-se de negação da vítima."],
      ["E", "O membro de facção afirma que agiu exclusivamente por lealdade incondicional ao estatuto de seus irmãos de grupo.", "Incorreta. Trata-se de apelo a lealdades superiores."]
    ],
    "As 5 técnicas de neutralização de Sykes e Matza são: 1) Negação da responsabilidade; 2) Negação do dano; 3) Negação da vítima; 4) Condenação dos que condenam (desqualificar acusadores e policiais); 5) Apelo a lealdades superiores (lealdade à gangue ou família)."),

  ce("crim-b5-007", TAXONOMIA.assuntos.teorias_sociologicas,
    "A Teoria das Janelas Quebradas (*Broken Windows Theory*), desenvolvida por James Q. Wilson e George L. Kelling em 1982, estabelece que a tolerância comunitária com pequenas desordens urbanas visíveis e incivilidades (como vidraças quebradas, pichações e vadiagem) transmite a percepção de abandono e ausência de autoridade, atraindo progressivamente a ocorrência de crimes violentos e mais graves.",
    true,
    "A Teoria das Janelas Quebradas embasou a política de segurança pública de 'Tolerância Zero' em Nova York, defendendo a repressão rigorosa a pequenas infrações para conter a espiral de criminalidade violenta."),

  me("crim-b5-008", TAXONOMIA.assuntos.teorias_sociologicas,
    "A Teoria do Etiquetamento (*Labelling Approach*, da Reação Social ou da Rotulação), desenvolvida por Howard Becker e Edwin Lemert, sustenta que:",
    "A",
    [
      ["A", "a criminalidade não é uma qualidade biológica inerente a determinadas condutas ou pessoas, mas sim um status social atribuído seletivamente pelos órgãos de controle formal (polícia, promotoria, judiciário) aos indivíduos estigmatizados, diferenciando o desvio primário (a infração originária) do desvio secundário (a assunção da identidade de delinquente e a carreira criminosa consolidada após a reação estigmatizante do sistema penal).", "Correta. É o postulado central do Labelling Approach."],
      ["B", "todo desvio de conduta é erradicado instantaneamente assim que o indivíduo recebe a sentença condenatória penal transitada em julgado.", "Incorreta. O etiquetamento afirma o oposto: a punição formal reforça a carreira criminosa."],
      ["C", "o controle social informal exercido pela família é a única causa geradora de homicídios passionais.", "Incorreta. A teoria analisa a reação social do sistema formal de justiça."],
      ["D", "a rotulação de criminoso decorre unicamente de testes psicotécnicos aplicados em creches públicas.", "Incorreta. Não versa sobre psicotécnicos infantis."],
      ["E", "a prisão é o meio mais eficiente de integração comunitária e neutralização de preconceitos sociais.", "Incorreta. A teoria demonstra o efeito criminógeno e marginalizante da prisão."]
    ],
    "O Labelling Approach estuda a seletividade dos órgãos de controle e a criação social do criminoso através do estigma. Lemert diferenciou o desvio primário (ato inicial) do desvio secundário (estabilização do papel desviante decorrente da rotulação pública)."),

  ce("crim-b5-009", TAXONOMIA.assuntos.vitimologia,
    "Na classificação vitimológica de Benjamin Mendelsohn, a 'vítima completamente inocente' (ou vítima ideal) é aquela que não teve nenhuma participação provocadora ou colaborativa no resultado lesivo gerado pelo agente infrator, ao passo que a 'vítima tão culpada quanto o infrator' (ou vítima voluntária) atua em cooperação consciente com o resultado, como ocorre na eutanásia consentida ou no pacto de suicídio conjunto.",
    true,
    "Mendelsohn dividiu as vítimas em três grandes grupos de culpabilidade: 1) Vítimas inocentes; 2) Vítimas com grau de culpa (menor, igual ou maior); 3) Vítimas unicamente culpadas (como agressor simulador)."),

  me("crim-b5-010", TAXONOMIA.assuntos.vitimologia,
    "A respeito dos níveis de vitimização estudados pela Vitimologia moderna, a 'vitimização secundária' (também denominada sobrevitimização ou revitimização) caracteriza-se:",
    "B",
    [
      ["A", "pelo dano físico ou material inicial suportado pela vítima no exato momento da execução do crime.", "Incorreta. Esse é o conceito de vitimização primária."],
      ["B", "pelo sofrimento adicional, constrangimento, humilhação e descaso institucional infligidos à vítima pelos próprios órgãos estatais de persecução penal (polícia, perícia, Ministério Público e Poder Judiciário) durante as fases de investigação e processo criminal.", "Correta. É a definição exata de vitimização secundária."],
      ["C", "pela segregação social e abandono que a vítima sofre por parte de seus familiares e vizinhos.", "Incorreta. Esse é o conceito de vitimização terciária."],
      ["D", "pela reparação integral em dinheiro paga voluntariamente pelo condenado antes da denúncia.", "Incorreta. Não constitui processo de vitimização."],
      ["E", "pela perda compulsória do direito de voto em crimes eleitorais.", "Incorreta. Trata-se de efeito da condenação, não de vitimização secundária."]
    ],
    "Vitimização primária: dano direto causado pelo crime. Vitimização secundária (sobrevitimização): sofrimento institucional imposto pela polícia/judiciário. Vitimização terciária: estigma, preconceito e isolamento social infligidos pela sociedade e meio familiar."),

  ce("crim-b5-011", TAXONOMIA.assuntos.prevencao_delito,
    "A Prevenção Primária do delito atua nas raízes estruturais da criminalidade por meio de políticas públicas de longo prazo voltadas à educação, à saúde, ao emprego, à moradia e à garantia dos direitos sociais universais, dirigindo-se à população em geral antes que qualquer conflito criminoso se manifeste.",
    true,
    "A prevenção primária foca nas causas profundas da criminalidade através do bem-estar social universal; a secundária foca em grupos e locais de risco; e a terciária foca na reabilitação do apenado para evitar a reincidência."),

  me("crim-b5-012", TAXONOMIA.assuntos.prevencao_delito,
    "A respeito dos modelos teóricos de reação social ao delito, o 'Modelo Integrador' (ou de Justiça Restaurativa) diferencia-se do 'Modelo Dissuasório Clássico' porque:",
    "D",
    [
      ["A", "preconiza o aumento exponencial das penas privativas de liberdade em presídios de isolamento total.", "Incorreta. Esse é o modelo de dissuasão clássico/punitivista."],
      ["B", "elimina qualquer forma de reparação material ou moral à vítima sobrevivente.", "Incorreta. A centralidade da vítima e sua reparação é a essência da justiça restaurativa."],
      ["C", "exige a intervenção militar nas decisões do júri popular.", "Incorreta. Não tem correlação com justiça restaurativa."],
      ["D", "busca a pacificação social por meio da reparação dos danos à vítima, do diálogo voluntário entre ofensor, vítima e comunidade, e da responsabilização ativa do autor do fato, visando restaurar os laços rompidos pelo crime.", "Correta. Princípios basilares da Justiça Restaurativa."],
      ["E", "autoriza a vingança privada sumária mediada por linchamentos públicos.", "Incorreta. A justiça restaurativa é processo dialógico qualificado e institucional."]
    ],
    "O Modelo Integrador/Restaurativo não busca meramente punir com dor (retribuição), mas promover a reparação do dano, o empoderamento da vítima e a reconciliação comunitária."),

  ce("crim-b5-013", TAXONOMIA.assuntos.escolas_criminologicas,
    "O conceito de 'cifra negra' da criminalidade refere-se à porcentagem de crimes efetivamente ocorridos na sociedade que não chegam ao conhecimento oficial dos órgãos estatais de persecução penal (polícia e Ministério Público), não constando das estatísticas criminais formais.",
    true,
    "Cifra negra é a diferença entre a criminalidade real e a criminalidade formalmente registrada pelas polícias e pelo Estado.")
];
