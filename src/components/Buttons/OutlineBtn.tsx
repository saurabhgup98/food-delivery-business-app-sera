import React from 'react';

interface OutlineTextBtnProps {
  text: string;
  onClick?: () => void;
  borderColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  className?: string;
  disabled?: boolean;
  href?: string; // For config compatibility
}

export const OutlineTextBtn: React.FC<OutlineTextBtnProps> = ({
  text,
  onClick,
  borderColor = 'border-sera-yellow',
  hoverBgColor = 'hover:bg-sera-yellow',
  textColor = 'text-sera-yellow',
  hoverTextColor = 'hover:text-dark-900',
  className = '',
  disabled = false,
  href: _href // Accept for config compatibility - handled by parent
}) => {

  const baseClasses = `w-full h-full font-semibold rounded-lg transition-all duration-200 border-2 ${borderColor} ${textColor} ${hoverBgColor} ${hoverTextColor} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`;

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

export default OutlineTextBtn;