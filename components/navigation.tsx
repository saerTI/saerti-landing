'use client';

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">saerTI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#productos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Productos
            </a>
            <a href="#beta" className="text-gray-700 hover:text-blue-600 transition-colors">
              Beta Gratis
            </a>
            
            <SignedOut>
              <Link 
                href="/sign-in" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
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
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Dashboard
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a 
              href="#productos" 
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Productos
            </a>
            <a 
              href="#beta" 
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Beta Gratis
            </a>
            
            <SignedOut>
              <Link 
                href="/sign-in" 
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link 
                href="/sign-up" 
                className="block btn-primary text-center"
              >
                Comenzar Gratis
              </Link>
            </SignedOut>
            
            <SignedIn>
              <Link 
                href="/dashboard" 
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                Dashboard
              </Link>
            </SignedIn>
          </div>
        )}
      </div>
    </nav>
  );
}