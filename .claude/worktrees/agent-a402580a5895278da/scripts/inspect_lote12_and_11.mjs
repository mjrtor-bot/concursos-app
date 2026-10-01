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

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function inspectLote12and11() {
  const { data: q12 } = await supabase.from("questoes").select("id, enunciado, explicacao, prompt_versao").eq("prompt_versao", "v3.2-lote12").limit(10);
  console.log("=== AMOSTRA DE ENUNCIADOS DO LOTE 12 ===");
  for (const q of q12 || []) {
    console.log(`ID: ${q.id}`);
    console.log(`Enunciado: ${q.enunciado.substring(0, 200)}...`);
    console.log("---");
  }

  const { data: q11 } = await supabase.from("questoes").select("id, enunciado, explicacao, tipo").eq("prompt_versao", "v3.1-lote11").limit(10);
  console.log("\n=== AMOSTRA DE LOTE 11 (INCOMPATIBILIDADE) ===");
  for (const q of q11 || []) {
    console.log(`ID: ${q.id}`);
    console.log(`Enunciado: ${q.enunciado.substring(0, 150)}...`);
    console.log(`Explicação: ${q.explicacao.substring(0, 150)}...`);
    console.log("---");
  }
}

inspectLote12and11();
