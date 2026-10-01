import { TAXONOMIA } from "./taxonomia.mjs";

export const portugues02Questoes = [
  // Q21 - CEBRASPE / PRF - Crase em Locuções Adverbiais Femininas
  {
    idSlug: "port-021",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.regencia_crase,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Na descrição fática de um Boletim de Acidente de Trânsito: 'O sinistro ocorreu à noite, às margens da rodovia BR-101, quando a pista encontrava-se escorregadia devido às fortes chuvas', o emprego do acento indicativo de crase nas duas primeiras ocorrências ('à noite' e 'às margens da') justifica-se por se tratar de locuções adverbiais femininas.",
    explicacao: "GABARITO: CERTO. Nas locuções adverbiais constituídas por substantivos femininos ('à noite', 'às margens de', 'às vezes', 'à tarde'), o uso do acento grave indicativo de crase é obrigatório segundo a norma-padrão da língua portuguesa.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q22 - FGV / PM - Regência Verbal em Ofício Policial
  {
    idSlug: "port-022",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.regencia_crase,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Assinale a opção em que a frase, adaptada de uma comunicação oficial da Polícia Militar, atende rigorosamente às regras de regência verbal da norma-padrão:",
    explicacao: "GABARITO: D. 'Proceder a' no sentido de realizar/dar início exige a preposição 'a' ('proceder ao levantamento'). Nas outras opções: 'implicar' no sentido de acarretar é transitivo direto (não aceita 'em'); 'visar' no sentido de objetivar é transitivo indireto com preposição 'a' ('visava a coibir'); 'obedecer' é transitivo indireto com preposição 'a' ('obedecer aos ditames'); 'preferir' rejeita 'do que' ('preferiu X a Y').",
    alternativas: [
      { letra: "A", texto: "A nova diretriz operacional implicará em severas mudanças na escala de serviço.", correta: false },
      { letra: "B", texto: "A operação visava coibir o tráfico de drogas na faixa de fronteira.", correta: false },
      { letra: "C", texto: "O comandante preferiu intensificar as rondas noturnas do que cancelar as folgas.", correta: false },
      { letra: "D", texto: "A comissão processante procedeu ao levantamento pericial de todos os armamentos arrecadados.", correta: true },
      { letra: "E", texto: "Os policiais obedeceram os ditames regulamentares durante o cerco tático.", correta: false }
    ]
  },
  // Q23 - CEBRASPE / PC - Concordância Verbal com Sujeito Composto Posposto
  {
    idSlug: "port-023",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.concordancia,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No período 'Constatou-se a materialidade e a autoria delitiva a partir das evidências coligidas no inquérito', a flexão do verbo no singular ('Constatou-se') está correta, uma vez que, estando o verbo antes de sujeito composto posposto, admite-se a concordância atrativa com o primeiro núcleo ('a materialidade').",
    explicacao: "GABARITO: CERTO. Quando o sujeito composto se encontra posposto ao verbo na voz passiva sintética (ou na voz ativa), o verbo pode concordar no plural com a totalidade dos núcleos ('Constataram-se a materialidade e a autoria') ou no singular atrativo com o núcleo mais próximo ('Constatou-se a materialidade e a autoria').",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q24 - VUNESP / GM - Pontuação em Relatório de Patrulhamento
  {
    idSlug: "port-024",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.pontuacao,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Assinale a frase em que o emprego da pontuação obedece integralmente às regras gramaticais em um relatório de patrulhamento da Guarda Civil Municipal:",
    explicacao: "GABARITO: B. A opção B isola corretamente o adjunto adverbial de lugar deslocado de longa extensão ('Durante o patrulhamento preventivo no parque municipal,') e a oração adjetiva explicativa ('que aparentavam ter sido abandonados,'). Nas demais, há incorreções graves de pontuação separando sujeito de verbo ou verbo de complemento.",
    alternativas: [
      { letra: "A", texto: "Os guardas municipais, encontraram diversos objetos suspeitos durante a ronda matutina.", correta: false },
      { letra: "B", texto: "Durante o patrulhamento preventivo no parque municipal, a guarnição apreendeu veículos, que aparentavam ter sido abandonados, e acionou o guincho.", correta: true },
      { letra: "C", texto: "A equipe de plantão constatou, que a iluminação da praça pública havia sido vandalizada.", correta: false },
      { letra: "D", texto: "O coordenador de segurança informou aos agentes, que a escala seria alterada no feriado.", correta: false },
      { letra: "E", texto: "Após a abordagem ao suspeito os guardas, lavraram o auto de infração no local.", correta: false }
    ]
  },
  // Q25 - CEBRASPE / PRF - Funções da Partícula 'SE'
  {
    idSlug: "port-025",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.sintaxe_periodo,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Considere as orações a seguir, extraídas de expedientes da PRF:\nI. 'Apreenderam-se cinquenta quilos de substância entorpecente no compartimento oculto.'\nII. 'Trata-se de condutas infracionais recorrentes no trecho sob fiscalização.'\n\nEm I, a partícula 'se' classifica-se como pronome apassivador, e o termo 'cinquenta quilos de substância entorpecente' funciona como sujeito paciente; em II, o vocábulo 'se' atua como índice de indeterminação do sujeito.",
    explicacao: "GABARITO: CERTO. Em I, com verbo transitivo direto ('apreender'), 'se' é partícula apassivadora (voz passiva sintética = 'cinquenta quilos foram apreendidos'). Em II, com verbo transitivo indireto ('tratar-se de'), 'se' é índice de indeterminação do sujeito (oração com sujeito indeterminado e verbo fixo na 3ª pessoa do singular).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q26 - IBFC / CBM - Concordância Nominal em Instruções de Salvamento
  {
    idSlug: "port-026",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.concordancia,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Soldado Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em instruções de prevenção e combate a sinistros do CBM, assinale a alternativa que apresenta concordância nominal CORRETA de acordo com a norma-padrão:",
    explicacao: "GABARITO: A. Com determinante ('a rápida evacuação'), a expressão exige concordância: 'é necessária a rápida evacuação'; 'bastantes' funciona como pronome adjetivo concordando com 'equipamentos' (bastantes equipamentos = muitos equipamentos); 'alerta' funciona como advérbio/invariável ('permaneceram alerta').",
    alternativas: [
      { letra: "A", texto: "É necessária a rápida evacuação do recinto quando o alarme soar; os bombeiros mantiveram bastantes equipamentos a postos e permaneceram alerta.", correta: true },
      { letra: "B", texto: "É necessário a rápida evacuação do recinto quando o alarme soar; os bombeiros mantiveram bastante equipamentos a postos e permaneceram alertas.", correta: false },
      { letra: "C", texto: "É necessária a rápida evacuação do recinto quando o alarme soar; os bombeiros mantiveram bastante equipamentos a postos e permaneceram alerta.", correta: false },
      { letra: "D", texto: "É necessário a rápida evacuação do recinto quando o alarme soar; os bombeiros mantiveram bastantes equipamentos a postos e permaneceram alertas.", correta: false },
      { letra: "E", texto: "São necessário as rápidas evacuações do recinto quando o alarme soar; os bombeiros mantiveram bastantes equipamentos a postos e permaneceram alertas.", correta: false }
    ]
  },
  // Q27 - CEBRASPE / PM - Pontuação e Separação de Termos Essenciais
  {
    idSlug: "port-027",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.pontuacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "No período 'O policial militar de serviço na central de monitoramento visualizou a movimentação suspeita', a inserção de uma vírgula imediatamente após o termo 'monitoramento' preservaria a correção gramatical e a clareza do texto.",
    explicacao: "GABARITO: ERRADO. É proibido separar por vírgula o sujeito ('O policial militar de serviço na central de monitoramento') do seu respectivo predicado/verbo ('visualizou'), sob pena de violação direta das regras de pontuação sintática.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  // Q28 - FGV / PP - Casos Especiais de Crase em Documentos Penitenciários
  {
    idSlug: "port-028",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.regencia_crase,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Penal",
    cargo_nome: "Policial Penal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Assinale a opção em que o emprego ou a omissão do acento grave indicativo de crase está em total conformidade com a norma culta em documento do sistema penitenciário:",
    explicacao: "GABARITO: C. Em C: 'informou à advogada' (VTD e VTI: quem informa, informa algo a alguém: preposição 'a' + artigo 'a' = crase); 'à qual recorreu' (recorrer a + pronome relativo a qual = crase). Nas outras: crase antes de pronome indefinido 'qualquer' (A), antes de pronome de tratamento 'Vossa Senhoria' (B), antes de verbo 'cumprir' (D), e antes de substantivo masculino 'prazo' (E) são incorretas.",
    alternativas: [
      { letra: "A", texto: "O diretor da unidade dirigiu-se à qualquer autoridade judiciária presente na audiência.", correta: false },
      { letra: "B", texto: "A notificação disciplinar foi entregue à Vossa Senhoria no gabinete da corregedoria.", correta: false },
      { letra: "C", texto: "O policial penal informou à advogada a decisão da comissão disciplinar à qual a defesa recorreu.", correta: true },
      { letra: "D", texto: "O sentenciado foi obrigado à cumprir as determinações regimentais de segurança interna.", correta: false },
      { letra: "E", texto: "O benefício da progressão de regime foi concedido à prazo determinado pelo juízo da execução.", correta: false }
    ]
  },
  // Q29 - CEBRASPE / PRF - Oração Subordinada Substantiva Objetiva Direta
  {
    idSlug: "port-029",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.sintaxe_periodo,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No período 'O policial rodoviário federal constatou que o tacógrafo do caminhão havia sido adulterado', a oração 'que o tacógrafo do caminhão havia sido adulterado' classifica-se sintaticamente como oração subordinada substantiva objetiva direta, introduzida pela conjunção integrante 'que'.",
    explicacao: "GABARITO: CERTO. O verbo 'constatou' é transitivo direto e exige complemento oracional sem preposição obrigatória ('constatou isto'). A oração desempenha a função sintática de objeto direto da oração principal.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q30 - VUNESP / PM - Concordância com Expressões Partitivas e Percentuais
  {
    idSlug: "port-030",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.concordancia,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere as frases a seguir, formuladas em relatório de sindicância disciplinar militar:\nI. A maioria dos policiais militares presentes [concordou / concordaram] com as conclusões da perícia.\nII. Mais de um oficial [manifestou-se / manifestaram-se] favorável à reforma do regulamento.\nIII. Cerca de vinte por cento do efetivo [foi escalado / foram escalados] para a operação especial.\n\nDe acordo com a norma-padrão da língua portuguesa sobre concordância verbal com expressões partitivas e percentuais, é correto afirmar que:",
    explicacao: "GABARITO: A. Com expressões partitivas seguidas de especificador plural ('A maioria dos policiais...'), ambas as concordâncias (com o núcleo partitivo no singular ou com o especificador no plural) são aceitas pela norma culta; com 'mais de um', a concordância padrão é no singular ('manifestou-se'); com percentual acompanhado de termo partitivo no singular ('do efetivo'), o verbo concorda no singular ('foi escalado').",
    alternativas: [
      { letra: "A", texto: "em I, ambas as formas verbais ('concordou' e 'concordaram') são gramaticalmente legítimas.", correta: true },
      { letra: "B", texto: "em II, a única forma admitida pela norma culta é 'manifestaram-se', por indicar pluralidade semântica.", correta: false },
      { letra: "C", texto: "em III, é obrigatório o uso do verbo no plural ('foram escalados'), independentemente do termo 'do efetivo'.", correta: false },
      { letra: "D", texto: "em I, somente a concordância no singular ('concordou') é tolerada pelos gramáticos normativos.", correta: false },
      { letra: "E", texto: "em II e III, os verbos devem ser empregados obrigatoriamente na voz passiva analítica no plural.", correta: false }
    ]
  },
  // Q31 - CEBRASPE / PC - Crase Facultativa diante de Pronome Possessivo Feminino
  {
    idSlug: "port-031",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.regencia_crase,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Agente de Polícia Civil",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na sentença 'O agente de polícia solicitou apoio à sua equipe tática para o cumprimento do mandado de busca', o emprego do sinal indicativo de crase em 'à sua' é facultativo, de modo que a sua supressão não comprometeria a correção gramatical do texto.",
    explicacao: "GABARITO: CERTO. Diante de pronome possessivo feminino singular adjetivo ('sua equipe'), o uso do artigo definido é facultativo. Como a regência do verbo 'solicitar apoio a' exige preposição 'a', a fusão e o consequente acento indicativo de crase são opcionais ('apoio a sua equipe' ou 'apoio à sua equipe').",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q32 - IBFC / GM - Termos Integrantes da Oração
  {
    idSlug: "port-032",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.sintaxe_periodo,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere a oração extraída de um termo circunstanciado lavrado pela Guarda Civil Municipal:\n'Os guardas civis municipais prestaram imediato socorro à vítima de atropelamento.'\n\nSintaticamente, os termos destacados 'imediato socorro' e 'à vítima de atropelamento' exercem, respectivamente, as funções de:",
    explicacao: "GABARITO: B. O verbo 'prestar' é transitivo direto e indireto ('prestar algo a alguém'): 'imediato socorro' é o objeto direto e 'à vítima de atropelamento' é o objeto indireto regido pela preposição 'a'.",
    alternativas: [
      { letra: "A", texto: "sujeito paciente e agente da passiva.", correta: false },
      { letra: "B", texto: "objeto direto e objeto indireto.", correta: true },
      { letra: "C", texto: "predicativo do sujeito e complemento nominal.", correta: false },
      { letra: "D", texto: "adjunto adverbial de modo e adjunto adnominal.", correta: false },
      { letra: "E", texto: "objeto indireto e aposto explicativo.", correta: false }
    ]
  },
  // Q33 - CEBRASPE / CBM - Pontuação de Orações Coordenadas com Conectivo Deslocado
  {
    idSlug: "port-033",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.pontuacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No texto de um Laudo de Vistoria Técnica de Edificação: 'O proprietário instalou os hidrantes no pavimento térreo; não providenciou, contudo, a pressurização adequada da rede hidráulica', o ponto e vírgula separa duas orações coordenadas, e o conectivo adversativo 'contudo' encontra-se corretamente isolado por vírgulas em razão de seu deslocamento.",
    explicacao: "GABARITO: CERTO. O ponto e vírgula separa orações coordenadas de certa extensão com relação semântica de oposição, e a conjunção adversativa pós-posta ao verbo ('não providenciou, contudo, ...') deve vir obrigatoriamente isolada por vírgulas.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q34 - FGV / PRF - Verbos Impessoais Haver e Fazer na Redação Oficial
  {
    idSlug: "port-034",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.concordancia,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Assinale a opção em que a frase, adaptada de relatórios de fiscalização rodoviária, respeita plenamente as regras de concordância verbal da norma-padrão:",
    explicacao: "GABARITO: E. Em E: 'fazia' com sentido de tempo transcorrido é impessoal (permanece no singular: 'Fazia dois meses que'); a concordância na oração subordinada está correta ('a PRF não registrava'). Nas outras: 'Haviam muitos caminhões' (erro, deve ser 'Havia muitos'); 'Fazem três semanas' (erro, deve ser 'Faz três semanas'); 'Devem haver' (erro, locução com verbo haver impessoal deve ser 'Deve haver'); 'Existia vários fatores' (erro, verbo existir é pessoal e deve concordar com o sujeito: 'Existiam vários fatores').",
    alternativas: [
      { letra: "A", texto: "Haviam muitos caminhões estacionados irregularmente no acostamento da rodovia.", correta: false },
      { letra: "B", texto: "Fazem três semanas que a fiscalização de peso por eixo foi intensificada no posto da PRF.", correta: false },
      { letra: "C", texto: "Devem haver soluções tecnológicas mais eficazes para o monitoramento de velocidade.", correta: false },
      { letra: "D", texto: "Existia vários fatores meteorológicos adversos no momento em que a colisão frontal ocorreu.", correta: false },
      { letra: "E", texto: "Fazia dois meses que a PRF não registrava tantas infrações graves naquele trecho sinuoso.", correta: true }
    ]
  },
  // Q35 - CEBRASPE / PM - Regência do Verbo Informar
  {
    idSlug: "port-035",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.regencia_crase,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A redação 'O comandante informou aos policiais militares sobre os novos procedimentos de abordagem' está em plena conformidade com a norma-padrão da regência do verbo 'informar'.",
    explicacao: "GABARITO: ERRADO. O verbo 'informar' é transitivo direto e indireto: informa-se alguém de/sobre algo (OD de pessoa + OI de coisa) OU informa-se algo a alguém (OD de coisa + OI de pessoa). Na frase sob exame, utilizaram-se simultaneamente dois objetos indiretos ('aos policiais militares' + 'sobre os novos procedimentos'), o que constitui vício de regência gramatical.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  // Q36 - VUNESP / PP - Pontuação de Segmentos Intercalados
  {
    idSlug: "port-036",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.pontuacao,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Penal",
    cargo_nome: "Policial Penal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere o fragmento de um relatório prisional:\n'A intervenção tática no pavilhão de segurança máxima — realizada com estrita observância aos direitos humanos — restabeleceu a ordem interna sem registrar feridos.'\n\nNo fragmento, os travessões foram empregados para:",
    explicacao: "GABARITO: D. Os travessões duplos isolam um segmento explicativo intercalado (oração reduzida de particípio que especifica o modo como foi conduzida a intervenção), podendo ser substituídos por vírgulas ou parênteses sem alteração de sentido nem prejuízo gramatical.",
    alternativas: [
      { letra: "A", texto: "indicar a fala direta dos detentos durante a negociação com os policiais penais.", correta: false },
      { letra: "B", texto: "sinalizar uma hesitação ou interrupção de pensamento na narrativa dos fatos.", correta: false },
      { letra: "C", texto: "separar o sujeito do predicado verbal para enfatizar o desfecho da operação.", correta: false },
      { letra: "D", texto: "isolar uma oração intercalada de caráter explicativo, ressaltando o modo como a operação foi conduzida.", correta: true },
      { letra: "E", texto: "introduzir uma citação bibliográfica extraída da Lei de Execução Penal.", correta: false }
    ]
  },
  // Q37 - CEBRASPE / GM - Colocação Pronominal com Palavras Negativas
  {
    idSlug: "port-037",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.sintaxe_periodo,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na frase extraída de uma ordem de serviço: 'Não se admitirá o descumprimento dos horários de patrulhamento estipulados pelo comando', a colocação do pronome oblíquo em posição proclítica ('Não se admitirá') é obrigatória, em virtude da presença da palavra de sentido negativo 'Não' como elemento atrativo.",
    explicacao: "GABARITO: CERTO. Palavras de sentido negativo ('não', 'nunca', 'jamais', 'nada') são fatores atrativos que exigem a próclise pronominal antes do verbo, mesmo quando o verbo se encontra no futuro do presente (que, na ausência de atrator, exigiria mesóclise: 'admitir-se-á').",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q38 - IBFC / PM - Emprego da Crase na Redação Policial
  {
    idSlug: "port-038",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.regencia_crase,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Assinale a alternativa que apresenta frase de documento policial militar em conformidade com o emprego do acento indicativo de crase segundo a norma culta:",
    explicacao: "GABARITO: B. Em B: 'visava à garantia' (VTI 'visar a' + artigo feminino 'a' = crase). Nas demais: 'à partir de' (crase proibida antes de verbo); 'à pé' (crase proibida antes de substantivo masculino); 'à todas' (crase proibida antes de pronome indefinido); 'à uma velocidade' (crase proibida antes de artigo indefinido).",
    alternativas: [
      { letra: "A", texto: "A guarnição iniciou as buscas à partir das 18 horas na área de mata.", correta: false },
      { letra: "B", texto: "A ação preventiva da Polícia Militar visava à garantia da ordem pública durante o certame.", correta: true },
      { letra: "C", texto: "Os policiais realizaram a patrulha à pé pelas vielas da comunidade.", correta: false },
      { letra: "D", texto: "O oficial comunicou a ordem à todas as equipes que operavam no setor norte.", correta: false },
      { letra: "E", texto: "O motorista conduzia o veículo à uma velocidade incompatível com a via urbana.", correta: false }
    ]
  },
  // Q39 - CEBRASPE / CBM - Concordância na Voz Passiva Sintética
  {
    idSlug: "port-039",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.concordancia,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Bombeiro Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "No registro de ocorrência 'Salvaram-se as três vítimas de afogamento graças à pronta resposta dos guarda-vidas do Corpo de Bombeiros', a substituição da forma verbal 'Salvaram-se' por 'Salvou-se' manteria a correção gramatical do texto.",
    explicacao: "GABARITO: ERRADO. Trata-se de voz passiva sintética com verbo transitivo direto ('salvar') e partícula apassivadora 'se'. O sujeito paciente é 'as três vítimas de afogamento' (no plural), impondo a concordância obrigatória do verbo no plural ('Salvaram-se'). A forma singular 'Salvou-se' constitui erro de concordância verbal.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  // Q40 - FGV / PC - Paralelismo Sintático em Relatório Policial
  {
    idSlug: "port-040",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.sintaxe_periodo,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Inspetor de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Considere o período redigido em um relatório policial:\n'O delegado determinou a intimação da testemunha, a apreensão dos documentos e que se realizasse a perícia no local do crime.'\n\nPara que o período atenda plenamente ao princípio do paralelismo sintático da norma culta, a última oração deve ser reescrita da seguinte forma:",
    explicacao: "GABARITO: C. As duas primeiras estruturas coordenadas são sintagmas nominais introduzidos por substantivos derivados de verbos ('a intimação...', 'a apreensão...'). Para manter o paralelismo sintático, a terceira estrutura deve seguir o mesmo padrão nominal: 'e a realização da perícia no local do crime'.",
    alternativas: [
      { letra: "A", texto: "e determinando a realização da perícia no local do crime.", correta: false },
      { letra: "B", texto: "e para fazer a perícia técnica no local do crime.", correta: false },
      { letra: "C", texto: "e a realização da perícia no local do crime.", correta: true },
      { letra: "D", texto: "e que os peritos comparecessem imediatamente ao local do crime.", correta: false },
      { letra: "E", texto: "e onde realizou-se a perícia técnica no local do crime.", correta: false }
    ]
  }
];
