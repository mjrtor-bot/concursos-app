import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.legislacao_especial;
const aLegEspecial = TAXONOMIA.assuntos.leg_especial_policial;

export const legEspPart3 = [
  // 41
  {
    idSlug: "leg-l4-41",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Considera-se organização criminosa a associação de 4 (quatro) ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter, direta ou indiretamente, vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 (quatro) anos, ou que sejam de caráter transnacional.",
    explicacao: "GABARITO: CERTO. O conceito legal dado pelo art. 1º, § 1º, da Lei nº 12.850/2013 exige cumulativamente: 1) associação de 4 ou mais pessoas; 2) estrutura ordenada com divisão de tarefas (mesmo informal); 3) objetivo de auferir vantagem de qualquer natureza; 4) infrações penais com penas máximas superiores a 4 anos OU de caráter transnacional.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 42
  {
    idSlug: "leg-l4-42",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No âmbito do acordo de colaboração premiada (Lei nº 12.850/2013, com as alterações da Lei nº 13.964/2019 - Pacote Anticrime), é correto afirmar:",
    explicacao: "GABARITO: Letra D. O art. 4º, § 16, da Lei nº 12.850/2013 (inserido pela Lei 13.964/2019) veda expressamente: 'Nenhuma das seguintes medidas será decretada ou proferida com base apenas nas declarações do colaborador: I - medidas cautelares reais ou pessoais; II - recebimento de denúncia ou queixa-crime; III - sentença condenatória'.",
    alternativas: [
      { letra: "A", texto: "O juiz participará diretamente das negociações entre as partes e o colaborador.", correta: false },
      { letra: "B", texto: "A sentença condenatória pode fundamentar-se exclusivamente nos depoimentos do colaborador sem necessidade de corroboração probatória.", correta: false },
      { letra: "C", texto: "O delegado de polícia é proibido de formalizar qualquer termo de colaboração durante o inquérito policial.", correta: false },
      { letra: "D", texto: "Nenhuma medida cautelar pessoal ou real, recebimento de denúncia ou sentença condenatória será proferida com base apenas nas declarações do colaborador.", correta: true },
      { letra: "E", texto: "O colaborador perde de plano o direito de ser assistido por advogado em audiência judicial.", correta: false }
    ]
  },
  // 43
  {
    idSlug: "leg-l4-43",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A ação controlada prevista na Lei nº 12.850/2013 consiste em retardar a intervenção policial ou administrativa relativa à ação praticada por organização criminosa, desde que mantida sob observação e acompanhamento, dependendo de prévia comunicação ao juiz competente, que, se for o caso, estabelecerá os seus limites e comunicará o Ministério Público.",
    explicacao: "GABARITO: CERTO. O art. 8º da Lei nº 12.850/2013 disciplina a ação controlada estabelecendo que o retardamento da intervenção policial independe de autorização judicial prévia, exigindo apenas prévia comunicação ao juiz competente (comunicação prévia), que fixará limites e ouvirá o MP. (Diferentemente da Lei de Drogas art. 53, II, que exige autorização judicial).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 44
  {
    idSlug: "leg-l4-44",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Incorre nas mesmas penas de reclusão de 3 a 8 anos e multa quem impede ou, de qualquer forma, embaraça a investigação de infração penal que envolva organização criminosa (art. 2º, § 1º, da Lei nº 12.850/2013). Essa conduta tipifica o crime de:",
    explicacao: "GABARITO: Letra B. O art. 2º, § 1º, da Lei nº 12.850/2013 tipifica a Obstrução de investigação de organização criminosa: 'Nas mesmas penas incorre quem impede ou, de qualquer forma, embaraça a investigação de infração penal que envolva organização criminosa'.",
    alternativas: [
      { letra: "A", texto: "Desobediência a ordem legal de funcionário público.", correta: false },
      { letra: "B", texto: "Obstrução de investigação de organização criminosa.", correta: true },
      { letra: "C", texto: "Prevaricação funcional de inteligência policial.", correta: false },
      { letra: "D", texto: "Favorecimento real subsidiário.", correta: false },
      { letra: "E", texto: "Patrocínio infiel continuado.", correta: false }
    ]
  },
  // 45
  {
    idSlug: "leg-l4-45",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na infiltração policial de agentes (Lei nº 12.850/2013), a infiltração virtual de agentes de polícia na internet (art. 10-A) será autorizada pelo prazo de até 6 (seis) meses, sem prejuízo de eventuais renovações, desde que o total não exceda 720 (setecentos e vinte) dias.",
    explicacao: "GABARITO: CERTO. O art. 10-A, § 2º, da Lei nº 12.850/2013 (inserido pela Lei nº 13.964/2019) disciplina a infiltração virtual em ambiente cibernético: 'A infiltração será autorizada pelo prazo de até 6 (seis) meses, sem prejuízo de eventuais renovações, mediante ordem judicial fundamentada e desde que o total não exceda a 720 (setecentos e vinte) dias e seja comprovada sua necessidade'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 46
  {
    idSlug: "leg-l4-46",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O crime de lavagem ou ocultação de bens, direitos e valores (art. 1º da Lei nº 9.613/1998, com a redação da Lei nº 12.683/2012):",
    explicacao: "GABARITO: Letra C. Com o advento da Lei nº 12.683/2012 (Geração de 3ª fase da lavagem de capitais), foi extinto o rol taxativo de crimes antecedentes, admitindo-se a lavagem de dinheiro decorrente de QUALQUER infração penal antecedente (seja crime, seja contravenção penal como o jogo do bicho). Trata-se de crime autônomo em relação ao ilícito prévio.",
    alternativas: [
      { letra: "A", texto: "Exige que o crime antecedente pertença a um rol taxativo estrito, como tráfico de drogas ou terrorismo.", correta: false },
      { letra: "B", texto: "Não admite a configuração a partir de bens oriundos de contravenções penais.", correta: false },
      { letra: "C", texto: "Admite como infração penal antecedente qualquer crime ou contravenção penal, possuindo autonomia processual e material em relação ao delito prévio.", correta: true },
      { letra: "D", texto: "Depende da condenação prévia com trânsito em julgado do autor da infração antecedente para que a denúncia seja recebida.", correta: false },
      { letra: "E", texto: "Exige que o próprio agente tenha sido autor ou partícipe da infração penal prévia.", correta: false }
    ]
  },
  // 47
  {
    idSlug: "leg-l4-47",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No crime de lavagem de capitais, a fase de 'dissimulação' (layering ou estratificação) caracteriza-se pela realização de múltiplos e complexos negócios e transações financeiras com o objetivo de afastar os ativos ilícitos de sua origem e dificultar o rastreamento pelos órgãos de inteligência e fiscalização.",
    explicacao: "GABARITO: CERTO. A doutrina e a jurisprudência dividem a lavagem de capitais em 3 fases clássicas: 1) Colocação (placement): introdução dos recursos no sistema financeiro; 2) Ocultação/Dissimulação (layering/estratificação): fracionamento e movimentações complexas para mascarar a origem; 3) Integração (integration): incorporação formal dos recursos à economia lícita com aparência de legitimidade.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 48
  {
    idSlug: "leg-l4-48",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A alienação antecipada de bens apreendidos no processo de apuração de crimes de lavagem de dinheiro (art. 4º, § 1º, da Lei nº 9.613/1998):",
    explicacao: "GABARITO: Letra A. O art. 4º, § 1º, da Lei nº 9.613/1998 prevê que o juiz determinará a alienação antecipada para preservação do valor dos bens sempre que estiverem sujeitos a qualquer grau de deterioração ou depreciação, ou quando houver dificuldade para sua manutenção.",
    alternativas: [
      { letra: "A", texto: "Pode ser determinada judicialmente para preservação do valor dos bens sujeitos a deterioração, depreciação ou de difícil manutenção.", correta: true },
      { letra: "B", texto: "É inconstitucional por violar o princípio da presunção de inocência antes do trânsito em julgado.", correta: false },
      { letra: "C", texto: "Pode ser executada diretamente pelo delegado de polícia por leilão administrativo no pátio da delegacia.", correta: false },
      { letra: "D", texto: "Aplica-se unicamente a moedas estrangeiras em espécie.", correta: false },
      { letra: "E", texto: "Exige a concordância expressa do investigado para ser deferida.", correta: false }
    ]
  },
  // 49
  {
    idSlug: "leg-l4-49",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A pena do crime de lavagem de dinheiro (art. 1º da Lei nº 9.613/1998) será aumentada de 1/3 (um terço) a 2/3 (dois terços) se os crimes forem cometidos de forma reiterada, por intermédio de organização criminosa ou por meio da utilização de ativo virtual.",
    explicacao: "GABARITO: CERTO. O art. 1º, § 4º, da Lei nº 9.613/1998 (com redação atualizada pela Lei nº 14.478/2022 - Marco Legal dos Criptoativos) prevê a causa de aumento de 1/3 a 2/3 se o crime for cometido 'de forma reiterada, por intermédio de organização criminosa ou por meio da utilização de ativo virtual'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 50
  {
    idSlug: "leg-l4-50",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos termos da Lei nº 12.850/2013, o agente policial infiltrado que, no curso da operação de infiltração, praticar infração penal em estrita proporcionalidade com a finalidade da investigação:",
    explicacao: "GABARITO: Letra B. O art. 13 da Lei nº 12.850/2013 estabelece a causa de exclusão da culpabilidade por inexigibilidade de conduta diversa: 'Não é punível, no âmbito da infiltração, a prática de infração penal pelo agente infiltrado no estrito cumprimento do dever legal ou quando inexigível conduta diversa, mantida a proporcionalidade com a finalidade da investigação'. Havendo excesso doloso ou culposo, responderá pelos abusos.",
    alternativas: [
      { letra: "A", texto: "Responderá invariavelmente como coautor em concurso material obrigatório.", correta: false },
      { letra: "B", texto: "Não será punido quando inexigível conduta diversa ou no estrito cumprimento do dever legal, mantida a proporcionalidade com a finalidade da investigação.", correta: true },
      { letra: "C", texto: "Ficará isento de pena apenas se a organização for desmantelada no mesmo dia.", correta: false },
      { letra: "D", texto: "Receberá perdão judicial exclusivo outorgado pelo chefe do Poder Executivo.", correta: false },
      { letra: "E", texto: "Terá sua identidade funcional revelada de ofício no diário oficial do Estado.", correta: false }
    ]
  },
  // 51
  {
    idSlug: "leg-l4-51",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O compartilhamento de Relatórios de Inteligência Financeira (RIF) elaborados pela Unidade de Inteligência Financeira (antigo COAF) diretamente com os órgãos de persecução penal (Ministério Público e Polícia Judiciária), sem prévia autorização judicial, é constitucional e válido, segundo fixado pelo STF no Tema 990 de Repercussão Geral.",
    explicacao: "GABARITO: CERTO. O STF fixou a seguinte tese no Tema 990 (RE 1.055.941/SP): 'É constitucional o compartilhamento dos relatórios de inteligência financeira da UIF e da íntegra do procedimento fiscalizatório da Receita Federal do Brasil com os órgãos de persecução penal para fins criminais, sem a obrigatoriedade de prévia autorização judicial'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 52
  {
    idSlug: "leg-l4-52",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O art. 2º da Lei nº 12.850/2013 estabelece que promover, constituir, financiar ou integrar, pessoalmente ou por interposta pessoa, organização criminosa é apenado com:",
    explicacao: "GABARITO: Letra A. O art. 2º da Lei nº 12.850/2013 comina pena de reclusão, de 3 (três) a 8 (oito) anos, e multa, sem prejuízo das penas correspondentes às demais infrações penais praticadas.",
    alternativas: [
      { letra: "A", texto: "Reclusão, de 3 a 8 anos, e multa, sem prejuízo das penas de outras infrações.", correta: true },
      { letra: "B", texto: "Detenção, de 1 a 3 anos, e suspensão dos direitos políticos.", correta: false },
      { letra: "C", texto: "Reclusão, de 1 a 4 anos, substituível por pena de cesta básica.", correta: false },
      { letra: "D", texto: "Prisão simples, de 15 dias a 3 meses.", correta: false },
      { letra: "E", texto: "Reclusão, de 10 a 20 anos, vedada a progressão de regime.", correta: false }
    ]
  },
  // 53
  {
    idSlug: "leg-l4-53",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A captação ambiental de sinais eletromagnéticos, ópticos ou acústicos (art. 8º-A da Lei nº 12.850/2013 e art. 3º da Lei nº 9.296/1996) somente poderá ser autorizada pelo juiz quando a prova não puder ser feita por outros meios disponíveis e igualmente eficazes e houver elementos probatórios razoáveis de autoria e materialidade de infração penal com pena máxima superior a 4 anos ou de infração conexa.",
    explicacao: "GABARITO: CERTO. O art. 8º-A, § 1º, da Lei nº 9.296/1996 (introduzido pelo Pacote Anticrime e correspondente à Lei 12.850/13) exige para a captação ambiental: I - indícios razoáveis de autoria/participação; II - a prova não puder ser feita por outros meios disponíveis e eficazes; III - infrações com penas máximas superiores a 4 anos ou conexas.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 54
  {
    idSlug: "leg-l4-54",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito do acesso a dados cadastrais por autoridades policiais (art. 15 da Lei nº 12.850/2013 e art. 13-A do CPP), assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra B. O art. 15 da Lei nº 12.850/2013 estabelece que o delegado de polícia e o Ministério Público terão acesso, independentemente de autorização judicial, apenas aos dados cadastrais do investigado que informem qualificação pessoal, filiação e endereço, mantidos pela Justiça Eleitoral, empresas telefônicas, instituições financeiras, provedores de internet e administradoras de cartão de crédito. O acesso ao sigilo bancário ou telemático em si segue exigindo ordem judicial.",
    alternativas: [
      { letra: "A", texto: "O delegado de polícia pode quebrar o sigilo bancário de qualquer cidadão sem prévia autorização judicial.", correta: false },
      { letra: "B", texto: "O delegado de polícia e o MP terão acesso direto, independentemente de autorização judicial, aos dados cadastrais (qualificação pessoal, filiação e endereço) em bancos de dados públicos e privados.", correta: true },
      { letra: "C", texto: "O acesso a meros dados cadastrais exige autorização de tribunal superior em todos os casos.", correta: false },
      { letra: "D", texto: "As empresas de telefonia são proibidas por lei de fornecer o endereço cadastral de clientes investigados à polícia.", correta: false },
      { letra: "E", texto: "O acesso cadastral independe de existência de inquérito policial ou investigação formal instaurada.", correta: false }
    ]
  },
  // 55
  {
    idSlug: "leg-l4-55",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A retratação da proposta de colaboração premiada pelas partes é admitida antes de sua homologação judicial, caso em que as provas autoincriminatórias fornecidas pelo colaborador não poderão ser utilizadas exclusivamente em seu desfavor.",
    explicacao: "GABARITO: CERTO. O art. 4º, § 10, da Lei nº 12.850/2013 dispõe: 'As partes podem retratar-se da proposta, caso em que as provas autoincriminatórias produzidas pelo colaborador não poderão ser utilizadas exclusivamente em seu desfavor'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  }
];
