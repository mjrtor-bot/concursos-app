import { Questao, Alternativa, ImportOptions, ImportReport, ImportItemError } from "@/types";
import { gerarFingerprintQuestao } from "./questionFingerprint";

export interface RawQuestaoInput {
  id?: string;
  disciplina_id?: string;
  disciplina?: string;
  assunto_id?: string;
  assunto?: string;
  subassunto_id?: string;
  subassunto?: string;
  enunciado: string;
  tipo: "multipla_escolha" | "certo_errado";
  dificuldade?: "facil" | "medio" | "dificil";
  banca?: string;
  ano?: number | string;
  orgao?: string;
  cargo?: string;
  explicacao?: string;
  texto_apoio?: string;
  alternativas?: Array<{
    letra?: "A" | "B" | "C" | "D" | "E";
    texto: string;
    correta: boolean;
    ordem?: number;
    explicacao_especifica?: string;
  }>;
  gabarito?: string;
  gabarito_correto?: "A" | "B" | "C" | "D" | "E" | "Certo" | "Errado" | "C" | "E" | string;
  alternativa_a?: string;
  alternativa_b?: string;
  alternativa_c?: string;
  alternativa_d?: string;
  alternativa_e?: string;
  is_autoral_ia?: boolean;
  modelo_ia?: string;
  prompt_versao?: string;
  revisada_por_especialista?: boolean;
  anulada?: boolean;
  desatualizada?: boolean;
  motivo_desatualizacao?: string;
  [key: string]: any;
}

/**
 * Parser de CSV simples e robusto com suporte a aspas duplas, quebras de linha e delimitadores vírgula/ponto-e-vírgula.
 */
export function parseCSVToObjects(csvText: string): Record<string, string>[] {
  const lines: string[] = [];
  let currentLine = "";
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentLine += '"';
        i++; // pula o próximo escape
      } else {
        inQuotes = !inQuotes;
      }
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") i++;
      if (currentLine.trim()) {
        lines.push(currentLine);
      }
      currentLine = "";
    } else {
      currentLine += char;
    }
  }
  if (currentLine.trim()) {
    lines.push(currentLine);
  }

  if (lines.length < 2) return [];

  // Detecta delimitador (, ou ;)
  const firstLine = lines[0];
  const delimiter = firstLine.includes(";") ? ";" : ",";

  const splitLine = (lineStr: string): string[] => {
    const result: string[] = [];
    let current = "";
    let inside = false;

    for (let i = 0; i < lineStr.length; i++) {
      const c = lineStr[i];
      if (c === '"') {
        inside = !inside;
      } else if (c === delimiter && !inside) {
        result.push(current.trim());
        current = "";
      } else {
        current += c;
      }
    }
    result.push(current.trim());
    return result;
  };

  const headers = splitLine(lines[0]).map((h) => h.replace(/^["']|["']$/g, "").toLowerCase().trim());
  const records: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = splitLine(lines[i]).map((v) => v.replace(/^["']|["']$/g, "").trim());
    if (values.length === 0 || (values.length === 1 && !values[0])) continue;

    const row: Record<string, string> = {};
    headers.forEach((header, idx) => {
      row[header] = values[idx] || "";
    });
    records.push(row);
  }

  return records;
}

/**
 * Valida e converte uma entrada bruta (JSON ou CSV row) para uma Questao válida tipada.
 */
export function validarEConverterQuestao(
  raw: RawQuestaoInput | Record<string, any>,
  linhaIndex: number
): { questao?: Questao; erro?: ImportItemError } {
  // 1. Validação do enunciado
  const enunciado = String(raw.enunciado || "").trim();
  if (!enunciado || enunciado.length < 10) {
    const msg = "Enunciado é obrigatório e deve ter no mínimo 10 caracteres.";
    return {
      erro: {
        linha: linhaIndex,
        campo: "enunciado",
        mensagem: msg,
        motivo: msg,
        dado: raw,
      },
    };
  }

  // 2. Validação do Tipo
  let tipo: "multipla_escolha" | "certo_errado" = "multipla_escolha";
  const rawTipo = String(raw.tipo || "").toLowerCase().trim();
  if (rawTipo === "certo_errado" || rawTipo === "ce" || rawTipo === "certo/errado") {
    tipo = "certo_errado";
  } else if (rawTipo === "multipla_escolha" || rawTipo === "me" || rawTipo === "multipla escolha" || !rawTipo) {
    tipo = "multipla_escolha";
  } else {
    const msg = "Tipo de questão inválido. Deve ser 'multipla_escolha' ou 'certo_errado'.";
    return {
      erro: {
        linha: linhaIndex,
        campo: "tipo",
        mensagem: msg,
        motivo: msg,
        dado: raw.tipo,
      },
    };
  }

  // 3. Validação de Alternativas / Gabarito
  let alternativas: Alternativa[] = [];

  if (Array.isArray(raw.alternativas) && raw.alternativas.length > 0) {
    alternativas = raw.alternativas.map((alt, idx) => ({
      id: `alt_${linhaIndex}_${idx + 1}`,
      letra: alt.letra || ((["A", "B", "C", "D", "E"][idx] as "A" | "B" | "C" | "D" | "E") || undefined),
      texto: String(alt.texto || "").trim(),
      correta: Boolean(alt.correta),
      ordem: alt.ordem !== undefined ? Number(alt.ordem) : idx + 1,
      explicacao_especifica: alt.explicacao_especifica ? String(alt.explicacao_especifica).trim() : undefined,
    }));
  } else if (tipo === "multipla_escolha") {
    // Tenta montar a partir de colunas alternativa_a, alternativa_b...
    const gabarito = String(raw.gabarito_correto || raw.gabarito || "").toUpperCase().trim();
    const letras: Array<"A" | "B" | "C" | "D" | "E"> = ["A", "B", "C", "D", "E"];

    letras.forEach((letra, idx) => {
      const fieldKey = `alternativa_${letra.toLowerCase()}`;
      const textoAlt = String(raw[fieldKey] || raw[letra] || "").trim();
      if (textoAlt) {
        alternativas.push({
          id: `alt_${linhaIndex}_${idx + 1}`,
          letra,
          texto: textoAlt,
          correta: gabarito === letra,
          ordem: idx + 1,
        });
      }
    });
  } else if (tipo === "certo_errado") {
    const gabarito = String(raw.gabarito_correto || raw.gabarito || "").toLowerCase().trim();
    const isCerto = gabarito === "c" || gabarito === "certo" || gabarito === "certa" || gabarito === "v" || gabarito === "verdadeiro";
    const isErrado = gabarito === "e" || gabarito === "errado" || gabarito === "errada" || gabarito === "f" || gabarito === "falso";

    alternativas = [
      {
        id: `alt_${linhaIndex}_1`,
        letra: "A",
        texto: "Certo",
        correta: isCerto,
        ordem: 1,
      },
      {
        id: `alt_${linhaIndex}_2`,
        letra: "B",
        texto: "Errado",
        correta: isErrado,
        ordem: 2,
      },
    ];
  }

  // Validação estrita das alternativas montadas
  if (tipo === "multipla_escolha") {
    if (alternativas.length < 2) {
      const msg = "Questão de múltipla escolha deve conter no mínimo 2 alternativas com texto preenchido.";
      return {
        erro: {
          linha: linhaIndex,
          campo: "alternativas",
          mensagem: msg,
          motivo: msg,
          dado: alternativas,
        },
      };
    }
    const corretasCount = alternativas.filter((a) => a.correta).length;
    if (corretasCount !== 1) {
      const msg = `Questão deve ter exatamente 1 alternativa correta marcada. Encontradas: ${corretasCount}.`;
      return {
        erro: {
          linha: linhaIndex,
          campo: "gabarito",
          mensagem: msg,
          motivo: msg,
          dado: alternativas,
        },
      };
    }
  } else if (tipo === "certo_errado") {
    const corretasCount = alternativas.filter((a) => a.correta).length;
    if (corretasCount !== 1) {
      const msg = "Questão de Certo/Errado precisa ter gabarito definido como 'Certo' ou 'Errado'.";
      return {
        erro: {
          linha: linhaIndex,
          campo: "gabarito",
          mensagem: msg,
          motivo: msg,
          dado: raw.gabarito_correto || raw.gabarito,
        },
      };
    }
  }

  // 4. Validação de ano e metadados
  const anoNum = Number(raw.ano) || new Date().getFullYear();
  if (anoNum < 1990 || anoNum > 2035) {
    const msg = "Ano da questão inválido (deve estar entre 1990 e 2035).";
    return {
      erro: {
        linha: linhaIndex,
        campo: "ano",
        mensagem: msg,
        motivo: msg,
        dado: raw.ano,
      },
    };
  }

  const banca = String(raw.banca || "Banca Examinadora").trim();
  const orgao = String(raw.orgao || "Órgão Público").trim();
  const cargo = raw.cargo ? String(raw.cargo).trim() : undefined;
  const explicacao = String(raw.explicacao || "Resolução comentada pelo professor especialista.").trim();
  const texto_apoio = raw.texto_apoio ? String(raw.texto_apoio).trim() : undefined;

  let dificuldade: "facil" | "medio" | "dificil" = "medio";
  const rawDif = String(raw.dificuldade || "").toLowerCase().trim();
  if (rawDif === "facil" || rawDif === "fácil") dificuldade = "facil";
  if (rawDif === "dificil" || rawDif === "difícil") dificuldade = "dificil";

  // Identificação de Autoria e IA
  const is_autoral_ia = Boolean(raw.is_autoral_ia);
  const modelo_ia = is_autoral_ia ? String(raw.modelo_ia || "Claude 3.5 Sonnet") : null;
  const prompt_versao = is_autoral_ia ? String(raw.prompt_versao || "v2.0") : null;

  // Gerar fingerprint hash determinístico para deduplicação
  const fingerprint_hash = gerarFingerprintQuestao({
    enunciado,
    tipo,
    banca,
    ano: anoNum,
    orgao,
    alternativas,
  });

  const questao: Questao = {
    id: raw.id || `q_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    disciplina_id: String(raw.disciplina_id || raw.disciplina || "disc_geral").toLowerCase(),
    assunto_id: String(raw.assunto_id || raw.assunto || "assunto_geral").toLowerCase(),
    subassunto_id: raw.subassunto_id || raw.subassunto || null,
    enunciado,
    tipo,
    dificuldade,
    banca,
    ano: anoNum,
    orgao,
    cargo,
    explicacao,
    texto_apoio,
    alternativas,
    is_autoral_ia,
    modelo_ia,
    prompt_versao,
    revisada_por_especialista: Boolean(raw.revisada_por_especialista),
    anulada: Boolean(raw.anulada),
    desatualizada: Boolean(raw.desatualizada),
    motivo_desatualizacao: raw.motivo_desatualizacao ? String(raw.motivo_desatualizacao).trim() : null,
    versao: 1,
    fingerprint_hash,
    created_at: new Date().toISOString(),
  };

  return { questao };
}

/**
 * Processa a importação em lote de questões a partir de JSON ou CSV, aplicando validação,
 * deduplicação criptográfica e geração de relatório detalhado.
 */
export function processarImportacaoQuestoes(
  conteudoArquivo: string,
  formato: "json" | "csv",
  questoesExistentes: Questao[],
  options: ImportOptions = { politicaDuplicatas: "ignorar" }
): { questoesValidadas: Questao[]; report: ImportReport } {
  const inicio = performance.now();
  const report: ImportReport = {
    totalLidos: 0,
    totalLinhas: 0,
    sucesso: false,
    sucessos: 0,
    inseridas: 0,
    duplicadasIgnoradas: 0,
    duplicadasAtualizadas: 0,
    invalidas: 0,
    erros: [],
    tempoGastoMs: 0,
  };

  let rawList: any[] = [];

  try {
    if (formato === "json") {
      const parsed = JSON.parse(conteudoArquivo);
      rawList = Array.isArray(parsed) ? parsed : [parsed];
    } else {
      rawList = parseCSVToObjects(conteudoArquivo);
    }
  } catch (err: any) {
    report.invalidas = 1;
    const msg = `Erro ao fazer parse do arquivo ${formato.toUpperCase()}: ${err.message}`;
    report.erros.push({
      linha: 0,
      mensagem: msg,
      motivo: msg,
    });
    report.tempoGastoMs = Math.round(performance.now() - inicio);
    return { questoesValidadas: [], report };
  }

  report.totalLidos = rawList.length;
  report.totalLinhas = rawList.length;

  // Mapa de fingerprints existentes para consulta O(1)
  const mapFingerprints = new Map<string, Questao>();
  questoesExistentes.forEach((q) => {
    if (q.fingerprint_hash) {
      mapFingerprints.set(q.fingerprint_hash, q);
    }
  });

  const resultadoValidadas: Questao[] = [];

  rawList.forEach((itemRaw, index) => {
    const linhaNumero = index + 1;

    // Se a opção marcarComoIA estiver ativa, aplica
    if (options.marcarComoIA) {
      itemRaw.is_autoral_ia = true;
      if (options.modeloIA) itemRaw.modelo_ia = options.modeloIA;
    }

    const { questao, erro } = validarEConverterQuestao(itemRaw, linhaNumero);

    if (erro) {
      report.invalidas++;
      report.erros.push(erro);
      return;
    }

    if (!questao) return;

    // Verificação de deduplicação por hash
    const questaoExistente = mapFingerprints.get(questao.fingerprint_hash!);

    if (questaoExistente) {
      if (options.politicaDuplicatas === "ignorar") {
        report.duplicadasIgnoradas++;
        return;
      } else if (options.politicaDuplicatas === "atualizar") {
        // Atualiza mantendo o id original e histórico
        questao.id = questaoExistente.id;
        questao.versao = (questaoExistente.versao || 1) + 1;
        report.duplicadasAtualizadas++;
        resultadoValidadas.push(questao);
        return;
      } else if (options.politicaDuplicatas === "rejeitar_tudo") {
        report.duplicadasIgnoradas++;
        const msg = `Questão duplicada detectada na linha ${linhaNumero} com a política 'Rejeitar Tudo'.`;
        report.erros.push({
          linha: linhaNumero,
          campo: "fingerprint_hash",
          mensagem: msg,
          motivo: msg,
        });
        return;
      }
    }

    // Questão nova e válida
    mapFingerprints.set(questao.fingerprint_hash!, questao);
    resultadoValidadas.push(questao);
    report.sucessos++;
  });

  report.inseridas = resultadoValidadas.length;
  report.sucesso = report.invalidas === 0 && (options.politicaDuplicatas !== "rejeitar_tudo" || report.duplicadasIgnoradas === 0) && resultadoValidadas.length > 0;
  report.tempoGastoMs = Math.round(performance.now() - inicio);
  return { questoesValidadas: resultadoValidadas, report };
}
