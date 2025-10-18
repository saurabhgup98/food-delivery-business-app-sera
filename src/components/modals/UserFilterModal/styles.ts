// User Filter Modal Styles
// All CSS classes for UserFilterModal in one place

export const USER_FILTER_MODAL_STYLES = {
  // Base modal styles
  base: {
    overlay: "fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in",
    container: "bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-pink/40 rounded-3xl shadow-2xl shadow-sera-pink/20 w-full max-w-md h-[75vh] flex flex-col animate-slide-up mt-16",
    content: "p-6 space-y-6 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent",
    footer: "bg-gradient-to-r from-dark-700/90 to-dark-600/90 border-t border-white/20 rounded-b-3xl p-6 flex-shrink-0"
  },

  // Header styles
  header: {
    container: "rounded-t-3xl",
    icon: "w-8 h-8"
  },

  // Content section styles
  content: {
    section: "animate-fade-in-up mb-6",
    label: "block text-white font-semibold text-sm mb-3 flex items-center",
    labelAccent: "w-1 h-4 bg-gradient-to-b from-sera-pink to-sera-orange rounded-full mr-3"
  },

  // Filter button styles
  filterButtons: {
    container: "grid gap-2",
    gridCols2: "grid-cols-2",
    gridCols1: "grid-cols-1",
    button: "group relative p-3 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-h-[44px]",
    selected: {
      status: "bg-gradient-to-r from-sera-pink/20 to-sera-pink/10 border-sera-pink/60 text-sera-pink shadow-lg shadow-sera-pink/20",
      role: "bg-gradient-to-r from-sera-blue/20 to-sera-blue/10 border-sera-blue/60 text-sera-blue shadow-lg shadow-sera-blue/20"
    },
    unselected: "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/40 hover:text-white",
    text: "text-sm font-medium relative z-10",
    pulse: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl animate-pulse"
  },

  // Select dropdown styles
  select: {
    container: "relative mt-1",
    input: "w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white focus:border-sera-pink/50 focus:ring-4 focus:ring-sera-pink/20 transition-all duration-300 appearance-none cursor-pointer hover:bg-white/15",
    option: "bg-dark-800 text-white",
    arrow: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none",
    arrowIcon: "w-5 h-5 text-gray-400"
  },

  // Search input styles
  search: {
    container: "h-10 mt-1"
  },

  // Footer styles
  footer: {
    container: "flex items-center justify-between space-x-4 h-10",
    buttonContainer: "flex-1 h-full"
  },

  // Animation delays
  animation: {
    delay: (index: number) => `${index * 100}ms`
  }
} as const;

// Select Button Filter Styles Configuration
export const getSelectBtnFilterStyles = (key: string, isSelected: boolean) => {
  const baseConfig = {
    textColor: 'text-gray-300',
    textHoverColor: 'hover:text-white',
    bgColor: 'bg-white/5',
    hoverBgColor: 'hover:bg-white/10',
    border: 'border-white/20',
    hoverBorderColor: 'hover:border-white/40'
  };

  if (isSelected) {
    if (key === 'status') {
      return {
        textColor: 'text-sera-pink',
        textHoverColor: 'hover:text-sera-pink',
        bgColor: 'bg-gradient-to-r from-sera-pink/20 to-sera-pink/10',
        hoverBgColor: 'hover:from-sera-pink/30 hover:to-sera-pink/20',
        border: 'border-sera-pink/60',
        hoverBorderColor: 'hover:border-sera-pink/80'
      };
    } else if (key === 'role') {
      return {
        textColor: 'text-sera-blue',
        textHoverColor: 'hover:text-sera-blue',
        bgColor: 'bg-gradient-to-r from-sera-blue/20 to-sera-blue/10',
        hoverBgColor: 'hover:from-sera-blue/30 hover:to-sera-blue/20',
        border: 'border-sera-blue/60',
        hoverBorderColor: 'hover:border-sera-blue/80'
      };
    }
  }

  return baseConfig;
};

// Filter section classes generator
export const getUserFilterSectionClasses = (_filterType: string, gridCols?: number) => {
  const baseClasses = USER_FILTER_MODAL_STYLES.filterButtons.container;
  const gridClasses = gridCols === 2 ? USER_FILTER_MODAL_STYLES.filterButtons.gridCols2 : USER_FILTER_MODAL_STYLES.filterButtons.gridCols1;
  return `${baseClasses} ${gridClasses}`;
};

