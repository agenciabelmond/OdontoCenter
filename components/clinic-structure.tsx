import { GFS_Didot } from "next/font/google"
import Image from "next/image"

const gfsDidot = GFS_Didot({
  subsets: ["latin"],
  weight: "400",
})

export function ClinicStructure() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f1ede7]/90 via-[#d6c8b5]/60 to-[#9c8468]/40 dark:from-[#242e44]
    dark:via-[#313f5d]
    dark:to-[#3b4a6a]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">

          {/* TÍTULO */}
          <h2
            className={`
              ${gfsDidot.className}
              mb-4
              text-center
              text-2xl md:text-3xl
              font-bold
              tracking-[0.18em]
              text-[#9f7a4a]
              text-balance
              dark:text-[#bd9765]
            `}
          >
            ESTRUTURA MODERNA COM CONFORTO E SEGURANÇA
          </h2>

          {/* SUBTÍTULO */}
          <p className="mb-12 text-center text-lg text-gray-700 dark:text-white">
            Ambiente moderno e acolhedor pensado para seu bem-estar
          </p>

          {/* GALERIA */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { src: "/consultorio.png", alt: "Consultório da Clínica" },
              { src: "/recepção.png", alt: "Recepção" },
              { src: "/sala.png", alt: "Consultório Confortável" },
            ].map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
