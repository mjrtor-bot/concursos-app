import { TAXONOMIA } from "./taxonomia.mjs";

export const legEspecialPart1 = [
  {
    idSlug: "leg-b5-001",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O Plenário do Supremo Tribunal Federal, ao julgar o Recurso Extraordinário com Repercussão Geral nº 635.659/SP (Tema 506), fixou entendimento sobre a tipicidade do porte de maconha (Cannabis sativa) para consumo pessoal (art. 28 da Lei nº 11.343/2006). A respeito dessa tese fixada, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O porte de maconha para consumo pessoal foi plenamente legalizado no território nacional, tornando lícita a comercialização e distribuição da substância em estabelecimentos credenciados.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF não legalizou a maconha nem sua comercialização/distribuição; declarou a natureza de ilícito administrativo para a posse pessoal."
      },
      {
        letra: "B",
        texto: "O porte de maconha para consumo pessoal (até 40 gramas ou 6 plantas fêmeas) foi despenalizado sob a forma de ilícito administrativo desprovido de repercussão penal, mantendo-se a apreensão da droga e a aplicação de sanções administrativas.",
        correta: true,
        explicacao_especifica: "Correta. O STF fixou que o porte de até 40g ou 6 plantas fêmeas constitui ilícito administrativo, não criminal, autorizando a apreensão da substância e sanções administrativas na esfera cível/administrativa."
      },
      {
        letra: "C",
        texto: "A apreensão policial da droga para uso pessoal foi expressamente proibida, devendo a autoridade policial devolver a substância ao possuidor.",
        correta: false,
        explicacao_especifica: "Incorreta. A apreensão da droga continua obrigatória nos termos do julgamento do STF."
      },
      {
        letra: "D",
        texto: "A posse de qualquer quantidade de maconha, mesmo acima de 100 gramas, gera presunção absoluta de usuário pessoal, vedada a lavratura de flagrante por tráfico.",
        correta: false,
        explicacao_especifica: "Incorreta. O critério objetivo de presunção relativa de consumo é de até 40 gramas ou 6 plantas fêmeas."
      },
      {
        letra: "E",
        texto: "A decisão do STF no Tema 506 aplicou-se indistintamente a todas as drogas ilícitas, inclusive cocaína, crack e drogas sintéticas.",
        correta: false,
        explicacao_especifica: "Incorreta. A tese do STF no RE 635.659 restringiu-se estritamente à maconha (Cannabis sativa)."
      }
    ],
    explicacao: "Gabarito: B. No julgamento do RE 635.659/SP (Tema 506), o STF assentou que o porte de maconha para consumo pessoal (art. 28 da Lei 11.343/2006) não tem natureza penal, mas sim de ilícito administrativo, estabelecendo o parâmetro de até 40g ou 6 plantas fêmeas para diferenciar o usuário do traficante (presunção relativa), mantendo-se o dever policial de apreender a droga."
  },
  {
    idSlug: "leg-b5-002",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.estatuto_desarmamento,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O porte ilegal de arma de fogo com numeração, marca ou qualquer outro sinal de identificação raspado, suprimido ou adulterado equipara-se às condutas do art. 16 da Lei nº 10.826/2003, independentemente de ser a arma originariamente de uso permitido ou de uso restrito.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos termos do art. 16, § 1º, I, da Lei 10.826/2003 e jurisprudência consolidada do STJ (Tema 1.050/STJ e precedentes pacíficos)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 16, § 1º, I, do Estatuto pune a supressão de sinal identificador com as penas do porte de uso restrito, independentemente do calibre originário da arma."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme o art. 16, § 1º, inciso I, da Lei nº 10.826/2003, incorre nas mesmas penas cominadas ao porte ilegal de arma de uso restrito quem 'suprimir ou alterar marca, numeração ou qualquer sinal de identificação de arma de fogo ou artefato', sendo irrelevante se o calibre da arma era originalmente de uso permitido."
  },
  {
    idSlug: "leg-b5-003",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.organizacoes_criminosas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos termos da Lei nº 12.850/2013 (Lei das Organizações Criminosas) e da jurisprudência dos Tribunais Superiores, considera-se organização criminosa a associação de:",
    alternativas: [
      {
        letra: "A",
        texto: "Três ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter vantagem econômica mediante crimes com penas cominadas superiores a dois anos.",
        correta: false,
        explicacao_especifica: "Incorreta. A lei exige 4 ou mais pessoas e penas máximas superiores a 4 anos (art. 1º, § 1º)."
      },
      {
        letra: "B",
        texto: "Quatro ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter, direta ou indiretamente, vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a quatro anos, ou que sejam de caráter transnacional.",
        correta: true,
        explicacao_especifica: "Correta. É o exato conceito legal positivado no art. 1º, § 1º, da Lei nº 12.850/2013."
      },
      {
        letra: "C",
        texto: "Duas ou mais pessoas unidas com vínculo estável e permanente para a prática reiterada do crime de tráfico ilícito de substâncias entorpecentes.",
        correta: false,
        explicacao_especifica: "Incorreta. Este é o conceito de associação para o tráfico (art. 35 da Lei 11.343/06)."
      },
      {
        letra: "D",
        texto: "Cinco ou mais agentes públicos armados voltados para a prática de crimes contra a administração pública e lavagem de dinheiro.",
        correta: false,
        explicacao_especifica: "Incorreta. O tipo não exige cinco pessoas nem qualidade de agente público."
      },
      {
        letra: "E",
        texto: "Quatro ou mais pessoas associadas esporadicamente para a prática de um único roubo a instituição financeira com emprego de explosivos.",
        correta: false,
        explicacao_especifica: "Incorreta. A organização criminosa exige estabilidade, permanência e estrutura ordenada com divisão de tarefas."
      }
    ],
    explicacao: "Gabarito: B. O art. 1º, § 1º, da Lei nº 12.850/2013 define organização criminosa como: 'a associação de 4 (quatro) ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter, direta ou indiretamente, vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 (quatro) anos, ou que sejam de caráter transnacional'."
  },
  {
    idSlug: "leg-b5-004",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com a Lei nº 13.869/2019 (Lei de Abuso de Autoridade), para a configuração de qualquer dos crimes nela previstos, exige-se a presença de elemento subjetivo especial consistente na finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal, sendo vedada a punição pelo denominado crime de hermenêutica.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos exatos termos do art. 1º, §§ 1º e 2º, da Lei nº 13.869/2019."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 1º da Lei 13.869/19 expressamente exige dolo específico e veda a punição pela divergência interpretativa (crime de hermenêutica)."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme o art. 1º, § 1º, da Lei nº 13.869/2019: 'As condutas descritas nesta Lei constituem crime de abuso de autoridade quando praticadas pelo agente com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal'. O § 2º complementa que 'a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade'."
  },
  {
    idSlug: "leg-b5-005",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.maria_da_penha,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação à Lei Maria da Penha (Lei nº 11.340/2006) e à jurisprudência pacífica do STF e do STJ, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A ação penal no crime de lesão corporal leve praticada contra a mulher no ambiente doméstico é pública condicionada à representação da ofendida.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme a Súmula 542 do STJ e o STF (ADI 4.424), a ação é pública incondicionada em qualquer espécie de lesão corporal (leve, grave ou culposa)."
      },
      {
        letra: "B",
        texto: "A concessão das medidas protetivas de urgência independe da tipificação penal da violência, da existência de inquérito policial em andamento ou do ajuizamento de ação penal.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos do art. 19, § 5º, da Lei nº 11.340/2006 (incluído pela Lei nº 14.550/2023)."
      },
      {
        letra: "C",
        texto: "O princípio da insignificância é amplamente admitido nos crimes praticados com violência doméstica e familiar contra a mulher.",
        correta: false,
        explicacao_especifica: "Incorreta. A Súmula 589 do STJ veda categoricamente a incidência do princípio da insignificância."
      },
      {
        letra: "D",
        texto: "O descumprimento de medidas protetivas de urgência (art. 24-A) admite a concessão de fiança imediata pelo Delegado de Polícia no plantão.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 24-A, § 2º, reserva a concessão de fiança exclusivamente à autoridade judiciária."
      },
      {
        letra: "E",
        texto: "A renúncia à representação nos crimes de ação penal pública condicionada pode ser manifestada validamente perante a autoridade policial na delegacia.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 16 da Lei 11.340/06 exige audiência específica perante o juiz antes do recebimento da denúncia."
      }
    ],
    explicacao: "Gabarito: B. A Lei nº 14.550/2023 incluiu o § 5º no art. 19 da Lei nº 11.340/2006, estabelecendo que: 'As medidas protetivas de urgência serão concedidas independentemente da tipificação penal da violência, do ajuizamento de ação penal ou cível, da existência de inquérito policial ou do registro de boletim de ocorrência'."
  },
  {
    idSlug: "leg-b5-006",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_hediondos,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum (art. 155, § 4º-A, do Código Penal) foi incluído no rol taxativo dos crimes hediondos pela Lei nº 13.964/2019 (Pacote Anticrime).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 1º, inciso IX, da Lei nº 8.072/1990 passou a classificar como hediondo o furto com emprego de explosivo (art. 155, § 4º-A, CP)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O Pacote Anticrime incluiu expressamente o furto com emprego de explosivo no rol do art. 1º da Lei de Crimes Hediondos."
      }
    ],
    explicacao: "Gabarito: Certo. A Lei nº 13.964/2019 (Pacote Anticrime) alterou o art. 1º da Lei nº 8.072/1990 para inserir expressamente no inciso IX o crime de 'furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum (art. 155, § 4º-A)' no rol dos crimes hediondos."
  },
  {
    idSlug: "leg-b5-007",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.tortura,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Sobre a Lei de Tortura (Lei nº 9.455/1997) e a jurisprudência dos Tribunais Superiores, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A condenação transitada em julgado de agente público pelo crime de tortura acarreta como efeito automático e obrigatório a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada.",
        correta: true,
        explicacao_especifica: "Correta. Nos termos exatos do art. 1º, § 5º, da Lei nº 9.455/1997, sendo efeito automático que dispensa motivação expressa na sentença (STJ)."
      },
      {
        letra: "B",
        texto: "O crime de tortura por omissão de quem tinha o dever de evitá-la ou apurá-la é punido com a mesma pena privativa de liberdade cominada à tortura comissiva.",
        correta: false,
        explicacao_especifica: "Incorreta. A tortura imprópria/omissiva tem pena autônoma mais branda: detenção de 1 a 4 anos (art. 1º, § 2º)."
      },
      {
        letra: "C",
        texto: "A prática do crime de tortura admite anistia e indulto natalino ordinário desde que cumprida metade da pena.",
        correta: false,
        explicacao_especifica: "Incorreta. A tortura é insuscetível de graça, anistia ou indulto (art. 5º, XLIII, CF e art. 1º, § 6º, Lei 9.455/97)."
      },
      {
        letra: "D",
        texto: "O crime de tortura-castigo prescinde de qualquer relação de guarda, poder ou autoridade do autor sobre a vítima.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 1º, II, da Lei exige expressamente relação de 'guarda, poder ou autoridade'."
      },
      {
        letra: "E",
        texto: "A retratação do ofendido durante a fase inquisitorial extingue a punibilidade do crime de tortura praticado por policial.",
        correta: false,
        explicacao_especifica: "Incorreta. A ação penal é pública incondicionada indisponível."
      }
    ],
    explicacao: "Gabarito: A. Consoante o art. 1º, § 5º, da Lei nº 9.455/1997: 'A condenação acarretará a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada'. Segundo o STJ (AgRg no REsp 1.766.786/SP), esse efeito é automático e independe de fundamentação expressa na sentença penal condenatória."
  },
  {
    idSlug: "leg-b5-008",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lavagem_dinheiro,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O crime de lavagem de capitais (Lei nº 9.613/1998) é infração penal autônoma e acessória, dependendo da comprovação de indícios suficientes da existência de qualquer infração penal antecedente (crime ou contravenção penal), prescindindo de condenação prévia ou do julgamento do delito prévio.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Nos termos do art. 2º, II, e § 1º da Lei 9.613/98 (com redação dada pela Lei 12.683/12)."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O crime de lavagem independe da condenação prévia do autor do crime antecedente e admite qualquer infração penal prévia."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 2º, inciso II e § 1º, da Lei nº 9.613/1998 (com as alterações da Lei nº 12.683/2012) estabelece a autonomia do processo e julgamento dos crimes de lavagem de capitais em relação às infrações penais antecedentes, bastando a demonstração de indícios suficientes da infração penal prévia (crime ou contravenção), sendo desnecessária a prévia condenação ou identificação dos autores do delito antecedente."
  },
  {
    idSlug: "leg-b5-009",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.interceptacao_telefonica,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Nos termos da Lei nº 9.296/1996 (Lei de Interceptação Telefônica) e da jurisprudência do Supremo Tribunal Federal e do Superior Tribunal de Justiça, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A interceptação das comunicações telefônicas é cabível em qualquer infração penal, inclusive naquelas apenadas unicamente com detenção ou multa.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 2º, III, veda a interceptação em crimes punidos com detenção ou contravenções."
      },
      {
        letra: "B",
        texto: "O prazo legal da interceptação telefônica é de até quinze dias, admitindo-se sucessivas e fundamentadas prorrogações enquanto perdurar a imprescindibilidade da medida investigativa.",
        correta: true,
        explicacao_especifica: "Correta. O art. 5º da Lei prevê o prazo de 15 dias, e a jurisprudência pacífica do STF e STJ admite sucessivas prorrogações demonstrada a necessidade."
      },
      {
        letra: "C",
        texto: "A autoridade policial pode decretar a interceptação telefônica de ofício em casos de flagrante urgência policial.",
        correta: false,
        explicacao_especifica: "Incorreta. A interceptação sujeita-se à estrita reserva de jurisdição (art. 5º, XII, CF e art. 1º Lei 9.296/96)."
      },
      {
        letra: "D",
        texto: "A gravação das conversas telefônicas deve ser integralmente transcrita e impressa, sem qualquer possibilidade de degravação apenas dos trechos pertinentes aos fatos.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF pacificou que é desnecessária a transcrição integral de todas as conversas, bastando a degravação dos excertos relevantes e disponibilização do áudio integral à defesa."
      },
      {
        letra: "E",
        texto: "O descobrimento fortuito de novos crimes punidos com detenção durante interceptação legitimamente autorizada para crime punido com reclusão contamina a prova com nulidade insanável.",
        correta: false,
        explicacao_especifica: "Incorreta. Aplica-se o instituto da serendipidade (achado fortuito), sendo a prova plenamente válida."
      }
    ],
    explicacao: "Gabarito: B. O art. 5º da Lei nº 9.296/1996 estabelece o prazo de até 15 dias para a interceptação telefônica. A jurisprudência consolidada do STF (HC 83.515/RS) e do STJ admite renovações sucessivas por iguais períodos, desde que comprovada e fundamentada a necessidade e indispensabilidade da continuidade da diligência investigatória."
  },
  {
    idSlug: "leg-b5-010",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.estatuto_desarmamento,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O crime de disparo de arma de fogo em via pública (art. 15 da Lei nº 10.826/2003) é delito de perigo abstrato e possui natureza expressamente subsidiária, somente se configurando caso a conduta não tenha por finalidade a prática de outro crime mais grave.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 15, caput, da Lei nº 10.826/2003 traz cláusula de subsidiariedade expressa: 'desde que essa conduta não tenha por finalidade a prática de outro crime'."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 15 contém expressa subsidiariedade normativa."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 15 da Lei nº 10.826/2003 tipifica o disparo de arma de fogo ou acionamento de munição em lugar habitado ou em suas adjacências, 'desde que essa conduta não tenha por finalidade a prática de outro crime'. Trata-se de hipótese clássica de subsidiariedade expressa e crime de mera conduta/perigo abstrato."
  },
  {
    idSlug: "leg-b5-011",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No que se refere à causa especial de diminuição de pena prevista no art. 33, § 4º, da Lei nº 11.343/2006 (tráfico privilegiado) e à jurisprudência pacífica dos Tribunais Superiores, assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O tráfico privilegiado possui natureza hedionda, submetendo o apenado aos prazos e requisitos rigorosos da Lei de Crimes Hediondos.",
        correta: false,
        explicacao_especifica: "Incorreta. A Súmula Vinculante 59 do STF e o art. 112, § 5º, da LEP afastam expressamente o caráter hediondo do tráfico privilegiado."
      },
      {
        letra: "B",
        texto: "São requisitos cumulativos para a concessão do benefício: primariedade, bons antecedentes, não dedicação a atividades criminosas e não integração a organização criminosa.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 33, § 4º, da Lei 11.343/2006."
      },
      {
        letra: "C",
        texto: "Inquéritos policiais e ações penais em andamento sem trânsito em julgado podem ser utilizados isoladamente para afastar os bons antecedentes e vedar o tráfico privilegiado.",
        correta: false,
        explicacao_especifica: "Incorreta. Conforme a Súmula 444 do STJ e Tema 1.050 do STJ, inquéritos e ações penais em curso não bastam para fundamentar a dedicação a atividades criminosas."
      },
      {
        letra: "D",
        texto: "A quantidade de droga apreendida deve ser utilizada simultaneamente na primeira fase da dosimetria e na terceira fase para modular a fração de redução do § 4º, sem caracterizar bis in idem.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF vedou o bis in idem no julgamento do Tema 712 (RE 666.333)."
      },
      {
        letra: "E",
        texto: "A aplicação do tráfico privilegiado impede a substituição da pena privativa de liberdade por penas restritivas de direitos.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF declarou inconstitucional a vedação de penas restritivas (HC 97.256 e Resolução nº 5/2012 do Senado)."
      }
    ],
    explicacao: "Gabarito: B. O art. 33, § 4º, da Lei nº 11.343/2006 estabelece que as penas poderão ser reduzidas de um sexto a dois terços desde que o agente seja: 1) primário; 2) de bons antecedentes; 3) não se dedique às atividades criminosas; e 4) não integre organização criminosa. A Súmula Vinculante 59/STF consolidou que o tráfico privilegiado não é crime hediondo."
  },
  {
    idSlug: "leg-b5-012",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_ambientais,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O Supremo Tribunal Federal e o Superior Tribunal de Justiça firmaram entendimento no sentido de que a responsabilização penal da pessoa jurídica por crimes ambientais (Lei nº 9.605/1998) prescinde da simultânea imputação de pessoa física corré, restando superada a antiga teoria da dupla imputação necessária.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O STF (RE 548.181/PR) e o STJ (Tema 648 e jurisprudência pacífica da 3ª Seção) superaram a teoria da dupla imputação, admitindo a responsabilização penal exclusiva da pessoa jurídica."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. A teoria da dupla imputação foi superada; a pessoa jurídica pode ser ré autônoma."
      }
    ],
    explicacao: "Gabarito: Certo. O STF (RE 548.181/PR) e a 3ª Seção do STJ assentaram que a responsabilização penal da pessoa jurídica por delitos ambientais (art. 225, § 3º, da CF/88 e art. 3º da Lei nº 9.605/1998) não está condicionada à persecução penal simultânea da pessoa física que agiu em seu nome ou proveito, consagrando a superação da teoria da dupla imputação."
  },
  {
    idSlug: "leg-b5-013",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.estatuto_crianca_adolescente,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Nos termos do Estatuto da Criança e do Adolescente (Lei nº 8.069/1990), a internação de adolescente pela prática de ato infracional constitui medida socioeducativa privativa da liberdade e:",
    alternativas: [
      {
        letra: "A",
        texto: "Pode ser aplicada por prazo indeterminado que ultrapasse cinco anos nos casos de atos infracionais análogos a homicídio qualificado.",
        correta: false,
        explicacao_especifica: "Incorreta. O prazo máximo improrrogável de internação é de 3 anos (art. 121, § 3º, ECA)."
      },
      {
        letra: "B",
        texto: "Sujeita-se aos princípios da brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento, não podendo seu período de cumprimento exceder a três anos.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 121, caput e § 3º, do ECA."
      },
      {
        letra: "C",
        texto: "É cabível para qualquer ato infracional, independentemente de violência ou reiteração de infrações graves.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 122 do ECA restringe o cabimento a atos com violência/grave ameaça, reiteração de infrações graves ou descumprimento reiterado de medida anterior."
      },
      {
        letra: "D",
        texto: "Admite que o adolescente permaneça internado até os trinta anos de idade.",
        correta: false,
        explicacao_especifica: "Incorreta. A liberação compulsória ocorre aos 21 anos de idade (art. 121, § 5º, ECA)."
      },
      {
        letra: "E",
        texto: "Pode ser aplicada diretamente pela autoridade policial sem necessidade de representação ministerial ou decisão do juiz da infância.",
        correta: false,
        explicacao_especifica: "Incorreta. A aplicação de medida socioeducativa é ato jurisdicional privativo do magistrado."
      }
    ],
    explicacao: "Gabarito: B. O art. 121 do ECA dispõe: 'A internação constitui medida privativa da liberdade, sujeita aos princípios de brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento'. O § 3º complementa que 'em nenhuma hipótese o período máximo de internação excederá a três anos'."
  },
  {
    idSlug: "leg-b5-014",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.crimes_transito,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "O crime de homicídio culposo na direção de veículo automotor praticado por agente sob a influência de álcool ou de qualquer outra substância psicoativa que determine dependência (art. 302, § 3º, do CTB) é punido com reclusão de cinco a oito anos, sendo vedada a fixação de fiança pela autoridade policial em sede de plantão.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A pena de 5 a 8 anos de reclusão ultrapassa o limite de 4 anos do art. 322 do CPP, impedindo fiança pelo Delegado de Polícia."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. Com pena máxima de 8 anos de reclusão, a concessão de fiança é privativa do magistrado (art. 322 CPP c/c art. 302, § 3º CTB)."
      }
    ],
    explicacao: "Gabarito: Certo. O art. 302, § 3º, do CTB comina pena de reclusão de 5 a 8 anos para o homicídio culposo qualificado pela embriaguez ao volante. Como a pena máxima cominada supera 4 anos, a autoridade policial não pode arbitrar fiança no auto de prisão em flagrante (art. 322 do CPP), competindo o arbitramento exclusivamente ao juiz."
  },
  {
    idSlug: "leg-b5-015",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.organizacoes_criminosas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A respeito do instituto da colaboração premiada previsto na Lei nº 12.850/2013 (com as alterações introduzidas pela Lei nº 13.964/2019), assinale a opção correta.",
    alternativas: [
      {
        letra: "A",
        texto: "O magistrado competente participa diretamente das tratativas e negociações do acordo de colaboração para garantir a legalidade do ato.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 4º, § 6º, da Lei 12.850/13 veda expressamente a participação do juiz nas negociações do acordo."
      },
      {
        letra: "B",
        texto: "As declarações do colaborador desacompanhadas de outros elementos probatórios idôneos de corroboração são suficientes para fundamentar sentença penal condenatória.",
        correta: false,
        explicacao_especifica: "Incorreta. O art. 4º, § 16, da Lei 12.850/13 veda expressamente condenação, recebimento de denúncia ou medidas cautelares com base exclusiva na palavra do colaborador."
      },
      {
        letra: "C",
        texto: "O acordo de colaboração premiada é negócio jurídico processual e meio de obtenção de prova, que pressupõe a utilidade e o interesse públicos.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 3º-A da Lei nº 12.850/2013."
      },
      {
        letra: "D",
        texto: "O Delegado de Polícia não possui legitimidade para conduzir tratativas ou celebrar acordo de colaboração premiada na fase investigatória.",
        correta: false,
        explicacao_especifica: "Incorreta. O STF pacificou a legitimidade do Delegado de Polícia para propor colaboração (ADI 5.508), com manifestação do MP."
      },
      {
        letra: "E",
        texto: "O colaborador perde de forma automática e irrevogável o direito de ser assistido por advogado durante a celebração e cumprimento do acordo.",
        correta: false,
        explicacao_especifica: "Incorreta. A presença do defensor é obrigatória em todos os atos (art. 4º, § 15)."
      }
    ],
    explicacao: "Gabarito: C. O art. 3º-A da Lei nº 12.850/2013 (incluído pelo Pacote Anticrime) estabelece: 'O acordo de colaboração premiada é negócio jurídico processual e meio de obtenção de prova, que pressupõe a utilidade e o interesse públicos'."
  },
  {
    idSlug: "leg-b5-016",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.abuso_autoridade,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Constitui crime de abuso de autoridade previsto na Lei nº 13.869/2019 cumprir mandado de busca e apreensão domiciliar após as 21h (vinte e uma horas) ou antes das 5h (cinco horas).",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O art. 22, § 1º, inciso III, da Lei nº 13.869/2019 tipifica expressamente o cumprimento de mandado de busca e apreensão domiciliar entre 21h e 5h."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O art. 22, § 1º, III, delimita exatamente o intervalo proibido entre 21h e 5h."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme preceitua o art. 22, § 1º, III, da Lei nº 13.869/2019, incorre na pena de detenção de 1 a 4 anos e multa quem 'cumpre mandado de busca e apreensão domiciliar após as 21h (vinte e uma horas) ou antes das 5h (cinco horas)'."
  },
  {
    idSlug: "leg-b5-017",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.estatuto_desarmamento,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Acerca do crime de posse irregular de arma de fogo de uso permitido (art. 12 da Lei nº 10.826/2003) e do crime de porte ilegal (art. 14 da mesma Lei), assinale a afirmativa correta.",
    alternativas: [
      {
        letra: "A",
        texto: "A conduta de manter arma de fogo de uso permitido no interior da residência do agente sem autorização legal tipifica o crime de porte ilegal de arma de fogo.",
        correta: false,
        explicacao_especifica: "Incorreta. No interior da residência configura posse irregular (art. 12)."
      },
      {
        letra: "B",
        texto: "Configura posse irregular (art. 12) manter sob sua guarda arma de fogo de uso permitido no local de trabalho do agente, desde que este seja o titular ou o responsável legal pelo estabelecimento.",
        correta: true,
        explicacao_especifica: "Correta. Nos exatos termos do art. 12 da Lei 10.826/2003 ('no seu local de trabalho, desde que seja o titular ou o responsável legal')."
      },
      {
        letra: "C",
        texto: "O porte de arma de fogo desmuniciada ou desmontada é conduta materialmente atípica segundo o Superior Tribunal de Justiça.",
        correta: false,
        explicacao_especifica: "Incorreta. O STJ e o STF pacificaram que o porte de arma desmuniciada ou desmontada é crime de perigo abstrato típico."
      },
      {
        letra: "D",
        texto: "A posse irregular de arma de fogo de uso permitido é infração penal punida exclusivamente com pena de detenção de seis meses a dois anos, vedada a aplicação de multa.",
        correta: false,
        explicacao_especifica: "Incorreta. O tipo do art. 12 comina pena de detenção de 1 a 3 anos e multa."
      },
      {
        letra: "E",
        texto: "O empregado comum que guarda arma em sua mesa na empresa responde pelo crime de posse irregular e não por porte.",
        correta: false,
        explicacao_especifica: "Incorreta. Por não ser titular ou responsável legal pelo estabelecimento, o empregado responde por porte ilegal (art. 14)."
      }
    ],
    explicacao: "Gabarito: B. O art. 12 da Lei nº 10.826/2003 tipifica a conduta de 'Possuir ou manter sob sua guarda arma de fogo, acessório ou munição, de uso permitido, em desacordo com determinação legal ou regulamentar, no interior de sua residência ou dependência desta, ou, ainda no seu local de trabalho, desde que seja o titular ou o responsável legal do estabelecimento ou empresa'."
  },
  {
    idSlug: "leg-b5-018",
    disciplina_id: TAXONOMIA.disciplinas.legislacao_especial,
    assunto_id: TAXONOMIA.assuntos.lei_drogas,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Para a configuração do crime de associação para o tráfico de drogas (art. 35 da Lei nº 11.343/2006), é indispensável a demonstração do dolo de associação com vínculo estável e permanente entre dois ou mais agentes, não bastando a simples coautoria ou convergência ocasional de vontades para a prática de um ato isolado de mercancia ilícita.",
    alternativas: [
      {
        letra: "C",
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A jurisprudência pacífica do STF e do STJ (Tema 1.050 e precedentes pacíficos) exige estabilidade e permanência (animus associativo) para o art. 35."
      },
      {
        letra: "E",
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Errado. O concurso eventual de pessoas não tipifica o art. 35 da Lei de Drogas."
      }
    ],
    explicacao: "Gabarito: Certo. Conforme jurisprudência pacificada no âmbito do STF e do STJ, a configuração do tipo penal do art. 35 da Lei nº 11.343/2006 (associação para o tráfico) exige a comprovação inequívoca do elemento subjetivo do tipo consistente no 'animus associativo', isto é, na vontade consciente de manter uma associação duradoura, estável e permanente. O mero concurso eventual de pessoas configura tão somente coautoria no tráfico de drogas (art. 33 c/c art. 29 do CP)."
  }
];
