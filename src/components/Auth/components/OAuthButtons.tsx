// OAuthButtons.tsx - OAuth authentication buttons component

import React from 'react';
import { useOAuthAuth } from '../hooks/AuthFormHooks';
import { OAuthBtn, OAuthProvider } from './OAuthBtn';
import { GoogleIcon, FacebookIcon } from '../icons/OAuthIcons';

interface OAuthButtonsProps {
  selectedRole?: string | null;
  disabled?: boolean;
}

export const OAuthButtons: React.FC<OAuthButtonsProps> = ({ 
  selectedRole = null, 
  disabled = false 
}) => {
  const { handleOAuthLogin } = useOAuthAuth();

  // OAuth provider configurations
  const oauthProviders: OAuthProvider[] = [
    {
      name: 'google',
      label: 'Continue with Google',
      icon: <GoogleIcon />,
      className: 'bg-white/5 border border-white/10 text-white',
      hoverClassName: 'hover:bg-white/10 hover:border-white/20',
    },
    {
      name: 'facebook',
      label: 'Continue with Facebook',
      icon: <FacebookIcon />,
      className: 'bg-blue-600/10 border border-blue-600/20 text-blue-400',
      hoverClassName: 'hover:bg-blue-600/20 hover:border-blue-600/30 hover:text-blue-300',
    },
  ];

  // Don't show OAuth buttons if no role is selected or if disabled
  if (!selectedRole || disabled) {
    return null;
  }

  return (
    <div className="space-y-3">
      {oauthProviders.map((provider) => (
        <OAuthBtn
          key={provider.name}
          provider={provider}
          onClick={() => handleOAuthLogin(provider.name as 'google' | 'facebook', selectedRole)}
        />
      ))}
    </div>
  );
};