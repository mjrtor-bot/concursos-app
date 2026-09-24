"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataService } from "@/services/dataService";
import { useConcurso } from "@/contexts/ConcursoContext";
import { Concurso, ConcursoStatus } from "@/types";
import {
  GraduationCap,
  Building2,
  Calendar,
  Award,
  Search,
  Check,
  ArrowRight,
  ExternalLink,
  Users,
  FileText,
} from "lucide-react";

export default function ConcursosPage() {
  const { concursoAtivo, selecionarConcursoAtivo } = useConcurso();
  const [busca, setBusca] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("todos");
  const [nivelFilter, setNivelFilter] = useState<string>("todos");

  const todosConcursos = DataService.getConcursos();

  const concursosFiltrados = todosConcursos.filter((c) => {
    const matchesBusca =
      c.nome.toLowerCase().includes(busca.toLowerCase()) ||
      c.orgao.toLowerCase().includes(busca.toLowerCase()) ||
      c.sigla.toLowerCase().includes(busca.toLowerCase()) ||
      c.banca.toLowerCase().includes(busca.toLowerCase());

    const matchesStatus =
      statusFilter === "todos" ? true : c.status === statusFilter;

    const matchesNivel =
      nivelFilter === "todos" ? true : c.nivel === nivelFilter;

    return matchesBusca && matchesStatus && matchesNivel;
  });

  const getStatusBadge = (status: ConcursoStatus) => {
    switch (status) {
      case "aberto":
        return <Badge variant="success">Edital Aberto</Badge>;
      case "previsto":
        return <Badge variant="warning">Previsto / Autorizado</Badge>;
      case "em_andamento":
        return <Badge variant="primary">Em Andamento</Badge>;
      case "encerrado":
        return <Badge variant="secondary">Encerrado</Badge>;
    }
  };

  return (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Concursos & Editais
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Explore os principais concursos públicos federais, estaduais e municipais do Brasil
            </p>
          </div>
        </div>

        {/* Filters bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por órgão, sigla, banca ou cargo..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
            >
              <option value="todos">Todos os Status</option>
              <option value="aberto">Edital Aberto</option>
              <option value="previsto">Previsto</option>
              <option value="em_andamento">Em Andamento</option>
            </select>

            <select
              value={nivelFilter}
              onChange={(e) => setNivelFilter(e.target.value)}
              className="px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
            >
              <option value="todos">Todos os Níveis</option>
              <option value="superior">Nível Superior</option>
              <option value="medio">Nível Médio / Técnico</option>
              <option value="fundamental">Nível Fundamental</option>
            </select>
          </div>
        </div>

        {/* Concursos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {concursosFiltrados.map((concurso) => {
            const isAlvo = concursoAtivo?.id === concurso.id;
            const cargos = DataService.getCargos(concurso.id);

            return (
              <Card
                key={concurso.id}
                hover
                className={`flex flex-col justify-between overflow-hidden transition-all ${
                  isAlvo
                    ? "border-blue-500 dark:border-blue-500 ring-2 ring-blue-500/20 shadow-md"
                    : ""
                }`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-extrabold text-base text-blue-600 dark:text-blue-400">
                          {concurso.sigla}
                        </span>
                        {getStatusBadge(concurso.status)}
                        <Badge variant="outline" size="sm">
                          {concurso.banca}
                        </Badge>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                        {concurso.nome}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        {concurso.orgao}
                      </p>
                    </div>

                    {isAlvo && (
                      <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 bg-blue-600 text-white rounded-full shadow-xs">
                        <Check className="w-3.5 h-3.5" />
                        Alvo Atual
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {concurso.descricao}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-xs border border-slate-100 dark:border-slate-800">
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">
                        Vagas Totais
                      </span>
                      <p className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-blue-500" />
                        {concurso.vagas_totais} vagas
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">
                        Remuneração Até
                      </span>
                      <p className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" />
                        R$ {concurso.salario_max.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">
                        Escolaridade
                      </span>
                      <p className="font-medium text-slate-700 dark:text-slate-300 capitalize">
                        {concurso.nivel === "medio" ? "Nível Médio" : "Nível Superior"}
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">
                        Data da Prova
                      </span>
                      <p className="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {concurso.data_prova
                          ? new Date(concurso.data_prova).toLocaleDateString("pt-BR")
                          : "A definir"}
                      </p>
                    </div>
                  </div>

                  {/* Cargos preview pills */}
                  {cargos.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-semibold text-slate-500">
                        Cargos Disponíveis ({cargos.length}):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cargos.slice(0, 3).map((cargo) => (
                          <span
                            key={cargo.id}
                            className="text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200/50 dark:border-slate-700/50"
                          >
                            {cargo.nome}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => selecionarConcursoAtivo(concurso.id)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all ${
                        isAlvo
                          ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800"
                          : "hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {isAlvo ? "Alvo Atual" : "Definir como Alvo"}
                    </button>

                    <Link href={`/concursos/${concurso.id}`}>
                      <Button
                        size="sm"
                        variant="primary"
                        rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Ver Detalhes
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
  );
}
