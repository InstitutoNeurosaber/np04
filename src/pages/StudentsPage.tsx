import React, { useState } from 'react';
import { ArrowLeft, Download, Search, Filter, Users } from 'lucide-react';
import { StudentProfileModal } from '../components/StudentProfileModal';
import { Student } from '../types/student';

export function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const students = [
    {
      active_id: "1",
      created_at: "2024-03-10",
      contato_email: "joao.silva@email.com",
      first_name: "João",
      last_name: "Silva",
      phone: "(11) 98765-4321",
      active_tags: ["Engajado", "Premium"],
      clicked_links: 45,
      opened_emails: 89,
      open_rate: 78,
      click_through_rate: 56,
      click_to_open_rate: 72,
      openings_points: 890,
      clicks_points: 450,
      interaction_points: 1340,
      ultimo_email_aberto: "2024-03-15",
      ultimo_link_clicado: "2024-03-14",
      sent_email: 114,
      total_emails_abertos: 89,
      cademi_id: "CAD123",
      doc: "123.456.789-00",
      nome_do_curso: "Desenvolvimento Web Full Stack",
      progresso: 65,
      id_do_curso: "CURSO001",
      tipo_do_evento: "Matrícula",
      Jacad_id: "JAC123",
      idPeriodoLetivo: "2024.1",
      idAluno: "ALU123",
      idCurso: "CUR123",
      dataMatricula: "2024-01-15",
      dataAtivacao: "2024-01-16",
      _alunoRa: "2024001",
      _alunoCpf: "123.456.789-00",
      _alunoEmail: "joao.silva@email.com",
      _alunoCelular: "(11) 98765-4321",
      _alunoSexo: "M",
      _alunoDataNascimento: "1995-05-20",
      _alunoRg: "12.345.678-9",
      _alunoRgOrgaoExpedidor: "SSP/SP",
      _alunoCidade: "São Paulo",
      _alunoEstado: "SP",
      _alunoEndereco: "Rua das Flores",
      _alunoCep: "01234-567",
      _alunoEnderecoNumero: "123",
      _alunoEnderecoBairro: "Jardim Primavera",
      _alunoEnderecoComplemento: "Apto 45"
    },
    // ... outros estudantes
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = (
      student.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.contato_email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'premium') return matchesSearch && student.active_tags.includes('Premium');
    if (selectedFilter === 'engaged') return matchesSearch && student.active_tags.includes('Engajado');
    return matchesSearch;
  });

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
            <h1 className="text-2xl font-bold">Lista de Alunos</h1>
            <p className="text-gray-400 text-sm">Visualize e gerencie todos os alunos cadastrados</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-[#1C1D2C] text-gray-300 rounded-lg flex items-center gap-2 hover:bg-[#2C2D3C] transition-colors">
          <Download className="w-4 h-4" />
          Exportar lista
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-[#1C1D2C] p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#2C2D3C] rounded-lg">
              <Users className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-sm text-gray-400">Total de Alunos</h3>
          </div>
          <p className="text-2xl font-bold">2.6K</p>
          <p className="text-green-400 text-sm mt-1">+15.3% este mês</p>
        </div>
        <div className="bg-[#1C1D2C] p-6 rounded-xl">
          <h3 className="text-sm text-gray-400 mb-2">Alunos Premium</h3>
          <p className="text-2xl font-bold">892</p>
          <p className="text-green-400 text-sm mt-1">+8.2% este mês</p>
        </div>
        <div className="bg-[#1C1D2C] p-6 rounded-xl">
          <h3 className="text-sm text-gray-400 mb-2">Taxa Média de Abertura</h3>
          <p className="text-2xl font-bold">68.5%</p>
          <p className="text-green-400 text-sm mt-1">+5.4% este mês</p>
        </div>
        <div className="bg-[#1C1D2C] p-6 rounded-xl">
          <h3 className="text-sm text-gray-400 mb-2">Engajamento Médio</h3>
          <p className="text-2xl font-bold">72.3%</p>
          <p className="text-green-400 text-sm mt-1">+12.8% este mês</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar alunos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1C1D2C] text-white rounded-lg pl-10 pr-4 py-2 border border-gray-700 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div className="relative">
          <Filter className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="bg-[#1C1D2C] text-white rounded-lg pl-10 pr-4 py-2 border border-gray-700 focus:border-indigo-500 focus:outline-none appearance-none"
          >
            <option value="all">Todos os alunos</option>
            <option value="premium">Alunos Premium</option>
            <option value="engaged">Alunos Engajados</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#1C1D2C] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4 text-gray-400 font-medium">Nome</th>
              <th className="text-left p-4 text-gray-400 font-medium">E-mail</th>
              <th className="text-left p-4 text-gray-400 font-medium">Status</th>
              <th className="text-left p-4 text-gray-400 font-medium">Taxa de Abertura</th>
              <th className="text-left p-4 text-gray-400 font-medium">Interações</th>
              <th className="text-left p-4 text-gray-400 font-medium">Último Acesso</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.active_id}
                className="border-b border-gray-700 hover:bg-[#2C2D3C] transition-colors cursor-pointer"
                onClick={() => setSelectedStudent(student)}
              >
                <td className="p-4">
                  <div>
                    <p className="font-medium text-white">{student.first_name} {student.last_name}</p>
                    <p className="text-sm text-gray-400">{student.phone}</p>
                  </div>
                </td>
                <td className="p-4 text-gray-300">{student.contato_email}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    {student.active_tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-indigo-900/50 text-indigo-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-[#2C2D3C] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${student.open_rate}%` }}
                      ></div>
                    </div>
                    <span className="text-white">{student.open_rate}%</span>
                  </div>
                </td>
                <td className="p-4 text-white">{student.interaction_points}</td>
                <td className="p-4 text-gray-300">
                  {new Date(student.ultimo_email_aberto).toLocaleDateString('pt-BR')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Student Profile Modal */}
      {selectedStudent && (
        <StudentProfileModal
          student={selectedStudent}
          isOpen={!!selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
  );
}