'use client';

import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  Users, 
  BarChart3,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: 'Análisis con IA',
      description: 'Tecnología de inteligencia artificial que analiza tus presupuestos y detecta oportunidades de ahorro.',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      title: 'Visualización en Tiempo Real',
      description: 'Gráficos interactivos que muestran tu flujo de caja actualizado al instante.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Clock,
      title: 'Ahorra Tiempo',
      description: 'Análisis de presupuestos en minutos en lugar de horas. Automatiza tareas repetitivas.',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: Shield,
      title: 'Datos Seguros',
      description: 'Encriptación de nivel bancario. Tus datos están protegidos con los más altos estándares de seguridad.',
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Multi-Organización',
      description: 'Gestiona múltiples negocios o proyectos desde una sola cuenta.',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: BarChart3,
      title: 'Reportes Profesionales',
      description: 'Genera reportes detallados en PDF listos para compartir con tu equipo o clientes.',
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4" />
            <span>Todo lo que necesitas</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Características que{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              impulsan tu negocio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Herramientas profesionales diseñadas para simplificar la gestión financiera de tu empresa
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-xl"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />

                {/* Icon */}
                <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Precisión en análisis</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">&lt; 2min</div>
              <div className="text-blue-100">Tiempo de análisis</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Gratis para empezar</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Disponibilidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}