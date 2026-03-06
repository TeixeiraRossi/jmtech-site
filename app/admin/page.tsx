"use client"

import { useEffect, useState } from "react"

interface Mensagem {
  id: number
  nome: string
  email: string
  mensagem: string
  createdAt: string
}

export default function AdminPage() {
  const [mensagens, setMensagens] = useState<Mensagem[]>([])

  async function fetchMensagens() {
    const res = await fetch("/api/mensagens")
    const data = await res.json()
    setMensagens(data)
  }

  useEffect(() => {
    fetchMensagens()
  }, [])


  const totalMensagens = mensagens.length

  const ultimaMensagem =
    mensagens.length > 0
      ? new Date(mensagens[0].createdAt).toLocaleDateString("pt-BR")
      : "Nenhuma"


  async function handleDelete(id: number) {
    console.log("Deletando ID:", id)
    const confirmDelete = confirm("Deseja realmente deletar?")
    if (!confirmDelete) return

    await fetch(`/api/mensagem/${id}`, {
      method: "DELETE",
    })

    fetchMensagens()
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-extrabold mb-10">
          Painel de Mensagens
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-[#0F172A] p-6 rounded-xl border border-slate-800">
            <p className="text-slate-400 text-sm">Total de mensagens</p>
            <h2 className="text-3xl font-bold text-blue-400">
              {totalMensagens}
            </h2>
          </div>

          <div className="bg-[#0F172A] p-6 rounded-xl border border-slate-800">
            <p className="text-slate-400 text-sm">Última mensagem</p>
            <h2 className="text-2xl font-bold text-blue-400">
              {ultimaMensagem}
            </h2>
          </div>

          <div className="bg-[#0F172A] p-6 rounded-xl border border-slate-800">
            <p className="text-slate-400 text-sm">Status</p>
            <h2 className="text-2xl font-bold text-green-400">
              Sistema ativo
            </h2>
          </div>

        </div>        

        {mensagens.length === 0 ? (
          <p className="text-slate-400">
            Nenhuma mensagem recebida ainda.
          </p>
        ) : (
          <div className="space-y-6">
          {mensagens.map((msg) => {

          return (
            <div
              key={msg.id}
              className="bg-[#0F172A] p-6 rounded-xl border border-slate-800"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-blue-400">
                  {msg.nome}
                </h2>
                <button
                  onClick={() => handleDelete(msg.id)}
                  className="text-red-500 hover:text-red-400"
                >
                  Deletar
                </button>
              </div>

              <p className="text-sm text-slate-400 mb-2">
                {msg.email}
              </p>

              <p className="text-xs text-slate-500 mb-2">
                {new Date(msg.createdAt).toLocaleString("pt-BR")}
              </p>              

              <p className="text-slate-300">
                {msg.mensagem}
              </p>
            </div>
          )
        })}
          </div>
        )}

      </div>
    </div>
  )
}