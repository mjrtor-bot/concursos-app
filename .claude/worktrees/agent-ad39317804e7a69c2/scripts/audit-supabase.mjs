import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xvpqcibdarcelvcwnglq.supabase.co";
const SUPABASE_KEY = "sb_publishable_H4tJcmZrldnoKZridIy8Ow_xmg-KAra";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function runAudit() {
  console.log("=========================================");
  console.log("AUDITORIA REAL DO BANCO DE DADOS SUPABASE");
  console.log("URL:", SUPABASE_URL);
  console.log("=========================================\n");

  const tables = [
    "questoes",
    "questoes_alternativas",
    "disciplinas",
    "assuntos",
    "subassuntos",
    "bancas",
    "orgaos",
    "cargos_base",
    "provas",
    "respostas_usuarios",
    "caderno_erros",
    "questoes_favoritas",
    "questoes_anotacoes",
  ];

  for (const table of tables) {
    try {
      const { count, error } = await supabase
        .from(table)
        .select("*", { count: "exact", head: true });

      if (error) {
        console.log(`[-] ${table.padEnd(25)} : ERRO (${error.code}) - ${error.message}`);
      } else {
        console.log(`[+] ${table.padEnd(25)} : ${count} registros`);
      }
    } catch (err) {
      console.log(`[!] ${table.padEnd(25)} : EXCEÇÃO - ${err.message}`);
    }
  }

  console.log("\n=========================================");
}

runAudit();
