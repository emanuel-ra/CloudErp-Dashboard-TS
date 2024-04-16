import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'blue' | 'red' | 'yellow' | 'gray'

interface Props {
  children: React.ReactNode;
  path: string;
  variant?: Variant;
}

export const ButtonLinkCircle = ({ children, path, variant='blue' }: Props) => {
  return (
    <>
      <Link
        className={`
        bg-${variant}-700/90 
        hover:bg-${variant}-700
        focus:ring-${variant}-300 
        text-white 
        hover:text-white 
        focus:ring-4 
        focus:outline-none         
        font-medium 
        rounded-full 
        text-sm 
        p-2.5 
        text-center 
        inline-flex 
        items-center`}
        to={path}
      >
        {children}
      </Link>
    </>
  );
};
