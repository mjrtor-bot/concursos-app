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

// Mapeamento de regras semânticas por disciplina normalizada
const DISCIPLINE_RULES = {
  "lingua portuguesa": [
    { target: "Interpretação e Tipologia Textual", keywords: ["interpretacao", "compreensao", "tipologia", "tipos textuais", "generos textuais", "genero textual", "coesao", "coerencia", "texto", "leitura", "inferencia", "significacao", "semantica", "sinonimia", "antonimia", "homonimia", "paronimia", "polissemia", "denotacao", "conotacao", "figuras de linguagem", "figura de linguagem", "intertextualidade", "reescrita", "parafrase", "compreensao e interpretacao"] },
    { target: "Sintaxe do Período e Orações", keywords: ["sintaxe", "oracao", "oracoes", "periodo simples", "periodo composto", "termos essenciais", "termos integrantes", "termos acessorios", "sujeito", "predicado", "objeto direto", "objeto indireto", "complemento nominal", "agente da passiva", "adjunto adnominal", "adjunto adverbial", "aposto", "vocativo", "coordenadas", "subordinadas", "substantivas", "adjetivas", "adverbiais", "reduzidas", "conjuncao", "conjuncoes", "conectivos"] },
    { target: "Regência e Crase", keywords: ["regencia", "regencia verbal", "regencia nominal", "crase", "sinal indicativo de crase", "acento grave"] },
    { target: "Concordância Verbal e Nominal", keywords: ["concordancia", "concordancia verbal", "concordancia nominal"] },
    { target: "Pontuação", keywords: ["pontuacao", "virgula", "ponto e virgula", "dois pontos", "travessao", "parenteses", "aspas", "sinais de pontuacao", "emprego dos sinais"] },
    { target: "Morfologia e Classes de Palavras", keywords: ["morfologia", "classes de palavras", "classe de palavras", "substantivo", "adjetivo", "artigo", "numeral", "pronome", "colocacao pronominal", "proclise", "mesoclise", "enclise", "verbo", "verbos", "tempos verbais", "modos verbais", "vozes verbais", "adverbio", "preposicao", "interjeicao", "flexao", "formacao de palavras", "derivacao", "composicao", "estrutura e formacao"] },
    { target: "Ortografia e Acentuação Gráfica", keywords: ["ortografia", "ortografia oficial", "acentuacao", "acentuacao grafica", "novo acordo ortografico", "emprego das letras", "hifen", "divisao silabica", "grafia"] }
  ],

  "raciocinio logico": [
    { target: "Probabilidade", keywords: ["probabilidade", "espaco amostral", "eventos", "probabilidade condicional", "eventos independentes"] },
    { target: "Análise combinatória", keywords: ["combinatoria", "analise combinatoria", "principio fundamental da contagem", "arranjo", "arranjos", "permutacao", "permutacoes", "combinacao", "combinacoes", "contagem", "agrupamentos"] },
    { target: "Diagramas lógicos", keywords: ["diagrama", "diagramas", "diagramas logicos", "conjuntos", "operacoes com conjuntos", "uniao", "intersecao", "diferenca", "diagramas de venn", "pertinencia", "inclusao", "quantificadores", "todo", "algum", "nenhum"] },
    { target: "Lógica proposicional", keywords: ["proposicao", "proposicoes", "logica proposicional", "conectivos", "tabela verdade", "tautologia", "contradicao", "contingencia", "valor logico", "sentencas abertas", "logica sentencial", "primeira ordem", "estruturas logicas", "logica de argumentacao", "validade de argumentos", "silogismo", "deducao", "inducao"] },
    { target: "Equivalências Lógicas e Negação de Proposições", keywords: ["equivalencia", "equivalencias", "equivalencias logicas", "negacao", "negacoes", "morgan", "leis de morgan", "contrapositiva", "implicacao logica", "condicional", "bicondicional"] },
    { target: "Álgebra: equações, inequações, expressões, fatoração e sistemas", keywords: ["algebra", "equacao", "equacoes", "inequacao", "inequacoes", "sistema", "sistemas lineares", "primeiro grau", "segundo grau", "fracoes", "porcentagem", "razao", "proporcao", "regra de tres", "juros", "funcao", "funcoes", "matrizes", "determinantes", "geometria", "trigonometria", "medias", "progressao", "pa", "pg", "numeros inteiros", "numeros reais", "aritmetica"] }
  ],

  "informatica e tecnologia": [
    { target: "Bancos de Dados Relacionais e SQL", keywords: ["banco de dados", "bancos de dados", "sql", "select", "insert", "update", "delete", "modelagem", "relacional", "sgbd", "postgres", "mysql", "oracle", "chave primaria", "chave estrangeira", "ddl", "dml", "dql", "nosql", "big data", "data warehouse", "business intelligence", "mer", "der"] },
    { target: "Segurança da Informação, Criptografia e Malware", keywords: ["seguranca", "seguranca da informacao", "criptografia", "malware", "virus", "worm", "trojan", "ransomware", "phishing", "spyware", "autenticacao", "certificado digital", "icp brasil", "assinatura digital", "firewall", "backup", "politicas de seguranca", "lgpd", "privacidade", "vulnerabilidade", "confidencialidade", "integridade", "disponibilidade", "autenticidade", "iso 27001", "ddos", "ataques"] },
    { target: "Redes de Computadores, Protocolos e Nuvem", keywords: ["redes", "rede", "protocolo", "protocolos", "tcp", "ip", "udp", "http", "https", "ftp", "dns", "dhcp", "smtp", "imap", "pop", "modelo osi", "tcp ip", "topologias", "roteamento", "switch", "roteador", "wireless", "wifi", "bluetooth", "computacao em nuvem", "cloud", "saas", "paas", "iaas", "internet", "intranet", "extranet", "navegadores", "browser", "chrome", "edge", "firefox", "correio eletronico", "web", "email"] },
    { target: "Sistemas Operacionais (Linux e Windows)", keywords: ["sistema operacional", "sistemas operacionais", "linux", "windows", "windows 10", "windows 11", "ubuntu", "bash", "shell", "terminal", "arquivos e pastas", "pastas", "permissoes", "chmod", "chown", "comandos linux", "diretorios", "kernel", "processos", "memoria", "hardware", "perifericos", "armazenamento", "ssd", "hd", "ram", "cpu", "gerenciador de arquivos"] },
    { target: "Suítes de Escritório (Calc/Excel, Writer/Word)", keywords: ["excel", "calc", "word", "writer", "powerpoint", "impress", "libreoffice", "office", "ms office", "planilha", "planilhas", "editor de texto", "processador de texto", "formulas", "funcoes", "procv", "tabelas dinamicas", "formatacao", "apresentacoes"] }
  ],

  "direito constitucional": [
    { target: "Direitos e Garantias Fundamentais (Art. 5º)", keywords: ["direitos fundamentais", "garantias fundamentais", "art 5", "artigo 5", "direitos individuais", "coletivos", "vida", "liberdade", "igualdade", "propriedade", "remedios constitucionais", "habeas corpus", "habeas data", "mandado de seguranca", "mandado de injuncao", "acao popular", "direitos sociais", "nacionalidade", "direitos politicos", "partidos politicos"] },
    { target: "Segurança Pública (Art. 144)", keywords: ["seguranca publica", "art 144", "artigo 144", "policia federal", "policia rodoviaria federal", "policia ferroviaria federal", "policia civil", "policia militar", "bombeiros", "policias penais", "guardas municipais", "defesa do estado", "forcas armadas", "estado de defesa", "estado de sitio", "ordem publica"] },
    { target: "Organização Político-Administrativa do Estado", keywords: ["organizacao do estado", "organizacao politico administrativa", "uniao", "estados", "distrito federal", "municipios", "territorios", "competencias", "reparticao de competencias", "bens da uniao", "intervencao federal", "intervencao estadual", "administracao publica constitucional", "principios constitucionais"] },
    { target: "Controle de Constitucionalidade", keywords: ["controle de constitucionalidade", "controle difuso", "controle concentrado", "adi", "adc", "ado", "adpf", "inconstitucionalidade", "sumula vinculante", "repercussao geral"] },
    { target: "Poder Judiciário e Funções Essenciais à Justiça", keywords: ["poder judiciario", "stf", "stj", "cnj", "trf", "tribunais regionais", "juizes", "tribunais de justica", "funcoes essenciais", "ministerio publico", "defensoria publica", "advocacia publica", "agu", "procuradoria"] },
    { target: "Poder Executivo e Presidência da República", keywords: ["poder executivo", "presidente da republica", "vice presidente", "ministros", "atribuicoes do presidente", "crimes de responsabilidade", "impeachment", "conselho da republica", "conselho de defesa"] },
    { target: "Poder Legislativo e Processo Legislativo", keywords: ["poder legislativo", "congresso nacional", "camara dos deputados", "senado federal", "deputados", "senadores", "processo legislativo", "emendas constitucionais", "leis complementares", "leis ordinarias", "medidas provisorias", "decretos legislativos", "tcu", "tribunal de contas", "fiscalizacao contabil"] }
  ],

  "direito administrativo": [
    { target: "Poderes Administrativos (Hierárquico, Disciplinar, Polícia)", keywords: ["poderes administrativos", "poder administrativo", "poder hierarquico", "poder disciplinar", "poder de policia", "poder regulamentar", "poder normativo", "poder vinculado", "poder discricionario", "abuso de poder", "excesso de poder", "desvio de finalidade"] },
    { target: "Atos Administrativos: Elementos, Atributos e Extinção", keywords: ["atos administrativos", "ato administrativo", "elementos do ato", "competencia", "finalidade", "forma", "motivo", "objeto", "atributos do ato", "presuncao de legitimidade", "autoexecutoriedade", "tipicidade", "imperatividade", "classificacao dos atos", "especies de atos", "extincao", "revogacao", "anulacao", "cassacao", "caducidade", "convalidacao"] },
    { target: "Agentes Públicos e Regime Jurídico (Lei 8.112/90)", keywords: ["agentes publicos", "agente publico", "servidor publico", "servidores publicos", "regime juridico", "lei 8112", "lei 8 112", "cargo publico", "emprego publico", "funcao publica", "provimento", "vacancia", "posse", "exercicio", "estabilidade", "direitos e vantagens", "vencimento", "remuneracao", "deveres", "proibicoes", "responsabilidades", "regime disciplinar", "sindicancia", "processo administrativo disciplinar", "pad", "acumulacao"] },
    { target: "Responsabilidade Civil do Estado", keywords: ["responsabilidade civil", "responsabilidade civil do estado", "responsabilidade extracontratual", "risco administrativo", "risco integral", "dano", "nexo causal", "nexo de causalidade", "excludentes de responsabilidade", "direito de regresso", "omissao do estado"] },
    { target: "Improbidade Administrativa (Lei 8.429/92 alterada)", keywords: ["improbidade administrativa", "improbidade", "lei 8429", "lei 8 429", "lei 14230", "enriquecimento ilicito", "prejuizo ao erario", "violacao aos principios", "sancoes de improbidade", "prescricao de improbidade"] },
    { target: "Princípios da Administração Pública (LIMPE e Implícitos)", keywords: ["principios da administracao", "limpe", "legalidade", "impessoalidade", "moralidade", "publicidade", "eficiencia", "razoabilidade", "proporcionalidade", "supremacia do interesse publico", "indisponibilidade", "autotutela", "motivacao", "continuidade", "organizacao administrativa", "administracao direta", "administracao indireta", "autarquias", "fundacoes", "empresas publicas", "sociedades de economia mista", "consorcios publicos", "terceiro setor", "servicos publicos", "concessao", "permissao", "autorizacao"] },
    { target: "Licitações e Contratos (Nova Lei 14.133/2021)", keywords: ["licitacoes", "licitacao", "contratos administrativos", "contrato administrativo", "lei 14133", "lei 14 133", "lei 8666", "pregao", "concorrencia", "concurso", "leilao", "dialogo competitivo", "menor preco", "maior desconto", "melhor tecnica", "contratacao direta", "inexigibilidade", "dispensa", "habilitacao", "alteracao contratual", "rescisao", "sancoes", "registro de precos", "srp"] }
  ],

  "direito penal": [
    { target: "Crimes Contra a Pessoa e o Patrimônio", keywords: ["crimes contra a pessoa", "homicidio", "feminicidio", "lesao corporal", "aborto", "calunia", "difamacao", "injuria", "ameaca", "sequestro", "crimes contra a honra", "liberdade individual", "crimes contra o patrimonio", "furto", "roubo", "latrocinio", "extorsao", "estelionato", "apropriacao indebita", "receptacao", "dano", "fraude"] },
    { target: "Teoria do Crime: Tipicidade, Ilicitude e Culpabilidade", keywords: ["teoria do crime", "conceito de crime", "fato tipico", "conduta", "dolo", "culpa", "preterdolo", "resultado", "nexo causal", "imputacao objetiva", "tipicidade", "erro de tipo", "erro de proibicao", "ilicitude", "antijuridicidade", "excludentes de ilicitude", "legitima defesa", "estado de necessidade", "estrito cumprimento", "exercicio regular", "culpabilidade", "imputabilidade", "inimputabilidade", "menoridade", "potencial consciencia", "exigibilidade de conduta diversa"] },
    { target: "Crimes Contra a Administração Pública", keywords: ["crimes contra a administracao", "peculato", "concussao", "corrupcao passiva", "prevaricacao", "condescendencia", "advocacia administrativa", "desobediencia", "desacato", "corrupcao ativa", "resistencia", "falso testemunho", "denunciacao caluniosa", "coacao no curso do processo", "funcionario publico"] },
    { target: "Penas, Medidas de Segurança e Extinção da Punibilidade", keywords: ["penas", "teoria da pena", "penas privativas de liberdade", "reclusao", "detencao", "regime fechado", "regime semiaberto", "regime aberto", "penas restritivas de direitos", "prestacao pecuniaria", "perda de bens", "pena de multa", "dosimetria", "calculo da pena", "circunstancias judiciais", "atenuantes", "agravantes", "causas de aumento", "sursis", "suspensao condicional da pena", "livramento condicional", "efeitos da condenacao", "reabilitacao", "medidas de seguranca", "internacao", "extincao da punibilidade", "prescricao", "decadencia", "perempcao", "perdao judicial", "graca", "indulto", "anistia"] },
    { target: "Aplicação da Lei Penal no Tempo e no Espaço", keywords: ["aplicacao da lei penal", "lei penal no tempo", "anterioridade", "irretroatividade", "retroatividade", "abolitio criminis", "novatio legis", "lei penal excepcional", "temporaria", "tempo do crime", "lugar do crime", "territorialidade", "extraterritorialidade", "contagem de prazo", "interpretacao da lei penal"] },
    { target: "Concurso de Pessoas e Concurso de Crimes", keywords: ["concurso de pessoas", "coautoria", "participacao", "concurso de agentes", "autoria mediata", "participacao de menor importancia", "cooperacao dolosamente distinta", "concurso de crimes", "concurso material", "concurso formal", "crime continuado", "limite das penas"] }
  ],

  "direito processual penal": [
    { target: "Prisões Cautelares, Flagrante e Liberdade Provisória", keywords: ["prisao", "prisoes", "prisao em flagrante", "flagrante delito", "flagrante proprio", "flagrante improprio", "flagrante presumido", "flagrante preparado", "flagrante forjado", "flagrante esperado", "auto de prisao em flagrante", "audiencia de custodia", "prisao preventiva", "requisitos da preventiva", "prisao temporaria", "lei 7960", "medidas cautelares diversas", "fianca", "liberdade provisoria"] },
    { target: "Provas no Processo Penal e Cadeia de Custódia", keywords: ["provas", "prova", "teoria da prova", "prova pericial", "corpo de delito", "exame de corpo de delito", "cadeia de custodia", "coleta", "fixacao", "isolamento", "acondicionamento", "transporte", "custodia", "peritos", "interrogatorio", "confissao", "testemunhas", "prova testemunhal", "reconhecimento", "acareacao", "documentos", "indicios", "provas ilicitas", "frutos da arvore envenenada", "prova emprestada"] },
    { target: "Inquérito Policial", keywords: ["inquerito policial", "inquerito", "policia judiciaria", "natureza do inquerito", "caracteristicas do inquerito", "inquisitivo", "escrito", "sigiloso", "indisponivel", "oficial", "oficioso", "instauracao", "portaria", "requisicao", "requerimento", "diligencias", "conclusao", "relatorio", "arquivamento", "desarquivamento", "trancamento", "indiciamento", "prazos do inquerito", "acordo de nao persecucao penal", "anpp"] },
    { target: "Ação Penal Pública e Privada", keywords: ["acao penal", "condicoes da acao", "principios da acao penal", "acao penal publica", "incondicionada", "condicionada a representacao", "requisicao do ministro", "representacao do ofendido", "decadencia", "retratacao", "acao penal privada", "exclusiva", "personalissima", "subsidiaria da publica", "queixa crime", "denuncia", "aditamento", "renuncia", "perdao", "perempcao"] },
    { target: "Busca e Apreensão, Medidas Cautelares e Procedimentos", keywords: ["busca e apreensao", "medidas assecuratorias", "sequestro", "hipoteca legal", "arresto", "procedimentos penais", "rito ordinario", "rito sumario", "rito sumarissimo", "juizados especiais criminais", "jecrim", "lei 9099", "tribunal do juri", "rito do juri", "pronuncia", "impronuncia", "desclassificacao", "absolvicao sumaria", "plenario do juri", "recursos", "apelacao", "rese", "embargos", "habeas corpus"] },
    { target: "Jurisdição e Competência Penal", keywords: ["jurisdicao", "competencia", "competencia penal", "competencia pelo lugar", "domicilio do reu", "natureza da infracao", "distribuicao", "prevencao", "prerrogativa de funcao", "foro por prerrogativa", "conexao e continencia", "conflito de jurisdicao", "imunidades"] }
  ],

  "legislacao especial": [
    { target: "Organizações Criminosas (Lei nº 12.850/2013)", keywords: ["organizacoes criminosas", "organizacao criminosa", "orcrim", "lei 12850", "lei 12 850", "colaboracao premiada", "delacao premiada", "captacao ambiental", "acao controlada", "infiltracao de policiais", "infiltracao"] },
    { target: "Estatuto do Desarmamento (Lei nº 10.826/2003)", keywords: ["desarmamento", "estatuto do desarmamento", "lei 10826", "lei 10 826", "armas de fogo", "registro de arma", "porte de arma", "posse irregular", "porte ilegal", "disparo de arma", "comercio ilegal de armas", "trafico de armas", "uso permitido", "uso restrito", "uso proibido", "sinarm", "sigma"] },
    { target: "Lei de Drogas (Lei nº 11.343/2006)", keywords: ["drogas", "lei de drogas", "lei 11343", "lei 11 343", "sisnad", "usuario de drogas", "art 28", "porte para consumo", "trafico de drogas", "trafico privilegiado", "associacao para o trafico", "financiamento ao trafico", "maquinario para o trafico", "apreensao de drogas", "destruicao de drogas"] },
    { target: "Lei de Abuso de Autoridade (Lei nº 13.869/2019)", keywords: ["abuso de autoridade", "lei 13869", "lei 13 869", "sujeito ativo", "dolo especifico", "finalidade especifica", "efeitos da condenacao", "perda do cargo"] },
    { target: "Lei Maria da Penha (Lei nº 11.340/2006)", keywords: ["maria da penha", "lei maria da penha", "lei 11340", "lei 11 340", "violencia domestica", "violencia contra a mulher", "violencia fisica", "psicologica", "sexual", "patrimonial", "moral", "medidas protetivas", "descumprimento de medidas protetivas"] },
    { target: "Lavagem de Dinheiro (Lei nº 9.613/1998)", keywords: ["lavagem de dinheiro", "lavagem de capitais", "lei 9613", "lei 9 613", "ocultacao", "dissimulacao", "fases da lavagem", "colocacao", "placement", "layering", "integracao", "integration", "coaf"] },
    { target: "Lei de Tortura e Interceptação Telefônica", keywords: ["tortura", "lei de tortura", "lei 9455", "lei 9 455", "tortura prova", "tortura crime", "tortura castigo", "interceptacao telefonica", "lei 9296", "lei 9 296", "comunicacoes telefonicas", "escuta ambiental", "gravacao clandestina"] },
    { target: "Crimes Hediondos (Lei nº 8.072/1990)", keywords: ["crimes hediondos", "hediondos", "lei 8072", "lei 8 072", "rol taxativo", "equiparados a hediondos", "progressao de regime hediondo"] }
  ],

  "direitos humanos": [
    { target: "Gerações e Dimensões dos Direitos Humanos", keywords: ["direitos humanos", "teoria geral dos direitos humanos", "conceito", "evolucao historica", "geracoes", "dimensoes", "primeira geracao", "segunda geracao", "terceira geracao", "universalidade", "indivisibilidade", "inalienabilidade", "imprescritibilidade", "irrenunciabilidade", "cliquet", "sistema global", "tratados de direitos humanos", "incorporacao", "status supralegal", "bloco de constitucionalidade"] },
    { target: "Pacto de San José da Costa Rica (CADH)", keywords: ["pacto de san jose", "pacto de sao jose", "convencao americana", "cadh", "sistema interamericano", "comissao interamericana", "cidh", "corte interamericana", "corte idh", "jurisdicao contenciosa", "medidas provisionais"] },
    { target: "Declaração Universal dos Direitos Humanos (1948)", keywords: ["declaracao universal", "dudh", "dudh 1948", "onu", "carta internacional", "pacto internacional dos direitos civis e politicos", "pidcp", "pidesc", "direitos civis e politicos"] }
  ],

  "contabilidade geral e publica": [
    { target: "Demonstração do Resultado do Exercício (DRE)", keywords: ["dre", "demonstracao do resultado", "receitas", "despesas", "receita bruta", "receita liquida", "lucro bruto", "lucro operacional", "ebitda", "lajir", "lucro liquido", "resultado", "cpv", "cmv", "resultado financeiro"] },
    { target: "Balanço Patrimonial e Estrutura das Contas", keywords: ["balanco patrimonial", "ativo", "passivo", "patrimonio liquido", "ativo circulante", "ativo nao circulante", "passivo circulante", "passivo nao circulante", "capital social", "reservas", "contas patrimoniais", "plano de contas", "partidas dobradas", "debito", "credito", "balancete"] },
    { target: "Regime de Competência e Regime de Caixa", keywords: ["regime de competencia", "regime de caixa", "principios de contabilidade", "competencia", "prudencia", "continuidade", "oportunidade", "depreciacao", "amortizacao", "exaustao", "provisoes", "peclid"] },
    { target: "Contabilidade Aplicada ao Setor Público (CASP)", keywords: ["contabilidade publica", "casp", "setor publico", "mcasp", "nbc tsp", "orcamento publico", "receita publica", "despesa publica", "empenho", "liquidacao", "pagamento", "restos a pagar", "creditos adicionais", "balanco orcamentario", "balanco financeiro", "balanco patrimonial publico", "dvp", "dfc", "lei 4320", "lrf"] }
  ],

  "administracao publica": [
    { target: "Gestão por Processos e Indicadores de Desempenho", keywords: ["processos", "gestao por processos", "bpm", "mapeamento", "modelagem de processos", "indicadores", "indicadores de desempenho", "kpi", "metricas", "eficiencia", "eficacia", "efetividade", "economicidade", "qualidade"] },
    { target: "Governança Pública, Transparência e Accountability", keywords: ["governanca", "governanca publica", "accountability", "prestacao de contas", "transparencia", "lei de acesso a informacao", "lai", "lei 12527", "governo eletronico", "dados abertos", "participacao social", "ouvidoria", "controle social", "integridade", "compliance", "etica"] },
    { target: "Planejamento Estratégico e Gestão de Riscos", keywords: ["planejamento estrategico", "missao", "visao", "valores", "swot", "fofa", "bsc", "balanced scorecard", "objetivos estrategicos", "metas", "plano de acao", "5w2h", "matriz gut", "gestao de riscos", "gerenciamento de riscos", "coso", "iso 31000"] },
    { target: "Orçamento Público (PPA, LDO e LOA)", keywords: ["orcamento", "orcamento publico", "ppa", "plano plurianual", "ldo", "diretrizes orcamentarias", "loa", "lei orcamentaria anual", "ciclo orcamentario", "principios orcamentarios", "orcamento programa", "emendas parlamentares", "orcamento impositivo"] }
  ],

  "criminologia": [
    { target: "Escolas Criminológicas e Teorias Sociológicas", keywords: ["criminologia", "metodo empirico", "interdisciplinar", "delito", "delinquente", "escola classica", "beccaria", "escola positiva", "lombroso", "ferri", "garofalo", "positivismo", "teorias sociologicas", "escola de chicago", "desorganizacao social", "anomia", "merton", "durkheim", "associacao diferencial", "sutherland", "colarinho branco", "subcultura", "labelling", "etiquetamento", "criminologia critica", "criminologia radical"] },
    { target: "Vitimologia, Processos de Vitimização e Cifras Criminais", keywords: ["vitimologia", "vitima", "vitimizacao", "mendelsohn", "hentig", "vitimizacao primaria", "vitimizacao secundaria", "revitimizacao", "sobrevitimizacao", "vitimizacao terciaria", "cifras criminais", "cifra negra", "cifra dourada", "cifra cinza", "cifra rosa", "cifra verde"] },
    { target: "Prevenção Delitiva e Modelos de Reação ao Crime", keywords: ["prevencao delitiva", "prevencao", "prevencao primaria", "prevencao secundaria", "prevencao terciaria", "policia comunitaria", "janelas quebradas", "broken windows", "tolerancia zero", "prevencao situacional", "cpted", "modelos de reacao", "modelo dissuasorio", "modelo ressocializador", "modelo restaurativo", "justica restaurativa"] }
  ],

  "legislacao de transito": [
    { target: "Crimes e Infrações de Trânsito (CTB)", keywords: ["transito", "ctb", "codigo de transito", "lei 9503", "crimes de transito", "homicidio culposo", "lesao culposa", "embriaguez ao volante", "racha", "sem habilitacao", "omissao de socorro", "infracoes", "infracao gravissima", "grave", "media", "leve", "pontuacao", "cnh", "penalidades", "medidas administrativas", "retencao", "remocao", "suspensao", "cassacao", "jari", "cetran", "contran"] },
    { target: "Normas Gerais de Circulação e Conduta (CTB)", keywords: ["circulacao", "normas de circulacao", "circulacao e conduta", "preferencia", "ultrapassagem", "velocidade", "luzes", "buzina", "cinto de seguranca", "transporte de criancas", "parada", "estacionamento", "pedestres", "sinalizacao", "placas", "marcas viarias", "semaforos", "veiculos", "registro", "licenciamento"] }
  ],

  "direito penitenciario": [
    { target: "Lei 7.210/1984 — Lei de Execução Penal", keywords: ["execucao penal", "lep", "lei 7210", "lei 7 210", "individualizacao da pena", "preso provisorio", "assistencia", "direitos e deveres", "disciplina", "faltas disciplinares", "rdd", "regime disciplinar diferenciado", "orgaos da execucao", "remicao", "progressao de regime", "regressao", "saida temporaria", "permissao de saida", "livramento condicional", "monitoracao eletronica"] }
  ]
};

// Aliases para disciplinas correlatas
const DISCIPLINE_ALIASES = {
  "lingua portuguesa": ["lingua portuguesa", "portugues", "lingua portuguesa e interpretacao de texto", "comunicacao e expressao"],
  "raciocinio logico": ["raciocinio logico", "raciocinio logico matematico", "raciocinio matematico", "matematica raciocinio logico", "matematica e raciocinio logico", "matematica"],
  "informatica e tecnologia": ["informatica e tecnologia", "informatica", "informatica basica", "nocoes de informatica", "tecnologia da informacao", "ti"],
  "direito constitucional": ["direito constitucional", "nocoes de direito constitucional", "direito publico"],
  "direito administrativo": ["direito administrativo", "nocoes de direito administrativo", "administracao publica e direito administrativo"],
  "direito penal": ["direito penal", "nocoes de direito penal", "direito penal e processual penal"],
  "direito processual penal": ["direito processual penal", "nocoes de direito processual penal", "nocoes de processo penal", "processo penal", "direito penal e processual penal"],
  "legislacao especial": ["legislacao especial", "legislacao penal especial", "legislacao especial penal e processual penal", "legislacao penal extravagante", "legislacao extravagante", "legislacao especifica"],
  "direitos humanos": ["direitos humanos", "nocoes de direitos humanos", "conhecimentos comuns perito pf"],
  "contabilidade geral e publica": ["contabilidade geral e publica", "contabilidade geral", "contabilidade publica", "contabilidade", "perito pf area 1 contabil financeira"],
  "administracao publica": ["administracao publica", "nocoes de administracao", "administracao publica e etica", "administracao geral e publica"],
  "criminologia": ["criminologia"],
  "legislacao de transito": ["legislacao de transito", "transito", "codigo de transito brasileiro"],
  "direito penitenciario": ["direito penitenciario", "execucao penal", "legislacao institucional ppes", "legislacao estadual"]
};

function getCategoryForDiscipline(discName) {
  const norm = normalizeStr(discName);
  for (const [cat, aliases] of Object.entries(DISCIPLINE_ALIASES)) {
    for (const alias of aliases) {
      if (norm === alias || norm.includes(alias) || alias.includes(norm)) {
        return cat;
      }
    }
  }
  return null;
}

async function run() {
  console.log("Iniciando mapeamento e persistência de equivalências semânticas...");

  const [disciplinas, assuntos, questoes, topicos, existingEquivs] = await Promise.all([
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
  console.log(`Total canonical assuntos com questões: ${canonicalAssuntos.length}`);

  // Mapa canonical por disciplina_id e por nome normalizado
  const canonicalByDiscId = new Map();
  const canonicalByNormName = new Map();
  for (const ca of canonicalAssuntos) {
    if (!canonicalByDiscId.has(ca.disciplina_id)) canonicalByDiscId.set(ca.disciplina_id, []);
    canonicalByDiscId.get(ca.disciplina_id).push(ca);

    const norm = normalizeStr(ca.nome);
    canonicalByNormName.set(norm, ca);
  }

  // Identificar todos os assuntos que precisam de equivalência:
  // 1. Assuntos referenciados em edital_topicos que não possuem questões diretas
  // 2. Assuntos gerais do banco de dados que têm 0 questões
  const assuntosSemQ = assuntos.filter(a => (qCountByAssunto.get(a.id) || 0) === 0);
  console.log(`Total de assuntos com 0 questões no banco: ${assuntosSemQ.length}`);

  const existingPairSet = new Set(
    existingEquivs.map(e => `${e.assunto_edital_id}:${e.assunto_questao_id}`)
  );

  const newEquivalencias = [];

  for (const ass of assuntosSemQ) {
    const disc = discMap.get(ass.disciplina_id);
    const discName = disc?.nome || "";
    const category = getCategoryForDiscipline(discName);

    const assNorm = normalizeStr(ass.nome);
    let matchedCanonical = null;
    let matchConfidence = "baixa";

    // 1. Tentar correspondência exata de nome normalizado com qualquer canonical
    if (canonicalByNormName.has(assNorm)) {
      matchedCanonical = canonicalByNormName.get(assNorm);
      matchConfidence = "alta";
    }

    // 2. Tentar regras semânticas na categoria da disciplina
    if (!matchedCanonical && category && DISCIPLINE_RULES[category]) {
      const rules = DISCIPLINE_RULES[category];
      let bestRuleScore = 0;
      let bestRuleTarget = null;

      for (const rule of rules) {
        let score = 0;
        const targetNorm = normalizeStr(rule.target);
        if (assNorm === targetNorm) {
          score = 100;
        } else if (assNorm.includes(targetNorm) || targetNorm.includes(assNorm)) {
          score = 85;
        } else {
          for (const kw of rule.keywords) {
            const kwNorm = normalizeStr(kw);
            if (assNorm.includes(kwNorm)) {
              score += kwNorm.length > 5 ? 25 : 15;
            }
          }
        }

        if (score > bestRuleScore) {
          bestRuleScore = score;
          bestRuleTarget = rule.target;
        }
      }

      if (bestRuleScore >= 15 && bestRuleTarget) {
        // Encontrar o canonical correspondente a esse target
        const targetNorm = normalizeStr(bestRuleTarget);
        matchedCanonical = canonicalAssuntos.find(ca => normalizeStr(ca.nome) === targetNorm);
        matchConfidence = bestRuleScore >= 50 ? "alta" : "media";
      }
    }

    // 3. Tentar matching por substring e token overlap com os canonical da mesma disciplina / categoria
    if (!matchedCanonical) {
      let candidatePool = canonicalByDiscId.get(ass.disciplina_id) || [];
      if (candidatePool.length === 0 && category) {
        // Buscar canonicals em disciplinas associadas à mesma categoria
        for (const ca of canonicalAssuntos) {
          const caDisc = discMap.get(ca.disciplina_id);
          if (caDisc && getCategoryForDiscipline(caDisc.nome) === category) {
            candidatePool.push(ca);
          }
        }
      }

      const assTokens = assNorm.split(" ").filter(t => t.length > 3);
      let bestCandidateScore = 0;
      let bestCandidate = null;

      for (const cand of candidatePool) {
        const candNorm = normalizeStr(cand.nome);
        if (candNorm.includes(assNorm) || assNorm.includes(candNorm)) {
          if (bestCandidateScore < 70) {
            bestCandidateScore = 70;
            bestCandidate = cand;
          }
        }

        const candTokens = candNorm.split(" ").filter(t => t.length > 3);
        let common = 0;
        for (const t of assTokens) {
          if (candTokens.includes(t)) common++;
        }
        if (common > 0) {
          const score = (common / Math.max(assTokens.length, candTokens.length)) * 60;
          if (score > bestCandidateScore && score >= 20) {
            bestCandidateScore = score;
            bestCandidate = cand;
          }
        }
      }

      if (bestCandidate && bestCandidateScore >= 20) {
        matchedCanonical = bestCandidate;
        matchConfidence = bestCandidateScore >= 60 ? "alta" : "media";
      }
    }

    if (matchedCanonical) {
      const pairKey = `${ass.id}:${matchedCanonical.id}`;
      if (!existingPairSet.has(pairKey)) {
        newEquivalencias.push({
          assunto_edital_id: ass.id,
          assunto_questao_id: matchedCanonical.id,
          confianca: matchConfidence,
        });
        existingPairSet.add(pairKey);
      }
    }
  }

  console.log(`\nNovas equivalências geradas para inserção: ${newEquivalencias.length}`);

  // Inserir em lotes de 100
  const batchSize = 100;
  let insertedCount = 0;
  for (let i = 0; i < newEquivalencias.length; i += batchSize) {
    const batch = newEquivalencias.slice(i, i + batchSize);
    const { data, error } = await supabase
      .from("assunto_equivalencias")
      .insert(batch);
    if (error) {
      console.error(`Erro ao inserir lote ${i}-${i + batch.length}:`, error.message);
    } else {
      insertedCount += batch.length;
    }
  }

  console.log(`\nSucesso! ${insertedCount} novas equivalências inseridas na tabela assunto_equivalencias.`);

  // Total final na tabela
  const { count: finalCount } = await supabase.from("assunto_equivalencias").select("*", { count: "exact", head: true });
  console.log(`Total final de equivalências no banco: ${finalCount}`);
}

run().catch(console.error);
