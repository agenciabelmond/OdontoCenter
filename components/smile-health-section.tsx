import { Heart, Sparkles, Clock } from "lucide-react"
import { GFS_Didot } from "next/font/google"

const gfsDidot = GFS_Didot({
  subsets: ["latin"],
  weight: "400",
})

export function SmileHealthSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Equilíbrio Emocional",
      description:
        "Sorrir libera endorfinas e serotonina, os hormônios da felicidade, promovendo relaxamento natural e reduzindo os níveis de estresse no dia a dia.",
    },
    {
      icon: Sparkles,
      title: "Autoestima Elevada",
      description:
        "Um sorriso bonito e saudável aumenta significativamente sua confiança, impactando positivamente suas relações pessoais e profissionais.",
    },
    {
      icon: Clock,
      title: "Rejuvenescimento Natural",
      description:
        "Sorrir ativa a musculatura facial, ajudando a preservar a elasticidade da pele e contribuindo para uma aparência mais jovem e vital.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#f1ede7]/90 via-[#d6c8b5]/60 to-[#9c8468]/40   dark:bg-gradient-to-br
    dark:from-[#2f3a52]
    dark:via-[#3a4a6a]
    dark:to-[#404d6b]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Título */}
          <div className="mb-16 text-center">
            <h2
              className={`
                ${gfsDidot.className}
                mb-4
                text-3xl md:text-4xl
                font-light
                tracking-[0.14em]
                text-[#9f7a4a]
                text-balance
                 dark:text-[#bd9765]
              `}
            >
              SORRIR VAI ALÉM DA ESTÉTICA
            </h2>

            <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-gray-900 dark:text-white">
              Recuperar seu sorriso não transforma apenas sua aparência, é um investimento completo na sua saúde
              física, emocional e na sua qualidade de vida.
            </p>
          </div>

          {/* Imagem + Benefícios */}
          <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
            {/* Imagem */}
            <div className="flex justify-center">
              <img
                src="/equipeodontocenter.png"
                alt="Sorriso saudável e natural"
                className="w-full max-w-xs rounded-2xl object-cover shadow-lg md:max-w-sm lg:max-w-md"
              />
            </div>

            {/* Benefícios */}
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#bd9765]/20">
                      <benefit.icon className="h-7 w-7 text-[#bd9765]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#bd9765]">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="leading-relaxed text-gray-900">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Depoimento */}
          <div className="mx-auto max-w-4xl text-center">
            <h3
              className={`
                ${gfsDidot.className}
                mb-6
                text-xl md:text-2xl
                font-bold
                tracking-[0.12em]
                text-[#9f7a4a]
                dark:text-[#bd9765]
              `}
            >
              UMA HISTÓRIA REAL DE TRANSFORMAÇÃO
            </h3>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-800 dark:text-white">
              Assista ao depoimento emocionante de uma cliente que realizou o sonho de sorrir novamente e transformou
              completamente sua autoestima.
            </p>

            <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-2xl shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/DDV1c1CzGV0?rel=0"
            title="YouTube video player"
            className="h-full w-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

          </div>
        </div>
      </div>
    </section>
  )
}
