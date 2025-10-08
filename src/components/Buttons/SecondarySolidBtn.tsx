import React from 'react';

interface SecondarySolidBtnProps {
  text: string;
  onClick?: () => void;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  className?: string;
  disabled?: boolean;
}

export const SecondarySolidBtn: React.FC<SecondarySolidBtnProps> = ({
  text,
  onClick,
  bgColor = 'bg-sera-yellow',
  hoverBgColor = 'hover:bg-sera-yellow/90',
  textColor = 'text-dark-900',
  hoverTextColor = 'hover:text-dark-900',
  className = '',
  disabled = false
}) => {
  const baseClasses = `w-full h-full font-semibold rounded-lg transition-all duration-200 ${bgColor} ${hoverBgColor} ${textColor} ${hoverTextColor} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {text}
    </button>
  );
};

export default SecondarySolidBtn;