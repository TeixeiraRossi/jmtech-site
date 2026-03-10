export const runtime = "nodejs"

import { rateLimit } from "@/app/lib/rateLimit"
import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"
export async function POST(req: Request) {
  try {
    const forwarded = req.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0] : "unknown"
    const { nome, email, mensagem, website } = await req.json()
    await new Promise((resolve) => setTimeout(resolve, 800))

    if(website){
      return NextResponse.json(
        {error: "Spam detectado"},
        {status: 400}
      )
    }

    if (!nome || nome.length < 2) {
      return NextResponse.json(
        { error: "Nome inválido" },
        { status: 400 }
      )
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      )
    }

    if (!mensagem || mensagem.length < 10) {
      return NextResponse.json(
        { error: "Mensagem muito curta" },
        { status: 400 }
      )
    }

    if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde um momento." },
      { status: 429 }
    )
  }


    const novaMensagem = await prisma.mensagem.create({
      data: {
        nome,
        email,
        mensagem,
      },
    })

    return NextResponse.json(novaMensagem)
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao salvar mensagem" },
      { status: 500 }
    )
  }
}