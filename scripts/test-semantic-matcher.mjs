import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  for (const line of envContent.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        process.env[trimmed.substring(0, idx).trim()] = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
      }
    }
  }
}

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function fetchAll(tableName, select = "*") {
  let all = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from(tableName)
      .select(select)
      .range(page * pageSize, (page + 1) * pageSize - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    all.push(...data);
    if (data.length < pageSize) break;
    page++;
  }
  return all;
}

function normalizeStr(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\w\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Dicionário de regras semânticas por disciplina / palavras-chave
const SEMANTIC_RULES = [
  // Português
  {
    disciplinaKeywords: ["portugues", "lingua portuguesa", "redacao", "comunicacao"],
    patterns: [
      { keywords: ["interpretacao", "compreensao", "tipologia", "genero", "textual", "leitura", "coesao", "coerencia", "paragraf", "articulacao"], targetKeyword: "interpretacao e tipologia" },
      { keywords: ["ortografia", "acentuacao", "grafia", "hifen", "alfabeto"], targetKeyword: "ortografia e acentuacao" },
      { keywords: ["classe", "morfologia", "substantiv", "adjetiv", "pronome", "verbo", "artigo", "numeral", "preposicao", "conjuncao", "adverbio", "flexao"], targetKeyword: "morfologia e classes" },
      { keywords: ["sintaxe", "oracao", "periodo", "termos", "coordenad", "subordinad", "predica", "sujeito", "objeto", "transitividade"], targetKeyword: "sintaxe do periodo" },
      { keywords: ["pontuacao", "virgula", "ponto", "dois pontos", "travessao", "aspas"], targetKeyword: "pontuacao e emprego" },
      { keywords: ["concordancia", "regencia", "crase", "verbal", "nominal"], targetKeyword: "concordancia" },
      { keywords: ["significacao", "sinonim", "antonim", "homonim", "paronim", "denotac", "conotac", "figuras de linguagem"], targetKeyword: "semantica" },
      { keywords: ["redacao oficial", "manual da presidencia", "oficio", "memorando", "pronome de tratamento"], targetKeyword: "redacao oficial" }
    ]
  },
  // Raciocínio Lógico / Matemática
  {
    disciplinaKeywords: ["logico", "matematica", "raciocinio", "estatistica"],
    patterns: [
      { keywords: ["proposic", "conectiv", "tabela verdade", "tautologia", "contradic", "contingencia", "implicac", "equivalencia"], targetKeyword: "logica proposicional" },
      { keywords: ["argument", "silogism", "validade", "premissa", "conclusao", "deduc", "induc"], targetKeyword: "estruturas logicas" },
      { keywords: ["conjunto", "venn", "intersecao", "uniao", "diagrama", "pertinencia"], targetKeyword: "diagramas logicos" },
      { keywords: ["combinatoria", "probabilidade", "arranjo", "permutac", "combinac", "fatorial", "espaco amostral"], targetKeyword: "combinatoria" },
      { keywords: ["porcentagem", "fracao", "razao", "proporcao", "regra de tres", "juros", "financeira"], targetKeyword: "matematica basica" },
      { keywords: ["funcao", "equacao", "polinomio", "geometria", "trigonometria"], targetKeyword: "funcoes e equacoes" }
    ]
  },
  // Direito Constitucional
  {
    disciplinaKeywords: ["constitucional"],
    patterns: [
      { keywords: ["principio", "fundamentais", "art 1", "art 2", "art 3", "art 4", "fundamentos", "objetivos"], targetKeyword: "principios fundamentais" },
      { keywords: ["direitos e garantias", "art 5", "individuais", "coletivos", "remedios", "habeas", "mandado", "seguranca", "sociais", "nacionalidade", "politicos", "partidos"], targetKeyword: "direitos e garantias" },
      { keywords: ["organizacao do estado", "uniao", "estados", "municipios", "distrito federal", "intervencao", "competencia"], targetKeyword: "organizacao politico" },
      { keywords: ["administracao publica", "art 37", "art 38", "art 39", "art 40", "art 41", "servidores"], targetKeyword: "administracao publica na cf" },
      { keywords: ["poder legislativo", "congresso", "camara", "senado", "processo legislativo", "emenda", "fiscalizacao", "tcu"], targetKeyword: "poder legislativo" },
      { keywords: ["poder executivo", "presidente", "atribuicoes", "responsabilidade", "ministros"], targetKeyword: "poder executivo" },
      { keywords: ["poder judiciario", "stf", "stj", "cnj", "juizes", "tribunais", "garantias do judiciario"], targetKeyword: "poder judiciario" },
      { keywords: ["funcoes essenciais", "ministerio publico", "defensoria", "advocacia", "procuradoria"], targetKeyword: "funcoes essenciais" },
      { keywords: ["seguranca publica", "art 144", "policia", "policias", "bombeiros"], targetKeyword: "seguranca publica" },
      { keywords: ["controle de constitucionalidade", "adi", "adc", "ado", "adpf", "difuso", "concentrado"], targetKeyword: "controle de constitucionalidade" }
    ]
  },
  // Direito Administrativo
  {
    disciplinaKeywords: ["administrativo"],
    patterns: [
      { keywords: ["principios", "regime juridico", "supremacia", "indisponibilidade", "limpe", "legalidade", "impessoalidade", "moralidade", "publicidade", "eficiencia"], targetKeyword: "principios expressos e implicitos" },
      { keywords: ["organizacao administrativa", "centralizacao", "descentralizacao", "desconcentracao", "autarquia", "fundacao", "empresa publica", "sociedade de economia mista", "terceiro setor"], targetKeyword: "organizacao administrativa" },
      { keywords: ["atos administrativos", "conceito", "requisitos", "elementos", "atributos", "especies", "anulacao", "revogacao", "convalidacao", "extincao"], targetKeyword: "atos administrativos" },
      { keywords: ["poderes", "poder de policia", "hierarquico", "disciplinar", "regulamentar", "vinculado", "discricionario", "abuso de poder"], targetKeyword: "poderes administrativos" },
      { keywords: ["licitacao", "licitacoes", "contratos", "14133", "8666", "dispensa", "inexigibilidade", "modalidades", "pregao"], targetKeyword: "licitacoes e contratos" },
      { keywords: ["agentes publicos", "8112", "estatuto", "cargo", "emprego", "funcao", "provimento", "vacancia", "remuneracao", "estabilidade", "pad"], targetKeyword: "agentes publicos" },
      { keywords: ["improbidade", "8429", "enriquecimento ilicito", "prejuizo ao erario", "atentado aos principios", "sancoes"], targetKeyword: "improbidade administrativa" },
      { keywords: ["responsabilidade civil", "art 37", "dano", "nexo", "culpa", "objetiva", "subjetiva", "risco administrativo", "regresso"], targetKeyword: "responsabilidade civil" },
      { keywords: ["servicos publicos", "concessao", "permissao", "autorizacao", "8987", "tarifa"], targetKeyword: "servicos publicos" },
      { keywords: ["bens publicos", "dominicais", "uso comum", "uso especial", "afetacao", "desafetacao"], targetKeyword: "bens publicos" },
      { keywords: ["controle", "administrativo", "judicial", "legislativo", "anulacao"], targetKeyword: "controle da administracao" },
      { keywords: ["processo administrativo", "9784", "recurso", "prazos"], targetKeyword: "processo administrativo" }
    ]
  },
  // Direito Penal
  {
    disciplinaKeywords: ["penal", "processual penal", "processo penal", "penitenciario"],
    patterns: [
      { keywords: ["aplicacao da lei", "tempo", "espaco", "anterioridade", "irretroatividade", "extraterritorialidade", "lugar", "tempo do crime"], targetKeyword: "aplicacao da lei penal" },
      { keywords: ["teoria do crime", "fato tipico", "conduta", "resultado", "nexo", "tipicidade", "ilicitude", "excludentes", "legitima defesa", "estado de necessidade", "estrito cumprimento", "culpabilidade", "imputabilidade"], targetKeyword: "teoria geral do crime" },
      { keywords: ["tentativa", "consumacao", "desistencia voluntaria", "arrependimento eficaz", "crime impossivel", "arrependimento posterior"], targetKeyword: "iter criminis" },
      { keywords: ["concurso de pessoas", "coautoria", "participacao"], targetKeyword: "concurso de pessoas" },
      { keywords: ["penas", "privativa de liberdade", "restritiva de direitos", "multa", "dosimetria", "extincao da punibilidade", "prescricao", "decadencia"], targetKeyword: "penas e sua aplicacao" },
      { keywords: ["crimes contra a pessoa", "homicidio", "lesao", "honra", "calunia", "difamacao", "injuria", "liberdade"], targetKeyword: "crimes contra a pessoa" },
      { keywords: ["crimes contra o patrimonio", "furto", "roubo", "extorsao", "estelionato", "apropriacao", "receptacao", "dano"], targetKeyword: "crimes contra a pessoa e o patrimonio" },
      { keywords: ["crimes contra a dignidade sexual", "estupro", "assedio", "importunacao"], targetKeyword: "crimes contra a dignidade sexual" },
      { keywords: ["crimes contra a administracao", "peculato", "concussao", "corrupcao", "prevaricacao", "desobediencia", "desacato"], targetKeyword: "crimes contra a administracao publica" },
      // Processo Penal
      { keywords: ["inquerito policial", "notitia", "instauration", "indiciamento", "arquivamento", "caracteristicas"], targetKeyword: "inquerito policial" },
      { keywords: ["acao penal", "publica incondicionada", "publica condicionada", "privada", "representacao", "queixa"], targetKeyword: "acao penal" },
      { keywords: ["jurisdicao", "competencia", "conexao", "continencia", "foro"], targetKeyword: "jurisdicao e competencia" },
      { keywords: ["prova", "provas", "exame de corpo de delito", "pericia", "interrogatorio", "confissao", "testemunhas", "reconhecimento", "busca e apreensao"], targetKeyword: "provas no processo penal" },
      { keywords: ["prisao", "flagrante", "preventiva", "temporaria", "cautelares", "liberdade provisoria", "fianca"], targetKeyword: "prisao" },
      { keywords: ["juizados especiais", "9099", "transacao", "composicao", "suspensao condicional"], targetKeyword: "juizados especiais" },
      { keywords: ["recursos", "apelacao", "rese", "embargos", "habeas corpus", "revisao criminal"], targetKeyword: "recursos" }
    ]
  },
  // Legislação Especial
  {
    disciplinaKeywords: ["legislacao especial", "legislacao extravagante", "legislacao penal especial"],
    patterns: [
      { keywords: ["drogas", "11343", "trafico", "usuario", "porte"], targetKeyword: "lei de drogas" },
      { keywords: ["armas", "desarmamento", "10826", "porte de arma", "posse de arma", "disparo"], targetKeyword: "estatuto do desarmamento" },
      { keywords: ["abuso de autoridade", "13869"], targetKeyword: "abuso de autoridade" },
      { keywords: ["tortura", "9455"], targetKeyword: "lei de tortura" },
      { keywords: ["hediondos", "8072"], targetKeyword: "crimes hediondos" },
      { keywords: ["organizacao criminosa", "12850", "orcrim", "colaboracao premiada"], targetKeyword: "organizacoes criminosas" },
      { keywords: ["maria da penha", "11340", "violencia domestica"], targetKeyword: "lei maria da penha" },
      { keywords: ["lavagem de dinheiro", "9613", "ocultacao"], targetKeyword: "lavagem de capitais" },
      { keywords: ["transito", "ctb", "9503", "infracoes", "crimes de transito"], targetKeyword: "codigo de transito" },
      { keywords: ["crianca", "adolescente", "eca", "8069"], targetKeyword: "estatuto da crianca" },
      { keywords: ["idoso", "10741", "pcd", "13146"], targetKeyword: "estatuto do idoso" },
      { keywords: ["execucao penal", "lep", "7210", "remição", "progressao", "regimes"], targetKeyword: "execucao penal" }
    ]
  },
  // Informática
  {
    disciplinaKeywords: ["informatica", "tecnologia", "computacao"],
    patterns: [
      { keywords: ["seguranca", "malware", "virus", "worm", "trojan", "ransomware", "phishing", "criptografia", "firewall", "backup", "certificacao"], targetKeyword: "seguranca da informacao" },
      { keywords: ["redes", "internet", "intranet", "protocolos", "tcp", "ip", "dns", "http", "ftp", "navegadores", "chrome", "edge", "firefox", "correio", "email"], targetKeyword: "redes de computadores" },
      { keywords: ["windows", "linux", "sistema operacional", "arquivos", "pastas", "atalhos", "permissoes"], targetKeyword: "sistemas operacionais" },
      { keywords: ["word", "excel", "powerpoint", "writer", "calc", "impress", "office", "libreoffice", "planilha", "texto"], targetKeyword: "suite de escritorio" },
      { keywords: ["nuvem", "cloud", "google drive", "onedrive", "dropbox", "saas", "paas", "iaas"], targetKeyword: "computacao em nuvem" },
      { keywords: ["hardware", "cpu", "memoria", "ram", "ssd", "disco", "perifericos"], targetKeyword: "hardware" }
    ]
  },
  // Direitos Humanos
  {
    disciplinaKeywords: ["direitos humanos"],
    patterns: [
      { keywords: ["dudh", "declaracao universal", "1948"], targetKeyword: "declaracao universal dos direitos humanos" },
      { keywords: ["pacto de sao jose", "convencao americana", "corte interamericana", "comissao interamericana"], targetKeyword: "sistema interamericano" },
      { keywords: ["teoria geral", "conceito", "evolucao", "geracoes", "dimensoes", "caracteristicas", "eficacia"], targetKeyword: "teoria geral dos direitos humanos" }
    ]
  }
];

async function runMatcher() {
  const [disciplinas, assuntos, questoes, topicos, equivs] = await Promise.all([
    fetchAll("disciplinas", "id, nome, slug"),
    fetchAll("assuntos", "id, nome, slug, disciplina_id"),
    fetchAll("questoes", "id, disciplina_id, assunto_id"),
    fetchAll("edital_topicos", "id, edital_id, disciplina_id, assunto_id"),
    fetchAll("assunto_equivalencias", "*"),
  ]);

  const discMap = new Map(disciplinas.map(d => [d.id, d]));
  const assMap = new Map(assuntos.map(a => [a.id, a]));

  const qCountByAssunto = new Map();
  for (const q of questoes) {
    if (q.assunto_id) {
      qCountByAssunto.set(q.assunto_id, (qCountByAssunto.get(q.assunto_id) || 0) + 1);
    }
  }

  const canonicalAssuntos = assuntos.filter(a => (qCountByAssunto.get(a.id) || 0) > 0);
  console.log(`Canonical Assuntos: ${canonicalAssuntos.length}`);

  // Agrupar canonical por disciplina
  const canonicalByDisc = new Map();
  for (const ca of canonicalAssuntos) {
    if (!canonicalByDisc.has(ca.disciplina_id)) canonicalByDisc.set(ca.disciplina_id, []);
    canonicalByDisc.get(ca.disciplina_id).push(ca);
  }

  const topicosSemQ = topicos.filter(t => t.assunto_id && (qCountByAssunto.get(t.assunto_id) || 0) === 0);
  console.log(`Topicos sem questoes diretas: ${topicosSemQ.length}`);

  let totalMapeados = 0;
  let totalSemMatch = 0;
  const equivalenciasNovas = [];

  for (const t of topicosSemQ) {
    const assEdital = assMap.get(t.assunto_id);
    if (!assEdital) {
      totalSemMatch++;
      continue;
    }

    const editalDisc = discMap.get(t.disciplina_id);
    const editalDiscNorm = normalizeStr(editalDisc?.nome || "");
    const assEditalNorm = normalizeStr(assEdital.nome);

    // 1. Obter candidatos da mesma disciplina ou afins
    let candidates = canonicalByDisc.get(t.disciplina_id) || [];
    if (candidates.length === 0) {
      for (const d of disciplinas) {
        const dNorm = normalizeStr(d.nome);
        if (dNorm.includes(editalDiscNorm) || editalDiscNorm.includes(dNorm)) {
          const c = canonicalByDisc.get(d.id);
          if (c && c.length > 0) {
            candidates = c;
            break;
          }
        }
      }
    }

    let matchAssunto = null;
    let confianca = "media";

    // 2. Tentar match por regras semânticas
    for (const ruleGroup of SEMANTIC_RULES) {
      const matchDisc = ruleGroup.disciplinaKeywords.some(k => editalDiscNorm.includes(k));
      if (!matchDisc) continue;

      for (const pattern of ruleGroup.patterns) {
        const matchPattern = pattern.keywords.some(k => assEditalNorm.includes(k));
        if (matchPattern) {
          // Achar canonical assunto que contém o targetKeyword
          const targetNorm = normalizeStr(pattern.targetKeyword);
          const found = canonicalAssuntos.find(ca => {
            const caDisc = discMap.get(ca.disciplina_id);
            const caDiscNorm = normalizeStr(caDisc?.nome || "");
            const caNorm = normalizeStr(ca.nome);
            const discMatches = ruleGroup.disciplinaKeywords.some(k => caDiscNorm.includes(k));
            return discMatches && (caNorm.includes(targetNorm) || targetNorm.includes(caNorm) || pattern.keywords.some(k => caNorm.includes(k)));
          });

          if (found) {
            matchAssunto = found;
            confianca = "alta";
            break;
          }
        }
      }
      if (matchAssunto) break;
    }

    // 3. Se não achou por regras semânticas, tentar overlap de tokens com candidatos
    if (!matchAssunto && candidates.length > 0) {
      let bestScore = 0;
      let bestCand = null;
      const editalTokens = assEditalNorm.split(" ").filter(tok => tok.length > 3);

      for (const cand of candidates) {
        const candNorm = normalizeStr(cand.nome);
        if (candNorm.includes(assEditalNorm) || assEditalNorm.includes(candNorm)) {
          bestCand = cand;
          bestScore = 90;
          break;
        }

        const candTokens = candNorm.split(" ").filter(tok => tok.length > 3);
        let common = 0;
        for (const tok of editalTokens) {
          if (candTokens.includes(tok)) common++;
        }
        const score = common > 0 ? (common / Math.max(editalTokens.length, candTokens.length)) * 100 : 0;
        if (score > bestScore && score >= 20) {
          bestScore = score;
          bestCand = cand;
        }
      }

      if (bestCand && bestScore >= 20) {
        matchAssunto = bestCand;
        confianca = bestScore >= 70 ? "alta" : "media";
      }
    }

    if (matchAssunto) {
      totalMapeados++;
      equivalenciasNovas.push({
        assunto_edital_id: t.assunto_id,
        assunto_questao_id: matchAssunto.id,
        confianca,
        edital_nome: assEdital.nome,
        canonical_nome: matchAssunto.nome,
        disciplina: editalDisc?.nome
      });
    } else {
      totalSemMatch++;
    }
  }

  console.log(`\n=== RESULTADO DO MATCHER SEMÂNTICO ===`);
  console.log(`Total Tópicos Mapeados para Assunto Canônico: ${totalMapeados} (${Math.round((totalMapeados / topicosSemQ.length) * 100)}%)`);
  console.log(`Total Restante sem Match Semântico (cairão no Tier 3 - Fallback da Disciplina): ${totalSemMatch}`);

  console.log(`\nAmostra de 25 novas equivalências:`);
  console.table(equivalenciasNovas.slice(0, 25).map(e => ({
    disciplina: e.disciplina,
    topicoEdital: e.edital_nome.slice(0, 40),
    canonicoComQuestoes: e.canonical_nome.slice(0, 40),
    confianca: e.confianca
  })));
}

runMatcher().catch(console.error);
