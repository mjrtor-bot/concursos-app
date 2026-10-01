import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.portugues;
const aSintaxe = TAXONOMIA.assuntos.sintaxe;
const aRegencia = TAXONOMIA.assuntos.regencia_crase;

export const portPart2 = [
  // 21
  {
    idSlug: "port-l4-21",
    disciplina_id: dId,
    assunto_id: aRegencia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O verbo 'implicar', no sentido de acarretar ou ter como consequência, é transitivo direto na norma culta, sendo incorreta a regência com preposição 'em' (ex.: 'O descumprimento da ordem implicará a prisão do infrator', e não 'implicará na prisão').",
    explicacao: "GABARITO: CERTO. No sentido de acarretar/produzir como resultado, o verbo implicar é transitivo direto (VTD), exigindo objeto direto sem preposição. Construções como 'implicará em demissão' são consideradas vícios de linguagem na norma culta padrão.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 22
  {
    idSlug: "port-l4-22",
    disciplina_id: dId,
    assunto_id: aRegencia,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Assinale a frase em que o uso do acento grave indicativo de crase é estritamente obrigatório de acordo com a norma culta:",
    explicacao: "GABARITO: Letra B. 'Às pressas' é uma locução adverbial de modo formada por palavra feminina no plural, cujo uso do acento grave é obrigatório. Antes de verbo ('a cumprir'), antes de palavra masculina ('a pé') e antes de pronome indefinido ('a qualquer') a crase é proibida. Antes de pronome possessivo feminino singular ('a sua equipe'), é facultativa.",
    alternativas: [
      { letra: "A", texto: "Os policiais começaram a cumprir os mandados de prisão ao amanhecer.", correta: false },
      { letra: "B", texto: "A equipe de perícia deslocou-se às pressas para a cena do crime.", correta: true },
      { letra: "C", texto: "O patrulhamento foi realizado a pé por toda a extensão da rodovia.", correta: false },
      { letra: "D", texto: "O delegado comunicou a decisão a qualquer pessoa interessada.", correta: false },
      { letra: "E", texto: "O escrivão entregou o relatório a sua equipe de apoio.", correta: false }
    ]
  },
  // 23
  {
    idSlug: "port-l4-23",
    disciplina_id: dId,
    assunto_id: aRegencia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O verbo 'aspirar', quando empregado no sentido de almejar ou pretender determinado cargo ou função, é transitivo indireto e rege a preposição 'a' (ex.: 'O candidato aspira ao cargo de Policial Rodoviário Federal').",
    explicacao: "GABARITO: CERTO. Quando significa absorver/inalar (ar, fumaça), o verbo aspirar é transitivo direto. Quando significa desejar/almejar/pretender, é transitivo indireto regido pela preposição 'a' ('aspirar ao cargo').",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 24
  {
    idSlug: "port-l4-24",
    disciplina_id: dId,
    assunto_id: aSintaxe,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Na oração 'A apreensão de documentos sigilosos surpreendeu os investigados', a expressão 'de documentos sigilosos' exerce a função sintática de:",
    explicacao: "GABARITO: Letra A. O termo 'de documentos sigilosos' está ligado ao substantivo abstrato 'apreensão' (derivado do verbo apreender) com valor passivo/paciente (os documentos foram apreendidos). Portanto, trata-se de complemento nominal.",
    alternativas: [
      { letra: "A", texto: "Complemento nominal.", correta: true },
      { letra: "B", texto: "Adjunto adnominal.", correta: false },
      { letra: "C", texto: "Objeto indireto.", correta: false },
      { letra: "D", texto: "Agente da passiva.", correta: false },
      { letra: "E", texto: "Aposto especificativo.", correta: false }
    ]
  },
  // 25
  {
    idSlug: "port-l4-25",
    disciplina_id: dId,
    assunto_id: aRegencia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No trecho 'O perito assistiu à reconstituição do crime', o verbo 'assistir' foi empregado com o sentido de presenciar ou testemunhar, classificando-se como transitivo indireto com preposição 'a', sendo correto o uso do acento grave.",
    explicacao: "GABARITO: CERTO. O verbo 'assistir' no sentido de ver/presenciar é transitivo indireto (rege preposição 'a'). Como 'reconstituição' é substantivo feminino determinado pelo artigo 'a', ocorre a crase ('à reconstituição').",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 26
  {
    idSlug: "port-l4-26",
    disciplina_id: dId,
    assunto_id: aRegencia,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Assinale a opção em que a regência do verbo 'preferir' atende rigorosamente à norma padrão da língua portuguesa:",
    explicacao: "GABARITO: Letra C. O verbo 'preferir' é transitivo direto e indireto: prefere-se algo (OD) A outro (OI regido por 'a'). São incorretas expressões intensificadoras ('preferir mais/mil vezes') ou o uso de conectivos comparativos ('do que', 'que'). A forma culta é 'Prefiro o trabalho investigativo de campo à rotina burocrática de gabinete'.",
    alternativas: [
      { letra: "A", texto: "O agente prefere mais atuar nas ruas do que permanecer no plantão.", correta: false },
      { letra: "B", texto: "A autoridade preferia a via do diálogo do que a coerção policial.", correta: false },
      { letra: "C", texto: "Prefiro o trabalho investigativo de campo à rotina burocrática de gabinete.", correta: true },
      { letra: "D", texto: "Prefiro mil vezes a inteligência policial que a força bruta desmedida.", correta: false },
      { letra: "E", texto: "Os investigadores preferem antes prevenir o delito do que punir o infrator.", correta: false }
    ]
  },
  // 27
  {
    idSlug: "port-l4-27",
    disciplina_id: dId,
    assunto_id: aSintaxe,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na oração 'O delegado julgou a diligência indispensável para a conclusão do inquérito', o termo 'indispensável' exerce a função sintática de predicativo do objeto direto.",
    explicacao: "GABARITO: CERTO. O sujeito é 'O delegado', o verbo transitivo direto é 'julgou', o objeto direto é 'a diligência' e 'indispensável' é o predicativo do objeto direto, pois qualifica o objeto direto por intermédio do verbo transobjetivo.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 28
  {
    idSlug: "port-l4-28",
    disciplina_id: dId,
    assunto_id: aRegencia,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "São casos em que o emprego do acento indicativo de crase é puramente facultativo na língua culta:",
    explicacao: "GABARITO: Letra A. A crase é facultativa em três situações clássicas (mnemônico 'NOME de MULHER, POSSESSIVO e ATÉ'): 1) Antes de nomes próprios femininos sem determinação; 2) Antes de pronomes possessivos femininos no singular; 3) Após a preposição 'até'.",
    alternativas: [
      { letra: "A", texto: "Antes de nomes próprios femininos, antes de pronomes possessivos femininos no singular e após a preposição 'até'.", correta: true },
      { letra: "B", texto: "Antes de verbos no infinitivo, antes de pronomes de tratamento e após a preposição 'para'.", correta: false },
      { letra: "C", texto: "Nas locuções adverbiais femininas de tempo e modo e antes de palavras masculinas plurais.", correta: false },
      { letra: "D", texto: "Em expressões com palavras repetidas e antes de numerais ordinais.", correta: false },
      { letra: "E", texto: "Antes de pronomes indefinidos femininos e antes do pronome relativo 'que'.", correta: false }
    ]
  },
  // 29
  {
    idSlug: "port-l4-29",
    disciplina_id: dId,
    assunto_id: aRegencia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O verbo 'obedecer' é transitivo indireto na norma culta, exigindo complemento regido pela preposição 'a', sendo gramaticalmente correta a frase: 'Todos os motoristas devem obedecer às normas do Código de Trânsito Brasileiro'.",
    explicacao: "GABARITO: CERTO. Os verbos 'obedecer' e 'desobedecer' são transitivos indiretos (regem preposição 'a'). Como 'normas' é substantivo feminino determinado por 'as', a fusão gera crase obrigatória ('obedecer às normas').",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 30
  {
    idSlug: "port-l4-30",
    disciplina_id: dId,
    assunto_id: aSintaxe,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Na frase 'Senhor Delegado, os relatórios periciais foram concluídos com rigor técnico', o termo 'Senhor Delegado' classifica-se sintaticamente como:",
    explicacao: "GABARITO: Letra B. O vocativo é um termo de chamamento ou interpelação direta do interlocutor, sintaticamente independente da oração e isolado por vírgula.",
    alternativas: [
      { letra: "A", texto: "Sujeito simples determinado.", correta: false },
      { letra: "B", texto: "Vocativo.", correta: true },
      { letra: "C", texto: "Aposto explicativo.", correta: false },
      { letra: "D", texto: "Adjunto adnominal.", correta: false },
      { letra: "E", texto: "Predicativo do sujeito.", correta: false }
    ]
  },
  // 31
  {
    idSlug: "port-l4-31",
    disciplina_id: dId,
    assunto_id: aRegencia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na frase 'Dirigiu-se àquele posto da Polícia Federal na fronteira', o uso do acento grave é correto em razão da fusão da preposição 'a' (exigida pela regência de 'dirigiu-se') com a vogal inicial do pronome demonstrativo 'àquele'.",
    explicacao: "GABARITO: CERTO. Ocorre crase na contração da preposição 'a' com os pronomes demonstrativos aquele(s), aquela(s), aquilo quando o termo regente exigir preposição 'a' (dirigir-se a + aquele = àquele).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 32
  {
    idSlug: "port-l4-32",
    disciplina_id: dId,
    assunto_id: aSintaxe,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Identifique a oração que apresenta sujeito indeterminado:",
    explicacao: "GABARITO: Letra C. A indeterminação do sujeito ocorre com verbo transitivo indireto, intransitivo ou de ligação acompanhado do pronome 'se' (índice de indeterminação do sujeito) na 3ª pessoa do singular: 'Precisa-se de novos investigadores na delegacia'.",
    alternativas: [
      { letra: "A", texto: "Apreenderam-se armas pesadas no depósito clandestino.", correta: false },
      { letra: "B", texto: "Os peritos elaboraram o laudo necroscópico com precisão.", correta: false },
      { letra: "C", texto: "Precisa-se de novos investigadores na delegacia regional.", correta: true },
      { letra: "D", texto: "Choveu torrencialmente durante toda a operação na serra.", correta: false },
      { letra: "E", texto: "Havia muitos policiais escalados para a fiscalização da rodovia.", correta: false }
    ]
  },
  // 33
  {
    idSlug: "port-l4-33",
    disciplina_id: dId,
    assunto_id: aRegencia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "É proibido o emprego de crase em expressões com palavras repetidas, como 'frente a frente', 'cara a cara' e 'dia a dia'.",
    explicacao: "GABARITO: CERTO. Expressões formadas por palavras repetidas não admitem o acento indicativo de crase, pois entre os termos não ocorre artigo definido feminino.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 34
  {
    idSlug: "port-l4-34",
    disciplina_id: dId,
    assunto_id: aSintaxe,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No período 'O Delegado informou aos agentes a realização da operação conjunta', o verbo 'informar' classifica-se como:",
    explicacao: "GABARITO: Letra B. O verbo 'informar' (assim como avisar, cientificar, certificar) é transitivo direto e indireto (VTDI). Quem informa, informa algo (OD: 'a realização da operação conjunta') a alguém (OI: 'aos agentes').",
    alternativas: [
      { letra: "A", texto: "Transitivo indireto com duplo objeto indireto preposicionado.", correta: false },
      { letra: "B", texto: "Transitivo direto e indireto.", correta: true },
      { letra: "C", texto: "Intransitivo acompanhado de adjuntos adverbiais de modo.", correta: false },
      { letra: "D", texto: "Transitivo direto puro com sujeito oculto.", correta: false },
      { letra: "E", texto: "Verbo de ligação com predicativo locativo.", correta: false }
    ]
  },
  // 35
  {
    idSlug: "port-l4-35",
    disciplina_id: dId,
    assunto_id: aRegencia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em 'A metodologia científica a que os peritos recorreram assegurou a idoneidade da prova material', a preposição 'a' antes do pronome relativo 'que' é de uso obrigatório por exigência da regência do verbo 'recorreram'.",
    explicacao: "GABARITO: CERTO. Quem recorre, recorre 'a' algo. Em orações subordinadas adjetivas, a preposição exigida pelo verbo subordinado ('recorreram a') deve ser anteposta ao pronome relativo ('a que recorreram').",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 36
  {
    idSlug: "port-l4-36",
    disciplina_id: dId,
    assunto_id: aSintaxe,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No período 'É indispensável que as provas sejam rigorosamente custodiadas', a oração sublinhada classifica-se sintaticamente como:",
    explicacao: "GABARITO: Letra A. Na estrutura 'É indispensável' (verbo de ligação + predicativo do sujeito), a oração subordinada 'que as provas sejam rigorosamente custodiadas' exerce a função de sujeito da oração principal (oração subordinada substantiva subjetiva).",
    alternativas: [
      { letra: "A", texto: "Oração subordinada substantiva subjetiva.", correta: true },
      { letra: "B", texto: "Oração subordinada substantiva objetiva direta.", correta: false },
      { letra: "C", texto: "Oração subordinada substantiva completiva nominal.", correta: false },
      { letra: "D", texto: "Oração subordinada adjetiva restritiva.", correta: false },
      { letra: "E", texto: "Oração coordenada assindética explicativa.", correta: false }
    ]
  },
  // 37
  {
    idSlug: "port-l4-37",
    disciplina_id: dId,
    assunto_id: aRegencia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na oração 'A PRF prestou assistência a vítimas de acidentes graves', o emprego do acento grave na palavra 'a' acarretaria erro gramatical, pois a preposição 'a' no singular diante de substantivo feminino no plural não admite crase sem o artigo correspondente 'as'.",
    explicacao: "GABARITO: CERTO. Trata-se da regra clássica: 'A no singular diante de plural, crase nem a pau'. Ocorre apenas a preposição 'a' sem artigo definido plural. Se houvesse artigo, seria 'às vítimas'. Portanto, 'a vítimas' sem acento é a única forma correta.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 38
  {
    idSlug: "port-l4-38",
    disciplina_id: dId,
    assunto_id: aSintaxe,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Na oração 'Os autos do inquérito policial foram encaminhados pelo escrivão ao Ministério Público', o termo 'pelo escrivão' exerce a função sintática de:",
    explicacao: "GABARITO: Letra B. Na voz passiva analítica ('foram encaminhados'), o termo preposicionado que pratica a ação verbal ('pelo escrivão') é o agente da passiva.",
    alternativas: [
      { letra: "A", texto: "Objeto indireto.", correta: false },
      { letra: "B", texto: "Agente da passiva.", correta: true },
      { letra: "C", texto: "Adjunto adverbial de instrumento.", correta: false },
      { letra: "D", texto: "Complemento nominal.", correta: false },
      { letra: "E", texto: "Sujeito indeterminado.", correta: false }
    ]
  },
  // 39
  {
    idSlug: "port-l4-39",
    disciplina_id: dId,
    assunto_id: aRegencia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O verbo 'responder', no sentido de dar resposta ou contestar uma acusação, é transitivo indireto e rege a preposição 'a' (ex.: 'O indiciado respondeu às perguntas formuladas pela autoridade policial').",
    explicacao: "GABARITO: CERTO. No sentido de dar resposta a algo ou alguém, responder é transitivo indireto regido pela preposição 'a'. Com 'perguntas' (substantivo feminino plural determinado), ocorre crase: 'respondeu às perguntas'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 40
  {
    idSlug: "port-l4-40",
    disciplina_id: dId,
    assunto_id: aSintaxe,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Assinale a opção em que a oração destacada é subordinada substantiva completiva nominal:",
    explicacao: "GABARITO: Letra C. A oração 'de que o mandado fosse cumprido sem resistência' completa o sentido do substantivo abstrato 'certeza' regido de preposição 'de', configurando oração subordinada substantiva completiva nominal.",
    alternativas: [
      { letra: "A", texto: "O policial sabia que a missão seria arriscada.", correta: false },
      { letra: "B", texto: "Constatou-se que o suspeito havia fugido do país.", correta: false },
      { letra: "C", texto: "O delegado tinha certeza de que o mandado seria cumprido com êxito.", correta: true },
      { letra: "D", texto: "A verdade é que as provas materiais foram decisivas.", correta: false },
      { letra: "E", texto: "Os peritos exigiram que o local fosse isolado imediatamente.", correta: false }
    ]
  }
];
