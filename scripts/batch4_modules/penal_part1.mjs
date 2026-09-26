import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.penal;
const aTeoriaCrime = TAXONOMIA.assuntos.teoria_crime;
const aLeiTempoEspaco = TAXONOMIA.assuntos.lei_penal_tempo_espaco;

export const penalPart1 = [
  // 1
  {
    idSlug: "penal-l4-01",
    disciplina_id: dId,
    assunto_id: aLeiTempoEspaco,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Considere que um cidadão brasileiro tenha praticado crime de homicídio doloso no exterior e que, sem ter sido julgado no país estrangeiro, tenha retornado ao Brasil. Nessa situação, incide o princípio da extraterritorialidade incondicionada da lei penal brasileira, sendo irrelevante se o fato também é punível no país em que foi cometido.",
    explicacao: "GABARITO: ERRADO. O art. 7º, II, 'b', do Código Penal estabelece que o crime praticado por brasileiro no exterior sujeita-se à extraterritorialidade CONDICIONADA (e não incondicionada). Para que a lei penal brasileira seja aplicada, devem concorrer cumulativamente as condições previstas no § 2º do art. 7º, entre as quais a de 'ser o fato punível também no país em que foi praticado' (dupla tipicidade). A extraterritorialidade incondicionada restringe-se às hipóteses taxativas do art. 7º, I, do CP.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: false },
      { letra: "E", texto: "Errado", correta: true }
    ]
  },
  // 2
  {
    idSlug: "penal-l4-02",
    disciplina_id: dId,
    assunto_id: aLeiTempoEspaco,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com o Código Penal brasileiro, considera-se praticado o crime tanto no momento da conduta comissiva ou omissiva quanto no momento em que se produz ou deveria produzir-se o resultado, adotando-se expressamente a teoria da ubiquidade para o tempo do crime.",
    explicacao: "GABARITO: ERRADO. O Código Penal brasileiro adota a Teoria da Atividade para o tempo do crime (art. 4º: 'Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado'). A Teoria da Ubiquidade (mista) foi adotada para o LUGAR do crime (art. 6º: 'Considera-se praticado o crime no lugar em que ocorreu a ação ou omissão, no todo ou em parte, bem como onde se produziu ou deveria produzir-se o resultado'). Mnemônico clássico: LUTA (Lugar = Ubiquidade; Tempo = Atividade).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: false },
      { letra: "E", texto: "Errado", correta: true }
    ]
  },
  // 3
  {
    idSlug: "penal-l4-03",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Mário, com inequívoca intenção homicida em face de seu desafeto Carlos, desfere três disparos de arma de fogo em direção ao peito deste. Carlos é socorrido com vida e levado ao hospital. Durante o trajeto na ambulância, o veículo de resgate é atingido violentamente por um caminhão desgovernado que furou o sinal vermelho, resultando na morte imediata de Carlos exclusivamente em razão do traumatismo cranioencefálico causado pela colisão. De acordo com o art. 13, § 1º, do Código Penal e a dogmática da causalidade, Mário deve responder por:",
    explicacao: "GABARITO: Letra C. Trata-se de causa superveniente relativamente independente que, por si só, produziu o resultado (acidente de trânsito durante o transporte hospitalar). Conforme o art. 13, § 1º, do CP: 'A superveniência de causa relativamente independente exclui a imputação quando, por si só, produziu o resultado; imputam-se, porém, os fatos anteriores, se por si mesmos constituem crime'. Assim, rompe-se o nexo causal quanto ao resultado morte, respondendo o agente pelos atos já praticados com animus necandi, ou seja, homicídio tentado.",
    alternativas: [
      { letra: "A", texto: "Homicídio doloso consumado qualificado pelo meio perigoso.", correta: false },
      { letra: "B", texto: "Homicídio culposo em concurso material com lesão corporal de natureza grave.", correta: false },
      { letra: "C", texto: "Homicídio doloso tentado, rompendo-se o nexo causal com o resultado morte superveniente.", correta: true },
      { letra: "D", texto: "Lesão corporal seguida de morte, diante da ausência de dolo quanto ao desfecho final.", correta: false },
      { letra: "E", texto: "Fato atípico em relação ao homicídio, por ausência absoluta de tipicidade formal e material.", correta: false }
    ]
  },
  // 4
  {
    idSlug: "penal-l4-04",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O erro sobre elemento constitutivo do tipo legal de crime (erro de tipo essencial) sempre exclui o dolo, mas permite a punição por crime culposo, se a modalidade culposa for prevista em lei e o erro for inescusável (vencível).",
    explicacao: "GABARITO: CERTO. Nos termos do art. 20, caput, do Código Penal: 'O erro sobre elemento constitutivo do tipo legal de crime exclui o dolo, mas permite a punição por crime culposo, se previsto em lei'. O erro de tipo essencial invencível (escusável) afasta o dolo e a culpa; já o erro de tipo essencial vencível (inescusável/culposo) exclui o dolo, restando a responsabilidade por crime culposo, desde que haja previsão típica.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 5
  {
    idSlug: "penal-l4-05",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Sobre a coação moral irresistível e a obediência hierárquica, figuras disciplinadas no art. 22 do Código Penal brasileiro, assinale a alternativa correta:",
    explicacao: "GABARITO: Letra B. O art. 22 do Código Penal prescreve expressamente: 'Se o fato é cometido sob coação irresistível ou em estrita obediência a ordem, não manifestamente ilegal, de superior hierárquico, só é punível o autor da coação ou da ordem'. Ambas as hipóteses são causas de exclusão da culpabilidade por inexigibilidade de conduta diversa.",
    alternativas: [
      { letra: "A", texto: "Ambas são causas excludentes da ilicitude (antijuridicidade), operando a justificação integral da conduta do coagido e do subordinado.", correta: false },
      { letra: "B", texto: "Tratam-se de causas excludentes da culpabilidade por inexigibilidade de conduta diversa, respondendo penalmente apenas o autor da coação ou da ordem.", correta: true },
      { letra: "C", texto: "A ordem manifestamente ilegal de superior hierárquico exclui a culpabilidade do subordinado caso comprovado seu temor reverencial.", correta: false },
      { letra: "D", texto: "A coação física irresistível (vis absoluta) exclui a culpabilidade, enquanto a coação moral irresistível (vis compulsiva) exclui a própria conduta e a tipicidade.", correta: false },
      { letra: "E", texto: "Na obediência hierárquica a superior de empresa privada, afasta-se a culpabilidade do empregado por expressa equiparação legal.", correta: false }
    ]
  },
  // 6
  {
    idSlug: "penal-l4-06",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Configura crime impossível por ineficácia absoluta do meio a conduta do agente que tenta matar outrem utilizando quantidade insignificante de veneno totalmente inapta para causar letalidade ou perturbação à saúde da vítima, não se admitindo a punição da tentativa nessa hipótese.",
    explicacao: "GABARITO: CERTO. O art. 17 do Código Penal dispõe: 'Não se pune a tentativa quando, por ineficácia absoluta do meio ou por absoluta impropriedade do objeto, é impossível consumar-se o crime'. O uso de meio absolutamente inidôneo (veneno em dose inócua) caracteriza ineficácia absoluta do meio, tornando a conduta atípica (crime impossível ou quase-crime).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 7
  {
    idSlug: "penal-l4-07",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil PB",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O consentimento do ofendido, quando recai sobre bem jurídico disponível e prestado por pessoa capaz antes ou durante a prática da conduta, funciona na dogmática penal brasileira como causa supralegal de exclusão da ilicitude ou como causa de atipicidade da conduta.",
    explicacao: "GABARITO: CERTO. O consentimento do ofendido opera como causa de atipicidade material quando o não consentimento integra o próprio tipo penal (ex.: violação de domicílio, furto), ou como causa supralegal de exclusão da ilicitude quando o tipo não exige a discordância da vítima expressamente e se trata de bem jurídico individual disponível por agente capaz.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 8
  {
    idSlug: "penal-l4-08",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Considere a seguinte situação: Rodrigo, caminhando por uma rua deserta, vê seu inimigo mortal Fernando sacando um objeto preto brilhante do bolso interno do paletó de forma abrupta. Acreditando sinceramente que Fernando iria alvejá-lo com arma de fogo, Rodrigo saca sua pistola e atira no braço de Fernando para neutralizá-lo. Constata-se depois que Fernando estava apenas pegando sua carteira de couro para mostrar um documento. Na hipótese descrita, Rodrigo incorreu em:",
    explicacao: "GABARITO: Letra D. Trata-se de legítima defesa putativa, modalidade de descriminante putativa sobre os pressupostos fáticos da excludente. Nos termos do art. 20, § 1º, do CP: 'É isento de pena quem, por erro plenamente justificado pelas circunstâncias, supõe situação de fato que, se existisse, tornaria a ação legítima'. Tratando-se de erro de tipo permissivo, se invencível, isenta de pena; se vencível, pune-se a título de culpa.",
    alternativas: [
      { letra: "A", texto: "Erro de proibição direto, que exclui a potencial consciência da ilicitude da conduta.", correta: false },
      { letra: "B", texto: "Aberratio ictus com unidade complexa, respondendo em concurso formal de crimes.", correta: false },
      { letra: "C", texto: "Estado de necessidade real, justificando de pleno direito a ação defensiva.", correta: false },
      { letra: "D", texto: "Descriminante putativa sobre situação de fato (legítima defesa putativa), disciplinada pelo art. 20, § 1º, do CP.", correta: true },
      { letra: "E", texto: "Excesso doloso punível a título de tentativa de homicídio qualificado por motivo fútil.", correta: false }
    ]
  },
  // 9
  {
    idSlug: "penal-l4-09",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No crime doloso, o dolo eventual ocorre quando o agente não quer diretamente o resultado ilícito, mas assume conscientemente o risco de produzi-lo, conformando-se com a sua ocorrência.",
    explicacao: "GABARITO: CERTO. O art. 18, I, segunda parte, do Código Penal acolhe a teoria do assentimento/consentimento para o dolo eventual: 'Diz-se o crime: doloso, quando o agente quis o resultado ou assumiu o risco de produzi-lo'. No dolo eventual, o agente antevê o resultado como possível e tolera/assume a sua verificação ('tanto faz se ocorrer').",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 10
  {
    idSlug: "penal-l4-10",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Inspetor de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Acerca da distinção dogmática entre dolo eventual e culpa consciente, assinale a opção que reflete o entendimento pacificado no Superior Tribunal de Justiça e no Supremo Tribunal Federal:",
    explicacao: "GABARITO: Letra A. No dolo eventual, o agente prevê o resultado lesivo e com ele anui ou se conforma (assume o risco de produzi-lo). Na culpa consciente, o agente também prevê o resultado como possível, mas repele essa possibilidade, acreditando sinceramente, com base em suas habilidades ou circunstâncias, que o resultado não ocorrerá ou que conseguirá evitá-lo.",
    alternativas: [
      { letra: "A", texto: "No dolo eventual o agente assume e anui com o resultado danoso; na culpa consciente o agente prevê o resultado, mas confia sinceramente que ele não ocorrerá.", correta: true },
      { letra: "B", texto: "Na culpa consciente o resultado é imprevisível ao homem médio, enquanto no dolo eventual o resultado é absolutamente certo e inevitável.", correta: false },
      { letra: "C", texto: "Ambos os institutos possuem a mesma consequência na dosimetria da pena, equiparando-se a sanção penal abstrata com base na teoria da equivalência.", correta: false },
      { letra: "D", texto: "A culpa consciente admite a tentativa, ao passo que o dolo eventual é incompatível com o conatus em razão da indeterminação do querer.", correta: false },
      { letra: "E", texto: "No dolo eventual o agente desconhece o risco de sua conduta; na culpa consciente há dolo direto de perigo e culpa quanto ao dano.", correta: false }
    ]
  },
  // 11
  {
    idSlug: "penal-l4-11",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Nos crimes omissivos impróprios (comissivos por omissão), o dever de agir para evitar o resultado incumbe a quem tenha por lei obrigação de cuidado, proteção ou vigilância; a quem, de outra forma, assumiu a responsabilidade de impedir o resultado; ou a quem, com seu comportamento anterior, criou o risco de sua ocorrência.",
    explicacao: "GABARITO: CERTO. A assertiva transcreve com fidelidade as três alíneas do art. 13, § 2º, do Código Penal, que definem a posição de garante (ou garantidor): 'A omissão é penalmente relevante quando o omitente devia e podia agir para evitar o resultado. O dever de agir incumbe a quem: a) tenha por lei obrigação de cuidado, proteção ou vigilância; b) de outra forma, assumiu a responsabilidade de impedir o resultado; c) com seu comportamento anterior, criou o risco da ocorrência do resultado'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 12
  {
    idSlug: "penal-l4-12",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil MG",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em matéria de causas de exclusão da ilicitude, o Código Penal brasileiro prevê expressamente no art. 23 que não há crime quando o agente pratica o fato em:",
    explicacao: "GABARITO: Letra E. O art. 23 do Código Penal elenca taxativamente como causas legais genéricas de exclusão da ilicitude: I - estado de necessidade; II - legítima defesa; III - estrito cumprimento de dever legal ou exercício regular de direito. Parágrafo único: 'O agente, em qualquer das hipóteses deste artigo, responderá pelo excesso doloso ou culposo'.",
    alternativas: [
      { letra: "A", texto: "Coação moral irresistível, obediência hierárquica e embriaguez involuntária completa.", correta: false },
      { letra: "B", texto: "Erro de proibição inevitável, menoridade penal e desenvolvimento mental incompleto.", correta: false },
      { letra: "C", texto: "Arrependimento posterior, desistência voluntária e perdão judicial.", correta: false },
      { letra: "D", texto: "Descriminante putativa, erro de tipo acidental e imunidade processual diplomática.", correta: false },
      { letra: "E", texto: "Estado de necessidade, legítima defesa, estrito cumprimento de dever legal ou no exercício regular de direito.", correta: true }
    ]
  },
  // 13
  {
    idSlug: "penal-l4-13",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil CE",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No estado de necessidade, não pode alegar a excludente de ilicitude quem tinha o dever legal de enfrentar o perigo, nos termos do art. 24, § 1º, do Código Penal.",
    explicacao: "GABARITO: CERTO. O art. 24, § 1º, do Código Penal estabelece expressamente a vedação: 'Não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo' (ex.: policiais em serviço, bombeiros militares, salva-vidas).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 14
  {
    idSlug: "penal-l4-14",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Nos crimes cometidos sem violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa, até o recebimento da denúncia ou da queixa, por ato voluntário do agente, a pena será reduzida de um a dois terços. Esse instituto é denominado no Código Penal de:",
    explicacao: "GABARITO: Letra B. O art. 16 do Código Penal tipifica o Arrependimento Posterior: 'Nos crimes cometidos sem violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa, até o recebimento da denúncia ou da queixa, por ato voluntário do agente, a pena será reduzida de um a dois terços'.",
    alternativas: [
      { letra: "A", texto: "Desistência voluntária.", correta: false },
      { letra: "B", texto: "Arrependimento posterior.", correta: true },
      { letra: "C", texto: "Arrependimento eficaz.", correta: false },
      { letra: "D", texto: "Crime impossível.", correta: false },
      { letra: "E", texto: "Perdão tácito.", correta: false }
    ]
  },
  // 15
  {
    idSlug: "penal-l4-15",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O erro de proibição direto recai sobre a ilicitude do fato. Quando invencível (escusável), o erro de proibição isenta o agente de pena; quando vencível (inescusável), a pena pode ser diminuída de um sexto a um terço.",
    explicacao: "GABARITO: CERTO. Dispõe o art. 21, caput, do Código Penal: 'O desconhecimento da lei é inescusável. O erro sobre a ilicitude do fato, se inevitável, isenta de pena; se evitável, poderá diminuí-la de um sexto a um terço'. O erro de proibição exclui ou atenua a culpabilidade (potencial consciência da ilicitude).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 16
  {
    idSlug: "penal-l4-16",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito da imputabilidade penal e da teoria da actio libera in causa no direito penal brasileiro, assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra D. Pela teoria da actio libera in causa acolhida pelo art. 28, II, do CP, a embriaguez voluntária ou culposa pelo álcool ou substâncias análogas não exclui a imputabilidade penal, transferindo-se a análise do dolo ou da culpa para o momento em que o agente ingere a substância.",
    alternativas: [
      { letra: "A", texto: "A embriaguez voluntária incompleta exclui a imputabilidade penal, isentando o autor de qualquer sanção.", correta: false },
      { letra: "B", texto: "A emoção e a paixão excluem a imputabilidade penal quando causarem perturbação profunda dos sentidos.", correta: false },
      { letra: "C", texto: "O desenvolvimento mental incompleto dos menores de 18 anos sujeita-se ao critério biopsicológico de verificação caso a caso.", correta: false },
      { letra: "D", texto: "A embriaguez não acidental (voluntária ou culposa) não exclui a imputabilidade penal, aplicando-se a actio libera in causa.", correta: true },
      { letra: "E", texto: "A embriaguez proveniente de caso fortuito ou força maior nunca reduz a pena se for incompleta.", correta: false }
    ]
  },
  // 17
  {
    idSlug: "penal-l4-17",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil AL",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Segundo a Súmula Vinculante 56 do STF, a falta de estabelecimento penal adequado não autoriza a manutenção do condenado em regime prisional mais gravoso, devendo ser observados os parâmetros de fixação de penas alternativas ou cumprimento em regime aberto ou domiciliar.",
    explicacao: "GABARITO: CERTO. A Súmula Vinculante 56 do STF prevê: 'A falta de estabelecimento penal adequado não autoriza a manutenção do condenado em regime prisional mais gravoso, devendo-se observar, nessa hipótese, os parâmetros fixados no RE 641.320/RS' (progressão por salto, prisão domiciliar até abertura de vaga, etc.).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 18
  {
    idSlug: "penal-l4-18",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Salvo disposição em contrário, pune-se a tentativa com a pena correspondente ao crime consumado, diminuída de um a dois terços, conforme prevê o parágrafo único do art. 14 do Código Penal.",
    explicacao: "GABARITO: CERTO. Trata-se da teoria objetiva (ou realística) mitigada adotada pelo Código Penal brasileiro no parágrafo único do art. 14: 'Salvo disposição em contrário, pune-se a tentativa com a pena correspondente ao crime consumado, diminuída de um a dois terços'. A fração de redução é balizada pelo iter criminis percorrido pelo agente.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 19
  {
    idSlug: "penal-l4-19",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Antônio deseja furtar o veículo de Bernardo. Para tanto, quebra o vidro lateral do automóvel, mas, antes de conseguir fazer a ligação direta, desiste espontaneamente de subtrair o veículo e vai embora sem levar nada. Nessa hipótese, em observância ao instituto da desistência voluntária (art. 15 do CP), Antônio:",
    explicacao: "GABARITO: Letra B. O art. 15 do CP estipula que o agente que, voluntariamente, desiste de prosseguir na execução 'só responde pelos atos já praticados'. Tendo quebrado o vidro antes de iniciar a subtração do veículo e desistido espontaneamente, afasta-se a tentativa de furto, respondendo Antônio apenas pelo crime consumado de dano (art. 163 do CP) decorrente da quebra do vidro (tipicidade residual).",
    alternativas: [
      { letra: "A", texto: "Responde por tentativa de furto qualificado, com redução de pena em dois terços pelo arrependimento.", correta: false },
      { letra: "B", texto: "Responde apenas pelo crime de dano decorrente da quebra do vidro do automóvel (atos já praticados).", correta: true },
      { letra: "C", texto: "Fica isento de qualquer responsabilidade penal por força do princípio da insignificância do conatus.", correta: false },
      { letra: "D", texto: "Responde por tentativa de furto simples em concurso formal com dano qualificado tentado.", correta: false },
      { letra: "E", texto: "Deve ter sua pena extinta pelo perdão judicial, desde que repare o vidro danificado antes da audiência.", correta: false }
    ]
  },
  // 20
  {
    idSlug: "penal-l4-20",
    disciplina_id: dId,
    assunto_id: aTeoriaCrime,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Perito Criminal Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O erro sobre a pessoa (error in persona), previsto no art. 20, § 3º, do Código Penal, não isenta de pena o agente, considerando-se, para a aplicação da pena, as condições ou qualidades da pessoa contra quem o agente pretendia praticar o crime, e não as da pessoa efetivamente atingida.",
    explicacao: "GABARITO: CERTO. O art. 20, § 3º, do Código Penal é expresso: 'O erro quanto à pessoa contra a qual o crime é praticado não isenta de pena. Não se consideram, neste caso, as condições ou qualidades da vítima, senão as da pessoa contra quem o agente queria praticar o crime'. Trata-se da teoria da representação.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  }
];
