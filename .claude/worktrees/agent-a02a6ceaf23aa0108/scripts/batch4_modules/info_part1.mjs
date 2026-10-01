import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.informatica;
const aSeguranca = TAXONOMIA.assuntos.seguranca_info;
const aRedes = TAXONOMIA.assuntos.redes_nuvem;
const aSo = TAXONOMIA.assuntos.sistemas_operacionais;
const aDb = TAXONOMIA.assuntos.bancos_dados;

export const infoPart1 = [
  // 01
  {
    idSlug: "info-l4-01",
    disciplina_id: dId,
    assunto_id: aSeguranca,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O ransomware é um tipo de código malicioso que torna inacessíveis os dados armazenados em um dispositivo por meio de criptografia forte, exigindo da vítima o pagamento de um resgate para o fornecimento da respectiva chave de decifração.",
    explicacao: "GABARITO: CERTO. O ransomware é um malware extorsivo que sequestra dados ou sistemas cifrando arquivos críticos com algoritmos criptográficos robustos e exige resgate (geralmente em criptomoedas) para restauração do acesso.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 02
  {
    idSlug: "info-l4-02",
    disciplina_id: dId,
    assunto_id: aSeguranca,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Perito Criminal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em criptografia assimétrica (de chave pública), para garantir simultaneamente a Confidencialidade e a Autenticidade/Não-repúdio no envio de uma mensagem de um remetente 'A' para um destinatário 'B', o remetente 'A' deve:",
    explicacao: "GABARITO: Letra B. Para garantir a autenticidade e não-repúdio (assinatura digital), o remetente 'A' assina/cifra a mensagem com sua própria chave privada (que só ele possui). Para garantir a confidencialidade, a mensagem é cifrada com a chave pública do destinatário 'B' (que apenas a chave privada de 'B' conseguirá decifrar).",
    alternativas: [
      { letra: "A", texto: "Cifrar a mensagem com a chave pública de A e assinar com a chave pública de B.", correta: false },
      { letra: "B", texto: "Assinar a mensagem com a chave privada de A e cifrar o conteúdo com a chave pública de B.", correta: true },
      { letra: "C", texto: "Cifrar a mensagem com uma chave simétrica e enviá-la sem proteção de integridade.", correta: false },
      { letra: "D", texto: "Assinar a mensagem com a chave privada de B e decifrar com a chave pública de A.", correta: false },
      { letra: "E", texto: "Utilizar a chave mestra do sistema operacional em modo hashing unidirecional sem sal.", correta: false }
    ]
  },
  // 03
  {
    idSlug: "info-l4-03",
    disciplina_id: dId,
    assunto_id: aRedes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O protocolo HTTPS utiliza a porta padrão TCP 443 e implementa uma camada de segurança por meio dos protocolos TLS/SSL sobre o protocolo HTTP, assegurando a confidencialidade e a integridade da comunicação entre o navegador do usuário e o servidor web.",
    explicacao: "GABARITO: CERTO. O HTTPS (Hypertext Transfer Protocol Secure) opera por padrão na porta TCP 443 e emprega TLS/SSL para criptografar a sessão HTTP, garantindo confidencialidade, integridade e autenticação mútua via certificados digitais.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 04
  {
    idSlug: "info-l4-04",
    disciplina_id: dId,
    assunto_id: aSo,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No ambiente de linha de comando do sistema operacional Linux, o comando utilizado para alterar as permissões de acesso de arquivos e diretórios (leitura, escrita e execução) é o:",
    explicacao: "GABARITO: Letra A. O comando `chmod` (change mode) altera permissões de arquivos/diretórios. O `chown` altera o proprietário, `ls` lista arquivos, `grep` busca padrões de texto e `ps` lista processos em execução.",
    alternativas: [
      { letra: "A", texto: "chmod", correta: true },
      { letra: "B", texto: "chown", correta: false },
      { letra: "C", texto: "chgrp", correta: false },
      { letra: "D", texto: "passwd", correta: false },
      { letra: "E", texto: "rmdir", correta: false }
    ]
  },
  // 05
  {
    idSlug: "info-l4-05",
    disciplina_id: dId,
    assunto_id: aDb,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Em bancos de dados relacionais padrão SQL, a cláusula 'HAVING' é utilizada para filtrar registros com base em condições aplicadas diretamente aos grupos gerados pela cláusula 'GROUP BY', ao passo que a cláusula 'WHERE' filtra linhas individuais antes do agrupamento.",
    explicacao: "GABARITO: CERTO. A cláusula WHERE filtra tuplas individuais antes de qualquer agregação. Já a cláusula HAVING atua sobre as funções agregadas (COUNT, SUM, AVG, MAX, MIN) após o agrupamento dos dados pela cláusula GROUP BY.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 06
  {
    idSlug: "info-l4-06",
    disciplina_id: dId,
    assunto_id: aRedes,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Perito Criminal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em relação ao modelo de computação em nuvem, o serviço em que o provedor disponibiliza ao usuário a infraestrutura completa de servidores virtuais, redes, roteadores e capacidade de armazenamento, cabendo ao cliente instalar e gerenciar o sistema operacional e as aplicações, denomina-se:",
    explicacao: "GABARITO: Letra C. Trata-se do modelo IaaS (Infrastructure as a Service), no qual o cliente aluga recursos computacionais brutos (VMs, discos, redes) e gerencia o SO, middlewares e aplicações. No PaaS, o cliente foca apenas na aplicação/código; no SaaS, consome a aplicação pronta.",
    alternativas: [
      { letra: "A", texto: "SaaS (Software as a Service).", correta: false },
      { letra: "B", texto: "PaaS (Platform as a Service).", correta: false },
      { letra: "C", texto: "IaaS (Infrastructure as a Service).", correta: true },
      { letra: "D", texto: "DaaS (Desktop as a Service) híbrido.", correta: false },
      { letra: "E", texto: "BaaS (Backend as a Service) relacional.", correta: false }
    ]
  },
  // 07
  {
    idSlug: "info-l4-07",
    disciplina_id: dId,
    assunto_id: aSeguranca,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O ataque de Phishing consiste em uma técnica de engenharia social por meio da qual golpistas induzem a vítima a fornecer informações confidenciais (senhas, dados bancários) fingindo ser uma entidade confiável mediante e-mails, mensagens ou páginas fraudulentas.",
    explicacao: "GABARITO: CERTO. O phishing utiliza iscas falsas (e-mails fraudulentos, sites clones, mensagens de SMS) para enganar usuários e roubar credenciais de acesso ou dados financeiros sigilosos.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 08
  {
    idSlug: "info-l4-08",
    disciplina_id: dId,
    assunto_id: aRedes,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O protocolo responsável pela atribuição dinâmica e automática de endereços IP, máscara de sub-rede e gateway padrão aos dispositivos conectados a uma rede local de computadores é o:",
    explicacao: "GABARITO: Letra D. O DHCP (Dynamic Host Configuration Protocol) é o protocolo da camada de aplicação (operando sobre portas UDP 67 e 68) responsável por distribuir automaticamente endereços IP e configurações de rede aos hosts.",
    alternativas: [
      { letra: "A", texto: "DNS (Domain Name System).", correta: false },
      { letra: "B", texto: "SNMP (Simple Network Management Protocol).", correta: false },
      { letra: "C", texto: "FTP (File Transfer Protocol).", correta: false },
      { letra: "D", texto: "DHCP (Dynamic Host Configuration Protocol).", correta: true },
      { letra: "E", texto: "ARP (Address Resolution Protocol).", correta: false }
    ]
  },
  // 09
  {
    idSlug: "info-l4-09",
    disciplina_id: dId,
    assunto_id: aSo,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No sistema Linux, o diretório '/etc' destina-se primordialmente ao armazenamento de arquivos de configuração do sistema operacional e dos serviços instalados, enquanto o diretório '/var/log' armazena arquivos de registros (logs) do sistema e de aplicativos.",
    explicacao: "GABARITO: CERTO. Conforme o FHS (Filesystem Hierarchy Standard), o `/etc` abriga arquivos de configuração estáticos do host e o `/var/log` concentra os arquivos de log de auditoria e monitoramento do sistema.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 10
  {
    idSlug: "info-l4-10",
    disciplina_id: dId,
    assunto_id: aSeguranca,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O princípio da segurança da informação que garante que uma entidade não possa negar a autoria de uma transação ou mensagem eletrônica que tenha efetivamente emitido e assinado digitalmente denomina-se:",
    explicacao: "GABARITO: Letra B. O princípio do Não-repúdio (ou Irretratabilidade) impede que o autor de uma ação/mensagem eletrônica negue formalmente a autoria do ato, proporcionado pelo uso de assinatura digital com certificado digital válido.",
    alternativas: [
      { letra: "A", texto: "Confidencialidade estrita.", correta: false },
      { letra: "B", texto: "Não-repúdio (irretratabilidade).", correta: true },
      { letra: "C", texto: "Disponibilidade concorrente.", correta: false },
      { letra: "D", texto: "Conformidade simétrica.", correta: false },
      { letra: "E", texto: "Redundância ativa.", correta: false }
    ]
  },
  // 11
  {
    idSlug: "info-l4-11",
    disciplina_id: dId,
    assunto_id: aRedes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O protocolo IPv6 utiliza endereços com extensão de 128 bits, representados convencionalmente em formato hexadecimal separado por dois-pontos, superando o esgotamento do espaço de endereçamento do padrão IPv4, que possui 32 bits.",
    explicacao: "GABARITO: CERTO. O IPv4 tem 32 bits (4 octetos decimais, gerando ~4,3 bilhões de endereços), enquanto o IPv6 possui 128 bits (8 grupos de 4 dígitos hexadecimais), expandindo enormemente a capacidade de endereçamento global.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 12
  {
    idSlug: "info-l4-12",
    disciplina_id: dId,
    assunto_id: aDb,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Perito Criminal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Na modelagem de bancos de dados relacionais, o conceito que garante que um valor de chave estrangeira em uma tabela referenciadora deve corresponder obrigatoriamente a uma chave primária existente na tabela referenciada denomina-se:",
    explicacao: "GABARITO: Letra A. A Integridade Referencial é a regra que assegura a consistência dos relacionamentos entre tabelas, impedindo a existência de chaves estrangeiras que apontem para registros inexistentes na tabela pai.",
    alternativas: [
      { letra: "A", texto: "Integridade referencial.", correta: true },
      { letra: "B", texto: "Integridade de domínio isolado.", correta: false },
      { letra: "C", texto: "Atomicidade transacional assíncrona.", correta: false },
      { letra: "D", texto: "Normalização de Boyce-Codd recursiva.", correta: false },
      { letra: "E", texto: "Consistência eventual não relacional.", correta: false }
    ]
  },
  // 13
  {
    idSlug: "info-l4-13",
    disciplina_id: dId,
    assunto_id: aSeguranca,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O Trojan (cavalo de Troia) é um programa aparentemente inofensivo ou útil que esconde funcionalidades maliciosas, executando ações danosas em segundo plano sem o consentimento do usuário ao ser executado.",
    explicacao: "GABARITO: CERTO. O Trojan disfarça-se de software legítimo (jogos, utilitários, instaladores) para enganar o usuário, abrindo portas de comunicação (backdoors) e executando comandos maliciosos.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 14
  {
    idSlug: "info-l4-14",
    disciplina_id: dId,
    assunto_id: aSo,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "No ambiente Linux, o comando utilizado para pesquisar termos ou expressões regulares dentro do conteúdo de arquivos de texto é o:",
    explicacao: "GABARITO: Letra C. O utilitário `grep` (Global Regular Expression Print) realiza buscas por padrões de texto e expressões regulares dentro de arquivos.",
    alternativas: [
      { letra: "A", texto: "find", correta: false },
      { letra: "B", texto: "locate", correta: false },
      { letra: "C", texto: "grep", correta: true },
      { letra: "D", texto: "head", correta: false },
      { letra: "E", texto: "touch", correta: false }
    ]
  },
  // 15
  {
    idSlug: "info-l4-15",
    disciplina_id: dId,
    assunto_id: aSeguranca,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Ataques de negação de serviço distribuída (DDoS) caracterizam-se pela sobrecarga intencional dos recursos de um servidor ou enlace de rede por meio de requisições simultâneas originadas de múltiplos dispositivos comprometidos (botnets), com o objetivo de tornar o serviço indisponível aos usuários legítimos.",
    explicacao: "GABARITO: CERTO. O ataque DDoS (Distributed Denial of Service) emprega centenas ou milhares de máquinas zumbis (botnet) controladas remotamente para inundar o alvo com tráfego massivo, esgotando memória, processamento ou largura de banda.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  }
];
