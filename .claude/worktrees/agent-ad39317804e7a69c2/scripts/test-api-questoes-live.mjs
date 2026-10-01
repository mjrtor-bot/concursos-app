import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./batch1_modules/taxonomia.mjs";

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

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function testApiQuestoesLogic() {
  console.log("=========================================================");
  console.log("   TESTE DE INTEGRAÇÃO DA API DE QUESTÕES (SUPABASE)    ");
  console.log("=========================================================");

  // 1. Teste de listagem paginada (Page 1, pageSize 10)
  const { data: qPage1, count: totalGeral, error: errP1 } = await supabase
    .from("questoes")
    .select(`
      id, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome,
      ano, tipo, dificuldade, enunciado, explicacao, is_autoral_ia,
      revisada_por_especialista, anulada, desatualizada
    `, { count: "exact" })
    .eq("anulada", false)
    .order("created_at", { ascending: false })
    .range(0, 9);

  if (errP1) throw errP1;
  console.log(`[✓] Teste 1: Paginação padrão -> Total geral: ${totalGeral}, Retornados: ${qPage1.length}`);

  // 2. Teste de filtro por disciplina policial (Direito Penal)
  const penalId = TAXONOMIA.disciplinas.penal;
  const { data: qPenal, count: totalPenal, error: errPenal } = await supabase
    .from("questoes")
    .select("id, disciplina_id, enunciado", { count: "exact" })
    .eq("disciplina_id", penalId);

  if (errPenal) throw errPenal;
  console.log(`[✓] Teste 2: Filtro por Direito Penal -> Total no banco: ${totalPenal} (Retornados: ${qPenal.length})`);

  // 3. Teste de filtro por origem (autorais_ia = true)
  const { count: totalAutorais, error: errAutoral } = await supabase
    .from("questoes")
    .select("id", { count: "exact", head: true })
    .eq("is_autoral_ia", true);

  if (errAutoral) throw errAutoral;
  console.log(`[✓] Teste 3: Filtro por questões autorais IA -> Total: ${totalAutorais}`);

  // 4. Teste de recuperação de alternativas em lote
  const sampleIds = qPage1.map(q => q.id);
  const { data: sampleAlts, error: errSampleAlts } = await supabase
    .from("questoes_alternativas")
    .select("id, questao_id, letra, texto, correta, ordem")
    .in("questao_id", sampleIds)
    .order("ordem", { ascending: true });

  if (errSampleAlts) throw errSampleAlts;

  const altsMap = new Map();
  for (const alt of sampleAlts) {
    if (!altsMap.has(alt.questao_id)) altsMap.set(alt.questao_id, []);
    altsMap.get(alt.questao_id).push(alt);
  }

  for (const q of qPage1) {
    const alts = altsMap.get(q.id) || [];
    if (alts.length === 0) {
      throw new Error(`[ERRO API] Questão ${q.id} sem alternativas retornadas`);
    }
  }
  console.log(`[✓] Teste 4: Vinculação de alternativas para a página 1 -> 100% íntegro (${sampleAlts.length} alternativas para ${qPage1.length} questões)`);

  console.log("=========================================================");
  console.log("   TODOS OS TESTES DE QUERY DA API PASSARAM COM ÊXITO!   ");
  console.log("=========================================================");
}

testApiQuestoesLogic().catch(err => {
  console.error("FALHA NOS TESTES DA API:", err);
  process.exit(1);
});
