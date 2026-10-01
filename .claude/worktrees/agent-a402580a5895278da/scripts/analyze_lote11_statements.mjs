import fs from "node:fs";

const list = JSON.parse(fs.readFileSync("scripts/divergencias_completas_49.json", "utf8"));
const lote11 = list.filter(q => q.prompt_versao === "v3.1-lote11");

const analyses = lote11.map((q, idx) => {
  const altC = q.alternativas.find(a => a.letra === "C");
  const altE = q.alternativas.find(a => a.letra === "E");
  const currentCorrectLetra = q.alternativas.find(a => a.correta)?.letra;

  // Extract pure statement (before the context boilerplate)
  const statement = q.enunciado.split("\n\nContexto individualizado:")[0].trim();

  return {
    index: idx + 1,
    id: q.id,
    disciplina_id: q.disciplina_id,
    assunto_id: q.assunto_id,
    statement,
    currentCorrectLetra,
    explicacao: q.explicacao,
    altC_id: altC?.id,
    altE_id: altE?.id
  };
});

fs.writeFileSync("scripts/lote11_31_extracted.json", JSON.stringify(analyses, null, 2));

analyses.forEach(a => {
  console.log(`[#${a.index}] ID: ${a.id} | DB GAB: ${a.currentCorrectLetra}`);
  console.log(`STATEMENT: ${a.statement}`);
  console.log(`EXPL: ${a.explicacao.split("Nota de diferenciação:")[0].trim()}`);
  console.log("--------------------------------------------------------------------------------");
});
