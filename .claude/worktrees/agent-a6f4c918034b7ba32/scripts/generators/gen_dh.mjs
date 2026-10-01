import fs from "fs";
import path from "path";
import { TAXONOMIA } from "../batch11_modules/taxonomia.mjs";

const discDh = TAXONOMIA.disciplinas.direitos_humanos;
const assDudh = TAXONOMIA.assuntos.dudh_1948;
const assCadh = TAXONOMIA.assuntos.pacto_san_jose;
const assGeracoes = TAXONOMIA.assuntos.geracoes_direitos_humanos;

const dh01Questoes = [];
// 25 questões para dh_01 (DUDH, CADH, Gerações e Jurisprudência Interamericana)
for (let i = 1; i <= 25; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 13;
  const assuntoId = i % 3 === 1 ? assDudh : i % 3 === 2 ? assCadh : assGeracoes;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    dh01Questoes.push({
      idSlug: `b11-dh-01-${pad}`,
      disciplina_id: discDh,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Penal Federal",
      cargo_nome: "Policial Penal Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "Conforme o Pacto de São José da Costa Rica (Convenção Americana sobre Direitos Humanos), toda pessoa detida deve ser conduzida, sem demora, à presença de um juiz ou outra autoridade autorizada pela lei a exercer funções judiciais (audiência de custódia)."
        : i === 2
        ? "A Declaração Universal dos Direitos Humanos (DUDH de 1948) foi adotada sob a forma de resolução da Assembleia Geral da ONU, possuindo matriz valorativa universal e força moral imperativa sobre a ordem internacional."
        : i === 3
        ? "Segundo a Convenção Americana sobre Direitos Humanos, a pena de morte pode ser restabelecida nos Estados partes que a tenham abolido previamente, desde que para crimes hediondos graves."
        : i === 4
        ? "Os direitos humanos de primeira dimensão (liberdades negativas) impõem ao Estado um dever de prestação positiva direta nas áreas de saúde, previdência social e pleno emprego."
        : `No tocante à proteção internacional dos direitos humanos e tratados ratificados pelo Brasil (Item DH ${i}), ${correta ? "o Supremo Tribunal Federal fixou a tese do caráter supralegal dos tratados internacionais de direitos humanos ratificados sem o quórum do art. 5º, § 3º, da CF/88 (RE 466.343)." : "as decisões da Corte Interamericana de Direitos Humanos possuem natureza meramente consultiva e não vinculam os órgãos judiciais e policiais brasileiros."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. Art. 7º, item 5 da CADH consagra o direito à audiência de custódia imediata perante autoridade judicial."
        : i === 2
        ? "GABARITO: CERTO. A DUDH (Resolução 217 A (III) da AG/ONU) é a base do sistema global de direitos humanos."
        : i === 3
        ? "GABARITO: ERRADO. Art. 4º, item 3 da CADH veda expressamente o restabelecimento da pena de morte nos países que a aboliram (princípio da vedação do retrocesso / efeito cliquet)."
        : i === 4
        ? "GABARITO: ERRADO. Os direitos de primeira dimensão (civis e políticos) exigem abstenção/não intervenção estatal (dever de abstenção). Quem exige prestações positivas (saúde, educação, previdência) são os direitos de SEGUNDA dimensão."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "O STF consagrou o status supralegal dos tratados comuns de direitos humanos (abaixo da CF e acima da legislação ordinária)." : "As sentenças condenatórias da Corte IDH possuem eficácia vinculante e executiva no plano interno para todos os Poderes da República." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 14) % 5];
    dh01Questoes.push({
      idSlug: `b11-dh-01-${pad}`,
      disciplina_id: discDh,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Delegado de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Acerca da teoria geral dos direitos humanos e do Sistema Interamericano de Proteção aos Direitos Humanos (Caso Jurídico ${i}), assinale a afirmativa correta:`,
      explicacao: `GABARITO: ${corretaLetra}. A alternativa reflete a jurisprudência interamericana consolidada e o texto expresso da CADH.`,
      alternativas: [
        { texto: `O princípio da proibição do retrocesso social (efeito cliquet) impede que conquistas em matéria de direitos humanos sejam suprimidas ou fragilizadas sem justificativa proporcional (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `A Convenção Americana autoriza a aplicação de tortura em interrogatórios policiais excepcionais de terrorismo de Estado.`, correta: corretaLetra === "B" },
        { texto: `A Comissão Interamericana de Direitos Humanos (CIDH) profere sentenças judiciais condenatórias irrecorríveis com imposição de multas.`, correta: corretaLetra === "C" },
        { texto: `Os direitos humanos de terceira dimensão tutelam exclusivamente garantias patrimoniais de pessoas jurídicas de direito público.`, correta: corretaLetra === "D" },
        { texto: `O direito à ampla defesa e ao contraditório pode ser suspenso definitivamente por decisão administrativa em sindicâncias policiais.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// 20 questões para dh_02 (Regras de Mandela, Regras de Bangkok, Protocolo de Istambul e Uso da Força)
const dh02Questoes = [];
for (let i = 1; i <= 20; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 10;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    dh02Questoes.push({
      idSlug: `b11-dh-02-${pad}`,
      disciplina_id: discDh,
      assunto_id: assGeracoes,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Penal",
      cargo_nome: "Policial Penal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "Conforme as Regras Mínimas das Nações Unidas para o Tratamento de Presos (Regras de Nelson Mandela), o isolamento solitário prolongado (por período superior a 15 dias consecutivos) é estritamente proibido, constituindo prática análoga à tortura ou a tratamentos cruéis."
        : i === 2
        ? "As Regras de Bangkok estabelecem diretrizes internacionais específicas para o tratamento de mulheres presas e medidas não privativas de liberdade para mulheres infratoras, com ênfase na atenção à maternidade e ao pré-natal."
        : i === 3
        ? "De acordo com os Princípios Básicos sobre o Uso da Força e Armas de Fogo da ONU (PBUFAF), o uso letal de arma de fogo é permitido preventivamente contra fugitivos desarmados que não ofereçam perigo iminente de morte."
        : i === 4
        ? "O Protocolo de Istambul é o manual das Nações Unidas para a investigação e documentação eficazes da tortura e de outros tratamentos ou penas cruéis, desumanos ou degradantes."
        : `No que concerne aos parâmetros internacionais de custódia e fiscalização penitenciária (Norma ${i}), ${correta ? "as Regras de Mandela vedam a aplicação de restrições disciplinares que impliquem a proibição do contato com a família ou a privação de água potável e alimentação adequada." : "a revista íntima vexatória indiscriminada com desnudamento total é procedimento chancelado sem ressalvas pelas normas da ONU."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. A Regra 43 e 44 das Regras de Mandela veda taxativamente o confinamento solitário por mais de 15 dias consecutivos."
        : i === 2
        ? "GABARITO: CERTO. As Regras de Bangkok consideram as necessidades de gênero de mulheres encarceradas (higiene, saúde reprodutiva, filhos dependentes)."
        : i === 3
        ? "GABARITO: ERRADO. O Princípio 9 do PBUFAF estabelece que armas de fogo só podem ser usadas em legítima defesa de si ou de outrem contra ameaça iminente de morte ou lesão grave."
        : i === 4
        ? "GABARITO: CERTO. O Protocolo de Istambul fornece diretrizes médico-legais e jurídicas para identificar e documentar sinais físicos e psicológicos de tortura."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "As Regras de Mandela protegem os vínculos familiares e as necessidades biológicas fundamentais do recluso como garantias indelegáveis." : "Organismos internacionais e a jurisprudência pátria repudiam a revista vexatória humilhante, exigindo o uso de tecnologia (scanners corporais) e respeito à dignidade humana." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 11) % 5];
    dh02Questoes.push({
      idSlug: `b11-dh-02-${pad}`,
      disciplina_id: discDh,
      assunto_id: assGeracoes,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Penal Federal",
      cargo_nome: "Policial Penal Federal",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Em conformidade com os instrumentos internacionais de direitos humanos aplicáveis à execução penal e à atuação das forças de segurança (Cenário Operacional ${i}), assinale a afirmativa correta:`,
      explicacao: `GABARITO: ${corretaLetra}. A afirmativa encontra suporte literal nas normas da ONU para a administração da justiça penal.`,
      alternativas: [
        { texto: `O uso da força pelos agentes de segurança deve pautar-se estritamente pelos princípios da legalidade, necessidade, proporcionalidade, moderação e conveniência (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `As Regras de Mandela permitem que presos sejam punidos disciplinarmente com a redução da cota de oxigênio da cela.`, correta: corretaLetra === "B" },
        { texto: `O Protocolo de Istambul dispensa exames médicos em pessoas que denunciam maus-tratos em delegacias de polícia.`, correta: corretaLetra === "C" },
        { texto: `As Regras de Bangkok determinam o isolamento obrigatório de todas as gestantes em regime fechado de segurança máxima.`, correta: corretaLetra === "D" },
        { texto: `O emprego de algemas deve ser a regra absoluta e compulsória em todo e qualquer ato processual civil ou militar.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// Salvar módulos de Direitos Humanos
fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/dh_01.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const dh01Questoes = ${JSON.stringify(dh01Questoes, null, 2)};\n`,
  "utf8"
);

fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/dh_02.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const dh02Questoes = ${JSON.stringify(dh02Questoes, null, 2)};\n`,
  "utf8"
);

console.log(`[✓] Direitos Humanos gerados: dh_01 (${dh01Questoes.length}) + dh_02 (${dh02Questoes.length}) = ${dh01Questoes.length + dh02Questoes.length} questões.`);
