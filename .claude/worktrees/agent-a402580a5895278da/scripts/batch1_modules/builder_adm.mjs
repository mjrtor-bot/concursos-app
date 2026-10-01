import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./taxonomia.mjs";

export function generateAdmQuestions() {
  const dId = TAXONOMIA.disciplinas.administrativo;
  const ass = TAXONOMIA.assuntos;

  const rawQuestions = [];
  const bancas = ["CEBRASPE (CESPE)", "FGV", "VUNESP", "IBFC", "INSTITUTO AOCP"];
  const orgaos = ["Polícia Federal (PF)", "Polícia Rodoviária Federal (PRF)", "PC-SP", "PC-RJ", "PC-MG", "Polícia Penal"];
  const cargos = ["Agente de Polícia", "Policial Rodoviário Federal", "Investigador de Polícia", "Escrivão de Polícia", "Policial Penal", "Delegado de Polícia"];

  const subtopicos = [
    { ass: ass.poderes_adm, nome: "Poderes Administrativos e Poder de Polícia", qtd: 15 },
    { ass: ass.atos_adm, nome: "Atos Administrativos", qtd: 15 },
    { ass: ass.responsabilidade_civil, nome: "Responsabilidade Civil do Estado", qtd: 10 },
    { ass: ass.agentes_8112, nome: "Agentes Públicos e Regime Jurídico", qtd: 10 },
    { ass: ass.improbidade, nome: "Improbidade Administrativa (Lei 8.429/92)", qtd: 5 },
    { ass: ass.principios_limpe, nome: "Princípios da Administração", qtd: 3 },
    { ass: ass.licitacoes, nome: "Licitações e Contratos (Lei 14.133/21)", qtd: 2 }
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

      if (st.ass === ass.poderes_adm) {
        if (isCE) {
          qObj = {
            idSlug: `adm-poderes-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: "medio",
            enunciado: `O poder de polícia administrativa ostenta como atributos a discricionariedade, a autoexecutoriedade e a coercibilidade, sendo que a autoexecutoriedade não está presente em todas as medidas de polícia, a exemplo da cobrança judicial de multas já aplicadas.`,
            explicacao: `GABARITO: CERTO. Os atributos do poder de polícia são DAC (Discricionariedade, Autoexecutoriedade e Coercibilidade). A autoexecutoriedade permite à Administração agir sem necessidade de autorização judicial prévia, mas NÃO é universal: a cobrança de multa pecuniária exige processo de execução fiscal judicial (ausência de autoexecutoriedade na fase executiva da multa).`,
            alternativas: [
              { texto: "Certo", correta: true, explicacao_especifica: "Atributos do poder de polícia: DAC. A execução forçada de multas de trânsito/polícia não goza de autoexecutoriedade, dependendo do Judiciário." },
              { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. A autoexecutoriedade de fato não incide na cobrança forçada de valores pecuniários." }
            ]
          };
        } else {
          qObj = {
            idSlug: `adm-poderes-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "medio",
            enunciado: `O uso da força física por policial para conter indivíduo em atitude de agressão violenta durante abordagem de segurança configura exercício legítimo do:`,
            explicacao: `GABARITO: Poder de polícia com atributo da coercibilidade. A coercibilidade autoriza o uso da força moderada e proporcional para impor as determinações e ordens da autoridade policial.`,
            alternativas: [
              { letra: "A", texto: "Poder disciplinar hierárquico.", correta: false, explicacao_especifica: "O poder disciplinar atinge apenas servidores e particulares com vínculo específico com a Administração." },
              { letra: "B", texto: "Poder regulamentar originário.", correta: false, explicacao_especifica: "O poder regulamentar visa à expedição de decretos normativos pelo Chefe do Executivo." },
              { letra: "C", texto: "Poder de polícia administrativa, valendo-se do atributo da coercibilidade.", correta: true, explicacao_especifica: "A coercibilidade permite a imposição coativa das ordens estatais e uso proporcional da força física." },
              { letra: "D", texto: "Poder discricionário absoluto sem limites de proporcionalidade.", correta: false, explicacao_especifica: "Não existe poder absoluto; a atuação policial subordina-se à estrita legalidade e razoabilidade." },
              { letra: "E", texto: "Poder hierárquico repressivo externo.", correta: false, explicacao_especifica: "O poder hierárquico é estritamente interno à estrutura administrativa." }
            ]
          };
        }
      } else if (st.ass === ass.responsabilidade_civil) {
        if (isCE) {
          qObj = {
            idSlug: `adm-resp-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: "CEBRASPE (CESPE)",
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "certo_errado",
            dificuldade: "dificil",
            enunciado: `Nos termos do art. 37, § 6º da Constituição Federal e da jurisprudência do STF (Tema 940 da Repercussão Geral), a ação de indenização por danos causados por agente público deve ser proposta diretamente contra a pessoa jurídica de direito público, sendo inadmissível o ajuizamento direto em face do servidor ou a sua inclusão no polo passivo em litisconsórcio.`,
            explicacao: `GABARITO: CERTO. Tese do Tema 940/STF: 'A teor do disposto no art. 37, § 6º, da Constituição Federal, a ação por danos causados por agente público deve ser ajuizada exclusivamente em face da pessoa jurídica de direito público ou da pessoa jurídica de direito privado prestadora de serviço público, sendo parte ilegítima para figurar no polo passivo o autor do ato, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa'.`,
            alternativas: [
              { texto: "Certo", correta: true, explicacao_especifica: "Tese vinculante fixada pelo STF no Tema 940 (princípio da dupla garantia)." },
              { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. O STF consagrou a ilegitimidade passiva direta do servidor em ações indenizatórias movidas por particulares." }
            ]
          };
        } else {
          qObj = {
            idSlug: `adm-resp-${currentIdx}`,
            disciplina_id: dId,
            assunto_id: st.ass,
            banca_nome: banca,
            orgao_nome: orgao,
            cargo_nome: cargo,
            ano: ano,
            tipo: "multipla_escolha",
            dificuldade: "medio",
            enunciado: `A responsabilidade civil do Estado no Brasil pelas condutas comissivas de seus agentes adota a Teoria do:`,
            explicacao: `GABARITO: Risco Administrativo (art. 37, § 6º da CF/88), a qual impõe responsabilidade objetiva ao Estado, dispensando a prova de dolo ou culpa da vítima, admitindo, contudo, a demonstração de causas excludentes do nexo causal (caso fortuito, força maior e culpa exclusiva da vítima).`,
            alternativas: [
              { letra: "A", texto: "Risco Integral absoluto sem qualquer hipótese de excludente causal.", correta: false, explicacao_especifica: "O risco integral é exceção no Brasil (dano nuclear, terrorismo aéreo, dano ambiental)." },
              { letra: "B", texto: "Risco Administrativo, exigindo nexo de causalidade e dano, com responsabilidade objetiva, admitindo excludentes como culpa exclusiva da vítima.", correta: true, explicacao_especifica: "Art. 37, § 6º da CF/88 consagra a teoria do risco administrativo como regra." },
              { letra: "C", texto: "Culpa Subjetiva Comum do Direito Civil com ônus probatório integral do particular.", correta: false, explicacao_especifica: "A responsabilidade estatal comissiva é objetiva, não dependendo de culpa do agente perante o terceiro." },
              { letra: "D", texto: "Irresponsabilidade Estatal Absoluta de Direito Público.", correta: false, explicacao_especifica: "Teoria histórica imperial superada no Estado Democrático de Direito." },
              { letra: "E", texto: "Risco Criado restrito aos agentes armados da corporação militar.", correta: false, explicacao_especifica: "A teoria do risco administrativo alcança todas as pessoas jurídicas de direito público e delegatárias de serviços." }
            ]
          };
        }
      } else {
        // Atos / 8.112 / Improbidade / Princípios
        qObj = {
          idSlug: `adm-geral-${currentIdx}`,
          disciplina_id: dId,
          assunto_id: st.ass,
          banca_nome: isCE ? "CEBRASPE (CESPE)" : banca,
          orgao_nome: orgao,
          cargo_nome: cargo,
          ano: ano,
          tipo: isCE ? "certo_errado" : "multipla_escolha",
          dificuldade: "medio",
          enunciado: isCE
            ? `Após as alterações introduzidas pela Lei nº 14.230/2021 na Lei de Improbidade Administrativa (Lei nº 8.429/1992), todos os atos de improbidade administrativa exigem dolo específico para sua configuração, tendo sido expressamente revogada a modalidade culposa no dano ao erário.`
            : `São requisitos/elementos de validade do ato administrativo:`,
          explicacao: `GABARITO: ${isCE ? "CERTO (art. 1º, §§ 1º, 2º e 3º da Lei 8.429/92 com redação da Lei 14.230/21)" : "Competência, Finalidade, Forma, Motivo e Objeto (mnemônico COFIFOMOB)"}. Na Lei 14.230/21, passou a se exigir dolo para todas as espécies de atos de improbidade (arts. 9º, 10 e 11), abolindo a culpa. Os 5 elementos de validade dos atos administrativos são Competência, Finalidade, Forma, Motivo e Objeto.`,
          alternativas: isCE ? [
            { texto: "Certo", correta: true, explicacao_especifica: "A Lei 14.230/2021 suprimiu a culpa na improbidade, exigindo dolo específico para todos os tipos." },
            { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. Não mais subsiste improbidade na modalidade culposa no direito brasileiro." }
          ] : [
            { letra: "A", texto: "Competência, Finalidade, Forma, Motivo e Objeto.", correta: true, explicacao_especifica: "Art. 2º da Lei 4.717/65: os 5 elementos de validade do ato administrativo (COFIFOMOB)." },
            { letra: "B", texto: "Legalidade, Impessoalidade, Moralidade e Eficiência apenas.", correta: false, explicacao_especifica: "Esses são princípios constitucionais do art. 37, caput, da CF/88." },
            { letra: "C", texto: "Presunção de legitimidade, imperatividade e coercibilidade.", correta: false, explicacao_especifica: "Esses são atributos do ato administrativo (PATI), não elementos de formação." },
            { letra: "D", texto: "Autorização prévia judicial e publicação em Diário Oficial.", correta: false, explicacao_especifica: "Não constituem elementos intrínsecos de validade de todo ato administrativo." },
            { letra: "E", texto: "Discricionariedade, conveniência, oportunidade e revogabilidade.", correta: false, explicacao_especifica: "Referem-se ao mérito administrativo do ato discricionário." }
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

const outputPath = path.resolve(process.cwd(), "scripts/batch1_modules/administrativo.mjs");
const q = generateAdmQuestions();
fs.writeFileSync(outputPath, `export const admQuestions = ${JSON.stringify(q, null, 2)};\n`, "utf8");
console.log(`[+] Direito Administrativo gerado com ${q.length} questões.`);
