import { Users, TrendingUp, MessageSquare, FileText, Shield } from 'lucide-react'

import type { Metric } from '@/types/dashboard'

export const chartOptions = {
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

export const lineData = {
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

export const barData = {
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

export const doughnutData = {
  labels: ['Blocked', 'Total Posts', 'New Likes', 'Comment'],
  datasets: [
    {
      data: [750, 1300, 1730, 204],
      backgroundColor: ['#000000', '#404040', '#737373', '#A3A3A3'],
      borderWidth: 0,
    },
  ],
}

export const metrics: Metric[] = [
  { icon: Users, label: 'Total Followers', value: '240K', change: '+3.1%', color: 'text-green-600' },
  { icon: TrendingUp, label: 'New Likes', value: '173K2', change: '+1.2%', color: 'text-green-600' },
  { icon: MessageSquare, label: 'Comment', value: '204K2', change: '+0.8%', color: 'text-green-600' },
  { icon: FileText, label: 'Total Posts', value: '130K0', change: '+2.1%', color: 'text-green-600' },
  { icon: Shield, label: 'Blocked Account', value: '0', change: '0%', color: 'text-gray-500' },
]
