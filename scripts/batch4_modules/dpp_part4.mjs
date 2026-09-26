import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.processual_penal;
const aCompetencia = TAXONOMIA.assuntos.competencia_processual;
const aProcedimento = TAXONOMIA.assuntos.procedimento_comum_juri;
const aNulidades = TAXONOMIA.assuntos.nulidades_recursos;

export const dppPart4 = [
  // 56
  {
    idSlug: "dpp-l4-56",
    disciplina_id: dId,
    assunto_id: aCompetencia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Compete à Justiça Federal processar e julgar os crimes cometidos a bordo de navios ou aeronaves, ressalvada a competência da Justiça Militar, nos termos do art. 109, IX, da Constituição Federal.",
    explicacao: "GABARITO: CERTO. O art. 109, IX, da CF/88 estabelece a competência expressa dos juízes federais para processar e julgar 'os crimes cometidos a bordo de navios ou aeronaves, ressalvada a competência da Justiça Militar'. A apuração preliminar desses delitos cabe à Polícia Federal (art. 144, § 1º, III, da CF).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 57
  {
    idSlug: "dpp-l4-57",
    disciplina_id: dId,
    assunto_id: aCompetencia,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Conforme a regra geral de fixação de competência ratione loci prevista no art. 70 do Código de Processo Penal, a competência será, de regra, determinada:",
    explicacao: "GABARITO: Letra A. O art. 70, caput, do CPP consagra a teoria do resultado: 'A competência será, de regra, determinada pelo lugar em que se consumar a infração, ou, no caso de tentativa, pelo lugar em que for praticado o último ato de execução'.",
    alternativas: [
      { letra: "A", texto: "Pelo lugar em que se consumar a infração ou, no caso de tentativa, pelo lugar em que for praticado o último ato de execução.", correta: true },
      { letra: "B", texto: "Pelo domicílio ou residência do réu em qualquer hipótese infracional.", correta: false },
      { letra: "C", texto: "Pelo local da primeira apreensão policial dos instrumentos do delito.", correta: false },
      { letra: "D", texto: "Pela comarca da capital do respectivo Estado federado.", correta: false },
      { letra: "E", texto: "Pelo local onde a vítima tiver fixado sua residência habitual.", correta: false }
    ]
  },
  // 58
  {
    idSlug: "dpp-l4-58",
    disciplina_id: dId,
    assunto_id: aCompetencia,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Nos crimes de estelionato praticados mediante depósito, mediante emissão de cheques sem suficiente provisão de fundos em poder do sacado ou com o encerramento da conta bancária, bem como mediante transferência de valores, a competência será definida pelo local do domicílio da vítima, por expressa determinação legal (art. 70, § 4º, do CPP).",
    explicacao: "GABARITO: CERTO. A Lei nº 14.155/2021 acrescentou o § 4º ao art. 70 do CPP: 'Nos crimes previstos no art. 171 do Decreto-Lei nº 2.848, de 7 de dezembro de 1940 (Código Penal), quando praticados mediante depósito, mediante emissão de cheques sem suficiente provisão de fundos em poder do sacado ou com o encerramento da conta bancária, ou mediante transferência de valores, a competência será definida pelo local do domicílio da vítima'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 59
  {
    idSlug: "dpp-l4-59",
    disciplina_id: dId,
    assunto_id: aProcedimento,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No procedimento ordinário comum (art. 396 do CPP), após o recebimento da denúncia ou queixa, o juiz ordenará a citação do acusado para responder à acusação, por escrito, no prazo de:",
    explicacao: "GABARITO: Letra C. O art. 396 do CPP estabelece: 'Nos procedimentos ordinário e sumário, oferecida a denúncia ou queixa, o juiz, se não a rejeitar liminarmente, recebê-la-á e ordenará a citação do acusado para responder à acusação, por escrito, no prazo de 10 (dez) dias'.",
    alternativas: [
      { letra: "A", texto: "5 (cinco) dias.", correta: false },
      { letra: "B", texto: "8 (oito) dias.", correta: false },
      { letra: "C", texto: "10 (dez) dias.", correta: true },
      { letra: "D", texto: "15 (quinze) dias.", correta: false },
      { letra: "E", texto: "20 (vinte) dias.", correta: false }
    ]
  },
  // 60
  {
    idSlug: "dpp-l4-60",
    disciplina_id: dId,
    assunto_id: aProcedimento,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Após a apresentação da resposta à acusação, o juiz deverá absolver sumariamente o acusado quando verificar a existência manifesta de causa excludente da ilicitude do fato, a existência manifesta de causa excludente da culpabilidade (salvo inimputabilidade), a atipicidade evidente da conduta ou a extinção da punibilidade do agente.",
    explicacao: "GABARITO: CERTO. A assertiva reproduz as hipóteses taxativas de absolvição sumária do art. 397 do Código de Processo Penal: 'I - a existência manifesta de causa excludente da ilicitude do fato; II - a existência manifesta de causa excludente da culpabilidade do agente, salvo inimputabilidade; III - que o fato narrado evidentemente não constitui crime; ou IV - extinta a punibilidade do agente'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 61
  {
    idSlug: "dpp-l4-61",
    disciplina_id: dId,
    assunto_id: aProcedimento,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Na primeira fase do procedimento escalonado do Tribunal do Júri (judicium accusationis), ao término da instrução preliminar, o magistrado poderá proferir quatro decisões distintas. Assinale a alternativa que descreve a IMPRONÚNCIA (art. 414 do CPP):",
    explicacao: "GABARITO: Letra B. O art. 414 do CPP dispõe: 'Não se convencendo da materialidade do fato ou da existência de indícios suficientes de autoria ou de participação, o juiz, fundamentadamente, impronunciará o acusado'. A impronúncia encerra a primeira fase sem julgamento de mérito (coisa julgada formal), permitindo nova denúncia se surgirem novas provas (parágrafo único).",
    alternativas: [
      { letra: "A", texto: "Decisão que reconhece a existência de crime diverso dos dolosos contra a vida e remete os autos ao juízo singular.", correta: false },
      { letra: "B", texto: "Decisão que não se convence da materialidade do fato ou da suficiência de indícios de autoria, encerrando o procedimento sem remessa ao Júri.", correta: true },
      { letra: "C", texto: "Decisão que declara extinta a punibilidade ou reconhece de plano causa excludente da ilicitude.", correta: false },
      { letra: "D", texto: "Decisão que julga admissível a acusação e encaminha o réu para julgamento pelos jurados.", correta: false },
      { letra: "E", texto: "Decisão que anula o processo por vício insanável no libelo acusatório.", correta: false }
    ]
  },
  // 62
  {
    idSlug: "dpp-l4-62",
    disciplina_id: dId,
    assunto_id: aProcedimento,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O Conselho de Sentença no Tribunal do Júri é composto por 7 (sete) jurados sorteados dentre os 25 (vinte e cinco) jurados convocados para a sessão plenária de julgamento.",
    explicacao: "GABARITO: CERTO. O art. 447 do Código de Processo Penal preconiza: 'O Tribunal do Júri é composto por 1 (um) juiz togado, seu presidente e por 25 (vinte e cinco) jurados que serão sorteados dentre os alistados, 7 (sete) dos quais constituirão o Conselho de Sentença em cada sessão de julgamento'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 63
  {
    idSlug: "dpp-l4-63",
    disciplina_id: dId,
    assunto_id: aNulidades,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No sistema das nulidades processuais penais, o princípio segundo o qual nenhum ato processual será declarado nulo se da nulidade não resultar prejuízo para a acusação ou para a defesa (pas de nullité sans grief) está positivado no CPP no:",
    explicacao: "GABARITO: Letra A. O art. 563 do Código de Processo Penal consagra o princípio fundamental do prejuízo: 'Nenhum ato será declarado nulo, se da nulidade não resultar prejuízo para a acusação ou para a defesa'. A Súmula 523 do STF complementa: 'No processo penal, a falta da defesa constitui nulidade absoluta, mas a sua deficiência só o anulará se houver prova de prejuízo para o réu'.",
    alternativas: [
      { letra: "A", texto: "Artigo 563.", correta: true },
      { letra: "B", texto: "Artigo 564.", correta: false },
      { letra: "C", texto: "Artigo 570.", correta: false },
      { letra: "D", texto: "Artigo 572.", correta: false },
      { letra: "E", texto: "Artigo 580.", correta: false }
    ]
  },
  // 64
  {
    idSlug: "dpp-l4-64",
    disciplina_id: dId,
    assunto_id: aNulidades,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No Recurso em Sentido Estrito (RESE), cabível das decisões que não receberem a denúncia ou queixa ou que pronunciarem o réu, vigora o efeito regressivo (juízo de retratação), permitindo ao próprio juiz prolator da decisão recorrida reformar o seu posicionamento antes de remeter os autos à instância superior.",
    explicacao: "GABARITO: CERTO. O art. 589 do CPP prevê expressamente o juízo de retratação no Recurso em Sentido Estrito: 'Com a resposta do recorrido ou sem ela, será o recurso concluso ao juiz, que, dentro de dois dias, reformará ou sustentará o seu despacho'. Trata-se do efeito regressivo ou iterativo.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 65
  {
    idSlug: "dpp-l4-65",
    disciplina_id: dId,
    assunto_id: aNulidades,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O prazo legal para interposição do recurso de Apelação no processo penal comum (art. 593 do CPP) é de:",
    explicacao: "GABARITO: Letra C. O art. 593, caput, do CPP dispõe: 'Caberá apelação no prazo de 5 (cinco) dias: I - das sentenças definitivas de condenação ou absolvição proferidas por juiz singular; II - das decisões definitivas, ou com força de definitivas, proferidas por juiz singular nos casos não previstos no Capítulo anterior; III - das decisões do Tribunal do Júri...'.",
    alternativas: [
      { letra: "A", texto: "2 (dois) dias.", correta: false },
      { letra: "B", texto: "3 (três) dias.", correta: false },
      { letra: "C", texto: "5 (cinco) dias.", correta: true },
      { letra: "D", texto: "8 (oito) dias.", correta: false },
      { letra: "E", texto: "15 (quinze) dias.", correta: false }
    ]
  },
  // 66
  {
    idSlug: "dpp-l4-66",
    disciplina_id: dId,
    assunto_id: aNulidades,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No caso de concurso de agentes, a decisão do recurso interposto por um dos réus, se fundado em motivos que não sejam de caráter exclusivamente pessoal, aproveitará aos outros correus (efeito extensivo).",
    explicacao: "GABARITO: CERTO. O art. 580 do Código de Processo Penal consagra o efeito extensivo dos recursos criminais: 'No caso de concurso de agentes (Código Penal, art. 25), a decisão do recurso interposto por um dos réus, se fundado em motivos que não sejam de caráter exclusivamente pessoal, aproveitará aos outros'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 67
  {
    idSlug: "dpp-l4-67",
    disciplina_id: dId,
    assunto_id: aNulidades,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito do Habeas Corpus (arts. 647 a 667 do CPP), assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra D. O habeas corpus é ação constitucional que tutela a liberdade de locomoção, sendo gratuito e prescindindo de capacidade postulatória (qualquer pessoa do povo pode impetrá-lo, sem necessidade de advogado - art. 654 do CPP). Não é cabível, todavia, em relação a punições disciplinares militares quanto ao mérito administrativo (art. 142, § 2º, da CF), ressalvado o exame da legalidade formal do ato.",
    alternativas: [
      { letra: "A", texto: "Exige capacidade postulatória privativa de advogado inscrito na OAB sob pena de indeferimento de plano.", correta: false },
      { letra: "B", texto: "É cabível para discutir exclusivamente a imposição de pena de multa criminal isolada.", correta: false },
      { letra: "C", texto: "Comporta dilação probatória ampla com designação de audiência de instrução e oitiva de testemunhas.", correta: false },
      { letra: "D", texto: "Pode ser impetrado por qualquer pessoa, física ou jurídica, em favor de pessoa física, independentemente de representação por advogado.", correta: true },
      { letra: "E", texto: "Pode ser utilizado para anular sanção de perda de cargo público imposta a servidor estatutário.", correta: false }
    ]
  },
  // 68
  {
    idSlug: "dpp-l4-68",
    disciplina_id: dId,
    assunto_id: aNulidades,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A proibição da reformatio in pejus impede que o tribunal, no julgamento de recurso interposto exclusivamente pela defesa, agrave a situação jurídica do réu, ainda que se trate de matéria cognoscível de ofício.",
    explicacao: "GABARITO: CERTO. O art. 617 do CPP estatui: 'O tribunal, câmara ou turma atenderá nas suas decisões ao disposto nos arts. 383, 386 e 387, no que for aplicável, não podendo, porém, ser agravada a pena, quando somente o réu houver apelado da sentença'. A vedação da reformatio in pejus direta e indireta é garantia basilar do direito de defesa.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 69
  {
    idSlug: "dpp-l4-69",
    disciplina_id: dId,
    assunto_id: aNulidades,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Da decisão judicial que julgar extinta a punibilidade do acusado (art. 581, VIII, do CPP), caberá:",
    explicacao: "GABARITO: Letra B. O art. 581, VIII, do CPP estabelece taxativamente que caberá Recurso em Sentido Estrito (RESE) da decisão, despacho ou sentença 'que decretar a prescrição ou julgar, por outro modo, extinta a punibilidade'.",
    alternativas: [
      { letra: "A", texto: "Apelação criminal ordinária.", correta: false },
      { letra: "B", texto: "Recurso em Sentido Estrito (RESE).", correta: true },
      { letra: "C", texto: "Carta testemunhável.", correta: false },
      { letra: "D", texto: "Embargos infringentes privativos.", correta: false },
      { letra: "E", texto: "Agravo em execução penal.", correta: false }
    ]
  },
  // 70
  {
    idSlug: "dpp-l4-70",
    disciplina_id: dId,
    assunto_id: aNulidades,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Os embargos de declaração no processo penal são cabíveis quando houver na sentença ou acórdão ambiguidade, obscuridade, contradição ou omissão, devendo ser opostos no prazo legal de 2 (dois) dias.",
    explicacao: "GABARITO: CERTO. O art. 382 (para sentenças de 1º grau) e o art. 619 do CPP (para acórdãos em tribunais) fixam expressamente o cabimento dos embargos de declaração no prazo de 2 dias quando houver ambiguidade, obscuridade, contradição ou omissão no decisum.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  }
];
