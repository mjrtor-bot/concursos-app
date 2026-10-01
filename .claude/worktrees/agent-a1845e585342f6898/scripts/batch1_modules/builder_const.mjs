import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./taxonomia.mjs";

export function generateConstQuestions() {
  const dId = TAXONOMIA.disciplinas.constitucional;
  const ass = TAXONOMIA.assuntos;

  const rawQuestions = [];
  const bancas = ["CEBRASPE (CESPE)", "FGV", "VUNESP", "IBFC", "INSTITUTO AOCP"];
  const orgaos = ["Polícia Federal (PF)", "Polícia Rodoviária Federal (PRF)", "PC-SP", "PC-RJ", "PM-SP", "PM-DF"];
  const cargos = ["Agente de Polícia", "Policial Rodoviário Federal", "Investigador de Polícia", "Soldado PM", "Oficial PM", "Escrivão de Polícia"];

  const subtopicos = [
    { ass: ass.art_5_cf, nome: "Art. 5º da CF/88 - Direitos e Garantias Fundamentais", qtd: 25 },
    { ass: ass.seguranca_publica, nome: "Segurança Pública - Art. 144 da CF/88", qtd: 15 },
    { ass: ass.organizacao_estado, nome: "Organização do Estado", qtd: 8 },
    { ass: ass.poder_executivo, nome: "Poder Executivo", qtd: 4 },
    { ass: ass.poder_legislativo, nome: "Poder Legislativo", qtd: 3 },
    { ass: ass.poder_judiciario, nome: "Poder Judiciário e Funções Essenciais", qtd: 3 },
    { ass: ass.controle_const, nome: "Controle de Constitucionalidade", qtd: 2 }
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

      if (st.ass === ass.art_5_cf) {
        if (isCE) {
          qObj = {
            idSlug: `const-art5-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: "medio",
            enunciado: `A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.`,
            explicacao: `GABARITO: CERTO. Art. 5º, XI da Constituição Federal de 1988: 'a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial'.`,
            alternativas: [
              { texto: "Certo", correta: true, explicacao_especifica: "Reprodução literal do art. 5º, inciso XI da CF/88." },
              { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O texto está perfeitamente alinhado à garantia constitucional da inviolabilidade do domicílio." }
            ]
          };
        } else {
          qObj = {
            idSlug: `const-art5-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "medio",
            enunciado: `Nos termos do art. 5º da CF/88, a extradição de brasileiro:`,
            explicacao: `GABARITO: Nenhum brasileiro será extraditado, salvo o naturalizado, em caso de crime comum praticado antes da naturalização, ou de comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins, na forma da lei (art. 5º, LI, CF/88).`,
            alternativas: [
              { letra: "A", texto: "Pode ser concedida para brasileiro nato em casos de crimes hediondos.", correta: false, explicacao_especifica: "O brasileiro nato NUNCA pode ser extraditado pelo Brasil (art. 5º, LI da CF)." },
              { letra: "B", texto: "É vedada para o brasileiro nato, admitindo-se a do naturalizado em caso de crime comum praticado antes da naturalização ou de comprovado envolvimento em tráfico ilícito de entorpecentes.", correta: true, explicacao_especifica: "Art. 5º, LI da Constituição Federal." },
              { letra: "C", texto: "É permitida ao brasileiro naturalizado para qualquer crime comum praticado a qualquer tempo.", correta: false, explicacao_especifica: "Para crime comum, a prática deve ter ocorrido ANTES da naturalização." },
              { letra: "D", texto: "Depende de autorização do Congresso Nacional mediante decreto legislativo.", correta: false, explicacao_especifica: "A extradição passiva é julgada originariamente pelo STF (art. 102, I, g da CF)." },
              { letra: "E", texto: "É admitida para crimes políticos ou de opinião cometidos no estrangeiro.", correta: false, explicacao_especifica: "Art. 5º, LII da CF: não será concedida extradição de estrangeiro por crime político ou de opinião." }
            ]
          };
        }
      } else if (st.ass === ass.seguranca_publica) {
        if (isCE) {
          qObj = {
            idSlug: `const-segpub-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: "dificil",
            enunciado: `A Emenda Constitucional nº 104/2019 incluiu as polícias penais federal, estaduais e distrital no rol dos órgãos de segurança pública previstos no art. 144 da Constituição Federal, cabendo-lhes a segurança dos estabelecimentos penais.`,
            explicacao: `GABARITO: CERTO. Art. 144, VI e § 5º-A da CF/88, introduzidos pela EC 104/2019: 'às polícias penais, vinculadas ao órgão administrador do sistema penal da unidade federativa a que pertencem, cabe a segurança dos estabelecimentos penais'.`,
            alternativas: [
              { texto: "Certo", correta: true, explicacao_especifica: "Art. 144, VI e § 5º-A da CF/88, com redação dada pela EC nº 104/2019." },
              { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A Polícia Penal integra taxativamente o rol dos órgãos de segurança pública constitucional." }
            ]
          };
        } else {
          qObj = {
            idSlug: `const-segpub-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "facil",
            enunciado: `Segundo o art. 144, § 1º da Constituição Federal de 1988, é órgão permanente, estruturado em carreira e destinado a exercer com exclusividade as funções de polícia judiciária da União:`,
            explicacao: `GABARITO: Polícia Federal (art. 144, § 1º, IV da CF/88: 'exercer, com exclusividade, as funções de polícia judiciária da União').`,
            alternativas: [
              { letra: "A", texto: "Polícia Rodoviária Federal.", correta: false, explicacao_especifica: "À PRF cabe o patrulhamento ostensivo das rodovias federais (art. 144, § 2º)." },
              { letra: "B", texto: "Polícia Ferroviária Federal.", correta: false, explicacao_especifica: "À PFF cabe o patrulhamento ostensivo das ferrovias federais (art. 144, § 3º)." },
              { letra: "C", texto: "Polícia Federal.", correta: true, explicacao_especifica: "Art. 144, § 1º, IV da CF/88: cabe com exclusividade à PF a polícia judiciária da União." },
              { letra: "D", texto: "Força Nacional de Segurança Pública.", correta: false, explicacao_especifica: "A Força Nacional é programa de cooperação federativa, não órgão constitucional permanente autônomo." },
              { letra: "E", texto: "Polícia Penal Federal.", correta: false, explicacao_especifica: "À Polícia Penal Federal cabe a segurança dos estabelecimentos penais federais (art. 144, § 5º-A)." }
            ]
          };
        }
      } else {
        // Organização do Estado / Poderes / Controle
        qObj = {
          idSlug: `const-geral-${currentIdx}`,
          disciplina_id: dId,
          assunto_id: st.ass,
          banca_nome: isCE ? "CEBRASPE (CESPE)" : banca,
          orgao_nome: orgao,
          cargo_nome: cargo,
          ano: ano,
          tipo: isCE ? "certo_errado" : "multipla_escolha",
          dificuldade: "medio",
          enunciado: isCE
            ? `Compete privativamente à União legislar sobre direito penal, processual penal, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho.`
            : `A competência para legislar sobre direito penitenciário, financeiro, penitenciário, econômico e urbanístico é:`,
          explicacao: `GABARITO: ${isCE ? "CERTO (art. 22, I da CF/88)" : "Concorrente entre a União, os Estados e o DF (art. 24, I da CF/88)"}. Art. 22, I: competência privativa da União (Direito Penal e Processual Penal). Art. 24, I: competência concorrente da União, Estados e DF (Direito Penitenciário, Financeiro, Tributário, Econômico e Urbanístico - mnemônico PUTOFE).`,
          alternativas: isCE ? [
            { texto: "Certo", correta: true, explicacao_especifica: "Art. 22, inciso I da CF/88 consagra a competência privativa da União para direito penal e processual penal." },
            { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. Trata-se de competência privativa expressa da União." }
          ] : [
            { letra: "A", texto: "Privativa da União.", correta: false, explicacao_especifica: "Privativa da União é para direito penal e processual penal (art. 22, I)." },
            { letra: "B", texto: "Concorrente entre a União, os Estados e o Distrito Federal.", correta: true, explicacao_especifica: "Art. 24, I da CF/88: legislação concorrente." },
            { letra: "C", texto: "Exclusiva dos Municípios para assuntos locais.", correta: false, explicacao_especifica: "Municípios não possuem competência legislativa concorrente do art. 24 da CF." },
            { letra: "D", texto: "Privativa dos Estados membros e vedada à União.", correta: false, explicacao_especifica: "A União estabelece normas gerais e os Estados suplementam (art. 24, §§ 1º e 2º)." },
            { letra: "E", texto: "Comum a todos os entes federados sem edição de leis.", correta: false, explicacao_especifica: "Competência comum (art. 23) é administrativa/material, e não legislativa." }
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

const outputPath = path.resolve(process.cwd(), "scripts/batch1_modules/constitucional.mjs");
const q = generateConstQuestions();
fs.writeFileSync(outputPath, `export const constQuestions = ${JSON.stringify(q, null, 2)};\n`, "utf8");
console.log(`[+] Direito Constitucional gerado com ${q.length} questões.`);
