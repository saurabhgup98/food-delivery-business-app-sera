export const USERS_PAGE_STYLES = {
  // Main container styles
  main: {
    container: "h-[calc(100vh-80px)] overflow-y-auto",
    scrollContainer: "h-full overflow-y-auto custom-scrollbar",
    content: "p-3 sm:p-4 md:p-6"
  },

  // Introduction section styles
  intro: {
    container: "mb-3 sm:mb-4",
    card: "relative bg-gradient-to-br from-dark-900/95 via-dark-800/90 to-dark-700/85 border border-sera-pink/30 rounded-xl p-3 backdrop-blur-sm shadow-xl shadow-sera-pink/10 overflow-hidden",
    animatedBg: "absolute inset-0 bg-gradient-to-r from-sera-pink/5 via-transparent to-sera-orange/5 animate-pulse",
    decorativeCircle1: "absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-sera-pink/10 to-transparent rounded-full blur-xl",
    decorativeCircle2: "absolute bottom-0 left-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-tr from-sera-orange/10 to-transparent rounded-full blur-xl",
    content: "relative flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3"
  },

  // Icon styles
  icon: {
    container: "w-8 h-8 bg-gradient-to-br from-sera-pink/40 to-sera-pink/20 rounded-lg flex items-center justify-center shadow-lg border border-sera-pink/40 backdrop-blur-sm relative overflow-hidden",
    animatedBg: "absolute inset-0 bg-gradient-to-r from-sera-pink/20 to-transparent animate-pulse",
    emoji: "text-sera-pink text-sm relative z-10 drop-shadow-sm"
  },

  // Text content styles
  text: {
    container: "flex-1",
    title: "text-base sm:text-lg font-bold text-white drop-shadow-sm tracking-wide",
    subtitle: "text-gray-400 text-xs tracking-wide"
  },

  // Status indicators styles
  status: {
    container: "flex items-center space-x-2 sm:space-x-3",
    online: {
      container: "flex items-center space-x-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-2 py-1 backdrop-blur-sm",
      dot: "w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400/50",
      text: "text-emerald-400 text-xs font-medium tracking-wide"
    },
    live: {
      container: "flex items-center space-x-1 bg-sera-pink/10 border border-sera-pink/30 rounded-full px-2 py-1 backdrop-blur-sm",
      dot: "w-3 h-3 bg-sera-pink rounded-full animate-pulse shadow-sm shadow-sera-pink/50",
      text: "text-sera-pink text-xs font-medium tracking-wide"
    }
  },

  // Grid layout styles
  grid: {
    container: "grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6",
    leftSection: {
      base: "md:col-span-12 lg:col-span-3",
      sticky: "lg:sticky lg:top-6 lg:h-fit"
    },
    middleSection: "md:col-span-12 lg:col-span-6",
    rightSection: {
      base: "md:col-span-12 lg:col-span-3",
      sticky: "lg:sticky lg:top-6 lg:h-fit"
    }
  },

  // Sticky behavior styles
  sticky: {
    container: "relative"
  }
} as const;

// Helper function to get dynamic classes based on sticky state
export const getUsersPageClasses = (isSticky: boolean) => ({
  stickyContainer: isSticky ? USERS_PAGE_STYLES.sticky.container : '',
  leftSection: `${USERS_PAGE_STYLES.grid.leftSection.base} ${isSticky ? USERS_PAGE_STYLES.grid.leftSection.sticky : ''}`,
  rightSection: `${USERS_PAGE_STYLES.grid.rightSection.base} ${isSticky ? USERS_PAGE_STYLES.grid.rightSection.sticky : ''}`
});
