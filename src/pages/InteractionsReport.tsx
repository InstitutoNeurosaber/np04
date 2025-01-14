import React from 'react';
import { ArrowLeft, Download, Calendar, Activity } from 'lucide-react';
import { DetailedLineChart } from '../components/DetailedLineChart';

export function InteractionsReport() {
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
            <h1 className="text-2xl font-bold">Relatório de Interações</h1>
            <p className="text-gray-400 text-sm">Análise detalhada dos pontos de interação dos alunos</p>
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

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1C1D2C] p-6 rounded-xl">
          <p className="text-gray-400 text-sm">Total de Pontos</p>
          <p className="text-3xl font-bold mt-2">45.8K</p>
          <p className="text-green-400 text-sm mt-1">+16.0% em relação ao período anterior</p>
        </div>
        <div className="bg-[#1C1D2C] p-6 rounded-xl">
          <p className="text-gray-400 text-sm">Média por Aluno</p>
          <p className="text-3xl font-bold mt-2">1.2K</p>
          <p className="text-green-400 text-sm mt-1">+12.5% em relação ao período anterior</p>
        </div>
        <div className="bg-[#1C1D2C] p-6 rounded-xl">
          <p className="text-gray-400 text-sm">Alunos Ativos</p>
          <p className="text-3xl font-bold mt-2">2.4K</p>
          <p className="text-green-400 text-sm mt-1">+8.3% em relação ao período anterior</p>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-[#1C1D2C] rounded-xl p-6 mb-8">
        <DetailedLineChart />
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#1C1D2C] rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Alunos Mais Engajados</h3>
          <div className="space-y-4">
            {[
              { name: 'João Silva', points: '2.5K', change: '+45%' },
              { name: 'Maria Santos', points: '2.1K', change: '+38%' },
              { name: 'Pedro Costa', points: '1.8K', change: '+32%' },
            ].map((student, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#2C2D3C] rounded-lg">
                <div>
                  <p className="font-semibold">{student.name}</p>
                  <p className="text-sm text-gray-400">{student.points} pontos</p>
                </div>
                <p className="text-lg font-bold text-green-400">{student.change}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1C1D2C] rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Distribuição de Pontos</h3>
          <div className="space-y-4">
            <div className="p-4 bg-[#2C2D3C] rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">Pontos de Abertura</p>
                <p className="text-lg font-bold">24.3K</p>
              </div>
              <div className="h-2 bg-[#1C1D2C] rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="p-4 bg-[#2C2D3C] rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">Pontos de Clique</p>
                <p className="text-lg font-bold">18.5K</p>
              </div>
              <div className="h-2 bg-[#1C1D2C] rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="p-4 bg-[#2C2D3C] rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">Pontos de Engajamento</p>
                <p className="text-lg font-bold">3.0K</p>
              </div>
              <div className="h-2 bg-[#1C1D2C] rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}