import React from 'react';
import { User } from 'lucide-react';

export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center p-6 bg-navy-900">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard Educacional</h1>
        <p className="text-gray-400">Análise integrada de dados dos alunos</p>
      </div>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Exportar dados
        </button>
        <div className="flex items-center gap-2 text-white">
          <User className="w-6 h-6" />
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
}