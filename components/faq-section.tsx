"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { GFS_Didot } from "next/font/google"

const gfsDidot = GFS_Didot({
  subsets: ["latin"],
  weight: "400",
})

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "O que são implantes dentários?",
      answer:
        "Os implantes dentários são raízes artificiais de titânio que são fixadas no osso maxilar ou mandibular para substituir dentes perdidos. São a solução mais moderna e eficaz para a perda dentária, proporcionando um sorriso natural, saudável e funcional.",
    },
    {
      question: "Quais são os benefícios dos implantes dentários?",
      answer: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Sorriso natural e bonito, integrado ao osso e à gengiva.</li>
          <li>Melhor mastigação e digestão, contribuindo para a saúde geral.</li>
          <li>Aumento da autoestima e da confiança pessoal e profissional.</li>
          <li>Fala clara e segura, com restauração da fonética.</li>
          <li>Mais qualidade de vida para sorrir, comer e falar sem constrangimentos.</li>
        </ul>
      ),
    },
    {
      question: "Quem pode colocar implantes dentários?",
      answer:
        "Pessoas com boa saúde geral e óssea, que perderam um ou mais dentes, podem ser candidatas a implantes dentários. É fundamental passar por uma avaliação com um dentista especialista para analisar cada caso individualmente.",
    },
    {
      question: "O procedimento é dolorido?",
      answer:
        "Não. A cirurgia é realizada com anestesia local, garantindo que o paciente não sinta dor durante o procedimento. No pós-operatório pode haver um leve desconforto, facilmente controlado com medicação.",
    },
    {
      question: "Quanto custa um implante dentário?",
      answer:
        "O valor do implante dentário varia conforme o tipo de implante, a quantidade necessária, a complexidade do caso e o planejamento individual. Somente uma avaliação com o especialista permite fornecer um orçamento preciso e transparente.",
    },
    {
      question: "Como cuidar dos implantes dentários?",
      answer:
        "Os cuidados são semelhantes aos dentes naturais: escovação adequada, uso diário de fio dental e visitas regulares ao dentista para acompanhamento, limpeza profissional e manutenção da saúde bucal.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#e6dbcd]/80 via-[#e6dbcd]/30 to-[#bd9765]/20 dark:from-[#242e44]
    dark:via-[#313f5d]
    dark:to-[#3b4a6a] ">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">

          {/* TÍTULO */}
          <h2
            className={`
              ${gfsDidot.className}
              mb-4
              text-center
              text-2xl md:text-3xl
              font-semibold
              tracking-[0.18em]
              text-[#9f7a4a]
              dark:text-[#bd9765]
            `}
          >
            FAQ – PERGUNTAS FREQUENTES
          </h2>

          {/* SUBTÍTULO */}
          <p className="mb-10 text-center text-lg text-gray-900 dark:text-white">
            Tire suas dúvidas sobre implantes dentários
          </p>

          {/* LISTA DE PERGUNTAS */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[#bd9765]/70 bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-5 text-left transition hover:bg-gray-50"
                >
                  <h3 className="pr-4 text-base font-semibold text-gray-900 md:text-lg">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-5 w-5 text-[#bd9765] transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-gray-800 md:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
