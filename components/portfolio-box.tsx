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
<div className="w-[300px] p-4 border border-teal-50 rounded-xl flex flex-col items-center">
  <h3 className="mb-4 text-xl text-center">{title}</h3>
  <div className="w-full h-[180px] flex items-center justify-center overflow-hidden">
    <Image
      src={image}
      alt="image product"
      width={0}
      height={0}
      sizes="100vw"
      className="h-full w-auto object-contain rounded-2xl"
    />
  </div>
  <div className="flex gap-3 justify-center mt-5">
    <Link
      href={urlGithub}
      target="_blank"
      className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
    >
      GitHub
    </Link>
    <Link
      href={urlDemo}
      target="_blank"
      className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
    >
      GitHub Page
    </Link>
  </div>
</div>

    );
}

export default PortfolioBox;
