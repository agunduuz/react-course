'use client';

import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick: string;
}

const CustomButton = ({ children, onClick }: CustomButtonProps) => {
  const handleClick = () => {
    new Function(onClick)();
  };

  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
