// PrimarySubmitBtn.tsx - Submit button component for forms

import React from 'react';
import { PrimarySolidBtnProps } from './buttonData';

interface PrimarySubmitBtnProps {
  btnProps: PrimarySolidBtnProps;
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const PrimarySubmitBtn: React.FC<PrimarySubmitBtnProps> = ({
  btnProps,
  isLoading = false,
  loadingText,
  disabled = false,
  children,
  onClick,
}) => {
  const { bgColor, textColor, hoverBgColor, hoverTextColor, border, name } = btnProps;

  const getButtonText = () => {
    if (isLoading) {
      return loadingText || 'Loading...';
    }
    return children || name;
  };

  return (
    <button
      type="submit"
      className={`
        px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
        ${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor || ''} ${border || ''}
        hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sera-blue
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        backdrop-blur-sm
      `.trim()}
      onClick={onClick}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          <span>{getButtonText()}</span>
        </div>
      ) : (
        getButtonText()
      )}
    </button>
  );
};

export default PrimarySubmitBtn;
