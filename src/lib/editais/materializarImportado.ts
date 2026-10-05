import { SupabaseClient } from "@supabase/supabase-js";

export type ImportadoItem = {
  id: string;
  nome: string | null;
  orgao_nome: string | null;
  cargo: string | null;
  uf: string | null;
  status?: string;
  arquivo_nome?: string | null;
  estrutura_extraida: any;
  edital_id?: string | null;
};

const UFS_VALIDAS = new Set([
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO"
]);

export function isConcursoOficialValido(item: ImportadoItem, fonteExterna?: string | null): boolean {
  const orgao = (item.orgao_nome || "").trim();
  if (!orgao || orgao.length < 3 || orgao.toLowerCase() === "edital importado") return false;

  const uf = (item.uf || "").trim().toUpperCase();
  if (!UFS_VALIDAS.has(uf)) return false;

  const banca = (item.estrutura_extraida?.banca || "").trim();
  if (!banca || banca.length < 2) return false;

  const fonte = (fonteExterna || "").trim();
  if (!fonte || !/^https?:\/\//i.test(fonte)) return false;
  if (
    fonte.includes("/mentoria/edital/importados") ||
    fonte.includes("localhost") ||
    fonte.includes("mjrtor.com.br") ||
    fonte.includes("vercel.app")
  ) {
    return false;
  }

  return true;
}

export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);
}

export async function materializarImportado(
  admin: SupabaseClient,
  item: ImportadoItem,
  sourceUrl: string,
  userId?: string,
  cargoPreferido?: string | null
): Promise<string> {
  const tituloBase = (item.nome || item.arquivo_nome || "Edital importado").trim();
  const concursoNome = tituloBase;
  const cargoNome = (cargoPreferido || item.cargo || "Cargo importado").trim();
  const orgao = (item.orgao_nome || "Edital importado").trim();

  let targetEditalId = item.edital_id || null;

  if (targetEditalId) {
    const { data: atual } = await admin
      .from("editais_concurso")
      .select("id,titulo,concurso_id,cargo_id,status,criado_por")
      .eq("id", targetEditalId)
      .maybeSingle();

    if (atual && atual.cargo_id) {
      const [{ data: atualCargo }, { data: atualConcurso }] = await Promise.all([
        admin.from("concurso_cargos").select("id,nome,concurso_id").eq("id", atual.cargo_id).maybeSingle(),
        admin.from("concursos").select("id,nome,orgao,criado_por").eq("id", atual.concurso_id).maybeSingle(),
      ]);

      const mesmoCargo =
        atualCargo?.nome?.trim().toLowerCase() === cargoNome.toLowerCase();
      const mesmoOrgao =
        atualConcurso?.orgao?.trim().toLowerCase() === orgao.toLowerCase();
      const mesmoNome =
        atualConcurso?.nome?.trim().toLowerCase() === concursoNome.toLowerCase();

      const pertenceAoUsuario = Boolean(
        userId && atual.criado_por === userId && atualConcurso?.criado_por === userId
      );

      if (mesmoCargo && mesmoOrgao && mesmoNome && pertenceAoUsuario) {
        // Verificar se já tem tópicos cadastrados
        const { count } = await admin
          .from("edital_topicos")
          .select("id", { count: "exact", head: true })
          .eq("edital_id", atual.id);

        if (count && count > 0) {
          return atual.id;
        }
        // Se não tiver tópicos, reusa o atual.id e popula abaixo
        targetEditalId = atual.id;
      } else if (!pertenceAoUsuario) {
        targetEditalId = null;
      }
    } else {
      targetEditalId = null;
    }
  }

  if (!targetEditalId) {
    const ehOficial = isConcursoOficialValido(item, item.estrutura_extraida?.fonte_oficial_url);
    const statusConcurso = "rascunho";

    const { data: concurso, error: concursoError } = await admin
      .from("concursos")
      .insert({
        nome: concursoNome,
        orgao,
        esfera: "estadual",
        uf: item.uf || null,
        status: statusConcurso,
        fonte_oficial_url: ehOficial ? (item.estrutura_extraida?.fonte_oficial_url || sourceUrl) : sourceUrl,
        criado_por: userId || null,
      })
      .select("id")
      .single();

    if (concursoError || !concurso) {
      throw new Error(concursoError?.message || "Não foi possível criar o concurso importado.");
    }

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

    if (cargoError || !cargo) {
      throw new Error(cargoError?.message || "Não foi possível criar o cargo do edital importado.");
    }

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
        status: statusConcurso,
        banca: ehOficial ? (item.estrutura_extraida?.banca || null) : null,
        fonte_conteudo_url: sourceUrl,
        criado_por: userId || null,
        visibilidade: "privado",
      })
      .select("id")
      .single();

    if (editalError || !edital) {
      throw new Error(editalError?.message || "Não foi possível criar o edital importado.");
    }

    targetEditalId = edital.id;
  }

  if (!targetEditalId) {
    throw new Error("Não foi possível determinar o identificador do edital.");
  }

  const finalEditalId: string = targetEditalId;

  // Extrair disciplinas
  let disciplinas: any[] = [];
  if (Array.isArray(item.estrutura_extraida?.disciplinas) && item.estrutura_extraida.disciplinas.length > 0) {
    disciplinas = item.estrutura_extraida.disciplinas;
  } else if (Array.isArray(item.estrutura_extraida?.cargos) && item.estrutura_extraida.cargos.length > 0) {
    const cargoMatch = cargoPreferido
      ? item.estrutura_extraida.cargos.find((c: any) => c.nome?.trim().toLowerCase() === cargoPreferido.trim().toLowerCase())
      : item.estrutura_extraida.cargos[0];

    disciplinas = cargoMatch?.disciplinas || item.estrutura_extraida.cargos.flatMap((c: any) => c.disciplinas || []);
  }

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
      if (error || !nova) {
        throw new Error(error?.message || `Falha ao criar disciplina ${disciplinaNome}`);
      }
      d = nova;
    }

    const assuntos = Array.isArray(disciplina?.assuntos) ? disciplina.assuntos : [];
    for (const assuntoRaw of assuntos) {
      let assuntoNome = "";
      let subtopicos: any[] = [];

      if (typeof assuntoRaw === "object" && assuntoRaw !== null) {
        assuntoNome = String(assuntoRaw.nome || "").trim();
        subtopicos = Array.isArray(assuntoRaw.subassuntos)
          ? assuntoRaw.subassuntos
          : (Array.isArray(assuntoRaw.topicos) ? assuntoRaw.topicos : []);
      } else {
        assuntoNome = String(assuntoRaw || "").trim();
      }

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
        if (error || !novo) {
          throw new Error(error?.message || `Falha ao criar assunto ${assuntoNome}`);
        }
        a = novo;
      }

      if (subtopicos.length > 0) {
        for (const subRaw of subtopicos) {
          const subNome = typeof subRaw === "object" && subRaw !== null
            ? String(subRaw.nome || "").trim()
            : String(subRaw || "").trim();
          if (!subNome) continue;
          const subSlug = slugify(subNome);

          let { data: sub } = await admin
            .from("subassuntos")
            .select("id")
            .eq("assunto_id", a.id)
            .eq("slug", subSlug)
            .maybeSingle();

          if (!sub) {
            const { data: novoSub, error } = await admin
              .from("subassuntos")
              .insert({ assunto_id: a.id, nome: subNome, slug: subSlug })
              .select("id")
              .single();
            if (error || !novoSub) {
              throw new Error(error?.message || `Falha ao criar subassunto ${subNome}`);
            }
            sub = novoSub;
          }

          ordem += 1;
          await admin.from("edital_topicos").upsert(
            {
              edital_id: finalEditalId,
              disciplina_id: d.id,
              assunto_id: a.id,
              subassunto_id: sub.id,
              ordem,
            },
            { onConflict: "edital_id,disciplina_id,assunto_id,subassunto_id" }
          );
        }
      } else {
        ordem += 1;
        await admin.from("edital_topicos").upsert(
          {
            edital_id: finalEditalId,
            disciplina_id: d.id,
            assunto_id: a.id,
            subassunto_id: null,
            ordem,
          },
          { onConflict: "edital_id,disciplina_id,assunto_id,subassunto_id" }
        );
      }
    }
  }

  await admin
    .from("editais_usuario")
    .update({
      edital_id: finalEditalId,
      updated_at: new Date().toISOString()
    })
    .eq("id", item.id);

  return finalEditalId;
}
