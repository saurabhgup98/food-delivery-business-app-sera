import { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import { Dashboard, Restaurants, Users, Payments } from './components/Pages';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Handle search functionality here
  };

  const handleNavClick = (pageName: string) => {
    console.log('Navigation clicked:', pageName);
    setCurrentPage(pageName.toLowerCase());
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
        return <HomePage />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-dark-900">
        {/* Header - Common for all pages */}
        <Header onSearch={handleSearch} onNavClick={handleNavClick} />
        
        {/* Main Content */}
        <main>
          {renderCurrentPage()}
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
