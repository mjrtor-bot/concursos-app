import { TAXONOMIA } from "./taxonomia.mjs";

export const transito01Questoes = [
  // Q1 - CEBRASPE / PRF - Veículos de Emergência e Preferência
  {
    idSlug: "trans-001",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com as normas gerais de circulação e conduta do CTB (art. 29, VII), os veículos destinados a socorro de incêndio e salvamento, os de polícia, os de fiscalização e operação de trânsito e as ambulâncias, quando em serviço de urgência, de policiamento ostensivo ou de preservação da ordem pública, gozam de livre trânsito, estacionamento e parada, apenas quando estiverem com os dispositivos regulamentares de alarme sonoro e iluminação vermelha intermitente acionados simultaneamente, mantendo a prioridade de passagem com velocidade reduzida e com os devidos cuidados de segurança.",
    explicacao: "GABARITO: CERTO. Nos termos do art. 29, VII, do CTB (com a redação dada pela Lei nº 14.071/2020 e Lei nº 14.440/2022), os veículos destinados a socorro de incêndio e salvamento, os de polícia, os de fiscalização e operação de trânsito e as ambulâncias gozam de livre trânsito, estacionamento e parada quando em serviço de urgência e devidamente identificados por dispositivos regulamentares de alarme sonoro e iluminação intermitente. A prioridade de passagem na via e no cruzamento deverá se dar com velocidade reduzida e com os devidos cuidados de segurança.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q2 - CEBRASPE / PRF - Preferência em Rotatória
  {
    idSlug: "trans-002",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Em um cruzamento não sinalizado em formato de rotatória, a preferência de passagem será daquele veículo que estiver circulando por ela, independentemente de quem vier pela direita.",
    explicacao: "GABARITO: CERTO. O art. 29, III, 'b', do CTB estabelece expressamente que, no caso de rotatória, em local não sinalizado, a preferência de passagem é daquele que estiver circulando por ela.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q3 - FGV / PM - Ultrapassagem pela Direita
  {
    idSlug: "trans-003",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante patrulhamento ostensivo de trânsito em via urbana de sentido duplo, uma viatura policial observa um veículo ultrapassando outro pela direita. De acordo com o Código de Trânsito Brasileiro (art. 29, IX), a ultrapassagem de outro veículo em movimento deverá ser feita pela esquerda, admitindo-se a ultrapassagem pela direita unicamente quando:",
    explicacao: "GABARITO: B. Segundo o art. 29, IX, do CTB, a ultrapassagem de outro veículo em movimento deverá ser feita pela esquerda, obedecida a sinalização regulamentar e as demais normas estabelecidas no Código, exceto quando o veículo a ser ultrapassado estiver sinalizando o propósito de entrar à esquerda.",
    alternativas: [
      { letra: "A", texto: "a via possuir duas ou mais faixas de rolamento no mesmo sentido.", correta: false },
      { letra: "B", texto: "o veículo a ser ultrapassado estiver sinalizando o propósito de entrar à esquerda.", correta: true },
      { letra: "C", texto: "a velocidade do veículo que segue à frente for inferior à metade da máxima regulamentada.", correta: false },
      { letra: "D", texto: "o acostamento da direita estiver pavimentado e livre de pedestres.", correta: false },
      { letra: "E", texto: "se tratar de veículo de transporte coletivo de passageiros em ponto de parada.", correta: false }
    ]
  },
  // Q4 - CEBRASPE / PRF - Uso de Luzes e Faróis em Rodovias
  {
    idSlug: "trans-004",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Conforme as alterações introduzidas pela Lei nº 14.071/2020 no CTB (art. 40), os veículos que não dispuserem de luzes de rodagem diurna (DRL) deverão manter acesos os faróis baixos durante o dia, em rodovias de pista simples situadas fora dos perímetros urbanos.",
    explicacao: "GABARITO: CERTO. O art. 40, § 2º, do CTB estabelece que os veículos que não dispuserem de luzes de rodagem diurna deverão manter acesos os faróis baixos durante o dia, em rodovias de pista simples situadas fora dos perímetros urbanos. Em rodovias de pista dupla ou em perímetro urbano, o farol baixo diurno não é mais obrigatório para veículos com DRL ou de dia em pista dupla.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q5 - VUNESP / PM - Distância Lateral para Ciclistas
  {
    idSlug: "trans-005",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Ao ultrapassar uma bicicleta na via pública, o condutor de veículo automotor deve observar a norma geral de conduta e segurança estabelecida no art. 201 do CTB, que determina guardar da bicicleta a distância lateral mínima de:",
    explicacao: "GABARITO: C. O art. 201 do CTB tipifica a infração de deixar de guardar a distância lateral de 1,50 m (um metro e cinquenta centímetros) ao ultrapassar bicicleta (infração média).",
    alternativas: [
      { letra: "A", texto: "0,50 metro.", correta: false },
      { letra: "B", texto: "1,00 metro.", correta: false },
      { letra: "C", texto: "1,50 metro.", correta: true },
      { letra: "D", texto: "2,00 metros.", correta: false },
      { letra: "E", texto: "2,50 metros.", correta: false }
    ]
  },
  // Q6 - CEBRASPE / PRF - Velocidade Máxima em Rodovias de Pista Dupla e Simples
  {
    idSlug: "trans-006",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em rodovia federal de pista simples não sinalizada quanto à velocidade regulamentada, a velocidade máxima permitida para automóveis, camionetas, caminhonetes e motocicletas é de 100 km/h, enquanto para os demais veículos é de 90 km/h.",
    explicacao: "GABARITO: CERTO. Nos termos do art. 61, § 1º, II, 'a', item 2, do CTB, onde não existir sinalização regulamentadora, a velocidade máxima nas rodovias de pista simples será de 100 km/h para automóveis, camionetas, caminhonetes e motocicletas, e de 90 km/h para os demais veículos.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q7 - IBFC / GM - Circulação de Pedestres e Travessia
  {
    idSlug: "trans-007",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em relação aos direitos e deveres dos pedestres regulamentados no Código de Trânsito Brasileiro (art. 68 a 71), assinale a afirmativa correta:",
    explicacao: "GABARITO: D. Segundo o art. 70 do CTB, os pedestres que estiverem atravessando a via sobre as faixas delimitadas para esse fim terão prioridade de passagem, exceto nos locais com sinalização semafórica, onde deverão ser respeitadas as disposições deste Código.",
    alternativas: [
      { letra: "A", texto: "O pedestre tem prioridade absoluta de travessia em qualquer ponto da via urbana, mesmo onde houver passarela a menos de 50 metros.", correta: false },
      { letra: "B", texto: "Nas vias rurais sem acostamento, a circulação de pedestres deve ser feita sempre no mesmo sentido de fluxo dos veículos.", correta: false },
      { letra: "C", texto: "O ciclista desmontado empurrando a bicicleta equipara-se ao veículo automotor em direitos e deveres.", correta: false },
      { letra: "D", texto: "Nas faixas delimitadas para travessia, os pedestres têm prioridade de passagem, salvo nos locais com sinalização semafórica.", correta: true },
      { letra: "E", texto: "É permitido ao pedestre permanecer ou andar nas pistas de rolamento em agrupamentos sem autorização prévia da autoridade competente.", correta: false }
    ]
  },
  // Q8 - CEBRASPE / PRF - Transporte de Crianças no Veículo
  {
    idSlug: "trans-008",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com o art. 64 do CTB (com redação dada pela Lei nº 14.071/2020), as crianças com idade inferior a 10 (dez) anos que não tenham atingido 1,45 m (um metro e quarenta e cinco centímetros) de altura devem ser transportadas nos bancos traseiros, em dispositivo de retenção adequado a cada faixa etária e peso.",
    explicacao: "GABARITO: CERTO. O art. 64 do CTB dispõe expressamente que as crianças com idade inferior a 10 anos que não tenham atingido 1,45 m de altura devem ser transportadas nos bancos traseiros, em dispositivo de retenção adequado à sua idade, peso e altura, salvo exceções regulamentadas pelo CONTRAN.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q9 - FGV / PM - Transporte de Crianças em Motocicletas
  {
    idSlug: "trans-009",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um policial militar em fiscalização de trânsito aborda um condutor de motocicleta que transporta na garupa seu filho. Segundo o Código de Trânsito Brasileiro (art. 244, V, com alteração da Lei nº 14.071/2020), é proibido conduzir motocicleta, motoneta e ciclomotor transportando criança menor de:",
    explicacao: "GABARITO: C. Com a Lei nº 14.071/2020, o art. 244, V, do CTB passou a prever como infração gravíssima conduzir motocicleta transportando criança menor de 10 (dez) anos ou que não tenha, nas circunstâncias, condições de cuidar de sua própria segurança (anteriormente a idade mínima era de 7 anos).",
    alternativas: [
      { letra: "A", texto: "7 (sete) anos.", correta: false },
      { letra: "B", texto: "8 (oito) anos.", correta: false },
      { letra: "C", texto: "10 (dez) anos.", correta: true },
      { letra: "D", texto: "12 (doze) anos.", correta: false },
      { letra: "E", texto: "14 (quatorze) anos.", correta: false }
    ]
  },
  // Q10 - CEBRASPE / PRF - Entrada e Saída de Vias e Imóveis
  {
    idSlug: "trans-010",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O condutor que for ingressar em uma via procedente de um lote lindeiro ou imóvel a ela adjacente deve dar preferência aos veículos e aos pedestres que estejam transitando por essa via.",
    explicacao: "GABARITO: CERTO. Art. 36 do CTB: 'O condutor que for ingressar numa via, procedente de um lote lindeiro a essa via, deverá dar preferência aos veículos e pedestres que por ela estejam transitando'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q11 - VUNESP / PM - Preferência em Cruzamentos Não Sinalizados
  {
    idSlug: "trans-011",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Dois veículos se aproximam de um cruzamento de vias urbanas de mesmo fluxo e sem qualquer tipo de sinalização de trânsito. Segundo o art. 29, III, 'c', do CTB, a preferência de passagem pertencerá:",
    explicacao: "GABARITO: A. No caso de vias não sinalizadas que se cruzem em nível (fora de rodovias e rotatórias), a preferência de passagem é daquele veículo que se aproximar pela direita do outro condutor (art. 29, III, 'c', do CTB).",
    alternativas: [
      { letra: "A", texto: "ao veículo que vier pela direita do condutor.", correta: true },
      { letra: "B", texto: "ao veículo de maior porte ou massa.", correta: false },
      { letra: "C", texto: "ao veículo que estiver transitando em maior velocidade.", correta: false },
      { letra: "D", texto: "ao veículo que vier pela esquerda do condutor.", correta: false },
      { letra: "E", texto: "ao primeiro que acionar os faróis altos ou a buzina.", correta: false }
    ]
  },
  // Q12 - CEBRASPE / PRF - Velocidade Mínima nas Vias
  {
    idSlug: "trans-012",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A velocidade mínima permitida para uma via não poderá ser inferior à metade da velocidade máxima fixada para ela, respeitadas as condições operacionais de trânsito e da via.",
    explicacao: "GABARITO: CERTO. O art. 62 do CTB preceitua expressamente que a velocidade mínima não poderá ser inferior à metade da velocidade máxima estabelecida, respeitadas as condições operacionais de trânsito e da via.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q13 - FGV / PM - Conversão à Direita com Sinal Vermelho
  {
    idSlug: "trans-013",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Lei nº 14.071/2020 incluiu o art. 44-A no Código de Trânsito Brasileiro tratando da conversão livre à direita em semáforos. Sobre essa regra, é correto afirmar que:",
    explicacao: "GABARITO: E. Art. 44-A do CTB: 'É livre o movimento de conversão à direita diante de sinal vermelho do semáforo onde houver sinalização indicativa que permita essa conversão, observados os arts. 44, 45 e 70 deste Código'. Ou seja, é necessária sinalização permissiva explícita no local.",
    alternativas: [
      { letra: "A", texto: "é permitida a conversão livre à direita em qualquer cruzamento semafórico do país, mesmo sem sinalização regulamentadora.", correta: false },
      { letra: "B", texto: "a conversão à direita é proibida sob sinal vermelho sob qualquer hipótese.", correta: false },
      { letra: "C", texto: "a conversão é livre apenas para veículos de transporte público coletivo.", correta: false },
      { letra: "D", texto: "a conversão pode ser feita sem necessidade de parada prévia ou redução de velocidade.", correta: false },
      { letra: "E", texto: "é livre a conversão à direita diante de sinal vermelho do semáforo exclusivamente onde houver sinalização indicativa que permita essa conversão.", correta: true }
    ]
  },
  // Q14 - CEBRASPE / PRF - Uso de Buzina
  {
    idSlug: "trans-014",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O condutor de veículo só poderá fazer uso da buzina, desde que em toque breve, em duas hipóteses: para fazer as advertências necessárias a fim de evitar acidentes e, fora das áreas urbanas, quando for conveniente advertir a um condutor que se tem o propósito de ultrapassá-lo.",
    explicacao: "GABARITO: CERTO. É a redação exata do art. 41 do CTB: 'O condutor de veículo só poderá fazer uso de buzina, desde que em toque breve, nas seguintes situações: I - para fazer as advertências necessárias a fim de evitar acidentes; II - fora das áreas urbanas, quando for conveniente advertir a um condutor que se tem o propósito de ultrapassá-lo'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q15 - IBFC / GM - Parada e Estacionamento em Guias Rebaixadas
  {
    idSlug: "trans-015",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No âmbito da fiscalização municipal de trânsito, a respeito da diferença entre parada e estacionamento definida no Anexo I do CTB, assinale a alternativa correta:",
    explicacao: "GABARITO: B. No Anexo I do CTB, PARADA é a imobilização do veículo com a finalidade e pelo tempo estritamente necessário para efetuar embarque ou desembarque de passageiros; ESTACIONAMENTO é a imobilização por tempo superior ao necessário para embarque ou desembarque.",
    alternativas: [
      { letra: "A", texto: "Parada é a imobilização do veículo para carga e descarga de mercadorias por até 15 minutos.", correta: false },
      { letra: "B", texto: "Parada é a imobilização do veículo com a finalidade e pelo tempo estritamente necessário para embarque ou desembarque de passageiros.", correta: true },
      { letra: "C", texto: "Estacionamento é qualquer parada com motor ligado, independentemente do tempo despendido.", correta: false },
      { letra: "D", texto: "Operação de carga e descarga é equiparada à parada de passageiros para fins de sinalização restritiva.", correta: false },
      { letra: "E", texto: "A permanência do motorista ao volante converte o estacionamento automaticamente em simples parada.", correta: false }
    ]
  },
  // Q16 - CEBRASPE / PRF - Classificação das Vias Urbanas e Rurais
  {
    idSlug: "trans-016",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "As vias abertas à circulação dividem-se em urbanas (trânsito rápido, arterial, coletora e local) e rurais (rodovias e estradas). A via caracterizada por acessos especiais com trânsito livre, sem interseções em nível e sem acessibilidade direta aos lotes lindeiros classifica-se como via de trânsito rápido.",
    explicacao: "GABARITO: CERTO. Art. 60 e Anexo I do CTB definem via de trânsito rápido como aquela caracterizada por acessos especiais com trânsito livre, sem interseções em nível, sem acessibilidade direta aos lotes lindeiros e sem travessia de pedestres em nível.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q17 - VUNESP / PM - Faixas de Trânsito e Destinação
  {
    idSlug: "trans-017",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em uma via que possua várias faixas de trânsito no mesmo sentido de circulação, as faixas da esquerda e as faixas da direita são destinadas, respectivamente, segundo o art. 29, IV, do CTB, a:",
    explicacao: "GABARITO: A. Art. 29, IV, do CTB: 'quando uma pista de rolamento comportar várias faixas de circulação no mesmo sentido, são as da direita destinadas ao deslocamento dos veículos mais lentos e de maior porte, quando não houver faixa especial a eles destinada, e as da esquerda, destinadas à ultrapassagem e ao deslocamento dos veículos de maior velocidade'.",
    alternativas: [
      { letra: "A", texto: "ultrapassagem e veículos mais velozes; veículos mais lentos e de maior porte.", correta: true },
      { letra: "B", texto: "veículos pesados; veículos de passageiros e motos.", correta: false },
      { letra: "C", texto: "veículos em serviço de urgência; veículos particulares.", correta: false },
      { letra: "D", texto: "estacionamento temporário; circulação rápida.", correta: false },
      { letra: "E", texto: "transporte coletivo; transporte individual de carga.", correta: false }
    ]
  },
  // Q18 - CEBRASPE / PRF - Circulação de Veículos de Tração Animal
  {
    idSlug: "trans-018",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Os veículos de tração animal devem ser conduzidos pela direita da pista de rolamento, junto à guia da calçada ou acostamento, sempre que não houver faixa especial a eles destinada.",
    explicacao: "GABARITO: CERTO. Art. 52 do CTB: 'Os veículos de tração animal serão conduzidos pela direita da pista, junto à guia da calçada (meio-fio) ou acostamento, sempre que não houver faixa especial a eles destinada, devendo seus condutores obedecer, no que couber, às normas de circulação previstas neste Código e às que vierem a ser fixadas pelo órgão ou entidade com circunscrição sobre a via'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q19 - FGV / PM - Prioridade de Passagem de Veículos sobre Trilhos
  {
    idSlug: "trans-019",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Em relação ao trânsito em passagens de nível e interseções com vias férreas, o CTB estabelece expressamente em seu art. 29, XII, que os veículos que se deslocam sobre trilhos:",
    explicacao: "GABARITO: C. Art. 29, XII, do CTB: 'os veículos que se deslocam sobre trilhos terão preferência de passagem sobre os demais, respeitadas as normas de circulação'.",
    alternativas: [
      { letra: "A", texto: "devem ceder passagem a viaturas de polícia e ambulâncias em serviço de urgência com sirene ligada.", correta: false },
      { letra: "B", texto: "obedecem à regra de preferência pela direita quando em cruzamento não sinalizado.", correta: false },
      { letra: "C", texto: "terão preferência de passagem sobre os demais veículos, respeitadas as normas de circulação.", correta: true },
      { letra: "D", texto: "só têm preferência se a passagem de nível possuir cancela automática em funcionamento.", correta: false },
      { letra: "E", texto: "devem parar obrigatoriamente antes de cruzar qualquer via urbana arterial.", correta: false }
    ]
  },
  // Q20 - CEBRASPE / PRF - Uso de Pisca-Alerta
  {
    idSlug: "trans-020",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O uso do pisca-alerta é permitido apenas em imobilizações ou situações de emergência, bem como quando a regulamentação da via expressamente o determinar.",
    explicacao: "GABARITO: CERTO. Art. 40, V, do CTB: 'O condutor utilizará o pisca-alerta nas seguintes situações: a) em imobilizações ou situações de emergência; b) quando a regulamentação da via assim o determinar'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q21 - VUNESP / PM - Trânsito de Veículos em Calçadas
  {
    idSlug: "trans-021",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "De acordo com o art. 29, V, do CTB, o trânsito de veículos sobre passeios, calçadas e nos acostamentos só poderá ocorrer para:",
    explicacao: "GABARITO: B. Art. 29, V, do CTB: 'o trânsito de veículos sobre passeios, calçadas e nos acostamentos só poderá ocorrer para que se entre ou se saia dos imóveis ou áreas especiais de estacionamento'.",
    alternativas: [
      { letra: "A", texto: "efetuar ultrapassagens quando a faixa de rolamento estiver totalmente congestionada.", correta: false },
      { letra: "B", texto: "entrar ou sair de imóveis ou de áreas especiais de estacionamento.", correta: true },
      { letra: "C", texto: "embarque e desembarque rápido de passageiros com deficiência.", correta: false },
      { letra: "D", texto: "desviar de obras na pista de rolamento sem auxílio de agente de trânsito.", correta: false },
      { letra: "E", texto: "escapar de perseguição criminal em qualquer circunstância.", correta: false }
    ]
  },
  // Q22 - CEBRASPE / PRF - Regras para Circulação de Ciclomotores
  {
    idSlug: "trans-022",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Os ciclomotores devem ser conduzidos pela direita da pista de rolamento, preferencialmente no centro da faixa mais à direita ou no bordo direito da pista, sendo expressamente proibida a sua circulação nas vias de trânsito rápido e sobre as calçadas das vias urbanas.",
    explicacao: "GABARITO: CERTO. Art. 57 do CTB: 'Os ciclomotores devem ser conduzidos pela direita da pista de rolamento, preferencialmente no centro da faixa mais à direita ou no bordo direito da pista sempre que não houver acostamento ou faixa própria a eles destinada, proibida a sua circulação nas vias de trânsito rápido e sobre as calçadas das vias urbanas'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q23 - FGV / PM - Proibição de Circulação de Bicicletas
  {
    idSlug: "trans-023",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Quanto à circulação de bicicletas em vias públicas, segundo os arts. 58 e 59 do CTB, é correto afirmar que:",
    explicacao: "GABARITO: D. Art. 59 do CTB: 'Desde que autorizado e devidamente sinalizado pelo órgão ou entidade com circunscrição sobre a via, será permitida a circulação de bicicletas nos passeios'. Nas vias urbanas e rurais sem ciclovia, a circulação deve ocorrer nos bordos da pista, no mesmo sentido de circulação dos veículos.",
    alternativas: [
      { letra: "A", texto: "é permitida a circulação de bicicletas em calçadas a qualquer momento, independentemente de sinalização.", correta: false },
      { letra: "B", texto: "nas vias rurais de pista dupla, as bicicletas devem transitar obrigatoriamente no sentido contrário ao dos veículos automotores.", correta: false },
      { letra: "C", texto: "os ciclistas têm prioridade sobre os pedestres nas calçadas e travessias.", correta: false },
      { letra: "D", texto: "a circulação de bicicletas nos passeios é permitida desde que autorizada e devidamente sinalizada pelo órgão competente.", correta: true },
      { letra: "E", texto: "a autoridade de trânsito não pode proibir o trânsito de bicicletas em nenhuma via pública.", correta: false }
    ]
  },
  // Q24 - CEBRASPE / PRF - Uso de Luz Baixa por Motocicletas
  {
    idSlug: "trans-024",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Os condutores de motocicletas, motonetas e ciclomotores devem obrigatoriamente manter os faróis acesos utilizando luz baixa durante o dia e a noite, em qualquer via pública.",
    explicacao: "GABARITO: CERTO. Art. 40, § 1º, do CTB: 'Os veículos de transporte coletivo de passageiros, quando circularem em faixas ou pistas a eles privativas, e as motocicletas, motonetas e ciclomotores deverão utilizar-se de farol de luz baixa durante o dia e a noite'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q25 - IBFC / GM - Estacionamento em Esquinas
  {
    idSlug: "trans-025",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "De acordo com o art. 181, I, do Código de Trânsito Brasileiro, estacionar o veículo nas esquinas e a menos de certa distância do bordo do alinhamento da via transversal constitui infração de trânsito média. Essa distância mínima regulamentar é de:",
    explicacao: "GABARITO: C. Art. 181, I, do CTB tipifica como infração média: 'estacionar o veículo: I - nas esquinas e a menos de cinco metros do bordo do alinhamento da via transversal'.",
    alternativas: [
      { letra: "A", texto: "2 metros.", correta: false },
      { letra: "B", texto: "3 metros.", correta: false },
      { letra: "C", texto: "5 metros.", correta: true },
      { letra: "D", texto: "7 metros.", correta: false },
      { letra: "E", texto: "10 metros.", correta: false }
    ]
  }
];
