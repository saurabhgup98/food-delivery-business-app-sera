// InputConstants.ts - Constants and styling for generic input components

export const INPUT_STYLES = {
  // Base input styling
  BASE_INPUT: 'w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sera-blue/50 focus:ring-1 focus:ring-sera-blue/10 transition-all duration-500 ease-out text-sm font-medium backdrop-blur-sm hover:bg-slate-800/80',
  
  // Input with icon (left)
  INPUT_WITH_LEFT_ICON: 'w-full pl-12 pr-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sera-blue/50 focus:ring-1 focus:ring-sera-blue/10 transition-all duration-500 ease-out text-sm font-medium backdrop-blur-sm hover:bg-slate-800/80',
  
  // Input with icon (right) or password toggle
  INPUT_WITH_RIGHT_ICON: 'w-full px-4 pr-12 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sera-blue/50 focus:ring-1 focus:ring-sera-blue/10 transition-all duration-500 ease-out text-sm font-medium backdrop-blur-sm hover:bg-slate-800/80',
  
  // Input with both icons
  INPUT_WITH_BOTH_ICONS: 'w-full pl-12 pr-12 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sera-blue/50 focus:ring-1 focus:ring-sera-blue/10 transition-all duration-500 ease-out text-sm font-medium backdrop-blur-sm hover:bg-slate-800/80',
  
  // Label styling
  LABEL: 'block text-gray-200 text-sm font-semibold mb-2 tracking-wide',
  
  // Error styling
  ERROR: 'text-red-400 text-sm font-medium mt-1',
  
  // Success styling
  SUCCESS: 'text-green-400 text-sm font-medium mt-1',
  
  // Icon container styling
  ICON_CONTAINER: 'absolute inset-y-0 flex items-center pointer-events-none',
  ICON_LEFT: 'absolute left-0 pl-3 flex items-center pointer-events-none',
  ICON_RIGHT: 'absolute right-0 pr-3 flex items-center',
  
  // Password toggle button styling
  PASSWORD_TOGGLE: 'absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-110 flex items-center justify-center',
  
  // Clickable icon styling
  CLICKABLE_ICON: 'absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-110 cursor-pointer',
} as const;

export const INPUT_STATES = {
  // Error state
  ERROR_BORDER: 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20',
  
  // Success state
  SUCCESS_BORDER: 'border-green-500/50 focus:border-green-500/50 focus:ring-green-500/20',
  
  // Disabled state
  DISABLED: 'opacity-50 cursor-not-allowed bg-slate-800/30',
  
  // Focused state
  FOCUSED: 'focus:border-sera-blue/50 focus:ring-2 focus:ring-sera-blue/20',
} as const;

export const INPUT_SIZES = {
  SMALL: 'px-3 py-2 text-xs',
  MEDIUM: 'px-4 py-3 text-sm',
  LARGE: 'px-5 py-4 text-base',
} as const;

export const INPUT_VARIANTS = {
  DEFAULT: 'bg-slate-800/60 border-slate-600/50',
  OUTLINED: 'bg-transparent border-2 border-slate-600/50',
  FILLED: 'bg-slate-700/80 border-slate-600/30',
} as const;
