import { Pool } from "pg";
import { createHash } from "node:crypto";

// Infraestrutura compartilhada das rotas Contabo: um único pool de conexões por
// processo, verificação de sessão e limites simples em memória.

export const COOKIE_SESSAO = "mentoria_homologacao_session";

const global_ = globalThis as unknown as { __contaboPool?: Pool };

// Pool único por processo (reaproveitado entre requisições e recarregamentos em dev).
export function getPool(): Pool | null {
  const url = process.env.CONTABO_DATABASE_URL;
  if (!url) return null;
  if (!global_.__contaboPool) {
    const pool = new Pool({
      connectionString: url,
      max: 10,
      connectionTimeoutMillis: 5000,
      idleTimeoutMillis: 30000,
    });
    pool.on("error", (erro: Error) => console.error("[contabo-pool]", erro));
    global_.__contaboPool = pool;
  }
  return global_.__contaboPool;
}

export function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

// Devolve o id do usuário dono da sessão válida, ou null.
export async function usuarioDaSessao(db: Pool, token: string): Promise<string | null> {
  const resultado = await db.query(
    "SELECT u.id FROM mentoria_auth.sessions s JOIN mentoria_auth.users u ON u.id=s.user_id WHERE s.token_hash=$1 AND s.revoked_at IS NULL AND s.expires_at>now() AND u.disabled_at IS NULL",
    [hashToken(token)]
  );
  return resultado.rowCount ? String(resultado.rows[0].id) : null;
}

// IP do cliente, somente quando há um proxy confiável na frente (CONTABO_TRUST_PROXY=true).
// Usa o ÚLTIMO valor de X-Forwarded-For, que é o acrescentado pelo proxy confiável;
// os anteriores podem ser forjados pelo cliente. Sem proxy confiável devolve null.
export function ipDoCliente(headers: Headers): string | null {
  if (process.env.CONTABO_TRUST_PROXY !== "true") return null;
  const encaminhado = headers.get("x-forwarded-for");
  if (!encaminhado) return null;
  const partes = encaminhado.split(",").map((p) => p.trim()).filter(Boolean);
  return partes.length ? partes[partes.length - 1] : null;
}

// Limite por janela fixa, em memória (vale por processo; suficiente para uma instância).
const janelas = new Map<string, { n: number; ate: number }>();

export function excedeuLimite(chave: string, maximo: number, janelaMs: number): boolean {
  const agora = Date.now();
  if (janelas.size > 5000) {
    for (const [k, v] of janelas) {
      if (v.ate <= agora) janelas.delete(k);
    }
  }
  const atual = janelas.get(chave);
  if (!atual || atual.ate <= agora) {
    janelas.set(chave, { n: 1, ate: agora + janelaMs });
    return false;
  }
  atual.n += 1;
  return atual.n > maximo;
}
