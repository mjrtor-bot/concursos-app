import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.processual_penal;
const aPrisao = TAXONOMIA.assuntos.prisao_medidas_cautelares;

export const dppPart3 = [
  // 41
  {
    idSlug: "dpp-l4-41",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Qualquer do povo poderá e as autoridades policiais e seus agentes deverão prender quem quer que seja encontrado em flagrante delito, consagrando a distinção entre flagrante facultativo e flagrante obrigatório.",
    explicacao: "GABARITO: CERTO. O art. 301 do Código de Processo Penal preconiza expressamente: 'Qualquer do povo poderá e as autoridades policiais e seus agentes deverão prender quem quer que seja encontrado em flagrante delito'. Trata-se do flagrante facultativo (para os particulares) e obrigatório/compulsório (para a autoridade policial e seus agentes).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 42
  {
    idSlug: "dpp-l4-42",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação às espécies de prisão em flagrante previstas no art. 302 do Código de Processo Penal, assinale a opção que caracteriza corretamente o flagrante IMPRÓPRIO ou quase-flagrante (art. 302, III):",
    explicacao: "GABARITO: Letra B. O art. 302 do CPP define: I - está cometendo a infração (próprio); II - acaba de cometê-la (próprio); III - é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração (impróprio ou quase-flagrante); IV - é encontrado, logo depois, com instrumentos, armas, objetos ou papéis que façam presumir ser ele autor da infração (presumido ou ficto).",
    alternativas: [
      { letra: "A", texto: "O agente é surpreendido no momento exato em que desfere os golpes de faca contra a vítima.", correta: false },
      { letra: "B", texto: "O agente é perseguido, logo após o fato, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser ele o autor da infração.", correta: true },
      { letra: "C", texto: "O agente é encontrado, logo depois, com os objetos subtraídos, sem que tenha havido qualquer perseguição.", correta: false },
      { letra: "D", texto: "O agente é induzido por agente policial disfarçado que cria armadilha para sua captura.", correta: false },
      { letra: "E", texto: "O agente acaba de cometer a infração no próprio local do evento delituoso.", correta: false }
    ]
  },
  // 43
  {
    idSlug: "dpp-l4-43",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A audiência de custódia deve ser realizada no prazo máximo de 24 (vinte e quatro) horas após a realização da prisão, competindo ao magistrado avaliar a legalidade do flagrante, eventuais relatos de tortura e a necessidade de conversão em prisão preventiva ou concessão de liberdade provisória.",
    explicacao: "GABARITO: CERTO. O art. 310, caput, do CPP (redação da Lei nº 13.964/2019 e Resolução CNJ nº 213/2015) determina que o juiz deve promover a audiência de custódia no prazo de até 24 horas após a comunicação da prisão em flagrante, com a presença do acusado, seu advogado ou Defensor Público e o membro do Ministério Público.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 44
  {
    idSlug: "dpp-l4-44",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Conforme o art. 313 do Código de Processo Penal, será admitida a decretação da prisão preventiva nos crimes dolosos:",
    explicacao: "GABARITO: Letra A. O art. 313, I, do CPP admite a prisão preventiva nos crimes dolosos punidos com pena privativa de liberdade máxima superior a 4 (quatro) anos; se tiver sido condenado por outro crime doloso em sentença transitada em julgado (reincidência - inciso II); se o crime envolver violência doméstica e familiar contra a mulher, criança, idoso, etc. para garantir medidas protetivas (inciso III).",
    alternativas: [
      { letra: "A", texto: "Punidos com pena privativa de liberdade máxima superior a 4 (quatro) anos.", correta: true },
      { letra: "B", texto: "Punidos com pena privativa de liberdade máxima superior a 2 (dois) anos.", correta: false },
      { letra: "C", texto: "Punidos com qualquer pena de detenção ou reclusão, independentemente do quantum.", correta: false },
      { letra: "D", texto: "Culposos de trânsito com resultado morte consumada.", correta: false },
      { letra: "E", texto: "Exclusivamente se classificados na Lei de Crimes Hediondos.", correta: false }
    ]
  },
  // 45
  {
    idSlug: "dpp-l4-45",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Com a vigência do Pacote Anticrime (Lei nº 13.964/2019), é absolutamente vedada a decretação da prisão preventiva de ofício pelo magistrado em qualquer fase da persecução penal, exigindo-se sempre provocação do Ministério Público, do querelante, do assistente ou representação da autoridade policial.",
    explicacao: "GABARITO: CERTO. O art. 311 do CPP foi expressamente alterado para extirpar a possibilidade de decretação de prisão preventiva de ofício pelo juiz, seja na fase investigatória, seja na fase judicial, em estrita consonância com o modelo acusatório consagrado no art. 3º-A do CPP e reiterado pelo STF e STJ.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 46
  {
    idSlug: "dpp-l4-46",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito da Prisão Temporária (Lei nº 7.960/1989) e da tese vinculante fixada pelo Supremo Tribunal Federal nas ADIs 3.360 e 4.109, assinale a assertiva correta:",
    explicacao: "GABARITO: Letra C. O STF (ADIs 3.360 e 4.109) fixou que a prisão temporária exige cumulativamente: 1) imprescindibilidade para as investigações do inquérito (inciso I); 2) fundadas razões de autoria/participação nos crimes taxativos do inciso III; 3) justificação em fatos novos ou contemporâneos; 4) inadequação de outras medidas cautelares diversas da prisão.",
    alternativas: [
      { letra: "A", texto: "A prisão temporária pode ser decretada de ofício pelo juiz se houver clamor público relevante.", correta: false },
      { letra: "B", texto: "Aplica-se a qualquer infração penal cuja pena mínima seja superior a 1 ano de reclusão.", correta: false },
      { letra: "C", texto: "Exige cumulativamente a imprescindibilidade para as investigações e fundadas razões de autoria nos crimes taxativos do art. 1º, III, da Lei nº 7.960/89.", correta: true },
      { letra: "D", texto: "Nos crimes hediondos, o prazo da prisão temporária é de 10 dias, prorrogável por mais 10.", correta: false },
      { letra: "E", texto: "O delegado de polícia pode decretar a prisão temporária por portaria ad referendum do juiz.", correta: false }
    ]
  },
  // 47
  {
    idSlug: "dpp-l4-47",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O prazo da prisão temporária nos crimes hediondos e equiparados é de 30 (trinta) dias, prorrogável por igual período em caso de extrema e comprovada necessidade, nos termos do art. 2º, § 4º, da Lei nº 8.072/1990.",
    explicacao: "GABARITO: CERTO. A Lei dos Crimes Hediondos (Lei nº 8.072/90, art. 2º, § 4º) estabelece que a prisão temporária, sobrevindo qualquer dos crimes nela tipificados, terá o prazo de 30 dias, prorrogável por igual período em caso de extrema e comprovada necessidade (diferente da regra geral da Lei 7.960/89, que é de 5 dias + 5 dias).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 48
  {
    idSlug: "dpp-l4-48",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "A autoridade policial (Delegado de Polícia) somente poderá conceder fiança nos casos de infração penal cuja pena privativa de liberdade máxima não seja superior a:",
    explicacao: "GABARITO: Letra B. O art. 322 do Código de Processo Penal estabelece: 'A autoridade policial somente poderá conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a 4 (quatro) anos'. Nos demais casos, a fiança será requerida ao juiz, que decidirá em 48 horas.",
    alternativas: [
      { letra: "A", texto: "2 (dois) anos.", correta: false },
      { letra: "B", texto: "4 (quatro) anos.", correta: true },
      { letra: "C", texto: "6 (seis) anos.", correta: false },
      { letra: "D", texto: "8 (oito) anos.", correta: false },
      { letra: "E", texto: "1 (um) ano.", correta: false }
    ]
  },
  // 49
  {
    idSlug: "dpp-l4-49",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A inobservância da reavaliação periódica nonagesimal da necessidade de manutenção da prisão preventiva (art. 316, parágrafo único, do CPP) não conduz à revogação automática da prisão, competindo ao magistrado competente ser instado a suprir a omissão (STF e STJ).",
    explicacao: "GABARITO: CERTO. O Plenário do STF (SL 1.395/SP) e a 3ª Seção do STJ pacificaram a tese de que o decurso do prazo de 90 dias previsto no parágrafo único do art. 316 do CPP não acarreta a soltura automática do preso, devendo o tribunal determinar ao juízo de origem que reavalie imediatamente a subsistência dos motivos da custódia cautelar.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 50
  {
    idSlug: "dpp-l4-50",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Dentre as medidas cautelares diversas da prisão previstas no art. 319 do Código de Processo Penal, NÃO se inclui:",
    explicacao: "GABARITO: Letra E. As medidas do art. 319 do CPP são: I - comparecimento periódico em juízo; II - proibição de acesso ou frequência a determinados lugares; III - proibição de manter contato com pessoa determinada; IV - proibição de ausentar-se da comarca; V - recolhimento domiciliar noturno; VI - suspensão do exercício de função pública; VII - internação provisória; VIII - fiança; IX - monitoração eletrônica. A incomunicabilidade do indiciado é vedada pela CF/88.",
    alternativas: [
      { letra: "A", texto: "Comparecimento periódico em juízo no prazo e nas condições fixadas pelo juiz.", correta: false },
      { letra: "B", texto: "Proibição de acesso ou frequência a determinados lugares para evitar o risco de novas infrações.", correta: false },
      { letra: "C", texto: "Recolhimento domiciliar no período noturno e nos dias de folga quando o acusado tiver residência e trabalho habituais.", correta: false },
      { letra: "D", texto: "Monitoração eletrônica.", correta: false },
      { letra: "E", texto: "Incomunicabilidade do investigado pelo prazo máximo de trinta dias úteis.", correta: true }
    ]
  },
  // 51
  {
    idSlug: "dpp-l4-51",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Não se concederá fiança nos crimes de racismo, tortura, tráfico ilícito de entorpecentes e drogas afins, terrorismo e nos definidos como crimes hediondos, bem como na ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
    explicacao: "GABARITO: CERTO. A vedação à concessão de fiança nessas hipóteses decorre diretamente do texto constitucional (art. 5º, incisos XLII, XLIII e XLIV da CF/88) e do art. 323 do Código de Processo Penal.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 52
  {
    idSlug: "dpp-l4-52",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O art. 318 do CPP faculta ao juiz substituir a prisão preventiva pela domiciliar quando o agente for:",
    explicacao: "GABARITO: Letra D. O art. 318 do CPP autoriza prisão domiciliar quando o agente for: I - maior de 80 anos; II - extremamente debilitado por motivo de grave enfermidade; III - imprescindível aos cuidados especiais de pessoa menor de 6 anos ou com deficiência; IV - gestante; V - mulher com filho de até 12 anos de idade incompletos; VI - homem, caso seja o único responsável pelos cuidados do filho de até 12 anos de idade incompletos.",
    alternativas: [
      { letra: "A", texto: "Maior de 60 (sessenta) anos de idade, independentemente de estado de saúde.", correta: false },
      { letra: "B", texto: "Estudante universitário matriculado em curso de graduação reconhecido pelo MEC.", correta: false },
      { letra: "C", texto: "Servidor público concursado em estágio probatório.", correta: false },
      { letra: "D", texto: "Mulher com filho de até 12 (doze) anos de idade incompletos ou gestante.", correta: true },
      { letra: "E", texto: "Reu primário que confesse espontaneamente o crime imputado.", correta: false }
    ]
  },
  // 53
  {
    idSlug: "dpp-l4-53",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil AL",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O flagrante preparado ou provocado ocorre quando o agente policial induz ou instiga o suspeito a praticar o crime, criando simultaneamente mecanismos para evitar a consumação do delito, o que torna a conduta atípica e nula a prisão, nos termos da Súmula 145 do STF.",
    explicacao: "GABARITO: CERTO. A Súmula 145 do STF estabelece: 'Não há crime, quando a preparação do flagrante pela polícia torna impossível a sua consumação'. Trata-se de hipótese de crime impossível (art. 17 do CP). Diferencia-se do flagrante esperado, no qual a polícia apenas aguarda a prática do delito sem qualquer provocação indutora.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 54
  {
    idSlug: "dpp-l4-54",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do art. 306 do CPP, a prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente, ao Ministério Público e à família do preso ou à pessoa por ele indicada. No mesmo sentido, o auto de prisão em flagrante será encaminhado ao juiz e à Defensoria Pública (caso o autuado não informe advogado) no prazo de:",
    explicacao: "GABARITO: Letra B. O art. 306, § 1º, do CPP determina que 'em até 24 (vinte e quatro) horas após a realização da prisão, será encaminhado ao juiz competente o auto de prisão em flagrante e, caso o autuado não informe o nome de seu advogado, cópia integral para a Defensoria Pública'.",
    alternativas: [
      { letra: "A", texto: "12 (doze) horas.", correta: false },
      { letra: "B", texto: "24 (vinte e quatro) horas.", correta: true },
      { letra: "C", texto: "48 (quarenta e oito) horas.", correta: false },
      { letra: "D", texto: "72 (setenta e duas) horas.", correta: false },
      { letra: "E", texto: "5 (cinco) dias.", correta: false }
    ]
  },
  // 55
  {
    idSlug: "dpp-l4-55",
    disciplina_id: dId,
    assunto_id: aPrisao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A concessão da liberdade provisória com imposição de fiança sujeita o afiançado às obrigações de comparecer perante a autoridade todas as vezes que for intimado para atos do inquérito ou da instrução criminal e de não mudar de residência sem prévia permissão da autoridade.",
    explicacao: "GABARITO: CERTO. O art. 327 do CPP prevê: 'A fiança tomada por termo obrigará o afiançado a comparecer a todos os atos do inquérito e da instrução criminal, e para o julgamento, quando intimado'. E o art. 328 do CPP prevê que o afiançado não poderá mudar de residência sem prévia permissão da autoridade, sob pena de quebramento da fiança.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  }
];
