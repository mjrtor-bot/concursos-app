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

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function runMathAndQualityAudit() {
  console.log("==========================================================================");
  console.log("   AUDITORIA CORRETIVA FINAL - MATEMÁTICA E QUALIDADE DO LOTE 13         ");
  console.log("==========================================================================\n");

  // 1. Consultar diretamente no Supabase TODAS as 500 questões com prompt_versao = 'v3.3-lote13'
  console.log("[1] Consultando questões com prompt_versao = 'v3.3-lote13'...");
  const { data: questoes, error: errQ } = await supabase
    .from("questoes")
    .select("id, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade, enunciado, explicacao, prompt_versao, is_autoral_ia, modelo_ia, fingerprint_hash")
    .eq("prompt_versao", "v3.3-lote13");

  if (errQ || !questoes) {
    throw new Error(`Erro ao buscar questões do lote 13: ${errQ?.message}`);
  }

  console.log(`  -> Questões encontradas: ${questoes.length}`);

  // 2. Buscar todas as alternativas vinculadas a essas 500 questões
  const qIds = questoes.map(q => q.id);
  const alternativas = [];
  for (let i = 0; i < qIds.length; i += 100) {
    const chunk = qIds.slice(i, i + 100);
    const { data: altsChunk, error: errA } = await supabase
      .from("questoes_alternativas")
      .select("id, questao_id, letra, texto, correta, ordem, explicacao_especifica")
      .in("questao_id", chunk);
    if (errA) throw new Error(`Erro ao buscar alternativas: ${errA.message}`);
    alternativas.push(...(altsChunk || []));
  }

  console.log(`  -> Alternativas vinculadas encontradas: ${alternativas.length}`);

  // Agrupar alternativas por questao_id
  const altsPorQuestao = new Map();
  for (const alt of alternativas) {
    if (!altsPorQuestao.has(alt.questao_id)) {
      altsPorQuestao.set(alt.questao_id, []);
    }
    altsPorQuestao.get(alt.questao_id).push(alt);
  }

  // Contagem por quantidade de alternativas
  let count2 = 0;
  let count4 = 0;
  let count5 = 0;
  let countOther = 0;
  const outrasContagens = [];

  for (const q of questoes) {
    const alts = altsPorQuestao.get(q.id) || [];
    if (alts.length === 2) {
      count2++;
    } else if (alts.length === 4) {
      count4++;
    } else if (alts.length === 5) {
      count5++;
    } else {
      countOther++;
      outrasContagens.push({ id: q.id, qtd: alts.length });
    }
  }

  console.log("\n[2] Distribuição de alternativas por questão:");
  console.log(`  - Questões com 2 alternativas (C/E): ${count2}`);
  console.log(`  - Questões com 4 alternativas (M/E): ${count4}`);
  console.log(`  - Questões com 5 alternativas (M/E): ${count5}`);
  console.log(`  - Questões com outras quantidades: ${countOther}`);
  if (outrasContagens.length > 0) {
    console.log("    Outras:", outrasContagens);
  }

  // 3. Verificação Matemática
  const totalAltsCalculadas = (count2 * 2) + (count4 * 4) + (count5 * 5);
  console.log("\n[3] Cálculo Matemático:");
  console.log(`  (${count2} * 2) + (${count4} * 4) + (${count5} * 5) = ${count2 * 2} + ${count4 * 4} + ${count5 * 5} = ${totalAltsCalculadas}`);
  console.log(`  Total de alternativas no banco: ${alternativas.length}`);
  console.log(`  Validação matemática exata: ${totalAltsCalculadas === alternativas.length ? "CORRETO (100% EXATO)" : "INCONSISTENTE"}`);

  // 4. Verificação Individual das 500 Questões
  console.log("\n[4] Verificação Individual de Qualidade, Gabaritos e Conteúdo:");
  let questoesComGabaritoInvalido = 0;
  let questoesComCamposVazios = 0;
  let placeholdersEncontrados = [];
  let problemasPedagogicos = [];

  const termosProibidos = [
    "identificador de controle",
    "narrativa de controle",
    "placeholder",
    "lorem ipsum",
    "todo:",
    "undefined",
    "código interno",
    "codigo interno",
    "mock"
  ];

  for (const q of questoes) {
    const alts = altsPorQuestao.get(q.id) || [];
    const corretas = alts.filter(a => a.correta).length;
    if (corretas !== 1) {
      questoesComGabaritoInvalido++;
      problemasPedagogicos.push(`Questão ${q.id} possui ${corretas} alternativas corretas.`);
    }

    if (!q.disciplina_id || !q.assunto_id) {
      questoesComCamposVazios++;
      problemasPedagogicos.push(`Questão ${q.id} sem disciplina_id ou assunto_id.`);
    }

    if (!q.enunciado || q.enunciado.trim().length === 0) {
      questoesComCamposVazios++;
      problemasPedagogicos.push(`Questão ${q.id} com enunciado vazio.`);
    }

    if (!q.explicacao || q.explicacao.trim().length === 0) {
      questoesComCamposVazios++;
      problemasPedagogicos.push(`Questão ${q.id} com explicacao vazia.`);
    }

    // Verificar texto das questões
    for (const termo of termosProibidos) {
      if (q.enunciado && q.enunciado.toLowerCase().includes(termo)) {
        placeholdersEncontrados.push({ id: q.id, local: "enunciado", termo, text: q.enunciado.substring(0, 100) });
      }
      if (q.explicacao && q.explicacao.toLowerCase().includes(termo)) {
        placeholdersEncontrados.push({ id: q.id, local: "explicacao", termo, text: q.explicacao.substring(0, 100) });
      }
    }

    // Verificar alternativas
    for (const a of alts) {
      if (!a.texto || a.texto.trim().length === 0) {
        problemasPedagogicos.push(`Alternativa ${a.id} da questão ${q.id} com texto vazio.`);
      }
      for (const termo of termosProibidos) {
        if (a.texto && a.texto.toLowerCase().includes(termo)) {
          placeholdersEncontrados.push({ id: q.id, altId: a.id, local: "texto_alt", termo, text: a.texto.substring(0, 100) });
        }
      }
    }
  }

  // Checagem de alternativas órfãs globais
  const { count: countTotalA } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });

  const { count: countTotalQ } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });

  console.log(`  - Questões com gabarito != 1: ${questoesComGabaritoInvalido}`);
  console.log(`  - Questões com campos obrigatórios vazios: ${questoesComCamposVazios}`);
  console.log(`  - Placeholders / Termos de controle encontrados: ${placeholdersEncontrados.length}`);
  console.log(`  - Problemas pedagógicos encontrados: ${problemasPedagogicos.length}`);
  console.log(`  - Total Geral de Questões no Banco: ${countTotalQ}`);
  console.log(`  - Total Geral de Alternativas no Banco: ${countTotalA}`);

  const resultado = {
    questoesLote13: questoes.length,
    alternativasLote13: alternativas.length,
    questoes2Alts: count2,
    questoes4Alts: count4,
    questoes5Alts: count5,
    calculoMatematico: `(${count2} * 2) + (${count4} * 4) + (${count5} * 5) = ${count2 * 2} + ${count4 * 4} + ${count5 * 5} = ${totalAltsCalculadas}`,
    totalGeralQuestoes: countTotalQ,
    totalGeralAlternativas: countTotalA,
    placeholdersEncontrados: placeholdersEncontrados.length,
    problemasPedagogicosEncontrados: problemasPedagogicos.length,
  };

  fs.writeFileSync(path.join(__dirname, "audit_lote13_math_and_quality.json"), JSON.stringify(resultado, null, 2), "utf8");
}

runMathAndQualityAudit().catch(err => {
  console.error("Erro na auditoria:", err);
  process.exit(1);
});
