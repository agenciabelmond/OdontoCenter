import { GFS_Didot } from "next/font/google"

const gfsDidot = GFS_Didot({
  subsets: ["latin"],
  weight: "400",
})

export function TreatmentProcess() {
  const steps = [
    {
      number: "01",
      title: "CONSULTA COM ESPECIALISTA",
      description:
        "Avaliação detalhada com nossos especialistas para entender suas necessidades e construir confiança no tratamento.",
    },
    {
      number: "02",
      title: "PLANO PERSONALIZADO",
      description:
        "Planejamento digital avançado criado especificamente para você, garantindo precisão e resultados previsíveis.",
    },
    {
      number: "03",
      title: "TECNOLOGIA DE PONTA",
      description:
        "Procedimentos guiados por computador com equipamentos modernos para máxima segurança e eficiência.",
    },
    {
      number: "04",
      title: "GARANTIA",
      description:
        "Acompanhamento contínuo e resultados duradouros. Seu sorriso protegido com nossa garantia completa.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#e6dbcd]/80 via-[#e6dbcd]/30 to-[#bd9765]/20  dark:from-[#242e44]
    dark:via-[#313f5d]
    dark:to-[#3b4a6a]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          {/* Título */}
          <h2
            className={`
              ${gfsDidot.className}
              mb-4
              text-3xl md:text-4xl
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#bd9765]
            `}
          >
            COMO FUNCIONA O TRATAMENTO
          </h2>

          <p className="mb-16 text-lg font-medium tracking-wide text-gray-700 dark:text-white">
            Um processo simples e transparente do início ao fim
          </p>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-[#bd9765] md:block" />

            <div className="grid gap-8 md:grid-cols-4 md:gap-4">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#bd9765] text-2xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>

                  <h3 className="mb-3 text-lg font-bold tracking-wide text-[#bd9765]">
                    {step.title}
                  </h3>

                <p className="text-sm leading-relaxed text-[#3a4a6a] dark:text-[#d6def0]">
                  {step.description}
                </p>


                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
