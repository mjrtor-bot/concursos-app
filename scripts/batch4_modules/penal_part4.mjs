import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.penal;
const aCrimesPatrimonio = TAXONOMIA.assuntos.crimes_pessoa_patrimonio;
const aCrimesAdm = TAXONOMIA.assuntos.crimes_adm_publica;

export const penalPart4 = [
  // 56
  {
    idSlug: "penal-l4-56",
    disciplina_id: dId,
    assunto_id: aCrimesPatrimonio,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Consuma-se o crime de furto com a posse de fato da coisa alheia móvel, ainda que por breve espaço de tempo e seguida de imediata perseguição ao agente, sendo prescindível a posse mansa, pacífica ou desvigiada do bem subtraído.",
    explicacao: "GABARITO: CERTO. A jurisprudência consolidada dos Tribunais Superiores adota a teoria da apprehensio ou amotio (Súmula 582 do STJ para o roubo, aplicada igualmente ao furto pelo Tema Repetitivo 934/STJ): consuma-se o furto com a inversão da posse do bem, ainda que por breve tempo e mesmo que haja imediata perseguição policial, prescindindo-se da posse mansa e pacífica.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 57
  {
    idSlug: "penal-l4-57",
    disciplina_id: dId,
    assunto_id: aCrimesPatrimonio,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No tocante ao crime de roubo (art. 157 do Código Penal), assinale a alternativa juridicamente correta conforme a legislação vigente e a jurisprudência do STJ e STF:",
    explicacao: "GABARITO: Letra B. O art. 157, § 2º-A, I, do CP (com redação dada pela Lei nº 13.654/2018) prevê causa de aumento de 2/3 se a violência ou ameaça é exercida com emprego de arma de fogo. Pela Lei nº 13.964/2019 (Pacote Anticrime), se a arma de fogo for de uso restrito ou proibido, a pena aumenta-se em dobro (§ 2º-B). Já a majorante pelo emprego de arma branca passou a constar no § 2º, VII (aumento de 1/3 até metade).",
    alternativas: [
      { letra: "A", texto: "O emprego de arma de fogo de uso proibido ou restrito qualifica o crime com pena de reclusão de 15 a 30 anos sem cumulação de multa.", correta: false },
      { letra: "B", texto: "Aplica-se em dobro a pena privativa de liberdade prevista no caput se a violência ou ameaça é exercida com emprego de arma de fogo de uso restrito ou proibido.", correta: true },
      { letra: "C", texto: "A utilização de arma de brinquedo ou simulacro configura majorante expressa pelo emprego de arma de fogo.", correta: false },
      { letra: "D", texto: "A morte da vítima no roubo (latrocínio) é crime da competência do Tribunal do Júri se houver dolo eventual quanto ao resultado morte.", correta: false },
      { letra: "E", texto: "A restituição imediata e integral da coisa subtraída antes da denúncia desclassifica o roubo para constrangimento ilegal.", correta: false }
    ]
  },
  // 58
  {
    idSlug: "penal-l4-58",
    disciplina_id: dId,
    assunto_id: aCrimesPatrimonio,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de estelionato cometido mediante fraude eletrônica (art. 171, § 2º-B, do CP), praticado com a utilização de informações fornecidas pela vítima induzida a erro por meio de redes sociais ou contatos telefônicos fraudulentos, é punido com pena de reclusão de 4 a 8 anos e multa.",
    explicacao: "GABARITO: CERTO. A Lei nº 14.155/2021 inseriu o § 2º-B no art. 171 do Código Penal, criando a figura da fraude eletrônica: 'A pena é de reclusão, de 4 (quatro) a 8 (oito) anos, e multa, se a fraude é cometida com a utilização de informações fornecidas pela vítima ou por terceiro induzido a erro por meio de redes sociais, contatos telefônicos ou envio de correio eletrônico fraudulento, ou por qualquer outro meio fraudulento análogo'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 59
  {
    idSlug: "penal-l4-59",
    disciplina_id: dId,
    assunto_id: aCrimesPatrimonio,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Quanto ao crime de receptação (art. 180 do Código Penal), assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra E. O art. 180, § 4º, do Código Penal estabelece: 'A receptação é punível, ainda que desconhecido ou isento de pena o autor do crime de que proveio a coisa'. Trata-se do princípio da autonomia da receptação em relação ao crime antecedente.",
    alternativas: [
      { letra: "A", texto: "Exige, para sua configuração, a prévia condenação transitada em julgado do autor do crime principal antecedente.", correta: false },
      { letra: "B", texto: "A forma culposa de receptação foi revogada pela legislação penal contemporânea.", correta: false },
      { letra: "C", texto: "A receptação qualificada pela atividade comercial (art. 180, § 1º) admite somente o dolo direto, afastando o dolo eventual.", correta: false },
      { letra: "D", texto: "A receptação de animal semovente domesticável de produção é infração de menor potencial ofensivo regida pela Lei nº 9.099/95.", correta: false },
      { letra: "E", texto: "A receptação é punível ainda que seja desconhecido ou isento de pena o autor do crime de que proveio a coisa.", correta: true }
    ]
  },
  // 60
  {
    idSlug: "penal-l4-60",
    disciplina_id: dId,
    assunto_id: aCrimesPatrimonio,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No crime de extorsão mediante sequestro (art. 159 do CP), se o sequestro dura mais de 24 (vinte e quatro) horas, se o sequestrado é menor de 18 (dezoito) ou maior de 60 (sessenta) anos, ou se o crime é cometido por bando ou quadrilha, a infração é qualificada.",
    explicacao: "GABARITO: CERTO. O art. 159, § 1º, do Código Penal qualifica a extorsão mediante sequestro com pena de reclusão de 12 a 20 anos: 'Se o sequestro dura mais de 24 (vinte e quatro) horas, se o sequestrado é menor de 18 (dezoito) ou maior de 60 (sessenta) anos, ou se o crime é cometido por bando ou quadrilha (associação criminosa)'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 61
  {
    idSlug: "penal-l4-61",
    disciplina_id: dId,
    assunto_id: aCrimesAdm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O funcionário público que, embora não tendo a posse do dinheiro, valor ou bem público, o subtrai, ou concorre para que seja subtraído, em proveito próprio ou alheio, valendo-se da facilidade que lhe proporciona a qualidade de funcionário, comete o crime de peculato-furto (peculato impróprio).",
    explicacao: "GABARITO: CERTO. O art. 312, § 1º, do Código Penal define o peculato impróprio ou peculato-furto: 'Aplica-se a mesma pena, se o funcionário público, embora não tendo a posse do dinheiro, valor ou bem, o subtrai, ou concorre para que seja subtraído, em proveito próprio ou alheio, valendo-se de facilidade que lhe proporciona a qualidade de funcionário'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 62
  {
    idSlug: "penal-l4-62",
    disciplina_id: dId,
    assunto_id: aCrimesAdm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre os crimes praticados por funcionário público contra a administração em geral, assinale a opção correta que distingue adequadamente a concussão (art. 316) da corrupção passiva (art. 317):",
    explicacao: "GABARITO: Letra A. No crime de concussão (art. 316), o núcleo do tipo é EXIGIR vantagem indevida, direta ou indiretamente, em razão da função. Na corrupção passiva (art. 317), os núcleos são SOLICITAR ou RECEBER vantagem indevida, ou ACEITAR promessa de tal vantagem. A exigência imposta pelo funcionário caracteriza concussão.",
    alternativas: [
      { letra: "A", texto: "A concussão caracteriza-se pela conduta de exigir vantagem indevida, ao passo que a corrupção passiva abrange solicitar, receber ou aceitar promessa de vantagem indevida.", correta: true },
      { letra: "B", texto: "A concussão exige a efetiva entrega do numerário ilícito para a consumação, enquanto a corrupção passiva é crime formal.", correta: false },
      { letra: "C", texto: "A corrupção passiva prescinde da qualidade de funcionário público do sujeito ativo, bastando que atue como mandatário particular.", correta: false },
      { letra: "D", texto: "A concussão admite a modalidade culposa quando o agente público atua com imprudência na cobrança de taxas.", correta: false },
      { letra: "E", texto: "A corrupção passiva somente se consuma com a prática do ato de ofício ilegal prometido pelo servidor.", correta: false }
    ]
  },
  // 63
  {
    idSlug: "penal-l4-63",
    disciplina_id: dId,
    assunto_id: aCrimesAdm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de prevaricação (art. 319 do CP) consiste em retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal.",
    explicacao: "GABARITO: CERTO. A redação exata do art. 319 do CP é: 'Retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal'. O dolo específico (satisfazer interesse ou sentimento pessoal) é elemento subjetivo indispensável do tipo.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 64
  {
    idSlug: "penal-l4-64",
    disciplina_id: dId,
    assunto_id: aCrimesAdm,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No peculato culposo (art. 312, § 2º, do CP), a reparação do dano operada pelo funcionário público:",
    explicacao: "GABARITO: Letra D. O art. 312, § 3º, do CP prevê expressamente: 'No caso do parágrafo anterior, a reparação do dano, se precede à sentença irrecorrível, extingue a punibilidade; se lhe é posterior, reduz de metade a pena imposta'. Esta regra aplica-se exclusivamente ao peculato culposo, não beneficiando as modalidades dolosas.",
    alternativas: [
      { letra: "A", texto: "Extingue a punibilidade em qualquer momento processual, inclusive após o trânsito em julgado da condenação.", correta: false },
      { letra: "B", texto: "Configura mero arrependimento posterior (art. 16 do CP), ensejando redução de pena de 1 a 2 terços.", correta: false },
      { letra: "C", texto: "Afasta a tipicidade formal da conduta desde que ocorra antes do oferecimento da denúncia pelo Ministério Público.", correta: false },
      { letra: "D", texto: "Extingue a punibilidade se precede à sentença irrecorrível; se lhe é posterior, reduz de metade a pena imposta.", correta: true },
      { letra: "E", texto: "Reduz a pena em um terço se realizada até a publicação da sentença condenatória de primeiro grau.", correta: false }
    ]
  },
  // 65
  {
    idSlug: "penal-l4-65",
    disciplina_id: dId,
    assunto_id: aCrimesAdm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "O crime de corrupção ativa (art. 333 do CP) consiste em oferecer ou prometer vantagem indevida a funcionário público para determiná-lo a praticar, omitir ou retardar ato de ofício, sendo crime formal que independe da aceitação da vantagem pelo funcionário.",
    explicacao: "GABARITO: CERTO. A corrupção ativa é delito formal, unissubjetivo e de mera conduta praticado pelo particular. Consuma-se com o simples oferecimento ou promessa da vantagem indevida, independentemente de o servidor aceitar a oferta ou efetivamente praticar/retardar o ato de ofício.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 66
  {
    idSlug: "penal-l4-66",
    disciplina_id: dId,
    assunto_id: aCrimesAdm,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O particular que solicita, exige, cobra ou obtém, para si ou para outrem, vantagem ou promessa de vantagem, a pretexto de influir em ato praticado por funcionário público no exercício da função, comete o crime de:",
    explicacao: "GABARITO: Letra C. O art. 332 do Código Penal tipifica o crime de Tráfico de Influência: 'Solicitar, exigir, cobrar ou obter, para si ou para outrem, vantagem ou promessa de vantagem, a pretexto de influir em ato praticado por funcionário público no exercício da função'. Se o pretexto for influir em juiz, jurado, perito ou membro do MP, o crime é de exploração de prestígio (art. 357).",
    alternativas: [
      { letra: "A", texto: "Advocacia administrativa.", correta: false },
      { letra: "B", texto: "Condescendência criminosa.", correta: false },
      { letra: "C", texto: "Tráfico de influência.", correta: true },
      { letra: "D", texto: "Exploração de prestígio.", correta: false },
      { letra: "E", texto: "Corrupção passiva imprópria.", correta: false }
    ]
  },
  // 67
  {
    idSlug: "penal-l4-67",
    disciplina_id: dId,
    assunto_id: aCrimesAdm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de desacato (art. 331 do CP) permanece em pleno vigor no ordenamento jurídico brasileiro, sendo compatível com a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) e com a Constituição Federal de 1988, segundo pacífica jurisprudência do STF e STJ.",
    explicacao: "GABARITO: CERTO. A 3ª Seção do STJ (HC 379.269/MS) e o Plenário do STF (ADPF 496) fixaram categoricamente a higidez e a plena constitucionalidade/convencionalidade do crime de desacato (art. 331 do CP), não havendo revogação tácita nem incompatibilidade com o direito fundamental à liberdade de expressão.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 68
  {
    idSlug: "penal-l4-68",
    disciplina_id: dId,
    assunto_id: aCrimesAdm,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O servidor público que patrocina, direta ou indiretamente, interesse privado perante a administração pública, valendo-se da qualidade de funcionário, comete o delito de:",
    explicacao: "GABARITO: Letra B. O art. 321 do Código Penal define o crime de Advocacia Administrativa: 'Patrocinar, direta ou indiretamente, interesse privado perante a administração pública, valendo-se da qualidade de funcionário: Pena - detenção, de um a três meses, ou multa'. Se o interesse for ilegítimo, a pena é agravada pelo parágrafo único.",
    alternativas: [
      { letra: "A", texto: "Usurpação de função pública.", correta: false },
      { letra: "B", texto: "Advocacia administrativa.", correta: true },
      { letra: "C", texto: "Exercício funcional ilegalmente prolongado.", correta: false },
      { letra: "D", texto: "Violação de sigilo funcional.", correta: false },
      { letra: "E", texto: "Emprego irregular de verbas ou rendas públicas.", correta: false }
    ]
  },
  // 69
  {
    idSlug: "penal-l4-69",
    disciplina_id: dId,
    assunto_id: aCrimesAdm,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A denunciação caluniosa (art. 339 do CP, com redação dada pela Lei nº 14.110/2020) exige para sua consumação que a instauração de investigação policial, de processo judicial, de investigação administrativa, de inquérito civil ou de ação de improbidade administrativa seja efetivamente deflagrada contra alguém que o agente sabe ser inocente.",
    explicacao: "GABARITO: CERTO. O crime do art. 339 do CP ('Dar causa à instauração de investigação policial, de processo judicial, de processo administrativo disciplinar, de inquérito civil ou de ação de improbidade administrativa contra alguém, imputando-lhe crime, infração ético-disciplinar ou ato ímprobo de que o sabe inocente') é crime formal e plurissubsistente, consumando-se com a efetiva instauração de qualquer dos procedimentos estatais nominados na lei.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 70
  {
    idSlug: "penal-l4-70",
    disciplina_id: dId,
    assunto_id: aCrimesAdm,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No que concerne ao crime de desobediência (art. 330 do CP) e à jurisprudência pacífica do Superior Tribunal de Justiça, assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra A. O Superior Tribunal de Justiça (Tema Repetitivo 1.060/STJ) firmou a tese de que a desobediência à ordem legal de parada emanada de policiais no exercício de atividade ostensiva de segurança pública configura o crime do art. 330 do Código Penal, não sendo absorvida por mera infração administrativa de trânsito.",
    alternativas: [
      { letra: "A", texto: "A desobediência à ordem legal de parada emitida por autoridade policial em atividade ostensiva de trânsito configura o crime do art. 330 do Código Penal.", correta: true },
      { letra: "B", texto: "O descumprimento de ordem de parada em blitz policial caracteriza mera infração administrativa de trânsito, sendo penalmente atípico.", correta: false },
      { letra: "C", texto: "A desobediência exige a prática de violência física contra o funcionário para restar configurada.", correta: false },
      { letra: "D", texto: "O descumprimento de medidas protetivas de urgência da Lei Maria da Penha é punido exclusivamente pelo art. 330 do CP.", correta: false },
      { letra: "E", texto: "O funcionário público nunca pode ser sujeito ativo do crime de desobediência funcional.", correta: false }
    ]
  }
];
