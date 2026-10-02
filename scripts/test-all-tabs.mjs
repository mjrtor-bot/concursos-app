import { spawn } from 'node:child_process';
import http from 'node:http';

const PORT = 3020;
const BASE_URL = `http://localhost:${PORT}`;

const ROUTES_TO_TEST = [
  // ── Público / Institucional / Auth ──
  { path: '/', expected: [200], group: 'Público' },
  { path: '/login', expected: [200], group: 'Público' },
  { path: '/cadastro', expected: [200], group: 'Público' },
  { path: '/recuperar-senha', expected: [200], group: 'Público' },
  { path: '/redefinir-senha', expected: [200], group: 'Público' },
  { path: '/onboarding', expected: [200], group: 'Público' },
  { path: '/termos', expected: [200], group: 'Público' },
  { path: '/privacidade', expected: [200], group: 'Público' },
  { path: '/reset', expected: [200], group: 'Público' },

  // ── Aluno / Principal ──
  { path: '/dashboard', expected: [200, 307], group: 'Aluno' },
  { path: '/dashboard/simple', expected: [200, 307], group: 'Aluno' },
  { path: '/questoes', expected: [200, 307], group: 'Aluno' },
  { path: '/questoes/externas', expected: [200, 307], group: 'Aluno' },
  { path: '/disciplinas', expected: [200, 307], group: 'Aluno' },
  { path: '/desempenho', expected: [200, 307], group: 'Aluno' },
  { path: '/caderno-de-erros', expected: [200, 307], group: 'Aluno' },
  { path: '/simulados', expected: [200, 307], group: 'Aluno' },
  { path: '/concursos', expected: [200, 307], group: 'Aluno' },
  { path: '/perfil', expected: [200, 307], group: 'Aluno' },
  { path: '/ranking', expected: [200, 307], group: 'Aluno' },

  // ── Mentoria ──
  { path: '/mentoria', expected: [200, 307], group: 'Mentoria' },
  { path: '/mentoria/diagnostico', expected: [200, 307], group: 'Mentoria' },
  { path: '/mentoria/plano', expected: [200, 307], group: 'Mentoria' },
  { path: '/mentoria/hoje', expected: [200, 307], group: 'Mentoria' },
  { path: '/mentoria/semanal', expected: [200, 307], group: 'Mentoria' },
  { path: '/mentoria/revisoes', expected: [200, 307], group: 'Mentoria' },
  { path: '/mentoria/evolucao', expected: [200, 307], group: 'Mentoria' },
  { path: '/mentoria/configurar', expected: [200, 307], group: 'Mentoria' },
  { path: '/mentoria/comunicacao', expected: [200, 307], group: 'Mentoria' },
  { path: '/mentoria/edital', expected: [200, 307], group: 'Mentoria' },
  { path: '/mentoria/edital/biblioteca', expected: [200, 307], group: 'Mentoria' },
  { path: '/mentoria/edital/importados', expected: [200, 307], group: 'Mentoria' },

  // ── Admin ──
  { path: '/admin/questoes', expected: [200, 307], group: 'Admin' },
  { path: '/admin/questoes/nova', expected: [200, 307], group: 'Admin' },
  { path: '/admin/questoes/importar', expected: [200, 307], group: 'Admin' },
  { path: '/admin/concursos', expected: [200, 307], group: 'Admin' },
  { path: '/admin/editais', expected: [200, 307], group: 'Admin' },
  { path: '/admin/usuarios', expected: [200, 307], group: 'Admin' },
  { path: '/admin/conteudos', expected: [200, 307], group: 'Admin' },

  // ── APIs ──
  { path: '/api/questoes', expected: [200], group: 'API' },
  { path: '/api/disciplinas', expected: [200], group: 'API' },
  { path: '/api/assuntos', expected: [200], group: 'API' },
  { path: '/api/gamificacao', expected: [200, 401], group: 'API' },
  { path: '/api/concursos/alvo', expected: [200, 401], group: 'API' },
  { path: '/api/editais', expected: [200, 401], group: 'API' },
  { path: '/api/editais/importados', expected: [200, 401], group: 'API' },
  { path: '/api/mentoria/questoes', expected: [200, 401], group: 'API' },
  { path: '/api/mentoria/revisoes', expected: [200, 401], group: 'API' },
  { path: '/api/mentoria/calendario', expected: [200, 401], group: 'API' },
  { path: '/api/mentoria/config-plano', expected: [200, 401], group: 'API' },
  { path: '/api/mentoria/conteudos', expected: [200, 401], group: 'API' },
  { path: '/api/mentoria/mural', expected: [200, 401], group: 'API' },
  { path: '/api/mentoria/sessao-ativa', expected: [200, 401], group: 'API' },
  { path: '/api/mentoria/inbox', expected: [200, 401], group: 'API' },
];

async function fetchUrl(url) {
  return new Promise((resolve) => {
    const req = http.get(url, { headers: { 'User-Agent': 'SystemTester/1.0' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          bodyLength: data.length,
          snippet: data.slice(0, 300)
        });
      });
    });
    req.on('error', (err) => {
      resolve({ status: 0, error: err.message });
    });
    req.setTimeout(8000, () => {
      req.destroy();
      resolve({ status: 408, error: 'Timeout' });
    });
  });
}

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetchUrl(url);
      if (res.status > 0) return true;
    } catch {
      // wait
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

async function main() {
  console.log(`[Test] Iniciando servidor Next.js na porta ${PORT}...`);
  const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: true
  });

  server.stdout.on('data', (d) => {
    // console.log(`[Next.js stdout] ${d}`);
  });
  server.stderr.on('data', (d) => {
    // console.error(`[Next.js stderr] ${d}`);
  });

  try {
    const ready = await waitForServer(`${BASE_URL}/`);
    if (!ready) {
      console.error('[Erro] O servidor não respondeu dentro do tempo limite.');
      process.exit(1);
    }
    console.log('[Test] Servidor pronto. Iniciando bateria de testes em todas as rotas e abas...\n');

    const results = [];
    for (const r of ROUTES_TO_TEST) {
      const fullUrl = `${BASE_URL}${r.path}`;
      const res = await fetchUrl(fullUrl);
      const isSuccess = r.expected.includes(res.status) || (res.status === 200);
      const resultObj = {
        group: r.group,
        path: r.path,
        status: res.status,
        success: isSuccess,
        snippet: res.snippet ? res.snippet.replace(/\s+/g, ' ').slice(0, 100) : ''
      };
      results.push(resultObj);
      const icon = isSuccess ? '✅' : '❌';
      console.log(`${icon} [${r.group}] ${r.path} -> Status: ${res.status}`);
    }

    console.log('\n=============================================');
    console.log(`TOTAL TESTADO: ${results.length} rotas`);
    const passed = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    console.log(`SUCESSO: ${passed} | FALHAS: ${failed}`);
    console.log('=============================================\n');

    if (failed > 0) {
      console.log('Rotas com falha:');
      results.filter(r => !r.success).forEach(f => {
        console.log(` - ${f.path}: status ${f.status}`);
      });
    }

  } finally {
    console.log('[Test] Finalizando servidor Next.js...');
    server.kill();
  }
}

main().catch(console.error);
