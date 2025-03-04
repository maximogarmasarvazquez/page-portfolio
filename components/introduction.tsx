'use client'  
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

const Introduction = () => {
  return (
   <div className='z-20 w-full bg-darkBg/60'>
    <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
      <Image src="/home-4.png" priority width="600" height="600" alt="Profile pic" />

      <div className='flex flex-col justify-center max-w-md'>
        <h1 className='mb-5 text-2xl leading-tight text-center md:text-left
        md:text-4xl md:mb-10 '>
          Si puedes pensarlo,
          <TypeAnimation
          sequence={[
            ' puedes construirlo.',
            1000,
            ' puedes diseñarlo.',
            1000,
            ' puedes programarlo.',
            1000,
            ' puedes hacerlo.',
            1000
          ]}
          repeat={Infinity}
          wrapper='span'
          speed={50}
          className='font-bold text-secondary'
          />
        </h1>
        <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8'>
          Como desarrollador front-end, me dedico a combinar diseños y tecnologias para crear experiencias de usuario atractivas y funcionales.
        </p>

        <div className='flex items-center justify-center gap-3 md:justify-start md:gap-10'>
            <Link href='/projects' className='px-3 py-2 transition-all border-2 cursor-pointer text-md 
            w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
              Ver proyectos
            </Link>
       
            <Link href='/projects' className='px-3 py-2 transition-all border-2 cursor-pointer text-md 
            w-fit rounded-xl hover:shadow-xl text-tercero border-tercero hover:shadow-tercero'>
              Contacta conmigo
            </Link>
        </div>
        

      </div>
    </div>
   </div>
  )
}

export default Introduction