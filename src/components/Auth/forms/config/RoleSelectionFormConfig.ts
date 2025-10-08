// Role selection form configuration
export const ROLE_SELECTION_FORM_CONFIG = {
  header: {
    title: "Select Your Role",
    description: "Choose your role to access the appropriate features"
  },

  roleOptions: [
    {
      id: 'business-user',
      title: 'Restaurant Owner',
      description: 'Manage your restaurant, orders, and menu',
      icon: '🏪',
      color: 'bg-sera-blue/10 border-sera-blue/30 text-sera-blue'
    },
    {
      id: 'admin',
      title: 'Platform Admin',
      description: 'Manage restaurants, users, and platform settings',
      icon: '⚙️',
      color: 'bg-sera-yellow/10 border-sera-yellow/30 text-sera-yellow'
    },
    {
      id: 'superadmin',
      title: 'Super Admin',
      description: 'Full system access and management',
      icon: '👑',
      color: 'bg-red-500/10 border-red-500/30 text-red-400'
    }
  ],

  button: {
    continue: {
      enabled: {
        className: "w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 bg-gradient-to-r from-sera-blue via-sera-blue/90 to-sera-blue/80 text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-sera-blue/20 cursor-pointer"
      },
      disabled: {
        className: "w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 bg-gray-600/50 text-gray-400 cursor-not-allowed"
      }
    }
  },

  roleCard: {
    base: "w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left bg-white/5 backdrop-blur-sm hover:scale-[1.02]",
    selected: "border-sera-blue/60 bg-sera-blue/15 shadow-lg shadow-sera-blue/20",
    unselected: "border-white/20 hover:border-white/30 hover:bg-white/10",
    icon: {
      base: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl",
      selected: "bg-sera-blue/20 border border-sera-blue/40",
      unselected: "bg-white/10 border border-white/20"
    }
  },

  checkmark: {
    className: "w-6 h-6 bg-green-500 rounded-full flex items-center justify-center",
    icon: "text-white text-xs font-bold"
  },

  errorMessages: {
    noRoleSelected: "Please select a role to continue"
  }
} as const;
