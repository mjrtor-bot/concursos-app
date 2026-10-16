// Detecta o formato do texto de um PDF de edital e extrai disciplinas/assuntos/tópicos.
// Só devolve uma proposta "gravável" quando o formato é reconhecido sem ambiguidade.
// O resultado é sempre um rascunho para revisão humana.

import { extrairPlanilhaVerticalizada } from "./extrairPlanilhaVerticalizada";
import { extrairAnexoSequencial } from "./extrairAnexoSequencial";
import type { DisciplinaExtraida } from "./extrairAnexoSequencial";
import { extrairAnexoPorCargo } from "./extrairAnexoPorCargo";
import type { CargoExtraido } from "./extrairAnexoPorCargo";

export type PropostaExtracao = {
  metodo: "planilha_verticalizada" | "anexo_sequencial" | "anexo_por_cargo" | "nao_reconhecido";
  gravavel: boolean;
  disciplinas: DisciplinaExtraida[];
  avisos: string[];
  cargos_detectados?: string[];
  cargo_selecionado?: string | null;
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

function normalizarBusca(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// Lista de nomes que cabe no aviso gravado no banco (evita texto muito longo).
function listarNomes(nomes: string[], limite = 380): string {
  let texto = "";
  let usados = 0;
  for (const n of nomes) {
    const proximo = texto ? `${texto}; ${n}` : n;
    if (proximo.length > limite && usados > 0) break;
    texto = proximo;
    usados += 1;
  }
  const restantes = nomes.length - usados;
  return restantes > 0 ? `${texto}; e mais ${restantes}` : texto;
}

// Escolhe o cargo do edital a partir do nome informado pelo usuário: igualdade exata ou, se não
// houver, um único cargo que contenha o texto informado (ou esteja contido nele).
function escolherCargo(cargos: CargoExtraido[], pedido: string | null | undefined): { escolhido: CargoExtraido | null; candidatos: CargoExtraido[] } {
  const p = normalizarBusca(pedido ?? "");
  if (!p) return { escolhido: null, candidatos: [] };
  const exatos = cargos.filter((c) => normalizarBusca(c.nome) === p);
  if (exatos.length === 1) return { escolhido: exatos[0], candidatos: [] };
  if (p.length >= 4) {
    const parciais = cargos.filter((c) => {
      const n = normalizarBusca(c.nome);
      return n.includes(p) || p.includes(n);
    });
    if (parciais.length === 1) return { escolhido: parciais[0], candidatos: [] };
    return { escolhido: null, candidatos: parciais };
  }
  return { escolhido: null, candidatos: [] };
}

// O pdf-parse insere "-- N of M --" ao fim de cada página, sem quebra de linha depois,
// o que cola esse marcador na primeira linha da página seguinte e esconde o item numerado.
export function normalizarTextoPdf(texto: string): string {
  return texto.replace(/\r/g, "").replace(/\n?[ \t]*--\s*\d+\s+of\s+\d+\s*--[ \t]*/gi, "\n");
}

export function detectarEExtrair(textoBruto: string, cargoInformado?: string | null): PropostaExtracao {
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

  // Anexo de conteúdo programático por grupo de escolaridade e por cargo.
  const cargos = extrairAnexoPorCargo(texto);
  if (cargos.length) {
    const nomes = cargos.map((c) => c.nome);
    const { escolhido, candidatos } = escolherCargo(cargos, cargoInformado);
    if (escolhido) {
      const gravavel = confiavel(escolhido.disciplinas);
      const av = [`Cargo identificado no edital: ${escolhido.nome}.`];
      if (!gravavel) av.push("Poucas disciplinas ou itens extraídos para esse cargo; faça a revisão manual.");
      return {
        metodo: "anexo_por_cargo",
        gravavel,
        disciplinas: escolhido.disciplinas,
        avisos: av,
        cargos_detectados: nomes,
        cargo_selecionado: escolhido.nome,
      };
    }
    let aviso: string;
    if (candidatos.length > 1) {
      aviso =
        `O cargo informado corresponde a ${candidatos.length} cargos do edital: ${listarNomes(candidatos.map((c) => c.nome))}. ` +
        "Informe o nome completo do cargo e envie o PDF novamente.";
    } else if ((cargoInformado ?? "").trim()) {
      aviso =
        `Nenhum cargo do edital corresponde a "${(cargoInformado ?? "").trim().slice(0, 80)}". ` +
        `Cargos encontrados (${nomes.length}): ${listarNomes(nomes)}. Informe um deles no campo Cargo e envie o PDF novamente.`;
    } else {
      aviso =
        `O conteúdo programático foi encontrado, mas o edital traz ${nomes.length} cargos: ${listarNomes(nomes)}. ` +
        "Informe o cargo no campo Cargo e envie o PDF novamente.";
    }
    return {
      metodo: "anexo_por_cargo",
      gravavel: false,
      disciplinas: [],
      avisos: [aviso],
      cargos_detectados: nomes,
      cargo_selecionado: null,
    };
  }

  avisos.push(
    "Formato do conteúdo programático não reconhecido (por exemplo, PDF sem o Anexo II ou em colunas de diário oficial)."
  );
  return { metodo: "nao_reconhecido", gravavel: false, disciplinas: [], avisos };
}

export function resumirProposta(p: PropostaExtracao) {
  return {
    metodo: p.metodo,
    gravavel: p.gravavel,
    disciplinas: p.disciplinas.length,
    ...contar(p.disciplinas),
    avisos: p.avisos,
    ...(p.cargos_detectados ? { cargos_detectados: p.cargos_detectados } : {}),
    ...(p.cargo_selecionado !== undefined ? { cargo_selecionado: p.cargo_selecionado } : {}),
  };
}
