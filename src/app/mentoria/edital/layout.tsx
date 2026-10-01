import Link from "next/link";
import { BookOpen, Library, Upload } from "lucide-react";
import type { ReactNode } from "react";

export default function EditalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 flex flex-wrap gap-2" aria-label="Editais verticalizados">
        <Link href="/mentoria/edital" className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800">
          <BookOpen className="h-4 w-4" /> Meu edital
        </Link>
        <Link href="/mentoria/edital/biblioteca" className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800">
          <Library className="h-4 w-4" /> Biblioteca policial
        </Link>
        <Link href="/mentoria/edital/importados" className="inline-flex items-center gap-2 rounded-lg border border-indigo-300 bg-indigo-50 px-3 py-2 text-sm font-bold text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-950/30 dark:text-indigo-300">
          <BookOpen className="h-4 w-4" /> Meus editais importados
        </Link>
        <Link href="/mentoria/edital/biblioteca#importar" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-bold text-white hover:bg-indigo-700">
          <Upload className="h-4 w-4" /> Importar edital em PDF
        </Link>
      </nav>
      {children}
    </div>
  );
}
