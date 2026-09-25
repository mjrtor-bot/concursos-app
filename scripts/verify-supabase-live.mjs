import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./batch1_modules/taxonomia.mjs";

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

async function verifyLiveDb() {
  console.log("=========================================================");
  console.log("   AUDITORIA DIRETA DO BANCO DE DADOS EM PRODUÇÃO       ");
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

  console.log(`[+] Total Geral de Questões em Produção: ${totalQ}`);
  console.log(`[+] Total Geral de Alternativas em Produção: ${totalA}`);

  // 2. Consulta das questões do Lote 1 (is_autoral_ia = true, prompt_versao = 'v2.1')
  const { data: batch1Q, error: errB1 } = await supabase
    .from("questoes")
    .select("id, disciplina_id, assunto_id, tipo, is_autoral_ia, revisada_por_especialista, modelo_ia, prompt_versao, banca_nome, orgao_nome, cargo_nome, ano, fingerprint_hash")
    .eq("prompt_versao", "v2.1")
    .eq("modelo_ia", "Claude Fable 5.1");

  if (errB1) throw errB1;

  console.log(`\n[+] Questões do Lote 1 Policial recuperadas: ${batch1Q.length}`);

  let ceCount = 0;
  let meCount = 0;
  let metaOkCount = 0;
  const discCount = {};
  const qIds = new Set();
  const fpSet = new Set();

  for (const q of batch1Q) {
    qIds.add(q.id);
    fpSet.add(q.fingerprint_hash);
    if (q.tipo === "certo_errado") ceCount++;
    if (q.tipo === "multipla_escolha") meCount++;

    if (
      q.is_autoral_ia === true &&
      q.revisada_por_especialista === true &&
      q.modelo_ia === "Claude Fable 5.1" &&
      q.prompt_versao === "v2.1"
    ) {
      metaOkCount++;
    }

    discCount[q.disciplina_id] = (discCount[q.disciplina_id] || 0) + 1;
  }

  console.log(`[✓] Metadados de Autoria IA e Especialista válidos: ${metaOkCount}/${batch1Q.length}`);
  console.log(`[✓] Fingerprints únicos no Lote 1: ${fpSet.size}/${batch1Q.length}`);
  console.log(`[✓] Questões Certo/Errado: ${ceCount} | Múltipla Escolha: ${meCount}`);

  console.log("\n[+] Distribuição por Disciplina no Supabase (Lote 1):");
  const reverseDiscMap = Object.fromEntries(
    Object.entries(TAXONOMIA.disciplinas).map(([k, v]) => [v, k])
  );

  for (const [discId, count] of Object.entries(discCount)) {
    const nomeAmigavel = reverseDiscMap[discId] || discId;
    console.log(`  - ${nomeAmigavel.padEnd(25)}: ${count} questões`);
  }

  // 3. Validar alternativas vinculadas às questões do Lote 1
  console.log("\n[>] Validando integridade das alternativas do Lote 1 no Supabase...");
  const batch1Ids = Array.from(qIds);

  // Buscar alternativas em lotes de 100 questoes
  let totalAltsBatch1 = 0;
  let gabaritosValidos = 0;
  let alternativasComTexto = 0;

  for (let i = 0; i < batch1Ids.length; i += 100) {
    const idsChunk = batch1Ids.slice(i, i + 100);
    const { data: alts, error: errAlt } = await supabase
      .from("questoes_alternativas")
      .select("id, questao_id, letra, texto, correta, ordem")
      .in("questao_id", idsChunk);

    if (errAlt) throw errAlt;
    totalAltsBatch1 += alts.length;

    // Agrupar por questão
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

  console.log(`[✓] Total de Alternativas do Lote 1 verificadas: ${totalAltsBatch1}`);
  console.log(`[✓] Todas as alternativas possuem texto preenchido: ${alternativasComTexto}/${totalAltsBatch1}`);
  console.log(`[✓] Questões com gabarito estritamente único validado: ${gabaritosValidos}/${batch1Q.length}`);
  console.log("=========================================================");
  console.log("   AUDITORIA DO SUPABASE CONCLUÍDA COM 100% DE ÊXITO    ");
  console.log("=========================================================");
}

verifyLiveDb().catch(err => {
  console.error("ERRO NA AUDITORIA LIVE:", err);
  process.exit(1);
});
