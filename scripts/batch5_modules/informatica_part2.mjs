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
    { letra: "C", texto: "Certo", correta, explicacao_especifica: correta ? "Correto. Assertiva em conformidade com as normas técnicas, protocolos e princípios de TI." : "Incorreto. A assertiva apresenta incorreção conceitual ou técnica." },
    { letra: "E", texto: "Errado", correta: !correta, explicacao_especifica: !correta ? "Correto. A assertiva contém erro técnico flagrante." : "Incorreto. A afirmativa reflete fielmente o funcionamento do protocolo ou sistema." }
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

export const informaticaPart2 = [
  ce("inf-b5-016", TAXONOMIA.assuntos.redes_computadores,
    "A técnica de PAT (Port Address Translation), comumente referida como NAT de sobrecarga (*NAT Overload*), permite que múltiplos dispositivos de uma rede local privada com endereços IPv4 não roteáveis (como a faixa 192.168.0.0/16) compartilhem um único endereço IPv4 público para acessar a Internet simultaneamente, diferenciando as sessões de cada host por meio de números de portas de transporte TCP ou UDP únicos.",
    true,
    "O PAT mapeia múltiplos endereços IP privados internos em um único endereço IP público externo, utilizando o número da porta de transporte na camada 4 para identificar unicamente cada conexão."),

  me("inf-b5-017", TAXONOMIA.assuntos.seguranca_info,
    "A respeito das modalidades de ataques fundamentados em Engenharia Social e ameaças cibernéticas a usuários, assinale a opção correta.",
    "B",
    [
      ["A", "O *Phishing* clássico é um ataque direcionado exclusivamente a CEOs de corporações bancárias por meio de cartas físicas manuscritas.", "Incorreta. Ataques direcionados a altos executivos chamam-se Whaling (ou Spear Phishing direcionado)."],
      ["B", "O *Spear Phishing* é uma variante de ataque de engenharia social altamente personalizada e dirigida a alvos específicos (indivíduos, setores ou empresas), na qual o atacante utiliza informações previamente coletadas sobre a vítima para conferir extrema verossimilhança à mensagem fraudulenta e induzi-la a revelar credenciais ou executar código malicioso.", "Correta. É o conceito técnico preciso de Spear Phishing."],
      ["C", "O *Smishing* consiste na invasão física do datacenter com auxílio de chaves falsificadas.", "Incorreta. Smishing é phishing realizado via mensagens SMS em celulares."],
      ["D", "O *Vishing* é um ataque que afeta unicamente dispositivos periféricos de vídeo e projetores.", "Incorreta. Vishing é phishing por meio de chamadas de voz (Voice Phishing)."],
      ["E", "A autenticação de dois fatores (2FA) é completamente ineficaz contra qualquer modalidade de engenharia social.", "Incorreta. O 2FA/MFA é uma das principais defesas contra credenciais vazadas em phishing."]
    ],
    "O Spear Phishing diferencia-se do phishing genérico pelo alto grau de personalização e direcionamento prévio a uma vítima específica, aumentando drasticamente a taxa de sucesso da fraude."),

  ce("inf-b5-018", TAXONOMIA.assuntos.redes_computadores,
    "No serviço de correio eletrônico, o protocolo SMTP (Simple Mail Transfer Protocol) é empregado para o envio e a transferência de e-mails entre servidores, utilizando modernamente a porta 587 TCP com autenticação e criptografia STARTTLS, enquanto os protocolos IMAP e POP3 são utilizados pelo cliente para o recebimento de mensagens, diferenciando-se pelo fato de o IMAP manter os e-mails sincronizados no servidor remoto.",
    true,
    "O SMTP (portas 25 e 587) envia/transfere mensagens. O IMAP (portas 143 e 993 SSL) sincroniza as mensagens na nuvem em tempo real, enquanto o POP3 (portas 110 e 995 SSL) descarrega as mensagens localmente."),

  me("inf-b5-019", TAXONOMIA.assuntos.banco_dados,
    "Considere duas tabelas em um banco de dados relacional de investigação criminal: `Investigados` e `Apreensoes`. Para obter um relatório contendo todos os investigados cadastrados, independentemente de possuírem ou não registros correspondentes de apreensões na tabela `Apreensoes`, deve-se utilizar a seguinte cláusula de junção SQL:",
    "A",
    [
      ["A", "`SELECT * FROM Investigados LEFT JOIN Apreensoes ON Investigados.id = Apreensoes.investigado_id;`", "Correta. O LEFT JOIN (ou LEFT OUTER JOIN) preserva todas as linhas da tabela à esquerda (`Investigados`), preenchendo com NULL os campos da tabela à direita onde não houver correspondência."],
      ["B", "`SELECT * FROM Investigados INNER JOIN Apreensoes ON Investigados.id = Apreensoes.investigado_id;`", "Incorreta. O INNER JOIN retorna apenas os investigados que possuem pelo menos uma apreensão correspondente."],
      ["C", "`SELECT * FROM Investigados RIGHT JOIN Apreensoes ON Investigados.id = Apreensoes.investigado_id;`", "Incorreta. O RIGHT JOIN preservaria todas as apreensões, mesmo as sem investigado."],
      ["D", "`SELECT * FROM Investigados CROSS JOIN Apreensoes WHERE Apreensoes.id IS NULL;`", "Incorreta. CROSS JOIN gera produto cartesiano completo."],
      ["E", "`SELECT * FROM Investigados UNION Apreensoes;`", "Incorreta. UNION combina conjuntos de colunas compatíveis, não realiza junção horizontal de tabelas."]
    ],
    "O LEFT OUTER JOIN (ou LEFT JOIN) retorna todos os registros da tabela da esquerda (Investigados) e os registros correspondentes da tabela da direita (Apreensoes). Caso não haja correspondência na tabela da direita, os valores são exibidos como NULL."),

  ce("inf-b5-020", TAXONOMIA.assuntos.seguranca_info,
    "Um *Rootkit* é um conjunto de ferramentas maliciosas que visa garantir e manter o acesso clandestino com privilégios administrativos máximos (root ou kernel) em um sistema operacional comprometido, destacando-se por sua capacidade intrínseca de ocultar sua própria presença e a execução de outros malwares, manipulando chamadas de sistema e tabelas de processos do núcleo do SO.",
    true,
    "O rootkit atua no nível mais profundo do sistema operacional (frequentemente em nível de kernel/ring 0), interceptando chamadas de sistema para ocultar processos, arquivos e chaves de registro maliciosos."),

  me("inf-b5-021", TAXONOMIA.assuntos.redes_computadores,
    "No protocolo IPsec (IP Security), amplamente utilizado para a criação de túneis virtuais privados seguros (VPN), o cabeçalho de segurança que provê simultaneamente serviços de confidencialidade (cifragem), autenticação da origem dos dados e integridade dos pacotes é o:",
    "C",
    [
      ["A", "AH (Authentication Header).", "Incorreta. O AH provê autenticação e integridade, mas NÃO provê confidencialidade (não encripta os dados)."],
      ["B", "ICMP (Internet Control Message Protocol).", "Incorreta. ICMP é protocolo de diagnóstico de rede (ping/traceroute)."],
      ["C", "ESP (Encapsulating Security Payload).", "Correta. O protocolo ESP (cabeçalho IP 50) fornece criptografia (confidencialidade), integridade e autenticação opcional."],
      ["D", "ARP (Address Resolution Protocol).", "Incorreta. ARP resolve IP para endereço MAC."],
      ["E", "SNMP (Simple Network Management Protocol).", "Incorreta. Protocolo de gerência de rede."]
    ],
    "No IPsec, o protocolo ESP (Encapsulating Security Payload) garante confidencialidade por meio de criptografia simétrica, além de fornecer integridade, autenticação e proteção contra repetição. O protocolo AH (Authentication Header) garante apenas integridade e autenticidade, sem cifragem."),

  ce("inf-b5-022", TAXONOMIA.assuntos.python_r,
    "Na linguagem Python, a estrutura de dados do tipo `dict` (dicionário) armazena pares chave-valor únicos e não ordenados (ou com ordem de inserção preservada a partir da versão 3.7), permitindo que a busca, a inserção e a deleção de elementos com base em sua chave possuam complexidade média de tempo $O(1)$ devido à utilização interna de tabelas hash.",
    true,
    "Os dicionários em Python são implementados como tabelas de dispersão (hash tables), garantindo acesso amortizado em tempo constante O(1) às suas chaves."),

  me("inf-b5-023", TAXONOMIA.assuntos.seguranca_info,
    "Os fatores de autenticação utilizados em sistemas de segurança de acesso dividem-se em três categorias clássicas. Assinale a opção que apresenta, respectivamente, um fator de 'algo que você sabe', 'algo que você tem' e 'algo que você é':",
    "B",
    [
      ["A", "Token gerador de OTP, cartão magnético inteligente e senha alfanumérica.", "Incorreta. Ordem invertida."],
      ["B", "Senha alfanumérica de login, smartphone recebedor de token SMS e impressão digital biométrica.", "Correta. Senha (sabe), Smartphone/Token (tem) e Impressão digital (é)."],
      ["C", "Reconhecimento facial, íris ocular e PIN secreto de 6 dígitos.", "Incorreta. Reconhecimento e íris são ambos 'algo que você é'."],
      ["D", "Cartão de proximidade RFID, chaveiro FIDO2 USB e crachá funcional físico.", "Incorreta. Todos são exemplos de 'algo que você tem'."],
      ["E", "Geolocalização GPS, velocidade de digitação e endereço MAC da placa.", "Incorreta. Fatores contextuais e comportamentais."]
    ],
    "Os 3 pilares clássicos de autenticação são: 1) Conhecimento ('algo que você sabe' - senhas, PINs); 2) Posse ('algo que você tem' - tokens, cartões, smartphones); 3) Inerência ('algo que você é' - biometria facial, digital, íris)."),

  ce("inf-b5-024", TAXONOMIA.assuntos.redes_computadores,
    "No processo de atribuição dinâmica de configurações de rede pelo protocolo DHCP, a comunicação entre o cliente e o servidor DHCP ocorre na camada de transporte via protocolo UDP (portas 67 no servidor e 68 no cliente) e segue a sequência de quatro mensagens conhecida pela sigla DORA: DHCPDiscover (broadcast do cliente), DHCPOffer (resposta do servidor), DHCPRequest (solicitação do cliente) e DHCPAck (confirmação final do servidor).",
    true,
    "A sigla DORA (Discover, Offer, Request, Acknowledge) representa o ciclo padrão de 4 etapas de negociação do DHCP sobre UDP 67/68."),

  me("inf-b5-025", TAXONOMIA.assuntos.banco_dados,
    "Em sistemas de gerenciamento de bancos de dados relacionais (SGBD), as propriedades ACID garantem a confiabilidade e integridade das transações. A propriedade que assegura que todas as operações que compõem uma transação sejam executadas com sucesso absoluto ou, em caso de falha de qualquer instrução, que todas as alterações sejam integralmente desfeitas sem deixar estados parciais gravados, denomina-se:",
    "A",
    [
      ["A", "Atomicidade (*Atomicity*).", "Correta. A atomicidade impõe a regra do 'tudo ou nada' na transação."],
      ["B", "Consistência (*Consistency*).", "Incorreta. Consistência assegura que o banco transite de um estado válido para outro válido respeitando todas as regras e restrições de integridade."],
      ["C", "Isolamento (*Isolation*).", "Incorreta. Isolamento garante que transações concorrentes não interfiram entre si de forma inadequada."],
      ["D", "Durabilidade (*Durability*).", "Incorreta. Durabilidade garante que os dados comitados persistam mesmo após falha ou desligamento do sistema."],
      ["E", "Auditoria (*Auditability*).", "Incorreta. Não integra a sigla ACID clássica."]
    ],
    "As propriedades ACID são: Atomicidade (tudo ou nada), Consistência (preservação de regras de integridade), Isolamento (transações simultâneas não se corrompem) e Durabilidade (persistência permanente pós-commit)."),

  ce("inf-b5-026", TAXONOMIA.assuntos.seguranca_info,
    "O ataque de Cross-Site Scripting (XSS) do tipo Armazenado (*Stored XSS*) ocorre quando um código malicioso (geralmente em JavaScript) injetado pelo atacante é gravado de forma permanente no banco de dados da aplicação web (como em um campo de comentários), sendo executado automaticamente no navegador de qualquer usuário legítimo que posteriormente acesse e visualize a página comprometida.",
    true,
    "No XSS armazenado (persistente), o payload malicioso reside no banco de dados da aplicação web e é servido a múltiplas vítimas sem que elas precisem clicar em links forjados específicos."),

  me("inf-b5-027", TAXONOMIA.assuntos.redes_computadores,
    "Em relação à administração remota segura de servidores policiais via terminal, a utilização do protocolo SSH (Secure Shell) na porta padrão 22 TCP é recomendada em substituição ao legado protocolo Telnet (porta 23 TCP) porque:",
    "D",
    [
      ["A", "o Telnet exige obrigatoriamente a instalação de placas de rede de fibra óptica quântica.", "Incorreta. Telnet opera sobre qualquer meio físico TCP/IP."],
      ["B", "o SSH dispensa qualquer processo de autenticação de credenciais de usuário.", "Incorreta. O SSH exige autenticação robusta por senha ou par de chaves assimétricas."],
      ["C", "o Telnet comprime os arquivos de log impedindo sua leitura por comandos Unix.", "Incorreta. Telnet não realiza compressão nem bloqueia logs."],
      ["D", "o Telnet transmite todos os comandos, dados e credenciais de acesso em texto claro (*plain text*), permitindo que um invasor capture senhas facilmente via escuta de rede (*sniffing*), enquanto o SSH provê canal de comunicação integralmente criptografado com suporte a autenticação por chaves públicas.", "Correta. Diferença técnica crucial de segurança entre Telnet e SSH."],
      ["E", "o SSH é um protocolo restrito apenas a sistemas operacionais móveis proprietários.", "Incorreta. SSH é protocolo universal multiplataforma (Linux, Windows, BSD, macOS)."]
    ],
    "O SSH estabelece um túnel criptografado seguro (porta 22) garantindo confidencialidade e autenticidade, ao passo que o Telnet (porta 23) trafega em texto não cifrado, vulnerável a interceptação de pacotes."),

  ce("inf-b5-028", TAXONOMIA.assuntos.banco_dados,
    "Segundo o Teorema CAP (formulado por Eric Brewer), um sistema de banco de dados distribuído pode garantir simultaneamente, no máximo, duas das seguintes três propriedades: Consistência (*Consistency* - todos os nós visualizam os mesmos dados ao mesmo tempo), Disponibilidade (*Availability* - toda requisição recebe resposta sem garantia de conter a versão mais recente) e Tolerância a Particionamento (*Partition Tolerance* - o sistema continua operando mesmo com quebra de comunicação entre nós).",
    true,
    "O Teorema CAP demonstra a impossibilidade matemática de um sistema distribuído garantir Consistência forte, Alta Disponibilidade e Tolerância a Partições simultaneamente em redes sujeitas a falhas."),

  me("inf-b5-029", TAXONOMIA.assuntos.python_r,
    "Considere o seguinte trecho de código em linguagem Python, no qual um perito analisa duas listas contendo números de telefones apreendidos de membros de duas organizações criminosas distintas:\n\n```python\ntelefones_quadrilha_A = {'11999990001', '11999990002', '11999990003'}\ntelefones_quadrilha_B = {'11999990002', '11999990004', '11999990005'}\ncontatos_comuns = telefones_quadrilha_A & telefones_quadrilha_B\nprint(contatos_comuns)\n```\n\nO operador `&` aplicado aos conjuntos (`set`) em Python realiza a operação matemática de:",
    "B",
    [
      ["A", "União, retornando todos os elementos presentes em ambos os conjuntos sem repetições.", "Incorreta. A união de sets é realizada pelo operador `|`."],
      ["B", "Interseção, retornando apenas os elementos que estão presentes simultaneamente em ambos os conjuntos.", "Correta. O operador `&` em sets executa a interseção matemática de conjuntos."],
      ["C", "Diferença simétrica, retornando os elementos presentes em um ou em outro, mas não em ambos.", "Incorreta. Diferença simétrica usa o operador `^`."],
      ["D", "Diferença simples, subtraindo os elementos de B do conjunto A.", "Incorreta. A diferença usa o operador `-`."],
      ["E", "Concatenação de listas com duplicação de índices.", "Incorreta. Conjuntos não preservam duplicatas nem realizam concatenação de lista."]
    ],
    "Na linguagem Python, o operador `&` entre dois objetos do tipo `set` executa a operação de interseção matemática, resultando em `{'11999990002'}`, que é o único contato comum a ambos os grupos criminosos."),

  ce("inf-b5-030", TAXONOMIA.assuntos.seguranca_info,
    "A arquitetura de segurança *Zero Trust* fundamenta-se no princípio 'nunca confie, sempre verifique', estabelecendo que nenhuma entidade (usuário, dispositivo ou aplicação), dentro ou fora do perímetro tradicional de rede da organização policial, possui confiança implícita, exigindo autenticação contínua, autorização estrita baseada no contexto e concessão de privilégios mínimos de acesso (*Least Privilege*).",
    true,
    "A arquitetura Zero Trust abandona o modelo de segurança baseado apenas em perímetro ('castelo e muralha'), exigindo verificação contínua e privilégios mínimos em todos os nós da rede.")
];
