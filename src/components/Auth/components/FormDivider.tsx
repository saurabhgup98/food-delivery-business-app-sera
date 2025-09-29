import React from 'react';
import { FORM_CONSTANTS } from '../constants/authConstants';

interface FormDividerProps {
  text?: string;
  className?: string;
}

export const FormDivider: React.FC<FormDividerProps> = ({ 
  text = FORM_CONSTANTS.DIVIDER_TEXT,
  className = "" 
}) => {
  return (
    <div className={`relative my-6 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-600/30"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-4 bg-slate-800 text-gray-400">
          {text}
        </span>
      </div>
    </div>
  );
};
