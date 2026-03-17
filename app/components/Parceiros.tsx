import Reveal from "./Reveal"
import Image from "next/image"

export default function Parceiros() {
  const parceiros = [
    {
      nome: "Empresa Parceira 1",
      logo: "/parceiros/partner_1.webp",
      link: "https://siteparceiro.com"
    },
    {
      nome: "Empresa Parceira 2",
      logo: "/parceiros/partner_2.webp",
      link: "https://siteparceiro.com"
    },
    {
      nome: "Empresa Parceira 3",
      logo: "/parceiros/partner_3.webp",
      link: "https://siteparceiro.com"
    },
    {
      nome: "Empresa Parceira 4",
      logo: "/parceiros/partner_4.webp",
      link: "https://siteparceiro.com"
    }
  ]

  return (
    <section id="parceiros" className="bg-[#0F172A] py-24">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-white">
            Nossos Parceiros
          </h2>

          <p className="text-slate-400 mt-4">
            Empresas que confiam e colaboram com nossas soluções.
          </p>

          <div className="flex justify-center items-center gap-10 md:gap-16 lg:gap-20 mt-14 flex-wrap">

            {parceiros.map((parceiro) => (
              <a
                key={parceiro.nome}
                href={parceiro.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex justify-center items-center w-32 md:w-40 lg:w-48 h-12 md:h-16 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              >
                <Image
                  src={parceiro.logo}
                  alt={parceiro.nome}
                  fill
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                  className="object-contain"
                />
              </a>
            ))}

          </div>

        </div>
      </Reveal>
    </section>
  )
}