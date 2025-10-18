import { RefObject, useEffect } from 'react';
import { SettingsIcon, HelpIcon, LogOutIcon, ShieldIcon } from '../../../assets/Icons';

// Click outside handler utility
export const useClickOutside = (
  dropdownRef: RefObject<HTMLDivElement>,
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, dropdownRef, setIsOpen]);
};

// Menu item click handler utility
export const handleMenuItemClick = (
  callback: (() => void) | undefined,
  setIsOpen: (isOpen: boolean) => void
) => {
  return () => {
    callback?.();
    setIsOpen(false);
  };
};

// Role badge styling utility
export const getRoleBadgeStyle = (role: string) => {
  const baseStyle = "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30";
  
  if (role === 'superadmin') {
    return `${baseStyle} bg-gradient-to-r from-sera-pink/30 to-sera-orange/30 border-sera-pink/50`;
  } else if (role === 'admin') {
    return `${baseStyle} bg-gradient-to-r from-sera-blue/30 to-blue-500/30 border-sera-blue/50`;
  }
  
  return baseStyle;
};

// Menu items configuration
export interface MenuItemConfig {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  showForRoles?: string[];
  isLogout?: boolean;
}

export const getAccountMenuItems = (): MenuItemConfig[] => [
  {
    id: 'adminConsole',
    icon: ShieldIcon,
    title: 'Admin Console',
    subtitle: 'Manage users & permissions',
    showForRoles: ['superadmin']
  },
  {
    id: 'profileSettings',
    icon: SettingsIcon,
    title: 'Profile Settings',
    subtitle: 'Manage your profile'
  },
  {
    id: 'helpSupport',
    icon: HelpIcon,
    title: 'Help & Support',
    subtitle: 'Get help and support'
  },
  {
    id: 'logout',
    icon: LogOutIcon,
    title: 'Sign Out',
    subtitle: 'Logout from your account',
    isLogout: true
  }
];