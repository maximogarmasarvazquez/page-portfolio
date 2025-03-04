'use client'
import MotionTransition from './transition-component';
import Image from 'next/image';
const AvatarPortfolio = () => {
    return (
        <MotionTransition position="bottom" className='bottom-0 left-0 hidden md:inline-block md:absolute'>
            <Image
                src='/avatar-works.png'
                alt='Avatar portfolio'
                width={300}
                height={300}
                className='w-full h-full'/>
        </MotionTransition>
    );
}

export default AvatarPortfolio;
