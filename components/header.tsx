import React from 'react'
import MotionTransition from './transition-component'
import Link from 'next/link'
import { socialNetworks } from '@/data'

const Header = () => {
  return (
    <MotionTransition
      position='bottom'
      className="absolute z-40 inline-block w-full top-5 md:top-10 px-6 md:px-20"
    >
      <header>
        <div className='container flex flex-col items-center justify-between mb-20 max-w-6xl mx-auto md:flex-row'>
          
          <Link href='/' className='text-center md:text-left'>
            <div className='my-3'>
              <h1 className='text-3xl md:text-4xl font-semibold tracking-tight'>
                Maximo Garmasar
              </h1>
              <h4 className='text-xl text-blue-500 font-semibold '>
                    Full Stack Developer
              </h4>
            </div>
          </Link>

          <div className='flex items-center justify-center gap-6 mt-2  md:mt-0 text-lg'>
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target='_blank'
                className='transition-all duration-300 hover:text-secondary hover:scale-110'
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
