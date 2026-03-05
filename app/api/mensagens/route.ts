import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const mensagens = await prisma.mensagem.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return NextResponse.json(mensagens)
}