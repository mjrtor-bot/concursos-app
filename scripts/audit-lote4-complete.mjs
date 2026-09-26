import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./batch4_modules/taxonomia.mjs";
import { penalQuestoes } from "./batch4_modules/penal.mjs";
import { processoPenalQuestoes } from "./batch4_modules/processo_penal.mjs";
import { legislacaoEspecialQuestoes } from "./batch4_modules/legislacao_especial.mjs";
import { constitucionalQuestoes } from "./batch4_modules/constitucional.mjs";
import { administrativoQuestoes } from "./batch4_modules/administrativo.mjs";
import { portuguesQuestoes } from "./batch4_modules/portugues.mjs";
import { direitosHumanosQuestoes } from "./batch4_modules/direitos_humanos.mjs";
import { criminologiaQuestoes } from "./batch4_modules/criminologia.mjs";
import { informaticaQuestoes } from "./batch4_modules/informatica.mjs";
import { rlmQuestoes } from "./batch4_modules/rlm.mjs";
import { formatarQuestao } from "./batch4_modules/helper.mjs";

const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  for (const line of envContent.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        const key = trimmed.substring(0, idx).trim();
        const val = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
        process.env[key] = val;
      }
    }
  }
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

function getShingles(str, n = 3) {
  const words = str.toLowerCase().replace(/[^\w\s]/g, " ").split(/\s+/).filter(Boolean);
  const shingles = new Set();
  if (words.length < n) {
    shingles.add(words.join(" "));
    return shingles;
  }
  for (let i = 0; i <= words.length - n; i++) {
    shingles.add(words.slice(i, i + n).join(" "));
  }
  return shingles;
}

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 && setB.size === 0) return 1.0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

async function auditLote4() {
  console.log("=== INICIANDO AUDITORIA COMPLETA DO LOTE 4 ===");

  const modulos = [
    { nome: "penal", list: penalQuestoes, esperado: 70 },
    { nome: "processo_penal", list: processoPenalQuestoes, esperado: 70 },
    { nome: "legislacao_especial", list: legislacaoEspecialQuestoes, esperado: 70 },
    { nome: "constitucional", list: constitucionalQuestoes, esperado: 60 },
    { nome: "administrativo", list: administrativoQuestoes, esperado: 60 },
    { nome: "portugues", list: portuguesQuestoes, esperado: 60 },
    { nome: "direitos_humanos", list: direitosHumanosQuestoes, esperado: 35 },
    { nome: "informatica", list: informaticaQuestoes, esperado: 30 },
    { nome: "criminologia", list: criminologiaQuestoes, esperado: 25 },
    { nome: "rlm", list: rlmQuestoes, esperado: 20 },
  ];

  let totalRaw = 0;
  for (const mod of modulos) {
    console.log(`  - Módulo ${mod.nome.padEnd(22)}: ${mod.list.length} itens (esperado: ${mod.esperado})`);
    if (mod.list.length !== mod.esperado) {
      throw new Error(`Módulo ${mod.nome} tem contagem incorreta: ${mod.list.length} != ${mod.esperado}`);
    }
    totalRaw += mod.list.length;
  }
  console.log(`[+] Total de questões em código (Lote 4): ${totalRaw} (Esperado: 500)`);

  const todasQuestoes = [];
  const todasAlternativas = [];
  let globalIdx = 1;

  for (const mod of modulos) {
    for (const raw of mod.list) {
      const { questao, alternativas } = formatarQuestao(raw, globalIdx++);
      todasQuestoes.push(questao);
      todasAlternativas.push(...alternativas);
    }
  }

  // 1. Validar IDs e Fingerprints internos
  const idsSet = new Set(todasQuestoes.map(q => q.id));
  const fpsSet = new Set(todasQuestoes.map(q => q.fingerprint_hash));

  console.log(`[+] IDs únicos no Lote 4: ${idsSet.size}/${todasQuestoes.length}`);
  console.log(`[+] Fingerprints únicos no Lote 4: ${fpsSet.size}/${todasQuestoes.length}`);

  if (idsSet.size !== 500 || fpsSet.size !== 500) {
    throw new Error(`Colisão interna de ID ou Fingerprint no Lote 4!`);
  }

  // 2. Buscar todas as questões do Supabase para teste de colisão contra 100% da base existente
  console.log("\n[>] Buscando todas as questões existentes no Supabase para verificação de colisão...");
  let dbQuestions = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from("questoes")
      .select("id, fingerprint_hash, prompt_versao")
      .range(page * pageSize, (page + 1) * pageSize - 1);
    if (error) throw error;
    dbQuestions.push(...data);
    if (data.length < pageSize) break;
    page++;
  }

  console.log(`[+] Total de questões existentes no banco: ${dbQuestions.length}`);
  const dbQuestionsOutrosLotes = dbQuestions.filter(q => q.prompt_versao !== "v2.4-lote4");
  console.log(`[+] Total de questões de outros lotes (base prévia): ${dbQuestionsOutrosLotes.length}`);

  const dbFpsSet = new Set(dbQuestionsOutrosLotes.map(q => q.fingerprint_hash));
  const dbIdsSet = new Set(dbQuestionsOutrosLotes.map(q => q.id));

  let colisoesFpComDb = 0;
  let colisoesIdComDb = 0;
  for (const q of todasQuestoes) {
    if (dbFpsSet.has(q.fingerprint_hash)) {
      console.error(`[ERRO COLISÃO FP DB] Questão ${q.id} colide com fingerprint existente no banco!`);
      colisoesFpComDb++;
    }
    if (dbIdsSet.has(q.id)) {
      console.error(`[ERRO COLISÃO ID DB] Questão ${q.id} colide com ID existente no banco!`);
      colisoesIdComDb++;
    }
  }

  console.log(`[+] Colisões de Fingerprint com o Banco Existente: ${colisoesFpComDb}`);
  console.log(`[+] Colisões de ID com o Banco Existente: ${colisoesIdComDb}`);

  if (colisoesFpComDb > 0 || colisoesIdComDb > 0) {
    throw new Error(`Falha de deduplicação: colisões com a base existente detectadas!`);
  }

  // 3. Matriz de Similaridade Textual (Jaccard sobre Shingles de 3 palavras)
  console.log("\n[>] Calculando matriz de similaridade textual (Jaccard 3-shingles) entre enunciados do Lote 4...");
  const shingleList = todasQuestoes.map(q => ({
    id: q.id,
    shingles: getShingles(q.enunciado, 3)
  }));

  let pares80 = 0;
  let pares90 = 0;
  let pares95 = 0;
  const totalPares = (todasQuestoes.length * (todasQuestoes.length - 1)) / 2;

  for (let i = 0; i < shingleList.length; i++) {
    for (let j = i + 1; j < shingleList.length; j++) {
      const sim = jaccardSimilarity(shingleList[i].shingles, shingleList[j].shingles);
      if (sim >= 0.95) {
        pares95++;
        console.warn(`[AVISO SIMILARIDADE >= 95%] Q${i + 1} vs Q${j + 1} (sim: ${(sim * 100).toFixed(1)}%)`);
      }
      if (sim >= 0.90) pares90++;
      if (sim >= 0.80) pares80++;
    }
  }

  console.log(`[+] Pares avaliados: ${totalPares}`);
  console.log(`[+] Pares com similaridade >= 80%: ${pares80} (${((pares80 / totalPares) * 100).toFixed(4)}%)`);
  console.log(`[+] Pares com similaridade >= 90%: ${pares90} (${((pares90 / totalPares) * 100).toFixed(4)}%)`);
  console.log(`[+] Pares com similaridade >= 95%: ${pares95} (${((pares95 / totalPares) * 100).toFixed(4)}%)`);

  // 4. Auditoria de Alternativas e Gabaritos
  console.log("\n[>] Validando gabaritos e integridade das alternativas...");
  const altsByQ = {};
  for (const alt of todasAlternativas) {
    if (!altsByQ[alt.questao_id]) altsByQ[alt.questao_id] = [];
    altsByQ[alt.questao_id].push(alt);
  }

  let gabaritosValidos = 0;
  for (const [qid, alts] of Object.entries(altsByQ)) {
    const corretas = alts.filter(a => a.correta).length;
    if (corretas !== 1) {
      throw new Error(`Questão ${qid} tem ${corretas} alternativas corretas (deve ter exatamente 1).`);
    }
    gabaritosValidos++;
  }
  console.log(`[✓] 100% das questões possuem gabarito único válido: ${gabaritosValidos}/${todasQuestoes.length}`);

  // 5. Amostragem Pedagógica de 50 questões (5 por disciplina)
  console.log("\n[>] Gerando amostra pedagógica de 50 questões (5 por disciplina)...");
  const reverseDiscMap = Object.fromEntries(
    Object.entries(TAXONOMIA.disciplinas).map(([k, v]) => [v, k])
  );

  const questoesPorDisc = {};
  for (const q of todasQuestoes) {
    const disc = reverseDiscMap[q.disciplina_id] || q.disciplina_id;
    if (!questoesPorDisc[disc]) questoesPorDisc[disc] = [];
    questoesPorDisc[disc].push(q);
  }

  const amostra50 = [];
  for (const [disc, qList] of Object.entries(questoesPorDisc)) {
    const step = Math.floor(qList.length / 5);
    const selected = [
      qList[0],
      qList[step],
      qList[step * 2],
      qList[step * 3],
      qList[step * 4],
    ];
    for (const q of selected) {
      amostra50.push({
        disciplina: disc,
        id: q.id,
        tipo: q.tipo,
        dificuldade: q.dificuldade,
        cargo: q.cargo_nome,
        banca: q.banca_nome,
        enunciado: q.enunciado,
        explicacao: q.explicacao,
        alternativas: (altsByQ[q.id] || []).map(a => ({
          letra: a.letra,
          texto: a.texto,
          correta: a.correta
        }))
      });
    }
  }

  const distDisciplina = {};
  for (const q of todasQuestoes) {
    const nome = reverseDiscMap[q.disciplina_id] || q.disciplina_id;
    distDisciplina[nome] = (distDisciplina[nome] || 0) + 1;
  }

  const distModalidade = {
    certo_errado: todasQuestoes.filter(q => q.tipo === "certo_errado").length,
    multipla_escolha: todasQuestoes.filter(q => q.tipo === "multipla_escolha").length,
  };

  const distDificuldade = {};
  for (const q of todasQuestoes) {
    distDificuldade[q.dificuldade || "indefinida"] = (distDificuldade[q.dificuldade || "indefinida"] || 0) + 1;
  }

  const relatorio = {
    lote: 4,
    prompt_versao: "v2.4-lote4",
    totalQuestoes: todasQuestoes.length,
    totalAlternativas: todasAlternativas.length,
    idsUnicos: idsSet.size,
    fpsUnicos: fpsSet.size,
    colisoesFpComDb,
    colisoesIdComDb,
    distDisciplina,
    distModalidade,
    distDificuldade,
    similaridade: {
      totalPares,
      pares80,
      pares90,
      pares95,
      pct80: ((pares80 / totalPares) * 100).toFixed(4),
      pct90: ((pares90 / totalPares) * 100).toFixed(4),
      pct95: ((pares95 / totalPares) * 100).toFixed(4),
    },
    amostra50Count: amostra50.length,
    amostra50
  };

  fs.writeFileSync(
    path.resolve(process.cwd(), "scripts/audit_lote4_results.json"),
    JSON.stringify(relatorio, null, 2),
    "utf8"
  );

  console.log("\n=========================================================");
  console.log("   AUDITORIA DO LOTE 4 CONCLUÍDA E SALVA COM SUCESSO!    ");
  console.log("=========================================================");
}

auditLote4().catch(err => {
  console.error("ERRO NA AUDITORIA DO LOTE 4:", err);
  process.exit(1);
});
