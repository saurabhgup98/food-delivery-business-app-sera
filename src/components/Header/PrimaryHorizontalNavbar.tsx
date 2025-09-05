import React from 'react';
import { NavigationItem } from './headerData';

interface PrimaryHorizontalNavbarProps {
  navigationItems: NavigationItem[];
  onNavClick: (itemName: string) => void;
  className?: string;
}

const PrimaryHorizontalNavbar: React.FC<PrimaryHorizontalNavbarProps> = ({
  navigationItems,
  onNavClick,
  className = ''
}) => {
  return (
    <nav className={`hidden lg:flex items-center space-x-0.5 ${className}`}>
      {navigationItems.map((item) => (
        <button
          key={item.name}
          onClick={() => onNavClick(item.name)}
          className={`
            flex items-center space-x-1.5 px-3 py-1.5 text-white text-sm font-medium rounded-lg transition-all duration-300 group relative
            ${item.isActive 
              ? 'bg-sera-yellow/20 text-sera-yellow' 
              : 'text-white/90 hover:bg-white/10 hover:text-white'
            }
          `}
        >
          {/* Navigation Icon */}
          <div className={`
            w-5 h-5 flex items-center justify-center rounded-md transition-all duration-300
            ${item.isActive 
              ? 'bg-sera-yellow text-dark-900' 
              : 'bg-white/10 text-white group-hover:bg-sera-yellow group-hover:text-dark-900'
            }
          `}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          
          {/* Navigation Text */}
          <span className="flex-1 text-left">{item.name}</span>
          
          {/* Badge */}
          {item.badge && (
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold bg-sera-yellow text-dark-900 px-1 rounded text-[10px]">
                {item.badge.split(' ')[0]}
              </span>
              <span className="text-xs font-bold bg-sera-yellow text-dark-900 px-1 rounded -mt-0.5 text-[10px]">
                {item.badge.split(' ')[1]}
              </span>
            </div>
          )}
          
          {/* Active Indicator */}
          {item.isActive && (
            <div className="w-1.5 h-1.5 bg-sera-yellow rounded-full animate-pulse"></div>
          )}
        </button>
      ))}
    </nav>
  );
};

export default PrimaryHorizontalNavbar;
