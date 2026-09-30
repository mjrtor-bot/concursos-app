import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { id } = await params;

  const { data: edital, error: editalError } = await supabase
    .from("editais_concurso")
    .select("id,concurso_id,cargo_id,numero,titulo,status,edital_topicos(disciplina_id,assunto_id,peso,incidencia,ordem)")
    .eq("id", id)
    .single();

  if (editalError || !edital) {
    return NextResponse.json({ error: "Edital não encontrado" }, { status: 404 });
  }

  const topicos = (edital.edital_topicos || [])
    .filter((t: any) => Boolean(t.disciplina_id && t.assunto_id))
    .sort((a: any, b: any) => (a.ordem || 0) - (b.ordem || 0));

  if (!topicos.length) {
    return NextResponse.json(
      { error: "Este edital ainda não possui assuntos verticalizados cadastrados." },
      { status: 409 }
    );
  }

  const { data: alvoAnterior } = await supabase
    .from("usuario_concurso_alvo")
    .select("edital_id")
    .eq("usuario_id", user.id)
    .maybeSingle();

  const mudouEdital = alvoAnterior?.edital_id !== edital.id;

  const { error: alvoError } = await supabase.from("usuario_concurso_alvo").upsert({
    usuario_id: user.id,
    concurso_id: edital.concurso_id,
    cargo_id: edital.cargo_id,
    edital_id: edital.id,
    updated_at: new Date().toISOString(),
  }, { onConflict: "usuario_id" });

  if (alvoError) return NextResponse.json({ error: alvoError.message }, { status: 500 });

  if (mudouEdital) {
    const { error: archiveError } = await supabase
      .from("mentoria_planos")
      .update({ status: "arquivado", updated_at: new Date().toISOString() })
      .eq("usuario_id", user.id)
      .eq("status", "ativo");
    if (archiveError) return NextResponse.json({ error: archiveError.message }, { status: 500 });

    const { error: limparError } = await supabase
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

  const { error: topicosError } = await supabase
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
