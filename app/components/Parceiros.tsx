import Reveal from "./Reveal"
import Image from "next/image"

export default function Parceiros() {
  const parceiros = [
    {
      nome: "Empresa Parceira 1",
      logo: "/parceiros/partner_1.webp",
      link: "https://siteparceiro.com",
      descricao: "Líder em soluções inovadoras de tecnologia para o seu negócio."
    },
    {
      nome: "Empresa Parceira 2",
      logo: "/parceiros/partner_2.webp",
      link: "https://siteparceiro.com",
      descricao: "Especialista na otimização de processos e gestão estratégica."
    },
    {
      nome: "Empresa Parceira 3",
      logo: "/parceiros/partner_3.webp",
      link: "https://siteparceiro.com",
      descricao: "Especialistas em desenvolvimento ágil e produtos digitais."
    },
    {
      nome: "Empresa Parceira 4",
      logo: "/parceiros/partner_4.webp",
      link: "https://siteparceiro.com",
      descricao: "A sua consultoria de confiança para transformação digital."
    }
  ]

  return (
    <section id="parceiros" className="bg-[#0F172A] py-24">
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-white">
            Nossos Parceiros
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Empresas que confiam e colaboram com nossas soluções. Conheça um pouco mais sobre quem trabalha lado a lado conosco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">

            {parceiros.map((parceiro) => (
              <a
                key={parceiro.nome}
                href={parceiro.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center bg-[#1E293B] p-10 rounded-2xl border border-slate-800 hover:border-[#38BDF8] transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-[#38BDF8]/20"
              >
                <div className="relative w-full max-w-[400px] h-48 md:h-56 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 mb-6">
                  <Image
                    src={parceiro.logo}
                    alt={parceiro.nome}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">{parceiro.nome}</h3>
                <p className="text-slate-400 text-sm leading-relaxed text-center group-hover:text-slate-300 transition-colors">
                  {parceiro.descricao}
                </p>
              </a>
            ))}

          </div>

        </div>
      </Reveal>
    </section>
  )
}