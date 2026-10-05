import { NextResponse } from "next/server";
import { createClientServer, createAdminClient } from "@/lib/supabase/server";
import { materializarImportado, ImportadoItem } from "@/lib/editais/materializarImportado";

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { id } = await params;
  const admin = createAdminClient();
  const db = admin || supabase;

  let editalConcursoId = id;

  // 1. Verificar se id é de editais_usuario
  const { data: editalUsuario } = await db
    .from("editais_usuario")
    .select("id,nome,orgao_nome,cargo,uf,status,arquivo_nome,estrutura_extraida,edital_id")
    .eq("id", id)
    .eq("usuario_id", user.id)
    .maybeSingle();

  if (editalUsuario) {
    if (editalUsuario.edital_id) {
      editalConcursoId = editalUsuario.edital_id;
    } else if (editalUsuario.estrutura_extraida) {
      if (!admin) {
        return NextResponse.json(
          { error: "Serviço de materialização indisponível. Verifique as credenciais administrativas." },
          { status: 503 }
        );
      }
      const sourceUrl = `https://concursos.app/mentoria/edital/importados`;
      editalConcursoId = await materializarImportado(
        admin,
        editalUsuario as unknown as ImportadoItem,
        sourceUrl,
        user.id,
        editalUsuario.cargo
      );
    }
  }

  // 2. Buscar edital em editais_concurso com tópicos
  const { data: edital, error: editalError } = await db
    .from("editais_concurso")
    .select("id,concurso_id,cargo_id,numero,titulo,status,criado_por,edital_topicos(disciplina_id,assunto_id,peso,incidencia,ordem)")
    .eq("id", editalConcursoId)
    .single();

  if (editalError || !edital) {
    return NextResponse.json({ error: "Edital não encontrado" }, { status: 404 });
  }

  // Se o edital não for público, verificar permissão
  if (edital.status !== "publicado" && edital.criado_por && edital.criado_por !== user.id) {
    return NextResponse.json({ error: "Acesso não autorizado a este edital privado." }, { status: 403 });
  }

  // Se não tiver tópicos em edital_topicos, mas tivermos o editalUsuario, podemos materializar
  let topicos = (edital.edital_topicos || [])
    .filter((t: any) => Boolean(t.disciplina_id && t.assunto_id))
    .sort((a: any, b: any) => (a.ordem || 0) - (b.ordem || 0));

  if (!topicos.length && editalUsuario && admin && editalUsuario.estrutura_extraida) {
    const sourceUrl = `https://concursos.app/mentoria/edital/importados`;
    await materializarImportado(
      admin,
      editalUsuario as unknown as ImportadoItem,
      sourceUrl,
      user.id,
      editalUsuario.cargo
    );
    const { data: recarregado } = await db
      .from("editais_concurso")
      .select("id,concurso_id,cargo_id,numero,titulo,status,criado_por,edital_topicos(disciplina_id,assunto_id,peso,incidencia,ordem)")
      .eq("id", editalConcursoId)
      .single();
    if (recarregado) {
      topicos = (recarregado.edital_topicos || [])
        .filter((t: any) => Boolean(t.disciplina_id && t.assunto_id))
        .sort((a: any, b: any) => (a.ordem || 0) - (b.ordem || 0));
    }
  }

  if (!topicos.length) {
    return NextResponse.json(
      { error: "Este edital ainda não possui assuntos verticalizados cadastrados." },
      { status: 409 }
    );
  }

  const { data: alvoAnterior } = await db
    .from("usuario_concurso_alvo")
    .select("edital_id")
    .eq("usuario_id", user.id)
    .maybeSingle();

  const mudouEdital = alvoAnterior?.edital_id !== edital.id;

  const { error: alvoError } = await db.from("usuario_concurso_alvo").upsert({
    usuario_id: user.id,
    concurso_id: edital.concurso_id,
    cargo_id: edital.cargo_id,
    edital_id: edital.id,
    updated_at: new Date().toISOString(),
  }, { onConflict: "usuario_id" });

  if (alvoError) return NextResponse.json({ error: alvoError.message }, { status: 500 });

  // Sincronizar mentoria_perfis
  const [{ data: concursoInfo }, { data: cargoInfo }] = await Promise.all([
    db.from("concursos").select("nome").eq("id", edital.concurso_id).maybeSingle(),
    db.from("concurso_cargos").select("nome").eq("id", edital.cargo_id).maybeSingle(),
  ]);
  const camposPerfil = {
    concurso_id: edital.concurso_id,
    concurso_nome: concursoInfo?.nome ?? "",
    cargo_id: edital.cargo_id,
    cargo_nome: cargoInfo?.nome ?? "",
    updated_at: new Date().toISOString(),
  };
  const { data: perfilExistente } = await db.from("mentoria_perfis").select("id").eq("usuario_id", user.id).maybeSingle();
  if (perfilExistente) {
    await db.from("mentoria_perfis").update(camposPerfil).eq("usuario_id", user.id);
  } else {
    await db.from("mentoria_perfis").insert({ usuario_id: user.id, ...camposPerfil, ativo: true });
  }

  if (mudouEdital) {
    const { error: archiveError } = await db
      .from("mentoria_planos")
      .update({ status: "arquivado", updated_at: new Date().toISOString() })
      .eq("usuario_id", user.id)
      .eq("status", "ativo");
    if (archiveError) return NextResponse.json({ error: archiveError.message }, { status: 500 });

    const { error: limparError } = await db
      .from("mentoria_edital_topicos")
      .delete()
      .eq("usuario_id", user.id);
    if (limparError) return NextResponse.json({ error: limparError.message }, { status: 500 });
  }

  const linhas = topicos.map((t: any) => ({
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

  const { error: topicosError } = await db
    .from("mentoria_edital_topicos")
    .upsert(linhas, { onConflict: "usuario_id,disciplina_id,assunto_id" });

  if (topicosError) return NextResponse.json({ error: topicosError.message }, { status: 500 });

  return NextResponse.json({
    ok: true,
    mudou_edital: mudouEdital,
    concurso_id: edital.concurso_id,
    cargo_id: edital.cargo_id,
    edital_id: edital.id,
    topicos: linhas.length,
    aviso: ["prova_realizada", "encerrado", "expirado"].includes(edital.status)
      ? "Edital histórico aplicado como referência."
      : "Edital aplicado ao planejamento.",
  });
}
