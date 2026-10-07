/**
 * Correspondência do filtro de banca.
 *
 * O dropdown envia rótulos de exibição (ex.: "Fundação Vunesp", "FCC - Fundação Carlos Chagas"),
 * enquanto `questoes.banca_nome` guarda variações como "Estilo VUNESP", "Estilo FCC" e
 * "Estilo Inédita / Estilo CEBRASPE". Comparar o rótulo inteiro com ilike não encontra essas linhas.
 * Aqui cada banca conhecida é reduzida aos termos distintivos que aparecem nos dados.
 */

const BANCAS_CONHECIDAS: Array<{ chaves: string[]; padroes: string[] }> = [
  { chaves: ["cebraspe", "cespe"], padroes: ["cebraspe", "cespe"] },
  { chaves: ["fgv", "getulio vargas"], padroes: ["fgv", "getulio vargas"] },
  { chaves: ["fcc", "carlos chagas"], padroes: ["fcc", "carlos chagas"] },
  { chaves: ["cesgranrio"], padroes: ["cesgranrio"] },
  { chaves: ["vunesp"], padroes: ["vunesp"] },
  { chaves: ["aocp"], padroes: ["aocp"] },
  { chaves: ["quadrix"], padroes: ["quadrix"] },
  { chaves: ["ibfc"], padroes: ["ibfc"] },
  { chaves: ["iades"], padroes: ["iades"] },
  { chaves: ["selecon"], padroes: ["selecon"] },
  { chaves: ["idecan"], padroes: ["idecan"] },
];

function normalizar(valor: string): string {
  return valor
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

/** Termos (sem acento, minúsculos) que identificam a banca, ou null se ela não for conhecida. */
export function padroesBanca(banca: string): string[] | null {
  const norm = normalizar(banca);
  const encontrada = BANCAS_CONHECIDAS.find((b) => b.chaves.some((c) => norm.includes(c)));
  return encontrada ? encontrada.padroes : null;
}

/**
 * Aplica o filtro de banca a uma consulta do Supabase.
 * Banca conhecida: casa qualquer variação gravada. Banca desconhecida: mantém o ilike original.
 */
export function aplicarFiltroBanca<Q>(query: Q, banca: string): Q {
  const q = query as any;
  const padroes = padroesBanca(banca);
  if (!padroes) return q.ilike("banca_nome", `%${banca}%`) as Q;
  return q.or(padroes.map((p) => `banca_nome.ilike.%${p}%`).join(",")) as Q;
}
