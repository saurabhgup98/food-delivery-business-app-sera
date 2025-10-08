import React from 'react';
import { FORM_CONSTANTS } from '../constants/authConstants';

interface FormModeSwitchProps {
  mode: 'login' | 'register';
  onModeSwitch: (mode: 'login' | 'register') => void;
  onRoleSelection?: () => void;
  className?: string;
}

export const FormModeSwitch: React.FC<FormModeSwitchProps> = ({
  mode,
  onModeSwitch,
  onRoleSelection,
  className = ""
}) => {
  const switchConfig = FORM_CONSTANTS.MODE_SWITCH[mode.toUpperCase() as keyof typeof FORM_CONSTANTS.MODE_SWITCH];

  return (
    <div className={`text-center mt-6 ${className}`}>
      <p className="text-gray-400 text-sm">
        {switchConfig.prompt}{' '}
        <button
          type="button"
          onClick={() => onModeSwitch(mode === 'login' ? 'register' : 'login')}
          className="text-sera-blue hover:text-sera-blue/80 font-medium transition-colors duration-200"
        >
          {switchConfig.action}
        </button>
      </p>

      {/* Role Selection Button */}
      {onRoleSelection && (
        <div className="mt-4">
          <button
            type="button"
            onClick={onRoleSelection}
            className="text-sera-yellow hover:text-sera-yellow/80 font-medium transition-colors duration-200 text-sm"
          >
            Select Role First
          </button>
        </div>
      )}
    </div>
  );
};