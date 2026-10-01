import fs from "fs";
import path from "path";

// Builder for batch3 constitutional law questions
const codeHeader = `import { TAXONOMIA } from "./taxonomia.mjs";

export const constQuestions = [
`;

const codeFooter = `];
`;

export function getQuestionsData() {
  const dConst = "TAXONOMIA.disciplinas.constitucional";
  const aSegPub = "TAXONOMIA.assuntos.seguranca_publica";
  const aArt5 = "TAXONOMIA.assuntos.art_5_cf";
  const aOrgEst = "TAXONOMIA.assuntos.organizacao_estado";
  const aPExec = "TAXONOMIA.assuntos.poder_executivo";
  const aPLeg = "TAXONOMIA.assuntos.poder_legislativo";
  const aPJud = "TAXONOMIA.assuntos.poder_judiciario";
  const aCtrlConst = "TAXONOMIA.assuntos.controle_const";

  return [
    // -------------------------------------------------------------
    // TOPIC 1: SEGURANÇA PÚBLICA (Art. 144 CF & Jurisprudência STF) - 14 questões (001 a 014)
    // -------------------------------------------------------------
    {
      idSlug: "batch3-const-001",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "Em julgamento de repercussão geral e controle concentrado (ADPF 995 e RE 846.854), o Supremo Tribunal Federal assentou que as Guardas Municipais integram o Sistema Único de Segurança Pública (SUSP) e detêm competência para realizar policiamento preventivo e comunitário, bem como efetuar prisões em flagrante delito e apreensões decorrentes de fundada suspeita em vias públicas, não estando suas atividades limitadas à estrita vigilância de prédios e patrimônio dos municípios.",
      explicacao: "GABARITO: CERTO. O STF, ao julgar a ADPF 995 e o Tema 1017 da Repercussão Geral (RE 846.854), fixou que as Guardas Municipais são órgãos integrantes do Sistema de Segurança Pública (SUSP), executando atividade de segurança pública com atribuição preventiva, ostensiva e comunitária no âmbito local. Assim, é legítima a realização de patrulhamento preventivo, abordagens e prisões em flagrante em flagrante delito ou fundada suspeita nas vias públicas.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Reflete a orientação vinculante do STF na ADPF 995 e no RE 846.854, reconhecendo a inserção das Guardas Municipais no SUSP."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O STF superou o entendimento restritivo anterior, declarando expressamente que as guardas municipais integram o sistema de segurança pública."
        }
      ]
    },
    {
      idSlug: "batch3-const-002",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Em relação à disciplina constitucional dos órgãos de segurança pública e às atribuições conferidas à Polícia Federal pelo art. 144, § 1º, da Constituição Federal de 1988, assinale a afirmativa correta:",
      explicacao: "GABARITO: C. Nos termos do art. 144, § 1º, IV, da CF/88, a Polícia Federal 'exerce, com exclusividade, as funções de polícia judiciária da União'. Vale destacar que crimes cometidos em detrimento de sociedades de economia mista federais (como Banco do Brasil) são apurados pela Polícia Civil estadual e julgados na Justiça Estadual (Súmula 42 do STJ), ressalvada a existência de infração de interesse direto da União.",
      alternativas: [
        {
          letra: "A",
          texto: "Compete à Polícia Federal apurar infrações penais praticadas em detrimento de bens, serviços e interesses da União, de suas autarquias e de empresas públicas federais, bem como de sociedades de economia mista da União.",
          correta: false,
          explicacao_especifica: "Incorreta. As infrações cometidas em prejuízo de sociedades de economia mista federal não atraem a competência da Justiça Federal nem a atribuição da PF (art. 109, IV da CF e Súmula 42 do STJ)."
        },
        {
          letra: "B",
          texto: "A apuração de crime de roubo circunstanciado praticado no interior de agência bancária da Caixa Econômica Federal compete privativamente à Polícia Civil do respectivo Estado da Federação.",
          correta: false,
          explicacao_especifica: "Incorreta. A Caixa Econômica Federal é empresa pública federal; crimes em seu detrimento atraem atribuição da Polícia Federal e competência da Justiça Federal (art. 109, IV da CF)."
        },
        {
          letra: "C",
          texto: "A Polícia Federal é órgão permanente, estruturado em carreira, ao qual cabe exercer, com exclusividade, as funções de polícia judiciária da União.",
          correta: true,
          explicacao_especifica: "Correta. Trata-se da dicção expressa do art. 144, § 1º, inciso IV, da Constituição Federal."
        },
        {
          letra: "D",
          texto: "A apuração de infrações penais com repercussão interestadual ou internacional que exijam repressão uniforme pode ser realizada pela Polícia Federal independentemente de expressa previsão em lei ordinária.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 144, § 1º, I da CF expressamente exige 'na forma da lei' (regulamentada pela Lei 10.446/2002)."
        },
        {
          letra: "E",
          texto: "A Polícia Federal subordina-se funcionalmente ao Ministério Público Federal no que concerne à elaboração de seus planos orçamentários e à realização de promoções na carreira.",
          correta: false,
          explicacao_especifica: "Incorreta. A PF integra a estrutura do Poder Executivo da União (Ministério da Justiça e Segurança Pública), não se subordinando administrativamente ao MPF."
        }
      ]
    },
    {
      idSlug: "batch3-const-003",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Segundo a jurisprudência do Supremo Tribunal Federal, a Polícia Rodoviária Federal, além de sua missão constitucional precípua de patrulhamento ostensivo das rodovias federais, possui legitimidade para lavrar Termos Circunstanciados de Ocorrência (TCO) referentes a infrações de menor potencial ofensivo constatadas em suas operações.",
      explicacao: "GABARITO: CERTO. O STF, no julgamento da ADI 6283 e da ADI 5637, fixou o entendimento de que a lavratura de TCO não consubstancia ato privativo de polícia judiciária, consistindo em mero registro administrativo de fato com aparência de crime de menor potencial ofensivo, podendo ser lavrado legitimamente por policiais rodoviários federais e policiais militares.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. O STF pacificou a higidez constitucional da lavratura de TCO pela Polícia Rodoviária Federal nas ADIs 6283 e 5637."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O STF assentou que o TCO não é ato exclusivo de autoridade policial judiciária, sendo plenamente admissível sua confecção pela PRF."
        }
      ]
    },
    {
      idSlug: "batch3-const-004",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Penal do Estado de São Paulo (PP-SP)",
      cargo_nome: "Policial Penal",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "A Emenda Constitucional nº 104/2019 alterou o art. 144 da Constituição Federal para incluir expressamente as Polícias Penais no rol dos órgãos de segurança pública. A respeito da Polícia Penal, é correto afirmar que:",
      explicacao: "GABARITO: B. O art. 144, § 5º-A, da CF/88 estabelece que: 'Às polícias penais, vinculadas ao órgão administrador do sistema penal da unidade federativa a que pertencem, cabe a segurança dos estabelecimentos penais'.",
      alternativas: [
        {
          letra: "A",
          texto: "Subordina-se jurisdicionalmente às Varas de Execuções Penais dos Tribunais de Justiça, integrando o Poder Judiciário.",
          correta: false,
          explicacao_especifica: "Incorreta. A polícia penal integra o Poder Executivo, vinculada ao órgão administrador do sistema penal."
        },
        {
          letra: "B",
          texto: "Vincula-se ao órgão administrador do sistema penal da respectiva unidade federativa, cabendo-lhe a segurança dos estabelecimentos penais.",
          correta: true,
          explicacao_especifica: "Correta. Reprodução fiel do art. 144, § 5º-A, introduzido pela Emenda Constitucional nº 104/2019."
        },
        {
          letra: "C",
          texto: "Pode ter seus cargos providos mediante contratos de terceirização por empresas privadas concessionárias de presídios.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 4º da EC 104/2019 prevê provimento exclusivo por concurso público e transformação dos cargos de agentes penitenciários."
        },
        {
          letra: "D",
          texto: "Detém competência constitucional originária para apurar crimes hediondos cometidos no interior dos estabelecimentos prisionais com exclusão da Polícia Civil.",
          correta: false,
          explicacao_especifica: "Incorreta. A apuração de infrações penais comuns no âmbito estadual continua a cargo da Polícia Civil."
        },
        {
          letra: "E",
          texto: "Possui natureza exclusivamente militar, sendo seus integrantes equiparados aos membros das Forças Armadas para todos os efeitos legais.",
          correta: false,
          explicacao_especifica: "Incorreta. A polícia penal possui natureza de corporação civil da segurança pública."
        }
      ]
    },
    {
      idSlug: "batch3-const-005",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
      cargo_nome: "Escrivão de Polícia",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares.",
      explicacao: "GABARITO: CERTO. Art. 144, § 4º da Constituição Federal de 1988: 'Às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares'.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Literalidade do texto constitucional constante no art. 144, § 4º da CF/88."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O texto corresponde exatamente às atribuições constitucionais das polícias civis estaduais."
        }
      ]
    },
    {
      idSlug: "batch3-const-006",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "IBFC",
      orgao_nome: "Polícia Militar da Bahia (PM-BA)",
      cargo_nome: "Oficial da Polícia Militar",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Considerando as normas constitucionais insculpidas no art. 144 da Carta Magna acerca das Polícias Militares e Corpos de Bombeiros Militares, assinale a alternativa correta:",
      explicacao: "GABARITO: A. O art. 144, § 5º dispõe que 'às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'. O § 6º estabelece que são forças auxiliares e reserva do Exército, subordinadas aos Governadores.",
      alternativas: [
        {
          letra: "A",
          texto: "Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública, incumbindo aos corpos de bombeiros militares, além de outras atribuições legais, a execução de atividades de defesa civil.",
          correta: true,
          explicacao_especifica: "Correta. Trata-se da redação explícita do art. 144, § 5º da CF/88."
        },
        {
          letra: "B",
          texto: "As polícias militares e os corpos de bombeiros militares constituem forças auxiliares e reserva da Marinha do Brasil, subordinando-se ao Ministério da Defesa em tempo de paz.",
          correta: false,
          explicacao_especifica: "Incorreta. São forças auxiliares e reserva do Exército (art. 144, § 6º da CF) e subordinam-se aos Governadores de Estado e do DF."
        },
        {
          letra: "C",
          texto: "Aos corpos de bombeiros militares compete privativamente a apuração de infrações penais comuns cometidas por civis em situações de desastres naturais.",
          correta: false,
          explicacao_especifica: "Incorreta. Corpos de bombeiros não possuem atribuição de apuração de infrações penais comuns cometidas por civis."
        },
        {
          letra: "D",
          texto: "As polícias militares e os corpos de bombeiros militares subordinam-se administrativamente e operacionalmente aos Prefeitos dos Municípios onde exercem suas atribuições.",
          correta: false,
          explicacao_especifica: "Incorreta. São subordinadas aos Governadores dos Estados, do Distrito Federal e dos Territórios (art. 144, § 6º da CF)."
        },
        {
          letra: "E",
          texto: "É facultado aos integrantes das polícias militares o direito de greve e filiação partidária enquanto permanecerem no serviço ativo.",
          correta: false,
          explicacao_especifica: "Incorreta. Militares estaduais são proibidos de fazer greve e de se filiarem a partidos políticos durante o serviço ativo (art. 42, § 1º c/c art. 142, § 3º, IV e V da CF)."
        }
      ]
    },
    {
      idSlug: "batch3-const-007",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil de Pernambuco (PC-PE)",
      cargo_nome: "Agente de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Conforme tese de repercussão geral firmada pelo Supremo Tribunal Federal (Tema 541), o exercício do direito de greve, sob qualquer forma ou modalidade, é vedado aos policiais civis e a todos os servidores públicos que atuem diretamente na área de segurança pública.",
      explicacao: "GABARITO: CERTO. No ARE 654.432 (Tema 541), o Plenário do STF fixou a tese vinculante: 'O exercício do direito de greve, sob qualquer forma ou modalidade, é vedado aos policiais civis e a todos os servidores públicos que atuem diretamente na área de segurança pública'.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Tese vinculante exata fixada pelo STF no julgamento do Tema 541 de Repercussão Geral."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O STF proibiu categoricamente a greve para quaisquer carreiras que atuem diretamente na segurança pública em virtude da essencialidade da ordem pública."
        }
      ]
    },
    {
      idSlug: "batch3-const-008",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "IDECAN",
      orgao_nome: "Guarda Municipal de Fortaleza (GMF)",
      cargo_nome: "Guarda Municipal",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: "Sobre a atuação das Guardas Municipais e o entendimento jurisprudencial do Supremo Tribunal Federal, assinale a opção correta:",
      explicacao: "GABARITO: A. No RE 658.570 (Tema 532), o STF fixou que: 'É constitucional a atribuição às Guardas Municipais do exercício de poder de polícia de trânsito, inclusive para imposição de sanções administrativas legalmente previstas'. Além disso, nas ADIs 5948, 5538 e 5983, o STF declarou inconstitucional a restrição ao porte de arma de fogo com base no número de habitantes do município.",
      alternativas: [
        {
          letra: "A",
          texto: "É constitucional a atribuição às Guardas Municipais do exercício de poder de polícia de trânsito, inclusive para imposição de sanções administrativas legalmente previstas, como multas de trânsito.",
          correta: true,
          explicacao_especifica: "Correta. Tema 532 do STF (RE 658.570) reconheceu expressamente o poder de polícia de trânsito das guardas municipais."
        },
        {
          letra: "B",
          texto: "O direito ao porte de arma de fogo por guardas municipais em serviço é restrito aos municípios com mais de quinhentos mil habitantes.",
          correta: false,
          explicacao_especifica: "Incorreta. O STF declarou a inconstitucionalidade das restrições populacionais no Estatuto do Desarmamento (ADIs 5948, 5538 e 5983)."
        },
        {
          letra: "C",
          texto: "As guardas municipais são impedidas de agir na repressão a crimes flagrantes que ocorram fora do perímetro imediato dos prédios públicos municipais.",
          correta: false,
          explicacao_especifica: "Incorreta. Na ADPF 995 e RE 846.854, o STF reconheceu a atuação preventiva e repressão a flagrantes em vias públicas no município."
        },
        {
          letra: "D",
          texto: "O art. 144, § 8º da CF veda expressamente aos municípios a instituição de guardas municipais armadas, ainda que com autorização da Polícia Federal.",
          correta: false,
          explicacao_especifica: "Incorreta. O porte de arma aos guardas municipais é plenamente admitido e amparado por lei federal e decisões do STF."
        },
        {
          letra: "E",
          texto: "A Constituição Federal estabelece que os Comandantes das Guardas Municipais devem ser obrigatoriamente Oficiais da ativa da Polícia Militar do Estado.",
          correta: false,
          explicacao_especifica: "Incorreta. As guardas municipais são instituições civis municipais, de direção própria, nos termos do Estatuto Geral das Guardas Municipais (Lei 13.022/2014)."
        }
      ]
    },
    {
      idSlug: "batch3-const-009",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Delegado de Polícia Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "facil",
      enunciado: "A Polícia Ferroviária Federal constitui órgão permanente da segurança pública, estruturado em carreira e destinado, na forma da lei, ao patrulhamento ostensivo das ferrovias federais, constando expressamente no rol do artigo 144 da Constituição Federal de 1988.",
      explicacao: "GABARITO: CERTO. Art. 144, III e § 3º, da Constituição Federal de 1988: 'A polícia ferroviária federal, órgão permanente, estruturado em carreira, destina-se, na forma da lei, ao patrulhamento ostensivo das ferrovias federais'.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Trata-se da expressa previsão contida no art. 144, inciso III e § 3º, da Carta Constitucional."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. A Polícia Ferroviária Federal figura expressamente no rol dos órgãos de segurança pública da Carta Magna."
        }
      ]
    },
    {
      idSlug: "batch3-const-010",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "FGV",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2025,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Em consonância com o art. 144, § 10, da Constituição Federal, incluído pela Emenda Constitucional nº 82/2014, a segurança viária:",
      explicacao: "GABARITO: A. O art. 144, § 10 da CF/88 prevê: 'A segurança viária, exercida para a preservação da ordem pública e da incolumidade das pessoas e do seu patrimônio nas vias públicas: I - compreende a educação, engenharia e fiscalização de trânsito, além de outras atividades previstas em lei, que assegurem ao cidadão o direito à mobilidade urbana eficiente; II - compete, no âmbito dos Estados, do Distrito Federal e dos Municípios, aos respectivos órgãos ou entidades executivos e seus agentes de trânsito, estruturados em Carreira, na forma da lei'.",
      alternativas: [
        {
          letra: "A",
          texto: "Compreende a educação, engenharia e fiscalização de trânsito, além de outras atividades legais que assegurem ao cidadão a mobilidade urbana eficiente.",
          correta: true,
          explicacao_especifica: "Correta. Reprodução do inciso I do § 10 do art. 144 da Constituição Federal."
        },
        {
          letra: "B",
          texto: "É exercida de forma indelegável e exclusiva pela Polícia Rodoviária Federal em todo o território nacional.",
          correta: false,
          explicacao_especifica: "Incorreta. Compete também aos órgãos executivos e agentes de trânsito dos Estados, DF e Municípios (art. 144, § 10, II)."
        },
        {
          letra: "C",
          texto: "Exclui expressamente a possibilidade de estruturação de agentes municipais de trânsito em carreira própria.",
          correta: false,
          explicacao_especifica: "Incorreta. O dispositivo constitucional prevê expressamente a estruturação dos agentes de trânsito em carreira na forma da lei."
        },
        {
          letra: "D",
          texto: "Restringe-se ao julgamento de recursos de multas de trânsito pelas Juntas Administrativas de Recursos de Infrações (JARI).",
          correta: false,
          explicacao_especifica: "Incorreta. A segurança viária é conceito amplo que abrange preservação da ordem pública, educação, engenharia e fiscalização de trânsito."
        },
        {
          letra: "E",
          texto: "Foi extinta da Constituição Federal após a promulgação da Emenda Constitucional da Polícia Penal.",
          correta: false,
          explicacao_especifica: "Incorreta. Permanece plenamente vigente no art. 144, § 10 da Carta Magna."
        }
      ]
    },
    {
      idSlug: "batch3-const-011",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil do Distrito Federal (PCDF)",
      cargo_nome: "Perito Criminal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "Segundo o Supremo Tribunal Federal, os órgãos estaduais de perícia oficial de natureza criminal gozam de autonomia técnico-científica indispensável à idoneidade probatória dos laudos, contudo o constituinte estadual não pode erigi-los à condição de órgão autônomo de segurança pública fora do rol taxativo do art. 144 da CF/88.",
      explicacao: "GABARITO: CERTO. O STF pacificou (ADI 2575, ADI 6621 e ADI 1182) que a autonomia técnica, funcional e científica dos peritos é plenamente legítima, mas o rol do art. 144 da CF é de observância obrigatória e taxativo para os Estados-membros, de modo que os órgãos periciais não podem ser criados como uma corporação policial independente dos órgãos previstos na Constituição Federal.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Reflete a orientação pacificada do STF quanto à taxatividade do art. 144 da CF e à autonomia técnico-científica da perícia oficial."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O STF veda aos Estados criar novos órgãos de segurança pública com status policial autônomo fora do rol do art. 144 da CF."
        }
      ]
    },
    {
      idSlug: "batch3-const-012",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "FCC",
      orgao_nome: "Polícia Civil da Bahia (PC-BA)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "A respeito dos poderes de investigação criminal e da jurisprudência do Supremo Tribunal Federal sobre o tema (Tema 184 de Repercussão Geral - RE 593.727), assinale a alternativa correta:",
      explicacao: "GABARITO: B. No RE 593.727 (Tema 184), o STF assentou que o Ministério Público dispõe de competência para promover, por autoridade própria e por prazo razoável, investigações de natureza penal, subsidiado pelos poderes instrutórios implícitos decorrentes do art. 129, I da CF, devendo observar as garantias constitucionais da ampla defesa, publicidade atenuada e controle judicial das medidas restritivas de direitos.",
      alternativas: [
        {
          letra: "A",
          texto: "A Constituição Federal estabeleceu o monopólio exclusivo de toda e qualquer investigação criminal à Polícia Civil e à Polícia Federal.",
          correta: false,
          explicacao_especifica: "Incorreta. A CF previu exclusividade da função de polícia judiciária da União à PF, mas não monopólio investigatório amplo."
        },
        {
          letra: "B",
          texto: "O Ministério Público dispõe de competência para promover, por autoridade própria e por prazo razoável, investigações penais, respeitadas as garantias do investigado e a reserva de jurisdição.",
          correta: true,
          explicacao_especifica: "Correta. Tese de repercussão geral fixada pelo STF no Tema 184 (RE 593.727)."
        },
        {
          letra: "C",
          texto: "As comissões parlamentares de inquérito são impedidas de investigar crimes e devem remeter denúncias anônimas diretamente à Polícia Militar.",
          correta: false,
          explicacao_especifica: "Incorreta. As CPIs detêm amplos poderes investigatórios próprios das autoridades judiciais nos termos do art. 58, § 3º da CF."
        },
        {
          letra: "D",
          texto: "O inquérito policial tornou-se prescindível para todos os crimes dolosos contra a vida após a fixação do Tema 184 pelo STF.",
          correta: false,
          explicacao_especifica: "Incorreta. O inquérito policial continua sendo a via ordinária e basilar de apuração, cuja dispensabilidade ocorre apenas quando já houver elementos suficientes de autoria e materialidade."
        },
        {
          letra: "E",
          texto: "O Ministério Público pode determinar diretamente a quebra de sigilo telefônico sem necessidade de pronunciamento judicial.",
          correta: false,
          explicacao_especifica: "Incorreta. A interceptação telefônica e a busca domiciliar submetem-se à cláusula constitucional de estrita reserva de jurisdição."
        }
      ]
    },
    {
      idSlug: "batch3-const-013",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Militar do Distrito Federal (PMDF)",
      cargo_nome: "Oficial da Polícia Militar",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Embora a Polícia Civil, a Polícia Penal, a Polícia Militar e o Corpo de Bombeiros Militar do Distrito Federal sejam organizados e mantidos pela União, subordinam-se diretamente ao Governador do Distrito Federal.",
      explicacao: "GABARITO: CERTO. A organização e manutenção das forças de segurança do DF incumbem à União (art. 21, XIV, da CF/88), mas a subordinação funcional e administrativa cabe ao Governador do Distrito Federal (art. 144, § 6º, da CF/88).",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Art. 21, XIV c/c art. 144, § 6º da Constituição Federal de 1988."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. Embora custeadas pela União, as forças de segurança do DF subordinam-se ao Governador do Distrito Federal."
        }
      ]
    },
    {
      idSlug: "batch3-const-014",
      disciplina_id: dConst,
      assunto_id: aSegPub,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "No que se refere ao modelo de segurança pública instituído pela Constituição da República Federativa do Brasil de 1988, assinale a opção correta:",
      explicacao: "GABARITO: B. A jurisprudência uniforme do STF (ADI 236, ADI 2822, ADI 7233) estabelece que o rol dos órgãos de segurança pública insculpido no art. 144 da CF é de reprodução obrigatória pelos Estados-membros (norma de repetição obrigatória decorrente do princípio da simetria), configurando rol taxativo (numerus clausus).",
      alternativas: [
        {
          letra: "A",
          texto: "O rol de órgãos de segurança pública do art. 144 é exemplificativo, permitindo que leis ordinárias municipais criem polícias municipais de investigação criminal.",
          correta: false,
          explicacao_especifica: "Incorreta. O rol é taxativo e os municípios não possuem competência para criar polícias de investigação."
        },
        {
          letra: "B",
          texto: "O rol de órgãos encarregados da segurança pública previsto no art. 144 da Constituição Federal é taxativo, vinculando os Estados-membros pelo princípio da simetria.",
          correta: true,
          explicacao_especifica: "Correta. Jurisprudência pacífica do STF fixando o princípio da simetria e a taxatividade do art. 144 da CF."
        },
        {
          letra: "C",
          texto: "A segurança pública é dever privativo da União, sendo vedada a atuação concorrente dos Estados na preservação da ordem pública.",
          correta: false,
          explicacao_especifica: "Incorreta. O caput do art. 144 dispõe que a segurança pública é dever do Estado, direito e responsabilidade de todos."
        },
        {
          letra: "D",
          texto: "As guardas municipais possuem status constitucional de força auxiliar e reserva da Aeronáutica.",
          correta: false,
          explicacao_especifica: "Incorreta. As polícias militares e corpos de bombeiros são forças auxiliares e reserva do Exército; as guardas municipais não possuem essa condição."
        },
        {
          letra: "E",
          texto: "Os Corpos de Bombeiros Civis e as empresas privadas de segurança patrimonial integram os incisos do art. 144 como órgãos estatais de segurança pública.",
          correta: false,
          explicacao_especifica: "Incorreta. Corpos de bombeiros civis e vigilância privada não figuram no rol de órgãos estatais de segurança do art. 144."
        }
      ]
    },

    // -------------------------------------------------------------
    // TOPIC 2: ART. 5º DA CF/88 (Direitos e Garantias Fundamentais) - 16 questões (015 a 030)
    // -------------------------------------------------------------
    {
      idSlug: "batch3-const-015",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil de Santa Catarina (PC-SC)",
      cargo_nome: "Agente de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "De acordo com a tese fixada pelo Supremo Tribunal Federal no Tema 280 da Repercussão Geral (RE 603.616), a entrada forçada em domicílio sem mandado judicial, mesmo em período noturno, é lícita quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito.",
      explicacao: "GABARITO: CERTO. Tese do Tema 280 STF: 'A entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em período noturno, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade dos atos praticados'.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Tese vinculante exata fixada pelo STF no julgamento do RE 603.616 (Tema 280)."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O STF admite expressamente a entrada sem mandado em caso de flagrante delito, desde que presentes fundadas razões prévias justificadas a posteriori."
        }
      ]
    },
    {
      idSlug: "batch3-const-016",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Inspetor de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Nos termos do art. 5º, inciso XII, da Constituição Federal, é inviolável o sigilo da correspondência e das comunicações telegráficas, de dados e das comunicações telefônicas. A quebra do sigilo das comunicações telefônicas para fins de interceptação:",
      explicacao: "GABARITO: C. O art. 5º, XII, prevê expressamente: 'é inviolável o sigilo da correspondência e das comunicações telegráficas, de dados e das comunicações telefônicas, salvo, no último caso, por ordem judicial, nas hipóteses e na forma que a lei estabelecer para fins de investigação criminal ou instrução processual penal'.",
      alternativas: [
        {
          letra: "A",
          texto: "Pode ser determinada diretamente por Delegado de Polícia em investigações de crimes hediondos quando houver risco iminente de fuga.",
          correta: false,
          explicacao_especifica: "Incorreta. A interceptação telefônica submete-se à cláusula de reserva absoluta de jurisdição (ordem judicial)."
        },
        {
          letra: "B",
          texto: "É admitida para a instrução de processos administrativos disciplinares ou ações cíveis de reparação de danos sem relação com crime.",
          correta: false,
          explicacao_especifica: "Incorreta. A interceptação telefônica restringe-se a fins de investigação criminal ou instrução processual penal."
        },
        {
          letra: "C",
          texto: "Exige ordem judicial fundamentada e destina-se exclusivamente a fins de investigação criminal ou instrução processual penal, na forma da lei.",
          correta: true,
          explicacao_especifica: "Correta. Trata-se da redação exata da ressalva prevista no art. 5º, XII da CF e regulamentada pela Lei 9.296/96."
        },
        {
          letra: "D",
          texto: "Pode ser autorizada judicialmente para apurar qualquer infração penal, inclusive contravenções penais punidas com prisão simples.",
          correta: false,
          explicacao_especifica: "Incorreta. A Lei 9.296/96 veda a interceptação se o fato constituir infração penal punida, no máximo, com pena de detenção ou contravenção."
        },
        {
          letra: "E",
          texto: "Dispensa motivação judicial nos casos em que a medida for solicitada pelo Ministério Público Federal em ação de improbidade.",
          correta: false,
          explicacao_especifica: "Incorreta. Exige decisão judicial motivada e destina-se a persecução penal."
        }
      ]
    },
    {
      idSlug: "batch3-const-017",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "Conforme entendimento pacificado pelo Superior Tribunal de Justiça e pelo Supremo Tribunal Federal, a apreensão de aparelho celular em decorrência de prisão em flagrante não autoriza a autoridade policial a acessar, de imediato e sem prévia autorização judicial, as conversas armazenadas em aplicativos de mensagens instantâneas (como o WhatsApp), sob pena de ilicitude da prova obtida por violação à intimidade e ao sigilo de dados.",
      explicacao: "GABARITO: CERTO. O STJ (RHC 51.531/RO) e o STF pacificaram que o acesso aos dados e mensagens privadas arquivadas em celular apreendido durante prisão em flagrante depende de autorização judicial prévia ou consentimento voluntário, expresso e inequívoco do titular, sendo ilícita a prova coligida de forma unilateral pelos agentes policiais sem autorização.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. O acesso a registros de mensagens telemáticas em celular apreendido exige autorização judicial ou consentimento do titular."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. A simples apreensão em flagrante não legitima o acesso imediato ao conteúdo privado de mensagens sem autorização judicial."
        }
      ]
    },
    {
      idSlug: "batch3-const-018",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Escrivão de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Sobre a ação constitucional do Habeas Corpus (art. 5º, LXVIII, da CF/88), é correto afirmar que:",
      explicacao: "GABARITO: D. O habeas corpus é concedido sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder (art. 5º, LXVIII). Qualquer pessoa pode impetrar (capacidade postulatória universal) e as ações de HC são gratuitas (art. 5º, LXXVII). Além disso, embora não caiba HC para discutir o mérito de punição disciplinar militar (art. 142, § 2º), cabe para examinar a legalidade formal do ato.",
      alternativas: [
        {
          letra: "A",
          texto: "Exige capacidade postulatória e representação privativa por advogado devidamente inscrito na OAB.",
          correta: false,
          explicacao_especifica: "Incorreta. O habeas corpus pode ser impetrado por qualquer pessoa, física ou jurídica, em favor de si ou de terceiro, sem necessidade de advogado."
        },
        {
          letra: "B",
          texto: "Pode ser impetrado para proteger direitos pecuniários e anular sanções administrativas de natureza de multa de trânsito.",
          correta: false,
          explicacao_especifica: "Incorreta. O HC tutela exclusivamente a liberdade de locomoção (direito de ir, vir e permanecer), Súmula 693 do STF."
        },
        {
          letra: "C",
          texto: "Está sujeito ao recolhimento prévio de custas judiciais e taxa judiciária fixada pelo tribunal competente.",
          correta: false,
          explicacao_especifica: "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII da CF)."
        },
        {
          letra: "D",
          texto: "Conceder-se-á habeas corpus sempre que alguém sofrer ou se achar na iminência de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder.",
          correta: true,
          explicacao_especifica: "Correta. Trata-se da exata definição constitucional prevista no art. 5º, LXVIII da CF/88."
        },
        {
          letra: "E",
          texto: "É cabível em favor de pessoa jurídica para anular sanção de interdição temporária de estabelecimento comercial.",
          correta: false,
          explicacao_especifica: "Incorreta. Pessoa jurídica não possui liberdade de locomoção corpórea, não podendo figurar como paciente em HC."
        }
      ]
    },
    {
      idSlug: "batch3-const-019",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil de Alagoas (PC-AL)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "O mandado de segurança coletivo pode ser impetrado por partido político com representação no Congresso Nacional, bem como por organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano, em defesa dos interesses de seus membros ou associados, prescindindo a associação de autorização expressa e individual de cada associado para a propositura da ação coletiva.",
      explicacao: "GABARITO: CERTO. Art. 5º, LXX, da CF/88. Nos termos do art. 21 da Lei 12.016/2009 e da jurisprudência pacífica do STF (Súmula 629), a impetração de mandado de segurança coletivo por associação independe de autorização expressa dos associados, pois a entidade atua como substituta processual extraordinária.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Na impetração de mandado de segurança coletivo por associação, há substituição processual, dispensando-se autorização individual (Súmula 629 STF)."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. Diferentemente da ação ordinária do art. 5º, XXI, o mandado de segurança coletivo não exige autorização individual expressa."
        }
      ]
    },
    {
      idSlug: "batch3-const-020",
      disciplina_id: dConst,
      assunto_id: aArt5,
      banca_nome: "IBFC",
      orgao_nome: "Polícia Civil da Bahia (PC-BA)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "Consoante o art. 5º, LXXII, da Constituição Federal, o Habeas Data é a ação constitucional cabível para:",
      explicacao: "GABARITO: A. O art. 5º, LXXII prevê expressamente o cabimento do habeas data: 'a) para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público; b) para a retificação de dados, quando não se prefira fazê-lo por processo sigiloso, judicial ou administrativo'.",
      alternativas: [
        {
          letra: "A",
          texto: "Assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público, e para retificação desses dados.",
          correta: true,
          explicacao_especifica: "Correta. Reprodução literal do art. 5º, LXXII da Constituição Federal."
        },
        {
          letra: "B",
          texto: "Obter cópia integral de inquérito policial sigiloso relativo a terceiras pessoas investigadas.",
          correta: false,
          explicacao_especifica: "Incorreta. O Habeas Data possui caráter personalíssimo (informações relativas à pessoa do impetrante)."
        },
        {
          letra: "C",
          texto: "Proteger direito líquido e certo não amparado por habeas corpus ou mandado de injunção quando houver omissão legislativa.",
          correta: false,
          explicacao_especifica: "Incorreta. Esse é o conceito residual de mandado de segurança."
        },
        {
          letra: "D",
          texto: "Anular ato lesivo ao patrimônio histórico e artístico nacional praticado por autoridade pública.",
          correta: false,
          explicacao_especifica: "Incorreta. Trata-se da finalidade da Ação Popular (art. 5º, LXXIII)."
        },
        {
          letra: "E",
          texto: "Garantir a liberdade de locomoção em caso de ameaça de prisão civil de devedor de alimentos.",
          correta: false,
          explicacao_especifica: "Incorreta. A tutela da locomoção é exercida pelo Habeas Corpus."
        }
      ]
    }
  ];
}
