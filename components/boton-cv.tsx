import React from 'react'

function botonCv() {
  return (
    <div>
        {/* Botón descargar cv */}
        <a href="/images/MaximoGarmasarCVDeveloper.pdf"
                                    download="MaximoGarmasarCVDeveloper.pdf"
                                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                                    target="_blank" rel="noopener noreferrer">
                                    Descargar mi CV
        </a>
    </div>
  )
}

export default botonCv
