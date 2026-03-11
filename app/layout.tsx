import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "JM Tech",
  description: "Soluções digitais modernas para empresas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-[#0B1120] font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
<script
  src="https://challenges.cloudflare.com/turnstile/v0/api.js"
  async
  defer
></script>