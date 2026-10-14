import { NextRequest, NextResponse } from "next/server";
import { randomBytes, randomUUID, scrypt as scryptCallback, timingSafeEqual, createHash } from "node:crypto";
import { promisify } from "node:util";
import { Pool } from "pg";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const scrypt = promisify(scryptCallback);
const cookieName = "mentoria_homologacao_session";
const sessionSeconds = 60 * 60 * 12;

function pool() {
  const url = process.env.CONTABO_DATABASE_URL;
  if (!url) throw new Error("Database not configured");
  return new Pool({ connectionString: url, max: 2, connectionTimeoutMillis: 5000 });
}
function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}
async function passwordHash(password: string) {
  const salt = randomBytes(16).toString("hex");
  const derived = await scrypt(password, salt, 64) as Buffer;
  return salt + ":" + derived.toString("hex");
}
async function verifyPassword(password: string, stored: string) {
  const [salt, hex] = stored.split(":");
  if (!salt || !hex || !/^[0-9a-f]{128}$/.test(hex)) return false;
  const derived = await scrypt(password, salt, 64) as Buffer;
  return timingSafeEqual(derived, Buffer.from(hex, "hex"));
}
function setSession(res: NextResponse, token: string) {
  res.cookies.set(cookieName, token, {
    httpOnly: true, secure: process.env.CONTABO_AUTH_HTTPS === "true",
    sameSite: "lax", path: "/", maxAge: sessionSeconds,
  });
}
export async function POST(req: NextRequest) {
  // Explicit opt-in. Never enable this in production before migration is complete.
  if (process.env.CONTABO_AUTH_HOMOLOGACAO !== "enabled")
    return NextResponse.json({ success: false, error: "Autenticacao de homologacao desativada" }, { status: 503 });
  const db = pool();
  try {
    const body = await req.json();
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
    const key = createHash("sha256").update(email + "|" + (req.headers.get("x-forwarded-for") || "local")).digest("hex");
    const throttle = await db.query("INSERT INTO mentoria_auth.rate_limits(key,attempts,window_start) VALUES($1,1,now()) ON CONFLICT(key) DO UPDATE SET attempts=CASE WHEN mentoria_auth.rate_limits.window_start < now()-interval '15 minutes' THEN 1 ELSE mentoria_auth.rate_limits.attempts+1 END,window_start=CASE WHEN mentoria_auth.rate_limits.window_start < now()-interval '15 minutes' THEN now() ELSE mentoria_auth.rate_limits.window_start END RETURNING attempts", [key]);
    if (throttle.rows[0].attempts > 10) return NextResponse.json({ success: false, error: "Limite de tentativas. Aguarde 15 minutos." }, { status: 429 });
    let user;
    if (action === "signup") {
        if (password.length < 6) return NextResponse.json({ success: false, error: 'A senha deve ter pelo menos 6 caracteres' }, { status: 400 });
      const nome = String(body.nome || "").trim();
      if (nome.length < 2 || nome.length > 120)
        return NextResponse.json({ success: false, error: "Nome invalido" }, { status: 400 });
      const hash = await passwordHash(password);
      const id = randomUUID();
      try {
        await db.query("INSERT INTO mentoria_auth.users(id,email,display_name,password_hash,password_algorithm) VALUES ($1,$2,$3,$4,'scrypt')", [id,email,nome,hash]);
        await db.query("INSERT INTO mentoria_auth.user_roles(user_id,role) VALUES($1,'user')", [id]);
      } catch (e: unknown) {
        if ((e as {code?: string}).code === "23505")
          return NextResponse.json({ success: false, error: "Conta ja cadastrada" }, { status: 409 });
        throw e;
      }
      user = { id, email, display_name: nome };
    } else {
      const result = await db.query("SELECT id,email,display_name,password_hash,password_algorithm,disabled_at FROM mentoria_auth.users WHERE lower(email)=$1", [email]);
      user = result.rows[0];
      if (!user || user.disabled_at || user.password_algorithm !== "scrypt" || !user.password_hash || !await verifyPassword(password, user.password_hash))
        return NextResponse.json({ success: false, error: "Credenciais invalidas" }, { status: 401 });
    }
    const token = randomBytes(32).toString("base64url");
    await db.query("INSERT INTO mentoria_auth.sessions(id,user_id,token_hash,expires_at) VALUES($1,$2,$3,now()+interval '12 hours')", [randomUUID(), user.id, hashToken(token)]);
    const roleResult = await db.query("SELECT role FROM mentoria_auth.user_roles WHERE user_id=$1 LIMIT 1", [user.id]);
    const role = roleResult.rows[0]?.role || "user";
    const res = NextResponse.json({ success: true, user: { id: user.id, email: user.email, nome: user.display_name, role } });
    setSession(res, token);
    await db.query("DELETE FROM mentoria_auth.rate_limits WHERE key=$1", [key]);
    return res;
  } catch {
    return NextResponse.json({ success: false, error: "Falha de autenticacao" }, { status: 503 });
  } finally { await db.end(); }
}
export async function GET(req: NextRequest) {
  if (process.env.CONTABO_AUTH_HOMOLOGACAO !== "enabled")
    return NextResponse.json({ success: false, error: "Autenticacao desativada" }, { status: 503 });
  const token = req.cookies.get(cookieName)?.value;
  if (!token) return NextResponse.json({ success: false, user: null }, { status: 401 });
  const db = pool();
  try {
    const result = await db.query("SELECT u.id,u.email,u.display_name,COALESCE(r.role, 'user') AS role FROM mentoria_auth.sessions s JOIN mentoria_auth.users u ON u.id=s.user_id LEFT JOIN mentoria_auth.user_roles r ON r.user_id=u.id WHERE s.token_hash=$1 AND s.revoked_at IS NULL AND s.expires_at>now() AND u.disabled_at IS NULL", [hashToken(token)]);
    if (!result.rowCount) return NextResponse.json({ success: false, user: null }, { status: 401 });
    return NextResponse.json({ success: true, user: { id: result.rows[0].id, email: result.rows[0].email, nome: result.rows[0].display_name, role: result.rows[0].role } });
  } catch { return NextResponse.json({ success: false, error: "Consulta indisponivel" }, { status: 503 }); }
  finally { await db.end(); }
}
