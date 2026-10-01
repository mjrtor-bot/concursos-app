import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'batch9_modules');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mjs') && f !== 'taxonomia.mjs' && f !== 'index.mjs' && f !== 'uuid_generator.mjs');

console.log('Arquivos encontrados no disco:', files);

let total = 0;
let totalAlternativas = 0;
const allSlugs = new Set();
const duplicateSlugs = [];
const summary = [];
const disciplinasCount = {};

for (const file of files) {
  const filePath = 'file:///' + path.join(dir, file).replace(/\\/g, '/');
  try {
    const mod = await import(filePath);
    const exportKeys = Object.keys(mod);
    const questoes = mod[exportKeys[0]];
    const count = Array.isArray(questoes) ? questoes.length : 0;

    let issues = [];
    if (Array.isArray(questoes)) {
      questoes.forEach((q, idx) => {
        if (!q.idSlug) issues.push(`Item ${idx} sem idSlug`);
        if (allSlugs.has(q.idSlug)) duplicateSlugs.push(q.idSlug);
        allSlugs.add(q.idSlug);
        if (!q.disciplina_id) issues.push(`${q.idSlug} sem disciplina_id`);
        if (!q.assunto_id) issues.push(`${q.idSlug} sem assunto_id`);
        if (!q.enunciado) issues.push(`${q.idSlug} sem enunciado`);
        if (!q.explicacao) issues.push(`${q.idSlug} sem explicacao`);
        if (!Array.isArray(q.alternativas) || q.alternativas.length < 2) {
          issues.push(`${q.idSlug} alternativas invalidas`);
        } else {
          totalAlternativas += q.alternativas.length;
          const corretas = q.alternativas.filter(a => a.correta).length;
          if (corretas !== 1) issues.push(`${q.idSlug} tem ${corretas} alternativas corretas`);
        }

        disciplinasCount[q.disciplina_id] = (disciplinasCount[q.disciplina_id] || 0) + 1;
      });
    }

    total += count;
    summary.push({
      file,
      exportName: exportKeys[0],
      count,
      status: issues.length === 0 ? 'OK' : 'PROBLEMAS: ' + issues.join(', ')
    });
  } catch (err) {
    summary.push({
      file,
      exportName: 'ERRO',
      count: 0,
      status: 'ERRO DE SINTAXE/IMPORT: ' + err.message
    });
  }
}

console.table(summary);
console.log('TOTAL DE QUESTÕES:', total);
console.log('TOTAL DE ALTERNATIVAS:', totalAlternativas);
console.log('DUPLICATE SLUGS:', duplicateSlugs);
console.log('QUESTÕES POR DISCIPLINA (UUID):', disciplinasCount);
