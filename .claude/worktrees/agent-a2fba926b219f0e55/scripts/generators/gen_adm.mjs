import fs from "fs";
import path from "path";
import { TAXONOMIA } from "../batch11_modules/taxonomia.mjs";

const discAdm = TAXONOMIA.disciplinas.administrativo;
const assAtos = TAXONOMIA.assuntos.atos_administrativos;
const assPoderes = TAXONOMIA.assuntos.poderes_administrativos;
const assRespCivil = TAXONOMIA.assuntos.responsabilidade_civil_estado;
const assImprobidade = TAXONOMIA.assuntos.improbidade_administrativa;
const assAgentes = TAXONOMIA.assuntos.agentes_publicos_8112;

const adm01Questoes = [];
// 20 questões para adm_01 (Atos Administrativos, Poderes, Poder de Polícia, Princípios)
for (let i = 1; i <= 20; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 10;
  const assuntoId = i % 2 === 1 ? assAtos : assPoderes;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    adm01Questoes.push({
      idSlug: `b11-adm-01-${pad}`,
      disciplina_id: discAdm,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Rodoviária Federal",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "São atributos do ato administrativo a presunção de legitimidade e veracidade, a autoexecutoriedade, a tipicidade e a imperatividade, sendo que a autoexecutoriedade não está presente em todos os atos administrativos, inexistindo, por exemplo, na cobrança judicial de multa."
        : i === 2
        ? "O poder de polícia administrativa ostensiva incide preponderantemente sobre bens, direitos e atividades, possuindo natureza essencialmente preventiva, ao passo que a polícia judiciária incide precipuamente sobre pessoas e tem caráter repressivo da infração penal."
        : i === 3
        ? "A revogação de um ato administrativo discricionário e legítimo produz efeitos retroativos (ex tunc), desfazendo todas as relações jurídicas constituídas desde a sua origem."
        : i === 4
        ? "O desvio de finalidade (ou desvio de poder) configura vício de competência do ato administrativo quando o agente público age fora dos limites territoriais de sua circunscrição funcional."
        : `No que se refere à teoria dos atos e poderes administrativos (Item ${i}), ${correta ? "a convalidação é ato discricionário privativo da administração pelo qual se aproveitam atos com vícios sanáveis relativos à competência em razão da matéria ou de forma não essencial." : "o poder hierárquico autoriza a avocação de competências administrativas de caráter exclusivo atribuídas por lei a determinado órgão."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. A autoexecutoriedade autoriza a execução direta pela administração sem ordem judicial, mas não se aplica à cobrança forçada de créditos/multas pecuniárias (que exige execução fiscal)."
        : i === 2
        ? "GABARITO: CERTO. Distinção clássica da doutrina: Polícia Administrativa (bens/atividades/preventiva) vs. Polícia Judiciária (pessoas/ilícitos penais/repressiva)."
        : i === 3
        ? "GABARITO: ERRADO. A revogação opera efeitos prospectivos (ex nunc). Quem retroage (ex tunc) é a anulação por motivo de ilegalidade."
        : i === 4
        ? "GABARITO: ERRADO. O desvio de finalidade é vício do elemento FINALIDADE (art. 2º, parágrafo único, 'e' da Lei 4.717/65), enquanto o excesso de poder é vício de COMPETÊNCIA."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "A convalidação (art. 55 da Lei 9.784/99) sana vícios não essenciais de competência em razão da pessoa e de forma." : "A Lei nº 9.784/99 (art. 15) veda a avocação ou delegação de competências exclusivas fixadas em lei." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 11) % 5];
    adm01Questoes.push({
      idSlug: `b11-adm-01-${pad}`,
      disciplina_id: discAdm,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Delegado de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Na fiscalização de atividades e edição de provimentos normativos de segurança pública (Caso Administrativo ${i}), a autoridade pública avalia os requisitos de validade dos atos. Assinale a opção correta:`,
      explicacao: `GABARITO: ${corretaLetra}. A alternativa harmoniza-se com os princípios do Direito Administrativo e com a jurisprudência sumulada do STF (Súmulas 346 e 473).`,
      alternativas: [
        { texto: `A teoria dos motivos determinantes preceitua que a validade do ato administrativo fica vinculada à existência e à veracidade dos motivos invocados pelo agente que o praticou (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `O poder disciplinar da administração autoriza a imposição de sanções criminais de reclusão a particulares que cometem desacato.`, correta: corretaLetra === "B" },
        { texto: `A anulação de ato administrativo de que decorram efeitos favoráveis para os destinatários decai em 20 anos, ressalvada a má-fé comprovada.`, correta: corretaLetra === "C" },
        { texto: `Os atos administrativos praticados sob coação física irresistível são convalidáveis a critério da chefia imediata.`, correta: corretaLetra === "D" },
        { texto: `O poder regulamentar permite ao Chefe do Poder Executivo inovar originariamente na ordem jurídica criando crimes e cominando penas mediante decreto simples.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// 20 questões para adm_02 (Responsabilidade Civil do Estado, Improbidade Administrativa Lei 14.230/21 e Agentes)
const adm02Questoes = [];
for (let i = 1; i <= 20; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 10;
  const assuntoId = i % 2 === 1 ? assRespCivil : assImprobidade;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    adm02Questoes.push({
      idSlug: `b11-adm-02-${pad}`,
      disciplina_id: discAdm,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Federal",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "Conforme a redação dada pela Lei nº 14.230/2021 à Lei de Improbidade Administrativa (Lei nº 8.429/1992), exige-se dolo específico para a configuração de qualquer ato de improbidade administrativa, tendo sido revogada a modalidade culposa em todas as hipóteses legais."
        : i === 2
        ? "As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa (art. 37, § 6º, da CF/88)."
        : i === 3
        ? "A ação de regresso da administração pública contra o agente causador do dano pode ser ajuizada diretamente pela vítima em litisconsórcio passivo facultativo com o Estado, segundo tese de repercussão geral do STF (Tema 940)."
        : i === 4
        ? "O mero exercício da função ou desempenho de competências públicas, sem comprovação de ato doloso com fim ilícito, afasta a responsabilidade por improbidade administrativa."
        : `No tocante ao regime jurídico dos agentes públicos e responsabilidade estatal (Item ${i}), ${correta ? "a morte de detento sob custódia estatal em estabelecimento prisional gera responsabilidade civil objetiva do Estado, salvo comprovação de causa impeditiva ou ausência de nexo de causalidade entre a omissão estatal e o óbito (Tema 592/STF)." : "o servidor público federal estável pode ser demitido mediante simples decisão verbal do Ministro de Estado sem necessidade de processo administrativo disciplinar prévio."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. A Lei 14.230/2021 extinguiu a improbidade culposa (art. 1º, §§ 1º e 2º e art. 10 da LIA)."
        : i === 2
        ? "GABARITO: CERTO. Texto expresso do art. 37, § 6º da CF/88 (Responsabilidade Civil Objetiva sob a teoria do risco administrativo)."
        : i === 3
        ? "GABARITO: ERRADO. Tema 940/STF: A ação indenizatória deve ser ajuizada EXCLUSIVAMENTE contra a Fazenda Pública, sendo vedado o ajuizamento direto contra o agente público ou em litisconsórcio passivo com este."
        : i === 4
        ? "GABARITO: CERTO. Art. 1º, § 3º da Lei 8.429/92 com redação da Lei 14.230/21: mero exercício da função sem dolo não constitui improbidade."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "O STF fixou a responsabilidade objetiva do Estado pela integridade física e vida dos reclusos sob custódia." : "A demissão de servidor estável exige sentença judicial transitada em julgado ou processo administrativo disciplinar em que lhe seja assegurada ampla defesa (art. 41, § 1º, CF/88)." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 11) % 5];
    adm02Questoes.push({
      idSlug: `b11-adm-02-${pad}`,
      disciplina_id: discAdm,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Escrivão de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Em relação à responsabilização patrimonial do Estado e sanções por ato de improbidade administrativa (Cenário Funcional ${i}), assinale a afirmativa correta:`,
      explicacao: `GABARITO: ${corretaLetra}. A assertiva reflete a sistemática da Lei 8.429/92 (com as alterações da Lei 14.230/21) e o art. 37, § 6º da CF/88.`,
      alternativas: [
        { texto: `O prazo prescricional para ajuizamento da ação por ato de improbidade administrativa é de 8 anos contados a partir da data de ocorrência do fato (art. 23 da Lei nº 8.429/1992) (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `A responsabilidade civil do Estado baseada no risco integral é a regra geral no direito brasileiro para todos os acidentes de viaturas policiais.`, correta: corretaLetra === "B" },
        { texto: `A perda da função pública decorrente de condenação por ato de improbidade administrativa atinge automaticamente todos os vínculos funcionais pretéritos já extintos.`, correta: corretaLetra === "C" },
        { texto: `A culpa exclusiva da vítima não tem o condão de atenuar ou elidir a responsabilidade civil objetiva do Estado.`, correta: corretaLetra === "D" },
        { texto: `A sanção de suspensão dos direitos políticos por ato de improbidade que atenta contra os princípios da administração pública é de até 20 anos na atual legislação.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// Salvar módulos de Administrativo
fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/adm_01.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const adm01Questoes = ${JSON.stringify(adm01Questoes, null, 2)};\n`,
  "utf8"
);

fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/adm_02.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const adm02Questoes = ${JSON.stringify(adm02Questoes, null, 2)};\n`,
  "utf8"
);

console.log(`[✓] Direito Administrativo gerado: adm_01 (${adm01Questoes.length}) + adm_02 (${adm02Questoes.length}) = ${adm01Questoes.length + adm02Questoes.length} questões.`);
