import { QuickAction } from '../../../data/usersData';
import SectionHeaderPrimary from '../../Header/SectionHeaderPrimary';
import QuickActionBtnPrimary from '../../Cards/QuickActionBtnPrimary';
import { createQuickActionsHeaderConfig, createRecentActivityHeaderConfig, createQuickActionBtnConfig, createActivitySummaryConfig } from './config/RightSectionConfig';

interface RightSectionProps {
  quickActions: QuickAction[];
}

export default function RightSection({ quickActions }: RightSectionProps) {
  // Get configurations from config files
  const quickActionsHeaderConfig = createQuickActionsHeaderConfig();
  const recentActivityHeaderConfig = createRecentActivityHeaderConfig();
  const activitySummaryConfig = createActivitySummaryConfig();

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-pink/20 rounded-2xl shadow-2xl overflow-hidden">
        <SectionHeaderPrimary {...quickActionsHeaderConfig} />

        {/* Actions List */}
        <div className="p-4 space-y-3">
          {quickActions.map((action) => (
            <QuickActionBtnPrimary
              key={action.id}
              {...createQuickActionBtnConfig(action)}
            />
          ))}
        </div>
      </div>


      {/* Recent Activity Summary */}
      <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-pink/20 rounded-2xl shadow-2xl overflow-hidden">
        <SectionHeaderPrimary {...recentActivityHeaderConfig} />

        {/* Activity Summary */}
        <div className="p-4 space-y-3">
          {activitySummaryConfig.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-gray-400">{item.label}</span>
              <span className={`text-${item.color}-400 font-semibold`}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}