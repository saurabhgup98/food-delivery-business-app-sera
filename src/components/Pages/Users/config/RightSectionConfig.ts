import { QuickAction } from '../../../../data/usersData';
import { SectionHeaderPrimaryProps } from '../../../Header/interfaces/SectionHeaderPrimaryInterface';

// Function to create quick actions header configuration
export const createQuickActionsHeaderConfig = (): SectionHeaderPrimaryProps => ({
  icon: "⚡",
  heading: "Quick Actions",
  subHeading: "Manage users efficiently",
  size: 'small'
});

// Function to create recent activity header configuration
export const createRecentActivityHeaderConfig = (): SectionHeaderPrimaryProps => ({
  icon: "🕒",
  heading: "Recent Activity",
  subHeading: "Last 24 hours",
  rightSideDot: {
    color: 'amber',
    text: 'Active'
  },
  size: 'small'
});

// Function to create quick action button configuration
export const createQuickActionBtnConfig = (action: QuickAction) => ({
  icon: action.icon,
  title: action.title,
  description: action.description,
  color: action.color,
  size: 'medium' as const
});

// Activity summary item configuration type
export interface ActivitySummaryItemConfig {
  label: string;
  value: string;
  color: 'emerald' | 'blue' | 'purple' | 'amber' | 'rose';
}

// Function to create activity summary configuration
export const createActivitySummaryConfig = (): ActivitySummaryItemConfig[] => {
  return [
    {
      label: 'New registrations',
      value: '+23',
      color: 'emerald'
    },
    {
      label: 'Profile updates',
      value: '+45',
      color: 'blue'
    },
    {
      label: 'Login attempts',
      value: '+156',
      color: 'purple'
    },
    {
      label: 'Password resets',
      value: '+8',
      color: 'amber'
    },
    {
      label: 'Account suspensions',
      value: '+2',
      color: 'rose'
    }
  ];
};
