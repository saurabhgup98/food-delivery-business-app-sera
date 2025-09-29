import React from 'react';

interface FormErrorDisplayProps {
  error: string | null;
  className?: string;
}

export const FormErrorDisplay: React.FC<FormErrorDisplayProps> = ({ 
  error, 
  className = "" 
}) => {
  if (!error) return null;
  
  return (
    <div className={`text-red-400 text-sm mt-2 flex items-center space-x-2 ${className}`}>
      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      <span>{error}</span>
    </div>
  );
};
