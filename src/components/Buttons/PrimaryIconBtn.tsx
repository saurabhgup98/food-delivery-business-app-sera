import React from 'react';
import { BUTTON_STYLES } from '../styles/buttonStyles';

interface PrimaryIconBtnProps {
    icon: React.ComponentType;
    iconColor?: string;
    iconHoverColor?: string;
    isSolid?: boolean;
    bgColor?: string;
    hoverBgColor?: string;
    border?: string;
    borderHoverColor?: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const PrimaryIconBtn: React.FC<PrimaryIconBtnProps> = ({
    icon: Icon,
    iconColor = BUTTON_STYLES.colors.icon.white,
    iconHoverColor = iconColor,
    isSolid = false,
    bgColor = isSolid ? BUTTON_STYLES.colors.solid.primary : BUTTON_STYLES.colors.transparent.primary,
    hoverBgColor = isSolid ? `${bgColor}/80` : BUTTON_STYLES.colors.transparent.primary,
    border = BUTTON_STYLES.borders.none,
    borderHoverColor = BUTTON_STYLES.borders.none,
    className = '',
    onClick,
    disabled = false
}) => {
    const baseClasses = `${BUTTON_STYLES.base.container} ${border} ${bgColor} hover:${hoverBgColor} ${iconColor} hover:${iconHoverColor} hover:${borderHoverColor} ${className} ${disabled ? BUTTON_STYLES.base.disabled : BUTTON_STYLES.base.enabled}`;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={baseClasses}
        >
            <Icon />
        </button>
    );
};

export default PrimaryIconBtn;