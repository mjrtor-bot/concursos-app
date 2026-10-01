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
    { letra: "C", texto: "Certo", correta, explicacao_especifica: correta ? "Correto. Assertiva que reflete com fidelidade as teorias sociológicas, vitimológicas e de controle social da Criminologia." : "Incorreto. A assertiva distorce a teoria criminológica citada." },
    { letra: "E", texto: "Errado", correta: !correta, explicacao_especifica: !correta ? "Correto. A proposição apresenta equívoco conceitual manifesto." : "Incorreto. A afirmativa encontra esteio na doutrina criminológica consolidada." }
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

export const criminologiaPart2 = [
  ce("crim-b5-014", TAXONOMIA.assuntos.escolas_criminologicas,
    "No estudo das cifras da criminalidade, a 'cifra dourada' designa o percentual de delitos econômicos, financeiros e tributários praticados pela elite socioeconômica (*white-collar crimes*) que não chegam a ser descobertos, investigados ou punidos pelo sistema de justiça criminal em razão do poder de influência dos autores e da complexidade de sua ocultação.",
    true,
    "A cifra dourada refere-se à impunidade dos crimes praticados pelas elites do poder econômico e político (crimes de colarinho branco)."),

  me("crim-b5-015", TAXONOMIA.assuntos.teorias_sociologicas,
    "A Teoria da Subcultura Delinquente, desenvolvida por Albert K. Cohen em sua clássica obra 'Delinquent Boys' (1955), explica a criminalidade de gangues juvenis da classe trabalhadora sustentando que ela decorre:",
    "B",
    [
      ["A", "de distúrbios neurológicos causados por intoxicação alimentar na infância.", "Incorreta. Explicação biológica rejeitada pela sociologia criminológica."],
      ["B", "da 'frustração de status' (*status frustration*) vivenciada por jovens de classes baixas que, ao serem avaliados nas escolas sob os padrões e valores da classe média, sentem-se marginalizados e reagem criando uma subcultura com valores invertidos, caracterizada por condutas não utilitárias, maliciosas e negativistas.", "Correta. É o núcleo teórico da subcultura delinquente de Albert Cohen."],
      ["C", "do cálculo puramente financeiro e utilitário de maximização de lucros tributários.", "Incorreta. A delinquência juvenil descrita por Cohen é expressamente não utilitária (roubam por status e desafio, não por necessidade financeira pura)."],
      ["D", "da atuação de organizações terroristas transnacionais de alta patente.", "Incorreta. Cohen estudou gangues juvenis urbanas locais."],
      ["E", "da ausência absoluta de policiamento ostensivo em áreas rurais isoladas.", "Incorreta. O estudo focou nos centros urbanos e nas escolas."]
    ],
    "Albert Cohen definiu a subcultura delinquente juvenil como não utilitária, maliciosa e negativista: os jovens invertem os valores da classe média (como pontualidade e respeito à autoridade) para alcançar reconhecimento e status perante seus pares na gangue."),

  ce("crim-b5-016", TAXONOMIA.assuntos.teorias_sociologicas,
    "A Criminologia Crítica (ou Radical/Dialética), tendo em Alessandro Baratta um de seus principais expoentes, contesta o mito da igualdade do Direito Penal, sustentando que o sistema penal atua como instrumento estrutural de reprodução das desigualdades sociais e manutenção da dominação das classes hegemônicas no modo de produção capitalista, operando por meio de uma seletividade criminalizadora primária e secundária.",
    true,
    "A Criminologia Crítica desmistifica a neutralidade do Direito Penal e evidencia a seletividade estrutural que pune prioritariamente os estratos sociais marginalizados."),

  me("crim-b5-017", TAXONOMIA.assuntos.escolas_criminologicas,
    "A respeito do Controle Social na Criminologia, assinale a opção que distingue corretamente os mecanismos de controle formal e informal:",
    "A",
    [
      ["A", "O controle social informal é exercido de maneira espontânea pelas instituições da sociedade civil (família, escola, religião, profissão e vizinhança) durante o processo primário de socialização, ao passo que o controle social formal é exercido de modo coercitivo e institucionalizado pelas instâncias oficiais do Estado (Polícia, Ministério Público, Poder Judiciário e Administração Penitenciária) quando falham os controles informais.", "Correta. Distinção clássica entre controle social formal e informal."],
      ["B", "O controle social formal é exercido exclusivamente pelos pais e responsáveis no âmbito doméstico.", "Incorreta. A família integra o controle social informal."],
      ["C", "O controle social informal possui poder legal de expedir mandados de busca e prisão cautelar.", "Incorreta. Mandados são atos exclusivos do controle social formal estatal."],
      ["D", "As forças policiais civis e militares integram o controle social informal subsidiário.", "Incorreta. As polícias são agências centrais do controle social formal."],
      ["E", "O controle social formal atua sem qualquer respaldo em leis escritas ou procedimentos processuais.", "Incorreta. O controle formal opera estritamente sob o império da lei processual e penal."]
    ],
    "O controle social divide-se em Informal (família, escola, igreja, comunidade) e Formal (polícia, MP, Judiciário e sistema prisional), com relação de subsidiariedade do formal em face do informal."),

  ce("crim-b5-018", TAXONOMIA.assuntos.teorias_sociologicas,
    "A Teoria das Atividades Rotineiras (*Routine Activity Theory*), formulada por Lawrence Cohen e Marcus Felson em 1979 na perspectiva da escolha racional e da criminologia ambiental, estabelece que o crime predatório ocorre quando há a convergência espaço-temporal de três elementos essenciais: um ofensor motivado (*motivated offender*), um alvo adequado ou atraente (*suitable target*) e a ausência de um guardião capaz (*absence of a capable guardian*).",
    true,
    "A teoria das atividades rotineiras explica como mudanças nos padrões diários da vida moderna (como casas vazias e transporte de bens valiosos portáteis) criam oportunidades para o crime ao reunir ofensor, alvo e ausência de guardião no mesmo espaço e tempo."),

  me("crim-b5-019", TAXONOMIA.assuntos.teorias_sociologicas,
    "A Teoria do Autocontrole (ou Teoria Geral do Crime), apresentada por Michael Gottfredson e Travis Hirschi em 1990, sustenta que o fator explicativo primordial para o cometimento de delitos e comportamentos análogos ao desvio é:",
    "C",
    [
      ["A", "a existência de uma anomalia genética recessiva localizada no cromossomo 21.", "Incorreta. Rejeita o determinismo biológico."],
      ["B", "o consumo compulsório de alimentos com alto teor calórico na adolescência.", "Incorreta. Proposição absurda."],
      ["C", "o baixo nível de autocontrole individual (*low self-control*), caracterizado por impulsividade, busca de gratificação imediata e insensibilidade, formado na primeira infância devido a falhas na supervisão, monitoramento e disciplina por parte dos pais.", "Correta. É o postulado central da Teoria Geral do Crime de Gottfredson e Hirschi."],
      ["D", "o desemprego gerado pela automação de linhas industriais de montagem.", "Incorreta. Não constitui a causa principal da teoria do autocontrole."],
      ["E", "a hiperinflação monetária transitória em países subdesenvolvidos.", "Incorreta. A teoria foca no traço individual estável de baixo autocontrole."]
    ],
    "Para Gottfredson e Hirschi, o baixo autocontrole, moldado nos primeiros anos de vida pela socialização familiar ineficaz, é a causa primária da propensão ao crime e à busca de prazeres imediatos de curto prazo sem medir riscos futuros."),

  ce("crim-b5-020", TAXONOMIA.assuntos.prevencao_delito,
    "A Prevenção Situacional do Delito, sistematizada por Ronald V. Clarke, visa reduzir as oportunidades para a prática de crimes mediante modificações no ambiente físico imediato, atuando através de cinco estratégias principais: aumentar o esforço do agressor, aumentar o risco percebido da ação, reduzir a recompensa esperada, reduzir as provocações ambientais e remover as desculpas e justificativas para o desvio.",
    true,
    "A prevenção situacional não busca tratar a personalidade do delinquente, mas alterar o ambiente concreto para tornar o crime mais arriscado, difícil e pouco compensador financeiramente."),

  me("crim-b5-021", TAXONOMIA.assuntos.escolas_criminologicas,
    "A formulação doutrinária do 'Direito Penal do Inimigo' (*Feindstrafrecht*), desenvolvida pelo jurista Günther Jakobs na década de 1980, caracteriza-se por:",
    "B",
    [
      ["A", "estender integralmente as garantias processuais do Estado Democrático de Direito a todos os cidadãos sem exceção.", "Incorreta. Esse é o Direito Penal do Cidadão."],
      ["B", "estabelecer um tratamento diferenciado para determinados indivíduos que se afastam de forma duradoura da ordem jurídica (como terroristas e membros de facções criminosas organizadas), tratando-os como 'inimigos' da sociedade, aos quais se aplica a antecipação punitiva da tutela penal (atos preparatórios), a supressão de garantias processuais e a aplicação de penas privativas de liberdade desproporcionais voltadas à neutralização física preventiva.", "Correta. Postulados centrais do Direito Penal do Inimigo de Günther Jakobs."],
      ["C", "promover a descriminalização universal de todos os crimes patrimoniais violentos.", "Incorreta. Preconiza hiperpunativismo e repressão máxima."],
      ["D", "substituir as penas de prisão por mediação comunitária voluntária.", "Incorreta. Trata-se de justiça restaurativa, diametralmente oposta a Jakobs."],
      ["E", "conceder indulto natalino compulsório a líderes de facções armadas.", "Incorreta. O modelo visa à contenção e aniquilação do inimigo."]
    ],
    "O Direito Penal do Inimigo distingue o 'cidadão' (a quem se aplicam garantias constitucionais) do 'inimigo' (indivíduo perigoso que rompeu com a ordem social e deve ser combatido com antecipação da punição, penas desproporcionais e restrição de garantias)."),

  ce("crim-b5-022", TAXONOMIA.assuntos.vitimologia,
    "O movimento histórico de 'Redescobrimento da Vítima' na Criminologia do pós-Segunda Guerra Mundial marcou a superação da fase de neutralização ou esquecimento da vítima, propiciando o surgimento de mecanismos de justiça restaurativa, fundos estatais de indenização e programas qualificados de proteção a vítimas e testemunhas ameaçadas.",
    true,
    "Após séculos de neutralização pelo monopólio penal estatal, a vítima voltou ao centro dos debates científicos e das políticas públicas de segurança e justiça a partir dos trabalhos pioneiros de Mendelsohn e von Hentig."),

  me("crim-b5-023", TAXONOMIA.assuntos.teorias_sociologicas,
    "A Teoria da Aprendizagem Social (*Social Learning Theory*), formulada pelo criminólogo Ronald L. Akers como expansão e refinamento da teoria da associação diferencial de Sutherland, incorpora os princípios do condicionamento operante da psicologia comportamental e fundamenta-se em quatro dimensões interativas:",
    "A",
    [
      ["A", "Associação diferencial, definições favoráveis ao crime, reforço diferencial (balanço entre recompensas e punições percebidas) e imitação/modelagem comportamental.", "Correta. São os 4 pilares da Teoria da Aprendizagem Social de Ronald Akers."],
      ["B", "Atavismo craniano, epilepsia moral, tatuagens tribais e assimetria facial.", "Incorreta. Elementos lombrosianos da Escola Positiva."],
      ["C", "Zoneamento concêntrico, transição demográfica, invasão territorial e gentrificação.", "Incorreta. Conceitos da Escola Ecológica de Chicago."],
      ["D", "Cifra negra, cifra dourada, cifra cinza e cifra amarela.", "Incorreta. Trata de estatística e registro criminal."],
      ["E", "Desvio primário, desvio secundário, estigmatização e carreira criminal.", "Incorreta. Conceitos do Labelling Approach de Lemert e Becker."]
    ],
    "Ronald Akers expandiu a teoria de Sutherland demonstrando que o crime é aprendido e mantido pelo reforço diferencial (recompensas sociais ou materiais) e pela imitação de modelos comportamentais de referência."),

  ce("crim-b5-024", TAXONOMIA.assuntos.prevencao_delito,
    "O modelo de 'Policiamento Orientado a Problemas' (POP), idealizado por Herman Goldstein, preconiza que a polícia não deve atuar apenas de forma reativa atendendo a chamados isolados de emergência, mas sim identificar as causas e padrões subjacentes aos problemas criminais recorrentes na comunidade por meio da aplicação da metodologia SARA/IARA (Scanning/Identificação, Analysis/Análise, Response/Resposta, Assessment/Avaliação).",
    true,
    "O modelo POP e a metodologia SARA revolucionaram o policiamento moderno ao focar na solução das causas estruturais de incidentes repetitivos na comunidade."),

  ce("crim-b5-025", TAXONOMIA.assuntos.escolas_criminologicas,
    "O Garantismo Penal, estruturado por Luigi Ferrajoli em sua obra 'Direito e Razão', propõe um modelo de Direito Penal Mínimo subordinado a dez axiomas invioláveis (como *nulla poena sine crimine* e *nullum crimen sine lege*), concebendo o Direito Penal como instrumento de dupla garantia: proteger os cidadãos contra a violência dos delitos e proteger os acusados contra o arbítrio e a violência das penas estatais.",
    true,
    "O garantismo penal de Ferrajoli defende o Direito Penal mínimo como técnica de minimização da violência tanto do crime quanto da resposta punitiva estatal desregulada.")
];
