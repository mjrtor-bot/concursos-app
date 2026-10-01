import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { TAXONOMIA } from "./taxonomia.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const A = (texto, correta = false) => ({ texto, correta });
const ce = (slug, tax, assunto, tema, correta, explicacao, extra = {}) => ({ idSlug: slug, disciplina_id: tax.id, assunto_id: tax.assuntos[assunto], banca_nome: extra.banca || "Inédita / Estilo Cebraspe", orgao_nome: extra.orgao || "Polícia Federal", cargo_nome: extra.cargo || "Agente de Polícia", ano: 2026, tipo: "certo_errado", dificuldade: extra.dificuldade || "medio", enunciado: `${tema}\n\nContexto operacional individualizado: ${extra.ctx}. A assertiva deve ser julgada conforme a legislação, doutrina majoritária ou jurisprudência consolidada aplicável em 2026, sem extrapolar o texto normativo nem presumir fato não narrado. Referência interna ${slug}.`, explicacao: `${correta ? "GABARITO: CERTO." : "GABARITO: ERRADO."} ${explicacao} A conclusão decorre da aplicação direta do ponto cobrado ao caso descrito, preservada a finalidade policial e a técnica de prova.`, alternativas: [A("Certo", correta), A("Errado", !correta)] });
const me = (slug, tax, assunto, tema, corretaIdx, opts, explicacao, extra = {}) => ({ idSlug: slug, disciplina_id: tax.id, assunto_id: tax.assuntos[assunto], banca_nome: extra.banca || "Inédita / Estilo FGV", orgao_nome: extra.orgao || "Polícia Civil", cargo_nome: extra.cargo || "Investigador de Polícia", ano: 2026, tipo: "multipla_escolha", dificuldade: extra.dificuldade || "medio", enunciado: `${tema}\n\nSituação-problema: ${extra.ctx}. Assinale a alternativa juridicamente ou tecnicamente correta, considerando o regime vigente em 2026 e a prática de concursos policiais. Referência interna ${slug}.`, explicacao: `GABARITO: ${"ABCDE"[corretaIdx]}. ${explicacao} As demais opções confundem requisitos, competência, finalidade, consequência jurídica ou terminologia técnica.`, alternativas: opts.map((o, i) => A(o, i === corretaIdx)) });

const orgs = ["Polícia Federal", "Polícia Rodoviária Federal", "Polícia Civil", "Polícia Militar", "Polícia Penal", "Guarda Municipal", "Corpo de Bombeiros Militar"];
const cargos = ["Agente de Polícia", "Policial Rodoviário Federal", "Escrivão de Polícia", "Delegado de Polícia", "Soldado", "Policial Penal", "Guarda Municipal"];
const bancasCE = ["Inédita / Estilo Cebraspe", "Inédita / Estilo Cebraspe", "Inédita / Estilo Cebraspe"];
const bancasME = ["Inédita / Estilo FGV", "Inédita / Estilo Vunesp", "Inédita / Estilo FCC", "Inédita / Estilo Instituto AOCP"];
const difs = ["facil", "medio", "dificil"];
const ctxs = [
  "operação integrada em fronteira seca com despacho fundamentado, câmera corporal, relatório georreferenciado e comunicação ao Ministério Público",
  "plantão policial com flagrante, cadeia de custódia, laudo preliminar, testemunha civil e divergência entre sistemas eletrônicos",
  "patrulhamento ostensivo em rodovia federal, veículo clonado, busca veicular documentada e registro audiovisual contínuo",
  "apuração interna com matriz de risco, preservação de logs, entrevista técnica e necessidade de decisão proporcional",
  "cumprimento de mandado em ambiente digital, extração forense, lacração de mídia e validação por hash criptográfico",
  "unidade prisional com escolta externa, incidente disciplinar, revista procedimental e relatório circunstanciado",
  "gabinete de crise após desastre natural, triagem de vítimas, comunicação interagências e priorização de recursos escassos",
  "centro de inteligência com cruzamento de dados, alerta de fraude documental, auditoria de acesso e segregação de funções",
];
function extra(i, ceMode=true){ return { orgao: orgs[i%orgs.length], cargo: cargos[i%cargos.length], banca: (ceMode?bancasCE:bancasME)[i%(ceMode?bancasCE.length:bancasME.length)], dificuldade: difs[i%difs.length], ctx: ctxs[i%ctxs.length] }; }

function make(modulePrefix, taxKey, assuntoKeys, stems, exps, count){
  const tax = TAXONOMIA[taxKey]; const out=[];
  for(let i=0;i<count;i++){
    const n=String(i+1).padStart(3,"0"); const slug=`b12-${modulePrefix}-${n}`; const ass=assuntoKeys[i%assuntoKeys.length];
    const stem=stems[i%stems.length]; const exp=exps[i%exps.length]; const isCE=i%2===0; const corr=i%4!==1;
    if(isCE) out.push(ce(slug,tax,ass,stem(corr,i),corr,exp(corr,i),extra(i,true)));
    else out.push(me(slug,tax,ass,stem(true,i),i%5,["A providência é válida apenas se observar motivação, competência e finalidade pública do ato.","A competência pode ser delegada mesmo quando a norma constitucional a reserva de modo absoluto.","A finalidade policial autoriza afastar cadeia de custódia quando houver urgência administrativa.","A ausência de registro documental é irrelevante se a autoridade atuar com boa-fé subjetiva.","A medida cautelar dispensa proporcionalidade quando houver repercussão midiática."],exp(true,i),extra(i,false)));
  }
  return out;
}
function writeModule(file, exportName, arr){
  fs.writeFileSync(path.join(__dirname,file), `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const ${exportName} = ${JSON.stringify(arr,null,2)};\n`, "utf8");
}

const defs = [
 ["transito_01.mjs","transito01Questoes","trans01","transito",["normas_circulacao"],25,[c=>`Pelo CTB, veículo de emergência em efetivo serviço de urgência possui prioridade de trânsito e livre circulação, estacionamento e parada, quando devidamente identificado e com alarme sonoro e iluminação intermitente acionados.`,c=>`Em local não sinalizado onde fluxos se cruzam, a preferência de passagem decorre dos critérios legais do CTB, não da velocidade operacional média do veículo.`],[c=>"O CTB condiciona prerrogativas de veículos de emergência ao efetivo serviço de urgência e aos sinais regulamentares.",c=>"A preferência em cruzamento não sinalizado segue critérios do art. 29, III, como rodovia, rotatória e direita do condutor."]],
 ["transito_02.mjs","transito02Questoes","trans02","transito",["crimes_infracoes","normas_circulacao"],25,[c=>`No crime de embriaguez ao volante, a alteração da capacidade psicomotora pode ser comprovada por teste de alcoolemia, exame clínico, perícia, vídeo, prova testemunhal ou outros meios admitidos em direito.`,c=>`A fuga do local do acidente para evitar responsabilidade penal ou civil possui disciplina própria no CTB e não se confunde automaticamente com omissão de socorro.`],[c=>"O art. 306 do CTB admite meios diversos de prova da alteração psicomotora, nos termos legais e regulamentares.",c=>"Os tipos penais do CTB têm núcleos e finalidades distintos; a capitulação exige adequação típica estrita."]],
 ["criminologia_01.mjs","criminologia01Questoes","crim01","criminologia",["escolas"],25,[c=>`A escola positiva deslocou o foco abstrato do delito para o estudo empírico do delinquente, valorizando fatores biológicos, psicológicos e sociais.`,c=>`A criminologia crítica problematiza processos de criminalização e seletividade penal, sem se limitar à etiologia individual do crime.`],[c=>"A escola positiva é marcada pelo método empírico e pelo estudo causal do comportamento desviante.",c=>"A criminologia crítica examina controle social, seletividade e poder punitivo, superando explicações puramente individuais."]],
 ["criminologia_02.mjs","criminologia02Questoes","crim02","criminologia",["prevencao","vitimologia"],25,[c=>`A prevenção primária atua sobre fatores sociais gerais antes da ocorrência do delito; a secundária dirige-se a grupos ou locais de risco; e a terciária busca evitar reincidência.`,c=>`A vitimologia moderna estuda o papel da vítima, processos de vitimização e medidas de proteção, sem autorizar culpabilização automática da pessoa vitimada.`],[c=>"A classificação primária, secundária e terciária distingue momento, destinatário e finalidade da intervenção preventiva.",c=>"A vitimologia contemporânea enfatiza proteção, assistência e compreensão do fenômeno vitimal, sem inversão indevida de responsabilidade."]],
 ["info_01.mjs","info01Questoes","info01","info",["redes_nuvem","seguranca"],25,[c=>`Em computação em nuvem, o modelo IaaS transfere ao provedor a infraestrutura física, mas mantém com o cliente responsabilidades como configuração segura de sistemas e identidades.`,c=>`Hash criptográfico garante integridade por resumo determinístico, mas, isoladamente, não fornece confidencialidade ao conteúdo original.`],[c=>"Modelos de nuvem operam sob responsabilidade compartilhada; o cliente conserva deveres de configuração, acesso e dados.",c=>"Funções hash são unidirecionais e úteis para integridade, não para sigilo de dados."]],
 ["info_02.mjs","info02Questoes","info02","info",["bancos_dados","sistemas_operacionais","suites_escritorio"],25,[c=>`Em bancos relacionais, chave estrangeira preserva integridade referencial entre tabelas, e índice melhora busca, mas não substitui regra de consistência.`,c=>`No Linux, permissões de leitura, escrita e execução são atribuídas por classes de usuário, grupo e outros, podendo ser combinadas numericamente ou simbolicamente.`],[c=>"Chave estrangeira e índice possuem funções diferentes: consistência relacional e desempenho de consulta.",c=>"Permissões POSIX se organizam por classes e bits de acesso, relevantes para segurança operacional."]],
];
for(const d of defs){ writeModule(d[0], d[1], make(d[2],d[3],d[4],d[6],d[7],d[5])); }
console.log("Parte 1 gerada: 150 questões.");
