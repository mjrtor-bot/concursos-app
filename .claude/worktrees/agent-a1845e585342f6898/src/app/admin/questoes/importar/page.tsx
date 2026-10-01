"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  UploadCloud,
  FileSpreadsheet,
  FileCode,
  CheckCircle2,
  AlertCircle,
  Download,
  Database,
  RefreshCw,
  Info,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImportReport, ImportOptions, Questao } from "@/types";
import { processarImportacaoQuestoes } from "@/services/questionImporter";

// Persiste questões via API server-side (Supabase quando configurado, mock fallback)
async function importarViaAPI(
  conteudo: string,
  formato: "csv" | "json",
  options: ImportOptions
): Promise<{ success: boolean; report?: ImportReport; questoesValidadas?: Questao[]; error?: string; details?: string[] }> {
  const res = await fetch("/api/admin/questoes/import", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ conteudo, formato, options }),
  });
  return res.json();
}

export default function AdminImportarQuestoesPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formato, setFormato] = useState<"csv" | "json">("csv");
  const [politicaDuplicatas, setPoliticaDuplicatas] = useState<"ignorar" | "atualizar" | "rejeitar_tudo">("ignorar");
  const [nomeArquivo, setNomeArquivo] = useState<string | null>(null);
  const [conteudoArquivo, setConteudoArquivo] = useState<string>("");
  const [processando, setProcessando] = useState(false);
  const [report, setReport] = useState<ImportReport | null>(null);
  const [questoesValidadas, setQuestoesValidadas] = useState<Questao[]>([]);
  const [erroImportacao, setErroImportacao] = useState<string | null>(null);
  const [importadoComSucesso, setImportadoComSucesso] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setNomeArquivo(file.name);
    setReport(null);
    setQuestoesValidadas([]);
    setErroImportacao(null);
    setImportadoComSucesso(false);

    const ext = file.name.toLowerCase().endsWith(".json") ? "json" : "csv";
    setFormato(ext);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setConteudoArquivo(text);
      analisarArquivo(text, ext, politicaDuplicatas);
    };
    reader.onerror = () => {
      setErroImportacao("Não foi possível ler o arquivo selecionado.");
    };
    reader.readAsText(file, "UTF-8");
  };

  const analisarArquivo = (
    conteudo: string,
    fmt: "csv" | "json",
    politica: "ignorar" | "atualizar" | "rejeitar_tudo"
  ) => {
    setProcessando(true);
    setErroImportacao(null);

    try {
      const options: ImportOptions = {
        politicaDuplicatas: politica,
        revisadaPorPadrao: true,
      };

      // Pré-validação local (dry-run) — não persiste nada no banco
      const { questoesValidadas: validadas, report: relatorio } = processarImportacaoQuestoes(
        conteudo,
        fmt,
        [], // sem dados existentes no pré-relatório: mostra o que seria inserido
        options
      );

      setReport(relatorio);
      setQuestoesValidadas(validadas);
    } catch (err: any) {
      setErroImportacao(err.message || "Erro ao processar o conteúdo do arquivo.");
    } finally {
      setProcessando(false);
    }
  };

  const handleConfirmarImportacao = async () => {
    if (!questoesValidadas || questoesValidadas.length === 0) {
      setErroImportacao("Não há questões válidas para importar.");
      return;
    }

    setProcessando(true);
    setErroImportacao(null);

    try {
      const options: ImportOptions = {
        politicaDuplicatas: politicaDuplicatas,
        revisadaPorPadrao: true,
      };

      const resultado = await importarViaAPI(conteudoArquivo, formato, options);

      if (resultado.success) {
        setImportadoComSucesso(true);
        setTimeout(() => {
          router.push("/admin/questoes");
        }, 2000);
      } else {
        const detalhe = resultado.details?.join("; ") ?? "";
        setErroImportacao(
          (resultado.error || "Erro ao persistir as questões.") + (detalhe ? ` Detalhes: ${detalhe}` : "")
        );
        setProcessando(false);
      }
    } catch (err: any) {
      setErroImportacao(err.message || "Erro ao persistir as questões no catálogo.");
      setProcessando(false);
    }
  };

  // Modelos de Download
  const downloadExemploCSV = () => {
    const csvContent =
      'disciplina_id,assunto_id,banca,ano,orgao,cargo,tipo,dificuldade,enunciado,explicacao,is_autoral_ia,alt_A,alt_B,alt_C,alt_D,alt_E,gabarito\n' +
      'disc_dir_const,ass_dc_dir_fund,FGV,2025,TJ-SP,Escrevente Técnico Judiciário,multipla_escolha,medio,"Conforme a Constituição Federal de 1988, todos são iguais perante a lei, sem distinção de qualquer natureza. A criação de associações independe de autorização?","Sim, a criação de associações e, na forma da lei, a de cooperativas independem de autorização, sendo vedada a interferência estatal em seu funcionamento (Art. 5º, XVIII).",false,"Depende de autorização do Poder Executivo","Independe de autorização e é vedada a interferência estatal","Depende de autorização do Poder Judiciário","É permitida apenas mediante alvará municipal","É vedada em qualquer hipótese",B\n' +
      'disc_dir_adm,ass_da_principios,Cebraspe (CESPE),2024,PF,Agente de Polícia,certo_errado,facil,"O princípio da impessoalidade veda a promoção pessoal de autoridades ou servidores públicos sobre suas realizações administrativas.","Correto. Conforme art. 37, § 1º da CF/88, a publicidade deve ter caráter educativo, informativo ou de orientação social, sem nomes ou símbolos que caracterizem promoção pessoal.",false,"Certo","Errado","","","",A\n';

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "modelo_importacao_concursos.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadExemploJSON = () => {
    const jsonContent = JSON.stringify(
      [
        {
          disciplina_id: "disc_dir_const",
          assunto_id: "ass_dc_dir_fund",
          banca: "FGV",
          ano: 2025,
          orgao: "TJ-SP",
          cargo: "Escrevente Técnico Judiciário",
          tipo: "multipla_escolha",
          dificuldade: "medio",
          enunciado:
            "Conforme a Constituição Federal de 1988, todos são iguais perante a lei, sem distinção de qualquer natureza. A criação de associações independe de autorização?",
          explicacao:
            "Sim, a criação de associações e, na forma da lei, a de cooperativas independem de autorização, sendo vedada a interferência estatal em seu funcionamento (Art. 5º, XVIII).",
          is_autoral_ia: false,
          alternativas: [
            { letra: "A", texto: "Depende de autorização do Poder Executivo", correta: false, ordem: 1 },
            { letra: "B", texto: "Independe de autorização e é vedada a interferência estatal", correta: true, ordem: 2 },
            { letra: "C", texto: "Depende de autorização do Poder Judiciário", correta: false, ordem: 3 },
            { letra: "D", texto: "É permitida apenas mediante alvará municipal", correta: false, ordem: 4 },
            { letra: "E", texto: "É vedada em qualquer hipótese", correta: false, ordem: 5 },
          ],
        },
      ],
      null,
      2
    );

    const blob = new Blob([jsonContent], { type: "application/json;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "modelo_importacao_concursos.json");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <Link
            href="/admin/questoes"
            className="text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1 mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Voltar para Gestão do Catálogo
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight flex items-center gap-2">
            <UploadCloud className="w-6 h-6 text-blue-600" />
            Importação em Lote de Questões (CSV / JSON)
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={downloadExemploCSV} className="text-xs flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5" /> Modelo CSV
          </Button>
          <Button variant="outline" size="sm" onClick={downloadExemploJSON} className="text-xs flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5" /> Modelo JSON
          </Button>
        </div>
      </div>

      {importadoComSucesso && (
        <div className="p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 rounded-2xl flex items-center gap-3 text-emerald-800 dark:text-emerald-200 font-bold">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
          {questoesValidadas.length} questões importadas com sucesso para o banco de dados! Redirecionando...
        </div>
      )}

      {erroImportacao && (
        <div className="p-4 bg-rose-50 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800 rounded-2xl flex items-center gap-3 text-rose-800 dark:text-rose-200 text-xs font-medium">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          {erroImportacao}
        </div>
      )}

      {/* Diretrizes e Conformidade Ética */}
      <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl flex items-start gap-3 text-xs text-blue-900 dark:text-blue-200">
        <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold block mb-0.5">Diretriz de Conformidade e Autoria</strong>
          Certifique-se de que os arquivos de importação provenham de <strong>provas oficiais anteriores de domínio público</strong> ou sejam <strong>questões autorais próprias</strong>. A raspagem automatizada em bancos de dados proprietários ou plataformas privadas é estritamente proibida por diretrizes éticas e de integridade do projeto.
        </div>
      </div>

      {/* Seção 1: Configuração da Importação & Upload */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-5 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-blue-600" />
            1. Carregamento do Arquivo
          </h3>

          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-2xl p-8 text-center cursor-pointer transition-colors bg-slate-50/50 dark:bg-slate-800/30 group"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv,.json"
              onChange={handleFileChange}
              className="hidden"
            />
            <UploadCloud className="w-10 h-10 text-slate-400 group-hover:text-blue-600 mx-auto mb-3 transition-colors" />
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
              {nomeArquivo ? nomeArquivo : "Clique ou arraste um arquivo CSV ou JSON aqui"}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Formatos aceitos: <strong>.csv</strong> (delimitado por vírgula ou ponto-e-vírgula) e <strong>.json</strong> (array de objetos)
            </p>
          </div>

          {nomeArquivo && (
            <div className="flex items-center justify-between text-xs bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl">
              <span className="text-slate-700 dark:text-slate-300 font-medium">Arquivo carregado: <strong>{nomeArquivo}</strong> ({formato.toUpperCase()})</span>
              <button
                onClick={() => {
                  if (conteudoArquivo) analisarArquivo(conteudoArquivo, formato, politicaDuplicatas);
                }}
                className="text-blue-600 hover:underline flex items-center gap-1 font-semibold"
              >
                <RefreshCw className="w-3 h-3" /> Reanalisar
              </button>
            </div>
          )}
        </div>

        {/* Políticas de Duplicatas */}
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            2. Política de Duplicatas
          </h3>

          <p className="text-xs text-slate-500">
            O motor de deduplicação calcula o hash SHA-256 canônico de cada questão. O que fazer caso ela já exista no banco?
          </p>

          <div className="space-y-2 text-xs">
            <label
              className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                politicaDuplicatas === "ignorar"
                  ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-100 font-medium"
                  : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              <input
                type="radio"
                name="politica"
                value="ignorar"
                checked={politicaDuplicatas === "ignorar"}
                onChange={() => {
                  setPoliticaDuplicatas("ignorar");
                  if (conteudoArquivo) analisarArquivo(conteudoArquivo, formato, "ignorar");
                }}
                className="mt-0.5 text-blue-600"
              />
              <div>
                <span className="font-bold block">Ignorar Duplicatas (Padrão)</span>
                <span className="text-[11px] text-slate-500 block">Mantém a versão já cadastrada e importa apenas novas questões.</span>
              </div>
            </label>

            <label
              className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                politicaDuplicatas === "atualizar"
                  ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-100 font-medium"
                  : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              <input
                type="radio"
                name="politica"
                value="atualizar"
                checked={politicaDuplicatas === "atualizar"}
                onChange={() => {
                  setPoliticaDuplicatas("atualizar");
                  if (conteudoArquivo) analisarArquivo(conteudoArquivo, formato, "atualizar");
                }}
                className="mt-0.5 text-blue-600"
              />
              <div>
                <span className="font-bold block">Atualizar Existentes</span>
                <span className="text-[11px] text-slate-500 block">Sobrescreve metadados preservando o ID e o histórico dos alunos.</span>
              </div>
            </label>

            <label
              className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                politicaDuplicatas === "rejeitar_tudo"
                  ? "border-rose-500 bg-rose-50/50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-100 font-medium"
                  : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              <input
                type="radio"
                name="politica"
                value="rejeitar_tudo"
                checked={politicaDuplicatas === "rejeitar_tudo"}
                onChange={() => {
                  setPoliticaDuplicatas("rejeitar_tudo");
                  if (conteudoArquivo) analisarArquivo(conteudoArquivo, formato, "rejeitar_tudo");
                }}
                className="mt-0.5 text-rose-600"
              />
              <div>
                <span className="font-bold block">Abortar se houver duplicata</span>
                <span className="text-[11px] text-slate-500 block">Garante importação atômica 100% inédita.</span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Seção 2: Relatório de Pré-Validação */}
      {report && (
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              3. Relatório de Pré-Validação dos Dados
            </h3>

            <div className="flex items-center gap-2 text-xs">
              <span className={`px-2.5 py-1 rounded-full font-bold ${
                report.sucesso
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300"
                  : "bg-rose-100 text-rose-800 dark:bg-rose-950/50 dark:text-rose-300"
              }`}>
                {report.sucesso ? "Pronto para Importar" : "Contém Erros Críticos"}
              </span>
            </div>
          </div>

          {/* Métricas do Report */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-xs text-slate-500 block">Total de Linhas</span>
              <span className="text-lg font-extrabold text-slate-900 dark:text-slate-100">{report.totalLinhas}</span>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <span className="text-xs text-emerald-600 dark:text-emerald-400 block">Válidas para Inclusão</span>
              <span className="text-lg font-extrabold text-emerald-700 dark:text-emerald-300">{report.inseridas}</span>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
              <span className="text-xs text-amber-600 dark:text-amber-400 block">Duplicatas Detectadas</span>
              <span className="text-lg font-extrabold text-amber-700 dark:text-amber-300">{report.duplicadasIgnoradas}</span>
            </div>
            <div className="p-3 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-800">
              <span className="text-xs text-rose-600 dark:text-rose-400 block">Linhas Inválidas</span>
              <span className="text-lg font-extrabold text-rose-700 dark:text-rose-300">{report.invalidas}</span>
            </div>
          </div>

          {/* Tabela de Erros se houver */}
          {report.erros && report.erros.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Erros de Validação por Linha ({report.erros.length})
              </h4>
              <div className="max-h-48 overflow-y-auto border border-rose-200 dark:border-rose-900/40 rounded-xl bg-rose-50/20 dark:bg-rose-950/10 text-xs">
                <table className="w-full text-left">
                  <thead className="bg-rose-100/50 dark:bg-rose-900/30 text-rose-900 dark:text-rose-200 font-bold sticky top-0">
                    <tr>
                      <th className="p-2 w-16">Linha</th>
                      <th className="p-2 w-32">Campo</th>
                      <th className="p-2">Motivo do Erro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-rose-100 dark:divide-rose-900/20">
                    {report.erros.map((err, i) => (
                      <tr key={i} className="hover:bg-rose-100/30">
                        <td className="p-2 font-mono font-bold text-slate-700 dark:text-slate-300">{err.linha}</td>
                        <td className="p-2 text-slate-600 dark:text-slate-400">{err.campo || "-"}</td>
                        <td className="p-2 text-rose-700 dark:text-rose-300">{err.motivo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Botão de Confirmação */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <Link href="/admin/questoes">
              <Button variant="outline">Cancelar</Button>
            </Link>

            <Button
              onClick={handleConfirmarImportacao}
              disabled={processando || questoesValidadas.length === 0 || !report.sucesso}
              className="flex items-center gap-2 shadow-md shadow-blue-500/20"
            >
              <Database className="w-4 h-4" />
              {processando ? "Importando Questões..." : `Confirmar e Ingerir ${questoesValidadas.length} Questões`}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
