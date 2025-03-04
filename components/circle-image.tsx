
import React from 'react';
import Image from 'next/image';

const CircleImage = () => {
    return (
        <div className='bottom-0 right-0 hidden md:inline-block md:absolute'>
            <Image 
                src='/images/megafono.png' 
                width={300} 
                height={300} 
                alt='megafono'
                className='w-full h-full object-contain'
            />
        </div>
    );
}

export default CircleImage;