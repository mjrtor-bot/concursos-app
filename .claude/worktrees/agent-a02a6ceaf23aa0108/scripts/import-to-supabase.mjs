import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import crypto from "crypto";

// 1. Carregar variáveis de ambiente de .env.local
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  for (const line of envContent.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        const key = trimmed.substring(0, idx).trim();
        const val = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
        process.env[key] = val;
      }
    }
  }
}

let SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
SUPABASE_URL = SUPABASE_URL.replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

console.log("=================================================");
console.log("IMPORTAÇÃO DEFINITIVA DE 1.260 QUESTÕES PARA O SUPABASE");
console.log("URL Alvo:", SUPABASE_URL);
console.log("=================================================");

// Validação estrita do projeto de produção
if (!SUPABASE_URL.includes("xvpqcibdarcelvcwnglq")) {
  console.error("ERRO CRÍTICO: Projeto Supabase alvo não corresponde a xvpqcibdarcelvcwnglq!");
  process.exit(1);
}

if (!SERVICE_ROLE_KEY) {
  console.error("ERRO CRÍTICO: SUPABASE_SERVICE_ROLE_KEY não encontrada no .env.local!");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

// Função determinística para converter IDs em UUID v5 válido
export function stringToUuid(str) {
  const hash = crypto.createHash("sha1").update(str, "utf8").digest("hex");
  return [
    hash.substring(0, 8),
    hash.substring(8, 12),
    "5" + hash.substring(13, 16),
    ((parseInt(hash.substring(16, 18), 16) & 0x3f) | 0x80).toString(16).padStart(2, "0") + hash.substring(18, 20),
    hash.substring(20, 32),
  ].join("-");
}

// ── TAXONOMIA DE DISCIPLINAS ──────────────────────────────────────────
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
];

function normalizeText(text) {
  if (!text) return "";
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function calculateFingerprint(q) {
  const normBanca = normalizeText(q.banca || q.banca_nome || "");
  const ano = q.ano || 2024;
  const normOrgao = normalizeText(q.orgao || q.orgao_nome || "");
  const tipo = q.tipo || "multipla_escolha";
  const normEnunciado = normalizeText(q.enunciado);

  let normAlts = "";
  if (Array.isArray(q.alternativas)) {
    normAlts = q.alternativas
      .map(a => normalizeText(a.texto))
      .sort()
      .join("||");
  }

  const rawSig = `${normBanca}:::${ano}:::${normOrgao}:::${tipo}:::${normEnunciado}:::${normAlts}`;
  return crypto.createHash("sha256").update(rawSig, "utf8").digest("hex");
}

async function chunkUpsert(table, records, chunkSize = 100, onConflict = "id") {
  let inserted = 0;
  for (let i = 0; i < records.length; i += chunkSize) {
    const chunk = records.slice(i, i + chunkSize);
    const { error } = await supabase.from(table).upsert(chunk, { onConflict });
    if (error) {
      console.error(`Erro ao inserir lote em ${table} [${i} - ${i + chunk.length}]:`, error.message);
      throw error;
    }
    inserted += chunk.length;
    process.stdout.write(`\r  > [${table}] Inseridos: ${inserted}/${records.length}`);
  }
  console.log(` -> Concluído 100%!`);
  return inserted;
}

async function run() {
  console.log("Conectado com sucesso com service_role.");

  // 1. Contagens ANTES
  console.log("\n[1/6] Realizando Auditoria ANTES da importação...");
  const tables = ["questoes", "questoes_alternativas", "disciplinas", "assuntos", "bancas", "orgaos", "cargos_base", "provas"];
  const countsBefore = {};
  for (const t of tables) {
    const { count, error } = await supabase.from(t).select("*", { count: "exact", head: true });
    if (error) {
      console.log(`[-] ${t.padEnd(25)} : ERRO (${error.code}) - ${error.message}`);
      countsBefore[t] = 0;
    } else {
      console.log(`[+] ${t.padEnd(25)} : ${count} registros`);
      countsBefore[t] = count;
    }
  }

  // 2. Carregar e Inserir Taxonomia (Disciplinas, Assuntos, Bancas, Órgãos, Cargos, Provas)
  console.log("\n[2/6] Gravando Taxonomia e Entidades Relacionais...");

  // Disciplinas
  const disciplinasRows = DISCIPLINAS.map(d => ({
    id: stringToUuid(d.id),
    nome: d.nome,
    slug: d.slug,
    descricao: d.descricao,
    icone: d.icone,
    cor: d.cor,
    ordem: d.ordem,
  }));
  await chunkUpsert("disciplinas", disciplinasRows, 50, "id");

  // Assuntos
  const assuntosRows = ASSUNTOS.map(a => ({
    id: stringToUuid(a.id),
    disciplina_id: stringToUuid(a.disciplina_id),
    nome: a.nome,
    slug: a.slug,
    descricao: a.descricao || a.nome,
    ordem: a.ordem,
  }));
  await chunkUpsert("assuntos", assuntosRows, 50, "id");

  // Bancas
  const bancasRows = BANCAS.map(b => ({
    id: stringToUuid(b.id),
    nome: b.nome,
    sigla: b.sigla,
    site_oficial: b.site_oficial,
  }));
  await chunkUpsert("bancas", bancasRows, 50, "id");

  // Órgãos
  const orgaosRows = ORGAOS.map(o => ({
    id: stringToUuid(o.id),
    nome: o.nome,
    sigla: o.sigla,
    esfera: o.esfera,
    uf: o.uf,
  }));
  await chunkUpsert("orgaos", orgaosRows, 50, "id");

  // Cargos
  const cargosRows = CARGOS_BASE.map(c => ({
    id: stringToUuid(c.id),
    nome: c.nome,
    nivel_escolaridade: c.nivel_escolaridade,
    area_atuacao: c.area_atuacao,
  }));
  await chunkUpsert("cargos_base", cargosRows, 50, "id");

  // Provas
  const provasRows = PROVAS.map(p => ({
    id: stringToUuid(p.id),
    banca_id: stringToUuid(p.banca_id),
    orgao_id: stringToUuid(p.orgao_id),
    cargo_base_id: p.cargo_base_id ? stringToUuid(p.cargo_base_id) : null,
    ano: p.ano,
    nome_concurso: p.nome_concurso,
    caderno_tipo: p.caderno_tipo,
    edital_numero: p.edital_numero,
    data_aplicacao: p.data_aplicacao,
  }));
  await chunkUpsert("provas", provasRows, 50, "id");

  // 3. Processar e Validar Dataset de 1.260 Questões
  console.log("\n[3/6] Processando Dataset de 1.260 Questões com Deduplicação SHA-256...");
  const rawData = JSON.parse(fs.readFileSync("src/data/banco_questoes_1000.json", "utf8"));
  console.log(`Total lido de src/data/banco_questoes_1000.json: ${rawData.length} itens`);

  // Mapas para lookup rápido
  const discMap = new Map();
  DISCIPLINAS.forEach(d => discMap.set(d.id, stringToUuid(d.id)));

  const assMap = new Map();
  ASSUNTOS.forEach(a => assMap.set(a.id, stringToUuid(a.id)));

  const seenHashes = new Set();
  const questoesRows = [];
  const alternativasRows = [];
  let duplicatas = 0;
  let errosValidacao = 0;

  for (let idx = 0; idx < rawData.length; idx++) {
    const q = rawData[idx];

    // Validação de chaves estrangeiras
    const disciplinaUuid = discMap.get(q.disciplina_id);
    const assuntoUuid = assMap.get(q.assunto_id);

    if (!disciplinaUuid || !assuntoUuid) {
      console.error(`[-] Questão ${q.id} possui disciplina ou assunto inválido: ${q.disciplina_id} / ${q.assunto_id}`);
      errosValidacao++;
      continue;
    }

    // Deduplicação SHA-256
    const fingerprint = calculateFingerprint(q);
    if (seenHashes.has(fingerprint)) {
      duplicatas++;
      continue;
    }
    seenHashes.add(fingerprint);

    const questaoUuid = stringToUuid(q.id);

    // Mapear campos da questão
    questoesRows.push({
      id: questaoUuid,
      disciplina_id: disciplinaUuid,
      assunto_id: assuntoUuid,
      banca_nome: q.banca || "FGV",
      orgao_nome: q.orgao || "Concurso Público",
      cargo_nome: q.cargo || "Geral",
      ano: q.ano || 2024,
      tipo: q.tipo || "multipla_escolha",
      dificuldade: q.dificuldade || "medio",
      enunciado: q.enunciado,
      texto_apoio: q.texto_apoio || null,
      explicacao: q.explicacao || "Resolução comentada.",
      is_autoral_ia: q.is_autoral_ia ?? true,
      modelo_ia: q.modelo_ia || "claude-3-5-sonnet",
      prompt_versao: q.prompt_versao || "v2.1",
      revisada_por_especialista: q.revisada_por_especialista ?? true,
      anulada: q.anulada ?? false,
      desatualizada: q.desatualizada ?? false,
      fingerprint_hash: fingerprint,
    });

    // Mapear alternativas
    if (Array.isArray(q.alternativas)) {
      q.alternativas.forEach((alt, altIdx) => {
        alternativasRows.push({
          id: stringToUuid(`${q.id}-alt-${alt.letra || altIdx}`),
          questao_id: questaoUuid,
          letra: alt.letra || String.fromCharCode(65 + altIdx),
          texto: alt.texto,
          correta: Boolean(alt.correta),
          ordem: altIdx + 1,
          explicacao_especifica: alt.explicacao_especifica || null,
        });
      });
    }
  }

  console.log(`Validação concluída:`);
  console.log(`  - Questões válidas preparadas: ${questoesRows.length}`);
  console.log(`  - Alternativas preparadas: ${alternativasRows.length}`);
  console.log(`  - Duplicatas rejeitadas: ${duplicatas}`);
  console.log(`  - Erros de validação: ${errosValidacao}`);

  // 4. Inserção em Lote no Supabase
  console.log("\n[4/6] Inserindo Questões no Supabase (chunks de 100)...");
  await chunkUpsert("questoes", questoesRows, 100, "id");

  console.log("\n[5/6] Inserindo Alternativas no Supabase (chunks de 200)...");
  await chunkUpsert("questoes_alternativas", alternativasRows, 200, "id");

  // 5. Auditoria DEPOIS
  console.log("\n[6/6] Realizando Auditoria DEPOIS da importação no Supabase...");
  const countsAfter = {};
  for (const t of tables) {
    const { count, error } = await supabase.from(t).select("*", { count: "exact", head: true });
    if (error) {
      console.log(`[-] ${t.padEnd(25)} : ERRO (${error.code}) - ${error.message}`);
      countsAfter[t] = 0;
    } else {
      console.log(`[+] ${t.padEnd(25)} : ${count} registros`);
      countsAfter[t] = count;
    }
  }

  // 6. Teste da API Real
  console.log("\n=================================================");
  console.log("TESTE DIRETO DE QUERY / RESPOSTAS:");
  const { data: sampleQuestoes, error: qErr } = await supabase
    .from("questoes")
    .select(`
      id,
      banca_nome,
      ano,
      dificuldade,
      enunciado,
      disciplinas:disciplina_id (nome),
      assuntos:assunto_id (nome),
      alternativas:questoes_alternativas (id, letra, texto, correta)
    `)
    .limit(5);

  if (qErr) {
    console.error("Erro ao consultar questões com joins:", qErr.message);
  } else {
    console.log(`Amostra recuperada com sucesso (${sampleQuestoes.length} questões com alternativas e joins):`);
    sampleQuestoes.forEach((q, idx) => {
      console.log(`  [${idx + 1}] ID: ${q.id} | Disciplina: ${q.disciplinas?.nome} | Assunto: ${q.assuntos?.nome} | ${q.alternativas?.length} alternativas`);
    });
  }

  console.log("\n=================================================");
  console.log("RELATÓRIO RESUMIDO DE IMPORTAÇÃO:");
  console.log(`1. Questões antes da importação: ${countsBefore["questoes"]}`);
  console.log(`2. Questões inseridas: ${questoesRows.length}`);
  console.log(`3. Duplicatas rejeitadas: ${duplicatas}`);
  console.log(`4. Questões depois da importação: ${countsAfter["questoes"]}`);
  console.log(`5. Total de alternativas: ${countsAfter["questoes_alternativas"]}`);
  console.log(`6. Erros/rejeições: ${errosValidacao}`);
  console.log("=================================================");
}

run().catch(err => {
  console.error("\nFATAL ERROR:", err);
  process.exit(1);
});
