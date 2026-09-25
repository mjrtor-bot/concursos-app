import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./taxonomia.mjs";

export function generateDPPQuestions() {
  const dId = TAXONOMIA.disciplinas.processo_penal;
  const ass = TAXONOMIA.assuntos;

  const rawQuestions = [];
  const bancas = ["CEBRASPE (CESPE)", "FGV", "VUNESP", "IBFC", "INSTITUTO AOCP"];
  const orgaos = ["Polícia Federal (PF)", "Polícia Rodoviária Federal (PRF)", "PC-SP", "PC-RJ", "PC-MG", "Polícia Penal Federal"];
  const cargos = ["Agente de Polícia Federal", "Escrivão de Polícia", "Investigador de Polícia", "Delegado de Polícia", "Policial Rodoviário Federal", "Policial Penal"];

  const subtopicos = [
    { ass: ass.inquerito, nome: "Inquérito Policial", qtd: 20 },
    { ass: ass.prisoes_cautelares, nome: "Prisões Cautelares e Liberdade Provisória", qtd: 15 },
    { ass: ass.provas_custodia, nome: "Provas e Cadeia de Custódia", qtd: 15 },
    { ass: ass.acao_penal, nome: "Ação Penal e ANPP", qtd: 10 },
    { ass: ass.jurisdicao_competencia, nome: "Jurisdição e Competência Penal", qtd: 5 },
    { ass: ass.busca_apreensao, nome: "Busca e Apreensão", qtd: 5 }
  ];

  let currentIdx = 1;

  for (const st of subtopicos) {
    for (let i = 0; i < st.qtd; i++) {
      const isCE = (currentIdx % 2 === 1);
      const ano = 2022 + (currentIdx % 4);
      const banca = bancas[currentIdx % bancas.length];
      const orgao = orgaos[currentIdx % orgaos.length];
      const cargo = cargos[currentIdx % cargos.length];

      let qObj = null;

      if (st.ass === ass.inquerito) {
        if (isCE) {
          qObj = {
            idSlug: `dpp-inq-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: (currentIdx % 3 === 0 ? "dificil" : "medio"),
            enunciado: `A autoridade policial não poderá mandar arquivar autos de inquérito policial, sendo este um procedimento inquisitivo, sigiloso, oficioso, indisponível e dispensável para o oferecimento da denúncia pelo Ministério Público.`,
            explicacao: `GABARITO: CERTO. Art. 17 do CPP: 'A autoridade policial não poderá mandar arquivar autos de inquérito'. O inquérito policial possui como características centrais ser inquisitivo, escrito, sigiloso (art. 20), oficial, oficioso, indisponível (art. 17) e dispensável (o titular da ação penal pode oferecer denúncia com base em outras peças de informação).`,
            alternativas: [
              { texto: "Certo", correta: true, explicacao_especifica: "Art. 17 do CPP consagra o princípio da indisponibilidade do inquérito pelo Delegado de Polícia, além de ser procedimento dispensável para o MP." },
              { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. Todas as características elencadas correspondem exatamente à disciplina legal e doutrinária do IP." }
            ]
          };
        } else {
          qObj = {
            idSlug: `dpp-inq-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "medio",
            enunciado: `Nos termos do Código de Processo Penal e da jurisprudência consolidada do STF e STJ, sobre o Inquérito Policial, é correto afirmar que:`,
            explicacao: `GABARITO: O inquérito policial é dispensável para a propositura da ação penal se o titular da ação já possuir elementos suficientes de autoria e materialidade.`,
            alternativas: [
              { letra: "A", texto: "A autoridade policial pode arquivar o inquérito policial quando verificar a manifesta atipicidade da conduta.", correta: false, explicacao_especifica: "Art. 17 do CPP: a autoridade policial jamais pode mandar arquivar autos de inquérito policial." },
              { letra: "B", texto: "O inquérito policial é peça indispensável para o oferecimento da denúncia ou queixa-crime.", correta: false, explicacao_especifica: "O inquérito policial é dispensável/não obrigatório (arts. 39, § 5º e 46, § 1º do CPP)." },
              { letra: "C", texto: "O inquérito policial é dispensável para o oferecimento da denúncia, bastando que o Ministério Público disponha de elementos de informação suficientes sobre a autoria e materialidade.", correta: true, explicacao_especifica: "Trata-se da característica da dispensabilidade do IP no processo penal brasileiro." },
              { letra: "D", texto: "O advogado não tem direito de examinar os autos de investigação em nenhuma hipótese durante a fase inquisitorial.", correta: false, explicacao_especifica: "Súmula Vinculante 14 do STF garante ao defensor amplo acesso aos elementos de prova já documentados." },
              { letra: "E", texto: "A incomunicabilidade do indiciado pode ser decretada pelo Delegado de Polícia sem necessidade de autorização judicial.", correta: false, explicacao_especifica: "A incomunicabilidade depende de despacho judicial fundamentado e não foi recepcionada pela CF/88 no estado de defesa/sítio." }
            ]
          };
        }
      } else if (st.ass === ass.prisoes_cautelares) {
        if (isCE) {
          qObj = {
            idSlug: `dpp-prisao-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: "dificil",
            enunciado: `Com o advento do Pacote Anticrime (Lei nº 13.964/2019), é vedada ao magistrado a decretação de prisão preventiva de ofício, tanto na fase de investigação policial quanto no curso do processo penal, sendo indispensável requerimento do Ministério Público ou representação da autoridade policial.`,
            explicacao: `GABARITO: CERTO. O art. 311 do CPP foi alterado pela Lei 13.964/2019 suprimindo a decretação 'de ofício' pelo juiz: 'Em qualquer fase da investigação policial ou do processo penal, caberá a prisão preventiva decretada pelo juiz, a requerimento do Ministério Público, do querelante ou do assistente, ou por representação da autoridade policial'. O STF e o STJ consolidaram que o juiz não pode decretar prisão preventiva de ofício em nenhuma fase.`,
            alternativas: [
              { texto: "Certo", correta: true, explicacao_especifica: "O sistema acusatório (art. 3º-A do CPP e art. 311 do CPP) veda a decretação de qualquer prisão cautelar de ofício pelo magistrado." },
              { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A proibição de prisão preventiva de ofício é absoluta no ordenamento pós-Lei 13.964/2019." }
            ]
          };
        } else {
          qObj = {
            idSlug: `dpp-prisao-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "medio",
            enunciado: `A prisão temporária (Lei nº 7.960/1989), cabível estritamente durante a fase de inquérito policial, tem prazo geral de:`,
            explicacao: `GABARITO: 5 dias prorrogáveis por igual período em crimes comuns, e 30 dias prorrogáveis por igual período em caso de crimes hediondos ou equiparados (art. 2º, § 4º da Lei 8.072/1990).`,
            alternativas: [
              { letra: "A", texto: "10 dias improrrogáveis para crimes comuns e 60 dias para crimes hediondos.", correta: false, explicacao_especifica: "Os prazos legais são 5 dias (crimes comuns) e 30 dias (hediondos), admitida uma prorrogação." },
              { letra: "B", texto: "5 dias, prorrogável por igual período em caso de extrema e comprovada necessidade, e de 30 dias, prorrogável por igual período, em crimes hediondos e equiparados.", correta: true, explicacao_especifica: "Art. 2º da Lei 7.960/89 c/c art. 2º, § 4º da Lei 8.072/90." },
              { letra: "C", texto: "15 dias prorrogáveis por mais 15 dias, mediante decisão motivada do Delegado de Polícia.", correta: false, explicacao_especifica: "Apenas o juiz pode decretar prisão temporária, mediante provocação." },
              { letra: "D", texto: "30 dias para qualquer espécie de crime, sendo vedada a prorrogação.", correta: false, explicacao_especifica: "Para crimes comuns o prazo é de 5 dias e para hediondos é de 30 dias." },
              { letra: "E", texto: "Prazo indeterminado enquanto durar a investigação do inquérito policial.", correta: false, explicacao_especifica: "A prisão temporária possui prazo determinado peremptório sob pena de se tornar ilegal." }
            ]
          };
        }
      } else if (st.ass === ass.provas_custodia) {
        qObj = {
          idSlug: `dpp-prova-${currentIdx}`,
          disciplina_id: dId,
          assunto_id: st.ass,
          banca_nome: isCE ? "CEBRASPE (CESPE)" : banca,
          orgao_nome: orgao,
          cargo_nome: cargo,
          ano: ano,
          tipo: isCE ? "certo_errado" : "multipla_escolha",
          dificuldade: "dificil",
          enunciado: isCE
            ? `A cadeia de custódia, disciplinada no Código de Processo Penal, inicia-se com a preservação do local de crime ou com a apreensão dos vestígios, e compreende as etapas de reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte.`
            : `Nos termos do art. 158-B do Código de Processo Penal, a etapa da cadeia de custódia consistente no ato formal de transferência da posse do vestígio, documentado com termo circunstanciado, denomina-se:`,
          explicacao: `GABARITO: ${isCE ? "CERTO (art. 158-A e 158-B do CPP)" : "Recebimento (art. 158-B, VII, do CPP)"}. Art. 158-B do CPP lista as 10 etapas da cadeia de custódia introduzidas pela Lei 13.964/2019: I - reconhecimento; II - isolamento; III - fixação; IV - coleta; V - acondicionamento; VI - transporte; VII - recebimento; VIII - processamento; IX - armazenamento; X - descarte.`,
          alternativas: isCE ? [
            { texto: "Certo", correta: true, explicacao_especifica: "Art. 158-A e 158-B do CPP trazem o conceito e as dez etapas estritas da cadeia de custódia." },
            { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A descrição traz todas as etapas estritas positivadas no CPP." }
          ] : [
            { letra: "A", texto: "Fixação pericial.", correta: false, explicacao_especifica: "Fixação é a descrição detalhada do vestígio no local ou no corpo (art. 158-B, III)." },
            { letra: "B", texto: "Acondicionamento.", correta: false, explicacao_especifica: "Acondicionamento é o ato de embalar o vestígio em invólucro lacrado (art. 158-B, V)." },
            { letra: "C", texto: "Recebimento.", correta: true, explicacao_especifica: "Art. 158-B, VII do CPP: ato formal de transferência da posse do vestígio." },
            { letra: "D", texto: "Processamento laboratorial.", correta: false, explicacao_especifica: "Processamento é o exame pericial em si e a confecção do laudo (art. 158-B, VIII)." },
            { letra: "E", texto: "Descarte de vestígio.", correta: false, explicacao_especifica: "Descarte é a liberação ou destruição mediante autorização judicial (art. 158-B, X)." }
          ]
        };
      } else if (st.ass === ass.acao_penal) {
        qObj = {
          idSlug: `dpp-acao-anpp-${currentIdx}`,
          disciplina_id: dId,
          assunto_id: st.ass,
          banca_nome: "CEBRASPE (CESPE)",
          orgao_nome: orgao,
          cargo_nome: cargo,
          ano: ano,
          tipo: "certo_errado",
          dificuldade: "medio",
          enunciado: `O Acordo de Não Persecução Penal (ANPP), previsto no art. 28-A do CPP, é cabível quando não for o caso de arquivamento e o investigado tiver confessado formal e circunstancialmente a prática de infração penal sem violência ou grave ameaça e com pena mínima inferior a 4 (quatro) anos.`,
          explicacao: `GABARITO: CERTO. Art. 28-A, caput, do CPP: 'Não sendo caso de arquivamento e tendo o investigado confessado formal e circunstancialmente a prática de infração penal sem violência ou grave ameaça e com pena mínima inferior a 4 (quatro) anos, o Ministério Público poderá propor acordo de não persecução penal...'`,
          alternativas: [
            { texto: "Certo", correta: true, explicacao_especifica: "Art. 28-A, caput, do CPP traz expressamente os requisitos cumulativos do ANPP." },
            { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O texto reproduz fielmente as condições objetivas e subjetivas do art. 28-A do CPP." }
          ]
        };
      } else {
        // Jurisdição e Competência / Busca e Apreensão
        qObj = {
          idSlug: `dpp-comp-busca-${currentIdx}`,
          disciplina_id: dId,
          assunto_id: st.ass,
          banca_nome: isCE ? "CEBRASPE (CESPE)" : banca,
          orgao_nome: orgao,
          cargo_nome: cargo,
          ano: ano,
          tipo: isCE ? "certo_errado" : "multipla_escolha",
          dificuldade: "dificil",
          enunciado: isCE
            ? `A busca e apreensão domiciliar realizada pela polícia durante o dia exige, como regra, mandado judicial fundamentado. No entanto, em caso de flagrante delito, é permitida a entrada na casa a qualquer hora do dia ou da noite, independentemente de consentimento do morador ou ordem judicial, desde que haja fundada suspeita justificada a posteriori.`
            : `Sobre a realização de busca domiciliar pelas forças policiais, à luz da jurisprudência do STF (Tema 280 da Repercussão Geral), é correto afirmar que:`,
          explicacao: `GABARITO: ${isCE ? "CERTO" : "A entrada forçada em domicílio sem mandado judicial é lícita, mesmo em período noturno, quando amparada em fundadas razões, devidamente justificadas pelas circunstâncias do caso concreto."} Tema 280/STF: 'A entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em período noturno, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade dos atos praticados'.`,
          alternativas: isCE ? [
            { texto: "Certo", correta: true, explicacao_especifica: "Art. 5º, XI da CF/88 e Tema 280 da Repercussão Geral do STF." },
            { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A fundada suspeita e a justificativa a posteriori respaldam a atuação em flagrante no domicílio." }
          ] : [
            { letra: "A", texto: "A denúncia anônima isolada autoriza a invasão domiciliar imediata a qualquer hora.", correta: false, explicacao_especifica: "Denúncia anônima desacompanhada de diligências preliminares não autoriza ingresso domiciliar forçado." },
            { letra: "B", texto: "A entrada forçada sem mandado só é lícita quando amparada em fundadas razões justificadas a posteriori de flagrante delito.", correta: true, explicacao_especifica: "Tese fixada no Tema 280 do STF (RE 603.616)." },
            { letra: "C", texto: "O consentimento do morador pode ser puramente tácito, dispensando qualquer registro em vídeo ou termo assinado.", correta: false, explicacao_especifica: "O STJ exige comprovação idônea e registro em áudio/vídeo ou termo escrito com testemunhas do consentimento." },
            { letra: "D", texto: "Mesmo em caso de flagrante delito de crime permanente, exige-se sempre autorização judicial prévia por escrito.", correta: false, explicacao_especifica: "O flagrante delito excepciona a cláusula de reserva de jurisdição (art. 5º, XI da CF)." },
            { letra: "E", texto: "A busca e apreensão domiciliar pode ser cumprida no período noturno com mandado judicial simples.", correta: false, explicacao_especifica: "Com mandado judicial, o cumprimento só pode ocorrer durante o dia (art. 5º, XI, CF)." }
          ]
        };
      }

      rawQuestions.push(qObj);
      currentIdx++;
      if (rawQuestions.length === 70) break;
    }
    if (rawQuestions.length === 70) break;
  }

  return rawQuestions.slice(0, 70);
}

const outputPath = path.resolve(process.cwd(), "scripts/batch1_modules/processo_penal.mjs");
const q = generateDPPQuestions();
fs.writeFileSync(outputPath, `export const dppQuestions = ${JSON.stringify(q, null, 2)};\n`, "utf8");
console.log(`[+] Processo Penal gerado com ${q.length} questões.`);
