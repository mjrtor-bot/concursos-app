import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const envContent = fs.readFileSync(".env.local", "utf8");
for (const line of envContent.split(/\r?\n/)) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith("#")) {
    const idx = trimmed.indexOf("=");
    if (idx !== -1) {
      process.env[trimmed.substring(0, idx).trim()] = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
    }
  }
}

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function inspect() {
  const { count: totalQuestoes } = await supabase.from("questoes").select("*", { count: "exact", head: true });
  const { count: totalAlternativas } = await supabase.from("questoes_alternativas").select("*", { count: "exact", head: true });
  const { count: totalDisciplinas } = await supabase.from("disciplinas").select("*", { count: "exact", head: true });
  const { count: totalAssuntos } = await supabase.from("assuntos").select("*", { count: "exact", head: true });

  console.log("Total questoes:", totalQuestoes);
  console.log("Total alternativas:", totalAlternativas);
  console.log("Total disciplinas:", totalDisciplinas);
  console.log("Total assuntos:", totalAssuntos);

  // Check distinct prompt_versao and is_autoral_ia
  let allQuestoes = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from("questoes")
      .select("id, prompt_versao, is_autoral_ia, banca_nome, orgao_nome, cargo_nome, dificuldade, tipo, disciplina_id, assunto_id, subassunto_id, ano")
      .range(page * pageSize, (page + 1) * pageSize - 1);
    if (error) {
      console.error("Error fetching page", page, error);
      break;
    }
    if (!data || data.length === 0) break;
    allQuestoes.push(...data);
    if (data.length < pageSize) break;
    page++;
  }

  console.log("Fetched total records:", allQuestoes.length);

  const promptCounts = {};
  const isAutoralCounts = {};
  const orgaoCounts = {};
  const bancaCounts = {};
  const tipoCounts = {};
  const difCounts = {};

  for (const q of allQuestoes) {
    const pv = q.prompt_versao || "null";
    promptCounts[pv] = (promptCounts[pv] || 0) + 1;

    const aut = String(q.is_autoral_ia);
    isAutoralCounts[aut] = (isAutoralCounts[aut] || 0) + 1;

    const org = q.orgao_nome || "null";
    orgaoCounts[org] = (orgaoCounts[org] || 0) + 1;

    const b = q.banca_nome || "null";
    bancaCounts[b] = (bancaCounts[b] || 0) + 1;

    const t = q.tipo || "null";
    tipoCounts[t] = (tipoCounts[t] || 0) + 1;

    const d = q.dificuldade || "null";
    difCounts[d] = (difCounts[d] || 0) + 1;
  }

  console.log("Prompt Versoes:", promptCounts);
  console.log("is_autoral_ia:", isAutoralCounts);
  console.log("Orgaos:", orgaoCounts);
  console.log("Bancas:", bancaCounts);
  console.log("Tipos:", tipoCounts);
  console.log("Dificuldades:", difCounts);
}

inspect().catch(console.error);
