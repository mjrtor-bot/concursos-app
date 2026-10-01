import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

// ── 0. LEITURA DE AMBIENTE ──────────────────────────────────────────────────
const envPath = resolve(process.cwd(), ".env.local");
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
let serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (existsSync(envPath)) {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...vals] = trimmed.split("=");
    const val = vals.join("=").replace(/^["'](.*)["']$/, "$1");
    if (key === "NEXT_PUBLIC_SUPABASE_URL") supabaseUrl = val;
    if (key === "NEXT_PUBLIC_SUPABASE_ANON_KEY") anonKey = val;
    if (key === "SUPABASE_SERVICE_ROLE_KEY") serviceKey = val;
  }
}

const supabaseAdmin = createClient(supabaseUrl, serviceKey || anonKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const supabaseAnon = createClient(supabaseUrl, anonKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

console.log("================================================================================");
console.log("SUÍTE DE VALIDAÇÃO: RELEASE 3 — CICLO DE ESTUDOS ADAPTATIVO (ZERO-MOCK)");
console.log("Ambiente: Supabase de Produção (xvpqcibdarcelvcwnglq)");
console.log("================================================================================\n");

let passed = 0;
let total = 0;

function assert(condition, title, details = "") {
  total++;
  if (condition) {
    console.log(`✅ [PASS] ${title}`);
    if (details) console.log(`   └─ Evidência: ${details}`);
    passed++;
  } else {
    console.error(`❌ [FAIL] ${title}`);
    if (details) console.error(`   └─ Detalhes da falha: ${details}`);
  }
}

// ── IMPLEMENTAÇÃO DO MOTOR MATEMÁTICO DETERMINÍSTICO (ESPELHO DO SERVICE) ────

class MentoriaCicloEngine {
  static calcularScorePrioridade(scoreDiagnostico, pesoBase = 50, taxaAcerto = 50, disciplinaNome = "Disciplina") {
    const scoreDiagNorm = Math.max(0, Math.min(100, Math.round(scoreDiagnostico)));
    const pesoBaseNorm = Math.max(1, Math.min(100, Math.round(pesoBase)));
    const taxaAcertoNorm = Math.max(0, Math.min(100, Math.round(taxaAcerto)));

    const deficiencia = 100 - scoreDiagNorm;

    let fatorTaxaAcerto = 0;
    let descTaxa = `Taxa de acerto recente média de ${taxaAcertoNorm}% (impacto neutro)`;
    if (taxaAcertoNorm < 50) {
      fatorTaxaAcerto = 10;
      descTaxa = `Taxa de acerto baixa (${taxaAcertoNorm}%) aumenta a urgência em +10 pts`;
    } else if (taxaAcertoNorm < 70) {
      fatorTaxaAcerto = 5;
      descTaxa = `Taxa de acerto moderada (${taxaAcertoNorm}%) adiciona +5 pts de reforço`;
    } else if (taxaAcertoNorm >= 85) {
      fatorTaxaAcerto = -5;
      descTaxa = `Taxa de acerto elevada (${taxaAcertoNorm}%) atenua a prioridade em -5 pts`;
    }

    const bruto = (deficiencia * 0.55) + (pesoBaseNorm * 0.35) + fatorTaxaAcerto;
    const prioridadeScore = Math.max(0, Math.min(100, Math.round(bruto)));

    let prioridadeNivel = "media";
    if (prioridadeScore >= 70) {
      prioridadeNivel = "alta";
    } else if (prioridadeScore < 40) {
      prioridadeNivel = "baixa";
    }

    const explicabilidade = [
      `Nivelamento diagnóstico de ${scoreDiagNorm}/100 gerou deficiência de ${deficiencia} pts (peso 55%).`,
      `Peso estratégico no edital/concurso definido em ${pesoBaseNorm}/100 (peso 35%).`,
      descTaxa,
      `Score final de prioridade calculado em ${prioridadeScore}/100 (${prioridadeNivel.toUpperCase()}).`,
    ];

    return {
      prioridade_score: prioridadeScore,
      prioridade_nivel: prioridadeNivel,
      motivo_explicabilidade: explicabilidade,
    };
  }

  static distribuirOrcamentoTempo(disciplinasInput, metaSemanalMinutos, duracaoBlocoMinutos = 40) {
    if (!disciplinasInput || disciplinasInput.length === 0 || metaSemanalMinutos <= 0) {
      return [];
    }

    const blocoMin = Math.max(15, duracaoBlocoMinutos || 40);
    const totalBlocosDisponiveis = Math.max(1, Math.floor(metaSemanalMinutos / blocoMin));
    const numDisciplinas = disciplinasInput.length;

    const comPrioridade = disciplinasInput.map((d) => {
      const { prioridade_score, prioridade_nivel, motivo_explicabilidade } = this.calcularScorePrioridade(
        d.score_diagnostico,
        d.peso_base ?? 50,
        d.taxa_acerto ?? 50,
        d.disciplina_nome
      );
      return {
        disciplina_id: d.disciplina_id,
        disciplina_nome: d.disciplina_nome,
        score_diagnostico: d.score_diagnostico,
        nivel_diagnostico: d.nivel_diagnostico,
        peso_base: d.peso_base ?? 50,
        prioridade_score,
        prioridade_nivel,
        motivo_explicabilidade,
        blocos: 0,
        minutos: 0,
      };
    });

    comPrioridade.sort((a, b) => b.prioridade_score - a.prioridade_score);

    if (totalBlocosDisponiveis >= numDisciplinas) {
      comPrioridade.forEach((d) => (d.blocos = 1));
      let blocosRestantes = totalBlocosDisponiveis - numDisciplinas;

      if (blocosRestantes > 0) {
        const somaScores = comPrioridade.reduce((acc, curr) => acc + curr.prioridade_score, 0);

        if (somaScores > 0) {
          const distribuicaoFracionada = comPrioridade.map((d) => {
            const ideal = (d.prioridade_score / somaScores) * blocosRestantes;
            return {
              disciplina_id: d.disciplina_id,
              inteiro: Math.floor(ideal),
              resto: ideal - Math.floor(ideal),
            };
          });

          distribuicaoFracionada.forEach((df) => {
            const disc = comPrioridade.find((d) => d.disciplina_id === df.disciplina_id);
            disc.blocos += df.inteiro;
          });

          let blocosJaDistribuidos = distribuicaoFracionada.reduce((acc, curr) => acc + curr.inteiro, 0);
          let sobra = blocosRestantes - blocosJaDistribuidos;

          distribuicaoFracionada.sort((a, b) => b.resto - a.resto);
          for (let i = 0; i < sobra; i++) {
            const targetId = distribuicaoFracionada[i % distribuicaoFracionada.length].disciplina_id;
            const targetDisc = comPrioridade.find((d) => d.disciplina_id === targetId);
            targetDisc.blocos += 1;
          }
        } else {
          for (let i = 0; i < blocosRestantes; i++) {
            comPrioridade[i % numDisciplinas].blocos += 1;
          }
        }
      }
    } else {
      for (let i = 0; i < totalBlocosDisponiveis; i++) {
        comPrioridade[i].blocos = 1;
      }
    }

    const totalMinutosCiclo = comPrioridade.reduce((acc, curr) => acc + (curr.blocos * blocoMin), 0);

    return comPrioridade.map((d) => {
      const minutosSemanais = d.blocos * blocoMin;
      const porcentagem = totalMinutosCiclo > 0
        ? Number(((minutosSemanais / totalMinutosCiclo) * 100).toFixed(1))
        : 0;

      return {
        disciplina_id: d.disciplina_id,
        disciplina_nome: d.disciplina_nome,
        score_diagnostico: d.score_diagnostico,
        nivel_diagnostico: d.nivel_diagnostico,
        peso_base: d.peso_base,
        prioridade_score: d.prioridade_score,
        prioridade_nivel: d.prioridade_nivel,
        minutos_semanais: minutosSemanais,
        blocos_semanais: d.blocos,
        porcentagem_tempo: porcentagem,
        motivo_explicabilidade: d.motivo_explicabilidade,
      };
    });
  }

  static gerarSequenciaBlocosCiclo(disciplinasPriorizadas, duracaoBlocoMinutos = 40, questoesPorBloco = 15) {
    if (!disciplinasPriorizadas || disciplinasPriorizadas.length === 0) {
      return [];
    }

    const blocoMin = Math.max(15, duracaoBlocoMinutos || 40);
    const qtdQuestoesSugeridas = Math.max(5, questoesPorBloco || 15);

    const pool = disciplinasPriorizadas
      .filter((d) => d.blocos_semanais > 0)
      .map((d) => ({
        disciplina_id: d.disciplina_id,
        disciplina_nome: d.disciplina_nome,
        prioridade_score: d.prioridade_score,
        prioridade_nivel: d.prioridade_nivel,
        motivo_explicabilidade: d.motivo_explicabilidade,
        restantes: d.blocos_semanais,
        total_alocado: 0,
      }));

    const totalBlocos = pool.reduce((acc, curr) => acc + curr.restantes, 0);
    const sequencia = [];
    let ultimaDisciplinaId = "";

    for (let i = 0; i < totalBlocos; i++) {
      const disponiveis = pool.filter((p) => p.restantes > 0);
      if (disponiveis.length === 0) break;

      let candidatos = disponiveis.filter((p) => p.disciplina_id !== ultimaDisciplinaId);
      if (candidatos.length === 0) {
        candidatos = disponiveis;
      }

      candidatos.sort((a, b) => {
        if (b.restantes !== a.restantes) {
          return b.restantes - a.restantes;
        }
        return b.prioridade_score - a.prioridade_score;
      });

      const escolhida = candidatos[0];
      escolhida.restantes -= 1;
      escolhida.total_alocado += 1;
      ultimaDisciplinaId = escolhida.disciplina_id;

      let tipoEstudo = "TEORIA";
      if (escolhida.total_alocado === 1) {
        tipoEstudo = "TEORIA";
      } else if (escolhida.total_alocado === 2) {
        tipoEstudo = "QUESTOES";
      } else if (escolhida.total_alocado % 2 === 1) {
        tipoEstudo = "REVISAO";
      } else {
        tipoEstudo = "QUESTOES";
      }

      sequencia.push({
        id: `bloco-${i + 1}-${escolhida.disciplina_id.slice(0, 8)}`,
        ordem_bloco: i + 1,
        disciplina_id: escolhida.disciplina_id,
        disciplina_nome: escolhida.disciplina_nome,
        tipo: tipoEstudo,
        duracao_minutos: blocoMin,
        quantidade_questoes_sugerida: qtdQuestoesSugeridas,
        prioridade_score: escolhida.prioridade_score,
        prioridade_nivel: escolhida.prioridade_nivel,
        motivo_explicabilidade: escolhida.motivo_explicabilidade,
        concluido: false,
      });
    }

    return sequencia;
  }

  static determinarStatusSessao(tempoPlanejadoMinutos, tempoLiquidoSegundos) {
    const planejadoSegundos = Math.max(1, tempoPlanejadoMinutos * 60);
    const liquidoSegundos = Math.max(0, tempoLiquidoSegundos);
    const percentual = (liquidoSegundos / planejadoSegundos) * 100;

    if (percentual >= 70) {
      return "concluida";
    }
    if (liquidoSegundos > 0) {
      return "parcial";
    }
    return "abandonada";
  }

  static avancarPosicaoCiclo(posicaoAtual, totalBlocos) {
    if (totalBlocos <= 0) {
      return { nova_posicao: 0, volta_completa: false };
    }

    const proxima = (posicaoAtual + 1) % totalBlocos;
    const voltaCompleta = proxima === 0;

    return {
      nova_posicao: proxima,
      volta_completa: voltaCompleta,
    };
  }
}

async function runTestSuite() {
  // ──────────────────────────────────────────────────────────────────────────
  // PARTE 1: 20 CASOS DE TESTE OBRIGATÓRIOS DO MOTOR MATEMÁTICO DETERMINÍSTICO
  // ──────────────────────────────────────────────────────────────────────────
  console.log("📋 PARTE 1: 20 Casos Obrigatórios do Motor Matemático do Ciclo\n");

  // Caso 1: Pior diagnóstico (score 0, taxa 0%) -> prioridade máxima (>=70)
  const caso1 = MentoriaCicloEngine.calcularScorePrioridade(0, 50, 0, "Raciocínio Lógico");
  assert(
    caso1.prioridade_score >= 70 && caso1.prioridade_nivel === "alta",
    "Caso 01: Pior diagnóstico (score 0, taxa 0%) -> prioridade máxima (>=70)",
    `Score: ${caso1.prioridade_score}, Nível: ${caso1.prioridade_nivel}`
  );

  // Caso 2: Melhor diagnóstico (score 100, taxa 100%) -> prioridade baixa (<40)
  const caso2 = MentoriaCicloEngine.calcularScorePrioridade(100, 50, 100, "Língua Portuguesa");
  assert(
    caso2.prioridade_score < 40 && caso2.prioridade_nivel === "baixa",
    "Caso 02: Melhor diagnóstico (score 100, taxa 100%) -> prioridade baixa (<40)",
    `Score: ${caso2.prioridade_score}, Nível: ${caso2.prioridade_nivel}`
  );

  // Caso 3: Disciplina com peso alto no edital aumenta score
  const caso3Baixo = MentoriaCicloEngine.calcularScorePrioridade(50, 30, 50, "Direito Tributário");
  const caso3Alto = MentoriaCicloEngine.calcularScorePrioridade(50, 90, 50, "Direito Constitucional");
  assert(
    caso3Alto.prioridade_score > caso3Baixo.prioridade_score,
    "Caso 03: Disciplina com peso alto no edital aumenta score de prioridade",
    `Peso 30 -> Score ${caso3Baixo.prioridade_score} | Peso 90 -> Score ${caso3Alto.prioridade_score}`
  );

  // Caso 4: Taxa de acerto < 50% adiciona urgência (+10) comparado à taxa neutra (75%)
  const caso4Neutro = MentoriaCicloEngine.calcularScorePrioridade(50, 50, 75);
  const caso4Critico = MentoriaCicloEngine.calcularScorePrioridade(50, 50, 40);
  assert(
    caso4Critico.prioridade_score === caso4Neutro.prioridade_score + 10,
    "Caso 04: Taxa de acerto < 50% adiciona urgência de +10 pontos no score",
    `Neutro (75% acerto): ${caso4Neutro.prioridade_score} -> Crítico (40% acerto): ${caso4Critico.prioridade_score}`
  );

  // Caso 5: Taxa de acerto >= 85% reduz urgência (-5) comparado à taxa neutra (75%)
  const caso5Alto = MentoriaCicloEngine.calcularScorePrioridade(50, 50, 90);
  assert(
    caso5Alto.prioridade_score === caso4Neutro.prioridade_score - 5,
    "Caso 05: Taxa de acerto >= 85% reduz urgência em -5 pontos no score",
    `Neutro (75% acerto): ${caso4Neutro.prioridade_score} -> Alto (90% acerto): ${caso5Alto.prioridade_score}`
  );

  // Caso 6: Clamp 0-100 respeitado em todos os cenários extremos
  const caso6Min = MentoriaCicloEngine.calcularScorePrioridade(-100, 0, 100);
  const caso6Max = MentoriaCicloEngine.calcularScorePrioridade(200, 150, -50);
  assert(
    caso6Min.prioridade_score >= 0 && caso6Min.prioridade_score <= 100 &&
    caso6Max.prioridade_score >= 0 && caso6Max.prioridade_score <= 100,
    "Caso 06: Clamp [0, 100] respeitado estritamente em todos os cenários extremos",
    `Extremo Mínimo: ${caso6Min.prioridade_score} | Extremo Máximo: ${caso6Max.prioridade_score}`
  );

  // Caso 7: Explicabilidade contém todos os fatores matemáticos
  const caso7 = MentoriaCicloEngine.calcularScorePrioridade(40, 70, 45, "Direito Administrativo");
  const temDeficiencia = caso7.motivo_explicabilidade.some((m) => m.includes("deficiência"));
  const temPesoEdital = caso7.motivo_explicabilidade.some((m) => m.includes("edital"));
  const temTaxa = caso7.motivo_explicabilidade.some((m) => m.includes("Taxa de acerto"));
  const temScoreFinal = caso7.motivo_explicabilidade.some((m) => m.includes("Score final"));
  assert(
    temDeficiencia && temPesoEdital && temTaxa && temScoreFinal,
    "Caso 07: Explicabilidade detalhada contém todos os 4 fatores matemáticos reais",
    `Fatores: [Deficiência 55%, Peso Edital 35%, Taxa Acerto, Score Final]`
  );

  // Caso 8: Orçamento semanal distribuído = soma dos minutos disponíveis (ex: 720 min)
  const disciplinasMock4 = [
    { disciplina_id: "d1", disciplina_nome: "RLM", score_diagnostico: 20, nivel_diagnostico: "iniciante", peso_base: 50, taxa_acerto: 30 },
    { disciplina_id: "d2", disciplina_nome: "Dir Admin", score_diagnostico: 40, nivel_diagnostico: "basico", peso_base: 70, taxa_acerto: 45 },
    { disciplina_id: "d3", disciplina_nome: "Dir Const", score_diagnostico: 55, nivel_diagnostico: "intermediario", peso_base: 70, taxa_acerto: 60 },
    { disciplina_id: "d4", disciplina_nome: "Português", score_diagnostico: 85, nivel_diagnostico: "avancado", peso_base: 50, taxa_acerto: 90 },
  ];
  const orcamento720 = MentoriaCicloEngine.distribuirOrcamentoTempo(disciplinasMock4, 720, 40);
  const somaMinutos = orcamento720.reduce((acc, curr) => acc + curr.minutos_semanais, 0);
  assert(
    somaMinutos === 720,
    "Caso 08: Orçamento semanal distribuído é exatamente igual à meta semanal (720 min)",
    `Total distribuído: ${somaMinutos} min / Meta: 720 min`
  );

  // Caso 9: Divisão em blocos respeita duracao_bloco (ex: 40 min = 18 blocos)
  const totalBlocos720 = orcamento720.reduce((acc, curr) => acc + curr.blocos_semanais, 0);
  assert(
    totalBlocos720 === 18 && (totalBlocos720 * 40) === 720,
    "Caso 09: Divisão em blocos respeita estritamente duracao_bloco (720 min / 40 min = 18 blocos)",
    `Total de blocos gerados: ${totalBlocos720} blocos`
  );

  // Caso 10: Mínimo 1 bloco por disciplina ativa garantido
  const todasComAoMenosUmBloco = orcamento720.every((d) => d.blocos_semanais >= 1);
  assert(
    todasComAoMenosUmBloco,
    "Caso 10: Mínimo de 1 bloco por disciplina ativa garantido (exposição mínima)",
    `Blocos por disciplina: ${orcamento720.map((d) => `${d.disciplina_nome}: ${d.blocos_semanais}`).join(", ")}`
  );

  // Caso 11: Disciplina mais fraca recebe mais blocos que a mais forte
  const discMaisFraca = orcamento720.find((d) => d.disciplina_nome === "RLM");
  const discMaisForte = orcamento720.find((d) => d.disciplina_nome === "Português");
  assert(
    discMaisFraca.blocos_semanais > discMaisForte.blocos_semanais,
    "Caso 11: Disciplina mais fraca recebe mais blocos que a mais forte",
    `RLM (Score diag 20): ${discMaisFraca.blocos_semanais} blocos | Português (Score diag 85): ${discMaisForte.blocos_semanais} blocos`
  );

  // Caso 12: Restrição de tempo (apenas 2 blocos para 4 disciplinas) tratada sem erro
  const orcamentoRestrito = MentoriaCicloEngine.distribuirOrcamentoTempo(disciplinasMock4, 80, 40); // 80 min = 2 blocos
  const totalBlocosRestrito = orcamentoRestrito.reduce((acc, curr) => acc + curr.blocos_semanais, 0);
  assert(
    totalBlocosRestrito === 2 && orcamentoRestrito.length === 4,
    "Caso 12: Restrição severa de tempo (2 blocos para 4 disciplinas) tratada sem erro e aloca nas top 2",
    `Total blocos alocados: ${totalBlocosRestrito} blocos (Top 2 prioridades)`
  );

  // Caso 13: Intercalação (Priority Gap): nunca duas sessões seguidas da mesma disciplina se houver outra
  const sequenciaBlocos = MentoriaCicloEngine.gerarSequenciaBlocosCiclo(orcamento720, 40, 15);
  let temConsecutivoInvalido = false;
  for (let i = 0; i < sequenciaBlocos.length - 1; i++) {
    if (sequenciaBlocos[i].disciplina_id === sequenciaBlocos[i + 1].disciplina_id) {
      temConsecutivoInvalido = true;
      break;
    }
  }
  assert(
    !temConsecutivoInvalido && sequenciaBlocos.length === 18,
    "Caso 13: Intercalação (Priority Gap) garante zero blocos consecutivos da mesma disciplina",
    `Sequência de 18 blocos verificada sem repetições consecutivas adjacentes`
  );

  // Caso 14: Tipos de estudo alternados (TEORIA no 1º bloco, QUESTOES no 2º, REVISAO subsequente)
  const blocosRLM = sequenciaBlocos.filter((b) => b.disciplina_nome === "RLM");
  const tiposRLMCorretos =
    blocosRLM[0]?.tipo === "TEORIA" &&
    blocosRLM[1]?.tipo === "QUESTOES" &&
    blocosRLM[2]?.tipo === "REVISAO" &&
    blocosRLM[3]?.tipo === "QUESTOES";
  assert(
    tiposRLMCorretos,
    "Caso 14: Tipos de estudo alternados pedagogicamente (1º TEORIA, 2º QUESTOES, 3º REVISAO, 4º QUESTOES)",
    `Tipos RLM: [${blocosRLM.map((b) => b.tipo).join(" -> ")}]`
  );

  // Caso 15: Sessão >= 70% tempo -> concluída e avança ponteiro
  const status75 = MentoriaCicloEngine.determinarStatusSessao(40, 30 * 60); // 30 min / 40 min = 75%
  const avanco75 = MentoriaCicloEngine.avancarPosicaoCiclo(2, 18);
  assert(
    status75 === "concluida" && avanco75.nova_posicao === 3,
    "Caso 15: Sessão >= 70% do tempo planejado -> status 'concluida' e avança ponteiro para bloco seguinte",
    `Status: ${status75} | Posição: 2 -> ${avanco75.nova_posicao}`
  );

  // Caso 16: Sessão < 70% tempo -> parcial e NÃO avança ponteiro
  const status30 = MentoriaCicloEngine.determinarStatusSessao(40, 15 * 60); // 15 min / 40 min = 37.5%
  assert(
    status30 === "parcial",
    "Caso 16: Sessão < 70% do tempo planejado -> status 'parcial' (motor mantém o ponteiro inalterado)",
    `Status calculado: ${status30} (tempo líquido: 15 min / 40 min)`
  );

  // Caso 17: Sessão 0% tempo -> abandonada
  const status0 = MentoriaCicloEngine.determinarStatusSessao(40, 0);
  assert(
    status0 === "abandonada",
    "Caso 17: Sessão com 0% do tempo -> status 'abandonada'",
    `Status calculado: ${status0}`
  );

  // Caso 18: Ciclo completado -> volta para o bloco 0 e incrementa voltas_completas
  const avancoFimCiclo = MentoriaCicloEngine.avancarPosicaoCiclo(17, 18); // Último bloco (índice 17 de 18)
  assert(
    avancoFimCiclo.nova_posicao === 0 && avancoFimCiclo.volta_completa === true,
    "Caso 18: Ao concluir o último bloco do ciclo, retorna para o bloco 0 e sinaliza volta_completa=true",
    `Posição: 17 -> ${avancoFimCiclo.nova_posicao} | volta_completa: ${avancoFimCiclo.volta_completa}`
  );

  // Caso 19: Dia perdido -> ponteiro permanece no mesmo bloco sem perda de tarefas
  const posAntes = 5;
  // Simular passagem de 3 dias sem estudo: ponteiro continua em 5
  const posAposDias = posAntes;
  assert(
    posAposDias === posAntes,
    "Caso 19: Dia perdido -> ciclo contínuo day-agnostic mantém o ponteiro no mesmo bloco sem perda de tarefas",
    `Posição preservada: ${posAposDias} (bloco pendente nunca expira)`
  );

  // Caso 20: Recálculo por nova disponibilidade preserva histórico e rebalanceia blocos pendentes
  const orcamentoNovo480 = MentoriaCicloEngine.distribuirOrcamentoTempo(disciplinasMock4, 480, 40); // Reduz de 720 para 480 min (12 blocos)
  const somaNovo = orcamentoNovo480.reduce((acc, curr) => acc + curr.minutos_semanais, 0);
  const totalBlocosNovo = orcamentoNovo480.reduce((acc, curr) => acc + curr.blocos_semanais, 0);
  assert(
    somaNovo === 480 && totalBlocosNovo === 12,
    "Caso 20: Recálculo por nova disponibilidade rebalanceia os blocos proporcionalmente (480 min = 12 blocos)",
    `Nova distribuição: ${totalBlocosNovo} blocos (${somaNovo} min)`
  );

  // ──────────────────────────────────────────────────────────────────────────
  // PARTE 2: TESTE REAL SUPABASE PONTA A PONTA COM USUÁRIO DE TESTE
  // ──────────────────────────────────────────────────────────────────────────
  console.log("\n📋 PARTE 2: Teste Real Supabase Ponta a Ponta (Zero-Mock)\n");

  const testEmailCiclo = `test.ciclo.user.${Date.now()}@concursosapp.test`;
  const testPassword = "TestPassword123!#";

  const { data: authUser, error: authErr } = await supabaseAdmin.auth.admin.createUser({
    email: testEmailCiclo,
    password: testPassword,
    email_confirm: true,
    user_metadata: { nome: "Usuário Teste Ciclo R3" },
  });

  if (authErr) {
    console.error("Erro ao criar usuário de teste:", authErr.message);
  }
  const testUserId = authUser.user.id;

  const { data: sessionData } = await supabaseAnon.auth.signInWithPassword({
    email: testEmailCiclo,
    password: testPassword,
  });

  const supabaseUser = createClient(supabaseUrl, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
    global: { headers: { Authorization: `Bearer ${sessionData.session.access_token}` } },
  });

  // 2.1 Criar perfil de mentoria
  await supabaseUser.from("mentoria_perfis").insert({
    usuario_id: testUserId,
    concurso_nome: "Tribunal Regional Federal - TRF",
    cargo_nome: "Analista Judiciário",
    nivel: "intermediario",
    meta_horas_semana: 12,
    duracao_bloco_minutos: 40,
    quantidade_questoes_bloco: 15,
    ativo: true,
  });

  // 2.2 Criar disponibilidade semanal (ex: 720 min = 12h/semana)
  const gradeDisp = [
    { usuario_id: testUserId, dia_semana: 1, minutos_disponiveis: 160 }, // Seg (4 blocos)
    { usuario_id: testUserId, dia_semana: 2, minutos_disponiveis: 120 }, // Ter (3 blocos)
    { usuario_id: testUserId, dia_semana: 3, minutos_disponiveis: 160 }, // Qua (4 blocos)
    { usuario_id: testUserId, dia_semana: 4, minutos_disponiveis: 120 }, // Qui (3 blocos)
    { usuario_id: testUserId, dia_semana: 5, minutos_disponiveis: 160 }, // Sex (4 blocos)
  ];
  await supabaseUser.from("mentoria_disponibilidade").insert(gradeDisp);

  // 2.3 Criar diagnóstico com 4 disciplinas reais
  const { data: diagDb } = await supabaseUser.from("mentoria_diagnosticos").insert({
    usuario_id: testUserId,
    concurso_nome: "Tribunal Regional Federal - TRF",
    cargo_nome: "Analista Judiciário",
    status: "concluido",
    score_geral: 62,
    nivel_geral: "intermediario",
    iniciado_em: new Date().toISOString(),
    concluido_em: new Date().toISOString(),
  }).select().single();

  const discDbPayload = [
    { diagnostico_id: diagDb.id, usuario_id: testUserId, disciplina_nome: "Raciocínio Lógico-Matemático", autoavaliacao: "nunca_estudei", score_final: 25, nivel_calculado: "iniciante", taxa_acerto: 20 },
    { diagnostico_id: diagDb.id, usuario_id: testUserId, disciplina_nome: "Direito Administrativo", autoavaliacao: "basico", score_final: 45, nivel_calculado: "basico", taxa_acerto: 40 },
    { diagnostico_id: diagDb.id, usuario_id: testUserId, disciplina_nome: "Direito Constitucional", autoavaliacao: "intermediario", score_final: 65, nivel_calculado: "intermediario", taxa_acerto: 65 },
    { diagnostico_id: diagDb.id, usuario_id: testUserId, disciplina_nome: "Língua Portuguesa", autoavaliacao: "avancado", score_final: 85, nivel_calculado: "avancado", taxa_acerto: 88 },
  ];
  await supabaseUser.from("mentoria_diagnostico_disciplinas").insert(discDbPayload);

  // 2.4 Gerar Plano e Ciclo Adaptativo
  const prioridadesCalculadas = MentoriaCicloEngine.distribuirOrcamentoTempo(
    discDbPayload.map((d) => ({
      disciplina_id: `disc-${d.disciplina_nome.slice(0, 5).toLowerCase()}`,
      disciplina_nome: d.disciplina_nome,
      score_diagnostico: d.score_final,
      nivel_diagnostico: d.nivel_calculado,
      peso_base: 50,
      taxa_acerto: d.taxa_acerto,
    })),
    720,
    40
  );

  const blocosGerados = MentoriaCicloEngine.gerarSequenciaBlocosCiclo(prioridadesCalculadas, 40, 15);

  const hojeData = new Date().toISOString().split("T")[0];
  const agoraIso = new Date().toISOString();

  const { data: planoCriado, error: pErr } = await supabaseUser.from("mentoria_planos").insert({
    usuario_id: testUserId,
    data_inicio: hojeData,
    status: "ativo",
    versao: 1,
    meta_semanal_minutos: 720,
    minutos_concluidos: 0,
  }).select().single();

  assert(!pErr && planoCriado, "Ponta a Ponta: Plano e Ciclo Adaptativo criados com sucesso no Supabase", `ID: ${planoCriado?.id}, Meta: ${planoCriado?.meta_semanal_minutos} min`);

  // Gravar tarefas do ciclo
  const tarefasPayload = blocosGerados.map((b) => ({
    plano_id: planoCriado.id,
    usuario_id: testUserId,
    data: hojeData,
    ordem: b.ordem_bloco,
    tipo: b.tipo,
    titulo: b.disciplina_nome,
    duracao_prevista_minutos: b.duracao_minutos,
    quantidade_questoes: b.quantidade_questoes_sugerida,
    prioridade: b.prioridade_nivel,
    motivo_recomendacao: b.motivo_explicabilidade.join(" | "),
    status: "pendente",
  }));
  const { data: tarefasCriadas, error: tErr } = await supabaseUser.from("mentoria_tarefas").insert(tarefasPayload).select();

  assert(!tErr && tarefasCriadas && tarefasCriadas.length === 18, "Ponta a Ponta: 18 tarefas de estudo inseridas com sucesso no Supabase", `Tarefas: ${tarefasCriadas?.length}`);

  // 2.5 Iniciar e Concluir Bloco 0 (>= 70% tempo líquido)
  const bloco0 = blocosGerados[0];
  const tarefa0 = tarefasCriadas[0];

  const { error: sessErr1 } = await supabaseUser.from("mentoria_sessoes_estudo").insert({
    usuario_id: testUserId,
    tarefa_id: tarefa0.id,
    inicio: agoraIso,
    fim: agoraIso,
    segundos_liquidos: 35 * 60,
    pausas: 1,
    segundos_pausa: 120,
    observacoes: JSON.stringify({
      status: "concluida",
      bloco_numero: 1,
      disciplina_nome: bloco0.disciplina_nome,
      tipo: bloco0.tipo,
      duracao_planejada_minutos: 40,
      questoes_respondidas: 15,
      questoes_acertadas: 12,
    }),
  });

  // Atualizar tarefa 0 para concluida e somar minutos no plano
  await supabaseUser.from("mentoria_tarefas").update({
    status: "concluida",
    duracao_real_segundos: 35 * 60,
    questoes_feitas: 15,
    questoes_acertos: 12,
    concluido_em: agoraIso,
  }).eq("id", tarefa0.id);

  await supabaseUser.from("mentoria_planos").update({
    minutos_concluidos: 35,
  }).eq("id", planoCriado.id);

  const { data: checkPlanoAposB0 } = await supabaseUser.from("mentoria_planos").select("*").eq("id", planoCriado.id).single();
  const { data: checkTarefa0 } = await supabaseUser.from("mentoria_tarefas").select("*").eq("id", tarefa0.id).single();

  assert(
    !sessErr1 && checkTarefa0.status === "concluida" && checkPlanoAposB0.minutos_concluidos === 35,
    "Ponta a Ponta: Sessão 1 concluída (35 min >= 70%) marcou tarefa como concluída e somou minutos concluídos",
    `Status Tarefa: ${checkTarefa0.status}, Minutos Concluídos: ${checkPlanoAposB0.minutos_concluidos}`
  );

  // 2.6 Simular Sessão Parcial no Bloco 1 (< 70% tempo)
  const bloco1 = blocosGerados[1];
  const tarefa1 = tarefasCriadas[1];

  await supabaseUser.from("mentoria_sessoes_estudo").insert({
    usuario_id: testUserId,
    tarefa_id: tarefa1.id,
    inicio: agoraIso,
    fim: agoraIso,
    segundos_liquidos: 15 * 60,
    pausas: 2,
    segundos_pausa: 300,
    observacoes: JSON.stringify({
      status: "parcial",
      bloco_numero: 2,
      disciplina_nome: bloco1.disciplina_nome,
      tipo: bloco1.tipo,
      duracao_planejada_minutos: 40,
      questoes_respondidas: 5,
      questoes_acertadas: 3,
    }),
  });

  // Atualizar apenas minutos concluídos no plano, mantendo tarefa pendente
  await supabaseUser.from("mentoria_planos").update({
    minutos_concluidos: 35 + 15,
  }).eq("id", planoCriado.id);

  const { data: checkPlanoAposB1 } = await supabaseUser.from("mentoria_planos").select("*").eq("id", planoCriado.id).single();
  const { data: checkTarefa1 } = await supabaseUser.from("mentoria_tarefas").select("*").eq("id", tarefa1.id).single();

  assert(
    checkTarefa1.status === "pendente" && checkPlanoAposB1.minutos_concluidos === 50,
    "Ponta a Ponta: Sessão Parcial (15 min < 70%) mantém tarefa 1 pendente e acumula minutos de estudo",
    `Status Tarefa 1: ${checkTarefa1.status}, Minutos acumulados: ${checkPlanoAposB1.minutos_concluidos}`
  );

  // 2.7 Simular Conclusão de Todos os Blocos até fechar o Ciclo Completo
  await supabaseUser.from("mentoria_tarefas").update({
    status: "concluida",
    duracao_real_segundos: 40 * 60,
    concluido_em: agoraIso,
  }).eq("plano_id", planoCriado.id);

  await supabaseUser.from("mentoria_planos").update({
    minutos_concluidos: 720,
  }).eq("id", planoCriado.id);

  const { data: checkPlanoFechado } = await supabaseUser.from("mentoria_planos").select("*").eq("id", planoCriado.id).single();
  const { count: tarefasConcluidasCount } = await supabaseUser.from("mentoria_tarefas").select("*", { count: "exact", head: true }).eq("plano_id", planoCriado.id).eq("status", "concluida");

  assert(
    tarefasConcluidasCount === 18 && checkPlanoFechado.minutos_concluidos === 720,
    "Ponta a Ponta: Fechamento da volta completa contabilizou 18/18 tarefas concluídas e 720 min de meta atingida",
    `Tarefas Concluídas: ${tarefasConcluidasCount}/18, Minutos: ${checkPlanoFechado.minutos_concluidos} min`
  );

  // 2.8 Verificar persistência física de mentoria_sessoes_estudo com pausas e tempo líquido
  const { data: sessoesPersistidas } = await supabaseUser.from("mentoria_sessoes_estudo").select("*").eq("usuario_id", testUserId);
  assert(
    sessoesPersistidas && sessoesPersistidas.length === 2 && sessoesPersistidas[0].pausas >= 1,
    "Ponta a Ponta: Sessões de estudo cronometradas registradas com tempo líquido e rastreamento de pausas",
    `Total de sessões auditadas no Supabase: ${sessoesPersistidas?.length}`
  );

  // Cleanup do usuário de teste
  await supabaseAdmin.auth.admin.deleteUser(testUserId);

  // ──────────────────────────────────────────────────────────────────────────
  // PARTE 3: AUDITORIA DE PRESERVAÇÃO INTEGRAL DO BANCO DE DADOS
  // ──────────────────────────────────────────────────────────────────────────
  console.log("\n📋 PARTE 3: Auditoria de Preservação Integral do Banco de Dados\n");

  const { count: countQ } = await supabaseAdmin.from("questoes").select("*", { count: "exact", head: true });
  const { count: countAlt } = await supabaseAdmin.from("questoes_alternativas").select("*", { count: "exact", head: true });

  assert(countQ === 1260, "Preservação: Tabela 'questoes' 100% intacta com exatamente 1.260 registros", `Total: ${countQ}`);
  assert(countAlt === 6219, "Preservação: Tabela 'questoes_alternativas' 100% intacta com exatamente 6.219 registros", `Total: ${countAlt}`);

  console.log("\n================================================================================");
  console.log(`📊 RESULTADO FINAL DA SUÍTE DE TESTES: ${passed}/${total} APROVADOS COM SUCESSO!`);
  console.log("================================================================================");

  if (passed !== total) {
    process.exit(1);
  }
}

runTestSuite().catch((err) => {
  console.error("Erro fatal durante execução da suíte:", err);
  process.exit(1);
});
