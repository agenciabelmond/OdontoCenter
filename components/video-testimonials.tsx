"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { GFS_Didot } from "next/font/google"

const gfsDidot = GFS_Didot({
  subsets: ["latin"],
  weight: "400",
})

export function VideoTestimonials() {
  const videos = [
{
  youtubeId: "hgWi5bEUmRg",
  title: "Transformação Completa",
  description:
    "“Tchau, feião. Agora vem um sorriso novo.” — Sr. Osvaldo. Um novo sorriso não é só estética, é reencontro com a própria confiança.",
},
  {
    youtubeId: "Nl-rfJRPYc4",
    title: "Volte a sorrir, volte a viver",
    description:
      "“Sonho realizado, mas ficou bonita, hein! Comer fora no restaurante é complicado, né? Eu não vou, é complicado você comer com uma prótese removível”. Recupere a liberdade de sorrir para a vida e o prazer de sentar à mesa com quem você ama.",
  },
  {
    youtubeId: "ptWpijFpW6s",
    title: "Satisfação Garantida",
    description:
      "“Fui tentar economizar, mas não deu certo. Eu pagaria menos da metade mas foi o maior erro da minha vida, porque não deu certo e eu vim conhecer a Odontocenter, onde eu fui muito feliz aqui com o procedimento, muito bem tratado por vocês todos aqui e... puxa vida, para mim foi um milagre que aconteceu.”",
  },
]


  return (
    <section className="py-20 bg-gradient-to-br from-[#f1ede7]/90 via-[#d6c8b5]/60 to-[#9c8468]/40 py-20
    bg-gradient-to-br
    from-[#f1ede7]/90
    via-[#d6c8b5]/60
    to-[#9c8468]/40
    dark:bg-gradient-to-br
    dark:from-[#2f3a52]
    dark:via-[#3a4a6a]
    dark:to-[#404d6b]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Título */}
         <h2
  className={`
    ${gfsDidot.className}
    mb-4
    text-center
    text-3xl md:text-4xl
    font-light
    tracking-[0.12em]
    text-[#9f7a4a]
    dark:text-[#bd9765]
  `}
>
            HISTÓRIAS REAIS DE TRANSFORMAÇÃO
          </h2>

        <p className="mb-12 text-center text-lg font-medium text-gray-700 dark:text-white">
  Pacientes que conquistaram o sorriso dos sonhos
</p>


          {/* Vídeos */}
          <div className="grid gap-8 md:grid-cols-3">
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
           <Button
            size="lg"
            asChild
            className="
              relative
              px-8 py-6
              text-lg font-semibold text-white

              bg-[#9f7a4a]
              hover:bg-[#c4af6e]

              border border-[#f3e3b3]/80
              rounded-xl

              transition-all duration-300 ease-out

              /* Neon Glow */
              shadow-[0_0_25px_rgba(159,122,74,0.85)]
              hover:shadow-[0_0_45px_rgba(196,175,110,0.95)]

              /* Pulse refinado */
              animate-[pulse_2.5s_ease-in-out_infinite]

              /* Halo neon */
              before:absolute
              before:inset-0
              before:rounded-xl
              before:bg-[#c4af6e]/20
              before:blur-xl
              before:opacity-70
              before:content-['']
              before:-z-10
            "
          >
            <a
              href="https://wa.me/+556282139597?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero Ter Esse Resultado
            </a>
          </Button>

          </div>
        </div>
      </div>
    </section>
  )
}

/* ==================================================
   VIDEO CARD
================================================== */

function VideoCard({
  youtubeId,
  title,
  description,
}: {
  youtubeId: string
  title: string
  description: string
}) {
  const [isPlaying, setIsPlaying] = useState(false)

  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`

  return (
    <div
      className="
        rounded-lg
        bg-white
        p-6
        border border-[#bd9765]/50
        shadow-md
        dark:bg-[#4d6089]
      "
    >
      <h3 className="mb-4 text-center text-2xl font-bold text-[#9f7a4a] dark:text-white">
        {title}
      </h3>

      <div
        onClick={() => setIsPlaying(true)}
        className={`
          relative mx-auto cursor-pointer overflow-hidden rounded-lg
          border border-gray-200
          transition-all duration-500
          ${
            isPlaying
              ? "max-w-[300px] md:max-w-[360px]"
              : "max-w-[180px] md:max-w-[220px]"
          }
        `}
      >
        {!isPlaying ? (
          <>
            <img
              src={thumbnail}
              alt={title}
              className="aspect-[9/16] w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 transition hover:scale-110">
                <Play className="h-6 w-6 text-[#bd9765]" />
              </div>
            </div>
          </>
        ) : (
          <iframe
            className="aspect-[9/16] w-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>

      <p
        className="
          mt-4
          text-center
          text-base md:text-lg
          leading-relaxed
          text-gray-900
          dark:text-gray-200
        "
      >
        {description}
      </p>
    </div>
  )
}

