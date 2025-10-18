import React, { useState, useRef } from 'react';
import { UserIcon, DropdownArrowDownIcon, ShieldIcon } from '../../assets/Icons';
import { AccountMenuProps } from './interfaces/AccountMenuInterfaces';
import { ACCOUNT_MENU_STYLES } from './styles/AccountMenuStyles';
import { useClickOutside, handleMenuItemClick, getRoleBadgeStyle, getAccountMenuItems, MenuItemConfig } from './utils/AccountMenuUtils';

const AccountMenu: React.FC<AccountMenuProps> = ({
  adminUser,
  onLogout,
  onAdminConsoleClick,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Use click outside utility
  useClickOutside(dropdownRef, isOpen, setIsOpen);

  return (
    <div className={`${ACCOUNT_MENU_STYLES.container} ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={ACCOUNT_MENU_STYLES.trigger.button}
      >
        {/* User Avatar */}
        <div className={ACCOUNT_MENU_STYLES.trigger.avatar}>
          <UserIcon className="w-4 h-4 text-white" />
        </div>

        {/* User Info */}
        <div className={ACCOUNT_MENU_STYLES.trigger.userInfo}>
          <p className={ACCOUNT_MENU_STYLES.trigger.name}>{adminUser.name}</p>
          <p className={ACCOUNT_MENU_STYLES.trigger.role}>{adminUser.role.replace('-', ' ')}</p>
        </div>

        {/* Dropdown Arrow */}
        <DropdownArrowDownIcon
          isOpen={isOpen}
          color="text-white/70"
          hoverColor="text-white"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={ACCOUNT_MENU_STYLES.dropdown.container}>
          {/* Colored Header */}
          <div className={ACCOUNT_MENU_STYLES.dropdown.header}>
            <div className={ACCOUNT_MENU_STYLES.dropdown.headerContent}>
              <div className={ACCOUNT_MENU_STYLES.dropdown.headerAvatar}>
                <UserIcon className="w-4 h-4 text-white" />
              </div>
              <div className={ACCOUNT_MENU_STYLES.dropdown.headerInfo}>
                <p className={ACCOUNT_MENU_STYLES.dropdown.headerName}>{adminUser.name}</p>
                <p className={ACCOUNT_MENU_STYLES.dropdown.headerEmail}>{adminUser.email}</p>
                <div className="flex items-center mt-1">
                  <span className={getRoleBadgeStyle(adminUser.role)}>
                    {(adminUser.role === 'superadmin' || adminUser.role === 'admin') && <ShieldIcon className="w-2.5 h-2.5 mr-1" />}
                    {adminUser.role.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={ACCOUNT_MENU_STYLES.menu.container}>
            {/* Menu Items */}
            <div className={ACCOUNT_MENU_STYLES.menu.items}>
              {getAccountMenuItems()
                .filter((item: MenuItemConfig) =>
                  !item.showForRoles || item.showForRoles.includes(adminUser.role)
                )
                .map((item: MenuItemConfig) => {
                  const IconComponent = item.icon;
                  const handleClick = item.isLogout 
                    ? handleMenuItemClick(onLogout, setIsOpen)
                    : item.id === 'adminConsole' 
                      ? handleMenuItemClick(onAdminConsoleClick, setIsOpen)
                      : () => setIsOpen(false);

                  // Get styles from styles file
                  const itemStyles = ACCOUNT_MENU_STYLES.getMenuItemStyles(item.id);

                  return (
                    <div key={item.id}>
                      {item.isLogout && <div className={ACCOUNT_MENU_STYLES.logout.container}></div>}
                      <button
                        onClick={handleClick}
                        className={item.isLogout ? ACCOUNT_MENU_STYLES.logout.button : ACCOUNT_MENU_STYLES.menu.item}
                      >
                        <div className={`${ACCOUNT_MENU_STYLES.menu.icon} ${itemStyles.icon}`}>
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div className={ACCOUNT_MENU_STYLES.menu.content}>
                          <p className={`${ACCOUNT_MENU_STYLES.menu.title} ${itemStyles.title}`}>{item.title}</p>
                          <p className={`${ACCOUNT_MENU_STYLES.menu.subtitle} ${itemStyles.subtitle}`}>{item.subtitle}</p>
                        </div>
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;