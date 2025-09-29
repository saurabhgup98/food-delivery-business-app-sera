import React from 'react';
import { PrimarySolidBtnProps } from './buttonData';

interface PrimarySolidBtnComponentProps {
  btnProps: PrimarySolidBtnProps;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const PrimarySolidBtn: React.FC<PrimarySolidBtnComponentProps> = ({
  btnProps,
  onClick,
  disabled = false,
  children
}) => {
  const { bgColor, textColor, hoverBgColor, hoverTextColor, border, name } = btnProps;

  return (
    <button
      className={`
        px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
        ${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor || ''} ${border || ''}
        hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sera-blue
        disabled:opacity-50 disabled:cursor-not-allowed
        backdrop-blur-sm
      `.trim()}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children || name}
    </button>
  );
};

export default PrimarySolidBtn;