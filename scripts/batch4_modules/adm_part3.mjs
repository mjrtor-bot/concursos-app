import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.administrativo;
const aAgentes = TAXONOMIA.assuntos.agentes_8112;
const aLicitacoes = TAXONOMIA.assuntos.licitacoes;
const aImprobidade = TAXONOMIA.assuntos.improbidade;

export const admPart3 = [
  // 41
  {
    idSlug: "adm-l4-41",
    disciplina_id: dId,
    assunto_id: aAgentes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado, ou no cargo resultante de sua transformação, quando invalidada a sua demissão por decisão administrativa ou judicial, com ressarcimento de todas as vantagens.",
    explicacao: "GABARITO: CERTO. Trata-se da exata definição de reintegração contida no art. 28 da Lei nº 8.112/1990 e no art. 41, § 2º, da CF/88. O servidor reintegrado tem direito ao ressarcimento integral de seus vencimentos e vantagens retroativas.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 42
  {
    idSlug: "adm-l4-42",
    disciplina_id: dId,
    assunto_id: aAgentes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O retorno do servidor público estável ao cargo anteriormente ocupado em decorrência de inabilitação em estágio probatório relativo a outro cargo público ou em virtude de reintegração do anterior ocupante é classificado na Lei nº 8.112/1990 como:",
    explicacao: "GABARITO: Letra B. O art. 29 da Lei nº 8.112/1990 define recondução como o retorno do servidor estável ao cargo anteriormente ocupado, decorrente de: I - inabilitação em estágio probatório relativo a outro cargo; ou II - reintegração do anterior ocupante.",
    alternativas: [
      { letra: "A", texto: "Reversão funcional.", correta: false },
      { letra: "B", texto: "Recondução.", correta: true },
      { letra: "C", texto: "Readaptação obrigatória.", correta: false },
      { letra: "D", texto: "Aproveitamento compulsório.", correta: false },
      { letra: "E", texto: "Remoção de ofício.", correta: false }
    ]
  },
  // 43
  {
    idSlug: "adm-l4-43",
    disciplina_id: dId,
    assunto_id: aAgentes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição Federal, conforme enunciado da Súmula Vinculante 5 do STF.",
    explicacao: "GABARITO: CERTO. A Súmula Vinculante 5 do STF estabelece expressamente: 'A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição'. É facultado ao servidor constituir procurador habilitado, mas sua ausência não enseja nulidade do PAD.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 44
  {
    idSlug: "adm-l4-44",
    disciplina_id: dId,
    assunto_id: aAgentes,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei nº 8.112/1990, a reversão é o retorno à atividade de servidor aposentado. A reversão no interesse da administração exige, dentre outros requisitos:",
    explicacao: "GABARITO: Letra A. O art. 25, II, da Lei nº 8.112/1990 exige para a reversão no interesse da administração: que o servidor tenha solicitado; que a aposentadoria tenha sido voluntária; que fosse estável na atividade; que a aposentadoria tenha ocorrido nos 5 anos anteriores; e que haja cargo vago.",
    alternativas: [
      { letra: "A", texto: "Que a aposentadoria tenha sido voluntária e ocorrido nos 5 (cinco) anos anteriores à solicitação, havendo cargo vago.", correta: true },
      { letra: "B", texto: "Que o servidor conte com mais de 75 anos de idade na data do pedido.", correta: false },
      { letra: "C", texto: "Que a junta médica declare a incapacidade permanente do interessado.", correta: false },
      { letra: "D", texto: "Aprovação em novo concurso público de provas e títulos.", correta: false },
      { letra: "E", texto: "Parecer vinculante favorável do Tribunal de Contas da União.", correta: false }
    ]
  },
  // 45
  {
    idSlug: "adm-l4-45",
    disciplina_id: dId,
    assunto_id: aLicitacoes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos Administrativos) extinguiu as modalidades licitatórias de tomada de preços e convite, instituindo expressamente o diálogo competitivo como nova modalidade licitatória destinada à contratação de obras, serviços e compras em que a Administração busca desenvolver alternativas e soluções técnicas inovadoras.",
    explicacao: "GABARITO: CERTO. A Lei nº 14.133/2021 previu como modalidades licitatórias no art. 28: pregão, concorrência, concurso, leilão e diálogo competitivo, revogando expressamente o convite e a tomada de preços previstos na antiga Lei nº 8.666/1993.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 46
  {
    idSlug: "adm-l4-46",
    disciplina_id: dId,
    assunto_id: aLicitacoes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A contratação direta mediante inexigibilidade de licitação (art. 74 da Lei nº 14.133/2021) é cabível quando houver inviabilidade de competição. É hipótese de inexigibilidade de licitação expressamente prevista na lei:",
    explicacao: "GABARITO: Letra C. O art. 74, III, da Lei nº 14.133/2021 prevê a inexigibilidade para a contratação de serviços técnicos especializados de natureza predominantemente intelectual com profissionais ou empresas de notória especialização, vedada a inexigibilidade para serviços de publicidade e divulgação.",
    alternativas: [
      { letra: "A", texto: "Contratação de obras de engenharia de pequeno valor para reforma de delegacia.", correta: false },
      { letra: "B", texto: "Aquisição de bens em caso de emergência ou calamidade pública.", correta: false },
      { letra: "C", texto: "Contratação de serviços técnicos especializados de natureza predominantemente intelectual com profissionais de notória especialização.", correta: true },
      { letra: "D", texto: "Locação de imóvel cujas características sejam genéricas e abundantes no mercado.", correta: false },
      { letra: "E", texto: "Compra de combustíveis para viaturas policiais no limite de dispensa por valor.", correta: false }
    ]
  },
  // 47
  {
    idSlug: "adm-l4-47",
    disciplina_id: dId,
    assunto_id: aLicitacoes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O pregão é a modalidade de licitação obrigatória para aquisição de bens e serviços comuns, cujo critério de julgamento poderá ser o de menor preço ou o de maior desconto.",
    explicacao: "GABARITO: CERTO. Nos termos do art. 6º, XLI, e art. 34 da Lei nº 14.133/2021, o pregão é obrigatório para bens e serviços comuns e adota os critérios de julgamento de menor preço ou de maior desconto.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 48
  {
    idSlug: "adm-l4-48",
    disciplina_id: dId,
    assunto_id: aImprobidade,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Com as alterações promovidas pela Lei nº 14.230/2021 na Lei de Improbidade Administrativa (Lei nº 8.429/1992) e a jurisprudência fixada pelo STF no Tema 1199 (ARE 843.989), a configuração de ato de improbidade administrativa:",
    explicacao: "GABARITO: Letra A. A Lei nº 14.230/2021 revogou expressamente a modalidade culposa em todos os tipos de improbidade administrativa (arts. 9º, 10 e 11), exigindo o dolo específico caracterizado pela vontade livre e consciente de alcançar o resultado ilícito. No Tema 1199, o STF confirmou que a revogação do ato culposo aplica-se aos processos em curso sem trânsito em julgado.",
    alternativas: [
      { letra: "A", texto: "Exige a comprovação de dolo específico em todas as modalidades (arts. 9º, 10 e 11), tendo sido revogada a modalidade culposa no ato que causa dano ao erário.", correta: true },
      { letra: "B", texto: "Admite a responsabilização por culpa grave nas hipóteses de enriquecimento ilícito do art. 9º.", correta: false },
      { letra: "C", texto: "Presume o dolo do agente quando houver mero prejuízo financeiro decorrente de imperícia técnica.", correta: false },
      { letra: "D", texto: "Mantém o rol meramente exemplificativo para os atos que atentam contra os princípios da administração do art. 11.", correta: false },
      { letra: "E", texto: "Fixa prazo prescricional de 20 anos contados da data da posse do servidor.", correta: false }
    ]
  },
  // 49
  {
    idSlug: "adm-l4-49",
    disciplina_id: dId,
    assunto_id: aImprobidade,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal, ao julgar as ADIs 7042 e 7043, declarou inconstitucional a exclusividade do Ministério Público para a propositura de ação por ato de improbidade administrativa, restabelecendo a legitimidade ativa concorrente da pessoa jurídica interessada (ente público lesado).",
    explicacao: "GABARITO: CERTO. O Pleno do STF (ADIs 7042 e 7043) julgou inconstitucional a exclusividade do MP conferida pela Lei nº 14.230/2021, assentando que a pessoa jurídica prejudicada também possui legitimidade ativa concorrente para propor a ação de improbidade administrativa e celebrar acordos de não persecução civil (ANPC).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 50
  {
    idSlug: "adm-l4-50",
    disciplina_id: dId,
    assunto_id: aImprobidade,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos termos do art. 23 da Lei nº 8.429/1992 (com redação dada pela Lei nº 14.230/2021), a ação para a aplicação das sanções por ato de improbidade administrativa prescreve em:",
    explicacao: "GABARITO: Letra C. O art. 23, caput, da Lei nº 8.429/1992 unificou o prazo prescricional em 8 (oito) anos, contados a partir da ocorrência do fato ou, no caso de infrações permanentes, do dia em que cessou a permanência.",
    alternativas: [
      { letra: "A", texto: "3 anos após o término do mandato executivo.", correta: false },
      { letra: "B", texto: "5 anos contados da ciência inequívoca pelo Ministério Público.", correta: false },
      { letra: "C", texto: "8 anos, contados a partir da ocorrência do fato ou do dia em que cessou a permanência.", correta: true },
      { letra: "D", texto: "10 anos, aplicando-se subsidiariamente o Código Civil.", correta: false },
      { letra: "E", texto: "Prazo imprescritível em qualquer hipótese de improbidade.", correta: false }
    ]
  },
  // 51
  {
    idSlug: "adm-l4-51",
    disciplina_id: dId,
    assunto_id: aAgentes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei nº 8.112/1990, a penalidade disciplinar de advertência prescreve em 180 dias; a de suspensão, em 2 anos; e as de demissão, cassação de aposentadoria ou disponibilidade e destituição de cargo em comissão prescrevem em 5 anos, contados da data em que o fato se tornou conhecido pela autoridade competente.",
    explicacao: "GABARITO: CERTO. Trata-se dos prazos prescricionais da ação disciplinar expressamente previstos no art. 142 da Lei nº 8.112/1990: 5 anos (demissão/cassação/destituição), 2 anos (suspensão) e 180 dias (advertência).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 52
  {
    idSlug: "adm-l4-52",
    disciplina_id: dId,
    assunto_id: aAgentes,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A investidura de servidor público estável em cargo de atribuições e responsabilidades compatíveis com a limitação que tenha sofrido em sua capacidade física ou mental, verificada em inspeção médica oficial, denomina-se:",
    explicacao: "GABARITO: Letra B. O art. 24 da Lei nº 8.112/1990 e o art. 37, § 13, da CF/88 definem readaptação como a investidura do servidor em cargo compatível com a limitação de sua capacidade física ou mental.",
    alternativas: [
      { letra: "A", texto: "Recondução provisória.", correta: false },
      { letra: "B", texto: "Readaptação.", correta: true },
      { letra: "C", texto: "Redistribuição forçada.", correta: false },
      { letra: "D", texto: "Reversão por invalidez.", correta: false },
      { letra: "E", texto: "Aproveitamento especial.", correta: false }
    ]
  },
  // 53
  {
    idSlug: "adm-l4-53",
    disciplina_id: dId,
    assunto_id: aLicitacoes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na Nova Lei de Licitações (Lei nº 14.133/2021), a fase de habilitação, como regra geral do procedimento licitatório ordinário, antecede o julgamento das propostas financeiras.",
    explicacao: "GABARITO: ERRADO. Na Lei nº 14.133/2021 (art. 17), a regra geral é a inversão de fases: primeiro realiza-se a apresentação e o julgamento das propostas e, somente após a classificação e julgamento, procede-se à fase de habilitação exclusivamente do licitante mais bem classificado.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: false },
      { letra: "E", texto: "Errado", correta: true }
    ]
  },
  // 54
  {
    idSlug: "adm-l4-54",
    disciplina_id: dId,
    assunto_id: aImprobidade,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "O agente público que utiliza veículo oficial de órgão de segurança pública para realizar viagens de férias com sua família, sem autorização e com finalidade estritamente particular, pratica ato de improbidade administrativa tipificado no art. 9º da Lei nº 8.429/1992 como:",
    explicacao: "GABARITO: Letra A. O art. 9º, IV, da Lei nº 8.429/1992 tipifica expressamente como ato de improbidade que importa enriquecimento ilícito 'utilizar, em obra ou serviço particular, qualquer bem móvel, de propriedade ou à disposição de qualquer dos entes referidos no art. 1º desta Lei, bem como o trabalho de servidores, de empregados ou de terceiros contratados por essas entidades'.",
    alternativas: [
      { letra: "A", texto: "Ato de improbidade que importa enriquecimento ilícito.", correta: true },
      { letra: "B", texto: "Mera infração contratual desprovida de sanção pecuniária.", correta: false },
      { letra: "C", texto: "Conduta atípica sob a ótica do regime de improbidade.", correta: false },
      { letra: "D", texto: "Infração tributária sujeita a execução fiscal automática.", correta: false },
      { letra: "E", texto: "Ato estritamente culposo imune a ressarcimento.", correta: false }
    ]
  },
  // 55
  {
    idSlug: "adm-l4-55",
    disciplina_id: dId,
    assunto_id: aAgentes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O servidor público federal responde civil, penal e administrativamente pelo exercício irregular de suas atribuições. As sanções civis, penais e administrativas poderão cumular-se, sendo independentes entre si, mas a absolvição criminal que declare expressamente a inexistência do fato ou negue a sua autoria afasta a responsabilidade administrativa do servidor.",
    explicacao: "GABARITO: CERTO. Conforme arts. 125 e 126 da Lei nº 8.112/1990 e jurisprudência pacífica do STJ e STF, as instâncias são autônomas, mas a absolvição penal fundada em inexistência material do fato ou negativa de autoria vincula e extingue a responsabilidade administrativa.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 56
  {
    idSlug: "adm-l4-56",
    disciplina_id: dId,
    assunto_id: aLicitacoes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Na Nova Lei de Licitações (Lei nº 14.133/2021), a modalidade de licitação entre quaisquer interessados para a escolha de trabalho técnico, científico ou artístico, cujo critério de julgamento seja o de melhor técnica ou conteúdo artístico, mediante a concessão de prêmio ou remuneração ao vencedor, é denominada:",
    explicacao: "GABARITO: Letra D. Trata-se do Concurso, expressamente definido no art. 6º, XXXIX, e art. 30 da Lei nº 14.133/2021.",
    alternativas: [
      { letra: "A", texto: "Concorrência restrita.", correta: false },
      { letra: "B", texto: "Pregão especial.", correta: false },
      { letra: "C", texto: "Diálogo competitivo.", correta: false },
      { letra: "D", texto: "Concurso.", correta: true },
      { letra: "E", texto: "Leilão invertido.", correta: false }
    ]
  },
  // 57
  {
    idSlug: "adm-l4-57",
    disciplina_id: dId,
    assunto_id: aImprobidade,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O mero exercício da função ou desempenho de competências públicas, sem comprovação de ato doloso com fim ilícito, afasta a responsabilidade por ato de improbidade administrativa, sendo vedada a responsabilização baseada exclusivamente em divergência interpretativa da lei (art. 1º, § 8º, da Lei nº 8.429/1992).",
    explicacao: "GABARITO: CERTO. O art. 1º, § 8º, da Lei nº 8.429/1992 (incluído pela Lei nº 14.230/2021) dispõe: 'Não configura improbidade a ação ou omissão decorrente de divergência interpretativa da lei, baseada em jurisprudência, ainda que não pacificada, mesmo que não venha a ser posteriormente prevalecente nas decisões dos órgãos de controle ou dos tribunais do Poder Judiciário'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 58
  {
    idSlug: "adm-l4-58",
    disciplina_id: dId,
    assunto_id: aAgentes,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A perda da nacionalidade brasileira de servidor público federal estável enseja a vacância do cargo público por motivo de:",
    explicacao: "GABARITO: Letra B. O art. 33 da Lei nº 8.112/1990 lista as hipóteses de vacância do cargo público: exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento. A demissão ou exoneração (conforme o caso) extingue o vínculo, operando a vacância.",
    alternativas: [
      { letra: "A", texto: "Remoção compulsória.", correta: false },
      { letra: "B", texto: "Demissão ou exoneração, ensejando a vacância do cargo.", correta: true },
      { letra: "C", texto: "Redistribuição temporária com manutenção do subsídio.", correta: false },
      { letra: "D", texto: "Suspensão preventiva por tempo indeterminado.", correta: false },
      { letra: "E", texto: "Aproveitamento em cargo de confiança diplomático.", correta: false }
    ]
  },
  // 59
  {
    idSlug: "adm-l4-59",
    disciplina_id: dId,
    assunto_id: aLicitacoes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na Lei nº 14.133/2021, o contrato administrativo poderá ser rescindido unilateralmente pela Administração Pública em caso de não cumprimento ou cumprimento irregular de normas editalícias ou contratuais pelo contratado, sem prejuízo da aplicação de sanções como advertência, multa, impedimento de licitar e contratar ou declaração de inidoneidade.",
    explicacao: "GABARITO: CERTO. Trata-se das cláusulas exorbitantes e do poder sancionatório da Administração nos contratos administrativos, expressamente regulados nos arts. 137 e 156 da Lei nº 14.133/2021.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 60
  {
    idSlug: "adm-l4-60",
    disciplina_id: dId,
    assunto_id: aImprobidade,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O sucessor ou herdeiro daquele que causar dano ao erário ou que se enriquecer ilicitamente comete ato sancionatório nos termos da Lei nº 8.429/1992, estando sujeito:",
    explicacao: "GABARITO: Letra B. O art. 8º da Lei nº 8.429/1992 determina que o sucessor ou herdeiro daquele que causar dano ao erário ou se enriquecer ilicitamente está sujeito à obrigação de repará-lo até o limite do valor da herança ou do patrimônio transferido (intranscendência da pena, art. 5º, XLV, da CF).",
    alternativas: [
      { letra: "A", texto: "À perda de função pública e suspensão dos direitos políticos originários.", correta: false },
      { letra: "B", texto: "À obrigação de reparar o dano até o limite do valor da herança ou do patrimônio transferido.", correta: true },
      { letra: "C", texto: "Ao pagamento de multa civil de até cem vezes a remuneração do falecido.", correta: false },
      { letra: "D", texto: "À proibição perpétua de contratar com o Poder Público.", correta: false },
      { letra: "E", texto: "A pena de prisão simples em caso de inadimplemento dos débitos fiscais.", correta: false }
    ]
  }
];
