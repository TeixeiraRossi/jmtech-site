export default function Footer() {
  return (
    <footer className="bg-[#050A18] text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Logo + Descrição */}
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight text-white">
            JM<span className="text-blue-500">Tech</span>
          </h3>

          <p className="mt-4 text-sm leading-relaxed">
            Desenvolvendo soluções digitais modernas, escaláveis
            e seguras para empresas que desejam crescer no
            ambiente tecnológico.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Navegação
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#sobre" className="hover:text-blue-400 transition">
                Sobre
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-blue-400 transition">
                Serviços
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-blue-400 transition">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Serviços
          </h4>

          <ul className="space-y-3 text-sm">
            <li>Desenvolvimento Web</li>
            <li>Sistemas Corporativos</li>
            <li>Consultoria em Tecnologia</li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contato
          </h4>

          <ul className="space-y-3 text-sm">
            <li>contato@jmtech.com</li>
            <li>+55 (00) 0000-0000</li>
            <li>Brasil</li>
          </ul>
        </div>

      </div>

      {/* Linha inferior */}
      <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} JM Tech. Todos os direitos reservados.
      </div>
    </footer>
  )
}