import { TAXONOMIA } from "./taxonomia.mjs";

export const rlmFisica01Questoes = [
  // Q1 - CEBRASPE / PRF - Tempo de Reação e Distância de Reação
  {
    idSlug: "rlm-001",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Considere que um policial rodoviário federal, ao conduzir uma viatura em patrulhamento a 108 km/h, avista um obstáculo na pista e apresenta um tempo de percepção e reação de 1,0 segundo antes de acionar efetivamente o sistema de freios. Nessa situação, a distância percorrida pela viatura durante o tempo de reação é igual a 30 metros.",
    explicacao: "GABARITO: CERTO. Durante o tempo de percepção e reação, o veículo continua em movimento retilíneo uniforme (MRU) com velocidade constante. Convertendo a velocidade para o Sistema Internacional (SI): v = 108 km/h ÷ 3,6 = 30 m/s. Aplicando a equação do espaço no MRU: d = v · t = 30 m/s · 1,0 s = 30 metros.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q2 - CEBRASPE / PRF - Distância de Frenagem e Coeficiente de Atrito
  {
    idSlug: "rlm-002",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Um automóvel trafegando a 72 km/h em pista horizontal e seca inicia uma frenagem de emergência com travamento total das rodas, deixando marcas de arrastamento no asfalto cujo coeficiente de atrito cinético é μ = 0,80. Considerando a aceleração da gravidade como g = 10 m/s², a distância de frenagem até o repouso completo do veículo é superior a 30 metros.",
    explicacao: "GABARITO: ERRADO. A velocidade inicial no SI é v₀ = 72 ÷ 3,6 = 20 m/s e a velocidade final v = 0. A desaceleração decorrente do atrito cinético é dada por |a| = μ · g = 0,80 · 10 = 8,0 m/s². Pela Equação de Torricelli: v² = v₀² - 2·|a|·d => 0 = 20² - 2·8·d => 16d = 400 => d = 25 metros. Como 25 m não é superior a 30 m, o item está incorreto.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },

  // Q3 - FGV / PM - Distância Total de Parada (Reação + Frenagem)
  {
    idSlug: "rlm-003",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante um deslocamento de emergência em rodovia plana, uma viatura da Polícia Militar transita a uma velocidade constante de 90 km/h. O motorista percebe um animal na pista e leva um tempo de reação de 0,8 segundo para acionar os freios. O sistema de freios produz uma desaceleração constante provocada por um coeficiente de atrito com a pista de μ = 0,625 (adote g = 10 m/s²). A distância total de parada (distância de reação somada à distância de frenagem) percorrida pela viatura desde a visualização do obstáculo até o repouso total é de:",
    explicacao: "GABARITO: C. Passo a passo: 1) Conversão da velocidade: v₀ = 90 km/h ÷ 3,6 = 25 m/s. 2) Distância de reação (MRU): d_reação = v₀ · t_r = 25 · 0,8 = 20 metros. 3) Desaceleração de frenagem: |a| = μ · g = 0,625 · 10 = 6,25 m/s². 4) Distância de frenagem (Torricelli): d_frenagem = v₀² / (2 · |a|) = 25² / (2 · 6,25) = 625 / 12,5 = 50 metros. 5) Distância total de parada: D_total = d_reação + d_frenagem = 20 + 50 = 70 metros.",
    alternativas: [
      { letra: "A", texto: "45 metros.", correta: false },
      { letra: "B", texto: "55 metros.", correta: false },
      { letra: "C", texto: "70 metros.", correta: true },
      { letra: "D", texto: "85 metros.", correta: false },
      { letra: "E", texto: "95 metros.", correta: false }
    ]
  },

  // Q4 - VUNESP / PC-SP - Estimativa Pericial de Velocidade por Marcas de Derrapagem
  {
    idSlug: "rlm-004",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Perito Criminal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em exame pericial de local de acidente de trânsito em pista asfáltica plana e seca, os peritos criminais mediram marcas retilíneas e contínuas de frenagem com bloqueio das quatro rodas deixadas por um automóvel com extensão de 40 metros até a imobilização completa. Sabendo que os ensaios dinamométricos no pavimento determinaram um coeficiente de atrito cinético de μ = 0,50 e adotando g = 10 m/s², a velocidade mínima estimada do veículo no momento em que iniciou o travamento das rodas era de:",
    explicacao: "GABARITO: C. Pela conservação de energia e trabalho da força de atrito (Equação de Torricelli na frenagem até a parada): v₀² = 2 · μ · g · d. Substituindo os valores periciais: v₀² = 2 · 0,50 · 10 · 40 = 1 · 10 · 40 = 400. Logo: v₀ = √400 = 20 m/s. Convertendo para km/h: v₀ = 20 · 3,6 = 72 km/h.",
    alternativas: [
      { letra: "A", texto: "54 km/h.", correta: false },
      { letra: "B", texto: "60 km/h.", correta: false },
      { letra: "C", texto: "72 km/h.", correta: true },
      { letra: "D", texto: "80 km/h.", correta: false },
      { letra: "E", texto: "90 km/h.", correta: false }
    ]
  },

  // Q5 - CEBRASPE / PRF - Proporcionalidade Quadrática da Distância de Frenagem
  {
    idSlug: "rlm-005",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Mantidas rigorosamente constantes as condições mecânicas do veículo, a aderência dos pneus e o coeficiente de atrito do pavimento, caso um condutor dobre a velocidade de circulação de seu automóvel (por exemplo, de 40 km/h para 80 km/h), a distância de frenagem necessária para imobilizar totalmente o veículo quadruplica.",
    explicacao: "GABARITO: CERTO. A distância de frenagem é deduzida da Equação de Torricelli (ou pelo Teorema da Energia Cinética): d = v₀² / (2·μ·g). Como a distância d é diretamente proporcional ao quadrado da velocidade inicial (v₀²), ao dobrar a velocidade (fator 2), a distância de frenagem é multiplicada por 2² = 4 (quadruplica).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q6 - IBFC / GM - Velocidade Média Harmônica em Trechos Iguais
  {
    idSlug: "rlm-006",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Uma viatura da Guarda Municipal realiza patrulhamento ao longo de um corredor metropolitano de 120 km de extensão. Na primeira metade do trajeto (60 km), a viatura mantém velocidade média de 60 km/h; na segunda metade (60 km), devido a intervenções no tráfego e vias estreitas, a velocidade média cai para 40 km/h. A velocidade média global da viatura em todo o percurso de 120 km foi de:",
    explicacao: "GABARITO: B. A velocidade média é a razão entre o deslocamento total e o tempo total decorrido (V_m = ΔS_total / Δt_total): 1) Tempo do 1º trecho: t₁ = 60 km ÷ 60 km/h = 1,0 h. 2) Tempo do 2º trecho: t₂ = 60 km ÷ 40 km/h = 1,5 h. 3) Tempo total: Δt = 1,0 + 1,5 = 2,5 h. 4) Velocidade média global: V_m = 120 km ÷ 2,5 h = 48 km/h. Trata-se da média harmônica entre 60 e 40: (2 · 60 · 40) / (60 + 40) = 4800 / 100 = 48 km/h.",
    alternativas: [
      { letra: "A", texto: "50 km/h.", correta: false },
      { letra: "B", texto: "48 km/h.", correta: true },
      { letra: "C", texto: "45 km/h.", correta: false },
      { letra: "D", texto: "52 km/h.", correta: false },
      { letra: "E", texto: "44 km/h.", correta: false }
    ]
  },

  // Q7 - CEBRASPE / PRF - Conservação da Quantidade de Movimento em Colisão Frontal Inelástica
  {
    idSlug: "rlm-007",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em uma colisão frontal perfeitamente inelástica em rodovia reta, um caminhão de massa 6.000 kg que trafega para a direita a 54 km/h (15 m/s) colide frontalmente com um automóvel de massa 1.500 kg que trafega em sentido oposto (para a esquerda) a 72 km/h (20 m/s). Considerando o sistema isolado durante o impacto imediato, após a colisão os dois veículos permanecerão engavetados e se moverão juntos para a direita com velocidade escalar de 8,0 m/s (28,8 km/h).",
    explicacao: "GABARITO: CERTO. Pelo princípio da conservação da quantidade de movimento (momento linear): Q_inicial = Q_final. Adotando o sentido para a direita como positivo: Q_caminhão = m₁ · v₁ = 6.000 · (+15) = +90.000 kg·m/s; Q_automóvel = m₂ · v₂ = 1.500 · (-20) = -30.000 kg·m/s. Q_total_inicial = +90.000 - 30.000 = +60.000 kg·m/s. Na colisão perfeitamente inelástica, as massas se unem: M_total = 6.000 + 1.500 = 7.500 kg. Logo: V_final = Q_total / M_total = 60.000 / 7.500 = +8,0 m/s. Como o sinal é positivo, movem-se para a direita a 8,0 m/s (8 · 3,6 = 28,8 km/h).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q8 - FGV / CBM - Trabalho da Força de Atrito e Dissipação de Energia Cinética
  {
    idSlug: "rlm-008",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial do Corpo de Bombeiros Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um caminhão auto bomba tanque de combate a incêndio com massa total de 10.000 kg desloca-se a uma velocidade de 72 km/h em pista horizontal quando precisa frear bruscamente até a parada total para evitar um soterramento na via. O módulo do trabalho mecânico total realizado pela força de atrito para dissipar a energia cinética do caminhão até a imobilização completa é igual a:",
    explicacao: "GABARITO: B. Pelo Teorema do Trabalho e da Energia Cinética: W_atrito = ΔEc = Ec_final - Ec_inicial. Como o caminhão atinge o repouso, Ec_final = 0. Velocidade inicial em m/s: v₀ = 72 km/h ÷ 3,6 = 20 m/s. Ec_inicial = (1/2) · m · v₀² = 0,5 · 10.000 · (20)² = 5.000 · 400 = 2.000.000 J = 2,0 × 10⁶ J (2,0 MJ). Portanto, o módulo do trabalho realizado pelas forças de atrito é de 2,0 × 10⁶ J.",
    alternativas: [
      { letra: "A", texto: "1,0 × 10⁶ J.", correta: false },
      { letra: "B", texto: "2,0 × 10⁶ J.", correta: true },
      { letra: "C", texto: "4,0 × 10⁶ J.", correta: false },
      { letra: "D", texto: "5,0 × 10⁵ J.", correta: false },
      { letra: "E", texto: "8,0 × 10⁶ J.", correta: false }
    ]
  },

  // Q9 - VUNESP / PM - Ultrapassagem e Cinemática do Movimento Relativo
  {
    idSlug: "rlm-009",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em uma rodovia de pista simples, uma viatura da Polícia Militar de 5 metros de comprimento transita a uma velocidade constante de 108 km/h e inicia a ultrapassagem de um caminhão-cegonha de 25 metros de comprimento que transita a uma velocidade constante de 72 km/h no mesmo sentido. A manobra se inicia no instante em que a frente da viatura se alinha com a traseira do caminhão e termina no instante em que a traseira da viatura se alinha com a frente do caminhão. O tempo necessário para a conclusão dessa ultrapassagem é de:",
    explicacao: "GABARITO: C. Conversão para m/s: v_viatura = 108 ÷ 3,6 = 30 m/s; v_caminhão = 72 ÷ 3,6 = 20 m/s. Velocidade relativa entre os veículos: v_rel = 30 - 20 = 10 m/s. Distância relativa total a ser percorrida para ultrapassagem completa de corpos extensos: D_rel = Comprimento_caminhão + Comprimento_viatura = 25 + 5 = 30 metros. Tempo de ultrapassagem: Δt = D_rel / v_rel = 30 m / 10 m/s = 3,0 segundos.",
    alternativas: [
      { letra: "A", texto: "2,0 segundos.", correta: false },
      { letra: "B", texto: "2,5 segundos.", correta: false },
      { letra: "C", texto: "3,0 segundos.", correta: true },
      { letra: "D", texto: "4,0 segundos.", correta: false },
      { letra: "E", texto: "5,0 segundos.", correta: false }
    ]
  },

  // Q10 - CEBRASPE / PRF - Aquaplanagem e Perda de Aderência
  {
    idSlug: "rlm-010",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "A aquaplanagem (ou hidroplanagem) ocorre quando uma película de água se interpõe entre a banda de rodagem dos pneus e a superfície da pista, reduzindo drasticamente o coeficiente de atrito a valores próximos de zero. Sob a ótica da Primeira Lei de Newton, ao perder o contato direto com o solo, o veículo tende a manter seu estado de movimento em linha reta e velocidade constante pela inércia, anulando a eficácia do esterçamento e da frenagem.",
    explicacao: "GABARITO: CERTO. A aquaplanagem anula a força de atrito estático/cinético lateral e longitudinal gerada pelo contato pneu-solo. Na ausência de forças resultantes horizontais capazes de alterar a trajetória do veículo, prevalece o princípio da inércia (1ª Lei de Newton), mantendo o veículo em movimento retilíneo uniforme na direção que possuía no momento do descolamento da pista.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q11 - FGV / PM - Colisão Perpendicular em Cruzamento e Perícia de Vetores
  {
    idSlug: "rlm-011",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em um cruzamento ortogonal plano (90°), o veículo A (massa 1.000 kg) trafegava no sentido Sul-Norte e colidiu com o veículo B (massa 1.000 kg) que trafegava no sentido Oeste-Leste. Após o impacto perfeitamente inelástico, os dois veículos engavetados deslizaram juntos em linha reta no sentido Nordeste (ângulo de 45° com os eixos ortogonais) com uma velocidade conjunta de 10√2 m/s (cerca de 14,14 m/s). A perícia de trânsito concluiu que a velocidade do veículo A imediatamente antes da colisão era de:",
    explicacao: "GABARITO: C. Pela conservação da quantidade de movimento vetorial: Q_inicial_vetorial = Q_final_vetorial. 1) Componente final em X (Leste): V_fx = V_f · cos(45°) = 10√2 · (√2/2) = 10 m/s. 2) Componente final em Y (Norte): V_fy = V_f · sen(45°) = 10√2 · (√2/2) = 10 m/s. 3) No eixo Y (Sul-Norte), apenas o veículo A possuía momento linear antes da colisão: m_A · v_A = (m_A + m_B) · V_fy => 1.000 · v_A = (1.000 + 1.000) · 10 => 1.000 · v_A = 2.000 · 10 => v_A = 20 m/s. Convertendo para km/h: v_A = 20 · 3,6 = 72 km/h.",
    alternativas: [
      { letra: "A", texto: "36 km/h.", correta: false },
      { letra: "B", texto: "54 km/h.", correta: false },
      { letra: "C", texto: "72 km/h.", correta: true },
      { letra: "D", texto: "90 km/h.", correta: false },
      { letra: "E", texto: "108 km/h.", correta: false }
    ]
  },

  // Q12 - IBFC / GM - Aceleração Constante em Perseguição (MRUV)
  {
    idSlug: "rlm-012",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Uma viatura da Guarda Municipal, inicialmente parada em um ponto de observação (repouso), arranca com aceleração escalar constante de 2,5 m/s² para interceptar um veículo em fuga. Ao final de 8 segundos de aceleração ininterrupta, a distância percorrida pela viatura e a sua velocidade instantânea são, respectivamente:",
    explicacao: "GABARITO: A. No Movimento Retilíneo Uniformemente Variado (MRUV) partindo do repouso (v₀ = 0): 1) Distância percorrida: d = v₀·t + (1/2)·a·t² = 0 + 0,5 · 2,5 · (8)² = 1,25 · 64 = 80 metros. 2) Velocidade final: v = v₀ + a·t = 0 + 2,5 · 8 = 20 m/s. Convertendo a velocidade para km/h: v = 20 · 3,6 = 72 km/h. Logo, os valores são 80 metros e 72 km/h.",
    alternativas: [
      { letra: "A", texto: "80 metros e 72 km/h.", correta: true },
      { letra: "B", texto: "80 metros e 54 km/h.", correta: false },
      { letra: "C", texto: "100 metros e 72 km/h.", correta: false },
      { letra: "D", texto: "64 metros e 60 km/h.", correta: false },
      { letra: "E", texto: "100 metros e 90 km/h.", correta: false }
    ]
  },

  // Q13 - CEBRASPE / PRF - Dinâmica de Frenagem em Declive (Descida)
  {
    idSlug: "rlm-013",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em uma rodovia em declive acentuado (trecho em descida), a componente tangencial da força peso do veículo atua a favor do movimento, o que reduz a desaceleração resultante e, consequentemente, aumenta a distância necessária para a frenagem completa em relação a uma pista plana com o mesmo coeficiente de atrito.",
    explicacao: "GABARITO: CERTO. Em uma rampa inclinada com ângulo θ em declive, a força resultante de frenagem é F_res = F_atrito - P_tangencial = μ·m·g·cos(θ) - m·g·sen(θ). A desaceleração resultante fica reduzida a |a| = g·(μ·cos(θ) - sen(θ)). Sendo a desaceleração menor, pela Equação de Torricelli (d = v₀² / 2|a|), a distância de parada é significativamente maior do que na pista horizontal.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q14 - VUNESP / PC-SP - Frenagem com Velocidade Residual de Impacto
  {
    idSlug: "rlm-014",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Perito Criminal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Um condutor trafega com seu veículo a uma velocidade de 90 km/h (25 m/s) quando visualiza um poste rígido a exatamente 40 metros de distância e imediatamente aciona os freios com travamento total. A desaceleração imposta pelo atrito com a pista é de 5,0 m/s² (|a| = 5 m/s²). O veículo colide contra o poste com uma velocidade residual de impacto igual a:",
    explicacao: "GABARITO: C. Aplicando a Equação de Torricelli para o trecho de 40 metros percorrido durante a frenagem: v² = v₀² - 2 · |a| · d. Substituindo os valores conhecidos: v² = (25)² - 2 · (5,0) · (40) => v² = 625 - 400 => v² = 225 => v = √225 = 15 m/s. Convertendo para km/h: v = 15 · 3,6 = 54 km/h.",
    alternativas: [
      { letra: "A", texto: "36 km/h (10 m/s).", correta: false },
      { letra: "B", texto: "45 km/h (12,5 m/s).", correta: false },
      { letra: "C", texto: "54 km/h (15 m/s).", correta: true },
      { letra: "D", texto: "60 km/h (16,7 m/s).", correta: false },
      { letra: "E", texto: "72 km/h (20 m/s).", correta: false }
    ]
  },

  // Q15 - CEBRASPE / PRF - Força Centrípeta e Velocidade Crítica em Curva Plana
  {
    idSlug: "rlm-015",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em uma curva horizontal plana (sem inclinação transversal de sobrelevação) com raio de curvatura de 100 metros em uma rodovia federal, considerando g = 10 m/s² e coeficiente de atrito estático pneu-asfalto de μ = 0,40, a velocidade máxima que um veículo pode desenvolver na curva sem derrapar lateralmente para fora da pista é de 72 km/h (20 m/s).",
    explicacao: "GABARITO: CERTO. A força resultante centrípeta em curva plana sem sobrelevação é provida exclusivamente pela força de atrito estático lateral: F_cp = F_atrito => m·v²/R = μ·m·g => v = √(μ·g·R). Substituindo os valores: v = √(0,40 · 10 · 100) = √400 = 20 m/s. Convertendo para km/h: v = 20 · 3,6 = 72 km/h.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },

  // Q16 - FGV / PM - Alcance e Interceptação em Perseguição Policial
  {
    idSlug: "rlm-016",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um veículo suspeito passa em frente a um posto policial rodoviário desenvolvendo velocidade constante de 20 m/s (72 km/h). No exato instante da passagem (t = 0), uma viatura da PM parada no posto inicia perseguição ao suspeito com aceleração constante de 4,0 m/s² na mesma direção e sentido. O tempo necessário para a viatura emparelhar com o veículo suspeito e a distância percorrida pela viatura desde o ponto de partida são, respectivamente:",
    explicacao: "GABARITO: B. 1) Função horária do veículo suspeito (MRU): S_s = 20 · t. 2) Função horária da viatura (MRUV com v₀ = 0): S_v = (1/2) · a · t² = 0,5 · 4 · t² = 2 · t². 3) No instante do encontro (S_v = S_s): 2 · t² = 20 · t => 2t² - 20t = 0 => 2t(t - 10) = 0. Para t > 0, temos t = 10 segundos. 4) Distância percorrida: S_v = 2 · (10)² = 2 · 100 = 200 metros (ou S_s = 20 · 10 = 200 m).",
    alternativas: [
      { letra: "A", texto: "8 segundos e 160 metros.", correta: false },
      { letra: "B", texto: "10 segundos e 200 metros.", correta: true },
      { letra: "C", texto: "10 segundos e 250 metros.", correta: false },
      { letra: "D", texto: "12 segundos e 240 metros.", correta: false },
      { letra: "E", texto: "15 segundos e 300 metros.", correta: false }
    ]
  },

  // Q17 - IBFC / CBM - Conservação de Energia Mecânica e Queda Livre
  {
    idSlug: "rlm-017",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Em uma operação de resgate veicular em rodovia montanhosa, os bombeiros militares constatam que um veículo desgovernado despencou de uma ribanceira de 20 metros de altura vertical a partir do repouso. Desprezando a resistência do ar e considerando a aceleração da gravidade g = 10 m/s², a velocidade com que o veículo atingiu a base da ribanceira foi de:",
    explicacao: "GABARITO: C. Pela conservação da energia mecânica em queda livre: E_potencial = E_cinética => m·g·h = (1/2)·m·v² => v = √(2·g·h). Substituindo g = 10 m/s² e h = 20 m: v = √(2 · 10 · 20) = √400 = 20 m/s. Convertendo para km/h: v = 20 · 3,6 = 72 km/h.",
    alternativas: [
      { letra: "A", texto: "10 m/s (36 km/h).", correta: false },
      { letra: "B", texto: "15 m/s (54 km/h).", correta: false },
      { letra: "C", texto: "20 m/s (72 km/h).", correta: true },
      { letra: "D", texto: "25 m/s (90 km/h).", correta: false },
      { letra: "E", texto: "30 m/s (108 km/h).", correta: false }
    ]
  },

  // Q18 - CEBRASPE / PRF - Terceira Lei de Newton em Colisões com Massas Discrepantes
  {
    idSlug: "rlm-018",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em uma colisão frontal entre uma carreta de 30 toneladas e um automóvel de 1 tonelada, a intensidade da força média de impacto exercida pela carreta sobre o automóvel é 30 vezes maior do que a força que o automóvel exerce sobre a carreta, justificando os danos estruturais mais severos observados no automóvel.",
    explicacao: "GABARITO: ERRADO. Pela Terceira Lei de Newton (Ação e Reação), as forças trocadas entre dois corpos durante uma colisão constituem um par de ação e reação com RIGOROSAMENTE A MESMA INTENSIDADE, mesma direção e sentidos opostos (|F_carreta| = |F_automóvel|). A assimetria nos danos decorre da Segunda Lei de Newton (a = F/m): como o automóvel tem massa 30 vezes menor, sofre uma desaceleração 30 vezes maior sob a mesma força de impacto.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },

  // Q19 - VUNESP / PM - Teorema do Impulso e Força de Desaceleração
  {
    idSlug: "rlm-019",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em um teste de segurança veicular, um motorista de 70 kg colide frontalmente a 108 km/h (30 m/s) contra uma barreira de contenção deformável. O acionamento do airbag e o estiramento controlado do cinto de segurança prolongam o tempo de desaceleração do corpo até a imobilização completa para Δt = 0,14 segundo. A intensidade média da força exercida pelos dispositivos de retenção sobre o motorista durante o impacto é de:",
    explicacao: "GABARITO: C. Pelo Teorema do Impulso: I = ΔQ => F_média · Δt = m · (v_final - v_inicial). Em módulo: |F_média| · 0,14 = 70 · |0 - 30| => |F_média| · 0,14 = 2.100 N·s => |F_média| = 2.100 / 0,14 = 210.000 / 14 = 15.000 N (15 kN).",
    alternativas: [
      { letra: "A", texto: "7.500 N.", correta: false },
      { letra: "B", texto: "10.500 N.", correta: false },
      { letra: "C", texto: "15.000 N.", correta: true },
      { letra: "D", texto: "21.000 N.", correta: false },
      { letra: "E", texto: "30.000 N.", correta: false }
    ]
  },

  // Q20 - CEBRASPE / PRF - Lançamento Horizontal de Destroços e Projeção Forense
  {
    idSlug: "rlm-020",
    disciplina_id: TAXONOMIA.disciplinas.rlm,
    assunto_id: TAXONOMIA.assuntos.fisica_transito,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em uma perícia de acidente de trânsito, constatou-se que um fragmento rígido de lanterna se desprendeu do veículo e foi projetado horizontalmente a partir de uma altura de 1,25 metro com velocidade de 20 m/s. Desprezando a resistência do ar e adotando g = 10 m/s², o fragmento atingirá o solo a uma distância horizontal de 10 metros do ponto de desprendimento.",
    explicacao: "GABARITO: CERTO. No lançamento horizontal: 1) Movimento vertical (queda livre): h = (1/2)·g·t² => 1,25 = 0,5 · 10 · t² => 5t² = 1,25 => t² = 0,25 => t_queda = 0,5 segundo. 2) Movimento horizontal (MRU): X = v₀x · t_queda = 20 m/s · 0,5 s = 10 metros. Portanto, o alcance horizontal até tocar o solo é exatamente 10 metros.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  }
];
