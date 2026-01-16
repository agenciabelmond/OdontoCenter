"use client"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/?text=Olá! Gostaria de saber mais sobre implantes dentários."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full p-2  transition-transform hover:scale-110 hover:shadow-xl animate-[pulseSoft_2s_infinite]"
    >
      {/* Logo do WhatsApp */}
<img
  src="/WhatsAppLogo.png"
  alt="WhatsApp"
  className="h-17 w-17"
/>



      {/* Bolinha vermelha com ping */}
      <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 animate-ping" />

      {/* Bolinha vermelha com número */}
      <span className="absolute top-0 right-0 flex h-3 w-3 items-center justify-center rounded-full bg-red-500">
        <span className="text-[8px] font-bold leading-none text-white">
          1
        </span>
      </span>
    </a>
  )
}
