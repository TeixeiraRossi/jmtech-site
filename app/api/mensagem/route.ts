export const runtime = "nodejs"

import { prisma } from "@/app/lib/prisma"
import { error } from "console"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { nome, email, mensagem, website } = await req.json()

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