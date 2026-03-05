"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [password, setPassword] = useState("")
  const router = useRouter()

  async function handleLogin(e: React.SubmitEvent) {
    e.preventDefault()

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push("/admin")
    } else {
      alert("Senha incorreta")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1120] text-white">
      <form
        onSubmit={handleLogin}
        className="bg-[#0F172A] p-8 rounded-xl border border-slate-800 w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Acesso Administrativo
        </h1>

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 transition p-3 rounded-lg font-semibold"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}