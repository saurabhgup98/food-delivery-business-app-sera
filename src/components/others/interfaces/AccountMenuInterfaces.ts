// AccountMenu Interfaces
// All TypeScript interfaces for AccountMenu

import { AdminUser } from '../../Header/headerData';

export interface AccountMenuProps {
  adminUser: AdminUser;
  onLogout: () => void;
  onAdminConsoleClick?: () => void;
  className?: string;
}

export interface AccountMenuState {
  isOpen: boolean;
}

export interface MenuItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  onClick: () => void;
  iconStyle: string;
  titleStyle: string;
  subtitleStyle: string;
}
