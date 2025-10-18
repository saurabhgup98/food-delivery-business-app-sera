// UserProfileCardPrimary - Displays user profile information with avatar, name, status, and role

import React from 'react';
import { UserProfileCardPrimaryProps, UserProfileCardData } from './types';
import { getSizeConfig, getAvatarDisplay, formatRole, shouldShowBadges } from './utils';
import { baseStyles } from './styles';

const UserProfileCardPrimary: React.FC<UserProfileCardPrimaryProps> = (props) => {
  const {
    avatar,
    name,
    status,
    role,
    statusColor,
    roleColor,
    size = 'medium',
    className = '',
    onClick
  } = props;

  // Get size configuration
  const sizeConfig = getSizeConfig(size);

  // Prepare data object
  const cardData: UserProfileCardData = {
    avatar: getAvatarDisplay(avatar, name),
    name,
    status,
    role,
    formattedRole: formatRole(role),
    hasBadges: shouldShowBadges(status, role)
  };

  // Prepare styles object
  const styles = {
    container: `${baseStyles.container} ${onClick ? baseStyles.clickable : ''} ${sizeConfig.container} ${className}`,
    avatar: `${sizeConfig.avatarSize} ${baseStyles.avatar} ${sizeConfig.avatarTextSize}`,
    name: `${baseStyles.name} ${sizeConfig.nameSize}`,
    badgeContainer: baseStyles.badgeContainer,
    statusBadge: `${baseStyles.badge} ${sizeConfig.badgePadding} ${sizeConfig.badgeSize} ${statusColor?.(status || '') || ''}`,
    roleBadge: `${baseStyles.badge} ${sizeConfig.badgePadding} ${sizeConfig.badgeSize} ${roleColor?.(role || '') || ''}`
  };

  return (
    <div className={styles.container} onClick={onClick}>
      <div className="flex items-center space-x-3">
        <div className={styles.avatar}>
          {cardData.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className={styles.name}>{cardData.name}</p>
          {cardData.hasBadges && (
            <div className={styles.badgeContainer}>
              {status && statusColor && (
                <span className={styles.statusBadge}>
                  {status}
                </span>
              )}
              {role && roleColor && (
                <span className={styles.roleBadge}>
                  {cardData.formattedRole}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileCardPrimary;

