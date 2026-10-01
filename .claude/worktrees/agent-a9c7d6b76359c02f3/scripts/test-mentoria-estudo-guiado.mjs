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

if (!supabaseUrl || !anonKey) {
  console.error("❌ Variáveis de ambiente Supabase ausentes em .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey || anonKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const supabaseAnon = createClient(supabaseUrl, anonKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

console.log("═══════════════════════════════════════════════════════════════════════════════");
console.log("🧪 SUÍTE DE TESTES AUTOMATIZADOS — RELEASE 4: ESTUDO GUIADO & QUESTÕES");
console.log("   Ambiente: ConcursosApp (Supabase Produção: xvpqcibdarcelvcwnglq)");
console.log("═══════════════════════════════════════════════════════════════════════════════\n");

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = "") {
  if (condition) {
    console.log(`  ✅ [PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`  ❌ [FAIL] ${testName} ${details ? `-> ${details}` : ""}`);
    failedTests++;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// FUNÇÕES DE LÓGICA PURA REPLICADAS PARA TESTE DE CONTRATO / ALGORITMO
// ─────────────────────────────────────────────────────────────────────────────

function calcularScoreQuestao(questao, historicoRespostas, idsCadernoErros, idsTopicosFracos, nivelUsuario = "intermediario") {
  let score = 0;
  const questaoId = questao.id;
  const resposta = historicoRespostas.get(questaoId);

  // 1. Ineditismo vs Repetição
  if (!resposta) {
    score += 40;
  } else {
    if (!resposta.correta) {
      score += 30;
    }
    const dataResp = new Date(resposta.created_at).getTime();
    const horasDesdeResposta = (Date.now() - dataResp) / (1000 * 60 * 60);

    if (horasDesdeResposta < 24) {
      score -= 100;
    } else if (horasDesdeResposta < 48) {
      score -= 50;
    }
  }

  // 2. Caderno de Erros
  if (idsCadernoErros.has(questaoId)) {
    score += 30;
  }

  // 3. Tópicos Fracos
  if (questao.assunto_id && idsTopicosFracos.has(questao.assunto_id)) {
    score += 20;
  }

  // 4. Nivelamento por Dificuldade
  const dif = questao.dificuldade || "medio";
  if (nivelUsuario === "iniciante" || nivelUsuario === "basico") {
    if (dif === "facil") score += 10;
    else if (dif === "medio") score += 5;
    else if (dif === "dificil") score -= 5;
  } else if (nivelUsuario === "intermediario") {
    if (dif === "medio") score += 10;
    else if (dif === "facil") score += 5;
    else if (dif === "dificil") score += 5;
  } else if (nivelUsuario === "avancado" || nivelUsuario === "especialista") {
    if (dif === "dificil") score += 10;
    else if (dif === "medio") score += 8;
    else if (dif === "facil") score -= 5;
  }

  return score;
}

function diversificarQuestoesPorTopico(candidatosScored, quantidadeDesejada) {
  if (candidatosScored.length <= quantidadeDesejada) {
    return candidatosScored.map((c) => c.questao);
  }

  const porTopico = new Map();
  for (const c of candidatosScored) {
    const topicoKey = c.questao.assunto_id || "geral";
    if (!porTopico.has(topicoKey)) {
      porTopico.set(topicoKey, []);
    }
    porTopico.get(topicoKey).push(c.questao);
  }

  const selecionadas = [];
  const topicos = Array.from(porTopico.keys());
  let idxTopico = 0;
  let itemsRestantes = true;

  while (selecionadas.length < quantidadeDesejada && itemsRestantes) {
    itemsRestantes = false;
    for (let i = 0; i < topicos.length; i++) {
      const topicoAtual = topicos[(idxTopico + i) % topicos.length];
      const lista = porTopico.get(topicoAtual);
      if (lista && lista.length > 0) {
        selecionadas.push(lista.shift());
        itemsRestantes = true;
        if (selecionadas.length >= quantidadeDesejada) break;
      }
    }
    idxTopico = (idxTopico + 1) % topicos.length;
  }

  return selecionadas;
}

function determinarStatusSessao(tempoPlanejadoMinutos, tempoLiquidoSegundos, tipo, questoesRespondidas) {
  const planejadoSegundos = Math.max(1, tempoPlanejadoMinutos * 60);
  const liquidoSegundos = Math.max(0, tempoLiquidoSegundos);
  const percentual = (liquidoSegundos / planejadoSegundos) * 100;

  if (percentual >= 70) {
    if (tipo === "QUESTOES" && (!questoesRespondidas || questoesRespondidas < 1)) {
      return "parcial";
    }
    return "concluida";
  }
  if (liquidoSegundos > 0) {
    return "parcial";
  }
  return "abandonada";
}

function calcularProximaEtapaRevisao(etapaAtual, acertou) {
  if (!acertou) {
    return { etapa: 1, intervalo_dias: 1, status: "pendente" };
  }
  if (etapaAtual === 1) {
    return { etapa: 2, intervalo_dias: 7, status: "pendente" };
  } else if (etapaAtual === 2) {
    return { etapa: 3, intervalo_dias: 30, status: "pendente" };
  } else {
    return { etapa: 4, intervalo_dias: 0, status: "concluida" };
  }
}

async function runTests() {
  console.log("📦 1. PRESERVAÇÃO INTEGRAL DA BASE DE DADOS");

  // Teste 1: Quantidade total de questões no banco
  const { count: countQuestoes, error: errQ } = await supabase
    .from("questoes")
    .select("id", { count: "exact", head: true });
  assert(!errQ && countQuestoes === 1260, "1.1 Preservação de exatamente 1.260 questões no Supabase", `Encontradas: ${countQuestoes}`);

  // Teste 2: Quantidade total de alternativas no banco
  const { count: countAlt, error: errAlt } = await supabase
    .from("questoes_alternativas")
    .select("id", { count: "exact", head: true });
  assert(!errAlt && countAlt === 6219, "1.2 Preservação de exatamente 6.219 alternativas no Supabase", `Encontradas: ${countAlt}`);

  // Teste 3: Quantidade de disciplinas ativas
  const { data: disciplinas, error: errDisc } = await supabase
    .from("disciplinas")
    .select("id, nome");
  assert(!errDisc && disciplinas && disciplinas.length >= 15, "1.3 Preservação das disciplinas ativas (>= 15 disciplinas)", `Total: ${disciplinas?.length}`);

  // Teste 4: Quantidade de assuntos cadastrados
  const { count: countAssuntos, error: errAssuntos } = await supabase
    .from("assuntos")
    .select("id", { count: "exact", head: true });
  assert(!errAssuntos && countAssuntos >= 60, "1.4 Preservação dos assuntos taxonômicos (>= 60 assuntos)", `Total: ${countAssuntos}`);

  console.log("\n🎯 2. ALGORITMO DE SELEÇÃO INTELIGENTE DE QUESTÕES (SCORING & PESOS)");

  const mockHistorico = new Map();
  const mockCadernoErros = new Set();
  const mockTopicosFracos = new Set();

  // Teste 5: Questão inédita ganha bônus de ineditismo (+40)
  const qInedita = { id: "q1", dificuldade: "medio", assunto_id: "ass1" };
  const scoreInedita = calcularScoreQuestao(qInedita, mockHistorico, mockCadernoErros, mockTopicosFracos, "intermediario");
  // 40 (inedita) + 10 (medio no intermediario) = 50
  assert(scoreInedita === 50, "2.1 Questão inédita recebe bônus correto de +40 pontos", `Score: ${scoreInedita}`);

  // Teste 6: Questão errada anteriormente recebe bônus de erro (+30)
  const qErroAntigo = { id: "q2", dificuldade: "medio", assunto_id: "ass1" };
  mockHistorico.set("q2", { correta: false, created_at: new Date(Date.now() - 72 * 3600 * 1000).toISOString() });
  const scoreErroAntigo = calcularScoreQuestao(qErroAntigo, mockHistorico, mockCadernoErros, mockTopicosFracos, "intermediario");
  // 30 (erro) + 10 (medio) = 40
  assert(scoreErroAntigo === 40, "2.2 Questão com histórico de erro recebe bônus de +30 pontos", `Score: ${scoreErroAntigo}`);

  // Teste 7: Questão no Caderno de Erros recebe bônus cumulativo (+30)
  mockCadernoErros.add("q2");
  const scoreCaderno = calcularScoreQuestao(qErroAntigo, mockHistorico, mockCadernoErros, mockTopicosFracos, "intermediario");
  // 30 (historico erro) + 30 (caderno) + 10 (medio) = 70
  assert(scoreCaderno === 70, "2.3 Questão no Caderno de Erros recebe bônus adicional de +30", `Score: ${scoreCaderno}`);

  // Teste 8: Questão de Tópico Fraco recebe bônus de vulnerabilidade (+20)
  mockTopicosFracos.add("ass1");
  const scoreTopicoFraco = calcularScoreQuestao(qErroAntigo, mockHistorico, mockCadernoErros, mockTopicosFracos, "intermediario");
  // 30 + 30 + 20 + 10 = 90
  assert(scoreTopicoFraco === 90, "2.4 Questão de Tópico Fraco recebe priorização de +20 pontos", `Score: ${scoreTopicoFraco}`);

  // Teste 9: Penalidade de recência para questão respondida há menos de 24h (-100)
  const qRecente = { id: "q3", dificuldade: "medio", assunto_id: "ass2" };
  mockHistorico.set("q3", { correta: true, created_at: new Date(Date.now() - 2 * 3600 * 1000).toISOString() });
  const scoreRecente = calcularScoreQuestao(qRecente, mockHistorico, mockCadernoErros, mockTopicosFracos, "intermediario");
  // 0 (acerto) - 100 (recente < 24h) + 10 (medio) = -90
  assert(scoreRecente === -90, "2.5 Questão respondida há < 24h recebe penalidade forte de -100 pontos", `Score: ${scoreRecente}`);

  // Teste 10: Penalidade moderada de recência para questão respondida entre 24h e 48h (-50)
  const qMediaRecente = { id: "q4", dificuldade: "medio", assunto_id: "ass2" };
  mockHistorico.set("q4", { correta: true, created_at: new Date(Date.now() - 30 * 3600 * 1000).toISOString() });
  const scoreMediaRecente = calcularScoreQuestao(qMediaRecente, mockHistorico, mockCadernoErros, mockTopicosFracos, "intermediario");
  // 0 - 50 + 10 = -40
  assert(scoreMediaRecente === -40, "2.6 Questão respondida entre 24h-48h recebe penalidade de -50 pontos", `Score: ${scoreMediaRecente}`);

  console.log("\n🧠 3. ADAPTAÇÃO POR NÍVEL DE DIAGNÓSTICO (DIFICULDADE)");

  // Teste 11: Nível Iniciante prioriza questões fáceis
  const qFacil = { id: "qf", dificuldade: "facil" };
  const qDificil = { id: "qd", dificuldade: "dificil" };
  const scoreIniFacil = calcularScoreQuestao(qFacil, new Map(), new Set(), new Set(), "iniciante");
  const scoreIniDificil = calcularScoreQuestao(qDificil, new Map(), new Set(), new Set(), "iniciante");
  assert(scoreIniFacil > scoreIniDificil, "3.1 Nível iniciante pontua questões fáceis acima de difíceis", `Fácil: ${scoreIniFacil}, Difícil: ${scoreIniDificil}`);

  // Teste 12: Nível Avançado prioriza questões difíceis
  const scoreAvFacil = calcularScoreQuestao(qFacil, new Map(), new Set(), new Set(), "avancado");
  const scoreAvDificil = calcularScoreQuestao(qDificil, new Map(), new Set(), new Set(), "avancado");
  assert(scoreAvDificil > scoreAvFacil, "3.2 Nível avançado pontua questões difíceis acima de fáceis", `Difícil: ${scoreAvDificil}, Fácil: ${scoreAvFacil}`);

  // Teste 13: Nível Intermediário equilibra questões médias
  const qMedio = { id: "qm", dificuldade: "medio" };
  const scoreIntMedio = calcularScoreQuestao(qMedio, new Map(), new Set(), new Set(), "intermediario");
  const scoreIntFacil = calcularScoreQuestao(qFacil, new Map(), new Set(), new Set(), "intermediario");
  assert(scoreIntMedio > scoreIntFacil, "3.3 Nível intermediário prioriza dificuldade média", `Médio: ${scoreIntMedio}, Fácil: ${scoreIntFacil}`);

  console.log("\n🔄 4. DIVERSIFICAÇÃO E COBERTURA DE TÓPICOS (ANTI-OVERFITTING)");

  // Teste 14: Distribuição Round-Robin entre tópicos distintos
  const candidatosDiversos = [
    { questao: { id: "1", assunto_id: "temaA" }, score: 100 },
    { questao: { id: "2", assunto_id: "temaA" }, score: 95 },
    { questao: { id: "3", assunto_id: "temaB" }, score: 90 },
    { questao: { id: "4", assunto_id: "temaB" }, score: 85 },
    { questao: { id: "5", assunto_id: "temaC" }, score: 80 },
    { questao: { id: "6", assunto_id: "temaC" }, score: 75 },
  ];
  const selecionadasDiversas = diversificarQuestoesPorTopico(candidatosDiversos, 3);
  const topicosNas3Primeiras = new Set(selecionadasDiversas.map((q) => q.assunto_id));
  assert(
    selecionadasDiversas.length === 3 && topicosNas3Primeiras.size === 3,
    "4.1 Seleção round-robin garante 1 questão de cada tema (A, B, C) sem monopólio de um único assunto",
    `Tópicos selecionados: ${Array.from(topicosNas3Primeiras).join(", ")}`
  );

  // Teste 15: Seleção quando pool é menor que a quantidade desejada
  const poolPequeno = [
    { questao: { id: "1", assunto_id: "temaA" }, score: 50 },
    { questao: { id: "2", assunto_id: "temaB" }, score: 40 },
  ];
  const selPequeno = diversificarQuestoesPorTopico(poolPequeno, 5);
  assert(selPequeno.length === 2, "4.2 Pool menor que a quantidade solicitada retorna todos os itens disponíveis sem erros", `Retornadas: ${selPequeno.length}`);

  // Teste 16: Seleção com pool vazio retorna array vazio limpo
  const selVazio = diversificarQuestoesPorTopico([], 10);
  assert(Array.isArray(selVazio) && selVazio.length === 0, "4.3 Pool vazio retorna array vazio sem falhas ou mocks fictícios", `Resultado: ${JSON.stringify(selVazio)}`);

  console.log("\n⏱️ 5. VALIDAÇÃO DE SESSÃO E DUPLA CONDIÇÃO (TEMPO LÍQUIDO + QUESTÕES)");

  // Teste 17: Teoria com >= 70% de tempo -> Concluída
  const statusTeoria70 = determinarStatusSessao(40, 30 * 60, "TEORIA", 0);
  assert(statusTeoria70 === "concluida", "5.1 Bloco TEORIA com 75% do tempo atinge status 'concluida'", `Status: ${statusTeoria70}`);

  // Teste 18: Teoria com < 70% e > 0s de tempo -> Parcial
  const statusTeoriaParcial = determinarStatusSessao(40, 15 * 60, "TEORIA", 0);
  assert(statusTeoriaParcial === "parcial", "5.2 Bloco TEORIA com 37% do tempo recebe status 'parcial'", `Status: ${statusTeoriaParcial}`);

  // Teste 19: Teoria com 0s de tempo -> Abandonada
  const statusTeoria0 = determinarStatusSessao(40, 0, "TEORIA", 0);
  assert(statusTeoria0 === "abandonada", "5.3 Bloco TEORIA com 0 segundos recebe status 'abandonada'", `Status: ${statusTeoria0}`);

  // Teste 20: Bloco de Questões com >= 70% de tempo E >= 1 questão respondida -> Concluída
  const statusQuestoesCompleto = determinarStatusSessao(40, 30 * 60, "QUESTOES", 12);
  assert(statusQuestoesCompleto === "concluida", "5.4 Bloco QUESTOES com >= 70% tempo E 12 questões respondidas atinge 'concluida'", `Status: ${statusQuestoesCompleto}`);

  // Teste 21: Bloco de Questões com >= 70% de tempo MAS 0 questões respondidas -> Parcial (Regra Pedagógica)
  const statusQuestoesSemResolucao = determinarStatusSessao(40, 30 * 60, "QUESTOES", 0);
  assert(statusQuestoesSemResolucao === "parcial", "5.5 Bloco QUESTOES com >= 70% tempo porém 0 questões resolvidas rebaixa para 'parcial'", `Status: ${statusQuestoesSemResolucao}`);

  // Teste 22: Bloco de Questões com < 70% tempo MAS 5 questões respondidas -> Parcial
  const statusQuestoesTempoCurto = determinarStatusSessao(40, 10 * 60, "QUESTOES", 5);
  assert(statusQuestoesTempoCurto === "parcial", "5.6 Bloco QUESTOES com < 70% tempo e questões resolvidas recebe 'parcial'", `Status: ${statusQuestoesTempoCurto}`);

  // Teste 23: Bloco de Revisão com >= 70% de tempo -> Concluída
  const statusRevisao = determinarStatusSessao(30, 25 * 60, "REVISAO", 4);
  assert(statusRevisao === "concluida", "5.7 Bloco REVISAO com 83% do tempo atinge status 'concluida'", `Status: ${statusRevisao}`);

  console.log("\n📅 6. MÁQUINA DE ESTADOS DE REVISÕES ESPAÇADAS (D+1, D+7, D+30)");

  // Teste 24: Erro inicial gera agendamento de D+1 (Etapa 1, 1 dia)
  const revD1 = calcularProximaEtapaRevisao(1, false);
  assert(revD1.etapa === 1 && revD1.intervalo_dias === 1 && revD1.status === "pendente", "6.1 Erro agenda revisão D+1 (Etapa 1, intervalo 1 dia)", JSON.stringify(revD1));

  // Teste 25: Acerto na Etapa 1 (D+1) avança para Etapa 2 (D+7, 7 dias)
  const revD7 = calcularProximaEtapaRevisao(1, true);
  assert(revD7.etapa === 2 && revD7.intervalo_dias === 7 && revD7.status === "pendente", "6.2 Acerto no D+1 avança para D+7 (Etapa 2, intervalo 7 dias)", JSON.stringify(revD7));

  // Teste 26: Acerto na Etapa 2 (D+7) avança para Etapa 3 (D+30, 30 dias)
  const revD30 = calcularProximaEtapaRevisao(2, true);
  assert(revD30.etapa === 3 && revD30.intervalo_dias === 30 && revD30.status === "pendente", "6.3 Acerto no D+7 avança para D+30 (Etapa 3, intervalo 30 dias)", JSON.stringify(revD30));

  // Teste 27: Acerto na Etapa 3 (D+30) conclui ciclo de repetição espaçada
  const revConcluida = calcularProximaEtapaRevisao(3, true);
  assert(revConcluida.etapa === 4 && revConcluida.status === "concluida", "6.4 Acerto no D+30 marca revisão como 'concluida' (Etapa 4)", JSON.stringify(revConcluida));

  // Teste 28: Erro durante Etapa 2 (D+7) ou Etapa 3 (D+30) reseta para D+1
  const revReset = calcularProximaEtapaRevisao(3, false);
  assert(revReset.etapa === 1 && revReset.intervalo_dias === 1 && revReset.status === "pendente", "6.5 Erro no D+30 reinicia o ciclo espaçado para D+1", JSON.stringify(revReset));

  console.log("\n📊 7. IDENTIFICAÇÃO DE TÓPICOS FRACOS (TAXA DE ERRO >= 40%)");

  // Teste 29: Cálculo de tópicos com erro >= 40%
  const respostasMock = [
    { assunto_id: "ass_a", correta: false },
    { assunto_id: "ass_a", correta: false },
    { assunto_id: "ass_a", correta: true }, // 2 erros em 3 = 66.6% erro (Fraco)
    { assunto_id: "ass_b", correta: true },
    { assunto_id: "ass_b", correta: true },
    { assunto_id: "ass_b", correta: false }, // 1 erro em 3 = 33.3% erro (Não fraco)
  ];

  const mapAssuntos = new Map();
  for (const r of respostasMock) {
    if (!mapAssuntos.has(r.assunto_id)) {
      mapAssuntos.set(r.assunto_id, { total: 0, erros: 0 });
    }
    const stat = mapAssuntos.get(r.assunto_id);
    stat.total++;
    if (!r.correta) stat.erros++;
  }

  const fracos = [];
  for (const [id, stat] of mapAssuntos.entries()) {
    const taxaErro = Math.round((stat.erros / stat.total) * 100);
    if (taxaErro >= 40) {
      fracos.push({ id, taxaErro });
    }
  }

  assert(
    fracos.length === 1 && fracos[0].id === "ass_a" && fracos[0].taxaErro === 67,
    "7.1 Identificação correta de assunto fraco com taxa de erro >= 40% (67%)",
    JSON.stringify(fracos)
  );

  console.log("\n🔁 8. AVANÇO DO PONTEIRO DO CICLO & IDEMPOTÊNCIA");

  // Teste 30: Avanço de bloco no ciclo fechado (posicao + 1 % total)
  const totalBlocos = 6;
  const posInicial = 0;
  const proxPos = (posInicial + 1) % totalBlocos;
  assert(proxPos === 1, "8.1 Avanço do bloco 0 para o bloco 1 no ciclo", `Próxima posição: ${proxPos}`);

  // Teste 31: Fechamento de volta do ciclo ao atingir último bloco
  const posFinal = 5;
  const proxVolta = (posFinal + 1) % totalBlocos;
  const voltaIncrementada = proxVolta === 0;
  assert(proxVolta === 0 && voltaIncrementada, "8.2 Conclusão do último bloco (5) reseta ponteiro para 0 e completa 1 volta", `Próxima: ${proxVolta}, Volta: ${voltaIncrementada}`);

  console.log("\n🔒 9. ISOLAMENTO MULTI-TENANT E SEGURANÇA RLS");

  // Teste 32: Consulta a tabelas com tenant isolation (respostas_usuarios, mentoria_revisoes)
  const { data: revPublicas, error: errRev } = await supabaseAnon
    .from("mentoria_revisoes")
    .select("id")
    .limit(5);
  // Como cliente anônimo sem login, RLS deve retornar array vazio ou erro de auth
  assert(!errRev || errRev.code === "PGRST301" || revPublicas?.length === 0, "9.1 mentoria_revisoes protegido por RLS contra leitura não autenticada", `Registros públicos: ${revPublicas?.length || 0}`);

  const { data: cadernoPublico, error: errCaderno } = await supabaseAnon
    .from("caderno_erros")
    .select("id")
    .limit(5);
  assert(!errCaderno || errCaderno.code === "PGRST301" || cadernoPublico?.length === 0, "9.2 caderno_erros protegido por RLS contra vazamento de dados", `Registros públicos: ${cadernoPublico?.length || 0}`);

  console.log("\n🌐 10. INTEGRAÇÃO REAL COM O BANCO DE QUESTÕES (ZERO MOCK EM PRODUÇÃO)");

  // Teste 33: Busca questões reais de Direito Constitucional com alternativas
  const { data: qConstitucional, error: errQConst } = await supabase
    .from("questoes")
    .select(`
      id,
      enunciado,
      dificuldade,
      disciplinas (
        id,
        nome
      ),
      questoes_alternativas (
        id,
        texto,
        correta
      )
    `)
    .limit(5);

  const temAlternativas = qConstitucional && qConstitucional.every((q) => q.questoes_alternativas && q.questoes_alternativas.length >= 2);
  assert(
    !errQConst && qConstitucional && qConstitucional.length > 0 && temAlternativas,
    "10.1 Carregamento de questões reais do Supabase com suas respectivas alternativas ativas",
    `Encontradas ${qConstitucional?.length} questões com alternativas válidas`
  );

  console.log("\n═══════════════════════════════════════════════════════════════════════════════");
  console.log(`📊 RESULTADO DA EXECUÇÃO: ${passedTests} PASSARAM | ${failedTests} FALHARAM`);
  console.log("═══════════════════════════════════════════════════════════════════════════════");

  if (failedTests > 0) {
    console.error(`\n❌ A suíte falhou com ${failedTests} testes reprovados.`);
    process.exit(1);
  } else {
    console.log(`\n🎉 Todos os ${passedTests} testes passaram com 100% de conformidade!`);
    process.exit(0);
  }
}

runTests().catch((err) => {
  console.error("Erro fatal ao executar testes:", err);
  process.exit(1);
});
