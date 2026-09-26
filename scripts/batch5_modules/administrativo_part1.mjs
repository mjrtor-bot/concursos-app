import { TAXONOMIA } from "./taxonomia.mjs";

const ce = (idSlug, assunto_id, enunciado, correta, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.administrativo,
  assunto_id,
  banca_nome: "CEBRASPE",
  orgao_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Polícia Federal" : "Polícia Civil",
  cargo_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Agente de Polícia Federal" : "Delegado de Polícia",
  ano: 2025,
  tipo: "certo_errado",
  dificuldade: "dificil",
  enunciado,
  alternativas: [
    { letra: "C", texto: "Certo", correta, explicacao_especifica: correta ? "Correto. A assertiva está em conformidade com a legislação e a jurisprudência administrativa dominante." : "Incorreto. A assertiva contraria a disciplina legal ou a jurisprudência consolidada aplicável ao tema." },
    { letra: "E", texto: "Errado", correta: !correta, explicacao_especifica: !correta ? "Correto. A assertiva contém impropriedade jurídica relevante." : "Incorreto. A assertiva reproduz corretamente o entendimento exigido." }
  ],
  explicacao: `Gabarito: ${correta ? "Certo" : "Errado"}. ${explicacao}`
});

const me = (idSlug, assunto_id, enunciado, corretaLetra, alternativas, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.administrativo,
  assunto_id,
  banca_nome: "FGV",
  orgao_nome: "Polícia Civil",
  cargo_nome: "Delegado de Polícia",
  ano: 2024,
  tipo: "multipla_escolha",
  dificuldade: "medio",
  enunciado,
  alternativas: alternativas.map(([letra, texto, just]) => ({ letra, texto, correta: letra === corretaLetra, explicacao_especifica: just })),
  explicacao: `Gabarito: ${corretaLetra}. ${explicacao}`
});

export const administrativoPart1 = [
  ce("adm-b5-001", TAXONOMIA.assuntos.principios_adm, "Os princípios expressos da Administração Pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios são legalidade, impessoalidade, moralidade, publicidade e eficiência, nos termos do art. 37, caput, da Constituição Federal.", true, "O art. 37, caput, consagra o núcleo LIMPE como parâmetro obrigatório de toda atuação administrativa, inclusive nas carreiras policiais."),
  me("adm-b5-002", TAXONOMIA.assuntos.principios_adm, "Sobre os princípios administrativos, assinale a opção correta.", "A", [
    ["A", "A impessoalidade veda a promoção pessoal de autoridades em publicidade institucional.", "Correta. A publicidade estatal deve ter caráter educativo, informativo ou de orientação social."],
    ["B", "A moralidade administrativa confunde-se integralmente com a moral subjetiva do agente.", "Incorreta. A moralidade administrativa é padrão jurídico objetivo de probidade e boa-fé."],
    ["C", "A eficiência autoriza o agente público a descumprir a lei quando a medida for útil.", "Incorreta. Eficiência não afasta a legalidade."],
    ["D", "A publicidade é absoluta, inclusive quanto a investigações sigilosas em curso.", "Incorreta. Admite-se sigilo necessário à segurança da sociedade, do Estado e da investigação."],
    ["E", "A legalidade administrativa permite tudo que não estiver proibido ao agente público.", "Incorreta. Ao administrador só é permitido agir conforme autorização normativa."],
  ], "A impessoalidade impede personalização da máquina pública e conecta-se à finalidade pública."),
  ce("adm-b5-003", TAXONOMIA.assuntos.poderes_administrativos, "O poder de polícia administrativa consiste na atividade da Administração Pública que limita ou disciplina direito, interesse ou liberdade em razão do interesse público, abrangendo, entre outros aspectos, segurança, higiene, ordem, costumes, disciplina da produção e do mercado, exercício de atividades econômicas e propriedade.", true, "A definição decorre do art. 78 do CTN e é central para fiscalização, licenciamento, interdição e atuação preventiva do Estado."),
  me("adm-b5-004", TAXONOMIA.assuntos.poder_policia, "Acerca dos atributos do poder de polícia, assinale a afirmativa correta.", "B", [
    ["A", "A autoexecutoriedade está presente em todos os atos administrativos, sem exceção.", "Incorreta. Depende de previsão legal ou urgência."],
    ["B", "A coercibilidade permite impor medidas de polícia independentemente da concordância do particular, observados legalidade e proporcionalidade.", "Correta. A medida pode ser imposta coercitivamente, inclusive com sanções administrativas."],
    ["C", "A discricionariedade impede controle judicial do ato de polícia.", "Incorreta. Mérito administrativo tem limites e a legalidade é controlável."],
    ["D", "O poder de polícia nunca admite delegação a particulares.", "Incorreta. Atos materiais e instrumentais podem ser delegados em certas condições; o ciclo sancionatório decisório é reservado ao Estado."],
    ["E", "A imperatividade equivale à competência para prender em flagrante por crime comum.", "Incorreta. São planos jurídicos distintos."],
  ], "Coercibilidade, imperatividade e autoexecutoriedade qualificam a atuação de polícia dentro dos limites legais."),
  ce("adm-b5-005", TAXONOMIA.assuntos.poderes_adm, "O poder hierárquico autoriza a Administração a distribuir e escalonar funções, ordenar e rever a atuação de subordinados, delegar e avocar competências, inexistindo, contudo, hierarquia entre pessoas jurídicas distintas da Administração indireta e o ente político instituidor.", true, "Há vinculação finalística/supervisão ministerial, mas não subordinação hierárquica entre entes dotados de personalidade própria."),
  ce("adm-b5-006", TAXONOMIA.assuntos.poderes_adm, "A delegação de competência é admitida como regra, salvo impedimento legal, mas não podem ser objeto de delegação a edição de atos de caráter normativo, a decisão de recursos administrativos e as matérias de competência exclusiva do órgão ou autoridade.", true, "A Lei 9.784/1999, art. 13, delimita as hipóteses indelegáveis."),
  me("adm-b5-007", TAXONOMIA.assuntos.poderes_adm, "No âmbito do poder disciplinar, assinale a opção correta.", "C", [
    ["A", "Aplica-se apenas a particulares sem vínculo com a Administração.", "Incorreta. Incide sobre servidores e particulares sujeitos a vínculo especial."],
    ["B", "Confunde-se com o poder punitivo penal exercido pelo Poder Judiciário.", "Incorreta. Sanção disciplinar é administrativa."],
    ["C", "Permite apurar infrações funcionais e aplicar sanções a servidores, assegurados contraditório e ampla defesa.", "Correta. O devido processo administrativo é indispensável."],
    ["D", "Dispensa motivação quando a sanção for advertência.", "Incorreta. Sanções disciplinares exigem motivação."],
    ["E", "Autoriza demissão verbal em situações de urgência policial.", "Incorreta. Demissão exige processo administrativo disciplinar regular."],
  ], "O poder disciplinar decorre da necessidade de preservar regularidade, ética e eficiência no serviço público."),
  ce("adm-b5-008", TAXONOMIA.assuntos.atos_administrativos, "Os elementos ou requisitos clássicos do ato administrativo são competência, finalidade, forma, motivo e objeto, sendo a finalidade pública requisito sempre vinculado.", true, "Finalidade pública não é objeto de escolha discricionária: o desvio de finalidade invalida o ato."),
  me("adm-b5-009", TAXONOMIA.assuntos.atos_administrativos, "Quanto aos atributos dos atos administrativos, assinale a alternativa correta.", "A", [
    ["A", "A presunção de legitimidade e veracidade opera até prova em contrário e não impede controle judicial.", "Correta. Trata-se de presunção relativa (juris tantum)."],
    ["B", "A autoexecutoriedade está presente em todos os atos negociais.", "Incorreta. Não é universal."],
    ["C", "A tipicidade significa que o ato administrativo pode ter qualquer conteúdo escolhido livremente pelo agente.", "Incorreta. Tipicidade exige correspondência com figuras legais."],
    ["D", "A imperatividade está presente em atestados e certidões.", "Incorreta. Atos enunciativos não impõem obrigações."],
    ["E", "A presunção de legitimidade torna o ato imune à anulação pela Administração.", "Incorreta. A Administração pode anular seus atos ilegais."],
  ], "A presunção relativa transfere ao administrado o ônus inicial de demonstrar ilegalidade, sem blindar o ato."),
  ce("adm-b5-010", TAXONOMIA.assuntos.atos_adm, "A Administração pode anular seus próprios atos quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos, ou revogá-los por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos, ressalvada, em todos os casos, a apreciação judicial.", true, "O enunciado sintetiza a Súmula 473 do STF."),
  ce("adm-b5-011", TAXONOMIA.assuntos.atos_adm, "A convalidação de ato administrativo com vício sanável é admitida quando não acarretar lesão ao interesse público nem prejuízo a terceiros, sendo usualmente possível nos vícios de competência não exclusiva e de forma não essencial.", true, "A Lei 9.784/1999, art. 55, acolhe a convalidação por razões de segurança jurídica e eficiência."),
  me("adm-b5-012", TAXONOMIA.assuntos.atos_administrativos, "O ato administrativo praticado com finalidade diversa daquela prevista explícita ou implicitamente na regra de competência apresenta vício de:", "D", [
    ["A", "forma essencial", "Incorreta. Forma diz respeito ao revestimento exterior do ato."],
    ["B", "objeto lícito", "Incorreta. Objeto é o conteúdo do ato."],
    ["C", "competência delegável", "Incorreta. A questão trata de finalidade."],
    ["D", "desvio de finalidade", "Correta. O agente usa competência para fim diverso do interesse público legalmente previsto."],
    ["E", "motivo inexistente por presunção absoluta", "Incorreta. Não há presunção absoluta de motivo."],
  ], "O desvio de finalidade é modalidade de abuso de poder e invalida o ato."),
  ce("adm-b5-013", TAXONOMIA.assuntos.responsabilidade_civil_estado, "As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão objetivamente pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.", true, "É o texto do art. 37, § 6º, da CF/88, que adota a teoria do risco administrativo."),
  me("adm-b5-014", TAXONOMIA.assuntos.responsabilidade_civil, "Sobre responsabilidade civil do Estado, assinale a opção correta.", "B", [
    ["A", "A responsabilidade objetiva do Estado exclui o direito de regresso contra o agente.", "Incorreta. O regresso é assegurado em caso de dolo ou culpa."],
    ["B", "A culpa exclusiva da vítima rompe o nexo causal e afasta a responsabilidade estatal.", "Correta. Excludentes de nexo podem afastar ou atenuar o dever de indenizar."],
    ["C", "O caso fortuito externo nunca influencia a responsabilidade civil estatal.", "Incorreta. Pode romper o nexo em situações específicas."],
    ["D", "A omissão estatal sempre gera responsabilidade objetiva automática.", "Incorreta. Em regra, omissões específicas podem gerar responsabilidade objetiva; omissões genéricas exigem análise de culpa do serviço."],
    ["E", "Delegatária de serviço público responde subjetivamente perante usuário.", "Incorreta. Prestadora de serviço público responde objetivamente."],
  ], "A teoria do risco administrativo admite excludentes ou atenuantes de responsabilidade."),
  ce("adm-b5-015", TAXONOMIA.assuntos.responsabilidade_civil, "Segundo o STF, o Estado responde objetivamente pela morte de detento sob sua custódia quando demonstrado o nexo causal entre o dano e a omissão estatal, em razão do dever específico de proteção imposto pelo art. 5º, XLIX, da Constituição Federal.", true, "O dever de guarda cria responsabilidade estatal por integridade física e moral do preso sob custódia."),
  ce("adm-b5-016", TAXONOMIA.assuntos.agentes_publicos, "A aprovação em concurso público dentro do número de vagas previsto no edital gera direito subjetivo à nomeação durante o prazo de validade do certame, ressalvadas situações excepcionalíssimas supervenientes, imprevisíveis, graves e necessárias devidamente motivadas.", true, "Tese firmada pelo STF no RE 598.099 e consolidada na jurisprudência administrativa."),
  me("adm-b5-017", TAXONOMIA.assuntos.agentes_publicos, "Quanto ao concurso público, assinale a alternativa correta.", "A", [
    ["A", "O prazo de validade será de até dois anos, prorrogável uma vez por igual período.", "Correta. Art. 37, III, da CF/88."],
    ["B", "Durante o prazo improrrogável previsto no edital, aprovado em concurso posterior será convocado antes dos aprovados no anterior.", "Incorreta. A Constituição protege a prioridade do concurso anterior."],
    ["C", "Cargos em comissão exigem concurso público em todos os casos.", "Incorreta. São de livre nomeação e exoneração, nos limites constitucionais."],
    ["D", "Emprego público em empresa estatal dispensa concurso.", "Incorreta. Também exige concurso público."],
    ["E", "Concurso para policial pode prever critério discriminatório não relacionado ao cargo.", "Incorreta. Requisitos devem ser razoáveis, legais e pertinentes."],
  ], "O art. 37, II a IV, rege a investidura e a validade dos concursos públicos."),
  ce("adm-b5-018", TAXONOMIA.assuntos.agentes_8112, "A acumulação remunerada de cargos públicos é, em regra, vedada, admitindo-se, quando houver compatibilidade de horários, as hipóteses constitucionais de dois cargos de professor; um cargo de professor com outro técnico ou científico; ou dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas.", true, "O art. 37, XVI, da CF/88 prevê as exceções taxativas à vedação de acumulação."),
  me("adm-b5-019", TAXONOMIA.assuntos.regime_disciplinar, "Nos termos gerais da Lei nº 8.112/1990, constitui penalidade disciplinar aplicável ao servidor público federal:", "C", [
    ["A", "prisão administrativa por até trinta dias", "Incorreta. Não é penalidade disciplinar da Lei 8.112/90."],
    ["B", "banimento do serviço público", "Incorreta. Banimento é vedado no ordenamento constitucional."],
    ["C", "advertência, suspensão, demissão, cassação de aposentadoria ou disponibilidade, destituição de cargo em comissão e destituição de função comissionada", "Correta. Rol do art. 127 da Lei 8.112/90."],
    ["D", "perda automática de nacionalidade", "Incorreta. Matéria constitucional diversa."],
    ["E", "multa penal substitutiva", "Incorreta. Sanção penal, não disciplinar administrativa."],
  ], "O regime disciplinar estatutário prevê sanções administrativas próprias, aplicadas mediante devido processo."),
  ce("adm-b5-020", TAXONOMIA.assuntos.agentes_8112, "A demissão de servidor público estável por infração disciplinar exige processo administrativo em que lhe sejam assegurados o contraditório e a ampla defesa, não bastando decisão unilateral imotivada da autoridade competente.", true, "A estabilidade protege contra desligamento arbitrário e impõe procedimento formal com defesa."),
];
