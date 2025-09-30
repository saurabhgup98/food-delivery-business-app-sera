import React from 'react';
import { User } from '../../data/usersData';
import { ACTION_BUTTONS } from './config/UserListConfig';
import ViewIcon from '../Icons/ViewIcon';
import EditIcon from '../Icons/EditIcon';
import DeleteIcon from '../Icons/DeleteIcon';

interface ActionButtonsProps {
  user: User;
  onViewUser?: (user: User) => void;
  onEditUser?: (user: User) => void;
  onDeleteUser?: (user: User) => void;
  className?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  user,
  onViewUser,
  onEditUser,
  onDeleteUser,
  className = ''
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'view':
        return <ViewIcon />;
      case 'edit':
        return <EditIcon />;
      case 'delete':
        return <DeleteIcon />;
      default:
        return null;
    }
  };

  const getActionHandler = (type: string) => {
    switch (type) {
      case 'view':
        return () => onViewUser?.(user);
      case 'edit':
        return () => onEditUser?.(user);
      case 'delete':
        return () => onDeleteUser?.(user);
      default:
        return () => {};
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {ACTION_BUTTONS.map((button) => (
        <button 
          key={button.type}
          onClick={getActionHandler(button.type)}
          className={button.className}
          title={button.tooltip}
        >
          {getIcon(button.type)}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;