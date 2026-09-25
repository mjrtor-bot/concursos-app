import { TAXONOMIA } from "./taxonomia.mjs";

export const legEspPart1 = [
  // 001 - Lei de Drogas (Lei 11.343/2006): Tráfico Privilegiado e Requisitos
  {
    idSlug: "batch3-leg-001",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Em operação da Polícia Federal deflagrada em rodovia interestadual, foi preso em flagrante indivíduo transportando 15 kg de pasta-base de cocaína. Verificou-se que o réu é primário e possui bons antecedentes criminais, mas há registros de inquéritos policiais em andamento sem condenação transitada em julgado. Nessa situação, conforme a jurisprudência sumulada do Superior Tribunal de Justiça (Súmula 444) e o entendimento sobre o art. 33, § 4º, da Lei nº 11.343/2006, a existência de inquéritos policiais ou ações penais em andamento, por si só, não pode ser utilizada para afastar a causa de diminuição de pena do tráfico privilegiado sob o argumento de que o agente se dedica a atividades criminosas.",
    explicacao: "GABARITO: CERTO. A jurisprudência pacífica do STF e do STJ (inclusive em teses de recursos repetitivos e na Súmula 444/STJ) consagra que inquéritos policiais ou ações penais em curso, desprovidos de condenação definitiva, não podem fundamentar a presunção de dedicação a atividades criminosas para afastar a aplicação do tráfico privilegiado (art. 33, § 4º, da Lei 11.343/2006), sob pena de manifesta violação ao princípio da presunção de não culpabilidade (art. 5º, LVII, CF/88).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STJ e o STF pacificaram que inquéritos e ações penais em curso não bastam, isoladamente, para comprovar a dedicação a atividades criminosas e vedar o tráfico privilegiado."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A utilização de inquéritos em curso para afastar o benefício viola a Súmula 444 do STJ e o princípio da presunção de inocência."
      }
    ]
  },

  // 002 - Lei de Drogas: Porte para Consumo Pessoal e Jurisprudência do STF (RE 635.659)
  {
    idSlug: "batch3-leg-002",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Durante abordagem policial de rotina, agentes civis flagraram indivíduo trazendo consigo 25 gramas de maconha acondicionadas em um único invólucro plástico, sem indícios de mercancia, armas, contabilidade ou apetrechos para fracionamento. Considerando a disciplina do art. 28 da Lei nº 11.343/2006 e a decisão de repercussão geral fixada pelo Supremo Tribunal Federal no RE 635.659, assinale a opção correta quanto ao procedimento a ser adotado pela autoridade policial:",
    explicacao: "GABARITO: C. O Plenário do STF (RE 635.659/SP) fixou que o porte de maconha para consumo pessoal (até 40g ou 6 plantas fêmeas) constitui ilícito de natureza administrativa, e não criminal, inexistindo repercussão penal. Em decorrência, a autoridade policial não deve lavrar Termo Circunstanciado de Ocorrência (TCO) penal nem aplicar medidas privativas de liberdade, mas sim efetuar a apreensão administrativa da substância e notificar o autor para comparecimento à esfera competente (sanções administrativas pedagógicas), sem geração de reincidência penal ou registro na folha de antecedentes criminais.",
    alternativas: [
      {
        letra: "A",
        texto: "Deverá lavrar auto de prisão em flagrante por tráfico de drogas, haja vista que a presunção relativa de consumo pessoal exige menos de 10 gramas de substância entorpecente.",
        correta: false,
        explicacao_especifica: "Incorreto. O critério jurisprudencial do STF estabeleceu a presunção relativa de consumo pessoal para até 40 gramas de maconha ou 6 plantas fêmeas."
      },
      {
        letra: "B",
        texto: "Deverá lavrar Termo Circunstanciado de Ocorrência (TCO) penal pelo crime do art. 28, com imposição de fiança pecuniária obrigatória para liberação do indivíduo.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 28 não admite prisão em flagrante nem arbitramento de fiança, e o STF despenalizou/desjurisdicionalizou criminalmente o porte de maconha para consumo pessoal."
      },
      {
        letra: "C",
        texto: "Deverá realizar a apreensão administrativa da droga e notificar o autor do fato sem a lavratura de TCO penal ou imposição de efeitos penais secundários, haja vista a natureza de ilícito administrativo fixada pelo STF para o porte de até 40g de maconha para consumo.",
        correta: true,
        explicacao_especifica: "Correto. O STF estabeleceu que a conduta de portar até 40g de maconha para consumo é ilícito administrativo (sem antecedentes criminais ou reincidência penal), cabendo apreensão da droga e notificação administrativa."
      },
      {
        letra: "D",
        texto: "Poderá impor imediatamente a pena privativa de liberdade de detenção pelo prazo de 30 dias em caso de recusa imotivada do autor em assinar o termo de compromisso.",
        correta: false,
        explicacao_especifica: "Incorreto. A Lei 11.343/2006 aboliu expressamente qualquer pena privativa de liberdade para o consumo pessoal."
      },
      {
        letra: "E",
        texto: "Deverá aplicar a pena de prestação de serviços à comunidade por decisão discricionária sumária da própria autoridade policial na delegacia.",
        correta: false,
        explicacao_especifica: "Incorreto. A aplicação de qualquer sanção sancionatória exige o devido processo legal e contraditório perante autoridade jurisdicional competente."
      }
    ]
  },

  // 003 - Lei de Drogas: Infiltração Policial e Não Identificação
  {
    idSlug: "batch3-leg-003",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Distrito Federal (PCDF)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na investigação de crimes previstos na Lei nº 11.343/2006, a infiltração de agentes de polícia em tarefas de investigação constitui meio especial de obtenção de prova que depende de prévia e motivada autorização judicial, ouvido o Ministério Público, devendo constar dos autos o sigilo necessário para a proteção da identidade do agente público infiltrado.",
    explicacao: "GABARITO: CERTO. O art. 53, inciso I, e o art. 53-A da Lei nº 11.343/2006 (com redação harmonizada com a Lei 12.850/2013) preveem a infiltração de policiais como meio excepcional de prova dependente de prévia autorização judicial motivada e oitiva do Ministério Público, resguardando-se estritamente a identidade do agente infiltrado.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A infiltração de agentes exige reserva de jurisdição (autorização judicial fundamentada) e manifestação prévia ministerial, resguardada a identidade do agente."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A infiltração é ato complexo condicionado à expressa autorização judicial e estrito sigilo funcional."
      }
    ]
  },

  // 004 - Lei de Drogas: Majorantes do art. 40 e Jurisprudência
  {
    idSlug: "batch3-leg-004",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Sobre as causas especiais de aumento de pena previstas no art. 40 da Lei nº 11.343/2006 e a jurisprudência pacificada dos Tribunais Superiores, assinale a alternativa correta:",
    explicacao: "GABARITO: D. A Súmula 607 do STJ dispõe expressamente: 'A majorante do tráfico transnacional de drogas (art. 40, inciso I, da Lei n. 11.343/2006) configura-se com a prova da destinação internacional das drogas, ainda que não consumada a transposição de fronteiras'. Da mesma forma, a Súmula 587 do STJ estabelece que para a incidência da majorante do tráfico interestadual é desnecessária a efetiva transposição da divisa.",
    alternativas: [
      {
        letra: "A",
        texto: "A majorante da transnacionalidade (art. 40, I) somente se aperfeiçoa se houver a efetiva transposição física da fronteira nacional pela substância entorpecente.",
        correta: false,
        explicacao_especifica: "Incorreto. Conforme a Súmula 607 do STJ, basta a comprovação da destinação internacional da droga."
      },
      {
        letra: "B",
        texto: "A causa de aumento de pena decorrente do cometimento do crime nas dependências ou imediações de presídios (art. 40, III) é inaplicável se o agente for visitante e a droga estiver oculta no corpo.",
        correta: false,
        explicacao_especifica: "Incorreto. A majorante incide independentemente de ser visitante, pois visa proteger a vulnerabilidade do ambiente prisional."
      },
      {
        letra: "C",
        texto: "A causa de aumento pelo tráfico interestadual (art. 40, V) exige a interceptação do entorpecente em pelo menos dois estados da federação concomitantemente.",
        correta: false,
        explicacao_especifica: "Incorreto. Conforme a Súmula 587 do STJ, basta demonstrar que a droga se destinava a outro estado, mesmo interceptada no estado de origem."
      },
      {
        letra: "D",
        texto: "A majorante do tráfico transnacional de drogas configura-se com a prova da destinação internacional das drogas, ainda que não consumada a efetiva transposição de fronteiras.",
        correta: true,
        explicacao_especifica: "Correto. Redação exata e literal do teor da Súmula 607 do Superior Tribunal de Justiça."
      },
      {
        letra: "E",
        texto: "O envolvimento de criança ou adolescente no tráfico de drogas constitui agravante genérica do Código Penal, não sendo causa de aumento específica na Lei de Drogas.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 40, VI da Lei 11.343/2006 prevê expressamente causa especial de aumento de pena de 1/6 a 2/3 pelo envolvimento de criança ou adolescente."
      }
    ]
  },

  // 005 - Lei de Drogas: Associação para o Tráfico (Art. 35)
  {
    idSlug: "batch3-leg-005",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Para a configuração do crime autônomo de associação para o tráfico (art. 35 da Lei nº 11.343/2006), é indispensável a comprovação do dolo de associação com caráter de estabilidade e permanência entre duas ou mais pessoas, sendo insuficiente o mero concurso eventual de agentes para a prática do tráfico de entorpecentes.",
    explicacao: "GABARITO: CERTO. É pacífica e uniforme a jurisprudência do STJ e do STF no sentido de que a configuração do crime do art. 35 da Lei de Drogas exige o vínculo associativo estável e permanente entre duas ou mais pessoas com a finalidade reiterada de traficar. A convergência transitória e ocasional de vontades configura apenas concurso de agentes (coautoria no crime de tráfico do art. 33), e não o delito autônomo de associação.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O elemento subjetivo do tipo exige animus associativo estável e duradouro, afastando a tipicidade do art. 35 em concursos meramente eventuais."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O mero concurso esporádico ou eventual não preenche a tipicidade material do art. 35 da Lei 11.343/2006."
      }
    ]
  },

  // 006 - Lei de Drogas: Destruição e Incineração de Plantações e Drogas
  {
    idSlug: "batch3-leg-006",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No curso de investigações conduzidas pela Polícia Civil em zona rural, foi localizada extensa plantação de maconha (Cannabis sativa). De acordo com as disposições da Lei nº 11.343/2006 a respeito da destruição de plantações e drogas apreendidas, assinale a alternativa correta:",
    explicacao: "GABARITO: B. Nos termos do art. 32 da Lei 11.343/2006, as plantações ilícitas serão imediatamente destruídas pelo Delegado de Polícia, que recolherá quantidade suficiente para exame pericial, lavrando auto circunstanciado e guardando o local até a sua destruição.",
    alternativas: [
      {
        letra: "A",
        texto: "A destruição da plantação somente poderá ocorrer após o trânsito em julgado de sentença penal condenatória dos proprietários da terra.",
        correta: false,
        explicacao_especifica: "Incorreto. As plantações ilícitas devem ser destruídas imediatamente pelo Delegado de Polícia, nos termos do art. 32."
      },
      {
        letra: "B",
        texto: "As plantações ilícitas serão imediatamente destruídas pelo Delegado de Polícia, que recolherá quantidade suficiente para a elaboração do laudo pericial, lavrando auto circunstanciado que delimite o local.",
        correta: true,
        explicacao_especifica: "Correto. Inteligência do art. 32, caput e § 1º, da Lei 11.343/2006."
      },
      {
        letra: "C",
        texto: "A incineração de drogas apreendidas em flagrante delito pode ser realizada sem prévia autorização judicial e sem comunicação ao Ministério Público ou autoridade sanitária.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 50, § 3º exige comunicação ao juiz, MP e vigilância sanitária para a incineração das drogas apreendidas."
      },
      {
        letra: "D",
        texto: "As drogas apreendidas sem ocorrência de prisão em flagrante jamais poderão ser destruídas antes de transcorridos 5 anos do arquivamento do inquérito policial.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 50-A prevê a destruição das drogas apreendidas sem prisão em flagrante no prazo de até 30 dias após autorização judicial."
      },
      {
        letra: "E",
        texto: "A destruição de drogas e plantações compete exclusivamente à autoridade militar da região onde ocorreu a apreensão.",
        correta: false,
        explicacao_especifica: "Incorreto. A competência legal é do Delegado de Polícia que presidir a investigação."
      }
    ]
  },

  // 007 - Lei de Drogas: Financiamento do Tráfico (Art. 36) e Autonomia Típica
  {
    idSlug: "batch3-leg-007",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O crime de financiar ou custear a prática de qualquer dos crimes previstos nos arts. 33, caput e § 1º, e 34 da Lei nº 11.343/2006 (art. 36 da Lei de Drogas) constitui figura típica autônoma, cuja incidência pressupõe que o agente atue exclusivamente como financiador/capitalista do negócio ilícito, não podendo ser imputado em concurso material com o crime de tráfico (art. 33) se o sujeito também executar diretamente as condutas do tráfico custeadas.",
    explicacao: "GABARITO: CERTO. A jurisprudência consolidada do STJ preconiza que o delito do art. 36 da Lei 11.343/2006 é autônomo e se destina à punição do financiador/investidor que não executa diretamente o tráfico. Se o próprio agente que fornece os recursos financeiros também pratica os atos de execução do tráfico de drogas (art. 33), responde apenas por este último (art. 33), sob pena de inadmissível bis in idem.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A jurisprudência veda o concurso material entre o art. 33 e o art. 36 quando o agente financia seu próprio tráfico executivo, evitando bis in idem."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O tipo penal do art. 36 aplica-se especificamente à figura do financiador externo, restando absorvido pelo art. 33 caso este execute as condutas típicas."
      }
    ]
  },

  // 008 - Estatuto do Desarmamento (Lei 10.826/2003): Posse vs Porte Ilegal
  {
    idSlug: "batch3-leg-008",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.desarmamento,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Em cumprimento de mandado de busca e apreensão domiciliar expedido pelo juízo criminal, policiais civis encontraram um revólver calibre .38, de uso permitido, devidamente municiado e com numeração íntegra, guardado no interior do guarda-roupas do investigado, o qual não possuía registro da arma no SINARM. Na mesma data, durante a abordagem na rua ao sair de seu local de trabalho, o investigado trazia na cintura uma pistola calibre .380, também de uso permitido e sem porte. Diante da Lei nº 10.826/2003, as condutas praticadas configuram, respectivamente:",
    explicacao: "GABARITO: A. Manter arma de fogo no interior de sua residência ou dependência desta sem autorização legal configura o crime de Posse irregular de arma de fogo de uso permitido (art. 12 da Lei 10.826/2003). Por sua vez, trazer consigo arma de fogo fora de sua residência ou local de trabalho configura o crime de Porte ilegal de arma de fogo de uso permitido (art. 14 da Lei 10.826/2003).",
    alternativas: [
      {
        letra: "A",
        texto: "Posse irregular de arma de fogo de uso permitido (art. 12) e porte ilegal de arma de fogo de uso permitido (art. 14).",
        correta: true,
        explicacao_especifica: "Correto. A guarda intramuros domiciliar configura posse (art. 12), enquanto trazer consigo na via pública configura porte (art. 14)."
      },
      {
        letra: "B",
        texto: "Porte ilegal de arma de fogo de uso permitido em ambas as situações, haja vista a presença de munição.",
        correta: false,
        explicacao_especifica: "Incorreto. A localização espacial (dentro de casa vs na via pública) define a distinção típica entre posse e porte."
      },
      {
        letra: "C",
        texto: "Posse ilegal de arma de fogo de uso restrito e disparo de arma de fogo consumado.",
        correta: false,
        explicacao_especifica: "Incorreto. Os calibres .38 e .380 são de uso permitido e não houve disparo."
      },
      {
        letra: "D",
        texto: "Comércio clandestino de armas de fogo e conduta atípica decorrente da abolitio criminis temporária.",
        correta: false,
        explicacao_especifica: "Incorreto. Não há comércio ilegal e a abolitio criminis temporária extinguiu-se há anos para armas sem entrega espontânea."
      },
      {
        letra: "E",
        texto: "Porte ilegal de arma de uso restrito e contravenção penal de porte de arma branca.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se de armas de fogo de uso permitido (arts. 12 e 14)."
      }
    ]
  },

  // 009 - Estatuto do Desarmamento: Arma com Numeração Suprimida / Raspada (Art. 16, § 1º, I)
  {
    idSlug: "batch3-leg-009",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.desarmamento,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A conduta de portar arma de fogo com numeração de série raspada, suprimida ou adulterada subsume-se ao tipo penal do art. 16, § 1º, inciso I, da Lei nº 10.826/2003, independentemente de o armamento ser originariamente de uso permitido ou restrito, não sendo admitida a desclassificação para o crime de porte de uso permitido (art. 14).",
    explicacao: "GABARITO: CERTO. A jurisprudência consolidada do STJ e do STF estabelece que a supressão ou adulteração do sinal identificador do armamento inviabiliza o controle estatal de rastreabilidade, razão pela qual o legislador equiparou expressamente a conduta à posse ou porte de arma de fogo de uso restrito (art. 16, § 1º, I da Lei 10.826/2003), sendo irrelevante que o calibre originário seja de uso permitido.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 16, § 1º, I da Lei 10.826/03 equipara qualquer arma com sinal identificador adulterado/raspado às penas de uso restrito."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A supressão do número afasta a incidência do art. 14 e atrai compulsoriamente a tipificação do art. 16, § 1º, I."
      }
    ]
  },

  // 010 - Estatuto do Desarmamento: Comércio Ilegal e Tráfico Internacional
  {
    idSlug: "batch3-leg-010",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.desarmamento,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Acerca dos crimes de comércio ilegal de arma de fogo (art. 17) e tráfico internacional de arma de fogo (art. 18) tipificados na Lei nº 10.826/2003 e da jurisprudência correlata, assinale a opção correta:",
    explicacao: "GABARITO: E. Conforme a literalidade dos arts. 17 e 18 da Lei nº 10.826/2003 (com redação ampliada pelo Pacote Anticrime), as penas desses crimes são aumentadas da metade se a arma de fogo, acessório ou munição forem de uso restrito ou proibido (art. 19). Além disso, a competência para processar e julgar o tráfico internacional de armas é da Justiça Federal, em razão do interesse direto da União e tratados internacionais.",
    alternativas: [
      {
        letra: "A",
        texto: "O crime de comércio ilegal de arma de fogo (art. 17) somente se consuma se o agente mantiver estabelecimento comercial formalmente registrado em junta comercial.",
        correta: false,
        explicacao_especifica: "Incorreto. O parágrafo único do art. 17 equipara ao comércio ilegal a atividade exercida em residência ou de forma clandestina/informal."
      },
      {
        letra: "B",
        texto: "A conduta de importar arma de fogo sem autorização da autoridade competente caracteriza contrabando do Código Penal, restando revogado o art. 18 da Lei de Armas.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 18 da Lei 10.826/2003 é especial em relação ao crime genérico de contrabando do CP."
      },
      {
        letra: "C",
        texto: "O tráfico internacional de arma de fogo é crime de competência exclusiva da Justiça Estadual da comarca onde a arma foi apreendida.",
        correta: false,
        explicacao_especifica: "Incorreto. A transnacionalidade da conduta fixa a competência da Justiça Federal (art. 109, V, CF/88)."
      },
      {
        letra: "D",
        texto: "O comércio ilegal de armas de fogo admite a modalidade culposa quando o comerciante deixa de exigir o registro do comprador por negligência.",
        correta: false,
        explicacao_especifica: "Incorreto. O tipo penal do art. 17 é exclusivamente doloso."
      },
      {
        letra: "E",
        texto: "A pena do crime de tráfico internacional de arma de fogo é aumentada da metade se a arma de fogo, acessório ou munição for de uso restrito ou proibido.",
        correta: true,
        explicacao_especifica: "Correto. Inteligência expressa do art. 19 da Lei nº 10.826/2003."
      }
    ]
  },

  // 011 - Estatuto do Desarmamento: Disparo de Arma de Fogo e Subsidiariedade
  {
    idSlug: "batch3-leg-011",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.desarmamento,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de disparo de arma de fogo (art. 15 da Lei nº 10.826/2003) é delito de perigo abstrato e de subsidiariedade expressa, configurando-se apenas quando a conduta não tenha por finalidade a prática de outro crime mais grave, hipótese em que o disparo restará absorvido pelo delito-fim pretendido pelo agente (como a tentativa de homicídio).",
    explicacao: "GABARITO: CERTO. O art. 15 da Lei 10.826/2003 prevê a cláusula de subsidiariedade expressa: 'desde que essa conduta não tenha por finalidade a prática de outro crime'. Assim, se o disparo é efetuado com a intenção de matar ou lesionar a vítima, o agente responderá pelo homicídio (tentado ou consumado) ou lesão corporal, sendo o disparo absorvido pelo princípio da consunção/subsidiariedade.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 15 da Lei 10.826/03 contém subsidiariedade expressa e é absorvido por crimes com dolo específico mais grave (ex.: homicídio tentado)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. Havendo dolo de matar ou ferir, o disparo configura crime-meio absorvido pelo crime-fim pretendido."
      }
    ]
  },

  // 012 - Estatuto do Desarmamento: Porte Funcional de Policiais
  {
    idSlug: "batch3-leg-012",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.desarmamento,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em relação ao porte de arma de fogo deferido aos integrantes dos órgãos de segurança pública elencados no art. 144 da Constituição Federal, assinale a alternativa que está em estrita consonância com a Lei nº 10.826/2003 e os regulamentos federais aplicáveis:",
    explicacao: "GABARITO: B. Os integrantes da Polícia Federal, Polícia Rodoviária Federal e Polícias Civis dos Estados e DF possuem porte de arma de fogo institucional e particular com abrangência nacional, em razão do exercício de suas funções institucionais e do disposto no art. 6º, inciso II, da Lei nº 10.826/2003.",
    alternativas: [
      {
        letra: "A",
        texto: "O porte de arma de fogo dos policiais civis é restrito aos limites territoriais do Estado onde exercem suas funções, sendo vedado o porte em outras unidades federativas mesmo com identidade funcional válida.",
        correta: false,
        explicacao_especifica: "Incorreto. O porte de arma funcional dos integrantes das polícias civis, federais e rodoviárias possui abrangência em todo o território nacional."
      },
      {
        letra: "B",
        texto: "Os policiais federais, rodoviários federais e civis têm direito ao porte de arma de fogo de propriedade particular ou institucional com validade em âmbito nacional, mesmo fora de serviço.",
        correta: true,
        explicacao_especifica: "Correto. Conforme o art. 6º, II da Lei 10.826/2003 e regulamentação, o porte funcional estende-se nacionalmente e fora de serviço."
      },
      {
        letra: "C",
        texto: "O policial que estiver fora de serviço perde compulsoriamente o porte de sua arma de fogo institucional, devendo mantê-la acautelada na delegacia durante os períodos de folga.",
        correta: false,
        explicacao_especifica: "Incorreto. O policial mantém o direito ao porte funcional mesmo durante as folgas e períodos de descanso."
      },
      {
        letra: "D",
        texto: "O porte de arma de fogo é concedido apenas aos policiais com mais de 10 anos de efetivo exercício na carreira policial.",
        correta: false,
        explicacao_especifica: "Incorreto. O porte decorre da posse no cargo e conclusão do curso de formação policial."
      },
      {
        letra: "E",
        texto: "A concessão do porte aos policiais federais depende de autorização discricionária e anual do Exército Brasileiro.",
        correta: false,
        explicacao_especifica: "Incorreto. O porte decorre de expressa previsão legal na Lei 10.826/03, cabendo o controle à própria corporação policial/SINARM."
      }
    ]
  },

  // 013 - Estatuto do Desarmamento: Princípio da Insignificância e Munição Desacompanhada
  {
    idSlug: "batch3-leg-013",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.desarmamento,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Embora os crimes previstos no Estatuto do Desarmamento sejam de perigo abstrato, o Supremo Tribunal Federal e o Superior Tribunal de Justiça admitem excepcionalmente a aplicação do princípio da insignificância na hipótese de posse ou porte de ínfima quantidade de munição de uso permitido, desacompanhada da respectiva arma de fogo e em contexto fático que revele a total ausência de potencialidade lesiva ou vinculação a outras práticas delitivas.",
    explicacao: "GABARITO: CERTO. Embora a regra geral seja a tipicidade formal e material do porte de munição desacompanhada de arma (crime de perigo abstrato), o STF (RHC 143.449/MS) e a jurisprudência pacífica do STJ admitem a incidência do princípio da insignificância em casos excepcionais onde há apreensão de ínfima quantidade de munição de uso permitido desacompanhada de arma de fogo e sem envolvimento do agente com outras condutas criminosas.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF e o STJ consolidaram a aplicação excepcional da insignificância para quantidade ínfima de munição desacompanhada de arma sem lesividade concreta."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A jurisprudência dos Tribunais Superiores admite sim, excepcionalmente, a atipicidade material sob esses requisitos estritos."
      }
    ]
  },

  // 014 - Crimes Hediondos (Lei 8.072/1990): Rol Taxativo e Pacote Anticrime
  {
    idSlug: "batch3-leg-014",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_hediondos,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O ordenamento jurídico brasileiro adotou o sistema legal de definição dos crimes hediondos, de modo que apenas as condutas expressamente catalogadas pelo legislador no rol taxativo da Lei nº 8.072/1990 ostentam essa natureza. À luz da legislação vigente em 2026, constitui crime hediondo consumado ou tentado:",
    explicacao: "GABARITO: C. O art. 1º, inciso IX, da Lei nº 8.072/1990 (incluído pela Lei nº 13.964/2019 - Pacote Anticrime) qualifica como crime hediondo o furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum (art. 155, § 4º-A, do CP).",
    alternativas: [
      {
        letra: "A",
        texto: "Furto noturno simples mediante destreza ou escalada.",
        correta: false,
        explicacao_especifica: "Incorreto. O furto simples ou qualificado comum não integra o rol da Lei 8.072/90."
      },
      {
        letra: "B",
        texto: "Roubo circunstanciado pelo concurso de duas ou mais pessoas sem emprego de arma de fogo.",
        correta: false,
        explicacao_especifica: "Incorreto. Apenas o roubo com restrição da vítima, com emprego de arma de fogo (de qualquer uso) ou qualificado por lesão grave/morte é hediondo (art. 1º, II)."
      },
      {
        letra: "C",
        texto: "Furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum (art. 155, § 4º-A, do CP).",
        correta: true,
        explicacao_especifica: "Correto. O art. 1º, IX da Lei 8.072/90 incluiu expressamente o furto com emprego de explosivo no rol taxativo de hediondos."
      },
      {
        letra: "D",
        texto: "Tráfico de drogas com causa de diminuição de pena do art. 33, § 4º, da Lei nº 11.343/2006 (tráfico privilegiado).",
        correta: false,
        explicacao_especifica: "Incorreto. O tráfico privilegiado não é hediondo nem equiparado (art. 112, § 5º da LEP e jurisprudência STF/STJ)."
      },
      {
        letra: "E",
        texto: "Homicídio simples sem presença de qualificadora ou atuação em grupo de extermínio.",
        correta: false,
        explicacao_especifica: "Incorreto. O homicídio simples só é hediondo quando praticado em atividade típica de grupo de extermínio."
      }
    ]
  },

  // 015 - Crimes Hediondos: Progressão de Regime e Lei 13.964/2019
  {
    idSlug: "batch3-leg-015",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_hediondos,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Estado de Alagoas (PC-AL)",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Com a entrada em vigor do Pacote Anticrime (Lei nº 13.964/2019), o art. 112 da Lei de Execução Penal passou a disciplinar de forma exaustiva a progressão de regime prisional por percentuais, restando revogadas as frações de 2/5 e 3/5 anteriormente fixadas na Lei de Crimes Hediondos (Lei nº 8.072/1990).",
    explicacao: "GABARITO: CERTO. A Lei nº 13.964/2019 revogou tacitamente o art. 2º, § 2º, da Lei nº 8.072/1990 e estabeleceu novos lapsos percentuais para progressão de regime no art. 112 da LEP (40% para primário em hediondo sem morte; 50% em hediondo com morte sendo primário; 60% para reincidente em hediondo sem morte; e 70% para reincidente em hediondo com morte).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O Pacote Anticrime unificou a progressão no art. 112 da LEP por percentuais, superando o regramento fracionário anterior da Lei 8.072/90."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. As frações de 2/5 e 3/5 da Lei 8.072/90 foram expressamente superadas pelo sistema de percentuais do art. 112 da LEP."
      }
    ]
  },

  // 016 - Crimes Hediondos: Vedações Constitucionais e Legais
  {
    idSlug: "batch3-leg-016",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_hediondos,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado de Pernambuco (PC-PE)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em conformidade com o mandamento constitucional do art. 5º, inciso XLIII, e com os preceitos da Lei nº 8.072/1990, os crimes hediondos, a prática da tortura, o tráfico ilícito de entorpecentes e o terrorismo são insuscetíveis de:",
    explicacao: "GABARITO: A. Conforme o art. 5º, XLIII da CF/88 e o art. 2º, I e II da Lei 8.072/90, os crimes hediondos e equiparados são insuscetíveis de anistia, graça e indulto, bem como de fiança.",
    alternativas: [
      {
        letra: "A",
        texto: "Anistia, graça, indulto e fiança.",
        correta: true,
        explicacao_especifica: "Correto. Rol literal de vedações expressas no art. 5º, XLIII da CF/88 e no art. 2º da Lei 8.072/90."
      },
      {
        letra: "B",
        texto: "Liberdade provisória sem fiança e prisão domiciliar humanitária.",
        correta: false,
        explicacao_especifica: "Incorreto. O STF declarou inconstitucional a vedação genérica à liberdade provisória (HC 104.329)."
      },
      {
        letra: "C",
        texto: "Progressão de regime e recurso em liberdade.",
        correta: false,
        explicacao_especifica: "Incorreto. A progressão de regime é direito subjetivo expressamente garantido (art. 112 da LEP e STF)."
      },
      {
        letra: "D",
        texto: "Assistência jurídica integral e prescrição penal em qualquer tempo.",
        correta: false,
        explicacao_especifica: "Incorreto. Crimes hediondos são prescritíveis (salvo racismo e ação de grupos armados, previstos na CF)."
      },
      {
        letra: "E",
        texto: "Atenuantes genéricas e livramento condicional sob qualquer condição.",
        correta: false,
        explicacao_especifica: "Incorreto. Admite-se livramento condicional cumpridos mais de dois terços da pena (art. 83, V, CP), se o apenado não for reincidente específico em crimes dessa natureza."
      }
    ]
  },

  // 017 - Crimes Hediondos: Falsificação de Medicamentos e Epidemia
  {
    idSlug: "batch3-leg-017",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_hediondos,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A falsificação, corrupção, adulteração ou alteração de produto destinado a fins terapêuticos ou medicinais (art. 273, caput e § 1º, § 1º-A e § 1º-B, do Código Penal) integra expressamente o rol de crimes hediondos da Lei nº 8.072/1990.",
    explicacao: "GABARITO: CERTO. O art. 1º, inciso VII-B, da Lei nº 8.072/1990 elenca expressamente a falsificação, corrupção, adulteração ou alteração de produto destinado a fins terapêuticos ou medicinais como crime hediondo, visando tutelar a incolumidade pública e a saúde coletiva.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 1º, VII-B da Lei 8.072/90 tipifica expressamente o delito do art. 273 do CP como hediondo."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A adulteração/falsificação de medicamentos consta expressamente do rol taxativo de crimes hediondos."
      }
    ]
  },

  // 018 - Abuso de Autoridade (Lei 13.869/2019): Elemento Subjetivo Especial
  {
    idSlug: "batch3-leg-018",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "De acordo com a Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade), para que qualquer das condutas descritas nos seus tipos penais incriminadores configure crime de abuso de autoridade, é imprescindível:",
    explicacao: "GABARITO: C. O art. 1º, § 1º, da Lei nº 13.869/2019 exige a presença cumulativa do dolo e de um elemento subjetivo especial (especial fim de agir): 'com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal'. Ademais, o § 2º veda expressamente o crime de hermenêutica.",
    alternativas: [
      {
        letra: "A",
        texto: "A comprovação de prejuízo financeiro efetivo suportado pelo patrimônio da Administração Pública.",
        correta: false,
        explicacao_especifica: "Incorreto. O tipo não exige resultado naturalístico patrimonial."
      },
      {
        letra: "B",
        texto: "Que o agente público tenha agido com culpa grave ou imperícia técnica manifesta.",
        correta: false,
        explicacao_especifica: "Incorreto. Não existe modalidade culposa na Lei de Abuso de Autoridade."
      },
      {
        letra: "C",
        texto: "A finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, a atuação por mero capricho ou satisfação pessoal.",
        correta: true,
        explicacao_especifica: "Correto. Elemento subjetivo especial obrigatório nos termos do art. 1º, § 1º da Lei 13.869/2019."
      },
      {
        letra: "D",
        texto: "A prévia instauração e conclusão de processo administrativo disciplinar sancionatório contra o servidor.",
        correta: false,
        explicacao_especifica: "Incorreto. As esferas penal, administrativa e civil são independentes (art. 6º)."
      },
      {
        letra: "E",
        texto: "Que a conduta seja praticada exclusivamente por autoridade investida em cargo de direção superior ou chefia policial.",
        correta: false,
        explicacao_especifica: "Incorreto. O sujeito ativo abrange qualquer agente público, servidor ou não (art. 2º)."
      }
    ]
  },

  // 019 - Abuso de Autoridade: Sujeito Ativo e Particular em Concurso
  {
    idSlug: "batch3-leg-019",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Embora os crimes previstos na Lei nº 13.869/2019 sejam próprios de agente público, admite-se a responsabilização penal do particular em concurso de pessoas (coautoria ou participação), desde que este tenha ciência da condição funcional de agente público ostentada pelo comparsa.",
    explicacao: "GABARITO: CERTO. Por força do art. 30 do Código Penal (comunicabilidade das circunstâncias e condições de caráter pessoal elementares do crime), o particular que atua em coautoria ou participação com o agente público, tendo conhecimento de sua condição funcional e do especial fim de agir, responde pelo crime de abuso de autoridade previsto na Lei nº 13.869/2019.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 30 do CP permite que a condição de agente público se comunique ao particular que atue em concurso de pessoas sabendo dessa qualidade."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A elementar 'agente público' comunica-se ao particular que conhece essa condição e atua em concurso."
      }
    ]
  },

  // 020 - Abuso de Autoridade: Violação de Domicílio e Horário Noturno (Art. 22)
  {
    idSlug: "batch3-leg-020",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Distrito Federal (PCDF)",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Policiais civis, munidos de mandado judicial de busca e apreensão domiciliar emitido regularmente pela vara criminal, ingressaram no imóvel do investigado às 22h30, sem que houvesse situação de flagrante delito, desastre ou necessidade de prestar socorro. Considerando as regras da Lei nº 13.869/2019 e a jurisprudência constitucional sobre a inviolabilidade do domicílio, a conduta dos policiais:",
    explicacao: "GABARITO: B. O art. 22, § 1º, inciso III, da Lei nº 13.869/2019 tipifica expressamente a conduta de cumprir mandado de busca e apreensão domiciliar após as 21h ou antes das 5h (período noturno delimitado pelo legislador para fins de cumprimento de mandado).",
    alternativas: [
      {
        letra: "A",
        texto: "É atípica e lícita, pois a existência de mandado judicial autoriza o ingresso a qualquer hora do dia ou da noite.",
        correta: false,
        explicacao_especifica: "Incorreto. Mandado judicial domiciliar somente pode ser cumprido durante o dia (art. 5º, XI, CF/88 e art. 22 da Lei 13.869/19)."
      },
      {
        letra: "B",
        texto: "Configura crime de abuso de autoridade, tipificado no art. 22 da Lei nº 13.869/2019, que pune o cumprimento de mandado de busca e apreensão domiciliar após as 21h ou antes das 5h.",
        correta: true,
        explicacao_especifica: "Correto. O art. 22, § 1º, III da Lei 13.869/19 pune o cumprimento de mandado de busca e apreensão entre 21h e 5h."
      },
      {
        letra: "C",
        texto: "Configura mera falta funcional leve a ser apurada em sindicância interna, sem qualquer tipicidade criminal.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se de infração penal autônoma tipificada na Lei 13.869/19."
      },
      {
        letra: "D",
        texto: "É legítima caso a autoridade policial tenha obtido autorização prévia verbal do Ministério Público plantonista.",
        correta: false,
        explicacao_especifica: "Incorreto. O Ministério Público não tem competência para autorizar ingresso forçado noturno sem previsão constitucional."
      },
      {
        letra: "E",
        texto: "Subsume-se ao crime de invasão de domicílio qualificada do Código Penal, restando afastada a Lei Especial de Abuso de Autoridade.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 22 da Lei 13.869/19 é lei especial que prevalece sobre o tipo genérico do CP."
      }
    ]
  },

  // 021 - Abuso de Autoridade: Exposição Vexatória de Custodiado (Art. 13 e Art. 28)
  {
    idSlug: "batch3-leg-021",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Configura crime de abuso de autoridade (art. 13, inciso I, da Lei nº 13.869/2019) a conduta do agente de segurança pública que constrange o preso ou detento, mediante violência, grave ameaça ou redução de sua capacidade de resistência, a exibir-se ou ter seu corpo ou parte dele exibido à curiosidade pública.",
    explicacao: "GABARITO: CERTO. O art. 13, inciso I, da Lei nº 13.869/2019 estabelece que constranger o preso ou o detento, mediante violência, grave ameaça ou redução de sua capacidade de resistência, a exibir-se ou ter seu corpo exibido à curiosidade pública, com pena de detenção de 1 a 4 anos e multa, configura crime de abuso de autoridade.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Redação literal do tipo penal do art. 13, I da Lei 13.869/2019, que protege a dignidade e integridade da pessoa sob custódia."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A exposição vexatória coercitiva de preso é expressamente tipificada como crime de abuso de autoridade."
      }
    ]
  },

  // 022 - Abuso de Autoridade: Ação Penal e Efeitos da Condenação
  {
    idSlug: "batch3-leg-022",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado de Pernambuco (PC-PE)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No que concerne à ação penal e aos efeitos da condenação previstos na Lei nº 13.869/2019 (Abuso de Autoridade), assinale a opção correta:",
    explicacao: "GABARITO: D. De acordo com o art. 4º, parágrafo único, da Lei nº 13.869/2019, a perda do cargo, do mandato ou da função pública e a inabilitação para o exercício de cargo público por 1 a 5 anos são condicionadas à ocorrência de reincidência em crime de abuso de autoridade e não são efeitos automáticos da condenação, devendo ser motivadamente declarados na sentença pelo juiz.",
    alternativas: [
      {
        letra: "A",
        texto: "Os crimes de abuso de autoridade são de ação penal pública condicionada à representação do ofendido.",
        correta: false,
        explicacao_especifica: "Incorreto. A ação penal é pública incondicionada (art. 3º), admitindo-se ação privada subsidiária se não intentada no prazo legal."
      },
      {
        letra: "B",
        texto: "A perda do cargo público decorrente de condenação por abuso de autoridade é efeito automático da sentença penal transitada em julgado.",
        correta: false,
        explicacao_especifica: "Incorreto. A perda do cargo não é automática, exigindo reincidência e fundamentação expressa na sentença (art. 4º, parágrafo único)."
      },
      {
        letra: "C",
        texto: "A inabilitação para o exercício de cargo, mandato ou função pública tem duração perpétua e atinge qualquer função privada.",
        correta: false,
        explicacao_especifica: "Incorreto. A inabilitação é pelo prazo de 1 a 5 anos e restringe-se a cargos/funções públicas (art. 4º, II)."
      },
      {
        letra: "D",
        texto: "A perda do cargo e a inabilitação para o exercício de qualquer outra função pública são efeitos não automáticos e condicionados à reincidência específica em crime de abuso de autoridade.",
        correta: true,
        explicacao_especifica: "Correto. O art. 4º, parágrafo único da Lei 13.869/19 exige reincidência específica e motivação expressa para perda e inabilitação."
      },
      {
        letra: "E",
        texto: "A sentença penal absolutória por falta de provas vincula a esfera administrativa e impede a demissão do servidor em processo disciplinar.",
        correta: false,
        explicacao_especifica: "Incorreto. Apenas a absolvição criminal que reconheça categoricamente a inexistência do fato ou a negativa de autoria vincula a esfera administrativa (art. 8º)."
      }
    ]
  },

  // 023 - Abuso de Autoridade: Prisão Ilegal e Recusa de Soltura (Art. 9º)
  {
    idSlug: "batch3-leg-023",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Deixar de relaxar a prisão manifestamente ilegal decretada ou levada a efeito constitui conduta punível a título de abuso de autoridade pelo art. 9º, parágrafo único, inciso I, da Lei nº 13.869/2019, incorrendo na mesma pena a autoridade judiciária que, dentro de prazo razoável, deixar de deferir pedido de liberdade provisória ou de relaxamento de prisão manifestamente ilegal que lhe for apresentado.",
    explicacao: "GABARITO: CERTO. O art. 9º, parágrafo único, incisos I e II, da Lei nº 13.869/2019 equipara as condutas de deixar de relaxar prisão manifestamente ilegal e deixar de deferir liberdade provisória ou relaxamento quando manifestamente cabíveis, desde que presente o especial fim de agir.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 9º e seu parágrafo único punem a manutenção injustificada de prisão manifestamente ilegal quando configurado o especial fim de agir."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A conduta é expressamente tipificada no parágrafo único do art. 9º da Lei 13.869/19."
      }
    ]
  },

  // 024 - Organizações Criminosas (Lei 12.850/2013): Conceito Legal
  {
    idSlug: "batch3-leg-024",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.org_criminosas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Nos termos do art. 1º, § 1º, da Lei nº 12.850/2013, considera-se organização criminosa a associação de:",
    explicacao: "GABARITO: B. O art. 1º, § 1º da Lei 12.850/2013 define organização criminosa como a associação de 4 (quatro) ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter vantagem de qualquer natureza mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 (quatro) anos ou que sejam de caráter transnacional.",
    alternativas: [
      {
        letra: "A",
        texto: "3 ou mais pessoas, estruturalmente desorganizadas, para a prática de qualquer contravenção penal.",
        correta: false,
        explicacao_especifica: "Incorreto. O requisito numérico é de 4 ou mais pessoas e exige estrutura ordenada e divisão de tarefas."
      },
      {
        letra: "B",
        texto: "4 ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter, direta ou indiretamente, vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 anos ou que sejam de caráter transnacional.",
        correta: true,
        explicacao_especifica: "Correto. Definição legal expressa do art. 1º, § 1º da Lei 12.850/2013."
      },
      {
        letra: "C",
        texto: "2 ou mais pessoas com estabilidade e permanência voltadas exclusivamente à prática de crimes contra a administração pública.",
        correta: false,
        explicacao_especifica: "Incorreto. A associação de 2 pessoas pode configurar concurso de agentes ou associação para o tráfico (art. 35 da Lei de Drogas), mas não organização criminosa."
      },
      {
        letra: "D",
        texto: "5 ou mais pessoas armadas que pratiquem crimes hediondos com resultado morte.",
        correta: false,
        explicacao_especifica: "Incorreto. O número mínimo é de 4 pessoas e as penas máximas abstratas das infrações devem ser superiores a 4 anos ou de caráter transnacional."
      },
      {
        letra: "E",
        texto: "qualquer número de pessoas que atuem em concurso esporádico e eventual na prática de estelionato digital.",
        correta: false,
        explicacao_especifica: "Incorreto. A organização exige estrutura ordenada e permanência/estabilidade."
      }
    ]
  },

  // 025 - Organizações Criminosas: Colaboração Premiada e Legitimidade do Delegado (ADI 5508)
  {
    idSlug: "batch3-leg-025",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.org_criminosas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No âmbito da Lei nº 12.850/2013 e conforme julgamento do Supremo Tribunal Federal na ADI 5508, o Delegado de Polícia possui legitimidade jurídica para propor e firmar acordos de colaboração premiada na fase do inquérito policial, dependendo o negócio jurídico da posterior homologação judicial e da prévia manifestação (sem poder de veto) do Ministério Público.",
    explicacao: "GABARITO: CERTO. O STF, ao julgar a ADI 5508/DF, declarou a constitucionalidade da legitimidade do Delegado de Polícia para celebrar acordos de colaboração premiada na fase de inquérito policial (art. 4º, § 6º da Lei 12.850/2013), com manifestação prévia do Ministério Público (sem caráter vinculante/veto quanto à homologação pelo magistrado).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF pacificou na ADI 5508 a plena legitimidade do Delegado de Polícia para celebrar acordos de colaboração premiada na fase de inquérito."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A legitimidade da autoridade policial foi expressamente declarada constitucional pelo Plenário do STF."
      }
    ]
  },

  // 026 - Organizações Criminosas: Meios de Obtenção de Prova (Ação Controlada vs Infiltração)
  {
    idSlug: "batch3-leg-026",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.org_criminosas,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em relação aos meios de obtenção de prova disciplinados na Lei nº 12.850/2013, assinale a alternativa correta quanto à ação controlada e à infiltração de agentes:",
    explicacao: "GABARITO: A. Conforme o art. 8º, § 1º da Lei nº 12.850/2013, a ação controlada (retardamento da intervenção policial) independe de prévia autorização judicial, exigindo apenas comunicação prévia ao juiz competente que, se for o caso, estabelecerá os seus limites. Já a infiltração de policiais (art. 10) depende de prévia e motivada autorização judicial.",
    alternativas: [
      {
        letra: "A",
        texto: "A ação controlada consiste no retardamento da intervenção policial e exige prévia comunicação ao juiz competente, não dependendo de autorização judicial prévia, ao passo que a infiltração de agentes exige indispensável autorização judicial motivada.",
        correta: true,
        explicacao_especifica: "Correto. O art. 8º, § 1º exige comunicação prévia para ação controlada, enquanto o art. 10 exige autorização judicial expressa para infiltração."
      },
      {
        letra: "B",
        texto: "A infiltração policial prescinde de ordem judicial, bastando portaria fundamentada subscrita pelo Delegado Geral de Polícia.",
        correta: false,
        explicacao_especifica: "Incorreto. A infiltração é ato submetido à estrita reserva de jurisdição (art. 10)."
      },
      {
        letra: "C",
        texto: "O prazo máximo da infiltração de policiais presenciais é improrrogável e fixado em 15 dias corridos.",
        correta: false,
        explicacao_especifica: "Incorreto. O prazo é de até 6 meses, prorrogável por períodos sucessivos comprovada a necessidade (art. 10, § 3º)."
      },
      {
        letra: "D",
        texto: "A ação controlada pode ser executada por qualquer cidadão que atue como informante anônimo da polícia.",
        correta: false,
        explicacao_especifica: "Incorreto. A ação controlada é prerrogativa estrita dos órgãos de segurança pública."
      },
      {
        letra: "E",
        texto: "O juiz que autorizar a infiltração policial participará ativamente da execução operacional dos atos investigativos ao lado dos policiais.",
        correta: false,
        explicacao_especifica: "Incorreto. A atuação judicial é estritamente jurisdicional, sob pena de violação ao sistema acusatório."
      }
    ]
  },

  // 027 - Organizações Criminosas: Crime de Embaraço à Investigação (Art. 2º, § 1º)
  {
    idSlug: "batch3-leg-027",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.org_criminosas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de embaraçar ou impedir a investigação de infração penal que envolva organização criminosa (art. 2º, § 1º, da Lei nº 12.850/2013) tutela a administração da justiça e consuma-se tanto na fase do inquérito policial quanto durante a instrução da ação penal em juízo.",
    explicacao: "GABARITO: CERTO. A jurisprudência consolidada do STF e do STJ estabelece que o termo 'investigação' contido no art. 2º, § 1º, da Lei 12.850/2013 deve ser interpretado em sentido amplo (fase preliminar investigativa e fase judicial de instrução), de modo que obstaculizar os atos probatórios em juízo ou na delegacia configura o delito.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STJ e o STF pacificaram que o tipo penal abrange embaraços tanto ao inquérito policial quanto à instrução criminal judicial."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A proteção abrange tanto a investigação preliminar policial quanto a fase processual penal."
      }
    ]
  },

  // 028 - Organizações Criminosas: Infiltração Policial Virtual
  {
    idSlug: "batch3-leg-028",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.org_criminosas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre a infiltração de agentes de polícia na internet (infiltração virtual), introduzida na Lei nº 12.850/2013 pelos arts. 10-A a 10-D, assinale a opção correta:",
    explicacao: "GABARITO: C. O art. 10-B da Lei nº 12.850/2013 prevê que a infiltração virtual será autorizada pelo prazo de até 6 (seis) meses, sem prejuízo de eventuais renovações, desde que o total não exceda a 720 (setecentos e vinte) dias e reste comprovada a sua necessidade.",
    alternativas: [
      {
        letra: "A",
        texto: "A infiltração virtual dispensa ordem judicial se o policial utilizar perfil de rede social cadastrado com seu nome real.",
        correta: false,
        explicacao_especifica: "Incorreto. A infiltração virtual exige estrita e prévia autorização judicial (art. 10-A)."
      },
      {
        letra: "B",
        texto: "O agente policial infiltrado virtualmente pode provocar e induzir a prática de crimes pelos investigados para obter a prisão em flagrante (agente provocador).",
        correta: false,
        explicacao_especifica: "Incorreto. É vedado o induzimento ou provocação que crie o crime do nada (Súmula 145/STF e art. 10-A, § 2º)."
      },
      {
        letra: "C",
        texto: "A infiltração virtual será autorizada pelo prazo de até 6 meses, admitidas renovações motivadas até o limite máximo total de 720 dias.",
        correta: true,
        explicacao_especifica: "Correto. Regra expressa do art. 10-B da Lei 12.850/2013 para infiltração virtual."
      },
      {
        letra: "D",
        texto: "A infiltração virtual somente é admitida para a apuração de crimes contra a honra e desacato praticados contra servidores públicos.",
        correta: false,
        explicacao_especifica: "Incorreto. Destina-se à investigação de crimes executados por organizações criminosas."
      },
      {
        letra: "E",
        texto: "Os relatórios da infiltração virtual são dispensados caso o policial obtenha prints de conversas públicas.",
        correta: false,
        explicacao_especifica: "Incorreto. É obrigatória a elaboração de relatório circunstanciado e juntada aos autos sob custódia legal (art. 10-C)."
      }
    ]
  },

  // 029 - Lavagem de Dinheiro (Lei 9.613/1998): Autonomia da Infração
  {
    idSlug: "batch3-leg-029",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lavagem_dinheiro,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de lavagem de dinheiro (Lei nº 9.613/1998) ostenta autonomia dogmática e processual em relação à infração penal antecedente, sendo a ação penal de lavagem punível ainda que o autor do delito prévio seja desconhecido ou isento de pena, ou mesmo que esteja extinta a punibilidade da infração antecedente.",
    explicacao: "GABARITO: CERTO. Nos termos do art. 2º, inciso II, e § 1º, da Lei nº 9.613/1998, o processo e julgamento dos crimes de lavagem de capitais independem do processo e julgamento da infração penal antecedente, sendo a punibilidade autônoma ainda que o autor seja desconhecido, isento de pena ou extinta a punibilidade da infração antecedente.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 2º, II da Lei 9.613/98 consagra a autonomia do delito de lavagem de capitais frente à infração antecedente."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A lavagem de dinheiro é crime acessório/derivado na origem, mas 100% autônomo na persecução e punibilidade."
      }
    ]
  },

  // 030 - Lavagem de Dinheiro: Fases da Lavagem de Capitais
  {
    idSlug: "batch3-leg-030",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lavagem_dinheiro,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A doutrina especializada e os órgãos internacionais de combate à lavagem de dinheiro dividem o processo clássico de branqueamento de capitais em três etapas sucessivas. A fase em que os recursos ilícitos são reincorporados formalmente à economia legítima, aparentando ter origem lícita mediante investimentos imobiliários, comerciais ou societários, é denominada:",
    explicacao: "GABARITO: B. As três fases clássicas da lavagem de dinheiro são: 1ª) Colocação (Placement) - inserção do dinheiro sujo no sistema; 2ª) Ocultação/Dissimulação/Estratificação (Layering) - realização de sucessivas transações para distanciar o dinheiro de sua origem criminosa; e 3ª) Integração (Integration) - reincorporação dos ativos ao sistema econômico formal com aparência de legalidade.",
    alternativas: [
      {
        letra: "A",
        texto: "Colocação (Placement).",
        correta: false,
        explicacao_especifica: "Incorreto. Colocação é a primeira fase, em que o capital ilícito é introduzido no sistema financeiro."
      },
      {
        letra: "B",
        texto: "Integração (Integration).",
        correta: true,
        explicacao_especifica: "Correto. Na fase de integração, os valores dissimulados retornam ao mercado com aparência de licitude definitiva."
      },
      {
        letra: "C",
        texto: "Estratificação ou Ocultação (Layering).",
        correta: false,
        explicacao_especifica: "Incorreto. Estratificação é a fase intermediária de movimentações complexas para quebrar a trilha documental."
      },
      {
        letra: "D",
        texto: "Arrecadação e custódia preliminar.",
        correta: false,
        explicacao_especifica: "Incorreto. Não corresponde a fase doutrinária da lavagem de capitais."
      },
      {
        letra: "E",
        texto: "Perdimento administrativo sancionador.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se de sanção estatal e não etapa do branqueamento."
      }
    ]
  },

  // 031 - Lavagem de Dinheiro: Causas de Aumento e Colaboração Premiada
  {
    idSlug: "batch3-leg-031",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lavagem_dinheiro,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na Lei nº 9.613/1998, a pena do crime de lavagem de dinheiro será aumentada de 1/3 a 2/3 se os crimes forem cometidos de forma reiterada ou por intermédio de organização criminosa.",
    explicacao: "GABARITO: CERTO. O art. 1º, § 4º, da Lei nº 9.613/1998 (com redação dada pela Lei 12.683/2012) estabelece expressamente: 'A pena será aumentada de um a dois terços, se os crimes definidos nesta Lei forem cometidos de forma reiterada ou por intermédio de organização criminosa'.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Redação literal do art. 1º, § 4º da Lei 9.613/1998."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A reiteração e a atuação por organização criminosa são causas legais de aumento de pena de 1/3 a 2/3."
      }
    ]
  },

  // 032 - Lavagem de Dinheiro: Medidas Assecuratórias e Alienação Antecipada
  {
    idSlug: "batch3-leg-032",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lavagem_dinheiro,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Durante investigação policial de vultoso esquema de lavagem de dinheiro, a autoridade policial representou pela apreensão de frota de veículos importados de luxo pertencentes aos investigados. A respeito das medidas assecuratórias e da alienação antecipada de bens na Lei nº 9.613/1998, assinale a alternativa correta:",
    explicacao: "GABARITO: D. O art. 4º-A da Lei nº 9.613/1998 autoriza a alienação antecipada para preservação do valor dos bens sempre que estiverem sujeitos a qualquer grau de deterioração ou depreciação, ou quando houver dificuldade para sua manutenção, devendo o valor arrecadado ser depositado em conta judicial remunerada.",
    alternativas: [
      {
        letra: "A",
        texto: "A alienação antecipada de bens móveis apreendidos é vedada pela Constituição Federal antes do trânsito em julgado da condenação.",
        correta: false,
        explicacao_especifica: "Incorreto. A alienação antecipada é expressamente admitida para evitar perecimento e desvalorização (art. 4º-A da Lei 9.613/98)."
      },
      {
        letra: "B",
        texto: "A decretação do sequestro de bens decorrentes da lavagem somente pode ser promovida mediante requerimento exclusivo do Ministério Público, vedada representação do Delegado.",
        correta: false,
        explicacao_especifica: "Incorreto. O art. 4º autoriza a representação fundamentada da autoridade policial."
      },
      {
        letra: "C",
        texto: "Os valores arrecadados com a alienação antecipada devem ser imediatamente incorporados ao orçamento do Fundo Penitenciário Nacional sem direito a restituição.",
        correta: false,
        explicacao_especifica: "Incorreto. Os valores permanecem custodiados em conta judicial vinculada ao juízo até a decisão final."
      },
      {
        letra: "D",
        texto: "A alienação antecipada poderá ser decretada pelo juiz para preservar o valor dos bens sujeitos a deterioração ou depreciação, ou quando houver dificuldade para sua manutenção, sendo o valor apurado depositado em conta judicial.",
        correta: true,
        explicacao_especifica: "Correto. Regra expressa do art. 4º-A da Lei 9.613/1998."
      },
      {
        letra: "E",
        texto: "O juiz é obrigado a nomear o próprio investigado como fiel depositário exclusivo dos veículos de luxo apreendidos.",
        correta: false,
        explicacao_especifica: "Incorreto. O juiz pode determinar a custódia em pátio oficial ou alienação antecipada."
      }
    ]
  },

  // 033 - Lei de Tortura (Lei 9.455/1997): Espécies Típicas e Requisitos
  {
    idSlug: "batch3-leg-033",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.tortura_interceptacao,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No crime de tortura-prova (art. 1º, inciso I, alínea 'a', da Lei nº 9.455/1997), a conduta de constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental com o fim de obter informação, declaração ou confissão da vítima ou de terceira pessoa, constitui crime comum, que pode ser praticado por qualquer pessoa, não se exigindo que o agente seja servidor público ou detenha a vítima sob sua guarda, poder ou autoridade.",
    explicacao: "GABARITO: CERTO. Apenas a tortura-castigo (art. 1º, inciso II) é crime próprio que exige relação de guarda, poder ou autoridade. As figuras de tortura-prova (art. 1º, I, 'a'), tortura para prática de crime (art. 1º, I, 'b') e tortura discriminatória/racial/religiosa (art. 1º, I, 'c') são crimes comuns, podendo ser praticados por qualquer pessoa, agente público ou particular.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O crime do art. 1º, I, 'a' (tortura-prova) é comum e pode ser perpetrado por qualquer indivíduo com aquele fim específico."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A exigência de guarda/poder/autoridade restringe-se à modalidade de tortura-castigo do art. 1º, II."
      }
    ]
  },

  // 034 - Lei de Tortura: Tortura por Omissão e Efeitos da Condenação
  {
    idSlug: "batch3-leg-034",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.tortura_interceptacao,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil do Estado de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre o crime de tortura por omissão (art. 1º, § 2º, da Lei nº 9.455/1997) e os efeitos da condenação para o agente público condenado por crime de tortura, assinale a alternativa correta:",
    explicacao: "GABARITO: E. Conforme a Lei nº 9.455/1997: 1) A tortura por omissão ('aquele que se omite em face dessas condutas, quando tinha o dever de evitá-las ou apurá-las') é punida com detenção de 1 a 4 anos (art. 1º, § 2º); 2) A condenação por tortura acarreta a perda automática do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada (art. 1º, § 5º), sendo efeito automático da condenação (jurisprudência consolidada STJ/STF).",
    alternativas: [
      {
        letra: "A",
        texto: "A tortura por omissão é punida com a mesma pena privativa de liberdade cominada à tortura comissiva (reclusão de 2 a 8 anos).",
        correta: false,
        explicacao_especifica: "Incorreto. A tortura por omissão tem pena abrandada de detenção de 1 a 4 anos (art. 1º, § 2º)."
      },
      {
        letra: "B",
        texto: "A perda do cargo público pelo crime de tortura não é automática, dependendo de expressa fundamentação judicial na sentença.",
        correta: false,
        explicacao_especifica: "Incorreto. Diferente do abuso de autoridade, no crime de tortura a perda do cargo é efeito automático (art. 1º, § 5º da Lei 9.455/97 e STJ)."
      },
      {
        letra: "C",
        texto: "O prazo de interdição para o exercício de cargo público do agente condenado por tortura é fixado compulsoriamente em 30 dias.",
        correta: false,
        explicacao_especifica: "Incorreto. O prazo de interdição é pelo dobro do prazo da pena aplicada (art. 1º, § 5º)."
      },
      {
        letra: "D",
        texto: "A tortura por omissão constitui crime próprio exclusivo de policiais militares no exercício de policiamento ostensivo.",
        correta: false,
        explicacao_especifica: "Incorreto. Aplica-se a qualquer pessoa que ostente o dever jurídico de evitar ou apurar a tortura."
      },
      {
        letra: "E",
        texto: "Aquele que se omite perante condutas de tortura, quando tinha o dever de evitá-las ou apurá-las, incorre na pena de detenção de 1 a 4 anos, e a condenação de servidor público por tortura acarreta a perda automática do cargo e interdição pelo dobro do prazo da pena aplicada.",
        correta: true,
        explicacao_especifica: "Correto. Síntese exata dos preceitos do art. 1º, § 2º e § 5º da Lei 9.455/1997."
      }
    ]
  },

  // 035 - Interceptação Telefônica (Lei 9.296/1996): Requisitos e Prazo
  {
    idSlug: "batch3-leg-035",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.tortura_interceptacao,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Nos termos da Lei nº 9.296/1996 e da jurisprudência consolidada do Supremo Tribunal Federal e do Superior Tribunal de Justiça, a interceptação telefônica para fins de investigação criminal pode ser autorizada pelo prazo inicial de até 15 dias, admitindo-se sucessivas renovações quando comprovada a indispensabilidade do meio de prova e a complexidade dos fatos investigados.",
    explicacao: "GABARITO: CERTO. O art. 5º da Lei nº 9.296/1996 prevê o prazo de até 15 dias para a interceptação, renovável por igual período. O STF e o STJ pacificaram o entendimento de que são lícitas sucessivas prorrogações da interceptação telefônica, desde que devidamente motivadas e justificadas pela complexidade das investigações criminais.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O prazo legal é de até 15 dias, admitindo-se sucessivas prorrogações justificadas conforme jurisprudência do STF/STJ."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A jurisprudência dos Tribunais Superiores admite renovações sucessivas quando comprovada a indispensabilidade probatória."
      }
    ]
  }
];
