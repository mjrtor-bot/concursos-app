import { NextResponse } from "next/server";
import { createClientServer, createAdminClient } from "@/lib/supabase/server";
import { materializarImportado, ImportadoItem } from "@/lib/editais/materializarImportado";

export async function GET(request: Request) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const [{ data: concursos, error: concursosError }, { data: alvo, error: alvoError }, { data: importados, error: importadosError }] = await Promise.all([
    supabase.from("concursos").select("id,nome,orgao,esfera,uf,status,fonte_oficial_url,concurso_cargos(id,nome,escolaridade,vagas,salario,fonte_oficial_url,ativo,editais_concurso(id,numero,titulo,publicado_em,prova_em,fonte_oficial_url,pdf_url,status,banca))").eq("status", "publicado").order("nome"),
    supabase.from("usuario_concurso_alvo").select("concurso_id,cargo_id,edital_id").eq("usuario_id", user.id).maybeSingle(),
    supabase.from("editais_usuario").select("id,nome,orgao_nome,cargo,uf,status,arquivo_nome,estrutura_extraida,edital_id").eq("usuario_id", user.id).in("status", ["aguardando_revisao","confirmado"]).order("updated_at", { ascending: false }),
  ]);

  if (concursosError) return NextResponse.json({ error: concursosError.message }, { status: 500 });
  if (alvoError) return NextResponse.json({ error: alvoError.message }, { status: 500 });
  if (importadosError) return NextResponse.json({ error: importadosError.message }, { status: 500 });

  const lista: any[] = [...(concursos || [])];
  const admin = createAdminClient();
  const sourceUrl = `https://${new URL(request.url).host}/mentoria/edital/importados`;

  if (admin) {
    for (const item of (importados || []) as ImportadoItem[]) {
      try {
        const editalId = await materializarImportado(admin, item, sourceUrl, user.id, item.cargo);
        const { data: materializado } = await admin
          .from("editais_concurso")
          .select("id,concurso_id,cargo_id,numero,titulo,publicado_em,prova_em,fonte_oficial_url,pdf_url,status,banca")
          .eq("id", editalId)
          .maybeSingle();

        if (!materializado) continue;

        const { data: concurso } = await admin
          .from("concursos")
          .select("id,nome,orgao,esfera,uf,status,fonte_oficial_url")
          .eq("id", materializado.concurso_id)
          .single();
        const { data: cargo } = await admin
          .from("concurso_cargos")
          .select("id,nome,escolaridade,vagas,salario,fonte_oficial_url,ativo")
          .eq("id", materializado.cargo_id)
          .single();

        if (!concurso || !cargo) continue;

        const indexExistente = lista.findIndex(x => x.id === concurso.id);
        if (indexExistente >= 0) {
          lista[indexExistente] = {
            ...lista[indexExistente],
            eh_importado: true,
            concurso_cargos: [{
              ...cargo,
              editais_concurso: [materializado],
            }],
          };
        } else {
          lista.unshift({
            ...concurso,
            eh_importado: true,
            concurso_cargos: [{
              ...cargo,
              editais_concurso: [materializado],
            }],
          } as any);
        }
      } catch {
        // Um edital pessoal com falha de materialização não deve derrubar a lista oficial.
      }
    }
  }

  return NextResponse.json({ concursos: lista, alvo: alvo ?? null });
}

export async function PUT(request: Request) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const body = await request.json().catch(() => null) as { concurso_id?: string; cargo_id?: string; edital_id?: string | null } | null;
  if (!body?.concurso_id || !body?.cargo_id) {
    return NextResponse.json({ error: "Concurso e cargo são obrigatórios" }, { status: 400 });
  }

  const admin = createAdminClient();
  const db = admin || supabase;

  // 1. Validar cargo e concurso pertencente ao usuário ou público
  const { data: cargo, error: cargoCheckError } = await db
    .from("concurso_cargos")
    .select("id,concurso_id,nome,concursos(id,nome,status,criado_por)")
    .eq("id", body.cargo_id)
    .eq("concurso_id", body.concurso_id)
    .eq("ativo", true)
    .maybeSingle();

  if (cargoCheckError || !cargo) {
    return NextResponse.json({ error: "Cargo não pertence ao concurso informado" }, { status: 400 });
  }

  const concursoRel = Array.isArray(cargo.concursos) ? cargo.concursos[0] : cargo.concursos;
  if (concursoRel && concursoRel.status !== "publicado" && concursoRel.criado_por && concursoRel.criado_por !== user.id) {
    return NextResponse.json({ error: "Acesso não autorizado a este concurso privado." }, { status: 403 });
  }

  let editalId: string | null = body.edital_id ?? null;
  if (editalId) {
    const { data: edital } = await db
      .from("editais_concurso")
      .select("id,concurso_id,cargo_id,status,criado_por")
      .eq("id", editalId)
      .eq("concurso_id", body.concurso_id)
      .eq("cargo_id", body.cargo_id)
      .maybeSingle();

    if (!edital) {
      return NextResponse.json({ error: "Edital não pertence ao concurso/cargo informado" }, { status: 400 });
    }
  } else {
    const { data: edital } = await db
      .from("editais_concurso")
      .select("id")
      .eq("concurso_id", body.concurso_id)
      .eq("cargo_id", body.cargo_id)
      .order("publicado_em", { ascending: false })
      .limit(1)
      .maybeSingle();
    editalId = edital?.id ?? null;
  }

  const { data: alvoAnterior } = await db
    .from("usuario_concurso_alvo")
    .select("edital_id")
    .eq("usuario_id", user.id)
    .maybeSingle();
  const mudouEdital = alvoAnterior?.edital_id !== editalId;

  const { data, error } = await db.from("usuario_concurso_alvo").upsert({
    usuario_id: user.id,
    concurso_id: body.concurso_id,
    cargo_id: body.cargo_id,
    edital_id: editalId,
    updated_at: new Date().toISOString(),
  }, { onConflict: "usuario_id" }).select("concurso_id,cargo_id,edital_id").single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Mantém o perfil da mentoria coerente com o concurso alvo (fonte única: usuario_concurso_alvo).
  const [{ data: concursoInfo }, { data: cargoInfo }] = await Promise.all([
    db.from("concursos").select("nome").eq("id", body.concurso_id).maybeSingle(),
    db.from("concurso_cargos").select("nome").eq("id", body.cargo_id).maybeSingle(),
  ]);
  const camposPerfil = {
    concurso_id: body.concurso_id,
    concurso_nome: concursoInfo?.nome ?? "",
    cargo_id: body.cargo_id,
    cargo_nome: cargoInfo?.nome ?? "",
    updated_at: new Date().toISOString(),
  };
  const { data: perfilExistente } = await db.from("mentoria_perfis").select("id").eq("usuario_id", user.id).maybeSingle();
  const { error: perfilError } = perfilExistente
    ? await db.from("mentoria_perfis").update(camposPerfil).eq("usuario_id", user.id)
    : await db.from("mentoria_perfis").insert({ usuario_id: user.id, ...camposPerfil, ativo: true });
  if (perfilError) return NextResponse.json({ error: `Alvo salvo, mas o perfil da mentoria não foi atualizado: ${perfilError.message}` }, { status: 500 });

  if (mudouEdital) {
    const { error: archiveError } = await db.from("mentoria_planos")
      .update({ status: "arquivado", updated_at: new Date().toISOString() })
      .eq("usuario_id", user.id).eq("status", "ativo");
    if (archiveError) return NextResponse.json({ error: archiveError.message }, { status: 500 });

    const { error: limparError } = await db.from("mentoria_edital_topicos").delete().eq("usuario_id", user.id);
    if (limparError) return NextResponse.json({ error: limparError.message }, { status: 500 });
  }

  if (editalId) {
    const { data: topicos, error: topicosError } = await db.from("edital_topicos")
      .select("disciplina_id,assunto_id,peso,incidencia")
      .eq("edital_id", editalId)
      .not("assunto_id", "is", null);
    if (topicosError) return NextResponse.json({ error: topicosError.message }, { status: 500 });

    if (topicos?.length) {
      const linhas = topicos.map((t) => ({
        usuario_id: user.id,
        disciplina_id: t.disciplina_id,
        assunto_id: t.assunto_id,
        subassunto_id: null,
        peso: Number(t.peso || 0) >= 75 ? "alto" : Number(t.peso || 0) >= 40 ? "medio" : "baixo",
        incidencia: Number(t.incidencia || 0),
        estudado: false,
        percentual_dominio: 0,
        status: "nao_iniciado",
        questoes_respondidas: 0,
        taxa_acerto: 0,
      }));
      const { error: syncError } = await db.from("mentoria_edital_topicos")
        .upsert(linhas, { onConflict: "usuario_id,disciplina_id,assunto_id" });
      if (syncError) return NextResponse.json({ error: syncError.message }, { status: 500 });
    }
  }

  return NextResponse.json({ alvo: data, mudou_edital: mudouEdital });
}
