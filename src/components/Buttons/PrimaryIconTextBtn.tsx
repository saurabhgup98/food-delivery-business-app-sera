import React from 'react';

interface PrimaryIconTextBtnProps {
  text: string;
  leftIcon?: React.ComponentType;
  rightIcon?: React.ComponentType;
  leftIconColor?: string;
  leftIconHoverColor?: string;
  rightIconColor?: string;
  rightIconHoverColor?: string;
  isSolid?: boolean;
  bgColor?: string;
  hoverBgColor?: string;
  border?: string;
  borderHoverColor?: string;
  textColor?: string;
  textHoverColor?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const PrimaryIconTextBtn: React.FC<PrimaryIconTextBtnProps> = ({
  text,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconColor = 'text-white',
  leftIconHoverColor = leftIconColor,
  rightIconColor = 'text-white',
  rightIconHoverColor = rightIconColor,
  isSolid = false,
  bgColor = isSolid ? 'bg-sera-blue' : 'bg-transparent',
  hoverBgColor = isSolid ? `${bgColor}/80` : 'bg-white/30',
  border = 'border-none',
  borderHoverColor = 'border-none',
  textColor = 'text-white',
  textHoverColor = textColor,
  className = '',
  onClick,
  disabled = false
}) => {
  const baseClasses = `w-full h-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 font-medium ${border} ${bgColor} hover:${hoverBgColor} ${textColor} hover:${textHoverColor} hover:${borderHoverColor} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {LeftIcon && (
        <div className={`${leftIconColor} hover:${leftIconHoverColor} transition-colors duration-200 flex-shrink-0`}>
          <LeftIcon />
        </div>
      )}
      <span className="font-medium whitespace-nowrap">{text}</span>
      {RightIcon && (
        <div className={`${rightIconColor} hover:${rightIconHoverColor} transition-colors duration-200 flex-shrink-0`}>
          <RightIcon />
        </div>
      )}
    </button>
  );
};

export default PrimaryIconTextBtn;
