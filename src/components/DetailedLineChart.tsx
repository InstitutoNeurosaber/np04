import React from 'react';

export function DetailedLineChart() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-2xl font-bold text-white">2.4K</p>
          <p className="text-sm text-gray-400">Interações totais</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="text-sm text-gray-400">Interações</span>
          </div>
        </div>
      </div>

      <div className="h-64 relative">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="detailedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(74, 222, 128, 0.2)" />
              <stop offset="100%" stopColor="rgb(74, 222, 128, 0)" />
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 50}
              x2="100%"
              y2={i * 50}
              stroke="#2C2D3C"
              strokeWidth="1"
            />
          ))}

          {/* Line */}
          <path
            d="M0,160 C100,140 200,180 300,100 S500,160 600,120"
            fill="none"
            stroke="#4ADE80"
            strokeWidth="3"
          />
          <path
            d="M0,160 C100,140 200,180 300,100 S500,160 600,120 V200 H0 Z"
            fill="url(#detailedGradient)"
            opacity="0.3"
          />

          {/* Data points */}
          {[
            { x: 0, y: 160 },
            { x: 100, y: 140 },
            { x: 200, y: 180 },
            { x: 300, y: 100 },
            { x: 400, y: 140 },
            { x: 500, y: 160 },
            { x: 600, y: 120 }
          ].map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#4ADE80"
              className="hover:r-6 transition-all duration-200"
            />
          ))}
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
        <div>
          <p className="text-sm text-gray-400">Alunos Ativos</p>
          <p className="text-lg font-semibold text-white mt-1">1.2K</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Média de Interações</p>
          <p className="text-lg font-semibold text-white mt-1">45.8</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Crescimento</p>
          <p className="text-lg font-semibold text-green-400 mt-1">+16.0%</p>
        </div>
      </div>
    </div>
  );
}