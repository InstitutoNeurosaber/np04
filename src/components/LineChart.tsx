import React from 'react';

export function LineChart() {
  return (
    <div className="relative h-[300px]">
      <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(99, 102, 241, 0.2)" />
            <stop offset="100%" stopColor="rgb(99, 102, 241, 0)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(34, 211, 238, 0.2)" />
            <stop offset="100%" stopColor="rgb(34, 211, 238, 0)" />
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={i * 50}
            x2="800"
            y2={i * 50}
            stroke="#2C2D3C"
            strokeWidth="1"
          />
        ))}

        {/* E-mails Abertos line */}
        <path
          d="M0,250 L100,230 L200,210 L300,180 L400,150 L500,120 L600,90 L700,60 L800,30"
          fill="none"
          stroke="#6366F1"
          strokeWidth="2"
        />
        <path
          d="M0,250 L100,230 L200,210 L300,180 L400,150 L500,120 L600,90 L700,60 L800,30 L800,300 L0,300 Z"
          fill="url(#gradient1)"
          opacity="0.3"
        />

        {/* Links Clicados line */}
        <path
          d="M0,200 L100,220 L200,210 L300,220 L400,200 L500,210 L600,190 L700,200 L800,180"
          fill="none"
          stroke="#22D3EE"
          strokeWidth="2"
        />
        <path
          d="M0,200 L100,220 L200,210 L300,220 L400,200 L500,210 L600,190 L700,200 L800,180 L800,300 L0,300 Z"
          fill="url(#gradient2)"
          opacity="0.3"
        />

        {/* Data points */}
        <circle cx="400" cy="150" r="4" fill="#6366F1" />
        <circle cx="400" cy="150" r="8" fill="#6366F1" opacity="0.2" />
      </svg>

      {/* X-axis labels */}
      <div className="flex justify-between text-sm text-gray-400 mt-4 px-2">
        {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </div>
  );
}