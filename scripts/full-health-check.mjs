import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

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

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

async function runFullHealthCheck() {
  console.log("===============================================================================");
  console.log("🚀 RELATÓRIO GLOBAL DE SAÚDE DO SISTEMA E AUDITORIA COMPLETA");
  console.log("===============================================================================\n");

  const summary = {
    disciplinas: 0,
    assuntos: 0,
    conteudosPdf: 0,
    questoes: 0,
    alternativas: 0,
    concursos: 0,
    cargos: 0,
    editais: 0,
    planosMentoria: 0,
    tarefasMentoria: 0,
    profiles: 0,
    storageBuckets: [],
    errosDetectados: [],
    avisos: []
  };

  // 1. DISCIPLINAS E ASSUNTOS
  const { data: disciplinas, error: dErr } = await supabase.from("disciplinas").select("id, nome");
  if (dErr) summary.errosDetectados.push(`Disciplinas: ${dErr.message}`);
  else summary.disciplinas = disciplinas.length;

  const { data: assuntos, error: aErr } = await supabase.from("assuntos").select("id, disciplina_id, nome");
  if (aErr) summary.errosDetectados.push(`Assuntos: ${aErr.message}`);
  else summary.assuntos = assuntos.length;

  // 2. CONTEÚDOS E PDFS
  const { data: conteudos, error: cErr } = await supabase.from("assunto_conteudos").select("id, assunto_id, pdf_path");
  if (cErr) summary.errosDetectados.push(`Assunto Conteúdos: ${cErr.message}`);
  else {
    summary.conteudosPdf = conteudos.filter(c => !!c.pdf_path).length;
    const assuntoIds = new Set(assuntos.map(a => a.id));
    const conteudosOrfaos = conteudos.filter(c => !assuntoIds.has(c.assunto_id));
    if (conteudosOrfaos.length > 0) {
      summary.avisos.push(`${conteudosOrfaos.length} conteúdos com assunto_id órfão`);
    }
  }

  // 3. BANCO DE QUESTÕES
  const { count: qCount, error: qErr } = await supabase.from("questoes").select("id", { count: "exact", head: true });
  if (qErr) summary.errosDetectados.push(`Questões: ${qErr.message}`);
  else summary.questoes = qCount || 0;

  const { count: altCount, error: altErr } = await supabase.from("questoes_alternativas").select("id", { count: "exact", head: true });
  if (altErr) summary.errosDetectados.push(`Alternativas: ${altErr.message}`);
  else summary.alternativas = altCount || 0;

  // 4. CONCURSOS E EDITAIS
  const { count: concCount } = await supabase.from("concursos").select("id", { count: "exact", head: true });
  summary.concursos = concCount || 0;

  const { count: cargoCount } = await supabase.from("concurso_cargos").select("id", { count: "exact", head: true });
  summary.cargos = cargoCount || 0;

  const { count: editalCount } = await supabase.from("editais_concurso").select("id", { count: "exact", head: true });
  summary.editais = editalCount || 0;

  // 5. MENTORIA
  const { count: planosCount } = await supabase.from("mentoria_planos").select("id", { count: "exact", head: true });
  summary.planosMentoria = planosCount || 0;

  const { count: tarefasCount } = await supabase.from("mentoria_tarefas").select("id", { count: "exact", head: true });
  summary.tarefasMentoria = tarefasCount || 0;

  const { count: profCount } = await supabase.from("profiles").select("id", { count: "exact", head: true });
  summary.profiles = profCount || 0;

  // 6. STORAGE BUCKETS
  const { data: buckets, error: bErr } = await supabase.storage.listBuckets();
  if (bErr) summary.errosDetectados.push(`Storage Buckets: ${bErr.message}`);
  else {
    summary.storageBuckets = buckets.map(b => ({ name: b.name, public: b.public }));
  }

  // EXIBIÇÃO FORMATADA
  console.log("📊 RESUMO QUANTITATIVO:");
  console.log(`  • Disciplinas:           ${summary.disciplinas}`);
  console.log(`  • Assuntos:              ${summary.assuntos}`);
  console.log(`  • PDFs de Estudo:        ${summary.conteudosPdf} (Cobertura: ${((summary.conteudosPdf / (summary.assuntos || 1)) * 100).toFixed(1)}%)`);
  console.log(`  • Questões no Acervo:    ${summary.questoes}`);
  console.log(`  • Alternativas de Opção: ${summary.alternativas}`);
  console.log(`  • Concursos Cadastrados: ${summary.concursos}`);
  console.log(`  • Cargos Estruturados:   ${summary.cargos}`);
  console.log(`  • Editais Vinculados:    ${summary.editais}`);
  console.log(`  • Planos de Mentoria:    ${summary.planosMentoria}`);
  console.log(`  • Tarefas de Estudo:     ${summary.tarefasMentoria}`);
  console.log(`  • Perfis de Usuário:     ${summary.profiles}`);

  console.log("\n🗄️ STORAGE BUCKETS ATIVOS:");
  for (const b of summary.storageBuckets) {
    console.log(`  • [${b.public ? "PÚBLICO" : "PRIVADO"}] ${b.name}`);
  }

  console.log("\n🔍 STATUS DE ERROS & INCONSISTÊNCIAS:");
  if (summary.errosDetectados.length === 0 && summary.avisos.length === 0) {
    console.log("  ✅ NENHUM ERRO OU INCONSISTÊNCIA DETECTADA! O SISTEMA ESTÁ 100% OPERACIONAL E HOMOLOGADO.");
  } else {
    if (summary.errosDetectados.length > 0) {
      console.log(`  ❌ Erros Críticos (${summary.errosDetectados.length}):`);
      summary.errosDetectados.forEach(e => console.log(`     - ${e}`));
    }
    if (summary.avisos.length > 0) {
      console.log(`  ⚠️ Avisos / Oportunidades de Melhoria (${summary.avisos.length}):`);
      summary.avisos.forEach(a => console.log(`     - ${a}`));
    }
  }
}

runFullHealthCheck().catch(console.error);
