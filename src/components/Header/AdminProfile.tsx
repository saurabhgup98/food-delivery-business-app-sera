import React, { useState, useRef, useEffect } from 'react';
import { UserIcon, LogOutIcon, SettingsIcon, ShieldIcon, HelpIcon } from '../Icons';
import { AdminUser } from './headerData';

interface AdminProfileProps {
  adminUser: AdminUser;
  onLogout: () => void;
  onAdminConsoleClick?: () => void;
  className?: string;
}

const AdminProfile: React.FC<AdminProfileProps> = ({
  adminUser,
  onLogout,
  onAdminConsoleClick,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 p-3 text-white hover:bg-white/15 rounded-xl transition-all duration-300 hover:scale-105 group backdrop-blur-sm border border-white/20 hover:border-white/30"
      >
        {/* User Avatar */}
        <div className="w-10 h-10 bg-gradient-to-br from-white/30 to-white/10 rounded-full flex items-center justify-center border border-white/40 shadow-lg group-hover:shadow-xl transition-all duration-300">
          <UserIcon className="w-5 h-5 text-white" />
        </div>
        
        {/* User Info */}
        <div className="hidden sm:block text-left">
          <p className="text-sm font-semibold text-white group-hover:text-white/90 transition-colors">{adminUser.name}</p>
          <p className="text-xs text-white/80 group-hover:text-white/70 transition-colors capitalize">{adminUser.role.replace('-', ' ')}</p>
        </div>
        
        {/* Dropdown Arrow */}
        <div className={`w-4 h-4 transition-all duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-white/70 group-hover:text-white'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-72 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
          {/* Colored Header */}
          <div className="bg-gradient-to-r from-sera-blue via-blue-500 to-purple-600 px-4 py-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">{adminUser.name}</p>
                <p className="text-xs text-white/80 truncate">{adminUser.email}</p>
                <div className="flex items-center mt-1.5">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
                    adminUser.role === 'superadmin' 
                      ? 'bg-white/20 text-white border border-white/30' 
                      : adminUser.role === 'admin'
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'bg-white/20 text-white border border-white/30'
                  }`}>
                    {adminUser.role === 'superadmin' && <ShieldIcon className="w-2.5 h-2.5 mr-1" />}
                    {adminUser.role === 'admin' && <ShieldIcon className="w-2.5 h-2.5 mr-1" />}
                    {adminUser.role.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            
            {/* Menu Items */}
            <div className="py-1">
              {/* Admin Console - Only for superadmin */}
              {adminUser.role === 'superadmin' && (
                <button 
                  onClick={() => {
                    onAdminConsoleClick?.();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-xl transition-all duration-200 group border border-transparent hover:border-purple-100"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-200 shadow-md">
                    <ShieldIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors text-sm">Admin Console</p>
                    <p className="text-xs text-gray-600 group-hover:text-purple-600 transition-colors">Manage users & permissions</p>
                  </div>
                </button>
              )}
              
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 rounded-xl transition-all duration-200 group border border-transparent hover:border-blue-100">
                <div className="w-9 h-9 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-200 shadow-md">
                  <SettingsIcon className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-sm">Profile Settings</p>
                  <p className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors">Manage your profile</p>
                </div>
              </button>
              
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-gradient-to-r hover:from-gray-50 hover:to-green-50 rounded-xl transition-all duration-200 group border border-transparent hover:border-green-100">
                <div className="w-9 h-9 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-200 shadow-md">
                  <HelpIcon className="w-4 h-4 text-gray-600 group-hover:text-green-600 transition-colors" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors text-sm">Help & Support</p>
                  <p className="text-xs text-gray-600 group-hover:text-green-600 transition-colors">Get help and support</p>
                </div>
              </button>
            </div>
            
            {/* Logout Button - Enhanced */}
            <div className="pt-3 border-t border-gray-200">
              <button
                onClick={onLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-xl transition-all duration-200 group border border-transparent hover:border-red-100"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-200 shadow-md">
                  <LogOutIcon className="w-4 h-4 text-red-600 group-hover:text-red-700 transition-colors" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-red-700 group-hover:text-red-800 transition-colors text-sm">Sign Out</p>
                  <p className="text-xs text-red-600 group-hover:text-red-700 transition-colors">Logout from your account</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
