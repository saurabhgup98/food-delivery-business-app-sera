import React, { useState } from 'react';

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
  iconColor = 'text-gray-400',
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

  const baseClasses = `w-full h-full flex items-center rounded-lg transition-all duration-300 ${border} ${borderColor} hover:${borderHoverColor} ${inputBg} ${inputHoverBg} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`;

  return (
    <div className={baseClasses}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        disabled={disabled}
        className={`flex-1 px-3 py-2 bg-transparent text-white ${placeholderColor} focus:outline-none focus:ring-0 border-none`}
      />
      <button
        onClick={handleSearch}
        disabled={disabled || !searchTerm.trim()}
        className={`px-3 py-2 ${iconColor} hover:${iconColor.replace('text-', 'text-')} transition-all duration-200 ${disabled || !searchTerm.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
      >
        <Icon />
      </button>
    </div>
  );
};

export default SecondarySearchButton;
