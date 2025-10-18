export interface MetricCardPrimaryProps {
  icon: string;
  title: string;
  subtitle: string;
  value: string;
  change: string;
  color: 'emerald' | 'blue' | 'amber' | 'rose' | 'purple';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export interface MetricCardData {
  icon: string;
  title: string;
  subtitle: string;
  value: string;
  change: string;
  color: 'emerald' | 'blue' | 'amber' | 'rose' | 'purple';
}

export interface MetricCardStyles {
  container: string;
  icon: string;
  title: string;
  subtitle: string;
  value: string;
  change: string;
  textRight: string;
}

