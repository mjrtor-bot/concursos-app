import { TAXONOMIA } from "../taxonomia.mjs";
import { writeModule } from "../builder.mjs";

const transito01Raw = [
  {
    slug: "b12-trans01-001",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "facil",
    enunciado: "Em rodovia federal de pista dupla desprovida de sinalização regulamentadora de velocidade, a velocidade máxima permitida para automóveis, camionetas, caminhonetes e motocicletas é de cento e dez quilômetros por hora, ao passo que para os demais veículos o limite legal é de noventa quilômetros por hora.",
    correta: true,
    explicacao: "GABARITO: CERTO. Conforme o art. 61, § 1º, II, 'a', 1 e 2 do CTB, em rodovias de pista dupla onde não houver sinalização regulamentadora, a velocidade máxima é de 110 km/h para automóveis, camionetas, caminhonetes e motocicletas, e de 90 km/h para os demais veículos."
  },
  {
    slug: "b12-trans01-002",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "O condutor que estiver transitando pela faixa da esquerda, ao perceber que o veículo que o segue tem o propósito de ultrapassá-lo, deve manter-se em sua faixa e aumentar ligeiramente a velocidade, sendo-lhe facultado deslocar-se para a direita apenas se a ultrapassagem for solicitada por sinal sonoro de buzina.",
    correta: false,
    explicacao: "GABARITO: ERRADO. Segundo o art. 30, I do CTB, todo condutor, ao perceber que outro que o segue tem o propósito de ultrapassá-lo, deverá, se estiver circulando pela faixa da esquerda, deslocar-se para a faixa da direita, sem acelerar a marcha, independentemente de buzina."
  },
  {
    slug: "b12-trans01-003",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Quadrix",
    orgao: "Polícia Militar",
    cargo: "Soldado da Polícia Militar",
    dif: "medio",
    enunciado: "O uso de luz baixa dos faróis durante o dia é obrigatório para todos os veículos automotores em rodovias de pista simples situadas fora dos perímetros urbanos, no caso de veículos desprovidos de luzes de rodagem diurna (DRL).",
    correta: true,
    explicacao: "GABARITO: CERTO. Nos termos do art. 40, I, 'b' do CTB (com a redação dada pela Lei nº 14.071/2020), o uso de farol de luz baixa durante o dia é exigido em rodovias de pista simples fora dos perímetros urbanos, caso o veículo não disponha de DRL."
  },
  {
    slug: "b12-trans01-004",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "facil",
    enunciado: "Os veículos prestadores de serviços de utilidade pública gozam de livre trânsito e estacionamento em qualquer circunstância em vias públicas, independentemente de estarem no local prestando serviço ou portarem identificação luminosa acionada.",
    correta: false,
    explicacao: "GABARITO: ERRADO. Conforme o art. 29, VIII do CTB, os veículos prestadores de serviços de utilidade pública gozam de livre parada e estacionamento (e não livre trânsito irrestrito) apenas no local da prestação de serviço e desde que devidamente identificados por dispositivo regulamentar de iluminação intermitente."
  },
  {
    slug: "b12-trans01-005",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "dificil",
    enunciado: "Ao aproximar-se de cruzamento de vias não sinalizado, terá preferência de passagem aquele condutor que estiver transitando por rodovia, ou, em caso de rotatória, aquele que já estiver circulando por ela, ou, nos demais casos, o veículo que se aproximar pela direita do outro.",
    correta: true,
    explicacao: "GABARITO: CERTO. A assertiva reflete com exatidão a ordem de regras de preferência fixadas no art. 29, III, alíneas 'a', 'b' e 'c' do CTB para cruzamentos desprovidos de sinalização regulamentar."
  },
  {
    slug: "b12-trans01-006",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Quadrix",
    orgao: "Polícia Civil",
    cargo: "Investigador de Polícia Civil",
    dif: "medio",
    enunciado: "Nas vias urbanas classificadas como vias de trânsito rápido onde não haja sinalização regulamentadora, a velocidade máxima legalmente admitida para qualquer veículo automotor é de sessenta quilômetros por hora.",
    correta: false,
    explicacao: "GABARITO: ERRADO. De acordo com o art. 61, § 1º, I, 'a' do CTB, a velocidade máxima permitida nas vias de trânsito rápido não sinalizadas é de oitenta quilômetros por hora (80 km/h), e não 60 km/h (que é o limite das vias arteriais)."
  },
  {
    slug: "b12-trans01-007",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "O crime de conduzir veículo automotor com capacidade psicomotora alterada em razão da influência de álcool (art. 306 do CTB) é considerado delito de perigo abstrato de perigo coletivo, prescindindo da demonstração de direção anormal ou risco concreto para a sua consumação.",
    correta: true,
    explicacao: "GABARITO: CERTO. A jurisprudência consolidada do STJ (Tema Repetitivo 484 e Súmula Vinculante aplicável) estabelece que o crime do art. 306 do CTB é de perigo abstrato, consumando-se com a simples constatação da embriaguez ao volante pelos meios probatórios legalmente admitidos."
  },
  {
    slug: "b12-trans01-008",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Civil",
    cargo: "Delegado de Polícia Civil",
    dif: "dificil",
    enunciado: "O homicídio culposo na direção de veículo automotor praticado por condutor sob a influência de álcool prevê pena de reclusão de cinco a oito anos, sendo vedada expressamente pelo Código de Processo Penal a concessão de fiança pela autoridade policial em sede de auto de prisão em flagrante.",
    correta: true,
    explicacao: "GABARITO: CERTO. O art. 302, § 3º do CTB comina pena de reclusão de 5 a 8 anos para o homicídio culposo com embriaguez. Por superar o limite de 4 anos previsto no art. 322 do CPP, o Delegado de Polícia não pode arbitrar fiança, cabendo a análise ao Juiz de Direito em audiência de custódia."
  },
  {
    slug: "b12-trans01-009",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Quadrix",
    orgao: "Polícia Militar",
    cargo: "Oficial da Polícia Militar",
    dif: "medio",
    enunciado: "Praticar lesão corporal culposa na direção de veículo automotor participando em via pública de racha ou corrida não autorizada constitui causa de aumento de pena de um terço à metade no tipo penal correspondente.",
    correta: false,
    explicacao: "GABARITO: ERRADO. O art. 303, § 1º c/c art. 302, § 1º do CTB prevê aumento de 1/3 à metade em casos específicos (ausência de CNH, faixa de pedestres, não prestar socorro, transporte de passageiros). A prática em racha/exibição qualifica o crime com pena privativa autônoma de reclusão de 2 a 5 anos se resultar lesão grave (§ 2º do art. 308)."
  },
  {
    slug: "b12-trans01-010",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "facil",
    enunciado: "A recusa do condutor de veículo automotor em submeter-se a teste de etilômetro, exame clínico ou perícia constitui infração gravíssima administrativa que comina penalidade de multa multiplicada por dez e suspensão do direito de dirigir por doze meses.",
    correta: true,
    explicacao: "GABARITO: CERTO. Conforme o art. 165-A do CTB, a recusa à realização de qualquer procedimento de constatação de embriaguez gera as mesmas penalidades e medidas administrativas do art. 165 (infração gravíssima, multa x10 e suspensão por 12 meses)."
  },
  {
    slug: "b12-trans01-011",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "A circulação de bicicletas nos acostamentos das rodovias é expressamente proibida pelo CTB, ainda que inexistam ciclovias ou ciclofaixas segregadas na infraestrutura viária.",
    correta: false,
    explicacao: "GABARITO: ERRADO. O art. 58 do CTB estabelece que, quando não houver ciclovia, ciclofaixa ou acostamento, ou quando não for possível a utilização destes, a circulação deverá ocorrer nos bordos da pista. Havendo acostamento, é permitida a circulação de bicicletas no mesmo sentido de tráfego regulamentado."
  },
  {
    slug: "b12-trans01-012",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Civil",
    cargo: "Escrivão de Polícia Civil",
    dif: "dificil",
    enunciado: "O crime de desobediência a ordem de parada emanada por policial rodoviário federal no exercício regular da fiscalização de trânsito em rodovia federal tipifica a conduta do art. 330 do Código Penal, sem prejuízo da respectiva autuação administrativa infracional no CTB.",
    correta: true,
    explicacao: "GABARITO: CERTO. A jurisprudência do STJ e STF reconhece que o descumprimento de ordem emanada de autoridade policial no âmbito de fiscalização preventiva de segurança pública ostensiva configura o crime do art. 330 do CP, cumulável com as medidas administrativas viárias."
  },
  {
    slug: "b12-trans01-013",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Quadrix",
    orgao: "Polícia Militar",
    cargo: "Soldado da Polícia Militar",
    dif: "facil",
    enunciado: "O transporte de crianças menores de dez anos que não tenham atingido um metro e quarenta e cinco centímetros de altura deve ser realizado obrigatoriamente nos bancos traseiros dos veículos automotores com dispositivos de retenção adequados ao peso e idade.",
    correta: true,
    explicacao: "GABARITO: CERTO. Conforme o art. 64 do CTB e regulamentação do CONTRAN (Resolução 819/2021), crianças menores de 10 anos que não tenham atingido 1,45 m de altura devem ser transportadas no banco traseiro com dispositivo de retenção apropriado."
  },
  {
    slug: "b12-trans01-014",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "A entrega de veículo automotor a pessoa não habilitada, com habilitação cassada ou sem condições físicas de dirigir (art. 310 do CTB) exige, para sua configuração delitiva, a prova cabal da ocorrência de perigo concreto à incolumidade alheia.",
    correta: false,
    explicacao: "GABARITO: ERRADO. Conforme a Súmula 575 do STJ, 'constitui crime de perigo abstrato a conduta de permitir, confiar ou entregar a direção de veículo automotor a pessoa não habilitada, com habilitação cassada ou com o direito de dirigir suspenso, dispensando-se a demonstração de perigo de dano concreto'."
  },
  {
    slug: "b12-trans01-015",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "Em curvas e declives de vias rurais de pista simples e duplo sentido de circulação, a ultrapassagem pela contramão de direção é proibida, exceto se houver sinalização vertical permitindo a manobra.",
    correta: true,
    explicacao: "GABARITO: CERTO. Nos termos do art. 32 do CTB, o condutor não poderá ultrapassar veículos pela contramão nas passagens de nível, nos cruzamentos e suas proximidades, nem nas curvas e aclives/declives sem visibilidade suficiente, a menos que haja sinalização que permita."
  },
  {
    slug: "b12-trans01-016",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Quadrix",
    orgao: "Polícia Civil",
    cargo: "Delegado de Polícia Civil",
    dif: "dificil",
    enunciado: "A evasão do local do acidente de trânsito para fugir à responsabilidade penal ou civil que possa ser atribuída ao condutor tipifica crime próprio previsto no art. 305 do CTB, cuja constitucionalidade foi declarada pelo Plenário do Supremo Tribunal Federal (Tema 1070 da Repercussão Geral).",
    correta: true,
    explicacao: "GABARITO: CERTO. O STF julgou constitucional o art. 305 do CTB no Tema 1070 de Repercussão Geral (RE 971.608), assentando que o tipo penal não viola o princípio da não autoincriminação nem o direito ao silêncio."
  },
  {
    slug: "b12-trans01-017",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Militar",
    cargo: "Soldado da Polícia Militar",
    dif: "facil",
    enunciado: "O trânsito sobre calçadas, passeios e passarelas é expressamente proibido para qualquer veículo, inclusive para fins de entrada ou saída de imóveis ou de áreas especiais de estacionamento.",
    correta: false,
    explicacao: "GABARITO: ERRADO. O art. 29, V do CTB autoriza o trânsito de veículos sobre passeios, calçadas e nos acostamentos unicamente para que se adentre ou saia dos imóveis ou de áreas especiais de estacionamento."
  },
  {
    slug: "b12-trans01-018",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "A suspensão ou a proibição de se obter a permissão ou a habilitação para dirigir veículo automotor cominada judicialmente como pena restritiva nos crimes de trânsito possui duração mínima de dois meses e máxima de cinco anos.",
    correta: true,
    explicacao: "GABARITO: CERTO. Conforme o art. 293 do CTB, a penalidade judicial de suspensão ou de proibição de se obter a permissão ou a habilitação tem prazo de duração de dois meses a cinco anos."
  },
  {
    slug: "b12-trans01-019",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Quadrix",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "Nas vias públicas providas de acostamento, a conversão à esquerda e a operação de retorno em rodovias devem ser feitas aguardando-se a oportunidade no acostamento da direita para cruzar a pista com segurança, onde não houver locais apropriados para a manobra.",
    correta: true,
    explicacao: "GABARITO: CERTO. O art. 37 do CTB estabelece que nas vias providas de acostamento, a conversão à esquerda e a operação de retorno deverão ser feitas nos locais apropriados e, onde estes não existirem, o condutor deverá aguardar no acostamento, à direita, para cruzar a pista com segurança."
  },
  {
    slug: "b12-trans01-020",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Civil",
    cargo: "Investigador de Polícia Civil",
    dif: "dificil",
    enunciado: "Para os crimes de trânsito de lesão corporal culposa, embriaguez ao volante e participação em racha, a Lei nº 9.099/1995 afasta a aplicação dos institutos despenalizadores da composição civil e da transação penal se o agente estiver sob efeito de álcool ou com velocidade superior em 50 km/h à permitida.",
    correta: true,
    explicacao: "GABARITO: CERTO. De acordo com o art. 291, § 1º do CTB, afasta-se a incidência dos arts. 74, 76 e 88 da Lei 9.099/95 nos casos de lesão corporal culposa se o condutor estiver sob a influência de álcool/drogas, participando de racha ou trafegando a mais de 50 km/h acima do limite regulamentado."
  },
  {
    slug: "b12-trans01-021",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "facil",
    enunciado: "O condutor que for ultrapassar um ciclista em via pública é obrigado pelo Código de Trânsito Brasileiro a guardar a distância lateral mínima regulamentar de um metro e cinquenta centímetros.",
    correta: true,
    explicacao: "GABARITO: CERTO. O art. 201 do CTB tipifica como infração média deixar de guardar a distância lateral de 1,50 m (um metro e cinquenta centímetros) ao passar ou ultrapassar bicicleta."
  },
  {
    slug: "b12-trans01-022",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Quadrix",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "O porte do documento de habilitação (CNH ou Permissão para Dirigir) é dispensável quando, no momento da abordagem de fiscalização de trânsito, for possível a consulta informatizada aos sistemas oficiais do órgão de trânsito.",
    correta: true,
    explicacao: "GABARITO: CERTO. O art. 159, § 1º-A do CTB determina que o porte do documento de habilitação será dispensado quando, no momento da fiscalização, for possível ter acesso ao sistema informatizado do órgão executivo para verificar a situação do condutor."
  },
  {
    slug: "b12-trans01-023",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Militar",
    cargo: "Oficial da Polícia Militar",
    dif: "medio",
    enunciado: "É permitida a condução de motocicletas, motonetas e ciclomotores com o transporte de passageiro que seja criança com idade a partir de sete anos completos, dispensado o uso de calçado firme.",
    correta: false,
    explicacao: "GABARITO: ERRADO. Com as alterações da Lei nº 14.071/2020 no art. 244, V do CTB, a idade mínima para transportar criança em motocicleta, motoneta ou ciclomotor passou a ser de dez anos de idade (e não 7 anos), configurando infração gravíssima com suspensão do direito de dirigir."
  },
  {
    slug: "b12-trans01-024",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "dificil",
    enunciado: "A infração de trânsito por dirigir sob a influência de álcool (art. 165 do CTB) impõe a aplicação de medida administrativa de retenção do veículo até a apresentação de condutor habilitado em condições psicomotoras normais e recolhimento do documento de habilitação.",
    correta: true,
    explicacao: "GABARITO: CERTO. O art. 165 do CTB estabelece como medidas administrativas o recolhimento do documento de habilitação e a retenção do veículo até a apresentação de condutor habilitado e devidamente submetido ao teste de alcoolemia."
  },
  {
    slug: "b12-trans01-025",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Cebraspe",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "A realização de operação de carga e descarga em via pública é considerada parada de trânsito para fins legais, aplicando-se-lhe as mesmas regras de tempo estritamente necessário para embarque e desembarque de passageiros.",
    correta: false,
    explicacao: "GABARITO: ERRADO. Nos termos do art. 47, parágrafo único e Anexo I do CTB, a operação de carga ou descarga é regulamentada como estacionamento (e não simples parada), devendo respeitar as condições e horários estabelecidos pela autoridade de trânsito."
  },
  {
    slug: "b12-trans01-026",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Quadrix",
    orgao: "Polícia Civil",
    cargo: "Delegado de Polícia Civil",
    dif: "dificil",
    enunciado: "O crime de alteração de local de acidente automobilístico para induzir a erro o perito ou o juiz (art. 312 do CTB - fraude processual no trânsito) admite a modalidade culposa quando o socorrista altera involuntariamente a posição do automóvel para desobstruir a via pública.",
    correta: false,
    explicacao: "GABARITO: ERRADO. O tipo penal do art. 312 do CTB exige o dolo específico ('com o fim de induzir a erro o agente policial, o perito, ou juiz'), inexistindo previsão de modalidade culposa no ordenamento penal brasileiro para a fraude processual."
  }
];

const transito02Raw = [
  {
    slug: "b12-trans02-001",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo FGV",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "facil",
    enunciado: "Considere que um veículo de emergência policial trafega em rodovia com batedores e sinais luminosos ligados em atendimento a chamado urgente de assalto a banco. De acordo com as normas de circulação do CTB, os demais condutores que trafegam na mesma via devem:",
    opcoes: [
      "Parar imediatamente seus veículos sobre a pista de rolamento até a passagem completa do comboio.",
      "Deixar livre a passagem pela faixa da esquerda, deslocando-se para a direita da via e parando, se necessário.",
      "Acelerar o veículo para atingir a velocidade do comboio policial e desobstruir o fluxo.",
      "Deslocar-se imediatamente para o acostamento à esquerda da via e acionar o pisca-alerta.",
      "Manter a velocidade de cruzeiro e apenas buzinar para avisar os pedestres."
    ],
    corretaIdx: 1,
    explicacao: "Segundo o art. 29, VII, 'a' do CTB, ao aproximar-se veículo em serviço de urgência com sinais sonoros e luminosos acionados, todos os condutores deverão deixar livre a passagem pela faixa da esquerda, indo para a direita da via e parando, se necessário."
  },
  {
    slug: "b12-trans02-002",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Vunesp",
    orgao: "Polícia Militar",
    cargo: "Oficial da Polícia Militar",
    dif: "medio",
    enunciado: "Em via coletora urbana desprovida de qualquer placa de sinalização regulamentadora de trânsito, a velocidade máxima legalmente autorizada pelo CTB para todos os veículos automotores é de:",
    opcoes: [
      "Trinta quilômetros por hora.",
      "Quarenta quilômetros por hora.",
      "Cinquenta quilômetros por hora.",
      "Sessenta quilômetros por hora.",
      "Oitenta quilômetros por hora."
    ],
    corretaIdx: 1,
    explicacao: "Nos termos do art. 61, § 1º, I, 'c' do CTB, nas vias coletoras urbanas onde não existir sinalização regulamentadora, a velocidade máxima permitida é de quarenta quilômetros por hora (40 km/h)."
  },
  {
    slug: "b12-trans02-003",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo FCC",
    orgao: "Polícia Civil",
    cargo: "Delegado de Polícia Civil",
    dif: "dificil",
    enunciado: "O condutor que atropela pedestre em faixa sinalizada, provocando-lhe a morte culposa, terá sua pena privativa de liberdade aumentada de um terço à metade pelo Código de Trânsito Brasileiro em razão de:",
    opcoes: [
      "Praticar o crime em período noturno com faróis apagados.",
      "Praticá-lo em faixa de pedestres ou na calçada.",
      "Estar conduzindo automóvel com licenciamento anual vencido.",
      "Ter adquirido o veículo automotor mediante financiamento bancário.",
      "Estar utilizando calçado que não se firme aos pés no momento do sinistro."
    ],
    corretaIdx: 1,
    explicacao: "O art. 302, § 1º, II do CTB estabelece como causa de aumento de pena de 1/3 à metade no homicídio culposo a sua prática 'em faixa de pedestres ou na calçada'."
  },
  {
    slug: "b12-trans02-004",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Instituto AOCP",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "A conduta de violar a suspensão ou a proibição de se obter a permissão ou a habilitação para dirigir veículo automotor imposta com fundamento no Código de Trânsito Brasileiro configura:",
    opcoes: [
      "Mera infração administrativa de natureza média, sem repercussão criminal.",
      "Infração administrativa gravíssima e crime de trânsito punido com detenção de seis meses a um ano e multa.",
      "Contravenção penal de trânsito punida com prisão simples de 15 dias.",
      "Crime hediondo inafiançável e insuscetível de graça ou anistia.",
      "Crime militar próprio afeto à competência da Justiça Militar Estadual."
    ],
    corretaIdx: 1,
    explicacao: "Conforme o art. 307 do CTB, violar a suspensão ou proibição de dirigir judicialmente imposta constitui crime punido com detenção de 6 meses a 1 ano e multa, além de nova imposição de suspensão ou proibição."
  },
  {
    slug: "b12-trans02-005",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo FGV",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "Em rodovia federal de pista simples não sinalizada, a velocidade máxima regulamentar para automóveis, camionetas, caminhonetes e motocicletas é fixada pelo Código de Trânsito Brasileiro em:",
    opcoes: [
      "Oitenta quilômetros por hora.",
      "Noventa quilômetros por hora.",
      "Cem quilômetros por hora.",
      "Cento e dez quilômetros por hora.",
      "Cento e vinte quilômetros por hora."
    ],
    corretaIdx: 2,
    explicacao: "De acordo com o art. 61, § 1º, II, 'b', 1 do CTB, em rodovias de pista simples desprovidas de sinalização regulamentadora, o limite de velocidade é de 100 km/h para automóveis, camionetas, caminhonetes e motocicletas."
  },
  {
    slug: "b12-trans02-006",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Vunesp",
    orgao: "Polícia Civil",
    cargo: "Investigador de Polícia Civil",
    dif: "facil",
    enunciado: "Constitui infração de trânsito gravíssima punida com multa (três vezes), recolhimento do documento de habilitação e retenção do veículo a conduta de:",
    opcoes: [
      "Estacionar o veículo a menos de cinco metros do alinhamento da via transversal.",
      "Transitar com o veículo em velocidade superior à máxima em até 20%.",
      "Dirigir veículo com a Carteira Nacional de Habilitação cassada ou com suspensão do direito de dirigir.",
      "Deixar de manter acesas as luzes de posição ao estacionar à noite.",
      "Usar a buzina em desacordo com os padrões e frequências regulamentadas."
    ],
    corretaIdx: 2,
    explicacao: "Nos termos do art. 162, II do CTB, dirigir veículo com CNH, PPD ou ACC cassada ou com suspensão do direito de dirigir é infração gravíssima com multa (três vezes), recolhimento do documento e retenção do veículo."
  },
  {
    slug: "b12-trans02-007",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo FCC",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "dificil",
    enunciado: "A respeito do crime de participação em disputa automobilística não autorizada ('racha'), previsto no art. 308 do CTB, é correto afirmar que:",
    opcoes: [
      "A consumação independe de perigo de dano à incolumidade pública ou privada.",
      "Se da prática resultar morte e as circunstâncias demonstrarem que o agente não quis o resultado nem assumiu o risco de produzi-lo, a pena é de reclusão de cinco a dez anos.",
      "O crime admite apenas tentativa se for praticado em área rural fechada ao trânsito comum.",
      "Trata-se de infração de menor potencial ofensivo em todas as suas modalidades qualificadas.",
      "A pena cominada na forma simples é de reclusão de três a seis anos incondicionada."
    ],
    corretaIdx: 1,
    explicacao: "O art. 308, § 2º do CTB prevê pena de reclusão de 5 a 10 anos se da prática de racha resultar morte na modalidade preterdolosa (culposa no resultado morte sem dolo eventual)."
  },
  {
    slug: "b12-trans02-008",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Instituto AOCP",
    orgao: "Polícia Militar",
    cargo: "Soldado da Polícia Militar",
    dif: "facil",
    enunciado: "Sobre as normas de preferência em interseções com rotatórias desprovidas de sinalização semafórica ou de placas de 'Pare' / 'Dê a Preferência', o CTB prevê que:",
    opcoes: [
      "A preferência é sempre do veículo de maior porte ou de transporte coletivo.",
      "A preferência é do condutor que se aproximar da rotatória pela faixa da esquerda.",
      "A preferência de passagem pertence àquele veículo que já estiver circulando pela rotatória.",
      "A preferência será daquele condutor que emitir sinal sonoro de buzina primeiro.",
      "Todos os veículos devem parar simultaneamente e alternar o cruzamento."
    ],
    corretaIdx: 2,
    explicacao: "Conforme o art. 29, III, 'b' do CTB, no caso de rotatória em interseção não sinalizada, a preferência de passagem é daquele condutor que já estiver circulando por ela."
  },
  {
    slug: "b12-trans02-009",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo FGV",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "O teste de etilômetro realizado em condutor de automóvel em fiscalização rodoviária acusou medição de 0,38 miligrama de álcool por litro de ar alveolar expirado (valor já considerado o erro máximo admissível). Nessa situação fática, o policial deve:",
    opcoes: [
      "Apenas lavrar o auto de infração administrativa e liberar o condutor no próprio veículo.",
      "Efetuar a lavratura da autuação administrativa e dar voz de prisão em flagrante pelo crime do art. 306 do CTB.",
      "Aplicar advertência verbal e determinar a realização de novo teste após 48 horas.",
      "Apreender o veículo para perdimento sumário em favor da Fazenda Nacional sem processo.",
      "Reter a CNH do condutor sem qualquer lavratura de auto de infração de trânsito."
    ],
    corretaIdx: 1,
    explicacao: "Conforme o art. 306, § 1º, I do CTB e Resolução CONTRAN 432/2013, concentração igual ou superior a 0,34 mg/L de ar alveolar configura o crime de embriaguez ao volante, impondo prisão em flagrante e autuação administrativa do art. 165."
  },
  {
    slug: "b12-trans02-010",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Vunesp",
    orgao: "Polícia Civil",
    cargo: "Escrivão de Polícia Civil",
    dif: "medio",
    enunciado: "De acordo com o Código de Trânsito Brasileiro, a manobra de ultrapassagem deve ser realizada pelo lado esquerdo da via, exceto quando:",
    opcoes: [
      "A via for de mão dupla e estiver chovendo intensamente.",
      "O veículo a ser ultrapassado estiver sinalizando o propósito de entrar à esquerda.",
      "O condutor estiver transportando autoridade policial em missão sigilosa.",
      "O acostamento estiver desobstruído e pavimentado em rodovia federal.",
      "Houver aclive acentuado em pista simples de rodovia estadual."
    ],
    corretaIdx: 1,
    explicacao: "O art. 29, IX do CTB prevê que 'a ultrapassagem de outro veículo em movimento deverá ser feita pela esquerda, obedecida a sinalização regulamentar e as demais normas estabelecidas neste Código, exceto quando o veículo a ser ultrapassado estiver sinalizando o propósito de entrar à esquerda'."
  },
  {
    slug: "b12-trans02-011",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo FCC",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "dificil",
    enunciado: "O crime de trafegar em velocidade incompatível com a segurança nas proximidades de escolas, hospitais ou estações de embarque e desembarque de passageiros (art. 311 do CTB):",
    opcoes: [
      "É classificado como crime de perigo de dano concreto, exigindo a demonstração fática de perigo a transeuntes.",
      "Prescinde de qualquer risco, consumando-se pelo mero excesso de velocidade captado por radar eletrônico.",
      "Aplica-se unicamente a condutores de veículos pesados de transporte coletivo de passageiros.",
      "Constitui crime de ação penal pública condicionada à representação das vítimas em trinta dias.",
      "Tem sua competência privativa na Justiça Federal independentemente da via em que for cometido."
    ],
    corretaIdx: 0,
    explicacao: "O art. 311 do CTB exige expressamente a circunstância de 'gerando perigo de dano', tratando-se de delito de perigo concreto conforme jurisprudência uníssona dos Tribunais Superiores."
  },
  {
    slug: "b12-trans02-012",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Instituto AOCP",
    orgao: "Polícia Militar",
    cargo: "Soldado da Polícia Militar",
    dif: "facil",
    enunciado: "O uso da buzina em veículos automotores é legalmente permitido pelo CTB apenas em toques breves nas seguintes hipóteses:",
    opcoes: [
      "Para pressionar pedestres a acelerarem a travessia na faixa de pedestres.",
      "Para fazer advertências necessárias a fim de evitar acidentes ou fora de áreas urbanas para indicar o propósito de ultrapassar.",
      "Para saudar conhecidos e comemorar eventos esportivos em cortejos urbanos.",
      "Entre as 22h e as 6h da manhã em áreas residenciais para solicitar abertura de portões.",
      "Em qualquer situação de congestionamento para destravar o fluxo viário."
    ],
    corretaIdx: 1,
    explicacao: "O art. 41 do CTB estabelece que o condutor de veículo só poderá fazer uso de buzina, desde que em toque breve, para fazer advertências a fim de evitar acidentes e, fora das áreas urbanas, quando conveniente para advertir um condutor que se tem o propósito de ultrapassá-lo."
  },
  {
    slug: "b12-trans02-013",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo FGV",
    orgao: "Polícia Civil",
    cargo: "Delegado de Polícia Civil",
    dif: "medio",
    enunciado: "Ao socorrer prontamente a vítima de acidente de trânsito com lesão corporal, o condutor causador do sinistro:",
    opcoes: [
      "Terá sua CNH cassada compulsoriamente no local do acidente pela autoridade policial.",
      "Não terá imposta a prisão em flagrante nem se lhe exigirá fiança, nos termos do art. 301 do CTB.",
      "Responderá pelo crime de homicídio tentado caso a vítima venha a falecer dias depois no hospital.",
      "Ficará isento de qualquer obrigação civil de indenização dos prejuízos materiais causados.",
      "Deverá ser conduzido coercitivamente em cela fechada para lavratura de termo circunstanciado."
    ],
    corretaIdx: 1,
    explicacao: "O art. 301 do CTB estipula expressamente: 'Ao condutor de veículo, nos casos de acidentes de trânsito de que resulte vítima, não se imporá a prisão em flagrante, nem se exigirá fiança, se prestar pronto e integral socorro àquela'."
  },
  {
    slug: "b12-trans02-014",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Vunesp",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "dificil",
    enunciado: "Sobre a condução de escolares, o Código de Trânsito Brasileiro exige que o condutor autorizado comprove:",
    opcoes: [
      "Idade superior a dezoito anos e habilitação na Categoria B há pelo menos seis meses.",
      "Idade superior a vinte e um anos, habilitação na Categoria D e aprovação em curso especializado.",
      "Habilitação na Categoria C e ausência de infrações leves nos últimos trinta dias.",
      "Idade mínima de vinte e cinco anos e aprovação prévia em concurso público de provas.",
      "Apenas certidão negativa de débitos de IPVA do veículo utilizado no transporte."
    ],
    corretaIdx: 1,
    explicacao: "Conforme o art. 138 do CTB, o condutor de veículo destinado à condução de escolares deve ter idade superior a 21 anos, ser habilitado na Categoria D e ter aprovação em curso especializado regulamentado pelo CONTRAN."
  },
  {
    slug: "b12-trans02-015",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo FCC",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "facil",
    enunciado: "A infração de trânsito consistente em transitar em velocidade superior à máxima permitida para a via em mais de 50% (cinquenta por cento) é classificada como:",
    opcoes: [
      "Leve, com aplicação de multa simples.",
      "Média, com penalidade de retenção do veículo.",
      "Grave, com pontuação de 5 pontos no prontuário.",
      "Gravíssima, punida com multa multiplicada por três e suspensão imediata do direito de dirigir.",
      "Mera irregularidade cadastral sanável em posto fiscal."
    ],
    corretaIdx: 3,
    explicacao: "O art. 218, III do CTB tipifica como infração gravíssima transitar em velocidade superior à máxima em mais de 50%, cominando multa (três vezes) e suspensão do direito de dirigir."
  },
  {
    slug: "b12-trans02-016",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo Instituto AOCP",
    orgao: "Polícia Civil",
    cargo: "Investigador de Polícia Civil",
    dif: "dificil",
    enunciado: "No tocante à fixação da pena de suspensão da habilitação nos crimes de trânsito, a imposição judicial dessa penalidade:",
    opcoes: [
      "Impede que a autoridade administrativa aplique as sanções cíveis de perda de pontos.",
      "Pode ser aplicada como penalidade principal isolada ou cumulada com outras penas privativas de liberdade.",
      "É restrita exclusivamente aos crimes dolosos contra a vida com dolo direto comprovado.",
      "Depende de autorização expressa do Conselho Nacional de Trânsito (CONTRAN).",
      "Não pode ultrapassar o prazo máximo improrrogável de trinta dias consecutivos."
    ],
    corretaIdx: 1,
    explicacao: "O art. 292 do CTB prevê que 'a suspensão ou a proibição de se obter a permissão ou a habilitação para dirigir veículo automotor pode ser imposta como penalidade principal ou cumulativamente com outras penalidades'."
  },
  {
    slug: "b12-trans02-017",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo FGV",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "O condutor de veículo destinado ao transporte de carga perigosa e produtos controlados que transita em rodovia federal deve portar obrigatoriamente:",
    opcoes: [
      "Apenas nota fiscal de compra e venda sem descrição dos materiais químicos.",
      "Documento fiscal com identificação do produto, Ficha de Emergência e Envelope para Transporte.",
      "Declaração verbal perante o posto de pedágio mais próximo.",
      "Certificado de isenção expedido pela prefeitura de origem.",
      "Laudo de vistoria mecânica emitido por oficina não homologada."
    ],
    corretaIdx: 1,
    explicacao: "A legislação de produtos perigosos (Resolução ANTT e CONTRAN) exige o porte de documento fiscal com especificações do produto, Ficha de Emergência e Envelope para Transporte de Carga Perigosa."
  },
  {
    slug: "b12-trans02-018",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Vunesp",
    orgao: "Polícia Militar",
    cargo: "Soldado da Polícia Militar",
    dif: "facil",
    enunciado: "Ao estacionar veículo automotor em aclive ou declive acentuado desprovido de guia de calçada (meio-fio), o condutor deve manter as rodas do veículo:",
    opcoes: [
      "Perfeitamente alinhadas com o eixo central da pista.",
      "Voltadas para a pista de rolamento para facilitar o arranque.",
      "Voltadas para o bordo da via (acostamento/terreno adjacente) e engrenado em marcha.",
      "Com os pneus com calibragem reduzida pela metade.",
      "Desbloqueadas sem acionamento do freio de estacionamento."
    ],
    corretaIdx: 2,
    explicacao: "As normas de direção defensiva e o CTB preveem que em declives/aclives sem meio-fio as rodas devem ser viradas para o bordo da via, evitando que o veículo desça para a pista caso haja falha mecânica no freio."
  },
  {
    slug: "b12-trans02-019",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo FCC",
    orgao: "Polícia Civil",
    cargo: "Delegado de Polícia Civil",
    dif: "medio",
    enunciado: "O crime de deixar o condutor do veículo, na ocasião do sinistro, de prestar imediato socorro à vítima (art. 304 do CTB):",
    opcoes: [
      "Não se tipifica se o socorro puder ser prestado sem risco pessoal por terceiros presentes.",
      "Consuma-se ainda que o condutor não seja o causador originário do acidente de trânsito.",
      "Exige que a vítima venha a falecer em virtude da ausência de socorro.",
      "É delito de ação penal privada de queixa exclusiva da família da vítima.",
      "Admite perdão judicial automático se o condutor comparecer à delegacia após 72 horas."
    ],
    corretaIdx: 1,
    explicacao: "O art. 304 do CTB impõe o dever de socorro a qualquer condutor envolvido no sinistro viário, ainda que o acidente tenha sido causado por culpa exclusiva da vítima ou de terceiro, bastando que possa fazê-lo sem risco pessoal."
  },
  {
    slug: "b12-trans02-020",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Instituto AOCP",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "medio",
    enunciado: "Nas vias urbanas com três ou mais faixas de trânsito no mesmo sentido de circulação, as faixas situadas mais à esquerda são destinadas prioritariamente:",
    opcoes: [
      "Ao estacionamento temporário de veículos pesados e carretas.",
      "À circulação exclusiva de transporte coletivo municipal.",
      "À ultrapassagem e ao deslocamento dos veículos de maior velocidade.",
      "À circulação dos veículos mais lentos e de maior porte.",
      "Ao embarque e desembarque de táxis e veículos de aplicativo."
    ],
    corretaIdx: 2,
    explicacao: "O art. 29, IV do CTB determina que 'quando uma pista de rolamento comportar várias faixas de circulação no mesmo sentido, são as da direita destinadas ao deslocamento dos veículos mais lentos e de maior porte (...) e as da esquerda, destinadas à ultrapassagem e ao deslocamento dos veículos de maior velocidade'."
  },
  {
    slug: "b12-trans02-021",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo FGV",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "dificil",
    enunciado: "O art. 309 do CTB tipifica a conduta de dirigir veículo automotor em via pública sem a devida Permissão para Dirigir ou Habilitação ou se cassado o direito de dirigir. Para a caracterização desse crime, é indispensável:",
    opcoes: [
      "A ocorrência de colisão com dano material superior a dez salários mínimos.",
      "A geração comprovada de perigo de dano concreto à segurança viária coletiva.",
      "A embriaguez alcoólica concomitante apurada por laudo pericial.",
      "A presença de pelo menos três testemunhas presenciais no auto de prisão.",
      "O tráfego em rodovia interestadual com velocidade superior a 120 km/h."
    ],
    corretaIdx: 1,
    explicacao: "Conforme pacífica jurisprudência e Súmula 720 do STF, o art. 309 do CTB exige expressamente a 'geração de perigo de dano' concreto para a configuração típica do crime."
  },
  {
    slug: "b12-trans02-022",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Vunesp",
    orgao: "Polícia Militar",
    cargo: "Oficial da Polícia Militar",
    dif: "facil",
    enunciado: "De acordo com o CTB, antes de iniciar qualquer manobra que implique um deslocamento lateral do veículo, o condutor deverá obrigatoriamente:",
    opcoes: [
      "Acionar o sinal sonoro de buzina de forma contínua e estridente.",
      "Desligar os faróis e frear bruscamente para alertar os condutores de trás.",
      "Indicar seu propósito de forma clara e com a devida antecedência por meio da luz indicadora de direção (seta) ou gesto convencional de braço.",
      "Aguardar a passagem de todos os veículos situados a quinhentos metros de distância.",
      "Descer do veículo para verificar pessoalmente as condições da faixa adjacente."
    ],
    corretaIdx: 2,
    explicacao: "O art. 35 do CTB dispõe que antes de iniciar qualquer manobra que implique um deslocamento lateral, o condutor deve indicar seu propósito de forma clara e com a devida antecedência, por meio da luz indicadora de direção ou de gesto de braço."
  },
  {
    slug: "b12-trans02-023",
    assuntoId: TAXONOMIA.transito.assuntos.crimes_infracoes,
    banca: "Inédita / Estilo FCC",
    orgao: "Polícia Civil",
    cargo: "Escrivão de Polícia Civil",
    dif: "medio",
    enunciado: "A cassação do documento de habilitação é penalidade administrativa aplicada compulsoriamente pela autoridade de trânsito quando:",
    opcoes: [
      "O condutor atingir vinte pontos no prontuário por cometer infrações leves.",
      "O condutor for flagrado conduzindo qualquer veículo com o direito de dirigir suspenso.",
      "Ocorrer atraso no pagamento da taxa de licenciamento veicular por dois anos consecutivos.",
      "O condutor recusar-se a participar de cursos de reciclagem voluntários.",
      "Houver venda do automóvel sem comunicação em até trinta dias ao DETRAN."
    ],
    corretaIdx: 1,
    explicacao: "O art. 263, I do CTB determina expressamente que a cassação da CNH dar-se-á 'quando, suspenso o direito de dirigir, o infrator conduzir qualquer veículo'."
  },
  {
    slug: "b12-trans02-024",
    assuntoId: TAXONOMIA.transito.assuntos.normas_circulacao,
    banca: "Inédita / Estilo Instituto AOCP",
    orgao: "Polícia Rodoviária Federal",
    cargo: "Policial Rodoviário Federal",
    dif: "dificil",
    enunciado: "A respeito das regras para o uso de luzes em veículos automotores previstas no CTB, assinale a opção correta:",
    opcoes: [
      "O uso do pisca-alerta é permitido durante o trânsito normal em velocidade regulamentada na pista de rolamento.",
      "A troca de luz baixa e alta, de forma intermitente e por curto período, pode ser utilizada para advertir outro condutor sobre a existência de risco à segurança na via.",
      "Os veículos de transporte coletivo de passageiros são dispensados do uso de faróis acesos durante o dia em faixas próprias.",
      "O uso do farol alto é obrigatório nas vias públicas dotadas de iluminação pública contínua.",
      "As luzes de posição (lanternas) devem ser mantidas apagadas durante operações de embarque e desembarque noturno."
    ],
    corretaIdx: 1,
    explicacao: "O art. 40, III do CTB prevê que a troca de luz baixa e alta intermitente (lampejo) só poderá ser utilizada para indicar intenção de ultrapassar ou advertir quanto à existência de risco à segurança aos veículos em sentido contrário."
  }
];

function buildModule(rawList, isCE) {
  return rawList.map((item) => {
    if (isCE) {
      return {
        idSlug: item.slug,
        disciplina_id: TAXONOMIA.transito.id,
        assunto_id: item.assuntoId,
        banca_nome: item.banca,
        orgao_nome: item.orgao,
        cargo_nome: item.cargo,
        ano: 2026,
        tipo: "certo_errado",
        dificuldade: item.dif,
        enunciado: item.enunciado,
        explicacao: item.explicacao,
        alternativas: [
          { texto: "Certo", correta: item.correta, explicacao_especifica: null },
          { texto: "Errado", correta: !item.correta, explicacao_especifica: null }
        ]
      };
    } else {
      const letras = ["A", "B", "C", "D", "E"];
      const alternativas = item.opcoes.map((txt, idx) => ({
        letra: letras[idx],
        texto: txt,
        correta: idx === item.corretaIdx,
        explicacao_especifica: null
      }));
      return {
        idSlug: item.slug,
        disciplina_id: TAXONOMIA.transito.id,
        assunto_id: item.assuntoId,
        banca_nome: item.banca,
        orgao_nome: item.orgao,
        cargo_nome: item.cargo,
        ano: 2026,
        tipo: "multipla_escolha",
        dificuldade: item.dif,
        enunciado: item.enunciado,
        explicacao: `GABARITO: ${letras[item.corretaIdx]}. ${item.explicacao}`,
        alternativas
      };
    }
  });
}

export function run() {
  const q01 = buildModule(transito01Raw, true);
  const q02 = buildModule(transito02Raw, false);
  writeModule("transito_01.mjs", "transito01Questoes", q01);
  writeModule("transito_02.mjs", "transito02Questoes", q02);
}

run();
