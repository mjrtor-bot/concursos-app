import { TAXONOMIA } from "./taxonomia.mjs";

export const administrativoPart3 = [
  {
    idSlug: "adm-b5-041",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.organizacao_administrativa,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Nos termos da Lei nº 8.987/1995, a encampação é a retomada do serviço público pelo poder concedente durante o prazo da concessão, por motivo de interesse público, mediante lei autorizativa específica e após prévio pagamento de indenização pelas parcelas dos investimentos vinculados aos bens reversíveis ainda não amortizados.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É o teor exato do art. 37 da Lei nº 8.987/1995 que exige lei autorizativa específica e prévia indenização para a encampação."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 37 estabelece expressamente a necessidade de lei específica e indenização prévia."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme o art. 37 da Lei nº 8.987/1995: 'Considera-se encampação a retomada do serviço pelo poder concedente durante o prazo da concessão, por motivo de interesse público, mediante lei autorizativa específica e após prévio pagamento da indenização, na forma do artigo anterior'."
  },
  {
    idSlug: "adm-b5-042",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.organizacao_administrativa,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação à Lei de Parcerias Público-Privadas (Lei nº 11.079/2004), assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A concessão patrocinada envolve adicionalmente à tarifa cobrada dos usuários a contraprestação pecuniária do parceiro público ao parceiro privado, enquanto a concessão administrativa é o contrato de prestação de serviços de que a Administração Pública seja a usuária direta ou indireta, ainda que envolva execução de obra.",
        correta: true,
        explicacao_especifica: "Correta. Distinção expressa no art. 2º, §§ 1º e 2º, da Lei nº 11.079/2004."
      },
      {
        letra: "B",
        texto: "É permitida a celebração de PPP cujo valor de contrato seja inferior a um milhão de reais.",
        correta: false,
        explicacao_especifica: "Incorreta. O valor do contrato não pode ser inferior a R$ 10.000.000,00 (art. 2º, § 4º, I)."
      },
      {
        letra: "C",
        texto: "O prazo de vigência do contrato de PPP pode ser de até dois anos.",
        correta: false,
        explicacao_especifica: "Incorreta. O período de prestação dos serviços deve ser entre 5 e 30 anos (art. 5º, I)."
      },
      {
        letra: "D",
        texto: "A celebração de PPP dispensa prévia licitação na modalidade concorrência.",
        correta: false,
        explicacao_especifica: "Incorreta. A contratação de PPP exige licitação na modalidade concorrência ou diálogo competitivo (art. 10)."
      },
      {
        letra: "E",
        texto: "A concessão comum disciplinada pela Lei 8.987/1995 é considerada modalidade de PPP.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 2º, § 3º veda chamar de PPP a concessão comum de serviços públicos."
      }
    ],
    explicacao: "Gabarito: A. A Lei nº 11.079/2004 define as duas modalidades de PPP: Concessão Patrocinada (tarifa do usuário + contraprestação do poder público) e Concessão Administrativa (100% contraprestação do poder público, sendo a Administração usuária direta ou indireta)."
  },
  {
    idSlug: "adm-b5-043",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Os bens públicos de uso comum do povo e os de uso especial são inalienáveis enquanto conservarem a sua qualificação, na forma que a lei dispuser, ao passo que os bens dominicais podem ser alienados, observadas as exigências da lei, consoante o Código Civil brasileiro.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É o teor dos arts. 100 e 101 do Código Civil."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. A afetação impede a alienação de bens de uso comum e especial; os dominicais (desafetados) são alienáveis."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme os arts. 100 e 101 do Código Civil: 'Art. 100. Os bens públicos de uso comum do povo e os de uso especial são inalienáveis, enquanto conservarem a sua qualificação, na forma que a lei dispuser. Art. 101. Os bens públicos dominicais podem ser alienados, observadas as exigências da lei'."
  },
  {
    idSlug: "adm-b5-044",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação ao regime jurídico dos bens públicos no direito brasileiro e à jurisprudência do Supremo Tribunal Federal e do Superior Tribunal de Justiça, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "Os bens públicos não estão sujeitos a usucapião, qualquer que seja a sua categoria (de uso comum, de uso especial ou dominicais), sendo a ocupação irregular de área pública mera detenção de natureza precária, insuscetível de gerar direito possessório ou indenização por benfeitorias.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 183, § 3º da CF/88, Súmula 340 do STF e Súmula 619 do STJ."
      },
      {
        letra: "B",
        texto: "A posse mansa e pacífica de bem dominical por mais de vinte anos enseja a aquisição da propriedade por usucapião extraordinário.",
        correta: false,
        explicacao_especifica: "Incorreta. Bens públicos de qualquer espécie são absolutamente imprescritíveis (art. 102 do CC e Súmula 340/STF)."
      },
      {
        letra: "C",
        texto: "Os bens de empresas estatais exploradoras de atividade econômica não podem ser penhorados sob nenhuma hipótese.",
        correta: false,
        explicacao_especifica: "Incorreta. Bens de estatais que exploram atividade econômica em regime de concorrência são penhoráveis (regime de direito privado - art. 173, § 1º, II, CF)."
      },
      {
        letra: "D",
        texto: "A desafetação de um bem público de uso especial opera-se compulsoriamente pelo simples abandono fático por trinta dias.",
        correta: false,
        explicacao_especifica: "Incorreta. Exige ato formal da Administração ou destinação fática incompatível contínua."
      },
      {
        letra: "E",
        texto: "Os bens públicos dominicais respondem por execução comum com penhora direta sem necessidade de precatório.",
        correta: false,
        explicacao_especifica: "Incorreta. Todos os bens das pessoas jurídicas de direito público submetem-se ao regime de precatórios (art. 100, CF)."
      }
    ],
    explicacao: "Gabarito: A. Consoante a Súmula 340/STF: 'Desde a vigência do Código Civil, os bens dominicais, como os demais bens públicos, não podem ser adquiridos por usucapião'. Ademais, a Súmula 619/STJ dispõe: 'A ocupação indevida de bem público configura mera detenção, de natureza precária, insuscetível de retenção ou indenização por acessões e benfeitorias'."
  },
  {
    idSlug: "adm-b5-045",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei de Acesso à Informação (Lei nº 12.527/2011), as informações sob a custódia do Estado podem ser classificadas em ultrassecretas, secretas e reservadas, sendo os prazos máximos de restrição de acesso de vinte e cinco anos para as ultrassecretas, quinze anos para as secretas e cinco anos para as reservadas.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É o teor literal do art. 24, § 1º, incisos I a III, da Lei nº 12.527/2011."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. A LAI estabelece exatamente os prazos de 25, 15 e 5 anos."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme o art. 24, § 1º, da Lei nº 12.527/2011 (LAI): 'Os prazos máximos de restrição de acesso à informação [...] vigoram a partir da data de sua produção e são os seguintes: I - ultrassecreta: 25 (vinte e cinco) anos; II - secreta: 15 (quinze) anos; III - reservada: 5 (cinco) anos'."
  },
  {
    idSlug: "adm-b5-046",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito das garantias de transparência e das restrições de acesso na Lei nº 12.527/2011 (Lei de Acesso à Informação), assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "Não poderá ser negado acesso à informação necessária à tutela judicial ou administrativa de direitos fundamentais, e as informações relativas a condutas que impliquem violação dos direitos humanos praticada por agentes públicos não poderão ser objeto de restrição de acesso.",
        correta: true,
        explicacao_especifica: "Correta. É o teor expresso do art. 21, caput e parágrafo único, da Lei nº 12.527/2011."
      },
      {
        letra: "B",
        texto: "O solicitante da informação deve obrigatoriamente justificar os motivos de seu pedido sob pena de indeferimento sumário.",
        correta: false,
        explicacao_especifica: "Incorreta. É vedado exigir os motivos determinantes da solicitação de informações públicas (art. 10, § 3º)."
      },
      {
        letra: "C",
        texto: "As informações pessoais relativas à intimidade e vida privada terão seu acesso restrito pelo prazo máximo de duzentos anos.",
        correta: false,
        explicacao_especifica: "Incorreta. O prazo máximo de restrição para dados pessoais é de 100 anos (art. 31, § 1º, I)."
      },
      {
        letra: "D",
        texto: "A classificação de informação no grau ultrassecreto pode ser realizada por qualquer servidor público ocupante de cargo efetivo.",
        correta: false,
        explicacao_especifica: "Incorreta. A classificação ultrassecreta é de competência privativa de autoridades de cúpula (art. 27, I)."
      },
      {
        letra: "E",
        texto: "A LAI não se aplica aos órgãos da segurança pública estadual.",
        correta: false,
        explicacao_especifica: "Incorreta. Aplica-se a todos os órgãos dos Poderes Executivo, Legislativo e Judiciário em todas as esferas federativas (art. 1º)."
      }
    ],
    explicacao: "Gabarito: A. Consoante o art. 21 da Lei nº 12.527/2011: 'Não poderá ser negado acesso à informação necessária à tutela judicial ou administrativa de direitos fundamentais. Parágrafo único. As informações ou documentos que versem sobre condutas que impliquem violação dos direitos humanos praticada por agentes públicos ou a mando de autoridades públicas não poderão ser objeto de restrição de acesso'."
  },
  {
    idSlug: "adm-b5-047",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No julgamento do Tema 445 da Repercussão Geral (RE 636.553), o Supremo Tribunal Federal fixou a tese de que os Tribunais de Contas estão sujeitos ao prazo de cinco anos para o julgamento da legalidade do ato de concessão inicial de aposentadoria, reforma ou pensão, a contar da chegada do processo à respectiva Corte de Contas, findo o qual o ato se considera definitivamente registrado se não houver apreciação.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Tese de repercussão geral fixada no Tema 445 pelo STF (preservação da segurança jurídica e estabilidade das relações sociais)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O STF fixou o prazo decadencial de 5 anos para o TCU/TCEs registrarem a concessão inicial de aposentadoria."
      }
    ],
    explicacao: "Gabarito: Certo. No Tema 445 de Repercussão Geral (RE 636.553), o STF assentou: 'Em atenção aos princípios da segurança jurídica e da confiança legítima, os Tribunais de Contas estão sujeitos ao prazo de 5 anos para o julgamento da legalidade do ato de concessão inicial de aposentadoria, reforma ou pensão, a contar da chegada do processo à respectiva Corte de Contas, em atenção ao art. 54 da Lei 9.784/1999. Passado esse prazo sem julgamento, o ato considerar-se-á tacitamente registrado'."
  },
  {
    idSlug: "adm-b5-048",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito das competências do Tribunal de Contas da União consagradas no art. 71 da Constituição Federal e da jurisprudência do STF, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "As decisões do Tribunal de Contas de que resulte imputação de débito ou multa terão eficácia de título executivo extrajudicial.",
        correta: true,
        explicacao_especifica: "Correta. É a redação exata do art. 71, § 3º, da Constituição Federal."
      },
      {
        letra: "B",
        texto: "O TCU tem competência para julgar judicialmente crimes de responsabilidade cometidos por Ministros de Estado.",
        correta: false,
        explicacao_especifica: "Incorreta. Tribunal de Contas não exerce jurisdição penal; o julgamento de crime de responsabilidade de Ministro cabe ao Senado ou STF."
      },
      {
        letra: "C",
        texto: "O TCU julga as contas prestadas anualmente pelo Presidente da República proferindo acórdão condenatório irrecorrível.",
        correta: false,
        explicacao_especifica: "Incorreta. Sobre as contas do Presidente, o TCU emite apenas parecer prévio (art. 71, I); o julgamento político é do Congresso Nacional."
      },
      {
        letra: "D",
        texto: "O parecer do Tribunal de Contas sobre as contas de governo de Prefeito Municipal só pode ser rejeitado por decisão unânime da Câmara de Vereadores.",
        correta: false,
        explicacao_especifica: "Incorreta. Exige decisão por 2/3 dos membros da Câmara Municipal (art. 31, § 2º, CF)."
      },
      {
        letra: "E",
        texto: "A competência do TCU exclui a fiscalização de entidades privadas que recebem subvenções sociais da União.",
        correta: false,
        explicacao_especifica: "Incorreta. Qualquer pessoa física ou jurídica que utilize recursos públicos federais submete-se ao controle (art. 70, parágrafo único)."
      }
    ],
    explicacao: "Gabarito: A. Conforme o art. 71, § 3º, da Constituição Federal: 'As decisões do Tribunal de que resulte imputação de débito ou multa terão eficácia de título executivo'. A execução judicial do título é promovida pela Fazenda Pública ou órgão competente perante a Justiça comum."
  },
  {
    idSlug: "adm-b5-049",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Nos processos perante o Tribunal de Contas da União asseguram-se o contraditório e a ampla defesa quando da decisão puder resultar anulação ou revogação de ato administrativo que beneficie o interessado, excetuada a apreciação da legalidade do ato de concessão inicial de aposentadoria, reforma e pensão, consoante a Súmula Vinculante nº 3 do STF.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É o enunciado integral da Súmula Vinculante nº 3 do STF."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. A Súmula Vinculante 3 consagra expressamente essa ressalva para a concessão inicial de benefício previdenciário."
      }
    ],
    explicacao: "Gabarito: Certo. Dispõe a Súmula Vinculante nº 3 do STF: 'Nos processos perante o Tribunal de Contas da União asseguram-se o contraditório e a ampla defesa quando da decisão puder resultar anulação ou revogação de ato administrativo que beneficie o interessado, excetuada a apreciação da legalidade do ato de concessão inicial de aposentadoria, reforma e pensão'."
  },
  {
    idSlug: "adm-b5-050",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito do controle judicial dos atos administrativos e dos limites do mérito administrativo, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O Poder Judiciário pode controlar a legalidade, a legitimidade e a constitucionalidade dos atos administrativos, inclusive examinando a conformidade com os princípios da proporcionalidade, razoabilidade, moralidade e a veracidade dos motivos determinantes, sem que isso configure usurpação do mérito administrativo reservado ao Poder Executivo.",
        correta: true,
        explicacao_especifica: "Correta. A jurisprudência contemporânea do STF e STJ admite o controle judicial amplo de juridicidade e razoabilidade."
      },
      {
        letra: "B",
        texto: "O Poder Judiciário está absolutamente proibido de analisar qualquer ato discricionário mesmo que violador flagrante da moralidade administrativa.",
        correta: false,
        explicacao_especifica: "Incorreta. A moralidade é princípio constitucional cogente e controlável judicialmente (art. 37, caput)."
      },
      {
        letra: "C",
        texto: "A sindicabilidade judicial limita-se à verificação da assinatura do agente público.",
        correta: false,
        explicacao_especifica: "Incorreta. O controle de legalidade alcança competência, finalidade, forma, motivo, objeto e razoabilidade."
      },
      {
        letra: "D",
        texto: "O juiz pode substituir a pontuação atribuída pela banca examinadora em questão discursiva sem erro material manifesto.",
        correta: false,
        explicacao_especifica: "Incorreta. O Judiciário não corrige provas de concurso, salvo flagrante ilegalidade ou descompasso com o edital (Tema 485 STF)."
      },
      {
        letra: "E",
        texto: "O controle jurisdicional do ato administrativo enseja a concessão automática de indenização punitiva contra o magistrado.",
        correta: false,
        explicacao_especifica: "Incorreta. Assertiva esdrúxula e sem respaldo legal."
      }
    ],
    explicacao: "Gabarito: A. O controle jurisdicional dos atos administrativos abrange a legalidade estrita e a juridicidade ampla (compatibilidade com princípios constitucionais como proporcionalidade, razoabilidade e moralidade, bem como a teoria dos motivos determinantes). O Judiciário não substitui o critério de conveniência e oportunidade legítimo do administrador, mas anula atos desarrazoados, desproporcionais ou desprovidos de base factual."
  },
  {
    idSlug: "adm-b5-051",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei de Introdução às Normas do Direito Brasileiro (LINDB - Decreto-Lei nº 4.657/1942, com redação da Lei nº 13.655/2018), nas esferas administrativa, controladora e judicial, não se decidirá com base em valores jurídicos abstratos sem que sejam consideradas as consequências práticas da decisão.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É o teor literal do art. 20, caput, da LINDB introduzido pela Lei nº 13.655/2018."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 20 da LINDB impõe o dever de pragmatismo e consideração das consequências práticas na tomada de decisão pública."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme o art. 20 da LINDB: 'Nas esferas administrativa, controladora e judicial, não se decidirá com base em valores jurídicos abstratos sem que sejam consideradas as consequências práticas da decisão. Parágrafo único. A motivação demonstrará a necessidade e a adequação da medida imposta ou da invalidação de ato, contrato, ajuste, processo ou norma administrativa, inclusive em face das possíveis alternativas'."
  },
  {
    idSlug: "adm-b5-052",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O art. 28 da LINDB estabelece que o agente público responderá pessoalmente por suas decisões ou opiniões técnicas em caso de:",
    alternativas: [
      {
        letra: "A",
        texto: "Dolo ou erro grosseiro.",
        correta: true,
        explicacao_especifica: "Correta. É o texto literal e taxativo do art. 28 da LINDB."
      },
      {
        letra: "B",
        texto: "Culpa leve ou negligência ordinária.",
        correta: false,
        explicacao_especifica: "Incorreta. Culpa simples ou leve não gera responsabilidade pessoal do agente sob a LINDB."
      },
      {
        letra: "C",
        texto: "Qualquer prejuízo financeiro apurado em auditoria sem demonstração de dolo.",
        correta: false,
        explicacao_especifica: "Incorreta. Exige-se comprovação de dolo ou erro grosseiro (culpa gravíssima)."
      },
      {
        letra: "D",
        texto: "Adoção de interpretação jurisprudencial minoritária autorizada em parecer prévio.",
        correta: false,
        explicacao_especifica: "Incorreta. Não configura erro grosseiro."
      },
      {
        letra: "E",
        texto: "Responsabilidade objetiva integral pura por dano patrimonial.",
        correta: false,
        explicacao_especifica: "Incorreta. A responsabilidade pessoal do agente é estritamente subjetiva qualificada."
      }
    ],
    explicacao: "Gabarito: A. Preceitua o art. 28 da LINDB (incluído pela Lei nº 13.655/2018): 'O agente público responderá pessoalmente por suas decisões ou opiniões técnicas em caso de dolo ou erro grosseiro'. O STF na ADI 6.421 definiu erro grosseiro como a culpa grave caracterizada por ação ou omissão com manifesto descuido quanto ao dever de diligência do servidor."
  },
  {
    idSlug: "adm-b5-053",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_adm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em razão do princípio da especialidade e da descentralização administrativa por serviços, a criação de uma autarquia implica a outorga da titularidade e da execução do serviço público com autonomia gerencial e financeira, permanecendo a autarquia sujeita ao controle finalístico (tutela administrativa ou supervisão ministerial) do ente federativo instituidor, sem relação de subordinação hierárquica.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Entre a Administração Direta e a Indireta há controle finalístico (vinculação), e não subordinação hierárquica."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. A descentralização por outorga preserva a autonomia e afasta a hierarquia direta."
      }
    ],
    explicacao: "Gabarito: Certo. Na descentralização por serviços (outorga), o Estado cria entidades da Administração Indireta (autarquias, fundações) transferindo-lhes a execução e a titularidade dos serviços. Entre o Ministério supervisor e a entidade autárquica não há hierarquia, mas controle finalístico ou tutela administrativa (supervisão ministerial), destinado a verificar o cumprimento dos objetivos legais da entidade."
  },
  {
    idSlug: "adm-b5-054",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.agentes_8112,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito das garantias constitucionais do concurso público e das cotas raciais, segundo o STF no julgamento da ADC nº 41:",
    alternativas: [
      {
        letra: "A",
        texto: "É constitucional a reserva de vagas para pessoas negras em concursos públicos para provimento de cargos efetivos e empregos públicos nos quadros da administração pública federal, autárquica e fundacional, sendo legítima a previsão subsidiária de bancas de heteroidentificação com base no fenótipo do candidato para coibir fraudes.",
        correta: true,
        explicacao_especifica: "Correta. Tese fixada pelo Plenário do STF na ADC 41 julgando constitucional a Lei nº 12.990/2014 e a heteroidentificação fenotípica."
      },
      {
        letra: "B",
        texto: "A reserva de cotas raciais em concursos públicos foi declarada inconstitucional por violar a isonomia material.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF julgou a ação integralmente procedente declarando a plena constitucionalidade das cotas."
      },
      {
        letra: "C",
        texto: "A autodeclaração do candidato possui presunção absoluta de veracidade, sendo vedada qualquer comissão avaliadora.",
        correta: false,
        explicacao_especifica: "Incorreta. A comissão de heteroidentificação fenotípica é válida e necessária para combater fraudes."
      },
      {
        letra: "D",
        texto: "As cotas raciais aplicam-se apenas a contratações temporárias em cargos de comissão de livre nomeação.",
        correta: false,
        explicacao_especifica: "Incorreta. Aplica-se a cargos efetivos e empregos públicos em concursos públicos."
      },
      {
        letra: "E",
        texto: "O percentual de reserva fixado em lei federal deve ser deduzido integralmente das vagas de pessoas com deficiência.",
        correta: false,
        explicacao_especifica: "Incorreta. São políticas de ações afirmativas autônomas e complementares."
      }
    ],
    explicacao: "Gabarito: A. No julgamento da ADC 41, o STF declarou a constitucionalidade da Lei nº 12.990/2014 (reserva de 20% das vagas em concursos federais para negros) e validou o uso subsidiário de mecanismos de heteroidentificação fenotípica (critérios visuais e corporais, respeitada a dignidade da pessoa humana e o devido processo)."
  },
  {
    idSlug: "adm-b5-055",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.licitacoes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei nº 14.133/2021, o pregão é a modalidade de licitação obrigatória para a aquisição de bens e serviços comuns, cujo critério de julgamento poderá ser o de menor preço ou o de maior desconto.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É o teor literal do art. 6º, XLI e art. 34 da Lei nº 14.133/2021."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O pregão adota critérios de menor preço ou maior desconto para bens e serviços comuns."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme o art. 6º, XLI, da Lei nº 14.133/2021: 'pregão: modalidade de licitação obrigatória para aquisição de bens e serviços comuns, cujo critério de julgamento poderá ser o de menor preço ou o de maior desconto'."
  },
  {
    idSlug: "adm-b5-056",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.licitacoes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação aos procedimentos auxiliares das licitações previstos na Lei nº 14.133/2021 (art. 78), assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "São procedimentos auxiliares das licitações e das contratações: credenciamento; pré-qualificação; procedimento de manifestação de interesse; sistema de registro de preços; e registro cadastral.",
        correta: true,
        explicacao_especifica: "Correta. Rol taxativo dos procedimentos auxiliares do art. 78, incisos I a V, da Lei nº 14.133/2021."
      },
      {
        letra: "B",
        texto: "O leilão e o diálogo competitivo são procedimentos auxiliares de menor relevância contratual.",
        correta: false,
        explicacao_especifica: "Incorreta. Leilão e diálogo competitivo são modalidades de licitação (art. 28)."
      },
      {
        letra: "C",
        texto: "O credenciamento é admitido exclusivamente para contratação de mão de obra temporária braçal.",
        correta: false,
        explicacao_especifica: "Incorreta. Credenciamento é processo de convocação aberta com regras padronizadas (art. 79)."
      },
      {
        letra: "D",
        texto: "O sistema de registro de preços gera para a Administração a obrigação inafastável de contratar o quantitativo total registrado.",
        correta: false,
        explicacao_especifica: "Incorreta. A ata de registro de preços não obriga a contratação (art. 83)."
      },
      {
        letra: "E",
        texto: "A pré-qualificação impede a participação de fornecedores que comprovem atendimento a requisitos técnicos supervenientes.",
        correta: false,
        explicacao_especifica: "Incorreta. Pré-qualificação é procedimento aberto permanente (art. 80)."
      }
    ],
    explicacao: "Gabarito: A. Consoante o art. 78 da Lei nº 14.133/2021: 'São procedimentos auxiliares das licitações e das contratações regidas por esta Lei: I - credenciamento; II - pré-qualificação; III - procedimento de manifestação de interesse; IV - sistema de registro de preços; V - registro cadastral'."
  },
  {
    idSlug: "adm-b5-057",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Nos termos da Lei nº 8.429/1992 com redação dada pela Lei nº 14.230/2021, o sucessor ou o herdeiro daquele que causar dano ao erário ou que se enriquecer ilicitamente está sujeito apenas à obrigação de repará-lo até o limite do valor da herança ou do patrimônio transferido, não se transmitindo as sanções de natureza estritamente pessoal, como perda da função pública e suspensão dos direitos políticos.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É o teor exato do art. 8º da Lei nº 8.429/1992 em harmonia com o art. 5º, XLV da CF/88."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O sucessor responde patrimonialmente nos limites da herança; sanções políticas e funcionais não se transmitem."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme o art. 8º da Lei nº 8.429/1992 (redação da Lei nº 14.230/2021): 'O sucessor ou o herdeiro daquele que causar dano ao erário ou que se enriquecer ilicitamente estão sujeitos apenas à obrigação de repará-lo até o limite do valor da herança ou do patrimônio a eles transferido'."
  },
  {
    idSlug: "adm-b5-058",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.improbidade,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação ao Acordo de Não Persecução Civil (ANPC) na Lei de Improbidade Administrativa (art. 17-B da Lei nº 8.429/1992 com redação da Lei nº 14.230/2021), assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O acordo de não persecução civil poderá ser celebrado no curso da investigação, da ação de improbidade ou no momento da execução da sentença condenatória, exigindo, necessariamente, o integral ressarcimento do dano e a reversão à pessoa jurídica lesada da vantagem indevida obtida.",
        correta: true,
        explicacao_especifica: "Correta. É a disciplina do art. 17-B, caput e incisos, da Lei nº 8.429/1992."
      },
      {
        letra: "B",
        texto: "O ANPC dispensa homologação judicial quando firmado diretamente com o Ministério Público.",
        correta: false,
        explicacao_especifica: "Incorreta. O acordo depende necessariamente de homologação judicial (art. 17-B, § 1º)."
      },
      {
        letra: "C",
        texto: "O investigado que celebra ANPC é isento de devolver o produto do enriquecimento ilícito.",
        correta: false,
        explicacao_especifica: "Incorreta. O ressarcimento integral e a reversão da vantagem são requisitos inafastáveis."
      },
      {
        letra: "D",
        texto: "O ANPC só pode ser proposto antes da instauração do inquérito civil pelo MP.",
        correta: false,
        explicacao_especifica: "Incorreta. Pode ser celebrado em qualquer fase, inclusive na execução."
      },
      {
        letra: "E",
        texto: "O descumprimento do ANPC não acarreta a retomada da ação de improbidade.",
        correta: false,
        explicacao_especifica: "Incorreta. O descumprimento rescinde o acordo e autoriza a persecução integral das sanções."
      }
    ],
    explicacao: "Gabarito: A. Consoante o art. 17-B da Lei nº 8.429/1992: 'O acordo de não persecução civil poderá ser celebrado [...] desde que dele resultem, ao menos, os seguintes resultados: I - o integral ressarcimento do dano ao erário; II - a reversão à pessoa jurídica lesada da vantagem indevida obtida, ainda que oriunda de agentes terceiros'. O ANPC exige homologação judicial (art. 17-B, § 1º)."
  },
  {
    idSlug: "adm-b5-059",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.responsabilidade_civil,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal, no julgamento do Tema 592 da Repercussão Geral (RE 841.526), assentou que, em caso de morte de detento, o Estado é civilmente responsável se for demonstrada a inobservância do seu dever específico de proteção estabelecido no art. 5º, inciso XLIX, da Constituição Federal, não se aplicando a teoria do risco integral, cabendo ao Estado o ônus de provar eventual causa impeditiva ou excludente da sua responsabilidade.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Tese de repercussão geral fixada no Tema 592 do STF (dever de garante sob o prisma do risco administrativo com excludentes)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O STF aplicou a responsabilidade objetiva por quebra do dever de proteção no Tema 592."
      }
    ],
    explicacao: "Gabarito: Certo. No Tema 592 de Repercussão Geral (RE 841.526), o STF fixou a tese: 'Em caso de inobservância do seu dever específico de proteção previsto no art. 5º, inciso XLIX, da CF/88, o Estado é responsável pela morte do detento. Ocorrido o evento danoso dentro do estabelecimento prisional, incumbe ao Estado o ônus de comprovar que o óbito não poderia ter sido evitado por sua atuação diligente, afastando a alegação de culpa exclusiva da vítima quando houver falha de custódia'."
  },
  {
    idSlug: "adm-b5-060",
    disciplina_id: TAXONOMIA.disciplinas.administrativo,
    assunto_id: TAXONOMIA.assuntos.principios_adm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito da responsabilidade do Estado por atos legislativos e jurisdicionais no direito brasileiro, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O Estado responde civilmente por atos jurisdicionais em casos de erro judiciário ou de prisão além do tempo fixado na sentença (art. 5º, LXXV, da CF/88), bem como por atos legislativos que venham a ser declarados inconstitucionais pelo Supremo Tribunal Federal em controle concentrado de constitucionalidade causadores de dano especial e anormal.",
        correta: true,
        explicacao_especifica: "Correta. O art. 5º, LXXV da CF/88 expressamente prevê indenização por erro judiciário e excesso de prisão, e a jurisprudência acolhe indenização por lei inconstitucional causadora de dano concreto."
      },
      {
        letra: "B",
        texto: "O erro judiciário é absolutamente imune a qualquer indenização estatal por força do princípio da soberania dos veredictos.",
        correta: false,
        explicacao_especifica: "Incorreta. A indenização por erro judiciário é expressamente assegurada pelo art. 5º, LXXV da CF/88."
      },
      {
        letra: "C",
        texto: "O juiz togado que profere sentença com base em sua livre convicção motivada responde pessoalmente com seus bens perante o réu absolvido.",
        correta: false,
        explicacao_especifica: "Incorreta. O magistrado só responde regressivamente em caso de dolo ou fraude manifesta (art. 143 do CPC)."
      },
      {
        letra: "D",
        texto: "As leis de efeitos concretos não admitem responsabilização civil do Estado mesmo se ilegais.",
        correta: false,
        explicacao_especifica: "Incorreta. Leis de efeitos concretos equiparam-se a atos administrativos para fins de controle e reparação."
      },
      {
        letra: "E",
        texto: "A responsabilidade por lei inconstitucional independe de nexo de causalidade e prejuízo demonstrado.",
        correta: false,
        explicacao_especifica: "Incorreta. Exige demonstração de dano específico, anormal e nexo causal."
      }
    ],
    explicacao: "Gabarito: A. A regra geral é a irresponsabilidade por atos judiciais típicos e legislativos genéricos válidos. Contudo, o Estado responde civilmente: 1) por erro judiciário e prisão além do tempo (art. 5º, LXXV, CF/88); 2) por dolo ou fraude do magistrado; 3) por leis declaradas inconstitucionais pelo STF que tenham produzido dano concreto; 4) por leis de efeitos concretos que lesem particulares."
  }
];
