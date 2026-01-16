import { Card } from "@/components/ui/card"
import { GFS_Didot } from "next/font/google"

const gfsDidot = GFS_Didot({
  subsets: ["latin"],
  weight: "400",
})

export function ProceduresSection() {
  const procedures = [
    {
      title: "Facetas Dentárias",
      description:
        "Facetas de porcelana personalizadas para corrigir forma, cor e alinhamento dos dentes com naturalidade e sofisticação.",
      image: "/faceta.jpg",
    },
    {
      title: "Implantes Dentários",
      description:
        "Reposição segura e definitiva de dentes perdidos com tecnologia avançada, devolvendo função mastigatória e estética.",
      image: "/implante.jpg",
    },
    {
      title: "Tratamento Completo / Reabilitação Oral",
      description:
        "Planejamento completo para restaurar estética, função e saúde bucal com soluções integradas.",
      image: "/reabilitação.png",
    },
  ]

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#e6dbcd]/80 via-[#e6dbcd]/30 to-[#bd9765]/20 dark:from-[#242e44]
    dark:via-[#313f5d]
    dark:to-[#3b4a6a]">
      {/* Elementos decorativos */}
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#27548A]/20 blur-3xl animate-float-slower" />

      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
<h1
  className={`
    ${gfsDidot.className}
    mb-4
    text-3xl md:text-4xl
    font-bold
    tracking-[0.14em]
    text-[#9f7a4a]
    dark:text-[#bd9765]
  `}
>

            NOSSOS PROCEDIMENTOS
          </h1>

        <p className="mb-16 text-lg text-[#27548A] dark:text-white">
  Tratamentos de excelência focados em estética, função e longevidade
</p>

          <div className="grid gap-10 md:grid-cols-3">
            {procedures.map((procedure, index) => (
             <Card
  key={index}
  className="
    group overflow-hidden
    border border-[#bd9765]
    bg-white/85 backdrop-blur-md
    p-0
    transition-all duration-300
    hover:-translate-y-2
    hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
    dark:bg-[#4d6089]
    dark:border-[#bd9765]/60
  "
>

                <div className="flex h-60 w-full items-center justify-center bg-[#f7f4ef] overflow-hidden">
                  <img
                    src={procedure.image}
                    alt={procedure.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="px-8 pb-8 pt-5">
                  <h3 className="mb-3 text-2xl font-bold text-[#9f7a4a] dark:text-[#bd9765]">
  {procedure.title}
</h3>

                  <p className="text-base leading-relaxed text-foreground dark:text-gray-100">
  {procedure.description}
</p>

                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
