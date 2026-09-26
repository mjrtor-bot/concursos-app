import { TAXONOMIA } from "./taxonomia.mjs";

const dId = TAXONOMIA.disciplinas.informatica;
const aSeguranca = TAXONOMIA.assuntos.seguranca_info;
const aRedes = TAXONOMIA.assuntos.redes_nuvem;
const aSo = TAXONOMIA.assuntos.sistemas_operacionais;
const aDb = TAXONOMIA.assuntos.bancos_dados;

export const infoPart2 = [
  // 16
  {
    idSlug: "info-l4-16",
    disciplina_id: dId,
    assunto_id: aSeguranca,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Perito Criminal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O tipo de ataque cibernético em que o invasor insere instruções maliciosas em campos de entrada de dados de uma aplicação web para manipular e executar comandos diretamente no Sistema Gerenciador de Banco de Dados denomina-se:",
    explicacao: "GABARITO: Letra B. O SQL Injection (Injeção de SQL) ocorre quando uma aplicação web não sanitiza adequadamente os inputs dos usuários, permitindo que atacantes executem consultas SQL arbitrárias para ler, alterar ou destruir dados do banco.",
    alternativas: [
      { letra: "A", texto: "Cross-Site Scripting (XSS).", correta: false },
      { letra: "B", texto: "SQL Injection.", correta: true },
      { letra: "C", texto: "Man-in-the-Middle (MitM).", correta: false },
      { letra: "D", texto: "ARP Spoofing.", correta: false },
      { letra: "E", texto: "DNS Poisoning.", correta: false }
    ]
  },
  // 17
  {
    idSlug: "info-l4-17",
    disciplina_id: dId,
    assunto_id: aRedes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Delegado de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Uma VPN (Rede Privada Virtual) permite o tráfego seguro de dados entre dispositivos remotos através de uma rede pública (como a Internet), criando um túnel criptografado que assegura o sigilo e a integridade das comunicações.",
    explicacao: "GABARITO: CERTO. A VPN estabelece um túnel criptográfico ponto a ponto sobre a infraestrutura pública da Internet (utilizando protocolos como IPsec, OpenVPN ou WireGuard), garantindo confidencialidade, integridade e autenticidade aos dados em trânsito.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 18
  {
    idSlug: "info-l4-18",
    disciplina_id: dId,
    assunto_id: aSeguranca,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No âmbito da infraestrutura de chaves públicas brasileira (ICP-Brasil), a principal diferença entre os certificados digitais do tipo A1 e do tipo A3 reside no fato de que:",
    explicacao: "GABARITO: Letra A. O certificado A1 gera e armazena o par de chaves diretamente no computador/software com validade de 1 ano. O certificado A3 gera e armazena as chaves em hardware criptográfico dedicado inviolável (smartcard, token USB ou HSM) com validade de até 3 ou 5 anos.",
    alternativas: [
      { letra: "A", texto: "O certificado A1 é armazenado em software no computador (validade de 1 ano), enquanto o A3 é armazenado em mídia criptográfica física inviolável (como token ou smartcard).", correta: true },
      { letra: "B", texto: "O certificado A1 utiliza chaves assimétricas e o A3 opera exclusivamente com chaves simétricas.", correta: false },
      { letra: "C", texto: "O certificado A3 não possui validade jurídica perante os órgãos do Poder Judiciário.", correta: false },
      { letra: "D", texto: "O certificado A1 não permite a assinatura digital de documentos eletrônicos.", correta: false },
      { letra: "E", texto: "O certificado A3 destina-se unicamente a servidores web e roteadores de borda.", correta: false }
    ]
  },
  // 19
  {
    idSlug: "info-l4-19",
    disciplina_id: dId,
    assunto_id: aSo,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Rodoviária Federal",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "No Linux, ao atribuir a permissão numérica 'chmod 755 arquivo.sh', o proprietário adquire permissões completas de leitura, escrita e execução (7), enquanto o grupo e outros usuários adquirem permissões apenas de leitura e execução (5).",
    explicacao: "GABARITO: CERTO. Em octal: 7 = rwx (4+2+1), 5 = r-x (4+0+1). Assim, 755 confere rwx ao dono (User), r-x ao grupo (Group) e r-x aos demais (Others).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 20
  {
    idSlug: "info-l4-20",
    disciplina_id: dId,
    assunto_id: aDb,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Perito Criminal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em sistemas de bancos de dados relacionais, o acrônimo ACID representa quatro propriedades fundamentais de uma transação. A propriedade que assegura que todas as operações da transação sejam executadas com sucesso ou que nenhuma delas seja efetivada (tudo ou nada) é a:",
    explicacao: "GABARITO: Letra C. A Atomicidade garante que a transação é indivisível: se todas as operações forem concluídas com êxito, a transação sofre commit; se houver qualquer falha, sofre rollback retornando ao estado anterior.",
    alternativas: [
      { letra: "A", texto: "Consistência.", correta: false },
      { letra: "B", texto: "Isolamento.", correta: false },
      { letra: "C", texto: "Atomicidade.", correta: true },
      { letra: "D", texto: "Durabilidade.", correta: false },
      { letra: "E", texto: "Autonomia.", correta: false }
    ]
  },
  // 21
  {
    idSlug: "info-l4-21",
    disciplina_id: dId,
    assunto_id: aSeguranca,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Papiloscopista Policial Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "As funções criptográficas de resumo (hashing), como SHA-256 e SHA-3, são funções unidirecionais que geram uma saída de tamanho fixo a partir de uma entrada de qualquer tamanho, sendo utilizadas fundamentalmente para verificar a integridade dos dados.",
    explicacao: "GABARITO: CERTO. Funções de hash criptográfico são one-way (unidirecionais e irreversíveis), mapeando dados de tamanho arbitrário em um digest fixo (ex.: 256 bits no SHA-256). Qualquer alteração mínima na entrada altera drasticamente o hash resultante (efeito avalanche).",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 22
  {
    idSlug: "info-l4-22",
    disciplina_id: dId,
    assunto_id: aRedes,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil BA",
    cargo_nome: "Delegado de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "O protocolo que opera na camada de aplicação do modelo TCP/IP e tem como função primordial a tradução de nomes de domínio amigáveis (como 'www.pf.gov.br') em seus respectivos endereços IP numéricos é o:",
    explicacao: "GABARITO: Letra B. O DNS (Domain Name System) atua na resolução de nomes de domínio para endereços IP e vice-versa, operando usualmente sobre a porta 53 (UDP e TCP).",
    alternativas: [
      { letra: "A", texto: "SNMP", correta: false },
      { letra: "B", texto: "DNS", correta: true },
      { letra: "C", texto: "FTP", correta: false },
      { letra: "D", texto: "Telnet", correta: false },
      { letra: "E", texto: "IMAP", correta: false }
    ]
  },
  // 23
  {
    idSlug: "info-l4-23",
    disciplina_id: dId,
    assunto_id: aSeguranca,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O spyware do tipo keylogger é projetado para capturar e registrar de forma oculta todas as teclas digitadas pelo usuário no teclado físico do computador, enviando esses registros ao atacante para obtenção indevida de senhas e dados confidenciais.",
    explicacao: "GABARITO: CERTO. Keyloggers gravam o pressionamento de teclas do teclado para capturar senhas, mensagens e números de cartões de crédito.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 24
  {
    idSlug: "info-l4-24",
    disciplina_id: dId,
    assunto_id: aSo,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Escrivão de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "No sistema operacional Windows 10/11, a ferramenta nativa de linha de comando baseada em objetos e cmdlets avançados para automação administrativa é o:",
    explicacao: "GABARITO: Letra D. O PowerShell é o ambiente avançado de automação e linha de comando orientado a objetos da Microsoft, amplamente utilizado em tarefas administrativas forenses e de segurança.",
    alternativas: [
      { letra: "A", texto: "Bloco de Notas.", correta: false },
      { letra: "B", texto: "Paint 3D.", correta: false },
      { letra: "C", texto: "WordPad.", correta: false },
      { letra: "D", texto: "PowerShell.", correta: true },
      { letra: "E", texto: "Desfragmentador de Disco.", correta: false }
    ]
  },
  // 25
  {
    idSlug: "info-l4-25",
    disciplina_id: dId,
    assunto_id: aDb,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Os bancos de dados NoSQL do tipo 'Document Store' (orientados a documentos), como o MongoDB, armazenam dados em documentos semiestruturados (como JSON ou BSON), oferecendo flexibilidade de esquema (schemaless) em contraste com o esquema rígido das tabelas relacionais.",
    explicacao: "GABARITO: CERTO. Bancos NoSQL orientados a documentos armazenam dados na forma de documentos semiestruturados flexíveis (JSON/BSON), permitindo que cada documento possua campos distintos sem a obrigatoriedade de tabelas relacionais pré-fixadas.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 26
  {
    idSlug: "info-l4-26",
    disciplina_id: dId,
    assunto_id: aSeguranca,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil RJ",
    cargo_nome: "Perito Criminal",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "O conjunto de ferramentas e códigos maliciosos que se instala profundamente no sistema operacional (frequentemente no nível de kernel/ring 0), com a finalidade de ocultar a presença de outros malwares e manter acesso privilegiado contínuo ao invasor, denomina-se:",
    explicacao: "GABARITO: Letra A. O Rootkit atua no núcleo do sistema operacional (kernel) para ocultar processos, arquivos, conexões de rede e chaves de registro maliciosas de utilitários de auditoria e antivírus convencionais.",
    alternativas: [
      { letra: "A", texto: "Rootkit.", correta: true },
      { letra: "B", texto: "Adware.", correta: false },
      { letra: "C", texto: "Spam bot.", correta: false },
      { letra: "D", texto: "Macro vírus.", correta: false },
      { letra: "E", texto: "Scareware.", correta: false }
    ]
  },
  // 27
  {
    idSlug: "info-l4-27",
    disciplina_id: dId,
    assunto_id: aRedes,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Federal",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O protocolo SSH (Secure Shell) utiliza criptografia na camada de aplicação para fornecer acesso seguro e remoto ao shell de comando de servidores, operando convencionalmente na porta padrão TCP 22 em substituição ao vulnerável Telnet.",
    explicacao: "GABARITO: CERTO. O SSH opera na porta TCP 22 e implementa criptografia robusta para autenticação e troca de dados, substituindo com total segurança o protocolo Telnet (porta 23), que trafegava credenciais em texto claro.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 28
  {
    idSlug: "info-l4-28",
    disciplina_id: dId,
    assunto_id: aDb,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil SP",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "No contexto da análise massiva de dados e Big Data para investigações policiais, os '5 Vs' clássicos correspondem a:",
    explicacao: "GABARITO: Letra B. O conceito clássico dos 5 Vs do Big Data é composto por: Volume (grande quantidade de dados), Velocidade (rapidez de geração e processamento), Variedade (múltiplas fontes e formatos estruturados/não estruturados), Veracidade (confiabilidade dos dados) e Valor (relevância dos insights extraídos).",
    alternativas: [
      { letra: "A", texto: "Vulnerabilidade, Vetores, Vírus, Vantagem e Virtualização.", correta: false },
      { letra: "B", texto: "Volume, Velocidade, Variedade, Veracidade e Valor.", correta: true },
      { letra: "C", texto: "Validação, Visibilidade, Vinculação, Variação e Vanguarda.", correta: false },
      { letra: "D", texto: "Vigilância, Vítimas, Violência, Viabilidade e Veredito.", correta: false },
      { letra: "E", texto: "Vetorização, Virtualização, Vínculo, Volatilidade e Verificação.", correta: false }
    ]
  },
  // 29
  {
    idSlug: "info-l4-29",
    disciplina_id: dId,
    assunto_id: aSeguranca,
    banca_nome: "CEBRASPE",
    orgao_nome: "Polícia Civil DF",
    cargo_nome: "Agente de Polícia",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "O ataque de Spoofing (mascaramento) de endereço IP consiste na falsificação do cabeçalho de pacotes de dados para ocultar a verdadeira identidade do remetente ou fazer-se passar por outro sistema confiável da rede.",
    explicacao: "GABARITO: CERTO. No IP Spoofing, o invasor forja o campo de IP de origem dos pacotes TCP/IP para burlar regras de firewall baseadas em IP ou conduzir ataques DDoS de amplificação.",
    alternativas: [
      { letra: "C", texto: "Certo", correta: true },
      { letra: "E", texto: "Errado", correta: false }
    ]
  },
  // 30
  {
    idSlug: "info-l4-30",
    disciplina_id: dId,
    assunto_id: aSo,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil PR",
    cargo_nome: "Investigador de Polícia",
    ano: 2025,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "No ambiente Linux, o comando utilizado para visualizar interativamente em tempo real a lista de processos em execução e o consumo de memória RAM e CPU é o:",
    explicacao: "GABARITO: Letra D. O comando `top` (ou `htop`) exibe em tempo real o monitoramento dinâmico dos processos e recursos de CPU e memória do sistema.",
    alternativas: [
      { letra: "A", texto: "df -h", correta: false },
      { letra: "B", texto: "uptime", correta: false },
      { letra: "C", texto: "pwd", correta: false },
      { letra: "D", texto: "top", correta: true },
      { letra: "E", texto: "whoami", correta: false }
    ]
  }
];
