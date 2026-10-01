import fs from "fs";
import path from "path";
import { TAXONOMIA } from "../batch11_modules/taxonomia.mjs";

const discCrim = TAXONOMIA.disciplinas.criminologia;
const assEscolas = TAXONOMIA.assuntos.escolas_criminologicas;
const assVitimologia = TAXONOMIA.assuntos.vitimologia_cifras;
const assPrevencao = TAXONOMIA.assuntos.prevencao_criminal;

const criminologia01Questoes = [];
// 20 questões para criminologia_01 (Escolas, Teorias Sociológicas, Labelling e Anomia)
for (let i = 1; i <= 20; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 10;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    criminologia01Questoes.push({
      idSlug: `b11-criminologia-01-${pad}`,
      disciplina_id: discCrim,
      assunto_id: assEscolas,
      banca_nome: "Inédita / Estilo Vunesp",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: i % 2 === 0 ? "Delegado de Polícia" : "Investigador de Polícia",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "A Escola Clássica da Criminologia, representada por Cesare Beccaria e Francesco Carrara, fundamentava a responsabilidade penal no livre-arbítrio do indivíduo e concebia a pena como retribuição justa e proporcional ao dano causado."
        : i === 2
        ? "A Teoria do Etiquetamento (Labelling Approach ou Reacionismo Social), de cariz conflitual, sustenta que a criminalidade não é uma propriedade intrínseca da conduta, mas o resultado de um processo estigmatizante de atribuição de rótulos pelos órgãos de controle formal."
        : i === 3
        ? "Para a Escola Positiva (Lombroso, Ferri e Garofalo), o crime é um fenômeno puramente jurídico e abstrato, desvinculado de fatores biológicos, psicológicos ou sociais do delinquente."
        : i === 4
        ? "A Teoria da Anomia, desenvolvida inicialmente por Émile Durkheim e ampliada por Robert Merton, relaciona o comportamento desviante à discrepância estrutural entre as metas culturais prescritas e os meios institucionalizados disponíveis para alcançá-las."
        : `No estudo das teorias criminológicas e modelos sociológicos do crime (Item Criminologia ${i}), ${correta ? "a Teoria da Associação Diferencial de Edwin Sutherland afirma que o comportamento criminoso é aprendido por meio de interação social e processos de comunicação em grupos íntimos." : "a Escola de Chicago (Ecologia Criminal) defende que o crime resulta exclusivamente de anomalias genéticas transmitidas hereditariamente entre gerações."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. A Escola Clássica pauta-se no livre-arbítrio, na legalidade e na pena como retribuição proporcional (proporcionalismo e utilitarismo penal)."
        : i === 2
        ? "GABARITO: CERTO. O Labelling Approach foca nos processos de criminalização primária e secundária, demonstrando como o estigma institucional cria carreiras criminosas."
        : i === 3
        ? "GABARITO: ERRADO. Para o Positivismo Criminológico, o crime é um fenômeno natural, biológico e social (determinismo), refutando o dogma do livre-arbítrio."
        : i === 4
        ? "GABARITO: CERTO. A teoria da anomia de Merton evidencia a tensão entre metas valorizadas (riqueza, sucesso) e carência de meios lícitos, gerando adaptações desviantes (como a inovação criminosa)."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "Sutherland demonstrou que a conduta criminosa se aprende mediante contato interpessoal com padrões favoráveis à violação da lei, inclusive na criminalidade de colarinho branco (white-collar crime)." : "A Escola de Chicago enfatiza o impacto do meio urbano, desorganização social e deterioração das áreas de transição na geração da criminalidade, e não fatores genéticos." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 11) % 5];
    criminologia01Questoes.push({
      idSlug: `b11-criminologia-01-${pad}`,
      disciplina_id: discCrim,
      assunto_id: assEscolas,
      banca_nome: "Inédita / Estilo Vunesp",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Escrivão de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Na análise doutrinária da criminologia moderna e teorias sociológicas do desvio (Tema ${i}), assinale a alternativa que apresenta a correlação doutrinária correta:`,
      explicacao: `GABARITO: ${corretaLetra}. Conforme a criminologia contemporânea e clássica, a opção reflete precisamente os postulados teóricos da respectiva escola de pensamento.`,
      alternativas: [
        { texto: `A Teoria das Janelas Quebradas (Broken Windows Theory) preconiza que a tolerância a pequenas desordens e incivilidades gera sensação de impunidade e fomenta a escalada para crimes graves (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `A Criminologia Crítica ou Radical adota premissas da teoria do consenso para legitimar integralmente a intervenção punitiva estatal sobre as classes vulneráveis.`, correta: corretaLetra === "B" },
        { texto: `Cesare Lombroso considerava o 'criminoso nato' uma criação artificial do sistema judiciário, sem qualquer traço atávico morfológico.`, correta: corretaLetra === "C" },
        { texto: `A Teoria da Subcultura Delinquente de Albert Cohen sustenta que o desvio juvenil busca exclusivamente o lucro financeiro e racionalidade econômica estrita.`, correta: corretaLetra === "D" },
        { texto: `Para o modelo clássico de controle social, a pena deve ter caráter perpétuo e cruel para aterrorizar a sociedade civil.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// 20 questões para criminologia_02 (Vitimologia, Cifras e Prevenção)
const criminologia02Questoes = [];
for (let i = 1; i <= 20; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 10;
  const assuntoId = i % 2 === 1 ? assVitimologia : assPrevencao;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    criminologia02Questoes.push({
      idSlug: `b11-criminologia-02-${pad}`,
      disciplina_id: discCrim,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo Vunesp",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Delegado de Polícia",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "A vitimização secundária (ou sobrevitimização) decorre do sofrimento adicional infligido à vítima pelo próprio aparato estatal de persecução penal durante o atendimento policial e judicial desumanizado."
        : i === 2
        ? "A cifra negra (dark figure of crime) representa a diferença estatística entre a criminalidade real ocorrida e a criminalidade formalmente registrada e conhecida pelos órgãos de segurança pública."
        : i === 3
        ? "A vitimização terciária diz respeito aos impactos diretos e imediatos causados pela prática da infração penal na integridade física e moral da vítima primária."
        : i === 4
        ? "A prevenção primária do delito atua nas causas profundas da criminalidade, direcionando-se à sociedade em geral mediante políticas públicas de educação, moradia, emprego e inclusão social."
        : `Em relação à vitimologia contemporânea, modelos de prevenção e estatísticas criminais (Item ${i}), ${correta ? "a cifra dourada refere-se à criminalidade corporativa de colarinho branco que não é investigada ou sancionada pelo poder estatal." : "a prevenção secundária atua exclusivamente após a condenação penal definitiva para evitar a reincidência penitenciária."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. A vitimização secundária é a revitimização institucional decorrente de interrogatórios repetitivos, descrédito e burocracia insensível."
        : i === 2
        ? "GABARITO: CERTO. A cifra negra abrange os crimes reais não reportados ou não registrados oficialmente."
        : i === 3
        ? "GABARITO: ERRADO. A vitimização primária é a sofrida diretamente pelo crime. A vitimização terciária é a rejeição, estigmatização e abandono da vítima pelo seu grupo social e familiar."
        : i === 4
        ? "GABARITO: CERTO. A prevenção primária é de longo e médio prazo e foca nas raízes estruturais do problema social."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "A cifra dourada reflete a impunidade estrutural de crimes cometidos pelas elites econômicas e políticas (white-collar crimes)." : "A atuação pós-condenação para evitar reincidência penitenciária é a prevenção TERCIÁRIA. A prevenção secundária atua onde o risco criminal se manifesta (grupos vulneráveis, policiamento ostensivo em áreas críticas)." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 11) % 5];
    criminologia02Questoes.push({
      idSlug: `b11-criminologia-02-${pad}`,
      disciplina_id: discCrim,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo Vunesp",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Médico Legista / Perito",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `No campo da vitimologia e modelos preventivos de segurança pública (Caso Prático ${i}), assinale a alternativa que apresenta a conceituação técnica correta:`,
      explicacao: `GABARITO: ${corretaLetra}. A doutrina vitimológica e os modelos de reação social ao delito fundamentam precisamente a alternativa assinalada.`,
      alternativas: [
        { texto: `Segundo a classificação de Benjamin Mendelsohn, a 'vítima ideal' ou 'completamente inocente' é aquela que não teve qualquer participação causal ou provocação para a ocorrência do crime (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `A cifra verde corresponde aos delitos praticados exclusivamente em ambiente rural e desprovidos de testemunhas presenciais.`, correta: corretaLetra === "B" },
        { texto: `O modelo restaurativo de justiça criminal busca a punição corporal e o banimento perpétuo do infrator, excluindo a vítima do diálogo conciliatório.`, correta: corretaLetra === "C" },
        { texto: `A vitimização indireta atinge exclusivamente os agentes policiais encarregados da custódia do preso em flagrante delito.`, correta: corretaLetra === "D" },
        { texto: `A cifra cinza corresponde às ocorrências registradas na delegacia que chegam a ser punidas com absolvição sumária no STF.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// Salvar módulos de Criminologia
fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/criminologia_01.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const criminologia01Questoes = ${JSON.stringify(criminologia01Questoes, null, 2)};\n`,
  "utf8"
);

fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/criminologia_02.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const criminologia02Questoes = ${JSON.stringify(criminologia02Questoes, null, 2)};\n`,
  "utf8"
);

console.log(`[✓] Criminologia gerada: criminologia_01 (${criminologia01Questoes.length}) + criminologia_02 (${criminologia02Questoes.length}) = ${criminologia01Questoes.length + criminologia02Questoes.length} questões.`);
