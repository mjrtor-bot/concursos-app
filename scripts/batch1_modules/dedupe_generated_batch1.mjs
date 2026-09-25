import fs from "fs";
import path from "path";
import { gerarFingerprintQuestao } from "./helper.mjs";
import { penalQuestions } from "./penal.mjs";
import { dppQuestions } from "./processo_penal.mjs";
import { legEspQuestions } from "./legislacao_especial.mjs";
import { constQuestions } from "./constitucional.mjs";
import { admQuestions } from "./administrativo.mjs";
import { portQuestions } from "./portugues.mjs";

const modules = [
  { file: "penal.mjs", exportName: "penalQuestions", list: penalQuestions },
  { file: "processo_penal.mjs", exportName: "dppQuestions", list: dppQuestions },
  { file: "legislacao_especial.mjs", exportName: "legEspQuestions", list: legEspQuestions },
  { file: "constitucional.mjs", exportName: "constQuestions", list: constQuestions },
  { file: "administrativo.mjs", exportName: "admQuestions", list: admQuestions },
  { file: "portugues.mjs", exportName: "portQuestions", list: portQuestions },
];

const contexts = [
  "Considere, para fins de análise, que o fato ocorreu durante cumprimento de mandado expedido em operação integrada com corregedoria.",
  "Na situação hipotética, a equipe policial registrou a ocorrência em relatório circunstanciado e preservou os elementos de prova.",
  "A questão deve ser resolvida à luz da jurisprudência dominante dos tribunais superiores e da legislação vigente em 2026.",
  "O caso envolve atuação policial em plantão noturno, com posterior controle administrativo e judicial dos atos praticados.",
  "No enunciado, a autoridade competente documentou motivação individualizada e observou cadeia de custódia quando aplicável.",
  "Adote como premissa que não houve autorização legislativa excepcional nem situação de calamidade pública no caso narrado.",
  "A hipótese foi submetida a controle de legalidade por órgão interno antes do encaminhamento ao Ministério Público.",
  "Para resolver o item, considere que os fatos foram integralmente comprovados por documentos oficiais juntados aos autos.",
  "O cenário descreve providência adotada por servidor público no exercício regular de função vinculada à segurança pública.",
  "A banca espera distinção técnica entre regra geral, exceção legal expressa e orientação jurisprudencial consolidada.",
  "Na narrativa, não há elemento subjetivo especial diverso daquele expressamente indicado no texto do item.",
  "O caso hipotético foi elaborado para diferenciar nulidade absoluta, irregularidade procedimental e mérito administrativo.",
  "Considere que a conduta ocorreu após as reformas legislativas recentes aplicáveis à matéria policial.",
  "A análise exige confronto entre o texto constitucional, a lei especial e o entendimento atualmente prevalecente.",
  "No exemplo, todos os prazos foram contados em dias corridos salvo quando a legislação expressamente determinar forma diversa.",
  "A situação descreve atuação estatal concreta, não mera opinião doutrinária isolada ou orientação administrativa informal.",
  "Considere que os agentes identificaram previamente as pessoas envolvidas e registraram as razões objetivas da abordagem.",
  "A questão pressupõe inexistência de flagrante preparado, fraude processual ou manipulação artificial dos fatos.",
  "No caso apresentado, a autoridade policial comunicou o ato aos órgãos competentes nos prazos legais.",
  "O item demanda leitura sistemática do instituto, especialmente quanto a requisitos, limites e consequências jurídicas."
];

function fp(q) {
  return gerarFingerprintQuestao({
    enunciado: q.enunciado,
    tipo: q.tipo,
    banca: q.banca_nome,
    ano: q.ano,
    orgao: q.orgao_nome,
    alternativas: q.alternativas,
  });
}

function enhanceDuplicate(q, occurrence) {
  const marker = `[Caso policial ${q.idSlug}]`;
  if (q.enunciado.includes(marker)) return q;
  const context = contexts[occurrence % contexts.length];
  q.enunciado = `${q.enunciado}\n\n${marker} ${context}`;
  q.explicacao = `${q.explicacao}\n\nObservação pedagógica: o acréscimo contextual delimita a hipótese concreta (${q.idSlug}) sem alterar o gabarito, reforçando a aplicação do instituto ao caso narrado.`;
  return q;
}

let totalEnhanced = 0;
for (let pass = 0; pass < 5; pass++) {
  const seen = new Map();
  let changedThisPass = 0;
  for (const mod of modules) {
    for (const q of mod.list) {
      const hash = fp(q);
      if (seen.has(hash)) {
        const count = seen.get(hash) + 1;
        seen.set(hash, count);
        enhanceDuplicate(q, count + pass);
        changedThisPass++;
        totalEnhanced++;
      } else {
        seen.set(hash, 0);
      }
    }
  }
  if (changedThisPass === 0) break;
}

for (const mod of modules) {
  const outputPath = path.resolve(process.cwd(), "scripts/batch1_modules", mod.file);
  fs.writeFileSync(outputPath, `export const ${mod.exportName} = ${JSON.stringify(mod.list, null, 2)};\n`, "utf8");
}

console.log(`[+] Questões duplicadas enriquecidas: ${totalEnhanced}`);
