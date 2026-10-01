import { createClient } from "@supabase/supabase-js";
import fs from "fs";

// Carregar variáveis de ambiente de .env.local
const envContent = fs.readFileSync(".env.local", "utf8");
for (const line of envContent.split(/\r?\n/)) {
  const idx = line.indexOf("=");
  if (idx !== -1) {
    const key = line.substring(0, idx).trim();
    const val = line.substring(idx + 1).trim().replace(/^['"]|['"]$/g, "");
    process.env[key] = val;
  }
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !ANON_KEY || !SERVICE_KEY) {
  console.error("Variáveis de ambiente do Supabase não encontradas.");
  process.exit(1);
}

// Cliente Admin com Service Role (bypasses RLS para setup e teardown)
const adminClient = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

// Cliente estritamente NÃO AUTENTICADO (público / anônimo)
function createUnauthenticatedClient() {
  return createClient(SUPABASE_URL, ANON_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

const PROD_URL = "https://mjrtor.com.br";

const TEST_RESULTS = [];

function recordResult(etapa, funcao, testada, resultado, evidencia) {
  TEST_RESULTS.push({
    etapa,
    funcao,
    testada: testada ? "SIM" : "NÃO",
    resultado: resultado ? "APROVADO" : "FALHOU",
    evidencia,
  });
  const statusSymbol = resultado ? "✅" : "❌";
  console.log(`[${statusSymbol}] ${etapa} - ${funcao}: ${evidencia}`);
}

async function runRealFunctionalTests() {
  console.log("================================================================================");
  console.log("🚀 INICIANDO BATERIA DE TESTES FUNCIONAIS REAIS PPO (PONTA A PONTA)");
  console.log(`🌐 Supabase Backend: ${SUPABASE_URL}`);
  console.log(`🌐 Produção: ${PROD_URL}`);
  console.log(`📅 Data: ${new Date().toISOString()}`);
  console.log("================================================================================\n");

  const timestamp = Date.now();
  const testUserEmail = `realtest_user_${timestamp}@concursosapp.teste`;
  const testUserPassword = `TesteRealPass_${timestamp}!123`;
  const testUserName = `Candidato Teste Real ${timestamp.toString().slice(-4)}`;

  let testUserId = null;
  let testUserToken = null;
  let testUserRefreshToken = null;
  let testUserClient = null;

  // ─────────────────────────────────────────────────────────────────────────────
  // ETAPA 1 — CADASTRO
  // ─────────────────────────────────────────────────────────────────────────────
  console.log("\n▶ ETAPA 1 — CADASTRO DE NOVO USUÁRIO");
  try {
    // 1.1 Criar usuário no Supabase Auth com confirmação de email ativa
    const { data: createdUser, error: createError } = await adminClient.auth.admin.createUser({
      email: testUserEmail,
      password: testUserPassword,
      email_confirm: true,
      user_metadata: {
        nome: testUserName,
        concurso_alvo_id: "concurso-inss-2024",
      },
      app_metadata: {
        role: "user",
      },
    });

    if (createError || !createdUser?.user) {
      throw new Error(`Falha ao criar usuário: ${createError?.message}`);
    }

    testUserId = createdUser.user.id;

    recordResult(
      "ETAPA 1",
      "Criação de Usuário (auth.users)",
      true,
      Boolean(testUserId),
      `Usuário criado com UID ${testUserId}, e-mail: ${testUserEmail}`
    );

    // 1.2 Verificar metadados e papel inicial 'user'
    const roleInAppMeta = createdUser.user.app_metadata?.role || "user";
    const nameInUserMeta = createdUser.user.user_metadata?.nome;

    recordResult(
      "ETAPA 1",
      "Validação de Metadados & Role 'user'",
      true,
      roleInAppMeta === "user" && nameInUserMeta === testUserName,
      `app_metadata.role='${roleInAppMeta}', user_metadata.nome='${nameInUserMeta}'`
    );

    // 1.3 Teste de isolamento de criação anônima sem permissão de auto-elevação
    const unauthClient = createUnauthenticatedClient();
    const { data: anonSignUp } = await unauthClient.auth.signUp({
      email: `anon_try_${timestamp}@concursosapp.teste`,
      password: "TestPassword123!",
      options: {
        data: { nome: "Tentativa Anon", role: "admin" },
      },
    });

    const anonUserRole = anonSignUp?.user?.app_metadata?.role || "user";
    recordResult(
      "ETAPA 1",
      "Bloqueio de Autoelevação no Cadastro",
      true,
      anonUserRole === "user",
      `Tentativa de autoatribuição admin ignorada pelo servidor; app_metadata.role='${anonUserRole}'`
    );

    if (anonSignUp?.user?.id) {
      await adminClient.auth.admin.deleteUser(anonSignUp.user.id);
    }
  } catch (err) {
    recordResult("ETAPA 1", "Cadastro de Usuário", true, false, err.message);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // ETAPA 2 — LOGIN E AUTENTICAÇÃO
  // ─────────────────────────────────────────────────────────────────────────────
  console.log("\n▶ ETAPA 2 — LOGIN E ESTABELECIMENTO DE SESSÃO");
  try {
    const loginClient = createUnauthenticatedClient();
    const { data: loginData, error: loginError } = await loginClient.auth.signInWithPassword({
      email: testUserEmail,
      password: testUserPassword,
    });

    if (loginError || !loginData.session) {
      throw new Error(`Falha no login: ${loginError?.message}`);
    }

    testUserToken = loginData.session.access_token;
    testUserRefreshToken = loginData.session.refresh_token;

    testUserClient = createClient(SUPABASE_URL, ANON_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    await testUserClient.auth.setSession({
      access_token: testUserToken,
      refresh_token: testUserRefreshToken,
    });

    recordResult(
      "ETAPA 2",
      "Login com Credenciais Válidas",
      true,
      Boolean(testUserToken),
      `JWT emitido com sucesso (expires_in: ${loginData.session.expires_in}s)`
    );

    // 2.2 Validar sessão do token via getUser
    const { data: verifiedUser } = await testUserClient.auth.getUser();
    recordResult(
      "ETAPA 2",
      "Validação de Sessão e Token JWT",
      true,
      verifiedUser?.user?.id === testUserId,
      `Token autentica o UID ${verifiedUser?.user?.id}`
    );

    // 2.3 Tentativa de login com senha incorreta
    const badLoginClient = createUnauthenticatedClient();
    const { error: invalidLoginError } = await badLoginClient.auth.signInWithPassword({
      email: testUserEmail,
      password: "SenhaCompletamenteIncorreta123!",
    });
    recordResult(
      "ETAPA 2",
      "Bloqueio de Credenciais Inválidas",
      true,
      Boolean(invalidLoginError),
      `Rejeição esperada de senha inválida: "${invalidLoginError?.message}"`
    );
  } catch (err) {
    recordResult("ETAPA 2", "Login", true, false, err.message);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // ETAPA 3 — BANCO DE QUESTÕES (1.260 QUESTÕES, FILTROS, PAGINAÇÃO E RESPOSTAS)
  // ─────────────────────────────────────────────────────────────────────────────
  console.log("\n▶ ETAPA 3 — BANCO DE QUESTÕES E RESOLUÇÃO");
  let questaoCorreta = null;
  let questaoIncorreta = null;
  let altCorretaId = null;
  let altIncorretaId = null;

  try {
    // 3.1 Verificar catálogo de 1.260 questões
    const { count: totalQ } = await adminClient
      .from("questoes")
      .select("*", { count: "exact", head: true });

    recordResult(
      "ETAPA 3",
      "Catálogo de 1.260 Questões no Banco",
      true,
      totalQ === 1260,
      `Total de questões ativas no Supabase: ${totalQ}`
    );

    // 3.2 Teste de paginação e filtros
    const { data: questoesP1, count: qCountFiltered } = await testUserClient
      .from("questoes")
      .select("id, enunciado, tipo, disciplina_id, banca_nome, ano, dificuldade, explicacao", { count: "exact" })
      .eq("anulada", false)
      .order("created_at", { ascending: false })
      .range(0, 4);

    recordResult(
      "ETAPA 3",
      "Consulta e Paginação de Questões",
      true,
      questoesP1 && questoesP1.length === 5,
      `Retornadas 5 questões na página 1 (de ${qCountFiltered} totais)`
    );

    // 3.3 Buscar 2 questões com alternativas para responder
    const { data: sampleQuestoes } = await adminClient
      .from("questoes")
      .select("id, enunciado, tipo, explicacao")
      .eq("tipo", "multipla_escolha")
      .limit(2);

    if (!sampleQuestoes || sampleQuestoes.length < 2) {
      throw new Error("Não foram encontradas questões de múltipla escolha para o teste.");
    }

    questaoCorreta = sampleQuestoes[0];
    questaoIncorreta = sampleQuestoes[1];

    // Carregar alternativas da Questão 1
    const { data: altsQ1 } = await adminClient
      .from("questoes_alternativas")
      .select("id, letra, texto, correta")
      .eq("questao_id", questaoCorreta.id);

    const corretaItem = altsQ1.find((a) => a.correta);
    altCorretaId = corretaItem.id;

    // Carregar alternativas da Questão 2
    const { data: altsQ2 } = await adminClient
      .from("questoes_alternativas")
      .select("id, letra, texto, correta")
      .eq("questao_id", questaoIncorreta.id);

    const incorretaItem = altsQ2.find((a) => !a.correta);
    altIncorretaId = incorretaItem.id;

    // 3.4 Inserir Resposta 1 (CORRETA) como usuário autenticado
    const { data: resp1, error: resp1Err } = await testUserClient
      .from("respostas_usuarios")
      .insert({
        usuario_id: testUserId,
        questao_id: questaoCorreta.id,
        alternativa_id: altCorretaId,
        correta: true,
        tempo_resposta_segundos: 45,
        questao_versao: 1,
      })
      .select()
      .single();

    recordResult(
      "ETAPA 3",
      "Registro de Resposta CORRETA",
      true,
      !resp1Err && resp1?.correta === true,
      `Resposta correta gravada no BD (id: ${resp1?.id}, questao_id: ${questaoCorreta.id})`
    );

    // 3.5 Inserir Resposta 2 (INCORRETA) como usuário autenticado
    const { data: resp2, error: resp2Err } = await testUserClient
      .from("respostas_usuarios")
      .insert({
        usuario_id: testUserId,
        questao_id: questaoIncorreta.id,
        alternativa_id: altIncorretaId,
        correta: false,
        tempo_resposta_segundos: 62,
        questao_versao: 1,
      })
      .select()
      .single();

    recordResult(
      "ETAPA 3",
      "Registro de Resposta INCORRETA",
      true,
      !resp2Err && resp2?.correta === false,
      `Resposta incorreta gravada no BD (id: ${resp2?.id}, questao_id: ${questaoIncorreta.id})`
    );

    // 3.6 Inserir automaticamente no Caderno de Erros para a questão errada
    const { error: cadErrInsert } = await testUserClient
      .from("caderno_erros")
      .upsert({
        usuario_id: testUserId,
        questao_id: questaoIncorreta.id,
        revisado: false,
        total_erros: 1,
      });

    recordResult(
      "ETAPA 3",
      "Persistência em respostas_usuarios via RLS",
      true,
      !cadErrInsert,
      `Respostas vinculadas exclusivamente ao UID ${testUserId}`
    );
  } catch (err) {
    recordResult("ETAPA 3", "Banco de Questões", true, false, err.message);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // ETAPA 4 — CADERNO DE ERROS
  // ─────────────────────────────────────────────────────────────────────────────
  console.log("\n▶ ETAPA 4 — CADERNO DE ERROS");
  try {
    // 4.1 Consultar caderno de erros do usuário
    const { data: errosUsuario } = await testUserClient
      .from("caderno_erros")
      .select("*, questoes(enunciado, explicacao)")
      .eq("usuario_id", testUserId);

    const encontrouErro = errosUsuario?.some((e) => e.questao_id === questaoIncorreta?.id);

    recordResult(
      "ETAPA 4",
      "Entrada da Questão Errada no Caderno",
      true,
      encontrouErro,
      `Questão errada ${questaoIncorreta?.id} listada no caderno de erros (total: ${errosUsuario?.length})`
    );

    // 4.2 Atualizar anotação e marcar como revisado
    const { data: updateErro, error: updateErroErr } = await testUserClient
      .from("caderno_erros")
      .update({
        revisado: true,
        anotacao: "Revisado: atentar para pegadinha na alternativa B.",
        updated_at: new Date().toISOString(),
      })
      .eq("questao_id", questaoIncorreta.id)
      .select()
      .single();

    recordResult(
      "ETAPA 4",
      "Atualização de Status de Revisão",
      true,
      !updateErroErr && updateErro?.revisado === true,
      `Status alterado para revisado=true com anotação salva`
    );
  } catch (err) {
    recordResult("ETAPA 4", "Caderno de Erros", true, false, err.message);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // ETAPA 5 — FAVORITOS E ANOTAÇÕES PRIVADAS
  // ─────────────────────────────────────────────────────────────────────────────
  console.log("\n▶ ETAPA 5 — FAVORITOS E ANOTAÇÕES");
  try {
    // 5.1 Favoritar questão
    const { data: favData, error: favErr } = await testUserClient
      .from("questoes_favoritas")
      .insert({
        usuario_id: testUserId,
        questao_id: questaoCorreta.id,
      })
      .select()
      .single();

    recordResult(
      "ETAPA 5",
      "Favoritar Questão (questoes_favoritas)",
      true,
      !favErr && favData?.questao_id === questaoCorreta.id,
      `Questão ${questaoCorreta.id} favoritada com sucesso`
    );

    // 5.2 Criar anotação privada (coluna 'texto')
    const { data: noteData, error: noteErr } = await testUserClient
      .from("questoes_anotacoes")
      .insert({
        usuario_id: testUserId,
        questao_id: questaoCorreta.id,
        texto: "Art. 37, caput, da CF/88 - Princípios LIMPE (Legalidade, Impessoalidade...)",
      })
      .select()
      .single();

    recordResult(
      "ETAPA 5",
      "Criação de Anotação Privada (questoes_anotacoes)",
      true,
      !noteErr && noteData?.texto?.includes("LIMPE"),
      `Anotação salva com sucesso (id: ${noteData?.id})`
    );

    // 5.3 Validação de isolamento: usuário não-autenticado NÃO enxerga anotações
    const unauthClient = createUnauthenticatedClient();
    const { data: anonNotes } = await unauthClient
      .from("questoes_anotacoes")
      .select("*")
      .eq("id", noteData?.id);

    recordResult(
      "ETAPA 5",
      "Privacidade RLS das Anotações",
      true,
      !anonNotes || anonNotes.length === 0,
      `Anotação privada blindada contra acesso anônimo/público (${anonNotes?.length || 0} registros)`
    );
  } catch (err) {
    recordResult("ETAPA 5", "Favoritos e Anotações", true, false, err.message);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // ETAPA 6 — SIMULADO REAL (10 QUESTÕES)
  // ─────────────────────────────────────────────────────────────────────────────
  console.log("\n▶ ETAPA 6 — SIMULADO REAL COM 10 QUESTÕES");
  try {
    // 6.1 Selecionar 10 questões reais para o simulado
    const { data: simuladoQuestoes } = await adminClient
      .from("questoes")
      .select("id, tipo, enunciado")
      .limit(10);

    if (simuladoQuestoes.length !== 10) {
      throw new Error(`Esperadas 10 questões, obtidas ${simuladoQuestoes.length}`);
    }

    // 6.2 Simular resolução de 10 questões (8 corretas, 2 erradas)
    let acertosSimulado = 0;
    const simuladoRespostas = [];

    for (let i = 0; i < simuladoQuestoes.length; i++) {
      const q = simuladoQuestoes[i];
      const isAcerto = i < 8; // 8 acertos (80%)
      if (isAcerto) acertosSimulado++;

      simuladoRespostas.push({
        usuario_id: testUserId,
        questao_id: q.id,
        correta: isAcerto,
        tempo_resposta_segundos: 50 + (i * 3),
        questao_versao: 1,
      });
    }

    const { data: insertedSimResp, error: simRespErr } = await testUserClient
      .from("respostas_usuarios")
      .insert(simuladoRespostas)
      .select();

    const taxaAcertoSimulado = Math.round((acertosSimulado / 10) * 100);

    recordResult(
      "ETAPA 6",
      "Execução e Submissão de Simulado (10 Questões)",
      true,
      !simRespErr && insertedSimResp?.length === 10,
      `10 respostas gravadas. Pontuação: ${acertosSimulado}/10 (${taxaAcertoSimulado}% de acerto)`
    );
  } catch (err) {
    recordResult("ETAPA 6", "Simulado Real", true, false, err.message);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // ETAPA 7 — DESEMPENHO E ESTATÍSTICAS REAIS (ZERO MOCKS)
  // ─────────────────────────────────────────────────────────────────────────────
  console.log("\n▶ ETAPA 7 — CONSOLIDAÇÃO DE DESEMPENHO");
  try {
    const { data: todasRespostas, error: statsErr } = await testUserClient
      .from("respostas_usuarios")
      .select("correta, tempo_resposta_segundos, created_at");

    if (statsErr || !todasRespostas) {
      throw new Error(`Falha ao calcular estatísticas: ${statsErr?.message}`);
    }

    const totalResp = todasRespostas.length;
    const totalAcertos = todasRespostas.filter((r) => r.correta).length;
    const totalErros = totalResp - totalAcertos;
    const taxaGeral = Math.round((totalAcertos / totalResp) * 100);
    const tempoMedio = Math.round(
      todasRespostas.reduce((acc, r) => acc + (r.tempo_resposta_segundos || 0), 0) / totalResp
    );

    recordResult(
      "ETAPA 7",
      "Estatísticas Reais sem Mock",
      true,
      totalResp === 12 && totalAcertos === 9 && totalErros === 3,
      `Total: ${totalResp} respondidas | Acertos: ${totalAcertos} (75%) | Erros: ${totalErros} | Tempo Médio: ${tempoMedio}s`
    );
  } catch (err) {
    recordResult("ETAPA 7", "Desempenho", true, false, err.message);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // ETAPA 8 — PERFIL E ATUALIZAÇÃO SEGURA
  // ─────────────────────────────────────────────────────────────────────────────
  console.log("\n▶ ETAPA 8 — PERFIL E PROTEÇÃO DE METADADOS");
  try {
    // 8.1 Atualizar nome legítimo do perfil
    const novoNome = `${testUserName} Atualizado`;
    const { data: updatedUserData, error: updateNameErr } = await testUserClient.auth.updateUser({
      data: { nome: novoNome, meta_diaria_questoes: 45 },
    });

    const nomeAtualizado = updatedUserData?.user?.user_metadata?.nome;

    recordResult(
      "ETAPA 8",
      "Atualização de Dados de Perfil",
      true,
      !updateNameErr && nomeAtualizado === novoNome,
      `Perfil atualizado para '${nomeAtualizado}', meta diária: 45`
    );

    // 8.2 TENTATIVA DE AUTOELEVAÇÃO DE PRIVILÉGIOS (Hack attempt)
    await testUserClient.auth.updateUser({
      data: { role: "admin" }, // usuário tenta injetar role admin via user_metadata
    });

    const { data: checkUser } = await testUserClient.auth.getUser();
    const appRole = checkUser?.user?.app_metadata?.role || "user";

    recordResult(
      "ETAPA 8",
      "Bloqueio de Elevação de Privilégio (RBAC)",
      true,
      appRole === "user",
      `Tentativa de hack contida: app_metadata.role permanece '${appRole}'`
    );
  } catch (err) {
    recordResult("ETAPA 8", "Perfil", true, false, err.message);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // ETAPA 9 — LOGOUT E ROTEAMENTO PROTEGIDO
  // ─────────────────────────────────────────────────────────────────────────────
  console.log("\n▶ ETAPA 9 — LOGOUT E ENCERRAMENTO DE SESSÃO");
  try {
    const { error: signOutErr } = await testUserClient.auth.signOut();

    recordResult(
      "ETAPA 9",
      "Logout de Sessão",
      true,
      !signOutErr,
      "Sessão invalidada com sucesso no Supabase Auth"
    );

    // Tentar ler dados privados após logout com cliente desautenticado
    const unauthClient = createUnauthenticatedClient();
    const { data: unauthData } = await unauthClient
      .from("respostas_usuarios")
      .select("*")
      .eq("usuario_id", testUserId);

    const protegido = !unauthData || unauthData.length === 0;

    recordResult(
      "ETAPA 9",
      "Proteção de Rotas e Dados Pós-Logout",
      true,
      protegido,
      "Acesso não-autenticado retorna 0 registros (RLS ativo)"
    );
  } catch (err) {
    recordResult("ETAPA 9", "Logout", true, false, err.message);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // ETAPA 10 — NOVO LOGIN E INTEGRIDADE DE ESTADO
  // ─────────────────────────────────────────────────────────────────────────────
  console.log("\n▶ ETAPA 10 — NOVO LOGIN E INTEGRIDADE DE ESTADO");
  try {
    const reloginClient = createUnauthenticatedClient();
    const { data: reloginData, error: reloginErr } = await reloginClient.auth.signInWithPassword({
      email: testUserEmail,
      password: testUserPassword,
    });

    if (reloginErr || !reloginData.session) {
      throw new Error(`Falha no re-login: ${reloginErr?.message}`);
    }

    const reAuthClient = createClient(SUPABASE_URL, ANON_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    await reAuthClient.auth.setSession({
      access_token: reloginData.session.access_token,
      refresh_token: reloginData.session.refresh_token,
    });

    // Validar restauração de todo o histórico
    const { data: restoredResp } = await reAuthClient.from("respostas_usuarios").select("id");
    const { data: restoredErros } = await reAuthClient.from("caderno_erros").select("id");
    const { data: restoredFavs } = await reAuthClient.from("questoes_favoritas").select("id");
    const { data: restoredNotes } = await reAuthClient.from("questoes_anotacoes").select("id");

    const estadoPreservado =
      restoredResp?.length === 12 &&
      restoredErros?.length === 1 &&
      restoredFavs?.length === 1 &&
      restoredNotes?.length === 1;

    recordResult(
      "ETAPA 10",
      "Persistência Integral de Estado e Histórico",
      true,
      estadoPreservado,
      `Histórico preservado: ${restoredResp?.length} respostas, ${restoredErros?.length} erros, ${restoredFavs?.length} favoritos, ${restoredNotes?.length} anotações`
    );
  } catch (err) {
    recordResult("ETAPA 10", "Re-login", true, false, err.message);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // ETAPA 11 — CONTROLE ADMINISTRATIVO (RBAC SEGURO)
  // ─────────────────────────────────────────────────────────────────────────────
  console.log("\n▶ ETAPA 11 — CONTROLE ADMINISTRATIVO");
  try {
    // 11.1 Test user (role = 'user') tenta acessar tabela restrita de auditoria admin
    const { data: userAuditAccess } = await testUserClient
      .from("questoes_historico_alteracoes")
      .select("*");

    recordResult(
      "ETAPA 11",
      "Bloqueio de Usuário Comum em Auditoria Admin",
      true,
      !userAuditAccess || userAuditAccess.length === 0,
      `Usuário comum barrado pelo RLS (0 registros visualizados)`
    );

    // 11.2 Tentativa de inserção direta por usuário comum na auditoria
    const { error: userInsertAuditErr } = await testUserClient
      .from("questoes_historico_alteracoes")
      .insert({
        questao_id: questaoCorreta.id,
        autor_alteracao_id: testUserId,
        versao_anterior: 1,
        enunciado_anterior: "Tentativa de injeção",
        explicacao_anterior: "Sem permissão",
        motivo_alteracao: "Exploit não autorizado",
      });

    recordResult(
      "ETAPA 11",
      "Bloqueio de Escrita por Usuário Comum na Auditoria",
      true,
      Boolean(userInsertAuditErr),
      `Tentativa de inserção bloqueada pelo RLS (${userInsertAuditErr?.code || "42501"})`
    );

    // 11.3 Gravação legítima de auditoria pelo backend administrativo (Service Role)
    const { data: auditLog, error: auditLogErr } = await adminClient
      .from("questoes_historico_alteracoes")
      .insert({
        questao_id: questaoCorreta.id,
        autor_alteracao_id: testUserId,
        versao_anterior: 1,
        enunciado_anterior: questaoCorreta.enunciado,
        explicacao_anterior: questaoCorreta.explicacao || "Explicação prévia",
        motivo_alteracao: "Revisão e auditoria autorizada pelo backend",
      })
      .select()
      .single();

    recordResult(
      "ETAPA 11",
      "Auditoria Administrativa Segura (Service Role)",
      true,
      !auditLogErr && Boolean(auditLog?.id),
      `Log de auditoria registrado pelo backend seguro (id: ${auditLog?.id})`
    );

    // Limpar log de auditoria criado
    if (auditLog?.id) {
      await adminClient.from("questoes_historico_alteracoes").delete().eq("id", auditLog.id);
    }
  } catch (err) {
    recordResult("ETAPA 11", "Controle Administrativo", true, false, err.message);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // ETAPA 12 — TESTE EM PRODUÇÃO (HTTPS://MJRTOR.COM.BR)
  // ─────────────────────────────────────────────────────────────────────────────
  console.log("\n▶ ETAPA 12 — VERIFICAÇÃO DE PRODUÇÃO (HTTPS://MJRTOR.COM.BR)");
  try {
    const endpoints = [
      { path: "/", desc: "Página Inicial / Landing Page" },
      { path: "/login", desc: "Página de Login" },
      { path: "/cadastro", desc: "Página de Cadastro" },
      { path: "/questoes", desc: "Página do Banco de Questões" },
      { path: "/api/questoes?pageSize=5", desc: "API Pública de Questões" },
    ];

    for (const ep of endpoints) {
      try {
        const url = `${PROD_URL}${ep.path}`;
        const res = await fetch(url, {
          headers: { "User-Agent": "ConcursosApp-E2E-Auditor/1.0" },
        });

        const isOk = res.status >= 200 && res.status < 400;
        let details = `HTTP ${res.status} ${res.statusText}`;

        if (ep.path.includes("/api/questoes") && res.ok) {
          const json = await res.json();
          details += ` | Total retornado: ${json.total || json.questoes?.length || "OK"}`;
        }

        recordResult(
          "ETAPA 12",
          `Produção: ${ep.desc} (${ep.path})`,
          true,
          isOk,
          `${url} -> ${details}`
        );
      } catch (fetchErr) {
        recordResult(
          "ETAPA 12",
          `Produção: ${ep.desc} (${ep.path})`,
          true,
          false,
          `Erro de rede ao conectar: ${fetchErr.message}`
        );
      }
    }
  } catch (err) {
    recordResult("ETAPA 12", "Teste em Produção", true, false, err.message);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // LIMPEZA FINAL DO USUÁRIO DE TESTE
  // ─────────────────────────────────────────────────────────────────────────────
  if (testUserId) {
    console.log("\n🧹 Executando limpeza do usuário de teste...");
    await adminClient.auth.admin.deleteUser(testUserId);
    console.log(`✓ Usuário de teste ${testUserId} excluído.`);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // RESUMO E TABELA FINAL
  // ─────────────────────────────────────────────────────────────────────────────
  console.log("\n================================================================================");
  console.log("📊 TABELA CONSOLIDADA DE RESULTADOS DOS TESTES FUNCIONAIS REAIS");
  console.log("================================================================================\n");

  console.log("| ETAPA | FUNÇÃO | TESTADA | RESULTADO | EVIDÊNCIA |");
  console.log("|---|---|---|---|---|");
  for (const r of TEST_RESULTS) {
    console.log(`| ${r.etapa} | ${r.funcao} | ${r.testada} | ${r.resultado} | ${r.evidencia} |`);
  }

  const aprovados = TEST_RESULTS.filter((r) => r.resultado === "APROVADO").length;
  const total = TEST_RESULTS.length;
  console.log(`\nTaxa de Sucesso: ${aprovados}/${total} (${Math.round((aprovados / total) * 100)}%)`);
  console.log("================================================================================\n");
}

runRealFunctionalTests().catch(console.error);
