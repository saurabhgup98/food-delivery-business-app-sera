import { User, UserMetrics } from '../../../data/usersData';
import FilterModal from './FilterModal';
import { useState } from 'react';

interface MiddleSectionProps {
  metrics: UserMetrics[];
  users: User[];
}

export default function MiddleSection({ metrics, users }: MiddleSectionProps) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<{status?: string; role?: string; dateRange?: string; searchTerm?: string}>({});

  const handleApplyFilters = (newFilters: any) => {
    setFilters(newFilters);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = searchTerm === '' || 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = !filters.status || user.status === filters.status;
    const matchesRole = !filters.role || user.role === filters.role;
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-lg shadow-emerald-500/20';
      case 'inactive':
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40 shadow-lg shadow-gray-500/20';
      case 'pending':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-lg shadow-amber-500/20';
      case 'suspended':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-lg shadow-rose-500/20';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/40 shadow-lg shadow-slate-500/20';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'customer':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'restaurant_owner':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'admin':
        return 'bg-red-500/20 text-red-300 border-red-500/40';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/40';
    }
  };

  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case 'positive':
        return 'text-emerald-400';
      case 'negative':
        return 'text-rose-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gradient-to-br from-dark-800/95 via-dark-700/90 to-dark-600/85 border border-sera-pink/30 rounded-xl p-4 backdrop-blur-sm shadow-xl shadow-sera-pink/10 hover:shadow-sera-pink/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium mb-1">{metric.title}</p>
                <p className="text-white text-2xl font-bold">{metric.value}</p>
                <p className={`text-sm font-semibold ${getChangeColor(metric.changeType)}`}>
                  {metric.change}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-sera-pink/30 to-sera-orange/20 rounded-xl flex items-center justify-center text-2xl">
                {metric.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className="bg-gradient-to-br from-dark-800/95 via-dark-700/90 to-dark-600/85 border border-sera-pink/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-sera-pink/60 via-sera-orange/50 to-sera-yellow/55 border-b-2 border-sera-pink/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-white/40 to-white/20 rounded-lg flex items-center justify-center shadow-lg border border-white/40 backdrop-blur-sm">
                <span className="text-white text-sm drop-shadow-sm">👥</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg drop-shadow-sm tracking-wide">Users Management</h3>
                <p className="text-white/90 text-sm tracking-wide">{users.length} total users</p>
              </div>
            </div>
            
            {/* Enhanced Search and Filter */}
            <div className="flex items-center space-x-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search users by name or email..."
                  className="w-full bg-gradient-to-r from-dark-800/80 to-dark-700/80 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-sera-pink/50 focus:ring-2 focus:ring-sera-pink/20 transition-all duration-300 backdrop-blur-sm"
                />
                <div className="absolute right-4 top-3.5">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <button 
                onClick={() => setIsFilterModalOpen(true)}
                className="bg-gradient-to-r from-sera-pink/20 to-sera-orange/20 hover:from-sera-pink/30 hover:to-sera-orange/30 border border-sera-pink/40 rounded-xl px-6 py-3 text-sera-pink font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-sera-pink/10 hover:shadow-sera-pink/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Table Content - Fixed Header and Footer */}
        <div className="flex flex-col h-96">
          {/* Fixed Table Header */}
          <div className="flex-shrink-0">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-dark-700/80 to-dark-600/80 border-b border-white/10 backdrop-blur-sm">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Orders</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Spent</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Last Active</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
            </table>
          </div>
          
          {/* Scrollable Table Body */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <table className="w-full">
              <tbody className="divide-y divide-white/5">
                {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-dark-700/30 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-sera-pink/30 to-sera-orange/20 rounded-full flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-medium">{user.name}</div>
                        <div className="text-gray-400 text-sm">{user.email}</div>
                        <div className="text-gray-500 text-xs">{user.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${getRoleColor(user.role)}`}>
                      {user.role.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white font-medium">{user.totalOrders}</td>
                  <td className="px-6 py-4 text-white font-medium">${user.totalSpent.toFixed(2)}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{user.lastActive}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="w-8 h-8 bg-sera-blue/20 border border-sera-blue/40 rounded-lg flex items-center justify-center text-sera-blue hover:bg-sera-blue/30 hover:border-sera-blue/60 transition-all duration-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 bg-sera-yellow/20 border border-sera-yellow/40 rounded-lg flex items-center justify-center text-sera-yellow hover:bg-sera-yellow/30 hover:border-sera-yellow/60 transition-all duration-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 bg-rose-500/20 border border-rose-500/40 rounded-lg flex items-center justify-center text-rose-400 hover:bg-rose-500/30 hover:border-rose-500/60 transition-all duration-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        {/* Table Footer */}
        <div className="bg-dark-700/30 border-t border-dark-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-400 text-sm">
              Showing {filteredUsers.length} of {users.length} users
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-dark-600 border border-dark-500 text-gray-300 rounded hover:bg-dark-500 transition-colors duration-200">
                Previous
              </button>
              <button className="px-3 py-1 bg-sera-pink/20 border border-sera-pink/40 text-sera-pink rounded">
                1
              </button>
              <button className="px-3 py-1 bg-dark-600 border border-dark-500 text-gray-300 rounded hover:bg-dark-500 transition-colors duration-200">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
}
