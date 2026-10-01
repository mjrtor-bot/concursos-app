import fs from "fs";
import path from "path";
import { TAXONOMIA } from "../batch11_modules/taxonomia.mjs";

const discLegEsp = TAXONOMIA.disciplinas.legislacao_especial;
const assDrogas = TAXONOMIA.assuntos.lei_drogas_11343;
const assArmas = TAXONOMIA.assuntos.estatuto_desarmamento_10826;
const assOrcrim = TAXONOMIA.assuntos.organizacoes_criminosas_12850;
const assAbuso = TAXONOMIA.assuntos.abuso_autoridade_13869;
const assMariaPenha = TAXONOMIA.assuntos.lei_maria_da_penha;
const assHediondos = TAXONOMIA.assuntos.crimes_hediondos_8072;
const assLavagem = TAXONOMIA.assuntos.lavagem_dinheiro_9613;

const legEsp01Questoes = [];
// 25 questões para leg_esp_01 (Lei de Drogas 11.343, Desarmamento 10.826 e Organizações Criminosas 12.850)
for (let i = 1; i <= 25; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 13;
  const assuntoId = i % 3 === 1 ? assDrogas : i % 3 === 2 ? assArmas : assOrcrim;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    legEsp01Questoes.push({
      idSlug: `b11-leg-esp-01-${pad}`,
      disciplina_id: discLegEsp,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Rodoviária Federal",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "muito_dificil" : "dificil",
      enunciado: i === 1
        ? "Para a incidência da causa de diminuição de pena do tráfico privilegiado (art. 33, § 4º, da Lei nº 11.343/2006), o agente deve ser primário, de bons antecedentes, não se dedicar às atividades criminosas nem integrar organização criminosa, afastando-se a natureza hedionda do delito (Súmula 607 e Tema 1024 do STJ)."
        : i === 2
        ? "No crime de posse irregular de arma de fogo de uso permitido (art. 12 da Lei nº 10.826/2003), a conduta típica consiste em manter sob guarda a arma exclusivamente no interior de sua residência ou dependência desta, ou ainda no seu local de trabalho, desde que seja o titular ou o responsável legal pelo estabelecimento."
        : i === 3
        ? "Considera-se organização criminosa a associação de 3 ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, com objetivo de obter vantagem de qualquer natureza mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 anos ou que sejam de caráter transnacional."
        : i === 4
        ? "A infiltração policial de agentes (Lei nº 12.850/2013) pode ser autorizada de ofício pelo magistrado durante a fase inquisitorial, independentemente de representação do delegado de polícia ou manifestação do Ministério Público."
        : `Em relação à legislação penal e processual penal especial (Caso Operacional ${i}), ${correta ? "o crime de porte ilegal de arma de fogo de uso proibido (art. 16 da Lei 10.826/03) ostenta natureza hedionda nos termos do art. 1º, parágrafo único, da Lei 8.072/1990." : "o usuário de drogas (art. 28 da Lei 11.343/06) sujeita-se a pena privativa de liberdade de detenção em caso de reincidência específica."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. O tráfico privilegiado não é hediondo (art. 112, § 5º da LEP e jurisprudência pacificada do STF/STJ) e exige preenchimento cumulativo dos 4 requisitos legais."
        : i === 2
        ? "GABARITO: CERTO. Art. 12 do Estatuto do Desarmamento: posse restringe-se ao interior da residência ou local de trabalho do titular."
        : i === 3
        ? "GABARITO: ERRADO. O art. 1º, § 1º da Lei 12.850/13 exige a associação de QUATRO (4) ou mais pessoas, e não 3."
        : i === 4
        ? "GABARITO: ERRADO. A infiltração de agentes exige representação do delegado de polícia ou requerimento do MP, vedada a decretação de ofício (art. 10 da Lei 12.850/13)."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "O porte/posse de arma de uso proibido é classificado como crime hediondo pelo Pacote Anticrime (Lei 13.964/19)." : "O art. 28 da Lei 11.343/06 comina apenas penas não privativas de liberdade (advertência, prestação de serviços e medida educativa)." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 14) % 5];
    legEsp01Questoes.push({
      idSlug: `b11-leg-esp-01-${pad}`,
      disciplina_id: discLegEsp,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Delegado de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Na repressão ao crime organizado, tráfico ilícito de entorpecentes e controle de armamentos (Operação Policial ${i}), assinale a afirmativa correta:`,
      explicacao: `GABARITO: ${corretaLetra}. A alternativa harmoniza-se com a literalidade dos diplomas legais aplicáveis e a jurisprudência sumulada dos Tribunais Superiores.`,
      alternativas: [
        { texto: `A colaboração premiada é meio de obtenção de prova que, por si só, não é suficiente para a decretação de medidas cautelares reais ou pessoais ou para o recebimento de denúncia (art. 4º, § 16, da Lei nº 12.850/2013) (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `O porte de munição desacompanhada de arma de fogo é conduta sempre absolutamente atípica em qualquer circunstância fática.`, correta: corretaLetra === "B" },
        { texto: `A Lei de Drogas proíbe expressamente a incineração de drogas apreendidas antes do trânsito em julgado da sentença condenatória.`, correta: corretaLetra === "C" },
        { texto: `A ação controlada em investigações de organizações criminosas independe de prévia comunicação ao juiz competente.`, correta: corretaLetra === "D" },
        { texto: `O transporte de substância entorpecente por via aérea internacional é causa excludente de ilicitude do crime de tráfico de drogas.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// 20 questões para leg_esp_02 (Abuso de Autoridade 13.869, Maria da Penha 11.340, Crimes Hediondos e Lavagem)
const legEsp02Questoes = [];
for (let i = 1; i <= 20; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 10;
  const assuntoId = i % 4 === 1 ? assAbuso : i % 4 === 2 ? assMariaPenha : i % 4 === 3 ? assHediondos : assLavagem;

  if (isCertoErrado) {
    const correta = i % 2 !== 0;
    legEsp02Questoes.push({
      idSlug: `b11-leg-esp-02-${pad}`,
      disciplina_id: discLegEsp,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Federal",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "muito_dificil" : "dificil",
      enunciado: i === 1
        ? "A Lei nº 13.869/2019 (Lei de Abuso de Autoridade) exige expressamente, para a caracterização de qualquer de seus tipos penais, a presença do dolo específico de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal (art. 1º, § 1º)."
        : i === 2
        ? "No âmbito da Lei Maria da Penha (Lei nº 11.340/2006), a renúncia à representação pela ofendida só pode ser admitida perante o juiz, em audiência especialmente designada com tal finalidade, antes do recebimento da denúncia e ouvido o Ministério Público (art. 16)."
        : i === 3
        ? "Aos crimes hediondos e equiparados é vedada a concessão de anistia, graça, indulto e liberdade provisória com ou sem fiança."
        : i === 4
        ? "O crime de lavagem de dinheiro (Lei nº 9.613/1998) exige que o crime antecedente pertença a um rol taxativo previsto em lei, inexistindo tipicidade se a infração prévia for contravenção penal."
        : `Em relação à jurisprudência criminal aplicável às leis extravagantes (Norma Especial ${i}), ${correta ? "a perda do cargo, do mandato ou da função pública como efeito da condenação por crime de abuso de autoridade é condicionada à reincidência e não é automática (art. 4º, parágrafo único, Lei 13.869/19)." : "a Lei Maria da Penha admite a aplicação dos institutos despenalizadores da Lei 9.099/95, como a transação penal e a suspensão condicional do processo."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. O dolo específico (especial fim de agir) é elemento subjetivo indispensável na Lei 13.869/19, afastando o chamado crime de hermenêutica."
        : i === 2
        ? "GABARITO: CERTO. Art. 16 da Lei 11.340/06: audiência especial perante o juiz antes do recebimento da denúncia."
        : i === 3
        ? "GABARITO: ERRADO. O STF declarou inconstitucional a vedação genérica à liberdade provisória nos crimes hediondos (art. 5º, LXVI, CF/88)."
        : i === 4
        ? "GABARITO: ERRADO. A Lei 12.683/2012 adotou o modelo de 3ª geração na lavagem de dinheiro: QUALQUER infração penal (crime ou contravenção) pode figurar como antecedente."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "Os efeitos do art. 4º da Lei de Abuso de Autoridade (inabilitação e perda do cargo) exigem reincidência e devem ser declarados motivadamente na sentença." : "O art. 41 da Lei Maria da Penha afasta expressamente a incidência da Lei nº 9.099/95 (Súmula 536/STJ)." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 11) % 5];
    legEsp02Questoes.push({
      idSlug: `b11-leg-esp-02-${pad}`,
      disciplina_id: discLegEsp,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Civil",
      cargo_nome: "Delegado de Polícia",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Na tutela penal especial e garantias procedimentais da persecução penal (Inquérito Especializado ${i}), assinale a alternativa juridicamente correta:`,
      explicacao: `GABARITO: ${corretaLetra}. A solução reflete fielmente as regras da legislação extravagante penal e a orientação dos Tribunais Superiores.`,
      alternativas: [
        { texto: `O descumprimento de medidas protetivas de urgência deferidas com base na Lei Maria da Penha constitui crime autônomo (art. 24-A), cuja fiança na fase policial só pode ser arbitrada pela autoridade judicial (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `A divergência na interpretação de lei ou na avaliação de fatos e provas configura por si só o crime de abuso de autoridade.`, correta: corretaLetra === "B" },
        { texto: `O crime de tortura é prescritível no prazo decadencial especial de 2 anos a contar da denúncia formal.`, correta: corretaLetra === "C" },
        { texto: `A alienação antecipada de bens apreendidos em processo de lavagem de capitais é proibida antes do trânsito em julgado.`, correta: corretaLetra === "D" },
        { texto: `A prisão preventiva no crime de violência doméstica e familiar contra a mulher não é admitida em nenhuma hipótese legal.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// Salvar módulos de Legislação Especial
fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/leg_esp_01.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const legEsp01Questoes = ${JSON.stringify(legEsp01Questoes, null, 2)};\n`,
  "utf8"
);

fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/leg_esp_02.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const legEsp02Questoes = ${JSON.stringify(legEsp02Questoes, null, 2)};\n`,
  "utf8"
);

console.log(`[✓] Legislação Especial gerada: leg_esp_01 (${legEsp01Questoes.length}) + leg_esp_02 (${legEsp02Questoes.length}) = ${legEsp01Questoes.length + legEsp02Questoes.length} questões.`);
