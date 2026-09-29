# Auditoria inicial do banco de questões

Data: 29/09/2026  
Escopo: leitura do banco Supabase de produção. Nenhuma questão foi alterada, apagada ou desativada nesta passagem.

## Resultado executivo

A auditoria confirmou o bloqueador descrito na revisão funcional:

- Questões cadastradas: **7.760**
- Marcadas como autorais/IA (`is_autoral_ia = true`): **7.760 (100%)**
- Vinculadas a uma prova oficial (`prova_id IS NOT NULL`): **0**
- Questões sinalizadas por pelo menos um padrão textual de enchimento ou gabarito estrutural inválido: **740**
- Questões de múltipla escolha com número de alternativas corretas diferente de 1: **0**

> Importante: 740 é a união dos sinais abaixo. Uma mesma questão pode conter mais de um padrão, portanto as contagens por padrão não devem ser somadas.

## Sinais encontrados

| Sinal | Ocorrências |
|---|---:|
| "Identificador de controle" | 450 |
| "[Caso Prático Concurso - Variação N]" | 280 |
| "Narrativa de controle" | 54 |
| "Ato N" | 54 |
| "dupla Bravo" | 47 |
| "posto N" | 47 |
| Gabarito estrutural inválido | 0 |

## Amostras confirmadas

- `c51d0144-2982-52d3-a8f9-8ed693e268ae` — Direito Administrativo / Princípios da Administração Pública — contém "[Caso Prático Concurso - Variação 6]".
- `80f6f14a-6f9a-512d-878c-640c6ceb320e` — mesma taxonomia — "[Caso Prático Concurso - Variação 3]".
- `f9db3b7e-f39b-5fe8-ad91-a8db2c004e74` — aparece como FCC / BB / Agente de Polícia Federal, apesar de o banco marcar todas as questões como autorais/IA.
- `b9c47f36-4f94-5ed7-86fe-d98e780d0c4f` — aparece como Selecon / PRF / Escriturário, combinação que exige saneamento de metadados.

## Assuntos com maior volume de questões sinalizadas

| Disciplina / assunto | Total | Sinalizadas |
|---|---:|---:|
| Informática — Segurança da Informação, Criptografia e Malware | 144 | 30 |
| Direito Penal — Crimes Contra a Administração Pública | 208 | 28 |
| RLM — Lógica Proposicional e Conectivos | 117 | 28 |
| Processo Penal — Inquérito Policial | 195 | 27 |
| RLM — Equivalências Lógicas e Negação | 98 | 27 |
| Direito Penal — Teoria do Crime | 227 | 26 |
| Criminologia — Escolas Criminológicas | 200 | 25 |
| Direito Administrativo — Atos Administrativos | 143 | 25 |
| Direitos Humanos — DUDH | 128 | 25 |

Há ainda assuntos pequenos em que **19 de 20** questões foram sinalizadas, incluindo Administração Pública, Contabilidade, Direito Previdenciário, Direito Tributário e Ética.

## Conclusões confirmadas

1. O banco atual não contém questão vinculada a prova oficial.
2. Os campos de banca, órgão, cargo e ano não podem ser apresentados ao aluno como procedência oficial nas 7.760 questões.
3. Existem 740 questões com sinais textuais objetivos que justificam revisão antes de uso em produção.
4. O gabarito estrutural das questões de múltipla escolha passou no teste básico de exatamente uma alternativa correta.
5. Esta auditoria **não** considera uma classificação temática errada apenas por palavras-chave. Casos como Lei de Drogas/Lavagem, conjuntos/equivalências e hediondos/organizações criminosas precisam de revisão semântica separada para evitar correção automática indevida.

## Próxima ação segura

Antes de desativar qualquer registro:

1. criar classificação de auditoria persistente (OK / suspeita / irrecuperável) com motivo;
2. garantir que a UI apresente questões autorais como "Questão autoral · Estilo <banca>", sem órgão/ano/cargo simulando prova oficial;
3. revisar as 740 sinalizadas e desativar apenas as inequivocamente artificiais;
4. executar auditoria semântica por assunto em lote controlado;
5. revalidar Dashboard, Missão Diária e Caderno de Erros.

Nenhum dado de produção foi modificado nesta primeira passagem.
