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
    { letra: "C", texto: "Certo", correta, explicacao_especifica: correta ? "Correto. A assertiva atende plenamente às normas gramaticais e ao Manual de Redação Oficial." : "Incorreto. A assertiva transgride as regras gramaticais ou os padrões oficiais vigentes." },
    { letra: "E", texto: "Errado", correta: !correta, explicacao_especifica: !correta ? "Correto. Há desvio gramatical ou impropriedade normativa na proposição." : "Incorreto. A proposição é gramaticalmente irretocável e conforme ao padrão culto." }
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

export const portuguesPart3 = [
  ce("pt-b5-041", TAXONOMIA.assuntos.regencia_crase,
    "No enunciado 'A autoridade policial visava a elucidação célere do homicídio', o verbo 'visar', no sentido de almejar ou pretender, é transitivo indireto e exige a preposição 'a', sendo obrigatório o uso do acento indicativo de crase diante do substantivo feminino 'elucidação' acompanhado de artigo.",
    true,
    "O verbo 'visar' no sentido de ter como objetivo/almejar rege preposição 'a' (visar a algo). Preposição 'a' + artigo 'a' ('a elucidação') = crase obrigatória: 'visava à elucidação'."),

  me("pt-b5-042", TAXONOMIA.assuntos.regencia_crase,
    "Assinale a alternativa em que o uso do sinal indicativo de crase está estritamente correto.",
    "B",
    [
      ["A", "Os policiais prestaram pronto socorro à uma testemunha ferida no confronto.", "Incorreta. É proibido o uso de crase antes de artigo indefinido ('uma')."],
      ["B", "O delegado determinou que a equipe se dirigisse à cena do crime às duas horas da madrugada.", "Correta. Crase obrigatória diante de substantivo feminino determinado ('à cena') e em locuções adverbiais de horas exatas ('às duas horas')."],
      ["C", "O suspeito declarou que estava disposto à colaborar com a justiça.", "Incorreta. É vedado o uso de crase antes de verbo ('colaborar')."],
      ["D", "O relatório foi encaminhado à Sua Excelência o Juiz de Direito da Vara Criminal.", "Incorreta. É vedado o uso de crase antes de pronomes de tratamento (salvo 'senhora', 'senhorita' e 'dona')."],
      ["E", "O perito examinou o cadáver à distância de dez metros de quem passava.", "Incorreta. A expressão 'a distância' determinada admite crase, mas sem preposição regente direta de verbo intransitivo com sujeito não há junção inadequada."]
    ],
    "Ocorre crase na indicação de horas determinadas ('às duas horas') e na regência de verbos de movimento com substantivo feminino definido ('dirigir-se a' + 'a cena' = 'à cena')."),

  ce("pt-b5-043", TAXONOMIA.assuntos.regencia_crase,
    "Na frase 'O policial preferiu arriscar a própria vida do que abandonar os reféns à própria sorte', a regência do verbo 'preferir' atende rigorosamente ao padrão culto formal da língua portuguesa.",
    false,
    "O verbo 'preferir' é transitivo direto e indireto com preposição 'a' (preferir uma coisa 'A' outra), sendo incorreto o emprego de 'do que' ou 'mais que' na norma culta ('preferiu arriscar a própria vida a abandonar...')."),

  me("pt-b5-044", TAXONOMIA.assuntos.regencia_crase,
    "Assinale a opção em que a regência verbal está em perfeita consonância com a norma-padrão.",
    "C",
    [
      ["A", "O investigador assistiu o julgamento no plenário do tribunal do júri.", "Incorreta. 'Assistir' no sentido de presenciar/ver é transitivo indireto com preposição 'a': 'assistiu ao julgamento'."],
      ["B", "O novo regulamento policial implica em severas punições disciplinares aos infratores.", "Incorreta. 'Implicar' no sentido de acarretar/ter como consequência é transitivo direto (não rege 'em'): 'implica severas punições'."],
      ["C", "Os agentes obedeceram estritamente às determinações expedidas pela autoridade policial.", "Correta. O verbo 'obedecer' é transitivo indireto e exige preposição 'a': 'obedecer às determinações'."],
      ["D", "O delegado aspirava o cargo de diretor-geral com legítima expectativa.", "Incorreta. 'Aspirar' no sentido de almejar/pretender exige preposição 'a': 'aspirava ao cargo'."],
      ["E", "Lembrou do número da placa do veículo suspeito.", "Incorreta. O verbo 'lembrar' só rege 'de' quando for pronominal ('Lembrou-se do número' ou 'Lembrou o número')."]
    ],
    "O verbo 'obedecer' rege objeto indireto introduzido pela preposição 'a' ('obedecer a algo/alguém'). Já 'implicar' no sentido de acarretar é VTD, 'assistir' (presenciar) é VTI com 'a', 'aspirar' (almejar) é VTI com 'a' e 'lembrar' (não pronominal) é VTD."),

  ce("pt-b5-045", TAXONOMIA.assuntos.pontuacao,
    "No período 'O laudo pericial balístico, elaborado pelos peritos da Polícia Científica, comprovou a autoria do disparo fatal', as vírgulas isolam uma oração adjetiva explicativa reduzida de particípio, sendo facultativa a sua supressão sem alteração de sentido.",
    false,
    "A supressão das vírgulas converteria a oração adjetiva explicativa em restritiva, alterando profundamente o sentido do enunciado (passando a restringir o universo de laudos a apenas um específico)."),

  me("pt-b5-046", TAXONOMIA.assuntos.pontuacao,
    "Assinale a frase em que o emprego dos sinais de pontuação está inteiramente correto.",
    "A",
    [
      ["A", "Durante a madrugada de ontem, a equipe tática da Polícia Civil cumpriu, com precisão cirúrgica, os mandados de prisão preventiva expedidos pela 1ª Vara Criminal.", "Correta. Adjunto adverbial de tempo longo antecipado com vírgula e adjunto adverbial de modo intercalado entre vírgulas."],
      ["B", "O delegado de polícia responsável pelo inquérito, ouviu todas as testemunhas presenciais do fato.", "Incorreta. Vírgula proibida separando o sujeito do verbo."],
      ["C", "Os peritos criminais coletaram: vestígios de sangue, impressões digitais, e projéteis deformados.", "Incorreta. Dois-pontos indevidos entre o verbo e seus objetos diretos e vírgula indevida antes de 'e' aditivo."],
      ["D", "Embora o suspeito negasse os crimes, as provas colhidas pela investigação, confirmaram sua participação ativa.", "Incorreta. Vírgula indevida separando o sujeito ('as provas colhidas...') do verbo ('confirmaram')."],
      ["E", "O diretor da corregedoria afirmou, que nenhum ato ilícito será tolerado na corporação.", "Incorreta. Vírgula indevida separando a oração principal da oração subordinada substantiva objetiva direta."]
    ],
    "É regra basilar de pontuação não separar por vírgula: 1) o sujeito do seu predicado; 2) o verbo de seus complementos diretos ou indiretos; 3) a oração principal da subordinada substantiva integrante."),

  ce("pt-b5-047", TAXONOMIA.assuntos.pontuacao,
    "No fragmento 'A apreensão de bens do narcotráfico atinge dois objetivos primordiais: descapitalizar o crime organizado e financiar programas de segurança pública', os dois-pontos foram empregados corretamente para introduzir uma enumeração explicativa ou aposto discriminativo.",
    true,
    "Os dois-pontos são empregados de forma legítima para anunciar uma enumeração, síntese, explicação ou aposto que desenvolve termo anterior."),

  me("pt-b5-048", TAXONOMIA.assuntos.concordancia,
    "Assinale a alternativa em que a concordância nominal atende às normas da língua padrão.",
    "B",
    [
      ["A", "É proibido a entrada de pessoas não autorizadas no local isolado pela perícia.", "Incorreta. Com o artigo 'a', a concordância é obrigatória no feminino: 'É proibida a entrada'."],
      ["B", "Seguem anexas ao relatório policial as cópias das gravações telefônicas autorizadas judicialmente.", "Correta. O adjetivo 'anexo' concorda em gênero e número com o substantivo a que se refere ('as cópias anexas')."],
      ["C", "A escrivã estava meia nervosa diante da complexidade do flagrante.", "Incorreta. 'Meio' com valor de advérbio ('um pouco') é invariável: 'meio nervosa'."],
      ["D", "Os policiais mantiveram-se bastantes calmos durante as negociações com os sequestradores.", "Incorreta. 'Bastante' modificando adjetivo é advérbio e permanece invariável: 'bastante calmos'."],
      ["E", "Elas mesmo confirmaram a confissão de autoria do delito perante o juiz.", "Incorreta. Pronome demonstrativo enfático concorda com o sujeito: 'Elas mesmas confirmaram'."]
    ],
    "Concordância nominal: 'anexo' é adjetivo e concorda com o substantivo ('cópias anexas'); 'meio' e 'bastante' quando atuam como advérbios (modificando adjetivo/verbo) são rigorosamente invariáveis; com artigo antecedente ('a entrada'), exige-se 'proibida'."),

  ce("pt-b5-049", TAXONOMIA.assuntos.concordancia,
    "Na oração 'A maioria dos policiais envolvidos na operação foi condecorada com a medalha de bravura', o verbo e o particípio podem ser flexionados tanto no singular ('foi condecorada') quanto no plural ('foram condecorados'), em razão da presença de expressão partitiva seguida de adjunto no plural.",
    true,
    "Expressões partitivas ('a maioria de', 'grande parte de', 'a metade de') seguidas de substantivo no plural admitem dupla concordância: lógica/gramatical com o núcleo singular ('a maioria foi condecorada') ou atrativa com o especificador plural ('os policiais foram condecorados')."),

  me("pt-b5-050", TAXONOMIA.assuntos.concordancia,
    "Assinale a frase correta quanto à concordância verbal.",
    "C",
    [
      ["A", "Devem haver muitos indícios de autoria no relatório conclusivo.", "Incorreta. Locução verbal com verbo principal 'haver' impessoal transmite a impessoalidade ao auxiliar: 'Deve haver muitos indícios'."],
      ["B", "Vão fazer três meses que a força-tarefa iniciou os trabalhos de campo.", "Incorreta. Locução com 'fazer' indicando tempo decorrido fica no singular: 'Vai fazer três meses'."],
      ["C", "Podem existir testemunhas sigilosas que confirmem o álibi do acusado.", "Correta. O verbo 'existir' é pessoal e tem sujeito ('testemunhas sigilosas'), flexionando a locução no plural ('Podem existir')."],
      ["D", "Faziam dez anos que a delegacia regional não passava por reformas estruturais.", "Incorreta. 'Fazer' indicando tempo decorrido é impessoal: 'Fazia dez anos'."],
      ["E", "Tratam-se de mandados de busca e apreensão expedidos pela Justiça Federal.", "Incorreta. Com índice de indeterminação 'se', o verbo fica no singular: 'Trata-se de mandados'."]
    ],
    "O verbo 'existir' admite sujeito ('testemunhas') e flexiona-se no plural, transmitindo essa concordância ao verbo auxiliar 'poder' ('Podem existir testemunhas')."),

  ce("pt-b5-051", TAXONOMIA.assuntos.sintaxe,
    "Segundo as regras de colocação pronominal da norma culta, a mesóclise é de uso obrigatório no início de orações cujos verbos estejam conjugados no futuro do presente ou no futuro do pretérito do indicativo, desde que não haja termo atrativo de próclise antecedente (como em 'Cumprir-se-á o mandado judicial ao amanhecer').",
    true,
    "Com verbos no futuro do presente ou futuro do pretérito em início de oração sem fator atrativo, a mesóclise é imperativa ('Cumprir-se-á', 'Realizar-se-ia')."),

  me("pt-b5-052", TAXONOMIA.assuntos.interpretacao,
    "De acordo com a 3ª edição do Manual de Redação da Presidência da República (MRPR), são atributos fundamentais e indeclináveis da redação oficial:",
    "A",
    [
      ["A", "clareza e precisão; objetividade; concisão; coesão e coerência; impessoalidade; formalidade e padronização; e uso da norma-padrão da língua portuguesa.", "Correta. Rol oficial de atributos da redação oficial consagrado no Capítulo I do MRPR (3ª edição)."],
      ["B", "subjetividade expressiva; prolixidade argumentativa; uso livre de jargões técnicos herméticos; e coloquialismo regional.", "Incorreta. Subjetividade, prolixidade e coloquialismo são expressamente rechaçados na redação oficial."],
      ["C", "sigilo corporativo; ornatos retóricos arcaicos; emprego de adjetivação sentimental; e hermetismo jurídico.", "Incorreta. A redação oficial prima pela simplicidade, clareza e impessoalidade."],
      ["D", "polifonia discursiva; ambiguidades deliberadas para salvaguarda de autoridade; e flexibilidade gramatical.", "Incorreta. A clareza e a precisão exigem ausência de dubiedades."],
      ["E", "linguagem cifrada; uso de abreviaturas não consagradas; e personalismo decisório.", "Incorreta. A impessoalidade veda personalismos e preza pela padronização."]
    ],
    "O Manual de Redação da Presidência da República (3ª edição, 2018) estabelece como atributos da redação dos atos oficiais: clareza e precisão, objetividade, concisão, coesão e coerência, impessoalidade, formalidade e padronização, e uso da norma-padrão da língua portuguesa."),

  ce("pt-b5-053", TAXONOMIA.assuntos.interpretacao,
    "Nos termos do Manual de Redação da Presidência da República (3ª edição), a impessoalidade da redação oficial decorre do princípio constitucional da impessoalidade e exige que os atos e comunicações oficiais sejam isentos de marcas de personalidade pessoal ou opiniões subjetivas do redator, refletindo a manifestação impessoal do órgão ou entidade pública.",
    true,
    "A impessoalidade fundamenta-se no art. 37, caput, da CF/88, impondo tratamento formal, objetivo e desprovido de marcas subjetivas individuais."),

  me("pt-b5-054", TAXONOMIA.assuntos.interpretacao,
    "A respeito do emprego de pronomes de tratamento e fechos nas comunicações oficiais consoante o Manual de Redação da Presidência da República (3ª edição), assinale a opção correta.",
    "D",
    [
      ["A", "O pronome de tratamento 'Vossa Excelência' deve ser utilizado exclusivamente para o Presidente da República, sendo os demais agentes tratados por 'Vossa Senhoria'.", "Incorreta. 'Vossa Excelência' é conferido aos Chefes de Poder, Ministros, Governadores, Prefeitos, Desembargadores, Juízes, Procuradores e autoridades equiparadas."],
      ["B", "O fecho 'Respeitosamente' deve ser empregado para autoridades de mesma hierarquia ou de hierarquia inferior à do emissor.", "Incorreta. 'Respeitosamente' é reservado a autoridades de hierarquia superior."],
      ["C", "Os vocativos 'Digníssimo' e 'Ilustríssimo' foram mantidos como obrigatórios no tratamento de juízes e delegados.", "Incorreta. O MRPR aboliu expressamente o uso de 'Digníssimo' (DD.) e 'Ilustríssimo' (Ilmo.)."],
      ["D", "Emprega-se 'Respeitosamente' para autoridades de hierarquia superior à do remetente (inclusive o Presidente da República) e 'Atenciosamente' para autoridades de mesma hierarquia, de hierarquia inferior ou para particulares.", "Correta. Padronização exata dos fechos estabelecida pelo MRPR (3ª edição)."],
      ["E", "O padrão ofício foi substituído pela redação em formato de carta aberta não estruturada.", "Incorreta. O padrão ofício unificou aviso, ofício e memorando em formato padronizado."]
    ],
    "O MRPR (3ª edição) padronizou os fechos para comunicações oficiais em apenas dois: a) 'Respeitosamente', para autoridades de hierarquia superior à do remetente; e b) 'Atenciosamente', para autoridades de mesma hierarquia, de hierarquia inferior ou para particulares. Foram abolidos os tratamentos 'Digníssimo' e 'Ilustríssimo'."),

  ce("pt-b5-055", TAXONOMIA.assuntos.interpretacao,
    "No padrão ofício adotado pela administração pública federal, a identificação do signatário deve ser posicionada ao final do documento, contendo o nome do signatário em letras maiúsculas e, na linha imediatamente abaixo, o cargo ou função que ocupa, sendo vedada a inclusão de linhas ou traços horizontais sobre o nome para aposição de assinatura.",
    true,
    "O MRPR (3ª edição) veda o uso de linhas para assinatura e estabelece a diagramação com o nome da autoridade e o respectivo cargo na linha inferior."),

  ce("pt-b5-056", TAXONOMIA.assuntos.regencia_crase,
    "Na frase 'As informações sigilosas foram repassadas às polícias estaduais e à Receita Federal', o emprego do acento indicativo de crase em ambas as ocorrências justifica-se pela fusão da preposição 'a' (exigida pelo verbo 'repassar a') com os artigos femininos definidos 'as' e 'a'.",
    true,
    "O verbo bitransitivo 'repassar' rege preposição 'a' para seu objeto indireto. A fusão com 'as polícias' gera 'às' e com 'a Receita Federal' gera 'à'."),

  me("pt-b5-057", TAXONOMIA.assuntos.sintaxe,
    "Considere as frases a seguir quanto à concordância verbal com o pronome relativo 'que' e o pronome indefinido 'quem':\nI. Fui eu que coordenou a operação integrada de combate às milícias.\nII. Fui eu que coordenei a operação integrada de combate às milícias.\nIII. Fui eu quem coordenou a operação integrada de combate às milícias.\nIV. Fui eu quem coordenei a operação integrada de combate às milícias.\n\nEstão gramaticalmente corretas as frases:",
    "B",
    [
      ["A", "I e III, apenas.", "Incorreta. A frase I é incorreta (com 'que', o verbo deve concordar com 'eu' -> 'coordenei')."],
      ["B", "II, III e IV, apenas.", "Correta. Com 'que', o verbo concorda obrigatoriamente com o antecedente ('eu coordenei' - II). Com 'quem', o verbo pode concordar na 3ª pessoa do singular ('quem coordenou' - III) ou com o antecedente ('quem coordenei' - IV)."],
      ["C", "I, II e IV, apenas.", "Incorreta. A frase I está errada."],
      ["D", "II e III, apenas.", "Incorreta. A frase IV também é aceita pela norma gramatical culta."],
      ["E", "I, II, III e IV.", "Incorreta. A frase I viola a concordância com o pronome 'que'."]
    ],
    "Regras de concordância: Com o pronome relativo 'que', o verbo concorda obrigatoriamente com o antecedente ('eu que coordenei'). Com 'quem', são admitidas duas concordâncias: na 3ª pessoa do singular ('quem coordenou') ou concordando com o pronome antecedente ('quem coordenei')."),

  ce("pt-b5-058", TAXONOMIA.assuntos.ortografia,
    "As palavras 'autoacusação', 'infraestrutura', 'extraoficial' e 'semiautomática' estão corretamente grafadas sem hífen, pois, segundo o Acordo Ortográfico, os prefixos terminados em vogal unem-se diretamente a palavras iniciadas por vogal diferente sem separação por hífen.",
    true,
    "Regra geral do Novo Acordo Ortográfico: prefixo terminado em vogal junta-se diretamente à base iniciada por vogal diferente sem hífen (autoacusação, infraestrutura, extraoficial, semiautomática)."),

  me("pt-b5-059", TAXONOMIA.assuntos.regencia_crase,
    "Assinale a frase em que o uso da crase é facultativo.",
    "A",
    [
      ["A", "O delegado solicitou apoio à sua equipe especializada em repressão a sequestros.", "Correta. Antes de pronome possessivo feminino singular ('sua equipe'), o uso do artigo é facultativo, tornando a crase facultativa."],
      ["B", "O agente comunicou o ocorrido à autoridade policial de plantão.", "Incorreta. Crase obrigatória diante de substantivo feminino determinado."],
      ["C", "A viatura deslocou-se às pressas para o local da ocorrência.", "Incorreta. Crase obrigatória em locução adverbial de modo feminina ('às pressas')."],
      ["D", "O suspeito retornou à delegacia às 18 horas.", "Incorreta. Crase obrigatória na indicação de horas exatas e no destino com artigo."],
      ["E", "A diligência prosseguiu à medida que as pistas surgiam.", "Incorreta. Crase obrigatória em locução conjuntiva proporcional ('à medida que')."]
    ],
    "A crase é facultativa em três situações clássicas: 1) Diante de pronomes possessivos femininos no singular ('à / a sua equipe'); 2) Diante de nomes próprios femininos sem determinação prévia ('à / a Maria'); 3) Após a preposição 'até' ('até à / até a delegacia')."),

  ce("pt-b5-060", TAXONOMIA.assuntos.interpretacao,
    "No segmento 'A preservação dos vestígios no local do crime é condição *sine qua non* para a higidez da cadeia de custódia e o êxito da persecução penal', a expressão em latim '*sine qua non*' foi empregada adequadamente para designar uma condição indispensável, essencial e necessária sem a qual o fato não subsiste.",
    true,
    "A locução latina 'sine qua non' significa literalmente 'sem a qual não', indicando requisito ou condição essencial e indispensável à validade ou eficácia de um ato ou procedimento.")
];
