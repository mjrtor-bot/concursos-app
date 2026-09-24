import { NextRequest, NextResponse } from "next/server";
import { processarImportacaoQuestoes } from "@/services/questionImporter";
import { mockQuestoes } from "@/data/mockData";
import { ImportOptions } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { conteudo, formato, options } = body as {
      conteudo: string;
      formato: "json" | "csv";
      options?: ImportOptions;
    };

    if (!conteudo || typeof conteudo !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "Conteúdo do arquivo não fornecido ou inválido.",
        },
        { status: 400 }
      );
    }

    if (formato !== "json" && formato !== "csv") {
      return NextResponse.json(
        {
          success: false,
          error: "Formato inválido. Os formatos suportados são 'json' ou 'csv'.",
        },
        { status: 400 }
      );
    }

    const { questoesValidadas, report } = processarImportacaoQuestoes(
      conteudo,
      formato,
      mockQuestoes,
      options || { politicaDuplicatas: "ignorar" }
    );

    return NextResponse.json({
      success: true,
      report,
      questoesValidadas,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: "Erro no processamento da importação.",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
