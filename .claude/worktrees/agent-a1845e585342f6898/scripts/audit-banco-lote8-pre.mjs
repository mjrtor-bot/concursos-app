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

async function auditPreLote8() {
  console.log("================================================================================");
  console.log("       FASE 1: AUDITORIA REAL DO BANCO DE DADOS SUPABASE PRÉ-LOTE 8             ");
  console.log("================================================================================\n");

  console.log("[1/4] Buscando todas as questões...");
  const questoes = await fetchAll("questoes", "id, disciplina_id, assunto_id, subassunto_id, banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade, prompt_versao");
  console.log(`[+] Total de questões obtidas: ${questoes.length}`);

  console.log("[2/4] Buscando todas as alternativas...");
  const alternativas = await fetchAll("questoes_alternativas", "id, questao_id, correta, letra, ordem");
  console.log(`[+] Total de alternativas obtidas: ${alternativas.length}`);

  console.log("[3/4] Buscando disciplinas e assuntos para resolução de nomes...");
  const disciplinas = await fetchAll("disciplinas", "id, nome, slug");
  const assuntos = await fetchAll("assuntos", "id, nome, slug, disciplina_id");

  const discMap = new Map(disciplinas.map((d) => [d.id, d.nome]));
  const assMap = new Map(assuntos.map((a) => [a.id, { nome: a.nome, discId: a.disciplina_id }]));

  // 1. Total de questões
  const totalQuestoes = questoes.length;
  // 2. Total de alternativas
  const totalAlternativas = alternativas.length;

  // 3. Total por prompt_versao / lote
  const porLote = {};
  // 4. Total por disciplina
  const porDisciplina = {};
  // 5. Total por assunto
  const porAssunto = {};
  // 6. Total por subassunto
  const porSubassunto = {};
  // 7. Total por carreira/órgão
  const porOrgao = {};
  // 8. Total por estilo de banca
  const porBanca = {};
  // 9. Total por dificuldade
  const porDificuldade = {};
  // 10. Total por modalidade (tipo)
  const porTipo = {};

  for (const q of questoes) {
    const lote = q.prompt_versao || "legado";
    porLote[lote] = (porLote[lote] || 0) + 1;

    const discNome = discMap.get(q.disciplina_id) || `ID:${q.disciplina_id}`;
    porDisciplina[discNome] = (porDisciplina[discNome] || 0) + 1;

    const assInfo = assMap.get(q.assunto_id);
    const assNome = assInfo ? `${discNome} -> ${assInfo.nome}` : `AssuntoID:${q.assunto_id}`;
    porAssunto[assNome] = (porAssunto[assNome] || 0) + 1;

    const sub = q.subassunto_id ? String(q.subassunto_id) : "Nenhum/Null";
    porSubassunto[sub] = (porSubassunto[sub] || 0) + 1;

    const orgao = q.orgao_nome || "Não informado";
    porOrgao[orgao] = (porOrgao[orgao] || 0) + 1;

    const banca = q.banca_nome || "Não informada";
    porBanca[banca] = (porBanca[banca] || 0) + 1;

    const dif = q.dificuldade || "Não informada";
    porDificuldade[dif] = (porDificuldade[dif] || 0) + 1;

    const tipo = q.tipo || "Não informado";
    porTipo[tipo] = (porTipo[tipo] || 0) + 1;
  }

  console.log("\n--- [1] TOTAL DE QUESTÕES E ALTERNATIVAS ---");
  console.log(`Total de Questões: ${totalQuestoes} (Esperado: 4.760)`);
  console.log(`Total de Alternativas: ${totalAlternativas} (Esperado: 18.412)`);

  console.log("\n--- [3] TOTAL POR PROMPT_VERSAO / LOTE ---");
  console.table(porLote);

  console.log("\n--- [4] TOTAL POR DISCIPLINA ---");
  console.table(porDisciplina);

  console.log("\n--- [7] TOTAL POR CARREIRA / ÓRGÃO ---");
  console.table(porOrgao);

  console.log("\n--- [8] TOTAL POR ESTILO DE BANCA ---");
  console.table(porBanca);

  console.log("\n--- [9] TOTAL POR DIFICULDADE ---");
  console.table(porDificuldade);

  console.log("\n--- [10] TOTAL POR MODALIDADE (TIPO) ---");
  console.table(porTipo);

  const relatorio = {
    totalQuestoes,
    totalAlternativas,
    porLote,
    porDisciplina,
    porAssunto,
    porSubassunto,
    porOrgao,
    porBanca,
    porDificuldade,
    porTipo,
    disciplinasRaw: disciplinas,
    assuntosRaw: assuntos,
  };

  fs.writeFileSync(
    path.join(__dirname, "audit_pre_lote8_full.json"),
    JSON.stringify(relatorio, null, 2),
    "utf8"
  );
  console.log("\n[+] Auditoria completa salva em scripts/audit_pre_lote8_full.json");

  if (totalQuestoes !== 4760) {
    console.error(`\n[DIVERGÊNCIA CRÍTICA] Total de questões no banco (${totalQuestoes}) difere do esperado (4.760)!`);
    process.exit(1);
  } else {
    console.log("\n[✓] CONFERÊNCIA FASE 1: O total de 4.760 questões foi confirmado com 100% de exatidão!");
  }
}

auditPreLote8().catch((err) => {
  console.error("Erro na auditoria pré-Lote 8:", err);
  process.exit(1);
});
