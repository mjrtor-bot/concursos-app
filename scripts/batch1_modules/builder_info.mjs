import fs from "fs";
import path from "path";
import { TAXONOMIA } from "./taxonomia.mjs";

export function generateInfoQuestions() {
  const dId = TAXONOMIA.disciplinas.informatica;
  const ass = TAXONOMIA.assuntos;

  const raw = [
    // 1-10: Segurança da Informação e Criptografia
    {
      idSlug: "info-01",
      disciplina_id: dId,
      assunto_id: ass.seguranca_info,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "O ransomware é um tipo de código malicioso que restringe o acesso ao sistema ou criptografa arquivos da vítima, exigindo subsequentemente pagamento de resgate para restabelecimento do acesso.",
      explicacao: "GABARITO: CERTO. Ransomware é o malware de extorsão que utiliza cifras criptográficas para bloquear arquivos ou sistemas, demandando compensação financeira.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Conceito clássico e exato de ransomware na segurança da informação." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A definição de ransomware corresponde com exatidão ao enunciado." }
      ]
    },
    {
      idSlug: "info-02",
      disciplina_id: dId,
      assunto_id: ass.seguranca_info,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Perito Criminal Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "Na criptografia assimétrica, a chave pública do destinatário é utilizada para cifrar a mensagem, sendo que apenas a chave privada correspondente desse mesmo destinatário é capaz de decifrá-la.",
      explicacao: "GABARITO: CERTO. Criptografia assimétrica (chaves pública e privada): para garantir confidencialidade, cifra-se com a chave pública do receptor e decifra-se com a sua chave privada.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Regra fundamental da criptografia de chave pública para garantia de sigilo." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. Apenas a chave privada correlata consegue decodificar a mensagem cifrada pela chave pública." }
      ]
    },
    {
      idSlug: "info-03",
      disciplina_id: dId,
      assunto_id: ass.seguranca_info,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "O princípio da segurança da informação que garante que uma mensagem não foi alterada durante sua transmissão é denominado:",
      explicacao: "GABARITO: Integridade. A integridade protege a informação contra modificações não autorizadas ou acidentais.",
      alternativas: [
        { letra: "A", texto: "Confidencialidade.", correta: false, explicacao_especifica: "Garante que o acesso seja restrito a pessoas autorizadas." },
        { letra: "B", texto: "Integridade.", correta: true, explicacao_especifica: "Garante que a informação não foi modificada ou corrompida." },
        { letra: "C", texto: "Disponibilidade.", correta: false, explicacao_especifica: "Garante acesso quando solicitado por usuários autorizados." },
        { letra: "D", texto: "Autenticidade.", correta: false, explicacao_especifica: "Garante a identidade do emissor." },
        { letra: "E", texto: "Não repúdio.", correta: false, explicacao_especifica: "Impede que o emissor negue a autoria da mensagem." }
      ]
    },
    {
      idSlug: "info-04",
      disciplina_id: dId,
      assunto_id: ass.seguranca_info,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Papiloscopista Policial Federal",
      ano: 2023,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "A assinatura digital provê autenticidade, integridade e não repúdio à mensagem transmitida, mas não assegura, por si só, o sigilo ou a confidencialidade do seu conteúdo.",
      explicacao: "GABARITO: CERTO. A assinatura digital utiliza hash e a chave privada do emissor para garantir AIN (Autenticidade, Integridade e Não repúdio). Para conferir sigilo (confidencialidade), é necessário também cifrar o conteúdo com a chave pública do destinatário.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Assinatura digital não criptografa o documento para fins de sigilo, apenas assina seu hash." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A assinatura digital não fornece confidencialidade sem cifragem adicional." }
      ]
    },
    {
      idSlug: "info-05",
      disciplina_id: dId,
      assunto_id: ass.seguranca_info,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Investigador Policial",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "O ataque cibernético que busca enganar a vítima por meio de e-mails, links ou sites falsos com o objetivo de capturar credenciais de login ou dados bancários é denominado:",
      explicacao: "GABARITO: Phishing. É o método de engenharia social por mensagens fraudulentas que induzem o usuário a fornecer dados sensíveis.",
      alternativas: [
        { letra: "A", texto: "Trojan.", correta: false, explicacao_especifica: "Cavalo de Troia é um programa que aparenta ser útil mas executa ações maliciosas." },
        { letra: "B", texto: "Phishing.", correta: true, explicacao_especifica: "Engenharia social que atrai vítimas para páginas fraudulentas visando roubar senhas/dados." },
        { letra: "C", texto: "Spyware.", correta: false, explicacao_especifica: "Software espião focado em monitorar atividades do usuário." },
        { letra: "D", texto: "Rootkit.", correta: false, explicacao_especifica: "Conjunto de ferramentas que mantém acesso privilegiado e oculta malwares." },
        { letra: "E", texto: "Adware.", correta: false, explicacao_especifica: "Programa que exibe anúncios publicitários indesejados." }
      ]
    },
    {
      idSlug: "info-06",
      disciplina_id: dId,
      assunto_id: ass.seguranca_info,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "facil",
      enunciado: "Um firewall de rede atua como uma barreira de proteção controlando o tráfego de entrada e saída com base em regras de segurança predefinidas, podendo bloquear portas e protocolos não autorizados.",
      explicacao: "GABARITO: CERTO. O firewall filtra pacotes inspecionando portas (ex: 80, 443, 22), IPs e protocolos (TCP, UDP), bloqueando acessos indevidos.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Função primordial do firewall corporativo ou de perímetro." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. O firewall executa exatamente o controle e filtragem do tráfego com base em políticas de segurança." }
      ]
    },
    {
      idSlug: "info-07",
      disciplina_id: dId,
      assunto_id: ass.seguranca_info,
      banca_nome: "IBFC",
      orgao_nome: "Polícia Penal do Estado de Minas Gerais",
      cargo_nome: "Policial Penal",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Qual algoritmo criptográfico a seguir é classificado como de chave simétrica?",
      explicacao: "GABARITO: AES (Advanced Encryption Standard). RSA, ECC e DSA são assimétricos. SHA-256 é função hash criptográfica.",
      alternativas: [
        { letra: "A", texto: "RSA.", correta: false, explicacao_especifica: "Algoritmo de chave pública (assimétrico)." },
        { letra: "B", texto: "AES.", correta: true, explicacao_especifica: "Padrão de cifragem de bloco simétrico adotado mundialmente." },
        { letra: "C", texto: "ECC.", correta: false, explicacao_especifica: "Criptografia de curvas elípticas (assimétrica)." },
        { letra: "D", texto: "DSA.", correta: false, explicacao_especifica: "Digital Signature Algorithm (assimétrico)." },
        { letra: "E", texto: "SHA-256.", correta: false, explicacao_especifica: "Função de resumo criptográfico unidirecional (hash), não cifra simétrica." }
      ]
    },
    {
      idSlug: "info-08",
      disciplina_id: dId,
      assunto_id: ass.seguranca_info,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Escrivão de Polícia Federal",
      ano: 2023,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "A autenticação de dois fatores (2FA) combina fatores de naturezas distintas, tais como algo que você sabe (senha), algo que você tem (token/smartphone) ou algo que você é (biometria).",
      explicacao: "GABARITO: CERTO. A autenticação multifator exige a combinação de categorias diferentes (conhecimento, posse e inerência).",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Os três pilares da autenticação: saber, ter e ser." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A autenticação em dois fatores apoia-se exatamente em categorias distintas de credenciais." }
      ]
    },
    {
      idSlug: "info-09",
      disciplina_id: dId,
      assunto_id: ass.seguranca_info,
      banca_nome: "INSTITUTO AOCP",
      orgao_nome: "Polícia Civil de Goiás (PC-GO)",
      cargo_nome: "Agente de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "O tipo de malware que se replica automaticamente através de vulnerabilidades na rede, sem a necessidade de ser executado diretamente por um usuário ou acoplado a outro programa, é o:",
      explicacao: "GABARITO: Worm (Verme). Diferente do vírus que precisa de hospedeiro e ação do usuário, o worm se propaga de forma autônoma pelas redes de computadores.",
      alternativas: [
        { letra: "A", texto: "Vírus de macro.", correta: false, explicacao_especifica: "Precisa de arquivo infectado aberto pelo usuário." },
        { letra: "B", texto: "Worm.", correta: true, explicacao_especifica: "Propaga-se de forma autônoma e autorreplicante por redes." },
        { letra: "C", texto: "Spyware.", correta: false, explicacao_especifica: "Malware de vigilância e captura de dados." },
        { letra: "D", texto: "Rootkit.", correta: false, explicacao_especifica: "Conjunto de ocultação e acesso privilegiado." },
        { letra: "E", texto: "Keylogger.", correta: false, explicacao_especifica: "Capturador de teclas digitadas." }
      ]
    },
    {
      idSlug: "info-10",
      disciplina_id: dId,
      assunto_id: ass.seguranca_info,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Perito Criminal Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "As funções de hash criptográfico como SHA-256 são irreversíveis (unidirecionais) e devem apresentar alta resistência a colisões, tornando computacionalmente inviável encontrar dois arquivos diferentes que resultem no mesmo resumo hash.",
      explicacao: "GABARITO: CERTO. Propriedades essenciais do hash seguro: unidirecionalidade (one-way) e resistência a colisões (collision resistance).",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Propriedades criptográficas fundamentais do padrão SHA-2." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A resistência a colisões e a unidirecionalidade são pilares do hash criptográfico." }
      ]
    },

    // 11-18: Redes de Computadores e Nuvem
    {
      idSlug: "info-11",
      disciplina_id: dId,
      assunto_id: ass.redes_nuvem,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "O protocolo HTTPS opera na camada de aplicação utilizando nativamente a porta TCP 443, provendo comunicação criptografada por meio dos protocolos TLS/SSL.",
      explicacao: "GABARITO: CERTO. O HTTPS combina HTTP com TLS na porta 443/TCP para garantir confidencialidade e autenticidade na web.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "HTTPS usa TCP 443 e criptografia TLS/SSL na camada de aplicação." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A porta padrão e o mecanismo de proteção do HTTPS estão corretos." }
      ]
    },
    {
      idSlug: "info-12",
      disciplina_id: dId,
      assunto_id: ass.redes_nuvem,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Perito Criminal",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "No modelo TCP/IP, qual protocolo da camada de transporte provê serviço orientado a conexão com garantia de entrega ordenada e controle de fluxo?",
      explicacao: "GABARITO: TCP (Transmission Control Protocol). O UDP é não orientado a conexão e não garante entrega.",
      alternativas: [
        { letra: "A", texto: "UDP.", correta: false, explicacao_especifica: "Protocolo não confiável e sem conexão prévia (stateless)." },
        { letra: "B", texto: "TCP.", correta: true, explicacao_especifica: "Orientado a conexão com three-way handshake, confirmação (ACK) e retransmissão." },
        { letra: "C", texto: "IP.", correta: false, explicacao_especifica: "Protocolo da camada de rede (Internet)." },
        { letra: "D", texto: "ICMP.", correta: false, explicacao_especifica: "Protocolo de controle de rede/mensagens de erro (camada de rede)." },
        { letra: "E", texto: "ARP.", correta: false, explicacao_especifica: "Resolução de endereço IP para MAC (camada de enlace/rede)." }
      ]
    },
    {
      idSlug: "info-13",
      disciplina_id: dId,
      assunto_id: ass.redes_nuvem,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "O protocolo DHCP é responsável por atribuir dinamicamente configurações de rede aos hosts clientes, incluindo endereço IP, máscara de sub-rede, gateway padrão e servidores DNS.",
      explicacao: "GABARITO: CERTO. DHCP (Dynamic Host Configuration Protocol) automatiza a distribuição de parâmetros de rede IP.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Função primordial do protocolo DHCP na camada de aplicação/transporte UDP 67/68." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. O DHCP executa com precisão a concessão automática de IP, máscara e gateway." }
      ]
    },
    {
      idSlug: "info-14",
      disciplina_id: dId,
      assunto_id: ass.redes_nuvem,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Escrivão de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "Qual protocolo da Internet tem como função principal converter nomes de domínio amigáveis (ex: www.policiacivil.sp.gov.br) em seus respectivos endereços IP numéricos?",
      explicacao: "GABARITO: DNS (Domain Name System). Opera na porta 53 UDP/TCP convertendo FQDN em IP.",
      alternativas: [
        { letra: "A", texto: "FTP.", correta: false, explicacao_especifica: "Transferência de arquivos (portas 20/21)." },
        { letra: "B", texto: "DNS.", correta: true, explicacao_especifica: "Sistema de Resolução de Nomes de Domínio em endereços IP." },
        { letra: "C", texto: "SNMP.", correta: false, explicacao_especifica: "Gerenciamento de dispositivos de rede." },
        { letra: "D", texto: "SMTP.", correta: false, explicacao_especifica: "Envio de correio eletrônico (e-mail)." },
        { letra: "E", texto: "SSH.", correta: false, explicacao_especifica: "Acesso remoto seguro por terminal." }
      ]
    },
    {
      idSlug: "info-15",
      disciplina_id: dId,
      assunto_id: ass.redes_nuvem,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Papiloscopista Policial Federal",
      ano: 2023,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "O endereço IPv6 é constituído por 128 bits organizados em 8 grupos de 4 dígitos hexadecimais, o que soluciona o esgotamento do espaço de endereçamento do padrão IPv4 (de 32 bits).",
      explicacao: "GABARITO: CERTO. IPv4 = 32 bits (~4,3 bilhões de endereços); IPv6 = 128 bits (espaço de 2^128 endereços).",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Estrutura técnica exata do IPv6 em 128 bits e base hexadecimal." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. O IPv6 possui exatamente 128 bits estruturados em notação hexadecimal." }
      ]
    },
    {
      idSlug: "info-16",
      disciplina_id: dId,
      assunto_id: ass.redes_nuvem,
      banca_nome: "IBFC",
      orgao_nome: "Polícia Penal do Estado de Minas Gerais",
      cargo_nome: "Policial Penal",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "No modelo de computação em nuvem, quando o provedor disponibiliza uma aplicação completa ao usuário final acessível via navegador web (como o Google Workspace ou Microsoft 365), trata-se do modelo:",
      explicacao: "GABARITO: SaaS (Software as a Service / Software como Serviço). IaaS fornece infraestrutura (máquinas virtuais); PaaS fornece plataforma de desenvolvimento.",
      alternativas: [
        { letra: "A", texto: "IaaS (Infrastructure as a Service).", correta: false, explicacao_especifica: "Locação de servidores virtuais, discos e rede." },
        { letra: "B", texto: "PaaS (Platform as a Service).", correta: false, explicacao_especifica: "Ambiente para desenvolvedores criarem softwares." },
        { letra: "C", texto: "SaaS (Software as a Service).", correta: true, explicacao_especifica: "Aplicações prontas para uso final via web/app sem gestão de infraestrutura." },
        { letra: "D", texto: "DaaS (Desktop as a Service).", correta: false, explicacao_especifica: "Virtualização pontual de desktops." },
        { letra: "E", texto: "BaaS (Backend as a Service).", correta: false, explicacao_especifica: "Serviços específicos de backend para apps." }
      ]
    },
    {
      idSlug: "info-17",
      disciplina_id: dId,
      assunto_id: ass.redes_nuvem,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Uma VPN (Virtual Private Network) cria um túnel criptografado sobre uma rede pública como a Internet, permitindo tráfego seguro de dados entre filiais ou acesso remoto seguro de servidores policiais.",
      explicacao: "GABARITO: CERTO. A VPN encapsula e cifra os pacotes de dados, assegurando privacidade e integridade na transmissão por redes públicas.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Definição formal de rede privada virtual e tunelamento seguro." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A VPN realiza exatamente o encapsulamento seguro e criptografado sobre redes abertas." }
      ]
    },
    {
      idSlug: "info-18",
      disciplina_id: dId,
      assunto_id: ass.redes_nuvem,
      banca_nome: "INSTITUTO AOCP",
      orgao_nome: "Polícia Civil de Goiás (PC-GO)",
      cargo_nome: "Agente de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Qual protocolo é utilizado para recebimento de correio eletrônico em que as mensagens são baixadas para o cliente local e, por padrão, removidas da caixa postal do servidor?",
      explicacao: "GABARITO: POP3 (Post Office Protocol 3). O IMAP mantém as mensagens sincronizadas no servidor.",
      alternativas: [
        { letra: "A", texto: "SMTP.", correta: false, explicacao_especifica: "Protocolo de envio (transporte) de e-mails." },
        { letra: "B", texto: "IMAP.", correta: false, explicacao_especifica: "Acesso síncrono mantendo cópia das mensagens no servidor remoto." },
        { letra: "C", texto: "POP3.", correta: true, explicacao_especifica: "Baixa as mensagens para a máquina local com remoção padrão no servidor." },
        { letra: "D", texto: "HTTP.", correta: false, explicacao_especifica: "Protocolo web genérico." },
        { letra: "E", texto: "FTP.", correta: false, explicacao_especifica: "Transferência de arquivos em geral." }
      ]
    },

    // 19-24: Sistemas Operacionais (Linux e Windows)
    {
      idSlug: "info-19",
      disciplina_id: dId,
      assunto_id: ass.sistemas_operacionais,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "No sistema operacional Linux, o comando 'chmod 755 arquivo.sh' concede permissão de leitura, escrita e execução para o proprietário, e apenas permissões de leitura e execução para o grupo e outros usuários.",
      explicacao: "GABARITO: CERTO. Notação octal: 7 = 4(r) + 2(w) + 1(x) [rwx]; 5 = 4(r) + 0 + 1(x) [r-x]. Logo: dono=rwx, grupo=r-x, outros=r-x.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Cálculo exato das permissões em octal no padrão POSIX/Linux." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. O valor octal 755 atribui rwx ao dono e r-x aos demais." }
      ]
    },
    {
      idSlug: "info-20",
      disciplina_id: dId,
      assunto_id: ass.sistemas_operacionais,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "No terminal do sistema operacional Linux, o comando utilizado para buscar linhas de texto que correspondam a um padrão de expressão regular dentro de um arquivo é o:",
      explicacao: "GABARITO: grep (Global Regular Expression Print).",
      alternativas: [
        { letra: "A", texto: "find", correta: false, explicacao_especifica: "Busca arquivos e pastas na hierarquia de diretórios." },
        { letra: "B", texto: "grep", correta: true, explicacao_especifica: "Filtra e busca ocorrências de texto via expressões regulares dentro de arquivos." },
        { letra: "C", texto: "ls", correta: false, explicacao_especifica: "Lista conteúdo de diretórios." },
        { letra: "D", texto: "chmod", correta: false, explicacao_especifica: "Altera permissões de acesso a arquivos." },
        { letra: "E", texto: "cat", correta: false, explicacao_especifica: "Concatena e exibe o conteúdo integral de arquivos." }
      ]
    },
    {
      idSlug: "info-21",
      disciplina_id: dId,
      assunto_id: ass.sistemas_operacionais,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Rodoviária Federal (PRF)",
      cargo_nome: "Policial Rodoviário Federal",
      ano: 2023,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "No Windows 11, o BitLocker é uma ferramenta nativa de segurança corporativa que provê criptografia de disco inteiro, protegendo os dados armazenados contra acesso não autorizado em caso de perda ou furto do equipamento.",
      explicacao: "GABARITO: CERTO. BitLocker criptografa volumes inteiros no Windows (frequentemente integrado com chip TPM).",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Funcionalidade nativa de criptografia de partição do Microsoft Windows." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. O BitLocker é a ferramenta oficial de Full Disk Encryption do Windows." }
      ]
    },
    {
      idSlug: "info-22",
      disciplina_id: dId,
      assunto_id: ass.sistemas_operacionais,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Investigador Policial",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "No Linux, o diretório da hierarquia do sistema de arquivos onde residem os arquivos de configuração do sistema e de serviços essenciais é o:",
      explicacao: "GABARITO: /etc. O diretório /etc armazena arquivos de configuração estáticos do sistema e softwares.",
      alternativas: [
        { letra: "A", texto: "/bin", correta: false, explicacao_especifica: "Armazena binários executáveis essenciais do sistema." },
        { letra: "B", texto: "/etc", correta: true, explicacao_especifica: "Diretório padrão de arquivos de configuração no padrão FHS Linux." },
        { letra: "C", texto: "/home", correta: false, explicacao_especifica: "Diretório de pastas pessoais dos usuários comuns." },
        { letra: "D", texto: "/var", correta: false, explicacao_especifica: "Armazena dados variáveis como logs e spoolers." },
        { letra: "E", texto: "/tmp", correta: false, explicacao_especifica: "Diretório para armazenamento de arquivos temporários." }
      ]
    },
    {
      idSlug: "info-23",
      disciplina_id: dId,
      assunto_id: ass.sistemas_operacionais,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Escrivão de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "facil",
      enunciado: "Ao contrário do sistema Windows, o sistema de arquivos Linux é sensível a letras maiúsculas e minúsculas (case-sensitive), permitindo que 'relatorio.txt' e 'Relatorio.TXT' existam como dois arquivos distintos no mesmo diretório.",
      explicacao: "GABARITO: CERTO. Sistemas Linux (ext4, etc.) diferenciam maiúsculas e minúsculas no nome de arquivos.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Propriedade nativa de sensibilidade a caixa (case-sensitive) do Linux." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. O Linux diferencia estritamente maiúsculas e minúsculas." }
      ]
    },
    {
      idSlug: "info-24",
      disciplina_id: dId,
      assunto_id: ass.sistemas_operacionais,
      banca_nome: "IBFC",
      orgao_nome: "Polícia Penal de Minas Gerais",
      cargo_nome: "Policial Penal",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "No ambiente Microsoft Windows, o atalho de teclado padrão utilizado para alternar rapidamente entre janelas e aplicativos abertos é:",
      explicacao: "GABARITO: Alt + Tab. Atalho clássico de alternância entre tarefas no Windows.",
      alternativas: [
        { letra: "A", texto: "Ctrl + Shift + Esc", correta: false, explicacao_especifica: "Abre o Gerenciador de Tarefas diretamente." },
        { letra: "B", texto: "Alt + Tab", correta: true, explicacao_especifica: "Alterna janelas ativas em execução." },
        { letra: "C", texto: "Windows + L", correta: false, explicacao_especifica: "Bloqueia a sessão do computador." },
        { letra: "D", texto: "Ctrl + Alt + Del", correta: false, explicacao_especifica: "Abre a tela de opções de segurança do sistema." },
        { letra: "E", texto: "Windows + D", correta: false, explicacao_especifica: "Mostra ou oculta a Área de Trabalho." }
      ]
    },

    // 25-30: Bancos de Dados e Big Data
    {
      idSlug: "info-25",
      disciplina_id: dId,
      assunto_id: ass.bancos_dados,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Perito Criminal Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "Em bancos de dados relacionais, o comando SQL 'SELECT DISTINCT departamento FROM policiais' retorna uma lista dos departamentos eliminando linhas duplicadas do conjunto de resultados.",
      explicacao: "GABARITO: CERTO. A cláusula DISTINCT na instrução SELECT suprime registros duplicados da projeção.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Sintaxe e comportamento padrão ANSI SQL para eliminação de duplicidades." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A cláusula DISTINCT tem exatamente a função de retornar apenas valores únicos." }
      ]
    },
    {
      idSlug: "info-26",
      disciplina_id: dId,
      assunto_id: ass.bancos_dados,
      banca_nome: "FGV",
      orgao_nome: "Polícia Civil do Estado do Rio de Janeiro (PC-RJ)",
      cargo_nome: "Perito Criminal",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Em um banco de dados relacional, o conceito que garante que o valor de uma chave estrangeira em uma tabela deve corresponder a uma chave primária existente em outra tabela é chamado de integridade:",
      explicacao: "GABARITO: Referencial. A integridade referencial preserva a consistência de relacionamentos entre tabelas via chaves estrangeiras.",
      alternativas: [
        { letra: "A", texto: "De domínio.", correta: false, explicacao_especifica: "Restringe os valores aceitos por uma coluna (tipo, faixa)." },
        { letra: "B", texto: "Referencial.", correta: true, explicacao_especifica: "Garante vínculos válidos entre chaves primárias e estrangeiras." },
        { letra: "C", texto: "De entidade.", correta: false, explicacao_especifica: "Determina que chaves primárias não podem ser nulas nem duplicadas." },
        { letra: "D", texto: "Semântica.", correta: false, explicacao_especifica: "Regras de negócio personalizadas." },
        { letra: "E", texto: "Transacional.", correta: false, explicacao_especifica: "Conceito ligado a propriedades ACID." }
      ]
    },
    {
      idSlug: "info-27",
      disciplina_id: dId,
      assunto_id: ass.bancos_dados,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Agente de Polícia Federal",
      ano: 2024,
      tipo: "certo_errado",
      dificuldade: "medio",
      enunciado: "Os bancos de dados NoSQL são caracterizados por sua flexibilidade de esquema e escalabilidade horizontal, sendo adequados para grandes volumes de dados não estruturados ou semiestruturados no contexto de Big Data.",
      explicacao: "GABARITO: CERTO. NoSQL (orientados a documentos, chave-valor, grafos ou colunas) oferecem schema-free e alta escalabilidade horizontal.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Características basilares dos bancos NoSQL em soluções de Big Data." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A ausência de esquema rígido e escalabilidade são pontos fortes dos SGBDs NoSQL." }
      ]
    },
    {
      idSlug: "info-28",
      disciplina_id: dId,
      assunto_id: ass.bancos_dados,
      banca_nome: "VUNESP",
      orgao_nome: "Polícia Civil de São Paulo (PC-SP)",
      cargo_nome: "Investigador de Polícia",
      ano: 2024,
      tipo: "multipla_escolha",
      dificuldade: "medio",
      enunciado: "Em linguagem SQL, qual comando da Linguagem de Manipulação de Dados (DML) é utilizado para alterar dados existentes em uma tabela?",
      explicacao: "GABARITO: UPDATE. Comandos DML: SELECT, INSERT, UPDATE, DELETE.",
      alternativas: [
        { letra: "A", texto: "ALTER TABLE", correta: false, explicacao_especifica: "Comando DDL para alterar a estrutura de colunas da tabela." },
        { letra: "B", texto: "UPDATE", correta: true, explicacao_especifica: "Comando DML para atualizar valores de registros existentes." },
        { letra: "C", texto: "MODIFY", correta: false, explicacao_especifica: "Cláusula usada dentro do ALTER TABLE." },
        { letra: "D", texto: "SET DATA", correta: false, explicacao_especifica: "Comando inexistente na norma SQL." },
        { letra: "E", texto: "CHANGE", correta: false, explicacao_especifica: "Comando DDL específico de alguns SGBDs." }
      ]
    },
    {
      idSlug: "info-29",
      disciplina_id: dId,
      assunto_id: ass.bancos_dados,
      banca_nome: "CEBRASPE (CESPE)",
      orgao_nome: "Polícia Federal (PF)",
      cargo_nome: "Papiloscopista Policial Federal",
      ano: 2023,
      tipo: "certo_errado",
      dificuldade: "dificil",
      enunciado: "As propriedades ACID de uma transação em banco de dados relacional compreendem: Atomicidade (tudo ou nada), Consistência (preservação das regras de integridade), Isolamento (execução concorrente sem interferência) e Durabilidade (persistência das alterações confirmadas).",
      explicacao: "GABARITO: CERTO. Definição formal das propriedades ACID de transações relacionais.",
      alternativas: [
        { texto: "Certo", correta: true, explicacao_especifica: "Significado conceitual exato da sigla ACID." },
        { texto: "Errado", correta: false, explicacao_especifica: "Incorreto. A definição abrange com rigor os quatro princípios ACID." }
      ]
    },
    {
      idSlug: "info-30",
      disciplina_id: dId,
      assunto_id: ass.bancos_dados,
      banca_nome: "INSTITUTO AOCP",
      orgao_nome: "Polícia Civil de Goiás (PC-GO)",
      cargo_nome: "Agente de Polícia",
      ano: 2023,
      tipo: "multipla_escolha",
      dificuldade: "facil",
      enunciado: "No contexto dos 'Vs' fundamentais que definem o conceito de Big Data na tecnologia da informação, os três atributos clássicos são:",
      explicacao: "GABARITO: Volume, Velocidade e Variedade (aos quais posteriormente se somaram Veracidade e Valor).",
      alternativas: [
        { letra: "A", texto: "Volume, Velocidade e Variedade.", correta: true, explicacao_especifica: "Os 3 'Vs' originais que caracterizam Big Data." },
        { letra: "B", texto: "Visibilidade, Vetorização e Validação.", correta: false, explicacao_especifica: "Termos não relacionados à tríade de Big Data." },
        { letra: "C", texto: "Virtualização, Versatilidade e Vulnerabilidade.", correta: false, explicacao_especifica: "Conceitos de infraestrutura e segurança." },
        { letra: "D", texto: "Vigilância, Variação e Verificação.", correta: false, explicacao_especifica: "Termos desconexos da literatura clássica de Big Data." },
        { letra: "E", texto: "Vínculo, Volatilidade e Visão.", correta: false, explicacao_especifica: "Classificação incorreta." }
      ]
    }
  ];

  const outputPath = path.resolve(process.cwd(), "scripts/batch1_modules/informatica.mjs");
  fs.writeFileSync(outputPath, `export const infoQuestions = ${JSON.stringify(raw, null, 2)};\n`, "utf8");
  console.log(`[+] Informática gerada com ${raw.length} questões.`);
  return raw;
}

generateInfoQuestions();
