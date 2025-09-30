import React from 'react';

interface PrimaryInfoCardProps {
  avatar?: string;
  name: string;
  status?: string;
  role?: string;
  statusColor?: (status: string) => string;
  roleColor?: (role: string) => string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const PrimaryInfoCard: React.FC<PrimaryInfoCardProps> = ({
  avatar,
  name,
  status,
  role,
  statusColor,
  roleColor,
  size = 'medium',
  className = '',
  onClick
}) => {
  // Size configurations
  const sizeConfig = {
    small: {
      container: 'p-2',
      avatarSize: 'w-6 h-6',
      avatarTextSize: 'text-xs',
      nameSize: 'text-xs',
      badgeSize: 'text-xs',
      badgePadding: 'px-1.5 py-0.5'
    },
    medium: {
      container: 'p-3',
      avatarSize: 'w-8 h-8',
      avatarTextSize: 'text-sm',
      nameSize: 'text-sm',
      badgeSize: 'text-xs',
      badgePadding: 'px-2 py-0.5'
    },
    large: {
      container: 'p-4',
      avatarSize: 'w-10 h-10',
      avatarTextSize: 'text-base',
      nameSize: 'text-base',
      badgeSize: 'text-sm',
      badgePadding: 'px-2.5 py-1'
    }
  };

  const config = sizeConfig[size];

  return (
    <div 
      className={`bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-700/85 border border-white/10 rounded-lg hover:border-sera-pink/30 transition-all duration-300 ${onClick ? 'cursor-pointer hover:scale-105' : ''} ${config.container} ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <div className={`${config.avatarSize} bg-gradient-to-br from-sera-pink/30 to-sera-orange/20 rounded-full flex items-center justify-center text-white font-semibold ${config.avatarTextSize}`}>
          {avatar || name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <p className={`text-white font-medium ${config.nameSize} truncate`}>{name}</p>
          {(status || role) && (
            <div className="flex items-center space-x-2 mt-1">
              {status && statusColor && (
                <span className={`inline-flex items-center ${config.badgePadding} rounded-full ${config.badgeSize} font-bold border ${statusColor(status)}`}>
                  {status}
                </span>
              )}
              {role && roleColor && (
                <span className={`inline-flex items-center ${config.badgePadding} rounded-full ${config.badgeSize} font-bold border ${roleColor(role)}`}>
                  {role.replace('_', ' ')}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrimaryInfoCard;
