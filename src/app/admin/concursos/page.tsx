"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

interface CargoItem {
  id: string;
  concurso_id: string;
  nome: string;
  escolaridade: string;
  vagas: number | null;
  salario: number | null;
  ativo: boolean;
}

interface ConcursoItem {
  id: string;
  nome: string;
  orgao: string;
  esfera: string;
  uf?: string | null;
  status: string;
  fonte_oficial_url?: string | null;
  concurso_cargos?: CargoItem[];
}

interface FormState {
  id?: string;
  nome: string;
  orgao: string;
  esfera: string;
  uf: string;
  status: string;
  fonte_oficial_url: string;
}

interface CargoFormState {
  concurso_id: string;
  nome: string;
  escolaridade: string;
  vagas: string;
  salario: string;
  ativo: boolean;
}

const initialForm: FormState = {
  nome: "",
  orgao: "",
  esfera: "estadual",
  uf: "GO",
  status: "previsto",
  fonte_oficial_url: "",
};

const initialCargo: CargoFormState = {
  concurso_id: "",
  nome: "",
  escolaridade: "superior",
  vagas: "",
  salario: "",
  ativo: true,
};

export default function AdminConcursos() {
  const [lista, setLista] = useState<ConcursoItem[]>([]);
  const [msg, setMsg] = useState("");
  const [cargo, setCargo] = useState<CargoFormState>(initialCargo);
  const [form, setForm] = useState<FormState>(initialForm);

  const load = useCallback(async () => {
    try {
      const r = await fetch("/api/admin/concursos", { cache: "no-store" });
      const j = await r.json();
      if (!r.ok) {
        setMsg(j.error || "Erro ao carregar");
        return;
      }
      setLista(j.concursos || []);
    } catch {
      setMsg("Erro de conexão ao carregar concursos");
    }
  }, []);

  useEffect(() => {
    let active = true;
    const fetchDados = async () => {
      try {
        const r = await fetch("/api/admin/concursos", { cache: "no-store" });
        const j = await r.json();
        if (!active) return;
        if (!r.ok) {
          setMsg(j.error || "Erro ao carregar");
          return;
        }
        setLista(j.concursos || []);
      } catch {
        if (active) setMsg("Erro de conexão ao carregar concursos");
      }
    };
    void fetchDados();
    return () => {
      active = false;
    };
  }, []);

  async function save() {
    try {
      const r = await fetch("/api/admin/concursos", {
        method: form.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const j = await r.json();
      if (!r.ok) {
        setMsg(j.error || "Erro ao salvar");
        return;
      }
      setMsg("Concurso salvo.");
      setForm(initialForm);
      await load();
    } catch {
      setMsg("Erro de conexão ao salvar concurso");
    }
  }

  async function saveCargo() {
    try {
      const r = await fetch("/api/admin/concursos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...cargo, action: "cargo" }),
      });
      const j = await r.json();
      if (!r.ok) {
        setMsg(j.error || "Erro ao salvar cargo");
        return;
      }
      setMsg("Cargo salvo.");
      setCargo(initialCargo);
      await load();
    } catch {
      setMsg("Erro de conexão ao salvar cargo");
    }
  }

  const c = "w-full border rounded-lg p-2 bg-transparent";

  return (
    <div className="max-w-5xl mx-auto space-y-5">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-black">Admin · Concursos</h1>
          <p className="text-sm text-slate-500">
            Cadastre e corrija os dados oficiais dos concursos.
          </p>
        </div>
        <Link className="text-blue-600" href="/admin/editais">
          Gerenciar editais
        </Link>
      </div>

      {msg && <div className="border rounded-lg p-3">{msg}</div>}

      <div className="grid md:grid-cols-2 gap-2 border rounded-xl p-4">
        <input
          className={c}
          placeholder="Nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />
        <input
          className={c}
          placeholder="Órgão"
          value={form.orgao}
          onChange={(e) => setForm({ ...form, orgao: e.target.value })}
        />
        <input
          className={c}
          placeholder="UF"
          value={form.uf || ""}
          onChange={(e) => setForm({ ...form, uf: e.target.value.toUpperCase() })}
        />
        <select
          className={c}
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="previsto">Previsto</option>
          <option value="publicado">Publicado</option>
          <option value="encerrado">Encerrado</option>
        </select>
        <input
          className={c + " md:col-span-2"}
          placeholder="Fonte oficial"
          value={form.fonte_oficial_url || ""}
          onChange={(e) =>
            setForm({ ...form, fonte_oficial_url: e.target.value })
          }
        />
        <button
          className="bg-blue-600 text-white rounded-lg p-2 md:col-span-2"
          onClick={save}
        >
          Salvar concurso
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-2 border rounded-xl p-4">
        <select
          className={c}
          value={cargo.concurso_id}
          onChange={(e) => setCargo({ ...cargo, concurso_id: e.target.value })}
        >
          <option value="">Concurso do cargo</option>
          {lista.map((x) => (
            <option key={x.id} value={x.id}>
              {x.nome}
            </option>
          ))}
        </select>
        <input
          className={c}
          placeholder="Nome do cargo"
          value={cargo.nome}
          onChange={(e) => setCargo({ ...cargo, nome: e.target.value })}
        />
        <select
          className={c}
          value={cargo.escolaridade}
          onChange={(e) =>
            setCargo({ ...cargo, escolaridade: e.target.value })
          }
        >
          <option value="superior">Superior</option>
          <option value="medio">Médio</option>
          <option value="fundamental">Fundamental</option>
        </select>
        <input
          className={c}
          type="number"
          placeholder="Vagas"
          value={cargo.vagas}
          onChange={(e) => setCargo({ ...cargo, vagas: e.target.value })}
        />
        <input
          className={c}
          type="number"
          step="0.01"
          placeholder="Salário"
          value={cargo.salario}
          onChange={(e) => setCargo({ ...cargo, salario: e.target.value })}
        />
        <button
          className="bg-slate-900 text-white rounded-lg p-2"
          onClick={saveCargo}
        >
          Adicionar cargo
        </button>
      </div>

      <div className="space-y-2">
        {lista.map((x) => (
          <button
            key={x.id}
            onClick={() =>
              setForm({
                id: x.id,
                nome: x.nome,
                orgao: x.orgao,
                esfera: x.esfera,
                uf: x.uf || "GO",
                status: x.status,
                fonte_oficial_url: x.fonte_oficial_url || "",
              })
            }
            className="w-full text-left border rounded-xl p-3"
          >
            <b>{x.nome}</b>
            <span className="block text-xs text-slate-500">
              {x.orgao} · {x.uf || "-"} · {x.status} ·{" "}
              {x.concurso_cargos?.length || 0} cargo(s)
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
