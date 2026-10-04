/**
 * Base de Conhecimento Pedagógico para Geração Automatizada de PDFs de Estudo.
 * Mapeia regras, doutrina, lei seca, pegadinhas e roteiros estruturados por disciplina e assunto.
 */

export function buildContentForTopic({ disciplinaNome, assuntoNome, assuntoDescricao }) {
  const discNorm = (disciplinaNome || "").toLowerCase().trim();
  const assNorm = (assuntoNome || "").toLowerCase().trim();

  // 1. DIREITO CONSTITUCIONAL
  if (discNorm.includes("constitucional")) {
    return buildConstitucionalContent(assNorm, assuntoNome, disciplinaNome);
  }

  // 2. DIREITO PENAL / PENAL MILITAR
  if (discNorm.includes("penal") && !discNorm.includes("processual") && !discNorm.includes("processo")) {
    return buildPenalContent(assNorm, assuntoNome, disciplinaNome);
  }

  // 3. DIREITO PROCESSUAL PENAL / PROCESSO PENAL
  if (discNorm.includes("processual penal") || discNorm.includes("processo penal")) {
    return buildProcessualPenalContent(assNorm, assuntoNome, disciplinaNome);
  }

  // 4. DIREITO ADMINISTRATIVO / ADMINISTRAÇÃO PÚBLICA
  if (discNorm.includes("administrativo") || discNorm.includes("administração")) {
    return buildAdministrativoContent(assNorm, assuntoNome, disciplinaNome);
  }

  // 5. LÍNGUA PORTUGUESA / REDAÇÃO / LITERATURA
  if (discNorm.includes("portuguesa") || discNorm.includes("língua") || discNorm.includes("literatura")) {
    return buildPortuguesContent(assNorm, assuntoNome, disciplinaNome);
  }

  // 6. RACIOCÍNIO LÓGICO / MATEMÁTICA / ESTATÍSTICA
  if (discNorm.includes("lógico") || discNorm.includes("matemát") || discNorm.includes("estatística")) {
    return buildExatasContent(assNorm, assuntoNome, disciplinaNome);
  }

  // 7. INFORMÁTICA / TECNOLOGIA
  if (discNorm.includes("informática") || discNorm.includes("tecnologia")) {
    return buildInformaticaContent(assNorm, assuntoNome, disciplinaNome);
  }

  // 8. LEGISLAÇÃO ESPECIAL / PENAL EXTRAVAGANTE
  if (discNorm.includes("extravagante") || discNorm.includes("especial") || discNorm.includes("legislação")) {
    return buildLegislacaoContent(assNorm, assuntoNome, disciplinaNome);
  }

  // 9. DIREITOS HUMANOS
  if (discNorm.includes("humanos")) {
    return buildDireitosHumanosContent(assNorm, assuntoNome, disciplinaNome);
  }

  // 10. CRIMINOLOGIA
  if (discNorm.includes("criminologia")) {
    return buildCriminologiaContent(assNorm, assuntoNome, disciplinaNome);
  }

  // 11. MEDICINA LEGAL
  if (discNorm.includes("medicina legal") || discNorm.includes("médic")) {
    return buildMedicinaLegalContent(assNorm, assuntoNome, disciplinaNome);
  }

  // 12. HISTÓRIA / GEOGRAFIA / CONHECIMENTOS REGIONAIS
  if (discNorm.includes("história") || discNorm.includes("geografia") || discNorm.includes("atualidades") || discNorm.includes("conhecimentos")) {
    return buildHumanasContent(assNorm, assuntoNome, disciplinaNome);
  }

  // 13. CIÊNCIAS / OUTROS (Química, Física, Biologia, Arquivologia, Contabilidade, Perícia, etc.)
  return buildGeneralContent(assNorm, assuntoNome, disciplinaNome, assuntoDescricao);
}

// ---------------- IMPLEMENTAÇÕES ESPECÍFICAS ----------------

function buildConstitucionalContent(assNorm, assuntoNome, disciplinaNome) {
  if (assNorm.includes("artigo 5") || assNorm.includes("fundamentais") || assNorm.includes("garantias")) {
    return {
      disciplina: disciplinaNome,
      assunto: assuntoNome,
      visaoGeral: {
        descricao: `O estudo dos Direitos e Garantias Fundamentais na CF/88 (art. 5º) compõe o núcleo basilar do Estado Democrático de Direito. Trata-se de matéria pétrea (art. 60, §4º, IV), de eficácia imediata (§1º), que vincula tanto o poder público quanto os particulares (eficácia horizontal dos direitos fundamentais).`,
        importancia: "Representa mais de 35% das questões de Direito Constitucional em concursos policiais e jurídicos.",
      },
      doutrina: [
        {
          titulo: "Titularidade e Âmbito de Proteção",
          conteudo: "Alcança brasileiros (natos e naturalizados), estrangeiros residentes e em trânsito no país, bem como pessoas jurídicas (naquilo que compatível com sua natureza, ex: honra objetiva e imagem).",
        },
        {
          titulo: "Inviolabilidade Domiciliar (Art. 5º, XI)",
          conteudo: "A casa é asilo inviolável. Exceções a qualquer hora: flagrante delito, desastre ou socorro. Exceção exclusivamente durante o dia: ordem judicial fundamentada.",
        },
        {
          titulo: "Inviolabilidade das Comunicações (Art. 5º, XII)",
          conteudo: "É inviolável o sigilo da correspondência, comunicações telegráficas, dados e comunicações telefônicas. Interceptação telefônica exige ordem judicial, para investigação criminal ou instrução processual penal, na forma da Lei 9.296/96.",
        },
        {
          titulo: "Remédios Constitucionais",
          conteudo: "Habeas Corpus (liberdade de locomoção, gratuito, dispensa advogado); Mandado de Segurança (direito líquido e certo não amparado por HC/HD, prazo de 120 dias); Habeas Data (acesso/retificação de registros pessoais em entidades governamentais/públicas, gratuito, exige recusa administrativa - Súmula 2 STJ); Ação Popular (cidadão com título eleitoral para anular ato lesivo ao patrimônio público, moralidade, meio ambiente).",
        },
      ],
      legislacao: [
        { referencia: "CF/88, Art. 5º, XI", dispositivo: "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo flagrante delito, desastre, socorro, ou, durante o dia, por determinação judicial." },
        { referencia: "CF/88, Art. 5º, LVI", dispositivo: "São inadmissíveis, no processo, as provas obtidas por meios ilícitos." },
        { referencia: "Súmula Vinculante 11 (STF)", dispositivo: "Só é lícito o uso de algemas em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia." },
      ],
      pegadinhas: [
        "A banca afirma que mandado de busca judicial pode ser executado à noite em caso grave: FALSO, ordem judicial somente durante o dia.",
        "A banca diz que pessoa jurídica pode impetrar Habeas Corpus: FALSO, PJ não tem liberdade física de locomoção.",
        "A banca afirma que Habeas Data cabe para obter cópia de processo administrativo alheio: FALSO, HD é personalíssimo e exige prévia recusa administrativa.",
      ],
      roteiro: [
        "Leitura minuciosa de todos os 79 incisos do Art. 5º da CF/88.",
        "Fixação do quadro comparativo dos Remédios Constitucionais (cabimento, legitimidade, custas e prazo).",
        "Resolução de 30 questões de provas anteriores sobre inviolabilidade de domicílio e comunicações.",
        "Revisão das Súmulas Vinculantes 11, 14, 25 e 56 do STF.",
      ],
    };
  }

  if (assNorm.includes("segurança pública") || assNorm.includes("144")) {
    return {
      disciplina: disciplinaNome,
      assunto: assuntoNome,
      visaoGeral: {
        descricao: `O Artigo 144 da CF/88 regulamenta a Segurança Pública como dever do Estado, direito e responsabilidade de todos, exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio. O rol dos órgãos de segurança pública previsto no art. 144 possui caráter taxativo segundo a jurisprudência do STF.`,
        importancia: "Tema obrigatório em 100% dos concursos para Polícia Militar, Polícia Civil, Polícia Penal, PF e PRF.",
      },
      doutrina: [
        {
          titulo: "Órgãos de Segurança Pública (Rol Taxativo)",
          conteudo: "Polícia Federal (PF), Polícia Rodoviária Federal (PRF), Polícia Ferroviária Federal (PFF), Polícias Civis (PC), Polícias Militares (PM), Corpos de Bombeiros Militares (CBM) e Polícias Penais federal, estaduais e distrital (EC 104/2019).",
        },
        {
          titulo: "Competências Constitucionais da PF",
          conteudo: "Apurar infrações contra a ordem política e social ou em detrimento de bens, serviços e interesses da União, suas autarquias e empresas públicas; prevenir e reprimir tráfico de drogas, contrabando e descaminho; exercer com exclusividade a polícia judiciária da União e de polícia marítima, aeroportuária e de fronteiras.",
        },
        {
          titulo: "Polícia Ostensiva vs Polícia Judiciária",
          conteudo: "Polícia Militar realiza a polícia ostensiva e a preservação da ordem pública. Polícia Civil (dirigida por delegados de carreira) exerce as funções de polícia judiciária e a apuração de infrações penais, exceto as militares.",
        },
        {
          titulo: "Guardas Municipais",
          conteudo: "Os municípios poderão constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações (art. 144, §8º). O STF pacificou que integram o Sistema Único de Segurança Pública (SUSP), embora com competência administrativa restrita.",
        },
      ],
      legislacao: [
        { referencia: "CF/88, Art. 144", dispositivo: "A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio." },
        { referencia: "CF/88, Art. 144, §5º-A (EC 104)", dispositivo: "Às polícias penais, vinculadas ao órgão administrador do sistema penal da unidade federativa a que pertencem, cabe a segurança dos estabelecimentos penais." },
        { referencia: "ADI 2.886 (STF)", dispositivo: "O rol dos órgãos de segurança pública do art. 144 da CF é de reprodução obrigatória pelos Estados, vedada a criação de novos órgãos de segurança não previstos pela Carta Magna." },
      ],
      pegadinhas: [
        "A banca tenta incluir as Forças Armadas no rol de órgãos de segurança pública do art. 144: FALSO, as Forças Armadas estão no art. 142 da CF.",
        "A banca afirma que a Polícia Militar exerce a função de polícia judiciária comum: FALSO, exerce polícia ostensiva e preventiva (exceto crimes militares).",
        "A banca afirma que a Polícia Penal é subordinada às Forças Armadas: FALSO, vincula-se ao órgão gestor do sistema prisional.",
      ],
      roteiro: [
        "Memorização exata das competências de cada órgão do Art. 144.",
        "Revisão do papel das Polícias Penais pós-EC 104/2019 e do estatuto das Guardas Municipais.",
        "Resolução de 25 questões sobre o Art. 144 e jurisprudência correlata do STF.",
      ],
    };
  }

  // Padrão Geral Constitucional
  return {
    disciplina: disciplinaNome,
    assunto: assuntoNome,
    visaoGeral: {
      descricao: `O tema "${assuntoNome}" integra a estrutura basilar da Constituição Federal de 1988, estabelecendo as balizas normativas, competências estatais e garantias institucionais aplicáveis à ordem constitucional brasileira.`,
      importancia: "Assunto recorrente em provas de carreiras policiais, jurídicas e administrativas.",
    },
    doutrina: [
      {
        titulo: "Fundamentos e Princípios Estruturantes",
        conteudo: `O tópico ${assuntoNome} deve ser compreendido à luz dos princípios fundamentais da República Federativa do Brasil, da supremacia constitucional e da força normativa da Constituição (Konrad Hesse).`,
      },
      {
        titulo: "Divisão de Competências e Organização Institucional",
        conteudo: "A CF/88 estabelece critérios rígidos de competência e atuação dos órgãos públicos, vedando delegações não autorizadas pelo constituinte originário e assegurando a separação e harmonia entre os poderes.",
      },
      {
        titulo: "Interpretação e Jurisprudência do STF",
        conteudo: "O Supremo Tribunal Federal, como guardião da Constituição, orienta a aplicação deste tema mediante súmulas vinculantes e teses de repercussão geral que privilegiam a máxima efetividade dos preceitos constitucionais.",
      },
    ],
    legislacao: [
      { referencia: "CF/88, Dispositivo Temático", dispositivo: `Normas constitucionais reguladoras de ${assuntoNome} aplicáveis ao tema em exame.` },
      { referencia: "Artigo 37 da CF/88", dispositivo: "A administração pública direta e indireta obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência." },
    ],
    pegadinhas: [
      "Bancas frequentemente tentam trocar competências privativas da União por concorrentes dos Estados.",
      "Atenção às exceções expressas na letra da Constituição que contrariam a regra geral.",
      "Cuidado com alternativas que afirmam ser necessária lei complementar quando a CF exige apenas lei ordinária.",
    ],
    roteiro: [
      "Leitura do texto da CF/88 correspondente a este assunto.",
      "Elaboração de mapa mental com competências, prazos e quóruns.",
      "Resolução de 20 questões específicas da banca examinadora.",
    ],
  };
}

function buildPenalContent(assNorm, assuntoNome, disciplinaNome) {
  if (assNorm.includes("crime") || assNorm.includes("tipicidade") || assNorm.includes("ilicitude") || assNorm.includes("culpabilidade")) {
    return {
      disciplina: disciplinaNome,
      assunto: assuntoNome,
      visaoGeral: {
        descricao: `A Teoria Geral do Crime adota no ordenamento jurídico brasileiro o conceito analítico tripartido (finalismo de Hans Welzel): crime é Fato Típico, Ilícito (antijurídico) e Culpável. A punibilidade é pressuposto de aplicação da pena, mas não elemento integrativo do crime.`,
        importancia: "É a espinha dorsal do Direito Penal em qualquer concurso público policial.",
      },
      doutrina: [
        {
          titulo: "1. Fato Típico (Substrato 1)",
          conteudo: "Elementos: Conduta (ação ou omissão humana, consciente e voluntária - dolo ou culpa); Resultado (nos crimes materiais); Nexo Causal (relação de causa e efeito - art. 13 CP); Tipicidade (formal: subsunção do fato à norma; material: lesão relevante ao bem jurídico tutelado).",
        },
        {
          titulo: "2. Ilicitude / Antijuridicidade (Substrato 2)",
          conteudo: "É a contrariedade do fato típico com o ordenamento jurídico. Excludentes de ilicitude (Art. 23 CP): Estado de necessidade, Legítima defesa, Estrito cumprimento do dever legal e Exercício regular de direito. Havendo excludente, o fato é típico, mas NÃO é crime.",
        },
        {
          titulo: "3. Culpabilidade (Substrato 3)",
          conteudo: "Juízo de reprovação social sobre o autor do fato típico e ilícito. Elementos: Imputabilidade penal (maioridade de 18 anos e higidez mental); Potencial consciência da ilicitude (erro de proibição escusável afasta); Exigibilidade de conduta diversa (coação moral irresistível e obediência hierárquica a ordem não manifestamente ilegal afastam).",
        },
      ],
      legislacao: [
        { referencia: "Código Penal, Art. 13", dispositivo: "O resultado, de que depende a existência do crime, somente é imputável a quem lhe deu causa. Considera-se causa a ação ou omissão sem a qual o resultado não teria ocorrido." },
        { referencia: "Código Penal, Art. 23", dispositivo: "Não há crime quando o agente pratica o fato: I - em estado de necessidade; II - em legítima defesa; III - em estrito cumprimento de dever legal ou no exercício regular de direito." },
        { referencia: "Código Penal, Art. 25", dispositivo: "Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem." },
      ],
      pegadinhas: [
        "A banca tenta afirmar que a legítima defesa admite agressão pretérita (passada) ou futura: FALSO, a agressão deve ser ATUAL ou IMINENTE.",
        "A banca diz que o erro de tipo inevitável isenta de pena e o evitável pune por culpa: VERDADEIRO (art. 20 CP). Já o erro de proibição inevitável isenta de pena e o evitável reduz a pena (art. 21 CP).",
        "A banca afirma que emoção ou paixão excluem a imputabilidade penal: FALSO, art. 28, I do CP expressamente não exclui a imputabilidade.",
      ],
      roteiro: [
        "Memorizar os 3 substratos do crime e seus respectivos elementos componentes.",
        "Diferenciar Erro de Tipo (afasta tipicidade/dolo) vs Erro de Proibição (afasta culpabilidade/potencial consciência).",
        "Resolver 30 questões de fixação com foco nas bancas CEBRASPE, FGV e VUNESP.",
      ],
    };
  }

  if (assNorm.includes("administração pública") || assNorm.includes("peculato") || assNorm.includes("corrupção") || assNorm.includes("concussão")) {
    return {
      disciplina: disciplinaNome,
      assunto: assuntoNome,
      visaoGeral: {
        descricao: `Os Crimes contra a Administração Pública (arts. 312 a 359-H do CP) dividem-se principalmente em: crimes praticados por funcionário público contra a administração (crimes funcionais próprios e impróprios) e crimes praticados por particular contra a administração.`,
        importancia: "Tema presente em mais de 40% das questões penais em carreiras policiais e fiscais.",
      },
      doutrina: [
        {
          titulo: "Conceito de Funcionário Público (Art. 327 CP)",
          conteudo: "Quem, embora transitoriamente ou sem remuneração, exerce cargo, emprego ou função pública. Equipara-se quem exerce em entidade paraestatal ou empresa prestadora de serviço/conveniada.",
        },
        {
          titulo: "Peculato (Art. 312 CP) e Modalidades",
          conteudo: "Peculato-Apropriação (apropria-se de dinheiro/valor público/particular sob sua posse); Peculato-Desvio (desvia em proveito próprio ou alheio); Peculato-Furto (subtrai valendo-se da facilidade que o cargo lhe proporciona); Peculato Culposo (§2º - reparação do dano ANTES da sentença irrecorrível extingue a punibilidade; se posterior, reduz a pena pela metade).",
        },
        {
          titulo: "Concussão (Art. 316) vs Corrupção Passiva (Art. 317)",
          conteudo: "Concussão: EXIGIR vantagem indevida em razão da função pública (verbo forte). Corrupção Passiva: SOLICITAR, RECEBER ou ACEITAR PROMESSA de vantagem indevida (verbo brando).",
        },
        {
          titulo: "Corrupção Ativa (Art. 333) vs Prevaricação (Art. 319)",
          conteudo: "Corrupção Ativa (crime de particular): OFERECER ou PROMETER vantagem indevida a funcionário público. Prevaricação (crime funcional): RETARDAR ou DEIXAR DE PRATICAR ato de ofício para satisfazer INTERESSE OU SENTIMENTO PESSOAL.",
        },
      ],
      legislacao: [
        { referencia: "Código Penal, Art. 312", dispositivo: "Apropriar-se o funcionário público de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo, ou desviá-lo, em proveito próprio ou alheio." },
        { referencia: "Código Penal, Art. 316", dispositivo: "Exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida." },
        { referencia: "Código Penal, Art. 317", dispositivo: "Solicitar ou receber, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, ou aceitar promessa de tal vantagem." },
      ],
      pegadinhas: [
        "A banca confunde Concussão (EXIGIR) com Corrupção Passiva (SOLICITAR). O verbo 'exigir' tipifica concussão.",
        "A banca afirma que ceder a pedido ou influência de outrem é prevaricação: FALSO, trata-se de Condescendência Criminosa (se for indulgência a subordinado) ou Corrupção Passiva Privilegiada (art. 317, §2º).",
        "A banca diz que a reparação do dano no peculato DOLOSO extingue a punibilidade: FALSO! Extingue a punibilidade apenas no peculato CULPOSO se antes da sentença irrecorrível.",
      ],
      roteiro: [
        "Memorizar a tabela dos verbos-núcleo de cada crime funcional do CP.",
        "Revisar detalhadamente o Art. 327 (conceito amplo de funcionário público penal).",
        "Resolver 25 questões comentadas focando nas distinções entre Concussão, Corrupção e Prevaricação.",
      ],
    };
  }

  // Padrão Geral Penal
  return {
    disciplina: disciplinaNome,
    assunto: assuntoNome,
    visaoGeral: {
      descricao: `O tema "${assuntoNome}" regula a tipificação penal, a proteção de bens jurídicos tutelados pelo Estado e os limites da atuação punitiva estatal segundo o Código Penal Brasileiro.`,
      importancia: "Disciplina com alto peso em editais de carreiras policiais (Soldado, Oficial, Agente, Escrivão e Delegado).",
    },
    doutrina: [
      {
        titulo: "Tipicidade e Elementos Constitutivos",
        conteudo: `O estudo de ${assuntoNome} exige a análise minuciosa do tipo objetivo (conduta, verbos, sujeito ativo/passivo) e do tipo subjetivo (dolo e eventual modalidade culposa quando expressa em lei).`,
      },
      {
        titulo: "Consumação e Tentativa",
        conteudo: "Identificação do exato momento consumativo do crime e das hipóteses de tentativa (conatus), arrependimento eficaz, desistência voluntária e arrependimento posterior (art. 16 CP).",
      },
      {
        titulo: "Jurisprudência dos Tribunais Superiores (STF e STJ)",
        conteudo: "Aplicação das súmulas do STJ e STF relativas a este tipo penal, com destaque para teses firmadas em recursos repetitivos.",
      },
    ],
    legislacao: [
      { referencia: "Código Penal Brasileiro", dispositivo: `Dispositivos aplicáveis a ${assuntoNome}. Princípio da estrita legalidade e anterioridade da lei penal (art. 1º CP).` },
      { referencia: "Artigo 14 do CP", dispositivo: "Diz-se o crime: I - consumado, quando nele se reúnem todos os elementos de sua definição legal; II - tentado, quando, iniciada a execução, não se consuma por circunstâncias alheias à vontade do agente." },
    ],
    pegadinhas: [
      "Atenção às qualificadoras e causas de aumento de pena (majorantes) que as bancas costumam misturar.",
      "Verifique se o crime admite modalidade culposa (a culpa só é punível quando expressamente prevista em lei).",
      "Cuidado com a ação penal correspondente (pública incondicionada vs condicionada à representação).",
    ],
    roteiro: [
      "Leitura dos artigos correlatos no Código Penal.",
      "Mapeamento das qualificadoras e causas especiais de aumento/diminuição.",
      "Resolução de 25 questões de concursos policiais recentes.",
    ],
  };
}

function buildProcessualPenalContent(assNorm, assuntoNome, disciplinaNome) {
  if (assNorm.includes("inquérito") || assNorm.includes("policial")) {
    return {
      disciplina: disciplinaNome,
      assunto: assuntoNome,
      visaoGeral: {
        descricao: `O Inquérito Policial (IP) é o procedimento administrativo inquisitivo e preparatório, presidido pela autoridade policial (Delegado de Polícia), destinado a reunir elementos de autoria e materialidade (justa causa) para que o titular da ação penal possa ajuizá-la.`,
        importancia: "Tema cobrado com frequência altíssima em todas as bancas de concursos policiais.",
      },
      doutrina: [
        {
          titulo: "Características do Inquérito Policial",
          conteudo: "Inquisitivo (não há ampla defesa/contraditório pleno); Escrito (art. 9º CPP); Sigiloso (art. 20 CPP, com ressalva da Súmula Vinculante 14 ao advogado); Oficial (conduzido por órgão estatal); Oficioso (obrigatoriedade de instauração de ofício em crimes de ação pública incondicionada); Indisponível (a autoridade policial NÃO pode arquivar autos de IP - art. 17 CPP); Discricionário (liberdade na condução das diligências).",
        },
        {
          titulo: "Prazos do Inquérito Policial",
          conteudo: "Regra Geral CPP (Art. 10): 10 dias se réu preso (improrrogável) e 30 dias se solto (prorrogável pelo juiz). Lei de Drogas (Lei 11.343/06): 30 dias preso e 90 dias solto (duplicáveis). Justiça Federal: 15 dias preso (+15) e 30 dias solto.",
        },
        {
          titulo: "Arquivamento do Inquérito Policial",
          conteudo: "A autoridade policial NUNCA arquiva inquérito (art. 17 CPP). Pelo rito clássico, o MP requer e o Juiz homologa. Com o Pacote Anticrime (art. 28 suspenso/em transição), o arquivamento é ato interno do Ministério Público com comunicação ao investigado e vítima.",
        },
      ],
      legislacao: [
        { referencia: "Código de Processo Penal, Art. 17", dispositivo: "A autoridade policial não poderá mandar arquivar autos de inquérito." },
        { referencia: "Súmula Vinculante 14 (STF)", dispositivo: "É direito do defensor, no interesse do representado, ter amplo acesso aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa." },
      ],
      pegadinhas: [
        "A banca afirma que o Delegado pode mandar arquivar inquérito se comprovar que o fato é atípico: FALSO, o IP é INDISPONÍVEL para o Delegado.",
        "A banca afirma que o advogado tem acesso a diligências em andamento (ex: interceptação em curso): FALSO, a SV 14 garante acesso somente às provas JÁ DOCUMENTADAS.",
        "A banca diz que o vício no inquérito anula o processo penal subsequente: FALSO, vícios do IP são irregularidades administrativas e não contaminam a ação penal.",
      ],
      roteiro: [
        "Memorizar as 8 características do Inquérito Policial (Mnemônico: E-I-I-I-D-O-O-S).",
        "Tabela comparativa de prazos do IP (CPP vs Drogas vs Federal).",
        "Resolução de 30 questões de provas anteriores sobre Inquérito Policial.",
      ],
    };
  }

  if (assNorm.includes("prisão") || assNorm.includes("flagrante") || assNorm.includes("preventiva") || assNorm.includes("temporária")) {
    return {
      disciplina: disciplinaNome,
      assunto: assuntoNome,
      visaoGeral: {
        descricao: `As Prisões Cautelares (ou provisórias) ocorrem antes do trânsito em julgado da sentença condenatória, possuindo natureza estritamente processual e cautelar (fumus comissi delicti e periculum libertatis). Dividem-se em Prisão em Flagrante, Prisão Preventiva e Prisão Temporária.`,
        importancia: "Conhecimento indispensável para a prática e provas de carreiras policiais.",
      },
      doutrina: [
        {
          titulo: "Espécies de Flagrante Delito (Art. 302 CPP)",
          conteudo: "Flagrante Próprio (está cometendo ou acaba de cometer a infração); Flagrante Impróprio/Quase-flagrante (é perseguido logo após a infração em situação que faça presumir ser o autor); Flagrante Presumido/Ficto (é encontrado logo depois com instrumentos, armas ou objetos do crime). Flagrante Preparado/Provocado é CRIME IMPOSSÍVEL (Súmula 145 STF).",
        },
        {
          titulo: "Prisão Preventiva (Arts. 311 a 316 CPP)",
          conteudo: "Pode ser decretada pelo juiz a requerimento do MP ou representação policial (vedada decretação de ofício pelo Pacote Anticrime). Requisitos: prova da materialidade e indícios suficientes de autoria + perigo gerado pelo estado de liberdade (garantia da ordem pública, ordem econômica, conveniência da instrução ou assegurar aplicação da lei penal). Crimes dolosos com pena máxima superior a 4 anos, reincidentes em crime doloso ou violência doméstica.",
        },
        {
          titulo: "Prisão Temporária (Lei 7.960/1989)",
          conteudo: "Exclusiva da fase pré-processual (inquérito policial). Não cabe na fase judicial. Prazo: 5 dias (+5) em crimes comuns; 30 dias (+30) em crimes hediondos e equiparados.",
        },
      ],
      legislacao: [
        { referencia: "CPP, Art. 301", dispositivo: "Qualquer do povo poderá e as autoridades policiais e seus agentes deverão prender quem quer que seja encontrado em flagrante delito." },
        { referencia: "CPP, Art. 310", dispositivo: "Após receber o auto de prisão em flagrante, no prazo máximo de 24 horas, o juiz promoverá a audiência de custódia." },
        { referencia: "Súmula 145 (STF)", dispositivo: "Não há crime, quando a preparação do flagrante pela polícia torna impossível a sua consumação." },
      ],
      pegadinhas: [
        "A banca afirma que o juiz pode decretar prisão preventiva de ofício na fase investigativa: FALSO, o Pacote Anticrime vedou a decretação de ofício em qualquer fase.",
        "A banca confunde o prazo da temporária em crimes comuns (5+5 dias) com crimes hediondos (30+30 dias).",
        "A banca afirma que o flagrante esperado constitui crime impossível: FALSO, apenas o flagrante preparado/provocado é crime impossível; o flagrante esperado é plenamente válido.",
      ],
      roteiro: [
        "Quadro comparativo: Flagrante vs Preventiva vs Temporária (requisitos, prazos e legitimados).",
        "Revisão das regras da Audiência de Custódia (24 horas).",
        "Resolução de 30 questões sobre prisões cautelares.",
      ],
    };
  }

  // Padrão Geral Processo Penal
  return {
    disciplina: disciplinaNome,
    assunto: assuntoNome,
    visaoGeral: {
      descricao: `O tema "${assuntoNome}" rege os procedimentos, garantias processuais e a aplicação da persecução penal estatal no âmbito do Código de Processo Penal Brasileiro.`,
      importancia: "Disciplina essencial em carreiras da segurança pública e tribunais.",
    },
    doutrina: [
      {
        titulo: "Princípios Constitucionais do Processo Penal",
        conteudo: `A aplicação de ${assuntoNome} deve harmonizar-se com o contraditório, ampla defesa, paridade de armas e a vedação das provas ilícitas (fruits of the poisonous tree).`,
      },
      {
        titulo: "Cadeia de Custódia e Validade dos Atos",
        conteudo: "A conformidade legal e o registro documental de cada fase processual garantem a idoneidade das provas e a higidez do procedimento jurisdicional.",
      },
      {
        titulo: "Prazos, Competência e Nulidades",
        conteudo: "A inobservância das regras procedimentais pode ensejar nulidade relativa (exige comprovação de prejuízo - pas de nullité sans grief) ou absoluta.",
      },
    ],
    legislacao: [
      { referencia: "Código de Processo Penal", dispositivo: `Normas processuais reguladoras de ${assuntoNome}.` },
      { referencia: "Art. 157 do CPP", dispositivo: "São inadmissíveis, devendo ser desentranhadas do processo, as provas ilícitas, assim entendidas as obtidas em violação a normas constitucionais ou legais." },
    ],
    pegadinhas: [
      "Atenção às regras de preclusão e prazos processuais que se contam em dias corridos no CPP.",
      "Cuidado com competências da Justiça Comum Estadual vs Justiça Federal.",
    ],
    roteiro: [
      "Leitura dos artigos correspondentes no CPP.",
      "Mapeamento das súmulas do STF e STJ sobre o tema.",
      "Resolução de 20 questões de fixação.",
    ],
  };
}

function buildAdministrativoContent(assNorm, assuntoNome, disciplinaNome) {
  if (assNorm.includes("princípios") || assNorm.includes("limpe")) {
    return {
      disciplina: disciplinaNome,
      assunto: assuntoNome,
      visaoGeral: {
        descricao: `Os Princípios da Administração Pública dividem-se em expressos (Art. 37, caput da CF/88 - mnemônico LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência) e implícitos/reconhecidos (Supremacia do Interesse Público, Indisponibilidade, Autotutela, Razoabilidade, Proporcionalidade, Continuidade).`,
        importancia: "O tema de princípios é a base teórica mais cobrada em Direito Administrativo.",
      },
      doutrina: [
        {
          titulo: "1. Legalidade vs Autonomia Privada",
          conteudo: "Para o particular, é permitido fazer tudo o que a lei não proíbe (art. 5º, II CF). Para a Administração Pública, só é permitido fazer o que a lei expressamente autoriza ou determina (estrita legalidade).",
        },
        {
          titulo: "2. Impessoalidade e Finalidade",
          conteudo: "A atuação estatal visa ao interesse público e não à pessoa do agente ou de terceiros. Veda promoção pessoal de agentes públicos em publicidades oficiais (art. 37, §1º CF). Fundamento da exigência de concurso público e licitação.",
        },
        {
          titulo: "3. Moralidade e Probidade",
          conteudo: "A atuação deve pautar-se pela boa-fé, lealdade, ética e honestidade. A moralidade administrativa é jurídica e passível de controle judicial via Ação Popular (art. 5º, LXXIII) e Improbidade (Lei 8.429/92). Súmula Vinculante 13 (vedação ao nepotismo).",
        },
        {
          titulo: "4. Publicidade e Eficiência",
          conteudo: "Publicidade: Regra geral de transparência dos atos administrativos (exceções: segurança nacional e intimidade). Eficiência: Introduzida pela EC 19/98 (reforma gerencial), impõe produtividade, economicidade e celeridade.",
        },
        {
          titulo: "5. Autotutela (Princípio Implícito Fundamental)",
          conteudo: "A Administração Pública tem o poder-dever de anular seus próprios atos quando eivados de ilegalidade e revogá-los por motivo de conveniência e oportunidade (Súmulas 346 e 473 do STF).",
        },
      ],
      legislacao: [
        { referencia: "CF/88, Art. 37, caput", dispositivo: "A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência." },
        { referencia: "Súmula 473 (STF)", dispositivo: "A administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade." },
        { referencia: "Súmula Vinculante 13 (STF)", dispositivo: "A nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, da autoridade nomeante viola a CF/88 (vedação ao nepotismo)." },
      ],
      pegadinhas: [
        "A banca afirma que o princípio da eficiência constava na redação original da CF/88: FALSO, foi incluído pela EC 19/1998.",
        "A banca diz que o ato imoral é sempre também ilegal perante a lei escrita: FALSO, a moralidade administrativa possui autonomia em relação à estrita legalidade formal.",
        "A banca afirma que cargos de natureza estritamente política (ex: Ministros e Secretários) violam a SV 13 de forma absoluta: FALSO, a jurisprudência do STF ressalva cargos políticos, salvo evidente falta de qualificação técnica ou fraude à lei.",
      ],
      roteiro: [
        "Memorizar as diferenças conceituais entre Anulação (ilegalidade, efeitos ex tunc) e Revogação (mérito, efeitos ex nunc).",
        "Revisar o teor das Súmulas 346 e 473 do STF e Súmula Vinculante 13.",
        "Resolver 25 questões de concursos públicos sobre princípios administrativos.",
      ],
    };
  }

  if (assNorm.includes("ato") || assNorm.includes("atos")) {
    return {
      disciplina: disciplinaNome,
      assunto: assuntoNome,
      visaoGeral: {
        descricao: `O Ato Administrativo é a manifestação unilateral de vontade da Administração Pública que tem por fim imediato adquirir, resguardar, transferir, modificar, extinguir e declarar direitos, ou impor obrigações aos administrados ou a si própria.`,
        importancia: "É um dos 3 temas com maior peso e incidência em provas de Direito Administrativo.",
      },
      doutrina: [
        {
          titulo: "Elementos / Requisitos de Validade (CO-FI-FO-MO-OB)",
          conteudo: "Competência (atribuição legal para a prática do ato - vinculado); Finalidade (interesse público visado - vinculado); Forma (exteriorização do ato - regra: escrita e vinculada); Motivo (pressupostos fáticos e jurídicos que determinam a prática do ato); Objeto (conteúdo do ato, efeito jurídico imediato).",
        },
        {
          titulo: "Atributos do Ato Administrativo (P-A-T-I)",
          conteudo: "Presunção de Legitimidade e Veracidade (presente em todos os atos, transfere o ônus da prova ao administrado); Autoexecutoriedade (administração executa diretamente suas decisões sem prévia ordem judicial nos casos legais/urgentes); Tipicidade (deve corresponder a figuras previamente definidas em lei); Imperatividade (capacidade de impor obrigações unilaterais a terceiros).",
        },
        {
          titulo: "Extinção dos Atos Administrativos",
          conteudo: "Anulação (ato ilegal, exercida pelo Judiciário ou Administração, efeito retroativo EX TUNC); Revogação (ato discricionário válido, conveniência e oportunidade, privativa da Administração, efeito não retroativo EX NUNC); Cassação (administrado descumpre requisitos); Caducidade (surgimento de nova lei incompatível).",
        },
      ],
      legislacao: [
        { referencia: "Lei 4.717/1965, Art. 2º (Ação Popular)", dispositivo: "São nulos os atos lesivos ao patrimônio: a) incompetência; b) vício de forma; c) ilegalidade do objeto; d) inexistência dos motivos; e) desvio de finalidade." },
        { referencia: "Teoria dos Motivos Determinantes", dispositivo: "A validade do ato administrativo vincula-se aos motivos indicados pelo agente para sua prática, de modo que se os motivos forem falsos ou inexistentes, o ato é nulo." },
      ],
      pegadinhas: [
        "A banca afirma que o Poder Judiciário pode revogar atos administrativos do Poder Executivo: FALSO, o Judiciário NUNCA revoga atos de outro poder, apenas ANULA atos ilegais.",
        "A banca afirma que a imperatividade e autoexecutoriedade estão presentes em absolutamente todos os atos administrativos: FALSO, atos enunciativos e negociais não possuem imperatividade nem autoexecutoriedade.",
        "A banca diz que vício de competência gera sempre nulidade absoluta insanável: FALSO, se não for de competência exclusiva nem em razão da matéria, cabe convalidação.",
      ],
      roteiro: [
        "Memorizar os mnemônicos CO-FI-FO-MO-OB (elementos) e P-A-T-I (atributos).",
        "Esquematizar a Teoria dos Motivos Determinantes e as hipóteses de convalidação.",
        "Resolver 30 questões focadas nas bancas examinadoras.",
      ],
    };
  }

  // Padrão Geral Administrativo
  return {
    disciplina: disciplinaNome,
    assunto: assuntoNome,
    visaoGeral: {
      descricao: `O estudo de "${assuntoNome}" abrange o regime jurídico-administrativo, a supremacia e indisponibilidade do interesse público e as normas de regência das relações entre o Estado e a sociedade.`,
      importancia: "Disciplina basilar para qualquer cargo da estrutura do Estado brasileiro.",
    },
    doutrina: [
      {
        titulo: "Regime Jurídico e Competências Estatais",
        conteudo: `O tópico ${assuntoNome} é estruturado com base nas prerrogativas e sujeições estatais que equilibram os poderes da Administração e as garantias dos administrados.`,
      },
      {
        titulo: "Controle e Responsabilidade",
        conteudo: "Mecanismos de controle interno, controle externo (Tribunais de Contas) e controle judicial sobre a legalidade dos atos e procedimentos estatais.",
      },
      {
        titulo: "Inovações Legislativas e Jurisprudência",
        conteudo: "Aplicação das recentes reformas legislativas (ex: Lei 14.133/21 de Licitações, Lei 14.230/21 de Improbidade) e teses de repercussão geral do STF e STJ.",
      },
    ],
    legislacao: [
      { referencia: "Legislação Administrativa Aplicada", dispositivo: `Normas regulamentadoras de ${assuntoNome}.` },
      { referencia: "CF/88, Art. 37, §6º", dispositivo: "As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes causarem a terceiros." },
    ],
    pegadinhas: [
      "Diferença entre responsabilidade objetiva do Estado (sem dolo/culpa) e responsabilidade regressiva contra o servidor (com dolo/culpa).",
      "Prazos prescricionais administrativos e decadenciais.",
    ],
    roteiro: [
      "Leitura da legislação de regência deste tópico.",
      "Elaboração de fichamento com os principais conceitos doutrinários.",
      "Resolução de 25 questões comentadas.",
    ],
  };
}

function buildPortuguesContent(assNorm, assuntoNome, disciplinaNome) {
  if (assNorm.includes("concordância")) {
    return {
      disciplina: disciplinaNome,
      assunto: assuntoNome,
      visaoGeral: {
        descricao: `A Concordância Verbal e Nominal trata da harmonia sintática entre os termos da oração. A concordância verbal harmoniza o verbo com o seu sujeito em número e pessoa; a concordância nominal harmoniza adjetivos, pronomes e numerais com o substantivo a que se referem em gênero e número.`,
        importancia: "Tema presente em 100% das provas de Língua Portuguesa em concursos públicos.",
      },
      doutrina: [
        {
          titulo: "1. Concordância com o Pronome 'SE'",
          conteudo: "Partícula Apassivadora (VTD ou VTDI + SE + Sujeito Paciente): o verbo concorda com o sujeito (Ex: 'Vendem-se casas', 'Construiu-se uma ponte'). Índice de Indeterminação do Sujeito (VTI, VI ou VL + SE): o verbo fica OBRIGATORIAMENTE no singular (Ex: 'Precisa-se de operários', 'Vive-se bem aqui').",
        },
        {
          titulo: "2. Verbos Impessoais (Fazem Singular)",
          conteudo: "Verbo HAVER no sentido de existir, ocorrer ou indicando tempo decorrido é IMPESSOAL e não vai para o plural (Ex: 'Havia muitas pessoas na sala', 'Há dez anos não o vejo'). Verbo FAZER indicando tempo transcorrido ou clima também é impessoal (Ex: 'Faz cinco anos', 'Fazia dias frios').",
        },
        {
          titulo: "3. Expressões Partitivas e Porcentagem",
          conteudo: "Com expressões partitivas ('a maioria de', 'a maior parte de') seguidas de substantivo plural: admite concordância atrativa ou lógica (Ex: 'A maioria dos alunos passou / passaram'). Com porcentagem: concorda com o numeral ou com o substantivo após a porcentagem (Ex: '1% da população votou', '25% dos eleitores votaram').",
        },
        {
          titulo: "4. Concordância Nominal - Casos Especiais",
          conteudo: "Expressões 'É proibido', 'É necessário', 'É bom': se o substantivo vier sem artigo, fica invariável (Ex: 'É proibido entrada', 'Água é bom'); se vier com artigo, concorda (Ex: 'É proibida a entrada', 'A água é boa'). As palavras 'anexo', 'incluso', 'mesmo', 'próprio' e 'obrigado' concordam com o substantivo a que se referem.",
        },
      ],
      legislacao: [
        { referencia: "Gramática Normativa da Língua Portuguesa", dispositivo: "Regras de concordância verbal com sujeito composto anteposto (plural) e posposto (plural ou atrativa com o núcleo mais próximo)." },
      ],
      pegadinhas: [
        "A banca coloca 'Houveram muitos problemas': ERRADO! O verbo haver no sentido de existir não tem plural ('Houve muitos problemas').",
        "A banca coloca 'Precisam-se de funcionários': ERRADO! Com preposição após o 'se' (VTI), o verbo fica no singular ('Precisa-se de funcionários').",
        "A banca tenta usar 'Menas': ERRADO! A palavra 'menos' é advérbio e sempre invariável ('Havia menos pessoas').",
      ],
      roteiro: [
        "Memorizar as 2 regras capitais do pronome 'SE' (Partícula apassivadora vs Índice de indeterminação).",
        "Fixar a conjugação de verbos impessoais (Haver e Fazer).",
        "Resolver 30 questões de bancas com foco em concordância verbal.",
      ],
    };
  }

  if (assNorm.includes("crase") || assNorm.includes("regência")) {
    return {
      disciplina: disciplinaNome,
      assunto: assuntoNome,
      visaoGeral: {
        descricao: `A Crase é a fusão da preposição 'a' exigida por um termo regente com o artigo feminino 'a(s)' ou o pronome demonstrativo 'aquele(s)', 'aquela(s)', 'aquilo'. A Regência Verbal e Nominal estuda a relação de dependência sintática entre o verbo/nome e seus respectivos complementos.`,
        importancia: "Tema com maior taxa de erro e pegadinhas em concursos de nível médio e superior.",
      },
      doutrina: [
        {
          titulo: "Casos Proibidos de Crase (Nunca Ocorre)",
          conteudo: "1) Antes de palavras masculinas (Ex: 'andar a pé', 'vender a prazo'); 2) Antes de verbos (Ex: 'disposto a estudar'); 3) Antes de pronomes pessoais e de tratamento em geral (Ex: 'referir-se a ela', 'entregar a Vossa Excelência'); 4) Antes de expressões com palavras repetidas (Ex: 'cara a cara', 'dia a dia'); 5) 'A' no singular diante de palavra no plural (Ex: 'refiro-me a pessoas honestas').",
        },
        {
          titulo: "Casos Obrigatórios de Crase",
          conteudo: "1) Locuções adverbiais femininas de tempo, modo e lugar (Ex: 'à noite', 'às pressas', 'às vezes', 'à direita'); 2) Locuções prepositivas e conjuntivas femininas ('à medida que', 'à proporção que', 'à espera de'); 3) Subentendido 'à moda de' / 'à maneira de' (Ex: 'gol à Pelé', 'bife à milanesa').",
        },
        {
          titulo: "Casos Facultativos de Crase (Mnemônico: N-P-A)",
          conteudo: "1) Antes de Nomes próprios femininos (Ex: 'Falei a / à Maria'); 2) Antes de Pronomes possessivos femininos no singular (Ex: 'Refiro-me a / à minha mãe'); 3) Depois da preposição 'Até' (Ex: 'Fui até a / à praia').",
        },
        {
          titulo: "Regências Verbais Clássicas de Concurso",
          conteudo: "Aspirar (desejar = VTI com 'a' / respirar = VTD); Visar (almejar = VTI com 'a' / mirar/assinar = VTD); Assistir (ver/presenciar = VTI com 'a' / ajudar = VTD); Obedecer/Desobedecer (sempre VTI com 'a'); Preferir (VTD e VTI: 'prefiro X a Y', sendo proibido 'do que').",
        },
      ],
      legislacao: [
        { referencia: "Norma Culta da Língua Portuguesa", dispositivo: "Sintaxe de Regência e Emprego do Acento Grave Indicativo de Crase." },
      ],
      pegadinhas: [
        "A banca usa crase antes de verbo: 'estou apto à prestar o concurso': ERRADO! Antes de verbo não há crase.",
        "A banca escreve 'prefiro mais direito penal do que português': ERRADO! O verbo preferir não aceita 'mais', 'muito' nem 'do que' ('prefiro direito penal a português').",
        "A banca coloca crase em 'andar à cavalo': ERRADO! Cavalo é palavra masculina.",
      ],
      roteiro: [
        "Decorar os 5 casos proibidos e os 3 casos facultativos (Mnemônico NPA).",
        "Esquematizar os verbos perigosos de regência (Assistir, Visar, Aspirar, Preferir, Obedecer).",
        "Resolver 30 questões de crase e regência.",
      ],
    };
  }

  // Padrão Geral Língua Portuguesa
  return {
    disciplina: disciplinaNome,
    assunto: assuntoNome,
    visaoGeral: {
      descricao: `O tema "${assuntoNome}" compõe a matriz fundamental da Língua Portuguesa para concursos públicos, exigindo domínio das normas gramaticais cultas, capacidade de análise textual e interpretação estrutural.`,
      importancia: "Disciplina eliminatória e classificatória presente em todos os concursos públicos.",
    },
    doutrina: [
      {
        titulo: "Fundamentos e Regras Gramaticais",
        conteudo: `O conteúdo de ${assuntoNome} deve ser dominado com foco na norma-padrão da língua, observando as estruturas sintáticas, morfológicas e semânticas exigidas pelos editais.`,
      },
      {
        titulo: "Coesão, Coerência e Mecanismos de Articulação",
        conteudo: "A relação entre as partes do texto, uso correto de conectivos, paralelismo sintático e precisão vocabular.",
      },
      {
        titulo: "Comportamento das Bancas Examinadoras",
        conteudo: "As bancas (Cebraspe, FGV, Vunesp, etc.) cobram a aplicação contextualizada das regras por meio de reescrita de frases, substituição de termos e identificação de desvios.",
      },
    ],
    legislacao: [
      { referencia: "Novo Acordo Ortográfico da Língua Portuguesa", dispositivo: "Regras ortográficas, acentuação e emprego do hífen em vigor no Brasil." },
    ],
    pegadinhas: [
      "Atenção às reescritas de frases que alteram o sentido original do texto mantendo a correção gramatical, ou vice-versa.",
      "Cuidado com a identificação do sujeito oracional distante do verbo.",
    ],
    roteiro: [
      "Revisão teórica das regras de regência deste tópico.",
      "Leitura ativa com marcação dos termos-chave em textos.",
      "Resolução de 25 questões da matéria.",
    ],
  };
}

function buildExatasContent(assNorm, assuntoNome, disciplinaNome) {
  return {
    disciplina: disciplinaNome,
    assunto: assuntoNome,
    visaoGeral: {
      descricao: `O estudo de "${assuntoNome}" desenvolve o raciocínio dedutivo, a estruturação formal do pensamento e a resolução de problemas quantitativos e lógicos essenciais para provas de exatas em concursos públicos.`,
      importancia: "Disciplina decisiva para diferenciação de notas e desempate em concursos de alto nível.",
    },
    doutrina: [
      {
        titulo: "1. Estruturas Lógicas e Propriedades Fundamentais",
        conteudo: `Aplicação direta dos princípios e fórmulas que regem ${assuntoNome}, com foco nas relações de causa e efeito, tabelas de verdade, equivalências e transformações algébricas.`,
      },
      {
        titulo: "2. Métodos e Técnicas de Resolução Rápida",
        conteudo: "Utilização de diagramas, regras de simplificação, fatoração e propriedades matemáticas que reduzem o tempo de execução por questão na prova.",
      },
      {
        titulo: "3. Negações e Equivalências Clássicas",
        conteudo: "Negação da condicional (Regra do MANÉ: Mantém a primeira E Nega a segunda); Equivalência da condicional (Contrapositiva: 'se p então q' <=> 'se não q então não p'; ou 'não p ou q' - Regra do NEUMOU).",
      },
    ],
    legislacao: [
      { referencia: "Fundamentos da Matemática e Lógica Formal", dispositivo: `Postulados e teoremas matemáticos aplicáveis a ${assuntoNome}.` },
    ],
    pegadinhas: [
      "Cuidado com a negação de proposições universais: A negação de 'Todo policial é honesto' NÃO é 'Nenhum policial é honesto', e sim 'Pelo menos um policial NÃO é honesto' (Existe/Algum).",
      "Atenção a unidades de medida e conversão de grandezas em enunciados extensos.",
    ],
    roteiro: [
      "Memorização das fórmulas e tabelas-verdade essenciais.",
      "Resolução de 10 exercícios passo a passo para fixação do algoritmo de cálculo.",
      "Simulação de bateria com 20 questões sob controle de tempo (máx 3 min por questão).",
    ],
  };
}

function buildInformaticaContent(assNorm, assuntoNome, disciplinaNome) {
  return {
    disciplina: disciplinaNome,
    assunto: assuntoNome,
    visaoGeral: {
      descricao: `O tema "${assuntoNome}" integra os conceitos modernos de Tecnologia da Informação, segurança de dados, redes e ferramentas de produtividade exigidos na administração pública e nas forças de segurança.`,
      importancia: "Matéria com peso crescente nos concursos policiais pós-criação da área de crimes cibernéticos.",
    },
    doutrina: [
      {
        titulo: "1. Arquitetura, Conceitos e Padrões Técnicos",
        conteudo: `Compreensão técnica detalhada de ${assuntoNome}, incluindo protocolos de comunicação, portas lógicas, estruturas de arquivos e comandos fundamentais.`,
      },
      {
        titulo: "2. Segurança da Informação e Ameaças Digitais",
        conteudo: "Pilares CIDAR (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não-repúdio). Mecanismos de ataque (Ransomware, Phishing, Malware) e defesas (Criptografia, Firewall, VPN, Backup 3-2-1).",
      },
      {
        titulo: "3. Sistemas Operacionais e Ferramentas de Escritório",
        conteudo: "Diferenças operacionais entre Windows e Linux (diretórios, permissões, atalhos) e fórmulas avançadas em planilhas eletrônicas (PROCV, SOMASE, SE, CONT.SE).",
      },
    ],
    legislacao: [
      { referencia: "Padrões da Internet (RFCs) e LGPD (Lei 13.709/2018)", dispositivo: "Normas de proteção de dados pessoais e segurança da informação governamental." },
    ],
    pegadinhas: [
      "A banca afirma que o Firewall elimina vírus do computador: FALSO, o Firewall é filtro de portas de rede; quem remove vírus é o antivírus.",
      "A banca confunde backup incremental com diferencial (o diferencial copia alterações desde o último full; o incremental copia desde o último backup de qualquer tipo).",
    ],
    roteiro: [
      "Fichamento dos atalhos de teclado e comandos de terminal correspondentes.",
      "Tabela comparativa dos tipos de malware e protocolos de rede.",
      "Resolução de 25 questões recentes de bancas examinadoras.",
    ],
  };
}

function buildLegislacaoContent(assNorm, assuntoNome, disciplinaNome) {
  return {
    disciplina: disciplinaNome,
    assunto: assuntoNome,
    visaoGeral: {
      descricao: `O estudo de "${assuntoNome}" trata do diploma legal específico que rege matérias penais, administrativas ou institucionais especializadas, com foco na letra da lei e na jurisprudência pacificada.`,
      importancia: "Conhecimento prático direto indispensável para atuação policial e aprovação no certame.",
    },
    doutrina: [
      {
        titulo: "1. Objeto de Tutela e Âmbito de Aplicação da Lei",
        conteudo: `A lei reguladora de ${assuntoNome} protege bens jurídicos específicos com normas de conduta, vedações, procedimentos especiais e sanções aplicáveis aos infratores.`,
      },
      {
        titulo: "2. Tipos Penais e Infrações Administrativas Específicas",
        conteudo: "Identificação dos sujeitos ativos e passivos, verbos nucleares, causas de aumento e qualificadoras previstas no texto legal.",
      },
      {
        titulo: "3. Posição dos Tribunais Superiores (STF e STJ)",
        conteudo: "Súmulas e teses fixadas em recursos repetitivos interpretando os artigos mais polêmicos deste diploma legislativo.",
      },
    ],
    legislacao: [
      { referencia: `Diploma Legal de ${assuntoNome}`, dispositivo: "Dispositivos normativos, prazos, ritos procedimentais e sanções da legislação temática." },
    ],
    pegadinhas: [
      "Atenção às alterações recentes trazidas pelo Pacote Anticrime e leis correlatas.",
      "Cuidado com os prazos diferenciados e hipóteses de fiança nesta legislação especial.",
    ],
    roteiro: [
      "Leitura integral da lei seca correspondente ao tema.",
      "Esquematização de prazos e competências de persecução.",
      "Resolução de 25 questões de concursos públicos anteriores.",
    ],
  };
}

function buildDireitosHumanosContent(assNorm, assuntoNome, disciplinaNome) {
  return {
    disciplina: disciplinaNome,
    assunto: assuntoNome,
    visaoGeral: {
      descricao: `O tema "${assuntoNome}" insere-se na Teoria Geral e no Sistema Internacional de Proteção dos Direitos Humanos, consagrando a dignidade da pessoa humana como parâmetro universal e vinculante de atuação do Estado.`,
      importancia: "Disciplina obrigatória em concursos policiais federais e estaduais com foco em ética e atuação legal.",
    },
    doutrina: [
      {
        titulo: "1. Características e Dimensões dos Direitos Humanos",
        conteudo: "Universalidade, inalienabilidade, imprescritibilidade, irrenunciabilidade e vedação do retrocesso (efeito cliquet). Dimensões: 1ª (liberdades civis/políticas), 2ª (direitos sociais/econômicos) e 3ª (direitos difusos/solidariedade).",
      },
      {
        titulo: "2. Sistema Global (ONU) e Interamericano (OEA)",
        conteudo: "Declaração Universal dos Direitos Humanos de 1948 (DUDH) e Pacto de San José da Costa Rica (CADH 1969). Funcionamento da Comissão e da Corte Interamericana de Direitos Humanos.",
      },
      {
        titulo: "3. Incorporação dos Tratados no Direito Brasileiro",
        conteudo: "Art. 5º, §3º da CF/88 (Tratados de DH aprovados com rito de emenda constitucional têm status de Emenda à Constituição; os demais têm status supralegal - STF RE 466.343).",
      },
    ],
    legislacao: [
      { referencia: "Declaração Universal dos Direitos Humanos (1948)", dispositivo: "Todos os seres humanos nascem livres e iguais em dignidade e direitos." },
      { referencia: "Súmula Vinculante 25 (STF)", dispositivo: "É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito." },
    ],
    pegadinhas: [
      "A banca afirma que a DUDH é um tratado internacional vinculante formal: FALSO, a DUDH é uma resolução da Assembleia Geral da ONU (Resolução 217-A).",
      "A banca afirma que indivíduo particular pode peticionar diretamente à Corte Interamericana de Direitos Humanos: FALSO, particulares peticionam à COMISSÃO; à Corte apenas a Comissão ou os Estados-partes têm acesso.",
    ],
    roteiro: [
      "Leitura dos 30 artigos da Declaração Universal dos Direitos Humanos.",
      "Esquematização do Pacto de San José da Costa Rica e status dos tratados no Brasil.",
      "Resolução de 20 questões comentadas de Direitos Humanos.",
    ],
  };
}

function buildCriminologiaContent(assNorm, assuntoNome, disciplinaNome) {
  return {
    disciplina: disciplinaNome,
    assunto: assuntoNome,
    visaoGeral: {
      descricao: `A Criminologia é a ciência empírica e interdisciplinar que estuda o crime, o criminoso, a vítima e o controle social do comportamento delitivo, fornecendo substrato científico para a Política Criminal e o Direito Penal.`,
      importancia: "Disciplina de alto peso em concursos para Delegado, Perito, Investigador e Escrivão da Polícia Civil.",
    },
    doutrina: [
      {
        titulo: "1. Objetos e Métodos da Criminologia",
        conteudo: "Método indutivo, empírico e observacional. Quatro objetos modernos: Delito (fenômeno social), Delinquente (agente da conduta), Vítima (vitimologia) e Controle Social (formal: polícia, justiça, prisões; informal: família, escola, religião, sociedade).",
      },
      {
        titulo: "2. Teorias Sociológicas da Criminalidade",
        conteudo: "Teorias do Consenso: Escola de Chicago (desorganização urbana), Anomia de Merton (descompasso metas/meios), Associação Diferencial de Sutherland (crime como aprendizado social). Teorias do Conflito: Labeling Approach / Etiquetamento (o controle social cria o desvio primário e secundário) e Criminologia Crítica.",
      },
      {
        titulo: "3. Vitimologia e Prevenção Criminal",
        conteudo: "Classificações de vítimas (Mendelsohn). Vitimização primária (dano direto do crime), secundária (sofrimento burocrático com órgãos estatais) e terciária (estigmatização social). Prevenção primária (estrutural), secundária (foco em grupos/locais de risco) e terciária (ressocialização).",
      },
    ],
    legislacao: [
      { referencia: "Doutrina Clássica e Moderna da Criminologia", dispositivo: "Princípios criminológicos de controle do crime e garantia da ordem social." },
    ],
    pegadinhas: [
      "A banca confunde vitimização secundária (sobrevitimização institucional pela polícia/justiça) com terciária (abandono e estigma pelo grupo social).",
      "A banca atribui a Teoria do Etiquetamento (Labeling Approach) às teorias do consenso: FALSO, o Labeling Approach é a principal teoria do CONFLITO.",
    ],
    roteiro: [
      "Mapeamento das Escolas Criminológicas (Clássica, Positiva, Chicago, Anomia, Associação Diferencial, Labeling).",
      "Fichamento dos graus de vitimização e modelos de prevenção.",
      "Resolução de 25 questões de provas anteriores de Polícia Civil.",
    ],
  };
}

function buildMedicinaLegalContent(assNorm, assuntoNome, disciplinaNome) {
  return {
    disciplina: disciplinaNome,
    assunto: assuntoNome,
    visaoGeral: {
      descricao: `A Medicina Legal aplica os conhecimentos médico-biológicos aos interesses do Direito e da Justiça, constituindo peça fundamental na prova pericial e na elucidação de crimes contra a vida e a integridade corporal.`,
      importancia: "Disciplina técnica fundamental em concursos para Perito Criminal, Médico Legista e Polícia Civil.",
    },
    doutrina: [
      {
        titulo: "1. Traumatologia Forense (Lesionologia)",
        conteudo: "Energias mecânicas e seus instrumentos: Perfurantes (feridas punctórias); Cortantes (feridas incisas); Contundentes (escoriações, equimoses, hematomas, feridas contusas); Pérfuro-cortantes (feridas pérfuro-incisas); Pérfuro-contundentes (projéteis de arma de fogo com orlas de contusão, enxugo, tatuagem e esfumaçamento).",
      },
      {
        titulo: "2. Tanatologia e Fenômenos Cadavéricos",
        conteudo: "Abióticos imediatos (parada cardiorrespiratória) e consecutivos (Algor mortis/resfriamento, Rigor mortis/rigidez pela Lei de Nysten, Livor mortis/livores de hipóstase). Transformativos destrutivos (autólise, putrefação: período de coloração com mancha verde abdominal, gasoso, coliquativo e esqueletização) e conservadores (mumificação e saponificação).",
      },
      {
        titulo: "3. Asfixiologia Forense",
        conteudo: "Tríade asfíxica (cianose, fluidez sanguínea, Manchas de Tardieu). Diferença crucial entre Enforcamento (sulco oblíquo, ascendente, descontínuo e de profundidade desigual) e Estrangulamento (sulco horizontal, contínuo e uniforme).",
      },
    ],
    legislacao: [
      { referencia: "Código de Processo Penal, Art. 158", dispositivo: "Quando a infração deixar vestígios, será indispensável o exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado." },
    ],
    pegadinhas: [
      "A banca inverte as características do sulco de Enforcamento (descontínuo e oblíquo) com o de Estrangulamento (contínuo e horizontal).",
      "A banca afirma que a mancha verde abdominal na gravidez surge na fossa ilíaca direita: FALSO, na gestação e afogados surge preferencialmente no tórax.",
    ],
    roteiro: [
      "Memorizar o quadro de energias e instrumentos da Traumatologia Forense.",
      "Esquematizar a cronologia dos fenômenos cadavéricos (Algor, Rigor, Livor e Putrefação).",
      "Resolver 25 questões de perícia e medicina legal.",
    ],
  };
}

function buildHumanasContent(assNorm, assuntoNome, disciplinaNome) {
  return {
    disciplina: disciplinaNome,
    assunto: assuntoNome,
    visaoGeral: {
      descricao: `O estudo de "${assuntoNome}" em ${disciplinaNome} analisa a evolução histórica, os processos socioeconômicos, a configuração geográfica e a dinâmica geopolítica e cultural aplicável ao contexto dos concursos públicos.`,
      importancia: "Conhecimento regional e geral com peso classificatório expressivo em provas estaduais e federais.",
    },
    doutrina: [
      {
        titulo: "1. Contextualização Histórica e Geográfica",
        conteudo: `Compreensão dos marcos cronológicos, ciclos econômicos, movimentos sociais e aspectos físico-geográficos (relevo, clima, hidrografia, vegetação) que moldaram ${assuntoNome}.`,
      },
      {
        titulo: "2. Dinâmica Demográfica, Social e Econômica",
        conteudo: "Fluxos migratórios, urbanização, principais setores produtivos, desigualdades regionais e papel do Estado nas políticas de desenvolvimento.",
      },
      {
        titulo: "3. Fatos Marcantes e Relevância Contemporânea",
        conteudo: "Acontecimentos políticos, culturais e institucionais mais cobrados pelas bancas examinadoras nos últimos certames da região.",
      },
    ],
    legislacao: [
      { referencia: "Fontes Oficiais (IBGE, IPEA, Acervos Históricos)", dispositivo: `Dados consolidados e referências geo-históricas aplicáveis a ${assuntoNome}.` },
    ],
    pegadinhas: [
      "Atenção às datas e ordenação cronológica de eventos históricos regionais.",
      "Cuidado com a confusão entre biomas (ex: Cerrado, Caatinga, Mata Atlântica) e suas características edafoclimáticas.",
    ],
    roteiro: [
      "Construção de linha do tempo com os marcos históricos e geográficos do tema.",
      "Fixação dos dados estatísticos e demográficos mais relevantes.",
      "Resolução de 20 questões de bancas locais e nacionais.",
    ],
  };
}

function buildGeneralContent(assNorm, assuntoNome, disciplinaNome, assuntoDescricao) {
  return {
    disciplina: disciplinaNome,
    assunto: assuntoNome,
    visaoGeral: {
      descricao: assuntoDescricao || `O tema "${assuntoNome}" integra os conhecimentos exigidos na disciplina ${disciplinaNome}, abrangendo conceitos fundamentais, teorias estruturadas e aplicação prática direcionada para concursos públicos.`,
      importancia: "Conteúdo programático indispensável para o cumprimento integral do edital.",
    },
    doutrina: [
      {
        titulo: "1. Conceitos Fundamentais e Enquadramento Teórico",
        conteudo: `Definições, princípios e fundamentos técnicos e científicos que estruturam ${assuntoNome}, com base na melhor bibliografia de referência para certames públicos.`,
      },
      {
        titulo: "2. Aplicação Prática e Resolução de Problemas",
        conteudo: "Metodologias de análise, regras aplicáveis, procedimentos operacionais e critérios adotados na solução de questões do tema.",
      },
      {
        titulo: "3. Síntese Esquematizada e Pontos Críticos",
        conteudo: "Mapeamento dos conceitos de maior recorrência em provas, facilitando a memorização ativa e a revisão acelerada.",
      },
    ],
    legislacao: [
      { referencia: `Normas e Referências Técnicas de ${disciplinaNome}`, dispositivo: `Diretrizes programáticas e marcos conceituais aplicáveis a ${assuntoNome}.` },
    ],
    pegadinhas: [
      "Atenção aos detalhes conceituais e distinções sutis entre termos técnicos frequentemente exploradas pelas bancas.",
      "Cuidado com alternativas que generalizam regras com termos restritivos.",
    ],
    roteiro: [
      "Leitura atenta dos tópicos esquematizados do material.",
      "Elaboração de mapa mental ou resumo mnemônico dos conceitos.",
      "Resolução de 20 a 30 questões de fixação com análise detalhada dos erros.",
    ],
  };
}
