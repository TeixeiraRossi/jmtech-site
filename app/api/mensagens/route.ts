import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verifySessionToken } from "@/app/lib/auth"

export async function GET() {
  const cookieStore = await cookies()
  const auth = cookieStore.get("admin-auth")

  if (!auth?.value || !verifySessionToken(auth.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const mensagens = await prisma.mensagem.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return NextResponse.json(mensagens)
}