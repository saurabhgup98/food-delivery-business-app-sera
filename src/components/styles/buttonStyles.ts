// Centralized Button Styles
// All CSS classes for buttons in one place

export const BUTTON_STYLES = {
    // Base button styles
    base: {
        container: "w-full h-full flex items-center justify-center rounded-lg transition-all duration-200 font-medium",
        disabled: "opacity-50 cursor-not-allowed",
        enabled: "hover:scale-105 cursor-pointer"
    },

    // Icon button styles
    icon: {
        container: "w-full h-full flex items-center justify-center rounded-lg transition-all duration-200",
        space: "space-x-2",
        icon: "flex-shrink-0",
        text: "whitespace-nowrap"
    },

  // Color variants
  colors: {
    // Solid buttons
    solid: {
      primary: "bg-sera-blue hover:bg-sera-blue/80",
      yellow: "bg-sera-yellow hover:bg-sera-yellow/90",
      pink: "bg-gradient-to-r from-sera-pink to-sera-orange hover:from-sera-pink/90 hover:to-sera-orange/90",
      red: "bg-red-600 hover:bg-red-700"
    },
    
    // Transparent buttons
    transparent: {
      primary: "bg-transparent hover:bg-white/30",
      pink: "bg-pink-200/30 hover:bg-pink-200/40",
      white: "bg-white/10 hover:bg-white/20"
    },

    // Input backgrounds
    input: {
      white: "bg-white/10",
      whiteHover: "hover:bg-white/15"
    },

        // Text colors
        text: {
            white: "text-white",
            black: "text-black",
            dark: "text-dark-900",
            gray: "text-gray-400",
            pink: "text-sera-pink",
            yellow: "text-sera-yellow"
        },

        // Icon colors
        icon: {
            white: "text-white",
            black: "text-black",
            dark: "text-dark-900",
            gray: "text-gray-400",
            pink: "text-sera-pink",
            yellow: "text-sera-yellow"
        }
    },

  // Border styles
  borders: {
    none: "border-none",
    primary: "border-2 border-sera-blue/60 hover:border-sera-blue/80",
    yellow: "border-2 border-sera-yellow hover:border-sera-yellow",
    white: "border-2 border-white/30 hover:border-white/50",
    whiteLight: "border-2 border-white/20 hover:border-white/40",
    pink: "border-2 border-sera-pink/60 hover:border-sera-pink/80",
    pinkLight: "border-2 border-sera-pink/50"
  },

    // Padding variants
    padding: {
        small: "px-3 py-2",
        medium: "px-4 py-3",
        large: "px-6 py-4"
    },

    // Size variants
    sizes: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg"
    }
} as const;