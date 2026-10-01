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

async function verifyLote2Live() {
  console.log("=========================================================");
  console.log("   AUDITORIA ESPECÍFICA DO LOTE 2 NO SUPABASE (PRODUÇÃO) ");
  console.log("=========================================================");

  // 1. Contagens Totais Globais
  const { count: totalQ, error: errQ } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  if (errQ) throw errQ;

  const { count: totalA, error: errA } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  if (errA) throw errA;

  console.log(`[+] Total Geral de Questões em Produção: ${totalQ} (Esperado: 2260)`);
  console.log(`[+] Total Geral de Alternativas em Produção: ${totalA} (Esperado: 9641)`);

  // 2. Consulta das questões do Lote 2 (is_autoral_ia = true, prompt_versao = 'v2.2-lote2')
  const { data: batch2Q, error: errB2 } = await supabase
    .from("questoes")
    .select("id, disciplina_id, assunto_id, tipo, is_autoral_ia, revisada_por_especialista, modelo_ia, prompt_versao, banca_nome, orgao_nome, cargo_nome, ano, fingerprint_hash")
    .eq("prompt_versao", "v2.2-lote2")
    .eq("modelo_ia", "Claude Fable 5.1");

  if (errB2) throw errB2;

  console.log(`\n[+] Questões do Lote 2 Policial recuperadas: ${batch2Q.length} (Esperado: 500)`);
  if (batch2Q.length !== 500) {
    throw new Error(`Contagem incorreta de questões do Lote 2: ${batch2Q.length}`);
  }

  let ceCount = 0;
  let meCount = 0;
  let metaOkCount = 0;
  const discCount = {};
  const qIds = new Set();
  const fpSet = new Set();

  for (const q of batch2Q) {
    qIds.add(q.id);
    fpSet.add(q.fingerprint_hash);
    if (q.tipo === "certo_errado") ceCount++;
    if (q.tipo === "multipla_escolha") meCount++;

    if (
      q.is_autoral_ia === true &&
      q.revisada_por_especialista === false &&
      q.modelo_ia === "Claude Fable 5.1" &&
      q.prompt_versao === "v2.2-lote2"
    ) {
      metaOkCount++;
    }

    discCount[q.disciplina_id] = (discCount[q.disciplina_id] || 0) + 1;
  }

  console.log(`[✓] Metadados de Autoria IA e Pendência de Revisão válidos: ${metaOkCount}/${batch2Q.length}`);
  console.log(`[✓] Fingerprints únicos no Lote 2: ${fpSet.size}/${batch2Q.length}`);
  console.log(`[✓] Questões Certo/Errado: ${ceCount} | Múltipla Escolha: ${meCount}`);

  console.log("\n[+] Distribuição por Disciplina no Supabase (Lote 2):");
  const reverseDiscMap = Object.fromEntries(
    Object.entries(TAXONOMIA.disciplinas).map(([k, v]) => [v, k])
  );

  const disciplinaEsperada = {
    penal: 70,
    processo_penal: 70,
    legislacao_especial: 70,
    constitucional: 60,
    administrativo: 60,
    portugues: 60,
    direitos_humanos: 35,
    criminologia: 25,
    informatica: 30,
    rlm: 20,
  };

  for (const [slug, id] of Object.entries(TAXONOMIA.disciplinas)) {
    const count = discCount[id] || 0;
    const esperado = disciplinaEsperada[slug] || 0;
    console.log(`  - ${slug.padEnd(25)}: ${count}/${esperado} questões`);
    if (count !== esperado) {
      throw new Error(`Discrepância na disciplina ${slug}: obtido ${count}, esperado ${esperado}`);
    }
  }

  // 3. Validar alternativas vinculadas às questões do Lote 2
  console.log("\n[>] Validando integridade das alternativas do Lote 2 no Supabase...");
  const batch2Ids = Array.from(qIds);

  let totalAltsBatch2 = 0;
  let gabaritosValidos = 0;
  let alternativasComTexto = 0;

  for (let i = 0; i < batch2Ids.length; i += 100) {
    const idsChunk = batch2Ids.slice(i, i + 100);
    const { data: alts, error: errAlt } = await supabase
      .from("questoes_alternativas")
      .select("id, questao_id, letra, texto, correta, ordem")
      .in("questao_id", idsChunk);

    if (errAlt) throw errAlt;
    totalAltsBatch2 += alts.length;

    const byQ = {};
    for (const a of alts) {
      if (!a.texto || a.texto.trim().length === 0) {
        throw new Error(`[ERRO] Alternativa com texto vazio no Supabase: ${a.id}`);
      }
      alternativasComTexto++;
      if (!byQ[a.questao_id]) byQ[a.questao_id] = [];
      byQ[a.questao_id].push(a);
    }

    for (const [qid, altsQ] of Object.entries(byQ)) {
      const corretas = altsQ.filter(a => a.correta).length;
      if (corretas !== 1) {
        throw new Error(`[ERRO GABARITO] Questão ${qid} tem ${corretas} alternativas corretas no Supabase`);
      }
      gabaritosValidos++;
    }
  }

  console.log(`[✓] Total de Alternativas do Lote 2 verificadas: ${totalAltsBatch2} (Esperado: 1714)`);
  if (totalAltsBatch2 !== 1714) {
    throw new Error(`Total de alternativas do Lote 2 incorreto: ${totalAltsBatch2}, esperado 1714`);
  }

  console.log(`[✓] Todas as alternativas possuem texto preenchido: ${alternativasComTexto}/${totalAltsBatch2}`);
  console.log(`[✓] Questões com gabarito estritamente único validado: ${gabaritosValidos}/${batch2Q.length}`);
  console.log("=========================================================");
  console.log("   AUDITORIA DO LOTE 2 NO SUPABASE CONCLUÍDA COM 100% DE ÊXITO!");
  console.log("=========================================================");
}

verifyLote2Live().catch(err => {
  console.error("ERRO NA AUDITORIA DO LOTE 2 LIVE:", err);
  process.exit(1);
});
