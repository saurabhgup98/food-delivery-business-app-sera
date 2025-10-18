// UserProfileCardPrimary Styles Configuration

export interface SizeConfig {
  container: string;
  avatarSize: string;
  avatarTextSize: string;
  nameSize: string;
  badgeSize: string;
  badgePadding: string;
}

export const sizeConfigurations: Record<'small' | 'medium' | 'large', SizeConfig> = {
  small: {
    container: 'p-2',
    avatarSize: 'w-6 h-6',
    avatarTextSize: 'text-xs',
    nameSize: 'text-xs',
    badgeSize: 'text-xs',
    badgePadding: 'px-1.5 py-0.5'
  },
  medium: {
    container: 'p-3',
    avatarSize: 'w-8 h-8',
    avatarTextSize: 'text-sm',
    nameSize: 'text-sm',
    badgeSize: 'text-xs',
    badgePadding: 'px-2 py-0.5'
  },
  large: {
    container: 'p-4',
    avatarSize: 'w-10 h-10',
    avatarTextSize: 'text-base',
    nameSize: 'text-base',
    badgeSize: 'text-sm',
    badgePadding: 'px-2.5 py-1'
  }
};

export const baseStyles = {
  container: 'bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-700/85 border border-white/10 rounded-lg hover:border-sera-pink/30 transition-all duration-300',
  clickable: 'cursor-pointer hover:scale-105',
  avatar: 'bg-gradient-to-br from-sera-pink/30 to-sera-orange/20 rounded-full flex items-center justify-center text-white font-semibold',
  name: 'text-white font-medium truncate',
  badgeContainer: 'flex items-center space-x-2 mt-1',
  badge: 'inline-flex items-center rounded-full font-bold border'
};