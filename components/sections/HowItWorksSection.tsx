'use client';

import { UserPlus, Zap, TrendingUp } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Crea tu cuenta',
      description: 'Regístrate gratis en segundos con Google o tu email. Sin tarjeta de crédito requerida.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      number: '02',
      icon: Zap,
      title: 'Elige tu herramienta',
      description: 'Selecciona Budget Analyzer para análisis IA o Cash Flow para gestión financiera.',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Empieza a optimizar',
      description: 'Comienza a analizar presupuestos o registrar transacciones. Resultados en minutos.',
      gradient: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comienza en{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              3 simples pasos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desde el registro hasta tu primer análisis en menos de 2 minutos
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Lines (desktop only) */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-xl group"
              >
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {idx + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-6 mb-6">
                  <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            ¿Listo para comenzar?
          </p>
          <a
            href="#precios"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span>Ver Planes</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}