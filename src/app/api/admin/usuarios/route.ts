import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

function sanitizePostgrestFilter(term: string): string {
  return term.replace(/[,().":\\%]/g, " ").trim();
}

async function adminClient() {
  const supabase = await createClientServer();
  if (!supabase) return { error: NextResponse.json({ success: false, error: "Supabase indisponível" }, { status: 503 }) };
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: NextResponse.json({ success: false, error: "Não autenticado" }, { status: 401 }) };
  const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (!me || !["admin", "editor"].includes(me.role)) return { error: NextResponse.json({ success: false, error: "Sem permissão" }, { status: 403 }) };
  return { supabase };
}

export async function GET(request: NextRequest) {
  const a = await adminClient();
  if (a.error) return a.error;
  const supabase = a.supabase!;
  const s = new URL(request.url).searchParams,
    rawTermo = s.get("termo")?.trim() || "",
    role = s.get("role"),
    concurso = s.get("concurso_id");

  const termo = sanitizePostgrestFilter(rawTermo);

  let q = supabase
    .from("profiles")
    .select("id,email,nome,role,meta_diaria_questoes,created_at,usuario_concurso_alvo(concurso_id,cargo_id,edital_id)")
    .order("created_at", { ascending: false });

  if (role && role !== "todos") q = q.eq("role", role);
  if (termo) q = q.or(`nome.ilike.%${termo}%,email.ilike.%${termo}%`);

  const { data, error } = await q;
  if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  const usuarios = (data || [])
    .map((u: any) => {
      const alvo = Array.isArray(u.usuario_concurso_alvo) ? u.usuario_concurso_alvo[0] : u.usuario_concurso_alvo;
      return {
        ...u,
        concurso_alvo_id: alvo?.concurso_id || null,
        cargo_alvo_id: alvo?.cargo_id || null,
      };
    })
    .filter((u: any) => !concurso || concurso === "todos" || u.concurso_alvo_id === concurso);

  return NextResponse.json({ success: true, usuarios, total: usuarios.length, fonte: "supabase" });
}

export async function PUT(request: NextRequest) {
  const a = await adminClient();
  if (a.error) return a.error;
  const supabase = a.supabase!;
  const body = await request.json();
  if (!body.id) return NextResponse.json({ success: false, error: "ID obrigatório" }, { status: 400 });
  if (body.role && !["user", "admin", "editor"].includes(body.role))
    return NextResponse.json({ success: false, error: "Role inválido" }, { status: 400 });
  const { error } = await supabase
    .from("profiles")
    .update({
      ...(body.role && { role: body.role }),
      ...(body.meta_diaria_questoes !== undefined && { meta_diaria_questoes: body.meta_diaria_questoes }),
    })
    .eq("id", body.id);
  if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  if (body.concurso_alvo_id) {
    const { data: cargo } = await supabase
      .from("concurso_cargos")
      .select("id")
      .eq("concurso_id", body.concurso_alvo_id)
      .eq("ativo", true)
      .limit(1)
      .maybeSingle();
    if (cargo)
      await supabase
        .from("usuario_concurso_alvo")
        .upsert(
          { usuario_id: body.id, concurso_id: body.concurso_alvo_id, cargo_id: cargo.id, updated_at: new Date().toISOString() },
          { onConflict: "usuario_id" }
        );
  }
  return NextResponse.json({ success: true });
}