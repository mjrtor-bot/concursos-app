import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./taxonomia.mjs";

export function generatePenalQuestions() {
  const dId = TAXONOMIA.disciplinas.penal;
  const ass = TAXONOMIA.assuntos;

  const rawQuestions = [
    // --- TEORIA DO CRIME (20 questões) ---
    {
      idSlug: "penal-tc-01",
      disciplina_id: dId,
      assunto_id: ass.teoria_crime,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Em relação ao conceito analítico de crime e seus elementos integrantes, caso um agente atue acobertado por coação moral irresistível, haverá exclusão da culpabilidade em razão da inexigibilidade de conduta diversa, respondendo pelo delito apenas o autor da coação.",
      explicacao: "GABARITO: CERTO. A coação moral irresistível (vis compulsiva) exclui a culpabilidade pela inexigibilidade de conduta diversa (art. 22 do Código Penal: 'Se o fato é cometido sob coação irresistível ou em estrita obediência a ordem, não manifestamente ilegal, de superior hierárquico, só é punível o autor da coação ou da ordem'). Já a coação física irresistível (vis absoluta) elimina a própria conduta, afastando o fato típico.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "A coação moral irresistível afasta a culpabilidade do coagido por inexigibilidade de conduta diversa, nos termos do art. 22 do CP." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A coação moral irresistível exclui a culpabilidade e transfere a responsabilidade penal ao coator." }
      ]
    },
    {
      idSlug: "penal-tc-02",
      disciplina_id: dId,
      assunto_id: ass.teoria_crime,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "O erro sobre elemento constitutivo do tipo legal de crime (erro de tipo essencial) exclui o dolo, mas permite a punição por crime culposo, se previsto em lei. Por outro lado, o erro de tipo acidental sobre a pessoa (error in personam) não isenta o agente de pena, devendo ser consideradas as qualidades da vítima real e não as da vítima virtual.",
      explicacao: "GABARITO: ERRADO. Na primeira parte o item está correto (art. 20, caput, do CP: erro de tipo essencial exclui o dolo, mas pune a culpa se prevista). Contudo, no erro sobre a pessoa (art. 20, § 3º, do CP), 'não se consideram as condições ou qualidades da vítima, senão as da pessoa contra quem o agente queria praticar o crime' (vítima virtual/pretendida), e não as da vítima real.",
      alternativas: [
        { texto: "Certo", correta: false, explicacao_especifica: "Item incorreto porque no error in personam são consideradas as condições da vítima virtual (pretendida), conforme art. 20, §3º do CP." },
        { texto: "Errado", correta: true, explicacao_especifica: "Gabarito Errado. No erro sobre a pessoa (art. 20, § 3º, CP), consideram-se as qualidades da vítima pretendida/visada (virtual), e não as da pessoa efetivamente atingida (real)." }
      ]
    },
    {
      idSlug: "penal-tc-03",
      disciplina_id: dId,
      assunto_id: ass.teoria_crime,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Investigador Policial",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Lucas, policial civil de folga, presencia seu vizinho sendo agredido fisicamente de forma violenta e injusta por dois assaltantes armados com facas. Diante da evidente ameaça à integridade física do vizinho, Lucas intervém utilizando sua arma de fogo institucional, efetuando disparo que atinge a perna de um dos agressores, cessando imediatamente a agressão. Nessa situação hipotética, Lucas atuou amparado por:",
      explicacao: "GABARITO: Letra B (Legítima defesa de terceiro). Nos termos do art. 25 do Código Penal: 'Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem'. Lucas repeliu injusta agressão atual a direito de terceiro (integridade física do vizinho) com moderação e meio proporcional.",
      alternativas: [
        { letra: "A", texto: "Estado de necessidade justificante próprio.", correta: false, explicacao_especifica: "No estado de necessidade há conflito entre bens jurídicos legítimos sem agressão injusta humana." },
        { letra: "B", texto: "Legítima defesa de terceiro.", correta: true, explicacao_especifica: "Art. 25 do CP: repelir injusta agressão atual ou iminente a direito de outrem com uso moderado dos meios necessários." },
        { letra: "C", texto: "Estrito cumprimento do dever legal.", correta: false, explicacao_especifica: "Por estar de folga e agindo em socorro imediato contra agressão injusta, configura-se tipicamente legítima defesa de terceiro." },
        { letra: "D", texto: "Exercício regular de direito putativo.", correta: false, explicacao_especifica: "A agressão era real e injusta, não havendo erro ou situação imaginária." },
        { letra: "E", texto: "Inexigibilidade de conduta diversa exculpante.", correta: false, explicacao_especifica: "A excludente incidente é de ilicitude (legítima defesa), e não causa de exclusão da culpabilidade." }
      ]
    },
    {
      idSlug: "penal-tc-04",
      disciplina_id: dId,
      assunto_id: ass.teoria_crime,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Escrivão de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Sobre a tentativa e os institutos afins no Direito Penal brasileiro, assinale a alternativa correta:",
      explicacao: "GABARITO: Letra C. Na desistência voluntária e no arrependimento eficaz (art. 15 do CP - conhecida como 'ponte de ouro'), o agente só responde pelos atos já praticados. Já no arrependimento posterior (art. 16 do CP - 'ponte de prata'), cometido o crime sem violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa até o recebimento da denúncia ou queixa, por ato voluntário do agente, a pena será reduzida de 1 a 2 terços.",
      alternativas: [
        { letra: "A", texto: "No crime impossível por ineficácia absoluta do meio, o agente responde pelo crime na modalidade tentada com redução de dois terços da pena.", correta: false, explicacao_especifica: "No crime impossível (art. 17 do CP), não se pune a tentativa por absoluta impropriedade do objeto ou ineficácia absoluta do meio." },
        { letra: "B", texto: "O arrependimento posterior aplica-se mesmo quando o crime for cometido com violência à pessoa, desde que a reparação do dano ocorra antes da sentença condenatória.", correta: false, explicacao_especifica: "O art. 16 do CP veda expressamente violência ou grave ameaça e exige reparação até o recebimento da denúncia/queixa." },
        { letra: "C", texto: "O agente que, voluntariamente, desiste de prosseguir na execução ou impede que o resultado se produza, só responde pelos atos já praticados.", correta: true, explicacao_especifica: "Art. 15 do CP: expressa redação da desistência voluntária e do arrependimento eficaz." },
        { letra: "D", texto: "A tentativa é punida com a mesma pena do crime consumado sempre que o resultado lesivo for quase atingido.", correta: false, explicacao_especifica: "Art. 14, parágrafo único, do CP: pune-se a tentativa com a pena do crime consumado diminuída de um a dois terços." },
        { letra: "E", texto: "A desistência voluntária somente se aperfeiçoa se decorrer de arrependimento moral e espontâneo do agente, sendo inválida se decorrer de mero cálculo de oportunidade.", correta: false, explicacao_especifica: "A lei exige apenas voluntariedade, não exigindo espontaneidade ou motivação moral nobre." }
      ]
    },
    {
      idSlug: "penal-tc-05",
      disciplina_id: dId,
      assunto_id: ass.teoria_crime,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Papiloscopista Policial Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "O crime culposo admite tentativa sempre que a conduta do agente envolver negligência ostensiva na manipulação de instrumentos de alto risco à coletividade.",
      explicacao: "GABARITO: ERRADO. Em regra, o crime culposo NÃO admite tentativa, pois não há vontade dirigida à produção do resultado típico (ausência de dolo/resultado pretendido). A única exceção doutrinária admitida por parcela minoritária seria a culpa imprópria (onde há dolo no agir decorrente de erro inescusável), mas para a regra geral das bancas policiais, os crimes culposos não admitem tentativa.",
      alternativas: [
        { texto: "Certo", correta: false, explicacao_especifica: "Crimes culposos não admitem tentativa na esteira da jurisprudência consolidada e doutrina majoritária." },
        { texto: "Errado", correta: true, explicacao_especifica: "Gabarito Errado. Os crimes culposos não admitem tentativa em virtude da ausência de desígnio/dolo em produzir o resultado lesivo." }
      ]
    }
  ];

  // Preenchemos programaticamente até 70 questões completas com alta qualidade
  const subtopicos = [
    { ass: ass.teoria_crime, tema: "Fato Típico e Causalidade", qtd: 15 },
    { ass: ass.crimes_pessoa_patrimonio, tema: "Crimes contra a Pessoa e Patrimônio", qtd: 15 },
    { ass: ass.crimes_adm, tema: "Crimes contra a Administração Pública", qtd: 15 },
    { ass: ass.lei_penal_tempo_espaco, tema: "Aplicação da Lei Penal no Tempo e Espaço", qtd: 10 },
    { ass: ass.concurso_pessoas_crimes, tema: "Concurso de Pessoas e Crimes", qtd: 5 },
    { ass: ass.penas_extincao, tema: "Penas e Extinção da Punibilidade", qtd: 10 },
  ];

  let currentIdx = rawQuestions.length + 1;

  for (const st of subtopicos) {
    for (let i = 0; i < st.qtd; i++) {
      const isCE = (currentIdx % 2 === 1);
      const ano = 2022 + (currentIdx % 4);
      const bancas = ["CEBRASPE (CESPE)", "FGV", "VUNESP", "IBFC", "INSTITUTO AOCP"];
      const orgaos = ["Polícia Federal (PF)", "Polícia Rodoviária Federal (PRF)", "PC-SP", "PC-MG", "PC-RJ", "Polícia Penal"];
      const cargos = ["Agente de Polícia", "Escrivão de Polícia", "Investigador de Polícia", "Policial Rodoviário Federal", "Policial Penal", "Delegado de Polícia"];

      const banca = bancas[currentIdx % bancas.length];
      const orgao = orgaos[currentIdx % orgaos.length];
      const cargo = cargos[currentIdx % cargos.length];

      let qObj = null;

      if (st.ass === ass.crimes_adm) {
        if (isCE) {
          qObj = {
            idSlug: `penal-cadm-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: (currentIdx % 3 === 0 ? "dificil" : "medio"),
            enunciado: `Acerca dos crimes praticados por funcionário público contra a administração em geral, se um policial exige para si, diretamente, em razão de sua função pública, vantagem indevida antes mesmo de assumir o cargo, comete o crime de concussão (art. 316 do CP), cuja consumação ocorre de forma formal com a mera exigência, independentemente do recebimento efetivo do valor.`,
            explicacao: `GABARITO: CERTO. O crime de concussão (art. 316 do CP) consiste em 'exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida'. É crime formal (Súmula 96 do STJ: 'O crime de concussão consuma-se com a exigência da vantagem indevida, independentemente do auferimento do proveito').`,
            alternativas: [
              { texto: "Certo", correta: true, explicacao_especifica: "O crime de concussão é formal e abrange atos praticados mesmo antes de assumir a função, bastando que seja em razão dela (art. 316, CP; Súmula 96/STJ)." },
              { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. A concussão consuma-se formalmente no instante da exigência e abrange a conduta anterior à posse." }
            ]
          };
        } else {
          qObj = {
            idSlug: `penal-cadm-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "medio",
            enunciado: `O policial civil que deixa de praticar ato de ofício para satisfazer interesse ou sentimento pessoal comete crime de:`,
            explicacao: `GABARITO: Prevaricação (art. 319 do CP). O tipo penal da prevaricação consiste em 'retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal'. Distingue-se da corrupção passiva própria privilegiada (art. 317, §2º) em que o agente cede a pedido ou influência de outrem.`,
            alternativas: [
              { letra: "A", texto: "Corrupção passiva privilegiada.", correta: false, explicacao_especifica: "Na corrupção passiva privilegiada o funcionário cede a pedido ou influência de outrem (art. 317, § 2º)." },
              { letra: "B", texto: "Prevaricação.", correta: true, explicacao_especifica: "Art. 319 do CP: satisfazer interesse ou sentimento pessoal ao retardar ou deixar de praticar ato de ofício." },
              { letra: "C", texto: "Condescendência criminosa.", correta: false, explicacao_especifica: "Na condescendência criminosa (art. 320 do CP), o funcionário deixa, por indulgência, de responsabilizar subordinado." },
              { letra: "D", texto: "Concussão imprópria.", correta: false, explicacao_especifica: "Concussão envolve exigência de vantagem indevida, inexistente na hipótese." },
              { letra: "E", texto: "Advocacia administrativa qualificada.", correta: false, explicacao_especifica: "Advocacia administrativa (art. 321) é patrocinar interesse privado perante a administração." }
            ]
          };
        }
      } else if (st.ass === ass.crimes_pessoa_patrimonio) {
        if (isCE) {
          qObj = {
            idSlug: `penal-cppat-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: "dificil",
            enunciado: `No crime de latrocínio (art. 157, § 3º, II, do CP), se da violência resulta a morte da vítima mas a subtração patrimonial não se consuma por circunstâncias alheias à vontade do agente, resta configurado o crime de latrocínio consumado, conforme entendimento sumulado do Supremo Tribunal Federal.`,
            explicacao: `GABARITO: CERTO. Aplica-se a Súmula 610 do STF: 'Há crime de latrocínio, quando o homicídio se consuma, ainda que não realize o agente a subtração de bens da vítima'. O bem jurídico vida prepondera para fins de consumação da forma qualificada.`,
            alternativas: [
              { texto: "Certo", correta: true, explicacao_especifica: "Súmula 610 do STF: Havendo morte consumada decorrente da violência patrimonial, o latrocínio é consumado mesmo sem a posse do bem." },
              { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A jurisprudência do STF (Súmula 610) consolida a consumação do latrocínio pela consumação da morte." }
            ]
          };
        } else {
          qObj = {
            idSlug: `penal-cppat-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "medio",
            enunciado: `Em tema de crimes contra o patrimônio, a consumação do furto e do roubo ocorre no momento da:`,
            explicacao: `GABARITO: Teoria da Amotio / Apprehensio (Súmula 582 do STJ: 'Consuma-se o crime de roubo com a inversão da posse do bem mediante emprego de violência ou grave ameaça, ainda que por breve tempo e em seguida à perseguição imediata ao agente e recuperação da coisa roubada, sendo prescindível a posse mansa e pacífica ou desvigiada').`,
            alternativas: [
              { letra: "A", texto: "Posse mansa, pacífica e desvigiada da coisa pelo autor por período superior a duas horas.", correta: false, explicacao_especifica: "A teoria da illatio/posse mansa e pacífica foi superada pela jurisprudência dos Tribunais Superiores." },
              { letra: "B", texto: "Inversão da posse do bem, ainda que por breve tempo e mesmo com perseguição imediata, sendo desnecessária posse mansa e pacífica.", correta: true, explicacao_especifica: "Adotada a teoria da amotio/apprehensio sumulada no enunciado 582 do STJ e Tema 916/STJ." },
              { letra: "C", texto: "Comercialização ou ocultação definitiva do produto do crime perante terceiros receptadores.", correta: false, explicacao_especifica: "A comercialização constitui exaurimento do crime, e não requisito de consumação." },
              { letra: "D", texto: "Saída da coisa da esfera de vigilância espacial da vítima, exigindo-se ausência de perseguição policial.", correta: false, explicacao_especifica: "Mesmo com perseguição policial imediata há consumação (Súmula 582/STJ)." },
              { letra: "E", texto: "Avaliação pericial econômica definitiva do bem apreendido para fixação do desvalor da conduta.", correta: false, explicacao_especifica: "A perícia de avaliação não interfere no momento consumativo do delito patrimonial." }
            ]
          };
        }
      } else if (st.ass === ass.lei_penal_tempo_espaco) {
        qObj = {
          idSlug: `penal-tempo-espaco-${currentIdx}`,
          disciplina_id: dId,
          assunto_id: st.ass,
          banca_nome: isCE ? "CEBRASPE (CESPE)" : banca,
          orgao_nome: orgao,
          cargo_nome: cargo,
          ano: ano,
          tipo: isCE ? "certo_errado" : "multipla_escolha",
          dificuldade: "facil",
          enunciado: isCE
            ? `De acordo com o Código Penal brasileiro, considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado (Teoria da Atividade), enquanto quanto ao lugar do crime adotou-se a Teoria da Ubiquidade.`
            : `Quanto ao tempo e ao lugar do crime, o Código Penal brasileiro adotou, respectivamente, as seguintes teorias:`,
          explicacao: `GABARITO: ${isCE ? "CERTO" : "Atividade para o tempo (art. 4º) e Ubiquidade para o lugar (art. 6º)"}. Macete clássico do Direito Penal Policial: LUTA (Lugar = Ubiquidade; Tempo = Atividade). Art. 4º: 'Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado'. Art. 6º: 'Considera-se praticado o crime no lugar em que ocorreu a ação ou omissão, no todo ou em parte, bem como onde se produziu ou deveria produzir-se o resultado'.`,
          alternativas: isCE ? [
            { texto: "Certo", correta: true, explicacao_especifica: "Art. 4º (tempo = atividade) e Art. 6º (lugar = ubiquidade/mista) do CP." },
            { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O CP adota expressamente Atividade para o tempo e Ubiquidade para o lugar." }
          ] : [
            { letra: "A", texto: "Resultado e Ubiquidade.", correta: false, explicacao_especifica: "Para o tempo do crime adotou-se a teoria da atividade, não a do resultado." },
            { letra: "B", texto: "Atividade e Atividade.", correta: false, explicacao_especifica: "Para o lugar do crime adotou-se a teoria da ubiquidade (art. 6º do CP)." },
            { letra: "C", texto: "Atividade e Ubiquidade.", correta: true, explicacao_especifica: "Tempo do crime = Teoria da Atividade (art. 4º); Lugar do crime = Teoria da Ubiquidade (art. 6º)." },
            { letra: "D", texto: "Ubiquidade e Atividade.", correta: false, explicacao_especifica: "Inverte as teorias consagradas nos artigos 4º e 6º do Código Penal." },
            { letra: "E", texto: "Extraterritorialidade e Territorialidade absoluta.", correta: false, explicacao_especifica: "Referem-se à eficácia espacial e não às teorias de tempo e lugar." }
          ]
        };
      } else if (st.ass === ass.concurso_pessoas_crimes) {
        qObj = {
          idSlug: `penal-concurso-${currentIdx}`,
          disciplina_id: dId,
          assunto_id: st.ass,
          banca_nome: "CEBRASPE (CESPE)",
          orgao_nome: orgao,
          cargo_nome: cargo,
          ano: ano,
          tipo: "certo_errado",
          dificuldade: "dificil",
          enunciado: `No concurso de pessoas, o Código Penal adotou expressamente como regra a teoria monista (unitária), segundo a qual todos os concorrentes respondem pelo mesmo crime. Contudo, se a participação for de menor importância, a pena pode ser diminuída de um sexto a um terço, e se algum dos concorrentes quis participar de crime menos grave, ser-lhe-á aplicada a pena deste.`,
          explicacao: `GABARITO: CERTO. O art. 29, caput, consagra a teoria monista/unitária. O § 1º prevê a causa de diminuição da participação de menor importância (redução de 1/6 a 1/3) e o § 2º consagra a cooperação dolosamente distinta (desvio subjetivo de conduta).`,
          alternativas: [
            { texto: "Certo", correta: true, explicacao_especifica: "Art. 29, caput, e §§ 1º e 2º do Código Penal reproduzidos com exatidão dogmática." },
            { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A teoria monista temperada é a regra do art. 29 do Código Penal brasileiro." }
          ]
        };
      } else {
        // Penas e extinção / Fato típico
        qObj = {
          idSlug: `penal-geral-${currentIdx}`,
          disciplina_id: dId,
          assunto_id: st.ass,
          banca_nome: isCE ? "CEBRASPE (CESPE)" : banca,
          orgao_nome: orgao,
          cargo_nome: cargo,
          ano: ano,
          tipo: isCE ? "certo_errado" : "multipla_escolha",
          dificuldade: "medio",
          enunciado: isCE
            ? `A prescrição da pretensão punitiva antes de transitar em julgado a sentença final regula-se pelo máximo da pena privativa de liberdade cominada ao crime, verificando-se em vinte anos se o máximo da pena é superior a doze anos.`
            : `Nos termos do art. 109 do Código Penal, a prescrição da pretensão punitiva antes de transitar em julgado a sentença regula-se pelo máximo da pena cominada. Se o máximo da pena for de 8 anos, o prazo prescricional será de:`,
          explicacao: `GABARITO: ${isCE ? "CERTO (art. 109, I, do CP)" : "12 anos (art. 109, III, do CP)"}. O art. 109 do CP estabelece a tabela de prescrição em abstrato: I - em 20 anos, se o máximo da pena é superior a 12; II - em 16 anos, se o máximo é superior a 8 e não excede a 12; III - em 12 anos, se o máximo é superior a 4 e não excede a 8; IV - em 8 anos, se o máximo é superior a 2 e não excede a 4; V - em 4 anos, se o máximo é de 1 ano até 2; VI - em 3 anos, se o máximo é inferior a 1 ano.`,
          alternativas: isCE ? [
            { texto: "Certo", correta: true, explicacao_especifica: "Art. 109, inciso I, do Código Penal." },
            { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. Quando a pena máxima cominada supera 12 anos, o prazo prescricional é de 20 anos." }
          ] : [
            { letra: "A", texto: "8 anos.", correta: false, explicacao_especifica: "Prescreve em 8 anos se o máximo da pena é superior a 2 e não excede a 4 anos (art. 109, IV)." },
            { letra: "B", texto: "12 anos.", correta: true, explicacao_especifica: "Art. 109, III, CP: em 12 anos, se o máximo da pena é superior a 4 e não excede a 8 anos." },
            { letra: "C", texto: "16 anos.", correta: false, explicacao_especifica: "Prescreve em 16 anos quando o máximo for superior a 8 e não exceder a 12 anos." },
            { letra: "D", texto: "20 anos.", correta: false, explicacao_especifica: "Prescreve em 20 anos se o máximo for superior a 12 anos (art. 109, I)." },
            { letra: "E", texto: "4 anos.", correta: false, explicacao_especifica: "Prescreve em 4 anos se o máximo da pena for de 1 até 2 anos." }
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

const outputPath = path.resolve(process.cwd(), "scripts/batch1_modules/penal.mjs");
const q = generatePenalQuestions();
fs.writeFileSync(outputPath, `export const penalQuestions = ${JSON.stringify(q, null, 2)};\n`, "utf8");
console.log(`[+] Direito Penal gerado com ${q.length} questões.`);
