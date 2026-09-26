import { TAXONOMIA } from "./taxonomia.mjs";

export const transito02Questoes = [
  // Q26 - CEBRASPE / PRF - Infrações e Sistema de Pontuação (Lei 14.071/2020)
  {
    idSlug: "trans-026",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Conforme o art. 261 do CTB, a penalidade de suspensão do direito de dirigir por pontos será aplicada quando o condutor atingir, no período de 12 meses: 20 pontos, caso constem duas ou mais infrações gravíssimas; 30 pontos, caso conste apenas uma infração gravíssima; ou 40 pontos, caso não conste nenhuma infração gravíssima na pontuação.",
    explicacao: "GABARITO: CERTO. Redação do art. 261, I, 'a', 'b' e 'c', do CTB (incluída pela Lei nº 14.071/2020). Além disso, para o condutor que exerce atividade remunerada (EAR), o limite é sempre de 40 pontos, independentemente da natureza das infrações cometidas.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q27 - CEBRASPE / PRF - Recusa ao Teste do Etilômetro (Art. 165-A)
  {
    idSlug: "trans-027",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A recusa do condutor a se submeter a teste de etilômetro, exame clínico ou perícia que permita certificar a influência de álcool ou substância psicoativa constitui infração gravíssima autônoma (art. 165-A do CTB), sujeita à penalidade de multa multiplicada por dez e suspensão do direito de dirigir por 12 meses, além da medida administrativa de recolhimento do documento de habilitação e retenção do veículo.",
    explicacao: "GABARITO: CERTO. Art. 165-A do CTB: 'Recusar-se a ser submetido a teste, exame clínico, perícia ou outro procedimento que permita certificar influência de álcool ou outra substância psicoativa (...): Infração - gravíssima; Penalidade - multa (dez vezes) e suspensão do direito de dirigir por 12 (doze) meses; Medida administrativa - recolhimento do documento de habilitação e retenção do veículo'. O STF declarou a constitucionalidade do art. 165-A no RE 1.224.374 (Tema 1.079).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q28 - FGV / PM - Diferença entre Penalidade e Medida Administrativa
  {
    idSlug: "trans-028",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante fiscalização de trânsito pela Polícia Militar, um policial constata veículo trafegando com pneu liso (em mau estado de conservação). Sobre as sanções e providências aplicáveis previstas no CTB, assinale a opção que indica corretamente uma medida administrativa e não uma penalidade:",
    explicacao: "GABARITO: D. Segundo o art. 269 do CTB, a retenção do veículo, remoção do veículo e recolhimento de documentos são medidas administrativas (aplicadas no ato da fiscalização pelo agente). Já advertência por escrito, multa, suspensão e cassação da CNH são penalidades (art. 256), aplicadas pela autoridade de trânsito após o devido processo legal.",
    alternativas: [
      { letra: "A", texto: "Advertência por escrito.", correta: false },
      { letra: "B", texto: "Multa de trânsito.", correta: false },
      { letra: "C", texto: "Suspensão do direito de dirigir.", correta: false },
      { letra: "D", texto: "Retenção do veículo.", correta: true },
      { letra: "E", texto: "Cassação do documento de habilitação.", correta: false }
    ]
  },
  // Q29 - CEBRASPE / PRF - Liberação de Veículo sem Recolhimento ao Pátio (Lei 14.229/21)
  {
    idSlug: "trans-029",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Quando a irregularidade constatada em fiscalização de trânsito não puder ser sanada no local, e o veículo estiver em condições seguras de trafegabilidade, o agente de fiscalização poderá liberar o veículo mediante recolhimento do CRLV em meio físico ou bloqueio administrativo, concedendo prazo de até 30 dias para a regularização.",
    explicacao: "GABARITO: CERTO. Art. 270, § 9º, do CTB (com alterações da Lei 14.229/2021 e Lei 14.071/2020): não sendo possível sanar a falha no local, desde que o veículo ofereça condições de segurança para circulação, ele será liberado e entregue ao condutor regularmente habilitado mediante concessão de prazo de até 30 dias para regularização, com o devido registro de restrição administrativa.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q30 - VUNESP / PM - Dirigir com CNH Vencida
  {
    idSlug: "trans-030",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Conduzir veículo automotor com a Carteira Nacional de Habilitação (CNH) vencida há mais de 30 (trinta) dias é conduta tipificada no art. 162, V, do CTB como:",
    explicacao: "GABARITO: A. Art. 162, V, do CTB: conduzir veículo com validade da CNH vencida há mais de 30 dias constitui infração gravíssima, com penalidade de multa e medidas administrativas de recolhimento da CNH e retenção do veículo até a apresentação de condutor habilitado.",
    alternativas: [
      { letra: "A", texto: "infração gravíssima, penalidade de multa e retenção do veículo.", correta: true },
      { letra: "B", texto: "infração grave, penalidade de multa e apreensão imediata do veículo.", correta: false },
      { letra: "C", texto: "infração média, penalidade de advertência escrita se for primário.", correta: false },
      { letra: "D", texto: "infração leve, sem retenção de veículo.", correta: false },
      { letra: "E", texto: "crime de trânsito inafiançável.", correta: false }
    ]
  },
  // Q31 - CEBRASPE / PRF - Uso de Aparelho Celular ao Volante
  {
    idSlug: "trans-031",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Segurar ou manusear telefone celular enquanto dirige veículo automotor constitui infração de trânsito de natureza gravíssima, nos termos do parágrafo único do art. 252 do Código de Trânsito Brasileiro.",
    explicacao: "GABARITO: CERTO. O art. 252, VI, do CTB prevê como média a infração de dirigir utilizando-se de fones ou telefone celular, mas o parágrafo único (acrescentado pela Lei nº 13.281/2016) estipula expressamente que a hipótese de segurar ou manusear telefone celular constitui infração gravíssima (7 pontos e multa).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q32 - IBFC / GM - Estacionamento em Vaga de Idoso / PCD
  {
    idSlug: "trans-032",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Estacionar o veículo nas vagas reservadas a pessoas com deficiência ou idosos, sem a devida credencial expedida pelo órgão competente, constitui segundo o art. 181, XX, do CTB:",
    explicacao: "GABARITO: E. Art. 181, XX, do CTB: estacionar nas vagas reservadas a pessoas com deficiência ou idosos sem credencial que comprove tal condição é infração gravíssima, com penalidade de multa e medida administrativa de remoção do veículo.",
    alternativas: [
      { letra: "A", texto: "infração leve, penalidade de multa e retenção do veículo.", correta: false },
      { letra: "B", texto: "infração média, sem remoção do veículo.", correta: false },
      { letra: "C", texto: "infração grave, penalidade de advertência escrita.", correta: false },
      { letra: "D", texto: "mera infração administrativa municipal não sujeita a pontos na CNH.", correta: false },
      { letra: "E", texto: "infração gravíssima, com penalidade de multa e medida administrativa de remoção do veículo.", correta: true }
    ]
  },
  // Q33 - CEBRASPE / PRF - Prazo para Notificação da Autuação
  {
    idSlug: "trans-033",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O auto de infração será arquivado e seu registro julgado insubsistente se, no prazo máximo de 30 (trinta) dias, não for expedida a notificação da autuação ao infrator ou proprietário do veículo.",
    explicacao: "GABARITO: CERTO. Art. 281, parágrafo único, II, do CTB: 'O auto de infração será arquivado e seu registro julgado insubsistente: (...) II - se, no prazo máximo de trinta dias, não for expedida a notificação da autuação'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q34 - FGV / PM - Conversão de Multa em Advertência por Escrito
  {
    idSlug: "trans-034",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Com a nova redação do art. 267 do CTB dada pela Lei nº 14.071/2020, a penalidade de advertência por escrito:",
    explicacao: "GABARITO: C. Art. 267 do CTB: 'Deverá ser imposta a penalidade de advertência por escrito à infração de natureza leve ou média, passível de ser punida com multa, caso o infrator não tenha cometido nenhuma outra infração nos últimos 12 (doze) meses'. A imposição passou de ato discricionário ('poderá') para ato vinculado ('deverá').",
    alternativas: [
      { letra: "A", texto: "é ato discricionário da autoridade de trânsito em infrações de qualquer natureza.", correta: false },
      { letra: "B", texto: "aplica-se apenas às infrações de natureza grave se o condutor for primário.", correta: false },
      { letra: "C", texto: "deverá ser obrigatoriamente imposta à infração de natureza leve ou média se o condutor não cometeu nenhuma outra infração nos últimos 12 meses.", correta: true },
      { letra: "D", texto: "depende sempre de requerimento formal do condutor em recurso à JARI.", correta: false },
      { letra: "E", texto: "foi expressamente revogada do ordenamento jurídico brasileiro.", correta: false }
    ]
  },
  // Q35 - CEBRASPE / PRF - Exame Toxicológico Periódico
  {
    idSlug: "trans-035",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A não realização do exame toxicológico periódico por condutores das categorias C, D e E com idade inferior a 70 anos, após 30 dias do vencimento do prazo estabelecido, constitui infração de trânsito gravíssima multiplicada por cinco, sujeita à suspensão do direito de dirigir por 3 meses.",
    explicacao: "GABARITO: CERTO. Art. 165-B e 165-D do CTB (incluídos pela Lei nº 14.071/2020 e aperfeiçoados pela Lei nº 14.599/2023): conduzir veículo com exame toxicológico vencido há mais de 30 dias é infração gravíssima (multa 5x e suspensão do direito de dirigir por 3 meses, condicionada a liberação a resultado negativo em novo exame).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q36 - VUNESP / PM - Disputa de Corrida por Espírito de Emulação (Racha Administrativo)
  {
    idSlug: "trans-036",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Disputar corrida por espírito de emulação em via pública não autorizada (art. 173 do CTB) acarreta ao infrator:",
    explicacao: "GABARITO: B. Art. 173 do CTB: infração gravíssima; penalidade de multa multiplicada por 10 (dez) vezes, suspensão do direito de dirigir e apreensão do veículo (medida: recolhimento da CNH e remoção do veículo). Em caso de reincidência no período de 12 meses, aplica-se o dobro da multa.",
    alternativas: [
      { letra: "A", texto: "infração grave, multa simples e retenção do veículo.", correta: false },
      { letra: "B", texto: "infração gravíssima, penalidade de multa multiplicada por 10, suspensão do direito de dirigir e remoção do veículo.", correta: true },
      { letra: "C", texto: "infração média com recolhimento provisório da placa.", correta: false },
      { letra: "D", texto: "apenas sanção penal, sem aplicação de medidas administrativas de trânsito.", correta: false },
      { letra: "E", texto: "infração leve com advertência escrita e curso de reciclagem obrigatório.", correta: false }
    ]
  },
  // Q37 - CEBRASPE / PRF - Manobra Perigosa e Derrapagem (Art. 175)
  {
    idSlug: "trans-037",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Utilizar-se de veículo para demonstrar ou exibir manobra perigosa, mediante arrancada brusca, derrapagem ou frenagem com deslizamento ou arrastamento de pneus, sujeita o infrator à multa gravíssima multiplicada por dez, suspensão do direito de dirigir e remoção do veículo.",
    explicacao: "GABARITO: CERTO. Art. 175 do CTB tipifica a infração gravíssima com multa (dez vezes), suspensão do direito de dirigir e medidas administrativas de recolhimento do documento de habilitação e remoção do veículo.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q38 - IBFC / GM - Ultrapassagem pela Contramão em Faixa Contínua
  {
    idSlug: "trans-038",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Ultrapassar outro veículo pela contramão em linha dupla contínua amarela constitui, conforme o art. 203, V, do CTB, infração de natureza:",
    explicacao: "GABARITO: D. Art. 203, V, do CTB: ultrapassar pela contramão onde houver linha de divisão de fluxos opostos contínua amarela é infração gravíssima, com penalidade de multa multiplicada por 5 (cinco vezes).",
    alternativas: [
      { letra: "A", texto: "leve.", correta: false },
      { letra: "B", texto: "média.", correta: false },
      { letra: "C", texto: "grave.", correta: false },
      { letra: "D", texto: "gravíssima (com fator multiplicador de 5 vezes na multa).", correta: true },
      { letra: "E", texto: "administrativa sem cômputo de pontos.", correta: false }
    ]
  },
  // Q39 - CEBRASPE / PRF - Condução de Veículo sem Cinto de Segurança
  {
    idSlug: "trans-039",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Deixar o condutor ou passageiro de usar o cinto de segurança constitui infração grave, com penalidade de multa e medida administrativa de retenção do veículo até a colocação do cinto pelo infrator.",
    explicacao: "GABARITO: CERTO. Art. 167 do CTB: 'Deixar o condutor ou passageiro de usar o cinto de segurança, conforme previsto no art. 65: Infração - grave; Penalidade - multa; Medida administrativa - retenção do veículo até colocação do cinto pelo infrator'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q40 - FGV / PM - Excesso de Velocidade e Escalonamento de Gravidade
  {
    idSlug: "trans-040",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um radar portátil operado por policiais registra um veículo transitando em velocidade superior à máxima permitida em mais de 50% (cinquenta por cento). Nos termos do art. 218, III, do CTB, a infração cometida e suas penalidades são:",
    explicacao: "GABARITO: A. Art. 218, III, do CTB: transitar em velocidade superior à máxima permitida em mais de 50% é infração gravíssima, com penalidade de multa (3 vezes) e suspensão imediata do direito de dirigir.",
    alternativas: [
      { letra: "A", texto: "infração gravíssima, com penalidade de multa (3 vezes) e suspensão do direito de dirigir.", correta: true },
      { letra: "B", texto: "infração grave, com penalidade de multa (2 vezes) e apreensão do veículo.", correta: false },
      { letra: "C", texto: "infração média, com desconto de 50% no valor se paga à vista.", correta: false },
      { letra: "D", texto: "infração gravíssima, com cassação definitiva e automática da CNH sem direito a defesa.", correta: false },
      { letra: "E", texto: "crime comum com prisão em flagrante obrigatória.", correta: false }
    ]
  },
  // Q41 - CEBRASPE / PRF - Identificação do Condutor Infrator
  {
    idSlug: "trans-041",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Não sendo imediata a identificação do infrator, o principal condutor ou o proprietário do veículo terá o prazo de 30 (trinta) dias, contado da notificação da autuação, para indicar o real condutor responsável pela infração.",
    explicacao: "GABARITO: CERTO. Art. 257, § 7º, do CTB (com redação pela Lei nº 14.071/2020): o prazo para indicação do real condutor infrator é de 30 (trinta) dias contados da notificação da autuação (anteriormente à reforma eram 15 dias).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q42 - VUNESP / PM - Estacionamento sobre Faixa de Pedestres
  {
    idSlug: "trans-042",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Estacionar o veículo sobre faixa destinada a pedestre, sobre ciclovia ou ciclofaixa (art. 181, VIII, do CTB) configura infração:",
    explicacao: "GABARITO: C. Art. 181, VIII, do CTB: estacionar no passeio ou sobre faixa destinada a pedestre, sobre ciclovia ou ciclofaixa é infração grave, sujeita a multa e remoção do veículo.",
    alternativas: [
      { letra: "A", texto: "leve.", correta: false },
      { letra: "B", texto: "média.", correta: false },
      { letra: "C", texto: "grave, com penalidade de multa e medida administrativa de remoção do veículo.", correta: true },
      { letra: "D", texto: "gravíssima com retenção apenas da CNH.", correta: false },
      { letra: "E", texto: "não punível se estiver com pisca-alerta ligado.", correta: false }
    ]
  },
  // Q43 - CEBRASPE / PRF - Reincidência na Cassação da CNH
  {
    idSlug: "trans-043",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A cassação da CNH será aplicada se o condutor for flagrado conduzindo qualquer veículo com o direito de dirigir suspenso ou no caso de reincidência, no período de 12 meses, em determinadas infrações gravíssimas como dirigir embriagado (art. 165) ou disputar racha (art. 173).",
    explicacao: "GABARITO: CERTO. Art. 263, I e II, do CTB: a cassação da CNH dar-se-á: I - quando, suspenso o direito de dirigir, o infrator conduzir qualquer veículo; II - no caso de reincidência, no prazo de doze meses, das infrações previstas no inciso III do art. 162 e nos arts. 163, 164, 165, 173, 174 e 175.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q44 - FGV / PM - Medida Administrativa de Teste de Alcoolemia
  {
    idSlug: "trans-044",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Conforme o art. 277 do CTB, a verificação da embriaguez ou do uso de outra substância psicoativa para fins administrativos poderá ser obtida por meio de:",
    explicacao: "GABARITO: E. Art. 277 do CTB: o condutor de veículo envolvido em acidente de trânsito ou que for alvo de fiscalização poderá ser submetido a teste, exame clínico, perícia ou outro procedimento que, por meios técnicos ou científicos, na forma disciplinada pelo CONTRAN, permita certificar seu estado. Além disso, sinais de alteração da capacidade psicomotora poderão ser obtidos mediante vídeo, prova testemunhal ou auto de constatação.",
    alternativas: [
      { letra: "A", texto: "exclusivamente teste com aparelho de ar alveolar (etilômetro calibrado).", correta: false },
      { letra: "B", texto: "apenas exame de sangue laboratorial em hospital público credenciado.", correta: false },
      { letra: "C", texto: "apenas declaração formal assinada por médico perito legista.", correta: false },
      { letra: "D", texto: "confissão expressa do condutor no boletim de ocorrência.", correta: false },
      { letra: "E", texto: "teste de etilômetro, exame clínico, perícia ou constatação de sinais de alteração da capacidade psicomotora por imagens, vídeos ou testemunhas.", correta: true }
    ]
  },
  // Q45 - CEBRASPE / PRF - Retenção de Veículo e Apresentação de Condutor Habilitado
  {
    idSlug: "trans-045",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Quando a infração for praticada por condutor não habilitado ou sob influência de álcool, o veículo será retido até a apresentação de condutor habilitado e em condições normais de dirigir, que será igualmente submetido aos testes de alcoolemia antes de assumir a direção.",
    explicacao: "GABARITO: CERTO. Art. 270, § 2º, e art. 277 do CTB: quando a irregularidade não puder ser sanada no local pelo infrator, o veículo será liberado a outro condutor habilitado, o qual deverá ser previamente submetido à fiscalização e teste de etilômetro para atestar suas plenas condições de dirigir.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q46 - IBFC / GM - Estacionar em Desacordo com a Regulamentação (Zona Azul)
  {
    idSlug: "trans-046",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Estacionar o veículo em desacordo com as condições regulamentadas pela autoridade competente (estacionamento rotativo pago / Zona Azul) constitui, segundo o art. 181, XVII, do CTB:",
    explicacao: "GABARITO: B. Art. 181, XVII, do CTB: estacionar o veículo em desacordo com as condições regulamentadas pela autoridade de trânsito (placa de estacionamento regulamentado) é infração grave, com penalidade de multa e medida administrativa de remoção do veículo.",
    alternativas: [
      { letra: "A", texto: "infração leve com penalidade de advertência.", correta: false },
      { letra: "B", texto: "infração grave, com penalidade de multa e medida administrativa de remoção do veículo.", correta: true },
      { letra: "C", texto: "infração média sem medida administrativa.", correta: false },
      { letra: "D", texto: "infração gravíssima sujeita à suspensão da CNH.", correta: false },
      { letra: "E", texto: "infração penal de estelionato viário.", correta: false }
    ]
  },
  // Q47 - CEBRASPE / PRF - Reabilitação do Condutor Cassado
  {
    idSlug: "trans-047",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Decorridos 2 (dois) anos da cassação da Carteira Nacional de Habilitação, o infrator poderá requerer sua reabilitação, submetendo-se a todos os exames necessários à habilitação na forma estabelecida pelo CONTRAN.",
    explicacao: "GABARITO: CERTO. Art. 263, § 2º, do CTB: 'Decorridos dois anos da cassação da Carteira Nacional de Habilitação, o infrator poderá requerer sua reabilitação, submetendo-se a todos os exames necessários à habilitação, na forma estabelecida pelo CONTRAN'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q48 - VUNESP / PM - Bloqueio da Via com Veículo
  {
    idSlug: "trans-048",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Usar qualquer veículo para, deliberadamente, interromper, restringir ou perturbar a circulação na via sem autorização do órgão ou entidade de trânsito com circunscrição sobre ela (art. 253-A do CTB) acarreta:",
    explicacao: "GABARITO: A. Art. 253-A do CTB: infração gravíssima; penalidade de multa multiplicada por 20 (vinte vezes) e suspensão do direito de dirigir por 12 meses; medidas administrativas de recolhimento da habilitação e remoção do veículo. Para os organizadores do ato, a multa é multiplicada por 60 vezes.",
    alternativas: [
      { letra: "A", texto: "infração gravíssima, multa multiplicada por 20 vezes, suspensão da CNH por 12 meses e remoção do veículo.", correta: true },
      { letra: "B", texto: "infração média com multa simples e retenção até dispersão pacífica.", correta: false },
      { letra: "C", texto: "infração grave sem suspensão da CNH.", correta: false },
      { letra: "D", texto: "apenas penalidade administrativa aos líderes do protesto.", correta: false },
      { letra: "E", texto: "infração gravíssima sem fator multiplicador.", correta: false }
    ]
  },
  // Q49 - CEBRASPE / PRF - Conduzir Veículo sem Equipamento Obrigatório
  {
    idSlug: "trans-049",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Conduzir veículo sem os equipamentos obrigatórios ou com equipamento obrigatório inoperante ou ineficiente constitui infração grave, com penalidade de multa e medida administrativa de retenção do veículo para regularização.",
    explicacao: "GABARITO: CERTO. Art. 230, IX e X, do CTB prevê expressamente como infração de natureza grave a condução de veículo sem equipamento obrigatório ou com este inoperante/ineficiente, sujeita a multa e retenção do veículo para regularização.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q50 - FGV / PM - Efeito Suspensivo de Recursos contra Penalidades
  {
    idSlug: "trans-050",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos termos do art. 285 do Código de Trânsito Brasileiro (com alterações promovidas pela Lei nº 14.229/2021), o recurso tempestivo interposto contra a penalidade de multa perante a Junta Administrativa de Recursos de Infrações (JARI):",
    explicacao: "GABARITO: D. Com a alteração do art. 285 do CTB pela Lei nº 14.229/2021, o recurso contra a imposição de penalidade terá efeito suspensivo automático, cessando apenas após a decisão ou caso não seja provido, não incidindo restrição para licenciamento ou transferência enquanto pendente o julgamento tempestivo.",
    alternativas: [
      { letra: "A", texto: "não possui efeito suspensivo em nenhuma hipótese, devendo a multa ser paga imediatamente.", correta: false },
      { letra: "B", texto: "só adquire efeito suspensivo se deferido por liminar judicial.", correta: false },
      { letra: "C", texto: "depende de caução no valor integral da multa para ter efeito suspensivo.", correta: false },
      { letra: "D", texto: "terá efeito suspensivo de pleno direito até o seu julgamento final.", correta: true },
      { letra: "E", texto: "exige renúncia expressa a qualquer ação civil futura.", correta: false }
    ]
  }
];
