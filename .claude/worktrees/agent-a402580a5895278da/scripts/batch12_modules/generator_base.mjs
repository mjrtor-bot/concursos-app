import { TAXONOMIA } from "./taxonomia.mjs";
import { writeModule } from "./builder.mjs";

const orgs = [
  "Polícia Rodoviária Federal", "Polícia Federal", "Polícia Civil", "Polícia Militar",
  "Polícia Penal", "Guarda Municipal", "Corpo de Bombeiros Militar"
];
const bancasCE = ["Inédita / Estilo Cebraspe", "Inédita / Estilo Quadrix"];
const bancasME = ["Inédita / Estilo FGV", "Inédita / Estilo Vunesp", "Inédita / Estilo FCC", "Inédita / Estilo Instituto AOCP"];
const cargos = [
  "Policial Rodoviário Federal", "Agente de Polícia Federal", "Escrivão de Polícia Civil",
  "Delegado de Polícia Civil", "Investigador de Polícia Civil", "Soldado da Polícia Militar",
  "Oficial da Polícia Militar", "Policial Penal Federal", "Guarda Civil Municipal"
];

const ctxScenarios = [
  "fiscalização de trânsito em rodovia federal com radar portátil, viatura caracterizada, câmera individual e teste com etilômetro homologado pelo INMETRO",
  "patrulhamento ostensivo noturno em cruzamento urbano com semáforo intermitente, registro de velocidade por tacógrafo e abordagem progressiva",
  "operação integrada de segurança viária com comboio especial, bloqueio de faixa, sinalização de obras e pesagem de veículos de carga",
  "perícia técnica de acidente de trânsito com vítima fatal, medição de frenagem, coleta de fragmentos, diagrama esquemático e preservação do sítio",
  "abordagem a transporte interestadual de passageiros em posto de fiscalização com consulta ao RENAVAM, CNH digital e verificação de tacógrafo",
  "autuação por infração gravíssima em rodovia estadual com registro audiovisual, laudo de constatação de sinais e entrega de veículo a condutor habilitado",
  "escolta de carga perigosa e superdimensionada com batedores da polícia, plano de rota prévio, autorização especial de trânsito e comunicação via rádio",
  "investigação de homicídio culposo na direção de veículo automotor com exame toxicológico pericial, oitiva de testemunhas e análise de câmeras de segurança",
  "análise de perfil criminológico em delegacia especializada com elaboração de mapa de calor delitivo e identificação de rotas de fuga",
  "estudo criminológico de reincidência em complexo penitenciário de segurança máxima com entrevista psicossocial e avaliação de periculosidade",
  "aplicação do programa de prevenção primária comunitária com patrulhamento escolar, mediação de conflitos e reuniões com a comunidade local",
  "atendimento humanizado a vítima de violência em núcleo de assistência com aplicação de protocolo de não revitimização e encaminhamento médico",
  "elaboração de diagnóstico de vitimização terciária em audiência judicial com avaliação de estigmatização institucional e medidas de proteção",
  "implantação de modelo de policiamento orientado para o problema (POP) com análise de hotspot criminológico e intervenção situacional preventiva",
  "pesquisa de criminologia clínica com avaliação de fatores biossociais e aplicação de escalas validadas de risco de reiteração criminosa",
  "estudo de vitimologia comparada com análise de vulnerabilidade situacional e categorização de risco vitimal segundo critérios científicos",
  "análise forense digital em estação de trabalho apreendida com extração de imagem bit a bit, cálculo de hash SHA-256 e cadeia de custódia documental",
  "investigação de ataque cibernético com análise de logs de firewall, tráfego de rede capturado em PCAP e isolamento de hosts comprometidos",
  "auditoria de segurança da informação em nuvem híbrida com verificação de políticas de IAM, permissões de bucket S3 e criptografia de ponta a ponta",
  "resposta a incidente de ransomware em rede corporativa com contenção de segmento, mitigação de ameaça e restauração de backup imutável",
  "perícia em banco de dados corporativo com extração de logs de transação, análise de triggers e recomposição de integridade referencial",
  "administração de servidores Linux em centro de dados policial com configuração de permissões POSIX, sudoers restrito e firewall iptables",
  "investigação de phishing e engenharia social com análise de cabeçalhos de e-mail SMTP, verificação de registros SPF, DKIM e DMARC",
  "auditoria de integridade de mídias digitais em sala-cofre com termo de abertura de lacre, duplo perito signatário e registro em blockchain"
];

function createCE(slug, taxId, assuntoId, i, item) {
  const orgao = orgs[i % orgs.length];
  const banca = bancasCE[i % bancasCE.length];
  const cargo = cargos[i % cargos.length];
  const ctx = ctxScenarios[i % ctxScenarios.length];
  const dif = item.dif || (i % 3 === 0 ? "facil" : i % 3 === 1 ? "medio" : "dificil");

  return {
    idSlug: slug,
    disciplina_id: taxId,
    assunto_id: assuntoId,
    banca_nome: banca,
    orgao_nome: orgao,
    cargo_nome: cargo,
    ano: 2026,
    tipo: "certo_errado",
    dificuldade: dif,
    enunciado: `${item.enunciado}\n\nContexto operacional individualizado: ${ctx}. Julgue o item considerando estritamente as diretrizes normativas vigentes, doutrina consolidada e a jurisprudência sumulada aplicável em 2026. Identificador de controle ${slug}.`,
    explicacao: `${item.correta ? "GABARITO: CERTO." : "GABARITO: ERRADO."} ${item.explicacao} Fundamento analítico vinculado ao controle ${slug}.`,
    alternativas: [
      { texto: "Certo", correta: item.correta },
      { texto: "Errado", correta: !item.correta }
    ]
  };
}

function createME(slug, taxId, assuntoId, i, item) {
  const orgao = orgs[i % orgs.length];
  const banca = bancasME[i % bancasME.length];
  const cargo = cargos[i % cargos.length];
  const ctx = ctxScenarios[i % ctxScenarios.length];
  const dif = item.dif || (i % 3 === 0 ? "facil" : i % 3 === 1 ? "medio" : "dificil");
  const corretaIdx = item.corretaIdx !== undefined ? item.corretaIdx : (i % 5);

  const letras = ["A", "B", "C", "D", "E"];
  const alternativas = item.opcoes.map((txt, idx) => ({
    texto: txt,
    correta: idx === corretaIdx
  }));

  return {
    idSlug: slug,
    disciplina_id: taxId,
    assunto_id: assuntoId,
    banca_nome: banca,
    orgao_nome: orgao,
    cargo_nome: cargo,
    ano: 2026,
    tipo: "multipla_escolha",
    dificuldade: dif,
    enunciado: `${item.enunciado}\n\nCenário prático-operacional: ${ctx}. Assinale a alternativa que expressa a solução técnico-jurídica correta para a situação descrita. Referência de auditoria ${slug}.`,
    explicacao: `GABARITO: ${letras[corretaIdx]}. ${item.explicacao} Referência de auditoria ${slug}.`,
    alternativas
  };
}

export { createCE, createME };
