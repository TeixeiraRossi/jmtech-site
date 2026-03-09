"use client"

import { a } from "framer-motion/client"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

useEffect(() => {
  const sections = document.querySelectorAll("section")

  const observer = new IntersectionObserver(
    (entries) => {  
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    },
    {
      threshold: 0.6,
    }
  )

  sections.forEach((section) => {
    observer.observe(section)
  })

  return () => {
    sections.forEach((section) => {
      observer.unobserve(section)
    })
  }
}, [])

  const links = [
    { label: "sobre", href: "#sobre" },
    { label: "servicos", href: "#servicos" },
    { label: "contato", href: "#contato" },
    {
      label: "vendas boost",
      href: "https://vendasboost.sinowavetech.com.br/landing-page",
      external: true,
    },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F172A] shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight text-white">
          JM<span className="text-blue-500">Tech</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-slate-300 font-medium">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="relative group capitalize"
            >
              <span className="flex items-center gap-2 transition">
                {item.label}

                {item.external && (
                  <span className="text-[10px] bg-blue-600 px-2 py-[2px] rounded-md text-white font-semibold">↗</span>  
                )}
              </span>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                  activeSection === item.label
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg text-white font-semibold">
          Fale Conosco
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-slate-800 px-6 py-6 space-y-4 text-slate-300">
          <a href="#sobre" className="block hover:text-blue-400">
            Sobre
          </a>
          <a href="#servicos" className="block hover:text-blue-400">
            Serviços
          </a>
          <a href="#contato" className="block hover:text-blue-400">
            Contato
          </a>
          <a href="https://vendasboost.sinowavetech.com.br/landing-page" className="block hover:text-blue-400">
            Vendas Boost
          </a>
          <button className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 px-5 py-2 rounded-lg text-white font-semibold shadow-md hover:shadow-xl">
            Fale Conosco
          </button>
        </div>
      )}
    </nav>
  )
}