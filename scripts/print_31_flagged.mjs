import fs from "node:fs";

const data = JSON.parse(fs.readFileSync("scripts/audit_531_fine_report.json", "utf8"));
console.log(`Total Lote 11 flagged: ${data.lote11_flagged.length}`);

data.lote11_flagged.forEach((item, idx) => {
  console.log(`\n================================================================================`);
  console.log(`[ITEM C-${idx + 1}] ID: ${item.id}`);
  console.log(`Disciplina: ${item.disciplina_nome} | Assunto: ${item.assunto_nome}`);
  console.log(`Enunciado: ${item.enunciado}`);
  console.log(`Gabarito Atual: ${item.gabarito}`);
  console.log(`Problema Encontrado: ${item.problema}`);
  console.log(`Fundamentação Jurídica / Texto da Explicação:\n${item.fundJuridica}`);
  console.log(`Correção Proposta: ${item.correcaoProposta}`);
});
