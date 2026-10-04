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

async function analyze() {
  console.log("=== ANÁLISE DE DISCIPLINAS, ASSUNTOS E CONTEÚDOS ===");

  // 1. Buscar disciplinas
  const { data: disciplinas, error: discErr } = await supabase
    .from("disciplinas")
    .select("id, nome, slug")
    .order("nome");

  if (discErr) {
    console.error("Erro ao buscar disciplinas:", discErr);
    return;
  }

  console.log(`Total de disciplinas: ${disciplinas.length}`);

  // 2. Buscar todos os assuntos
  let allAssuntos = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data: chunk, error: err } = await supabase
      .from("assuntos")
      .select("id, disciplina_id, nome, slug, descricao, ordem")
      .range(page * pageSize, (page + 1) * pageSize - 1);
    if (err) {
      console.error("Erro ao buscar assuntos:", err);
      break;
    }
    if (!chunk || chunk.length === 0) break;
    allAssuntos = allAssuntos.concat(chunk);
    if (chunk.length < pageSize) break;
    page++;
  }

  console.log(`Total de assuntos: ${allAssuntos.length}`);

  // 3. Buscar todos os conteúdos
  let allConteudos = [];
  page = 0;
  while (true) {
    const { data: contChunk, error: contErr } = await supabase
      .from("assunto_conteudos")
      .select("id, assunto_id, titulo, pdf_path, pdf_nome, pdf_tamanho, ordem, ativo")
      .range(page * pageSize, (page + 1) * pageSize - 1);

    if (contErr) {
      console.error("Erro ao buscar conteudos:", contErr);
      break;
    }
    if (!contChunk || contChunk.length === 0) break;
    allConteudos = allConteudos.concat(contChunk);
    if (contChunk.length < pageSize) break;
    page++;
  }

  const conteudosComPdf = allConteudos.filter((c) => !!c.pdf_path);
  const assuntoComPdfSet = new Set(conteudosComPdf.map((c) => c.assunto_id));

  const discMap = new Map();
  for (const d of disciplinas) {
    discMap.set(d.id, {
      ...d,
      assuntos: [],
      comPdf: 0,
      semPdf: 0,
    });
  }

  for (const a of allAssuntos) {
    const d = discMap.get(a.disciplina_id);
    if (d) {
      d.assuntos.push(a);
      if (assuntoComPdfSet.has(a.id)) {
        d.comPdf++;
      } else {
        d.semPdf++;
      }
    }
  }

  const list = Array.from(discMap.values()).filter((d) => d.assuntos.length > 0);
  list.sort((a, b) => b.assuntos.length - a.assuntos.length);

  console.log("\n=== STATUS POR DISCIPLINA ===");
  for (const d of list) {
    const status = d.comPdf === d.assuntos.length ? "✅ COMPLETO" : d.comPdf > 0 ? "⚠️ PARCIAL " : "❌ ZERADO  ";
    console.log(`${status} | ${d.nome.padEnd(35)} | ${String(d.comPdf).padStart(2)}/${String(d.assuntos.length).padStart(2)} PDFs (${String(d.semPdf).padStart(2)} faltando)`);
  }

  console.log(`\nResumo Geral:`);
  console.log(`- Total de disciplinas ativas com assuntos: ${list.length}`);
  console.log(`- Total de assuntos cadastrados: ${allAssuntos.length}`);
  console.log(`- Total de assuntos COM PDF: ${assuntoComPdfSet.size}`);
  console.log(`- Total de assuntos SEM PDF: ${allAssuntos.length - assuntoComPdfSet.size}`);
}

analyze().catch(console.error);
