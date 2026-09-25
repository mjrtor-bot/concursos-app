import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./taxonomia.mjs";

export function generateCrimQuestions() {
  const dId = TAXONOMIA.disciplinas.criminologia;
  const ass = TAXONOMIA.assuntos;

  const raw = [
    // 1-12: Escolas e Teorias Criminológicas
    {
      idSlug: "crim-01",
      disciplina_id: dId,
      assunto_id: ass.escolas_criminologicas,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Delegado de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "A Escola Clássica de Criminologia, influenciada pelo Iluminismo e representada por Cesare Beccaria e Francesco Carrara, concebe o crime como um ente jurídico e funda a responsabilidade penal no livre-arbítrio e na culpabilidade moral do indivíduo.",
      explicacao: "GABARITO: CERTO. A Escola Clássica baseia-se no método dedutivo/lógico-abstrato, concebe o crime como violação de uma norma jurídica (ente jurídico) e sustenta a responsabilidade no livre-arbítrio do delinquente.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "A Escola Clássica consagra o livre-arbítrio e a concepção do crime como ente jurídico." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. Carrara e Beccaria fundamentam a culpabilidade no livre-arbítrio e na quebra contratual." }
      ]
    },
    {
      idSlug: "crim-02",
      disciplina_id: dId,
      assunto_id: ass.escolas_criminologicas,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "A tríade positivista italiana na criminologia foi composta por três expoentes que focaram, respectivamente, nos aspectos antropológico, sociológico e jurídico da delinquência. Esses autores foram:",
      explicacao: "GABARITO: Cesare Lombroso (antropológico/criminoso nato), Enrico Ferri (sociológico/fatores sociais) e Raffaele Garofalo (jurídico/psicológico/temibilidade).",
      alternativas: [
        { letra: "A", texto: "Cesare Beccaria, Jeremy Bentham e Francesco Carrara.", correta: false, explicacao_especifica: "Estes são expoentes da Escola Clássica e Utilitarista." },
        { letra: "B", texto: "Cesare Lombroso, Enrico Ferri e Raffaele Garofalo.", correta: true, explicacao_especifica: "A tríade fundamental da Escola Positiva Italiana." },
        { letra: "C", texto: "Robert Merton, Edwin Sutherland e Howard Becker.", correta: false, explicacao_especifica: "Teóricos da sociologia criminal norte-americana (Anomia, Associação Diferencial e Labeling)." },
        { letra: "D", texto: "Franz von Liszt, Adolphe Quetelet e Gabriel Tarde.", correta: false, explicacao_especifica: "Liszt pertence à Escola Alemã e Quetelet à Estatística Moral." },
        { letra: "E", texto: "Emile Durkheim, Michel Foucault e Alessandro Baratta.", correta: false, explicacao_especifica: "Durkheim é sociólogo clássico e Baratta da Criminologia Crítica." }
      ]
    },
    {
      idSlug: "crim-03",
      disciplina_id: dId,
      assunto_id: ass.escolas_criminologicas,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil do Distrito Federal (PCDF)",
      cargo_nome: "Escrivão de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Segundo a Teoria da Anomia, formulada por Émile Durkheim e desenvolvida por Robert Merton, o comportamento delituoso decorre da dissociação entre as metas culturais prescritas pela sociedade (ex.: sucesso material) e a escassez de meios institucionalmente legítimos para alcançá-las.",
      explicacao: "GABARITO: CERTO. Merton explica o crime pela tensão estrutural gerada entre fins/metas culturais (riqueza, status) e a inacessibilidade de meios legítimos (educação, trabalho) para as classes desfavorecidas.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Definição exata da Teoria da Tensão e Anomia de Robert K. Merton." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A anomia em Merton é justamente a discrepância entre metas culturais e meios institucionais." }
      ]
    },
    {
      idSlug: "crim-04",
      disciplina_id: dId,
      assunto_id: ass.escolas_criminologicas,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Delegado de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: "A Teoria do Etiquetamento Social (Labeling Approach ou Teoria da Rotulação), expoente das teorias da reação social e do conflito, afirma que:",
      explicacao: "GABARITO: A criminalidade não é uma qualidade intrínseca da conduta ou do indivíduo, mas um status social atribuído pela atuação seletiva das agências formais de controle (polícia, tribunais, prisões), que estigmatizam o autor e provocam a desvio secundário.",
      alternativas: [
        { letra: "A", texto: "O crime decorre de defeitos genéticos e desvios cromossômicos hereditários.", correta: false, explicacao_especifica: "Visão biopsicológica positivista superada." },
        { letra: "B", texto: "A criminalidade é uma propriedade atribuída a determinados indivíduos por meio de processos seletivos e estigmatizantes de controle formal.", correta: true, explicacao_especifica: "Núcleo do Labeling Approach (Howard Becker, Erving Goffman)." },
        { letra: "C", texto: "A desorganização urbana das zonas de transição gera a perda de controle social informal.", correta: false, explicacao_especifica: "Teoria Ecológica da Escola de Chicago." },
        { letra: "D", texto: "O delito é conduta aprendida em relações sociais íntimas com outros criminosos.", correta: false, explicacao_especifica: "Teoria da Associação Diferencial de Sutherland." },
        { letra: "E", texto: "A punição deve visar à neutralização incapacitante dos criminosos irrecuperáveis.", correta: false, explicacao_especifica: "Postulado do Direito Penal do Inimigo / Positivismo radical." }
      ]
    },
    {
      idSlug: "crim-05",
      disciplina_id: dId,
      assunto_id: ass.escolas_criminologicas,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Perito Criminal Federal",
      ano: 2023,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "A Teoria das Janelas Quebradas (Broken Windows Theory), desenvolvida por James Q. Wilson e George Kelling, sustenta que a desordem e pequenos delitos tolerados no ambiente comunitário transmitem a mensagem de ausência de controle social, atraindo crimes mais graves e potencializando o medo na população.",
      explicacao: "GABARITO: CERTO. A teoria serviu de sustentação empírica para o modelo de Policiamento de Tolerância Zero em Nova York, defendendo a repressão rigorosa a pequenas incivilidades para prevenir a degradação urbana e a escalada delitiva.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Broken Windows Theory postula que desordem visível e impunidade geram desintegração social e atração de criminalidade violenta." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. A teoria relaciona expressamente a tolerância a pequenas infrações com o aumento de delitos graves." }
      ]
    },
    {
      idSlug: "crim-06",
      disciplina_id: dId,
      assunto_id: ass.escolas_criminologicas,
      banca_nome: "IBFC",
      orgao_nome: "Polícia Civil da Bahia (PC-BA)",
      cargo_nome: "Investigador de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "A Teoria da Associação Diferencial, criada por Edwin Sutherland em 1939, introduziu no vocabulário criminológico o conceito de:",
      explicacao: "GABARITO: Crimes de colarinho branco (white-collar crime), demonstrando que o crime não é monopólio das classes sociais desfavorecidas nem fruto de pobreza, mas aprendido e praticado no exercício de atividades profissionais de prestígio.",
      alternativas: [
        { letra: "A", texto: "Criminoso nato e atavismo morfológico.", correta: false, explicacao_especifica: "Conceito de Cesare Lombroso." },
        { letra: "B", texto: "Crime de colarinho branco (white-collar crime).", correta: true, explicacao_especifica: "Sutherland formulou a teoria e cunhou os crimes de colarinho branco." },
        { letra: "C", texto: "Vitimologia terciária e revitimização institucional.", correta: false, explicacao_especifica: "Conceito da Vitimologia." },
        { letra: "D", texto: "Delinquência passional por impulso incontrolável.", correta: false, explicacao_especifica: "Classificação de Enrico Ferri." },
        { letra: "E", texto: "Controle social formal reativo.", correta: false, explicacao_especifica: "Conceito genérico da sociologia jurídica." }
      ]
    },
    {
      idSlug: "crim-07",
      disciplina_id: dId,
      assunto_id: ass.escolas_criminologicas,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Para a Criminologia Crítica (ou Radical), fundamentada no materialismo histórico e dialético, o sistema penal atua como instrumento de reprodução das desigualdades estruturais de classe, exercendo controle e punição seletivos voltados primordialmente aos setores marginalizados.",
      explicacao: "GABARITO: CERTO. A criminologia crítica (Baratta, Taylor, Walton, Young) desmistifica a neutralidade do direito penal, sustentando que a lei penal e sua aplicação protegem os interesses das classes dominantes e criminalizam os vulneráveis.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "A Criminologia Crítica denuncia a seletividade e funcionalidade reprodutora de desigualdades do sistema penal." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. A tese da seletividade estrutural e controle de classes é a espinha dorsal da criminologia crítica." }
      ]
    },
    {
      idSlug: "crim-08",
      disciplina_id: dId,
      assunto_id: ass.escolas_criminologicas,
      banca_nome: "INSTITUTO AOCP",
      orgao_nome: "Polícia Civil de Goiás (PC-GO)",
      cargo_nome: "Agente de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "A Escola de Chicago (ou Teoria Ecológica/Espacial da Criminologia), surgida na década de 1920 nos Estados Unidos, analisou a criminalidade relacionando-a diretamente:",
      explicacao: "GABARITO: À rápida expansão urbana, à deterioração do espaço urbano nas zonas de transição e à fraqueza do controle social informal nas comunidades degradadas (Park, Burgess, Shaw e McKay).",
      alternativas: [
        { letra: "A", texto: "Ao crescimento desordenado das cidades, à desorganização social e à degradação física dos bairros de transição.", correta: true, explicacao_especifica: "Foco ecológico-espacial da Escola de Chicago." },
        { letra: "B", texto: "À baixa capacidade craniana e deformações anatômicas atávicas.", correta: false, explicacao_especifica: "Positivismo antropológico de Lombroso." },
        { letra: "C", texto: "Ao livre-arbítrio como única fonte do comportamento humano delinquente.", correta: false, explicacao_especifica: "Postulado da Escola Clássica." },
        { letra: "D", texto: "À predisposição genética transmitida por cromossomos anormais (XYY).", correta: false, explicacao_especifica: "Criminologia biológica/genética." },
        { letra: "E", texto: "À manipulação da opinião pública pela mídia sensacionalista.", correta: false, explicacao_especifica: "Teoria do Pânico Moral." }
      ]
    },
    {
      idSlug: "crim-09",
      disciplina_id: dId,
      assunto_id: ass.escolas_criminologicas,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil de Pernambuco (PC-PE)",
      cargo_nome: "Agente de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "Na Teoria da Neutralização, formulada por Gresham Sykes e David Matza, os delinquentes não rejeitam totalmente os valores morais dominantes da sociedade, mas aprendem técnicas cognitivas e justificativas psicológicas (ex.: negação da responsabilidade, negação do dano, negação da vítima) que lhes permitem cometer o crime sem culpa moral.",
      explicacao: "GABARITO: CERTO. As cinco técnicas de neutralização de Sykes e Matza são: 1) Negação da responsabilidade ('não foi minha culpa'); 2) Negação da ilicitude/dano ('ninguém se feriu/o seguro cobre'); 3) Negação da vítima ('ela mereceu'); 4) Condenação dos que condenam ('todos são hipócritas/corruptos'); 5) Apelo a lealdades superiores ('fiz pelo meu grupo/família').",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Sykes e Matza demonstraram que o delinquente utiliza técnicas de neutralização para silenciar a censura moral interior." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. Essa é a definição consagrada das técnicas de neutralização na criminologia sociológica." }
      ]
    },
    {
      idSlug: "crim-10",
      disciplina_id: dId,
      assunto_id: ass.escolas_criminologicas,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: "A teoria criminológica contemporânea que sustenta que a ocorrência de um crime requer a convergência no espaço e tempo de três elementos essenciais — um agressor motivado, um alvo adequado e a ausência de um guardião capaz — denomina-se:",
      explicacao: "GABARITO: Teoria das Atividades Rotineiras (Routine Activity Theory), desenvolvida por Lawrence Cohen e Marcus Felson em 1979, de viés situacional e ambiental.",
      alternativas: [
        { letra: "A", texto: "Teoria da Subcultura Delinquente (Albert Cohen).", correta: false, explicacao_especifica: "Foca em subculturas juvenis e valores contraculturais não utilitários." },
        { letra: "B", texto: "Teoria da Escolha Racional e Atividades Rotineiras (Cohen e Felson).", correta: true, explicacao_especifica: "Convergência temporal de autor motivado, alvo vulnerável e guardião ausente." },
        { letra: "C", texto: "Teoria do Vínculo Social (Travis Hirschi).", correta: false, explicacao_especifica: "Explica a conformidade pelo apego, compromisso, envolvimento e crença." },
        { letra: "D", texto: "Teoria da Anomia Institucional (Messner e Rosenfeld).", correta: false, explicacao_especifica: "Foca no desequilíbrio entre economia e outras instituições." },
        { letra: "E", texto: "Teoria da Rotulação Social (Howard Becker).", correta: false, explicacao_especifica: "Foca na estigmatização das agências de controle." }
      ]
    },
    {
      idSlug: "crim-11",
      disciplina_id: dId,
      assunto_id: ass.escolas_criminologicas,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Penal Federal",
      cargo_nome: "Especialista Federal em Assistência Penitenciária",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "O conceito de 'prisionização' (prisonization), formulado por Donald Clemmer, descreve o processo de aculturação e assimilação gradual, pelo recluso, das normas, códigos de conduta informais, gírias e valores da subcultura carcerária, dificultando sua reinserção social.",
      explicacao: "GABARITO: CERTO. A prisionização refere-se aos efeitos dessocializadores e estigmatizantes do cárcere na personalidade do apenado, que internaliza a cultura prisional como mecanismo de sobrevivência no ambiente total.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Donald Clemmer conceituou prisionização como a assimilação da subcultura e código prisional pelo apenado." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O termo retrata com exatidão os efeitos degradantes da institucionalização carcerária." }
      ]
    },
    {
      idSlug: "crim-12",
      disciplina_id: dId,
      assunto_id: ass.escolas_criminologicas,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
      cargo_nome: "Médico Legista",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "A Criminologia é uma ciência empírica e interdisciplinar que tem como objetos fundamentais de estudo:",
      explicacao: "GABARITO: O delito (crime), o delinquente (criminoso), a vítima e o controle social do comportamento delitivo.",
      alternativas: [
        { letra: "A", texto: "Apenas a lei penal substantiva e os procedimentos recursais processuais.", correta: false, explicacao_especifica: "Objeto da dogmática jurídico-penal e processual." },
        { letra: "B", texto: "O crime, o criminoso, a vítima e o controle social.", correta: true, explicacao_especifica: "Tetralogia clássica de objetos da moderna Criminologia." },
        { letra: "C", texto: "Exclusivamente a anatomia patológica e a genética criminal.", correta: false, explicacao_especifica: "Objeto restrito da antropologia criminal/medicina legal." },
        { letra: "D", texto: "As penas privativas de liberdade e seu cumprimento penitenciário apenas.", correta: false, explicacao_especifica: "Objeto da Penologia e Execução Penal." },
        { letra: "E", texto: "A formulação de políticas partidárias de segurança pública.", correta: false, explicacao_especifica: "Objeto da Política Criminal governamental." }
      ]
    },

    // 13-20: Vitimologia e Cifras Criminais
    {
      idSlug: "crim-13",
      disciplina_id: dId,
      assunto_id: ass.vitimologia,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "facil",
      enunciado: "A vitimização primária decorre diretamente dos efeitos físicos, psicológicos ou patrimoniais causados pela prática do crime, enquanto a vitimização secundária (sobrevitimização) resulta do tratamento burocrático e insensível dispensado à vítima pelos órgãos formais de persecução penal do Estado.",
      explicacao: "GABARITO: CERTO. Primária: dano sofrido com a infração penal. Secundária: sofrimento gerado pelas instâncias formais (polícia, MP, Judiciário). Terciária: segregação e preconceito praticados pelo meio social da vítima (família, amigos, trabalho).",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Diferenciação precisa entre vitimização primária e secundária na esteira doutrinária." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A conceituação espelha com fidelidade as categorias vitimológicas." }
      ]
    },
    {
      idSlug: "crim-14",
      disciplina_id: dId,
      assunto_id: ass.vitimologia,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Escrivão de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Na classificação vitimológica proposta por Benjamin Mendelsohn (pioneiro da vitimologia), a vítima que se coloca em situação voluntária de provocação direta que desencadeia a agressão do autor é classificada como:",
      explicacao: "GABARITO: Vítima mais culpada que o delinquente (ou vítima provocadora). Mendelsohn classificou as vítimas em: 1) Vítima completamente inocente ou ideal; 2) Vítima de culpabilidade menor/ignorante; 3) Vítima tão culpada quanto o infrator (vítima voluntária/duelo); 4) Vítima mais culpada que o infrator (provocadora); 5) Vítima unicamente culpada (agressora simulada/imaginária).",
      alternativas: [
        { letra: "A", texto: "Vítima completamente inocente ou ideal.", correta: false, explicacao_especifica: "Não tem qualquer participação no evento (ex.: vítima de bala perdida)." },
        { letra: "B", texto: "Vítima mais culpada que o infrator (vítima provocadora).", correta: true, explicacao_especifica: "Classificação precisa de Benjamin Mendelsohn para quem provoca a reação delituosa." },
        { letra: "C", texto: "Vítima por ignorância ou menor culpabilidade.", correta: false, explicacao_especifica: "Age com descuido involuntário facilitando o delito." },
        { letra: "D", texto: "Vítima simulada ou imaginária.", correta: false, explicacao_especifica: "Inventa o delito ou sofre de delírio persecutório." },
        { letra: "E", texto: "Vítima terciária compulsória.", correta: false, explicacao_especifica: "Conceito alheio à tipologia clássica de Mendelsohn." }
      ]
    },
    {
      idSlug: "crim-15",
      disciplina_id: dId,
      assunto_id: ass.vitimologia,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil do Estado do Ceará (PC-CE)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "No estudo das cifras criminais, a 'cifra dourada' (golden figure) representa o conjunto de crimes praticados pela elite socioeconômica e financeira (crimes corporativos e do colarinho branco) que não são investigados ou punidos em virtude do poder político e financeiro dos seus autores.",
      explicacao: "GABARITO: CERTO. Cifra Negra: crimes reais não comunicados/registrados. Cifra Dourada: crimes da elite/colarinho branco impunes. Cifra Cinza: crimes registrados na delegacia que não chegam a virar processo penal (acordo, arquivamento). Cifra Amarela: crimes cometidos com violência policial não reportados por medo.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "A cifra dourada refere-se à impunidade estrutural dos crimes de colarinho branco e da criminalidade corporativa." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. Esta é a exata definição de Cifra Dourada cunhada pela criminologia crítica." }
      ]
    },
    {
      idSlug: "crim-16",
      disciplina_id: dId,
      assunto_id: ass.vitimologia,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Estado do Amazonas (PC-AM)",
      cargo_nome: "Investigador de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Em criminologia, a 'Cifra Cinza' corresponde à fração de delitos que:",
      explicacao: "GABARITO: São registrados na polícia (constam do boletim de ocorrência), mas não chegam a ser processados judicialmente ou solucionados em juízo, em virtude de conciliação, composição de danos civis, desinteresse da vítima ou arquivamento preliminar.",
      alternativas: [
        { letra: "A", texto: "Jamais chegam ao conhecimento das autoridades policiais por desconfiança da vítima.", correta: false, explicacao_especifica: "Esta é a Cifra Negra." },
        { letra: "B", texto: "Chegam a ser registrados pela autoridade policial, mas são solucionados na delegacia ou não resultam em ação penal em juízo.", correta: true, explicacao_especifica: "Conceito de Cifra Cinza da criminalidade." },
        { letra: "C", texto: "Envolvem exclusivamente atos de corrupção sistêmica no alto escalão estatal.", correta: false, explicacao_especifica: "Esta é a Cifra Dourada." },
        { letra: "D", texto: "São praticados por agentes de segurança pública com violência desmedida.", correta: false, explicacao_especifica: "Esta é a Cifra Amarela." },
        { letra: "E", texto: "Foram solucionados com condenação definitiva e cumprimento integral de pena.", correta: false, explicacao_especifica: "Estatística oficial de condenações (criminalidade revelada)." }
      ]
    },
    {
      idSlug: "crim-17",
      disciplina_id: dId,
      assunto_id: ass.vitimologia,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "O fenômeno do 'itinerário da vítima' ou vitimização terciária manifesta-se quando a vítima, após sofrer o crime e os desgastes do processo estatal, sofre rejeição, abandono, isolamento social ou humilhação por parte de sua própria comunidade, família e meio social de convivência.",
      explicacao: "GABARITO: CERTO. Vitimização Terciária é o custo social adicional imposto pelo grupo social da vítima, que a culpa pelo ocorrido ou a segrega (ex.: vítimas de crimes sexuais estigmatizadas na comunidade).",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "A vitimização terciária decorre da falta de amparo e discriminação imposta pela sociedade e grupo próximo." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A descrição retrata precisamente o conceito de vitimização terciária." }
      ]
    },
    {
      idSlug: "crim-18",
      disciplina_id: dId,
      assunto_id: ass.vitimologia,
      banca_nome: "IBFC",
      orgao_nome: "Polícia Penal do Estado de Minas Gerais",
      cargo_nome: "Policial Penal",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "No âmbito da vitimologia, o fenômeno psicológico em que uma vítima mantida em cativeiro desenvolve laços afetivos, empatia, cumplicidade e solidariedade em relação ao seu próprio sequestrador é universalmente conhecido como:",
      explicacao: "GABARITO: Síndrome de Estocolmo (Stockholm syndrome), identificada clinicamente em 1973 após assalto a banco na Suécia.",
      alternativas: [
        { letra: "A", texto: "Síndrome de Münchhausen.", correta: false, explicacao_especifica: "Transtorno factício em que a pessoa simula ou induz doenças." },
        { letra: "B", texto: "Síndrome de Estocolmo.", correta: true, explicacao_especifica: "Vínculo de empatia e defesa do agressor pela vítima em situação de cativeiro." },
        { letra: "C", texto: "Síndrome de Burnout.", correta: false, explicacao_especifica: "Esgotamento profissional crônico." },
        { letra: "D", texto: "Síndrome de Lima.", correta: false, explicacao_especifica: "Ocorre quando o sequestrador desenvolve compaixão pela vítima (fenômeno inverso)." },
        { letra: "E", texto: "Síndrome de Cotard.", correta: false, explicacao_especifica: "Delírio niilista de negação dos próprios órgãos/existência." }
      ]
    },
    {
      idSlug: "crim-19",
      disciplina_id: dId,
      assunto_id: ass.vitimologia,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Escrivão de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "A vitimodogmática é o ramo interdisciplinar que analisa a contribuição da conduta da vítima para a consumação do delito, avaliando se a sua coparticipação ou negligência injustificada pode atenuar a pena do agente, afastar a tipicidade pela imputação objetiva ou ensejar o perdão judicial.",
      explicacao: "GABARITO: CERTO. A vitimodogmática estuda os reflexos jurídico-penais do comportamento da vítima (ex.: auto-exposição a perigo e princípio da autorresponsabilidade na teoria da imputação objetiva de Claus Roxin).",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "A vitimodogmática analisa o peso jurídico da conduta da vítima no juízo de tipicidade e culpabilidade." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. A vitimodogmática é justamente a integração do papel da vítima na dogmática penal." }
      ]
    },
    {
      idSlug: "crim-20",
      disciplina_id: dId,
      assunto_id: ass.vitimologia,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Médico Legista",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Na evolução histórica do papel da vítima no Direito Penal e na Criminologia, o período caracterizado pela apropriação do monopólio punitivo pelo Estado e a consequente neutralização da vítima, relegada a mera testemunha do processo, é denominado doutrinariamente como:",
      explicacao: "GABARITO: Idade do Ouro (vingança privada / centralidade da vítima), Neutralização da Vítima (apropriação estatal do conflito na Idade Média/Moderna) e Redescoberta da Vítima (pós-Segunda Guerra Mundial com o nascimento da Vitimologia).",
      alternativas: [
        { letra: "A", texto: "Idade do Ouro da vítima.", correta: false, explicacao_especifica: "Período da justiça privada onde a vítima exercia a vingança e recebia a composição." },
        { letra: "B", texto: "Neutralização (ou esquecimento) da vítima.", correta: true, explicacao_especifica: "O Estado monopolizou a punição e reduziu a vítima a objeto de prova." },
        { letra: "C", texto: "Redescoberta da vítima.", correta: false, explicacao_especifica: "Fase contemporânea de proteção aos direitos da vítima e justiça restaurativa." },
        { letra: "D", texto: "Era da punição vicária corporativa.", correta: false, explicacao_especifica: "Terminologia inadequada às fases históricas da vitimologia." },
        { letra: "E", texto: "Fase da hiperinflação vitimária.", correta: false, explicacao_especifica: "Expressão inexistente na periodização histórica." }
      ]
    },

    // 21-25: Prevenção Delitiva e Modelos de Reação
    {
      idSlug: "crim-21",
      disciplina_id: dId,
      assunto_id: ass.prevencao_delito,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Delegado de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "A prevenção primária do delito atua sobre as causas estruturais da criminalidade por meio de políticas públicas de longo prazo nas áreas de educação, moradia, emprego e assistência social, direcionadas a toda a população antes que o crime se manifeste.",
      explicacao: "GABARITO: CERTO. Prevenção Primária: raízes do delito (educação, saúde, trabalho) - longo prazo. Prevenção Secundária: atua nos grupos de risco e locais vulneráveis (policiamento ostensivo, programas para jovens em risco) - médio prazo. Prevenção Terciária: atua sobre a população carcerária para evitar a reincidência - curto/médio prazo.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "A prevenção primária dirige-se à coletividade com ações estruturantes de longo prazo." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. A definição de prevenção primária abrange exatamente medidas universais e estruturantes." }
      ]
    },
    {
      idSlug: "crim-22",
      disciplina_id: dId,
      assunto_id: ass.prevencao_delito,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "O modelo de prevenção delitiva que se direciona especificamente aos apenados e egressos do sistema prisional, com o objetivo de promover a ressocialização e evitar a reincidência criminal, é classificado como:",
      explicacao: "GABARITO: Prevenção Terciária. Focada exclusivamente no indivíduo já condenado para proporcionar assistência educacional, profissional e psicológica no retorno à liberdade.",
      alternativas: [
        { letra: "A", texto: "Prevenção Primária.", correta: false, explicacao_especifica: "Atua nas bases sociais e educacionais universais da sociedade." },
        { letra: "B", texto: "Prevenção Secundária.", correta: false, explicacao_especifica: "Atua em grupos de risco e áreas conflagradas antes da condenação." },
        { letra: "C", texto: "Prevenção Terciária.", correta: true, explicacao_especifica: "Direciona-se ao condenado e egresso para impedir a reincidência." },
        { letra: "D", texto: "Prevenção Quaternária.", correta: false, explicacao_especifica: "Conceito da bioética/saúde para evitar intervenções iatrogênicas excessivas." },
        { letra: "E", texto: "Prevenção Retributiva Absoluta.", correta: false, explicacao_especifica: "Termo de teoria das penas, não de modelo criminológico de prevenção." }
      ]
    },
    {
      idSlug: "crim-23",
      disciplina_id: dId,
      assunto_id: ass.prevencao_delito,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Civil do Distrito Federal (PCDF)",
      cargo_nome: "Agente de Polícia",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "facil",
      enunciado: "O modelo de Justiça Restaurativa propõe uma resposta ao crime centrada na reparação dos danos sofridos pela vítima, na responsabilização ativa do ofensor e no restabelecimento da harmonia comunitária por meio de diálogos mediados, em contraponto ao modelo retributivo tradicional focado unicamente na imposição de castigo estatal.",
      explicacao: "GABARITO: CERTO. A Justiça Restaurativa foca no encontro (vítima-ofensor-comunidade), reparação do dano e pacificação social, superando a lógica estritamente punitiva/aflitiva do modelo retributivo.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "A Justiça Restaurativa privilegia a mediação, a reparação do dano e a reintegração social das partes envolvidas." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O modelo restaurativo é justamente baseado na participação ativa da vítima e restauração das relações sociais." }
      ]
    },
    {
      idSlug: "crim-24",
      disciplina_id: dId,
      assunto_id: ass.prevencao_delito,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Delegado de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: "No âmbito dos modelos de resposta estatal ao crime, o 'Direito Penal do Inimigo' (Feindstrafrecht), formulado teoricamente pelo jurista alemão Günther Jakobs, caracteriza-se por:",
      explicacao: "GABARITO: Supressão ou mitigação de garantias fundamentais e processuais para indivíduos considerados 'inimigos' (terroristas, membros de organizações criminosas), antecipação da punibilidade para atos preparatórios e aplicação de penas desproporcionais com foco na neutralização/incapacitação física.",
      alternativas: [
        { letra: "A", texto: "Valorização da mediação vítima-agressor com foco na justiça restaurativa.", correta: false, explicacao_especifica: "Oposto do Direito Penal do Inimigo." },
        { letra: "B", texto: "Mitigação de garantias individuais, antecipação da tutela penal para atos preparatórios e punição voltada à neutralização do agente perigoso.", correta: true, explicacao_especifica: "Características basilares do Direito Penal do Inimigo de Günther Jakobs." },
        { letra: "C", texto: "Descriminalização de condutas de bagatela e aplicação prioritária de penas alternativas.", correta: false, explicacao_especifica: "Característica do Direito Penal Mínimo / Minimalismo." },
        { letra: "D", texto: "Extinção das penas privativas de liberdade e substituição por monitoramento eletrônico amplo.", correta: false, explicacao_especifica: "Abolicionismo penal." },
        { letra: "E", texto: "Reforço da presunção de inocência e proibição do uso de medidas cautelares reais.", correta: false, explicacao_especifica: "Garantismo penal hiperbólico." }
      ]
    },
    {
      idSlug: "crim-25",
      disciplina_id: dId,
      assunto_id: ass.prevencao_delito,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "A Prevenção Situacional da Criminologia Ambiental busca reduzir as oportunidades imediatas de cometimento de crimes por meio de intervenções no ambiente físico (ex.: aumento da iluminação pública, instalação de câmeras, controle de acessos e vigilância natural), tornando a conduta delituosa mais arriscada e menos vantajosa para o infrator.",
      explicacao: "GABARITO: CERTO. A prevenção situacional (Ronald V. Clarke) apoia-se na teoria da escolha racional e visa aumentar o esforço, elevar o risco, reduzir as recompensas e remover as provocações do ambiente imediato.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "A prevenção situacional foca no desenho ambiental e medidas físicas de redução de oportunidades criminais." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A descrição espelha fielmente as 25 técnicas de prevenção situacional de Clarke." }
      ]
    }
  ];

  const outputPath = path.resolve(process.cwd(), "scripts/batch1_modules/criminologia.mjs");
  fs.writeFileSync(outputPath, `export const crimQuestions = ${JSON.stringify(raw, null, 2)};\n`, "utf8");
  console.log(`[+] Criminologia gerada com ${raw.length} questões.`);
  return raw;
}

generateCrimQuestions();
