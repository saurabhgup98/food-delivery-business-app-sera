import { useState } from 'react';
import { User } from '../../../data/usersData';
import SectionHeaderPrimary from '../../Header/SectionHeaderPrimary';
import PrimaryStatCard from '../../Cards/PrimaryStatCard';
import PrimaryInfoCard from '../../Cards/PrimaryInfoCard';
import { createHeaderConfig, createUserStatsCardsConfig, createUserStatsHeaderConfig, createRecentUsersHeaderConfig } from './config/LeftSectionConfig';
import { getStatusColor, getRoleColor, calculateTotalRevenue } from './functions/LeftSectionUtils';

interface LeftSectionProps {
  users: User[];
}

export default function LeftSection({ users }: LeftSectionProps) {
  // State for expand/collapse functionality
  const [isStatsExpanded, setIsStatsExpanded] = useState(false);
  const [isRecentUsersExpanded, setIsRecentUsersExpanded] = useState(false);

  // Get configurations from config files
  const headerConfig = createHeaderConfig(users);
  const userStatsCardsConfig = createUserStatsCardsConfig();
  const userStatsHeaderConfig = createUserStatsHeaderConfig(isStatsExpanded, () => setIsStatsExpanded(!isStatsExpanded));
  const recentUsersHeaderConfig = createRecentUsersHeaderConfig(users, isRecentUsersExpanded, () => setIsRecentUsersExpanded(!isRecentUsersExpanded));
  const totalRevenue = calculateTotalRevenue(users);

  return (
    <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-pink/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col">

      <SectionHeaderPrimary {...headerConfig} />

      {/* Statistics Content */}
      <div className="p-4 space-y-4 flex-1 overflow-y-auto custom-scrollbar bg-gradient-to-br from-dark-700 via-dark-600 to-dark-500">

        {/* 1st Item: Total Revenue (Always Visible) */}
        <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg p-4">
          <div className="text-center">
            <p className="text-blue-400 text-2xl font-bold">${totalRevenue.toFixed(2)}</p>
            <p className="text-blue-300 text-sm">Total Revenue</p>
            <p className="text-gray-400 text-xs mt-1">From all users</p>
          </div>
        </div>

        {/* 2nd Item: User Stats Cards (Expandable/Collapsible) */}
        <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-pink/20 rounded-xl shadow-xl overflow-hidden">
          <SectionHeaderPrimary {...userStatsHeaderConfig} />

          {/* Expandable Content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isStatsExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-4 pb-4 pt-2 space-y-3">
              {userStatsCardsConfig.map((stat, index) => (
                <PrimaryStatCard
                  key={index}
                  icon={stat.icon}
                  title={stat.title}
                  subtitle={stat.subtitle}
                  value={stat.value}
                  change={stat.change}
                  color={stat.color}
                  size="medium"
                />
              ))}
            </div>
          </div>
        </div>

        {/* 3rd Item: Recent Users (Expandable/Collapsible) */}
        <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-pink/20 rounded-xl shadow-xl overflow-hidden">
          <SectionHeaderPrimary {...recentUsersHeaderConfig} />

          {/* Expandable Content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isRecentUsersExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-4 pb-4 pt-2 space-y-3">
              {users.slice(0, 5).map((user) => (
                <PrimaryInfoCard
                  key={user.id}
                  name={user.name}
                  status={user.status}
                  role={user.role}
                  statusColor={getStatusColor}
                  roleColor={getRoleColor}
                  size="medium"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Extra padding */}
        <div className="h-4"></div>
      </div>
    </div>
  );
}