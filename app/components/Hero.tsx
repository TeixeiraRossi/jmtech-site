import Reveal from "./Reveal"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0B1120] text-white pt-24 overflow-hidden">
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full top-[-200px] left-1/2 -translate-x-1/2"></div>

      <Reveal>
        <div className="relative max-w-4xl text-center px-6">

          <span className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase">
            Tecnologia & Inovação
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-8 leading-tight tracking-tight">
            Soluções Digitais
            <br />
            <span className="text-blue-400">
              para Empresas Modernas
            </span>
          </h1>

          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            Desenvolvemos sistemas, plataformas e experiências digitais
            que impulsionam o crescimento do seu negócio.
          </p>

          <div className="mt-10 flex justify-center gap-4">

          <a
            href="#servicos"
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-lg text-white font-semibold shadow-lg hover:shadow-blue-500/40"
          >
            Nossos Serviços
          </a>

            <a href="#sobre" className="border border-slate-600 hover:border-blue-500 hover:text-white transition px-8 py-3 rounded-lg font-semibold text-slate-300">
              Saiba Mais
            </a>

          </div>

        </div>
      </Reveal>
    </section>
  )
}