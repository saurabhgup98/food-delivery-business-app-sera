import React from 'react';
import GoogleIcon from '../icons/GoogleIcon';
import FacebookIcon from '../icons/FacebookIcon';

interface OAuthButtonProps {
  provider: 'google' | 'facebook';
  onClick: () => void;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const OAuthButton: React.FC<OAuthButtonProps> = ({ 
  provider, 
  onClick, 
  className,
  iconClassName = "w-5 h-5",
  textClassName = "font-medium"
}) => {
  const getIcon = () => {
    switch (provider) {
      case 'google':
        return <GoogleIcon />;
      case 'facebook':
        return <FacebookIcon />;
      default:
        return null;
    }
  };

  const getText = () => {
    switch (provider) {
      case 'google':
        return 'Continue with Google';
      case 'facebook':
        return 'Continue with Facebook';
      default:
        return '';
    }
  };

  return (
    <button
      onClick={onClick}
      className={className}
    >
      <div className={iconClassName}>
        {getIcon()}
      </div>
      <span className={textClassName}>{getText()}</span>
    </button>
  );
};

export default OAuthButton;
