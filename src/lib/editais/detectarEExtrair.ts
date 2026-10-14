// Detecta o formato do texto de um PDF de edital e extrai disciplinas/assuntos/tópicos.
// Só devolve uma proposta "gravável" quando o formato é reconhecido sem ambiguidade.
// O resultado é sempre um rascunho para revisão humana.

import { extrairPlanilhaVerticalizada } from "./extrairPlanilhaVerticalizada";
import { extrairAnexoSequencial } from "./extrairAnexoSequencial";
import type { DisciplinaExtraida } from "./extrairAnexoSequencial";

export type PropostaExtracao = {
  metodo: "planilha_verticalizada" | "anexo_sequencial" | "nao_reconhecido";
  gravavel: boolean;
  disciplinas: DisciplinaExtraida[];
  avisos: string[];
};

function contar(disciplinas: DisciplinaExtraida[]) {
  const assuntos = disciplinas.reduce((n, d) => n + d.assuntos.length, 0);
  const topicos = disciplinas.reduce((n, d) => n + d.assuntos.reduce((m, a) => m + a.topicos.length, 0), 0);
  return { assuntos, topicos };
}

function confiavel(disciplinas: DisciplinaExtraida[]): boolean {
  if (disciplinas.length < 3) return false;
  return contar(disciplinas).assuntos >= 10;
}

// O pdf-parse insere "-- N of M --" ao fim de cada página, sem quebra de linha depois,
// o que cola esse marcador na primeira linha da página seguinte e esconde o item numerado.
export function normalizarTextoPdf(texto: string): string {
  return texto.replace(/\r/g, "").replace(/\n?[ \t]*--\s*\d+\s+of\s+\d+\s*--[ \t]*/gi, "\n");
}

export function detectarEExtrair(textoBruto: string): PropostaExtracao {
  const texto = normalizarTextoPdf(textoBruto);
  const avisos: string[] = [];

  if (/T[ÓO]PICOS DO EDITAL/i.test(texto) && /Videoaula/i.test(texto)) {
    const disciplinas = extrairPlanilhaVerticalizada(texto);
    if (confiavel(disciplinas)) {
      return { metodo: "planilha_verticalizada", gravavel: true, disciplinas, avisos };
    }
    const c = contar(disciplinas);
    avisos.push(
      `Formato de planilha verticalizada reconhecido, mas com poucas disciplinas ou itens (${disciplinas.length} disciplinas, ${c.assuntos} assuntos).`
    );
  }

  if (/Conhecimentos espec[íi]ficos\s*:/i.test(texto)) {
    const secoes = extrairAnexoSequencial(texto);
    const gerais = secoes.filter((s) => /GERAIS|B[ÁA]SICOS/i.test(s.secao));
    const especificas = secoes.filter((s) => !/GERAIS|B[ÁA]SICOS/i.test(s.secao));
    if (especificas.length === 1) {
      const disciplinas = [...gerais.flatMap((s) => s.disciplinas), ...especificas[0].disciplinas];
      if (confiavel(disciplinas)) {
        return { metodo: "anexo_sequencial", gravavel: true, disciplinas, avisos };
      }
      avisos.push("Anexo em prosa numerada reconhecido, mas com poucas disciplinas ou itens.");
    } else if (especificas.length > 1) {
      avisos.push(
        `O anexo traz ${especificas.length} blocos de conhecimentos específicos (mais de um cargo). ` +
          "Não é possível escolher o cargo automaticamente; faça a revisão manual."
      );
      const todas = secoes.flatMap((s) => s.disciplinas);
      return { metodo: "anexo_sequencial", gravavel: false, disciplinas: todas, avisos };
    }
  }

  avisos.push(
    "Formato do conteúdo programático não reconhecido (por exemplo, PDF sem o Anexo II ou em colunas de diário oficial)."
  );
  return { metodo: "nao_reconhecido", gravavel: false, disciplinas: [], avisos };
}

export function resumirProposta(p: PropostaExtracao) {
  return { metodo: p.metodo, gravavel: p.gravavel, disciplinas: p.disciplinas.length, ...contar(p.disciplinas), avisos: p.avisos };
}
