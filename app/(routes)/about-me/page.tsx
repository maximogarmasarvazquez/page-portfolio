import Avatar from '@/components/avatar';
import ContainerPage from '@/components/container';
import TimeLine from '@/components/time-line';
import TransitionPage from '@/components/transition-page';
import React from 'react';

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage/>
            <ContainerPage>
                <Avatar/>
                <h1 className='text-2xl leading-tight text-center
                 md:text-left md:text-4xl md:mt-10 md:ml-20'>
                    Toda mi {''}
                    <span className='font-bold text-secondary'> formacion profesional</span>
                   
                </h1>
                    <TimeLine/>
            </ContainerPage>
        </>
    );
}

export default PageAboutMe;
