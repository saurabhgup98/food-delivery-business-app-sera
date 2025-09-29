import React from 'react';
import { OAuthProviderConfig } from '../constants/authConstants';
import { API_ENDPOINTS } from '../constants/authConstants';
import { GoogleIcon, FacebookIcon } from '../icons/AuthIcons';

interface OAuthProviderProps {
  provider: OAuthProviderConfig;
  disabled?: boolean;
  className?: string;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'google':
      return <GoogleIcon className="w-5 h-5" />;
    case 'facebook':
      return <FacebookIcon className="w-5 h-5" />;
    default:
      return null;
  }
};

export const OAuthProvider: React.FC<OAuthProviderProps> = ({ 
  provider, 
  disabled = false,
  className = "" 
}) => {
  const handleOAuthClick = () => {
    if (disabled) return;
    
    const fullUrl = `${API_ENDPOINTS.BASE_URL}${provider.redirectUrl}`;
    window.location.href = fullUrl;
  };

  return (
    <button
      onClick={handleOAuthClick}
      disabled={disabled}
      className={`
        w-full group relative flex items-center justify-center space-x-3 
        py-3 px-6 rounded-xl transition-all duration-300 text-sm font-medium 
        tracking-wide overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-sera-blue/20
        ${provider.className} ${provider.hoverClassName} ${className}
      `.trim()}
    >
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

      {/* Icon */}
      <div className="relative z-10">{getIcon(provider.icon)}</div>

      {/* Label */}
      <span className="relative z-10">{provider.label}</span>
    </button>
  );
};
