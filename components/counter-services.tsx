'use client'
import React from 'react';
import { dataCounter } from '@/data';
import CountUp from 'react-countup';

const CounterServices = () => {
  return (
    <div
      className='
        grid max-w-3xl mx-auto my-8
        grid-cols-2 md:grid-cols-4
        gap-4 md:gap-6
      '
    >
      {dataCounter.map(({ id, endCounter, text, lineRight }) => (
        <div key={id}>
          <div
            className={`
              px-4
              ${lineRight ? 'md:border-r border-white/10' : ''}
            `}
          >
            <p className='flex mb-2 text-2xl md:text-4xl font-bold text-white'>
              + <CountUp end={endCounter} duration={3} />
            </p>

            <p className='text-xs uppercase text-white/60 max-w-[140px]'>
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterServices;