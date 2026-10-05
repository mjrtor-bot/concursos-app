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

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("Erro: Credenciais do Supabase não encontradas no .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

async function runAudit() {
  console.log("==================================================");
  console.log("🔍 INICIANDO AUDITORIA PROFUNDA DE SISTEMA");
  console.log("==================================================\n");

  const findings = [];

  // --- 1. AUDITORIA DE DISCIPLINAS E ASSUNTOS ---
  console.log("1. Auditando Disciplinas e Assuntos...");
  const { data: disciplinas, error: errDisc } = await supabase.from("disciplinas").select("*");
  if (errDisc) {
    findings.push({ severity: "CRITICAL", module: "Disciplinas", msg: `Erro ao buscar disciplinas: ${errDisc.message}` });
  } else {
    console.log(`   Total de Disciplinas: ${disciplinas.length}`);
    const discSemNome = disciplinas.filter(d => !d.nome || d.nome.trim() === "");
    if (discSemNome.length > 0) {
      findings.push({ severity: "HIGH", module: "Disciplinas", msg: `${discSemNome.length} disciplinas sem nome válido` });
    }
  }

  const { data: assuntos, error: errAss } = await supabase.from("assuntos").select("*");
  if (errAss) {
    findings.push({ severity: "CRITICAL", module: "Assuntos", msg: `Erro ao buscar assuntos: ${errAss.message}` });
  } else {
    console.log(`   Total de Assuntos: ${assuntos.length}`);
    const discIds = new Set(disciplinas.map(d => d.id));
    const assuntosOrfaos = assuntos.filter(a => !discIds.has(a.disciplina_id));
    if (assuntosOrfaos.length > 0) {
      findings.push({ severity: "HIGH", module: "Assuntos", msg: `${assuntosOrfaos.length} assuntos órfãos (disciplina_id inexistente)` });
    }
    const assuntosSemNome = assuntos.filter(a => !a.nome || a.nome.trim() === "");
    if (assuntosSemNome.length > 0) {
      findings.push({ severity: "HIGH", module: "Assuntos", msg: `${assuntosSemNome.length} assuntos com nome vazio` });
    }
  }

  // --- 2. AUDITORIA DE MATERIAIS / CONTEÚDOS / PDFS ---
  console.log("\n2. Auditando Conteúdos e PDFs de Estudo...");
  const { data: conteudos, error: errCont } = await supabase.from("assunto_conteudos").select("*");
  if (errCont) {
    findings.push({ severity: "CRITICAL", module: "Conteúdos", msg: `Erro ao buscar assunto_conteudos: ${errCont.message}` });
  } else {
    console.log(`   Total de Registros em assunto_conteudos: ${conteudos.length}`);
    const assuntoIds = new Set(assuntos.map(a => a.id));
    const conteudosOrfaos = conteudos.filter(c => !assuntoIds.has(c.assunto_id));
    if (conteudosOrfaos.length > 0) {
      findings.push({ severity: "MEDIUM", module: "Conteúdos", msg: `${conteudosOrfaos.length} conteúdos com assunto_id órfão` });
    }
    const semPdfPath = conteudos.filter(c => !c.pdf_path);
    if (semPdfPath.length > 0) {
      findings.push({ severity: "LOW", module: "Conteúdos", msg: `${semPdfPath.length} conteúdos sem pdf_path preenchido` });
    }
  }

  // --- 3. AUDITORIA DO BANCO DE QUESTÕES ---
  console.log("\n3. Auditando Banco de Questões...");
  let totalQuestoes = 0;
  let page = 0;
  let questoesList = [];
  while (true) {
    const { data: chunk, error: errQ } = await supabase
      .from("questoes")
      .select("id, disciplina_id, assunto_id, enunciado, tipo, alternativas, resposta_correta, ativo")
      .range(page * 1000, (page + 1) * 1000 - 1);
    if (errQ) {
      findings.push({ severity: "HIGH", module: "Questões", msg: `Erro ao buscar lote de questões: ${errQ.message}` });
      break;
    }
    if (!chunk || chunk.length === 0) break;
    questoesList = questoesList.concat(chunk);
    if (chunk.length < 1000) break;
    page++;
  }
  totalQuestoes = questoesList.length;
  console.log(`   Total de Questões Cadastradas: ${totalQuestoes}`);

  if (totalQuestoes > 0) {
    const semEnunciado = questoesList.filter(q => !q.enunciado || q.enunciado.trim() === "");
    const semGabarito = questoesList.filter(q => q.resposta_correta === null || q.resposta_correta === undefined || q.resposta_correta === "");
    const semDisciplina = questoesList.filter(q => !q.disciplina_id);
    const discIds = new Set(disciplinas.map(d => d.id));
    const discInvalida = questoesList.filter(q => q.disciplina_id && !discIds.has(q.disciplina_id));

    // Múltipla escolha sem alternativas
    const multiplaSemAlternativas = questoesList.filter(q => {
      const isMultipla = q.tipo === "multipla_escolha" || (!q.tipo && Array.isArray(q.alternativas));
      return isMultipla && (!q.alternativas || (Array.isArray(q.alternativas) && q.alternativas.length < 2));
    });

    if (semEnunciado.length > 0) {
      findings.push({ severity: "CRITICAL", module: "Questões", msg: `${semEnunciado.length} questões com enunciado vazio` });
    }
    if (semGabarito.length > 0) {
      findings.push({ severity: "CRITICAL", module: "Questões", msg: `${semGabarito.length} questões sem gabarito definido` });
    }
    if (semDisciplina.length > 0) {
      findings.push({ severity: "MEDIUM", module: "Questões", msg: `${semDisciplina.length} questões sem disciplina_id associada` });
    }
    if (discInvalida.length > 0) {
      findings.push({ severity: "HIGH", module: "Questões", msg: `${discInvalida.length} questões com disciplina_id apontando para ID inexistente` });
    }
    if (multiplaSemAlternativas.length > 0) {
      findings.push({ severity: "HIGH", module: "Questões", msg: `${multiplaSemAlternativas.length} questões de múltipla escolha com menos de 2 alternativas` });
    }
    console.log(`   - Questões sem enunciado: ${semEnunciado.length}`);
    console.log(`   - Questões sem gabarito: ${semGabarito.length}`);
    console.log(`   - Questões com disciplina válida: ${totalQuestoes - semDisciplina.length - discInvalida.length}`);
  }

  // --- 4. AUDITORIA DE CONCURSOS E EDITAIS ---
  console.log("\n4. Auditando Concursos e Editais...");
  const { data: concursos, error: errConc } = await supabase.from("concursos").select("*");
  if (errConc) {
    findings.push({ severity: "HIGH", module: "Concursos", msg: `Erro ao buscar concursos: ${errConc.message}` });
  } else {
    console.log(`   Total de Concursos: ${concursos.length}`);
    const semTitulo = concursos.filter(c => !c.titulo && !c.nome && !c.orgao);
    if (semTitulo.length > 0) {
      findings.push({ severity: "HIGH", module: "Concursos", msg: `${semTitulo.length} concursos sem título/órgão` });
    }
  }

  const { data: editais, error: errEd } = await supabase.from("editais").select("*");
  if (errEd) {
    findings.push({ severity: "HIGH", module: "Editais", msg: `Erro ao buscar editais: ${errEd.message}` });
  } else {
    console.log(`   Total de Editais: ${editais.length}`);
  }

  // --- 5. AUDITORIA DE SIMULADOS ---
  console.log("\n5. Auditando Módulo de Simulados...");
  const { data: simulados, error: errSim } = await supabase.from("simulados").select("*");
  if (errSim) {
    findings.push({ severity: "MEDIUM", module: "Simulados", msg: `Erro ao buscar simulados: ${errSim.message}` });
  } else {
    console.log(`   Total de Simulados: ${simulados.length}`);
  }

  // --- 6. AUDITORIA DE STORAGE BUCKETS ---
  console.log("\n6. Auditando Storage Buckets...");
  const { data: buckets, error: errBuckets } = await supabase.storage.listBuckets();
  if (errBuckets) {
    findings.push({ severity: "HIGH", module: "Storage", msg: `Erro ao listar buckets: ${errBuckets.message}` });
  } else {
    console.log(`   Buckets encontrados: ${buckets.map(b => b.name).join(", ")}`);
    const requiredBuckets = ["materiais-assuntos", "editais"];
    for (const req of requiredBuckets) {
      if (!buckets.some(b => b.name === req)) {
        findings.push({ severity: "HIGH", module: "Storage", msg: `Bucket obrigatório '${req}' não encontrado no Supabase Storage` });
      }
    }
  }

  // --- 7. AUDITORIA DAS TABELAS DE MENTORIA ---
  console.log("\n7. Auditando Tabelas de Mentoria e Ciclo de Estudos...");
  const mentoriaTables = [
    "concursos_alvo",
    "metas_estudo",
    "plano_ciclos",
    "ciclo_blocos",
    "ciclo_progresso_diario",
    "caderno_erros",
    "revisoes_programadas",
    "respostas_usuarios",
  ];

  for (const t of mentoriaTables) {
    const { data, error } = await supabase.from(t).select("id").limit(1);
    if (error) {
      findings.push({ severity: "HIGH", module: "Mentoria", msg: `Tabela '${t}' indisponível ou com erro: ${error.message}` });
    } else {
      console.log(`   ✓ Tabela '${t}' acessível`);
    }
  }

  console.log("\n==================================================");
  console.log("📋 RELATÓRIO DE APONTAMENTOS DA AUDITORIA");
  console.log("==================================================");

  if (findings.length === 0) {
    console.log("🎉 NENHUM ERRO OU INCONSISTÊNCIA DETECTADA! O SISTEMA ESTÁ 100% OPERACIONAL.");
  } else {
    console.log(`Total de apontamentos: ${findings.length}\n`);
    for (const f of findings) {
      const badge = f.severity === "CRITICAL" ? "🔴 [CRÍTICO]" : f.severity === "HIGH" ? "🟠 [ALTO]" : f.severity === "MEDIUM" ? "🟡 [MÉDIO]" : "🔵 [BAIXO]";
      console.log(`${badge} [${f.module}] ${f.msg}`);
    }
  }
}

runAudit().catch(console.error);
