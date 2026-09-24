import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

// Carregar variáveis de ambiente de .env.local
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

let SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
SUPABASE_URL = SUPABASE_URL.replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(SUPABASE_URL, ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function simulateApiQuery({ page = 1, pageSize = 10, disciplina_id, banca, termo_busca, origem }) {
  let query = supabase
    .from("questoes")
    .select(
      `
      id, disciplina_id, assunto_id, subassunto_id, prova_id,
      banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade,
      enunciado, texto_apoio, explicacao,
      is_autoral_ia, modelo_ia, prompt_versao, revisada_por_especialista,
      anulada, desatualizada, motivo_desatualizacao, versao,
      fingerprint_hash, total_respostas, total_acertos, taxa_acerto,
      created_at, updated_at
    `,
      { count: "exact" }
    )
    .order("created_at", { ascending: false });

  if (disciplina_id && disciplina_id !== "todos") {
    query = query.eq("disciplina_id", disciplina_id);
  }
  if (banca && banca !== "todas") {
    query = query.ilike("banca_nome", `%${banca}%`);
  }
  if (origem === "oficiais") {
    query = query.eq("is_autoral_ia", false);
  } else if (origem === "autorais_ia") {
    query = query.eq("is_autoral_ia", true);
  }

  // Anulada default false
  query = query.eq("anulada", false);

  if (termo_busca && termo_busca.trim()) {
    query = query.textSearch("busca_vetor", termo_busca.trim(), {
      config: "portuguese",
      type: "websearch",
    });
  }

  const offset = (page - 1) * pageSize;
  query = query.range(offset, offset + pageSize - 1);

  const { data, count, error } = await query;
  if (error) {
    console.error("Erro:", error.message);
    return;
  }

  const total = count ?? 0;
  const totalPages = Math.ceil(total / pageSize) || 1;
  const items = data ?? [];

  console.log(`\n--- Teste [page=${page}, pageSize=${pageSize}, disciplina=${disciplina_id || 'todos'}, banca=${banca || 'todas'}, busca="${termo_busca || ''}"] ---`);
  console.log(`Total encontrado no banco: ${total}`);
  console.log(`Total de páginas: ${totalPages}`);
  console.log(`Itens retornados nesta página: ${items.length}`);
  if (items.length > 0) {
    console.log(`Primeiro item: [${items[0].banca_nome} ${items[0].ano}] ${items[0].enunciado.substring(0, 50)}...`);
    console.log(`Último item: [${items[items.length - 1].banca_nome} ${items[items.length - 1].ano}] ${items[items.length - 1].enunciado.substring(0, 50)}...`);
  }
}

async function runAll() {
  await simulateApiQuery({ page: 1, pageSize: 10 });
  await simulateApiQuery({ page: 2, pageSize: 10 });
  await simulateApiQuery({ page: 126, pageSize: 10 });
  await simulateApiQuery({ page: 1, pageSize: 20, banca: "FGV" });
  await simulateApiQuery({ page: 1, pageSize: 10, termo_busca: "constituição" });
  await simulateApiQuery({ page: 1, pageSize: 10, origem: "autorais_ia" });
}

runAll();
