import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/Home';
import { Dashboard, Restaurants, Users, Payments } from './components/Pages';
import AdminConsole from './components/Pages/AdminConsole';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthModals from './components/Auth/AuthModals';

// Main App Content Component that uses Auth Context
const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');

  // Redirect to dashboard if user is authenticated and on home page
  useEffect(() => {
    if (isAuthenticated && currentPage === 'home') {
      setCurrentPage('dashboard');
    } else if (!isAuthenticated && currentPage !== 'home') {
      setCurrentPage('home');
    }
  }, [isAuthenticated, currentPage]);

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Handle search functionality here
  };

  const handleNavClick = (pageName: string) => {
    console.log('Navigation clicked:', pageName);
    setCurrentPage(pageName.toLowerCase());
  };

  const handleRegisterClick = () => {
    setAuthMode('register');
    setShowAuthModal(true);
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    setCurrentPage('dashboard'); // Redirect to dashboard after successful login
  };

  const handleModeChange = (mode: 'login' | 'register') => {
    setAuthMode(mode);
  };

  const handleAdminConsoleClick = () => {
    setCurrentPage('admin-console');
  };

  const handleLogoClick = () => {
    if (isAuthenticated) {
      setCurrentPage('dashboard');
    } else {
      setCurrentPage('home');
    }
  };

  const handleLogout = () => {
    setCurrentPage('home');
  };

  const renderCurrentPage = () => {
    // Show home page only for non-authenticated users
    if (!isAuthenticated) {
      return <HomePage onRegisterClick={handleRegisterClick} />;
    }

    // Show appropriate page for authenticated users
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'restaurants':
        return <Restaurants />;
      case 'users':
        return <Users />;
      case 'payments':
        return <Payments />;
      case 'admin-console':
        return <AdminConsole />;
      default:
        return <Dashboard />; // Default to dashboard for authenticated users
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 custom-scrollbar">
      {/* Header - Common for all pages */}
      <Header 
        onSearch={handleSearch} 
        onNavClick={handleNavClick} 
        currentPage={currentPage}
        showAuthModal={showAuthModal}
        setShowAuthModal={setShowAuthModal}
        authMode={authMode}
        setAuthMode={setAuthMode}
        onAuthSuccess={handleAuthSuccess}
        onModeChange={handleModeChange}
        onAdminConsoleClick={handleAdminConsoleClick}
        onLogoClick={handleLogoClick}
        onLogout={handleLogout}
      />
      
      {/* Main Content */}
      <main className="custom-scrollbar">
        {renderCurrentPage()}
      </main>

      {/* Auth Modals */}
      <AuthModals
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={handleModeChange}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

// Main App Component with AuthProvider
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
