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
    youtubeId: "2EvbAxUghdA",
    title: "Transformação Completa",
    description:
      "Dizer adeus à dentadura velha e dar as boas-vindas aos dentes fixos não é apenas estética, é liberdade, saúde e rejuvenescimento.",
  },
  {
    youtubeId: "WJxRKxYtToA",
    title: "Volte a sorrir, volte a viver",
    description:
      "Não é só sobre dentes. É sobre voltar a sentir prazer em comer, conforto e felicidade ao sorrir.",
  },
  {
    youtubeId: "ptWpijFpW6s",
    title: "Satisfação Garantida",
    description:
      "Autoestima restaurada, segurança ao sorrir e prazer em viver cada momento.",
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
                bg-[#9f7a4a]
                px-8 py-6
                text-lg text-white
                hover:bg-[#c4af6e]
                border border-[#e6d3a3]/70
                animate-pulse
              "
            >
              <a
                href="https://wa.me/5562982139597"
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

