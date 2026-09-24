import { NextRequest, NextResponse } from "next/server";
import { mockQuestoes } from "@/data/mockData";
import { Questao, FiltroQuestoes } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const pageSize = Math.min(100, Math.max(1, parseInt(searchParams.get("pageSize") || "10", 10)));
    const disciplina_id = searchParams.get("disciplina_id") || undefined;
    const assunto_id = searchParams.get("assunto_id") || undefined;
    const banca = searchParams.get("banca") || undefined;
    const ano = searchParams.get("ano") ? parseInt(searchParams.get("ano")!, 10) : undefined;
    const tipo = searchParams.get("tipo") as any || undefined;
    const dificuldade = searchParams.get("dificuldade") as any || undefined;
    const origem = searchParams.get("origem") as any || "todas";
    const termo_busca = searchParams.get("termo_busca") || undefined;
    const anuladaParam = searchParams.get("anulada");
    const desatualizadaParam = searchParams.get("desatualizada");

    let items: Questao[] = [...mockQuestoes];

    // Aplicar filtros
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
    if (anuladaParam === "false") {
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
    });
  } catch (error: any) {
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
