import { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import { Dashboard, Restaurants, Users, Payments } from './components/Pages';
import { AuthProvider } from './contexts/AuthContext';
import AuthModals from './components/Auth/AuthModals';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');

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
  };

  const handleModeChange = (mode: 'login' | 'register') => {
    setAuthMode(mode);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'restaurants':
        return <Restaurants />;
      case 'users':
        return <Users />;
      case 'payments':
        return <Payments />;
      default:
        return <HomePage onRegisterClick={handleRegisterClick} />;
    }
  };

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
