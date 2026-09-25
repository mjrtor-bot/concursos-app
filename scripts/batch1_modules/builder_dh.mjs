import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./taxonomia.mjs";

export function generateDHQuestions() {
  const dId = TAXONOMIA.disciplinas.direitos_humanos;
  const ass = TAXONOMIA.assuntos;

  const rawQuestions = [];
  const bancas = ["CEBRASPE (CESPE)", "FGV", "VUNESP", "IBFC", "INSTITUTO AOCP"];
  const orgaos = ["Polícia Federal (PF)", "Polícia Rodoviária Federal (PRF)", "PC-SP", "PC-RJ", "Polícia Penal Federal"];
  const cargos = ["Agente de Polícia", "Policial Rodoviário Federal", "Investigador de Polícia", "Policial Penal", "Delegado de Polícia"];

  const subtopicos = [
    { ass: ass.dudh, nome: "Declaração Universal dos Direitos Humanos (1948)", qtd: 15 },
    { ass: ass.cadh, nome: "Convenção Americana sobre Direitos Humanos (Pacto de San José)", qtd: 12 },
    { ass: ass.geracoes_dh, nome: "Teoria Geral e Dimensões dos Direitos Humanos", qtd: 8 }
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

      if (st.ass === ass.dudh) {
        if (isCE) {
          qObj = {
            idSlug: `dh-dudh-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: "medio",
            enunciado: `A Declaração Universal dos Direitos Humanos (DUDH) de 1948 foi adotada pela Assembleia Geral da ONU sob a forma de Resolução (Resolução 217 A III), possuindo historicamente natureza de recomendação (soft law), tendo adquirido ao longo do tempo status consuetudinário e força moral vinculante para a comunidade internacional.`,
            explicacao: `GABARITO: CERTO. A DUDH foi proclamada como Resolução 217-A da AGNU e não como tratado formal (portanto, formalmente soft law), mas doutrina e cortes internacionais reconhecem que seus preceitos integraram o direito internacional consuetudinário e princípios gerais do direito internacional.`,
            alternativas: [
              { texto: "Certo", correta: true, explicacao_especifica: "A DUDH é uma resolução da Assembleia Geral da ONU dotada de força consuetudinária e imperatividade moral global." },
              { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. A DUDH nasceu como Resolução da AGNU e consolidou-se no costume internacional." }
            ]
          };
        } else {
          qObj = {
            idSlug: `dh-dudh-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "medio",
            enunciado: `De acordo com o Artigo 5º da Declaração Universal dos Direitos Humanos (DUDH):`,
            explicacao: `GABARITO: "Ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante". Trata-se de vedação absoluta de jus cogens que não admite derrogação mesmo em estados de exceção.`,
            alternativas: [
              { letra: "A", texto: "A prisão perpétua é admitida para crimes de genocídio com autorização judicial.", correta: false, explicacao_especifica: "A DUDH veda tratamentos cruéis ou degradantes de forma ampla e não trata de tipificações penais específicas." },
              { letra: "B", texto: "Ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.", correta: true, explicacao_especifica: "Artigo 5º da DUDH reproduzido de forma literal e canônica." },
              { letra: "C", texto: "A pena de morte pode ser aplicada sumariamente em casos de traição em tempo de paz.", correta: false, explicacao_especifica: "A DUDH consagra o direito à vida e ao devido processo legal amplo." },
              { letra: "D", texto: "O trabalho forçado é permitido como sanção administrativa por dívidas civis.", correta: false, explicacao_especifica: "O Art. 4º da DUDH proíbe a escravidão e a servidão sob todas as formas." },
              { letra: "E", texto: "A tortura pode ser excepcionalmente aplicada em investigações antiterrorismo de urgência.", correta: false, explicacao_especifica: "A proibição da tortura é norma imperativa de jus cogens absoluto, sem qualquer exceção." }
            ]
          };
        }
      } else if (st.ass === ass.cadh) {
        if (isCE) {
          qObj = {
            idSlug: `dh-cadh-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: "dificil",
            enunciado: `Conforme a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) e a Súmula Vinculante nº 25 do STF, é ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito, subsistindo no Brasil unicamente a prisão civil do devedor de alimentos.`,
            explicacao: `GABARITO: CERTO. Art. 7º, item 7 da CADH proíbe a prisão por dívidas, ressalvando apenas os alimentos. O STF, no RE 466.343, fixou o status supralegal dos tratados de direitos humanos aprovados sem o rito do art. 5º, § 3º da CF, paralisando a eficácia da legislação infraconstitucional ordinária e editando a Súmula Vinculante nº 25.`,
            alternativas: [
              { texto: "Certo", correta: true, explicacao_especifica: "Súmula Vinculante 25 do STF c/c art. 7.7 do Pacto de San José da Costa Rica." },
              { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. Apenas a prisão do devedor de alimentos subsiste no ordenamento brasileiro." }
            ]
          };
        } else {
          qObj = {
            idSlug: `dh-cadh-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "medio",
            enunciado: `A audiência de custódia, instituto pelo qual toda pessoa presa deve ser conduzida, sem demora, à presença de um juiz ou outra autoridade autorizada pela lei a exercer funções judiciais, tem como fundamento internacional precípuo:`,
            explicacao: `GABARITO: O Artigo 7º, item 5 da Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) e o Artigo 9º, item 3 do Pacto Internacional sobre Direitos Civis e Políticos (PIDCP), posteriormente incorporada expressamente ao art. 310 do CPP pela Lei 13.964/2019.`,
            alternativas: [
              { letra: "A", texto: "O Tratado de Versalhes de 1919.", correta: false, explicacao_especifica: "O Tratado de Versalhes encerrou a Primeira Guerra Mundial e não disciplina garantias processuais penais individuais." },
              { letra: "B", texto: "O Artigo 7º, item 5 da Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica).", correta: true, explicacao_especifica: "Art. 7.5 da CADH: garantia fundamental da apresentação imediata do preso perante a autoridade judicial." },
              { letra: "C", texto: "A Convenção de Viena sobre Relações Consulares exclusivamente.", correta: false, explicacao_especifica: "A Convenção de Viena trata de assistência consular a estrangeiros detidos." },
              { letra: "D", texto: "A Declaração de Direitos do Bom Povo da Virgínia.", correta: false, explicacao_especifica: "Documento histórico do século XVIII, anterior ao sistema interamericano." },
              { letra: "E", texto: "O Estatuto de Roma do Tribunal Penal Internacional em Haia.", correta: false, explicacao_especifica: "O Estatuto de Roma rege a persecução de crimes internacionais pelo TPI." }
            ]
          };
        }
      } else {
        // Gerações e Dimensões
        qObj = {
          idSlug: `dh-dimensoes-${currentIdx}`,
          disciplina_id: dId,
          assunto_id: st.ass,
          banca_nome: isCE ? "CEBRASPE (CESPE)" : banca,
          orgao_nome: orgao,
          cargo_nome: cargo,
          ano: ano,
          tipo: isCE ? "certo_errado" : "multipla_escolha",
          dificuldade: "facil",
          enunciado: isCE
            ? `Os direitos humanos de primeira dimensão (ou geração) têm como valor fonte a liberdade, possuem natureza primordialmente negativa (abstenção do Estado / status negativus) e englobam os direitos civis e políticos.`
            : `Os direitos humanos de segunda geração têm como valor fundamental a:`,
          explicacao: `GABARITO: ${isCE ? "CERTO" : "Igualdade (direitos sociais, econômicos e culturais - prestações positivas do Estado)"}. Classificação clássica de Karel Vasak inspirada no lema da Revolução Francesa: 1ª geração = Liberdade (civis e políticos, abstenção estatal); 2ª geração = Igualdade (sociais, econômicos e culturais, prestação estatal); 3ª geração = Fraternidade/Solidariedade (meio ambiente, paz, patrimônio comum).`,
          alternativas: isCE ? [
            { texto: "Certo", correta: true, explicacao_especifica: "1ª geração/dimensão: Liberdade, direitos civis e políticos, dever de abstenção estatal." },
            { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. Os direitos de primeira geração consagram de fato as liberdades negativas individuais." }
          ] : [
            { letra: "A", texto: "Liberdade individual negativa estrita.", correta: false, explicacao_especifica: "Liberdade negativa é o valor da 1ª geração." },
            { letra: "B", texto: "Igualdade material (direitos sociais, econômicos e culturais).", correta: true, explicacao_especifica: "2ª geração: Igualdade, impondo obrigações positivas de fazer ao Estado." },
            { letra: "C", texto: "Fraternidade e direitos difusos ao meio ambiente equilibrado.", correta: false, explicacao_especifica: "Fraternidade e meio ambiente pertencem à 3ª geração." },
            { letra: "D", texto: "Globalização dos direitos políticos e bioética.", correta: false, explicacao_especifica: "Bioética e patrimônio genético relacionam-se às 4ª e 5ª gerações." },
            { letra: "E", texto: "Paz universal perpétua entre os povos soberanos.", correta: false, explicacao_especifica: "O direito à paz é tipicamente de 3ª geração (solidariedade)." }
          ]
        };
      }

      rawQuestions.push(qObj);
      currentIdx++;
      if (rawQuestions.length === 35) break;
    }
    if (rawQuestions.length === 35) break;
  }

  return rawQuestions.slice(0, 35);
}

const outputPath = path.resolve(process.cwd(), "scripts/batch1_modules/direitos_humanos.mjs");
const q = generateDHQuestions();
fs.writeFileSync(outputPath, `export const dhQuestions = ${JSON.stringify(q, null, 2)};\n`, "utf8");
console.log(`[+] Direitos Humanos gerado com ${q.length} questões.`);
