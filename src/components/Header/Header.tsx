import React, { useState, useEffect } from 'react';
import { 
  MenuIcon,
  XIcon
} from '../Icons';
import { PrimarySolidBtn, buttonData } from '../Buttons';
import PrimaryHorizontalNavbar from './PrimaryHorizontalNavbar';
import { headerData } from './headerData';
import Logo from './Logo';
import PrimarySearchBar from './PrimarySearchBar';
import NotificationsDropdown from './NotificationsDropdown';
import AdminProfile from './AdminProfile';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  onSearch?: (query: string) => void;
  onNavClick?: (pageName: string) => void;
  currentPage?: string;
  showAuthModal?: boolean;
  setShowAuthModal?: (show: boolean) => void;
  authMode?: 'login' | 'register';
  setAuthMode?: (mode: 'login' | 'register') => void;
  onAuthSuccess?: () => void;
  onModeChange?: (mode: 'login' | 'register') => void;
  onAdminConsoleClick?: () => void;
  onLogoClick?: () => void;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onSearch,
  onNavClick,
  currentPage = 'home',
  setShowAuthModal,
  setAuthMode,
  onAdminConsoleClick,
  onLogoClick,
  onLogout
}) => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (query: string) => {
    alert(`Search: ${query}`);
    onSearch?.(query);
  };

  const handleLogout = async () => {
    try {
      await logout();
      onLogout?.(); // Call the parent logout handler
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleLogin = () => {
    setAuthMode?.('login');
    setShowAuthModal?.(true);
  };

  const handleRegister = () => {
    setAuthMode?.('register');
    setShowAuthModal?.(true);
  };

  // Debug effect to log authentication state changes
  useEffect(() => {
    console.log('Header authentication state changed:', { isAuthenticated, user });
  }, [isAuthenticated, user]);

  const handleNavClick = (itemName: string) => {
    // Call the parent component's navigation handler
    if (onNavClick) {
      onNavClick(itemName);
    }
  };

  return (
    <>
      <header className="relative bg-gradient-to-r from-sera-pink via-sera-orange to-sera-pink shadow-2xl sticky top-0 z-[9999] min-h-[80px]">
        {/* Beautiful background pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-sera-yellow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-sera-blue/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sera-pink/80 via-sera-orange/90 to-sera-pink/80"></div>

        <div className="relative max-w-full mx-auto px-4 sm:px-2 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Left Side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo and Brand - Using Logo Component */}
              <Logo onClick={onLogoClick} />
              
              {/* Navigation (for logged users only) */}
              {isAuthenticated && (
                <div className="hidden lg:flex items-center">
                  {/* Desktop Navigation - Using PrimaryHorizontalNavbar */}
                  <PrimaryHorizontalNavbar 
                    navigationItems={headerData.navigationItems.map(item => ({
                      ...item,
                      isActive: item.name.toLowerCase() === currentPage
                    }))}
                    onNavClick={handleNavClick}
                  />
                </div>
              )}
            </div>

            {/* Right Side - Conditional Content Based on Auth Status */}
            {!isAuthenticated ? (
              /* Non-logged User: Show only Login/Register buttons */
              <div className="flex items-center space-x-2">
                <PrimarySolidBtn 
                  btnProps={buttonData.LoginBtnProps}
                  onClick={handleLogin}
                />
                <PrimarySolidBtn 
                  btnProps={buttonData.RegisterBtnProps}
                  onClick={handleRegister}
                />
              </div>
            ) : (
              /* Logged User: Show search, notifications, and profile */
              <>

                {/* Right Side - Search Bar, Notifications, and Profile */}
                <div className="flex items-center space-x-6">
                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4">
                    {/* Search Bar - Using PrimarySearchBar Component */}
                    <div className="hidden lg:flex w-64">
                      <PrimarySearchBar
                        placeholder={headerData.searchPlaceholder}
                        onSearch={handleSearch}
                      />
                    </div>

                    {/* Notifications - Using NotificationsDropdown Component */}
                    <NotificationsDropdown
                      notificationCount={headerData.notificationCount}
                      isLoggedIn={isAuthenticated}
                      onAuthRequired={() => {
                        setAuthMode?.('login');
                        setShowAuthModal?.(true);
                      }}
                    />

                    {/* Admin Profile - Using AdminProfile Component */}
                    <AdminProfile
                      adminUser={{
                        name: user?.username || 'User',
                        email: user?.email || 'user@example.com',
                        avatar: '',
                        role: 'business-user' // Default role for business app
                      }}
                      onLogout={handleLogout}
                      onAdminConsoleClick={onAdminConsoleClick}
                    />

                    {/* Mobile Menu Button */}
                    <button
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      {isMobileMenuOpen ? (
                        <XIcon className="w-5 h-5" />
                      ) : (
                        <MenuIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Mobile Search Bar - Only for logged users */}
          {isAuthenticated && (
            <div className="lg:hidden pb-4">
              <PrimarySearchBar
                placeholder={headerData.searchPlaceholder}
                onSearch={handleSearch}
              />
            </div>
          )}

          {/* Mobile Menu - Only for logged users */}
          {isAuthenticated && isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-white/20 bg-gradient-to-r from-sera-pink to-sera-orange -mx-4 sm:-mx-2 lg:-mx-12 px-4 sm:px-2 lg:px-12">
              <nav className="flex flex-col space-y-1 pt-4">
                {headerData.navigationItems.map((item) => {
                  const isActive = item.name.toLowerCase() === currentPage;
                  return (
                    <button
                      key={item.name}
                      onClick={() => { handleNavClick(item.name); setIsMobileMenuOpen(false); }}
                      className={`flex items-center space-x-3 px-4 py-3 text-white font-medium transition-all duration-300 hover:bg-white/10 rounded-lg group ${isActive ? 'bg-sera-yellow/20 text-sera-yellow' : 'text-white/90'}`}
                    >
                    <div className={`w-6 h-6 flex items-center justify-center rounded-lg transition-all duration-300 ${isActive ? 'bg-sera-yellow text-dark-900' : 'bg-white/10 text-white group-hover:bg-sera-yellow group-hover:text-dark-900'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="flex-1 text-left">{item.name}</span>
                    {item.badge && (
                      <div className="flex flex-col items-center">
                        <span className="text-xs font-bold bg-sera-yellow text-dark-900 px-1 rounded">
                          {item.badge.split(' ')[0]}
                        </span>
                        <span className="text-xs font-bold bg-sera-yellow text-dark-900 px-1 rounded -mt-0.5">
                          {item.badge.split(' ')[1]}
                        </span>
                      </div>
                    )}
                    {isActive && (
                      <div className="w-2 h-2 bg-sera-yellow rounded-full animate-pulse"></div>
                    )}
                  </button>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

    </>
  );
};

export default Header;
