import React from 'react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function CTAButton({ href, children, variant = 'primary', className = '' }: CTAButtonProps) {
  const baseClasses = 'px-8 py-3 font-semibold rounded-lg transition-all duration-200';
  
  const variantClasses = {
    primary: 'bg-sera-yellow text-dark-900 hover:bg-sera-yellow/90',
    secondary: 'bg-sera-blue text-white hover:bg-sera-blue/90',
    outline: 'border-2 border-sera-yellow text-sera-yellow hover:bg-sera-yellow hover:text-dark-900'
  };

  return (
    <a 
      href={href} 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
