// Extrator determinístico para anexos de conteúdo programático em prosa numerada, como o
// "Anexo II - Dos Conteúdos Programáticos" dos editais de Goiás:
//   Direito Penal
//   Conhecimentos específicos: 1. Da Aplicação... 2. Do Crime... 1.1. ... (itens corridos)
// Os marcadores são aceitos somente na ordem esperada (N. e N.M.), o que evita confundir
// números de leis e artigos ("Lei 7.960/89", "arts. 1º a 4º") com itens da lista.

export type AssuntoExtraido = { nome: string; topicos: string[] };
export type DisciplinaExtraida = { nome: string; assuntos: AssuntoExtraido[] };
export type SecaoExtraida = { secao: string; disciplinas: DisciplinaExtraida[] };

const RODAPE = /^(_{5,}|Anexo [IVX]+ [–-] .*P[áa]gina \d+ de \d+\s*)$/i;
const SECAO = /^CONHECIMENTOS\s+(GERAIS|ESPEC[ÍI]FICOS|B[ÁA]SICOS)\b.*$/;
const FIM_DISCIPLINA = /^Rela[çc][ãa]o da disciplina/i;
const INICIO_ESPECIFICOS = /^Conhecimentos espec[íi]ficos\s*:\s*(.*)$/i;
const INICIO_INLINE = /^(.{3,160}?)\s*:\s*(1\.\s.*)$/;

function limpar(t: string): string {
  return t.replace(/\s+/g, " ").replace(/\s+([,.;:)])/g, "$1").trim();
}

export function parseItensSequenciais(texto: string): AssuntoExtraido[] {
  const assuntos: AssuntoExtraido[] = [];
  let top = 0;
  let sub = 0;
  let alvo: "assunto" | "topico" | null = null;
  let acumulado = "";
  const fechar = () => {
    const t = limpar(acumulado);
    acumulado = "";
    if (!t || !alvo) return;
    if (alvo === "assunto") assuntos.push({ nome: t, topicos: [] });
    else if (assuntos.length) assuntos[assuntos.length - 1].topicos.push(t);
  };
  const achar = (s: string) => {
    const antes = "(^|[\\s).;])";
    const reTop = new RegExp(`${antes}${top + 1}\\.(?:\\s+(?=\\S)|(?=[A-ZÁÉÍÓÚÂÊÔÃÕÇ]))`);
    const reSub = new RegExp(`${antes}${top}\\.${sub + 1}\\.?\\s+(?=\\S)`);
    const cand: { idx: number; len: number; tipo: "assunto" | "topico" }[] = [];
    const a = reTop.exec(s);
    if (a) cand.push({ idx: a.index + a[1].length, len: a[0].length - a[1].length, tipo: "assunto" });
    if (top > 0) {
      const b = reSub.exec(s);
      if (b) cand.push({ idx: b.index + b[1].length, len: b[0].length - b[1].length, tipo: "topico" });
    }
    cand.sort((x, y) => x.idx - y.idx);
    return cand[0] ?? null;
  };
  let resto = texto.replace(/\s+/g, " ").trim();
  for (let guarda = 0; guarda < 5000 && resto; guarda++) {
    const m = achar(resto);
    if (!m) break;
    const anterior = resto.slice(0, m.idx).trim();
    if (anterior) acumulado += (acumulado ? " " : "") + anterior;
    fechar();
    if (m.tipo === "assunto") { top += 1; sub = 0; } else { sub += 1; }
    alvo = m.tipo;
    resto = resto.slice(m.idx + m.len);
  }
  if (resto) acumulado += (acumulado ? " " : "") + resto;
  fechar();
  return assuntos;
}

// Fallback para listas sem numeração (itens separados por ponto final). Usado só quando
// não há nenhum marcador "1." no corpo; o resultado deve ir para revisão humana.
export function parseItensSemNumeracao(texto: string): AssuntoExtraido[] {
  const limpo = texto.replace(/\s+/g, " ").trim();
  if (!limpo || limpo.length > 3000) return [];
  const partes = limpo
    .replace(/([a-zà-ÿ0-9)])\.\s+(?=[A-ZÁÉÍÓÚÂÊÔÃÕÇ])/g, "$1.\u0001")
    .split("\u0001")
    .map((p) => limpar(p).replace(/\.$/, "") + ".")
    .filter((p) => p.length > 3);
  return partes.length >= 2 ? partes.map((nome) => ({ nome, topicos: [] })) : [];
}

export function extrairAnexoSequencial(texto: string): SecaoExtraida[] {
  const linhas = texto
    .split(/\r?\n/)
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter((l) => l && !RODAPE.test(l));

  const secoes: SecaoExtraida[] = [];
  let secaoAtual: SecaoExtraida = { secao: "(sem seção)", disciplinas: [] };
  let nome: string | null = null;
  let corpo: string[] = [];
  const empurrar = () => {
    if (nome && corpo.length) {
      const textoCorpo = corpo.join(" ");
      let assuntos = parseItensSequenciais(textoCorpo);
      if (!assuntos.length) assuntos = parseItensSemNumeracao(textoCorpo);
      if (assuntos.length) {
        if (!secoes.includes(secaoAtual)) secoes.push(secaoAtual);
        secaoAtual.disciplinas.push({ nome: limpar(nome), assuntos });
      }
    }
    nome = null;
    corpo = [];
  };

  for (let i = 0; i < linhas.length; i++) {
    const l = linhas[i];
    if (SECAO.test(l)) {
      empurrar();
      secaoAtual = { secao: limpar(l), disciplinas: [] };
      continue;
    }
    if (FIM_DISCIPLINA.test(l)) { empurrar(); continue; }

    const prox = linhas[i + 1] ?? "";
    const esp = INICIO_ESPECIFICOS.exec(prox);
    if (!INICIO_ESPECIFICOS.test(l) && esp && l.length <= 90 && !/[:.]$/.test(l)) {
      empurrar();
      nome = l;
      corpo = [esp[1]];
      i += 1;
      continue;
    }
    const inline = INICIO_INLINE.exec(l);
    if (inline && !INICIO_ESPECIFICOS.test(l) && !nome) {
      empurrar();
      nome = inline[1];
      corpo = [inline[2]];
      continue;
    }
    if (inline && !INICIO_ESPECIFICOS.test(l) && nome && corpo.length) {
      // Nova disciplina inline logo após outra (Conhecimentos Gerais).
      empurrar();
      nome = inline[1];
      corpo = [inline[2]];
      continue;
    }
    if (nome) corpo.push(l);
  }
  empurrar();
  return secoes;
}
