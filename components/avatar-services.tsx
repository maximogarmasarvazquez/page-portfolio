import React from 'react';
import MotionTransition from './transition-component';
import Image from 'next/image';
const AvatarServices = () => {
    return (
        <MotionTransition position='right'
        className='bottom-0 left-0 hidden md:inline-block md:absolute'>
            <Image src='/images/progrmador.png' width={200} height={200}
             className='w-[300px] h-full' alt='Avatar'/>
        </MotionTransition>
    );
}

export default AvatarServices;
