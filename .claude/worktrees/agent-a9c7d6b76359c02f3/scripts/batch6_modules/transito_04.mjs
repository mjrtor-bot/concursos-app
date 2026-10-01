import { TAXONOMIA } from "./taxonomia.mjs";

export const transito04Questoes = [
  // Q76 - CEBRASPE / PRF - Competência da PRF no SNT (Art. 20 do CTB)
  {
    idSlug: "trans-076",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Compete à Polícia Rodoviária Federal, no âmbito das rodovias e estradas federais, realizar o patrulhamento ostensivo, executar a fiscalização de trânsito, lavrar auto de infração, aplicar as penalidades de advertência por escrito e de multa, arrecadar as multas aplicadas e as medidas administrativas cabíveis.",
    explicacao: "GABARITO: CERTO. Art. 20, incisos I, II e III, do CTB: compete à PRF no âmbito das rodovias e estradas federais o patrulhamento ostensivo, fiscalização de trânsito, lavratura de auto de infração, aplicação e arrecadação de multas e medidas administrativas.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q77 - CEBRASPE / PRF - Competência da Polícia Militar no CTB (Art. 23)
  {
    idSlug: "trans-077",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Polícia Militar dos Estados e do Distrito Federal integra o Sistema Nacional de Trânsito e pode executar a fiscalização de trânsito, quando e conforme convênio firmado com os órgãos executivos de trânsito ou executivos rodoviários, concomitantemente com as demais atividades de polícia ostensiva.",
    explicacao: "GABARITO: CERTO. Art. 23, III, do CTB: compete às Polícias Militares dos Estados e do DF executar a fiscalização de trânsito, quando e conforme convênio firmado, como agente do órgão ou entidade executivos de trânsito ou executivos rodoviários, concomitantemente com os demais órgãos.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q78 - FGV / PM - Competências Municipais de Trânsito (Art. 24 e Lei 14.599/2023)
  {
    idSlug: "trans-078",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Lei nº 14.599/2023 trouxe importantes alterações quanto às competências de fiscalização de trânsito dos órgãos executivos municipais e estaduais no art. 24 do CTB. A respeito da competência privativa e concorrente no trânsito, assinale a afirmativa correta:",
    explicacao: "GABARITO: B. Com a Lei nº 14.599/2023, a quase totalidade das infrações de trânsito passou a ter competência concorrente de fiscalização entre os órgãos executivos estaduais (DETRANs) e municipais de trânsito, ampliando o poder de fiscalização municipal para além das antigas matérias estritas de parada, circulação e estacionamento.",
    alternativas: [
      { letra: "A", texto: "Os municípios perderam totalmente a competência para autuar infrações em vias urbanas.", correta: false },
      { letra: "B", texto: "Foi ampliada a competência concorrente de fiscalização e autuação entre órgãos municipais e órgãos estaduais de trânsito.", correta: true },
      { letra: "C", texto: "Apenas a Polícia Rodoviária Federal pode fiscalizar vias municipais conveniadas.", correta: false },
      { letra: "D", texto: "Os municípios tornaram-se os únicos responsáveis pela aplicação de suspensão do direito de dirigir.", correta: false },
      { letra: "E", texto: "As multas aplicadas por guardas municipais foram consideradas inconstitucionais pelo STF.", correta: false }
    ]
  },
  // Q79 - CEBRASPE / PRF - Composição e Função do CONTRAN (Art. 12 do CTB)
  {
    idSlug: "trans-079",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O Conselho Nacional de Trânsito (CONTRAN), com sede no Distrito Federal, é o órgão coordenador do Sistema Nacional de Trânsito e o órgão normativo e consultivo máximo da União na matéria de trânsito.",
    explicacao: "GABARITO: CERTO. Art. 12 do CTB: o CONTRAN é o órgão coordenador do Sistema Nacional de Trânsito e órgão normativo e consultivo de competência em todo o território nacional.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q80 - VUNESP / PM - Validade do Exame de Aptidão Física e Mental (Lei 14.071/2020)
  {
    idSlug: "trans-080",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "De acordo com o art. 147, § 2º, do CTB (redação dada pela Lei nº 14.071/2020), o exame de aptidão física e mental para renovação da CNH de condutores com idade inferior a 50 anos deve ser renovado a cada:",
    explicacao: "GABARITO: D. Art. 147, § 2º, do CTB: o exame de aptidão física e mental será renovável a cada 10 (dez) anos, para condutores com idade inferior a 50 anos; a cada 5 (cinco) anos, para condutores com idade igual ou superior a 50 anos e inferior a 70 anos; e a cada 3 (três) anos, para condutores com idade igual ou superior a 70 anos.",
    alternativas: [
      { letra: "A", texto: "2 anos.", correta: false },
      { letra: "B", texto: "3 anos.", correta: false },
      { letra: "C", texto: "5 anos.", correta: false },
      { letra: "D", texto: "10 anos.", correta: true },
      { letra: "E", texto: "15 anos.", correta: false }
    ]
  },
  // Q81 - CEBRASPE / PRF - Requisitos para Habilitação na Categoria D
  {
    idSlug: "trans-081",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Para habilitar-se na categoria D (transporte de passageiros com capacidade superior a 8 lugares), o candidato deve ser maior de 21 anos, estar habilitado no mínimo há 2 anos na categoria B ou há 1 ano na categoria C, e não ter cometido mais de uma infração gravíssima nos últimos 12 meses.",
    explicacao: "GABARITO: CERTO. Art. 145 do CTB (com alterações da Lei nº 14.071/2020 e 14.440/2022): requisitos para categoria D: ser maior de 21 anos; estar habilitado no mínimo há 2 anos na cat. B ou 1 ano na cat. C; não ter cometido mais de uma infração gravíssima nos últimos 12 meses; e ser aprovado em curso especializado de transporte coletivo de passageiros.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q82 - IBFC / GM - Competência da JARI no SNT
  {
    idSlug: "trans-082",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "No âmbito do Sistema Nacional de Trânsito, as Juntas Administrativas de Recursos de Infrações (JARI) funcionam como:",
    explicacao: "GABARITO: C. Art. 16 e 17 do CTB: as JARI são órgãos colegiados, responsáveis pelo julgamento dos recursos interpostos contra penalidades por eles aplicadas em primeira instância administrativa.",
    alternativas: [
      { letra: "A", texto: "órgãos normativos e consultivos de âmbito federal.", correta: false },
      { letra: "B", texto: "órgãos de execução penal militar de trânsito.", correta: false },
      { letra: "C", texto: "órgãos colegiados encarregados do julgamento dos recursos interpostos contra penalidades de trânsito.", correta: true },
      { letra: "D", texto: "comissões judiciais de execução fiscal de multas.", correta: false },
      { letra: "E", texto: "entidades sindicais representativas de motoristas profissionais.", correta: false }
    ]
  },
  // Q83 - CEBRASPE / PRF - Permissão para Dirigir (PPD) e Concessão da CNH Definitiva
  {
    idSlug: "trans-083",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Carteira Nacional de Habilitação definitiva será conferida ao condutor no término de um ano de Permissão para Dirigir (PPD), desde que o mesmo não tenha cometido nenhuma infração de natureza grave ou gravíssima, nem seja reincidente em infração média.",
    explicacao: "GABARITO: CERTO. Art. 148, § 3º, do CTB: 'A Carteira Nacional de Habilitação será conferida ao condutor, no término de um ano, desde que o mesmo não tenha cometido nenhuma infração de natureza grave ou gravíssima ou seja reincidente em infração média'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q84 - FGV / PM - Registro e Licenciamento de Veículos (CRV e CRLV)
  {
    idSlug: "trans-084",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No tocante ao registro e licenciamento de veículos regulamentados nos arts. 120 a 135 do CTB, assinale a opção correta:",
    explicacao: "GABARITO: A. Art. 133 do CTB: o Certificado de Licenciamento Anual (CRLV) é documento de porte obrigatório, em meio físico ou digital (CRLV-e), cuja emissão depende da quitação integral de tributos, encargos e multas de trânsito e ambientais vinculadas ao veículo.",
    alternativas: [
      { letra: "A", texto: "O CRLV é de porte obrigatório pelo condutor (em meio físico ou digital) e sua emissão exige quitação prévia de multas de trânsito e tributos.", correta: true },
      { letra: "B", texto: "O CRV (Certificado de Registro de Veículo) é documento de porte obrigatório para circulação diária.", correta: false },
      { letra: "C", texto: "A alteração de característica do veículo dispensa autorização prévia da autoridade de trânsito.", correta: false },
      { letra: "D", texto: "Veículos de tração animal devem ser registrados obrigatoriamente no DENATRAN federal.", correta: false },
      { letra: "E", texto: "O comprador de veículo usado tem prazo de 180 dias para transferir a propriedade no DETRAN.", correta: false }
    ]
  },
  // Q85 - CEBRASPE / PRF - Apreensão de Veículo (Revogação da Penalidade)
  {
    idSlug: "trans-085",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A penalidade de apreensão do veículo foi expressamente revogada do rol do art. 256 do CTB pela Lei nº 13.281/2016, permanecendo em vigor no Código de Trânsito apenas as medidas administrativas de retenção e remoção do veículo.",
    explicacao: "GABARITO: CERTO. A Lei nº 13.281/2016 revogou o inciso IV do art. 256 e o art. 262 do CTB, extinguindo a penalidade de apreensão de veículo. Atualmente, os veículos retidos ou removidos são objeto de medidas administrativas com regras próprias de custódia e leilão.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q86 - VUNESP / PM - Autorização para Conduzir Ciclomotores (ACC)
  {
    idSlug: "trans-086",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Para conduzir ciclomotores (veículos de 2 ou 3 rodas com motor até 50 cm³ e velocidade máxima de 50 km/h), o condutor deve possuir:",
    explicacao: "GABARITO: B. Para conduzir ciclomotores em vias públicas, exige-se a Autorização para Conduzir Ciclomotores (ACC) ou a CNH na Categoria A (art. 141 do CTB e Resoluções do CONTRAN).",
    alternativas: [
      { letra: "A", texto: "apenas documento de identidade com foto e comprovante de residência.", correta: false },
      { letra: "B", texto: "Autorização para Conduzir Ciclomotor (ACC) ou Carteira Nacional de Habilitação na categoria A.", correta: true },
      { letra: "C", texto: "CNH na categoria B ou C exclusivamente.", correta: false },
      { letra: "D", texto: "título de eleitor e certidão de quitação militar.", correta: false },
      { letra: "E", texto: "nenhuma habilitação, bastando o uso de capacete e óculos.", correta: false }
    ]
  },
  // Q87 - CEBRASPE / PRF - Curso Preventivo de Reciclagem (EAR)
  {
    idSlug: "trans-087",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O condutor que exerce atividade remunerada ao veículo (EAR), habilitado em qualquer categoria, terá direito de participar de curso preventivo de reciclagem sempre que, no período de 12 meses, atingir entre 30 e 39 pontos na sua CNH.",
    explicacao: "GABARITO: CERTO. Art. 261, § 5º, do CTB (com alterações da Lei nº 14.071/2020): o condutor que exerce atividade remunerada ao veículo, de qualquer categoria, poderá optar por participar de curso preventivo de reciclagem sempre que, no período de 12 meses, atingir 30 pontos e até 39 pontos.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q88 - IBFC / GM - Fiscalização de Ruído e Descarga Livre por Guardas Municipais
  {
    idSlug: "trans-088",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Conduzir veículo com descarga livre ou silenciador de motor de explosão defeituoso, deficiente ou inoperante (art. 230, VII, do CTB) acarreta:",
    explicacao: "GABARITO: C. Art. 230, VII, do CTB tipifica como infração grave (5 pontos), sujeita à penalidade de multa e à medida administrativa de retenção do veículo para regularização.",
    alternativas: [
      { letra: "A", texto: "infração leve com advertência verbal imediata.", correta: false },
      { letra: "B", texto: "infração média sem medida administrativa aplicável.", correta: false },
      { letra: "C", texto: "infração grave, penalidade de multa e retenção do veículo para regularização.", correta: true },
      { letra: "D", texto: "infração gravíssima com cassação imediata do CRLV.", correta: false },
      { letra: "E", texto: "crime ambiental com prisão preventiva obrigatória.", correta: false }
    ]
  },
  // Q89 - CEBRASPE / PRF - Registro Nacional de Condutores Habilitados (RENACH)
  {
    idSlug: "trans-089",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O Registro Nacional de Condutores Habilitados (RENACH) é um banco de dados informatizado que tem por finalidade registrar todas as informações relativas aos condutores e candidatos à habilitação em todo o território nacional.",
    explicacao: "GABARITO: CERTO. Art. 19, VII, do CTB atribui ao órgão executivo de trânsito da União a competência para organizar e manter o RENACH, contendo dados de identificação, prontuário, exames, infrações e penalidades de todos os condutores do Brasil.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q90 - FGV / PM - Uso de Películas nos Vidros (Insulfilm) e Resolução CONTRAN
  {
    idSlug: "trans-090",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "De acordo com as normas de trânsito vigentes (Resolução CONTRAN nº 960/2022 e CTB), a transmitância luminosa mínima permitida para as áreas envidraçadas indispensáveis à dirigibilidade (para-brisa e vidros laterais dianteiros) é de:",
    explicacao: "GABARITO: B. A Resolução CONTRAN nº 960/2022 fixou em 70% (setenta por cento) a transmitância luminosa mínima para o para-brisa e os vidros laterais dianteiros (áreas envidraçadas indispensáveis à dirigibilidade), sendo proibidas películas refletivas (espelhadas) e com bolhas.",
    alternativas: [
      { letra: "A", texto: "50%.", correta: false },
      { letra: "B", texto: "70%.", correta: true },
      { letra: "C", texto: "85%.", correta: false },
      { letra: "D", texto: "28%.", correta: false },
      { letra: "E", texto: "100% (totalmente transparente).", correta: false }
    ]
  },
  // Q91 - CEBRASPE / PRF - Registro Nacional de Infrações de Trânsito (RENAINF)
  {
    idSlug: "trans-091",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O RENAINF (Registro Nacional de Infrações de Trânsito) permite a notificação e cobrança de multas cometidas em unidade da Federação diferente daquela em que o veículo estiver licenciado.",
    explicacao: "GABARITO: CERTO. O RENAINF é o sistema gerido pelo órgão executivo da União (SENATRAN) que possibilita o registro, pontuação e cobrança de infrações interestaduais, assegurando a integração dos órgãos de trânsito em âmbito nacional.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q92 - VUNESP / PM - Categorias de Habilitação e Categoria E
  {
    idSlug: "trans-092",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A categoria E da CNH habilita o condutor para a condução de combinação de veículos em que a unidade tratora se enquadre nas categorias B, C ou D e cuja unidade acoplada, reboque, semirreboque ou trailer possua:",
    explicacao: "GABARITO: A. Art. 143, V, do CTB: Categoria E - combinação de veículos em que a unidade tratora se enquadre nas categorias B, C ou D e cuja unidade acoplada, reboque, semirreboque, trailer ou articulada tenha 6.000 kg (seis mil quilogramas) ou mais de peso bruto total, ou cuja lotação exceda a 8 (oito) lugares.",
    alternativas: [
      { letra: "A", texto: "6.000 kg ou mais de peso bruto total (PBT), ou cuja lotação exceda a 8 lugares.", correta: true },
      { letra: "B", texto: "3.500 kg de PBT e no máximo 5 passageiros.", correta: false },
      { letra: "C", texto: "capacidade exclusiva de carga indivisível até 10 toneladas.", correta: false },
      { letra: "D", texto: "menos de 1.000 kg de capacidade líquida.", correta: false },
      { letra: "E", texto: "tração animal acoplada a veículo automotor.", correta: false }
    ]
  },
  // Q93 - CEBRASPE / PRF - Fiscalização de Peso e Dimensões de Veículos
  {
    idSlug: "trans-093",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O excesso de peso aferido por equipamento de pesagem (balança rodoviária) em veículo de carga é infração média com acréscimo de valor pecuniário à multa proporcional a cada fração de peso excedente, sujeitando o veículo à retenção para transbordo da carga excedente.",
    explicacao: "GABARITO: CERTO. Art. 231, V, do CTB: transitar com o veículo com excesso de peso é infração média, acrescida de valores progressivos a cada 200 kg ou fração de excesso, com retenção do veículo e transbordo da carga que exceder ao limite regulamentar.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q94 - IBFC / GM - Estacionamento em Guia Rebaixada para Entrada e Saída de Veículos
  {
    idSlug: "trans-094",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Estacionar o veículo onde houver guia de calçada (meio-fio) rebaixada destinada à entrada ou à saída de veículos (art. 181, IX, do CTB) sujeita o condutor a:",
    explicacao: "GABARITO: D. Art. 181, IX, do CTB: estacionar onde houver guia rebaixada para entrada/saída de veículos é infração média (4 pontos), com penalidade de multa e medida administrativa de remoção do veículo.",
    alternativas: [
      { letra: "A", texto: "infração leve sem remoção.", correta: false },
      { letra: "B", texto: "infração gravíssima e suspensão da CNH.", correta: false },
      { letra: "C", texto: "infração grave com retenção da chave do veículo.", correta: false },
      { letra: "D", texto: "infração média, com penalidade de multa e medida administrativa de remoção do veículo.", correta: true },
      { letra: "E", texto: "advertência por escrito do síndico do imóvel.", correta: false }
    ]
  },
  // Q95 - CEBRASPE / PRF - Autorização Especial de Trânsito (AET)
  {
    idSlug: "trans-095",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Veículos ou combinações de veículos que transportem cargas indivisíveis e que não se enquadrem nos limites regulamentares de peso e dimensões poderão circular nas rodovias mediante Autorização Especial de Trânsito (AET) expedida pelo órgão executivo rodoviário competente com prazo certo e itinerário fixado.",
    explicacao: "GABARITO: CERTO. Art. 101 do CTB: aos veículos e combinações de veículos utilizados no transporte de carga indivisível, que não se enquadrem nos limites de peso e dimensões fixados pelo CONTRAN, poderá ser concedida, pela autoridade com circunscrição sobre a via, autorização especial de trânsito (AET), com prazo certo e itinerário fixado.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q96 - FGV / PM - Transferência de Propriedade de Veículo e Notificação de Venda
  {
    idSlug: "trans-096",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 134 do CTB (com alterações da Lei nº 14.071/2020), no caso de transferência de propriedade, o antigo proprietário que não encaminhar ao DETRAN a cópia autenticada do comprovante de transferência no prazo de 60 (sessenta) dias:",
    explicacao: "GABARITO: B. Art. 134 do CTB: o antigo proprietário deverá encaminhar cópia do comprovante de transferência no prazo de 60 dias (anteriormente eram 30 dias). Caso não o faça, responderá solidariamente pelas penalidades impostas e suas reincidências até a data da comunicação.",
    alternativas: [
      { letra: "A", texto: "terá sua CNH cassada sumariamente.", correta: false },
      { letra: "B", texto: "responsabilizar-se-á solidariamente pelas penalidades impostas e suas reincidências até a data da efetiva comunicação.", correta: true },
      { letra: "C", texto: "cometerá crime de apropriação indébita automobilística.", correta: false },
      { letra: "D", texto: "ficará proibido de adquirir novos veículos pelo prazo de 5 anos.", correta: false },
      { letra: "E", texto: "perderá o direito à restituição do IPVA pago.", correta: false }
    ]
  },
  // Q97 - CEBRASPE / PRF - Obrigatoriedade do Uso de Cadeirinha e Isenções
  {
    idSlug: "trans-097",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Segundo a regulamentação do CONTRAN, a exigência do uso de dispositivo de retenção para crianças (bebê-conforto, cadeirinha ou assento de elevação) não se aplica aos veículos de transporte coletivo de passageiros, de aluguel (táxis e transporte por aplicativo), nem aos veículos escolares.",
    explicacao: "GABARITO: ERRADO. Embora a exigência não se aplique aos veículos de aluguel (táxis/aplicativos) e de transporte coletivo de passageiros, ela se APLICA SIM aos veículos de transporte escolar (que devem possuir dispositivos de retenção para crianças).",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  // Q98 - VUNESP / PM - Triângulo de Sinalização e Uso em Emergência
  {
    idSlug: "trans-098",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Em caso de imobilização de emergência no leito viário ou acostamento, a Resolução CONTRAN nº 36/1998 e o art. 46 do CTB determinam que o dispositivo de advertência retrorrefletivo (triângulo) deve ser instalado a uma distância mínima do veículo de:",
    explicacao: "GABARITO: C. A Resolução CONTRAN nº 36/1998 estabelece que o triângulo de segurança deve ser colocado a uma distância mínima de 30 metros da parte traseira do veículo imobilizado, perpendicularmente ao eixo da via.",
    alternativas: [
      { letra: "A", texto: "5 metros.", correta: false },
      { letra: "B", texto: "15 metros.", correta: false },
      { letra: "C", texto: "30 metros.", correta: true },
      { letra: "D", texto: "50 metros.", correta: false },
      { letra: "E", texto: "100 metros.", correta: false }
    ]
  },
  // Q99 - CEBRASPE / PRF - Registro de Sinistros de Trânsito pela PRF
  {
    idSlug: "trans-099",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_normas_circulacao,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Declaração Eletrônica de Acidente de Trânsito (e-DAT) lavrada no portal da PRF em sinistros sem vítimas possui presunção relativa de veracidade (juris tantum) quanto às declarações prestadas pelos envolvidos.",
    explicacao: "GABARITO: CERTO. Documentos públicos de registro policial de trânsito gozam de presunção relativa de veracidade (juris tantum), admitindo prova em contrário em eventual litígio civil ou administrativo.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q100 - FGV / PM - Efeito da Falta de Uso de Capacete em Motocicleta
  {
    idSlug: "trans-100",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Conduzir motocicleta, motoneta ou ciclomotor sem usar capacete de segurança com viseira ou óculos de proteção (art. 244, I, do CTB) configura:",
    explicacao: "GABARITO: B. Art. 244, I, do CTB: conduzir motocicleta sem usar capacete de segurança ou vestuário de acordo com as normas do CONTRAN é infração gravíssima, com penalidade de multa e suspensão do direito de dirigir, e medida administrativa de retenção do veículo até a regularização e recolhimento da CNH.",
    alternativas: [
      { letra: "A", texto: "infração grave com retenção do veículo.", correta: false },
      { letra: "B", texto: "infração gravíssima, sujeita a multa, suspensão do direito de dirigir e recolhimento do documento de habilitação.", correta: true },
      { letra: "C", texto: "infração média sem suspensão da habilitação.", correta: false },
      { letra: "D", texto: "contravenção penal militar de desobediência.", correta: false },
      { letra: "E", texto: "infração punível apenas com advertência se for a primeira vez.", correta: false }
    ]
  }
];
