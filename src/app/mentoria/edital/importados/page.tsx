"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, FileText, Loader2, Target, Sparkles } from "lucide-react";
import { useConcurso } from "@/contexts/ConcursoContext";
import { useToast } from "@/contexts/ToastContext";
import { MentoriaCicloService } from "@/services/mentoriaCicloService";
import { useAuth } from "@/contexts/AuthContext";

type Edital = {
  id: string; nome: string; orgao?: string | null; cargo?: string | null; uf?: string | null;
  status: string; arquivo_nome?: string | null; created_at: string; confirmado_em?: string | null;
  total_disciplinas: number; total_topicos: number; edital_id?: string | null;
};

export default function EditaisImportadosPage() {
  const { user } = useAuth();
  const { recarregarConcursoAlvo, concursoAtivo } = useConcurso();
  const { success, error: toastError } = useToast();
  const [editais, setEditais] = useState<Edital[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");
  const [aplicandoId, setAplicandoId] = useState<string | null>(null);

  async function carregar() {
    setLoading(true);
    setErro("");
    try {
      const r = await fetch("/api/editais/importados", { cache: "no-store" });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Falha ao carregar seus editais.");
      setEditais(j.editais || []);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Falha ao carregar seus editais.");
    } finally {
      setLoading(false);
    }
  }

  async function usarComoAlvo(id: string) {
    setAplicandoId(id);
    try {
      const res = await fetch(`/api/editais/${id}/usar`, { method: "POST" });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Falha ao definir como concurso alvo.");

      await recarregarConcursoAlvo();
      if (user?.id) {
        await MentoriaCicloService.gerarOuRecalcularCiclo(user.id);
      }
      success("Edital importado definido como seu Concurso Alvo com sucesso!");
    } catch (e) {
      toastError(e instanceof Error ? e.message : "Não foi possível aplicar este edital.");
    } finally {
      setAplicandoId(null);
    }
  }

  useEffect(() => {
    let ignore = false;
    async function init() {
      try {
        const r = await fetch("/api/editais/importados", { cache: "no-store" });
        const j = await r.json();
        if (ignore) return;
        if (!r.ok) throw new Error(j.error || "Falha ao carregar seus editais.");
        setEditais(j.editais || []);
      } catch (e) {
        if (!ignore) {
          setErro(e instanceof Error ? e.message : "Falha ao carregar seus editais.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }
    void init();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/mentoria/edital/biblioteca" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600">
          <ArrowLeft className="w-4 h-4" /> Voltar para Biblioteca de Editais
        </Link>
        <Link href="/mentoria/edital/biblioteca#importar" className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-700">
          Importar novo PDF
        </Link>
      </div>

      <header className="rounded-2xl border bg-white dark:bg-slate-900 p-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Biblioteca pessoal</p>
            <h1 className="text-2xl font-black text-slate-900 dark:text-slate-50">Meus editais importados</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Editais em PDF personalizados que você importou para o seu planejamento.</p>
          </div>
        </div>
      </header>

      {loading ? (
        <div className="flex justify-center py-16"><Loader2 className="w-6 h-6 animate-spin text-purple-600" /></div>
      ) : erro ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">{erro}</div>
      ) : editais.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center">
          <FileText className="w-10 h-10 mx-auto text-slate-400" />
          <h2 className="mt-3 font-black">Nenhum edital importado ainda</h2>
          <p className="mt-1 text-sm text-slate-500">Depois de confirmar um PDF, ele aparecerá automaticamente nesta biblioteca.</p>
          <Link href="/mentoria/edital/biblioteca#importar" className="inline-block mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white">
            Importar meu primeiro edital
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {editais.map(ed => {
            const isAplicando = aplicandoId === ed.id;
            return (
              <article key={ed.id} className="rounded-2xl border bg-white dark:bg-slate-900 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-purple-600 dark:text-purple-400">{ed.orgao || "Órgão não informado"}{ed.uf ? " · " + ed.uf : ""}</p>
                      <h2 className="mt-1 text-lg font-black text-slate-900 dark:text-slate-100">{ed.cargo || "Cargo não informado"}</h2>
                    </div>
                    <span className="h-fit rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 px-2.5 py-1 text-xs font-bold">
                      Edital PDF
                    </span>
                  </div>

                  <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div><dt className="text-slate-500">Banca</dt><dd className="font-semibold text-slate-800 dark:text-slate-200">Personalizada</dd></div>
                    <div><dt className="text-slate-500">Edital</dt><dd className="font-semibold text-slate-800 dark:text-slate-200">PDF importado</dd></div>
                    <div><dt className="text-slate-500">Importação</dt><dd className="text-slate-700 dark:text-slate-300">{ed.created_at ? new Date(ed.created_at).toLocaleDateString("pt-BR") : "Não informada"}</dd></div>
                    <div><dt className="text-slate-500">Prova</dt><dd className="text-slate-700 dark:text-slate-300">A definir</dd></div>
                    <div><dt className="text-slate-500">Disciplinas</dt><dd className="font-semibold text-slate-800 dark:text-slate-200">{ed.total_disciplinas}</dd></div>
                    <div><dt className="text-slate-500">Tópicos</dt><dd className="font-semibold text-slate-800 dark:text-slate-200">{ed.total_topicos}</dd></div>
                  </dl>

                  <p className="mt-3 truncate text-xs text-slate-500 dark:text-slate-400">{ed.arquivo_nome}</p>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    disabled={isAplicando}
                    onClick={() => usarComoAlvo(ed.id)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-700 disabled:opacity-50 transition-colors"
                  >
                    {isAplicando ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        Definindo...
                      </>
                    ) : (
                      <>
                        <Target className="h-3.5 w-3.5" />
                        Definir como Concurso Alvo
                      </>
                    )}
                  </button>

                  <Link
                    href={`/mentoria/edital?importado=${ed.id}`}
                    className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <BookOpen className="h-3.5 w-3.5" /> Ver verticalizado
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}
