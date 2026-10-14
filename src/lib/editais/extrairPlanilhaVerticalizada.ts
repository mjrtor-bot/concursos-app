// Extrator determinístico para PDFs no formato "Edital Verticalizado" (planilha exportada):
// cada disciplina tem um cabeçalho em CAIXA ALTA seguido de "Revisão", e os itens numerados
// ("1." assunto, "1.1." tópico) quebram em várias linhas.

export type AssuntoExtraido = { nome: string; topicos: string[] };
export type DisciplinaExtraida = { nome: string; assuntos: AssuntoExtraido[] };

const LIXO_CABECALHO = /POL[ÍI]CIA MILITAR|OFICIAL DA|EDITAL VERTICALIZADO|CORPO DE BOMBEIROS|PREFEITURA|SECRETARIA/i;
const LIXO_COLUNAS = /^(Revis[ãa]o|ESTUDO|DIRIGIDO|T[ÓO]PICOS DO EDITAL|Videoaula|Exerc[íi]cios|Total Acertos|Rendimento|Semana|MAT[ÉE]RIAS TEMPO)/i;

function ehCaixaAlta(linha: string): boolean {
  const letras = linha.replace(/[^A-Za-zÀ-ÿ]/g, "");
  if (letras.length < 4) return false;
  return letras === letras.toUpperCase() && !/\d/.test(linha);
}

function limpar(texto: string): string {
  return texto.replace(/\s+/g, " ").replace(/\s+([,.;:])/g, "$1").trim();
}

export function extrairPlanilhaVerticalizada(texto: string): DisciplinaExtraida[] {
  const linhas = texto.split(/\r?\n/).map((l) => l.replace(/\s+/g, " ").trim()).filter(Boolean);
  const disciplinas: DisciplinaExtraida[] = [];
  let bufferNome: string[] = [];
  let atual: DisciplinaExtraida | null = null;
  let ultimoTop = 0;
  let ultimoSub = 0;
  let alvo: "assunto" | "topico" | null = null;
  let acumulado = "";

  const fecharItem = () => {
    if (!atual || !alvo || !acumulado) { acumulado = ""; return; }
    const t = limpar(acumulado);
    if (alvo === "assunto") atual.assuntos.push({ nome: t, topicos: [] });
    else if (atual.assuntos.length) atual.assuntos[atual.assuntos.length - 1].topicos.push(t);
    acumulado = "";
  };

  // Procura, dentro da linha, o próximo marcador esperado ("N." ou "N.M.") em qualquer posição.
  const proximoMarcador = (linha: string) => {
    const candidatos = [
      { re: new RegExp(`(^|\\s)${ultimoTop + 1}\\.(?:\\s+(?=\\S)|(?=[A-ZÁÉÍÓÚÂÊÔÃÕÇ]))`), tipo: "assunto" as const },
      { re: new RegExp(`(^|\\s)${ultimoTop}\\.${ultimoSub + 1}\\.\\s+(?=\\S)`), tipo: "topico" as const },
    ];
    let melhor: { idx: number; len: number; tipo: "assunto" | "topico" } | null = null;
    for (const c of candidatos) {
      if (c.tipo === "topico" && ultimoTop === 0) continue;
      const m = c.re.exec(linha);
      if (m && (melhor === null || m.index < melhor.idx)) {
        melhor = { idx: m.index + m[1].length, len: m[0].length - m[1].length, tipo: c.tipo };
      }
    }
    return melhor;
  };

  for (const linha of linhas) {
    // "Revisão" pode vir sozinha na linha ou ao fim do cabeçalho ("Exercícios - Questões Revisão").
    if (/(^|\s)Revis[ãa]o$/i.test(linha) && bufferNome.length) {
      fecharItem();
      const nome = limpar(bufferNome.filter((l) => !LIXO_CABECALHO.test(l)).join(" "));
      bufferNome = [];
      if (nome) {
        atual = { nome, assuntos: [] };
        disciplinas.push(atual);
        ultimoTop = 0; ultimoSub = 0; alvo = null;
      }
      continue;
    }
    if (LIXO_COLUNAS.test(linha)) { continue; }
    if (!atual || (ehCaixaAlta(linha) && !/^\d/.test(linha) && !proximoMarcador(linha))) {
      if (ehCaixaAlta(linha)) bufferNome.push(linha); else bufferNome = [];
      if (!atual) continue;
      if (ehCaixaAlta(linha)) continue;
    }
    bufferNome = [];
    let resto = linha;
    for (let guarda = 0; guarda < 8 && resto; guarda++) {
      const m = proximoMarcador(resto);
      if (!m) break;
      const antes = resto.slice(0, m.idx).trim();
      if (antes) acumulado += " " + antes;
      fecharItem();
      if (m.tipo === "assunto") { ultimoTop += 1; ultimoSub = 0; } else { ultimoSub += 1; }
      alvo = m.tipo;
      resto = resto.slice(m.idx + m.len);
    }
    if (resto) acumulado += " " + resto;
  }
  fecharItem();
  return disciplinas.filter((d) => d.assuntos.length > 0);
}
