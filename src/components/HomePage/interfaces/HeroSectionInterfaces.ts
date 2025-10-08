export interface StatItem {
  value: string;
  label: string;
  color: string;
}

export interface ButtonProps {
  text: string;
  bgColor: string;
  hoverBgColor: string;
  textColor: string;
  hoverTextColor: string;
}

export interface OutlineButtonProps {
  text: string;
  href: string;
  borderColor: string;
  hoverBgColor: string;
  textColor: string;
  hoverTextColor: string;
}

export interface HeroSectionConfig {
  welcomeText: string;
  title: {
    prefix: string;
    brand: string;
  };
  subtitle: string;
  primaryButton: ButtonProps;
  secondaryButton: OutlineButtonProps;
  stats: StatItem[];
}