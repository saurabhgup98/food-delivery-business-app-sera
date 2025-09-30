import React from 'react';

interface PrimaryStatCardProps {
  icon: string;
  title: string;
  subtitle: string;
  value: string;
  change: string;
  color: 'emerald' | 'blue' | 'amber' | 'rose' | 'purple';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const PrimaryStatCard: React.FC<PrimaryStatCardProps> = ({
  icon,
  title,
  subtitle,
  value,
  change,
  color,
  size = 'medium',
  className = ''
}) => {
  const sizeConfig = {
    small: {
      container: 'p-2',
      iconSize: 'w-6 h-6',
      iconTextSize: 'text-xs',
      titleSize: 'text-xs',
      subtitleSize: 'text-xs',
      valueSize: 'text-sm',
      changeSize: 'text-xs'
    },
    medium: {
      container: 'p-3',
      iconSize: 'w-8 h-8',
      iconTextSize: 'text-sm',
      titleSize: 'text-sm',
      subtitleSize: 'text-xs',
      valueSize: 'text-lg',
      changeSize: 'text-xs'
    },
    large: {
      container: 'p-4',
      iconSize: 'w-10 h-10',
      iconTextSize: 'text-base',
      titleSize: 'text-base',
      subtitleSize: 'text-sm',
      valueSize: 'text-xl',
      changeSize: 'text-sm'
    }
  };

  const config = sizeConfig[size];

  return (
    <div 
      className={`flex items-center justify-between ${config.container} bg-gradient-to-r from-${color}-500/10 to-${color}-600/5 border border-${color}-500/20 rounded-lg hover:from-${color}-500/15 hover:to-${color}-600/10 transition-all duration-300 ${className}`}
    >
      <div className="flex items-center space-x-3">
        <div className={`${config.iconSize} bg-${color}-500/20 rounded-lg flex items-center justify-center`}>
          <span className={`text-${color}-400 ${config.iconTextSize}`}>{icon}</span>
        </div>
        <div>
          <p className={`text-white font-medium ${config.titleSize}`}>{title}</p>
          <p className={`text-${color}-400 ${config.subtitleSize}`}>{subtitle}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-white font-bold ${config.valueSize}`}>{value}</p>
        <p className={`text-${color}-400 ${config.changeSize}`}>{change}</p>
      </div>
    </div>
  );
};

export default PrimaryStatCard;
