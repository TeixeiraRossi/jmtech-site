export const runtime = "nodejs"

import { rateLimit } from "@/app/lib/rateLimit"
import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"
export async function POST(req: Request) {
  try {
    // CF-Connecting-IP é definido pelo Cloudflare e não pode ser forjado pelo cliente
    const ip = req.headers.get("cf-connecting-ip") || "unknown"
    const userAgent = req.headers.get("user-agent") || "unknown"
    const fingerprint = ip + userAgent

    const { nome, email, mensagem, website, token } = await req.json()
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

    if (!rateLimit(fingerprint)) {
      return NextResponse.json(
        { error: "Muitas tentativas. Aguarde." },
        { status: 429 }
      )
    }    

    if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde um momento." },
      { status: 429 }
    )
  }

//verificacao do cloudflare
    const verify = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY ?? "",
          response: token,
        }).toString(),
      }
    )

    const data = await verify.json()

    if (!data.success) {
      return NextResponse.json(
        { error: "Falha na verificação anti-bot" },
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