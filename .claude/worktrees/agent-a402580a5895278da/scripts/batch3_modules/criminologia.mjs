import { TAXONOMIA } from "./taxonomia.mjs";

export const crimQuestions = [
  {
    idSlug: "batch3-crim-001",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.escolas_criminologicas,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No desenvolvimento histórico do pensamento criminológico, a Escola Clássica (período filosófico-humanitário) marcou a transição para a modernidade penal. Sobre os postulados e principais expoentes da Escola Clássica, assinale a alternativa correta:",
    explicacao: "GABARITO: B. Cesare Beccaria (1738–1794), autor de 'Dos Delitos e das Penas' (1764), fundamentou o direito de punir no contrato social e na legalidade estrita, consagrando a prevenção geral e a proporcionalidade da pena contra os excessos do absolutismo.",
    alternativas: [
      {
        letra: "A",
        texto: "Francesco Carrara formulou a teoria do criminoso nato a partir de estigmas morfológicos atávicos, refutando a ideia de livre-arbítrio.",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria do criminoso nato pertence a Cesare Lombroso (Escola Positiva); Francesco Carrara foi um dos maiores juristas da Escola Clássica."
      },
      {
        letra: "B",
        texto: "Cesare Beccaria, em 'Dos Delitos e das Penas', fundamentou a legitimidade da pena na teoria do contrato social e no princípio da legalidade estrita, sustentando que a finalidade da sanção penal é impedir o réu de causar novos danos e dissuadir os demais cidadãos.",
        correta: true,
        explicacao_especifica: "Correto. Beccaria defende a estrita legalidade, proporcionalidade e o utilitarismo preventivo da pena fundamentado no pacto social."
      },
      {
        letra: "C",
        texto: "A Escola Clássica adotou como método precípuo o indutivo-experimental (empírico), fundamentando a responsabilidade penal na periculosidade social do agente.",
        correta: false,
        explicacao_especifica: "Incorreto. A Escola Clássica adotava o método dedutivo (lógico-abstrato) e fundava a responsabilidade penal na culpabilidade moral e no livre-arbítrio."
      },
      {
        letra: "D",
        texto: "Enrico Ferri e Raffaele Garofalo estabeleceram que o crime é uma entidade puramente jurídica, rejeitando a concepção de delito natural ou fatores biológicos.",
        correta: false,
        explicacao_especifica: "Incorreto. Ferri e Garofalo pertencem à Escola Positiva; quem concebe o crime como ente jurídico é a Escola Clássica (Francesco Carrara)."
      },
      {
        letra: "E",
        texto: "Jeremy Bentham rejeitou a teoria utilitarista da pena, afirmando que o castigo estatal possui finalidade exclusivamente retributiva e metafísica.",
        correta: false,
        explicacao_especifica: "Incorreto. Jeremy Bentham foi o principal expoente do utilitarismo (cálculo hedonista de prazer e dor na prevenção delitiva)."
      }
    ]
  },
  {
    idSlug: "batch3-crim-002",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.escolas_criminologicas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A Escola Positiva Italiana, ao romper com o método dedutivo-abstrato clássico, consagrou o método indutivo e empírico de observação. Nessa escola, Raffaele Garofalo formulou o conceito de 'delito natural', definindo-o como a lesão aos sentimentos altruísticos fundamentais de piedade e probidade na medida média em que se encontram na comunidade social, independente da legislação positiva.",
    explicacao: "GABARITO: CERTO. Raffaele Garofalo (1851–1934), jurista da Escola Positiva, concebeu o 'delito natural' como a ofensa aos sentimentos médios de piedade (benevolência/humanidade) e probidade (respeito aos direitos alheios), além de introduzir a noção de 'temibilidade' (periculosidade social).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Garofalo definiu o delito natural exatamente pela vulneração aos sentimentos de piedade e probidade, introduzindo a temibilidade do criminoso."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A formulação de delito natural e a abordagem da lesão aos sentimentos altruísticos de piedade e probidade são os postulados clássicos de Garofalo na Escola Positiva."
      }
    ]
  },
  {
    idSlug: "batch3-crim-003",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.escolas_criminologicas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Terceira Escola Italiana (Terza Scuola), também conhecida como Escola Positivista Crítica ou Escola Eclética, surgiu no final do século XIX buscando conciliar princípios das Escolas Clássica e Positiva. Entre suas características distintivas, destaca-se:",
    explicacao: "GABARITO: B. A Terza Scuola Italiana (Alimena, Carnevale, Impallomeni) consagrou o dualismo penal: manteve a responsabilidade moral/psicológica para os imputáveis (aplicando-lhes pena retributiva e preventiva) e a periculosidade para os inimputáveis (aplicando-lhes medida de segurança), separando a criminologia (ciência empírica) do direito penal (disciplina normativa).",
    alternativas: [
      {
        letra: "A",
        texto: "A substituição integral da responsabilidade moral pelo determinismo biológico absoluto e a extinção das penas privativas de liberdade.",
        correta: false,
        explicacao_especifica: "Incorreto. A Terza Scuola rejeitou o determinismo biológico absoluto e preservou a responsabilidade penal dos imputáveis."
      },
      {
        letra: "B",
        texto: "O acolhimento do método indutivo-experimental para a criminologia ao lado do método dedutivo para o direito penal, mantendo a distinção entre imputáveis (submetidos à pena com base na responsabilidade moral) e inimputáveis (submetidos a medidas de segurança com base na periculosidade).",
        correta: true,
        explicacao_especifica: "Correto. Postulado basilar da Terza Scuola: dualismo penal (penas para imputáveis e medidas de segurança para inimputáveis) e separação metodológica entre criminologia e direito penal."
      },
      {
        letra: "C",
        texto: "A negação irrestrita do livre-arbítrio acompanhada da rejeição peremptória da aplicação de medidas de segurança aos delinquentes habituais.",
        correta: false,
        explicacao_especifica: "Incorreto. A Terceira Escola admitiu as medidas de segurança fundadas na periculosidade do agente."
      },
      {
        letra: "D",
        texto: "A formulação da teoria da anomia como causa exclusiva do fenômeno criminal urbano, negando qualquer fator individual endógeno.",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria da anomia é sociológica funcionalista (Durkheim/Merton) e não pertence à Terza Scuola italiana do século XIX."
      },
      {
        letra: "E",
        texto: "A defesa do abolicionismo penal fundamentada na falência ressocializadora do sistema carcerário moderno.",
        correta: false,
        explicacao_especifica: "Incorreto. O abolicionismo penal é uma corrente crítica do final do século XX (Hulsman, Christie), alheia à Terza Scuola."
      }
    ]
  },
  {
    idSlug: "batch3-crim-004",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.escolas_criminologicas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Ceará (PC-CE)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Escola de Chicago, precursora da criminologia ecológica ou ambiental nos Estados Unidos, utilizou o modelo das 'zonas concêntricas' de Robert Park e Ernest Burgess para demonstrar que as taxas elevadas de criminalidade e delinquência juvenil se concentravam na chamada 'zona de transição' (área contígua ao centro comercial e industrial), caracterizada pela rápida industrialização, deterioração física e desorganização social, independentemente da composição étnica dos grupos que sucessivamente nela habitavam.",
    explicacao: "GABARITO: CERTO. Shaw e McKay (pesquisadores de Chicago) comprovaram que a criminalidade se concentrava na Zona II (zona de transição) devido à desorganização social (enfraquecimento dos vínculos e do controle comunitário informal), e que as taxas permaneciam altas mesmo quando os grupos étnicos que ali residiam se renovavam.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A Teoria Ecológica da Escola de Chicago associou o crime à desorganização social da zona de transição e não a fatores étnicos ou genéticos."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A pesquisa empírica de Shaw e McKay na Escola de Chicago demonstrou exatamente a persistência da criminalidade na zona de transição em virtude de fatores ecológicos e de desorganização social."
      }
    ]
  },
  {
    idSlug: "batch3-crim-005",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.escolas_criminologicas,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Robert K. Merton, ao desenvolver a Teoria Estrutural-Funcionalista da Anomia, propôs uma tipologia de cinco modos de adaptação individual decorrentes da tensão entre metas culturais (sucesso socioeconômico) e meios institucionais legitimamente disponíveis. Assinale a alternativa que descreve corretamente o modo de adaptação denominado 'Inovação':",
    explicacao: "GABARITO: C. Na tipologia de Merton: Inovação = aceitação das metas culturais (+) aliada à rejeição ou indisponibilidade de meios institucionais legítimos (-), impelindo o indivíduo a adotar meios ilegítimos/criminosos para atingir o sucesso financeiro.",
    alternativas: [
      {
        letra: "A",
        texto: "Aceitação e cumprimento integral tanto das metas culturais de sucesso quanto dos meios institucionais aprovados pela sociedade.",
        correta: false,
        explicacao_especifica: "Incorreto. Essa é a 'Conformidade' (+ metas, + meios)."
      },
      {
        letra: "B",
        texto: "Rejeição ou abandono das metas culturais de enriquecimento, com apego obsessivo e compulsivo ao cumprimento rotineiro dos meios legítimos.",
        correta: false,
        explicacao_especifica: "Incorreto. Esse modo corresponde ao 'Ritualismo' (- metas, + meios)."
      },
      {
        letra: "C",
        texto: "Aceitação e assimilação das metas culturais de sucesso econômico, porém com rejeição ou indisponibilidade dos meios legítimos, recorrendo o agente a vias institucionalmente proibidas (como o crime) para alcançá-las.",
        correta: true,
        explicacao_especifica: "Correto. A 'Inovação' (+ metas, - meios) é o modo típico gerador de criminalidade lucrativa (patrimonial/colarinho branco)."
      },
      {
        letra: "D",
        texto: "Rejeição simultânea das metas culturais e dos meios institucionais, resultando no isolamento social, abandono de vínculos e marginalização como mendicância ou drogadição crônica.",
        correta: false,
        explicacao_especifica: "Incorreto. Esse modo corresponde ao 'Retraimento' ou 'Evasão' (- metas, - meios)."
      },
      {
        letra: "E",
        texto: "Rejeição das metas e dos meios vigentes, conjugada com a proposição ativa e mobilização para a substituição de toda a estrutura social e valorativa.",
        correta: false,
        explicacao_especifica: "Incorreto. Esse modo corresponde à 'Rebelião' (substituição de metas e meios por novos valores)."
      }
    ]
  },
  {
    idSlug: "batch3-crim-006",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.escolas_criminologicas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Distrito Federal (PCDF)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Segundo a Teoria da Associação Diferencial de Edwin Sutherland, a conduta desviante decorre do aprendizado de técnicas de execução e de um excesso de definições favoráveis à violação da lei em relação às definições desfavoráveis, transmitidas no interior de grupos primários íntimos de convivência, rechaçando a premissa de que a criminalidade seja causada exclusivamente pela pobreza ou por patologias individuais.",
    explicacao: "GABARITO: CERTO. Sutherland formulou a Teoria da Associação Diferencial enfatizando que o crime é um comportamento aprendido socialmente por meio de processos comunicativos em grupos íntimos. Essa teoria permitiu explicar também a prática de delitos econômicos e corporativos por pessoas de alto status social (crimes de colarinho branco).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A teoria de Sutherland postula o aprendizado por excesso de definições favoráveis ao descumprimento legal em grupos íntimos."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria da associação diferencial formulada por Sutherland sustenta expressamente o aprendizado comunicativo e o desbalanceamento de definições favoráveis à violação normativa."
      }
    ]
  },
  {
    idSlug: "batch3-crim-007",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.escolas_criminologicas,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Teoria do Etiquetamento Social (Labelling Approach ou Teoria da Reação Social), desenvolvida por autores como Howard Becker e Edwin Lemert na década de 1960, produziu uma mudança paradigmática na criminologia ao deslocar o foco de análise do criminoso para os órgãos de controle social. Segundo os postulados dessa teoria:",
    explicacao: "GABARITO: C. O Labelling Approach sustenta que o desvio não é uma qualidade inerente ao ato praticado, mas sim uma etiqueta atribuída seletivamente pelos órgãos de controle social formal. Edwin Lemert diferencia desvio primário (infração não integrada à autoimagem) de desvio secundário (interiorização do papel e consolidação da carreira criminosa provocada pelo estigma da punição).",
    alternativas: [
      {
        letra: "A",
        texto: "A criminalidade constitui uma qualidade ontológica inerente a certas condutas e indivíduos predispostos biologicamente.",
        correta: false,
        explicacao_especifica: "Incorreto. A Teoria do Etiquetamento rejeita expressamente a concepção ontológica do crime, afirmando seu caráter de constructo social."
      },
      {
        letra: "B",
        texto: "O desvio primário decorre da internalização definitiva da autoimagem de delinquente após a aplicação formal da sanção penal condenatória irrecorrível.",
        correta: false,
        explicacao_especifica: "Incorreto. A internalização da identidade estigmatizada e a consolidação da carreira caracterizam o desvio secundário, e não o primário."
      },
      {
        letra: "C",
        texto: "A conduta criminosa é uma categoria construída socialmente por meio de processos de definição e rotulação seletiva desempenhados pelas instâncias formais de controle (polícia, judiciário e sistema carcerário), culminando no desvio secundário quando o estigmatizado assume a carreira criminosa.",
        correta: true,
        explicacao_especifica: "Correto. O Labelling Approach define o crime como processo de rotulação e demonstra como o estigma estatal produz o desvio secundário e carreiras delitivas."
      },
      {
        letra: "D",
        texto: "A intervenção formal das agências de persecução penal é neutra e universal, incidindo com idêntica frequência sobre todas as classes sociais.",
        correta: false,
        explicacao_especifica: "Incorreto. O Labelling Approach enfatiza a seletividade estrutural e discriminatória do sistema de justiça penal."
      },
      {
        letra: "E",
        texto: "O controle penal estigmatizante atua como fator primordial de profilaxia e ressocialização, eliminando a reincidência criminológica.",
        correta: false,
        explicacao_especifica: "Incorreto. Para a teoria da rotulação, a intervenção penal estigmatizante consolida o desvio e estimula a reincidência."
      }
    ]
  },
  {
    idSlug: "batch3-crim-008",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.escolas_criminologicas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Ceará (PC-CE)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A Teoria das Janelas Quebradas (Broken Windows Theory), desenvolvida por James Q. Wilson e George L. Kelling em 1982, postula que a tolerância comunitária e estatal diante de pequenas desordens urbanas, incivilidades e delitos de menor gravidade transmite uma mensagem de abandono e ausência de controle social, criando um ambiente propício à proliferação de crimes violentos e de maior gravidade.",
    explicacao: "GABARITO: CERTO. A Broken Windows Theory fundamentou a tese de que a desordem urbana não corrigida (como janelas quebradas, pichações e pequenos delitos) gera sensação de impunidade e quebra do controle informal, atraindo delinquência mais grave. Inspirou a política de 'Tolerância Zero' em Nova York.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A teoria sustenta exatamente a correlação causal entre a tolerância a pequenas incivilidades/desordens e a escalada da criminalidade grave."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O enunciado traduz com exatidão a Teoria das Janelas Quebradas de Wilson e Kelling."
      }
    ]
  },
  {
    idSlug: "batch3-crim-009",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.escolas_criminologicas,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Na Teoria das Subculturas Delinquentes, sistematizada por Albert K. Cohen em sua obra sobre gangues juvenis ('Delinquent Boys', 1955), o comportamento delinquente de jovens de classes desfavorecidas caracteriza-se por ser:",
    explicacao: "GABARITO: B. Albert Cohen identificou três características essenciais na subcultura delinquente juvenil: é não utilitária (não visa ao proveito econômico racional), maliciosa (obtém satisfação no incômodo e desafio à autoridade) e negativista (inverte deliberadamente as normas da classe dominante, transformando o ato reprovado em fonte de status).",
    alternativas: [
      {
        letra: "A",
        texto: "Racional, estritamente utilitário e voltado unicamente à acumulação e maximização de capital financeiro no mercado ilícito.",
        correta: false,
        explicacao_especifica: "Incorreto. Para Cohen, a delinquência de gangue é não utilitária (roubam e destroem por status e afirmação, não por cálculo financeiro)."
      },
      {
        letra: "B",
        texto: "Não utilitário, malicioso e negativista, funcionando como uma reação coletiva de inversão aos valores e padrões da classe média dominante que esses jovens não conseguem atingir legitimamente.",
        correta: true,
        explicacao_especifica: "Correto. Síntese exata dos três pilares da teoria da subcultura delinquente de Cohen (não utilitarismo, malícia e negativismo decorrentes da frustração de status)."
      },
      {
        letra: "C",
        texto: "Determinado por disfunções orgânicas cerebrais transmissíveis geneticamente no seio de linhagens familiares desajustadas.",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria é puramente sociológica e rejeita causalidades biológicas atávicas."
      },
      {
        letra: "D",
        texto: "Produto exclusivo da ausência total de tipificação de crimes contra a pessoa no ordenamento penal positivado.",
        correta: false,
        explicacao_especifica: "Incorreto. Trata-se de fenômeno subcultural psicossocial e não de lacuna legislativa formal."
      },
      {
        letra: "E",
        texto: "Isento de qualquer influência grupal, derivando da reflexão individual isolada e hedonista de cada agente infrator.",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria enfatiza justamente a solidariedade de grupo e o pertencimento subcultural compartilhado."
      }
    ]
  },
  {
    idSlug: "batch3-crim-010",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.escolas_criminologicas,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Paraná (PCPR)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "De acordo com a Teoria das Técnicas de Neutralização, proposta por Gresham Sykes e David Matza, os delinquentes juvenis não possuem valores e normas subculturais totalmente opostos aos da sociedade convencional; antes, compartilham dos valores morais dominantes, mas utilizam justificativas e racionalizações psíquicas (como a 'negação da responsabilidade', 'negação do dano' e 'condenação dos que condenam') para silenciar a culpa e neutralizar os freios morais antes da prática do ato ilícito.",
    explicacao: "GABARITO: CERTO. Sykes e Matza demonstraram que os jovens delinquentes permanecem vinculados ao sistema de valores convencional, mas aprendem 'técnicas de neutralização' prévias ao delito (negação da responsabilidade, negação da lesão, negação da vítima, condenação dos julgadores e apelo a lealdades superiores), permitindo-lhes agir ilicitamente sem destruir sua autoimagem moral.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. As técnicas de neutralização de Sykes e Matza servem como justificativas psicológicas prévias para desarmar a censura moral interna do delinquente."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A Teoria da Neutralização postula exatamente o uso de justificativas mentais antes do cometimento do crime por agentes que compartilham a moralidade social predominante."
      }
    ]
  },
  {
    idSlug: "batch3-crim-011",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.escolas_criminologicas,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
    cargo_nome: "Perito Criminal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A Teoria do Controle Social (ou Vínculo Social), formulada por Travis Hirschi em 1969 ('Causes of Delinquency'), inverte a pergunta criminológica tradicional: em vez de indagar por que as pessoas cometem crimes, busca compreender por que a maioria das pessoas não comete crimes. Para Hirschi, o vínculo que une o indivíduo à sociedade e impede o desvio é composto por quatro elementos essenciais:",
    explicacao: "GABARITO: B. Para Travis Hirschi, o controle social reside na força de quatro elementos do vínculo social: 1) Apego / Attachment (laços afetivos com pais e comunidade); 2) Compromisso / Commitment (investimento em metas convencionais como estudos e carreira); 3) Envolvimento / Involvement (tempo gasto em atividades legítimas que impede o ócio); 4) Crença / Belief (respeito às normas e autoridade da lei).",
    alternativas: [
      {
        letra: "A",
        texto: "Atavismo, periculosidade, estigmatização e sanção carcerária exemplar.",
        correta: false,
        explicacao_especifica: "Incorreto. Conceitos da Escola Positiva e do Labelling, alheios à Teoria do Vínculo de Hirschi."
      },
      {
        letra: "B",
        texto: "Apego (attachment), compromisso (commitment), envolvimento (involvement) e crença (belief).",
        correta: true,
        explicacao_especifica: "Correto. Os 4 elementos formulados por Travis Hirschi para explicar a contenção do comportamento desviante."
      },
      {
        letra: "C",
        texto: "Desorganização espacial, anomia estrutural, associação diferencial e rotulação formal.",
        correta: false,
        explicacao_especifica: "Incorreto. Termos mistos de teorias ecológicas, estruturais e de etiquetamento."
      },
      {
        letra: "D",
        texto: "Coação física, coação psicológica, recompensa financeira e punição retributiva.",
        correta: false,
        explicacao_especifica: "Incorreto. Não correspondem aos elementos do vínculo social de Hirschi."
      },
      {
        letra: "E",
        texto: "Delinquência primária, delinquência secundária, desvio de conduta e estigma de carreira.",
        correta: false,
        explicacao_especifica: "Incorreto. Conceitos característicos da Teoria da Rotulação de Lemert e Becker."
      }
    ]
  },
  {
    idSlug: "batch3-crim-012",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.vitimologia,
    banca_nome: "IDECAN",
    orgao_nome: "Polícia Civil do Ceará (PC-CE)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Benjamin Mendelsohn, considerado um dos fundadores da Vitimologia, classificou as vítimas de acordo com o grau de correlação de sua culpabilidade com a do agente infrator, agrupando-as em categorias fundamentais. Assinale a alternativa que apresenta a correta correlação segundo a taxonomia de Mendelsohn:",
    explicacao: "GABARITO: A. Benjamin Mendelsohn formulou a clássica classificação baseada na culpabilidade da vítima: 1) Vítima completamente inocente ou ideal (sem qualquer participação); 2) Vítima de culpabilidade menor ou por ignorância (falta de prudência); 3) Vítima tão culpada quanto o infrator / voluntária (duelo, roleta-russa); 4) Vítima mais culpada que o infrator (provocadora); 5) Vítima unicamente culpada (agressora ilegítima, simuladora ou imaginária).",
    alternativas: [
      {
        letra: "A",
        texto: "Vítima ideal ou completamente inocente: aquela que não teve nenhuma participação ou provocação no resultado delituoso, sendo a responsabilidade penal imputada integralmente ao infrator.",
        correta: true,
        explicacao_especifica: "Correto. A vítima ideal ou inocente possui 0% de culpabilidade, cabendo 100% da culpa ao agressor."
      },
      {
        letra: "B",
        texto: "Vítima tão culpada quanto o criminoso: aquela que por ato de extrema provocação agride fisicamente o autor, forçando-o a reagir em legítima defesa.",
        correta: false,
        explicacao_especifica: "Incorreto. Quem provoca ou agride é a 'vítima mais culpada' ou 'vítima unicamente culpada'."
      },
      {
        letra: "C",
        texto: "Vítima mais culpada que o infrator: aquela que por mera desatenção ou ingenuidade involuntária facilita a ação do criminoso patrimonial.",
        correta: false,
        explicacao_especifica: "Incorreto. A ingenuidade/desatenção caracteriza a vítima por ignorância ou de menor culpabilidade."
      },
      {
        letra: "D",
        texto: "Vítima unicamente culpada: aquela que participa de pacto voluntário consensual de eutanásia ou roleta-russa.",
        correta: false,
        explicacao_especifica: "Incorreto. A participação voluntária/pactuada caracteriza a vítima 'tão culpada quanto o infrator'."
      },
      {
        letra: "E",
        texto: "Vítima por ignorância: aquela que atua com dolo direto para simular falsamente um delito que jamais ocorreu.",
        correta: false,
        explicacao_especifica: "Incorreto. A simulação dolosa de crime caracteriza a vítima simuladora ou imaginária (subespécie de vítima unicamente culpada)."
      }
    ]
  },
  {
    idSlug: "batch3-crim-013",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.vitimologia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil de Pernambuco (PC-PE)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Ezzat Abdel Fattah, ao aprofundar os estudos vitimológicos, elaborou uma tipologia centrada no grau de predisposição e intervenção da vítima na dinâmica criminosa, categorizando as vítimas em: vítima não participante (ou passiva), vítima predisposta, vítima provocadora, vítima participante e vítima falsa (ou simuladora).",
    explicacao: "GABARITO: CERTO. A tipologia de Ezzat Fattah divide as vítimas quanto à postura biopsicológica e comportamental em relação ao delito: 1) Não participantes (vítimas passivas/inocentes); 2) Predispostas (possuem inclinação ou fragilidade que favorece a vitimização); 3) Provocadoras (incitam ativamente o agente); 4) Participantes (atuam em cooperação ou facilitação consciente); 5) Falsas (simulam a agressão sofrida).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Enunciado reproduz com exatidão as cinco categorias vitimológicas consagradas por Ezzat Fattah."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A classificação de Ezzat Fattah é amplamente aceita na doutrina e compreende exatamente essas cinco categorias."
      }
    ]
  },
  {
    idSlug: "batch3-crim-014",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.vitimologia,
    banca_nome: "AOCP",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante a persecução penal de um crime de estupro, a vítima comparece à repartição policial e aos órgãos periciais onde é submetida a múltiplos interrogatórios repetitivos, perguntas invasivas desnecessárias sobre seu comportamento sexual pregresso, descrédito e atendimento desumanizado. Sob a ótica da vitimologia, o sofrimento adicional imposto à vítima pelo próprio aparato estatal e suas agências de persecução penal constitui:",
    explicacao: "GABARITO: B. A vitimização secundária (ou sobrevitimização / revitimização) refere-se ao sofrimento e constrangimento adicionais impostos à vítima pela burocracia, insensibilidade e despreparo dos órgãos formais de controle da persecução penal (polícia, perícia, ministério público e juizado).",
    alternativas: [
      {
        letra: "A",
        texto: "Vitimização primária.",
        correta: false,
        explicacao_especifica: "Incorreto. A vitimização primária é o dano físico, material ou psicológico decorrente diretamente da prática do delito pelo criminoso."
      },
      {
        letra: "B",
        texto: "Vitimização secundária (ou sobrevitimização).",
        correta: true,
        explicacao_especifica: "Correto. A violência institucional e o sofrimento causados pelos órgãos do sistema de justiça penal configuram a vitimização secundária."
      },
      {
        letra: "C",
        texto: "Vitimização terciária.",
        correta: false,
        explicacao_especifica: "Incorreto. A vitimização terciária decorre do abandono, segregação ou preconceito do meio social, familiar e comunitário."
      },
      {
        letra: "D",
        texto: "Autovitimização inconsciente.",
        correta: false,
        explicacao_especifica: "Incorreto. Autovitimização é a lesão autoprovocada ou autoinfligida pelo próprio indivíduo."
      },
      {
        letra: "E",
        texto: "Vitimização quaternária de massa.",
        correta: false,
        explicacao_especifica: "Incorreto. Não se aplica ao atendimento institucional abusivo no sistema de persecução penal."
      }
    ]
  },
  {
    idSlug: "batch3-crim-015",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.vitimologia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Estado de Santa Catarina (PCSC)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A vitimização terciária caracteriza-se pela falta de amparo, segregação, estigmatização e rejeição social suportadas pela vítima no seio de seu próprio grupo comunitário, laboral ou familiar, decorrentes do estigma associado ao delito sofrido ou de preconceitos culturais arraigados.",
    explicacao: "GABARITO: CERTO. A vitimização terciária decorre do meio social informal: é a discriminação, culpa imputada e isolamento que a vítima sofre de familiares, amigos, vizinhos ou empregadores após ter sido vitimizada (ex.: vítima de violência doméstica rejeitada pela própria família ou vítima de extorsão demitida do emprego).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A vitimização terciária é a estigmatização e desamparo comunitário e familiar imposto à vítima após o crime."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O conceito de vitimização terciária é exatamente a rejeição e estigmatização da vítima pelas instâncias de controle social informal (família, trabalho, sociedade)."
      }
    ]
  },
  {
    idSlug: "batch3-crim-016",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.vitimologia,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No estudo da Vitimodogmática, ramo dogmático-penal que analisa o papel da vítima na configuração do injusto penal e na graduação da culpabilidade, o 'princípio da autorresponsabilidade da vítima' sustenta que:",
    explicacao: "GABARITO: B. A Vitimodogmática e a teoria da imputação objetiva (Roxin, Jakobs) postulam que, quando a vítima atua de forma plenamente capaz, voluntária e consciente do perigo, assumindo o risco ou criando a situação de dano sem dever de proteção alheio (autocolocação em risco consentida), a imputação penal em desfavor do autor pode ser afastada ou mitigada.",
    alternativas: [
      {
        letra: "A",
        texto: "O Estado deve transferir integralmente para a vítima o encargo financeiro da apuração penal e das custas processuais nos crimes de ação pública incondicionada.",
        correta: false,
        explicacao_especifica: "Incorreto. A persecução penal pública é dever indelegável do Estado."
      },
      {
        letra: "B",
        texto: "A conduta voluntária e consciente da própria vítima, que se expõe livremente ao perigo ou cria o risco proibido em situação de plena capacidade de discernimento, pode afastar ou mitigar a imputação objetiva do resultado ao autor do fato.",
        correta: true,
        explicacao_especifica: "Correto. O princípio da autorresponsabilidade sustenta a autocolocação em risco e a corresponsabilidade dogmática da vítima como limites à imputação objetiva."
      },
      {
        letra: "C",
        texto: "A vítima é considerada coautora necessária em todos os crimes patrimoniais perpetrados sem emprego de violência física.",
        correta: false,
        explicacao_especifica: "Incorreto. A vítima patrimonial não se torna coautora por mero descuido."
      },
      {
        letra: "D",
        texto: "O consentimento do ofendido em bens jurídicos personalíssimos indisponíveis (como a vida) elide a tipicidade formal do crime de homicídio.",
        correta: false,
        explicacao_especifica: "Incorreto. O consentimento do ofendido só afasta o injusto quando incidente sobre bens jurídicos disponíveis."
      },
      {
        letra: "E",
        texto: "Todo delinquente reincidente deve ser concebido como vítima primária da opressão estatal, extinguindo-se sua responsabilidade penal.",
        correta: false,
        explicacao_especifica: "Incorreto. Essa premissa distorce a teoria e não possui fundamentação na dogmática vitimológica."
      }
    ]
  },
  {
    idSlug: "batch3-crim-017",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.vitimologia,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No âmbito da criminologia e da estatística criminal, denomina-se 'cifra dourada' a porcentagem de crimes de colarinho branco e delitos corporativos, financeiros e tributários praticados pelas elites socioeconômicas que não são revelados, investigados ou punidos pelo sistema de justiça criminal, evidenciando a seletividade penal.",
    explicacao: "GABARITO: CERTO. A Cifra Dourada designa a criminalidade de colarinho branco (white-collar crimes) e de poderosos que escapa ao controle repressivo estatal. Em contrapartida: Cifra Negra = crimes em geral não comunicados; Cifra Cinza = crimes registrados na polícia que não chegam a processo judicial; Cifra Rosa = crimes homofóbicos não notificados; Cifra Amarela = abusos e violências policiais não denunciados.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Cifra dourada é a denominação consagrada para a criminalidade de colarinho branco e de estratos de poder que permanece impune e oculta."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O conceito de cifra dourada corresponde exatamente à criminalidade dos detentores do poder econômico que escapa à persecução penal."
      }
    ]
  },
  {
    idSlug: "batch3-crim-018",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.prevencao_delito,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Os programas e políticas públicas voltados à garantia de educação básica de qualidade, saneamento, pleno emprego, saúde universal, moradia digna e inclusão social da juventude, que atuam diretamente sobre as causas estruturais e socioeconômicas da criminalidade no médio e longo prazo, classificam-se criminologicamente como:",
    explicacao: "GABARITO: A. A Prevenção Primária atua nas origens socioestruturais do delito (educação, emprego, assistência social, moradia e saúde), buscando intervir antes da manifestação de conflitos ou do risco delitivo iminente, com efeitos no médio e longo prazo.",
    alternativas: [
      {
        letra: "A",
        texto: "Prevenção primária do delito.",
        correta: true,
        explicacao_especifica: "Correto. A prevenção primária atua sobre as raízes sociológicas, culturais e econômicas do crime em escala macroestrutural."
      },
      {
        letra: "B",
        texto: "Prevenção secundária situacional.",
        correta: false,
        explicacao_especifica: "Incorreto. A prevenção secundária atua sobre grupos e locais específicos onde o crime é iminente."
      },
      {
        letra: "C",
        texto: "Prevenção terciária penitenciária.",
        correta: false,
        explicacao_especifica: "Incorreto. A prevenção terciária incide sobre a população carcerária e egressos para evitar a reincidência."
      },
      {
        letra: "D",
        texto: "Dissuasão repressiva de choque.",
        correta: false,
        explicacao_especifica: "Incorreto. Não se confunde com políticas de garantia de direitos sociais básicos."
      },
      {
        letra: "E",
        texto: "Profilaxia penal retributiva.",
        correta: false,
        explicacao_especifica: "Incorreto. A retribuição é finalidade da pena após a consumação do delito, não prevenção social primária."
      }
    ]
  },
  {
    idSlug: "batch3-crim-019",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.prevencao_delito,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "A prevenção secundária do delito não atua sobre as raízes socioculturais gerais do crime, mas sim de forma direcionada sobre grupos vulneráveis, setores de risco e áreas com elevada concentração de criminalidade, operando a curto e médio prazo por meio de policiamento ostensivo, fiscalização setorial, ordenamento urbano e programas de prevenção situacional.",
    explicacao: "GABARITO: CERTO. A prevenção secundária tem atuação circunscrita e profilática onde o delito já se manifesta como risco iminente ou em pontos críticos (hot spots, policiamento preventivo setorial, iluminação pública dirigida e contenção de fatores de risco imediatos).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. A prevenção secundária incide sobre grupos em situação de risco, policiamento ostensivo dirigido e prevenção situacional a curto/médio prazo."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A definição de prevenção secundária está precisa, diferenciando-se da primária (macroestrutural) e da terciária (penitenciária)."
      }
    ]
  },
  {
    idSlug: "batch3-crim-020",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.prevencao_delito,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A prevenção terciária do delito é aquela direcionada especificamente à população carcerária e aos egressos do sistema prisional. Seu objetivo primordial consiste em:",
    explicacao: "GABARITO: B. A prevenção terciária incide durante a execução penal e no pós-cumprimento da pena, visando à ressocialização do sentenciado, reinserção social e redução dos índices de reincidência criminológica.",
    alternativas: [
      {
        letra: "A",
        texto: "Eliminar a participação dos órgãos jurisdicionais na execução penal e extinguir os benefícios da Lei de Execução Penal.",
        correta: false,
        explicacao_especifica: "Incorreto. A prevenção terciária respeita o devido processo na execução penal."
      },
      {
        letra: "B",
        texto: "Evitar a reincidência criminal por meio da ressocialização, assistência educacional e profissionalizante, apoio psicológico e reinserção comunitária do condenado, mitigando os efeitos deletérios da prisionização.",
        correta: true,
        explicacao_especifica: "Correto. O escopo central da prevenção terciária é a contenção da reincidência mediante tratamento digno e ressocialização do apenado."
      },
      {
        letra: "C",
        texto: "Impor o isolamento celular perpétuo para garantir a total segregação e neutralização física do infrator.",
        correta: false,
        explicacao_especifica: "Incorreto. Penas perpétuas ou cruéis são inconstitucionais no Brasil e incompatíveis com a prevenção terciária ressocializadora."
      },
      {
        letra: "D",
        texto: "Promover a reforma urbana e a universalização do ensino infantil em municípios com baixo IDH.",
        correta: false,
        explicacao_especifica: "Incorreto. Políticas educacionais e habitacionais universais configuram prevenção primária."
      },
      {
        letra: "E",
        texto: "Intensificar batidas policiais aleatórias e revistas em transeuntes em vias públicas.",
        correta: false,
        explicacao_especifica: "Incorreto. Policiamento de rua ostensivo enquadra-se na prevenção secundária."
      }
    ]
  },
  {
    idSlug: "batch3-crim-021",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.prevencao_delito,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Ceará (PC-CE)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A prevenção situacional do delito, formulada por Ronald V. Clarke, prescinde da alteração prévia das disposições morais ou de reformas estruturais do indivíduo e concentra-se na modificação do ambiente físico imediato para reduzir as oportunidades criminosas, estruturando-se em técnicas que buscam: aumentar o esforço percebido para a prática do delito, aumentar o risco de detecção, reduzir as recompensas esperadas, reduzir as provocações ambientais e remover as justificativas ou desculpas racionais do infrator.",
    explicacao: "GABARITO: CERTO. A Teoria da Prevenção Situacional (Clarke) foca no contexto espacial e circunstancial imediato (bloqueio de alvos, vigilância, controle de acessos), aumentando os custos e riscos da conduta criminosa e diminuindo os ganhos da oportunidade delitiva calculada pelo infrator racional.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Ronald V. Clarke sistematizou exatamente os 5 grupos de técnicas de prevenção situacional descritos no enunciado."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A teoria da prevenção situacional foca rigorosamente na alteração do ambiente imediato para neutralizar oportunidades de crime."
      }
    ]
  },
  {
    idSlug: "batch3-crim-022",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.prevencao_delito,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia Civil",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "A criminologia moderna analisa diferentes modelos de resposta e reação social ao fenômeno criminal. Dentre eles, o Modelo Restaurador (ou Justiça Restaurativa / Integrador) distingue-se dos modelos dissuasório e ressocializador por:",
    explicacao: "GABARITO: C. A Justiça Restaurativa foca na reparação dos danos gerados pelo crime e no protagonismo da vítima, do ofensor e da comunidade, promovendo a responsabilização ativa e a recomposição do tecido social, ao revés da punição retributiva estatal isolada (modelo clássico/dissuasório) ou da tutela terapêutica médica (modelo ressocializador).",
    alternativas: [
      {
        letra: "A",
        texto: "Conceber o crime como uma ofensa primordialmente contra o Estado soberano, impondo castigo exemplar para intimidação coletiva.",
        correta: false,
        explicacao_especifica: "Incorreto. Esse é o postulado do Modelo Clássico / Dissuasório (retribuição e intimidação)."
      },
      {
        letra: "B",
        texto: "Focar na patologia individual do delinquente e submetê-lo a tratamento clínico-médico compulsório e indeterminado.",
        correta: false,
        explicacao_especifica: "Incorreto. Característica do Modelo Positivista / Terapêutico-Ressocializador."
      },
      {
        letra: "C",
        texto: "Compreender o crime como um conflito interpessoal e comunitário que causou danos concretos, priorizando a participação ativa da vítima, do ofensor e da comunidade na reparação do dano, restauração dos laços rompidos e reconciliação social.",
        correta: true,
        explicacao_especifica: "Correto. Definição precisa do Modelo Restaurador (Justiça Restaurativa/Integrador), focado na reparação do dano e diálogo vítima-ofensor-comunidade."
      },
      {
        letra: "D",
        texto: "Defender a revogação de todas as leis processuais penais e a transferência de todo julgamento para tribunais arbitrais privados internacionais.",
        correta: false,
        explicacao_especifica: "Incorreto. A justiça restaurativa opera em harmonia ou como via complementar ao sistema de justiça."
      },
      {
        letra: "E",
        texto: "Restringir a resposta penal ao endurecimento e aumento quantitativo das penas privativas de liberdade em regime fechado integral.",
        correta: false,
        explicacao_especifica: "Incorreto. O encarceramento massivo é incompatível com os objetivos restaurativos."
      }
    ]
  },
  {
    idSlug: "batch3-crim-023",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.prevencao_delito,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil do Distrito Federal (PCDF)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A Criminologia Crítica (ou Radical/Dialética), cujas bases teóricas foram consolidadas por Alessandro Baratta, rejeita o dogma da igualdade do direito penal e sustenta que o sistema penal atua como instrumento de reprodução das relações de dominação de classes na sociedade capitalista, exercendo uma seletividade estrutural tanto no processo de criminalização primária quanto secundária.",
    explicacao: "GABARITO: CERTO. A Criminologia Crítica (Baratta, Taylor, Walton, Young) desmistifica a pretensa igualdade da lei penal, apontando que o sistema penal seleciona bens jurídicos a proteger (criminalização primária) e pessoas a punir (criminalização secundária) em consonância com os interesses das classes hegemônicas.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Alessandro Baratta e a Criminologia Crítica denunciam a seletividade estrutural e o papel do sistema penal na manutenção da estratificação social."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A crítica à seletividade do sistema penal e a rejeição ao dogma da igualdade da lei penal são os postulados centrais da Criminologia Crítica de Baratta."
      }
    ]
  },
  {
    idSlug: "batch3-crim-024",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.prevencao_delito,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No debate contemporâneo acerca da crise e dos limites do sistema penal, as correntes teóricas do Abolicionismo Penal (representado por Louk Hulsman, Nils Christie e Thomas Mathiesen) e do Minimalismo Penal / Garantismo (sistematizado por Luigi Ferrajoli) divergem fundamentalmente quanto ao futuro da sanção punitiva estatal. Sobre essas correntes, assinale a opção correta:",
    explicacao: "GABARITO: B. O Abolicionismo Penal (Hulsman, Christie) nega legitimidade ao sistema punitivo e propõe sua substituição integral por vias conciliatórias e cíveis. O Garantismo / Minimalismo de Luigi Ferrajoli defende o Direito Penal Mínimo como instrumento necessário para limitar tanto a violência do delito quanto a violência da vingança arbitrária privada.",
    alternativas: [
      {
        letra: "A",
        texto: "O Abolicionismo propõe a expansão máxima do direito penal simbólico, enquanto o Garantismo defende a extinção imediata de todo e qualquer controle estatal de conflitos.",
        correta: false,
        explicacao_especifica: "Incorreto. O abolicionismo rejeita a expansão penal e o garantismo defende o direito penal mínimo."
      },
      {
        letra: "B",
        texto: "O Abolicionismo prega a deslegitimação radical e a supressão do sistema penal, substituindo-o por mecanismos civis e comunitários de resolução de situações-problema; já o Minimalismo Penal sustenta a necessidade de um direito penal mínimo, estritamente necessário para conter tanto a violência do crime quanto a vingança arbitrária extrajudicial.",
        correta: true,
        explicacao_especifica: "Correto. Síntese exata da distinção entre a tese abolicionista (supressão do sistema penal) e a tese garantista/minimalista de Ferrajoli (direito penal mínimo como limite à violência)."
      },
      {
        letra: "C",
        texto: "Ambas as correntes convergem na defesa irrestrita da pena de morte e da privatização dos estabelecimentos prisionais.",
        correta: false,
        explicacao_especifica: "Incorreto. Ambas rechaçam categoricamente penas desumanas e o encarceramento massivo."
      },
      {
        letra: "D",
        texto: "Luigi Ferrajoli sustenta que o direito penal deve tutelar moralidades religiosas e condutas desprovidas de lesividade a terceiros.",
        correta: false,
        explicacao_especifica: "Incorreto. O Garantismo de Ferrajoli consagra a estrita lesividade e a secularização do direito penal."
      },
      {
        letra: "E",
        texto: "Nils Christie defende que o Estado deve monopolizar integralmente todos os conflitos intersubjetivos, retirando qualquer protagonismo da vítima.",
        correta: false,
        explicacao_especifica: "Incorreto. Christie denunciou o 'roubo dos conflitos' pelo Estado ('Conflicts as Property') e defendeu a devolução do conflito à vítima e ao ofensor."
      }
    ]
  },
  {
    idSlug: "batch3-crim-025",
    disciplina_id: TAXONOMIA.disciplinas.criminologia,
    assunto_id: TAXONOMIA.assuntos.prevencao_delito,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
    cargo_nome: "Perito Criminal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "A doutrina do 'Direito Penal do Inimigo', sistematizada pelo jurista alemão Günther Jakobs na década de 1980, contrapõe o 'Direito Penal do Cidadão' (orientado à manutenção da norma e com garantias plenas) ao tratamento do 'Inimigo' (indivíduo que se desvia por princípio e rompe de forma permanente com a ordem jurídica, como terroristas e chefes de organizações criminosas), ao qual se aplicam a antecipação da punibilidade com tipificação de atos preparatórios, a supressão ou mitigação de garantias processuais fundamentais e a imposição de penas desproporcionalmente severas voltadas à pura neutralização e custódia física.",
    explicacao: "GABARITO: CERTO. Günther Jakobs estruturou o Direito Penal do Inimigo (Feindstrafrecht) com três pilares: 1) ampla antecipação da tutela punitiva (punição autônoma de atos preparatórios); 2) desproporcionalidade das penas com finalidade de pura inocuização / neutralização física; 3) supressão ou flexibilização drástica de garantias processuais e direitos fundamentais.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O enunciado descreve perfeitamente os três traços essenciais do Direito Penal do Inimigo teorizado por Günther Jakobs."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A formulação de Jakobs contrapõe o cidadão ao inimigo exatamente nos moldes descritos no enunciado."
      }
    ]
  }
];
