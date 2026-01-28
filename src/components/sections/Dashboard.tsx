'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import { DollarSign, TrendingUp, TrendingDown, ShoppingCart, Users, CreditCard } from 'lucide-react'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement)

export default function Dashboard() {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#000000',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#333333',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#e5e5e5',
        },
        ticks: {
          color: '#666666',
        },
      },
      y: {
        grid: {
          color: '#e5e5e5',
        },
        ticks: {
          color: '#666666',
        },
      },
    },
  }

  // MRR Evolution Chart
  const mrrData = {
    labels: ['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        data: [32500, 38200, 42800, 45100, 48900, 52400],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  }

  // Weekly Sales Chart
  const salesData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        data: [12, 8, 15, 11, 18, 6, 4],
        backgroundColor: [
          '#10b981',
          '#059669',
          '#047857',
          '#065f46',
          '#064e3b',
          '#6ee7b7',
          '#a7f3d0',
        ],
        borderWidth: 0,
      },
    ],
  }

  // Revenue Distribution
  const revenueData = {
    labels: ['Plano Pro', 'Plano Business', 'Plano Starter', 'Add-ons'],
    datasets: [
      {
        data: [23580, 18340, 7860, 2620],
        backgroundColor: ['#10b981', '#059669', '#6ee7b7', '#a7f3d0'],
        borderWidth: 0,
      },
    ],
  }

  const metrics = [
    { icon: DollarSign, label: 'MRR', value: 'R$ 52.4K', change: '+12.5%', positive: true },
    { icon: TrendingDown, label: 'Churn Rate', value: '2.4%', change: '-0.8%', positive: true },
    { icon: ShoppingCart, label: 'Novas Vendas', value: '74', change: '+18.2%', positive: true },
    { icon: CreditCard, label: 'Receita Total', value: 'R$ 156K', change: '+15.3%', positive: true },
    { icon: Users, label: 'Clientes Ativos', value: '847', change: '+8.1%', positive: true },
  ]

  const expenses = [
    { label: 'Infraestrutura', value: 'R$ 4.2K', percent: 30 },
    { label: 'Marketing', value: 'R$ 3.5K', percent: 25 },
    { label: 'Equipe', value: 'R$ 4.9K', percent: 35 },
    { label: 'Outros', value: 'R$ 1.4K', percent: 10 },
  ]

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
            Como implementamos o modelo AI-First
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Criamos e implementamos agentes inteligentes que integram processos reais: 
            atendimento, operações e backoffice.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                  Dashboard de Vendas
                </div>
                <span className="text-sm text-gray-500">Últimos 30 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <TrendingUp size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">SaaS Metrics</p>
                  <p className="text-xs text-gray-500">Visão Geral</p>
                </div>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <metric.icon size={20} className="text-emerald-600" />
                    </div>
                    <span className={`text-sm font-semibold px-2 py-0.5 rounded-full ${
                      metric.positive 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-black mb-1">{metric.value}</p>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Main Charts */}
              <div className="lg:col-span-2 space-y-6">
                {/* MRR Evolution */}
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-black">Evolução do MRR</h3>
                      <p className="text-sm text-gray-500">Receita recorrente mensal</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-emerald-600">R$ 52.4K</p>
                      <p className="text-xs text-gray-500">+61% vs Jul</p>
                    </div>
                  </div>
                  <div className="h-56">
                    <Line data={mrrData} options={chartOptions} />
                  </div>
                </div>

                {/* Weekly Sales */}
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-black">Vendas da Semana</h3>
                      <p className="text-sm text-gray-500">Novas assinaturas por dia</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-black">74</p>
                      <p className="text-xs text-gray-500">esta semana</p>
                    </div>
                  </div>
                  <div className="h-40">
                    <Bar data={salesData} options={chartOptions} />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Revenue by Product */}
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-semibold text-black mb-4">Receita por Plano</h3>
                  <div className="h-40 flex items-center justify-center">
                    <Doughnut 
                      data={revenueData} 
                      options={{
                        ...chartOptions,
                        cutout: '65%',
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                      }} 
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    {revenueData.labels.map((label, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: revenueData.datasets[0].backgroundColor[index] }}
                          ></div>
                          <span className="text-gray-600">{label}</span>
                        </div>
                        <span className="font-semibold text-black">
                          R$ {(revenueData.datasets[0].data[index] / 1000).toFixed(1)}K
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expenses Breakdown */}
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-black">Gastos</h3>
                    <span className="text-sm font-semibold text-orange-600">R$ 14K</span>
                  </div>
                  <div className="space-y-3">
                    {expenses.map((expense, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{expense.label}</span>
                          <span className="font-medium text-black">{expense.value}</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-orange-400 rounded-full"
                            style={{ width: `${expense.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
                <p className="text-sm text-emerald-700 font-medium">Lucro Líquido</p>
                <p className="text-2xl font-bold text-emerald-700">R$ 38.4K</p>
                <p className="text-xs text-emerald-600">73% de margem</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                <p className="text-sm text-blue-700 font-medium">LTV Médio</p>
                <p className="text-2xl font-bold text-blue-700">R$ 2.840</p>
                <p className="text-xs text-blue-600">+12% vs mês anterior</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl">
                <p className="text-sm text-purple-700 font-medium">CAC</p>
                <p className="text-2xl font-bold text-purple-700">R$ 189</p>
                <p className="text-xs text-purple-600">LTV/CAC: 15x</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
