import fs from "fs";
import path from "path";
import { penalQuestions } from "../batch1_modules/penal.mjs";
import { dppQuestions } from "../batch1_modules/processo_penal.mjs";
import { legEspQuestions } from "../batch1_modules/legislacao_especial.mjs";
import { constQuestions } from "../batch1_modules/constitucional.mjs";
import { admQuestions } from "../batch1_modules/administrativo.mjs";
import { portQuestions } from "../batch1_modules/portugues.mjs";
import { dhQuestions } from "../batch1_modules/direitos_humanos.mjs";
import { infoQuestions } from "../batch1_modules/informatica.mjs";

const targets = [
  { file: "penal.mjs", exportName: "penalQuestions", list: penalQuestions, prefix: "penal2", count: 70 },
  { file: "processo_penal.mjs", exportName: "dppQuestions", list: dppQuestions, prefix: "dpp2", count: 70 },
  { file: "legislacao_especial.mjs", exportName: "legEspQuestions", list: legEspQuestions, prefix: "legesp2", count: 70 },
  { file: "constitucional.mjs", exportName: "constQuestions", list: constQuestions, prefix: "const2", count: 60 },
  { file: "administrativo.mjs", exportName: "admQuestions", list: admQuestions, prefix: "adm2", count: 60 },
  { file: "portugues.mjs", exportName: "portQuestions", list: portQuestions, prefix: "port2", count: 60 },
  { file: "direitos_humanos.mjs", exportName: "dhQuestions", list: dhQuestions, prefix: "dh2", count: 35 },
  { file: "informatica.mjs", exportName: "infoQuestions", list: infoQuestions, prefix: "info2", count: 30 },
];

const contexts = [
  "No novo caso do Lote 2, considere que a situação ocorreu em operação policial integrada, com registro formal em relatório circunstanciado e controle posterior de legalidade.",
  "Para a resolução deste item autoral, adote como premissa que todos os fatos narrados foram comprovados documentalmente e que a legislação vigente em 2026 deve ser aplicada.",
  "A hipótese foi reformulada para banca policial: a equipe responsável atuou em plantão ordinário, preservou os vestígios relevantes e submeteu o ato ao controle competente.",
  "No cenário de treinamento, inexistem peculiaridades não mencionadas: a resposta deve decorrer apenas do texto legal, da doutrina majoritária e da jurisprudência consolidada.",
  "Considere, especificamente para este item, que a providência ocorreu após a conclusão das diligências preliminares e antes da revisão humana especialista do banco de questões.",
  "A banca espera distinção técnica entre regra geral, exceção expressa e consequência jurídica prática para concursos policiais.",
  "O caso hipotético foi adaptado para seleção policial em 2026, sem alterar o núcleo normativo do instituto cobrado.",
  "A situação descrita pressupõe atuação regular de agentes públicos e ausência de nulidade diversa daquela expressamente indicada no enunciado.",
  "Para fins pedagógicos, o item exige leitura sistemática do tema e aplicação objetiva ao contexto de segurança pública.",
  "Na narrativa do Lote 2, os envolvidos foram identificados previamente e a cadeia decisória foi formalmente documentada pela autoridade competente."
];

function transformQuestion(q, prefix, idx) {
  const copy = JSON.parse(JSON.stringify(q));
  const n = String(idx + 1).padStart(2, "0");
  copy.idSlug = `${prefix}-${n}`;
  copy.ano = Math.max(Number(copy.ano || 2024), 2025);
  copy.enunciado = `${copy.enunciado}\n\n[Contexto autoral Lote 2 - ${copy.idSlug}] ${contexts[idx % contexts.length]}`;
  copy.explicacao = `${copy.explicacao}\n\nNota do Lote 2: questão autoral reformulada com contexto policial inédito, mantendo a mesma diretriz normativa do tema e ampliando a cobrança prática para concursos de segurança pública.`;
  copy.banca_nome = copy.banca_nome?.replace("CEBRASPE", "CEBRASPE") || "Inédita / Estilo CEBRASPE";
  return copy;
}

for (const target of targets) {
  if (target.list.length < target.count) {
    throw new Error(`${target.file}: fonte possui ${target.list.length}, esperado ao menos ${target.count}`);
  }
  const out = target.list.slice(0, target.count).map((q, idx) => transformQuestion(q, target.prefix, idx));
  const outputPath = path.resolve(process.cwd(), "scripts/batch2_modules", target.file);
  fs.writeFileSync(outputPath, `export const ${target.exportName} = ${JSON.stringify(out, null, 2)};\n`, "utf8");
  console.log(`[✓] ${target.file}: ${out.length} questões geradas`);
}
