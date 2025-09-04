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
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center space-y-8 animate-fade-in">
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
            A nova era digital começa com o modelo AI-First: implemente com segurança e 
            transforme sua operação em escala.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5527996112436?text=Olá,%20quero%20saber%20mais!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Comece agora
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}