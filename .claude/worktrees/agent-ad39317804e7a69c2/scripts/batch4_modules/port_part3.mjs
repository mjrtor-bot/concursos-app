import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.portugues;
const aConcordancia = TAXONOMIA.assuntos.concordancia;
const aPontuacao = TAXONOMIA.assuntos.pontuacao;
const aMorfologia = TAXONOMIA.assuntos.morfologia;

export const portPart3 = [
  // 41
  {
    idSlug: "port-l4-41",
    disciplina_id: dId,
    assunto_id: aConcordancia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O verbo 'haver', quando empregado com o sentido de existir, ocorrer ou acontecer, é impessoal e deve permanecer invariavelmente na 3ª pessoa do singular, sendo incorreta a flexão 'Houveram muitos incidentes durante a operação'.",
    explicacao: "GABARITO: CERTO. O verbo 'haver' no sentido existencial/temporal é impessoal, não possui sujeito e permanece na 3ª pessoa do singular ('Houve muitos incidentes durante a operação').",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 42
  {
    idSlug: "port-l4-42",
    disciplina_id: dId,
    assunto_id: aConcordancia,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Assinale a opção que atende integralmente às regras de concordância verbal da norma culta:",
    explicacao: "GABARITO: Letra B. Em 'A maioria dos policiais aprovou (ou aprovaram) a medida', com expressões partitivas ('a maioria de', 'grande parte de') seguidas de substantivo plural, a concordância é facultativa (com o núcleo singular ou com o termo plural). Em 'A', 'Faziam' é impessoal (deve ser 'Fazia dois anos'); em 'C', na voz passiva com 'se' e VTD, o sujeito é plural ('Apreenderam-se'); em 'D', 'Houveram' existencial é impessoal ('Houve'); em 'E', 'deve haver' (locução com haver existencial) é impessoal ('Deve haver').",
    alternativas: [
      { letra: "A", texto: "Faziam dois anos que a quadrilha vinha sendo monitorada pelos analistas.", correta: false },
      { letra: "B", texto: "A maioria dos policiais aprovou a nova diretriz operacional de segurança.", correta: true },
      { letra: "C", texto: "Apreendeu-se dezenas de fuzis e munições no depósito subterrâneo.", correta: false },
      { letra: "D", texto: "Houveram sérias divergências entre os membros da comissão de inquérito.", correta: false },
      { letra: "E", texto: "Devem haver alternativas táticas mais seguras para a abordagem.", correta: false }
    ]
  },
  // 43
  {
    idSlug: "port-l4-43",
    disciplina_id: dId,
    assunto_id: aPontuacao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "É proibido, na norma culta, o emprego de vírgula para separar o sujeito do seu respectivo predicado, mesmo quando o sujeito for composto ou extenso.",
    explicacao: "GABARITO: CERTO. Constitui erro gramatical gravíssimo separar por vírgula o sujeito e o predicado, ou o verbo e seus complementos diretos/indiretos, preservando-se a integridade do nexo sintático essencial.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 44
  {
    idSlug: "port-l4-44",
    disciplina_id: dId,
    assunto_id: aMorfologia,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação à colocação pronominal, assinale a alternativa gramaticalmente correta segundo o padrão culto:",
    explicacao: "GABARITO: Letra D. Com advérbios ou palavras de sentido negativo ('Não se deve...', 'Nunca se soube...'), ocorre atração obrigatória do pronome oblíquo (próclise). Além disso, não se inicia oração com pronome oblíquo ('Me disseram' é incorreto). Com futuro do presente sem palavra atrativa, usa-se mesóclise ('Apresentar-se-á').",
    alternativas: [
      { letra: "A", texto: "Me informaram que a operação seria deflagrada às seis horas.", correta: false },
      { letra: "B", texto: "Os peritos não manifestaram-se sobre o laudo toxicológico.", correta: false },
      { letra: "C", texto: "O suspeito apresentará-se voluntariamente amanhã na sede da PF.", correta: false },
      { letra: "D", texto: "Nunca se presenciou uma apreensão tão expressiva de entorpecentes.", correta: true },
      { letra: "E", texto: "Em tratando-se de crime doloso contra a vida, a perícia é prioritária.", correta: false }
    ]
  },
  // 45
  {
    idSlug: "port-l4-45",
    disciplina_id: dId,
    assunto_id: aConcordancia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na oração 'Vende-se imóveis apreendidos na operação contra a lavagem de capitais', há erro de concordância verbal segundo a norma culta, devendo-se grafar 'Vendem-se imóveis apreendidos'.",
    explicacao: "GABARITO: CERTO. Na voz passiva sintética (VTD 'vender' + pronome apassivador 'se'), 'imóveis apreendidos' é o sujeito paciente plural, exigindo a concordância do verbo no plural: 'Vendem-se imóveis'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 46
  {
    idSlug: "port-l4-46",
    disciplina_id: dId,
    assunto_id: aPontuacao,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Assinale a frase em que o emprego das vírgulas está plenamente justificado pelo isolamento de um adjunto adverbial antecipado de grande extensão:",
    explicacao: "GABARITO: Letra A. 'Durante as investigações conduzidas pela Delegacia de Repressão a Entorpecentes' é um adjunto adverbial de tempo e meio de grande extensão deslocado para o início do período, cujo isolamento por vírgula é obrigatório.",
    alternativas: [
      { letra: "A", texto: "Durante as investigações conduzidas pela Delegacia de Repressão a Entorpecentes, foram apreendidas armas de grosso calibre.", correta: true },
      { letra: "B", texto: "O delegado de polícia, interrogou os suspeitos durante toda a madrugada.", correta: false },
      { letra: "C", texto: "As testemunhas relataram os fatos, que presenciaram no local do crime.", correta: false },
      { letra: "D", texto: "A polícia chegou rapidamente, e os bandidos fugiram sem levar nada.", correta: false },
      { letra: "E", texto: "O laudo pericial apontou que, a morte decorreu de traumatismo craniano.", correta: false }
    ]
  },
  // 47
  {
    idSlug: "port-l4-47",
    disciplina_id: dId,
    assunto_id: aMorfologia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Perito Criminal Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No período 'O perito que examinou a arma concluiu que havia resíduos de pólvora', a primeira ocorrência do vocábulo 'que' classifica-se como pronome relativo, e a segunda, como conjunção integrante.",
    explicacao: "GABARITO: CERTO. O primeiro 'que' retoma o antecedente substantivo 'perito' (= o qual examinou), exercendo a função de pronome relativo (introduz oração subordinada adjetiva restritiva). O segundo 'que' introduz oração subordinada substantiva objetiva direta ('concluiu isso'), exercendo o papel de conjunção integrante.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 48
  {
    idSlug: "port-l4-48",
    disciplina_id: dId,
    assunto_id: aConcordancia,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Assinale a opção em que a concordância nominal está de acordo com a norma padrão:",
    explicacao: "GABARITO: Letra C. A palavra 'anexo' é adjetivo e concorda em gênero e número com o substantivo a que se refere ('relatórios anexos', 'laudos anexos', 'cópia anexa'). A locução 'em anexo' é invariável. Além disso, 'meio' advérbio ('meio nervosa') é invariável, 'bastante' adjetivo varia ('bastantes provas') e 'é proibido' sem artigo no sujeito permanece invariável masculino ('É proibido entrada', mas 'É proibida a entrada').",
    alternativas: [
      { letra: "A", texto: "A escrivã estava meia preocupada com o prazo de conclusão do inquérito.", correta: false },
      { letra: "B", texto: "Seguem anexo aos autos as cópias dos mandados judiciais cumpridos.", correta: false },
      { letra: "C", texto: "Os peritos reuniram bastantes elementos probatórios durante a diligência.", correta: true },
      { letra: "D", texto: "É proibida entrada de pessoas não autorizadas no laboratório de balística.", correta: false },
      { letra: "E", texto: "As investigadoras ficaram alerte durante toda a escolta do preso.", correta: false }
    ]
  },
  // 49
  {
    idSlug: "port-l4-49",
    disciplina_id: dId,
    assunto_id: aPontuacao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No período 'O delegado de polícia, autoridade com prerrogativa de conduzir o inquérito, determinou a prisão preventiva', o isolamento do segmento 'autoridade com prerrogativa de conduzir o inquérito' por vírgulas justifica-se por tratar-se de um aposto explicativo.",
    explicacao: "GABARITO: CERTO. O aposto explicativo fornece esclarecimento sobre o termo anterior ('delegado de polícia') e deve vir obrigatoriamente isolado por vírgulas, travessões ou parênteses.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 50
  {
    idSlug: "port-l4-50",
    disciplina_id: dId,
    assunto_id: aMorfologia,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Assinale a alternativa em que a partícula 'se' exerce a função de pronome apassivador:",
    explicacao: "GABARITO: Letra B. Em 'Identificaram-se as impressões digitais do autor', o verbo 'identificar' é VTD e 'as impressões digitais do autor' é o sujeito paciente plural (= As impressões digitais foram identificadas). Portanto, 'se' é pronome apassivador. Em A e D é índice de indeterminação do sujeito; em C é pronome reflexivo; em E é conjunção condicional.",
    alternativas: [
      { letra: "A", texto: "Precisa-se de agentes experientes no setor de inteligência policial.", correta: false },
      { letra: "B", texto: "Identificaram-se as impressões digitais do autor no volante do veículo.", correta: true },
      { letra: "C", texto: "O investigado feriu-se gravemente durante a tentativa de fuga.", correta: false },
      { letra: "D", texto: "Trata-se de hipótese delitiva que exige autorização judicial expressa.", correta: false },
      { letra: "E", texto: "Se os peritos chegarem a tempo, a preservação do local será exitosa.", correta: false }
    ]
  },
  // 51
  {
    idSlug: "port-l4-51",
    disciplina_id: dId,
    assunto_id: aConcordancia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O verbo 'fazer', quando indica tempo decorrido ou fenômeno meteorológico, é impessoal, devendo ser mantido na 3ª pessoa do singular (ex.: 'Faz cinco anos que a nova unidade operacional da PRF foi inaugurada').",
    explicacao: "GABARITO: CERTO. O verbo 'fazer' com sentido temporal ou climático é impessoal e não flexiona para o plural ('Faz dez anos', 'Faz invernos rigorosos'). Flexionar para 'Fazem cinco anos' é incorreto na norma padrão.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 52
  {
    idSlug: "port-l4-52",
    disciplina_id: dId,
    assunto_id: aPontuacao,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "O sinal de pontuação 'dois-pontos' (:) pode ser legitimamente empregado no texto oficial para introduzir:",
    explicacao: "GABARITO: Letra C. Os dois-pontos são utilizados para introduzir uma enumeração explicativa, uma citação textual, uma síntese ou um esclarecimento aprofundado do que foi afirmado anteriormente.",
    alternativas: [
      { letra: "A", texto: "A separação de orações coordenadas assindéticas puramente adversativas.", correta: false },
      { letra: "B", texto: "O sujeito anteposto ao verbo de ligação.", correta: false },
      { letra: "C", texto: "Uma enumeração de itens ou uma citação literal de autoridade.", correta: true },
      { letra: "D", texto: "O vocativo no corpo de correspondências oficiais com destinatário comum.", correta: false },
      { letra: "E", texto: "O complemento nominal em orações subordinadas reduzidas.", correta: false }
    ]
  },
  // 53
  {
    idSlug: "port-l4-53",
    disciplina_id: dId,
    assunto_id: aMorfologia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em orações iniciadas por palavras interrogativas ou exclamativas, como em 'Quem nos garantiu a segurança da equipe?', a próclise do pronome oblíquo é obrigatória.",
    explicacao: "GABARITO: CERTO. Pronomes interrogativos ('quem', 'qual', 'o que') e exclamativos são fatores atrativos de próclise, tornando obrigatória a colocação do pronome oblíquo antes do verbo ('Quem nos garantiu...').",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 54
  {
    idSlug: "port-l4-54",
    disciplina_id: dId,
    assunto_id: aConcordancia,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Na frase 'Foi julgado improcedente os pedidos da defesa', há uma infração às regras de concordância. A reescrita que atende com correção à norma padrão é:",
    explicacao: "GABARITO: Letra B. O sujeito da oração passiva é 'os pedidos da defesa' (masculino plural). O predicativo e a forma verbal devem concordar com o sujeito: 'Foram julgados improcedentes os pedidos da defesa'.",
    alternativas: [
      { letra: "A", texto: "Foi julgados improcedente os pedidos da defesa.", correta: false },
      { letra: "B", texto: "Foram julgados improcedentes os pedidos da defesa.", correta: true },
      { letra: "C", texto: "Foram julgado improcedente os pedidos da defesa.", correta: false },
      { letra: "D", texto: "Foi julgado improcedentes os pedidos da defesa.", correta: false },
      { letra: "E", texto: "Julgou-se improcedentes os pedidos da defesa.", correta: false }
    ]
  },
  // 55
  {
    idSlug: "port-l4-55",
    disciplina_id: dId,
    assunto_id: aPontuacao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A substituição do ponto e vírgula por ponto final no trecho 'Os agentes cercaram o perímetro norte; os delegados coordenaram as buscas internas' preserva a correção gramatical e a coerência do texto.",
    explicacao: "GABARITO: CERTO. O ponto e vírgula separa orações coordenadas independentes que mantêm estreita relação de sentido. A substituição por ponto final, com o devido ajuste de maiúscula ('...perímetro norte. Os delegados...'), é perfeitamente gramatical e preserva a coerência.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 56
  {
    idSlug: "port-l4-56",
    disciplina_id: dId,
    assunto_id: aMorfologia,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Assinale a frase em que o pronome oblíquo foi colocado em posição de mesóclise de acordo com a norma culta:",
    explicacao: "GABARITO: Letra A. Com verbo no futuro do presente ('entregará') ou futuro do pretérito ('entregaria') no início da oração ou sem palavra atrativa, a mesóclise é a posição exigida pela norma culta: 'Entregar-se-ão os laudos aos magistrados'.",
    alternativas: [
      { letra: "A", texto: "Entregar-se-ão os laudos periciais ao juiz competente na próxima semana.", correta: true },
      { letra: "B", texto: "Não realizar-se-á a audiência preliminar na comarca de origem.", correta: false },
      { letra: "C", texto: "O delegado confirmará-se na presidência do grupo de atuação especial.", correta: false },
      { letra: "D", texto: "Quando prender-se-á o chefe da organização criminosa internacional?", correta: false },
      { letra: "E", texto: "Os investigadores tinham-se comprometido com o sigilo das investigações.", correta: false }
    ]
  },
  // 57
  {
    idSlug: "port-l4-57",
    disciplina_id: dId,
    assunto_id: aConcordancia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na estrutura 'Um e outro agente participou da diligência', a concordância do verbo no singular é admitida pela norma culta, sendo também aceita a flexão no plural ('participaram').",
    explicacao: "GABARITO: CERTO. Com a expressão de sujeito 'um e outro', a norma gramatical admite tanto a concordância no singular quanto no plural (embora o substantivo seguinte permaneça no singular: 'um e outro agente participou / participaram').",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 58
  {
    idSlug: "port-l4-58",
    disciplina_id: dId,
    assunto_id: aPontuacao,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Assinale a alternativa em que a oração subordinada adjetiva explicativa está pontuada de forma correta:",
    explicacao: "GABARITO: Letra B. As orações subordinadas adjetivas explicativas trazem uma informação acessória/generalizante sobre o antecedente e devem vir obrigatoriamente isoladas por vírgulas.",
    alternativas: [
      { letra: "A", texto: "Os policiais federais que participaram da operação receberam elogio funcional.", correta: false },
      { letra: "B", texto: "A perícia papiloscópica, que analisa impressões digitais, foi determinante para o caso.", correta: true },
      { letra: "C", texto: "Os peritos que chegaram cedo, iniciaram os trabalhos imediatamente.", correta: false },
      { letra: "D", texto: "A arma do crime que estava escondida, foi localizada pelos cães farejadores.", correta: false },
      { letra: "E", texto: "O acusado que confessou o crime foi transferido de presídio sem aviso.", correta: false }
    ]
  },
  // 59
  {
    idSlug: "port-l4-59",
    disciplina_id: dId,
    assunto_id: aMorfologia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em 'Constatou-se que a organização criminosa utilizava empresas de fachada', a oração introduzida por 'que' funciona como sujeito da oração principal, o que classifica o vocábulo 'que' como conjunção integrante.",
    explicacao: "GABARITO: CERTO. A oração 'que a organização criminosa utilizava empresas de fachada' é subordinada substantiva subjetiva (= 'Constatou-se isso' / 'Isso foi constatado'). As conjunções que introduzem orações subordinadas substantivas são conjunções integrantes.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 60
  {
    idSlug: "port-l4-60",
    disciplina_id: dId,
    assunto_id: aConcordancia,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Assinale a opção em que a concordância verbal com o verbo 'parecer' seguido de infinitivo foi estruturada corretamente:",
    explicacao: "GABARITO: Letra A. Na construção 'parecer + infinitivo', admite-se dupla concordância: 1) flexiona-se o verbo parecer e mantém-se o infinitivo impessoal ('Os suspeitos pareciam demonstrar receio'); ou 2) mantém-se o parecer na 3ª pessoa do singular e flexiona-se o infinitivo ('Os suspeitos parecia demonstrarem receio'). Flexionar ambos simultaneamente ('pareciam demonstrarem') constitui erro gramatical.",
    alternativas: [
      { letra: "A", texto: "Os suspeitos pareciam demonstrar receio durante o interrogatório policial.", correta: true },
      { letra: "B", texto: "Os suspeitos pareciam demonstrarem receio durante o interrogatório policial.", correta: false },
      { letra: "C", texto: "Pareciam haver muitas testemunhas oculares no momento do delito.", correta: false },
      { letra: "D", texto: "Fazem dez meses que os investigados parecem ocultar seus patrimônios.", correta: false },
      { letra: "E", texto: "Houveram momentos em que os policiais pareciam desconfiarem do álibi.", correta: false }
    ]
  }
];
