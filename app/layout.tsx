// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'saerTI - Software de Gestión Empresarial Inteligente',
  description: 'Gestiona tu empresa con flujo de caja automático y asistente IA. Hecho en Chile para emprendedores chilenos.',
  keywords: ['flujo de caja', 'gestión empresarial', 'software chile', 'IA empresarial', 'saerTI'],
  authors: [{ name: 'saerTI' }],
  creator: 'saerTI',
  publisher: 'saerTI',
  metadataBase: new URL('https://saerti.cl'),
  openGraph: {
    title: 'saerTI - Software de Gestión Empresarial',
    description: 'Gestiona tu empresa con flujo de caja automático y asistente IA',
    url: 'https://saerti.cl',
    siteName: 'saerTI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'saerTI - Software de Gestión Empresarial',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'saerTI - Software de Gestión Empresarial',
    description: 'Gestiona tu empresa con flujo de caja automático y asistente IA',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="es-CL">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}