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
  dificuldade: "medio",
  enunciado,
  alternativas: [
    { letra: "C", texto: "Certo", correta, explicacao_especifica: correta ? "Correto. A assertiva reflete com precisão os sentidos e as relações morfossintáticas e discursivas do texto." : "Incorreto. A assertiva altera o sentido original ou transgride as regras gramaticais da norma culta." },
    { letra: "E", texto: "Errado", correta: !correta, explicacao_especifica: !correta ? "Correto. Há erro gramatical, semântico ou de interpretação textual na proposição." : "Incorreto. A proposição é gramaticalmente exata e preserva o sentido do texto." }
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

export const portuguesPart1 = [
  ce("pt-b5-001", TAXONOMIA.assuntos.interpretacao,
    "Texto de referência: 'A investigação criminal contemporânea transcende a mera colheita de depoimentos testemunhais. Diante da sofisticação tecnológica das organizações criminosas, a inteligência policial converteu-se em pilar estratégico fundamental, exigindo o cruzamento analítico de dados telemáticos e relatórios de inteligência financeira para desvelar a estrutura hierárquica e a lavagem de capitais.'\n\nCom base no texto, infere-se que a inteligência policial e a análise de dados financeiros substituíram em definitivo a colheita de provas testemunhais nos inquéritos modernos.",
    false,
    "O texto afirma que a investigação 'transcende a mera colheita' de testemunhos e que a inteligência se converteu em pilar estratégico, o que não significa que os depoimentos tenham sido substituídos ou eliminados, mas sim complementados por métodos mais avançados."),

  me("pt-b5-002", TAXONOMIA.assuntos.interpretacao,
    "Considere o trecho: 'A atuação policial pautada no respeito irrestrito aos direitos fundamentais não fragiliza a segurança pública; ao revés, confere legitimidade social e solidez jurídica aos atos de persecução, blindando as provas colhidas contra arguições de nulidade.'\n\nA relação lógico-discursiva estabelecida pela expressão 'ao revés' expressa ideia de:",
    "C",
    [
      ["A", "concessão circunstancial.", "Incorreta. Concessão expressa ressalva ('embora', 'conquanto')."],
      ["B", "conclusão silogística.", "Incorreta. Conclusão expressa dedução decorrente ('portanto', 'logo')."],
      ["C", "oposição ou contraste enfático.", "Correta. 'Ao revés' é locução conjuntiva/adverbial equivalente a 'pelo contrário', 'ao contrário', introduzindo antítese."],
      ["D", "proporcionalidade temporal.", "Incorreta. Proporção indica variação simultânea ('à medida que')."],
      ["E", "condicionalidade hipotética.", "Incorreta. Condição expressa hipótese necessária ('se', 'caso')."]
    ],
    "A locução 'ao revés' significa 'ao contrário', 'pelo contrário', operando como operador discursivo de contraste ou contraposição de argumentos."),

  ce("pt-b5-003", TAXONOMIA.assuntos.interpretacao,
    "Texto de referência: 'Embora a perícia técnica ostente elevado grau de certeza científica, o laudo pericial não vincula de forma absoluta o magistrado, a quem assiste a prerrogativa de rejeitá-lo, no todo ou em parte, caso outros elementos probatórios constantes dos autos indiquem conclusão fática divergente.'\n\nNo fragmento, o vocábulo 'Embora' introduz uma oração subordinada adverbial concessiva, que poderia ser substituída, sem prejuízo da correção gramatical e do sentido original, por 'Conquanto'.",
    true,
    "'Embora' e 'Conquanto' são conjunções subordinativas concessivas sinônimas que introduzem fatos que não impedem a realização da oração principal."),

  me("pt-b5-004", TAXONOMIA.assuntos.interpretacao,
    "Assinale a alternativa em que a paráfrase proposta mantém o sentido e a correção gramatical do período original: 'A proliferação de crimes cibernéticos tem compelido as forças de segurança a reestruturar seus quadros especializados.'",
    "B",
    [
      ["A", "O aumento dos delitos virtuais tem forçado as polícias à reestruturarem seus setores específicos.", "Incorreta. Ocorrência indevida de crase antes de verbo e flexão inadequada de infinitivo."],
      ["B", "A expansão dos delitos informáticos tem obrigado as instituições policiais a reorganizarem seus departamentos especializados.", "Correta. Vocabulário equivalente, regência verbal perfeita ('obrigar a') e concordância precisa."],
      ["C", "Visto que proliferam crimes virtuais, as forças públicas foram desobrigadas de reestruturação.", "Incorreta. Altera o sentido para negação do esforço."],
      ["D", "A multiplicação de condutas ilícitas na rede obrigou as polícias de que reestruturassem seus quadros.", "Incorreta. Regência viciada ('obrigou de que')."],
      ["E", "As forças de segurança têm sido convidadas pelas fraudes virtuais a fechar delegacias.", "Incorreta. Desvirtuamento total do sentido original."]
    ],
    "A opção B preserva a relação semântica de causa e consequência mantendo a correção de regência e concordância."),

  ce("pt-b5-005", TAXONOMIA.assuntos.morfologia,
    "No segmento 'A perícia criminal produziu um relatório minucioso', o vocábulo 'minucioso' é formado pelo processo de derivação sufixal a partir do substantivo 'minúcia' acrescido do sufixo formador de adjetivo '-oso', indicativo de abundância ou plenitude.",
    true,
    "Minúcia (substantivo) + -oso (sufixo adjetivador de abundância/qualidade) = minucioso (adjetivo)."),

  ce("pt-b5-006", TAXONOMIA.assuntos.morfologia,
    "Na oração 'A autoridade policial julgou a medida indispensável à elucidação do fato', a palavra 'indispensável' exerce a função morfológica de adjetivo e a função sintática de predicativo do objeto direto ('a medida').",
    true,
    "'Indispensável' qualifica o objeto direto 'a medida' por intermédio do verbo transitivo direto 'julgou', caracterizando predicativo do objeto."),

  me("pt-b5-007", TAXONOMIA.assuntos.morfologia,
    "Assinale a alternativa em que o termo destacado pertença à classe dos pronomes relativos e desempenhe papel coesivo anafórico.",
    "D",
    [
      ["A", "É imperioso **que** os agentes atuem com cautela.", "Incorreta. 'Que' é conjunção integrante introduzindo oração subordinada substantiva subjetiva."],
      ["B", "Os policiais sabiam **que** a diligência seria complexa.", "Incorreta. 'Que' é conjunção integrante introduzindo oração subordinada substantiva objetiva direta."],
      ["C", "Tão intenso foi o tiroteio **que** todos se abrigaram.", "Incorreta. 'Que' é conjunção subordinativa consecutiva correlacionada a 'tão'."],
      ["D", "O relatório técnico **que** a equipe elaborou subsidiará a denúncia.", "Correta. 'Que' retoma o antecedente substantivo 'O relatório técnico' (pronome relativo substituível por 'o qual')."],
      ["E", "Esperava-se **que** os mandados fossem cumpridos ao amanhecer.", "Incorreta. 'Que' é conjunção integrante."]
    ],
    "O pronome relativo 'que' retoma o substantivo antecedente ('relatório técnico'), exercendo função anafórica e introduzindo oração subordinada adjetiva restritiva."),

  ce("pt-b5-008", TAXONOMIA.assuntos.ortografia,
    "Conforme o Acordo Ortográfico vigente da Língua Portuguesa, as palavras 'autoexame', 'antirreflexo', 'corresponsável' e 'infrassom' estão grafadas em perfeita conformidade com as regras de hifenização relativas a prefixos terminados em vogal seguidos de vogal diferente ou das consoantes 'r' ou 's'.",
    true,
    "Nos prefixos: vogal + vogal diferente junta-se sem hífen (autoexame); vogal + 'r' ou 's' dobra-se a consoante sem hífen (antirreflexo, corresponsável, infrassom)."),

  me("pt-b5-009", TAXONOMIA.assuntos.ortografia,
    "Assinale a opção em que todas as palavras estão grafadas corretamente quanto ao emprego do hífen segundo o Novo Acordo Ortográfico.",
    "A",
    [
      ["A", "Micro-ondas, contra-ataque, pré-história, sub-base.", "Correta. Prefixos iguais com mesma vogal exigem hífen (micro-ondas, contra-ataque); prefixos tônicos acentuados exigem hífen (pré-história); prefixo 'sub' diante de 'b' ou 'r' exige hífen (sub-base)."],
      ["B", "Auto-escola, anti-inflamatório, semi-aberto, hiper-rápido.", "Incorreta. Grafia correta: 'autoescola' (vogais diferentes juntam), 'semiaberto' (vogais diferentes juntam)."],
      ["C", "Microcomputador, sub-reino, ultra-sonografia, super-resistente.", "Incorreta. Grafia correta: 'ultrassonografia' (dobra o 's')."],
      ["D", "Extra-judicial, co-autor, pós-graduação, neo-liberal.", "Incorreta. Grafia correta: 'extrajudicial', 'coautor' (prefixo 'co' aglutina), 'neoliberal'."],
      ["E", "Anti-social, semi-árido, super-homem, sobre-voo.", "Incorreta. Grafia correta: 'antissocial', 'semiárido', 'sobrevoo'."]
    ],
    "Regra do hífen: vogais iguais separam-se com hífen (micro-ondas, contra-ataque); vogais diferentes unem-se sem hífen (autoescola). Prefixos com acento próprio ('pré-', 'pós-', 'pró-') têm hífen."),

  ce("pt-b5-010", TAXONOMIA.assuntos.ortografia,
    "Em conformidade com as regras de acentuação gráfica da norma culta, os vocábulos 'interdito', 'caráter', 'cautelares' e 'órdens' são todos paroxítonos regularmente acentuados.",
    false,
    "A palavra 'ordens' é paroxítona terminada em '-ens' e NÃO recebe acento gráfico (como 'homens', 'imagens', 'itens'). Ademais, 'cautelares' é paroxítona terminada em '-es' e não é acentuada."),

  ce("pt-b5-011", TAXONOMIA.assuntos.ortografia,
    "As palavras 'inquérito', 'cúmplice', 'efêmero' e 'específico' recebem acento gráfico por pertencerem à mesma regra de acentuação: a de que todas as palavras proparoxítonas da língua portuguesa são obrigatoriamente acentuadas.",
    true,
    "In-qué-ri-to, cúm-pli-ce, e-fê-me-ro e es-pe-cí-fi-co possuem a antepenúltima sílaba tônica, sendo proparoxítonas acentuadas sem exceção."),

  me("pt-b5-012", TAXONOMIA.assuntos.ortografia,
    "Assinale a frase em que o emprego do porquê está inteiramente correto conforme a norma-padrão.",
    "B",
    [
      ["A", "O delegado indagou por que razão o suspeito fugiu, mas ninguém soube explicar o por que.", "Incorreta. O último deve ser substantivado com acento: 'o porquê'."],
      ["B", "Não compreendemos os motivos por que o investigado não compareceu à oitiva marcada, tampouco por quê.", "Correta. 'Por que' = pelo qual (relativo) e 'por quê' isolado no final de período com ponto."],
      ["C", "A perícia foi adiada porque o local estava violado, porisso foram chamados reforços.", "Incorreta. 'Por isso' grafa-se separado."],
      ["D", "O suspeito silenciou por que temia represálias da organização criminosa.", "Incorreta. Causa/explicação grafa-se junto e sem acento: 'porque'."],
      ["E", "Porquê você não registrou o flagrante imediatamente após a abordagem?", "Incorreta. Em início de pergunta direta, emprega-se 'Por que' separado."]
    ],
    "Uso dos porquês: 'por que' (início de pergunta ou equivalente a 'pelo qual'), 'por quê' (fim de frase ou isolado), 'porque' (conjunção explicativa/causal = pois/já que) e 'porquê' (substantivo = motivo/razão precedido de artigo)."),

  ce("pt-b5-013", TAXONOMIA.assuntos.interpretacao,
    "No período 'O crime organizado opera em rede; a repressão policial, contudo, deve estruturar-se em moldes simétricos de cooperação institucional', o conectivo 'contudo' tem valor adversativo e poderia ser substituído por 'todavia', 'no entanto' ou 'entretanto', mantendo-se a pontuação e o sentido.",
    true,
    "'Contudo', 'todavia', 'no entanto' e 'entretanto' são conjunções coordenativas adversativas intercambiáveis que denotam oposição/contraste entre proposições."),

  me("pt-b5-014", TAXONOMIA.assuntos.interpretacao,
    "Considere o período: 'Embora a tecnologia forneça instrumentos analíticos de ponta, o tirocínio e a perspicácia do policial em campo permanecem indispensáveis.'\n\nA oração subordinada introduzida pela conjunção 'Embora' exprime valor semântico de:",
    "D",
    [
      ["A", "causa fundamental.", "Incorreta. Causa indica o motivo gerador."],
      ["B", "consequência necessária.", "Incorreta. Consequência expressa o resultado decorrente."],
      ["C", "comparação de igualdade.", "Incorreta. Comparação confronta dois elementos."],
      ["D", "concessão discursiva.", "Correta. Concessão expressa ideia de oposição ou ressalva que não impede a ocorrência do fato principal."],
      ["E", "conformidade normativa.", "Incorreta. Conformidade indica consonância ('conforme', 'segundo')."]
    ],
    "As orações concessivas apresentam uma circunstância que poderia contrariar ou inviabilizar a declaração da oração principal, mas que não a impede."),

  ce("pt-b5-015", TAXONOMIA.assuntos.morfologia,
    "No segmento 'Os peritos agiram prudentemente durante a reconstituição', o termo 'prudentemente' é um advérbio de modo derivado do adjetivo 'prudente' por meio do sufixo '-mente', exercendo sintaticamente a função de adjunto adverbial de modo.",
    true,
    "Prudente (adjetivo) + -mente (sufixo adverbializador) forma advérbio de modo, que sintaticamente se classifica como adjunto adverbial de modo."),

  ce("pt-b5-016", TAXONOMIA.assuntos.interpretacao,
    "Considere o enunciado: 'A impunidade não apenas corrói a confiança da sociedade nas instituições democráticas, mas também incentiva a reiteração delitiva.'\n\nA estrutura correlativa 'não apenas... mas também' confere ao período um sentido estritamente disjuntivo e excludente entre os dois efeitos da impunidade.",
    false,
    "A estrutura 'não apenas... mas também' é uma correlação aditiva enfática (soma de argumentos), e não uma relação disjuntiva ou de exclusão."),

  me("pt-b5-017", TAXONOMIA.assuntos.morfologia,
    "Assinale a opção em que o pronome oblíquo reflexivo ou apassivador está empregado de acordo com a norma culta formal da língua portuguesa.",
    "B",
    [
      ["A", "Apurou-se os fatos com extrema presteza pela comissão corregedora.", "Incorreta. Na voz passiva sintética, o verbo concorda com o sujeito paciente plural: 'Apuraram-se os fatos'."],
      ["B", "Constatou-se a veracidade das declarações prestadas pela testemunha durante o inquérito policial.", "Correta. Voz passiva sintética: 'a veracidade' é sujeito paciente singular, concordando com 'Constatou-se'."],
      ["C", "Identificou-se os criminosos por meio do reconhecimento fotográfico.", "Incorreta. Concordância incorreta: deve ser 'Identificaram-se os criminosos'."],
      ["D", "Tratam-se de delitos de menor potencial ofensivo.", "Incorreta. Com índice de indeterminação do sujeito ('de' + objeto indireto), o verbo fica no singular: 'Trata-se de delitos'."],
      ["E", "Precisam-se de peritos criminais experientes no instituto.", "Incorreta. Índice de indeterminação do sujeito exige singular: 'Precisa-se de peritos'."]
    ],
    "Na voz passiva sintética ('Constatou-se a veracidade'), a partícula 'se' é pronome apassivador e o verbo transita diretamente com seu sujeito paciente ('a veracidade foi constatada')."),

  ce("pt-b5-018", TAXONOMIA.assuntos.interpretacao,
    "Na frase 'Ao término da oitiva, o suspeito confessou o delito com riqueza de detalhes, sem que a autoridade policial precisasse confrontá-lo com as gravações obtidas', a locução 'sem que' introduz uma oração subordinada adverbial de sentido modal-negativo ou de ausência de condição impeditiva.",
    true,
    "'Sem que' expressa a circunstância concomitante negativa de ausência de necessidade de confronto, funcionando como adverbial modal/concessiva."),

  me("pt-b5-019", TAXONOMIA.assuntos.morfologia,
    "Quanto à flexão de tempo e modo dos verbos, assinale a opção inteiramente correta.",
    "C",
    [
      ["A", "Se os policiais manterem a guarda, ninguém fugirá.", "Incorreta. O futuro do subjuntivo do verbo 'manter' é 'mantiverem'."],
      ["B", "Quando o delegado propor a representação, o juiz apreciará a medida cautelar.", "Incorreta. Futuro do subjuntivo de 'propor' é 'propuser'."],
      ["C", "Se o perito contiver o vazamento de dados, a investigação preservará o sigilo necessário.", "Correta. O verbo 'conter' (derivado de ter) conjuga-se no futuro do subjuntivo como 'contiver'."],
      ["D", "Caso o agente rever as anotações do relatório, encontrará inconsistências.", "Incorreta. Futuro do subjuntivo de 'rever' é 'revir'."],
      ["E", "Se você intervir na cena do crime, a perícia restará prejudicada.", "Incorreta. Futuro do subjuntivo de 'intervir' (derivado de vir) é 'intervier'."]
    ],
    "Os verbos derivados seguem a conjugação dos primitivos: conter -> contiver (igual a ter -> tiver); manter -> mantiver; intervir -> intervier; propor -> propuser; rever -> revir."),

  ce("pt-b5-020", TAXONOMIA.assuntos.interpretacao,
    "No excerto 'A lavagem de dinheiro assemelha-se a uma hidra de cem cabeças: a cada esquema desmantelado pelos órgãos de repressão, novos tentáculos financeiros se articulam no mercado clandestino', o autor recorre a uma metáfora para enfatizar a complexidade, a multiplicidade e a capacidade de regeneração das redes de branqueamento de capitais.",
    true,
    "A comparação implícita com a figura mitológica da hidra de Lerna constitui recurso metafórico expressivo para ilustrar a dificuldade e a persistência na repressão aos crimes de lavagem de capitais.")
];
