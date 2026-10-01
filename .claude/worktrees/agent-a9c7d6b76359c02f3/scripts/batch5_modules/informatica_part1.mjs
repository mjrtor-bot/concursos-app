import { TAXONOMIA } from "./taxonomia.mjs";

const ce = (idSlug, assunto_id, enunciado, correta, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.informatica,
  assunto_id,
  banca_nome: "CEBRASPE",
  orgao_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Polícia Federal" : "Polícia Civil",
  cargo_nome: idSlug.endsWith("1") || idSlug.endsWith("6") ? "Perito Criminal Federal" : "Agente de Polícia",
  ano: 2025,
  tipo: "certo_errado",
  dificuldade: "dificil",
  enunciado,
  alternativas: [
    { letra: "C", texto: "Certo", correta, explicacao_especifica: correta ? "Correto. Assertiva tecnicamente precisa em conformidade com as normas RFC e os padrões de segurança da informação." : "Incorreto. A assertiva contém erro técnico ou conceitual." },
    { letra: "E", texto: "Errado", correta: !correta, explicacao_especifica: !correta ? "Correto. A assertiva apresenta incorreção sobre a arquitetura de redes ou segurança computacional." : "Incorreto. A afirmação descreve com exatidão o protocolo ou conceito de TI." }
  ],
  explicacao: `Gabarito: ${correta ? "Certo" : "Errado"}. ${explicacao}`
});

const me = (idSlug, assunto_id, enunciado, corretaLetra, alternativas, explicacao) => ({
  idSlug,
  disciplina_id: TAXONOMIA.disciplinas.informatica,
  assunto_id,
  banca_nome: "FGV",
  orgao_nome: "Polícia Federal",
  cargo_nome: "Perito Criminal Federal - Área Informática",
  ano: 2024,
  tipo: "multipla_escolha",
  dificuldade: "dificil",
  enunciado,
  alternativas: alternativas.map(([letra, texto, just]) => ({ letra, texto, correta: letra === corretaLetra, explicacao_especifica: just })),
  explicacao: `Gabarito: ${corretaLetra}. ${explicacao}`
});

export const informaticaPart1 = [
  ce("inf-b5-001", TAXONOMIA.assuntos.seguranca_info,
    "No processo de assinatura digital de um documento eletrônico, o emissor gera um resumo criptográfico (hash) do conteúdo utilizando um algoritmo como o SHA-256 e, em seguida, encripta esse resumo com a sua própria chave privada. O destinatário, de posse da chave pública do emissor, decripta o resumo e o compara com o hash recalculado do documento recebido, garantindo a autenticidade, a integridade e o não repúdio da mensagem.",
    true,
    "Na assinatura digital assimétrica, a chave privada do autor assina (encripta o hash) e a chave pública correspondente verifica a assinatura, garantindo autenticidade, integridade e irretratabilidade."),

  me("inf-b5-002", TAXONOMIA.assuntos.seguranca_info,
    "A respeito dos algoritmos criptográficos simétricos e assimétricos, assinale a afirmativa correta.",
    "B",
    [
      ["A", "O algoritmo RSA é um exemplo clássico de criptografia simétrica fundamentada no compartilhamento de uma única chave secreta.", "Incorreta. O RSA é assimétrico de chave pública."],
      ["B", "O AES (Advanced Encryption Standard) é um algoritmo de criptografia simétrica de bloco que opera com tamanhos de chave de 128, 192 ou 256 bits, destacando-se por sua alta velocidade de processamento e robustez matemática na proteção de grandes volumes de dados sigilosos.", "Correta. O AES é o padrão simétrico global do NIST/EUA."],
      ["C", "A criptografia assimétrica é mais rápida e consome menos recursos computacionais do que a criptografia simétrica.", "Incorreta. A criptografia assimétrica é computacionalmente muito mais pesada e lenta."],
      ["D", "As funções de hash criptográfico como SHA-3 e MD5 são reversíveis mediante decriptação com a chave pública do remetente.", "Incorreta. Hashes são funções unidirecionais (*one-way*), não sendo reversíveis."],
      ["E", "O protocolo Diffie-Hellman é um algoritmo de assinatura digital de código fechado que dispensa chaves matemáticas.", "Incorreta. Diffie-Hellman é protocolo de troca segura de chaves simétricas sobre canal inseguro."]
    ],
    "O AES é um padrão criptográfico simétrico em bloco (128 bits de bloco) com chaves de 128, 192 e 256 bits, amplamente utilizado em sistemas governamentais e corporativos devido à sua eficiência e segurança comprovada."),

  ce("inf-b5-003", TAXONOMIA.assuntos.redes_computadores,
    "No protocolo TCP (Transmission Control Protocol), o estabelecimento de uma conexão confiável entre cliente e servidor é realizado por meio do mecanismo de *three-way handshake*, composto pela sequência ordenada de pacotes com os *flags*: SYN (enviado pelo cliente), SYN-ACK (respondido pelo servidor) e ACK (confirmado pelo cliente).",
    true,
    "O handshake de 3 vias do TCP estabelece os números de sequência iniciais e parâmetros de sincronização entre as duas pontas antes da transmissão de dados."),

  me("inf-b5-004", TAXONOMIA.assuntos.redes_computadores,
    "A respeito das diferenças estruturais entre o protocolo IPv4 e o protocolo IPv6 na camada de rede da Internet, assinale a opção correta.",
    "A",
    [
      ["A", "O IPv4 utiliza endereços de 32 bits representados em quatro octetos decimais separados por pontos, enquanto o IPv6 emprega endereços de 128 bits representados em oito grupos de quatro dígitos hexadecimais separados por dois-pontos, abolindo as transmissões do tipo *broadcast* em favor de *multicast* e *anycast*.", "Correta. Diferenças fundamentais de tamanho de endereço, notação e mecanismo de difusão."],
      ["B", "O IPv6 reduziu o espaço de endereçamento global para 64 bits a fim de acelerar o roteamento de pacotes.", "Incorreta. O IPv6 expandiu o espaço para 128 bits (3,4 x 10^38 endereços)."],
      ["C", "No IPv4, os pacotes trafegam obrigatoriamente sem cabeçalho e sem suporte a fragmentação.", "Incorreta. O IPv4 suporta cabeçalho estruturado e fragmentação em roteadores intermediários."],
      ["D", "O protocolo IPv6 manteve o mecanismo de difusão geral (*broadcast*) em todas as suas sub-redes locais.", "Incorreta. O IPv6 eliminou o broadcast, utilizando multicast."],
      ["E", "O IPv6 inviabilizou a autoconfiguração de endereços sem estado (SLAAC).", "Incorreta. O SLAAC é uma das principais inovações nativas do IPv6."]
    ],
    "O IPv6 possui 128 bits de endereçamento (hexadecimal), substitui o broadcast por multicast/anycast, simplifica o cabeçalho fixo e permite a autoconfiguração sem estado (SLAAC)."),

  ce("inf-b5-005", TAXONOMIA.assuntos.seguranca_info,
    "Um ataque de *Ransomware* consiste na infecção de um sistema computacional por um código malicioso que encripta os arquivos do usuário com chaves criptográficas fortes, exigindo o pagamento de resgate (frequentemente em criptomoedas) para o fornecimento da chave privada de decriptação, caracterizando grave comprometimento do princípio da disponibilidade e da integridade da informação.",
    true,
    "O ransomware afeta diretamente a disponibilidade dos dados da vítima ao privá-la do acesso por meio de encriptação não autorizada."),

  me("inf-b5-006", TAXONOMIA.assuntos.seguranca_info,
    "No âmbito da segurança perimetral de redes corporativas, um Firewall do tipo *Stateful Inspection* (inspeção de estados) diferencia-se de um Firewall *Stateless* (filtragem simples de pacotes) porque:",
    "C",
    [
      ["A", "analisa exclusivamente a velocidade física da placa de rede Ethernet sem inspecionar endereços IP.", "Incorreta. Firewalls operam nas camadas lógicas de rede e transporte."],
      ["B", "executa a descriptografia quântica de todos os certificados digitais da rede local.", "Incorreta. Não tem correlação com computação quântica."],
      ["C", "mantém uma tabela dinâmica de estados que rastreia as conexões ativas, avaliando o contexto da sessão (como flags TCP e sequência de pacotes) para autorizar apenas os pacotes de retorno que pertençam a uma conexão legitimamente iniciada e estabelecida de dentro da rede protegida.", "Correta. É o conceito exato de stateful inspection."],
      ["D", "filtra os pacotes analisando unicamente o endereço IP e a porta de forma isolada, sem registrar se o pacote faz parte de uma sessão em andamento.", "Incorreta. Essa é a definição de firewall stateless."],
      ["E", "bloqueia compulsoriamente todo o tráfego que utilize a porta 443 do protocolo HTTPS.", "Incorreta. O tráfego HTTPS é autorizado conforme regras de negócio."]
    ],
    "O firewall stateful inspection armazena em memória o estado das conexões ativas (Connection Table). Ele reconhece respostas a requisições internas legítimas e as autoriza automaticamente, bloqueando tentativas de entrada não solicitadas."),

  ce("inf-b5-007", TAXONOMIA.assuntos.redes_computadores,
    "O protocolo DNS (Domain Name System) utiliza primariamente a porta 53 com o protocolo de transporte UDP para responder a consultas rápidas de resolução de nomes em endereços IP, recorrendo ao protocolo TCP na mesma porta 53 para a transferência de zonas de domínio (*zone transfer*) entre servidores DNS primários e secundários ou quando a resposta ultrapassa o tamanho máximo permitido pelo pacote UDP convencional.",
    true,
    "O DNS utiliza UDP 53 para consultas de resolução (baixa latência) e TCP 53 para respostas volumosas (> 512 bytes) e sincronização/transferência de zonas entre servidores DNS."),

  me("inf-b5-008", TAXONOMIA.assuntos.seguranca_info,
    "Em uma perícia computacional forense sobre invasão de banco de dados corporativo, identificou-se que o invasor inseriu a seguinte cadeia de caracteres em um formulário web de login: `admin' OR '1'='1' --`. Esse tipo de ataque cibernético denomina-se:",
    "B",
    [
      ["A", "Cross-Site Scripting (XSS) refletido.", "Incorreta. XSS injeta scripts maliciosos em navegadores clientes."],
      ["B", "SQL Injection (Injeção de SQL).", "Correta. É a técnica clássica de SQL Injection para alterar a lógica da consulta SQL."],
      ["C", "DDoS por amplificação NTP.", "Incorreta. Ataque volumétrico de rede para indisponibilidade."],
      ["D", "Man-in-the-Middle (MitM) por envenenamento ARP.", "Incorreta. Interceptação de pacotes na camada de enlace."],
      ["E", "Buffer Overflow de pilha.", "Incorreta. Sobrecarga de memória em linguagens de baixo nível como C."]
    ],
    "O SQL Injection ocorre quando entradas de dados não sanitizadas são concatenadas diretamente em consultas SQL dinâmicas no backend, permitindo que a condição lógica (`'1'='1'`) torne a cláusula WHERE sempre verdadeira e burle a autenticação."),

  ce("inf-b5-009", TAXONOMIA.assuntos.redes_computadores,
    "O modelo de computação em nuvem IaaS (Infrastructure as a Service) fornece ao usuário recursos computacionais fundamentais, como máquinas virtuais, armazenamento em bloco e capacidade de processamento, transferindo ao contratante a responsabilidade pelo gerenciamento e pela segurança do sistema operacional, dos middlewares, dos runtimes e das aplicações instaladas.",
    true,
    "No modelo de responsabilidade compartilhada da nuvem: no IaaS o provedor gerencia hardware e hipervisor, enquanto o cliente gerencia SO, segurança, dados e aplicações."),

  me("inf-b5-010", TAXONOMIA.assuntos.banco_dados,
    "Em relação aos conceitos fundamentais de Bancos de Dados Relacionais e à linguagem SQL, assinale a opção correta.",
    "A",
    [
      ["A", "A Chave Primária (Primary Key) identifica de forma unívoca cada registro de uma tabela, sendo obrigatória a sua unicidade e vedado o preenchimento de valores nulos (NOT NULL), enquanto a Chave Estrangeira (Foreign Key) assegura a integridade referencial entre duas tabelas relacionadas.", "Correta. Definições fundamentais do modelo relacional de Codd."],
      ["B", "Os comandos DDL (Data Definition Language) incluem exclusivamente as instruções SELECT, INSERT e UPDATE.", "Incorreta. SELECT, INSERT, UPDATE e DELETE pertencem à DML (Data Manipulation Language)."],
      ["C", "A 1ª Forma Normal (1FN) exige que uma tabela possua pelo menos cinco colunas com chaves compostas e atributos multivalorados.", "Incorreta. A 1FN exige que todos os atributos sejam atômicos (indivisíveis), sem valores repetidos ou listas."],
      ["D", "A instrução DROP TABLE exclui apenas os dados temporários de uma tabela, preservando sua estrutura e seus índices no banco.", "Incorreta. O comando DROP exclui a tabela inteira (estrutura, dados e índices). Para limpar dados preservando a estrutura usa-se TRUNCATE ou DELETE."],
      ["E", "O comando GRANT é classificado como instrução TCL responsável por efetivar transações em disco.", "Incorreta. GRANT é comando DCL (Data Control Language). Transações são efetivadas com COMMIT (TCL)."]
    ],
    "A chave primária garante unicidade e não nulidade na tabela, enquanto a chave estrangeira ancora a integridade referencial relacionando registros filhos aos pais no modelo relacional."),

  ce("inf-b5-011", TAXONOMIA.assuntos.seguranca_info,
    "A Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil), instituída pela Medida Provisória nº 2.200-2/2001, adota uma hierarquia de certificação digital com Autoridade Certificadora Raiz única (operada pelo ITI - Instituto Nacional de Tecnologia da Informação), cujos certificados digitais do tipo A (como A1 e A3) destinam-se precipuamente à assinatura digital e autenticação, enquanto os do tipo S destinam-se ao sigilo (cifragem de dados).",
    true,
    "A ICP-Brasil estrutura-se em AC Raiz única, ACs intermediárias e ARs (Autoridades de Registro). Certificados A (A1 em software, A3 em hardware/token) realizam assinatura/autenticação e tipo S realizam sigilo/cifragem."),

  me("inf-b5-012", TAXONOMIA.assuntos.redes_computadores,
    "No modelo de referência OSI (Open Systems Interconnection) da ISO, as camadas responsáveis pela entrega ponto a ponto de pacotes lógicos através de roteamento e pelo controle de erros e fluxo fim a fim entre processos de aplicação são, respectivamente:",
    "D",
    [
      ["A", "Física e Enlace de Dados.", "Incorreta. Física cuida de sinais elétricos/bits; Enlace cuida de quadros/MAC."],
      ["B", "Apresentação e Sessão.", "Incorreta. Apresentação cuida de sintaxe/criptografia; Sessão gerencia diálogos."],
      ["C", "Aplicação e Rede.", "Incorreta. Aplicação faz interface com o usuário."],
      ["D", "Rede (Camada 3) e Transporte (Camada 4).", "Correta. A Camada de Rede (IP) realiza o roteamento e a Camada de Transporte (TCP/UDP) assegura a comunicação fim a fim entre processos."],
      ["E", "Enlace de Dados e Física.", "Incorreta. Ordem e funções incompatíveis."]
    ],
    "A Camada 3 (Rede) é responsável pelo endereçamento lógico e roteamento de pacotes (ex: IP). A Camada 4 (Transporte) é responsável pela comunicação fim a fim, multiplexação de portas, controle de fluxo e confiabilidade (ex: TCP/UDP)."),

  ce("inf-b5-013", TAXONOMIA.assuntos.seguranca_info,
    "Em um ataque de negação de serviço distribuído (DDoS) do tipo *SYN Flood*, o atacante envia uma avalanche contínua de pacotes TCP com a flag SYN forjada para o servidor alvo sem jamais responder aos pacotes SYN-ACK correspondentes, exaurindo a tabela de conexões semiabertas (*backlog queue*) do sistema operacional da vítima e impedindo novas conexões de clientes legítimos.",
    true,
    "O SYN Flood explora o handshake de três vias do TCP ao deixar conexões em estado semiaberto (SYN_RECEIVED), esgotando os buffers de memória do servidor."),

  me("inf-b5-014", TAXONOMIA.assuntos.python_r,
    "Considere o seguinte trecho de código em linguagem Python, utilizado por um perito para extrair endereços IP suspeitos de um arquivo de log policial:\n\n```python\nimport re\ntexto_log = 'Ataque detectado do host 192.168.1.100 para o destino 10.0.0.1 porta 80'\npadrao = r'\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b'\nips_encontrados = re.findall(padrao, texto_log)\nprint(ips_encontrados)\n```\n\nAo executar esse script, o resultado impresso no console será:",
    "B",
    [
      ["A", "`['porta 80']`", "Incorreta. O padrão busca números no formato de endereços IPv4."],
      ["B", "`['192.168.1.100', '10.0.0.1']`", "Correta. `re.findall` retorna uma lista com todas as ocorrências não sobrepostas correspondentes a endereços IPv4 no texto."],
      ["C", "`'192.168.1.100'`", "Incorreta. `re.findall` retorna uma lista contendo todas as correspondências, não apenas uma string única."],
      ["D", "`None`", "Incorreta. Há duas correspondências válidas no texto."],
      ["E", "`{'192.168.1.100': 80, '10.0.0.1': 80}`", "Incorreta. A função não gera dicionários associativos."]
    ],
    "A expressão regular `r'\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b'` identifica padrões de 4 grupos de 1 a 3 dígitos decimais separados por pontos (formato de IPv4). A função `re.findall()` retorna a lista com todos os IPs capturados: `['192.168.1.100', '10.0.0.1']`."),

  ce("inf-b5-015", TAXONOMIA.assuntos.seguranca_info,
    "No âmbito da análise forense digital e da preservação da cadeia de custódia de evidências eletrônicas, o cálculo do hash criptográfico (como SHA-256) da imagem bit a bit gerada a partir da mídia original de armazenamento apreendida deve ser realizado imediatamente após a duplicação, servindo como garantia técnica inquestionável da integridade e da não alteração dos vestígios digitais.",
    true,
    "A correspondência exata do valor de hash entre a mídia original apreendida e a imagem forense periciada comprova a integridade e autenticidade da evidência perante a cadeia de custódia (art. 158-A e seguintes do CPP).")
];
