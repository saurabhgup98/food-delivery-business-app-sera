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

// Authentication types
export interface User {
  id: string;
  username?: string;
  email: string;
  appRegistered: Array<{
    appIdentifier: string;
    role: string;
    authMethod: string;
    isActive: boolean;
  }>;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    role?: string;
    availableRoles?: string[];
    appIdentifier?: string;
  };
}

// Login request interface with appEndpoint
export interface LoginRequest {
  email: string;
  password: string;
  appEndpoint: string; // App URL endpoint (required for the authentication service)
  selectedRole?: string; // Optional selected role for business app
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  appEndpoint: string; // App URL endpoint
  authMethod?: 'email-password' | 'google-oauth' | 'facebook-oauth' | 'github-oauth';
  role?: 'user' | 'business-user' | 'admin' | 'superadmin'; // App-specific role (optional, defaults based on app)
}

export interface ApiError {
  success: false;
  error: string;
}