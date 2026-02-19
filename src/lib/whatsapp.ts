const DEFAULT_PHONE = '5541995203400'

export const buildWhatsAppLink = (message: string, phone = DEFAULT_PHONE) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
