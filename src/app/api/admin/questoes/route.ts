import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

function sanitizePostgrestFilter(term: string): string {
  return term.replace(/[,().":\\%]/g, " ").trim();
}

async function ctx() {
  const s = await createClientServer();
  if (!s) return { e: NextResponse.json({ error: "Supabase indisponível" }, { status: 503 }) };
  const { data: { user } } = await s.auth.getUser();
  if (!user) return { e: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
  const { data: p } = await s.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (!p || !["admin", "editor"].includes(p.role)) return { e: NextResponse.json({ error: "Sem permissão" }, { status: 403 }) };
  return { s };
}

export async function GET(r: NextRequest) {
  const c = await ctx();
  if (c.e) return c.e;
  const s = c.s!,
    p = r.nextUrl.searchParams,
    page = Math.max(1, Number(p.get("page") || 1)),
    size = 25,
    origem = p.get("origem"),
    status = p.get("status"),
    disc = p.get("disciplina_id"),
    rawTermo = p.get("q") || "";

  const termo = sanitizePostgrestFilter(rawTermo);

  let q = s
    .from("questoes")
    .select(
      "id,disciplina_id,enunciado,banca_nome,orgao_nome,cargo_nome,ano,is_autoral_ia,modelo_ia,revisada_por_especialista,anulada,desatualizada,auditoria_status,created_at",
      { count: "exact" }
    )
    .order("created_at", { ascending: false });

  if (origem === "oficiais") q = q.eq("is_autoral_ia", false);
  if (origem === "ia") q = q.eq("is_autoral_ia", true);
  if (status === "anuladas") q = q.eq("anulada", true);
  if (status === "desatualizadas") q = q.eq("desatualizada", true);
  if (status === "ativas") q = q.eq("anulada", false).eq("desatualizada", false);
  if (disc && disc !== "todos") q = q.eq("disciplina_id", disc);
  if (termo) q = q.or(`enunciado.ilike.%${termo}%,banca_nome.ilike.%${termo}%,orgao_nome.ilike.%${termo}%`);
  q = q.range((page - 1) * size, page * size - 1);

  const [{ data, error, count }, { count: total }, { count: ia }, { count: oficiais }, { count: revisadas }] =
    await Promise.all([
      q,
      s.from("questoes").select("id", { count: "exact", head: true }),
      s.from("questoes").select("id", { count: "exact", head: true }).eq("is_autoral_ia", true),
      s.from("questoes").select("id", { count: "exact", head: true }).eq("is_autoral_ia", false),
      s.from("questoes").select("id", { count: "exact", head: true }).eq("revisada_por_especialista", true),
    ]);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({
    questoes: data || [],
    count: count || 0,
    page,
    size,
    stats: { total: total || 0, ia: ia || 0, oficiais: oficiais || 0, revisadas: revisadas || 0 },
  });
}

export async function PATCH(r: NextRequest) {
  const c = await ctx();
  if (c.e) return c.e;
  const s = c.s!,
    b = await r.json();
  if (!b.id) return NextResponse.json({ error: "ID obrigatório" }, { status: 400 });
  const allowed: any = {};
  for (const k of ["anulada", "desatualizada", "revisada_por_especialista"])
    if (typeof b[k] === "boolean") allowed[k] = b[k];
  const { error } = await s.from("questoes").update(allowed).eq("id", b.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}