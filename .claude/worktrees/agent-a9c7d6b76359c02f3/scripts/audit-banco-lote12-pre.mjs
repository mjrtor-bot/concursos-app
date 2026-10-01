import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf8");
const env = {};
for (const line of envContent.split(/\r?\n/)) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith("#")) {
    const idx = trimmed.indexOf("=");
    if (idx !== -1) {
      env[trimmed.substring(0, idx).trim()] = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
    }
  }
}

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

async function runPreAudit() {
  console.log("================================================================================");
  console.log("   FASE 1: AUDITORIA REAL EXAUSTIVA DAS 6.760 QUESTÕES ATIVAS EM PRODUÇÃO       ");
  console.log("================================================================================\n");

  const { count: totalQ, error: errQ } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  const { count: totalA, error: errA } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });
  const { count: l12Count } = await supabase.from("questoes").select("*", { count: "exact", head: true }).eq("prompt_versao", "v3.2-lote12");

  console.log(`[+] Estado Atual em Produção:`);
  console.log(`    - Total Questões: ${totalQ} (Esperado: 6.760)`);
  console.log(`    - Total Alternativas: ${totalA} (Esperado: 25.358)`);
  console.log(`    - Questões Lote 12 pré-existentes: ${l12Count} (Esperado: 0)`);

  if (totalQ !== 6760 || totalA !== 25358 || l12Count !== 0) {
    throw new Error(`[ESTADO INVÁLIDO] Q=${totalQ} (esp 6760), A=${totalA} (esp 25358), L12=${l12Count} (esp 0)`);
  }

  // Fetch all 6,760 questions
  console.log("\n[>] Baixando metadados das 6.760 questões para mapeamento multidimensional...");
  const allQuestoes = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from("questoes")
      .select("id, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade, prompt_versao, fingerprint_hash")
      .range(page * pageSize, (page + 1) * pageSize - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    allQuestoes.push(...data);
    if (data.length < pageSize) break;
    page++;
  }

  // Fetch taxonomia (disciplinas e assuntos)
  const { data: disciplinas, error: dErr } = await supabase.from("disciplinas").select("id, nome, slug");
  if (dErr) throw dErr;
  const { data: assuntos, error: asErr } = await supabase.from("assuntos").select("id, nome, slug, disciplina_id");
  if (asErr) throw asErr;

  const discMap = new Map(disciplinas.map((d) => [d.id, d.nome]));
  const assMap = new Map(assuntos.map((a) => [a.id, { nome: a.nome, disciplina_id: a.disciplina_id }]));

  // Agregações
  const porDisciplina = {};
  const porAssunto = {};
  const porBanca = {};
  const porOrgao = {};
  const porCargo = {};
  const porDificuldade = {};
  const porTipo = {};
  const porPromptVersao = {};

  for (const q of allQuestoes) {
    const discNome = discMap.get(q.disciplina_id) || "Desconhecida (" + q.disciplina_id + ")";
    porDisciplina[discNome] = (porDisciplina[discNome] || 0) + 1;

    const assInfo = assMap.get(q.assunto_id);
    const assNome = assInfo ? `${discNome} -> ${assInfo.nome}` : `Assunto ${q.assunto_id}`;
    porAssunto[assNome] = (porAssunto[assNome] || 0) + 1;

    const b = q.banca_nome || "Outra/Indefinida";
    porBanca[b] = (porBanca[b] || 0) + 1;

    const org = q.orgao_nome || "Outro/Indefinido";
    porOrgao[org] = (porOrgao[org] || 0) + 1;

    const car = q.cargo_nome || "Outro/Indefinido";
    porCargo[car] = (porCargo[car] || 0) + 1;

    const dif = q.dificuldade || "Indefinida";
    porDificuldade[dif] = (porDificuldade[dif] || 0) + 1;

    const t = q.tipo || "Indefinido";
    porTipo[t] = (porTipo[t] || 0) + 1;

    const pv = q.prompt_versao || "Sem prompt_versao";
    porPromptVersao[pv] = (porPromptVersao[pv] || 0) + 1;
  }

  console.log("\n================ DISTRIBUIÇÃO POR DISCIPLINA (6.760) ================");
  console.table(Object.entries(porDisciplina).sort((a, b) => b[1] - a[1]).map(([d, count]) => ({
    Disciplina: d,
    Quantidade: count,
    Porcentagem: `${((count / totalQ) * 100).toFixed(2)}%`,
  })));

  console.log("\n================ DISTRIBUIÇÃO POR FORMATO ================");
  console.table(porTipo);

  console.log("\n================ DISTRIBUIÇÃO POR DIFICULDADE ================");
  console.table(porDificuldade);

  console.log("\n================ DISTRIBUIÇÃO POR BANCA (TOP 10) ================");
  console.table(Object.entries(porBanca).sort((a, b) => b[1] - a[1]).slice(0, 10));

  console.log("\n================ DISTRIBUIÇÃO POR ÓRGÃO/CARREIRA (TOP 15) ================");
  console.table(Object.entries(porOrgao).sort((a, b) => b[1] - a[1]).slice(0, 15));

  // Salvar diagnóstico
  const statsOut = {
    totalQuestoes: totalQ,
    totalAlternativas: totalA,
    porDisciplina,
    porAssunto,
    porBanca,
    porOrgao,
    porCargo,
    porDificuldade,
    porTipo,
    porPromptVersao,
  };

  fs.writeFileSync(
    path.resolve(process.cwd(), "scripts/lote12_pre_stats.json"),
    JSON.stringify(statsOut, null, 2),
    "utf8"
  );
  console.log("\n[+] Estatísticas salvas em scripts/lote12_pre_stats.json");
}

runPreAudit().catch(console.error);
