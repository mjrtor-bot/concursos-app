import { TAXONOMIA } from "./taxonomia.mjs";

export const dppPart2 = [
  {
    idSlug: "dpp-b5-019",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.acao_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito do Acordo de Não Persecução Penal (ANPP), inserido no art. 28-A do Código de Processo Penal pelo Pacote Anticrime (Lei nº 13.964/2019), assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O ANPP é cabível para crimes cometidos sem violência ou grave ameaça à pessoa cuja pena máxima em abstrato seja inferior a quatro anos.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 28-A exige pena mínima cominada inferior a 4 anos (e não pena máxima)."
      },
      {
        letra: "B",
        texto: "A celebração do acordo dispensa a confissão formal e circunstanciada da prática da infração penal, bastando a aceitação tácita das condições propostas pelo Ministério Público.",
        correta: false,
        explicacao_especifica: "Incorreta. A confissão formal e circunstanciada é requisito legal expresso (art. 28-A, caput, CPP)."
      },
      {
        letra: "C",
        texto: "O ANPP é expressamente vedado se o agente tiver celebrado acordo de não persecução penal, transação penal ou suspensão condicional do processo nos cinco anos anteriores ao cometimento da nova infração.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 28-A, § 2º, III, do CPP, não se admite o ANPP se o investigado tiver sido beneficiado nos 5 anos anteriores em ANPP, transação penal ou sursis processual."
      },
      {
        letra: "D",
        texto: "O descumprimento injustificado de quaisquer das condições do ANPP acarreta a imediata conversão do acordo em sentença condenatória definitiva com trânsito em julgado.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme o art. 28-A, § 10, do CPP, o descumprimento enseja a rescisão do acordo e o oferecimento de denúncia."
      },
      {
        letra: "E",
        texto: "Caso o membro do Ministério Público recuse motivadamente a propositura do ANPP, o investigado não dispõe de nenhum mecanismo de impugnação administrativa.",
        correta: false,
        explicacao_especifica: "Incorreta. O investigado pode requerer a remessa dos autos ao órgão superior do MP (art. 28-A, § 14, CPP)."
      }
    ],
    explicacao: "Gabarito: C. Conforme o art. 28-A, § 2º, III, do CPP, o ANPP é vedado se o investigado tiver sido beneficiado nos 5 (cinco) anos anteriores ao cometimento da infração em ANPP, transação penal ou suspensão condicional do processo. Além disso, o ANPP exige pena mínima inferior a 4 anos, ausência de violência ou grave ameaça e confissão formal circunstanciada."
  },
  {
    idSlug: "dpp-b5-020",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com o entendimento firmado pelo STF nas ADIs 6.298, 6.299, 6.300 e 6.305, o instituto do Juiz das Garantias (arts. 3º-B a 3º-F do CPP) é de aplicação cogente a todos os procedimentos criminais, inclusive nos processos de competência originária dos Tribunais e no rito do Tribunal do Júri durante a fase plenária.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Errado. O STF expressamente excluiu a figura do Juiz das Garantias dos processos de competência originária dos Tribunais, do Tribunal do Júri e da violência doméstica (Lei Maria da Penha)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. O STF fixou que o Juiz das Garantias não se aplica aos processos de competência originária dos Tribunais (STF, STJ, TJs, TRFs), aos feitos afetos ao Tribunal do Júri e à Lei Maria da Penha."
      }
    ],
    explicacao: "Gabarito: Errado. O Plenário do STF, no julgamento das ADIs 6.298, 6.299, 6.300 e 6.305 (Rel. Min. Luiz Fux, redator p/ acórdão Min. Dias Toffoli), considerou constitucional o Juiz das Garantias, mas fixou exceções de não incidência: 1) processos de competência originária dos Tribunais (STF, STJ, TJs e TRFs); 2) crimes de competência do Tribunal do Júri; 3) casos de violência doméstica e familiar contra a mulher (Lei 11.340/2006); e 4) infrações de menor potencial ofensivo no JECRIM."
  },
  {
    idSlug: "dpp-b5-021",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Perito Legista",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em relação ao exame de corpo de delito e às perícias em geral no Código de Processo Penal, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A confissão judicial do acusado supre a ausência do exame de corpo de delito direto quando a infração deixar vestígios materiais aparentes.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme o art. 158 do CPP, quando a infração deixar vestígios, é indispensável o exame de corpo de delito direto ou indireto, não podendo supri-lo a confissão do acusado."
      },
      {
        letra: "B",
        texto: "Na falta de perito oficial, o exame será realizado por duas pessoas idôneas, portadoras de diploma de curso superior preferencialmente na área específica.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 159, § 1º, do CPP: 'Na falta de perito oficial, o exame será realizado por 2 (duas) pessoas idôneas, portadoras de diploma de curso superior preferencialmente na área específica'."
      },
      {
        letra: "C",
        texto: "O exame pericial oficial realizado por um único perito oficial é nulo de pleno direito, exigindo-se sempre a atuação conjunta de dois peritos oficiais.",
        correta: false,
        explicacao_especifica: "Incorreta. Com a Lei 11.690/2008, o art. 159, caput, do CPP exige apenas 1 (um) perito oficial (superando a antiga Súmula 361/STF)."
      },
      {
        letra: "D",
        texto: "O juiz fica estritamente adstrito às conclusões do laudo pericial oficial, sendo-lhe defeso rejeitá-lo em qualquer hipótese.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 182 do CPP consagra o princípio do livre convencimento motivado (o juiz aceitará ou rejeitará o laudo, no todo ou em parte)."
      },
      {
        letra: "E",
        texto: "Desaparecidos os vestígios materiais do crime, a prova testemunhal não pode ser utilizada para suprir a impossibilidade do exame de corpo de delito.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 167 do CPP admite expressamente o exame indireto por prova testemunhal quando desaparecerem os vestígios."
      }
    ],
    explicacao: "Gabarito: B. O art. 159, caput, do CPP preconiza que a perícia será realizada por 1 (um) perito oficial. Na falta deste, o § 1º determina a designação de 2 (duas) pessoas idôneas, portadoras de diploma de curso superior, preferencialmente na área específica. A confissão do réu jamais supre o exame pericial nos crimes que deixam vestígios (art. 158, CPP)."
  },
  {
    idSlug: "dpp-b5-022",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O silêncio do interrogado perante a autoridade policial ou judiciária não importa em confissão nem pode ser interpretado em prejuízo da própria defesa.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Trata-se da consagração expressa do direito ao silêncio e garantia contra a autoincriminação no art. 186, parágrafo único, do CPP e art. 5º, LXIII, da CF/88."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O silêncio jamais pode prejudicar o réu."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 186, parágrafo único, do CPP preceitua: 'O silêncio, que não importará em confissão, não poderá ser interpretado em prejuízo da defesa'. Corolário direto da garantia constitucional do nemo tenetur se detegere (art. 5º, LXIII, CF/88)."
  },
  {
    idSlug: "dpp-b5-023",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No tocante à prova testemunhal no processo penal brasileiro, assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O ascendente, descendente ou cônjuge do acusado podem recusar-se a depor, salvo quando não for possível, por outro modo, obter-se ou integrar-se a prova do fato e de suas circunstâncias.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 206 do CPP: 'A testemunha não poderá eximir-se da obrigação de depor. Poderão, entretanto, recusar-se a fazê-lo o ascendente ou descendente, o afim em linha reta, o cônjuge, ainda que desquitado, o irmão e o pai, a mãe, ou o filho adotivo do acusado, salvo quando não for possível, por outro modo, obter-se ou integrar-se a prova do fato e de suas circunstâncias'."
      },
      {
        letra: "B",
        texto: "As testemunhas que se recusarem a depor serão sempre presas em flagrante pelo crime de desobediência qualificada.",
        correta: false,
        explicacao_especifica: "Incorreta. Testemunha faltosa sem justificativa pode sofrer condução coercitiva, multa e responder por desobediência (art. 218 CPP), mas parentes dispensados não cometem crime por recusa lícita."
      },
      {
        letra: "C",
        texto: "As pessoas proibidas de depor em razão de sigilo profissional (médicos, psicólogos, advogados) podem revelar segredos profissionais livremente a critério do juiz.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme o art. 207 do CPP, são proibidas de depor as pessoas que devem guardar segredo em razão de função/profissão, salvo se desobrigadas pela parte interessada e quiserem dar o seu depoimento."
      },
      {
        letra: "D",
        texto: "O menor de 14 anos presta compromisso legal de dizer a verdade sob pena de incorrer no crime de falso testemunho.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 208 do CPP dispõe que não prestam compromisso os doentes mentais e os menores de 14 anos (são meros declarantes/informantes)."
      },
      {
        letra: "E",
        texto: "O juiz é obrigado a deferir a contradita de testemunha arguida pela parte mesmo antes da qualificação individual.",
        correta: false,
        explicacao_especifica: "Incorreta. A contradita deve ser arguida antes de iniciado o depoimento, logo após a qualificação da testemunha (art. 214 CPP)."
      }
    ],
    explicacao: "Gabarito: A. O art. 206 do CPP estabelece o dever geral de depor, mas concede a faculdade de recusa a parentes próximos (ascendente, descendente, afim em linha reta, cônjuge/companheiro, irmão, pai/mãe/filho adotivo), a menos que seja impossível por outro modo obter-se ou integrar-se a prova do fato."
  },
  {
    idSlug: "dpp-b5-024",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.busca_apreensao,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Militar",
    cargo_nome: "Oficial da Polícia Militar",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Policiais militares em patrulhamento de rotina abordaram um indivíduo que caminhava tranquilamente em bairro de periferia, sem qualquer volume aparente em suas roupas ou denúncia específica. Ao realizarem a busca pessoal sob a justificativa genérica de 'atitude suspeita' em local conhecido pelo tráfico, encontraram com ele 10 gramas de maconha. De acordo com o precedente vinculante da 6ª Turma do Superior Tribunal de Justiça (RHC 158.580/BA), a busca pessoal efetuada:",
    alternativas: [
      {
        letra: "A",
        texto: "É lícita, pois a atividade preventiva e ostensiva da polícia militar prescinde de justa causa em áreas com elevados índices de criminalidade.",
        correta: false,
        explicacao_especifica: "Incorreta. O STJ rechaçou expressamente a justificativa genérica baseada em estatística criminal de bairro ou padrão socioeconômico."
      },
      {
        letra: "B",
        texto: "É ilícita, pois a busca pessoal sem mandado exige a presença de fundada suspeita decorrente de elementos fáticos concretos e objetivos, não se admitindo intuição subjetiva ou filtragem racial/social.",
        correta: true,
        explicacao_especifica: "Correta. No RHC 158.580/BA, o STJ fixou que a 'atitude suspeita' subjetiva não autoriza a busca pessoal (art. 240, § 2º, CPP), sendo nula a prova obtida sem justa causa concreta anterior."
      },
      {
        letra: "C",
        texto: "É plenamente convalidada pelo encontro fortuito do entorpecente, aplicando-se o princípio da descoberta inevitável.",
        correta: false,
        explicacao_especifica: "Incorreta. A descoberta a posteriori da droga não convalida a ilegalidade originária da busca sem justa causa."
      },
      {
        letra: "D",
        texto: "Constitui ato discricionário imune ao controle jurisdicional de legalidade probatória.",
        correta: false,
        explicacao_especifica: "Incorreta. Todos os atos invasivos de direitos fundamentais estão sujeitos ao controle judicial de legalidade e constitucionalidade."
      },
      {
        letra: "E",
        texto: "Depende de autorização expressa prévia do Ministério Público para que seja declarada sua nulidade.",
        correta: false,
        explicacao_especifica: "Incorreta. A nulidade da prova ilícita decorre diretamente da Constituição e do art. 157 do CPP."
      }
    ],
    explicacao: "Gabarito: B. No histórico julgamento do RHC 158.580/BA (Rel. Min. Rogerio Schietti Cruz), a 6ª Turma do STJ estabeleceu balizas rigorosas para a busca pessoal sem mandado (art. 240, § 2º, CPP): exige-se fundada suspeita consubstanciada em elementos fáticos concretos e objetivos (ex.: visualização de arma, volume evidente na cintura, transação explícita de objetos ilícitos), sendo ilegal a abordagem fundamentada em intuição subjetiva, 'atitude suspeita' genérica ou filtragem racial/social."
  },
  {
    idSlug: "dpp-b5-025",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Joana, mãe de duas crianças de 3 e 7 anos de idade que dependem exclusivamente de seus cuidados, foi presa em flagrante pela prática do crime de tráfico de drogas em sua residência, sem o emprego de violência ou grave ameaça à pessoa. Não há registro de que o local fosse utilizado para o consumo das crianças ou que estas tenham sido expostas a risco físico direto. De acordo com o art. 318-A do CPP e a jurisprudência do STF (HC Coletivo 143.641/SP), a prisão preventiva de Joana:",
    alternativas: [
      {
        letra: "A",
        texto: "Não pode ser substituída por prisão domiciliar em nenhuma circunstância, haja vista a natureza hedionda equiparada do tráfico de drogas.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF pacificou que o crime de tráfico de drogas sem violência/grave ameaça não obsta a substituição por prisão domiciliar."
      },
      {
        letra: "B",
        texto: "Deverá ser substituída por prisão domiciliar, desde que a agente não tenha cometido crime com violência ou grave ameaça a pessoa nem praticado crime contra seus próprios filhos.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 318-A do CPP e do HC Coletivo 143.641/STF, a prisão domiciliar é direito da mulher gestante ou mãe de criança de até 12 anos incompletos, salvo se o crime foi cometido com violência/grave ameaça ou contra os filhos."
      },
      {
        letra: "C",
        texto: "Fica condicionada à prévia comprovação cabal de que as crianças passariam fome na ausência da genitora.",
        correta: false,
        explicacao_especifica: "Incorreta. A dependência de mãe de filho até 12 anos é presumida por lei no art. 318-A do CPP."
      },
      {
        letra: "D",
        texto: "Exige necessariamente o pagamento de fiança cumulada com monitoramento eletrônico para ser deferida.",
        correta: false,
        explicacao_especifica: "Incorreta. A concessão da prisão domiciliar do art. 318-A não é condicionada a fiança pecuniária."
      },
      {
        letra: "E",
        texto: "Só é cabível mediante expressa renúncia da guarda dos filhos em favor do Conselho Tutelar.",
        correta: false,
        explicacao_especifica: "Incorreta. A finalidade do benefício é justamente proteger o convívio e desenvolvimento da criança junto à mãe."
      }
    ],
    explicacao: "Gabarito: B. Conforme o art. 318-A do CPP e a orientação firmada pelo STF no HC 143.641/SP, a prisão preventiva imposta à mulher gestante ou que for mãe/responsável por crianças menores de 12 anos de idade será substituída por prisão domiciliar, desde que não tenha cometido crime com violência ou grave ameaça a pessoa e não tenha cometido o crime contra seus filhos ou dependentes."
  },
  {
    idSlug: "dpp-b5-026",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A autoridade policial somente poderá conceder fiança nos casos de infração penal cuja pena privativa de liberdade máxima não seja superior a quatro anos; nos demais casos, a fiança será requerida ao juiz.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Trata-se da regra expressa de competência para arbitramento de fiança prevista no art. 322, caput, do CPP."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 322 do CPP fixa exatamente o limite de pena máxima não superior a 4 anos para arbitramento pelo Delegado."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 322, caput, do CPP dispõe: 'A autoridade policial somente poderá conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a 4 (quatro) anos'. No parágrafo único: 'Nos demais casos, a fiança será requerida ao juiz, que decidirá em 48 (quarenta e oito) horas'."
  },
  {
    idSlug: "dpp-b5-027",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.procedimento_comum_juri,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Diferencie os institutos da emendatio libelli (art. 383 do CPP) e da mutatio libelli (art. 384 do CPP) e assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "Na emendatio libelli há alteração da descrição fática contida na peça acusatória em virtude de prova nova surgida na instrução penal.",
        correta: false,
        explicacao_especifica: "Incorreta. Na emendatio libelli os fatos narrados permanecem idênticos; altera-se apenas a capitulação jurídica (nomen juris)."
      },
      {
        letra: "B",
        texto: "A mutatio libelli ocorre quando, durante a instrução, surge prova de circunstância elementar não contida na acusação inicial, exigindo aditamento da denúncia pelo Ministério Público e observância do contraditório.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 384 do CPP, se houver inovação fática elementar durante a instrução, o MP deve aditar a denúncia (mutatio libelli)."
      },
      {
        letra: "C",
        texto: "A mutatio libelli pode ser aplicada diretamente em segunda instância pelo Tribunal ao julgar apelação exclusiva da defesa.",
        correta: false,
        explicacao_especifica: "Incorreta. A Súmula 453 do STF veda expressamente a aplicação da mutatio libelli em 2º grau de jurisdição."
      },
      {
        letra: "D",
        texto: "Na emendatio libelli, o juiz não pode aplicar pena mais grave do que a prevista na capitulação jurídica inicial proposta pelo parquet.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 383, caput, do CPP prevê que o juiz pode aplicar pena mais grave, pois o réu se defende dos fatos."
      },
      {
        letra: "E",
        texto: "Ambos os institutos dependem de prévia anuência expressa do querelante ou do assistente de acusação para terem validade.",
        correta: false,
        explicacao_especifica: "Incorreta. A emendatio é ato exclusivo do magistrado e a mutatio é dever acusatório do titular da ação penal."
      }
    ],
    explicacao: "Gabarito: B. A emendatio libelli (art. 383, CPP) consiste na correção da qualificação jurídica dos mesmos fatos narrados na denúncia. Já a mutatio libelli (art. 384, CPP) decorre de fato novo ou elementar não narrada revelada na instrução, exigindo aditamento formal pelo Ministério Público, ampla defesa e contraditório, sendo absolutamente vedada em segundo grau de jurisdição (Súmula 453/STF)."
  },
  {
    idSlug: "dpp-b5-028",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.procedimento_comum_juri,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No procedimento do Tribunal do Júri, ocorrendo a impronúncia do acusado ao final da primeira fase (art. 414 do CPP), é correto afirmar que:",
    alternativas: [
      {
        letra: "A",
        texto: "Faz coisa julgada material terminativa, impedindo para sempre nova ação penal contra o investigado.",
        correta: false,
        explicacao_especifica: "Incorreta. A impronúncia faz apenas coisa julgada formal."
      },
      {
        letra: "B",
        texto: "Enquanto não extinta a punibilidade, nova denúncia ou queixa poderá ser formulada se houver prova nova.",
        correta: true,
        explicacao_especifica: "Correta. O parágrafo único do art. 414 do CPP prevê expressamente: 'Enquanto não extinta a punibilidade, poderá ser formulada nova denúncia ou queixa se houver prova nova'."
      },
      {
        letra: "C",
        texto: "O juiz togado deve aplicar de imediato medida de segurança detentiva se houver dúvida sobre a sanidade do réu.",
        correta: false,
        explicacao_especifica: "Incorreta. A impronúncia encerra a fase processual sem imposição de sanção ou medida de segurança."
      },
      {
        letra: "D",
        texto: "A decisão desafia exclusivamente o recurso de agravo em execução no prazo improrrogável de dez dias.",
        correta: false,
        explicacao_especifica: "Incorreta. Da decisão de impronúncia cabe apelação (art. 416 do CPP)."
      },
      {
        letra: "E",
        texto: "O processo é automaticamente redistribuído para o juízo singular comum processar e julgar o crime tentado.",
        correta: false,
        explicacao_especifica: "Incorreta. A remessa a juízo singular ocorre na desclassificação (art. 419 CPP), não na impronúncia."
      }
    ],
    explicacao: "Gabarito: B. A impronúncia (art. 414 do CPP) ocorre quando o juiz não se convence da materialidade do fato ou da existência de indícios suficientes de autoria. Por gerar apenas coisa julgada formal, o art. 414, parágrafo único, autoriza nova acusação caso surja prova nova, desde que não extinta a punibilidade."
  },
  {
    idSlug: "dpp-b5-029",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.procedimento_comum_juri,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No âmbito do Tribunal do Júri, a soberania dos veredictos é garantia constitucional absoluta que impede qualquer controle jurisdicional pelo Tribunal de Justiça em grau de apelação quando a decisão dos jurados for manifestamente contrária à prova dos autos.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Errado. O art. 593, III, 'd', do CPP admite apelação quando a decisão for manifestamente contrária à prova dos autos, podendo o Tribunal anular o julgamento e determinar a realização de novo júri (uma única vez)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Correto. O Tribunal de Justiça pode cassar o veredicto manifestamente contrário à prova e determinar submissão a novo júri (art. 593, III, 'd' e § 3º, CPP)."
      }
    ],
    explicacao: "Gabarito: Errado. Embora a soberania dos veredictos seja garantia fundamental (art. 5º, XXXVIII, 'c', CF), ela não é absoluta a ponto de inviabilizar o duplo grau de jurisdição. Conforme o art. 593, III, 'd' e § 3º, do CPP, se a decisão dos jurados for manifestamente contrária à prova dos autos, o Tribunal de apelação pode cassar a decisão e mandar o réu a novo julgamento pelo Tribunal do Júri (não podendo o Tribunal substituir o veredicto no mérito)."
  },
  {
    idSlug: "dpp-b5-030",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.nulidades_recursos,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No que se refere ao sistema de nulidades e aos princípios recursais no processo penal, assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O princípio pas de nullité sans grief (não há nulidade sem prejuízo) aplica-se exclusivamente às nulidades relativas, não alcançando as nulidades absolutas.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme jurisprudência reiterada do STF e STJ, o princípio do prejuízo (art. 563 CPP) aplica-se tanto às nulidades relativas quanto às absolutas."
      },
      {
        letra: "B",
        texto: "É nula a decisão do Tribunal que acolhe, contra o réu, nulidade não arguida no recurso da acusação, ressalvados os casos de recurso de ofício.",
        correta: true,
        explicacao_especifica: "Correta. Trata-se do texto literal da Súmula 160 do STF e do princípio que veda a reformatio in pejus."
      },
      {
        letra: "C",
        texto: "A deficiência da defesa técnica constitui nulidade absoluta automática que independe de demonstração de qualquer prejuízo sofrido pelo réu.",
        correta: false,
        explicacao_especifica: "Incorreta. A Súmula 523 do STF estabelece que a falta de defesa é nulidade absoluta, mas a sua deficiência só anula se houver prova do prejuízo."
      },
      {
        letra: "D",
        texto: "No recurso exclusivo da defesa, o Tribunal pode agravar a pena do sentenciado com base em circunstância agravante evidente ignorada na sentença de primeiro grau.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 617 do CPP veda expressamente a reformatio in pejus em recurso exclusivo da defesa."
      },
      {
        letra: "E",
        texto: "As partes podem suscitar a nulidade de ato processual a que tenham dado causa dolosamente ou para o qual tenham concorrido por negligência.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 565 do CPP veda que a parte suscite nulidade a que haja dado causa ou para que tenha concorrido."
      }
    ],
    explicacao: "Gabarito: B. A Súmula 160 do STF enuncia: 'É nula a decisão do Tribunal que acolhe, contra o réu, nulidade não arguida no recurso da acusação, ressalvados os casos de recurso de ofício'. Além disso, o art. 563 do CPP consagra o princípio pas de nullité sans grief e o art. 617 veda a reformatio in pejus."
  },
  {
    idSlug: "dpp-b5-031",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.nulidades_recursos,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Da decisão judicial que rejeitar a denúncia ou a queixa-crime cabe, como regra no procedimento comum ordinário do Código de Processo Penal, a interposição de Recurso em Sentido Estrito (RESE).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Conforme dispõe o art. 581, I, do CPP: 'Caberá recurso, no sentido estrito, da decisão, despacho ou sentença: I - que não receber a denúncia ou a queixa'."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 581, I, do CPP prevê expressamente o Recurso em Sentido Estrito."
      }
    ],
    explicacao: "Gabarito: Certo. Nos termos do art. 581, I, do CPP, cabe Recurso em Sentido Estrito contra a decisão que rejeitar a denúncia ou a queixa-crime no rito comum (ressalvada a Lei dos Juizados Especiais Criminais - art. 82 da Lei 9.099/1995, na qual cabe apelação)."
  },
  {
    idSlug: "dpp-b5-032",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.nulidades_recursos,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Acerca da Revisão Criminal e do Habeas Corpus no ordenamento jurídico brasileiro, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A revisão criminal é cabível tanto em favor do réu (pro reo) quanto em favor da sociedade (pro societate) para agravar a pena em caso de superveniência de novas provas.",
        correta: false,
        explicacao_especifica: "Incorreta. A revisão criminal é ação de impugnação autônoma exclusivamente pro reo (art. 621 CPP)."
      },
      {
        letra: "B",
        texto: "A morte do condenado extingue o interesse de agir e impede que os seus sucessores (cônjuge, ascendente, descendente ou irmão) ajuízem a ação de revisão criminal.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 623 do CPP legitima expressamente cônjuge, ascendente, descendente ou irmão (CADI) a ajuizar revisão em caso de falecimento do réu."
      },
      {
        letra: "C",
        texto: "Não cabe habeas corpus contra decisão condenatória a pena de multa, nem contra ato de imposição de pena restritiva de direitos que não ameace a liberdade de locomoção.",
        correta: true,
        explicacao_especifica: "Correta. Súmula 693 do STF: 'Não cabe habeas corpus contra decisão condenatória a pena de multa'. O HC tutela unicamente a liberdade de locomoção."
      },
      {
        letra: "D",
        texto: "A concessão de habeas corpus depende necessariamente de procuração com poderes especiais outorgada a advogado regularmente inscrito na OAB.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 654 do CPP estabelece capacidade postulatória universal (qualquer pessoa pode impetrar HC, dispensando procuração ou advogado)."
      },
      {
        letra: "E",
        texto: "A revisão criminal pode ser ajuizada a qualquer tempo antes ou durante a tramitação do recurso de apelação interposto pela defesa.",
        correta: false,
        explicacao_especifica: "Incorreta. A revisão criminal pressupõe necessariamente sentença penal condenatória ou absolutória imprópria transitada em julgado (art. 621 CPP)."
      }
    ],
    explicacao: "Gabarito: C. A Súmula 693 do STF estabelece que não cabe habeas corpus contra condenação a pena de multa, pois o remédio heroico destina-se com exclusividade a proteger a liberdade de locomoção física (art. 5º, LXVIII, CF e art. 647 CPP). A revisão criminal exige coisa julgada material e possui legitimidade estritamente pro reo (arts. 621 e 623 CPP)."
  },
  {
    idSlug: "dpp-b5-033",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.inquerito_policial,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O prazo de conclusão do inquérito policial varia conforme a esfera de apuração e a situação prisional do indiciado. Assinale a alternativa que indica corretamente os prazos de conclusão do IP de indiciado preso e indiciado solto, respectivamente, no âmbito da Justiça Federal (Lei nº 5.010/1966).",
    alternativas: [
      {
        letra: "A",
        texto: "10 dias para indiciado preso (improrrogáveis) e 30 dias para indiciado solto (prorrogáveis).",
        correta: false,
        explicacao_especifica: "Incorreta. Este é o prazo geral da Justiça Estadual no CPP (art. 10 CPP)."
      },
      {
        letra: "B",
        texto: "15 dias para indiciado preso (prorrogáveis por mais 15 dias pelo juiz) e 30 dias para indiciado solto (prorrogáveis).",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 66 da Lei nº 5.010/1966, na Justiça Federal o prazo é de 15 dias para réu preso (prorrogáveis por mais 15 dias) e 30 dias para solto."
      },
      {
        letra: "C",
        texto: "30 dias para indiciado preso e 90 dias para indiciado solto, duplicáveis em ambos os casos.",
        correta: false,
        explicacao_especifica: "Incorreta. Este é o prazo específico da Lei de Drogas (art. 51 da Lei 11.343/2006)."
      },
      {
        letra: "D",
        texto: "5 dias para indiciado preso e 15 dias para indiciado solto.",
        correta: false,
        explicacao_especifica: "Incorreta. Prazos incompatíveis com a Lei 5.010/66."
      },
      {
        letra: "E",
        texto: "20 dias para indiciado preso e 40 dias para indiciado solto, sem direito a dilação judicial.",
        correta: false,
        explicacao_especifica: "Incorreta. O prazo de 20 dias de réu preso aplica-se no Código de Processo Penal Militar (art. 20 CPPM)."
      }
    ],
    explicacao: "Gabarito: B. Na Justiça Federal, a Lei nº 5.010/1966 (art. 66) estipula que o prazo de conclusão do inquérito policial quando o indiciado estiver preso é de 15 dias, prorrogável por mais 15 dias mediante decisão judicial fundamentada, e de 30 dias quando estiver solto."
  },
  {
    idSlug: "dpp-b5-034",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O juiz formará sua convicção pela livre apreciação da prova produzida em contraditório judicial, não podendo fundamentar sua decisão exclusivamente nos elementos informativos colhidos na investigação, ressalvadas as provas cautelares, não repetíveis e antecipadas.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Trata-se da reprodução exata do art. 155, caput, do CPP, que consagra o sistema do livre convencimento motivado mitigado."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 155, caput, do CPP traz expressamente essa redação e ressalvas."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 155, caput, do CPP preceitua: 'O juiz formará sua convicção pela livre apreciação da prova produzida em contraditório judicial, não podendo fundamentar sua decisão exclusivamente nos elementos informativos colhidos na investigação, ressalvadas as provas cautelares, não repetíveis e antecipadas'."
  },
  {
    idSlug: "dpp-b5-035",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.prisoes_cautelares,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Assinale a alternativa que apresenta corretamente uma medida cautelar diversa da prisão expressamente prevista no art. 319 do Código de Processo Penal.",
    alternativas: [
      {
        letra: "A",
        texto: "Internação compulsória em clínica psiquiátrica antes da instauração formal do incidente de insanidade mental.",
        correta: false,
        explicacao_especifica: "Incorreta. A internação provisória (art. 319, VII) pressupõe laudo de peritos e crime com violência/grave ameaça."
      },
      {
        letra: "B",
        texto: "Proibição de acesso ou frequência a determinados lugares quando, por circunstâncias relacionadas ao fato, deva o indiciado ou acusado permanecer distante desses locais para evitar o risco de reiteração delitiva.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 319, II, do CPP."
      },
      {
        letra: "C",
        texto: "Suspensão automática do direito de voto e cassação definitiva de direitos políticos antes do trânsito em julgado.",
        correta: false,
        explicacao_especifica: "Incorreta. A suspensão de direitos políticos só ocorre com o trânsito em julgado (art. 15, III, CF/88)."
      },
      {
        letra: "D",
        texto: "Imposição compulsória de trabalhos forçados ou prestação de serviços comunitários cautelares diários.",
        correta: false,
        explicacao_especifica: "Incorreta. Trabalhos forçados são vedados pela CF (art. 5º, XLVII, 'c') e prestação de serviços é pena restritiva de direitos definitiva."
      },
      {
        letra: "E",
        texto: "Cassação definitiva e sumária do passaporte com perda irrevogável da nacionalidade brasileira nata.",
        correta: false,
        explicacao_especifica: "Incorreta. A retenção do passaporte é cautelar (art. 320 CPP), inexistindo perda de nacionalidade nata por medida cautelar."
      }
    ],
    explicacao: "Gabarito: B. O art. 319 do CPP elenca o rol de medidas cautelares diversas da prisão, entre as quais: comparecimento periódico em juízo (I), proibição de acesso a determinados locais (II), proibição de manter contato com determinadas pessoas (III), proibição de ausentar-se da comarca (IV), recolhimento domiciliar noturno (V), suspensão do exercício de função pública (VI), internação provisória (VII), fiança (VIII) e monitoração eletrônica (IX)."
  },
  {
    idSlug: "dpp-b5-036",
    disciplina_id: TAXONOMIA.disciplinas.processo_penal,
    assunto_id: TAXONOMIA.assuntos.provas_processo_penal,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito da prova documental e do valor probatório de dados eletrônicos obtidos em aparelhos de telefonia celular apreendidos no momento da prisão em flagrante, é correto afirmar, segundo a jurisprudência do STJ e do STF, que:",
    alternativas: [
      {
        letra: "A",
        texto: "A apreensão do aparelho celular em flagrante autoriza automaticamente os policiais a devassar conversas de aplicativos de mensagens (como WhatsApp) sem autorização judicial prévia.",
        correta: false,
        explicacao_especifica: "Incorreta. STF e STJ pacificaram que o acesso a dados de celular e mensagens exige ordem judicial fundamentada ou consentimento expresso e inequívoco."
      },
      {
        letra: "B",
        texto: "O acesso aos dados armazenados e às conversas de aplicativos de comunicação do celular apreendido exige prévia autorização judicial fundamentada, sob pena de ilicitude da prova obtida.",
        correta: true,
        explicacao_especifica: "Correta. STJ (Sexta e Quinta Turmas) e STF (Tema 1.076 de Repercussão Geral) fixaram a imprescindibilidade de autorização judicial para acesso ao conteúdo de mensagens privadas de celulares apreendidos."
      },
      {
        letra: "C",
        texto: "A inviolabilidade das comunicações protege apenas as ligações telefônicas de voz, não alcançando registros de trocas de mensagens de texto escritas.",
        correta: false,
        explicacao_especifica: "Incorreta. A tutela constitucional da privacidade e intimidade (art. 5º, X e XII, CF) abrange mensagens e dados armazenados."
      },
      {
        letra: "D",
        texto: "A autorização do Delegado de Polícia em despacho no inquérito supre a necessidade de mandado judicial para a extração forense de dados telemáticos.",
        correta: false,
        explicacao_especifica: "Incorreta. Trata-se de matéria submetida à cláusula de reserva de jurisdição."
      },
      {
        letra: "E",
        texto: "As provas decorrentes da extração direta sem mandado judicial tornam-se lícitas caso o réu confesse o crime posteriormente perante o juízo.",
        correta: false,
        explicacao_especifica: "Incorreta. Prova ilícita originária e derivadas contaminam o processo, não sendo convalidadas por confissão posterior."
      }
    ],
    explicacao: "Gabarito: B. A jurisprudência do STF e do STJ é consolidada no sentido de que a apreensão regular do smartphone no flagrante autoriza a custódia do bem físico, mas não permite aos policiais devassar os dados nele contidos (mensagens de WhatsApp, e-mails, fotos, histórico de navegação) sem prévia e expressa autorização judicial ou consentimento voluntário, por força da garantia constitucional à intimidade e ao sigilo de dados (art. 5º, X e XII, da CF/88)."
  }
];
