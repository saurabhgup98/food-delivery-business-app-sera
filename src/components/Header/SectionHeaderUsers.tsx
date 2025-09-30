import React from 'react';

interface SectionHeaderUsersProps {
  totalUsers: number;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFilterClick: () => void;
  className?: string;
}

const SectionHeaderUsers: React.FC<SectionHeaderUsersProps> = ({
  totalUsers,
  searchTerm,
  onSearchChange,
  onFilterClick,
  className = ''
}) => {
  return (
    <div className={`bg-gradient-to-br from-sera-pink/60 via-sera-orange/50 to-sera-yellow/55 border-b-2 border-sera-pink/50 relative z-10 flex-shrink-0 ${className}`}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Title and Icon */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-white/40 to-white/20 rounded-xl flex items-center justify-center shadow-xl border border-white/40 backdrop-blur-sm">
              <span className="text-white text-lg drop-shadow-lg">👥</span>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg drop-shadow-lg tracking-wide">
                Users Management
              </h2>
              <p className="text-white/90 text-sm font-medium tracking-wide">
                {totalUsers} total users
              </p>
            </div>
          </div>

          {/* Right Side - Search and Filter */}
          <div className="flex items-center space-x-3">
            {/* Enhanced Search Bar */}
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search users by name or email..."
                className="w-80 bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all duration-300 backdrop-blur-sm shadow-lg"
              />
              <div className="absolute right-4 top-3.5">
                <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Enhanced Filter Button */}
            <button 
              onClick={onFilterClick}
              className="bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 rounded-xl px-6 py-3 text-white font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
              </svg>
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeaderUsers;
