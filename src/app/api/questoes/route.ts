import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { mockQuestoes } from "@/data/mockData";
import { Questao, FiltroQuestoes } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const pageSize = Math.min(100, Math.max(1, parseInt(searchParams.get("pageSize") || "10", 10)));
    const disciplina_id = searchParams.get("disciplina_id") || undefined;
    const assunto_id = searchParams.get("assunto_id") || undefined;
    const subassunto_id = searchParams.get("subassunto_id") || undefined;
    const banca = searchParams.get("banca") || undefined;
    const ano = searchParams.get("ano") ? parseInt(searchParams.get("ano")!, 10) : undefined;
    const tipo = (searchParams.get("tipo") as any) || undefined;
    const dificuldade = (searchParams.get("dificuldade") as any) || undefined;
    const origem = (searchParams.get("origem") as any) || "todas";
    const termo_busca = searchParams.get("termo_busca") || undefined;
    const anuladaParam = searchParams.get("anulada");
    const desatualizadaParam = searchParams.get("desatualizada");

    // ── Supabase path ──────────────────────────────────────────────────────
    if (isSupabaseConfigured) {
      const supabase = await createClientServer();
      if (!supabase) {
        return NextResponse.json({ success: false, error: "Supabase indisponível" }, { status: 503 });
      }

      // Consulta principal com joins das alternativas
      let query = supabase
        .from("questoes")
        .select(
          `
          id, disciplina_id, assunto_id, subassunto_id, prova_id,
          banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade,
          enunciado, texto_apoio, explicacao,
          is_autoral_ia, modelo_ia, prompt_versao, revisada_por_especialista,
          anulada, desatualizada, motivo_desatualizacao, versao,
          fingerprint_hash, total_respostas, total_acertos, taxa_acerto,
          created_at, updated_at,
          questoes_alternativas (
            id, letra, texto, correta, ordem, explicacao_especifica
          )
        `,
          { count: "exact" }
        )
        .order("created_at", { ascending: false });

      // Filtros
      if (disciplina_id && disciplina_id !== "todos") {
        query = query.eq("disciplina_id", disciplina_id);
      }
      if (assunto_id && assunto_id !== "todos") {
        query = query.eq("assunto_id", assunto_id);
      }
      if (subassunto_id && subassunto_id !== "todos") {
        query = query.eq("subassunto_id", subassunto_id);
      }
      if (banca && banca !== "todas") {
        query = query.ilike("banca_nome", `%${banca}%`);
      }
      if (ano && !isNaN(ano)) {
        query = query.eq("ano", ano);
      }
      if (tipo && tipo !== "todos") {
        query = query.eq("tipo", tipo);
      }
      if (dificuldade && dificuldade !== "todos") {
        query = query.eq("dificuldade", dificuldade);
      }
      if (origem === "oficiais") {
        query = query.eq("is_autoral_ia", false);
      } else if (origem === "autorais_ia") {
        query = query.eq("is_autoral_ia", true);
      }
      if (anuladaParam === "false") {
        query = query.eq("anulada", false);
      } else if (anuladaParam === "true") {
        query = query.eq("anulada", true);
      } else {
        // Por padrão, esconde anuladas da listagem pública
        query = query.eq("anulada", false);
      }
      if (desatualizadaParam === "false") {
        query = query.eq("desatualizada", false);
      } else if (desatualizadaParam === "true") {
        query = query.eq("desatualizada", true);
      }

      // Full-Text Search via busca_vetor (PostgreSQL)
      if (termo_busca && termo_busca.trim()) {
        query = query.textSearch("busca_vetor", termo_busca.trim(), {
          config: "portuguese",
          type: "websearch",
        });
      }

      // Paginação server-side
      const offset = (page - 1) * pageSize;
      query = query.range(offset, offset + pageSize - 1);

      const { data, error, count } = await query;

      if (error) {
        console.error("[API /questoes] Supabase error:", error);
        return NextResponse.json(
          { success: false, error: "Erro ao consultar questões", message: error.message },
          { status: 500 }
        );
      }

      // Remapeia para o formato do tipo Questao do frontend
      const questoes: Questao[] = (data ?? []).map((row: any) => ({
        id: row.id,
        disciplina_id: row.disciplina_id,
        assunto_id: row.assunto_id,
        subassunto_id: row.subassunto_id ?? null,
        prova_id: row.prova_id ?? null,
        enunciado: row.enunciado,
        tipo: row.tipo,
        dificuldade: row.dificuldade,
        banca: row.banca_nome ?? "",
        ano: row.ano,
        orgao: row.orgao_nome ?? "",
        cargo: row.cargo_nome ?? undefined,
        explicacao: row.explicacao,
        texto_apoio: row.texto_apoio ?? undefined,
        taxa_acerto_comunidade: row.taxa_acerto ? Number(row.taxa_acerto) : undefined,
        total_respostas_comunidade: row.total_respostas ?? 0,
        is_autoral_ia: row.is_autoral_ia,
        modelo_ia: row.modelo_ia ?? null,
        prompt_versao: row.prompt_versao ?? null,
        revisada_por_especialista: row.revisada_por_especialista,
        anulada: row.anulada,
        desatualizada: row.desatualizada,
        motivo_desatualizacao: row.motivo_desatualizacao ?? null,
        versao: row.versao,
        fingerprint_hash: row.fingerprint_hash,
        created_at: row.created_at,
        updated_at: row.updated_at,
        alternativas: (row.questoes_alternativas ?? [])
          .sort((a: any, b: any) => a.ordem - b.ordem)
          .map((alt: any) => ({
            id: alt.id,
            questao_id: row.id,
            letra: alt.letra,
            texto: alt.texto,
            correta: alt.correta,
            ordem: alt.ordem,
            explicacao_especifica: alt.explicacao_especifica ?? undefined,
          })),
      }));

      const total = count ?? 0;
      const totalPages = Math.ceil(total / pageSize) || 1;

      return NextResponse.json({
        success: true,
        questoes,
        total,
        page,
        pageSize,
        totalPages,
        hasMore: page < totalPages,
        fonte: "supabase",
      });
    }

    // ── Fallback: mock data (demo / sem Supabase configurado) ──────────────
    let items: Questao[] = [...mockQuestoes];

    if (disciplina_id && disciplina_id !== "todos") {
      items = items.filter((q) => q.disciplina_id === disciplina_id);
    }
    if (assunto_id && assunto_id !== "todos") {
      items = items.filter((q) => q.assunto_id === assunto_id);
    }
    if (banca && banca !== "todas") {
      items = items.filter((q) => q.banca === banca);
    }
    if (ano && !isNaN(ano)) {
      items = items.filter((q) => q.ano === ano);
    }
    if (tipo && tipo !== "todos") {
      items = items.filter((q) => q.tipo === tipo);
    }
    if (dificuldade && dificuldade !== "todos") {
      items = items.filter((q) => q.dificuldade === dificuldade);
    }
    if (origem === "oficiais") {
      items = items.filter((q) => !q.is_autoral_ia);
    } else if (origem === "autorais_ia") {
      items = items.filter((q) => q.is_autoral_ia === true);
    }
    if (anuladaParam === "false" || anuladaParam === null) {
      items = items.filter((q) => !q.anulada);
    } else if (anuladaParam === "true") {
      items = items.filter((q) => q.anulada === true);
    }
    if (desatualizadaParam === "false") {
      items = items.filter((q) => !q.desatualizada);
    } else if (desatualizadaParam === "true") {
      items = items.filter((q) => q.desatualizada === true);
    }
    if (termo_busca && termo_busca.trim()) {
      const termo = termo_busca.toLowerCase().trim();
      items = items.filter(
        (q) =>
          q.enunciado.toLowerCase().includes(termo) ||
          q.explicacao.toLowerCase().includes(termo) ||
          q.banca.toLowerCase().includes(termo) ||
          q.orgao.toLowerCase().includes(termo) ||
          (q.cargo && q.cargo.toLowerCase().includes(termo))
      );
    }

    const total = items.length;
    const totalPages = Math.ceil(total / pageSize) || 1;
    const offset = (page - 1) * pageSize;
    const paginatedItems = items.slice(offset, offset + pageSize);

    return NextResponse.json({
      success: true,
      questoes: paginatedItems,
      total,
      page,
      pageSize,
      totalPages,
      hasMore: page < totalPages,
      fonte: "mock",
    });
  } catch (error: any) {
    console.error("[API /questoes] Erro inesperado:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erro ao processar consulta de questões",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
