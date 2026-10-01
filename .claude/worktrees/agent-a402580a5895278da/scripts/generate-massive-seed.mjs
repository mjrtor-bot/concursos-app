import fs from "fs";
import path from "path";
import crypto from "crypto";

// Funções canônicas de fingerprint
function normalizarTextoCanonico(texto) {
  if (!texto) return "";
  return texto
    .replace(/<[^>]*>/g, " ")
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\r\n\t]+/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function gerarFingerprint(input) {
  const enunciadoNorm = normalizarTextoCanonico(input.enunciado);
  const bancaNorm = normalizarTextoCanonico(input.banca || "");
  const orgaoNorm = normalizarTextoCanonico(input.orgao || "");
  const anoStr = String(input.ano || "");
  const tipoStr = input.tipo;

  let alternativasNorm = "";
  if (input.tipo === "multipla_escolha" && input.alternativas && input.alternativas.length > 0) {
    const sortedAlts = input.alternativas
      .map((a) => normalizarTextoCanonico(a.texto))
      .filter(Boolean)
      .sort();
    alternativasNorm = sortedAlts.join("||");
  } else {
    alternativasNorm = "ce_binary";
  }

  const payload = [
    `banca:${bancaNorm}`,
    `ano:${anoStr}`,
    `orgao:${orgaoNorm}`,
    `tipo:${tipoStr}`,
    `enunciado:${enunciadoNorm}`,
    `alts:${alternativasNorm}`,
  ].join(":::");

  return crypto.createHash("sha256").update(payload, "utf8").digest("hex");
}

function sqlEscape(str) {
  if (str === null || str === undefined) return "NULL";
  return `'${String(str).replace(/'/g, "''")}'`;
}

// ── TAXONOMIA COMPLETA DE DISCIPLINAS ──────────────────────────────────────────
const DISCIPLINAS = [
  { id: "disc-portugues", nome: "Língua Portuguesa", slug: "lingua-portuguesa", descricao: "Interpretação de textos, gramática, concordância, regência, crase e pontuação.", icone: "BookOpen", cor: "#3b82f6", ordem: 1 },
  { id: "disc-direito-constitucional", nome: "Direito Constitucional", slug: "direito-constitucional", descricao: "Direitos fundamentais, organização do Estado, Poderes e controle de constitucionalidade.", icone: "Scale", cor: "#8b5cf6", ordem: 2 },
  { id: "disc-direito-administrativo", nome: "Direito Administrativo", slug: "direito-administrativo", descricao: "Princípios, atos administrativos, Lei 14.133/21, poderes e responsabilidade civil.", icone: "Building2", cor: "#ec4899", ordem: 3 },
  { id: "disc-direito-penal", nome: "Direito Penal", slug: "direito-penal", descricao: "Teoria do crime, tipicidade, culpabilidade, crimes contra a pessoa, patrimônio e administração pública.", icone: "ShieldAlert", cor: "#f59e0b", ordem: 4 },
  { id: "disc-direito-processual-penal", nome: "Direito Processual Penal", slug: "direito-processual-penal", descricao: "Inquérito policial, ação penal, provas, prisões cautelares, competência e recursos.", icone: "FileCheck2", cor: "#e11d48", ordem: 5 },
  { id: "disc-legislacao-especial", nome: "Legislação Especial", slug: "legislacao-especial", descricao: "Lei de Abuso de Autoridade, Drogas, Desarmamento, Crimes Hediondos e Maria da Penha.", icone: "Gavel", cor: "#d97706", ordem: 6 },
  { id: "disc-direitos-humanos", nome: "Direitos Humanos", slug: "direitos-humanos", descricao: "DUDH, Pacto de San José da Costa Rica, tratados internacionais e garantias fundamentais.", icone: "HeartHandshake", cor: "#9333ea", ordem: 7 },
  { id: "disc-informatica", nome: "Informática e Tecnologia", slug: "informatica-ti", descricao: "Segurança da informação, redes, computação em nuvem, bancos de dados e sistemas operacionais.", icone: "Laptop", cor: "#06b6d4", ordem: 8 },
  { id: "disc-rlm", nome: "Raciocínio Lógico-Matemático", slug: "raciocinio-logico", descricao: "Lógica proposicional, equivalências, diagramas lógicos, análise combinatória e probabilidade.", icone: "BrainCircuit", cor: "#10b981", ordem: 9 },
  { id: "disc-administracao-publica", nome: "Administração Pública", slug: "administracao-publica", descricao: "Gestão por processos, governança pública, planejamento estratégico e orçamento público.", icone: "Briefcase", cor: "#0ea5e9", ordem: 10 },
  { id: "disc-contabilidade", nome: "Contabilidade Geral e Pública", slug: "contabilidade", descricao: "Balanço patrimonial, DRE, lançamentos contábeis, regimes contábeis e CASP.", icone: "Calculator", cor: "#14b8a6", ordem: 11 },
  { id: "disc-atualidades", nome: "Atualidades e Realidade Brasileira", slug: "atualidades-brasil", descricao: "Desenvolvimento sustentável, geopolítica, economia brasileira, sociedade e cidadania.", icone: "Globe", cor: "#84cc16", ordem: 12 },
  { id: "disc-etica", nome: "Ética no Serviço Público", slug: "etica-servico-publico", descricao: "Decreto nº 1.171/1994, Lei 8.112/90, deveres e vedações dos agentes públicos.", icone: "Users", cor: "#4ade80", ordem: 13 },
  { id: "disc-direito-previdenciario", nome: "Direito Previdenciário", slug: "direito-previdenciario", descricao: "Seguridade social, segurados do RGPS, benefícios em espécie e custeio.", icone: "Shield", cor: "#6366f1", ordem: 14 },
  { id: "disc-direito-tributario", nome: "Direito Tributário", slug: "direito-tributario", descricao: "Sistema Tributário Nacional, competências, limitações ao poder de tributar e CTN.", icone: "Coins", cor: "#f97316", ordem: 15 },
];

const ASSUNTOS = [
  // Português
  { id: "ass-sintaxe", disciplina_id: "disc-portugues", nome: "Sintaxe do Período e Orações", slug: "sintaxe-periodo", ordem: 1 },
  { id: "ass-concordancia", disciplina_id: "disc-portugues", nome: "Concordância Verbal e Nominal", slug: "concordancia", ordem: 2 },
  { id: "ass-regencia-crase", disciplina_id: "disc-portugues", nome: "Regência e Crase", slug: "regencia-crase", ordem: 3 },
  { id: "ass-interpretacao", disciplina_id: "disc-portugues", nome: "Interpretação e Tipologia Textual", slug: "interpretacao-texto", ordem: 4 },
  { id: "ass-pontuacao", disciplina_id: "disc-portugues", nome: "Pontuação e Emprego dos Sinais", slug: "pontuacao", ordem: 5 },
  { id: "ass-ortografia-acentuacao", disciplina_id: "disc-portugues", nome: "Ortografia e Acentuação Gráfica", slug: "ortografia-acentuacao", ordem: 6 },
  { id: "ass-morfologia-classes", disciplina_id: "disc-portugues", nome: "Morfologia e Classes de Palavras", slug: "morfologia-classes", ordem: 7 },

  // Constitucional
  { id: "ass-direitos-fundamentais", disciplina_id: "disc-direito-constitucional", nome: "Direitos e Garantias Fundamentais (Art. 5º)", slug: "artigo-5-cf", ordem: 1 },
  { id: "ass-organizacao-estado", disciplina_id: "disc-direito-constitucional", nome: "Organização Político-Administrativa do Estado", slug: "organizacao-estado", ordem: 2 },
  { id: "ass-poder-executivo", disciplina_id: "disc-direito-constitucional", nome: "Poder Executivo e Presidência da República", slug: "poder-executivo", ordem: 3 },
  { id: "ass-poder-legislativo", disciplina_id: "disc-direito-constitucional", nome: "Poder Legislativo e Processo Legislativo", slug: "poder-legislativo", ordem: 4 },
  { id: "ass-poder-judiciario", disciplina_id: "disc-direito-constitucional", nome: "Poder Judiciário e Funções Essenciais à Justiça", slug: "poder-judiciario", ordem: 5 },
  { id: "ass-controle-constitucionalidade", disciplina_id: "disc-direito-constitucional", nome: "Controle de Constitucionalidade", slug: "controle-constitucionalidade", ordem: 6 },
  { id: "ass-seguranca-publica", disciplina_id: "disc-direito-constitucional", nome: "Segurança Pública (Art. 144)", slug: "seguranca-publica", ordem: 7 },

  // Administrativo
  { id: "ass-principios-adm", disciplina_id: "disc-direito-administrativo", nome: "Princípios da Administração Pública (LIMPE e Implícitos)", slug: "principios-administracao", ordem: 1 },
  { id: "ass-atos-administrativos", disciplina_id: "disc-direito-administrativo", nome: "Atos Administrativos: Elementos, Atributos e Extinção", slug: "atos-administrativos", ordem: 2 },
  { id: "ass-licitacoes-14133", disciplina_id: "disc-direito-administrativo", nome: "Licitações e Contratos (Nova Lei 14.133/2021)", slug: "licitacoes-14133", ordem: 3 },
  { id: "ass-agentes-publicos", disciplina_id: "disc-direito-administrativo", nome: "Agentes Públicos e Regime Jurídico (Lei 8.112/90)", slug: "agentes-publicos-8112", ordem: 4 },
  { id: "ass-improbidade", disciplina_id: "disc-direito-administrativo", nome: "Improbidade Administrativa (Lei 8.429/92 alterada)", slug: "improbidade-administrativa", ordem: 5 },
  { id: "ass-responsabilidade-civil", disciplina_id: "disc-direito-administrativo", nome: "Responsabilidade Civil do Estado", slug: "responsabilidade-civil-estado", ordem: 6 },
  { id: "ass-poderes-adm", disciplina_id: "disc-direito-administrativo", nome: "Poderes Administrativos (Hierárquico, Disciplinar, Polícia)", slug: "poderes-administrativos", ordem: 7 },

  // Penal
  { id: "ass-teoria-crime", disciplina_id: "disc-direito-penal", nome: "Teoria do Crime: Tipicidade, Ilicitude e Culpabilidade", slug: "teoria-crime", ordem: 1 },
  { id: "ass-crimes-adm-pub", disciplina_id: "disc-direito-penal", nome: "Crimes Contra a Administração Pública", slug: "crimes-funcionario-publico", ordem: 2 },
  { id: "ass-crimes-pessoa-patrimonio", disciplina_id: "disc-direito-penal", nome: "Crimes Contra a Pessoa e o Patrimônio", slug: "crimes-pessoa-patrimonio", ordem: 3 },
  { id: "ass-aplicacao-lei-penal", disciplina_id: "disc-direito-penal", nome: "Aplicação da Lei Penal no Tempo e no Espaço", slug: "aplicacao-lei-penal", ordem: 4 },

  // Processo Penal
  { id: "ass-inquerito-policial", disciplina_id: "disc-direito-processual-penal", nome: "Inquérito Policial: Características e Instauração", slug: "inquerito-policial", ordem: 1 },
  { id: "ass-provas-processo", disciplina_id: "disc-direito-processual-penal", nome: "Provas no Processo Penal e Cadeia de Custódia", slug: "provas-processo-penal", ordem: 2 },
  { id: "ass-prisoes-cautelares", disciplina_id: "disc-direito-processual-penal", nome: "Prisões Cautelares, Flagrante e Liberdade Provisória", slug: "prisoes-cautelares", ordem: 3 },
  { id: "ass-acao-penal", disciplina_id: "disc-direito-processual-penal", nome: "Ação Penal Pública e Privada", slug: "acao-penal", ordem: 4 },

  // Legislação Especial
  { id: "ass-abuso-autoridade", disciplina_id: "disc-legislacao-especial", nome: "Lei de Abuso de Autoridade (Lei nº 13.869/2019)", slug: "abuso-autoridade-13869", ordem: 1 },
  { id: "ass-lei-drogas", disciplina_id: "disc-legislacao-especial", nome: "Lei de Drogas (Lei nº 11.343/2006)", slug: "lei-drogas-11343", ordem: 2 },
  { id: "ass-estatuto-desarmamento", disciplina_id: "disc-legislacao-especial", nome: "Estatuto do Desarmamento (Lei nº 10.826/2003)", slug: "estatuto-desarmamento-10826", ordem: 3 },
  { id: "ass-maria-da-penha", disciplina_id: "disc-legislacao-especial", nome: "Lei Maria da Penha (Lei nº 11.340/2006)", slug: "lei-maria-da-penha", ordem: 4 },

  // Direitos Humanos
  { id: "ass-dudh", disciplina_id: "disc-direitos-humanos", nome: "Declaração Universal dos Direitos Humanos (1948)", slug: "dudh-1948", ordem: 1 },
  { id: "ass-pacto-sanjose", disciplina_id: "disc-direitos-humanos", nome: "Pacto de San José da Costa Rica (CADH)", slug: "pacto-san-jose", ordem: 2 },
  { id: "ass-evolucao-dh", disciplina_id: "disc-direitos-humanos", nome: "Gerações e Dimensões dos Direitos Humanos", slug: "geracoes-direitos-humanos", ordem: 3 },

  // Informática
  { id: "ass-seguranca-info", disciplina_id: "disc-informatica", nome: "Segurança da Informação, Criptografia e Malware", slug: "seguranca-informacao", ordem: 1 },
  { id: "ass-redes-internet", disciplina_id: "disc-informatica", nome: "Redes de Computadores, Protocolos e Nuvem", slug: "redes-nuvem", ordem: 2 },
  { id: "ass-bancos-dados", disciplina_id: "disc-informatica", nome: "Bancos de Dados Relacionais e SQL", slug: "bancos-dados-sql", ordem: 3 },
  { id: "ass-sistemas-operacionais", disciplina_id: "disc-informatica", nome: "Sistemas Operacionais (Linux e Windows)", slug: "sistemas-operacionais", ordem: 4 },
  { id: "ass-ferramentas-escritorio", disciplina_id: "disc-informatica", nome: "Suítes de Escritório (Calc/Excel, Writer/Word)", slug: "ferramentas-escritorio", ordem: 5 },

  // RLM
  { id: "ass-proposicoes-logicas", disciplina_id: "disc-rlm", nome: "Lógica Proposicional e Conectivos", slug: "logica-proposicional", ordem: 1 },
  { id: "ass-equivalencias-negacoes", disciplina_id: "disc-rlm", nome: "Equivalências Lógicas e Negação de Proposições", slug: "equivalencias-negacoes", ordem: 2 },
  { id: "ass-analise-combinatoria", disciplina_id: "disc-rlm", nome: "Análise Combinatória e Princípio da Contagem", slug: "analise-combinatoria", ordem: 3 },
  { id: "ass-probabilidade", disciplina_id: "disc-rlm", nome: "Probabilidade e Estatística Básica", slug: "probabilidade", ordem: 4 },
  { id: "ass-diagramas-logicos", disciplina_id: "disc-rlm", nome: "Diagramas Lógicos e Teoria dos Conjuntos", slug: "diagramas-logicos", ordem: 5 },

  // Administração Pública
  { id: "ass-gestao-processos", disciplina_id: "disc-administracao-publica", nome: "Gestão por Processos e Indicadores de Desempenho", slug: "gestao-processos", ordem: 1 },
  { id: "ass-governanca-publica", disciplina_id: "disc-administracao-publica", nome: "Governança Pública, Transparência e Accountability", slug: "governanca-publica", ordem: 2 },
  { id: "ass-planejamento-estrategico", disciplina_id: "disc-administracao-publica", nome: "Planejamento Estratégico e Gestão de Riscos", slug: "planejamento-estrategico", ordem: 3 },
  { id: "ass-orcamento-publico", disciplina_id: "disc-administracao-publica", nome: "Orçamento Público (PPA, LDO e LOA)", slug: "orcamento-publico", ordem: 4 },

  // Contabilidade
  { id: "ass-balanco-patrimonial", disciplina_id: "disc-contabilidade", nome: "Balanço Patrimonial e Estrutura das Contas", slug: "balanco-patrimonial", ordem: 1 },
  { id: "ass-dre", disciplina_id: "disc-contabilidade", nome: "Demonstração do Resultado do Exercício (DRE)", slug: "dre-contabilidade", ordem: 2 },
  { id: "ass-regimes-contabeis", disciplina_id: "disc-contabilidade", nome: "Regime de Competência e Regime de Caixa", slug: "regimes-contabeis", ordem: 3 },
  { id: "ass-casp", disciplina_id: "disc-contabilidade", nome: "Contabilidade Aplicada ao Setor Público (CASP)", slug: "casp-setor-publico", ordem: 4 },

  // Atualidades
  { id: "ass-sustentabilidade-esg", disciplina_id: "disc-atualidades", nome: "Meio Ambiente, Mudanças Climáticas e Sustentabilidade", slug: "sustentabilidade-clima", ordem: 1 },
  { id: "ass-geopolitica-economia", disciplina_id: "disc-atualidades", nome: "Geopolítica, Comércio Global e Economia Brasileira", slug: "geopolitica-economia", ordem: 2 },
  { id: "ass-tecnologia-sociedade", disciplina_id: "disc-atualidades", nome: "Transformação Digital, IA e Sociedade da Informação", slug: "tecnologia-sociedade", ordem: 3 },

  // Ética
  { id: "ass-decreto-1171", disciplina_id: "disc-etica", nome: "Código de Ética Profissional do Servidor Civil (Dec. 1.171/94)", slug: "decreto-1171-94", ordem: 1 },
  { id: "ass-comissoes-etica", disciplina_id: "disc-etica", nome: "Comissões de Ética e Processo Ético", slug: "comissoes-etica", ordem: 2 },

  // Previdenciário
  { id: "ass-beneficios-rgps", disciplina_id: "disc-direito-previdenciario", nome: "Benefícios Previdenciários do RGPS", slug: "beneficios-rgps", ordem: 1 },
  { id: "ass-segurados-rgps", disciplina_id: "disc-direito-previdenciario", nome: "Segurados Obrigatórios e Facultativos do RGPS", slug: "segurados-rgps", ordem: 2 },

  // Tributário
  { id: "ass-sistema-tributario", disciplina_id: "disc-direito-tributario", nome: "Espécies Tributárias e Princípios Constitucionais Tributários", slug: "especies-tributarias", ordem: 1 },
  { id: "ass-obrigacao-tributaria", disciplina_id: "disc-direito-tributario", nome: "Obrigação, Crédito e Lançamento Tributário", slug: "obrigacao-tributaria", ordem: 2 },
];

const BANCAS = [
  { id: "banca-cebraspe", nome: "Cebraspe (Centro Brasileiro de Pesquisa em Avaliação e Seleção e de Promoção de Eventos)", sigla: "Cebraspe", site_oficial: "https://www.cebraspe.org.br" },
  { id: "banca-fgv", nome: "Fundação Getulio Vargas", sigla: "FGV", site_oficial: "https://conhecimento.fgv.br/concursos" },
  { id: "banca-fcc", nome: "Fundação Carlos Chagas", sigla: "FCC", site_oficial: "https://www.concursosfcc.com.br" },
  { id: "banca-cesgranrio", nome: "Fundação Cesgranrio", sigla: "Cesgranrio", site_oficial: "https://www.cesgranrio.org.br" },
  { id: "banca-vunesp", nome: "Fundação Vunesp", sigla: "Vunesp", site_oficial: "https://www.vunesp.com.br" },
  { id: "banca-ibfc", nome: "Instituto Brasileiro de Formação e Capacitação", sigla: "IBFC", site_oficial: "https://www.ibfc.org.br" },
  { id: "banca-quadrix", nome: "Instituto Quadrix", sigla: "Quadrix", site_oficial: "https://www.quadrix.org.br" },
  { id: "banca-instituto-aocp", nome: "Instituto AOCP", sigla: "Instituto AOCP", site_oficial: "https://www.institutoaocp.org.br" },
  { id: "banca-selecon", nome: "Instituto Selecon", sigla: "Selecon", site_oficial: "https://www.selecon.org.br" },
  { id: "banca-iades", nome: "Instituto Americano de Desenvolvimento", sigla: "IADES", site_oficial: "https://www.iades.com.br" },
];

const ORGAOS = [
  { id: "orgao-cnu-mgi", nome: "Ministério da Gestão e da Inovação em Serviços Públicos (CNU)", sigla: "MGI / CNU", esfera: "federal", uf: null },
  { id: "orgao-receita-federal", nome: "Secretaria Especial da Receita Federal do Brasil", sigla: "RFB", esfera: "federal", uf: null },
  { id: "orgao-pf", nome: "Departamento de Polícia Federal", sigla: "PF", esfera: "federal", uf: null },
  { id: "orgao-prf", nome: "Polícia Rodoviária Federal", sigla: "PRF", esfera: "federal", uf: null },
  { id: "orgao-tjsp", nome: "Tribunal de Justiça do Estado de São Paulo", sigla: "TJ-SP", esfera: "estadual", uf: "SP" },
  { id: "orgao-tcu", nome: "Tribunal de Contas da União", sigla: "TCU", esfera: "federal", uf: null },
  { id: "orgao-inss", nome: "Instituto Nacional do Seguro Social", sigla: "INSS", esfera: "federal", uf: null },
  { id: "orgao-banco-brasil", nome: "Banco do Brasil S.A.", sigla: "BB", esfera: "federal", uf: null },
  { id: "orgao-caixa", nome: "Caixa Econômica Federal", sigla: "CEF", esfera: "federal", uf: null },
  { id: "orgao-cgu", nome: "Controladoria-Geral da União", sigla: "CGU", esfera: "federal", uf: null },
  { id: "orgao-mpu", nome: "Ministério Público da União", sigla: "MPU", esfera: "federal", uf: null },
  { id: "orgao-bacen", nome: "Banco Central do Brasil", sigla: "BACEN", esfera: "federal", uf: null },
  { id: "orgao-anvisa", nome: "Agência Nacional de Vigilância Sanitária", sigla: "ANVISA", esfera: "federal", uf: null },
  { id: "orgao-stf", nome: "Supremo Tribunal Federal", sigla: "STF", esfera: "federal", uf: null },
  { id: "orgao-stj", nome: "Superior Tribunal de Justiça", sigla: "STJ", esfera: "federal", uf: null },
];

const CARGOS_BASE = [
  { id: "cargo-auditor-fiscal", nome: "Auditor-Fiscal da Receita Federal", nivel_escolaridade: "superior", area_atuacao: "Fiscal e Tributária" },
  { id: "cargo-analista-adm", nome: "Analista em Gestão Pública / EPPGG", nivel_escolaridade: "superior", area_atuacao: "Gestão e Políticas Públicas" },
  { id: "cargo-agente-pf", nome: "Agente de Polícia Federal", nivel_escolaridade: "superior", area_atuacao: "Policial e Segurança Pública" },
  { id: "cargo-escrivao-pf", nome: "Escrivão de Polícia Federal", nivel_escolaridade: "superior", area_atuacao: "Policial e Procedimentos" },
  { id: "cargo-prf-policial", nome: "Policial Rodoviário Federal", nivel_escolaridade: "superior", area_atuacao: "Policial e Trânsito" },
  { id: "cargo-tjsp-escrevente", nome: "Escrevente Técnico Judiciário", nivel_escolaridade: "medio", area_atuacao: "Judiciária e Administrativa" },
  { id: "cargo-inss-tecnico", nome: "Técnico do Seguro Social", nivel_escolaridade: "medio", area_atuacao: "Previdenciária" },
  { id: "cargo-ti-analista", nome: "Analista de Tecnologia da Informação", nivel_escolaridade: "superior", area_atuacao: "Tecnologia da Informação" },
  { id: "cargo-escriturario-bb", nome: "Escriturário / Agente Comercial", nivel_escolaridade: "medio", area_atuacao: "Bancária" },
  { id: "cargo-auditor-cgu", nome: "Auditor Federal de Finanças e Controle", nivel_escolaridade: "superior", area_atuacao: "Controle e Auditoria" },
  { id: "cargo-analista-mpu", nome: "Analista do MPU - Área Judiciária", nivel_escolaridade: "superior", area_atuacao: "Judiciária" },
];

const PROVAS = [
  { id: "prova-cnu-2024-bloco8", banca_id: "banca-cesgranrio", orgao_id: "orgao-cnu-mgi", cargo_base_id: "cargo-analista-adm", ano: 2024, nome_concurso: "Concurso Público Nacional Unificado - Bloco 8", caderno_tipo: "Geral", edital_numero: "08/2024", data_aplicacao: "2024-08-18" },
  { id: "prova-rfb-2023-auditor", banca_id: "banca-fgv", orgao_id: "orgao-receita-federal", cargo_base_id: "cargo-auditor-fiscal", ano: 2023, nome_concurso: "Concurso Público para Auditor-Fiscal da Receita Federal", caderno_tipo: "Tipo 1 - Branca", edital_numero: "01/2022", data_aplicacao: "2023-03-19" },
  { id: "prova-pf-2021-agente", banca_id: "banca-cebraspe", orgao_id: "orgao-pf", cargo_base_id: "cargo-agente-pf", ano: 2021, nome_concurso: "Concurso Público para Agente de Polícia Federal", caderno_tipo: "Único", edital_numero: "01/2021", data_aplicacao: "2021-05-23" },
  { id: "prova-prf-2021-policial", banca_id: "banca-cebraspe", orgao_id: "orgao-prf", cargo_base_id: "cargo-prf-policial", ano: 2021, nome_concurso: "Concurso Público para Policial Rodoviário Federal", caderno_tipo: "Único", edital_numero: "01/2021", data_aplicacao: "2021-05-09" },
  { id: "prova-tjsp-2024-escrevente", banca_id: "banca-vunesp", orgao_id: "orgao-tjsp", cargo_base_id: "cargo-tjsp-escrevente", ano: 2024, nome_concurso: "Concurso TJ-SP Escrevente Técnico Judiciário", caderno_tipo: "Versão 1", edital_numero: "01/2024", data_aplicacao: "2024-09-08" },
  { id: "prova-inss-2022-tecnico", banca_id: "banca-cebraspe", orgao_id: "orgao-inss", cargo_base_id: "cargo-inss-tecnico", ano: 2022, nome_concurso: "Concurso Público INSS Técnico do Seguro Social", caderno_tipo: "Único", edital_numero: "01/2022", data_aplicacao: "2022-11-27" },
  { id: "prova-tcu-2022-auditor", banca_id: "banca-fgv", orgao_id: "orgao-tcu", cargo_base_id: "cargo-auditor-cgu", ano: 2022, nome_concurso: "Concurso Público TCU Auditor Federal", caderno_tipo: "Caderno 1", edital_numero: "01/2021", data_aplicacao: "2022-03-13" },
  { id: "prova-cgu-2022-auditor", banca_id: "banca-fgv", orgao_id: "orgao-cgu", cargo_base_id: "cargo-auditor-cgu", ano: 2022, nome_concurso: "Concurso Público CGU Auditor Federal", caderno_tipo: "Tipo A", edital_numero: "01/2021", data_aplicacao: "2022-03-20" },
  { id: "prova-bb-2023-agente", banca_id: "banca-cesgranrio", orgao_id: "orgao-banco-brasil", cargo_base_id: "cargo-escriturario-bb", ano: 2023, nome_concurso: "Concurso Público Banco do Brasil Escriturário", caderno_tipo: "Prova 1", edital_numero: "01/2022", data_aplicacao: "2023-04-23" },
  { id: "prova-caixa-2024-tecnico", banca_id: "banca-cesgranrio", orgao_id: "orgao-caixa", cargo_base_id: "cargo-escriturario-bb", ano: 2024, nome_concurso: "Concurso Caixa Econômica Federal Técnico Bancário", caderno_tipo: "Prova A", edital_numero: "01/2024", data_aplicacao: "2024-05-26" },
];

// ── BANCO DE TEMPLATES E QUESTÕES ESPECÍFICAS DE ALTA FIDELIDADE ──────────────
// Vamos carregar e gerar um acervo de 1.050 questões rigorosas cobrindo cada assunto.
console.log("Iniciando gerador de 1.050+ questões com validação rigorosa de gabarito e integridade...");

// Helper para selecionar item determinístico
function pick(arr, index) {
  return arr[index % arr.length];
}

// Importar gerador especializado ou executar geração
import { gerarTodasQuestoes } from "./question-generator-definitions.mjs";

const todasQuestoes = gerarTodasQuestoes({
  DISCIPLINAS,
  ASSUNTOS,
  BANCAS,
  ORGAOS,
  CARGOS_BASE,
  PROVAS,
  gerarFingerprint,
});

console.log(`\n=== RELATÓRIO DO MOTOR DE GERAÇÃO ===`);
console.log(`Total de questões geradas: ${todasQuestoes.length}`);

// Validar todas as questões antes de exportar
let invalidas = 0;
let duplicatas = 0;
const hashSet = new Set();

for (let i = 0; i < todasQuestoes.length; i++) {
  const q = todasQuestoes[i];
  if (!q.enunciado || q.enunciado.length < 15) {
    console.error(`Erro na questão ${q.id}: Enunciado muito curto ou vazio.`);
    invalidas++;
  }
  if (!q.explicacao || q.explicacao.length < 10) {
    console.error(`Erro na questão ${q.id}: Explicação ausente.`);
    invalidas++;
  }
  if (q.tipo === "multipla_escolha") {
    const corretas = q.alternativas.filter((a) => a.correta);
    if (corretas.length !== 1) {
      console.error(`Erro na questão ${q.id}: Esperado exatamente 1 alternativa correta, encontrado ${corretas.length}`);
      invalidas++;
    }
  } else if (q.tipo === "certo_errado") {
    const corretas = q.alternativas.filter((a) => a.correta);
    if (corretas.length !== 1) {
      console.error(`Erro na questão C/E ${q.id}: Esperado 1 correta, encontrado ${corretas.length}`);
      invalidas++;
    }
  }

  if (hashSet.has(q.fingerprint_hash)) {
    console.warn(`Duplicata detectada: Hash ${q.fingerprint_hash} (Questão ${q.id})`);
    duplicatas++;
  } else {
    hashSet.add(q.fingerprint_hash);
  }
}

console.log(`Validação: ${invalidas} inválidas | ${duplicatas} duplicatas | ${hashSet.size} únicas.`);

// 1. Salvar JSON Completo para uso pelo MockData e DataService
const JSON_PATH = path.join(process.cwd(), "src", "data", "banco_questoes_1000.json");
fs.writeFileSync(JSON_PATH, JSON.stringify(todasQuestoes, null, 2), "utf8");
console.log(`Arquivo JSON gerado com sucesso: ${JSON_PATH}`);

// 2. Gerar SQL Seed idempotente para Supabase
const SQL_PATH = path.join(process.cwd(), "supabase", "seed_questoes_v2.sql");
let sqlContent = `-- SEED OFICIAL BANCO DE QUESTÕES (1050+ QUESTÕES)
-- Gerado automaticamente com hashes SHA-256 e integridade relacional 3FN

BEGIN;

-- 1. Inserir Disciplinas
INSERT INTO public.disciplinas (id, nome, slug, descricao, icone, cor, ordem) VALUES
${DISCIPLINAS.map((d) => `(${sqlEscape(d.id)}, ${sqlEscape(d.nome)}, ${sqlEscape(d.slug)}, ${sqlEscape(d.descricao)}, ${sqlEscape(d.icone)}, ${sqlEscape(d.cor)}, ${d.ordem})`).join(",\n")}
ON CONFLICT (id) DO UPDATE SET
  nome = EXCLUDED.nome,
  descricao = EXCLUDED.descricao,
  icone = EXCLUDED.icone,
  cor = EXCLUDED.cor,
  ordem = EXCLUDED.ordem;

-- 2. Inserir Assuntos
INSERT INTO public.assuntos (id, disciplina_id, nome, slug, ordem) VALUES
${ASSUNTOS.map((a) => `(${sqlEscape(a.id)}, ${sqlEscape(a.disciplina_id)}, ${sqlEscape(a.nome)}, ${sqlEscape(a.slug)}, ${a.ordem})`).join(",\n")}
ON CONFLICT (id) DO UPDATE SET
  nome = EXCLUDED.nome,
  ordem = EXCLUDED.ordem;

-- 3. Inserir Bancas
INSERT INTO public.bancas (id, nome, sigla, site_oficial) VALUES
${BANCAS.map((b) => `(${sqlEscape(b.id)}, ${sqlEscape(b.nome)}, ${sqlEscape(b.sigla)}, ${sqlEscape(b.site_oficial)})`).join(",\n")}
ON CONFLICT (id) DO UPDATE SET
  nome = EXCLUDED.nome,
  site_oficial = EXCLUDED.site_oficial;

-- 4. Inserir Órgãos
INSERT INTO public.orgaos (id, nome, sigla, esfera, uf) VALUES
${ORGAOS.map((o) => `(${sqlEscape(o.id)}, ${sqlEscape(o.nome)}, ${sqlEscape(o.sigla)}, ${sqlEscape(o.esfera)}, ${sqlEscape(o.uf)})`).join(",\n")}
ON CONFLICT (id) DO UPDATE SET
  nome = EXCLUDED.nome,
  esfera = EXCLUDED.esfera;

-- 5. Inserir Cargos Base
INSERT INTO public.cargos_base (id, nome, nivel_escolaridade, area_atuacao) VALUES
${CARGOS_BASE.map((c) => `(${sqlEscape(c.id)}, ${sqlEscape(c.nome)}, ${sqlEscape(c.nivel_escolaridade)}, ${sqlEscape(c.area_atuacao)})`).join(",\n")}
ON CONFLICT (id) DO UPDATE SET
  nivel_escolaridade = EXCLUDED.nivel_escolaridade;

-- 6. Inserir Provas
INSERT INTO public.provas (id, banca_id, orgao_id, cargo_base_id, ano, nome_concurso, caderno_tipo, edital_numero, data_aplicacao) VALUES
${PROVAS.map((p) => `(${sqlEscape(p.id)}, ${sqlEscape(p.banca_id)}, ${sqlEscape(p.orgao_id)}, ${sqlEscape(p.cargo_base_id)}, ${p.ano}, ${sqlEscape(p.nome_concurso)}, ${sqlEscape(p.caderno_tipo)}, ${sqlEscape(p.edital_numero)}, ${sqlEscape(p.data_aplicacao)})`).join(",\n")}
ON CONFLICT (id) DO UPDATE SET
  nome_concurso = EXCLUDED.nome_concurso;

-- 7. Inserir Questões em Lotes
`;

// Dividir questões e alternativas em chunks para inserção limpa
const questaoChunks = [];
const CHUNK_SIZE = 100;
for (let i = 0; i < todasQuestoes.length; i += CHUNK_SIZE) {
  questaoChunks.push(todasQuestoes.slice(i, i + CHUNK_SIZE));
}

questaoChunks.forEach((chunk, chunkIdx) => {
  sqlContent += `\n-- Lote de Questões #${chunkIdx + 1}\n`;
  sqlContent += `INSERT INTO public.questoes (id, disciplina_id, assunto_id, banca_id, orgao_id, cargo_id, prova_id, ano, tipo, dificuldade, enunciado, texto_apoio, explicacao, is_autoral_ia, modelo_ia, prompt_versao, revisada_por_especialista, anulada, desatualizada, fingerprint_hash) VALUES\n`;

  const values = chunk.map((q) => {
    return `(${sqlEscape(q.id)}, ${sqlEscape(q.disciplina_id)}, ${sqlEscape(q.assunto_id)}, ${sqlEscape(q.banca_id)}, ${sqlEscape(q.orgao_id)}, ${sqlEscape(q.cargo_id)}, ${sqlEscape(q.prova_id)}, ${q.ano}, ${sqlEscape(q.tipo)}, ${sqlEscape(q.dificuldade)}, ${sqlEscape(q.enunciado)}, ${sqlEscape(q.texto_apoio)}, ${sqlEscape(q.explicacao)}, ${q.is_autoral_ia}, ${sqlEscape(q.modelo_ia)}, ${sqlEscape(q.prompt_versao)}, ${q.revisada_por_especialista}, ${q.anulada}, ${q.desatualizada}, ${sqlEscape(q.fingerprint_hash)})`;
  });

  sqlContent += values.join(",\n");
  sqlContent += `\nON CONFLICT (fingerprint_hash) DO NOTHING;\n`;
});

// Alternativas
const todasAlternativas = todasQuestoes.flatMap((q) => q.alternativas || []);
const altChunks = [];
for (let i = 0; i < todasAlternativas.length; i += 250) {
  altChunks.push(todasAlternativas.slice(i, i + 250));
}

altChunks.forEach((chunk, chunkIdx) => {
  sqlContent += `\n-- Lote de Alternativas #${chunkIdx + 1}\n`;
  sqlContent += `INSERT INTO public.questoes_alternativas (id, questao_id, letra, texto, correta, ordem, explicacao_especifica) VALUES\n`;
  const values = chunk.map((a) => {
    return `(${sqlEscape(a.id)}, ${sqlEscape(a.questao_id)}, ${sqlEscape(a.letra)}, ${sqlEscape(a.texto)}, ${a.correta}, ${a.ordem}, ${sqlEscape(a.explicacao_especifica)})`;
  });
  sqlContent += values.join(",\n");
  sqlContent += `\nON CONFLICT (id) DO NOTHING;\n`;
});

sqlContent += `\nCOMMIT;\n`;

fs.writeFileSync(SQL_PATH, sqlContent, "utf8");
console.log(`Arquivo SQL Seed gerado com sucesso: ${SQL_PATH} (${(fs.statSync(SQL_PATH).size / 1024 / 1024).toFixed(2)} MB)`);
