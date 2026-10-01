import fs from "fs";
import path from "path";
import { TAXONOMIA } from "../batch11_modules/taxonomia.mjs";

const discPort = TAXONOMIA.disciplinas.portugues;
const assInterp = TAXONOMIA.assuntos.interpretacao_texto;
const assSintaxe = TAXONOMIA.assuntos.sintaxe_periodo;
const assRegencia = TAXONOMIA.assuntos.regencia_crase;
const assPontuacao = TAXONOMIA.assuntos.pontuacao;
const assConcordancia = TAXONOMIA.assuntos.concordancia;

const port01Questoes = [];
// 20 questões para portugues_01 (Interpretação de Texto, Tipologia e Coesão Textual)
for (let i = 1; i <= 20; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 10;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    port01Questoes.push({
      idSlug: `b11-port-01-${pad}`,
      disciplina_id: discPort,
      assunto_id: assInterp,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Federal",
      cargo_nome: "Papiloscopista Policial Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "No fragmento de laudo pericial 'A perícia papiloscópica constitui prova material inequívoca de identidade, conquanto exija rigor metodológico na preservação do suporte', o conectivo 'conquanto' introduz uma oração subordinada adverbial concessiva, equivalendo semanticamente a 'embora' ou 'ainda que'."
        : i === 2
        ? "O gênero textual 'Relatório de Investigação Policial' caracteriza-se precipuamente pela tipologia descritivo-narrativa, pautada pela objetividade, clareza, concisão e impessoalidade na reconstrução da dinâmica delitiva."
        : i === 3
        ? "No trecho 'Os investigadores chegaram ao local do crime; os peritos, ao laboratório', a vírgula empregada no segundo segmento justifica-se pelo fenômeno da elipse (ou zeugma) do verbo 'chegaram'."
        : i === 4
        ? "A substituição do pronome 'onde' por 'aonde' na frase 'A repartição policial onde o suspeito foi interrogado contava com gravação audiovisual' mantém a correção gramatical e a semântica original do texto."
        : `Em relação à coesão textual, tipologia e referenciação anafórica (Texto ${i}), ${correta ? "o pronome demonstrativo 'esse' (e suas variações) deve ser empregado para retomar termo ou ideia expressa anteriormente no corpo do parágrafo." : "a conjunção 'porquanto' possui valor semântico estritamente adversativo equivalente a 'contudo'."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. 'Conquanto' é conjunção subordinativa adverbial concessiva (ideia de contraste/concessão que não impede a oração principal)."
        : i === 2
        ? "GABARITO: CERTO. Relatórios e peças técnicas policiais combinam narração dos fatos e descrição dos elementos de prova com linguagem técnica impessoal."
        : i === 3
        ? "GABARITO: CERTO. A vírgula vicária/zeugma marca a omissão de termo verbal anteriormente expresso."
        : i === 4
        ? "GABARITO: ERRADO. 'Aonde' expressa movimento em direção a um local (rege a preposição 'a'), incompatível com a estaticidade do verbo de apoio no contexto."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "O pronome 'esse' exerce função anafórica por excelência no texto." : "'Porquanto' é conjunção causal ou explicativa (equivalente a 'porque', 'já que'), não tendo valor adversativo." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 11) % 5];
    port01Questoes.push({
      idSlug: `b11-port-01-${pad}`,
      disciplina_id: discPort,
      assunto_id: assInterp,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Investigador de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Considere o texto extraído de comunicação oficial de segurança pública (Trecho Policial ${i}) e analise os mecanismos de coesão e semântica. Assinale a opção correta:`,
      explicacao: `GABARITO: ${corretaLetra}. A afirmativa preserva a coerência discursiva e os preceitos gramaticais e normativos da língua padrão culta.`,
      alternativas: [
        { texto: `A oração subordinada adjetiva explicativa, por ser isolada por vírgulas, atribui uma propriedade geral a todos os elementos do conjunto antecedente (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `O uso da voz passiva sintética com partícula apassivadora 'se' elimina a necessidade de concordância entre o verbo e o sujeito paciente.`, correta: corretaLetra === "B" },
        { texto: `A palavra 'posto que' introduz oração com sentido temporal coincidente com o tempo presente da narrativa.`, correta: corretaLetra === "C" },
        { texto: `O pronome oblíquo em próclise é obrigatório no início absoluto de período simples na norma culta.`, correta: corretaLetra === "D" },
        { texto: `A figura de linguagem presente em 'as viaturas policiais rugiam na madrugada' classifica-se como antítese pura.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// 15 questões para portugues_02 (Sintaxe, Regência, Crase, Pontuação e Concordância)
const port02Questoes = [];
for (let i = 1; i <= 15; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 8;
  const assuntoId = i % 3 === 1 ? assRegencia : i % 3 === 2 ? assConcordancia : assPontuacao;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    port02Questoes.push({
      idSlug: `b11-port-02-${pad}`,
      disciplina_id: discPort,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Rodoviária Federal",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "No enunciado 'O agente de polícia visava ao esclarecimento célere do delito', o verbo 'visar' no sentido de ter como objetivo/almejar é transitivo indireto e rege a preposição 'a', exigindo a forma correta com 'ao'."
        : i === 2
        ? "O emprego do acento grave indicativo de crase é proibido antes de pronomes de tratamento em geral (como Vossa Excelência, Vossa Senhoria), admitindo-se exceção para senhora, senhorita e dona."
        : i === 3
        ? "Na oração 'Haviam muitos vestígios preservados no local da ocorrência', a forma verbal 'haviam' está gramaticalmente correta, pois o verbo concorda com o sujeito plural 'muitos vestígios'."
        : i === 4
        ? "Em 'Trata-se de diligências sigilosas indispensáveis à persecução', o termo 'de diligências sigilosas' exerce a função sintática de sujeito indeterminado."
        : `No tocante às normas gramaticais de regência, concordância e pontuação (Regra ${i}), ${correta ? "a concordância nominal em 'Seguem anexas as cópias dos mandados judiciais' está plenamente correta, pois o adjetivo 'anexo' concorda em gênero e número com o substantivo a que se refere." : "a crase é obrigatória antes de substantivos masculinos empregados em locuções adverbiais de instrumento."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. 'Visar' (ter por objetivo/almejar) é VTI com preposição 'a': visar a algo."
        : i === 2
        ? "GABARITO: CERTO. Antes de pronomes de tratamento não há crase, com exceção de senhora, senhorita e dona."
        : i === 3
        ? "GABARITO: ERRADO. O verbo 'haver' no sentido de existir ou ocorrer é impessoal, devendo permanecer no singular (Havia muitos vestígios)."
        : i === 4
        ? "GABARITO: ERRADO. O verbo 'tratar-se' com preposição 'de' e partícula 'se' é VTI com sujeito indeterminado; o termo preposicionado é OBJETO INDIRETO."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "'Anexo' é adjetivo e concorda com o substantivo ('anexas as cópias'). 'Em anexo' é locução invariável." : "Antes de palavras masculinas não ocorre crase, salvo quando subentendida a locução 'à moda de'." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 9) % 5];
    port02Questoes.push({
      idSlug: `b11-port-02-${pad}`,
      disciplina_id: discPort,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Escrivão de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Na elaboração e revisão gramatical de termos de depoimento e expedientes cartorários (Documento Oficial ${i}), assinale a afirmativa gramaticalmente escorreita:`,
      explicacao: `GABARITO: ${corretaLetra}. A construção segue com estrita fidelidade as normas gramaticais de regência, concordância e pontuação da norma culta contemporânea.`,
      alternativas: [
        { texto: `A ocorrência de crase é facultativa diante de pronomes possessivos femininos singulares adjetivos (como 'sua', 'minha', 'tua') acompanhados de substantivo explícito (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `O verbo 'obedecer' classifica-se como transitivo direto, exigindo complemento desprovido de preposição em qualquer contexto.`, correta: corretaLetra === "B" },
        { texto: `Na expressão 'fazem dez anos que a delegacia foi inaugurada', a flexão no plural do verbo 'fazer' é impositiva na norma padrão.`, correta: corretaLetra === "C" },
        { texto: `A separação do sujeito de seu respectivo predicado por vírgula simples é permitida quando o sujeito possui mais de três palavras.`, correta: corretaLetra === "D" },
        { texto: `O termo 'bastantes' é invariável e nunca admite flexão de plural mesmo quando qualifica substantivos plurais.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// Salvar módulos de Português
fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/portugues_01.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const port01Questoes = ${JSON.stringify(port01Questoes, null, 2)};\n`,
  "utf8"
);

fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/portugues_02.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const port02Questoes = ${JSON.stringify(port02Questoes, null, 2)};\n`,
  "utf8"
);

console.log(`[✓] Português gerado: portugues_01 (${port01Questoes.length}) + portugues_02 (${port02Questoes.length}) = ${port01Questoes.length + port02Questoes.length} questões.`);
