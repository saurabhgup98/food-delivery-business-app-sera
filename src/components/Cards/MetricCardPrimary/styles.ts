// MetricCardPrimary Styles Configuration

export interface SizeConfig {
  container: string;
  iconSize: string;
  iconTextSize: string;
  titleSize: string;
  subtitleSize: string;
  valueSize: string;
  changeSize: string;
}

export const sizeConfigurations: Record<'small' | 'medium' | 'large', SizeConfig> = {
  small: {
    container: 'p-2',
    iconSize: 'w-6 h-6',
    iconTextSize: 'text-xs',
    titleSize: 'text-xs',
    subtitleSize: 'text-xs',
    valueSize: 'text-sm',
    changeSize: 'text-xs'
  },
  medium: {
    container: 'p-3',
    iconSize: 'w-8 h-8',
    iconTextSize: 'text-sm',
    titleSize: 'text-sm',
    subtitleSize: 'text-xs',
    valueSize: 'text-lg',
    changeSize: 'text-xs'
  },
  large: {
    container: 'p-4',
    iconSize: 'w-10 h-10',
    iconTextSize: 'text-base',
    titleSize: 'text-base',
    subtitleSize: 'text-sm',
    valueSize: 'text-xl',
    changeSize: 'text-sm'
  }
};

export const baseStyles = {
  container: 'flex items-center justify-between rounded-lg transition-all duration-300',
  iconContainer: 'rounded-lg flex items-center justify-center',
  title: 'text-white font-medium',
  subtitle: 'font-normal',
  value: 'text-white font-bold',
  change: 'font-normal',
  textRight: 'text-right'
};

export const colorVariants = {
  emerald: {
    background: 'bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 hover:from-emerald-500/15 hover:to-emerald-600/10',
    border: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/20',
    iconText: 'text-emerald-400',
    subtitle: 'text-emerald-400',
    change: 'text-emerald-400'
  },
  blue: {
    background: 'bg-gradient-to-r from-blue-500/10 to-blue-600/5 hover:from-blue-500/15 hover:to-blue-600/10',
    border: 'border-blue-500/20',
    iconBg: 'bg-blue-500/20',
    iconText: 'text-blue-400',
    subtitle: 'text-blue-400',
    change: 'text-blue-400'
  },
  amber: {
    background: 'bg-gradient-to-r from-amber-500/10 to-amber-600/5 hover:from-amber-500/15 hover:to-amber-600/10',
    border: 'border-amber-500/20',
    iconBg: 'bg-amber-500/20',
    iconText: 'text-amber-400',
    subtitle: 'text-amber-400',
    change: 'text-amber-400'
  },
  rose: {
    background: 'bg-gradient-to-r from-rose-500/10 to-rose-600/5 hover:from-rose-500/15 hover:to-rose-600/10',
    border: 'border-rose-500/20',
    iconBg: 'bg-rose-500/20',
    iconText: 'text-rose-400',
    subtitle: 'text-rose-400',
    change: 'text-rose-400'
  },
  purple: {
    background: 'bg-gradient-to-r from-purple-500/10 to-purple-600/5 hover:from-purple-500/15 hover:to-purple-600/10',
    border: 'border-purple-500/20',
    iconBg: 'bg-purple-500/20',
    iconText: 'text-purple-400',
    subtitle: 'text-purple-400',
    change: 'text-purple-400'
  }
};

