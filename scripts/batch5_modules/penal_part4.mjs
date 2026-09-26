import { TAXONOMIA } from "./taxonomia.mjs";

export const penalPart4 = [
  {
    idSlug: "penal-b5-054",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O crime de extorsão (art. 158 do CP) consuma-se independentemente da obtenção da vantagem indevida, bastando que a vítima seja constrangida, mediante violência ou grave ameaça, a fazer, tolerar que se faça ou deixar de fazer alguma coisa.",
    explicacao: "CORRETO. Súmula 96 do STJ: 'O crime de extorsão consuma-se independentemente da obtenção da vantagem indevida'. Trata-se de crime formal.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-055",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "FGV",
    orgao_nome: "PC-SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação ao crime de roubo qualificado pela restrição da liberdade da vítima (art. 157, § 2º, V, do CP) e ao crime de extorsão com restrição da liberdade (sequestro-relâmpago, art. 158, § 3º, do CP), assinale a diferença correta:",
    explicacao: "Gabarito: A. No roubo com restrição da liberdade da vítima, a restrição é meio para a subtração do bem pelo próprio agente. Na extorsão com restrição da liberdade (sequestro-relâmpago), a vantagem econômica exige o comportamento ativo da vítima (ex: digitar senha, transferir PIX, sacar dinheiro em caixa eletrônico).",
    alternativas: [
      { letra: "A", texto: "No roubo com restrição da liberdade, o próprio agente subtrai o bem; na extorsão com restrição da liberdade, exige-se conduta ativa e indispensável da própria vítima para a entrega da vantagem.", correta: true },
      { letra: "B", texto: "O roubo com restrição de liberdade exige pedido de resgate a terceiros, ao passo que a extorsão prescinde de qualquer contato exterior.", correta: false },
      { letra: "C", texto: "A extorsão com restrição da liberdade da vítima não é classificada como crime hediondo em nenhuma hipótese.", correta: false },
      { letra: "D", texto: "Ambos os tipos penais são punidos exclusivamente como contravenções penais agravadas pelo tempo de retenção.", correta: false },
      { letra: "E", texto: "No roubo a restrição de liberdade deve durar mais de 24 horas; na extorsão basta qualquer lapso temporal.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-056",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "Cebraspe",
    orgao_nome: "PC-PE",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O dolo eventual ocorre quando o agente assume o risco de produzir o resultado lesivo, não se importando com a sua ocorrência, enquanto a culpa consciente ocorre quando o agente prevê o resultado, mas acredita sinceramente que ele não ocorrerá em razão de suas habilidades ou circunstâncias.",
    explicacao: "CORRETO. No dolo eventual (art. 18, I, segunda parte, CP - teoria do assentimento), o agente assume o risco ('tanto faz se ocorrer'). Na culpa consciente, o agente antevê o resultado, mas confia levianamente que sua perícia ou o acaso evitarão o desfecho.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-057",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Instituto AOCP",
    orgao_nome: "PC-GO",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "Nos crimes patrimoniais, as imunidades penais absolutas (escusas absolutórias, art. 181 do CP) tornam o agente isento de pena quando o crime é cometido em prejuízo:",
    explicacao: "Gabarito: B. Conforme art. 181 do CP: É isento de pena quem comete qualquer dos crimes patrimoniais (sem violência ou grave ameaça) em prejuízo: I - do cônjuge, na constância da sociedade conjugal; II - de ascendente ou descendente, seja o parentesco legítimo ou ilegítimo, seja civil ou natural.",
    alternativas: [
      { letra: "A", texto: "De irmão legítimo ou ilegítimo que com ele coabita.", correta: false },
      { letra: "B", texto: "Do cônjuge, na constância da sociedade conjugal, ou de ascendente ou descendente.", correta: true },
      { letra: "C", texto: "De tio ou sobrinho com quem o agente mantém vínculo empregatício.", correta: false },
      { letra: "D", texto: "De pessoa idosa com mais de sessenta anos sob curatela do agente.", correta: false },
      { letra: "E", texto: "De companheiro em união estável dissolvida judicialmente.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-058",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Não se aplicam as imunidades absolutas ou relativas dos arts. 181 e 182 do Código Penal se o crime patrimonial for praticado mediante grave ameaça ou violência à pessoa, ou contra pessoa com idade igual ou superior a 60 anos.",
    explicacao: "CORRETO. Art. 183 do CP: Não se aplica o disposto nos dois artigos anteriores: I - se o crime é de roubo ou de extorsão, ou, em geral, quando haja emprego de grave ameaça ou violência à pessoa; II - ao estranho que participa do crime; III - se o crime é praticado contra pessoa com idade igual ou superior a 60 anos (incluído pela Lei 10.741/2003).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-059",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Vunesp",
    orgao_nome: "PC-SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "O crime de prevaricação (art. 319 do CP) consiste em retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer:",
    explicacao: "Gabarito: D. Art. 319 do CP: 'para satisfazer interesse ou sentimento pessoal'. Este é o dolo específico essencial da prevaricação.",
    alternativas: [
      { letra: "A", texto: "Promessa de retribuição financeira futura de terceiro.", correta: false },
      { letra: "B", texto: "Pedido de autoridade superior hierárquica.", correta: false },
      { letra: "C", texto: "Vantagem patrimonial imediata direta.", correta: false },
      { letra: "D", texto: "Interesse ou sentimento pessoal.", correta: true },
      { letra: "E", texto: "Dever funcional prescrito em regulamento.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-060",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Cebraspe",
    orgao_nome: "PC-CE",
    cargo_nome: "Inspetor de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O crime de resistência (art. 329 do CP) exige, para a sua configuração, o emprego de violência física ou ameaça contra funcionário competente para executar ato legal ou contra quem lhe esteja prestando auxílio.",
    explicacao: "CORRETO. Art. 329 do CP: 'Opor-se à execução de ato legal, mediante violência ou ameaça a funcionário competente para executá-lo ou a quem lhe esteja prestando auxílio'. A mera desobediência passiva sem violência/ameaça tipifica o art. 330.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-061",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "FCC",
    orgao_nome: "PC-AP",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre o crime de falso testemunho ou falsa perícia (art. 342 do Código Penal), é correto afirmar:",
    explicacao: "Gabarito: C. Art. 342, § 1º, do CP: As penas aumentam-se de 1/6 a 1/3 se o crime é praticado mediante suborno ou se cometido com o fim de obter prova destinada a produzir efeito em processo penal, ou em processo civil em que for parte entidade da administração pública.",
    alternativas: [
      { letra: "A", texto: "Aplica-se unicamente ao processo judicial penal em fase de julgamento no plenário do júri.", correta: false },
      { letra: "B", texto: "O crime é material, exigindo que a decisão judicial seja fundamentada exclusivamente no depoimento falso.", correta: false },
      { letra: "C", texto: "A pena é aumentada se o crime é cometido com o fim de produzir prova em processo penal ou mediante suborno.", correta: true },
      { letra: "D", texto: "O informante não compromissado não pode ser sujeito ativo do falso testemunho em nenhuma circunstância.", correta: false },
      { letra: "E", texto: "A retratação produz efeitos absolutórios mesmo se realizada após o trânsito em julgado da sentença condenatória.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-062",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.lei_penal_tempo_espaco,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O Código Penal brasileiro adota a teoria da atividade para definir o tempo do crime e a teoria da ubiquidade para fixar o lugar do crime.",
    explicacao: "CORRETO. Mnemônico clássico 'LUTA': Lugar do crime = Ubiquidade (art. 6º CP); Tempo do crime = Atividade (art. 4º CP: 'Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado').",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-063",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.lei_penal_tempo_espaco,
    banca_nome: "FGV",
    orgao_nome: "PC-MG",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Ficam sujeitos à lei brasileira, embora cometidos no estrangeiro, por força do princípio da extraterritorialidade incondicionada (art. 7º, I, do CP), os crimes:",
    explicacao: "Gabarito: A. Art. 7º, I, 'a', 'b', 'c' e 'd' do CP: Extraterritorialidade incondicionada abrange: contra a vida ou a liberdade do Presidente da República; contra o patrimônio ou a fé pública da União, DF, Estado ou Município; contra a administração pública por quem está a seu serviço; e de genocídio, quando o agente for brasileiro ou domiciliado no Brasil.",
    alternativas: [
      { letra: "A", texto: "Contra a vida ou a liberdade do Presidente da República e os crimes de genocídio, quando o agente for brasileiro ou domiciliado no Brasil.", correta: true },
      { letra: "B", texto: "Praticados por brasileiro nato no exterior contra qualquer vítima estrangeira.", correta: false },
      { letra: "C", texto: "Que, por tratado ou convenção, o Brasil se obrigou a reprimir sem reciprocidade.", correta: false },
      { letra: "D", texto: "Cometidos a bordo de aeronaves comerciais estrangeiras em alto-mar.", correta: false },
      { letra: "E", texto: "De estelionato praticados contra turistas brasileiros em trânsito no exterior.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-064",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "Cebraspe",
    orgao_nome: "PC-AL",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "A prescrição retroativa da pretensão punitiva com base na pena aplicada na sentença condenatória pode ter por termo inicial data anterior à do recebimento da denúncia ou da queixa.",
    explicacao: "ERRADO. Conforme art. 110, § 1º, do CP (com redação dada pela Lei 12.234/2010): 'A prescrição, depois da sentença condenatória com trânsito em julgado para a acusação ou depois de improvido seu recurso, regula-se pela pena aplicada, não podendo, em nenhuma hipótese, ter por termo inicial data anterior à da denúncia ou queixa'.",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  {
    idSlug: "penal-b5-065",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Vunesp",
    orgao_nome: "PC-SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "A respeito do crime de homicídio privilegiado (art. 121, § 1º, do CP), assinale a hipótese que autoriza a redução da pena de um sexto a um terço:",
    explicacao: "Gabarito: D. Art. 121, § 1º, CP: Se o agente comete o crime impelido por motivo de relevante valor social ou moral, ou sob o domínio de violenta emoção, logo em seguida a injusta provocação da vítima, o juiz pode reduzir a pena de um sexto a um terço.",
    alternativas: [
      { letra: "A", texto: "Prática do delito com emprego de veneno ou emboscada após premeditação.", correta: false },
      { letra: "B", texto: "Agressão cometida mediante paga ou promessa de recompensa em favor de parentes.", correta: false },
      { letra: "C", texto: "Atuação sob influência de violenta emoção sem provocação injusta.", correta: false },
      { letra: "D", texto: "Cometimento do crime impelido por motivo de relevante valor moral ou social, ou sob o domínio de violenta emoção, logo em seguida a injusta provocação da vítima.", correta: true },
      { letra: "E", texto: "Confissão espontânea perante a autoridade judiciária no momento da audiência preliminar.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-066",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O homicídio praticado contra autoridade ou agente integrante dos órgãos de segurança pública (art. 144 da CF) no exercício da função ou em decorrência dela, ou contra seu cônjuge, companheiro ou parente consanguíneo até terceiro grau, em razão dessa condição, constitui homicídio qualificado funcional e crime hediondo.",
    explicacao: "CORRETO. Trata-se do homicídio funcional qualificado tipificado no art. 121, § 2º, VII, do Código Penal e listado no rol taxativo da Lei dos Crimes Hediondos (Lei 8.072/90, art. 1º, I).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-067",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_adm_publica,
    banca_nome: "Instituto AOCP",
    orgao_nome: "PC-GO",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "O crime de violação de sigilo funcional (art. 325 do CP) consiste em revelar fato de que tem ciência em razão do cargo e que deva permanecer em segredo, ou facilitar-lhe a revelação. Se da ação ou omissão resulta dano à Administração Pública ou a outrem:",
    explicacao: "Gabarito: C. Conforme art. 325, § 2º, do CP: 'Se da ação ou omissão resulta dano à Administração Pública ou a outrem: Pena - reclusão, de 2 (dois) a 6 (seis) anos, e multa'. Trata-se de hipótese qualificada.",
    alternativas: [
      { letra: "A", texto: "A conduta torna-se atípica caso não haja prejuízo financeiro direto ao erário.", correta: false },
      { letra: "B", texto: "A pena é reduzida de um terço pela aplicação da retratação voluntária.", correta: false },
      { letra: "C", texto: "Aplica-se pena de reclusão mais gravosa na modalidade qualificada.", correta: true },
      { letra: "D", texto: "O fato passa a ser punível exclusivamente na esfera disciplinar administrativa.", correta: false },
      { letra: "E", texto: "Exige-se autorização judicial prévia para a instauração de inquérito policial.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-068",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.teoria_crime,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na imputação objetiva de Claus Roxin, a tipicidade penal pressupõe a criação ou incremento de um risco juridicamente proibido e a realização desse risco no resultado típico concreto dentro do âmbito de proteção da norma penal violada.",
    explicacao: "CORRETO. A teoria da imputação objetiva estruturada por Roxin baseia-se em critérios normativos de imputação: 1) criação ou incremento de risco proibido; 2) realização do risco proibido no resultado; 3) resultado dentro do alcance do tipo de proteção da norma.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-069",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.crimes_pessoa_patrimonio,
    banca_nome: "FGV",
    orgao_nome: "PC-RJ",
    cargo_nome: "Inspetor de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "media",
    enunciado: "No crime de furto mediante fraude, a fraude é empregada pelo agente com a finalidade de:",
    explicacao: "Gabarito: B. No furto mediante fraude (art. 155, § 4º, II, CP), o ardil serve para diminuir a vigilância da vítima e possibilitar a subtração do bem pelo agente. No estelionato, a fraude faz com que a própria vítima, enganada, entregue voluntariamente a coisa ao estelionatário.",
    alternativas: [
      { letra: "A", texto: "Fazer com que a vítima entregue voluntariamente a posse definitiva da coisa.", correta: false },
      { letra: "B", texto: "Diminuir a vigilância da vítima sobre a coisa para que o próprio agente possa subtraí-la.", correta: true },
      { letra: "C", texto: "Obter vantagem ilícita sem qualquer inversão física de posse patrimonial.", correta: false },
      { letra: "D", texto: "Induzir terceiro a emitir cheque sem provisão de fundos.", correta: false },
      { letra: "E", texto: "Garantir a impunidade de crime anterior praticado em concurso formal.", correta: false }
    ]
  },
  {
    idSlug: "penal-b5-070",
    disciplina_id: TAXONOMIA.disciplinas.penal,
    assunto_id: TAXONOMIA.assuntos.penas_extincao,
    banca_nome: "Cebraspe",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "media",
    enunciado: "O perdão judicial concedido pelo magistrado nos casos expressamente previstos em lei extingue a punibilidade do autor do fato, não subsistindo qualquer efeito condenatório principal ou secundário.",
    explicacao: "CORRETO. Súmula 18 do STJ: 'A sentença concessiva do perdão judicial é declaratória da extinção da punibilidade, não subsistindo qualquer efeito condenatório' (não gera reincidência, não lança nome no rol de culpados, nem serve de título executivo judicial cível).",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  }
];
