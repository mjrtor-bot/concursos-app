import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TAXONOMIA } from './batch6_modules/taxonomia.mjs';
import { validateQuestionBatch, calculateJaccardSimilarity, generate3Shingles } from './batch6_modules/helper.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadAllModules() {
  const modulesDir = path.join(__dirname, 'batch6_modules');
  const files = [
    { file: 'transito_01.mjs', key: 'transito01Questoes', expectedDisciplina: 'transito', expectedCount: 25 },
    { file: 'transito_02.mjs', key: 'transito02Questoes', expectedDisciplina: 'transito', expectedCount: 25 },
    { file: 'transito_03.mjs', key: 'transito03Questoes', expectedDisciplina: 'transito', expectedCount: 25 },
    { file: 'transito_04.mjs', key: 'transito04Questoes', expectedDisciplina: 'transito', expectedCount: 25 },
    { file: 'penal_01.mjs', key: 'penal01Questoes', expectedDisciplina: 'penal', expectedCount: 35 },
    { file: 'penal_02.mjs', key: 'penal02Questoes', expectedDisciplina: 'penal', expectedCount: 35 },
    { file: 'processo_penal_01.mjs', key: 'processoPenal01Questoes', expectedDisciplina: 'processo_penal', expectedCount: 30 },
    { file: 'processo_penal_02.mjs', key: 'processoPenal02Questoes', expectedDisciplina: 'processo_penal', expectedCount: 30 },
    { file: 'constitucional_01.mjs', key: 'constitucional01Questoes', expectedDisciplina: 'constitucional', expectedCount: 30 },
    { file: 'constitucional_02.mjs', key: 'constitucional02Questoes', expectedDisciplina: 'constitucional', expectedCount: 30 },
    { file: 'administrativo_01.mjs', key: 'administrativo01Questoes', expectedDisciplina: 'administrativo', expectedCount: 30 },
    { file: 'administrativo_02.mjs', key: 'administrativo02Questoes', expectedDisciplina: 'administrativo', expectedCount: 30 },
    { file: 'leg_especial_01.mjs', key: 'legEspecial01Questoes', expectedDisciplina: 'legislacao_especial', expectedCount: 25 },
    { file: 'leg_especial_02.mjs', key: 'legEspecial02Questoes', expectedDisciplina: 'legislacao_especial', expectedCount: 25 },
    { file: 'portugues_01.mjs', key: 'portugues01Questoes', expectedDisciplina: 'portugues', expectedCount: 20 },
    { file: 'portugues_02.mjs', key: 'portugues02Questoes', expectedDisciplina: 'portugues', expectedCount: 20 },
    { file: 'rlm_fisica_01.mjs', key: 'rlmFisica01Questoes', expectedDisciplina: 'rlm', expectedCount: 20 },
    { file: 'rlm_fisica_02.mjs', key: 'rlmFisica02Questoes', expectedDisciplina: 'rlm', expectedCount: 20 },
    { file: 'direitos_humanos_01.mjs', key: 'direitosHumanos01Questoes', expectedDisciplina: 'direitos_humanos', expectedCount: 20 },
  ];

  const allRawQuestions = [];
  const moduleReports = [];

  for (const m of files) {
    const fullPath = path.join(modulesDir, m.file);
    if (!fs.existsSync(fullPath)) {
      console.warn(`[PENDENTE] Arquivo ${m.file} ainda não encontrado.`);
      continue;
    }

    try {
      const imported = await import(`./batch6_modules/${m.file}`);
      const questions = imported[m.key] || imported.default || [];
      console.log(`[OK] ${m.file}: ${questions.length} questões carregadas (esperado: ${m.expectedCount}).`);

      moduleReports.push({
        file: m.file,
        count: questions.length,
        expectedCount: m.expectedCount,
        disciplina: m.expectedDisciplina,
      });

      allRawQuestions.push(...questions);
    } catch (err) {
      console.error(`[ERRO] Falha ao importar ${m.file}:`, err.message);
    }
  }

  return { allRawQuestions, moduleReports, totalModules: files.length };
}

async function runValidation() {
  console.log('================================================================');
  console.log('           VALIDAÇÃO INTEGRAL DO LOTE 6 (500 QUESTÕES)          ');
  console.log('================================================================\n');

  const { allRawQuestions, moduleReports, totalModules } = await loadAllModules();

  console.log(`\nProgresso de Módulos: ${moduleReports.length}/${totalModules}`);
  console.log(`Total de Questões Coletadas: ${allRawQuestions.length}/500\n`);

  if (allRawQuestions.length === 0) {
    console.log('Nenhuma questão carregada ainda. Aguarde a finalização dos submódulos.');
    return;
  }

  // 1. Validação estrutural de cada questão
  const { validQuestions, errors } = validateQuestionBatch(allRawQuestions);

  if (errors.length > 0) {
    console.error(`\n❌ Encontrados ${errors.length} erros estruturais:`);
    errors.slice(0, 15).forEach((e, idx) => console.error(` ${idx + 1}. [${e.id}] ${e.error}`));
    if (errors.length > 15) console.error(` ... e mais ${errors.length - 15} erros.`);
  } else {
    console.log(`\n✅ Todas as ${validQuestions.length} questões passaram na validação estrutural individual!`);
  }

  // 2. Unicidade de IDs e UUIDs
  const ids = new Set();
  const uuids = new Set();
  const dupIds = [];
  const dupUuids = [];

  for (const q of validQuestions) {
    if (ids.has(q.id)) dupIds.push(q.id);
    ids.add(q.id);
    if (uuids.has(q.uuid)) dupUuids.push(q.uuid);
    uuids.add(q.uuid);
  }

  if (dupIds.length > 0) {
    console.error(`❌ IDs duplicados encontrados: ${dupIds.join(', ')}`);
  } else {
    console.log(`✅ Unicidade de IDs verificada (0 duplicatas em ${ids.size} questões).`);
  }

  if (dupUuids.length > 0) {
    console.error(`❌ UUIDs determinísticos duplicados encontrados: ${dupUuids.join(', ')}`);
  } else {
    console.log(`✅ Unicidade de UUIDs determinísticos verificada (0 duplicatas).`);
  }

  // 3. Distribuição por disciplina
  const discCount = {};
  const bancaCount = {};
  const carreiraCount = {};
  const modalidadeCount = {};

  for (const q of validQuestions) {
    // Disciplina
    discCount[q.disciplina_id] = (discCount[q.disciplina_id] || 0) + 1;
    // Banca
    const b = q.banca_nome || q.banca || 'Outra';
    bancaCount[b] = (bancaCount[b] || 0) + 1;
    // Carreira/Orgão
    const o = q.orgao_nome || q.orgao || 'Outro';
    carreiraCount[o] = (carreiraCount[o] || 0) + 1;
    // Modalidade
    modalidadeCount[q.tipo] = (modalidadeCount[q.tipo] || 0) + 1;
  }

  console.log('\n--- DISTRIBUIÇÃO POR DISCIPLINA ---');
  for (const [k, v] of Object.entries(TAXONOMIA.disciplinas)) {
    const actual = discCount[v] || 0;
    console.log(` - ${k} (${v}): ${actual} questões`);
  }

  console.log('\n--- DISTRIBUIÇÃO POR BANCA ---');
  for (const [banca, count] of Object.entries(bancaCount)) {
    const pct = ((count / validQuestions.length) * 100).toFixed(1);
    console.log(` - ${banca}: ${count} (${pct}%)`);
  }

  console.log('\n--- DISTRIBUIÇÃO POR CARREIRA / ÓRGÃO ---');
  for (const [orgao, count] of Object.entries(carreiraCount).sort((a, b) => b[1] - a[1])) {
    const pct = ((count / validQuestions.length) * 100).toFixed(1);
    console.log(` - ${orgao}: ${count} (${pct}%)`);
  }

  console.log('\n--- DISTRIBUIÇÃO POR TIPO / MODALIDADE ---');
  for (const [tipo, count] of Object.entries(modalidadeCount)) {
    const pct = ((count / validQuestions.length) * 100).toFixed(1);
    console.log(` - ${tipo}: ${count} (${pct}%)`);
  }

  // 4. Teste de similaridade Jaccard (Anti-Plágio interno e redundância)
  console.log('\n--- TESTE DE SIMILARIDADE JACCARD ENTRE QUESTÕES ---');
  let highSimilarityCount = 0;
  for (let i = 0; i < validQuestions.length; i++) {
    const sh1 = generate3Shingles(validQuestions[i].enunciado);
    for (let j = i + 1; j < validQuestions.length; j++) {
      const sh2 = generate3Shingles(validQuestions[j].enunciado);
      const sim = calculateJaccardSimilarity(sh1, sh2);
      if (sim > 0.70) {
        highSimilarityCount++;
        console.warn(` ⚠️ Alta similaridade (${(sim * 100).toFixed(1)}%) entre ${validQuestions[i].id} e ${validQuestions[j].id}`);
      }
    }
  }

  if (highSimilarityCount === 0) {
    console.log('✅ Nenhuma colisão ou redundância de alta similaridade encontrada (>0.70 Jaccard).');
  } else {
    console.warn(`⚠️ Foram encontradas ${highSimilarityCount} duplas com similaridade acima do limiar.`);
  }

  console.log('\n================================================================');
  if (validQuestions.length === 500 && errors.length === 0 && dupIds.length === 0) {
    console.log('🎉 LOTE 6 COMPLETO E 100% VALIDADO! PRONTO PARA INGESTÃO.');
  } else {
    console.log(`STATUS ATUAL: ${validQuestions.length}/500 questões validadas.`);
  }
  console.log('================================================================\n');
}

runValidation();
