import { NextResponse } from "next/server";
import { createAdminClient, createClientServer } from "@/lib/supabase/server";
import { materializarImportado, ImportadoItem } from "@/lib/editais/materializarImportado";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { id } = await params;
  const admin = createAdminClient();

  // Buscar edital importado (aceita aguardando_revisao e confirmado)
  const clientToQuery = admin || supabase;
  const { data: edital, error: editalError } = await clientToQuery
    .from("editais_usuario")
    .select("id,nome,orgao_nome,cargo,uf,arquivo_nome,status,confirmado_em,edital_id,estrutura_extraida")
    .eq("id", id)
    .eq("usuario_id", user.id)
    .in("status", ["aguardando_revisao", "confirmado"])
    .maybeSingle();

  if (editalError) return NextResponse.json({ error: editalError.message }, { status: 500 });
  if (!edital) return NextResponse.json({ error: "Edital importado não encontrado ou ainda em processamento." }, { status: 404 });

  let targetEditalId = edital.edital_id;

  // Se ainda não tem edital_id ou não tem tópicos gerados, materializa agora
  if (!targetEditalId && edital.estrutura_extraida) {
    if (!admin) {
      return NextResponse.json(
        { error: "Serviço de materialização indisponível. Verifique as credenciais administrativas." },
        { status: 503 }
      );
    }
    try {
      const sourceUrl = new URL(request.url).origin || "https://concursos.app";
      targetEditalId = await materializarImportado(
        admin,
        edital as unknown as ImportadoItem,
        sourceUrl,
        user.id,
        edital.cargo
      );
    } catch (err: any) {
      console.error("[verticalizado/route] Erro ao materializar importado:", err);
      return NextResponse.json({ error: err?.message || "Falha ao preparar tópicos do edital." }, { status: 500 });
    }
  }

  if (!targetEditalId) {
    return NextResponse.json({ error: "O edital importado ainda está preparando a estrutura de tópicos." }, { status: 409 });
  }

  const estrutura = (edital as any).estrutura_extraida || {};
  let disciplinasEstrutura: any[] = [];
  if (Array.isArray(estrutura.disciplinas) && estrutura.disciplinas.length > 0) {
    disciplinasEstrutura = estrutura.disciplinas;
  } else if (Array.isArray(estrutura.cargos) && estrutura.cargos.length > 0) {
    const cargoMatch = edital.cargo
      ? estrutura.cargos.find((c: any) => c.nome?.trim().toLowerCase() === edital.cargo?.trim().toLowerCase())
      : estrutura.cargos[0];
    disciplinasEstrutura = cargoMatch?.disciplinas || estrutura.cargos.flatMap((c: any) => c.disciplinas || []);
  }

  const paresImportados = new Set<string>();
  for (const d of disciplinasEstrutura) {
    const dNome = String(d?.nome || "").trim().toLowerCase();
    const assuntos = Array.isArray(d?.assuntos) ? d.assuntos : [];
    for (const a of assuntos) {
      const aNome = (typeof a === "object" && a !== null ? String(a.nome || "") : String(a || "")).trim().toLowerCase();
      if (dNome && aNome) {
        paresImportados.add(`${dNome}|||${aNome}`);
      }
    }
  }

  let topicosRes = await clientToQuery
    .from("edital_topicos")
    .select("disciplina_id,assunto_id,peso,incidencia,ordem,disciplinas(id,nome),assuntos(id,nome)")
    .eq("edital_id", targetEditalId)
    .order("ordem", { ascending: true });

  // Se não encontrou tópicos cadastrados no banco, tenta materializar e recarrega
  if ((!topicosRes.data || topicosRes.data.length === 0) && admin && edital.estrutura_extraida) {
    try {
      const sourceUrl = new URL(request.url).origin || "https://concursos.app";
      await materializarImportado(
        admin,
        edital as unknown as ImportadoItem,
        sourceUrl,
        user.id,
        edital.cargo
      );
      topicosRes = await clientToQuery
        .from("edital_topicos")
        .select("disciplina_id,assunto_id,peso,incidencia,ordem,disciplinas(id,nome),assuntos(id,nome)")
        .eq("edital_id", targetEditalId)
        .order("ordem", { ascending: true });
    } catch (err) {
      console.error("[verticalizado/route] Erro ao re-materializar tópicos:", err);
    }
  }

  const [salvosRes, respostasRes, equivsRes] = await Promise.all([
    supabase.from("mentoria_edital_topicos").select("*").eq("usuario_id", user.id),
    supabase.from("respostas_usuarios").select("correta,created_at,questoes(assunto_id)").eq("usuario_id", user.id),
    supabase.from("assunto_equivalencias").select("assunto_questao_id,assunto_edital_id"),
  ]);

  if (topicosRes.error) return NextResponse.json({ error: topicosRes.error.message }, { status: 500 });
  if (respostasRes.error) {
    console.error("[verticalizado/route] Erro ao buscar respostas_usuarios:", respostasRes.error);
  }

  const equivMap = new Map<string, Set<string>>();
  for (const eq of (equivsRes.data || []) as any[]) {
    if (eq.assunto_edital_id && eq.assunto_questao_id) {
      if (!equivMap.has(eq.assunto_edital_id)) equivMap.set(eq.assunto_edital_id, new Set([eq.assunto_edital_id]));
      equivMap.get(eq.assunto_edital_id)!.add(eq.assunto_questao_id);

      if (!equivMap.has(eq.assunto_questao_id)) equivMap.set(eq.assunto_questao_id, new Set([eq.assunto_questao_id]));
      equivMap.get(eq.assunto_questao_id)!.add(eq.assunto_edital_id);
    }
  }

  const salvos = new Map((salvosRes.data || []).map((x: any) => [x.assunto_id, x]));
  const stats = new Map<string, { total: number; acertos: number; ultimaData?: string }>();

  for (const r of (respostasRes.data || []) as any[]) {
    const questaoRel = r.questoes as unknown as { assunto_id?: string } | { assunto_id?: string }[] | null;
    const questao = Array.isArray(questaoRel) ? questaoRel[0] : questaoRel;
    const assuntoId = questao?.assunto_id;
    if (!assuntoId) continue;
    const s = stats.get(assuntoId) || { total: 0, acertos: 0 };
    s.total++;
    if (r.correta) s.acertos++;
    if (!s.ultimaData || (r.created_at && r.created_at > s.ultimaData)) s.ultimaData = r.created_at;
    stats.set(assuntoId, s);
  }

  const grupos = new Map<string, any>();
  for (const row of topicosRes.data || []) {
    const disc = Array.isArray(row.disciplinas) ? row.disciplinas[0] : row.disciplinas;
    const assunto = Array.isArray(row.assuntos) ? row.assuntos[0] : row.assuntos;
    if (!row.disciplina_id || !row.assunto_id || !disc?.nome || !assunto?.nome) continue;

    const normDisc = String(disc.nome).trim().toLowerCase();
    const normAssunto = String(assunto.nome).trim().toLowerCase();
    if (paresImportados.size > 0 && !paresImportados.has(`${normDisc}|||${normAssunto}`)) continue;

    const saved = salvos.get(row.assunto_id);
    const matchingIds = equivMap.get(row.assunto_id) || new Set([row.assunto_id]);
    let totalAssunto = 0;
    let acertosAssunto = 0;
    let ultimaDataAssunto: string | undefined = undefined;

    for (const assId of matchingIds) {
      const s = stats.get(assId);
      if (s) {
        totalAssunto += s.total;
        acertosAssunto += s.acertos;
        if (s.ultimaData && (!ultimaDataAssunto || s.ultimaData > ultimaDataAssunto)) {
          ultimaDataAssunto = s.ultimaData;
        }
      }
    }

    const st = { total: totalAssunto, acertos: acertosAssunto, ultimaData: ultimaDataAssunto };
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
      taxa_acerto_media: q ? Math.round((a / q) * 100) : 0,
    };
  });

  return NextResponse.json({
    edital: {
      id: edital.id,
      edital_id: targetEditalId,
      nome: edital.nome,
      orgao: edital.orgao_nome,
      cargo: edital.cargo,
      uf: edital.uf,
      arquivo_nome: edital.arquivo_nome,
      confirmado_em: edital.confirmado_em,
      status: edital.status,
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
