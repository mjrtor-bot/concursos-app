import { TAXONOMIA } from "./taxonomia.mjs";

export const legEspecialPart3 = [
  {
    idSlug: "leg-b5-037",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_raciais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito das inovações trazidas pela Lei nº 14.532/2023 à Lei nº 7.716/1989 (Lei de Crimes Raciais) e da jurisprudência do Supremo Tribunal Federal, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O crime de injúria racial foi transferido para a Lei nº 7.716/1989 (art. 2º-A), passando a ser punido com reclusão de dois a cinco anos e multa, sujeitando-se expressamente à inafiançabilidade e à imprescritibilidade constitucionais.",
        correta: true,
        explicacao_especifica: "Correta. A Lei 14.532/2023 inseriu o art. 2º-A na Lei 7.716/89, equiparando a injúria racial ao racismo, tornando-a inafiançável e imprescritível (STF, HC 154.248 e Tema 1.107)."
      },
      {
        letra: "B",
        texto: "A ação penal para o crime de injúria racial permaneceu como pública condicionada à representação da vítima no prazo decadencial de seis meses.",
        correta: false,
        explicacao_especifica: "Incorreta. A ação penal de todos os crimes da Lei 7.716/89 é pública incondicionada (art. 20-D)."
      },
      {
        letra: "C",
        texto: "A prática de homofobia e transfobia foi descriminalizada pelo STF por ausência de tipo penal formalmente aprovado pelo Congresso.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF equiparou atos de homotransfobia aos crimes de racismo da Lei 7.716/89 na ADO 26 e MI 4.733."
      },
      {
        letra: "D",
        texto: "A injúria preconceituosa praticada no contexto de atividades esportivas ou artísticas acarreta a diminuição de pena pela metade.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 2º-A, § 1º, prevê reclusão de 2 a 5 anos e proibição de frequência a esses locais por 3 anos (pena autônoma/especial)."
      },
      {
        letra: "E",
        texto: "O crime de racismo admite anistia e indulto presidencial ordinário caso o réu seja primário.",
        correta: false,
        explicacao_especifica: "Incorreta. O crime de racismo é inafiançável e imprescritível (art. 5º, XLII, CF/88)."
      }
    ],
    explicacao: "Gabarito: A. A Lei nº 14.532/2023 tipificou a injúria racial no art. 2º-A da Lei nº 7.716/1989 ('Injuriar alguém, ofendendo-lhe a dignidade ou o decoro, em razão de raça, cor, etnia ou procedência nacional: Pena - reclusão, de 2 a 5 anos, e multa'). Em harmonia com a jurisprudência do STF (HC 154.248), a conduta ostenta a natureza de crime de racismo, sendo inafiançável, imprescritível e processada mediante ação penal pública incondicionada (art. 20-D)."
  },
  {
    idSlug: "leg-b5-038",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.execucao_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Nos termos do art. 9º-A da Lei de Execução Penal (Lei nº 7.210/1984), o condenado por crime doloso praticado com violência grave contra a pessoa, bem como por crime contra a vida, contra a liberdade sexual ou por crime sexual contra vulnerável, será submetido, obrigatoriamente, à identificação do perfil genético, mediante extração de DNA, por técnica adequada e indolor, por ocasião do ingresso no estabelecimento prisional.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. É o teor exato do art. 9º-A, caput, da LEP, com a redação dada pelo Pacote Anticrime (Lei nº 13.964/2019)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 9º-A estabelece a obrigatoriedade da extração de perfil genético nessas hipóteses legais."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme dispõe o art. 9º-A da Lei nº 7.210/1984 (LEP), com redação conferida pela Lei nº 13.964/2019: 'O condenado por crime doloso praticado com violência grave contra a pessoa, bem como por crime contra a vida, contra a liberdade sexual ou por crime sexual contra vulnerável, será submetido, obrigatoriamente, à identificação do perfil genético, mediante extração de DNA, por técnica adequada e indolor, por ocasião do ingresso no estabelecimento prisional'."
  },
  {
    idSlug: "leg-b5-039",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.execucao_penal,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito dos percentuais de cumprimento de pena para a progressão de regime prisional disciplinados pelo art. 112 da Lei de Execução Penal (com as alterações do Pacote Anticrime - Lei nº 13.964/2019), assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A progressão de regime dar-se-á após o cumprimento de cinquenta por cento da pena se o apenado for condenado pela prática de crime hediondo ou equiparado, com resultado morte, se for primário.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 112, inciso VI, alínea 'a', da LEP."
      },
      {
        letra: "B",
        texto: "O apenado primário condenado por crime cometido sem violência à pessoa ou grave ameaça progride de regime após cumprir quarenta por cento da pena.",
        correta: false,
        explicacao_especifica: "Incorreta. Primário sem violência progride com 16% (art. 112, I, LEP)."
      },
      {
        letra: "C",
        texto: "A condenação por crime hediondo sem resultado morte praticado por apenado reincidente em crime hediondo exige setenta por cento da pena.",
        correta: false,
        explicacao_especifica: "Incorreta. Reincidente específico sem morte exige 60% (art. 112, VII). 70% é reservado ao reincidente em crime hediondo com resultado morte (art. 112, VIII)."
      },
      {
        letra: "D",
        texto: "O apenado que exerce comando individual de organização criminosa estruturada para a prática de crime hediondo progride com vinte e cinco por cento da pena.",
        correta: false,
        explicacao_especifica: "Incorreta. Comando de organização voltada a crime hediondo exige 50% e veda livramento condicional (art. 112, VI, 'b')."
      },
      {
        letra: "E",
        texto: "O percentual para apenado primário condenado por crime cometido com violência à pessoa ou grave ameaça é de dezesseis por cento.",
        correta: false,
        explicacao_especifica: "Incorreta. Primário com violência exige 25% (art. 112, III, LEP)."
      }
    ],
    explicacao: "Gabarito: A. Consoante o art. 112, VI, 'a', da LEP, a progressão de regime ocorrerá após o cumprimento de 50% (cinquenta por cento) da pena se o apenado for 'condenado pela prática de crime hediondo ou equiparado, com resultado morte, se for primário, vedado o livramento condicional'."
  },
  {
    idSlug: "leg-b5-040",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.estatuto_desarmamento,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal, ao julgar as ADIs 5.948 e 5.538, declarou a inconstitucionalidade dos dispositivos do Estatuto do Desarmamento que limitavam o porte de arma de fogo aos integrantes das guardas municipais com base na quantidade de habitantes do município, reconhecendo o direito ao porte funcional de arma aos guardas municipais de todas as cidades brasileiras, em serviço ou fora dele.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O Plenário do STF garantiu o porte de arma de fogo aos integrantes de todas as guardas municipais do país, independentemente do número de habitantes."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O STF extirpou o critério populacional que restringia o porte de armas para guardas municipais."
      }
    ],
    explicacao: "Gabarito: Certo. No julgamento conjunto das ADIs 5.948, 5.538 e da ADC 57, o Plenário do STF declarou inconstitucionais as restrições baseadas no número de habitantes do município previstas no art. 6º, incisos III e IV, da Lei nº 10.826/2003, assegurando aos integrantes de todas as guardas municipais do país o direito ao porte de arma de fogo em serviço e fora dele."
  },
  {
    idSlug: "leg-b5-041",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.interceptacao_telefonica,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No âmbito da Lei nº 9.296/1996, o art. 8º-A, § 4º (incluído pela Lei nº 13.964/2019), dispõe sobre a captação ambiental realizada por um dos interlocutores. A respeito dessa disciplina normativa e jurisprudencial, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A captação ambiental feita por um dos interlocutores sem o conhecimento dos demais poderá ser utilizada em matéria de defesa, quando demonstrada a integridade da gravação.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos exatos do art. 8º-A, § 4º, da Lei nº 9.296/1996."
      },
      {
        letra: "B",
        texto: "A captação ambiental defensiva só tem validade se o interlocutor tiver obtido alvará judicial prévio autorizador.",
        correta: false,
        explicacao_especifica: "Incorreta. A gravação por um dos interlocutores (gravação clandestina) para uso defensivo prescinde de prévia autorização judicial."
      },
      {
        letra: "C",
        texto: "O investigado que realiza gravação de conversa ambiental responde automaticamente pelo crime do art. 10 da Lei de Interceptações.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 10 pune a interceptação de comunicações alheias de terceiros sem ordem judicial."
      },
      {
        letra: "D",
        texto: "A gravação ambiental feita pela vítima nunca pode ser aproveitada pelo Ministério Público na instrução criminal.",
        correta: false,
        explicacao_especifica: "Incorreta. A vítima que grava crime contra si (ex.: extorsão, concussão) produz prova plenamente lícita admitida pelo STF (Tema 979)."
      },
      {
        letra: "E",
        texto: "A captação ambiental autorizada judicialmente pode ter prazo inicial fixado em doze meses sem interrupção.",
        correta: false,
        explicacao_especifica: "Incorreta. O prazo legal do art. 8º-A, § 3º, é de 15 dias renovável por períodos sucessivos."
      }
    ],
    explicacao: "Gabarito: A. O art. 8º-A, § 4º, da Lei nº 9.296/1996 prevê expressamente: 'A captação ambiental feita por um dos interlocutores sem o prévio conhecimento da autoridade policial ou do Ministério Público poderá ser utilizada, em matéria de defesa, quando demonstrada a integridade da gravação'."
  },
  {
    idSlug: "leg-b5-042",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Para a incidência da majorante do tráfico transnacional de drogas (art. 40, inciso I, da Lei nº 11.343/2006), é imprescindível a efetiva transposição das fronteiras nacionais pelo entorpecente.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Errado. A Súmula 607 do STJ e jurisprudência vinculante dispensam a efetiva transposição da fronteira, bastando a comprovação da destinação ou procedência internacional."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. A Súmula 607 do STJ enuncia expressamente que a majorante se configura independentemente da efetiva transposição da fronteira."
      }
    ],
    explicacao: "Gabarito: Errado. Nos termos da Súmula nº 607 do Superior Tribunal de Justiça: 'A majorante do tráfico transnacional de drogas (art. 40, inciso I, da Lei n. 11.343/2006) configura-se com a prova da destinação internacional das drogas, ainda que não consumada a transposição de fronteiras'."
  },
  {
    idSlug: "leg-b5-043",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.maria_da_penha,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em matéria de competência jurisdicional, a Lei Maria da Penha (Lei nº 11.340/2006, alterada pela Lei nº 13.894/2019) confere aos Juizados de Violência Doméstica e Familiar contra a Mulher:",
    alternativas: [
      {
        letra: "A",
        texto: "Competência cumulativa (híbrida) cível e criminal para conhecer e julgar as causas decorrentes da prática de violência doméstica e familiar, inclusive a ação de divórcio, separação, anulação de casamento ou dissolução de união estável, excluída a partilha de bens.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos dos arts. 14 e 14-A, caput e § 1º, da Lei nº 11.340/2006 (a partilha de bens é expressamente remetida à vara de família comum)."
      },
      {
        letra: "B",
        texto: "Competência exclusivamente penal, sendo nula qualquer decisão proferida pelo juizado que verse sobre matéria civil protetiva.",
        correta: false,
        explicacao_especifica: "Incorreta. A competência dos juizados especializados é expressamente mista (cível e criminal)."
      },
      {
        letra: "C",
        texto: "Competência plena e obrigatória para proceder à partilha de bens imóveis e litígios societários entre os cônjuges.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 14-A, § 1º, exclui expressamente a partilha de bens da competência do juizado de violência doméstica."
      },
      {
        letra: "D",
        texto: "Atribuição para homologar acordos de deserdação unilateral de filhos comuns do casal.",
        correta: false,
        explicacao_especifica: "Incorreta. Matéria sucessória estranha ao âmbito protetivo da Lei Maria da Penha."
      },
      {
        letra: "E",
        texto: "Subordinação funcional direta aos Conselhos Tutelares municipais.",
        correta: false,
        explicacao_especifica: "Incorreta. Trata-se de órgão do Poder Judiciário independente."
      }
    ],
    explicacao: "Gabarito: A. Os arts. 14 e 14-A da Lei nº 11.340/2006 consagram a competência híbrida (cumulativa cível e criminal) dos Juizados de Violência Doméstica e Familiar contra a Mulher para a apreciação das medidas protetivas e dos pedidos de divórcio, separação ou dissolução de união estável, ressalvada expressamente pelo art. 14-A, § 1º, a partilha de bens, que tramitará no juízo de família competente."
  },
  {
    idSlug: "leg-b5-044",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_hediondos,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O crime de posse ou porte ilegal de arma de fogo de uso restrito (art. 16, caput, da Lei nº 10.826/2003) permanece qualificado como hediondo na Lei nº 8.072/1990 após as alterações introduzidas pelo Pacote Anticrime (Lei nº 13.964/2019).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Errado. O Pacote Anticrime (Lei 13.964/19) alterou o art. 1º, parágrafo único, II, da Lei 8.072/90 para classificar como hediondo apenas o porte ou posse de arma de fogo de uso PROIBIDO (e não de uso restrito)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. O Pacote Anticrime restringiu a hediondez às armas de uso proibido (art. 16, § 2º, Lei 10.826/03), deixando o caput do art. 16 (uso restrito) fora do rol hediondo."
      }
    ],
    explicacao: "Gabarito: Errado. Com a entrada em vigor da Lei nº 13.964/2019 (Pacote Anticrime), o parágrafo único, inciso II, do art. 1º da Lei nº 8.072/1990 passou a prever como hediondo apenas o crime de 'posse ou porte ilegal de arma de fogo de uso proibido, previsto no art. 16 da Lei nº 10.826/2003'. Portanto, a posse ou porte de arma de fogo de uso restrito (art. 16, caput) deixou de ser crime hediondo (novatio legis in melius)."
  },
  {
    idSlug: "leg-b5-045",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.execucao_penal,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei de Execução Penal (Lei nº 7.210/1984), a monitoração eletrônica de condenados poderá ser determinada pelo juiz:",
    alternativas: [
      {
        letra: "A",
        texto: "Exclusivamente nos casos de apenados reincidentes em crimes de trânsito.",
        correta: false,
        explicacao_especifica: "Incorreta. A monitoração eletrônica não é restrita a crimes de trânsito."
      },
      {
        letra: "B",
        texto: "Quando autorizar a saída temporária no regime semiaberto e quando determinar a prisão domiciliar.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos exatos do art. 146-B, incisos II e IV, da LEP."
      },
      {
        letra: "C",
        texto: "Apenas após o trânsito em julgado da concessão do indulto natalino individual.",
        correta: false,
        explicacao_especifica: "Incorreta. O indulto extingue a pena, não cabendo tornozeleira após sua concessão definitiva."
      },
      {
        letra: "D",
        texto: "Diretamente pelo diretor do presídio, sem necessidade de provimento jurisdicional motivado.",
        correta: false,
        explicacao_especifica: "Incorreta. A fixação da monitoração é competência privativa do juiz da execução penal."
      },
      {
        letra: "E",
        texto: "Como sanção administrativa disciplinar aplicada a faltas leves no regime fechado.",
        correta: false,
        explicacao_especifica: "Incorreta. A monitoração não é espécie de sanção disciplinar carcerária."
      }
    ],
    explicacao: "Gabarito: B. O art. 146-B da Lei de Execução Penal (Lei nº 7.210/1984) prevê expressamente que o juiz poderá definir a fiscalização por meio da monitoração eletrônica quando: 'II - autorizar a saída temporária no regime semiaberto; IV - determinar a prisão domiciliar'."
  },
  {
    idSlug: "leg-b5-046",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O agente público que submeter a pessoa presa, sob sua custódia, ao uso de algemas quando manifestamente não houver resistência à prisão, ameaça de fuga ou perigo à integridade física própria ou alheia, pratica o crime de abuso de autoridade previsto no art. 18 da Lei nº 13.869/2019, em conformidade com a Súmula Vinculante nº 11 do STF.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 18 da Lei 13.869/19 criminalizou o uso abusivo de algemas em descompasso com os requisitos da Súmula Vinculante 11 do STF."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 18 pune expressamente o uso abusivo e injustificado de algemas."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 18 da Lei nº 13.869/2019 tipifica a conduta de 'Submeter o preso, internado ou apreendido ao uso de algemas ou de qualquer outro objeto que lhe restrinja o movimento dos membros, quando manifestamente não houver resistência à prisão, à internação ou à apreensão, ameaça de fuga ou perigo à integridade física própria ou alheia'. A norma harmoniza-se com a Súmula Vinculante nº 11 do STF."
  },
  {
    idSlug: "leg-b5-047",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos termos da Lei nº 11.343/2006, o procedimento de alienação antecipada de bens apreendidos em investigações de narcotráfico (art. 62):",
    alternativas: [
      {
        letra: "A",
        texto: "Pode ser determinado pelo juiz a requerimento do Ministério Público ou por representação da autoridade policial, a fim de preservar o valor econômico dos bens sujeitos à deterioração ou desvalorização.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 62, § 4º, da Lei nº 11.343/2006."
      },
      {
        letra: "B",
        texto: "Depende obrigatoriamente da concordância expressa de todos os réus do processo criminal.",
        correta: false,
        explicacao_especifica: "Incorreta. A alienação antecipada independe da anuência dos investigados (art. 62, § 4º)."
      },
      {
        letra: "C",
        texto: "É expressamente vedada antes do julgamento dos embargos infringentes no tribunal superior.",
        correta: false,
        explicacao_especifica: "Incorreta. A própria finalidade da medida cautelar é a alienação prévia/antecipada à condenação definitiva."
      },
      {
        letra: "D",
        texto: "Determina que os valores arrecadados no leilão sejam imediatamente divididos entre os policiais que efetuaram a apreensão.",
        correta: false,
        explicacao_especifica: "Incorreta. Os valores são depositados em conta judicial vinculada ao FUNAD (Fundo Nacional Antidrogas)."
      },
      {
        letra: "E",
        texto: "Aplica-se unicamente a aeronaves militares e navios de guerra apreendidos.",
        correta: false,
        explicacao_especifica: "Incorreta. Aplica-se a quaisquer bens móveis, veículos, aeronaves civis e embarcações apreendidas."
      }
    ],
    explicacao: "Gabarito: A. Conforme o art. 62, § 4º, da Lei nº 11.343/2006, o juiz, a requerimento do Ministério Público ou por representação da autoridade policial, poderá determinar a alienação antecipada dos bens apreendidos com a finalidade de preservar o seu respectivo valor econômico, evitando sua depreciação ou perda durante o trâmite da persecução penal."
  },
  {
    idSlug: "leg-b5-048",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_raciais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei nº 7.716/1989, as penas dos crimes de racismo e injúria racial serão aumentadas de metade se o crime for cometido mediante o concurso de duas ou mais pessoas.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos termos exatos do art. 20-A, inciso I, da Lei nº 7.716/1989 (incluído pela Lei nº 14.532/2023)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 20-A prevê expressamente o aumento de metade no concurso de duas ou mais pessoas."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 20-A da Lei nº 7.716/1989, incluído pela Lei nº 14.532/2023, estabelece que: 'As penas previstas nesta Lei serão aumentadas de 1/3 (um terço) até a metade quando ocorrer: I - no contexto de duas ou mais pessoas'."
  },
  {
    idSlug: "leg-b5-049",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.estatuto_crianca_adolescente,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito dos crimes previstos no Estatuto da Criança e do Adolescente (Lei nº 8.069/1990), assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O crime de adquirir, possuir ou armazenar fotografia, vídeo ou outra forma de registro que contenha cena de sexo explícito ou pornográfica envolvendo criança ou adolescente (art. 241-B) é delito de perigo abstrato e consuma-se com a simples posse ou armazenamento do material ilícito.",
        correta: true,
        explicacao_especifica: "Correta. O art. 241-B do ECA é crime formal e de mera conduta/perigo abstrato, consumando-se com a posse do arquivo ilícito."
      },
      {
        letra: "B",
        texto: "A divulgação de material pornográfico infantojuvenil (art. 241-A) exige a comprovação de lucro ou vantagem econômica para que se configure o crime.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 241-A consuma-se com a disponibilização a qualquer título, mesmo gratuito."
      },
      {
        letra: "C",
        texto: "Aquele que apenas presencia a prática de ato libidinoso com adolescente sem filmar responde pelo art. 240 como autor principal.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 240 pune produzir, dirigir ou filmar a cena."
      },
      {
        letra: "D",
        texto: "Os crimes previstos nos arts. 240 e 241-A do ECA são de ação penal pública condicionada à representação dos genitores.",
        correta: false,
        explicacao_especifica: "Incorreta. São crimes de ação penal pública incondicionada (art. 227 ECA)."
      },
      {
        letra: "E",
        texto: "A posse de desenhos animados fictícios sem conteúdo pornográfico real equipara-se à pornografia infantil qualificada.",
        correta: false,
        explicacao_especifica: "Incorreta. A lei tutela a proteção da infância real ou representação realista de sexo explícito infantojuvenil."
      }
    ],
    explicacao: "Gabarito: A. O art. 241-B do ECA tipifica a conduta de 'Adquirir, possuir ou armazenar, por qualquer meio, fotografia, vídeo ou outra forma de registro que contenha cena de sexo explícito ou pornográfica envolvendo criança ou adolescente'. Conforme jurisprudência pacífica do STJ (Súmula e teses), cuida-se de crime de mera conduta e perigo abstrato, consumando-se com a simples posse ou armazenamento dos arquivos digitais no computador ou dispositivo móvel do agente."
  },
  {
    idSlug: "leg-b5-050",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.execucao_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O cometimento de falta grave pelo apenado durante a execução penal autoriza a revogação de até um terço do tempo remido pelo trabalho ou estudo, recomeçando a contagem a partir da data da infração disciplinar, conforme dispõe o art. 127 da Lei nº 7.210/1984 (LEP) com a redação dada pela Lei nº 12.433/2011 e a jurisprudência da Súmula Vinculante nº 9 do STF.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 127 da LEP limita a perda a até 1/3 dos dias remidos, em consonância com a Súmula Vinculante 9 do STF."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 127 da LEP e a Súmula Vinculante 9 autorizam a perda de até 1/3 dos dias remidos em caso de falta grave."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 127 da LEP (com redação dada pela Lei nº 12.433/2011) prevê que: 'Em caso de falta grave, o juiz poderá revogar até 1/3 (um terço) do tempo remido, observado o disposto no art. 57, recomeçando a contagem a partir da data da infração disciplinar'. A Súmula Vinculante nº 9 do STF corrobora que a perda de dias remidos em razão de falta grave não ofende o direito adquirido ou a coisa julgada."
  },
  {
    idSlug: "leg-b5-051",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito do crime de financiamento ou custeio do tráfico de drogas tipificado no art. 36 da Lei nº 11.343/2006, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "Trata-se de crime autônomo punido com pena de reclusão de oito a vinte anos e multa, aplicando-se àquele que financia ou custeia a prática de qualquer dos crimes previstos nos arts. 33, caput e § 1º, e 34 da Lei de Drogas.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 36 da Lei nº 11.343/2006."
      },
      {
        letra: "B",
        texto: "O financiador do tráfico responde necessariamente como partícipe do art. 33, sendo vedada sua punição autônoma pelo art. 36.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 36 é tipo penal especial autônomo que afasta a participação genérica do CP."
      },
      {
        letra: "C",
        texto: "O crime de financiamento do tráfico admite a causa de diminuição do tráfico privilegiado (art. 33, § 4º).",
        correta: false,
        explicacao_especifica: "Incorreta. O privilégio do § 4º é exclusivo para as condutas do art. 33, caput e § 1º."
      },
      {
        letra: "D",
        texto: "O crime de financiamento é punido com detenção de um a três anos por constituir infração de menor potencial ofensivo.",
        correta: false,
        explicacao_especifica: "Incorreta. A pena cominada é de reclusão de 8 a 20 anos e multa (uma das mais severas da legislação brasileira)."
      },
      {
        letra: "E",
        texto: "O crime do art. 36 exige a apreensão física de moeda estrangeira ou ouro em barras.",
        correta: false,
        explicacao_especifica: "Incorreta. O custeio pode dar-se por qualquer meio financeiro, bens ou recursos econômicos."
      }
    ],
    explicacao: "Gabarito: A. O art. 36 da Lei nº 11.343/2006 estabelece como crime autônomo a conduta de 'Financiar ou custear a prática de qualquer dos crimes previstos nos arts. 33, caput e § 1º, e 34 desta Lei', cominando pena severa de reclusão, de 8 (oito) a 20 (vinte) anos, e pagamento de 1.500 (mil e quinhentos) a 4.000 (quatro mil) dias-multa."
  },
  {
    idSlug: "leg-b5-052",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O crime de poluição qualificada (art. 54, § 2º, da Lei nº 9.605/1998) é delito formal e de perigo abstrato, consumando-se com a mera emissão de efluentes em desacordo com as normas regulamentares, dispensando qualquer laudo pericial que ateste a potencialidade de dano à saúde humana ou ao meio ambiente.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Errado. O crime do art. 54 da Lei 9.605/98 é crime que deixa vestígios e exige laudo pericial atestando que a poluição resultou ou pode resultar em danos à saúde humana ou mortandade de animais (STJ e art. 158 CPP)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. O crime do art. 54 da Lei de Crimes Ambientais exige comprovação técnica pericial da potencialidade lesiva à saúde ou ao ecossistema."
      }
    ],
    explicacao: "Gabarito: Errado. Conforme jurisprudência pacificada do Superior Tribunal de Justiça, o crime de poluição previsto no art. 54 da Lei nº 9.605/1998 exige a realização de perícia técnica que comprove a potencialidade lesiva do ato poluidor de causar danos à saúde humana ou mortandade de animais/destruição da flora, não se tratando de infração que prescinda de exame pericial de corpo de delito."
  },
  {
    idSlug: "leg-b5-053",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei nº 13.869/2019 (Lei de Abuso de Autoridade), as penas restritivas de direitos substitutivas das privativas de liberdade previstas na lei são:",
    alternativas: [
      {
        letra: "A",
        texto: "Prestação de serviços à comunidade ou a entidades públicas e suspensão do exercício do cargo, da função ou do mandato, pelo prazo de um a seis meses, com a perda dos vencimentos e das vantagens.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 5º, incisos I e II, da Lei nº 13.869/2019."
      },
      {
        letra: "B",
        texto: "Prisão domiciliar monitorada por doze meses e perda irrecorrível da aposentadoria proporcional.",
        correta: false,
        explicacao_especifica: "Incorreta. Prisão domiciliar é espécie de prisão, não pena restritiva de direitos autônoma da lei."
      },
      {
        letra: "C",
        texto: "Interdição de direitos civis por dez anos e recolhimento de multa em favor exclusivo da vítima.",
        correta: false,
        explicacao_especifica: "Incorreta. O rol do art. 5º prevê serviços à comunidade e suspensão do cargo por 1 a 6 meses com perda de vencimentos."
      },
      {
        letra: "D",
        texto: "Exoneração compulsória definitiva e cassação imediata do porte de arma pessoal sem direito a recurso.",
        correta: false,
        explicacao_especifica: "Incorreta. A perda do cargo é efeito da condenação (art. 4º, parágrafo único), condicionado à reincidência e não automático."
      },
      {
        letra: "E",
        texto: "Prestação pecuniária em favor de fundos eleitorais municipais.",
        correta: false,
        explicacao_especifica: "Incorreta. Não prevista no rol do art. 5º da Lei 13.869/19."
      }
    ],
    explicacao: "Gabarito: A. O art. 5º da Lei nº 13.869/2019 estabelece expressamente: 'As penas restritivas de direitos substitutivas das privativas de liberdade previstas nesta Lei são: I - prestação de serviços à comunidade ou a entidades públicas; II - suspensão do exercício do cargo, da função ou do mandato, pelo prazo de 1 (um) a 6 (seis) meses, com a perda dos vencimentos e das vantagens'."
  }
];
