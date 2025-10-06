'use client';

import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
      
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Sparkles size={16} />
            <span>Únete al programa Beta - 100% Gratis</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Gestiona tu negocio con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Inteligencia Artificial
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Software empresarial chileno que automatiza tu flujo de caja y responde tus consultas al instante. 
            Diseñado para emprendedores que quieren crecer.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#beta"
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              Acceso Beta Gratis
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <Link 
              href="/sign-up"
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <TrendingUp size={20} />
              Ver Demo
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white" />
              </div>
              <span>+50 emprendedores esperando</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-yellow-500" />
              <span>100% desarrollado en Chile</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Screenshot Placeholder */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <TrendingUp size={64} className="mx-auto text-blue-600 mb-4" />
                <p className="text-gray-600 text-lg">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}