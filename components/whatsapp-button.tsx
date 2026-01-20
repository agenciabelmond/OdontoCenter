"use client"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+556282139597?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full p-2 transition-transform hover:scale-110 animate-[pulseSoft_2s_infinite]"
    >
<img
  src="/WhatsAppLogo.png"
  alt="WhatsApp"
  className="h-16 w-16 animate-[logoPulse_2s_ease-in-out_infinite]"
/>



      {/* Bolinha mais próxima da logo */}
<span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500">
  <span className="text-[9px] font-bold leading-none text-white">
          1
        </span>
      </span>
    </a>
  )
}
