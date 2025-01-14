import React from 'react';
import { Mail, Phone, MapPin, Calendar, Book, Activity, Tag, User, CreditCard, School } from 'lucide-react';
import { Student } from '../types/student';
import { Modal } from './Modal';

interface StudentProfileModalProps {
  student: Student;
  isOpen: boolean;
  onClose: () => void;
}

export function StudentProfileModal({ student, isOpen, onClose }: StudentProfileModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Ficha do Aluno">
      <div className="grid grid-cols-3 gap-6">
        {/* Coluna 1: Informações Pessoais e Endereço */}
        <div className="space-y-6">
          <div className="bg-[#2C2D3C] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Informações Pessoais
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>{student.contato_email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>{student.phone}</span>
              </div>
              {student._alunoCpf && (
                <div className="flex items-center gap-2 text-gray-300">
                  <CreditCard className="w-4 h-4" />
                  <span>CPF: {student._alunoCpf}</span>
                </div>
              )}
              {student._alunoRg && (
                <div className="flex items-center gap-2 text-gray-300">
                  <CreditCard className="w-4 h-4" />
                  <span>RG: {student._alunoRg} - {student._alunoRgOrgaoExpedidor}</span>
                </div>
              )}
              {student._alunoSexo && (
                <div className="flex items-center gap-2 text-gray-300">
                  <User className="w-4 h-4" />
                  <span>Sexo: {student._alunoSexo === 'M' ? 'Masculino' : 'Feminino'}</span>
                </div>
              )}
              {student._alunoDataNascimento && (
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span>Nascimento: {new Date(student._alunoDataNascimento).toLocaleDateString('pt-BR')}</span>
                </div>
              )}
            </div>
          </div>

          {student._alunoEndereco && (
            <div className="bg-[#2C2D3C] p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Endereço
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>{student._alunoEndereco}, {student._alunoEnderecoNumero}</p>
                <p>{student._alunoEnderecoBairro} {student._alunoEnderecoComplemento}</p>
                <p>{student._alunoCidade} - {student._alunoEstado}</p>
                <p>{student._alunoCep}</p>
              </div>
            </div>
          )}
        </div>

        {/* Coluna 2: Informações Acadêmicas e Datas */}
        <div className="space-y-6">
          <div className="bg-[#2C2D3C] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <School className="w-5 h-5" />
              Informações Acadêmicas
            </h3>
            <div className="space-y-3">
              {student.cademi_id && (
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="font-medium">ID Cademi:</span>
                  <span>{student.cademi_id}</span>
                </div>
              )}
              {student._alunoRa && (
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="font-medium">RA:</span>
                  <span>{student._alunoRa}</span>
                </div>
              )}
              {student.nome_do_curso && (
                <div className="flex items-center gap-2 text-gray-300">
                  <Book className="w-4 h-4" />
                  <span>{student.nome_do_curso}</span>
                </div>
              )}
              {student.progresso && (
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Progresso do Curso</span>
                    <span>{student.progresso}%</span>
                  </div>
                  <div className="h-2 bg-[#1C1D2C] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${student.progresso}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#2C2D3C] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Datas Importantes
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Criado em: {new Date(student.created_at).toLocaleDateString('pt-BR')}</span>
              </div>
              {student.dataMatricula && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Matrícula: {new Date(student.dataMatricula).toLocaleDateString('pt-BR')}</span>
                </div>
              )}
              {student.dataAtivacao && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Ativação: {new Date(student.dataAtivacao).toLocaleDateString('pt-BR')}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Coluna 3: Métricas de Engajamento e Tags */}
        <div className="space-y-6">
          <div className="bg-[#2C2D3C] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Métricas de Engajamento
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-gray-300 mb-1">
                  <span>Taxa de Abertura</span>
                  <span>{student.open_rate}%</span>
                </div>
                <div className="h-2 bg-[#1C1D2C] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${student.open_rate}%` }}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">E-mails Abertos</p>
                  <p className="text-xl font-bold mt-1">{student.opened_emails}</p>
                  <p className="text-sm text-gray-400">de {student.sent_email} enviados</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Links Clicados</p>
                  <p className="text-xl font-bold mt-1">{student.clicked_links}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Pontos de Abertura</p>
                  <p className="text-lg font-bold mt-1">{student.openings_points}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Pontos de Cliques</p>
                  <p className="text-lg font-bold mt-1">{student.clicks_points}</p>
                </div>
              </div>
            </div>
          </div>

          {student.active_tags.length > 0 && (
            <div className="bg-[#2C2D3C] p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {student.active_tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-1 bg-indigo-900/50 px-3 py-1.5 rounded-lg"
                  >
                    <Tag className="w-4 h-4 text-indigo-400" />
                    <span className="text-indigo-400">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-[#2C2D3C] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Últimas Interações</h3>
            <div className="space-y-3">
              <div className="text-gray-300">
                <p className="text-sm text-gray-400">Último E-mail Aberto</p>
                <p className="mt-1">{new Date(student.ultimo_email_aberto).toLocaleDateString('pt-BR')}</p>
              </div>
              <div className="text-gray-300">
                <p className="text-sm text-gray-400">Último Link Clicado</p>
                <p className="mt-1">{new Date(student.ultimo_link_clicado).toLocaleDateString('pt-BR')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}