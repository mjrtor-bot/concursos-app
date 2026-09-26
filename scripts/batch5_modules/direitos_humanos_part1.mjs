import { TAXONOMIA } from "./taxonomia.mjs";

const ce = (idSlug, assunto_id, enunciado, correta, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
  assunto_id,
  banca_nome: "CEBRASPE",
  orgao_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Polícia Federal" : "Polícia Civil",
  cargo_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Delegado de Polícia Federal" : "Delegado de Polícia",
  ano: 2025,
  tipo: "certo_errado",
  dificuldade: "dificil",
  enunciado,
  alternativas: [
    { letra: "C", texto: "Certo", correta, explicacao_especifica: correta ? "Correto. A assertiva está em plena consonância com os tratados internacionais e a jurisprudência da Corte Interamericana e do STF." : "Incorreto. A assertiva contraria a teoria geral dos direitos humanos ou a jurisprudência internacional consolidada." },
    { letra: "E", texto: "Errado", correta: !correta, explicacao_especifica: !correta ? "Correto. A assertiva contém erro conceitual ou equívoco dogmático relevante." : "Incorreto. A proposição traduz com exatidão o regramento internacional de proteção aos direitos humanos." }
  ],
  explicacao: `Gabarito: ${correta ? "Certo" : "Errado"}. ${explicacao}`
});

const me = (idSlug, assunto_id, enunciado, corretaLetra, alternativas, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
  assunto_id,
  banca_nome: "FGV",
  orgao_nome: "Polícia Civil",
  cargo_nome: "Delegado de Polícia",
  ano: 2024,
  tipo: "multipla_escolha",
  dificuldade: "dificil",
  enunciado,
  alternativas: alternativas.map(([letra, texto, just]) => ({ letra, texto, correta: letra === corretaLetra, explicacao_especifica: just })),
  explicacao: `Gabarito: ${corretaLetra}. ${explicacao}`
});

export const direitosHumanosPart1 = [
  ce("dh-b5-001", TAXONOMIA.assuntos.geracoes_dh,
    "O princípio da vedação do retrocesso em matéria de direitos humanos (também denominado efeito *cliquet*) estabelece que os direitos humanos fundamentais, uma vez consagrados no ordenamento jurídico interno ou internacional, não podem ser suprimidos ou desregulamentados em prejuízo dos cidadãos, vinculando o legislador e o aplicador do direito à preservação e ao contínuo aprimoramento dos níveis de proteção já alcançados.",
    true,
    "O efeito cliquet (vedação do retrocesso) impede que o Estado retroceda nas conquistas de direitos humanos já incorporadas ao patrimônio jurídico social e individual."),

  me("dh-b5-002", TAXONOMIA.assuntos.geracoes_dh,
    "A respeito das dimensões (ou gerações) dos direitos humanos consagradas na doutrina jusfilosófica contemporânea, assinale a afirmativa correta.",
    "A",
    [
      ["A", "Os direitos de primeira dimensão enfatizam a liberdade individual, traduzindo-se em deveres de abstenção do Estado (direitos negativos, como direitos civis e políticos); os de segunda dimensão fundam-se na igualdade material e exigem prestações estatais positivas (direitos sociais, econômicos e culturais); e os de terceira dimensão consagram a solidariedade e a fraternidade, tutelando direitos difusos e coletivos.", "Correta. Classificação clássica de Karel Vasak fundamentada no lema da Revolução Francesa (Liberdade, Igualdade e Fraternidade)."],
      ["B", "Os direitos de segunda dimensão dispensam qualquer atuação orçamentária ou intervenção regulatória do Poder Público.", "Incorreta. Direitos de 2ª dimensão (saúde, educação, previdência) exigem prestações estatais fáticas e alocação orçamentária expressiva."],
      ["C", "Os direitos de primeira dimensão surgiram no pós-Segunda Guerra Mundial para disciplinar a biotecnologia e a bioética.", "Incorreta. Surgiram nas Revoluções Liberais do século XVIII."],
      ["D", "A teoria geracional prega que a superveniência de uma nova dimensão de direitos revoga integralmente a dimensão anterior.", "Incorreta. Os direitos humanos são cumulativos, indivisíveis e interdependentes (princípio da complementaridade)."],
      ["E", "Os direitos de terceira dimensão limitam-se ao direito de voto e à inviolabilidade domiciliar.", "Incorreta. Voto e domicílio são direitos de 1ª dimensão."]
    ],
    "Os direitos de 1ª dimensão (civis e políticos) ligam-se à liberdade/abstenção estatal; os de 2ª dimensão (sociais, econômicos e culturais) à igualdade/prestação estatal; e os de 3ª dimensão (meio ambiente, paz, desenvolvimento) à fraternidade/solidariedade coletiva."),

  ce("dh-b5-003", TAXONOMIA.assuntos.geracoes_dh,
    "Nos termos do art. 5º, § 3º, da Constituição Federal (incluído pela Emenda Constitucional nº 45/2004), os tratados e as convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes às emendas constitucionais.",
    true,
    "É a disciplina expressa do art. 5º, § 3º, da CF/88, que confere status de emenda constitucional aos tratados de direitos humanos aprovados pelo rito qualificado."),

  me("dh-b5-004", TAXONOMIA.assuntos.geracoes_dh,
    "Segundo a jurisprudência vinculante fixada pelo Supremo Tribunal Federal no julgamento do RE 466.343 e consolidada na Súmula Vinculante nº 25, os tratados internacionais de direitos humanos ratificados pelo Brasil pelo rito ordinário antes ou depois da EC 45/2004 ostentam *status* hierárquico:",
    "C",
    [
      ["A", "infraconstitucional e ordinário, subordinando-se a qualquer lei federal superveniente.", "Incorreta. O STF superou a tese da paridade com a lei ordinária."],
      ["B", "constitucional originário automático, integrando o corpo permanente da Carta Política.", "Incorreta. Exige aprovação pelo rito do art. 5º, § 3º para equivaler a emenda."],
      ["C", "supralegal, situando-se abaixo da Constituição Federal, porém acima de toda a legislação ordinária infraconstitucional.", "Correta. Tese da supralegalidade fixada pelo STF no RE 466.343."],
      ["D", "meramente programático sem eficácia paralisante de leis contrárias.", "Incorreta. Possuem efeito paralisante sobre normas legais infraconstitucionais conflitantes."],
      ["E", "de decreto regulamentar infralegal sem aplicabilidade direta no Judiciário.", "Incorreta. São normas de aplicação imediata com força cogente."]
    ],
    "O STF definiu que os tratados de direitos humanos aprovados sem o rito do art. 5º, § 3º têm status SUPRALEGAL: estão abaixo da Constituição, mas acima de todas as leis ordinárias, revogando ou paralisando a eficácia das leis que lhes forem contrárias (como a prisão do depositário infiel - Súmula Vinculante 25)."),

  ce("dh-b5-005", TAXONOMIA.assuntos.cadh,
    "O controle de convencionalidade consiste na verificação da compatibilidade das leis e dos atos normativos internos com os tratados internacionais de direitos humanos ratificados e em vigor no Estado, devendo ser exercido de ofício por todos os juízes e tribunais nacionais no âmbito de suas respectivas competências (controle difuso de convencionalidade).",
    true,
    "A Corte Interamericana de Direitos Humanos consolidou no Caso Almonacid Arellano e no Caso Trabalhadores da Fazenda Brasil Verde o dever do Poder Judiciário de realizar de ofício o controle difuso de convencionalidade em face da CADH."),

  me("dh-b5-006", TAXONOMIA.assuntos.geracoes_dh,
    "A respeito do Incidente de Deslocamento de Competência (IDC), previsto no art. 109, § 5º, da Constituição Federal, assinale a opção correta.",
    "B",
    [
      ["A", "Pode ser suscitado por qualquer cidadão ou entidade de classe perante o Supremo Tribunal Federal.", "Incorreta. A legitimação ativa é exclusiva do Procurador-Geral da República perante o Superior Tribunal de Justiça."],
      ["B", "Compete privativamente ao Procurador-Geral da República suscitar o incidente perante o Superior Tribunal de Justiça, nas hipóteses de grave violação de direitos humanos, com a finalidade de assegurar o cumprimento de obrigações decorrentes de tratados internacionais dos quais o Brasil seja parte, deslocando o feito para a Justiça Federal.", "Correta. É o teor literal e sistemático do art. 109, § 5º, da CF/88."],
      ["C", "O IDC destina-se a deslocar crimes comuns para a competência exclusiva da Justiça Militar estadual.", "Incorreta. Desloca para a Justiça Federal."],
      ["D", "O acolhimento do IDC depende de concordância expressa do Governador do Estado onde ocorreu o delito.", "Incorreta. A decisão é jurisdicional do STJ independentemente da anuência do Executivo estadual."],
      ["E", "O IDC pode ser utilizado mesmo quando a justiça estadual esteja apurando o caso com plena celeridade, independência e eficácia demonstradas.", "Incorreta. Exige demonstração inequívoca de incapacidade, inércia ou falência dos órgãos locais."]
    ],
    "O art. 109, § 5º, da CF/88 estabelece os requisitos cumulativos do IDC: 1) grave violação de direitos humanos; 2) risco de responsabilização internacional do Estado brasileiro por descumprimento de tratado; 3) incapacidade institucional/inércia dos órgãos estaduais; e 4) legitimação privativa do PGR perante o STJ."),

  ce("dh-b5-007", TAXONOMIA.assuntos.dudh,
    "A Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 1948 por meio da Resolução 217 A (III), embora tenha nascido formalmente como resolução desprovida de natureza originária de tratado cogente (*soft law*), é hodiernamente reconhecida pela doutrina e tribunais internacionais como costume internacional e paradigma imperativo de *jus cogens*.",
    true,
    "A DUDH é a pedra basilar do sistema global da ONU e suas disposições consolidaram-se como direito consuetudinário internacional vinculante para todos os Estados."),

  me("dh-b5-008", TAXONOMIA.assuntos.dudh,
    "Em relação aos direitos civis e políticos consagrados no texto da Declaração Universal dos Direitos Humanos de 1948, assinale a opção correta.",
    "A",
    [
      ["A", "A DUDH proclama que todo ser humano tem direito à vida, à liberdade e à segurança pessoal, estabelecendo expressamente que ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante, e que ninguém será mantido em escravidão ou servidão.", "Correta. Rol expresso nos arts. 3º, 4º e 5º da DUDH de 1948."],
      ["B", "A DUDH veda de modo absoluto e perpétuo a decretação de estado de defesa em qualquer circunstância.", "Incorreta. A DUDH admite limitações para assegurar a ordem pública e os direitos alheios (art. 29)."],
      ["C", "A DUDH autorizou expressamente a discriminação fundada em orientação ideológica nas forças policiais.", "Incorreta. O art. 2º da DUDH veda expressamente qualquer distinção fundada em opinião política."],
      ["D", "A DUDH impede o direito de asilo político a estrangeiros perseguidos.", "Incorreta. O art. 14 da DUDH consagra o direito de procurar e gozar asilo em outros países."],
      ["E", "A DUDH restringe a presunção de inocência apenas aos julgamentos perante tribunais militares.", "Incorreta. O art. 11 da DUDH consagra a presunção de inocência a toda pessoa acusada de delito."]
    ],
    "Os artigos 3º, 4º e 5º da DUDH consagram a universalidade do direito à vida, a vedação absoluta da escravidão e servidão e a proibição terminante da tortura e tratamentos cruéis, desumanos ou degradantes."),

  ce("dh-b5-009", TAXONOMIA.assuntos.cadh,
    "Nos termos da Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica de 1969), o direito à vida deve ser protegido pela lei e, em geral, desde o momento da concepção, não podendo os Estados que aboliram a pena de morte restabelecê-la sob qualquer justificativa posterior (princípio da proibição de retrocesso).",
    true,
    "O art. 4º, item 1 e item 3, da CADH estabelece a proteção da vida desde a concepção e a proibição absoluta de restabelecimento da pena de morte nos países que a aboliram."),

  me("dh-b5-010", TAXONOMIA.assuntos.cadh,
    "A respeito da estrutura orgânica do Sistema Interamericano de Direitos Humanos, assinale a afirmativa correta.",
    "B",
    [
      ["A", "A Corte Interamericana e a Comissão Interamericana são sediadas em Genebra e possuem competência jurisdicional exclusiva sobre todos os países membros da ONU.", "Incorreta. São órgãos da OEA; a Comissão fica em Washington e a Corte em San José da Costa Rica."],
      ["B", "A Comissão Interamericana possui competência consultiva e executiva quase-jurisdicional, recebendo petições individuais de cidadãos ou ONGs contra violações de direitos humanos, ao passo que a Corte Interamericana exerce competência contenciosa jurisdicional e consultiva, perante a qual apenas os Estados-partes e a Comissão possuem legitimidade (*locus standi in judicio*) para submeter casos a julgamento.", "Correta. Distinção orgânica e processual consagrada na CADH (arts. 44 e 61)."],
      ["C", "Qualquer cidadão brasileiro pode ingressar com ação judicial indenizatória direta perante a Corte Interamericana sem passar pela Comissão.", "Incorreta. Indivíduos não possuem capacidade postulatória direta para acionar a Corte IDH (apenas a Comissão e Estados podem submeter casos contenciosos)."],
      ["D", "As sentenças proferidas pela Corte Interamericana de Direitos Humanos têm valor de recomendação facultativa para o Brasil.", "Incorreta. São sentenças vinculantes com eficácia de título executivo judicial perante o Estado brasileiro (art. 68 da CADH)."],
      ["E", "A submissão de caso à Corte Interamericana dispensa o prévio esgotamento dos recursos da jurisdição interna.", "Incorreta. O esgotamento prévio dos recursos internos é requisito essencial de admissibilidade (art. 46, 1, 'a')."]
    ],
    "No Sistema Interamericano, as vítimas individuais apresentam petições perante a Comissão Interamericana de Direitos Humanos (CIDH). Apenas a Comissão ou os Estados-partes podem submeter o caso contencioso ao julgamento da Corte Interamericana de Direitos Humanos (Corte IDH)."),

  ce("dh-b5-011", TAXONOMIA.assuntos.cadh,
    "Segundo a jurisprudência contenciosa da Corte Interamericana de Direitos Humanos no emblemático Caso Gomes Lund e outros vs. Brasil ('Guerrilha do Araguaia', 2010), as disposições da Lei de Anistia brasileira (Lei nº 6.683/1979) que impedem a investigação e a sanção de graves violações de direitos humanos (como desaparecimentos forçados, torturas e execuções sumárias) carecem de efeitos jurídicos, sendo incompatíveis com a Convenção Americana sobre Direitos Humanos e não podendo obstar a persecução penal.",
    true,
    "A Corte IDH assentou a invalidade das leis de autoanistia ou anistia para crimes contra a humanidade e graves violações de direitos humanos, determinando o dever do Estado brasileiro de investigar, processar e punir os responsáveis."),

  me("dh-b5-012", TAXONOMIA.assuntos.cadh,
    "No histórico julgamento do Caso Favela Nova Brasília vs. Brasil (2017), a Corte Interamericana de Direitos Humanos condenou o Estado brasileiro por violações perpetradas durante incursões policiais e estabeleceu a seguinte determinação estrutural para as polícias:",
    "C",
    [
      ["A", "A proibição integral e permanente de qualquer ação policial em favelas e comunidades.", "Incorreta. A Corte não proibiu o policiamento, mas impôs parâmetros rígidos de investigação e uso da força."],
      ["B", "A transferência de todas as investigações sobre mortes decorrentes de intervenção policial exclusivamente para juízes de paz.", "Incorreta. Não determinou juízes de paz."],
      ["C", "O dever de realizar investigações independentes, imparciais, céleres e minuciosas sobre mortes, torturas ou violência sexual decorrentes de intervenção policial por órgãos autônomos e diferentes da força pública envolvida no incidente, vedando a impunidade decorrente da mera alegação formal de 'autos de resistência'.", "Correta. Sentença estrutural do Caso Favela Nova Brasília (parágrafos 326 e seguintes)."],
      ["D", "A concessão automática de porte livre de fuzis automáticos a todos os moradores das comunidades.", "Incorreta. Assertiva esdrúxula."],
      ["E", "A desmilitarização compulsória imediata de todos os corpos de bombeiros do país.", "Incorreta. A decisão não tratou de corpos de bombeiros."]
    ],
    "No Caso Favela Nova Brasília vs. Brasil (2017), a Corte IDH condenou o Brasil pela falta de investigação das mortes e violências sexuais cometidas por policiais, exigindo a padronização de protocolos de investigação independente e o fim da chancela de impunidade associada aos 'autos de resistência'."),

  ce("dh-b5-013", TAXONOMIA.assuntos.geracoes_dh,
    "Os Princípios Básicos sobre o Uso da Força e Armas de Fogo pelos Funcionários Responsáveis pela Aplicação da Lei (PBUFAF - ONU, 1990) consagram que o uso de armas de fogo contra pessoas é medida extrema e excepcional, admitida somente em legítima defesa própria ou de outrem contra ameaça iminente de morte ou lesão grave, e para prevenir a perpetração de crime particularmente grave que envolva séria ameaça à vida.",
    true,
    "Os princípios 9 e 10 do PBUFAF estabelecem que o emprego de arma letal é recurso de última ratio estritamente vinculado à proteção da vida humana contra ameaça iminente."),

  me("dh-b5-014", TAXONOMIA.assuntos.geracoes_dh,
    "Conforme o Protocolo de Istambul (Manual para a Investigação e Documentação Eficazes da Tortura e Outras Penas ou Tratamentos Cruéis, Desumanos ou Degradantes da ONU), assinale a afirmativa correta.",
    "A",
    [
      ["A", "Constitui diretriz internacional obrigatória para a avaliação médico-legal e psicológica de vítimas de tortura, exigindo exames periciais minuciosos, documentação fotográfica padronizada de lesões físicas e avaliação do sofrimento psíquico, garantindo a confidencialidade e a segurança do periciado.", "Correta. O Protocolo de Istambul é o padrão ouro global para perícia e documentação de tortura."],
      ["B", "Autoriza os agentes policiais a interrogarem suspeitos sob coação psicológica moderada para obtenção de confissão.", "Incorreta. O Protocolo veda peremptoriamente qualquer forma de coação física ou moral."],
      ["C", "Dispensa a realização de laudos periciais quando a autoridade policial afirmar a inexistência de agressão.", "Incorreta. A perícia médica é indispensável e autônoma."],
      ["D", "Determina que os exames de corpo de delito em presos custodiados sejam realizados na presença do policial condutor do flagrante.", "Incorreta. O Protocolo exige que o exame médico ocorra em ambiente de estrita privacidade sem a presença dos policiais custodiantes para garantir a liberdade da vítima."],
      ["E", "Aplica-se unicamente a prisioneiros de guerra em conflitos internacionais armados.", "Incorreta. Aplica-se a qualquer pessoa sob custódia policial ou estatal em tempos de paz."]
    ],
    "O Protocolo de Istambul é o instrumento técnico fundamental da ONU para a detecção, documentação e responsabilização médica e jurídica dos atos de tortura e maus-tratos praticados por agentes estatais."),

  ce("dh-b5-015", TAXONOMIA.assuntos.geracoes_dh,
    "O Protocolo de Minnesota da ONU (Manual sobre a Prevenção e Investigação Eficaz de Execuções Extralegais, Arbitrárias e Sumárias) estabelece padrões científicos para a investigação de mortes potencialmente ilícitas ocorridas sob custódia estatal ou causadas por agentes públicos, exigindo a preservação rigorosa do local dos fatos, cadeia de custódia balística, necropsia forense independente e participação informada dos familiares da vítima no processo.",
    true,
    "O Protocolo de Minnesota (revisado em 2016 pela ONU) orienta investigações criminais e periciais de mortes provocadas por agentes do Estado ou ocorridas em estabelecimentos prisionais."),

  ce("dh-b5-016", TAXONOMIA.assuntos.geracoes_dh,
    "As Regras Mínimas das Nações Unidas para o Tratamento de Presos (Regras de Nelson Mandela) estabelecem que o isolamento celular indefinido ou prolongado (por período superior a quinze dias consecutivos) é terminantemente proibido por constituir tratamento cruel, desumano ou degradante.",
    true,
    "As Regras 43 e 44 das Regras de Nelson Mandela proíbem expressamente o isolamento celular indefinido ou com duração superior a 15 dias consecutivos."),

  me("dh-b5-017", TAXONOMIA.assuntos.geracoes_dh,
    "A respeito das Regras de Bangkok (Regras das Nações Unidas para o Tratamento de Mulheres Presas e Medidas Não Privativas de Liberdade para Mulheres Infratoras), assinale a afirmativa correta.",
    "B",
    [
      ["A", "Determinam a separação de mães e bebês nas primeiras horas após o parto em todos os estabelecimentos prisionais.", "Incorreta. As regras protegem o vínculo materno-infantil e o aleitamento."],
      ["B", "Recomendam que as autoridades priorizem o uso de medidas cautelares e penas não privativas de liberdade para mulheres gestantes, lactantes ou que tenham filhos menores ou com deficiência sob seus cuidados, considerando os impactos sociais do encarceramento materno.", "Correta. Regras 57 a 66 das Regras de Bangkok (incorporadas na legislação brasileira pelo art. 318-A do CPP e HC 143.641/STF)."],
      ["C", "Autorizam a revista íntima invasiva rotineira de visitantes femininas sem qualquer fundamentação individualizada.", "Incorreta. As regras vedam revistas íntimas degradantes e exigem métodos não invasivos."],
      ["D", "Extinguem as garantias de atendimento médico ginecológico e pré-natal no sistema penitenciário feminino.", "Incorreta. As regras reforçam o dever de assistência integral à saúde da mulher."],
      ["E", "Preveem que as mulheres presas cumpram pena exclusivamente em celas conjuntas com apenados do sexo masculino.", "Incorreta. A separação estrita por sexo é garantia inafastável."]
    ],
    "As Regras de Bangkok (Resolução 65/229 da ONU de 2010) estabelecem padrões específicos para responder às necessidades de gênero no sistema de justiça penal, incentivando medidas alternativas à prisão para mães e gestantes."),

  ce("dh-b5-018", TAXONOMIA.assuntos.cadh,
    "No Caso Márcia Barbosa de Souza e outras vs. Brasil (2021), a Corte Interamericana de Direitos Humanos condenou o Estado brasileiro pela utilização indevida da imunidade parlamentar processual como mecanismo de blindagem e impunidade no homicídio de uma mulher jovem, determinando a capacitação obrigatória dos agentes de polícia e do Poder Judiciário em perspectiva de gênero para a investigação de feminicídios.",
    true,
    "No Caso Márcia Barbosa, a Corte IDH reconheceu a omissão e a lentidão estatal gerada por imunidade parlamentar como violência institucional de gênero, ordenando reformas procedimentais e treinamentos policiais em investigações de crimes contra a mulher.")
];
