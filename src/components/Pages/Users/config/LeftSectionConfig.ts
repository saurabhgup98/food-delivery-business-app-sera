import { User } from '../../../../data/usersData';
import { SectionHeaderPrimaryProps } from '../../../Header/interfaces/SectionHeaderPrimaryInterface';

// Quick stats configuration type
export interface QuickStatsConfig {
  value: number;
  label: string;
  color: 'emerald' | 'amber' | 'blue' | 'rose' | 'purple';
}

// User stats card configuration type
export interface UserStatsCardConfig {
  icon: string;
  title: string;
  subtitle: string;
  value: string;
  change: string;
  color: 'emerald' | 'blue' | 'amber' | 'rose';
}

// Function to create header configuration
export const createHeaderConfig = (users: User[]): SectionHeaderPrimaryProps => ({
  icon: "👥",
  heading: "User Statistics",
  subHeading: `${users.length} total users`,
  rightSideDot: {
    color: 'emerald',
    text: 'Live'
  },
  size: 'medium'
});

// Function to create quick stats configuration
export const createQuickStatsConfig = (users: User[]): QuickStatsConfig[] => {
  const activeUsers = users.filter(user => user.status === 'active').length;
  const pendingUsers = users.filter(user => user.status === 'pending').length;

  return [
    {
      value: activeUsers,
      label: 'Active',
      color: 'emerald'
    },
    {
      value: pendingUsers,
      label: 'Pending',
      color: 'amber'
    }
  ];
};

// Function to create user stats cards configuration
export const createUserStatsCardsConfig = (): UserStatsCardConfig[] => {
  return [
    {
      icon: '✅',
      title: 'Active Users',
      subtitle: 'Online now',
      value: '1,890',
      change: '+8%',
      color: 'emerald'
    },
    {
      icon: '🆕',
      title: 'New Today',
      subtitle: 'Last 24 hours',
      value: '23',
      change: '+15%',
      color: 'blue'
    },
    {
      icon: '⏳',
      title: 'Pending',
      subtitle: 'Awaiting approval',
      value: '12',
      change: '-2%',
      color: 'amber'
    },
    {
      icon: '⚠️',
      title: 'Suspended',
      subtitle: 'Need attention',
      value: '5',
      change: '+1',
      color: 'rose'
    }
  ];
};

// Function to create user stats header configuration
export const createUserStatsHeaderConfig = (isExpanded: boolean, onToggle: () => void) => ({
  icon: "📊",
  heading: "User Statistics",
  subHeading: "Real-time statistics",
  isExpandable: true,
  isExpanded,
  onToggle,
  rightSideDot: {
    color: 'blue' as const,
    text: 'Live'
  },
  size: 'medium' as const,
  className: "bg-gradient-to-br from-blue-500/20 via-blue-600/15 to-blue-700/10 border-b-2 border-blue-500/30"
});

// Function to create recent users header configuration
export const createRecentUsersHeaderConfig = (users: User[], isExpanded: boolean, onToggle: () => void) => ({
  icon: "👥",
  heading: "Recent Users",
  subHeading: "Latest registered users",
  isExpandable: true,
  isExpanded,
  onToggle,
  rightSideText: `${users.length} total`,
  size: 'medium' as const,
  className: "bg-gradient-to-br from-emerald-500/20 via-emerald-600/15 to-emerald-700/10 border-b-2 border-emerald-500/30"
});