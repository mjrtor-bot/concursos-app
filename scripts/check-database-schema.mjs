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

async function checkDatabaseSchema() {
  console.log("=== DESCOBERTA DE TABELAS E ESTRUTURA REAL NO SUPABASE ===");

  // Vamos testar uma lista de possíveis tabelas
  const candidateTables = [
    "disciplinas",
    "assuntos",
    "assunto_conteudos",
    "questoes",
    "opcoes_questao",
    "alternativas",
    "concursos",
    "cargos",
    "editais_processados",
    "editais_importados",
    "editais_usuario",
    "simulado_tentativas",
    "simulado_respostas",
    "simulados",
    "planos_estudo",
    "plano_estudos",
    "ciclos_estudo",
    "ciclos",
    "blocos_estudo",
    "blocos_ciclo",
    "progresso_diario",
    "progresso_estudo",
    "metas",
    "metas_usuario",
    "perfis_usuario",
    "usuarios",
    "profiles",
    "users",
    "caderno_erros",
    "respostas_usuarios",
    "revisoes",
    "revisoes_estudo",
    "gamificacao",
    "conquistas",
    "conquistas_usuario",
    "estatisticas_usuario",
    "notificacoes",
    "mural_avisos",
  ];

  const existingTables = [];
  for (const table of candidateTables) {
    const { data, error } = await supabase.from(table).select("*").limit(1);
    if (!error) {
      const cols = data && data.length > 0 ? Object.keys(data[0]) : [];
      existingTables.push({ table, sampleCols: cols });
    }
  }

  console.log(`\nTabelas existentes encontradas (${existingTables.length}):`);
  for (const t of existingTables) {
    console.log(`- ${t.table} (colunas amostra: ${t.sampleCols.length > 0 ? t.sampleCols.join(", ") : "sem registros para inferir colunas"})`);
  }

  // Verificar tabela questoes em detalhe
  console.log("\n--- ESTRUTURA DE QUESTOES ---");
  const { data: qSample, error: qErr } = await supabase.from("questoes").select("*").limit(3);
  if (qErr) {
    console.error("Erro em questoes:", qErr);
  } else {
    console.log("Total de questões:", (await supabase.from("questoes").select("id", { count: "exact" })).count);
    if (qSample && qSample.length > 0) {
      console.log("Colunas de questoes:", Object.keys(qSample[0]));
      console.log("Exemplo de questao:", JSON.stringify(qSample[0], null, 2));
    }
  }
}

checkDatabaseSchema().catch(console.error);
