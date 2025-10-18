import { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/Home';
import { Dashboard, Restaurants, Users, Payments } from './components/Pages';
import AdminConsole from './components/Pages/AdminConsole';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthModals from './components/Auth/AuthModals';

// Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    // Error caught by boundary
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark-900 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-gray-400 mb-4">Please refresh the page or try again later.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-sera-pink text-white px-4 py-2 rounded-lg hover:bg-sera-pink/80 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main App Content Component that uses Auth Context
const AppContent: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
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
  }, [isAuthenticated]); // Removed currentPage from dependencies to prevent infinite loop

  const handleSearch = (_query: string) => {
    // Handle search functionality here
  };

  const handleNavClick = (pageName: string) => {
    // Prevent navigation if not authenticated (except for home)
    if (!isAuthenticated && pageName.toLowerCase() !== 'home') {
      return;
    }
    
    // Add a small delay to prevent rapid state changes
    setTimeout(() => {
      setCurrentPage(pageName.toLowerCase());
    }, 10);
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

  // Show loading state while authentication is being determined
  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sera-pink mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

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
        <ErrorBoundary>
          {renderCurrentPage()}
        </ErrorBoundary>
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
    <ErrorBoundary>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
