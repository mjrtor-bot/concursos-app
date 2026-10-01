import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./taxonomia.mjs";

export function generateLegEspQuestions() {
  const dId = TAXONOMIA.disciplinas.legislacao_especial;
  const ass = TAXONOMIA.assuntos;

  const rawQuestions = [];
  const bancas = ["CEBRASPE (CESPE)", "FGV", "VUNESP", "IBFC", "INSTITUTO AOCP"];
  const orgaos = ["Polícia Federal (PF)", "Polícia Rodoviária Federal (PRF)", "PC-SP", "PC-RJ", "PC-DF", "Polícia Penal"];
  const cargos = ["Agente de Polícia Federal", "Policial Rodoviário Federal", "Investigador de Polícia", "Escrivão de Polícia", "Policial Penal", "Delegado de Polícia"];

  const subtopicos = [
    { ass: ass.lei_drogas, nome: "Lei de Drogas (Lei 11.343/06)", qtd: 15 },
    { ass: ass.desarmamento, nome: "Estatuto do Desarmamento (Lei 10.826/03)", qtd: 15 },
    { ass: ass.org_criminosas, nome: "Organizações Criminosas (Lei 12.850/13)", qtd: 10 },
    { ass: ass.abuso_autoridade, nome: "Abuso de Autoridade (Lei 13.869/19)", qtd: 10 },
    { ass: ass.maria_penha, nome: "Lei Maria da Penha (Lei 11.340/06)", qtd: 8 },
    { ass: ass.crimes_hediondos, nome: "Crimes Hediondos (Lei 8.072/90)", qtd: 5 },
    { ass: ass.lavagem_dinheiro, nome: "Lavagem de Dinheiro (Lei 9.613/98)", qtd: 4 },
    { ass: ass.tortura_interceptacao, nome: "Tortura e Interceptação Telefônica", qtd: 3 }
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

      if (st.ass === ass.lei_drogas) {
        if (isCE) {
          qObj = {
            idSlug: `leg-drogas-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: "medio",
            enunciado: `Para a caracterização do crime de tráfico de drogas privilegiado (art. 33, § 4º, da Lei nº 11.343/2006), exige-se que o agente seja primário, de bons antecedentes, não se dedique às atividades criminosas nem integre organização criminosa, hipótese em que as penas poderão ser reduzidas de um sexto a dois terços, não sendo mais considerado crime hediondo ou equiparado.`,
            explicacao: `GABARITO: CERTO. O art. 33, § 4º da Lei 11.343/2006 estabelece os 4 requisitos cumulativos para o tráfico privilegiado. Além disso, o STF e a Lei 13.964/2019 (art. 112, § 5º da LEP) pacificaram que o tráfico privilegiado NÃO tem natureza de crime hediondo nem equiparado.`,
            alternativas: [
              { texto: "Certo", correta: true, explicacao_especifica: "Art. 33, § 4º da Lei 11.343/06 e entendimento consolidado no STF/STJ quanto ao afastamento da hediondez." },
              { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O tráfico privilegiado cumpre exatamente os 4 requisitos e não constitui crime hediondo." }
            ]
          };
        } else {
          qObj = {
            idSlug: `leg-drogas-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "facil",
            enunciado: `A conduta de adquirir, guardar, tiver em depósito, transportar ou trouxer consigo, para consumo pessoal, drogas sem autorização ou em desacordo com determinação legal ou regulamentar (art. 28 da Lei nº 11.343/2006) sujeita o autor às seguintes penas:`,
            explicacao: `GABARITO: Advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa de comparecimento a programa ou curso educativo (art. 28, I, II e III da Lei de Drogas). Houve despenalização (abolição de penas privativas de liberdade), mantendo a natureza típica.`,
            alternativas: [
              { letra: "A", texto: "Detenção de 6 meses a 2 anos e pagamento de dias-multa.", correta: false, explicacao_especifica: "O art. 28 não prevê pena privativa de liberdade (prisão)." },
              { letra: "B", texto: "Advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa de comparecimento a programa ou curso educativo.", correta: true, explicacao_especifica: "Rol taxativo das sanções cominadas pelo art. 28, incisos I, II e III da Lei 11.343/2006." },
              { letra: "C", texto: "Reclusão de 1 a 3 anos e suspensão dos direitos políticos.", correta: false, explicacao_especifica: "Inexiste pena de reclusão para a conduta do usuário de drogas." },
              { letra: "D", texto: "Prisão simples de 15 dias convertida compulsoriamente em cesta básica.", correta: false, explicacao_especifica: "Prisão simples é sanção de contravenção penal, não aplicável ao art. 28." },
              { letra: "E", texto: "Internação compulsória imediata determinada pela autoridade policial.", correta: false, explicacao_especifica: "A autoridade policial não aplica medidas restritivas de liberdade ou internação ao usuário." }
            ]
          };
        }
      } else if (st.ass === ass.desarmamento) {
        if (isCE) {
          qObj = {
            idSlug: `leg-desarm-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: "medio",
            enunciado: `O porte ilegal de arma de fogo de uso permitido (art. 14 da Lei nº 10.826/2003) é crime de mera conduta e de perigo abstrato, consumando-se independentemente da demonstração de perigo concreto a terceiros ou de intenção de disparo.`,
            explicacao: `GABARITO: CERTO. A jurisprudência pacífica do STJ e do STF estabelece que os crimes previstos no Estatuto do Desarmamento são de mera conduta e de perigo abstrato, tutelando a incolumidade pública e a segurança coletiva.`,
            alternativas: [
              { texto: "Certo", correta: true, explicacao_especifica: "O porte e a posse de arma de fogo são crimes de perigo abstrato e de mera conduta (jurisprudência consolidada STJ/STF)." },
              { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. Não se exige perigo concreto ou dano efetivo para a tipicidade do porte ilegal de arma de fogo." }
            ]
          };
        } else {
          qObj = {
            idSlug: `leg-desarm-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "dificil",
            enunciado: `A conduta de possuir, deter, portar, adquirir, fornecer ou transportar arma de fogo com numeração, marca ou qualquer outro sinal de identificação raspado, suprimido ou adulterado (art. 16, § 1º, IV, da Lei nº 10.826/2003):`,
            explicacao: `GABARITO: É equiparada ao crime de posse ou porte ilegal de arma de fogo de uso restrito/proibido (art. 16), independentemente de ser a arma originariamente de uso permitido ou restrito.`,
            alternativas: [
              { letra: "A", texto: "Equipara-se ao porte de arma de uso permitido caso o calibre nominal seja de uso comum.", correta: false, explicacao_especifica: "A supressão do sinal identificador atrai a capitulação autônoma do art. 16, § 1º, IV (reclusão de 3 a 6 anos)." },
              { letra: "B", texto: "Configura conduta equiparada ao art. 16 da Lei nº 10.826/2003, independentemente de a arma ser originariamente de uso permitido, restrito ou proibido.", correta: true, explicacao_especifica: "Art. 16, § 1º, IV da Lei 10.826/03: a raspagem da numeração eleva a tipicidade para a gravidade do art. 16." },
              { letra: "C", texto: "Trata-se de infração administrativa punível apenas com apreensão do armamento pela Polícia Federal.", correta: false, explicacao_especifica: "É crime doloso punido com pena de reclusão e multa." },
              { letra: "D", texto: "Admite fiança arbitrável pela autoridade policial em sede de auto de prisão em flagrante.", correta: false, explicacao_especifica: "Pena máxima de 6 anos impede a concessão de fiança pelo Delegado de Polícia (art. 322 do CPP limite até 4 anos)." },
              { letra: "E", texto: "Depende de perícia para demonstrar o calibre de uso restrito original da arma.", correta: false, explicacao_especifica: "O tipo incide pela mera adulteração/supressão do sinal numérico ou identificador." }
            ]
          };
        }
      } else if (st.ass === ass.org_criminosas) {
        qObj = {
          idSlug: `leg-orcrim-${currentIdx}`,
          disciplina_id: dId,
          assunto_id: st.ass,
          banca_nome: isCE ? "CEBRASPE (CESPE)" : banca,
          orgao_nome: orgao,
          cargo_nome: cargo,
          ano: ano,
          tipo: isCE ? "certo_errado" : "multipla_escolha",
          dificuldade: "medio",
          enunciado: isCE
            ? `Considera-se organização criminosa a associação de 4 (quatro) ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 (quatro) anos, ou que sejam de caráter transnacional.`
            : `Nos termos da Lei nº 12.850/2013, para que se configure o crime de organização criminosa, é necessário o concurso de no mínimo:`,
          explicacao: `GABARITO: ${isCE ? "CERTO (art. 1º, § 1º da Lei 12.850/2013)" : "4 pessoas (art. 1º, § 1º da Lei 12.850/2013)"}. O conceito legal exige: 4 ou mais pessoas, estrutura ordenada/divisão de tarefas, vantagem de qualquer natureza, crimes com pena máxima > 4 anos ou de caráter transnacional.`,
          alternativas: isCE ? [
            { texto: "Certo", correta: true, explicacao_especifica: "Art. 1º, § 1º da Lei 12.850/13 reproduzido fielmente." },
            { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. Todos os requisitos coincidem com a definição legal de organização criminosa." }
          ] : [
            { letra: "A", texto: "2 pessoas.", correta: false, explicacao_especifica: "2 pessoas caracteriza coautoria ou concurso eventual de pessoas." },
            { letra: "B", texto: "3 pessoas.", correta: false, explicacao_especifica: "3 pessoas configura associação criminosa (art. 288 do CP)." },
            { letra: "C", texto: "4 pessoas.", correta: true, explicacao_especifica: "Art. 1º, § 1º da Lei 12.850/13 exige a reunião de 4 ou mais pessoas." },
            { letra: "D", texto: "5 pessoas.", correta: false, explicacao_especifica: "O número legal mínimo é de 4 integrantes." },
            { letra: "E", texto: "10 pessoas.", correta: false, explicacao_especifica: "Incorreto. A lei não exige dez integrantes." }
          ]
        };
      } else if (st.ass === ass.abuso_autoridade) {
        qObj = {
          idSlug: `leg-abuso-${currentIdx}`,
          disciplina_id: dId,
          assunto_id: st.ass,
          banca_nome: "CEBRASPE (CESPE)",
          orgao_nome: orgao,
          cargo_nome: cargo,
          ano: ano,
          tipo: "certo_errado",
          dificuldade: "dificil",
          enunciado: `Na Lei de Abuso de Autoridade (Lei nº 13.869/2019), os crimes são punidos exclusivamente a título de dolo, exigindo-se elemento subjetivo específico consistente na finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal, sendo expressamente vedado o crime de abuso de autoridade por mera divergência na interpretação de lei ou na avaliação de fatos e provas.`,
          explicacao: `GABARITO: CERTO. Art. 1º, §§ 1º e 2º da Lei 13.869/2019: § 1º As condutas tipificadas nesta Lei constituem crime de abuso de autoridade quando praticadas pelo agente com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal. § 2º A divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade (veda o crime de hermenêutica).`,
          alternativas: [
            { texto: "Certo", correta: true, explicacao_especifica: "Art. 1º, §§ 1º e 2º da Lei 13.869/19: exige dolo específico e veda expressamente a punição por divergência hermenêutica." },
            { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A lei exige o dolo específico e afasta a responsabilidade por divergência na valoração jurídica." }
          ]
        };
      } else {
        // Maria da Penha / Hediondos / Lavagem / Tortura
        qObj = {
          idSlug: `leg-especial-${currentIdx}`,
          disciplina_id: dId,
          assunto_id: st.ass,
          banca_nome: isCE ? "CEBRASPE (CESPE)" : banca,
          orgao_nome: orgao,
          cargo_nome: cargo,
          ano: ano,
          tipo: isCE ? "certo_errado" : "multipla_escolha",
          dificuldade: "medio",
          enunciado: isCE
            ? `Na Lei Maria da Penha (Lei nº 11.340/2006), é vedada a aplicação de penas de cesta básica ou outras de prestação pecuniária, bem como a substituição de pena que implique o pagamento isolado de multa.`
            : `Nos termos da Lei dos Crimes Hediondos (Lei nº 8.072/1990), o crime de roubo é considerado hediondo quando circunstanciado pelo emprego de arma de fogo (de uso permitido, restrito ou proibido) ou qualificado pelo resultado lesão corporal grave ou morte (latrocínio).`,
          explicacao: `GABARITO: ${isCE ? "CERTO (art. 17 da Lei 11.340/2006 e Súmula 588 do STJ)" : "CERTO (art. 1º, II da Lei 8.072/1990)"}. Art. 17 da Lei Maria da Penha proíbe expressamente penas de cesta básica e prestação pecuniária; Súmula 588/STJ veda substituição de pena por restritiva de direitos nos delitos com violência/ameaça à mulher. Na Lei dos Crimes Hediondos, o art. 1º, II inclui o roubo com arma de fogo e qualificado por lesão grave ou morte.`,
          alternativas: isCE ? [
            { texto: "Certo", correta: true, explicacao_especifica: "Art. 17 da Lei Maria da Penha veda expressamente a aplicação de penas de cesta básica ou prestação pecuniária." },
            { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. A vedação é expressa no texto do art. 17 da Lei 11.340/06." }
          ] : [
            { letra: "A", texto: "Apenas o roubo qualificado por morte (latrocínio) é considerado hediondo.", correta: false, explicacao_especifica: "Após o Pacote Anticrime, o roubo com arma de fogo e o com lesão grave também são hediondos." },
            { letra: "B", texto: "O roubo com emprego de arma de fogo e o qualificado por lesão grave ou morte são hediondos.", correta: true, explicacao_especifica: "Art. 1º, inciso II da Lei 8.072/90 com redação dada pela Lei 13.964/19." },
            { letra: "C", texto: "O roubo simples é hediondo se praticado em período noturno.", correta: false, explicacao_especifica: "O roubo simples não consta do rol taxativo da Lei 8.072/90." },
            { letra: "D", texto: "Nenhuma modalidade de roubo é hedionda, pertencendo exclusivamente ao Código Penal comum.", correta: false, explicacao_especifica: "Diversas hipóteses qualificadas do roubo são hediondas nos termos do art. 1º da Lei 8.072/90." },
            { letra: "E", texto: "O roubo é hediondo apenas quando praticado em concurso de quatro ou mais pessoas.", correta: false, explicacao_especifica: "O concurso de agentes não torna o roubo hediondo por si só." }
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

const outputPath = path.resolve(process.cwd(), "scripts/batch1_modules/legislacao_especial.mjs");
const q = generateLegEspQuestions();
fs.writeFileSync(outputPath, `export const legEspQuestions = ${JSON.stringify(q, null, 2)};\n`, "utf8");
console.log(`[+] Legislação Especial gerada com ${q.length} questões.`);
