import { useState } from 'react';
import { DashboardData } from '../../../data/dashboardData';

interface MobileDashboardProps {
  data: DashboardData;
}

export default function MobileDashboard({ data }: MobileDashboardProps) {
  const [expandedSections, setExpandedSections] = useState({
    quickStats: true,    // Always expanded by default
    charts: false,       // Collapsed by default
    otherStats: false,   // Collapsed by default
    activities: false    // Collapsed by default
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
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

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'order':
        return '📦';
      case 'user':
        return '👤';
      case 'system':
        return '⚙️';
      default:
        return '📋';
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'pending':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'failed':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/40';
    }
  };

  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <main className="p-4 space-y-4">
        {/* Mobile Header */}
        <div className="relative bg-gradient-to-br from-dark-900/95 via-dark-800/90 to-dark-700/85 border border-sera-blue/30 rounded-xl p-4 backdrop-blur-sm shadow-xl shadow-sera-blue/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-sera-blue/5 via-transparent to-sera-pink/5 animate-pulse"></div>
          <div className="relative flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sera-blue/40 to-sera-blue/20 rounded-lg flex items-center justify-center shadow-lg border border-sera-blue/40 backdrop-blur-sm">
              <span className="text-sera-blue text-lg">📊</span>
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-bold text-white">SERA Business Dashboard</h1>
              <p className="text-gray-400 text-sm">Admin panel for SERA Food Delivery</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-xs font-medium">Live</span>
            </div>
          </div>
        </div>

        {/* 1. Quick Stats - Always Expanded */}
        <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-blue/20 rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-sera-blue/60 via-sera-pink/50 to-sera-orange/55 border-b border-sera-blue/50 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">⚡</span>
                </div>
                <h2 className="text-white font-bold text-base">Quick Stats</h2>
              </div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              {data.metrics.map((metric, index) => (
                <div key={index} className="bg-gradient-to-br from-dark-700/80 to-dark-600/80 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-sera-blue/30 to-sera-pink/20 rounded-lg flex items-center justify-center text-lg">
                      {metric.icon}
                    </div>
                    <span className={`text-xs font-semibold ${getChangeColor(metric.changeType)}`}>
                      {metric.change}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mb-1">{metric.title}</p>
                  <p className="text-white text-lg font-bold">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Charts - Expandable */}
        <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-blue/20 rounded-xl shadow-xl overflow-hidden">
          <div 
            className="bg-gradient-to-r from-sera-blue/60 via-sera-pink/50 to-sera-orange/55 border-b border-sera-blue/50 px-4 py-3 cursor-pointer"
            onClick={() => toggleSection('charts')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📈</span>
                </div>
                <h2 className="text-white font-bold text-base">Charts & Analytics</h2>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sera-blue rounded-full animate-pulse"></div>
                <svg 
                  className={`w-5 h-5 text-white transition-transform duration-200 ${expandedSections.charts ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          {expandedSections.charts && (
            <div className="p-4 space-y-4">
              {/* Revenue Chart */}
              <div className="bg-gradient-to-br from-dark-700/80 to-dark-600/80 border border-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-sm">Revenue Chart</h3>
                    <p className="text-gray-400 text-xs">Monthly trends</p>
                  </div>
                  <div className="w-2 h-2 bg-sera-blue rounded-full"></div>
                </div>
                <div className="h-32 flex items-end justify-between space-x-1">
                  {data.revenueChart.datasets[0].data.map((value, index) => {
                    const maxValue = Math.max(...data.revenueChart.datasets[0].data);
                    const height = (value / maxValue) * 100;
                    return (
                      <div key={index} className="flex flex-col items-center space-y-1 flex-1">
                        <div 
                          className="w-full bg-gradient-to-t from-sera-blue/80 to-sera-blue/40 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-gray-400 text-xs">{data.revenueChart.labels[index]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Orders Chart */}
              <div className="bg-gradient-to-br from-dark-700/80 to-dark-600/80 border border-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-sm">Orders Chart</h3>
                    <p className="text-gray-400 text-xs">Monthly trends</p>
                  </div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
                <div className="h-32 flex items-end justify-between space-x-1">
                  {data.ordersChart.datasets[0].data.map((value, index) => {
                    const maxValue = Math.max(...data.ordersChart.datasets[0].data);
                    const height = (value / maxValue) * 100;
                    return (
                      <div key={index} className="flex flex-col items-center space-y-1 flex-1">
                        <div 
                          className="w-full bg-gradient-to-t from-emerald-400/80 to-emerald-400/40 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-gray-400 text-xs">{data.ordersChart.labels[index]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. Other Stats - Expandable */}
        <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-blue/20 rounded-xl shadow-xl overflow-hidden">
          <div 
            className="bg-gradient-to-r from-sera-blue/60 via-sera-pink/50 to-sera-orange/55 border-b border-sera-blue/50 px-4 py-3 cursor-pointer"
            onClick={() => toggleSection('otherStats')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
                <h2 className="text-white font-bold text-base">Business Stats</h2>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sera-pink rounded-full animate-pulse"></div>
                <svg 
                  className={`w-5 h-5 text-white transition-transform duration-200 ${expandedSections.otherStats ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          {expandedSections.otherStats && (
            <div className="p-4 space-y-3">
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
          )}
        </div>

        {/* 4. Recent Activities - Expandable */}
        <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-blue/20 rounded-xl shadow-xl overflow-hidden">
          <div 
            className="bg-gradient-to-r from-sera-blue/60 via-sera-pink/50 to-sera-orange/55 border-b border-sera-blue/50 px-4 py-3 cursor-pointer"
            onClick={() => toggleSection('activities')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📋</span>
                </div>
                <h2 className="text-white font-bold text-base">Recent Activities</h2>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sera-orange rounded-full animate-pulse"></div>
                <svg 
                  className={`w-5 h-5 text-white transition-transform duration-200 ${expandedSections.activities ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          {expandedSections.activities ? (
            <div className="p-4 space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
              {data.activities.map((activity) => (
                <div key={activity.id} className="bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-700/85 border border-white/10 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-sera-blue/30 to-sera-blue/20 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-sm mb-1">{activity.title}</h4>
                      <p className="text-gray-400 text-xs mb-2 line-clamp-2">{activity.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs">{activity.time}</span>
                        {activity.status && (
                          <span className={`text-xs font-bold px-2 py-1 rounded-full border ${getStatusColor(activity.status)}`}>
                            {activity.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4">
              <div className="space-y-3">
                {data.activities.slice(0, 2).map((activity) => (
                  <div key={activity.id} className="bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-700/85 border border-white/10 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-sera-blue/30 to-sera-blue/20 rounded-lg flex items-center justify-center text-xs flex-shrink-0">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium text-xs truncate">{activity.title}</h4>
                        <p className="text-gray-500 text-xs">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="text-center">
                  <span className="text-sera-blue text-xs font-medium">Tap to see all activities</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions - Always visible at bottom */}
        <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-blue/20 rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-sera-blue/60 via-sera-pink/50 to-sera-orange/55 border-b border-sera-blue/50 px-4 py-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">⚡</span>
              </div>
              <h2 className="text-white font-bold text-base">Quick Actions</h2>
            </div>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3">
              {data.quickActions.slice(0, 4).map((action) => (
                <button
                  key={action.id}
                  className="bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-700/85 border border-white/10 rounded-lg p-3 transition-all duration-200 hover:border-sera-blue/30 hover:scale-105"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center text-lg`}>
                      {action.icon}
                    </div>
                    <div className="text-center">
                      <h4 className="text-white font-semibold text-xs">{action.title}</h4>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom padding for better scrolling */}
        <div className="h-4"></div>
      </main>
    </div>
  );
}
