import ServicoCard from "./ServicoCard"
import Reveal from "./Reveal"
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
)

const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
)

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
    <path d="M6.002 5.125A3 3 0 0 0 6.401 6.5"></path>
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
  </svg>
)

export default function Servicos() {
  const servicos = [
    {
      icon: <CodeIcon />,
      titulo: "Desenvolvimento Web",
      descricao:
        "Criação de sistemas, plataformas e sites modernos com alta performance e segurança.",
    },
    {
      icon: <BarChartIcon />,
      titulo: "Sistemas APPs e Automações",
      descricao:
        "Soluções empresariais personalizadas para otimizar processos e aumentar produtividade.",
    },
    {
      icon: <BrainIcon />,
      titulo: "Consultoria em Inteligência Artificial",
      descricao:
        "Estratégias digitais e arquitetura de sistemas para crescimento sustentável.",
    },
  ]

  return (
    <section
      id="servicos"
      className="bg-[#0B1120] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">
          Nossos Serviços
        </span>

        <h2 className="font-extrabold tracking-tight">
          Soluções Digitais Sob Medida
        </h2>

        <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
          Desenvolvemos tecnologias modernas para impulsionar a transformação
          digital da sua empresa.
        </p>

        <Reveal>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {servicos.map((servico, index) => (
              <ServicoCard
                key={index}
                icon={servico.icon}
                titulo={servico.titulo}
                descricao={servico.descricao}
                delay={index * 0.15}
              />
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}