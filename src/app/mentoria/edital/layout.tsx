import Link from "next/link";
import { BookOpen, Library, Upload } from "lucide-react";

export default function EditalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 flex flex-wrap gap-2" aria-label="Editais verticalizados">
        <Link href="/mentoria/edital" className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800">
          <BookOpen className="h-4 w-4" /> Meu edital
        </Link>
        <Link href="/mentoria/edital/biblioteca" className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800">
          <Library className="h-4 w-4" /> Biblioteca policial
        </Link>
        <Link href="/mentoria/edital/biblioteca#importar" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-bold text-white hover:bg-indigo-700">
          <Upload className="h-4 w-4" /> Importar edital em PDF
        </Link>
      </nav>
      {children}
    </div>
  );
}
