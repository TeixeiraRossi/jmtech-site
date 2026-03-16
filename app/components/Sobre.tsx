import Reveal from "./Reveal"

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-white text-slate-900 py-24"
    >
    <Reveal>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
            Sobre Nós
          </span>

          <h2 className="font-extrabold tracking-tight">
            Tecnologia que impulsiona negócios
          </h2>

          <p className="text-slate-600 mt-6 text-lg leading-relaxed">
            Somos uma empresa focada em desenvolvimento de soluções digitais
            modernas, escaláveis e seguras. Atuamos com sistemas web,
            plataformas corporativas e inovação tecnológica para empresas
            que desejam crescer no ambiente digital.
          </p>

          <p className="text-slate-600 mt-4 text-lg leading-relaxed">
            Nosso compromisso é unir estratégia, tecnologia e design
            para entregar resultados reais e mensuráveis.
          </p>
        </div>

        {/* Bloco visual */}
<div className="bg-gradient-to-br from-white to-white rounded-2xl h-80 w-full flex items-center justify-center shadow-2xl overflow-hidden">
  <img 
    src="/jmtech-banner-800x400.webp" 
    alt="JM Tech Logo" 
    className="w-full h-full object-cover"
  />
</div>

      </div>
    </Reveal>
    </section>
  )
}