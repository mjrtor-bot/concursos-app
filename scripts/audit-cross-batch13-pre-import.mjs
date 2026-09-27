import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { TODAS_QUESTOES_LOTE13, validarLote13, normalizarTexto } from "./batch13_modules/index.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function get3Shingles(text) {
  const words = normalizarTexto(text).split(/\s+/).filter((w) => w.length > 0);
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

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 && setB.size === 0) return 1.0;
  if (setA.size === 0 || setB.size === 0) return 0.0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

async function runAudit() {
  console.log("==========================================================================");
  console.log("   AUDITORIA DE DEDUPLICAÇÃO E SIMILARIDADE JACCARD 3-SHINGLES - LOTE 13 ");
  console.log("==========================================================================\n");

  const validacao = validarLote13();
  console.log(`[+] Validação estrutural do Lote 13: ${validacao.ok ? "OK" : "FALHA"}`);
  if (!validacao.ok) {
    console.error("Erros encontrados:", validacao.erros);
    process.exit(1);
  }
  console.log(`[+] Total de questões do Lote 13: ${validacao.totalQuestoes}`);
  console.log(`[+] Total de alternativas do Lote 13: ${validacao.totalAlternativas}`);

  // Carregar snapshot pré-lote 13
  const snapshotPath = path.join(__dirname, "backup_pre_lote13_snapshot.json");
  if (!fs.existsSync(snapshotPath)) {
    throw new Error(`Snapshot não encontrado em ${snapshotPath}. Execute create-backup-lote13-snapshot.mjs primeiro.`);
  }

  console.log("[+] Carregando snapshot de 7.260 questões de produção...");
  const snapshotRaw = fs.readFileSync(snapshotPath, "utf8");
  const snapshot = JSON.parse(snapshotRaw);
  const questoesProd = snapshot.questoes;
  console.log(`[+] Snapshot carregado: ${questoesProd.length} questões de produção.`);

  console.log("\n[1/3] Pré-computando 3-shingles para Lote 13 e Produção...");
  const lote13Shingles = TODAS_QUESTOES_LOTE13.map((q) => ({
    id: q.id,
    idSlug: q.idSlug,
    tipo: q.tipo,
    enunciado: q.enunciado,
    conceito_principal: q.conceito_principal,
    tese_ou_regra: q.tese_ou_regra,
    shingles: get3Shingles(q.enunciado),
  }));

  const prodShingles = questoesProd.map((q) => ({
    id: q.id,
    banca_nome: q.banca_nome,
    ano: q.ano,
    enunciado: q.enunciado,
    shingles: get3Shingles(q.enunciado),
  }));

  console.log("\n[2/3] Calculando similaridade interna do Lote 13 (124.750 pares)...");
  let maxInterna = 0;
  let parMaxInterno = null;
  const paresInternos70a79 = [];
  const paresInternos80a89 = [];
  const paresInternos90plus = [];

  for (let i = 0; i < lote13Shingles.length; i++) {
    for (let j = i + 1; j < lote13Shingles.length; j++) {
      const q1 = lote13Shingles[i];
      const q2 = lote13Shingles[j];
      const sim = jaccardSimilarity(q1.shingles, q2.shingles);
      if (sim > maxInterna) {
        maxInterna = sim;
        parMaxInterno = { q1, q2, sim };
      }
      if (sim >= 0.90) {
        paresInternos90plus.push({ q1, q2, sim });
      } else if (sim >= 0.80) {
        paresInternos80a89.push({ q1, q2, sim });
      } else if (sim >= 0.70) {
        paresInternos70a79.push({ q1, q2, sim });
      }
    }
  }

  console.log(`   * Máxima similaridade interna: ${(maxInterna * 100).toFixed(2)}%`);
  if (parMaxInterno) {
    console.log(`     Par: [${parMaxInterno.q1.idSlug}] vs [${parMaxInterno.q2.idSlug}]`);
  }
  console.log(`   * Pares 70%-79%: ${paresInternos70a79.length}`);
  console.log(`   * Pares 80%-89%: ${paresInternos80a89.length}`);
  console.log(`   * Pares >=90%: ${paresInternos90plus.length}`);

  console.log("\n[3/3] Calculando similaridade cruzada: Lote 13 vs Produção (3.630.000 pares)...");
  let maxCruzada = 0;
  let parMaxCruzado = null;
  const paresCruzados70a79 = [];
  const paresCruzados80a89 = [];
  const paresCruzados90plus = [];

  for (let i = 0; i < lote13Shingles.length; i++) {
    const q13 = lote13Shingles[i];
    for (let j = 0; j < prodShingles.length; j++) {
      const qProd = prodShingles[j];
      const sim = jaccardSimilarity(q13.shingles, qProd.shingles);
      if (sim > maxCruzada) {
        maxCruzada = sim;
        parMaxCruzado = { q13, qProd, sim };
      }
      if (sim >= 0.90) {
        paresCruzados90plus.push({ q13, qProd, sim });
      } else if (sim >= 0.80) {
        paresCruzados80a89.push({ q13, qProd, sim });
      } else if (sim >= 0.70) {
        paresCruzados70a79.push({ q13, qProd, sim });
      }
    }
  }

  console.log(`   * Máxima similaridade cruzada: ${(maxCruzada * 100).toFixed(2)}%`);
  if (parMaxCruzado) {
    console.log(`     Par: [${parMaxCruzado.q13.idSlug}] vs [${parMaxCruzado.qProd.id} (${parMaxCruzado.qProd.banca_nome}/${parMaxCruzado.qProd.ano})]`);
  }
  console.log(`   * Pares cruzados 70%-79%: ${paresCruzados70a79.length}`);
  console.log(`   * Pares cruzados 80%-89%: ${paresCruzados80a89.length}`);
  console.log(`   * Pares cruzados >=90%: ${paresCruzados90plus.length}`);

  // Salvar relatório JSON detalhado
  const relatorio = {
    timestamp: new Date().toISOString(),
    lote: "Lote 13",
    totalQuestoes: TODAS_QUESTOES_LOTE13.length,
    totalAlternativas: validacao.totalAlternativas,
    paresInternosAvaliados: (500 * 499) / 2,
    paresCruzadosAvaliados: 500 * questoesProd.length,
    interna: {
      maxSimilaridade: maxInterna,
      parMaximo: parMaxInterno ? {
        id1: parMaxInterno.q1.id,
        slug1: parMaxInterno.q1.idSlug,
        id2: parMaxInterno.q2.id,
        slug2: parMaxInterno.q2.idSlug,
        similaridade: parMaxInterno.sim,
      } : null,
      faixas: {
        abaixo70: ((500 * 499) / 2) - paresInternos70a79.length - paresInternos80a89.length - paresInternos90plus.length,
        de70a79: paresInternos70a79.map((p) => ({
          slug1: p.q1.idSlug,
          slug2: p.q2.idSlug,
          sim: p.sim,
        })),
        de80a89: paresInternos80a89.map((p) => ({
          slug1: p.q1.idSlug,
          slug2: p.q2.idSlug,
          sim: p.sim,
        })),
        acima90: paresInternos90plus.map((p) => ({
          slug1: p.q1.idSlug,
          slug2: p.q2.idSlug,
          sim: p.sim,
        })),
      },
    },
    cruzada: {
      maxSimilaridade: maxCruzada,
      parMaximo: parMaxCruzado ? {
        slugLote13: parMaxCruzado.q13.idSlug,
        idProd: parMaxCruzado.qProd.id,
        banca: parMaxCruzado.qProd.banca_nome,
        ano: parMaxCruzado.qProd.ano,
        similaridade: parMaxCruzado.sim,
      } : null,
      faixas: {
        abaixo70: (500 * questoesProd.length) - paresCruzados70a79.length - paresCruzados80a89.length - paresCruzados90plus.length,
        de70a79: paresCruzados70a79.map((p) => ({
          slugLote13: p.q13.idSlug,
          idProd: p.qProd.id,
          banca: p.qProd.banca_nome,
          sim: p.sim,
        })),
        de80a89: paresCruzados80a89.map((p) => ({
          slugLote13: p.q13.idSlug,
          idProd: p.qProd.id,
          banca: p.qProd.banca_nome,
          sim: p.sim,
        })),
        acima90: paresCruzados90plus.map((p) => ({
          slugLote13: p.q13.idSlug,
          idProd: p.qProd.id,
          banca: p.qProd.banca_nome,
          sim: p.sim,
        })),
      },
    },
  };

  const relatorioPath = path.join(__dirname, "audit_lote13_pre_import.json");
  fs.writeFileSync(relatorioPath, JSON.stringify(relatorio, null, 2), "utf8");
  console.log(`\n[+] Relatório de auditoria salvo em ${relatorioPath}`);

  if (paresInternos90plus.length > 0 || paresCruzados90plus.length > 0) {
    console.error("❌ ERRO: Existem pares com similaridade >= 90%!");
    process.exit(1);
  } else {
    console.log("✅ AUDITORIA JACCARD 3-SHINGLES APROVADA: Zero pares >= 90%.");
  }
}

runAudit().catch((err) => {
  console.error("Erro fatal na auditoria:", err);
  process.exit(1);
});
