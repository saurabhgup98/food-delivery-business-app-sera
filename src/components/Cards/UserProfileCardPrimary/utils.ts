// UserProfileCardPrimary Utility Functions

import { sizeConfigurations } from './styles';

export const getSizeConfig = (size: 'small' | 'medium' | 'large') => {
  return sizeConfigurations[size];
};

export const getAvatarDisplay = (avatar?: string, name: string = '') => {
  return avatar || name.charAt(0);
};

export const formatRole = (role?: string) => {
  return role ? role.replace('_', ' ') : '';
};

export const shouldShowBadges = (status?: string, role?: string) => {
  return !!(status || role);
};

