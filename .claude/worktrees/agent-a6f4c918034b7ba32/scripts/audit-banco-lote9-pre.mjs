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

async function runInventory() {
  console.log("================================================================================");
  console.log("             FASE 0 & 1 — INVENTÁRIO REAL E COMPLETO DO SUPABASE PROD          ");
  console.log("================================================================================\n");

  const { count: countQ, error: errQ } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: countA, error: errA } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });

  if (errQ || errA) {
    throw new Error(`Erro na contagem inicial: ${errQ?.message || errA?.message}`);
  }

  console.log(`[+] Total de questões no Supabase: ${countQ}`);
  console.log(`[+] Total de alternativas no Supabase: ${countA}`);

  if (countQ !== 5260) {
    console.error(`\n[ERRO CRÍTICO] Total de questões no banco (${countQ}) diferente de 5.260!`);
    process.exit(1);
  }

  console.log("\n[+] Buscando metadados completos de todas as 5.260 questões...");
  const questoes = await fetchAll("questoes", "id, prompt_versao, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade, fingerprint_hash");
  const disciplinas = await fetchAll("disciplinas", "id, nome");
  const assuntos = await fetchAll("assuntos", "id, nome, disciplina_id");

  const discMap = new Map(disciplinas.map(d => [d.id, d.nome]));
  const assMap = new Map(assuntos.map(a => [a.id, a.nome]));

  // Agregações
  const porLote = {};
  const porDisciplina = {};
  const porAssunto = {};
  const porCarreira = {};
  const porBanca = {};
  const porDificuldade = {};
  const porTipo = {};
  const porAno = {};
  const discXAssunto = {};
  const discXCarreira = {};
  const discXBanca = {};
  const carreiraXBanca = {};
  const carreiraXDificuldade = {};

  for (const q of questoes) {
    const lote = q.prompt_versao || "legado";
    const discNome = discMap.get(q.disciplina_id) || q.disciplina_id || "Desconhecida";
    const assNome = assMap.get(q.assunto_id) || q.assunto_id || "Desconhecido";
    const carreira = q.orgao_nome || "Não informado";
    const banca = q.banca_nome || "Não informada";
    const dif = q.dificuldade || "Não informada";
    const tipo = q.tipo || "Não informado";
    const ano = q.ano || 2026;

    porLote[lote] = (porLote[lote] || 0) + 1;
    porDisciplina[discNome] = (porDisciplina[discNome] || 0) + 1;
    porAssunto[assNome] = (porAssunto[assNome] || 0) + 1;
    porCarreira[carreira] = (porCarreira[carreira] || 0) + 1;
    porBanca[banca] = (porBanca[banca] || 0) + 1;
    porDificuldade[dif] = (porDificuldade[dif] || 0) + 1;
    porTipo[tipo] = (porTipo[tipo] || 0) + 1;
    porAno[ano] = (porAno[ano] || 0) + 1;

    // Combinações
    const daKey = `${discNome} -> ${assNome}`;
    discXAssunto[daKey] = (discXAssunto[daKey] || 0) + 1;

    const dcKey = `${discNome} | ${carreira}`;
    discXCarreira[dcKey] = (discXCarreira[dcKey] || 0) + 1;

    const dbKey = `${discNome} | ${banca}`;
    discXBanca[dbKey] = (discXBanca[dbKey] || 0) + 1;

    const cbKey = `${carreira} | ${banca}`;
    carreiraXBanca[cbKey] = (carreiraXBanca[cbKey] || 0) + 1;

    const cdKey = `${carreira} | ${dif}`;
    carreiraXDificuldade[cdKey] = (carreiraXDificuldade[cdKey] || 0) + 1;
  }

  const inventoryReport = {
    timestamp: new Date().toISOString(),
    totalQuestoes: countQ,
    totalAlternativas: countA,
    porLote,
    porDisciplina,
    porAssunto,
    porCarreira,
    porBanca,
    porDificuldade,
    porTipo,
    porAno,
    discXAssunto,
    discXCarreira,
    discXBanca,
    carreiraXBanca,
    carreiraXDificuldade,
    taxonomia: {
      disciplinas: disciplinas.map(d => ({ id: d.id, nome: d.nome })),
      assuntos: assuntos.map(a => ({ id: a.id, nome: a.nome, disciplina_id: a.disciplina_id }))
    }
  };

  fs.writeFileSync(
    path.join(__dirname, "audit_pre_lote9_full.json"),
    JSON.stringify(inventoryReport, null, 2),
    "utf8"
  );

  console.log("\n--- 1. POR LOTE / PROMPT_VERSAO ---");
  console.table(porLote);

  console.log("\n--- 2. POR CARREIRA / ÓRGÃO ---");
  console.table(porCarreira);

  console.log("\n--- 3. POR BANCA ---");
  console.table(porBanca);

  console.log("\n--- 4. POR DIFICULDADE ---");
  console.table(porDificuldade);

  console.log("\n--- 5. POR MODALIDADE (TIPO) ---");
  console.table(porTipo);

  console.log("\n--- 6. POR DISCIPLINA ---");
  console.table(porDisciplina);

  console.log("\n[+] Inventário salvo com sucesso em scripts/audit_pre_lote9_full.json");
}

runInventory().catch(err => {
  console.error("Erro no inventário:", err);
  process.exit(1);
});
