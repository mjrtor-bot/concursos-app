import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const [{ data: concursos, error: concursosError }, { data: alvo, error: alvoError }] = await Promise.all([
    supabase.from("concursos").select("id,nome,orgao,esfera,uf,status,fonte_oficial_url,concurso_cargos(id,nome,escolaridade,vagas,salario,fonte_oficial_url,ativo,editais_concurso(id,numero,titulo,publicado_em,prova_em,fonte_oficial_url,pdf_url,status))").order("nome"),
    supabase.from("usuario_concurso_alvo").select("concurso_id,cargo_id,edital_id").eq("usuario_id", user.id).maybeSingle(),
  ]);

  if (concursosError) return NextResponse.json({ error: concursosError.message }, { status: 500 });
  if (alvoError) return NextResponse.json({ error: alvoError.message }, { status: 500 });
  return NextResponse.json({ concursos: concursos ?? [], alvo: alvo ?? null });
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

  const { data: cargo } = await supabase.from("concurso_cargos").select("id").eq("id", body.cargo_id).eq("concurso_id", body.concurso_id).eq("ativo", true).maybeSingle();
  if (!cargo) return NextResponse.json({ error: "Cargo não pertence ao concurso informado" }, { status: 400 });

  let editalId: string | null = body.edital_id ?? null;
  if (editalId) {
    const { data: edital } = await supabase.from("editais_concurso").select("id").eq("id", editalId).eq("concurso_id", body.concurso_id).eq("cargo_id", body.cargo_id).maybeSingle();
    if (!edital) return NextResponse.json({ error: "Edital não pertence ao concurso/cargo informado" }, { status: 400 });
  } else {
    const { data: edital } = await supabase.from("editais_concurso").select("id").eq("concurso_id", body.concurso_id).eq("cargo_id", body.cargo_id).order("publicado_em", { ascending: false }).limit(1).maybeSingle();
    editalId = edital?.id ?? null;
  }

  const { data: alvoAnterior } = await supabase.from("usuario_concurso_alvo").select("edital_id").eq("usuario_id", user.id).maybeSingle();
  const mudouEdital = alvoAnterior?.edital_id !== editalId;

  const { data, error } = await supabase.from("usuario_concurso_alvo").upsert({
    usuario_id: user.id, concurso_id: body.concurso_id, cargo_id: body.cargo_id, edital_id: editalId, updated_at: new Date().toISOString(),
  }, { onConflict: "usuario_id" }).select("concurso_id,cargo_id,edital_id").single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  if (mudouEdital) {
    const { error: archiveError } = await supabase.from("mentoria_planos")
      .update({ status: "arquivado", updated_at: new Date().toISOString() })
      .eq("usuario_id", user.id).eq("status", "ativo");
    if (archiveError) return NextResponse.json({ error: archiveError.message }, { status: 500 });

    const { error: limparError } = await supabase.from("mentoria_edital_topicos").delete().eq("usuario_id", user.id);
    if (limparError) return NextResponse.json({ error: limparError.message }, { status: 500 });
  }

  if (editalId) {
    const { data: topicos, error: topicosError } = await supabase.from("edital_topicos")
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
      const { error: syncError } = await supabase.from("mentoria_edital_topicos")
        .upsert(linhas, { onConflict: "usuario_id,disciplina_id,assunto_id" });
      if (syncError) return NextResponse.json({ error: syncError.message }, { status: 500 });
    }
  }

  return NextResponse.json({ alvo: data, mudou_edital: mudouEdital });
}
