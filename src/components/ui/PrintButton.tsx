'use client'

export function PrintButton() {
  const handlePrint = () => {
    console.log('Print button clicked!')
    try {
      window.print()
    } catch (error) {
      console.error('Error printing:', error)
      alert('Erro ao tentar imprimir. Por favor, use Ctrl+P / Cmd+P manualmente.')
    }
  }

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="inline-flex items-center gap-2 border border-gray-400 bg-white text-black px-3 py-2 rounded-lg font-semibold hover:border-gray-600 transition-colors cursor-pointer print:hidden"
    >
      🖨️ Imprimir / Salvar PDF
    </button>
  )
}
