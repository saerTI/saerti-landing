'use client';

import { DollarSign, Bot, ArrowRight, Check } from 'lucide-react';
import { getProductUrls } from '@/lib/config';

const products = [
  {
    icon: DollarSign,
    name: 'Flujo de Caja Inteligente',
    subdomain: 'admin.saerti.cl',
    description: 'Control financiero automatizado para tu negocio',
    features: [
      'Registro automático de ingresos y egresos',
      'Proyecciones con IA basadas en tu historial',
      'Alertas de flujo bajo y oportunidades',
      'Reportes visuales en tiempo real',
      'Integración con bancos chilenos',
    ],
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
    urlKey: 'admin' as const,
  },
  {
    icon: Bot,
    name: 'Asistente Virtual IA',
    subdomain: 'chat.saerti.cl',
    description: 'Respuestas instantáneas sobre tu negocio',
    features: [
      '50 consultas IA mensuales incluidas',
      'Responde dudas sobre finanzas, impuestos, legal',
      'Análisis de documentos y facturas',
      'Consejos personalizados para tu industria',
      'Disponible 24/7 vía WhatsApp',
    ],
    color: 'from-blue-500 to-purple-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    urlKey: 'chat' as const,
  },
];

export default function ProductsSection() {
  const urls = getProductUrls();

  return (
    <section id="productos" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Dos herramientas. Un solo objetivo.
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hemos creado el ecosistema perfecto para que gestiones tu negocio sin complicaciones
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => {
          const Icon = product.icon;
          return (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden card-hover`}
            >
              {/* Header con gradiente */}
              <div className={`bg-gradient-to-br ${product.color} p-8 text-white`}>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-white/90 mb-3">{product.description}</p>
                <div className={`inline-block ${product.bgColor} ${product.textColor} px-3 py-1 rounded-full text-sm font-medium`}>
                  {product.subdomain}
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#beta"
                  className={`w-full btn-primary flex items-center justify-center gap-2 group`}
                >
                  Probar en Beta
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Beneficio adicional */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Todo integrado en un solo lugar
          </h3>
          <p className="text-xl text-blue-100 mb-6">
            Tus datos fluyen automáticamente entre ambas herramientas. 
            El asistente IA conoce tu flujo de caja y te da consejos precisos.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <Sparkles size={20} />
            <span className="font-semibold">Un solo inicio de sesión para todo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sparkles({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
    </svg>
  );
}