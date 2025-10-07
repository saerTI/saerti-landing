import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import { Sparkles, TrendingUp, Bot, ExternalLink, Zap } from 'lucide-react';
import Link from 'next/link';
import { getProductUrls } from '@/lib/config';
import Logo from '@/components/logo';

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  // Obtener URLs dinámicas
  const urls = getProductUrls();

  // Obtener metadata del usuario
  const aiQueriesRemaining = (user.privateMetadata?.aiQueriesRemaining as number) || 50;
  const aiQueriesTotal = (user.privateMetadata?.aiQueriesTotal as number) || 50;
  const betaAccess = user.publicMetadata?.betaAccess as boolean;
  const companyName = user.publicMetadata?.companyName as string;

  const queriesUsed = aiQueriesTotal - aiQueriesRemaining;
  const queriesPercentage = (aiQueriesRemaining / aiQueriesTotal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {/* ← Reemplazar el div con Logo */}
              <Logo size="md" showText />
              {betaAccess && (
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                  Beta Tester
                </span>
              )}
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            ¡Hola, {user.firstName || 'Usuario'}! 👋
          </h2>
          <p className="text-gray-600">
            {companyName ? `Gestiona ${companyName} desde aquí` : 'Bienvenido a tu panel de control'}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Consultas IA Restantes */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Sparkles size={24} className="text-purple-600" />
              </div>
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                queriesPercentage > 50 ? 'bg-green-100 text-green-700' :
                queriesPercentage > 20 ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {queriesPercentage.toFixed(0)}%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {aiQueriesRemaining} de {aiQueriesTotal}
            </h3>
            <p className="text-gray-600 text-sm mb-3">Consultas IA disponibles</p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  queriesPercentage > 50 ? 'bg-green-500' :
                  queriesPercentage > 20 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${queriesPercentage}%` }}
              />
            </div>
            <p className="text-xs text-gray-500">
              Has usado {queriesUsed} consultas este mes
            </p>
          </div>

          {/* Estado Beta */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-1">
              Acceso Beta
            </h3>
            <p className="text-blue-100 text-sm mb-3">
              Estás probando la versión beta
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
              <p className="text-xs font-medium">
                ✨ Todas las funciones desbloqueadas
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Acciones Rápidas
            </h3>
            <div className="space-y-3">
              <a 
                href={urls.chat}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left"
              >
                <Bot size={20} className="text-blue-600" />
                <span className="text-sm font-medium text-gray-900">
                  Nueva Consulta IA
                </span>
              </a>
              <a 
                href={urls.admin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left"
              >
                <TrendingUp size={20} className="text-green-600" />
                <span className="text-sm font-medium text-gray-900">
                  Ver Flujo de Caja
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Products Access Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Flujo de Caja Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 card-hover">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white">
              <TrendingUp size={32} className="mb-3" />
              <h3 className="text-2xl font-bold mb-2">Flujo de Caja</h3>
              <p className="text-green-100">
                Gestiona tus finanzas empresariales
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>✓ Registro automático de ingresos/egresos</li>
                <li>✓ Proyecciones con IA</li>
                <li>✓ Reportes en tiempo real</li>
              </ul>
              <a
                href={urls.admin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                Abrir Admin
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Asistente IA Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 card-hover">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
              <Bot size={32} className="mb-3" />
              <h3 className="text-2xl font-bold mb-2">Asistente IA</h3>
              <p className="text-blue-100">
                Consultas instantáneas sobre tu negocio
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>✓ {aiQueriesRemaining} consultas disponibles</li>
                <li>✓ Respuestas personalizadas</li>
                <li>✓ Disponible 24/7</li>
              </ul>
              <a
                href={urls.chat}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                Abrir Chat IA
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            ¿Necesitas ayuda?
          </h3>
          <p className="text-gray-600 mb-4">
            Como beta tester, tu feedback es valioso. Contáctanos si encuentras algún problema o tienes sugerencias.
          </p>
          <Link href="mailto:soporte@saerti.cl" className="text-blue-600 hover:text-blue-700 font-medium">
            soporte@saerti.cl →
          </Link>
        </div>
      </main>
    </div>
  );
}