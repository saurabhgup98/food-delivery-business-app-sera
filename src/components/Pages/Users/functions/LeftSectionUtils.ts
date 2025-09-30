// Utility functions for LeftSection component

// Function to get status color classes
export const getStatusColor = (status: string): string => {
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

// Function to get role color classes
export const getRoleColor = (role: string): string => {
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

// Function to calculate total revenue
export const calculateTotalRevenue = (users: any[]): number => {
  return users.reduce((sum, user) => sum + user.totalSpent, 0);
};
