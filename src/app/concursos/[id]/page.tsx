"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataService } from "@/services/dataService";
import { useConcurso } from "@/contexts/ConcursoContext";
import {
  Building2,
  Calendar,
  Award,
  Users,
  FileText,
  ExternalLink,
  Check,
  ArrowLeft,
  Play,
  Clock,
  BookOpen,
  Briefcase,
  ChevronRight,
} from "lucide-react";

export default function ConcursoDetalhePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { concursoAtivo, selecionarConcursoAtivo, selecionarCargoAtivo, cargoAtivo } =
    useConcurso();

  const concurso = DataService.getConcursoById(id);
  if (!concurso) {
    notFound();
  }

  const isAlvo = concursoAtivo?.id === concurso.id;
  const cargos = DataService.getCargos(concurso.id);
  const editais = DataService.getEditais(concurso.id);
  const disciplinas = DataService.getDisciplinas();

  return (
    <div className="space-y-6">
        {/* Back Link */}
        <Link
          href="/concursos"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Lista de Concursos
        </Link>

        {/* Hero Card */}
        <Card className="overflow-hidden border-blue-200/80 dark:border-blue-900/60 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 dark:from-slate-900 dark:to-slate-900">
          <CardContent className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xl font-extrabold text-blue-600 dark:text-blue-400">
                    {concurso.sigla}
                  </span>
                  <Badge variant="success" size="sm">
                    {concurso.status.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" size="sm">
                    Banca: {concurso.banca}
                  </Badge>
                  <Badge variant="secondary" size="sm">
                    Ano {concurso.ano}
                  </Badge>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                  {concurso.nome}
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  {concurso.orgao} • Esfera {concurso.esfera.toUpperCase()}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button
                  onClick={() => selecionarConcursoAtivo(concurso.id)}
                  variant={isAlvo ? "secondary" : "primary"}
                  size="md"
                  leftIcon={isAlvo ? <Check className="w-4 h-4 text-emerald-500" /> : undefined}
                >
                  {isAlvo ? "Concurso Alvo Atual" : "Tornar meu Concurso Alvo"}
                </Button>

                <Link href={`/questoes?concurso_id=${concurso.id}`}>
                  <Button
                    size="md"
                    variant="success"
                    leftIcon={<Play className="w-4 h-4 fill-white" />}
                  >
                    Treinar Questões Deste Concurso
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/70 dark:border-slate-700/70">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">
                  Vagas Totais
                </span>
                <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-500" />
                  {concurso.vagas_totais} vagas
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">
                  Remuneração Máxima
                </span>
                <p className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  R$ {concurso.salario_max.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">
                  Data da Prova
                </span>
                <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  {concurso.data_prova
                    ? new Date(concurso.data_prova).toLocaleDateString("pt-BR")
                    : "A definir"}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">
                  Taxa de Inscrição
                </span>
                <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                  {concurso.taxa_inscricao
                    ? `R$ ${concurso.taxa_inscricao.toFixed(2)}`
                    : "Isento / A definir"}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {concurso.descricao}
            </p>
          </CardContent>
        </Card>

        {/* Cargos e Vagas */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <div>
                <CardTitle>Cargos, Vagas e Remunerações</CardTitle>
                <p className="text-xs text-slate-500">
                  Selecione o cargo específico que você almeja
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {cargos.length === 0 ? (
              <p className="text-xs text-slate-500 py-4 text-center">
                Nenhum cargo cadastrado no momento.
              </p>
            ) : (
              cargos.map((cargo) => {
                const isSelectedCargo = cargoAtivo?.id === cargo.id;
                return (
                  <div
                    key={cargo.id}
                    className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isSelectedCargo
                        ? "bg-blue-50/50 dark:bg-blue-950/20 border-blue-400 dark:border-blue-600"
                        : "bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-800"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                          {cargo.nome}
                        </h4>
                        <Badge variant="outline" size="sm">
                          {cargo.escolaridade === "medio" ? "Nível Médio" : "Nível Superior"}
                        </Badge>
                      </div>
                      {cargo.requisitos && (
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          <strong>Requisitos:</strong> {cargo.requisitos}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-300 pt-1">
                        <span>
                          Vagas imediatas: <strong>{cargo.vagas}</strong>
                        </span>
                        {cargo.vagas_cr && (
                          <span>
                            CR: <strong>{cargo.vagas_cr}</strong>
                          </span>
                        )}
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          Salário: R$ {cargo.salario.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <Button
                        size="sm"
                        variant={isSelectedCargo ? "secondary" : "outline"}
                        onClick={() => selecionarCargoAtivo(cargo.id)}
                      >
                        {isSelectedCargo ? "Cargo Selecionado ✓" : "Selecionar Cargo"}
                      </Button>
                    </div>
                  </div>
                );
              })
            )}
          </CardContent>
        </Card>

        {/* Editais e Documentos Oficiais */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              <div>
                <CardTitle>Editais e Publicações Oficiais</CardTitle>
                <p className="text-xs text-slate-500">
                  Consulte os editais de abertura e eventuais retificações
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-2.5">
            {editais.length === 0 ? (
              <p className="text-xs text-slate-500 py-4 text-center">
                Edital ainda não publicado oficialmente.
              </p>
            ) : (
              editais.map((edital) => (
                <div
                  key={edital.id}
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="space-y-0.5">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {edital.titulo}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Publicado em: {new Date(edital.publicado_em).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                  <a
                    href={edital.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg transition-colors shrink-0"
                  >
                    <span>Abrir PDF</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Disciplinas Cobradas */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-600" />
              <div>
                <CardTitle>Conteúdo Programático & Disciplinas</CardTitle>
                <p className="text-xs text-slate-500">
                  Matérias fundamentais cobradas na prova
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {disciplinas.slice(0, 6).map((disc) => (
              <Link
                key={disc.id}
                href={`/disciplinas#${disc.slug}`}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors">
                    {disc.nome}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {disc.descricao}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
  );
}
