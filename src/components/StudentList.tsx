import React from 'react';
import { Student } from '../types/student';
import { Mail, Phone, Tag, Calendar, Link as LinkIcon, Activity, Users } from 'lucide-react';

interface StudentListProps {
  students: Student[];
}

export function StudentList({ students }: StudentListProps) {
  return (
    <div className="bg-[#1C1D2C] rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Lista de Alunos</h2>
        <button 
          onClick={() => window.location.href = '/students'}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Users className="w-4 h-4" />
          Ver todos os alunos
        </button>
      </div>
      <div className="space-y-4">
        {students.map((student) => (
          <div key={student.active_id} className="bg-[#2C2D3C] p-6 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {student.first_name} {student.last_name}
                </h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>{student.contato_email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>{student.phone}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {student.active_tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-1 bg-indigo-900/50 px-2 py-1 rounded">
                    <Tag className="w-3 h-3 text-indigo-400" />
                    <span className="text-sm text-indigo-400">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Taxa de Abertura</p>
                <div className="flex items-center justify-between">
                  <p className="text-white font-semibold">{student.open_rate}%</p>
                  <button
                    onClick={() => window.location.href = '/open-rate-report'}
                    className="text-indigo-400 hover:text-indigo-300 text-sm"
                  >
                    Ver relatório
                  </button>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">E-mails Abertos</p>
                <p className="text-white font-semibold">{student.opened_emails}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Links Clicados</p>
                <p className="text-white font-semibold">{student.clicked_links}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Pontos de Interação</p>
                <div className="flex items-center justify-between">
                  <p className="text-white font-semibold">{student.interaction_points}</p>
                  <button
                    onClick={() => window.location.href = '/interactions-report'}
                    className="text-indigo-400 hover:text-indigo-300 text-sm"
                  >
                    Ver relatório
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-700">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Último e-mail: {new Date(student.ultimo_email_aberto).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <LinkIcon className="w-4 h-4" />
                <span className="text-sm">Último click: {new Date(student.ultimo_link_clicado).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Activity className="w-4 h-4" />
                <span className="text-sm">Taxa de conversão: {student.click_to_open_rate}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}