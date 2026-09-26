import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { TODAS_QUESTOES_LOTE9 } from "./batch9_modules/index.mjs";

const envContent = fs.readFileSync(".env.local", "utf8");
const env = {};
for (const line of envContent.split(/\r?\n/)) {
  const t = line.trim();
  if (t && !t.startsWith("#")) {
    const idx = t.indexOf("=");
    if (idx !== -1) env[t.substring(0, idx).trim()] = t.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
  }
}
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

async function inspect() {
  const q9 = TODAS_QUESTOES_LOTE9.find(q => q.idSlug === "b9-procp-01-003");
  console.log("=== LOTE 9: b9-procp-01-003 ===");
  console.log("ID Slug:", q9.idSlug);
  console.log("Tipo:", q9.tipo);
  console.log("Dificuldade:", q9.dificuldade);
  console.log("Enunciado:\n", q9.enunciado);
  console.log("Alternativas:", JSON.stringify(q9.alternativas, null, 2));
  console.log("Explicacao:\n", q9.explicacao);

  const { data: dbQ } = await supabase.from("questoes").select("*").eq("id", "e993d296-92f5-50f3-9722-d2181aa3e8d0").single();
  const { data: dbA } = await supabase.from("questoes_alternativas").select("*").eq("questao_id", "e993d296-92f5-50f3-9722-d2181aa3e8d0");

  console.log("\n=== BANCO DB: e993d296-92f5-50f3-9722-d2181aa3e8d0 (Lote 7) ===");
  console.log("Tipo:", dbQ.tipo);
  console.log("Dificuldade:", dbQ.dificuldade);
  console.log("Enunciado:\n", dbQ.enunciado);
  console.log("Alternativas:", JSON.stringify(dbA, null, 2));
  console.log("Explicacao:\n", dbQ.explicacao);
}

inspect().catch(console.error);
