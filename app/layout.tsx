import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { esES } from '@clerk/localizations';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'saerTI - Software de Gestión Empresarial Inteligente',
  description: 'Optimiza tu negocio con IA. Flujo de caja automatizado y asistente virtual para emprendedores chilenos.',
  keywords: 'software empresarial, flujo de caja, IA, chatbot, gestión, Chile',
  authors: [{ name: 'saerTI' }],
  openGraph: {
    title: 'saerTI - Software de Gestión Empresarial Inteligente',
    description: 'Optimiza tu negocio con IA. Flujo de caja automatizado y asistente virtual.',
    url: 'https://saerti.cl',
    siteName: 'saerTI',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'saerTI - Software de Gestión Empresarial',
    description: 'Optimiza tu negocio con IA',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="es-CL">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}