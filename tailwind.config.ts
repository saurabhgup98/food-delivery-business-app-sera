import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Add this to catch all files
  ],
  theme: {
    extend: {
      colors: {
        'sera-yellow': '#FFD700',
        'sera-blue': '#3B82F6',
        'sera-pink': '#EC4899',
        'sera-orange': '#F97316',
        'dark-900': '#0F172A',
        'dark-800': '#1E293B',
        'dark-700': '#334155',
        'dark-600': '#475569',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
