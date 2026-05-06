'use client';
import React from 'react'
import MotionTransition from './transition-component'
import Link from 'next/link'
import { socialNetworks } from '@/data'

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 w-full top-6 md:top-10 px-6 md:px-20"
    >
      <header>
        <div className="flex items-center justify-between max-w-6xl mx-auto">

          {/* 🔥 BRAND */}
          <Link href="/" className="group">
            <div className="flex flex-col leading-tight">

              {/* Nombre */}
              <h1 className="
                text-2xl md:text-3xl font-semibold
                tracking-tight
                text-white
                group-hover:opacity-80 transition
              ">
                Maximo Vazquez
              </h1>

              {/* Rol PRO */}
              <span className="
                text-sm md:text-base
                text-transparent bg-clip-text
                bg-gradient-to-r from-blue-400 to-purple-500
                font-medium
              ">
                Full Stack Developer
              </span>

            </div>
          </Link>

          {/* 🔥 SOCIAL */}
          <div className="
            flex items-center gap-4
            px-4 py-2 rounded-full

            bg-white/5 backdrop-blur-xl
            border border-white/10
          ">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="
                  text-white/70
                  hover:text-white
                  hover:scale-110
                  transition-all duration-300
                "
              >
                {logo}
              </Link>
            ))}
          </div>

        </div>
      </header>
    </MotionTransition>
  )
}

export default Header