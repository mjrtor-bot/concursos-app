export type TopicoItem = {
  nome: string;
  topicos?: string[];
  subassuntos?: string[];
};

export type AssuntoExtraido = {
  nome: string;
  topicos?: string[];
  subassuntos?: string[];
};

export type DisciplinaExtraida = {
  nome: string;
  assuntos: AssuntoExtraido[];
};

export type CargoExtraido = {
  nome: string;
  escolaridade?: string;
  disciplinas: DisciplinaExtraida[];
};

export type EstruturaExtraida = {
  titulo_detectado?: string;
  orgao?: string;
  banca?: string;
  uf?: string;
  observacoes?: string[];
  cargos?: CargoExtraido[];
  disciplinas?: DisciplinaExtraida[];
  fonte_oficial_url?: string;
};

const PSEUDO_DISCIPLINAS_REGEX = /^(conhecimentos\s+(gerais|espec[ií]ficos|b[aá]sicos|comuns)|bloco\s+[a-z0-9ivx]+|m[oó]dulo\s+[a-z0-9ivx]+|prova\s+objetiva|anexo\s+[a-z0-9ivx]+|conte[uú]do\s+program[aá]tico)/i;

const NOMES_DISCIPLINAS_COMUNS = [
  "portuguesa", "portugues", "redacao", "matematica", "raciocinio",
  "logico", "informatica", "constitucional", "administrativo", "penal",
  "processual", "civil", "tributario", "militar", "extravagante", "legislacao",
  "geografia", "historia", "realidade", "atualidades", "direitos humanos",
  "criminologia", "medicina legal", "etica", "administracao", "contabilidade"
];

function pareceDisciplinaReal(nome: string): boolean {
  const norm = nome.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  return NOMES_DISCIPLINAS_COMUNS.some((k) => norm.includes(k));
}

function limparNome(val: string): string {
  if (!val) return "";
  return val
    .replace(/^[*_#\s-]+/, "")
    .replace(/[*_#\s-]+$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Normaliza e desdobra assuntos quando uma disciplina foi compactada indevidamente
 * (ex: 1 assunto com todos os tópicos dentro do array topicos).
 */
function normalizarAssuntos(assuntos: any[]): AssuntoExtraido[] {
  if (!Array.isArray(assuntos) || assuntos.length === 0) return [];

  const resultado: AssuntoExtraido[] = [];

  for (const item of assuntos) {
    let nomeAssunto = "";
    let subtopicos: string[] = [];

    if (typeof item === "object" && item !== null) {
      nomeAssunto = limparNome(String(item.nome || ""));
      const rawTopicos = Array.isArray(item.topicos)
        ? item.topicos
        : (Array.isArray(item.subassuntos) ? item.subassuntos : []);
      subtopicos = rawTopicos.map((t: any) => limparNome(typeof t === "object" && t !== null ? String(t.nome || "") : String(t || ""))).filter(Boolean);
    } else {
      nomeAssunto = limparNome(String(item || ""));
    }

    if (!nomeAssunto) continue;

    // Se o assunto possui muitos subtópicos numerados e seu nome é apenas o nome genérico da disciplina ou similar,
    // desdobra cada subtópico como um assunto próprio para manter a consistência de granularidade.
    if (assuntos.length === 1 && subtopicos.length > 3) {
      for (const sub of subtopicos) {
        resultado.push({
          nome: sub,
          topicos: [],
        });
      }
    } else {
      resultado.push({
        nome: nomeAssunto,
        topicos: subtopicos,
      });
    }
  }

  return resultado;
}

/**
 * Normaliza uma lista de disciplinas, desfazendo o agrupamento indevido de blocos/conhecimentos gerais
 * e promovendo assuntos a disciplinas quando necessário.
 */
function normalizarDisciplinas(disciplinas: any[]): DisciplinaExtraida[] {
  if (!Array.isArray(disciplinas) || disciplinas.length === 0) return [];

  const normalizadas: DisciplinaExtraida[] = [];

  for (const d of disciplinas) {
    const nomeOriginal = limparNome(String(d?.nome || ""));
    if (!nomeOriginal) continue;

    const assuntosRaw = Array.isArray(d?.assuntos) ? d.assuntos : [];

    // Detecta se a disciplina é na verdade um bloco agregador ("Conhecimentos Gerais", "Bloco I", etc.)
    const ehPseudo = PSEUDO_DISCIPLINAS_REGEX.test(nomeOriginal);
    const temFilhosQueParecemDisciplinas = assuntosRaw.some((a: any) => {
      const aNome = typeof a === "object" && a !== null ? String(a.nome || "") : String(a || "");
      return pareceDisciplinaReal(aNome) || (Array.isArray(a?.topicos) && a.topicos.length > 0) || (Array.isArray(a?.subassuntos) && a.subassuntos.length > 0);
    });

    if (ehPseudo && temFilhosQueParecemDisciplinas && assuntosRaw.length > 0) {
      // Promover cada assunto do bloco a disciplina real
      for (const subItem of assuntosRaw) {
        let discNome = "";
        let topicosInner: any[] = [];

        if (typeof subItem === "object" && subItem !== null) {
          discNome = limparNome(String(subItem.nome || ""));
          topicosInner = Array.isArray(subItem.topicos)
            ? subItem.topicos
            : (Array.isArray(subItem.subassuntos) ? subItem.subassuntos : (Array.isArray(subItem.assuntos) ? subItem.assuntos : []));
        } else {
          discNome = limparNome(String(subItem || ""));
        }

        if (!discNome) continue;

        const assuntosProcessados = normalizarAssuntos(topicosInner.length > 0 ? topicosInner : [discNome]);
        normalizadas.push({
          nome: discNome,
          assuntos: assuntosProcessados.length > 0 ? assuntosProcessados : [{ nome: discNome, topicos: [] }],
        });
      }
    } else {
      const assuntosProcessados = normalizarAssuntos(assuntosRaw);
      if (assuntosProcessados.length > 0) {
        normalizadas.push({
          nome: nomeOriginal,
          assuntos: assuntosProcessados,
        });
      }
    }
  }

  return normalizadas;
}

export type ResultadoNormalizacao = {
  estrutura: EstruturaExtraida;
  totalDisciplinas: number;
  totalAssuntos: number;
  totalTopicos: number;
  semConteudo: boolean;
  motivoSemConteudo?: string;
};

/**
 * Normaliza toda a estrutura extraída pelo modelo de IA, aplicando regras de granularidade,
 * separação de cargos, correção de blocos e validação de conteúdo.
 */
export function normalizarEstruturaExtraida(raw: any): ResultadoNormalizacao {
  if (!raw || typeof raw !== "object") {
    return {
      estrutura: { observacoes: ["Estrutura extraída nula ou inválida."] },
      totalDisciplinas: 0,
      totalAssuntos: 0,
      totalTopicos: 0,
      semConteudo: true,
      motivoSemConteudo: "Nenhum dado estruturado foi gerado.",
    };
  }

  const tituloDetectado = limparNome(String(raw.titulo_detectado || raw.titulo || ""));
  const orgao = limparNome(String(raw.orgao || raw.orgao_nome || ""));
  const banca = limparNome(String(raw.banca || ""));
  const uf = limparNome(String(raw.uf || "")).toUpperCase().slice(0, 2);
  const observacoes = Array.isArray(raw.observacoes)
    ? raw.observacoes.map((o: any) => String(o || "").trim()).filter(Boolean)
    : [];

  const cargosNormalizados: CargoExtraido[] = [];
  if (Array.isArray(raw.cargos) && raw.cargos.length > 0) {
    for (const c of raw.cargos) {
      const cargoNome = limparNome(String(c?.nome || ""));
      if (!cargoNome) continue;
      const disciplinasCargo = normalizarDisciplinas(c?.disciplinas || []);
      cargosNormalizados.push({
        nome: cargoNome,
        escolaridade: c?.escolaridade ? limparNome(String(c.escolaridade)) : undefined,
        disciplinas: disciplinasCargo,
      });
    }
  }

  let disciplinasNormalizadas: DisciplinaExtraida[] = [];
  if (Array.isArray(raw.disciplinas) && raw.disciplinas.length > 0) {
    disciplinasNormalizadas = normalizarDisciplinas(raw.disciplinas);
  }

  // Se temos cargos mas disciplinas gerais está vazia, o total vem dos cargos
  const todasDisciplinas = disciplinasNormalizadas.length > 0
    ? disciplinasNormalizadas
    : cargosNormalizados.flatMap((c) => c.disciplinas);

  let totalAssuntos = 0;
  let totalTopicos = 0;

  for (const d of todasDisciplinas) {
    totalAssuntos += d.assuntos.length;
    for (const a of d.assuntos) {
      totalTopicos += (a.topicos?.length || 0);
    }
  }

  const totalDisciplinas = todasDisciplinas.length;
  const semConteudo = totalDisciplinas === 0 || totalAssuntos === 0;

  let motivoSemConteudo: string | undefined = undefined;
  if (semConteudo) {
    motivoSemConteudo = observacoes.length > 0
      ? observacoes.join(" | ")
      : "O documento PDF enviado não contém anexo ou seção de conteúdo programático identificável.";
  }

  const estruturaFinal: EstruturaExtraida = {
    titulo_detectado: tituloDetectado || undefined,
    orgao: orgao || undefined,
    banca: banca || undefined,
    uf: uf || undefined,
    observacoes: observacoes.length > 0 ? observacoes : undefined,
    cargos: cargosNormalizados.length > 0 ? cargosNormalizados : undefined,
    disciplinas: disciplinasNormalizadas.length > 0 ? disciplinasNormalizadas : undefined,
    fonte_oficial_url: raw.fonte_oficial_url,
  };

  return {
    estrutura: estruturaFinal,
    totalDisciplinas,
    totalAssuntos,
    totalTopicos,
    semConteudo,
    motivoSemConteudo,
  };
}
