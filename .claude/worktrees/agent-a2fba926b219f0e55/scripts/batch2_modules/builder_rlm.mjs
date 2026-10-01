import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./taxonomia.mjs";

export function generateRlmQuestions() {
  const dId = TAXONOMIA.disciplinas.rlm;
  const ass = TAXONOMIA.assuntos;

  const raw = [
    // 1-5: Lógica Proposicional e Tabela-Verdade
    {
      idSlug: "rlm2-01",
      disciplina_id: dId,
      assunto_id: ass.logica_proposicional,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "facil",
      enunciado: "Considere a frase: 'O policial efetuou a prisão e o suspeito foi conduzido à delegacia'. Essa proposição composta é uma conjunção e será verdadeira se, e somente se, ambas as proposições simples que a compõem forem verdadeiras.",
      explicacao: "GABARITO: CERTO. A conjunção (P ∧ Q) é verdadeira exclusivamente quando ambas as proposições simples P e Q são simultaneamente verdadeiras.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Regra exata da tabela-verdade da conjunção (V ∧ V = V; nos demais casos é F)." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A conjunção exige a veracidade concomitante de todas as parcelas." }
      ]
    },
    {
      idSlug: "rlm2-02",
      disciplina_id: dId,
      assunto_id: ass.logica_proposicional,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "A proposição condicional 'Se o motorista ultrapassou a velocidade máxima, então ele será multado' é logicamente falsa somente na hipótese em que o antecedente é verdadeiro e o consequente é falso.",
      explicacao: "GABARITO: CERTO. A condicional (P → Q) é falsa apenas no caso 'V → F = F' (Vera Fischer é Falsa). Em todas as outras combinações (V→V, F→V, F→F) ela é verdadeira.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Tabela-verdade da condicional: única linha falsa é antecedente V e consequente F." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. P → Q é falsa unicamente quando P=V e Q=F." }
      ]
    },
    {
      idSlug: "rlm2-03",
      disciplina_id: dId,
      assunto_id: ass.logica_proposicional,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Investigador Policial",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Sejam as proposições P: 'O laudo pericial foi concluído' (V) e Q: 'O suspeito foi liberado' (F). O valor lógico da proposição composta P ↔ ~Q é:",
      explicacao: "GABARITO: Verdadeiro. Como Q é F, sua negação ~Q é V. A bicondicional P ↔ ~Q resulta em V ↔ V, cujo valor lógico é Verdadeiro.",
      alternativas: [
        { letra: "A", texto: "Verdadeiro.", correta: true, explicacao_especifica: "P é V e ~Q é V. Na bicondicional, V ↔ V = V." },
        { letra: "B", texto: "Falso.", correta: false, explicacao_especifica: "Incorreto, pois ambos os lados têm o mesmo valor lógico (Verdadeiro)." },
        { letra: "C", texto: "Contradição pura indeterminável.", correta: false, explicacao_especifica: "A proposição possui valor lógico definido e determinável." },
        { letra: "D", texto: "Inconclusivo por falta de premissas.", correta: false, explicacao_especifica: "Os valores lógicos foram plenamente atribuídos." },
        { letra: "E", texto: "Falso contingencialmente.", correta: false, explicacao_especifica: "O resultado é verdadeiro." }
      ]
    },
    {
      idSlug: "rlm2-04",
      disciplina_id: dId,
      assunto_id: ass.logica_proposicional,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Escrivão de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Uma proposição composta que resulta verdadeira para todas as possíveis combinações de valores lógicos de suas proposições simples componentes é classificada como:",
      explicacao: "GABARITO: Tautologia. Tautologia é uma proposição logicamente sempre verdadeira.",
      alternativas: [
        { letra: "A", texto: "Contradição.", correta: false, explicacao_especifica: "Contradição resulta sempre falsa em todas as linhas." },
        { letra: "B", texto: "Contingência.", correta: false, explicacao_especifica: "Contingência assume valores verdadeiros e falsos a depender das variáveis." },
        { letra: "C", texto: "Tautologia.", correta: true, explicacao_especifica: "Tautologia é a forma proposicional sempre verdadeira." },
        { letra: "D", texto: "Falácia formal simples.", correta: false, explicacao_especifica: "Falácia é um argumento inválido." },
        { letra: "E", texto: "Paradoxo lógico irresolúvel.", correta: false, explicacao_especifica: "Paradoxo é uma sentença que gera contradição lógica insolúvel." }
      ]
    },
    {
      idSlug: "rlm2-05",
      disciplina_id: dId,
      assunto_id: ass.logica_proposicional,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Perito Criminal Federal",
      ano: 2025,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "A proposição composta ~(P ∧ ~P) é uma tautologia, representando o Princípio da Não Contradição da lógica clássica bivalente.",
      explicacao: "GABARITO: CERTO. A conjunção (P ∧ ~P) é sempre uma contradição (F). Sua negação ~(P ∧ ~P) é, portanto, sempre verdadeira (V), constituindo uma tautologia clássica.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "A negação de uma contradição é sempre uma tautologia." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. ~(F) = V em todas as linhas, caracterizando tautologia." }
      ]
    },

    // 6-10: Equivalências e Negações Lógicas
    {
      idSlug: "rlm2-06",
      disciplina_id: dId,
      assunto_id: ass.equivalencias_negacoes,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "A negação lógica da proposição 'O perito colheu as digitais e o delegado lavrou o flagrante' é expressa corretamente por: 'O perito não colheu as digitais ou o delegado não lavrou o flagrante'.",
      explicacao: "GABARITO: CERTO. Pela Lei de De Morgan, a negação da conjunção ~(P ∧ Q) equivale logicamente a (~P ∨ ~Q) (nega a primeira, nega a segunda e troca 'e' por 'ou').",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Aplicação direta da 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A regra de negação do conectivo 'e' é negar ambas e trocar por 'ou'." }
      ]
    },
    {
      idSlug: "rlm2-07",
      disciplina_id: dId,
      assunto_id: ass.equivalencias_negacoes,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "A negação lógica da proposição condicional 'Se o agente investiga com rigor, então a quadrilha é desarticulada' é:",
      explicacao: "GABARITO: 'O agente investiga com rigor e a quadrilha não é desarticulada'. A regra de negação da condicional é o MANÉ (Mantém a primeira E Nega a segunda): ~(P → Q) ≡ P ∧ ~Q.",
      alternativas: [
        { letra: "A", texto: "Se o agente não investiga com rigor, então a quadrilha não é desarticulada.", correta: false, explicacao_especifica: "Inversa da condicional, não sua negação." },
        { letra: "B", texto: "O agente investiga com rigor e a quadrilha não é desarticulada.", correta: true, explicacao_especifica: "Regra da negação da condicional: ~(P → Q) ≡ P ∧ ~Q." },
        { letra: "C", texto: "Se a quadrilha foi desarticulada, então o agente investigou com rigor.", correta: false, explicacao_especifica: "Recíproca da condicional." },
        { letra: "D", texto: "O agente não investiga com rigor ou a quadrilha é desarticulada.", correta: false, explicacao_especifica: "Esta é uma equivalência de P → Q (~P ∨ Q), não a negação." },
        { letra: "E", texto: "A quadrilha não é desarticulada e o agente não investiga com rigor.", correta: false, explicacao_especifica: "Negação incorreta." }
      ]
    },
    {
      idSlug: "rlm2-08",
      disciplina_id: dId,
      assunto_id: ass.equivalencias_negacoes,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
      cargo_nome: "Delegado de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Uma proposição logicamente equivalente à condicional 'Se há indícios suficientes de autoria, então o juiz decreta a prisão preventiva' é:",
      explicacao: "GABARITO: Contrapositiva: 'Se o juiz não decreta a prisão preventiva, então não há indícios suficientes de autoria' (P → Q ≡ ~Q → ~P).",
      alternativas: [
        { letra: "A", texto: "Se o juiz decreta a prisão preventiva, então há indícios suficientes de autoria.", correta: false, explicacao_especifica: "Recíproca (não equivalente)." },
        { letra: "B", texto: "Se o juiz não decreta a prisão preventiva, então não há indícios suficientes de autoria.", correta: true, explicacao_especifica: "Contrapositiva clássica: P → Q ≡ ~Q → ~P." },
        { letra: "C", texto: "Não há indícios suficientes de autoria e o juiz decreta a prisão preventiva.", correta: false, explicacao_especifica: "Proposição distinta." },
        { letra: "D", texto: "Se não há indícios suficientes de autoria, então o juiz não decreta a prisão preventiva.", correta: false, explicacao_especifica: "Inversa (não equivalente)." },
        { letra: "E", texto: "Há indícios suficientes de autoria ou o juiz não decreta a prisão preventiva.", correta: false, explicacao_especifica: "Forma incorreta." }
      ]
    },
    {
      idSlug: "rlm2-09",
      disciplina_id: dId,
      assunto_id: ass.equivalencias_negacoes,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "A proposição 'Todos os policiais do batalhão participaram da operação' tem como negação lógica a sentença 'Nenhum policial do batalhão participou da operação'.",
      explicacao: "GABARITO: ERRADO. A negação do quantificador universal 'Todo A é B' é o quantificador existencial com negação: 'Existe pelo menos um policial do batalhão que não participou da operação' (ou 'Algum policial não participou'). 'Nenhum' é a contrária, não a contraditória (negação lógica).",
      alternativas: [
        { texto: "Certo", correta: false, explicacao_especifica: "Item incorreto. A negação de 'Todo' é 'Pelo menos um não', e não 'Nenhum'." },
        { texto: "Errado", correta: true, explicacao_especifica: "Gabarito Errado. Negação de quantificador universal afirmativo (Todo) é o existencial negativo (Algum ... não)." }
      ]
    },
    {
      idSlug: "rlm2-10",
      disciplina_id: dId,
      assunto_id: ass.equivalencias_negacoes,
      banca_nome: "Instituto AOCP",
      orgao_nome: "Polícia Penal do Distrito Federal (PP-DF)",
      cargo_nome: "Policial Penal",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "A negação da proposição disjuntiva 'O réu fugiu ou o comparsa mentiu' é dada por:",
      explicacao: "GABARITO: 'O réu não fugiu e o comparsa não mentiu'. Lei de De Morgan: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
      alternativas: [
        { letra: "A", texto: "O réu não fugiu ou o comparsa não mentiu.", correta: false, explicacao_especifica: "Não trocou o conectivo por 'e'." },
        { letra: "B", texto: "O réu não fugiu e o comparsa não mentiu.", correta: true, explicacao_especifica: "De Morgan: nega ambas as sentenças e troca 'ou' por 'e'." },
        { letra: "C", texto: "Se o réu fugiu, o comparsa não mentiu.", correta: false, explicacao_especifica: "Formulação condicional inválida como negação." },
        { letra: "D", texto: "O réu fugiu e o comparsa mentiu.", correta: false, explicacao_especifica: "Apenas trocou 'ou' por 'e' sem negar as proposições." },
        { letra: "E", texto: "Ou o réu não fugiu ou o comparsa mentiu.", correta: false, explicacao_especifica: "Disjunção exclusiva indevida." }
      ]
    },

    // 11-14: Análise Combinatória
    {
      idSlug: "rlm2-11",
      disciplina_id: dId,
      assunto_id: ass.analise_combinatoria,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Em uma delegacia há 8 policiais disponíveis para formar uma equipe tática composta por exatamente 3 membros. Nessa situação, o número de equipes distintas que podem ser formadas é superior a 50.",
      explicacao: "GABARITO: CERTO. A ordem dos membros na equipe não importa, logo trata-se de uma Combinação Simples de 8 tomados 3 a 3: C(8,3) = (8 × 7 × 6) / (3 × 2 × 1) = 56 equipes. Como 56 > 50, o item está correto.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "C(8,3) = 56 equipes distintas, valor estritamente superior a 50." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. O cálculo de C(8,3) resulta em 56 > 50." }
      ]
    },
    {
      idSlug: "rlm2-12",
      disciplina_id: dId,
      assunto_id: ass.analise_combinatoria,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Perito Criminal",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Para criar uma senha de segurança de 4 dígitos numéricos distintos (sem repetição de algarismos), utilizando apenas os algarismos de 1 a 6, o número total de senhas possíveis é igual a:",
      explicacao: "GABARITO: Arranjo simples de 6 elementos tomados 4 a 4: A(6,4) = 6 × 5 × 4 × 3 = 360 senhas.",
      alternativas: [
        { letra: "A", texto: "15", correta: false, explicacao_especifica: "Combinação C(6,4)=15, mas em senhas a ordem importa." },
        { letra: "B", texto: "120", correta: false, explicacao_especifica: "Cálculo incorreto." },
        { letra: "C", texto: "360", correta: true, explicacao_especifica: "Arranjo A(6,4) = 6 × 5 × 4 × 3 = 360." },
        { letra: "D", texto: "720", correta: false, explicacao_especifica: "6! = 720 (permutação de 6 elementos)." },
        { letra: "E", texto: "1.296", correta: false, explicacao_especifica: "6^4 = 1.296 (caso com repetição permitida)." }
      ]
    },
    {
      idSlug: "rlm2-13",
      disciplina_id: dId,
      assunto_id: ass.analise_combinatoria,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "Cinco viaturas policiais distintas (A, B, C, D e E) devem ser estacionadas em uma fileira com 5 vagas numeradas de 1 a 5. O número de maneiras diferentes pelas quais essas viaturas podem ser organizadas nessas vagas é:",
      explicacao: "GABARITO: Permutação simples de 5 elementos: P(5) = 5! = 5 × 4 × 3 × 2 × 1 = 120 maneiras.",
      alternativas: [
        { letra: "A", texto: "25", correta: false, explicacao_especifica: "5 × 5 = 25." },
        { letra: "B", texto: "60", correta: false, explicacao_especifica: "Cálculo incorreto." },
        { letra: "C", texto: "120", correta: true, explicacao_especifica: "P(5) = 5! = 120 maneiras." },
        { letra: "D", texto: "240", correta: false, explicacao_especifica: "Cálculo superestimado." },
        { letra: "E", texto: "720", correta: false, explicacao_especifica: "6! = 720." }
      ]
    },
    {
      idSlug: "rlm2-14",
      disciplina_id: dId,
      assunto_id: ass.analise_combinatoria,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "Considere um grupo de 4 delegados e 6 agentes. Deseja-se formar uma comissão de 4 membros contendo exatamente 2 delegados e 2 agentes. O total de comissões distintas que podem ser constituídas dessa forma é igual a 90.",
      explicacao: "GABARITO: CERTO. Escolha dos 2 delegados: C(4,2) = (4×3)/2 = 6. Escolha dos 2 agentes: C(6,2) = (6×5)/2 = 15. Pelo princípio multiplicativo: 6 × 15 = 90 comissões distintas.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "C(4,2) × C(6,2) = 6 × 15 = 90 comissões." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. O resultado exato do produto combinatório é 90." }
      ]
    },

    // 15-17: Probabilidade
    {
      idSlug: "rlm2-15",
      disciplina_id: dId,
      assunto_id: ass.probabilidade,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Em uma urna há 10 pastas de inquéritos, das quais 4 são sigilosas e 6 são públicas. Retirando-se aleatoriamente 2 pastas dessa urna, uma após a outra e sem reposição, a probabilidade de que ambas sejam sigilosas é igual a 2/15.",
      explicacao: "GABARITO: CERTO. P(1ª sigilosa) = 4/10 = 2/5. P(2ª sigilosa | 1ª sigilosa) = 3/9 = 1/3. Probabilidade conjunta = (4/10) × (3/9) = 12/90 = 2/15.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "(4/10) × (3/9) = 12/90 = 2/15. Cálculo exato." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A probabilidade condicional sem reposição resulta precisamente em 2/15." }
      ]
    },
    {
      idSlug: "rlm2-16",
      disciplina_id: dId,
      assunto_id: ass.probabilidade,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Médico Legista",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Um dado honesto convencional de 6 faces (numeradas de 1 a 6) é lançado duas vezes consecutivas. A probabilidade de a soma dos números obtidos ser igual a 7 é:",
      explicacao: "GABARITO: Espaço amostral total = 6 × 6 = 36 pares. Casos favoráveis de soma 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos. Probabilidade = 6/36 = 1/6.",
      alternativas: [
        { letra: "A", texto: "1/12", correta: false, explicacao_especifica: "3/36 = 1/12." },
        { letra: "B", texto: "1/6", correta: true, explicacao_especifica: "6 casos favoráveis em 36 = 6/36 = 1/6." },
        { letra: "C", texto: "7/36", correta: false, explicacao_especifica: "Contagem errônea." },
        { letra: "D", texto: "1/4", correta: false, explicacao_especifica: "9/36 = 1/4." },
        { letra: "E", texto: "5/36", correta: false, explicacao_especifica: "Casos de soma 6 ou 8." }
      ]
    },
    {
      idSlug: "rlm2-17",
      disciplina_id: dId,
      assunto_id: ass.probabilidade,
      banca_nome: "IBFC",
      orgao_nome: "Polícia Militar da Bahia (PM-BA)",
      cargo_nome: "Soldado PM",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "Em uma fiscalização policial de trânsito, 100 veículos foram abordados. Verificou-se que 20 estavam com documentação irregular e 10 apresentavam pneus carecas, sendo que 5 estavam com ambas as irregularidades. Escolhendo-se ao acaso um desses veículos, a probabilidade de ele apresentar pelo menos uma dessas duas irregularidades é:",
      explicacao: "GABARITO: Regra da união de eventos: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 20/100 + 10/100 - 5/100 = 25/100 = 25% (ou 1/4).",
      alternativas: [
        { letra: "A", texto: "15%", correta: false, explicacao_especifica: "Apenas 20 - 5 = 15%." },
        { letra: "B", texto: "25%", correta: true, explicacao_especifica: "20 + 10 - 5 = 25 veículos em 100 = 25%." },
        { letra: "C", texto: "30%", correta: false, explicacao_especifica: "Soma direta sem subtrair a interseção (20+10)." },
        { letra: "D", texto: "35%", correta: false, explicacao_especifica: "Cálculo incorreto." },
        { letra: "E", texto: "5%", correta: false, explicacao_especifica: "Esta é a probabilidade da interseção." }
      ]
    },

    // 18-20: Diagramas Lógicos e Teoria dos Conjuntos
    {
      idSlug: "rlm2-18",
      disciplina_id: dId,
      assunto_id: ass.diagramas_logicos,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Escrivão de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Considere verdadeiras as premissas: 'Todo perito criminal é concursado' e 'Nenhum concursado é preguiçoso'. A partir dessas premissas, conclui-se validamente que 'Nenhum perito criminal é preguiçoso'.",
      explicacao: "GABARITO: CERTO. Por diagramas lógicos: o conjunto dos peritos criminais está totalmente contido no conjunto dos concursados (P ⊂ C). O conjunto dos concursados é disjunto do conjunto dos preguiçosos (C ∩ Pg = ∅). Logo, o conjunto dos peritos também é disjunto dos preguiçosos (P ∩ Pg = ∅), concluindo-se 'Nenhum perito é preguiçoso'.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Silogismo categórico válido modo Celarent (EAE-1): Todo A é B; Nenhum B é C; logo Nenhum A é C." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A dedução lógica por diagramas de Venn é categórica e incontestável." }
      ]
    },
    {
      idSlug: "rlm2-19",
      disciplina_id: dId,
      assunto_id: ass.diagramas_logicos,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Em uma delegacia especializada, sabe-se que: 'Alguns investigadores falam inglês' e 'Todos os investigadores que falam inglês também dominam informática forense'. Com base unicamente nessas afirmações, é necessariamente correto afirmar que:",
      explicacao: "GABARITO: Alguns investigadores dominam informática forense.",
      alternativas: [
        { letra: "A", texto: "Todos os investigadores dominam informática forense.", correta: false, explicacao_especifica: "Generalização indevida além das premissas." },
        { letra: "B", texto: "Nenhum investigador domina informática forense.", correta: false, explicacao_especifica: "Contradiz as premissas." },
        { letra: "C", texto: "Alguns investigadores dominam informática forense.", correta: true, explicacao_especifica: "Se alguns falam inglês e todos que falam inglês dominam informática, esse grupo que fala inglês domina informática forense." },
        { letra: "D", texto: "Quem não é investigador não domina informática forense.", correta: false, explicacao_especifica: "Nada foi afirmado sobre quem não é investigador." },
        { letra: "E", texto: "Todos os que dominam informática forense são investigadores.", correta: false, explicacao_especifica: "Conversão inválida do quantificador universal." }
      ]
    },
    {
      idSlug: "rlm2-20",
      disciplina_id: dId,
      assunto_id: ass.diagramas_logicos,
      banca_nome: "Instituto AOCP",
      orgao_nome: "Guarda Municipal de Curitiba (GM-Curitiba)",
      cargo_nome: "Guarda Municipal",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "Em um grupo de 50 guardas municipais, 30 praticam tiro defensivo, 25 praticam defesa pessoal e 15 praticam ambas as modalidades. Quantos guardas desse grupo não praticam nenhuma dessas duas modalidades?",
      explicacao: "GABARITO: N(Tiro ∪ Defesa) = 30 + 25 - 15 = 40 guardas praticam ao menos uma modalidade. Logo, os que não praticam nenhuma = 50 - 40 = 10 guardas.",
      alternativas: [
        { letra: "A", texto: "5", correta: false, explicacao_especifica: "Cálculo incorreto." },
        { letra: "B", texto: "10", correta: true, explicacao_especifica: "Total união = 40. Complementar = 50 - 40 = 10 guardas." },
        { letra: "C", texto: "15", correta: false, explicacao_especifica: "15 é o número dos que praticam ambas." },
        { letra: "D", texto: "20", correta: false, explicacao_especifica: "Cálculo errôneo." },
        { letra: "E", texto: "25", correta: false, explicacao_especifica: "Cálculo errôneo." }
      ]
    }
  ];

  const outputPath = path.resolve(process.cwd(), "scripts/batch2_modules/rlm.mjs");
  fs.writeFileSync(outputPath, `export const rlmQuestions = ${JSON.stringify(raw, null, 2)};\n`, "utf8");
  console.log(`[✓] RLM: 20 questões geradas em ${outputPath}`);
}

generateRlmQuestions();
