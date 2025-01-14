import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Eye, Users, TrendingUp, Mail, MoreVertical, Download } from 'lucide-react';
import { LineChart } from './components/LineChart';
import { BarChart } from './components/BarChart';
import { SmallLineChart } from './components/SmallLineChart';
import { MetricCard } from './components/MetricCard';
import { StudentList } from './components/StudentList';
import { OpenRateReport } from './pages/OpenRateReport';
import { StudentsPage } from './pages/StudentsPage';
import { InteractionsReport } from './pages/InteractionsReport';

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0A0B1A] text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold">Bem-vindo de volta</h1>
          <p className="text-gray-400 text-sm">Acompanhe as métricas de engajamento dos alunos.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#1C1D2C] text-gray-300 rounded-lg flex items-center gap-2 hover:bg-[#2C2D3C] transition-colors">
            <Download className="w-4 h-4" />
            Exportar dados
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Criar relatório
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="E-mails Abertos"
          value="12.5K"
          change={28.4}
          icon={Eye}
        />
        <MetricCard
          title="Total de Alunos"
          value="2.6K"
          change={15.3}
          icon={Users}
        />
        <MetricCard
          title="Taxa de Engajamento"
          value="75%"
          change={3.1}
          icon={TrendingUp}
        />
        <MetricCard
          title="E-mails Enviados"
          value="45.8K"
          change={11.3}
          icon={Mail}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-[#1C1D2C] rounded-xl p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-lg font-semibold">Engajamento por Período</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">75.5%</span>
                <span className="text-green-400 text-sm">+24.5%</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <span className="text-sm text-gray-400">E-mails Abertos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                <span className="text-sm text-gray-400">Links Clicados</span>
              </div>
              <select className="bg-[#2C2D3C] text-sm rounded-lg px-3 py-1.5 border border-gray-700">
                <option>Jan 2024 - Dez 2024</option>
              </select>
            </div>
          </div>
          <LineChart />
        </div>

        <div className="space-y-6">
          <div className="bg-[#1C1D2C] rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-semibold">Taxa de Abertura</h2>
              <button className="p-1.5 hover:bg-[#2C2D3C] rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold">65.8%</span>
              <span className="text-green-400 text-sm">+28.5%</span>
            </div>
            <div className="h-32">
              <BarChart />
            </div>
            <div className="flex justify-between items-center mt-4 text-sm">
              <span className="text-gray-400">Últimos 12 meses</span>
              <a href="/open-rate-report" className="text-indigo-400 hover:text-indigo-300">Ver relatório</a>
            </div>
          </div>

          <div className="bg-[#1C1D2C] rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-lg font-semibold">Interações</h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">2.4K</span>
                  <span className="text-green-400 text-sm">+16.0%</span>
                </div>
              </div>
              <button className="p-1.5 hover:bg-[#2C2D3C] rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="h-32">
              <SmallLineChart />
            </div>
            <div className="flex justify-between items-center mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-gray-400">Ativos</span>
                <span>1.2k alunos</span>
              </div>
              <a href="/interactions-report" className="text-indigo-400 hover:text-indigo-300">Ver relatório</a>
            </div>
          </div>
        </div>
      </div>

      {/* Student List */}
      <div className="mt-8">
        <StudentList students={[
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
            total_emails_abertos: 89
          }
        ]} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/open-rate-report" element={<OpenRateReport />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/interactions-report" element={<InteractionsReport />} />
      </Routes>
    </Router>
  );
}