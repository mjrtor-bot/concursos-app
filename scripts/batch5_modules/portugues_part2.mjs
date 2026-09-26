import { TAXONOMIA } from "./taxonomia.mjs";

const ce = (idSlug, assunto_id, enunciado, correta, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.portugues,
  assunto_id,
  banca_nome: "CEBRASPE",
  orgao_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Polícia Federal" : "Polícia Civil",
  cargo_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Agente de Polícia Federal" : "Escrivão de Polícia",
  ano: 2025,
  tipo: "certo_errado",
  dificuldade: "dificil",
  enunciado,
  alternativas: [
    { letra: "C", texto: "Certo", correta, explicacao_especifica: correta ? "Correto. A análise morfossintática e as regras gramaticais foram perfeitamente aplicadas." : "Incorreto. A assertiva comete equívoco de análise sintática ou transgride norma prescritiva." },
    { letra: "E", texto: "Errado", correta: !correta, explicacao_especifica: !correta ? "Correto. Há erro conceitual ou gramatical na assertiva examinada." : "Incorreto. A assertiva reproduz a correta classificação sintática da oração ou do termo." }
  ],
  explicacao: `Gabarito: ${correta ? "Certo" : "Errado"}. ${explicacao}`
});

const me = (idSlug, assunto_id, enunciado, corretaLetra, alternativas, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.portugues,
  assunto_id,
  banca_nome: "FGV",
  orgao_nome: "Polícia Civil",
  cargo_nome: "Inspetor de Polícia",
  ano: 2024,
  tipo: "multipla_escolha",
  dificuldade: "dificil",
  enunciado,
  alternativas: alternativas.map(([letra, texto, just]) => ({ letra, texto, correta: letra === corretaLetra, explicacao_especifica: just })),
  explicacao: `Gabarito: ${corretaLetra}. ${explicacao}`
});

export const portuguesPart2 = [
  ce("pt-b5-021", TAXONOMIA.assuntos.sintaxe,
    "No período 'É fundamental a preservação imediata da cena do crime pelos primeiros policiais que chegam ao local', a oração sublinhada e o termo 'a preservação imediata da cena do crime' exercem a função sintática de sujeito do verbo 'é' (oração principal com predicado nominal).",
    true,
    "A estrutura sintática é de sujeito posposto: 'A preservação imediata da cena do crime [...] é fundamental'. O termo oracional/nominal atua como sujeito da cópula 'é' associada ao predicativo 'fundamental'."),

  me("pt-b5-022", TAXONOMIA.assuntos.sintaxe,
    "Assinale a alternativa em que o termo destacado desempenha a função sintática de complemento nominal.",
    "B",
    [
      ["A", "O delegado necessitava **de reforços operacionais** para a diligência.", "Incorreta. 'De reforços' complementa o verbo transitivo indireto 'necessitava' (objeto indireto)."],
      ["B", "A obediência **às ordens judiciais** é dever indeclinável de todos os agentes.", "Correta. 'Às ordens judiciais' complementa o substantivo abstrato transitivo 'obediência' com valor paciente (complemento nominal)."],
      ["C", "Os policiais apreenderam o armamento **do suspeito** no esconderijo.", "Incorreta. 'Do suspeito' indica posse/relação com o substantivo concreto 'armamento' (adjunto adnominal)."],
      ["D", "O perito redigiu o laudo **com extrema meticulosidade**.", "Incorreta. 'Com extrema meticulosidade' é adjunto adverbial de modo."],
      ["E", "A autoridade policial entregou o relatório **ao promotor de justiça**.", "Incorreta. 'Ao promotor' é objeto indireto do verbo bi-transitivo 'entregou'."]
    ],
    "Complemento nominal completa o sentido de substantivos abstratos, adjetivos ou advérbios, sendo sempre regido por preposição e possuindo valor passivo/alvo da ação."),

  ce("pt-b5-023", TAXONOMIA.assuntos.sintaxe,
    "No fragmento 'A apreensão das drogas ilícitas, que estavam acondicionadas em fundo falso de caminhão, evitou a distribuição do entorpecente na capital', a oração adjetiva entre vírgulas possui caráter explicativo, atribuindo uma característica acessória ao todo do termo antecedente.",
    true,
    "As orações subordinadas adjetivas isoladas por vírgulas têm natureza explicativa, acrescentando informação acessória ou generalizadora a respeito do antecedente."),

  me("pt-b5-024", TAXONOMIA.assuntos.sintaxe,
    "Considere o enunciado: 'Comprovou-se **que o esquema de corrupção contava com a conivência de auditores fiscais**.'\n\nA oração destacada classifica-se sintaticamente como:",
    "A",
    [
      ["A", "subordinada substantiva subjetiva.", "Correta. Funciona como sujeito da oração principal apassivada 'Comprovou-se' ('Isso foi comprovado')."],
      ["B", "subordinada substantiva objetiva direta.", "Incorreta. O verbo 'comprovar' está apassivado pela partícula 'se', logo não admite objeto direto."],
      ["C", "subordinada substantiva completiva nominal.", "Incorreta. Não completa nome abstrato."],
      ["D", "subordinada substantiva predicativa.", "Incorreta. Não funciona como predicativo com verbo de ligação."],
      ["E", "subordinada adjetiva restritiva.", "Incorreta. É introduzida por conjunção integrante 'que' e não por pronome relativo."]
    ],
    "Na estrutura 'Comprovou-se que...', o verbo transitivo direto na 3ª pessoa do singular acompanhado do pronome apassivador 'se' exige como sujeito a oração subordinada substantiva subjetiva ('Que o esquema contava... foi comprovado')."),

  ce("pt-b5-025", TAXONOMIA.assuntos.sintaxe,
    "Na oração 'Tratava-se de investigações complexas envolvendo fraudes bancárias internacionais', o termo 'de investigações complexas' exerce a função de objeto indireto, sendo a partícula 'se' classificada como índice de indeterminação do sujeito.",
    true,
    "O verbo 'tratar' é transitivo indireto com preposição 'de'; com o pronome 'se', torna o sujeito indeterminado e rege objeto indireto no singular ou plural."),

  ce("pt-b5-026", TAXONOMIA.assuntos.sintaxe,
    "No trecho 'Os agentes prenderam os fugitivos em flagrante delito', a transposição para a voz passiva analítica resulta na construção 'Os fugitivos foram presos em flagrante delito pelos agentes', mantendo-se o tempo verbal do pretérito perfeito do indicativo.",
    true,
    "Voz ativa no pretérito perfeito ('prenderam') converte-se em voz passiva analítica com verbo auxiliar no pretérito perfeito ('foram') + particípio ('presos') e agente da passiva ('pelos agentes')."),

  me("pt-b5-027", TAXONOMIA.assuntos.sintaxe,
    "Assinale a frase em que a colocação do pronome oblíquo átono atende rigorosamente às prescrições da norma-padrão.",
    "C",
    [
      ["A", "Jamais enganar-me-ão com falsos depoimentos testemunhais.", "Incorreta. A palavra negativa 'Jamais' atrai obrigatoriamente o pronome em próclise: 'Jamais me enganarão'."],
      ["B", "Me disseram que a operação policial iniciaria às cinco horas.", "Incorreta. É proibido iniciar período com pronome oblíquo átono na norma culta."],
      ["C", "Quando se concluir a perícia balística, o inquérito será relatado.", "Correta. A conjunção subordinativa temporal 'Quando' atrai obrigatoriamente a próclise ('Quando se concluir')."],
      ["D", "O suspeito recusou-se a falar, calando-se perante o juiz que interrogava-o.", "Incorreta. O pronome relativo 'que' é fator atrativo de próclise: 'que o interrogava'."],
      ["E", "Em tratando-se de crimes hediondos, a fiança é vedada.", "Incorreta. A estrutura 'Em + gerúndio' exige próclise: 'Em se tratando de'."]
    ],
    "Casos de próclise obrigatória: palavras de sentido negativo, conjunções subordinativas ('quando', 'se', 'embora', 'porque'), pronomes relativos ('que', 'quem', 'onde'), pronomes indefinidos, advérbios e a locução 'em + se + gerúndio'."),

  ce("pt-b5-028", TAXONOMIA.assuntos.sintaxe,
    "No trecho 'A autoridade policial não **lhe** deu oportunidade de fuga', o pronome oblíquo 'lhe' exerce a função sintática de objeto indireto, correspondendo a 'a ele' ou 'ao suspeito'.",
    true,
    "O verbo 'dar' é bitransitivo (dar algo - 'oportunidade de fuga' [OD] a alguém - 'lhe' [OI])."),

  me("pt-b5-029", TAXONOMIA.assuntos.sintaxe,
    "Considere o período: 'Não nos pareceu razoável **que os laudos periciais fossem ignorados na sentença condenatória**.'\n\nA oração em destaque desempenha papel sintático de:",
    "A",
    [
      ["A", "sujeito oracional da oração principal.", "Correta. 'Que os laudos fossem ignorados não nos pareceu razoável' -> oração subordinada substantiva subjetiva."],
      ["B", "objeto direto do verbo 'parecer'.", "Incorreta. 'Parecer' é verbo de ligação/intransitivo com predicativo e não admite objeto direto."],
      ["C", "objeto indireto preposicionado.", "Incorreta. O objeto indireto é o pronome 'nos'."],
      ["D", "predicativo do sujeito oracional.", "Incorreta. O predicativo é o adjetivo 'razoável'."],
      ["E", "adjunto adnominal explicativo.", "Incorreta. Não exerce função adjetiva."]
    ],
    "Em construções como 'parece razoável que...', a oração introduzida pela conjunção integrante funciona como sujeito subjetivo da locução predicativa."),

  ce("pt-b5-030", TAXONOMIA.assuntos.sintaxe,
    "Na frase 'A equipe tática apreendeu cinquenta quilos de entorpecentes e desarticulou a base operacional da facção criminosa', o termo 'cinquenta quilos de entorpecentes' classifica-se como objeto direto do verbo 'apreendeu', enquanto 'a base operacional da facção criminosa' funciona como objeto direto do verbo 'desarticulou'.",
    true,
    "Ambos os verbos ('apreendeu' e 'desarticulou') são transitivos diretos e regem complementos não preposicionados com função de objeto direto."),

  ce("pt-b5-031", TAXONOMIA.assuntos.sintaxe,
    "No segmento 'Os policiais, **cansados da longa vigília**, comemoraram o sucesso da missão', o termo em destaque classifica-se como predicativo do sujeito e oração reduzida de particípio com função explicativa-circunstancial.",
    true,
    "'Cansados da longa vigília' expressa o estado/qualidade momentânea do sujeito 'Os policiais' no momento da comemoração, configurando predicativo do sujeito em oração reduzida."),

  me("pt-b5-032", TAXONOMIA.assuntos.sintaxe,
    "Assinale a alternativa em que a palavra 'SE' desempenha o papel de partícula apassivadora.",
    "B",
    [
      ["A", "Os criminosos entreolharam-se desconfiados durante o interrogatório.", "Incorreta. 'Se' é pronome recíproco."],
      ["B", "Divulgaram-se as imagens das câmeras de segurança para identificar os suspeitos.", "Correta. Voz passiva sintética: 'As imagens das câmeras foram divulgadas' ('se' = partícula apassivadora)."],
      ["C", "Necessita-se de peritos habilitados em análise forense digital.", "Incorreta. 'Se' é índice de indeterminação do sujeito (verbo transitivo indireto)."],
      ["D", "Ele queixou-se das condições do cárcere provisório.", "Incorreta. 'Queixar-se' é verbo pronominal essencial ('se' é parte integrante do verbo)."],
      ["E", "O policial ferido arrastou-se até a viatura para pedir apoio.", "Incorreta. 'Se' é pronome reflexivo (arrastou a si mesmo)."]
    ],
    "A partícula 'se' é apassivadora quando associada a verbo transitivo direto (ou bitransitivo) com sujeito paciente determinado ('as imagens foram divulgadas')."),

  ce("pt-b5-033", TAXONOMIA.assuntos.sintaxe,
    "Na oração 'Chegou-se a um consenso sobre a necessidade de reforço no policiamento de fronteira', o verbo 'chegou-se' é transitivo indireto, a partícula 'se' é índice de indeterminação do sujeito e a oração possui sujeito indeterminado.",
    true,
    "Verbo transitivo indireto ('chegar a') associado à partícula 'se' caracteriza sujeito indeterminado e oração com objeto indireto."),

  me("pt-b5-034", TAXONOMIA.assuntos.sintaxe,
    "Assinale a oração em que a concordância verbal infringe as normas gramaticais vigentes.",
    "D",
    [
      ["A", "Mais de um policial militar participou da operação na comunidade.", "Correta. Com a expressão 'mais de um', o verbo concorda no singular (salvo se houver reciprocidade)."],
      ["B", "Fui eu que elaborei o plano de cerco e bloqueio das rodovias.", "Correta. Com 'que', o verbo concorda com o antecedente ('eu')."],
      ["C", "Fui eu quem elaborou a representação pela prisão preventiva.", "Correta. Com 'quem', o verbo pode ficar na 3ª pessoa do singular ou concordar com o antecedente."],
      ["D", "Houveram muitos incidentes graves durante a manifestação pública.", "Incorreta. O verbo 'haver' no sentido de existir ou ocorrer é impessoal e deve permanecer no singular: 'Houve muitos incidentes'."],
      ["E", "Faz cinco anos que a nova unidade policial especializada foi inaugurada.", "Correta. O verbo 'fazer' indicando tempo decorrido é impessoal (singular obrigatório)."]
    ],
    "O verbo 'haver' com significado de 'existir', 'acontecer' ou indicando tempo decorrido é impessoal, não tem sujeito e conjuga-se obrigatoriamente na 3ª pessoa do singular ('Houve muitos incidentes')."),

  ce("pt-b5-035", TAXONOMIA.assuntos.sintaxe,
    "No período 'Quanto mais os investigadores aprofundavam a análise dos registros bancários, mais evidente se tornava a ocultação de patrimônio', as orações estabelecem entre si uma relação de proporcionalidade correlativa, estruturada pelas locuções 'quanto mais... mais'.",
    true,
    "A correlação 'quanto mais... mais' introduz oração subordinada adverbial proporcional, indicando variação concomitante entre as grandezas expressas."),

  ce("pt-b5-036", TAXONOMIA.assuntos.sintaxe,
    "No enunciado 'O juiz declarou os réus culpados pelo crime de extorsão mediante sequestro', o termo 'culpados pelo crime de extorsão mediante sequestro' atua como predicativo do objeto direto ('os réus').",
    true,
    "O predicativo do objeto atribui uma qualidade transitória ou juízo valorativo ao objeto direto ('os réus') por meio do verbo declaratório ('declarou')."),

  me("pt-b5-037", TAXONOMIA.assuntos.sintaxe,
    "Assinale a alternativa que apresenta oração subordinada adjetiva restritiva.",
    "A",
    [
      ["A", "Os agentes penitenciários **que participaram do curso de negociação de crises** foram destacados para a contenção do motim.", "Correta. Sem vírgula, restringe o universo de agentes penitenciários apenas àqueles que fizeram o curso."],
      ["B", "O Sol, **que ilumina a Terra**, nasce a leste.", "Incorreta. Adjetiva explicativa isolada por vírgulas."],
      ["C", "A perícia concluiu **que o incêndio foi criminoso**.", "Incorreta. Oração subordinada substantiva objetiva direta."],
      ["D", "O policial agiu com coragem, **embora estivesse desarmado**.", "Incorreta. Oração subordinada adverbial concessiva."],
      ["E", "Como o trânsito estivesse bloqueado, **chegamos atrasados**.", "Incorreta. Oração principal com oração adverbial causal anterior."]
    ],
    "A oração subordinada adjetiva restritiva delimita e individualiza o sentido do antecedente, não sendo separada por pontuação."),

  ce("pt-b5-038", TAXONOMIA.assuntos.sintaxe,
    "Na frase 'O superintendente da Polícia Federal recebeu os delegados regionais em seu gabinete', o termo 'da Polícia Federal' é adjunto adnominal do núcleo do sujeito 'superintendente', enquanto 'em seu gabinete' é adjunto adverbial de lugar.",
    true,
    "'Da Polícia Federal' qualifica e especifica o núcleo nominal 'superintendente' (adjunto adnominal); 'em seu gabinete' indica a circunstância de lugar da ação verbal (adjunto adverbial de lugar)."),

  me("pt-b5-039", TAXONOMIA.assuntos.sintaxe,
    "Assinale a opção em que a oração destacada é subordinada adverbial causal.",
    "C",
    [
      ["A", "O policial atirou para **que o criminoso cessasse a agressão**.", "Incorreta. Oração subordinada adverbial final."],
      ["B", "O laudo foi tão minucioso **que dirimiu todas as dúvidas dos jurados**.", "Incorreta. Oração subordinada adverbial consecutiva."],
      ["C", "**Como não havia mandado judicial de busca domiciliar**, a equipe aguardou autorização expressa do morador.", "Correta. 'Como' no início do período equivale a 'Já que' / 'Visto que', introduzindo oração subordinada adverbial causal."],
      ["D", "O suspeito agiu **como havia sido planejado pela quadrilha**.", "Incorreta. Oração subordinada adverbial conformativa."],
      ["E", "**Se os reforços não chegarem**, o cerco será comprometido.", "Incorreta. Oração subordinada adverbial condicional."]
    ],
    "A conjunção 'Como' em início de período com valor explicativo/justificativo introduz oração subordinada adverbial causal (= Visto que / Já que não havia mandado judicial)."),

  ce("pt-b5-040", TAXONOMIA.assuntos.sintaxe,
    "No período 'O réu negou veementemente a autoria dos disparos, **alegando legítima defesa putativa**', a oração destacada é subordinada reduzida de gerúndio e exerce valor circunstancial de meio ou explicação da negação.",
    true,
    "As orações reduzidas de gerúndio articulam-se à oração principal com valor adverbial de modo, tempo, causa ou circunstância explicativa.")
];
