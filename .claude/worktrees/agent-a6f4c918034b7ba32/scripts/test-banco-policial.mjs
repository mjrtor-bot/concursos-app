import { penalQuestions } from "./batch1_modules/penal.mjs";
import { dppQuestions } from "./batch1_modules/processo_penal.mjs";
import { legEspQuestions } from "./batch1_modules/legislacao_especial.mjs";
import { constQuestions } from "./batch1_modules/constitucional.mjs";
import { admQuestions } from "./batch1_modules/administrativo.mjs";
import { portQuestions } from "./batch1_modules/portugues.mjs";
import { dhQuestions } from "./batch1_modules/direitos_humanos.mjs";
import { crimQuestions } from "./batch1_modules/criminologia.mjs";
import { infoQuestions } from "./batch1_modules/informatica.mjs";
import { rlmQuestions } from "./batch1_modules/rlm.mjs";
import { formatarQuestao } from "./batch1_modules/helper.mjs";
import { TAXONOMIA } from "./batch1_modules/taxonomia.mjs";

export async function runLocalAudit() {
  console.log("=================================================");
  console.log("   AUDITORIA TÉCNICA E PEDAGÓGICA - LOTE 1 (500) ");
  console.log("=================================================");

  const modulos = [
    { nome: "Direito Penal", list: penalQuestions, esperado: 70, discId: TAXONOMIA.disciplinas.penal },
    { nome: "Direito Processual Penal", list: dppQuestions, esperado: 70, discId: TAXONOMIA.disciplinas.processo_penal },
    { nome: "Legislação Especial Policial", list: legEspQuestions, esperado: 70, discId: TAXONOMIA.disciplinas.legislacao_especial },
    { nome: "Direito Constitucional", list: constQuestions, esperado: 60, discId: TAXONOMIA.disciplinas.constitucional },
    { nome: "Direito Administrativo", list: admQuestions, esperado: 60, discId: TAXONOMIA.disciplinas.administrativo },
    { nome: "Língua Portuguesa", list: portQuestions, esperado: 60, discId: TAXONOMIA.disciplinas.portugues },
    { nome: "Direitos Humanos", list: dhQuestions, esperado: 35, discId: TAXONOMIA.disciplinas.direitos_humanos },
    { nome: "Criminologia", list: crimQuestions, esperado: 25, discId: TAXONOMIA.disciplinas.criminologia },
    { nome: "Informática e Tecnologia", list: infoQuestions, esperado: 30, discId: TAXONOMIA.disciplinas.informatica },
    { nome: "Raciocínio Lógico-Matemático", list: rlmQuestions, esperado: 20, discId: TAXONOMIA.disciplinas.rlm },
  ];

  let totalQ = 0;
  let totalAlts = 0;
  const idMap = new Set();
  const fpMap = new Set();
  const altIdMap = new Set();
  let ceCount = 0;
  let meCount = 0;

  let globalIdx = 1;

  for (const mod of modulos) {
    if (mod.list.length !== mod.esperado) {
      throw new Error(`[ERRO DISTRIBUIÇÃO] Módulo ${mod.nome} tem ${mod.list.length} questões, esperado ${mod.esperado}`);
    }

    for (const raw of mod.list) {
      const formatted = formatarQuestao(raw, globalIdx++);
      const { questao, alternativas } = formatted;
      totalQ++;
      totalAlts += alternativas.length;

      // 1. Validar unicidade de ID da questão
      if (idMap.has(questao.id)) {
        throw new Error(`[ERRO ID] ID duplicado: ${questao.id}`);
      }
      idMap.add(questao.id);

      // 2. Validar unicidade estrita do fingerprint
      if (fpMap.has(questao.fingerprint_hash)) {
        throw new Error(`[ERRO FINGERPRINT] Fingerprint colidindo: ${questao.fingerprint_hash}`);
      }
      fpMap.add(questao.fingerprint_hash);

      // 3. Validar Metadados Obrigatórios de Autoria IA e Taxonomia
      if (!questao.disciplina_id || questao.disciplina_id !== mod.discId) {
        throw new Error(`[ERRO TAXONOMIA] disciplina_id inválido ou divergente na questão ${questao.id}: ${questao.disciplina_id}`);
      }
      if (!questao.assunto_id || typeof questao.assunto_id !== "string" || questao.assunto_id.trim().length === 0) {
        throw new Error(`[ERRO TAXONOMIA] assunto_id nulo ou inválido na questão ${questao.id}`);
      }
      if (!questao.banca_nome || !questao.orgao_nome || !questao.cargo_nome || !questao.ano) {
        throw new Error(`[ERRO METADADOS] Metadados de banca/orgao/cargo/ano incompletos na questão ${questao.id}`);
      }
      if (!questao.is_autoral_ia) {
        throw new Error(`[ERRO METADADOS] is_autoral_ia não é true na questão ${questao.id}`);
      }
      if (questao.modelo_ia !== "Claude Fable 5.1") {
        throw new Error(`[ERRO METADADOS] modelo_ia incorreto (${questao.modelo_ia}) na questão ${questao.id}`);
      }
      if (questao.prompt_versao !== "v2.1") {
        throw new Error(`[ERRO METADADOS] prompt_versao incorreto na questão ${questao.id}`);
      }
      if (!questao.revisada_por_especialista) {
        throw new Error(`[ERRO METADADOS] revisada_por_especialista não é true na questão ${questao.id}`);
      }

      // 4. Validar Enunciado e Explicação
      if (!questao.enunciado || questao.enunciado.trim().length < 20) {
        throw new Error(`[ERRO PEDAGÓGICO] Enunciado muito curto ou vazio na questão ${questao.id}`);
      }
      if (!questao.explicacao || questao.explicacao.trim().length < 15) {
        throw new Error(`[ERRO PEDAGÓGICO] Explicação muito curta ou vazia na questão ${questao.id}`);
      }

      // 5. Validar Alternativas e Integridade Relacional
      if (questao.tipo === "certo_errado") {
        ceCount++;
        if (alternativas.length !== 2) {
          throw new Error(`[ERRO ESTRUTURAL] C/E com ${alternativas.length} alternativas na questão ${questao.id}`);
        }
      } else if (questao.tipo === "multipla_escolha") {
        meCount++;
        if (alternativas.length < 4 || alternativas.length > 5) {
          throw new Error(`[ERRO ESTRUTURAL] Múltipla Escolha com ${alternativas.length} alternativas na questão ${questao.id}`);
        }
      }

      let corretas = 0;
      for (const alt of alternativas) {
        if (altIdMap.has(alt.id)) {
          throw new Error(`[ERRO ID ALT] ID de alternativa duplicado: ${alt.id}`);
        }
        altIdMap.add(alt.id);

        if (alt.questao_id !== questao.id) {
          throw new Error(`[ERRO FK] Alternativa aponta para questao_id diferente (${alt.questao_id} !== ${questao.id})`);
        }
        if (!alt.texto || alt.texto.trim().length === 0) {
          throw new Error(`[ERRO TEXTO ALT] Alternativa com texto vazio na questão ${questao.id}`);
        }
        if (alt.correta) corretas++;
      }

      if (corretas !== 1) {
        throw new Error(`[ERRO GABARITO] Questão ${questao.id} possui ${corretas} alternativas corretas (deve ser exatamente 1)`);
      }
    }
  }

  console.log(" [✓] Distribuição por disciplina: 100% EXATA (500 questões)");
  console.log(` [✓] Questões Certo/Errado: ${ceCount} | Múltipla Escolha: ${meCount}`);
  console.log(` [✓] Total de Alternativas: ${totalAlts}`);
  console.log(` [✓] IDs Únicos (UUID v5 determinísticos): ${idMap.size}/500`);
  console.log(` [✓] Fingerprints Únicos (SHA-256 canônicos): ${fpMap.size}/500`);
  console.log(" [✓] Metadados de Autoria IA e Especialista: 100% CONFORMES");
  console.log(" [✓] Integridade Relacional e Gabaritos Únicos: 100% VALIDADOS");
  console.log("=================================================");
  console.log(" AUDITORIA LOCAL CONCLUÍDA COM SUCESSO ABSOLUTO! ");
  console.log("=================================================\n");

  return { totalQ, totalAlts, idMap, fpMap };
}

if (process.argv[1]?.endsWith("test-banco-policial.mjs")) {
  runLocalAudit().catch((err) => {
    console.error("FALHA NA AUDITORIA:", err);
    process.exit(1);
  });
}
