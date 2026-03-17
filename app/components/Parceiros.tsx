import Reveal from "./Reveal"
import Image from "next/image"

export default function Parceiros() {
  const parceiros = [
    {
      nome: "Empresa Parceira 1",
      logo: "/parceiros/partner_1.webp",
      link: "https://siteparceiro.com",
      descricao: "O Grupo Hintz é um ecossistema de alta performance composto por 18 frentes de negócios focadas em três pilares fundamentais: Educação, Tecnologia e Serviços."
    },
    {
      nome: "Empresa Parceira 2",
      logo: "/parceiros/partner_2.webp",
      link: "https://siteparceiro.com",
      descricao: "Grupo Nortão\nPoder Automotivo. Inteligência Digital.\nO Grupo Nortão é referência em força e confiança no setor automotivo, composto por duas empresas líderes na comercialização de seminovos originais e peças para pickups."
    },
    {
      nome: "Empresa Parceira 3",
      logo: "/parceiros/partner_3.webp",
      link: "https://siteparceiro.com",
      descricao: "Dr.Osvaldinei Saúde Mental, Metabolismo & Inovação Médico Psiquiatra e Advogado, o Dr. Osvaldinei atua na fronteira entre a mente e o corpo. Especialista em protocolos com Mounjaro, ele oferece um acompanhamento exclusivo que une segurança jurídica, equilíbrio emocional e alta performance metabólica."
    },
    {
      nome: "Empresa Parceira 4",
      logo: "/parceiros/partner_4.webp",
      link: "https://siteparceiro.com",
      descricao: "Dr. Osvalmir Nutrologia & Performance Médico Nutrólogo (RQE 21827) e especialista em Saúde da Família, o Dr. Osvalmir une o rigor científico à visão humanizada para transformar a vida de seus pacientes. Membro da ABRAN e ABESO, sua atuação é focada em saúde, bem-estar e na otimização da performance e estética."
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