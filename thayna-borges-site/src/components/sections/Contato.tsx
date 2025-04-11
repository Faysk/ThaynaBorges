'use client'

import { Mail, Instagram, Phone } from 'lucide-react'

export default function Contato() {
  return (
    <section id="contato" className="section">
      <div className="section__container text-center space-y-8">
        <h2 className="section__title">Entre em Contato</h2>

        <p className="section__text text-muted max-w-xl mx-auto">
          Estou aqui para te acolher com atenção e escuta genuína. Escolha a forma que preferir para entrar em contato comigo:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
          <a
            href="https://wa.me/5511959478079"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-green-600 hover:bg-green-700 text-white flex justify-center items-center gap-2 shadow-md"
          >
            <Phone size={18} />
            WhatsApp
          </a>

          <a
            href="https://instagram.com/thaynaborges_psi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-pink-500 hover:bg-pink-600 text-white flex justify-center items-center gap-2 shadow-md"
          >
            <Instagram size={18} />
            Instagram
          </a>

          <a
            href="mailto:contato@thaynaborges.com"
            className="btn bg-gray-700 hover:bg-gray-800 text-white flex justify-center items-center gap-2 shadow-md"
          >
            <Mail size={18} />
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
