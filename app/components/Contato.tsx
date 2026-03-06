"use client"

import { useState } from "react"

export default function Contato() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [loading, setLoading] = useState(false)
  const [sucesso, setSucesso] = useState(false)
  const [erro, setErro] = useState(false)

  const handleSubmit = async (e: React.SubmitEvent) => {
  e.preventDefault()

  setLoading(true)
  setSucesso(false)
  setErro(false)

  try {
    const response = await fetch("/api/mensagem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        email,
        mensagem,
        website: ""
      }),
    })

    const data = await response.json()

    if (!response.ok) throw new Error()
    setSucesso(true)
    //alert("Mensagem enviada, Entraremos em contato")

    setNome("")
    setEmail("")
    setMensagem("")
  } catch (error) {
      setErro(true)
  } finally {
      setLoading(false)
  }
}

  return (
    <section
      id="contato"
      className="bg-[#0B1120] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Texto Lado Esquerdo */}
        <div>
          <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">
            Contato
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Vamos construir algo incrível juntos
          </h2>

          <p className="text-slate-400 mt-6 text-lg leading-relaxed">
            Estamos prontos para transformar sua ideia em uma solução
            digital moderna, escalável e de alto impacto.
          </p>
        </div>

        {/* Card do Formulário */}
        <div className="bg-[#0F172A] p-10 rounded-2xl shadow-2xl border border-slate-800">

          <form onSubmit={handleSubmit} className="space-y-6">
              <input 
                type="text"
                name="website"
                style={{display: "none"}} 
              />  

            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Nome
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="w-full bg-[#0B1120] border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#0B1120] border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Mensagem
              </label>
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
                rows={5}
                className="w-full bg-[#0B1120] border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 px-5 py-2 rounded-lg text-white font-semibold shadow-md hover:shadow-xl"
            >
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </button>
              {sucesso && (
              <p className="text-green-400 mt-4">
                ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </p>
            )}
              {erro && (
              <p className="text-red-400 mt-4">
                ❌ Ocorreu um erro ao enviar. Tente novamente.
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  )
}