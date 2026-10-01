import { TAXONOMIA } from "./taxonomia.mjs";

export const portugues01Questoes = [
  // Q1 - CEBRASPE / PRF - Interpretação de Texto Normativo
  {
    idSlug: "port-001",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Texto de referência (Instrução Normativa Operacional):\n'A fiscalização de trânsito em rodovias federais deve conjugar o rigor técnico na constatação de infrações com a celeridade procedimental, de modo que a fluidez viária não seja comprometida além do estritamente necessário para garantir a segurança viária e a integridade dos usuários.'\n\nCom base no texto, infere-se que a preservação da fluidez do tráfego nas rodovias é um valor absoluto que se sobrepõe, em qualquer hipótese, aos atos de fiscalização policial.",
    explicacao: "GABARITO: ERRADO. O texto estabelece uma conjugação harmônica ('deve conjugar o rigor técnico (...) com a celeridade'), indicando que a restrição à fluidez não deve ir além do 'estritamente necessário para garantir a segurança viária'. Portanto, a fluidez não é tratada como valor absoluto nem se sobrepõe indistintamente à segurança e à fiscalização.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  // Q2 - FGV / PM - Relações Semânticas e Argumentação em Relatório Operacional
  {
    idSlug: "port-002",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere o seguinte trecho de um Relatório de Gestão Operacional da Polícia Militar:\n'A redução dos índices de criminalidade violenta na região metropolitana não decorreu unicamente do incremento no número de viaturas em patrulhamento ostensivo; resultou, precipuamente, da integração das bases de inteligência com o mapeamento georreferenciado das manchas criminais.'\n\nNo fragmento, o vocábulo 'precipuamente' desempenha papel argumentativo de:",
    explicacao: "GABARITO: B. O advérbio 'precipuamente' significa essencialmente, principalmente, primordialmente. No contexto, o autor contrapõe um fator de menor peso causal relativo (mais viaturas) ao fator principal/preponderante (integração de inteligência e georreferenciamento).",
    alternativas: [
      { letra: "A", texto: "relativizar a validade das estatísticas operacionais apresentadas pelo comando policial.", correta: false },
      { letra: "B", texto: "destacar o fator preponderante que determinou o resultado positivo da estratégia de segurança.", correta: true },
      { letra: "C", texto: "expressar uma ressalva temporal quanto à eficácia do patrulhamento ostensivo ordinário.", correta: false },
      { letra: "D", texto: "introduzir uma hipótese ainda desprovida de comprovação empírica no meio militar.", correta: false },
      { letra: "E", texto: "apontar uma consequência imprevista da modernização das tecnologias de inteligência.", correta: false }
    ]
  },
  // Q3 - CEBRASPE / PC - Tipologia Textual em Boletim de Ocorrência
  {
    idSlug: "port-003",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Considere o excerto de um Boletim de Ocorrência Policial:\n'Aos dez dias do mês de março, por volta das 22h, a equipe plantonista deslocou-se ao endereço indicado, onde constatou a porta frontal arrombada, o interior do imóvel revirado e a subtração de equipamentos eletrônicos, lavrando-se o presente auto para as providências de polícia judiciária.'\n\nNo texto apresentado, predomina a tipologia textual narrativa associada a passagens descritivas, própria do registro cronológico de eventos e da caracterização de vestígios materiais em peças policiais.",
    explicacao: "GABARITO: CERTO. O relato de fatos no tempo com indicação cronológica ('Aos dez dias...', 'por volta das 22h', 'deslocou-se') caracteriza a tipologia narrativa, enquanto a apresentação das condições do local ('porta arrombada', 'imóvel revirado') constitui elementos descritivos característicos do relato policial.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q4 - VUNESP / GM - Compreensão de Texto Normativo Municipal
  {
    idSlug: "port-004",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Leia o trecho da Portaria Municipal sobre atuação integrada da Guarda Civil Municipal:\n'O emprego de equipamentos de menor potencial ofensivo pelos guardas municipais dar-se-á em caráter prioritário sobre os meios letais, condicionada a intervenção armada letal à estrita e proporcional resposta a agressão injusta e atual, em caráter subsidiário e excepcional.'\n\nSegundo o texto, a expressão 'em caráter subsidiário' indica que a intervenção com meios letais:",
    explicacao: "GABARITO: C. 'Caráter subsidiário' expressa atuação supletiva ou de reserva, aplicável apenas quando os meios principais (prioritários/não letais) forem insuficientes ou inviáveis diante de grave ameaça atual e injusta.",
    alternativas: [
      { letra: "A", texto: "deve ocorrer de forma simultânea e indistinta ao emprego de armas não letais.", correta: false },
      { letra: "B", texto: "depende de autorização prévia e expressa do comando geral a cada ocorrência.", correta: false },
      { letra: "C", texto: "tem natureza supletiva, aplicando-se apenas quando os recursos prioritários forem ineficazes ou insuficientes.", correta: true },
      { letra: "D", texto: "é vedada sob qualquer justificativa durante o patrulhamento preventivo escolar.", correta: false },
      { letra: "E", texto: "subordina-se à concordância expressa do agente agressor na contenção do distúrbio.", correta: false }
    ]
  },
  // Q5 - CEBRASPE / CBM - Relações de Causa e Concessão em Laudo Pericial
  {
    idSlug: "port-005",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Texto de referência (Laudo Pericial de Incêndio):\n'A análise do padrão de queima e dos condutores de energia permitiu isolar o foco inicial na caixa de distribuição secundária. Conquanto houvesse grande quantidade de material inflamável estocado no galpão, a propagação rápida do sinistro decorreu fundamentalmente da ausência de portas corta-fogo funcionais.'\n\nNo fragmento, o vocábulo 'Conquanto' introduz uma oração com valor de conformidade em relação às normas de segurança contra incêndio.",
    explicacao: "GABARITO: ERRADO. O vocábulo 'Conquanto' é uma conjunção subordinativa concessiva (equivalente a 'embora', 'ainda que', 'a despeito de que'), introduzindo ideia de concessão (fato que não impede o evento da oração principal), e não de conformidade (que seria introduzida por 'conforme', 'segundo', 'consoante').",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  // Q6 - IBFC / PP - Coesão Textual e Conectivos em Relatório Penitenciário
  {
    idSlug: "port-006",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.morfologia_classes,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Penal",
    cargo_nome: "Policial Penal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Analise o fragmento de um Relatório de Inspeção Penitenciária:\n'A equipe de plantão realizou a contenção do pavilhão, haja vista que os custodiados tentavam danificar as celas cujas grades apresentavam sinais de desgaste.'\n\nQuanto às classes de palavras e à coesão textual, assinale a afirmativa correta:",
    explicacao: "GABARITO: D. 'Haja vista que' introduz oração subordinada adverbial causal (exprime a causa da contenção do pavilhão) e 'cujas' é pronome relativo com valor possessivo que estabelece relação de posse entre 'celas' e 'grades' (as grades das celas).",
    alternativas: [
      { letra: "A", texto: "'haja vista que' é locução prepositiva com valor temporal, e 'cujas' é pronome demonstrativo neutro.", correta: false },
      { letra: "B", texto: "'haja vista que' expressa ideia de consequência, e 'cujas' qualifica o substantivo pavilhão.", correta: false },
      { letra: "C", texto: "'haja vista que' funciona como conjunção condicional, e 'cujas' pode ser substituído por 'onde' sem incorreção.", correta: false },
      { letra: "D", texto: "'haja vista que' é locução conjuntiva com valor causal, e 'cujas' é pronome relativo com sentido de posse.", correta: true },
      { letra: "E", texto: "'haja vista que' introduz uma oração adjetiva explicativa, e 'cujas' é conjunção integrante.", correta: false }
    ]
  },
  // Q7 - CEBRASPE / PRF - Conectivos e Relação Causal em Parecer de Trânsito
  {
    idSlug: "port-007",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Texto de referência (Parecer Técnico de Operações Rodoviárias):\n'A interdição cautelar da faixa de rolamento foi mantida durante a madrugada, porquanto havia risco iminente de colapso estrutural da encosta sobre a pista de rolamento.'\n\nNo segmento, a oração introduzida pela conjunção 'porquanto' apresenta a justificativa causal da medida de interdição adotada pelos policiais rodoviários federais.",
    explicacao: "GABARITO: CERTO. A conjunção 'porquanto' tem valor causal/explicativo ('visto que', 'já que', 'porque'), explicitando a causa determinante para a manutenção da interdição da rodovia.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q8 - FGV / PM - Fato x Opinião em Termo de Declarações
  {
    idSlug: "port-008",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Em um Termo de Declarações prestado perante a autoridade de polícia judiciária militar, constata-se a seguinte passagem:\n'O soldado declarou que ouviu dois disparos de arma de fogo às 21h15min e que, em seguida, viu um veículo prata evadir-se em alta velocidade; afirmou, ademais, que o condutor parecia extremamente nervoso e imprudente.'\n\nNo texto, a distinção entre dado objetivo e juízo de valor subjetivo evidencia-se pelo fato de que:",
    explicacao: "GABARITO: A. Ouvir disparos e ver a fuga do veículo prata são percepções sensoriais fáticas (dados objetivos), ao passo que a impressão de que o condutor parecia 'nervoso e imprudente' consiste em interpretação subjetiva (juízo de valor do declarante).",
    alternativas: [
      { letra: "A", texto: "a percepção do nervosismo e imprudência do condutor constitui avaliação subjetiva, ao passo que os disparos e a evasão do carro são relatos de fatos.", correta: true },
      { letra: "B", texto: "a cor do veículo e o horário exato dos disparos são conjecturas desprovidas de relevância probatória.", correta: false },
      { letra: "C", texto: "todo o depoimento se restringe a juízos de valor hipotéticos, carecendo de qualquer dado fático objetivo.", correta: false },
      { letra: "D", texto: "o uso do verbo 'afirmou' transforma impressões subjetivas em verdades científicas comprovadas.", correta: false },
      { letra: "E", texto: "o relato dos disparos configura opinião pessoal do militar, enquanto o nervosismo é dado técnico pericial.", correta: false }
    ]
  },
  // Q9 - CEBRASPE / PC - Coesão Concessiva em Relatório de Investigação
  {
    idSlug: "port-009",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Agente de Polícia Civil",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Texto de referência (Relatório de Investigação Policial):\n'Não obstante os investigados tenham adotado protocolos sofisticados de criptografia e contas em nome de interpostas pessoas, o cruzamento dos dados telemáticos logrou demonstrar a conexão direta entre as lideranças da organização e as transações financeiras suspeitas.'\n\nNo fragmento, a locução conjuntiva 'Não obstante' introduz uma relação de concessão, evidenciando que os obstáculos criados pelos criminosos não impediram a elucidação das transações pela equipe de investigação.",
    explicacao: "GABARITO: CERTO. 'Não obstante' atua como conjunção subordinativa concessiva (acompanhada de verbo no subjuntivo 'tenham adotado'), introduzindo um fato que representa um obstáculo superado pela oração principal.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q10 - VUNESP / PM - Coesão Referencial por Pronomes Demonstrativos
  {
    idSlug: "port-010",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere a frase extraída de um Boletim de Ocorrência Policial Militar:\n'A guarnição interceptou o condutor e o passageiro após breve acompanhamento tático; este tentou desfazer-se de um simulacro de pistola, enquanto aquele permaneceu no interior do veículo com as mãos sobre o volante.'\n\nDe acordo com a norma-padrão da língua portuguesa quanto à coesão referencial por pronomes demonstrativos, os termos 'este' e 'aquele' referem-se, respectivamente, a:",
    explicacao: "GABARITO: E. Na coesão referencial distributiva entre dois elementos antecedentes, 'este' refere-se ao elemento mencionado por último (mais próximo: o passageiro), e 'aquele' refere-se ao elemento mencionado em primeiro lugar (mais distante: o condutor).",
    alternativas: [
      { letra: "A", texto: "ao condutor e à guarnição policial militar.", correta: false },
      { letra: "B", texto: "ao veículo e ao simulacro de pistola.", correta: false },
      { letra: "C", texto: "ao condutor e ao passageiro do automóvel.", correta: false },
      { letra: "D", texto: "à guarnição e ao condutor do veículo.", correta: false },
      { letra: "E", texto: "ao passageiro e ao condutor do automóvel.", correta: true }
    ]
  },
  // Q11 - CEBRASPE / PRF - Classes de Palavras e Função Sintática do Adjetivo
  {
    idSlug: "port-011",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.morfologia_classes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na frase 'A equipe da PRF apreendeu uma substância líquida inflamável acondicionada em recipientes plásticos clandestinos', os vocábulos 'inflamável' e 'clandestinos' funcionam como adjetivos que exercem função sintática de adjuntos adnominais dos substantivos 'substância' e 'recipientes', respectivamente.",
    explicacao: "GABARITO: CERTO. Morfologicamente são adjetivos que caracterizam termos nominais diretamente, sem intermediação de verbo de ligação, desempenhando portanto a função sintática de adjunto adnominal.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q12 - IBFC / CBM - Tipologia Injuntiva em Manuais de Instrução
  {
    idSlug: "port-012",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Soldado Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Considere o texto a seguir, extraído do Manual de Procedimentos Operacionais de Salvamento em Altura do CBM:\n'Verifique a ancoragem dos cabos antes de iniciar o descenso. Mantenha os mosquetões travados e utilize luvas de vaqueta durante toda a manobra. Nunca realize o rapel sem o sistema de segurança redundante devidamente conectado ao cinto tipo paraquedista.'\n\nQuanto à tipologia textual, o fragmento classifica-se predominantemente como:",
    explicacao: "GABARITO: C. O texto instrucional que orienta comportamentos, com verbos no modo imperativo ('verifique', 'mantenha', 'utilize', 'nunca realize'), caracteriza a tipologia injuntiva/prescritiva.",
    alternativas: [
      { letra: "A", texto: "narrativo, pois relata uma sucessão cronológica de ocorrências passadas.", correta: false },
      { letra: "B", texto: "dissertativo-argumentativo, pois visa convencer o leitor por meio de teses e contra-argumentos.", correta: false },
      { letra: "C", texto: "injuntivo ou instrucional, pois prescreve comandos e instruções para a execução de uma tarefa.", correta: true },
      { letra: "D", texto: "poético-descritivo, pois prioriza a expressividade estética em detrimento do sentido prático.", correta: false },
      { letra: "E", texto: "expositivo-reflexivo, pois discute conceitos abstratos sem pretensão normativa.", correta: false }
    ]
  },
  // Q13 - CEBRASPE / GM - Paráfrase e Reescrita Textual
  {
    idSlug: "port-013",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Trecho original:\n'A proximidade da Guarda Municipal com a comunidade escolar potencializa a prevenção de ilícitos e fomenta a resolução pacífica de controvérsias.'\n\nProposta de reescrita:\n'A aproximação entre a Guarda Municipal e a comunidade escolar não apenas incrementa a prevenção de delitos, como também estimula a solução harmônica de conflitos.'\n\nA reescrita proposta mantém a correção gramatical e as relações semânticas essenciais do texto original.",
    explicacao: "GABARITO: CERTO. A reescrita preserva o sentido original por meio de vocábulos equivalentes ('aproximação', 'delitos', 'estimula', 'solução harmônica de conflitos') e emprega corretamente a correlação aditiva enfática 'não apenas... como também', respeitando a sintaxe e a pontuação.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q14 - FGV / PC - Ambiguidade e Clareza na Redação Policial
  {
    idSlug: "port-014",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Inspetor de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Considere o período redigido por um agente em certidão policial:\n'O policial deteve o suspeito em sua casa após o recebimento da denúncia anônima.'\n\nDo ponto de vista da redação oficial e da clareza textual, a formulação acima apresenta uma falha estrutural denominada:",
    explicacao: "GABARITO: D. A frase gera ambiguidade (anfibologia) em razão do pronome possessivo 'sua', não permitindo identificar com clareza se a prisão ocorreu na residência do policial ou na residência do suspeito.",
    alternativas: [
      { letra: "A", texto: "pleonasmo vicioso, decorrente da redundância entre 'denúncia' e 'anônima'.", correta: false },
      { letra: "B", texto: "solecismo de concordância, em virtude do afastamento entre o verbo e o sujeito.", correta: false },
      { letra: "C", texto: "hipercorreção estilística, pela colocação do adjunto adverbial no final da oração.", correta: false },
      { letra: "D", texto: "ambiguidade ou anfibologia, provocada pela incerteza sobre a titularidade da residência ('casa do policial' ou 'casa do suspeito').", correta: true },
      { letra: "E", texto: "quebra de paralelismo sintático, decorrente da coordenação de termos com funções díspares.", correta: false }
    ]
  },
  // Q15 - CEBRASPE / PM - Concordância e Flexão de 'Anexo'
  {
    idSlug: "port-015",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.morfologia_classes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "No excerto 'Seguem anexos ao ofício os laudos periciais e as cópias dos termos de depoimento', o vocábulo 'anexos' está flexionado no masculino plural para concordar com o substantivo mais próximo 'ofício'.",
    explicacao: "GABARITO: ERRADO. O vocábulo 'anexos' é adjetivo e concorda com o sujeito composto posposto 'os laudos periciais e as cópias' (prevalência do masculino plural), e não com o termo preposicionado 'ao ofício', que é adjunto adverbial.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  // Q16 - VUNESP / PRF - Inferência Textual em Parecer Técnico
  {
    idSlug: "port-016",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere o fragmento de um Estudo Técnico de Segurança Viária da PRF:\n'A implementação de radares de velocidade média em trechos críticos de serra reduz a ocorrência de frenagens bruscas antes dos equipamentos pontuais, desestimulando a prática comum de aceleração subsequente.'\n\nCom base no texto, é correto inferir que a fiscalização pontual tradicional:",
    explicacao: "GABARITO: B. O texto pressupõe que, nos radares pontuais, os condutores desaceleram bruscamente antes do aparelho e voltam a acelerar logo após, comportamento que o radar de velocidade média visa desestimular.",
    alternativas: [
      { letra: "A", texto: "elimina de forma definitiva todos os tipos de imprudência ao volante nas rodovias.", correta: false },
      { letra: "B", texto: "pode ensejar comportamento oportunista de desaceleração temporária seguida de retomada da velocidade excessiva.", correta: true },
      { letra: "C", texto: "mostra-se totalmente inútil e deve ser substituída por patrulhamento exclusivamente aéreo.", correta: false },
      { letra: "D", texto: "aumenta o consumo de combustível sem nenhum impacto positivo na segurança viária.", correta: false },
      { letra: "E", texto: "aplica-se unicamente a veículos de transporte coletivo de passageiros em rodovias federais.", correta: false }
    ]
  },
  // Q17 - CEBRASPE / CBM - Conjunções Conformativas em Normas Técnicas
  {
    idSlug: "port-017",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Texto de referência (Instrução Técnica do CBM):\n'Conforme prescreve a legislação estadual de segurança contra incêndio e pânico, os extintores devem ser instalados em locais visíveis e desobstruídos, de modo que nenhum ponto da edificação diste mais de vinte metros de uma unidade extintora.'\n\nNo fragmento, a expressão 'Conforme prescreve' estabelece uma relação de conformidade entre a exigência técnica e a norma legal aplicável, podendo ser substituída por 'Segundo dispõe', sem prejuízo do sentido e da correção gramatical.",
    explicacao: "GABARITO: CERTO. 'Conforme' e 'Segundo' são conjunções conformativas equivalentes que introduzem a fonte ou referência normativa norteadora da ação.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q18 - IBFC / GM - Tempos Verbais no Relato Policial
  {
    idSlug: "port-018",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.morfologia_classes,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Leia o trecho de um Registro de Ocorrência da Patrulha Guardiã Maria da Penha:\n'A vítima declarou que o agressor rondava sua residência constantemente e que, na data de ontem, quebrou a janela da cozinha.'\n\nEm relação aos tempos verbais empregados ('rondava' e 'quebrou'), assinale a afirmativa correta:",
    explicacao: "GABARITO: A. 'Rondava' está no pretérito imperfeito do indicativo, exprimindo ação habitual/contínua no passado; 'quebrou' está no pretérito perfeito do indicativo, indicando ação pontual e completamente concluída.",
    alternativas: [
      { letra: "A", texto: "'rondava' expressa uma ação habitual ou contínua no passado, enquanto 'quebrou' indica um fato pontual e finalizado.", correta: true },
      { letra: "B", texto: "ambos os verbos estão no pretérito mais-que-perfeito do indicativo, indicando fatos anteriores a outro passado.", correta: false },
      { letra: "C", texto: "'rondava' denota uma ação futura condicionada, enquanto 'quebrou' expressa uma hipótese incerta.", correta: false },
      { letra: "D", texto: "'rondava' expressa certeza no presente, ao passo que 'quebrou' indica um processo inacabado.", correta: false },
      { letra: "E", texto: "ambos os verbos expressam aspecto perfectivo, delimitando eventos simultâneos e instantâneos.", correta: false }
    ]
  },
  // Q19 - CEBRASPE / PM - Extrapolação Textual em Diretriz Operacional
  {
    idSlug: "port-019",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Texto de referência (Diretriz de Policiamento em Eventos):\n'O planejamento de segurança para eventos esportivos de grande porte prioriza o monitoramento prévio de torcidas organizadas nas redes sociais e em terminais de transporte coletivo, com o escopo de antecipar confrontos e neutralizar deslocamentos hostis antes da chegada ao estádio.'\n\nInfere-se do texto que a atuação da Polícia Militar nos eventos esportivos ocorre exclusivamente fora das arenas desportivas, sendo dispensável qualquer efetivo no interior dos estádios.",
    explicacao: "GABARITO: ERRADO. Trata-se de extrapolação indevida do texto. O fato de o planejamento 'priorizar o monitoramento prévio' nas redes e no transporte não significa que a atuação seja 'exclusiva' no ambiente externo nem que dispense efetivo no interior do estádio.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  // Q20 - FGV / PP - Hiperonímia e Coesão Lexical em Despacho
  {
    idSlug: "port-020",
    disciplina_id: TAXONOMIA.disciplinas.portugues,
    assunto_id: TAXONOMIA.assuntos.interpretacao_texto,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Penal",
    cargo_nome: "Policial Penal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere o excerto de um despacho penitenciário:\n'Durante a revista estrutural nos blocos carcerários, os policiais penais apreenderam telefones celulares, chips e carregadores. Os aparelhos eletrônicos foram catalogados e encaminhados à perícia técnica.'\n\nNo excerto, a relação semântico-coesiva entre a expressão 'aparelhos eletrônicos' e os termos 'telefones celulares, chips e carregadores' configura um caso de:",
    explicacao: "GABARITO: C. 'Aparelhos eletrônicos' é um hiperônimo (termo de sentido genérico, mais abrangente) que retoma os hipônimos específicos ('telefones celulares, chips e carregadores'), promovendo coesão lexical por anáfora hiperonímica.",
    alternativas: [
      { letra: "A", texto: "antonímia contextual, gerando oposição de sentido entre os objetos apreendidos.", correta: false },
      { letra: "B", texto: "catáfora dêitica, antecipando elementos que ainda serão descritos na oração seguinte.", correta: false },
      { letra: "C", texto: "hiperonímia, em que um termo mais amplo e genérico retoma elementos específicos já citados.", correta: true },
      { letra: "D", texto: "metáfora ornamental, que substitui o sentido denotativo por uma comparação implícita.", correta: false },
      { letra: "E", texto: "paronímia, decorrente da semelhança gráfica e fonética entre termos de significados distintos.", correta: false }
    ]
  }
];
