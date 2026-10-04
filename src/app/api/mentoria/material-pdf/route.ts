import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const maxDuration = 60;

const DOMINIOS_OFICIAIS = [
  "gov.br",
  "leg.br",
  "planalto.gov.br",
  "pr.gov.br",
  "pmpr.pr.gov.br",
  "policiamilitar.pr.gov.br",
  "stf.jus.br",
  "stj.jus.br",
  "cnj.jus.br",
  "tse.jus.br",
  "tcu.gov.br",
  "ibge.gov.br",
  "inep.gov.br",
  "bn.gov.br",
  "abl.org.br",
];

type Source = { title: string; url: string };
type OpenAIResponse = {
  output_text?: unknown;
  output?: Array<{
    type?: string;
    content?: Array<{ type?: string; text?: string }>;
    action?: { sources?: Array<{ title?: string; url?: string }> };
  }>;
  error?: { message?: string };
};

function isAllowedOfficialUrl(rawUrl: string) {
  try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol !== "https:" || parsed.username || parsed.password) return false;
    const host = parsed.hostname.toLowerCase();
    return DOMINIOS_OFICIAIS.some((domain) => host === domain || host.endsWith(`.${domain}`));
  } catch {
    return false;
  }
}

function outputText(response: OpenAIResponse) {
  if (typeof response.output_text === "string") return response.output_text.trim();
  return (response.output || [])
    .flatMap((item) => item.content || [])
    .filter((item) => item.type === "output_text")
    .map((item) => item.text || "")
    .join("\n")
    .trim();
}

function responseSources(response: OpenAIResponse): Source[] {
  const seen = new Set<string>();
  const results: Source[] = [];
  for (const item of response.output || []) {
    if (item.type !== "web_search_call") continue;
    for (const source of item.action?.sources || []) {
      const url = typeof source.url === "string" ? source.url : "";
      if (!url || !isAllowedOfficialUrl(url) || seen.has(url)) continue;
      seen.add(url);
      results.push({ title: String(source.title || new URL(url).hostname).slice(0, 200), url });
    }
  }
  return results;
}

export async function POST(request: NextRequest) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Serviço de autenticação indisponível." }, { status: 503 });

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) return NextResponse.json({ error: "Entre na sua conta para gerar o material." }, { status: 401 });
  if (!process.env.OPENAI_API_KEY) return NextResponse.json({ error: "Geração por IA indisponível no servidor." }, { status: 503 });

  const body = await request.json().catch(() => null);
  const disciplinaId = typeof body?.disciplina_id === "string" ? body.disciplina_id : "";
  const assuntoId = typeof body?.assunto_id === "string" ? body.assunto_id : "";
  const importedId = typeof body?.importado_id === "string" ? body.importado_id : "";
  const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuid.test(disciplinaId) || !uuid.test(assuntoId) || (importedId && !uuid.test(importedId))) {
    return NextResponse.json({ error: "Selecione um tópico válido do edital." }, { status: 400 });
  }

  let editalId: string | null = null;
  let importedStructure: unknown = null;
  if (importedId) {
    const { data: imported, error: importedError } = await supabase
      .from("editais_usuario")
      .select("id,edital_id,estrutura_extraida")
      .eq("id", importedId)
      .eq("usuario_id", user.id)
      .eq("status", "confirmado")
      .maybeSingle();
    if (importedError) return NextResponse.json({ error: "Não foi possível consultar o edital importado." }, { status: 500 });
    if (!imported?.edital_id) return NextResponse.json({ error: "Edital importado confirmado não encontrado." }, { status: 404 });
    editalId = imported.edital_id;
    importedStructure = imported.estrutura_extraida;
  } else {
    const { data: alvo, error: alvoError } = await supabase
      .from("usuario_concurso_alvo")
      .select("edital_id")
      .eq("usuario_id", user.id)
      .maybeSingle();
    if (alvoError) return NextResponse.json({ error: "Não foi possível confirmar seu edital alvo." }, { status: 500 });
    if (!alvo?.edital_id) return NextResponse.json({ error: "Defina seu edital alvo antes de gerar materiais." }, { status: 409 });
    editalId = alvo.edital_id;
  }
  if (!editalId) return NextResponse.json({ error: "O edital informado não possui tópicos vinculados." }, { status: 409 });

  const { data: row, error: topicError } = await supabase
    .from("edital_topicos")
    .select("disciplina_id,assunto_id,disciplinas(nome),assuntos(nome)")
    .eq("edital_id", editalId)
    .eq("disciplina_id", disciplinaId)
    .eq("assunto_id", assuntoId)
    .limit(1)
    .maybeSingle();
  if (topicError) return NextResponse.json({ error: "Não foi possível consultar o tópico do edital." }, { status: 500 });
  if (!row) return NextResponse.json({ error: "Esse tópico não pertence ao edital alvo selecionado." }, { status: 404 });

  const relationName = (value: unknown) => {
    const first = Array.isArray(value) ? value[0] : value;
    return first && typeof first === "object" && "nome" in first ? String((first as { nome: unknown }).nome) : "";
  };
  const disciplina = relationName(row.disciplinas);
  const assunto = relationName(row.assuntos);
  if (!disciplina || !assunto) return NextResponse.json({ error: "O tópico não tem disciplina e assunto válidos." }, { status: 422 });

  if (importedStructure) {
    const structure = importedStructure as { disciplinas?: Array<{ nome?: string; assuntos?: unknown[] }>; cargos?: Array<{ disciplinas?: Array<{ nome?: string; assuntos?: unknown[] }> }> };
    const disciplines = (structure.disciplinas?.length ? structure.disciplinas : structure.cargos?.flatMap((cargo) => cargo.disciplinas || [])) || [];
    const importedPairs = disciplines.flatMap((entry) =>
      (entry.assuntos || []).map((rawSubject) => {
        const subjectName = rawSubject && typeof rawSubject === "object" && "nome" in rawSubject
          ? String((rawSubject as { nome: unknown }).nome).trim()
          : String(rawSubject).trim();
        return `${String(entry.nome || "").trim()}|||${subjectName}`;
      }),
    );
    if (!importedPairs.includes(`${disciplina.trim()}|||${assunto.trim()}`)) {
      return NextResponse.json({ error: "Esse tópico não faz parte do edital importado selecionado." }, { status: 404 });
    }
  }

  const model = process.env.OPENAI_MATERIAL_MODEL || process.env.OPENAI_EDITAL_MODEL || "gpt-5.6-luna";
  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      signal: AbortSignal.timeout(50_000),
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        tools: [{ type: "web_search", search_context_size: "medium", filters: { allowed_domains: DOMINIOS_OFICIAIS } }],
        tool_choice: "required",
        include: ["web_search_call.action.sources"],
        max_output_tokens: 4500,
        input: [
          {
            role: "system",
            content: "Você é um redator educacional. Produza uma apostila curta e objetiva, em português do Brasil, somente sobre o assunto fornecido. A pesquisa na web está restrita a domínios oficiais. Não use conhecimento de memória como evidência, não complete lacunas por inferência e não invente regras, leis, exemplos atribuídos a fontes, datas ou números. Toda afirmação factual deve vir imediatamente acompanhada de um link Markdown para uma das páginas encontradas pela busca oficial. Prefira textos legais vigentes e páginas primárias do governo. Se as fontes oficiais não sustentarem um ponto, omita-o ou diga claramente que não foi possível confirmá-lo. Organize com título, explicação, pontos-chave e um exemplo apenas se puder sustentá-lo com fonte. Não inclua bibliografia fictícia nem links que não abriu na busca. Termine com uma nota breve para conferir atualizações no órgão oficial. A busca não garante ausência de erros; não afirme isso. Retorne apenas o conteúdo da apostila em Markdown, sem comentários sobre o processo.",
          },
          {
            role: "user",
            content: `Disciplina: ${disciplina}\nAssunto exato do edital: ${assunto}\nElabore um material de revisão fiel a esse tópico, sem ampliar o escopo.`,
          },
        ],
      }),
      cache: "no-store",
    });
    const result = await response.json() as OpenAIResponse;
    if (!response.ok) {
      console.error("Falha na geração do material:", result.error?.message || response.status);
      return NextResponse.json({ error: "Não foi possível gerar o material agora. Tente novamente mais tarde." }, { status: 502 });
    }

    const text = outputText(result);
    const allSources = responseSources(result);
    const citedUrls: string[] = [...text.matchAll(/\[[^\]]+\]\((https?:\/\/[^\s)]+)\)/g)]
      .map((match) => match[1])
      .filter((url): url is string => Boolean(url));
    const sources = allSources.filter((source) => citedUrls.includes(source.url));
    const sourceUrls = new Set(sources.map((source) => source.url));
    const badCitation = citedUrls.some((url) => !sourceUrls.has(url));

    if (!text || sources.length < 2 || badCitation || citedUrls.length < 2) {
      return NextResponse.json({
        error: "Não encontrei fontes oficiais suficientes para um material confiável deste tópico. Nenhum PDF foi criado.",
      }, { status: 422 });
    }

    return NextResponse.json({ disciplina, assunto, material: text, fontes: sources });
  } catch (error) {
    console.error("Erro ao gerar material do tópico:", error);
    return NextResponse.json({ error: "A geração demorou ou falhou. Tente novamente." }, { status: 502 });
  }
}
