import React from 'react'

function BotonCv() {
  return (
    <div>
      <a
        href="/images/MaximoGarmasarCVDeveloper.pdf"
        download="MaximoGarmasarCV2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group relative inline-flex items-center justify-center
          px-7 py-3 rounded-xl
          
          bg-gradient-to-r from-secondary to-blue-500
          text-black font-semibold

          transition-all duration-300
          hover:scale-105

          shadow-lg shadow-secondary/20
          hover:shadow-secondary/40
        "
      >
        {/* 🔥 Glow */}
        <span className="
          absolute inset-0 rounded-xl
          bg-gradient-to-r from-secondary to-blue-500
          opacity-0 group-hover:opacity-40
          blur-xl transition duration-500
        " />

        {/* Texto */}
        <span className="relative z-10">
          Descargar CV
        </span>
      </a>
    </div>
  )
}

export default BotonCv