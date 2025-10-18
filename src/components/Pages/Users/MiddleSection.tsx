import { User, UserMetrics } from '../../../data/usersData';
import UserFilterModal from '../../modals/UserFilterModal';
import SectionHeaderUsers from '../../Header/SectionHeaderUserList';
import UserList from '../../Table/UserList';
import { createUsersHeaderConfig, createMetricsCardsConfig } from './config/MiddleSectionConfig';
import { useState } from 'react';

interface MiddleSectionProps {
  metrics: UserMetrics[];
  users: User[];
}

export default function MiddleSection({ metrics, users }: MiddleSectionProps) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<{status?: string; role?: string; dateRange?: string; searchTerm?: string}>({});

  // Get configurations from config files
  const usersHeaderConfig = createUsersHeaderConfig(users.length);
  const metricsCardsConfig = createMetricsCardsConfig(metrics);

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


  // User action handlers
  const handleViewUser = (_user: User) => {
    // Handle view user action
  };

  const handleEditUser = (_user: User) => {
    // Handle edit user action
  };

  const handleDeleteUser = (_user: User) => {
    // Handle delete user action
  };

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricsCardsConfig.map((metric, index) => {
          // Define color themes for different card types
          const getCardTheme = (title: string) => {
            switch (title.toLowerCase()) {
              case 'total users':
                return {
                  border: 'border-sera-blue/30',
                  shadow: 'shadow-sera-blue/10 hover:shadow-sera-blue/20',
                  iconBg: 'from-sera-blue/30 to-sera-blue/20',
                  onlineColor: 'text-sera-blue'
                };
              case 'customers':
                return {
                  border: 'border-emerald-500/30',
                  shadow: 'shadow-emerald-500/10 hover:shadow-emerald-500/20',
                  iconBg: 'from-emerald-500/30 to-emerald-500/20',
                  onlineColor: 'text-emerald-400'
                };
              case 'restaurant partners':
                return {
                  border: 'border-amber-500/30',
                  shadow: 'shadow-amber-500/10 hover:shadow-amber-500/20',
                  iconBg: 'from-amber-500/30 to-amber-500/20',
                  onlineColor: 'text-amber-400'
                };
              case 'admin users':
                return {
                  border: 'border-purple-500/30',
                  shadow: 'shadow-purple-500/10 hover:shadow-purple-500/20',
                  iconBg: 'from-purple-500/30 to-purple-500/20',
                  onlineColor: 'text-purple-400'
                };
              default:
                return {
                  border: 'border-sera-pink/30',
                  shadow: 'shadow-sera-pink/10 hover:shadow-sera-pink/20',
                  iconBg: 'from-sera-pink/30 to-sera-orange/20',
                  onlineColor: 'text-sera-blue'
                };
            }
          };

          const theme = getCardTheme(metric.title);

          return (
            <div key={index} className={`bg-gradient-to-br from-dark-800/95 via-dark-700/90 to-dark-600/85 border ${theme.border} rounded-2xl p-4 backdrop-blur-sm shadow-xl ${theme.shadow} transition-all duration-300 hover:scale-105 min-h-[110px]`}>
              <div className="flex flex-col h-full">
                {/* Header with icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${theme.iconBg} rounded-lg flex items-center justify-center text-xl shadow-lg`}>
                    {metric.icon}
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    metric.changeType === 'positive' ? 'bg-emerald-500/20 text-emerald-400' :
                    metric.changeType === 'negative' ? 'bg-rose-500/20 text-rose-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                  {metric.change}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-gray-300 text-sm font-medium mb-1">{metric.title}</h3>
                  <div className="space-y-1">
                    <p className="text-white text-2xl font-bold leading-tight">{metric.value}</p>
                    {metric.onlineValue && (
                      <div className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 ${theme.onlineColor.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                        <p className={`${theme.onlineColor} text-xs font-medium`}>
                          {metric.onlineValue} online
                </p>
              </div>
                    )}
                  </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>

      {/* Users Section */}
      <div className="space-y-0">
        {/* Users Header with Search and Filter */}
        <SectionHeaderUsers
          totalUsers={usersHeaderConfig.totalUsers}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onFilterClick={() => setIsFilterModalOpen(true)}
          className={usersHeaderConfig.className}
        />

        {/* User List Table */}
        <UserList
          users={filteredUsers}
          onViewUser={handleViewUser}
          onEditUser={handleEditUser}
          onDeleteUser={handleDeleteUser}
          currentPage={1}
          totalPages={1}
          totalItems={users.length}
              onPreviousPage={() => {}}
              onNextPage={() => {}}
              onPageChange={(_page) => {}}
        />
      </div>
      
      {/* Filter Modal */}
        <UserFilterModal
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)}
          onApplyFilters={handleApplyFilters}
        />
    </div>
  );
}