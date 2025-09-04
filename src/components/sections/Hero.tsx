'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Bot } from 'lucide-react'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const texts = [
      'Agente de IA.',
      'Automação Inteligente.',
      'Futuro Digital.'
    ]
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting])

  return (
    <section className="relative flex items-center bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-6 lg:space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
            <Bot size={16} />
            Agência de IA
          </div>

          <h1 className="text-4xl lg:text-7xl font-bold text-black leading-tight">
            Não é só um{' '}
            <span className="text-black border-b-4 border-black">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforme processos manuais em automações inteligentes que escalam.{' '}
            <span className="font-semibold text-black">ROI comprovado desde o primeiro mês.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5541995203400?text=Olá,%20quero%20uma%20análise%20gratuita%20dos%20meus%20processos!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 group"
            >
              Análise Gratuita de Processos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#valores"
              className="btn-secondary text-lg px-8 py-4"
            >
              Ver Soluções
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Implementação em 30 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Sem necessidade de código</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Suporte dedicado</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}