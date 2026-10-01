import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.direitos_humanos;
const aDudh = TAXONOMIA.assuntos.dudh;
const aCadh = TAXONOMIA.assuntos.cadh;
const aGeracoes = TAXONOMIA.assuntos.geracoes_dh;

export const dhPart1 = [
  // 01
  {
    idSlug: "dh-l4-01",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Os tratados e convenções internacionais sobre direitos humanos que forem aprovados em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes às emendas constitucionais, nos termos do art. 5º, § 3º, da Constituição Federal.",
    explicacao: "GABARITO: CERTO. Trata-se da literalidade do art. 5º, § 3º, da CF/88, introduzido pela Emenda Constitucional nº 45/2004. O rito especial bicameral (dois turnos em cada casa) com quórum qualificado de 3/5 confere aos tratados de direitos humanos equivalência de emenda constitucional.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 02
  {
    idSlug: "dh-l4-02",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Segundo a firme jurisprudência do Supremo Tribunal Federal (RE 466.343/SP), os tratados internacionais sobre direitos humanos ratificados pelo Brasil pelo rito ordinário (sem o quórum qualificado do art. 5º, § 3º, da CF/88) possuem status normativo:",
    explicacao: "GABARITO: Letra B. Conforme consagrado pelo STF no julgamento do RE 466.343/SP, os tratados de direitos humanos celebrados pelo rito ordinário possuem status 'supralegal': situam-se abaixo da Constituição Federal, porém acima de toda a legislação ordinária infraconstitucional, exercendo efeito paralisante sobre normas contrárias.",
    alternativas: [
      { letra: "A", texto: "Constitucional originário.", correta: false },
      { letra: "B", texto: "Supralegal.", correta: true },
      { letra: "C", texto: "Estritamente de lei ordinária.", correta: false },
      { letra: "D", texto: "Infraconstitucional subordinado a atos regulamentares.", correta: false },
      { letra: "E", texto: "De lei complementar federal.", correta: false }
    ]
  },
  // 03
  {
    idSlug: "dh-l4-03",
    disciplina_id: dId,
    assunto_id: aDudh,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Declaração Universal dos Direitos Humanos (DUDH/1948), adotada pela Assembleia Geral da ONU sob a forma de Resolução nº 217 A (III), consagrou expressamente que toda pessoa tem direito a um padrão de vida capaz de assegurar a si e a sua família saúde, bem-estar, alimentação, vestuário, habitação, cuidados médicos e serviços sociais necessários.",
    explicacao: "GABARITO: CERTO. O art. 25, item 1, da DUDH de 1948 consagra expressamente o direito a um nível de vida adequado, contemplando saúde, bem-estar, alimentação, vestuário, habitação e assistência médica.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 04
  {
    idSlug: "dh-l4-04",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos da Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica - Decreto nº 678/1992), a prisão civil por dívida é expressamente admitida apenas na hipótese de:",
    explicacao: "GABARITO: Letra A. O art. 7º, item 7, da CADH estabelece que ninguém deve ser detido por dívidas, com a única exceção de mandados de autoridade judicial competente expedidos por inadimplemento voluntário e inescusável de obrigação alimentar (o que ensejou a Súmula Vinculante 25 do STF, declarando ilícita a prisão do depositário infiel).",
    alternativas: [
      { letra: "A", texto: "Inadimplemento de obrigação alimentar.", correta: true },
      { letra: "B", texto: "Depositário infiel em execuções fiscais.", correta: false },
      { letra: "C", texto: "Inadimplemento de tributos aduaneiros federais.", correta: false },
      { letra: "D", texto: "Descumprimento de obrigações contratuais bancárias.", correta: false },
      { letra: "E", texto: "Fraude à execução em títulos de crédito extrajudiciais.", correta: false }
    ]
  },
  // 05
  {
    idSlug: "dh-l4-05",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O princípio da não vedação do retrocesso (efeito 'cliquet' ou proibição de retrocesso social) impõe que os direitos econômicos, sociais e culturais já consolidados e incorporados à ordem jurídica não podem ser arbitrariamente suprimidos ou fragilizados pelo legislador infraconstitucional sem medidas compensatórias adequadas.",
    explicacao: "GABARITO: CERTO. A proibição do retrocesso (efeito cliquet) é um princípio basilar dos Direitos Humanos e do Direito Constitucional, vedando que o Estado reduza ou esvazie o grau de proteção e fruição de direitos fundamentais e sociais já atingido.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 06
  {
    idSlug: "dh-l4-06",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Na teoria das dimensões (gerações) dos direitos humanos formulada por Karel Vasak, os direitos civis e políticos, centrados na liberdade individual e no dever de abstenção estatal (status negativo), correspondem aos direitos de:",
    explicacao: "GABARITO: Letra A. Os direitos de primeira dimensão (liberdade) são os direitos civis e políticos, marcados pela abstenção do Estado (prestações negativas). Os de segunda dimensão correspondem à igualdade (direitos sociais, econômicos e culturais, exigindo atuações estatais positivas). Os de terceira dimensão referem-se à fraternidade/solidariedade (meio ambiente, paz, patrimônio comum da humanidade).",
    alternativas: [
      { letra: "A", texto: "Primeira dimensão.", correta: true },
      { letra: "B", texto: "Segunda dimensão.", correta: false },
      { letra: "C", texto: "Terceira dimensão.", correta: false },
      { letra: "D", texto: "Quarta dimensão.", correta: false },
      { letra: "E", texto: "Quinta dimensão.", correta: false }
    ]
  },
  // 07
  {
    idSlug: "dh-l4-07",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Segundo a Convenção Americana sobre Direitos Humanos, toda pessoa acusada de delito tem direito a que se presuma sua inocência enquanto não for legalmente comprovada sua culpa.",
    explicacao: "GABARITO: CERTO. O art. 8º, item 2, da CADH estabelece de forma expressa que toda pessoa acusada de um delito tem direito a que se presuma a sua inocência enquanto não for legalmente comprovada a sua culpa.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 08
  {
    idSlug: "dh-l4-08",
    disciplina_id: dId,
    assunto_id: aDudh,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito da Declaração Universal dos Direitos Humanos de 1948, assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra C. A DUDH estabelece no art. 5º que 'Ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante'. Embora originariamente adotada como resolução da Assembleia Geral da ONU, adquiriu valor consuetudinário universal inderrogável.",
    alternativas: [
      { letra: "A", texto: "A DUDH admite expressamente a escravidão por dívida e a servidão em regimes de emergência.", correta: false },
      { letra: "B", texto: "O direito à liberdade de locomoção e residência não está previsto no texto da Declaração.", correta: false },
      { letra: "C", texto: "Ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.", correta: true },
      { letra: "D", texto: "A DUDH foi celebrada originariamente como um tratado com força executiva coercitiva imediata.", correta: false },
      { letra: "E", texto: "O asilo político é garantido pela DUDH mesmo em casos de perseguição estritamente motivada por crimes comuns.", correta: false }
    ]
  },
  // 09
  {
    idSlug: "dh-l4-09",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O princípio da universalidade dos direitos humanos postula que todos os seres humanos são titulares de direitos fundamentais, independentemente de nacionalidade, gênero, raça, religião ou condição socioeconômica.",
    explicacao: "GABARITO: CERTO. A universalidade consagra a extensão de todos os direitos humanos a toda e qualquer pessoa pelo simples fato de sua condição humana, rechaçando qualquer discriminação.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 10
  {
    idSlug: "dh-l4-10",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No Sistema Interamericano de Proteção dos Direitos Humanos, os dois órgãos competentes para conhecer dos assuntos relacionados com o cumprimento dos compromissos assumidos pelos Estados Partes na Convenção Americana são:",
    explicacao: "GABARITO: Letra B. Conforme o art. 33 da Convenção Americana sobre Direitos Humanos, os órgãos competentes são: a Comissão Interamericana de Direitos Humanos (CIDH) e a Corte Interamericana de Direitos Humanos (Corte IDH).",
    alternativas: [
      { letra: "A", texto: "O Conselho de Segurança e a Assembleia Geral da OEA.", correta: false },
      { letra: "B", texto: "A Comissão Interamericana de Direitos Humanos e a Corte Interamericana de Direitos Humanos.", correta: true },
      { letra: "C", texto: "O Tribunal Penal Internacional e o Comitê de Direitos Humanos de Genebra.", correta: false },
      { letra: "D", texto: "A Corte Internacional de Justiça e o Secretariado Geral da OEA.", correta: false },
      { letra: "E", texto: "O Conselho de Direitos Humanos e o Alto Comissariado das Nações Unidas.", correta: false }
    ]
  },
  // 11
  {
    idSlug: "dh-l4-11",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O controle de convencionalidade difuso pode ser exercido por qualquer juiz ou tribunal nacional, que deve analisar a compatibilidade dos atos normativos internos com os tratados e convenções de direitos humanos ratificados pelo Estado brasileiro.",
    explicacao: "GABARITO: CERTO. O controle de convencionalidade difuso é exercido por todos os magistrados e tribunais no julgamento de casos concretos, afastando a aplicação de leis internas incompatíveis com tratados internacionais de direitos humanos vigentes no país.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 12
  {
    idSlug: "dh-l4-12",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O chamado 'Incidente de Deslocamento de Competência' (IDC), instituído no art. 109, § 5º, da CF/88 pela EC nº 45/2004, autoriza a federalização de causas perante o Superior Tribunal de Justiça quando constatada:",
    explicacao: "GABARITO: Letra A. Nos termos do art. 109, § 5º, da CF/88, nas hipóteses de grave violação de direitos humanos, o Procurador-Geral da República, com a finalidade de assegurar o cumprimento de obrigações decorrentes de tratados internacionais de direitos humanos dos quais o Brasil seja parte, poderá suscitar perante o STJ o incidente de deslocamento de competência para a Justiça Federal.",
    alternativas: [
      { letra: "A", texto: "Grave violação de direitos humanos, a requerimento exclusivo do Procurador-Geral da República para a Justiça Federal.", correta: true },
      { letra: "B", texto: "Reiteração de crimes ambientais em rodovias estaduais, a requerimento do Advogado-Geral da União.", correta: false },
      { letra: "C", texto: "Crime de responsabilidade cometido por Governador de Estado perante o Supremo Tribunal Federal.", correta: false },
      { letra: "D", texto: "Descumprimento de prazos processuais por magistrados da Justiça do Trabalho.", correta: false },
      { letra: "E", texto: "Prisão arbitrária de parlamentar federal decretada por tribunal de alçada estadual.", correta: false }
    ]
  },
  // 13
  {
    idSlug: "dh-l4-13",
    disciplina_id: dId,
    assunto_id: aDudh,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Nos termos da Declaração Universal dos Direitos Humanos, todo ser humano tem direito à liberdade de pensamento, de consciência e de religião, incluindo o direito de mudar de religião ou crença e a liberdade de manifestá-la.",
    explicacao: "GABARITO: CERTO. Trata-se da redação explícita do art. 18 da DUDH de 1948, assegurando a liberdade de pensamento, consciência e religião individual ou coletivamente.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 14
  {
    idSlug: "dh-l4-14",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A característica dos direitos humanos que indica a impossibilidade de o titular dispor ou renunciar à sua própria dignidade e aos seus direitos fundamentais denomina-se:",
    explicacao: "GABARITO: Letra D. A irrenunciabilidade estabelece que os direitos humanos não podem ser objeto de renúncia voluntária pelo titular, pois a dignidade da pessoa humana é indisponível.",
    alternativas: [
      { letra: "A", texto: "Imprescritibilidade.", correta: false },
      { letra: "B", texto: "Inviolabilidade.", correta: false },
      { letra: "C", texto: "Inalienabilidade patrimonial.", correta: false },
      { letra: "D", texto: "Irrenunciabilidade.", correta: true },
      { letra: "E", texto: "Exauribilidade.", correta: false }
    ]
  },
  // 15
  {
    idSlug: "dh-l4-15",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Convenção Americana sobre Direitos Humanos assegura o direito de resposta ou retificação a toda pessoa atingida por informações inexatas ou ofensivas emitidas em seu prejuízo por meios de difusão legalmente regulamentados.",
    explicacao: "GABARITO: CERTO. O art. 14, item 1, da CADH estabelece que toda pessoa afetada por informações inexatas ou agravantes emitidas em seu prejuízo através de meios de difusão legalmente regulamentados tem direito a resposta ou retificação.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 16
  {
    idSlug: "dh-l4-16",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A característica que define que os direitos humanos não deixam de existir pelo decurso do tempo e não se extinguem pelo não uso é a:",
    explicacao: "GABARITO: Letra B. A imprescritibilidade significa que a exigibilidade e a titularidade dos direitos humanos não prescrevem pelo decurso do tempo.",
    alternativas: [
      { letra: "A", texto: "Inalienabilidade.", correta: false },
      { letra: "B", texto: "Imprescritibilidade.", correta: true },
      { letra: "C", texto: "Universalidade.", correta: false },
      { letra: "D", texto: "Indivisibilidade.", correta: false },
      { letra: "E", texto: "Complementaridade.", correta: false }
    ]
  },
  // 17
  {
    idSlug: "dh-l4-17",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Pessoas físicas ou grupos de particulares não possuem legitimidade ativa direta para demandar perante a Corte Interamericana de Direitos Humanos, cabendo a submissão do caso à Corte exclusivamente aos Estados Partes e à Comissão Interamericana.",
    explicacao: "GABARITO: CERTO. Nos termos do art. 61, item 1, da CADH, somente os Estados Partes e a Comissão Interamericana têm direito de submeter um caso à decisão da Corte IDH. Indivíduos têm legitimidade para peticionar perante a Comissão (art. 44).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 18
  {
    idSlug: "dh-l4-18",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O Tribunal Penal Internacional (TPI), com sede em Haia e instituído pelo Estatuto de Roma de 1998 (ao qual o Brasil aderiu conforme art. 5º, § 4º, da CF/88), possui competência complementar para julgar indivíduos pela prática dos seguintes crimes internacionais mais graves:",
    explicacao: "GABARITO: Letra A. O TPI tem jurisdição sobre crimes de genocídio, crimes contra a humanidade, crimes de guerra e crime de agressão (art. 5º do Estatuto de Roma). Seu princípio basilar é o da complementaridade à jurisdição penal nacional.",
    alternativas: [
      { letra: "A", texto: "Genocídio, crimes contra a humanidade, crimes de guerra e crime de agressão.", correta: true },
      { letra: "B", texto: "Tráfico ilícito de entorpecentes e lavagem de capitais transnacional exclusivamente.", correta: false },
      { letra: "C", texto: "Contrabando internacional e crimes cibernéticos em redes bancárias.", correta: false },
      { letra: "D", texto: "Corrupção de funcionários estrangeiros e cartel transfronteiriço.", correta: false },
      { letra: "E", texto: "Sonegação fiscal internacional e evasão de divisas de entes soberanos.", correta: false }
    ]
  }
];
