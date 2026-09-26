import { TAXONOMIA } from "./taxonomia.mjs";

export const transito03Questoes = [
  // Q51 - CEBRASPE / PRF - Embriaguez ao Volante (Art. 306 do CTB) e Meios de Prova
  {
    idSlug: "trans-051",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de embriaguez ao volante (art. 306 do CTB) é de perigo abstrato e configura-se quando o condutor conduz veículo automotor com capacidade psicomotora alterada em razão da influência de álcool ou de outra substância psicoativa, podendo a alteração ser comprovada tanto por teste de etilômetro (concentração igual ou superior a 0,30 mg de álcool por litro de ar alveolar) quanto por exame clínico, perícia, vídeo, prova testemunhal ou outros meios admitidos em direito.",
    explicacao: "GABARITO: CERTO. Art. 306, §§ 1º e 2º, do CTB (com alterações da Lei nº 12.760/2012 e jurisprudência pacífica do STJ - Tema 1.085/STJ). Trata-se de crime de perigo abstrato, dispensando demonstração de perigo concreto de dano à incolumidade alheia.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q52 - CEBRASPE / PRF - Homicídio Culposo Qualificado por Embriaguez (Art. 302, § 3º)
  {
    idSlug: "trans-052",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No crime de homicídio culposo na direção de veículo automotor qualificado pela embriaguez ao volante (art. 302, § 3º, do CTB), com pena de reclusão de 5 a 8 anos, a Lei nº 14.071/2020 vedou expressamente a substituição da pena privativa de liberdade por penas restritivas de direitos (art. 312-B do CTB).",
    explicacao: "GABARITO: CERTO. A Lei nº 14.071/2020 inseriu o art. 312-B no CTB, determinando que aos crimes previstos no § 3º do art. 302 (homicídio culposo sob influência de álcool) e no § 2º do art. 303 (lesão corporal culposa grave/gravíssima sob influência de álcool) não se aplica a substituição por penas restritivas de direitos do art. 44 do Código Penal.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q53 - FGV / PM - Omissão de Socorro no Trânsito (Art. 304 do CTB)
  {
    idSlug: "trans-053",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O condutor de um veículo automotor que, por ocasião de acidente de trânsito em que esteve envolvido, deixa de prestar imediato socorro à vítima, ou, não podendo fazê-lo diretamente por justa causa, deixa de solicitar auxílio da autoridade pública (art. 304 do CTB):",
    explicacao: "GABARITO: B. Art. 304, parágrafo único, do CTB: 'Incide nas penas deste artigo ainda que a sua omissão seja suprida por terceiros ou que o socorro seja desnecessário em virtude de ter ocorrido morte instantânea ou em razão de a vítima ter tido apenas ferimentos leves'. O crime de omissão de socorro no CTB pune a conduta omissiva própria do condutor envolvido no sinistro.",
    alternativas: [
      { letra: "A", texto: "fica isento de pena se a vítima tiver morte instantânea comprovada por perícia médica.", correta: false },
      { letra: "B", texto: "comete crime autônomo, incidindo nas penas mesmo que o socorro venha a ser prestado por terceiros presentes no local.", correta: true },
      { letra: "C", texto: "só responde pelo crime se tiver agido com culpa grave na causação do sinistro.", correta: false },
      { letra: "D", texto: "comete mera infração administrativa quando a vítima sofrer escoriações leves.", correta: false },
      { letra: "E", texto: "responde subsidiariamente pelo crime de prevaricação.", correta: false }
    ]
  },
  // Q54 - CEBRASPE / PRF - Fuga do Local do Acidente (Art. 305 do CTB)
  {
    idSlug: "trans-054",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal declarou a constitucionalidade do art. 305 do CTB (afastar-se o condutor do veículo do local do acidente para fugir à responsabilidade penal ou civil), fixando a tese de que a tipificação não viola o princípio da não autoincriminação (nemo tenetur se detegere).",
    explicacao: "GABARITO: CERTO. No julgamento do RE 971.959 (Tema 907 do STF), o plenário do STF firmou a tese de que: 'A regra que prevê a tipificação do crime de fuga do local do acidente (art. 305 do CTB) é compatível com a Constituição Federal, não violando o direito à não autoincriminação'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q55 - VUNESP / PM - Racha / Disputa Automobilística não Autorizada (Art. 308 do CTB)
  {
    idSlug: "trans-055",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Participar, na direção de veículo automotor, em via pública, de corrida, disputa ou competição automobilística não autorizada pela autoridade competente, gerando situação de risco à incolumidade pública ou privada (art. 308 do CTB):",
    explicacao: "GABARITO: C. Art. 308 do CTB: crime de perigo concreto ('gerando situação de risco à incolumidade pública ou privada'). Se da prática resulta lesão corporal de natureza grave, a pena é de reclusão de 3 a 6 anos (§ 1º); se resulta morte, a pena é de reclusão de 5 a 10 anos (§ 2º), tratando-se de crimes preterdolosos (dolo no racha e culpa no resultado).",
    alternativas: [
      { letra: "A", texto: "é crime de perigo abstrato, punível mesmo se a via estiver completamente deserta e interditada.", correta: false },
      { letra: "B", texto: "exige para sua tipificação o envolvimento mínimo de quatro veículos concorrentes.", correta: false },
      { letra: "C", texto: "é crime de perigo concreto, qualificado com penas de reclusão caso resulte lesão corporal grave ou morte.", correta: true },
      { letra: "D", texto: "só é punível quando realizado em rodovias federais ou estaduais.", correta: false },
      { letra: "E", texto: "tem natureza de contravenção penal de menor potencial ofensivo.", correta: false }
    ]
  },
  // Q56 - CEBRASPE / PRF - Direção sem Habilitação Gerando Perigo de Dano (Art. 309)
  {
    idSlug: "trans-056",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Dirigir veículo automotor, em via pública, sem a devida Permissão para Dirigir ou Habilitação, ou ainda se cassado o direito de dirigir, só configura crime de trânsito (art. 309 do CTB) se da conduta decorrer perigo concreto de dano.",
    explicacao: "GABARITO: CERTO. O art. 309 do CTB exige expressamente a circunstância de 'gerando perigo de dano' (crime de perigo concreto, Súmula 720 do STF). A mera condução sem habilitação de forma prudente e sem gerar risco imediato a terceiros é mera infração administrativa do art. 162, I, do CTB.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q57 - FGV / PM - Entrega de Veículo a Pessoa Não Habilitada (Art. 310) e Súmula 575/STJ
  {
    idSlug: "trans-057",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "De acordo com o art. 310 do CTB e a Súmula 575 do Superior Tribunal de Justiça, o crime de entregar a direção de veículo automotor a pessoa não habilitada, com habilitação cassada ou com o direito de dirigir suspenso, ou a quem não esteja em condições de conduzi-lo com segurança:",
    explicacao: "GABARITO: A. Súmula 575 do STJ: 'Constitui crime de perigo abstrato a conduta de permitir, confiar ou entregar a direção de veículo automotor a pessoa não habilitada, com habilitação cassada ou com o direito de dirigir suspenso, ou, ainda, a quem não esteja, por seu estado de saúde, física ou mental, ou por embriaguez, em condições de conduzi-lo com segurança (art. 310 do CTB)'. Dispensa perigo concreto.",
    alternativas: [
      { letra: "A", texto: "é crime de perigo abstrato, sendo desnecessária a demonstração de perigo concreto de dano.", correta: true },
      { letra: "B", texto: "é crime de perigo concreto, exigindo manobra arriscada ou quase colisão.", correta: false },
      { letra: "C", texto: "é conduta atípica penalmente, punível apenas na esfera cível.", correta: false },
      { letra: "D", texto: "só se consuma se ocorrer colisão com dano patrimonial ou físico.", correta: false },
      { letra: "E", texto: "só é punível se a pessoa que recebeu o veículo for menor de 14 anos.", correta: false }
    ]
  },
  // Q58 - CEBRASPE / PRF - Velocidade Incompatível Próximo a Escolas / Hospitais (Art. 311)
  {
    idSlug: "trans-058",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime do art. 311 do CTB (trafegar em velocidade incompatível com a segurança nas proximidades de escolas, hospitais, estações de embarque e desembarque ou onde haja grande movimentação de pessoas) é de perigo concreto e exige a comprovação de efetivo risco à segurança de terceiros.",
    explicacao: "GABARITO: CERTO. Art. 311 do CTB: 'Trafegar em velocidade incompatível com a segurança nas proximidades de escolas, hospitais, estações de embarque e desembarque de passageiros, logradouros estreitos, ou onde haja grande movimentação ou concentração de pessoas, gerando perigo de dano'. A presença da elementar 'gerando perigo de dano' classifica-o como crime de perigo concreto.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q59 - IBFC / GM - Causa de Aumento de Pena no Homicídio Culposo no Trânsito
  {
    idSlug: "trans-059",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No homicídio culposo cometido na direção de veículo automotor (art. 302, § 1º, do CTB), a pena é aumentada de 1/3 (um terço) à metade se o agente:",
    explicacao: "GABARITO: E. Art. 302, § 1º, do CTB lista como causas de aumento de 1/3 à metade: I - não possuir Permissão para Dirigir ou CNH; II - praticá-lo em faixa de pedestres ou na calçada; III - deixar de prestar socorro à vítima, quando possível sem risco pessoal; IV - no exercício de sua profissão ou atividade, estiver conduzindo veículo de transporte de passageiros.",
    alternativas: [
      { letra: "A", texto: "estiver conduzindo veículo com licenciamento anual em atraso.", correta: false },
      { letra: "B", texto: "for proprietário de veículo importado ou de alto valor de mercado.", correta: false },
      { letra: "C", texto: "estiver com luz de freio inoperante no momento da colisão.", correta: false },
      { letra: "D", texto: "trafegar sem o estepe ou chave de roda.", correta: false },
      { letra: "E", texto: "praticá-lo em faixa de pedestres ou na calçada.", correta: true }
    ]
  },
  // Q60 - CEBRASPE / PRF - Aplicação da Lei 9.099/95 nos Crimes de Trânsito
  {
    idSlug: "trans-060",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Aos crimes de trânsito de lesão corporal culposa não se aplicam os institutos despenalizadores da Lei nº 9.099/95 (composição civil, transação penal e exigência de representação) se o agente estiver sob a influência de álcool, participando de racha ou transitando em velocidade superior à máxima permitida em mais de 50 km/h.",
    explicacao: "GABARITO: CERTO. Art. 291, § 1º, do CTB: aos crimes de lesão corporal culposa de trânsito aplicam-se os arts. 74, 76 e 88 da Lei nº 9.099/95, EXCETO se o agente estiver: I - sob influência de álcool ou substância psicoativa; II - participando de corrida, disputa ou competição não autorizada (racha); III - transitando em velocidade superior à máxima permitida para a via em 50 km/h. Nesses três casos, a ação é pública incondicionada e não cabe transação penal.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q61 - VUNESP / PM - Fraude Processual no Local de Acidente de Trânsito (Art. 312)
  {
    idSlug: "trans-061",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Inovar artificiosamente, em caso de acidente automobilístico com vítima, na pendência do respectivo procedimento policial preparatório, inquérito policial ou processo penal, o estado de lugar, de coisa ou de pessoa, a fim de induzir a erro o agente policial, o perito, ou o juiz (art. 312 do CTB):",
    explicacao: "GABARITO: D. Art. 312 do CTB tipifica a inovação artificiosa em acidente de trânsito com vítima (fraude processual específica do trânsito), com pena de detenção de 6 meses a 1 ano ou multa, aplicável ainda que não iniciados o inquérito ou processo.",
    alternativas: [
      { letra: "A", texto: "é infração administrativa punida exclusivamente com apreensão da CNH.", correta: false },
      { letra: "B", texto: "só se caracteriza se a inovação for praticada por funcionário público de trânsito.", correta: false },
      { letra: "C", texto: "constitui conduta atípica se o autor for o próprio condutor causador do sinistro.", correta: false },
      { letra: "D", texto: "configura crime de trânsito com pena de detenção ou multa, independentemente de já haver inquérito ou processo instaurado.", correta: true },
      { letra: "E", texto: "restringe-se a sinistros em que tenha havido colisão contra patrimônio da União.", correta: false }
    ]
  },
  // Q62 - CEBRASPE / PRF - Penalidade Cumulativa de Suspensão ou Proibição de Dirigir
  {
    idSlug: "trans-062",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A penalidade judicial de suspensão ou de proibição de se obter a permissão ou a habilitação para dirigir veículo automotor, prevista no art. 292 do CTB, tem duração de dois meses a cinco anos.",
    explicacao: "GABARITO: CERTO. Art. 293 do CTB: 'A penalidade de suspensão ou de proibição de se obter a permissão ou a habilitação, para dirigir veículo automotor, tem a duração de dois meses a cinco anos'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q63 - FGV / PM - Prisão em Flagrante e Socorro Prestado (Art. 301 do CTB)
  {
    idSlug: "trans-063",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Ao condutor de veículo que cometer crime de trânsito culposo do qual resulte vítima, segundo o art. 301 do CTB, NÃO se imporá a prisão em flagrante, nem se exigirá fiança, se ele:",
    explicacao: "GABARITO: B. Art. 301 do CTB: 'Ao condutor de veículo, nos casos de acidentes de trânsito de que resulte vítima, não se imporá a prisão em flagrante, nem se exigirá fiança, se prestar pronto e integral socorro àquela, ou providenciar a prestação de socorro'.",
    alternativas: [
      { letra: "A", texto: "fugir imediatamente para se apresentar com advogado após 24 horas.", correta: false },
      { letra: "B", texto: "prestar pronto e integral socorro à vítima, ou providenciar a prestação de socorro.", correta: true },
      { letra: "C", texto: "possuir residência fixa e bons antecedentes criminais.", correta: false },
      { letra: "D", texto: "pagar no ato as despesas médicas e hospitalares da vítima.", correta: false },
      { letra: "E", texto: "assinar termo circunstanciado independentemente de estar alcoolizado.", correta: false }
    ]
  },
  // Q64 - CEBRASPE / PRF - Violação da Suspensão Judicial do Direito de Dirigir (Art. 307)
  {
    idSlug: "trans-064",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O crime do art. 307 do CTB pune a conduta de violar a suspensão ou a proibição de se obter a permissão ou a habilitação para dirigir veículo automotor imposta por decisão judicial, não abrangendo a violação de suspensão imposta exclusivamente na esfera administrativa pelo DETRAN.",
    explicacao: "GABARITO: CERTO. Jurisprudência pacificada do STJ (RHC 133.567/RS e súmula persuasiva da 3ª Seção): o tipo penal do art. 307 do CTB exige que a suspensão ou proibição tenha sido imposta com fundamento no Código de Trânsito por decisão judicial. A condução com CNH suspensa pelo órgão executivo de trânsito (DETRAN) constitui infração administrativa (art. 162, II) e gera a cassação da CNH (art. 263, I), sendo atípica para o art. 307.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q65 - IBFC / GM - Lesão Corporal Culposa na Direção de Veículo (Art. 303 do CTB)
  {
    idSlug: "trans-065",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Praticar lesão corporal culposa na direção de veículo automotor constitui crime previsto no art. 303 do CTB. Se o condutor estiver sob a influência de álcool ou de qualquer outra substância psicoativa que determine dependência, e do crime resultar lesão corporal de natureza grave ou gravíssima (§ 2º), a pena privativa de liberdade será de:",
    explicacao: "GABARITO: A. Art. 303, § 2º, do CTB (com redação da Lei nº 13.546/2017): 'A pena privativa de liberdade é de reclusão de dois a cinco anos, sem prejuízo das outras penas cominadas se o agente conduz o veículo com capacidade psicomotora alterada em razão da influência de álcool ou de outra substância psicoativa (...) e se do crime resultar lesão corporal de natureza grave ou gravíssima'.",
    alternativas: [
      { letra: "A", texto: "reclusão de 2 a 5 anos.", correta: true },
      { letra: "B", texto: "detenção de 6 meses a 2 anos.", correta: false },
      { letra: "C", texto: "reclusão de 10 a 20 anos.", correta: false },
      { letra: "D", texto: "prestação de serviços à comunidade por 6 meses.", correta: false },
      { letra: "E", texto: "simples multa e recolhimento da habilitação.", correta: false }
    ]
  },
  // Q66 - CEBRASPE / PRF - Agravantes Genéricas nos Crimes de Trânsito (Art. 298)
  {
    idSlug: "trans-066",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "São circunstâncias que sempre agravam as penalidades dos crimes de trânsito ter o condutor cometido a infração com dano potencial para duas ou mais pessoas ou com grande risco de grave dano patrimonial a terceiros.",
    explicacao: "GABARITO: CERTO. Art. 298, I, do CTB estabelece como agravante genérica dos crimes de trânsito ter o agente cometido a infração: 'I - com dano potencial para duas ou mais pessoas ou com grande risco de grave dano patrimonial a terceiros'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q67 - VUNESP / PM - Crime de Trânsito em Veículo com Placa Adulterada
  {
    idSlug: "trans-067",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Cometer crime de trânsito utilizando veículo sem placas, com placas falsas ou adulteradas configura, nos termos do art. 298, III, do CTB:",
    explicacao: "GABARITO: C. Art. 298, III, do CTB: constitui circunstância agravante de pena nos crimes de trânsito ter o agente cometido a infração utilizando veículo sem placas, com placas falsas ou adulteradas.",
    alternativas: [
      { letra: "A", texto: "causa de exclusão de culpabilidade.", correta: false },
      { letra: "B", texto: "causa de diminuição obrigatória da pena em metade.", correta: false },
      { letra: "C", texto: "circunstância que sempre agrava a penalidade imposta na sentença penal.", correta: true },
      { letra: "D", texto: "excludente de ilicitude por estrito cumprimento do dever legal.", correta: false },
      { letra: "E", texto: "mera irregularidade processual sem reflexo na dosimetria.", correta: false }
    ]
  },
  // Q68 - CEBRASPE / PRF - Suspensão Cautelar da Habilitação pelo Juiz
  {
    idSlug: "trans-068",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em qualquer fase da investigação ou da ação penal, havendo necessidade para a garantia da ordem pública, poderá o juiz, como medida cautelar, de ofício ou a requerimento do Ministério Público ou por representação da autoridade policial, decretar a suspensão da permissão ou da habilitação para dirigir veículo automotor.",
    explicacao: "GABARITO: CERTO. Art. 294 do CTB: 'Em qualquer fase da investigação ou da ação penal, havendo necessidade para a garantia da ordem pública, poderá o juiz, como medida cautelar, de ofício, ou a requerimento do Ministério Público ou ainda mediante representação da autoridade policial, decretar, em decisão motivada, a suspensão da permissão ou da habilitação para dirigir veículo automotor, ou a proibição de sua obtenção'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q69 - FGV / PM - Perdão Judicial no Homicídio Culposo no Trânsito
  {
    idSlug: "trans-069",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um pai, ao manobrar seu veículo na garagem de sua residência de forma descuidada, atinge culposamente seu próprio filho de três anos, causando-lhe a morte. De acordo com o art. 291 do CTB e o art. 121, § 5º, do Código Penal, o juiz poderá:",
    explicacao: "GABARITO: B. Por força do art. 291, caput, do CTB (aplicação subsidiária do CP), aplica-se o art. 121, § 5º, do Código Penal: o juiz poderá deixar de aplicar a pena se as consequências da infração atingirem o próprio agente de forma tão grave que a sanção penal se torne desnecessária (perdão judicial, que extingue a punibilidade conforme Súmula 18 do STJ).",
    alternativas: [
      { letra: "A", texto: "aplicar a pena em dobro pela relação de parentesco de primeiro grau.", correta: false },
      { letra: "B", texto: "conceder o perdão judicial e deixar de aplicar a pena, visto que as consequências atingiram o agente de forma gravíssima.", correta: true },
      { letra: "C", texto: "desclassificar a conduta para infanticídio qualificado.", correta: false },
      { letra: "D", texto: "decretar a perda do pátrio poder sem instrução criminal.", correta: false },
      { letra: "E", texto: "converter a pena privativa em multa administrativa inafiançável.", correta: false }
    ]
  },
  // Q70 - CEBRASPE / PRF - Agravante de Condução de Veículo com Adulteração de Característica
  {
    idSlug: "trans-070",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Constitui agravante genérica aplicável aos crimes de trânsito ter o agente cometido a infração com a sua profissão ou atividade exigindo cuidados especiais com o transporte de passageiros ou de carga.",
    explicacao: "GABARITO: CERTO. Art. 298, V, do CTB prevê como agravante genérica dos crimes de trânsito ter o agente cometido a infração 'estando a sua profissão ou atividade a exigir cuidados especiais com o transporte de passageiros ou de carga'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q71 - IBFC / GM - Competência da Ação Penal nos Crimes de Trânsito
  {
    idSlug: "trans-071",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Os crimes definidos no Código de Trânsito Brasileiro são, em regra, de ação penal:",
    explicacao: "GABARITO: D. Nos termos do art. 291 do CTB e das normas gerais do Código Penal e do CPP, todos os crimes tipificados no Código de Trânsito Brasileiro são de ação penal pública incondicionada, ressalvada a lesão corporal culposa simples que não incida nas vedações do § 1º do art. 291.",
    alternativas: [
      { letra: "A", texto: "privada exclusiva do ofendido.", correta: false },
      { letra: "B", texto: "pública condicionada à prévia autorização do DETRAN.", correta: false },
      { letra: "C", texto: "privada subsidiária da pública em qualquer hipótese.", correta: false },
      { letra: "D", texto: "pública incondicionada, ressalvadas as hipóteses legais de lesão corporal culposa condicionada à representação.", correta: true },
      { letra: "E", texto: "pública condicionada à requisição do Ministério da Justiça.", correta: false }
    ]
  },
  // Q72 - CEBRASPE / PRF - Cumprimento da Suspensão da CNH e Entrega do Documento
  {
    idSlug: "trans-072",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Transitada em julgado a sentença condenatória que impuser a suspensão ou a proibição de se obter a permissão ou a habilitação para dirigir, o réu será intimado a entregar à autoridade judiciária, em quarenta e oito horas, o documento de habilitação.",
    explicacao: "GABARITO: CERTO. Art. 295 do CTB: 'Transitada em julgado a sentença condenatória, o réu será intimado a entregar à autoridade judiciária, em quarenta e oito horas, a Permissão para Dirigir ou a Carteira Nacional de Habilitação'.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q73 - VUNESP / PM - Crime de Trânsito Praticado em Faixa de Pedestres
  {
    idSlug: "trans-073",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Praticar crime de trânsito sobre faixa de trânsito temporária ou permanentemente destinada a pedestres configura, nos termos do art. 298, IV, do CTB:",
    explicacao: "GABARITO: B. Art. 298, IV, do CTB: constitui agravante genérica cometer o crime de trânsito 'sobre faixa de trânsito temporária ou permanentemente destinada a pedestres'.",
    alternativas: [
      { letra: "A", texto: "causa de extinção de punibilidade.", correta: false },
      { letra: "B", texto: "circunstância agravante da pena.", correta: true },
      { letra: "C", texto: "mera infração disciplinar militar.", correta: false },
      { letra: "D", texto: "causa excludente de tipicidade penal.", correta: false },
      { letra: "E", texto: "crime militar próprio inafiançável.", correta: false }
    ]
  },
  // Q74 - CEBRASPE / PRF - Reincidência no Crime de Embriaguez ao Volante
  {
    idSlug: "trans-074",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O condutor que for condenado criminalmente por embriaguez ao volante (art. 306 do CTB) e, nos 5 anos subsequentes, cometer novo crime de trânsito, terá a sua reincidência valorada na segunda fase da dosimetria da pena, sendo inviável a concessão de sursis processual na nova ação penal.",
    explicacao: "GABARITO: CERTO. A condenação anterior transitada em julgado por crime gera reincidência nos termos do art. 63 do CP e impede a concessão da suspensão condicional do processo (art. 89 da Lei nº 9.099/95), que exige que o acusado não esteja sendo processado nem tenha sido condenado por outro crime.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q75 - FGV / PM - Efeito Civil da Sentença Condenatória por Crime de Trânsito
  {
    idSlug: "trans-075",
    disciplina_id: TAXONOMIA.disciplinas.transito,
    assunto_id: TAXONOMIA.assuntos.ctb_crimes_infracoes,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 297, § 3º, do CTB e do art. 91, I, do Código Penal, a condenação criminal transitada em julgado por crime de trânsito com vítima:",
    explicacao: "GABARITO: A. A condenação criminal transitada em julgado torna certa a obrigação de indenizar o dano causado pelo crime (efeito genérico do art. 91, I, do CP e art. 387, IV, do CPP), permitindo a execução civil imediata do valor mínimo fixado na sentença condenatória.",
    alternativas: [
      { letra: "A", texto: "torna certa a obrigação de reparar o dano civil decorrente do delito praticado.", correta: true },
      { letra: "B", texto: "impede a vítima de buscar qualquer complemento de indenização no juízo cível.", correta: false },
      { letra: "C", texto: "obriga o Estado a pagar integralmente os prejuízos causados pelo particular.", correta: false },
      { letra: "D", texto: "extingue a responsabilidade civil do proprietário do veículo causador.", correta: false },
      { letra: "E", texto: "depende de ajuizamento de nova ação de conhecimento civil com reabertura de instrução probatória integral sobre a culpa.", correta: false }
    ]
  }
];
