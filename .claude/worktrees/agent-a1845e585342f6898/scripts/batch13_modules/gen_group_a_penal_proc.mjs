import { DISCIPLINAS, ASSUNTOS, criarQuestaoCE, criarQuestaoME, writeModuleFile } from "./helpers.mjs";

// ==========================================
// M02: DIREITO PENAL ESPECIAL (30 questões)
// ==========================================
const m02_data = [
  {
    tipo: "CE",
    slug: "l13-pen-esp-001-feminicidio-natureza-objetiva",
    assuntoId: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Delegado de Polícia Civil",
    dificuldade: "medio",
    enunciado: "O feminicídio, inserido como qualificadora do crime de homicídio no Art. 121, § 2º, VI, do Código Penal, possui natureza jurídica objetiva segundo entendimento jurisprudencial consolidado do Superior Tribunal de Justiça, sendo juridicamente compatível com qualificadoras de natureza subjetiva, tais como o motivo torpe ou fútil.",
    explicacao: "GABARITO: CERTO. Conforme jurisprudência pacífica do STJ (Tema Repetitivo e súmula persuasiva da 5ª e 6ª Turmas), o feminicídio é qualificadora de ordem objetiva (razões da condição de sexo feminino), sendo plenamente compatível com o motivo torpe ou fútil (qualificadoras de ordem subjetiva), não ocorrendo bis in idem.",
    gabaritoCerto: true,
    conceito: "Feminicídio e compatibilidade com qualificadoras subjetivas",
    habilidade: "Analisar a natureza objetiva da qualificadora do feminicídio e jurisprudência do STJ",
    tese: "Art. 121, § 2º, VI, do CP e jurisprudência consolidada do STJ",
    nivel: "analisar"
  },
  {
    tipo: "CE",
    slug: "l13-pen-esp-002-furto-noturno-estabelecimento-comercial",
    assuntoId: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO,
    banca: "Cebraspe", orgao: "Polícia Militar", cargo: "Soldado da Polícia Militar",
    dificuldade: "medio",
    enunciado: "A causa de aumento de pena decorrente do repouso noturno (Art. 155, § 1º, do CP) aplica-se exclusivamente quando a infração patrimonial é praticada em residência habitada, restando afastada a majorante se o furto ocorrer em estabelecimento comercial ou veículo em via pública durante a madrugada.",
    explicacao: "GABARITO: ERRADO. Segundo a jurisprudência consolidada do STJ (Súmula 582 analógica e Tema Repetitivo 282), a causa de aumento do repouso noturno aplica-se tanto em residências habitadas quanto em desabitadas, estabelecimentos comerciais e veículos estacionados em via pública, desde que praticado no período de repouso da comunidade.",
    gabaritoCerto: false,
    conceito: "Furto durante o repouso noturno",
    habilidade: "Identificar o alcance e aplicação do Art. 155, § 1º, do Código Penal",
    tese: "Art. 155, § 1º, do CP e jurisprudência do STJ",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-pen-esp-003-roubo-arma-fogo-apreensao-pericia",
    assuntoId: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO,
    banca: "Cebraspe", orgao: "Polícia Federal", cargo: "Agente de Polícia Federal",
    dificuldade: "dificil",
    enunciado: "No crime de roubo circunstanciado pelo emprego de arma de fogo (Art. 157, § 2º-A, I, do CP), a incidência da majorante independe da apreensão do artefato e da realização de perícia técnica para atestar sua potencialidade lesiva, desde que comprovada sua efetiva utilização por outros meios idôneos de prova, cabendo ao imputado o ônus de provar a eventual ineficácia do instrumento.",
    explicacao: "GABARITO: CERTO. É pacífica a jurisprudência do STF e do STJ de que a apreensão e a perícia da arma de fogo são dispensáveis quando o uso do artefato puder ser demonstrado por outros elementos de prova (como testemunhal e imagens de câmeras). Se a defesa alegar que a arma era simulacro ou inoperante, cabe a ela o ônus da prova (Art. 156 do CPP).",
    gabaritoCerto: true,
    conceito: "Roubo com arma de fogo e dispensabilidade de perícia",
    habilidade: "Aplicar entendimento jurisprudencial do STF/STJ sobre comprovação de arma no roubo",
    tese: "Art. 157, § 2º-A, I, do CP e precedentes de Cortes Superiores",
    nivel: "aplicar"
  },
  {
    tipo: "CE",
    slug: "l13-pen-esp-004-extorsao-mediante-sequestro-consumacao",
    assuntoId: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Investigador de Polícia",
    dificuldade: "medio",
    enunciado: "O crime de extorsão mediante sequestro (Art. 148 e 159 do CP) é classificado como crime formal, consumando-se no momento exato em que a vítima é privada de sua liberdade de locomoção com o fim específico de obtenção de qualquer vantagem como condição ou preço do resgate, sendo irrelevante para a consumação o pagamento ou a obtenção efetiva da quantia exigida.",
    explicacao: "GABARITO: CERTO. A extorsão mediante sequestro (Art. 159 do CP) é crime formal e permanente. Consuma-se com a privação da liberdade da vítima com o dolo específico de obter vantagem econômica como resgate. A obtenção efetiva da vantagem é mero exaurimento do delito.",
    gabaritoCerto: true,
    conceito: "Consumação do crime de extorsão mediante sequestro",
    habilidade: "Diferenciar momento consumativo e exaurimento em crimes patrimoniais",
    tese: "Art. 159 do CP e Súmula 96 do STJ aplicável à extorsão",
    nivel: "compreender"
  },
  {
    tipo: "ME",
    slug: "l13-pen-esp-005-estelionato-representacao-regra",
    assuntoId: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO,
    banca: "FGV", orgao: "Polícia Civil", cargo: "Escrivão de Polícia Civil",
    dificuldade: "medio",
    enunciado: "Com o advento da Lei nº 13.964/2019 (Pacote Anticrime), o crime de estelionato (Art. 171 do CP) passou a se processar, em regra, mediante ação penal pública condicionada à representação do ofendido. Assinale a alternativa que indica CORRETAMENTE uma hipótese em que a ação penal permanece como PÚBLICA INCONDICIONADA.",
    explicacao: "GABARITO: B. O Art. 171, § 5º, do Código Penal estabelece que a ação penal será pública incondicionada se a vítima for: I - a Administração Pública, direta ou indireta; II - criança ou adolescente; III - pessoa com deficiência mental; ou IV - maior de 70 (setenta) anos de idade ou incapaz.",
    alternativas: [
      { letra: "A", texto: "Vítima com idade igual ou superior a 60 (sessenta) anos de idade.", correta: false, explicacao_especifica: "Incorreta: o Estatuto da Pessoa Idosa considera idoso a partir de 60 anos, mas a exceção do Art. 171, § 5º, IV, exige expressamente maior de 70 anos." },
      { letra: "B", texto: "Vítima que seja pessoa com deficiência mental ou criança/adolescente.", correta: true, explicacao_especifica: "Correta: expressamente prevista no Art. 171, § 5º, incisos II e III, do Código Penal." },
      { letra: "C", texto: "Prejuízo patrimonial apurado superior a cem salários mínimos.", correta: false, explicacao_especifica: "Incorreta: o valor do prejuízo econômico não altera a natureza da ação penal no estelionato." },
      { letra: "D", texto: "Prática do delito mediante fraude telemática cometida do exterior.", correta: false, explicacao_especifica: "Incorreta: a fraude telemática qualifica o crime (Art. 171, § 4º), mas não altera per se a exigência de representação." },
      { letra: "E", texto: "Cometimento do crime em concurso de pessoas contra instituição bancária privada.", correta: false, explicacao_especifica: "Incorreta: contra instituição privada segue a regra geral da representação, salvo se a vítima se enquadrar nas exceções do § 5º." }
    ],
    conceito: "Ação penal no estelionato após o Pacote Anticrime",
    habilidade: "Identificar as exceções legais de ação pública incondicionada no estelionato",
    tese: "Art. 171, § 5º, do Código Penal",
    nivel: "recordar"
  },
  {
    tipo: "CE",
    slug: "l13-pen-esp-006-peculato-culposo-reparacao-dano",
    assuntoId: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA,
    banca: "Cebraspe", orgao: "Polícia Rodoviária Federal", cargo: "Policial Rodoviário Federal",
    dificuldade: "facil",
    enunciado: "No crime de peculato culposo (Art. 312, § 2º, do CP), a reparação do dano patrimonial antes da sentença irrecorrível extingue a punibilidade do agente, ao passo que a reparação posterior ao trânsito em julgado reduz de metade a pena imposta.",
    explicacao: "GABARITO: CERTO. Art. 312, § 3º, do CP: 'No caso do parágrafo anterior, a reparação do dano, se precede à sentença irrecorrível, extingue a punibilidade; se lhe é posterior, reduz de metade a pena imposta'.",
    gabaritoCerto: true,
    conceito: "Extinção da punibilidade e redução de pena no peculato culposo",
    habilidade: "Reconhecer os efeitos da reparação do dano no peculato culposo",
    tese: "Art. 312, § 3º, do Código Penal",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-pen-esp-007-concussao-versus-corrupcao-passiva",
    assuntoId: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA,
    banca: "Cebraspe", orgao: "Polícia Civil", cargo: "Investigador de Polícia",
    dificuldade: "medio",
    enunciado: "A distinção dogmática elementar entre os crimes de concussão (Art. 316 do CP) e de corrupção passiva (Art. 317 do CP) reside no verbo nuclear da conduta: na concussão o funcionário público 'exige' a vantagem indevida com imposição coercitiva, enquanto na corrupção passiva ele 'solicita', 'recebe' ou 'aceita promessa' de tal vantagem.",
    explicacao: "GABARITO: CERTO. O núcleo da concussão é 'exigir' (impor temor, intimidação decorrente da função). Na corrupção passiva, os núcleos são 'solicitar', 'receber' ou 'aceitar promessa' de vantagem indevida, inexistindo imposição intimidatória.",
    gabaritoCerto: true,
    conceito: "Diferença entre concussão e corrupção passiva",
    habilidade: "Distinguir os verbos nucleares e elementos típicos dos crimes contra a Administração Pública",
    tese: "Arts. 316 e 317 do Código Penal",
    nivel: "compreender"
  },
  {
    tipo: "CE",
    slug: "l13-pen-esp-008-prevaricacao-sentimento-pessoal",
    assuntoId: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA,
    banca: "Cebraspe", orgao: "Polícia Penal", cargo: "Policial Penal",
    dificuldade: "medio",
    enunciado: "Para a configuração do crime de prevaricação (Art. 319 do CP), é indispensável a demonstração do elemento subjetivo especial do tipo consistente na finalidade de satisfazer interesse ou sentimento pessoal, não bastando a simples desídia funcional ou descumprimento culposo de dever funcional.",
    explicacao: "GABARITO: CERTO. O Art. 319 exige expressamente o especial fim de agir: 'para satisfazer interesse ou sentimento pessoal'. A mera preguiça, inabilidade ou atraso sem a intenção pessoal não configura prevaricação, podendo gerar apenas sanção administrativo-disciplinar.",
    gabaritoCerto: true,
    conceito: "Elemento subjetivo específico no crime de prevaricação",
    habilidade: "Identificar o dolo específico e os limites entre ilícito penal e falta administrativa",
    tese: "Art. 319 do Código Penal",
    nivel: "analisar"
  },
  {
    tipo: "CE",
    slug: "l13-pen-esp-009-desobediencia-versus-desacato",
    assuntoId: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA,
    banca: "Cebraspe", orgao: "Guarda Municipal", cargo: "Guarda Civil Municipal",
    dificuldade: "facil",
    enunciado: "O crime de desacato (Art. 331 do CP), consistente em desacatar funcionário público no exercício da função ou em razão dela, foi integralmente descriminalizado no ordenamento jurídico brasileiro em razão de decisão com efeito vinculante proferida pela Corte Interamericana de Direitos Humanos.",
    explicacao: "GABARITO: ERRADO. O Plenário do STF (na ADPF 496) e a 3ª Seção do STJ (HC 379.269/MS) fixaram que o tipo penal de desacato (Art. 331 do CP) é plenamente compatível com a Constituição Federal de 1988 e com o Pacto de São José da Costa Rica, permanecendo em vigor e tutelando a função pública.",
    gabaritoCerto: false,
    conceito: "Constitucionalidade e vigência do crime de desacato",
    habilidade: "Analisar a vigência do desacato à luz da jurisprudência do STF e STJ",
    tese: "Art. 331 do CP e ADPF 496/STF",
    nivel: "recordar"
  },
  {
    tipo: "ME",
    slug: "l13-pen-esp-010-corrupcao-ativa-flagrante-consumacao",
    assuntoId: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA,
    banca: "Vunesp", orgao: "Polícia Militar", cargo: "Soldado da Polícia Militar",
    dificuldade: "medio",
    enunciado: "Durante blitz policial, um condutor oferece a quantia de R$ 2.000,00 aos policiais militares para que não registrem autuação de trânsito. Os policiais recusam de imediato a oferta e prendem o indivíduo em flagrante delito. Quanto ao crime de corrupção ativa (Art. 333 do CP), assinale a afirmativa correta:",
    explicacao: "GABARITO: C. O crime de corrupção ativa é formal (de consumação antecipada) e consuma-se no instante em que o particular oferece ou promete a vantagem indevida, independentemente de aceitação ou recebimento pelo servidor.",
    alternativas: [
      { letra: "A", texto: "Trata-se de crime tentado, pois os policiais não aceitaram nem receberam o montante em dinheiro.", correta: false, explicacao_especifica: "Incorreta: a corrupção ativa é crime formal e dispensa a aceitação." },
      { letra: "B", texto: "A conduta é atípica penalmente, configurando apenas infração administrativa de trânsito.", correta: false, explicacao_especifica: "Incorreta: a oferta de vantagem indevida a funcionário público é conduta típica autônoma do Art. 333." },
      { letra: "C", texto: "O crime consumou-se no momento da oferta, sendo irrelevante a recusa ou aceitação pelos policiais.", correta: true, explicacao_especifica: "Correta: por ser crime formal, a consumação ocorre com o simples oferecimento da vantagem." },
      { letra: "D", texto: "Houve desistência voluntária por parte do infrator ao perceber a intransigência dos policiais.", correta: false, explicacao_especifica: "Incorreta: o crime já estava consumado antes da recusa dos policiais." },
      { letra: "E", texto: "A consumação exigia a entrega física do numerário ao patrimônio dos policiais.", correta: false, explicacao_especifica: "Incorreta: a entrega física caracterizaria apenas o exaurimento do delito." }
    ],
    conceito: "Momento consumativo do crime de corrupção ativa",
    habilidade: "Classificar crimes formais e momentos consumativos no Direito Penal",
    tese: "Art. 333 do Código Penal",
    nivel: "aplicar"
  }
];

const penalEspecialTemas = [
  { slug: "l13-pen-esp-011-infanticidio-estado-puerperal", tese: "O infanticídio (Art. 123) exige que a mãe mate o próprio filho sob influência do estado puerperal durante ou logo após o parto, comunicando-se tal condição ao coautor (Art. 30 do CP).", certo: true, ass: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO, nivel: "compreender" },
  { slug: "l13-pen-esp-012-lesao-corporal-grave-debilidade", tese: "A debilidade permanente de membro, sentido ou função qualifica a lesão corporal no Art. 129, § 1º, III, enquanto a perda ou inutilização configura lesão gravíssima (§ 2º, III).", certo: true, ass: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO, nivel: "recordar" },
  { slug: "l13-pen-esp-013-omissao-socorro-policial", tese: "A omissão de socorro (Art. 135) é crime subsidiário e só se tipifica se o agente não responder por crime mais grave ou não ostentar o dever legal de garante (Art. 13, § 2º, a).", certo: true, ass: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO, nivel: "analisar" },
  { slug: "l13-pen-esp-014-calunia-excecao-da-verdade", tese: "Na calúnia (Art. 138), admite-se a exceção da verdade, salvo se constituindo o fato imputado crime de ação privada o ofendido não foi condenado por sentença irrecorrível.", certo: true, ass: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO, nivel: "compreender" },
  { slug: "l13-pen-esp-015-injuria-racial-equiparacao-racismo", tese: "Com a Lei 14.532/2023, a injúria racial foi deslocada para a Lei 7.716/1989 e passou a ser imprescritível e inafiançável, equiparada aos crimes de racismo.", certo: true, ass: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO, nivel: "recordar" },
  { slug: "l13-pen-esp-016-violacao-domicilio-dia-noite", tese: "O crime de violação de domicílio (Art. 150) qualifica-se se cometido durante a noite, ou em lugar ermo, ou com emprego de violência ou de arma, ou por duas ou mais pessoas.", certo: true, ass: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO, nivel: "compreender" },
  { slug: "l13-pen-esp-017-dano-qualificado-patrimonio-publico", tese: "O crime de dano simples é de ação privada, mas qualifica-se e torna-se de ação pública incondicionada se praticado contra o patrimônio da União, Estado, DF ou Município (Art. 163, parágrafo único, III).", certo: true, ass: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO, nivel: "aplicar" },
  { slug: "l13-pen-esp-018-apropriacao-indebita-previdenciaria", tese: "A apropriação indébita previdenciária (Art. 168-A) é crime omissivo próprio material cuja consumação dispensa o dolo específico de locupletamento ilícito (animus rem sibi habendi).", certo: true, ass: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO, nivel: "analisar" },
  { slug: "l13-pen-esp-019-receptacao-qualificada-comercio", tese: "A receptação qualificada (Art. 180, § 1º) pune com maior rigor quem adquire ou recebe coisa no exercício de atividade comercial ou industrial, bastando o dolo eventual ('deve saber').", certo: true, ass: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO, nivel: "compreender" },
  { slug: "l13-pen-esp-020-falsidade-ideologica-documento", tese: "A falsidade ideológica (Art. 299) recai sobre o conteúdo declaratório do documento formalmente autêntico, diferindo da falsidade material (Arts. 297/298), que atinge a própria forma física.", certo: true, ass: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA, nivel: "compreender" },
  { slug: "l13-pen-esp-021-uso-documento-falso-autoria", tese: "Segundo a Súmula 17 do STJ, quando o falso se exaure no estelionato, sem mais potencialidade lesiva, é por este absorvido, aplicando-se o princípio da consunção.", certo: true, ass: ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO, nivel: "aplicar" },
  { slug: "l13-pen-esp-022-falsa-identidade-autodefesa", tese: "A conduta de atribuir-se falsa identidade perante autoridade policial para ocultar antecedentes é típica (Art. 307), não estando acobertada pelo direito de autodefesa (Súmula 522 do STJ).", certo: true, ass: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA, nivel: "recordar" },
  { slug: "l13-pen-esp-023-peculato-mediante-fraude-distincao", tese: "No peculato mediante fraude (Art. 312), o agente se vale da facilidade do cargo para subtrair o bem, enquanto no estelionato clássico a fraude engana a vítima sem relação direta de cargo.", certo: true, ass: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA, nivel: "analisar" },
  { slug: "l13-pen-esp-024-condescendencia-criminosa-superior", tese: "A condescendência criminosa (Art. 320) exige que o superior deixe, por indulgência, de responsabilizar subordinado que cometeu infração no exercício do cargo.", certo: true, ass: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA, nivel: "compreender" },
  { slug: "l13-pen-esp-025-advocacia-administrativa-legitimidade", tese: "O crime de advocacia administrativa (Art. 321) pune o funcionário que patrocina interesse privado perante a administração pública, valendo-se da qualidade funcional, mesmo que legítimo o interesse.", certo: true, ass: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA, nivel: "compreender" },
  { slug: "l13-pen-esp-026-violacao-sigilo-funcional-dano", tese: "A violação de sigilo funcional (Art. 325) consuma-se com a revelação de fato sigiloso do qual tem ciência pela função, punindo-se inclusive a modalidade culposa se resulta dano.", certo: true, ass: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA, nivel: "analisar" },
  { slug: "l13-pen-esp-027-usurpacao-funcao-publica-vantagem", tese: "A usurpação de função pública (Art. 328) qualifica-se se o agente aufere vantagem indevida decorrente do exercício arbitrário da função pública usurpada.", certo: true, ass: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA, nivel: "compreender" },
  { slug: "l13-pen-esp-028-resistencia-desobediencia-violencia", tese: "O crime de resistência (Art. 329) exige emprego de violência ou ameaça contra o funcionário competente, ao passo que a desobediência (Art. 330) envolve mera inexecução de ordem legal sem violência.", certo: true, ass: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA, nivel: "aplicar" },
  { slug: "l13-pen-esp-029-denunciacao-caluniosa-investigacao", tese: "A denunciação caluniosa (Art. 339) configura-se quando o agente dá causa à instauração de investigação contra alguém, imputando-lhe crime ou infração ético-disciplinar de que o sabe inocente.", certo: true, ass: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA, nivel: "compreender" },
  { slug: "l13-pen-esp-030-falso-testemunho-retratacao", tese: "No falso testemunho (Art. 342), o fato deixa de ser punível se, antes da sentença no processo em que ocorreu o ilícito, o agente se retrata ou declara a verdade (§ 2º).", certo: true, ass: ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA, nivel: "recordar" }
];

const m02_questoes = [
  ...m02_data.map(q => q.tipo === "CE" ? criarQuestaoCE({
    slug: q.slug,
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: q.assuntoId,
    bancaNome: q.banca,
    orgaoNome: q.orgao,
    cargoNome: q.cargo,
    dificuldade: q.dificuldade,
    enunciado: q.enunciado,
    explicacao: q.explicacao,
    gabaritoCerto: q.gabaritoCerto,
    conceitoPrincipal: q.conceito,
    habilidadeCobrada: q.habilidade,
    teseOuRegra: q.tese,
    nivelCognitivo: q.nivel
  }) : criarQuestaoME({
    slug: q.slug,
    disciplinaId: DISCIPLINAS.DIREITO_PENAL,
    assuntoId: q.assuntoId,
    bancaNome: q.banca,
    orgaoNome: q.orgao,
    cargoNome: q.cargo,
    dificuldade: q.dificuldade,
    enunciado: q.enunciado,
    explicacao: q.explicacao,
    alternativas: q.alternativas,
    conceitoPrincipal: q.conceito,
    habilidadeCobrada: q.habilidade,
    teseOuRegra: q.tese,
    nivelCognitivo: q.nivel
  })),
  ...penalEspecialTemas.map((t, idx) => {
    const isME = (idx + 10) % 5 === 4;
    if (isME) {
      return criarQuestaoME({
        slug: t.slug,
        disciplinaId: DISCIPLINAS.DIREITO_PENAL,
        assuntoId: t.ass,
        bancaNome: "Vunesp",
        orgaoNome: "Polícia Civil",
        cargoNome: "Investigador de Polícia",
        ano: 2026,
        dificuldade: "medio",
        enunciado: `Acerca da dogmática e da jurisprudência sumulada dos Tribunais Superiores sobre o tema ${t.slug.replace(/l13-pen-esp-\d+-/, "").replace(/-/g, " ")}, assinale a alternativa juridicamente correta:`,
        explicacao: `GABARITO: A. ${t.tese}`,
        alternativas: [
          { letra: "A", texto: t.tese, correta: true, explicacao_especifica: "Alternativa correta conforme a literalidade normativa e jurisprudência consolidada." },
          { letra: "B", texto: `O Código Penal afasta peremptoriamente tal regramento em favor do princípio da insignificância patrimonial ilimitada.`, correta: false, explicacao_especifica: "Incorreta: proposição sem respaldo na legislação penal." },
          { letra: "C", texto: `A consumação depende de autorização judicial prévia específica outorgada pelo Juízo das Garantias.`, correta: false, explicacao_especifica: "Incorreta: distorce a sistemática de tipicidade e competência." },
          { letra: "D", texto: `Trata-se de infração de mera conduta insuscetível de qualquer causa de extinção da punibilidade.`, correta: false, explicacao_especifica: "Incorreta: generalização incorreta que contraria o Código Penal." },
          { letra: "E", texto: `Aplica-se unicamente a servidores federais da ativa, sendo atípica a conduta praticada por particulares.`, correta: false, explicacao_especifica: "Incorreta: restrição indevida não prevista em lei." }
        ],
        conceitoPrincipal: `Regime penal de ${t.slug.replace(/l13-pen-esp-\d+-/, "").replace(/-/g, " ")}`,
        habilidadeCobrada: `Identificar os requisitos típicos do instituto penal examinado`,
        teseOuRegra: t.tese,
        nivelCognitivo: t.nivel
      });
    } else {
      return criarQuestaoCE({
        slug: t.slug,
        disciplinaId: DISCIPLINAS.DIREITO_PENAL,
        assuntoId: t.ass,
        bancaNome: "Cebraspe",
        orgaoNome: "Polícia Federal",
        cargoNome: "Agente de Polícia Federal",
        ano: 2026,
        dificuldade: "medio",
        enunciado: `Em conformidade com as regras do Código Penal e a jurisprudência dominante: ${t.tese}`,
        explicacao: `A assertiva é juridicamente exata: ${t.tese}`,
        gabaritoCerto: true,
        conceitoPrincipal: `Aplicação prática de ${t.slug.replace(/l13-pen-esp-\d+-/, "").replace(/-/g, " ")}`,
        habilidadeCobrada: `Avaliar assertiva sobre aplicação das normas de Direito Penal Especial`,
        teseOuRegra: t.tese,
        nivelCognitivo: t.nivel
      });
    }
  })
];

writeModuleFile("m02_penal_especial.mjs", "m02_questoes", m02_questoes);

// =======================================================
// M03: PROCESSO PENAL - INQUÉRITO E AÇÃO PENAL (25 itens)
// =======================================================
const m03_temas = [
  { slug: "l13-proc-001-inquerito-caracteristicas-inquisitivo", tese: "O inquérito policial é procedimento administrativo de natureza inquisitiva, informativo e preparatório da ação penal, não se aplicando em sua fase preliminar o contraditório pleno e a ampla defesa nos mesmos moldes do processo judicial.", certo: true, ass: ASSUNTOS.PROC_PENAL_INQUERITO, nivel: "compreender" },
  { slug: "l13-proc-002-inquerito-indisponibilidade-delegado", tese: "A autoridade policial não poderá mandar arquivar autos de inquérito policial (Art. 17 do CPP), em observância ao princípio da indisponibilidade do inquérito policial.", certo: true, ass: ASSUNTOS.PROC_PENAL_INQUERITO, nivel: "recordar" },
  { slug: "l13-proc-003-notitia-criminis-inqualificada-anonima", tese: "A delatio criminis inqualificada (denúncia anônima) não autoriza, por si só, a imediata instauração do inquérito policial, exigindo prévia verificação sumária de sua procedência e plausibilidade pela polícia judiciária (VPI).", certo: true, ass: ASSUNTOS.PROC_PENAL_INQUERITO, nivel: "analisar" },
  { slug: "l13-proc-004-reproducao-simulada-autoincriminacao", tese: "A reprodução simulada dos fatos (reconstituição do crime - Art. 7º do CPP) não pode contrariar a moralidade e a ordem pública, sendo garantido ao indiciado o direito de recusa à participação com base no princípio nemo tenetur se detegere.", certo: true, ass: ASSUNTOS.PROC_PENAL_INQUERITO, nivel: "aplicar" },
  { slug: "l13-proc-005-sumula-vinculante-14-advogado", tese: "Conforme a Súmula Vinculante 14 do STF, é direito do defensor ter amplo acesso aos elementos de prova que, já documentados em procedimento investigatório, digam respeito ao exercício do direito de defesa.", certo: true, ass: ASSUNTOS.PROC_PENAL_INQUERITO, nivel: "compreender" },
  { slug: "l13-proc-006-inquerito-dispensabilidade-justa-causa", tese: "O inquérito policial é peça dispensável, podendo o titular da ação penal oferecer diretamente a denúncia ou queixa-crime se já dispuser de elementos informativos suficientes quanto à materialidade e indícios de autoria.", certo: true, ass: ASSUNTOS.PROC_PENAL_INQUERITO, nivel: "recordar" },
  { slug: "l13-proc-007-arquivamento-inquerito-stf-adi6298", tese: "Na sistemática de arquivamento do inquérito policial validada pelo STF nas ADIs do Juiz das Garantias, a manifestação de arquivamento pelo Ministério Público deve ser submetida à instância revisora interna do órgão ministerial em caso de irresignação da vítima.", certo: true, ass: ASSUNTOS.PROC_PENAL_INQUERITO, nivel: "analisar" },
  { slug: "l13-proc-008-prazos-conclusao-inquerito-federal", tese: "No âmbito da Justiça Federal (Lei 5.010/66), o prazo para conclusão do inquérito policial é de 15 dias para investigado preso (prorrogável por mais 15) e de 30 dias para investigado solto.", certo: true, ass: ASSUNTOS.PROC_PENAL_INQUERITO, nivel: "recordar" },
  { slug: "l13-proc-009-acao-penal-publica-incondicionada-obrigatoriedade", tese: "A ação penal pública incondicionada rege-se pelo princípio da obrigatoriedade ou legalidade processual, devendo o Ministério Público ajuizar a denúncia sempre que presentes os pressupostos processuais e a justa causa.", certo: true, ass: ASSUNTOS.PROC_PENAL_ACAO_PENAL, nivel: "compreender" },
  { slug: "l13-proc-010-representacao-prazo-decadencial", tese: "O direito de representação do ofendido na ação penal pública condicionada decai no prazo improrrogável de 6 meses, contado do dia em que vier a saber quem é o autor do crime (Art. 38 do CPP).", certo: true, ass: ASSUNTOS.PROC_PENAL_ACAO_PENAL, nivel: "compreender" },
  { slug: "l13-proc-011-retratacao-representacao-limite", tese: "A representação será irretratável depois de oferecida a denúncia (Art. 25 do CPP), ressalvada a disciplina protetiva especial da Lei Maria da Penha que exige audiência específica antes do recebimento da denúncia.", certo: true, ass: ASSUNTOS.PROC_PENAL_ACAO_PENAL, nivel: "analisar" },
  { slug: "l13-proc-012-acao-penal-privada-subsidiaria-prazo", tese: "A ação penal privada subsidiária da pública é cabível quando o Ministério Público não oferecer a denúncia nem determinar o arquivamento ou diligências no prazo legal, iniciando-se o prazo decadencial de 6 meses após o esgotamento do prazo do MP.", certo: true, ass: ASSUNTOS.PROC_PENAL_ACAO_PENAL, nivel: "aplicar" },
  { slug: "l13-proc-013-peremptio-acao-privada-morte", tese: "Na ação penal exclusivamente privada, sobrevindo a morte do querelante sem habilitação de sucessores no prazo legal de 60 dias, opera-se a perempção com a consequente extinção da punibilidade (Art. 60, II, do CPP).", certo: true, ass: ASSUNTOS.PROC_PENAL_ACAO_PENAL, nivel: "compreender" },
  { slug: "l13-proc-014-principio-indivisibilidade-acao-privada", tese: "O princípio da indivisibilidade rege a ação penal privada, não podendo o querelante escolher contra qual dos coautores irá ajuizar a queixa-crime, sob pena de renúncia tácita estensível a todos.", certo: true, ass: ASSUNTOS.PROC_PENAL_ACAO_PENAL, nivel: "analisar" },
  { slug: "l13-proc-015-anpp-requisitos-cumulativos", tese: "O Acordo de Não Persecução Penal (ANPP - Art. 28-A do CPP) exige confissão formal e circunstanciada de infração penal sem violência ou grave ameaça e com pena mínima cominada inferior a 4 anos.", certo: true, ass: ASSUNTOS.PROC_PENAL_ACAO_PENAL, nivel: "recordar" },
  { slug: "l13-proc-016-competencia-ratione-loci-teoria-resultado", tese: "A competência de foro territorial (ratione loci) firma-se, como regra geral no processo penal brasileiro, pelo lugar em que se consumar a infração (Art. 70 do CPP - teoria do resultado).", certo: true, ass: ASSUNTOS.PROC_PENAL_JURISDICAO_COMPETENCIA, nivel: "compreender" },
  { slug: "l13-proc-017-competencia-crimes-estelionato-deposito", tese: "Com a alteração do Art. 70, § 4º, do CPP, no crime de estelionato praticado mediante depósito, transferência de valores ou cheque sem provisão, a competência é do juízo do local do domicílio da vítima.", certo: true, ass: ASSUNTOS.PROC_PENAL_JURISDICAO_COMPETENCIA, nivel: "recordar" },
  { slug: "l13-proc-018-competencia-juri-crimes-conexos", tese: "A competência do Tribunal do Júri para julgamento de crimes dolosos contra a vida atrai os crimes comuns conexos por força da vis attractiva constitucionalmente assegurada.", certo: true, ass: ASSUNTOS.PROC_PENAL_JURISDICAO_COMPETENCIA, nivel: "aplicar" },
  { slug: "l13-proc-019-perpetuatio-jurisdictionis-desclassificacao", tese: "Operada a desclassificação do crime doloso contra a vida para outro não doloso na primeira fase do rito do Júri (pronúncia), os autos devem ser remetidos ao juiz singular competente (Art. 419 do CPP).", certo: true, ass: ASSUNTOS.PROC_PENAL_JURISDICAO_COMPETENCIA, nivel: "compreender" },
  { slug: "l13-proc-020-competencia-justica-federal-criterios", tese: "Compete à Justiça Federal processar e julgar as infrações penais praticadas em detrimento de bens, serviços ou interesse da União ou de suas entidades autárquicas ou empresas públicas, excluídas as sociedades de economia mista (Art. 109, IV, da CF e Súmula 518/STJ).", certo: true, ass: ASSUNTOS.PROC_PENAL_JURISDICAO_COMPETENCIA, nivel: "analisar" },
  { slug: "l13-proc-021-foro-prerrogativa-funcao-stf-limites", tese: "O foro por prerrogativa de função aplica-se apenas aos crimes cometidos durante o exercício do cargo e relacionados às funções desempenhadas, prorrogando-se a competência se a instrução já se encerrou com intimação para alegações finais.", certo: true, ass: ASSUNTOS.PROC_PENAL_JURISDICAO_COMPETENCIA, nivel: "analisar" },
  { slug: "l13-proc-022-conexao-intersubjetiva-concursal", tese: "A conexão intersubjetiva por concurso (Art. 76, I, do CPP) ocorre quando duas ou mais infrações forem praticadas por várias pessoas em colaboração recíproca.", certo: true, ass: ASSUNTOS.PROC_PENAL_JURISDICAO_COMPETENCIA, nivel: "compreender" },
  { slug: "l13-proc-023-prevencao-juizo-competencia-subsidiaria", tese: "A competência por prevenção firma-se quando, concorrendo dois ou mais juízes igualmente competentes, um deles tiver antecedido aos outros na prática de algum ato do processo ou de medida cautelar anterior.", certo: true, ass: ASSUNTOS.PROC_PENAL_JURISDICAO_COMPETENCIA, nivel: "compreender" },
  { slug: "l13-proc-024-mutatio-libelli-aditamento-denuncia", tese: "Na mutatio libelli (Art. 384 do CPP), surgindo prova nova em juízo de elementar ou circunstância não contida na denúncia que importe em nova definição jurídica com pena mais grave, é obrigatório o aditamento pelo Ministério Público.", certo: true, ass: ASSUNTOS.PROC_PENAL_ACAO_PENAL, nivel: "aplicar" },
  { slug: "l13-proc-025-juiz-das-garantias-competencia-fim", tese: "A competência funcional do Juiz das Garantias cessa com o recebimento da denúncia ou queixa, momento a partir do qual as decisões cabem ao juiz da instrução e julgamento (Art. 3º-C do CPP).", certo: true, ass: ASSUNTOS.PROC_PENAL_INQUERITO, nivel: "recordar" }
];

const m03_questoes = m03_temas.map((t, idx) => {
  const isME = idx % 5 === 4;
  if (isME) {
    return criarQuestaoME({
      slug: t.slug,
      disciplinaId: DISCIPLINAS.DIREITO_PROCESSUAL_PENAL,
      assuntoId: t.ass,
      bancaNome: "Cebraspe",
      orgaoNome: "Polícia Civil",
      cargoNome: "Delegado de Polícia Civil",
      ano: 2026,
      dificuldade: "medio",
      enunciado: `Em relação às diretrizes normativas do Código de Processo Penal e à jurisprudência do STF/STJ sobre ${t.slug.replace(/l13-proc-\d+-/, "").replace(/-/g, " ")}, assinale a opção correta:`,
      explicacao: `GABARITO: A. ${t.tese}`,
      alternativas: [
        { letra: "A", texto: t.tese, correta: true, explicacao_especifica: "Alternativa correta conforme disciplina legal e jurisprudencial dominante." },
        { letra: "B", texto: "A autoridade policial pode discricionariamente revogar medidas judiciais irrecorríveis.", correta: false, explicacao_especifica: "Incorreta: ausência de competência jurisdicional da autoridade policial." },
        { letra: "C", texto: "O titular da ação penal fica vinculado à capitulação jurídica atribuída no relatório policial.", correta: false, explicacao_especifica: "Incorreta: o MP possui autonomia na formulação da opinio delicti." },
        { letra: "D", texto: "O procedimento investigatório preliminar submete-se à obrigatoriedade de contraditório prévio da defesa em todos os atos.", correta: false, explicacao_especifica: "Incorreta: o inquérito é marcado pela inquisitividade com as garantias da SV 14." },
        { letra: "E", texto: "A competência firma-se exclusivamente pelo domicílio da vítima em qualquer modalidade delitiva.", correta: false, explicacao_especifica: "Incorreta: a regra geral é o local de consumação (Art. 70 do CPP)." }
      ],
      conceitoPrincipal: `Regime processual de ${t.slug.replace(/l13-proc-\d+-/, "").replace(/-/g, " ")}`,
      habilidadeCobrada: "Identificar as regras de inquérito, ação penal e competência",
      teseOuRegra: t.tese,
      nivelCognitivo: t.nivel
    });
  } else {
    return criarQuestaoCE({
      slug: t.slug,
      disciplinaId: DISCIPLINAS.DIREITO_PROCESSUAL_PENAL,
      assuntoId: t.ass,
      bancaNome: "Cebraspe",
      orgaoNome: "Polícia Federal",
      cargoNome: "Agente de Polícia Federal",
      ano: 2026,
      dificuldade: "medio",
      enunciado: `Julgue a assertiva sob a ótica do Direito Processual Penal: ${t.tese}`,
      explicacao: `A assertiva é correta: ${t.tese}`,
      gabaritoCerto: true,
      conceitoPrincipal: `Aplicação prática de ${t.slug.replace(/l13-proc-\d+-/, "").replace(/-/g, " ")}`,
      habilidadeCobrada: "Julgar assertiva de inquérito e ação penal",
      teseOuRegra: t.tese,
      nivelCognitivo: t.nivel
    });
  }
});

writeModuleFile("m03_proc_penal_inquerito_acao.mjs", "m03_questoes", m03_questoes);

// =====================================================================
// M04: PROCESSO PENAL - PRISÕES, PROVAS E MEDIDAS CAUTELARES (30 itens)
// =====================================================================
const m04_temas = [
  { slug: "l13-proc-026-flagrante-proprio-quase-flagrante", tese: "Considera-se em flagrante próprio quem está cometendo a infração ou acaba de cometê-la (Art. 302, I e II), enquanto o flagrante impróprio (quase-flagrante) ocorre quando o agente é perseguido logo após em situação que faça presumir ser ele o autor (Art. 302, III).", certo: true, ass: ASSUNTOS.PROC_PENAL_PRISOES_FLAGRANTE, nivel: "compreender" },
  { slug: "l13-proc-027-flagrante-preparado-crime-impossivel", tese: "Conforme a Súmula 145 do STF, não há crime quando a preparação do flagrante pela polícia torna impossível a sua consumação (flagrante provocado/preparado gerando crime impossível).", certo: true, ass: ASSUNTOS.PROC_PENAL_PRISOES_FLAGRANTE, nivel: "recordar" },
  { slug: "l13-proc-028-flagrante-esperado-licitude", tese: "O flagrante esperado, no qual a polícia, tomando conhecimento prévio da futura prática criminosa, apenas se posiciona e aguarda a execução do delito para intervir sem qualquer induzimento, é plenamente válido e lícito.", certo: true, ass: ASSUNTOS.PROC_PENAL_PRISOES_FLAGRANTE, nivel: "compreender" },
  { slug: "l13-proc-029-audiencia-custodia-prazo-24h", tese: "Após a realização da prisão em flagrante, o preso deve ser apresentado à autoridade judicial no prazo máximo de 24 horas para a realização da audiência de custódia (Art. 310 do CPP e Resolução 213/CNJ).", certo: true, ass: ASSUNTOS.PROC_PENAL_PRISOES_FLAGRANTE, nivel: "recordar" },
  { slug: "l13-proc-030-vedacao-preventiva-oficio-juiz", tese: "Com as alterações da Lei 13.964/2019, é expressamente vedado ao magistrado decretar a prisão preventiva de ofício, tanto na fase investigatória quanto durante a instrução processual penal.", certo: true, ass: ASSUNTOS.PROC_PENAL_PRISOES_FLAGRANTE, nivel: "compreender" },
  { slug: "l13-proc-031-preventiva-requisito-pena-maxima", tese: "A prisão preventiva é admitida nos crimes dolosos punidos com pena privativa de liberdade máxima superior a 4 anos, ou se o réu for reincidente em crime doloso, ou para garantir a execução de medidas protetivas de urgência (Art. 313 do CPP).", certo: true, ass: ASSUNTOS.PROC_PENAL_PRISOES_FLAGRANTE, nivel: "compreender" },
  { slug: "l13-proc-032-revisao-nonagesimal-preventiva-stf", tese: "A não observância da revisão periódica da prisão preventiva a cada 90 dias (Art. 316, parágrafo único, do CPP) não acarreta a soltura automática do preso, devendo o juízo competente ser instado a reavaliar a necessidade da custódia (STF e STJ).", certo: true, ass: ASSUNTOS.PROC_PENAL_PRISOES_FLAGRANTE, nivel: "analisar" },
  { slug: "l13-proc-033-prisao-temporaria-rol-taxativo-adi", tese: "O STF, nas ADIs 3360 e 4109, fixou que a prisão temporária (Lei 7.960/89) exige demonstração de fumus comissi delicti e periculum libertatis, imprescindibilidade para as investigações e observância estrita ao rol taxativo de crimes da lei.", certo: true, ass: ASSUNTOS.PROC_PENAL_PRISOES_FLAGRANTE, nivel: "analisar" },
  { slug: "l13-proc-034-fianca-arbitramento-delegado-policia", tese: "A autoridade policial somente poderá conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a 4 (quatro) anos (Art. 322 do CPP).", certo: true, ass: ASSUNTOS.PROC_PENAL_PRISOES_FLAGRANTE, nivel: "recordar" },
  { slug: "l13-proc-035-liberdade-provisoria-vedacao-fianca", tese: "A inafiançabilidade do delito não impede a concessão de liberdade provisória sem fiança pelo magistrado, desde que ausentes os requisitos ensejadores da prisão preventiva.", certo: true, ass: ASSUNTOS.PROC_PENAL_PRISOES_FLAGRANTE, nivel: "compreender" },
  { slug: "l13-proc-036-cadeia-custodia-conceito-etapas", tese: "A cadeia de custódia compreende o conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio, iniciando-se com a preservação do local ou com a apreensão do vestígio (Art. 158-A do CPP).", certo: true, ass: ASSUNTOS.PROC_PENAL_PROVAS_CUSTODIA, nivel: "compreender" },
  { slug: "l13-proc-037-etapas-cadeia-custodia-fixacao-coleta", tese: "Dentre as etapas da cadeia de custódia positivadas no Art. 158-B do CPP, a 'fixação' consiste na descrição detalhada do vestígio conforme se encontra no local de crime, antecedendo a 'coleta' e o 'acondicionamento'.", certo: true, ass: ASSUNTOS.PROC_PENAL_PROVAS_CUSTODIA, nivel: "recordar" },
  { slug: "l13-proc-038-quebra-cadeia-custodia-consequencia-stj", tese: "A quebra da cadeia de custódia não conduz à imediata e automática nulidade da prova, devendo o magistrado examinar se a higidez do elemento material foi preservada, afetando a credibilidade e o peso probatório do vestígio (STJ).", certo: true, ass: ASSUNTOS.PROC_PENAL_PROVAS_CUSTODIA, nivel: "analisar" },
  { slug: "l13-proc-039-prova-ilicita-derivada-arvore-envenenada", tese: "São inadmissíveis as provas derivadas das ilícitas, salvo quando não evidenciado o nexo de causalidade ou quando as derivadas puderem ser obtidas por uma fonte independente (Art. 157, § 1º, do CPP - Teoria dos Frutos da Árvore Envenenada).", certo: true, ass: ASSUNTOS.PROC_PENAL_PROVAS_CUSTODIA, nivel: "compreender" },
  { slug: "l13-proc-040-fonte-independente-descoberta-inevitavel", tese: "Considera-se fonte independente aquela que por si só, seguindo os trâmites típicos da investigação, seria capaz de conduzir ao fato delituoso independentemente da prova originariamente ilícita.", certo: true, ass: ASSUNTOS.PROC_PENAL_PROVAS_CUSTODIA, nivel: "compreender" },
  { slug: "l13-proc-041-desentranhamento-prova-ilicita-juiz", tese: "Reconhecida a ilicitude da prova, esta deve ser desentranhada dos autos e inutilizada após preclusão da decisão judicial, ficando o juiz que conheceu do conteúdo probatório ilícito impedido de julgar a causa (Art. 157, § 5º, do CPP).", certo: true, ass: ASSUNTOS.PROC_PENAL_PROVAS_CUSTODIA, nivel: "recordar" },
  { slug: "l13-proc-042-exame-corpo-delito-indispensabilidade", tese: "Quando a infração deixar vestígios, é indispensável o exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado (Art. 158 do CPP).", certo: true, ass: ASSUNTOS.PROC_PENAL_PROVAS_CUSTODIA, nivel: "recordar" },
  { slug: "l13-proc-043-peritos-oficiais-nao-oficiais-requisitos", tese: "O exame de corpo de delito será realizado por perito oficial portador de diploma de curso superior ou, na sua falta, por duas pessoas idôneas portadoras de diploma superior preferencialmente na área específica (Art. 159 do CPP).", certo: true, ass: ASSUNTOS.PROC_PENAL_PROVAS_CUSTODIA, nivel: "recordar" },
  { slug: "l13-proc-044-reconhecimento-pessoas-formalidades-stj", tese: "A inobservância das formalidades do Art. 226 do CPP no reconhecimento pessoal de suspeitos invalida a prova para respaldar condenação se desacompanhada de outros elementos probatórios autônomos (STF e STJ).", certo: true, ass: ASSUNTOS.PROC_PENAL_PROVAS_CUSTODIA, nivel: "analisar" },
  { slug: "l13-proc-045-interrogatorio-direito-silencio-prejuizo", tese: "O silêncio do interrogado não importará em confissão e não poderá ser interpretado em prejuízo da própria defesa (Art. 186, parágrafo único, do CPP e Art. 5º, LXIII, da CF/88).", certo: true, ass: ASSUNTOS.PROC_PENAL_PROVAS_CUSTODIA, nivel: "compreender" },
  { slug: "l13-proc-046-busca-domiciliar-fundadas-razoes-stf", tese: "A entrada forçada em domicílio sem mandado judicial, mesmo em caso de crime permanente, exige fundadas razões devidamente justificadas a posteriori, sob pena de nulidade dos atos e responsabilidade civil/penal (RE 603.616/STF).", certo: true, ass: ASSUNTOS.PROC_PENAL_BUSCA_MEDIDAS, nivel: "analisar" },
  { slug: "l13-proc-047-consentimento-morador-gravacao-stj", tese: "O consentimento do morador para ingresso policial em domicílio deve ser registrado em áudio e vídeo e formalizado por declaração assinada, incumbindo ao Estado o ônus de comprovar a voluntariedade (STJ HC 598.051).", certo: true, ass: ASSUNTOS.PROC_PENAL_BUSCA_MEDIDAS, nivel: "analisar" },
  { slug: "l13-proc-048-busca-pessoal-fundada-suspeita", tese: "A busca pessoal dispensa mandado judicial em caso de prisão em flagrante ou quando houver fundada suspeita de que a pessoa oculte arma proibida ou coisas achadas ou obtidas por meios criminosos (Art. 244 do CPP).", certo: true, ass: ASSUNTOS.PROC_PENAL_BUSCA_MEDIDAS, nivel: "compreender" },
  { slug: "l13-proc-049-busca-apreensao-horario-cumprimento", tese: "A busca domiciliar mediante mandado judicial deve ser executada durante o dia, salvo se o morador consentir expressamente que se realize à noite (Art. 245 do CPP e Art. 22 da Lei 13.869/2019).", certo: true, ass: ASSUNTOS.PROC_PENAL_BUSCA_MEDIDAS, nivel: "recordar" },
  { slug: "l13-proc-050-sequestro-bens-requisitos-procedimento", tese: "O sequestro de bens imóveis adquiridos pelo indiciado com os proventos da infração pode ser decretado de ofício ou a requerimento do MP/ofendido, bastando a existência de indícios veementes da proveniência ilícita (Art. 125 e 126 do CPP).", certo: true, ass: ASSUNTOS.PROC_PENAL_BUSCA_MEDIDAS, nivel: "compreender" },
  { slug: "l13-proc-051-medidas-cautelares-diversas-prisao", tese: "As medidas cautelares diversas da prisão previstas no Art. 319 do CPP (como tornozeleira eletrônica e proibição de ausentar-se da comarca) orientam-se pelo binômio necessidade e adequação.", certo: true, ass: ASSUNTOS.PROC_PENAL_PRISOES_FLAGRANTE, nivel: "compreender" },
  { slug: "l13-proc-052-monitoramento-eletronico-descumprimento", tese: "O descumprimento injustificado de medida cautelar de monitoração eletrônica imposta judicialmente autoriza o magistrado a substituir a medida ou decretar a prisão preventiva (Art. 282, § 4º, do CPP).", certo: true, ass: ASSUNTOS.PROC_PENAL_PRISOES_FLAGRANTE, nivel: "aplicar" },
  { slug: "l13-proc-053-acesso-celular-apreendido-autorizacao", tese: "A apreensão de aparelho smartphone em flagrante delito não autoriza os policiais a acessarem os dados, mensagens e comunicações privadas sem prévia autorização judicial ou consentimento expresso e livre do titular (STF e STJ).", certo: true, ass: ASSUNTOS.PROC_PENAL_PROVAS_CUSTODIA, nivel: "analisar" },
  { slug: "l13-proc-054-inviolabilidade-escritorio-advocacia", tese: "O mandado de busca e apreensão em escritório de advocacia deve ser motivado, restrito aos limites da investigação contra o advogado e acompanhado de representante da OAB (Art. 7º, II, da Lei 8.906/94).", certo: true, ass: ASSUNTOS.PROC_PENAL_BUSCA_MEDIDAS, nivel: "compreender" },
  { slug: "l13-proc-055-pericia-dna-banco-perfis-geneticos", tese: "A Lei 12.037/2009 e o Art. 9º-A da Lei de Execução Penal autorizam a coleta compulsória de material biológico para identificação do perfil genético de condenados por crimes dolosos com violência grave contra a pessoa ou hediondos.", certo: true, ass: ASSUNTOS.PROC_PENAL_PROVAS_CUSTODIA, nivel: "recordar" }
];

const m04_questoes = m04_temas.map((t, idx) => {
  const isME = idx % 5 === 4;
  if (isME) {
    return criarQuestaoME({
      slug: t.slug,
      disciplinaId: DISCIPLINAS.DIREITO_PROCESSUAL_PENAL,
      assuntoId: t.ass,
      bancaNome: "Cebraspe",
      orgaoNome: "Polícia Federal",
      cargoNome: "Perito Criminal Federal",
      ano: 2026,
      dificuldade: "medio",
      enunciado: `No que tange às disposições do Código de Processo Penal e à jurisprudência do STF/STJ sobre ${t.slug.replace(/l13-proc-\d+-/, "").replace(/-/g, " ")}, assinale a opção correta:`,
      explicacao: `GABARITO: A. ${t.tese}`,
      alternativas: [
        { letra: "A", texto: t.tese, correta: true, explicacao_especifica: "Alternativa correta conforme disciplina legal e jurisprudencial dominante." },
        { letra: "B", texto: "Qualquer irregularidade na cadeia de custódia acarreta a nulidade absoluta imediata de todo o processo judicial.", correta: false, explicacao_especifica: "Incorreta: a jurisprudência avalia o impacto na confiabilidade da prova." },
        { letra: "C", texto: "A prisão temporária pode ser decretada de ofício pelo magistrado sempre que reputar conveniente.", correta: false, explicacao_especifica: "Incorreta: depende de representação policial ou requerimento do MP." },
        { letra: "D", texto: "A busca pessoal em via pública exige autorização prévia por escrito do Juiz das Garantias em qualquer caso.", correta: false, explicacao_especifica: "Incorreta: a fundada suspeita autoriza a busca pessoal sem mandado (Art. 244 do CPP)." },
        { letra: "E", texto: "A confissão do réu na fase policial supre integralmente a ausência de exame pericial de corpo de delito.", correta: false, explicacao_especifica: "Incorreta: contraria o Art. 158 do CPP." }
      ],
      conceitoPrincipal: `Regime probatório e cautelar de ${t.slug.replace(/l13-proc-\d+-/, "").replace(/-/g, " ")}`,
      habilidadeCobrada: "Analisar regras processuais sobre prisões, provas e medidas cautelares",
      teseOuRegra: t.tese,
      nivelCognitivo: t.nivel
    });
  } else {
    return criarQuestaoCE({
      slug: t.slug,
      disciplinaId: DISCIPLINAS.DIREITO_PROCESSUAL_PENAL,
      assuntoId: t.ass,
      bancaNome: "Cebraspe",
      orgaoNome: "Polícia Rodoviária Federal",
      cargoNome: "Policial Rodoviário Federal",
      ano: 2026,
      dificuldade: "medio",
      enunciado: `Julgue o item a seguir quanto a prisões, medidas cautelares e provas no processo penal: ${t.tese}`,
      explicacao: `A assertiva é correta: ${t.tese}`,
      gabaritoCerto: true,
      conceitoPrincipal: `Aplicação prática de ${t.slug.replace(/l13-proc-\d+-/, "").replace(/-/g, " ")}`,
      habilidadeCobrada: "Julgar assertiva sobre prisões e cadeia de custódia",
      teseOuRegra: t.tese,
      nivelCognitivo: t.nivel
    });
  }
});

writeModuleFile("m04_proc_penal_prisoes_provas.mjs", "m04_questoes", m04_questoes);
console.log(`[OK] M02 (${m02_questoes.length}), M03 (${m03_questoes.length}), M04 (${m04_questoes.length}) gerados.`);
