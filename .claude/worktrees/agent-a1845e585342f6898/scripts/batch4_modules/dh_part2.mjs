import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.direitos_humanos;
const aDudh = TAXONOMIA.assuntos.dudh;
const aCadh = TAXONOMIA.assuntos.cadh;
const aGeracoes = TAXONOMIA.assuntos.geracoes_dh;

export const dhPart2 = [
  // 19
  {
    idSlug: "dh-l4-19",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No emblemático Caso Gomes Lund e outros ('Guerrilha do Araguaia') vs. Brasil, a Corte Interamericana de Direitos Humanos sentenciou que as disposições da Lei de Anistia brasileira que impedem a investigação e sanção de graves violações de direitos humanos são desprovidas de efeitos jurídicos e incompatíveis com a CADH.",
    explicacao: "GABARITO: CERTO. A Corte IDH firmou jurisprudência categórica no Caso Gomes Lund de que leis de autoanistia ou anistias amplas para graves violações de direitos humanos (desaparecimentos forçados, tortura, execuções sumárias) violam a CADH e não possuem validade jurídica perante o direito internacional.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 20
  {
    idSlug: "dh-l4-20",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No Caso Favela Nova Brasília vs. Brasil, a Corte Interamericana de Direitos Humanos estabeleceu determinações expressas sobre a atuação das forças policiais e a investigação de mortes decorrentes de intervenção policial, destacando o dever de:",
    explicacao: "GABARITO: Letra A. Na sentença do Caso Favela Nova Brasília (2017), a Corte IDH determinou que as investigações sobre mortes, tortura ou violência sexual cometidas por policiais devem ser conduzidas por órgãos autônomos e independentes, com protocolo rigoroso de perícia e participação da família das vítimas.",
    alternativas: [
      { letra: "A", texto: "Conduzir investigações autônomas e independentes das autoridades policiais envolvidas, garantindo a preservação imediata da cena do crime.", correta: true },
      { letra: "B", texto: "Transferir sumariamente a competência dos inquéritos para os tribunais militares estaduais.", correta: false },
      { letra: "C", texto: "Conceder anistia administrativa prévia a agentes que atuem em operações sob estado de defesa.", correta: false },
      { letra: "D", texto: "Limitar o acesso dos familiares da vítima aos autos periciais para preservar a estratégia de defesa.", correta: false },
      { letra: "E", texto: "Encerrar de ofício os inquéritos que ultrapassarem dois anos sem conclusão de laudos.", correta: false }
    ]
  },
  // 21
  {
    idSlug: "dh-l4-21",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "As 'Regras Mínimas das Nações Unidas para o Tratamento de Presos' (Regras de Nelson Mandela) preconizam expressamente que o uso de instrumentos de contenção física (como algemas ou correntes) nunca deve ser aplicado como sanção disciplinar.",
    explicacao: "GABARITO: CERTO. A Regra 47 das Regras de Mandela veda expressamente o uso de correntes, ferros ou outros instrumentos de restrição mecânica degradantes e proíbe a aplicação de qualquer instrumento de restrição como castigo disciplinar.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 22
  {
    idSlug: "dh-l4-22",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A Convenção Interamericana para Prevenir, Punir e Erradicar a Violência contra a Mulher (Convenção de Belém do Pará - Decreto nº 1.973/1996) define a violência contra a mulher como qualquer ação ou conduta, baseada no gênero, que cause morte, dano ou sofrimento físico, sexual ou psicológico à mulher, tanto no âmbito:",
    explicacao: "GABARITO: Letra B. O art. 1º da Convenção de Belém do Pará preconiza que a violência de gênero abrange tanto o espaço público quanto o espaço privado (doméstico, comunitário ou perpetrado/tolerado pelo Estado).",
    alternativas: [
      { letra: "A", texto: "Exclusivamente matrimonial e sob coabitação formal.", correta: false },
      { letra: "B", texto: "Público quanto no privado.", correta: true },
      { letra: "C", texto: "Estritamente laboral em empresas de direito privado.", correta: false },
      { letra: "D", texto: "Patrimonial em disputas de inventário e sucessões.", correta: false },
      { letra: "E", texto: "Penitenciário entre pessoas sob custódia.", correta: false }
    ]
  },
  // 23
  {
    idSlug: "dh-l4-23",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com o art. 27 da Convenção Americana sobre Direitos Humanos, o Estado Parte não pode suspender, mesmo em tempo de guerra ou de outro perigo público que ameace a independência ou segurança do Estado, o direito à vida, o direito à integridade pessoal e a proibição da escravidão e servidão.",
    explicacao: "GABARITO: CERTO. O art. 27, item 2, da CADH estabelece o núcleo inderrogável de direitos (não passíveis de suspensão sob nenhum pretexto emergencial): direito à personalidade jurídica, à vida, à integridade pessoal, proibição de escravidão/servidão, princípio da legalidade e retroatividade penal benéfica, liberdade de consciência e religião, proteção da família, direito ao nome, direitos da criança, direito à nacionalidade, direitos políticos e as garantias judiciais indispensáveis à proteção de tais direitos.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 24
  {
    idSlug: "dh-l4-24",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O princípio da prevalência dos direitos humanos nas relações internacionais da República Federativa do Brasil está consagrado expressamente no art. 4º, inciso II, da Constituição Federal de 1988, implicando:",
    explicacao: "GABARITO: Letra C. A prevalência dos direitos humanos é princípio orientador das relações internacionais do Brasil (art. 4º, II, da CF/88), impondo que a soberania estatal se subordina axiológica e juridicamente à proteção imperativa da dignidade da pessoa humana no plano global.",
    alternativas: [
      { letra: "A", texto: "A supremacia automática de ordens executivas estrangeiras sobre a legislação tributária interna.", correta: false },
      { letra: "B", texto: "A renúncia incondicional à soberania em face de qualquer organismo internacional privado.", correta: false },
      { letra: "C", texto: "A diretriz de que a proteção da pessoa humana orienta a política externa e a celebração de acordos e tratados pelo Estado brasileiro.", correta: true },
      { letra: "D", texto: "A imunidade absoluta de jurisdição diplomática mesmo em casos de crimes contra a humanidade.", correta: false },
      { letra: "E", texto: "A extinção automática de tratados bilaterais que não contem com ratificação unânime na ONU.", correta: false }
    ]
  },
  // 25
  {
    idSlug: "dh-l4-25",
    disciplina_id: dId,
    assunto_id: aDudh,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Declaração Universal dos Direitos Humanos assegura expressamente a toda pessoa o direito de deixar qualquer país, inclusive o próprio, e a este regressar.",
    explicacao: "GABARITO: CERTO. O art. 13, item 2, da DUDH de 1948 estabelece: 'Todo ser humano tem o direito de deixar qualquer país, inclusive o próprio, e a este regressar'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 26
  {
    idSlug: "dh-l4-26",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No Caso Trabalhadores da Fazenda Brasil Verde vs. Brasil (2016), a Corte Interamericana de Direitos Humanos condenou o Estado brasileiro pela prática de:",
    explicacao: "GABARITO: Letra D. Trata-se do primeiro caso no qual a Corte IDH declarou a responsabilidade internacional de um Estado por violação do art. 6.1 da CADH em razão de trabalho forçado contemporâneo análogo à de escravo e servidão por dívida decorrente de discriminação estrutural.",
    alternativas: [
      { letra: "A", texto: "Despejo forçado de povos indígenas em áreas urbanas de preservação ambiental.", correta: false },
      { letra: "B", texto: "Execuções sumárias perpetradas por esquadrões da morte na região metropolitana.", correta: false },
      { letra: "C", texto: "Uso desproporcional de força em estabelecimentos prisionais de segurança máxima.", correta: false },
      { letra: "D", texto: "Trabalho escravo contemporâneo e tráfico de pessoas para fins de exploração laboral.", correta: true },
      { letra: "E", texto: "Violência obstétrica e esterilização compulsória em hospitais públicos.", correta: false }
    ]
  },
  // 27
  {
    idSlug: "dh-l4-27",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Convenção contra a Tortura e outros Tratamentos ou Penas Cruéis, Desumanos ou Degradantes (ONU/1984) estabelece que nenhuma circunstância excepcional, seja estado de guerra, instabilidade política interna ou qualquer outra emergência pública, pode ser invocada para justificar a tortura.",
    explicacao: "GABARITO: CERTO. O art. 2º, item 2, da Convenção da ONU contra a Tortura (Decreto nº 40/1991) preconiza o caráter absoluto e inderrogável da proibição da tortura (norma de jus cogens).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 28
  {
    idSlug: "dh-l4-28",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Convenção Americana sobre Direitos Humanos, no tocante às penas corporais e ao regime penitenciário, determina expressamente que:",
    explicacao: "GABARITO: Letra B. O art. 5º, item 6, da CADH estabelece de maneira cristalina que 'as penas privativas da liberdade devem ter por finalidade essencial a reforma e a readaptação social dos condenados'.",
    alternativas: [
      { letra: "A", texto: "Os processados e os condenados devem compartilhar as mesmas celas para otimizar os espaços carcerários.", correta: false },
      { letra: "B", texto: "As penas privativas de liberdade devem ter por finalidade essencial a reforma e a readaptação social dos condenados.", correta: true },
      { letra: "C", texto: "O trabalho forçado é admitido como punição complementar em infrações disciplinares carcerárias.", correta: false },
      { letra: "D", texto: "Os menores infratores podem ser recolhidos em estabelecimentos para adultos se acompanhados de monitor.", correta: false },
      { letra: "E", texto: "A incomunicabilidade do preso provisório pode ser estendida indefinidamente pela autoridade de segurança.", correta: false }
    ]
  },
  // 29
  {
    idSlug: "dh-l4-29",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "A indivisibilidade e a interdependência dos direitos humanos significam que a realização plena dos direitos civis e políticos é indissociável da fruição dos direitos econômicos, sociais e culturais.",
    explicacao: "GABARITO: CERTO. A Declaração e Programa de Ação de Viena (1993) consolidou a premissa de que todos os direitos humanos são universais, indivisíveis, interdependentes e inter-relacionados.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 30
  {
    idSlug: "dh-l4-30",
    disciplina_id: dId,
    assunto_id: aDudh,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Nos termos do artigo 1º da Declaração Universal dos Direitos Humanos (1948):",
    explicacao: "GABARITO: Letra A. O art. 1º da DUDH proclama: 'Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade'.",
    alternativas: [
      { letra: "A", texto: "Todos os seres humanos nascem livres e iguais em dignidade e em direitos.", correta: true },
      { letra: "B", texto: "A soberania dos Estados prevalece incondicionalmente sobre os direitos da pessoa.", correta: false },
      { letra: "C", texto: "A igualdade entre as pessoas depende de sua prévia filiação a associações comunitárias.", correta: false },
      { letra: "D", texto: "A propriedade privada coletiva constitui direito único e absoluto dos povos.", correta: false },
      { letra: "E", texto: "A liberdade de expressão pode ser suprimida por decreto administrativo sem recurso.", correta: false }
    ]
  },
  // 31
  {
    idSlug: "dh-l4-31",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A CADH assegura que o estrangeiro que se encontre legalmente no território de um Estado Parte só pode dele ser expulso em cumprimento de decisão adotada de acordo com a lei, sendo expressamente proibida a expulsão coletiva de estrangeiros.",
    explicacao: "GABARITO: CERTO. O art. 22, itens 6 e 9, da CADH estabelece as garantias de legalidade na expulsão individual de estrangeiros e veda de modo peremptório a expulsão coletiva de estrangeiros.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 32
  {
    idSlug: "dh-l4-32",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre a atuação da Comissão Interamericana de Direitos Humanos (CIDH), assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra C. Qualquer pessoa, grupo de pessoas ou entidade não governamental legalmente reconhecida em um ou mais Estados membros da OEA pode apresentar à CIDH petições contendo denúncias ou queixas de violação da CADH (art. 44 da CADH).",
    alternativas: [
      { letra: "A", texto: "Suas decisões jurisdicionais condenatórias têm força executiva penal imediata sobre agentes públicos.", correta: false },
      { letra: "B", texto: "Apenas chefes de Estado e de governo podem submeter queixas de violações de direitos fundamentais à CIDH.", correta: false },
      { letra: "C", texto: "Qualquer pessoa, grupo de pessoas ou entidade não governamental legalmente reconhecida pode apresentar petições à CIDH denunciando violações à Convenção.", correta: true },
      { letra: "D", texto: "A CIDH substitui os tribunais superiores nacionais em causas cíveis indenizatórias ordinárias.", correta: false },
      { letra: "E", texto: "A apresentação de petição perante a CIDH prescinde do prévio esgotamento dos recursos da jurisdição interna mesmo sem exceções válidas.", correta: false }
    ]
  },
  // 33
  {
    idSlug: "dh-l4-33",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O direito à paz, ao desenvolvimento econômico e social sustentável e a um meio ambiente ecologicamente equilibrado são exemplos típicos de direitos humanos de terceira dimensão (ou de solidariedade/fraternidade).",
    explicacao: "GABARITO: CERTO. Os direitos de terceira dimensão tutelam interesses difusos e coletivos pertencentes à humanidade como um todo, destacando-se a paz, o desenvolvimento sustentável, a autodeterminação dos povos e o meio ambiente.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 34
  {
    idSlug: "dh-l4-34",
    disciplina_id: dId,
    assunto_id: aGeracoes,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O 'Código de Conduta para os Funcionários Responsáveis pela Aplicação da Lei' (adotado pela Assembleia Geral da ONU na Resolução 34/169 de 1979) determina que os encarregados da aplicação da lei:",
    explicacao: "GABARITO: Letra B. O art. 3º do Código da ONU para Encarregados da Aplicação da Lei prescreve que os policiais só podem empregar a força quando estritamente necessária e na medida exigida para o cumprimento do seu dever, respeitando os princípios da proporcionalidade, moderação e necessidade.",
    alternativas: [
      { letra: "A", texto: "Podem aplicar sanções sumárias corporais em casos de flagrante delito com fuga.", correta: false },
      { letra: "B", texto: "Só podem empregar a força quando estritamente necessária e na medida exigida para o cumprimento do seu dever.", correta: true },
      { letra: "C", texto: "Devem omitir socorro médico a presos que tenham resistido à ordem legal de prisão.", correta: false },
      { letra: "D", texto: "Estão desobrigados de combater atos de corrupção praticados por colegas de equipe.", correta: false },
      { letra: "E", texto: "Podem divulgar irrestritamente imagens íntimas de suspeitos captadas em câmeras corporais.", correta: false }
    ]
  },
  // 35
  {
    idSlug: "dh-l4-35",
    disciplina_id: dId,
    assunto_id: aCadh,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "As sentenças proferidas pela Corte Interamericana de Direitos Humanos são definitivas, inapeláveis e vinculam o Estado condenado, que tem a obrigação jurídica internacional de cumprir integralmente as medidas de reparação, garantias de não repetição e indenizações fixadas.",
    explicacao: "GABARITO: CERTO. Nos termos dos artigos 67 e 68.1 da CADH, a sentença da Corte é definitiva e inapelável. Os Estados Partes na Convenção comprometem-se a cumprir a decisão da Corte em todo caso em que forem partes.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  }
];
