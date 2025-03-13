
import SliderServices from '@/components/slider-services';
import TransitionPage from '@/components/transition-page';
import React from 'react';
import Link from 'next/link';
import TechsFront from '@/components/techsFront';
import TechsBack from '@/components/techsBack';
const ServicesPage = () => {
    return (
        <>
            <TransitionPage/>
           
            <div className='mt-20 p-5 grid items-center justify-center md:h-[500px] max-w-5xl
            gap-6 mx-auto md:grid-cols-2'>
                <div className='max-w-[450px] mt-20 md:mt-10'>
                    <h1 className='text-2xl leading-tight 
                    text-center md:text-left md:text-4xl md:mb-5'>
                        Mis {' '}
                        <span className='font-bold text-secondary'>
                             Servicios.
                        </span> 
                    </h1>
                        <p className='mb-3 pb-2 m-3 text-xl text-justify text-gray-300'>
                        Soy técnico en Desarrollo Web y Aplicaciones Digitales, formado en el Instituto Superior Santa Rosa de Calamuchita.
                        Me apasiona transformar ideas en experiencias digitales funcionales y atractivas. Cada proyecto es una oportunidad para innovar, mejorar y entregar soluciones de alta calidad🚀.
                        </p>
                        <Link href="/mas-info" className=' px-3 py-3 rounded-lg bg-secondary hover:bg-secondary/65 '>
                            Conecta conmigo
                        </Link>
                </div>
                 {/* SLIDER*/}
                <div className='mt-15 max-w-[450px] '>
                    <SliderServices/>
                </div>
                </div>
                <div className="mb-20  sm:flex-row md:flex items-center gap-5 justify-center">
                    <div>
                         <TechsFront />
                    </div>
                   
                    <div>
                         <TechsBack />
                    </div>
                </div>
            
        </>
    );
}

export default ServicesPage;
