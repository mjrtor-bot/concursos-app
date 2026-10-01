import { TAXONOMIA } from "./taxonomia.mjs";

export const legEspecialPart2 = [
  {
    idSlug: "leg-b5-019",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No que concerne à destruição de drogas e plantações ilícitas apreendidas nos termos da Lei nº 11.343/2006 (Lei de Drogas), assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "As plantações ilícitas de drogas serão destruídas imediatamente pelo Delegado de Polícia, guardando-se amostra necessária para a realização do laudo pericial, independentemente de prévia autorização judicial.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos exatos do art. 50-A da Lei nº 11.343/2006 e art. 243, parágrafo único, da CF/88."
      },
      {
        letra: "B",
        texto: "Na hipótese de apreensão de drogas decorrente de flagrante delito, a incineração deve ocorrer no prazo impreterível de 48 horas após a autorização do Ministério Público.",
        correta: false,
        explicacao_especifica: "Incorreta. Em caso de flagrante, a incineração ocorre em até 15 dias (art. 50, § 3º)."
      },
      {
        letra: "C",
        texto: "Na apreensão de drogas sem a prisão de investigados (sem flagrante), a incineração ocorrerá no prazo de até 15 dias a contar da apreensão.",
        correta: false,
        explicacao_especifica: "Incorreta. Sem flagrante, o prazo é de 30 dias (art. 50-A, § 1º)."
      },
      {
        letra: "D",
        texto: "A destruição das drogas prescinde da presença de membro do Ministério Público e da autoridade sanitária.",
        correta: false,
        explicacao_especifica: "Incorreta. A presença do MP e da autoridade sanitária é obrigatória (art. 50, § 3º)."
      },
      {
        letra: "E",
        texto: "Todas as drogas apreendidas devem permanecer guardadas intactas em delegacia até o trânsito em julgado formal da ação penal.",
        correta: false,
        explicacao_especifica: "Incorreta. A lei determina a destruição antecipada mantendo-se amostra pericial suficiente."
      }
    ],
    explicacao: "Gabarito: A. O art. 50-A da Lei nº 11.343/2006 estabelece que: 'A destruição de drogas apreendidas sem a ocorrência de prisão em flagrante será feita por incineração, no prazo máximo de 30 (trinta) dias contados da data da apreensão, guardando-se amostra necessária à realização do laudo definitivo'. Já as plantações ilícitas serão incineradas imediatamente pelo Delegado de Polícia, que guardará amostra necessária para o laudo (art. 50-A c/c art. 32 da Lei 11.343/06)."
  },
  {
    idSlug: "leg-b5-020",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.estatuto_desarmamento,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Os crimes de comércio ilegal de arma de fogo (art. 17) e de tráfico internacional de arma de fogo, acessório ou munição (art. 18 da Lei nº 10.826/2003) são classificados como crimes hediondos pela Lei nº 8.072/1990.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 1º, parágrafo único, incisos II e III, da Lei nº 8.072/1990 (com redação dada pela Lei nº 13.964/2019) classifica expressamente o comércio ilegal (art. 17) e o tráfico internacional de arma (art. 18) como crimes hediondos."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. Ambos os delitos integram o rol dos crimes hediondos no parágrafo único do art. 1º da Lei 8.072/90."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme preceitua o parágrafo único do art. 1º da Lei nº 8.072/1990, consideram-se também hediondos, tentados ou consumados: 'II - o crime de comércio ilegal de armas de fogo, previsto no art. 17 da Lei nº 10.826, de 22 de dezembro de 2003; III - o crime de tráfico internacional de arma de fogo, acessório ou munição, previsto no art. 18 da Lei nº 10.826, de 22 de dezembro de 2003'."
  },
  {
    idSlug: "leg-b5-021",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.organizacoes_criminosas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre o meio de obtenção de prova denominado ação controlada, disciplinado no art. 8º da Lei nº 12.850/2013, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A realização de ação controlada depende de prévia e expressa autorização judicial com parecer obrigatório e vinculante do Ministério Público.",
        correta: false,
        explicacao_especifica: "Incorreta. A ação controlada na Lei 12.850/13 exige prévia comunicação ao juiz competente, não exigindo prévia autorização judicial (art. 8º, § 1º)."
      },
      {
        letra: "B",
        texto: "A ação controlada consiste em retardar a intervenção policial ou administrativa relativa à ação praticada por organização criminosa ou a ela vinculada, desde que mantida sob observação e acompanhamento para que a medida se concretize no momento mais eficaz à formação de provas e obtenção de informações.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos exatos do art. 8º, caput, da Lei nº 12.850/2013."
      },
      {
        letra: "C",
        texto: "A ação controlada pode ser realizada sem qualquer registro ou comunicação judicial até o encerramento completo do processo penal.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 8º, § 1º, impõe prévia comunicação ao juiz competente."
      },
      {
        letra: "D",
        texto: "A ação controlada é exclusiva para crimes cuja pena máxima privativa de liberdade seja superior a doze anos.",
        correta: false,
        explicacao_especifica: "Incorreta. A lei não exige esse patamar de 12 anos para a ação controlada."
      },
      {
        letra: "E",
        texto: "Os policiais que executam a ação controlada respondem penalmente pelo crime de prevaricação pelo simples retardo do flagrante.",
        correta: false,
        explicacao_especifica: "Incorreta. Trata-se de causa legalmente justificada de postergação do flagrante (flagrante retardado/prorrogado)."
      }
    ],
    explicacao: "Gabarito: B. O art. 8º da Lei nº 12.850/2013 conceitua a ação controlada como o retardamento da intervenção policial para momento mais eficaz na colheita probatória e identificação dos membros do grupo criminoso. O § 1º exige apenas a prévia comunicação ao juiz competente (com controle posterior), diferentemente da Lei de Drogas (art. 53, II), que exige autorização judicial prévia."
  },
  {
    idSlug: "leg-b5-022",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "De acordo com a Lei nº 13.869/2019, comete crime de abuso de autoridade a autoridade policial que deixar injustificadamente de comunicar a prisão em flagrante à autoridade judiciária competente no prazo legal de vinte e quatro horas.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos termos do art. 12, inciso I, da Lei nº 13.869/2019."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O tipo do art. 12, I, pune exatamente a omissão injustificada da comunicação da prisão em flagrante ao juiz."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 12, inciso I, da Lei nº 13.869/2019 tipifica expressamente a conduta de 'deixar injustificadamente de comunicar prisão em flagrante à autoridade judiciária no prazo legal', cominando pena de detenção de 6 meses a 2 anos e multa."
  },
  {
    idSlug: "leg-b5-023",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.maria_da_penha,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Segundo a sistemática da Lei Maria da Penha (Lei nº 11.340/2006) sobre as medidas protetivas de urgência deferidas pela autoridade policial (art. 12-C), assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "Verificada a existência de risco atual ou iminente à vida ou integridade física da mulher, o agressor será imediatamente afastado do lar pelo Delegado de Polícia quando o Município não for sede de comarca.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 12-C, inciso II, da Lei nº 11.340/2006, cabendo pelo policial no caso do inciso III se não houver delegado."
      },
      {
        letra: "B",
        texto: "A medida de afastamento aplicada pelo Delegado de Polícia prescinde de comunicação ou homologação pelo Poder Judiciário.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 12-C, § 1º, exige comunicação ao juiz no prazo de 24 horas para decidir sobre a manutenção da medida."
      },
      {
        letra: "C",
        texto: "O afastamento do agressor pelo Delegado de Polícia foi declarado inconstitucional pelo Supremo Tribunal Federal na ADI 6.138.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF julgou expressamente constitucional o art. 12-C na ADI 6.138."
      },
      {
        letra: "D",
        texto: "O afastamento cautelar pelo policial só pode ser aplicado se houver expressa concordância prévia do agressor.",
        correta: false,
        explicacao_especifica: "Incorreta. A medida é cogente e independe de anuência do autor da violência."
      },
      {
        letra: "E",
        texto: "O descumprimento do afastamento imposto pela autoridade policial é penalmente atípico.",
        correta: false,
        explicacao_especifica: "Incorreta. Configura o crime do art. 24-A da Lei 11.340/06."
      }
    ],
    explicacao: "Gabarito: A. O art. 12-C da Lei nº 11.340/2006 estabelece que o agressor será imediatamente afastado do lar ou local de convivência: I - pela autoridade judicial; II - pelo delegado de polícia, quando o Município não for sede de comarca; ou III - pelo policial, quando o Município não for sede de comarca e não houver delegado disponível no momento da denúncia. O STF declarou a constitucionalidade do dispositivo na ADI 6.138."
  },
  {
    idSlug: "leg-b5-024",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.tortura,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No crime de tortura qualificada pelo resultado morte (art. 1º, § 3º, parte final, da Lei nº 9.455/1997), a morte da vítima decorre necessariamente de culpa em sentido estrito (crime preterdoloso), pois, se o agente torturou com o dolo direto ou eventual de matar, responderá por homicídio qualificado pela tortura (art. 121, § 2º, III, do Código Penal).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O tipo do art. 1º, § 3º, 2ª parte, da Lei 9.455/97 é preterdoloso (dolo na tortura e culpa na morte). Havendo dolo de matar, tipifica-se o homicídio qualificado pela tortura no CP."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. A distinção entre tortura qualificada pela morte (preterdolosa) e homicídio qualificado pelo emprego de tortura (doloso na morte) é pacífica na doutrina e jurisprudência."
      }
    ],
    explicacao: "Gabarito: Certo. A figura da tortura qualificada pelo resultado morte (art. 1º, § 3º, in fine, da Lei nº 9.455/1997) ostenta natureza de crime preterdoloso: o agente atua com dolo no ato de torturar e provoca a morte da vítima a título de culpa. Caso o agente queira o resultado morte ou assuma o risco de produzi-lo (dolo direto ou eventual de homicídio), o crime será de homicídio qualificado pela tortura (art. 121, § 2º, III, CP), de competência do Tribunal do Júri."
  },
  {
    idSlug: "leg-b5-025",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O agente que colabora, como informante, com grupo, organização ou associação destinados ao tráfico ilícito de entorpecentes (art. 37 da Lei nº 11.343/2006):",
    alternativas: [
      {
        letra: "A",
        texto: "Pratica crime subsidiário que somente se aplica se ele não integrar a organização criminosa ou associação como membro estável.",
        correta: true,
        explicacao_especifica: "Correta. O art. 37 traz a elementar 'sem integrar ou constituir a organização', ostentando natureza expressamente subsidiária em relação ao art. 35."
      },
      {
        letra: "B",
        texto: "Responde obrigatoriamente pelas mesmas penas do art. 33, caput (tráfico de drogas), em concurso material com associação para o tráfico.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 37 possui tipo penal autônomo com pena mais branda (reclusão de 2 a 6 anos)."
      },
      {
        letra: "C",
        texto: "Fica isento de pena se a informação repassada não evitar a prisão de nenhum traficante.",
        correta: false,
        explicacao_especifica: "Incorreta. O crime é formal e consuma-se com o repasse da informação."
      },
      {
        letra: "D",
        texto: "Comete infração penal de menor potencial ofensivo sujeita à transação penal nos termos da Lei nº 9.099/1995.",
        correta: false,
        explicacao_especifica: "Incorreta. A pena de 2 a 6 anos de reclusão afasta a Lei 9.099/95."
      },
      {
        letra: "E",
        texto: "Pratica contravenção penal especial de violação de sigilo da segurança pública.",
        correta: false,
        explicacao_especifica: "Incorreta. Trata-se de crime formal expressamente tipificado na Lei de Drogas."
      }
    ],
    explicacao: "Gabarito: A. O art. 37 da Lei nº 11.343/2006 tipifica a conduta de 'Conseguir, guardar, transportar ou fornecer informação, como informante, com grupo, organização ou associação destinados à prática de qualquer dos crimes previstos nos arts. 33, caput e § 1º, e 34 desta Lei'. Por expressa dicção legal, trata-se de tipo subsidiário que pressupõe que o informante (fogueteiro, olheiro) atue externamente, sem integrar formalmente o grupo ou associação criminosa."
  },
  {
    idSlug: "leg-b5-026",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.estatuto_desarmamento,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Segundo a jurisprudência dominante do Superior Tribunal de Justiça e do Supremo Tribunal Federal, o porte de munição de uso permitido desacompanhada da respectiva arma de fogo é, em regra, conduta típica configuradora de crime de perigo abstrato, admitindo-se o princípio da insignificância apenas em situações excepcionalíssimas de apreensão de quantidade ínfima e ausência de arma ao alcance do agente.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STJ (jurisprudência em teses e precedentes da 5ª e 6ª Turmas) e o STF afirmam que o porte de munição é crime de perigo abstrato, cabendo insignificância apenas em casos excepcionalíssimos."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O enunciado reproduz com exatidão a orientação jurisprudencial vinculante dos Tribunais Superiores."
      }
    ],
    explicacao: "Gabarito: Certo. A jurisprudência consolidada do STJ e do STF estabelece que o crime de posse/porte de munição (arts. 12, 14 e 16 da Lei nº 10.826/2003) é de perigo abstrato e de mera conduta, tutelando a segurança e a incolumidade pública. Excepcionalmente, quando apreendida pequena/ínfima quantidade de munição desacompanhada de arma e sem qualquer contexto de violência, admite-se a atipicidade material com base no princípio da insignificância."
  },
  {
    idSlug: "leg-b5-027",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos termos da Lei nº 13.869/2019, assinale a conduta que configura crime de abuso de autoridade.",
    alternativas: [
      {
        letra: "A",
        texto: "Prosseguir com o interrogatório de pessoa que tenha decidido exercer o direito ao silêncio ou de pessoa que tenha optado por ser assistida por advogado ou defensor público, sem a presença de seu patrono.",
        correta: true,
        explicacao_especifica: "Correta. É o tipo penal expresso do art. 15, parágrafo único, inciso I e II, da Lei nº 13.869/2019."
      },
      {
        letra: "B",
        texto: "Indiciar suspeito em inquérito policial com base em fundada suspeita após a colheita de depoimentos e laudos periciais preliminares.",
        correta: false,
        explicacao_especifica: "Incorreta. O indiciamento fundamentado é ato regular de atribuição policial."
      },
      {
        letra: "C",
        texto: "Executar mandado de prisão preventiva expedido por juiz competente no período diurno.",
        correta: false,
        explicacao_especifica: "Incorreta. O cumprimento de ordem judicial legal é estrito cumprimento do dever legal."
      },
      {
        letra: "D",
        texto: "Interpretar dispositivo legal divergindo de entendimento isolado de parecerista doutrinário.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 1º, § 2º, expressamente veda punir a divergência interpretativa (crime de hermenêutica)."
      },
      {
        letra: "E",
        texto: "Determinar a realização de perícia grafotécnica requerida pela defesa em inquérito policial.",
        correta: false,
        explicacao_especifica: "Incorreta. O deferimento de perícia pela autoridade é ato legal e legítimo."
      }
    ],
    explicacao: "Gabarito: A. O art. 15, parágrafo único, da Lei nº 13.869/2019 estabelece que incorre na mesma pena do caput (detenção de 1 a 4 anos e multa) quem: 'I - prossegue com o interrogatório: a) de pessoa que tenha decidido exercer o direito ao silêncio; ou b) de pessoa que tenha optado por ser assistida por advogado ou defensor público, sem a presença de seu patrono'."
  },
  {
    idSlug: "leg-b5-028",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.maria_da_penha,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Configura violência patrimonial nos termos da Lei Maria da Penha (art. 7º, IV, da Lei nº 11.340/2006) qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos da mulher.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É a redação literal do art. 7º, inciso IV, da Lei nº 11.340/2006."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O enunciado transcreve fielmente a definição de violência patrimonial da Lei Maria da Penha."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme preceitua o art. 7º, IV, da Lei nº 11.340/2006, a violência patrimonial é entendida como 'qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos, incluindo os destinados a satisfazer suas necessidades'."
  },
  {
    idSlug: "leg-b5-029",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lavagem_dinheiro,
    banca_nome: "FGV",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No tocante às fases doutrinárias do processo de lavagem de capitais (money laundering), assinale a opção que descreve corretamente a etapa da ocultação ou dissimulação (layering/estratificação).",
    alternativas: [
      {
        letra: "A",
        texto: "Consiste na introdução física inicial dos recursos ilícitos no sistema financeiro, normalmente mediante depósitos fracionados (smurfing) em contas bancárias diversas.",
        correta: false,
        explicacao_especifica: "Incorreta. Esta é a fase de colocação (placement)."
      },
      {
        letra: "B",
        texto: "Consiste na realização de múltiplas, complexas e sucessivas transações financeiras, transferências internacionais e negócios fictícios destinados a dificultar o rastreamento da origem ilícita e romper a cadeia de evidências dos fundos.",
        correta: true,
        explicacao_especifica: "Correta. Descreve com perfeição a fase de ocultação, dissimulação ou estratificação (layering)."
      },
      {
        letra: "C",
        texto: "Consiste no investimento formal dos recursos, já com aparência lícita definitiva, na economia formal, por meio de aquisição de imóveis, empresas comerciais ou participações societárias.",
        correta: false,
        explicacao_especifica: "Incorreta. Esta é a fase final de integração (integration)."
      },
      {
        letra: "D",
        texto: "Consiste na prisão em flagrante dos membros da organização criminosa pela autoridade policial.",
        correta: false,
        explicacao_especifica: "Incorreta. Fases da lavagem são etapas financeiras do delito, não atos processuais."
      },
      {
        letra: "E",
        texto: "Consiste na confissão espontânea perante o Conselho de Controle de Atividades Financeiras (COAF).",
        correta: false,
        explicacao_especifica: "Incorreta. O COAF é órgão de inteligência financeira, não etapa do crime."
      }
    ],
    explicacao: "Gabarito: B. O processo de lavagem de dinheiro desdobra-se classicamente em três fases: 1) Colocação (placement) - introdução dos ativos no sistema econômico; 2) Ocultação/Estratificação (layering/dissimulação) - sucessão de operações financeiras complexas para apagar o rastro da origem criminosa; e 3) Integração (integration) - incorporação formal dos bens à economia como se fossem oriundos de fontes legítimas."
  },
  {
    idSlug: "leg-b5-030",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_hediondos,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O crime de estupro de vulnerável (art. 217-A do CP) integra o rol dos crimes hediondos da Lei nº 8.072/1990, e a comprovação da vulnerabilidade da vítima menor de 14 anos é de caráter absoluto, sendo juridicamente irrelevante o consentimento da vítima ou eventual experiência sexual anterior.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos termos do art. 1º, VI, da Lei 8.072/90, art. 217-A, § 5º, do CP e Súmula 593 do STJ."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O estupro de vulnerável é hediondo e a vulnerabilidade do menor de 14 anos é absoluta segundo a Súmula 593 do STJ."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 1º, inciso VI, da Lei nº 8.072/1990 inclui expressamente o estupro de vulnerável no rol dos crimes hediondos. Ademais, a Súmula nº 593 do STJ dispõe expressamente: 'O crime de estupro de vulnerável se configura com a conjunção carnal ou outro ato libidinoso praticado contra menor de 14 anos, sendo irrelevante o eventual consentimento da vítima para o ato, sua experiência sexual anterior ou existência de relacionamento amoroso com o agente'."
  },
  {
    idSlug: "leg-b5-031",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.estatuto_crianca_adolescente,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos crimes sexuais praticados contra crianças e adolescentes pela internet ou redes de computadores, a infiltração de agentes de polícia na internet (art. 190-A do ECA, incluído pela Lei nº 13.441/2017):",
    alternativas: [
      {
        letra: "A",
        texto: "Depende de autorização judicial expressa e fundamentada, que estabelecerá os limites da infiltração e terá prazo de até noventa dias, renovável desde que o total não exceda a setecentos e vinte dias.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 190-A, caput e § 2º, do ECA."
      },
      {
        letra: "B",
        texto: "Pode ser determinada diretamente pelo Ministério Público sem qualquer necessidade de decisão judicial.",
        correta: false,
        explicacao_especifica: "Incorreta. A infiltração submete-se à cláusula de reserva de jurisdição (art. 190-A ECA)."
      },
      {
        letra: "C",
        texto: "Tem prazo máximo e improrrogável de trinta dias sob pena de nulidade absoluta dos relatórios.",
        correta: false,
        explicacao_especifica: "Incorreta. O prazo inicial é de até 90 dias renovável até o limite de 720 dias."
      },
      {
        letra: "D",
        texto: "Não admite o uso de identidade fictícia pelo policial infiltrado na rede mundial de computadores.",
        correta: false,
        explicacao_especifica: "Incorreta. O uso de identidade policial fictícia é da própria essência da infiltração virtual."
      },
      {
        letra: "E",
        texto: "Autoriza o policial a induzir ou instigar qualquer cidadão a produzir material pornográfico infantil inocente.",
        correta: false,
        explicacao_especifica: "Incorreta. É vedado o flagrante provocado ou induzido ilegalmente (Súmula 145 STF)."
      }
    ],
    explicacao: "Gabarito: A. O art. 190-A do ECA (Lei nº 8.069/1990) estabelece que a infiltração virtual de agentes de polícia será autorizada judicialmente, em decisão motivada, pelo prazo de até 90 (noventa) dias, prorrogável sucessivamente desde que motivada a necessidade e que o total não exceda a 720 (setecentos e vinte) dias."
  },
  {
    idSlug: "leg-b5-032",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de tráfico ilícito de entorpecentes (art. 33, caput, da Lei nº 11.343/2006) é delito de ação múltipla (conteúdo variado), consumando-se com a prática de qualquer uma das dezoito condutas típicas previstas no preceito primário, tais como transportar, trazer consigo, guardar ou entregar a consumo, prescindindo de comprovação de efetiva mercancia onerosa.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 33 da Lei de Drogas possui 18 verbos nucleares e é crime plurinuclear ou de ação múltipla, consumando-se com qualquer dos verbos mesmo a título gratuito."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O tráfico não exige lucro ou venda concretizada para sua consumação integral."
      }
    ],
    explicacao: "Gabarito: Certo. O tipo penal do art. 33 da Lei nº 11.343/2006 é classificado como crime de ação múltipla ou de conteúdo variado, contando com 18 verbos nucleares (como importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar a consumo ou fornecer). A prática de qualquer dessas condutas consuma o crime, mesmo que a entrega ocorra de forma gratuita (sem contraprestação pecuniária)."
  },
  {
    idSlug: "leg-b5-033",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.estatuto_desarmamento,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito das alterações normativas nos calibres de armas de fogo operadas pelo Decreto Federal nº 11.615/2023 no âmbito do Estatuto do Desarmamento, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "As armas de fogo de calibre 9x19mm Parabellum, .40 S&W e .45 ACP retornaram à classificação de armas de fogo de uso restrito para aquisição civil comum.",
        correta: true,
        explicacao_especifica: "Correta. O Decreto nº 11.615/2023 redefiniu os parâmetros de energia cinética (limite de 1.200 joules na saída do cano para uso permitido), retornando os calibres 9mm, .40 e .45 à categoria de uso restrito."
      },
      {
        letra: "B",
        texto: "Todas as armas curtas e revólveres de qualquer calibre passaram a ser classificados como armas de fogo de uso proibido.",
        correta: false,
        explicacao_especifica: "Incorreta. Revólveres de calibre .38 SPL e pistolas .380 ACP continuam de uso permitido."
      },
      {
        letra: "C",
        texto: "O porte de arma de fogo de uso restrito foi integralmente despenalizado para cidadãos comuns.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 16 da Lei 10.826/03 pune severamente com reclusão de 3 a 6 anos e multa."
      },
      {
        letra: "D",
        texto: "O porte de arma com silenciador acoplado é conduta equiparada à posse de arma de uso permitido.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 16, § 1º, II, pune o porte de acessório restrito/proibido como crime equiparado ao art. 16."
      },
      {
        letra: "E",
        texto: "Os calibres .380 Auto e .38 SPL foram reclassificados como de uso proibido pelo novo regulamento.",
        correta: false,
        explicacao_especifica: "Incorreta. Calibres .380 e .38 permanecem como armas de uso permitido."
      }
    ],
    explicacao: "Gabarito: A. Com a edição do Decreto nº 11.615/2023, o Poder Executivo restabeleceu o critério da energia cinética de até 1.200 joules para a caracterização das armas de fogo de uso permitido. Com isso, os calibres 9mm, .40 S&W e .45 ACP voltaram a ser qualificados como de uso restrito, mantendo-se calibres como o .380 ACP e o .38 SPL na categoria de uso permitido."
  },
  {
    idSlug: "leg-b5-034",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Nos crimes de abuso de autoridade previstos na Lei nº 13.869/2019, a ação penal é pública incondicionada; todavia, admite-se a ação penal privada subsidiária da pública caso o Ministério Público não ofereça denúncia ou não promova o arquivamento no prazo legal.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos exatos termos do art. 3º, caput e § 1º, da Lei nº 13.869/2019 c/c art. 29 do CPP e art. 5º, LIX, da CF/88."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 3º da Lei 13.869/19 expressamente consagra a ação penal pública incondicionada e a ação penal privada subsidiária."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 3º da Lei nº 13.869/2019 estabelece expressamente: 'Os crimes previstos nesta Lei são de ação penal pública incondicionada'. O § 1º complementa: 'Será admitida ação privada se a ação penal pública não for intentada no prazo legal, cabendo ao Ministério Público aditar a queixa, repudiá-la e oferecer denúncia substitutiva, intervir em todos os termos do processo, fornecer elementos de prova, interpor recurso e, a todo tempo, no caso de negligência do querelante, retomar a ação como parte principal'."
  },
  {
    idSlug: "leg-b5-035",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.organizacoes_criminosas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O agente que impede ou, de qualquer forma, embaraça a investigação de infração penal que envolva organização criminosa (art. 2º, § 1º, da Lei nº 12.850/2013):",
    alternativas: [
      {
        letra: "A",
        texto: "Incorre nas mesmas penas cominadas ao crime de promover, constituir, financiar ou integrar organização criminosa (reclusão de 3 a 8 anos e multa).",
        correta: true,
        explicacao_especifica: "Correta. Nos termos exatos do art. 2º, § 1º, da Lei nº 12.850/2013."
      },
      {
        letra: "B",
        texto: "Pratica mera infração administrativa sujeita exclusivamente à sanção disciplinar funcional.",
        correta: false,
        explicacao_especifica: "Incorreta. É crime autônomo punido com reclusão de 3 a 8 anos."
      },
      {
        letra: "C",
        texto: "Responde unicamente pelo crime de favorecimento pessoal tipificado no art. 348 do Código Penal.",
        correta: false,
        explicacao_especifica: "Incorreta. O tipo do art. 2º, § 1º, é especial e prevalece sobre o favorecimento pessoal."
      },
      {
        letra: "D",
        texto: "Só pode ser punido caso a investigação criminal tenha sido concluída com a condenação transitada em julgado de todos os líderes da organização.",
        correta: false,
        explicacao_especifica: "Incorreta. O crime é formal e independe do desfecho condenatório final do processo principal."
      },
      {
        letra: "E",
        texto: "Fica isento de pena se a obstrução for praticada por advogado no exercício regular do mandato defensivo.",
        correta: false,
        explicacao_especifica: "Incorreta. A imunidade profissional não alberga atos criminosos de obstrução e embaraço ilícito."
      }
    ],
    explicacao: "Gabarito: A. O art. 2º, § 1º, da Lei nº 12.850/2013 prescreve que: 'Nas mesmas penas incorre quem impede ou, de qualquer forma, embaraça a investigação de infração penal que envolva organização criminosa' (pena de reclusão de 3 a 8 anos e multa, sem prejuízo das penas correspondentes às demais infrações penais praticadas)."
  },
  {
    idSlug: "leg-b5-036",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_transito,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O crime de participação em corrida, disputa ou competição automobilística não autorizada em via pública (racha - art. 308 do CTB) é qualificado pelo resultado morte se da prática resultar morte culposa da vítima, sendo punido com pena de reclusão de cinco a dez anos.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos termos exatos do art. 308, § 2º, do CTB (incluído pela Lei nº 12.971/2014)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 308, § 2º, do CTB comina pena de 5 a 10 anos de reclusão para a morte culposa no racha."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme preceitua o art. 308, § 2º, do Código de Trânsito Brasileiro: 'Se da prática da conduta prevista no caput resulta morte, e as circunstâncias demonstram que o agente não quis o resultado nem assumiu o risco de produzi-lo, a pena privativa de liberdade é de reclusão de 5 (cinco) a 10 (dez) anos, sem prejuízo das outras sanções previstas neste artigo'."
  }
];
