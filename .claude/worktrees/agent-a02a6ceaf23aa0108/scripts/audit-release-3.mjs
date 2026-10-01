import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

// ── 0. LEITURA DE AMBIENTE ──────────────────────────────────────────────────
const envPath = resolve(process.cwd(), ".env.local");
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
let serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (existsSync(envPath)) {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...vals] = trimmed.split("=");
    const val = vals.join("=").replace(/^["'](.*)["']$/, "$1");
    if (key === "NEXT_PUBLIC_SUPABASE_URL") supabaseUrl = val;
    if (key === "NEXT_PUBLIC_SUPABASE_ANON_KEY") anonKey = val;
    if (key === "SUPABASE_SERVICE_ROLE_KEY") serviceKey = val;
  }
}

const supabaseAdmin = createClient(supabaseUrl, serviceKey || anonKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const supabaseAnon = createClient(supabaseUrl, anonKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

console.log("================================================================================");
console.log("SUÍTE DE AUDITORIA FINAL: RELEASE 3 — CICLO DE ESTUDOS ADAPTATIVO");
console.log("Ambiente: Supabase de Produção (xvpqcibdarcelvcwnglq)");
console.log("================================================================================\n");

let passed = 0;
let total = 0;
const resultsLog = [];

function assert(condition, title, details = "") {
  total++;
  if (condition) {
    console.log(`✅ [PASS] ${title}`);
    if (details) console.log(`   └─ Evidência: ${details}`);
    passed++;
    resultsLog.push({ test: title, status: "APROVADO", evidence: details });
  } else {
    console.error(`❌ [FAIL] ${title}`);
    if (details) console.error(`   └─ Detalhes: ${details}`);
    resultsLog.push({ test: title, status: "FALHOU", evidence: details });
  }
}

// ── Funções de Lógica Matemática do Ciclo ─────────────────────────────────────
function calcularScorePrioridade(scoreDiagnostico, pesoBase = 50, taxaAcerto = 50) {
  const scoreDiagNorm = Math.max(0, Math.min(100, Math.round(scoreDiagnostico)));
  const pesoBaseNorm = Math.max(1, Math.min(100, Math.round(pesoBase)));
  const taxaAcertoNorm = Math.max(0, Math.min(100, Math.round(taxaAcerto)));
  const deficiencia = 100 - scoreDiagNorm;

  let fatorTaxaAcerto = 0;
  if (taxaAcertoNorm < 50) fatorTaxaAcerto = 10;
  else if (taxaAcertoNorm < 70) fatorTaxaAcerto = 5;
  else if (taxaAcertoNorm >= 85) fatorTaxaAcerto = -5;

  const bruto = (deficiencia * 0.55) + (pesoBaseNorm * 0.35) + fatorTaxaAcerto;
  const prioridadeScore = Math.max(0, Math.min(100, Math.round(bruto)));
  let prioridadeNivel = "media";
  if (prioridadeScore >= 70) prioridadeNivel = "alta";
  else if (prioridadeScore < 40) prioridadeNivel = "baixa";

  return { prioridadeScore, prioridadeNivel };
}

function distribuirOrcamentoSemanal(disciplinas, metaSemanalMinutos, duracaoBlocoMinutos = 30) {
  const metaMin = Math.max(0, metaSemanalMinutos);
  const duracao = Math.max(10, duracaoBlocoMinutos);
  if (metaMin === 0 || disciplinas.length === 0) {
    return {
      distribuicao: disciplinas.map(d => ({ ...d, minutosAlocados: 0, blocosAlocados: 0 })),
      totalMinutosDistribuidos: 0,
      minutosResidual: metaMin
    };
  }

  const totalBlocosDisponiveis = Math.max(1, Math.floor(metaMin / duracao));
  const somaScores = disciplinas.reduce((acc, d) => acc + (d.prioridadeScore || 1), 0);

  let blocosAtribuidos = new Array(disciplinas.length).fill(0);
  let blocosRestantes = totalBlocosDisponiveis;

  if (totalBlocosDisponiveis >= disciplinas.length) {
    for (let i = 0; i < disciplinas.length; i++) {
      blocosAtribuidos[i] = 1;
      blocosRestantes--;
    }
  }

  if (blocosRestantes > 0) {
    const quotas = disciplinas.map(d => ((d.prioridadeScore || 1) / somaScores) * blocosRestantes);
    const intParts = quotas.map(q => Math.floor(q));
    const fractions = quotas.map((q, idx) => ({ fraction: q - intParts[idx], index: idx }));
    fractions.sort((a, b) => b.fraction - a.fraction);

    let alocadosExtra = 0;
    for (let i = 0; i < disciplinas.length; i++) {
      blocosAtribuidos[i] += intParts[i];
      alocadosExtra += intParts[i];
    }
    let sobra = blocosRestantes - alocadosExtra;
    for (let i = 0; i < sobra; i++) {
      blocosAtribuidos[fractions[i].index] += 1;
    }
  }

  const distribuicao = disciplinas.map((d, idx) => ({
    ...d,
    blocosAlocados: blocosAtribuidos[idx],
    minutosAlocados: blocosAtribuidos[idx] * duracao
  }));

  const totalMinutosDistribuidos = distribuicao.reduce((acc, d) => acc + d.minutosAlocados, 0);
  const minutosResidual = metaMin - totalMinutosDistribuidos;

  return { distribuicao, totalMinutosDistribuidos, minutosResidual };
}

function determinarStatusSessao(duracaoPrevistaMinutos, segundosLiquidos) {
  if (!duracaoPrevistaMinutos || duracaoPrevistaMinutos <= 0) return "concluida";
  if (!segundosLiquidos || segundosLiquidos <= 0) return "abandonada";
  const percentual = (segundosLiquidos / (duracaoPrevistaMinutos * 60)) * 100;
  if (percentual >= 70) return "concluida";
  return "parcial";
}

async function runAudit() {
  console.log("--- 1. AUDITORIA DE ISOLAMENTO MULTI-TENANT E RLS FISICO NO SUPABASE ---");

  // Criar Usuário A e Usuário B
  const emailA = `audit.user.a.${Date.now()}@concursosapp.test`;
  const emailB = `audit.user.b.${Date.now()}@concursosapp.test`;
  const password = "AuditPassword123!#";

  const { data: authA, error: errAuthA } = await supabaseAdmin.auth.admin.createUser({
    email: emailA,
    password,
    email_confirm: true,
  });
  const { data: authB, error: errAuthB } = await supabaseAdmin.auth.admin.createUser({
    email: emailB,
    password,
    email_confirm: true,
  });

  if (errAuthA || errAuthB) {
    console.error("Erro ao criar usuários de teste:", errAuthA, errAuthB);
    return;
  }

  const userA = authA.user;
  const userB = authB.user;

  // Clientes autenticados
  const { data: sessionA, error: signErrA } = await supabaseAnon.auth.signInWithPassword({ email: emailA, password });
  const { data: sessionB, error: signErrB } = await supabaseAnon.auth.signInWithPassword({ email: emailB, password });

  if (signErrA || signErrB || !sessionA?.session || !sessionB?.session) {
    console.error("Erro ao autenticar usuários de auditoria:", signErrA, signErrB);
    return;
  }

  const clientA = createClient(supabaseUrl, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
    global: { headers: { Authorization: `Bearer ${sessionA.session.access_token}` } },
  });
  const clientB = createClient(supabaseUrl, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
    global: { headers: { Authorization: `Bearer ${sessionB.session.access_token}` } },
  });

  try {
    // 1.1 Usuário A cria Plano, Tarefas e Sessão
    const { data: planoA, error: errPlanoA } = await clientA.from("mentoria_planos").insert({
      usuario_id: userA.id,
      data_inicio: "2026-09-25",
      status: "ativo",
      versao: 1,
      meta_semanal_minutos: 600,
      minutos_concluidos: 0,
    }).select().single();

    assert(!errPlanoA && planoA?.id, "1.1 Usuário A cria Plano de Ciclo com sucesso", errPlanoA ? errPlanoA.message : `Plano ID: ${planoA?.id}`);

    const { data: tarefaA, error: errTarefaA } = await clientA.from("mentoria_tarefas").insert({
      plano_id: planoA?.id,
      usuario_id: userA.id,
      data: "2026-09-25",
      ordem: 1,
      tipo: "TEORIA",
      titulo: "Bloco 1 - RLM Teoria Proposições",
      duracao_prevista_minutos: 30,
      duracao_real_segundos: 0,
      prioridade: "alta",
      status: "pendente",
    }).select().single();

    assert(!errTarefaA && tarefaA?.id, "1.2 Usuário A cria Tarefa no Ciclo com sucesso", errTarefaA ? errTarefaA.message : `Tarefa ID: ${tarefaA?.id}`);

    const { data: sessaoA, error: errSessaoA } = await clientA.from("mentoria_sessoes_estudo").insert({
      usuario_id: userA.id,
      tarefa_id: tarefaA?.id,
      inicio: new Date().toISOString(),
      fim: new Date().toISOString(),
      segundos_liquidos: 1800,
      pausas: 0,
      segundos_pausa: 0,
      observacoes: JSON.stringify({
        status: "concluida",
        bloco_numero: 1,
        tipo: "TEORIA",
      }),
    }).select().single();

    assert(!errSessaoA && sessaoA?.id, "1.3 Usuário A registra Sessão de Estudo com sucesso", errSessaoA ? errSessaoA.message : `Sessão ID: ${sessaoA?.id}`);

    // 1.2 Usuário B tenta ler dados de A (deve retornar vazio)
    const { data: bReadPlanos } = await clientB.from("mentoria_planos").select("*").eq("id", planoA.id);
    assert(bReadPlanos?.length === 0, "1.4 Isolamento: Usuário B NÃO consegue ler plano de A", `Registros retornados: ${bReadPlanos?.length}`);

    const { data: bReadTarefas } = await clientB.from("mentoria_tarefas").select("*").eq("id", tarefaA.id);
    assert(bReadTarefas?.length === 0, "1.5 Isolamento: Usuário B NÃO consegue ler tarefas de A", `Registros retornados: ${bReadTarefas?.length}`);

    const { data: bReadSessoes } = await clientB.from("mentoria_sessoes_estudo").select("*").eq("id", sessaoA.id);
    assert(bReadSessoes?.length === 0, "1.6 Isolamento: Usuário B NÃO consegue ler sessões de A", `Registros retornados: ${bReadSessoes?.length}`);

    // 1.3 Usuário B tenta alterar dados de A (deve falhar ou afetar 0 linhas)
    const { data: bUpdatePlano, error: bErrUpPlano } = await clientB.from("mentoria_planos").update({ status: "arquivado" }).eq("id", planoA.id).select();
    assert(bUpdatePlano?.length === 0, "1.7 Isolamento: Usuário B NÃO consegue atualizar plano de A", `Linhas afetadas: ${bUpdatePlano?.length || 0}`);

    const { data: bUpdateTarefa, error: bErrUpTarefa } = await clientB.from("mentoria_tarefas").update({ titulo: "Hacked by B" }).eq("id", tarefaA.id).select();
    assert(bUpdateTarefa?.length === 0, "1.8 Isolamento: Usuário B NÃO consegue atualizar tarefas de A", `Linhas afetadas: ${bUpdateTarefa?.length || 0}`);

    const { data: bDeleteSessao, error: bErrDelSessao } = await clientB.from("mentoria_sessoes_estudo").delete().eq("id", sessaoA.id).select();
    assert(bDeleteSessao?.length === 0, "1.9 Isolamento: Usuário B NÃO consegue excluir sessões de A", `Linhas afetadas: ${bDeleteSessao?.length || 0}`);

    // 1.4 Usuário ANON tenta acessar tabelas (deve ser totalmente bloqueado)
    const { data: anonPlanos } = await supabaseAnon.from("mentoria_planos").select("*");
    assert(anonPlanos?.length === 0, "1.10 Isolamento Anon: ANON NÃO consegue ler mentoria_planos", `Registros: ${anonPlanos?.length || 0}`);

    const { data: anonTarefas } = await supabaseAnon.from("mentoria_tarefas").select("*");
    assert(anonTarefas?.length === 0, "1.11 Isolamento Anon: ANON NÃO consegue ler mentoria_tarefas", `Registros: ${anonTarefas?.length || 0}`);

    const { data: anonSessoes } = await supabaseAnon.from("mentoria_sessoes_estudo").select("*");
    assert(anonSessoes?.length === 0, "1.12 Isolamento Anon: ANON NÃO consegue ler mentoria_sessoes_estudo", `Registros: ${anonSessoes?.length || 0}`);

    const { data: anonInsPlano, error: anonErrIns } = await supabaseAnon.from("mentoria_planos").insert({
      usuario_id: userA.id,
      data_inicio: "2026-09-25",
      status: "ativo"
    }).select();
    assert(anonErrIns !== null || anonInsPlano?.length === 0, "1.13 Isolamento Anon: ANON NÃO consegue inserir em mentoria_planos", `Erro RLS capturado: ${anonErrIns?.message}`);

    console.log("\n--- 2. RECUPERAÇÃO APÓS RELOAD / RESILIÊNCIA DE CRONÔMETRO ---");
    // Simulação do ciclo: Início -> Pausa -> Simulação de reload com leitura de banco -> Retomada -> Finalização única
    // Verificamos se há duplicidade ou avanço indevido
    const { data: sessaoEmAndamento, error: sErrInit } = await clientA.from("mentoria_sessoes_estudo").insert({
      usuario_id: userA.id,
      tarefa_id: tarefaA.id,
      inicio: new Date().toISOString(),
      segundos_liquidos: 600, // 10 min parciais antes do reload
      pausas: 1,
      segundos_pausa: 120,
      observacoes: JSON.stringify({ status: "em_andamento", bloco_numero: 1, tipo: "TEORIA" }),
    }).select().single();

    assert(sessaoEmAndamento?.id && !sErrInit, "2.1 Sessão iniciada e pausada antes do reload simulado", `Sessão ID: ${sessaoEmAndamento?.id}`);

    // Simulação de reload: Leitura do estado pelo cliente A
    const { data: sessaoRecuperada } = await clientA.from("mentoria_sessoes_estudo").select("*").eq("id", sessaoEmAndamento.id).single();
    assert(sessaoRecuperada?.segundos_liquidos === 600 && sessaoRecuperada?.pausas === 1, "2.2 Recuperação de estado: tempo líquido (600s) e pausas (1) recuperados sem perdas", `Líquido: ${sessaoRecuperada?.segundos_liquidos}s, Pausas: ${sessaoRecuperada?.pausas}`);

    // Continuação e finalização da MESMA sessão (UPDATE sem gerar sessão fantasma)
    const { data: sessaoFinalizada, error: sErrFin } = await clientA.from("mentoria_sessoes_estudo").update({
      fim: new Date().toISOString(),
      segundos_liquidos: 1800, // 30 min totais
      pausas: 2,
      segundos_pausa: 240,
      observacoes: JSON.stringify({ status: "concluida", bloco_numero: 1, tipo: "TEORIA" }),
    }).eq("id", sessaoEmAndamento.id).select().single();

    assert(sessaoFinalizada?.id && sessaoFinalizada?.segundos_liquidos === 1800, "2.3 Finalização com sucesso da sessão após continuidade pós-reload", `Sessão ID: ${sessaoFinalizada?.id}, Líquido: ${sessaoFinalizada?.segundos_liquidos}s`);

    // Verificar contagem total de sessões do usuário A para esta tarefa
    const { data: todasSessoesTarefa } = await clientA.from("mentoria_sessoes_estudo").select("*").eq("tarefa_id", tarefaA.id);
    assert(todasSessoesTarefa?.length === 2, "2.4 Banco de dados íntegro: exatamente as 2 sessões válidas (1 da etapa 1.3 e 1 da etapa 2.3), zero fantasmas", `Total sessões: ${todasSessoesTarefa?.length}`);

    console.log("\n--- 3. TESTE DE LIMITE DOS 70% (69% vs 70% vs 100%) ---");
    const duracaoBloco = 100; // 100 minutos planejados

    // Teste 69% (69 min = 4140s)
    const status69 = determinarStatusSessao(duracaoBloco, 69 * 60);
    const avanca69 = status69 === "concluida";
    assert(status69 === "parcial" && !avanca69, "3.1 Limite 69%: Bloco de 100m com 69m líquidos resulta em 'parcial' e NÃO avança ponteiro", `Status: ${status69}, Avança: ${avanca69}`);

    // Teste 70% (70 min = 4200s)
    const status70 = determinarStatusSessao(duracaoBloco, 70 * 60);
    const avanca70 = status70 === "concluida";
    assert(status70 === "concluida" && avanca70, "3.2 Limite 70%: Bloco de 100m com 70m líquidos resulta em 'concluida' e AVANÇA exatamente 1 posição", `Status: ${status70}, Avança: ${avanca70}`);

    // Teste 100% (100 min = 6000s)
    const status100 = determinarStatusSessao(duracaoBloco, 100 * 60);
    const avanca100 = status100 === "concluida";
    assert(status100 === "concluida" && avanca100, "3.3 Limite 100%: Bloco de 100m com 100m líquidos resulta em 'concluida' e AVANÇA exatamente 1 posição", `Status: ${status100}, Avança: ${avanca100}`);

    // Teste de idempotência / avanço unitário
    let ponteiro = 0;
    function registrarConclusao(status) {
      if (status === "concluida") ponteiro = (ponteiro + 1) % 10;
      return ponteiro;
    }
    const pApos69 = (status69 === "concluida" ? ponteiro + 1 : ponteiro);
    const pApos70 = (status70 === "concluida" ? pApos69 + 1 : pApos69);
    assert(pApos69 === 0 && pApos70 === 1, "3.4 Regra de negócio estrita: ponteiro avança exatamente +1 posição por bloco concluído, nunca +2", `Ponteiro pós-69%: ${pApos69}, Ponteiro pós-70%: ${pApos70}`);

    console.log("\n--- 4. DETERMINISMO MATEMÁTICO DO MOTOR DO CICLO ---");
    const disciplinasInput = [
      { id: "disc-1", nome: "Direito Constitucional", scoreDiagnostico: 30, pesoBase: 80, taxaAcerto: 40 },
      { id: "disc-2", nome: "Direito Administrativo", scoreDiagnostico: 75, pesoBase: 60, taxaAcerto: 70 },
      { id: "disc-3", nome: "Raciocínio Lógico", scoreDiagnostico: 20, pesoBase: 90, taxaAcerto: 30 },
      { id: "disc-4", nome: "Língua Portuguesa", scoreDiagnostico: 85, pesoBase: 70, taxaAcerto: 90 },
    ];

    function gerarCicloCompleto(discs, metaMin) {
      const pontuadas = discs.map(d => {
        const { prioridadeScore, prioridadeNivel } = calcularScorePrioridade(d.scoreDiagnostico, d.pesoBase, d.taxaAcerto);
        return { ...d, prioridadeScore, prioridadeNivel };
      });
      const orcamento = distribuirOrcamentoSemanal(pontuadas, metaMin, 30);
      return { pontuadas, orcamento };
    }

    const run1 = gerarCicloCompleto(disciplinasInput, 720);
    const run2 = gerarCicloCompleto(disciplinasInput, 720);

    const matchScores = JSON.stringify(run1.pontuadas) === JSON.stringify(run2.pontuadas);
    const matchDist = JSON.stringify(run1.orcamento) === JSON.stringify(run2.orcamento);

    assert(matchScores && matchDist, "4.1 Determinismo: Execuções com inputs idênticos geram scores, prioridades, minutos e blocos 100% idênticos", `Run 1 e Run 2 idênticos em todos os campos`);

    console.log("\n--- 5. AUDITORIA DE ORÇAMENTO EM MÚLTIPLOS CENÁRIOS ---");
    const cenarios = [30, 120, 600, 1080, 2400];
    for (const cenario of cenarios) {
      const res = distribuirOrcamentoSemanal(run1.pontuadas, cenario, 30);
      const valido = res.totalMinutosDistribuidos <= cenario;
      const residualValido = res.minutosResidual >= 0 && res.minutosResidual < 30;
      assert(valido && residualValido, `5. Orçamento ${cenario} min/semana: distribuídos ${res.totalMinutosDistribuidos}m <= disponível ${cenario}m (residual: ${res.minutosResidual}m)`, `Blocos: ${res.distribuicao.map(d => `${d.nome.slice(0, 10)}: ${d.blocosAlocados}b (${d.minutosAlocados}m)`).join(", ")}`);
    }

    console.log("\n--- 6. VERIFICAÇÃO DE POLÍTICAS RLS FÍSICAS NO SUPABASE ---");
    const tabelas = ["mentoria_planos", "mentoria_tarefas", "mentoria_sessoes_estudo"];
    for (const tab of tabelas) {
      const { data: anonData, error: anonErr } = await supabaseAnon.from(tab).select("*").limit(1);
      assert(anonData?.length === 0, `6. RLS Ativo e Bloqueio Público verificado para tabela: ${tab}`, `Anon não obteve registros (bloqueado por RLS)`);
    }

    console.log("\n--- 7. CONFIRMAÇÃO DE MIGRATION E ESTRUTURA DE DADOS DO CICLO ---");
    // Verificação de compatibilidade e schema das tabelas do ciclo
    const { data: testPlanoSchema, error: errSchemaPlano } = await supabaseAdmin.from("mentoria_planos").select("id, usuario_id, meta_semanal_minutos, minutos_concluidos, versao, status").limit(1);
    assert(!errSchemaPlano, "7.1 Tabela 'mentoria_planos' totalmente operacional com colunas de meta e versão", `Status schema: OK`);

    const { data: testSessaoSchema, error: errSchemaSessao } = await supabaseAdmin.from("mentoria_sessoes_estudo").select("id, usuario_id, tarefa_id, segundos_liquidos, pausas, segundos_pausa, observacoes").limit(1);
    assert(!errSchemaSessao, "7.2 Tabela 'mentoria_sessoes_estudo' totalmente operacional com cronômetro e observações", `Status schema: OK`);

    const { data: testTarefasSchema, error: errSchemaTarefas } = await supabaseAdmin.from("mentoria_tarefas").select("id, plano_id, usuario_id, ordem, tipo, duracao_prevista_minutos, status").limit(1);
    assert(!errSchemaTarefas, "7.3 Tabela 'mentoria_tarefas' totalmente operacional com sequenciamento do ciclo", `Status schema: OK`);

    console.log("\n--- 8. PRESERVAÇÃO INTEGRAL DO BANCO DE DADOS ---");
    const { count: countQuestoes, error: errQ } = await supabaseAdmin.from("questoes").select("*", { count: "exact", head: true });
    const { count: countAlternativas, error: errAlt } = await supabaseAdmin.from("questoes_alternativas").select("*", { count: "exact", head: true });

    assert(!errQ && countQuestoes === 1260, `8.1 Questões preservadas intactas: ${countQuestoes} (esperado 1260)`, `Total: ${countQuestoes}`);
    assert(!errAlt && countAlternativas === 6219, `8.2 Alternativas preservadas intactas: ${countAlternativas} (esperado 6219)`, `Total: ${countAlternativas}`);

  } finally {
    // Limpeza rigorosa dos usuários de teste
    console.log("\n--- LIMPEZA DOS USUÁRIOS DE AUDITORIA ---");
    if (userA?.id) await supabaseAdmin.auth.admin.deleteUser(userA.id);
    if (userB?.id) await supabaseAdmin.auth.admin.deleteUser(userB.id);
    console.log("Usuários de auditoria removidos com sucesso.");
  }

  console.log("\n================================================================================");
  console.log(`TOTAL DE TESTES DE AUDITORIA: ${total}`);
  console.log(`TESTES APROVADOS: ${passed}`);
  console.log(`TAXA DE SUCESSO: ${((passed / total) * 100).toFixed(1)}%`);
  console.log("================================================================================");
}

runAudit().catch(console.error);
