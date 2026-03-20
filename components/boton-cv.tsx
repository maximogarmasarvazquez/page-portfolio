import React from 'react'

function BotonCv() {
  return (
    <div>
      <a
        href="/images/MaximoGarmasarCVDeveloper.pdf"
        download="MaximoGarmasarCV2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-xl border border-secondary text-secondary 
        hover:bg-secondary hover:text-black transition-all duration-300 
        shadow-md hover:shadow-secondary/40 hover:scale-105"
      >
        Descargar CV
      </a>
    </div>
  )
}

export default BotonCv
