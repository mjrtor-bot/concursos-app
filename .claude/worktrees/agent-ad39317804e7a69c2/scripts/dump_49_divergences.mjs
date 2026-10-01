import fs from "node:fs";
import path from "node:path";

const snapPath = path.resolve(process.cwd(), "scripts/backup_pre_correcao_integridade_questoes.json");
const snap = JSON.parse(fs.readFileSync(snapPath, "utf8"));

const questoes = snap.questoes;
const alternativas = snap.alternativas;

const altsByQ = new Map();
for (const alt of alternativas) {
  if (!altsByQ.has(alt.questao_id)) {
    altsByQ.set(alt.questao_id, []);
  }
  altsByQ.get(alt.questao_id).push(alt);
}

const audit = JSON.parse(fs.readFileSync("scripts/audit_question_integrity_global.json", "utf8"));
const flagged = audit.questoesInconsistentes.filter(q => q.problemas.some(p => p.tipo === "DIVERGENCIA_GABARITO_EXPLICACAO"));

console.log(`Carregadas ${flagged.length} questões com divergência.`);

const fullDetails = flagged.map((item, idx) => {
  const q = questoes.find(x => x.id === item.id);
  const alts = altsByQ.get(item.id) || [];
  return {
    index: idx + 1,
    id: q.id,
    prompt_versao: q.prompt_versao,
    disciplina_id: q.disciplina_id,
    disciplina_nome: item.disciplina_nome,
    assunto_id: q.assunto_id,
    assunto_nome: item.assunto_nome,
    tipo: q.tipo,
    enunciado: q.enunciado,
    alternativas: alts.map(a => ({
      id: a.id,
      letra: a.letra,
      texto: a.texto,
      correta: a.correta,
      ordem: a.ordem
    })),
    explicacao: q.explicacao,
    problemas: item.problemas
  };
});

fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/divergencias_completas_49.json"),
  JSON.stringify(fullDetails, null, 2)
);

console.log("Salvo em scripts/divergencias_completas_49.json");
