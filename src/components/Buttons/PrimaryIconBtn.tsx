import React from 'react';

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
    iconColor = 'text-white',
    iconHoverColor = iconColor,
    isSolid = false,
    bgColor = isSolid ? 'bg-sera-blue' : 'bg-transparent',
    hoverBgColor = isSolid ? `${bgColor}/80` : 'bg-white/30',
    border = 'border-none',
    borderHoverColor = 'border-none',
    className = '',
    onClick,
    disabled = false
}) => {
    const baseClasses = `w-full h-full flex items-center justify-center rounded-lg transition-all duration-200 ${border} ${bgColor} hover:${hoverBgColor} ${iconColor} hover:${iconHoverColor} hover:${borderHoverColor} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}`;

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