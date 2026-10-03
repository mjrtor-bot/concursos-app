"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { PlusCircle, Trash2 } from "lucide-react";

interface RegistroExterno {
  id: string;
  fonte: string;
  disciplina_id: string;
  quantidade: number;
  acertos: number;
  data: string;
  observacao?: string;
}

interface DisciplinaItem {
  id: string;
  nome: string;
}

export default function Externas() {
  const [registros, setRegistros] = useState<RegistroExterno[]>([]);
  const [disciplinas, setDisciplinas] = useState<DisciplinaItem[]>([]);
  const [form, setForm] = useState(() => ({
    fonte: "",
    disciplina_id: "",
    quantidade: 10,
    acertos: 0,
    data: new Date().toISOString().slice(0, 10),
    observacao: "",
  }));
  const [mensagem, setMensagem] = useState("");

  const load = useCallback(async () => {
    try {
      const [j, d] = await Promise.all([
        fetch("/api/questoes-externas", { cache: "no-store" }).then((x) => x.json()),
        fetch("/api/disciplinas", { cache: "no-store" }).then((x) => x.json()),
      ]);
      setRegistros(j.registros || []);
      setDisciplinas(d.disciplinas || []);
    } catch {
      // Ignore
    }
  }, []);

  useEffect(() => {
    let ignore = false;
    async function init() {
      try {
        const [j, d] = await Promise.all([
          fetch("/api/questoes-externas", { cache: "no-store" }).then((x) => x.json()),
          fetch("/api/disciplinas", { cache: "no-store" }).then((x) => x.json()),
        ]);
        if (!ignore) {
          setRegistros(j.registros || []);
          setDisciplinas(d.disciplinas || []);
        }
      } catch {
        // Ignore
      }
    }
    void init();
    return () => {
      ignore = true;
    };
  }, []);

  async function save() {
    setMensagem("");
    if (!form.fonte.trim()) return setMensagem("Informe a fonte.");
    if (!form.disciplina_id) return setMensagem("Selecione a disciplina.");
    if (form.quantidade < 1 || form.acertos < 0 || form.acertos > form.quantidade) {
      return setMensagem("Quantidade/acertos inválidos.");
    }
    const x = await fetch("/api/questoes-externas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const j = await x.json();
    if (!x.ok) return setMensagem(j.error || "Erro");
    setMensagem("Lançamento registrado.");
    setForm((prev) => ({ ...prev, fonte: "", observacao: "" }));
    void load();
  }

  async function del(id: string) {
    const x = await fetch("/api/questoes-externas?id=" + encodeURIComponent(id), {
      method: "DELETE",
    });
    if (!x.ok) {
      const j = await x.json();
      return setMensagem(j.error || "Erro ao excluir");
    }
    setMensagem("Lançamento excluído.");
    void load();
  }

  const inputClass =
    "w-full px-3 py-2 border rounded-xl bg-transparent border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100";

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-black flex items-center gap-2 text-slate-900 dark:text-white">
        <PlusCircle className="w-8 h-8 text-blue-600" />
        Questões feitas fora da plataforma
      </h1>

      <Card>
        <CardContent className="p-5 grid md:grid-cols-2 gap-3">
          <input
            className={inputClass}
            required
            placeholder="Fonte (curso, livro, site)"
            value={form.fonte}
            onChange={(e) => setForm({ ...form, fonte: e.target.value })}
          />
          <select
            className={inputClass}
            required
            value={form.disciplina_id}
            onChange={(e) => setForm({ ...form, disciplina_id: e.target.value })}
          >
            <option value="">Selecione a disciplina</option>
            {disciplinas.map((d) => (
              <option key={d.id} value={d.id}>
                {d.nome}
              </option>
            ))}
          </select>
          <input
            className={inputClass}
            type="date"
            value={form.data}
            onChange={(e) => setForm({ ...form, data: e.target.value })}
          />
          <input
            className={inputClass}
            type="number"
            min="1"
            placeholder="Quantidade"
            value={form.quantidade}
            onChange={(e) => setForm({ ...form, quantidade: Number(e.target.value) })}
          />
          <input
            className={inputClass}
            type="number"
            min="0"
            max={form.quantidade}
            placeholder="Acertos"
            value={form.acertos}
            onChange={(e) => setForm({ ...form, acertos: Number(e.target.value) })}
          />
          <textarea
            className={inputClass + " md:col-span-2"}
            placeholder="Observação"
            rows={2}
            value={form.observacao}
            onChange={(e) => setForm({ ...form, observacao: e.target.value })}
          />
          <div className="md:col-span-2">
            {mensagem && <p className="text-sm mb-2 text-blue-600 dark:text-blue-400">{mensagem}</p>}
            <Button onClick={save}>Registrar resultado</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Histórico</CardTitle>
        </CardHeader>
        <CardContent>
          {registros.length ? (
            registros.map((x) => (
              <div
                key={x.id}
                className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 py-3 text-sm gap-3"
              >
                <span className="text-slate-700 dark:text-slate-300">
                  {x.data} · {x.fonte}
                </span>
                <div className="flex items-center gap-3">
                  <b className="text-slate-900 dark:text-slate-100">
                    {x.acertos}/{x.quantidade} ({Math.round((x.acertos / x.quantidade) * 100)}%)
                  </b>
                  <button
                    onClick={() => del(x.id)}
                    aria-label="Excluir lançamento"
                    className="text-rose-600 hover:text-rose-700 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-500">Nenhum lançamento externo.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
