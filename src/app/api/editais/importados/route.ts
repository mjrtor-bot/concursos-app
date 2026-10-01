import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { data, error } = await supabase
    .from("editais_usuario")
    .select("id,nome,orgao_nome,cargo,uf,status,arquivo_nome,arquivo_tamanho,estrutura_extraida,created_at,updated_at,confirmado_em")
    .eq("usuario_id", user.id)
    .in("status", ["aguardando_revisao","confirmado"])
    .order("updated_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const editais = (data || []).map((e: any) => ({
    id: e.id,
    nome: e.nome,
    orgao: e.orgao_nome,
    cargo: e.cargo,
    uf: e.uf,
    status: e.status,
    arquivo_nome: e.arquivo_nome,
    created_at: e.created_at,
    confirmado_em: e.confirmado_em,
    total_disciplinas: Array.isArray(e.estrutura_extraida?.disciplinas) ? e.estrutura_extraida.disciplinas.length : 0,
    total_topicos: Array.isArray(e.estrutura_extraida?.disciplinas)
      ? e.estrutura_extraida.disciplinas.reduce((n: number, d: any) => n + (Array.isArray(d.assuntos) ? d.assuntos.length : 0), 0)
      : 0,
  }));

  return NextResponse.json({ editais });
}
