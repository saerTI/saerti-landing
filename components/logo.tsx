// components/logo.tsx
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  href?: string;
  className?: string;
  textColor?: 'dark' | 'light';
}

const sizes = {
  sm: { width: 28, height: 28, text: 'text-base' },
  md: { width: 36, height: 36, text: 'text-xl' },
  lg: { width: 48, height: 48, text: 'text-2xl' }
};

export default function Logo({ 
  size = 'md', 
  showText = true, 
  href = '/',
  className = '',
  textColor = 'dark'
}: LogoProps) {
  const { width, height, text } = sizes[size];
  const textColorClass = textColor === 'light' ? 'text-white' : 'text-gray-900';
  
  const LogoContent = () => (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo SVG inline basado en tu imagen */}
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Grid 2x2 de cuadrados azules */}
        <rect x="4" y="4" width="14" height="14" rx="2" fill="#2563EB"/>
        <rect x="22" y="4" width="14" height="14" rx="2" fill="#2563EB"/>
        <rect x="4" y="22" width="14" height="14" rx="2" fill="#2563EB"/>
        <rect x="22" y="22" width="14" height="14" rx="2" fill="#2563EB"/>
        
        {/* Iconos en cada cuadrado */}
        <path d="M11 8v4l3-2-3-2z" fill="white"/>
        <circle cx="29" cy="11" r="2" fill="white"/>
        <rect x="8" y="26" width="6" height="6" rx="1" fill="white"/>
        <path d="M26 26l4 4m0-4l-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      
      {showText && (
        <span className={`${text} font-bold ${textColorClass}`}>
          saer<span className="text-blue-600">TI</span>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center hover:opacity-90 transition-opacity">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}

// Versión para usar con archivo PNG/SVG cuando lo tengas
export function LogoWithImage({ 
  size = 'md', 
  showText = true, 
  href = '/',
  className = '',
  textColor = 'dark'
}: LogoProps) {
  const { width, height, text } = sizes[size];
  const textColorClass = textColor === 'light' ? 'text-white' : 'text-gray-900';
  
  const LogoContent = () => (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.png"
        alt="resuelveYA"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
      
      {showText && (
        <span className={`${text} font-bold ${textColorClass}`}>
          saer<span className="text-blue-600">TI</span>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center hover:opacity-90 transition-opacity">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}