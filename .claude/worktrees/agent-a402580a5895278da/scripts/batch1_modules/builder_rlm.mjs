import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./taxonomia.mjs";

export function generateRLMQuestions() {
  const dId = TAXONOMIA.disciplinas.rlm;
  const ass = TAXONOMIA.assuntos;

  const raw = [
    // 1-6: Proposições e Conectivos
    {
      idSlug: "rlm-01",
      disciplina_id: dId,
      assunto_id: ass.logica_proposicional,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "facil",
      enunciado: "A sentença 'O agente da Polícia Federal apreendeu o carregamento de entorpecentes e conduziu os suspeitos à delegacia' é uma proposição composta formada pela conjunção de duas proposições simples.",
      explicacao: "GABARITO: CERTO. Temos duas orações declarativas com sentido completo conectadas pelo conectivo 'e' (conjunção ∧): P = 'O agente da Polícia Federal apreendeu o carregamento de entorpecentes' e Q = 'O agente conduziu os suspeitos à delegacia'.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Trata-se de uma proposição composta conjuntiva (P ∧ Q)." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. A sentença é tipicamente uma proposição lógica composta." }
      ]
    },
    {
      idSlug: "rlm-02",
      disciplina_id: dId,
      assunto_id: ass.logica_proposicional,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Escrivão de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "Assinale a alternativa que apresenta uma sentença que NÃO pode ser classificada como uma proposição lógica:",
      explicacao: "GABARITO: Letra A ('Feche a porta da delegacia imediatamente!'). Sentenças imperativas (ordens), interrogativas, exclamativas e optativas não possuem valor lógico verdadeiro ou falso, não sendo proposições.",
      alternativas: [
        { letra: "A", texto: "Feche a porta da delegacia imediatamente!", correta: true, explicacao_especifica: "Frase imperativa (ordem); não expressa valor lógico V ou F." },
        { letra: "B", texto: "O suspeito foi preso em flagrante delito no aeroporto.", correta: false, explicacao_especifica: "Sentença declarativa fechada com sentido completo (proposição)." },
        { letra: "C", texto: "Todo crime hediondo é inafiançável.", correta: false, explicacao_especifica: "Sentença declarativa passível de juízo de valor (proposição)." },
        { letra: "D", texto: "A viatura policial percorreu 150 quilômetros durante a ronda.", correta: false, explicacao_especifica: "Sentença declarativa com predicado determinado (proposição)." },
        { letra: "E", texto: "A perícia papiloscópica identificou três impressões digitais.", correta: false, explicacao_especifica: "Sentença declarativa com valor de verdade verificável (proposição)." }
      ]
    },
    {
      idSlug: "rlm-03",
      disciplina_id: dId,
      assunto_id: ass.logica_proposicional,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "A tabela-verdade de uma proposição composta contendo exatamente 4 proposições simples distintas possui 16 linhas.",
      explicacao: "GABARITO: CERTO. O número de linhas da tabela-verdade de uma proposição composta é dado pela fórmula 2^n, em que n é o número de proposições simples componentes. Para n = 4, temos 2^4 = 16 linhas.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Fórmula 2^n: com n = 4 proposições simples, 2^4 = 16 linhas." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. O número exato de linhas é 2^4 = 16." }
      ]
    },
    {
      idSlug: "rlm-04",
      disciplina_id: dId,
      assunto_id: ass.logica_proposicional,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Investigador Policial",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Considere verdadeiras as seguintes afirmações:\n1. Se o alarme dispara, então a viatura é acionada.\n2. Se a viatura é acionada, os agentes chegam em menos de 5 minutos.\n3. O alarme disparou.\nA partir dessas premissas, é correto concluir logicamente que:",
      explicacao: "GABARITO: Os agentes chegaram em menos de 5 minutos. Pelo Modus Ponens encadeado (silogismo hipotético): Alarme → Viatura; Viatura → Menos de 5 min. Como Alarme é V, conclui-se necessariamente que os agentes chegam em menos de 5 minutos.",
      alternativas: [
        { letra: "A", texto: "Os agentes não chegaram em menos de 5 minutos.", correta: false, explicacao_especifica: "Contradiz a dedução lógica." },
        { letra: "B", texto: "A viatura não foi acionada.", correta: false, explicacao_especifica: "Como o alarme disparou, a viatura foi acionada por modus ponens." },
        { letra: "C", texto: "Os agentes chegam em menos de 5 minutos.", correta: true, explicacao_especifica: "Conclusão válida por transitividade condicional e afirmação do antecedente." },
        { letra: "D", texto: "O alarme disparou mas não houve invasão.", correta: false, explicacao_especifica: "Não há dados sobre invasão nas premissas." },
        { letra: "E", texto: "A viatura chegou atrasada em mais de 10 minutos.", correta: false, explicacao_especifica: "Falsa conclusão incompatível com as premissas." }
      ]
    },
    {
      idSlug: "rlm-05",
      disciplina_id: dId,
      assunto_id: ass.logica_proposicional,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Papiloscopista Policial Federal",
      ano: 2023,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Uma proposição composta é dita uma 'tautologia' quando seu valor lógico é sempre verdadeiro, independentemente dos valores lógicos atribuídos às suas proposições simples componentes.",
      explicacao: "GABARITO: CERTO. Tautologia: sempre V em todas as linhas. Contradição: sempre F em todas as linhas. Contingência: assume valores V e F a depender das valorações.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Definição formal de tautologia na lógica matemática." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. Tautologia é a proposição cujo valor lógico final é invariavelmente verdadeiro." }
      ]
    },
    {
      idSlug: "rlm-06",
      disciplina_id: dId,
      assunto_id: ass.logica_proposicional,
      banca_nome: "IBFC",
      orgao_nome: "Polícia Penal do Estado de Minas Gerais",
      cargo_nome: "Policial Penal",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "A proposição condicional 'P → Q' (Se P, então Q) assume valor lógico FALSO exclusivamente quando:",
      explicacao: "GABARITO: P for verdadeiro e Q for falso (a famosa regra 'Vera Fischer é Falsa'). Em todos os demais casos (V→V, F→V, F→F), a condicional é verdadeira.",
      alternativas: [
        { letra: "A", texto: "P for falso e Q for falso.", correta: false, explicacao_especifica: "F → F resulta em Verdadeiro." },
        { letra: "B", texto: "P for verdadeiro e Q for falso.", correta: true, explicacao_especifica: "V → F é o único caso em que a condicional se torna Falsa." },
        { letra: "C", texto: "P for falso e Q for verdadeiro.", correta: false, explicacao_especifica: "F → V resulta em Verdadeiro." },
        { letra: "D", texto: "P for verdadeiro e Q for verdadeiro.", correta: false, explicacao_especifica: "V → V resulta em Verdadeiro." },
        { letra: "E", texto: "P for equivalente a Q.", correta: false, explicacao_especifica: "Se ambos têm o mesmo valor, P → Q é Verdadeiro." }
      ]
    },

    // 7-12: Equivalências e Negações Lógicas (De Morgan)
    {
      idSlug: "rlm-07",
      disciplina_id: dId,
      assunto_id: ass.equivalencias_negacoes,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Escrivão de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "A negação lógica da proposição 'O policial atirou e o criminoso fugiu' é expressa por 'O policial não atirou ou o criminoso não fugiu'.",
      explicacao: "GABARITO: CERTO. Pela Lei de De Morgan, a negação de uma conjunção (P ∧ Q) é a disjunção das negações (~P ∨ ~Q): nega-se a primeira, troca-se 'e' por 'ou' e nega-se a segunda.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Aplicação exata da 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. A negação lógica de 'P e Q' é 'não P ou não Q'." }
      ]
    },
    {
      idSlug: "rlm-08",
      disciplina_id: dId,
      assunto_id: ass.equivalencias_negacoes,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "A negação lógica da proposição condicional 'Se o suspeito confessar o crime, então o juiz concederá a liberdade provisória' é dada por:",
      explicacao: "GABARITO: A negação de uma condicional P → Q é dada pela regra do 'MANÉ' (Mantém a primeira e Nega a segunda: P ∧ ~Q). Portanto: 'O suspeito confessa o crime e o juiz não concede a liberdade provisória'.",
      alternativas: [
        { letra: "A", texto: "Se o suspeito não confessar o crime, então o juiz não concederá a liberdade provisória.", correta: false, explicacao_especifica: "Isto é a inversa (~P → ~Q), não a negação." },
        { letra: "B", texto: "O suspeito confessou o crime e o juiz não concedeu a liberdade provisória.", correta: true, explicacao_especifica: "Negação de P → Q: P ∧ ~Q (mantém a primeira e nega a segunda)." },
        { letra: "C", texto: "O suspeito não confessou o crime ou o juiz concedeu a liberdade provisória.", correta: false, explicacao_especifica: "Esta é uma equivalência (~P ∨ Q), não a negação." },
        { letra: "D", texto: "Se o juiz não conceder a liberdade provisória, então o suspeito não confessou o crime.", correta: false, explicacao_especifica: "Esta é a contrapositiva (~Q → ~P), que é equivalente." },
        { letra: "E", texto: "O suspeito não confessou o crime e o juiz não concedeu a liberdade provisória.", correta: false, explicacao_especifica: "Nega ambas as proposições incorretamente." }
      ]
    },
    {
      idSlug: "rlm-09",
      disciplina_id: dId,
      assunto_id: ass.equivalencias_negacoes,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2023,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "A proposição condicional 'Se o motorista ingeriu álcool, então ele será multado' é logicamente equivalente à sua contrapositiva: 'Se o motorista não foi multado, então ele não ingeriu álcool'.",
      explicacao: "GABARITO: CERTO. A contraposição afirma que P → Q é logicamente equivalente a ~Q → ~P (inverte-se a ordem das proposições e negam-se ambas).",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Equivalência lógica por contraposição: P → Q ≡ ~Q → ~P." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. A contrapositiva preserva perfeitamente a tabela-verdade da condicional." }
      ]
    },
    {
      idSlug: "rlm-10",
      disciplina_id: dId,
      assunto_id: ass.equivalencias_negacoes,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Delegado de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Uma proposição logicamente equivalente a 'Ou o mandado de busca é expedido ou a operação será cancelada' (disjunção exclusiva: P ⊻ Q) é:",
      explicacao: "GABARITO: A disjunção exclusiva (P ⊻ Q) é logicamente equivalente à negação da bicondicional: ~(P ↔ Q) ou (P ∧ ~Q) ∨ (~P ∧ Q).",
      alternativas: [
        { letra: "A", texto: "O mandado de busca é expedido e a operação será cancelada.", correta: false, explicacao_especifica: "Conjunção não equivale a 'ou... ou'." },
        { letra: "B", texto: "O mandado de busca é expedido se, e somente se, a operação não for cancelada.", correta: true, explicacao_especifica: "P ⊻ Q é equivalente a P ↔ ~Q (bicondicional com um lado negado)." },
        { letra: "C", texto: "Se o mandado for expedido, a operação será cancelada.", correta: false, explicacao_especifica: "Condicional simples não equivale a disjunção exclusiva." },
        { letra: "D", texto: "O mandado não foi expedido e a operação não foi cancelada.", correta: false, explicacao_especifica: "Negação simultânea que tornaria a disjunção exclusiva falsa." },
        { letra: "E", texto: "A operação será cancelada somente se o mandado for expedido.", correta: false, explicacao_especifica: "Sentença condicional assimétrica." }
      ]
    },
    {
      idSlug: "rlm-11",
      disciplina_id: dId,
      assunto_id: ass.equivalencias_negacoes,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "A negação lógica da proposição quantificada 'Todo policial federal possui porte de arma' é 'Nenhum policial federal possui porte de arma'.",
      explicacao: "GABARITO: ERRADO. A negação do quantificador universal afirmativo 'Todo A é B' é feita pelo quantificador existencial: 'Algum A não é B' (ou 'Existe pelo menos um A que não é B' / 'Pelo menos um policial federal não possui porte de arma'). 'Nenhum' é a proposição contrária, mas não a sua negação lógica contraditória.",
      alternativas: [
        { texto: "Certo", correta: false, explicacao_especifica: "Item incorreto. A negação de 'Todo' é 'Algum... não', e não 'Nenhum'." },
        { texto: "Errado", correta: true, explicacao_especifica: "Gabarito Errado. A negação de 'Todo A é B' é 'Existe pelo menos um A que não é B'." }
      ]
    },
    {
      idSlug: "rlm-12",
      disciplina_id: dId,
      assunto_id: ass.equivalencias_negacoes,
      banca_nome: "INSTITUTO AOCP",
      orgao_nome: "Polícia Civil de Goiás (PC-GO)",
      cargo_nome: "Agente de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "A negação lógica da proposição 'Existe pelo menos um investigado foragido' é:",
      explicacao: "GABARITO: A negação de uma proposição particular afirmativa ('Existe algum / Pelo menos um') é a universal negativa ('Nenhum investigado está foragido' / 'Todo investigado não está foragido').",
      alternativas: [
        { letra: "A", texto: "Todos os investigados estão foragidos.", correta: false, explicacao_especifica: "Generalização afirmativa incorreta." },
        { letra: "B", texto: "Nenhum investigado está foragido.", correta: true, explicacao_especifica: "Negação correta do quantificador existencial pelo universal negativo." },
        { letra: "C", texto: "Existe algum investigado preso.", correta: false, explicacao_especifica: "Não é a negação contraditória rigorosa." },
        { letra: "D", texto: "A maioria dos investigados está foragida.", correta: false, explicacao_especifica: "Quantificador indefinido." },
        { letra: "E", texto: "Dois investigados não estão foragidos.", correta: false, explicacao_especifica: "Quantificação numérica restrita." }
      ]
    },

    // 13-16: Análise Combinatória e Contagem
    {
      idSlug: "rlm-13",
      disciplina_id: dId,
      assunto_id: ass.analise_combinatoria,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Perito Criminal Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Em uma delegacia há 7 investigadores disponíveis. Para formar uma equipe tática composta por 4 desses investigadores, a quantidade de equipes distintas que podem ser formadas é superior a 30.",
      explicacao: "GABARITO: CERTO. Como a ordem dos membros na equipe não altera o grupo formado, trata-se de uma Combinação Simples C(7, 4) = 7! / (4! × 3!) = (7 × 6 × 5) / (3 × 2 × 1) = 35 equipes distintas. Como 35 > 30, o item está CERTO.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "C(7,4) = 35 equipes distintas, o que é superior a 30." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O cálculo resulta em exatamente 35 comissões (> 30)." }
      ]
    },
    {
      idSlug: "rlm-14",
      disciplina_id: dId,
      assunto_id: ass.analise_combinatoria,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Para criar uma senha de segurança de 4 dígitos distintos utilizando apenas os algarismos 1, 2, 3, 4, 5 e 6, o número total de senhas possíveis que podem ser criadas é:",
      explicacao: "GABARITO: Como a ordem dos dígitos importa na senha e os algarismos devem ser distintos, trata-se de um Arranjo Simples A(6, 4) = 6 × 5 × 4 × 3 = 360 senhas distintas.",
      alternativas: [
        { letra: "A", texto: "15", correta: false, explicacao_especifica: "Cálculo de combinação simples C(6,4)." },
        { letra: "B", texto: "120", correta: false, explicacao_especifica: "Cálculo de A(6,3)." },
        { letra: "C", texto: "360", correta: true, explicacao_especifica: "Arranjo simples: 6 × 5 × 4 × 3 = 360 senhas distintas." },
        { letra: "D", texto: "720", correta: false, explicacao_especifica: "Permutação de 6 elementos (6!)." },
        { letra: "E", texto: "1.296", correta: false, explicacao_especifica: "Arranjo com repetição (6^4)." }
      ]
    },
    {
      idSlug: "rlm-15",
      disciplina_id: dId,
      assunto_id: ass.analise_combinatoria,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2023,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "O número de anagramas distintos que podem ser formados com todas as letras da palavra 'POLICIA' (desconsiderando acentuação) é igual a 2.520.",
      explicacao: "GABARITO: CERTO. A palavra 'POLICIA' tem 7 letras no total, com repetição da letra 'I' (2 vezes) e da letra 'O', 'P', 'L', 'C', 'A' (1 vez cada). Permutação com repetição: P_7^(2) = 7! / 2! = (7 × 6 × 5 × 4 × 3 × 2 × 1) / 2 = 5.040 / 2 = 2.520 anagramas.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "P_7^(2) = 7! / 2! = 5040 / 2 = 2520 anagramas distintos." },
        { texto: "Errado", correta: false, explicacao_especifica: "Item incorreto. O cálculo de permutação com repetição da letra 'I' resulta exatamente em 2.520." }
      ]
    },
    {
      idSlug: "rlm-16",
      disciplina_id: dId,
      assunto_id: ass.analise_combinatoria,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil de Minas Gerais (PC-MG)",
      cargo_nome: "Escrivão de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Em uma delegacia, há 5 delegados e 8 escrivães. Quantas comissões distintas compostas por 2 delegados e 3 escrivães podem ser formadas?",
      explicacao: "GABARITO: Escolha dos delegados: C(5, 2) = (5 × 4) / 2 = 10. Escolha dos escrivães: C(8, 3) = (8 × 7 × 6) / (3 × 2 × 1) = 56. Pelo princípio fundamental da contagem: 10 × 56 = 560 comissões.",
      alternativas: [
        { letra: "A", texto: "66", correta: false, explicacao_especifica: "Soma das combinações em vez do produto." },
        { letra: "B", texto: "280", correta: false, explicacao_especifica: "Cálculo parcial." },
        { letra: "C", texto: "560", correta: true, explicacao_especifica: "C(5,2) × C(8,3) = 10 × 56 = 560 comissões distintas." },
        { letra: "D", texto: "1.120", correta: false, explicacao_especifica: "Valor dobrado." },
        { letra: "E", texto: "3.360", correta: false, explicacao_especifica: "Cálculo por arranjos em vez de combinações." }
      ]
    },

    // 17-18: Probabilidade
    {
      idSlug: "rlm-17",
      disciplina_id: dId,
      assunto_id: ass.probabilidade,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Em um lote com 20 armas de fogo apreendidas, sabe-se que 4 apresentam defeito no mecanismo de disparo. Retirando-se aleatoriamente 1 arma desse lote, a probabilidade de ela NÃO apresentar defeito é igual a 80%.",
      explicacao: "GABARITO: CERTO. Armas sem defeito = 20 - 4 = 16. Probabilidade = 16 / 20 = 4 / 5 = 0,80 = 80%.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "P(sem defeito) = 16/20 = 80%." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A probabilidade do evento complementar é exatamente 16/20 = 80%." }
      ]
    },
    {
      idSlug: "rlm-18",
      disciplina_id: dId,
      assunto_id: ass.probabilidade,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Escrivão de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Uma urna contém 5 cartuchos de calibre .40 e 3 cartuchos de calibre 9mm. Retirando-se simultaneamente e ao acaso 2 cartuchos dessa urna, a probabilidade de que ambos sejam de calibre .40 é de:",
      explicacao: "GABARITO: Total de cartuchos = 8. Número total de maneiras de retirar 2 cartuchos: C(8, 2) = (8 × 7) / 2 = 28. Maneiras de retirar 2 cartuchos de calibre .40: C(5, 2) = (5 × 4) / 2 = 10. Probabilidade = 10 / 28 = 5 / 14 (aproximadamente 35,7%).",
      alternativas: [
        { letra: "A", texto: "5/28", correta: false, explicacao_especifica: "Fração incorreta." },
        { letra: "B", texto: "5/14", correta: true, explicacao_especifica: "P = C(5,2) / C(8,2) = 10 / 28 = 5/14." },
        { letra: "C", texto: "15/56", correta: false, explicacao_especifica: "Probabilidade de 1 de cada calibre." },
        { letra: "D", texto: "3/28", correta: false, explicacao_especifica: "Probabilidade de ambos serem 9mm: C(3,2)/28 = 3/28." },
        { letra: "E", texto: "1/2", correta: false, explicacao_especifica: "Razão não correspondente ao cálculo combinatório." }
      ]
    },

    // 19-20: Diagramas Lógicos e Conjuntos
    {
      idSlug: "rlm-19",
      disciplina_id: dId,
      assunto_id: ass.diagramas_logicos,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Papiloscopista Policial Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Considere as seguintes premissas: 'Todo perito criminal é graduado em curso superior' e 'Alguns peritos criminais são químicos'. A partir dessas premissas, conclui-se logicamente que 'Alguns graduados em curso superior são químicos'.",
      explicacao: "GABARITO: CERTO. Seja P o conjunto dos peritos criminais, G o conjunto dos graduados em curso superior e Q o conjunto dos químicos. Como P ⊆ G e P ∩ Q ≠ ∅, então necessariamente (P ∩ Q) ⊆ (G ∩ Q), logo G ∩ Q ≠ ∅ ('Alguns graduados são químicos').",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Conclusão logicamente válida pelo diagrama de Venn dos conjuntos." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A intersecção não vazia entre Peritos e Químicos garante a intersecção entre Graduados e Químicos." }
      ]
    },
    {
      idSlug: "rlm-20",
      disciplina_id: dId,
      assunto_id: ass.diagramas_logicos,
      banca_nome: "IBFC",
      orgao_nome: "Polícia Civil da Bahia (PC-BA)",
      cargo_nome: "Investigador de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "Em um grupo de 100 policiais, sabe-se que 60 operam fuzil, 50 operam pistola e 20 operam ambos os armamentos. Quantos policiais desse grupo NÃO operam nenhum desses dois armamentos?",
      explicacao: "GABARITO: Pelo princípio da inclusão-exclusão: n(F ∪ P) = n(F) + n(P) - n(F ∩ P) = 60 + 50 - 20 = 90. Policiais que não operam nenhum dos dois = 100 - 90 = 10 policiais.",
      alternativas: [
        { letra: "A", texto: "5", correta: false, explicacao_especifica: "Cálculo incorreto." },
        { letra: "B", texto: "10", correta: true, explicacao_especifica: "100 - (60 + 50 - 20) = 100 - 90 = 10." },
        { letra: "C", texto: "15", correta: false, explicacao_especifica: "Subtração errada." },
        { letra: "D", texto: "20", correta: false, explicacao_especifica: "20 é o número de policiais que operam ambos." },
        { letra: "E", texto: "30", correta: false, explicacao_especifica: "Valor discrepante do diagrama de Venn." }
      ]
    }
  ];

  const outputPath = path.resolve(process.cwd(), "scripts/batch1_modules/rlm.mjs");
  fs.writeFileSync(outputPath, `export const rlmQuestions = ${JSON.stringify(raw, null, 2)};\n`, "utf8");
  console.log(`[+] RLM gerado com ${raw.length} questões.`);
  return raw;
}

generateRLMQuestions();
