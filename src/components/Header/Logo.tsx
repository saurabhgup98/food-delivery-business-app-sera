import React from 'react';
import { headerData } from './headerData';

interface LogoProps {
  onClick?: () => void;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ onClick, className = '' }) => {
  return (
    <div 
      className={`flex items-center space-x-2 group cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* SERA Logo - Scooter Delivery Icon */}
      <div className="relative">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
          {/* Scooter Icon */}
          <div className="relative w-6 h-6">
            {/* Scooter body */}
            <div className="absolute bottom-0 left-0 w-4 h-2 bg-sera-blue rounded-full"></div>
            {/* Scooter handle */}
            <div className="absolute top-0 right-0 w-1 h-3 bg-sera-blue rounded-full"></div>
            {/* Delivery box */}
            <div className="absolute bottom-1 right-1 w-2 h-1.5 bg-sera-yellow rounded-sm"></div>
            {/* Person */}
            <div className="absolute top-1 left-1 w-1 h-1.5 bg-sera-orange rounded-full"></div>
          </div>
        </div>
        {/* Animated delivery trail */}
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-sera-yellow rounded-full animate-pulse"></div>
      </div>
      
      {/* Brand Name */}
      <div className="hidden sm:block mr-6">
        <h1 className="text-white font-bold text-xl">
          <span className="text-white">{headerData.brandName.split(' ')[0]}</span>
          <span className="text-sera-yellow"> {headerData.brandName.split(' ')[1]}</span>
        </h1>
        <p className="text-xs text-white/80 font-medium">{headerData.brandSubtitle}</p>
      </div>
    </div>
  );
};

export default Logo;
