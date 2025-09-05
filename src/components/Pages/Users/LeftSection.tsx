import { User } from '../../../data/usersData';

interface LeftSectionProps {
  users: User[];
}

export default function LeftSection({ users }: LeftSectionProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'inactive':
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
      case 'pending':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'suspended':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/40';
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

  // Calculate statistics
  const activeUsers = users.filter(user => user.status === 'active').length;
  const pendingUsers = users.filter(user => user.status === 'pending').length;
  // const suspendedUsers = users.filter(user => user.status === 'suspended').length;
  const totalRevenue = users.reduce((sum, user) => sum + user.totalSpent, 0);

  return (
    <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-pink/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-br from-sera-pink/60 via-sera-orange/50 to-sera-yellow/55 border-b-2 border-sera-pink/50 relative z-10 flex-shrink-0">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Enhanced Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-white/40 to-white/20 rounded-xl flex items-center justify-center shadow-xl border border-white/40 backdrop-blur-sm">
                <span className="text-white text-lg drop-shadow-lg">👥</span>
              </div>
              
              <div>
                <h2 className="text-white font-bold text-base drop-shadow-lg tracking-wide">User Statistics</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/70"></div>
                  <span className="text-white/90 text-xs font-medium tracking-wide">{users.length} total users</span>
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
      
      {/* Statistics Content */}
      <div className="p-4 space-y-4 flex-1 overflow-y-auto custom-scrollbar bg-gradient-to-br from-dark-700 via-dark-600 to-dark-500">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-lg p-3">
            <div className="text-center">
              <p className="text-emerald-400 text-2xl font-bold">{activeUsers}</p>
              <p className="text-emerald-300 text-xs">Active</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-lg p-3">
            <div className="text-center">
              <p className="text-amber-400 text-2xl font-bold">{pendingUsers}</p>
              <p className="text-amber-300 text-xs">Pending</p>
            </div>
          </div>
        </div>

        {/* Revenue Summary */}
        <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg p-4">
          <div className="text-center">
            <p className="text-blue-400 text-2xl font-bold">${totalRevenue.toFixed(2)}</p>
            <p className="text-blue-300 text-sm">Total Revenue</p>
            <p className="text-gray-400 text-xs mt-1">From all users</p>
          </div>
        </div>

        {/* Recent Users */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-sm">Recent Users</h4>
          {users.slice(0, 5).map((user) => (
            <div key={user.id} className="bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-700/85 border border-white/10 rounded-lg p-3 hover:border-sera-pink/30 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-sera-pink/30 to-sera-orange/20 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm truncate">{user.name}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold border ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold border ${getRoleColor(user.role)}`}>
                      {user.role.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra padding */}
        <div className="h-4"></div>
      </div>
    </div>
  );
}
