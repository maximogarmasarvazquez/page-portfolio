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
        <div className="max-w-3xl mx-auto text-center md:text-left">

          {/* 🔥 EYEBROW */}
          <p className="text-sm uppercase tracking-widest text-secondary/70 mb-3">
            Sobre mí
          </p>

          {/* 🔥 TITULO PRO */}
          <h1 className="
            text-4xl md:text-6xl 
            font-bold leading-[1.1] 
            mb-6 tracking-tight
          ">
            Mi{" "}
            <span className="
              text-transparent bg-clip-text 
              bg-gradient-to-r from-secondary to-blue-400
            ">
              trayectoria profesional
            </span>
          </h1>

          {/* 🔥 DESCRIPCIÓN MEJORADA */}
          <p className="
            text-gray-400 
            text-base md:text-lg 
            mb-14 
            leading-relaxed
            max-w-2xl
          ">
            Soy desarrollador full stack enfocado en construir{" "}
            <span className="text-white">aplicaciones modernas y escalables</span>, 
            combinando diseño y tecnología para crear experiencias digitales
            que generan impacto real en usuarios y negocios.
          </p>

          {/* TIMELINE */}
          <TimeLine />

          {/* CTA */}
          <div className="flex justify-center mt-20">
            <BotonCv />
          </div>

        </div>
      </ContainerPage>
    </>
  );
}

export default PageAboutMe;