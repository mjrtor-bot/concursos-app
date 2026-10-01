import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.criminologia;
const aEscolas = TAXONOMIA.assuntos.escolas_criminologicas;
const aVitimologia = TAXONOMIA.assuntos.vitimologia;
const aPrevencao = TAXONOMIA.assuntos.prevencao_delito;

export const crimPart1 = [
  // 01
  {
    idSlug: "crim-l4-01",
    disciplina_id: dId,
    assunto_id: aEscolas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A Teoria da Associação Diferencial, desenvolvida pelo criminólogo Edwin Sutherland, sustenta que o comportamento criminoso não é inato nem decorre unicamente de desvantagens socioeconômicas, mas é aprendido por meio de processos de comunicação e interação no interior de grupos íntimos.",
    explicacao: "GABARITO: CERTO. A Teoria da Associação Diferencial de Edwin Sutherland estabelece que o crime é uma conduta aprendida em interação social com outras pessoas, mediante assimilação de técnicas e orientações normativas favoráveis à transgressão da lei (inclusive explicando o 'crime de colarinho branco').",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 02
  {
    idSlug: "crim-l4-02",
    disciplina_id: dId,
    assunto_id: aEscolas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A teoria criminológica de matriz interacionista que concebe o crime não como uma qualidade intrínseca do ato praticado pelo agente, mas como o resultado de um processo de estigmatização e rotulação formal exercido pelas instâncias oficiais de controle social (polícia, justiça penal), denomina-se:",
    explicacao: "GABARITO: Letra B. Trata-se da Teoria do Etiquetamento ou Rotulação Social (Labelling Approach), desenvolvida por autores como Howard Becker e Edwin Lemert, que diferencia o desvio primário do desvio secundário (estigma consolidado pelo sistema penal).",
    alternativas: [
      { letra: "A", texto: "Teoria da Anomia.", correta: false },
      { letra: "B", texto: "Labelling Approach (Teoria do Etiquetamento).", correta: true },
      { letra: "C", texto: "Teoria Ecológica de Chicago.", correta: false },
      { letra: "D", texto: "Teoria da Coação Psicológica.", correta: false },
      { letra: "E", texto: "Escola Positiva Antropológica.", correta: false }
    ]
  },
  // 03
  {
    idSlug: "crim-l4-03",
    disciplina_id: dId,
    assunto_id: aVitimologia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A vitimização secundária (ou sobrevitimização) consiste no sofrimento adicional imposto à vítima pelo próprio funcionamento das instâncias formais de controle social (polícia, perícia, tribunais), resultante da burocracia, interrogatórios reiterados e desrespeito à sua privacidade.",
    explicacao: "GABARITO: CERTO. A vitimização primária é o dano sofrido diretamente com a prática do delito. A secundária (sobrevitimização) é o sofrimento gerado pelo contato frio, burocrático e insensível dos órgãos formais de persecução penal com a vítima. A terciária decorre da rejeição social/comunitária sofrida pela vítima.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 04
  {
    idSlug: "crim-l4-04",
    disciplina_id: dId,
    assunto_id: aEscolas,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Na história do pensamento criminológico, a Escola Clássica (representada por Cesare Beccaria e Francesco Carrara) tinha como premissas fundamentais:",
    explicacao: "GABARITO: Letra A. A Escola Clássica fundava-se no livre-arbítrio do ser humano (o criminoso escolhe delinquir com base no cálculo racional de dor e prazer), na concepção do crime como entidade jurídica (violação do pacto social) e na pena de caráter retributivo e proporcional ao dano causado.",
    alternativas: [
      { letra: "A", texto: "O livre-arbítrio do homem, o crime concebido como entidade jurídica e a pena de caráter proporcional e retributivo.", correta: true },
      { letra: "B", texto: "O determinismo biológico absoluto e a aplicação de medidas de segurança por tempo indeterminado.", correta: false },
      { letra: "C", texto: "A investigação do crânio atávico e a teoria do criminoso nato.", correta: false },
      { letra: "D", texto: "A substituição total do direito penal pela sociologia médica preventiva.", correta: false },
      { letra: "E", texto: "O abolicionismo penal puro e a despenalização irrestrita de todas as condutas.", correta: false }
    ]
  },
  // 05
  {
    idSlug: "crim-l4-05",
    disciplina_id: dId,
    assunto_id: aVitimologia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A chamada 'Cifra Dourada' na criminologia contemporânea refere-se ao conjunto de crimes praticados pelo poder econômico e de colarinho branco (delitos financeiros, lavagem de dinheiro, corrupção corporativa) que raramente são investigados ou punidos pelo sistema penal tradicional.",
    explicacao: "GABARITO: CERTO. Cifra Negra = crimes não registrados/desconhecidos pela polícia; Cifra Dourada = crimes de colarinho branco e da elite econômica que desfrutam de impunidade sistêmica; Cifra Rosa = crimes de intolerância/violência homofóbica e de gênero não notificados; Cifra Verde = crimes ambientais não detectados.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 06
  {
    idSlug: "crim-l4-06",
    disciplina_id: dId,
    assunto_id: aEscolas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Teoria da Anomia, estruturada inicialmente por Émile Durkheim e aprofundada por Robert K. Merton na sociologia criminal norte-americana, sustenta que o crime decorre de:",
    explicacao: "GABARITO: Letra C. Para Merton, a anomia resulta da assimetria ou descompasso estrutural entre as metas culturais propostas pela sociedade (como sucesso material/financeiro) e os meios institucionais e legítimos disponibilizados aos indivíduos para atingi-las.",
    alternativas: [
      { letra: "A", texto: "Patologias cromossômicas e anomalias endócrinas congênitas dos infratores.", correta: false },
      { letra: "B", texto: "Falta de iluminação pública e desordem urbana imediata.", correta: false },
      { letra: "C", texto: "Uma dissonância ou descompasso entre as metas culturais de sucesso impostas pela sociedade e os meios legítimos disponíveis para alcançá-las.", correta: true },
      { letra: "D", texto: "Influência nefasta do cinema e dos meios de comunicação de massa.", correta: false },
      { letra: "E", texto: "Contágio moral decorrente do encarceramento em regime aberto.", correta: false }
    ]
  },
  // 07
  {
    idSlug: "crim-l4-07",
    disciplina_id: dId,
    assunto_id: aPrevencao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A prevenção criminal primária atua nas origens e raízes socioculturais e econômicas do delito, mediante políticas públicas de longo alcance direcionadas à melhoria da educação, moradia, trabalho, saúde e bem-estar de toda a coletividade.",
    explicacao: "GABARITO: CERTO. A prevenção primária foca nas causas estruturais do delito (educação, emprego, qualidade de vida de longo prazo). A secundária atua quando o perigo de criminalidade se manifesta em grupos de risco (policiamento direcionado, programas em áreas conflagradas). A terciária atua sobre o indivíduo apenado para evitar a reincidência.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 08
  {
    idSlug: "crim-l4-08",
    disciplina_id: dId,
    assunto_id: aVitimologia,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Na classificação vitimológica clássica proposta por Benjamin Mendelsohn, a vítima que não concorre de nenhuma forma para a eclosão do delito, sendo totalmente inocente (ex.: vítima de bala perdida enquanto caminhava na calçada), classifica-se como:",
    explicacao: "GABARITO: Letra B. Na tipologia de Mendelsohn: Vítima completamente inocente (ou ideal) = não tem qualquer participação ou culpa; Vítima tão culpada quanto o infrator = age em conjunto/duelo; Vítima mais culpada que o infrator = provocadora; Vítima unicamente culpada = simuladora ou suicida.",
    alternativas: [
      { letra: "A", texto: "Vítima provocadora.", correta: false },
      { letra: "B", texto: "Vítima completamente inocente ou ideal.", correta: true },
      { letra: "C", texto: "Vítima culpada por imprudência profissional.", correta: false },
      { letra: "D", texto: "Vítima simuladora por dolo eventual.", correta: false },
      { letra: "E", texto: "Vítima agressora putativa.", correta: false }
    ]
  },
  // 09
  {
    idSlug: "crim-l4-09",
    disciplina_id: dId,
    assunto_id: aEscolas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Cesare Lombroso, um dos fundadores da Escola Positiva na Criminologia, formulou a teoria do criminoso nato a partir de estudos antropométricos e fisiológicos, sustentando que certos indivíduos nascem predispostos à delinquência em razão de atavismo biológico.",
    explicacao: "GABARITO: CERTO. Lombroso publicou 'O Homem Delinquente' (1876), desenvolvendo a teoria do atavismo e do 'criminoso nato', caracterizado por estigmas físicos anatômicos e degenerativos.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 10
  {
    idSlug: "crim-l4-10",
    disciplina_id: dId,
    assunto_id: aPrevencao,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A 'Teoria das Janelas Quebradas' (Broken Windows Theory), desenvolvida pelos pesquisadores James Q. Wilson e George L. Kelling em 1982, postula que:",
    explicacao: "GABARITO: Letra A. A Broken Windows Theory defende que pequenos sinais visíveis de desordem urbana e pequenas infrações não combatidas transmitem a sensação de abandono institucional e impunidade, servindo de catalisador para a proliferação de crimes graves e violentos (servindo de base para a política de Tolerância Zero).",
    alternativas: [
      { letra: "A", texto: "Pequenas desordens urbanas e incivilidades não reprimidas transmitem o sinal de ausência de controle social, incentivando a prática de crimes mais graves.", correta: true },
      { letra: "B", texto: "A arquitetura de edifícios públicos deve priorizar vidros blindados para desestimular ataques armados.", correta: false },
      { letra: "C", texto: "O policiamento comunitário deve concentrar-se exclusivamente em grandes operações ostensivas na zona rural.", correta: false },
      { letra: "D", texto: "A pena deve ser substituída por medidas alternativas de reparação do patrimônio arquitetônico.", correta: false },
      { letra: "E", texto: "O criminoso age motivado por perturbações visuais e estímulos cromáticos de ambientes fechados.", correta: false }
    ]
  },
  // 11
  {
    idSlug: "crim-l4-11",
    disciplina_id: dId,
    assunto_id: aEscolas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A Escola de Chicago (ou Teoria Ecológica) destacou a influência do meio ambiente urbano na criminalidade, defendendo que a desorganização social presente em determinadas zonas urbanas em transição e deterioradas é o principal vetor criminógeno, e não traços biológicos individuais.",
    explicacao: "GABARITO: CERTO. Autores como Park, Burgess, Shaw e McKay demonstraram que certas áreas urbanas (zonas de transição marcadas por deterioração e rotatividade populacional) apresentavam altos índices de delinquência independentemente da etnia dos grupos que por ali passavam.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 12
  {
    idSlug: "crim-l4-12",
    disciplina_id: dId,
    assunto_id: aVitimologia,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O fenômeno psicológico em que uma vítima submetida a situação prolongada de cativeiro ou sequestro desenvolve laços afetivos, empatia e cumplicidade com o seu próprio sequestrador denomina-se:",
    explicacao: "GABARITO: Letra B. Trata-se da Síndrome de Estocolmo, resposta psicológica inconsciente observada em situações de extrema tensão e cativeiro, na qual a vítima passa a simpatizar com os agressores e a justificar seus atos.",
    alternativas: [
      { letra: "A", texto: "Síndrome de Münchhausen.", correta: false },
      { letra: "B", texto: "Síndrome de Estocolmo.", correta: true },
      { letra: "C", texto: "Síndrome de Londres.", correta: false },
      { letra: "D", texto: "Síndrome de Burnout carcerário.", correta: false },
      { letra: "E", texto: "Síndrome de Capgras.", correta: false }
    ]
  },
  // 13
  {
    idSlug: "crim-l4-13",
    disciplina_id: dId,
    assunto_id: aPrevencao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A prevenção criminal terciária é voltada exclusivamente para a população carcerária e para os egressos do sistema prisional, tendo como objetivo central a prevenção da reincidência por meio da assistência jurídica, psicológica, profissionalização e reinserção social.",
    explicacao: "GABARITO: CERTO. A prevenção terciária incide sobre o condenado ou internado, visando à ressocialização e à neutralização do risco de reincidência delitiva após o cumprimento da pena.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  }
];
