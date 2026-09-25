export function getQuestionsDataPart3() {
  const dConst = "TAXONOMIA.disciplinas.constitucional";
  const aOrgEst = "TAXONOMIA.assuntos.organizacao_estado";
  const aPExec = "TAXONOMIA.assuntos.poder_executivo";
  const aPLeg = "TAXONOMIA.assuntos.poder_legislativo";
  const aPJud = "TAXONOMIA.assuntos.poder_judiciario";
  const aCtrlConst = "TAXONOMIA.assuntos.controle_const";

  return [
    {
      idSlug: "batch3-const-041",
      disciplina_id: dConst,
      assunto_id: aOrgEst,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Os Territórios Federais integram a União e sua criação, transformação em Estado ou reintegração ao Estado de origem serão reguladas em lei complementar federal, podendo os Territórios ser divididos em Municípios, aos quais se aplicará, no que couber, a disciplina constitucional relativa aos Municípios dos Estados.",
      explicacao: "GABARITO: CERTO. Art. 18, § 2º ('Os Territórios Federais integram a União, e sua criação, transformação em Estado ou reintegração ao Estado de origem serão reguladas em lei complementar') c/c art. 33, caput da Constituição Federal de 1988.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Reprodução do art. 18, § 2º e art. 33 da Carta da República."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. Os Territórios Federais possuem natureza de autarquias territoriais integrantes da União e podem ser divididos em Municípios."
        }
      ]
    },
    {
      idSlug: "batch3-const-042",
      disciplina_id: dConst,
      assunto_id: aOrgEst,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Acerca da repartição de bens públicos entre a União e os Estados-membros (arts. 20 e 26 da CF/88), assinale a afirmativa correta:",
      explicacao: "GABARITO: D. Art. 20, III da CF: são bens da União 'os lagos, rios e quaisquer correntes de água em terrenos do seu domínio, ou que banhem mais de um Estado, sirvam de limites com outros países, ou se estendam a território estrangeiro ou dele provenham'. Em contrapartida, as águas superficiais ou subterrâneas que nasçam e deságuem inteiramente no território estadual são bens do respectivo Estado (art. 26, I).",
      alternativas: [
        {
          letra: "A",
          texto: "Todos os rios e cursos de água existentes no território nacional constituem bens privativos dos Municípios onde se localizam as suas nascentes.",
          correta: false,
          explicacao_especifica: "Incorreta. A CF não confere domínio de rios ou águas fluviais aos Municípios."
        },
        {
          letra: "B",
          texto: "Os recursos minerais, inclusive os do subsolo, pertencem ao proprietário do solo particular onde forem encontrados.",
          correta: false,
          explicacao_especifica: "Incorreta. Os recursos minerais, inclusive os do subsolo, são bens da União (art. 20, IX c/c art. 176 da CF)."
        },
        {
          letra: "C",
          texto: "O mar territorial, a plataforma continental e a zona econômica exclusiva pertencem em condomínio aos Estados litorâneos.",
          correta: false,
          explicacao_especifica: "Incorreta. São bens exclusivos da União (art. 20, V e VI da CF)."
        },
        {
          letra: "D",
          texto: "Os rios e lagos que banhem mais de um Estado-membro ou façam limite com país estrangeiro constituem bens da União, pertencendo aos Estados as águas superficiais que nasçam e deságuem em seus territórios.",
          correta: true,
          explicacao_especifica: "Correta. Art. 20, III c/c art. 26, I da Constituição Federal."
        },
        {
          letra: "E",
          texto: "As terras tradicionalmente ocupadas pelos índios são bens dominicais dos Estados federados em que se localizam as aldeias.",
          correta: false,
          explicacao_especifica: "Incorreta. As terras tradicionalmente ocupadas pelos índios são bens da União (art. 20, XI da CF)."
        }
      ]
    },

    // -------------------------------------------------------------
    // TOPIC 4: PODER EXECUTIVO - 5 questões (043 a 047)
    // -------------------------------------------------------------
    {
      idSlug: "batch3-const-043",
      disciplina_id: dConst,
      assunto_id: aPExec,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil de Goiás (PC-GO)",
      cargo_nome: "Escrivão de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "O Presidente da República poderá delegar aos Ministros de Estado, ao Procurador-Geral da República ou ao Advogado-Geral da União a atribuição de conceder indulto e comutar penas, bem como a de prover cargos públicos federais, na forma da lei.",
      explicacao: "GABARITO: CERTO. Art. 84, parágrafo único, da Constituição Federal de 1988: 'O Presidente da República poderá delegar as atribuições mencionadas nos incisos VI, XII e XXV, primeira parte, aos Ministros de Estado, ao Procurador-Geral da República ou ao Advogado-Geral da União, que observarão os limites traçados nas respectivas delegações'. O inciso XII trata de indulto e comutação de penas, e o inciso XXV (1ª parte) de provimento de cargos.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Trata-se da expressa autorização de delegação contida no art. 84, parágrafo único da CF."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. A concessão de indulto (inciso XII) e o provimento de cargos (inciso XXV, primeira parte) são expressamente delegáveis."
        }
      ]
    },
    {
      idSlug: "batch3-const-044",
      disciplina_id: dConst,
      assunto_id: aPExec,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Nos termos dos artigos 85 e 86 da Constituição Federal, admitida a acusação contra o Presidente da República por dois terços da Câmara dos Deputados, este será submetido a julgamento:",
      explicacao: "GABARITO: C. Art. 86, caput: 'Admitida a acusação contra o Presidente da República, por dois terços da Câmara dos Deputados, será ele submetido a julgamento perante o Supremo Tribunal Federal, nas infrações penais comuns, ou perante o Senado Federal, nos crimes de responsabilidade'.",
      alternativas: [
        {
          letra: "A",
          texto: "Perante o Superior Tribunal de Justiça nas infrações penais comuns e perante a Câmara dos Deputados nos crimes de responsabilidade.",
          correta: false,
          explicacao_especifica: "Incorreta. O STJ julga Governadores de Estado (art. 105, I, 'a'); a Câmara apenas admite a acusação contra o Presidente."
        },
        {
          letra: "B",
          texto: "Perante o Congresso Nacional em sessão conjunta para qualquer tipo de delito.",
          correta: false,
          explicacao_especifica: "Incorreta. A CF reparte a competência entre STF e Senado Federal."
        },
        {
          letra: "C",
          texto: "Perante o Supremo Tribunal Federal, nas infrações penais comuns, ou perante o Senado Federal, nos crimes de responsabilidade.",
          correta: true,
          explicacao_especifica: "Correta. Regra expressa do art. 86, caput, da Constituição Federal."
        },
        {
          letra: "D",
          texto: "Exclusivamente perante o Tribunal Penal Internacional quando envolver desvio de verbas de segurança pública.",
          correta: false,
          explicacao_especifica: "Incorreta. A jurisdição ordinária de crimes comuns do Presidente cabe ao STF."
        },
        {
          letra: "E",
          texto: "Perante o Conselho da República, que proferirá decisão de mérito definitiva com eficácia vinculante.",
          correta: false,
          explicacao_especifica: "Incorreta. O Conselho da República é órgão superior de consulta, não detendo atribuição jurisdicional."
        }
      ]
    },
    {
      idSlug: "batch3-const-045",
      disciplina_id: dConst,
      assunto_id: aPExec,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "O Presidente da República, na vigência de seu mandato, não pode ser responsabilizado por atos estranhos ao exercício de suas funções, bem como não está sujeito à prisão nas infrações comuns enquanto não sobrevier sentença penal condenatória transitada em julgado.",
      explicacao: "GABARITO: CERTO. Art. 86, §§ 3º e 4º da CF/88: '§ 3º Enquanto não sobrevier sentença condenatória, nas infrações comuns, o Presidente da República não estará sujeito a prisão. § 4º O Presidente da República, na vigência de seu mandato, não pode ser responsabilizado por atos estranhos ao exercício de suas funções' (imunidade prisional e cláusula de irresponsabilidade penal relativa).",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Síntese exata dos §§ 3º e 4º do artigo 86 da Carta Magna."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O Presidente goza de imunidade formal contra prisões cautelares e imunidade penal temporária por atos estranhos ao mandato."
        }
      ]
    },
    {
      idSlug: "batch3-const-046",
      disciplina_id: dConst,
      assunto_id: aPExec,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Em caso de relevância e urgência, o Presidente da República poderá adotar medidas provisórias com força de lei. Entretanto, o art. 62, § 1º, da Constituição Federal estabelece vedações materiais explícitas à sua edição, sendo vedada medida provisória sobre:",
      explicacao: "GABARITO: B. O art. 62, § 1º, I, da CF veda expressamente medida provisória sobre: 'a) nacionalidade, cidadania, direitos políticos, partidos políticos e direito eleitoral; b) direito penal, processual penal e processual civil; c) organização do Poder Judiciário e do Ministério Público, a carreira e a garantia de seus membros; d) planos plurianuais, diretrizes orçamentárias, orçamento e créditos adicionais e suplementares...'.",
      alternativas: [
        {
          letra: "A",
          texto: "Fixação de diretrizes da política nacional de proteção à fauna silvestre.",
          correta: false,
          explicacao_especifica: "Incorreta. Matéria ambiental ordinária admite MP, desde que não reservada a lei complementar."
        },
        {
          letra: "B",
          texto: "Direito penal, direito processual penal e direito processual civil, bem como organização do Poder Judiciário e do Ministério Público.",
          correta: true,
          explicacao_especifica: "Correta. Vedações expressas constantes no art. 62, § 1º, I, 'b' e 'c' da Carta Magna."
        },
        {
          letra: "C",
          texto: "Instituição ou aumento de taxas cobradas por serviços de segurança viária municipal.",
          correta: false,
          explicacao_especifica: "Incorreta. Matéria tributária geral é passível de MP, ressalvadas as vedações específicas de impostos reservados a LC."
        },
        {
          letra: "D",
          texto: "Abertura de crédito extraordinário para atender a despesas imprevisíveis e urgentes decorrentes de calamidade pública.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 62, § 1º, I, 'd' c/c art. 167, § 3º autoriza expressamente crédito extraordinário por MP para calamidades e guerra."
        },
        {
          letra: "E",
          texto: "Reorganização das atribuições administrativas internas do Ministério da Justiça sem aumento de despesas.",
          correta: false,
          explicacao_especifica: "Incorreta. O Presidente pode dispor inclusive por decreto autônomo (art. 84, VI, 'a') ou medida provisória sobre administração pública."
        }
      ]
    },
    {
      idSlug: "batch3-const-047",
      disciplina_id: dConst,
      assunto_id: aPExec,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil do Rio Grande do Norte (PC-RN)",
      cargo_nome: "Agente de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Compete privativamente ao Presidente da República dispor, mediante decreto autônomo, sobre a organização e o funcionamento da administração federal, desde que não implique aumento de despesa nem criação ou extinção de órgãos públicos, bem como sobre a extinção de funções ou cargos públicos, quando vagos.",
      explicacao: "GABARITO: CERTO. Art. 84, VI, 'a' e 'b', da Constituição Federal de 1988 (com redação dada pela EC 32/2001). Essa hipótese configura decreto autônomo, em que o Chefe do Executivo inova originariamente na ordem jurídica sem prévia lei em sentido estrito.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Literalidade do art. 84, inciso VI, alíneas 'a' e 'b' da Constituição Federal."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O decreto autônomo é plenamente autorizado pela CF nos estritos limites do art. 84, VI."
        }
      ]
    },

    // -------------------------------------------------------------
    // TOPIC 5: PODER LEGISLATIVO - 5 questões (048 a 052)
    // -------------------------------------------------------------
    {
      idSlug: "batch3-const-048",
      disciplina_id: dConst,
      assunto_id: aPLeg,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: "As Comissões Parlamentares de Inquérito (CPIs), criadas pela Câmara dos Deputados e pelo Senado Federal, em conjunto ou separadamente, possuem poderes de investigação próprios das autoridades judiciais (art. 58, § 3º, da CF/88). No exercício de suas prerrogativas, a CPI pode determinar diretamente:",
      explicacao: "GABARITO: C. As CPIs podem, por autoridade própria: quebrar sigilo bancário, fiscal e telemático (registros de ligações/dados). Todavia, submetem-se à cláusula de reserva de jurisdição, NÃO podendo: decretar interceptação telefônica (escuta), busca e apreensão domiciliar, prisão preventiva/temporária (salvo flagrante delito) nem anular atos do Executivo.",
      alternativas: [
        {
          letra: "A",
          texto: "A interceptação das comunicações telefônicas (escuta das conversas) de investigados em inquérito parlamentar.",
          correta: false,
          explicacao_especifica: "Incorreta. A interceptação telefônica está sujeita à reserva absoluta de jurisdição judicial (art. 5º, XII da CF)."
        },
        {
          letra: "B",
          texto: "A busca e apreensão domiciliar no período noturno sem a presença de autoridade judicial.",
          correta: false,
          explicacao_especifica: "Incorreta. A busca domiciliar submete-se à cláusula de reserva de jurisdição (art. 5º, XI da CF)."
        },
        {
          letra: "C",
          texto: "A quebra do sigilo fiscal, bancário e de dados telefônicos (registros de chamadas efetuadas e recebidas) de pessoas investigadas, mediante decisão fundamentada.",
          correta: true,
          explicacao_especifica: "Correta. Jurisprudência pacífica do STF reconhecendo poderes instrutórios diretos de quebra de sigilo bancário/fiscal/telemático à CPI."
        },
        {
          letra: "D",
          texto: "A decretação da prisão preventiva de testemunha que se recusar a depor em sessão pública.",
          correta: false,
          explicacao_especifica: "Incorreta. CPI não pode decretar prisão preventiva ou temporária, cabendo-lhe apenas prender em flagrante delito."
        },
        {
          letra: "E",
          texto: "A indisponibilidade cautelar de bens e o sequestro de imóveis de empresas investigadas.",
          correta: false,
          explicacao_especifica: "Incorreta. Medidas cautelares reais (sequestro, indisponibilidade) exigem provimento judicial."
        }
      ]
    },
    {
      idSlug: "batch3-const-049",
      disciplina_id: dConst,
      assunto_id: aPLeg,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Os Deputados e Senadores são invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos. Conforme jurisprudência do STF, as declarações proferidas fora do recinto do Congresso Nacional exigem a demonstração do nexo de pertinência direta entre as manifestações e o desempenho do mandato representativo.",
      explicacao: "GABARITO: CERTO. Art. 53, caput da CF/88. O STF pacificou que, enquanto as manifestações proferidas no recinto parlamentar gozam de presunção absoluta de conexão com o mandato, as palavras emitidas em entrevistas ou redes sociais fora do parlamento exigem vínculo direto e funcional com o exercício do mandato legislativo para atrair a imunidade material.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Reflete a doutrina e a jurisprudência pacífica do Supremo Tribunal Federal sobre o art. 53, caput da CF."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. Fora do Parlamento, a imunidade material parlamentar exige nexo de causalidade funcional com o mandato."
        }
      ]
    },
    {
      idSlug: "batch3-const-050",
      disciplina_id: dConst,
      assunto_id: aPLeg,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Em relação à imunidade formal dos membros do Congresso Nacional quanto à prisão (art. 53, § 2º, da Constituição Federal), assinale a alternativa correta:",
      explicacao: "GABARITO: A. Art. 53, § 2º da CF: 'Desde a expedição do diploma, os membros do Congresso Nacional não poderão ser presos, salvo em flagrante de crime inafiançável. Nesse caso, os autos serão remetidos dentro de vinte e quatro horas à Casa respectiva, para que, pelo voto da maioria de seus membros, resolva sobre a prisão'.",
      alternativas: [
        {
          letra: "A",
          texto: "Desde a expedição do diploma, parlamentares federais não podem ser presos, salvo em flagrante de crime inafiançável, caso em que os autos serão remetidos em vinte e quatro horas à respectiva Casa para que a maioria de seus membros resolva sobre a prisão.",
          correta: true,
          explicacao_especifica: "Correta. Reprodução literal do art. 53, § 2º da Constituição Federal."
        },
        {
          letra: "B",
          texto: "A imunidade formal contra a prisão aplica-se aos Deputados e Senadores desde o momento do registro da candidatura na Justiça Eleitoral.",
          correta: false,
          explicacao_especifica: "Incorreta. O marco temporal constitucional é a expedição do diploma, não o registro da candidatura."
        },
        {
          letra: "C",
          texto: "Parlamentares federais podem sofrer prisão preventiva decretada por juiz de primeira instância caso haja clamor público.",
          correta: false,
          explicacao_especifica: "Incorreta. Além de possuírem foro no STF, parlamentares não podem sofrer prisão cautelar fora do flagrante de crime inafiançável."
        },
        {
          letra: "D",
          texto: "A deliberação da Casa Legislativa sobre a manutenção da prisão do parlamentar exige quórum qualificado de dois terços dos membros.",
          correta: false,
          explicacao_especifica: "Incorreta. A decisão é tomada pelo voto da maioria absoluta dos membros da respectiva Casa."
        },
        {
          letra: "E",
          texto: "A imunidade formal não se estende aos Deputados Estaduais em nenhuma hipótese.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 27, § 1º da CF estende expressamente as imunidades aos Deputados Estaduais."
        }
      ]
    },
    {
      idSlug: "batch3-const-051",
      disciplina_id: dConst,
      assunto_id: aPLeg,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Delegado de Polícia Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "Não será objeto de deliberação a proposta de emenda à Constituição tendente a abolir a forma federativa de Estado, o voto direto, secreto, universal e periódico, a separação dos Poderes e os direitos e garantias individuais, configurando tais matérias cláusulas pétreas expressas insuscetíveis de supressão pelo constituinte derivado reformador.",
      explicacao: "GABARITO: CERTO. Art. 60, § 4º, incisos I a IV, da Constituição Federal de 1988. Trata-se do rol das limitações materiais explícitas ao poder de reforma constitucional (cláusulas pétreas).",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Literalidade do art. 60, § 4º da Constituição Federal de 1988."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O texto enumera exatamente as quatro cláusulas pétreas expressas previstas na CF/88."
        }
      ]
    },
    {
      idSlug: "batch3-const-052",
      disciplina_id: dConst,
      assunto_id: aPLeg,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "No que tange à fiscalização contábil, financeira e orçamentária e às atribuições do Tribunal de Contas da União (art. 71 da CF/88), assinale a afirmativa correta:",
      explicacao: "GABARITO: B. Nos termos do art. 71, I da CF, o TCU aprecia as contas anuais do Presidente emitindo parecer prévio (que é julgado pelo Congresso Nacional). Já nos termos do inciso II, o TCU julga as contas dos demais administradores e responsáveis por dinheiros, bens e valores públicos da administração direta e indireta. As decisões que imputam débito ou multa têm eficácia de título executivo (art. 71, § 3º).",
      alternativas: [
        {
          letra: "A",
          texto: "O Tribunal de Contas da União julga definitivamente as contas anuais prestadas pelo Presidente da República, aplicando-lhe sanções imediatas de perda do cargo.",
          correta: false,
          explicacao_especifica: "Incorreta. O TCU emite apenas parecer prévio; o julgamento político das contas do Presidente cabe ao Congresso Nacional (art. 71, I c/c art. 49, IX)."
        },
        {
          letra: "B",
          texto: "Compete ao TCU julgar as contas dos administradores e demais responsáveis por recursos públicos federais, tendo suas decisões de que resulte imputação de débito ou multa eficácia de título executivo.",
          correta: true,
          explicacao_especifica: "Correta. Art. 71, II c/c § 3º da Constituição Federal."
        },
        {
          letra: "C",
          texto: "O TCU é órgão integrante do Poder Judiciário Federal, subordinado hierarquicamente ao Supremo Tribunal Federal.",
          correta: false,
          explicacao_especifica: "Incorreta. O TCU é órgão autônomo auxiliar do Poder Legislativo no controle externo."
        },
        {
          letra: "D",
          texto: "O controle externo da atividade policial nos Estados da Federação é exercido com exclusividade pelos Tribunais de Contas Estaduais.",
          correta: false,
          explicacao_especifica: "Incorreta. O controle externo da atividade policial é atribuição constitucional do Ministério Público (art. 129, VII)."
        },
        {
          letra: "E",
          texto: "Os Ministros do TCU são nomeados privativamente pelo Presidente da República sem necessidade de aprovação do Senado Federal.",
          correta: false,
          explicacao_especifica: "Incorreta. Dos 9 ministros, 1/3 é nomeado pelo Presidente com aprovação do Senado e 2/3 são escolhidos pelo Congresso Nacional (art. 73, § 2º)."
        }
      ]
    },

    // -------------------------------------------------------------
    // TOPIC 6: PODER JUDICIÁRIO E FUNÇÕES ESSENCIAIS - 4 questões (053 a 056)
    // -------------------------------------------------------------
    {
      idSlug: "batch3-const-053",
      disciplina_id: dConst,
      assunto_id: aPJud,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Aprovada pelo Supremo Tribunal Federal por decisão de dois terços dos seus membros, a Súmula Vinculante terá eficácia vinculante em relação aos demais órgãos do Poder Judiciário e à administração pública direta e indireta nas esferas federal, estadual e municipal, contudo não vincula o Poder Legislativo em sua atividade típica de legislar.",
      explicacao: "GABARITO: CERTO. Art. 103-A da CF/88. A Súmula Vinculante não vincula a atividade legiferante do Poder Legislativo nem do próprio STF no julgamento futuro de revisão do enunciado, a fim de evitar a fossilização constitucional.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. A Súmula Vinculante vincula o Judiciário e a Administração, mas não vincula o Legislador em sua função típica."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O efeito vinculante da súmula não atinge a atividade legislativa do Parlamento."
        }
      ]
    },
    {
      idSlug: "batch3-const-054",
      disciplina_id: dConst,
      assunto_id: aPJud,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: "Quanto à competência penal originária do Supremo Tribunal Federal (art. 102, I, 'b' da CF/88) e à jurisprudência da Corte acerca do foro por prerrogativa de função, assinale a afirmativa correta:",
      explicacao: "GABARITO: A. Conforme assentado pelo STF na AP 937 QO, o foro por prerrogativa de função aplica-se apenas aos crimes cometidos durante o exercício do cargo e relacionados às funções desempenhadas. Além disso, após o encerramento da instrução processual com a intimação para alegações finais, a competência do Tribunal resta prorrogada e estabilizada, mesmo que ocorra posterior renúncia ou término do mandato.",
      alternativas: [
        {
          letra: "A",
          texto: "O foro por prerrogativa de função de parlamentares federais restringe-se aos crimes praticados durante o exercício do mandato e que possuam relação direta com as funções institucionais desempenhadas.",
          correta: true,
          explicacao_especifica: "Correta. Entendimento consolidado pelo Plenário do STF na AP 937 QO."
        },
        {
          letra: "B",
          texto: "Qualquer infração penal cometida por parlamentar antes de sua diplomação é atraída automaticamente para a competência originária do STF.",
          correta: false,
          explicacao_especifica: "Incorreta. Crimes praticados antes da diplomação/posse continuam na primeira instância."
        },
        {
          letra: "C",
          texto: "A renúncia ao mandato parlamentar em qualquer fase do processo penal acarreta a imediata remessa dos autos à Justiça de 1º grau.",
          correta: false,
          explicacao_especifica: "Incorreta. Concluída a instrução com o despacho para alegações finais, a competência do STF prorroga-se e fixa-se em definitivo."
        },
        {
          letra: "D",
          texto: "O STF não possui competência para processar e julgar originariamente o Procurador-Geral da República nas infrações penais comuns.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 102, I, 'b' da CF prevê expressamente o julgamento originário do PGR no STF."
        },
        {
          letra: "E",
          texto: "Governadores de Estado são julgados originariamente pelo Supremo Tribunal Federal nos crimes de responsabilidade.",
          correta: false,
          explicacao_especifica: "Incorreta. Governadores são processados no STJ nos crimes comuns (art. 105, I, 'a') e perante Tribunal Especial nos crimes de responsabilidade."
        }
      ]
    },
    {
      idSlug: "batch3-const-055",
      disciplina_id: dConst,
      assunto_id: aPJud,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil de Pernambuco (PC-PE)",
      cargo_nome: "Escrivão de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "facil",
      enunciado: "A vitaliciedade, que no primeiro grau só será adquirida após dois anos de efetivo exercício, dependendo a perda do cargo, nesse período, de deliberação do tribunal a que o juiz estiver vinculado, e, nos demais casos, de sentença judicial transitada em julgado, constitui garantia constitucional fundamental da magistratura.",
      explicacao: "GABARITO: CERTO. Art. 95, I da Constituição Federal de 1988: 'I - vitaliciedade, que, no primeiro grau, só será adquirida após dois anos de exercício, dependendo a perda do cargo, nesse período, de deliberação do tribunal a que o juiz estiver vinculado, e, nos demais casos, de sentença judicial transitada em julgado'.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Literalidade do art. 95, I da Constituição Federal."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O texto expressa fielmente as regras de aquisição e perda da vitaliciedade pelos magistrados."
        }
      ]
    },
    {
      idSlug: "batch3-const-056",
      disciplina_id: dConst,
      assunto_id: aPJud,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Acerca das Funções Essenciais à Justiça disciplinadas na Constituição Federal (Ministério Público e Defensoria Pública), assinale a opção correta:",
      explicacao: "GABARITO: C. O art. 127, § 1º prevê como princípios institucionais do Ministério Público a unidade, a indivisibilidade e a independência funcional. O art. 134 estabelece a Defensoria Pública como instituição permanente e essencial à jurisdição, assegurando-lhe autonomia funcional e administrativa (art. 134, §§ 1º e 2º).",
      alternativas: [
        {
          letra: "A",
          texto: "O Ministério Público subordina-se hierarquicamente ao Poder Judiciário no desempenho da ação penal pública.",
          correta: false,
          explicacao_especifica: "Incorreta. O MP é instituição autônoma e independente (art. 127, caput)."
        },
        {
          letra: "B",
          texto: "São princípios institucionais da Defensoria Pública a subordinação funcional aos Procuradores do Estado.",
          correta: false,
          explicacao_especifica: "Incorreta. A Defensoria Pública goza de autonomia funcional e administrativa assegurada pela CF (art. 134, § 2º)."
        },
        {
          letra: "C",
          texto: "São princípios institucionais do Ministério Público a unidade, a indivisibilidade e a independência funcional, cabendo à Defensoria Pública a promoção dos direitos humanos e a defesa dos necessitados.",
          correta: true,
          explicacao_especifica: "Correta. Art. 127, § 1º c/c art. 134, caput da Constituição Federal."
        },
        {
          letra: "D",
          texto: "O Procurador-Geral da República é nomeado pelo Presidente da República independentemente de aprovação do Senado Federal.",
          correta: false,
          explicacao_especifica: "Incorreta. A nomeação exige aprovação por maioria absoluta do Senado Federal (art. 128, § 1º)."
        },
        {
          letra: "E",
          texto: "Aos membros do Ministério Público é permitida a atividade político-partidária e a advocacia privada.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 128, § 5º, II, 'b' e 'e' veda expressamente o exercício da advocacia e atividade político-partidária aos membros do MP."
        }
      ]
    },

    // -------------------------------------------------------------
    // TOPIC 7: CONTROLE DE CONSTITUCIONALIDADE - 4 questões (057 a 060)
    // -------------------------------------------------------------
    {
      idSlug: "batch3-const-057",
      disciplina_id: dConst,
      assunto_id: aCtrlConst,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Delegado de Polícia Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Conforme a Súmula Vinculante nº 10 do Supremo Tribunal Federal, viola a cláusula de reserva de plenário (art. 97 da CF) a decisão de órgão fracionário de tribunal que, embora não declare expressamente a inconstitucionalidade de lei ou ato normativo do Poder Público, afasta sua incidência, no todo ou em parte.",
      explicacao: "GABARITO: CERTO. Texto literal da Súmula Vinculante nº 10 do STF: 'Viola a cláusula de reserva de plenário (CF, artigo 97) a decisão de órgão fracionário de Tribunal que, embora não declare expressamente a inconstitucionalidade de lei ou ato normativo do poder público, afasta sua incidência, no todo ou em parte'.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Enunciado exato da Súmula Vinculante nº 10 do STF."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. O STF veda expressamente que órgãos fracionários de tribunais afastem a aplicação de lei com base em inconstitucionalidade implícita sem remessa ao Plenário ou Órgão Especial."
        }
      ]
    },
    {
      idSlug: "batch3-const-058",
      disciplina_id: dConst,
      assunto_id: aCtrlConst,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil de Santa Catarina (PC-SC)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: "No âmbito do controle concentrado de constitucionalidade perante o Supremo Tribunal Federal (art. 103 da CF/88), a jurisprudência distingue os legitimados neutros/universais dos legitimados especiais/interessados. Configura legitimado que necessita comprovar pertinência temática:",
      explicacao: "GABARITO: C. O art. 103 enumera 9 legitimados. Doutrina e STF classificam como: Legitimados Universais (não precisam de pertinência temática): Presidente da República, Mesa do Senado, Mesa da Câmara, PGR, Conselho Federal da OAB, Partido Político com representação no Congresso. Legitimados Especiais (devem demonstrar pertinência temática com seus objetivos institucionais/territoriais): Governador de Estado/DF, Mesa de Assembleia Legislativa/CLDF e Confederação Sindical ou Entidade de Classe de âmbito nacional.",
      alternativas: [
        {
          letra: "A",
          texto: "O Procurador-Geral da República.",
          correta: false,
          explicacao_especifica: "Incorreta. O PGR é legitimado universal, prescindindo de pertinência temática."
        },
        {
          letra: "B",
          texto: "O Conselho Federal da Ordem dos Advogados do Brasil (CFOAB).",
          correta: false,
          explicacao_especifica: "Incorreta. O CFOAB é legitimado universal (ampla defesa da ordem jurídica constitucional)."
        },
        {
          letra: "C",
          texto: "A Confederação Sindical ou entidade de classe de âmbito nacional e o Governador de Estado.",
          correta: true,
          explicacao_especifica: "Correta. Figuram como legitimados especiais que devem demonstrar nexo de pertinência temática para a propositura de ADI/ADC/ADO/ADPF."
        },
        {
          letra: "D",
          texto: "O Presidente da República.",
          correta: false,
          explicacao_especifica: "Incorreta. O Presidente da República é legitimado universal."
        },
        {
          letra: "E",
          texto: "O Partido Político que possua ao menos um representante no Congresso Nacional.",
          correta: false,
          explicacao_especifica: "Incorreta. Partido político com representação no Congresso é legitimado universal."
        }
      ]
    },
    {
      idSlug: "batch3-const-059",
      disciplina_id: dConst,
      assunto_id: aCtrlConst,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Papiloscopista Policial Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "A Arguição de Descumprimento de Preceito Fundamental (ADPF) é cabível para questionar a conformidade de lei municipal em face da Constituição Federal e de direito pré-constitucional (normas anteriores à promulgação da CF/88), aplicando-se o princípio da subsidiariedade, pelo qual não será admitida ADPF quando houver qualquer outro meio eficaz de sanar a lesividade.",
      explicacao: "GABARITO: CERTO. Art. 102, § 1º da CF c/c art. 4º, § 1º da Lei 9.882/1999. Como a ADI não é cabível contra lei municipal em face da CF nem contra direito pré-constitucional, a ADPF é a ação de controle abstrato adequada, respeitado o princípio da subsidiariedade.",
      alternativas: [
        {
          texto: "Certo",
          correta: true,
          explicacao_especifica: "Item correto. Reflete a disciplina da Lei 9.882/1999 e a jurisprudência pacífica do STF sobre ADPF."
        },
        {
          texto: "Errado",
          correta: false,
          explicacao_especifica: "Item incorreto. A ADPF presta-se exatamente ao controle de leis municipais e normas pré-constitucionais em face da CF/88."
        }
      ]
    },
    {
      idSlug: "batch3-const-060",
      disciplina_id: dConst,
      assunto_id: aCtrlConst,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: "Sobre os efeitos da declaração de inconstitucionalidade no controle abstrato perante o Supremo Tribunal Federal e o instituto da modulação temporal de efeitos (art. 27 da Lei nº 9.868/1999), assinale a opção correta:",
      explicacao: "GABARITO: B. A regra geral da declaração de inconstitucionalidade no Brasil é o efeito retroativo (ex tunc). Contudo, nos termos do art. 27 da Lei 9.868/99: 'Ao declarar a inconstitucionalidade de lei ou ato normativo, e tendo em vista razões de segurança jurídica ou de excepcional interesse social, poderá o Supremo Tribunal Federal, por maioria de dois terços de seus membros, restringir os efeitos daquela declaração ou decidir que ela só tenha eficácia a partir de seu trânsito em julgado ou de outro momento que venha a ser fixado'.",
      alternativas: [
        {
          letra: "A",
          texto: "A modulação temporal dos efeitos da decisão de inconstitucionalidade pode ser deliberada por maioria simples dos Ministros presentes na sessão.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 27 da Lei 9.868/99 exige quórum qualificado de 2/3 dos membros do STF (8 ministros)."
        },
        {
          letra: "B",
          texto: "Por razões de segurança jurídica ou de excepcional interesse social, o STF poderá, por maioria de dois terços de seus membros, restringir os efeitos da declaração de inconstitucionalidade ou fixar eficácia prospectiva (ex nunc ou pro futuro).",
          correta: true,
          explicacao_especifica: "Correta. Regra expressa do art. 27 da Lei nº 9.868/1999 e jurisprudência vinculante do STF."
        },
        {
          letra: "C",
          texto: "A decisão em ação direta de inconstitucionalidade produz efeitos erga omnes, mas é sempre desprovida de eficácia vinculante em relação à Administração Pública.",
          correta: false,
          explicacao_especifica: "Incorreta. As decisões definitivas de mérito em ADI e ADC possuem eficácia erga omnes e efeito vinculante (art. 102, § 2º da CF)."
        },
        {
          letra: "D",
          texto: "A declaração de inconstitucionalidade de uma lei nunca produz o efeito repristinatório da norma anterior por ela revogada.",
          correta: false,
          explicacao_especifica: "Incorreta. Como a declaração de inconstitucionalidade opera retroativamente em regra, há efeito repristinatório tácito da legislação pretérita."
        },
        {
          letra: "E",
          texto: "O controle abstrato de constitucionalidade admite desistência da ação pelo proponente antes do início do julgamento de mérito.",
          correta: false,
          explicacao_especifica: "Incorreta. O art. 5º da Lei 9.868/99 veda expressamente a desistência da ação direta de inconstitucionalidade."
        }
      ]
    }
  ];
}
