import { ReactNode } from 'react';

// Export interface tipini
export interface CustomButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

// Export default bileşeni
export default function CustomButton({
  children,
  onClick,
}: CustomButtonProps) {
  return (
    <button onClick={onClick} className='your-button-styles'>
      {children}
    </button>
  );
}
