import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { data, error } = await supabase
    .from("editais_usuario")
    .select("id,nome,orgao_nome,cargo,uf,status,arquivo_nome,arquivo_tamanho,erro_processamento,estrutura_extraida,created_at,updated_at,confirmado_em,edital_id")
    .eq("usuario_id", user.id)
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const editais = (data || []).map((e: any) => {
    const estrutura = e.estrutura_extraida || {};
    const disciplinas = Array.isArray(estrutura.disciplinas) && estrutura.disciplinas.length > 0
      ? estrutura.disciplinas
      : Array.isArray(estrutura.cargos)
        ? estrutura.cargos.flatMap((cargo: any) => Array.isArray(cargo.disciplinas) ? cargo.disciplinas : [])
        : [];

    return {
      id: e.id,
      nome: e.nome,
      orgao: e.orgao_nome,
      cargo: e.cargo,
      uf: e.uf,
      status: e.status,
      arquivo_nome: e.arquivo_nome,
      arquivo_tamanho: e.arquivo_tamanho,
      erro_processamento: e.erro_processamento,
      edital_id: e.edital_id,
      created_at: e.created_at,
      updated_at: e.updated_at,
      confirmado_em: e.confirmado_em,
      total_disciplinas: disciplinas.length,
      total_topicos: disciplinas.reduce((n: number, d: any) => n + (Array.isArray(d.assuntos) ? d.assuntos.length : 0), 0),
    };
  });

  return NextResponse.json({ editais });
}

export async function DELETE(request: NextRequest) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID do edital obrigatório" }, { status: 400 });

  const { data: edital, error: fetchError } = await supabase
    .from("editais_usuario")
    .select("id,arquivo_path")
    .eq("id", id)
    .eq("usuario_id", user.id)
    .maybeSingle();

  if (fetchError) return NextResponse.json({ error: fetchError.message }, { status: 500 });
  if (!edital) return NextResponse.json({ error: "Edital não encontrado" }, { status: 404 });

  if (edital.arquivo_path) {
    await supabase.storage.from("editais-usuario").remove([edital.arquivo_path]).catch(() => undefined);
  }

  const { error: deleteError } = await supabase
    .from("editais_usuario")
    .delete()
    .eq("id", id)
    .eq("usuario_id", user.id);

  if (deleteError) return NextResponse.json({ error: deleteError.message }, { status: 500 });

  return NextResponse.json({ ok: true, message: "Edital excluído com sucesso." });
}
