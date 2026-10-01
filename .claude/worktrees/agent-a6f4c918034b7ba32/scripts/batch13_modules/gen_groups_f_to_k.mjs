import { DISCIPLINAS, ASSUNTOS, criarQuestaoCE, criarQuestaoME, writeModuleFile } from "./helpers.mjs";

const orgaos = [
  ["Polícia Federal", "Agente de Polícia Federal"],
  ["Polícia Civil", "Investigador de Polícia"],
  ["Polícia Penal", "Policial Penal"],
  ["Polícia Militar", "Soldado da Polícia Militar"],
  ["Guarda Municipal", "Guarda Civil Municipal"],
  ["Polícia Rodoviária Federal", "Policial Rodoviário Federal"],
];
const bancas = ["Cebraspe", "FGV", "Vunesp", "Instituto AOCP", "IBFC"];
const difs = ["facil", "medio", "medio", "dificil"];
const niveis = ["recordar", "compreender", "aplicar", "analisar"];

function base(slug, i, assuntoId, tema, regra, falsa, disciplinaId) {
  const [orgao, cargo] = orgaos[i % orgaos.length];
  const correta = i % 4 !== 3;
  return criarQuestaoCE({
    slug,
    disciplinaId,
    assuntoId,
    bancaNome: bancas[i % bancas.length],
    orgaoNome: orgao,
    cargoNome: cargo,
    ano: 2026,
    dificuldade: difs[i % difs.length],
    enunciado: correta ? regra : falsa,
    explicacao: correta
      ? `A assertiva está correta. ${regra}`
      : `A assertiva está incorreta. A formulação distorce o instituto cobrado em ${tema}; a regra adequada é: ${regra}`,
    gabaritoCerto: correta,
    conceitoPrincipal: tema,
    habilidadeCobrada: `Avaliar aplicação do tema ${tema} em contexto de carreira policial`,
    teseOuRegra: regra,
    nivelCognitivo: niveis[i % niveis.length],
  });
}

function me(slug, i, assuntoId, tema, regra, disciplinaId) {
  const [orgao, cargo] = orgaos[(i + 2) % orgaos.length];
  const correta = i % 5;
  const distratores = [
    `Afastar ${tema} por mera conveniência administrativa, ainda que a norma imponha garantia mínima inderrogável.`,
    `Aplicar ${tema} somente quando houver autorização posterior da autoridade policial, dispensando o parâmetro normativo principal.`,
    `Substituir ${tema} por juízo discricionário sem motivação, suficiente por si só para restringir direito fundamental.`,
    `Considerar que ${tema} não produz efeitos em concursos policiais por se tratar de matéria apenas teórica.`,
    `Presumir que ${tema} sempre autoriza medida mais gravosa, sem exame de proporcionalidade ou aderência legal.`,
  ];
  const alternativas = [0, 1, 2, 3, 4].map((n) => ({
    letra: String.fromCharCode(65 + n),
    texto: n === correta ? `Observar a regra segundo a qual ${regra.charAt(0).toLowerCase()}${regra.slice(1)}` : distratores[n],
    correta: n === correta,
    explicacao_especifica: n === correta ? "Alternativa correta: preserva o parâmetro legal ou jurisprudencial exigido." : "Alternativa incorreta: altera pressuposto normativo, confunde institutos ou dispensa requisito obrigatório.",
  }));
  return criarQuestaoME({
    slug,
    disciplinaId,
    assuntoId,
    bancaNome: bancas[(i + 1) % bancas.length],
    orgaoNome: orgao,
    cargoNome: cargo,
    ano: 2026,
    dificuldade: difs[(i + 1) % difs.length],
    enunciado: `Em situação prática envolvendo ${tema}, assinale a alternativa correta para a atuação institucional de ${cargo.toLowerCase()}.`,
    explicacao: `A alternativa correta conserva a regra matriz: ${regra} As demais proposições trocam garantia por conveniência, dispensam requisito ou ampliam indevidamente poder estatal.`,
    alternativas,
    conceitoPrincipal: tema,
    habilidadeCobrada: `Selecionar a consequência jurídica correta em caso prático sobre ${tema}`,
    teseOuRegra: regra,
    nivelCognitivo: niveis[(i + 2) % niveis.length],
  });
}

function buildModule(prefix, total, disciplinaId, specs) {
  const qs = [];
  for (let i = 0; i < total; i++) {
    const s = specs[i % specs.length];
    const slug = `${prefix}-${String(i + 1).padStart(3, "0")}-${s.key}`;
    qs.push(i % 5 === 4 ? me(slug, i, s.assuntoId, s.tema, s.regra, disciplinaId) : base(slug, i, s.assuntoId, s.tema, s.regra, s.falsa, disciplinaId));
  }
  return qs;
}

const dhGlobal = [
  { key: "dudh-dignidade", assuntoId: ASSUNTOS.DH_DUDH_1948, tema: "DUDH e dignidade humana", regra: "A Declaração Universal de 1948 afirma que todos os seres humanos nascem livres e iguais em dignidade e direitos, servindo como parâmetro interpretativo internacional para a proteção contra práticas policiais discriminatórias.", falsa: "A Declaração Universal de 1948 permite tratamento policial diferenciado por origem nacional sempre que a medida simplificar a triagem de suspeitos." },
  { key: "dudh-presuncao", assuntoId: ASSUNTOS.DH_DUDH_1948, tema: "DUDH e presunção de inocência", regra: "A DUDH assegura que toda pessoa acusada de delito tem direito a ser presumida inocente até que sua culpabilidade seja provada em processo público com todas as garantias de defesa.", falsa: "A DUDH autoriza que a pessoa presa em flagrante seja publicamente tratada como culpada antes de sentença para fins de prevenção geral." },
  { key: "dimensoes-direitos", assuntoId: ASSUNTOS.DH_GERACOES_DIMENSOES, tema: "Dimensões dos direitos humanos", regra: "A classificação dos direitos humanos em dimensões tem finalidade didática e cumulativa, não significando substituição histórica nem hierarquia rígida entre direitos civis, políticos, sociais, coletivos e difusos.", falsa: "A teoria das dimensões dos direitos humanos revogou os direitos civis de primeira dimensão quando surgiram os direitos sociais de segunda dimensão." },
  { key: "vedacao-tortura", assuntoId: ASSUNTOS.DH_DUDH_1948, tema: "Vedação absoluta de tortura", regra: "A proibição de tortura, tratamento cruel, desumano ou degradante possui natureza inderrogável e não admite relativização por ordem superior, emergência pública ou gravidade do crime investigado.", falsa: "A proibição internacional de tortura admite relativização em interrogatório policial de terrorismo quando houver autorização verbal de autoridade superior." },
  { key: "devido-processo", assuntoId: ASSUNTOS.DH_DUDH_1948, tema: "Devido processo e juiz imparcial", regra: "A proteção internacional dos direitos humanos assegura julgamento por tribunal independente e imparcial, com contraditório, ampla defesa e publicidade compatível com a proteção das partes.", falsa: "O devido processo internacional admite que a autoridade policial condene administrativamente pessoa investigada quando a prova indiciária for robusta." },
  { key: "igualdade-nao-discriminacao", assuntoId: ASSUNTOS.DH_GERACOES_DIMENSOES, tema: "Igualdade e não discriminação", regra: "A igualdade em direitos humanos exige que protocolos policiais evitem seletividade discriminatória por raça, gênero, origem, religião, orientação sexual ou condição social.", falsa: "A igualdade em direitos humanos autoriza seleção policial preferencial de suspeitos por perfil étnico quando a estatística criminal parecer conveniente." },
];

const dhInter = [
  { key: "cadh-vida", assuntoId: ASSUNTOS.DH_CADH_SAN_JOSE, tema: "Convenção Americana e direito à vida", regra: "A Convenção Americana sobre Direitos Humanos protege o direito à vida e impõe ao Estado deveres negativos de abstenção e deveres positivos de prevenção, investigação e punição de mortes sob custódia ou atuação estatal.", falsa: "A Convenção Americana limita o direito à vida a abstenções formais e exclui o dever estatal de investigar mortes provocadas por agentes públicos." },
  { key: "cadh-liberdade-pessoal", assuntoId: ASSUNTOS.DH_CADH_SAN_JOSE, tema: "CADH e liberdade pessoal", regra: "Toda pessoa detida deve ser informada das razões da detenção, comunicada sem demora da acusação formulada e conduzida, sem demora, à presença de juiz ou autoridade autorizada por lei a exercer funções judiciais.", falsa: "A CADH permite custódia policial por prazo indeterminado sem comunicação da razão da detenção quando houver investigação sigilosa." },
  { key: "cadh-garantias-judiciais", assuntoId: ASSUNTOS.DH_CADH_SAN_JOSE, tema: "Garantias judiciais convencionais", regra: "As garantias judiciais da CADH incluem direito de defesa, tempo e meios adequados para preparação, assistência de defensor e direito de recorrer da sentença a juiz ou tribunal superior.", falsa: "As garantias judiciais da CADH asseguram defesa apenas após a condenação, dispensando contraditório durante a instrução." },
  { key: "controle-convencionalidade", assuntoId: ASSUNTOS.DH_CADH_SAN_JOSE, tema: "Controle de convencionalidade", regra: "O controle de convencionalidade exige que autoridades estatais interpretem normas internas de modo compatível com tratados de direitos humanos ratificados pelo Brasil e com parâmetros interamericanos aplicáveis.", falsa: "O controle de convencionalidade permite descumprir tratado de direitos humanos sempre que lei ordinária posterior dispuser em sentido contrário." },
  { key: "audiencia-custodia", assuntoId: ASSUNTOS.DH_CADH_SAN_JOSE, tema: "Audiência de custódia", regra: "A audiência de custódia concretiza o controle judicial imediato da prisão, permitindo avaliar legalidade, necessidade de cautelar, ocorrência de maus-tratos e respeito à integridade da pessoa detida.", falsa: "A audiência de custódia serve exclusivamente para produção antecipada de confissão e dispensa a presença de defensor." },
  { key: "uso-forca", assuntoId: ASSUNTOS.DH_CADH_SAN_JOSE, tema: "Uso da força e proporcionalidade", regra: "O uso da força por agentes estatais deve observar legalidade, necessidade, proporcionalidade, precaução e prestação de contas, sendo a força letal admissível apenas como último recurso para proteger vida contra ameaça iminente.", falsa: "O uso da força letal é autorizado para impedir fuga de suspeito de crime patrimonial sem ameaça atual à vida de terceiros." },
];

const infoSeg = [
  { key: "hash-integridade", assuntoId: ASSUNTOS.INFO_SEGURANCA_CRIPTOGRAFIA, tema: "Hash criptográfico e integridade", regra: "Funções hash criptográficas geram resumo de tamanho fixo e são usadas para verificar integridade; não são mecanismo de criptografia reversível nem permitem recuperar o arquivo original a partir do digest.", falsa: "Hash criptográfico permite descriptografar o arquivo original desde que o perito conheça o algoritmo SHA-256 utilizado." },
  { key: "assinatura-digital", assuntoId: ASSUNTOS.INFO_SEGURANCA_CRIPTOGRAFIA, tema: "Assinatura digital", regra: "Assinatura digital utiliza criptografia assimétrica para garantir autenticidade, integridade e não repúdio, mediante chave privada do signatário e verificação com chave pública/certificado correspondente.", falsa: "Assinatura digital garante confidencialidade do documento mesmo quando seu conteúdo é enviado em texto claro a terceiros." },
  { key: "phishing", assuntoId: ASSUNTOS.INFO_SEGURANCA_CRIPTOGRAFIA, tema: "Phishing e engenharia social", regra: "Phishing é técnica de engenharia social que busca induzir a vítima a revelar credenciais ou executar ações maliciosas, exigindo prevenção por verificação de links, remetentes, certificados e autenticação multifator.", falsa: "Phishing depende obrigatoriamente da exploração de falha técnica no sistema operacional, não sendo possível por e-mail aparentemente legítimo." },
  { key: "vpn", assuntoId: ASSUNTOS.INFO_REDES_NUVEM, tema: "VPN e tunelamento", regra: "VPN cria túnel lógico criptografado sobre rede pública ou não confiável, protegendo confidencialidade e integridade do tráfego entre cliente e rede/servidor remoto.", falsa: "VPN elimina a necessidade de autenticação do usuário e torna impossível a interceptação de tráfego em qualquer ponto da rede." },
  { key: "modelo-osi", assuntoId: ASSUNTOS.INFO_REDES_NUVEM, tema: "Modelo OSI e protocolos", regra: "No modelo OSI, TCP e UDP associam-se à camada de transporte, IP à camada de rede, e HTTP/HTTPS a protocolos de aplicação utilizados para comunicação web.", falsa: "No modelo OSI, HTTP pertence à camada física e IP pertence à camada de sessão, razão pela qual roteadores interpretam páginas web." },
  { key: "backup-321", assuntoId: ASSUNTOS.INFO_SEGURANCA_CRIPTOGRAFIA, tema: "Estratégia de backup 3-2-1", regra: "A estratégia 3-2-1 recomenda manter três cópias dos dados, em dois tipos de mídia, com ao menos uma cópia off-site ou isolada, reduzindo o impacto de ransomware, falha física e desastre local.", falsa: "A estratégia 3-2-1 dispensa cópia externa quando o disco local possuir partições separadas no mesmo equipamento." },
];

const infoSis = [
  { key: "linux-permissoes", assuntoId: ASSUNTOS.INFO_SO_LINUX_WINDOWS, tema: "Permissões Linux", regra: "Em sistemas Unix/Linux, permissões são representadas para usuário, grupo e outros, com leitura (r=4), escrita (w=2) e execução (x=1), de modo que 755 indica rwx para dono e rx para grupo e demais usuários.", falsa: "Em Linux, permissão 755 concede escrita irrestrita a todos os usuários, sendo adequada para arquivos sigilosos de investigação." },
  { key: "windows-ntfs", assuntoId: ASSUNTOS.INFO_SO_LINUX_WINDOWS, tema: "Permissões NTFS", regra: "Permissões NTFS no Windows podem ser herdadas ou explicitamente atribuídas e permitem controle granular de leitura, gravação, execução e controle total por usuário ou grupo.", falsa: "Permissões NTFS aplicam-se apenas a impressoras de rede e não interferem no acesso local a arquivos em disco." },
  { key: "sql-injection", assuntoId: ASSUNTOS.INFO_BANCO_DADOS_SQL, tema: "SQL Injection", regra: "SQL Injection ocorre quando entradas não validadas são concatenadas em comandos SQL, podendo ser mitigada com consultas parametrizadas, validação de entrada e privilégios mínimos no banco.", falsa: "SQL Injection é impedido apenas por criptografar a conexão com TLS, ainda que o sistema concatene texto do usuário na consulta." },
  { key: "normalizacao", assuntoId: ASSUNTOS.INFO_BANCO_DADOS_SQL, tema: "Normalização de banco de dados", regra: "A normalização reduz redundâncias e anomalias de inserção, atualização e exclusão, organizando dados em tabelas relacionadas por chaves primárias e estrangeiras.", falsa: "Normalização consiste em duplicar campos em todas as tabelas para evitar relacionamentos e acelerar qualquer consulta sem efeitos colaterais." },
  { key: "planilhas-formulas", assuntoId: ASSUNTOS.INFO_SUITES_ESCRITORIO, tema: "Planilhas eletrônicas", regra: "Em planilhas, referências relativas se ajustam quando copiadas, enquanto referências absolutas com cifrão mantêm linha e/ou coluna fixas, como em $A$1.", falsa: "Em planilhas, a referência $A$1 é relativa e sempre muda para B2 quando copiada uma célula para baixo e à direita." },
  { key: "nuvem-iaas-paas-saas", assuntoId: ASSUNTOS.INFO_REDES_NUVEM, tema: "Modelos de computação em nuvem", regra: "IaaS fornece infraestrutura virtualizada, PaaS oferece plataforma gerenciada para desenvolvimento e SaaS disponibiliza aplicação pronta ao usuário final via rede.", falsa: "SaaS significa aluguel exclusivo de servidor físico, cabendo ao usuário instalar sistema operacional, runtime e aplicação." },
];

const rlmProp = [
  { key: "condicional", assuntoId: ASSUNTOS.RLM_PROPOSICIONAL, tema: "Condicional material", regra: "A proposição condicional 'P implica Q' é falsa apenas quando P é verdadeira e Q é falsa, sendo verdadeira nos demais casos da tabela-verdade.", falsa: "A condicional 'P implica Q' é falsa sempre que P for falsa, independentemente do valor lógico de Q." },
  { key: "bicondicional", assuntoId: ASSUNTOS.RLM_PROPOSICIONAL, tema: "Bicondicional", regra: "A bicondicional 'P se e somente se Q' é verdadeira quando P e Q possuem o mesmo valor lógico e falsa quando os valores lógicos são distintos.", falsa: "A bicondicional é verdadeira exatamente quando apenas uma das proposições componentes for verdadeira." },
  { key: "demorgan", assuntoId: ASSUNTOS.RLM_EQUIVALENCIAS_NEGACAO, tema: "Leis de De Morgan", regra: "A negação de 'P e Q' é logicamente equivalente a 'não P ou não Q', e a negação de 'P ou Q' é equivalente a 'não P e não Q'.", falsa: "A negação de 'P e Q' é 'não P e não Q', pois a conjunção sempre se mantém na negação composta." },
  { key: "contrapositiva", assuntoId: ASSUNTOS.RLM_EQUIVALENCIAS_NEGACAO, tema: "Equivalência da contrapositiva", regra: "A condicional 'P implica Q' é logicamente equivalente à sua contrapositiva 'não Q implica não P'.", falsa: "A condicional 'P implica Q' é equivalente à recíproca 'Q implica P' em qualquer tabela-verdade." },
  { key: "tautologia", assuntoId: ASSUNTOS.RLM_PROPOSICIONAL, tema: "Tautologia, contradição e contingência", regra: "Tautologia é proposição composta sempre verdadeira, contradição é sempre falsa e contingência assume valores verdadeiros e falsos conforme os valores das proposições simples.", falsa: "Tautologia é proposição composta que pode ser verdadeira ou falsa conforme o caso concreto narrado no enunciado." },
];

const rlmProb = [
  { key: "conjuntos-inclusao", assuntoId: ASSUNTOS.RLM_DIAGRAMAS_CONJUNTOS, tema: "Princípio da inclusão-exclusão", regra: "Para dois conjuntos finitos, n(A ∪ B) = n(A) + n(B) - n(A ∩ B), evitando a contagem duplicada dos elementos comuns.", falsa: "Para dois conjuntos finitos, n(A ∪ B) = n(A) + n(B) + n(A ∩ B), pois a interseção deve ser somada duas vezes." },
  { key: "arranjo-combinacao", assuntoId: ASSUNTOS.RLM_COMBINATORIA_CONTAGEM, tema: "Arranjos e combinações", regra: "Arranjo considera a ordem dos elementos selecionados; combinação desconsidera a ordem, contando apenas subconjuntos de mesmo tamanho.", falsa: "Combinação e arranjo sempre produzem o mesmo resultado porque ambos escolhem elementos sem reposição." },
  { key: "principio-multiplicativo", assuntoId: ASSUNTOS.RLM_COMBINATORIA_CONTAGEM, tema: "Princípio fundamental da contagem", regra: "Se uma decisão pode ser tomada de m modos e, para cada um deles, outra de n modos, então o número de resultados sucessivos é m vezes n.", falsa: "No princípio multiplicativo, escolhas sucessivas independentes devem ser somadas, nunca multiplicadas." },
  { key: "probabilidade-complementar", assuntoId: ASSUNTOS.RLM_PROBABILIDADE_ESTATISTICA, tema: "Probabilidade do evento complementar", regra: "A probabilidade do evento complementar é P(A^c)=1-P(A), desde que os eventos sejam considerados no mesmo espaço amostral.", falsa: "A probabilidade do evento complementar é sempre igual à probabilidade do próprio evento quando o espaço amostral é finito." },
  { key: "media-mediana", assuntoId: ASSUNTOS.RLM_PROBABILIDADE_ESTATISTICA, tema: "Medidas de tendência central", regra: "A média aritmética é a soma dos valores dividida pela quantidade de observações, enquanto a mediana é o valor central após ordenação da série.", falsa: "A mediana é obtida pela soma de todos os valores dividida pelo número de observações, sendo sinônimo de média aritmética." },
];

const portInterp = [
  { key: "inferir", assuntoId: ASSUNTOS.PORT_INTERPRETACAO, tema: "Inferência textual", regra: "Inferir é concluir informação implícita a partir de pistas linguísticas e relações lógicas do texto, sem extrapolar para ideias incompatíveis com o conteúdo apresentado.", falsa: "Inferir significa acrescentar ao texto qualquer opinião externa do leitor, ainda que sem apoio em marcas linguísticas." },
  { key: "coesao", assuntoId: ASSUNTOS.PORT_INTERPRETACAO, tema: "Coesão referencial", regra: "Pronomes, elipses e expressões equivalentes funcionam como mecanismos de coesão referencial ao retomar ou antecipar elementos do texto.", falsa: "Coesão referencial ocorre apenas por repetição integral de substantivos, sendo incompatível com pronomes." },
  { key: "pontuacao-vocativo", assuntoId: ASSUNTOS.PORT_PONTUACAO, tema: "Pontuação do vocativo", regra: "O vocativo deve ser isolado por vírgula(s), pois constitui termo de chamamento sem função sintática de sujeito ou objeto na oração.", falsa: "O vocativo exerce função de sujeito e, por isso, nunca pode ser separado por vírgula." },
  { key: "ortografia-hifen", assuntoId: ASSUNTOS.PORT_ORTOGRAFIA, tema: "Ortografia e hífen", regra: "O hífen em compostos e prefixos obedece a regras ortográficas específicas, como uso diante de h e em certos casos de vogais idênticas, exigindo análise da formação vocabular.", falsa: "O hífen foi abolido de todas as palavras compostas após o Acordo Ortográfico, sem exceções." },
];

const portGram = [
  { key: "concordancia-verbal", assuntoId: ASSUNTOS.PORT_CONCORDANCIA, tema: "Concordância verbal", regra: "O verbo concorda, em regra, com o núcleo do sujeito em número e pessoa, ainda que o sujeito venha posposto ou separado do verbo por termos intercalados.", falsa: "O verbo deve concordar sempre com o termo mais próximo, ainda que este não seja o núcleo do sujeito." },
  { key: "crase", assuntoId: ASSUNTOS.PORT_REGENCIA_CRASE, tema: "Crase", regra: "A crase resulta da fusão da preposição 'a' com artigo feminino 'a' ou com pronomes demonstrativos iniciados por a, exigindo termo regente que peça preposição e termo regido feminino determinado.", falsa: "A crase ocorre automaticamente antes de todo substantivo feminino, mesmo quando o verbo regente não exige preposição." },
  { key: "regencia", assuntoId: ASSUNTOS.PORT_REGENCIA_CRASE, tema: "Regência verbal", regra: "Regência verbal descreve a relação entre verbo e seus complementos, definindo se o complemento é direto, indireto ou exige preposição específica, conforme o sentido empregado.", falsa: "A regência verbal é indiferente ao sentido do verbo, de modo que qualquer preposição pode introduzir seu complemento." },
  { key: "sintaxe-adjunto", assuntoId: ASSUNTOS.PORT_SINTAXE, tema: "Adjunto adnominal e complemento nominal", regra: "Adjunto adnominal caracteriza ou determina substantivo, frequentemente com valor ativo/possessivo, ao passo que complemento nominal completa nome abstrato, adjetivo ou advérbio com valor frequentemente passivo.", falsa: "Complemento nominal modifica apenas verbos transitivos diretos, equivalendo sempre ao objeto direto da oração." },
  { key: "morfologia-pronomes", assuntoId: ASSUNTOS.PORT_MORFOLOGIA, tema: "Pronomes e colocação pronominal", regra: "A colocação pronominal em português observa fatores de atração, tempos verbais e formalidade; palavras negativas, pronomes relativos e conjunções subordinativas atraem próclise em norma-padrão.", falsa: "Palavras negativas impedem próclise e exigem sempre ênclise em construções da norma-padrão." },
];

writeModuleFile("m15_dh_sistema_global.mjs", "m15_questoes", buildModule("l13-dh-global", 22, DISCIPLINAS.DIREITOS_HUMANOS, dhGlobal));
writeModuleFile("m16_dh_sistema_interamericano.mjs", "m16_questoes", buildModule("l13-dh-inter", 23, DISCIPLINAS.DIREITOS_HUMANOS, dhInter));
writeModuleFile("m17_info_seguranca_redes.mjs", "m17_questoes", buildModule("l13-info-seg", 23, DISCIPLINAS.INFORMATICA_TI, infoSeg));
writeModuleFile("m18_info_sistemas_dados.mjs", "m18_questoes", buildModule("l13-info-sis", 22, DISCIPLINAS.INFORMATICA_TI, infoSis));
writeModuleFile("m19_rlm_proposicional.mjs", "m19_questoes", buildModule("l13-rlm-prop", 20, DISCIPLINAS.RACIOCINIO_LOGICO, rlmProp));
writeModuleFile("m20_rlm_contagem_probabilidade.mjs", "m20_questoes", buildModule("l13-rlm-prob", 20, DISCIPLINAS.RACIOCINIO_LOGICO, rlmProb));
writeModuleFile("m21_portugues_interpretacao.mjs", "m21_questoes", buildModule("l13-port-interp", 15, DISCIPLINAS.LINGUA_PORTUGUESA, portInterp));
writeModuleFile("m22_portugues_gramatica.mjs", "m22_questoes", buildModule("l13-port-gram", 15, DISCIPLINAS.LINGUA_PORTUGUESA, portGram));

console.log("[OK] Grupos F-K (M15-M22: 160 questões) concluídos com sucesso!");
