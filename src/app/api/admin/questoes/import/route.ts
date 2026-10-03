import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { processarImportacaoQuestoes } from "@/services/questionImporter";
import { mockQuestoes } from "@/data/mockData";
import { ImportOptions, Questao } from "@/types";

async function requireAdmin() {
  const supabase = await createClientServer();
  if (!supabase) {
    return { error: NextResponse.json({ success: false, error: "Supabase indisponível" }, { status: 503 }) };
  }
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { error: NextResponse.json({ success: false, error: "Não autenticado" }, { status: 401 }) };
  }
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (!profile || !["admin", "editor"].includes(profile.role)) {
    return { error: NextResponse.json({ success: false, error: "Sem permissão de acesso" }, { status: 403 }) };
  }
  return { supabase, user };
}

export async function POST(request: NextRequest) {
  try {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;
    const supabase = auth.supabase;

    const body = await request.json();
    const { conteudo, formato, options } = body as {
      conteudo: string;
      formato: "json" | "csv";
      options?: ImportOptions;
    };

    if (!conteudo || typeof conteudo !== "string") {
      return NextResponse.json(
        { success: false, error: "Conteúdo do arquivo não fornecido ou inválido." },
        { status: 400 }
      );
    }

    if (formato !== "json" && formato !== "csv") {
      return NextResponse.json(
        { success: false, error: "Formato inválido. Os formatos suportados são 'json' ou 'csv'." },
        { status: 400 }
      );
    }

    const importOptions: ImportOptions = options || { politicaDuplicatas: "ignorar" };

    // ── Supabase path ───────────────────────────────────────────────────────
    if (isSupabaseConfigured && supabase) {
      // 1. Pré-processa localmente para obter os fingerprints deste lote
      const { questoesValidadas: preValidadas } = processarImportacaoQuestoes(
        conteudo,
        formato,
        [],
        importOptions
      );

      const batchHashes = Array.from(
        new Set(preValidadas.map((q) => q.fingerprint_hash).filter((h): h is string => Boolean(h)))
      );

      let existentes: any[] = [];
      if (batchHashes.length > 0) {
        // Busca apenas os fingerprints existentes no lote atual em vez de escanear o banco inteiro
        const { data: encontrados, error: errFetch } = await supabase
          .from("questoes")
          .select("id, fingerprint_hash, versao")
          .in("fingerprint_hash", batchHashes);

        if (errFetch) {
          console.error("[API /admin/import] Erro ao buscar fingerprints existentes:", errFetch);
          return NextResponse.json(
            { success: false, error: "Erro ao consultar fingerprints existentes.", message: errFetch.message },
            { status: 500 }
          );
        }
        existentes = encontrados || [];
      }

      // Monta lista de Questao para o motor de deduplicação
      const questoesExistentes: Partial<Questao>[] = existentes.map((r: any) => ({
        id: r.id,
        fingerprint_hash: r.fingerprint_hash,
        versao: r.versao ?? 1,
      }));

      const { questoesValidadas, report } = processarImportacaoQuestoes(
        conteudo,
        formato,
        questoesExistentes as Questao[],
        importOptions
      );

      if (questoesValidadas.length === 0) {
        return NextResponse.json({ success: true, report, questoesValidadas: [] });
      }

      // Persiste as questões validadas no Supabase via upsert no fingerprint_hash
      const errosUpsert: string[] = [];
      const CHUNK_SIZE = 100;

      for (let i = 0; i < questoesValidadas.length; i += CHUNK_SIZE) {
        const chunk = questoesValidadas.slice(i, i + CHUNK_SIZE);

        // Upserta a tabela questoes (sem as alternativas)
        const rowsQuestoes = chunk.map((q) => ({
          // Não enviamos o id gerado no cliente — Supabase gera UUID real
          disciplina_id: q.disciplina_id,
          assunto_id: q.assunto_id,
          subassunto_id: q.subassunto_id ?? null,
          banca_nome: q.banca,
          orgao_nome: q.orgao,
          cargo_nome: q.cargo ?? null,
          ano: q.ano,
          tipo: q.tipo,
          dificuldade: q.dificuldade,
          enunciado: q.enunciado,
          texto_apoio: q.texto_apoio ?? null,
          explicacao: q.explicacao,
          is_autoral_ia: q.is_autoral_ia ?? false,
          modelo_ia: q.modelo_ia ?? null,
          prompt_versao: q.prompt_versao ?? null,
          revisada_por_especialista: q.revisada_por_especialista ?? false,
          anulada: q.anulada ?? false,
          desatualizada: q.desatualizada ?? false,
          motivo_desatualizacao: q.motivo_desatualizacao ?? null,
          versao: q.versao ?? 1,
          fingerprint_hash: q.fingerprint_hash,
        }));

        const { data: upsertedQuestoes, error: errUpsert } = await supabase
          .from("questoes")
          .upsert(rowsQuestoes, {
            onConflict: "fingerprint_hash",
            ignoreDuplicates: importOptions.politicaDuplicatas === "ignorar",
          })
          .select("id, fingerprint_hash");

        if (errUpsert) {
          console.error("[API /admin/import] Erro no upsert de questoes:", errUpsert);
          errosUpsert.push(errUpsert.message);
          continue;
        }

        // Indexa os IDs reais retornados pelo Supabase para inserir as alternativas
        const fpToId = new Map<string, string>();
        (upsertedQuestoes ?? []).forEach((row: any) => {
          fpToId.set(row.fingerprint_hash, row.id);
        });

        // Monta e insere as alternativas de cada questão do chunk
        const rowsAlternativas: object[] = [];
        chunk.forEach((q) => {
          const questaoId = fpToId.get(q.fingerprint_hash!);
          if (!questaoId) return; // questão ignorada por duplicata (ignoreDuplicates=true)

          (q.alternativas ?? []).forEach((alt) => {
            rowsAlternativas.push({
              questao_id: questaoId,
              letra: alt.letra ?? null,
              texto: alt.texto,
              correta: alt.correta,
              ordem: alt.ordem,
              explicacao_especifica: alt.explicacao_especifica ?? null,
            });
          });
        });

        if (rowsAlternativas.length > 0) {
          // Deleta alternativas existentes das questões atualizadas antes de reinserir
          const idsParaAtualizar = Array.from(fpToId.values());
          if (importOptions.politicaDuplicatas === "atualizar" && idsParaAtualizar.length > 0) {
            await supabase
              .from("questoes_alternativas")
              .delete()
              .in("questao_id", idsParaAtualizar);
          }

          const { error: errAlts } = await supabase
            .from("questoes_alternativas")
            .insert(rowsAlternativas);

          if (errAlts) {
            console.error("[API /admin/import] Erro ao inserir alternativas:", errAlts);
            errosUpsert.push(`Alternativas: ${errAlts.message}`);
          }
        }
      }

      if (errosUpsert.length > 0) {
        return NextResponse.json(
          {
            success: false,
            error: "Importação parcial: alguns registros falharam ao persistir.",
            details: errosUpsert,
            report,
          },
          { status: 207 }
        );
      }

      return NextResponse.json({ success: true, report, questoesValidadas });
    }

    // ── Fallback: validação apenas (sem persistência server-side em modo mock) ──
    const { questoesValidadas, report } = processarImportacaoQuestoes(
      conteudo,
      formato,
      mockQuestoes,
      importOptions
    );

    return NextResponse.json({ success: true, report, questoesValidadas });
  } catch (error: any) {
    console.error("[API /admin/import] Erro inesperado:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erro no processamento da importação.",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
