import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { nome, email, mensagem } = body

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      )
    }

    console.log("Nova mensagem recebida:")
    console.log({ nome, email, mensagem })

    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}