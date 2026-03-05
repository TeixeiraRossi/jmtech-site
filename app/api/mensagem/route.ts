import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { nome, email, mensagem } = await req.json()
    console.log("puta qu pariu")

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