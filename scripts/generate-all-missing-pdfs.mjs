import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { generateStudyPdf, sanitizeWinAnsi } from "./pdf-engine.mjs";
import { buildContentForTopic } from "./knowledge-base.mjs";

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
  console.error("Erro: Credenciais do Supabase não encontradas no .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const BUCKET_NAME = "materiais-assuntos";
const CONCURRENCY_LIMIT = 5;

async function runBatchUpload() {
  console.log("=== INICIANDO GERAÇÃO E UPLOAD DE PDFS EM TODAS AS MATÉRIAS ===");

  // 1. Obter disciplinas
  const { data: disciplinas, error: errDisc } = await supabase
    .from("disciplinas")
    .select("id, nome");
  if (errDisc) {
    console.error("Erro ao carregar disciplinas:", errDisc);
    return;
  }
  const discMap = new Map(disciplinas.map((d) => [d.id, d.nome]));
  console.log(`Disciplinas carregadas: ${disciplinas.length}`);

  // 2. Obter todos os assuntos
  let allAssuntos = [];
  let page = 0;
  while (true) {
    const { data: chunk, error: errAss } = await supabase
      .from("assuntos")
      .select("id, disciplina_id, nome, slug, descricao, ordem")
      .range(page * 1000, (page + 1) * 1000 - 1);
    if (errAss) {
      console.error("Erro ao carregar assuntos:", errAss);
      return;
    }
    if (!chunk || chunk.length === 0) break;
    allAssuntos = allAssuntos.concat(chunk);
    if (chunk.length < 1000) break;
    page++;
  }
  console.log(`Total de assuntos na base: ${allAssuntos.length}`);

  // 3. Obter conteúdos com PDF já existentes
  let allConteudos = [];
  page = 0;
  while (true) {
    const { data: chunk, error: errCont } = await supabase
      .from("assunto_conteudos")
      .select("assunto_id, pdf_path")
      .range(page * 1000, (page + 1) * 1000 - 1);
    if (errCont) {
      console.error("Erro ao carregar assunto_conteudos:", errCont);
      return;
    }
    if (!chunk || chunk.length === 0) break;
    allConteudos = allConteudos.concat(chunk);
    if (chunk.length < 1000) break;
    page++;
  }

  const comPdf = new Set(allConteudos.filter((c) => !!c.pdf_path).map((c) => c.assunto_id));
  const missingAssuntos = allAssuntos.filter((a) => !comPdf.has(a.id));

  console.log(`Assuntos que já possuem PDF: ${comPdf.size}`);
  console.log(`Assuntos pendentes de geração de PDF: ${missingAssuntos.length}`);

  if (missingAssuntos.length === 0) {
    console.log("Todos os assuntos já possuem PDF de estudo cadastrado!");
    return;
  }

  let successCount = 0;
  let failCount = 0;
  const startTime = Date.now();

  // Função para processar um único assunto
  async function processAssunto(assunto) {
    const disciplinaNome = discMap.get(assunto.disciplina_id) || "Conhecimentos Gerais";
    try {
      // 1. Gera conteúdo pedagógico estruturado
      const content = buildContentForTopic({
        disciplinaNome,
        assuntoNome: assunto.nome,
        assuntoDescricao: assunto.descricao,
      });

      // 2. Compila PDF com pdf-lib
      const pdfBytes = await generateStudyPdf(content);

      // 3. Define caminhos e nomes no Supabase Storage
      const fileId = crypto.randomUUID();
      const storagePath = `${assunto.id}/${fileId}.pdf`;
      const cleanFileName = `${sanitizeWinAnsi(assunto.nome).replace(/[^a-zA-Z0-9_-]/g, "_").substring(0, 50)}.pdf`;

      // 4. Upload para o bucket
      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(storagePath, pdfBytes, {
          contentType: "application/pdf",
          upsert: true,
        });

      if (uploadError) {
        throw new Error(`Upload Storage Error: ${uploadError.message}`);
      }

      // 5. Inserir ou atualizar registro na tabela assunto_conteudos
      const { error: dbError } = await supabase.from("assunto_conteudos").insert({
        assunto_id: assunto.id,
        titulo: `Material Teórico & Esquematizado - ${assunto.nome}`,
        pdf_path: storagePath,
        pdf_nome: cleanFileName,
        pdf_tamanho: pdfBytes.length,
        ordem: 0,
        ativo: true,
      });

      if (dbError) {
        throw new Error(`DB Insert Error: ${dbError.message}`);
      }

      successCount++;
    } catch (err) {
      failCount++;
      console.error(`[FALHA] ${disciplinaNome} -> ${assunto.nome} (ID: ${assunto.id}):`, err.message);
    }
  }

  // Execução com controle de concorrência
  for (let i = 0; i < missingAssuntos.length; i += CONCURRENCY_LIMIT) {
    const batch = missingAssuntos.slice(i, i + CONCURRENCY_LIMIT);
    await Promise.all(batch.map((assunto) => processAssunto(assunto)));

    const processed = Math.min(i + CONCURRENCY_LIMIT, missingAssuntos.length);
    const percent = ((processed / missingAssuntos.length) * 100).toFixed(1);
    const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(1);
    const rate = (processed / (elapsedSec || 1)).toFixed(1);

    if (processed % 25 === 0 || processed === missingAssuntos.length) {
      console.log(
        `Progresso: ${processed}/${missingAssuntos.length} (${percent}%) | Sucesso: ${successCount} | Falhas: ${failCount} | Vel: ${rate} PDFs/s`
      );
    }
  }

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log("\n=== FINALIZAÇÃO DO PROCESSO ===");
  console.log(`Tempo total: ${totalTime}s`);
  console.log(`Total gerado e publicado com sucesso: ${successCount}`);
  console.log(`Total de falhas: ${failCount}`);
}

runBatchUpload().catch(console.error);
