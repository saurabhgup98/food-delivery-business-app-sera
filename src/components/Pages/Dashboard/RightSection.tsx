import { QuickAction } from '../../../data/dashboardData';

interface RightSectionProps {
  quickActions: QuickAction[];
}

export default function RightSection({ quickActions }: RightSectionProps) {
  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-blue/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-sera-blue/60 via-sera-pink/50 to-sera-orange/55 border-b-2 border-sera-blue/50 relative z-10">
          <div className="px-4 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-white/40 to-white/20 rounded-lg flex items-center justify-center shadow-lg border border-white/40 backdrop-blur-sm">
                <span className="text-white text-sm drop-shadow-sm">⚡</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-base drop-shadow-sm tracking-wide">Quick Actions</h3>
                <p className="text-white/90 text-xs tracking-wide">Manage your business efficiently</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions List */}
        <div className="p-4 space-y-3">
          {quickActions.map((action) => (
            <button
              key={action.id}
              className="w-full group relative overflow-hidden"
            >
              <div className="bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-700/85 border border-white/10 rounded-xl p-4 transition-all duration-300 hover:border-sera-blue/30 hover:shadow-lg hover:shadow-sera-blue/10 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {action.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-white font-semibold text-sm group-hover:text-sera-blue transition-colors duration-300">
                      {action.title}
                    </h4>
                    <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">
                      {action.description}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-sera-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Business Statistics */}
      <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-blue/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-sera-blue/60 via-sera-pink/50 to-sera-orange/55 border-b-2 border-sera-blue/50 relative z-10">
          <div className="px-4 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-white/40 to-white/20 rounded-lg flex items-center justify-center shadow-lg border border-white/40 backdrop-blur-sm">
                <span className="text-white text-sm drop-shadow-sm">📊</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-base drop-shadow-sm tracking-wide">Business Stats</h3>
                <p className="text-white/90 text-xs tracking-wide">Real-time statistics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Content */}
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <span className="text-emerald-400 text-sm">💰</span>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Today's Revenue</p>
                <p className="text-emerald-400 text-xs">Last 24 hours</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-bold text-lg">$2,450</p>
              <p className="text-emerald-400 text-xs">+15%</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-400 text-sm">📦</span>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Active Orders</p>
                <p className="text-blue-400 text-xs">In progress</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-bold text-lg">23</p>
              <p className="text-blue-400 text-xs">+8%</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <span className="text-amber-400 text-sm">👥</span>
              </div>
              <div>
                <p className="text-white font-medium text-sm">New Users</p>
                <p className="text-amber-400 text-xs">This week</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-bold text-lg">156</p>
              <p className="text-amber-400 text-xs">+12%</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="text-purple-400 text-sm">🏪</span>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Restaurants</p>
                <p className="text-purple-400 text-xs">Active partners</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-bold text-lg">89</p>
              <p className="text-purple-400 text-xs">+5%</p>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-blue/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-sera-blue/60 via-sera-pink/50 to-sera-orange/55 border-b-2 border-sera-blue/50 relative z-10">
          <div className="px-4 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-white/40 to-white/20 rounded-lg flex items-center justify-center shadow-lg border border-white/40 backdrop-blur-sm">
                <span className="text-white text-sm drop-shadow-sm">🖥️</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-base drop-shadow-sm tracking-wide">System Status</h3>
                <p className="text-white/90 text-xs tracking-wide">All systems operational</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Content */}
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">API Status</span>
            <span className="text-emerald-400 font-semibold">Online</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Database</span>
            <span className="text-emerald-400 font-semibold">Healthy</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Payment Gateway</span>
            <span className="text-emerald-400 font-semibold">Active</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Email Service</span>
            <span className="text-emerald-400 font-semibold">Running</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Uptime</span>
            <span className="text-emerald-400 font-semibold">99.9%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
