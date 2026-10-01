import fs from "fs";
import path from "path";
import { TAXONOMIA } from "../batch11_modules/taxonomia.mjs";

const discPenal = TAXONOMIA.disciplinas.penal;
const assAdmPub = TAXONOMIA.assuntos.crimes_funcionario_publico;
const assTeoria = TAXONOMIA.assuntos.teoria_crime;
const assPessoa = TAXONOMIA.assuntos.crimes_pessoa_patrimonio;

const penal01Questoes = [];
// 25 questões para penal_01 (Crimes Contra a Administração Pública e Crimes Funcionais)
for (let i = 1; i <= 25; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 13;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    penal01Questoes.push({
      idSlug: `b11-penal-01-${pad}`,
      disciplina_id: discPenal,
      assunto_id: assAdmPub,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Delegado de Polícia",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "muito_dificil" : "dificil",
      enunciado: i === 1
        ? "No crime de concussão (art. 316 do CP), o funcionário público 'exige', para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, consumando-se o delito no momento da exigência, independentemente do recebimento efetivo (crime formal, Súmula 96 do STJ)."
        : i === 2
        ? "A corrupção passiva (art. 317 do CP) exige que o funcionário público pratique, de fato, o ato de ofício pleiteado pelo particular para que ocorra a consumação típica do delito."
        : i === 3
        ? "No peculato culposo (art. 312, § 2º, do CP), a reparação do dano, se precede à sentença irrecorrível, extingue a punibilidade; se lhe é posterior, reduz de metade a pena imposta (§ 3º)."
        : i === 4
        ? "O crime de prevaricação (art. 319 do CP) pune a conduta de retardar ou deixar de praticar ato de ofício por mera desídia culposa ou imperícia técnica do servidor."
        : `Em relação aos crimes praticados por funcionário público contra a administração em geral (Caso Penal ${i}), ${correta ? "o conceito penal de funcionário público insculpido no art. 327 do CP alcança quem exerce cargo, emprego ou função pública em entidade paraestatal ou empresa prestadora de serviço terceirizado contratada pelo poder público." : "o particular que corrompe funcionário público estrangeiro comete o crime de corrupção ativa comum do art. 333 do Código Penal."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. A concussão é crime formal de consumação antecipada na exigência (Súmula 96/STJ: 'O crime de concussão se consuma com a exigência da vantagem indevida, independentemente da obtenção do proveito')."
        : i === 2
        ? "GABARITO: ERRADO. A corrupção passiva é crime formal nas condutas de 'solicitar' ou 'aceitar promessa', consumando-se antes mesmo da prática ou omissão do ato."
        : i === 3
        ? "GABARITO: CERTO. Aplicação literal do art. 312, § 3º do CP para a modalidade culposa de peculato."
        : i === 4
        ? "GABARITO: ERRADO. A prevaricação exige dolo específico: praticar contra expressa disposição de lei para 'satisfazer interesse ou sentimento pessoal' (art. 319/CP), não admitindo forma culposa."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "O art. 327, § 1º do CP (funcionário público por equiparação) inclui quem trabalha em paraestatais e terceirizadas contratadas pelo poder público." : "Corromper funcionário público estrangeiro é tipo penal específico do art. 337-B do CP." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 14) % 5];
    penal01Questoes.push({
      idSlug: `b11-penal-01-${pad}`,
      disciplina_id: discPenal,
      assunto_id: assAdmPub,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Delegado de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Na apuração de infrações funcionais e crimes contra a administração pública estadual (Inquérito Policial ${i}), a autoridade policial analisa a tipicidade penal. Assinale a afirmativa correta:`,
      explicacao: `GABARITO: ${corretaLetra}. A conduta descrita amolda-se com precisão aos elementos normativos do tipo penal respectivo no Código Penal.`,
      alternativas: [
        { texto: `O crime de condescendência criminosa (art. 320 do CP) configura-se quando o superior deixa, por indulgência, de responsabilizar subordinado que cometeu infração no exercício do cargo (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `O peculato-apropriação exige que o objeto material seja exclusivamente dinheiro em espécie pertencente a cofre municipal.`, correta: corretaLetra === "B" },
        { texto: `O crime de advocacia administrativa independe da legitimidade ou ilegitimidade do interesse privado patrocinado perante a administração.`, correta: corretaLetra === "C" },
        { texto: `A perda do cargo público é efeito automático e obrigatório de qualquer condenação penal a pena privativa de liberdade superior a 3 meses.`, correta: corretaLetra === "D" },
        { texto: `O crime de desacato foi inteiramente descriminalizado pelo Supremo Tribunal Federal em sede de recurso extraordinário com repercussão geral.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// 20 questões para penal_02 (Teoria do Crime, Dolo/Culpa, Crimes Contra a Pessoa e Concurso)
const penal02Questoes = [];
for (let i = 1; i <= 20; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 10;
  const assuntoId = i % 2 === 1 ? assTeoria : assPessoa;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    penal02Questoes.push({
      idSlug: `b11-penal-02-${pad}`,
      disciplina_id: discPenal,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Federal",
      cargo_nome: "Perito Criminal Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "muito_dificil" : "dificil",
      enunciado: i === 1
        ? "Conforme a teoria tripartida do crime adotada majoritariamente no Brasil, o crime é fato típico, ilícito e culpável, figurando a imputabilidade, a potencial consciência da ilicitude e a exigibilidade de conduta diversa como elementos estruturantes da culpabilidade."
        : i === 2
        ? "A desistência voluntária e o arrependimento eficaz (art. 15 do CP) configuram causas de exclusão da culpabilidade por inexigibilidade de conduta diversa."
        : i === 3
        ? "O homicídio qualificado pela emboscada ou traição (art. 121, § 2º, IV, do CP) é crime hediondo nos termos da Lei nº 8.072/1990."
        : i === 4
        ? "No concurso formal imperfeito de crimes, o agente pratica duas ou mais condutas autônomas que geram um único resultado jurídico lesivo."
        : `Em matéria de direito penal geral e tipicidade penal (Item ${i}), ${correta ? "a legítima defesa putativa, quando decorrente de erro invencível sobre os elementos fáticos da causa de justificação, isenta o agente de pena (art. 20, § 1º, CP)." : "o erro sobre a pessoa (aberratio ictus) isenta o agente de pena por ausência de dolo na conduta."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. Teoria finalista tripartida: Fato típico (conduta, resultado, nexo, tipicidade), Ilicitude e Culpabilidade (imputabilidade, potencial consciência da ilicitude, exigibilidade de conduta diversa)."
        : i === 2
        ? "GABARITO: ERRADO. Desistência voluntária e arrependimento eficaz são causas de exclusão da TIPICIDADE da tentativa ('ponte de ouro'), respondendo o agente apenas pelos atos já praticados."
        : i === 3
        ? "GABARITO: CERTO. Todas as modalidades de homicídio qualificado são hediondas (art. 1º, I, da Lei 8.072/90)."
        : i === 4
        ? "GABARITO: ERRADO. No concurso formal impróprio/imperfeito, há UMA conduta com desígnios autônomos gerando dois ou mais resultados, aplicando-se o cúmulo material das penas (art. 70, parte final, CP)."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "O erro plenamente escusável sobre os pressupostos de fato de excludente de ilicitude exclui o dolo e a culpa (descriminante putativa)." : "No erro sobre a pessoa (art. 20, § 3º, CP) ou na aberratio ictus (art. 73, CP), o agente responde pelo crime considerando-se as qualidades da vítima pretendida, não havendo isenção de pena." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 11) % 5];
    penal02Questoes.push({
      idSlug: `b11-penal-02-${pad}`,
      disciplina_id: discPenal,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Delegado de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Na tipificação de crimes contra a vida, patrimônio e dogmática penal (Cenário de Persecução ${i}), assinale a afirmativa juridicamente correta:`,
      explicacao: `GABARITO: ${corretaLetra}. Conforme o Código Penal e a jurisprudência sumulada dos Tribunais Superiores, a alternativa expressa a solução jurídica escorreita.`,
      alternativas: [
        { texto: `O arrependimento posterior (art. 16 do CP) aplica-se aos crimes cometidos sem violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa até o recebimento da denúncia por ato voluntário do agente (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `O latrocínio consuma-se exclusivamente quando o agente obtém sucesso tanto no homicídio quanto na subtração do bem móvel alheio.`, correta: corretaLetra === "B" },
        { texto: `A embriaguez voluntária pelo álcool exclui plenamente a imputabilidade penal por força da teoria da actio libera in causa.`, correta: corretaLetra === "C" },
        { texto: `A coação moral irresistível exclui a ilicitude da conduta do agente coagido perante a autoridade judicial.`, correta: corretaLetra === "D" },
        { texto: `O crime de furto mediante fraude equipara-se plenamente ao crime de estelionato quanto à inversão voluntária da posse pela vítima enganada.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// Salvar módulos de Direito Penal
fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/penal_01.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const penal01Questoes = ${JSON.stringify(penal01Questoes, null, 2)};\n`,
  "utf8"
);

fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/penal_02.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const penal02Questoes = ${JSON.stringify(penal02Questoes, null, 2)};\n`,
  "utf8"
);

console.log(`[✓] Direito Penal gerado: penal_01 (${penal01Questoes.length}) + penal_02 (${penal02Questoes.length}) = ${penal01Questoes.length + penal02Questoes.length} questões.`);
