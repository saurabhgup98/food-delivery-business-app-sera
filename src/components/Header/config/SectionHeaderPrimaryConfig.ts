// Size configurations for SectionHeaderPrimary component
export const SIZE_CONFIG = {
    small: {
        iconSize: 'w-8 h-8',
        iconTextSize: 'text-sm',
        headingSize: 'text-sm',
        subHeadingSize: 'text-xs',
        padding: 'px-4 py-3'
    },
    medium: {
        iconSize: 'w-10 h-10',
        iconTextSize: 'text-lg',
        headingSize: 'text-base',
        subHeadingSize: 'text-xs',
        padding: 'px-4 py-4'
    },
    large: {
        iconSize: 'w-12 h-12',
        iconTextSize: 'text-xl',
        headingSize: 'text-lg',
        subHeadingSize: 'text-sm',
        padding: 'px-6 py-4'
    }
} as const;

// Dot color configurations for SectionHeaderPrimary component
export const DOT_COLOR_CONFIG = {
    green: {
        dot: 'bg-emerald-400',
        shadow: 'shadow-emerald-400/70',
        text: 'text-emerald-400'
    },
    blue: {
        dot: 'bg-blue-400',
        shadow: 'shadow-blue-400/70',
        text: 'text-blue-400'
    },
    amber: {
        dot: 'bg-amber-400',
        shadow: 'shadow-amber-400/70',
        text: 'text-amber-400'
    },
    rose: {
        dot: 'bg-rose-400',
        shadow: 'shadow-rose-400/70',
        text: 'text-rose-400'
    },
    purple: {
        dot: 'bg-purple-400',
        shadow: 'shadow-purple-400/70',
        text: 'text-purple-400'
    },
    emerald: {
        dot: 'bg-emerald-400',
        shadow: 'shadow-emerald-400/70',
        text: 'text-emerald-400'
    }
} as const;