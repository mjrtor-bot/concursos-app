import { NextResponse } from "next/server";
import { createClientServer, createAdminClient } from "@/lib/supabase/server";

type Importado = {
  id: string;
  nome: string | null;
  orgao_nome: string | null;
  cargo: string | null;
  uf: string | null;
  status: string;
  arquivo_nome: string | null;
  estrutura_extraida: any;
  edital_id: string | null;
};

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);
}

async function materializarImportado(admin: any, item: Importado, sourceUrl: string) {
  const tituloBase = (item.nome || item.arquivo_nome || "Edital importado").trim();
  const concursoNome = tituloBase;
  const cargoNome = (item.cargo || "Cargo importado").trim();
  const orgao = (item.orgao_nome || "Edital importado").trim();

  if (item.edital_id) {
    const { data: atual } = await admin
      .from("editais_concurso")
      .select("id,titulo,concurso_id,cargo_id")
      .eq("id", item.edital_id)
      .maybeSingle();

    if (atual && atual.cargo_id) {
      const [{ data: atualCargo }, { data: atualConcurso }] = await Promise.all([
        admin.from("concurso_cargos").select("id,nome,concurso_id").eq("id", atual.cargo_id).maybeSingle(),
        admin.from("concursos").select("id,nome,orgao").eq("id", atual.concurso_id).maybeSingle(),
      ]);

      const mesmoCargo =
        atualCargo?.nome?.trim().toLowerCase() === cargoNome.toLowerCase();
      const mesmoOrgao =
        atualConcurso?.orgao?.trim().toLowerCase() === orgao.toLowerCase();
      const mesmoNome =
        atualConcurso?.nome?.trim().toLowerCase() === concursoNome.toLowerCase();

      if (mesmoCargo && mesmoOrgao && mesmoNome) {
        return atual.id;
      }
    }
  }

  const { data: concurso, error: concursoError } = await admin
    .from("concursos")
    .insert({
      nome: concursoNome,
      orgao,
      esfera: "estadual",
      uf: item.uf || null,
      status: "publicado",
      fonte_oficial_url: sourceUrl,
    })
    .select("id")
    .single();

  if (concursoError || !concurso) throw new Error(concursoError?.message || "Não foi possível criar o concurso importado.");

  const { data: cargo, error: cargoError } = await admin
    .from("concurso_cargos")
    .insert({
      concurso_id: concurso.id,
      nome: cargoNome,
      escolaridade: "superior",
      vagas: null,
      salario: null,
      fonte_oficial_url: sourceUrl,
      ativo: true,
    })
    .select("id")
    .single();

  if (cargoError || !cargo) throw new Error(cargoError?.message || "Não foi possível criar o cargo do edital importado.");

  const { data: edital, error: editalError } = await admin
    .from("editais_concurso")
    .insert({
      concurso_id: concurso.id,
      cargo_id: cargo.id,
      numero: null,
      titulo: `${tituloBase} — ${cargoNome}`,
      publicado_em: new Date().toISOString().slice(0, 10),
      prova_em: null,
      fonte_oficial_url: sourceUrl,
      pdf_url: null,
      status: "publicado",
      banca: null,
      fonte_conteudo_url: sourceUrl,
    })
    .select("id")
    .single();

  if (editalError || !edital) throw new Error(editalError?.message || "Não foi possível criar o edital importado.");

  const disciplinas = Array.isArray(item.estrutura_extraida?.disciplinas)
    ? item.estrutura_extraida.disciplinas
    : [];

  let ordem = 0;
  for (const disciplina of disciplinas) {
    const disciplinaNome = String(disciplina?.nome || "").trim();
    if (!disciplinaNome) continue;
    const disciplinaSlug = slugify(disciplinaNome);

    let { data: d } = await admin
      .from("disciplinas")
      .select("id")
      .eq("slug", disciplinaSlug)
      .maybeSingle();

    if (!d) {
      const { data: nova, error } = await admin
        .from("disciplinas")
        .insert({ nome: disciplinaNome, slug: disciplinaSlug })
        .select("id")
        .single();
      if (error || !nova) throw new Error(error?.message || `Falha ao criar disciplina ${disciplinaNome}`);
      d = nova;
    }

    const assuntos = Array.isArray(disciplina?.assuntos) ? disciplina.assuntos : [];
    for (const assuntoRaw of assuntos) {
      const assuntoNome = String(assuntoRaw || "").trim();
      if (!assuntoNome) continue;
      const assuntoSlug = slugify(assuntoNome);

      let { data: a } = await admin
        .from("assuntos")
        .select("id")
        .eq("disciplina_id", d.id)
        .eq("slug", assuntoSlug)
        .maybeSingle();

      if (!a) {
        const { data: novo, error } = await admin
          .from("assuntos")
          .insert({ disciplina_id: d.id, nome: assuntoNome, slug: assuntoSlug })
          .select("id")
          .single();
        if (error || !novo) throw new Error(error?.message || `Falha ao criar assunto ${assuntoNome}`);
        a = novo;
      }

      ordem += 1;
      await admin.from("edital_topicos").upsert(
        {
          edital_id: edital.id,
          disciplina_id: d.id,
          assunto_id: a.id,
          ordem,
        },
        { onConflict: "edital_id,disciplina_id,assunto_id" }
      );
    }
  }

  await admin
    .from("editais_usuario")
    .update({ edital_id: edital.id, updated_at: new Date().toISOString() })
    .eq("id", item.id);

  return edital.id;
}

export async function GET(request: Request) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const [{ data: concursos, error: concursosError }, { data: alvo, error: alvoError }, { data: importados, error: importadosError }] = await Promise.all([
    supabase.from("concursos").select("id,nome,orgao,esfera,uf,status,fonte_oficial_url,concurso_cargos(id,nome,escolaridade,vagas,salario,fonte_oficial_url,ativo,editais_concurso(id,numero,titulo,publicado_em,prova_em,fonte_oficial_url,pdf_url,status))").order("nome"),
    supabase.from("usuario_concurso_alvo").select("concurso_id,cargo_id,edital_id").eq("usuario_id", user.id).maybeSingle(),
    supabase.from("editais_usuario").select("id,nome,orgao_nome,cargo,uf,status,arquivo_nome,estrutura_extraida,edital_id").eq("usuario_id", user.id).in("status", ["aguardando_revisao","confirmado"]).order("updated_at", { ascending: false }),
  ]);

  if (concursosError) return NextResponse.json({ error: concursosError.message }, { status: 500 });
  if (alvoError) return NextResponse.json({ error: alvoError.message }, { status: 500 });
  if (importadosError) return NextResponse.json({ error: importadosError.message }, { status: 500 });

  const lista = [...(concursos || [])];
  const admin = createAdminClient();
  const sourceUrl = `https://${new URL(request.url).host}/mentoria/edital/importados`;

  if (admin) {
    for (const item of (importados || []) as Importado[]) {
      try {
        const editalId = await materializarImportado(admin, item, sourceUrl);
        const { data: materializado } = await admin
          .from("editais_concurso")
          .select("id,concurso_id,cargo_id,numero,titulo,publicado_em,prova_em,fonte_oficial_url,pdf_url,status")
          .eq("id", editalId)
          .maybeSingle();

        if (!materializado) continue;

        const { data: concurso } = await admin
          .from("concursos")
          .select("id,nome,orgao,esfera,uf,status,fonte_oficial_url")
          .eq("id", materializado.concurso_id)
          .single();
        const { data: cargo } = await admin
          .from("concurso_cargos")
          .select("id,nome,escolaridade,vagas,salario,fonte_oficial_url,ativo")
          .eq("id", materializado.cargo_id)
          .single();

        if (!concurso || !cargo) continue;

        lista.push({
          ...concurso,
          concurso_cargos: [{
            ...cargo,
            editais_concurso: [materializado],
          }],
        } as any);
      } catch {
        // Um edital pessoal com falha de materialização não deve derrubar a lista oficial.
      }
    }
  }

  return NextResponse.json({ concursos: lista, alvo: alvo ?? null });
}

export async function PUT(request: Request) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const body = await request.json().catch(() => null) as { concurso_id?: string; cargo_id?: string; edital_id?: string | null } | null;
  if (!body?.concurso_id || !body?.cargo_id) {
    return NextResponse.json({ error: "Concurso e cargo são obrigatórios" }, { status: 400 });
  }

  const { data: cargo } = await supabase.from("concurso_cargos").select("id").eq("id", body.cargo_id).eq("concurso_id", body.concurso_id).eq("ativo", true).maybeSingle();
  if (!cargo) return NextResponse.json({ error: "Cargo não pertence ao concurso informado" }, { status: 400 });

  let editalId: string | null = body.edital_id ?? null;
  if (editalId) {
    const { data: edital } = await supabase.from("editais_concurso").select("id").eq("id", editalId).eq("concurso_id", body.concurso_id).eq("cargo_id", body.cargo_id).maybeSingle();
    if (!edital) return NextResponse.json({ error: "Edital não pertence ao concurso/cargo informado" }, { status: 400 });
  } else {
    const { data: edital } = await supabase.from("editais_concurso").select("id").eq("concurso_id", body.concurso_id).eq("cargo_id", body.cargo_id).order("publicado_em", { ascending: false }).limit(1).maybeSingle();
    editalId = edital?.id ?? null;
  }

  const { data: alvoAnterior } = await supabase.from("usuario_concurso_alvo").select("edital_id").eq("usuario_id", user.id).maybeSingle();
  const mudouEdital = alvoAnterior?.edital_id !== editalId;

  const { data, error } = await supabase.from("usuario_concurso_alvo").upsert({
    usuario_id: user.id, concurso_id: body.concurso_id, cargo_id: body.cargo_id, edital_id: editalId, updated_at: new Date().toISOString(),
  }, { onConflict: "usuario_id" }).select("concurso_id,cargo_id,edital_id").single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  if (mudouEdital) {
    const { error: archiveError } = await supabase.from("mentoria_planos")
      .update({ status: "arquivado", updated_at: new Date().toISOString() })
      .eq("usuario_id", user.id).eq("status", "ativo");
    if (archiveError) return NextResponse.json({ error: archiveError.message }, { status: 500 });

    const { error: limparError } = await supabase.from("mentoria_edital_topicos").delete().eq("usuario_id", user.id);
    if (limparError) return NextResponse.json({ error: limparError.message }, { status: 500 });
  }

  if (editalId) {
    const { data: topicos, error: topicosError } = await supabase.from("edital_topicos")
      .select("disciplina_id,assunto_id,peso,incidencia")
      .eq("edital_id", editalId)
      .not("assunto_id", "is", null);
    if (topicosError) return NextResponse.json({ error: topicosError.message }, { status: 500 });

    if (topicos?.length) {
      const linhas = topicos.map((t) => ({
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
      const { error: syncError } = await supabase.from("mentoria_edital_topicos")
        .upsert(linhas, { onConflict: "usuario_id,disciplina_id,assunto_id" });
      if (syncError) return NextResponse.json({ error: syncError.message }, { status: 500 });
    }
  }

  return NextResponse.json({ alvo: data, mudou_edital: mudouEdital });
}
