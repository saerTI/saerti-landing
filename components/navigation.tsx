// components/navigation.tsx (MODIFICADO)
'use client';

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" href="/" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <SignedOut>
              <a 
                href="#productos" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Productos
              </a>
              <a 
                href="#caracteristicas" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Características
              </a>
              <a 
                href="#precios" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Precios
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                FAQ
              </a>
              <Link 
                href="/sign-in" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Iniciar Sesión
              </Link>
              <Link 
                href="/sign-up" 
                className="btn-primary"
              >
                Comenzar Gratis
              </Link>
            </SignedOut>
            
            <SignedIn>
              <Link 
                href="/dashboard" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Dashboard
              </Link>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-100">
            <SignedOut>
              <a 
                href="#productos" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Productos
              </a>
              <a 
                href="#caracteristicas" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Características
              </a>
              <a 
                href="#precios" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Precios
              </a>
              <a 
                href="#faq" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <Link 
                href="/sign-in" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Iniciar Sesión
              </Link>
              <Link 
                href="/sign-up" 
                className="block btn-primary text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Comenzar Gratis
              </Link>
            </SignedOut>
            
            <SignedIn>
              <Link 
                href="/dashboard" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <div className="pt-2">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        )}
      </div>
    </nav>
  );
}