import { Card } from "@/components/ui/card"
import { GFS_Didot } from "next/font/google"

const gfsDidot = GFS_Didot({
  subsets: ["latin"],
  weight: "400",
})

export function PaymentSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#f1ede7]/90 via-[#d6c8b5]/60 to-[#9c8468]/40  dark:bg-gradient-to-br
    dark:from-[#2f3a52]
    dark:via-[#3a4a6a]
    dark:to-[#404d6b]">
      

      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">

          {/* TEXTO */}
          <div>
            <h2
              className={`
                ${gfsDidot.className}
                mb-3
                text-2xl md:text-3xl
                font-semibold
                tracking-[0.18em]
                text-[#9f7a4a]
                 dark:text-[#bd9765]
              `}
            >
              PAGAMENTO FACILITADO EM ATÉ 12X
            </h2>

            <h3 className="mb-6 text-lg font-medium text-black dark:text-white">
              Implantes dentários para todos!
            </h3>

            <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-white">
              Aqui no <strong>Grupo Odonto Center</strong>, junto com a{" "}
              <strong>Dra. Camila Helena</strong>, criamos condições especiais
              para que mais pessoas tenham acesso ao tratamento com implantes.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-white">
              Parcelamos de forma que caiba no seu bolso, respeitando sua
              realidade financeira.
            </p>

            <button
              className="
                inline-flex items-center justify-center
                rounded-xl px-8 py-4
                bg-[#bd9765] text-white
                font-semibold text-lg
                transition-all duration-300
                hover:bg-[#a88454] hover:shadow-lg
              "
            >
              Agendar avaliação
            </button>
          </div>

          {/* CARD / IMAGEM */}
          <Card
            className="
              relative overflow-hidden
              bg-white/85 backdrop-blur-md
              border border-[#bd9765]
              p-0
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
            "
          >
            <div className="h-[460px] w-full overflow-hidden">
              <img
                src="/finalizaçao.png"
                alt="Implantes Dentários"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="px-8 pt-6 pb-8">
              <p className="text-base leading-relaxed text-foreground dark:text-gray-900">
                Tratamento moderno, seguro e acessível, com planejamento
                personalizado pela nossa equipe.
              </p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  )
}
