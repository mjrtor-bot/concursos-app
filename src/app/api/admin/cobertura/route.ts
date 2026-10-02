import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

async function getAdminClient() {
  const s = await createClientServer();
  if (!s) return { e: NextResponse.json({ error: "Supabase indisponível" }, { status: 503 }) };
  const { data: { user } } = await s.auth.getUser();
  if (!user) return { e: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
  const { data: p } = await s.from("profiles").select("role").eq("id", user.id).single();
  if (!p || !["admin", "editor"].includes(p.role)) {
    return { e: NextResponse.json({ error: "Sem permissão" }, { status: 403 }) };
  }
  return { s };
}

export async function GET(request: NextRequest) {
  const auth = await getAdminClient();
  if (auth.e) return auth.e;
  const s = auth.s!;

  // 1. Fetch editais with concursos and cargos
  const { data: editais, error: editaisError } = await s
    .from("editais_concurso")
    .select(`
      id,
      numero,
      titulo,
      publicado_em,
      prova_em,
      banca,
      status,
      concurso_id,
      cargo_id,
      concursos ( id, nome, orgao, uf ),
      concurso_cargos ( id, nome )
    `)
    .order("publicado_em", { ascending: false });

  if (editaisError) {
    return NextResponse.json({ error: editaisError.message }, { status: 500 });
  }

  // 2. Fetch all edital_topicos
  const { data: topicos, error: topicosError } = await s
    .from("edital_topicos")
    .select(`
      id,
      edital_id,
      disciplina_id,
      assunto_id,
      peso,
      incidencia,
      ordem,
      disciplinas ( id, nome, slug ),
      assuntos ( id, nome, slug )
    `)
    .order("ordem", { ascending: true });

  if (topicosError) {
    return NextResponse.json({ error: topicosError.message }, { status: 500 });
  }

  // 3. Fetch question counts grouped by disciplina_id and assunto_id
  const { data: questoes, error: questoesError } = await s
    .from("questoes")
    .select("id, disciplina_id, assunto_id")
    .eq("anulada", false)
    .neq("auditoria_status", "irrecuperavel");

  if (questoesError) {
    return NextResponse.json({ error: questoesError.message }, { status: 500 });
  }

  // Build question count maps
  const countByAssunto = new Map<string, number>();
  const countByDisciplina = new Map<string, number>();

  for (const q of questoes || []) {
    if (q.assunto_id) {
      countByAssunto.set(q.assunto_id, (countByAssunto.get(q.assunto_id) || 0) + 1);
    }
    if (q.disciplina_id) {
      countByDisciplina.set(q.disciplina_id, (countByDisciplina.get(q.disciplina_id) || 0) + 1);
    }
  }

  // Group topics by edital_id
  const topicosByEdital = new Map<string, any[]>();
  for (const t of topicos || []) {
    if (!t.edital_id) continue;
    const list = topicosByEdital.get(t.edital_id) || [];
    list.push(t);
    topicosByEdital.set(t.edital_id, list);
  }

  // 4. Build coverage per edital
  const relatorios = (editais || []).map((edital: any) => {
    const editalTopicos = topicosByEdital.get(edital.id) || [];
    const totalTopicos = editalTopicos.length;

    const disciplinasMap = new Map<string, {
      disciplina_id: string;
      disciplina_nome: string;
      questoes_total_disciplina: number;
      topicos: Array<{
        topico_id: string;
        assunto_id: string;
        assunto_nome: string;
        peso: number;
        incidencia: number;
        ordem: number;
        questoes_assunto: number;
        status_cobertura: "coberto" | "parcial" | "sem_questoes";
      }>;
    }>();

    let topicosComQuestoes = 0;

    for (const t of editalTopicos) {
      const discId = t.disciplina_id || "sem_disciplina";
      const discNome = t.disciplinas?.nome || "Disciplina não informada";
      const assuntoId = t.assunto_id || "";
      const assuntoNome = t.assuntos?.nome || "Assunto não informado";
      const questoesAssunto = assuntoId ? (countByAssunto.get(assuntoId) || 0) : 0;
      const questoesDisc = discId ? (countByDisciplina.get(discId) || 0) : 0;

      if (questoesAssunto > 0) {
        topicosComQuestoes++;
      }

      let statusCobertura: "coberto" | "parcial" | "sem_questoes" = "sem_questoes";
      if (questoesAssunto > 0) {
        statusCobertura = "coberto";
      } else if (questoesDisc > 0) {
        statusCobertura = "parcial";
      }

      if (!disciplinasMap.has(discId)) {
        disciplinasMap.set(discId, {
          disciplina_id: discId,
          disciplina_nome: discNome,
          questoes_total_disciplina: questoesDisc,
          topicos: [],
        });
      }

      disciplinasMap.get(discId)!.topicos.push({
        topico_id: t.id,
        assunto_id: assuntoId,
        assunto_nome: assuntoNome,
        peso: Number(t.peso || 50),
        incidencia: Number(t.incidencia || 50),
        ordem: Number(t.ordem || 0),
        questoes_assunto: questoesAssunto,
        status_cobertura: statusCobertura,
      });
    }

    const disciplinasArray = Array.from(disciplinasMap.values());
    const disciplinasSemQuestoes = disciplinasArray
      .filter(d => d.questoes_total_disciplina === 0)
      .map(d => d.disciplina_nome);

    const coberturaPercentual = totalTopicos > 0
      ? Math.round((topicosComQuestoes / totalTopicos) * 100)
      : 0;

    return {
      edital: {
        id: edital.id,
        numero: edital.numero,
        titulo: edital.titulo,
        banca: edital.banca,
        status: edital.status,
        publicado_em: edital.publicado_em,
        prova_em: edital.prova_em,
        concurso_nome: edital.concursos?.nome || "Concurso não informado",
        orgao: edital.concursos?.orgao || "",
        uf: edital.concursos?.uf || "",
        cargo_nome: edital.concurso_cargos?.nome || "Cargo não informado",
      },
      metricas: {
        total_topicos: totalTopicos,
        topicos_com_questoes: topicosComQuestoes,
        topicos_sem_questoes: totalTopicos - topicosComQuestoes,
        cobertura_percentual: coberturaPercentual,
        disciplinas_sem_questoes: disciplinasSemQuestoes,
      },
      disciplinas: disciplinasArray,
    };
  });

  // 5. Auditoria de editais (C4)
  // Editais com 0 tópicos
  const editaisZerados = relatorios
    .filter(r => r.metricas.total_topicos === 0)
    .map(r => r.edital);

  // Editais potencialmente duplicados (mesmo título ou mesmo concurso+cargo)
  const titulosCount = new Map<string, any[]>();
  for (const r of relatorios) {
    const chave = `${(r.edital.concurso_nome || "").toLowerCase().trim()}::${(r.edital.cargo_nome || "").toLowerCase().trim()}::${(r.edital.numero || r.edital.titulo || "").toLowerCase().trim()}`;
    const list = titulosCount.get(chave) || [];
    list.push(r.edital);
    titulosCount.set(chave, list);
  }

  const editaisDuplicados = Array.from(titulosCount.entries())
    .filter(([_, list]) => list.length > 1)
    .map(([chave, itens]) => ({
      chave,
      total: itens.length,
      itens,
    }));

  return NextResponse.json({
    total_editais: relatorios.length,
    relatorios,
    auditoria: {
      editais_zerados: editaisZerados,
      editais_duplicados: editaisDuplicados,
    },
  });
}
