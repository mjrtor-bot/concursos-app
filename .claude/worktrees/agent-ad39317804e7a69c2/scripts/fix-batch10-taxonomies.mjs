import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./batch10_modules/taxonomia.mjs";

// 1. const_01.mjs
function fixConst01() {
  const p = path.resolve(process.cwd(), "scripts/batch10_modules/const_01.mjs");
  let content = fs.readFileSync(p, "utf8");
  // Substituir disciplina e assuntos
  content = content.replace(/"disciplina_id": "[^"]+"/g, `"disciplina_id": "${TAXONOMIA.disciplinas.constitucional}"`);
  // Ajustar assunto_id para artigo_5_cf ou seguranca_publica
  content = content.replace(/"assunto_id": "[^"]+"/g, (match, offset, str) => {
    // se o trecho próximo falar de segurança pública / polícia / 144
    const segment = str.slice(offset, offset + 400);
    if (/144|seguran|polícia federal|prf|órgão/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.seguranca_publica}"`;
    }
    return `"assunto_id": "${TAXONOMIA.assuntos.artigo_5_cf}"`;
  });
  fs.writeFileSync(p, content, "utf8");
  console.log("const_01.mjs corrigido!");
}

// 2. const_02.mjs
function fixConst02() {
  const p = path.resolve(process.cwd(), "scripts/batch10_modules/const_02.mjs");
  let content = fs.readFileSync(p, "utf8");
  content = content.replace(/"disciplina_id": "[^"]+"/g, `"disciplina_id": "${TAXONOMIA.disciplinas.constitucional}"`);
  content = content.replace(/"assunto_id": "[^"]+"/g, `"assunto_id": "${TAXONOMIA.assuntos.artigo_5_cf}"`);
  fs.writeFileSync(p, content, "utf8");
  console.log("const_02.mjs corrigido!");
}

// 3. adm_01.mjs
function fixAdm01() {
  const p = path.resolve(process.cwd(), "scripts/batch10_modules/adm_01.mjs");
  let content = fs.readFileSync(p, "utf8");
  content = content.replace(/"disciplina_id": "[^"]+"/g, `"disciplina_id": "${TAXONOMIA.disciplinas.administrativo}"`);
  content = content.replace(/"assunto_id": "[^"]+"/g, (match, offset, str) => {
    const segment = str.slice(offset, offset + 500);
    if (/poder|polícia|hierárquico|disciplinar/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.poderes_administrativos}"`;
    }
    if (/ato|anula|revoga|discricionário|vinculado|convalida/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.atos_administrativos}"`;
    }
    if (/responsabilidade|dano|regressiva|objetiva/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.responsabilidade_civil_estado}"`;
    }
    if (/improbidade|8\.429|enriquecimento/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.improbidade_administrativa}"`;
    }
    return `"assunto_id": "${TAXONOMIA.assuntos.principios_administracao}"`;
  });
  fs.writeFileSync(p, content, "utf8");
  console.log("adm_01.mjs corrigido!");
}

// 4. adm_02.mjs
function fixAdm02() {
  const p = path.resolve(process.cwd(), "scripts/batch10_modules/adm_02.mjs");
  let content = fs.readFileSync(p, "utf8");
  content = content.replace(/"disciplina_id": "[^"]+"/g, `"disciplina_id": "${TAXONOMIA.disciplinas.administrativo}"`);
  content = content.replace(/"assunto_id": "[^"]+"/g, (match, offset, str) => {
    const segment = str.slice(offset, offset + 500);
    if (/licita|14\.133|contrato|pregão|concorrência/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.licitacoes_14133}"`;
    }
    return `"assunto_id": "${TAXONOMIA.assuntos.agentes_publicos_8112}"`;
  });
  fs.writeFileSync(p, content, "utf8");
  console.log("adm_02.mjs corrigido!");
}

// 5. portugues_01.mjs
function fixPort01() {
  const p = path.resolve(process.cwd(), "scripts/batch10_modules/portugues_01.mjs");
  let content = fs.readFileSync(p, "utf8");
  content = content.replace(/"disciplina_id": "[^"]+"/g, `"disciplina_id": "${TAXONOMIA.disciplinas.portugues}"`);
  content = content.replace(/"assunto_id": "[^"]+"/g, (match, offset, str) => {
    const segment = str.slice(offset, offset + 500);
    if (/texto|sentido|infer|compreensão|tipologia|narrativo|dissertativo/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.interpretacao_texto}"`;
    }
    if (/vírgula|pontuação|dois-pontos|travessão/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.pontuacao}"`;
    }
    return `"assunto_id": "${TAXONOMIA.assuntos.sintaxe_periodo}"`;
  });
  fs.writeFileSync(p, content, "utf8");
  console.log("portugues_01.mjs corrigido!");
}

// 6. portugues_02.mjs
function fixPort02() {
  const p = path.resolve(process.cwd(), "scripts/batch10_modules/portugues_02.mjs");
  let content = fs.readFileSync(p, "utf8");
  content = content.replace(/"disciplina_id": "[^"]+"/g, `"disciplina_id": "${TAXONOMIA.disciplinas.portugues}"`);
  content = content.replace(/"assunto_id": "[^"]+"/g, (match, offset, str) => {
    const segment = str.slice(offset, offset + 500);
    if (/regência|crase|visar|aspirar|obedecer/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.regencia_crase}"`;
    }
    if (/concordância|verbo|sujeito|plural|singular/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.concordancia}"`;
    }
    if (/acentu|ortografia|grafia|hífen/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.ortografia_acentuacao}"`;
    }
    return `"assunto_id": "${TAXONOMIA.assuntos.morfologia_classes}"`;
  });
  fs.writeFileSync(p, content, "utf8");
  console.log("portugues_02.mjs corrigido!");
}

// 7. dh_01.mjs
function fixDh01() {
  const p = path.resolve(process.cwd(), "scripts/batch10_modules/dh_01.mjs");
  let content = fs.readFileSync(p, "utf8");
  content = content.replace(/"disciplina_id": "[^"]+"/g, `"disciplina_id": "${TAXONOMIA.disciplinas.direitos_humanos}"`);
  content = content.replace(/"assunto_id": "[^"]+"/g, (match, offset, str) => {
    const segment = str.slice(offset, offset + 500);
    if (/dudh|declaração universal|1948/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.dudh_1948}"`;
    }
    if (/pacto de san josé|cadh|interamericana|costa rica/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.pacto_san_jose}"`;
    }
    return `"assunto_id": "${TAXONOMIA.assuntos.geracoes_direitos_humanos}"`;
  });
  fs.writeFileSync(p, content, "utf8");
  console.log("dh_01.mjs corrigido!");
}

// 8. criminologia_01.mjs
function fixCrim01() {
  const p = path.resolve(process.cwd(), "scripts/batch10_modules/criminologia_01.mjs");
  let content = fs.readFileSync(p, "utf8");
  content = content.replace(/"disciplina_id": "[^"]+"/g, `"disciplina_id": "${TAXONOMIA.disciplinas.criminologia}"`);
  content = content.replace(/"assunto_id": "[^"]+"/g, (match, offset, str) => {
    const segment = str.slice(offset, offset + 500);
    if (/vítima|vitim|cifra/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.vitimologia_cifras}"`;
    }
    if (/prevenção|reação|modelo/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.prevencao_criminal}"`;
    }
    return `"assunto_id": "${TAXONOMIA.assuntos.escolas_criminologicas}"`;
  });
  fs.writeFileSync(p, content, "utf8");
  console.log("criminologia_01.mjs corrigido!");
}

// 9. info_01.mjs
function fixInfo01() {
  const p = path.resolve(process.cwd(), "scripts/batch10_modules/info_01.mjs");
  let content = fs.readFileSync(p, "utf8");
  content = content.replace(/"disciplina_id": "[^"]+"/g, `"disciplina_id": "${TAXONOMIA.disciplinas.informatica}"`);
  content = content.replace(/"assunto_id": "[^"]+"/g, (match, offset, str) => {
    const segment = str.slice(offset, offset + 500);
    if (/rede|ip|tcp|udp|nuvem|cloud|protocolo/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.redes_nuvem}"`;
    }
    if (/sql|banco de dados|select|join|tabela/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.bancos_dados_sql}"`;
    }
    if (/linux|windows|processo|kernel|sistema operacional/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.sistemas_operacionais}"`;
    }
    if (/excel|calc|writer|word|planilha/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.ferramentas_escritorio}"`;
    }
    return `"assunto_id": "${TAXONOMIA.assuntos.seguranca_informacao}"`;
  });
  fs.writeFileSync(p, content, "utf8");
  console.log("info_01.mjs corrigido!");
}

// 10. rlm_01.mjs
function fixRlm01() {
  const p = path.resolve(process.cwd(), "scripts/batch10_modules/rlm_01.mjs");
  let content = fs.readFileSync(p, "utf8");
  content = content.replace(/"disciplina_id": "[^"]+"/g, `"disciplina_id": "${TAXONOMIA.disciplinas.rlm}"`);
  content = content.replace(/"assunto_id": "[^"]+"/g, (match, offset, str) => {
    const segment = str.slice(offset, offset + 500);
    if (/equival|negação|de morgan/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.equivalencias_negacoes}"`;
    }
    if (/probabilidade|chance/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.probabilidade}"`;
    }
    if (/arranjo|combinação|permut|contagem/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.analise_combinatoria}"`;
    }
    if (/diagrama|conjunto|venn|todo|nenhum|algum/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.diagramas_logicos}"`;
    }
    return `"assunto_id": "${TAXONOMIA.assuntos.logica_proposicional}"`;
  });
  fs.writeFileSync(p, content, "utf8");
  console.log("rlm_01.mjs corrigido!");
}

// 11. temas_policiais_01.mjs
function fixTemas01() {
  const p = path.resolve(process.cwd(), "scripts/batch10_modules/temas_policiais_01.mjs");
  let content = fs.readFileSync(p, "utf8");
  // Atualizar questão por questão
  content = content.replace(/"disciplina_id": "[^"]+"/g, (match, offset, str) => {
    const segment = str.slice(offset, offset + 500);
    if (/cadeia de custódia|vestígio/i.test(segment)) {
      return `"disciplina_id": "${TAXONOMIA.disciplinas.processo_penal}"`;
    }
    if (/inteligência|acesso à informação|sigilo/i.test(segment)) {
      return `"disciplina_id": "${TAXONOMIA.disciplinas.administrativo}"`;
    }
    return `"disciplina_id": "${TAXONOMIA.disciplinas.constitucional}"`;
  });
  content = content.replace(/"assunto_id": "[^"]+"/g, (match, offset, str) => {
    const segment = str.slice(offset, offset + 500);
    if (/cadeia de custódia|vestígio/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.provas_processo_penal}"`;
    }
    if (/inteligência|acesso à informação|sigilo/i.test(segment)) {
      return `"assunto_id": "${TAXONOMIA.assuntos.principios_administracao}"`;
    }
    return `"assunto_id": "${TAXONOMIA.assuntos.seguranca_publica}"`;
  });
  fs.writeFileSync(p, content, "utf8");
  console.log("temas_policiais_01.mjs corrigido!");
}

fixConst01();
fixConst02();
fixAdm01();
fixAdm02();
fixPort01();
fixPort02();
fixDh01();
fixCrim01();
fixInfo01();
fixRlm01();
fixTemas01();
console.log("Todos os módulos atualizados!");
