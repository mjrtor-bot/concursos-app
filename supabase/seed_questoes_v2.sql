-- ==============================================================================
-- SEED RELACIONAL EXPANDIDO - BANCO DE QUESTÕES V2
-- Gerado em 2026-09-24. Conteúdo autoral de demonstração/treino; não copia bases privadas.
-- Objetivo: popular Supabase com taxonomia 3FN, bancas, órgãos, cargos, provas e questões.
-- ==============================================================================

BEGIN;

-- 1. Disciplinas
INSERT INTO public.disciplinas (id, nome, slug, descricao, icone, cor, ordem) VALUES
  ('disc-portugues', 'Língua Portuguesa', 'lingua-portuguesa', 'Interpretação de textos, gramática, concordância, regência, crase e pontuação.', 'BookOpen', '#3b82f6', 1),
  ('disc-direito-constitucional', 'Direito Constitucional', 'direito-constitucional', 'Direitos fundamentais, organização do Estado, Poderes e controle de constitucionalidade.', 'Scale', '#8b5cf6', 2),
  ('disc-direito-administrativo', 'Direito Administrativo', 'direito-administrativo', 'Princípios, atos administrativos, Lei 14.133/21, poderes e responsabilidade civil.', 'Building2', '#ec4899', 3),
  ('disc-rlm', 'Raciocínio Lógico-Matemático', 'raciocinio-logico', 'Lógica proposicional, equivalências, diagramas lógicos, análise combinatória e probabilidade.', 'BrainCircuit', '#10b981', 4),
  ('disc-informatica', 'Informática e Tecnologia', 'informatica-ti', 'Segurança da informação, redes, computação em nuvem, bancos de dados e sistemas operacionais.', 'Laptop', '#06b6d4', 5),
  ('disc-direito-penal', 'Direito Penal', 'direito-penal', 'Teoria do crime, tipicidade, culpabilidade e crimes contra a Administração Pública.', 'ShieldAlert', '#f59e0b', 6),
  ('disc-direito-processual-penal', 'Direito Processual Penal', 'direito-processual-penal', 'Inquérito policial, ação penal, provas, prisões cautelares e competência.', 'FileCheck2', '#e11d48', 7),
  ('disc-contabilidade', 'Contabilidade Geral e Pública', 'contabilidade', 'Balanço patrimonial, DRE, lançamentos contábeis, regimes contábeis e CASP.', 'Calculator', '#14b8a6', 8),
  ('disc-etica', 'Ética no Serviço Público', 'etica-servico-publico', 'Decreto nº 1.171/1994, Lei 8.112/90, deveres e vedações dos agentes públicos.', 'Users', '#84cc16', 9),
  ('disc-direito-previdenciario', 'Direito Previdenciário', 'direito-previdenciario', 'Seguridade social, segurados do RGPS, benefícios em espécie e custeio.', 'HeartHandshake', '#6366f1', 10),
  ('disc-direito-tributario', 'Direito Tributário', 'direito-tributario', 'Sistema Tributário Nacional, competências, limitações ao poder de tributar e CTN.', 'Coins', '#f97316', 11),
  ('disc-administracao-publica', 'Administração Geral e Pública', 'administracao-publica', 'Gestão por processos, governança pública, planejamento estratégico e orçamento público.', 'Briefcase', '#0ea5e9', 12)
ON CONFLICT (slug) DO UPDATE SET nome = EXCLUDED.nome, descricao = EXCLUDED.descricao, icone = EXCLUDED.icone, cor = EXCLUDED.cor, ordem = EXCLUDED.ordem;

-- 2. Assuntos
INSERT INTO public.assuntos (id, disciplina_id, nome, slug, ordem) VALUES
  ('ass-sintaxe', 'disc-portugues', 'Sintaxe do Período e Orações', 'sintaxe-periodo', 1),
  ('ass-concordancia', 'disc-portugues', 'Concordância Verbal e Nominal', 'concordancia', 2),
  ('ass-regencia-crase', 'disc-portugues', 'Regência e Crase', 'regencia-crase', 3),
  ('ass-interpretacao', 'disc-portugues', 'Interpretação e Tipologia Textual', 'interpretacao-texto', 4),
  ('ass-pontuacao', 'disc-portugues', 'Pontuação e Emprego dos Sinais', 'pontuacao', 5),
  ('ass-direitos-fundamentais', 'disc-direito-constitucional', 'Direitos e Deveres Individuais e Coletivos (Art. 5º)', 'artigo-5-cf', 1),
  ('ass-organizacao-estado', 'disc-direito-constitucional', 'Organização Político-Administrativa do Estado', 'organizacao-estado', 2),
  ('ass-poder-executivo', 'disc-direito-constitucional', 'Poder Executivo e Presidência da República', 'poder-executivo', 3),
  ('ass-controle-constitucionalidade', 'disc-direito-constitucional', 'Controle de Constitucionalidade', 'controle-constitucionalidade', 4),
  ('ass-seguranca-publica', 'disc-direito-constitucional', 'Segurança Pública (Art. 144)', 'seguranca-publica', 5),
  ('ass-principios-adm', 'disc-direito-administrativo', 'Princípios da Administração Pública (LIMPE e Implícitos)', 'principios-administracao', 1),
  ('ass-atos-administrativos', 'disc-direito-administrativo', 'Atos Administrativos: Elementos, Atributos e Extinção', 'atos-administrativos', 2),
  ('ass-licitacoes-14133', 'disc-direito-administrativo', 'Licitações e Contratos (Nova Lei 14.133/2021)', 'licitacoes-14133', 3),
  ('ass-agentes-publicos', 'disc-direito-administrativo', 'Agentes Públicos e Regime Jurídico (Lei 8.112/90)', 'agentes-publicos-8112', 4),
  ('ass-improbidade', 'disc-direito-administrativo', 'Improbidade Administrativa (Lei 8.429/92 alterada)', 'improbidade-administrativa', 5),
  ('ass-proposicoes-logicas', 'disc-rlm', 'Lógica Proposicional e Conectivos', 'logica-proposicional', 1),
  ('ass-equivalencias-negacoes', 'disc-rlm', 'Equivalências Lógicas e Negação de Proposições', 'equivalencias-negacoes', 2),
  ('ass-analise-combinatoria', 'disc-rlm', 'Análise Combinatória e Princípio da Contagem', 'analise-combinatoria', 3),
  ('ass-probabilidade', 'disc-rlm', 'Probabilidade e Estatística Básica', 'probabilidade', 4),
  ('ass-seguranca-info', 'disc-informatica', 'Segurança da Informação, Criptografia e Malware', 'seguranca-informacao', 1),
  ('ass-redes-internet', 'disc-informatica', 'Redes de Computadores, Protocolos e Nuvem', 'redes-nuvem', 2),
  ('ass-bancos-dados', 'disc-informatica', 'Bancos de Dados Relacionais e SQL', 'bancos-dados-sql', 3),
  ('ass-crimes-adm-pub', 'disc-direito-penal', 'Crimes Praticados por Funcionário Público contra a Adm.', 'crimes-funcionario-publico', 1),
  ('ass-teoria-crime', 'disc-direito-penal', 'Teoria do Crime: Ilicitude e Culpabilidade', 'teoria-crime', 2),
  ('ass-inquerito-policial', 'disc-direito-processual-penal', 'Inquérito Policial: Características e Instauração', 'inquerito-policial', 1),
  ('ass-provas-processo', 'disc-direito-processual-penal', 'Provas no Processo Penal e Cadeia de Custódia', 'provas-processo-penal', 2),
  ('ass-decreto-1171', 'disc-etica', 'Código de Ética Profissional do Servidor Civil (Dec. 1.171/94)', 'decreto-1171-94', 1),
  ('ass-beneficios-rgps', 'disc-direito-previdenciario', 'Benefícios Previdenciários do RGPS', 'beneficios-rgps', 1)
ON CONFLICT (disciplina_id, slug) DO UPDATE SET nome = EXCLUDED.nome, ordem = EXCLUDED.ordem;

-- 3. Bancas
INSERT INTO public.bancas (id, nome, sigla, site_oficial) VALUES
  ('banca-cebraspe', 'Cebraspe (Centro Brasileiro de Pesquisa em Avaliação e Seleção e de Promoção de Eventos)', 'Cebraspe', 'https://www.cebraspe.org.br'),
  ('banca-fgv', 'Fundação Getulio Vargas', 'FGV', 'https://conhecimento.fgv.br/concursos'),
  ('banca-fcc', 'Fundação Carlos Chagas', 'FCC', 'https://www.concursosfcc.com.br'),
  ('banca-cesgranrio', 'Fundação Cesgranrio', 'Cesgranrio', 'https://www.cesgranrio.org.br'),
  ('banca-vunesp', 'Fundação Vunesp', 'Vunesp', 'https://www.vunesp.com.br'),
  ('banca-ibfc', 'Instituto Brasileiro de Formação e Capacitação', 'IBFC', 'https://www.ibfc.org.br'),
  ('banca-quadrix', 'Instituto Quadrix', 'Quadrix', 'https://www.quadrix.org.br')
ON CONFLICT (sigla) DO UPDATE SET nome = EXCLUDED.nome, site_oficial = EXCLUDED.site_oficial;

-- 4. Órgãos
INSERT INTO public.orgaos (id, nome, sigla, esfera, uf) VALUES
  ('orgao-cnu-mgi', 'Ministério da Gestão e da Inovação em Serviços Públicos (CNU)', 'MGI / CNU', 'federal', NULL),
  ('orgao-receita-federal', 'Secretaria Especial da Receita Federal do Brasil', 'RFB', 'federal', NULL),
  ('orgao-pf', 'Departamento de Polícia Federal', 'PF', 'federal', NULL),
  ('orgao-prf', 'Polícia Rodoviária Federal', 'PRF', 'federal', NULL),
  ('orgao-tjsp', 'Tribunal de Justiça do Estado de São Paulo', 'TJ-SP', 'estadual', 'SP'),
  ('orgao-tcu', 'Tribunal de Contas da União', 'TCU', 'federal', NULL),
  ('orgao-inss', 'Instituto Nacional do Seguro Social', 'INSS', 'federal', NULL),
  ('orgao-banco-brasil', 'Banco do Brasil S.A.', 'BB', 'federal', NULL),
  ('orgao-caixa', 'Caixa Econômica Federal', 'CEF', 'federal', NULL)
ON CONFLICT (sigla, uf) DO UPDATE SET nome = EXCLUDED.nome, esfera = EXCLUDED.esfera;

-- 5. Cargos-base
INSERT INTO public.cargos_base (id, nome, nivel_escolaridade, area_atuacao) VALUES
  ('cargo-auditor-fiscal', 'Auditor-Fiscal da Receita Federal', 'superior', 'Fiscal e Tributária'),
  ('cargo-analista-adm', 'Analista em Gestão Pública / EPPGG', 'superior', 'Gestão e Políticas Públicas'),
  ('cargo-agente-pf', 'Agente de Polícia Federal', 'superior', 'Policial e Segurança Pública'),
  ('cargo-escrivao-pf', 'Escrivão de Polícia Federal', 'superior', 'Policial e Procedimentos'),
  ('cargo-prf-policial', 'Policial Rodoviário Federal', 'superior', 'Policial e Trânsito'),
  ('cargo-tjsp-escrevente', 'Escrevente Técnico Judiciário', 'medio', 'Judiciária e Administrativa'),
  ('cargo-inss-tecnico', 'Técnico do Seguro Social', 'medio', 'Previdenciária'),
  ('cargo-ti-analista', 'Analista de Tecnologia da Informação', 'superior', 'Tecnologia da Informação'),
  ('cargo-escriturario-bb', 'Escriturário / Agente Comercial', 'medio', 'Bancária')
ON CONFLICT (nome) DO UPDATE SET nivel_escolaridade = EXCLUDED.nivel_escolaridade, area_atuacao = EXCLUDED.area_atuacao;

-- 6. Provas
INSERT INTO public.provas (id, banca_id, orgao_id, cargo_base_id, ano, nome_concurso, caderno_tipo, edital_numero, data_aplicacao) VALUES
  ('prova-cnu-2024-bloco8', 'banca-cesgranrio', 'orgao-cnu-mgi', 'cargo-analista-adm', 2024, 'Concurso Público Nacional Unificado - Bloco 8', 'Geral', '08/2024', '2024-08-18'),
  ('prova-rfb-2023-auditor', 'banca-fgv', 'orgao-receita-federal', 'cargo-auditor-fiscal', 2023, 'Concurso Público para Auditor-Fiscal da Receita Federal', 'Tipo 1 - Branca', '01/2022', '2023-03-19'),
  ('prova-pf-2021-agente', 'banca-cebraspe', 'orgao-pf', 'cargo-agente-pf', 2021, 'Concurso Público para Agente de Polícia Federal', 'Único', '01/2021', '2021-05-23'),
  ('prova-prf-2021-policial', 'banca-cebraspe', 'orgao-prf', 'cargo-prf-policial', 2021, 'Concurso Público para Policial Rodoviário Federal', 'Único', '01/2021', '2021-05-09'),
  ('prova-tjsp-2024-escrevente', 'banca-vunesp', 'orgao-tjsp', 'cargo-tjsp-escrevente', 2024, 'Concurso TJ-SP Escrevente Técnico Judiciário', 'Versão 1', '01/2024', '2024-09-08'),
  ('prova-inss-2022-tecnico', 'banca-cebraspe', 'orgao-inss', 'cargo-inss-tecnico', 2022, 'Concurso Público INSS Técnico do Seguro Social', 'Único', '01/2022', '2022-11-27')
ON CONFLICT (id) DO UPDATE SET nome_concurso = EXCLUDED.nome_concurso, caderno_tipo = EXCLUDED.caderno_tipo;

-- 7. Questões
INSERT INTO public.questoes (id, disciplina_id, assunto_id, prova_id, banca_id, orgao_id, cargo_id, banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade, enunciado, explicacao, is_autoral_ia, modelo_ia, prompt_versao, revisada_por_especialista, anulada, desatualizada, fingerprint_hash) VALUES
  ('seed-q-001', 'disc-portugues', 'ass-sintaxe', 'prova-cnu-2024-bloco8', 'banca-cesgranrio', 'orgao-cnu-mgi', 'cargo-analista-adm', 'Cesgranrio', 'MGI / CNU', 'Analista em Gestão Pública / EPPGG', 2024, 'multipla_escolha', 'dificil', 'No período ''Embora houvesse previsão orçamentária, a despesa somente foi empenhada após autorização formal da autoridade competente'', a oração introduzida por ''Embora'' expressa circunstância de:', 'A conjunção ''embora'' introduz oração subordinada adverbial concessiva, pois indica fato que não impede a ocorrência da oração principal.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '3e0a19822de349378358c2b6247cfbee32382471b843c2f06f131339a6eab394'),
  ('seed-q-002', 'disc-portugues', 'ass-concordancia', 'prova-tjsp-2024-escrevente', 'banca-vunesp', 'orgao-tjsp', 'cargo-tjsp-escrevente', 'Vunesp', 'TJ-SP', 'Escrevente Técnico Judiciário', 2024, 'multipla_escolha', 'medio', 'Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.', 'O verbo ''fazer'', quando indica tempo decorrido, é impessoal e fica na 3ª pessoa do singular: ''Faz dois anos''.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, 'f23f4524eafa7c928b4e907395c30f78050a40a6d35154a996ae12ba39963dcd'),
  ('seed-q-003', 'disc-portugues', 'ass-regencia-crase', 'prova-rfb-2023-auditor', 'banca-fgv', 'orgao-receita-federal', 'cargo-auditor-fiscal', 'FGV', 'RFB', 'Auditor-Fiscal da Receita Federal', 2023, 'multipla_escolha', 'medio', 'Na frase ''O auditor referiu-se ___ normas de conformidade aplicáveis ___ empresas exportadoras'', as lacunas devem ser preenchidas por:', 'O verbo ''referir-se'' exige preposição ''a'', e os substantivos femininos plurais admitem artigo definido: ''às normas'' e ''às empresas''.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '22ef73229c29b4584045ad5970254749bc8e45636a05fa733c9af313a93cc861'),
  ('seed-q-004', 'disc-portugues', 'ass-interpretacao', 'prova-cnu-2024-bloco8', 'banca-cesgranrio', 'orgao-cnu-mgi', 'cargo-analista-adm', 'Cesgranrio', 'MGI / CNU', 'Analista em Gestão Pública / EPPGG', 2024, 'multipla_escolha', 'facil', 'Em textos administrativos, a impessoalidade contribui principalmente para:', 'A impessoalidade é princípio da redação oficial e reduz subjetivismos, fortalecendo objetividade, isonomia e foco institucional.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, 'bbeda246296faa75464e3b76d564539e018421d76c0833025888c3a9f3f21214'),
  ('seed-q-005', 'disc-direito-constitucional', 'ass-direitos-fundamentais', 'prova-pf-2021-agente', 'banca-cebraspe', 'orgao-pf', 'cargo-agente-pf', 'Cebraspe', 'PF', 'Agente de Polícia Federal', 2021, 'certo_errado', 'medio', 'A casa é asilo inviolável do indivíduo, podendo nela penetrar alguém, sem consentimento do morador, em caso de flagrante delito, desastre ou para prestar socorro.', 'A assertiva reproduz hipóteses constitucionais do art. 5º, XI, da Constituição Federal.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, 'd82028298960c63fa07bdb1f7127a71dcbeb3dd725883c2d774d2f0860f70d97'),
  ('seed-q-006', 'disc-direito-constitucional', 'ass-organizacao-estado', 'prova-cnu-2024-bloco8', 'banca-cesgranrio', 'orgao-cnu-mgi', 'cargo-analista-adm', 'Cesgranrio', 'MGI / CNU', 'Analista em Gestão Pública / EPPGG', 2024, 'multipla_escolha', 'dificil', 'Segundo a Constituição Federal, a organização político-administrativa da República Federativa do Brasil compreende:', 'O art. 18 da CF estabelece que União, Estados, Distrito Federal e Municípios são entes autônomos.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '7cba8d91168ba90efdf0144cb8a6049a2a595ef1f4b7ac0da189ff19a24f6f69'),
  ('seed-q-007', 'disc-direito-constitucional', 'ass-seguranca-publica', 'prova-prf-2021-policial', 'banca-cebraspe', 'orgao-prf', 'cargo-prf-policial', 'Cebraspe', 'PRF', 'Policial Rodoviário Federal', 2021, 'certo_errado', 'facil', 'A Polícia Rodoviária Federal é órgão permanente, organizado e mantido pela União, destinado, na forma da lei, ao patrulhamento ostensivo das rodovias federais.', 'A afirmação corresponde ao art. 144, §2º, da Constituição Federal.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, 'b9a75863d6140b8e180d4774b64c1c2a1875963a259e3a75c7b45454410a5577'),
  ('seed-q-008', 'disc-direito-administrativo', 'ass-principios-adm', 'prova-cnu-2024-bloco8', 'banca-cesgranrio', 'orgao-cnu-mgi', 'cargo-analista-adm', 'Cesgranrio', 'MGI / CNU', 'Analista em Gestão Pública / EPPGG', 2024, 'multipla_escolha', 'medio', 'O princípio da Administração Pública que impõe atuação conforme padrões éticos, boa-fé e lealdade institucional é o princípio da:', 'A moralidade administrativa exige conduta ética, honesta e compatível com a finalidade pública.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '539a46a8f2fc80d488bc6ab7c0bdb4063f576bfd5d8eba8c2fbd5b7781f4a832'),
  ('seed-q-009', 'disc-direito-administrativo', 'ass-atos-administrativos', 'prova-tjsp-2024-escrevente', 'banca-vunesp', 'orgao-tjsp', 'cargo-tjsp-escrevente', 'Vunesp', 'TJ-SP', 'Escrevente Técnico Judiciário', 2024, 'multipla_escolha', 'medio', 'Entre os atributos clássicos dos atos administrativos, aquele que permite à Administração executar diretamente suas decisões, sem prévia autorização judicial, quando previsto em lei, denomina-se:', 'A autoexecutoriedade autoriza execução direta de certos atos administrativos, nos limites legais e em situações admitidas pelo ordenamento.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '3634dcd9544db1aca533a15d96aaf6b57ec4bebc6c0cb39ccf06b0bbaa208a78'),
  ('seed-q-010', 'disc-direito-administrativo', 'ass-licitacoes-14133', 'prova-rfb-2023-auditor', 'banca-fgv', 'orgao-receita-federal', 'cargo-auditor-fiscal', 'FGV', 'RFB', 'Auditor-Fiscal da Receita Federal', 2023, 'multipla_escolha', 'facil', 'Nos termos da Lei nº 14.133/2021, é modalidade de licitação destinada à escolha de trabalho técnico, científico ou artístico:', 'A modalidade ''concurso'' é utilizada para escolha de trabalho técnico, científico ou artístico, mediante prêmio ou remuneração.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '837c63eaea69d8105ab653c13407b76b703f82b2e6cab32a24ed8a2146c94fd9'),
  ('seed-q-011', 'disc-direito-administrativo', 'ass-agentes-publicos', 'prova-inss-2022-tecnico', 'banca-cebraspe', 'orgao-inss', 'cargo-inss-tecnico', 'Cebraspe', 'INSS', 'Técnico do Seguro Social', 2022, 'certo_errado', 'dificil', 'A Lei nº 8.112/1990 prevê que a investidura em cargo público ocorre com a posse.', 'O art. 7º da Lei nº 8.112/1990 dispõe expressamente que a investidura em cargo público ocorrerá com a posse.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, 'e51a3faea77c862eea408efa9b05a7abccd59d105a45f613d4fbda31506d6d13'),
  ('seed-q-012', 'disc-rlm', 'ass-proposicoes-logicas', 'prova-cnu-2024-bloco8', 'banca-cesgranrio', 'orgao-cnu-mgi', 'cargo-analista-adm', 'Cesgranrio', 'MGI / CNU', 'Analista em Gestão Pública / EPPGG', 2024, 'multipla_escolha', 'medio', 'A proposição composta ''Se o edital foi publicado, então o prazo começou'' é falsa somente quando:', 'A condicional P → Q é falsa apenas no caso em que P é verdadeira e Q é falsa.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, 'bb9826ed3fdeb99e7ae6c150d703c3b9b14d60e555a6876913875ba09278da25'),
  ('seed-q-013', 'disc-rlm', 'ass-equivalencias-negacoes', 'prova-inss-2022-tecnico', 'banca-cebraspe', 'orgao-inss', 'cargo-inss-tecnico', 'Cebraspe', 'INSS', 'Técnico do Seguro Social', 2022, 'certo_errado', 'facil', 'A negação de ''todo servidor é estável'' pode ser expressa por ''existe servidor que não é estável''.', 'A negação de proposição universal afirmativa é uma proposição existencial negativa.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '5f889cc1a3945a646a558000dc9e7f85c17c00f95b9bf4fa2818b309cb25b6f4'),
  ('seed-q-014', 'disc-rlm', 'ass-analise-combinatoria', 'prova-rfb-2023-auditor', 'banca-fgv', 'orgao-receita-federal', 'cargo-auditor-fiscal', 'FGV', 'RFB', 'Auditor-Fiscal da Receita Federal', 2023, 'multipla_escolha', 'medio', 'Uma comissão de 3 servidores será formada a partir de 8 servidores distintos. O número de comissões possíveis é:', 'Como a ordem não importa, aplica-se combinação: C(8,3)=8×7×6/(3×2×1)=56.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '45b146a03b9e887a4b76f32376cc277acced98e82cd7ea9ac0787110233fbbf7'),
  ('seed-q-015', 'disc-rlm', 'ass-probabilidade', 'prova-cnu-2024-bloco8', 'banca-cesgranrio', 'orgao-cnu-mgi', 'cargo-analista-adm', 'Cesgranrio', 'MGI / CNU', 'Analista em Gestão Pública / EPPGG', 2024, 'multipla_escolha', 'medio', 'Em uma urna com 3 bolas azuis e 2 bolas vermelhas, a probabilidade de retirar uma bola vermelha em uma única retirada é:', 'Há 2 casos favoráveis em 5 casos possíveis, logo a probabilidade é 2/5.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '5fe114a647f135bf65a63ea3d986fef01ad88b9d3ff47a62881b1f7d32baafe7'),
  ('seed-q-016', 'disc-informatica', 'ass-seguranca-info', 'prova-pf-2021-agente', 'banca-cebraspe', 'orgao-pf', 'cargo-agente-pf', 'Cebraspe', 'PF', 'Agente de Polícia Federal', 2021, 'certo_errado', 'dificil', 'A autenticação multifator reduz o risco de acesso indevido, pois exige mais de um fator para confirmar a identidade do usuário.', 'A MFA combina fatores como conhecimento, posse e biometria, aumentando a resistência contra comprometimento de credenciais.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, 'f57a060e077151004f7d7dfbc9804c18c32660005e1840ef52134579a52b1030'),
  ('seed-q-017', 'disc-informatica', 'ass-redes-internet', 'prova-prf-2021-policial', 'banca-cebraspe', 'orgao-prf', 'cargo-prf-policial', 'Cebraspe', 'PRF', 'Policial Rodoviário Federal', 2021, 'certo_errado', 'medio', 'O protocolo HTTPS utiliza TLS para prover confidencialidade e integridade na comunicação entre cliente e servidor.', 'HTTPS é HTTP sobre TLS, fornecendo criptografia, integridade e autenticação do servidor por certificados digitais.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, 'f77af70a637ca8c36ef1dbb80a256c8312d7314dafb768f40bbf3cb0bd068190'),
  ('seed-q-018', 'disc-informatica', 'ass-bancos-dados', 'prova-rfb-2023-auditor', 'banca-fgv', 'orgao-receita-federal', 'cargo-ti-analista', 'FGV', 'RFB', 'Analista de Tecnologia da Informação', 2023, 'multipla_escolha', 'medio', 'Em bancos relacionais, a normalização em terceira forma normal busca principalmente:', 'A 3FN reduz redundâncias derivadas de dependências transitivas, melhorando integridade e manutenção do modelo.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, 'aa049ac277e934f7d466cd2138dc05d104e67563433a921777aefff47170690d'),
  ('seed-q-019', 'disc-direito-penal', 'ass-crimes-adm-pub', 'prova-pf-2021-agente', 'banca-cebraspe', 'orgao-pf', 'cargo-agente-pf', 'Cebraspe', 'PF', 'Agente de Polícia Federal', 2021, 'certo_errado', 'facil', 'O crime de peculato exige, como regra, que o agente seja funcionário público e se aproprie de dinheiro, valor ou bem móvel público ou particular de que tenha posse em razão do cargo.', 'O enunciado corresponde ao núcleo típico do peculato-apropriação previsto no art. 312 do Código Penal.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '284cc1e9a90c790ad10d8891227495d8ea6c66011dcdc0570f425a808ede2d7f'),
  ('seed-q-020', 'disc-direito-penal', 'ass-teoria-crime', 'prova-pf-2021-agente', 'banca-cebraspe', 'orgao-pf', 'cargo-agente-pf', 'Cebraspe', 'PF', 'Agente de Polícia Federal', 2021, 'certo_errado', 'medio', 'A legítima defesa é causa legal de exclusão da ilicitude.', 'O art. 23 do Código Penal prevê a legítima defesa como causa de exclusão da ilicitude.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '4c7374e4737cd481fcc9acdf7e34ff56cd9d5954d333d7c85deab1d0c09f4ecf'),
  ('seed-q-021', 'disc-direito-processual-penal', 'ass-inquerito-policial', 'prova-pf-2021-agente', 'banca-cebraspe', 'orgao-pf', 'cargo-escrivao-pf', 'Cebraspe', 'PF', 'Escrivão de Polícia Federal', 2021, 'certo_errado', 'dificil', 'O inquérito policial é procedimento administrativo, inquisitivo e dispensável para a propositura da ação penal quando já houver elementos suficientes de autoria e materialidade.', 'A ação penal pode ser proposta com justa causa obtida por outros meios, sendo o inquérito dispensável.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, 'feacbdabfad7d220aaa6717f5c38c0d3ad6dbe034b1a65a6a4a33b1cf209ba16'),
  ('seed-q-022', 'disc-direito-processual-penal', 'ass-provas-processo', 'prova-pf-2021-agente', 'banca-cebraspe', 'orgao-pf', 'cargo-escrivao-pf', 'Cebraspe', 'PF', 'Escrivão de Polícia Federal', 2021, 'certo_errado', 'facil', 'A cadeia de custódia compreende o conjunto de procedimentos utilizados para manter e documentar a história cronológica do vestígio coletado em locais ou vítimas de crimes.', 'A definição está alinhada ao art. 158-A do CPP, incluído pelo Pacote Anticrime.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '4bd4151a946beba7a1f7d820c57d4bc3c29c0c9a8d4803c5d7b431db0328930e'),
  ('seed-q-023', 'disc-etica', 'ass-decreto-1171', 'prova-cnu-2024-bloco8', 'banca-cesgranrio', 'orgao-cnu-mgi', 'cargo-analista-adm', 'Cesgranrio', 'MGI / CNU', 'Analista em Gestão Pública / EPPGG', 2024, 'multipla_escolha', 'medio', 'Segundo o Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal, a dignidade, o decoro, o zelo, a eficácia e a consciência dos princípios morais são:', 'O Decreto nº 1.171/1994 estabelece esses valores como primados maiores do servidor público.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '7645c51226daadaece67d2ad40ca4019013591b31f3cbc8e0cb71b4de87e3ebb'),
  ('seed-q-024', 'disc-direito-previdenciario', 'ass-beneficios-rgps', 'prova-inss-2022-tecnico', 'banca-cebraspe', 'orgao-inss', 'cargo-inss-tecnico', 'Cebraspe', 'INSS', 'Técnico do Seguro Social', 2022, 'certo_errado', 'medio', 'O auxílio por incapacidade temporária é benefício devido ao segurado que, cumprida a carência quando exigida, ficar incapacitado para o trabalho ou atividade habitual por mais de quinze dias consecutivos.', 'A descrição corresponde à lógica legal do antigo auxílio-doença, atual auxílio por incapacidade temporária.', true, 'claude-fable-5-1', 'seed-v2-2026-09-24', true, false, false, '325a1965e0dda019ff80a8fa246ea9a79da5b1bfea1ed2a2e807a3184499eef0')
ON CONFLICT (fingerprint_hash) DO UPDATE SET explicacao = EXCLUDED.explicacao, revisada_por_especialista = true, updated_at = now();

-- 8. Alternativas (sem sinalização antecipada no frontend; o gabarito só é usado após resposta do aluno)
DELETE FROM public.questoes_alternativas WHERE questao_id IN ('seed-q-001', 'seed-q-002', 'seed-q-003', 'seed-q-004', 'seed-q-005', 'seed-q-006', 'seed-q-007', 'seed-q-008', 'seed-q-009', 'seed-q-010', 'seed-q-011', 'seed-q-012', 'seed-q-013', 'seed-q-014', 'seed-q-015', 'seed-q-016', 'seed-q-017', 'seed-q-018', 'seed-q-019', 'seed-q-020', 'seed-q-021', 'seed-q-022', 'seed-q-023', 'seed-q-024');
INSERT INTO public.questoes_alternativas (questao_id, letra, texto, correta, ordem) VALUES
  ('seed-q-001', 'A', 'causa', false, 1),
  ('seed-q-001', 'B', 'concessão', true, 2),
  ('seed-q-001', 'C', 'condição', false, 3),
  ('seed-q-001', 'D', 'consequência', false, 4),
  ('seed-q-001', 'E', 'finalidade', false, 5),
  ('seed-q-002', 'A', 'Faz dois anos que o processo aguarda julgamento.', true, 1),
  ('seed-q-002', 'B', 'Houveram muitas manifestações nos autos.', false, 2),
  ('seed-q-002', 'C', 'Tratam-se de documentos sigilosos.', false, 3),
  ('seed-q-002', 'D', 'Existem, no relatório, falha grave.', false, 4),
  ('seed-q-002', 'E', 'Deve haverem novas diligências.', false, 5),
  ('seed-q-003', 'A', 'as / as', false, 1),
  ('seed-q-003', 'B', 'às / às', true, 2),
  ('seed-q-003', 'C', 'a / às', false, 3),
  ('seed-q-003', 'D', 'às / as', false, 4),
  ('seed-q-003', 'E', 'a / as', false, 5),
  ('seed-q-004', 'A', 'aproximar o texto da linguagem literária', false, 1),
  ('seed-q-004', 'B', 'evitar marcas subjetivas e reforçar a objetividade institucional', true, 2),
  ('seed-q-004', 'C', 'substituir toda forma de coesão textual', false, 3),
  ('seed-q-004', 'D', 'dispensar a clareza das informações', false, 4),
  ('seed-q-004', 'E', 'tornar obrigatório o uso de primeira pessoa', false, 5),
  ('seed-q-005', 'A', 'Certo', true, 1),
  ('seed-q-005', 'B', 'Errado', false, 2),
  ('seed-q-006', 'A', 'União e Estados apenas', false, 1),
  ('seed-q-006', 'B', 'União, Estados, Distrito Federal e Municípios, todos autônomos', true, 2),
  ('seed-q-006', 'C', 'União, Estados e territórios, todos soberanos', false, 3),
  ('seed-q-006', 'D', 'Estados e Municípios subordinados administrativamente à União', false, 4),
  ('seed-q-006', 'E', 'Distrito Federal sem autonomia legislativa', false, 5),
  ('seed-q-007', 'A', 'Certo', true, 1),
  ('seed-q-007', 'B', 'Errado', false, 2),
  ('seed-q-008', 'A', 'publicidade', false, 1),
  ('seed-q-008', 'B', 'moralidade', true, 2),
  ('seed-q-008', 'C', 'eficiência', false, 3),
  ('seed-q-008', 'D', 'autotutela', false, 4),
  ('seed-q-008', 'E', 'continuidade', false, 5),
  ('seed-q-009', 'A', 'tipicidade', false, 1),
  ('seed-q-009', 'B', 'imperatividade', false, 2),
  ('seed-q-009', 'C', 'autoexecutoriedade', true, 3),
  ('seed-q-009', 'D', 'presunção de legitimidade', false, 4),
  ('seed-q-009', 'E', 'continuidade', false, 5),
  ('seed-q-010', 'A', 'pregão', false, 1),
  ('seed-q-010', 'B', 'concorrência', false, 2),
  ('seed-q-010', 'C', 'diálogo competitivo', false, 3),
  ('seed-q-010', 'D', 'concurso', true, 4),
  ('seed-q-010', 'E', 'leilão', false, 5),
  ('seed-q-011', 'A', 'Certo', true, 1),
  ('seed-q-011', 'B', 'Errado', false, 2),
  ('seed-q-012', 'A', 'o edital foi publicado e o prazo começou', false, 1),
  ('seed-q-012', 'B', 'o edital não foi publicado e o prazo começou', false, 2),
  ('seed-q-012', 'C', 'o edital foi publicado e o prazo não começou', true, 3),
  ('seed-q-012', 'D', 'o edital não foi publicado e o prazo não começou', false, 4),
  ('seed-q-012', 'E', 'as duas proposições simples são falsas', false, 5),
  ('seed-q-013', 'A', 'Certo', true, 1),
  ('seed-q-013', 'B', 'Errado', false, 2),
  ('seed-q-014', 'A', '24', false, 1),
  ('seed-q-014', 'B', '56', true, 2),
  ('seed-q-014', 'C', '112', false, 3),
  ('seed-q-014', 'D', '336', false, 4),
  ('seed-q-014', 'E', '512', false, 5),
  ('seed-q-015', 'A', '1/5', false, 1),
  ('seed-q-015', 'B', '2/5', true, 2),
  ('seed-q-015', 'C', '3/5', false, 3),
  ('seed-q-015', 'D', '1/2', false, 4),
  ('seed-q-015', 'E', '2/3', false, 5),
  ('seed-q-016', 'A', 'Certo', true, 1),
  ('seed-q-016', 'B', 'Errado', false, 2),
  ('seed-q-017', 'A', 'Certo', true, 1),
  ('seed-q-017', 'B', 'Errado', false, 2),
  ('seed-q-018', 'A', 'remover todas as chaves primárias', false, 1),
  ('seed-q-018', 'B', 'duplicar dados para acelerar consultas', false, 2),
  ('seed-q-018', 'C', 'reduzir dependências transitivas e redundâncias indevidas', true, 3),
  ('seed-q-018', 'D', 'impedir o uso de chaves estrangeiras', false, 4),
  ('seed-q-018', 'E', 'substituir tabelas por documentos JSON', false, 5),
  ('seed-q-019', 'A', 'Certo', true, 1),
  ('seed-q-019', 'B', 'Errado', false, 2),
  ('seed-q-020', 'A', 'Certo', true, 1),
  ('seed-q-020', 'B', 'Errado', false, 2),
  ('seed-q-021', 'A', 'Certo', true, 1),
  ('seed-q-021', 'B', 'Errado', false, 2),
  ('seed-q-022', 'A', 'Certo', true, 1),
  ('seed-q-022', 'B', 'Errado', false, 2),
  ('seed-q-023', 'A', 'faculdades eventuais do servidor', false, 1),
  ('seed-q-023', 'B', 'primados maiores que devem nortear o servidor público', true, 2),
  ('seed-q-023', 'C', 'regras exclusivas de servidores comissionados', false, 3),
  ('seed-q-023', 'D', 'apenas recomendações sem conteúdo ético', false, 4),
  ('seed-q-023', 'E', 'normas aplicáveis somente a contratos administrativos', false, 5),
  ('seed-q-024', 'A', 'Certo', true, 1),
  ('seed-q-024', 'B', 'Errado', false, 2);

COMMIT;

-- Validação rápida após execução:
-- SELECT COUNT(*) AS total_questoes_seed FROM public.questoes WHERE prompt_versao = 'seed-v2-2026-09-24';
-- SELECT tipo, COUNT(*) FROM public.questoes WHERE prompt_versao = 'seed-v2-2026-09-24' GROUP BY tipo;
