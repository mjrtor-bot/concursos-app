import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getPool() {
  const url = process.env.CONTABO_DATABASE_URL;
  if (!url) return null;
  return new Pool({ connectionString: url, max: 3, connectionTimeoutMillis: 5000, idleTimeoutMillis: 10000 });
}

export async function GET(request: NextRequest) {
  const pool = getPool();
  if (!pool) return NextResponse.json({ success: false, error: "Contabo nao configurada" }, { status: 503 });
  const params = request.nextUrl.searchParams;
  const recurso = params.get("recurso") || "questoes";
  if (!["questoes", "disciplinas", "assuntos"].includes(recurso)) return NextResponse.json({ success: false, error: "Recurso invalido" }, { status: 400 });
  const page = Math.max(1, Number(params.get("page")) || 1);
  const pageSize = Math.min(100, Math.max(1, Number(params.get("pageSize")) || 10));
  const values: unknown[] = [];
  const where: string[] = [];
  function add(column: string, value: string | null) {
    if (value && value !== "todos" && value !== "todas") {
      values.push(value);
      where.push(column + " = $" + values.length);
    }
  }
  try {
    if (recurso === "disciplinas") {
      const { rows } = await pool.query("SELECT d.id, d.nome, count(q.id)::int AS total_questoes FROM mentoria_recovery.disciplinas d LEFT JOIN mentoria_recovery.questoes q ON q.disciplina_id = d.id GROUP BY d.id, d.nome ORDER BY d.nome");
      return NextResponse.json({ success: true, disciplinas: rows, fonte: "contabo" });
    }
    if (recurso === "assuntos") {
      add("a.disciplina_id", params.get("disciplina_id"));
      const { rows } = await pool.query("SELECT a.id,a.disciplina_id,a.nome,count(q.id)::int AS questoes_count FROM mentoria_recovery.assuntos a LEFT JOIN mentoria_recovery.questoes q ON q.assunto_id=a.id" + (where.length ? " WHERE " + where.join(" AND ") : "") + " GROUP BY a.id,a.disciplina_id,a.nome ORDER BY a.nome", values);
      return NextResponse.json({ success: true, assuntos: rows, fonte: "contabo" });
    }
    add("q.disciplina_id", params.get("disciplina_id"));
    add("q.assunto_id", params.get("assunto_id"));
    add("q.tipo", params.get("tipo"));
    add("q.dificuldade", params.get("dificuldade"));
    if (params.get("ano")) {
      const ano = Number(params.get("ano"));
      if (!Number.isInteger(ano)) return NextResponse.json({ success: false, error: "Ano invalido" }, { status: 400 });
      values.push(ano); where.push("q.ano = $" + values.length);
    }
    if (params.get("banca") && params.get("banca") !== "todas") {
      values.push("%" + params.get("banca") + "%"); where.push("q.banca_nome ILIKE $" + values.length);
    }
    if (params.get("termo_busca")) {
      values.push("%" + params.get("termo_busca") + "%"); where.push("q.enunciado ILIKE $" + values.length);
    }
    const filter = where.length ? " WHERE " + where.join(" AND ") : "";
    const count = await pool.query("SELECT count(*)::int AS total FROM mentoria_recovery.questoes q" + filter, values);
    const total = count.rows[0].total as number;
    const offset = (page - 1) * pageSize;
    const queryValues = [...values, pageSize, offset];
    const data = await pool.query("SELECT q.id,q.disciplina_id,q.assunto_id,q.banca_nome,q.orgao_nome,q.cargo_nome,q.ano,q.tipo,q.dificuldade,q.enunciado,q.is_autoral_ia,d.nome AS disciplina_nome,a.nome AS assunto_nome FROM mentoria_recovery.questoes q JOIN mentoria_recovery.disciplinas d ON d.id=q.disciplina_id JOIN mentoria_recovery.assuntos a ON a.id=q.assunto_id" + filter + " ORDER BY q.id LIMIT $" + (values.length + 1) + " OFFSET $" + (values.length + 2), queryValues);
    const ids = data.rows.map(row => row.id);
    const alts = ids.length ? await pool.query("SELECT id,questao_id,letra,texto,ordem FROM mentoria_recovery.alternativas WHERE questao_id = ANY($1::uuid[]) ORDER BY ordem", [ids]) : { rows: [] };
    const altMap = new Map<string, unknown[]>();
    for (const alt of alts.rows) {
      const list = altMap.get(alt.questao_id) || []; list.push(alt); altMap.set(alt.questao_id, list);
    }
    const questoes = data.rows.map(row => ({
      ...row, banca: row.banca_nome, orgao: row.is_autoral_ia ? "" : row.orgao_nome,
      ano: row.is_autoral_ia ? 0 : row.ano, cargo: row.is_autoral_ia ? undefined : row.cargo_nome,
      alternativas: altMap.get(row.id) || [],
    }));
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    return NextResponse.json({ success: true, questoes, total, page, pageSize, totalPages, hasMore: page < totalPages, fonte: "contabo" });
  } catch (error) {
    console.error("[contabo/read-only] Consulta falhou", error);
    return NextResponse.json({ success: false, error: "Consulta indisponivel" }, { status: 503 });
  } finally {
    await pool.end();
  }
}
