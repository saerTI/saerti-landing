// components/GoogleAnalytics.tsx
'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = 'AW-17500708468';

export default function GoogleAnalytics() {
  // Solo cargar en producción (opcional - remueve el if para cargar siempre)
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// 🎯 FUNCIONES AUXILIARES PARA TRACKING

// Trackear evento personalizado
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Trackear conversión (registro beta, sign up, etc.)
export const trackConversion = (conversionLabel: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GA_MEASUREMENT_ID}/${conversionLabel}`,
      value: value,
      currency: 'CLP',
    });
  }
};

// Trackear página vista
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Type definitions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}