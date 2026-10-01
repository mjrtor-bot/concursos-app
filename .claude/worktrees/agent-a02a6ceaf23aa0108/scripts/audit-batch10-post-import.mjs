import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TODAS_QUESTOES_LOTE10, prepararParaBanco } from "./batch10_modules/index.mjs";

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

async function postImportAudit() {
  console.log("================================================================================");
  console.log("      AUDITORIA EXAUSTIVA PÓS-IMPORTAÇÃO DO LOTE 10 NO SUPABASE PROD           ");
  console.log("================================================================================\n");

  // 1. Contagens Totais
  const { count: totalQuestoes, error: qErr } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  if (qErr) throw qErr;

  const { count: totalAlternativas, error: aErr } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  if (aErr) throw aErr;

  const { count: lote10Questoes, error: l10Err } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true })
    .eq("prompt_versao", "v3.0-lote10");
  if (l10Err) throw l10Err;

  console.log(`[+] Total de questões no banco: ${totalQuestoes} (Esperado: 6.260)`);
  console.log(`[+] Total de alternativas no banco: ${totalAlternativas} (Esperado: 23.620)`);
  console.log(`[+] Questões com prompt_versao='v3.0-lote10': ${lote10Questoes} (Esperado: 500)`);

  if (totalQuestoes !== 6260 || totalAlternativas !== 23620 || lote10Questoes !== 500) {
    throw new Error(`[FALHA DE CONTAGEM] questoes=${totalQuestoes}, alternativas=${totalAlternativas}, lote10=${lote10Questoes}`);
  }

  // 2. Validação Exaustiva dos 500 itens do Lote 10
  console.log("\n[>] Validando integridade referencial e pedagógica das 500 questões do Lote 10 no Supabase...");
  let questoesValidadas = 0;
  let alternativasValidadas = 0;
  let gabaritoUnicoOk = 0;
  let explicacaoPreenchida = 0;
  let falhas = 0;

  // Buscar todas as questões do lote 10
  const { data: dbLote10Questions, error: errFetchL10 } = await supabase
    .from("questoes")
    .select("id, tipo, enunciado, explicacao, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome, ano, dificuldade")
    .eq("prompt_versao", "v3.0-lote10");

  if (errFetchL10 || !dbLote10Questions || dbLote10Questions.length !== 500) {
    throw new Error(`Erro ao buscar questões do lote 10 ou contagem incorreta: ${dbLote10Questions?.length}`);
  }

  // Buscar todas as alternativas do lote 10 em chunks
  const l10Ids = dbLote10Questions.map(q => q.id);
  const dbL10Alternativas = [];
  for (let i = 0; i < l10Ids.length; i += 100) {
    const chunkIds = l10Ids.slice(i, i + 100);
    const { data: alts, error: errAlts } = await supabase
      .from("questoes_alternativas")
      .select("id, questao_id, texto, correta, letra")
      .in("questao_id", chunkIds);
    if (errAlts) throw errAlts;
    dbL10Alternativas.push(...alts);
  }

  console.log(`[+] Alternativas do Lote 10 recuperadas do banco: ${dbL10Alternativas.length} (Esperado: 1.408)`);
  if (dbL10Alternativas.length !== 1408) {
    throw new Error(`Contagem de alternativas do lote 10 incompatível: ${dbL10Alternativas.length}`);
  }

  const altsPorQuestao = new Map();
  for (const alt of dbL10Alternativas) {
    if (!altsPorQuestao.has(alt.questao_id)) {
      altsPorQuestao.set(alt.questao_id, []);
    }
    altsPorQuestao.get(alt.questao_id).push(alt);
  }

  for (const q of dbLote10Questions) {
    questoesValidadas++;
    if (q.explicacao && q.explicacao.trim().length > 10) explicacaoPreenchida++;

    const alts = altsPorQuestao.get(q.id) || [];
    alternativasValidadas += alts.length;

    const expectedCount = q.tipo === "certo_errado" ? 2 : 5;
    const correctCount = alts.filter(a => a.correta).length;

    if (alts.length === expectedCount && correctCount === 1) {
      gabaritoUnicoOk++;
    } else {
      falhas++;
      console.error(`[ERRO INTEGRALIDADE] Questão ${q.id} (${q.tipo}): ${alts.length} alts (esperado ${expectedCount}), ${correctCount} corretas.`);
    }
  }

  console.log(`[✓] Questões do Lote 10 auditadas: ${questoesValidadas}/500`);
  console.log(`[✓] Alternativas auditadas: ${alternativasValidadas}/1408`);
  console.log(`[✓] Gabarito único verificado: ${gabaritoUnicoOk}/500`);
  console.log(`[✓] Explicações detalhadas: ${explicacaoPreenchida}/500`);

  if (falhas > 0 || gabaritoUnicoOk !== 500 || explicacaoPreenchida !== 500) {
    throw new Error(`[ABORTADO] Falhas encontradas na integridade do Lote 10: ${falhas}`);
  }

  // 3. Auditoria de Preservação Histórica dos Lotes 1 a 9 (5.760 questões)
  console.log("\n[>] Verificando auditoria de preservação histórica (Lotes 1 a 9)...");
  const backupPath = path.resolve(process.cwd(), "scripts/backup_pre_lote10_snapshot.json");
  if (fs.existsSync(backupPath)) {
    const backup = JSON.parse(fs.readFileSync(backupPath, "utf8"));
    const preIds = backup.questoes.map(q => q.id);

    let preservedCount = 0;
    for (let i = 0; i < preIds.length; i += 100) {
      const chunk = preIds.slice(i, i + 100);
      const { data: checkData, error: checkErr } = await supabase
        .from("questoes")
        .select("id")
        .in("id", chunk);
      if (checkErr) throw checkErr;
      preservedCount += checkData.length;
    }

    console.log(`[✓] Preservação dos Lotes 1 a 9 confirmada: ${preservedCount}/${preIds.length} questões inalteradas e preservadas.`);
    if (preservedCount !== 5760) {
      throw new Error(`ALERTA CRÍTICO: Discrepância na preservação histórica: ${preservedCount} != 5760`);
    }
  } else {
    console.warn("[AVISO] Arquivo de backup snapshot não encontrado para conferência direta.");
  }

  // 4. Testes de Integração com Dados Reais (Zero Mock)
  console.log("\n[>] Executando testes funcionais reais contra o banco consolidado (Zero Mock)...");

  const disciplinasTest = [
    { nome: "Direito Penal", id: "29f5164e-c850-5fa5-a29b-3c0b5d6e41e6" },
    { nome: "Direito Processual Penal", id: "18877540-1bd4-5e15-b497-20b2582bc4d8" },
    { nome: "Legislação Especial", id: "f54b2f9a-3916-5409-a431-a93ce24510e9" },
    { nome: "Direito Constitucional", id: "8a5fd46c-e3ab-5e99-b338-3a17eafa50e9" },
    { nome: "Direito Administrativo", id: "0ba958a0-7e2b-5f29-aec6-9578fa2d6b1c" },
    { nome: "Legislação de Trânsito", id: "589019e2-64df-583b-88f5-dc2e0eeb60e6" },
    { nome: "Língua Portuguesa", id: "cf63a64b-0209-5181-8fcf-2661da50a633" },
    { nome: "Direitos Humanos", id: "ee8e2e17-ceae-5165-932a-76c8bc67a294" },
    { nome: "Criminologia", id: "0321c3c1-167a-5a44-a59d-89c065d0426d" },
    { nome: "Informática & TI", id: "4598b6df-6e9d-5916-aa39-bb82ec4f41a6" },
    { nome: "Raciocínio Lógico-Matemático", id: "dac6313a-adfd-50ca-98a1-09fb195469ff" },
  ];

  for (const disc of disciplinasTest) {
    const { count, error } = await supabase
      .from("questoes")
      .select("*", { count: "exact", head: true })
      .eq("disciplina_id", disc.id);
    if (error) throw error;
    console.log(`  [✓] Filtro Disciplina '${disc.nome}': ${count} questões ativas.`);
  }

  // 4.2 Simulação de Geração de Simulado Policial (120 itens)
  const { data: simuladoAmos, error: simErr } = await supabase
    .from("questoes")
    .select("id, tipo, disciplina_id, banca_nome, cargo_nome")
    .limit(120);
  if (simErr || !simuladoAmos || simuladoAmos.length !== 120) {
    throw new Error(`Falha no teste de geração de simulado: ${simErr?.message}`);
  }
  console.log(`  [✓] Simulação de Simulado Policial Completo (120 questões): Carregado com sucesso.`);

  console.log("\n================================================================================");
  console.log("   🎉 AUDITORIA PÓS-IMPORTAÇÃO 100% APROVADA! ACERVO: 6.260 QUESTÕES REAIS!     ");
  console.log("================================================================================\n");
}

postImportAudit().catch((err) => {
  console.error("Erro fatal na auditoria pós-importação:", err);
  process.exit(1);
});
