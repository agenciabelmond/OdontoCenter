import { MapPin, Phone, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GFS_Didot } from "next/font/google"

const gfsDidot = GFS_Didot({
  subsets: ["latin"],
  weight: "400",
})

export function LocationSection() {
  const locations = [
    {
      name: "Unidade Mangalô",
      address: "Avenida Mangalô",
      addressLine2: "Setor Morada do Sol – Goiânia/GO",
      phone: "(62) 3920-0606",
      whatsapp: "(62) 8213-9597",
      hours: ["Seg à Sex: 08:30h – 19h", "Sáb: 08:30h – 13h"],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.899!2d-49.3206509!3d-16.6145372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef4d48c344545%3A0x3137726d776f28e8!2sGrupo%20Odonto%20Center%20-%20Mangal%C3%B4!5e0!3m2!1spt-BR!2sbr",
    },
    {
      name: "Unidade Mutirão",
      address: "Avenida do Povo",
      addressLine2: "Vila Mutirão – Goiânia/GO",
      phone: "(62) 3593-9445",
      whatsapp: "(62) 8213-9597",
      hours: ["Seg à Sex: 08:30h – 19h", "Sáb: 08:30h – 13h"],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.907!2d-49.3459932!3d-16.6147034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e8b0c1166c3eb%3A0x569cb4aad1ab67ce!2sGrupo%20Odonto%20Center%20de%20Sa%C3%BAde%20Bucal!5e0!3m2!1spt-BR!2sbr",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#e6dbcd]/80 via-[#e6dbcd]/30 to-[#bd9765]/20  dark:bg-gradient-to-br
    dark:from-[#2f3a52]
    dark:via-[#3a4a6a]
    dark:to-[#404d6b]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2
            className={`
              ${gfsDidot.className}
              mb-4 text-center
              text-2xl md:text-3xl
              font-semibold
              tracking-[0.18em]
              text-[#9f7a4a]
               dark:text-[#bd9765]
            `}
          >
            ONDE ESTAMOS
          </h2>

          <p className="mb-12 text-center text-lg text-gray-700 dark: text-white">
            Duas unidades para melhor atender você em Goiânia
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="overflow-hidden border border-[#bd9765] bg-white p-0"
              >
                <div className="relative h-64 w-full">
                  <iframe
                    src={location.mapUrl}
                    className="h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-[#bd9765]">
                    {location.name}
                  </h3>

                  <div className="flex items-start gap-3 text-black">
                    <MapPin className="mt-1 h-5 w-5 text-[#bd9765]" />
                    <div>
                      <p>{location.address}</p>
                      <p>{location.addressLine2}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-black">
                    <Phone className="h-5 w-5 text-[#bd9765]" />
                    <div>
                      <p>Telefone: {location.phone}</p>
                      <p>WhatsApp: {location.whatsapp}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-black">
                    <Clock className="mt-1 h-5 w-5 text-[#bd9765]" />
                    <div>
                      {location.hours.map((hour, idx) => (
                        <p key={idx}>{hour}</p>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-[#bd9765] text-white transition-all hover:bg-[#a88a55] dark: dark:bg-[#404d6b]"
                  >
                    <a
                      href={`https://wa.me/5562982139597?text=Olá! Gostaria de agendar uma consulta na ${location.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agendar nesta Unidade
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
