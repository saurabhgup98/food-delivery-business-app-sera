// PrimarySelectDropdown Styles
// Industry-standard dropdown component styles

export const PRIMARY_SELECT_DROPDOWN_STYLES = {
  // Base container styles
  container: {
    base: "relative w-full",
    disabled: "opacity-50 pointer-events-none"
  },

  // Trigger button styles
  trigger: {
    base: "w-full flex items-center justify-between px-3 py-2 text-left bg-transparent border border-white/20 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sera-pink/50 focus:border-sera-pink/50",
    hover: "hover:border-white/40 hover:bg-white/5",
    focus: "focus:border-sera-pink/50 focus:ring-2 focus:ring-sera-pink/20",
    disabled: "cursor-not-allowed opacity-50",
    sizes: {
      sm: "px-2 py-1.5 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3 text-lg"
    },
    variants: {
      default: "bg-transparent border-white/20 text-white",
      outline: "bg-transparent border-2 border-white/30 text-white",
      filled: "bg-white/10 border-white/20 text-white"
    }
  },

  // Content area styles
  content: {
    base: "text-white",
    placeholder: "text-white/60",
    selected: "text-white"
  },

  // Icon styles
  icon: {
    left: "absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 pointer-events-none",
    right: "absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 pointer-events-none",
    arrow: "w-4 h-4 transition-transform duration-200 ease-in-out",
    arrowOpen: "rotate-180",
    sizes: {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5"
    }
  },

  // Dropdown panel styles
  panel: {
    base: "absolute z-[9999] w-full mt-1 bg-black border border-white/20 rounded-lg shadow-xl overflow-hidden",
    animate: "animate-in slide-in-from-top-2 duration-200",
    maxHeight: "max-h-60 overflow-y-auto",
    scrollbar: "scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent hover:scrollbar-thumb-white/20"
  },

  // Option styles
  option: {
    base: "px-3 py-2 text-sm text-white cursor-pointer transition-colors duration-150 ease-in-out flex items-center space-x-2",
    hover: "hover:bg-white/10",
    selected: "bg-sera-pink/20 text-sera-pink",
    disabled: "opacity-50 cursor-not-allowed hover:bg-transparent",
    focused: "bg-white/5",
    sizes: {
      sm: "px-2 py-1.5 text-xs",
      md: "px-3 py-2 text-sm",
      lg: "px-4 py-3 text-base"
    }
  },

  // Search input styles
  search: {
    base: "w-full px-3 py-2 text-sm bg-transparent border-b border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-sera-pink/50",
    container: "sticky top-0 bg-black border-b border-white/20"
  },

  // Clear button styles
  clear: {
    base: "absolute right-8 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60 hover:text-white transition-colors duration-150",
    button: "p-0.5 rounded-full hover:bg-white/10 transition-colors duration-150"
  },

  // Empty state styles
  empty: {
    base: "px-3 py-4 text-sm text-white/60 text-center",
    icon: "w-8 h-8 mx-auto mb-2 text-white/40"
  },

  // Loading state styles
  loading: {
    base: "px-3 py-4 text-sm text-white/60 text-center",
    spinner: "w-4 h-4 mx-auto animate-spin text-white/60"
  },

  // Animation classes
  animation: {
    enter: "animate-in slide-in-from-top-2 duration-200",
    exit: "animate-out slide-out-to-top-2 duration-150",
    option: "transition-colors duration-150 ease-in-out"
  }
} as const;

// Helper function to get size-specific classes
export const getSizeClasses = (size: 'sm' | 'md' | 'lg') => ({
  trigger: PRIMARY_SELECT_DROPDOWN_STYLES.trigger.sizes[size],
  option: PRIMARY_SELECT_DROPDOWN_STYLES.option.sizes[size],
  icon: PRIMARY_SELECT_DROPDOWN_STYLES.icon.sizes[size]
});

// Helper function to get variant-specific classes
export const getVariantClasses = (variant: 'default' | 'outline' | 'filled') => 
  PRIMARY_SELECT_DROPDOWN_STYLES.trigger.variants[variant];
