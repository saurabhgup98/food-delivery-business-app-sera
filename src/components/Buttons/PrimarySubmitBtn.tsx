import React from 'react';
import { BUTTON_STYLES } from '../styles/buttonStyles';

interface PrimarySubmitBtnProps {
  text?: string;
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  onClick?: () => void;
  variant?: 'primary' | 'yellow' | 'pink';
}

const PrimarySubmitBtn: React.FC<PrimarySubmitBtnProps> = ({
  text = 'Submit',
  isLoading = false,
  loadingText,
  disabled = false,
  onClick,
  variant = 'primary'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'yellow':
        return {
          bgColor: BUTTON_STYLES.colors.solid.yellow,
          textColor: BUTTON_STYLES.colors.text.dark
        };
      case 'pink':
        return {
          bgColor: BUTTON_STYLES.colors.solid.pink,
          textColor: BUTTON_STYLES.colors.text.white
        };
      default:
        return {
          bgColor: BUTTON_STYLES.colors.solid.primary,
          textColor: BUTTON_STYLES.colors.text.white
        };
    }
  };

  const variantStyles = getVariantStyles();

  const getButtonText = () => {
    if (isLoading) {
      return loadingText || 'Loading...';
    }
    return text;
  };

  return (
    <button
      type="submit"
      className={`
        ${BUTTON_STYLES.base.container} ${BUTTON_STYLES.padding.medium} ${BUTTON_STYLES.sizes.small}
        ${variantStyles.bgColor} ${variantStyles.textColor}
        shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sera-blue
        ${disabled || isLoading ? BUTTON_STYLES.base.disabled : BUTTON_STYLES.base.enabled}
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