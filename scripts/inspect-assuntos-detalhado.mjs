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

async function inspectQuestionsAndTopics() {
  const [disciplinas, assuntos, questoes, topicos] = await Promise.all([
    fetchAll("disciplinas", "id, nome, slug"),
    fetchAll("assuntos", "id, nome, slug, disciplina_id"),
    fetchAll("questoes", "id, disciplina_id, assunto_id, banca_nome, is_autoral_ia, ano"),
    fetchAll("edital_topicos", "id, edital_id, disciplina_id, assunto_id"),
  ]);

  console.log("Total questoes:", questoes.length);
  const qSemAssunto = questoes.filter(q => !q.assunto_id).length;
  console.log("Questoes SEM assunto_id:", qSemAssunto);

  // Group questions by disciplina and see which assuntos exist per disciplina
  const discMap = new Map(disciplinas.map(d => [d.id, d]));
  const assMap = new Map(assuntos.map(a => [a.id, a]));

  const qCountByAssunto = new Map();
  for (const q of questoes) {
    if (q.assunto_id) {
      qCountByAssunto.set(q.assunto_id, (qCountByAssunto.get(q.assunto_id) || 0) + 1);
    }
  }

  // Check top disciplines with most questions
  const discStats = [];
  for (const d of disciplinas) {
    const assDaDisc = assuntos.filter(a => a.disciplina_id === d.id);
    const assComQ = assDaDisc.filter(a => (qCountByAssunto.get(a.id) || 0) > 0);
    const qDaDisc = questoes.filter(q => q.disciplina_id === d.id);
    const topicosDaDisc = topicos.filter(t => t.disciplina_id === d.id);

    if (qDaDisc.length > 0 || topicosDaDisc.length > 0) {
      discStats.push({
        nome: d.nome,
        totalQ: qDaDisc.length,
        totalAssuntos: assDaDisc.length,
        assuntosComQ: assComQ.length,
        totalTopicos: topicosDaDisc.length,
      });
    }
  }

  discStats.sort((a, b) => b.totalQ - a.totalQ);
  console.log("\nTop 15 Disciplinas por Questões:");
  console.table(discStats.slice(0, 15));

  // Let's inspect some topics that have no direct questions and check what their names are vs existing assuntos with questions
  console.log("\nAmostra de 10 tópicos de edital sem questões:");
  const topicosSemQ = topicos.filter(t => t.assunto_id && (qCountByAssunto.get(t.assunto_id) || 0) === 0);
  for (const t of topicosSemQ.slice(0, 10)) {
    const a = assMap.get(t.assunto_id);
    const d = discMap.get(t.disciplina_id);
    console.log(`- Edital Topico: "${t.nome_topico || a?.nome}" | Assunto: "${a?.nome}" | Disc: "${d?.nome}"`);
  }

  console.log("\nAmostra de 10 assuntos com mais questões:");
  const assSorted = Array.from(qCountByAssunto.entries()).sort((a, b) => b[1] - a[1]);
  for (const [assId, count] of assSorted.slice(0, 10)) {
    const a = assMap.get(assId);
    const d = a ? discMap.get(a.disciplina_id) : null;
    console.log(`- Assunto: "${a?.nome}" (${d?.nome}) -> ${count} questoes`);
  }
}

inspectQuestionsAndTopics().catch(console.error);
