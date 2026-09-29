import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

const DOIS_ANOS_MS = 2 * 365 * 24 * 60 * 60 * 1000;

export async function GET(request: Request) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const url = new URL(request.url);
  const busca = (url.searchParams.get("q") || "").trim();
  const carreira = url.searchParams.get("carreira");
  const uf = url.searchParams.get("uf");
  const esfera = url.searchParams.get("esfera");
  const status = url.searchParams.get("status");
  const desde = new Date(Date.now() - DOIS_ANOS_MS).toISOString().slice(0,10);

  let query = supabase.from("editais_catalogo").select("*").gte("data_publicacao", desde).eq("ativo", true).order("data_publicacao", { ascending: false });
  if (carreira && carreira !== "todos") query = query.eq("carreira", carreira);
  if (uf && uf !== "todos") query = query.eq("uf", uf);
  if (esfera && esfera !== "todos") query = query.eq("esfera", esfera);
  if (status && status !== "todos") query = query.eq("status", status);
  if (busca) query = query.or(`orgao_nome.ilike.%${busca}%,sigla.ilike.%${busca}%,cargo.ilike.%${busca}%,banca.ilike.%${busca}%`);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ editais: data ?? [] });
}
