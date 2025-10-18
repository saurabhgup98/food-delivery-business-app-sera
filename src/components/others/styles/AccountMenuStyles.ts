// AccountMenu Styles
// All CSS classes for AccountMenu in one place

export const ACCOUNT_MENU_STYLES = {
  // Main container styles
  container: "relative",

  // Trigger button styles
  trigger: {
    button: "flex items-center space-x-2 p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-105 group backdrop-blur-sm border border-white/20 hover:border-white/40",
    avatar: "w-8 h-8 bg-sera-pink/60 rounded-full flex items-center justify-center border border-sera-pink/40 shadow-lg group-hover:shadow-xl transition-all duration-300",
    userInfo: "hidden sm:block text-left",
    name: "text-sm font-semibold text-white group-hover:text-white/90 transition-colors",
    role: "text-xs text-white/80 group-hover:text-white/70 transition-colors capitalize",
    arrow: "w-4 h-4 transition-all duration-300 text-white/70 group-hover:text-white",
    arrowOpen: "rotate-180 text-white"
  },

  // Dropdown menu styles
  dropdown: {
    container: "absolute right-0 mt-2 w-64 bg-black rounded-xl shadow-2xl border border-white/20 z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200",
    header: "bg-sera-pink px-3 py-2",
    headerContent: "flex items-center space-x-2",
    headerAvatar: "w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center",
    headerInfo: "flex-1 min-w-0",
    headerName: "text-sm font-bold text-white truncate",
    headerEmail: "text-xs text-white/80 truncate",
    roleBadge: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30 mt-1"
  },

  // Menu items styles
  menu: {
    container: "p-2",
    items: "py-1",
    item: "w-full flex items-center space-x-2 px-2 py-2 text-sm hover:bg-white/5 rounded-lg transition-all duration-200 group border border-transparent hover:border-white/10",
    icon: "w-7 h-7 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-200 shadow-md",
    content: "text-left flex-1",
    title: "font-semibold text-white group-hover:text-white/90 transition-colors text-sm",
    subtitle: "text-xs text-white/70 group-hover:text-white/80 transition-colors"
  },

  // Specific menu item styles
  menuItems: {
    adminConsole: {
      icon: "bg-sera-pink",
      title: "group-hover:text-sera-pink",
      subtitle: "group-hover:text-sera-pink/80"
    },
    profileSettings: {
      icon: "bg-sera-blue",
      title: "group-hover:text-sera-blue",
      subtitle: "group-hover:text-sera-blue/80"
    },
    helpSupport: {
      icon: "bg-emerald-500",
      title: "group-hover:text-emerald-400",
      subtitle: "group-hover:text-emerald-400/80"
    },
    logout: {
      icon: "bg-red-500",
      title: "text-red-400 group-hover:text-red-300",
      subtitle: "text-red-500 group-hover:text-red-400"
    }
  },

  // Helper function to get menu item styles
  getMenuItemStyles: (itemId: string) => {
    const styles = ACCOUNT_MENU_STYLES.menuItems as any;
    return styles[itemId] || styles.profileSettings;
  },

  // Logout section styles
  logout: {
    container: "pt-2 border-t border-white/20",
    button: "w-full flex items-center space-x-2 px-2 py-2 text-sm hover:bg-red-500/10 rounded-lg transition-all duration-200 group border border-transparent hover:border-red-500/20"
  }
} as const;
