import { penalQuestions } from "./penal.mjs";
import { dppQuestions } from "./processo_penal.mjs";
import { legEspQuestions } from "./legislacao_especial.mjs";
import { constQuestions } from "./constitucional.mjs";
import { admQuestions } from "./administrativo.mjs";
import { portQuestions } from "./portugues.mjs";
import { dhQuestions } from "./direitos_humanos.mjs";
import { crimQuestions } from "./criminologia.mjs";
import { infoQuestions } from "./informatica.mjs";
import { rlmQuestions } from "./rlm.mjs";
import { formatarQuestao } from "./helper.mjs";

console.log("=== Verificando Módulos do Lote 2 ===");
const modulos = [
  { nome: "Direito Penal", list: penalQuestions, esperado: 70 },
  { nome: "Direito Processual Penal", list: dppQuestions, esperado: 70 },
  { nome: "Legislação Especial Policial", list: legEspQuestions, esperado: 70 },
  { nome: "Direito Constitucional", list: constQuestions, esperado: 60 },
  { nome: "Direito Administrativo", list: admQuestions, esperado: 60 },
  { nome: "Língua Portuguesa", list: portQuestions, esperado: 60 },
  { nome: "Direitos Humanos", list: dhQuestions, esperado: 35 },
  { nome: "Criminologia", list: crimQuestions, esperado: 25 },
  { nome: "Informática", list: infoQuestions, esperado: 30 },
  { nome: "Raciocínio Lógico-Matemático", list: rlmQuestions, esperado: 20 },
];

let totalQuestoes = 0;
let totalAlts = 0;
const idsSet = new Set();
const fpSet = new Set();
let globalIdx = 1;

for (const mod of modulos) {
  console.log(`[+] ${mod.nome}: ${mod.list.length}/${mod.esperado} questões`);
  if (mod.list.length !== mod.esperado) {
    throw new Error(`Módulo ${mod.nome} tem ${mod.list.length} questões, esperado ${mod.esperado}`);
  }

  for (const raw of mod.list) {
    const formatted = formatarQuestao(raw, globalIdx++);
    totalQuestoes++;
    totalAlts += formatted.alternativas.length;

    if (idsSet.has(formatted.questao.id)) {
      throw new Error(`ID duplicado detectado: ${formatted.questao.id}`);
    }
    idsSet.add(formatted.questao.id);

    if (fpSet.has(formatted.questao.fingerprint_hash)) {
      throw new Error(`[ERRO] Fingerprint duplicado: ${formatted.questao.fingerprint_hash} (slug: ${raw.idSlug})`);
    }
    fpSet.add(formatted.questao.fingerprint_hash);
  }
}

console.log("\n==========================================");
console.log(`TOTAL DE QUESTÕES DO LOTE 2: ${totalQuestoes} (Esperado: 500)`);
console.log(`TOTAL DE ALTERNATIVAS DO LOTE 2: ${totalAlts}`);
console.log(`IDs ÚNICOS DO LOTE 2: ${idsSet.size}`);
console.log(`FINGERPRINTS ÚNICOS DO LOTE 2: ${fpSet.size}`);
console.log("==========================================");
