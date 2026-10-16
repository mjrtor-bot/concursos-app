// Extrator determinístico para anexos de conteúdo programático organizados por grupo de
// escolaridade e por cargo, como o "Anexo IV – Conteúdo Programático" do edital da SME de
// Aparecida de Goiânia/GO:
//   ANEXO IV – CONTEÚDO PROGRAMÁTICO
//   CARGOS COM ENSINO MÉDIO/TÉCNICO
//   CONHECIMENTOS GERAIS
//   LÍNGUA PORTUGUESA
//   1. Características ... 2. Compreensão ... (itens corridos)
//   CONHECIMENTOS ESPECÍFICOS
//   AGENTE EDUCATIVO
//   CONHECIMENTOS NA ÁREA DE ATUAÇÃO: 1. Ética ... 2. Lei de Diretrizes ...
// Cada cargo recebe as disciplinas gerais do seu grupo mais as suas próprias específicas.
// O resultado é sempre um rascunho para revisão humana.

import { parseItensSequenciais, parseItensSemNumeracao } from "./extrairAnexoSequencial";
import type { AssuntoExtraido, DisciplinaExtraida } from "./extrairAnexoSequencial";

export type CargoExtraido = { nome: string; grupo: string; disciplinas: DisciplinaExtraida[] };

const TITULO_ANEXO = /^ANEXO\s+[IVX]+\s*[–—-]\s*.*CONTE[ÚU]DOS?\s+PROGRAM[ÁA]TIC/;
const OUTRO_ANEXO = /^ANEXO\s+[IVX]+\s*[–—-]/;
const GRUPO = /^CARGOS?\s+COM\s+\S/;
const SECAO_GERAIS = /^CONHECIMENTOS\s+(GERAIS|B[ÁA]SICOS)$/;
const SECAO_ESPECIFICOS = /^CONHECIMENTOS\s+ESPEC[ÍI]FICOS$/;
const RODAPE = /^(_{5,}|Anexo [IVX]+ [–-] .*P[áa]gina \d+ de \d+\s*)$/i;
const SO_NUMERO = /^\d{1,3}$/;
const MINUSCULAS = new Set(["de", "da", "do", "das", "dos", "e", "a", "o", "as", "os", "na", "no", "nas", "nos", "em", "para", "com", "ao", "aos", "ou"]);

function limpar(t: string): string {
  return t.replace(/\s+/g, " ").replace(/\s+([,.;:)])/g, "$1").trim();
}

function capitalizar(p: string): string {
  return p ? p.charAt(0).toUpperCase() + p.slice(1).toLowerCase() : p;
}

function formatarToken(tok: string, i: number): string {
  const minusculo = tok.toLowerCase();
  if (i > 0 && MINUSCULAS.has(minusculo)) return minusculo;
  if (/^\(?[IVX]{1,4}\)?[,.]?$/.test(tok)) return tok;
  if (/^\(?[A-Z]{1,4}-[IVX]{1,4}\)?[,.]?$/.test(tok)) return tok;
  if (tok.includes("/")) {
    return tok
      .split("/")
      .map((parte) => (parte.length <= 2 ? parte.toUpperCase() : capitalizar(parte)))
      .join("/");
  }
  return tok.split("-").map(capitalizar).join("-");
}

// "LÍNGUA PORTUGUESA" -> "Língua Portuguesa"; preserva numerais romanos e siglas como "PE-I".
export function formatarNomeAnexo(s: string): string {
  return limpar(s)
    .split(" ")
    .map((tok, i) => formatarToken(tok, i))
    .join(" ");
}

function ehTitulo(l: string): boolean {
  if (l.length < 3 || l.length > 160) return false;
  if (/[a-zà-ÿ]/.test(l)) return false;
  if (!/[A-ZÀ-Ý]{3}/.test(l)) return false;
  if (/^\d+\s*\./.test(l)) return false;
  if (/:\s*$/.test(l)) return false;
  return true;
}

function itens(texto: string): AssuntoExtraido[] {
  let assuntos = parseItensSequenciais(texto);
  if (!assuntos.length) assuntos = parseItensSemNumeracao(texto);
  return assuntos;
}

function linhasDoAnexo(texto: string): string[] {
  const todas = texto
    .replace(/\r/g, "")
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter((l) => l && !SO_NUMERO.test(l) && !RODAPE.test(l));
  let inicio = -1;
  for (let i = 0; i < todas.length; i++) {
    if (TITULO_ANEXO.test(todas[i]) && todas.slice(i + 1, i + 5).some((l) => GRUPO.test(l))) {
      inicio = i;
      break;
    }
  }
  if (inicio < 0) return [];
  let fim = todas.length;
  for (let i = inicio + 1; i < todas.length; i++) {
    if (OUTRO_ANEXO.test(todas[i])) {
      fim = i;
      break;
    }
  }
  return todas.slice(inicio + 1, fim);
}

type GrupoLido = {
  nome: string;
  gerais: DisciplinaExtraida[];
  cargos: { nome: string; disciplinas: DisciplinaExtraida[] }[];
};

function maisCompleta(a: DisciplinaExtraida[], b: DisciplinaExtraida[]): boolean {
  const total = (ds: DisciplinaExtraida[]) => ds.reduce((n, d) => n + d.assuntos.reduce((m, x) => m + 1 + x.topicos.length, 0), 0);
  return total(b) > total(a);
}

export function extrairAnexoPorCargo(texto: string): CargoExtraido[] {
  const linhas = linhasDoAnexo(texto);
  if (!linhas.length) return [];

  const grupos: GrupoLido[] = [];
  let grupo: GrupoLido | null = null;
  let modo: "gerais" | "especificos" | null = null;
  let titulo: string[] = [];
  let corpo: string[] = [];

  const fechar = () => {
    if (grupo && modo && titulo.length && corpo.length) {
      const nomeTitulo = formatarNomeAnexo(titulo.join(" "));
      const corpoTexto = corpo.join(" ");
      if (modo === "gerais") {
        const assuntos = itens(corpoTexto);
        if (assuntos.length) grupo.gerais.push({ nome: nomeTitulo, assuntos });
      } else {
        const m = /^([A-ZÀ-Ý][A-ZÀ-Ý\s,/()-]{3,120}?)\s*:\s*(.*)$/.exec(corpoTexto);
        const nomeDisciplina = m ? formatarNomeAnexo(m[1]) : "Conhecimentos Específicos";
        const assuntos = itens(m ? m[2] : corpoTexto);
        if (assuntos.length) {
          const existente = grupo.cargos.find((c) => c.nome === nomeTitulo);
          const nova: DisciplinaExtraida[] = [{ nome: nomeDisciplina, assuntos }];
          if (!existente) grupo.cargos.push({ nome: nomeTitulo, disciplinas: nova });
          else if (maisCompleta(existente.disciplinas, nova)) existente.disciplinas = nova;
        }
      }
    }
    titulo = [];
    corpo = [];
  };

  for (const l of linhas) {
    if (GRUPO.test(l)) {
      fechar();
      grupo = { nome: formatarNomeAnexo(l), gerais: [], cargos: [] };
      grupos.push(grupo);
      modo = null;
      continue;
    }
    if (!grupo) continue;
    if (SECAO_GERAIS.test(l)) {
      fechar();
      modo = "gerais";
      continue;
    }
    if (SECAO_ESPECIFICOS.test(l)) {
      fechar();
      modo = "especificos";
      continue;
    }
    if (!modo) continue;
    if (ehTitulo(l)) {
      if (corpo.length === 0) titulo.push(l);
      else {
        fechar();
        titulo = [l];
      }
      continue;
    }
    if (!titulo.length) continue;
    corpo.push(l);
  }
  fechar();

  const cargos: CargoExtraido[] = [];
  for (const g of grupos) {
    for (const c of g.cargos) {
      cargos.push({ nome: c.nome, grupo: g.nome, disciplinas: [...g.gerais, ...c.disciplinas] });
    }
  }
  return cargos;
}
