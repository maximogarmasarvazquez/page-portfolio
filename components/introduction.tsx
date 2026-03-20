"use client";

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

const Introduction = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-darkBg px-6'>
      
      <div className='max-w-4xl text-center md:text-left'>

        {/* Título principal */}
        <h1 className='text-3xl md:text-5xl font-bold leading-tight mb-6'>
          Hola, soy <span className='text-secondary'>Maximo</span> 💻
          <br />
          Full Stack Developer
        </h1>

        {/* Animación más sutil */}
        <h2 className='text-lg md:text-2xl text-white-400 mb-6'>
          <TypeAnimation
            sequence={[
              'Construyo aplicaciones web modernas.',
              2000,
              'Desarrollo experiencias escalables.',
              2000,
              'Trabajo con React, Node, SQL y mas.',
              2000,
            ]}
            repeat={Infinity}
            speed={50}
          />
        </h2>

        {/* Descripción */}
        <p className='text-base md:text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed'>
          Desarrollo aplicaciones web <span className='text-white'>modernas y escalables</span>, 
          combinando diseño y tecnología para crear 
          <span className='text-secondary'> experiencias de usuario de alto nivel</span>.
        </p>

        {/* Botones */}
        <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-start'>
          <Link
            href='/portfolio'
            className='px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition-all'
          >
            Ver proyectos
          </Link>

          <Link
            href='/mas-info'
            className='px-6 py-3 rounded-xl border border-secondary text-secondary hover:bg-secondary hover:text-black transition-all'
          >
            Contacto
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Introduction;
