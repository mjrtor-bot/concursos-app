import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.legislacao_especial;
const aLegEspecial = TAXONOMIA.assuntos.leg_especial_policial;

export const legEspPart1 = [
  // 01
  {
    idSlug: "leg-l4-01",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No crime de posse ou porte de drogas para consumo pessoal (art. 28 da Lei nº 11.343/2006), não se impõe prisão em flagrante ao agente, devendo este ser conduzido à autoridade policial para lavratura de termo circunstanciado e imediata liberação se comprometer-se a comparecer ao Juizado Especial Criminal.",
    explicacao: "GABARITO: CERTO. O art. 48, § 2º, da Lei nº 11.343/2006 determina que 'tratando-se das condutas previstas no art. 28 desta Lei, não se imporá prisão em flagrante, devendo o autor do fato ser imediatamente encaminhado ao juízo competente ou, na falta deste, assumir o compromisso de a ele comparecer, lavrando-se termo circunstanciado e providenciando-se as requisições dos exames e perícias necessários'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 02
  {
    idSlug: "leg-l4-02",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre a causa de diminuição de pena prevista no art. 33, § 4º, da Lei nº 11.343/2006 (tráfico privilegiado), assinale a afirmativa correta consoante a legislação e a jurisprudência sumulada do STF e STJ:",
    explicacao: "GABARITO: Letra C. Conforme a Súmula 512 do STJ (cancelada e superada pelo Plenário do STF e posterior alteração da Lei 13.964/19 no art. 112 da LEP), o tráfico de drogas na forma privilegiada (art. 33, § 4º) NÃO possui natureza hedionda nem equiparada. Os requisitos cumulativos são: agente primário, de bons antecedentes, que não se dedique às atividades criminosas nem integre organização criminosa.",
    alternativas: [
      { letra: "A", texto: "O tráfico privilegiado é expressamente classificado como crime hediondo inafiançável pela Lei nº 8.072/90.", correta: false },
      { letra: "B", texto: "Exige para sua incidência que a quantidade de droga apreendida não ultrapasse 10 gramas de cocaína.", correta: false },
      { letra: "C", texto: "Aplica-se ao agente primário, de bons antecedentes, que não se dedique às atividades criminosas nem integre organização criminosa, afastando a natureza hedionda do delito.", correta: true },
      { letra: "D", texto: "O benefício impede a fixação do regime inicial aberto e a substituição da pena privativa de liberdade por restritivas de direitos.", correta: false },
      { letra: "E", texto: "A redução legal de pena é fixa em metade da sanção base, vedada qualquer variação discricionária pelo juiz.", correta: false }
    ]
  },
  // 03
  {
    idSlug: "leg-l4-03",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A incidência da majorante do tráfico interestadual de drogas (art. 40, V, da Lei nº 11.343/2006) prescinde da efetiva transposição da fronteira interestadual, bastando a comprovação inequívoca de que a substância entorpecente tinha como destino outro Estado da Federação.",
    explicacao: "GABARITO: CERTO. A Súmula 587 do STJ dispõe expressamente: 'Para a incidência da majorante prevista no art. 40, V, da Lei n. 11.343/2006, é desnecessária a efetiva transposição de fronteiras entre estados da Federação, sendo suficiente a demonstração inequívoca da intenção de realizar o tráfico interestadual'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 04
  {
    idSlug: "leg-l4-04",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O crime de associação para o tráfico de drogas (art. 35 da Lei nº 11.343/2006) exige para sua configuração típica a reunião de duas ou mais pessoas com o ânimo de:",
    explicacao: "GABARITO: Letra B. O art. 35 da Lei nº 11.343/2006 pune 'associarem-se duas ou mais pessoas para o fim de praticar, reiteradamente ou não, qualquer dos crimes previstos nos arts. 33, caput e § 1º, e 34 desta Lei'. A jurisprudência consolidada do STJ exige o vínculo associativo estável e permanente entre os agentes (animus associativo duradouro), não bastando a coautoria ocasional e transitória.",
    alternativas: [
      { letra: "A", texto: "Praticar um único ato isolado de uso compartilhado de entorpecentes sem estabilidade.", correta: false },
      { letra: "B", texto: "Estabilidade e permanência para o fim de praticar os crimes de tráfico de drogas ou maquinário.", correta: true },
      { letra: "C", texto: "Financiar exclusivamente a compra de armas de uso proibido pelo comando prisional.", correta: false },
      { letra: "D", texto: "Ocultar o proveito econômico obtido em estelionatos digitais.", correta: false },
      { letra: "E", texto: "Adulterar sinais identificadores de veículos automotores em oficinas clandestinas.", correta: false }
    ]
  },
  // 05
  {
    idSlug: "leg-l4-05",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A destruição de drogas apreendidas em flagrante delito será executada pelo delegado de polícia por incineração, no prazo máximo de 15 (quinze) dias no caso de flagrante e de 30 (trinta) dias no caso de drogas apreendidas sem autoria conhecida, guardando-se amostra suficiente para o laudo definitivo.",
    explicacao: "GABARITO: CERTO. O art. 50, § 3º e § 4º, da Lei nº 11.343/2006 (com redação dada pela Lei nº 12.961/2014) determina: 'A destruição das drogas apreendidas será executada por incineração: I - no prazo de 15 (quinze) dias no caso de prisão em flagrante; II - no prazo de 30 (trinta) dias na hipótese de apreensão sem fixação de autoria', sempre com a presença do MP e autoridade sanitária.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 06
  {
    idSlug: "leg-l4-06",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No tocante ao Estatuto do Desarmamento (Lei nº 10.826/2003) e às alterações promovidas pelo Pacote Anticrime (Lei nº 13.964/2019), o crime de posse ou porte ilegal de arma de fogo de uso PROIBIDO (art. 16, § 2º):",
    explicacao: "GABARITO: Letra A. O art. 16, § 2º, da Lei nº 10.826/2003 (inserido pela Lei 13.964/2019) tipifica autonomamente o porte/posse de arma de uso PROIBIDO com pena de reclusão de 4 a 12 anos. Ademais, o art. 1º, parágrafo único, II, da Lei nº 8.072/1990 classifica expressamente como hediondo o crime de posse ou porte ilegal de arma de fogo de uso proibido (a arma de uso restrito deixou de ser hedionda com a novel redação da Lei 13.964/19).",
    alternativas: [
      { letra: "A", texto: "É apenado com reclusão de 4 a 12 anos e multa, sendo classificado expressamente como crime hediondo pela Lei nº 8.072/1990.", correta: true },
      { letra: "B", texto: "É crime afiançável pela autoridade policial em sede de plantão policial.", correta: false },
      { letra: "C", texto: "Constitui infração de menor potencial ofensivo sujeita à transação penal.", correta: false },
      { letra: "D", texto: "Admite perdão judicial se a arma estiver desmuniciada no momento da apreensão.", correta: false },
      { letra: "E", texto: "Não se estende a acessórios ou munições de uso restrito ou proibido.", correta: false }
    ]
  },
  // 07
  {
    idSlug: "leg-l4-07",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de disparo de arma de fogo (art. 15 da Lei nº 10.826/2003) é subsidiário, consumando-se quando o agente dispara arma de fogo ou aciona munição em lugar habitado ou em suas adjacências, em via pública ou em direção a ela, desde que essa conduta não tenha por finalidade a prática de outro crime.",
    explicacao: "GABARITO: CERTO. O art. 15 da Lei nº 10.826/2003 expressamente traz a cláusula de subsidiariedade expressa: 'Disparar arma de fogo ou acionar munição em lugar habitado ou em suas adjacências, em via pública ou em direção a ela, desde que essa conduta não tenha por finalidade a prática de outro crime: Pena - reclusão, de 2 (dois) a 4 (quatro) anos, e multa'. Se o disparo for meio para tentativa de homicídio ou roubo, é absorvido pelo crime-fim.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 08
  {
    idSlug: "leg-l4-08",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Possuir ou manter sob sua guarda arma de fogo, acessório ou munição, de uso permitido, em desacordo com determinação legal ou regulamentar, no interior de sua residência ou dependência desta, ou, ainda no seu local de trabalho, desde que seja o titular ou o responsável legal do estabelecimento ou empresa, tipifica o crime de:",
    explicacao: "GABARITO: Letra B. O art. 12 da Lei nº 10.826/2003 define exatamente a Posse irregular de arma de fogo de uso permitido: 'Possuir ou manter sob sua guarda arma de fogo, acessório ou munição, de uso permitido, em desacordo com determinação legal ou regulamentar, no interior de sua residência ou dependência desta, ou, ainda no seu local de trabalho, desde que seja o titular ou o responsável legal do estabelecimento ou empresa: Pena - detenção, de 1 (um) a 3 (três) anos, e multa'.",
    alternativas: [
      { letra: "A", texto: "Porte ilegal de arma de fogo de uso permitido.", correta: false },
      { letra: "B", texto: "Posse irregular de arma de fogo de uso permitido.", correta: true },
      { letra: "C", texto: "Comércio ilegal de arma de fogo.", correta: false },
      { letra: "D", texto: "Tráfico internacional de arma de fogo.", correta: false },
      { letra: "E", texto: "Omissão de cautela qualificada.", correta: false }
    ]
  },
  // 09
  {
    idSlug: "leg-l4-09",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O porte de arma de fogo com numeração, marca ou qualquer outro sinal de identificação raspado, suprimido ou adulterado equipara-se à conduta do art. 16 da Lei nº 10.826/2003, independentemente de a arma ser originalmente de uso permitido ou restrito.",
    explicacao: "GABARITO: CERTO. O art. 16, § 1º, IV, da Lei nº 10.826/2003 equipara às penas de porte de arma de uso restrito a conduta de quem 'portar, possuir, adquirir, transportar ou tiver sob guarda arma de fogo com numeração, marca ou qualquer outro sinal de identificação raspado, suprimido ou adulterado', independentemente do calibre original do artefato.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 10
  {
    idSlug: "leg-l4-10",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No crime de comércio ilegal de arma de fogo (art. 17 da Lei nº 10.826/2003, com redação da Lei nº 13.964/2019), a pena cominada em abstrato é de:",
    explicacao: "GABARITO: Letra D. O Pacote Anticrime (Lei nº 13.964/2019) recrudesceu significativamente a sanção do comércio ilegal de arma de fogo (art. 17 da Lei 10.826/03), elevando a pena para reclusão de 6 a 16 anos e multa (anteriormente era de 4 a 8 anos). O tráfico internacional de armas (art. 18) também foi elevado para 8 a 16 anos.",
    alternativas: [
      { letra: "A", texto: "Detenção, de 1 a 3 anos, e multa.", correta: false },
      { letra: "B", texto: "Reclusão, de 2 a 4 anos, e multa.", correta: false },
      { letra: "C", texto: "Reclusão, de 3 a 6 anos, e multa.", correta: false },
      { letra: "D", texto: "Reclusão, de 6 a 16 anos, e multa.", correta: true },
      { letra: "E", texto: "Reclusão, de 10 a 20 anos, sem previsão de multa.", correta: false }
    ]
  },
  // 11
  {
    idSlug: "leg-l4-11",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de omissão de cautela (art. 13 da Lei nº 10.826/2003) pune com detenção de 1 a 2 anos e multa o ato de deixar de observar as cautelas necessárias para impedir que menor de 18 (dezoito) anos ou pessoa portadora de deficiência mental se apodere de arma de fogo que esteja sob sua posse ou que seja de sua propriedade.",
    explicacao: "GABARITO: CERTO. A conduta e as elementares coincidem exatamente com o texto do art. 13, caput, do Estatuto do Desarmamento, sendo crime culposo formal que tutela a segurança e a incolumidade públicas.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 12
  {
    idSlug: "leg-l4-12",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito da apreensão e destinação de bens relacionados ao tráfico ilícito de drogas (arts. 60 a 64 da Lei nº 11.343/2006 e art. 243, parágrafo único, da CF/88), assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra B. O Supremo Tribunal Federal (RE 638.491/PR - Tema 390 de Repercussão Geral) fixou a tese de que o confisco de bens em decorrência do tráfico de drogas (art. 243, parágrafo único, da CF) independe da habitualidade da atividade criminosa ou da adulteração para ocultação de drogas, bastando que o bem tenha sido utilizado para a prática do crime de tráfico.",
    alternativas: [
      { letra: "A", texto: "O confisco constitucional de veículos utilizados no tráfico de entorpecentes exige prova cabal da habitualidade delitiva pelo proprietário.", correta: false },
      { letra: "B", texto: "É possível a expropriação de bens utilizados no tráfico ilícito de drogas independentemente de habitualidade ou de adaptação estrutural do veículo.", correta: true },
      { letra: "C", texto: "Os valores em dinheiro apreendidos com traficantes são revertidos imediatamente e sem decisão judicial para a conta pessoal do delegado condutor.", correta: false },
      { letra: "D", texto: "O juiz é proibido de autorizar a alienação antecipada de bens apreendidos antes do trânsito em julgado.", correta: false },
      { letra: "E", texto: "Os imóveis rurais onde se localizem culturas ilegais de plantas psicotrópicas serão indenizados pelo valor venal ao proprietário.", correta: false }
    ]
  },
  // 13
  {
    idSlug: "leg-l4-13",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O laudo prévio de constatação da natureza e quantidade da droga, firmado por perito oficial ou pessoa idônea, é suficiente para a comprovação da materialidade delitiva e consequente lavratura do auto de prisão em flagrante e oferecimento da denúncia.",
    explicacao: "GABARITO: CERTO. O art. 50, § 1º, da Lei nº 11.343/2006 expressamente prevê: 'Para efeito da lavratura do auto de prisão em flagrante e estabelecimento da materialidade do delito, é suficiente o laudo de constatação da natureza e quantidade da droga, firmado por perito oficial ou, na falta deste, por pessoa idônea'. Para a condenação definitiva, contudo, é indispensável o laudo toxicológico definitivo.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 14
  {
    idSlug: "leg-l4-14",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O porte ilegal de arma de fogo de uso permitido (art. 14 da Lei nº 10.826/2003) constitui crime de:",
    explicacao: "GABARITO: Letra A. O porte ilegal de arma de fogo é crime de perigo abstrato e de mera conduta, no qual o perigo à incolumidade pública é presumido de forma absoluta pela lei penal, não se exigindo a ocorrência de dano efetivo ou demonstração concreta de risco a pessoa determinada.",
    alternativas: [
      { letra: "A", texto: "Perigo abstrato e de mera conduta.", correta: true },
      { letra: "B", texto: "Dano material concreto contra a pessoa da vítima.", correta: false },
      { letra: "C", texto: "Culpa stricto sensu subordinado à comprovação de imperícia.", correta: false },
      { letra: "D", texto: "Ação privada subsidiária da pública.", correta: false },
      { letra: "E", texto: "Responsabilidade objetiva que independe de dolo.", correta: false }
    ]
  },
  // 15
  {
    idSlug: "leg-l4-15",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil AL",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A posse de quantidade inexpressiva de munição desacompanhada de arma de fogo (munição desarmada), quando demonstrada a total ausência de perigo à segurança pública pelas circunstâncias do caso concreto, autoriza excepcionalmente a incidência do princípio da insignificância, segundo jurisprudência do STF e STJ.",
    explicacao: "GABARITO: CERTO. A jurisprudência consolidada do STF (RHC 143.449/MS) e do STJ (AgRg no HC 605.512/SP) admite, em situações excepcionais, a aplicação do princípio da insignificância (atipicidade material) na posse de ínfima quantidade de munição de uso permitido desacompanhada de arma de fogo capaz de deflagrá-la, desde que não haja outras circunstâncias de risco social.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 16
  {
    idSlug: "leg-l4-16",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei nº 11.343/2006, prescrever ou ministrar, culposamente, drogas, sem que delas necessite o paciente, ou fazê-lo em doses excessivas ou em desacordo com determinação legal ou regulamentar (art. 38):",
    explicacao: "GABARITO: Letra C. O art. 38 da Lei nº 11.343/2006 tipifica modalidade culposa especial de conduta médica/farmacêutica: 'Prescrever ou ministrar, culposamente, drogas, sem que delas necessite o paciente, ou fazê-lo em doses excessivas, ou em desacordo com determinação legal ou regulamentar: Pena - detenção, de 6 (seis) meses a 2 (dois) anos, e pagamento de 50 (cinquenta) a 200 (duzentos) dias-multa'.",
    alternativas: [
      { letra: "A", texto: "É fato formalmente atípico na esfera penal, constituindo mera infração ética do Conselho Federal de Medicina.", correta: false },
      { letra: "B", texto: "É punido com pena de reclusão de 5 a 15 anos e equiparado a crime hediondo.", correta: false },
      { letra: "C", texto: "Constitui crime culposo apenado com detenção de 6 meses a 2 anos e pagamento de dias-multa.", correta: true },
      { letra: "D", texto: "Equipara-se ao tráfico internacional de drogas com aumento de pena obrigatório.", correta: false },
      { letra: "E", texto: "Exige para a consumação o falecimento imediato do paciente hospitalizado.", correta: false }
    ]
  },
  // 17
  {
    idSlug: "leg-l4-17",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "As penas previstas para os crimes de posse e porte ilegal de arma de fogo e comércio ilegal são aumentadas de metade se o crime for praticado por integrante dos órgãos e empresas referidas nos arts. 6º, 7º e 8º da Lei nº 10.826/2003 (como integrantes das Forças Armadas e órgãos de segurança pública).",
    explicacao: "GABARITO: CERTO. O art. 20 da Lei nº 10.826/2003 determina: 'Nos crimes previstos nos arts. 14, 15, 16, 17 e 18, a pena é aumentada da metade se forem praticados por integrante dos órgãos e empresas referidas nos arts. 6º, 7º e 8º desta Lei ou por integrante de empresas de segurança privada e de transporte de valores, ou se o agente for reincidente específico em crimes dessa natureza'.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 18
  {
    idSlug: "leg-l4-18",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O porte de arma de fogo de uso permitido ou restrito pelos integrantes das Polícias Civis e da Polícia Federal:",
    explicacao: "GABARITO: Letra B. O art. 6º, II e § 1º, da Lei nº 10.826/2003 assegura aos integrantes dos órgãos de segurança pública (art. 144 da CF, incluindo PF, PRF, PC, PM, CBM, PP) o porte de arma de fogo em todo o território nacional, em serviço ou fora dele, de propriedade particular ou fornecida pela corporação.",
    alternativas: [
      { letra: "A", texto: "Restringe-se exclusivamente ao horário de expediente em serviço ostensivo.", correta: false },
      { letra: "B", texto: "É assegurado em todo o território nacional, em serviço ou fora dele, mesmo fora do Estado da lotação de origem.", correta: true },
      { letra: "C", texto: "Exige autorização judicial prévia a cada deslocamento interestadual.", correta: false },
      { letra: "D", texto: "É vedado para armas de calibre restrito ou de porte oculto.", correta: false },
      { letra: "E", texto: "Cessa automaticamente durante os períodos de férias ou licença médica do servidor.", correta: false }
    ]
  },
  // 19
  {
    idSlug: "leg-l4-19",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No crime de tráfico de drogas (art. 33, caput, da Lei nº 11.343/2006), a conduta de 'adquirir, guardar, ter em depósito, transportar ou trazer consigo' substância entorpecente possui natureza de crime permanente, prolongando-se a consumação no tempo enquanto durar a custódia ou depósito ilícito da droga.",
    explicacao: "GABARITO: CERTO. Os núcleos 'guardar', 'ter em depósito', 'transportar' e 'trazer consigo' do art. 33 da Lei de Drogas são modalidades de crime permanente. Em razão disso, o estado de flagrância se protrai no tempo, autorizando a prisão em flagrante a qualquer momento enquanto mantida a posse clandestina do entorpecente.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 20
  {
    idSlug: "leg-l4-20",
    disciplina_id: dId,
    assunto_id: aLegEspecial,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Acerca do procedimento de infiltração policial de agentes no combate ao tráfico de drogas previsto no art. 53, I, da Lei nº 11.343/2006, assinale a afirmativa correta:",
    explicacao: "GABARITO: Letra A. O art. 53, I, da Lei nº 11.343/2006 prevê a infiltração de agentes de polícia em tarefas de investigação mediante prévia autorização judicial e ouvido o Ministério Público. As diretrizes gerais do instituto são complementadas pela disciplina detalhada da Lei nº 12.850/2013.",
    alternativas: [
      { letra: "A", texto: "Depende de prévia autorização judicial e manifestação obrigatória do Ministério Público.", correta: true },
      { letra: "B", texto: "Pode ser determinada diretamente pelo delegado de polícia sem qualquer comunicação ao Poder Judiciário.", correta: false },
      { letra: "C", texto: "Admite que o agente infiltrado pratique homicídios dolosos sem responsabilidade penal por ato de serviço.", correta: false },
      { letra: "D", texto: "É restrita exclusivamente à Polícia Rodoviária Federal em rodovias federais.", correta: false },
      { letra: "E", texto: "Tem prazo improrrogável de 48 horas sob pena de ilicitude dos elementos informativos colhidos.", correta: false }
    ]
  }
];
