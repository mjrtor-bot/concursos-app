import fs from "fs";
import path from "path";
import { TAXONOMIA } from "../batch11_modules/taxonomia.mjs";

const discTransito = TAXONOMIA.disciplinas.transito;
const assNormas = TAXONOMIA.assuntos.ctb_normas_circulacao;
const assCrimes = TAXONOMIA.assuntos.ctb_crimes_infracoes;

// 30 questões exclusivas para transito_01.mjs (Normas de Circulação, Conduta, Habilitação e Penalidades)
const transito01Questoes = [
  {
    idSlug: "b11-trans-01-001",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com as normas gerais de circulação do CTB, os veículos prestadores de serviços de utilidade pública, quando em atendimento na via, gozam de livre parada e estacionamento no local da prestação de serviço, desde que devidamente sinalizados e identificados por dispositivo regulamentar de iluminação intermitente ambar-amarela.",
    explicacao: "GABARITO: CERTO. Art. 29, VIII, do CTB: Os veículos prestadores de serviços de utilidade pública, quando em atendimento na via, gozam de livre parada e estacionamento no local da prestação de serviço, desde que devidamente sinalizados, devendo estar identificados na forma estabelecida pelo CONTRAN.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-002",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em rodovias federais de pista dupla não sinalizadas com placas R-19, a velocidade regulamentar máxima para caminhonetes e camionetas é de 110 km/h, enquanto para caminhões e ônibus é de 90 km/h.",
    explicacao: "GABARITO: CERTO. Art. 61, § 1º, I, 'a', do CTB: Onde não existir sinalização regulamentadora, a velocidade máxima em rodovias de pista dupla é de 110 km/h para automóveis, camionetas, caminhonetes e motocicletas, e de 90 km/h para os demais veículos (caminhões, ônibus, etc.).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-003",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nas interseções não sinalizadas em nível, quando veículos que transitam por fluxos que se cruzem se aproximarem do local, a preferência de passagem será exclusivamente do veículo que desenvolver maior velocidade operacional média.",
    explicacao: "GABARITO: ERRADO. Art. 29, III, do CTB: Quando veículos transitam por fluxos que se cruzem em local não sinalizado, terá preferência de passagem: a) no caso de apenas um fluxo ser proveniente de rodovia, aquele que estiver circulando por ela; b) no caso de rotatória, aquele que estiver circulando por ela; c) nos demais casos, o que vier pela direita do condutor.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  {
    idSlug: "b11-trans-01-004",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O condutor que queira executar manobra de conversão à esquerda em via urbana de sentido duplo de circulação deve aproximar o seu veículo o máximo possível do bordo esquerdo da pista antes de iniciar o movimento de giro.",
    explicacao: "GABARITO: ERRADO. Art. 38, II, do CTB: Ao sair da via pelo lado esquerdo em pista de sentido duplo, o condutor deve aproximar-se o máximo possível da linha divisória da pista (eixo central), e não do bordo esquerdo, para não invadir a contramão de direção.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  {
    idSlug: "b11-trans-01-005",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Conforme o art. 40 do CTB com as alterações recentes, o uso de farol baixo aceso durante o dia é obrigatório em rodovias de pista simples situadas fora dos perímetros urbanos para veículos que não disponham de luzes de rodagem diurna (DRL).",
    explicacao: "GABARITO: CERTO. Art. 40, § 2º, do CTB (redação dada pela Lei 14.071/2020): Os veículos que não dispuserem de DRL deverão manter acesos os faróis baixos durante o dia nas rodovias de pista simples situadas fora dos perímetros urbanos.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-006",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nas vias urbanas com várias faixas de trânsito no mesmo sentido, as da direita são destinadas aos veículos mais lentos e de maior porte quando não houver faixa especial a eles destinada, e as da esquerda, destinadas à ultrapassagem e ao deslocamento dos veículos de maior velocidade.",
    explicacao: "GABARITO: CERTO. Art. 29, IV, do CTB: Quando uma pista comportar várias faixas de circulação no mesmo sentido, as da direita são destinadas aos veículos mais lentos e aos de maior porte, e as da esquerda, à ultrapassagem e aos mais velozes.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-007",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A pontuação acumulada para suspensão do direito de dirigir varia conforme o número de infrações gravíssimas cometidas no período de 12 meses: o limite é de 40 pontos caso não conste nenhuma infração gravíssima, 30 pontos com uma gravíssima, e 20 pontos com duas ou mais gravíssimas.",
    explicacao: "GABARITO: CERTO. Art. 261, I, 'a', 'b', 'c', do CTB: A penalidade de suspensão do direito de dirigir por pontos será imposta com 20 pontos (se 2 ou mais infrações gravíssimas), 30 pontos (se 1 infração gravíssima) e 40 pontos (se nenhuma infração gravíssima). Para condutores que exercem atividade remunerada (EAR), o limite é sempre de 40 pontos.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-008",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Para a condução de veículos de transporte coletivo de passageiros e de escolares, a legislação de trânsito exige idade mínima de 18 anos completos e aprovação em curso especializado credenciado pelo órgão executivo de trânsito.",
    explicacao: "GABARITO: ERRADO. Art. 145, I, do CTB: Para habilitar-se nas categorias D e E ou para conduzir transporte coletivo de passageiros, de escolares, de emergência ou de produto perigoso, o candidato deve ser maior de 21 anos (e não 18 anos).",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  {
    idSlug: "b11-trans-01-009",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O exame toxicológico de larga janela de detecção é obrigatório para a habilitação e renovação nas categorias C, D e E, devendo ser repetido a cada 2 anos e 6 meses por condutores com idade inferior a 70 anos.",
    explicacao: "GABARITO: CERTO. Art. 148-A, § 2º, do CTB: Os condutores das categorias C, D e E com idade inferior a 70 anos serão submetidos a novo exame a cada período de 2 anos e 6 meses, a partir da obtenção ou renovação da CNH.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-010",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A retenção do veículo é uma medida administrativa que tem como finalidade primordial a guarda e custódia definitiva do bem em depósito público conveniado, cabendo ao proprietário a perda automática do veículo em caso de recusa no pagamento de débitos.",
    explicacao: "GABARITO: ERRADO. Art. 269 e 270 do CTB: A retenção é medida administrativa provisória destinada a sanar irregularidade no próprio local da abordagem; quando a irregularidade puder ser sanada imediatamente, o veículo é liberado tão logo seja regularizado.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  {
    idSlug: "b11-trans-01-011",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O prazo de validade do exame de aptidão física e mental para renovação da CNH é de 10 anos para condutores com menos de 50 anos de idade, 5 anos para aqueles com idade igual ou superior a 50 e inferior a 70 anos, e 3 anos para condutores com 70 anos de idade ou mais.",
    explicacao: "GABARITO: CERTO. Art. 147, § 2º, I, II e III, do CTB (com redação da Lei 14.071/2020): Validade do exame é de 10 anos (<50 anos), 5 anos (>=50 e <70) e 3 anos (>=70 anos).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-012",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O recolhimento do Certificado de Licenciamento Anual (CLA/CRLV-e) mediante recibo é medida administrativa que pode ser aplicada pela autoridade de trânsito ou seus agentes quando houver suspeita de inautenticidade ou adulteração do documento.",
    explicacao: "GABARITO: CERTO. Art. 272 do CTB: O recolhimento do documento de habilitação e do documento de licenciamento dar-se-á mediante recibo, entre outras hipóteses, quando houver suspeita de sua inautenticidade ou adulteração.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-013",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A advertência por escrito é penalidade de trânsito que deverá ser imposta à infração de natureza leve ou média, punível com multa, caso o infrator não tenha cometido nenhuma outra infração nos últimos doze meses.",
    explicacao: "GABARITO: CERTO. Art. 267 do CTB (redação da Lei 14.071/2020): Deverá ser imposta a penalidade de advertência por escrito à infração de natureza leve ou média, passível de ser punida com multa, não sendo reincidente o infrator na mesma infração nos últimos doze meses.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-014",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A realização de manobra de arrancada brusca com derrapagem ou frenagem com deslizamento de pneus em via pública tipifica infração de trânsito gravíssima com fator multiplicador de 10 vezes sobre o valor da multa, suspensão do direito de dirigir e remoção do veículo.",
    explicacao: "GABARITO: CERTO. Art. 175 do CTB: Utilizar-se de veículo para demonstrar ou exibir manobra perigosa, mediante arrancada brusca, derrapagem ou frenagem com deslizamento ou arrastamento de pneus: Infração - gravíssima; Penalidade - multa (dez vezes), suspensão do direito de dirigir e apreensão do veículo; Medida administrativa - recolhimento do documento de habilitação e remoção do veículo.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-015",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O condutor habilitado na categoria B tem autorização legal para conduzir veículos motorizados de duas ou três rodas, como motocicletas, motonetas e triciclos de qualquer cilindrada.",
    explicacao: "GABARITO: ERRADO. Art. 143, I e II, do CTB: Categoria A é para condutores de veículos motores de duas ou três rodas. Categoria B é para condutores de veículos motores não abrangidos pela categoria A, cujo peso bruto total não exceda a 3.500 kg e cuja lotação não exceda a 8 lugares excluído o motorista.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  // 15 questões de Múltipla Escolha para transito_01.mjs
  {
    idSlug: "b11-trans-01-016",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Durante blitz da Polícia Rodoviária Federal, um motorista é abordado conduzindo veículo de transporte de produtos perigosos sem portar o comprovante do curso de capacitação MOPP e com o extintor de carga vencido. De acordo com o Código de Trânsito Brasileiro e a jurisprudência administrativa do CONTRAN, assinale a opção correta:",
    explicacao: "GABARITO: C. O transporte de produtos perigosos sem atendimento às exigências específicas e documentais constitui infração gravíssima específica com retenção do veículo para regularização e transbordo da carga se necessário.",
    alternativas: [
      { texto: "A ausência do curso especializado constitui mera infração leve que não enseja medida administrativa.", correta: false },
      { texto: "A PRF deve apreender a carga e leiloá-la no prazo improrrogável de quarenta e oito horas sem notificação prévia.", correta: false },
      { texto: "O transporte irregular de produtos perigosos enseja a lavratura de auto de infração e a retenção do veículo até a apresentação de condutor habilitado e regularização dos equipamentos.", correta: true },
      { texto: "O veículo pode seguir viagem normalmente se o proprietário assinar termo de compromisso de ajuste sanitário.", correta: false },
      { texto: "A fiscalização dessa natureza é de competência privativa da Marinha do Brasil e do Exército Brasileiro.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-017",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre as penalidades e medidas administrativas aplicáveis aos condutores no âmbito do Código de Trânsito Brasileiro, assinale a alternativa que indica corretamente uma medida administrativa e não uma penalidade:",
    explicacao: "GABARITO: D. Art. 256 (Penalidades: advertência por escrito, multa, suspensão do direito de dirigir, cassação da CNH, cassação da PPD, frequência obrigatória em curso de reciclagem) vs Art. 269 (Medidas administrativas: retenção, remoção, recolhimento de CNH/CRLV, realização de teste de dosagem de alcoolemia, etc.). O recolhimento do documento de habilitação é medida administrativa.",
    alternativas: [
      { texto: "Suspensão do direito de dirigir por doze meses.", correta: false },
      { texto: "Cassação da Carteira Nacional de Habilitação.", correta: false },
      { texto: "Frequência obrigatória em curso de reciclagem.", correta: false },
      { texto: "Recolhimento do documento de habilitação (CNH física ou digital).", correta: true },
      { texto: "Advertência por escrito imposta pela autoridade de trânsito.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-018",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um policial rodoviário federal depara-se com um condutor que ultrapassou outro veículo pelo acostamento em rodovia federal. Conforme o art. 202 do CTB, essa conduta classifica-se como infração:",
    explicacao: "GABARITO: A. Art. 202, I, do CTB: Ultrapassar outro veículo pelo acostamento é infração gravíssima, com penalidade de multa multiplicada por 5.",
    alternativas: [
      { texto: "Gravíssima, com penalidade de multa (cinco vezes).", correta: true },
      { texto: "Grave, com retenção temporária do veículo até a chegada de guincho.", correta: false },
      { texto: "Média, punida apenas com advertência pedagógica no primeiro flagrante.", correta: false },
      { texto: "Leve, com acréscimo de três pontos no prontuário do condutor.", correta: false },
      { texto: "Atípica administrativamente, se o tráfego na faixa principal estiver paralisado.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-019",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Quanto aos conceitos e definições constantes do Anexo I do CTB, assinale a opção que define corretamente o termo 'CAMINHONETE':",
    explicacao: "GABARITO: B. Anexo I do CTB: CAMINHONETE - veículo destinado ao transporte de carga com peso bruto total de até 3.500 kg. CAMIONETA - veículo misto destinado ao transporte de passageiros e carga no mesmo compartimento.",
    alternativas: [
      { texto: "Veículo misto destinado ao transporte simultâneo de passageiros e carga no mesmo compartimento interior.", correta: false },
      { texto: "Veículo destinado ao transporte de carga com peso bruto total (PBT) de até 3.500 kg.", correta: true },
      { texto: "Veículo automotor de propulsão híbrida com tração permanente em quatro rodas e lotação superior a dez pessoas.", correta: false },
      { texto: "Veículo de carga com PBT superior a 3.500 kg tracionado por unidade acoplada articulada.", correta: false },
      { texto: "Equipamento autopropelido de duas rodas com guidão e velocidade limitada a 32 km/h.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-020",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 280 do CTB, o auto de infração de trânsito será lavrado contendo requisitos formais indispensáveis para sua validade jurídica. Dentre esses requisitos, NÃO se inclui obrigatoriamente:",
    explicacao: "GABARITO: E. Art. 280 do CTB: O auto de infração conterá tipificação, local/data/hora, identificação do veículo e do órgão/agente. A assinatura do infrator é colhida sempre que possível, mas a sua recusa ou ausência não invalida o auto de infração.",
    alternativas: [
      { texto: "Tipificação da infração cometida segundo os códigos do CONTRAN.", correta: false },
      { texto: "Local, data e hora do cometimento da conduta infracional.", correta: false },
      { texto: "Identificação do veículo, mediante caracteres da placa ou número de chassi.", correta: false },
      { texto: "Prontuário do agente ou autoridade fiscalizadora que lavrou o auto.", correta: false },
      { texto: "Assinatura física de próprio punho do condutor como requisito de validade substancial indispensável.", correta: true }
    ]
  },
  {
    idSlug: "b11-trans-01-021",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito do Registro Nacional de Veículos Automotores (RENAVAM) e da expedição de novo Certificado de Registro de Veículo (CRV), o proprietário deverá adotar providências obrigatórias quando houver:",
    explicacao: "GABARITO: A. Art. 123 do CTB: É obrigatória a expedição de novo CRV quando for transferida a propriedade, quando o proprietário mudar o município de domicílio/residência, quando for alterada qualquer característica do veículo ou quando houver mudança de categoria.",
    alternativas: [
      { texto: "Transferência de propriedade, mudança de domicílio de município ou alteração de qualquer característica estrutural do veículo.", correta: true },
      { texto: "Substituição periódica dos pneus por modelos de marcas comerciais concorrentes.", correta: false },
      { texto: "Troca do líquido de arrefecimento do radiador em oficina não autorizada.", correta: false },
      { texto: "Cometimento de infração média com pagamento voluntário no prazo com desconto.", correta: false },
      { texto: "Viagem interestadual com duração estimada superior a trinta dias consecutivos.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-022",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Acerca das regras de parada e estacionamento estabelecidas no art. 181 do CTB, assinale a conduta que configura infração gravíssima punida com remoção do veículo:",
    explicacao: "GABARITO: C. Art. 181, XX, do CTB: Estacionar o veículo nas vagas reservadas às pessoas com deficiência ou idosos, sem credencial que comprove tal condição: Infração - gravíssima; Penalidade - multa; Medida administrativa - remoção do veículo.",
    alternativas: [
      { texto: "Estacionar o veículo a mais de um metro do meio-fio da calçada.", correta: false },
      { texto: "Estacionar em desacordo com as posições estabelecidas na via regulamentada.", correta: false },
      { texto: "Estacionar o veículo em vaga reservada a pessoa com deficiência ou idoso sem a devida credencial comprobatória.", correta: true },
      { texto: "Estacionar junto ou sobre hidrantes de incêndio devidamente identificados.", correta: false },
      { texto: "Parar o veículo sobre a faixa de pedestres na mudança de sinal luminoso sem intenção dolosa.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-023",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No que se refere ao processo administrativo de trânsito regulado pelos arts. 281 a 290 do CTB, caso a notificação da autuação não seja expedida no prazo máximo de 30 dias contados da data do cometimento da infração:",
    explicacao: "GABARITO: D. Art. 281, parágrafo único, II, do CTB: O auto de infração será arquivado e seu registro julgado insubsistente se, no prazo máximo de 30 dias, não for expedida a notificação da autuação.",
    alternativas: [
      { texto: "A autoridade de trânsito poderá convalidar o ato notificatório a qualquer tempo antes do julgamento final.", correta: false },
      { texto: "O valor da multa será automaticamente duplicado a título de penalidade pedagógica contra o infrator.", correta: false },
      { texto: "O processo será suspenso pelo prazo decadencial improrrogável de cinco anos fiscais.", correta: false },
      { texto: "O auto de infração será arquivado e seu respectivo registro será julgado insubsistente por decurso de prazo decadencial.", correta: true },
      { texto: "A competência decisória será compulsoriamente remetida ao Conselho Nacional de Trânsito.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-024",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um condutor habilitado na categoria B pretende obter mudança para a categoria C. Nos termos do art. 145 do CTB, é exigência legal prévia que esse condutor:",
    explicacao: "GABARITO: B. Art. 143, III c/c Art. 145 do CTB: Para habilitar-se na categoria C, o condutor deve estar habilitado há no mínimo 1 ano na categoria B e não ter cometido mais de uma infração gravíssima nos últimos 12 meses.",
    alternativas: [
      { texto: "Possua no mínimo vinte e cinco anos completos e cinco anos de prática na categoria A.", correta: false },
      { texto: "Esteja habilitado no mínimo há um ano na categoria B e cumpra os requisitos de idoneidade de prontuário de pontuação.", correta: true },
      { texto: "Apresente laudo médico de sanidade mental emitido exclusivamente por junta militar federal.", correta: false },
      { texto: "Realize estágio probatório prático de direção defensiva sob supervisão da PRF por noventa dias.", correta: false },
      { texto: "Comprove vínculo empregatício formal como motorista profissional de transporte de passageiros.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-025",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "De acordo com o art. 230, V, do CTB, conduzir o veículo que não esteja registrado e devidamente licenciado perante o órgão executivo de trânsito configura:",
    explicacao: "GABARITO: A. Art. 230, V, do CTB: Conduzir o veículo que não esteja registrado e devidamente licenciado: Infração - gravíssima; Penalidade - multa; Medida administrativa - remoção do veículo.",
    alternativas: [
      { texto: "Infração gravíssima, com penalidade de multa e medida administrativa de remoção do veículo ao depósito.", correta: true },
      { texto: "Infração grave, ensejando retenção até a emissão do boleto bancário no aplicativo de celular.", correta: false },
      { texto: "Infração média, sem previsão de qualquer medida administrativa coercitiva no local.", correta: false },
      { texto: "Mero ilícito civil contratual, insuscetível de abordagem ou sanção pelo patrulhamento ostensivo.", correta: false },
      { texto: "Infração punível exclusivamente com advertência pedagógica por escrito na primeira fiscalização.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-026",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação ao uso de buzina e sinais sonoros nas vias terrestres, o art. 41 do CTB estabelece que o condutor de veículo só poderá fazer uso da buzina, desde que em toque breve, nas seguintes situações:",
    explicacao: "GABARITO: C. Art. 41 do CTB: O condutor só poderá fazer uso de buzina, em toque breve, para fazer as advertências necessárias a fim de evitar acidentes e, fora das áreas urbanas, quando for conveniente advertir a um condutor que se tem o propósito de ultrapassá-lo.",
    alternativas: [
      { texto: "Em frente a hospitais e escolas para acelerar a travessia de pedestres retardatários.", correta: false },
      { texto: "De forma prolongada e sucessiva entre as vinte e duas horas e as seis horas da manhã em vias urbanas.", correta: false },
      { texto: "Para fazer as advertências necessárias a fim de evitar sinistros e, fora das áreas urbanas, para indicar o propósito de ultrapassagem.", correta: true },
      { texto: "Para saudar cortejos comemorativos ou protestar contra a lentidão do semáforo recém-aberto.", correta: false },
      { texto: "Como substitutivo regular das luzes indicadoras de direção (setas) durante temporais severos.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-027",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Sobre a identificação e condução de ciclomotores, bicicletas elétricas e patinetes à luz da Resolução CONTRAN nº 996/2023, assinale a afirmativa escorreita:",
    explicacao: "GABARITO: B. Resolução CONTRAN 996/2023: Ciclomotor é o veículo de 2 ou 3 rodas com motor de combustão de até 50 cm³ ou elétrico de até 4 kW e velocidade máxima de fabricação de até 50 km/h, exigindo registro, emplacamento e habilitação ACC ou CNH A.",
    alternativas: [
      { texto: "Bicicletas elétricas de pedal assistido exigem emplacamento e habilitação na categoria CNH B.", correta: false },
      { texto: "Os ciclomotores necessitam de registro, licenciamento anual perante o DETRAN e exigem habilitação ACC ou CNH da categoria A.", correta: true },
      { texto: "Patinetes elétricos autopropelidos são proibidos de circular em qualquer via pública ou ciclovia.", correta: false },
      { texto: "A circulação de ciclomotores sobre calçadas destinadas a pedestres é permitida até 20 km/h.", correta: false },
      { texto: "A idade mínima para pilotar ciclomotores é de 16 anos mediante simples autorização dos pais em cartório.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-028",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos termos do art. 268 do CTB, o infrator será submetido a curso de reciclagem, na forma estabelecida pelo CONTRAN, compulsoriamente quando:",
    explicacao: "GABARITO: E. Art. 268 do CTB: O infrator será submetido a curso de reciclagem: I - quando, sendo contumaz, for necessário à sua reeducação; II - quando suspenso do direito de dirigir; III - quando se envolver em sinistro grave para o qual haja contribuído; IV - quando condenado judicialmente por delito de trânsito; V - a qualquer tempo, se constatado que coloca em risco a segurança do trânsito.",
    alternativas: [
      { texto: "Cometer duas infrações leves de estacionamento rotativo no período de dois anos.", correta: false },
      { texto: "Atrasar o pagamento da taxa de licenciamento anual por mais de noventa dias corridos.", correta: false },
      { texto: "Realizar vistoria veicular anual preventiva em centro automotivo credenciado pelo INMETRO.", correta: false },
      { texto: "Mudar de categoria C para D após cumprir todos os exames teóricos e práticos obrigatórios.", correta: false },
      { texto: "Tiver sido penalizado com a suspensão do direito de dirigir ou for condenado judicialmente por delito de trânsito.", correta: true }
    ]
  },
  {
    idSlug: "b11-trans-01-029",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito das luzes intermitentes vermelhas e sirenes utilizadas por viaturas policiais e ambulâncias, o Código de Trânsito Brasileiro determina que:",
    explicacao: "GABARITO: A. Art. 29, VII, do CTB: O uso de dispositivos de alarme sonoro e de iluminação intermitente só poderá ocorrer quando da efetiva prestação de serviço de urgência ou de policiamento ostensivo.",
    alternativas: [
      { texto: "Seu acionamento somente pode ocorrer quando da efetiva prestação de serviço de urgência, patrulhamento ostensivo ou preservação da ordem pública.", correta: true },
      { texto: "Podem ser mantidas ligadas ininterruptamente mesmo durante deslocamentos de rotina administrativa ou folga do agente.", correta: false },
      { texto: "Conferem imunidade penal absoluta ao condutor da viatura contra qualquer sinistro que causar a terceiros.", correta: false },
      { texto: "Autorizam o avanço de cruzamento semafórico com velocidade máxima sem necessidade de desaceleração prévia de segurança.", correta: false },
      { texto: "Dispensam a utilização do cinto de segurança por todos os ocupantes da viatura em qualquer via.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-01-030",
    disciplina_id: discTransito,
    assunto_id: assNormas,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em uma fiscalização de pesagem por balança rodoviária dinâmica, um caminhão de três eixos é autuado por excesso de peso por eixo e no peso bruto total. Sobre os procedimentos legais cabíveis pela PRF, assinale a afirmativa correta:",
    explicacao: "GABARITO: D. Art. 231, V e § 1º c/c Art. 270 do CTB e Resoluções do CONTRAN: O excesso de peso enseja a aplicação de multa com valor proporcional ao excesso constatado e a retenção do veículo para transbordo ou remanejamento da carga excedente.",
    alternativas: [
      { texto: "O excesso de peso no eixo é anistiado caso o peso bruto total não ultrapasse o limite em dez toneladas.", correta: false },
      { texto: "A PRF não pode impedir o seguimento do caminhão, cabendo apenas a cobrança posterior da tarifa pela ANTT.", correta: false },
      { texto: "O veículo com excesso de peso deve ser sumariamente compactado e destruído no acostamento.", correta: false },
      { texto: "O veículo é retido e a sua liberação fica condicionada ao remanejamento ou transbordo da carga que exceder o limite regulamentar.", correta: true },
      { texto: "A tolerância legal para excesso de peso no peso bruto total é de 50% para qualquer tipo de caminhão.", correta: false }
    ]
  }
];

// 30 questões exclusivas para transito_02.mjs (Crimes de Trânsito, Sinalização, Resoluções CONTRAN 789, 996, 1000)
const transito02Questoes = [
  {
    idSlug: "b11-trans-02-001",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de embriaguez ao volante (art. 306 do CTB) é classificado pela doutrina e jurisprudência pacífica do STJ como de perigo abstrato, consumando-se com a constatação de concentração igual ou superior a 6 decigramas de álcool por litro de sangue ou 0,3 miligrama de álcool por litro de ar alveolar, prescindindo de direção anormal ou perigo concreto à segurança coletiva.",
    explicacao: "GABARITO: CERTO. Tema 430/STJ e jurisprudência pacificada: O crime do art. 306 do CTB é de perigo abstrato, dispensando a demonstração de efetivo dano ou de manobra perigosa na via pública.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-002",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No homicídio culposo cometido na direção de veículo automotor (art. 302 do CTB), se o agente estiver conduzindo o veículo sob a influência de álcool ou de qualquer outra substância psicoativa que determine dependência, a pena cominada é de reclusão de 5 a 8 anos, sendo vedada a substituição da pena privativa de liberdade por penas restritivas de direitos caso não atendidos os requisitos legais.",
    explicacao: "GABARITO: CERTO. Art. 302, § 3º, do CTB (introduzido pela Lei 13.546/2017): Pena de reclusão de 5 a 8 anos e suspensão ou proibição do direito de dirigir. Por ter pena mínima de 5 anos, não cabe substituição por restritiva de direitos (art. 44, I, do CP).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-003",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O crime de fuga do local do acidente (art. 305 do CTB) teve sua constitucionalidade plenamente reconhecida pelo Plenário do STF (Tema 907 da Repercussão Geral), não violando a garantia contra a autoincriminação nem o direito ao silêncio.",
    explicacao: "GABARITO: CERTO. STF, RE 971.959/RS (Tema 907): A regra que tipifica como crime a fuga do local do acidente para fugir à responsabilidade civil ou penal é constitucional e não afronta o direito ao silêncio ou à não autoincriminação.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-004",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Para a caracterização do crime de participação em disputa automobilística não autorizada (racha - art. 308 do CTB), exige-se que a conduta resulte em dano patrimonial efetivo a terceiros ou em lesão corporal comprovada pericialmente.",
    explicacao: "GABARITO: ERRADO. Art. 308 do CTB: O tipo básico exige apenas a geração de situação de risco à incolumidade pública ou privada (perigo concreto), não exigindo que haja efetivamente dano material ou lesão corporal para a consumação do caput.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  {
    idSlug: "b11-trans-02-005",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O crime de confiar ou entregar a direção de veículo automotor a pessoa não habilitada, com habilitação cassada ou com saúde física ou mental comprometida (art. 310 do CTB) é de perigo abstrato, sendo desnecessária a ocorrência de sinistro ou dano concreto (Súmula 575 do STJ).",
    explicacao: "GABARITO: CERTO. Súmula 575 do STJ: 'Constitui crime de perigo abstrato a conduta de permitir, confiar ou entregar a direção de veículo automotor a pessoa não habilitada, com habilitação cassada ou com o direito de dirigir suspenso, para os fins do art. 310 do CTB.'",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-006",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A penalidade de suspensão ou de proibição de se obter a permissão ou a habilitação para dirigir veículo automotor tem a duração de dois meses a cinco anos, nos termos do art. 293 do CTB.",
    explicacao: "GABARITO: CERTO. Art. 293 do CTB: A penalidade de suspensão ou de proibição de se obter a permissão ou a habilitação para dirigir veículo automotor tem a duração de dois meses a cinco anos.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-007",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Ao condutor que prestar socorro integral e imediato à vítima de sinistro de trânsito em que esteve envolvido não se imporá a prisão em flagrante nem se exigirá fiança, conforme regra expressa do art. 301 do CTB.",
    explicacao: "GABARITO: CERTO. Art. 301 do CTB: Ao condutor de veículo, nos casos de acidentes de trânsito de que resulte vítima, não se imporá a prisão em flagrante, nem se exigirá fiança, se prestar pronto e integral socorro àquela.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-008",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A omissão de socorro tipificada no art. 304 do CTB é crime próprio que só pode ser praticado pelo condutor que tenha sido o causador culposo exclusivo do acidente com vítima.",
    explicacao: "GABARITO: ERRADO. Art. 304 do CTB: O crime de omissão de socorro no CTB pode ser cometido pelo condutor do veículo na ocasião do sinistro 'ainda que a sua omissão seja suprida por terceiros ou que se trate de vítima com morte instantânea ou com ferimentos leves', e independentemente de ter sido ou não o causador do acidente.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  {
    idSlug: "b11-trans-02-009",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Nos crimes de lesão corporal culposa na direção de veículo automotor (art. 303 do CTB), a ação penal é pública condicionada à representação da vítima, salvo se o agente estiver sob a influência de álcool, participando de racha ou transitando em velocidade superior à máxima permitida em mais de 50 km/h.",
    explicacao: "GABARITO: CERTO. Art. 291, § 1º, do CTB: Aplica-se a Lei 9.099/95 (exigindo representação), exceto se o agente estiver sob influência de álcool ou drogas (I), participando de racha/corrida (II), ou transitando a mais de 50 km/h acima do limite (III).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-010",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de inovação artificiosa em local de acidente automobilístico (art. 312 do CTB) pune a conduta de alterar o estado de lugar, de coisa ou de pessoa a fim de induzir a erro o perito policial ou o juiz.",
    explicacao: "GABARITO: CERTO. Art. 312 do CTB: Inovar artificiosamente, em caso de acidente automobilístico com vítima, na pendência do respectivo procedimento policial preparatório, inquérito policial ou processo penal, o estado de lugar, de coisa ou de pessoa, a fim de induzir a erro o agente policial, o perito, ou juiz.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-011",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com a Resolução CONTRAN nº 789/2020, o candidato reprovado no exame teórico ou no exame de direção veicular poderá realizar novo exame após o decurso do prazo regulamentar mínimo obrigatório de trinta dias úteis de espera.",
    explicacao: "GABARITO: ERRADO. Com a revogação do art. 151 do CTB pela Lei 14.071/2020 e adequação da Resolução 789/2020, não existe mais o prazo obrigatório de 15 ou 30 dias de espera para a repetição do exame prático ou teórico em caso de reprovação.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  {
    idSlug: "b11-trans-02-012",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Segundo a sinalização horizontal de trânsito regulamentada pelo Manual Brasileiro de Sinalização, a linha de divisão de fluxos opostos pintada na cor amarela contínua simples proíbe a ultrapassagem para ambos os sentidos de deslocamento.",
    explicacao: "GABARITO: CERTO. Sinalização Horizontal (Resoluções CONTRAN): Linha contínua amarela simples ou dupla contínua na cor amarela estabelece a proibição de ultrapassagem e transposição de faixa para ambos os sentidos.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-013",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A placa de regulamentação R-1 (Parada Obrigatória) tem formato octogonal de fundo vermelho, sendo a única placa de trânsito da categoria de regulamentação que ostenta essa forma geométrica singular para facilitar sua identificação mesmo pelo dorso.",
    explicacao: "GABARITO: CERTO. Manual Brasileiro de Sinalização de Trânsito do CONTRAN: A placa R-1 é octogonal com fundo vermelho, formato exclusivo para permitir identificação visual imediata inclusive visualizada por trás.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-014",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "As placas de advertência têm a finalidade de impor obrigações, limitações ou proibições no uso das vias terrestres, gerando a aplicação imediata de multa caso sejam desobedecidas pelo condutor.",
    explicacao: "GABARITO: ERRADO. As placas de regulamentação (e não de advertência) é que têm a finalidade de ditar proibições, restrições e obrigações, cuja inobservância constitui infração. As placas de advertência têm caráter educativo/alerta para perigos potenciais na via.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  {
    idSlug: "b11-trans-02-015",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na fiscalização de velocidade realizada por medidores fixos ou móveis da PRF, a Resolução CONTRAN nº 798/2020 veda a utilização de radares ocultos ou camuflados sem prévia divulgação dos trechos fiscalizados no sítio eletrônico do órgão.",
    explicacao: "GABARITO: CERTO. Resolução CONTRAN 798/2020: É proibido o uso de equipamentos medidores de velocidade do tipo fixo, portátil ou móvel em locais escondidos ou sem prévia publicização dos trechos e coordenadas monitoradas.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // 15 questões de Múltipla Escolha para transito_02.mjs
  {
    idSlug: "b11-trans-02-016",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Um condutor, sem possuir habilitação legal para dirigir, trafega em rodovia federal em zigue-zague e em velocidade incompatível com a segurança em frente a uma escola, gerando perigo concreto de dano a pedestres. Em face do CTB, a conduta desse motorista:",
    explicacao: "GABARITO: B. Art. 309 do CTB: Dirigir veículo automotor, em via pública, sem a devida Permissão para Dirigir ou Habilitação ou, ainda, se cassado o direito de dirigir, gerando perigo de dano: Crime com pena de detenção de 6 meses a 1 ano ou multa.",
    alternativas: [
      { texto: "Configura mera infração administrativa do art. 162, I, do CTB, pois o trânsito não admite criminalização da falta de CNH.", correta: false },
      { texto: "Tipifica o crime do art. 309 do CTB, pois a ausência de habilitação foi acompanhada da geração de perigo concreto de dano.", correta: true },
      { texto: "Constitui crime de perigo abstrato do art. 310 do CTB, com pena de reclusão de dois a quatro anos.", correta: false },
      { texto: "Absorve qualquer infração administrativa sem possibilidade de lavratura de auto de infração pela PRF.", correta: false },
      { texto: "Fica isenta de pena se o infrator comprovar que adquiriu habilidade prática jogando simuladores eletrônicos.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-017",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito das causas de aumento de pena no crime de homicídio culposo cometido na direção de veículo automotor (art. 302, § 1º, do CTB), a pena será aumentada de 1/3 à metade se o agente:",
    explicacao: "GABARITO: E. Art. 302, § 1º, do CTB: A pena é aumentada de 1/3 à metade se o agente: I - não possuir PPD ou CNH; II - praticá-lo em faixa de pedestres ou na calçada; III - deixar de prestar socorro, quando possível fazê-lo sem risco pessoal; IV - no exercício de sua profissão ou atividade, estiver conduzindo veículo de transporte de passageiros.",
    alternativas: [
      { texto: "Conduzir veículo cujo licenciamento esteja vencido há mais de trinta dias úteis.", correta: false },
      { texto: "Cometer o delito utilizando veículo de cor vermelha ou com tração dianteira.", correta: false },
      { texto: "Praticar o fato em via rural não asfaltada durante o período diurno com tempo ensolarado.", correta: false },
      { texto: "Estar acompanhado de passageiro que não utilize o cinto de segurança no banco traseiro.", correta: false },
      { texto: "Não possuir Permissão para Dirigir ou CNH, ou praticá-lo sobre faixa de pedestres ou na calçada.", correta: true }
    ]
  },
  {
    idSlug: "b11-trans-02-018",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No que tange à sinalização vertical de advertência, a placa identificada pelo código A-1a adverte o condutor sobre a aproximação de:",
    explicacao: "GABARITO: C. Manual Brasileiro de Sinalização de Trânsito: A placa A-1a adverte sobre 'Curva acentuada à esquerda'.",
    alternativas: [
      { texto: "Pista escorregadia com risco iminente de aquaplanagem.", correta: false },
      { texto: "Cruzamento rodoferroviário de nível com barreira automática.", correta: false },
      { texto: "Curva acentuada à esquerda adiante na via.", correta: true },
      { texto: "Estreitamento de pista ao centro em ponte móvel.", correta: false },
      { texto: "Saliência ou lombada física não identificada no pavimento.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-019",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Segundo a Resolução CONTRAN nº 1000/2023 e diretrizes nacionais de trânsito, a educação para o trânsito como direito de todos e dever prioritário dos componentes do SNT tem como foco primordial:",
    explicacao: "GABARITO: A. Art. 74 a 79 do CTB e Resolução CONTRAN 1000/2023: A educação para o trânsito deve ser promovida na pré-escola e em todos os graus de ensino, priorizando a valorização da vida, a cidadania e a segurança viária.",
    alternativas: [
      { texto: "A formação humanística, a cidadania, a preservação da vida e a convivência harmônica no espaço público viário.", correta: true },
      { texto: "A arrecadação maximizada de receitas provenientes de multas de trânsito para os fundos municipais.", correta: false },
      { texto: "A substituição compulsória de todos os automóveis a combustão por bicicletas manuais.", correta: false },
      { texto: "A extinção definitiva das faixas de pedestres em cruzamentos com semáforos inteligentes.", correta: false },
      { texto: "A dispensa de aulas práticas de direção veicular para condutores de veículos utilitários.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-020",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A fiscalização da alcoolemia realizada por policiais rodoviários federais pode ser formalizada mediante teste em etilômetro. Nos termos da Resolução CONTRAN nº 432/2013, a medição que configura infração administrativa do art. 165 do CTB é aquela que resulta em valor igual ou superior a:",
    explicacao: "GABARITO: B. Resolução CONTRAN 432/2013: A infração do art. 165 ocorre quando a medição no etilômetro (descontada a margem de erro da tabela) for igual ou superior a 0,05 mg/L de ar alveolar. Já o crime do art. 306 ocorre a partir de 0,34 mg/L (valor medido correspondente a 0,30 mg/L considerado).",
    alternativas: [
      { texto: "0,50 mg de álcool por litro de ar alveolar sem margem de tolerância metrológica.", correta: false },
      { texto: "0,05 mg de álcool por litro de ar alveolar (valor considerado após desconto do erro máximo admissível).", correta: true },
      { texto: "1,20 mg de álcool por litro de sangue em qualquer exame laboratorial expedito.", correta: false },
      { texto: "0,80 dg de álcool por litro de saliva coletada por swab bucal.", correta: false },
      { texto: "2,00 mg de álcool por litro de ar expirado em teste de sopro contínuo.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-021",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Durante fiscalização de trânsito em rodovia federal, o condutor de um automóvel recusa-se a soprar o bafômetro e a submeter-se a exame de sangue, embora não apresente sinais visíveis de embriaguez profunda. À luz do art. 165-A do CTB e da jurisprudência do STF (Tema 1079):",
    explicacao: "GABARITO: D. STF, RE 1.224.374 (Tema 1079): É constitucional a imposição da penalidade de multa e suspensão do direito de dirigir decorrente da recusa do condutor a se submeter a teste de alcoolemia (art. 165-A do CTB).",
    alternativas: [
      { texto: "O condutor deve ser imediatamente conduzido à delegacia em flagrante pelo crime do art. 306 do CTB.", correta: false },
      { texto: "A recusa é direito absoluto insuscetível de qualquer penalidade administrativa em razão do princípio da presunção de inocência.", correta: false },
      { texto: "A autoridade policial deve obrigar o condutor a realizar o teste mediante força física moderada.", correta: false },
      { texto: "A recusa caracteriza a infração administrativa autônoma do art. 165-A do CTB, impondo-se multa gravíssima (dez vezes) e suspensão do direito de dirigir por 12 meses.", correta: true },
      { texto: "O veículo deve ser compulsoriamente leiloado em favor do Fundo Nacional de Segurança Pública.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-022",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No tocante ao crime de lesão corporal culposa na direção de veículo automotor praticado por condutor embriagado (art. 303, § 2º, do CTB), a pena cominada é de:",
    explicacao: "GABARITO: C. Art. 303, § 2º, do CTB: Se o crime for praticado sob a influência de álcool ou substância psicoativa e resultar em lesão corporal de natureza grave ou gravíssima, a pena é de reclusão de 2 a 5 anos, sem prejuízo da suspensão da CNH.",
    alternativas: [
      { texto: "Detenção de seis meses a um ano e prestação pecuniária à vítima.", correta: false },
      { texto: "Reclusão de dez a vinte anos em regime obrigatoriamente fechado.", correta: false },
      { texto: "Reclusão de dois a cinco anos se do crime resultar lesão corporal de natureza grave ou gravíssima.", correta: true },
      { texto: "Multa isolada de dez salários mínimos sem pena corporal.", correta: false },
      { texto: "Detenção de um a dois meses com conversão em cesta básica.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-023",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A sinalização semafórica de controle de fluxo de pedestres é composta por luzes de duas cores. O pictograma de pedestre na cor vermelha acesa de forma fixa indica que os pedestres:",
    explicacao: "GABARITO: A. Anexo II do CTB: Sinalização semafórica para pedestres: Vermelho fixo - indica que os pedestres não podem iniciar a travessia; Vermelho intermitente - indica que a fase de travessia está prestes a terminar; Verde fixo - travessia permitida.",
    alternativas: [
      { texto: "Não podem iniciar a travessia da via sob nenhuma hipótese.", correta: true },
      { texto: "Devem acelerar o passo pois a travessia já está liberada.", correta: false },
      { texto: "Têm preferência absoluta sobre os veículos que executam conversão.", correta: false },
      { texto: "Podem atravessar correndo em diagonal até o refúgio central.", correta: false },
      { texto: "Devem aguardar a passagem exclusiva de ciclistas em sentido único.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-024",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O art. 311 do CTB tipifica a conduta de trafegar em velocidade incompatível com a segurança nas proximidades de escolas, hospitais, estações de embarque e desembarque de passageiros, logradouros estreitos, ou onde haja grande movimentação ou concentração de pessoas. Trata-se de delito de perigo:",
    explicacao: "GABARITO: B. Art. 311 do CTB: 'Trafegar em velocidade incompatível... gerando perigo de dano'. Trata-se de crime de perigo concreto, cuja tipicidade exige a demonstração efetiva do risco à incolumidade alheia.",
    alternativas: [
      { texto: "Abstrato, consumando-se pelo simples fato de passar em frente à escola.", correta: false },
      { texto: "Concreto, exigindo a demonstração na situação fática da geração de perigo de dano a terceiros.", correta: true },
      { texto: "Permanente, que se protrai no tempo enquanto o veículo não for deslacrado pelo DETRAN.", correta: false },
      { texto: "Material, que exige obrigatoriamente o atropelamento efetivo de pelo menos um aluno.", correta: false },
      { texto: "Culposo exclusivo, sendo inadmitida a modalidade dolosa de velocidade excessiva.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-025",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em relação aos gestos de agentes da autoridade de trânsito regulamentados pelo CTB, o sinal de braço levantado verticalmente, com a palma da mão para a frente, significa:",
    explicacao: "GABARITO: E. Anexo II do CTB: Gesto do Agente GA-01 (Braço levantado verticalmente com a palma da mão para a frente): Significa 'Ordem de parada obrigatória para todos os veículos'.",
    alternativas: [
      { texto: "Ordem para aumentar a velocidade imediatamente na ultrapassagem.", correta: false },
      { texto: "Autorização para retorno de emergência em faixa de pedestres.", correta: false },
      { texto: "Sinalização de que a via está interditada por tempo indeterminado.", correta: false },
      { texto: "Indicação de que o veículo deve mudar para a faixa da direita.", correta: false },
      { texto: "Ordem de parada obrigatória para todos os veículos que venham de qualquer direção.", correta: true }
    ]
  },
  {
    idSlug: "b11-trans-02-026",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Acerca do crime de adulteração de sinal identificador de veículo automotor previsto no art. 311 do Código Penal (com redação ampliada pela Lei nº 14.562/2023), assinale a afirmativa correta:",
    explicacao: "GABARITO: C. Art. 311 do Código Penal (com alterações da Lei 14.562/2023): Adulterar, remarcar ou suprimir número de chassi, monobloco, motor, placa de identificação ou outro sinal identificador de veículo automotor, elétrico, híbrido, de reboque, de semirreboque ou de suas combinações: Pena de reclusão de 3 a 6 anos e multa.",
    alternativas: [
      { texto: "A adulteração de placa de reboque ou semirreboque é conduta penalmente atípica no Brasil.", correta: false },
      { texto: "O delito é punido apenas na forma culposa com pena restritiva de direitos comunitários.", correta: false },
      { texto: "A conduta de adulterar sinal identificador de veículo automotor, de reboque ou de semirreboque constitui crime apenado com reclusão de 3 a 6 anos e multa.", correta: true },
      { texto: "A competência para o julgamento é exclusiva do Tribunal Marítimo Internacional.", correta: false },
      { texto: "A supressão do número de chassi não se equipara à adulteração de placas.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-027",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O uso de dispositivo antirradar (detector de radar) em veículo automotor trafegando em rodovia federal configura:",
    explicacao: "GABARITO: A. Art. 230, III, do CTB: Conduzir o veículo com dispositivo antirradar: Infração - gravíssima; Penalidade - multa e apreensão do dispositivo; Medida administrativa - retenção do veículo.",
    alternativas: [
      { texto: "Infração gravíssima, com penalidade de multa e apreensão do equipamento pelo agente policial.", correta: true },
      { texto: "Mero exercício do direito de informação garantido pela Lei de Acesso à Informação.", correta: false },
      { texto: "Crime hediondo inafiançável com perda compulsória do direito de herança.", correta: false },
      { texto: "Infração leve que não autoriza a apreensão do objeto pelo policial rodoviário.", correta: false },
      { texto: "Conduta permitida desde que o aparelho seja homologado pela ANATEL para uso privado.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-028",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Conforme o art. 297 do CTB, a penalidade de multa reparatória imposta nos crimes de trânsito consiste no:",
    explicacao: "GABARITO: D. Art. 297 do CTB: A penalidade de multa reparatória consiste no pagamento, mediante depósito judicial em favor da vítima, ou a seus sucessores, de quantia calculada com base no prejuízo material demonstrado e derivado do crime.",
    alternativas: [
      { texto: "Pagamento de taxa de fiscalização tributária ao Ministério da Fazenda.", correta: false },
      { texto: "Recolhimento de cestas básicas destinadas a asilos e orfanatos municipais.", correta: false },
      { texto: "Depósito de quantia financeira no Fundo Nacional de Segurança Pública.", correta: false },
      { texto: "Pagamento, mediante depósito judicial em favor da vítima ou de seus sucessores, de quantia decorrente do prejuízo material causado pelo crime.", correta: true },
      { texto: "Ressarcimento das despesas de guincho e pátio da Polícia Rodoviária Federal.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-029",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A linha de bordo (marcas longitudinais) que delimita a pista de rolamento separando-a do acostamento em rodovias é pintada na cor:",
    explicacao: "GABARITO: B. Sinalização Horizontal do CTB: A linha de bordo que separa a faixa de rolamento do acostamento é contínua e pintada na cor BRANCA.",
    alternativas: [
      { texto: "Amarela tracejada com tachões reflexivos bidirecionais.", correta: false },
      { texto: "Branca contínua.", correta: true },
      { texto: "Vermelha fosforescente para tráfego exclusivo de ciclistas.", correta: false },
      { texto: "Azul petróleo para indicar faixas de veículos elétricos.", correta: false },
      { texto: "Preta sobreposta por placas de metal antiderrapante.", correta: false }
    ]
  },
  {
    idSlug: "b11-trans-02-030",
    disciplina_id: discTransito,
    assunto_id: assCrimes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "De acordo com o art. 296 do CTB, o réu condenado por crime de trânsito a quem foi aplicada a suspensão ou a proibição de obter a permissão ou habilitação deverá entregar o documento de habilitação:",
    explicacao: "GABARITO: C. Art. 296 do CTB: O réu condenado à suspensão ou proibição de obter CNH deverá entregar à autoridade judiciária, em quarenta e oito horas com a intimação, a sua carteira de habilitação.",
    alternativas: [
      { texto: "No prazo de trinta dias úteis perante a Junta Administrativa de Recursos de Infrações.", correta: false },
      { texto: "Apenas após a quitação de todas as multas municipais pendentes no RENAINF.", correta: false },
      { texto: "À autoridade judiciária competente no prazo máximo de 48 horas após a intimação da decisão.", correta: true },
      { texto: "Ao sindicato dos motoristas profissionais do respectivo estado federativo.", correta: false },
      { texto: "Em até seis meses na sede do Conselho Nacional de Trânsito em Brasília.", correta: false }
    ]
  }
];

// Salvar módulos de Trânsito
fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/transito_01.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const transito01Questoes = ${JSON.stringify(transito01Questoes, null, 2)};\n`,
  "utf8"
);

fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/transito_02.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const transito02Questoes = ${JSON.stringify(transito02Questoes, null, 2)};\n`,
  "utf8"
);

console.log(`[✓] Trânsito gerado com sucesso: transito_01 (${transito01Questoes.length}) + transito_02 (${transito02Questoes.length}) = ${transito01Questoes.length + transito02Questoes.length} questões.`);
