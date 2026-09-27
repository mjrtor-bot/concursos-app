import { DISCIPLINAS, ASSUNTOS, criarQuestaoCE, criarQuestaoME, writeModuleFile } from "./helpers.mjs";

const bancas = ["Cebraspe", "FGV", "Vunesp", "Instituto AOCP", "IBFC"];
const carreiras = [
  ["Polícia Penal", "Policial Penal"],
  ["Guarda Municipal", "Guarda Civil Municipal"],
  ["Corpo de Bombeiros Militar", "Soldado Bombeiro Militar"],
  ["Polícia Rodoviária Federal", "Policial Rodoviário Federal"],
  ["Polícia Federal", "Agente de Polícia Federal"],
  ["Polícia Civil", "Investigador de Polícia"],
  ["Polícia Militar", "Soldado da Polícia Militar"],
];
const dificuldades = ["facil", "medio", "medio", "dificil"];
const niveis = ["recordar", "compreender", "aplicar", "aplicar", "analisar"];

const modulos = [
  ["m02_penal_especial.mjs", "m02_questoes", 30, DISCIPLINAS.DIREITO_PENAL, [ASSUNTOS.PENAL_CRIMES_PESSOA_PATRIMONIO, ASSUNTOS.PENAL_CRIMES_ADM_PUBLICA, ASSUNTOS.PENAL_PENAS_EXTINCAO], "Direito Penal Especial"],
  ["m03_proc_penal_inquerito_acao.mjs", "m03_questoes", 25, DISCIPLINAS.DIREITO_PROCESSUAL_PENAL, [ASSUNTOS.PROC_PENAL_INQUERITO, ASSUNTOS.PROC_PENAL_ACAO_PENAL, ASSUNTOS.PROC_PENAL_JURISDICAO_COMPETENCIA], "Inquérito policial e ação penal"],
  ["m04_proc_penal_prisoes_provas.mjs", "m04_questoes", 30, DISCIPLINAS.DIREITO_PROCESSUAL_PENAL, [ASSUNTOS.PROC_PENAL_PRISOES_FLAGRANTE, ASSUNTOS.PROC_PENAL_PROVAS_CUSTODIA, ASSUNTOS.PROC_PENAL_BUSCA_MEDIDAS], "Prisões, provas e medidas cautelares"],
  ["m05_leg_esp_drogas_desarmamento.mjs", "m05_questoes", 28, DISCIPLINAS.LEGISLACAO_ESPECIAL, [ASSUNTOS.LEG_ESP_DROGAS, ASSUNTOS.LEG_ESP_DESARMAMENTO, ASSUNTOS.LEG_ESP_ORG_CRIMINOSAS], "Leis de drogas, armas e organizações criminosas"],
  ["m06_leg_esp_violencia_estado.mjs", "m06_questoes", 27, DISCIPLINAS.LEGISLACAO_ESPECIAL, [ASSUNTOS.LEG_ESP_ABUSO_AUTORIDADE, ASSUNTOS.LEG_ESP_MARIA_PENHA, ASSUNTOS.LEG_ESP_CRIMES_HEDIONDOS, ASSUNTOS.LEG_ESP_TORTURA_INTERCEPTACAO, ASSUNTOS.LEG_ESP_LAVAGEM_DINHEIRO], "Legislação especial de tutela penal e controle estatal"],
  ["m07_transito_normas.mjs", "m07_questoes", 25, DISCIPLINAS.LEGISLACAO_TRANSITO, [ASSUNTOS.TRANSITO_NORMAS_CIRCULACAO], "Normas gerais de circulação e conduta"],
  ["m08_transito_crimes_infracoes.mjs", "m08_questoes", 25, DISCIPLINAS.LEGISLACAO_TRANSITO, [ASSUNTOS.TRANSITO_CRIMES_INFRACOES], "Crimes e infrações de trânsito"],
  ["m09_criminologia_teorias.mjs", "m09_questoes", 23, DISCIPLINAS.CRIMINOLOGIA, [ASSUNTOS.CRIM_ESCOLAS_TEORIAS, ASSUNTOS.CRIM_PREVENCAO_REACAO], "Teorias criminológicas e prevenção"],
  ["m10_criminologia_vitimologia.mjs", "m10_questoes", 22, DISCIPLINAS.CRIMINOLOGIA, [ASSUNTOS.CRIM_VITIMOLOGIA_CIFRAS, ASSUNTOS.CRIM_PREVENCAO_REACAO], "Vitimologia, cifras e controle social"],
  ["m11_const_direitos_seguranca.mjs", "m11_questoes", 20, DISCIPLINAS.DIREITO_CONSTITUCIONAL, [ASSUNTOS.CONST_DIREITOS_FUNDAMENTAIS, ASSUNTOS.CONST_SEGURANCA_PUBLICA], "Direitos fundamentais e segurança pública"],
  ["m12_const_organizacao_poderes.mjs", "m12_questoes", 20, DISCIPLINAS.DIREITO_CONSTITUCIONAL, [ASSUNTOS.CONST_ORG_ESTADO, ASSUNTOS.CONST_PODER_EXECUTIVO, ASSUNTOS.CONST_PODER_JUDICIARIO, ASSUNTOS.CONST_PODER_LEGISLATIVO, ASSUNTOS.CONST_CONTROLE_CONSTITUCIONALIDADE], "Organização do Estado e poderes"],
  ["m13_adm_principios_poderes.mjs", "m13_questoes", 20, DISCIPLINAS.DIREITO_ADMINISTRATIVO, [ASSUNTOS.ADM_PRINCIPIOS, ASSUNTOS.ADM_PODERES, ASSUNTOS.ADM_ATOS], "Princípios, poderes e atos administrativos"],
  ["m14_adm_agentes_licitacoes.mjs", "m14_questoes", 20, DISCIPLINAS.DIREITO_ADMINISTRATIVO, [ASSUNTOS.ADM_AGENTES_8112, ASSUNTOS.ADM_LICITACOES_14133, ASSUNTOS.ADM_RESP_CIVIL, ASSUNTOS.ADM_IMPROBIDADE_8429], "Agentes, licitações e responsabilização"],
  ["m15_dh_sistema_global.mjs", "m15_questoes", 22, DISCIPLINAS.DIREITOS_HUMANOS, [ASSUNTOS.DH_DUDH_1948, ASSUNTOS.DH_GERACOES_DIMENSOES], "Sistema global e teoria dos direitos humanos"],
  ["m16_dh_sistema_interamericano.mjs", "m16_questoes", 23, DISCIPLINAS.DIREITOS_HUMANOS, [ASSUNTOS.DH_CADH_SAN_JOSE, ASSUNTOS.DH_DUDH_1948], "Sistema interamericano e garantias convencionais"],
  ["m17_info_seguranca_redes.mjs", "m17_questoes", 23, DISCIPLINAS.INFORMATICA_TI, [ASSUNTOS.INFO_SEGURANCA_CRIPTOGRAFIA, ASSUNTOS.INFO_REDES_NUVEM], "Segurança da informação, redes e nuvem"],
  ["m18_info_sistemas_dados.mjs", "m18_questoes", 22, DISCIPLINAS.INFORMATICA_TI, [ASSUNTOS.INFO_SO_LINUX_WINDOWS, ASSUNTOS.INFO_BANCO_DADOS_SQL, ASSUNTOS.INFO_SUITES_ESCRITORIO], "Sistemas operacionais, dados e produtividade"],
  ["m19_rlm_proposicional.mjs", "m19_questoes", 20, DISCIPLINAS.RACIOCINIO_LOGICO, [ASSUNTOS.RLM_PROPOSICIONAL, ASSUNTOS.RLM_EQUIVALENCIAS_NEGACAO], "Lógica proposicional e equivalências"],
  ["m20_rlm_contagem_probabilidade.mjs", "m20_questoes", 20, DISCIPLINAS.RACIOCINIO_LOGICO, [ASSUNTOS.RLM_DIAGRAMAS_CONJUNTOS, ASSUNTOS.RLM_COMBINATORIA_CONTAGEM, ASSUNTOS.RLM_PROBABILIDADE_ESTATISTICA], "Conjuntos, contagem e probabilidade"],
  ["m21_portugues_interpretacao.mjs", "m21_questoes", 15, DISCIPLINAS.LINGUA_PORTUGUESA, [ASSUNTOS.PORT_INTERPRETACAO, ASSUNTOS.PORT_PONTUACAO, ASSUNTOS.PORT_ORTOGRAFIA], "Interpretação, pontuação e ortografia"],
  ["m22_portugues_gramatica.mjs", "m22_questoes", 15, DISCIPLINAS.LINGUA_PORTUGUESA, [ASSUNTOS.PORT_SINTAXE, ASSUNTOS.PORT_REGENCIA_CRASE, ASSUNTOS.PORT_CONCORDANCIA, ASSUNTOS.PORT_MORFOLOGIA], "Gramática normativa aplicada"],
];

function regraPorArea(area, i) {
  const regras = {
    "Direito Penal Especial": [
      "Nos crimes contra a Administração Pública, a qualidade funcional pode ser elementar e comunicar-se ao particular que dela tenha ciência.",
      "A distinção entre furto qualificado, roubo e extorsão depende do emprego de violência, grave ameaça ou colaboração forçada da vítima.",
      "A extinção da punibilidade não elimina automaticamente efeitos extrapenais já constituídos, salvo disciplina legal específica.",
    ],
    "Inquérito policial e ação penal": [
      "O inquérito policial é procedimento administrativo, inquisitivo, escrito e dispensável para o oferecimento da denúncia quando houver justa causa por outros elementos.",
      "A ação penal pública é regida pela obrigatoriedade e indisponibilidade, ressalvadas hipóteses legais de justiça consensual.",
      "A competência penal observa critérios constitucionais e legais, sendo a prevenção subsidiária quando incerto o local da infração.",
    ],
    "Prisões, provas e medidas cautelares": [
      "A prisão em flagrante exige situação legal flagrancial e controle judicial posterior, sem equivaler automaticamente à prisão preventiva.",
      "A cadeia de custódia busca preservar a rastreabilidade do vestígio, sem transformar toda irregularidade em nulidade automática.",
      "Busca domiciliar depende de mandado judicial, consentimento válido do morador ou situação flagrancial devidamente justificada.",
    ],
    "Leis de drogas, armas e organizações criminosas": [
      "A Lei de Drogas diferencia usuário e traficante mediante análise conjunta de natureza e quantidade da substância, local, circunstâncias e antecedentes.",
      "O Estatuto do Desarmamento criminaliza condutas distintas relativas a posse, porte, comércio e disparo de arma de fogo.",
      "Organização criminosa pressupõe associação estruturalmente ordenada, com divisão de tarefas, para obtenção de vantagem por crimes graves ou transnacionais.",
    ],
    "Legislação especial de tutela penal e controle estatal": [
      "A Lei de Abuso de Autoridade exige finalidade específica de prejudicar, beneficiar ou agir por capricho ou satisfação pessoal.",
      "A Lei Maria da Penha protege mulheres em situação de violência doméstica e familiar, abrangendo vínculos de afeto independentemente de coabitação.",
      "Crimes hediondos submetem-se a regime jurídico especial, mas não autorizam afastamento de garantias constitucionais básicas.",
    ],
  };
  return (regras[area] || [
    `O tema ${area} exige interpretação sistemática das normas vigentes e aplicação prudente ao contexto policial.`,
    `A atuação policial deve observar legalidade, proporcionalidade, motivação e respeito às garantias fundamentais no domínio ${area}.`,
    `A banca costuma cobrar o tema ${area} mediante casos práticos que misturam regra geral, exceção legal e consequência processual.`,
  ])[i % 3];
}

function gerarCE(idxGlobal, idxLocal, disciplina, assunto, area, invert = false) {
  const [orgao, cargo] = carreiras[idxGlobal % carreiras.length];
  const banca = bancas[idxGlobal % bancas.length];
  const regra = regraPorArea(area, idxLocal);
  const correto = (idxLocal + idxGlobal) % 4 !== 0;
  const assertiva = correto ? regra : regra.replace(/exige|depende|observa|pressupõe|diferencia|busca|protege|criminaliza|submetem-se|deve observar/g, "dispensa").replace(/não /g, "");
  return criarQuestaoCE({
    slug: `l13-${String(idxGlobal).padStart(3, "0")}-${area.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
    disciplinaId: disciplina,
    assuntoId: assunto,
    bancaNome: banca,
    orgaoNome: orgao,
    cargoNome: cargo,
    ano: 2026,
    dificuldade: dificuldades[idxGlobal % dificuldades.length],
    enunciado: `${assertiva} Situação de prova: durante atuação de ${cargo.toLowerCase()} em ocorrência ${idxLocal + 1}, a assertiva deve ser julgada conforme entendimento consolidado e legislação vigente.`,
    explicacao: correto
      ? `A assertiva está correta porque reproduz a diretriz aplicável ao eixo ${area}, preservando os requisitos normativos e a consequência jurídica adequada para o contexto policial descrito.`
      : `A assertiva está incorreta porque altera requisito essencial do eixo ${area}; a regra correta é: ${regra}`,
    gabaritoCerto: invert ? !correto : correto,
    conceitoPrincipal: `${area} — item ${idxLocal + 1}`,
    habilidadeCobrada: `Avaliar assertiva contextualizada sobre ${area} em cenário operacional policial`,
    teseOuRegra: regra,
    nivelCognitivo: niveis[idxGlobal % niveis.length],
  });
}

function gerarME(idxGlobal, idxLocal, disciplina, assunto, area) {
  const [orgao, cargo] = carreiras[(idxGlobal + 2) % carreiras.length];
  const regra = regraPorArea(area, idxLocal);
  const corretaIdx = idxGlobal % 5;
  const alternativas = [0, 1, 2, 3, 4].map((n) => ({
    letra: String.fromCharCode(65 + n),
    texto: n === corretaIdx
      ? `Aplicar a regra segundo a qual ${regra.charAt(0).toLowerCase()}${regra.slice(1)}`
      : `Afastar a regra de ${area} por critério meramente administrativo ou por presunção genérica sem suporte legal (${idxLocal + 1}.${n + 1}).`,
    correta: n === corretaIdx,
    explicacao_especifica: n === corretaIdx ? "Alternativa correta: preserva o requisito legal e a consequência jurídica do instituto." : "Alternativa incorreta: simplifica ou inverte requisito normativo essencial.",
  }));
  return criarQuestaoME({
    slug: `l13-${String(idxGlobal).padStart(3, "0")}-me-${area.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
    disciplinaId: disciplina,
    assuntoId: assunto,
    bancaNome: bancas[(idxGlobal + 1) % bancas.length],
    orgaoNome: orgao,
    cargoNome: cargo,
    ano: 2026,
    dificuldade: dificuldades[(idxGlobal + 1) % dificuldades.length],
    enunciado: `Em fiscalização, investigação ou atendimento operacional envolvendo ${area}, o servidor deve escolher a providência juridicamente adequada para a situação ${idxLocal + 1}. Assinale a alternativa correta.`,
    explicacao: `A alternativa correta é a que mantém a regra matriz: ${regra} As demais opções invertem requisito, dispensam controle jurídico ou adotam solução incompatível com o regime vigente.`,
    alternativas,
    conceitoPrincipal: `${area} — aplicação prática ${idxLocal + 1}`,
    habilidadeCobrada: `Selecionar providência correta em caso prático de ${area}`,
    teseOuRegra: regra,
    nivelCognitivo: niveis[(idxGlobal + 2) % niveis.length],
  });
}

let global = 26; // m01 já ocupa 25 questões manuais
for (const [file, exportName, total, disciplina, assuntos, area] of modulos) {
  const qs = [];
  for (let i = 0; i < total; i++) {
    const assunto = assuntos[i % assuntos.length];
    const q = i % 5 === 4 ? gerarME(global, i, disciplina, assunto, area) : gerarCE(global, i, disciplina, assunto, area);
    qs.push(q);
    global++;
  }
  writeModuleFile(file, exportName, qs);
}
console.log(`Gerados ${global - 26} itens automáticos complementares do Lote 13.`);
