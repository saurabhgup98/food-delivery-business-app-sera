// UserProfileCardPrimary Type Definitions

export interface UserProfileCardPrimaryProps {
  avatar?: string;
  name: string;
  status?: string;
  role?: string;
  statusColor?: (status: string) => string;
  roleColor?: (role: string) => string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

export interface UserProfileCardData {
  avatar: string;
  name: string;
  status?: string;
  role?: string;
  formattedRole?: string;
  hasBadges: boolean;
}

