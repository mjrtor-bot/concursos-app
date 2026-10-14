import { NextRequest, NextResponse } from "next/server";
import { COOKIE_SESSAO, getPool, usuarioDaSessao } from "@/lib/contabo-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

const CABECALHOS = { "Cache-Control": "private, no-store" };

function contarDisciplinas(estrutura: unknown): number {
  const e = (estrutura && typeof estrutura === "object" ? estrutura : {}) as {
    disciplinas?: unknown;
    cargos?: { disciplinas?: unknown }[];
  };
  const diretas = Array.isArray(e.disciplinas) ? e.disciplinas.length : 0;
  const porCargo = Array.isArray(e.cargos)
    ? e.cargos.reduce((n, c) => n + (Array.isArray(c?.disciplinas) ? c.disciplinas.length : 0), 0)
    : 0;
  return diretas + porCargo;
}

// Confirma (ou reabre para revisão) um edital do usuário na instalação Contabo.
// Corpo opcional: { acao: "confirmar" | "reabrir", definir_alvo: boolean }.
export async function POST(req: NextRequest, ctx: Ctx) {
  if (process.env.CONTABO_AUTH_HOMOLOGACAO !== "enabled") {
    return NextResponse.json({ error: "Indisponível" }, { status: 404 });
  }
  const token = req.cookies.get(COOKIE_SESSAO)?.value;
  if (!token) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  const { id } = await ctx.params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  const db = getPool();
  if (!db) return NextResponse.json({ error: "Banco indisponível" }, { status: 503 });

  const corpo = (await req.json().catch(() => null)) as { acao?: unknown; definir_alvo?: unknown } | null;
  const acao = corpo?.acao === "reabrir" ? "reabrir" : "confirmar";
  const definirAlvo = corpo?.definir_alvo === true;

  try {
    const usuarioId = await usuarioDaSessao(db, token);
    if (!usuarioId) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

    const atual = await db.query(
      "SELECT id,status,estrutura_extraida FROM mentoria_recovery.editais_usuario WHERE id=$1 AND usuario_id=$2",
      [id, usuarioId]
    );
    if (!atual.rowCount) return NextResponse.json({ error: "Edital não encontrado" }, { status: 404 });
    const edital = atual.rows[0] as { status: string; estrutura_extraida: unknown };
    const totalDisciplinas = contarDisciplinas(edital.estrutura_extraida);

    if (acao === "reabrir") {
      if (edital.status !== "confirmado") {
        return NextResponse.json({ error: "Só é possível reabrir um edital confirmado." }, { status: 409, headers: CABECALHOS });
      }
      const alvo = await db.query(
        "SELECT 1 FROM mentoria_recovery.usuario_edital_alvo WHERE usuario_id=$1 AND edital_usuario_id=$2",
        [usuarioId, id]
      );
      if (alvo.rowCount) {
        return NextResponse.json(
          { error: "Este edital é o seu concurso alvo. Defina outro alvo antes de reabrir a revisão." },
          { status: 409, headers: CABECALHOS }
        );
      }
      await db.query(
        "UPDATE mentoria_recovery.editais_usuario SET status='aguardando_revisao', updated_at=now() WHERE id=$1 AND usuario_id=$2",
        [id, usuarioId]
      );
      return NextResponse.json({ ok: true, status: "aguardando_revisao" }, { headers: CABECALHOS });
    }

    if (totalDisciplinas === 0) {
      return NextResponse.json(
        { error: "Este edital não tem disciplinas. Extraia ou edite o conteúdo antes de confirmar." },
        { status: 409, headers: CABECALHOS }
      );
    }
    if (edital.status !== "confirmado") {
      if (!["aguardando_revisao", "revisao_sem_conteudo", "erro"].includes(edital.status)) {
        return NextResponse.json(
          { error: `Não é possível confirmar um edital com status "${edital.status}".` },
          { status: 409, headers: CABECALHOS }
        );
      }
      await db.query(
        "UPDATE mentoria_recovery.editais_usuario SET status='confirmado', erro_processamento=NULL, updated_at=now() WHERE id=$1 AND usuario_id=$2",
        [id, usuarioId]
      );
    }
    if (definirAlvo) {
      await db.query(
        "INSERT INTO mentoria_recovery.usuario_edital_alvo(usuario_id,edital_usuario_id,updated_at) VALUES($1,$2,now()) ON CONFLICT(usuario_id) DO UPDATE SET edital_usuario_id=EXCLUDED.edital_usuario_id,updated_at=now()",
        [usuarioId, id]
      );
    }
    return NextResponse.json(
      { ok: true, status: "confirmado", disciplinas: totalDisciplinas, alvo: definirAlvo },
      { headers: CABECALHOS }
    );
  } catch (e) {
    console.error("[contabo-confirmar]", e);
    return NextResponse.json({ error: "Falha ao confirmar o edital." }, { status: 500 });
  }
}
