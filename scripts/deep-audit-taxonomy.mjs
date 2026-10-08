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
        process.env[trimmed.substring(0, idx).trim()] = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
      }
    }
  }
}

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function fetchAll(tableName, select = "*") {
  let all = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from(tableName)
      .select(select)
      .range(page * pageSize, (page + 1) * pageSize - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    all.push(...data);
    if (data.length < pageSize) break;
    page++;
  }
  return all;
}

async function deepAudit() {
  console.log("Buscando todos os dados com paginação...");
  const [disciplinas, assuntos, questoes, topicos, equivs] = await Promise.all([
    fetchAll("disciplinas", "id, nome, slug"),
    fetchAll("assuntos", "id, nome, slug, disciplina_id"),
    fetchAll("questoes", "id, disciplina_id, assunto_id, banca_nome, is_autoral_ia"),
    fetchAll("edital_topicos", "id, edital_id, disciplina_id, assunto_id"),
    fetchAll("assunto_equivalencias", "*"),
  ]);

  console.log(`\n--- ESTATÍSTICAS GERAIS ---`);
  console.log(`Disciplinas no banco: ${disciplinas.length}`);
  console.log(`Assuntos no banco: ${assuntos.length}`);
  console.log(`Questões no banco: ${questoes.length}`);
  console.log(`Tópicos de edital: ${topicos.length}`);
  console.log(`Equivalências de assuntos: ${equivs.length}`);

  const qByAssunto = new Map();
  const qByDisc = new Map();
  const qAssuntoIds = new Set();
  const qDiscIds = new Set();

  for (const q of questoes) {
    if (q.assunto_id) {
      qByAssunto.set(q.assunto_id, (qByAssunto.get(q.assunto_id) || 0) + 1);
      qAssuntoIds.add(q.assunto_id);
    }
    if (q.disciplina_id) {
      qByDisc.set(q.disciplina_id, (qByDisc.get(q.disciplina_id) || 0) + 1);
      qDiscIds.add(q.disciplina_id);
    }
  }

  console.log(`\nTotal de assuntos distintos COM questões: ${qAssuntoIds.size}`);
  console.log(`Total de disciplinas distintas COM questões: ${qDiscIds.size}`);

  // Verificar se os assunto_ids das questões existem na tabela assuntos
  const assuntoIdMap = new Map(assuntos.map(a => [a.id, a]));
  const disciplinaIdMap = new Map(disciplinas.map(d => [d.id, d]));

  let qComAssuntoInexistente = 0;
  let qComDiscInexistente = 0;
  for (const q of questoes) {
    if (q.assunto_id && !assuntoIdMap.has(q.assunto_id)) qComAssuntoInexistente++;
    if (q.disciplina_id && !disciplinaIdMap.has(q.disciplina_id)) qComDiscInexistente++;
  }
  console.log(`Questões com assunto_id que NÃO existe na tabela assuntos: ${qComAssuntoInexistente}`);
  console.log(`Questões com disciplina_id que NÃO existe na tabela disciplinas: ${qComDiscInexistente}`);

  // Analisar assuntos por nome e agrupamento
  const assuntosPorNome = new Map();
  for (const a of assuntos) {
    const nomeNorm = a.nome.toLowerCase().trim();
    if (!assuntosPorNome.has(nomeNorm)) assuntosPorNome.set(nomeNorm, []);
    assuntosPorNome.get(nomeNorm).push(a);
  }

  let duplicados = 0;
  for (const [nome, lista] of assuntosPorNome.entries()) {
    if (lista.length > 1) {
      duplicados++;
    }
  }
  console.log(`Assuntos com nomes duplicados na tabela 'assuntos': ${duplicados}`);

  // Analisar tópicos de edital vs questões
  let topicosComQuestoesDiretas = 0;
  let topicosComQuestoesPorEquivalencia = 0;
  let topicosComQuestoesPorNome = 0;
  let topicosTotalmenteSemQuestoes = 0;

  // Mapa de equivalencias
  const equivMap = new Map();
  for (const eq of equivs) {
    if (!equivMap.has(eq.assunto_edital_id)) equivMap.set(eq.assunto_edital_id, new Set());
    if (!equivMap.has(eq.assunto_questao_id)) equivMap.set(eq.assunto_questao_id, new Set());
    equivMap.get(eq.assunto_edital_id).add(eq.assunto_questao_id);
    equivMap.get(eq.assunto_questao_id).add(eq.assunto_edital_id);
  }

  for (const t of topicos) {
    if (!t.assunto_id) {
      topicosTotalmenteSemQuestoes++;
      continue;
    }
    const countDireto = qByAssunto.get(t.assunto_id) || 0;
    if (countDireto > 0) {
      topicosComQuestoesDiretas++;
      continue;
    }

    // Verificar equivalencias
    const eqSet = equivMap.get(t.assunto_id);
    let temEquiv = false;
    if (eqSet) {
      for (const eqId of eqSet) {
        if ((qByAssunto.get(eqId) || 0) > 0) {
          temEquiv = true;
          break;
        }
      }
    }
    if (temEquiv) {
      topicosComQuestoesPorEquivalencia++;
      continue;
    }

    // Verificar por similaridade de nome
    const assObj = assuntoIdMap.get(t.assunto_id);
    if (assObj) {
      const nomeNorm = assObj.nome.toLowerCase().trim();
      const similares = assuntosPorNome.get(nomeNorm) || [];
      const temSimilarComQuestao = similares.some(s => (qByAssunto.get(s.id) || 0) > 0);
      if (temSimilarComQuestao) {
        topicosComQuestoesPorNome++;
        continue;
      }
    }

    topicosTotalmenteSemQuestoes++;
  }

  console.log(`\n--- ANÁLISE DOS ${topicos.length} TÓPICOS DE EDITAIS ---`);
  console.log(`Tópicos com questões DIRETO no assunto_id: ${topicosComQuestoesDiretas}`);
  console.log(`Tópicos com questões via assunto_equivalencias: ${topicosComQuestoesPorEquivalencia}`);
  console.log(`Tópicos com questões via matching de nome de assunto: ${topicosComQuestoesPorNome}`);
  console.log(`Tópicos sem questões em assunto (nem direto, nem equiv, nem mesmo nome): ${topicosTotalmenteSemQuestoes}`);

  // Listagem de assuntos com questões por disciplina
  console.log(`\n--- DISTRIBUIÇÃO DE QUESTÕES POR DISCIPLINA ---`);
  for (const [discId, count] of qByDisc.entries()) {
    const disc = disciplinaIdMap.get(discId);
    console.log(`- ${disc?.nome || discId}: ${count} questões`);
  }
}

deepAudit().catch(console.error);
