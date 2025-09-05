import React, { useState } from 'react';
import { SearchIcon } from '../Icons';

interface PrimarySearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
  className?: string;
}

const PrimarySearchBar: React.FC<PrimarySearchBarProps> = ({ 
  placeholder, 
  onSearch, 
  className = '' 
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-white/60" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-12 py-2 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sera-yellow focus:border-transparent transition-all duration-200 backdrop-blur-sm"
          placeholder={placeholder}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <div className="h-5 w-5 bg-sera-yellow rounded-full flex items-center justify-center hover:bg-sera-yellow/90 transition-colors duration-200">
            <SearchIcon className="h-3 w-3 text-dark-900" />
          </div>
        </button>
      </div>
    </form>
  );
};

export default PrimarySearchBar;
