import React, { useState } from 'react';
import { BUTTON_STYLES } from '../styles/buttonStyles';

interface SecondarySearchButtonProps {
  placeholder?: string;
  placeholderColor?: string;
  icon: React.ComponentType;
  iconColor?: string;
  inputBg?: string;
  inputHoverBg?: string;
  border?: string;
  borderColor?: string;
  borderHoverColor?: string;
  onClick?: (searchTerm: string) => void;
  className?: string;
  disabled?: boolean;
}

export const SecondarySearchButton: React.FC<SecondarySearchButtonProps> = ({
  placeholder = 'Search...',
  placeholderColor = 'placeholder-gray-400',
  icon: Icon,
  iconColor = BUTTON_STYLES.colors.icon.gray,
  inputBg = 'bg-white/10',
  inputHoverBg = 'hover:bg-white/15',
  border = 'border-none',
  borderColor = 'border-white/20',
  borderHoverColor = 'border-white/40',
  onClick,
  className = '',
  disabled = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (onClick && searchTerm.trim()) {
      onClick(searchTerm.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const baseClasses = `${BUTTON_STYLES.base.container} transition-all duration-300 ${border} ${borderColor} hover:${borderHoverColor} ${inputBg} ${inputHoverBg} ${className} ${disabled ? BUTTON_STYLES.base.disabled : BUTTON_STYLES.base.enabled}`;

  return (
    <div className={baseClasses}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        disabled={disabled}
        className={`flex-1 ${BUTTON_STYLES.padding.small} bg-transparent text-white ${placeholderColor} focus:outline-none focus:ring-0 border-none`}
      />
      <button
        onClick={handleSearch}
        disabled={disabled || !searchTerm.trim()}
        className={`${BUTTON_STYLES.padding.small} ${iconColor} hover:${iconColor.replace('text-', 'text-')} transition-all duration-200 ${disabled || !searchTerm.trim() ? BUTTON_STYLES.base.disabled : 'hover:scale-110'}`}
      >
        <Icon />
      </button>
    </div>
  );
};

export default SecondarySearchButton;