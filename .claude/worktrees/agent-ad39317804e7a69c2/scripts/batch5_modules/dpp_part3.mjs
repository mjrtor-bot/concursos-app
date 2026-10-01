import { TAXONOMIA } from "./taxonomia.mjs";

export const dppPart3 = [
  {
    idSlug: "dpp-b5-037",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No tocante às hipóteses de absolvição sumária do acusado no rito comum ordinário (art. 397 do Código de Processo Penal), assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O juiz deve absolver sumariamente o acusado caso constate a existência manifesta de causa excludente da culpabilidade do agente, ainda que se trate de inimputabilidade por doença mental isolada.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 397, II, do CPP traz a ressalva expressa: 'salvo inimputabilidade' (a inimputabilidade por anomalia psíquica exige instrução para apuração de medida de segurança/absolvição imprópria)."
      },
      {
        letra: "B",
        texto: "Após a apresentação da resposta à acusação pelo réu, o juiz deverá absolver sumariamente o acusado quando verificar a extinção da punibilidade do agente ou a manifesta atipicidade da conduta narrada.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 397, III e IV, do CPP, o juiz absolverá sumariamente quando o fato evidentemente não constituir crime ou extinta a punibilidade."
      },
      {
        letra: "C",
        texto: "A absolvição sumária do art. 397 do CPP gera apenas preclusão temporal no processo, permitindo que a acusação renove a denúncia idêntica no mesmo juízo.",
        correta: false,
        explicacao_especifica: "Incorreta. A absolvição sumária é sentença definitiva de mérito que faz coisa julgada material."
      },
      {
        letra: "D",
        texto: "Contra a decisão que absolver sumariamente o réu com fulcro no art. 397 do CPP cabe a interposição de Recurso em Sentido Estrito (RESE).",
        correta: false,
        explicacao_especifica: "Incorreta. Contra sentença definitiva de absolvição sumária cabe apelação (art. 593, I, CPP)."
      },
      {
        letra: "E",
        texto: "A constatação de falta de justa causa para a ação penal enseja a absolvição sumária do réu no juízo de delibação inicial.",
        correta: false,
        explicacao_especifica: "Incorreta. A falta de justa causa gera rejeição da denúncia (art. 395, III, CPP) ou trancamento da ação, não absolvição sumária de mérito."
      }
    ],
    explicacao: "Gabarito: B. O art. 397 do CPP disciplina a absolvição sumária, cabível quando o juiz verificar: I - existência manifesta de excludente de ilicitude; II - existência manifesta de excludente de culpabilidade, SALVO inimputabilidade; III - que o fato narrado evidentemente não constitui crime; IV - extinta a punibilidade do agente. Trata-se de julgamento antecipado de mérito que faz coisa julgada material."
  },
  {
    idSlug: "dpp-b5-038",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em audiência de instrução e julgamento no rito comum ordinário (art. 400 do CPP), a ordem legal e cronológica de produção dos atos probatórios orais é:",
    alternativas: [
      {
        letra: "A",
        texto: "Interrogatório do réu, depoimento da vítima, testemunhas de acusação, testemunhas de defesa e esclarecimentos dos peritos.",
        correta: false,
        explicacao_especifica: "Incorreta. O interrogatório do acusado é obrigatoriamente o último ato da audiência de instrução."
      },
      {
        letra: "B",
        texto: "Declarações do ofendido, inquirição das testemunhas de acusação, inquirição das testemunhas de defesa, esclarecimentos dos peritos, acareações, reconhecimento de pessoas e coisas, e interrogatório do acusado.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 400, caput, do CPP."
      },
      {
        letra: "C",
        texto: "Testemunhas de defesa, testemunhas de acusação, declarações do ofendido, interrogatório do réu e debates orais.",
        correta: false,
        explicacao_especifica: "Incorreta. A acusação precede a defesa em respeito ao contraditório."
      },
      {
        letra: "D",
        texto: "Interrogatório do réu, testemunhas de acusação, testemunhas de defesa, alegações finais e leitura de laudos periciais.",
        correta: false,
        explicacao_especifica: "Incorreta. O interrogatório é ato derradeiro de autodefesa."
      },
      {
        letra: "E",
        texto: "Declarações do ofendido, interrogatório do réu, testemunhas de acusação, testemunhas de defesa e julgamento.",
        correta: false,
        explicacao_especifica: "Incorreta. O réu só é interrogado após o encerramento de toda a prova acusatória e defensiva."
      }
    ],
    explicacao: "Gabarito: B. Conforme o art. 400 do CPP: 'Na audiência de instrução e julgamento, a ser realizada no prazo máximo de 60 (sessenta) dias, proceder-se-á à tomada de declarações do ofendido, à inquirição das testemunhas arroladas pela acusação e pela defesa, nesta ordem, ressalvado o disposto no art. 222 deste Código, bem como aos esclarecimentos dos peritos, às acareações e ao reconhecimento de pessoas e coisas, interrogando-se, em seguida, o acusado'."
  },
  {
    idSlug: "dpp-b5-039",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com o Plenário do Supremo Tribunal Federal (HC 127.900/AM), a regra do art. 400 do CPP, que fixa o interrogatório do réu como o ato derradeiro da instrução processual, aplica-se a todos os procedimentos penais regidos por leis especiais, inclusive aos procedimentos da Justiça Militar e aos processos de competência originária dos Tribunais.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF fixou a tese da máxima amplitude do contraditório e ampla defesa, tornando cogente o interrogatório ao final da instrução em todos os procedimentos penais da legislação extravagante e militar."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O STF pacificou a aplicação subsidiária do art. 400 do CPP a todos os ritos especiais."
      }
    ],
    explicacao: "Gabarito: Certo. No julgamento do HC 127.900/AM, o Plenário do STF assentou que o art. 400 do CPP (interrogatório como último ato da instrução) consagra a máxima eficácia da ampla defesa e do contraditório, devendo prevalecer sobre normas procedimentais especiais em contrário (como o art. 302 do CPPM e leis extravagantes), desde que não concluída a fase instrutória na origem."
  },
  {
    idSlug: "dpp-b5-040",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Na inquirição de testemunhas em audiência judicial, segundo o sistema do exame direto e cruzado (cross-examination) adotado pelo art. 212 do Código de Processo Penal:",
    alternativas: [
      {
        letra: "A",
        texto: "As partes formularão perguntas diretamente à testemunha, cabendo ao juiz complementar a inquirição sobre os pontos não esclarecidos.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 212 do CPP: 'As perguntas serão formuladas pelas partes diretamente à testemunha, não admitindo o juiz aquelas que puderem induzir a resposta... Parágrafo único. Sobre os pontos não esclarecidos, o juiz poderá complementar a inquirição'."
      },
      {
        letra: "B",
        texto: "Todas as perguntas das partes devem ser obrigatoriamente intermediadas pelo magistrado sob o sistema presidencialista puro.",
        correta: false,
        explicacao_especifica: "Incorreta. A Lei 11.690/2008 aboliu o sistema presidencialista puro no CPP, adotando o sistema direto."
      },
      {
        letra: "C",
        texto: "O magistrado deve iniciar a audiência formulando ele próprio todas as perguntas de mérito antes de conceder a palavra às partes.",
        correta: false,
        explicacao_especifica: "Incorreta. A atuação do juiz na inquirição de testemunhas é supletiva/complementar (art. 212, parágrafo único, CPP)."
      },
      {
        letra: "D",
        texto: "O juiz não pode indeferir nenhuma pergunta formulada pelas partes, ainda que capciosa ou impertinente.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 212, caput, expressamente impõe ao juiz o dever de indeferir perguntas indutivas, capciosas ou impertinentes."
      },
      {
        letra: "E",
        texto: "A parte que arrolou a testemunha formula as perguntas por último, após a inquirição da parte adversa.",
        correta: false,
        explicacao_especifica: "Incorreta. A parte que arrolou a testemunha pergunta em primeiro lugar (exame direto); a parte adversa pergunta em seguida (exame cruzado)."
      }
    ],
    explicacao: "Gabarito: A. O art. 212 do CPP aboliu o sistema presidencialista puro de reperguntas, estabelecendo a formulação direta de perguntas pelas partes à testemunha. A intervenção judicial ocorre para indeferir perguntas capciosas/impertinentes e, ao final, de modo subsidiário e complementar, para sanar pontos não esclarecidos (parágrafo único)."
  },
  {
    idSlug: "dpp-b5-041",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.procedimento_comum_juri,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No rito especial do Tribunal do Júri, a elaboração e a votação dos quesitos pelos jurados obedecem a uma ordem estrita disciplinada pelo art. 483 do Código de Processo Penal. Assinale a opção que indica a ordem correta dos três primeiros quesitos a serem submetidos ao Conselho de Sentença.",
    alternativas: [
      {
        letra: "A",
        texto: "1º Autoria ou participação; 2º Materialidade do fato; 3º Causas de aumento de pena.",
        correta: false,
        explicacao_especifica: "Incorreta. A materialidade sempre precede a autoria."
      },
      {
        letra: "B",
        texto: "1º Materialidade do fato; 2º Autoria ou participação; 3º Se o jurado absolve o acusado (quesito genérico absolutório obrigatório).",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 483, I, II e III c/c § 2º, do CPP, respondidos afirmativamente por mais de 3 jurados os quesitos de materialidade e autoria, será formulado obrigatoriamente o quesito: 'O jurado absolve o acusado?'."
      },
      {
        letra: "C",
        texto: "1º Existência de qualificadoras; 2º Materialidade delitiva; 3º Desclassificação para crime comum.",
        correta: false,
        explicacao_especifica: "Incorreta. Qualificadoras são votadas após os quesitos principais."
      },
      {
        letra: "D",
        texto: "1º Tese de legítima defesa defensiva; 2º Materialidade; 3º Autoria.",
        correta: false,
        explicacao_especifica: "Incorreta. Teses de excludentes defensivas foram reunidas no quesito genérico absolutório (3º quesito)."
      },
      {
        letra: "E",
        texto: "1º Materialidade; 2º Causas de diminuição; 3º Autoria delitiva.",
        correta: false,
        explicacao_especifica: "Incorreta. A autoria é o 2º quesito e causas de diminuição vêm ao final."
      }
    ],
    explicacao: "Gabarito: B. O art. 483 do CPP estabelece a seguinte ordem cogente de quesitação no Júri: 1º) a materialidade do fato (inciso I); 2º) a autoria ou participação (inciso II); 3º) se o jurado absolve o acusado (inciso III c/c § 2º - quesito genérico absolutório de redação obrigatória). Se a materialidade ou autoria forem respondidas negativamente por maioria (4 votos), encerra-se a votação com a absolvição."
  },
  {
    idSlug: "dpp-b5-042",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.procedimento_comum_juri,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com a tese fixada pelo Supremo Tribunal Federal no julgamento do Tema 1.068 de Repercussão Geral (RE 1.235.340/MG), a soberania dos veredictos do Tribunal do Júri autoriza a imediata execução da condenação imposta pelo Conselho de Sentença, independentemente do total da pena aplicada.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O Plenário do STF firmou em 2024 que a condenação pelo Tribunal do Júri enseja prisão/execução imediata da pena decorrente da soberania dos veredictos (art. 5º, XXXVIII, 'c', CF)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O STF pacificou a execução imediata das decisões condenatórias do júri popular."
      }
    ],
    explicacao: "Gabarito: Certo. No julgamento do Tema 1.068 da Repercussão Geral (RE 1.235.340/MG, Rel. Min. Roberto Barroso), o Plenário do STF fixou a seguinte tese: 'A soberania dos veredictos do Tribunal do Júri autoriza a imediata execução da condenação imposta pelo corpo de jurados, independentemente do total da pena aplicada'."
  },
  {
    idSlug: "dpp-b5-043",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.procedimento_comum_juri,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito do desaforamento no procedimento do Tribunal do Júri (art. 427 do CPP), assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O desaforamento consiste no deslocamento da competência para o Tribunal de Justiça processar e julgar os jurados que cometerem prevaricação.",
        correta: false,
        explicacao_especifica: "Incorreta. O desaforamento é o deslocamento do julgamento popular para outra comarca da mesma região."
      },
      {
        letra: "B",
        texto: "Pode ser determinado pelo Tribunal competente em virtude de fundadas dúvidas sobre a imparcialidade do júri, interesse da ordem pública ou segurança pessoal do acusado.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 427, caput, do CPP, se o interesse da ordem pública o reclamar ou houver dúvida sobre a imparcialidade do júri ou a segurança pessoal do acusado, o Tribunal determinará o desaforamento."
      },
      {
        letra: "C",
        texto: "É ato privativo do juiz presidente da comarca de origem, sendo incabível requerimento formulado pela defesa técnica.",
        correta: false,
        explicacao_especifica: "Incorreta. O desaforamento é decidido pelo Tribunal a requerimento do MP, do assistente, do querelante ou do acusado, ou mediante representação do juiz competente."
      },
      {
        letra: "D",
        texto: "Pode ser determinado a qualquer momento durante a primeira fase do júri (judicium accusationis) antes da prolação da pronúncia.",
        correta: false,
        explicacao_especifica: "Incorreta. O desaforamento pressupõe a existência de pronúncia preclusa (2ª fase do júri)."
      },
      {
        letra: "E",
        texto: "A interposição do pedido de desaforamento suspende de modo automático e obrigatório a realização do julgamento em plenário.",
        correta: false,
        explicacao_especifica: "Incorreta. O pedido de desaforamento não suspende o julgamento, salvo concessão de efeito suspensivo pelo relator (art. 427, § 2º, CPP)."
      }
    ],
    explicacao: "Gabarito: B. O art. 427 do CPP prevê o desaforamento (deslocamento do julgamento do Júri para comarca da mesma região) quando houver: 1) interesse da ordem pública; 2) dúvida sobre a imparcialidade do júri; 3) risco à segurança pessoal do acusado; ou 4) comprovado excesso de serviço/prazo (art. 428 CPP)."
  },
  {
    idSlug: "dpp-b5-044",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.nulidades_recursos,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Citado o réu por edital e não comparecendo ele nem constituindo defensor, o juiz deverá nomear defensor dativo para apresentar resposta à acusação e dar prosseguimento regular à instrução criminal até o julgamento final.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Errado. Conforme o art. 366 do CPP, se o réu citado por edital não comparecer nem constituir advogado, ficarão suspensos o processo e o curso do prazo prescricional."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. O art. 366 do CPP determina a suspensão do processo e do prazo prescricional, podendo o juiz determinar a produção antecipada de provas urgentes e decretar prisão preventiva se presentes os requisitos."
      }
    ],
    explicacao: "Gabarito: Errado. O art. 366 do CPP preceitua: 'Se o acusado, citado por edital, não comparecer, nem constituir advogado, ficarão suspensos o processo e o curso do prazo prescricional, podendo o juiz determinar a produção antecipada das provas consideradas urgentes e, se for o caso, decretar prisão preventiva, nos termos do disposto no art. 312'."
  },
  {
    idSlug: "dpp-b5-045",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito das regras de conexão e continência e dos critérios de determinação da competência no Código de Processo Penal, assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "No concurso entre a jurisdição comum e a do Tribunal do Júri, prevalecerá a competência do juízo criminal singular comum para todos os crimes conexos.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme o art. 78, I, do CPP, no concurso entre a jurisdição comum e a do Júri, prevalecerá a competência do Tribunal do Júri (vis atractiva)."
      },
      {
        letra: "B",
        texto: "No concurso de jurisdições de mesma categoria, predomina o foro de competência territorial do local em que houver ocorrido o crime com maior pena cominada em abstrato.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 78, II, 'a', do CPP: 'no concurso de jurisdições da mesma categoria: a) preponderará a do lugar da infração, à qual for cominada a pena mais grave'."
      },
      {
        letra: "C",
        texto: "A competência da Justiça Federal atrai os crimes militares conexos praticados por integrantes das Forças Armadas.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme o art. 79, I, do CPP e Súmula 90 do STJ, a Justiça Militar é especial e não se une à Justiça Comum/Federal por conexão (ocorre cisão obrigatória)."
      },
      {
        letra: "D",
        texto: "A continência por cumulação subjetiva ocorre quando uma única pessoa comete múltiplos crimes em concurso material de ações.",
        correta: false,
        explicacao_especifica: "Incorreta. A continência do art. 77, I, decorre de duas ou mais pessoas praticando a mesma infração (coautoria/participação)."
      },
      {
        letra: "E",
        texto: "A absolvição do réu quanto ao crime determinante da conexão atrai a nulidade absoluta dos atos decisórios praticados em relação aos demais crimes conexos.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 81 do CPP consagra a perpetuatio jurisdictionis: a cessação ou desclassificação superveniente não altera a competência firmada para o julgamento dos conexos."
      }
    ],
    explicacao: "Gabarito: B. O art. 78, II, 'a', do CPP dispõe que, no concurso de jurisdições de mesma categoria, preponderará a do lugar da infração à qual for cominada a pena mais grave; se as penas forem iguais, preponderará a do lugar em que tiver ocorrido o maior número de infrações; e, se ainda assim empatar, firma-se pela prevenção (art. 78, II, 'b' e 'c', CPP)."
  },
  {
    idSlug: "dpp-b5-046",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.jurisdicao_competencia,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre as causas de impedimento e suspeição do magistrado no processo penal brasileiro (arts. 252 e 254 do CPP), assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O impedimento do juiz decorre de vínculos estritamente subjetivos de animosidade ou afeto, gerando presunção juris tantum de parcialidade sujeita a preclusão temporal.",
        correta: false,
        explicacao_especifica: "Incorreta. O impedimento (art. 252 CPP) é objetivo, absoluto (presunção juris et de jure) e não preclui."
      },
      {
        letra: "B",
        texto: "O juiz não poderá exercer jurisdição no processo em que tiver funcionado seu cônjuge ou parente, consanguíneo ou afim, em linha reta ou colateral até o terceiro grau, inclusive, como defensor, promotor, perito ou autoridade policial.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos literais do art. 252, I, do CPP."
      },
      {
        letra: "C",
        texto: "A suspeição do magistrado em virtude de ser amigo íntimo ou inimigo capital de qualquer das partes pode ser arguida a qualquer momento após o trânsito em julgado via revisão criminal.",
        correta: false,
        explicacao_especifica: "Incorreta. A suspeição (art. 254 CPP) gera nulidade relativa e deve ser arguida na primeira oportunidade sob pena de preclusão."
      },
      {
        letra: "D",
        texto: "O juiz que atuou como autoridade policial presidente do inquérito pode ser designado magistrado instrutor da respectiva ação penal em razão do princípio da celeridade processual.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 252, II, do CPP fixa expressamente impedimento absoluto para o juiz que atuou como autoridade policial no mesmo feito."
      },
      {
        letra: "E",
        texto: "As causas de impedimento aplicam-se com exclusividade aos magistrados togados, não incidindo sobre membros do Ministério Público, peritos ou serventuários da justiça.",
        correta: false,
        explicacao_especifica: "Incorreta. Os arts. 258, 274 e 280 do CPP estendem as regras de impedimento e suspeição ao MP, peritos, intérpretes e serventuários."
      }
    ],
    explicacao: "Gabarito: B. O art. 252, I, do CPP estabelece como causa expressa de impedimento do juiz: 'O juiz não poderá exercer jurisdição no processo em que: I - tiver funcionado seu cônjuge, ou parente, consangüíneo ou afim, em linha reta ou colateral até o terceiro grau, inclusive, como defensor ou advogado, órgão do Ministério Público, autoridade policial, auxiliar da justiça ou perito'."
  },
  {
    idSlug: "dpp-b5-047",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.nulidades_recursos,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O Ministério Público não pode desistir de recurso penal que haja interposto, por força do princípio da indisponibilidade recursal que rege a atuação do órgão acusatório.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Trata-se da regra expressa contida no art. 576 do CPP: 'O Ministério Público não poderá desistir de recurso que haja interposto'."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 576 do CPP veda expressamente a desistência recursal do MP."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 576 do CPP dispõe expressamente: 'O Ministério Público não poderá desistir de recurso que haja interposto'. Embora o MP tenha discricionariedade mitigada para interpor ou não o recurso (voluntariedade recursal), uma vez interposto, a indisponibilidade processual impede a desistência."
  },
  {
    idSlug: "dpp-b5-048",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito das medidas assecuratórias e da apreensão e restituição de coisas no Código de Processo Penal, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "As coisas apreendidas que interessem ao processo criminal poderão ser restituídas antes do trânsito em julgado mediante simples requerimento verbal do investigado.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme o art. 118 do CPP, antes de transitar em julgado a sentença final, as coisas apreendidas não poderão ser restituídas enquanto interessarem ao processo."
      },
      {
        letra: "B",
        texto: "O sequestro de bens imóveis adquiridos pelo indiciado com os proventos da infração penal poderá ser ordenado pelo juiz, de ofício, a requerimento do Ministério Público ou do ofendido.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 127 do CPP: 'O juiz, de ofício, a requerimento do Ministério Público ou do ofendido, ou mediante representação da autoridade policial, poderá ordenar o seqüestro'."
      },
      {
        letra: "C",
        texto: "A hipoteca legal sobre os bens imóveis do acusado recai com exclusividade sobre os bens comprovadamente adquiridos com o produto direto do crime.",
        correta: false,
        explicacao_especifica: "Incorreta. A hipoteca legal (art. 134 CPP) recai sobre imóveis lícitos do acusado para garantir reparação do dano e custas (sobre bens ilícitos incide sequestro)."
      },
      {
        letra: "D",
        texto: "A restituição de coisa apreendida pode ser ordenada pela autoridade policial mesmo quando houver dúvida fundada sobre o direito do reclamante.",
        correta: false,
        explicacao_especifica: "Incorreta. Havendo dúvida sobre a propriedade, o incidente deve ser resolvido em juízo pelo juízo cível competente (art. 120, § 4º, CPP)."
      },
      {
        letra: "E",
        texto: "Os instrumentos do crime cuja posse e fabricação constituam fato ilícito devem ser restituídos ao condenado após o cumprimento integral da pena.",
        correta: false,
        explicacao_especifica: "Incorreta. Instrumentos de porte ilícito sofrem confisco definitivo em favor da União (art. 91, II, 'a', CP)."
      }
    ],
    explicacao: "Gabarito: B. O sequestro (arts. 125 e 127 do CPP) é a medida assecuratória cabível sobre bens imóveis ou móveis adquiridos com os proventos da infração penal, podendo ser decretado pelo juiz de ofício, a requerimento do Ministério Público ou do ofendido, ou por representação da autoridade policial. Conforme o art. 118 do CPP, coisas de interesse probatório não são restituídas antes do trânsito em julgado."
  },
  {
    idSlug: "dpp-b5-049",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.nulidades_recursos,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre os Embargos Infringentes e de Nulidade no processo penal brasileiro (art. 609, parágrafo único, do CPP), assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "São cabíveis contra qualquer decisão monocrática de relator proferida no âmbito dos Tribunais Superiores.",
        correta: false,
        explicacao_especifica: "Incorreta. Não cabem contra decisões monocráticas nem originárias do STJ/STF nos moldes do art. 609 CPP."
      },
      {
        letra: "B",
        texto: "Trata-se de recurso privativo da defesa, cabível quando não for unânime a decisão de segunda instância desfavorável ao réu proferida em julgamento de apelação e de recurso em sentido estrito.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 609, parágrafo único, do CPP: recurso exclusivo da defesa contra acórdão não unânime desfavorável em apelação, RESE ou agravo em execução."
      },
      {
        letra: "C",
        texto: "Podem ser manejados pelo Ministério Público quando a decisão colegiada não unânime for absolutória por maioria de votos.",
        correta: false,
        explicacao_especifica: "Incorreta. Embargos infringentes e de nulidade são privativos da defesa (pro reo)."
      },
      {
        letra: "D",
        texto: "O prazo para interposição dos embargos infringentes perante o Tribunal é de cinco dias corridos a contar da sessão de julgamento.",
        correta: false,
        explicacao_especifica: "Incorreta. O prazo é de 10 dias a contar da publicação do acórdão (art. 609, parágrafo único, CPP)."
      },
      {
        letra: "E",
        texto: "Permitem à defesa suscitar matérias fáticas e jurídicas inéditas que não tenham sido objeto do voto vencido proferido na câmara.",
        correta: false,
        explicacao_especifica: "Incorreta. O efeito devolutivo dos embargos infringentes é adstrito aos limites da divergência veiculada no voto minoritário."
      }
    ],
    explicacao: "Gabarito: B. O art. 609, parágrafo único, do CPP dispõe: 'Quando não for unânime a decisão de segunda instância, desfavorável ao réu, admitem-se embargos infringentes e de nulidade, que poderão ser opostos dentro de 10 (dez) dias, a contar da publicação de acórdão... Se o desacordo for parcial, os embargos serão restritos à matéria objeto de divergência'. Trata-se de recurso exclusivo da defesa em julgamento de Apelação e RESE."
  },
  {
    idSlug: "dpp-b5-050",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O princípio da identidade física do juiz, consagrado expressamente no processo penal pelo art. 399, § 2º, do CPP, estabelece que o magistrado que presidiu a instrução deverá proferir a sentença penal.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 399, § 2º, do CPP prevê expressamente que o juiz que presidiu a instrução deverá proferir a sentença."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 399, § 2º, do CPP adotou expressamente o princípio da identidade física do juiz no processo penal."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 399, § 2º, do CPP estabelece: 'O juiz que presidiu a instrução deverá proferir a sentença'. Trata-se do princípio da identidade física do juiz, mitigado apenas por exceções legais expressas (aposentadoria, exoneração, promoção ou convocação)."
  },
  {
    idSlug: "dpp-b5-051",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No tocante à representação do ofendido nos crimes de ação penal pública condicionada, assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A representação exige rigor formal solene sacramental, sendo nula a manifestação inequívoca da vítima deduzida em termo de declarações perante a autoridade policial.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme STF e STJ, a representação prescinde de formalidades sacramentais, bastando a manifestação inequívoca de vontade."
      },
      {
        letra: "B",
        texto: "A representação será irretratável depois de oferecida a denúncia pelo Ministério Público.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos literais do art. 25 do CPP: 'A representação será irretratável, depois de oferecida a denúncia'."
      },
      {
        letra: "C",
        texto: "A retratação da representação é admitida até o momento do trânsito em julgado da sentença condenatória.",
        correta: false,
        explicacao_especifica: "Incorreta. O limite temporal é o oferecimento da denúncia (art. 25 CPP) ou a audiência prévia no rito da Maria da Penha (art. 16 Lei 11.340/06)."
      },
      {
        letra: "D",
        texto: "A representação oferecida pela vítima vincula obrigatoriamente o Ministério Público ao oferecimento de denúncia, retirando-lhe a opinio delicti.",
        correta: false,
        explicacao_especifica: "Incorreta. O MP mantém sua independência funcional e opinio delicti para oferecer denúncia, pedir arquivamento ou novas diligências."
      },
      {
        letra: "E",
        texto: "Em caso de morte do ofendido antes de representar, o direito extingue-se automaticamente sem possibilidade de sucessão processual.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 24, § 1º, do CPP transfere o direito de representação ao CADI (cônjuge, ascendente, descendente ou irmão)."
      }
    ],
    explicacao: "Gabarito: B. O art. 25 do CPP preceitua: 'A representação será irretratável, depois de oferecida a denúncia'. Portanto, a vítima pode retratar-se da representação até o momento anterior ao oferecimento da denúncia pelo órgão ministerial (ressalvada a regra especial do art. 16 da Lei Maria da Penha, que exige audiência específica antes do recebimento da denúncia)."
  },
  {
    idSlug: "dpp-b5-052",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre o instituto do assistente de acusação no Código de Processo Penal, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O assistente de acusação pode intervir em qualquer fase do inquérito policial e da ação penal pública.",
        correta: false,
        explicacao_especifica: "Incorreta. A intervenção do assistente só é admitida na ação penal (art. 268 CPP), inexistindo intervenção formal como assistente no inquérito policial."
      },
      {
        letra: "B",
        texto: "O assistente será admitido enquanto não passar em julgado a sentença e receberá a causa no estado em que se achar.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 269 do CPP."
      },
      {
        letra: "C",
        texto: "Do despacho judicial que admitir ou não admitir a intervenção do assistente caberá recurso em sentido estrito no prazo de 5 dias.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 273 do CPP estabelece expressamente que do despacho que admitir ou não o assistente não caberá recurso (irrecorrível)."
      },
      {
        letra: "D",
        texto: "O corréu no mesmo processo penal pode intervir como assistente de acusação do Ministério Público contra o outro comparsa.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 270 do CPP veda expressamente que o corréu figure como assistente de acusação."
      },
      {
        letra: "E",
        texto: "O assistente de acusação não possui legitimidade para interpor recurso de apelação contra sentença absolutória quando o Ministério Público não recorrer.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme a Súmula 210 do STF e art. 598 do CPP, o assistente tem legitimidade ampla para apelar supletivamente."
      }
    ],
    explicacao: "Gabarito: B. Conforme o art. 269 do CPP: 'O assistente será admitido enquanto não passar em julgado a sentença e receberá a causa no estado em que se achar'. A intervenção só é cabível na fase judicial (ação penal pública), e da decisão que admitir ou rejeitar o assistente não cabe recurso (art. 273, CPP)."
  },
  {
    idSlug: "dpp-b5-053",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A prisão preventiva poderá ser decretada em qualquer fase da investigação policial ou do processo penal, desde que preenchidos os seus pressupostos e requisitos legais, mediante representação da autoridade policial ou a requerimento do Ministério Público, do querelante ou do assistente.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos termos exatos do art. 311 do CPP com a redação conferida pela Lei nº 13.964/2019."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 311 do CPP autoriza a preventiva na fase investigativa ou processual mediante provocação legítima."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 311 do CPP prevê: 'Em qualquer fase da investigação policial ou do processo penal, caberá a prisão preventiva decretada pelo juiz, a requerimento do Ministério Público, do querelante ou do assistente, ou por representação da autoridade policial'. O Pacote Anticrime eliminou expressamente a possibilidade de decretação de ofício pelo magistrado."
  }
];
