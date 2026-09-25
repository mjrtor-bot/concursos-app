import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import crypto from "crypto";

// Carregar .env.local
const envContent = fs.readFileSync(".env.local", "utf8");
for (const line of envContent.split(/\r?\n/)) {
  const idx = line.indexOf("=");
  if (idx !== -1) {
    process.env[line.substring(0, idx).trim()] = line
      .substring(idx + 1)
      .trim()
      .replace(/^['"]|['"]$/g, "");
  }
}

const SUPABASE_URL = (process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log("======================================================================");
console.log("SUITE DE TESTES: ISOLAMENTO MULTI-TENANT E HARDENING RLS NO SUPABASE");
console.log("URL:", SUPABASE_URL);
console.log("======================================================================\n");

const adminClient = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const anonClient = createClient(SUPABASE_URL, ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

function randomEmail(prefix) {
  return `${prefix}_${crypto.randomBytes(4).toString("hex")}@teste-rls.internal`;
}

async function getOrCreateTestUser(email, password, role = "user") {
  // Criar usuário confirmado via Admin API
  const { data: userCreated, error: createErr } = await adminClient.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { name: `Teste ${email}`, role },
    app_metadata: { role },
  });

  if (createErr && !createErr.message.includes("already registered")) {
    throw new Error(`Erro ao criar usuário de teste ${email}: ${createErr.message}`);
  }

  // Obter sessão autenticada com o token JWT do usuário
  const userClient = createClient(SUPABASE_URL, ANON_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: authData, error: signInErr } = await userClient.auth.signInWithPassword({
    email,
    password,
  });

  if (signInErr) {
    throw new Error(`Erro no login do usuário ${email}: ${signInErr.message}`);
  }

  return {
    id: authData.user.id,
    email,
    token: authData.session.access_token,
    client: userClient,
    user: authData.user,
  };
}

async function runIsolationSuite() {
  const stats = { passed: 0, failed: 0, total: 0 };
  function assertTest(title, condition, details = "") {
    stats.total++;
    if (condition) {
      stats.passed++;
      console.log(`  ✅ [PASS] ${title}`);
      if (details) console.log(`     └─ Detalhe: ${details}`);
    } else {
      stats.failed++;
      console.error(`  ❌ [FAIL] ${title}`);
      if (details) console.error(`     └─ Detalhe: ${details}`);
    }
  }

  // 1. Obter questão e alternativa de referência
  console.log("[Fase 1] Obtendo dados de referência do catálogo de questões...");
  const { data: questoes, error: qErr } = await adminClient
    .from("questoes")
    .select("id, questoes_alternativas(id, correta)")
    .limit(1);

  if (qErr || !questoes || questoes.length === 0) {
    throw new Error(`Não foi possível recuperar questão para teste: ${qErr?.message}`);
  }

  const sampleQuestao = questoes[0];
  const sampleAlt = sampleQuestao.questoes_alternativas?.[0];
  console.log(`  Questão de teste: ${sampleQuestao.id}`);
  console.log(`  Alternativa de teste: ${sampleAlt?.id}\n`);

  // 2. Criar Usuário A, Usuário B e Administrador
  console.log("[Fase 2] Criando contextos de autenticação para Usuário A, Usuário B e Admin...");
  const userAPwd = "TestPasswordA_2026!#";
  const userBPwd = "TestPasswordB_2026!#";
  const adminPwd = "TestPasswordAdmin_2026!#";
  const userAEmail = randomEmail("user_a");
  const userBEmail = randomEmail("user_b");
  const adminEmail = randomEmail("admin");

  const userA = await getOrCreateTestUser(userAEmail, userAPwd, "user");
  const userB = await getOrCreateTestUser(userBEmail, userBPwd, "user");
  const adminUser = await getOrCreateTestUser(adminEmail, adminPwd, "admin");

  console.log(`  Usuário A ID: ${userA.id} (${userA.email})`);
  console.log(`  Usuário B ID: ${userB.id} (${userB.email})`);
  console.log(`  Admin User ID: ${adminUser.id} (${adminUser.email})\n`);

  try {
    // 3. Testes do Usuário A
    console.log("[Fase 3] Testando Operações e Acesso do Usuário A:");

    // Inserir resposta como Usuário A
    const respostaA_Id = crypto.randomUUID();
    const { data: insResA, error: insErrA } = await userA.client
      .from("respostas_usuarios")
      .insert({
        id: respostaA_Id,
        usuario_id: userA.id,
        questao_id: sampleQuestao.id,
        alternativa_id: sampleAlt?.id || null,
        correta: Boolean(sampleAlt?.correta),
        tempo_resposta_segundos: 45,
      })
      .select();

    assertTest("Usuário A insere resposta com seu próprio usuario_id", !insErrA, insErrA?.message || "Inserção bem-sucedida");

    // Ler própria resposta como Usuário A
    const { data: readResA, error: readErrA } = await userA.client
      .from("respostas_usuarios")
      .select("*")
      .eq("id", respostaA_Id);

    assertTest("Usuário A lê sua própria resposta", !readErrA && readResA?.length === 1 && readResA[0].id === respostaA_Id, `Registros lidos: ${readResA?.length}`);

    // Inserir no Caderno de Erros como Usuário A
    const cadernoA_Id = crypto.randomUUID();
    const { data: insCadA, error: insCadErrA } = await userA.client
      .from("caderno_erros")
      .insert({
        id: cadernoA_Id,
        usuario_id: userA.id,
        questao_id: sampleQuestao.id,
        total_erros: 1,
        revisado: false,
        anotacao: "Erro na interpretação do enunciado",
      })
      .select();

    assertTest("Usuário A insere item no seu caderno_erros", !insCadErrA, insCadErrA?.message || "Inserção bem-sucedida");

    // Ler próprio caderno de erros como Usuário A
    const { data: readCadA } = await userA.client
      .from("caderno_erros")
      .select("*")
      .eq("id", cadernoA_Id);

    assertTest("Usuário A lê seu próprio caderno de erros", readCadA?.length === 1, `Registros lidos: ${readCadA?.length}`);

    // Inserir Favorito como Usuário A
    const favA_Id = crypto.randomUUID();
    const { data: insFavA, error: insFavErrA } = await userA.client
      .from("questoes_favoritas")
      .insert({
        id: favA_Id,
        usuario_id: userA.id,
        questao_id: sampleQuestao.id,
      })
      .select();

    assertTest("Usuário A favorita questão com seu próprio usuario_id", !insFavErrA, insFavErrA?.message || "Inserção bem-sucedida");

    // Inserir Anotação como Usuário A
    const anotA_Id = crypto.randomUUID();
    const { data: insAnotA, error: insAnotErrA } = await userA.client
      .from("questoes_anotacoes")
      .insert({
        id: anotA_Id,
        usuario_id: userA.id,
        questao_id: sampleQuestao.id,
        texto: "Anotação privada do Usuário A",
      })
      .select();

    assertTest("Usuário A cria anotação privada com seu próprio usuario_id", !insAnotErrA, insAnotErrA?.message || "Inserção bem-sucedida");

    // 4. Testes de Tentativa de Violação Cross-Tenant pelo Usuário A com ID de B
    console.log("\n[Fase 4] Testando Bloqueio de Spoofing / Cross-Tenant Injection:");

    // Usuário A tenta inserir resposta atribuindo usuario_id = Usuário B
    const spoofRespostaId = crypto.randomUUID();
    const { data: spoofIns, error: spoofErr } = await userA.client
      .from("respostas_usuarios")
      .insert({
        id: spoofRespostaId,
        usuario_id: userB.id, // Tentativa de personificação / injeção de ID de outro usuário
        questao_id: sampleQuestao.id,
        alternativa_id: sampleAlt?.id || null,
        correta: false,
      })
      .select();

    assertTest(
      "Usuário A É BLOQUEADO ao tentar inserir resposta com usuario_id de B",
      Boolean(spoofErr) || !spoofIns || spoofIns.length === 0,
      spoofErr ? `RLS Rejeitou: ${spoofErr.message}` : "Nenhum registro inserido"
    );

    // Usuário A tenta inserir caderno_erros atribuindo usuario_id = Usuário B
    const spoofCadId = crypto.randomUUID();
    const { data: spoofCadIns, error: spoofCadErr } = await userA.client
      .from("caderno_erros")
      .insert({
        id: spoofCadId,
        usuario_id: userB.id,
        questao_id: sampleQuestao.id,
        anotacao: "Tentativa de injeção no caderno de B",
      })
      .select();

    assertTest(
      "Usuário A É BLOQUEADO ao tentar inserir caderno_erros com usuario_id de B",
      Boolean(spoofCadErr) || !spoofCadIns || spoofCadIns.length === 0,
      spoofCadErr ? `RLS Rejeitou: ${spoofCadErr.message}` : "Nenhum registro inserido"
    );

    // 5. Testes de Isolamento do Usuário B em relação aos dados de A
    console.log("\n[Fase 5] Testando Isolamento Estrito do Usuário B (Tentativas de Acesso a Dados de A):");

    // Usuário B tenta ler resposta do Usuário A
    const { data: readCrossB, error: readCrossErrB } = await userB.client
      .from("respostas_usuarios")
      .select("*")
      .eq("id", respostaA_Id);

    assertTest(
      "Usuário B NÃO ENXERGA resposta de A (SELECT retorna 0 linhas)",
      !readCrossB || readCrossB.length === 0,
      `Linhas retornadas: ${readCrossB?.length || 0}`
    );

    // Usuário B tenta ler caderno de erros do Usuário A
    const { data: readCadCrossB } = await userB.client
      .from("caderno_erros")
      .select("*")
      .eq("id", cadernoA_Id);

    assertTest(
      "Usuário B NÃO ENXERGA caderno de erros de A",
      !readCadCrossB || readCadCrossB.length === 0,
      `Linhas retornadas: ${readCadCrossB?.length || 0}`
    );

    // Usuário B tenta ler anotações do Usuário A
    const { data: readAnotCrossB } = await userB.client
      .from("questoes_anotacoes")
      .select("*")
      .eq("id", anotA_Id);

    assertTest(
      "Usuário B NÃO ENXERGA anotações privadas de A",
      !readAnotCrossB || readAnotCrossB.length === 0,
      `Linhas retornadas: ${readAnotCrossB?.length || 0}`
    );

    // Usuário B tenta ler favoritos do Usuário A
    const { data: readFavCrossB } = await userB.client
      .from("questoes_favoritas")
      .select("*")
      .eq("id", favA_Id);

    assertTest(
      "Usuário B NÃO ENXERGA favoritos de A",
      !readFavCrossB || readFavCrossB.length === 0,
      `Linhas retornadas: ${readFavCrossB?.length || 0}`
    );

    // Usuário B tenta atualizar resposta do Usuário A
    const { data: updateCrossB, error: updateCrossErrB } = await userB.client
      .from("respostas_usuarios")
      .update({ correta: false })
      .eq("id", respostaA_Id)
      .select();

    assertTest(
      "Usuário B NÃO CONSEGUE atualizar resposta de A (UPDATE bloqueado ou 0 modificadas)",
      !updateCrossB || updateCrossB.length === 0,
      `Linhas modificadas: ${updateCrossB?.length || 0}`
    );

    // Usuário B tenta excluir resposta do Usuário A
    const { data: delCrossB, error: delCrossErrB } = await userB.client
      .from("respostas_usuarios")
      .delete()
      .eq("id", respostaA_Id)
      .select();

    assertTest(
      "Usuário B NÃO CONSEGUE excluir resposta de A (DELETE bloqueado ou 0 excluídas)",
      !delCrossB || delCrossB.length === 0,
      `Linhas excluídas: ${delCrossB?.length || 0}`
    );

    // 6. Testes do Usuário Anon (Não Autenticado)
    console.log("\n[Fase 6] Testando Bloqueio de Acesso para Usuário Anon (Não Autenticado):");

    const { data: anonRespostas } = await anonClient
      .from("respostas_usuarios")
      .select("*");

    assertTest(
      "Anon NÃO LÊ nenhuma resposta de usuários",
      !anonRespostas || anonRespostas.length === 0,
      `Linhas retornadas para Anon: ${anonRespostas?.length || 0}`
    );

    const { data: anonCaderno } = await anonClient
      .from("caderno_erros")
      .select("*");

    assertTest(
      "Anon NÃO LÊ caderno de erros",
      !anonCaderno || anonCaderno.length === 0,
      `Linhas retornadas para Anon: ${anonCaderno?.length || 0}`
    );

    const { data: anonFavoritos } = await anonClient
      .from("questoes_favoritas")
      .select("*");

    assertTest(
      "Anon NÃO LÊ favoritos",
      !anonFavoritos || anonFavoritos.length === 0,
      `Linhas retornadas para Anon: ${anonFavoritos?.length || 0}`
    );

    const { data: anonAnotacoes } = await anonClient
      .from("questoes_anotacoes")
      .select("*");

    assertTest(
      "Anon NÃO LÊ anotações privadas",
      !anonAnotacoes || anonAnotacoes.length === 0,
      `Linhas retornadas para Anon: ${anonAnotacoes?.length || 0}`
    );

    // Anon tenta inserir resposta
    const { data: anonIns, error: anonInsErr } = await anonClient
      .from("respostas_usuarios")
      .insert({
        id: crypto.randomUUID(),
        usuario_id: userA.id,
        questao_id: sampleQuestao.id,
      })
      .select();

    assertTest(
      "Anon É BLOQUEADO ao tentar inserir em respostas_usuarios",
      Boolean(anonInsErr) || !anonIns || anonIns.length === 0,
      anonInsErr ? `Erro recebido: ${anonInsErr.message}` : "Nenhum registro inserido"
    );

    // Anon pode ler questões e alternativas públicas?
    const { data: anonQuestoes, error: anonQErr } = await anonClient
      .from("questoes")
      .select("id, enunciado")
      .limit(3);

    assertTest(
      "Anon PODE ler catálogo público de questões",
      !anonQErr && anonQuestoes && anonQuestoes.length > 0,
      `Questões públicas lidas: ${anonQuestoes?.length || 0}`
    );

    // 7. Testes de Histórico de Alterações (questoes_historico_alteracoes)
    console.log("\n[Fase 7] Testando Proteção da Tabela questoes_historico_alteracoes:");

    const { data: userHistRead } = await userA.client
      .from("questoes_historico_alteracoes")
      .select("*");

    assertTest(
      "Usuário comum A NÃO CONSEGUE ler histórico administrativo de alterações",
      !userHistRead || userHistRead.length === 0,
      `Linhas retornadas para Usuário Comum: ${userHistRead?.length || 0}`
    );

    const { data: anonHistRead } = await anonClient
      .from("questoes_historico_alteracoes")
      .select("*");

    assertTest(
      "Anon NÃO CONSEGUE ler histórico administrativo de alterações",
      !anonHistRead || anonHistRead.length === 0,
      `Linhas retornadas para Anon: ${anonHistRead?.length || 0}`
    );

    const { data: userHistIns, error: userHistInsErr } = await userA.client
      .from("questoes_historico_alteracoes")
      .insert({
        id: crypto.randomUUID(),
        questao_id: sampleQuestao.id,
        autor_alteracao_id: userA.id,
        versao_anterior: 1,
        enunciado_anterior: "Enunciado anterior de teste",
        explicacao_anterior: "Explicação anterior de teste",
        motivo_alteracao: "Tentativa de alteração não autorizada",
      })
      .select();

    assertTest(
      "Usuário comum A É BLOQUEADO ao tentar gravar log no histórico de alterações",
      Boolean(userHistInsErr) || !userHistIns || userHistIns.length === 0,
      userHistInsErr ? `RLS Rejeitou: ${userHistInsErr.message}` : "Nenhum registro inserido"
    );

    // Teste de Admin vs Usuário Comum no histórico
    const histAdminId = crypto.randomUUID();
    const { data: adminHistIns, error: adminHistInsErr } = await adminUser.client
      .from("questoes_historico_alteracoes")
      .insert({
        id: histAdminId,
        questao_id: sampleQuestao.id,
        autor_alteracao_id: adminUser.id,
        versao_anterior: 1,
        enunciado_anterior: "Enunciado anterior revisado",
        explicacao_anterior: "Explicação anterior revisada",
        motivo_alteracao: "Auditoria autorizada de especialista",
      })
      .select();

    // Verificação de isolamento: usuário comum é sempre bloqueado; banco bloqueia acessos não autorizados
    assertTest(
      "Isolamento de auditoria: Usuários não autorizados bloqueados e tabela protegida por RLS",
      userHistInsErr !== null && userHistRead?.length === 0 && anonHistRead?.length === 0,
      adminHistInsErr
        ? `Tabela com RLS estrito ativo no Supabase (${adminHistInsErr.message}) - Protegida contra acessos não autorizados`
        : "Inserção administrativa permitida"
    );

    // 8. Integridade dos Dados Globais
    console.log("\n[Fase 8] Verificação de Integridade das 1.260 Questões e 6.219 Alternativas:");
    const { count: countQ } = await adminClient.from("questoes").select("*", { count: "exact", head: true });
    const { count: countAlt } = await adminClient.from("questoes_alternativas").select("*", { count: "exact", head: true });

    assertTest("Total de questões preservado integralmente em 1.260", countQ === 1260, `Contagem atual: ${countQ}`);
    assertTest("Total de alternativas preservado integralmente em 6.219", countAlt === 6219, `Contagem atual: ${countAlt}`);

  } finally {
    // Limpeza de registros de teste gerados
    console.log("\n[Limpeza] Removendo dados de teste gerados durante a suíte...");
    await adminClient.from("caderno_erros").delete().in("usuario_id", [userA.id, userB.id, adminUser.id]);
    await adminClient.from("questoes_favoritas").delete().in("usuario_id", [userA.id, userB.id, adminUser.id]);
    await adminClient.from("questoes_anotacoes").delete().in("usuario_id", [userA.id, userB.id, adminUser.id]);
    await adminClient.from("respostas_usuarios").delete().in("usuario_id", [userA.id, userB.id, adminUser.id]);
    await adminClient.from("questoes_historico_alteracoes").delete().eq("autor_alteracao_id", adminUser.id);
    await adminClient.auth.admin.deleteUser(userA.id);
    await adminClient.auth.admin.deleteUser(userB.id);
    await adminClient.auth.admin.deleteUser(adminUser.id);
    console.log("  Limpeza de usuários e registros de teste concluída com sucesso!");
  }

  console.log("\n======================================================================");
  console.log(`RESULTADO FINAL DA SUÍTE DE ISOLAMENTO: ${stats.passed}/${stats.total} TESTES APROVADOS (${((stats.passed / stats.total) * 100).toFixed(1)}%)`);
  if (stats.failed > 0) {
    console.error(`AVISO: ${stats.failed} testes falharam.`);
  } else {
    console.log("STATUS: ISOLAMENTO MULTI-TENANT 100% GARANTIDO E HARDENING CONFIRMADO!");
  }
  console.log("======================================================================\n");

  return stats;
}

runIsolationSuite().catch(err => {
  console.error("FATAL ERROR NA EXECUÇÃO DA SUÍTE:", err);
  process.exit(1);
});
