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

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("❌ ERRO: NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY devem estar definidos em .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

async function main() {
  console.log("======================================================================");
  console.log("🔍 AUDITORIA COMPLETA DE EDITAIS, PDFS E CONTEÚDOS POR ASSUNTO");
  console.log("======================================================================\n");

  // 1. Auditando Editais de Concursos (editais_concurso)
  console.log("📂 1. AUDITORIA DA TABELA 'editais_concurso' (EDITAIS OFICIAIS VINCULADOS A CONCURSOS):");
  const { data: editaisConcurso, error: errEditaisC } = await supabase
    .from("editais_concurso")
    .select(`
      id,
      concurso_id,
      cargo_id,
      numero,
      titulo,
      publicado_em,
      prova_em,
      fonte_oficial_url,
      pdf_url,
      status,
      concursos (
        id,
        nome,
        orgao,
        esfera,
        uf,
        status,
        fonte_oficial_url
      ),
      concurso_cargos (
        id,
        nome,
        vagas,
        salario
      )
    `);

  if (errEditaisC) {
    console.error("❌ Erro ao buscar editais_concurso:", errEditaisC.message);
  } else {
    console.log(`Encontrados ${editaisConcurso?.length || 0} editais oficiais em 'editais_concurso':`);
    for (const ec of editaisConcurso || []) {
      console.log(`\n  📄 [Edital ID: ${ec.id}]`);
      console.log(`     Título: "${ec.titulo}" (Número: ${ec.numero || "S/N"})`);
      console.log(`     Concurso: ${ec.concursos?.nome || "Não vinculado"} (${ec.concursos?.orgao || "N/A"} - ${ec.concursos?.uf || "N/A"})`);
      console.log(`     Cargo: ${ec.concurso_cargos?.nome || "Não vinculado"}`);
      console.log(`     Status: ${ec.status} | Data Prova: ${ec.prova_em || "A definir"}`);
      console.log(`     Fonte Oficial: ${ec.fonte_oficial_url}`);
      console.log(`     PDF URL: ${ec.pdf_url || "Nenhum arquivo PDF direto"}`);

      if (ec.fonte_oficial_url) {
        try {
          const res = await fetch(ec.fonte_oficial_url, { method: "HEAD", signal: AbortSignal.timeout(5000), headers: { "User-Agent": "Mozilla/5.0" } });
          console.log(`     ➡️ Conexão Fonte Oficial: HTTP ${res.status} ${res.ok ? "✅ Acessível" : "⚠️ Status " + res.status}`);
        } catch (e) {
          console.log(`     ➡️ Conexão Fonte Oficial: Falha (${e.message})`);
        }
      }

      if (ec.pdf_url) {
        try {
          const res = await fetch(ec.pdf_url, { method: "HEAD", signal: AbortSignal.timeout(5000), headers: { "User-Agent": "Mozilla/5.0" } });
          console.log(`     ➡️ Conexão PDF URL: HTTP ${res.status} ${res.ok ? "✅ PDF Abrindo" : "⚠️ Status " + res.status}`);
        } catch (e) {
          console.log(`     ➡️ Conexão PDF URL: Falha (${e.message})`);
        }
      }

      const { count } = await supabase
        .from("edital_topicos")
        .select("id", { count: "exact", head: true })
        .eq("edital_id", ec.id);
      console.log(`     📊 Total de tópicos vinculados (edital_topicos): ${count ?? 0}`);
    }
  }

  // 1.2 Catálogo Policial / Editais Catálogo (se houver)
  console.log("\n----------------------------------------------------------------------");
  console.log("📂 1.2 AUDITORIA DA TABELA 'editais_catalogo' (BIBLIOTECA DE EDITAIS):");
  const { data: catalogo, error: errCat } = await supabase
    .from("editais_catalogo")
    .select("id, orgao_nome, cargo, banca, edital_numero, status, fonte_url, pdf_url, total_disciplinas, total_topicos, ativo");

  if (errCat) {
    console.log("ℹ️ editais_catalogo:", errCat.message);
  } else {
    console.log(`Encontrados ${catalogo?.length || 0} editais no catálogo:`);
    for (const cat of catalogo || []) {
      console.log(`  - [${cat.orgao_nome}] ${cat.cargo} (${cat.status}) - Fonte: ${cat.fonte_url}`);
    }
  }

  // 2. Editais de Usuários (Uploads)
  console.log("\n----------------------------------------------------------------------");
  console.log("📂 2. AUDITORIA DA TABELA 'editais_usuario' (EDITAIS IMPORTADOS / UPLOADS):");
  const { data: importados, error: errImportados } = await supabase
    .from("editais_usuario")
    .select("id, usuario_id, nome, orgao_nome, cargo, uf, arquivo_path, arquivo_nome, arquivo_tamanho, status, estrutura_extraida, edital_id, created_at");

  if (errImportados) {
    console.error("❌ Erro ao buscar editais_usuario:", errImportados.message);
  } else {
    console.log(`Encontrados ${importados?.length || 0} editais importados:`);
    for (const imp of importados || []) {
      console.log(`\n  📥 [Edital Usuário ID: ${imp.id}]`);
      console.log(`     Nome: "${imp.nome}" | Órgão: ${imp.orgao_nome || "N/I"} | Cargo: ${imp.cargo || "N/I"}`);
      console.log(`     Status: ${imp.status} | Edital ID Vinculado: ${imp.edital_id || "Nenhum"}`);
      console.log(`     Arquivo: ${imp.arquivo_nome} (${(imp.arquivo_tamanho / 1024 / 1024).toFixed(2)} MB)`);
      console.log(`     Path Storage: ${imp.arquivo_path}`);

      if (imp.arquivo_path) {
        const { data: signed, error: errSigned } = await supabase.storage
          .from("editais-usuario")
          .createSignedUrl(imp.arquivo_path, 60);

        if (errSigned || !signed?.signedUrl) {
          console.log(`     ➡️ Signed URL no bucket 'editais-usuario': ❌ Erro (${errSigned?.message})`);
        } else {
          try {
            const res = await fetch(signed.signedUrl, { method: "HEAD", signal: AbortSignal.timeout(5000) });
            console.log(`     ➡️ PDF no Storage 'editais-usuario': HTTP ${res.status} ${res.ok ? "✅ Abrindo perfeitamente" : "❌ Falha no acesso"}`);
          } catch (e) {
            console.log(`     ➡️ PDF no Storage: Falha de rede (${e.message})`);
          }
        }
      }

      const struct = imp.estrutura_extraida || {};
      const discCount = struct.disciplinas?.length || 0;
      const cargoCount = struct.cargos?.length || 0;
      console.log(`     Estrutura extraída: ${discCount} disciplinas diretas, ${cargoCount} cargos`);

      // Se confirmado e vinculado a edital_id, verificar se os tópicos foram sincronizados
      if (imp.edital_id) {
        const { count: topicosSinc } = await supabase
          .from("edital_topicos")
          .select("id", { count: "exact", head: true })
          .eq("edital_id", imp.edital_id);
        console.log(`     🔄 Tópicos sincronizados em 'edital_topicos': ${topicosSinc ?? 0}`);
      }
    }
  }

  // 3. Taxonomia: Disciplinas e Assuntos
  console.log("\n----------------------------------------------------------------------");
  console.log("📚 3. AUDITORIA DE TAXONOMIA (DISCIPLINAS E ASSUNTOS):");
  const { data: disciplinas, count: totalDisc } = await supabase
    .from("disciplinas")
    .select("id, nome", { count: "exact" });
  const { data: assuntos, count: totalAssuntos } = await supabase
    .from("assuntos")
    .select("id, nome, disciplina_id", { count: "exact" });

  console.log(`  - Total de Disciplinas: ${totalDisc ?? 0}`);
  console.log(`  - Total de Assuntos/Tópicos: ${totalAssuntos ?? 0}`);

  const discMap = new Map((disciplinas || []).map(d => [d.id, d.nome]));
  const assMap = new Map((assuntos || []).map(a => [a.id, { nome: a.nome, disciplina_id: a.disciplina_id, disciplina_nome: discMap.get(a.disciplina_id) || "Desconhecida" }]));

  // 4. Conteúdos de Estudo por Assunto (assunto_conteudos)
  console.log("\n----------------------------------------------------------------------");
  console.log("📖 4. AUDITORIA DA TABELA 'assunto_conteudos' E ARQUIVOS PDF:");
  const { data: conteudos, error: errConteudos } = await supabase
    .from("assunto_conteudos")
    .select("*")
    .order("ordem", { ascending: true });

  if (errConteudos) {
    console.error("❌ Erro ao buscar assunto_conteudos:", errConteudos.message);
  } else {
    console.log(`Encontrados ${conteudos?.length || 0} conteúdos pedagógicos cadastrados:`);

    let comPdfCount = 0;
    let comPdfStorageCount = 0;
    let comPdfUrlCount = 0;
    let comLeiSecaCount = 0;
    let comVideoCount = 0;
    let pdfsAbrindoComSucesso = 0;
    let pdfsComFalha = 0;

    for (const c of conteudos || []) {
      const assInfo = assMap.get(c.assunto_id) || { nome: "Assunto não encontrado (" + c.assunto_id + ")", disciplina_nome: "N/A" };

      console.log(`\n  📘 [Conteúdo ID: ${c.id}] - "${c.titulo}"`);
      console.log(`     Disciplina: ${assInfo.disciplina_nome} | Assunto: ${assInfo.nome}`);
      console.log(`     Ativo: ${c.ativo ? "Sim" : "Não"} | Ordem: ${c.ordem}`);

      if (c.orientacao) {
        console.log(`     📝 Orientação teórica: Presente (${c.orientacao.length} caracteres)`);
      }
      if (c.lei_seca || c.lei_seca_url) {
        comLeiSecaCount++;
        console.log(`     ⚖️ Lei seca: ${c.lei_seca ? "Texto (" + c.lei_seca.length + " carac.)" : ""} ${c.lei_seca_url ? "URL: " + c.lei_seca_url : ""}`);
        if (c.lei_seca_url) {
          try {
            const r = await fetch(c.lei_seca_url, { method: "HEAD", signal: AbortSignal.timeout(5000), headers: { "User-Agent": "Mozilla/5.0" } });
            console.log(`        ➡️ Status Lei Seca URL: HTTP ${r.status} ${r.ok ? "✅ Acessível" : "⚠️ Status " + r.status}`);
          } catch (e) {
            console.log(`        ➡️ Status Lei Seca URL: Falha (${e.message})`);
          }
        }
      }
      if (c.video_url) {
        comVideoCount++;
        console.log(`     🎥 Vídeo aula URL: ${c.video_url}`);
      }

      // Verificação dos PDFs
      if (c.pdf_path || c.pdf_url) {
        comPdfCount++;
        if (c.pdf_path) comPdfStorageCount++;
        if (c.pdf_url) comPdfUrlCount++;

        console.log(`     📑 PDF Anexado: ${c.pdf_nome || "PDF"} (${c.pdf_tamanho ? (c.pdf_tamanho / 1024).toFixed(1) + " KB" : "Tamanho N/I"})`);
        if (c.pdf_path) console.log(`        Storage Path: ${c.pdf_path}`);
        if (c.pdf_url) console.log(`        PDF URL Externa: ${c.pdf_url}`);

        if (c.pdf_path) {
          const { data: signed, error: errSigned } = await supabase.storage
            .from("materiais-assuntos")
            .createSignedUrl(c.pdf_path, 60);

          if (errSigned || !signed?.signedUrl) {
            console.log(`        ❌ Falha ao gerar Signed URL no bucket 'materiais-assuntos': ${errSigned?.message}`);
            pdfsComFalha++;
          } else {
            try {
              const res = await fetch(signed.signedUrl, { method: "HEAD", signal: AbortSignal.timeout(5000) });
              if (res.ok) {
                console.log(`        ✅ PDF abrindo perfeitamente no Supabase Storage (HTTP ${res.status}, Type: ${res.headers.get("content-type")})`);
                pdfsAbrindoComSucesso++;
              } else {
                console.log(`        ❌ Erro HTTP ao acessar PDF no Storage: ${res.status}`);
                pdfsComFalha++;
              }
            } catch (err) {
              console.log(`        ❌ Falha de rede ao acessar PDF: ${err.message}`);
              pdfsComFalha++;
            }
          }
        } else if (c.pdf_url) {
          try {
            const res = await fetch(c.pdf_url, { method: "HEAD", signal: AbortSignal.timeout(5000), headers: { "User-Agent": "Mozilla/5.0" } });
            if (res.ok) {
              console.log(`        ✅ PDF externo abrindo perfeitamente (HTTP ${res.status})`);
              pdfsAbrindoComSucesso++;
            } else {
              console.log(`        ❌ Erro HTTP ao acessar PDF externo: ${res.status}`);
              pdfsComFalha++;
            }
          } catch (err) {
            console.log(`        ❌ Falha de rede ao acessar PDF externo: ${err.message}`);
            pdfsComFalha++;
          }
        }
      }
    }

    console.log("\n----------------------------------------------------------------------");
    console.log("📊 RESUMO DOS CONTEÚDOS:");
    console.log(`  - Total de registros de conteúdo: ${conteudos?.length || 0}`);
    console.log(`  - Conteúdos com PDF: ${comPdfCount} (Bucket Storage: ${comPdfStorageCount}, Externos: ${comPdfUrlCount})`);
    console.log(`  - PDFs verificados e abrindo com sucesso: ${pdfsAbrindoComSucesso}/${comPdfCount}`);
    console.log(`  - PDFs com falha: ${pdfsComFalha}`);
    console.log(`  - Conteúdos com Lei Seca: ${comLeiSecaCount}`);
    console.log(`  - Conteúdos com Vídeo: ${comVideoCount}`);
  }

  // 5. Conformidade: Edital x Conteúdos
  console.log("\n----------------------------------------------------------------------");
  console.log("📋 5. CONFORMIDADE: EDITAIS X TÓPICOS X CONTEÚDOS:");

  const { data: allEditalTopicos } = await supabase
    .from("edital_topicos")
    .select("id, edital_id, disciplina_id, assunto_id, peso, incidencia, ordem");

  // Agrupar por edital
  const topicosPorEdital = new Map();
  for (const t of allEditalTopicos || []) {
    if (!topicosPorEdital.has(t.edital_id)) {
      topicosPorEdital.set(t.edital_id, []);
    }
    topicosPorEdital.get(t.edital_id).push(t);
  }

  // Mapear assuntos que têm conteúdo em assunto_conteudos
  const conteudosPorAssunto = new Map();
  for (const c of conteudos || []) {
    if (!c.ativo) continue;
    if (!conteudosPorAssunto.has(c.assunto_id)) {
      conteudosPorAssunto.set(c.assunto_id, []);
    }
    conteudosPorAssunto.get(c.assunto_id).push(c);
  }

  // Verificar cada edital oficial
  for (const ec of editaisConcurso || []) {
    const topicos = topicosPorEdital.get(ec.id) || [];
    console.log(`\n  🎯 Edital Oficial: "${ec.titulo}" [${ec.concursos?.nome || "Concurso"}]`);
    console.log(`     Total de tópicos mapeados no edital: ${topicos.length}`);

    let comMaterial = 0;
    let comPdf = 0;
    let semMaterial = [];

    for (const t of topicos) {
      const mats = conteudosPorAssunto.get(t.assunto_id) || [];
      const assInfo = assMap.get(t.assunto_id) || { nome: "Assunto " + t.assunto_id, disciplina_nome: discMap.get(t.disciplina_id) || "N/A" };
      if (mats.length > 0) {
        comMaterial++;
        if (mats.some(m => m.pdf_path || m.pdf_url)) {
          comPdf++;
        }
      } else {
        semMaterial.push({
          disciplina: assInfo.disciplina_nome,
          assunto: assInfo.nome,
        });
      }
    }

    const percMat = topicos.length > 0 ? ((comMaterial / topicos.length) * 100).toFixed(1) : 0;
    const percPdf = topicos.length > 0 ? ((comPdf / topicos.length) * 100).toFixed(1) : 0;

    console.log(`     ✅ Tópicos com material didático cadastrado: ${comMaterial}/${topicos.length} (${percMat}%)`);
    console.log(`     📑 Tópicos com PDF disponível: ${comPdf}/${topicos.length} (${percPdf}%)`);

    if (semMaterial.length > 0) {
      console.log(`     ℹ️ ${semMaterial.length} tópicos sem material estático em 'assunto_conteudos':`);
      console.log(`        (Estes tópicos utilizam a funcionalidade de geração de material sob demanda via IA oficial em /api/mentoria/material-pdf)`);
      for (const sm of semMaterial.slice(0, 5)) {
        console.log(`        • [${sm.disciplina}] ${sm.assunto}`);
      }
      if (semMaterial.length > 5) {
        console.log(`        ... e mais ${semMaterial.length - 5} tópicos.`);
      }
    }
  }

  // 6. Auditoria de Arquivos no Storage
  console.log("\n----------------------------------------------------------------------");
  console.log("🗄️ 6. AUDITORIA DOS BUCKETS DO SUPABASE STORAGE:");

  // Listar todos os arquivos recursivamente em materiais-assuntos
  async function listAllFiles(bucket, prefix = "") {
    let allFiles = [];
    const { data: items, error } = await supabase.storage.from(bucket).list(prefix, { limit: 1000 });
    if (error) {
      console.error(`Erro ao listar bucket ${bucket} em '${prefix}':`, error.message);
      return allFiles;
    }
    for (const item of items || []) {
      const fullPath = prefix ? `${prefix}/${item.name}` : item.name;
      if (!item.id && !item.metadata) {
        // É uma pasta
        const subFiles = await listAllFiles(bucket, fullPath);
        allFiles.push(...subFiles);
      } else {
        allFiles.push({ ...item, fullPath });
      }
    }
    return allFiles;
  }

  const storageMatFiles = await listAllFiles("materiais-assuntos");
  console.log(`  Bucket 'materiais-assuntos': ${storageMatFiles.length} arquivos físicos no total.`);

  // Verificar se há arquivos no storage que não estão vinculados em assunto_conteudos
  const dbPdfPaths = new Set((conteudos || []).map(c => c.pdf_path).filter(Boolean));
  let orphanStorage = 0;
  for (const f of storageMatFiles) {
    if (!dbPdfPaths.has(f.fullPath)) {
      orphanStorage++;
    }
  }
  console.log(`  Arquivos no storage vinculados ao banco: ${storageMatFiles.length - orphanStorage}`);
  console.log(`  Arquivos não vinculados / avulsos no storage: ${orphanStorage}`);

  console.log("\n======================================================================");
  console.log("🏁 AUDITORIA FINALIZADA COM SUCESSO!");
  console.log("======================================================================\n");
}

main().catch(err => {
  console.error("Erro fatal na auditoria:", err);
  process.exit(1);
});
