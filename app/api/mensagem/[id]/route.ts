import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const numericId = Number(id)

    const result = await prisma.mensagem.deleteMany({
      where: { id: numericId }
    })

    return NextResponse.json({ deleted: result.count })
  } catch (error) {
    console.error("ERRO DELETE:", error)
    return NextResponse.json(
      { error: "Erro ao deletar" },
      { status: 500 }
    )
  }
}