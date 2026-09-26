import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("ERRO: Credenciais do Supabase não encontradas.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function fetchAll(table, select = "*", batchSize = 1000) {
  let all = [];
  let from = 0;
  while (true) {
    const to = from + batchSize - 1;
    const { data, error } = await supabase.from(table).select(select).range(from, to);
    if (error) throw new Error(`Erro ao buscar dados de ${table}: ${error.message}`);
    if (!data || data.length === 0) break;
    all.push(...data);
    if (data.length < batchSize) break;
    from += batchSize;
  }
  return all;
}

async function auditPreLote7() {
  console.log("================================================================================");
  console.log("                 AUDITORIA INICIAL DO BANCO ANTES DO LOTE 7                     ");
  console.log("================================================================================\n");

  const { count: totalQ } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  const { count: totalA } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });

  console.log(`[+] Total de questões no banco Supabase: ${totalQ}`);
  console.log(`[+] Total de alternativas no banco: ${totalA}`);

  if (totalQ !== 4260) {
    console.warn(`⚠️ ALERTA: Total de questões é ${totalQ} (esperado 4.260)`);
  } else {
    console.log(`✅ Total de questões = 4.260 (Conforme baseline)`);
  }

  // Buscar todas as disciplinas e assuntos
  const { data: disciplinas } = await supabase.from("disciplinas").select("id, nome, slug");
  const { data: assuntos } = await supabase.from("assuntos").select("id, disciplina_id, nome, slug");

  const discMap = new Map();
  disciplinas.forEach(d => discMap.set(d.id, d));
  const assuntoMap = new Map();
  assuntos.forEach(a => assuntoMap.set(a.id, a));

  console.log(`\n[+] Disciplinas cadastradas no banco (${disciplinas.length}):`);
  disciplinas.forEach(d => console.log(`  - [${d.slug}] ${d.nome} (UUID: ${d.id})`));

  // Buscar todas as 4.260 questões
  const allQuestoes = await fetchAll("questoes", "id, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome, dificuldade, tipo, prompt_versao");

  const countByDisc = {};
  const countByAssunto = {};
  const countByBanca = {};
  const countByOrgao = {};
  const countByDificuldade = {};
  const countByTipo = {};
  const countByPrompt = {};

  for (const q of allQuestoes) {
    // Disciplina
    const dNome = discMap.get(q.disciplina_id)?.nome || q.disciplina_id || "Desconhecida";
    countByDisc[dNome] = (countByDisc[dNome] || 0) + 1;

    // Assunto
    const aNome = assuntoMap.get(q.assunto_id)?.nome || q.assunto_id || "Desconhecido";
    countByAssunto[`${dNome} -> ${aNome}`] = (countByAssunto[`${dNome} -> ${aNome}`] || 0) + 1;

    // Banca
    const b = q.banca_nome || "Outra";
    countByBanca[b] = (countByBanca[b] || 0) + 1;

    // Orgao / Carreira
    const o = q.orgao_nome || "Outro";
    countByOrgao[o] = (countByOrgao[o] || 0) + 1;

    // Dificuldade
    const dif = q.dificuldade || "medio";
    countByDificuldade[dif] = (countByDificuldade[dif] || 0) + 1;

    // Tipo
    const t = q.tipo || "multipla_escolha";
    countByTipo[t] = (countByTipo[t] || 0) + 1;

    // Prompt versao
    const pv = q.prompt_versao || "legado";
    countByPrompt[pv] = (countByPrompt[pv] || 0) + 1;
  }

  console.log("\n--- DISTRIBUIÇÃO ATUAL POR DISCIPLINA (TOTAL 4.260) ---");
  Object.entries(countByDisc)
    .sort((a, b) => b[1] - a[1])
    .forEach(([d, c]) => {
      console.log(`  - ${d}: ${c} questões (${((c / totalQ) * 100).toFixed(1)}%)`);
    });

  console.log("\n--- DISTRIBUIÇÃO ATUAL POR CARREIRA / ÓRGÃO (TOTAL 4.260) ---");
  Object.entries(countByOrgao)
    .sort((a, b) => b[1] - a[1])
    .forEach(([o, c]) => {
      console.log(`  - ${o}: ${c} questões (${((c / totalQ) * 100).toFixed(1)}%)`);
    });

  console.log("\n--- DISTRIBUIÇÃO ATUAL POR BANCA (TOTAL 4.260) ---");
  Object.entries(countByBanca)
    .sort((a, b) => b[1] - a[1])
    .forEach(([b, c]) => {
      console.log(`  - ${b}: ${c} questões (${((c / totalQ) * 100).toFixed(1)}%)`);
    });

  console.log("\n--- DISTRIBUIÇÃO ATUAL POR DIFICULDADE (TOTAL 4.260) ---");
  Object.entries(countByDificuldade)
    .sort((a, b) => b[1] - a[1])
    .forEach(([dif, c]) => {
      console.log(`  - ${dif}: ${c} questões (${((c / totalQ) * 100).toFixed(1)}%)`);
    });

  console.log("\n--- DISTRIBUIÇÃO ATUAL POR MODALIDADE (TOTAL 4.260) ---");
  Object.entries(countByTipo)
    .sort((a, b) => b[1] - a[1])
    .forEach(([t, c]) => {
      console.log(`  - ${t}: ${c} questões (${((c / totalQ) * 100).toFixed(1)}%)`);
    });

  console.log("\n--- DISTRIBUIÇÃO POR LOTE / PROMPT_VERSAO ---");
  Object.entries(countByPrompt)
    .sort((a, b) => b[1] - a[1])
    .forEach(([pv, c]) => {
      console.log(`  - ${pv}: ${c} questões (${((c / totalQ) * 100).toFixed(1)}%)`);
    });

  // Salvar relatório consolidado em JSON para auditoria contínua
  const report = {
    totalQuestoes: totalQ,
    totalAlternativas: totalA,
    disciplinas: countByDisc,
    carreiras: countByOrgao,
    bancas: countByBanca,
    dificuldades: countByDificuldade,
    tipos: countByTipo,
    lotes: countByPrompt,
    assuntos: countByAssunto,
    disciplinasCadastradas: disciplinas,
    assuntosCadastrados: assuntos
  };

  fs.writeFileSync(path.join(__dirname, "audit_pre_lote7.json"), JSON.stringify(report, null, 2), "utf8");
  console.log("\n[✓] Relatório salvo em scripts/audit_pre_lote7.json");
}

auditPreLote7().catch(err => {
  console.error("Erro na auditoria:", err);
  process.exit(1);
});
