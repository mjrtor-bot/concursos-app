"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, FileText, Loader2, ExternalLink } from "lucide-react";

type Edital = {
  id: string; nome: string; orgao?: string | null; cargo?: string | null; uf?: string | null;
  status: string; arquivo_nome?: string | null; created_at: string; confirmado_em?: string | null;
  total_disciplinas: number; total_topicos: number;
};

export default function EditaisImportadosPage() {
  const [editais, setEditais] = useState<Edital[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

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

  useEffect(() => { void carregar(); }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/mentoria/edital/biblioteca" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600">
          <ArrowLeft className="w-4 h-4" /> Voltar para Biblioteca de Editais
        </Link>
        <Link href="/mentoria/edital/biblioteca#importar" className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white">
          Importar novo PDF
        </Link>
      </div>

      <header className="rounded-2xl border bg-white dark:bg-slate-900 p-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Biblioteca pessoal</p>
            <h1 className="text-2xl font-black">Meus editais importados</h1>
            <p className="text-sm text-slate-500">Editais em PDF que você confirmou e importou para o seu planejamento.</p>
          </div>
        </div>
      </header>

      {loading ? (
        <div className="flex justify-center py-16"><Loader2 className="w-6 h-6 animate-spin" /></div>
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
          {editais.map(ed => (
            <article key={ed.id} className="rounded-2xl border bg-white dark:bg-slate-900 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold text-indigo-600">{ed.orgao || "Órgão não informado"}{ed.uf ? " · " + ed.uf : ""}</p>
                  <h2 className="mt-1 text-lg font-black">{ed.cargo || "Cargo não informado"}</h2>
                </div>
                <span className="h-fit rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-bold">
                  Edital importado
                </span>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div><dt className="text-slate-500">Banca</dt><dd className="font-semibold">Não informada</dd></div>
                <div><dt className="text-slate-500">Edital</dt><dd className="font-semibold">PDF importado</dd></div>
                <div><dt className="text-slate-500">Publicação</dt><dd>{ed.created_at ? new Date(ed.created_at).toLocaleDateString("pt-BR") : "Não informada"}</dd></div>
                <div><dt className="text-slate-500">Prova</dt><dd>Data a definir</dd></div>
                <div><dt className="text-slate-500">Disciplinas</dt><dd>{ed.total_disciplinas}</dd></div>
                <div><dt className="text-slate-500">Tópicos</dt><dd>{ed.total_topicos}</dd></div>
              </dl>

              <p className="mt-3 truncate text-xs text-slate-500">{ed.arquivo_nome}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={`/mentoria/edital?importado=${ed.id}`}
                  className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-bold text-white hover:bg-indigo-700"
                >
                  Abrir edital verticalizado <BookOpen className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
