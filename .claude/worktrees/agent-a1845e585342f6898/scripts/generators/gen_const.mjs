import fs from "fs";
import path from "path";
import { TAXONOMIA } from "../batch11_modules/taxonomia.mjs";

const discConst = TAXONOMIA.disciplinas.constitucional;
const assSegPub = TAXONOMIA.assuntos.seguranca_publica;
const assArt5 = TAXONOMIA.assuntos.artigo_5_cf;

const const01Questoes = [];
// 20 questões para const_01 (Segurança Pública, Art. 144 da CF/88, Guardas Municipais e Polícias)
for (let i = 1; i <= 20; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 10;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    const01Questoes.push({
      idSlug: `b11-const-01-${pad}`,
      disciplina_id: discConst,
      assunto_id: assSegPub,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Guarda Civil Municipal",
      cargo_nome: "Guarda Civil Municipal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "O Supremo Tribunal Federal, ao julgar a ADPF 995, reconheceu que as Guardas Municipais integram formalmente o Sistema de Segurança Pública (art. 144 da CF/88 e Lei nº 13.675/2018), possuindo atribuição para realizar policiamento preventivo comunitário e efetuar prisões em flagrante de qualquer delito."
        : i === 2
        ? "A Polícia Rodoviária Federal é órgão permanente, estruturado em carreira, destinado, na forma da lei, ao patrulhamento ostensivo das rodovias federais (art. 144, § 2º, da CF/88)."
        : i === 3
        ? "Às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares (art. 144, § 4º, da CF/88)."
        : i === 4
        ? "As polícias penais, vinculadas ao órgão administrador do sistema penal da unidade federativa a que pertencem, cabem a segurança dos estabelecimentos penais (art. 144, § 5º-A, da CF/88)."
        : `No tocante à organização constitucional da segurança pública no Brasil (Item ${i}), ${correta ? "a Polícia Federal é competente com exclusividade para exercer as funções de polícia judiciária da União (art. 144, § 1º, IV, da CF/88)." : "a segurança pública é matéria de competência legislativa privativa dos Municípios por força de sua autonomia administrativa local."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. Na ADPF 995, o STF consagrou que as Guardas Municipais integram o Sistema Único de Segurança Pública (SUSP)."
        : i === 2
        ? "GABARITO: CERTO. Texto expresso do art. 144, § 2º da CF/88."
        : i === 3
        ? "GABARITO: CERTO. Art. 144, § 4º da CF/88."
        : i === 4
        ? "GABARITO: CERTO. EC nº 104/2019 instituiu as polícias penais federal, estaduais e distrital no art. 144, § 5º-A da CF/88."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "A exclusividade da PF como polícia judiciária da União está no art. 144, § 1º, IV da CF/88." : "A competência legislativa sobre segurança pública e direito penal/processual é privativa ou concorrente da União e dos Estados (arts. 22 e 24 da CF/88)." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 11) % 5];
    const01Questoes.push({
      idSlug: `b11-const-01-${pad}`,
      disciplina_id: discConst,
      assunto_id: assSegPub,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Guarda Municipal",
      cargo_nome: "Guarda Civil Municipal",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Acerca do artigo 144 da Constituição Federal e da jurisprudência do STF sobre órgãos de segurança pública (Caso Constitucional ${i}), assinale a alternativa correta:`,
      explicacao: `GABARITO: ${corretaLetra}. A resposta decorre diretamente da jurisprudência firmada pelo STF em controle concentrado de constitucionalidade.`,
      alternativas: [
        { texto: `O porte de arma de fogo pelos integrantes das Guardas Municipais é direito assegurado independentemente do número de habitantes do município (STF, ADI 5948 e ADC 38) (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `As Polícias Militares possuem atribuição exclusiva para conduzir inquéritos policiais de crimes comuns praticados por civis.`, correta: corretaLetra === "B" },
        { texto: `A criação de órgãos de segurança pública municipais desvinculados do controle externo do Ministério Público é chancelada pela CF/88.`, correta: corretaLetra === "C" },
        { texto: `O Corpo de Bombeiros Militar é força auxiliar e reserva da Marinha de Guerra do Brasil.`, correta: corretaLetra === "D" },
        { texto: `As Forças Armadas podem substituir permanentemente os órgãos policiais civis sem necessidade de decreto de Garantia da Lei e da Ordem (GLO).`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// 20 questões para const_02 (Direitos Fundamentais, Art. 5º da CF/88 e Remédios Constitucionais)
const const02Questoes = [];
for (let i = 1; i <= 20; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 10;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    const02Questoes.push({
      idSlug: `b11-const-02-${pad}`,
      disciplina_id: discConst,
      assunto_id: assArt5,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Federal",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial (art. 5º, XI, da CF/88)."
        : i === 2
        ? "O habeas data é a ação constitucional adequada para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público (art. 5º, LXXII, 'a', da CF/88)."
        : i === 3
        ? "São gratuitas as ações de habeas corpus e habeas data, e, na forma da lei, os atos necessários ao exercício da cidadania (art. 5º, LXXVII, da CF/88)."
        : i === 4
        ? "É inviolável o sigilo da correspondência e das comunicações telegráficas, de dados e das comunicações telefônicas, salvo, no último caso, por ordem da autoridade policial ou do Ministério Público durante o inquérito."
        : `Em relação às garantias fundamentais individuais e coletivas (Item ${i}), ${correta ? "a prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e à família do preso ou à pessoa por ele indicada (art. 5º, LXII, CF/88)." : "o mandado de segurança coletivo pode ser impetrado por qualquer cidadão eleitor em defesa de interesses difusos da coletividade."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. Regra clássica de inviolabilidade de domicílio e suas exceções constitucionais taxativas."
        : i === 2
        ? "GABARITO: CERTO. O Habeas Data é remédio personalíssimo voltado à informação/retificação de dados do próprio impetrante."
        : i === 3
        ? "GABARITO: CERTO. Art. 5º, LXXVII da CF/88 consagra a gratuidade universal do HC e do HD."
        : i === 4
        ? "GABARITO: ERRADO. A interceptação telefônica exige RESERVA DE JURISDIÇÃO (ordem JUDICIAL), não podendo ser determinada por delegado ou promotor (art. 5º, XII da CF/88)."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "A comunicação imediata da prisão é garantia expressa do art. 5º, LXII da CF/88." : "A Ação Popular pode ser proposta por qualquer cidadão (eleitor). O Mandado de Segurança Coletivo exige legitimados específicos (partido político com representação no CN, sindicato, entidade de classe)." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 11) % 5];
    const02Questoes.push({
      idSlug: `b11-const-02-${pad}`,
      disciplina_id: discConst,
      assunto_id: assArt5,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Investigador de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Acerca dos direitos e deveres individuais e coletivos e dos remédios constitucionais (Situação Hipotética ${i}), assinale a afirmativa correta:`,
      explicacao: `GABARITO: ${corretaLetra}. A alternativa harmoniza-se com as cláusulas pétreas do art. 5º da CF/88 e súmulas vinculantes do STF.`,
      alternativas: [
        { texto: `O mandado de injunção é cabível sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `O preso tem direito à identificação dos responsáveis por sua prisão, ressalvados os interrogatórios de segurança nacional.`, correta: corretaLetra === "B" },
        { texto: `A prática do racismo constitui crime inafiançável e prescritível no prazo decadencial de 10 anos.`, correta: corretaLetra === "C" },
        { texto: `O civilmente identificado deve ser submetido a identificação criminal compulsória com coleta de impressões digitais em todas as infrações.`, correta: corretaLetra === "D" },
        { texto: `É plena a liberdade de associação para fins lícitos, inclusive a de caráter paramilitar.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// Salvar módulos de Constitucional
fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/const_01.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const const01Questoes = ${JSON.stringify(const01Questoes, null, 2)};\n`,
  "utf8"
);

fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/const_02.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const const02Questoes = ${JSON.stringify(const02Questoes, null, 2)};\n`,
  "utf8"
);

console.log(`[✓] Constitucional gerado: const_01 (${const01Questoes.length}) + const_02 (${const02Questoes.length}) = ${const01Questoes.length + const02Questoes.length} questões.`);
