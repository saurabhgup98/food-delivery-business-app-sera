// Header configuration data for consistent navigation and branding

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

export const headerData: HeaderData = {
  brandName: 'SERA BUSINESS',
  brandSubtitle: 'Food Delivery Platform',
  navigationItems: [
    { name: 'Dashboard', href: '/dashboard', isActive: true },
    { name: 'Restaurants', href: '/restaurants', isActive: false, badge: '12 Pending' },
    { name: 'Users', href: '/users', isActive: false, badge: '5 New' },
    { name: 'Payments', href: '/payments', isActive: false }
  ],
  searchPlaceholder: 'Search restaurants, users, orders...',
  notificationCount: 3,
  adminUser: {
    name: 'Admin User',
    email: 'admin@sera.com',
    avatar: '/api/placeholder/32/32',
    role: 'Super Admin'
  }
};
