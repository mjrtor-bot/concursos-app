import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

// Carregar variáveis de ambiente do .env.local
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
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const supabaseAnon = createClient(SUPABASE_URL, ANON_KEY, {
  auth: { persistSession: false },
});

async function runDetailedPdfAndSystemAudit() {
  console.log("===============================================================================");
  console.log("📑 AUDITORIA DETALHADA: SISTEMA DE PDFS E INTEGRIDADE DO SISTEMA");
  console.log("===============================================================================\n");

  const results = {
    storage: {},
    conteudosPdf: {},
    editaisPdf: {},
    questoes: {},
    apiCheck: {},
  };

  // 1. STORAGE BUCKETS
  console.log("1. Verificando Buckets de Storage...");
  const { data: buckets, error: bErr } = await supabaseAdmin.storage.listBuckets();
  if (bErr) {
    console.error("❌ Erro ao listar buckets:", bErr);
    return;
  }
  console.log("   Buckets encontrados:", buckets.map(b => `${b.name} (${b.public ? 'público' : 'privado'})`).join(", "));
  results.storage.buckets = buckets;

  // 2. TESTE DE UPLOAD E DOWNLOAD NO BUCKET 'materiais-assuntos'
  console.log("\n2. Testando Ciclo Completo de PDF no Bucket 'materiais-assuntos'...");
  const testFileName = `teste_auditoria_${Date.now()}.pdf`;
  const dummyPdfBuffer = Buffer.from("%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n2 0 obj<</Type/Pages/Count 1/Kids[3 0 R]>>endobj\n3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>>>endobj\nxref\n0 4\n0000000000 65535 f\n0000000009 00000 n\n0000000052 00000 n\n0000000108 00000 n\ntrailer<</Size 4/Root 1 0 R>>\nstartxref\n185\n%%EOF");

  // Upload teste
  const { data: upData, error: upErr } = await supabaseAdmin.storage
    .from("materiais-assuntos")
    .upload(`auditoria/${testFileName}`, dummyPdfBuffer, {
      contentType: "application/pdf",
      upsert: true,
    });

  if (upErr) {
    console.error("   ❌ Erro ao fazer upload de teste no bucket materiais-assuntos:", upErr);
    results.storage.uploadTestMateriais = false;
  } else {
    console.log("   ✅ Upload de PDF de teste bem-sucedido:", upData.path);
    results.storage.uploadTestMateriais = true;

    // Gerar URL assinada
    const { data: signedData, error: signErr } = await supabaseAdmin.storage
      .from("materiais-assuntos")
      .createSignedUrl(upData.path, 3600);

    if (signErr || !signedData?.signedUrl) {
      console.error("   ❌ Erro ao gerar URL assinada:", signErr);
    } else {
      console.log("   ✅ URL assinada gerada com sucesso!");
    }

    // Deletar arquivo de teste
    await supabaseAdmin.storage.from("materiais-assuntos").remove([`auditoria/${testFileName}`]);
    console.log("   ✅ Limpeza do arquivo de teste efetuada.");
  }

  // 3. TESTE DE UPLOAD E DOWNLOAD NO BUCKET 'editais-usuario'
  console.log("\n3. Testando Ciclo Completo de PDF no Bucket 'editais-usuario'...");
  const testEditalName = `teste_edital_${Date.now()}.pdf`;
  const { data: edUpData, error: edUpErr } = await supabaseAdmin.storage
    .from("editais-usuario")
    .upload(`auditoria/${testEditalName}`, dummyPdfBuffer, {
      contentType: "application/pdf",
      upsert: true,
    });

  if (edUpErr) {
    console.error("   ❌ Erro ao fazer upload no bucket editais-usuario:", edUpErr);
    results.storage.uploadTestEditais = false;
  } else {
    console.log("   ✅ Upload de Edital PDF de teste bem-sucedido:", edUpData.path);
    results.storage.uploadTestEditais = true;
    await supabaseAdmin.storage.from("editais-usuario").remove([`auditoria/${testEditalName}`]);
    console.log("   ✅ Limpeza do edital de teste efetuada.");
  }

  // 4. AMOSTRAGEM DE PDFS EXISTENTES EM ASSUNTO_CONTEUDOS
  console.log("\n4. Verificando integridade dos 900 PDFs cadastrados em assunto_conteudos...");
  const { data: conteudos, error: cErr } = await supabaseAdmin
    .from("assunto_conteudos")
    .select("id, assunto_id, titulo, pdf_path, pdf_url, pdf_nome, pdf_tamanho")
    .limit(20);

  if (cErr) {
    console.error("❌ Erro ao buscar assunto_conteudos:", cErr);
  } else {
    console.log(`   Amostra de 20 PDFs em assunto_conteudos:`);
    let validUrls = 0;
    for (const c of conteudos) {
      if (c.pdf_path || c.pdf_url) {
        validUrls++;
      }
    }
    console.log(`   - Registros com PDF configurado na amostra: ${validUrls}/${conteudos.length}`);
    console.log(`   - Exemplo de registro:\n`, JSON.stringify(conteudos[0], null, 2));

    // Testar se o arquivo físico do primeiro registro existe no bucket
    if (conteudos[0].pdf_path) {
      const { data: fileBlob, error: fErr } = await supabaseAdmin.storage
        .from("materiais-assuntos")
        .download(conteudos[0].pdf_path);

      if (fErr) {
        console.warn(`   ⚠️ Aviso ao baixar arquivo ${conteudos[0].pdf_path}: ${fErr.message}`);
      } else {
        const size = (await fileBlob.arrayBuffer()).byteLength;
        console.log(`   ✅ Download do arquivo real '${conteudos[0].pdf_path}' validado! Tamanho: ${(size / 1024).toFixed(1)} KB`);
      }
    }
  }

  // 5. VERIFICAÇÃO DO BANCO DE QUESTÕES E GABARITOS
  console.log("\n5. Verificação da Estrutura do Banco de Questões (10.912 questões)...");
  const { data: qSample1 } = await supabaseAdmin.from("questoes").select("id, tipo, enunciado, ano, banca_nome, orgao_nome").limit(5);
  console.log("   Amostra de questões:", qSample1?.map(q => `ID: ${q.id} | Tipo: ${q.tipo} | Banca: ${q.banca_nome} | ${q.enunciado?.slice(0, 50)}...`));

  // Verificar alternativas associadas a essas 5 questões
  const qIds = qSample1.map(q => q.id);
  const { data: alts1 } = await supabaseAdmin.from("questoes_alternativas").select("id, questao_id, letra, texto, correta").in("questao_id", qIds);
  console.log(`   Alternativas encontradas para as ${qIds.length} questões: ${alts1?.length || 0}`);
  for (const q of qSample1) {
    const qAlts = (alts1 || []).filter(a => a.questao_id === q.id);
    const correta = qAlts.find(a => a.correta);
    console.log(`   • Questão ${q.id.slice(0, 8)}: ${qAlts.length} alternativas, Correta: ${correta ? correta.letra : 'Nenhuma'}`);
  }

  // 6. VERIFICAÇÃO DAS ROTAS DE API DE CONTEÚDOS E UPLOAD
  console.log("\n6. Verificando arquivos das rotas de API de PDFs e Conteúdos...");
  const apiFiles = [
    "src/app/api/admin/conteudos/route.ts",
    "src/app/api/admin/conteudos/upload/route.ts",
    "src/app/api/editais/upload/route.ts",
    "src/app/api/mentoria/conteudos/route.ts",
  ];

  for (const file of apiFiles) {
    const fullP = path.resolve(process.cwd(), file);
    if (fs.existsSync(fullP)) {
      console.log(`   ✅ Arquivo de rota existe: ${file}`);
    } else {
      console.error(`   ❌ Arquivo de rota ausente: ${file}`);
    }
  }

  console.log("\n===============================================================================");
  console.log("🏁 AUDITORIA DETALHADA CONCLUÍDA!");
  console.log("===============================================================================");
}

runDetailedPdfAndSystemAudit().catch(console.error);
