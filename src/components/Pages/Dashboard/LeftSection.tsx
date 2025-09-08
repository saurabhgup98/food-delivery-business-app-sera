import { Activity } from '../../../types/activities';
import { ACTIVITY_TYPES } from '../../../types/activities';

interface LeftSectionProps {
  activities: Activity[];
}

export default function LeftSection({ activities }: LeftSectionProps) {
  const getActivityIcon = (type: string) => {
    return ACTIVITY_TYPES[type]?.icon || '📋';
  };


  const getCardStyle = (type: string) => {
    switch (type) {
      case 'order':
        return 'bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-700/85 border-l-4 border-l-cyan-400/70 shadow-lg shadow-cyan-400/15 hover:shadow-cyan-400/25 hover:border-l-cyan-400 backdrop-blur-sm';
      case 'user':
        return 'bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-700/85 border-l-4 border-l-emerald-400/70 shadow-lg shadow-emerald-400/15 hover:shadow-emerald-400/25 hover:border-l-emerald-400 backdrop-blur-sm';
      case 'system':
        return 'bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-700/85 border-l-4 border-l-amber-400/70 shadow-lg shadow-amber-400/15 hover:shadow-amber-400/25 hover:border-l-amber-400 backdrop-blur-sm';
      default:
        return 'bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-700/85 border-l-4 border-l-slate-400/70 shadow-lg shadow-slate-400/15 hover:shadow-slate-400/25 hover:border-l-slate-400 backdrop-blur-sm';
    }
  };

  const getIconStyle = (type: string) => {
    switch (type) {
      case 'order':
        return 'bg-gradient-to-br from-cyan-400/30 to-cyan-600/20 border border-cyan-400/50 text-cyan-300 shadow-lg shadow-cyan-400/20';
      case 'user':
        return 'bg-gradient-to-br from-emerald-400/30 to-emerald-600/20 border border-emerald-400/50 text-emerald-300 shadow-lg shadow-emerald-400/20';
      case 'system':
        return 'bg-gradient-to-br from-amber-400/30 to-amber-600/20 border border-amber-400/50 text-amber-300 shadow-lg shadow-amber-400/20';
      default:
        return 'bg-gradient-to-br from-slate-400/30 to-slate-600/20 border border-slate-400/50 text-slate-300 shadow-lg shadow-slate-400/20';
    }
  };

  const getTimeDotColor = (type: string) => {
    switch (type) {
      case 'order':
        return 'bg-cyan-400/60 shadow-lg shadow-cyan-400/30';
      case 'user':
        return 'bg-emerald-400/60 shadow-lg shadow-emerald-400/30';
      case 'system':
        return 'bg-amber-400/60 shadow-lg shadow-amber-400/30';
      default:
        return 'bg-slate-400/60 shadow-lg shadow-slate-400/30';
    }
  };

  return (
    <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-blue/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-br from-sera-blue/60 via-sera-pink/50 to-sera-orange/55 border-b-2 border-sera-blue/50 relative z-10 flex-shrink-0">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Enhanced Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-white/40 to-white/20 rounded-xl flex items-center justify-center shadow-xl border border-white/40 backdrop-blur-sm">
                <span className="text-white text-lg drop-shadow-lg">📊</span>
              </div>
              
              <div>
                <h2 className="text-white font-bold text-base drop-shadow-lg tracking-wide">Recent Activities</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/70"></div>
                  <span className="text-white/90 text-xs font-medium tracking-wide">{activities.length} items</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Status */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/70"></div>
              <span className="text-white/90 text-xs font-bold tracking-wide">Live</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Activities List */}
      <div className="p-3 space-y-3 flex-1 overflow-y-auto custom-scrollbar bg-gradient-to-br from-dark-700 via-dark-600 to-dark-500 min-h-0 max-h-[calc(100vh-300px)] sm:max-h-[calc(100vh-250px)] lg:max-h-[calc(100vh-200px)]">
        {activities.map((activity, index) => (
          <div key={activity._id} className="group relative">
            <div className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer group ${getCardStyle(activity.type)} hover:scale-[1.02] hover:translate-x-1`}>
              {/* Activity Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-base shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0 ${getIconStyle(activity.type)}`}>
                {getActivityIcon(activity.type)}
              </div>
              
              {/* Activity Content */}
              <div className="flex-1 min-w-0">
                <h4 className="text-gray-100 font-semibold text-sm leading-tight group-hover:text-white transition-colors duration-300 mb-2">
                  {activity.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-3">
                  {activity.description}
                </p>
                
                {/* Time and User Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${getTimeDotColor(activity.type)}`}></div>
                    <span className="text-gray-500 text-xs font-medium">
                      {new Date(activity.timestamp).toLocaleString()}
                    </span>
                  </div>
                  {activity.userId && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full border bg-blue-500/20 text-blue-300 border-blue-500/40">
                      {activity.userId.name}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Enhanced Connection Line */}
            {index < activities.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-cyan-400/60 via-emerald-400/40 to-amber-400/30 rounded-full"></div>
            )}
          </div>
        ))}
        
        {/* Extra padding */}
        <div className="h-4"></div>
      </div>
    </div>
  );
}
