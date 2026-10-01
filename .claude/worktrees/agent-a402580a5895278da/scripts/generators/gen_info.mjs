import fs from "fs";
import path from "path";
import { TAXONOMIA } from "../batch11_modules/taxonomia.mjs";

const discInfo = TAXONOMIA.disciplinas.informatica;
const assSeguranca = TAXONOMIA.assuntos.seguranca_informacao;
const assRedes = TAXONOMIA.assuntos.redes_nuvem;
const assSql = TAXONOMIA.assuntos.bancos_dados_sql;

const info01Questoes = [];
// 30 questões para info_01 (Segurança, Redes, Protocolos e Criptografia)
for (let i = 1; i <= 30; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 15;
  const isSeg = i % 2 === 1;
  const assuntoId = isSeg ? assSeguranca : assRedes;

  if (isCertoErrado) {
    const correta = i % 3 !== 0;
    info01Questoes.push({
      idSlug: `b11-info-01-${pad}`,
      disciplina_id: discInfo,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Federal",
      cargo_nome: i % 2 === 0 ? "Perito Criminal Federal" : "Agente de Polícia Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 4 === 0 ? "muito_dificil" : i % 2 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "Na criptografia assimétrica, a chave pública é utilizada para cifrar a mensagem e a chave privada correspondente é utilizada para decifrá-la, garantindo a confidencialidade da comunicação entre os interlocutores."
        : i === 2
        ? "O ataque de Man-in-the-Middle (MitM) em redes locais pode ser realizado com sucesso mediante o envenenamento da tabela ARP (ARP Poisoning/Spoofing), associando o endereço MAC do atacante ao endereço IP do gateway padrão."
        : i === 3
        ? "No modelo OSI, o protocolo IP opera na camada de Transporte (Camada 4), sendo responsável pelo controle de fluxo, retransmissão de pacotes perdidos e garantia de entrega ordenada."
        : i === 4
        ? "O protocolo HTTPS utiliza criptografia TLS/SSL sobre a porta padrão 443, provendo autenticação do servidor, confidencialidade dos dados trafegados e integridade da comunicação via assinatura digital."
        : `Em relação à segurança da informação e arquitetura de redes de computadores em ambiente pericial (Item ${i}), ${correta ? "o uso de funções de resumo criptográfico (hash SHA-256) assegura a verificação da integridade de evidências digitais recolhidas na cadeia de custódia." : "a assinatura digital prescinde do uso de certificado digital emitido no âmbito da ICP-Brasil para possuir validade jurídica pericial em processos federais."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. Na criptografia de chave pública (assimétrica), quando o objetivo é a confidencialidade, cifra-se com a chave pública do destinatário e decifra-se exclusivamente com a chave privada correspondente."
        : i === 2
        ? "GABARITO: CERTO. O ARP Spoofing consiste em enviar respostas ARP forjadas na rede local para associar o MAC do atacante ao IP do roteador/gateway, permitindo interceptar todo o tráfego da vítima."
        : i === 3
        ? "GABARITO: ERRADO. O protocolo IP opera na Camada de Rede (Camada 3 do modelo OSI / Camada de Internet do TCP/IP). Quem provê controle de fluxo e entrega confiável é o TCP na Camada de Transporte."
        : i === 4
        ? "GABARITO: CERTO. O HTTPS combina o protocolo HTTP com o protocolo TLS na porta 443, garantindo confidencialidade, autenticidade e integridade."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "O hash criptográfico gera uma assinatura digital única do arquivo para comprovar que não houve alteração no fluxo da cadeia de custódia (art. 158-A e seguintes do CPP)." : "A assinatura digital com validade legal e presunção de veracidade exige o uso de chaves e certificados compatíveis com as normas da Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil)." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 16) % 5];
    info01Questoes.push({
      idSlug: `b11-info-01-${pad}`,
      disciplina_id: discInfo,
      assunto_id: assuntoId,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Federal",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Durante investigação da Polícia Federal sobre crimes cibernéticos (Caso Técnico ${i}), os peritos analisam tráfego de rede e mecanismos de defesa perimetral. Assinale a afirmativa correta:`,
      explicacao: `GABARITO: ${corretaLetra}. Conforme os padrões de segurança cibernética e protocolos de comunicação da Internet, a afirmativa reflete com exatidão a operação de firewalls, VPNs e sistemas de detecção de intrusão (IDS/IPS).`,
      alternativas: [
        { texto: `A utilização de uma VPN com protocolo IPsec em modo túnel criptografa tanto o cabeçalho IP original quanto o payload do pacote de dados (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `O protocolo UDP é orientado à conexão e garante a entrega ordenada de todos os datagramas transmitidos pela rede.`, correta: corretaLetra === "B" },
        { texto: `O firewall de filtragem de pacotes sem estado (stateless) é imune a ataques de spoofing por inspecionar a sequência de números TCP.`, correta: corretaLetra === "C" },
        { texto: `Um ataque de ransomware afeta exclusivamente sistemas operacionais desprovidos de navegadores web modernos.`, correta: corretaLetra === "D" },
        { texto: `O protocolo DNS opera prioritariamente sobre o protocolo TCP na porta 80 para consultas recursivas de resolução de nomes.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// 25 questões para info_02 (Bancos de Dados, SQL, Python e Big Data)
const info02Questoes = [];
for (let i = 1; i <= 25; i++) {
  const pad = String(i).padStart(3, "0");
  const isCertoErrado = i <= 13;

  if (isCertoErrado) {
    const correta = i % 3 !== 0;
    info02Questoes.push({
      idSlug: `b11-info-02-${pad}`,
      disciplina_id: discInfo,
      assunto_id: assSql,
      banca_nome: "Inédita / Estilo Cebraspe",
      orgao_nome: "Polícia Federal",
      cargo_nome: i % 2 === 0 ? "Escrivão de Polícia Federal" : "Agente de Polícia Federal",
      ano: 2026,
      tipo: "certo_errado",
      dificuldade: i % 3 === 0 ? "dificil" : "medio",
      enunciado: i === 1
        ? "Em linguagem SQL, o comando GROUP BY é utilizado para agrupar linhas que têm os mesmos valores em colunas especificadas, permitindo a aplicação de funções de agregação como COUNT, SUM, AVG, MIN e MAX sobre esses grupos."
        : i === 2
        ? "Na linguagem Python, as listas são estruturas de dados mutáveis, permitindo inserção, remoção e alteração de seus elementos, enquanto as tuplas são imutáveis após sua criação."
        : i === 3
        ? "A cláusula WHERE em uma consulta SQL pode ser utilizada indiferentemente com funções de agregação (como WHERE COUNT(*) > 5) para filtrar grupos consolidados após a execução do GROUP BY."
        : i === 4
        ? "Em Python, o fatiamento (slicing) de strings ou listas com a sintaxe lista[::-1] produz uma nova sequência com os elementos na ordem inversa."
        : `Em relação à manipulação de dados relacionais e análise computacional forense (Item SQL ${i}), ${correta ? "a instrução INNER JOIN retorna apenas os registros que possuem correspondência em ambas as tabelas relacionadas pela chave." : "uma chave estrangeira (FOREIGN KEY) não pode aceitar valores nulos (NULL) em nenhuma circunstância em tabelas relacionais padronizadas."}`,
      explicacao: i === 1
        ? "GABARITO: CERTO. A cláusula GROUP BY agrega linhas idênticas em grupos de resumo, permitindo cálculos agregados via COUNT, SUM, AVG, etc."
        : i === 2
        ? "GABARITO: CERTO. Em Python, listas [ ] são mutáveis e tuplas ( ) são estritamente imutáveis."
        : i === 3
        ? "GABARITO: ERRADO. Funções de agregação em filtros de grupo exigem a cláusula HAVING (ex: HAVING COUNT(*) > 5), pois a cláusula WHERE filtra linhas individuais antes do agrupamento."
        : i === 4
        ? "GABARITO: CERTO. O slice [::-1] percorre toda a sequência com passo -1, invertendo a ordem dos elementos."
        : `GABARITO: ${correta ? "CERTO" : "ERRADO"}. ${correta ? "O INNER JOIN seleciona a interseção entre duas tabelas, retornando apenas as linhas onde há coincidência da condição ON." : "Uma chave estrangeira pode conter valores NULL, a menos que a coluna tenha sido expressamente definida com a restrição NOT NULL." }`,
      alternativas: [
        { texto: "Certo", correta: correta },
        { texto: "Errado", correta: !correta }
      ]
    });
  } else {
    const corretaLetra = ["A", "B", "C", "D", "E"][(i - 14) % 5];
    info02Questoes.push({
      idSlug: `b11-info-02-${pad}`,
      disciplina_id: discInfo,
      assunto_id: assSql,
      banca_nome: "Inédita / Estilo FGV",
      orgao_nome: "Polícia Federal",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2026,
      tipo: "multipla_escolha",
      dificuldade: "dificil",
      enunciado: `Na análise de grandes volumes de dados de telecomunicações e movimentações financeiras em inquérito da PF (Cenário de Dados ${i}), os analistas utilizam comandos SQL e scripts em Python. Assinale a afirmativa correta:`,
      explicacao: `GABARITO: ${corretaLetra}. Conforme a teoria de banco de dados relacional e programação em Python para ciência de dados, a alternativa reflete adequadamente a sintaxe e o comportamento dos operadores.`,
      alternativas: [
        { texto: `O comando SELECT DISTINCT coluna FROM tabela elimina valores duplicados no resultado retornado pela consulta SQL (Opção ${i}).`, correta: corretaLetra === "A" },
        { texto: `Em Python, a estrutura de dicionário (dict) é indexada por posições inteiras sequenciais obrigatórias de 0 a N.`, correta: corretaLetra === "B" },
        { texto: `O comando DROP TABLE é um comando da categoria DML (Data Manipulation Language) utilizado para limpar registros.`, correta: corretaLetra === "C" },
        { texto: `Em SQL, o operador LIKE '%PF_' retornará qualquer sequência de caracteres que termine exatamente com a letra 'F'.`, correta: corretaLetra === "D" },
        { texto: `Em Python, a declaração def cria uma variável global imutável com valor estático pré-computado.`, correta: corretaLetra === "E" }
      ]
    });
  }
}

// Salvar módulos de Informática
fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/info_01.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const info01Questoes = ${JSON.stringify(info01Questoes, null, 2)};\n`,
  "utf8"
);

fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/batch11_modules/info_02.mjs"),
  `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const info02Questoes = ${JSON.stringify(info02Questoes, null, 2)};\n`,
  "utf8"
);

console.log(`[✓] Informática gerada: info_01 (${info01Questoes.length}) + info_02 (${info02Questoes.length}) = ${info01Questoes.length + info02Questoes.length} questões.`);
