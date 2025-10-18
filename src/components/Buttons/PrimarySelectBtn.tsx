import React from 'react';
import { BUTTON_STYLES } from '../styles/buttonStyles';

interface PrimarySelectBtnProps {
  text: string;
  onClick: () => void;
  textColor?: string;
  textHoverColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
  border?: string;
  hoverBorderColor?: string;
  disabled?: boolean;
  isSelected?: boolean;
  className?: string;
}

export const PrimarySelectBtn: React.FC<PrimarySelectBtnProps> = ({
  text,
  onClick,
  textColor = BUTTON_STYLES.colors.text.white,
  textHoverColor = textColor,
  bgColor = BUTTON_STYLES.colors.transparent.white,
  hoverBgColor = BUTTON_STYLES.colors.transparent.white,
  border = BUTTON_STYLES.borders.whiteLight,
  hoverBorderColor = BUTTON_STYLES.borders.white,
  disabled = false,
  isSelected = false,
  className = ''
}) => {
  // Dynamic classes based on selection state
  const getDynamicClasses = () => {
    if (isSelected) {
      return {
        bg: 'bg-gradient-to-r from-sera-pink/20 to-sera-pink/10',
        border: 'border-sera-pink/60',
        text: 'text-sera-pink',
        shadow: 'shadow-lg shadow-sera-pink/20'
      };
    }
    return {
      bg: bgColor,
      border: border,
      text: textColor,
      shadow: ''
    };
  };

  const dynamicClasses = getDynamicClasses();

  const baseClasses = `
    ${BUTTON_STYLES.base.container} 
    ${BUTTON_STYLES.padding.medium}
    group relative p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105
    ${dynamicClasses.bg} ${dynamicClasses.border} ${dynamicClasses.text} ${dynamicClasses.shadow}
    hover:${hoverBgColor} hover:${textHoverColor} hover:${hoverBorderColor}
    ${disabled ? BUTTON_STYLES.base.disabled : BUTTON_STYLES.base.enabled}
    ${className}
  `.trim();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      <span className="text-sm font-medium relative z-10">{text}</span>
      {isSelected && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl animate-pulse"></div>
      )}
    </button>
  );
};

export default PrimarySelectBtn;