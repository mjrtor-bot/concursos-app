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

export function extrairDisciplinasEstrutura(item: ImportadoItem, cargoPreferido?: string | null): any[] {
  if (Array.isArray(item.estrutura_extraida?.disciplinas) && item.estrutura_extraida.disciplinas.length > 0) {
    return item.estrutura_extraida.disciplinas;
  }
  if (Array.isArray(item.estrutura_extraida?.cargos) && item.estrutura_extraida.cargos.length > 0) {
    const cargoMatch = cargoPreferido
      ? item.estrutura_extraida.cargos.find((c: any) => c.nome?.trim().toLowerCase() === cargoPreferido.trim().toLowerCase())
      : item.estrutura_extraida.cargos[0];

    return cargoMatch?.disciplinas || item.estrutura_extraida.cargos.flatMap((c: any) => c.disciplinas || []);
  }
  return [];
}

export function calcularTotalTopicosEsperados(item: ImportadoItem, cargoPreferido?: string | null): number {
  const disciplinas = extrairDisciplinasEstrutura(item, cargoPreferido);
  let total = 0;

  for (const disciplina of disciplinas) {
    const disciplinaNome = String(disciplina?.nome || "").trim();
    if (!disciplinaNome) continue;

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

      if (subtopicos.length > 0) {
        for (const subRaw of subtopicos) {
          const subNome = typeof subRaw === "object" && subRaw !== null
            ? String(subRaw.nome || "").trim()
            : String(subRaw || "").trim();
          if (!subNome) continue;
          total += 1;
        }
      } else {
        total += 1;
      }
    }
  }

  return total;
}

export function formatarTituloEditalPrivado(tituloBase: string, cargoNome: string): string {
  const baseLimpa = (tituloBase || "Edital importado")
    .replace(/\bOFICIAL\b/gi, "")
    .replace(/\s*—\s*$/, "")
    .trim() || "Edital importado";

  const cargoLimpo = (cargoNome || "")
    .replace(/\bOFICIAL\b/gi, "")
    .replace(/^—\s*|—\s*$/g, "")
    .trim();

  if (!cargoLimpo || cargoLimpo.toLowerCase() === baseLimpa.toLowerCase()) {
    return baseLimpa;
  }
  return `${baseLimpa} — ${cargoLimpo}`;
}

export async function materializarImportado(
  admin: SupabaseClient,
  item: ImportadoItem,
  sourceUrl: string,
  userId?: string,
  cargoPreferido?: string | null
): Promise<string> {
  const tituloBase = (item.nome || item.arquivo_nome || "Edital importado").trim();
  const concursoNome = tituloBase.replace(/\bOFICIAL\b/gi, "").replace(/\s*—\s*$/, "").trim() || "Concurso importado";
  const cargoNome = (cargoPreferido || item.cargo || "Cargo importado").trim();
  const orgao = (item.orgao_nome || "Edital importado").trim();

  let targetEditalId: string | null = null;
  let concursoId: string | null = null;
  let cargoId: string | null = null;

  const totalEsperado = calcularTotalTopicosEsperados(item, cargoPreferido);

  // 1. Verificar se o upload já possui um edital_id válido associado ao usuário
  if (item.edital_id) {
    const { data: atual } = await admin
      .from("editais_concurso")
      .select("id,titulo,concurso_id,cargo_id,status,criado_por")
      .eq("id", item.edital_id)
      .maybeSingle();

    if (atual && (!userId || atual.criado_por === userId)) {
      const { count } = await admin
        .from("edital_topicos")
        .select("id", { count: "exact", head: true })
        .eq("edital_id", atual.id);

      const countReal = count || 0;
      if (totalEsperado > 0 && countReal >= totalEsperado) {
        return atual.id;
      }
      // Se tiver menos tópicos que o esperado, reaproveita o mesmo edital para sincronização idempotente
      targetEditalId = atual.id;
      concursoId = atual.concurso_id;
      cargoId = atual.cargo_id;
    }
  }

  // 2. Reaproveitamento ou criação de Concurso Privado do Usuário
  if (!concursoId && userId) {
    const { data: existingConcursos } = await admin
      .from("concursos")
      .select("id,nome,orgao")
      .eq("criado_por", userId);

    const matchConcurso = existingConcursos?.find(
      (c) =>
        c.nome?.trim().toLowerCase() === concursoNome.toLowerCase() ||
        c.nome?.trim().toLowerCase() === tituloBase.toLowerCase() ||
        (c.orgao?.trim().toLowerCase() === orgao.toLowerCase() &&
          c.nome?.trim().toLowerCase() === tituloBase.toLowerCase())
    );

    if (matchConcurso) {
      concursoId = matchConcurso.id;
    }
  }

  if (!concursoId) {
    const ehOficial = isConcursoOficialValido(item, item.estrutura_extraida?.fonte_oficial_url);
    const { data: concurso, error: concursoError } = await admin
      .from("concursos")
      .insert({
        nome: concursoNome,
        orgao,
        esfera: "estadual",
        uf: item.uf || null,
        status: "rascunho",
        fonte_oficial_url: ehOficial ? (item.estrutura_extraida?.fonte_oficial_url || sourceUrl) : sourceUrl,
        criado_por: userId || null,
      })
      .select("id")
      .single();

    if (concursoError || !concurso) {
      throw new Error(concursoError?.message || "Não foi possível criar o concurso importado.");
    }
    concursoId = concurso.id;
  }

  // 3. Reaproveitamento ou criação de Cargo do Concurso
  if (!cargoId) {
    const { data: existingCargos } = await admin
      .from("concurso_cargos")
      .select("id,nome")
      .eq("concurso_id", concursoId);

    const cargoLimpo = cargoNome.replace(/\bOFICIAL\b/gi, "").trim();
    const matchCargo = existingCargos?.find(
      (c) =>
        c.nome?.trim().toLowerCase() === cargoNome.toLowerCase() ||
        (cargoLimpo && c.nome?.trim().toLowerCase() === cargoLimpo.toLowerCase())
    );

    if (matchCargo) {
      cargoId = matchCargo.id;
    } else {
      const { data: cargo, error: cargoError } = await admin
        .from("concurso_cargos")
        .insert({
          concurso_id: concursoId,
          nome: cargoLimpo || cargoNome || "Cargo importado",
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
      cargoId = cargo.id;
    }
  }

  // 4. Reaproveitamento ou criação de Edital Concurso Privado
  if (!targetEditalId && userId) {
    const { data: existingEditais } = await admin
      .from("editais_concurso")
      .select("id,titulo,created_at")
      .eq("concurso_id", concursoId)
      .eq("cargo_id", cargoId)
      .eq("criado_por", userId)
      .order("created_at", { ascending: true });

    if (existingEditais && existingEditais.length > 0) {
      let bestEdital = existingEditais[0];
      let maxCount = -1;

      for (const ed of existingEditais) {
        const { count } = await admin
          .from("edital_topicos")
          .select("id", { count: "exact", head: true })
          .eq("edital_id", ed.id);
        const cnt = count || 0;
        if (cnt > maxCount) {
          maxCount = cnt;
          bestEdital = ed;
        }
      }

      if (totalEsperado > 0 && maxCount >= totalEsperado) {
        await admin
          .from("editais_usuario")
          .update({ edital_id: bestEdital.id, updated_at: new Date().toISOString() })
          .eq("id", item.id);
        return bestEdital.id;
      }
      targetEditalId = bestEdital.id;
    }
  }

  if (!targetEditalId) {
    const ehOficial = isConcursoOficialValido(item, item.estrutura_extraida?.fonte_oficial_url);
    const tituloFinal = formatarTituloEditalPrivado(tituloBase, cargoNome);

    const { data: edital, error: editalError } = await admin
      .from("editais_concurso")
      .insert({
        concurso_id: concursoId,
        cargo_id: cargoId,
        numero: null,
        titulo: tituloFinal,
        publicado_em: new Date().toISOString().slice(0, 10),
        prova_em: null,
        fonte_oficial_url: sourceUrl,
        pdf_url: null,
        status: "rascunho",
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

  // 5. Extração e normalização de disciplinas/assuntos/subassuntos
  const disciplinas = extrairDisciplinasEstrutura(item, cargoPreferido);

  async function getOrCreateDisciplina(nome: string, slug: string): Promise<string> {
    const { data: existing } = await admin
      .from("disciplinas")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();
    if (existing) return existing.id;

    const { data: created, error } = await admin
      .from("disciplinas")
      .insert({ nome, slug })
      .select("id")
      .maybeSingle();

    if (created) return created.id;

    const { data: retry } = await admin
      .from("disciplinas")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (retry) return retry.id;
    throw new Error(error?.message || `Falha ao registrar disciplina "${nome}".`);
  }

  async function getOrCreateAssunto(disciplinaId: string, nome: string, slug: string): Promise<string> {
    const { data: existing } = await admin
      .from("assuntos")
      .select("id")
      .eq("disciplina_id", disciplinaId)
      .eq("slug", slug)
      .maybeSingle();
    if (existing) return existing.id;

    const { data: created, error } = await admin
      .from("assuntos")
      .insert({ disciplina_id: disciplinaId, nome, slug })
      .select("id")
      .maybeSingle();

    if (created) return created.id;

    const { data: retry } = await admin
      .from("assuntos")
      .select("id")
      .eq("disciplina_id", disciplinaId)
      .eq("slug", slug)
      .maybeSingle();

    if (retry) return retry.id;
    throw new Error(error?.message || `Falha ao registrar assunto "${nome}".`);
  }

  async function getOrCreateSubassunto(assuntoId: string, nome: string, slug: string): Promise<string> {
    const { data: existing } = await admin
      .from("subassuntos")
      .select("id")
      .eq("assunto_id", assuntoId)
      .eq("slug", slug)
      .maybeSingle();
    if (existing) return existing.id;

    const { data: created, error } = await admin
      .from("subassuntos")
      .insert({ assunto_id: assuntoId, nome, slug })
      .select("id")
      .maybeSingle();

    if (created) return created.id;

    const { data: retry } = await admin
      .from("subassuntos")
      .select("id")
      .eq("assunto_id", assuntoId)
      .eq("slug", slug)
      .maybeSingle();

    if (retry) return retry.id;
    throw new Error(error?.message || `Falha ao registrar subassunto "${nome}".`);
  }

  let ordem = 0;
  for (const disciplina of disciplinas) {
    const disciplinaNome = String(disciplina?.nome || "").trim();
    if (!disciplinaNome) continue;
    const disciplinaSlug = slugify(disciplinaNome);
    const disciplinaId = await getOrCreateDisciplina(disciplinaNome, disciplinaSlug);

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
      const assuntoId = await getOrCreateAssunto(disciplinaId, assuntoNome, assuntoSlug);

      if (subtopicos.length > 0) {
        for (const subRaw of subtopicos) {
          const subNome = typeof subRaw === "object" && subRaw !== null
            ? String(subRaw.nome || "").trim()
            : String(subRaw || "").trim();
          if (!subNome) continue;
          const subSlug = slugify(subNome);
          const subassuntoId = await getOrCreateSubassunto(assuntoId, subNome, subSlug);

          ordem += 1;
          const { data: existingTopico } = await admin
            .from("edital_topicos")
            .select("id")
            .eq("edital_id", finalEditalId)
            .eq("disciplina_id", disciplinaId)
            .eq("assunto_id", assuntoId)
            .eq("subassunto_id", subassuntoId)
            .maybeSingle();

          if (existingTopico) {
            await admin
              .from("edital_topicos")
              .update({ ordem })
              .eq("id", existingTopico.id);
          } else {
            const { error: topicoError } = await admin
              .from("edital_topicos")
              .insert({
                edital_id: finalEditalId,
                disciplina_id: disciplinaId,
                assunto_id: assuntoId,
                subassunto_id: subassuntoId,
                ordem,
              });

            if (topicoError) {
              // Checagem rigorosa: só ignora erro de duplicidade se o registro no banco for estritamente idêntico
              const { data: verifyIdentical } = await admin
                .from("edital_topicos")
                .select("id,edital_id,disciplina_id,assunto_id,subassunto_id")
                .eq("edital_id", finalEditalId)
                .eq("disciplina_id", disciplinaId)
                .eq("assunto_id", assuntoId)
                .eq("subassunto_id", subassuntoId)
                .maybeSingle();

              if (verifyIdentical) {
                await admin
                  .from("edital_topicos")
                  .update({ ordem })
                  .eq("id", verifyIdentical.id);
              } else {
                console.error(`[materializarImportado] Erro estruturado ao inserir tópico (subassunto "${subNome}"):`, {
                  error: topicoError,
                  edital_id: finalEditalId,
                  disciplina_id: disciplinaId,
                  assunto_id: assuntoId,
                  subassunto_id: subassuntoId,
                  ordem,
                });
                throw new Error(`Falha ao inserir tópico do edital (subassunto "${subNome}"): ${topicoError.message}`);
              }
            }
          }
        }
      } else {
        ordem += 1;
        const { data: existingTopico } = await admin
          .from("edital_topicos")
          .select("id")
          .eq("edital_id", finalEditalId)
          .eq("disciplina_id", disciplinaId)
          .eq("assunto_id", assuntoId)
          .is("subassunto_id", null)
          .maybeSingle();

        if (existingTopico) {
          await admin
            .from("edital_topicos")
            .update({ ordem })
            .eq("id", existingTopico.id);
        } else {
          const { error: topicoError } = await admin
            .from("edital_topicos")
            .insert({
              edital_id: finalEditalId,
              disciplina_id: disciplinaId,
              assunto_id: assuntoId,
              subassunto_id: null,
              ordem,
            });

          if (topicoError) {
            // Checagem rigorosa: só ignora erro de duplicidade se o registro no banco for estritamente idêntico
            const { data: verifyIdentical } = await admin
              .from("edital_topicos")
              .select("id,edital_id,disciplina_id,assunto_id,subassunto_id")
              .eq("edital_id", finalEditalId)
              .eq("disciplina_id", disciplinaId)
              .eq("assunto_id", assuntoId)
              .is("subassunto_id", null)
              .maybeSingle();

            if (verifyIdentical) {
              await admin
                .from("edital_topicos")
                .update({ ordem })
                .eq("id", verifyIdentical.id);
            } else {
              console.error(`[materializarImportado] Erro estruturado ao inserir tópico (assunto "${assuntoNome}"):`, {
                error: topicoError,
                edital_id: finalEditalId,
                disciplina_id: disciplinaId,
                assunto_id: assuntoId,
                subassunto_id: null,
                ordem,
              });
              throw new Error(`Falha ao inserir tópico do edital (assunto "${assuntoNome}"): ${topicoError.message}`);
            }
          }
        }
      }
    }
  }

  // 6. Validação final: count real === esperado
  const { count: countRealFinal, error: countFinalErr } = await admin
    .from("edital_topicos")
    .select("id", { count: "exact", head: true })
    .eq("edital_id", finalEditalId);

  if (countFinalErr) {
    console.error(`[materializarImportado] Erro ao validar contagem de tópicos do edital ${finalEditalId}:`, countFinalErr);
    throw new Error(`Erro ao validar tópicos do edital: ${countFinalErr.message}`);
  }

  const real = countRealFinal || 0;
  if (totalEsperado > 0 && real !== totalEsperado) {
    const motivo = `Divergência na contagem de tópicos: esperado ${totalEsperado}, gravado ${real} no edital ${finalEditalId}.`;
    console.error(`[materializarImportado] ${motivo}`, {
      upload_id: item.id,
      edital_id: finalEditalId,
      esperado: totalEsperado,
      real,
    });
    throw new Error(motivo);
  }

  const { error: updateError } = await admin
    .from("editais_usuario")
    .update({
      edital_id: finalEditalId,
      updated_at: new Date().toISOString()
    })
    .eq("id", item.id);

  if (updateError) {
    console.error(`[materializarImportado] Erro ao vincular edital_id=${finalEditalId} a editais_usuario id=${item.id}:`, updateError);
    throw new Error(`Falha ao atualizar edital_id no upload: ${updateError.message}`);
  }

  return finalEditalId;
}
