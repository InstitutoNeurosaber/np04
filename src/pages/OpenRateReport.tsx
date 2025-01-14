import React from 'react';
import { ArrowLeft, Download, Calendar } from 'lucide-react';

export function OpenRateReport() {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const data = [65, 45, 75, 55, 60, 45, 85, 65, 75, 50, 65, 70];
  const maxValue = Math.max(...data);

  return (
    <div className="min-h-screen bg-[#0A0B1A] text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.history.back()}
            className="p-2 bg-[#1C1D2C] rounded-lg hover:bg-[#2C2D3C] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold">Relatório de Taxa de Abertura</h1>
            <p className="text-gray-400 text-sm">Análise detalhada do engajamento por e-mail</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#1C1D2C] text-gray-300 rounded-lg flex items-center gap-2 hover:bg-[#2C2D3C] transition-colors">
            <Download className="w-4 h-4" />
            Exportar relatório
          </button>
          <select className="px-4 py-2 bg-[#1C1D2C] text-gray-300 rounded-lg flex items-center gap-2 hover:bg-[#2C2D3C] transition-colors border border-gray-700">
            <option>Últimos 12 meses</option>
            <option>Últimos 6 meses</option>
            <option>Últimos 3 meses</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1C1D2C] p-6 rounded-xl">
          <p className="text-gray-400 text-sm">Taxa Média de Abertura</p>
          <p className="text-3xl font-bold mt-2">65.8%</p>
          <p className="text-green-400 text-sm mt-1">+28.5% em relação ao período anterior</p>
        </div>
        <div className="bg-[#1C1D2C] p-6 rounded-xl">
          <p className="text-gray-400 text-sm">Total de E-mails Enviados</p>
          <p className="text-3xl font-bold mt-2">12.5K</p>
          <p className="text-green-400 text-sm mt-1">+15.2% em relação ao período anterior</p>
        </div>
        <div className="bg-[#1C1D2C] p-6 rounded-xl">
          <p className="text-gray-400 text-sm">E-mails Abertos</p>
          <p className="text-3xl font-bold mt-2">8.2K</p>
          <p className="text-green-400 text-sm mt-1">+32.1% em relação ao período anterior</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-[#1C1D2C] rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Taxa de Abertura por Período</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
              <span className="text-sm text-gray-400">Taxa de Abertura</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Jan 2024 - Dez 2024</span>
            </div>
          </div>
        </div>

        <div className="h-96">
          <div className="flex items-end justify-between h-full gap-2">
            {data.map((value, index) => (
              <div key={index} className="relative group">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#2C2D3C] rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <p className="text-white font-semibold">{value}%</p>
                  <p className="text-gray-400 text-xs">{months[index]}</p>
                </div>
                <div
                  className="w-16 bg-indigo-500/20 rounded-sm relative group hover:bg-indigo-500/30 transition-colors"
                  style={{ height: `${(value / maxValue) * 100}%` }}
                >
                  <div
                    className="absolute bottom-0 left-0 w-full bg-indigo-500 rounded-sm transition-all duration-300"
                    style={{ height: `${(value / maxValue) * 100}%` }}
                  ></div>
                </div>
                <div className="text-center mt-2">
                  <span className="text-sm text-gray-400">{months[index]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="bg-[#1C1D2C] rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Melhores Períodos</h3>
          <div className="space-y-4">
            {[
              { month: 'Julho', rate: '85%', emails: '1.2K' },
              { month: 'Março', rate: '75%', emails: '980' },
              { month: 'Setembro', rate: '75%', emails: '1.1K' },
            ].map((period, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#2C2D3C] rounded-lg">
                <div>
                  <p className="font-semibold">{period.month}</p>
                  <p className="text-sm text-gray-400">{period.emails} e-mails</p>
                </div>
                <p className="text-lg font-bold text-green-400">{period.rate}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1C1D2C] rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Períodos para Melhorar</h3>
          <div className="space-y-4">
            {[
              { month: 'Fevereiro', rate: '45%', emails: '850' },
              { month: 'Junho', rate: '45%', emails: '920' },
              { month: 'Outubro', rate: '50%', emails: '890' },
            ].map((period, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#2C2D3C] rounded-lg">
                <div>
                  <p className="font-semibold">{period.month}</p>
                  <p className="text-sm text-gray-400">{period.emails} e-mails</p>
                </div>
                <p className="text-lg font-bold text-red-400">{period.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}