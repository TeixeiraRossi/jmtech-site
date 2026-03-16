export const dynamic = "force-dynamic"

import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verifySessionToken } from "@/app/lib/auth"

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const cookieStore = await cookies()
  const auth = cookieStore.get("admin-auth")

  if (!auth?.value || !verifySessionToken(auth.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

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