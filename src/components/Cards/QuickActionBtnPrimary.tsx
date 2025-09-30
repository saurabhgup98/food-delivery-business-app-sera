import React from 'react';

interface QuickActionBtnPrimaryProps {
  icon: string;
  title: string;
  description: string;
  color: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const QuickActionBtnPrimary: React.FC<QuickActionBtnPrimaryProps> = ({
  icon,
  title,
  description,
  color,
  size = 'medium',
  className = '',
  onClick
}) => {
  // Size configurations
  const sizeConfig = {
    small: {
      container: 'p-3',
      iconSize: 'w-8 h-8',
      iconTextSize: 'text-sm',
      titleSize: 'text-xs',
      descriptionSize: 'text-xs',
      arrowSize: 'w-4 h-4'
    },
    medium: {
      container: 'p-4',
      iconSize: 'w-12 h-12',
      iconTextSize: 'text-xl',
      titleSize: 'text-sm',
      descriptionSize: 'text-xs',
      arrowSize: 'w-5 h-5'
    },
    large: {
      container: 'p-5',
      iconSize: 'w-14 h-14',
      iconTextSize: 'text-2xl',
      titleSize: 'text-base',
      descriptionSize: 'text-sm',
      arrowSize: 'w-6 h-6'
    }
  };

  const config = sizeConfig[size];

  return (
    <button
      className={`w-full group relative overflow-hidden ${className}`}
      onClick={onClick}
    >
      <div className="bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-700/85 border border-white/10 rounded-xl transition-all duration-300 hover:border-sera-pink/30 hover:shadow-lg hover:shadow-sera-pink/10 hover:scale-105">
        <div className={config.container}>
          <div className="flex items-center space-x-4">
            <div className={`${config.iconSize} ${color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <span className={`text-white ${config.iconTextSize}`}>{icon}</span>
            </div>
            <div className="flex-1 text-left">
              <h4 className={`text-white font-semibold ${config.titleSize} group-hover:text-sera-pink transition-colors duration-300`}>
                {title}
              </h4>
              <p className={`text-gray-400 ${config.descriptionSize} group-hover:text-gray-300 transition-colors duration-300`}>
                {description}
              </p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className={`${config.arrowSize} text-sera-pink`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default QuickActionBtnPrimary;
