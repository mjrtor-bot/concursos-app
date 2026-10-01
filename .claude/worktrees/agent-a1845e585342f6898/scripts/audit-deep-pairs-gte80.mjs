import fs from "fs";
import path from "path";
import { TODAS_QUESTOES_LOTE10, prepararParaBanco } from "./batch10_modules/index.mjs";

function normalizarTextoCanonico(texto) {
  if (!texto) return "";
  return texto
    .replace(/<[^>]*>/g, " ")
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\r\n\t]+/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function generate3Shingles(text) {
  const norm = normalizarTextoCanonico(text);
  const words = norm.split(" ").filter(Boolean);
  const shingles = new Set();
  if (words.length < 3) {
    if (words.length > 0) shingles.add(words.join(" "));
    return shingles;
  }
  for (let i = 0; i <= words.length - 3; i++) {
    shingles.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  }
  return shingles;
}

function calculateJaccardSimilarity(setA, setB) {
  if (!setA || !setB || setA.size === 0 || setB.size === 0) return { sim: 0, intersection: [], unionSize: 0 };
  const intersection = [];
  for (const item of setA) {
    if (setB.has(item)) intersection.push(item);
  }
  const unionSize = setA.size + setB.size - intersection.length;
  const sim = unionSize === 0 ? 0 : intersection.length / unionSize;
  return { sim, intersection, unionSize, sizeA: setA.size, sizeB: setB.size };
}

async function auditPairs() {
  console.log("=== AUDITORIA PROFUNDA DE PARES >= 80% ===");

  // 1. Preparar Lote 10
  const l10List = TODAS_QUESTOES_LOTE10.map((q) => {
    const prep = prepararParaBanco(q);
    const fullText = q.enunciado + " " + q.alternativas.map((a) => a.texto).join(" ");
    return {
      id: prep.questao.id,
      slug: prep.idSlug,
      lote: "Lote 10",
      disciplina_id: q.disciplina_id,
      assunto_id: q.assunto_id,
      banca: q.banca_nome,
      orgao: q.orgao_nome,
      ano: q.ano,
      tipo: q.tipo,
      enunciado: q.enunciado,
      alternativas: q.alternativas,
      explicacao: q.explicacao,
      fullText,
      shingles: generate3Shingles(q.enunciado), // Usando enunciado
      shinglesFull: generate3Shingles(fullText), // Usando enunciado + alternativas
    };
  });

  // 2. Carregar base histórica (Lotes 1 a 9) do snapshot
  const backupPath = path.resolve(process.cwd(), "scripts/backup_pre_lote10_snapshot.json");
  const backupData = JSON.parse(fs.readFileSync(backupPath, "utf8"));
  const dbQuestoes = backupData.questoes;

  const histList = dbQuestoes.map((q) => {
    return {
      id: q.id,
      slug: q.prompt_versao || "lotes-1-9",
      lote: q.prompt_versao || "Lotes 1 a 9",
      disciplina_id: q.disciplina_id,
      assunto_id: q.assunto_id,
      banca: q.banca_nome,
      orgao: q.orgao_nome,
      ano: q.ano,
      tipo: q.tipo,
      enunciado: q.enunciado,
      alternativas: [],
      explicacao: q.explicacao,
      shingles: generate3Shingles(q.enunciado),
    };
  });

  console.log(`Lote 10: ${l10List.length} questões.`);
  console.log(`Base Histórica: ${histList.length} questões.`);

  const paresGte80 = [];

  // A. Pares Cruzados (Lote 10 vs Base Histórica) - 500 x 5.760 = 2.880.000 pares
  console.log("\nAnalisando 2.880.000 pares cruzados (Enunciado)...");
  for (const q10 of l10List) {
    for (const qH of histList) {
      const res = calculateJaccardSimilarity(q10.shingles, qH.shingles);
      if (res.sim >= 0.78) {
        paresGte80.push({
          tipoPar: "CROSS_BATCH",
          q1: q10,
          q2: qH,
          sim: res.sim,
          res,
        });
      }
    }
  }

  // B. Pares Internos Lote 10 (124.750 pares)
  console.log("Analisando 124.750 pares internos Lote 10 (Enunciado)...");
  for (let i = 0; i < l10List.length; i++) {
    for (let j = i + 1; j < l10List.length; j++) {
      const q1 = l10List[i];
      const q2 = l10List[j];
      const res = calculateJaccardSimilarity(q1.shingles, q2.shingles);
      if (res.sim >= 0.78) {
        paresGte80.push({
          tipoPar: "INTERNAL_LOTE10",
          q1,
          q2,
          sim: res.sim,
          res,
        });
      }
    }
  }

  paresGte80.sort((a, b) => b.sim - a.sim);

  console.log(`\nTotal de pares encontrados com similaridade >= 78%: ${paresGte80.length}`);

  const outputData = [];

  for (const p of paresGte80) {
    console.log(`\n================================================================================`);
    console.log(`PAR [${(p.sim * 100).toFixed(2)}%] (${p.tipoPar})`);
    console.log(`Q1 (Lote 10): ${p.q1.slug} (${p.q1.id})`);
    console.log(`Q2 (${p.q2.lote}): ${p.q2.slug} (${p.q2.id})`);
    console.log(`Disciplina Q1: ${p.q1.disciplina_id} | Assunto Q1: ${p.q1.assunto_id}`);
    console.log(`Disciplina Q2: ${p.q2.disciplina_id} | Assunto Q2: ${p.q2.assunto_id}`);
    console.log(`--- ENUNCIADO Q1 ---:\n${p.q1.enunciado}`);
    console.log(`--- ENUNCIADO Q2 ---:\n${p.q2.enunciado}`);
    console.log(`--- ALTERNATIVAS Q1 ---:`);
    p.q1.alternativas.forEach(a => console.log(`  [${a.letra || (a.correta ? 'CORRETA' : 'ERRADA')}] ${a.texto} (${a.correta ? 'GABARITO' : ''})`));
    console.log(`--- ALTERNATIVAS Q2 ---:`);
    p.q2.alternativas.forEach(a => console.log(`  [${a.letra || (a.correta ? 'CORRETA' : 'ERRADA')}] ${a.texto} (${a.correta ? 'GABARITO' : ''})`));
    console.log(`--- EXPLICAÇÃO Q1 ---:\n${p.q1.explicacao}`);
    console.log(`--- EXPLICAÇÃO Q2 ---:\n${p.q2.explicacao}`);
    console.log(`--- MATEMÁTICA SHINGLES ---:`);
    console.log(`  Shingles Q1: ${p.res.sizeA}, Shingles Q2: ${p.res.sizeB}, Interseção: ${p.res.intersection.length}, União: ${p.res.unionSize}`);
    console.log(`  Interseção: ${p.res.intersection.slice(0, 10).join(" | ")}...`);

    outputData.push({
      sim: (p.sim * 100).toFixed(2),
      tipoPar: p.tipoPar,
      q1: {
        id: p.q1.id,
        slug: p.q1.slug,
        lote: p.q1.lote,
        disciplina_id: p.q1.disciplina_id,
        assunto_id: p.q1.assunto_id,
        banca: p.q1.banca,
        ano: p.q1.ano,
        tipo: p.q1.tipo,
        enunciado: p.q1.enunciado,
        alternativas: p.q1.alternativas,
        explicacao: p.q1.explicacao,
      },
      q2: {
        id: p.q2.id,
        slug: p.q2.slug,
        lote: p.q2.lote,
        disciplina_id: p.q2.disciplina_id,
        assunto_id: p.q2.assunto_id,
        banca: p.q2.banca,
        ano: p.q2.ano,
        tipo: p.q2.tipo,
        enunciado: p.q2.enunciado,
        alternativas: p.q2.alternativas,
        explicacao: p.q2.explicacao,
      },
      shinglesMath: {
        sizeA: p.res.sizeA,
        sizeB: p.res.sizeB,
        intersectionCount: p.res.intersection.length,
        unionSize: p.res.unionSize,
        sampleIntersection: p.res.intersection.slice(0, 10),
      }
    });
  }

  fs.writeFileSync(
    path.resolve(process.cwd(), "scripts/audit_pares_gte80_detalhado.json"),
    JSON.stringify(outputData, null, 2),
    "utf8"
  );
  console.log("\n[✓] Relatório detalhado salvo em scripts/audit_pares_gte80_detalhado.json");
}

auditPairs().catch(err => {
  console.error("Erro na auditoria de pares:", err);
  process.exit(1);
});
