"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

type ServicoCardProps = {
  icon: ReactNode
  titulo: string
  descricao: string
  delay?: number
}

export default function ServicoCard({
  icon,
  titulo,
  descricao,
  delay = 0,
}: ServicoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="bg-[#0F172A] p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition duration-300"
    >
      <div className="flex justify-center text-4xl mb-4">{icon}</div>

      <h3 className="text-2xl font-bold mb-4">
        {titulo}
      </h3>

      <p className="text-slate-400">
        {descricao}
      </p>
    </motion.div>
  )
}