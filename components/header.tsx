import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="w-full border-b bg-white dark:bg-[#fffff]">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        
        {/* Espaço vazio para balancear o centro */}
        <div className="w-10" />

        {/* Logo centralizado */}
        <Image
          src="/images/image.png"
          alt="Grupo Odonto Center Logo"
          width={180}
          height={54}
          className="h-auto w-28 md:w-40"
        />

        {/* Botão Dark / Light */}
        <div
          className="
            flex items-center justify-center
            rounded-full
            border border-gray-300 dark:border-gray-700
            bg-gray-100 dark:bg-gray-900
            p-1
            shadow-sm
          "
        >
          <ThemeToggle />
        </div>

      </div>
    </header>
  )
}
