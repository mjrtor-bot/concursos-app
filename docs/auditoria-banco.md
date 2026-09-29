# Auditoria do banco de questões

Data: 29/09/2026  
Escopo: banco Supabase de produção.

## Resultado após saneamento

- Questões cadastradas: **7.760**
- Questões autorais/IA: **7.760**
- Questões inicialmente sinalizadas: **740**
- Questões ativas com auditoria `ok`: **7.040**
- Questões desativadas logicamente como `irrecuperavel`: **720**
- Registros apagados: **0**

## Tratamento executado

### Conteúdo de controle/provisório

Foram classificadas como `irrecuperavel` **460 questões** contendo sinais inequívocos de geração/provisionamento, incluindo:

- `Identificador de controle`
- `Narrativa de controle`
- `Ato N`
- `dupla Bravo`
- `posto N`

Amostras mostraram trechos artificiais como registros, protocolos, postos, equipes e identificadores inseridos sem função acadêmica no enunciado. Os registros foram apenas desativados; não foram excluídos, preservando histórico e chaves estrangeiras.

### Questões "[Caso Prático Concurso - Variação N]"

Foram encontradas **280 questões** desse grupo. A análise confirmou:

- apenas **20 enunciados-base distintos** após remover o prefixo de variação;
- dentro de cada enunciado-base, as alternativas e o gabarito eram idênticos;
- portanto havia **260 duplicatas**;
- nenhuma das 260 duplicatas escolhidas para desativação possuía referência em respostas, caderno de erros, favoritos, anotações ou diagnóstico;
- quando havia referência, o algoritmo priorizou a questão referenciada como registro canônico.

Ações:

1. o prefixo artificial `[Caso Prático Concurso - Variação N]` foi removido;
2. **20 questões canônicas** foram preservadas com `auditoria_status = 'ok'`;
3. **260 cópias** foram marcadas como `irrecuperavel`;
4. nenhum registro foi apagado.

## Situação final

| Status | Quantidade |
|---|---:|
| ok | 7.040 |
| irrecuperavel | 720 |
| **Total** | **7.760** |

A API e o serviço da mentoria já possuem filtro para impedir que questões `irrecuperavel` sejam selecionadas para novos estudos.

## Procedência

O banco permanece composto por questões autorais/IA. Campos históricos de banca, órgão, cargo e ano não devem ser apresentados como procedência de prova oficial. A interface deve identificar esse conteúdo como questão autoral e, quando aplicável, apenas indicar o **estilo da banca**.

## Integridade

O saneamento foi deliberadamente não destrutivo:

- nenhuma questão foi excluída;
- respostas históricas foram preservadas;
- referências de usuários não foram remapeadas nem apagadas;
- duplicatas foram desativadas somente após verificar que as cópias escolhidas não possuíam referências;
- o conteúdo recuperável foi mantido.

## Pendência de qualidade

A classificação acima resolve os padrões objetivos de conteúdo provisório e duplicação. Ainda é necessária auditoria semântica separada para detectar questões cujo assunto esteja incorreto em relação ao enunciado, sem depender apenas de palavras-chave. Exemplos originalmente apontados: conjuntos em Equivalências Lógicas, Lei de Drogas em Lavagem e crimes hediondos em Organizações Criminosas.
