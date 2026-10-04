import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

async function adminClient() {
  const supabase = await createClientServer();
  if (!supabase) return { error: NextResponse.json({ error: "Supabase indisponível" }, { status: 503 }) };
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (!profile || !["admin", "editor"].includes(profile.role)) {
    return { error: NextResponse.json({ error: "Sem permissão de administrador" }, { status: 403 }) };
  }
  return { supabase };
}

export async function POST(req: NextRequest) {
  const ctx = await adminClient();
  if (ctx.error) return ctx.error;
  const supabase = ctx.supabase!;

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const assuntoId = formData.get("assunto_id") as string | null;
    const customTitulo = formData.get("titulo") as string | null;
    const autoCreate = formData.get("auto_create") !== "false"; // default true

    if (!file) {
      return NextResponse.json({ error: "Nenhum arquivo enviado." }, { status: 400 });
    }

    if (!assuntoId) {
      return NextResponse.json({ error: "assunto_id é obrigatório." }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `Arquivo muito grande. O limite máximo é 50 MB (tamanho: ${(file.size / (1024 * 1024)).toFixed(1)} MB).` },
        { status: 400 }
      );
    }

    const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
    if (!isPdf) {
      return NextResponse.json({ error: "Apenas arquivos PDF são permitidos." }, { status: 400 });
    }

    const fileExt = "pdf";
    const uniqueId = crypto.randomUUID();
    const storagePath = `${assuntoId}/${uniqueId}.${fileExt}`;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload para o bucket privado materiais-assuntos
    const { error: uploadError } = await supabase.storage
      .from("materiais-assuntos")
      .upload(storagePath, buffer, {
        contentType: "application/pdf",
        upsert: false,
      });

    if (uploadError) {
      return NextResponse.json(
        { error: `Erro no upload do arquivo para o bucket: ${uploadError.message}` },
        { status: 500 }
      );
    }

    let createdConteudo = null;

    if (autoCreate) {
      const titulo = customTitulo?.trim() || file.name.replace(/\.pdf$/i, "").trim() || "Material em PDF";

      // Obter última ordem para o assunto
      const { data: lastOrderData } = await supabase
        .from("assunto_conteudos")
        .select("ordem")
        .eq("assunto_id", assuntoId)
        .order("ordem", { ascending: false })
        .limit(1);

      const nextOrder = (lastOrderData?.[0]?.ordem ?? -1) + 1;

      const { data: conteudo, error: insertError } = await supabase
        .from("assunto_conteudos")
        .insert({
          assunto_id: assuntoId,
          titulo,
          pdf_path: storagePath,
          pdf_nome: file.name,
          pdf_tamanho: file.size,
          ordem: nextOrder,
          ativo: true,
          updated_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (insertError) {
        // Rollback do arquivo em caso de falha no banco
        await supabase.storage.from("materiais-assuntos").remove([storagePath]);
        return NextResponse.json(
          { error: `Erro ao criar registro de conteúdo: ${insertError.message}` },
          { status: 500 }
        );
      }

      createdConteudo = conteudo;
    }

    return NextResponse.json({
      success: true,
      pdf_path: storagePath,
      pdf_nome: file.name,
      pdf_tamanho: file.size,
      conteudo: createdConteudo,
    });
  } catch (error: any) {
    console.error("Erro inesperado no upload de PDF:", error);
    return NextResponse.json(
      { error: error?.message || "Erro inesperado ao processar upload" },
      { status: 500 }
    );
  }
}
