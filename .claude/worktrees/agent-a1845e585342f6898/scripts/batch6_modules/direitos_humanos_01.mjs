import { TAXONOMIA } from "./taxonomia.mjs";

export const direitosHumanos01Questoes = [
  // Q1 - CEBRASPE / PRF - PBUFAF da ONU: Princípios da Proporcionalidade e Meios Não Violentos
  {
    idSlug: "dh-001",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com os Princípios Básicos sobre o Uso da Força e Armas de Fogo pelos Encarregados da Aplicação da Lei (PBUFAF da ONU), o uso da força e de armas de fogo é medida excepcional. Assim, os agentes de segurança pública devem, na medida do possível, utilizar meios não violentos antes de recorrer ao emprego da força, atuando com moderação e proporcionalidade à gravidade da infração e ao objetivo legítimo a ser alcançado.",
    explicacao: "GABARITO: CERTO. Os Princípios 4 e 5 do PBUFAF (adotados no Oitavo Congresso da ONU sobre a Prevenção do Crime e o Tratamento dos Delinquentes, Havana, 1990) determinam expressamente que os encarregados da aplicação da lei devem utilizar, na medida do possível, meios não violentos antes de recorrer ao uso da força e de armas de fogo. Quando o uso da força for inevitável, devem atuar com moderação, proporcionalmente à gravidade da infração e ao objetivo legítimo, minimizando danos e lesões e preservando a vida humana.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q2 - FGV / PM - PBUFAF da ONU: Limites Estritos ao Disparo de Arma de Fogo contra Pessoa em Fuga
  {
    idSlug: "dh-002",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Durante uma operação policial em área urbana, uma guarnição militar se depara com um indivíduo em fuga que acabou de subtrair um celular sem violência física, correndo desarmado em direção a um beco e sem ameaçar diretamente a integridade de terceiros. Considerando as disposições dos Princípios Básicos sobre o Uso da Força e Armas de Fogo (PBUFAF da ONU - Princípio 9), assinale a alternativa que descreve a conduta internacionalmente padronizada e exigida dos policiais.",
    explicacao: "GABARITO: C. O Princípio 9 do PBUFAF estabelece que armas de fogo NÃO podem ser usadas contra pessoas, salvo em legítima defesa própria ou de outrem contra ameaça iminente de morte ou lesão grave, ou para evitar crime particularmente grave que envolva séria ameaça à vida, ou para efetuar a prisão de pessoa que represente tal perigo e resista, e somente quando meios menos extremos forem insuficientes. O simples furto sem violência ou grave ameaça à vida jamais autoriza disparo de arma de fogo letal.",
    alternativas: [
      { letra: "A", texto: "O emprego letal de arma de fogo é autorizado imediatamente para conter a evasão do criminoso, em face da consumação de delito grave contra o patrimônio coletivo.", correta: false },
      { letra: "B", texto: "Os policiais podem efetuar disparos de advertência em direção ao corpo do agente em fuga, visando intimidá-lo e garantir a pronta custódia.", correta: false },
      { letra: "C", texto: "Os policiais não devem utilizar arma de fogo contra o indivíduo em fuga, pois este se encontra desarmado e não representa ameaça iminente de morte ou lesão grave para os agentes ou terceiros.", correta: true },
      { letra: "D", texto: "O uso da arma de fogo é discricionário aos encarregados da aplicação da lei sempre que houver desobediência a uma ordem legal de parada.", correta: false },
      { letra: "E", texto: "A guarnição deve empregar força letal antecipada como medida dissuasória geral para preservar a ordem pública local.", correta: false }
    ]
  },
  // Q3 - CEBRASPE / GM - Código de Conduta da ONU: Dever de Servir à Comunidade e Dignidade Humana
  {
    idSlug: "dh-003",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Nos termos do Código de Conduta para os Encarregados da Aplicação da Lei (Resolução 34/169 da Assembleia Geral da ONU), os agentes de segurança pública devem cumprir a todo o momento o dever que a lei lhes impõe, servindo à comunidade e protegendo todas as pessoas contra atos ilegais, agindo com respeito e proteção à dignidade humana de qualquer indivíduo.",
    explicacao: "GABARITO: CERTO. O Artigo 1º do CCEAL estipula que 'Os encarregados da aplicação da lei devem cumprir em todo o momento o dever que a lei lhes impõe, servindo a comunidade e protegendo todas as pessoas contra actos ilegais, em conformidade com o elevado grau de responsabilidade que a sua profissão exige.' O Artigo 2º reforça que 'No cumprimento do seu dever, os encarregados da aplicação da lei devem respeitar e proteger a dignidade humana, manter e apoiar os direitos humanos de todas as pessoas.'",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q4 - VUNESP / PM - Código de Conduta da ONU: Vedação Absoluta à Tortura e Inadmissibilidade de Ordens Superiores
  {
    idSlug: "dh-004",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Sobre a vedação à tortura e outros tratamentos cruéis, desumanos ou degradantes no âmbito da atividade policial, o Artigo 5º do Código de Conduta para os Encarregados da Aplicação da Lei (CCEAL/ONU) estabelece expressamente que:",
    explicacao: "GABARITO: D. O Artigo 5º do CCEAL prescreve de modo taxativo: 'Nenhum encarregado da aplicação da lei pode infligir, instigar ou tolerar qualquer ato de tortura ou outro tratamento ou castigo cruel, desumano ou degradante, nem invocar ordens de superiores ou circunstâncias excepcionais, tais como estado de guerra ou ameaça à segurança nacional, como justificação para a tortura.' Trata-se de vedação absoluta de jus cogens que não admite derrogação.",
    alternativas: [
      { letra: "A", texto: "a tortura física ou psicológica é admitida caso haja autorização expressa de autoridade judiciária de plantão.", correta: false },
      { letra: "B", texto: "a ordem superior de comando militar constitui excludente de ilicitude automática para o agente executor da agressão.", correta: false },
      { letra: "C", texto: "o estado de emergência pública ou grave instabilidade política autoriza métodos coercitivos extraordinários durante interrogatórios.", correta: false },
      { letra: "D", texto: "nenhum agente pode infligir, instigar ou tolerar qualquer ato de tortura, sendo inadmissível invocar ordens superiores ou circunstâncias excepcionais como justificativa.", correta: true },
      { letra: "E", texto: "o agente policial que presenciar atos de tortura cometidos por superiores hierárquicos está dispensado do dever de oposição ou comunicação.", correta: false }
    ]
  },
  // Q5 - CEBRASPE / PRF - Código de Conduta da ONU: Garantia de Proteção à Saúde e Assistência Médica aos Custodiados
  {
    idSlug: "dh-005",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com o Código de Conduta para os Encarregados da Aplicação da Lei da ONU (Artigo 6º), recai sobre os policiais o dever positivo de assegurar a proteção integral da saúde das pessoas sob sua custódia, incumbindo-lhes tomar medidas imediatas para garantir assistência médica sempre que tal providência se fizer necessária.",
    explicacao: "GABARITO: CERTO. Artigo 6º do CCEAL da ONU: 'Os encarregados da aplicação da lei devem assegurar a plena proteção da saúde das pessoas sob sua custódia e, em particular, tomar medidas imediatas para prestar assistência médica sempre que tal seja necessário.' O Estado ostenta a condição de garante da integridade física e psíquica das pessoas privadas de liberdade.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q6 - IBFC / PM - DUDH 1948: Vedação a Prisões e Detenções Arbitrárias (Art. 9º)
  {
    idSlug: "dh-006",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.dudh_1948,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "A Declaração Universal dos Direitos Humanos (DUDH/1948) constitui marco basilar de proteção às liberdades públicas. Em seu Artigo 9º, a DUDH prescreve expressamente que:",
    explicacao: "GABARITO: A. O Artigo 9º da DUDH estabelece de forma categórica e literal: 'Ninguém será arbitrariamente preso, detido ou exilado.' Esse preceito assegura a garantia contra prisões ilegais, abusivas ou desprovidas de base legal e justa causa.",
    alternativas: [
      { letra: "A", texto: "Ninguém será arbitrariamente preso, detido ou exilado.", correta: true },
      { letra: "B", texto: "A prisão preventiva poderá ser decretada sumariamente pelo encarregado da polícia ostensiva sem controle judicial.", correta: false },
      { letra: "C", texto: "O mandado judicial de busca domiciliar é dispensável em qualquer crime punido com reclusão.", correta: false },
      { letra: "D", texto: "Todo indivíduo detido tem a obrigação de provar sua inocência perante o órgão acusador estatal.", correta: false },
      { letra: "E", texto: "As detenções policiais de averiguação sem justa causa são permitidas pelo período de dez dias.", correta: false }
    ]
  },
  // Q7 - CEBRASPE / PRF - DUDH 1948: Natureza Jurídica, Universalidade e Jus Cogens
  {
    idSlug: "dh-007",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.dudh_1948,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Declaração Universal dos Direitos Humanos de 1948, embora aprovada sob a forma de Resolução da Assembleia Geral da ONU e sem força coercitiva formal de tratado originário, consolidou-se como parâmetro ético-jurídico global, sendo amplamente reconhecida pela doutrina e tribunais internacionais como integrante do direito internacional consuetudinário e fonte de normas imperativas (jus cogens).",
    explicacao: "GABARITO: CERTO. Aprovada pela Resolução 217-A (III) da AGNU em 10 de dezembro de 1948, a DUDH nasceu formalmente como soft law. No entanto, com a prática reiterada e a convicção jurídica de sua obrigatoriedade (opinio juris) pelos Estados, consagrou-se na jurisprudência internacional como reflexo do direito costumeiro internacional e parâmetro universal inalienável.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q8 - FGV / PC - DUDH 1948 e STF: Inviolabilidade de Domicílio e Justa Causa (Art. 12 da DUDH / Tema 280 STF)
  {
    idSlug: "dh-008",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.dudh_1948,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante diligência policial, uma equipe de investigação pretende adentrar em um domicílio habitado sem consentimento do morador e sem mandado judicial, sob a simples alegação genérica de que a residência está situada em área com histórico de criminalidade. À luz do Artigo 12 da DUDH de 1948 e da jurisprudência vinculante do STF (Tema 280 da Repercussão Geral), assinale a opção correta:",
    explicacao: "GABARITO: B. O Art. 12 da DUDH proíbe intromissões arbitrárias na vida privada, família, domicílio ou correspondência. No direito brasileiro, o STF fixou no Tema 280 que a entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em crimes permanentes, quando amparada em fundadas razões (justa causa), devidamente justificadas a posteriori, que indiquem situação de flagrante delito no interior do imóvel. A mera suspeição geográfica ou preconceituosa gera ilicitude da prova.",
    alternativas: [
      { letra: "A", texto: "A diligência é lícita, pois a suspeição territorial de criminalidade supre a exigência constitucional de justa causa ou mandado judicial.", correta: false },
      { letra: "B", texto: "A invasão sem mandado e sem fundadas razões concretas de flagrante delito viola a inviolabilidade de domicílio e a vida privada, gerando a nulidade das provas colhidas.", correta: true },
      { letra: "C", texto: "A DUDH autoriza expressamente a busca domiciliar preventiva incondicionada para a preservação abstrata da ordem pública.", correta: false },
      { letra: "D", texto: "A autoridade policial pode dispensar mandado judicial caso o objetivo seja apreender objetos de interesse patrimonial.", correta: false },
      { letra: "E", texto: "O consentimento do morador pode ser presumido juridicamente se a porta da habitação estiver apenas encostada.", correta: false }
    ]
  },
  // Q9 - CEBRASPE / PRF - Pacto de San José: Audiência de Custódia e Garantia da Liberdade Pessoal (Art. 7º, item 5 da CADH)
  {
    idSlug: "dh-009",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.pacto_san_jose,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica - Artigo 7º, item 5) assegura a toda pessoa presa ou retida o direito de ser conduzida, sem demora, à presença de um juiz ou de outra autoridade autorizada por lei a exercer funções judiciais, garantia convencional que fundamenta a realização obrigatória das audiências de custódia no ordenamento jurídico brasileiro.",
    explicacao: "GABARITO: CERTO. O Art. 7.5 da CADH consagra expressamente o direito de apresentação sem demora perante o juiz. No STF, no julgamento da ADPF 347, foi reafirmada a obrigatoriedade da audiência de custódia para todas as formas de prisão (em flagrante, preventiva, temporária, decorrente de pronúncia ou execução penal), preceito também positivado no art. 310 do Código de Processo Penal e na Resolução 213 do CNJ.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q10 - VUNESP / PP - Pacto de San José: Separação de Presos Provisórios e Condenados (Art. 5º da CADH)
  {
    idSlug: "dh-010",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.pacto_san_jose,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Penal",
    cargo_nome: "Policial Penal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) estabelece regras expressas sobre o direito à integridade pessoal e a custódia prisional (Artigo 5º). De acordo com esse tratado internacional:",
    explicacao: "GABARITO: E. Nos termos do Artigo 5º, item 4, da CADH: 'Os processados devem ficar separados dos condenados, salvo em circunstâncias excepcionais, e devem ser submetidos a tratamento adequado à sua condição de pessoas não condenadas.' O item 5 complementa que os menores devem ser separados dos adultos e conduzidos a tribunal especializado.",
    alternativas: [
      { letra: "A", texto: "A sanção penal de perda de bens pode ultrapassar a pessoa do apenado e atingir os direitos de terceiros de boa-fé.", correta: false },
      { letra: "B", texto: "Os presos provisórios devem ser obrigatoriamente alocados junto com os apenados reincidentes para fins disciplinares.", correta: false },
      { letra: "C", texto: "Os adolescentes em conflito com a lei devem compartilhar as celas comuns com adultos para facilitar a segurança dos estabelecimentos.", correta: false },
      { letra: "D", texto: "As penas privativas de liberdade devem ter caráter puramente retributivo, sendo vedada a finalidade de readaptação social.", correta: false },
      { letra: "E", texto: "Os réus processados (presos provisórios) devem ficar separados dos condenados, salvo em circunstâncias excepcionais, e receber tratamento adequado à condição de não condenados.", correta: true }
    ]
  },
  // Q11 - CEBRASPE / PM - Pacto de San José: Princípio da Não Autoincriminação e Direito ao Silêncio (Art. 8º da CADH)
  {
    idSlug: "dh-011",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.pacto_san_jose,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com o Pacto de San José da Costa Rica (Artigo 8º, item 2, 'g'), toda pessoa acusada de um delito tem o direito fundamental de não ser obrigada a depor contra si mesma nem a confessar-se culpada, decorrendo dessa garantia o princípio da não autoincriminação (nemo tenetur se detegere) e o dever dos policiais de cientificarem o detido sobre o direito ao silêncio no momento da abordagem.",
    explicacao: "GABARITO: CERTO. O Artigo 8.2, 'g', da CADH e o art. 5º, LXIII, da CF/88 consagram o privilégio contra a autoincriminação. A jurisprudência do STF (como na Reclamação 33.711 e no RHC 192.798) assenta que o aviso do direito de permanecer em silêncio (Aviso de Miranda) deve ser realizado logo na abordagem ou prisão, sendo nula a prova obtida mediante interrogatório sub-reptício ou sem a devida advertência.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q12 - IBFC / CBM - Pacto de San José e STF: Vedação à Prisão Civil de Depositário Infiel (Art. 7º da CADH / SV 25)
  {
    idSlug: "dh-012",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.pacto_san_jose,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "A incorporação da Convenção Americana sobre Direitos Humanos (CADH/1969) ao direito brasileiro provocou importante mudança quanto à prisão civil por dívida. Com base na jurisprudência vinculante do Supremo Tribunal Federal (Súmula Vinculante nº 25) e no Artigo 7º, item 7, da CADH:",
    explicacao: "GABARITO: A. O art. 7.7 da CADH veda a prisão civil por dívida, admitindo unicamente o mandado de autoridade judiciária competente expedido por inadimplemento inescusável de obrigação alimentar. Reconhecendo a supralegalidade dos tratados de direitos humanos (RE 466.343), o STF editou a Súmula Vinculante 25: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.'",
    alternativas: [
      { letra: "A", texto: "é ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito, subsistindo no Brasil unicamente a prisão civil do devedor inescusável de alimentos.", correta: true },
      { letra: "B", texto: "a prisão civil de depositário infiel permanece plenamente válida para depósitos contratuais em alienação fiduciária em garantia.", correta: false },
      { letra: "C", texto: "a CADH autorizou expressamente a decretação de prisão civil administrativa para dívidas tributárias perante o Fisco.", correta: false },
      { letra: "D", texto: "o depositário judicial pode ter sua prisão civil decretada sumariamente caso não localize o bem penhorado.", correta: false },
      { letra: "E", texto: "o Pacto de San José aboliu integralmente qualquer hipótese de coerção pessoal no âmbito cível, extinguindo também a prisão do devedor de alimentos.", correta: false }
    ]
  },
  // Q13 - CEBRASPE / PM - Dignidade Humana na Custódia e Uso de Algemas: Súmula Vinculante 11 do STF
  {
    idSlug: "dh-013",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Soldado da Polícia Militar",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Segundo a Súmula Vinculante nº 11 do Supremo Tribunal Federal, o emprego de algemas em qualquer cidadão detido é a regra geral na rotina operacional das forças de segurança, cabendo ao custodiado comprovar em juízo a abusividade do ato para anular a prisão.",
    explicacao: "GABARITO: ERRADO. O uso de algemas é medida EXCEPCIONAL. Conforme a Súmula Vinculante 11 do STF: 'Só é lícito o uso de algemas em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, por parte do preso ou de terceiros, justificada a excepcionalidade por escrito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade da prisão ou do ato processual a que se refere, sem prejuízo da responsabilidade civil do Estado.'",
    alternativas: [
      { texto: "Certo", correta: false },
      { texto: "Errado", correta: true }
    ]
  },
  // Q14 - FGV / GM - Uso da Força e Instrumentos de Menor Potencial Ofensivo: Lei nº 13.060/2014
  {
    idSlug: "dh-014",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Guarda Municipal",
    cargo_nome: "Guarda Civil Municipal",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A Lei Federal nº 13.060/2014 disciplina o uso dos instrumentos de menor potencial ofensivo pelos agentes de segurança pública em todo o território nacional. Em consonância com as diretrizes internacionais de direitos humanos, a referida lei preconiza que:",
    explicacao: "GABARITO: C. O art. 2º da Lei 13.060/2014 estabelece que os órgãos de segurança pública priorizarão o uso de instrumentos de menor potencial ofensivo, desde que o seu uso não coloque em risco a integridade física ou psíquica dos policiais. O parágrafo único, inciso I, veda expressamente o disparo de arma de fogo contra pessoa em fuga desarmada ou que não represente risco imediato de morte ou lesão aos agentes ou a terceiros.",
    alternativas: [
      { letra: "A", texto: "o uso de armas de fogo com munição letal deve preceder as tecnologias não letais em todas as situações de aglomeração de pessoas.", correta: false },
      { letra: "B", texto: "os agentes de segurança pública podem disparar contra veículos que desrespeitem bloqueio policial de trânsito, ainda que desprovidos de ameaça armada direta.", correta: false },
      { letra: "C", texto: "não é legítimo o uso de arma de fogo contra pessoa em fuga que esteja desarmada ou que não represente risco imediato de morte ou de lesão aos agentes de segurança pública ou a terceiros.", correta: true },
      { letra: "D", texto: "o uso da força dispensará a observância dos princípios da necessidade e da proporcionalidade durante patrulhamentos noturnos.", correta: false },
      { letra: "E", texto: "o fornecimento e treinamento em instrumentos de menor potencial ofensivo é facultativo e prescindível na capacitação policial.", correta: false }
    ]
  },
  // Q15 - CEBRASPE / PC - Dignidade Humana e População LGBTQIA+ na Custódia: ADPF 527 do STF
  {
    idSlug: "dh-015",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No julgamento da ADPF 527, o Supremo Tribunal Federal assentou que presas transexuais e travestis com identidade de gênero feminina têm o direito de cumprir pena ou prisão provisória em estabelecimento prisional feminino ou em ala compatível e reservada de presídio masculino que assegure sua integridade física e moral, sendo garantido o respeito ao seu nome social e à sua identidade desde a abordagem policial inicial.",
    explicacao: "GABARITO: CERTO. O STF, na ADPF 527 (em sintonia com a Resolução 348 do CNJ e com a Opinião Consultiva OC-24/17 da Corte Interamericana de Direitos Humanos), fixou que transexuais e travestis com identidade feminina têm o direito de optar pelo cumprimento da custódia em estabelecimento feminino ou em espaço/ala exclusiva de estabelecimento prisional masculino que resguarde sua integridade física, dignidade e respeito ao nome social.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q16 - VUNESP / PM - Gerações / Dimensões dos Direitos Humanos e Limitação do Poder de Polícia
  {
    idSlug: "dh-016",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "Inédita / Estilo VUNESP",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A teoria geral dos Direitos Humanos classifica os direitos fundamentais em dimensões ou gerações históricas. Na atividade das forças de segurança pública, a garantia do devido processo legal, da vedação à autoincriminação forçada e da exigência de mandado judicial para violação de domicílio refletem classicamente direitos de:",
    explicacao: "GABARITO: A. Os direitos de primeira geração/dimensão (liberdades individuais, direitos civis e políticos) têm como marco as revoluções liberais dos séculos XVII e XVIII e caracterizam-se pelo dever de abstenção estatal (obrigações de não fazer / liberdades negativas), limitando o poder punitivo e o arbítrio estatal na persecução criminal (devido processo, ampla defesa, presunção de inocência, inviolabilidade domiciliar).",
    alternativas: [
      { letra: "A", texto: "primeira dimensão, orientados pelas liberdades negativas e pela contenção do arbítrio do Estado frente ao cidadão.", correta: true },
      { letra: "B", texto: "segunda dimensão, focados na prestação econômica de assistência social a condenados.", correta: false },
      { letra: "C", texto: "terceira dimensão, voltados precipuamente ao direito coletivo à paz e ao meio ambiente ecologicamente equilibrado.", correta: false },
      { letra: "D", texto: "quarta dimensão, associados à manipulação da engenharia genética e da bioética nas prisões.", correta: false },
      { letra: "E", texto: "quinta dimensão, relativos exclusivamente à governança cibernética e ao acesso à internet no cárcere.", correta: false }
    ]
  },
  // Q17 - CEBRASPE / PRF - PBUFAF da ONU: Notificação e Investigação Independente em Uso Letal da Força
  {
    idSlug: "dh-017",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em conformidade com os Princípios Básicos sobre o Uso da Força e Armas de Fogo da ONU (Princípios 6 e 22), sempre que o uso da força ou de armas de fogo resultar em lesão grave ou morte de qualquer pessoa, os agentes envolvidos devem relatar o fato prontamente aos seus superiores, e o Estado deve assegurar a realização de procedimentos de investigação eficazes, transparentes e independentes.",
    explicacao: "GABARITO: CERTO. Os Princípios 6 e 22 do PBUFAF estabelecem expressamente a obrigatoriedade de comunicação imediata à cadeia de comando sempre que o emprego de força ou arma letal acarretar ferimentos ou óbito, bem como a necessidade de realização de investigação detalhada e independente sobre a legalidade e necessidade da intervenção estatal, garantindo a responsabilização e a transparência.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q18 - FGV / CBM - PBUFAF e CADH: Ilegalidade Manifesta de Ordens Superiores
  {
    idSlug: "dh-018",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.pacto_san_jose,
    banca_nome: "Inédita / Estilo FGV",
    orgao_nome: "Corpo de Bombeiros Militar",
    cargo_nome: "Oficial Bombeiro Militar",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito da obediência hierárquica e da responsabilidade funcional de agentes públicos em missões de segurança, os tratados internacionais de direitos humanos (como o PBUFAF da ONU - Princípio 26 e a jurisprudência da Corte Interamericana de Direitos Humanos) preconizam que:",
    explicacao: "GABARITO: B. Segundo o Princípio 26 do PBUFAF e o ordenamento jurídico brasileiro (art. 22 do CP e art. 38 do CPM), a obediência a ordens de superiores não exime de responsabilidade o agente executor quando a ordem for manifestamente criminosa ou ilegal (como praticar tortura, execuções sumárias ou maus-tratos). O agente tem o dever jurídico e moral de recusar o cumprimento de ordens manifestamente ilícitas.",
    alternativas: [
      { letra: "A", texto: "a ordem formal de um superior hierárquico exime totalmente de responsabilidade criminal o subordinado, mesmo diante de tortura ou execução sumária manifestamente ilegal.", correta: false },
      { letra: "B", texto: "a alegação de cumprimento de ordem superior não justifica a violação aos direitos humanos se o agente sabia ou deveria saber que a ordem era manifestamente ilegal, incumbindo-lhe o dever de recusa.", correta: true },
      { letra: "C", texto: "o subordinado que se recusa a cumprir uma ordem manifestamente ilegal de agressão a civis responde automaticamente por motim e deserção.", correta: false },
      { letra: "D", texto: "a responsabilidade civil e penal do agente executor é sempre subsidiária à do comandante direto, dependendo de sua prévia condenação.", correta: false },
      { letra: "E", texto: "o direito internacional estabelece presunção absoluta de legalidade de qualquer ordem expedida por autoridade de segurança.", correta: false }
    ]
  },
  // Q19 - CEBRASPE / PRF - CADH e Corte IDH: Controle de Convencionalidade Difuso pelas Forças Policiais
  {
    idSlug: "dh-019",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.pacto_san_jose,
    banca_nome: "Inédita / Estilo CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A jurisprudência da Corte Interamericana de Direitos Humanos consolidou a tese de que o controle de convencionalidade deve ser exercido de ofício não apenas pelos juízes e tribunais, mas por todos os órgãos e autoridades estatais, inclusive as forças policiais, que devem compatibilizar suas práticas operacionais diárias com a Convenção Americana sobre Direitos Humanos e com os padrões interpretativos fixados pela Corte IDH.",
    explicacao: "GABARITO: CERTO. A Corte IDH (notadamente nos casos Almonacid Arellano vs. Chile, Gelman vs. Uruguai, e Favela Nova Brasília vs. Brasil) assentou que todas as autoridades e poderes do Estado (Judiciário, Executivo, Legislativo e forças de segurança pública) estão vinculados ao dever de exercer o controle de convencionalidade difuso no âmbito de suas respectivas atribuições, abstendo-se de praticar condutas incompatíveis com o Pacto de San José.",
    alternativas: [
      { texto: "Certo", correta: true },
      { texto: "Errado", correta: false }
    ]
  },
  // Q20 - IBFC / PC - Tratamento de Presos e Protocolo de Istambul da ONU
  {
    idSlug: "dh-020",
    disciplina_id: TAXONOMIA.disciplinas.direitos_humanos,
    assunto_id: TAXONOMIA.assuntos.geracoes_dh,
    banca_nome: "Inédita / Estilo IBFC",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Agente de Polícia",
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O 'Protocolo de Istambul' (Manual para a Investigação e Documentação Eficazes da Tortura e Outras Penas ou Tratamentos Cruéis, Desumanos ou Degradantes da ONU) constitui documento internacional de referência técnica voltado a:",
    explicacao: "GABARITO: D. O Protocolo de Istambul foi adotado pela ONU em 1999 como um guia prático de padrões médico-legais e jurídicos internacionais para a avaliação clínica, documentação forense e investigação de alegações de tortura e maus-tratos cometidos contra pessoas privadas de liberdade ou sob custódia policial, sendo crucial para coibir a impunidade e assegurar provas técnicas periciais idôneas.",
    alternativas: [
      { letra: "A", texto: "regulamentar o comércio internacional de armamento bélico pesado entre forças militares soberanas.", correta: false },
      { letra: "B", texto: "padronizar os uniformes e insígnias táticas utilizadas por policiais em operações de fronteira.", correta: false },
      { letra: "C", texto: "disciplinar as regras de trânsito aduaneiro e transporte marítimo de cargas perigosas.", correta: false },
      { letra: "D", texto: "fornecer diretrizes internacionais médico-legais e jurídicas para a perícia, investigação e documentação de atos de tortura e outros tratamentos cruéis sob custódia estatal.", correta: true },
      { letra: "E", texto: "definir as sanções financeiras aplicáveis exclusivamente a empresas privadas que cometem fraudes tributárias.", correta: false }
    ]
  }
];
