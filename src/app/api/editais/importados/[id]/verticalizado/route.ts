import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { id } = await params;
  const { data: edital, error: editalError } = await supabase
    .from("editais_usuario")
    .select("id,nome,orgao_nome,cargo,uf,arquivo_nome,status,confirmado_em,edital_id,estrutura_extraida")
    .eq("id", id)
    .eq("usuario_id", user.id)
    .eq("status", "confirmado")
    .maybeSingle();

  if (editalError) return NextResponse.json({ error: editalError.message }, { status: 500 });
  if (!edital) return NextResponse.json({ error: "Edital importado não encontrado." }, { status: 404 });
  if (!edital.edital_id) return NextResponse.json({ error: "O edital importado não possui edital de destino vinculado." }, { status: 409 });

  const estrutura = (edital as any).estrutura_extraida || {};
  const paresImportados = new Set(
    (Array.isArray(estrutura.disciplinas) ? estrutura.disciplinas : []).flatMap((d: any) =>
      (Array.isArray(d.assuntos) ? d.assuntos : []).map((a: any) => `${String(d.nome).trim()}||| ${String(a).trim()}`.replace("||| ","|||"))
    )
  );

  const [topicosRes, salvosRes, respostasRes] = await Promise.all([
    supabase
      .from("edital_topicos")
      .select("disciplina_id,assunto_id,peso,incidencia,ordem,disciplinas(id,nome),assuntos(id,nome)")
      .eq("edital_id", edital.edital_id)
      .order("ordem", { ascending: true }),
    supabase.from("mentoria_edital_topicos").select("*").eq("usuario_id", user.id),
    supabase.from("respostas_usuarios").select("assunto_id,correta,created_at").eq("usuario_id", user.id),
  ]);

  if (topicosRes.error) return NextResponse.json({ error: topicosRes.error.message }, { status: 500 });

  const salvos = new Map((salvosRes.data || []).map((x: any) => [x.assunto_id, x]));
  const stats = new Map<string, { total: number; acertos: number; ultimaData?: string }>();

  for (const r of respostasRes.data || []) {
    if (!r.assunto_id) continue;
    const s = stats.get(r.assunto_id) || { total: 0, acertos: 0 };
    s.total++;
    if (r.correta) s.acertos++;
    if (!s.ultimaData || (r.created_at && r.created_at > s.ultimaData)) s.ultimaData = r.created_at;
    stats.set(r.assunto_id, s);
  }

  const grupos = new Map<string, any>();
  for (const row of topicosRes.data || []) {
    const disc = Array.isArray(row.disciplinas) ? row.disciplinas[0] : row.disciplinas;
    const assunto = Array.isArray(row.assuntos) ? row.assuntos[0] : row.assuntos;
    if (!row.disciplina_id || !row.assunto_id || !disc?.nome || !assunto?.nome) continue;
    if (paresImportados.size > 0 && !paresImportados.has(`${String(disc.nome).trim()}|||${String(assunto.nome).trim()}`)) continue;

    const saved = salvos.get(row.assunto_id);
    const st = stats.get(row.assunto_id) || { total: 0, acertos: 0 };
    const taxa = st.total ? Math.round((st.acertos / st.total) * 100) : 0;

    let status = saved?.status || "nao_iniciado";
    let estudado = saved?.estudado || status !== "nao_iniciado";
    let dominio = saved?.percentual_dominio || 0;

    if (!saved) {
      if (st.total >= 15 && taxa >= 80) { status = "dominado"; estudado = true; dominio = Math.min(100, taxa); }
      else if (st.total >= 5) { status = "revisando"; estudado = true; dominio = Math.min(80, Math.round(taxa * 0.8)); }
      else if (st.total > 0) { status = "estudando"; estudado = true; dominio = Math.min(50, Math.round((st.total / 10) * 50)); }
    }

    const pesoNum = typeof row.peso === "number" ? row.peso : 50;
    const peso = pesoNum >= 85 ? "critico" : pesoNum >= 65 ? "alto" : pesoNum >= 35 ? "medio" : "baixo";

    const item = {
      id: saved?.id || `topico-${row.disciplina_id}-${row.assunto_id}`,
      disciplina_id: row.disciplina_id,
      disciplina_nome: disc.nome,
      assunto_id: row.assunto_id,
      assunto_nome: assunto.nome,
      peso,
      incidencia_percentual: typeof row.incidencia === "number" ? row.incidencia : 0,
      estudado,
      status,
      percentual_dominio: dominio,
      questoes_respondidas: st.total,
      questoes_acertadas: st.acertos,
      taxa_acerto: taxa,
      ultima_atividade: st.ultimaData || saved?.updated_at || null,
    };

    const grupo = grupos.get(row.disciplina_id) || { nome: disc.nome, topicos: [] };
    if (!grupo.topicos.some((x: any) => x.assunto_id === row.assunto_id)) grupo.topicos.push(item);
    grupos.set(row.disciplina_id, grupo);
  }

  let total = 0, estudados = 0, dominados = 0, questoes = 0, acertos = 0;
  const disciplinas = Array.from(grupos.entries()).map(([disciplina_id, g]: [string, any]) => {
    const e = g.topicos.filter((x: any) => x.estudado).length;
    const d = g.topicos.filter((x: any) => x.status === "dominado").length;
    const q = g.topicos.reduce((n: number, x: any) => n + x.questoes_respondidas, 0);
    const a = g.topicos.reduce((n: number, x: any) => n + x.questoes_acertadas, 0);
    total += g.topicos.length; estudados += e; dominados += d; questoes += q; acertos += a;
    return {
      disciplina_id,
      disciplina_nome: g.nome,
      topicos: g.topicos,
      total_topicos: g.topicos.length,
      topicos_estudados: e,
      topicos_dominados: d,
      percentual_conclusao: Math.round((e / Math.max(1, g.topicos.length)) * 100),
    };
  });

  return NextResponse.json({
    edital: {
      id: edital.id,
      edital_id: edital.edital_id,
      nome: edital.nome,
      orgao: edital.orgao_nome,
      cargo: edital.cargo,
      uf: edital.uf,
      arquivo_nome: edital.arquivo_nome,
      confirmado_em: edital.confirmado_em,
    },
    resumo: {
      total_topicos: total,
      topicos_estudados: estudados,
      topicos_dominados: dominados,
      percentual_conclusao: Math.round((estudados / Math.max(1, total)) * 100),
      taxa_acerto_global: questoes ? Math.round((acertos / questoes) * 100) : 0,
      disciplinas,
    },
  });
}
