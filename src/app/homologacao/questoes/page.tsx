"use client";
import { useEffect, useState } from "react";

type Disciplina = { id: string; nome: string; total_questoes: number };
type Alternativa = { id: string; letra: string; texto: string };
type Questao = { id: string; enunciado: string; disciplina_nome: string; assunto_nome: string; alternativas: Alternativa[] };
type Resultado = { success: boolean; questoes: Questao[]; total: number; totalPages: number; error?: string };

export default function QuestoesHomologacao() {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [disciplina, setDisciplina] = useState("");
  const [pagina, setPagina] = useState(1);
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("/api/contabo?recurso=disciplinas")
      .then(async (r) => { if (!r.ok) throw new Error("Falha na taxonomia"); return r.json(); })
      .then((data) => { if (data.success) setDisciplinas(data.disciplinas); })
      .catch(() => setErro("Nao foi possivel carregar as disciplinas."));
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const params = new URLSearchParams({ recurso: "questoes", page: String(pagina), pageSize: "10" });
    if (disciplina) params.set("disciplina_id", disciplina);
    fetch("/api/contabo?" + params.toString(), { signal: controller.signal })
      .then(async (r) => { if (!r.ok) throw new Error("Falha na API"); return r.json() as Promise<Resultado>; })
      .then((data) => { if (!data.success) throw new Error(data.error || "Consulta falhou"); setResultado(data); setErro(""); })
      .catch((e: Error) => { if (e.name !== "AbortError") setErro("Nao foi possivel consultar as questoes."); })
      .finally(() => { if (!controller.signal.aborted) setCarregando(false); });
    return () => controller.abort();
  }, [pagina, disciplina]);

  return (
    <main className="mx-auto max-w-4xl p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Homologacao: banco de questoes</h1>
        <p className="text-sm text-amber-700">Ambiente de leitura e verificacao. Respostas, gabaritos, historico e Meu Edital ainda nao estao migrados.</p>
      </header>
      <label className="block space-y-2">
        <span className="font-medium">Disciplina</span>
        <select className="w-full rounded border p-2" value={disciplina} onChange={(e) => { setDisciplina(e.target.value); setPagina(1); setCarregando(true); }}>
          <option value="">Todas as disciplinas</option>
          {disciplinas.map((d) => <option key={d.id} value={d.id}>{d.nome} ({d.total_questoes})</option>)}
        </select>
      </label>
      {erro && <p role="alert" className="text-red-700">{erro}</p>}
      {carregando ? <p>Carregando questoes...</p> : resultado && (
        <>
          <p className="font-medium">{resultado.total} questoes encontradas — pagina {pagina} de {resultado.totalPages}</p>
          {resultado.questoes.map((q) => (
            <article key={q.id} className="rounded border p-4 space-y-3">
              <p className="text-sm opacity-75">{q.disciplina_nome} / {q.assunto_nome}</p>
              <p className="whitespace-pre-wrap">{q.enunciado}</p>
              <ol className="space-y-2">{q.alternativas.map((a) => <li key={a.id} className="rounded bg-gray-100 p-2 text-gray-900">{a.letra}. {a.texto}</li>)}</ol>
            </article>
          ))}
          <nav className="flex items-center gap-4">
            <button className="rounded border px-4 py-2 disabled:opacity-40" disabled={pagina <= 1} onClick={() => { setPagina(pagina - 1); setCarregando(true); }}>Anterior</button>
            <button className="rounded border px-4 py-2 disabled:opacity-40" disabled={pagina >= resultado.totalPages} onClick={() => { setPagina(pagina + 1); setCarregando(true); }}>Proxima</button>
          </nav>
        </>
      )}
    </main>
  );
}
