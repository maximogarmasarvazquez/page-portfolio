import ContainerPage from '@/components/container';
import TimeLine from '@/components/time-line';
import TransitionPage from '@/components/transition-page';
import React from 'react';
import BotonCv from '@/components/boton-cv';

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />

            <ContainerPage>

                <div className="max-w-4xl mx-auto text-center md:text-left">
                    
                    <h1 className='text-3xl md:text-5xl font-bold leading-tight mt-10 mb-6'>
                        Mi <span className='text-secondary'>trayectoria profesional</span>
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg mb-12 leading-relaxed">
                        Soy desarrollador full stack enfocado en construir aplicaciones modernas,
                        escalables y bien diseñadas. A lo largo de mi experiencia trabajé con
                        distintas tecnologías creando soluciones reales orientadas a usuarios.
                    </p>

                    <TimeLine />

                    <div className='flex justify-center mt-16'>
                        <BotonCv />
                    </div>

                </div>
            </ContainerPage>
        </>
    );
}

export default PageAboutMe;
