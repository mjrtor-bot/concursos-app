import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.direito_constitucional;
const aDirFundamentais = TAXONOMIA.assuntos.direitos_fundamentais;

export const constPart1 = [
  // 01
  {
    idSlug: "const-l4-01",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
    explicacao: "GABARITO: CERTO. A literalidade do art. 5º, XI, da Constituição Federal de 1988 estabelece as quatro hipóteses de ingresso domiciliar: flagrante delito (dia/noite), desastre (dia/noite), socorro (dia/noite) e determinação judicial (exclusivamente durante o dia).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 02
  {
    idSlug: "const-l4-02",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação à garantia da inviolabilidade das comunicações e do sigilo de dados (art. 5º, XII, da CF/88) e à jurisprudência do STF, assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra B. O art. 5º, XII, da CF/88 assegura o sigilo das comunicações, ressalvando a interceptação telefônica 'por ordem judicial, nas hipóteses e na forma que a lei estabelecer para fins de investigação criminal ou instrução processual penal'. O STF firmou que o acesso aos dados armazenados em aparelhos de telefone celular apreendidos (mensagens de WhatsApp, fotos) exige autorização judicial prévia, ressalvada a hipótese de consentimento voluntário do titular.",
    alternativas: [
      { letra: "A", texto: "A autoridade policial pode acessar diretamente as conversas arquivadas em aplicativos de mensagens de celular apreendido em flagrante sem autorização judicial.", correta: false },
      { letra: "B", texto: "O sigilo das comunicações telefônicas pode ser quebrado por ordem judicial fundamentada exclusivamente para fins de investigação criminal ou instrução processual penal.", correta: true },
      { letra: "C", texto: "As CPIs estaduais podem determinar diretamente a interceptação telefônica sem prévia chancela do Judiciário.", correta: false },
      { letra: "D", texto: "A interceptação de correspondência epistolar é absolutamente vedada em qualquer hipótese, inclusive em presídios de segurança máxima.", correta: false },
      { letra: "E", texto: "O sigilo bancário é direito absoluto insuscetível de transferência à administração tributária.", correta: false }
    ]
  },
  // 03
  {
    idSlug: "const-l4-03",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Conceder-se-á mandado de segurança para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público.",
    explicacao: "GABARITO: CERTO. Trata-se da exata redação do art. 5º, LXIX, da Constituição Federal de 1988, que consagra a natureza subsidiária e residual do Mandado de Segurança em relação ao HC (liberdade de locomoção) e ao HD (acesso e retificação de informações pessoais).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 04
  {
    idSlug: "const-l4-04",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "De acordo com o art. 5º da Constituição Federal de 1988, a prática do racismo constitui crime:",
    explicacao: "GABARITO: Letra A. O art. 5º, XLII, da CF/88 determina: 'a prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei'. O STF no julgamento do HC 82.424 (Caso Ellwanger) e no MI 4.733 equiparou a injúria racial e a homofobia/transfobia às diretrizes do racismo.",
    alternativas: [
      { letra: "A", texto: "Inafiançável e imprescritível, sujeito à pena de reclusão.", correta: true },
      { letra: "B", texto: "Afiançável, mas insuscetível de graça ou anistia.", correta: false },
      { letra: "C", texto: "Prescritível em 5 anos, sujeito à pena de detenção.", correta: false },
      { letra: "D", texto: "Inafiançável, porém sujeito à prescrição ordinária do Código Penal.", correta: false },
      { letra: "E", texto: "De menor potencial ofensivo processado no JECRIM.", correta: false }
    ]
  },
  // 05
  {
    idSlug: "const-l4-05",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nenhum brasileiro será extraditado, salvo o naturalizado, em caso de crime comum, praticado antes da naturalização, ou de comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins, na forma da lei.",
    explicacao: "GABARITO: CERTO. O art. 5º, LI, da CF/88 consagra o princípio da não extradição do brasileiro nato (garantia absoluta). Já o brasileiro naturalizado pode ser extraditado em 2 hipóteses: 1) crime comum cometido antes da naturalização; 2) tráfico ilícito de entorpecentes a qualquer tempo (antes ou depois da naturalização).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 06
  {
    idSlug: "const-l4-06",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Quanto à ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV, da CF/88), a Constituição estabelece que constitui crime:",
    explicacao: "GABARITO: Letra C. O art. 5º, XLIV, da CF/88 determina: 'constitui crime inafiançável e imprescritível a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático'. São as duas únicas hipóteses constitucionais de imprescritibilidade: Racismo (XLII) e Ação de Grupos Armados (XLIV).",
    alternativas: [
      { letra: "A", texto: "Afiançável pelo delegado de polícia com arbitramento de caução.", correta: false },
      { letra: "B", texto: "Suscetível de anistia concedida por decreto estadual.", correta: false },
      { letra: "C", texto: "Inafiançável e imprescritível.", correta: true },
      { letra: "D", texto: "Prescritível no prazo máximo de 20 anos contados da cessação da atividade.", correta: false },
      { letra: "E", texto: "Privativo da jurisdição militar da União.", correta: false }
    ]
  },
  // 07
  {
    idSlug: "const-l4-07",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "São gratuitas as ações de habeas corpus e habeas data, e, na forma da lei, os atos necessários ao exercício da cidadania.",
    explicacao: "GABARITO: CERTO. É a disposição expressa do art. 5º, LXXVII, da Constituição Federal de 1988, que garante a gratuidade universal e incondicionada das ações de habeas corpus e habeas data.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 08
  {
    idSlug: "const-l4-08",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Conforme a Constituição Federal de 1988, conceder-se-á mandado de injunção sempre que:",
    explicacao: "GABARITO: Letra B. O art. 5º, LXXI, da CF/88 prevê o Mandado de Injunção: 'conceder-se-á mandado de injunção sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania'.",
    alternativas: [
      { letra: "A", texto: "Alguém sofrer violência ou coação em sua liberdade de locomoção por ilegalidade.", correta: false },
      { letra: "B", texto: "A falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania.", correta: true },
      { letra: "C", texto: "Houver necessidade de anular ato lesivo ao patrimônio público por qualquer cidadão.", correta: false },
      { letra: "D", texto: "O titular de dados pessoais desejar retificar informações em banco de dados privado.", correta: false },
      { letra: "E", texto: "O agente público for acusado de crime de responsabilidade perante o Senado.", correta: false }
    ]
  },
  // 09
  {
    idSlug: "const-l4-09",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O civilmente identificado não será submetido a identificação criminal, salvo nas hipóteses previstas em lei.",
    explicacao: "GABARITO: CERTO. O art. 5º, LVIII, da CF/88 estabelece a regra da não identificação criminal do civilmente identificado, remetendo à lei ordinária (Lei nº 12.037/2009) a fixação das hipóteses excepcionais (documento rasurado, fundadas dúvidas sobre autenticidade, constatação de outros nomes, etc.).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 10
  {
    idSlug: "const-l4-10",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito dos direitos e garantias fundamentais e da teoria geral dos direitos humanos na CF/88, assinale a opção correta:",
    explicacao: "GABARITO: Letra D. O art. 5º, § 3º, da CF/88 (acrescentado pela EC 45/2004) determina que 'os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes às emendas constitucionais'. Os tratados sobre direitos humanos aprovados pelo rito ordinário possuem status supralegal (RE 466.343/SP).",
    alternativas: [
      { letra: "A", texto: "Os direitos fundamentais previstos no art. 5º são absolutos e não admitem relativização em estado de defesa.", correta: false },
      { letra: "B", texto: "Os tratados internacionais sobre direitos humanos são todos equivalentes a leis ordinárias federais.", correta: false },
      { letra: "C", texto: "As pessoas jurídicas não titularizam direitos fundamentais sob nenhuma hipótese.", correta: false },
      { letra: "D", texto: "Os tratados e convenções internacionais sobre direitos humanos aprovados em dois turnos por 3/5 dos membros da Câmara e do Senado equivalem a emendas constitucionais.", correta: true },
      { letra: "E", texto: "As normas definidoras dos direitos e garantias fundamentais possuem aplicação exclusivamente programática.", correta: false }
    ]
  },
  // 11
  {
    idSlug: "const-l4-11",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, desde que não frustrem outra reunião anteriormente convocada para o mesmo local, sendo apenas exigido prévio aviso à autoridade competente.",
    explicacao: "GABARITO: CERTO. Trata-se do teor do art. 5º, XVI, da CF/88. O STF fixou a tese no Tema 855 que o prévio aviso à autoridade competente não é condição indispensável para a realização da manifestação, bastando que haja ampla divulgação prévia por meios públicos.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 12
  {
    idSlug: "const-l4-12",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A criação de associações e, na forma da lei, a de cooperativas independem de autorização, sendo vedada a interferência estatal em seu funcionamento. A dissolução compulsória de uma associação exige:",
    explicacao: "GABARITO: Letra A. O art. 5º, XIX, da CF/88 estabelece: 'as associações só poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial, exigindo-se, no primeiro caso, o trânsito em julgado'.",
    alternativas: [
      { letra: "A", texto: "Decisão judicial transitada em julgado.", correta: true },
      { letra: "B", texto: "Portaria administrativa do Secretário de Segurança Pública.", correta: false },
      { letra: "C", texto: "Decreto simples do Chefe do Poder Executivo estadual.", correta: false },
      { letra: "D", texto: "Decisão liminar em sede de inquérito policial.", correta: false },
      { letra: "E", texto: "Parecer desfavorável do Ministério Público do Trabalho.", correta: false }
    ]
  },
  // 13
  {
    idSlug: "const-l4-13",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Ninguém será privado de direitos por motivo de crença religiosa ou de convicção filosófica ou política, salvo se as invocar para eximir-se de obrigação legal a todos imposta e recusar-se a cumprir prestação alternativa, fixada em lei.",
    explicacao: "GABARITO: CERTO. Trata-se da escusa de consciência prevista no art. 5º, VIII, da CF/88. A perda ou suspensão dos direitos políticos só ocorrerá se o indivíduo recusar tanto a obrigação geral quanto a prestação alternativa fixada em lei (art. 15, IV, da CF/88).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 14
  {
    idSlug: "const-l4-14",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Qualquer cidadão é parte legítima para propor:",
    explicacao: "GABARITO: Letra B. O art. 5º, LXXIII, da CF/88 prescreve: 'qualquer cidadão é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural...'.",
    alternativas: [
      { letra: "A", texto: "Ação direta de inconstitucionalidade genérica.", correta: false },
      { letra: "B", texto: "Ação popular que vise a anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural.", correta: true },
      { letra: "C", texto: "Arguição de descumprimento de preceito fundamental diretamente perante o STF.", correta: false },
      { letra: "D", texto: "Reclamação constitucional sem assistência de advogado.", correta: false },
      { letra: "E", texto: "Intervenção federal em Município que descumprir ordem judicial.", correta: false }
    ]
  },
  // 15
  {
    idSlug: "const-l4-15",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "São inadmissíveis, no processo, as provas obtidas por meios ilícitos, aplicando-se a teoria dos frutos da árvore envenenada para contaminar também as provas derivadas, salvo quando não evidenciado o nexo de causalidade ou quando as derivadas puderem ser obtidas por uma fonte independente.",
    explicacao: "GABARITO: CERTO. O art. 5º, LVI, da CF/88 veda as provas ilícitas e o art. 157, §§ 1º e 2º, do CPP positiva as exceções da fonte independente e da descoberta inevitável em conformidade com o STF.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 16
  {
    idSlug: "const-l4-16",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito das penas constitucionalmente vedadas pela Carta Magna de 1988 (art. 5º, XLVII), assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra A. O art. 5º, XLVII, da CF/88 prescreve que 'não haverá penas: a) de morte, salvo em caso de guerra declarada, nos termos do art. 84, XIX; b) de caráter perpétuo; c) de trabalhos forçados; d) de banimento; e) cruéis'.",
    alternativas: [
      { letra: "A", texto: "A pena de morte é admitida no Brasil excepcionalmente em caso de guerra externa formalmente declarada.", correta: true },
      { letra: "B", texto: "A pena de caráter perpétuo é admitida para os crimes hediondos com resultado morte.", correta: false },
      { letra: "C", texto: "A pena de banimento pode ser imposta a estrangeiros em situação migratória irregular.", correta: false },
      { letra: "D", texto: "O trabalho forçado é admitido como sanção disciplinar em presídios estaduais.", correta: false },
      { letra: "E", texto: "As penas cruéis são toleradas nos casos de terrorismo biológico.", correta: false }
    ]
  },
  // 17
  {
    idSlug: "const-l4-17",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O habeas data é a garantia constitucional adequada para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público, bem como para a retificação de dados ou anotação nos assentamentos do interessado, exigindo a prévia recusa da via administrativa como condição da ação.",
    explicacao: "GABARITO: CERTO. O art. 5º, LXXII, da CF/88 e a Lei nº 9.507/1997 regulam o Habeas Data. A Súmula 2 do STJ estabelece: 'Não cabe o habeas data (CF, art. 5º, LXXII, a) se não houve recusa de informações por parte da autoridade administrativa'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 18
  {
    idSlug: "const-l4-18",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Conforme o art. 5º, XLV, da Constituição Federal, 'nenhuma pena passará da pessoa do condenado, podendo a obrigação de reparar o dano e a decretação do perdimento de bens ser, nos termos da lei, estendidas aos sucessores e contra eles executadas, até o limite do valor do patrimônio transferido'. Esse enunciado consagra o princípio da:",
    explicacao: "GABARITO: Letra B. Trata-se do princípio da intranscendência da pena (ou princípio da pessoalidade/personalidade da pena), segundo o qual a sanção penal é personalíssima e não pode ultrapassar o autor do delito, alcançando os herdeiros apenas os efeitos civis e patrimoniais da condenação até as forças da herança.",
    alternativas: [
      { letra: "A", texto: "Proporcionalidade em sentido estrito.", correta: false },
      { letra: "B", texto: "Intranscendência ou pessoalidade da pena.", correta: true },
      { letra: "C", texto: "Culpabilidade por vulnerabilidade.", correta: false },
      { letra: "D", texto: "Legalidade estrita e reserva legal.", correta: false },
      { letra: "E", texto: "Inafastabilidade do controle jurisdicional.", correta: false }
    ]
  },
  // 19
  {
    idSlug: "const-l4-19",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A presunção de não culpabilidade (art. 5º, LVII, da CF/88) impede a execução provisória da pena antes do trânsito em julgado da sentença condenatória, conforme tese vinculante firmada pelo STF nas ADCs 43, 44 e 54.",
    explicacao: "GABARITO: CERTO. O STF, no julgamento conjunto das ADCs 43, 44 e 54, reafirmou a constitucionalidade do art. 283 do CPP à luz do art. 5º, LVII, da CF/88 ('ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória'), assentando que o cumprimento da pena só pode ter início após o trânsito em julgado, ressalvadas as prisões de natureza estritamente cautelar.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 20
  {
    idSlug: "const-l4-20",
    disciplina_id: dId,
    assunto_id: aDirFundamentais,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No Tribunal do Júri (art. 5º, XXXVIII, da CF/88), são assegurados expressamente os seguintes princípios constitucionais:",
    explicacao: "GABARITO: Letra E. O art. 5º, XXXVIII, da CF/88 reconhece a instituição do júri, com a organização que lhe der a lei, assegurados: a) a plenitude de defesa; b) o sigilo das votações; c) a soberania dos veredictos; d) a competência para o julgamento dos crimes dolosos contra a vida.",
    alternativas: [
      { letra: "A", texto: "A publicidade absoluta dos votos dos jurados e a ampla defesa.", correta: false },
      { letra: "B", texto: "A competência privativa para crimes contra o patrimônio público.", correta: false },
      { letra: "C", texto: "A possibilidade de o juiz togado reformar diretamente o veredicto absolutório.", correta: false },
      { letra: "D", texto: "A defesa técnica dispensável e o livre convencimento imotivado da acusação.", correta: false },
      { letra: "E", texto: "A plenitude de defesa, o sigilo das votações, a soberania dos veredictos e a competência para o julgamento dos crimes dolosos contra a vida.", correta: true }
    ]
  }
];
