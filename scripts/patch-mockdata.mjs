import fs from "fs";
import path from "path";

const mockDataPath = path.resolve("src/data/mockData.ts");
let content = fs.readFileSync(mockDataPath, "utf8");

// 1. Garantir import do JSON de questões
if (!content.includes("bancoQuestoes1000")) {
  content = content.replace(
    '} from "@/types";',
    `} from "@/types";\nimport bancoQuestoes1000 from "./banco_questoes_1000.json";`
  );
}

// 2. Criar arrays massivos consolidados
if (!content.includes("QUESTOES_MASSIVAS")) {
  const insertCode = `
// ── BANCO MASSIVO CONSOLIDADO (1.260+ QUESTÕES) ───────────────────────────────
const QUESTOES_MASSIVAS: Questao[] = [
  ...(bancoQuestoes1000 as Questao[]),
  ...MOCK_QUESTOES,
];

export const DISCIPLINAS_MASSIVAS: Disciplina[] = [
  { id: "disc-portugues", nome: "Língua Portuguesa", slug: "lingua-portuguesa", descricao: "Interpretação de textos, gramática, concordância, regência, crase e pontuação.", icone: "BookOpen", cor: "#3b82f6", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-direito-constitucional", nome: "Direito Constitucional", slug: "direito-constitucional", descricao: "Direitos fundamentais, organização do Estado, Poderes e controle de constitucionalidade.", icone: "Scale", cor: "#8b5cf6", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-direito-administrativo", nome: "Direito Administrativo", slug: "direito-administrativo", descricao: "Princípios, atos administrativos, Lei 14.133/21, poderes e responsabilidade civil.", icone: "Building2", cor: "#ec4899", ordem: 3, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-direito-penal", nome: "Direito Penal", slug: "direito-penal", descricao: "Teoria do crime, tipicidade, culpabilidade, crimes contra a pessoa, patrimônio e administração pública.", icone: "ShieldAlert", cor: "#f59e0b", ordem: 4, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-direito-processual-penal", nome: "Direito Processual Penal", slug: "direito-processual-penal", descricao: "Inquérito policial, ação penal, provas, prisões cautelares, competência e recursos.", icone: "FileCheck2", cor: "#e11d48", ordem: 5, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-legislacao-especial", nome: "Legislação Especial", slug: "legislacao-especial", descricao: "Lei de Abuso de Autoridade, Drogas, Desarmamento, Crimes Hediondos e Maria da Penha.", icone: "Gavel", cor: "#d97706", ordem: 6, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-direitos-humanos", nome: "Direitos Humanos", slug: "direitos-humanos", descricao: "DUDH, Pacto de San José da Costa Rica, tratados internacionais e garantias fundamentais.", icone: "HeartHandshake", cor: "#9333ea", ordem: 7, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-informatica", nome: "Informática e Tecnologia", slug: "informatica-ti", descricao: "Segurança da informação, redes, computação em nuvem, bancos de dados e sistemas operacionais.", icone: "Laptop", cor: "#06b6d4", ordem: 8, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-rlm", nome: "Raciocínio Lógico-Matemático", slug: "raciocinio-logico", descricao: "Lógica proposicional, equivalências, diagramas lógicos, análise combinatória e probabilidade.", icone: "BrainCircuit", cor: "#10b981", ordem: 9, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-administracao-publica", nome: "Administração Pública", slug: "administracao-publica", descricao: "Gestão por processos, governança pública, planejamento estratégico e orçamento público.", icone: "Briefcase", cor: "#0ea5e9", ordem: 10, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-contabilidade", nome: "Contabilidade Geral e Pública", slug: "contabilidade", descricao: "Balanço patrimonial, DRE, lançamentos contábeis, regimes contábeis e CASP.", icone: "Calculator", cor: "#14b8a6", ordem: 11, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-atualidades", nome: "Atualidades e Realidade Brasileira", slug: "atualidades-brasil", descricao: "Desenvolvimento sustentável, geopolítica, economia brasileira, sociedade e cidadania.", icone: "Globe", cor: "#84cc16", ordem: 12, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-etica", nome: "Ética no Serviço Público", slug: "etica-servico-publico", descricao: "Decreto nº 1.171/1994, Lei 8.112/90, deveres e vedações dos agentes públicos.", icone: "Users", cor: "#4ade80", ordem: 13, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-direito-previdenciario", nome: "Direito Previdenciário", slug: "direito-previdenciario", descricao: "Seguridade social, segurados do RGPS, benefícios em espécie e custeio.", icone: "Shield", cor: "#6366f1", ordem: 14, created_at: "2024-01-01T00:00:00Z" },
  { id: "disc-direito-tributario", nome: "Direito Tributário", slug: "direito-tributario", descricao: "Sistema Tributário Nacional, competências, limitações ao poder de tributar e CTN.", icone: "Coins", cor: "#f97316", ordem: 15, created_at: "2024-01-01T00:00:00Z" },
];

export const ASSUNTOS_MASSIVOS: Assunto[] = [
  // Português
  { id: "ass-sintaxe", disciplina_id: "disc-portugues", nome: "Sintaxe do Período e Orações", slug: "sintaxe-periodo", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-concordancia", disciplina_id: "disc-portugues", nome: "Concordância Verbal e Nominal", slug: "concordancia", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-regencia-crase", disciplina_id: "disc-portugues", nome: "Regência e Crase", slug: "regencia-crase", ordem: 3, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-interpretacao", disciplina_id: "disc-portugues", nome: "Interpretação e Tipologia Textual", slug: "interpretacao-texto", ordem: 4, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-pontuacao", disciplina_id: "disc-portugues", nome: "Pontuação e Emprego dos Sinais", slug: "pontuacao", ordem: 5, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-ortografia-acentuacao", disciplina_id: "disc-portugues", nome: "Ortografia e Acentuação Gráfica", slug: "ortografia-acentuacao", ordem: 6, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-morfologia-classes", disciplina_id: "disc-portugues", nome: "Morfologia e Classes de Palavras", slug: "morfologia-classes", ordem: 7, created_at: "2024-01-01T00:00:00Z" },

  // Constitucional
  { id: "ass-direitos-fundamentais", disciplina_id: "disc-direito-constitucional", nome: "Direitos e Garantias Fundamentais (Art. 5º)", slug: "artigo-5-cf", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-organizacao-estado", disciplina_id: "disc-direito-constitucional", nome: "Organização Político-Administrativa do Estado", slug: "organizacao-estado", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-poder-executivo", disciplina_id: "disc-direito-constitucional", nome: "Poder Executivo e Presidência da República", slug: "poder-executivo", ordem: 3, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-poder-legislativo", disciplina_id: "disc-direito-constitucional", nome: "Poder Legislativo e Processo Legislativo", slug: "poder-legislativo", ordem: 4, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-poder-judiciario", disciplina_id: "disc-direito-constitucional", nome: "Poder Judiciário e Funções Essenciais à Justiça", slug: "poder-judiciario", ordem: 5, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-controle-constitucionalidade", disciplina_id: "disc-direito-constitucional", nome: "Controle de Constitucionalidade", slug: "controle-constitucionalidade", ordem: 6, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-seguranca-publica", disciplina_id: "disc-direito-constitucional", nome: "Segurança Pública (Art. 144)", slug: "seguranca-publica", ordem: 7, created_at: "2024-01-01T00:00:00Z" },

  // Administrativo
  { id: "ass-principios-adm", disciplina_id: "disc-direito-administrativo", nome: "Princípios da Administração Pública (LIMPE e Implícitos)", slug: "principios-administracao", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-atos-administrativos", disciplina_id: "disc-direito-administrativo", nome: "Atos Administrativos: Elementos, Atributos e Extinção", slug: "atos-administrativos", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-licitacoes-14133", disciplina_id: "disc-direito-administrativo", nome: "Licitações e Contratos (Nova Lei 14.133/2021)", slug: "licitacoes-14133", ordem: 3, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-agentes-publicos", disciplina_id: "disc-direito-administrativo", nome: "Agentes Públicos e Regime Jurídico (Lei 8.112/90)", slug: "agentes-publicos-8112", ordem: 4, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-improbidade", disciplina_id: "disc-direito-administrativo", nome: "Improbidade Administrativa (Lei 8.429/92 alterada)", slug: "improbidade-administrativa", ordem: 5, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-responsabilidade-civil", disciplina_id: "disc-direito-administrativo", nome: "Responsabilidade Civil do Estado", slug: "responsabilidade-civil-estado", ordem: 6, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-poderes-adm", disciplina_id: "disc-direito-administrativo", nome: "Poderes Administrativos (Hierárquico, Disciplinar, Polícia)", slug: "poderes-administrativos", ordem: 7, created_at: "2024-01-01T00:00:00Z" },

  // Penal
  { id: "ass-teoria-crime", disciplina_id: "disc-direito-penal", nome: "Teoria do Crime: Tipicidade, Ilicitude e Culpabilidade", slug: "teoria-crime", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-crimes-adm-pub", disciplina_id: "disc-direito-penal", nome: "Crimes Contra a Administração Pública", slug: "crimes-funcionario-publico", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-crimes-pessoa-patrimonio", disciplina_id: "disc-direito-penal", nome: "Crimes Contra a Pessoa e o Patrimônio", slug: "crimes-pessoa-patrimonio", ordem: 3, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-aplicacao-lei-penal", disciplina_id: "disc-direito-penal", nome: "Aplicação da Lei Penal no Tempo e no Espaço", slug: "aplicacao-lei-penal", ordem: 4, created_at: "2024-01-01T00:00:00Z" },

  // Processo Penal
  { id: "ass-inquerito-policial", disciplina_id: "disc-direito-processual-penal", nome: "Inquérito Policial: Características e Instauração", slug: "inquerito-policial", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-provas-processo", disciplina_id: "disc-direito-processual-penal", nome: "Provas no Processo Penal e Cadeia de Custódia", slug: "provas-processo-penal", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-prisoes-cautelares", disciplina_id: "disc-direito-processual-penal", nome: "Prisões Cautelares, Flagrante e Liberdade Provisória", slug: "prisoes-cautelares", ordem: 3, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-acao-penal", disciplina_id: "disc-direito-processual-penal", nome: "Ação Penal Pública e Privada", slug: "acao-penal", ordem: 4, created_at: "2024-01-01T00:00:00Z" },

  // Legislação Especial
  { id: "ass-abuso-autoridade", disciplina_id: "disc-legislacao-especial", nome: "Lei de Abuso de Autoridade (Lei nº 13.869/2019)", slug: "abuso-autoridade-13869", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-lei-drogas", disciplina_id: "disc-legislacao-especial", nome: "Lei de Drogas (Lei nº 11.343/2006)", slug: "lei-drogas-11343", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-estatuto-desarmamento", disciplina_id: "disc-legislacao-especial", nome: "Estatuto do Desarmamento (Lei nº 10.826/2003)", slug: "estatuto-desarmamento-10826", ordem: 3, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-maria-da-penha", disciplina_id: "disc-legislacao-especial", nome: "Lei Maria da Penha (Lei nº 11.340/2006)", slug: "lei-maria-da-penha", ordem: 4, created_at: "2024-01-01T00:00:00Z" },

  // Direitos Humanos
  { id: "ass-dudh", disciplina_id: "disc-direitos-humanos", nome: "Declaração Universal dos Direitos Humanos (1948)", slug: "dudh-1948", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-pacto-sanjose", disciplina_id: "disc-direitos-humanos", nome: "Pacto de San José da Costa Rica (CADH)", slug: "pacto-san-jose", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-evolucao-dh", disciplina_id: "disc-direitos-humanos", nome: "Gerações e Dimensões dos Direitos Humanos", slug: "geracoes-direitos-humanos", ordem: 3, created_at: "2024-01-01T00:00:00Z" },

  // Informática
  { id: "ass-seguranca-info", disciplina_id: "disc-informatica", nome: "Segurança da Informação, Criptografia e Malware", slug: "seguranca-informacao", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-redes-internet", disciplina_id: "disc-informatica", nome: "Redes de Computadores, Protocolos e Nuvem", slug: "redes-nuvem", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-bancos-dados", disciplina_id: "disc-informatica", nome: "Bancos de Dados Relacionais e SQL", slug: "bancos-dados-sql", ordem: 3, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-sistemas-operacionais", disciplina_id: "disc-informatica", nome: "Sistemas Operacionais (Linux e Windows)", slug: "sistemas-operacionais", ordem: 4, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-ferramentas-escritorio", disciplina_id: "disc-informatica", nome: "Suítes de Escritório (Calc/Excel, Writer/Word)", slug: "ferramentas-escritorio", ordem: 5, created_at: "2024-01-01T00:00:00Z" },

  // RLM
  { id: "ass-proposicoes-logicas", disciplina_id: "disc-rlm", nome: "Lógica Proposicional e Conectivos", slug: "logica-proposicional", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-equivalencias-negacoes", disciplina_id: "disc-rlm", nome: "Equivalências Lógicas e Negação de Proposições", slug: "equivalencias-negacoes", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-analise-combinatoria", disciplina_id: "disc-rlm", nome: "Análise Combinatória e Princípio da Contagem", slug: "analise-combinatoria", ordem: 3, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-probabilidade", disciplina_id: "disc-rlm", nome: "Probabilidade e Estatística Básica", slug: "probabilidade", ordem: 4, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-diagramas-logicos", disciplina_id: "disc-rlm", nome: "Diagramas Lógicos e Teoria dos Conjuntos", slug: "diagramas-logicos", ordem: 5, created_at: "2024-01-01T00:00:00Z" },

  // Administração Pública
  { id: "ass-gestao-processos", disciplina_id: "disc-administracao-publica", nome: "Gestão por Processos e Indicadores de Desempenho", slug: "gestao-processos", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-governanca-publica", disciplina_id: "disc-administracao-publica", nome: "Governança Pública, Transparência e Accountability", slug: "governanca-publica", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-planejamento-estrategico", disciplina_id: "disc-administracao-publica", nome: "Planejamento Estratégico e Gestão de Riscos", slug: "planejamento-estrategico", ordem: 3, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-orcamento-publico", disciplina_id: "disc-administracao-publica", nome: "Orçamento Público (PPA, LDO e LOA)", slug: "orcamento-publico", ordem: 4, created_at: "2024-01-01T00:00:00Z" },

  // Contabilidade
  { id: "ass-balanco-patrimonial", disciplina_id: "disc-contabilidade", nome: "Balanço Patrimonial e Estrutura das Contas", slug: "balanco-patrimonial", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-dre", disciplina_id: "disc-contabilidade", nome: "Demonstração do Resultado do Exercício (DRE)", slug: "dre-contabilidade", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-regimes-contabeis", disciplina_id: "disc-contabilidade", nome: "Regime de Competência e Regime de Caixa", slug: "regimes-contabeis", ordem: 3, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-casp", disciplina_id: "disc-contabilidade", nome: "Contabilidade Aplicada ao Setor Público (CASP)", slug: "casp-setor-publico", ordem: 4, created_at: "2024-01-01T00:00:00Z" },

  // Atualidades
  { id: "ass-sustentabilidade-esg", disciplina_id: "disc-atualidades", nome: "Meio Ambiente, Mudanças Climáticas e Sustentabilidade", slug: "sustentabilidade-clima", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-geopolitica-economia", disciplina_id: "disc-atualidades", nome: "Geopolítica, Comércio Global e Economia Brasileira", slug: "geopolitica-economia", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-tecnologia-sociedade", disciplina_id: "disc-atualidades", nome: "Transformação Digital, IA e Sociedade da Informação", slug: "tecnologia-sociedade", ordem: 3, created_at: "2024-01-01T00:00:00Z" },

  // Ética
  { id: "ass-decreto-1171", disciplina_id: "disc-etica", nome: "Código de Ética Profissional do Servidor Civil (Dec. 1.171/94)", slug: "decreto-1171-94", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-comissoes-etica", disciplina_id: "disc-etica", nome: "Comissões de Ética e Processo Ético", slug: "comissoes-etica", ordem: 2, created_at: "2024-01-01T00:00:00Z" },

  // Previdenciário
  { id: "ass-beneficios-rgps", disciplina_id: "disc-direito-previdenciario", nome: "Benefícios Previdenciários do RGPS", slug: "beneficios-rgps", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-segurados-rgps", disciplina_id: "disc-direito-previdenciario", nome: "Segurados Obrigatórios e Facultativos do RGPS", slug: "segurados-rgps", ordem: 2, created_at: "2024-01-01T00:00:00Z" },

  // Tributário
  { id: "ass-sistema-tributario", disciplina_id: "disc-direito-tributario", nome: "Espécies Tributárias e Princípios Constitucionais Tributários", slug: "especies-tributarias", ordem: 1, created_at: "2024-01-01T00:00:00Z" },
  { id: "ass-obrigacao-tributaria", disciplina_id: "disc-direito-tributario", nome: "Obrigação, Crédito e Lançamento Tributário", slug: "obrigacao-tributaria", ordem: 2, created_at: "2024-01-01T00:00:00Z" },
];
`;

  content = content.replace(
    "export const MOCK_SIMULADOS: Simulado[] = [",
    `${insertCode}\nexport const MOCK_SIMULADOS: Simulado[] = [`
  );
}

// 3. Aliases de compatibilidade
if (!content.includes("export const mockQuestoes")) {
  content += `\n// Aliases exportados para uso universal no app\nexport const mockDisciplinas: Disciplina[] = DISCIPLINAS_MASSIVAS;\nexport const mockAssuntos: Assunto[] = ASSUNTOS_MASSIVOS;\nexport const mockQuestoes: Questao[] = QUESTOES_MASSIVAS;\n`;
}

fs.writeFileSync(mockDataPath, content, "utf8");
console.log("src/data/mockData.ts atualizado com sucesso!");
