import React from 'react';

export function SmallLineChart() {
  return (
    <div className="relative h-full">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="smallGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(74, 222, 128, 0.2)" />
            <stop offset="100%" stopColor="rgb(74, 222, 128, 0)" />
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        {[...Array(4)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={i * 25}
            x2="100%"
            y2={i * 25}
            stroke="#2C2D3C"
            strokeWidth="1"
          />
        ))}

        {/* Line */}
        <path
          d="M0,80 C50,70 100,90 150,50 S250,80 300,60"
          fill="none"
          stroke="#4ADE80"
          strokeWidth="2"
        />
        <path
          d="M0,80 C50,70 100,90 150,50 S250,80 300,60 V100 H0 Z"
          fill="url(#smallGradient)"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}