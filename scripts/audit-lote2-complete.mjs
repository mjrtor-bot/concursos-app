import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./batch2_modules/taxonomia.mjs";

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

async function auditLote2() {
  console.log("=== INICIANDO AUDITORIA COMPLETA DO LOTE 2 NO SUPABASE ===");

  // 1. SELECT COUNT(*) de questoes
  const { count: totalQ, error: errQ } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  if (errQ) throw errQ;

  // 2. SELECT COUNT(*) de questoes_alternativas
  const { count: totalA, error: errA } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  if (errA) throw errA;

  // Buscar todas as questões do banco
  let allQuestions = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from("questoes")
      .select("id, disciplina_id, assunto_id, tipo, dificuldade, is_autoral_ia, revisada_por_especialista, anulada, desatualizada, modelo_ia, prompt_versao, banca_nome, orgao_nome, cargo_nome, ano, fingerprint_hash, enunciado, explicacao, texto_apoio")
      .range(page * pageSize, (page + 1) * pageSize - 1);
    if (error) throw error;
    allQuestions.push(...data);
    if (data.length < pageSize) break;
    page++;
  }

  console.log(`[+] Total geral de questões lidas: ${allQuestions.length}`);

  // Verificar distribuição por prompt_versao
  const versoesPrompt = {};
  for (const q of allQuestions) {
    versoesPrompt[q.prompt_versao || "null/vazio"] = (versoesPrompt[q.prompt_versao || "null/vazio"] || 0) + 1;
  }
  console.log("[+] Contagem por prompt_versao:", versoesPrompt);

  const lote2Q = allQuestions.filter(q => q.prompt_versao === "v2.2-lote2");
  const lote1Q = allQuestions.filter(q => q.prompt_versao === "v2.1");
  const originaisQ = allQuestions.filter(q => q.prompt_versao !== "v2.2-lote2" && q.prompt_versao !== "v2.1");

  console.log(`[+] Questões Lote 2: ${lote2Q.length}`);
  console.log(`[+] Questões Lote 1: ${lote1Q.length}`);
  console.log(`[+] Questões Originais: ${originaisQ.length}`);

  // Buscar alternativas do Lote 2
  const lote2Ids = lote2Q.map(q => q.id);
  let lote2Alternativas = [];
  for (let i = 0; i < lote2Ids.length; i += 100) {
    const chunk = lote2Ids.slice(i, i + 100);
    const { data: alts, error: errAlt } = await supabase
      .from("questoes_alternativas")
      .select("id, questao_id, letra, texto, correta, ordem")
      .in("questao_id", chunk);
    if (errAlt) throw errAlt;
    lote2Alternativas.push(...alts);
  }

  console.log(`[+] Alternativas do Lote 2 recuperadas: ${lote2Alternativas.length}`);

  // 5. Fingerprints distintos no Lote 2
  const fpLote2Set = new Set(lote2Q.map(q => q.fingerprint_hash));
  const distinctFpLote2 = fpLote2Set.size;

  // 6. Colisões de fingerprint
  // a) dentro do Lote 2
  let colisoesInternasLote2 = lote2Q.length - distinctFpLote2;

  // b) contra Lote 1
  const fpLote1Set = new Set(lote1Q.map(q => q.fingerprint_hash));
  let colisoesComLote1 = 0;
  for (const q of lote2Q) {
    if (fpLote1Set.has(q.fingerprint_hash)) colisoesComLote1++;
  }

  // c) contra originais
  const fpOriginaisSet = new Set(originaisQ.map(q => q.fingerprint_hash));
  let colisoesComOriginais = 0;
  for (const q of lote2Q) {
    if (fpOriginaisSet.has(q.fingerprint_hash)) colisoesComOriginais++;
  }

  // 7. Validação de flags do Lote 2
  const countIsAutoralIA = lote2Q.filter(q => q.is_autoral_ia === true).length;
  const countRevisadaFalse = lote2Q.filter(q => q.revisada_por_especialista === false).length;
  const countAnuladaFalse = lote2Q.filter(q => q.anulada === false).length;
  const countDesatualizadaFalse = lote2Q.filter(q => q.desatualizada === false).length;
  const countTodasFlagsOk = lote2Q.filter(
    q => q.is_autoral_ia === true &&
         q.revisada_por_especialista === false &&
         q.anulada === false &&
         q.desatualizada === false
  ).length;

  // 8. Distribuição por disciplina no Lote 2
  const reverseDiscMap = Object.fromEntries(
    Object.entries(TAXONOMIA.disciplinas).map(([k, v]) => [v, k])
  );
  const distDisciplina = {};
  for (const q of lote2Q) {
    const nome = reverseDiscMap[q.disciplina_id] || q.disciplina_id;
    distDisciplina[nome] = (distDisciplina[nome] || 0) + 1;
  }

  // 9. Distribuição por carreira / cargo / orgao
  const distCarreira = {};
  const distOrgao = {};
  for (const q of lote2Q) {
    distCarreira[q.cargo_nome || "Não definido"] = (distCarreira[q.cargo_nome || "Não definido"] || 0) + 1;
    distOrgao[q.orgao_nome || "Não definido"] = (distOrgao[q.orgao_nome || "Não definido"] || 0) + 1;
  }

  // 10. Distribuição por modalidade
  const distModalidade = {
    certo_errado: lote2Q.filter(q => q.tipo === "certo_errado").length,
    multipla_escolha: lote2Q.filter(q => q.tipo === "multipla_escolha").length,
  };

  // 11. Distribuição por dificuldade
  const distDificuldade = {};
  for (const q of lote2Q) {
    distDificuldade[q.dificuldade || "indefinida"] = (distDificuldade[q.dificuldade || "indefinida"] || 0) + 1;
  }

  // 12. Análise de similaridade textual entre enunciados do Lote 2
  console.log("[>] Calculando matriz de similaridade textual entre os enunciados do Lote 2...");
  const shingleList = lote2Q.map(q => ({
    id: q.id,
    shingles: getShingles(q.enunciado, 3)
  }));

  let pares80 = 0;
  let pares90 = 0;
  let pares95 = 0;
  const totalPares = (lote2Q.length * (lote2Q.length - 1)) / 2;

  for (let i = 0; i < shingleList.length; i++) {
    for (let j = i + 1; j < shingleList.length; j++) {
      const sim = jaccardSimilarity(shingleList[i].shingles, shingleList[j].shingles);
      if (sim >= 0.95) pares95++;
      if (sim >= 0.90) pares90++;
      if (sim >= 0.80) pares80++;
    }
  }

  // 13. Auditoria Pedagógica das 50 Questões (5 de cada uma das 10 disciplinas)
  console.log("[>] Selecionando e auditando 50 questões pedagógicas do Lote 2...");
  const altsByQ = {};
  for (const a of lote2Alternativas) {
    if (!altsByQ[a.questao_id]) altsByQ[a.questao_id] = [];
    altsByQ[a.questao_id].push(a);
  }

  const questoesPorDisc = {};
  for (const q of lote2Q) {
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
        questao: q,
        alternativas: altsByQ[q.id] || []
      });
    }
  }

  const relatorioData = {
    totalQ,
    totalA,
    versoesPrompt,
    lote2QCount: lote2Q.length,
    lote2ACount: lote2Alternativas.length,
    distinctFpLote2,
    colisoesInternasLote2,
    colisoesComLote1,
    colisoesComOriginais,
    countIsAutoralIA,
    countRevisadaFalse,
    countAnuladaFalse,
    countDesatualizadaFalse,
    countTodasFlagsOk,
    distDisciplina,
    distCarreira,
    distOrgao,
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
    amostra50: amostra50.map(item => ({
      disciplina: item.disciplina,
      id: item.questao.id,
      tipo: item.questao.tipo,
      dificuldade: item.questao.dificuldade,
      cargo: item.questao.cargo_nome,
      banca: item.questao.banca_nome,
      enunciado: item.questao.enunciado,
      explicacao: item.questao.explicacao,
      alternativas: item.alternativas.map(a => ({
        letra: a.letra,
        texto: a.texto,
        correta: a.correta
      }))
    }))
  };

  fs.writeFileSync(
    path.resolve(process.cwd(), "scripts/audit_lote2_results.json"),
    JSON.stringify(relatorioData, null, 2),
    "utf8"
  );

  console.log("=== AUDITORIA COMPLETA CONCLUÍDA E SALVA EM audit_lote2_results.json ===");
  console.log(`Total Q: ${totalQ}, Total A: ${totalA}`);
  console.log(`Lote 2 Q: ${lote2Q.length}, Lote 2 A: ${lote2Alternativas.length}`);
  console.log(`Colisões Internas Lote 2: ${colisoesInternasLote2}`);
  console.log(`Colisões com Lote 1: ${colisoesComLote1}`);
  console.log(`Colisões com Originais: ${colisoesComOriginais}`);
  console.log(`Pares com similaridade >= 80%: ${pares80}, >= 90%: ${pares90}, >= 95%: ${pares95}`);
}

auditLote2().catch(err => {
  console.error("ERRO NA AUDITORIA:", err);
  process.exit(1);
});
