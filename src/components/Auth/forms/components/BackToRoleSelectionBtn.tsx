import React from 'react';
import BackArrowIcon from '../icons/BackArrowIcon';

interface BackToRoleSelectionBtnProps {
  onClick: () => void;
  className?: string;
}

const BackToRoleSelectionBtn: React.FC<BackToRoleSelectionBtnProps> = ({ 
  onClick, 
  className = "flex items-center space-x-2 text-gray-400 hover:text-sera-blue transition-colors duration-200" 
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      <BackArrowIcon />
      <span className="text-sm font-medium">Back to Role Selection</span>
    </button>
  );
};

export default BackToRoleSelectionBtn;
