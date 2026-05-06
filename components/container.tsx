import React from 'react';

interface ContainerPageProps {
  children: React.ReactNode;
}

const ContainerPage = ({ children }: ContainerPageProps) => {
  return (
    <div
      className="
        w-full max-w-6xl mx-auto
        px-4 md:px-6
        pt-32 pb-24 md:pt-40 md:pb-32
      "
    >
      {children}
    </div>
  );
};

export default ContainerPage;