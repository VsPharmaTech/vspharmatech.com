import type { ReactNode } from 'react';

interface MainButtonProps {
  variant?: 'primary' | 'secondary';
  href: string;
  children: ReactNode;
  className?: string;
}

export default function MainButton({ 
  variant = 'primary', 
  href, 
  children, 
  className = '' 
}: MainButtonProps) {
  const baseStyles = 'w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-sky-500 active:bg-blue-800',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-slate-400 hover:border-sky-500 hover:text-white active:bg-slate-50 active:text-blue-800'
  };

  return (
    <a 
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      
    </a>
  );
}