import { DISCIPLINAS, ASSUNTOS, criarQuestaoCE, criarQuestaoME, writeModuleFile } from "./helpers.mjs";

// ==============================================================
// M21: LÍNGUA PORTUGUESA — SINTAXE, CONCORDÂNCIA, REGÊNCIA E CRASE (15 questões)
// ==============================================================
const m21_data = [
  {
    tipo: "CE",
    slug: "l13-port-sint-001-concordancia-verbo-haver-tempo-existir",
    assuntoId: ASSUNTOS.PORT_CONCORDANCIA,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal",
    dificuldade: "facil",
    enunciado: "No trecho 'Havia muitos indícios de fraude contábil nos relatórios periciais', o verbo 'haver' foi empregado como impessoal no sentido de 'existir', motivo pelo qual deve permanecer compulsoriamente flexionado na terceira pessoa do singular, constituindo erro gramatical a sua flexão para 'Haviam'.",
    explicacao: "GABARITO: CERTO. O verbo 'haver' com sentido de 'existir' ou 'ocorrer' é impessoal (oração sem sujeito) e conjuga-se exclusivamente na 3ª pessoa do singular.",
    gabaritoCerto: true,
    conceito: "Impessoalidade do verbo 'haver' no sentido de 'existir'",
    habilidade: "Reconhecer as regras de concordância com orações sem sujeito e verbos impessoais",
    tese: "O verbo haver com sentido de existir é impessoal e não flexiona no plural",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-port-sint-002-voz-passiva-sintetica-particula-se-plural",
    assuntoId: ASSUNTOS.PORT_CONCORDANCIA,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Escrivão de Polícia Civil",
    dificuldade: "medio",
    enunciado: "Na frase 'Apuraram-se os crimes de lavagem de dinheiro após a quebra de sigilo', a partícula 'se' atua como pronome apassivador (partícula apassivadora), sendo a locução 'os crimes de lavagem de dinheiro' o sujeito paciente da oração, o que torna obrigatória a concordância do verbo no plural.",
    explicacao: "GABARITO: CERTO. Em 'Apuraram-se os crimes', 'os crimes' é sujeito paciente em voz passiva sintética (equivalente a 'os crimes foram apurados'), exigindo verbo no plural.",
    gabaritoCerto: true,
    conceito: "Voz Passiva Sintética e Partícula Apassivadora 'se'",
    habilidade: "Identificar o sujeito paciente e aplicar a concordância verbal obrigatória",
    tese: "Na voz passiva sintética com partícula apassivadora o verbo concorda com o sujeito paciente",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-port-sint-003-crase-locucoes-femininas-a-disposicao",
    assuntoId: ASSUNTOS.PORT_REGENCIA_CRASE,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "facil",
    enunciado: "O emprego do sinal indicativo de crase é obrigatório em locuções prepositivas e adverbiais femininas, a exemplo de 'à disposição da Justiça', 'às pressas' e 'à medida que'.",
    explicacao: "GABARITO: CERTO. Locuções adverbiais, prepositivas e conjuntivas formadas por palavras femininas exigem crase de forma canônica.",
    gabaritoCerto: true,
    conceito: "Crase obrigatória em locuções prepositivas, adverbiais e conjuntivas femininas",
    habilidade: "Identificar as regras fixas de acentuação grave em locuções estruturais",
    tese: "Locuções femininas levam acento grave indicativo de crase obrigatoriamente",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-port-sint-004-regencia-verbo-implicar-transitivo-direto",
    assuntoId: ASSUNTOS.PORT_REGENCIA_CRASE,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "medio",
    enunciado: "De acordo com a norma-padrão da língua portuguesa, o verbo 'implicar', no sentido de 'acarretar' ou 'trazer como consequência', é transitivo direto e dispensa o emprego da preposição 'em', estando gramaticalmente correta a oração: 'A adulteração do chassi implicará a apreensão imediata do veículo'.",
    explicacao: "GABARITO: CERTO. O verbo implicar (acarretar) é VTD: 'implicará a apreensão' (e NÃO 'implicará na apreensão').",
    gabaritoCerto: true,
    conceito: "Regência do verbo 'implicar' no sentido de acarretar (Transitivo Direto)",
    habilidade: "Corrigir desvios comuns de regência verbal em relatórios oficiais",
    tese: "O verbo implicar no sentido de acarretar rege complemento sem preposição 'em'",
    nivel: "compreender"
  },
  {
    tipo: "ME",
    slug: "l13-port-sint-005-crase-casos-proibidos-verbos-masculino",
    assuntoId: ASSUNTOS.PORT_REGENCIA_CRASE,
    banca: "FGV", orgao: "Polícia Civil", cargo: "Investigador de Polícia",
    dificuldade: "medio",
    enunciado: "Assinale a alternativa em que o sinal indicativo de crase foi empregado em estrita conformidade com a norma-padrão da língua culta.",
    explicacao: "GABARITO: D. 'Os agentes dirigiram-se à delegacia central': 'dirigir-se' rege preposição 'a' + artigo definido feminino 'a' de 'delegacia central' = 'à'. Nas demais: A (a pé = masculino proibido), B (a partir = verbo proibido), C (a todas = pronome indefinido proibido), E (a uma = artigo indefinido proibido).",
    alternativas: [
      { letra: "A", texto: "Os policiais realizaram a patrulha à pé durante a madrugada.", correta: false, explicacao_especifica: "Incorreta. 'Pé' é palavra masculina, proibindo a crase." },
      { letra: "B", texto: "A fiscalização terá início à partir das oito horas da manhã.", correta: false, explicacao_especifica: "Incorreta. Antes de verbo no infinitivo ('partir') a crase é proibida." },
      { letra: "C", texto: "O delegado prestou esclarecimentos à todas as testemunhas presentes.", correta: false, explicacao_especifica: "Incorreta. Antes de pronome indefinido ('todas') a crase é proibida." },
      { letra: "D", texto: "Os agentes dirigiram-se à delegacia central para lavrar o flagrante.", correta: true, explicacao_especifica: "Correta. Regência de 'dirigir-se a' + artigo feminino 'a delegacia'." },
      { letra: "E", texto: "A vítima foi conduzida à uma unidade hospitalar com urgência.", correta: false, explicacao_especifica: "Incorreta. Antes do artigo indefinido 'uma' não ocorre crase." }
    ],
    conceito: "Emprego Correto do Sinal Indicativo de Crase e Casos de Proibição",
    habilidade: "Diferenciar contextos legítimos de crase frente a casos proibidos",
    tese: "A crase resulta da fusão de preposição 'a' com artigo 'a', inadmitida antes de verbo ou masculino",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-port-sint-006-regencia-verbo-aspirar-visar-sentidos",
    assuntoId: ASSUNTOS.PORT_REGENCIA_CRASE,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal",
    dificuldade: "medio",
    enunciado: "O verbo 'aspirar', quando empregado com o significado de 'almejar' ou 'pretender' (ex.: 'O candidato aspira ao cargo de Perito Criminal Federal'), rege a preposição 'a' (transitivo indireto); já com o significado de 'sorver' ou 'inalar' (ex.: 'O policial aspirou o gás lacrimogêneo'), é transitivo direto e não exige preposição.",
    explicacao: "GABARITO: CERTO. Aspirar = inalar (VTD) / almejar (VTI prep 'a'). Diferenciação semântica clássica da regência verbal.",
    gabaritoCerto: true,
    conceito: "Regência Semântica do verbo 'aspirar' (Inalar vs Almejar)",
    habilidade: "Distinguir a transitividade de verbos com dupla acepção semântica",
    tese: "Aspirar no sentido de almejar é transitivo indireto com preposição 'a'",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-port-sint-007-concordancia-nominal-anexo-bastante-meio",
    assuntoId: ASSUNTOS.PORT_CONCORDANCIA,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Delegado de Polícia Civil",
    dificuldade: "medio",
    enunciado: "Na frase 'Seguem anexos os laudos periciais e inclusas as certidões criminais', as palavras 'anexos' e 'inclusas' funcionam como adjetivos e concordam em gênero e número com os respectivos substantivos a que se referem, ao passo que a locução 'em anexo' seria invariável caso tivesse sido utilizada.",
    explicacao: "GABARITO: CERTO. 'Anexo/incluso' flexiona com o substantivo. A locução adverbial 'em anexo' permanece invariável.",
    gabaritoCerto: true,
    conceito: "Concordância Nominal: Adjetivos 'anexo/incluso' vs Locução 'em anexo'",
    habilidade: "Aplicar a concordância nominal culta em expedientes policiais",
    tese: "'Anexo' adjetivo varia em gênero e número; 'em anexo' locução adverbial é invariável",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-port-sint-008-crase-facultativa-possessivo-feminino-singular",
    assuntoId: ASSUNTOS.PORT_REGENCIA_CRASE,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "facil",
    enunciado: "Na oração 'O inspetor comunicou o fato a sua equipe / à sua equipe', o emprego do sinal indicativo de crase diante do pronome possessivo feminino singular ('sua') é estritamente facultativo na norma-padrão.",
    explicacao: "GABARITO: CERTO. Diante de pronomes possessivos femininos no singular (minha, tua, sua, nossa, vossa), o uso do artigo é facultativo, tornando a crase facultativa.",
    gabaritoCerto: true,
    conceito: "Crase Facultativa antes de Pronome Possessivo Feminino no Singular",
    habilidade: "Identificar os casos facultativos de crase na norma culta",
    tese: "Antes de possessivo feminino singular o artigo é facultativo e a crase é opcional",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-port-sint-009-regencia-verbo-obedecer-transitivo-indireto",
    assuntoId: ASSUNTOS.PORT_REGENCIA_CRASE,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Investigador de Polícia",
    dificuldade: "facil",
    enunciado: "De acordo com a norma culta, o verbo 'obedecer' é transitivo indireto e rege a preposição 'a', sendo gramaticalmente incorreta a construção 'O motorista não obedeceu o sinal de parada', devendo-se redigir: 'O motorista não obedeceu ao sinal de parada'.",
    explicacao: "GABARITO: CERTO. Obedecer e desobedecer exigem preposição 'a' (obedecer a algo/alguém).",
    gabaritoCerto: true,
    conceito: "Regência dos verbos 'obedecer' e 'desobedecer' (Transitivos Indiretos)",
    habilidade: "Identificar a transitividade indireta obrigatória de 'obedecer'",
    tese: "O verbo obedecer rege obrigatoriamente a preposição 'a' perante a norma-padrão",
    nivel: "recordar"
  },
  {
    tipo: "ME",
    slug: "l13-port-sint-010-concordancia-verbal-sujeito-partitivo",
    assuntoId: ASSUNTOS.PORT_CONCORDANCIA,
    banca: "Vunesp", orgao: "Polícia Civil", cargo: "Delegado de Polícia Civil",
    dificuldade: "medio",
    enunciado: "Considere a frase: 'A maioria dos policiais militares __________ (comparecer) à solenidade de condecoração ontem'. Segundo as regras de concordância verbal da norma-padrão, quais formas verbais preenchem correta e facultativamente a lacuna?",
    explicacao: "GABARITO: C. Com expressões partitivas (a maioria de, a maior parte de, grande número de) seguidas de adjunto no plural, a concordância é facultativa: pode concordar no singular com o núcleo partitivo ('compareceu') ou no plural por atração com o adjunto ('compareceram').",
    alternativas: [
      { letra: "A", texto: "Apenas 'compareceu', sendo o plural absolutamente proibido pela gramática tradicional.", correta: false, explicacao_especifica: "Incorreta. A concordância atrativa com 'policiais militares' é legítima." },
      { letra: "B", texto: "Apenas 'compareceram', pois o sujeito é gramaticalmente classificado como composto.", correta: false, explicacao_especifica: "Incorreta. O sujeito é simples com núcleo partitivo." },
      { letra: "C", texto: "Tanto 'compareceu' (concordância lógica com o núcleo 'maioria') quanto 'compareceram' (concordância atrativa com 'policiais militares').", correta: true, explicacao_especifica: "Correta. Regra canônica da concordância com expressões partitivas." },
      { letra: "D", texto: "Apenas 'haviam comparecido', sendo obrigatório o particípio no singular.", correta: false, explicacao_especifica: "Incorreta. Desvia do tempo verbal solicitado e erra no auxiliar." },
      { letra: "E", texto: "Nenhuma forma flexionada, devendo o verbo permanecer obrigatoriamente no infinitivo impessoal.", correta: false, explicacao_especifica: "Incorreta. A oração exige verbo conjugado no pretérito perfeito." }
    ],
    conceito: "Concordância Verbal com Expressões Partitivas (Núcleo Singular + Adjunto Plural)",
    habilidade: "Aplicar a dupla possibilidade de concordância em sujeitos partitivos",
    tese: "Expressões partitivas admitem concordância lógica com o núcleo ou atrativa com o especificador",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-port-sint-011-concordancia-verbo-fazer-tempo-decorrido",
    assuntoId: ASSUNTOS.PORT_CONCORDANCIA,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "facil",
    enunciado: "O verbo 'fazer', quando empregado na indicação de tempo transcorrido ou fenômenos climáticos, é impessoal e não admite flexão no plural, estando correta a redação: 'Faz cinco anos que a investigação foi instaurada'.",
    explicacao: "GABARITO: CERTO. 'Fazer' indicando tempo decorrido é impessoal (faz cinco anos, e NUNCA 'fazem cinco anos').",
    gabaritoCerto: true,
    conceito: "Impessoalidade do verbo 'fazer' na indicação de tempo decorrido",
    habilidade: "Reconhecer a invariabilidade de 'fazer' em orações temporais",
    tese: "O verbo fazer que indica tempo transcorrido não flexiona para o plural",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-port-sint-012-regencia-verbo-preferir-bitransitivo-sem-mais",
    assuntoId: ASSUNTOS.PORT_REGENCIA_CRASE,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "medio",
    enunciado: "O verbo 'preferir' é transitivo direto e indireto, exigindo a preposição 'a' para introduzir o segundo termo, sendo contrária à norma culta a utilização de termos intensificadores ou locuções comparativas como 'mais', 'antes' ou 'do que' (ex.: correto: 'O policial prefere o treinamento tático à rotina burocrática').",
    explicacao: "GABARITO: CERTO. Prefere-se X a Y (nunca 'prefere mais X do que Y'). O acento de crase em 'à rotina' decorre da preposição 'a' + artigo 'a'.",
    gabaritoCerto: true,
    conceito: "Regência do verbo 'preferir' (Preferir X a Y)",
    habilidade: "Expurgar pleonasmos e construções comparativas inadequadas com o verbo preferir",
    tese: "O verbo preferir rege a preposição 'a' e repele 'do que' ou intensificadores",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-port-sint-013-crase-pronomes-demonstrativos-aquele-aquilo",
    assuntoId: ASSUNTOS.PORT_REGENCIA_CRASE,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Escrivão de Polícia Civil",
    dificuldade: "medio",
    enunciado: "Ocorre crase quando a preposição 'a', exigida por um termo regente anterior, funde-se com a vogal inicial dos pronomes demonstrativos 'aquele(s)', 'aquela(s)' ou 'aquilo', como na frase: 'O delegado referiu-se àquele depoimento contraditório'.",
    explicacao: "GABARITO: CERTO. Referir-se a + aquele = àquele. A fusão da preposição com o 'a' do pronome demonstrativo recebe acento grave.",
    gabaritoCerto: true,
    conceito: "Crase com Pronomes Demonstrativos (Àquele, Àquela, Àquilo)",
    habilidade: "Identificar a fusão prepositiva com pronomes demonstrativos iniciados pela letra 'a'",
    tese: "A preposição 'a' funde-se com a letra inicial de aquele/aquela/aquilo gerando crase",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-port-sint-014-concordancia-nominal-expressao-e-proibido",
    assuntoId: ASSUNTOS.PORT_CONCORDANCIA,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Investigador de Polícia",
    dificuldade: "medio",
    enunciado: "Nas expressões 'é proibido', 'é necessário' e 'é permitido', o adjetivo permanece invariável no masculino singular quando o substantivo não vem precedido de artigo determinante (ex.: 'É proibido entrada de civis'); havendo artigo ou determinante feminino, a concordância torna-se obrigatória (ex.: 'É proibida a entrada de civis').",
    explicacao: "GABARITO: CERTO. Sem determinante = invariável ('É proibido entrada'); com determinante = flexão obrigatória ('É proibida a entrada').",
    gabaritoCerto: true,
    conceito: "Concordância das Expressões 'É proibido / É necessário / É permitido'",
    habilidade: "Analisar a presença de determinantes na flexão de predicativos de sujeito",
    tese: "A presença de artigo feminino determina a flexão obrigatória de 'é proibida'",
    nivel: "compreender"
  },
  {
    tipo: "ME",
    slug: "l13-port-sint-015-concordancia-verbal-indice-indeterminacao-sujeito",
    assuntoId: ASSUNTOS.PORT_CONCORDANCIA,
    banca: "Instituto AOCP", orgao: "Polícia Civil", cargo: "Delegado de Polícia Civil",
    dificuldade: "dificil",
    enunciado: "Analise a frase: 'Tratavam-se de questões altamente complexas sobre o tráfico internacional de drogas'. De acordo com a norma-padrão da língua portuguesa, assinale a avaliação gramatical correta.",
    explicacao: "GABARITO: B. O verbo 'tratar-se de' é transitivo indireto acompanhado de pronome 'se' como índice de indeterminação do sujeito. Com índice de indeterminação, o verbo fica obrigatoriamente no singular: 'Tratava-se de questões altamente complexas...'.",
    alternativas: [
      { letra: "A", texto: "A frase está correta, pois o verbo deve concordar no plural com o sujeito paciente 'questões altamente complexas'.", correta: false, explicacao_especifica: "Incorreta. 'De questões' é objeto indireto preposicionado, não sujeito." },
      { letra: "B", texto: "A frase apresenta erro de concordância verbal, pois o verbo 'tratar-se' com índice de indeterminação do sujeito deve permanecer obrigatoriamente na terceira pessoa do singular: 'Tratava-se de questões'.", correta: true, explicacao_especifica: "Correta. Regra estrita do índice de indeterminação do sujeito." },
      { letra: "C", texto: "A frase é ambígua e deveria ter sido escrita na voz passiva analítica com o verbo haver.", correta: false, explicacao_especifica: "Incorreta. Não se trata de ambiguidade, mas de erro de concordância." },
      { letra: "D", texto: "O emprego da preposição 'de' é facultativo após o verbo tratar quando acompanhado de pronome reflexivo.", correta: false, explicacao_especifica: "Incorreta. A preposição 'de' é obrigatória pela regência do verbo." },
      { letra: "E", texto: "A flexão no plural é autorizada facultativamente por motivo de eufonia fonética.", correta: false, explicacao_especifica: "Incorreta. A norma culta não admite pluralização com índice de indeterminação." }
    ],
    conceito: "Índice de Indeterminação do Sujeito e Invariabilidade do Verbo no Singular",
    habilidade: "Diferenciar a partícula apassivadora (VTD) do índice de indeterminação do sujeito (VTI)",
    tese: "Com índice de indeterminação do sujeito o verbo permanece fixo na 3ª pessoa do singular",
    nivel: "analisar"
  }
];

// ==============================================================
// M22: LÍNGUA PORTUGUESA — PONTUAÇÃO, COESÃO, TIPOLOGIA E REDAÇÃO OFICIAL (15 questões)
// ==============================================================
const m22_data = [
  {
    tipo: "CE",
    slug: "l13-port-red-001-pontuacao-proibicao-virgula-sujeito-predicado",
    assuntoId: ASSUNTOS.PORT_PONTUACAO,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal",
    dificuldade: "facil",
    enunciado: "Constitui erro gramatical grave a inserção de vírgula simples separando o sujeito de seu respectivo predicado ou o verbo transitivo de seus complementos diretos e indiretos, exceto se houver termos explicativos ou orações interferentes devidamente intercalados entre duas vírgulas.",
    explicacao: "GABARITO: CERTO. Regra pétrea de pontuação: não se separa sujeito de predicado nem verbo de seus complementos por vírgula simples.",
    gabaritoCerto: true,
    conceito: "Proibição da vírgula entre sujeito e predicado e entre verbo e complementos",
    habilidade: "Reconhecer a estruturação sintática canônica dos termos da oração",
    tese: "A sintaxe proíbe o isolamento do sujeito em relação ao predicado por vírgula simples",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-port-red-002-oracoes-adjetivas-explicativa-com-virgula",
    assuntoId: ASSUNTOS.PORT_PONTUACAO,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "medio",
    enunciado: "Na frase 'Os policiais rodoviários federais, que concluíram o curso de pilotagem defensiva, foram destacados para a operação especial', a oração adjetiva entre vírgulas é explicativa e indica que a totalidade dos policiais rodoviários concluiu o referido curso; a supressão das vírgulas transformaria a oração em restritiva, alterando o sentido para indicar que apenas uma parcela deles realizou o treinamento.",
    explicacao: "GABARITO: CERTO. A vírgula na oração subordinada adjetiva define o caráter semântico: com vírgula = explicativa (generaliza o todo); sem vírgula = restritiva (limita a uma parte).",
    gabaritoCerto: true,
    conceito: "Distinção Semântica e Sintática entre Orações Adjetivas Explicativas e Restritivas",
    habilidade: "Analisar as alterações de sentido decorrentes da inserção ou supressão de vírgulas",
    tese: "Vírgulas em orações adjetivas conferem valor explicativo generalizante; sua ausência restringe",
    nivel: "analisar"
  },
  {
    tipo: "CE",
    slug: "l13-port-red-003-redacao-oficial-manual-pr-fechos-respeitosamente-atenciosamente",
    assuntoId: ASSUNTOS.PORT_REDACAO_OFICIAL,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "facil",
    enunciado: "De acordo com o Manual de Redação da Presidência da República (3ª edição), os fechos para comunicações oficiais foram padronizados em duas únicas modalidades: 'Respeitosamente', para autoridades de hierarquia superior (inclusive o Presidente da República), e 'Atenciosamente', para autoridades de mesma hierarquia ou de hierarquia inferior.",
    explicacao: "GABARITO: CERTO. Padronização exata do MRPR: 'Respeitosamente' (hierarquia superior) e 'Atenciosamente' (mesma hierarquia ou inferior).",
    gabaritoCerto: true,
    conceito: "Fechos de Comunicação Oficial segundo o Manual de Redação da Presidência da República",
    habilidade: "Identificar o fecho adequado de acordo com a hierarquia da autoridade destinatária",
    tese: "O MRPR padroniza 'Respeitosamente' para superiores e 'Atenciosamente' para pares e subordinados",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-port-red-004-coesao-anafora-vs-catafora-pronomes",
    assuntoId: ASSUNTOS.PORT_COMPREENSAO_TEXTO,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Escrivão de Polícia Civil",
    dificuldade: "medio",
    enunciado: "No mecanismo de coesão textual referencial, a anáfora ocorre quando um pronome retoma um termo ou ideia previamente expresso no texto (ex.: 'O delegado colheu as provas; estas foram anexadas aos autos'), enquanto a catáfora antecipa uma informação que ainda será apresentada na sequência da narrativa.",
    explicacao: "GABARITO: CERTO. Anáfora = retomada de termo antecedente; Catáfora = projeção/antecipação de termo subsequente.",
    gabaritoCerto: true,
    conceito: "Mecanismos de Coesão Referencial: Anáfora vs Catáfora",
    habilidade: "Reconhecer o movimento endofórico de pronomes na costura textual",
    tese: "A anáfora retoma termos anteriores e a catáfora introduz termos posteriores",
    nivel: "compreender"
  },
  {
    tipo: "ME",
    slug: "l13-port-red-005-conjuncoes-adversativas-vs-concessivas",
    assuntoId: ASSUNTOS.PORT_COMPREENSAO_TEXTO,
    banca: "FGV", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal",
    dificuldade: "medio",
    enunciado: "Considere o período: 'Embora a tempestade tenha danificado os transmissores de rádio, a equipe tática manteve o cerco ao esconderijo'. O conectivo sublinhado ('Embora') estabelece no período uma relação semântica de:",
    explicacao: "GABARITO: B. 'Embora' é uma conjunção subordinativa concessiva por excelência, introduzindo uma oração que expressa um obstáculo que não impede a realização da oração principal.",
    alternativas: [
      { letra: "A", texto: "Causa explicativa direta.", correta: false, explicacao_especifica: "Incorreta. Conjunção causal seria 'porque', 'já que'." },
      { letra: "B", texto: "Concessão (fato que opõe obstáculo sem impedir o desfecho principal).", correta: true, explicacao_especifica: "Correta. 'Embora' introduz ideia concessiva." },
      { letra: "C", texto: "Consequência proporcional.", correta: false, explicacao_especifica: "Incorreta. Consecutiva seria 'tanto... que'." },
      { letra: "D", texto: "Condição hipotética vinculante.", correta: false, explicacao_especifica: "Incorreta. Condicional seria 'se', 'caso'." },
      { letra: "E", texto: "Finalidade teleológica.", correta: false, explicacao_especifica: "Incorreta. Final seria 'a fim de que', 'para que'." }
    ],
    conceito: "Valores Semânticos das Conjunções: Concessão ('Embora')",
    habilidade: "Identificar o nexo semântico de orações subordinadas concessivas",
    tese: "A conjunção 'embora' introduz uma concessão que não invalida a oração principal",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-port-red-006-redacao-oficial-pronomes-tratamento-concordancia",
    assuntoId: ASSUNTOS.PORT_REDACAO_OFICIAL,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "medio",
    enunciado: "Nas comunicações oficiais endereçadas a autoridades tratadas por 'Vossa Excelência' ou 'Vossa Senhoria', a concordância verbal e pronominal deve ser feita compulsoriamente na terceira pessoa do singular (ex.: 'Vossa Excelência designou seus assessores'), e a concordância de gênero dos adjetivos deve ajustar-se ao sexo da pessoa a quem se refere (ex.: 'Vossa Excelência está atarefado' / 'Vossa Excelência está atarefada').",
    explicacao: "GABARITO: CERTO. Pronomes de tratamento exigem verbo e possessivos em 3ª pessoa ('seus', e não 'vossos') e adjetivos concordam com o gênero real da autoridade.",
    gabaritoCerto: true,
    conceito: "Concordância com Pronomes de Tratamento na Redação Oficial",
    habilidade: "Aplicar a concordância gramatical de 3ª pessoa e a concordância ideológica de gênero",
    tese: "Pronomes de tratamento regem 3ª pessoa e adjetivos concordam com o sexo da autoridade",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-port-red-007-pontuacao-adjunto-adverbial-deslocado",
    assuntoId: ASSUNTOS.PORT_PONTUACAO,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Investigador de Polícia",
    dificuldade: "medio",
    enunciado: "O adjunto adverbial de grande extensão (composto por três ou mais palavras), quando deslocado para o início da oração ou intercalado entre os termos principais, deve ser obrigatoriamente isolado por vírgula (ex.: 'Durante as primeiras horas da madrugada, os agentes cumpriram o mandado judicial').",
    explicacao: "GABARITO: CERTO. Adjunto adverbial de grande extensão antecipado ou intercalado exige vírgula obrigatória; se for de curta extensão (uma ou duas palavras), a vírgula é facultativa.",
    gabaritoCerto: true,
    conceito: "Pontuação de Adjunto Adverbial Deslocado (Obrigatoriedade por Extensão)",
    habilidade: "Julgar a obrigatoriedade da vírgula no deslocamento de expressões adverbiais longas",
    tese: "Adjuntos adverbiais de grande extensão deslocados exigem vírgula obrigatória",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-port-red-008-redacao-oficial-principios-impessoalidade-clareza",
    assuntoId: ASSUNTOS.PORT_REDACAO_OFICIAL,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Delegado de Polícia Civil",
    dificuldade: "facil",
    enunciado: "O princípio da impessoalidade na Redação Oficial impõe que os textos governamentais sejam isentos de impressões subjetivas, opiniões pessoais ou marcas de individualismo do redator, devendo refletir a manifestação formal da instituição pública perante a sociedade ou outros órgãos.",
    explicacao: "GABARITO: CERTO. A impessoalidade decorre do art. 37 da CF/88 e é pilar estruturante da redação oficial (ausência de subjetividade e caráter institucional).",
    gabaritoCerto: true,
    conceito: "Princípio da Impessoalidade no Manual de Redação da Presidência da República",
    habilidade: "Reconhecer a natureza pública e despersonalizada dos expedientes policiais e administrativos",
    tese: "A redação oficial traduz a vontade do órgão público, vedando marcas de subjetividade pessoal",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-port-red-009-tipologia-textual-dissertativo-argumentativo-expositivo",
    assuntoId: ASSUNTOS.PORT_COMPREENSAO_TEXTO,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "medio",
    enunciado: "Enquanto o texto dissertativo-expositivo tem por meta precípua apresentar informações, dados e conceitos de forma neutra e informativa sem a intenção explícita de convencer o leitor, o texto dissertativo-argumentativo estrutura-se em torno da defesa de uma tese fundamentada por argumentos lógicos com o objetivo de persuadir o interlocutor.",
    explicacao: "GABARITO: CERTO. Expositivo = apenas expõe fatos/conceitos; Argumentativo = defende tese para persuadir e influenciar a opinião do leitor.",
    gabaritoCerto: true,
    conceito: "Tipologia Textual: Dissertação Expositiva vs Dissertação Argumentativa",
    habilidade: "Diferenciar a finalidade comunicativa entre expor dados e persuadir o leitor",
    tese: "A dissertação argumentativa mobiliza recursos persuasivos para sustentar uma tese",
    nivel: "compreender"
  },
  {
    tipo: "ME",
    slug: "l13-port-red-010-redacao-oficial-padrao-oficio-estrutura",
    assuntoId: ASSUNTOS.PORT_REDACAO_OFICIAL,
    banca: "Vunesp", orgao: "Polícia Civil", cargo: "Delegado de Polícia Civil",
    dificuldade: "medio",
    enunciado: "O Manual de Redação da Presidência da República uniformizou a diagramação dos expedientes sob o denominado 'Padrão Ofício' (que engloba o aviso, o ofício e o memorando). Assinale a alternativa que descreve corretamente um elemento obrigatório da estrutura do Padrão Ofício.",
    explicacao: "GABARITO: C. O Padrão Ofício contém cabeçalho com brasão e identificação do órgão, identificação do expediente (tipo, número, ano, sigla), local e data, endereçamento, assunto (síntese precisa do teor do documento), texto numerado a partir do 2º parágrafo, fecho e assinatura com cargo.",
    alternativas: [
      { letra: "A", texto: "O vocativo deve empregar obrigatoriamente termos pomposos e arcaicos como 'Digníssimo' e 'Ilustríssimo Senhor'.", correta: false, explicacao_especifica: "Incorreta. O MRPR aboliu o uso de 'Digníssimo' e 'Ilustríssimo'." },
      { letra: "B", texto: "O campo 'Assunto' deve ser redigido como uma narrativa em primeira pessoa do plural com mais de cinco parágrafos.", correta: false, explicacao_especifica: "Incorreta. O campo assunto deve ser conciso e sintético." },
      { letra: "C", texto: "O campo 'Assunto' fornece uma síntese clara do teor do documento, orientando a tramitação ágil e a indexação arquivística.", correta: true, explicacao_especifica: "Correta. Finalidade estrita do campo 'Assunto' no Padrão Ofício." },
      { letra: "D", texto: "Todos os parágrafos do texto devem ser numerados, inclusive o primeiro parágrafo introdutório.", correta: false, explicacao_especifica: "Incorreta. O primeiro parágrafo não é numerado; a numeração inicia no 2º parágrafo." },
      { letra: "E", texto: "A assinatura do signatário deve vir acompanhada da foto oficial do servidor público emitente.", correta: false, explicacao_especifica: "Incorreta. A assinatura leva apenas nome e cargo/função." }
    ],
    conceito: "Estrutura e Elementos Constitutivos do Padrão Ofício (MRPR)",
    habilidade: "Identificar as diretrizes formais de padronização documental na Administração Pública",
    tese: "O campo 'Assunto' no Padrão Ofício resume o conteúdo para triagem e arquivo",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-port-red-011-pontuacao-dois-pontos-e-travessao-apostos",
    assuntoId: ASSUNTOS.PORT_PONTUACAO,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Perito Criminal Federal",
    dificuldade: "facil",
    enunciado: "Os dois-pontos podem ser legitimamente utilizados para introduzir uma enumeração explicativa, uma citação direta ou um aposto discriminativo, a exemplo da oração: 'A perícia recolheu três elementos fundamentais: o estojo deflagrado, a impressão digital e o aparelho celular'.",
    explicacao: "GABARITO: CERTO. Dois-pontos introduzem apostos explicativos/enumerativos e citações.",
    gabaritoCerto: true,
    conceito: "Emprego dos Dois-Pontos em Enumerações e Apostos",
    habilidade: "Identificar a função sintático-discursiva dos dois-pontos na pontuação",
    tese: "Os dois-pontos abrem espaço discursivo para enumerações e esclarecimentos imediatos",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-port-red-012-redacao-oficial-abolicao-dignissimo-ilustrissimo",
    assuntoId: ASSUNTOS.PORT_REDACAO_OFICIAL,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "facil",
    enunciado: "Segundo as normas vigentes de Redação Oficial no Poder Executivo Federal, foram abolidos os superlativos 'Digníssimo' (D.D.) e 'Ilustríssimo' (Ilmo.), reservando-se o tratamento 'Vossa Excelência' para as autoridades de cúpula e 'Vossa Senhoria' para as demais autoridades e cidadãos, adotando-se no vocativo a fórmula direta 'Senhor + Cargo'.",
    explicacao: "GABARITO: CERTO. O MRPR aboliu formalmente 'Digníssimo' e 'Ilustríssimo', simplificando o vocativo para 'Senhor [Cargo]' (ex.: 'Senhor Ministro', 'Senhor Diretor').",
    gabaritoCerto: true,
    conceito: "Abolição de Fórmulas Arcaicas ('Digníssimo'/'Ilustríssimo') no MRPR",
    habilidade: "Aplicar os padrões modernos de concisão e formalidade em expedientes oficiais",
    tese: "A redação oficial moderna dispensa tratamentos laudatórios como Ilustríssimo e Digníssimo",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-port-red-013-pontuacao-oracoes-adverbiais-antepostas",
    assuntoId: ASSUNTOS.PORT_PONTUACAO,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Escrivão de Polícia Civil",
    dificuldade: "medio",
    enunciado: "Quando uma oração subordinada adverbial antecede a oração principal, o emprego da vírgula para separá-las é obrigatório (ex.: 'Assim que a ordem judicial foi emitida, a equipe iniciou o cumprimento dos mandados'); se a oração adverbial vier posposta à principal, o uso da vírgula torna-se facultativo na maioria dos contextos.",
    explicacao: "GABARITO: CERTO. Oração subordinada adverbial anteposta = vírgula obrigatória; posposta = vírgula facultativa.",
    gabaritoCerto: true,
    conceito: "Pontuação de Orações Subordinadas Adverbiais Antepostas e Pospostas",
    habilidade: "Julgar a obrigatoriedade da vírgula na inversão de orações complexas",
    tese: "Orações adverbiais antepostas exigem vírgula obrigatória para delimitar a inversão sintática",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-port-red-014-coesao-sequencial-operadores-argumentativos",
    assuntoId: ASSUNTOS.PORT_COMPREENSAO_TEXTO,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal",
    dificuldade: "medio",
    enunciado: "Os operadores argumentativos de oposição 'contudo', 'todavia', 'no entanto' e 'entretanto' são conjunções coordenativas adversativas que estabelecem contraste e quebra de expectativa entre orações coordenadas, preservando a coerência e a progressão textual.",
    explicacao: "GABARITO: CERTO. Conjunções adversativas estabelecem contraste e oposição de ideias entre enunciados coordenados.",
    gabaritoCerto: true,
    conceito: "Operadores Argumentativos Adversativos na Coesão Sequencial",
    habilidade: "Reconhecer as conjunções que sinalizam contraposição e ressalva discursiva",
    tese: "Conjunções adversativas operam o contraste semântico garantindo a progressão do texto",
    nivel: "recordar"
  },
  {
    tipo: "ME",
    slug: "l13-port-red-015-redacao-oficial-concisao-clareza-clareamento",
    assuntoId: ASSUNTOS.PORT_REDACAO_OFICIAL,
    banca: "Instituto AOCP", orgao: "Polícia Civil", cargo: "Delegado de Polícia Civil",
    dificuldade: "facil",
    enunciado: "De acordo com o Manual de Redação da Presidência da República, qual é o atributo da redação oficial que consiste em transmitir o máximo de informações com o mínimo de palavras, eliminando repetições desnecessárias, floreios retóricos e passagens redundantes?",
    explicacao: "GABARITO: B. A concisão é a virtude textual que visa expressar o pensamento de maneira direta e breve, evitando prolixidade e palavras supérfluas.",
    alternativas: [
      { letra: "A", texto: "Prolixidade barroca.", correta: false, explicacao_especifica: "Incorreta. Prolixidade é um vício de linguagem combatido pelo manual." },
      { letra: "B", texto: "Concisão.", correta: true, explicacao_especifica: "Correta. Definição exata de concisão no MRPR." },
      { letra: "C", texto: "Subjetividade avaliativa.", correta: false, explicacao_especifica: "Incorreta. A redação oficial é rigorosamente impessoal e objetiva." },
      { letra: "D", texto: "Ornamentação estilística.", correta: false, explicacao_especifica: "Incorreta. O texto oficial deve ser sóbrio e sem floreios." },
      { letra: "E", texto: "Eloquência dramática.", correta: false, explicacao_especifica: "Incorreta. Incompatível com o padrão comunicativo estatal." }
    ],
    conceito: "Atributos da Redação Oficial: Concisão e Clareza Textual",
    habilidade: "Identificar as qualidades essenciais da escrita pública segundo o MRPR",
    tese: "A concisão elimina redundâncias e expressa o conteúdo com economia de palavras",
    nivel: "recordar"
  }
];

function buildModuleList(data, disciplinaId) {
  return data.map((item) => {
    if (item.tipo === "CE") {
      return criarQuestaoCE({
        slug: item.slug,
        disciplinaId,
        assuntoId: item.assuntoId,
        bancaNome: item.banca,
        orgaoNome: item.orgao,
        cargoNome: item.cargo,
        ano: 2026,
        dificuldade: item.dificuldade,
        enunciado: item.enunciado,
        explicacao: item.explicacao,
        gabaritoCerto: item.gabaritoCerto,
        conceitoPrincipal: item.conceito,
        habilidadeCobrada: item.habilidade,
        teseOuRegra: item.tese,
        nivelCognitivo: item.nivel,
      });
    } else {
      return criarQuestaoME({
        slug: item.slug,
        disciplinaId,
        assuntoId: item.assuntoId,
        bancaNome: item.banca,
        orgaoNome: item.orgao,
        cargoNome: item.cargo,
        ano: 2026,
        dificuldade: item.dificuldade,
        enunciado: item.enunciado,
        explicacao: item.explicacao,
        alternativas: item.alternativas,
        conceitoPrincipal: item.conceito,
        habilidadeCobrada: item.habilidade,
        teseOuRegra: item.tese,
        nivelCognitivo: item.nivel,
      });
    }
  });
}

export function generateGroupI() {
  const m21_qs = buildModuleList(m21_data, DISCIPLINAS.PORTUGUES);
  const m22_qs = buildModuleList(m22_data, DISCIPLINAS.PORTUGUES);

  writeModuleFile("m21_portugues_sintaxe_crase.mjs", "m21_questoes", m21_qs);
  writeModuleFile("m22_portugues_redacao_oficial.mjs", "m22_questoes", m22_qs);

  console.log(`[+] Grupo I gerado com sucesso: M21 (${m21_qs.length} q) e M22 (${m22_qs.length} q)`);
}

generateGroupI();
