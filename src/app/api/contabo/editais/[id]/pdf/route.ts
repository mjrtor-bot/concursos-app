import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { Pool } from "pg";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (process.env.CONTABO_AUTH_HOMOLOGACAO !== "enabled")
    return NextResponse.json({ error: "Disponível apenas na homologação Contabo" }, { status: 404 });
  const token = req.cookies.get("mentoria_homologacao_session")?.value;
  if (!token) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  if (!process.env.CONTABO_DATABASE_URL) return NextResponse.json({ error: "Banco indisponível" }, { status: 503 });
  const { id } = await params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  const db = new Pool({ connectionString: process.env.CONTABO_DATABASE_URL, max: 1 });
  try {
    const result = await db.query(
      "SELECT e.arquivo_path,e.arquivo_tamanho FROM mentoria_recovery.editais_usuario e JOIN mentoria_auth.users u ON u.id=e.usuario_id JOIN mentoria_auth.sessions s ON s.user_id=u.id WHERE e.id=$1 AND s.token_hash=$2 AND s.revoked_at IS NULL AND s.expires_at>now() AND u.disabled_at IS NULL",
      [id, createHash("sha256").update(token).digest("hex")]
    );
    if (!result.rowCount) return NextResponse.json({ error: "Edital não encontrado" }, { status: 404 });
    const row = result.rows[0];
    const root = path.resolve(process.env.CONTABO_EDITAIS_STORAGE_ROOT || "/opt/mentoria/storage/editais-usuario");
    const relative = String(row.arquivo_path || "");
    if (!/^[0-9a-f-]{36}\/[^/\\]+\.pdf$/i.test(relative) || relative.includes(".."))
      return NextResponse.json({ error: "Caminho inválido" }, { status: 422 });
    const filename = path.resolve(root, relative);
    if (!filename.startsWith(root + path.sep)) return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    const fileStat = await stat(filename);
    if (!fileStat.isFile() || fileStat.size > 40 * 1024 * 1024 || (row.arquivo_tamanho != null && Number(row.arquivo_tamanho) !== fileStat.size))
      return NextResponse.json({ error: "Arquivo divergente" }, { status: 409 });
    const buffer = await readFile(filename);
    if (buffer.subarray(0, 5).toString() !== "%PDF-") return NextResponse.json({ error: "PDF inválido" }, { status: 422 });
    return new NextResponse(new Uint8Array(buffer), { headers: {
      "Content-Type": "application/pdf", "Content-Disposition": "inline; filename=\"edital.pdf\"",
      "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff"
    } });
  } catch (error) {
    console.error("[contabo-pdf]", error);
    return NextResponse.json({ error: "PDF indisponível" }, { status: 503 });
  } finally { await db.end(); }
}
