import crypto from "crypto";

const POLICIAL_NAMESPACE = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";

export function generateUUIDv5(name, namespace = POLICIAL_NAMESPACE) {
  const nsBuffer = Buffer.from(namespace.replace(/-/g, ""), "hex");
  const nameBuffer = Buffer.from(name, "utf8");
  const hash = crypto.createHash("sha1").update(Buffer.concat([nsBuffer, nameBuffer])).digest();

  hash[6] = (hash[6] & 0x0f) | 0x50; // version 5
  hash[8] = (hash[8] & 0x3f) | 0x80; // variant RFC 4122

  const hex = hash.toString("hex");
  return [
    hex.substring(0, 8),
    hex.substring(8, 12),
    hex.substring(12, 16),
    hex.substring(16, 20),
    hex.substring(20, 32),
  ].join("-");
}

export function generateFingerprint(banca, ano, orgao, tipo, enunciado, alternativas = []) {
  const norm = (s) => (s || "").toLowerCase().trim().replace(/\s+/g, " ");
  const textAlts = alternativas.map((a) => norm(a.texto || a)).sort().join("|||");
  const raw = `${norm(banca)}:::${ano}:::${norm(orgao)}:::${norm(tipo)}:::${norm(enunciado)}:::${textAlts}`;
  return crypto.createHash("sha256").update(raw, "utf8").digest("hex");
}
