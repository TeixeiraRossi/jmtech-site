import { NextResponse } from "next/server"
import { timingSafeEqual } from "crypto"
import { rateLimit } from "@/app/lib/rateLimit"
import { createSessionToken } from "@/app/lib/auth"

export async function POST(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for")
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown"

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Muitas tentativas. Aguarde." }, { status: 429 })
  }

  const { password } = await req.json()

  const adminPassword = process.env.ADMIN_PASSWORD ?? ""
  let valid = false

  try {
    valid = timingSafeEqual(Buffer.from(password ?? ""), Buffer.from(adminPassword))
  } catch {
    valid = false
  }

  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const token = createSessionToken()
  const response = NextResponse.json({ success: true })

  response.cookies.set("admin-auth", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  })

  return response
}
