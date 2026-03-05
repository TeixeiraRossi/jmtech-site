import Reveal from "./Reveal"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B1120] text-white pt-24">
      <Reveal>
      <div className="max-w-4xl text-center px-6">

        <span className="text-blue-400 font-semibold tracking-widest uppercase text-sm">
          Tecnologia & Inovação
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight tracking-tight">
          Soluções Digitais
          <br />
          para Empresas Modernas
        </h1>

        <p className="text-slate-400 mt-6 text-lg">
          Desenvolvemos sistemas, plataformas e experiências digitais
          que impulsionam o crescimento do seu negócio.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 px-5 py-2 rounded-lg text-white font-semibold shadow-md hover:shadow-xl">
            Nossos Serviços
          </button>

          <button className="border border-slate-600 hover:border-blue-500 transition px-8 py-3 rounded-lg font-semibold text-slate-300">
            Saiba Mais
          </button>
        </div>

      </div>
      </Reveal>
    </section>
  )
}