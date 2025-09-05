import { useState } from 'react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
}

export default function FilterModal({ isOpen, onClose, onApplyFilters }: FilterModalProps) {
  const [filters, setFilters] = useState({
    status: '',
    role: '',
    dateRange: '',
    searchTerm: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      status: '',
      role: '',
      dateRange: '',
      searchTerm: ''
    });
    onApplyFilters({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-pink/30 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="bg-gradient-to-br from-sera-pink/60 via-sera-orange/50 to-sera-yellow/55 border-b-2 border-sera-pink/50 rounded-t-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-white/40 to-white/20 rounded-lg flex items-center justify-center shadow-lg border border-white/40 backdrop-blur-sm">
                <span className="text-white text-sm drop-shadow-sm">🔍</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg drop-shadow-sm tracking-wide">Filter Users</h3>
                <p className="text-white/90 text-xs tracking-wide">Refine your search results</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-200"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status Filter */}
          <div>
            <label className="block text-white font-semibold text-sm mb-3">Status</label>
            <div className="grid grid-cols-2 gap-2">
              {['active', 'inactive', 'pending', 'suspended'].map((status) => (
                <button
                  key={status}
                  onClick={() => handleFilterChange('status', filters.status === status ? '' : status)}
                  className={`p-3 rounded-lg border transition-all duration-200 ${
                    filters.status === status
                      ? 'bg-sera-pink/20 border-sera-pink/50 text-sera-pink'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="text-sm font-medium capitalize">{status}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Role Filter */}
          <div>
            <label className="block text-white font-semibold text-sm mb-3">Role</label>
            <div className="grid grid-cols-2 gap-2">
              {['customer', 'restaurant_owner', 'admin'].map((role) => (
                <button
                  key={role}
                  onClick={() => handleFilterChange('role', filters.role === role ? '' : role)}
                  className={`p-3 rounded-lg border transition-all duration-200 ${
                    filters.role === role
                      ? 'bg-sera-blue/20 border-sera-blue/50 text-sera-blue'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="text-sm font-medium capitalize">{role.replace('_', ' ')}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Date Range Filter */}
          <div>
            <label className="block text-white font-semibold text-sm mb-3">Date Range</label>
            <select
              value={filters.dateRange}
              onChange={(e) => handleFilterChange('dateRange', e.target.value)}
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-sera-pink/50 focus:ring-2 focus:ring-sera-pink/20 transition-all duration-200"
            >
              <option value="">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>

          {/* Search Term */}
          <div>
            <label className="block text-white font-semibold text-sm mb-3">Search Term</label>
            <input
              type="text"
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
              placeholder="Search by name, email..."
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-sera-pink/50 focus:ring-2 focus:ring-sera-pink/20 transition-all duration-200"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-dark-700/50 to-dark-600/50 border-t border-white/10 rounded-b-2xl p-4">
          <div className="flex items-center justify-between space-x-3">
            <button
              onClick={handleReset}
              className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-200"
            >
              Reset
            </button>
            <button
              onClick={handleApply}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-sera-pink to-sera-orange hover:from-sera-pink/80 hover:to-sera-orange/80 rounded-lg text-white font-semibold transition-all duration-200 shadow-lg shadow-sera-pink/20"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
