import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const cronSecret = request.headers.get("x-cron-secret");
  if (!cronSecret || cronSecret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });

  // 1. Processar registros "processando" há mais de 30 minutos
  const { data: presos } = await supabase
    .from("editais_usuario")
    .select("id,erro_processamento")
    .eq("status", "processando")
    .lt("updated_at", new Date(Date.now() - 30 * 60 * 1000).toISOString());

  if (presos) {
    for (const p of presos) {
      console.log(`Reconciliando edital preso: ${p.id}`);
      await supabase.from("editais_usuario").update({
        status: "erro",
        erro_processamento: "Reconciliação automática: processamento travado por mais de 30 min.",
        updated_at: new Date().toISOString()
      }).eq("id", p.id);
    }
  }

  return NextResponse.json({ ok: true, processados: presos?.length || 0 });
}
