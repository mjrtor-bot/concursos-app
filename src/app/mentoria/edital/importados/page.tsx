"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, FileText, Loader2 } from "lucide-react";

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
                  <h2 className="mt-1 text-lg font-black">{ed.nome}</h2>
                  <p className="text-sm text-slate-500">{ed.cargo || "Cargo não informado"}</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-xs font-bold text-green-700">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Confirmado
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Disciplinas</p><p className="text-xl font-black">{ed.total_disciplinas}</p></div>
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Assuntos</p><p className="text-xl font-black">{ed.total_topicos}</p></div>
              </div>
              <p className="mt-3 truncate text-xs text-slate-500">{ed.arquivo_nome}</p>
              <Link href={`/mentoria/edital?importado=${ed.id}`} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-700">
                <BookOpen className="w-4 h-4" /> Abrir edital verticalizado
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
