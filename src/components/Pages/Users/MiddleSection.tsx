import { User, UserMetrics } from '../../../data/usersData';
import FilterModal from './FilterModal';
import SectionHeaderUsers from '../../Header/SectionHeaderUsers';
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

  // User action handlers
  const handleViewUser = (user: User) => {
    console.log('View user:', user);
  };

  const handleEditUser = (user: User) => {
    console.log('Edit user:', user);
  };

  const handleDeleteUser = (user: User) => {
    console.log('Delete user:', user);
  };

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricsCardsConfig.map((metric, index) => (
          <div key={index} className={metric.className}>
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
          onPreviousPage={() => console.log('Previous page')}
          onNextPage={() => console.log('Next page')}
          onPageChange={(page) => console.log('Page changed to:', page)}
        />
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
