import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        urlDemo: string;
    }
}

const PortfolioBox = (props : PortfolioBoxProps) => {
const { data } = props;
const { title, image, urlGithub, urlDemo } = data;

    return (
        <div className='p-4 border border-teal-50 rounded-xl'>
           <h3 className='mb-4 text-xl '>
           {title}
           </h3>
           <Image src={image} width={200} height={200} alt="image product"
           className='w-full md:w-[200px] rounded-2xl h-auto'/>
         <div className='flex gap-5 mt-5'>
            <Link href={urlGithub} target='_blank'
            className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80" >
                GitHub 
            </Link>
            <Link href={urlDemo} target='_blank'
            className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary" >
                GitHub Page
            </Link>
         </div>
        </div>
    );
}

export default PortfolioBox;
