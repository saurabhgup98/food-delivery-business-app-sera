import React, { useState } from 'react';
import { UserIcon, LogOutIcon } from '../Icons';
import { AdminUser } from './headerData';

interface AdminProfileProps {
  adminUser: AdminUser;
  onLogout: () => void;
  className?: string;
}

const AdminProfile: React.FC<AdminProfileProps> = ({
  adminUser,
  onLogout,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105 group"
      >
        {/* User Avatar */}
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
          <UserIcon className="w-4 h-4 text-white" />
        </div>
        
        {/* User Info */}
        <div className="hidden sm:block text-left">
          <p className="text-sm font-medium text-white">{adminUser.name}</p>
          <p className="text-xs text-white/70">{adminUser.role}</p>
        </div>
        
        {/* Dropdown Arrow */}
        <div className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="p-4">
            {/* User Header */}
            <div className="flex items-center space-x-3 pb-3 border-b border-gray-200">
              <div className="w-12 h-12 bg-sera-blue/20 rounded-full flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-sera-blue" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{adminUser.name}</p>
                <p className="text-xs text-gray-500">{adminUser.email}</p>
                <p className="text-xs text-sera-blue font-medium">{adminUser.role}</p>
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="py-2">
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200">
                Profile Settings
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200">
                Account Preferences
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200">
                Help & Support
              </button>
            </div>
            
            {/* Logout Button */}
            <div className="pt-2 border-t border-gray-200">
              <button
                onClick={onLogout}
                className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
              >
                <LogOutIcon className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
