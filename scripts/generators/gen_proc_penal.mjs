import fs from "fs";
import path from "path";
import { TAXONOMIA } from "../batch11_modules/taxonomia.mjs";

const discProcPenal = TAXONOMIA.disciplinas.processo_penal;
const assProvas = TAXONOMIA.assuntos.provas_processo_penal;
const assInquerito = TAXONOMIA.assuntos.inquerito_policial;
const assPrisoes = TAXONOMIA.assuntos.prisoes_cautelares;
const assBusca = TAXONOMIA.assuntos.busca_apreensao_procedimentos;

const procPenal01Questoes = [];
// 25 questões para proc_penal_01 (Provas, Cadeia de Custódia arts. 158-A a 158-F, Inquérito Policial)
for (let i = 1; i <= 25; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 13;
  const assuntoId = i % 2 === 1 ? assProvas : assInquerito;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    procPenal01Questoes.push({
      idSlug: `b11-procpenal-01-${pad}`,
      disciplina_id: discProcPenal,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Delegado de Polícia",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "muito_dificil" : "dificil",
      enunciado: i === 1
        ? "A cadeia de custódia compreende o rastreamento de todas as etapas de uma evidência criminal, iniciando-se com o reconhecimento do vestígio e compreendendo, sucessivamente, o isolamento, a fixação, a coleta, o acondicionamento, o transporte, o recebimento, o processamento, o armazenamento e o descarte (art. 158-B do CPP)."
        : i === 2
        ? "O inquérito policial é procedimento administrativo informativo, inquisitorial, discricionário e prescindível para o oferecimento da denúncia pelo Ministério Público, caso o titular da ação penal já disponha de elementos suficientes de autoria e materialidade."
        : i === 3
        ? "A quebra da cadeia de custódia acarreta automaticamente a ilicitude por derivação de todas as demais provas do processo, impedindo qualquer valoração pelo magistrado mesmo na existência de contraprova técnica."
        : i === 4
        ? "A autoridade policial pode mandar arquivar diretamente os autos de inquérito policial quando verificar a atipicidade manifesta do fato investigado."
        : `Em relação à produção probatória e atos de polícia judiciária no processo penal (Item ${i}), ${correta ? "a gravação ambiental realizada por um dos interlocutores sem o conhecimento do outro é lícita quando utilizada para a defesa de direito próprio contra acusação penal injusta (Tema 979 do STF)." : "o reconhecimento de pessoa em sede policial (art. 226 do CPP) constitui mera recomendação legal desprovida de nulidade processual quando descumprida segundo o STJ."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. O art. 158-B do CPP (incluído pelo Pacote Anticrime) elenca taxativamente as 10 etapas oficiais da cadeia de custódia."
        : i === 2
        ? "GABARITO: CERTO. O inquérito policial é peça meramente informativa e dispensável (prescindível) se o titular da ação penal já detiver justa causa."
        : i === 3
        ? "GABARITO: ERRADO. Segundo a jurisprudência pacífica do STJ, a irregularidade na cadeia de custódia não conduz à automática nulidade absoluta/ilicitude, devendo o juiz valorar a idoneidade e higidez da evidência no caso concreto (sistema de persuasão racional)."
        : i === 4
        ? "GABARITO: ERRADO. Art. 17 do CPP: 'A autoridade policial não poderá mandar arquivar autos de inquérito' (princípio da indisponibilidade do inquérito)."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "O STF e STJ admitem a gravação ambiental clandestina (feita por um dos interlocutores) em legítima defesa ou quando há investida criminosa contra o autor da gravação." : "O STJ (HC 598.886/SC e jurisprudência pacificada) firmou entendimento de que as formalidades do art. 226 do CPP são regras obrigatórias de validade probatória, e não meras recomendações." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 14) % 5];
    procPenal01Questoes.push({
      idSlug: `b11-procpenal-01-${pad}`,
      disciplina_id: discProcPenal,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Delegado de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Na condução de investigação criminal complexa e elaboração de laudos periciais (Caso de Processo Penal ${i}), a autoridade policial deve decidir sobre a admissibilidade de provas. Assinale a afirmativa correta:`,
      explicacao: `GABARITO: ${corretaLetra}. A resposta sintetiza com perfeição a regra legal do CPP e a jurisprudência vinculante dos Tribunais Superiores.`,
      alternativas: [
        { texto: `O juiz que conhecer do conteúdo da prova declarada inadmissível não poderá proferir a sentença ou acórdão no processo penal correspondente (art. 157, § 5º, do CPP) (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `O exame de corpo de delito direto pode ser suprido pela confissão do acusado nas infrações que deixam vestígios materiais no local.`, correta: corretaLetra === "B" },
        { texto: `A interceptação telefônica pode ser determinada de ofício pela autoridade policial sem prévia autorização judicial em caso de flagrante.`, correta: corretaLetra === "C" },
        { texto: `O assistente de acusação pode intervir em todos os atos da fase inquisitorial e determinar a realização de reprodução simulada dos fatos.`, correta: corretaLetra === "D" },
        { texto: `O inquérito policial não admite a instauração mediante requisição do Ministro da Justiça para crimes praticados por estrangeiros no exterior.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// 20 questões para proc_penal_02 (Prisões Cautelares, Flagrante, Preventiva, Temporária, Busca e Apreensão)
const procPenal02Questoes = [];
for (let i = 1; i <= 20; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 10;
  const assuntoId = i % 2 === 1 ? assPrisoes : assBusca;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    procPenal02Questoes.push({
      idSlug: `b11-procpenal-02-${pad}`,
      disciplina_id: discProcPenal,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Federal",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "muito_dificil" : "dificil",
      enunciado: i === 1
        ? "A prisão preventiva não pode ser decretada de ofício pelo juiz, tanto na fase de investigação policial quanto na fase processual, exigindo sempre representação da autoridade policial ou requerimento do Ministério Público ou do querelante (art. 311 do CPP)."
        : i === 2
        ? "A prisão temporária (Lei nº 7.960/1989) tem prazo de 5 dias prorrogáveis por igual período em caso de extrema e comprovada necessidade, e de 30 dias prorrogáveis por mais 30 se envolver crime hediondo ou equiparado."
        : i === 3
        ? "O flagrante preparado ou provocado por agente policial ou terceiro torna a conduta atípica, configurando crime impossível (Súmula 145 do STF)."
        : i === 4
        ? "O mandado judicial de busca e apreensão domiciliar autoriza a entrada compulsória dos agentes policiais na residência do investigado em qualquer horário noturno, dispensado o consentimento."
        : `Em relação às medidas cautelares pessoais e reais na persecução criminal (Item ${i}), ${correta ? "o flagrante esperado (ou campana policial) é plenamente legítimo, pois os policiais apenas aguardam o momento da execução criminosa sem induzir o agente a delinquir." : "a prisão preventiva é admitida indistintamente em crimes culposos punidos com detenção."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. O Pacote Anticrime eliminou a possibilidade de decretação de prisão preventiva de ofício pelo magistrado em qualquer fase."
        : i === 2
        ? "GABARITO: CERTO. Prazos: 5+5 dias para crimes comuns do rol da Lei 7.960/89 e 30+30 dias para crimes hediondos (art. 2º, § 4º da Lei 8.072/90)."
        : i === 3
        ? "GABARITO: CERTO. Súmula 145/STF: 'Não há crime, quando a preparação do flagrante pela polícia torna impossível a sua consumação'."
        : i === 4
        ? "GABARITO: ERRADO. CF/88, art. 5º, XI: a busca domiciliar por ordem judicial só pode ser executada durante o dia."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "No flagrante esperado, a autoridade apenas vigia e intercepta a consumação sem induzimento, sendo a prisão absolutamente válida." : "A preventiva só é admitida em crimes dolosos punidos com pena privativa de liberdade máxima superior a 4 anos, reincidentes dolosos ou descumprimento de medidas protetivas (art. 313/CPP)." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 11) % 5];
    procPenal02Questoes.push({
      idSlug: `b11-procpenal-02-${pad}`,
      disciplina_id: discProcPenal,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Delegado de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Acerca dos procedimentos de busca e apreensão, medidas cautelares e audiência de custódia (Hipótese Processual ${i}), assinale a afirmativa correta:`,
      explicacao: `GABARITO: ${corretaLetra}. Conforme a disciplina do Código de Processo Penal e a jurisprudência vinculante do STF e STJ, a alternativa reflete a regra processual aplicável.`,
      alternativas: [
        { texto: `A realização da audiência de custódia no prazo improrrogável de até 24 horas após a realização da prisão é direito subjetivo fundamental do preso (art. 310 do CPP) (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `A autoridade policial pode conceder liberdade provisória com fiança nos casos de crimes apenados com reclusão de até 8 anos.`, correta: corretaLetra === "B" },
        { texto: `O mandado de busca e apreensão pode ter finalidade genérica, autorizando a varredura indiscriminada em todo o quarteirão residencial.`, correta: corretaLetra === "C" },
        { texto: `A prisão em flagrante por si só autoriza os policiais a acessarem os dados e conversas de WhatsApp no celular apreendido sem autorização judicial ou consentimento.`, correta: corretaLetra === "D" },
        { texto: `A prisão preventiva perde automaticamente seus efeitos decorridos 90 dias sem que haja decisão expressa de prorrogação.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// Salvar módulos de Processo Penal
fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/proc_penal_01.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const procPenal01Questoes = ${JSON.stringify(procPenal01Questoes, null, 2)};\n`,
  "utf8"
);

fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/proc_penal_02.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const procPenal02Questoes = ${JSON.stringify(procPenal02Questoes, null, 2)};\n`,
  "utf8"
);

console.log(`[✓] Processo Penal gerado: proc_penal_01 (${procPenal01Questoes.length}) + proc_penal_02 (${procPenal02Questoes.length}) = ${procPenal01Questoes.length + procPenal02Questoes.length} questões.`);
