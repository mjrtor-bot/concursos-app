// Extrator determinístico para anexos com seções em algarismos romanos e alíneas, como o
// Anexo II do edital CFO PM/BM-BA 2025:
//   I. LÍNGUA PORTUGUESA
//   1. Leitura e interpretação de textos: 1.1 ... 2. Nomes e verbo. ...
//   VI. DIREITO
//   a) Direito Constitucional
//   Constituição da República Federativa do Brasil: 1. Dos princípios... 2.1 ...
// Recebe o texto de UM grupo de cargos já em ordem de leitura (colunas separadas).

import { parseItensSequenciais } from "./extrairAnexoSequencial";
import type { DisciplinaExtraida } from "./extrairAnexoSequencial";

const RUIDO = /(C[ÓO]PIA|Consulte informa[çc][ãa]o|dool\.egba)/i;
const SECAO = /^([IVX]{1,5})\.\s+([A-ZÀ-Ý][A-ZÀ-Ý\s,/-]{2,80})$/;
const ALINEA = /^([a-z])\)\s*(.*)$/;
const MINUSCULAS = new Set(["de", "da", "do", "das", "dos", "e", "a", "o"]);

function titulo(s: string): string {
  return s
    .toLowerCase()
    .split(/\s+/)
    .map((p, i) => (i > 0 && MINUSCULAS.has(p) ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join(" ");
}

export function extrairAnexoRomano(texto: string): DisciplinaExtraida[] {
  const brutas = texto.split(/\r?\n/).map((l) => l.replace(/\s+/g, " ").trim()).filter(Boolean);
  // Remove marca d'água e junta alínea solta ("c)") com a linha seguinte.
  const linhas: string[] = [];
  for (let i = 0; i < brutas.length; i++) {
    let l = brutas[i].replace(/c\)\s*C[ÓO]PIA/i, "c)");
    if (RUIDO.test(l) && !/^[a-z]\)/.test(l)) continue;
    l = l.replace(RUIDO, "").trim();
    if (!l) continue;
    if (/^[a-z]\)$/.test(l) && brutas[i + 1]) { l = `${l} ${brutas[i + 1]}`; i += 1; }
    linhas.push(l);
  }

  const encontradas: { nome: string; corpo: string[] }[] = [];
  let secao = "";
  let atual: { nome: string; corpo: string[] } | null = null;
  let secaoTemAlinea = false;

  const fechar = () => {
    if (atual && atual.corpo.length) encontradas.push(atual);
    atual = null;
  };

  for (const l of linhas) {
    const s = SECAO.exec(l);
    if (s) {
      fechar();
      secao = titulo(s[2]);
      secaoTemAlinea = false;
      atual = { nome: secao, corpo: [] };
      continue;
    }
    const a = ALINEA.exec(l);
    if (a && /^[A-ZÀ-Ý]/.test(a[2])) {
      fechar();
      secaoTemAlinea = true;
      const dois = a[2].split(/:\s*/, 2);
      const nomeSub = titulo(dois[0].trim()).replace(/\s*:$/, "");
      const resto = a[2].includes(":") ? a[2].slice(a[2].indexOf(":") + 1).trim() : "";
      const nome = nomeSub.toLowerCase().startsWith(secao.split(" ")[0].toLowerCase()) ? nomeSub : `${secao} — ${nomeSub}`;
      atual = { nome, corpo: resto ? [resto] : [] };
      continue;
    }
    if (atual) atual.corpo.push(l);
  }
  fechar();
  void secaoTemAlinea;

  // Se o PDF repete uma disciplina (texto cortado entre páginas), mantém a versão com mais itens.
  const porNome = new Map<string, DisciplinaExtraida>();
  const ordem: string[] = [];
  for (const e of encontradas) {
    const assuntos = parseItensSequenciais(e.corpo.join(" "));
    if (!assuntos.length) continue;
    const contar = (d: DisciplinaExtraida) => d.assuntos.reduce((n, x) => n + 1 + x.topicos.length, 0);
    const nova: DisciplinaExtraida = { nome: e.nome, assuntos };
    const antiga = porNome.get(e.nome);
    if (!antiga) { porNome.set(e.nome, nova); ordem.push(e.nome); }
    else if (contar(nova) > contar(antiga)) porNome.set(e.nome, nova);
  }
  return ordem.map((n) => porNome.get(n)!);
}
