import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";

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

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("ERRO: Credenciais do Supabase não encontradas em .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log("===============================================================================");
  console.log("FASE 0 — INVENTÁRIO DE PRODUÇÃO E BACKUP PRE-CORREÇÃO");
  console.log(`Conectando ao Supabase: ${supabaseUrl}`);
  console.log("===============================================================================");

  // 1. Fetch Disciplinas e Assuntos
  const { data: disciplinas, error: discErr } = await supabase.from("disciplinas").select("*").order("ordem", { ascending: true });
  if (discErr) throw discErr;
  const discMap = new Map((disciplinas || []).map(d => [d.id, d]));

  const { data: assuntos, error: assErr } = await supabase.from("assuntos").select("*").order("ordem", { ascending: true });
  if (assErr) throw assErr;
  const assMap = new Map((assuntos || []).map(a => [a.id, a]));

  console.log(`Disciplinas cadastradas: ${disciplinas.length}`);
  console.log(`Assuntos cadastrados: ${assuntos.length}`);

  // 2. Fetch all questoes
  let allQuestoes = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from("questoes")
      .select("*")
      .range(page * pageSize, (page + 1) * pageSize - 1)
      .order("id", { ascending: true });
    if (error) throw error;
    if (!data || data.length === 0) break;
    allQuestoes.push(...data);
    page++;
    if (data.length < pageSize) break;
  }

  // 3. Fetch all alternativas
  let allAlternativas = [];
  page = 0;
  while (true) {
    const { data, error } = await supabase
      .from("questoes_alternativas")
      .select("*")
      .range(page * pageSize, (page + 1) * pageSize - 1)
      .order("id", { ascending: true });
    if (error) throw error;
    if (!data || data.length === 0) break;
    allAlternativas.push(...data);
    page++;
    if (data.length < pageSize) break;
  }

  console.log(`Total de Questões carregadas: ${allQuestoes.length}`);
  console.log(`Total de Alternativas carregadas: ${allAlternativas.length}`);

  // Map alternativas by questao_id
  const altsByQ = new Map();
  for (const alt of allAlternativas) {
    if (!altsByQ.has(alt.questao_id)) {
      altsByQ.set(alt.questao_id, []);
    }
    altsByQ.get(alt.questao_id).push(alt);
  }

  // Distribution by prompt_versao
  const versionCounts = new Map();
  for (const q of allQuestoes) {
    const v = q.prompt_versao || "SEM_VERSAO";
    if (!versionCounts.has(v)) {
      versionCounts.set(v, { questoes: 0, alternativas: 0, c2: 0, c3: 0, c4: 0, c5: 0, outros: 0 });
    }
    const entry = versionCounts.get(v);
    entry.questoes++;
    const alts = altsByQ.get(q.id) || [];
    entry.alternativas += alts.length;
    if (alts.length === 2) entry.c2++;
    else if (alts.length === 3) entry.c3++;
    else if (alts.length === 4) entry.c4++;
    else if (alts.length === 5) entry.c5++;
    else entry.outros++;
  }

  // Distribution by count of alternativas
  let count2 = 0, count3 = 0, count4 = 0, count5 = 0, countOutros = 0;
  for (const q of allQuestoes) {
    const len = (altsByQ.get(q.id) || []).length;
    if (len === 2) count2++;
    else if (len === 3) count3++;
    else if (len === 4) count4++;
    else if (len === 5) count5++;
    else countOutros++;
  }

  // Distribution by disciplina
  const discCounts = new Map();
  for (const q of allQuestoes) {
    const dNome = discMap.get(q.disciplina_id)?.nome || q.disciplina_id || "SEM_DISCIPLINA";
    discCounts.set(dNome, (discCounts.get(dNome) || 0) + 1);
  }

  // Distribution by assunto
  const assCounts = new Map();
  for (const q of allQuestoes) {
    const aNome = assMap.get(q.assunto_id)?.nome || q.assunto_id || "SEM_ASSUNTO";
    assCounts.set(aNome, (assCounts.get(aNome) || 0) + 1);
  }

  console.log("\n--- CONTAGEM POR PROMPT_VERSAO ---");
  const sortedVers = Array.from(versionCounts.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  for (const [v, data] of sortedVers) {
    console.log(`${v.padEnd(20)}: ${data.questoes} questões, ${data.alternativas} alts (2 alts: ${data.c2}, 4 alts: ${data.c4}, 5 alts: ${data.c5})`);
  }

  console.log("\n--- CONTAGEM POR NÚMERO DE ALTERNATIVAS ---");
  console.log(`2 Alternativas (C/E): ${count2}`);
  console.log(`3 Alternativas:       ${count3}`);
  console.log(`4 Alternativas (M.E): ${count4}`);
  console.log(`5 Alternativas (M.E): ${count5}`);
  console.log(`Outras quantidades:  ${countOutros}`);

  const mathTotalAlts = (count2 * 2) + (count3 * 3) + (count4 * 4) + (count5 * 5);
  console.log(`Cálculo da soma das alternativas: (${count2}*2) + (${count4}*4) + (${count5}*5) = ${mathTotalAlts}`);

  // Validation against expected numbers
  if (allQuestoes.length !== 7760 || allAlternativas.length !== 28366) {
    console.error(`DIVERGÊNCIA CRÍTICA: Esperado 7760 questões e 28366 alternativas, encontrado ${allQuestoes.length} questões e ${allAlternativas.length} alternativas!`);
    process.exit(1);
  } else {
    console.log("\n✅ VALIDAÇÃO DO ESTADO DE REFERÊNCIA: 7.760 QUESTÕES E 28.366 ALTERNATIVAS CONFIRMADAS COM EXATIDÃO!");
  }

  // Save complete logical snapshot
  const snapshot = {
    metadata: {
      timestamp: new Date().toISOString(),
      supabaseUrl,
      totalQuestoes: allQuestoes.length,
      totalAlternativas: allAlternativas.length,
      distributionByVersion: Object.fromEntries(versionCounts),
      distributionByAltCount: { count2, count3, count4, count5, countOutros },
      distributionByDisciplina: Object.fromEntries(discCounts),
      distributionByAssunto: Object.fromEntries(assCounts)
    },
    questoes: allQuestoes,
    alternativas: allAlternativas
  };

  const backupPath = path.resolve(process.cwd(), "scripts/backup_pre_correcao_integridade_questoes.json");
  fs.writeFileSync(backupPath, JSON.stringify(snapshot, null, 2));
  console.log(`\n✅ SNAPSHOT LÓGICO COMPLETO SALVO EM: ${backupPath} (${(fs.statSync(backupPath).size / (1024 * 1024)).toFixed(2)} MB)`);
}

run().catch(err => {
  console.error("Erro na Fase 0:", err);
  process.exit(1);
});
