import React from 'react';
import { BUTTON_STYLES } from '../styles/buttonStyles';

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
  leftIconColor = BUTTON_STYLES.colors.icon.white,
  leftIconHoverColor = leftIconColor,
  rightIconColor = BUTTON_STYLES.colors.icon.white,
  rightIconHoverColor = rightIconColor,
  isSolid = false,
  bgColor = isSolid ? BUTTON_STYLES.colors.solid.primary : BUTTON_STYLES.colors.transparent.primary,
  hoverBgColor = isSolid ? `${bgColor}/80` : BUTTON_STYLES.colors.transparent.primary,
  border = BUTTON_STYLES.borders.none,
  borderHoverColor = BUTTON_STYLES.borders.none,
  textColor = BUTTON_STYLES.colors.text.white,
  textHoverColor = textColor,
  className = '',
  onClick,
  disabled = false
}) => {
  const baseClasses = `${BUTTON_STYLES.base.container} ${BUTTON_STYLES.icon.space} ${BUTTON_STYLES.padding.small} ${border} ${bgColor} hover:${hoverBgColor} ${textColor} hover:${textHoverColor} hover:${borderHoverColor} ${className} ${disabled ? BUTTON_STYLES.base.disabled : BUTTON_STYLES.base.enabled}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {LeftIcon && (
        <div className={`${leftIconColor} hover:${leftIconHoverColor} transition-colors duration-200 ${BUTTON_STYLES.icon.icon}`}>
          <LeftIcon />
        </div>
      )}
      <span className={`font-medium ${BUTTON_STYLES.icon.text}`}>{text}</span>
      {RightIcon && (
        <div className={`${rightIconColor} hover:${rightIconHoverColor} transition-colors duration-200 ${BUTTON_STYLES.icon.icon}`}>
          <RightIcon />
        </div>
      )}
    </button>
  );
};

export default PrimaryIconTextBtn;