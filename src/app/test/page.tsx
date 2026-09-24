export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">✓ ConcursosApp</h1>
        <p className="text-slate-600 mb-6">
          Servidor Next.js está funcionando corretamente!
        </p>
        <div className="space-y-3">
          <div className="p-3 bg-green-50 text-green-700 rounded-lg">
            ✅ Status: Online
          </div>
          <div className="p-3 bg-blue-50 text-blue-700 rounded-lg">
            🔗 Porta: 3000
          </div>
          <div className="p-3 bg-amber-50 text-amber-700 rounded-lg">
            ⚡ Turbopack: Ativo
          </div>
        </div>
        <a
          href="/dashboard"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Ir para Dashboard
        </a>
      </div>
    </div>
  );
}