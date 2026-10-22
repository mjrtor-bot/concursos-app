import { NextResponse } from "next/server";

export const runtime = "nodejs";

const UFS = new Set(["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"]);

type MunicipioIBGE = { id: number; nome: string; microrregiao?: { mesorregiao?: { UF?: { sigla?: string } } } };

export async function GET(request: Request) {
  const uf = new URL(request.url).searchParams.get("uf")?.trim().toUpperCase();
  if (!uf || !UFS.has(uf)) {
    return NextResponse.json({ error: "Informe uma UF válida (ex.: ?uf=GO)." }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
      { headers: { Accept: "application/json" }, next: { revalidate: 86400 }, signal: AbortSignal.timeout(8000) }
    );
    if (!response.ok) {
      return NextResponse.json({ error: "Serviço do IBGE indisponível." }, { status: 502 });
    }
    const data: unknown = await response.json();
    if (!Array.isArray(data) || !data.every((item): item is MunicipioIBGE =>
      typeof item === "object" && item !== null && typeof item.id === "number" && typeof item.nome === "string"
    )) {
      return NextResponse.json({ error: "Resposta inesperada do IBGE." }, { status: 502 });
    }
    const municipios = data.map(({ id, nome }) => ({ id, nome })).sort((a,b) => a.nome.localeCompare(b.nome, "pt-BR"));
    return NextResponse.json({ uf, total: municipios.length, municipios });
  } catch {
    return NextResponse.json({ error: "Não foi possível consultar o IBGE." }, { status: 502 });
  }
}
