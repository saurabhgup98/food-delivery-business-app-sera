import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function CTAButton({ href, children, variant = 'primary', className = '' }: CTAButtonProps) {
  const baseClasses = 'cta-button';
  
  const variantClasses = {
    primary: 'cta-primary',
    secondary: 'cta-secondary',
    outline: 'cta-outline'
  };

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
