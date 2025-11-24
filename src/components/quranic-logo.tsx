// src/components/quranic-logo.tsx
import type React from 'react';

interface QuranicLogoProps extends React.SVGProps<SVGSVGElement> {}

const QuranicLogo: React.FC<QuranicLogoProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    {...props}
    // data-ai-hint: book quran
  >
    {/* Simplified representation of the open book logo */}
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "hsl(var(--secondary))", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "hsl(var(--secondary) / 0.8)", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "hsl(var(--accent) / 0.8)", stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    {/* Book Shape */}
    <path
      d="M10 90 Q50 70 90 90 L90 15 Q85 10 50 10 Q15 10 10 15 Z"
      fill="url(#goldGradient)"
      stroke="hsl(var(--foreground) / 0.5)"
      strokeWidth="1"
    />
    <path
      d="M15 85 Q50 65 85 85 L85 20 Q80 15 50 15 Q20 15 15 20 Z"
      fill="url(#greenGradient)"
      stroke="hsl(var(--foreground) / 0.3)"
      strokeWidth="0.5"
    />
    
    {/* Simplified Calligraphy placeholder - an abstract representation */}
    <circle cx="50" cy="35" r="10" fill="hsl(var(--foreground))" opacity="0.8" />
    <rect x="35" y="48" width="30" height="5" fill="hsl(var(--foreground))" opacity="0.7" rx="2"/>
    <rect x="40" y="55" width="20" height="4" fill="hsl(var(--foreground))" opacity="0.6" rx="2"/>

    {/* Rays / Shine effect */}
    {[...Array(12)].map((_, i) => (
      <line
        key={i}
        x1="50"
        y1="35"
        x2={50 + 30 * Math.cos(i * Math.PI / 6)}
        y2={35 + 30 * Math.sin(i * Math.PI / 6)}
        stroke="hsl(var(--secondary))"
        strokeWidth="0.7"
        opacity="0.5"
      />
    ))}
  </svg>
);

export default QuranicLogo;
