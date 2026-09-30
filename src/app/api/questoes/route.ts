import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { Questao } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const pageSize = Math.min(200, Math.max(1, parseInt(searchParams.get("pageSize") || "10", 10)));
    const disciplina_id = searchParams.get("disciplina_id") || undefined;
    const disciplina_nome = searchParams.get("disciplina_nome") || undefined;
    const assunto_id = searchParams.get("assunto_id") || undefined;
    const subassunto_id = searchParams.get("subassunto_id") || undefined;
    const banca = searchParams.get("banca") || undefined;
    const ano = searchParams.get("ano") ? parseInt(searchParams.get("ano")!, 10) : undefined;
    const tipo = (searchParams.get("tipo") as any) || undefined;
    const dificuldade = (searchParams.get("dificuldade") as any) || undefined;
    const origem = (searchParams.get("origem") as any) || "todas";
    const termo_busca = searchParams.get("termo_busca") || undefined;
    const status = searchParams.get("status") || "todas";
    const anuladaParam = searchParams.get("anulada");
    const desatualizadaParam = searchParams.get("desatualizada");

    // ── Supabase path ──────────────────────────────────────────────────────
    if (isSupabaseConfigured) {
      const supabase = await createClientServer();
      if (!supabase) {
        return NextResponse.json({ success: false, error: "Supabase indisponível" }, { status: 503 });
      }

      // Consulta principal desacoplada da tabela questoes (evita erro 500 de PostgREST schema cache)
      let query = supabase
        .from("questoes")
        .select(
          `
          id, disciplina_id, assunto_id, subassunto_id, prova_id,
          banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade,
          enunciado, texto_apoio, explicacao,
          is_autoral_ia, modelo_ia, prompt_versao, revisada_por_especialista,
          anulada, desatualizada, motivo_desatualizacao, auditoria_status, auditoria_motivo, auditada_em, versao,
          fingerprint_hash, total_respostas, total_acertos, taxa_acerto,
          created_at, updated_at
        `,
          { count: "exact" }
        )
        .neq("auditoria_status", "irrecuperavel")
        .order("created_at", { ascending: false });

      // Filtros
      if (disciplina_id && disciplina_id !== "todos") {
        let idsDisciplina = [disciplina_id];
        if (disciplina_nome) {
          const normalizar = (v:string) => v.normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").toLowerCase().replace(/^nocoes de /, "").replace(/ e tecnologia$/, "").replace(/ basica$/, "").trim();
          const base = normalizar(disciplina_nome);
          const { data: catalogo } = await supabase.from("disciplinas").select("id,nome");
          const equivalentes = (catalogo || []).filter((d:any) => normalizar(d.nome) === base);
          if (equivalentes.length) idsDisciplina = Array.from(new Set([disciplina_id, ...equivalentes.map((d:any)=>d.id)]));
        }
        query = idsDisciplina.length > 1 ? query.in("disciplina_id", idsDisciplina) : query.eq("disciplina_id", disciplina_id);
      }
      if (assunto_id && assunto_id !== "todos") {
        query = query.eq("assunto_id", assunto_id);
      }
      if (subassunto_id && subassunto_id !== "todos") {
        query = query.eq("subassunto_id", subassunto_id);
      }
      if (banca && banca !== "todas") {
        query = query.ilike("banca_nome", `%${banca}%`);
      }
      if (ano && !isNaN(ano)) {
        query = query.eq("ano", ano);
      }
      if (tipo && tipo !== "todos") {
        query = query.eq("tipo", tipo);
      }
      if (dificuldade && dificuldade !== "todos") {
        query = query.eq("dificuldade", dificuldade);
      }
      if (origem === "oficiais") {
        query = query.eq("is_autoral_ia", false);
      } else if (origem === "autorais_ia") {
        query = query.eq("is_autoral_ia", true);
      }
      if (anuladaParam === "false") {
        query = query.eq("anulada", false);
      } else if (anuladaParam === "true") {
        query = query.eq("anulada", true);
      } else {
        // Por padrão, esconde anuladas da listagem pública
        query = query.eq("anulada", false);
      }
      if (desatualizadaParam === "false") {
        query = query.eq("desatualizada", false);
      } else if (desatualizadaParam === "true") {
        query = query.eq("desatualizada", true);
      }

      // Full-Text Search via busca_vetor (PostgreSQL)
      if (termo_busca && termo_busca.trim()) {
        query = query.textSearch("busca_vetor", termo_busca.trim(), {
          config: "portuguese",
          type: "websearch",
        });
      }

      // Questões autorais não podem ser tratadas como prova oficial.
      // O banco atual contém conteúdo IA com metadados de estilo; a UI recebe
      // esses campos somente como referência de estilo, nunca como procedência.
      // Questões anuladas/desativadas continuam fora da listagem pública pelo filtro acima.

      // Status é filtrado no servidor para manter lista, total e paginação consistentes.
      if (status !== "todas") {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return NextResponse.json({ success:false, error:"Não autenticado" }, { status:401 });
        if (status === "favoritas") {
          const { data: favs } = await supabase.from("questoes_favoritas").select("questao_id").eq("usuario_id", user.id);
          const ids=(favs||[]).map((x:any)=>x.questao_id);
          if (!ids.length) return NextResponse.json({success:true,questoes:[],total:0,page,pageSize,totalPages:1,hasMore:false,fonte:"supabase"});
          query=query.in("id",ids);
        } else {
          const { data: respostas } = await supabase.from("respostas_usuarios").select("questao_id,correta,created_at").eq("usuario_id", user.id).order("created_at",{ascending:false});
          const latest=new Map<string,boolean>();
          for(const r of respostas||[]) if(!latest.has(r.questao_id)) latest.set(r.questao_id,Boolean(r.correta));
          let ids:string[]=[];
          if(status==="acertadas") ids=[...latest].filter(([,ok])=>ok).map(([id])=>id);
          if(status==="erradas") ids=[...latest].filter(([,ok])=>!ok).map(([id])=>id);
          if(status==="nao_resolvidas") {
            const done=[...latest.keys()];
            if(done.length) query=query.not("id","in",`(${done.join(",")})`);
          } else {
            if(!ids.length) return NextResponse.json({success:true,questoes:[],total:0,page,pageSize,totalPages:1,hasMore:false,fonte:"supabase"});
            query=query.in("id",ids);
          }
        }
      }

      // Paginação server-side
      const offset = (page - 1) * pageSize;
      query = query.range(offset, offset + pageSize - 1);

      const { data, error, count } = await query;

      if (error) {
        console.error("[API /questoes] Supabase error:", error);
        return NextResponse.json(
          { success: false, error: "Erro ao consultar questões", message: error.message },
          { status: 500 }
        );
      }

      const rows = data ?? [];
      const questaoIds = rows.map((r: any) => r.id);

      // Consulta em lote para alternativas (desacoplada, rápida e 100% segura)
      const alternativasMap = new Map<string, any[]>();
      if (questaoIds.length > 0) {
        const { data: altsData, error: altsError } = await supabase
          .from("questoes_alternativas")
          .select("id, questao_id, letra, texto, ordem")
          .in("questao_id", questaoIds)
          .order("ordem", { ascending: true });

        if (altsError) {
          console.warn("[API /questoes] Aviso ao carregar alternativas:", altsError.message);
        } else if (altsData) {
          for (const alt of altsData) {
            if (!alternativasMap.has(alt.questao_id)) {
              alternativasMap.set(alt.questao_id, []);
            }
            alternativasMap.get(alt.questao_id)!.push({
              id: alt.id,
              questao_id: alt.questao_id,
              letra: alt.letra,
              texto: alt.texto,
              ordem: alt.ordem,
            });
          }
        }
      }

      // Resolve a taxonomia real em lote; a UI não deve depender dos mocks para nomes.
      const disciplinaIds = Array.from(new Set(rows.map((r: any) => r.disciplina_id).filter(Boolean)));
      const assuntoIds = Array.from(new Set(rows.map((r: any) => r.assunto_id).filter(Boolean)));
      const [discResult, assResult] = await Promise.all([
        disciplinaIds.length ? supabase.from("disciplinas").select("id, nome").in("id", disciplinaIds) : Promise.resolve({ data: [] as any[] }),
        assuntoIds.length ? supabase.from("assuntos").select("id, nome").in("id", assuntoIds) : Promise.resolve({ data: [] as any[] }),
      ]);
      const disciplinaNome = new Map((discResult.data || []).map((d: any) => [d.id, d.nome]));
      const assuntoNome = new Map((assResult.data || []).map((a: any) => [a.id, a.nome]));

      // Sanitização de apresentação para conteúdo autoral legado.
      const bancaEstilo=(v:string)=>String(v||"").replace(/^(?:Estilo\s+)+/i,"").replace(/^Inédita\s*\/\s*Estilo\s+/i,"").trim();
      const textoLimpo=(v:string)=>String(v||"").replace(/R\$\s*(\d{1,3})(\d{3}),([0-9]{2})\b/g,"R$ $1.$2,$3").replace(/\bVariação\s*\d+\b/gi,"").replace(/\s{2,}/g," ").trim();
      // Remapeia para o formato do tipo Questao do frontend
      const questoes: Questao[] = rows.map((row: any) => ({
        id: row.id,
        disciplina_id: row.disciplina_id,
        assunto_id: row.assunto_id,
        disciplina_nome: disciplinaNome.get(row.disciplina_id) || undefined,
        assunto_nome: assuntoNome.get(row.assunto_id) || undefined,
        subassunto_id: row.subassunto_id ?? null,
        prova_id: row.prova_id ?? null,
        enunciado: textoLimpo(row.enunciado),
        tipo: row.tipo,
        dificuldade: row.dificuldade,
        banca: row.is_autoral_ia ? bancaEstilo(row.banca_nome) : (row.banca_nome ?? ""),
        // Para conteúdo autoral, ano/órgão/cargo históricos são metadados sintéticos
        // e não devem ser expostos como procedência oficial ao frontend.
        ano: row.is_autoral_ia ? 0 : row.ano,
        orgao: row.is_autoral_ia ? "" : (row.orgao_nome ?? ""),
        cargo: row.is_autoral_ia ? undefined : (row.cargo_nome ?? undefined),
        explicacao: textoLimpo(row.explicacao),
        texto_apoio: row.texto_apoio ?? undefined,
        taxa_acerto_comunidade: row.taxa_acerto ? Number(row.taxa_acerto) : undefined,
        total_respostas_comunidade: row.total_respostas ?? 0,
        is_autoral_ia: row.is_autoral_ia,
        modelo_ia: row.modelo_ia ?? null,
        prompt_versao: row.prompt_versao ?? null,
        revisada_por_especialista: row.revisada_por_especialista,
        anulada: row.anulada,
        desatualizada: row.desatualizada,
        motivo_desatualizacao: row.motivo_desatualizacao ?? null,
        auditoria_status: row.auditoria_status ?? "pendente",
        auditoria_motivo: row.auditoria_motivo ?? null,
        auditada_em: row.auditada_em ?? null,
        versao: row.versao,
        fingerprint_hash: row.fingerprint_hash,
        created_at: row.created_at,
        updated_at: row.updated_at,
        alternativas: (alternativasMap.get(row.id) ?? [])
          .sort((a: any, b: any) => a.ordem - b.ordem),
      }));

      const total = count ?? 0;
      const totalPages = Math.ceil(total / pageSize) || 1;

      return NextResponse.json({
        success: true,
        questoes,
        total,
        page,
        pageSize,
        totalPages,
        hasMore: page < totalPages,
        fonte: "supabase",
      });
    }

    return NextResponse.json({ success: false, error: "Banco de questões indisponível" }, { status: 503 });
  } catch (error: any) {
    console.error("[API /questoes] Erro inesperado:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erro ao processar consulta de questões",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
