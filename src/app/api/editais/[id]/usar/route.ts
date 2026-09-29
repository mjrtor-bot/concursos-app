import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  const { id } = await params;

  const [{ data: edital, error: e1 }, { data: topicos, error: e2 }] = await Promise.all([
    supabase.from("editais_catalogo").select("id,orgao_nome,cargo,status").eq("id", id).single(),
    supabase.from("editais_catalogo_topicos").select("disciplina_id,assunto_id,subassunto_id").eq("edital_id", id).order("ordem"),
  ]);
  if (e1 || !edital) return NextResponse.json({ error: "Edital não encontrado" }, { status: 404 });
  if (e2) return NextResponse.json({ error: e2.message }, { status: 500 });
  if (!topicos?.length) return NextResponse.json({ error: "Este edital ainda não possui tópicos verticalizados cadastrados." }, { status: 409 });

  const linhas = topicos.map(t => ({
    usuario_id: user.id, disciplina_id: t.disciplina_id, assunto_id: t.assunto_id,
    subassunto_id: t.subassunto_id, peso: "medio", incidencia: 0, estudado: false,
    percentual_dominio: 0, status: "nao_iniciado", questoes_respondidas: 0, taxa_acerto: 0,
  }));
  const { error } = await supabase.from("mentoria_edital_topicos").upsert(linhas, { onConflict: "usuario_id,disciplina_id,assunto_id" });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({
    ok: true, topicos: linhas.length,
    aviso: ["prova_realizada","encerrado","expirado"].includes(edital.status)
      ? "Edital histórico aplicado como referência. Um novo edital poderá apresentar alterações."
      : "Edital aplicado ao planejamento.",
  });
}
