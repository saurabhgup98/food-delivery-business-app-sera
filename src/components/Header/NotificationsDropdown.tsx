import React, { useState } from 'react';
import { BellIcon } from '../Icons';

interface NotificationsDropdownProps {
  notificationCount: number;
  isLoggedIn: boolean;
  onAuthRequired: () => void;
  className?: string;
}

const NotificationsDropdown: React.FC<NotificationsDropdownProps> = ({
  notificationCount,
  isLoggedIn,
  onAuthRequired,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isLoggedIn) {
      onAuthRequired();
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleClick}
        className="relative p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105 group"
      >
        <BellIcon className="w-5 h-5" />
        
        {/* Notification Badge */}
        {notificationCount > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">
              {notificationCount > 9 ? '9+' : notificationCount}
            </span>
          </div>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && isLoggedIn && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
              <button className="text-sm text-sera-blue hover:text-sera-blue/80">
                Mark all as read
              </button>
            </div>
            
            {/* Notification Items */}
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-2 h-2 bg-sera-blue rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      New order received from Restaurant {i}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Order #{1000 + i} has been placed
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {i} minute{i !== 1 ? 's' : ''} ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-200">
              <button className="w-full text-center text-sm text-sera-blue hover:text-sera-blue/80 font-medium">
                View all notifications
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsDropdown;
