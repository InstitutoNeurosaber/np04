import React from 'react';

export function DetailedBarChart() {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const data = [65, 45, 75, 55, 60, 45, 85, 65, 75, 50, 65, 70];
  const maxValue = Math.max(...data);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-2xl font-bold text-white">65.8%</p>
          <p className="text-sm text-gray-400">Taxa média de abertura</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
            <span className="text-sm text-gray-400">Taxa de Abertura</span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <div className="flex items-end justify-between h-full gap-2">
          {data.map((value, index) => (
            <div key={index} className="relative group">
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#2C2D3C] rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <p className="text-white font-semibold">{value}%</p>
                <p className="text-gray-400 text-xs">{months[index]}</p>
              </div>
              <div
                className="w-12 bg-indigo-500/20 rounded-sm relative group hover:bg-indigo-500/30 transition-colors"
                style={{ height: `${(value / maxValue) * 100}%` }}
              >
                <div
                  className="absolute bottom-0 left-0 w-full bg-indigo-500 rounded-sm transition-all duration-300"
                  style={{ height: `${(value / maxValue) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
        <div>
          <p className="text-sm text-gray-400">Total de E-mails</p>
          <p className="text-lg font-semibold text-white mt-1">12.5K</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">E-mails Abertos</p>
          <p className="text-lg font-semibold text-white mt-1">8.2K</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Crescimento</p>
          <p className="text-lg font-semibold text-green-400 mt-1">+28.5%</p>
        </div>
      </div>
    </div>
  );
}