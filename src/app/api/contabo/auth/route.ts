import { NextRequest, NextResponse } from "next/server";
import { randomBytes, randomUUID, scrypt as scryptCallback, timingSafeEqual, createHash } from "node:crypto";
import { promisify } from "node:util";
import type { Pool } from "pg";
import { COOKIE_SESSAO, getPool, hashToken, ipDoCliente } from "@/lib/contabo-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const scrypt = promisify(scryptCallback) as (senha: string, sal: string, tamanho: number) => Promise<Buffer>;
const cookieName = COOKIE_SESSAO;
const sessionSeconds = 60 * 60 * 12;

// Hash fixo usado quando o e-mail não existe, para o tempo de resposta do login
// ser parecido com o de uma conta real (dificulta enumerar contas pelo tempo).
const HASH_FALSO = "00000000000000000000000000000000:" + "0".repeat(128);

async function passwordHash(password: string) {
  const salt = randomBytes(16).toString("hex");
  const derived = await scrypt(password, salt, 64);
  return salt + ":" + derived.toString("hex");
}
async function verifyPassword(password: string, stored: string) {
  const [salt, hex] = stored.split(":");
  if (!salt || !hex || !/^[0-9a-f]{128}$/.test(hex)) return false;
  const derived = await scrypt(password, salt, 64);
  return timingSafeEqual(derived, Buffer.from(hex, "hex"));
}
function setSession(res: NextResponse, token: string) {
  res.cookies.set(cookieName, token, {
    httpOnly: true, secure: process.env.CONTABO_AUTH_HTTPS === "true",
    sameSite: "lax", path: "/", maxAge: sessionSeconds,
  });
}
function chaveHash(prefixo: string, valor: string) {
  return prefixo + ":" + createHash("sha256").update(valor).digest("hex");
}
// Conta uma tentativa na chave e informa se o limite da janela foi ultrapassado.
async function excedeu(db: Pool, chave: string, maximo: number, janelaMin: number): Promise<boolean> {
  const r = await db.query(
    "INSERT INTO mentoria_auth.rate_limits(key,attempts,window_start) VALUES($1,1,now()) ON CONFLICT(key) DO UPDATE SET attempts=CASE WHEN mentoria_auth.rate_limits.window_start < now()-make_interval(mins=>$2::int) THEN 1 ELSE mentoria_auth.rate_limits.attempts+1 END,window_start=CASE WHEN mentoria_auth.rate_limits.window_start < now()-make_interval(mins=>$2::int) THEN now() ELSE mentoria_auth.rate_limits.window_start END RETURNING attempts",
    [chave, janelaMin]
  );
  return Number(r.rows[0].attempts) > maximo;
}

export async function POST(req: NextRequest) {
  // Explicit opt-in. Never enable this in production before migration is complete.
  if (process.env.CONTABO_AUTH_HOMOLOGACAO !== "enabled")
    return NextResponse.json({ success: false, error: "Autenticacao de homologacao desativada" }, { status: 503 });
  const db = getPool();
  if (!db) return NextResponse.json({ success: false, error: "Falha de autenticacao" }, { status: 503 });
  try {
    const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body || typeof body !== "object")
      return NextResponse.json({ success: false, error: "Requisicao invalida" }, { status: 400 });
    const action = String(body.action || "");
    if (action === "logout") {
      const token = req.cookies.get(cookieName)?.value;
      if (token) await db.query("UPDATE mentoria_auth.sessions SET revoked_at=now() WHERE token_hash=$1", [hashToken(token)]);
      const res = NextResponse.json({ success: true });
      res.cookies.delete(cookieName);
      return res;
    }
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 1 || password.length > 256)
      return NextResponse.json({ success: false, error: "Credenciais invalidas" }, { status: 400 });
    if (action !== "login" && action !== "signup")
      return NextResponse.json({ success: false, error: "Acao invalida" }, { status: 400 });
    if (action === "signup" && process.env.CONTABO_SIGNUP_ENABLED === "false")
      return NextResponse.json({ success: false, error: "Cadastro desativado" }, { status: 403 });

    // Limites de tentativas. O de e-mail vale sempre (não depende de cabeçalho do cliente);
    // o de IP só vale quando há proxy confiável (CONTABO_TRUST_PROXY=true).
    const ip = ipDoCliente(req.headers);
    const chaveEmail = chaveHash("auth-email", email);
    const bloqueios: boolean[] = [await excedeu(db, chaveEmail, 10, 15)];
    if (ip) bloqueios.push(await excedeu(db, chaveHash("auth-ip", ip), 40, 15));
    if (action === "signup") {
      bloqueios.push(await excedeu(db, "signup-global", 30, 60));
      if (ip) bloqueios.push(await excedeu(db, chaveHash("signup-ip", ip), 5, 60));
    }
    if (bloqueios.some(Boolean))
      return NextResponse.json({ success: false, error: "Limite de tentativas. Aguarde alguns minutos." }, { status: 429 });

    let user: { id: string; email: string; display_name: string } | undefined;
    if (action === "signup") {
      if (password.length < 6) return NextResponse.json({ success: false, error: "A senha deve ter pelo menos 6 caracteres" }, { status: 400 });
      const nome = String(body.nome || "").trim();
      if (nome.length < 2 || nome.length > 120)
        return NextResponse.json({ success: false, error: "Nome invalido" }, { status: 400 });
      const hash = await passwordHash(password);
      const id = randomUUID();
      try {
        await db.query("INSERT INTO mentoria_auth.users(id,email,display_name,password_hash,password_algorithm) VALUES ($1,$2,$3,$4,'scrypt')", [id, email, nome, hash]);
        await db.query("INSERT INTO mentoria_auth.user_roles(user_id,role) VALUES($1,'user')", [id]);
      } catch (e: unknown) {
        if ((e as { code?: string }).code === "23505")
          return NextResponse.json({ success: false, error: "Conta ja cadastrada" }, { status: 409 });
        throw e;
      }
      user = { id, email, display_name: nome };
    } else {
      const result = await db.query("SELECT id,email,display_name,password_hash,password_algorithm,disabled_at FROM mentoria_auth.users WHERE lower(email)=$1", [email]);
      const encontrado = result.rows[0];
      const hashArmazenado: string =
        encontrado && encontrado.password_algorithm === "scrypt" && encontrado.password_hash ? encontrado.password_hash : HASH_FALSO;
      const senhaConfere = await verifyPassword(password, hashArmazenado);
      if (!encontrado || encontrado.disabled_at || hashArmazenado === HASH_FALSO || !senhaConfere)
        return NextResponse.json({ success: false, error: "Credenciais invalidas" }, { status: 401 });
      user = { id: encontrado.id, email: encontrado.email, display_name: encontrado.display_name };
    }
    const token = randomBytes(32).toString("base64url");
    await db.query("INSERT INTO mentoria_auth.sessions(id,user_id,token_hash,expires_at) VALUES($1,$2,$3,now()+interval '12 hours')", [randomUUID(), user.id, hashToken(token)]);
    const roleResult = await db.query("SELECT role FROM mentoria_auth.user_roles WHERE user_id=$1 LIMIT 1", [user.id]);
    const role = roleResult.rows[0]?.role || "user";
    const res = NextResponse.json({ success: true, user: { id: user.id, email: user.email, nome: user.display_name, role } });
    setSession(res, token);
    await db.query("DELETE FROM mentoria_auth.rate_limits WHERE key=$1", [chaveEmail]);
    return res;
  } catch (e) {
    console.error("[contabo-auth]", e);
    return NextResponse.json({ success: false, error: "Falha de autenticacao" }, { status: 503 });
  }
}
export async function GET(req: NextRequest) {
  if (process.env.CONTABO_AUTH_HOMOLOGACAO !== "enabled")
    return NextResponse.json({ success: false, error: "Autenticacao desativada" }, { status: 503 });
  const token = req.cookies.get(cookieName)?.value;
  if (!token) return NextResponse.json({ success: false, user: null }, { status: 401 });
  const db = getPool();
  if (!db) return NextResponse.json({ success: false, error: "Consulta indisponivel" }, { status: 503 });
  try {
    const result = await db.query("SELECT u.id,u.email,u.display_name,COALESCE(r.role, 'user') AS role FROM mentoria_auth.sessions s JOIN mentoria_auth.users u ON u.id=s.user_id LEFT JOIN mentoria_auth.user_roles r ON r.user_id=u.id WHERE s.token_hash=$1 AND s.revoked_at IS NULL AND s.expires_at>now() AND u.disabled_at IS NULL", [hashToken(token)]);
    if (!result.rowCount) return NextResponse.json({ success: false, user: null }, { status: 401 });
    return NextResponse.json({ success: true, user: { id: result.rows[0].id, email: result.rows[0].email, nome: result.rows[0].display_name, role: result.rows[0].role } });
  } catch (e) {
    console.error("[contabo-auth:get]", e);
    return NextResponse.json({ success: false, error: "Consulta indisponivel" }, { status: 503 });
  }
}
