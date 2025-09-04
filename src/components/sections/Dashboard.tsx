'use client'

import { useEffect, useRef } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import { Users, TrendingUp, MessageSquare, FileText, Shield, Search } from 'lucide-react'

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

  const lineData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        data: [240, 173, 204, 180, 210, 190],
        borderColor: '#000000',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  }

  const barData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        data: [130, 89, 120, 95, 85, 65, 75],
        backgroundColor: [
          '#000000',
          '#262626',
          '#404040',
          '#525252',
          '#737373',
          '#A3A3A3',
          '#D4D4D4',
        ],
        borderWidth: 0,
      },
    ],
  }

  const doughnutData = {
    labels: ['Blocked', 'Total Posts', 'New Likes', 'Comment'],
    datasets: [
      {
        data: [750, 1300, 1730, 204],
        backgroundColor: ['#000000', '#404040', '#737373', '#A3A3A3'],
        borderWidth: 0,
      },
    ],
  }

  const metrics = [
    { icon: Users, label: 'Total Followers', value: '240K', change: '+3.1%', color: 'text-green-600' },
    { icon: TrendingUp, label: 'New Likes', value: '173K2', change: '+1.2%', color: 'text-green-600' },
    { icon: MessageSquare, label: 'Comment', value: '204K2', change: '+0.8%', color: 'text-green-600' },
    { icon: FileText, label: 'Total Posts', value: '130K0', change: '+2.1%', color: 'text-green-600' },
    { icon: Shield, label: 'Blocked Account', value: '0', change: '0%', color: 'text-gray-500' },
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
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  Dashboard
                </div>
                <Search className="text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="text-sm text-gray-600 bg-transparent outline-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-black">Admin</p>
                  <p className="text-xs text-gray-500">Owner Admin</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <metric.icon size={20} className="text-gray-600" />
                    <span className={`text-sm font-medium ${metric.color}`}>
                      {metric.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-black mb-1">{metric.value}</p>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Activity Followers</h3>
                  <div className="h-64">
                    <Line data={lineData} options={chartOptions} />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">Weekly Activity</h3>
                  <div className="h-48">
                    <Bar data={barData} options={chartOptions} />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">New Followers</h3>
                  <div className="h-48 flex items-center justify-center">
                    <Doughnut 
                      data={doughnutData} 
                      options={{
                        ...chartOptions,
                        cutout: '70%',
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                      }} 
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    {doughnutData.labels.map((label, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: doughnutData.datasets[0].backgroundColor[index] }}
                          ></div>
                          <span className="text-gray-600">{label}</span>
                        </div>
                        <span className="font-medium text-black">
                          {doughnutData.datasets[0].data[index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-4">See All</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">All</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Mentions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}