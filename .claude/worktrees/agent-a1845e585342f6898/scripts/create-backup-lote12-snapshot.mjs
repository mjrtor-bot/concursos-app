import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
  console.error("ERRO: Credenciais do Supabase não encontradas em .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function fetchAllParallel(table, selectQuery, totalExpected) {
  const pageSize = 1000;
  const totalPages = Math.ceil(totalExpected / pageSize);
  console.log(`[+] Buscando ${table} (${totalPages} páginas de ${pageSize})...`);

  const pagePromises = Array.from({ length: totalPages }, async (_, page) => {
    const from = page * pageSize;
    const to = from + pageSize - 1;
    const { data, error } = await supabase
      .from(table)
      .select(selectQuery)
      .range(from, to);
    if (error) throw error;
    return data || [];
  });

  const pages = await Promise.all(pagePromises);
  return pages.flat();
}

async function createPreLote12Snapshot() {
  console.log("==========================================================================");
  console.log("   CRIAÇÃO DO BACKUP LÓGICO / SNAPSHOT PRÉ-LOTE 12                       ");
  console.log("==========================================================================\n");

  const { count: countQuestoes } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  const { count: countAlts } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });

  console.log(`[+] Baseline detectado: ${countQuestoes} questões, ${countAlts} alternativas.`);
  if (countQuestoes !== 6760 || countAlts !== 25358) {
    throw new Error(`Baseline inválido: esperado 6760 questões e 25358 alternativas.`);
  }

  console.log("[1/3] Extraindo 6.760 questões de produção...");
  const questoes = await fetchAllParallel(
    "questoes",
    "id, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade, enunciado, explicacao, prompt_versao, is_autoral_ia, modelo_ia, versao, fingerprint_hash",
    countQuestoes
  );
  console.log(`[+] Total de questões extraídas: ${questoes.length}`);

  console.log("[2/3] Extraindo 25.358 alternativas de produção...");
  const alternativas = await fetchAllParallel(
    "questoes_alternativas",
    "id, questao_id, texto, correta, explicacao_especifica, letra, ordem",
    countAlts
  );
  console.log(`[+] Total de alternativas extraídas: ${alternativas.length}`);

  if (questoes.length !== 6760) {
    throw new Error(`Quantidade inesperada de questões para backup: ${questoes.length} (esperado 6.760)`);
  }
  if (alternativas.length !== 25358) {
    throw new Error(`Quantidade inesperada de alternativas para backup: ${alternativas.length} (esperado 25.358)`);
  }

  const snapshot = {
    timestamp: new Date().toISOString(),
    totalQuestoes: questoes.length,
    totalAlternativas: alternativas.length,
    questoes,
    alternativas,
  };

  const backupFile = path.join(__dirname, "backup_pre_lote12_snapshot.json");
  fs.writeFileSync(backupFile, JSON.stringify(snapshot, null, 2), "utf8");
  console.log(`[3/3] Backup salvo com sucesso em ${backupFile} (${(fs.statSync(backupFile).size / 1024 / 1024).toFixed(2)} MB)`);
  console.log("\n✅ BACKUP LÓGICO PRÉ-LOTE 12 CONCLUÍDO E VALIDADO COM SUCESSO!");
}

createPreLote12Snapshot().catch((err) => {
  console.error("Erro fatal no backup pré-lote 12:", err);
  process.exit(1);
});
