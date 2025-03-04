import AvatarPortfolio from '@/components/avatar-portfolio';
import ContainerPage from '@/components/container';
import React from 'react';
import TransitionPage from '@/components/transition-page';
import CircleImage from '@/components/circle-image';
import PortfolioBox from '@/components/portfolio-box';
import { dataPortfolio } from '@/data';
const PortfolioPage = () => {
    return (
        <ContainerPage>
            <TransitionPage/>

                <AvatarPortfolio/>
                <CircleImage/>

             <div className='flex flex-col justify-center h-full'>
                <h1 className='text-2xl leading-tight text-center 
                  md:text-4xl md:mb-5 '>Mis ultimos
                 <span className='text-secondary font-bold'> trabajos realizados </span>
                </h1>

                <div className='relative z-10 grid
                 max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4'>
                 {dataPortfolio.map((data) => (
                    <PortfolioBox key={data.id} data={data}/>
                    ))}
                </div>
             </div>
        </ContainerPage>
    );
}

export default PortfolioPage;
