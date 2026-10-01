import { TAXONOMIA } from "./taxonomia.mjs";

export const legEspecial01Questoes = [
  // Q1 - CEBRASPE / PRF - Responsabilidade Penal da Pessoa Jurídica e Superação da Dupla Imputação
  {
    idSlug: "legesp-001",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A responsabilização penal da pessoa jurídica por crimes ambientais (art. 3º da Lei nº 9.605/1998) não está condicionada à simultânea e obrigatória persecução penal da pessoa física que agiu em seu nome ou benefício, restando superada na jurisprudência do Supremo Tribunal Federal e do Superior Tribunal de Justiça a teoria da dupla imputação necessária.",
    explicacao: "GABARITO: CERTO. O STF (RE 548.181/PR) e o STJ (Tema Repetitivo 648 e RMS 39.172/BA) consolidaram o entendimento de que é admissível a condenação penal da pessoa jurídica por delitos ambientais independentemente da imputação concomitante à pessoa física corré (superação da teoria da dupla imputação).",
    alternativas: [
      { texto: "Certo", correta: true, explicacao_especifica: "Item correto. A responsabilização penal da pessoa jurídica é autônoma e prescinde da simultânea imputação a pessoa física." },
      { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. A tese da dupla imputação foi expressamente superada pelo STF e STJ." }
    ]
  },

  // Q2 - FGV / PM - Maus-tratos a Cães e Gatos (Lei Sansão - Lei 14.064/2020)
  {
    idSlug: "legesp-002",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Uma guarnição da Polícia Militar Ambiental foi acionada para averiguar uma denúncia anônima em uma residência urbana. No local, os policiais constataram que o proprietário mantinha dois cães trancados em cômodo insalubre, sem água e alimento há dias, com severas lesões corporais decorrentes de agressões físicas reiteradas. Diante do quadro flagrancial e nos termos do art. 32 da Lei nº 9.605/1998 (com as alterações da Lei nº 14.064/2020 - Lei Sansão), a conduta do infrator:",
    explicacao: "GABARITO: B. O art. 32, § 1º-A, da Lei nº 9.605/1998 (incluído pela Lei nº 14.064/2020) estabelece que, quando se tratar de cão ou gato, a pena para o crime de maus-tratos é de reclusão de 2 a 5 anos, multa e proibição da guarda. Por ter pena máxima de 5 anos, não se trata de infração de menor potencial ofensivo, admitindo lavratura de auto de prisão em flagrante pela autoridade policial.",
    alternativas: [
      { letra: "A", texto: "configura contravenção penal de crueldade contra animais, ensejando apenas termo circunstanciado de ocorrência (TCO) sem possibilidade de perda da guarda.", correta: false, explicacao_especifica: "Trata-se de crime tipificado no art. 32 da Lei 9.605/98, e não mera contravenção penal." },
      { letra: "B", texto: "configura crime punível com pena de reclusão de 2 a 5 anos, multa e proibição da guarda, não sendo infração de menor potencial ofensivo, autorizando a prisão em flagrante.", correta: true, explicacao_especifica: "Art. 32, § 1º-A da Lei 9.605/98 (Lei Sansão). A pena é reclusão de 2 a 5 anos, multa e proibição da guarda." },
      { letra: "C", texto: "configura crime punível exclusivamente com pena de detenção de 3 meses a 1 ano e multa, aplicando-se o rito sumaríssimo da Lei nº 9.099/1995.", correta: false, explicacao_especifica: "A pena de detenção de 3 meses a 1 ano aplica-se aos demais animais (caput), e não a cães e gatos (§ 1º-A)." },
      { letra: "D", texto: "constitui infração administrativa ambiental sujeita unicamente à sanção de apreensão dos animais pelo órgão do SISNAMA, sem repercussão penal.", correta: false, explicacao_especifica: "A conduta tem expressa tipicidade penal autônoma e independe das sanções administrativas." },
      { letra: "E", texto: "é atípica penalmente se não houver resultado morte dos animais tutelados.", correta: false, explicacao_especifica: "O crime de maus-tratos consuma-se com a prática do ato abusivo ou agressão, sendo a morte apenas causa de aumento de pena (§ 2º)." }
    ]
  },

  // Q3 - CEBRASPE / CBM - Provocar Incêndio em Mata ou Floresta (Art. 41)
  {
    idSlug: "legesp-003",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial do Corpo de Bombeiros Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de provocar incêndio em mata ou floresta, tipificado no art. 41 da Lei nº 9.605/1998, é apenado com reclusão de dois a quatro anos e multa na modalidade dolosa, e admite expressamente a modalidade culposa, punida com detenção de seis meses a um ano e multa.",
    explicacao: "GABARITO: CERTO. O art. 41, caput, da Lei nº 9.605/1998 prevê pena de reclusão de 2 a 4 anos e multa para a conduta dolosa de provocar incêndio em mata ou floresta. Seu parágrafo único estabelece expressamente: 'Se o crime é culposo, a pena é de detenção de seis meses a um ano e multa'.",
    alternativas: [
      { texto: "Certo", correta: true, explicacao_especifica: "Art. 41, caput e parágrafo único, da Lei nº 9.605/1998." },
      { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O tipo penal prevê expressamente a forma culposa no parágrafo único do art. 41." }
    ]
  },

  // Q4 - VUNESP / GM - Soltar Balões e Perigo Abstrato (Art. 42)
  {
    idSlug: "legesp-004",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Durante patrulhamento preventivo em um parque municipal, guardas municipais flagraram um grupo de pessoas preparando e soltando um balão de grande porte confeccionado com material inflamável e bucha acesa. De acordo com o art. 42 da Lei nº 9.605/1998 e a jurisprudência dominante, a conduta de fabricar, vender, transportar ou soltar balões que possam provocar incêndios em florestas e áreas urbanas:",
    explicacao: "GABARITO: A. O art. 42 da Lei nº 9.605/1998 tipifica a conduta de 'fabricar, vender, transportar ou soltar balões que possam provocar incêndios nas florestas e demais formas de vegetação, em áreas urbanas ou qualquer tipo de assentamento humano'. Trata-se de crime de perigo abstrato, cuja consumação prescinde da ocorrência de efetivo incêndio ou dano material.",
    alternativas: [
      { letra: "A", texto: "configura crime ambiental de perigo abstrato, consumando-se com a simples conduta típica, sendo dispensável a ocorrência de efetivo incêndio ou dano ao patrimônio.", correta: true, explicacao_especifica: "Art. 42 da Lei 9.605/98 e jurisprudência pacífica do STJ (crime de perigo abstrato)." },
      { letra: "B", texto: "constitui mero ilícito administrativo municipal, tornando-se crime apenas se o artefato atingir rede elétrica ou edificação habitada.", correta: false, explicacao_especifica: "É crime autônomo previsto no art. 42 da Lei 9.605/98." },
      { letra: "C", texto: "só configura crime se praticado no período noturno ou durante a vigência de estado de calamidade pública.", correta: false, explicacao_especifica: "A conduta é criminosa a qualquer hora e local de risco descrito no tipo." },
      { letra: "D", texto: "exige para a tipicidade penal a demonstração de dano concreto e laudo pericial atestando destruição de área florestal superior a um hectare.", correta: false, explicacao_especifica: "O crime não exige dano efetivo, bastando a potencialidade lesiva abstrata do artefato." },
      { letra: "E", texto: "é permitida caso o balão não utilize bucha incandescente e possua finalidade puramente folclórica ou cultural.", correta: false, explicacao_especifica: "A vedação do art. 42 é ampla e visa a proteger a incolumidade pública e o meio ambiente." }
    ]
  },

  // Q5 - IBFC / PM - Fiscalização Ambiental e Apreensão de Bens e Animais (Art. 25)
  {
    idSlug: "legesp-005",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em operação conjunta de fiscalização ambiental, policiais militares apreenderam instrumentos utilizados em desmatamento ilegal, carnes de caça clandestina (produtos perecíveis) e dezenas de pássaros silvestres mantidos em cativeiro ilegal. Sobre a destinação legal dos produtos e instrumentos apreendidos na forma do art. 25 da Lei nº 9.605/1998, assinale a afirmativa correta.",
    explicacao: "GABARITO: C. O art. 25 da Lei nº 9.605/1998 preconiza que os animais apreendidos serão prioritariamente libertados em seu habitat ou entregues a jardins zoológicos, fundações ou entidades assemelhadas (§ 1º); os produtos perecíveis ou madeiras serão avaliados e doados a instituições científicas, hospitalares, penais ou outras com fins beneficentes (§ 3º).",
    alternativas: [
      { letra: "A", texto: "Os animais silvestres devem permanecer obrigatoriamente sob custódia do infrator na qualidade de fiel depositário até o trânsito em julgado da sentença condenatória.", correta: false, explicacao_especifica: "Art. 25, § 1º determina que os animais sejam prioritariamente libertados ou entregues a entidades de proteção/zoológicos." },
      { letra: "B", texto: "Os produtos perecíveis apreendidos devem ser incinerados incontinenti pelos agentes públicos, vedada sua doação a hospitais ou entidades beneficentes.", correta: false, explicacao_especifica: "Art. 25, § 3º prevê que produtos perecíveis serão doados a instituições científicas, hospitalares ou beneficentes." },
      { letra: "C", texto: "Os animais silvestres serão prioritariamente libertados em seu habitat natural ou entregues a zoológicos/entidades assemelhadas, e os produtos perecíveis poderão ser avaliados e doados a instituições beneficentes ou hospitalares.", correta: true, explicacao_especifica: "Art. 25, §§ 1º e 3º da Lei nº 9.605/1998." },
      { letra: "D", texto: "Os instrumentos do crime pertencentes a terceiros de boa-fé são compulsoriamente destruídos na fase do inquérito policial pela autoridade fiscalizadora.", correta: false, explicacao_especifica: "A perda ou destruição depende dos requisitos legais e não atinge compulsoriamente terceiros de boa-fé sem o devido processo." },
      { letra: "E", texto: "A autoridade policial não pode apreender os instrumentos utilizados na infração sem prévio mandado judicial expedido pelo juiz da comarca.", correta: false, explicacao_especifica: "A apreensão dos produtos e instrumentos é dever da autoridade fiscalizadora/policial no ato da infração flagrancial (art. 25)." }
    ]
  },

  // Q6 - CEBRASPE / PRF - Transporte de Fauna Silvestre sem Licença (Art. 29, § 1º, III)
  {
    idSlug: "legesp-006",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Durante fiscalização em rodovia federal, policiais rodoviários federais abordaram um veículo de passeio e localizaram no porta-malas dezenas de espécimes vivos da fauna silvestre nativa acondicionados em caixas, desprovidos de guia de transporte, anilhas ou autorização do órgão ambiental competente. Nessa situação, a conduta do condutor amolda-se à figura equiparada do art. 29, § 1º, III, da Lei nº 9.605/1998, que pune aquele que transporta ou guarda espécimes da fauna silvestre sem a devida permissão, licença ou autorização da autoridade competente.",
    explicacao: "GABARITO: CERTO. O art. 29, § 1º, III, da Lei nº 9.605/1998 equipara ao crime de matar/perseguir/caçar quem 'vende, expõe à venda, exporta ou adquire, guarda, tem em cativeiro ou depósito, utiliza ou transporta ovos, larvas ou espécimes da fauna silvestre, nativa ou em rota migratória, bem como produtos e objetos dela oriundos, provenientes de criadouros não autorizados ou sem a devida permissão, licença ou autorização da autoridade competente'.",
    alternativas: [
      { texto: "Certo", correta: true, explicacao_especifica: "Art. 29, § 1º, III, da Lei nº 9.605/1998." },
      { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O transporte não autorizado de fauna silvestre nativa é expressamente equiparado ao crime do art. 29." }
    ]
  },

  // Q7 - FGV / PM - Excludente do Abate em Estado de Necessidade (Art. 37, I)
  {
    idSlug: "legesp-007",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um morador de comunidade isolada em região de extrema vulnerabilidade social abateu uma capivara (animal da fauna silvestre brasileira) que se encontrava às margens de um rio, com a finalidade exclusiva de alimentar seus três filhos menores que se encontravam sem qualquer alimento há dois dias. Abordado pela Polícia Militar Ambiental, comprovou-se a situação de penúria absoluta. À luz do art. 37 da Lei nº 9.605/1998, assinale a opção que indica o enquadramento jurídico do fato.",
    explicacao: "GABARITO: D. O art. 37, I, da Lei nº 9.605/1998 prevê expressamente que 'não é crime o abate de animal, quando realizado em estado de necessidade, para saciar a fome do agente ou de sua família'. Trata-se de excludente legal específica de ilicitude/tipicidade.",
    alternativas: [
      { letra: "A", texto: "O fato configura crime consumado contra a fauna, devendo a penúria atuar exclusivamente como causa de diminuição de pena na terceira fase da dosimetria.", correta: false, explicacao_especifica: "O art. 37, I afasta o próprio crime (não é crime o abate em estado de necessidade para saciar a fome)." },
      { letra: "B", texto: "O abate de animal silvestre é crime hediondo inafiançável, sendo irrelevante a existência de fome ou miséria extrema.", correta: false, explicacao_especifica: "Crime contra a fauna não é hediondo e admite as excludentes do art. 37." },
      { letra: "C", texto: "Houve crime doloso de caça ilegal com perdão judicial obrigatório concedido pela autoridade policial no boletim de ocorrência.", correta: false, explicacao_especifica: "Autoridade policial não concede perdão judicial; outrossim, o art. 37 expressamente diz 'não é crime'." },
      { letra: "D", texto: "Não há crime, pois a lei ambiental exclui expressamente o delito quando o abate de animal é realizado em estado de necessidade para saciar a fome do agente ou de sua família.", correta: true, explicacao_especifica: "Art. 37, I, da Lei nº 9.605/1998." },
      { letra: "E", texto: "O ato configura contravenção penal de perigo comunitário com substituição automática de pena por prestação de serviços ambientais.", correta: false, explicacao_especifica: "Inexiste previsão de contravenção nesse caso; o abate em estado de necessidade não constitui crime." }
    ]
  },

  // Q8 - CEBRASPE / PM - Guarda Doméstica e Perdão Judicial (Art. 29, § 2º)
  {
    idSlug: "legesp-008",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "No caso de guarda doméstica de espécie silvestre não considerada ameaçada de extinção, pode o juiz, considerando as circunstâncias do caso concreto, deixar de aplicar a pena, instituto conhecido como perdão judicial.",
    explicacao: "GABARITO: CERTO. Art. 29, § 2º, da Lei nº 9.605/1998: 'No caso de guarda doméstica de espécie silvestre não considerada ameaçada de extinção, pode o juiz, considerando as circunstâncias, deixar de aplicar a pena'. Trata-se de hipótese expressa de perdão judicial na lei ambiental.",
    alternativas: [
      { texto: "Certo", correta: true, explicacao_especifica: "Art. 29, § 2º da Lei nº 9.605/1998." },
      { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O art. 29, § 2º consagra expressamente a faculdade judicial de conceder o perdão." }
    ]
  },

  // Q9 - VUNESP / PC - Crime de Poluição (Art. 54)
  {
    idSlug: "legesp-009",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Uma indústria química lançou efluentes com alta concentração de metais pesados em um rio que abastece um município, ocasionando a mortandade de milhares de peixes e tornando a água imprópria para o consumo da população local. A conduta foi devidamente constatada por laudo pericial oficial. Com base no art. 54 da Lei nº 9.605/1998, a conduta:",
    explicacao: "GABARITO: B. O art. 54 da Lei nº 9.605/1998 tipifica o crime de poluição. Em seu § 2º, incisos II e III, qualifica o crime quando 'tornar uma área, urbana ou rural, imprópria para a ocupação humana' ou 'causar poluição hídrica que torne necessária a interrupção do abastecimento público de água de uma comunidade', prevendo pena de reclusão de 1 a 5 anos.",
    alternativas: [
      { letra: "A", texto: "configura mera infração administrativa fiscalizável pelo município, tendo em vista que o direito penal não tutela a qualidade das águas fluviais.", correta: false, explicacao_especifica: "A tutela hídrica e a poluição são expressamente tipificadas no art. 54 da Lei 9.605/98." },
      { letra: "B", texto: "configura o crime de poluição em sua forma qualificada, admitindo sanção penal privativa de liberdade de reclusão e multa, além da responsabilização da pessoa jurídica.", correta: true, explicacao_especifica: "Art. 54, § 2º c/c art. 3º da Lei nº 9.605/1998." },
      { letra: "C", texto: "somente será punível criminalmente se praticada com dolo específico de exterminar a fauna ictiológica local.", correta: false, explicacao_especifica: "O tipo admite dolo genérico e também a modalidade culposa (art. 54, § 1º)." },
      { letra: "D", texto: "constitui crime de perigo de dano condicionado à prévia condenação administrativa definitiva no órgão estadual de meio ambiente.", correta: false, explicacao_especifica: "As esferas penal e administrativa são autônomas e independentes." },
      { letra: "E", texto: "exclui a responsabilidade dos administradores da empresa que tenham concorrido para a prática do crime com base no princípio da personificação exclusiva.", correta: false, explicacao_especifica: "O art. 3º, § 2º da Lei 9.605/98 expressamente não exclui a responsabilidade das pessoas físicas autoras ou partícipes." }
    ]
  },

  // Q10 - CEBRASPE / CBM - Destruição de Floresta de Preservação Permanente (Art. 38)
  {
    idSlug: "legesp-010",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial do Corpo de Bombeiros Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de destruir ou danificar floresta considerada de preservação permanente (APP), mesmo que em formação, ou utilizá-la com infringência das normas de proteção (art. 38 da Lei nº 9.605/1998), pune a conduta dolosa com pena de detenção de um a três anos, ou multa, ou ambas cumulativamente, e admite modalidade culposa com pena reduzida.",
    explicacao: "GABARITO: CERTO. O art. 38, caput, da Lei nº 9.605/1998 estabelece pena de detenção de 1 a 3 anos, ou multa, ou ambas as penas cumulativamente. O parágrafo único prevê expressamente: 'Se o crime for culposo, a pena será reduzida à metade'.",
    alternativas: [
      { texto: "Certo", correta: true, explicacao_especifica: "Art. 38, caput e parágrafo único, da Lei nº 9.605/1998." },
      { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O crime admite expressamente modalidade culposa no parágrafo único do art. 38." }
    ]
  },

  // Q11 - IBFC / GM - Crime contra a Administração Ambiental: Obstar Fiscalização (Art. 69)
  {
    idSlug: "legesp-011",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Integrantes da Guarda Civil Municipal e fiscais da Secretaria Municipal do Meio Ambiente compareceram a um depósito comercial para realizar fiscalização rotineira acerca do armazenamento de produtos químicos. O responsável pelo estabelecimento trancou os portões, ocultou os registros obrigatórios e impediu fisicamente a entrada da equipe fiscalizadora. Nos termos da Lei nº 9.605/1998, a conduta de obstar ou dificultar a ação fiscalizadora do Poder Público no trato de questões ambientais:",
    explicacao: "GABARITO: A. O art. 69 da Lei nº 9.605/1998 dispõe: 'Obstar ou dificultar a ação fiscalizadora do Poder Público no trato de questões ambientais: Pena - detenção, de um a três anos, e multa'. É crime contra a administração ambiental.",
    alternativas: [
      { letra: "A", texto: "configura crime contra a administração ambiental expressamente tipificado no art. 69 da Lei nº 9.605/1998, com pena de detenção de um a três anos e multa.", correta: true, explicacao_especifica: "Art. 69 da Lei nº 9.605/1998." },
      { letra: "B", texto: "configura apenas crime de desobediência comum do Código Penal (art. 330), pois a lei ambiental não possui tipo penal para condutas contra a fiscalização.", correta: false, explicacao_especifica: "A Lei 9.605/98 possui tipo penal específico e especial no art. 69 (princípio da especialidade)." },
      { letra: "C", texto: "é conduta atípica no âmbito penal, resolvendo-se unicamente em auto de infração administrativa e multa cominatória diária.", correta: false, explicacao_especifica: "O art. 69 prevê expressa responsabilização criminal." },
      { letra: "D", texto: "constitui crime de prevaricação imprópria sujeito a pena de reclusão de dois a seis anos.", correta: false, explicacao_especifica: "Prevaricação é crime funcional próprio praticado por funcionário público contra a administração em geral." },
      { letra: "E", texto: "só se consuma se comprovada a existência de dano ecológico material preexistente no interior do estabelecimento.", correta: false, explicacao_especifica: "O crime do art. 69 é formal e consuma-se com o simples ato de obstar ou dificultar a fiscalização." }
    ]
  },

  // Q12 - CEBRASPE / PRF - Transporte Ilegal de Madeira sem Licença Válida (Art. 46)
  {
    idSlug: "legesp-012",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O condutor de caminhão que transporta madeira de origem nativa em rodovia federal munido de Documento de Origem Florestal (DOF) cuja rota descrita seja manifestamente divergente do itinerário percorrido ou com prazo de validade expirado pratica o crime tipificado no art. 46, parágrafo único, da Lei nº 9.605/1998, que pune aquele que transporta ou guarda madeira, lenha ou carvão sem licença válida para todo o tempo da viagem outorgada pela autoridade competente.",
    explicacao: "GABARITO: CERTO. Art. 46, parágrafo único, da Lei nº 9.605/1998: 'Incorre nas mesmas penas [detenção de seis meses a um ano e multa] quem vende, expõe à venda, tem em depósito, transporta ou guarda madeira, lenha, carvão e outros produtos de origem vegetal, sem licença válida para todo o tempo da viagem ou do armazenamento, outorgada pela autoridade competente'.",
    alternativas: [
      { texto: "Certo", correta: true, explicacao_especifica: "Art. 46, parágrafo único, da Lei nº 9.605/1998 e Súmula 182 do STJ/jurisprudência consolidada." },
      { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O transporte com DOF vencido ou fraudado amolda-se perfeitamente ao art. 46, parágrafo único." }
    ]
  },

  // Q13 - FGV / PM - Pesca em Período de Defeso ou com Apetrechos Proibidos (Art. 34)
  {
    idSlug: "legesp-013",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em patrulhamento náutico realizado em represa pública durante o período da piracema (defeso da reprodução dos peixes, legalmente fixado por portaria do órgão ambiental), uma guarnição da Polícia Militar Ambiental surpreendeu dois indivíduos utilizando redes de emalhar com malhas de dimensões inferiores às permitidas pela regulamentação, capturando espécimes nativos. Acerca da tipificação penal conforme a Lei nº 9.605/1998, os agentes:",
    explicacao: "GABARITO: E. O art. 34, caput e parágrafo único, II, da Lei nº 9.605/1998 tipifica o crime de 'Pescar em período no qual a pesca seja proibida ou em lugares interditados por órgão competente' e incorre nas mesmas penas quem 'pesca quantidades superiores às permitidas, ou mediante a utilização de aparelhos, petrechos, técnicas e métodos não permitidos', apenado com detenção de 1 a 3 anos ou multa, ou ambas cumulativamente.",
    alternativas: [
      { letra: "A", texto: "praticaram apenas infração de tráfego aquaviário de competência da Capitania dos Portos da Marinha do Brasil.", correta: false, explicacao_especifica: "A conduta tipifica crime ambiental contra a fauna ictiológica (art. 34 da Lei 9.605/98)." },
      { letra: "B", texto: "cometeram crime inafiançável de furto de bens públicos da União em concurso formal com dano ao patrimônio.", correta: false, explicacao_especifica: "Os peixes em ambiente natural são res nullius sujeitos à tutela da fauna no art. 34 da Lei 9.605/98." },
      { letra: "C", texto: "estão isentos de responsabilidade penal em razão do princípio da livre iniciativa pesqueira previsto na Constituição Federal.", correta: false, explicacao_especifica: "A liberdade de atividade econômica sujeita-se às normas constitucionais de proteção ambiental (art. 225 da CF/88)." },
      { letra: "D", texto: "praticaram ato atípico se a quantidade de peixes apreendida for inferior a cem quilogramas por pescador.", correta: false, explicacao_especifica: "A pesca em época de defeso ou com petrecho proibido é crime formal de perigo abstrato, independente da quantidade capturada." },
      { letra: "E", texto: "praticaram o crime de pesca proibida tipificado no art. 34 da Lei nº 9.605/1998, com pena de detenção de um a três anos ou multa, ou ambas as penas cumulativamente.", correta: true, explicacao_especifica: "Art. 34, caput e parágrafo único, II, da Lei nº 9.605/1998." }
    ]
  },

  // Q14 - CEBRASPE / PM - Desconsideração da Pessoa Jurídica no Direito Ambiental (Art. 4º)
  {
    idSlug: "legesp-014",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 4º da Lei nº 9.605/1998, a pessoa jurídica poderá ser desconsiderada sempre que sua personalidade for obstáculo ao ressarcimento de prejuízos causados à qualidade do meio ambiente, hipótese em que se adota a denominada teoria menor da desconsideração da personalidade jurídica, dispensando-se a demonstração de desvio de finalidade ou confusão patrimonial.",
    explicacao: "GABARITO: CERTO. O art. 4º da Lei nº 9.605/1998 adota a 'Teoria Menor' da desconsideração da personalidade jurídica: basta que a pessoa jurídica represente um obstáculo ao ressarcimento dos danos causados ao meio ambiente para que seus sócios respondam patrimonialmente, sendo prescindível a prova de fraude ou confusão patrimonial (requisitos da teoria maior do art. 50 do Código Civil). Entendimento consolidado no STJ.",
    alternativas: [
      { texto: "Certo", correta: true, explicacao_especifica: "Art. 4º da Lei nº 9.605/1998 e jurisprudência pacífica do STJ." },
      { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O direito ambiental adota a teoria menor prevista expressamente no art. 4º da Lei 9.605/98." }
    ]
  },

  // Q15 - VUNESP / PC - Concessão Ilegal de Licença por Funcionário Público (Art. 67)
  {
    idSlug: "legesp-015",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Um servidor público ocupante do cargo de analista ambiental de órgão estadual, encarregado da emissão de licenças para loteamentos imobiliários, concedeu licença de instalação em favor de uma construtora em manifesto desacordo com as normas técnicas e resoluções do CONAMA, deixando de exigir o prévio Estudo de Impacto Ambiental (EIA/RIMA) legalmente obrigatório. No que tange aos crimes contra a administração ambiental disciplinados na Lei nº 9.605/1998, assinale a opção correta.",
    explicacao: "GABARITO: C. O art. 67 da Lei nº 9.605/1998 tipifica a conduta de 'Conceder o funcionário público licença, autorização ou permissão em desacordo com as normas ambientais, para as atividades, obras ou serviços cuja realização dependa de ato autorizativo do Poder Público: Pena - detenção, de um a três anos, e multa'. O parágrafo único prevê que 'Se o crime é culposo, a pena é de três meses a um ano de detenção, sem prejuízo da multa'.",
    alternativas: [
      { letra: "A", texto: "O fato é atípico criminalmente porque os atos de licenciamento ambiental possuem presunção absoluta de legitimidade e legalidade no direito administrativo.", correta: false, explicacao_especifica: "A concessão ilegal de licença ambiental é expressamente tipificada no art. 67 da Lei 9.605/98." },
      { letra: "B", texto: "A conduta configura prevaricação exclusiva do Código Penal, afastando a lei ambiental por se tratar de funcionário público estadual.", correta: false, explicacao_especifica: "A Lei 9.605/98 é norma especial e tipifica expressamente o crime no art. 67." },
      { letra: "C", texto: "O servidor cometeu crime próprio contra a administração ambiental (art. 67 da Lei nº 9.605/1998), que é punido com detenção de um a três anos e multa na forma dolosa, admitindo expressamente a modalidade culposa.", correta: true, explicacao_especifica: "Art. 67, caput e parágrafo único, da Lei nº 9.605/1998." },
      { letra: "D", texto: "O crime do art. 67 só pode ser imputado ao Secretário de Estado de Meio Ambiente, pois o tipo não abrange servidores comissionados ou analistas técnicos.", correta: false, explicacao_especifica: "O tipo utiliza a elementar 'funcionário público', abrangendo qualquer agente na acepção penal ampla (art. 327 do CP)." },
      { letra: "E", texto: "A responsabilidade penal do funcionário público extingue-se compulsoriamente se a empresa beneficiada anular administrativamente a licença após o início da ação penal.", correta: false, explicacao_especifica: "A anulação posterior da licença não extingue a punibilidade nem afasta a consumação do crime já aperfeiçoado." }
    ]
  },

  // Q16 - CEBRASPE / CBM - Fogo em Pastagem e Queimadas não Autorizadas (Art. 38 c/c Legislação Florestal)
  {
    idSlug: "legesp-016",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Soldado do Corpo de Bombeiros Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O uso de fogo em pastagens ou para limpeza de terrenos agrícolas sem a prévia autorização do órgão ambiental competente configura infração administrativa ambiental e, caso o fogo fuja ao controle e se alastre desordenadamente atingindo mata ou floresta nativa, caracterizará o crime do art. 41 da Lei nº 9.605/1998 em sua modalidade culposa ou dolosa eventual, a depender do elemento subjetivo apurado na conduta do agente.",
    explicacao: "GABARITO: CERTO. A queima não autorizada de pastagem sujeita o infrator às sanções administrativas do Decreto 6.514/2008 e Código Florestal (Lei 12.651/2012). Se o fogo atingir mata ou floresta, perfaz-se a tipicidade do art. 41 da Lei 9.605/1998 (provocar incêndio em mata ou floresta), a título de dolo (direto ou eventual) ou culpa (negligência/imprudência - parágrafo único).",
    alternativas: [
      { texto: "Certo", correta: true, explicacao_especifica: "Art. 41 da Lei nº 9.605/1998 e regras do Código Florestal/Decreto nº 6.514/2008." },
      { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O alastramento do fogo para floresta atrai a subsunção ao tipo penal do art. 41." }
    ]
  },

  // Q17 - IBFC / PRF - Extração Mineral sem Autorização e Usurpação de Patrimônio da União
  {
    idSlug: "legesp-017",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em operação em rodovia federal que margeia bacia hidrográfica, a PRF flagrou caminhões basculantes transportando grande volume de areia e cascalho extraídos clandestinamente do leito de um rio federal, sem qualquer autorização da Agência Nacional de Mineração (ANM) nem licença do órgão ambiental. De acordo com a jurisprudência pacificada do Supremo Tribunal Federal e do Superior Tribunal de Justiça, a extração mineral não autorizada:",
    explicacao: "GABARITO: D. O STJ e o STF pacificaram o entendimento de que a conduta de extrair matéria-prima mineral pertencente à União sem a devida autorização caracteriza o concurso formal/material entre o crime do art. 55 da Lei nº 9.605/1998 (executar pesquisa, lavra ou extração de recursos minerais sem autorização - crime ambiental) e o crime do art. 2º da Lei nº 8.176/1991 (usurpação de patrimônio da União / crime contra a ordem econômica), tendo em vista que tutelam bens jurídicos distintos (meio ambiente e patrimônio da União).",
    alternativas: [
      { letra: "A", texto: "configura exclusivamente o crime do art. 55 da Lei nº 9.605/1998, pois o princípio da especialidade afasta integralmente os crimes contra a ordem econômica.", correta: false, explicacao_especifica: "STF e STJ firmaram entendimento em sentido contrário: há concurso de crimes porque os bens jurídicos são diversos." },
      { letra: "B", texto: "é absorvida pelo crime de furto simples de areia previsto no art. 155 do Código Penal.", correta: false, explicacao_especifica: "Não se aplica furto comum, e sim os tipos especiais da Lei 8.176/91 e Lei 9.605/98." },
      { letra: "C", texto: "constitui conduta atípica no âmbito penal se a extração for de areia ou cascalho comum, por se tratarem de bens de valor ínfimo.", correta: false, explicacao_especifica: "Recursos minerais são bens da União (art. 20, IX da CF/88) e sua extração sem licença é formalmente típica e tutelada penalmente." },
      { letra: "D", texto: "configura concurso de crimes entre o art. 55 da Lei nº 9.605/1998 (crime ambiental) e o art. 2º da Lei nº 8.176/1991 (crime contra a ordem econômica - usurpação de bens da União), pois tutelam bens jurídicos distintos.", correta: true, explicacao_especifica: "Jurisprudência pacífica do STF (HC 102.877) e STJ (Súmula 658/Temas Repetitivos)." },
      { letra: "E", texto: "é de competência exclusiva da Justiça Estadual da comarca onde ocorreu a lavra, afastando o interesse federal.", correta: false, explicacao_especifica: "Por envolver usurpação de bem da União (art. 2º da Lei 8.176/91 e art. 20, IX da CF), a competência é da Justiça Federal." }
    ]
  },

  // Q18 - CEBRASPE / GM - Pichação x Grafite Artístico (Art. 65, § 2º)
  {
    idSlug: "legesp-018",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Não constitui crime ambiental a prática de grafite realizada com o objetivo de valorizar o patrimônio público ou privado mediante manifestação artística, desde que consentida pelo proprietário ou locatário do bem privado ou autorizada pelo órgão competente no caso de bem público.",
    explicacao: "GABARITO: CERTO. Art. 65, § 2º, da Lei nº 9.605/1998 (com redação da Lei nº 12.408/2011): 'Não constitui crime a prática de grafite realizada com o objetivo de valorizar o patrimônio público ou privado mediante manifestação artística, desde que consentida pelo proprietário ou locatário, no caso de bem privado, e, no caso de bem público, com a autorização do órgão competente e a observância das posturas municipais'.",
    alternativas: [
      { texto: "Certo", correta: true, explicacao_especifica: "Art. 65, § 2º da Lei nº 9.605/1998." },
      { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O grafite consentido/autorizado é expressamente descriminalizado no § 2º do art. 65." }
    ]
  },

  // Q19 - FGV / PM - Circunstâncias Agravantes Genéricas (Art. 15, II)
  {
    idSlug: "legesp-019",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos termos da Parte Geral da Lei nº 9.605/1998 (art. 15), são circunstâncias que agravam a pena, quando não constituem ou qualificam o crime, ter o agente cometido a infração:",
    explicacao: "GABARITO: B. O art. 15, II, da Lei nº 9.605/1998 elenca expressamente como circunstâncias agravantes ter o agente cometido a infração: para obter vantagem pecuniária (alínea 'a'); afetando ou expondo a perigo a saúde pública ou o meio ambiente (alínea 'c'); em período de defeso à fauna (alínea 'e'); em domingos ou feriados (alínea 'f'); à noite (alínea 'g'); em épocas de seca ou inundações (alínea 'h'); no interior do espaço territorial especialmente protegido (alínea 'i'); mediante fraude ou abuso de confiança (alínea 'l').",
    alternativas: [
      { letra: "A", texto: "exclusivamente se praticada contra espécie não ameaçada de extinção e em área urbana de preservação facultativa.", correta: false, explicacao_especifica: "Agressão a espécies ameaçadas agrava a pena, e não o inverso." },
      { letra: "B", texto: "em domingos ou feriados, à noite, em período de defeso da fauna, ou no interior de espaço territorial especialmente protegido.", correta: true, explicacao_especifica: "Art. 15, II, alíneas 'e', 'f', 'g' e 'i' da Lei nº 9.605/1998." },
      { letra: "C", texto: "mediante arrependimento eficaz ou prévia comunicação do perigo à autoridade fiscalizadora.", correta: false, explicacao_especifica: "A comunicação prévia do perigo é circunstância atenuante da pena (art. 14, II)." },
      { letra: "D", texto: "quando o agente possuir baixo grau de instrução ou escolaridade incompleta.", correta: false, explicacao_especifica: "Baixo grau de instrução é circunstância atenuante da pena (art. 14, I)." },
      { letra: "E", texto: "se o agente colaborar espontaneamente com a apuração da infração ambiental na fase inquisitorial.", correta: false, explicacao_especifica: "A colaboração com os órgãos ambientais na apuração do fato é atenuante genérica (art. 14, III)." }
    ]
  },

  // Q20 - CEBRASPE / PRF - Princípio da Insignificância em Matéria Ambiental
  {
    idSlug: "legesp-020",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A aplicação do princípio da insignificância a crimes ambientais é excepcional, exigindo a demonstração concomitante da mínima ofensividade da conduta, da ausência de periculosidade social da ação, do reduzidíssimo grau de reprovabilidade do comportamento e da inexpressividade da lesão jurídica provocada, devendo-se sopesar a capacidade de regeneração do ecossistema afetado.",
    explicacao: "GABARITO: CERTO. Conforme jurisprudência pacífica do STF e do STJ, o princípio da insignificância pode incidir em matéria ambiental, mas sua aplicação exige análise prudente e preenchimento cumulativo dos quatro vetores do STF, além da avaliação da capacidade de recomposição do meio ambiente atingido pela conduta.",
    alternativas: [
      { texto: "Certo", correta: true, explicacao_especifica: "Jurisprudência pacífica do STF (HC 112.563) e STJ." },
      { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O princípio da insignificância é plenamente admitido pela jurisprudência nos termos delineados no item." }
    ]
  },

  // Q21 - VUNESP / PM - Supressão de Vegetação no Bioma Mata Atlântica (Art. 38-A)
  {
    idSlug: "legesp-021",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um proprietário rural utilizou maquinário pesado para desmatar e danificar cinco hectares de vegetação secundária em estágio avançado de regeneração no Bioma Mata Atlântica, em desacordo com as normas de proteção e sem autorização do órgão florestal. De acordo com o art. 38-A da Lei nº 9.605/1998, a conduta descrita:",
    explicacao: "GABARITO: A. O art. 38-A da Lei nº 9.605/1998 (incluído pela Lei nº 11.428/2006) tipifica a conduta de 'Destruir ou danificar vegetação primária ou secundária, em estágio avançado ou médio de regeneração, do Bioma Mata Atlântica, ou utilizá-la com infringência das normas de proteção: Pena - detenção, de 1 (um) a 3 (três) anos, ou multa, ou ambas as penas cumulativamente'. O parágrafo único comina punição reduzida para a forma culposa.",
    alternativas: [
      { letra: "A", texto: "configura crime tipificado no art. 38-A da Lei nº 9.605/1998, com pena de detenção de um a três anos, ou multa, ou ambas as penas cumulativamente, admitindo modalidade culposa.", correta: true, explicacao_especifica: "Art. 38-A, caput e parágrafo único, da Lei nº 9.605/1998." },
      { letra: "B", texto: "é conduta atípica porque o Bioma Mata Atlântica não goza de tutela penal especial na legislação brasileira.", correta: false, explicacao_especifica: "O Bioma Mata Atlântica é patrimônio nacional (art. 225, § 4º da CF) com tipo penal expresso no art. 38-A." },
      { letra: "C", texto: "constitui crime de dano simples previsto no Código Penal, inafiançável e imprescritível.", correta: false, explicacao_especifica: "Aplica-se o tipo específico do art. 38-A da Lei 9.605/98." },
      { letra: "D", texto: "exige para sua consumação a ocorrência de deslizamento de terra ou erosão hídrica de grandes proporções.", correta: false, explicacao_especifica: "O crime consuma-se com a destruição ou dano à vegetação, dispensando outros desdobramentos trágicos." },
      { letra: "E", texto: "só se aplica à destruição de vegetação primária, sendo atípica a supressão de vegetação secundária em qualquer estágio regenerativo.", correta: false, explicacao_especifica: "O art. 38-A abrange expressamente vegetação secundária em estágio avançado ou médio de regeneração." }
    ]
  },

  // Q22 - CEBRASPE / CBM - Perícia Ambiental e Fixação do Dano (Art. 19)
  {
    idSlug: "legesp-022",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial do Corpo de Bombeiros Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Nos termos da Lei nº 9.605/1998 (art. 19), a perícia de constatação do dano ambiental, sempre que possível, fixará o montante do prejuízo causado para efeitos de prestação de fiança e cálculo do valor de indenização civil.",
    explicacao: "GABARITO: CERTO. Art. 19 da Lei nº 9.605/1998: 'A perícia de constatação do dano ambiental, sempre que possível, fixará o montante do prejuízo causado para efeitos de prestação de fiança e cálculo do valor de indenização'.",
    alternativas: [
      { texto: "Certo", correta: true, explicacao_especifica: "Art. 19 da Lei nº 9.605/1998." },
      { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O texto reproduz com fidelidade o comando imperativo do art. 19 da Lei 9.605/98." }
    ]
  },

  // Q23 - IBFC / PC - Armazenamento e Transporte de Substância Tóxica ou Perigosa (Art. 56)
  {
    idSlug: "legesp-023",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Policiais civis localizaram um galpão clandestino no qual eram armazenados, sem rotulagem de segurança, sem contenção e em desacordo com as resoluções técnicas ambientais, centenas de recipientes com agrotóxicos altamente inflamáveis e substâncias tóxicas perigosas à saúde humana. Conforme o art. 56 da Lei nº 9.605/1998, produzir, processar, embalar, importar, exportar, comercializar, fornecer, transportar, armazenar, guardar, ter em depósito ou usar produto ou substância tóxica, perigosa ou nociva à saúde humana ou ao meio ambiente, em desacordo com as exigências legais:",
    explicacao: "GABARITO: E. O art. 56 da Lei nº 9.605/1998 comina pena de reclusão de 1 a 4 anos e multa para quem manipula ou guarda substância tóxica, perigosa ou nociva em desacordo com as exigências legais. O tipo comina no § 1º as mesmas penas a quem abandona os produtos ou descumpre dever legal ao encerrar a atividade.",
    alternativas: [
      { letra: "A", texto: "configura mera irregularidade trabalhista sanável mediante advertência da Delegacia Regional do Trabalho.", correta: false, explicacao_especifica: "Trata-se de crime ambiental autônomo previsto no art. 56 da Lei 9.605/98." },
      { letra: "B", texto: "é conduta atípica se o material não tiver entrado em combustão nem atingido cursos de água corrente.", correta: false, explicacao_especifica: "O crime é de perigo comum/abstrato, consumando-se com o simples armazenamento em desacordo legal." },
      { letra: "C", texto: "constitui infração penal culposa exclusiva, punida apenas com pena pecuniária de cesta básica.", correta: false, explicacao_especifica: "O tipo principal é doloso e comina pena privativa de liberdade de reclusão de 1 a 4 anos e multa." },
      { letra: "D", texto: "equipara-se a crime de roubo de material controlado regulado pelo Estatuto do Desarmamento.", correta: false, explicacao_especifica: "Substâncias tóxicas e agrotóxicos são tutelados no art. 56 da Lei de Crimes Ambientais." },
      { letra: "E", texto: "configura crime ambiental apenado com reclusão de um a quatro anos e multa, incidindo nas mesmas penas quem abandona tais substâncias ou as utiliza em desacordo com as normas de segurança.", correta: true, explicacao_especifica: "Art. 56, caput e § 1º, da Lei nº 9.605/1998." }
    ]
  },

  // Q24 - CEBRASPE / GM - Descarte Irregular de Resíduos e Poluição Qualificada (Art. 54, § 2º, V)
  {
    idSlug: "legesp-024",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O lançamento de resíduos sólidos, líquidos ou gasosos, ou detritos, óleos ou substâncias oleosas, em desacordo com as exigências estabelecidas em leis ou regulamentos, constitui modalidade qualificada do crime de poluição prevista no art. 54, § 2º, V, da Lei nº 9.605/1998.",
    explicacao: "GABARITO: CERTO. Art. 54, § 2º, V, da Lei nº 9.605/1998: 'Se o crime: (...) V - ocorrer por lançamento de resíduos sólidos, líquidos ou gasosos, ou detritos, óleos ou substâncias oleosas, em desacordo com as exigências estabelecidas em leis ou regulamentos: Pena - reclusão, de um a cinco anos'.",
    alternativas: [
      { texto: "Certo", correta: true, explicacao_especifica: "Art. 54, § 2º, V da Lei nº 9.605/1998." },
      { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O dispositivo citado qualifica expressamente o crime de poluição com pena de reclusão de 1 a 5 anos." }
    ]
  },

  // Q25 - FGV / PM - Natureza da Ação Penal nos Crimes Ambientais (Art. 26)
  {
    idSlug: "legesp-025",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais_9605,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "No que concerne à ação penal para o processamento e julgamento dos crimes tipificados na Lei nº 9.605/1998 (Lei de Crimes Ambientais), assinale a afirmativa correta de acordo com o art. 26 do referido diploma legal.",
    explicacao: "GABARITO: C. O art. 26 da Lei nº 9.605/1998 estabelece de forma expressa e peremptória: 'Nas infrações penais previstas nesta Lei, a ação penal é pública incondicionada'.",
    alternativas: [
      { letra: "A", texto: "A ação penal é pública condicionada à representação do órgão ambiental do SISNAMA em todas as infrações contra a fauna.", correta: false, explicacao_especifica: "A ação penal é incondicionada, sem necessidade de representação de órgão ambiental." },
      { letra: "B", texto: "Tratando-se de crime de menor potencial ofensivo, a ação penal é privada subsidiária da pública com prazo decadencial de três meses.", correta: false, explicacao_especifica: "A ação é pública incondicionada por expressa determinação legal." },
      { letra: "C", texto: "Nas infrações penais previstas na Lei nº 9.605/1998, a ação penal é pública incondicionada em todas as hipóteses.", correta: true, explicacao_especifica: "Art. 26 da Lei nº 9.605/1998." },
      { letra: "D", texto: "A ação penal nos crimes contra a administração ambiental é pública condicionada à prévia requisição do Ministro do Meio Ambiente.", correta: false, explicacao_especifica: "Não há exigência de requisição ministerial para o processamento dos crimes ambientais." },
      { letra: "E", texto: "A ação penal depende de prévia aprovação judicial de termo de ajustamento de conduta (TAC) firmado entre as partes.", correta: false, explicacao_especifica: "O TAC civil não condiciona nem obsta o ajuizamento da ação penal pública incondicionada." }
    ]
  }
];
