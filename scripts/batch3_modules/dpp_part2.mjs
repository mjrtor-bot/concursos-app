import { TAXONOMIA } from "./taxonomia.mjs";

export const chunk2 = [
  // 016 - Prisões Cautelares (M/E)
  {
    idSlug: "batch3-dpp-016",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "FGV",
    orgao_nome: "PC-RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Investigado primário e com bons antecedentes cometeu crime doloso de receptação simples (art. 180, caput, do Código Penal, punido com pena de reclusão de 1 a 4 anos). No curso do inquérito, o Ministério Público requereu a decretação de sua prisão preventiva invocando a garantia da ordem pública com base no aumento das ocorrências de furto na região. Sobre as condições de admissibilidade e os pressupostos da prisão preventiva previstos nos arts. 312 e 313 do CPP, assinale a afirmativa correta:",
    explicacao: "GABARITO: C. O art. 313, I do CPP estabelece que será admitida a decretação da prisão preventiva nos crimes dolosos punidos com pena privativa de liberdade máxima superior a 4 anos. Sendo a pena máxima da receptação simples de exatamente 4 anos, e tratando-se de réu primário e sem envolvimento em violência doméstica/vulnerável, é incabível a preventiva pelo não preenchimento do requisito objetivo do art. 313, I.",
    alternativas: [
      {
        letra: "A",
        texto: "A prisão preventiva é juridicamente cabível, haja vista que a garantia da ordem pública é pressuposto autônomo que dispensa os limites de pena cominada previstos no art. 313 do CPP.",
        correta: false,
        explicacao_especifica: "A decretação da preventiva exige o preenchimento cumulativo dos pressupostos/fundamentos do art. 312 e de ao menos uma das hipóteses de admissibilidade do art. 313 do CPP."
      },
      {
        letra: "B",
        texto: "A prisão preventiva poderá ser decretada caso a autoridade policial fundamente a gravidade abstrata do crime e a comoção social gerada pelos delitos patrimoniais na localidade.",
        correta: false,
        explicacao_especifica: "A gravidade abstrata e o clamor público não constituem motivação idônea para a custódia cautelar (art. 315, § 2º CPP)."
      },
      {
        letra: "C",
        texto: "A prisão preventiva é manifestamente incabível nessa hipótese, uma vez que o delito de receptação simples comina pena máxima privativa de liberdade não superior a 4 anos e o investigado é primário.",
        correta: true,
        explicacao_especifica: "Exata aplicação do art. 313, I do CPP, que exige pena máxima superior a 4 anos para não reincidentes."
      },
      {
        letra: "D",
        texto: "O magistrado pode decretar a prisão preventiva de ofício caso constate que o investigado não possui ocupação lícita comprovada nos autos.",
        correta: false,
        explicacao_especifica: "É expressamente vedada a decretação de preventiva ex officio (arts. 282, § 2º e 311 CPP)."
      },
      {
        letra: "E",
        texto: "O descumprimento do requisito do art. 313 do CPP pode ser suprido pela imposição direta de prisão temporária por prazo indeterminado.",
        correta: false,
        explicacao_especifica: "A prisão temporária possui rol taxativo na Lei 7.960/89 (que não inclui receptação) e prazo estritamente determinado."
      }
    ]
  },

  // 017 - Prisões Cautelares (C/E)
  {
    idSlug: "batch3-dpp-017",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Após o advento da Lei nº 13.964/2019 (Pacote Anticrime), que alterou substancialmente a redação dos arts. 282, § 2º e 311 do Código de Processo Penal, foi suprimida a possibilidade de decretação de prisão preventiva de ofício pelo magistrado em qualquer fase da persecução penal, exigindo-se sempre a prévia e formal provocação por meio de representação da autoridade policial ou de requerimento do Ministério Público, do querelante ou do assistente de acusação.",
    explicacao: "GABARITO: CERTO. Art. 311 do CPP: 'Em qualquer fase da investigação policial ou do processo penal, caberá a prisão preventiva decretada pelo juiz, a requerimento do Ministério Público, do querelante ou do assistente, ou por representação da autoridade policial'. A Lei 13.964/2019 extirpou a expressão 'de ofício' que constava na redação anterior para a fase processual, consolidando a vedação absoluta de decretação ex officio no sistema acusatório (STF HC 188.888 e STJ RHC 131.263).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A lei e a jurisprudência consolidada dos Tribunais Superiores vedam a decretação de prisão preventiva de ofício em qualquer fase (investigativa ou judicial)."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A proposição está correta. O juiz não pode mais decretar prisão preventiva sem prévio requerimento ou representação."
      }
    ]
  },

  // 018 - Prisões Cautelares (M/E)
  {
    idSlug: "batch3-dpp-018",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "FCC",
    orgao_nome: "PC-AP",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Ao julgar as Ações Diretas de Inconstitucionalidade nº 3.360/DF e nº 4.109/DF, o Supremo Tribunal Federal fixou interpretação conforme a Constituição sobre os requisitos para a decretação da prisão temporária (Lei nº 7.960/1989). De acordo com a tese fixada pelo Pretório Excelso, a prisão temporária só é constitucionalmente válida quando preencher cumulativamente cinco requisitos, entre os quais se destaca:",
    explicacao: "GABARITO: A. No julgamento das ADIs 3360 e 4109, o STF fixou que a prisão temporária exige cumulativamente: 1) imprescindibilidade para as investigações policiais (art. 1º, I); 2) fundadas razões de autoria ou participação em um dos crimes taxativos do art. 1º, III; 3) justificação em fatos novos ou contemporâneos; 4) demonstração de que medidas cautelares diversas são insuficientes/inadequadas; 5) vedação de decretação de ofício pelo magistrado.",
    alternativas: [
      {
        letra: "A",
        texto: "A imprescindibilidade para as investigações do inquérito policial cumulada com a presença de fundadas razões de autoria em crime do rol taxativo da lei, justificação em fatos contemporâneos e demonstração da inadequação de medidas cautelares alternativas.",
        correta: true,
        explicacao_especifica: "Reflete com precisão os 5 critérios cumulativos fixados pelo Plenário do STF nas ADIs 3360 e 4109."
      },
      {
        letra: "B",
        texto: "A simples constatação de que o indiciado não tem residência fixa ou não forneceu elementos para esclarecer sua identidade, independentemente da gravidade do delito investigado.",
        correta: false,
        explicacao_especifica: "O STF vedou a utilização isolada do inciso II (falta de residência fixa) como fundamento autônomo para a prisão temporária."
      },
      {
        letra: "C",
        texto: "A faculdade conferida ao juiz de decretar a prisão temporária de ofício na hipótese de crimes hediondos de repercussão na mídia local.",
        correta: false,
        explicacao_especifica: "O STF reafirmou expressamente a inconstitucionalidade de qualquer decretação de prisão temporária ex officio."
      },
      {
        letra: "D",
        texto: "A possibilidade de aplicação analógica e extensiva do rol de crimes previstos no art. 1º, inciso III, para abranger qualquer crime punido com reclusão.",
        correta: false,
        explicacao_especifica: "O rol de crimes do art. 1º, III da Lei 7.960/89 é estritamente taxativo (numerus clausus), vedada analogia in malam partem."
      },
      {
        letra: "E",
        texto: "A decretação automática pelo prazo inicial de 60 dias sempre que a apuração envolver organizações criminosas armadas.",
        correta: false,
        explicacao_especifica: "Os prazos são de 5 dias (crimes comuns) ou 30 dias (crimes hediondos/equiparados), não existindo prazo automático de 60 dias."
      }
    ]
  },

  // 019 - Prisões Cautelares (C/E)
  {
    idSlug: "batch3-dpp-019",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Distrito Federal (PC-DF)",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O art. 316, parágrafo único, do Código de Processo Penal determina que o órgão emissor da decisão que decretar a prisão preventiva deverá revisar a necessidade de sua manutenção a cada noventa dias, mediante decisão fundamentada, de ofício. Conforme entendimento pacificado pelo Supremo Tribunal Federal no julgamento do HC 191.836/SP e ratificado pelo STJ, o mero transcurso do prazo de 90 dias sem a reavaliação judicial periódica não opera a revogação automática da prisão preventiva nem confere ao custodiado o direito incontinenti à soltura, devendo o tribunal ou órgão competente instar o juiz do feito a apreciar motivadamente a manutenção da medida.",
    explicacao: "GABARITO: CERTO. STF (HC 191.836/SP, Plenário) e STJ (Súmula e jurisprudência vinculante): a ausência de revisão da prisão preventiva no prazo de 90 dias previsto no art. 316, parágrafo único, do CPP não gera a soltura automática do preso, devendo a autoridade judicial ser provocada a emitir pronunciamento fundamentado sobre a subsistência dos motivos da cautelar.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A não observância do prazo de 90 dias não acarreta a soltura automática do preso preventivo, cabendo apenas a determinação para que o magistrado reexamine o caso."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. O Pleno do STF afastou expressamente a tese de revogação/relaxamento automático por decurso do prazo de 90 dias."
      }
    ]
  },

  // 020 - Prisões Cautelares (M/E)
  {
    idSlug: "batch3-dpp-020",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "VUNESP",
    orgao_nome: "PC-SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em consonância com as normas do Código de Processo Penal (arts. 318 e 318-A) e as diretrizes do STF firmadas no HC Coletivo nº 143.641/SP, a prisão preventiva imposta à mulher gestante ou mãe/responsável por criança de até 12 anos de idade incompletos será substituída por prisão domiciliar, SALVO se:",
    explicacao: "GABARITO: D. Art. 318-A do CPP: 'A prisão preventiva imposta à mulher gestante ou que for mãe ou responsável por crianças ou pessoas com deficiência será substituída por prisão domiciliar, desde que: I - não tenha cometido crime com violência ou grave ameaça a pessoa; II - não tenha cometido o crime contra seu filho ou dependente'.",
    alternativas: [
      {
        letra: "A",
        texto: "O crime imputado for patrimonial sem violência e a mulher ostentar antecedentes criminais.",
        correta: false,
        explicacao_especifica: "A primariedade não é requisito absoluto expresso do art. 318-A, sendo cabível a domiciliar em crimes sem violência/grave ameaça."
      },
      {
        letra: "B",
        texto: "O filho menor de 12 anos residir com o pai ou outros familiares na mesma habitação.",
        correta: false,
        explicacao_especifica: "A presença de outros parentes não elide o direito à convivência materna nos termos do HC 143.641 do STF."
      },
      {
        letra: "C",
        texto: "A mulher responder a outro processo criminal por crime culposo de trânsito.",
        correta: false,
        explicacao_especifica: "A pendência de ação por crime culposo não impede a substituição da preventiva por domiciliar."
      },
      {
        letra: "D",
        texto: "O crime tiver sido cometido mediante violência ou grave ameaça a pessoa ou praticado contra seu próprio filho ou dependente.",
        correta: true,
        explicacao_especifica: "Exatas vedações legais previstas nos incisos I e II do art. 318-A do CPP e na jurisprudência do STF."
      },
      {
        letra: "E",
        texto: "A presa manifestar desinteresse em ser transferida para o regime de monitoração eletrônica.",
        correta: false,
        explicacao_especifica: "A imposição de cautelar de monitoração eletrônica decorre do poder-dever do juiz e não da concordância da ré."
      }
    ]
  },

  // 021 - Prisões Cautelares (C/E)
  {
    idSlug: "batch3-dpp-021",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Nos termos do art. 322 do Código de Processo Penal, a autoridade policial somente poderá conceder fiança nos casos de infração penal cuja pena privativa de liberdade máxima não seja superior a quatro anos; nos demais casos, a concessão de fiança será de competência exclusiva do juiz, que decidirá sobre o pleito no prazo legal de quarenta e oito horas.",
    explicacao: "GABARITO: CERTO. Art. 322 do CPP: 'A autoridade policial somente poderá conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a 4 (quatro) anos. Parágrafo único. Nos demais casos, a fiança será requerida ao juiz, que decidirá em 48 (quarenta e oito) horas'.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A competência do Delegado para arbitrar fiança restringe-se a crimes com pena máxima de até 4 anos; acima disso, compete ao magistrado decidir em 48h."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo, pois descreve fielmente a regra de competência e o prazo estabelecidos no art. 322 e seu parágrafo único do CPP."
      }
    ]
  },

  // 022 - Prisões Cautelares (M/E)
  {
    idSlug: "batch3-dpp-022",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "IBFC",
    orgao_nome: "PC-BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O Código de Processo Penal prevê um rol diversificado de medidas cautelares alternativas à prisão preventiva, regidas pelos princípios da necessidade e adequação (art. 282). Dentre as medidas cautelares expressamente contempladas no art. 319 do CPP, assinale a opção que apresenta hipótese legal:",
    explicacao: "GABARITO: E. Art. 319, IX do CPP: 'monitoração eletrônica'; art. 319, VI: 'suspensão do exercício de função pública ou de atividade de natureza econômica ou financeira quando houver justo receio de sua utilização para a prática de infrações penais'. As demais alternativas apresentam medidas inexistentes ou inconstitucionais.",
    alternativas: [
      {
        letra: "A",
        texto: "Interdição temporária de direitos políticos e perda sumária de cargo público em caráter definitivo.",
        correta: false,
        explicacao_especifica: "Perda definitiva de cargo é efeito condenatório da sentença transitada em julgado (art. 92 CP), e não medida cautelar."
      },
      {
        letra: "B",
        texto: "Trabalho forçado em obras de infraestrutura pública sob supervisão policial.",
        correta: false,
        explicacao_especifica: "A Constituição Federal veda expressamente penas ou medidas de trabalhos forçados (art. 5º, XLVII, c)."
      },
      {
        letra: "C",
        texto: "Bloqueio automático de todas as contas bancárias de parentes de até segundo grau do indiciado.",
        correta: false,
        explicacao_especifica: "Viola a intranscendência da pena/medida cautelar pessoal (art. 5º, XLV CF)."
      },
      {
        letra: "D",
        texto: "Condução coercitiva diária à delegacia de polícia para assinatura de termo de presença.",
        correta: false,
        explicacao_especifica: "A medida legal é o comparecimento periódico em juízo (art. 319, I CPP), e não condução coercitiva diária."
      },
      {
        letra: "E",
        texto: "Suspensão do exercício de função pública ou de atividade de natureza econômica quando houver justo receio de sua utilização para a prática de infrações penais, e monitoração eletrônica.",
        correta: true,
        explicacao_especifica: "Exatas medidas cautelares previstas nos incisos VI e IX do art. 319 do CPP."
      }
    ]
  },

  // 023 - Prisões Cautelares (C/E)
  {
    idSlug: "batch3-dpp-023",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Segundo o art. 301 do Código de Processo Penal, qualquer do povo poderá e as autoridades policiais e seus agentes deverão prender quem quer que seja encontrado em flagrante delito. Tratando-se de crime permanente (como o sequestro e o tráfico de drogas na modalidade ter em depósito), entende-se o agente em flagrante delito enquanto não cessar a permanência (art. 303 do CPP).",
    explicacao: "GABARITO: CERTO. Art. 301 do CPP (flagrante facultativo para populares e obrigatório/compulsório para policiais) c/c art. 303 do CPP ('Nas infrações permanentes, entende-se o agente em flagrante delito enquanto não cessar a permanência').",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A assertiva combina perfeitamente o dever funcional de prender em flagrante (art. 301) com a extensão temporal do flagrante em crimes permanentes (art. 303 CPP)."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. A legislação processual estabelece o dever de agir dos policiais e a manutenção do estado de flagrância durante a permanência delitiva."
      }
    ]
  },

  // 024 - Prisões Cautelares (M/E)
  {
    idSlug: "batch3-dpp-024",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "AOCP",
    orgao_nome: "PC-GO",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito do princípio da presunção de inocência (art. 5º, LVII da CF/88), da execução provisória da pena e da jurisprudência consolidada do Supremo Tribunal Federal, assinale a opção correta:",
    explicacao: "GABARITO: B. Nas ADCs 43, 44 e 54, o STF declarou que a execução provisória da pena após condenação em segunda instância viola o princípio da presunção de inocência, exigindo o trânsito em julgado. Todavia, no julgamento do Tema 1.068 de Repercussão Geral (RE 1.235.340), o Plenário do STF fixou a tese de que a soberania dos veredictos do Tribunal do Júri (art. 5º, XXXVIII, c da CF) autoriza a execução imediata da condenação imposta pelo Conselho de Sentença, independentemente do total da pena aplicada.",
    alternativas: [
      {
        letra: "A",
        texto: "A condenação em segunda instância autoriza a expedição automática de mandado de prisão para início do cumprimento da pena em qualquer rito processual comum.",
        correta: false,
        explicacao_especifica: "O STF fixou nas ADCs 43, 44 e 54 que a execução penal no rito comum exige o trânsito em julgado da sentença condenatória."
      },
      {
        letra: "B",
        texto: "A soberania dos veredictos do Tribunal do Júri autoriza a execução imediata da condenação imposta pelo Conselho de Sentença, independentemente da quantidade de pena aplicada.",
        correta: true,
        explicacao_especifica: "Tese fixada pelo STF no Tema 1.068 de Repercussão Geral (STF RE 1.235.340/MG)."
      },
      {
        letra: "C",
        texto: "A prisão preventiva só pode ser decretada se houver condenação confirmada por órgão colegiado de segundo grau.",
        correta: false,
        explicacao_especifica: "A prisão preventiva é de natureza cautelar e pode ser decretada a qualquer tempo durante o inquérito ou a instrução penal se presentes os requisitos do art. 312 do CPP."
      },
      {
        letra: "D",
        texto: "A interposição de recurso especial ou extraordinário tem efeito suspensivo automático e impede a decretação de qualquer medida cautelar prisional.",
        correta: false,
        explicacao_especifica: "Os recursos excepcionais (REsp e RE) não possuem efeito suspensivo ope legis e não impedem a decretação de prisão de natureza estritamente cautelar."
      },
      {
        letra: "E",
        texto: "O réu absolvido em primeira instância não poderá, em hipótese alguma, ter sua prisão preventiva restabelecida em recurso pelo Tribunal.",
        correta: false,
        explicacao_especifica: "O Tribunal, ao dar provimento a recurso da acusação ou diante de fatos novos graves, pode decretar a preventiva fundamentada a requerimento do MP."
      }
    ]
  },

  // 025 - Prisões Cautelares (C/E)
  {
    idSlug: "batch3-dpp-025",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Juiz de Direito decretou a prisão preventiva de acusado de roubo valendo-se unicamente de expressões padronizadas e reproduzindo os termos literais do art. 312 do CPP ('para garantia da ordem pública e por conveniência da instrução criminal'), sem apontar qualquer elemento fático concreto dos autos. Nessa situação, conforme o art. 315, § 2º, do CPP, a decisão judicial padece de nulidade absoluta por vício insanável de fundamentação, não se considerando motivado o ato decisório que se limita à indicação, à reprodução ou à paráfrase de ato normativo sem explicar sua relação com o caso concreto.",
    explicacao: "GABARITO: CERTO. Art. 315, § 2º, I do CPP (incluído pela Lei 13.964/19): 'Não se considera fundamentada qualquer decisão judicial, seja ela interlocutória, sentença ou acórdão, que: I - se limitar à indicação, à reprodução ou à paráfrase de ato normativo, sem explicar sua relação com a causa ou a questão decidida'. A decretação com fórmula genérica acarreta a nulidade da prisão cautelar por falta de fundamentação idônea.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A decisão que repete textos legais abstratos sem fundamentação fática concreta é nula de pleno direito, nos termos do art. 315, § 2º do CPP."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A assertiva está correta. A jurisprudência do STJ e STF considera nula a decisão que decreta prisão com base em chavões ou mera repetição dos requisitos da lei."
      }
    ]
  },

  // 026 - Prisões Cautelares (M/E)
  {
    idSlug: "batch3-dpp-026",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "FGV",
    orgao_nome: "PC-SC",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No que concerne às formas de cessação da privação cautelar da liberdade, o ordenamento processual penal distingue nitidamente o relaxamento de prisão da revogação da prisão preventiva. A respeito dessa distinção técnica, assinale a afirmativa correta:",
    explicacao: "GABARITO: A. O relaxamento de prisão (art. 5º, LXV da CF/88 e art. 310, I do CPP) é o remédio cabível contra prisão ilegal (vícios de legalidade formal ou material, como excesso de prazo injustificado ou ausência de nota de culpa). Por sua vez, a revogação da prisão preventiva (art. 316 do CPP) incide sobre prisão originariamente legal, quando deixarem de existir os motivos cautelares que justificaram sua decretação.",
    alternativas: [
      {
        letra: "A",
        texto: "O relaxamento da prisão é a medida destinada a sanar a prisão eivada de ilegalidade originária ou superveniente, ao passo que a revogação aplica-se à prisão preventiva que fora legalmente decretada mas cujos motivos ensejadores deixaram de existir.",
        correta: true,
        explicacao_especifica: "Diferenciação dogmática e legal exata entre relaxamento (art. 5º, LXV CF) e revogação (art. 316 CPP)."
      },
      {
        letra: "B",
        texto: "O relaxamento da prisão somente pode ser determinado pelo Tribunal de Justiça em grau de apelação criminal.",
        correta: false,
        explicacao_especifica: "O relaxamento deve ser ordenado de imediato por qualquer autoridade judiciária competente assim que constatada a ilegalidade da prisão."
      },
      {
        letra: "C",
        texto: "A revogação da prisão preventiva exige a prova inequívoca de que o agente cometeu o crime em legítima defesa putativa.",
        correta: false,
        explicacao_especifica: "A revogação exige apenas que se verifique a falta de motivo para que a prisão cautelar subsista (art. 316 CPP)."
      },
      {
        letra: "D",
        texto: "O juiz que relaxa uma prisão ilegal fica impedido de decretar posteriormente a prisão preventiva do mesmo agente ainda que surjam novos motivos.",
        correta: false,
        explicacao_especifica: "O relaxamento da prisão anterior por vício formal não impede futura decretação fundamentada de preventiva regular se presentes os requisitos do art. 312."
      },
      {
        letra: "E",
        texto: "O excesso de prazo injustificado na instrução criminal enseja revogação da prisão preventiva, mas não autoriza o seu relaxamento.",
        correta: false,
        explicacao_especifica: "O excesso de prazo desproporcional e injustificado torna a prisão ilegal, ensejando o seu compulsório relaxamento."
      }
    ]
  },

  // 027 - Prisões Cautelares (C/E)
  {
    idSlug: "batch3-dpp-027",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Militar do Ceará (PMCE)",
    cargo_nome: "Oficial da PM",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Investigado pela prática de crime de extorsão mediante sequestro (crime hediondo) teve sua prisão temporária decretada pelo prazo de 30 dias. Findo o período de 30 dias sem que tenha havido prorrogação fundamentada ou conversão em prisão preventiva, o custodiado deverá ser posto imediatamente em liberdade pela direção do estabelecimento prisional, independentemente da expedição de alvará de soltura, conforme expressa previsão da Lei nº 7.960/1989.",
    explicacao: "GABARITO: CERTO. Lei nº 7.960/1989, art. 2º, § 7º: 'Decorrido o prazo contido no mandado de prisão, a autoridade responsável pela custódia deverá, independentemente de nova ordem da autoridade judicial, pôr imediatamente o preso em liberdade, salvo se já tiver sido comunicada da prorrogação da prisão temporária ou da decretação da prisão preventiva'. Em crimes hediondos, o prazo é de 30 dias (art. 2º, § 4º da Lei 8.072/90), aplicando-se a mesma regra de liberação incontinenti.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Esgotado o prazo da prisão temporária sem prorrogação ou conversão em preventiva, a liberação do preso é imediata e independe de alvará de soltura."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "O item está certo. A Lei 7.960/89 prevê expressamente a soltura automática e incontinenti ao término do prazo fixado no mandado temporário."
      }
    ]
  },

  // 028 - Provas e Cadeia de Custódia (M/E)
  {
    idSlug: "batch3-dpp-028",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Lei nº 13.964/2019 introduziu no Código de Processo Penal os artigos 158-A a 158-F, disciplinando minuciosamente a cadeia de custódia da prova material. Conforme o art. 158-B do CPP, o rastreamento do vestígio é composto por dez etapas sequenciais. Assinale a alternativa que define corretamente as etapas de 'fixação' e 'acondicionamento':",
    explicacao: "GABARITO: C. Art. 158-B, III: 'fixação: descrição detalhada do vestígio conforme se encontra no local de crime ou no corpo de delito, e a sua posição na área de exames, podendo ser ilustrada por fotografias, filmagens ou croqui'; art. 158-B, V: 'acondicionamento: procedimento por meio do qual cada vestígio coletado é embalado de forma individualizada, de acordo com suas características físicas, químicas e biológicas, para posterior análise, com anotação da data, hora e nome de quem realizou a coleta e uso de lacre com numeração individualizada'.",
    alternativas: [
      {
        letra: "A",
        texto: "Fixação é a transferência do vestígio de um local para outro; acondicionamento é a sua destruição formal após a confecção do laudo.",
        correta: false,
        explicacao_especifica: "Transferência é transporte; destruição/descarte é a última etapa (descarte)."
      },
      {
        letra: "B",
        texto: "Fixação consiste no ato de recolher o vestígio do solo; acondicionamento é o exame pericial propriamente dito em laboratório.",
        correta: false,
        explicacao_especifica: "Recolher o vestígio é 'coleta'; exame em laboratório é 'processamento'."
      },
      {
        letra: "C",
        texto: "Fixação é a descrição detalhada do vestígio conforme se encontra no local ou no corpo de delito e sua posição na área de exames; acondicionamento é a embalagem individualizada de cada vestígio em recipiente próprio com lacre numerado.",
        correta: true,
        explicacao_especifica: "Correspondência exata aos conceitos legais dos incisos III e V do art. 158-B do CPP."
      },
      {
        letra: "D",
        texto: "Fixação é o ato de isolar o perímetro com fita zebrada; acondicionamento é a guarda provisória no cofre da delegacia.",
        correta: false,
        explicacao_especifica: "Isolar é a etapa de 'isolamento'; guarda em depósito pericial é 'armazenamento'."
      },
      {
        letra: "E",
        texto: "Fixação é a conferência do lacre pelo perito destinatário; acondicionamento é a expedição do comprovante de custódia.",
        correta: false,
        explicacao_especifica: "Conferência de entrada do vestígio no órgão pericial é a etapa de 'recebimento'."
      }
    ]
  },

  // 029 - Provas e Cadeia de Custódia (C/E)
  {
    idSlug: "batch3-dpp-029",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "FGV",
    orgao_nome: "PC-RJ",
    cargo_nome: "Perito Legista",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em processo penal que apurava tráfico interestadual de drogas, a defesa pleiteou a declaração de nulidade absoluta e o desentranhamento imediato do laudo químico toxicológico, alegando irregularidade no preenchimento do formulário de controle de cadeia de custódia durante o transporte das amostras. De acordo com a orientação pacificada no Superior Tribunal de Justiça e no Supremo Tribunal Federal, a eventual inobservância de formalidades na cadeia de custódia (quebra da cadeia de custódia) não conduz, por si só e de modo automático, à ilicitude e inadmissibilidade peremptória da prova pericial, devendo o vício ser valorado pelo magistrado quanto à higidez, credibilidade e força probante do elemento material em cotejo com o restante do conjunto probatório.",
    explicacao: "GABARITO: CERTO. Jurisprudência consolidada do STJ (HC 653.515/RJ, AgRg no REsp 1.947.014/SP) e STF: o descumprimento das etapas da cadeia de custódia (arts. 158-A a 158-F do CPP) não acarreta a nulidade absoluta automática ou a imprestabilidade imediata da prova, ensejando a avaliação do seu valor probatório e de sua confiabilidade diante das demais provas produzidas sob o contraditório.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "A quebra da cadeia de custódia repercute na força probante e idoneidade da prova, não gerando nulidade absoluta automática se a integridade substancial puder ser aferida."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "A assertiva está correta. O STJ assentou que eventuais falhas na documentação da cadeia de custódia não tornam a perícia imprestável a priori."
      }
    ]
  },

  // 030 - Provas e Cadeia de Custódia (M/E)
  {
    idSlug: "batch3-dpp-030",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_custodia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Distrito Federal (PC-DF)",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em caso de roubo a estabelecimento comercial, os investigadores apresentaram à vítima uma única fotografia do suspeito pelo aplicativo de mensagens no celular, tendo a vítima afirmado categoricamente que aquele era o autor do delito. Com base unicamente nesse reconhecimento fotográfico, o juízo condenou o réu. À luz da interpretação vinculante conferida pelo Superior Tribunal de Justiça (HC nº 598.886/SC e HC nº 712.781/RJ) e pelo Supremo Tribunal Federal (RHC nº 206.846/SP) ao art. 226 do Código de Processo Penal, assinale a opção correta:",
    explicacao: "GABARITO: D. A jurisprudência consolidada do STJ (HC 598.886/SC) e do STF (RHC 206.846/SP) estabeleceu uma virada jurisprudencial: os procedimentos do art. 226 do CPP constituem garantia cogente (requisitos formais de validade) e não mera recomendação. O reconhecimento fotográfico em desconformidade com o art. 226, e especialmente de forma isolada (show-up / foto única), não pode fundamentar condenação nem decretação de prisão cautelar.",
    alternativas: [
      {
        letra: "A",
        texto: "O procedimento do art. 226 do CPP constitui mera recomendação legal, cuja inobservância configura simples irregularidade formal irrelevante.",
        correta: false,
        explicacao_especifica: "O STJ e o STF superaram a antiga tese da 'mera recomendação', reconhecendo que as regras do art. 226 são garantias formais cogentes."
      },
      {
        letra: "B",
        texto: "O reconhecimento fotográfico informal, mesmo sem confirmação em juízo e desacompanhado de outras provas, é suficiente para embasar decreto condenatório.",
        correta: false,
        explicacao_especifica: "O reconhecimento fotográfico isolado é imprestável para fundamentar condenação."
      },
      {
        letra: "C",
        texto: "A certeza manifestada pela vítima no momento do reconhecimento supre qualquer vício formal do procedimento policial.",
        correta: false,
        explicacao_especifica: "O grau subjetivo de certeza da vítima não convalida a nulidade do procedimento indutivo e irregular."
      },
      {
        letra: "D",
        texto: "O reconhecimento de pessoa realizado em desconformidade com o art. 226 do CPP é juridicamente inválido e não serve para lastrear condenação penal nem prisão cautelar, exigindo-se prévia descrição e alinhamento com pessoas semelhantes.",
        correta: true,
        explicacao_especifica: "Síntese exata da tese paradigmática firmada pelo STJ (HC 598.886/SC) e ratificada pelo STF."
      },
      {
        letra: "E",
        texto: "O reconhecimento realizado na fase inquisitorial tem valor probatório absoluto e dispensa confirmação perante o magistrado.",
        correta: false,
        explicacao_especifica: "Provas de reconhecimento colhidas no inquérito devem ser submetidas ao crivo do contraditório judicial."
      }
    ]
  }
];
