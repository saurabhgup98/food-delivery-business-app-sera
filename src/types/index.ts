// Common types used across the application

export interface NavigationItem {
  name: string;
  href: string;
  isActive: boolean;
  badge?: string;
}

export interface AdminUser {
  name: string;
  email: string;
  avatar: string;
  role: string;
}

export interface HeaderData {
  brandName: string;
  brandSubtitle: string;
  navigationItems: NavigationItem[];
  searchPlaceholder: string;
  notificationCount: number;
  adminUser: AdminUser;
}

export interface PrimarySolidBtnProps {
  name: string;
  bgColor: string;
  textColor: string;
  hoverBgColor: string;
  hoverTextColor?: string;
  border?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

export interface AdminAccessData {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}
