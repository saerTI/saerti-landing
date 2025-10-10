'use client';

import { Bot, ArrowRight, Check, Sparkles, Brain, Zap, FileText, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Análisis de Documentos',
    description: 'Sube Excel, PDF o CSV y obtén insights instantáneos',
  },
  {
    icon: Brain,
    title: 'Chat Inteligente',
    description: 'Pregunta en lenguaje natural sobre tus presupuestos',
  },
  {
    icon: BarChart3,
    title: 'Comparaciones Automáticas',
    description: 'Compara múltiples presupuestos y detecta desviaciones',
  },
  {
    icon: Zap,
    title: 'Proyecciones con IA',
    description: 'Predicciones basadas en datos históricos y tendencias',
  },
];

export default function ProductsSection() {
  return (
    <section id="productos" className="section-container bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles size={16} />
          <span>Potenciado por IA Avanzada</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white mb-4">
          Tu Asistente de Presupuestos
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Análisis presupuestario inteligente que te ahorra horas de trabajo manual
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Card Principal */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
          {/* Header */}
          <div className="p-8 sm:p-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Bot size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-black mb-1">Asistente IA de Presupuestos</h3>
                <p className="text-white/80 text-lg">Análisis instantáneo y respuestas inteligentes</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 p-8 sm:p-12 bg-white/10 backdrop-blur-md">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lista de Beneficios */}
          <div className="p-8 sm:p-12 bg-slate-900/50">
            <h4 className="text-white font-bold text-xl mb-6">Lo que puedes hacer:</h4>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                '50 consultas IA incluidas mensualmente',
                'Análisis de múltiples documentos simultáneamente',
                'Comparaciones presupuesto vs real',
                'Detección de anomalías y desviaciones',
                'Proyecciones y tendencias automáticas',
                'Exporta reportes profesionales',
                'Respuestas en lenguaje natural',
                'Disponible 24/7 desde cualquier lugar',
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="p-8 sm:p-12 bg-gradient-to-r from-cyan-500 to-blue-600">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white font-bold text-2xl mb-1">Comienza ahora</p>
                <p className="text-white/80">Acceso beta gratuito por tiempo limitado</p>
              </div>
              <a 
                href="#beta"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Probar Gratis
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Casos de Uso */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="text-white font-bold text-lg mb-2">Control de Gastos</h4>
            <p className="text-white/70">Monitorea y optimiza cada categoría presupuestaria</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="text-4xl mb-3">📈</div>
            <h4 className="text-white font-bold text-lg mb-2">Proyecciones</h4>
            <p className="text-white/70">Predice gastos futuros con precisión basada en IA</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="text-4xl mb-3">💡</div>
            <h4 className="text-white font-bold text-lg mb-2">Insights Accionables</h4>
            <p className="text-white/70">Recomendaciones inteligentes para optimizar recursos</p>
          </div>
        </div>
      </div>
    </section>
  );
}