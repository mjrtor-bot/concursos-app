import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.criminologia;
const aEscolas = TAXONOMIA.assuntos.escolas_criminologicas;
const aVitimologia = TAXONOMIA.assuntos.vitimologia;
const aPrevencao = TAXONOMIA.assuntos.prevencao_delito;

export const crimPart2 = [
  // 14
  {
    idSlug: "crim-l4-14",
    disciplina_id: dId,
    assunto_id: aEscolas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Teoria da Subcultura Delinquente, formulada por Albert Cohen ao estudar gangues juvenis nos Estados Unidos, assevera que a conduta delituosa dos jovens de classes desfavorecidas caracteriza-se fundamentalmente por ser:",
    explicacao: "GABARITO: Letra A. Para Albert Cohen, a subcultura delinquente juvenil é não-utilitária, maliciosa e negativista (inversão dos valores da classe média), buscando status e reconhecimento no grupo em vez de proveito puramente econômico racional.",
    alternativas: [
      { letra: "A", texto: "Não-utilitária, maliciosa e negativista.", correta: true },
      { letra: "B", texto: "Racional, utilitarista e estritamente financeira.", correta: false },
      { letra: "C", texto: "Determinada exclusivamente por defeitos cromossômicos congênitos.", correta: false },
      { letra: "D", texto: "Focada no estrito cumprimento do dever legal familiar.", correta: false },
      { letra: "E", texto: "Isenta de qualquer influência do grupo social de pares.", correta: false }
    ]
  },
  // 15
  {
    idSlug: "crim-l4-15",
    disciplina_id: dId,
    assunto_id: aVitimologia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na vitimologia e estatística criminal, a 'Cifra Cinza' corresponde aos crimes que chegam ao conhecimento das autoridades policiais (mediante registro formal de ocorrência), mas que, por motivos processuais, desinteresse da vítima ou conciliação informal, não chegam a instaurar inquérito policial ou ação penal.",
    explicacao: "GABARITO: CERTO. A Cifra Cinza compreende as infrações penais formalmente registradas nos boletins de ocorrência policial, porém não solucionadas ou arquivadas sem instauração de processo/inquérito penal formal.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 16
  {
    idSlug: "crim-l4-16",
    disciplina_id: dId,
    assunto_id: aPrevencao,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O modelo de resposta ao fenômeno criminal que prioriza a reparação do dano causado à vítima, a responsabilização ativa do ofensor e o restabelecimento da paz comunitária por meio do diálogo e do consenso é denominado:",
    explicacao: "GABARITO: Letra C. O Modelo Integrador (ou Restaurativo / Justiça Restaurativa) foca na composição do conflito, superando a lógica puramente retributiva/punitiva estatal para envolver autor, vítima e comunidade na reparação do dano.",
    alternativas: [
      { letra: "A", texto: "Modelo Clássico Retributivo.", correta: false },
      { letra: "B", texto: "Modelo Dissuasório Tradicional.", correta: false },
      { letra: "C", texto: "Modelo Integrador ou Restaurativo.", correta: true },
      { letra: "D", texto: "Modelo Inquisitorial Eclético.", correta: false },
      { letra: "E", texto: "Modelo de Neutralização Seletiva.", correta: false }
    ]
  },
  // 17
  {
    idSlug: "crim-l4-17",
    disciplina_id: dId,
    assunto_id: aVitimologia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A vitimização terciária decorre da discriminação, rejeição, culpabilização e abandono sofridos pela vítima por parte de seu próprio meio social, comunitário e familiar após a ocorrência do crime.",
    explicacao: "GABARITO: CERTO. A vitimização primária é o dano do crime em si; a secundária é a revitimização burocrática estatal; a terciária é a rejeição, o estigma e a marginalização perpetrados pela própria família, amigos e meio social contra a vítima.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 18
  {
    idSlug: "crim-l4-18",
    disciplina_id: dId,
    assunto_id: aEscolas,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Enrico Ferri, destacado expoente da Escola Positiva e criador da Sociologia Criminal, formulou a célebre 'Lei da Saturação Criminal', segundo a qual:",
    explicacao: "GABARITO: Letra B. A Lei da Saturação Criminal de Ferri estabelece que em um determinado meio social, sob certas condições físicas e individuais dadas, comete-se um número determinado e fixo de crimes, nem um a mais, nem um a menos, tal como na saturação química de líquidos.",
    alternativas: [
      { letra: "A", texto: "O aumento das penas em regime fechado elimina automaticamente todos os delitos patrimoniais.", correta: false },
      { letra: "B", texto: "Em um determinado meio social, com certas condições individuais e físicas, comete-se um número exato e constante de crimes.", correta: true },
      { letra: "C", texto: "O livre-arbítrio é o único fator determinante da conduta humana delituosa.", correta: false },
      { letra: "D", texto: "O crime decorre exclusivamente da contaminação biológica em presídios superlotados.", correta: false },
      { letra: "E", texto: "A pena deve ter natureza exclusivamente retributiva e estritamente moral.", correta: false }
    ]
  },
  // 19
  {
    idSlug: "crim-l4-19",
    disciplina_id: dId,
    assunto_id: aEscolas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Raffaele Garofalo, jurista da Escola Positiva, cunhou o conceito de 'Delito Natural', definindo-o como a lesão àquela parte do senso moral tradicional que consiste nos sentimentos altruístas fundamentais de piedade e de probidade.",
    explicacao: "GABARITO: CERTO. Garofalo introduziu a noção sociológico-jurídica de delito natural: toda conduta que ofende a média dos sentimentos morais de piedade (compaixão pelo sofrimento alheio) e de probidade (respeito aos direitos de propriedade e justiça).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 20
  {
    idSlug: "crim-l4-20",
    disciplina_id: dId,
    assunto_id: aPrevencao,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A prevenção criminal secundária atua quando o perigo criminal já se manifesta concretamente ou em grupos vulneráveis de risco iminente, manifestando-se precipuamente por meio de:",
    explicacao: "GABARITO: Letra D. A prevenção secundária opera a médio e curto prazo sobre grupos vulneráveis e áreas de criminalidade latente, utilizando policiamento ostensivo georreferenciado, programas de segurança urbana setoriais e controle de pontos críticos.",
    alternativas: [
      { letra: "A", texto: "Políticas universais de erradicação da pobreza infantil a longo prazo.", correta: false },
      { letra: "B", texto: "Concessão de indulto natalino e livramento condicional aos apenados reincidentes.", correta: false },
      { letra: "C", texto: "Reforma psiquiátrica em manicômios judiciais desativados.", correta: false },
      { letra: "D", texto: "Ações policiais ostensivas direcionadas a zonas de alto risco e programas específicos para jovens em situação de vulnerabilidade.", correta: true },
      { letra: "E", texto: "Despenalização legislativa irrestrita de crimes hediondos.", correta: false }
    ]
  },
  // 21
  {
    idSlug: "crim-l4-21",
    disciplina_id: dId,
    assunto_id: aEscolas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A Criminologia Crítica (ou Radical), influenciada pelo materialismo histórico, concebe o sistema penal e as normas de incriminação como instrumentos ideológicos e de força utilizados pelas classes dominantes para proteger a propriedade privada e manter a estrutura capitalista de desigualdade social.",
    explicacao: "GABARITO: CERTO. A criminologia crítica desloca o foco do indivíduo criminoso para os mecanismos de criminalização e controle social, denunciando a seletividade punitiva em favor do capital e das classes hegemônicas.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 22
  {
    idSlug: "crim-l4-22",
    disciplina_id: dId,
    assunto_id: aVitimologia,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Na tipologia vitimológica de Benjamin Mendelsohn, a vítima que incita, desafia ou agride previamente o autor do fato, desencadeando a sua reação lesiva desproporcional, é classificada como:",
    explicacao: "GABARITO: Letra B. Para Mendelsohn, a 'vítima mais culpada que o infrator' ou 'vítima provocadora' é aquela cuja conduta voluntária prévia estimula ou precipita o cometimento da infração penal.",
    alternativas: [
      { letra: "A", texto: "Vítima ideal ou completamente inocente.", correta: false },
      { letra: "B", texto: "Vítima provocadora (ou mais culpada que o infrator).", correta: true },
      { letra: "C", texto: "Vítima unicamente culpada simuladora.", correta: false },
      { letra: "D", texto: "Vítima difusa indeterminada.", correta: false },
      { letra: "E", texto: "Vítima institucional corporativa.", correta: false }
    ]
  },
  // 23
  {
    idSlug: "crim-l4-23",
    disciplina_id: dId,
    assunto_id: aVitimologia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A chamada 'Cifra Amarela' na criminologia diz respeito aos delitos cometidos por agentes públicos no exercício de suas funções funcionais (como atos de corrupção, abuso de autoridade e violência policial) que não são denunciados pelas vítimas em razão do receio de represálias estatais.",
    explicacao: "GABARITO: CERTO. A Cifra Amarela representa as infrações penais perpetradas por funcionários e agentes do Estado (especialmente abusos policiais e corrupção) que deixam de ser notificadas por medo de retaliação.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 24
  {
    idSlug: "crim-l4-24",
    disciplina_id: dId,
    assunto_id: aEscolas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Terza Scuola Italiana (Escola Eclética Italiana), representada por Bernardino Alimena e Emanuele Carnevale, buscou conciliar as Escolas Clássica e Positiva ao sustentar que:",
    explicacao: "GABARITO: Letra A. A Terza Scuola acolheu a distinção entre imputáveis (aos quais se aplica pena retributiva proporcional) e inimputáveis (aos quais se aplicam medidas de segurança de defesa social), rejeitando o livre-arbítrio absoluto e o criminoso nato puro.",
    alternativas: [
      { letra: "A", texto: "Deve-se distinguir entre imputáveis (sujeitos à pena) e inimputáveis (sujeitos a medidas de segurança), rejeitando tanto o criminoso nato puro quanto o livre-arbítrio absoluto.", correta: true },
      { letra: "B", texto: "O direito penal deve ser imediatamente substituído pela biometria forense obrigatória.", correta: false },
      { letra: "C", texto: "O livre-arbítrio é dogma inegociável aplicável universalmente a sãos e alienados mentais.", correta: false },
      { letra: "D", texto: "Todas as infrações penais decorrem exclusivamente da contaminação do solo urbano.", correta: false },
      { letra: "E", texto: "A pena deve ser aplicada exclusivamente com finalidade de vingança privada da vítima.", correta: false }
    ]
  },
  // 25
  {
    idSlug: "crim-l4-25",
    disciplina_id: dId,
    assunto_id: aEscolas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com a Teoria da Neutralização de Gresham Sykes e David Matza, os delinquentes frequentemente compartilham os valores convencionais da sociedade, mas utilizam justificativas psicológicas e morais prévias (como a negação da responsabilidade, a negação do dano e a negação da vítima) para neutralizar a culpa e legitimar a prática do crime.",
    explicacao: "GABARITO: CERTO. A Teoria das Técnicas de Neutralização de Sykes e Matza demonstra que os jovens infratores não rejeitam integralmente a moralidade dominante, mas aprendem técnicas cognitivas de autojustificação ('eles mereciam', 'ninguém se machucou', 'eu fui forçado pelas circunstâncias') para desativar os freios morais.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  }
];
