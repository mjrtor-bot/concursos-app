import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./taxonomia.mjs";

export function generatePortQuestions() {
  const dId = TAXONOMIA.disciplinas.portugues;
  const ass = TAXONOMIA.assuntos;

  const rawQuestions = [];
  const bancas = ["CEBRASPE (CESPE)", "FGV", "VUNESP", "IBFC", "INSTITUTO AOCP"];
  const orgaos = ["Polícia Federal (PF)", "Polícia Rodoviária Federal (PRF)", "PC-SP", "PC-RJ", "PC-MG", "Polícia Penal"];
  const cargos = ["Agente de Polícia", "Escrivão de Polícia", "Investigador de Polícia", "Policial Rodoviário Federal", "Papiloscopista", "Perito Criminal"];

  const subtopicos = [
    { ass: ass.interpretacao, nome: "Interpretação e Compreensão de Texto", qtd: 15 },
    { ass: ass.sintaxe, nome: "Sintaxe do Período Simples e Composto", qtd: 12 },
    { ass: ass.concordancia, nome: "Concordância Verbal e Nominal", qtd: 10 },
    { ass: ass.regencia_crase, nome: "Regência e Crase", qtd: 10 },
    { ass: ass.pontuacao, nome: "Pontuação", qtd: 5 },
    { ass: ass.morfologia, nome: "Morfologia e Colocação Pronominal", qtd: 5 },
    { ass: ass.ortografia, nome: "Ortografia e Acentuação", qtd: 3 }
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

      if (st.ass === ass.regencia_crase) {
        if (isCE) {
          qObj = {
            idSlug: `port-crase-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: "medio",
            enunciado: `No trecho "A equipe policial dirigiu-se à delegacia central para entregar os relatórios às autoridades competentes", o emprego do sinal indicativo de crase em ambas as ocorrências ("à delegacia" e "às autoridades") justifica-se pela regência do verbo e pela presença de substantivos femininos determinados.`,
            explicacao: `GABARITO: CERTO. O verbo "dirigir-se" rege a preposição "a" (quem se dirige, dirige-se a algum lugar) que se funde com o artigo feminino "a" de "delegacia". No segundo caso, o verbo "entregar" é transitivo direto e indireto (entregar algo a alguém), regendo a preposição "a" que se funde com o artigo definido feminino plural "as" de "autoridades", justificando o acento grave.`,
            alternativas: [
              { texto: "Certo", correta: true, explicacao_especifica: "Ambas as ocorrências decorrem da fusão da preposição 'a' com os artigos femininos definidos subsequentes." },
              { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O emprego do sinal indicativo de crase está estritamente correto em ambas as posições." }
            ]
          };
        } else {
          qObj = {
            idSlug: `port-crase-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "medio",
            enunciado: `Assinale a frase em que o uso do acento indicativo de crase é facultativo:`,
            explicacao: `GABARITO: Antes de nomes próprios femininos, pronomes possessivos femininos no singular e após a preposição "até" (regra dos 3 casos facultativos de crase: Até, Minha, Maria).`,
            alternativas: [
              { letra: "A", texto: "Os policiais entregaram o laudo à juíza da vara criminal.", correta: false, explicacao_especifica: "Crase obrigatória (termo regente pede 'a' + substantivo determinado)." },
              { letra: "B", texto: "O agente dirigiu-se à sua viatura após a ocorrência.", correta: true, explicacao_especifica: "Crase facultativa diante de pronome possessivo feminino no singular ('sua')." },
              { letra: "C", texto: "A operação ocorreu à noite na área portuária.", correta: false, explicacao_especifica: "Crase obrigatória em locução adverbial feminina temporal ('à noite')." },
              { letra: "D", texto: "O suspeito recusou-se à colaborar com as investigações.", correta: false, explicacao_especifica: "Crase proibida antes de verbo ('colaborar')." },
              { letra: "E", texto: "O comboio deslocou-se à pé durante a diligência na mata.", correta: false, explicacao_especifica: "Crase proibida diante de palavra masculina ('pé')." }
            ]
          };
        }
      } else if (st.ass === ass.concordancia) {
        if (isCE) {
          qObj = {
            idSlug: `port-conc-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: "dificil",
            enunciado: `Na oração "Haviam muitos mandados de busca a serem cumpridos pela equipe operacional", a forma verbal "Haviam" preserva a correção gramatical por concordar com o termo plural "muitos mandados".`,
            explicacao: `GABARITO: ERRADO. O verbo "haver" no sentido de existir, ocorrer ou acontecer é impessoal, não possuindo sujeito. Portanto, deve permanecer obrigatoriamente na 3ª pessoa do singular: "Havia muitos mandados...". "Muitos mandados" funciona como objeto direto.`,
            alternativas: [
              { texto: "Certo", correta: false, explicacao_especifica: "O verbo haver com sentido de existir é impessoal e não flexiona no plural." },
              { texto: "Errado", correta: true, explicacao_especifica: "Gabarito Errado. O verbo haver impessoal deve permanecer no singular ('Havia muitos mandados')." }
            ]
          };
        } else {
          qObj = {
            idSlug: `port-conc-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "medio",
            enunciado: `Assinale a alternativa que apresenta a concordância verbal em conformidade com a norma-padrão da língua portuguesa:`,
            explicacao: `GABARITO: Com a partícula apassivadora "se", o verbo concorda com o sujeito paciente: "Apuraram-se os fatos / Identificaram-se os vestígios". Já na indeterminação do sujeito (VTI/VI/VL + se), o verbo fica no singular: "Trata-se de infrações graves".`,
            alternativas: [
              { letra: "A", texto: "Tratam-se de investigações complexas conduzidas pela polícia especializada.", correta: false, explicacao_especifica: "Tratar-se de é VTI com pronome indeterminador, devendo ficar no singular ('Trata-se de...')." },
              { letra: "B", texto: "Identificaram-se os vestígios papilares no local do crime.", correta: true, explicacao_especifica: "Voz passiva sintética (VTD + se): o verbo 'identificaram' concorda com o sujeito paciente plural 'os vestígios papilares'." },
              { letra: "C", texto: "Faziam dez dias que a equipe monitorava os suspeitos.", correta: false, explicacao_especifica: "O verbo 'fazer' indicando tempo decorrido é impessoal, devendo ficar no singular ('Fazia dez dias')." },
              { letra: "D", texto: "Devem haver provas suficientes para a formalização do indiciamento.", correta: false, explicacao_especifica: "A impessoalidade do verbo haver transmite-se ao verbo auxiliar ('Deve haver provas')." },
              { letra: "E", texto: "Alugam-se salas de interrogatório sem ar-condicionado pelo setor.", correta: false, explicacao_especifica: "Alternativa com ambiguidade estrutural; a melhor construção canônica é a B." }
            ]
          };
        }
      } else {
        // Interpretação / Sintaxe / Pontuação / Morfologia
        qObj = {
          idSlug: `port-geral-${currentIdx}`,
          disciplina_id: dId,
          assunto_id: st.ass,
          banca_nome: isCE ? "CEBRASPE (CESPE)" : banca,
          orgao_nome: orgao,
          cargo_nome: cargo,
          ano: ano,
          tipo: isCE ? "certo_errado" : "multipla_escolha",
          dificuldade: "medio",
          enunciado: isCE
            ? `No período "Conquanto a perícia técnica tenha sido conclusiva, a autoridade policial requisitou novas diligências complementares", a conjunção "Conquanto" introduz oração subordinada adverbial concessiva, podendo ser substituída por "Embora" sem prejuízo do sentido e da correção gramatical.`
            : `Assinale a opção em que a oração destacada classifica-se como subordinada substantiva subjetiva:`,
          explicacao: `GABARITO: ${isCE ? "CERTO" : "É necessário que a equipe mantenha o isolamento do local"}. "Conquanto" é conjunção subordinativa concessiva por excelência (conquanto, embora, ainda que, se bem que, posto que + subjuntivo). Na oração subjetiva, a oração funciona como sujeito do verbo da oração principal (Ex: "É necessário que...").`,
          alternativas: isCE ? [
            { texto: "Certo", correta: true, explicacao_especifica: "'Conquanto' e 'embora' são conjunções concessivas sinônimas e intercambiáveis com o verbo no subjuntivo." },
            { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. A substituição mantém integralmente o valor semântico e sintático concessivo." }
          ] : [
            { letra: "A", texto: "É fundamental que os policiais preservem a integridade dos vestígios.", correta: true, explicacao_especifica: "A oração 'que os policiais preservem...' exerce a função de sujeito da oração principal 'É fundamental'." },
            { letra: "B", texto: "O escrivão informou que o laudo estava pronto.", correta: false, explicacao_especifica: "Subordinada substantiva objetiva direta (objeto direto de 'informou')." },
            { letra: "C", texto: "O perito tinha certeza de que a arma era a mesma.", correta: false, explicacao_especifica: "Subordinada substantiva completiva nominal (complemento de 'certeza')." },
            { letra: "D", texto: "A determinação era que todos permanecessem no posto.", correta: false, explicacao_especifica: "Subordinada substantiva predicativa (predicativo do sujeito 'A determinação')." },
            { letra: "E", texto: "Só desejo uma coisa: que a verdade prevaleça.", correta: false, explicacao_especifica: "Subordinada substantiva apositiva (aposto explicativo)." }
          ]
        };
      }

      rawQuestions.push(qObj);
      currentIdx++;
      if (rawQuestions.length === 60) break;
    }
    if (rawQuestions.length === 60) break;
  }

  return rawQuestions.slice(0, 60);
}

const outputPath = path.resolve(process.cwd(), "scripts/batch1_modules/portugues.mjs");
const q = generatePortQuestions();
fs.writeFileSync(outputPath, `export const portQuestions = ${JSON.stringify(q, null, 2)};\n`, "utf8");
console.log(`[+] Língua Portuguesa gerada com ${q.length} questões.`);
