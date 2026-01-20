import { GFS_Didot } from "next/font/google"

const gfsDidot = GFS_Didot({
  subsets: ["latin"],
  weight: "400",
})

export function AboutSection() {
  return (
    <section id="sobre" 
    className="py-20 bg-gradient-to-br from-[#e6dbcd]/80 via-[#e6dbcd]/30 to-[#bd9765]/20 dark:from-[#242e44]
    dark:via-[#313f5d]
    dark:to-[#3b4a6a]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">

          {/* TÍTULO */}
          <h2
            className={`
              ${gfsDidot.className}
              mb-8
              text-center
              text-3xl md:text-4xl
              font-bold
              tracking-[0.14em]
              text-[#9f7a4a]
              dark:text-[#bd9765]
            `}
          >
            GRUPO ODONTO CENTER
          </h2>

          {/* DESCRIÇÃO */}
          <p className="mb-12 text-center text-lg leading-relaxed text-black max-w-4xl mx-auto dark:text-white">
            Há anos transformando sorrisos em Goiânia com dedicação, tecnologia de ponta e atendimento humanizado. Somos
            especialistas em implantes dentários e reabilitação oral, comprometidos em oferecer o melhor tratamento com
            segurança, conforto e resultados que transformam vidas.
          </p>

          {/* VÍDEO INSTITUCIONAL */}
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl pb-[56.25%] shadow-2xl">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src="https://www.youtube.com/embed/Le2QuZIress?start=31"
              title="Vídeo Institucional Grupo Odonto Center"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  )
}
