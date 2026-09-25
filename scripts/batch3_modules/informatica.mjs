import { TAXONOMIA } from "./taxonomia.mjs";

export const infoQuestions = [
  // 01 - Segurança da Informação: Rootkit e Malwares
  {
    idSlug: "batch3-info-001",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.seguranca_info,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Um rootkit é um conjunto de programas maliciosos projetado fundamentalmente para obter e manter acesso privilegiado (root ou administrador) a um sistema computacional de forma oculta, modificando estruturas do sistema operacional ou chamadas de sistema (syscalls/API hooking) para mascarar a presença de processos, arquivos e conexões de rede ativas.",
    explicacao: "GABARITO: CERTO. O rootkit é uma coleção de ferramentas que visa assegurar e manter o acesso de nível de administrador/root a um sistema comprometido, ocultando ativamente as evidências de invasão (como processos em execução, chaves de registro, arquivos e conexões de rede ativas) por meio de técnicas de hooking ou intervenção no kernel do sistema operacional.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O rootkit caracteriza-se exatamente pela busca de privilégios elevados e pela capacidade avançada de ocultar a sua própria presença e a de outros malwares no sistema."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A definição apresentada corresponde perfeitamente ao conceito e às características operacionais de um rootkit."
      }
    ]
  },

  // 02 - Segurança da Informação: Ataques Web (SQL Injection)
  {
    idSlug: "batch3-info-002",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.seguranca_info,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Perito Criminal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Durante a perícia em uma aplicação web invadida, o perito criminal constatou que os invasores inseriram comandos maliciosos nos campos de formulário da página de autenticação, explorando a ausência de sanitização de entradas. Essa inserção manipulou a estrutura da consulta enviada ao Sistema Gerenciador de Banco de Dados (SGBD), permitindo a extração não autorizada de toda a tabela de credenciais de usuários. Esse tipo de vulnerabilidade e ataque é classificado como:",
    explicacao: "GABARITO: C (SQL Injection). O SQL Injection (Injeção de SQL) ocorre quando entradas fornecidas pelo usuário não são devidamente sanitizadas ou parametrizadas (Prepared Statements), permitindo que comandos SQL arbitrários sejam concatenados e executados pelo SGBD subjacente.",
    alternativas: [
      {
        letra: "A",
        texto: "Cross-Site Scripting (XSS) armazenado.",
        correta: false,
        explicacao_especifica: "Incorreto. O XSS envolve a injeção de scripts (geralmente JavaScript) que são executados no navegador dos clientes/vítimas, não manipulando diretamente o SGBD."
      },
      {
        letra: "B",
        texto: "Cross-Site Request Forgery (CSRF).",
        correta: false,
        explicacao_especifica: "Incorreto. O CSRF induz um usuário autenticado a executar ações indesejadas em uma aplicação web na qual está previamente conectado."
      },
      {
        letra: "C",
        texto: "SQL Injection (Injeção de SQL).",
        correta: true,
        explicacao_especifica: "Correto. O ataque descrito explora a falta de validação de entradas para executar comandos SQL arbitrários no banco de dados e exfiltrar registros."
      },
      {
        letra: "D",
        texto: "Server-Side Request Forgery (SSRF).",
        correta: false,
        explicacao_especifica: "Incorreto. O SSRF induz o servidor da aplicação a fazer requisições HTTP para recursos internos ou externos que não deveriam estar acessíveis."
      },
      {
        letra: "E",
        texto: "Denial of Service (DoS) por esgotamento de memória.",
        correta: false,
        explicacao_especifica: "Incorreto. O foco do DoS é indisponibilizar o serviço, e não extrair dados sigilosos mediante manipulação de consultas relacionais."
      }
    ]
  },

  // 03 - Segurança da Informação: Ataques de Rede (Man-in-the-Middle)
  {
    idSlug: "batch3-info-003",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.seguranca_info,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No ataque de Man-in-the-Middle (MitM) executado por meio de envenenamento de DNS (DNS Cache Poisoning), o atacante corrompe o cache do servidor de nomes para redirecionar o usuário a um servidor web falso; contudo, a utilização de conexões seguras com HTTPS e certificados digitais válidos e confiáveis emitidos para o domínio legítimo impede que o usuário acesse o sítio clonado sem que o navegador emita alertas severos de quebra de segurança e divergência de certificado.",
    explicacao: "GABARITO: CERTO. O DNS Cache Poisoning manipula a resolução de nomes (IP correspondente ao domínio), direcionando a vítima para o servidor do atacante. Todavia, se a conexão alvo utilizar HTTPS, o servidor do atacante precisará apresentar um certificado TLS válido emitido para aquele nome de domínio. Como o invasor não possui a chave privada do domínio legítimo nem um certificado assinado por uma Autoridade Certificadora confiável para tal domínio, o navegador da vítima detectará a incongruência e emitirá aviso explícito de segurança.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O uso de HTTPS com certificados digitais confiáveis protege a camada de transporte, denunciando tentativas de personificação geradas por envenenamento de DNS."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O item é verdadeiro, pois os mecanismos de checagem do protocolo TLS/HTTPS acusam a divergência da identidade do servidor fraudulento."
      }
    ]
  },

  // 04 - Segurança da Informação: Engenharia Social (Phishing)
  {
    idSlug: "batch3-info-004",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.seguranca_info,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "facil",
    enunciado: "Uma autoridade policial responsável por investigações de lavagem de dinheiro recebeu um e-mail com logotipo institucional forjado, contendo informações específicas sobre sua lotação e processos em andamento, solicitando a atualização urgente de seu token de acesso em uma página clonada. Esse tipo de ataque de engenharia social altamente direcionado e personalizado a um indivíduo ou organização específica é denominado:",
    explicacao: "GABARITO: B (Spear Phishing). O Spear Phishing é uma variante direcionada de phishing em que o atacante estuda previamente a vítima (coletando dados de sua função, órgão, colegas e rotinas) para criar uma mensagem personalizada e convincente, aumentando drasticamente as chances de sucesso do golpe.",
    alternativas: [
      {
        letra: "A",
        texto: "Pharming.",
        correta: false,
        explicacao_especifica: "Incorreto. O pharming consiste no redirecionamento do tráfego legítimo por corrupção de tabelas de hosts locais ou envenenamento de cache DNS."
      },
      {
        letra: "B",
        texto: "Spear Phishing.",
        correta: true,
        explicacao_especifica: "Correto. O spear phishing caracteriza-se pelo ataque de phishing customizado e direcionado a alvos específicos previamente pesquisados."
      },
      {
        letra: "C",
        texto: "Ransomware locker.",
        correta: false,
        explicacao_especifica: "Incorreto. Ransomware locker é um código malicioso de extorsão que bloqueia a interface ou tela do dispositivo."
      },
      {
        letra: "D",
        texto: "Defacement.",
        correta: false,
        explicacao_especifica: "Incorreto. Defacement é a desfiguração visual não autorizada da página principal de um sítio na Internet."
      },
      {
        letra: "E",
        texto: "Adware.",
        correta: false,
        explicacao_especifica: "Incorreto. Adware é um software projetado para exibir anúncios indesejados no dispositivo da vítima."
      }
    ]
  },

  // 05 - Segurança da Informação: Ataques de Negação de Serviço (DDoS e SYN Flood)
  {
    idSlug: "batch3-info-005",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.seguranca_info,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No ataque de negação de serviço conhecido como SYN Flood, o atacante envia uma quantidade maciça de pacotes TCP com a flag SYN ativada para o servidor alvo, deixando propositalmente as conexões em estado semiaberto (half-open) ao omitir o envio do pacote final de confirmação (ACK), o que esgota a tabela de conexões pendentes (backlog queue) e impede o atendimento a usuários legítimos.",
    explicacao: "GABARITO: CERTO. O ataque SYN Flood explora o handshake triplo (three-way handshake) do protocolo TCP (SYN -> SYN-ACK -> ACK). Ao enviar pacotes SYN sem responder aos pacotes SYN-ACK subsequentes, o servidor mantém as conexões na fila de espera semiaberta até que o buffer da tabela de conexões se esgote, inviabilizando novas conexões legítimas.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Essa é a mecânica clássica de funcionamento do ataque SYN Flood contra a pilha TCP/IP."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. O enunciado descreve com precisão a exploração do estado semiaberto de conexões no ataque SYN Flood."
      }
    ]
  },

  // 06 - Segurança da Informação: Autenticação Multifator (MFA)
  {
    idSlug: "batch3-info-006",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.seguranca_info,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil da Bahia (PC-BA)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A autenticação multifator (MFA - Multi-Factor Authentication) é um mecanismo de controle de acesso que exige a validação de pelo menos duas categorias distintas de fatores de autenticação. Assinale a alternativa que apresenta uma combinação autêntica formada por três categorias distintas de fatores:",
    explicacao: "GABARITO: D. As três categorias clássicas de autenticação são: (1) Algo que você sabe (conhecimento: senhas, PINs); (2) Algo que você tem (posse: tokens físicos, smartphones, smartcards); (3) Algo que você é (inerência/biometria: impressão digital, íris, reconhecimento facial). A alternativa D combina perfeitamente essas três dimensões.",
    alternativas: [
      {
        letra: "A",
        texto: "Senha mestra alfanumérica, código PIN de 6 dígitos e pergunta de segurança sobre o nome da escola.",
        correta: false,
        explicacao_especifica: "Incorreto. Todos os três elementos pertencem à mesma categoria: 'algo que você sabe' (conhecimento)."
      },
      {
        letra: "B",
        texto: "Token gerador de código OTP em aplicativo, cartão inteligente (smartcard) e chave de segurança física USB.",
        correta: false,
        explicacao_especifica: "Incorreto. Todos os elementos pertencem à categoria de posse: 'algo que você tem'."
      },
      {
        letra: "C",
        texto: "Reconhecimento facial biométrico, leitura da geometria da palma da mão e leitura de impressão digital.",
        correta: false,
        explicacao_especifica: "Incorreto. Todos os elementos pertencem à categoria de inerência: 'algo que você é'."
      },
      {
        letra: "D",
        texto: "Senha de acesso confidencial (conhecimento), token de segurança físico USB (posse) e leitura de impressão digital (inerência).",
        correta: true,
        explicacao_especifica: "Correto. Reúne três fatores de naturezas completamente distintas: algo que você sabe, algo que você tem e algo que você é."
      },
      {
        letra: "E",
        texto: "Código enviado por SMS, código enviado por e-mail e código exibido em aplicativo autenticador.",
        correta: false,
        explicacao_especifica: "Incorreto. Representam variações do fator de posse ('algo que você tem'), não contemplando os fatores de conhecimento e inerência."
      }
    ]
  },

  // 07 - Segurança da Informação: Arquitetura Zero Trust
  {
    idSlug: "batch3-info-007",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.seguranca_info,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No modelo de segurança Zero Trust (Confiança Zero), uma vez que o dispositivo corporativo do policial ultrapassa com sucesso a autenticação inicial na borda da rede local (intranet), estabelece-se uma relação de confiança implícita que dispensa novas verificações de identidade ou privilégios para acessar bancos de dados e sistemas internos.",
    explicacao: "GABARITO: ERRADO. O princípio fundamental da arquitetura Zero Trust é 'nunca confiar, sempre verificar' (never trust, always verify). Sob esse modelo, não existe perímetro de confiança implícita; mesmo dispositivos e usuários localizados dentro da rede local corporativa devem ser continuamente autenticados, autorizados e validados a cada requisição de acesso a recursos específicos.",
    alternativas: [
      {
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Incorreto. O modelo Zero Trust elimina qualquer presunção de confiança baseada em perímetro de rede local."
      },
      {
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Gabarito Errado. No Zero Trust, a verificação deve ser contínua e rigorosa para cada requisição, independentemente da localização do dispositivo na rede."
      }
    ]
  },

  // 08 - Criptografia: Criptografia Simétrica vs Assimétrica (ECC, AES, RSA)
  {
    idSlug: "batch3-info-008",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.seguranca_info,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
    cargo_nome: "Delegado de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito dos conceitos e algoritmos de criptografia simétrica e assimétrica utilizados na proteção de sistemas e comunicações policiais, assinale a afirmativa correta:",
    explicacao: "GABARITO: A. A Criptografia de Curvas Elípticas (ECC - Elliptic Curve Cryptography) é um método assimétrico que atinge níveis de segurança equivalentes aos do RSA tradicional utilizando chaves de tamanho significativamente menor (ex.: uma chave ECC de 256 bits equivale a uma chave RSA de 3072 bits), resultando em menor consumo computacional e de banda.",
    alternativas: [
      {
        letra: "A",
        texto: "A Criptografia de Curvas Elípticas (ECC) é um método assimétrico que oferece alto nível de segurança com chaves de tamanho significativamente menor que o RSA, demandando menor capacidade de processamento.",
        correta: true,
        explicacao_especifica: "Correto. O ECC destaca-se pela alta eficiência matemática e segurança robusta com tamanhos reduzidos de chave."
      },
      {
        letra: "B",
        texto: "O AES (Advanced Encryption Standard) é um algoritmo de criptografia assimétrica que utiliza pares de chaves pública e privada de 128, 192 e 256 bits.",
        correta: false,
        explicacao_especifica: "Incorreto. O AES é um algoritmo de criptografia SIMÉTRICA (utiliza uma única chave secreta compartilhada para cifrar e decifrar)."
      },
      {
        letra: "C",
        texto: "O RSA é um algoritmo simétrico de fluxo projetado para substituir o DES na cifragem rápida de comunicações de rádio policial.",
        correta: false,
        explicacao_especifica: "Incorreto. O RSA é um algoritmo ASSIMÉTRICO (de chave pública) baseado no problema da fatoração de inteiros primos."
      },
      {
        letra: "D",
        texto: "Na criptografia de chave pública, a mensagem cifrada com a chave pública do destinatário pode ser decifrada por qualquer pessoa que possua essa mesma chave pública.",
        correta: false,
        explicacao_especifica: "Incorreto. Apenas a chave PRIVADA do destinatário correspondente é capaz de decifrar o conteúdo cifrado com sua chave pública."
      },
      {
        letra: "E",
        texto: "Os algoritmos simétricos não necessitam de canais seguros para a distribuição prévia da chave secreta entre as partes comunicantes.",
        correta: false,
        explicacao_especifica: "Incorreto. O principal desafio da criptografia simétrica é justamente a necessidade de um canal seguro para a troca prévia da chave secreta."
      }
    ]
  },

  // 09 - Criptografia: Funções Hash (SHA-256 vs MD5) e Cadeia de Custódia
  {
    idSlug: "batch3-info-009",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.seguranca_info,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "dificil",
    enunciado: "Na perícia forense digital, o algoritmo de hash SHA-256 é amplamente preferido em relação ao MD5 para a garantia da integridade e da cadeia de custódia de evidências eletrônicas, haja vista que o MD5 apresenta vulnerabilidades críticas demonstradas de colisão prática (onde arquivos com conteúdos distintos geram o mesmo resumo criptográfico), enquanto a família SHA-2 mantém robusta resistência a colisões.",
    explicacao: "GABARITO: CERTO. As funções de resumo criptográfico (hash) devem possuir resistência à colisão (impossibilidade prática de encontrar duas entradas diferentes x e y que produzam hash(x) = hash(y)). O algoritmo MD5 foi matematicamente quebrado quanto a essa propriedade, permitindo a geração deliberada de colisões. Por isso, normas forenses recomendam SHA-256 (família SHA-2) ou SHA-3 na cadeia de custódia.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O MD5 sofre de vulnerabilidades graves de colisão, tornando mandatório o uso de algoritmos robustos como o SHA-256 na perícia oficial."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A assertiva é verdadeira, pois a resistência à colisão do SHA-256 é essencial para a validade jurídica de evidências digitais."
      }
    ]
  },

  // 10 - Criptografia e Assinatura Digital: ICP-Brasil e Certificados
  {
    idSlug: "batch3-info-010",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.seguranca_info,
    banca_nome: "IDECAN",
    orgao_nome: "Polícia Civil do Distrito Federal (PCDF)",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A respeito dos certificados digitais e do processo de assinatura digital no âmbito da Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil), assinale a afirmativa correta:",
    explicacao: "GABARITO: E. A assinatura digital de um documento eletrônico é criada gerando-se o hash (resumo) do arquivo e cifrando-se esse hash com a chave PRIVADA do signatário. Qualquer pessoa que tenha a chave PÚBLICA do signatário pode decifrar o hash assinado e compará-lo com o hash recalculado do documento recebido, garantindo autenticidade, integridade e não repúdio.",
    alternativas: [
      {
        letra: "A",
        texto: "A Autoridade Certificadora Raiz (AC Raiz) da ICP-Brasil emite certificados diretamente aos usuários finais e cidadãos comuns sem intermédio de ACs de nível inferior.",
        correta: false,
        explicacao_especifica: "Incorreto. A AC Raiz emite certificados exclusivamente para as Autoridades Certificadoras de 1º nível (intermediárias), mantendo a cadeia de confiança hierárquica."
      },
      {
        letra: "B",
        texto: "Os certificados do tipo A1 armazenam a chave privada obrigatoriamente em cartão inteligente (smartcard) ou token criptográfico com validade de até 5 anos.",
        correta: false,
        explicacao_especifica: "Incorreto. O tipo A1 armazena o par de chaves em software (no disco do computador) com validade máxima de 1 ano. O uso de hardware seguro (smartcard/token) é próprio do tipo A3."
      },
      {
        letra: "C",
        texto: "A assinatura digital tem como principal função garantir a confidencialidade do arquivo, impedindo que pessoas não autorizadas leiam o conteúdo assinado.",
        correta: false,
        explicacao_especifica: "Incorreto. A assinatura digital garante autenticidade, integridade e não repúdio (irretratabilidade), mas não o sigilo/confidencialidade (o texto original permanece legível salvo se for adicionalmente cifrado)."
      },
      {
        letra: "D",
        texto: "A assinatura digital é realizada cifrando-se todo o documento com a chave pública do destinatário e decifrando-o com a chave pública da Autoridade Certificadora.",
        correta: false,
        explicacao_especifica: "Incorreto. Cifrar com a chave pública do destinatário é procedimento de confidencialidade/criptografia assimétrica, não de assinatura digital."
      },
      {
        letra: "E",
        texto: "Para assinar digitalmente um documento, calcula-se o hash do arquivo e cifra-se esse resumo com a chave privada do signatário, permitindo a verificação por qualquer terceiro por meio da chave pública correspondente.",
        correta: true,
        explicacao_especifica: "Correto. Este é o mecanismo exato da assinatura digital, assegurando autoria, integridade e não repúdio."
      }
    ]
  },

  // 11 - Redes e Nuvem: Modelo TCP/IP (TCP vs UDP)
  {
    idSlug: "batch3-info-011",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.redes_nuvem,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Escrivão de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No modelo de arquitetura TCP/IP, o protocolo UDP (User Datagram Protocol) realiza o controle de fluxo por meio do mecanismo de janela deslizante (sliding window) e garante a retransmissão automática de datagramas corrompidos ou perdidos durante o trânsito na rede.",
    explicacao: "GABARITO: ERRADO. O UDP é um protocolo não orientado a conexão, não confiável e de melhor esforço (best-effort), não implementando mecanismos de confirmação (ACK), janela deslizante, controle de congestionamento ou retransmissão de pacotes. As características citadas pertencem exclusivamente ao protocolo TCP.",
    alternativas: [
      {
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Incorreto. O UDP não possui controle de fluxo por janela deslizante nem realiza retransmissão de dados perdidos."
      },
      {
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Gabarito Errado. Controle de fluxo, garantia de entrega e retransmissão são atributos típicos do protocolo TCP, não do UDP."
      }
    ]
  },

  // 12 - Redes e Nuvem: Portas e Protocolos Padrão (SSH, HTTPS, DNS)
  {
    idSlug: "batch3-info-012",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.redes_nuvem,
    banca_nome: "FCC",
    orgao_nome: "Polícia Civil do Estado do Amapá (PC-AP)",
    cargo_nome: "Agente de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Durante a análise de conexões de rede e logs de roteamento de um servidor suspeito, um investigador precisa identificar os números de porta TCP/UDP padronizados pela IANA para os serviços de resolução de nomes de domínio (DNS), acesso remoto seguro via terminal (SSH) e navegação web criptografada (HTTPS). As portas padrão desses três serviços são, respectivamente:",
    explicacao: "GABARITO: C. O DNS utiliza a porta 53 (UDP para consultas padrão e TCP para transferência de zona), o SSH utiliza a porta TCP 22 e o HTTPS utiliza a porta TCP 443.",
    alternativas: [
      {
        letra: "A",
        texto: "DNS: porta 23; SSH: porta 80; HTTPS: porta 8080.",
        correta: false,
        explicacao_especifica: "Incorreto. A porta 23 é do Telnet e a 80 é do HTTP não seguro."
      },
      {
        letra: "B",
        texto: "DNS: porta 25; SSH: porta 21; HTTPS: porta 443.",
        correta: false,
        explicacao_especifica: "Incorreto. A porta 25 é do SMTP e a 21 é do FTP (controle)."
      },
      {
        letra: "C",
        texto: "DNS: porta 53; SSH: porta 22; HTTPS: porta 443.",
        correta: true,
        explicacao_especifica: "Correto. As portas padrão da IANA para DNS, SSH e HTTPS são exatamente 53, 22 e 443."
      },
      {
        letra: "D",
        texto: "DNS: porta 110; SSH: porta 143; HTTPS: porta 3389.",
        correta: false,
        explicacao_especifica: "Incorreto. A porta 110 é do POP3, 143 do IMAP e 3389 do RDP (Terminal Services)."
      },
      {
        letra: "E",
        texto: "DNS: porta 67; SSH: porta 68; HTTPS: porta 587.",
        correta: false,
        explicacao_especifica: "Incorreto. As portas 67 e 68 referem-se ao DHCP e a 587 ao envio autenticado de e-mail (SMTP Submission)."
      }
    ]
  },

  // 13 - Redes e Nuvem: Redes Privadas Virtuais (VPN) e IPsec
  {
    idSlug: "batch3-info-013",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.redes_nuvem,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Rodoviária Federal (PRF)",
    cargo_nome: "Policial Rodoviário Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Uma VPN (Virtual Private Network) permite trafegar dados sigilosos por meio de tunelamento criptografado sobre redes públicas desprotegidas. No protocolo IPsec, quando configurado em modo túnel (tunnel mode), o pacote IP original inteiro (incluindo seu cabeçalho original e carga útil) é cifrado e encapsulado dentro de um novo pacote IP com um novo cabeçalho externo de roteamento.",
    explicacao: "GABARITO: CERTO. No IPsec, existem dois modos de operação: no modo transporte, apenas a carga útil (payload) do pacote IP é cifrada, mantendo-se o cabeçalho original; no modo túnel (típico de conexões gateway-to-gateway e VPNs corporativas), todo o pacote IP original é protegido e encapsulado dentro de um novo pacote IP com novo cabeçalho.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. No modo túnel do IPsec ocorre o encapsulamento e proteção do pacote IP integral original."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A descrição traz a definição exata do modo túnel do protocolo IPsec."
      }
    ]
  },

  // 14 - Redes e Nuvem: Modelos de Serviço em Nuvem (IaaS, PaaS, SaaS)
  {
    idSlug: "batch3-info-014",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.redes_nuvem,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil de Minas Gerais (PCMG)",
    cargo_nome: "Perito Criminal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "A Superintendência de Tecnologia da Polícia Civil estruturou três demandas de computação em nuvem: (1) contratação de máquinas virtuais, armazenamento em bloco e redes virtuais configuráveis, nas quais a equipe policial gerenciará o sistema operacional e os softwares instalados; (2) contratação de ambiente pré-configurado contendo runtime de execução de linguagens de programação e banco de dados gerenciado para desenvolvimento ágil de novas ferramentas de inteligência; (3) contratação de suíte de e-mails corporativos e editores de texto colaborativos utilizados diretamente pelos agentes via navegador sem gestão de infraestrutura. Esses três projetos classificam-se, respectivamente, como:",
    explicacao: "GABARITO: B. No modelo IaaS (Infraestrutura como Serviço), o cliente gerencia SO, middleware e dados. No PaaS (Plataforma como Serviço), o provedor entrega o ambiente de execução e desenvolvimento gerenciado. No SaaS (Software como Serviço), o usuário final consome a aplicação completa pronta.",
    alternativas: [
      {
        letra: "A",
        texto: "PaaS, IaaS e SaaS.",
        correta: false,
        explicacao_especifica: "Incorreto. O item (1) refere-se a IaaS e o item (2) a PaaS."
      },
      {
        letra: "B",
        texto: "IaaS, PaaS e SaaS.",
        correta: true,
        explicacao_especifica: "Correto. (1) IaaS fornece computação/storage/rede; (2) PaaS entrega ambiente para desenvolvimento/execução de aplicações; (3) SaaS disponibiliza o software pronto para uso final."
      },
      {
        letra: "C",
        texto: "SaaS, PaaS e IaaS.",
        correta: false,
        explicacao_especifica: "Incorreto. A ordem dos modelos está invertida."
      },
      {
        letra: "D",
        texto: "IaaS, SaaS e PaaS.",
        correta: false,
        explicacao_especifica: "Incorreto. O item (2) é PaaS e o item (3) é SaaS."
      },
      {
        letra: "E",
        texto: "DaaS, IaaS e BaaS.",
        correta: false,
        explicacao_especifica: "Incorreto. Os conceitos de DaaS (Desktop as a Service) e BaaS (Backend as a Service) não correspondem à sequência das três demandas descritas."
      }
    ]
  },

  // 15 - Redes e Nuvem: Modelos de Implantação de Nuvem
  {
    idSlug: "batch3-info-015",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.redes_nuvem,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "No modelo de implantação de nuvem pública, a infraestrutura física de servidores, armazenamento e redes é dedicada exclusivamente a uma única organização contratante, garantindo isolamento físico completo de hardware contra outros clientes do provedor.",
    explicacao: "GABARITO: ERRADO. O modelo caracterizado pelo uso exclusivo e dedicado a uma única organização é a Nuvem Privada (Private Cloud). Na Nuvem Pública (Public Cloud), os recursos computacionais físicos são compartilhados entre múltiplos clientes e organizações (arquitetura multi-tenant), sendo o isolamento provido por mecanismos lógicos de virtualização e controle de acesso.",
    alternativas: [
      {
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Incorreto. O enunciado descreve as características de uma nuvem privada, não de uma nuvem pública."
      },
      {
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Gabarito Errado. A nuvem pública opera sob infraestrutura compartilhada (multilocatária/multi-tenant), enquanto a nuvem privada é de uso exclusivo."
      }
    ]
  },

  // 16 - Redes e Nuvem: Endereçamento IPv4 e Blocos Privados (RFC 1918)
  {
    idSlug: "batch3-info-016",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.redes_nuvem,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
    cargo_nome: "Perito Criminal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Em uma investigação policial de crimes cibernéticos, o perito analisou logs de conexão interna e precisou distinguir endereços de IP privados (não roteáveis na Internet pública, conforme a RFC 1918) de endereços públicos. Assinale a alternativa que contém exclusivamente endereços IPv4 pertencentes aos blocos privados definidos pela RFC 1918:",
    explicacao: "GABARITO: E. Conforme a RFC 1918, os blocos de endereçamento IPv4 privado são: Classe A (10.0.0.0 a 10.255.255.255 / 10.0.0.0/8); Classe B (172.16.0.0 a 172.31.255.255 / 172.16.0.0/12); Classe C (192.168.0.0 a 192.168.255.255 / 192.168.0.0/16). Na alternativa E, 10.150.1.1 (Classe A), 172.25.10.5 (Classe B - entre 172.16 e 172.31) e 192.168.100.254 (Classe C) são todos IPs privados válidos.",
    alternativas: [
      {
        letra: "A",
        texto: "10.0.0.1, 172.35.1.1 e 192.168.1.1.",
        correta: false,
        explicacao_especifica: "Incorreto. O endereço 172.35.1.1 é público (o bloco privado da classe B vai apenas até 172.31.255.255)."
      },
      {
        letra: "B",
        texto: "11.1.1.1, 172.16.0.1 e 192.168.0.1.",
        correta: false,
        explicacao_especifica: "Incorreto. O endereço 11.1.1.1 é um IP público (o bloco da classe A privada é estritamente 10.0.0.0/8)."
      },
      {
        letra: "C",
        texto: "127.0.0.1, 172.20.1.1 e 200.180.1.1.",
        correta: false,
        explicacao_especifica: "Incorreto. 127.0.0.1 é reservado para loopback (RFC 1122) e 200.180.1.1 é um endereço IP público."
      },
      {
        letra: "D",
        texto: "169.254.10.1, 172.15.0.1 e 192.168.10.1.",
        correta: false,
        explicacao_especifica: "Incorreto. 169.254.0.0/16 é bloco link-local (APIPA) e 172.15.0.1 é um IP público."
      },
      {
        letra: "E",
        texto: "10.150.1.1, 172.25.10.5 e 192.168.100.254.",
        correta: true,
        explicacao_especifica: "Correto. Todos os três endereços pertencem rigorosamente às faixas privadas da RFC 1918 (10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16)."
      }
    ]
  },

  // 17 - Redes e Nuvem: Segurança de Borda (Firewall Stateful vs Stateless)
  {
    idSlug: "batch3-info-017",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.redes_nuvem,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Um firewall de filtragem de pacotes com inspeção de estados (stateful inspection firewall) analisa os pacotes de rede de forma individual e puramente isolada, sem manter registro das conexões ativas em uma tabela de estados, tomando decisões de bloqueio ou permissão baseando-se unicamente nas regras estáticas de cabeçalho de cada pacote avulso.",
    explicacao: "GABARITO: ERRADO. A definição apresentada corresponde ao firewall sem estado (stateless ou packet filtering tradicional). O firewall com inspeção de estados (stateful) mantém ativamente uma tabela de estados de conexão (state table), acompanhando o ciclo de vida completo de cada fluxo (SYN, ESTABLISHED, FIN, etc.), permitindo que pacotes de retorno pertencentes a uma conexão legítima previamente autorizada passem de forma dinâmica e segura.",
    alternativas: [
      {
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Incorreto. A assertiva descreve o comportamento de um firewall stateless, omitindo a principal funcionalidade do stateful (tabela de estados de conexão)."
      },
      {
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Gabarito Errado. O firewall stateful inspeciona o contexto e o estado das conexões em tempo real por meio de uma tabela de estados."
      }
    ]
  },

  // 18 - Sistemas Operacionais: Estrutura de Diretórios Linux em Perícia Forense
  {
    idSlug: "batch3-info-018",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.sistemas_operacionais,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PCERJ)",
    cargo_nome: "Perito Criminal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "Durante o exame pericial de um servidor Linux apreendido em flagrante delito, o perito oficial precisou: (1) inspecionar arquivos de log de auditoria e registros de autenticação de usuários; (2) analisar arquivos estáticos de configuração global do sistema e senhas criptografadas de contas locais; (3) extrair informações voláteis sobre processos em execução e estruturas de memória do kernel geradas dinamicamente. De acordo com o padrão FHS (Filesystem Hierarchy Standard), os diretórios que contêm esses elementos são, respectivamente:",
    explicacao: "GABARITO: A. No padrão FHS do Linux: (1) `/var/log` armazena arquivos de logs e registros de auditoria; (2) `/etc` contém os arquivos de configuração estática do sistema (como `/etc/passwd` e `/etc/shadow`); (3) `/proc` é um pseudossistema de arquivos virtual gerado em memória pelo kernel com informações em tempo real sobre processos e hardware.",
    alternativas: [
      {
        letra: "A",
        texto: "/var/log, /etc e /proc.",
        correta: true,
        explicacao_especifica: "Correto. `/var/log` guarda logs, `/etc` contém configurações globais e `/proc` expõe informações voláteis de processos e do kernel em memória."
      },
      {
        letra: "B",
        texto: "/etc, /var/log e /dev.",
        correta: false,
        explicacao_especifica: "Incorreto. `/dev` contém arquivos especiais de nós de dispositivos (hardware/blocos), não o pseudofs de processos voláteis."
      },
      {
        letra: "C",
        texto: "/proc, /sys e /tmp.",
        correta: false,
        explicacao_especifica: "Incorreto. `/proc` não é o repositório de logs e `/tmp` destina-se a arquivos temporários de aplicações."
      },
      {
        letra: "D",
        texto: "/var/log, /bin e /opt.",
        correta: false,
        explicacao_especifica: "Incorreto. `/bin` contém binários essenciais de comandos e `/opt` abriga softwares adicionais de terceiros."
      },
      {
        letra: "E",
        texto: "/usr/log, /etc e /home.",
        correta: false,
        explicacao_especifica: "Incorreto. A hierarquia `/usr/log` não é padrão do FHS e `/home` abriga os diretórios pessoais dos usuários."
      }
    ]
  },

  // 19 - Sistemas Operacionais: Comandos Linux de Perícia (grep)
  {
    idSlug: "batch3-info-019",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.sistemas_operacionais,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No sistema operacional Linux, o comando `grep -rni \"fraude\" /var/log/` executa uma busca recursiva em todos os arquivos e subdiretórios presentes em `/var/log/`, ignorando a diferença entre letras maiúsculas e minúsculas e exibindo o número da linha correspondente em cada ocorrência do termo localizado.",
    explicacao: "GABARITO: CERTO. No utilitário `grep`: o parâmetro `-r` (ou `-R`) habilita a busca recursiva em diretórios e subdiretórios; `-n` instrui a exibição do número da linha no arquivo onde o casamento de padrão ocorreu; e `-i` ativa o modo case-insensitive (ignora a distinção entre maiúsculas e minúsculas).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Os modificadores `-r` (recursivo), `-n` (número da linha) e `-i` (ignore case) conferem exatamente a funcionalidade descrita."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A sintaxe e a explicação de todos os parâmetros do comando grep estão absolutamente corretas."
      }
    ]
  },

  // 20 - Sistemas Operacionais: Permissões de Arquivos no Linux (chmod octal)
  {
    idSlug: "batch3-info-020",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.sistemas_operacionais,
    banca_nome: "IBFC",
    orgao_nome: "Polícia Civil da Paraíba (PC-PB)",
    cargo_nome: "Perito Oficial",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um perito forense digital precisa proteger um script de extração forense em um terminal Linux. As permissões exigidas são: permissão total de leitura, escrita e execução para o proprietário (usuário dono); permissão de leitura e execução para o grupo; e nenhuma permissão para os demais usuários (outros). O comando `chmod` em formato numérico octal que estabelece exatamente essas permissões é:",
    explicacao: "GABARITO: D (`chmod 750 script`). A representação octal de permissões no Linux calcula-se por: Leitura (r) = 4, Escrita (w) = 2, Execução (x) = 1. Para o proprietário: rwx = 4+2+1 = 7. Para o grupo: r-x = 4+0+1 = 5. Para os outros: --- = 0+0+0 = 0. Assim, a notação octal é 750.",
    alternativas: [
      {
        letra: "A",
        texto: "chmod 777 script",
        correta: false,
        explicacao_especifica: "Incorreto. O valor 777 concede permissão total (rwx) a todos (dono, grupo e outros)."
      },
      {
        letra: "B",
        texto: "chmod 755 script",
        correta: false,
        explicacao_especifica: "Incorreto. O valor 755 concede leitura e execução (r-x) para os outros usuários, em vez de restringi-los a zero."
      },
      {
        letra: "C",
        texto: "chmod 700 script",
        correta: false,
        explicacao_especifica: "Incorreto. O valor 700 retira todas as permissões do grupo e dos outros (rwx------)."
      },
      {
        letra: "D",
        texto: "chmod 750 script",
        correta: true,
        explicacao_especifica: "Correto. 7 (rwx para o dono) + 5 (r-x para o grupo) + 0 (--- para outros)."
      },
      {
        letra: "E",
        texto: "chmod 640 script",
        correta: false,
        explicacao_especifica: "Incorreto. O valor 640 concede rw- para o dono, r-- para o grupo e nada para outros, sem atribuir permissão de execução."
      }
    ]
  },

  // 21 - Sistemas Operacionais: Gerenciamento de Processos e Sinais (kill)
  {
    idSlug: "batch3-info-021",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.sistemas_operacionais,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No sistema operacional Linux, o sinal SIGKILL (kill -9) e o sinal SIGTERM (kill -15) possuem comportamento idêntico, permitindo que o processo alvo intercepte a notificação recebida, execute rotinas de salvamento em disco e finalize seus subprocessos ordenadamente antes de fechar.",
    explicacao: "GABARITO: ERRADO. O sinal SIGTERM (15) é o sinal padrão de encerramento educado e gracioso, podendo ser interceptado, tratado ou bloqueado pelo processo para finalizar tarefas e salvar dados. Já o sinal SIGKILL (9) é processado diretamente pelo kernel do Linux, não podendo ser capturado, interceptado ou ignorado pelo processo alvo, resultando em sua eliminação compulsória e imediata.",
    alternativas: [
      {
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Incorreto. SIGKILL e SIGTERM possuem naturezas e comportamentos operacionais substancialmente distintos."
      },
      {
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Gabarito Errado. O sinal SIGKILL não pode ser interceptado nem tratado pelo processo, ao contrário do SIGTERM."
      }
    ]
  },

  // 22 - Sistemas Operacionais: Firewall Linux (iptables)
  {
    idSlug: "batch3-info-022",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.sistemas_operacionais,
    banca_nome: "IDECAN",
    orgao_nome: "Polícia Civil do Ceará (PC-CE)",
    cargo_nome: "Inspetor de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No utilitário de firewall `iptables` do Linux, a tabela padrão utilizada para inspeção e controle de tráfego de pacotes é a tabela `FILTER`. As três cadeias (chains) embutidas que compõem nativamente essa tabela são:",
    explicacao: "GABARITO: B. A tabela `FILTER` do iptables é a tabela padrão de filtragem de pacotes e possui nativamente três chains: `INPUT` (para pacotes destinados à máquina local), `OUTPUT` (para pacotes gerados pela máquina local) e `FORWARD` (para pacotes roteados através da máquina local com destino a outro host).",
    alternativas: [
      {
        letra: "A",
        texto: "PREROUTING, POSTROUTING e OUTPUT.",
        correta: false,
        explicacao_especifica: "Incorreto. PREROUTING e POSTROUTING são chains típicas das tabelas NAT e MANGLE, não da tabela FILTER."
      },
      {
        letra: "B",
        texto: "INPUT, OUTPUT e FORWARD.",
        correta: true,
        explicacao_especifica: "Correto. As três chains nativas que integram a tabela FILTER do iptables são rigorosamente INPUT, OUTPUT e FORWARD."
      },
      {
        letra: "C",
        texto: "ACCEPT, DROP e REJECT.",
        correta: false,
        explicacao_especifica: "Incorreto. ACCEPT, DROP e REJECT são alvos/ações (targets), e não chains (cadeias de regras)."
      },
      {
        letra: "D",
        texto: "INPUT, FORWARD e PREROUTING.",
        correta: false,
        explicacao_especifica: "Incorreto. A chain PREROUTING não faz parte da tabela FILTER padrão."
      },
      {
        letra: "E",
        texto: "NAT, MANGLE e RAW.",
        correta: false,
        explicacao_especifica: "Incorreto. NAT, MANGLE e RAW são nomes de outras tabelas do Netfilter/iptables, e não chains."
      }
    ]
  },

  // 23 - Sistemas Operacionais: Windows PowerShell em Auditoria Forense
  {
    idSlug: "batch3-info-023",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.sistemas_operacionais,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "No ambiente Windows PowerShell, o cmdlet `Get-FileHash -Path C:\\evidencia\\disco.dd -Algorithm SHA256` calcula o valor de resumo criptográfico SHA-256 do arquivo informado, constituindo uma ferramenta nativa de linha de comando amplamente empregada para conferência de integridade de mídias e laudos periciais.",
    explicacao: "GABARITO: CERTO. O cmdlet `Get-FileHash` do PowerShell calcula o hash de arquivos utilizando algoritmos criptográficos especificados pelo parâmetro `-Algorithm` (como SHA256 [padrão], SHA1, SHA384, SHA512 e MD5), sendo essencial em procedimentos de auditoria e preservação forense no ambiente Windows.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O cmdlet `Get-FileHash` com o parâmetro `-Algorithm SHA256` cumpre com precisão a função informada."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A sintaxe e a finalidade forense do cmdlet estão descritas corretamente."
      }
    ]
  },

  // 24 - Sistemas Operacionais: Sistemas de Arquivos NTFS (Alternate Data Streams)
  {
    idSlug: "batch3-info-024",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.sistemas_operacionais,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
    cargo_nome: "Perito Criminal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "dificil",
    enunciado: "No sistema de arquivos NTFS (New Technology File System) do Microsoft Windows, um recurso específico possibilita associar mais de um fluxo de dados a um mesmo arquivo (ex.: `arquivo.txt:malware.exe`), sem que o tamanho exibido no Windows Explorer tradicional seja alterado. Esse recurso, frequentemente investigado em perícias forenses por ser utilizado para ocultar dados e códigos maliciosos, é denominado:",
    explicacao: "GABARITO: C (Alternate Data Streams - ADS). O ADS é um recurso do NTFS criado originalmente para compatibilidade com o sistema de arquivos HFS da Apple. Ele permite anexar fluxos de dados secundários a um arquivo existente utilizando a sintaxe `nome_arquivo:nome_stream`, tornando os dados ocultos para ferramentas gráficas convencionais de visualização de diretórios.",
    alternativas: [
      {
        letra: "A",
        texto: "Volume Shadow Copy (VSS).",
        correta: false,
        explicacao_especifica: "Incorreto. O VSS é a tecnologia de criação de cópias de sombra e pontos de restauração de volumes no Windows."
      },
      {
        letra: "B",
        texto: "Master Boot Record (MBR).",
        correta: false,
        explicacao_especifica: "Incorreto. MBR é a estrutura de particionamento e inicialização localizada no primeiro setor do disco."
      },
      {
        letra: "C",
        texto: "Alternate Data Streams (ADS).",
        correta: true,
        explicacao_especifica: "Correto. O ADS do NTFS permite ocultar fluxos de dados adicionais vinculados a um arquivo principal sem alterar seu tamanho aparente."
      },
      {
        letra: "D",
        texto: "BitLocker Drive Encryption.",
        correta: false,
        explicacao_especifica: "Incorreto. BitLocker é a ferramenta nativa de cifragem completa de volumes de disco do Windows."
      },
      {
        letra: "E",
        texto: "Access Control List (ACL).",
        correta: false,
        explicacao_especifica: "Incorreto. ACLs são listas de controle de acesso que definem privilégios de usuários e grupos sobre objetos."
      }
    ]
  },

  // 25 - Bancos de Dados: Modelo Relacional (Chaves Primárias e Estrangeiras)
  {
    idSlug: "batch3-info-025",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.bancos_dados,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Agente de Polícia Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "facil",
    enunciado: "Em um banco de dados relacional, uma tabela pode possuir múltiplas chaves primárias (Primary Keys) ativas simultaneamente, sendo expressamente permitido que os atributos integrantes da chave primária recebam valores nulos (NULL) quando o registro cadastrado representar uma entidade em caráter provisório.",
    explicacao: "GABARITO: ERRADO. No modelo relacional, cada tabela pode possuir apenas UMA chave primária (que pode ser simples ou composta por múltiplos atributos). Além disso, a regra fundamental de integridade de entidade (Entity Integrity) estabelece categoricamente que nenhum atributo integrante de uma chave primária pode aceitar valores nulos (NULL).",
    alternativas: [
      {
        texto: "Certo",
        correta: false,
        explicacao_especifica: "Incorreto. Uma tabela só pode ter uma chave primária e seus campos jamais podem conter valores NULL."
      },
      {
        texto: "Errado",
        correta: true,
        explicacao_especifica: "Gabarito Errado. Há apenas uma chave primária por tabela e a integridade de entidade veda valores nulos na chave primária."
      }
    ]
  },

  // 26 - Bancos de Dados: SQL DML (SELECT, WHERE, ORDER BY)
  {
    idSlug: "batch3-info-026",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.bancos_dados,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil de Minas Gerais (PCMG)",
    cargo_nome: "Investigador de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Um policial civil necessita consultar a tabela de registros de ocorrências policiais, denominada `ocorrencias`, para selecionar todas as colunas dos registros cujo status seja 'INVESTIGACAO' e cujo ano do fato seja exatamente igual a 2024, ordenando o resultado pelo identificador `id_ocorrencia` do maior para o menor (ordem decrescente). O comando SQL correto para realizar essa consulta é:",
    explicacao: "GABARITO: A. O comando padrão SQL utiliza `SELECT * FROM ocorrencias` para selecionar todas as colunas; a cláusula `WHERE status = 'INVESTIGACAO' AND ano_fato = 2024` para os filtros lógicos; e `ORDER BY id_ocorrencia DESC` para ordenar de forma decrescente.",
    alternativas: [
      {
        letra: "A",
        texto: "SELECT * FROM ocorrencias WHERE status = 'INVESTIGACAO' AND ano_fato = 2024 ORDER BY id_ocorrencia DESC;",
        correta: true,
        explicacao_especifica: "Correto. A consulta atende com perfeição à sintaxe padrão ANSI SQL com SELECT, WHERE e ORDER BY DESC."
      },
      {
        letra: "B",
        texto: "SELECT ALL ocorrencias WHERE status IS 'INVESTIGACAO' OR ano_fato = 2024 SORT BY id_ocorrencia DESCENDING;",
        correta: false,
        explicacao_especifica: "Incorreto. A sintaxe de SELECT ALL sem FROM e SORT BY DESCENDING é inválida em SQL."
      },
      {
        letra: "C",
        texto: "FETCH * FROM ocorrencias HAVING status = 'INVESTIGACAO' AND ano_fato = 2024 ORDER BY id_ocorrencia DOWN;",
        correta: false,
        explicacao_especifica: "Incorreto. `FETCH` não substitui `SELECT`, `HAVING` é para grupos de agregação e `DOWN` não é palavra-chave de ordenação."
      },
      {
        letra: "D",
        texto: "UPDATE ocorrencias SET status = 'INVESTIGACAO' WHERE ano_fato = 2024 ORDER BY id_ocorrencia DESC;",
        correta: false,
        explicacao_especifica: "Incorreto. `UPDATE` é um comando de modificação/atualização de dados em tabela, e não de consulta."
      },
      {
        letra: "E",
        texto: "SELECT * IN ocorrencias WHERE status == 'INVESTIGACAO' AND ano_fato == 2024 GROUP BY id_ocorrencia DESC;",
        correta: false,
        explicacao_especifica: "Incorreto. A sintaxe usa `FROM`, operador de igualdade simples `=` e `ORDER BY` em vez de `GROUP BY`."
      }
    ]
  },

  // 27 - Bancos de Dados: SQL Junções Relacionais (LEFT JOIN)
  {
    idSlug: "batch3-info-027",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.bancos_dados,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2024,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Na linguagem SQL padrão, a execução de uma consulta utilizando `LEFT JOIN` entre a tabela `investigados` (tabela à esquerda) e a tabela `mandados_busca` (tabela à direita) retornará todas as linhas da tabela `investigados`, mesmo para aqueles indivíduos que não possuam nenhum mandado associado na tabela da direita; para estes, as colunas oriundas de `mandados_busca` serão preenchidas com valores `NULL`.",
    explicacao: "GABARITO: CERTO. A junção externa à esquerda (LEFT OUTER JOIN ou simplesmente LEFT JOIN) preserva todas as tuplas da tabela situada à esquerda na cláusula. Caso não haja correspondência na tabela da direita segundo a condição `ON`, as colunas correspondentes da tabela da direita são preenchidas com valores nulos (NULL).",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. Essa é a definição exata e o comportamento padrão da cláusula LEFT JOIN em bancos relacionais."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A afirmação descreve com absoluta fidelidade o funcionamento da junção externa à esquerda."
      }
    ]
  },

  // 28 - Bancos de Dados: SQL Agrupamento e Cláusulas (GROUP BY e HAVING)
  {
    idSlug: "batch3-info-028",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.bancos_dados,
    banca_nome: "VUNESP",
    orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
    cargo_nome: "Escrivão de Polícia",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Em um banco de dados de inteligência policial, deseja-se totalizar o número de ocorrências registradas por município, apresentando no relatório final apenas os municípios que acumulem mais de 50 ocorrências. Para filtrar o resultado com base no valor dessa função de agregação (`COUNT`), deve-se utilizar a cláusula:",
    explicacao: "GABARITO: E (`GROUP BY municipio HAVING COUNT(*) > 50`). A cláusula `WHERE` filtra linhas individuais antes do agrupamento. Quando o critério de filtragem envolve o resultado de uma função de agregação (como `COUNT`, `SUM`, `AVG`), deve-se utilizar obrigatoriamente a cláusula `HAVING` após o `GROUP BY`.",
    alternativas: [
      {
        letra: "A",
        texto: "WHERE COUNT(*) > 50 GROUP BY municipio",
        correta: false,
        explicacao_especifica: "Incorreto. Funções de agregação não podem ser utilizadas diretamente na cláusula WHERE."
      },
      {
        letra: "B",
        texto: "ORDER BY municipio WHERE SUM(*) > 50",
        correta: false,
        explicacao_especifica: "Incorreto. A cláusula WHERE não opera sobre agrupamentos e SUM(*) é sintaxe inválida."
      },
      {
        letra: "C",
        texto: "GROUP BY municipio FILTER COUNT(*) > 50",
        correta: false,
        explicacao_especifica: "Incorreto. `FILTER` não é a cláusula padrão de filtragem de agrupamentos no SQL ANSI."
      },
      {
        letra: "D",
        texto: "SELECT DISTINCT municipio WHERE TOTAL > 50",
        correta: false,
        explicacao_especifica: "Incorreto. `DISTINCT` apenas elimina duplicidades de linhas, não realizando contagem agrupada."
      },
      {
        letra: "E",
        texto: "GROUP BY municipio HAVING COUNT(*) > 50",
        correta: true,
        explicacao_especifica: "Correto. O `GROUP BY` agrupa as ocorrências por município e o `HAVING` aplica o filtro sobre a função agregada `COUNT(*)`."
      }
    ]
  },

  // 29 - Bancos de Dados: NoSQL e Grafos em Inteligência Policial
  {
    idSlug: "batch3-info-029",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.bancos_dados,
    banca_nome: "CEBRASPE (CESPE)",
    orgao_nome: "Polícia Federal (PF)",
    cargo_nome: "Perito Criminal Federal",
    ano: 2025,
    tipo: "certo_errado",
    dificuldade: "medio",
    enunciado: "Bancos de dados NoSQL orientados a grafos (como o Neo4j) utilizam nós (entidades), arestas (relacionamentos direcionados) e propriedades para representar dados altamente interconectados, apresentando desempenho superior aos bancos relacionais tradicionais em operações complexas de travessia de redes, análise de vínculos e identificação de rotas de lavagem de dinheiro em investigações policiais.",
    explicacao: "GABARITO: CERTO. Os bancos de grafos modelam nativamente relacionamentos como elementos de primeira classe (ponteiros diretos entre nós adjacentes). Isso elimina o custo computacional de múltiplas operações complexas de `JOIN` em bancos relacionais, tornando-os ideais para análise de vínculos (link analysis), detecção de fraudes e mapeamento de redes criminosas complexas.",
    alternativas: [
      {
        texto: "Certo",
        correta: true,
        explicacao_especifica: "Correto. O modelo de grafos NoSQL é a tecnologia de referência para análise de vínculos e redes complexas em inteligência policial."
      },
      {
        texto: "Errado",
        correta: false,
        explicacao_especifica: "Incorreto. A assertiva descreve perfeitamente as características e aplicações dos bancos de dados orientados a grafos."
      }
    ]
  },

  // 30 - Bancos de Dados: Big Data e os 5 Vs
  {
    idSlug: "batch3-info-030",
    disciplina_id: TAXONOMIA.disciplinas.informatica,
    assunto_id: TAXONOMIA.assuntos.bancos_dados,
    banca_nome: "FGV",
    orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
    cargo_nome: "Perito Criminal",
    ano: 2024,
    tipo: "multipla_escolha",
    dificuldade: "medio",
    enunciado: "Na análise pericial e no processamento massivo de dados telemáticos, bancários e telefônicos apreendidos em operações policiais, aplicam-se conceitos e arquiteturas de Big Data. As cinco características fundamentais que compõem o modelo consagrado dos '5 Vs' do Big Data são:",
    explicacao: "GABARITO: D (Volume, Velocidade, Variedade, Veracidade e Valor). As cinco dimensões essenciais do Big Data são: (1) Volume (quantidade massiva de dados); (2) Velocidade (rapidez na geração, coleta e processamento em tempo real); (3) Variedade (diversidade de formatos estruturados, semiestruturados e não estruturados); (4) Veracidade (confiabilidade e qualidade da informação); e (5) Valor (utilidade prática e inteligência extraída dos dados).",
    alternativas: [
      {
        letra: "A",
        texto: "Volume, Vetorização, Variância, Verificação e Vigilância.",
        correta: false,
        explicacao_especifica: "Incorreto. Vetorização, variância e vigilância não integram a definição clássica dos 5 Vs de Big Data."
      },
      {
        letra: "B",
        texto: "Virtualização, Velocidade, Vetorização, Volatilidade e Visibilidade.",
        correta: false,
        explicacao_especifica: "Incorreto. Volatilidade e virtualização são conceitos de sistemas, não sendo os Vs fundamentais de Big Data."
      },
      {
        letra: "C",
        texto: "Velocidade, Viscosidade, Validação, Visualização e Veredito.",
        correta: false,
        explicacao_especifica: "Incorreto. Viscosidade e veredito não fazem parte do modelo conceitual de Big Data."
      },
      {
        letra: "D",
        texto: "Volume, Velocidade, Variedade, Veracidade e Valor.",
        correta: true,
        explicacao_especifica: "Correto. Esta é a definição canônica e universalmente adotada dos 5 Vs do Big Data."
      },
      {
        letra: "E",
        texto: "Volume, Validação, Vinculação, Variabilidade e Vulnerabilidade.",
        correta: false,
        explicacao_especifica: "Incorreto. Vinculação e vulnerabilidade não correspondem aos pilares clássicos de Big Data."
      }
    ]
  }
];
