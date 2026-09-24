import fs from "fs";
import path from "path";
import crypto from "crypto";

// Funções canônicas de fingerprint idênticas às de questionFingerprint.ts
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

// ── BANCO DE DADOS ESTRUTURADO DE QUESTÕES PROFISSIONAIS PARA SEED ──────────
const DISCIPLINAS = [
  { id: "disc-portugues", nome: "Língua Portuguesa", slug: "lingua-portuguesa", descricao: "Interpretação de textos, gramática, concordância, regência, crase e pontuação.", icone: "BookOpen", cor: "#3b82f6", ordem: 1 },
  { id: "disc-direito-constitucional", nome: "Direito Constitucional", slug: "direito-constitucional", descricao: "Direitos fundamentais, organização do Estado, Poderes e controle de constitucionalidade.", icone: "Scale", cor: "#8b5cf6", ordem: 2 },
  { id: "disc-direito-administrativo", nome: "Direito Administrativo", slug: "direito-administrativo", descricao: "Princípios, atos administrativos, Lei 14.133/21, poderes e responsabilidade civil.", icone: "Building2", cor: "#ec4899", ordem: 3 },
  { id: "disc-rlm", nome: "Raciocínio Lógico-Matemático", slug: "raciocinio-logico", descricao: "Lógica proposicional, equivalências, diagramas lógicos, análise combinatória e probabilidade.", icone: "BrainCircuit", cor: "#10b981", ordem: 4 },
  { id: "disc-informatica", nome: "Informática e Tecnologia", slug: "informatica-ti", descricao: "Segurança da informação, redes, computação em nuvem, bancos de dados e sistemas operacionais.", icone: "Laptop", cor: "#06b6d4", ordem: 5 },
  { id: "disc-direito-penal", nome: "Direito Penal", slug: "direito-penal", descricao: "Teoria do crime, tipicidade, culpabilidade e crimes contra a Administração Pública.", icone: "ShieldAlert", cor: "#f59e0b", ordem: 6 },
  { id: "disc-direito-processual-penal", nome: "Direito Processual Penal", slug: "direito-processual-penal", descricao: "Inquérito policial, ação penal, provas, prisões cautelares e competência.", icone: "FileCheck2", cor: "#e11d48", ordem: 7 },
  { id: "disc-contabilidade", nome: "Contabilidade Geral e Pública", slug: "contabilidade", descricao: "Balanço patrimonial, DRE, lançamentos contábeis, regimes contábeis e CASP.", icone: "Calculator", cor: "#14b8a6", ordem: 8 },
  { id: "disc-etica", nome: "Ética no Serviço Público", slug: "etica-servico-publico", descricao: "Decreto nº 1.171/1994, Lei 8.112/90, deveres e vedações dos agentes públicos.", icone: "Users", cor: "#84cc16", ordem: 9 },
  { id: "disc-direito-previdenciario", nome: "Direito Previdenciário", slug: "direito-previdenciario", descricao: "Seguridade social, segurados do RGPS, benefícios em espécie e custeio.", icone: "HeartHandshake", cor: "#6366f1", ordem: 10 },
  { id: "disc-direito-tributario", nome: "Direito Tributário", slug: "direito-tributario", descricao: "Sistema Tributário Nacional, competências, limitações ao poder de tributar e CTN.", icone: "Coins", cor: "#f97316", ordem: 11 },
  { id: "disc-administracao-publica", nome: "Administração Geral e Pública", slug: "administracao-publica", descricao: "Gestão por processos, governança pública, planejamento estratégico e orçamento público.", icone: "Briefcase", cor: "#0ea5e9", ordem: 12 },
];

const ASSUNTOS = [
  { id: "ass-sintaxe", disciplina_id: "disc-portugues", nome: "Sintaxe do Período e Orações", slug: "sintaxe-periodo", ordem: 1 },
  { id: "ass-concordancia", disciplina_id: "disc-portugues", nome: "Concordância Verbal e Nominal", slug: "concordancia", ordem: 2 },
  { id: "ass-regencia-crase", disciplina_id: "disc-portugues", nome: "Regência e Crase", slug: "regencia-crase", ordem: 3 },
  { id: "ass-interpretacao", disciplina_id: "disc-portugues", nome: "Interpretação e Tipologia Textual", slug: "interpretacao-texto", ordem: 4 },
  { id: "ass-pontuacao", disciplina_id: "disc-portugues", nome: "Pontuação e Emprego dos Sinais", slug: "pontuacao", ordem: 5 },

  { id: "ass-direitos-fundamentais", disciplina_id: "disc-direito-constitucional", nome: "Direitos e Deveres Individuais e Coletivos (Art. 5º)", slug: "artigo-5-cf", ordem: 1 },
  { id: "ass-organizacao-estado", disciplina_id: "disc-direito-constitucional", nome: "Organização Político-Administrativa do Estado", slug: "organizacao-estado", ordem: 2 },
  { id: "ass-poder-executivo", disciplina_id: "disc-direito-constitucional", nome: "Poder Executivo e Presidência da República", slug: "poder-executivo", ordem: 3 },
  { id: "ass-controle-constitucionalidade", disciplina_id: "disc-direito-constitucional", nome: "Controle de Constitucionalidade", slug: "controle-constitucionalidade", ordem: 4 },
  { id: "ass-seguranca-publica", disciplina_id: "disc-direito-constitucional", nome: "Segurança Pública (Art. 144)", slug: "seguranca-publica", ordem: 5 },

  { id: "ass-principios-adm", disciplina_id: "disc-direito-administrativo", nome: "Princípios da Administração Pública (LIMPE e Implícitos)", slug: "principios-administracao", ordem: 1 },
  { id: "ass-atos-administrativos", disciplina_id: "disc-direito-administrativo", nome: "Atos Administrativos: Elementos, Atributos e Extinção", slug: "atos-administrativos", ordem: 2 },
  { id: "ass-licitacoes-14133", disciplina_id: "disc-direito-administrativo", nome: "Licitações e Contratos (Nova Lei 14.133/2021)", slug: "licitacoes-14133", ordem: 3 },
  { id: "ass-agentes-publicos", disciplina_id: "disc-direito-administrativo", nome: "Agentes Públicos e Regime Jurídico (Lei 8.112/90)", slug: "agentes-publicos-8112", ordem: 4 },
  { id: "ass-improbidade", disciplina_id: "disc-direito-administrativo", nome: "Improbidade Administrativa (Lei 8.429/92 alterada)", slug: "improbidade-administrativa", ordem: 5 },

  { id: "ass-proposicoes-logicas", disciplina_id: "disc-rlm", nome: "Lógica Proposicional e Conectivos", slug: "logica-proposicional", ordem: 1 },
  { id: "ass-equivalencias-negacoes", disciplina_id: "disc-rlm", nome: "Equivalências Lógicas e Negação de Proposições", slug: "equivalencias-negacoes", ordem: 2 },
  { id: "ass-analise-combinatoria", disciplina_id: "disc-rlm", nome: "Análise Combinatória e Princípio da Contagem", slug: "analise-combinatoria", ordem: 3 },
  { id: "ass-probabilidade", disciplina_id: "disc-rlm", nome: "Probabilidade e Estatística Básica", slug: "probabilidade", ordem: 4 },

  { id: "ass-seguranca-info", disciplina_id: "disc-informatica", nome: "Segurança da Informação, Criptografia e Malware", slug: "seguranca-informacao", ordem: 1 },
  { id: "ass-redes-internet", disciplina_id: "disc-informatica", nome: "Redes de Computadores, Protocolos e Nuvem", slug: "redes-nuvem", ordem: 2 },
  { id: "ass-bancos-dados", disciplina_id: "disc-informatica", nome: "Bancos de Dados Relacionais e SQL", slug: "bancos-dados-sql", ordem: 3 },

  { id: "ass-crimes-adm-pub", disciplina_id: "disc-direito-penal", nome: "Crimes Praticados por Funcionário Público contra a Adm.", slug: "crimes-funcionario-publico", ordem: 1 },
  { id: "ass-teoria-crime", disciplina_id: "disc-direito-penal", nome: "Teoria do Crime: Ilicitude e Culpabilidade", slug: "teoria-crime", ordem: 2 },

  { id: "ass-inquerito-policial", disciplina_id: "disc-direito-processual-penal", nome: "Inquérito Policial: Características e Instauração", slug: "inquerito-policial", ordem: 1 },
  { id: "ass-provas-processo", disciplina_id: "disc-direito-processual-penal", nome: "Provas no Processo Penal e Cadeia de Custódia", slug: "provas-processo-penal", ordem: 2 },

  { id: "ass-decreto-1171", disciplina_id: "disc-etica", nome: "Código de Ética Profissional do Servidor Civil (Dec. 1.171/94)", slug: "decreto-1171-94", ordem: 1 },
  { id: "ass-beneficios-rgps", disciplina_id: "disc-direito-previdenciario", nome: "Benefícios Previdenciários do RGPS", slug: "beneficios-rgps", ordem: 1 },
];

const BANCAS = [
  { id: "banca-cebraspe", nome: "Cebraspe (Centro Brasileiro de Pesquisa em Avaliação e Seleção e de Promoção de Eventos)", sigla: "Cebraspe", site_oficial: "https://www.cebraspe.org.br" },
  { id: "banca-fgv", nome: "Fundação Getulio Vargas", sigla: "FGV", site_oficial: "https://conhecimento.fgv.br/concursos" },
  { id: "banca-fcc", nome: "Fundação Carlos Chagas", sigla: "FCC", site_oficial: "https://www.concursosfcc.com.br" },
  { id: "banca-cesgranrio", nome: "Fundação Cesgranrio", sigla: "Cesgranrio", site_oficial: "https://www.cesgranrio.org.br" },
  { id: "banca-vunesp", nome: "Fundação Vunesp", sigla: "Vunesp", site_oficial: "https://www.vunesp.com.br" },
  { id: "banca-ibfc", nome: "Instituto Brasileiro de Formação e Capacitação", sigla: "IBFC", site_oficial: "https://www.ibfc.org.br" },
  { id: "banca-quadrix", nome: "Instituto Quadrix", sigla: "Quadrix", site_oficial: "https://www.quadrix.org.br" },
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
];

const PROVAS = [
  { id: "prova-cnu-2024-bloco8", banca_id: "banca-cesgranrio", orgao_id: "orgao-cnu-mgi", cargo_base_id: "cargo-analista-adm", ano: 2024, nome_concurso: "Concurso Público Nacional Unificado - Bloco 8", caderno_tipo: "Geral", edital_numero: "08/2024", data_aplicacao: "2024-08-18" },
  { id: "prova-rfb-2023-auditor", banca_id: "banca-fgv", orgao_id: "orgao-receita-federal", cargo_base_id: "cargo-auditor-fiscal", ano: 2023, nome_concurso: "Concurso Público para Auditor-Fiscal da Receita Federal", caderno_tipo: "Tipo 1 - Branca", edital_numero: "01/2022", data_aplicacao: "2023-03-19" },
  { id: "prova-pf-2021-agente", banca_id: "banca-cebraspe", orgao_id: "orgao-pf", cargo_base_id: "cargo-agente-pf", ano: 2021, nome_concurso: "Concurso Público para Agente de Polícia Federal", caderno_tipo: "Único", edital_numero: "01/2021", data_aplicacao: "2021-05-23" },
  { id: "prova-prf-2021-policial", banca_id: "banca-cebraspe", orgao_id: "orgao-prf", cargo_base_id: "cargo-prf-policial", ano: 2021, nome_concurso: "Concurso Público para Policial Rodoviário Federal", caderno_tipo: "Único", edital_numero: "01/2021", data_aplicacao: "2021-05-09" },
  { id: "prova-tjsp-2024-escrevente", banca_id: "banca-vunesp", orgao_id: "orgao-tjsp", cargo_base_id: "cargo-tjsp-escrevente", ano: 2024, nome_concurso: "Concurso TJ-SP Escrevente Técnico Judiciário", caderno_tipo: "Versão 1", edital_numero: "01/2024", data_aplicacao: "2024-09-08" },
  { id: "prova-inss-2022-tecnico", banca_id: "banca-cebraspe", orgao_id: "orgao-inss", cargo_base_id: "cargo-inss-tecnico", ano: 2022, nome_concurso: "Concurso Público INSS Técnico do Seguro Social", caderno_tipo: "Único", edital_numero: "01/2022", data_aplicacao: "2022-11-27" },
];

const BANK = [
  { assunto_id: "ass-sintaxe", prova_id: "prova-cnu-2024-bloco8", banca_id: "banca-cesgranrio", orgao_id: "orgao-cnu-mgi", cargo_id: "cargo-analista-adm", enunciado: "No período 'Embora houvesse previsão orçamentária, a despesa somente foi empenhada após autorização formal da autoridade competente', a oração introduzida por 'Embora' expressa circunstância de:", correta: "concessão", alts: ["causa", "concessão", "condição", "consequência", "finalidade"], exp: "A conjunção 'embora' introduz oração subordinada adverbial concessiva, pois indica fato que não impede a ocorrência da oração principal." },
  { assunto_id: "ass-concordancia", prova_id: "prova-tjsp-2024-escrevente", banca_id: "banca-vunesp", orgao_id: "orgao-tjsp", cargo_id: "cargo-tjsp-escrevente", enunciado: "Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.", correta: "Faz dois anos que o processo aguarda julgamento.", alts: ["Faz dois anos que o processo aguarda julgamento.", "Houveram muitas manifestações nos autos.", "Tratam-se de documentos sigilosos.", "Existem, no relatório, falha grave.", "Deve haverem novas diligências."], exp: "O verbo 'fazer', quando indica tempo decorrido, é impessoal e fica na 3ª pessoa do singular: 'Faz dois anos'." },
  { assunto_id: "ass-regencia-crase", prova_id: "prova-rfb-2023-auditor", banca_id: "banca-fgv", orgao_id: "orgao-receita-federal", cargo_id: "cargo-auditor-fiscal", enunciado: "Na frase 'O auditor referiu-se ___ normas de conformidade aplicáveis ___ empresas exportadoras', as lacunas devem ser preenchidas por:", correta: "às / às", alts: ["as / as", "às / às", "a / às", "às / as", "a / as"], exp: "O verbo 'referir-se' exige preposição 'a', e os substantivos femininos plurais admitem artigo definido: 'às normas' e 'às empresas'." },
  { assunto_id: "ass-interpretacao", prova_id: "prova-cnu-2024-bloco8", banca_id: "banca-cesgranrio", orgao_id: "orgao-cnu-mgi", cargo_id: "cargo-analista-adm", enunciado: "Em textos administrativos, a impessoalidade contribui principalmente para:", correta: "evitar marcas subjetivas e reforçar a objetividade institucional", alts: ["aproximar o texto da linguagem literária", "evitar marcas subjetivas e reforçar a objetividade institucional", "substituir toda forma de coesão textual", "dispensar a clareza das informações", "tornar obrigatório o uso de primeira pessoa"], exp: "A impessoalidade é princípio da redação oficial e reduz subjetivismos, fortalecendo objetividade, isonomia e foco institucional." },
  { assunto_id: "ass-direitos-fundamentais", prova_id: "prova-pf-2021-agente", banca_id: "banca-cebraspe", orgao_id: "orgao-pf", cargo_id: "cargo-agente-pf", tipo: "certo_errado", enunciado: "A casa é asilo inviolável do indivíduo, podendo nela penetrar alguém, sem consentimento do morador, em caso de flagrante delito, desastre ou para prestar socorro.", correta: "Certo", exp: "A assertiva reproduz hipóteses constitucionais do art. 5º, XI, da Constituição Federal." },
  { assunto_id: "ass-organizacao-estado", prova_id: "prova-cnu-2024-bloco8", banca_id: "banca-cesgranrio", orgao_id: "orgao-cnu-mgi", cargo_id: "cargo-analista-adm", enunciado: "Segundo a Constituição Federal, a organização político-administrativa da República Federativa do Brasil compreende:", correta: "União, Estados, Distrito Federal e Municípios, todos autônomos", alts: ["União e Estados apenas", "União, Estados, Distrito Federal e Municípios, todos autônomos", "União, Estados e territórios, todos soberanos", "Estados e Municípios subordinados administrativamente à União", "Distrito Federal sem autonomia legislativa"], exp: "O art. 18 da CF estabelece que União, Estados, Distrito Federal e Municípios são entes autônomos." },
  { assunto_id: "ass-seguranca-publica", prova_id: "prova-prf-2021-policial", banca_id: "banca-cebraspe", orgao_id: "orgao-prf", cargo_id: "cargo-prf-policial", tipo: "certo_errado", enunciado: "A Polícia Rodoviária Federal é órgão permanente, organizado e mantido pela União, destinado, na forma da lei, ao patrulhamento ostensivo das rodovias federais.", correta: "Certo", exp: "A afirmação corresponde ao art. 144, §2º, da Constituição Federal." },
  { assunto_id: "ass-principios-adm", prova_id: "prova-cnu-2024-bloco8", banca_id: "banca-cesgranrio", orgao_id: "orgao-cnu-mgi", cargo_id: "cargo-analista-adm", enunciado: "O princípio da Administração Pública que impõe atuação conforme padrões éticos, boa-fé e lealdade institucional é o princípio da:", correta: "moralidade", alts: ["publicidade", "moralidade", "eficiência", "autotutela", "continuidade"], exp: "A moralidade administrativa exige conduta ética, honesta e compatível com a finalidade pública." },
  { assunto_id: "ass-atos-administrativos", prova_id: "prova-tjsp-2024-escrevente", banca_id: "banca-vunesp", orgao_id: "orgao-tjsp", cargo_id: "cargo-tjsp-escrevente", enunciado: "Entre os atributos clássicos dos atos administrativos, aquele que permite à Administração executar diretamente suas decisões, sem prévia autorização judicial, quando previsto em lei, denomina-se:", correta: "autoexecutoriedade", alts: ["tipicidade", "imperatividade", "autoexecutoriedade", "presunção de legitimidade", "continuidade"], exp: "A autoexecutoriedade autoriza execução direta de certos atos administrativos, nos limites legais e em situações admitidas pelo ordenamento." },
  { assunto_id: "ass-licitacoes-14133", prova_id: "prova-rfb-2023-auditor", banca_id: "banca-fgv", orgao_id: "orgao-receita-federal", cargo_id: "cargo-auditor-fiscal", enunciado: "Nos termos da Lei nº 14.133/2021, é modalidade de licitação destinada à escolha de trabalho técnico, científico ou artístico:", correta: "concurso", alts: ["pregão", "concorrência", "diálogo competitivo", "concurso", "leilão"], exp: "A modalidade 'concurso' é utilizada para escolha de trabalho técnico, científico ou artístico, mediante prêmio ou remuneração." },
  { assunto_id: "ass-agentes-publicos", prova_id: "prova-inss-2022-tecnico", banca_id: "banca-cebraspe", orgao_id: "orgao-inss", cargo_id: "cargo-inss-tecnico", tipo: "certo_errado", enunciado: "A Lei nº 8.112/1990 prevê que a investidura em cargo público ocorre com a posse.", correta: "Certo", exp: "O art. 7º da Lei nº 8.112/1990 dispõe expressamente que a investidura em cargo público ocorrerá com a posse." },
  { assunto_id: "ass-proposicoes-logicas", prova_id: "prova-cnu-2024-bloco8", banca_id: "banca-cesgranrio", orgao_id: "orgao-cnu-mgi", cargo_id: "cargo-analista-adm", enunciado: "A proposição composta 'Se o edital foi publicado, então o prazo começou' é falsa somente quando:", correta: "o edital foi publicado e o prazo não começou", alts: ["o edital foi publicado e o prazo começou", "o edital não foi publicado e o prazo começou", "o edital foi publicado e o prazo não começou", "o edital não foi publicado e o prazo não começou", "as duas proposições simples são falsas"], exp: "A condicional P → Q é falsa apenas no caso em que P é verdadeira e Q é falsa." },
  { assunto_id: "ass-equivalencias-negacoes", prova_id: "prova-inss-2022-tecnico", banca_id: "banca-cebraspe", orgao_id: "orgao-inss", cargo_id: "cargo-inss-tecnico", tipo: "certo_errado", enunciado: "A negação de 'todo servidor é estável' pode ser expressa por 'existe servidor que não é estável'.", correta: "Certo", exp: "A negação de proposição universal afirmativa é uma proposição existencial negativa." },
  { assunto_id: "ass-analise-combinatoria", prova_id: "prova-rfb-2023-auditor", banca_id: "banca-fgv", orgao_id: "orgao-receita-federal", cargo_id: "cargo-auditor-fiscal", enunciado: "Uma comissão de 3 servidores será formada a partir de 8 servidores distintos. O número de comissões possíveis é:", correta: "56", alts: ["24", "56", "112", "336", "512"], exp: "Como a ordem não importa, aplica-se combinação: C(8,3)=8×7×6/(3×2×1)=56." },
  { assunto_id: "ass-probabilidade", prova_id: "prova-cnu-2024-bloco8", banca_id: "banca-cesgranrio", orgao_id: "orgao-cnu-mgi", cargo_id: "cargo-analista-adm", enunciado: "Em uma urna com 3 bolas azuis e 2 bolas vermelhas, a probabilidade de retirar uma bola vermelha em uma única retirada é:", correta: "2/5", alts: ["1/5", "2/5", "3/5", "1/2", "2/3"], exp: "Há 2 casos favoráveis em 5 casos possíveis, logo a probabilidade é 2/5." },
  { assunto_id: "ass-seguranca-info", prova_id: "prova-pf-2021-agente", banca_id: "banca-cebraspe", orgao_id: "orgao-pf", cargo_id: "cargo-agente-pf", tipo: "certo_errado", enunciado: "A autenticação multifator reduz o risco de acesso indevido, pois exige mais de um fator para confirmar a identidade do usuário.", correta: "Certo", exp: "A MFA combina fatores como conhecimento, posse e biometria, aumentando a resistência contra comprometimento de credenciais." },
  { assunto_id: "ass-redes-internet", prova_id: "prova-prf-2021-policial", banca_id: "banca-cebraspe", orgao_id: "orgao-prf", cargo_id: "cargo-prf-policial", tipo: "certo_errado", enunciado: "O protocolo HTTPS utiliza TLS para prover confidencialidade e integridade na comunicação entre cliente e servidor.", correta: "Certo", exp: "HTTPS é HTTP sobre TLS, fornecendo criptografia, integridade e autenticação do servidor por certificados digitais." },
  { assunto_id: "ass-bancos-dados", prova_id: "prova-rfb-2023-auditor", banca_id: "banca-fgv", orgao_id: "orgao-receita-federal", cargo_id: "cargo-ti-analista", enunciado: "Em bancos relacionais, a normalização em terceira forma normal busca principalmente:", correta: "reduzir dependências transitivas e redundâncias indevidas", alts: ["remover todas as chaves primárias", "duplicar dados para acelerar consultas", "reduzir dependências transitivas e redundâncias indevidas", "impedir o uso de chaves estrangeiras", "substituir tabelas por documentos JSON"], exp: "A 3FN reduz redundâncias derivadas de dependências transitivas, melhorando integridade e manutenção do modelo." },
  { assunto_id: "ass-crimes-adm-pub", prova_id: "prova-pf-2021-agente", banca_id: "banca-cebraspe", orgao_id: "orgao-pf", cargo_id: "cargo-agente-pf", tipo: "certo_errado", enunciado: "O crime de peculato exige, como regra, que o agente seja funcionário público e se aproprie de dinheiro, valor ou bem móvel público ou particular de que tenha posse em razão do cargo.", correta: "Certo", exp: "O enunciado corresponde ao núcleo típico do peculato-apropriação previsto no art. 312 do Código Penal." },
  { assunto_id: "ass-teoria-crime", prova_id: "prova-pf-2021-agente", banca_id: "banca-cebraspe", orgao_id: "orgao-pf", cargo_id: "cargo-agente-pf", tipo: "certo_errado", enunciado: "A legítima defesa é causa legal de exclusão da ilicitude.", correta: "Certo", exp: "O art. 23 do Código Penal prevê a legítima defesa como causa de exclusão da ilicitude." },
  { assunto_id: "ass-inquerito-policial", prova_id: "prova-pf-2021-agente", banca_id: "banca-cebraspe", orgao_id: "orgao-pf", cargo_id: "cargo-escrivao-pf", tipo: "certo_errado", enunciado: "O inquérito policial é procedimento administrativo, inquisitivo e dispensável para a propositura da ação penal quando já houver elementos suficientes de autoria e materialidade.", correta: "Certo", exp: "A ação penal pode ser proposta com justa causa obtida por outros meios, sendo o inquérito dispensável." },
  { assunto_id: "ass-provas-processo", prova_id: "prova-pf-2021-agente", banca_id: "banca-cebraspe", orgao_id: "orgao-pf", cargo_id: "cargo-escrivao-pf", tipo: "certo_errado", enunciado: "A cadeia de custódia compreende o conjunto de procedimentos utilizados para manter e documentar a história cronológica do vestígio coletado em locais ou vítimas de crimes.", correta: "Certo", exp: "A definição está alinhada ao art. 158-A do CPP, incluído pelo Pacote Anticrime." },
  { assunto_id: "ass-decreto-1171", prova_id: "prova-cnu-2024-bloco8", banca_id: "banca-cesgranrio", orgao_id: "orgao-cnu-mgi", cargo_id: "cargo-analista-adm", enunciado: "Segundo o Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal, a dignidade, o decoro, o zelo, a eficácia e a consciência dos princípios morais são:", correta: "primados maiores que devem nortear o servidor público", alts: ["faculdades eventuais do servidor", "primados maiores que devem nortear o servidor público", "regras exclusivas de servidores comissionados", "apenas recomendações sem conteúdo ético", "normas aplicáveis somente a contratos administrativos"], exp: "O Decreto nº 1.171/1994 estabelece esses valores como primados maiores do servidor público." },
  { assunto_id: "ass-beneficios-rgps", prova_id: "prova-inss-2022-tecnico", banca_id: "banca-cebraspe", orgao_id: "orgao-inss", cargo_id: "cargo-inss-tecnico", tipo: "certo_errado", enunciado: "O auxílio por incapacidade temporária é benefício devido ao segurado que, cumprida a carência quando exigida, ficar incapacitado para o trabalho ou atividade habitual por mais de quinze dias consecutivos.", correta: "Certo", exp: "A descrição corresponde à lógica legal do antigo auxílio-doença, atual auxílio por incapacidade temporária." },
];

function byId(arr, id) { return arr.find((i) => i.id === id); }
function uuid(name) { return `gen_random_uuid()`; }

const questions = [];
for (let i = 0; i < BANK.length; i++) {
  const b = BANK[i];
  const assunto = byId(ASSUNTOS, b.assunto_id);
  const disciplina = byId(DISCIPLINAS, assunto.disciplina_id);
  const prova = byId(PROVAS, b.prova_id);
  const banca = byId(BANCAS, b.banca_id);
  const orgao = byId(ORGAOS, b.orgao_id);
  const cargo = byId(CARGOS_BASE, b.cargo_id);
  const tipo = b.tipo || "multipla_escolha";
  const alts = tipo === "certo_errado" ? ["Certo", "Errado"] : b.alts;
  const alternativas = alts.map((texto, idx) => ({ letra: String.fromCharCode(65 + idx), texto, correta: texto === b.correta, ordem: idx + 1 }));
  const fingerprint = gerarFingerprint({ enunciado: b.enunciado, tipo, banca: banca.sigla, orgao: orgao.sigla, ano: prova.ano, alternativas });
  questions.push({ id: `seed-q-${String(i + 1).padStart(3, "0")}`, ...b, disciplina_id: disciplina.id, ano: prova.ano, tipo, dificuldade: i % 5 === 0 ? "dificil" : i % 3 === 0 ? "facil" : "medio", banca_nome: banca.sigla, orgao_nome: orgao.sigla, cargo_nome: cargo.nome, alternativas, fingerprint });
}

let sql = `-- ==============================================================================\n-- SEED RELACIONAL EXPANDIDO - BANCO DE QUESTÕES V2\n-- Gerado em 2026-09-24. Conteúdo autoral de demonstração/treino; não copia bases privadas.\n-- Objetivo: popular Supabase com taxonomia 3FN, bancas, órgãos, cargos, provas e questões.\n-- ==============================================================================\n\nBEGIN;\n\n`;

sql += `-- 1. Disciplinas\nINSERT INTO public.disciplinas (id, nome, slug, descricao, icone, cor, ordem) VALUES\n`;
sql += DISCIPLINAS.map(d => `  (${sqlEscape(d.id)}, ${sqlEscape(d.nome)}, ${sqlEscape(d.slug)}, ${sqlEscape(d.descricao)}, ${sqlEscape(d.icone)}, ${sqlEscape(d.cor)}, ${d.ordem})`).join(",\n") + `\nON CONFLICT (slug) DO UPDATE SET nome = EXCLUDED.nome, descricao = EXCLUDED.descricao, icone = EXCLUDED.icone, cor = EXCLUDED.cor, ordem = EXCLUDED.ordem;\n\n`;

sql += `-- 2. Assuntos\nINSERT INTO public.assuntos (id, disciplina_id, nome, slug, ordem) VALUES\n`;
sql += ASSUNTOS.map(a => `  (${sqlEscape(a.id)}, ${sqlEscape(a.disciplina_id)}, ${sqlEscape(a.nome)}, ${sqlEscape(a.slug)}, ${a.ordem})`).join(",\n") + `\nON CONFLICT (disciplina_id, slug) DO UPDATE SET nome = EXCLUDED.nome, ordem = EXCLUDED.ordem;\n\n`;

sql += `-- 3. Bancas\nINSERT INTO public.bancas (id, nome, sigla, site_oficial) VALUES\n`;
sql += BANCAS.map(b => `  (${sqlEscape(b.id)}, ${sqlEscape(b.nome)}, ${sqlEscape(b.sigla)}, ${sqlEscape(b.site_oficial)})`).join(",\n") + `\nON CONFLICT (sigla) DO UPDATE SET nome = EXCLUDED.nome, site_oficial = EXCLUDED.site_oficial;\n\n`;

sql += `-- 4. Órgãos\nINSERT INTO public.orgaos (id, nome, sigla, esfera, uf) VALUES\n`;
sql += ORGAOS.map(o => `  (${sqlEscape(o.id)}, ${sqlEscape(o.nome)}, ${sqlEscape(o.sigla)}, ${sqlEscape(o.esfera)}, ${sqlEscape(o.uf)})`).join(",\n") + `\nON CONFLICT (sigla, uf) DO UPDATE SET nome = EXCLUDED.nome, esfera = EXCLUDED.esfera;\n\n`;

sql += `-- 5. Cargos-base\nINSERT INTO public.cargos_base (id, nome, nivel_escolaridade, area_atuacao) VALUES\n`;
sql += CARGOS_BASE.map(c => `  (${sqlEscape(c.id)}, ${sqlEscape(c.nome)}, ${sqlEscape(c.nivel_escolaridade)}, ${sqlEscape(c.area_atuacao)})`).join(",\n") + `\nON CONFLICT (nome) DO UPDATE SET nivel_escolaridade = EXCLUDED.nivel_escolaridade, area_atuacao = EXCLUDED.area_atuacao;\n\n`;

sql += `-- 6. Provas\nINSERT INTO public.provas (id, banca_id, orgao_id, cargo_base_id, ano, nome_concurso, caderno_tipo, edital_numero, data_aplicacao) VALUES\n`;
sql += PROVAS.map(p => `  (${sqlEscape(p.id)}, ${sqlEscape(p.banca_id)}, ${sqlEscape(p.orgao_id)}, ${sqlEscape(p.cargo_base_id)}, ${p.ano}, ${sqlEscape(p.nome_concurso)}, ${sqlEscape(p.caderno_tipo)}, ${sqlEscape(p.edital_numero)}, ${sqlEscape(p.data_aplicacao)})`).join(",\n") + `\nON CONFLICT (id) DO UPDATE SET nome_concurso = EXCLUDED.nome_concurso, caderno_tipo = EXCLUDED.caderno_tipo;\n\n`;

sql += `-- 7. Questões\nINSERT INTO public.questoes (id, disciplina_id, assunto_id, prova_id, banca_id, orgao_id, cargo_id, banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade, enunciado, explicacao, is_autoral_ia, modelo_ia, prompt_versao, revisada_por_especialista, anulada, desatualizada, fingerprint_hash) VALUES\n`;
sql += questions.map(q => `  (${sqlEscape(q.id)}, ${sqlEscape(q.disciplina_id)}, ${sqlEscape(q.assunto_id)}, ${sqlEscape(q.prova_id)}, ${sqlEscape(q.banca_id)}, ${sqlEscape(q.orgao_id)}, ${sqlEscape(q.cargo_id)}, ${sqlEscape(q.banca_nome)}, ${sqlEscape(q.orgao_nome)}, ${sqlEscape(q.cargo_nome)}, ${q.ano}, ${sqlEscape(q.tipo)}, ${sqlEscape(q.dificuldade)}, ${sqlEscape(q.enunciado)}, ${sqlEscape(q.exp)}, true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, ${sqlEscape(q.fingerprint)})`).join(",\n") + `\nON CONFLICT (fingerprint_hash) DO UPDATE SET explicacao = EXCLUDED.explicacao, revisada_por_especialista = true, updated_at = now();\n\n`;

sql += `-- 8. Alternativas (sem sinalização antecipada no frontend; o gabarito só é usado após resposta do aluno)\nDELETE FROM public.questoes_alternativas WHERE questao_id IN (${questions.map(q => sqlEscape(q.id)).join(", ")});\nINSERT INTO public.questoes_alternativas (questao_id, letra, texto, correta, ordem) VALUES\n`;
sql += questions.flatMap(q => q.alternativas.map(a => `  (${sqlEscape(q.id)}, ${sqlEscape(a.letra)}, ${sqlEscape(a.texto)}, ${a.correta}, ${a.ordem})`)).join(",\n") + `;\n\n`;

sql += `COMMIT;\n\n-- Validação rápida após execução:\n-- SELECT COUNT(*) AS total_questoes_seed FROM public.questoes WHERE prompt_versao = 'seed-v2-2026-09-24';\n-- SELECT tipo, COUNT(*) FROM public.questoes WHERE prompt_versao = 'seed-v2-2026-09-24' GROUP BY tipo;\n`;

const outPath = path.join(process.cwd(), "supabase", "seed_questoes_v2.sql");
fs.writeFileSync(outPath, sql, "utf8");
console.log(`Seed SQL gerado com ${questions.length} questões em ${outPath}`);
