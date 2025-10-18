import React from 'react';

interface DropdownArrowDownIconProps {
  className?: string;
  color?: string;
  hoverColor?: string;
  isOpen?: boolean;
}

export const DropdownArrowDownIcon: React.FC<DropdownArrowDownIconProps> = ({
  className = "w-4 h-4",
  color = "text-white/70",
  hoverColor = "text-white",
  isOpen = false
}) => {
  return (
    <div className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''} ${color} hover:${hoverColor}`}>
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};

export default DropdownArrowDownIcon;