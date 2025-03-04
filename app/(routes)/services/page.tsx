import AvatarServices from '@/components/avatar-services';
import CircleImage from '@/components/circle-image';
import SliderServices from '@/components/slider-services';
import TransitionPage from '@/components/transition-page';
import React from 'react';

const ServicesPage = () => {
    return (
        <>
            <TransitionPage/>
            <CircleImage/>
            <AvatarServices/>
            <div className='p-3 grid items-center justify-center h-screen max-w-5xl
            gap-6 mx-auto md:grid-cols-2'>
                <div className='max-w-[450px] mt-20 md:mt-10'>
                    <h1 className='text-2xl leading-tight 
                    text-center md:text-left md:text-4xl md:mb-5'>
                        Mis {' '}
                        <span className='font-bold text-secondary'>
                             Servicios.
                        </span> 
                    </h1>
                        <p className='mb-3 m-3 text-xl text-justify text-gray-300'>
                          Soy un Desarrollador web, recibido de técnico en Desarrollo web y Aplicaciones digitales en el Instituto Superior santa rosa de Calamuchita . 
                          Tengo una profunda pasión por el desarrollo de software y por eso lo doy todo para garantizar la calidad de mi trabajo.
                        </p>
                        <button className='px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65 '>
                            Conecta conmigo
                        </button>
                </div>
                 {/* SLIDER*/}
                <div >
                    <SliderServices/>
                </div>
            </div>
        </>
    );
}

export default ServicesPage;
