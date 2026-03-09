import ServicoCard from "./ServicoCard"
import Reveal from "./Reveal"
export default function Servicos() {
  const servicos = [
    {
      icon: "💻",
      titulo: "Desenvolvimento Web",
      descricao:
        "Criação de sistemas, plataformas e sites modernos com alta performance e segurança.",
    },
    {
      icon: "📊",
      titulo: "Sistemas Corporativos",
      descricao:
        "Soluções empresariais personalizadas para otimizar processos e aumentar produtividade.",
    },
    {
      icon: "🧠",
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