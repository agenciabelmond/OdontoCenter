"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Poppins, GFS_Didot } from "next/font/google"

/* =======================
   Fonts
======================= */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const gfsDidot = GFS_Didot({
  subsets: ["latin"],
  weight: "400",
})

/* =======================
   Hero Section
======================= */
export function HeroSection() {
  return (
<section
  className="
    relative w-full overflow-hidden
    bg-gradient-to-br
    from-[#f1ede7]/90
    via-[#d6c8b5]/60
    to-[#9c8468]/40

    dark:bg-gradient-to-br
    dark:from-[#2f3a52]
    dark:via-[#3a4a6a]
    dark:to-[#404d6b]
  "
>

      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="relative z-10 grid gap-12 items-center lg:grid-cols-2">

          {/* =======================
              LEFT CONTENT
          ======================= */}
          <div className="space-y-8">

            {/* Eyebrow + Title */}
            <div className="space-y-2 -mt-12">
             <p className="
  text-sm font-medium tracking-wider uppercase
  text-[#9f7a4a]
  dark:text-[#bd9765]
  -mt-6
">
  Odontologia de excelência em Goiânia/GO
</p>


            <h1
  className={`
    ${gfsDidot.className}
    text-4xl md:text-5xl lg:text-6xl
    font-light tracking-[0.02em]
    text-gray-900 dark:text-white
    leading-tight
  `}
>
  Procurando por{" "}
  <span className="text-[#9f7a4a] dark:text-[#bd9765]">
    Implantes Dentários
  </span>{" "}
  em Goiânia?
</h1>

            </div>

            {/* Description */}
           <p className="
  max-w-xl text-lg leading-relaxed
  text-gray-700 dark:text-white
">
  No Grupo Odonto Center, combinamos tecnologia avançada e profissionais
  experientes para oferecer o melhor tratamento odontológico e estético.
</p>


            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
           <Button
  size="lg"
  className="
    relative px-10 py-4 text-lg font-medium
    text-white dark:text-white
    bg-[#9f7a4a] dark:bg-[#bd9765]
    hover:bg-[#cbbf9b] dark:hover:bg-[#c7c1b8]
    rounded-xl
    transition-all duration-300

    /* Glow Light */
    shadow-[0_0_20px_#bd9765]
    hover:shadow-[0_0_35px_#bd9765]

    /* Glow Dark (sofisticado) */
    dark:shadow-[0_0_18px_rgba(182,175,165,0.45)]
    dark:hover:shadow-[0_0_28px_rgba(182,175,165,0.65)]
  "
>
  Agendar Consulta
</Button>


<Button
  size="lg"
  className="
    relative px-10 py-4 text-lg font-medium
    bg-white text-black
    rounded-xl
    transition-all duration-300
    hover:bg-gray-100
    shadow-[0_0_8px_rgba(255,255,255,0.4)]
    hover:shadow-[0_0_14px_rgba(255,255,255,0.6)]
  "
>
  Saiba Mais
</Button>


            </div>

            {/* Reviews */}
            <div className="flex items-center gap-2 pt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#bf842a] text-[#bf842a]"
                  />
                ))}
              </div>
            <p className="text-sm text-gray-600 dark:text-white">
  Mais de <span className="font-bold">2k+</span> pacientes satisfeitos
</p>

            </div>
          </div>

          {/* =======================
              RIGHT IMAGE
          ======================= */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">

              <Image
                src="/camila.jpeg"
                alt="Recepção da Clínica"
                width={800}
                height={600}
                className="h-auto w-full"
                priority
              />

              {/* Pacientes atendidos */}
              <InfoBadge
                position="bottom-left"
                icon="file"
                value="2k+"
                label="Pacientes atendidos"
              />

              {/* Tratamentos realizados */}
              <InfoBadge
                position="top-right"
                icon="star"
                value="8k+"
                label="Tratamentos realizados"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* =======================
   Info Badge Component
======================= */
function InfoBadge({
  position,
  icon,
  value,
  label,
}: {
  position: "bottom-left" | "top-right"
  icon: "file" | "star"
  value: string
  label: string
}) {
  const positionClass =
    position === "bottom-left"
      ? "bottom-2 left-2 sm:bottom-4 sm:left-4"
      : "top-2 right-2 sm:top-4 sm:right-4"

  return (
    <div
      className={`
        absolute ${positionClass}
        flex items-center gap-2 sm:gap-3
        rounded-md bg-white
        px-2 py-1.5 sm:px-4 sm:py-3
        shadow-lg
        scale-90 sm:scale-100
      `}
    >
      <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-md bg-[#bf842a]/10">
        {icon === "star" ? (
          <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-[#bf842a] text-[#bf842a]" />
        ) : (
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 text-[#bf842a]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        )}
      </div>

      <div>
        <p className="text-sm sm:text-lg font-bold text-gray-900">{value}</p>
        <p className="text-[10px] sm:text-xs leading-tight text-gray-600">
          {label}
        </p>
      </div>
    </div>
  )
}
